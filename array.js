// ARRAYS

let dishes = ['Paneer-Aaloo', 'Dal-Makhini', 'Dosa', 'Biriyani'];
console.log(dishes);

//fetch elemnt of array 
console.log(dishes[2]);

// modify the array
dishes[1] = 'Momos';
console.log(dishes);

//methods in array -------------------------------------------------------

// 1. Join Method
console.log(dishes.join(','));

// 2. IndexOf
console.log(dishes.indexOf("Dosa")); //case sensitive

// 3. concat
let sweets = ['Rasgulla', 'Gulab Jamun', 'Barfi'];
let updatedDishes = dishes.concat(sweets)
console.log(updatedDishes);

// 4. Length method
console.log(updatedDishes.length);

//NOTE: till now, there is no any mutating method i.e., they are not modifying the original 'dishes' array

// now some mutating methods -----

// Push Method
console.log(updatedDishes.push("Gol-Gappe")) // return new length (not modified array)
console.log(updatedDishes);

// Pop method
console.log(updatedDishes.pop());
console.log(updatedDishes)

// use of for-each method to do iteration in array
let dish = ["biriyani", "chole", "pasta", "dosa"]

dish.forEach(function(element){
    console.log(element)
})

// objects inside an array
 
let blocklist = [{name:"Vishes", reason:"Mad person"},{name:"Shrishti", reason:"Mad Girl"}];
console.log(blocklist);
for(let i = 0; i<blocklist.length; i++){
    console.log(`User ${blocklist[i].name} is banned due to ${blocklist[i].reason}`)
}

// objects/array how refrence is passed to variable
let arr = [3,4,5,6,7]
let ref = arr;

ref[3] = 5;
ref.shift();

console.log("original array", arr)
console.log("refrence array", ref)
// both reflect the change, why? : because new copy is not created here, but ref is pointing towards the same location of arr
console.log("*****************")
// so, to do something, we use pass by value concept
let getValue = [...arr];
getValue[3] = 1;
console.log("original array", arr)
console.log("copied array", getValue)

// ******************************************************************************************************************************************************************

// Working with arrays (Simple Methods)----------------------------------------------------------------------------------------------------

let letters = ['a','b','c','d'];

// Reverse method (a mutating method)

let reverse = letters.reverse();
console.log(reverse)
console.log(letters)

// Concat method (not a mutable method)
let numbers = [1,2,3,4,5]
let concated = numbers.concat(letters);
console.log(concated)

// Join method (not a mutable method)
let joined = letters.join('---')
console.log(joined)

// Slice Method 
// used to Extract part of the array
// return new Array of extracted elements
let vis = [3,4,5,1,3,0,9]
let extractedArray = vis.slice(2,6);
console.log("Original array is ", vis);
console.log("Sliced array is ", extractedArray)

// Splice method (a mutating method)
// used to add new element/s into the array
// Array.splice(index,deldeteValue,valueToBeAdded)
// return deleted items in the form of array
let base = [1,2,3,4,5,6,7];
let updated = base.splice(2,3,0,0)

console.log("Original Array = ", base)
console.log("returned Element Array = ", updated)


// at method --------------------
let full = [5,7,3,9,1,8];
console.log(full[1]);
console.log(full.at(1));

// use case of at method
console.log(full[full.length-1]); // one way
console.log(full.slice(-1)[0]); // another way but too much mind use
console.log(full.at(-1)) // it is easy to use 

// Working with arrays (Higher Order Methods)----------------------------------------------------------------------------------------------------

// Map method 
// creates new array from original array by applying Transformation Function
// length of the new array always 'equal' to the original array

let salaries = [30000, 40000, 50000, 60000, 70000];

let newSalaries = salaries.map(salary =>{
    let incrementedAmmount = salary/2;
    return salary + incrementedAmmount;
})
console.log("Salaries after 50% increament: ",newSalaries);


// Filter method
// used to perform filteration on array
// length or new array may or may not be equal to original array

let gifts = ["Watch", "Ring", "Choclates", "Teddy", "Braclet"];
// now you want to filter only "watch" and "ring"
let filteratedArray = gifts.filter(gift =>{
    if (gift == "Watch" || gift == "Ring"){
        return gift
    }
})
// it will return new array
console.log(filteratedArray)
console.log(gifts)

//new example 
let array1 = [2,3,4,5];
let array2 = array1.filter(function(x){
    if(x%2 == 0){
        return x;
    }
});
//or
// let array2 = array1.filter(x=> x%2 == 0); // by arrow function

console.log(array2)


// reduce method
// run reducer function for each array element (kind of like loop)
// Array.reduce(function(total, currentValue), initialValue)
// it return single value
// does not mutate the original array

// use case example : Sum of all elements
let cap = [1,3,5,7,9];
let sum = cap.reduce(function(total, currentValue){
    return total + currentValue;
}, 0)
console.log(sum)
console.log(cap)


