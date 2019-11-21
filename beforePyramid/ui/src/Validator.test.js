import Validator from "./Validator";
const assert = require('assert');

describe("UI Validator Tests", function(){
  it("Returns false when empty @unitTest", function(){
      var myValidator = new Validator();
      assert(myValidator.validate('')===false);
  })


    it("Returns true when not empty @unitTest", function(){
        var myValidator = new Validator();
        assert(myValidator.validate('abc')===true);
    })

})
