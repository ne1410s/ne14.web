import { seek } from '@ne1410s/dom';
import { CustomElementBase } from '../..';
import markupUrl from './tooltip.html';
import stylesUrl from './tooltip.css';

export class Tooltip extends CustomElementBase {

  static observedAttributes = ['corner', 'reveal'];

  constructor() {
    super(stylesUrl, markupUrl);
  }

  set reveal(value: string) {
    this.setAttribute('reveal', value);
  }

  set corner(value: number) {
    this.setAttribute('corner', value + '');
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'corner':
        const target = seek.first('.reveal', this.root);
        const corner = '1234'.split('').indexOf(newValue) === -1 ? '' : newValue;
        if (corner) target.setAttribute('data-corner', corner + '');
        else target.removeAttribute('data-corner');
        break;
      case 'reveal':
        seek.first('[name=reveal]', this.root).textContent = newValue;
        break;
    }
  }

  connectedCallback() {}
  disconnectedCallback() {}
}
