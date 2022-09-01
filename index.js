
var customerName = "bob";

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    window.bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Jerry";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bob";
}