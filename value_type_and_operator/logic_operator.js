// logic operator dan advanced comparison


// ==
// ===

let firstName = "Lionel";
let lastName = "Messi";
let shirtNum = 10;

console.log(firstName == "lionel");
console.log(firstName == "Lionel");


console.log(shirtNum == "10"); // loose comparison
// loose comparison, walaupun typenya beda tapi valuenya sama, hasilnya true
console.log(shirtNum === "10"); // strict comparison
// strict comparison walaupun valuenya sama tapi typenya beda, hasilnya akan false.


console.log(NaN == NaN);
console.log(NaN === NaN);