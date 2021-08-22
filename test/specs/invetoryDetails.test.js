import { expect } from 'chai';
import loginPage from '../pageobjects/loginPage';
import { LOGIN_USERS } from '../pageobjects/loginPage';
import inventoryList from '../pageobjects/inventoryList';
import { ITEMS, PAGES } from '../pageobjects/inventoryList';
import inventoryDetails from '../pageobjects/inventoryDetails';


describe('Inventory Item Details',() => {
    
    beforeEach( async () => {
        await browser.url('');
        await loginPage.waitForIsShown();
        await loginPage.signIn(LOGIN_USERS.valid)
    });

    it('should validate that user is able to view inventory items', async () => {
        expect(await inventoryList.waitForIsShown(), 'Inventory Items were not displayed').to.equal(true);
    });
    
    //User is able to access the Inventory Item Detail page
    it('should validate that user can view inventory item details upon click', async () => {
        const itemLink= $(`#item_${ITEMS.BACKPACK}_title_link`)
        await (await itemLink).click()
        expect(await browser.getUrl()).to.contain(`${PAGES.INVENTORY_DETAILS}?id=${ITEMS.BACKPACK}`)
        expect(await inventoryDetails.waitForIsShown(), 'Inventory Details page was not displayed').to.equal(true);
    });

    //User is able to go back to inventory List page
    it('should validate that user can go back to inventory list', async () => {
        await inventoryDetails.backToList();
        expect(await inventoryList.waitForIsShown(), 'Inventory list is still not displayed').to.equal(true);
        expect(await inventoryDetails.isDisplayed(), 'Inventory Details page is still displayed').to.equal(false);
    });

})