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
        $(".hidecolumn").hide();
    }

    else {
        $(".hidecolumn").show();
    }
}

function excludeVatQuote() {


    if (document.getElementById("excludeVatQuote").checked) {
        $("#price_vat_th_quote").addClass("none");
        $("#price_vat_td_quote").addClass("none");
        $("#total_vat_th_quote").addClass("none");
        $("#total_vat_td_quote").addClass("none");
        $("#vat_td_quote").removeClass('border-right-td');
        $("#price_vat_quote").removeClass('border-right-td');
    }

    else {
        $("#price_vat_th_quote").removeClass("none");
        $("#price_vat_td_quote").removeClass("none");
        $("#total_vat_th_quote").removeClass("none");
        $("#total_vat_td_quote").removeClass("none");
        $("#price_vat_th_quote").addClass("showDiv");
        $("#price_vat_td_quote").addClass("showDiv");
        $("#total_vat_th_quote").addClass("showDiv");
        $("#total_vat_td_quote").addClass("showDiv");
        $("#vat_td_quote").addClass('border-right-td');
        $("#price_vat_quote").addClass('border-right-td');
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

function Different_Address() {
    if (document.getElementById("billing_address_checkbox").checked) {
        $("#Shipping_Address_Div").addClass('none');
    }
    else {
        $("#Shipping_Address_Div").removeClass('none');
        $("#Shipping_Address_Div").addClass('showDiv');
    }
}



function run_invoice() {
    var selectedValue = document.getElementById("language").value;

    //var selectedValue1 = document.getElementById("language1").value;
    //var selectedValue2 = document.getElementById("language2").value;

    //alert(selectedValue);
    if (selectedValue == 1) {
        //$("#language") = "Invoice";
        $("#item_sale_id").addClass("none");
        $("#quote_id").addClass("none");
        $("#invoice_id").removeClass("none");
        $("#invoice_id").addClass("showDiv");
    }

    else if (selectedValue == 2) {
        //$("#language") = "Quote";
        $("#invoice_id").addClass("none");
        $("#item_sale_id").addClass("none");
        $("#quote_id").removeClass("none");
        $("#quote_id").addClass("showDiv");
    }

    else if (selectedValue == 3) {
       // $("#language") = "Item Sale";
        $("#invoice_id").addClass("none");
        $("#quote_id").addClass("none");
        $("#item_sale_id").removeClass("none");
        $("#item_sale_id").addClass("showDiv");
        
    }
}

function run_quote(){
    var selectedValue = document.getElementById("language1").value;


    if (selectedValue == 1) {
        //$("#language1") = "Invoice";
        $("#invoice_id").removeClass("none");
        $("#invoice_id").addClass("showDiv");
        $("#item_sale_id").addClass("none");
        $("#quote_id").addClass("none");
    }

    else if (selectedValue == 2) {
        //$("#language1") = "Quote";
        $("#invoice_id").addClass("none");
        $("#item_sale_id").addClass("none");
        $("#quote_id").removeClass("none");
        $("#quote_id").addClass("showDiv");
    }

    else if (selectedValue == 3) {
        //$("#language1") = "Item Sale";
        $("#invoice_id").addClass("none");
        $("#quote_id").addClass("none");
        $("#item_sale_id").addClass("showDiv");
        $("#item_sale_id").removeClass("none");
    }
}


function run_item_sale() {
    var selectedValue = document.getElementById("language2").value;


    if (selectedValue == 1) {
        //$("#language2") = "Invoice";
        $("#invoice_id").removeClass("none");
        $("#invoice_id").addClass("showDiv");
        $("#item_sale_id").addClass("none");
        $("#quote_id").addClass("none");
    }

    else if (selectedValue == 2) {
        //$("#language2") = "Quote";
        $("#invoice_id").addClass("none");
        $("#item_sale_id").addClass("none");
        $("#quote_id").removeClass("none");
        $("#quote_id").addClass("showDiv");
    }

    else if (selectedValue == 3) {
        //$("#language2") = "Item Sale";
        $("#invoice_id").addClass("none");
        $("#quote_id").addClass("none");
        $("#item_sale_id").addClass("showDiv");
        $("#item_sale_id").removeClass("none");
    }
}