import { useId } from "react";

export function useSpotlightId(prefix: string) {
  const raw = useId().replace(/[^a-zA-Z0-9]/g, "");
  return `${prefix}-${raw}`;
}
