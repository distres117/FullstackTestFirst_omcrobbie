function setPropertiesOnObjLiteral(obj){
  obj.x = 7;
  obj['y'] = 8;
  obj.onePlus = function(num){
    return num + 1;
  };

}

function setPropertiesOnArrayObj(arrObj){
  arrObj.hello = function(){
    return 'Hello!';
  };
  arrObj['full'] = 'stack';
  arrObj.push(5);
  arrObj.twoTimes = function(num){
    return num * 2;
  };
}

function setPropertiesOnFunctionObj(funcObj){
  funcObj();
  funcObj.year = 2015;
  funcObj.divideByTwo = function(num){
    return num /2;
  };
  funcObj.prototype.helloWorld = function(){
    return "Hello World";
  };
}
