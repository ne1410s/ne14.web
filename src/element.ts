export abstract class CustomisableBase extends HTMLElement {

    abstract get html(): string;
    abstract get css(): string;

    constructor() {
        super();
        
        this.init();
    }

    private init(): void {
        
        const elem_shadow = this.attachShadow({ mode: 'closed' }),
              elem_style = document.createElement('style');

        elem_style.innerHTML = this.css;
        elem_shadow.innerHTML = this.html;

        elem_shadow.prepend(elem_style);
    }
}