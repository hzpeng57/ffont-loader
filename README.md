# ffont-loader

A tool used to load fonts.

### install
```bash
npm install --save ffont-loader
```

or

```bash
yarn install ffont-loader
```

Then

```js
// using ES6 modules
import loadFont from 'ffont-loader';

// using CommonJS modules
var loadFont = require('ffont-loader')
```

### Usage

```js
import loadFont from 'ffont-loader';

const fontFamily = 'Custom Font';

loadFont({
  source: 'https://xxx.ttf',
  family: fontFamily,
}).then(() => {
  document.body.style.fontFamily = fontFamily;
})
```

### Optios

```ts
interface Options {
  source: string;
  family: FontFace['family'];
  target?: HTMLElement;
  display?: FontFace['display'];
  style?: FontFace['style'];
  weight?: FontFace['weight'];
  stretch?: FontFace['stretch'];
  unicodeRange?: FontFace['unicodeRange'];
  variant?: FontFace['variant'];
  featureSettings?: FontFace['featureSettings'];
}
```