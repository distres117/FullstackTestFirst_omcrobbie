// Functions.js
function concat_string(){
  var args = Array.prototype.slice.call(arguments);
  return args.filter(i=>i!==" ").join(" ");
}

function yourFunctionRunner(){
  var rtn = "";
  for(var i in arguments)
    rtn+=arguments[i].call();
  return rtn;
}

function makeAdder(num){
  return function(newNum){
    return newNum + num;
  }
}

function once(func){
  var runs = 0;
  return function(){
    runs++;
    if (runs < 2) func();
  }
}

function createObjectWithTwoClosures(){
  var val = 0;
  return {
    oneIncrementer: function(){
      val+=1;
    },
    tensIncrementer: function(){
      val+=10;
    },
    getValue: function(){
      return val;
    }
  }
}
