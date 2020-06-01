
const radioBtns = document.querySelector(".billItemTypeRadio");

const radioBillAddBtn = document.querySelector(".button");

var radioTotalBill = document.querySelector(".totalTwo");

const radioCallTotalElement = document.querySelector(".callTotalTwo");

const radioCallTotalSpanElement = document.querySelector(".callTotalTwo");

const radioSmsTotalElement = document.querySelector(".smsTotalTwo");

const radioSmsTotalSpanElement = document.querySelector(".smsTotalTwo");

const radioTotalBillElement = document.querySelector(".totalTwo");

const radioTotalBillSpanElement = document.querySelector(".orange");


var radioCallTotal = 0;

var radioSmsTotal = 0;

radioInstance = RadioFactoryBilll();




function radioTotalBillz() {
    
var grandTotal = radioInstance.radioTotalBilling();



radioTotalBillSpanElement.classList.remove("warning");
radioTotalBillSpanElement.classList.remove("danger");


 if (grandTotal >= 50.00){
   radioTotalBillSpanElement.classList.remove("warning");
    radioTotalBillSpanElement.classList.add("danger");  
}
else if (grandTotal >= 30.00){
   radioTotalBillSpanElement.classList.remove("danger");
      radioTotalBillSpanElement.classList.add("warning");   
  }
}

radioBillAddBtn.addEventListener("click", radioTotalBillz)