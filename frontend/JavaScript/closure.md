# 闭包

> 闭包实际上是一个返回函数的函数。

> 参考资料：[学习JavaScript闭包](https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)，[闭包是什么](https://zhuanlan.zhihu.com/p/22486908)

<br>

### 变量作用域

变量的作用域无非就是两种：全局变量和局部变量。在一个函数内部可以读取到全局变量，但是在外部是没有办法直接读取到函数中的局部变量的。

```js
var n = 999;
function f1() {
	alert(n);
}
f() // 999
```

```js
function f1() {
    var n = 999;
}
alert(n); // error;
```



### 从外部获取局部变量

如果需要在外部获取函数内部的变量，但是这在正常情况下是办不到的，所以需要在函数内部再定义一个函数的方法才能够实现。

```
function f1() {
	var n = 999;
	function f2() {
		alert(n);
	}
	return f2;
}
```

在 f1() 中 又定义了一个 f2() ，f1() 中的局部变量对 f2() 来讲是可见的。所以只要把 f2() 作为返回值就可以在 f1 外部读取它的内部变量了。



### 闭包的作用

- 可以取得函数内部的值
- 让这些变量始终保持在内存中