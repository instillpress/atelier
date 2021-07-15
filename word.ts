import { Text } from './text';

export class Word {
  constructor(
    public prefix: Text,
    public word: Text,
    public startOffset: number = 0,
    public endOffset: number = 0,
    public width: number = 0,
    public height: number = 0
  ) {}
}
