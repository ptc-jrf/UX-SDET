import basePage from './BasePage';

const CURRENT_SELECTOR = '.inventory_list';

class inventoryList extends basePage {
    constructor() {
        super(CURRENT_SELECTOR);
    }
}

export default new inventoryList();