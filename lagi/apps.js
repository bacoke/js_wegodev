// UI element
const dataInput = document.querySelector("#form-input");
const namaSiswa = document.querySelector("#nama-lengkap");
const kelasSiswa = document.querySelector("#kelas");
const result = document.querySelector(".result");

// Listener

dataInput.addEventListener("submit", inputNama);
result.addEventListener("click", deleteSiswa);

function deleteSiswa (event) {
    event.preventDefault();
    
    if(event.target.classList.contains("delete-item")){
        if(confirm("Apakah anda ingin menghapus ?")){
            const divParent = event.target.parentElement;
            divParent.remove();
            console.log(divParent)
        }
    }
}
function inputNama (event) {
    event.preventDefault();
    
    if(namaSiswa.value && kelasSiswa.value){
        // buat element
    
        const div = document.createElement("div");
        const nama = document.createElement("h2");
        const kelas = document.createElement("p");
        const hapus = document.createElement("a");
    
    
        // buat property
    
        hapus.href = "#";
        hapus.innerHTML = "Hapus";
    
    
        // buat class
    
        div.className = "list-nama";
        hapus.className = "delete-item";
    
    
        
        nama.appendChild(document.createTextNode("Nama : " + namaSiswa.value));
        kelas.appendChild(document.createTextNode("Kelas : " + kelasSiswa.value));
        
        // recap element di satu div
        div.appendChild(hapus);
        div.appendChild(nama);
        div.appendChild(kelas);
    
        namaSiswa.value = "";
        kelasSiswa.value = "";
    
        result.appendChild(div);

    } else {
        alert("Silahkan isi nama dan kelas!")
    }


}
