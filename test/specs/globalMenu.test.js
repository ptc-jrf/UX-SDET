import { expect } from 'chai';
import loginPage from '../pageobjects/loginPage'
import { LOGIN_USERS } from '../pageobjects/loginPage';
import inventoryList from '../pageobjects/inventoryList';
import { ITEMS } from '../pageobjects/inventoryList';
import inventoryDetails from '../pageobjects/inventoryDetails';
import globalMenu from '../pageobjects/globalMenu';

describe('Global Menu', () => {

    beforeEach( async () => {
        await browser.url('');
        await loginPage.waitForIsShown();
        await loginPage.signIn(LOGIN_USERS.valid)
    });

    //User is able to open the global menu on all pages of the application
    //User is able to close the global menu on all pages of the application
    it('should validate that menu can be opened/closed in InventoryList Page', async () => {
        await globalMenu.openMenu();
        expect(await inventoryList.isDisplayed(), 'Inventory Items were not displayed').to.equal(true);

        await globalMenu.closeMenu();
        expect(await inventoryList.isDisplayed(), 'Inventory Items were not displayed').to.equal(true);
    });
    
    //User is able to open the global menu on all pages of the application
    //User is able to close the global menu on all pages of the application
    it('should validate that menu can be opened/closed in Inventory Details Page', async () => {
        const itemLink= $(`#item_${ITEMS.BACKPACK}_title_link`)
        await (await itemLink).click()
        await inventoryDetails.waitForIsShown()

        await globalMenu.openMenu();
        expect(await inventoryDetails.isDisplayed(), 'Inventory Items were not displayed').to.equal(true);

        await globalMenu.closeMenu();
        expect(await inventoryDetails.isDisplayed(), 'Inventory Items were not displayed').to.equal(true);
    });
    
    //User is able to navigate to the Inventory List page from the global menu
    it('should validate user is directed to the Invetory List page using the menu in Inventory Details Page', async () => {
        const itemLink= $(`#item_${ITEMS.BACKPACK}_title_link`)
        await (await itemLink).click()
        await inventoryDetails.waitForIsShown()

        await globalMenu.openMenu();
        await globalMenu.allItemsMenu();

        expect(await inventoryList.waitForIsShown(), 'Inventory Item List was not displayed').to.equal(true);

    });

    //User is able to logout from the global menu
    it('should validate that user is directed to the login page upon logout', async () => {
        await inventoryList.waitForIsShown()
        await globalMenu.openMenu();
        await globalMenu.logout();
        expect(await loginPage.waitForIsShown(), 'User was not logged out').to.equal(true);
    });

});