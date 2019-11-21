const Validator = require("../Validator");
const assert = require('assert');

describe("Validator Tests ", function(){
  it("Returns false when empty string @unitTest", function(){
      var myValidator = new Validator();
      assert(myValidator.validate('')===false);
  })




    it("Returns false when undefined @unitTest", function(){
        var myValidator = new Validator();
        assert(myValidator.validate(undefined)===true);
    })

    it("Returns false when null @unitTest", function(){
        var myValidator = new Validator();
        assert(myValidator.validate(null)===true);
    })

    it("Returns true when passing string @unitTest", function(){
        var myValidator = new Validator();
        assert(myValidator.validate('abc')===true);
    })

    it("Returns true when passing number @unitTest", function(){
        var myValidator = new Validator();
        assert(myValidator.validate(3434)===true);
    })

})
