function createCalculator(){
  return {
    val: 0,
    value: function(){
      return this.val;
    },
    add: function(num){
      this.val += num;
    },
    subtract: function(num){
      this.val -= num;
    }
  };
}
