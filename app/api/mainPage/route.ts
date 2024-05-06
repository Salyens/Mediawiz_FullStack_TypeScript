import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import _ from "lodash";
import { UTApi } from "uploadthing/server";
import MainPage from "@models/MainPage";

interface File {
  size: number;
  type: string;
  name: string;
  lastModified: number;
}

interface File extends Blob {
  size: number;
  type: string;
  name: string;
  lastModified: number;
  customId?: string | null;
}

export async function POST(req: Request) {
  try {
    await connectToDB();
    const info = await req.json();

    await MainPage.create(info);

    return NextResponse.json({ message: "User saved" }, { status: 200 });
  } catch (error) {
    console.log("error: ", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const data = await MainPage.findOne();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
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
        _.set(jsonData, filePath, newUrl);
      }
    });

    await connectToDB();
    const page = await MainPage.findOne();

    if (!page) {
      console.error("Page not found");
      return NextResponse.json({ message: "Page not found" }, { status: 404 });
    }

    _.assign(page, jsonData);

    filePaths.forEach((filePath) => {
      const parentPath = filePath.includes(".")
        ? filePath.split(".").slice(0, -1).join(".")
        : filePath;
      page.markModified(parentPath);
    });

    await page.save();

    return NextResponse.json(
      {
        message: "Data successfully updated",
        updates: uploadResponses
          .filter((ur) => ur.data !== null)
          .map((res, idx) => {
            return {
              filePath: filePaths[idx],
              newUrl: res.data ? res.data.url : null,
            };
          }),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during PATCH operation:", error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
