import IconExclamationCircle from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/exclamation-circle.tsx";

export default function Greet() {
  return (
    <main class="w-screen h-screen flex justify-center items-center">
      <h1 class="flex select-none items-center">
        <IconExclamationCircle class="w-8 h-auto mr-4" />
        <span class="text-2xl font-medium border-l-2 border-gray-300 pl-4">
          404 Not Found
        </span>
      </h1>
    </main>
  );
}
