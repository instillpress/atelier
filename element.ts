import { Word } from './word';
import { LineBreak } from './line-break';
import { Text } from './text';
import { Font } from './formatting/font';
import { Color } from './formatting/color';
import { Bold } from './formatting/bold';
import { Underline } from './formatting/underline';
import { Strikeout } from './formatting/strikeout';
import { AlignKind } from './formatting/align-kind';
import { Align } from './formatting/align';
import { ScriptKind } from './formatting/script-kind';
import { Script } from './formatting/script';

export class Element
  implements Font, Color, Bold, Underline, Strikeout, Align, Script {
  constructor(
    public content: string,
    public words = new Array<Word | LineBreak>(),
    public maxAscent: number = 0,
    public maxDescent: number = 0,
    public maxHeight: number = 0,
    public fontName: string = 'sans-serif',
    public fontSize: number = 10,
    public color: string = 'black',
    public bold: boolean = false,
    public underline: boolean = false,
    public strikeout: boolean = false,
    public align: AlignKind = AlignKind.Left,
    public script: ScriptKind = ScriptKind.Normal
  ) {}

  addWord(prefix: string, word: string, offset: number) {
    const prefixText = new Text(
      prefix,
      Text.measureText(prefix, this.fontName)
    );
    const wordText = new Text(word, Text.measureText(word, this.fontName));
    const objectWord = new Word(prefixText, wordText);

    objectWord.startOffset = offset;

    if (prefix.length > 0) {
      objectWord.startOffset -= prefix.length;
    }

    if (word.length > 0) {
      objectWord.startOffset -= word.length;
    }

    objectWord.endOffset = offset;

    objectWord.width =
      objectWord.prefix.textMeasurement.width +
      objectWord.word.textMeasurement.width;
    objectWord.height = Math.max(
      objectWord.prefix.textMeasurement.height,
      objectWord.word.textMeasurement.height
    );

    this.maxAscent = Math.max(
      this.maxAscent,
      objectWord.word.textMeasurement.ascent
    );
    this.maxDescent = Math.max(
      this.maxDescent,
      objectWord.word.textMeasurement.descent
    );

    this.words.push(objectWord);
  }

  addLineBreak() {
    this.words.push(new LineBreak());
  }

  clearWords() {
    this.words = new Array<Word | LineBreak>();
  }
}
