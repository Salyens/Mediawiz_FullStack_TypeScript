import { MainPageData } from "@interfaces/mainPage";
import { IWebPageData } from "@interfaces/webPage";
import { IWebAdPageData } from "@interfaces/webAdPage";
import { ISmmPageData } from "@interfaces/smmPage";
import { ISmmAdPageData } from "@interfaces/smmAd";
import { Endpoints } from "@myTypes/mainTypes";

export type DataForEndpoint<E extends Endpoints> = 
  E extends "mainPage" ? MainPageData :
  E extends "webPage" ? IWebPageData :
  E extends "webAdPage" ? IWebAdPageData :
  E extends "smmPage" ? ISmmPageData :
  E extends "smmAdPage" ? ISmmAdPageData : never;

export interface IEndpoint {
  endPoint: Endpoints;
}
