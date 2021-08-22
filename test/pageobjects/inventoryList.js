import basePage from './BasePage';

const CURRENT_SELECTOR = '.inventory_list';

export const PAGES = {
    CART: '/cart.html',
    CHECKOUT_COMPLETE: '/checkout-complete.html',
    CHECKOUT_PERSONAL_INFO: '/checkout-step-one.html',
    CHECKOUT_SUMMARY: '/checkout-step-two.html',
    LOGIN: '',
    INVENTORY_DETAILS: '/inventory-item.html',
    INVENTORY: '/inventory.html',
};

export const ITEMS = {
    BIKE_LIGHT: 0,
    BOLT_SHIRT: 1,
    ONE_SIE: 2,
    TATT_SHIRT: 3,
    BACKPACK: 4,
    FLEECE_JACKET: 5,
};

class inventoryList extends basePage {
    constructor() {
        super(CURRENT_SELECTOR);
    }

    //number of items
    get #invItems() {return $$('.inventory_item')};

    allItems() {
        return this.#invItems.length;
    }
}

export default new inventoryList();