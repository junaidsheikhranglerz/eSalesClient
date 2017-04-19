function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        alert("Please Enter Only Numeric Value")
    }
}


$(document).ready(function () {
    $('#example').dataTable();
});

$(document).ready(function () {
    $('#example1').dataTable();
});

function PrintBtn() {
    $("#crud_btn_hide").addClass("none");
    $("#side_navi_hide").addClass("none");

    window.print();
}