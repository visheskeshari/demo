// CONTROL  FLOW

// without any loop
// console.log('erfefe');
// console.log('erfefe');
// console.log('erfefe');
// console.log('erfefe');
// console.log('erfefe');

// // with 'for' loop
// for(let i = 0; i<10; i++){
//     console.log('swefe');
// }

// use case of 'for' loop
let dishes = ['Paneer-Aaloo', 'Dal-Makhini', 'Dosa', 'Biriyani'];
for(let i = 0; i<dishes.length; i++){
    console.log(dishes[i]);
}

// 'while' loop
let j = 0;
while(j<5){
    console.log('while loop ' + j);
    j++;
}

// similarly you know Do-While loop

// if condition
// if-else condition
// nested if
// break and continue statements in loops
// continue simply means if condition matched, just SKIP and jump
// breaks means if condition matched, STOP the process or loop and exit from loop


// terniary operator  ? :

let age = 17;
let weight = 78;
// normal if statement
if (age<18){
    if(weight<60){
        console.log("Qualify")
    } else{
        console.log("Weight Issue")
    }
} else {
    console.log("Age Issue")
}

// using terniary operator
let qualification = age < 18 ? (weight < 60 ? "qualify" : "Weight Issue") : "Age Issue" ; 
console.log(qualification);


// SWITCH (you already know: cases, break, default)

// use of for-each method to do iteration in array
let dish = ["biriyani", "chole", "pasta", "dosa"]

dish.forEach(function(element){
    console.log(element)
})

// for in loop for objects

let car = {
    name: "Hero",
    company: "Ford",
    model: "Hatch back"
}
console.log(car)
let x = ""
for(let Key in car){
    console.log(Key)
    x = x + car[Key]
}
console.log(x);


// for-of loop -------------------------------------------------------------------------------------------------------------------------
let varanasiHotel = {
    naam: "Siddha",
    location: "lanka",
    categories: ["Chinese", "Indian", "Thai", "Italian"],
    mainMenu: ["foodA", "foodB", "foodC"],
    starterMenu: ["noodles", "momos", "cold coffee"],
    openingHours: {
        sunday:{open:"09:00AM", close:"11:00PM"},
        monday:{open:"10:00AM", close:"10:00PM"},
        tuesday:{open:"10:00AM", close:"10:00PM"},
        wednesday:{open:"10:00AM", close:"10:00PM"}
    }
}

let siddhaMenu = [...varanasiHotel.mainMenu, ...varanasiHotel.starterMenu]

for(let elem of siddhaMenu) console.log(elem)

for(let item of siddhaMenu.entries()){
    console.log(item)
    console.log(`${item[0]+1}: ${item[1]}`) // just for key-value visual representation on console
}