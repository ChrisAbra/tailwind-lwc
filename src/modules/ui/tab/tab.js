import { LightningElement, api } from 'lwc';
import { setup } from 'twind/shim';

export default class Tab extends LightningElement {
    @api
    label;

    @api
    labelClasses;
    @api
    selected;

    connectedCallback() {
        const registerTab = new CustomEvent('registertab', {
            bubbles: true,
            detail: {
                label: this.label
            }
        });
        this.dispatchEvent(registerTab);
    }
    renderedCallback() {
        setup({
            target: this.template
        });
    }
}
