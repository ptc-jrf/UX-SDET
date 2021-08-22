import basePage from './basePage';

const CURRENT_SELECTOR = '#login_button_container';

export const LOGIN_USERS = {
    valid: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    lockedout: {
        username: 'locked_out_user',
        password: 'secret_sauce',
    },
};

class loginPage extends basePage {
    constructor() {
        super(CURRENT_SELECTOR);
    }

    get #username() {return $('#user-name')}
    get #password() {return $('#password')}
    get #loginButton() {return $("//input[@type='submit']")}

    async signIn(userDetails) {
        const {password, username} = userDetails;

        this.waitForIsShown();
        if(username) {
            await (await this).#username.setValue(username);
        }
        if(password) {
            await (await this).#password.setValue(password);
        }
        await (await this.#loginButton).click();
    }

    get #errorMessage() {
        return $("//h3[@data-test='error']");
    }

    getErrorMessage() {
        this.#errorMessage.waitForDisplayed({timeout:8000});
        return this.#errorMessage.getText();
    }

    isErrorMessageDisplayed() {
        return this.#errorMessage.isDisplayed();
      }   
}

export default new loginPage();