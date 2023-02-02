function remove_disclaimer() {
    try {
        document.getElementsByClassName("disclaimer")[0].remove()
    } catch {
        //pass
    }
    document.getElementById("disclaimer_button").remove()
}
function contact() {
    document.body.innerHTML += '<iframe width="560" id="contact_window" height="315" src="/contact?iframe=True"></iframe>'
}
function close_contact() {
    document.getElementById("contact_window").remove()
}
window.onload = remove_disclaimer