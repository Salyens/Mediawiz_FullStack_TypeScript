import { Img, Languages, MainPageData, TextContent } from "@interfaces";
import { IAdvantageItem, IAdvantages, IHowWeWork, IItem, IMainMedia, IWeWorkWith, IWebLanguageContent, IWebMainSection } from "@interfaces/webPage";
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

const howWeWorkSchema = new Schema<IHowWeWork>({
    forAdminHeader: { type: String, required: true },
    header: { type: String, required: true },
    list: [listItemSchema],
  });

const weWorkWithSchema = new Schema<IWeWorkWith>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [listItemSchema],
});

const advantagesListItem = new Schema<IAdvantageItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgURL: { type: String, required: true },
});

const advantagesSchema = new Schema<IAdvantages>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [advantagesListItem],
});

const mainMediaSectionSchema = new Schema<IMainMedia>({
  forAdminHeader: { type: String, required: true },
  photo: { type: imgSchema, required: true },
});

const mainSectionSchema = new Schema<IWebMainSection>({
  forAdminHeader: { type: String, required: true },
  media: { type: mainMediaSectionSchema, required: true },
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

const languagesSchema = new Schema<Languages>({
  ru: { type: languageContentSchema, required: true },
  en: { type: languageContentSchema, required: true },
});

const WebPageSchema = new Schema<MainPageData>({
  languages: { type: languagesSchema, required: true },
});

const WebPage =
  models.WebPage || model<MainPageData>("WebPage", WebPageSchema);

export default WebPage;
