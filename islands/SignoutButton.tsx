import IconLogout from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/logout.tsx";

interface SignoutButtonProps {
  session: string;
}

export default function SignoutButton({ session }: SignoutButtonProps) {
  const signOut = () => {
    fetch("/api/signout", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: session,
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = "/signin";
      }
    });
  };

  return (
    <button onClick={signOut}>
      <IconLogout class="w-5 h-auto" />
    </button>
  );
}
