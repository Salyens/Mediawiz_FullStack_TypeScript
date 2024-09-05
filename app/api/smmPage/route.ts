import SmmPage from "@models/SmmPage";
import { handleGet, handlePatch, handlePost } from "@utils/handler";

export const POST = (req: Request) => handlePost(SmmPage, req);
export const GET = () => handleGet(SmmPage);
export const PATCH = (req: Request) => handlePatch(SmmPage, req);
