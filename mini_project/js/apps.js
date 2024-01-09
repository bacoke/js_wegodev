// js mini project


// UI element
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoContentArea = document.querySelector("#content-list");
const filterInput = document.querySelector("#filter-input");
const clearListButton = document.querySelector(".clear-list-button");


// event listener
recapEventListener();

function recapEventListener() {
    document.addEventListener("DOMContentLoaded", getList);
    todoForm.addEventListener("submit", addList);
    todoContentArea.addEventListener("click", clearItem);
    clearListButton.addEventListener("click", clearAllItem);
    filterInput.addEventListener("keyup", filterList);
}


// Reusable codes (refactor)

function createListElement(value) {
    const li = document.createElement("li");
    // menambahkan class li
    li.className = "list-item list-form";
        // menambahkan children li
        li.appendChild(document.createTextNode(value));
        // membuat delete button
        const a = document.createElement("a");
    
        // membuat properti untuk a element dengan js
        a.href = "#";
        a.className = "delete-list delete-item";
        a.innerHTML = "Hapus";
    
        // menyelipkan element a kedalam li
    
        li.appendChild(a)
    
        // menambahkan li kedalam content area
        todoContentArea.appendChild(li)
}

function getItemFromLocalStorage(){
    let rencana;

    if (localStorage.getItem("rencana") == null) {
        rencana = [];
    } else {
        rencana = JSON.parse(localStorage.getItem("rencana"));
    }

    return rencana;
}

// DOM function
function getList() {
    const rencana = getItemFromLocalStorage()

    rencana.forEach((list) => {
        // panggil createListElement << fungsi yang di pakai berulang ulang

        createListElement(list)
    })
}

function addList(e){
    e.preventDefault();
    
    // handle input empty
    if(todoInput.value){
        // membuat element
        const li = document.createElement("li");
        // menambahkan class li
        li.className = "list-item list-form";
        // menambahkan children li
        li.appendChild(document.createTextNode(todoInput.value));
        // membuat delete button
        const a = document.createElement("a");
    
        // membuat properti untuk a element dengan js
        a.href = "#";
        a.className = "delete-list delete-item";
        a.innerHTML = "Hapus";
    
        // menyelipkan element a kedalam li
    
        li.appendChild(a)
    
        // menambahkan li kedalam content area
        todoContentArea.appendChild(li)
        
        // menambahkan list ke LocalStorage
        addListToLocalStorage(todoInput.value);

        // reassign value
        todoInput.value = "";


    } else {
        alert("Silahkan masukkan rencana baru anda!")
    }


}

function addListToLocalStorage(todoInputValue){ //menambahkan list ke local storage
    rencana = getItemFromLocalStorage()

    // push list ke local storage
    rencana.push(todoInputValue);

    // menampilkan data di local storage
    localStorage.setItem("rencana", JSON.stringify(rencana));
}

function deleteListLocalStorage(deleteListElement){
    const rencana = getItemFromLocalStorage(); // 

    rencana.forEach((list, index) => {
        if(deleteListElement.firstChild.textContent === list) {
            rencana.splice(index, 1)
        }
     })

     localStorage.setItem("rencana", JSON.stringify(rencana));
     
}
function clearItem(e) {
    e.preventDefault();
   // menghapus item di list
    if(e.target.classList.contains("delete-item")) {
        if(confirm("Apakan yakin akan menghapus?")){
            const parent = e.target.parentElement;
            parent.remove();

            deleteListLocalStorage(parent)
        }
    }
}

function clearAllItem(e) {
    if(e.target.classList.contains("clear-list-button")){
        if(confirm("Apakah anda ingin hapus semua?")){
             todoContentArea.innerHTML = "";
             clearAllItemFromLocalStorage();
        }
    }
}

function clearAllItemFromLocalStorage(){
    localStorage.clear()
}

function filterList(e) {
    const filterText = e.target.value.toLowerCase();
    const selectItem = document.querySelectorAll(".list-item");

    selectItem.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();

        if(itemText.indexOf(filterText) !== -1){
            item.setAttribute("style", "display: flex;");
        } else {
            item.setAttribute("style", "display: none !important;");
        }
        console.log(itemText);
    })
} 