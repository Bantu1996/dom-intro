theRadioCallCost = 0;
theRadioSmsCost = 0;

function RadioFactoryBilll() {

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
        radioCallTotalElement.innerHTML = radioCallTotal.toFixed(2);
        radioSmsTotalElement.innerHTML = radioSmsTotal.toFixed(2);
        radioTotalBill = radioCallTotal + radioSmsTotal;
        radioTotalBillElement.innerHTML = radioTotalBill.toFixed(2);
        }
     
     return radioTotalBill
     }

    function setRadioCallCost(callCost) {

        theRadioCallCost += callCost;
    }

    function setRadioSmsCost(smsCost) {

        theRadioSmsCost += smsCost;
    }
    function makeCall() {
        theRadioCallCost;

    }
    function sendSms() {
        theRadioSmsCost;
    }

    function getRadioCallTotalCost() {
        return theRadioCallCost;

    }

    function getRadioSmsTotalCost() {
        return theRadioSmsCost;
    }
    function getRadioTotalCost() {
        return theRadioCallCost + theRadioSmsCost;
    }
    
function className() {

    if(grandTotal >= 50) {
        return "danger"
    }
    if(grandTotal<= 30) {
        return "warning"
    }
}
    return {
        setRadioCallCost,
        setRadioSmsCost,
        makeCall,
         getRadioTotalCost,
        getRadioCallTotalCost,
        getRadioSmsTotalCost,
        sendSms,
        className,
        radioTotalBilling
    }
}