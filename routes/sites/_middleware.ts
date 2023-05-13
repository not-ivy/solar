import { MiddlewareHandlerContext } from "$fresh/server.ts";
import auth from "../../utils/lucia.ts";

export interface State {
  session: string;
  username: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
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
  ctx.state.session = session;
  ctx.state.username = user.username;
  return ctx.next();
}
