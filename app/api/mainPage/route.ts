import MainPage from "@models/MainPage";
import { handleGet, handlePatch, handlePost } from "@utils/handler";

export const POST = (req: Request) => handlePost(MainPage, req);
export const GET = () => handleGet(MainPage);
export const PATCH = (req: Request) => handlePatch(MainPage, req);
