export abstract class CustomElementBase extends HTMLElement {
  
  protected root: ShadowRoot;

  constructor(css: string, html: string, mode: ShadowRootMode = 'closed') {
    
    super();

    this.root = this.attachShadow({ mode });
    this.root.innerHTML = this.decode(html);

    const style = document.createElement('style');
    style.textContent = this.decode(css);
    this.root.appendChild(style);
  }

  private decode(b64: string): string {
    const bIndex = (b64 + '').indexOf('base64,');
    return bIndex === -1 ? b64 : window.atob(b64.substring(bIndex + 7));
  }
}