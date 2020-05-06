
const settingsRadioButtons = document.querySelector(".billItemTypeWithSettings");

const addBillTypeButton = document.querySelector(".addBillTypeBtn");

const updateSettingsBtn = document.querySelector(".updateSettings");

const callCostSettings = document.querySelector(".callCostSetting");
const smsCostSettings = document.querySelector(".smsCostSetting");
const warningLevelSettings = document.querySelector(".warningLevelSetting");
const criticalLevelSettings = document.querySelector(".criticalLevelSetting");

const settingCallTotalElement = document.querySelector(".callTotalSettings");
const settingSmsTotalElement = document.querySelector(".smsTotalSettings");
const settingTotalBillElement = document.querySelector(".totalSettings");
const settingTotalBillSpanElement = document.querySelector(".blue")

var settingCallTotal = 0;
var settingSmsTotal = 0;
var settingTotalBill = 0;

var callCostSetting =  0;
var smsCostSetting =  0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;



function billTypeTotal() {
    const checkedSettingsRadioButtons = document.querySelector(".billItemTypeWithSettings:checked");
    if (checkedSettingsRadioButtons) {
     var billItemTypeWithSettings = checkedSettingsRadioButtons.value

 if (settingTotalBill < criticalLevelSetting)  { 
switch (billItemTypeWithSettings) {
    case "call":
    settingTotalBill += callCostSetting;
    settingCallTotal += callCostSetting;
    break;
    case "sms":
     settingTotalBill += smsCostSetting;
    settingSmsTotal += smsCostSetting
    break;
}
}
selectingSettingBillColor();

    settingCallTotalElement.innerHTML = settingCallTotal.toFixed(2);
    settingSmsTotalElement.innerHTML = settingSmsTotal.toFixed(2);
    settingTotalBill = settingCallTotal + settingSmsTotal;
    settingTotalBillElement.innerHTML = settingTotalBill;

}

}


function selectingSettingBillColor() {

var currentSettingTotalBill = Number(settingTotalBill);
settingTotalBillSpanElement.classList.remove("danger");
 settingTotalBillSpanElement.classList.remove("warning");
    

if (currentSettingTotalBill >= warningLevelSetting && currentSettingTotalBill < criticalLevelSetting){
    settingTotalBillSpanElement.classList.remove("danger");
    settingTotalBillSpanElement.classList.add("warning");  
}

else if (currentSettingTotalBill >= criticalLevelSetting){
   settingTotalBillSpanElement.classList.remove("warning");
    settingTotalBillSpanElement.classList.add("danger");   
}
 else {
    settingTotalBillSpanElement.classList.remove("warning");
    settingTotalBillSpanElement.classList.remove("danger");
 }

}



function checkedSettingBillBtn() {
    
    callCostSetting =  Number(callCostSettings.value);
    smsCostSetting =  Number(smsCostSettings.value);
    warningLevelSetting = Number(warningLevelSettings.value);
    criticalLevelSetting = Number(criticalLevelSettings.value);
selectingSettingBillColor();
}
addBillTypeButton.addEventListener("click",billTypeTotal)

updateSettingsBtn.addEventListener("click", checkedSettingBillBtn)