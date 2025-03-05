// 二维转一维
let array = [[0, 1], [2, 3], [4, 5]];
let newArray = array.reduce((prev,cur)=>{
    return prev.concat(cur);
},[]);
console.log(newArray);

//多维转一维
let array1 = [[0, 1], [[1,2,3], 3], [4, 5]];
function fn(array){
    return array.reduce((prev,cur)=>{
        return prev.concat(Array.isArray(cur)? fn(cur): cur);
},[]);
}
console.log(fn(array1));