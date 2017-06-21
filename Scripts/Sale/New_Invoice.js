function submitResult() {

    //alert('submit');


    if (checkCreditLimit() == false) {
        return false;

    } else {
        return true;
    }
}




function checkCreditLimit() {

    //alert("check_credit_limit");
    var limits = document.getElementById('credit_limit_input').value;


    var gross1 = document.getElementById("gross_invoice").value;
    var payment_status = document.getElementById("payment_status_id").value;

    var gross2 = gross1 - 0;
    var gross = gross2.toFixed(2);
    var limit_float = limits - 0;


    var limit = limit_float.toFixed(2);
    //alert("gross" + gross);
    //alert("limit" + limit);


    if (payment_status != 1) {


        if (payment_status == 3) {
            var amount_left1 = document.getElementById("left_amount_hidden").value;

            var amount_left2 = amount_left1 - 0;
            var amount_left = amount_left2.toFixed(2);

            //alert("LIMIT" + limit);
            //alert("Amount Left" + amount_left);


            if (parseFloat(amount_left) <= parseFloat(limit)) {
                //alert("Amount Left" + amount_left);
                //alert("Partial Payment Not Reached your Credit Limit");
                return true;
            }
            else {

                swal({
                    title: "LIMIT REACHED",
                    text: "Reached to your Credit Limit, Please update your Credit Limit",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
       function () {
       });

                //alert("Partial Payment You have Reached your Credit Limit\nYou have to Update your Credit Limit");
                return false;
            }
        }

        else {
            if (parseFloat(gross) > parseFloat(limit)) {

                //alert("Gross" + gross);
                //alert("Limit" + limit);
                //alert("You have Reached your Credit Limit\nYou have to Update your Credit Limit");

                swal({
                    title: "LIMIT REACHED",
                    text: "Reached to your Credit Limit, Please update your Credit Limit",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
    function () {
    });

                return false;
            }
            else {
                //alert("Not Reached your Credit Limit");
                return true;
            }
        }
    }
    else {
        return true;
    }
}


function payment_status() {
    var selectedValue = document.getElementById("payment_status_id").value;

    jQuery.noConflict();

    if (selectedValue == 1) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").hide();

    }
    else if (selectedValue == 2) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").hide();
    }
    else if (selectedValue == 3) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").show();
        $("#Deposit_payment_option").hide();

        $("#Partial_Payment_Modal").modal("show");
    }
    else if (selectedValue == 4) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").show();


        $("#Deposit_Modal").modal("show");
    }



    else if (selectedValue == 5) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").hide();
    }

    else if (selectedValue == 6) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").hide();
    }
    else if (selectedValue == 7) {
        $("#partial_payment_option").hide();
        $("#custom_date_show_invoice").hide();
        $("#Deposit_payment_option").hide();
    }
    else if (selectedValue == 8) {
        $("#partial_payment_option").hide();
        $("#custom_date_show_invoice").show();
        $("#Deposit_payment_option").hide();
    }
}





function hhh() {
    jQuery.noConflict();
    $("#Sold_History_Modal").modal('show');
}



function Partial_Payment() {

    $(".partial_paid").show();
    $("#deposit_paid_tr").hide();

    var discount = $("#discount_value").val();

    var gross = $("#gross_invoice").val();

    var amount = $("#partial_amount").val();

    var rem = gross - amount - discount;
    var remaining = rem.toFixed(2);

    $("#amount_paid_hidden").val(amount);


    document.getElementById("partial_paid_td").innerHTML = ("£" + amount);
    document.getElementById("amount_left_td").innerHTML = remaining;
    $("#left_amount_hidden").val(remaining);
    //$("#partial_paid_td").val(amount);
    //alert("REMAINING" + remaining);//alert("REMAINING" + remaining);

}

