# 数组遍历

> 要遍历一个数组，可以使用 for 循环的方式，也可以使用 Array 提供的迭代方法，像 forEach() 和 map() 都可以实现遍历。那么这些方法分别在什么情况下使用呢，它之间是否存在速度上的差异呢？

> 参考资料：[whicj type ofloop is fastest in JavaScript](https://javascript.plainenglish.io/which-type-of-loop-is-fastest-in-javascript-ec834a0f21b9) ，[掘金译文](https://juejin.cn/post/6930973929452339213)

<br>

### 结论

for/for（倒序）是最快的

foreach 比较快，能够控制内容

for ... of 和 for ... in 都会比较慢



### For 循环（正序和倒序）

for 循环作为基础循环我们是非常熟悉的，在任何地方都可以使用。因为倒序只要计算一次 `array.length` 所以速度会比正序快一些。



### forEach 方法

这是 Array 提供的一个方法



### for...of 和 for...in

for ... of 和 for...in 它们之间的区别在于它们迭代的内容，