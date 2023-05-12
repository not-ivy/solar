import { Handlers, PageProps } from "$fresh/server.ts";
import IconSunHigh from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/sun-high.tsx";

import auth from "../utils/lucia.ts";
import Avatar from "../components/Avatar.tsx";
import SignoutButton from "../islands/SignoutButton.tsx";
import { Head } from "$fresh/runtime.ts";
import Site from "../islands/Site.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const cookies = req.headers.get("Cookie")?.split("; ");
    const session = cookies
      ?.find((c) => c.startsWith("auth_session="))
      ?.split("=")[1]!;
    try {
      await auth.validateSession(session);
    } catch {
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/signin",
        },
      });
    }
    const user = (await auth.getSessionUser(session)).user;
    return ctx.render({ username: user.username, session: session });
  },
};

export default function Dashboard({
  data,
}: PageProps<{ session: string; username: string }>) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div class="p-6 justify-between bg-gray-200 flex items-center  shadow-lg">
        <span class="flex items-center gap-x-4 select-none">
          <IconSunHigh class="w-8 h-auto" />
          <span class="text-xl">Dashboard</span>
        </span>
        <span class="flex items-center gap-x-4">
          <Avatar
            username={data.username}
            class="w-8 h-auto bg-white rounded-full"
          />
          <SignoutButton session={data.session} />
        </span>
      </div>
      <main class="mt-16 max-w-screen-xl mx-auto">
        <div class="grid grid-flow-row grid-cols-4 gap-4 h-full">
          <Site url="https://deno.land" />
          {Array.from({ length: 30 }).map((_, i) => (
            <div class="bg-gray-200 w-full h-32 rounded-md" key={i}></div>
          ))}
        </div>
      </main>
    </>
  );
}
