import { SupportedLocale } from "@customTypes/mainTypes";
import { MainPageData } from "./mainPage";
import { IWebPageData } from "./webPage";
import { IWebAdPageData } from "./webAdPage";
import { ISmmPageData } from "./smmPage";
import { ISmmAdPageData } from "./smmAd";

export interface ILocal {
  locale: "en" | "ru";
}

export interface ForAdminHeader {
  forAdminHeader: string;
}

export interface TextContent {
  forAdmin: ForAdmin;
  text: Text;
}

export interface Img {
  forAdmin: string;
  imgURL: string;
}

export type ImgURL = string;
export type ForAdmin = string;
export type Text = string;

export interface IItemAndImg {
  title: string;
  description: string;
  imgURL: string;
  href?: string;
}

export interface IItemAndImgList {
  forAdminHeader: ForAdminHeader;
  header: string;
  list: IItemAndImg[];
}

export interface IItem {
  title: string;
  description: string;
  imgURL: string;
}

export interface IItemList {
  forAdminHeader: ForAdminHeader;
  header: string;
  list: IItem[];
}

export interface IWebMainSection {
  forAdminHeader: ForAdminHeader;
  img: Img;
  header_1: { forAdmin: ForAdmin; text: Text };
  header_2: { forAdmin: ForAdmin; text: Text };
  description: { forAdmin: ForAdmin; text: Text };
}

export interface socialLink {
  name: string;
  shortName: string;
  href: string;
}

export interface PageLocaleProps {
  params: { locale: SupportedLocale };
}

export interface Meta {
  title: string;
  description: string;
  keywords: string;
}

export interface IEndpoint {
  endPoint: string;
}

export interface IUpdatePageDataProps extends IEndpoint {
  formDataToSend: FormData;
}
