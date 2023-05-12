import type { FreshOptions } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";

// @ts-ignore: twindConfig is valid: see https://github.com/denoland/fresh/blob/main/tests/fixture_twind_hydrate/twind.config.ts
// twindv1 is experimental
export default { plugins: [twindPlugin(twindConfig)] } as FreshOptions;
