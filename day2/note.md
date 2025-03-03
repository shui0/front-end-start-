# day2笔记css与css预处理器sass
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

## 命名规范
### BEM命名规范
Bem 是块（block）、元素（element）、修饰符（modifier）的简写

块与元素之间使用--分隔

元素与修饰符之间用双下划线__分隔

俩个修饰符用单下划线_分隔

俩个块用-分隔

### BEM命名优势
便于维护，便于开发
防止后期找不到某变量，或者因为符号不同导致代码不生效

## sass
### 什么是sass
sass是css的辅助工具，在css的基础上进行额外的功能拓展
scss有俩种基础语法:一种以scss后缀，另一种以sass后缀。这里主要介绍scss后缀的语法

### sass基础使用
sass转为css文件
```
sass input.scss output.css
```
监视单个文件，自动编译
```
sass --watch input.scss:output.css
```
监视整个文件夹：
```
sass --watch sass目录:sass目录
```

### sass语法
#### 嵌套规则
sass允许将一套css样式嵌套到另一套样式中
```
#main p {
  color: #00ff00;
  width: 97%;

  .redbox {
    background-color: #ff0000;
    color: #000000;
  }
}
```

#### 父选择器&
直接使用&代表嵌套在外层的父选择器

#### 属性嵌套
在同时需要font-family、font-size、font-weight的情况下，出现了多次重复输入font,我们可以使用属性嵌套解决这个问题
```
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```