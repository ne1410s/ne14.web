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
        const target = this.root.querySelector('.reveal');
        const corner = '1234'.split('').indexOf(newValue) === -1 ? '' : newValue;
        if (corner) target.setAttribute('data-corner', corner + '');
        else target.removeAttribute('data-corner');
        break;
      case 'reveal':
        const slot = this.root.querySelector('slot[name=reveal]');
        slot.textContent = newValue;
        break;
    }
  }

  connectedCallback() {}
  disconnectedCallback() {}
}
