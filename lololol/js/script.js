function done_load() {
	var to_remove = document.getElementsByClassName("ToRemove")
	var to_remove_2 = document.getElementsByClassName("big_button")
	for(let i = 0; i < to_remove.length; i++){
	    to_remove[i].remove()
	}
	for(let i = 0; i < to_remove_2.length; i++){
	    to_remove[i].remove()
	}
	rickroll()
}
function play() {
	done_load()
}
function rickroll() {
    document.body.innerHTML += '<video id="rickroll_player" loop width=100% height=100% poster="/images/Play.png" playsinline><source src="/vids/Rick Astley - Never Gonna Give You Up (Official Music Video) [dQw4w9WgXcQ].mp4" type="video/mp4">Your browser does not support the video tag.</video>'
    //document.body.innerHTML += '<iframe id="rickroll_player" width=100% height=100% src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&rel=0%loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    rickroll_alert()
}
async function rickroll_alert() {
    await new Promise(r => setTimeout(r, 1000))
	if (school == "True") {
		div_alert("You Got Rickrolled!<br><img src='/images/rickroll.png' alt='Rickroll Image' width=125><br>Check Out The Mirabella Genio Range At<br><a href='https://www.mirabellagenio.com.au/'>https://www.mirabellagenio.com.au/</a>", ["Ok", "See The\nMirabella Genio\nRange"], ["", "open('https://www.mirabellagenio.com.au/')"])
	} else {
        div_alert("You Got Rickrolled!<br><img src='/images/rickroll.png' alt='Rickroll Image'>", ["Ok"], [""])
	}
	document.getElementById("rickroll_player").play()
}
function div_alert(Text, Buttons, Buttons_Commands) {
    document.body.innerHTML += '<div id="Div_Alert" class="div_box"><strong class="div_box_text_large">' + Text + '</strong><div id="Div_Alert_Buttons" class="div_box_buttons_school"></div></div>'
    for(let i = 0; i < Buttons.length; i++){ 
        document.getElementById("Div_Alert_Buttons").innerHTML += '<button id="Div_Alert_Button_' + Buttons[i] + '" onclick="div_alert_command(\'' + Buttons_Commands[i].replaceAll("'", "\\'") + '\')">' + Buttons[i] + '</button>'
    }
}
function div_alert_command(command) {
    document.getElementById("Div_Alert").remove()
    Function('"use strict";' + command)();
}
function on_load() {
    remove_disclaimer()
    if (school == "True") {
        document.getElementById("load_button").innerHTML = "To Begin Your Smart Home Experience,<br>Click Here"
    }
}
function remove_disclaimer() {
    try {
        document.getElementsByClassName("disclaimer")[0].remove()
    } catch {
        //pass
    }
    document.getElementById("disclaimer_button").remove()
}
window.onload = on_load
queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
var school = urlParams.get("school")