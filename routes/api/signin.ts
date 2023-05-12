import "https://deno.land/x/dotenv@v3.2.2/load.ts";

import { Handlers } from "$fresh/server.ts";
import * as d from "https://esm.sh/doubter@2.1.0";
import auth from "../../utils/lucia.ts";

const inputData = d.object({
  username: d.string().min(3).max(16),
  password: d.string().min(8).max(64),
});

export const handler: Handlers = {
  async POST(req) {
    if (Deno.env.get("SIGNUP_ENABLED") !== "true") {
      return new Response("Signup is disabled", { status: 403 });
    }
    try {
      const formData = inputData.parse(
        Object.fromEntries(await req.formData())
      );
      const user = await auth.useKey(
        "username",
        formData.username,
        formData.password
      );
      const session = await auth.createSession(user.userId);
      const sessionCookie = auth.createSessionCookie(session).serialize();
      return new Response(JSON.stringify({ success: true, session }), {
        status: 303,
        headers: {
          "Set-Cookie": sessionCookie,
          "Content-Type": "application/json",
          Location: "/dashboard",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, message: error }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
