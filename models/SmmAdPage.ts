import { IItem, IItemList, Img, TextContent } from "@interfaces/common";
import { ISmmAdLanguageContent, ISmmAdLanguages, ISmmAdPageData } from "@interfaces/smmAd";
import {
  IQuotesList,
  IResultItem,
  IResultList,
  ISmmMainSection,
  ISmmQuoteItem,
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

const quoteItemSchema = new Schema<ISmmQuoteItem>({
  description: { type: String, required: true },
});

const quotesSchema = new Schema<IQuotesList>({
  forAdminHeader: { type: String, required: true },
  list: [quoteItemSchema],
});

const resultItemSchema = new Schema<IResultItem>({
  partOne: { type: String, required: true },
  partTwo: { type: String, required: true },
});

const resultSchema = new Schema<IResultList>({
  forAdminHeader: { type: String, required: true },
  list: [resultItemSchema],
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

const languageContentSchema = new Schema<ISmmAdLanguageContent>({
  pageName: { type: String, required: true },
  main: { type: mainSectionSchema, required: true },
  weWorkWith: { type: weWorkWithSchema, required: true },
  results: { type: resultSchema, required: true },
  quotes: { type: quotesSchema, required: true },
});

const languagesSchema = new Schema<ISmmAdLanguages>({
  ru: { type: languageContentSchema, required: true },
  en: { type: languageContentSchema, required: true },
});

const SmmAdPageSchema = new Schema<ISmmAdPageData>({
  languages: { type: languagesSchema, required: true },
});

const SmmAdPage = models.SmmAdPage || model<ISmmAdPageData>("SmmAdPage", SmmAdPageSchema);

export default SmmAdPage;
