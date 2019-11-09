const Validator = require("../Validator");
const assert = require('assert');

describe("Validator Tests", function(){
  it("Returns false when empty", function(){
      var myValidator = new Validator();
      assert(myValidator.validate('')===false);
  })


    it("Returns true when not empty", function(){
        var myValidator = new Validator();
        assert(myValidator.validate('abc')===true);
    })

})
