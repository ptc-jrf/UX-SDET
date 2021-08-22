//const loginPage = require('../pageobjects/loginPage');
import { expect } from 'chai';
import loginPage from '../pageobjects/loginPage'
import { LOGIN_USERS } from '../pageobjects/loginPage'
import inventoryList from '../pageobjects/inventoryList'

describe('Login Page', () => {

    beforeEach( async () => {
        await browser.url('');
        await loginPage.waitForIsShown();
    });

    it('should be validate that the page has loaded', async () => {
        expect(await loginPage.waitForIsShown(), 'Page did not load').to.equal(true);
    });

    it('should validate page title', async () => {
        expect(await browser.getTitle(), 'Page Title is not Swag Labs').to.equal('Swag Labs')
    });

    it('should be able to login with a valid user', async () => {
        const user= $("#user-name")
        const password= $("#password")
        const submitButton= $("//input[@type='submit']")

        await (await user).setValue('standard_user')
        await (await password).setValue('secret_sauce')
        await (await submitButton).click()

        expect(await inventoryList.waitForIsShown(), 'User was not logged in').to.equal(true);

    });

    it('should not be able to login with a locked out user', async () => {
        
        await loginPage.signIn(LOGIN_USERS.lockedout)

        expect(await loginPage.isErrorMessageDisplayed(), 'Error meesage did not display').to.equal(true);
        expect(await loginPage.getErrorMessage(), 'Error message is not as expected').to.contain(
            'Epic sadface: Sorry, this user has been locked out.'
        );

    });

});