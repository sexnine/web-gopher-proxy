import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
  const parsed = parseInt(param);
  return !isNaN(parsed) && parsed >= 0 && parsed <= 65535;
}) satisfies ParamMatcher;
