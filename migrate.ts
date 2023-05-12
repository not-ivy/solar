import "https://deno.land/x/dotenv@v3.2.2/load.ts";

import { connect } from "https://esm.sh/@planetscale/database@1.7.0";

const connection = connect({
  host: Deno.env.get("DATABASE_HOST"),
  username: Deno.env.get("DATABASE_USERNAME"),
  password: Deno.env.get("DATABASE_PASSWORD"),
});

const migration = Deno.readTextFileSync("./migrations/0_init.sql")
  .split(";")
  .map((q) => q.trim())
  .filter((q) => q.length);

await connection.transaction((tx) => {
  return Promise.all(
    migration.map((query) => {
      console.log(`Applying migration ${query.split("\n")[0].split(" ")[2]}`);
      return tx.execute(query);
    })
  );
});
