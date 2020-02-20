import { seek, comms } from '@ne1410s/dom';
import { CustElem } from '../cust-elem';
import markupUrl from './popup.html';
import stylesUrl from './popup.css';

export class Popup extends CustElem {

  static observedAttributes = ['open'];

  private backer: Element;

  constructor() {
    super(stylesUrl, markupUrl);

    this.backer = seek.first('.back', this.root);
    comms.on(seek.first('.fore', this.root), 'click', event => event.stopPropagation());
    comms.on(this.backer, 'click', () => this.close());
  }

  close() {
    this.removeAttribute('open');
  }

  open() {
    this.setAttribute('open', '');
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'open':
        const doOpen = !!newValue || typeof newValue === 'string';
        this.backer.classList.toggle('open', doOpen);
        break;
    }
  }

  connectedCallback() {}
  disconnectedCallback() {}
}
