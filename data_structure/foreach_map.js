// array for each dan map


const hewan = ["ayam", "bebek", "lele", "buaya", "singa","kuda"];


// array forEach

hewan.forEach(myHewan)

function myHewan(value) {
    console.log(value)
}


// array Map

const angka = [2,3,44,5,6,75,4,44];

const angkaPangkat = angka.map(pangkat);

function pangkat(value){
    return value * 3;
}
console.log(angkaPangkat)