theCalcCallCost = 0;
theCalcSmsCost = 0;
function CalculatingBill() {
   
function totalPhoneBill(billString) {

    var billTotal = 0;
    
var string = billString.split(',')
for (var i = 0; i < string.length; i++) {

 var billItem = string[i].trim();
 if (billItem === "call") {
billTotal += 2.75;
 }    
 else if (billItem === "sms") {
billTotal += 0.75;
 }
}
return billTotal
}
function setCalcCallCost(callCost) {
theCalcCallCost = callCost;
}
function getCalcCallCost() {
    return theCalcCallCost ;
    }

    function setCalcSmsCost(smsCost) {
        theCalcSmsCost = smsCost;
        }
        function getCalcSmsCost() {
            return theCalcSmsCost ;
            }

return {
    totalPhoneBill,
    setCalcCallCost,
    getCalcCallCost,
    setCalcSmsCost,
    getCalcSmsCost
    
}
}

