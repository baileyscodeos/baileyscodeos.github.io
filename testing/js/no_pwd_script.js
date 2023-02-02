function remove_disclaimer() {
    try {
        document.getElementsByClassName("disclaimer")[0].remove()
    } catch {
        //pass
    }
    document.getElementById("disclaimer_button").remove()
}
window.onload = remove_disclaimer