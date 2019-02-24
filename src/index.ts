import { TooltipElement } from "./elements/tooltip";

// Register elements
window.customElements.define('ne14-tooltip', TooltipElement);

// Strip out preload css
document.getElementById('ne14-web-preload-css').remove();

// Export utilities
export { Test } from "./test";
