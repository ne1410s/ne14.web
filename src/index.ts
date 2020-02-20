export { CustElem } from './cust-elem';

// Omit elements from the bundle by commenting-out groups of lines below

import { Popup } from './popup/popup';
if (window.customElements && !window.customElements.get('ne14-pop')) {
  window.customElements.define('ne14-pop', Popup);
}

import { Tooltip } from './tooltip/tooltip';
if (window.customElements && !window.customElements.get('ne14-tip')) {
  window.customElements.define('ne14-tip', Tooltip);
}