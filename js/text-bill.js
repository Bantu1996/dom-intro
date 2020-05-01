
const billTypeTextField = document.querySelector(".billTypeText");

const addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalElement = document.querySelector(".callTotalOne");

var smsTotalElement = document.querySelector(".smsTotalOne");

var totalCostElement = document.querySelector(".totalOne");

const totalCostSpanElement = document.querySelector(".red");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function textBillTotal(){
var billingType = billTypeTextField.value;

if (billingType === "call"){
callsTotal += 2.75;
}
else if (billingType === "sms"){
smsTotal += 0.75;
}

//MY Math Section
stylingTotalCostColor();
callsTotalElement.innerHTML = callsTotal.toFixed(2);
smsTotalElement.innerHTML = smsTotal.toFixed(2);
 totalCost = callsTotal + smsTotal;
totalCostElement.innerHTML = totalCost.toFixed(2);


} 

function stylingTotalCostColor() {

const currentTotalCost = Number(totalCost);
totalCostSpanElement.classList.remove("danger");
totalCostSpanElement.classList.remove("warning");

if (currentTotalCost >= 50){

totalCostSpanElement.classList.add("danger");
}
else if (currentTotalCost >= 30 && currentTotalCost <=50){
totalCostSpanElement.classList.add("warning");
}

}


/*function addToBillBtnClicked(){

var billTypeText = billTypeTextField.value;
 totalCost = textBillTotal();

stylingTotalCostColor()

}*/

addToBillBtn.addEventListener("click", textBillTotal )

