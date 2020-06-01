describe("The text bill on factory function", function() {
    describe("enter value", function() {

        it("should be able enter call only", function() {
            let textBill = TextFactoryBill();

        textBill.setTextCallCost(2.75);

        assert.equal(2.75, textBill.getTextTotalCallCost());
        
        })
        it("should be able enter sms only", function() {
            let textBill =TextFactoryBill();

        textBill.setTextSmsCost(0.75);

        assert.equal(0.75, textBill.getTextTotalSmsCost());
    })
})
})