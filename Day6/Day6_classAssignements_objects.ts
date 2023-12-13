/*
Class: Shopping Cart
     --- methods with no arguments----
    Methods: addItem(), //public
    removeItem(),//private
    
    checkout() --- methods with arguments -- accountName, cardNumber
   
    Create an instance for the class and call the methods */


class shoppingCart {

    shopSite: string;
    shopNo : number;
    name: string;  
    
    constructor(sSite:string, sNo:number, NAME: string){


        this.shopSite = sSite;
        this.shopNo = sNo;
        this.name = NAME;
        console.log(`The browser details are: ${sSite}, ${sNo}, ${NAME}`);

    }

     public addItem(){
      
        console.log("Items Added successfully")

     }

     private removeItem(){

        console.log("Removed Chocos")
     }

     checkout(accountName:string , place: string):string{
 
      return accountName+ " "+place;
      
     }

}

const myShoppingDetails = new shoppingCart("amazon.com",23,"Amazon");
const itemsStatus = myShoppingDetails.addItem();
//const removedOnes =myShoppingDetails.removeItem();
const checkoutInfo = myShoppingDetails.checkout("varun", "web");

console.log(checkoutInfo);
