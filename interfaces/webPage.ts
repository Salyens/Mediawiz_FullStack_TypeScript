import { ForAdmin, ForAdminHeader, Img, Text } from "@interfaces";

export interface IMainMedia {
  forAdminHeader: ForAdminHeader;
  photo: Img;
}

export interface IWebMainSection {
  forAdminHeader: ForAdminHeader;
  media: IMainMedia;
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

export interface IWebLanguages {
  ru: IWebLanguageContent;
  en?: IWebLanguageContent;
}


export interface IWebPageData {
  languages: IWebLanguages;
}

