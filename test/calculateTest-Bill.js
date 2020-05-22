describe("The calculate bill factory function", function() {
    it ("should be able to set the call cost on calculate bill", function () {

        let calculateBill = calculatingBill();
  
        calculateBill.setCalcCriticalLevel(10);
        calculateBill.setCalcCallCost(1.85); 
       assert.equal(1.85, calculateBill.getCalcCallCost());
  
       let calculateBill2 = calculatingBill();
  
       calculateBill2.setCalcCallCost(2.55); 
       assert.equal(2.55, calculateBill2.getCalcCallCost());
      });

      it ("should be able to set the sms cost on calculate bill", function () {
        let calculateBill = calculatingBill();
  

        calculateBill.setCalcSmsCost(0.85); 
       assert.equal(0.85, calculateBill.getCalcSmsCost());
  
       let calculateBill2 = calculatingBill();

       calculateBill2.setCalcSmsCost(0.55); 
       assert.equal(0.55, calculateBill2.getCalcSmsCost())
      });

});