function Deposit_Payment() {
    $(".deposit_paid").show();
    $("#partial_paid_tr").hide();

    var discount = $("#discount_value").val();

    var gross = $("#gross_invoice").val();

    var amount = $("#partial_amount_deposit").val();
    //alert("Deposit Value:" + amount);

    var rem = gross - amount - discount;
    var remaining = rem.toFixed(2);

    $("#amount_paid_hidden").val(amount);


    document.getElementById("deposit_paid_td").innerHTML = ("£" + amount);
    document.getElementById("amount_left_td").innerHTML = remaining;
    $("#left_amount_hidden").val(remaining);
    //$("#partial_paid_td").val(amount);
    //alert("REMAINING: " + " " + remaining);
}

function RemoveAddedRow(id) {
    var total = document.getElementById("invoice_total" + id).value;
    var net = $("#net_invoice_hidden").val();

    //var vat = $("#vat_invoice").val();


    var new_net = net - total;
    var vat = (new_net * 0.2);
    var gross = +(new_net * 0.2) + +new_net;

    $("#net_invoice_hidden").val(new_net);
    $("#net_invoice").html("£" + new_net);


    $("#vat_invoice").val(vat);
    $("#invoice_vat").html(vat);


    $("#gross_invoice").val(gross);
    $("#invoice_gross").html(gross);

    
    //alert("NEW NET" + new_net);
    $("#rowId" + id).closest(".remove_div").remove();
    rowcounterMinus();
    
    //alert("NET" + a);
}



function addNewRow() {


    arguments.callee.myStaticVar = arguments.callee.myStaticVar || 2;
    var count = arguments.callee.myStaticVar++;
    document.getElementById("counters").value = count;
    //alert("new Row counter = "  + count);

    $.ajax({

        url: '/Product/AddNewRow/',
        data: { counter: count },
        type: "Get",
        cache: false,
        success: function (data) {


            var iddd = 'newrow' + count;

            document.getElementById('newrow' + count).innerHTML = data;

        }

    })
}

function tbody_add_record(id, count) {


    //alert("2222-----" + count);



    var sku = document.getElementById('partial_row1' + id);
    $("#invoice_product_id" + count).val(id);

    var sku_inner = sku.innerHTML;
    $("#codeforProduct" + count).val(sku_inner);

    var desc = document.getElementById('partial_row2' + id);
    var desc_inner = desc.innerHTML;
    $("#invoice_description" + count).val(desc_inner);

    var quantity = document.getElementById('partial_row3' + id);
    var quantity_inner = quantity.innerHTML;
    //            $("#invoice_quantity" + count).val(quantity_inner);

    var price = document.getElementById('partial_row4' + id);
    var price_inner = price.innerHTML;
    $("#invoice_price" + count).val(price_inner);

    var percent_price = ((20 / 100)) * price_inner;
    total_price_with_vat = +percent_price + +price_inner;

    //          alert("Price Vat =" + total_price_with_vat);
    var a = total_price_with_vat.toFixed(2);
    //alert("a" + a);
    //            alert("a =" + a);


    //var price_vat = document.getElementById('partial_row5' + id);
    //var price_vat_inner = total_price_with_vat.innerHTML;
    $("#invoice_price_vat" + count).val(a);

    //var v = $("#invoice_price_vat" + count).val();
    //alert("V = " + v);

    document.getElementById("invoice_total" + count).value = "£" + price_inner;
    document.getElementById("invoice_total_vat" + count).value = "£" + total_price_with_vat;

    $("#total_hidden" + count).val(price_inner);
    $("#total_vat_hidden" + count).val(total_price_with_vat);

    //alert("TOTAL : " + price_inner);
    //alert("TOTAL VAT : " + total_price_with_vat);

    //$("#invoice_discount" + count).val("0");
    $("#invoice_quantity" + count).val("0");

    $("#productList").hide();
    //alert(price_inner);


    checkSoldHistory(count);
    Total(count);




}





$(document).ready(function () {
    $('#kj').dataTable();
});





