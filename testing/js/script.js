function test() {
    div_alert("Hi", ["Ok", "Cancel"], ["alert('returned: Ok')", "alert('returned: Cancel')"])
}
function on_load() {
    queryString = window.location.search;
	urlParams = new URLSearchParams(queryString);
	var pwd = urlParams.get("pwd")
	if (pwd !== "224539") {
	    if (pwd == null) {
	        window.location.href = "no_pwd.html"
	    } else {
	        window.location.href = "wrong_pwd.html?pwd_entered=" + pwd
	    }
	}
	if (localStorage.clickcount) {
	    document.getElementById("Click_Button").innerHTML = "Click Button\nI Have Been Clicked " + localStorage.clickcount + " Time/s"
	}
	remove_disclaimer()
}

function remove_disclaimer() {
    try {
        document.getElementsByClassName("disclaimer")[0].remove()
    } catch {
        //pass
    }
    document.getElementById("disclaimer_button").remove()
}
function div_alert(Text, Buttons, Buttons_Commands) {
    document.body.innerHTML += '<div id="Div_Alert" class="div_box"><p class="div_box_text">' + Text + '</p><div id="Div_Alert_Buttons" class="div_box_buttons"></div></div>'
    for(let i = 0; i < Buttons.length; i++){ 
        document.getElementById("Div_Alert_Buttons").innerHTML += '<button id="Div_Alert_Button_' + Buttons[i] + '" onclick="div_alert_command(\'' + Buttons_Commands[i].replaceAll("'", "\\'") + '\')">' + Buttons[i] + '</button>'
    }
}
function div_alert_command(command) {
    document.getElementById("Div_Alert").remove()
    Function('"use strict";' + command)();
}
window.onload = on_load
if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  console.log("Sorry! No Web Storage support..")
}
function add_click() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("Click_Button").innerHTML = "Click Button\nI Have Been Clicked " + localStorage.clickcount + " Time/s"
}