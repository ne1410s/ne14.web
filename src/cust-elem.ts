import { forge } from '@ne1410s/dom';

export abstract class CustElem extends HTMLElement {
  
  protected root: ShadowRoot;

  constructor(css: string, html: string) {
    
    super();

    this.root = this.attachShadow({ mode: 'closed' });
    this.root.innerHTML = html;

    forge.chainDown(this.root, { tag: 'style', text: css });
  }
}