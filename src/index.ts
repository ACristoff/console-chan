import { ART_BANK } from "./art";
import { TAGLINES } from "./taglines";
import { LogOptions } from "./types";

export function getRandomArt() {
  return ART_BANK[Math.floor(Math.random() * ART_BANK.length)]
}

export function getRandomTagline() {
  return TAGLINES[Math.floor(Math.random() * TAGLINES.length)]
}

const DEFAULTS = {
  color: "#8b5cf6",
  fontSize: "18px",
  taglineFontSize: "14px",
  frequency: "once" as const,
}

let hasLogged = false;

export function logConsoleArt(options?: LogOptions) {
  const {
    color,
    fontSize,
    taglineFontSize,
    frequency,
    append
  } = { ...DEFAULTS , ...options}

  if (frequency === "once" && hasLogged) return;
  hasLogged = true;

  const art = getRandomArt()
  const tagline = getRandomTagline()

  const isBrowser = typeof window !== "undefined";

  const appendLine = append ? `\n%c${append}` : "";
  const appendStyle = append
    ? `color: ${color}; font-size: ${taglineFontSize}; font-family: monospace;`
    : "";

  if (isBrowser) {
    const args = [
      `%c${art}\n%c${tagline}${appendLine}`,
      `color: ${color}; font-size: ${fontSize}; font-family: monospace; line-height: 1.2;`,
      `color: ${color}; font-size: ${taglineFontSize}; font-family: monospace; font-style: italic`,
      ...(append ? [appendStyle] : []),
    ];
    console.log(...args);
  } else {
    console.log(`${art}\n${tagline}${append ? `\n${append}` : ""}`)
  }

}




export { ART_BANK as CONSOLE_ART };
export { TAGLINES };
export type { LogOptions };