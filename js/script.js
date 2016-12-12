$(document).ready(function(){
	var watermark = ["darkblue", "blue", "lightblue"];
	document.getElementById("watermark").innerHTML= watermark[Math.floor(Math.random() * watermark.length)];
	var images = ["l4.png","19.png","l3.png"];
	$("html").css({
		"background-image": "url(images/"+ images[Math.floor(Math.random()*images.length)] + ")",
		"background-position": "-700px -200px",
	});

});


