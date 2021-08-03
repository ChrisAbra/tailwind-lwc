import { LightningElement, api } from 'lwc';
import { setup } from 'twind/shim';

const BASE_CLASSES =
    'h-10 font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition transition-timing-default duration-200 focus-visible:shadow-outline';
const SIDE_CLASSES = {
    none: 'rounded-md m-xs',
    left: 'rounded-l-md m-l-xs rounded-r-none m-r-none',
    middle: '',
    right: 'rounded-l-none m-l-none rounded-r-md m-r-xs'
};

const VARIANTS = {
    base: 'text-brand-600 border-brand-500 border-1  hover:(text-brand-700 bg-brand-100) focus-visible:(ring-2 ring-brand-600 ring-offset-2)',
    link: 'text-blue-600 visited:text-purple-600  hover:(text-brand-900 underline) focus-visible:(ring-2 ring-blue-600 ring-offset-2)',
    brand: 'text-white bg-brand-600 border-brand-600 hover:(border-brand-700 bg-brand-700) focus-visible:(ring-2 ring-brand-600 ring-offset-2)',
    destructive:
        'hover:text-destructive-0 border-destructive-600 hover:border-destructive-700 hover:bg-destructive-500 bg-destructive-700 text-white focus-visible:(ring-2 ring-destructive-700 ring-offset-2)',
    success:
        'hover:text-success-0 border-success-600 hover:border-success-900 hover:bg-success-900 bg-success-700 text-white focus-visible:(ring-2 ring-success-600 ring-offset-2)',
    destructive_text:
        'text-destructive-700  border-destructive-700 border-1 hover:(bg-destructive-100 text-destructive-700) focus-visible:(ring-2 ring-destructive-700 ring-offset-2)'
};

export default class Button extends LightningElement {
    @api
    label;

    @api
    variant = 'base';
    @api
    side = 'none';

    classes;

    connectedCallback() {
        this.classes = `${BASE_CLASSES} ${SIDE_CLASSES[this.side]} ${
            VARIANTS[this.variant]
        }`;
    }
    renderedCallback() {
        setup({
            target: this.template
        });
    }
}
