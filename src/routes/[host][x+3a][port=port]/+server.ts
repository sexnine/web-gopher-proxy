import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (({ url }) => {
  console.log(url);
  throw redirect(302, url.pathname + "/1");
}) satisfies RequestHandler;
