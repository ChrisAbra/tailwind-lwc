import { LightningElement, api, track } from 'lwc';
import { setup } from 'twind/shim';

const BASE_INPUT_CLASS =
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight bg-input_background-50 focus:(ring-2 ring-blue-600) mb-sm transition transition-timing-default duration-200 ';
const ERROR_INPUT_CLASS =
    'border-red-500 focus:(outline-none ring-none border-red-100)';

export default class Input extends LightningElement {
    @api
    label;

    @api
    placeholder;

    @api
    name = 'input';

    @api
    type;

    @track types = {};

    @api
    error;

    get classes() {
        let inputs = BASE_INPUT_CLASS;
        if (this.error) {
            inputs += ` ${ERROR_INPUT_CLASS}`;
        }

        return {
            input: inputs
        };
    }

    connectedCallback() {
        this.types[this.type] = true;
    }

    renderedCallback() {
        setup({
            target: this.template
        });
    }

    handleChange() {
        this.error = null;
    }
}
