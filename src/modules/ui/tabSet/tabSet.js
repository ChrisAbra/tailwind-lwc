import { LightningElement, track, api } from 'lwc';
import { setup } from 'twind/shim';

const VARIANTS = {
    base: {
        container: 'w-full bg-white',
        nav: 'flex flex-col sm:flex-row border-b-2',
        content: 'p-md bg-white',
        active: 'text-brand-900 py-sm px-md block border-b-2 border-brand-300 -mb-0.5 focus:(outline-none) underline',
        inactive:
            'text-gray-600 py-sm px-md block hover:text-brand-700 focus:(outline-none) transition'
    },
    scoped: {
        container: 'w-full',
        content: 'p-md bg-white',
        nav: 'flex flex-col sm:flex-row bg-gray-100 border-b-2',
        active: 'text-brand-900 py-sm px-md block bg-white border-b-2 border-white focus:(outline-none) -mb-0.5 underline',
        inactive:
            'text-gray-600 py-sm px-md border-r-1 border-gray-200 block hover:text-brand-700 focus:(outline-none) transition'
    },
    vertical: {
        container: 'flex w-full',
        content: 'p-md bg-white flex-grow',
        nav: ' bg-gray-100 border-b-2',
        active: 'text-brand-900 py-sm px-md block bg-white -mr-0.5 w-full focus:(outline-none) underline',
        inactive:
            'text-gray-600 py-sm px-md border-r-1 border-b-1 border-gray-200 block hover:text-brand-700 w-full focus:(outline-none) transition'
    }
};

export default class TabSet extends LightningElement {
    @track tabs = [];

    @api
    variant = 'base';

    @api
    defaultOpen = 0;

    classes;
    connectedCallback() {
        this.classes = VARIANTS[this.variant];
    }

    registerTab() {
        this.labels = [];
        this.tabs = this.querySelectorAll('ui-tab');

        this.selectTab(this.defaultOpen);
    }

    unselectAllTabs() {
        this.tabs.forEach((tab) => {
            tab.selected = false;
            tab.labelClasses = VARIANTS[this.variant].inactive;
        });
    }

    @api
    selectTab(index) {
        this.unselectAllTabs();

        if (this.tabs[index]) {
            const selectedTab = this.tabs[index];
            selectedTab.selected = true;
            selectedTab.labelClasses = VARIANTS[this.variant].active;
        }
    }

    handleTabSelect(event) {
        this.selectTab(event.target.dataset.index);
    }

    renderedCallback() {
        setup({
            target: this.template
        });
    }
}
