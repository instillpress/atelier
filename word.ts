import { TextNode } from './text-node';

export class Word {
  constructor(
    public prefix: TextNode,
    public word: TextNode,
    public offset: number,
    public width: number,
    public height: number,
    public isLineBreak: boolean = false
  ) {}
}
