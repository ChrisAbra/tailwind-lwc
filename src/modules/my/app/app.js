import { LightningElement } from 'lwc';
import { setup } from 'twind/shim';

export default class App extends LightningElement {
    renderedCallback() {
        setup({
            target: this.template
        });
    }
}
