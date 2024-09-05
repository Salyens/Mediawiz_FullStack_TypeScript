import { IItemAndImgList, IItemList, IWebMainSection } from "./common";

export interface IWebAdLanguageContent {
  pageName: string;
  main: IWebMainSection;
  advantages: IItemAndImgList;
  howAdWorks: IItemAndImgList;
  howWeWork: IItemList;
}
export interface IWebAdLanguages {
  ru: IWebAdLanguageContent;
  en: IWebAdLanguageContent;
}
export interface IWebAdPageData {
  languages: IWebAdLanguages;
}
