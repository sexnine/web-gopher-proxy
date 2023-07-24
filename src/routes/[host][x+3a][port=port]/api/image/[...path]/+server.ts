import type { RequestHandler } from "./$types";
import { getFromGopherServer } from "$lib/server/gopher";

export const GET = (async ({ params }) => {
  const { host, port, path } = params;

  const response = await getFromGopherServer(host, port, path);

  return new Response(response);
}) satisfies RequestHandler;
