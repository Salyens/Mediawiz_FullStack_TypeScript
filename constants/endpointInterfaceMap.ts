// src/helpers/endpointHelper.ts
import { MainPageData } from "@interfaces/mainPage";
import { IWebPageData } from "@interfaces/webPage";
import { IWebAdPageData } from "@interfaces/webAdPage";
import { ISmmPageData } from "@interfaces/smmPage";
import { ISmmAdPageData } from "@interfaces/smmAd";

type EndpointMap = {
  "/": MainPageData;
  "/web": IWebPageData;
  "/webAd": IWebAdPageData;
  "/smm": ISmmPageData;
  "/smmAd": ISmmAdPageData;
};

export function getInterfaceType<T extends keyof EndpointMap>(endpoint: T): EndpointMap[T] {
  return {} as EndpointMap[T];
}

export type EndpointKey = keyof EndpointMap;
