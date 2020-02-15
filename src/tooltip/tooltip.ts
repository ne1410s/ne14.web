// import ne14_dom from '@ne1410s/dom';
// import { CustomisableBase } from "../base";

// export class Tooltip extends CustomisableBase {
    
//     get css(): string { return "p { background: wheat; }"; }
//     get html(): string { return '<p>Replace me</p>'; }

//     static applyShorthand(): void {

//         const tt = document.createElement('ne14-tooltip'),
//               tt_normal = document.createElement('span'),
//               tt_reveal = document.createElement('span');

//         tt_normal.setAttribute('slot', 'normal');
//         tt_reveal.setAttribute('slot', 'reveal');
//         tt.appendChild(tt_normal);
//         tt.appendChild(tt_reveal);

//         let tt_clone;
//         ne14_dom.seek.each('[data-ne14-tooltip]', el => {
//             tt_clone = tt.cloneNode(true);
//             (tt_clone.childNodes[0] as HTMLElement).innerHTML = el.innerHTML;
//             (tt_clone.childNodes[1] as HTMLElement).innerHTML = el.getAttribute('data-ne14-tooltip');
//             el.parentNode.insertBefore(tt_clone, el);
//             el.remove();
//         });
//     }
// }