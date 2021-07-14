import { Element } from './element';

export class Document {
  private elements = new Array<Element>();
  private current: Element = null;

  length() {
    return this.elements.length;
  }

  at(index: number) {
    return this.elements[index];
  }

  getCurrentElement() {
    if (this.current == null) {
      this.current = new Element('');
      this.elements.push(this.current);
    }

    return this.current;
  }

  getPreviousElement(element: Element) {
    let index = this.elements.indexOf(element);

    if (index >= 0 && index < this.elements.length) {
      return this.elements[index - 1];
    }

    return null;
  }

  getNextElement(element: Element) {
    let index = this.elements.indexOf(element);

    if (index >= 0 && index < this.elements.length - 1) {
      return this.elements[index + 1];
    }

    return null;
  }

  removeElement(element: Element) {
    let index = this.elements.indexOf(element);

    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }

  splitElement(element: Element, offset: number) {
    let newElement = new Element("");

    let index = this.elements.indexOf(element);
    this.elements.splice(index + 1, 0, newElement);

    newElement.setContent(element.getContent().substr(offset));
    element.setContent(element.getContent().substr(0, offset));

    this.rewordElement(element);
    this.rewordElement(newElement);

    return newElement;
  }

  insertElementAt(element: Element, location: Element) {
    if (location.getContent().length === location.getOffset()) {
      let index = this.elements.indexOf(location);

      this.elements.splice(index + 1, 0, element);
    } else if (location.getOffset() === 0) {
      let index = this.elements.indexOf(location);

      this.elements.splice(Math.min(index - 1, 0), 0, element);
    } else {
      this.splitElement(location, location.getOffset());

      let index = this.elements.indexOf(location);

      this.elements.splice(index + 1, 0, element);
    }
  }
}
