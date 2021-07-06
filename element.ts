import { Font } from "./formatting/font";
import { Color } from "./formatting/color";

export class Element implements Font, Color  {
  private content: string;
  private fontName: string;
  private fontSize: number;
  private color: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
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
}