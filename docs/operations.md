# Operations

## Local verification

```bash
npm install
npx tsc --noEmit
npm test
npm run build
```

## Package smoke test

The root package is a development-only monorepo manifest (`private: true`). The publishable npm extension manifest is `extension/ay-pi/package.json`.

After building, verify that:

- `dist/index.js` is generated.
- The bundle contains the policy fallback.
- `@xenova/transformers` is a runtime dependency of the extension package.
- `@earendil-works/pi-coding-agent` remains a peer dependency.
- `npm pack --dry-run` lists the extension bundle and package metadata.

## Release checklist

1. `npm test`
2. `npx tsc --noEmit`
3. `npm run build`
4. `npm pack --dry-run --prefix extension/ay-pi`
5. Install the package in a clean Pi workspace and run a smoke test.
6. Test `/plan`, a natural-language plan, `/review`, `/code`, plan confirmation, and `/ay-pi-switch`.

Telemetry files may contain user input and must not be included in the npm package.
