/**
 * @author Roseanne
 */

/* I am loading the video here. This is the iFrame markup for the YouTube video.
* I got it by selecting the "share" option on the YouTube page and copying and 
* and pasting the embed code.I must add "http://" before the link. */

 var video = "<iframe width='560' height='315' src='http://www.youtube.com/embed/tZAC5OChRr0?html5=1' frameborder='0' allowfullscreen></iframe>";


$(document).ready(function() {

console.log("hello");
setNav();

});

function setNav() {
	
/* This event listener fires when the ".GreatWall" button is clicked.
 * It opens the modal window and inserts the video into the ".modal-body" container. */
	
	$(".GreatWall").on("click", function() {
		$('#myModal').modal();
		$(".modal-body").html(video);
	});
	
	$(".close").on("click", function() {
		$("modal-body").empty();
		
	});
	
/*This event listener fires when the modal window is close and removes the 
 * "src" attribute from the iframe, thus killing the video. */

	$('#myModal').on('hidden.bs.modal', function () {
		$('#myModal iframe').removeAttr('src');
	});

}

 	
