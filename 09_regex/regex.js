function findACount(str){
    var res = str.match(/a/ig);
    return res ? res.length : 0;
}

function areaCodeFinder(str){
    var res =  str.replace(/[()]/g, "").match(/^\d{3}/);
    return parseInt(res[0]);
}

function adjustUrlParameter(url, param){
   if (url.indexOf("?") > -1){
       var p = param.split("=")[0];
       var re = new RegExp(p + "=.+");
       if (url.match(re)){
           url = url.replace(re, param);
       }
       else url = url + "&" + param;
   }
   else url = url + "?" + param;
   return url;
    
}

function stringPlusPlus(str){
    var s = str.match(/^[a-z]*/i)[0];
    var n = str.replace(new RegExp(s), "")
    if (n){
        var num = parseInt(n) + 1;
        var digits = str.match(/\d+/)[0].length; //Find out how many number places
        return s + (Array(digits - num.toString().length + 1).join("0") + num) //subtract total spaces from number to get n zeros for padding
    }
    else return s + 1;
}