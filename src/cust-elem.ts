import { forge } from '@ne1410s/dom';

export abstract class CustElem extends HTMLElement {
  
  protected root: ShadowRoot;

  constructor(css: string, html: string) {
    
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = this.decode(html);

    forge.chainDown(this.root, { tag: 'style', text: this.decode(css) });
  }

  private decode(b64: string): string {
    const bIndex = (b64 + '').indexOf('base64,');
    return bIndex === -1 ? b64 : window.atob(b64.substring(bIndex + 7));
  }
}