## css变量
普通变量名加--来使用自定义的css变量

## css函数
### calc函数
calc函数是css函数中可以实现计算的函数，可以利用该函数对实现动态布局
``` css
.box{
    width:calc(100%-40px);
    padding:20px;
}
```
也可以保持俩侧外边距相同
```
.box{
    width:calc(100%-80px);
    left:40px;
}
```
但是calc的嵌套是无作用的，最内层的calc仅仅相当于一个()
```
.box{
    --widthA: 100px;
    --widthB: calc(var(--widthA) / 2);
    --widthC: calc(var(--widthB) / 2);
    width: var(--widthC);
}
```
### clamp函数
clamp函数的作用是将一个变量限制在最大值和最小值之间，它有一个首选值
接受三个参数：最小值，首选值，最大值

### translate函数
水平移动

### min函数和max函数
获取最小值和最大值

### var函数和attr函数
var()函数必须要获取内联属性, 即必须要是在style中的属性，var函数可以接受第二个参数默认值
attr()函数需要获取的标签中的属性, 也可以是自定义属性, 但是必须要是在标签中的属性