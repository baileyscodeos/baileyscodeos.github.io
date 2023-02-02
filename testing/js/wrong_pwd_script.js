function on_load() {
    queryString = window.location.search;
	urlParams = new URLSearchParams(queryString);
	var pwd = urlParams.get("pwd_entered")
	document.getElementById("wrong_pwd").innerHTML = "This Is The Testing Page For Me Only! It Requiers A Password And You Have Entered The Wrong Password (You Entered: " + pwd + ")!"
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