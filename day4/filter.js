Array.prototype.newFilter = function (fn, thisArg) {
    if (typeof fn !== 'function') {
        throw Error("error");
    }
    var newArr = [];
    var currentArr = this;
    for (var i = 0; i < currentArr.length; i++) {
        if (i in currentArr) { // 确保当前索引存在于数组中
            res = fn.call(thisArg, currentArr[i], i, currentArr);
            if (res) {
                newArr.push(this[i])
            }
        }
    }
    return newArr;

}