import { IItem, IItemList, Img, TextContent } from "@interfaces/common";
import {
  IProjectItem,
  IProjectsList,
  IQuoteItem,
  IQuotesList,
  IResult,
  ISmmLanguageContent,
  ISmmLanguages,
  ISmmMainSection,
  ISmmPageData,
} from "@interfaces/smmPage";
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

const projectItemSchema = new Schema<IProjectItem>({
  title: { type: String, required: true },
  imgURL: { type: String, required: true },
});

const quoteItemSchema = new Schema<IQuoteItem>({
  description: { type: String, required: true },
});

const quotesSchema = new Schema<IQuotesList>({
  forAdminHeader: { type: String, required: true },
  list: [quoteItemSchema],
});

const projectsSchema = new Schema<IProjectsList>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [projectItemSchema],
});

const resultSchema = new Schema<IResult>({
  forAdminHeader: { type: String, required: true },
  partOne: { type: String, required: true },
  partTwo: { type: String, required: true },
});

const weWorkWithSchema = new Schema<IItemList>({
  forAdminHeader: { type: String, required: true },
  header: { type: String, required: true },
  list: [listItemSchema],
});

const mainSectionSchema = new Schema<ISmmMainSection>({
  forAdminHeader: { type: String, required: true },
  img: { type: imgSchema, required: true },
  header: { type: TextSchema, required: true },
  description: { type: TextSchema, required: true },
});

const languageContentSchema = new Schema<ISmmLanguageContent>({
  pageName: { type: String, required: true },
  main: { type: mainSectionSchema, required: true },
  weWorkWith: { type: weWorkWithSchema, required: true },
  result: { type: resultSchema, required: true },
  myProjects: { type: projectsSchema, required: true },
  quotes: { type: quotesSchema, required: true },
});

const languagesSchema = new Schema<ISmmLanguages>({
  ru: { type: languageContentSchema, required: true },
  en: { type: languageContentSchema, required: true },
});

const SmmPageSchema = new Schema<ISmmPageData>({
  languages: { type: languagesSchema, required: true },
});

const SmmPage = models.SmmPage || model<ISmmPageData>("SmmPage", SmmPageSchema);

export default SmmPage;
