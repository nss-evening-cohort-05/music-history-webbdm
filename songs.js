// $(document).ready(function() {
//
//   $.ajax({
//     url: "data/songs.json"
//   }).done(function(contentsOfTheFile) {
//     // When you tell jQuery to read a file via the ajax method
//     // it reads the contents, and then executes whatever function
//     // that you specify here in the done() method, and passes in
//     // the contents of the file as the first argument.
//     console.log("the contents of songs.json");
//     console.log(contentsOfTheFile);
//   });
//
// });

// $(document).ready(function() {
//     $.ajax({
//         url: "/songs.json",
//         success: function() {
//             console.log("Songs.json has been loaded");
//         },
//         error: function() {
//             console.log("Songs.json failed to load");
//         },
//         dataType: 'json',
//         type: "GET",
//         //async: false
//     });
// });

var songs = [
    {
        "name": "Hotel California",
        "artist": "The Eagles",
        "album": "Hotel California"
    }, {
        "name": "Purple Haze",
        "artist": "Jimi Hendrix",
        "album": "Live at Woodstock"
    }, {
        "name": "Welcome to the Jungle",
        "artist": "Guns N' Roses",
        "album": "Appetite for Destruction"
    }, {
        "name": "Thriller",
        "artist": "Michael Jackson",
        "album": "Thriller"
    }, {
        "name": "Song 2",
        "artist": "Blur",
        "album": "Blur"
    }, {
        "name": "Ironic",
        "artist": "Alanis Morisette",
        "album": "Jagged Little Pill"
    }, {
        "name": "Legs",
        "artist": "ZZ Top",
        "album": "Eliminator"
    }, {
        "name": "Smells Like Teen Spirit",
        "artist": "Nirvana",
        "album": "Nevermind"
    }
];

songs.map(function(song) {
    $("#songs").append(`<li>${song.name} by ${song.artist} from the album ${song.album} <button class="delete">DELETE</button></li>`);
});

$(".delete").click(function() {
    $(this).parent().remove();
});
