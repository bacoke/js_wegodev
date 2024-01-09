// array
// array menggunakan simbol []

const contohArray = [34,4,5,6,3,2,23,5,5,2,3,5,5,34];

for(i = 0; i < contohArray.length; i++){
    contohArray[i] = contohArray[i] * 3
}

console.log(contohArray)

// jika ingin mengindex isi array cukup gunakan [] dan isi angka sesuai index
// console.log(contohArray.length);