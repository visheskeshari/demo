// // Asynchronous Javascript

// // Making HTTP Request (example)

// let request = new XMLHttpRequest();

// // console.log(request, request.readyState);

// request.addEventListener('readystatechange', ()=>{
//     // console.log(request,request.readyState)
//     if(request.readyState === 4){
//         console.log(request.responseText)
//     }
// })

// // Set up the request
// request.open("Get", "http://jsonplaceholder.typicode.com/todos");

// // Sending the request
// request.send()

// // value state description
// // 0 : UNSENT Clint has been created. open() not called yet.
// // 1 : OPENED  open() has been called.
// // 2 : HEADERS_RECEIVED   send() has been called, and headers
// // 3 : LOADING  Downloading; responseText holds partial data.
// // 4 : DONE   The operation is complete



// // *******************************************************************************************************************************************************************

// // HTTP response status codes

// // Informational responses (100-199)
// // Successful responses (200-299)
// // Redirection messages (300-399)
// // Client error responses (400-499)
// // Server error responses (500-599)

// // to understand everything, let make a callback function
// let todos = ()=>{
//     let request2 = new XMLHttpRequest();

// // console.log(request, request.readyState);

// request.addEventListener('readystatechange', ()=>{
//     // console.log(request,request.readyState)
//     if(request.readyState === 4 && request.status == 200){
//         // console.log(request.responseText)
//         let jsonFormatedData = JSON.parse(request.responseText)
//         callback(undefined, jsonFormatedData)
//     } else if(request.readyState === 4){
//         // console.log("Data could not fetch")
//         callback("Data could not fetch", undefined)
//     }
// })

// // Set up the request
// request.open("Get", "http://jsonplaceholder.typicode.com/todos");
// request.open("Get", "data.js");

// // Sending the request
// request.send();
// }

// console.log(1)
// console.log(2)

// todos((error, Data)=>{       // will take some time
//     // console.log("Callback function is fired")
//     if (error){
//         console.log(error)
//     } else {
//         console.log(Data)
//     }
// });             // async code example 

// console.log(3)
// console.log(4)

// Callback Hell (chain of callback functions inside one another)


// PROMISE --------------------------------------------------------------------------------------------------------------------------------

// example 
let getSomething = ()=>{
    
    return new Promise((resolve, reject)=>{
    // resolve("Some data")
    reject("Some error")
    })
}

getSomething().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("error")
})


// practical example

let todos = (resource)=>{

    return new Promise((resolve, reject)=>{
        let request3 = new XMLHttpRequest();

        request3.addEventListener('readystatechange', ()=>{
            // console.log(request,request.readyState)
            if(request.readyState === 4 && request.status == 200){
                // console.log(request.responseText)
                let jsonFormatedData = JSON.parse(request.responseText)
                resolve(data)  // javascript object format
            } else if(request.readyState === 4){
                // console.log("Data could not fetch")
                reject("error in fetching the data")
            }
        })
            
        // Set up the request
        request3.open("Get", "http://jsonplaceholder.typicode.com/todos");
        request3.open("Get", "data.js");

        // Sending the request
        request3.send();
    })

}

// chanining of Promises also happens to avoid hell of callbacks
// it is done by '.then'
// catch only happens once to catch first error


// now instead of doing all the above code like AJAX, we can simply use 'fetch' api

fetch("data.json").then((response)=>{
    console.log("Promise ressolve ", response)
    return response.json() // returning promise
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

// async and await
// non blocking

let getTodos = async()=>{
    try{
        let response = await fetch("data.json")

    //custom error
    if (response.status !== 200){
        throw new Error("Custom error")
    }

    let data = await response.json()
    return data;
    }
    catch(error){
        console.log(error.message)
    }
    
}

console.log(1)

getTodos().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

console.log(2)

