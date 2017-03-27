//var songs = [];
var list = document.getElementById('songs');

function printSongs(data) {

    var songData = data.songs;
    songData.map(function(song) {
        list.innerHTML += `<li> ${song.name} by ${song.artist} from the album ${song.album} <button class="delete">DELETE</button></li>`;
    });

}

function success() {
    var data = JSON.parse(this.responseText);
    console.log('success');
    printSongs(data);
}

function failed() {
    console.log("failed");

}

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", success);
xhr.addEventListener("error", failed);
xhr.open("GET", "songs.json");
xhr.send();
console.log("xhr", xhr);
