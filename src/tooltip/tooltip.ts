import * as ne_dom from '@ne1410s/dom';
import { CustElem } from '../cust-elem';

export class Tooltip extends CustElem {
    
    constructor() {
        super(`
            .root {
                position: relative;
                border: 1px solid black;
                border-radius: 3px;
                padding: 0 0 0 .25rem;
                margin: 0 .25rem 0 0;
                }
            .reveal {
                transition: opacity .3s;
                opacity: 0;
                position: absolute;
                top: -1px;
                left: calc(100%);
                pointer-events: none;
                padding: 0 .25rem;
                border: 1px solid black;
                border-radius: 3px;
                background: rgba(255, 255, 255, .8);
                min-width: 180px;
            }
            .root:hover .reveal {
                opacity: 1;
                pointer-events: initial;
            }    
        `, `
            <span class="root">
                <span class="normal">
                    <slot name="normal"></slot>
                </span>
                <span class="reveal">
                    <slot name="reveal"></slot>
                </span>
            </span>
        `);
    }

    public set normal(val: string) {
        //???
        //ne_dom.seek.first('[name=normal]').textContent = val;
    }

    public set reveal(val: string) {
        ne_dom.seek.first('[name=reveal]').textContent = val;
    }
}
