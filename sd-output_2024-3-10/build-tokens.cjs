const { readFileSync } = require('node:fs');
const StyleDictionary = require('style-dictionary');
const {
  registerTransforms,
  permutateThemes,
} = require('@tokens-studio/sd-transforms');

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
registerTransforms(StyleDictionary);

const $themes = JSON.parse(readFileSync('$themes.json', 'utf-8'));
const themes = permutateThemes($themes, { seperator: '_' });
const configs = Object.entries(themes).map(([name, tokensets]) => ({
  source: tokensets.map((tokenset) => `${tokenset}.json`),
  platforms: {
    SCSS: {
      buildPath: 'build/',
      prefix: '',
      transforms: [
        'ts/color/modifiers',
        'ts/color/css/hexrgba',
        'ts/shadow/css/shorthand',
        'ts/border/css/shorthand',
        'ts/typography/compose/shorthand',
        'ts/typography/css/shorthand',
        'ts/resolveMath',
        'ts/typography/css/fontFamily',
        'ts/typography/fontWeight',
        'ts/size/lineheight',
        'ts/size/css/letterspacing',
        'ts/opacity',
        'ts/size/px',
        'name/kebab',
      ],
      files: [
        {
          destination: `styles-${name}.scss`,
          format: 'scss/variables',
        },
      ],
    },
  },
}));

for (const cfg of configs) {
  const sd = StyleDictionary.extend(cfg);
  // optionally, cleanup files first..
  sd.cleanAllPlatforms();
  sd.buildAllPlatforms();
}
