# Coding Test for UX SDET Role
Test automation scripts meant as a short coding test for UX SDET Role. 

---

### Technology
WebDriverIO, Mocha, Node JS

---
### Functionality
The automation test scripts include:
* UI
  * Login
    * User is able to access the Login Page
    * Page title is correct
    * User is able to login with registered credentials
    * User is unable to login with locked out credentials
  * Inventory List
    * User able to view all Inventory Items
    * User is able to add an item to shopping cart
    * User isa able remove an item from shopping cart
  * Inventory Item Details
    * User is able to access the Inventory Item Detail page
    * User is able to go back to inventory List page
  * Global Menu
    * User is able to open the global menu on all pages of the application
    * User is able to close the global menu on all pages of the application
    * User is able to navigate to the Inventory List page from the global menu
    * User is able to logout from the global menu
  * Cart/Checkout Workflow
    * User is able to confirm Item added to cart exists in the Cart Summary Page
    * User is able to remove Item added to cart in the Cart Summary Page
    * User is able to proceed to Step 1: Provide Personal Info page after checkout
    * User is unable to proceed with checkout when providing incomplete info
    * User is able to proceed to the Checkout Summary page after providing complete personal info
    * User is able to confirm that item checked out exists in the Checkout Summary page
    * User is able complete the checkout

NOTES:
Test scripts written does not cover all scenarios since the purpose is for a short coding test.

---

## Local Dev Set Up

Clone the repository to your local computer
```
git clone https://github.com/robbfactor/UX-SDET.git
```

Use the package manager `npm` to install dependencies:
```
npm install
```

Run the automation tests (Chrome):
```
npm test
```
