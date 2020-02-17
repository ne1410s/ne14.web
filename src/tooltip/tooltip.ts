import { seek } from '@ne1410s/dom';
import { CustElem } from '../cust-elem';
import elem_markup from './tooltip.html';
import elem_styles from './tooltip.css';

export class Tooltip extends CustElem {

  static observedAttributes = ['normal', 'reveal'];

  static decode(val: string): string {
    return window.atob(val.substring(val.indexOf('base64,') + 7));
  }

  constructor() {
    super(Tooltip.decode(elem_styles), Tooltip.decode(elem_markup));
  }

  set normal(value: string) {
    seek.first('[name=normal]', this.root).textContent = value;
  }

  set reveal(value: string) {
    seek.first('[name=reveal]', this.root).textContent = value;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // In this case, pass-through the (observed) attributes to property setters
    // But may wish to validate and/or manipulate and/or take other actions
    // (especially so for non-string properties)
    (this as any)[name] = newValue;
  }

  connectedCallback() {}
  disconnectedCallback() {}
}
