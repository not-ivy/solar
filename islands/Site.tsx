import IconActivity from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/activity.tsx";
import IconClock from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/clock.tsx";
import IconArrowNarrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-narrow-right.tsx";

interface SiteProps {
  url: string;
}

export default function Site({ url }: SiteProps) {
  return (
    <div class="bg-gray-200 w-full h-32 rounded-md p-6 flex justify-between flex-col">
      <h3 class="font-medium flex items-center gap-x-4">
        <div class="w-2.5 h-2.5 bg-green-400 rounded-full" />
        <span>{url.replace(/https?:\/\//, "")}</span>
      </h3>
      <div class="flex items-end justify-between w-full">
        <div class="flex flex-col justify-evenly gap-x-4">
          <span class="flex items-center gap-x-2">
            <IconActivity class="w-5 h-auto" />
            <span class="text-sm">15k</span>
          </span>
          <span class="flex items-center gap-x-2">
            <IconClock class="w-5 h-auto" />
            <span class="text-sm">1:35</span>
          </span>
        </div>
        <a href="" class="flex items-center gap-x-2">
          View
          <IconArrowNarrowRight class="w-5 h-auto" />
        </a>
      </div>
    </div>
  );
}
