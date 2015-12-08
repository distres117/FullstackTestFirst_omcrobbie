function repeat(str, repeats){
  var rtn = "";
  for (var i = 0; i < repeats;i++ ){
    rtn+=str;
  }
  return rtn;
}

function sum(arr){
  if (arr.length === 0) return 0;
  return arr.reduce((a,b)=> a+b);
}

function gridGenerator(num){
  var rtn = "";
  for(var i=0;i < num; i++){
    for(var j =0;j < num; j++){
      if ( (j + i) % 2===0) rtn+="#";
      else rtn+= " ";
    }
    rtn+="\n";

  }
  return rtn;
}

function largestTriplet(num){
  for (var c= num;c > 0; c--){
    for (var b=c-1;b> 0; b--){
      for (var a=b-1;a>0; a--){
        if (Math.pow(a,2) + Math.pow(b,2)===Math.pow(c,2)){
          return [a,b,c];
        }
      }
    }
  }
}

function join(arr, delim){
  // create the "join" method without calling the Array.prototype.join method
  return arr.join(delim ? delim : "");
}

function paramify(obj){
  var arr=[];
  for(var key in obj){
    if(obj.hasOwnProperty(key))
      arr.push(key + '=' + obj[key])
  }
  return arr.sort().join("&");
}
