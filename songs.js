$(document).ready(function() {
    $.ajax({
        url: "https://music-history-28bea.firebaseio.com/.json",
        success: function() {
            console.log("Songs.json has been loaded");
        },
        error: function() {
            console.log("Songs.json failed to load");
        },
        dataType: 'json',
        type: "GET",
        //async: false
    });
});

// var songs = [
//     {
//         "name": "Hotel California",
//         "artist": "The Eagles",
//         "album": "Hotel California"
//     }, {
//         "name": "Purple Haze",
//         "artist": "Jimi Hendrix",
//         "album": "Live at Woodstock"
//     }, {
//         "name": "Welcome to the Jungle",
//         "artist": "Guns N' Roses",
//         "album": "Appetite for Destruction"
//     }, {
//         "name": "Thriller",
//         "artist": "Michael Jackson",
//         "album": "Thriller"
//     }, {
//         "name": "Song 2",
//         "artist": "Blur",
//         "album": "Blur"
//     }, {
//         "name": "Ironic",
//         "artist": "Alanis Morisette",
//         "album": "Jagged Little Pill"
//     }, {
//         "name": "Legs",
//         "artist": "ZZ Top",
//         "album": "Eliminator"
//     }, {
//         "name": "Smells Like Teen Spirit",
//         "artist": "Nirvana",
//         "album": "Nevermind"
//     }
// ];

songs.map(function(song) {
    $("#songs").append(`<li>${song.name} by ${song.artist} from the album ${song.album} <button class="delete">DELETE</button></li>`);
});

$(".delete").click(function() {
    $(this).parent().remove();
});
