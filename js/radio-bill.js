
const radioBtns = document.querySelector(".billItemTypeRadio");

const radioBillAddBtn = document.querySelector(".button");

var radioTotalBill = document.querySelector(".totalTwo");

const radioCallTotalElement = document.querySelector(".callTotalTwo");

const radioCallTotalSpanElement = document.querySelector(".callTotalTwo");

const radioSmsTotalElement = document.querySelector(".smsTotalTwo");

const radioSmsTotalSpanElement = document.querySelector(".smsTotalTwo");

const radioTotalBillElement = document.querySelector(".totalTwo");

const radioTotalBillSpanElement = document.querySelector(".orange");


var radioCallTotal = 0.00;

var radioSmsTotal = 0.00;

function radioTotalBilling() {
    
    const checkedRadioBtns = document.querySelector(".billItemTypeRadio:checked")
    if (checkedRadioBtns){
     var  billItemTypeRadio = checkedRadioBtns.value
   
var billingItems = billItemTypeRadio;

  

if (billingItems === "call") {

    radioCallTotal += 2.75;
}
else if (billingItems === "sms") {

    radioSmsTotal += 0.75;
}

//selectingRadioBillColor();
    radioCallTotalElement.innerHTML = radioCallTotal.toFixed(2);
    radioSmsTotalElement.innerHTML = radioSmsTotal.toFixed(2);
    radioTotalBill = radioCallTotal + radioSmsTotal;
    radioTotalBillElement.innerHTML = radioTotalBill.toFixed(2);
    }

return radioTotalBill
}


// var warningLevel = 30.00;
// var criticalLevel = 50.00;

function selectingRadioBillColor() {

//var currentRadioTotalBill = Number(radioTotalBill);

radioTotalBillSpanElement.classList.remove("warning");
radioTotalBillSpanElement.classList.remove("danger");


if (radioTotalBill >= warningLevel && radioTotalBill <= criticalLevel){
   radioTotalBillSpanElement.classList.remove("danger");
      radioTotalBillSpanElement.classList.add("warning");   
  }
else if (radioTotalBill >= criticalLevel){
   radioTotalBillSpanElement.classList.remove("warning");
    radioTotalBillSpanElement.classList.add("danger");  
}
}

radioBillAddBtn.addEventListener("click", radioTotalBilling)