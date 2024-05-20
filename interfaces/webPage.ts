import { ForAdmin, ForAdminHeader, Img, Text } from "@interfaces/mainPage";

export interface IMainMedia {
  forAdminHeader: ForAdminHeader;
  photo: Img;
}

export interface IOneGoal {
  partOne: string;
  and: string;
  partTwo: string;
}

export interface IWebMainSection {
  forAdminHeader: ForAdminHeader;
  img: Img;
  header_1: { forAdmin: ForAdmin; text: Text };
  header_2: { forAdmin: ForAdmin; text: Text };
  description: { forAdmin: ForAdmin; text: Text };
}

export interface IAdvantageItem {
  title: string;
  description: string;
  imgURL: string;
}

export interface IItem {
  title: string;
  description: string;
}

export interface IAdvantages {
  forAdminHeader: ForAdminHeader;
  header: string;
  list: IAdvantageItem[];
}
export interface IWeWorkWith {
  forAdminHeader: ForAdminHeader;
  header: string;
  list: IItem[];
}

export interface IHowWeWork {
  forAdminHeader: ForAdminHeader;
  header: string;
  list: IItem[];
}

export interface IWebLanguageContent {
  pageName: string;
  main: IWebMainSection;
  advantages: IAdvantages;
  weWorkWith: IWeWorkWith;
  howWeWork: IHowWeWork;
}

export interface IWebAdLanguageContent {
  pageName: string;
  main: IWebMainSection;
  advantages: IAdvantages;
  howAdWorks: IAdvantages;
  howWeWork: IHowWeWork;
}

export interface IWebLanguages {
  ru: IWebLanguageContent;
  en?: IWebLanguageContent;
}

export interface IWebAdLanguages {
  ru: IWebAdLanguageContent;
  en: IWebAdLanguageContent;
}

export interface IWebPageData {
  languages: IWebLanguages;
}

export interface IWebAdPageData {
  languages: IWebAdLanguages;
}
