// Create UI element

const bannerCreateStory = document.querySelector("#create-story");
const inputTitle = document.querySelector("#input-title");
const inputStory = document.querySelector("#input-story");
const resultStory = document.querySelector("#content-list");
const deleteAllStory = document.querySelector("#delete-all-story");


// listener 

bannerCreateStory.addEventListener("submit", createElement);
resultStory.addEventListener("click", deleteItemStory);
deleteAllStory.addEventListener("click", deleteAllItemStory);

// Create Node
function createElement(e) {
    e.preventDefault();

    if(inputStory.value && inputTitle.value) {
        const judul = document.createElement("h2");
        const story = document.createElement("p");
        const div = document.createElement("div");
        const deleteButton = document.createElement("a");
        const commentButton = document.createElement("a");
        const datePost = document.createElement("span");
    
        // nambah property element 
        deleteButton.href = "#";
        deleteButton.innerHTML = "Delete";

        commentButton.href = "#";
        commentButton.innerHTML = "Comment";


        // nambah class pada element h2
        div.className = "item-list";
        judul.className = "all-h2 row";
        deleteButton.className = "delete-post-story";
        datePost.className = "date-post row";
        story.className = "row";
    
        judul.appendChild(document.createTextNode(inputTitle.value))
        story.appendChild(document.createTextNode(inputStory.value))

        // add date post story
        let arr_bulan = ["januari","februari","maret","april","mei","juni","agustus","september","oktober","november","desember"]
        let today = new Date();

        let date = today.getDate();
        let month = arr_bulan[today.getMonth()];
        let year = today.getFullYear();

        let result = "Posted : " + date + " " + month + " " + year;

        datePost.appendChild(document.createTextNode(result));
        
    
        // menggabungkan semua element dalam satu div
        div.appendChild(judul);
        div.appendChild(datePost);
        div.appendChild(story);
        div.appendChild(commentButton);
        div.appendChild(deleteButton);
    
        // memasukkan element ke content-list
        resultStory.appendChild(div);

        // reassign value
        inputStory.value = "";
        inputTitle.value = "";

    } else {

        alert("Please typing your's story...")

    }

    // // menambahkan children judul dan story
    // judul.appendChild(document.createTextNode(inputTitle.value));
    // story.appendChild(document.createTextNode(inputStory.value));


    // resultStory.appendChild(judul);
    // resultStory.appendChild(story);

    // // menambahkan item ke local storage


    // // reassign value input
    // const input = inputStory + inputTitle
    // input.value = "";
}

function deleteItemStory(e) {
    e.preventDefault();

    //logic delete button 
    if (e.target.classList.contains("delete-post-story")){
        //logic confirm
        if(confirm("Are you sure delete this story?")){
            const parentDiv = e.target.parentElement;
            
            parentDiv.remove();
        }
        
    }
}

function deleteAllItemStory () {
    if(confirm("Are you sure delete all story?")){
        resultStory.innerHTML = "";
    }
}