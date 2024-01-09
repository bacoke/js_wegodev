// keys dan assign



// Object Keys

const objectBaru = {a: 2, b: 4, c:44};

console.log(Object.keys(objectBaru));


// Object assign
// menggabungkan 2 object sekaligus dengan menimpa object sebelumnya
  
const object1 = {a: 1, b: 3, c: 44, d: 4};
const object2 = {f: 3, c: 33}

Object.assign(object1, object2);

console.log(object1)
console.log(object2)
