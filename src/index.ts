import { randomStr } from './utils/string';

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

async function loadFont(options: Options) {
  if (!options?.family) {
    return Promise.reject(new Error('options.family cannot be empty'));
  }
  if (!options?.source) {
    return Promise.reject(new Error('options.source cannot be empty'));
  }
  try {
    if (window.FontFace && document.fonts) {
      const fontFace = new FontFace(options.family, `url(${options.source})`);
      if (options.display) {
        fontFace.display = options.display;
      }
      if (options.style) {
        fontFace.style = options.style;
      }
      if (options.weight) {
        fontFace.weight = options.weight;
      }
      if (options.stretch) {
        fontFace.stretch = options.stretch;
      }
      if (options.unicodeRange) {
        fontFace.unicodeRange = options.unicodeRange;
      }
      if (options.variant) {
        fontFace.variant = options.variant;
      }
      if (options.featureSettings) {
        fontFace.featureSettings = options.featureSettings;
      }
      document.fonts.add(fontFace);
      await fontFace.load();
      if (options.target) {
        options.target.style.fontFamily = options.family;
      }
    } else {
      loadFontByCss(options);
    }
  } catch (error) {
    console.error('[ffont-loader]:', error);
    throw error;
  }
}

function loadFontByCss(options: Options) {
  const properties = [
    `font-display: ${options.display || 'swap'}`,
    options.style ? `font-style: ${options.style}` : '',
    options.weight ? `font-weight: ${options.weight}` : '',
    options.stretch ? `font-stretch: ${options.stretch}` : '',
    options.unicodeRange ? `unicode-range: ${options.unicodeRange}` : '',
    options.variant ? `font-variant: ${options.variant}` : '',
    options.featureSettings ? `font-feature-settings: ${options.featureSettings}` : '',
  ];

  const fontCssStr = `
      @font-face {
        font-family: ${options.family};
        src: url('${options.source}');
        ${properties.join(';\n')}
      }
    `;
  createStyleSheet(fontCssStr);
}

function createStyleSheet(cssString: string) {
  const STYLESHEET_ID = 'ffont-loader';
  const sheetId = randomStr();
  const id = STYLESHEET_ID + sheetId;
  document.getElementById(id)?.remove();
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', id);

  const cssText = document.createTextNode(cssString);
  style.appendChild(cssText);

  if (!document.head) {
    throw new Error('document.head is undefined');
  }
  document.head.appendChild(style);
}

export default loadFont;
