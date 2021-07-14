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
  private content: string;
  private fontName: string = 'sans-serif';
  private fontSize: number = 10;
  private color: string = 'black';
  private bold: boolean = false;
  private underline: boolean = false;
  private strikeout: boolean = false;
  private align: AlignKind = AlignKind.Left;
  private script: ScriptKind = ScriptKind.Normal;

  constructor(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  getFontName() {
    return this.fontName;
  }

  setFontName(fontName: string) {
    this.fontName = fontName;
  }

  getFontSize() {
    return this.fontSize;
  }

  setFontSize(fontSize: number) {
    this.fontSize = fontSize;
  }

  getColor() {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getBold() {
    return this.bold;
  }

  setBold(bold: boolean) {
    this.bold = bold;
  }

  getUnderline() {
    return this.underline;
  }

  setUnderline(underline: boolean) {
    this.underline = underline;
  }

  getStrikeout() {
    return this.strikeout;
  }

  setStrikeout(strikeout: boolean) {
    this.strikeout = strikeout;
  }

  getAlign() {
    return this.align;
  }

  setAlign(align: AlignKind) {
    this.align = align;
  }

  getScript() {
    return this.script;
  }

  setScript(script: ScriptKind) {
    this.script = script;
  }
}
