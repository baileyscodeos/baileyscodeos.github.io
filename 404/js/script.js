function on_load() {
    document.getElementById("current_page_link").innerHTML = window.location.href
    document.getElementById("current_page_link").href = window.location.href
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
function contact() {
    document.body.innerHTML += '<iframe width="560" id="contact_window" height="315" src="https://baileyscodeos.github.io/contact?iframe=True"></iframe>'
}
function close_contact() {
    document.getElementById("contact_window").remove()
}
window.onload = on_load
function do_close(){
    close()
}