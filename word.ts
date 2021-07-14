import { Text } from './text';

export class Word {
  constructor(
    public prefix: Text,
    public word: Text,
    public offset: number,
    public width: number,
    public height: number
  ) {}
}
