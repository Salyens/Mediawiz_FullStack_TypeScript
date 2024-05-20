import { ForAdminHeader, IItemAndImgList, IItemList, IWebMainSection, Img } from "./common";

export interface IMainMedia {
  forAdminHeader: ForAdminHeader;
  photo: Img;
}

export interface IOneGoal {
  partOne: string;
  and: string;
  partTwo: string;
}

export interface IWebLanguageContent {
  pageName: string;
  main: IWebMainSection;
  advantages: IItemAndImgList;
  weWorkWith: IItemList;
  howWeWork: IItemList;
}

export interface IWebLanguages {
  ru: IWebLanguageContent;
  en: IWebLanguageContent;
}

export interface IWebPageData {
  languages: IWebLanguages;
}

