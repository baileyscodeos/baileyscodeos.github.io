function contact() {
    document.body.innerHTML += '<iframe width="560" id="contact_window" height="315" src="https://baileyscodeos.github.io/contact?iframe=True"></iframe>'
}
function close_contact() {
    document.getElementById("contact_window").remove()
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