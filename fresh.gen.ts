// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[...path].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/signin.ts";
import * as $3 from "./routes/api/signout.ts";
import * as $4 from "./routes/api/signup.ts";
import * as $5 from "./routes/api/validate.ts";
import * as $6 from "./routes/dashboard.tsx";
import * as $7 from "./routes/index.tsx";
import * as $8 from "./routes/signin.tsx";
import * as $9 from "./routes/signup.tsx";
import * as $10 from "./routes/sites/[site].tsx";
import * as $11 from "./routes/sites/_middleware.ts";
import * as $$0 from "./islands/SignoutButton.tsx";
import * as $$1 from "./islands/Site.tsx";

const manifest = {
  routes: {
    "./routes/[...path].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/signin.ts": $2,
    "./routes/api/signout.ts": $3,
    "./routes/api/signup.ts": $4,
    "./routes/api/validate.ts": $5,
    "./routes/dashboard.tsx": $6,
    "./routes/index.tsx": $7,
    "./routes/signin.tsx": $8,
    "./routes/signup.tsx": $9,
    "./routes/sites/[site].tsx": $10,
    "./routes/sites/_middleware.ts": $11,
  },
  islands: {
    "./islands/SignoutButton.tsx": $$0,
    "./islands/Site.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
