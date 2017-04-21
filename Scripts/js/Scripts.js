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

function excludeVatUnchecked() {


    if (document.getElementById("excludeVat").checked) {
        $("#price_vat_th").addClass("none");
        $("#price_vat_td").addClass("none");
        $("#total_vat_th").addClass("none");
        $("#total_vat_td").addClass("none");
    }

    else {
        $("#price_vat_th").removeClass("none");
        $("#price_vat_td").removeClass("none");
        $("#total_vat_th").removeClass("none");
        $("#total_vat_td").removeClass("none");
        $("#price_vat_th").addClass("showDiv");
        $("#price_vat_td").addClass("showDiv");
        $("#total_vat_th").addClass("showDiv");
        $("#total_vat_td").addClass("showDiv");
    }
}

//function () {
//if ($("#excludeVat").not("checked")) {
//    alert("jghadjasdjasd");
//        $("#price_vat_th").addClass("showDiv");
//        $("#price_vat_td").addClass("showDiv");
//        $("#total_vat_th").addClass("showDiv");
//        $("#total_vat_td").addClass("showDiv");
//}

//else if() {
//    $("#price_vat_th").addClass("none");
//    $("#price_vat_td").addClass("none");
//    $("#total_vat_th").addClass("none");
//    $("#total_vat_td").addClass("none");
//}
//}



function Add() {
    var a, b, c, d;
    a = parseInt(document.getElementById("NormalPrice").value);

    //
    // If textbox value is null i.e empty, then the below mentioned if condition will
    // come into picture and make the value to '0' to avoid errors.
    //
    if (isNaN(a) == true) {
        a = 0;
    }

    var b = parseInt(document.getElementById("TradePrice").value);
    if (isNaN(b) == true) {
        b = 0;
    }

    var c = parseInt(document.getElementById("PremiumPrice").value);
    if (isNaN(c) == true) {
        c = 0;
    }

    var d = parseInt(document.getElementById("OtherPrice").value);
    if (isNaN(d) == true) {
        d = 0;
    }

    var e = parseInt(document.getElementById("CostPrice").value);
    if (isNaN(e) == true) {
        e = 0;
    }

    document.getElementById("NormalTotal").value = a + ((a * 20) / 100)
    document.getElementById("TradeTotal").value = b + ((b * 20) / 100)
    document.getElementById("PremiumTotal").value = c + ((c * 20) / 100)
    document.getElementById("OtherTotal").value = d + ((d * 20) / 100)
    document.getElementById("CostTotal").value = e + ((e * 20) / 100)
}
