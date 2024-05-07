import {
  Goals,
  GoalsList,
  Img,
  LanguageContent,
  Languages,
  MainMedia,
  MainPageData,
  MainSection,
  Offers,
  OffersList,
  OurGoals,
  QuotesList,
  QuotesSection,
  TextContent,
  Video,
  WeOfferSection,
} from "@interfaces";
import { Schema, model, models } from "mongoose";

const offerListSchema = new Schema<OffersList>({
  header: { type: String, required: true },
  description: { type: String, required: true },
  href: { type: String, required: true },
});

const TextSchema = new Schema<TextContent>({
  forAdmin: String,
  text: String,
});

const imgSchema = new Schema<Img>({
  forAdmin: { type: String, required: true },
  imgURL: { type: String },
});

const OffersSchema = new Schema<Offers>({
  forAdmin: String,
  offersList: [offerListSchema],
});

const weOfferSectionSchema = new Schema<WeOfferSection>({
  forAdminHeader: { type: String, required: true },
  title: { type: TextSchema, required: true },
  offers: OffersSchema,
});

const quotesListSchema = new Schema<QuotesList>({
  name: { type: String, required: true },
  imgURL: { type: String },
  description: { type: String, required: true },
});

const quotesSectionSchema = new Schema<QuotesSection>({
  forAdminHeader: { type: String, required: true },
  quotesList: [quotesListSchema],
});

const goalsListSchema = new Schema<GoalsList>({
  partOne: { type: String, required: true },
  and: { type: String, required: true },
  partTwo: { type: String, required: true },
});

const goalsSchema = new Schema<Goals>({
  forAdmin: String,
  goalsList: [goalsListSchema],
});

const ourGoalsSectionSchema = new Schema<OurGoals>({
  forAdminHeader: { type: String, required: true },
  ourPhoto: { type: imgSchema, required: true },
  goals: goalsSchema,
});

const mainBGVideoSchema = new Schema<Video>({
  forAdmin: { type: String, required: true },
  videoURL: { type: String },
});

const mainMediaSectionSchema = new Schema<MainMedia>({
  forAdminHeader: { type: String, required: true },
  logo: { type: imgSchema, required: true },
  background: { type: mainBGVideoSchema, required: true },
});

const mainSectionSchema = new Schema<MainSection>({
  forAdminHeader: { type: String, required: true },
  media: { type: mainMediaSectionSchema, required: true },
  header_1: { type: TextSchema, required: true },
  header_2: { type: TextSchema, required: true },
  description_1: { type: TextSchema, required: true },
  description_2: { type: TextSchema, required: true },
});

const languageContentSchema = new Schema<LanguageContent>({
  pageName: { type: String, required: true },
  main: { type: mainSectionSchema, required: true },
  weOffer: { type: weOfferSectionSchema, required: true },
  quotes: { type: quotesSectionSchema, required: true },
  ourGoals: { type: ourGoalsSectionSchema, required: true },
});

const languagesSchema = new Schema<Languages>({
  ru: { type: languageContentSchema, required: true },
  en: { type: languageContentSchema, required: false },
});

const MainPageSchema = new Schema<MainPageData>({
  languages: { type: languagesSchema, required: true },
});

const MainPage =
  models.MainPage || model<MainPageData>("MainPage", MainPageSchema);

export default MainPage;