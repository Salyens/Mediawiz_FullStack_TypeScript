import WebPage from "@models/WebPage";
import { handleGet, handlePatch, handlePost } from "@utils/handler";

export const POST = (req: Request) => handlePost(WebPage, req);
export const GET = () => handleGet(WebPage);
export const PATCH = (req: Request) => handlePatch(WebPage, req);
