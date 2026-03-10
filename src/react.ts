import  { useEffect } from "react"
import { logConsoleArt, LogOptions } from "./index"

export function useConsoleArt(options?: LogOptions) {
  useEffect(() => {
    logConsoleArt(options)
  }, [])
}

export function ConsoleArt (props?: LogOptions) {
  useConsoleArt(props);
  return null
}
