import "https://deno.land/x/dotenv@v3.2.2/load.ts";

import lucia from "https://esm.sh/lucia-auth@1.5.0";
import { web } from "https://esm.sh/lucia-auth@1.5.0/middleware";

import { planetscale } from "https://esm.sh/@lucia-auth/adapter-mysql@1.1.1";
import connection from "./planetscale.ts";

const auth = lucia({
  adapter: planetscale(connection),
  env: Deno.env.get("ENVIRONMENT") === "PROD" ? "PROD" : "DEV",
  middleware: web(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      username: userData.username,
    };
  },
});

export default auth;
