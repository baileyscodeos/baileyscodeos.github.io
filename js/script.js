function download() {
	navigator = window.navigator
	var os = navigator.platform
	if (os == "MacIntel") {
		div_alert("Code OS Currently Will Not Work On Mac OS Due To A Tkinter And Threading Bug And Mutch Of The Code Relying On Windows Commands And Packages!", ["Close"], [""])
	}
	else if (os == "Win32") {
		window.location.href = "files/Code OS Installer.zip"
		add_downloads_count()
		div_alert("If you are going to use The Code OS Music Controller You Will Need To:\nOpen Windows Powershell In Administrator Mode then\nenter the command 'Set-ExecutionPolicy Unrestricted' then\nWhen It Says 'Do You Want To Change The Execution Policy?' Type 'y' And Press Enter", ["Copy Command", "Close"], ["navigator.clipboard.writeText('Set-ExecutionPolicy Unrestricted')", ""])
		get_downloads_count()
	}
	else {
		div_alert("Code OS Does Not Support Your Operating System (" + os + ") And Cannot Download! Code OS Only Supports Windows", ["Close"], [""])
	}
}
function download_offline() {
	navigator = window.navigator
	var os = navigator.platform
	if (os == "MacIntel") {
		window.location.href = "files/Code OS Offline Files.zip"
		div_alert("Code OS Will Not Work On M1 Mac But May Work On Intel Mac!", ["Close"], [""])
	}
	else if (os == "Win32") {
		window.location.href = "files/Code OS Offline Files.zip"
		div_alert("If you are going to use The Code OS Music Controller You Will Need To:\nOpen Windows Powershell In Administrator Mode then\nenter the command 'Set-ExecutionPolicy Unrestricted' then\nWhen It Says 'Do You Want To Change The Execution Policy?' Type 'y' And Press Enter", ["Copy Command", "Close"], ["navigator.clipboard.writeText('Set-ExecutionPolicy Unrestricted')", ""])
	}
	else {
		div_alert("Code OS Does Not Support Your Operating System (" + os + ") And Cannot Download! Code OS Only Supports Windows And Mac", ["Close"], [""])
	}
}
function open_changelog(){
    window.location.href = "changelog"
}
async function done_load() {
	document.body.innerHTML = ""
	document.body.innerHTML += '<link rel="stylesheet" href="styles.css">'
	//document.body.innerHTML += '<img src="/images/circle.png" width=50 alt="Circle" id="Circle" class="circle">'
	document.body.innerHTML += '<img src="images/Code OS Icon.png" alt="Code OS Icon">'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<img src="images/Download.png" width=75 alt="Download">'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<button id="downloadButton" onclick="download()">Download Code OS</button>'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<button id="downloadButtonOffline" onclick="download_offline()">Download Code OS Offline Files</button>'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<br>'
	var v_response = await fetch('storage/version.txt')
	var v_data = await v_response.text()
	var version_data_string = v_data
	version_data = JSON.parse(version_data_string)
	version = version_data.version
	release_date = version_data.release_date
	document.body.innerHTML += '<p>Version: v' + version + '</p>'
	document.body.innerHTML += '<p>Release Date: ' + release_date + '</p>'
	document.body.innerHTML += '<p id="Downloads Count">Downloads: Getting</p>'
	document.body.innerHTML += '<button onclick="get_downloads_count()">Refresh Download Count</button>'
	document.body.innerHTML += '<p>Sorry This Site Is Not Better It Is My First Site</p>'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<img src="images/Mail.png" width=75 alt="Mail">'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<button type="button" onclick="contact()">Contact Me</button>'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<button onclick="open_changelog()">Changelog</button>'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<br>'
	document.body.innerHTML += '<button type="button" onclick="rickroll()">INFO</button>'
	get_downloads_count();
	queryString = window.location.search;
	urlParams = new URLSearchParams(queryString);
	var lol = urlParams.get("lol")
	if (lol == "True") {
	    rickroll()
	}
}
async function play() {
	document.body.innerHTML = ""
	//document.body.innerHTML += '<video id="loadingVideo" loop><source src="vids/Loading.mp4" type="video/mp4">Your browser does not support the video tag.</video>'
	//document.body.innerHTML += '<audio id="loadingAudio"><source src="sounds/Intel Pentium 3 M Animation.wav" type="audio/wav">Your browser does not support the audio tag.</audio>'
	//document.getElementById("loadingVideo").play()
	//await document.getElementById("loadingAudio").play()
	document.body.innerHTML += '<link rel="stylesheet" href="styles.css">'
	document.body.innerHTML += '<div class="bg_busy"><div class="loader"></div></div>'
	run_load()
}
function rickroll() {
    document.body.innerHTML += '<iframe width="560" id="rickroll_player" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&rel=0%loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    rickroll_alert()
}
function add_head() {
    document.head.innerHTML += '<link rel="stylesheet" href="styles.css">'
    document.head.innerHTML += '<img src="/images/circle.png" width=50 alt="Circle" id="Circle" class="circle">'
}
async function rickroll_alert() {
    await new Promise(r => setTimeout(r, 1000))
    alert("You Got Rickrolled!")
}
async function run_load() {
	await new Promise(r => setTimeout(r, 5000))
	done_load()
}
function contact() {
    document.body.innerHTML += '<iframe width="560" id="contact_window" height="315" src="contact?iframe=True"></iframe>'
}
function close_contact() {
    document.getElementById("contact_window").remove()
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
function on_load() {
    done_load()
}
async function get_downloads_count(){
    var d_response = await fetch("storage/downloads.dat")
    var d_data = await d_response.text()
    refresh_downloads_count(d_data);
}
function refresh_downloads_count(d_data){
    document.getElementById("Downloads Count").innerHTML = "Downloads: " + d_data;
}
async function add_downloads_count(){
    var d_response = await fetch("storage/downloads.dat")
    var d_data = await d_response.text()
    refresh_downloads_count(d_data);
    var u_response = await fetch("storage/change_downloads.php?num=" + String(Number(d_data) + 1))
    var u_data = await u_response.text()
    if (u_data == "Done"){
        console.log("Uploaded Downloads Count")
    } else {
        console.log("Failed To Upload Downloads Count")
    }
    var dl_response = await fetch("storage/download log.log")
    var dl_data = await dl_response.json()
    to_u_dl_l = dl_data
    d = new Date();
    to_u_dl_l.push(d.toString())
    to_u_dl = JSON.stringify(to_u_dl_l)
    var udl_response = await fetch("storage/change_downloads_log.php?log_info=" + to_u_dl)
    var udl_data = await udl_response.text()
    if (udl_data == "Done"){
        console.log("Uploaded To Download Log")
    } else {
        console.log("Failed To Upload To Download Log")
    }
}
window.onload = on_load