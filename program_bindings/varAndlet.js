// perbedaan var dan let

// var dan let adalah functional scope
// akan di jalankan ketiga var dan let ada di dalam functional scope

// hoisting

// console.log(name);

// let name = "agus";

// var foo = "foo";

// var lain = "yang lain";


// scope 

// for (var i = 0; i < 4; i++){
//     console.log("hello " + i)
// };
// console.log(i);


function dia() {

    var hello = "hello ";

    return hello;
    
};

dia();

console.log("di dalam function  " + hello); 
