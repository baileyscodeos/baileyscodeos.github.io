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
function open_page(link){
    window.location.href = link;
}
function div_alert(Text, Buttons, Buttons_Commands) {
    document.body.innerHTML += '<div id="Div_Alert" class="div_box"><p class="div_box_text">' + Text + '</p><div id="Div_Alert_Buttons" class="div_box_buttons"></div></div>'
    for(let i = 0; i < Buttons.length; i++){ 
        document.getElementById("Div_Alert_Buttons").innerHTML += '<button id="Div_Alert_Button_' + Buttons[i] + '" onclick="div_alert_command(\'' + Buttons_Commands[i].replaceAll("'", "\\'") + '\')">' + Buttons[i] + '</button>'
    }
}
function enter_pwd(link){
    Text = 'This Page Requiers A Password:'
    document.body.innerHTML += '<div id="Div_Alert" class="div_box"><p class="div_box_text">' + Text + '</p><div id="Div_Alert_Buttons" class="div_box_buttons"></div></div>'
    document.getElementById("Div_Alert_Buttons").innerHTML += '<input id="pwd_in"></input>'
    document.getElementById("Div_Alert_Buttons").innerHTML += '<br>'
    document.getElementById("Div_Alert_Buttons").innerHTML += '<button onclick="load_pwd(\'' + link + '\')">Enter</button>'
}
function run_oargs(link, p_name){
    page = pages[p_name]
    Text = 'This Page Has Optional Arguments:'
    document.body.innerHTML += '<div id="Div_Alert" class="div_box"><p class="div_box_text">' + Text + '</p><div id="Div_Alert_Buttons" class="div_box_buttons"></div></div>'
    for (i=0; i<page['oargs'].length; i++){
        name = page['oargs'][i]['name']
        if (page['oargs'][i]['nickname'] != undefined) {
            nickname = page['oargs'][i]['nickname']
        } else {
            nickname = name
        }
        document.getElementById("Div_Alert_Buttons").innerHTML += '<div id="oargs_' + name + '"><strong>Argument - ' + nickname + ':</strong><br><input type="checkbox" id="oargs_' + name + '_cb" name="oargs_' + name + '_cb" value="Enabled?"><label for="oargs_' + name + '_cb">Enabled?</label><br></div>'
        if (page['oargs'][i]['options'] != undefined){
            options = page['oargs'][i]['options']
            if (options.length > 1){
                document.getElementById("oargs_" + name).innerHTML += '<p>Options:</p><br>'
                for (k=0; k<options.length; k++){
                    c_option = options[k]
                    document.getElementById("oargs_" + name).innerHTML += '<input type="radio" id="oargs_' + name + '_o_rb_' + c_option + '" name="oargs_' + name + '_o_rb" value="' + c_option + '"><label for="oargs_' + name + '_o_rb_' + c_option + '">' + c_option + '</label><br>'
                }
            }
        } else if (page['oargs'][i]['intval'] != undefined) {
            intval = page['oargs'][i]['intval']
            document.getElementById("oargs_" + name).innerHTML += '<p>Int Option:</p><br>'
            document.getElementById("oargs_" + name).innerHTML += '<input id="oargs' + name + '_iv" type="number" value="10"><br>'
        }
    }
    document.getElementById("Div_Alert_Buttons").innerHTML += '<button onclick="Submit_oargs(\'' + p_name + '\', \'' + link + '\')">Enter</button>'
}
function Submit_oargs(name, link){
    var page = pages[name]
    var oargs = []
    for (i=0; i<page['oargs'].length; i++){
        c_oarg = page['oargs'][i]
        oargs.push({"name":c_oarg['name']}) 
        oargs[i]['enabled'] = document.getElementById('oargs_' + c_oarg['name'] + '_cb').checked
        if (c_oarg['options'] != undefined){
            if (c_oarg['options'].length == 1){
                oargs[i]['option'] = c_oarg['options'][0]
            } else {
                for (k=0; k<c_oarg['options'].length; k++){
                    if (document.getElementById('oargs_' + c_oarg['name'] + '_o_rb_' + c_oarg['options'][k] + '').checked == true){
                        oargs[i]['option'] = c_oarg['options'][k]
                    }
                }
            }
        } else if (c_oarg['intval'] != undefined) {
            oargs[i]['option'] = document.getElementById('oargs' + c_oarg['name'] + '_iv').value
        }
    }
    out_link = link + '?'
    first = true
    for (i=0; i<oargs.length; i++){
        if (oargs[i]['enabled'] == true){
            to_add = oargs[i]['name'] + '=' + oargs[i]['option']
            if (first == false){
                out_link += '&'
            } else {
                first = false
            }
            out_link += to_add
        }
    }
    document.getElementById("Div_Alert").remove()
    if (first == false){
        open_page(out_link)
    } else {
        open_page(link)
    }
}
function load_pwd(link){
    pwd = document.getElementById("pwd_in").value
    document.getElementById("Div_Alert").remove()
    open_page(link + '?pwd=' + pwd)
}
function div_alert_command(command) {
    document.getElementById("Div_Alert").remove()
    Function('"use strict";' + command)();
}
async function prepare(){
    var u_response = await fetch('/storage/pages.txt')
    var u_data = await u_response.text()
    var pages_data = JSON.parse(u_data)
    pages = {}
    for (i=0; i<pages_data['public'].length; i++){
        page = pages_data['public'][i].name
        link = pages_data['public'][i].link
        pages[page] = pages_data['public'][i]
        if (pages[page]['pwd'] == true){
            document.getElementById('pages').innerHTML += '<Button id="' + String(page) + '" onclick    ="enter_pwd(\'' + String(link) + '\')">' + String(page) + '</Button>'
        } else {
            if (pages[page]['oargs'] != undefined){
                document.getElementById('pages').innerHTML += '<Button id="' + String(page) + '" onclick    ="run_oargs(\'' + String(link) + '\', \'' + String(page) + '\')">' + String(page) + '</Button>'
            } else {
                document.getElementById('pages').innerHTML += '<Button id="' + String(page) + '" onclick    ="open_page(\'' + String(link) + '\')">' + String(page) + '</Button>'
            }
        }
    }
    queryString = window.location.search;
	urlParams = new URLSearchParams(queryString);
	var pwd = urlParams.get("pwd")
	if (pwd == 1406) {
	    for (i=0; i<pages_data['admin'].length; i++){
            page = pages_data['admin'][i].name
            link = pages_data['admin'][i].link
            pages[page] = pages_data['admin'][i]
            if (pages[page]['pwd'] == true){
                document.getElementById('pages').innerHTML += '<Button id="' + String(page) + '" onclick    ="enter_pwd(\'' + String(link) + '\')">' + String(page) + '</Button>'
            } else {
                if (pages[page]['oargs'] != undefined){
                    document.getElementById('pages').innerHTML += '<Button id="' + String(page) + '" onclick    ="run_oargs(\'' + String(link) + '\', \'' + String(page) + '\')">' + String(page) + '</Button>'
                } else {
                    document.getElementById('pages').innerHTML += '<Button id="' + String(page) + '" onclick    ="open_page(\'' + String(link) + '\')">' + String(page) + '</Button>'
                }
            }
        }
	}
}
prepare()