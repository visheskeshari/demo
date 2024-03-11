import * as bundle from './sell.js';
import random from './customer.js'

bundle.hello();
console.log(bundle.data)
console.log(random)

// class and object

class Customer {
    constructor(n){
        this.name = n;
    }
    buy(){
        console.log(this.name)
    }
}
let customer1 = new Customer("Vishes");
let customer2 = new Customer("Keshari");
console.log(customer1, customer2)

class GuestCustomer extends Customer {
    hello(){
        console.log("hello ...")
    }
}
let customer3 = new GuestCustomer("Shri");
console.log(customer3);
customer3.buy();

// object destructuing

const person = {
    name: "Vishes",
    age: "23"
}
let {name, age} = person;
console.log(name, age)