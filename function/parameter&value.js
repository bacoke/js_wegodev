// function defaul vaule

// function defaul pada function definition

const helloPangkat = function (n) {
    if (n == undefined) {
        return 2 * 2
    }
    return n * n
}


// function default pada arrow function

// const helloPangkat = (n = 2) => {
//     return n * n

// }

console.log(helloPangkat()); 

// disini kita tidak memberikan value pada function karna sudah di beri angka default pada n = 2
// jika kita memberikan parameter pada function, angka default tidak berfungsi/tidak di gunakan
