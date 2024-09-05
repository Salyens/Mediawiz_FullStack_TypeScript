import { ForAdmin, ForAdminHeader, IItemList, Img, Text } from "./common";

export interface ISmmMainSection {
  forAdminHeader: ForAdminHeader;
  img: Img;
  header: { forAdmin: ForAdmin; text: Text };
  description: { forAdmin: ForAdmin; text: Text };
}

export interface IResultList {
  forAdminHeader: ForAdminHeader;
  list: IResultItem[];
}

export interface IResultItem {
  partOne: string;
  partTwo: string;
}

export interface IProjectItem {
  title: string;
  imgURL: string;
}

export interface IProjects {
  forAdminHeader: ForAdminHeader;
  header: string;
  list: IProjectItem[];
}

export interface ISmmQuoteItem {
  description: string;
  href?: string;
}

export interface IQuotesList {
  forAdminHeader: ForAdminHeader;
  list: ISmmQuoteItem[];
}

export interface ISmmLanguageContent {
  pageName: string;
  main: ISmmMainSection;
  weWorkWith: IItemList;
  results: IResultList;
  myProjects: IProjects;
  quotes: IQuotesList;
}

export interface ISmmLanguages {
  ru: ISmmLanguageContent;
  en: ISmmLanguageContent;
}

export interface ISmmPageData {
  languages: ISmmLanguages;
}
