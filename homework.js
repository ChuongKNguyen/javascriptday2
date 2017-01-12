//part 1




function buttonLeft(){
	alert("i'am right")
}

function buttonRight(){
	alert("No i'am the one who is right")
}


//part 2
window.onload=function(){
	document.getElementById("colorbox").onmouseover = function() {mouseOver()}
	document.getElementById("colorbox").onmouseout = function() {mouseOut()}

	function mouseOver() {
	    alert("i told you dont hover me ")
	}

	function mouseOut() {
	    alert("yes i prefer that way")
	}
}


//part 3

window.addEventListener("keypress", myFunction());

function myFunction() {
    // document.getElementById("keydetect").innerHTML = "<h1></h1>"
    var header = document.getElementById("keydetect")
    // header.innerHTML="<h1"+event.key+"</h1>"
    console.log(event.keypress)
}