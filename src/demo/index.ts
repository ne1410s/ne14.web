import { Tooltip } from './tooltip/tooltip';

if ('customElements' in window) {
  window.customElements.define('ne14-tip', Tooltip);
}