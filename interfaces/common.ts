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
}

export interface IItemAndImgList {
  forAdminHeader: ForAdminHeader;
  header: string;
  list: IItemAndImg[];
}

export interface IItem {
  title: string;
  description: string;
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
