class Validator {

  validate (text){
    if(text !== ''){
      return true;
    }
    return false;
  }

}

module.exports=Validator;
