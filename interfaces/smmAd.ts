import { IItemList } from "./common";
import { IQuotesList, IResultList, ISmmMainSection } from "./smmPage";

export interface ISmmAdLanguageContent {
  pageName: string;
  main: ISmmMainSection;
  weWorkWith: IItemList;
  results: IResultList;
  quotes: IQuotesList;
}

export interface ISmmAdLanguages {
  ru: ISmmAdLanguageContent;
  en: ISmmAdLanguageContent;
}

export interface ISmmAdPageData {
  languages: ISmmAdLanguages;
}
