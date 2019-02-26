/// <reference path="tooltip/tooltip.ts" />

// Register elements here
window.customElements.define('ne14-tooltip', Tooltip);

window.addEventListener('load', () => {

    // Apply shorthands here
    Tooltip.applyShorthand();
});
