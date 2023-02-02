/*const observerOptions = {
  childList: true,
  attributes: true,

  // Omit (or set to false) to observe only changes to the parent node
  subtree: true
}
const observer = new MutationObserver(setup_circle);
observer.observe(document.body, observerOptions);
var circle_animating = false
var going_big = true
function setup_circle() {
    document_buttons = document.getElementsByTagName("button")
    for(let i = 0; i < document_buttons.length; i++){
        document_buttons[i].addEventListener("mouseenter", circle_on_button)
        document_buttons[i].addEventListener("mouseleave", circle_normal)
    }
    document_links = document.getElementsByTagName("a")
    for(let i = 0; i < document_links.length; i++){
        document_links[i].addEventListener("mouseenter", circle_on_link)
        document_links[i].addEventListener("mouseleave", circle_normal)
    }
    document_text = document.getElementsByTagName("p")
    for(let i = 0; i < document_text.length; i++){
        document_text[i].addEventListener("mouseenter", circle_on_text)
        document_text[i].addEventListener("mouseleave", circle_normal)
    }
    document_text = document.getElementsByTagName("textarea")
    for(let i = 0; i < document_text.length; i++){
        document_text[i].addEventListener("mouseenter", circle_on_te)
        document_text[i].addEventListener("mouseleave", circle_normal)
    }
}
function circle_on_button() {
    let circle = document.getElementById('Circle');
    if (circle_animating != true){
        circle.style.width = 20
        circle.style.height = 20
        circle_animating = true
        going_big = true
        var cycle_effect = setInterval(function () {
            if (circle_animating == true) {
                let circle = document.getElementById('Circle');
                if (going_big == true) {
                    cur_width = circle.style.width
                    cur_width_num_string = cur_width.replace("px", "")
                    cur_width_num = Number(cur_width_num_string)
                    out_cur_width_num = cur_width_num + 1
                    circle.style.width = out_cur_width_num
                    cur_height = circle.style.height
                    cur_height_num_string = cur_height.replace("px", "")
                    cur_height_num = Number(cur_height_num_string)
                    out_cur_height_num = cur_height_num + 1
                    circle.style.height = out_cur_height_num
                    cur_height = circle.style.height
                    cur_height_num_string = cur_height.replace("px", "")
                    cur_height_num = Number(cur_height_num_string)
                    if (cur_height_num == 30) {
                        going_big = false
                    }
                } else {
                    cur_width = circle.style.width
                    cur_width_num_string = cur_width.replace("px", "")
                    cur_width_num = Number(cur_width_num_string)
                    out_cur_width_num = cur_width_num - 1
                    circle.style.width = out_cur_width_num
                    cur_height = circle.style.height
                    cur_height_num_string = cur_height.replace("px", "")
                    cur_height_num = Number(cur_height_num_string)
                    out_cur_height_num = cur_height_num - 1
                    circle.style.height = out_cur_height_num
                    cur_height = circle.style.height
                    cur_height_num_string = cur_height.replace("px", "")
                    cur_height_num = Number(cur_height_num_string)
                    if (cur_height_num == 20) {
                        going_big = true
                    }
                }
            } else {
                clearInterval(cycle_effect);
            }
        }, 50);
    }
}
function circle_on_link() {
    let circle = document.getElementById('Circle');
    circle.style.width = 20
    circle.style.height = 20
    circle_animating = true
    going_big = true
    var cycle_effect = setInterval(function () {
        if (circle_animating == true) {
            let circle = document.getElementById('Circle');
            if (going_big == true) {
                cur_width = circle.style.width
                cur_width_num_string = cur_width.replace("px", "")
                cur_width_num = Number(cur_width_num_string)
                out_cur_width_num = cur_width_num + 1
                circle.style.width = out_cur_width_num
                cur_height = circle.style.height
                cur_height_num_string = cur_height.replace("px", "")
                cur_height_num = Number(cur_height_num_string)
                out_cur_height_num = cur_height_num + 1
                circle.style.height = out_cur_height_num
                cur_height = circle.style.height
                cur_height_num_string = cur_height.replace("px", "")
                cur_height_num = Number(cur_height_num_string)
                if (cur_height_num == 30) {
                    going_big = false
                }
            } else {
                cur_width = circle.style.width
                cur_width_num_string = cur_width.replace("px", "")
                cur_width_num = Number(cur_width_num_string)
                out_cur_width_num = cur_width_num - 1
                circle.style.width = out_cur_width_num
                cur_height = circle.style.height
                cur_height_num_string = cur_height.replace("px", "")
                cur_height_num = Number(cur_height_num_string)
                out_cur_height_num = cur_height_num - 1
                circle.style.height = out_cur_height_num
                cur_height = circle.style.height
                cur_height_num_string = cur_height.replace("px", "")
                cur_height_num = Number(cur_height_num_string)
                if (cur_height_num == 20) {
                    going_big = true
                }
            }
        } else {
            clearInterval(cycle_effect);
        }
    }, 50);
}
function circle_on_text() {
    let circle = document.getElementById('Circle');
    circle.style.width = 20
    circle.style.height = 20
}
function circle_on_te() {
    let circle = document.getElementById('Circle');
    circle.style.width = 20
    circle.style.height = 20
}
function circle_normal() {
    circle_animating = false
    let circle = document.getElementById('Circle');
    circle.style.width = 35
    circle.style.height = 35
}
const onMouseMove = (e) =>{
    let circle = document.getElementById('Circle');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);*/
try {
    document.getElementById('Circle').remove()
} catch {
    //pass
}