
const billTypeTextField = document.querySelector(".billTypeText");

const addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalElement = document.querySelector(".callTotalOne");

var smsTotalElement = document.querySelector(".smsTotalOne");

var totalCostElement = document.querySelector(".totalOne");

const totalCostSpanElement = document.querySelector(".red");


function textBillTotal(billTypeText){
var billingType = billTypeTextField.value;
var callsTotal = 0;
var smsTotal = 0;
if (billingType === "call"){
callsTotal += 2.75;
}
else if (billingType === "sms"){
smsTotal += 0.75;
}

//MY Math Section

callsTotalElement.innerHTML = callsTotal.toFixed(2);
smsTotalElement.innerHTML = smsTotal.toFixed(2);
var totalCost = callsTotal + smsTotal;
totalCostElement.innerHTML = totalCost.toFixed(2);

} 

function stylingTotalCostColor(totalCost) {

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


function addToBillBtnClicked(){

var billTypeText = billTypeTextField.value;
 totalCost = textBillTotal(billTypeText);

stylingTotalCostColor(totalCost)

}

addToBillBtn.addEventListener("click", addToBillBtnClicked)

