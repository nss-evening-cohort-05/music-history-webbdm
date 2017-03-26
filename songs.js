// $(document).ready(function() {
//     $.ajax({
//         url: "songs.json",
//         data: {
//             format: 'json'
//         },
//         succes: function() {
//             console.log("Songs.json has been loaded");
//         },
//         error: function() {
//             console.log("Songs.json failed to load");
//         },
//         dataType: 'json',
//         type: "GET"
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

// var songs = [];
//
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
//
// console.log(songs.length);
//
// var newSong1 = "Hotel California > by the Eagles";
// var newSong2 = "Thriller > by Michael Jackson";
//
// songs.unshift(newSong1);
// songs.push(newSong2);

console.log(songs);

// for (i = 0; i < songs.length; i++) {
//
//     songs[i] = songs[i].replace(/>/g, '-');
//     songs[i] = songs[i].replace(/\*/g, "");
//     songs[i] = songs[i].replace(/@/g, '-');
//     songs[i] = songs[i].replace(/\(/g, '');
//     songs[i] = songs[i].replace(/!/g, '');
//
//     // songs[i] = songs[i].replace(/[\W_]+/g," ");
//
// }

songs.map(function(song){
    $("#songs").append(`<li>${song.name} by ${song.artist} from the album ${song.album}</li> <button class="btn">DELETE</button>`);
});
