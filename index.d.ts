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
declare function loadFont(options: Options): Promise<void>;
export default loadFont;
