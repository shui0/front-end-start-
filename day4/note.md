# day4 js语法
## 变量
### var
1.var在函数外声明为全局变量，在函数内声明为局部变量，作用域为整个函数

2.var关键字声明的对象属于window 对象
### let
1let作用域为所在块级作用域

2.let关键字声明的对象不属于window 对象

### 重置变量
1.同作用域下，var声明不能用来重置let声明的变量，let声明也不能重置var声明的变量。

2.同作用域下，var声明可以用来重置var声明的变量，let不能重复声明同一变量来重置变量。

### 变量提升
var可以先使用后声明，let不行

### 变量提升与TDZ
TDZ为暂时性死区，即访问了暂时无法访问的变量

例1const和let声明在后面的变量，虽然会被变量提升到最前，但并不会初始化，所以会无法访问报错。

例2函数使用未初始化的参数值
```
function foo(x = y, y = 1) {
  console.log(y)
}

foo(1) // 这不会有错误
foo(undefined, 1) // 错误 ReferenceError: y is not defined
foo() // 错误 ReferenceError: y is not defined
```
### const
1.const声明一个常量，也可以声明一个数组或对象

2.const声明的数组和对象可以修改，但是不能通过直接赋值的方式修改

3.const和let相同为块级作用域,声明时必须初始化，因为不能直接赋值

## 深拷贝
### 1.JSON.parse(JSON.stringify(obj))
将对象转为字符串后再转换为对象

优点:简单快捷

缺点:取不到值为 undefined 的 key；如果对象里有函数，函数无法被拷贝下来；无法拷贝copyObj对象原型链上的属性和方法；对象转变为 date 字符串

### 2.递归克隆
```
function deepClone(src,cache = []){
    for (let i =0;i<cache.length;i++){
        if (src === cache[i].src) return cache[i].dist;
    }
    let type = Object.prototype.toString.call(src).slice(8,-1);
    let dist = null;
    if (['Number','String','Boolean','Null','Undefined'].includes(type)){
        return src;
    }
    else if(type === 'Array') dist = [];
    else if(type === 'Object') dist = {};
    else if(type === 'Date') dist = new Date(src);
    else if(type === 'RegExp') dist = new RegExp(src.sorce,src.flags);
    else if(type === 'Function') dist = src.bind(this);
    cache.push({src:src,dist:dist});
    for(let key in src){
        // 只克隆自有属性
        // if (src.hasOwnProperty(key)){
        //     dist[key] = deepClone(src[key]);
        // }
        dist[key] = deepClone(src[key],cache);
    }
    return dist;

}
```

### jQuery.extend()方法
```
$.extend(deepCopy, target, object1, [objectN])
//第一个参数为true,就是深拷贝.第二个参数为object类型

let a = {
    a: 1,
    b: { d:8},
    c: [1, 2, 3]
};
let b = $.extend(true, {}, a);
console.log(a.b.d === b.b.d); // false
```

## js自动添加 ';'
如果一行js语句后没有分号，首先判断该行语句能否和下一行语句一同解释

A.如果能解释则不添加';'
B.如果不能解释则添加';'