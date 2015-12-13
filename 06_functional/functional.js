// 06_Functional
function doubler(num){
  return num * 2;
}

function map(arr, fn){
  var rtn = [];
  for(var i in arr)
    rtn.push(fn(arr[i]));
  return rtn;
}

function filter(arr, fn){
  var rtn = [];
  for (var i in arr){
    if (fn(arr[i]))
      rtn.push(arr[i]);
  }
  return rtn;
}

function contains(arr, num){
  for(var i in arr){
    if (arr[i]===num)
      return true;
  }
  return false;
}

function countWords(str){
  return str.split(" ").length;
}

function countWordsInReduce(num,str){
  return num + countWords(str);
}

function reduce(arr, start, fn){
  var rtn = start;
  for(var i in arr)
    rtn = fn(rtn, arr[i]);
  return rtn;
}

function sum(arr){
  return reduce(arr, 0, function(a,b){
    return a + b;
  });
}

function every(arr, fn){
  for (var i in arr)
    if (!fn(arr[i]))
      return false
  return true;

}

function any(arr, fn){
  for (var i in arr)
    if (fn(arr[i]))
      return true;
  return false;
}
