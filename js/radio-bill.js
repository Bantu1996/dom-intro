
var radioBtns = document.querySelector(".billItemTypeRadio");

const radioBillAddBtn = document.querySelector(".button");

var radioTotalBill = document.querySelector(".totalTwo");

const radioCallTotalElement = document.querySelector(".callTotalTwo");

const radioCallTotalSpanElement = document.querySelector(".callTotalTwo");

const radioSmsTotalElement = document.querySelector(".smsTotalTwo");

const radioSmsTotalSpanElement = document.querySelector(".smsTotalTwo");

const radioTotalBillElement = document.querySelector(".totalTwo");

const radioTotalBillSpanElement = document.querySelector(".orange");




function radioTotalBilling(billItemTypeRadio) {
    
    const checkedRadioBtns = document.querySelector(".billItemTypeRadio:checked")
    if (checkedRadioBtns){
     var  billItemTypeRadio = checkedRadioBtns.value
   
var billingItems = billItemTypeRadio;

    var radioCallTotal = 34.50;

if (billingItems === "call") {

    radioCallTotal += 2.75;
}
else if (billingItems === "sms") {

    radioSmsTotal += 0;
}


    var radioSmsTotal = 3.00;

if (billingItems === "sms") {

    radioSmsTotal += 0.75;
}
else if (billingItems === "call") {

    radioCallTotal += 0;
}

    
    radioCallTotalElement.innerHTML = radioCallTotal.toFixed(2);
    radioSmsTotalElement.innerHTML = radioSmsTotal.toFixed(2);
    var radioTotalBill = radioCallTotal + radioSmsTotal;
    radioTotalBillElement.innerHTML = radioTotalBill.toFixed(2);
    }

return radioTotalBill
}

function selectingRadioBillColor(radioTotalBill) {

const currentRadioTotalBill = Number(radioTotalBill);
radioTotalBillSpanElement.classList.remove("danger");
radioTotalBillSpanElement.classList.remove("warning");
if (currentRadioTotalBill >= 50){

    radioTotalBillSpanElement.classList.add("danger");   
}
else if (currentRadioTotalBill >= 30 && currentRadioTotalBill <= 50){

    radioTotalBillSpanElement.classList.add("warning");  
}
}


function checkedRadioBtn() {
    var billItemTypeRadio = radioBtns.value;
    
   radioTotalBill = radioTotalBilling(billItemTypeRadio);
   selectingRadioBillColor(radioTotalBill)
  
}

radioBillAddBtn.addEventListener("click", checkedRadioBtn)