$('.add_new_row').click(function () {
    var i = 1;
    $('#maintable tr:last').after('<tr id="rowId" class="font-15  remove_div"><td class="border-right-td"><div class="text-center"><input placeholder="Code" class="yoyo unbold width-110" id="codeforProduct" name="yoyoyoyoyoyoyoy" onkeyup="productList(this.value)" type="text"></div></td><td class="border-right-td"><textarea class="description-text-area unbold width-100p" id="invoice_description" required="" placeholder="Description"></textarea></td><td class="border-right-td"><div class="text-center"><input id="invoice_quantity" placeholder="0" class="unbold width-45" name="" type="text"></div></td><td class="border-right-td"><div class="text-center"><input id="invoice_price" placeholder="0.0" class="new-invoice-width-boxes unbold width-68" name="" type="text"></div></td><td class="border-right-td hidecolumn text-center"><input id="invoice_price_vat" placeholder="0.0" class="new-invoice-width-boxes unbold width-78" name="" type="text"></td><td class="text-center border-right-td width-68"><div id="invoice_total" class="total_invoice_background">£0</div></td><td class="border-right-td text-center width-78 hidecolumn"><div id="invoice_total_vat" class="total_invoice_background">£0</div></td><td class="border-right-td"><div class="text-center"><input id="invoice_discount" placeholder="0.0" class="unbold width-45" name="" type="text"></div></td><td class="text-center width-25p" style="vertical-align:middle;"><a href="#" class="add_new_row showdiv"><img src="/img/images/plus_new_sale.png"></a><a href="#" class="kashif" onclick="removeRow()"><img src="/img/images/cross_new_sale.png" style="margin-left:3px;"></a><a href="#"><img src="/img/images/barcode_new_sale.png" style="margin-left:4px;"></a><a href="#"><img src="/img/images/findpost.png" style="margin-left:4px"></a></td></tr>');
});

//function removeRow()

$(document).on('click', '.kashif', function removeRow() {
});




function global_discount() {
    $(".discount_tr").show();

    var a = document.getElementById("discount_value").value;
    //alert(a);

    if (a == "") {
        swal({
            title: "DISCOUNT EMPTY",
            text: "Please Enter Discount Price",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        },
     function () {
     });
    }

    else {
        document.getElementById("invoice_discount_td").innerHTML = ("£" + a);

        var b = $("#invoice_gross").html();






        var after_discount = b - a;
        //alert("After :" + after_discount);
        document.getElementById("invoice_after_discount_td").innerHTML = ("£" + after_discount.toFixed(2));

        $("#global_discount_hidden").val(a);
        $("#total_after_discount_hidden").val(after_discount);
        var amount_left = document.getElementById("amount_left_td").innerHTML;
        var remaining = amount_left - a;

        document.getElementById("amount_left_td").innerHTML = ("£" + remaining.toFixed(2));
        $("#left_amount_hidden").val(remaining);
    }


}





function productList(char) {

    //arguments.callee.counter = arguments.callee.counter || 1;

    var customerID = document.getElementById("exist_customer_id").value;

    if (customerID != null && customerID != "") {

        var Count = document.getElementById("counters").value;
        if (Count == "") {
            Count = 1;
        }
        //alert("Product List Counter ="+  Count)


        $("#productList").show();




        $.ajax({
            url: '/Product/GetProducts/',
            data: { ch: char, counte: Count },
            cache: false,
            type: "Get",
            success: function (data) {

                document.getElementById('productList').innerHTML = data;




            },
            error: function (response) {
                //alert("productList");
            }
        })
    }
    else {

        swal({
            title: "CUSTOMER NOT SELECTED",
            text: "You have to Select Customer first, to Select Products",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        },
  function () {
  });

        //alert("Please Select customer First");
    }
}





