import type { PageLoad } from "./$types";
import { getFromGopherServer } from "$lib/server/gopher";

export const load = (async ({ params }) => {
  const { host, port, path } = params;

  const response = await getFromGopherServer(host, port, path);
  const data = await response.text();

  const entries = data.split("\r\n").map((line) => {
    const type = line.charAt(0);
    const [label, path, host, port] = line.slice(1).split("\t");

    if (["i", "3"].includes(type) || !label) {
      return {
        displayAs: "text",
        type: type,
        text: label,
      };
    }

    return {
      displayAs: "link",
      type: type,
      label: label,
      path: path,
      host: host,
      port: port,
    };
  });

  return {
    content: entries,
  };
}) satisfies PageLoad;
