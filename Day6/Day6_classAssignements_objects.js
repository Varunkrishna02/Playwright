/*
Class: Shopping Cart
     --- methods with no arguments----
    Methods: addItem(), //public
    removeItem(),//private
    
    checkout() --- methods with arguments -- accountName, cardNumber
   
    Create an instance for the class and call the methods */
var shoppingCart = /** @class */ (function () {
    function shoppingCart(sSite, sNo, NAME) {
        this.shopSite = sSite;
        this.shopNo = sNo;
        this.name = NAME;
        console.log("The browser details are: ".concat(sSite, ", ").concat(sNo, ", ").concat(NAME));
    }
    shoppingCart.prototype.addItem = function () {
        console.log("Items Added successfully");
    };
    shoppingCart.prototype.removeItem = function () {
        console.log("Removed Chocos");
    };
    shoppingCart.prototype.checkout = function (accountName, cardNumber) {
        return accountName + " " + cardNumber;
    };
    return shoppingCart;
}());
var myShoppingDetails = new shoppingCart("amazon.com", 23, "Amazon");
var itemsStatus = myShoppingDetails.addItem();
//const removedOnes =myShoppingDetails.removeItem();
var checkoutInfo = myShoppingDetails.checkout("varun", 909090);
console.log(checkoutInfo);
