import basePage from '../pageobjects/basePage';

const CURRENT_SELECTOR = '.inventory_details';

class inventoryDetails extends basePage {
    constructor() {
        super(CURRENT_SELECTOR);
    }

    //back button to the inventory list
    get #backToList() {return $("//button[@id='back-to-products']")};

    backToList() {
        this.#backToList.click();
    }

}

export default new inventoryDetails();