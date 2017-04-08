var songArray = [];

function getSongs(json) {
    $.ajax({url: json}).done(function(data) {
        var ajaxData = data.songs;
        addSongs(ajaxData);
    }).fail(function(error) {
        console.log("Failed", error);
    }).always(function() {
        console.log("Test");
    });
}

function addSongs(data) {
    data.map(function(song, index) {
        $("#songs").append(`<li><span class="songTitle">${song.name}</span><br> by ${song.artist} from the album ${song.album} <button class="delete">DELETE</button></li>`);
    });
    $(".delete").click(function() {
        $(this).parent().remove();
    });
}

$("#more").click(function() {
    getSongs("data/songs2.json");

    // Disable button
    $(this).prop("disabled", true);
});

getSongs("data/songs.json")
