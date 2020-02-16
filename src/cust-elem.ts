export class CustElem extends HTMLElement {
  
  constructor(css: string, html: string) {
    
    super();

    const elem_shadow = this.attachShadow({ mode: 'closed' }),
          elem_style = document.createElement('style');

    elem_style.innerHTML = css;
    elem_shadow.innerHTML = html;
    
    elem_shadow.prepend(elem_style);

  }
}