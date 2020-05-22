
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

var settingsInstance = BillWithSettings();


function checkedSettingBillBtn() {
    /*Number(callCostSettings.value);
   Number(smsCostSettings.value);
   Number(warningLevelSettings.value);
   Number(criticalLevelSettings.value);
selectingSettingBillColor();*/
alert(settingsInstance);
}



function billTypeTotal() {
    const checkedSettingsRadioButtons = document.querySelector(".billItemTypeWithSettings:checked");
    if (checkedSettingsRadioButtons) {
     var billItemTypeWithSettings = checkedSettingsRadioButtons.value



    /*settingCallTotalElement.innerHTML = settingCallTotal.toFixed(2);
    settingSmsTotalElement.innerHTML = settingSmsTotal.toFixed(2);
    settingTotalBill = settingCallTotal + settingSmsTotal;
    settingTotalBillElement.innerHTML = settingTotalBill.toFixed(2);*/

}

}


function selectingSettingBillColor() {



    settingTotalBillSpanElement.classList.remove("warning");
    settingTotalBillSpanElement.classList.remove("danger");


}




addBillTypeButton.addEventListener("click",billTypeTotal)

updateSettingsBtn.addEventListener("click", checkedSettingBillBtn)