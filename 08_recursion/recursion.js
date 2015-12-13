function factorialIterative(num){
  var rtn = 1;
  for (var i = 1; i <= num;i++)
    rtn *= i;
  return rtn;
}

function factorial(num){
  if (num === 0)
    return 1;
  return num * factorial(num - 1);
}

function fib(num){
  if (num < 2)
    return 1;
  return fib(num -2) + fib(num -1);
}

function type(t){
  var _t = Object.prototype.toString.call(t);
  return _t.split(" ")[1].replace("]","");
}

function stringify(t){
  var _t = type(t);
  if (_t !== 'Object' && _t !== 'Array')
    if (t === null) return "null";
    else if (t === undefined) return "undefined";
    else if (_t === 'String') return '"' + t + '"';
    else return t.toString();
  else if (_t=== 'Array') {
    var arr = [];
    for (var i in t){
      arr.push(stringify(t[i]));
    }
    return "[" + arr.join(",") + "]";
  }
  else if (_t === 'Object'){
    var arr = [];
    for (var i in t){
      arr.push('"' + i + '"' + ": " + stringify(t[i]));
    }
    return "{" + arr.join(",") + "}";
  }
}
