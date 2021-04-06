module.exports = {
    LOGINPAGE: {
        USERNAME: "//input[@id='user-name']",
        PASSWORD: "//input[@id='password']",
        LOGIN_BUTTON: "//input[@id='login-button']"
    },
    HOMEPAGE: {
        PRODUCTS_TITLE_SPAN: "//span[@class='title' and text()='Products']",
        ITEM_TITLE: "//div[@class='inventory_item_name' and text()='?']",
        MY_CART: "//*[@id='shopping_cart_container']/a"
    },
    ITEMPAGE: {
        ADD_TO_CART_BUTTON: "//button[contains(@name, 'add-to-cart')]"
    },
    CARTPAGE: {
        CHECKOUT: "//*[@id='checkout']"
    },
    CHECKOUTINFOPAGE: {
        FIRST_NAME: "//*[@id='first-name']",
        LAST_NAME :"//*[@id='last-name']",
        ZIP:"//*[@id='postal-code']",
        CONTINUE:"//*[@id='continue']"
    },
    CHECKOUTOVERVIEWPAGE:{
        ITEM_ENTRY: "//div[@class='inventory_item_name' and text()='?']",
        FINISH: "//*[@id='finish']"
    },
    CHECKOUTCOMPLETE:{
        COMPLETE_HEADING:"//*[@id='checkout_complete_container']/h2"
    }
}