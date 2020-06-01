
const calculateBtn= document.querySelector(".calculateBtn");

const billTotalElement = document.querySelector(".billTotal");

const billStringField = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total")

var calculatInstance = CalculatingBill();

function calculateBill(){

calcStringValue = billStringField.value;

 var everythingsTotal = calculatInstance.totalPhoneBill(calcStringValue)

 billTotalSpanElement.classList.remove("danger")
    billTotalSpanElement.classList.remove("warning")
    
    if (everythingsTotal >= 30){
        
        billTotalSpanElement.classList.add("danger")
    }else if (everythingsTotal >= 20 && everythingsTotal < 30){
       
        billTotalSpanElement.classList.add("warning")
    }
billTotalSpanElement.innerHTML = everythingsTotal.toFixed(2)
    
}

calculateBtn.addEventListener("click",calculateBill);

