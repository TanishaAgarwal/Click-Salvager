
// JavaScript
function jsUpdateSize(){
    // Get the dimensions of the viewport
    var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
    var height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                 document.body.clientHeight;

    document.getElementById('overlayer').style.height = height + 'px';
    document.getElementById('overlayer').style.width = width + 'px';
};
window.onload = jsUpdateSize; 

$(window).load(function() {
	$(".loader").delay(1700).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
})