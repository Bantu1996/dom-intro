
const billTypeTextField = document.querySelector(".billTypeText");

const addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalElement = document.querySelector(".callTotalOne");

var smsTotalElement = document.querySelector(".smsTotalOne");

var totalCostElement = document.querySelector(".totalOne");

const totalCostSpanElement = document.querySelector(".red");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

textInstance = TextFactoryBill();

function textBillingz() {

    var allTotal = textInstance.textBillTotal();
totalCostSpanElement.classList.remove("danger");
totalCostSpanElement.classList.remove("warning");

if (allTotal >= 50){

totalCostSpanElement.classList.add("danger");
}
else if (allTotal >= 30){
totalCostSpanElement.classList.add("warning");
}

}


addToBillBtn.addEventListener("click", textBillingz)

