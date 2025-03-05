Array.prototype.newReduce = function (fn, initialValue) {
    if (typeof fn !== 'function') {
        throw Error("error");
    }
    const array = Object(this);
    let accumulator;
    let length = array.length;
    let startIndex = -1;
    if (arguments.length >= 2) {
        accumulator = initialValue;
    }
    else {
        if (length === 0) {
            throw Error("error");
        }
        let found = false;
        while (startIndex < len && !found) {
            if (startIndex in array) {
                accumulator = array[startIndex];
                found = true;
            }
            startIndex++;
        }
        if (startIndex === -1){
            throw Error("error");
        }

        for (let i = startIndex;i<length;i++){
            if (i in array){
                accumulator = fn.call(undefined,accumulator,array[i],i,array);
            }
        }


    }
    return accumulator
}