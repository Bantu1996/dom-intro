
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
    settingsInstance.setCallCost(Number(callCostSettings.value))
    settingsInstance.setSmsCost(Number(smsCostSettings.value))
    settingsInstance.setWarningLevel(Number(warningLevelSettings.value))
    settingsInstance.setCriticalLevel(Number(criticalLevelSettings.value))
selectingSettingBillColor()
//alert(settingsInstance);
}



function billTypeTotal() {
    const checkedSettingsRadioButtons = document.querySelector(".billItemTypeWithSettings:checked");
    if (checkedSettingsRadioButtons) {
     var billItemTypeWithSettings = checkedSettingsRadioButtons.value

        if(billItemTypeWithSettings === "call") {
            settingsInstance.makeCall() 
        }
        else if (billItemTypeWithSettings === "sms"){
            settingsInstance.sendSms()
        }

        selectingSettingBillColor()
    settingCallTotalElement.innerHTML = (settingsInstance.getTotalCallCost()).toFixed(2);
    settingSmsTotalElement.innerHTML = (settingsInstance. getTotalSmsCost()).toFixed(2);
    settingTotalBillElement.innerHTML = (settingsInstance.getTotalCost()).toFixed(2);

}

}
function selectingSettingBillColor() {

settingTotalBillSpanElement.classList.remove("warning");
 settingTotalBillSpanElement.classList.remove("danger");

    settingTotalBillSpanElement.classList.add(settingsInstance.totalClassName())
}




addBillTypeButton.addEventListener("click",billTypeTotal)

updateSettingsBtn.addEventListener("click", checkedSettingBillBtn)