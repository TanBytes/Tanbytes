function payinitiate(btn) {
    var cid = $(btn).attr("data-id");

    // Check session before proceeding
    $.ajax({
        type: "POST",
        url: "../Course.aspx/payforCoursePurchase",
        data: "{'cid':'" + cid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            if (r != null) {
                swal.close();
                if (r.d.status == "2") {
                    printmsgcenter('warning', r.d.msg, false, 2000);
                    setTimeout(function () { window.location.href = '../login.aspx'; }, 2000);
                }
                if (r.d.status == "1") {
                    printmsgcenter('success', r.d.msg, false, 2000);
                    window.open(r.d.url, '_self');
                }
                if (r.d.status == "0") {
                    printmsgcenter('warning', r.d.msg, false, 3000);
                }
            }
        },
        error: function () {
            printmsgcenter('error', 'Unable to verify session. Please try again.', true, 5000);
        }
    });
}