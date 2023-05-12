import IconSunHigh from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/sun-high.tsx";

export default function SignUp() {
  return (
    <main class="max-w-screen-sm mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 class="flex gap-x-4 select-none mb-8">
        <IconSunHigh class="w-8 h-auto" />
        <div class="border-l-2 border-gray-300" />
        <span class="text-2xl font-medium">Sign In</span>
      </h1>
      <form
        class="flex flex-col w-3/4 mx-auto"
        method="post"
        action="/api/signin"
      >
        <label class="mb-2" for="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          class="border border-gray-300 focus:bg-gray-100 px-4 py-2 transition-colors rounded-sm"
        />
        <label class="mt-8 mb-2" for="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          class="border border-gray-300 focus:bg-gray-100 px-4 py-2 transition-colors rounded-sm"
        />
        <button
          type="submit"
          class="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition-colors rounded-sm"
        >
          Submit
        </button>
        <span className="text-sm mt-4 text-center">
          You can sign up{" "}
          <a href="/signup" class="text-blue-500 hover:underline">
            here
          </a>
          .
        </span>
      </form>
    </main>
  );
}
