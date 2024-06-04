import {
  IItem,
  IItemAndImg,
  IItemAndImgList,
  IItemList,
  IWebMainSection,
  Img,
  TextContent,
} from "@interfaces/common";
import { IWebAdLanguageContent, IWebAdPageData } from "@interfaces/webAdPage";
import { Schema, model, models } from "mongoose";

const TextSchema = new Schema<TextContent>({
  forAdmin: String,
  text: String,
});

const imgSchema = new Schema<Img>({
  forAdmin: { type: String, required: true },
  imgURL: { type: String },
});

const listItemSchema = new Schema<IItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const advantagesListItem = new Schema<IItemAndImg>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgURL: { type: String, required: true },
  href: { type: String },
});

const howWeWorkSchema = new Schema<IItemList>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [listItemSchema],
});

const howAdWorksSchema = new Schema<IItemAndImgList>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [advantagesListItem],
});

const advantagesSchema = new Schema<IItemAndImgList>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [advantagesListItem],
});

const mainSectionSchema = new Schema<IWebMainSection>({
  forAdminHeader: { type: String, required: true },
  img: { type: imgSchema, required: true },
  header_1: { type: TextSchema, required: true },
  header_2: { type: TextSchema, required: true },
  description: { type: TextSchema, required: true },
});

const languageContentSchema = new Schema<IWebAdLanguageContent>({
  pageName: { type: String, required: true },
  main: { type: mainSectionSchema, required: true },
  advantages: { type: advantagesSchema, required: true },
  howAdWorks: { type: howAdWorksSchema, required: true },
  howWeWork: { type: howWeWorkSchema, required: true },
});

export interface Languages {
  ru: IWebAdLanguageContent;
  en: IWebAdLanguageContent;
}

const languagesSchema = new Schema<Languages>({
  ru: { type: languageContentSchema, required: true },
  en: { type: languageContentSchema, required: true },
});

const WebAdPageSchema = new Schema<IWebAdPageData>({
  languages: { type: languagesSchema, required: true },
});

const WebAdPage =
  models.WebAdPage || model<IWebAdPageData>("WebAdPage", WebAdPageSchema);

export default WebAdPage;
