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
      const { username, password } = formData;
      const user = await auth.createUser({
        primaryKey: {
          providerId: "username",
          providerUserId: username,
          password,
        },
        attributes: { username },
      });
      return new Response(JSON.stringify(user), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      return new Response(e.message, { status: 400 });
    }
  },
};
