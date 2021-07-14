import { TextMeasurement } from './text-measurement';

export class Text {
  static measureText(text: string, style: string) {
    let span: HTMLSpanElement = document.createElement('span');
    let block: HTMLDivElement = document.createElement('div');
    let div: HTMLDivElement = document.createElement('div');

    block.style.display = 'inline-block';
    block.style.width = '1px';
    block.style.height = '0';

    div.style.visibility = 'hidden';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '500px';
    div.style.height = '200px';

    div.appendChild(span);
    div.appendChild(block);
    document.body.appendChild(div);

    const result: TextMeasurement = {
      ascent: 0,
      height: 0,
      descent: 0,
      width: 0
    };

    try {
      span.setAttribute('style', style);

      span.innerHTML = '';
      
      const nbsp = String.fromCharCode(160);

      span.appendChild(document.createTextNode(text.replace(/\s/g, nbsp)));

      block.style.verticalAlign = 'baseline';
      result.ascent = block.offsetTop - span.offsetTop;
      block.style.verticalAlign = 'bottom';
      result.height = block.offsetTop - span.offsetTop;
      result.descent = result.height - result.ascent;
      result.width = span.offsetWidth;
    } finally {
      div.parentNode.removeChild(div);
      div = null;
    }

    return result;
  }
}
