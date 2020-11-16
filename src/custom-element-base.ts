export abstract class CustomElementBase extends HTMLElement {
  protected root: ShadowRoot;

  constructor(css: string, html: string, mode: ShadowRootMode = 'closed') {
    super();

    this.root = this.attachShadow({ mode });
    this.root.innerHTML = html;

    const style = document.createElement('style');
    style.textContent = css;
    this.root.appendChild(style);
  }
}
