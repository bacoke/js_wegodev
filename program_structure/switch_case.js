// switch case hampir sama dengan if else


let menuList = Number(prompt("Silahkan pilih menu berikut : "))

switch (menuList){
    case 1:
        alert("Nasi goreng");
        break;
    case 2:
        alert("Nasi uduk");
        break;
    case 3:
        alert("Ayam bakar");
        break;
    default: // pada switch case default seperti else, menjalankan jika yang lain tidak terpenuhi
        alert("Menu yang anda pilih tidak ada!")
}

