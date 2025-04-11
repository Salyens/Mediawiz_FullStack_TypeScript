import { MainPageData } from "@interfaces/mainPage";
import { ISmmAdPageData } from "@interfaces/smmAd";
import { ISmmPageData } from "@interfaces/smmPage";
import { IWebAdPageData } from "@interfaces/webAdPage";
import { IWebPageData } from "@interfaces/webPage";

export type AdminPageDataType =
  | MainPageData
  | IWebPageData
  | IWebAdPageData
  | ISmmPageData
  | ISmmAdPageData
