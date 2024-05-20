import { ForAdmin, ForAdminHeader, IItemList, Img, Text } from "./common";

export interface ISmmMainSection {
  forAdminHeader: ForAdminHeader;
  img: Img;
  header: { forAdmin: ForAdmin; text: Text };
  description: { forAdmin: ForAdmin; text: Text };
}

export interface IResult {
  forAdminHeader: ForAdminHeader;
  partOne: string;
  partTwo: string;
}

export interface IProjectItem {
  title: string;
  imgURL: string;
}

export interface IProjectsList {
  forAdminHeader: ForAdminHeader;
  header: string;
  list: IProjectItem[];
}

export interface IQuoteItem {
  description: string;
}

export interface IQuotesList {
  forAdminHeader: ForAdminHeader;
  list: IQuoteItem[];
}

export interface IResult {
  forAdminHeader: ForAdminHeader;
  partOne: string;
  partTwo: string;
}

export interface ISmmLanguageContent {
  pageName: string;
  main: ISmmMainSection;
  weWorkWith: IItemList;
  result: IResult;
  myProjects: IProjectsList;
  quotes: IQuotesList;
}

export interface ISmmLanguages {
  ru: ISmmLanguageContent;
  en: ISmmLanguageContent;
}

export interface ISmmPageData {
    languages: ISmmLanguages;
  }
  