function Total(rownum) {

    //alert("rownum =  " + rownum);
    //alert("ROWCount Total" + document.getElementById('rowCounterrr').value);

    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    var price = document.getElementById('invoice_price' + rownum).value;

    var price_vat = ((20 / 100)) * price;

    var priceVatTotal = +price + +price_vat;


    var total = quantity * price;

    var totalVat = quantity * priceVatTotal;
    
    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price_vat' + rownum).value = priceVatTotal;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

    $("#total_hidden" + rownum).val(total);
    $("#total_vat_hidden" + rownum).val(totalVat);

    var discount_enter = $("#invoice_discount" + rownum).val();




    var after_discount_total = total - discount_enter;
    var after_discount_total_Vat = totalVat - discount_enter;

    document.getElementById('invoice_total' + rownum).value = after_discount_total.toFixed(2);
    document.getElementById('invoice_total_vat' + rownum).value = after_discount_total_Vat.toFixed(2);


    
    var a = 0;
    var size = document.getElementById('rowCounterrr').value;
    var totaaaal = 0;
    var check = 0;
    //alert("sizeFIRST" + size);
    for (i = 1; i <= size ; ++i) {

        check = document.getElementById('invoice_total' + i);

        //alert("CHECK" + check);

        if (check !== null) {
           
            totaaaal = document.getElementById('invoice_total' + i).value;

            a = +totaaaal + +a;
        }
        else {

            size = +size + +1;
            //alert("SIZE" + size);
        }
        //alert("i  " + i + "   totaaaal    " + totaaaal + "  a  " + a);
    }

    //alert("AGYA");

    $("#net_invoice").html("£" + a);


    var total_vat = (((20 / 100)) * a).toFixed(2);

    var gross = +a + +total_vat;




    var discounted = gross - global_discount;


    $("#invoice_vat").html(total_vat);
    $("#invoice_gross").html(gross);

    $("#net_invoice_hidden").val(a);
    $("#vat_invoice").val(total_vat);
    $("#gross_invoice").val(gross);


}

function Total2(rownum) {


    //alert("ROWCount Total 2"+document.getElementById('rowCounterrr').value);

    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    var priceVat = document.getElementById('invoice_price_vat' + rownum).value;
    var price = (5 / 6) * (priceVat);

    var total = quantity * price;
    var totalVat = quantity * priceVat;

    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price' + rownum).value = price;
    document.getElementById('invoice_price_vat' + rownum).value = priceVat;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

    $("#total_hidden" + rownum).val(total);
    $("#total_vat_hidden" + rownum).val(totalVat);

    var discount_enter = $("#invoice_discount" + rownum).val();




    var after_discount_total = total - discount_enter;
    var after_discount_total_Vat = totalVat - discount_enter;

    document.getElementById('invoice_total' + rownum).value = after_discount_total.toFixed(2);
    document.getElementById('invoice_total_vat' + rownum).value = after_discount_total_Vat.toFixed(2);


    var a = 0;
    var size = document.getElementById('rowCounterrr').value;
    var totaaaal = 0;
    var check = 0;
    //alert("sizeFIRST" + size);
    for (i = 1; i <= size ; ++i) {

        check = document.getElementById('invoice_total' + i);

        //alert("CHECK" + check);

        if (check !== null) {

            totaaaal = document.getElementById('invoice_total' + i).value;

            a = +totaaaal + +a;
        }
        else {

            size = +size + +1;
            //alert("SIZE" + size);
        }
        //alert("i  " + i + "   totaaaal    " + totaaaal + "  a  " + a);
    }


    $("#net_invoice").html("£" + a);
    var total_vat = (((20 / 100)) * a).toFixed(2);

    var gross = +a + +total_vat;



    var discounted = gross - global_discount;


    $("#invoice_vat").html(total_vat)
    $("#invoice_gross").html(gross);

    $("#net_invoice_hidden").val(a);
    $("#vat_invoice").val(total_vat);
    $("#gross_invoice").val(gross);


}





