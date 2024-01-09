// 1
// function definition
// function yang menggunakan variable const namaVariable = function(){}
// function definition tidak bisa di panggil sebelum functionnya di buat
// karna function definition berada di dalam sebuah variable/binding
// yang pada dasarnya var,let,cons tidak bisa di panggil sebelum di buat


// const namaFunction = function(n){
    //     return n * n
// }

// 2
// function declaration
// function declaration bisa di panggil sebelum penulisan functionnya


// function hello(){
    //     alert("ini function declaration")
    // }
    

// 3
// berikut ini membuat function ES6 Arrow Function
// Arrow function

// const helloPangkat = (n) => {
//     return n*n
// }


// membuat arrow function 1 line >

const helloPangkat = n => n * n

console.log(helloPangkat(2));