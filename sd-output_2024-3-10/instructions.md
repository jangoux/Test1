# Install Dependencies

Install your dependencies with [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```sh
npm init -y && npm install style-dictionary@latest @tokens-studio/sd-transforms@0.12.2
```

Then run

```sh
node build-tokens.cjs
```

> Note: Make sure to change your "source" property in the config in build-tokens.cjs to not include your package.json, which is not a token file.
