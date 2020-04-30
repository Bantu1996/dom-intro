// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const billTypeTextField = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
var callsTotalElement = document.querySelector(".callTotalOne");
//const callsTotalSpanElement = document.querySelector(".callTotalOne");
var smsTotalElement = document.querySelector(".smsTotalOne");
//const smsTotalSpanElement = document.querySelector(".smsTotalOne");
var totalCostElement = document.querySelector(".totalOne");
const totalCostSpanElement = document.querySelector(".red");


function textBillTotal(billTypeText){
// get the value entered in the billType textfield
var billingType = billTypeTextField.value;
// update the correct total
/*for (var i=0;i<billingType.length;i++) {
var billingTrim = billingType[i].trim();*/
var callsTotal = 0;
var smsTotal = 0;
if (billingType === "call"){
callsTotal += 2.75;
}
else if (billingType === "sms"){
smsTotal += 0.75;
}



/*if (billingType === "sms"){
smsTotal += 0.75;
}
else if (billingType=== "call"){
callsTotal += 0;
} */

//update the totals that is displayed on the screen.

//MY Math Section

callsTotalElement.innerHTML = callsTotal.toFixed(2);
smsTotalElement.innerHTML = smsTotal.toFixed(2);
var totalCost = callsTotal + smsTotal;
totalCostElement.innerHTML = totalCost.toFixed(2);

//return totalCost;
} 

function stylingTotalCostColor(totalCost) {

const currentTotalCost = Number(totalCost);
totalCostSpanElement.classList.remove("danger");
totalCostSpanElement.classList.remove("warning");
//color the total based on the criteria
if (currentTotalCost >= 50){
// adding the danger class will make the text red
totalCostSpanElement.classList.add("danger");
}
else if (currentTotalCost >= 30 && currentTotalCost <=50){
totalCostSpanElement.classList.add("warning");
}

}


function addToBillBtnClicked(){

var billTypeText = billTypeTextField.value;
 totalCost = textBillTotal(billTypeText);
//totalCostElement.innerHTML = totalCost;
stylingTotalCostColor(totalCost)
//alert(billTypeText);
}

addToBillBtn.addEventListener("click", addToBillBtnClicked)

