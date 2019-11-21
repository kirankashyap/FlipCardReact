class Validator {

  validate (text){
    if(text && text !== ''){
      return true;
    }
    return false;
  }

}

export default Validator;
