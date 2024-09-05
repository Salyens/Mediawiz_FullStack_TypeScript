import { MainPageData } from "@interfaces/mainPage";
import { IWebPageData } from "@interfaces/webPage";
import { IWebAdPageData } from "@interfaces/webAdPage";
import { ISmmPageData } from "@interfaces/smmPage";
import { ISmmAdPageData } from "@interfaces/smmAd";

export type EndpointKey = '/mainPage' | '/webPage' | '/webAdPage' | '/smmPage' | '/smmAdPage';

export interface EndpointMap {
  '/mainPage': MainPageData;
  '/webPage': IWebPageData;
  '/webAdPage': IWebAdPageData;
  '/smmPage': ISmmPageData;
  '/smmAdPage': ISmmAdPageData;
}

export const endpointDataTypes: { [key in EndpointKey]: string } = {
  '/mainPage': 'MainPageData',
  '/webPage': 'IWebPageData',
  '/webAdPage': 'IWebAdPageData',
  '/smmPage': 'ISmmPageData',
  '/smmAdPage': 'ISmmAdPageData'
};
