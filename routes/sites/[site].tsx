import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import IconSunHigh from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/sun-high.tsx";
import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/external-link.tsx";
import IconArrowUpRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-up-right.tsx";
import IconActivity from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/activity.tsx";
import IconArrowDownRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-down-right.tsx";
import IconUsers from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/users.tsx";
import IconTilde from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/tilde.tsx";
import IconClock from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/clock.tsx";
import IconBounceRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/bounce-right.tsx";
import Avatar from "../../components/Avatar.tsx";
import { State } from "./_middleware.ts";
import SignoutButton from "../../islands/SignoutButton.tsx";

export const handler: Handlers<unknown, State> = {
  GET(_req, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function Site({ data, params }: PageProps<State>) {
  return (
    <>
      <Head>
        <title>Analytics for {params.site}</title>
      </Head>
      <div class="p-6 justify-between bg-gray-100 flex items-center shadow-lg">
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
        <h1 class="font-medium text-2xl mb-4 flex items-baseline gap-x-3">
          <span class="text-black">{params.site}</span>
          <a
            href={`https://${params.site}`}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:(text-gray-700 underline) flex items-center gap-x-1"
          >
            <span class="text-sm inline">visit</span>
            <IconExternalLink class="w-4 h-auto" />
          </a>
        </h1>
        <div class="rounded-lg p-12 w-full bg-gray-100 border-gray-200 border flex justify-evenly">
          <div>
            <div class="flex items-center gap-x-2 mb-2 select-none">
              <IconUsers class="w-6 h-auto text-gray-500" />
              <span class="font-medium ml-2 text-gray-500">Visitors</span>
            </div>
            <span class="font-bold text-3xl flex items-baseline gap-x-2">
              225
              <IconArrowUpRight
                class="w-6 h-auto text-green-400"
                aria-label="Increasing"
              />
            </span>
          </div>
          <div>
            <div class="flex items-center gap-x-2 mb-2 select-none">
              <IconActivity class="w-6 h-auto text-gray-500" />
              <span class="font-medium ml-2 text-gray-500">Views</span>
            </div>
            <span class="font-bold text-3xl flex items-baseline gap-x-2">
              300k
              <IconArrowUpRight
                class="w-6 h-auto text-green-400"
                aria-label="Increasing"
              />
            </span>
          </div>
          <div>
            <div class="flex items-center gap-x-2 mb-2 select-none">
              <IconClock class="w-6 h-auto text-gray-500" />
              <span class="font-medium ml-2 text-gray-500">
                Average visit time
              </span>
            </div>
            <span class="font-bold text-3xl flex items-baseline gap-x-2">
              4:39
              <IconTilde class="w-6 h-auto text-yellow-400" aria-label="Same" />
            </span>
          </div>
          <div>
            <div class="flex items-center gap-x-2 mb-2 select-none">
              <IconBounceRight class="w-6 h-auto text-gray-500" />
              <span class="font-medium ml-2 text-gray-500">Bounce rate</span>
            </div>
            <span class="font-bold text-3xl flex items-baseline gap-x-2">
              60%
              <IconArrowUpRight
                class="w-6 h-auto text-red-400"
                aria-label="Increasing"
              />
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
