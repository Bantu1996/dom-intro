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
    }
var settingbillItems = billItemTypeWithSettings.split(" ");
for (var i=0;i<settingbillItems.length;i++) {
    var settingbillItem = settingbillItems[i].trim();
    var settingCallTotal = 34.00;
if (settingbillItem === "call") {
    settingCallTotal += 2.55;
}
else if (settingbillItem === "sms") {
    settingSmsTotal += 0;
}
} 
for (var i=0;i<settingbillItems.length;i++) {
    var settingbillItem = settingbillItems[i];
    var settingSmsTotal = 7.35;
if (settingbillItem === "sms") {
    settingSmsTotal += 0.65;
}
else if (settingbillItem === "call") {
    settingCallTotal += 0;
}
}
    settingCallTotalElement.innerHTML = settingCallTotal.toFixed(2);
    settingSmsTotalElement.innerHTML = settingSmsTotal.toFixed(2);
    var settingTotalBill = settingCallTotal + settingSmsTotal;
    settingTotalBillElement.innerHTML = settingTotalBill.toFixed(2);
return settingTotalBill;
}
function selectingSettingBillColor(settingTotalBill) {
const currentSettingTotalBill = Number(settingTotalBill);
settingTotalBillSpanElement.classList.remove("danger");
settingTotalBillSpanElement.classList.remove("warning");
if (currentSettingTotalBill >= 65){
    settingTotalBillSpanElement.classList.add("danger");   
}
else if (currentSettingTotalBill >= 30 && currentSettingTotalBill <= 65){

    settingTotalBillSpanElement.classList.add("warning");  
}
}

function updatingSettings() {
  
    callCostSettings =  Number(settingCallTotal);
    smsCostSettings =  Number(smsCostSetting);
    warningLevelSettings =  Number(warningLevelSetting);
    criticalLevelSettings = Number(criticalLevelSetting.value);
}


function checkedBillTypeBtn() {
    var billItemTypeWithSettings = settingsRadioButtons.value;
 settingTotalBill = billTypeTotal(billItemTypeWithSettings);
   settingTotalBillElement.innerHTML = settingTotalBill;
   selectingSettingBillColor(settingTotalBill)
}

function checkedSettingBillBtn() {
 // settingTotalBill = updatingSettings(currentSettingTotalBill);
alert(callCostSettings);
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
addBillTypeButton.addEventListener("click", checkedBillTypeBtn)

updateSettingsBtn.addEventListener("click", checkedSettingBillBtn)