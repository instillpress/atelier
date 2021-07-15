import { Element } from './element';

export class Document {
  private elements = new Array<Element>();
  private currentElement: Element = null;

  length() {
    return this.elements.length;
  }

  at(index: number) {
    return this.elements[index];
  }

  current() {
    if (this.currentElement == null) {
      this.currentElement = new Element('');
      this.elements.push(this.currentElement);
    }

    return this.currentElement;
  }

  previous(element: Element) {
    let index = this.elements.indexOf(element);

    if (index >= 0 && index < this.elements.length) {
      return this.elements[index - 1];
    }

    return null;
  }

  next(element: Element) {
    let index = this.elements.indexOf(element);

    if (index >= 0 && index < this.elements.length - 1) {
      return this.elements[index + 1];
    }

    return null;
  }

  remove(element: Element) {
    let index = this.elements.indexOf(element);

    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }

  split(element: Element, offset: number) {
    let newElement = new Element('');

    let index = this.elements.indexOf(element);
    this.elements.splice(index + 1, 0, newElement);

    newElement.content = element.content.substr(offset);
    element.content = element.content.substr(0, offset);

    this.parse(element);
    this.parse(newElement);

    return newElement;
  }

  clean() {
    let elements = new Array<Element>();

    for (let i = 0; i < this.elements.length; ++i) {
      let element = this.elements[i];

      if (element.words.length > 0) {
        elements.push(element);
      }
    }

    this.elements = elements;
  }

  private parse(element: Element) {
    element.clearWords();
    element.maxAscent = 0;
    element.maxDescent = 0;
    element.maxHeight = 0;

    let prefix = '';
    let word = '';

    for (let i = 0; i < element.content.length; ++i) {
      let character = element.content.charAt(i);

      if (character === ' ') {
        if (word.length > 0) {
          element.addWord(prefix, word, i);

          prefix = '';
          word = '';
        }

        prefix += character;
      } else if (character === '\n') {
        if (prefix.length > 0 || word.length > 0) {
          element.addWord(prefix, word, i);
        }

        element.addLineBreak();

        prefix = '';
        word = '';
      } else {
        word += character;
      }
    }

    if (prefix.length > 0 || word.length > 0) {
      element.addWord(prefix, word, element.content.length);
    }
  }
}
