# Contributing guide

## How to add art
1. Create your new file in src/art/ (example: cat-girl.ts)
2. Export a default string with your art 
```ts
export default `
your art here
`
```
3. Add the import to `src/art/index.ts`
```ts
import catGirl from "./cat-girl"
```
4. Add the variable to the ART_BANK array
5. Run 
```bash 
npm test
```
6. Open a PR

## Art guidelines
- Anything anime.
- Pre-trimmed, no manual indentation needed
- Braille, kaomoji, or ASCII all welcome
- Keep it sfw

You can use an image-to-braille converter like this one https://lachlanarthur.github.io/Braille-ASCII-Art/

## File naming
File names should be short, descriptive and in kebab-case.

## How to test
```bash
npm test
```

## PR expectations
One art piece per PR is totally fine, feel free to use this as practice on learning the basics of contribution (^.^)