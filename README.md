# console-chan (npm version, license)

An anime themed package that throws cute ascii art to the console on load.

# Install

npm i console-chan

# Quick start here

install the package

import { logConsoleArt } from "console-chan";

logConsoleArt();

# Options
LogOptions {
  color: hex string (Default: "#8b5cf6"),
  fontSize: string (Default: 18px),
  taglineFontSize: string (Default: 14px),
  frequency: "once" | "navigate" (Default: "once")
}

# React useage:
import { ConsoleArt } from "console-chan/react";

function App() {
  return <ConsoleArt />;
}

or

import { useConsoleArt } from "console-chan/react";

function App() {
  useConsoleArt({ color: "#ff0000" });
  return <div>...</div>;
}


# Contributing
Go to CONTRIBUTING.MD

MIT license