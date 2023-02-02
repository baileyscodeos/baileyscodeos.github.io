function on_load() {
    queryString = window.location.search;
	urlParams = new URLSearchParams(queryString);
	var animated = urlParams.get("animated")
	var length = urlParams.get("length")
	if (animated == 'horizontal') {
	    document.getElementById("bg").className = "rainbow_animated_horizontal"
	    if (length != null) {
	        document.getElementById("bg").style.setProperty("--rainbow-animation-speed", length + 's')
	    }
	} else if (animated == 'vertical') {
	    document.getElementById("bg").className = "rainbow_animated_vertical"
	    if (length != null) {
	        document.getElementById("bg").style.setProperty("--rainbow-animation-speed", length + 's')
	    }
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
window.onload = on_load
