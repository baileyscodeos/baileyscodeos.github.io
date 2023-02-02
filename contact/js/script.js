async function sendMail() {
	var link = "mailto:bailey.codeos@gmail.com"
		+ "?subject=" + encodeURIComponent("Code OS Contact")
		+ "&body=" + encodeURIComponent(document.getElementById('Body').value)
	;
	window.location.href = link;
	queryString = window.location.search;
	urlParams = new URLSearchParams(queryString);
	await new Promise(r => setTimeout(r, 5000));
	if (urlParams.get("iframe") == "True") {
	    parent.close_contact()
	}
	else {
	window.location.href = '/?load=False';
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
window.onload = remove_disclaimer