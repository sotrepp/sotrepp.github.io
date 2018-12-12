$(document).ready(function(){

    //pause music
    // 0 = paused
    // 1 = playing
    var music_on = 1;

    var bgmusic = $("#bgmusic")[0];

    var musicButton = $("#musicButton");

    $("#musicButton")
    .click(function() {
      if (music_on == 1) {
        bgmusic.pause();
        music_on = 0;
      }

      else if (music_on == 0) {
        bgmusic.play();
        bgmusic.loop = true;
        music_on = 1;
      }
        });


      var hoverSound = $("#hoverSound")[0];
      hoverSound.volume = 0.2;
      $("li")
        .mouseenter(function() {
        hoverSound.play();
      });


});
