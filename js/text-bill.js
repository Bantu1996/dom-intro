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
const callsTotalElement = document.querySelector(".callTotalOne");
const smsTotalElement = document.querySelector(".smsTotalOne");
const totalCostElement = document.querySelector(".totalOne");
const totalCostSpanElement = document.querySelector(".totalOne");



function textBillTotal(billTypeText){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.split("");
    // update the correct total
    
    
    var callsTotal = 0;
    for (var i=0;i<billTypeEntered.length;i++) {
      var billTypeEntering = billTypeEntered[i].trim();
    if (billTypeEntering = "call"){
        callsTotal += 2.75;
    }
    //else if (billTypeEntering = ""){
        
     //   smsTotal += 0;
   // }
    var smsTotal = 0;
  for (var i=0;i<billTypeEntered.length;i++) {
       var billTypeEntering = billTypeEntered[i].trim();
        if (billTypeEntering = "sms"){
        smsTotal += 0.75;
        }
        //else if (billTypeEntering = ""){
            
         //  callsTotal += 0;
       // }   
        }
   }
    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotal.toFixed(2)
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
   
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2);
    return totalCost;
} 

function stylingTotalCostColor(totalCost) {

   const currentTotalCost = Number(totalCost);
    totalCostSpanElement.classList.remove("danger");
    totalCostSpanElement.classList.remove("warning");
       //color the total based on the criteria
       if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30 && totalCost <=50){
        totalCostElement.classList.add("warning");
    }

}


//textTotalAddBtn.addEventListener('click', textBillTotal);


  function addToBillBtnClicked(){
    var billTypeText = billTypeTextField.value
const totalCost = textBillTotal(billTypeText);
totalCostElement.innerHTML = totalCost;
stylingTotalCostColor(totalCost)
   // alert(billTypeText);
 }

 addToBillBtn.addEventListener("click", addToBillBtnClicked)