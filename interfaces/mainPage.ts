import { ForAdmin, ForAdminHeader, Img, ImgURL, Text, TextContent } from "./common";

export interface OffersList {
  header: string;
  description: string;
  href: string;
}

export interface Offers {
  forAdmin: string;
  offersList: OffersList[];
}

export interface WeOfferSection {
  forAdminHeader: ForAdminHeader;
  title: TextContent;
  offers: Offers;
}

export interface Video {
  forAdmin: string;
  videoURL: string;
}

export interface MainSection {
  forAdminHeader: ForAdminHeader;
  img: Img;
  header_1: { forAdmin: ForAdmin; text: Text };
  header_2: { forAdmin: ForAdmin; text: Text };
  description_1: { forAdmin: ForAdmin; text: Text };
  description_2: { forAdmin: ForAdmin; text: Text };
}

export interface QuoteItem {
  name: string;
  imgURL?: ImgURL;
  description: string;
  href?:string
}

export interface QuotesList {
  forAdminHeader: ForAdminHeader;
  quotesList: QuoteItem[];
}

export interface GoalsList {
  partOne: string;
  and: string;
  partTwo: string;
}

export interface Goals {
  forAdmin: string;
  goalsList: GoalsList[];
}

export interface OurGoals {
  forAdminHeader: ForAdminHeader;
  ourPhoto: Img;
  goals: Goals;
}

export interface LanguageContent {
  pageName: string;
  main: MainSection;
  weOffer: WeOfferSection;
  quotes: QuotesList;
  ourGoals: OurGoals;
}

export interface Languages {
  ru: LanguageContent;
  en: LanguageContent;
}

export interface MainPageData {
  languages: Languages;
}


