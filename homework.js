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

window.addEventListener("keypress", function(event){
	var header = document.getElementById("keydetect")
    header.innerHTML = "<h1>"+event.key+"</h1>"
});


// }
// part 4


var header = document.getElementById("header")
var button = document.getElementById("login-button")

button.addEventListener("click", function() {
  validateForm()
})


function validateForm() {
  if(checkPassword() == true && checkUsername() == true) {
    header.innerHTML = "<h1>You're now logged in!</h1>"
  } else {
    alert("Incorrect!")
  }
}

function checkPassword() {
  var password = document.getElementById("password").value

  if (password == "12345678") {
    return true
  } else {
    return false
  }
}

function checkUsername() {
  var username = document.getElementById("username").value

  var characters = username.split("")

  var presence = characters.map(function(element) {
    return Number.isInteger(parseInt(element))
  })

  if (presence.indexOf(true) !== -1) {
    return true
  } else {
    return false
  }
}
