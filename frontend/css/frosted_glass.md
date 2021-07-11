# 毛玻璃效果

> 毛玻璃效果是一个很常见的网页样式。和高斯模糊不同的，不是当前元素模糊，而是当前元素所在的背景后面的内容模糊。会用到 backdrop-filter 属性，在 Chrome76+ 版本浏览器开始原生支持，在 firefox70+ 中开启 layout.css.backdrop-filter.enable 也可以支持，所以希望探究一种更通用的 解决方案。

> 参考资料：[CSS backdrop-filter](https://www.zhangxinxu.com/wordpress/2019/11/css-backdrop-filter/)

<br>



### filter: blur()

filter 这个属性将模糊或者是颜色偏移等图形效果应用于元素中，可以起到一个滤镜的效果，通常用于调整图像，背景和边框的渲染。

blut() 函数则是将高斯模糊应用于输入图像，而且其中的所有子元素内容都将发生模糊。

```css
.g-filter {
   filter: blur(6px);
 }
```



<br>



### backdrop-filter

而 backdrop-filter CSS 属性可以让你为一个元素后面区域添加图形效果。为了看到效果，必须使元素或者是背景至少部分透明。而且 backdrop-filter 的兼容性有很大的问题，firefox 至今都不兼容它，就算不考虑 IE 的 PC 端业务，firefox 还是要兼容的。

```
.g-backdrop-filter {
   backdrop-filter: blur(6px);
}
```

<br>

backdrop-filter 的兼容性：

![backdrop-filter](https://segmentfault.com/img/remote/1460000040263460/view)

<br>



### background-attachment

这个属性决定背景图像的位置是在视口内固定，或者是随着包含它的区块滚动。

实现方式是需要添加毛玻璃效果的元素上再添加一个伪元素，在一个伪元素上使用原背景图片，同时设置 `background-attachment: fixed` ，然后再添加 `filter: blur` 属性让其产生模糊的效果。

```css
.g-glossy {
        background-color: rgba(255, 255, 255, 0.5);
        position: relative;
        overflow: hidden;
        z-index: 2;
      }

      .g-glossy::before {
        content: '';
        position: absolute;
        top: 0;
        left:0;
        right: 0;
        bottom: 0;
        background-image: url(https://cdn.pixabay.com/photo/2021
                              /07/02/19/09/lavenders-6382337_960_720.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        filter: blur(10px);
        z-index: -1;
      }
```



<br>

