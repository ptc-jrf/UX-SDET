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

Run the automation tests (Chrome & Firefox):
```
npm test
```
