
$(document).ready(function(){
  $("h1").hide().fadeIn(3000);
  $("h2").hide().fadeIn(5000);

  $("#button").hide().fadeIn(7000);




  var nature = $("#natureSound")[0];
  nature.volume = 0.6;

  var city = $("#citySound")[0];
  city.volume = 0.3;

  $("#1").click(function(){
    city.pause();
    nature.play();
  });

  $("#2").click(function(){
    city.pause();
    nature.play();
  });
  $("#3").click(function(){
    nature.pause();
    city.play();
  });
  $("#4").click(function(){
    nature.play();
    city.pause();
  });



  // smooth scrolling

  $("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});


$('video').hover(function() {
            this.play();
        }, function() {
            this.pause()
        });


});
