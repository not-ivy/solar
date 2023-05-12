import { Head } from "$fresh/runtime.ts";
import IconSunHigh from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/sun-high.tsx";
import IconBook2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/book-2.tsx";
import IconDashboard from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/dashboard.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solar</title>
      </Head>
      <main class="mx-auto min-h-screen max-w-screen-sm flex items-center justify-center flex-col">
        <h1 class="flex gap-x-4 select-none">
          <IconSunHigh class="w-8 h-auto" />
          <div class="border-l-2 border-gray-300" />
          <span class="text-2xl font-medium">Solar</span>
        </h1>
        <p class="text-center text-sm mx-auto mt-4">
          Solar is a web analytics service that is built on deno and fresh.
        </p>
        <div class="mt-8 flex justify-evenly w-full">
          <a
            href="/docs"
            class="flex gap-x-4 border rounded-lg px-4 py-2 border-gray-300 hover:bg-gray-100 transition-colors select-none shadow-lg"
          >
            <IconBook2 />
            <span>Docs</span>
          </a>
          <a
            href="/dashboard"
            class="flex gap-x-4 border rounded-lg px-4 py-2 border-gray-300 hover:bg-gray-100 transition-colors select-none shadow-lg"
          >
            <IconDashboard />
            <span>Dashboard</span>
          </a>
        </div>
      </main>
    </>
  );
}
