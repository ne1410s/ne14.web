export class TooltipElement extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.innerHTML = this.html;
    }

    private readonly css: string = `
        .root {
            position: relative;
        }
        .reveal {
            transition: opacity .3s;
            opacity: 0;
            position: absolute;
        }
        .normal:hover + .reveal {
            opacity: 1;
        }
    `;

    private readonly html: string = `
        <style>${this.css}</style>
        <span class="root">
            <span class="normal">
                <slot name="normal"></slot>
            </span>
            <span class="reveal">
                <slot name="reveal"></slot>
            </span>
        </span>
    `;
}