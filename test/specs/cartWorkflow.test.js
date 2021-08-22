import { expect } from 'chai';
import loginPage from '../pageobjects/loginPage';
import { LOGIN_USERS } from '../pageobjects/loginPage';
import { PAGES, ITEMS } from '../pageobjects/inventoryList';

describe('Cart Checkout Workflow', () => {

    beforeEach( async () => {
        await browser.url('');
        await loginPage.waitForIsShown();
        await loginPage.signIn(LOGIN_USERS.valid)
    });

    //User is able to confirm Item added to cart exists in the Cart Summary Page
    it('should validate that Item added to cart exists in Cart Summary Page', async () => {
        const addToCart = $('.btn_primary.btn_inventory');
        const itemLink= $(`#item_${ITEMS.BACKPACK}_title_link`);
        const cartLink = $("//a[@class='shopping_cart_link']")


        await (await itemLink).click()
        await (await addToCart).click();
        await browser.pause(1000)
        await (await cartLink).click();

        expect(await browser.getUrl()).to.contain(`${PAGES.CART}`)
        expect(await $(`#item_${ITEMS.BACKPACK}_title_link`).isDisplayed(), 'Item added to cart was not in Cart Summary Page').to.equal(true);

    });

    //User is able to remove Item added to cart in the Cart Summary Page
    it('should validate that Item added to cart can be removed in Cart Summary Page', async () => {
        const removeToCart = $('.btn_secondary.cart_button');
        const itemLink= $(`#item_${ITEMS.BACKPACK}_title_link`);
        const cartLink = $("//a[@class='shopping_cart_link']")


        await (await itemLink).click()
        await (await cartLink).click();
        await browser.pause(1000)
        await (await removeToCart).click();

        expect(await browser.getUrl()).to.contain(`${PAGES.CART}`)
        expect(await $(`#item_${ITEMS.BACKPACK}_title_link`).isDisplayed(), 'Item added to cart was not in Cart Summary Page').to.equal(false);

    });

    //User is able to proceed to Step 1: Provide Personal Info page after checkout
    it('should validate that user is directed to Personal Info Page upon clicking checkout in Cart Summary Page', async () => {
        const addToCart = $('.btn_primary.btn_inventory');
        const itemLink= $(`#item_${ITEMS.BACKPACK}_title_link`);
        const cartLink = $("//a[@class='shopping_cart_link']");
        const checkoutbutton = $('#checkout');


        await (await itemLink).click()
        await (await addToCart).click();
        await browser.pause(1000)
        await (await cartLink).click();

        
        await (await checkoutbutton).click();
        expect(await browser.getUrl()).to.contain(`${PAGES.CHECKOUT_PERSONAL_INFO}`);
    });

    //User is unable to proceed with checkout when providing incomplete info
    it('should validate that an error occurs when not providing all of the peronal info', async () => {
        const cartLink = $("//a[@class='shopping_cart_link']");
        const checkoutbutton = $('#checkout');
        await (await cartLink).click();
        await (await checkoutbutton).click();

        const firstName = $('[data-test="firstName"]');
        const lastName = $('[data-test="lastName"]');
        const zipCode = $('[data-test="postalCode"]');
        const errorMessage = $('[data-test="error"]');


        await firstName.addValue('Auto');
        await lastName.addValue('Test');
        await zipCode.addValue('');

        await $("//input[@type='submit']").click();

        expect(await errorMessage.isDisplayed(), 'No error message displayed').to.equal(true);
        expect(await errorMessage.getText(), 'Unexpected error message contents').to.contain(
            'Error: Postal Code is required'
        )

    });
    
    //User is able to proceed to the Checkout Summary page after providing complete personal info
    it('should validate that user is directed to checkout summary after providing complete personal info', async () => {
        const cartLink = $("//a[@class='shopping_cart_link']");
        const checkoutbutton = $('#checkout');
        await (await cartLink).click();
        await (await checkoutbutton).click();

        const firstName = $('[data-test="firstName"]');
        const lastName = $('[data-test="lastName"]');
        const zipCode = $('[data-test="postalCode"]');
        const errorMessage = $('[data-test="error"]');


        await firstName.addValue('Auto');
        await lastName.addValue('Test');
        await zipCode.addValue('1234');

        await $("//input[@type='submit']").click();


        expect(await browser.getUrl()).to.contain(`${PAGES.CHECKOUT_SUMMARY}`);

    });
    
    //User is able to confirm that item checked out exists in the Checkout Summary page
    it('should validate that item checked out is existing in the checkout summary page', async () => {
        const cartLink = $("//a[@class='shopping_cart_link']");
        const checkoutbutton = $('#checkout');
        await (await cartLink).click();
        await (await checkoutbutton).click();

        const firstName = $('[data-test="firstName"]');
        const lastName = $('[data-test="lastName"]');
        const zipCode = $('[data-test="postalCode"]');
        const errorMessage = $('[data-test="error"]');


        await firstName.addValue('Auto');
        await lastName.addValue('Test');
        await zipCode.addValue('1234');

        await $("//input[@type='submit']").click();

        expect(await $$('.cart_item').length, 'Item does not match').to.equal(1);
    });
    
    //User is able complete the checkout
    it('should validate that Checkout is completed', async() => {
        const cartLink = $("//a[@class='shopping_cart_link']");
        const checkoutbutton = $('#checkout');
        await (await cartLink).click();
        await (await checkoutbutton).click();

        const firstName = $('[data-test="firstName"]');
        const lastName = $('[data-test="lastName"]');
        const zipCode = $('[data-test="postalCode"]');
        const errorMessage = $('[data-test="error"]');


        await firstName.addValue('Auto');
        await lastName.addValue('Test');
        await zipCode.addValue('1234');

        await $("//input[@type='submit']").click();
        await $('#finish').click();

        expect(await browser.getUrl()).to.contain(`${PAGES.CHECKOUT_COMPLETE}`);
        
    });

});