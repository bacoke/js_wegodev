let string1 = "ini string";
let string2 = 'ini string';
let string3 = `ini juga string`; //kode ini namanya backtik

// menggunakan multiline menggunakan \n
let multiLineString1 = 'hello\nini string multi line';


// menggunakan multiline menggunakan ` ` backtik
let multiLineString2 = `ini juga string
multiline`;



// string concatinates

let namaDepan = "baco";
let namaBelakang = "makassar";

// penggabungan string

let namaLengkap = namaDepan + ' ' + namaBelakang;


// penggabungan string menggunakan ${} >> seperti di python meggukanan print(f'{namaDepan} {namaBelakang}')

let namaLengkap2 = `${namaDepan} ${namaBelakang}`;

console.log(namaLengkap2);