// find method 
// it returns the 'first' element we are looking for...

let students = [{id:1, name:"Vishes"},{id:2, name:"Shrishti"}, {id:1, name:"Vinod"}];

let result = students.find(person =>{
    return person.id === 1;
})
console.log(result)

// findIndex method
// it return 'index' of that array element which firstly pass the condition
// if not found, then it give -1
// different than findIndexOf because we can give condition in findIndex

let teachers = [{id:1, name:"Raj"},{id:2, name:"Priya"}, {id:1, name:"Dev"}];

let output = teachers.findIndex(person =>{
    return person.name === "Priya";
})
console.log(output)

// or another example is ...

let ages = [11,34,21,10,98];
let check = ages.findIndex(age =>{
    return age > 15;
})
console.log("Index of required age is ", check)


// "some" and "every" method 

// 'some' method return 'true' if any element pass the test (it is like OR condition)
// 'every' method return 'true' if all the elements pass the test (it is like AND condition)

let scores = [24, 56, 190, 34, 0, 67]
let qualifier = scores.some(score =>{
    return score > 50;
})
console.log(qualifier)

let marks = [56, 78, 67, 89, 30, 61]
let passing = marks.every(input =>{
    return input > 50;
})
console.log(passing)


// 'flat' method
// it creates a new array with elements of the subarrays 'concatinated' into it (non mutating in nature)
// Array.flat(level of nesting) , by default the level is 1

let bing = [1,2,3,[0,9,8,[4,5,6,[7,1,4],9,1,3],1,1,2],8,8,9]

let flatBing = bing.flat(2);

console.log("Before flat ", bing);
console.log("After flat ", flatBing);


// 'flatMap' method
// it is a combination of the 'map' method followed by 'flat' method

let cart = [
    {
        name: "Mobile", qty: 2, price: 20000
    },
    {
        name: "Tablet", qty: 1, price: 30000
    }
]

let newCart = cart.flatMap(item =>{
    if (item.name === "Mobile"){
        return[item,{name:"Screen Gaurd", qty:1, price:0}
        ]
    } else {
        return [item]
    }
})

console.log(newCart)


// Sorting arrays using sort method -----------------------------------------------------------------------------------------------------------------------------

// by default sort method is used to sort strings
// here it firstly converts evrything into string and then sort
// ascending by default

let aplphabets = ['a', 'b', 'c', 'd', 'e'];
console.log(aplphabets.sort());

let numerals = [2,3,-5,-90,4,23,45,77,-12];
console.log(numerals.sort());  // output: -12,-5,-90,2,23,3,4,45,77
// why not correct output, because it it treating numbers as string and taking their asci values to compare, instead of their real value
// so in order to tell program how to compare, we have to give our own condition

// if a-b < 0 => a<b => a,b (keep order same)
// if a-b > 0 => a>b => b,a (switch the order)

// Ascending order
numerals.sort((a,b)=>{
    if (a<b){
        return -1 // return any negative number to tell the browser not to swap
    }
    if (a>b){
        return 1 // return any positive number to tell the browser to swap
    }
})
console.log("sorted array is ", numerals)

// or

numerals.sort((a,b)=>{
    if (a<b){
        return a-b
    }
})
console.log("sorted ", numerals)

// Decending order 
let bro = [-90,33,51,-1,-113,43,56,77]
bro.sort((a,b)=>{
    if (a>b){
        return b-a
    }
})
console.log("sorted bro", bro)


// Chain of methods ------------------------------------------------------------------------------

let zaz = [2,3,4,5,7,8,9];
let zazResult = zaz.slice(0,3).splice(2,1,7).push(8,4,5,7);
// alwways keep in mind what function returns like splice only returns spliced element, whereas push returns length of the array after push

console.log(zazResult)

// ****************************************************************************************************************************************************************************
// Destructuring of Arrays ----------------------------------------------------------------------------------------------------------------------------------------------------

let hotel = {
    name: "hotel",
    location: "street no. xyn Delhi",
    categories: ["Chinese", "Italian", "English"]
}

// Simple example

let items = [2,3,4,5]

// without destructuring

// let x = items[0]
// let y = items[1]
// let z = items[2]
// let p = items[3]
// console.log(x,y,z,p)

// with Destructuring 

let [x,y,z,p] = items;

console.log(x,y,z,p)

// example 2 

let [first, ,third] = hotel.categories
console.log(first,third)

let [main,secondary] = hotel.categories;
console.log(main, secondary)

// swap without destructuring
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary)

// swap with destructuring
// [secondary, main] = [main,secondary]
console.log(main,secondary)

// Destructuring of nested arrays ---------------------------------------------------------------

let nums = [2,3,[6,9]];
// let [a,b] = nums;
let [a, ,[b,c]] = nums
console.log(a,b,c)

