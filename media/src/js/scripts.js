// Here general Javascript will be written.


// Animate video to play on hover
window.onload = function() {

 // animate all videos on hover by adding event listeners, (there is only one as of now)
 var videos = document.getElementsByTagName("video");


 for (var i = 0; i < videos.length; i++) {
   videos[i].addEventListener( 'mouseover', function() {
     //play on mouseover
     videos[i].play()
   })
   videos[i].addEventListener( 'mouseout', function() {
     //pause when mouse leaves
     videos[i].pause()
   })
 }
}
