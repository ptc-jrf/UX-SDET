export default class basePage {
    constructor(selector) {
        this.selector = selector;
    }

    waitForIsShown(isShown = true) {
        try{
            return $(this.selector).waitForDisplayed({
                timeout: 8000,
                revers: !isShown
            });
        } catch (e) {
            return !isShown;
        }
    }

    isDisplayed() {
        return $(this.selector).isDisplayed();
    }
}