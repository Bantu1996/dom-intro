describe("The radio bill factory function", function() {
describe("add value", function() {


it("should be able to add call cost", function() {

    let radioBill = RadioFactoryBilll();

    radioBill.setRadioCallCost(2.75);
    radioBill.makeCall();


    assert.equal(2.75, radioBill.getRadioCallTotalCost())
})
it("should be able to add sms cost", function() {

    let radioBill = RadioFactoryBilll();

    radioBill.setRadioSmsCost(0.75);
    radioBill.sendSms();

    assert.equal(0.75, radioBill.getRadioSmsTotalCost())
})
})
})