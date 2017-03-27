//var songs = [];
var list = document.getElementById('songs');

function printSongs(data) {
    var songData = data.songs;
    songData.map(function(song, index) {
        list.innerHTML += `<li id="${index}"> ${song.name} by ${song.artist} from the album ${song.album} <button class="delete">DELETE</button></li>`;
    });
}

function success() {
    var data = JSON.parse(this.responseText);
    printSongs(data);
}

function failed() {
    alert("song data failed to load");
}

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", success);
xhr.addEventListener("error", failed);
xhr.open("GET", "songs.json");
xhr.send();
console.log("xhr", xhr);

document.body.addEventListener("click", function(event) {
    if (event.target.className === "delete") {
        event.target.parentNode.remove();
    }
});
