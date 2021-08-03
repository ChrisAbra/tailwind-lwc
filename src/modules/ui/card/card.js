import { LightningElement, api } from 'lwc';
import { setup } from 'twind/shim';

let VARIANTS = {
    base: {
        article: 'bg-white rounded-md w-full p-md overflow-hidden',
        title: 'text-3xl pb-lg',
        no_padding: '-m-md',
        footer: 'p-sm border-t-sm border-gray-400',
        actions: 'flex justify-end gap-sm flex-wrap'
    }
};

export default class Card extends LightningElement {
    @api
    classes;

    @api
    variant = 'base';

    @api
    title;

    noPaddingSlotClass = '';

    handleNoPaddingSlotChange(event) {
        const isFilled = event.target.assignedElements().length;

        this.noPaddingSlotClass = isFilled ? VARIANTS.base.no_padding : '';
    }

    connectedCallback() {
        VARIANTS.shadow = Object.assign({}, VARIANTS.base);
        VARIANTS.shadow.article = `${VARIANTS.shadow.article} shadow`;
        this.classes = VARIANTS[this.variant];
    }

    renderedCallback() {
        setup({
            target: this.template
        });
    }
}
