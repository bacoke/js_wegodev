function prayerTimes(latitude, longitude){
    fetch("http://api.aladhan.com/v1/calendar?latitude="+latitude+"&longitude="+longitude+"&method=3")
    .then(response => response.json())
    .then(function(response){
        let arr_bulan = ["januari","februari","maret","april","mei","juni","agustus","september","oktober","november","desember"]
        let today = new Date();

        let date = today.getDate();
        let month = arr_bulan[today.getMonth()];
        let year = today.getFullYear();

        let result = "Hari ini : "+date + " " + month + " " + year;

        let data = response.data[0].timings;
        document.getElementById("date").innerHTML = result;
        
        let app = document.getElementById("app-table")
        let table = document.createElement("table")
        let tableTbody = document.createElement("tbody")
         
        for(i in data){
            let baris = tableTbody.insertRow();
            let nama = baris.insertCell(0);
            let waktu = baris.insertCell(1);

            nama.innerHTML = i;
            waktu.innerHTML = data[i];
            tableTbody.appendChild(baris);
        }
        table.appendChild(tableTbody);
        app.appendChild(table);
    });
}

function success(position) {
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error(){
    alert("Tolong pilih allow pada notif")
}
function userLocations() {
    if(!navigator.geolocation){
        alert("lokasi error");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

userLocations();