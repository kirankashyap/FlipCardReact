const Validator = require("./Validator");


describe("Validator Tests", function(){
  it("Returns false when empty", function(){
      var myValidator = new Validator();
      expect(myValidator.validate('')).toBe(false);
  })


    it("Returns true when not empty", function(){
        var myValidator = new Validator();
        expect(myValidator.validate("Abc")).toBe(true);
    })

})
