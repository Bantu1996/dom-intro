
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


function billTypeTotal() {
    const checkedSettingsRadioButtons = document.querySelector(".billItemTypeWithSettings:checked");
    if (checkedSettingsRadioButtons){
     var billItemTypeWithSettings = checkedSettingsRadioButtons.value
    
if (billItemTypeWithSettings === "call") {
    settingCallTotal += callCostSetting;
}

 else if (billItemTypeWithSettings === "sms") {
    settingSmsTotal += smsCostSetting;
}

    settingCallTotalElement.innerHTML = settingCallTotal.toFixed(2);
    settingSmsTotalElement.innerHTML = settingSmsTotal.toFixed(2);
    var settingTotalBill = settingCallTotal + settingSmsTotal;
    settingTotalBillElement.innerHTML = settingTotalBill;
}
return settingTotalBill;
}
function selectingSettingBillColor(settingTotalBill) {

var currentSettingTotalBill = Number(settingTotalBill);


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
    settingTotalBill = billTypeTotal();
    selectingSettingBillColor(settingTotalBill);

}
function checkedSettingBillBtn() {
    
    callCostSetting =  Number(callCostSettings.value);
    smsCostSetting =  Number(smsCostSettings.value);
    warningLevelSetting = Number(warningLevelSettings.value);
    criticalLevelSetting = Number(criticalLevelSettings.value);

}
addBillTypeButton.addEventListener("click", checkedBillTypeBtn)

updateSettingsBtn.addEventListener("click", checkedSettingBillBtn)