/// <reference path="../element.ts" />
/// <reference path="../../node_modules/@ne1410s/dom/src/query.ts" />

class Tooltip extends CustomisableBase {

    static applyShorthand(): void {

        const tt = document.createElement('ne14-tooltip'),
              tt_normal = document.createElement('span'),
              tt_reveal = document.createElement('span');

        tt_normal.setAttribute('slot', 'normal');
        tt_reveal.setAttribute('slot', 'reveal');
        tt.appendChild(tt_normal);
        tt.appendChild(tt_reveal);

        let tt_clone;
        Query.array('[data-ne14-tooltip]').forEach(el => {
            tt_clone = tt.cloneNode(true);
            (tt_clone.childNodes[0] as HTMLElement).innerHTML = el.innerHTML;
            (tt_clone.childNodes[1] as HTMLElement).innerHTML = el.getAttribute('data-ne14-tooltip');
            el.parentNode.insertBefore(tt_clone, el);
            el.remove();
        });
    }
}