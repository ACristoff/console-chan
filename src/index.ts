import { ART_BANK } from "./art";
import { TAGLINES } from "./taglines";
import { LogOptions } from "./types";

export function getRandomArt() {
  return ART_BANK[Math.floor(Math.random() * ART_BANK.length)]
}

export function getRandomTagline() {
  return TAGLINES[Math.floor(Math.random() * TAGLINES.length)]
}

const DEFAULTS: Required<LogOptions> = {
  color: "#8b5cf6",
  fontSize: "18px",
  taglineFontSize: "14px",
  frequency: "once",
}

let hasLogged = false;

export function logConsoleArt(options?: LogOptions) {
  const {
    color, 
    fontSize,
    taglineFontSize,
    frequency
  } = { ...DEFAULTS , ...options}

  if (frequency === "once" && hasLogged) return;
  hasLogged = true;

  const art = getRandomArt()
  const tagline = getRandomTagline()

  const isBrowser = typeof window !== "undefined";

  if (isBrowser) {
    console.log(
      `%c${art}\n%c${tagline}`,
      `color: ${color}; font-size: ${fontSize}; font-family: monospace; line-height: 1.2;`,
      `color: ${color}; font-size: ${taglineFontSize}; font-family: monospace; font-style: italic`
    )
  } else {
    console.log(`${art}\n${tagline}`)
  }

}




export { ART_BANK as CONSOLE_ART };
export { TAGLINES };
export type { LogOptions };