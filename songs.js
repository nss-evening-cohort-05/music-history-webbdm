var songArray = [];

$.ajax({url: "data/songs.json"}).done(function(data) {
    var ajaxData = data.songs;
    ajaxData.map(function(song, index) {
        $("#songs").append(`<li>${song.name} by ${song.artist} from the album ${song.album} <button class="delete">DELETE</button></li>`);
    });
    $(".delete").click(function() {
        $(this).parent().remove();
    });
}).fail(function(error) {
    console.log("Failed", error);
}).always(function() {
    console.log("Test");
});
