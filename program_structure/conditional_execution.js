// conditional execution
let kkm = 100;
let nilai = Number(prompt('Masukkan nilai anda : '));

if(kkm - nilai <= 10){
    alert("akreditasi A")
} else if(kkm - nilai >= 10 && kkm - nilai <= 20){
    alert("akreditasi B")
} else if(kkm - nilai <= 30){
    alert("akreditasi C")
} else {
    alert("anda tidak lulus")
}