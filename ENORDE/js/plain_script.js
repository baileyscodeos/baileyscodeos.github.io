function on_load(){
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    var en = urlParams.get("en")
    var de = urlParams.get("de")
    remove_disclaimer()
    if (en != null && de != null){
        document.getElementById("Out").innerHTML = 'You Can Only Decode Or Encode Not Both'
    } else if (en != null){
        document.getElementById("Out").innerHTML = encode(en)
    } else if (de != null){
        document.getElementById("Out").innerHTML = decode(de)
    } else {
        document.getElementById("Out").innerHTML = 'You Need To Encode Or Decode Not None'
    }
}
window.onload = on_load
function remove_disclaimer() {
    try {
        document.getElementsByClassName("disclaimer")[0].remove()
    } catch {
        //pass
    }
    document.getElementById("disclaimer_button").remove()
}
function encode(text) {
    en = text
    if (true) {
        reversedString=[]
        index = en.length
        while (index > 0) {
            reversedString += en[ index - 1 ]
            index = index - 1
        }
        reversedout=reversedString
        reversedoutin=reversedout
        count = 1
        symbol = String('`-=[]\\;,./~!@#$%^&*()_+{}|:<>?¡™£¢∞§¶•ªº–≠œ∑®†¥øπåß∂ƒ©˙∆˚¬…æΩ≈ç√∫µ≤≥÷`⁄€‹›ﬁﬂ‡°·‚—±Œ„´‰ˇÁ¨ˆØ∏”’ÅÍÎÏ˝ÓÔÒÚÆ¸˛Ç◊ı˜Â¯˘¿')
        alphnum = String('AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789')
        enout = ''
        for (let k = 0, len=reversedoutin.length; k < len; k++) {
            i = reversedoutin[k]
            if (count == 1) {
                joinimix = [i, symbol]
                joini = joinimix.join('')
                count = count + 1
            } else if (count == 2) {
                reversedString=[]
                index = symbol.length
                while (index > 0) {
                    reversedString += symbol[ index - 1 ]
                    index = index - 1
                }
                reversedout=reversedString
                joinimix = [i, reversedout]
                joini = joinimix.join('')
                count = count + 1
            } else if (count == 3) {
                joinimix = [symbol, i]
                joini = joinimix.join('')
                count = count + 1
            } else if (count == 4) {
                reversedString=[]
                index = symbol.length
                while (index > 0) {
                    reversedString += symbol[ index - 1 ]
                    index = index - 1
                }
                reversedout=reversedString
                joinimix = [reversedout, i]
                joini = joinimix.join('')
                count = count + 1
            } else if (count == 5) {
                joinimix = [i, alphnum]
                joini = joinimix.join('')
                count = count + 1
            } else if (count == 6) {
                reversedString=[]
                index = alphnum.length
                while (index > 0) {
                    reversedString += symbol[ index - 1 ]
                    index = index - 1
                }
                reversedout=reversedString
                joinimix = [i, reversedout]
                joini = joinimix.join('')
                count = count + 1
            } else if (count == 7) {
                joinimix = [alphnum, i]
                joini = joinimix.join('')
                count = count + 1
            } else if (count == 8) {
                reversedString=[]
                index = alphnum.length
                while (index > 0) {
                    reversedString += symbol[ index - 1 ]
                    index = index - 1
                }
                reversedout=reversedString
                joinimix = [reversedout, i]
                joini = joinimix.join('')
                count = 1
            }
            enoutmix = [enout, joini]
            enout = enoutmix.join('')
        }
        return enout
    }
}
function set_out(text) {
    document.getElementById("Output").innerHTML = text
}
function get_in() {
    return document.getElementById('Text').value
}
function decode(text) {
    de = text
    if (true) {
        deforloop = 1
        codertype = 1
        deout = ''
        for (let k = 0, len=de.length; k < len; k++) {
            i = de[k]
            if (codertype == 1 || codertype == 2) {
                if (deforloop == 1) {
                    keepers = i
                } else if (deforloop > 1 && deforloop < 116) {
                    ignore = i
                } else if (deforloop == 116) {
                    deforloop = 0
                }
            } else if (codertype == 3) {
                if (deforloop > 0 && deforloop < 232) {
                    ignore = i
                } else if (deforloop == 232) {
                    keepers = i
                    deforloop = 0
                }
            } else if (codertype == 4) {
                if (deforloop > 0 && deforloop < 116) {
                    ignore = i
                } else if (deforloop == 116) {
                    keepers = i
                    deforloop = 0
                }
            } else if (codertype == 5 || codertype == 6) {
                if (deforloop == 1) {
                    keepers = i
                } else if (deforloop > 1 && deforloop < 63) {
                    ignore = i
                } else if (deforloop == 63) {
                    deforloop = 0
                }
            } else if (codertype == 7) {
                if (deforloop > 0 && deforloop < 126) {
                    ignore = i
                } else if (deforloop == 126) {
                    keepers = i
                    deforloop = 0
                }
            } else if (codertype == 8) {
                if (deforloop > 0 && deforloop < 63) {
                    ignore = i
                } else if (deforloop == 63) {
                    keepers = i
                    deforloop = 0
                }
            }
            if (codertype == 1 && deforloop == 1) {
                codertype = codertype + 1
                deoutmix = [deout, keepers]
                deout = deoutmix.join('')
            } else if (codertype == 2 && deforloop == 1) {
                codertype = codertype + 1
                deoutmix = [deout, keepers]
                deout = deoutmix.join('')
            } else if (codertype == 3 && deforloop == 0) {
                codertype = codertype + 1
                deoutmix = [deout, keepers]
                deout = deoutmix.join('')
            } else if (codertype == 4 && deforloop == 0) {
                codertype = codertype + 1
                deoutmix = [deout, keepers]
                deout = deoutmix.join('')
            } else if (codertype == 5 && deforloop == 1) {
                codertype = codertype + 1
                deoutmix = [deout, keepers]
                deout = deoutmix.join('')
            } else if (codertype == 6 && deforloop == 1) {
                codertype = codertype + 1
                deoutmix = [deout, keepers]
                deout = deoutmix.join('')
            } else if (codertype == 7 && deforloop == 0) {
                codertype = codertype + 1
                deoutmix = [deout, keepers]
                deout = deoutmix.join('')
            } else if (codertype == 8 && deforloop == 0) {
                codertype = 1
                deoutmix = [deout, keepers]
                deout = deoutmix.join('')
            }
            deforloop = deforloop + 1
        }
        reversedString=[]
        index = deout.length
        while (index > 0) {
            reversedString += deout[ index - 1 ]
            index = index - 1
        }
        reversedout=reversedString
        return reversedout
    }
}
const onMouseMove = (e) =>{
    let circle = document.getElementById('Circle');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);