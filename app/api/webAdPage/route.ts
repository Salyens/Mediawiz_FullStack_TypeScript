import WebAdPage from "@models/WebAdPage";
import { handleGet, handlePatch, handlePost } from "@utils/handler";

export const POST = (req: Request) => handlePost(WebAdPage, req);
export const GET = () => handleGet(WebAdPage);
export const PATCH = (req: Request) => handlePatch(WebAdPage, req);
