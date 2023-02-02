function on_load() {
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
function open_update(version){
    show_string = ''
    show_string += 'Version - ' + String(updates[version].version)
    show_string += ', Release Date - ' + String(updates[version].release_date)
    show_string += ', Changes User - ' + String(updates[version].changes_user)
    show_string += ', Forced - ' + String(updates[version].force)
    show_string += ', Short Description - "' + String(updates[version].short_description) + '"'
    show_string += ':<br>'
    show_string += updates[version].long_description.replaceAll('\n', '<br>')
    div_alert(show_string, ['Close'], [''])
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
async function prepare(){
    var u_response = await fetch('/storage/updates.txt')
    var u_data = await u_response.text()
    //var updates_data_string = u_data.replaceAll("'", '"')
    var updates_data_string = ''
    for (i=0; i<u_data.length; i++){
        if (u_data[i] == "'"){
            if ((u_data[i-3] == 'D' || u_data[i-3] == 'd') && u_data[i-2] == 'o' && u_data[i-1] == 'n' && u_data[i+1] == 't'){
                updates_data_string += '\''
            } else {
                updates_data_string += '"'
            }
        } else {
            updates_data_string += u_data[i]
        }
    }
    var updates_data = JSON.parse(updates_data_string)
    updates = {}
    for (i=0; i<updates_data.length; i++){
        version = updates_data[i].version
        updates[version] = updates_data[i]
        document.getElementById('versions').innerHTML += '<Button id="' + String(version) + '" onclick    ="open_update(\'' + String(version) + '\')">' + String(version) + '</Button>'
    }
}
prepare()