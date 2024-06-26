import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import _ from "lodash";
import { UTApi } from "uploadthing/server";
import { Model, Document } from "mongoose";

interface File extends Blob {
  size: number;
  type: string;
  name: string;
  lastModified: number;
  customId?: string | null;
}

export async function handlePost<T extends Document>(Model: Model<T>, req: Request) {
  try {
    await connectToDB();
    const info = await req.json();
    await Model.create(info);
    return NextResponse.json({ message: "User saved" }, { status: 200 });
  } catch (error) {
    console.error("Error during POST operation:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function handleGet<T extends Document>(Model: Model<T>) {
  try {
    await connectToDB();
    const data = await Model.findOne();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error during GET operation:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function handlePatch<T extends Document>(Model: Model<T>, req: Request) {
  const utapi = new UTApi();
  const formData = await req.formData();
  const files: File[] = formData.getAll("files") as File[];
  const filePaths: string[] = files.map((file) => file.name);
  const jsonData = JSON.parse(formData.get("jsonData") as string);

  try {
    const filesToDeletePaths = files.map((file) =>
      _.get(jsonData, file.name).replace("https://utfs.io/f/", "")
    );
    if (filesToDeletePaths.length) await utapi.deleteFiles(filesToDeletePaths);

    const uploadResponses = await utapi.uploadFiles(files as File[]);
    uploadResponses.forEach((uploadResponse, index) => {
      if (uploadResponse && uploadResponse.data) {
        const filePath = filePaths[index];
        const newUrl = uploadResponse.data.url;
        const basePath = filePath.split(".").slice(2).join(".");
        _.set(jsonData, `languages.en.${basePath}`, newUrl);
        _.set(jsonData, `languages.ru.${basePath}`, newUrl);
      }
    });

    await connectToDB();
    const page = await Model.findOne();

    if (!page) {
      console.error("Page not found");
      return NextResponse.json({ message: "Page not found" }, { status: 404 });
    }

    _.assign(page, jsonData);

    filePaths.forEach((filePath) => {
      const parentPath = filePath.includes(".")
        ? filePath.split(".").slice(0, -1).join(".")
        : filePath;
      page.markModified(`languages.en.${parentPath.split(".").slice(2).join(".")}`);
      page.markModified(`languages.ru.${parentPath.split(".").slice(2).join(".")}`);
    });

    await page.save();

    return NextResponse.json(
      {
        message: "Data successfully updated",
        updates: uploadResponses
          .filter((ur) => ur.data !== null)
          .map((res, idx) => ({
            filePath: filePaths[idx],
            newUrl: res.data ? res.data.url : null,
          })),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during PATCH operation:", error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
