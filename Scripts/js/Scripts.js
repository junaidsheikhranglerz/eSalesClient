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


function SetDate() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;


    document.getElementById('myDate').value = today;
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

function VatQuote() {
    
    if (document.getElementById("QuoteId").checked) {
        //alert("checked");
        $(".hidecolumnQuote").hide();
    }

    else {
        $(".hidecolumnQuote").show();
    }
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

//function myNewFunction(element) {
//    var text = element.options[element.selectedIndex].text;
//    var kk = document.getElementById("language").innerHTML = text;
//    alert(kk);
    
//}

function show_custom_date_payment() {
    var selectedValue = document.getElementById("custom_date_select_invoice").value;

    if (selectedValue == 1) {
        $("#custom_date_show_invoice").show();
    }
    else {
        $("#custom_date_show_invoice").hide();
    }
}

function show_custom_date_purchase_order() {
    var selectedValue = document.getElementById("custom_date_select_purchase_order").value;

    if (selectedValue == 1) {
        $("#custom_date_show_purchase_order").show();
    }
    else {
        $("#custom_date_show_purchase_order").hide();
    }
}


function run_invoice_price() {
    var selectedValue = document.getElementById("price_invoice_dropdown").value;
    //alert(selectedValue);
    if (selectedValue == 1) {
        $("#price_invoice_id").show();
        $("#price_quote_id").hide();
        $("#price_item_sale_id").hide();
    }

    else if (selectedValue == 2) {

        $("#price_quote_id").show();
        $("#price_invoice_id").hide();
        $("#price_item_sale_id").hide();

        //var a = $("#language option:selected").text();
        //alert(a);

        //var a = $('#language option[value="someValue"]').text("qttt");
        //alert(a);


        //$("#language").innerHTML(a);

        //var c = document.getElementById("language").innerHTML(a);
        //alert(c);
    }

    else if (selectedValue == 3) {

        $("#price_item_sale_id").show();
        $("#price_invoice_id").hide();
        $("#price_quote_id").hide();



        //var b = $("#language option:selected").text();
        //alert(b);

        //$("#language").val("Item Sale");



    }
}



function run_invoice() {
    var selectedValue = document.getElementById("language").value;
    //alert(selectedValue);
    if (selectedValue == 1) {
        $("#invoice_id").show();
        $("#quote_id").hide();
        $("#item_sale_id").hide();
    }

    else if (selectedValue == 2) {

        $("#quote_id").show();
        $("#invoice_id").hide();
        $("#item_sale_id").hide();

        //var a = $("#language option:selected").text();
        //alert(a);

        //var a = $('#language option[value="someValue"]').text("qttt");
        //alert(a);
        

        //$("#language").innerHTML(a);

        //var c = document.getElementById("language").innerHTML(a);
        //alert(c);
    }

    else if (selectedValue == 3) {

        $("#item_sale_id").show();
        $("#invoice_id").hide();
        $("#quote_id").hide();



        //var b = $("#language option:selected").text();
        //alert(b);

        //$("#language").val("Item Sale");

     
        
    }
}

//function run_quote(){
//    var selectedValue = document.getElementById("language1").value;


//    if (selectedValue == 1) {
//        //$("#language1") = "Invoice";
//        $("#item_sale_id").hide();
//        $("#quote_id").hide();
//        $("#invoice_id").show();
//    }

//    else if (selectedValue == 2) {
//        //$("#language1") = "Quote";
//        $("#invoice_id").hide();
//        $("#item_sale_id").hide();
//        $("#quote_id").show();
//    }

//    else if (selectedValue == 3) {
//        //$("#language1") = "Item Sale";
//        $("#invoice_id").hide();
//        $("#quote_id").hide();
//        $("#item_sale_id").show();

//    }
//}


//function run_item_sale() {
//    var selectedValue = document.getElementById("language2").value;

//    if (selectedValue == 1) {
//        //$("#language2") = "Invoice";
//        $("#item_sale_id").hide();
//        $("#quote_id").hide();
//        $("#invoice_id").show();
//    }

//    else if (selectedValue == 2) {
//        //$("#language2") = "Quote";
//        $("#invoice_id").hide();
//        $("#item_sale_id").hide();
//        $("#quote_id").show();
//    }

//    else if (selectedValue == 3) {
//        //$("#language2") = "Item Sale";
//        $("#invoice_id").hide();
//        $("#quote_id").hide();
//        $("#item_sale_id").show();

//    }
//}


//---------------------New Invoice Existing Customer---------------------
function go(id,type_id) {
    var name = document.getElementById('juni1' + id);
    var phone = document.getElementById('juni2' + id);
    var address = document.getElementById('juni3' + id);
    var postcode = document.getElementById('juni4' + id);
    var email = document.getElementById('juni5' + id);
    var type1 = type_id;

    var name1 = name.innerHTML
    var phone1 = phone.innerHTML
    var address1 = address.innerHTML
    var postcode1 = postcode.innerHTML
    var email1 = email.innerHTML

    //alert(name1);
    //alert(phone1);
    //alert(address1);
    //alert(postcode1);
    //alert(email1);
    //alert(type1);

    //$("#ExistingModal").hide;


    $("#customer_name").text(name1);
    $("#customer_address").text(phone1);
    $("#customer_postcode").text(address1);
    $("#customer_phone").text(postcode1);
    $("#customer_email").text(email1);

    if (type1 == 1) {
        $("#type_customer").text("Normal Customer");
    }
    else if (type1 == 2) {
        $("#type_customer").text("Premium Customer");
    }

    else if (type1 == 3) {
        $("#type_customer").text("Trade Customer");
    }
    else if (type1 == 4) {
        $("#type_customer").text("Other Customer");
    }


    $("#customer_name_quote").text(name1);
    $("#customer_address_quote").text(phone1);
    $("#customer_postcode_quote").text(address1);
    $("#customer_phone_quote").text(postcode1);
    $("#customer_email_quote").text(email1);

    if (type1 == 1) {
        $("#type_customer_quote").text("Normal Customer");
    }
    else if (type1 == 2) {
        $("#type_customer_quote").text("Premium Customer");
    }

    else if (type1 == 3) {
        $("#type_customer_quote").text("Trade Customer");
    }
    else if (type1 == 4) {
        $("#type_customer_quote").text("Other Customer");
    }

    $("#customer_name_item_sale").text(name1);
    $("#customer_address_item_sale").text(phone1);
    $("#customer_postcode_item_sale").text(address1);
    $("#customer_phone_item_sale").text(postcode1);
    $("#customer_email_item_sale").text(email1);
    

    if (type1 == 1) {
        $("#type_customer_item_sale").text("Normal Customer");
    }
    else if (type1 == 2) {
        $("#type_customer_item_sale").text("Premium Customer");
    }

    else if (type1 == 3) {
        $("#type_customer_item_sale").text("Trade Customer");
    }
    else if (type1 == 4) {
        $("#type_customer_item_sale").text("Other Customer");
    }

    

    $("#ExistingModal").hide('slow');
    //$("#ExistingModal").closest();




    //var name = $("#existing_customer_name").val()
    //alert(name);
    //var phone = $("#existing_customer_phone").val;
    //alert(phone);
    //var address = $("#existing_customer_billing_address").val;
    //alert(address);
    //var post = $("#existing_customer_billing_postcode").val;
    //alert(post);
    //var mail = $("#existing_customer_email").val;
    //alert(mail);
    //var type = $("#c_type").val;
    //alert(type);
}
//---------------------New Invoice Existing Customer---------------------



function clear_customer_li() {
    //INVOICE
    $("#customer_name").text("");
    $("#customer_address").text("");
    $("#customer_postcode").text("");
    $("#customer_phone").text("");
    $("#customer_email").text("");
    $("#type_customer").text("");


    //QUOTE
    $("#customer_name_quote").text("");
    $("#customer_address_quote").text("");
    $("#customer_postcode_quote").text("");
    $("#customer_phone_quote").text("");
    $("#customer_email_quote").text("");
    $("#type_customer_quote").text("");

    //ITEM SALE
    $("#customer_name_item_sale").text("");
    $("#customer_address_item_sale").text("");
    $("#customer_postcode_item_sale").text("");
    $("#customer_phone_item_sale").text("");
    $("#customer_email_item_sale").text("");
    $("#type_customer_item_sale").text("");


}

//--------------------NEW INVOICE -------- ADD NEW ROW IN TABLE--------------------

//--------------------NEW INVOICE -------- ADD NEW ROW IN TABLE--------------------