import { seek } from '@ne1410s/dom';
import { CustElem } from '../cust-elem';

// Uses 'content' modules + rollup 'url' plugin
import markupUrl from './tooltip.html';
import stylesUrl from './tooltip.css';

export class Tooltip extends CustElem {

  static observedAttributes = ['normal', 'reveal'];

  constructor() {
    super(stylesUrl, markupUrl);
  }

  // Setting a property
  set normal(value: string) {
    seek.first('[name=normal]', this.root).textContent = value;
  }

  // Setting a property
  set reveal(value: string) {
    seek.first('[name=reveal]', this.root).textContent = value;
  }

  // Setting an (observed) attribute
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // In this case, pass-through the (observed) attributes to property setters
    // But may wish to validate and/or manipulate and/or take other actions
    // (especially so for non-string properties)
    (this as any)[name] = newValue;
  }

  // Some lifecycle methods
  connectedCallback() {}
  disconnectedCallback() {}
}
