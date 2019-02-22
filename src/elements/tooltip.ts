export class TooltipElement extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = this.html;
    }

    private readonly css: string = `
        span {
            color: red;
        }
    `;

    private readonly html: string = `
        <div>
            <style>${this.css}</style>
            <slot name="slot-1"></slot>
            <span>wootie-o</span>
            <slot name="slot-2"></slot>
        </div>
    `;
}