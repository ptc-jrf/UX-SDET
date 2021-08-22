import { expect } from 'chai';
import loginPage from '../pageobjects/loginPage';
import { LOGIN_USERS } from '../pageobjects/loginPage';
import inventoryList from '../pageobjects/inventoryList';

describe('Inventory List', () => {

    beforeEach( async () => {
        await browser.url('');
        await loginPage.waitForIsShown();
        await loginPage.signIn(LOGIN_USERS.valid)
    });

    //User able to view all Inventory Items
    it('should validate that user is able to view all the items in the inventory list', async () => {
        expect(await inventoryList.isDisplayed(), 'Inventory Items were not displayed').to.equal(true);
        expect(await inventoryList.allItems(), 'There are missing items in the Inventory').to.equal(6);
    });

    //User is able to add an item to shopping cart
    it('should validate that user can add an item to cart', async () => {
        const cart = $('.shopping_cart_link');
        const addToCart = $('.btn_primary.btn_inventory');

        expect(await cart.getText(), 'The cart is not empty').to.equal('');

        await browser.pause(1000)
        await (await addToCart).click();

        expect(await cart.getText(), 'The amount indicated is not 1').to.equal('1');

    });

    //User isa able remove an item from shopping cart
    it('should validate that user can remove an item to cart', async () => {
        const cart = $('.shopping_cart_link');
        const removeFromCart = $('.btn_secondary.btn_inventory');
        
        expect(await cart.getText(), 'The amount indicated is not 1').to.equal('1');


        await browser.pause(1000)
        await (await removeFromCart).click();

        expect(await cart.getText(), 'The cart is not empty').to.equal('');

    });

});