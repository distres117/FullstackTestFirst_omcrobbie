function RPNCalculator() {
  this.val = 0;
  this.stack = [];
  // push is not unique to the instance, in the future, place methods like these on the prototype so all instances can share a single copy, instead of creating a copy for each instance.
  this.push = function(num){
    this.stack.push(num);
  };
  // this can also be place on the constructor functions .prototype object
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
// Create a function that looks something like this, keep in mind this is pseudo code and a quick example on how you can structure your functions for less repetition.

// RPNCalculator.prototype.spliceAndCompute = function(){
//   this.val = this.spliceTwo().reduce(func);
//   this.push(this.val);
// }

// RPNCalculator.prototype.plus = function(){
//   this.spliceAndCompute(function(a,b){
//     return a+b;
//   })
// };




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
