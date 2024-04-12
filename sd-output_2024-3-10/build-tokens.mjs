import { readFileSync } from 'node:fs';
import StyleDictionary from 'style-dictionary';
import {
  registerTransforms,
  permutateThemes,
} from '@tokens-studio/sd-transforms';

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
  const sd = new StyleDictionary(cfg);
  // optionally, cleanup files first..
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}
