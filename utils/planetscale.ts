import "https://deno.land/x/dotenv@v3.2.2/load.ts";

import { connect } from "https://esm.sh/@planetscale/database@1.7.0";

const connection = connect({
  host: Deno.env.get("DATABASE_HOST"),
  username: Deno.env.get("DATABASE_USERNAME"),
  password: Deno.env.get("DATABASE_PASSWORD"),
});

export default connection;
