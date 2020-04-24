// get a reference to the sms or call radio buttons
var radioBtns = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".button");
//create a variable that will keep track of the total bill
var radioTotalBill = document.querySelector(".totalTwo");

const radioCallTotalElement = document.querySelector(".callTotalTwo");

const radioCallTotalSpanElement = document.querySelector(".callTotalTwo");

const radioSmsTotalElement = document.querySelector(".smsTotalTwo");

const radioSmsTotalSpanElement = document.querySelector(".smsTotalTwo");

const radioTotalBillElement = document.querySelector(".totalTwo");

const radioTotalBillSpanElement = document.querySelector(".orange");
//add an event listener for when the add button is pressed



function radioTotalBilling(billItemTypeRadio) {
    
    const checkedRadioBtns = document.querySelector(".billItemTypeRadio:checked")
    if (checkedRadioBtns){
     var  billItemTypeRadio = checkedRadioBtns.value
     // billItemType will be 'call' or 'sms'
    }
var billingItems = billItemTypeRadio.split(" ");

for (var i=0;i<billingItems.length;i++) {
    var billingItem = billingItems[i].trim();

    var radioCallTotal = 34.50;

if (billingItem === "call") {

    radioCallTotal += 2.75;
}
else if (billingItem === "sms") {

    radioSmsTotal += 0.75;
}
} 
for (var i=0;i<billingItems.length;i++) {
    var billingItem = billingItems[i];

    var radioSmsTotal = 3.00;

if (billingItem === "sms") {

    radioSmsTotal += 0.75;
}
else if (billingItem === "call") {

    radioCallTotal += 2.75;
}
}
    
    radioCallTotalElement.innerHTML = radioCallTotal.toFixed(2);
    radioSmsTotalElement.innerHTML = radioSmsTotal.toFixed(2);
    var radioTotalBill = radioCallTotal + radioSmsTotal;
    radioTotalBillElement.innerHTML = radioTotalBill.toFixed(2);


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
    radioTotalBillElement.innerHTML = radioTotalBill;
   radioTotalBill = radioTotalBilling(billItemTypeRadio);
   selectingRadioBillColor(radioTotalBill)
  // alert(radioTotalBill);
}

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
radioBillAddBtn.addEventListener("click", checkedRadioBtn)