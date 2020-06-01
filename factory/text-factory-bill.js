theTextCallCost = 0;
theTextSmsCost = 0;

function TextFactoryBill() {

   

    function textBillTotal(){
        var billingType = billTypeTextField.value;
        
        if (billingType === "call"){
        callsTotal += 2.75;
        }
        else if (billingType === "sms"){
        smsTotal += 0.75;
        }
        
        callsTotalElement.innerHTML = callsTotal.toFixed(2);
        smsTotalElement.innerHTML = smsTotal.toFixed(2);
         totalCost = callsTotal + smsTotal;
        totalCostElement.innerHTML = totalCost.toFixed(2);
        
        return totalCost;
        } 
        
    function setTextCallCost(callCost) {
        theTextCallCost += callCost;
    }
    function getTextTotalCallCost() {
        return theTextCallCost;
    }
    function setTextSmsCost(smsCost) {
        theTextSmsCost += smsCost;
    }
    function getTextTotalSmsCost() {
        return theTextSmsCost;
    }
return {
    setTextCallCost,
    getTextTotalCallCost,
    setTextSmsCost,
    getTextTotalSmsCost,
    textBillTotal
}
}