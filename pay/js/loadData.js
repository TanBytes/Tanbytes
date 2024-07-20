document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var collapsibleContent = document.querySelector('.collapsible-content');

    toggleButton.addEventListener('click', function () {
        if (collapsibleContent.classList.contains('open')) {
            collapsibleContent.classList.remove('open');
            toggleButton.textContent = 'See More';
        } else {
            collapsibleContent.classList.add('open');
            toggleButton.textContent = 'See Less';
        }
    });
});

function socialScript() {
    function openShare(e) {
        try {
            let elem = e.target;
            if (elem.tagName == "A") {
                elem = elem.firstElementChild;
            }
            const webaddress = window.location.href;
            let gourl = elem.dataset.gourl;
            let openurl = gourl + webaddress;
            if (gourl) {
                window.open(openurl, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    let socialShareButtonsItem = document.querySelectorAll(".courses__details-social a");
    socialShareButtonsItem.forEach(element => {
        element.onclick = openShare;
    });
};
function printmsgtopend(type, msg, btn, time) {
    Swal.fire({
        position: 'top-end',
        icon: type,
        title: msg,
        allowOutsideClick: false,
        showConfirmButton: btn,
        timer: time
    })
}
function printmsgcenter(type, msg, btn, time) {
    Swal.fire({
        position: 'center',
        icon: type,
        title: msg,
        allowOutsideClick: false,
        showConfirmButton: btn,
        timer: time
    })
}
function closemsg() {
    swal.close();
}
socialScript();