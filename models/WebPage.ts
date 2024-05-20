import { IItem, IItemAndImg, IItemAndImgList, IItemList, IWebMainSection, Img, TextContent } from "@interfaces/common";
import { IWebLanguageContent, IWebLanguages, IWebPageData } from "@interfaces/webPage";
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

const howWeWorkSchema = new Schema<IItemList>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [listItemSchema],
});

const weWorkWithSchema = new Schema<IItemList>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [listItemSchema],
});

const advantagesListItem = new Schema<IItemAndImg>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgURL: { type: String, required: true },
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

const languageContentSchema = new Schema<IWebLanguageContent>({
  pageName: { type: String, required: true },
  main: { type: mainSectionSchema, required: true },
  advantages: { type: advantagesSchema, required: true },
  weWorkWith: { type: weWorkWithSchema, required: true },
  howWeWork: { type: howWeWorkSchema, required: true },
});

const languagesSchema = new Schema<IWebLanguages>({
  ru: { type: languageContentSchema, required: true },
  en: { type: languageContentSchema, required: true },
});

const WebPageSchema = new Schema<IWebPageData>({
  languages: { type: languagesSchema, required: true },
});

const WebPage = models.WebPage || model<IWebPageData>("WebPage", WebPageSchema);

export default WebPage;
