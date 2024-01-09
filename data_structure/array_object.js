// array di object =>

const pemain = [
    {
        nama: "sangkala",
        statusPemain: "kontrak"
    },
    {
        nama: "jarre",
        statusPemain: "kontrak"
    },
    {
        nama: "tolo'na",
        statusPemain: "pinjam"
    },
    {
        nama: "tabana",
        statusPemain: "pinjam"
    },
    {
        nama: "manyambang",
        statusPemain: "kontrak"
    },

]

// penulisan untuk mengfilter dengan function declaration

// const pisahStatus = pemain.filter(fungsiStatusPemain);

// function fungsiStatusPemain(cekPemain) {
//     if(cekPemain.statusPemain === "pinjam") {
//         return cekPemain
//     }else if (cekPemain.statusPemain === "kontrak") {
//         return cekPemain
//     }else {
//         console.log("Status pemain tidak di temukan")
//     }
// }


// penulisan untuk mengfilter dengan arrow function

const cekStatusPemain = pemain.filter(cekPemain => {
    if (cekPemain.statusPemain === "pinjam") {
        return cekPemain
    }

});

console.log(cekStatusPemain)
