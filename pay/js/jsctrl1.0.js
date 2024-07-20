//var message = "Not allowed.";
function clickIE4() {
    if (e.which == 2 || e.which == 3 || event.button == 0 || event.button == 1) {
        //alert(message);
        return false;
    }
}

function clickNS4(e) {
    if (document.layers || document.getElementById && !document.all) {
        if (e.which == 2 || e.which == 3 || event.button == 0 || event.button == 1) {
            //  alert(message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS4;
}

else if (document.all && !document.getElementById) {
    document.onmousedown = clickIE4;
}

document.oncontextmenu = new Function("return false;")
