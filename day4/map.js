Array.prototype.newMap = function(fn,thisArg){
    if (typeof fn !== 'function'){
        throw Error("error");
    }
    var newArr = [];
    var currentArr = this;
     for (var i=0;i<currentArr.length;i++){
        newArr.push(fn.call(thisArg,currentArr[i],i,currentArr))
     }
        return newArr;

}