function checkInvoiceNumber() {
    var number = document.getElementById("invoice_number").value;

    $.ajax({

        url: '/Sale/InvoiceNumberValidation/',
        data: { invoice: number },
        type: "Get",
        cache: false,
        success: function (data) {

            if (data == "False") {

                document.getElementById("invoice_number").value = "";
                swal({
                    title: "INVOICE NUMBER EXIST",
                    text: "Invoice Number Exist, Enter Some other Number",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
    function () {
    });
            }
        },
        error: function (response) {
            alert("invoice validation Error Occured");
        }


    })
}




function checkQuoteNumber() {
    var number = document.getElementById("quote_number").value;

    $.ajax({

        url: '/Sale/QuoteNumberValidation/',
        data: { quote: number },
        type: "Get",
        cache: false,
        success: function (data) {

            if (data == "False") {

                document.getElementById("quote_number").value = "";
                alert("Quote_number already exist !")
            }
        },
        error: function (response) {
            alert("Quote validation Error Occured");
        }


    })
}



function checkItemSaleNumber() {
    var number = document.getElementById("item_sale_number").value;

    $.ajax({

        url: '/Sale/ItemSaleNumberValidation/',
        data: { item_sale: number },
        type: "Get",
        cache: false,
        success: function (data) {

            if (data == "False") {

                document.getElementById("item_sale_number").value = "";
                alert("item_sale_number already exist !")
            }
        },
        error: function (response) {
            alert("Item Sale validation Error Occured");
        }


    })
}

function checkSoldHistory(counter) {

    //alert(counter);
    //alert("agya");
    var productID = document.getElementById("invoice_product_id" + counter).value;
    //alert("proID = " + productID);
    var customerID = document.getElementById("exist_customer_id").value;
    //alert("customID = " + customerID);
    $.ajax({

        url: '/Sale/SoldHistory/',
        data: { productId: productID, customerId: customerID },
        cache: false,
        type: 'Get',
        success: function (data) {
            //alert("Success");
            //alert(data);
            document.getElementById('soldHistory').innerHTML = data;
            if (document.getElementById("sold_history_checkbox").checked && document.getElementById('soldHistory').innerHTML != "") {
                //alert("Checked Sold History");
                jQuery.noConflict();
                $("#Sold_History_Modal").modal('show');
            }
            else {
                //alert("Unchecked Sold History");
                //jQuery.noConflict();
                //$("#Sold_History_Modal").modal('show');
            }

        },
        error: function (response) {
            alert("Error");
        }

    })
}


function outstanding_balance_function() {
    //alert("Outstanding Balance");
    var customer_id = $("#exist_customer_id").val();
    //alert(customer_id);
    var amount = $("#outstanding_amount").val();


    $.ajax({

        url: '/Customer/Paying_Outstanding_Balance/',
        data: { amount_paid: amount, id: customer_id },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert("Success");
            $("#outstanding_balance").val("£" + data);

        },
        error: function (response) {
            alert("Error");
        }

    })

    //$("#Outstanding_modal").hide();

}




function checkQuantityAvailable(quantiy, id) {

    var proID = document.getElementById('invoice_product_id' + id).value;

    $.ajax({

        url: '/Product/QuantityCheck/',
        data: { quantity: quantiy, productId: proID },
        cache: false,
        type: 'Get',
        success: function (data) {


            if (data == "False") {
                swal({
                    title: "QUANTITY EXCEEDED",
                    text: "You don't have Enough Quantity",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
      function () {
      });
                //
                document.getElementById('invoice_quantity' + id).value = "0";
            }

        },
        error: function (response) {

        }


    })
}






function purchase_number_empty() {
    alert("dsadas");
    $("#purchase_number").val("1231313");
}

function rowcounterPlus() {

    var number = document.getElementById('rowCounterrr').value;

    document.getElementById('rowCounterrr').value = +number + +1;

    //alert("ADD" + document.getElementById('rowCounterrr').value)

}
function rowcounterMinus() {
    var number = document.getElementById('rowCounterrr').value;

    document.getElementById('rowCounterrr').value = number - 1;
    //alert("CROSS" + document.getElementById('rowCounterrr').value)
}