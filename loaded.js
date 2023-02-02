function r_l() {
    var fadeTarget = document.getElementsByClassName("loader_div_bg")[0]
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
            document.getElementsByClassName("loader_div_bg")[0].remove();
        }
    }, 10);
}
var og_window_function = window.onload
var og_window_function_name = og_window_function.name
window.onload = Function('r_l(); ' + og_window_function_name + '();')