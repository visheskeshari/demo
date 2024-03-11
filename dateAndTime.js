// Date and Time method

// Date object always carry both 'date' and 'time'

// using date method
// (year,month,date,hour,min,sec) format
let currentDate = new Date(2015,11,2);  // 0 to 11 not 1 to 12 (months) and same with year (if you are writting 2 digits of that)
console.log(currentDate)

// using time stamp (integer number represent in "ms" form 1/1/1970)
let date = new Date(86400000) // 0 is time in ms
// 1 day = 24 * 60 * 60 = 86400000 ms
console.log(date)

// to get time in 'ms'
let today = new Date().getTime();
console.log(today) // output: 1685649437692 ms


let completeDateAndTime = new Date();
console.log(completeDateAndTime);

// Get full year
console.log(completeDateAndTime.getFullYear());

// Get Month
console.log(completeDateAndTime.getMonth());
// 0-January, 1-February, 2-March and so on...

// Get Week Day
console.log(completeDateAndTime.getDay()); 
// 0-Sunday, 1-Monday, 2-Tuesday and so on...


/// there are many other get methods, you can check 

// *****************************************************************************************************
// DIGITAL Clock html 

let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.minute');
let secondHand = document.querySelector('.second');

let ticking = function(){
    let exactDate = new Date();
    let getHr = exactDate.getHours();
    let getMin = exactDate.getMinutes();
    let getSec = exactDate.getSeconds();

    hourHand.textContent = getHr;
    minuteHand.textContent = getMin;
    secondHand.textContent = getSec;
}

setInterval(ticking, 1000) // 1000  = 1sec