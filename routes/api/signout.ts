import "https://deno.land/x/dotenv@v3.2.2/load.ts";

import { Handlers } from "$fresh/server.ts";
import auth from "../../utils/lucia.ts";

export const handler: Handlers = {
  async POST(req) {
    try {
      auth.invalidateSession(await req.text());
      return new Response("Signed out", { status: 200 });
    } catch (e) {
      return new Response(e.message, { status: 400 });
    }
  },
};
