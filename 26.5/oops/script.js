// classes is the special type of function used for creating multiple objects
// constructor method is the special function used for creating objects of a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


// this is noob way
let johnAcc = {
    name: "john",
    age: 30,
    status: "active",
    accNo: 1234567890,
    balance: 1000,
    deposit: function(balance) {
        this.balance += balance; // this keyword is used to refer to the current object
    }
}

johnAcc.deposit(1000);
console.log(johnAcc.balance);


// proper way
class BankAccount {
    constructor(name, age, accNo, balance) {
        this.name = name;
        this.age = age;
        this.accNo = accNo;
        this.balance = balance;
    }
    deposit(balance) {
        this.balance += balance;
    }
}

let samAcc = new BankAccount("sam", 30, 1234567890, 1000);
console.log(samAcc);
samAcc.deposit(1000);
console.log(samAcc);

console.log(BankAccount.prototype)
console.log(Object.getPrototypeOf(samAcc))