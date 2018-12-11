$(document).ready(function(){

  buttonclick = $("#buttonlink");
  buttonclick.on('click',function(event){
      smoothScroll($(this.hash));
  });

   var section_items=$('.section'),
       navigation_items=$('#navigation a');

    updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

    navigation_items.on('click',function(event){
       event.preventDefault();
        smoothScroll($(this.hash));
    });

    $('.scroll_down').on('click',function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
		section_items.each(function(){
			$this = $(this);
			var activeSection = $('#navigation a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigation_items.eq(activeSection).addClass('is-selected');
			}else {
				navigation_items.eq(activeSection).removeClass('is-selected');
			}
		});
	}

    function smoothScroll(target){
        $('body,html').animate(
            {'scrollTop':target.offset().top}
            ,600);
    }




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
