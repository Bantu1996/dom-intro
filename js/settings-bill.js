// get a reference to the sms or call radio buttons
const settingsRadioButtons = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
//const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
//get a reference to the add button
const addBillTypeButton = document.querySelector(".addBillTypeBtn");
//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
const callCostSettings = document.querySelector(".callCostSetting");
const smsCostSettings = document.querySelector(".smsCostSetting");
const warningLevelSettings = document.querySelector(".warningLevelSetting");
const criticalLevelSettings = document.querySelector(".criticalLevelSetting");
// create a variables that will keep track of all three totals.
//const settingCallTotal = document.querySelector(".callTotalSettings");
//const settingSmsTotal = document.querySelector(".smsTotalSettings");
//const settingTotalBill = document.querySelector(".totalSettings");

const settingCallTotalElement = document.querySelector(".callTotalSettings");
const settingSmsTotalElement = document.querySelector(".smsTotalSettings");
const settingTotalBillElement = document.querySelector(".totalSettings");
const settingTotalBillSpanElement = document.querySelector(".blue")
//add an event listener for when the 'Update settings' button is pressed
//add an event listener for when the add button is pressed


function billTypeTotal(billItemTypeWithSettings) {
    const checkedSettingsRadioButtons = document.querySelector(".billItemTypeWithSettings:checked");
    if (checkedSettingsRadioButtons){
     var billItemTypeWithSettings = checkedSettingsRadioButtons.value
    
//var settingBillItems = billItemTypeWithSettings;

    var settingCallTotal = 0;
    var settingSmsTotal = 0;
if (billItemTypeWithSettings === "call") {
    settingCallTotal += callCostSetting;
}

 else if (billItemTypeWithSettings === "sms") {
    settingSmsTotal += smsCostSetting;
}


    
/*if (billItemTypeWithSettings === "sms") {
    settingSmsTotal += smsCostSetting;
}
 else if (billItemTypeWithSettings === "call") {
    settingCallTotal += callCostSetting;
}*/

    settingCallTotalElement.innerHTML = settingCallTotal.toFixed(2);
    settingSmsTotalElement.innerHTML = settingSmsTotal.toFixed(2);
    var settingTotalBill = settingCallTotal + settingSmsTotal;
    settingTotalBillElement.innerHTML = settingTotalBill;
}
return settingTotalBill;
}
function selectingSettingBillColor(settingTotalBill) {

var currentSettingTotalBill = Number(settingTotalBill);

//var  settingTotalBillSpanElement = criticalLevelSettings;
settingTotalBillSpanElement.classList.remove("danger");
settingTotalBillSpanElement.classList.remove("warning");

warningLevelSetting = warningLevelSettings.value;
criticalLevelSetting = criticalLevelSettings.value;
if (currentSettingTotalBill >= criticalLevelSetting){

    settingTotalBillSpanElement.classList.add("danger");   
}
else if (currentSettingTotalBill >= warningLevelSetting && currentSettingTotalBill <= criticalLevelSetting){
    
    settingTotalBillSpanElement.classList.add("warning");  
}
}



function checkedBillTypeBtn() {

   var billItemTypeWithSettings = settingsRadioButtons.value;
settingTotalBill = billTypeTotal(billItemTypeWithSettings);
 //  settingTotalBillElement.innerHTML = settingTotalBill;
   selectingSettingBillColor(settingTotalBill);
   
  // alert(settingTotalBill);
}

function checkedSettingBillBtn() {
 

callCostSetting =  Number(callCostSettings.value);
 smsCostSetting =  Number(smsCostSettings.value);
 warningLevelSetting = Number(warningLevelSettings.value);
 criticalLevelSetting = Number(criticalLevelSettings.value);
 //settingTotalBill = updatingSettings(settingTotalBill);
//alert(criticalLevelSetting );

}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
addBillTypeButton.addEventListener("click", checkedBillTypeBtn)

updateSettingsBtn.addEventListener("click", checkedSettingBillBtn)