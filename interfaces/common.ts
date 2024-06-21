import { ForAdmin } from "@myTypes/mainTypes";

export interface ILocal {
  locale: "en" | "ru";
}

export interface ForAdminHeader {
  forAdminHeader?: string;
  header: string;
}

export interface TextContent {
  forAdmin: ForAdmin;
  text: string;
}

export interface Img {
  forAdmin?: ForAdmin;
  imgURL: string;
}

export interface IItemAndImg {
  title: string;
  description: string;
  imgURL: string;
  href?: string;
}

export interface IItemAndImgList extends ForAdminHeader {
  list: IItemAndImg[];
}

export interface IItem {
  title: string;
  description: string;
  imgURL: string;
}

export interface IItemList extends ForAdminHeader {
  list: IItem[];
}

export interface IWebMainSection {
  forAdminHeader: ForAdminHeader;
  img: Img;
  header_1: TextContent;
  header_2: TextContent;
  description: TextContent;
}

export interface socialLink {
  name: string;
  shortName: string;
  href: string;
}

export interface PageLocaleProps {
  params: ILocal;
}

export interface Meta {
  title: string;
  description: string;
  keywords: string;
}

export interface IEndpoint {
  endPoint: "mainPage" | "webPage" | "webAdPage" | "smmPage" | "smmAdPage";
}

export interface IUpdatePageDataProps extends IEndpoint {
  formDataToSend: FormData;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface IPages {
  pageName: string;
  endPoint: string;
}

export interface ISession {
  user: {
    name: string;
    email: string;
  };
  expires: string;
}

