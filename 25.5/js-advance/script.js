const arr = [1,2,3,4,5];

console.log(...arr); // 1 2 3 4 5

// we can't store spreaded values in a variable, but we can store them in an array

let arr2 = [...arr]; // this is perfect copy of arr

console.log(arr2); // [1, 2, 3, 4, 5]

let arr3 = arr; // this is not a copy of arr, it's a reference to arr

console.log(arr3); // [1, 2, 3, 4, 5]

let obj = {name: 'John', age: 30, status: 'single'};

let obj2 = {...obj, name: 'Jane', age: 25}; // this is a copy of obj with some changes

console.log(obj2); // {name: 'Jane', age: 25, status: 'single'}

//rest parameters and spread operator are same, but they are used in different contexts

// what is parameters = parameters are the variables that we define(pass) in the function definition

let arr4 = [1,2,3,4,5];

function addTwoNumbers(a,b){
    console.log(a + b);
}

addTwoNumbers(arr4); // 1,2,3,4,5undefined
// why this ans because arr will become a and b will be undefined, because we are only passing single parameter to the function, but the function is expecting two parameters


function addTwoNumbers2(a,b,...numbers){
    console.log(a + b); // 3
    console.log(numbers); // [3, 4, 5]
}

addTwoNumbers2(...arr4); // 3