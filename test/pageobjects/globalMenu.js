class globalMenu {

    //menu access buttons
    get #gMenu() {return $('.bm-burger-button')};
    get #closeMenu() {return $("//button[@id='react-burger-cross-btn']")};

    openMenu () {
        this.#gMenu.click();
        browser.pause(1000);
    }

    closeMenu () {
        this.#closeMenu.click();
        browser.pause(1000);
    }

    //menu options
    get #logoutButton() {return $('#logout_sidebar_link')};
    get #inventoryList() {return $('#inventory_sidebar_link')};

    logout() {
        this.#logoutButton.click();
    }

    allItemsMenu() {
        this.#inventoryList.click();
    }

}

export default new globalMenu();