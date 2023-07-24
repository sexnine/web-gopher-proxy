import type { PageLoad } from "./$types";
import { dev } from "$app/environment";

export const csr = dev;

export const load = (async ({ params, route }) => ({
  route: {
    host: params.host,
    port: params.port,
    type: params.type ?? route.id.charAt(25),
    path: params.path,
  },
})) satisfies PageLoad;
