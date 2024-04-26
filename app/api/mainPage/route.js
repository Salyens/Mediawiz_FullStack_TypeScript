import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import _ from "lodash";
import { UTApi } from "uploadthing/server";
import MainPage from "@models/MainPage";

export async function POST(req) {
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

export async function PATCH(req) {
  const utapi = new UTApi();
  const formData = await req.formData();
  const files = [];

  const filePaths = [];
  const filesToDeletePaths = [];
  const jsonData = JSON.parse(formData.get("jsonData"));
  const allFiles = formData.getAll("files");

  for (const file of allFiles) {
    const path = file.name;
    files.push(file);

    filePaths.push(path);
    const url = _.get(jsonData, path);
    const trimmedPath = url.replace("https://utfs.io/f/", "");
    filesToDeletePaths.push(trimmedPath);
  }

  try {
    console.log("filesToDeletePaths: ", filesToDeletePaths);
    if (filesToDeletePaths.length) await utapi.deleteFiles(filesToDeletePaths);

    const uploadResponses = await utapi.uploadFiles(files);
    uploadResponses.forEach((uploadResponse, index) => {
      const filePath = filePaths[index];
      const newUrl = uploadResponse.data.url;
      _.set(jsonData, filePath, newUrl);
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
        updates: uploadResponses.map((res, idx) => ({
          filePath: filePaths[idx],
          newUrl: res.data.url,
        })),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
