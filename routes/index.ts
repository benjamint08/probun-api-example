import {Success} from "probun";

export default async function GET(req: Request): Promise<Response> {
    return Success("Hello, World!");
}