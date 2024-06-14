export interface RenderLanguageContent {
  pageName: string;
  [key: string]: any;
}

export interface RenderLanguages {
  ru: RenderLanguageContent;
  en: RenderLanguageContent;
}

export interface IRenderData {
  languages: RenderLanguages;
}
