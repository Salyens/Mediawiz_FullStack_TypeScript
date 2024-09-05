
import SmmAdPage from "@models/SmmAdPage";
import { handleGet, handlePatch, handlePost } from "@utils/handler";

export const POST = (req: Request) => handlePost(SmmAdPage, req);
export const GET = () => handleGet(SmmAdPage);
export const PATCH = (req: Request) => handlePatch(SmmAdPage, req);
