// array filter

 const umur = [33,23,13,14,16,66,19,22,27];

 const filterUmur = umur.filter(myFunction);

 function myFunction(value) {
    return value <= 14;
 }
 console.log("\numur di bawah 14 tahun ada ", filterUmur.length, " orang \n")
 console.log("yaitu ", filterUmur);