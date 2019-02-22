export class TooltipElement extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.innerHTML = this.html;
    }

    private readonly css: string = `
        span {
            color: red;
        }
    `;

    private readonly html: string = `
        <style>${this.css}</style>
        <div>
            <slot name="slot-1"></slot>
            <span>wootie-o</span>
            <slot name="slot-2"></slot>
        </div>
    `;
}