describe("The calculate bill factory function", function() {
  describe("enter the bill string", function() {


  
    it ("should be able to enter a string of calls on calculate bill", function () {

        let calculateBill = CalculatingBill();
  
        
        calculateBill.setCalcCallCost(2.75); 
        
        assert.equal(calculateBill.getCalcCallCost('call, call, call, call'), 2.75);
  
      });
      it ("should be able to enter a string of sms on calculate bill", function () {

        let calculateBill = CalculatingBill();
  
        
        calculateBill.setCalcSmsCost(0.75); 
        
        assert.equal(calculateBill.getCalcSmsCost('sms, sms, sms, sms'), 0.75);
    });
      });
    });