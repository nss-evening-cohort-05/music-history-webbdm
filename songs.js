//var songs = [];
var list = document.getElementById('songs');
var more = document.getElementById('moreBTN');

function printSongs(data) {
    var songData = data.songs;
    songData.map(function(song, index) {
        list.innerHTML += `<li id="${index}"> &gt; ${song.name} by ${song.artist} from the album ${song.album} <button class="delete">DELETE</button></li>`;
    });
}

// XHR for 1st Songs JSON file
function success() {
    var data = JSON.parse(this.responseText);
    printSongs(data);
}

function failed() {
    alert("Song data failed to load");
}

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", success);
xhr.addEventListener("error", failed);
xhr.open("GET", "songs.json");
xhr.send();

// XHR for 2nd Songs JSON file
function successTwo() {
    var data = JSON.parse(this.responseText);
    printSongs(data);
}

// Listener for the "More" button
more.addEventListener("click", function(event) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", successTwo);
    xhr.addEventListener("error", failed);
    xhr.open("GET", "songs2.json");
    xhr.send();
    more.disabled = true;
});

// Delete button functionality for cards
document.body.addEventListener("click", function(event) {
if (event.target.className === "delete") {
    event.target.parentNode.remove();
}
});
