import { Popup } from './popup/popup';
import { Tooltip } from './tooltip/tooltip';

if ('customElements' in window) {
  window.customElements.define('ne14-pop', Popup);
  window.customElements.define('ne14-tip', Tooltip);
}