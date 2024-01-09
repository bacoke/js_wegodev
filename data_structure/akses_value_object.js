// mengakses data object basic

const pemain = {
    // nama: {
    //     namaDepan: "Cristiano",
    //     namaBelakang: "Tropers",
    // },
    namaDepan: "Cristiano",
    namaBelakang: "Tropers",
    umur: 44,
    timClub: "Barca"
}

// const pemainNama = pemain.namaBelakang
const pemainNama = pemain["namaDepan"]


// ======================================================

// untuk pengambilan data object di dalam object

// const pemainNama = pemain.nama.namaDepan

console.log(pemainNama);