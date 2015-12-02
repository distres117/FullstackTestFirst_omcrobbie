function RPNCalculator() {
  this.val = 0;
  this.stack = [];
  this.push = function(num){
    this.stack.push(num);
  };
  this.spliceTwo = function(){
    if (this.stack.length >= 2){
      var rtn = this.stack.splice(this.stack.length -2);
      return rtn;
    } else {
      throw "rpnCalculator is empty";
    }
  };
}
//Isn't there a less-verbose way of doing this?
RPNCalculator.prototype.plus = function(){
  var rtn = this.spliceTwo().reduce((a,b)=> a+b);
  this.val = rtn;
  this.push(rtn);
};
RPNCalculator.prototype.minus = function(){
  var rtn = this.spliceTwo().reduce((a,b)=> a-b);
  this.val = rtn;
  this.push(rtn);
};
RPNCalculator.prototype.times = function(){
  var rtn = this.spliceTwo().reduce((a,b)=> a*b);
  this.val = rtn;
  this.push(rtn);
};
RPNCalculator.prototype.divide = function(){
  var rtn = this.spliceTwo().reduce((a,b)=> a/b);
  this.val = rtn;
  this.push(rtn);
};
RPNCalculator.prototype.value = function(){
  return this.val;
};
