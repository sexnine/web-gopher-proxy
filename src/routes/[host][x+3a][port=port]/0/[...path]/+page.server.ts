import type { PageLoad } from "./$types";
import { getFromGopherServer } from "$lib/server/gopher";

export const load = (async ({ params }) => {
  const { host, port, path } = params;

  const response = await getFromGopherServer(host, port, path);
  const data = await response.text();

  return {
    content: data,
  };
}) satisfies PageLoad;
