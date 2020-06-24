(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{209:function(t,a,s){t.exports=s.p+"assets/img/65ff4f06-83bc-4af1-a848-ac0c8bdd43e9.579c841b.jpg"},558:function(t,a,s){"use strict";s.r(a);var v=s(0),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"css2-可视化模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css2-可视化模型"}},[t._v("#")]),t._v(" CSS2 可视化模型")]),t._v(" "),v("h2",{attrs:{id:"画布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#画布"}},[t._v("#")]),t._v(" 画布")]),t._v(" "),v("p",[t._v("根据 CSS2 规范，术语 Canvas 用来描述格式化的结构所渲染的空间——浏览器绘制内容的地方。画布对每个维度空间都是无限大的，但浏览器基于 Viewport 的大小选择了一个初始宽度。")]),t._v(" "),v("p",[t._v("根据 CSS2 规范的定义，画布如果是包含在其他画布内则是透明的，否则浏览器会指定一个颜色。")]),t._v(" "),v("h2",{attrs:{id:"盒模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#盒模型"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),v("p",[t._v("CSS 盒模型描述了矩形框，这些矩形框是为文档树中的元素生成的，并根据可视的格式化模型进行布局。")]),t._v(" "),v("p",[t._v("每个盒模型包括内容区域如图片、文本等（content）及可选的四周内填充（padding）、边框（border）和外边距（margin）区域。")]),t._v(" "),v("p",[v("img",{attrs:{src:s(209),alt:"CSS盒模型"}})]),t._v(" "),v("p",[v("strong",[t._v("盒模型又分为 IE 盒模型和 W3C 标准盒模型")])]),t._v(" "),v("ul",[v("li",[t._v("IE 盒模型：属性 "),v("code",[t._v("width")]),t._v("、"),v("code",[t._v("height")]),t._v(" 包含 "),v("code",[t._v("border")]),t._v(" 和 "),v("code",[t._v("padding")]),t._v("，指的是 "),v("code",[t._v("content + padding + border")])])]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("width "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" padding"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" border"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width\nheight "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" padding"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" border"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height\n")])])]),v("ul",[v("li",[t._v("W3C 标准盒模型：属性 "),v("code",[t._v("width")]),t._v("、"),v("code",[t._v("height")]),t._v(" 只包含 "),v("code",[t._v("content")]),t._v("，不包含 "),v("code",[t._v("border")]),t._v(" 和 "),v("code",[t._v("padding")])])]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("width "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width\nheight "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height\n")])])]),v("p",[t._v("在 IE8+ 浏览器中使用哪个盒模型可以由 "),v("code",[t._v("box-sizing")]),t._v("（CSS3 新增的属性）控制，默认值为 "),v("code",[t._v("content-box")]),t._v("，即标准盒模型；如果将 "),v("code",[t._v("box-sizing")]),t._v(" 设为 "),v("code",[t._v("border-box")]),t._v(" 则用的是 IE 盒模型。如果在 IE6-8 中 DOCTYPE 缺失会触发 IE 模式。在当前 W3C 标准中盒模型是可以通过 "),v("code",[t._v("box-sizing")]),t._v(" 自由的进行切换的。")]),t._v(" "),v("p",[t._v("盒模型的布局方式是由以下因素决定的：")]),t._v(" "),v("ul",[v("li",[t._v("盒模型的类型")]),t._v(" "),v("li",[t._v("盒模型的尺寸")]),t._v(" "),v("li",[t._v("定位策略")]),t._v(" "),v("li",[t._v("外部信息，例如图片的大小和屏幕大小")])]),t._v(" "),v("h3",{attrs:{id:"类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),v("ul",[v("li",[t._v("块级元素盒模型 "),v("code",[t._v("display: block")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("block")]),t._v(" 元素会独占一行，多个 "),v("code",[t._v("block")]),t._v(" 元素会各自新起一行。默认情况下，"),v("code",[t._v("block")]),t._v(" 元素宽度自动填满其父元素宽度")]),t._v(" "),v("li",[v("code",[t._v("block")]),t._v(" 元素可以设置元素宽高。块级元素即使设置了宽度，仍然是独占一行。")]),t._v(" "),v("li",[t._v("块级元素可以设置外边距 "),v("code",[t._v("margin")]),t._v(" 和内边距 "),v("code",[t._v("padding")])])])]),t._v(" "),v("li",[t._v("行内元素盒模型 "),v("code",[t._v("display: inline")]),t._v(" "),v("ul",[v("li",[t._v("行内元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化")]),t._v(" "),v("li",[t._v("行内元素无法设置宽高")]),t._v(" "),v("li",[t._v("行内元素的外边距 "),v("code",[t._v("margin")]),t._v(" 和内边距 "),v("code",[t._v("padding")]),t._v("，水平方向的 "),v("code",[t._v("padding-left")]),t._v("、"),v("code",[t._v("padding-right")]),t._v("、"),v("code",[t._v("margin-left")]),t._v(" 和 "),v("code",[t._v("marin-right")]),t._v(" 都产生效果；但垂直方向的 "),v("code",[t._v("padding-top")]),t._v("、"),v("code",[t._v("padding-bottom")]),t._v("、"),v("code",[t._v("margin-top")]),t._v(" 和 "),v("code",[t._v("margin-bottom")]),t._v(" 都不会产生效果")])])]),t._v(" "),v("li",[t._v("行内-块级元素盒模型 "),v("code",[t._v("display: inline-block")]),t._v(" "),v("ul",[v("li",[t._v("将对象呈现为行内元素，但是内容为块状元素")])])])]),t._v(" "),v("h2",{attrs:{id:"定位策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定位策略"}},[t._v("#")]),t._v(" 定位策略")]),t._v(" "),v("p",[t._v("CSS2 可视化模型有三种定位策略：")]),t._v(" "),v("h3",{attrs:{id:"常规文档流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常规文档流"}},[t._v("#")]),t._v(" 常规文档流")]),t._v(" "),v("p",[t._v("在常规流中，元素框根据在文档中的位置进行定位，也就是说对象在渲染树中的位置和它在 DOM 树中的位置相似，并根据其框类型和尺寸进行布局。。")]),t._v(" "),v("p",[t._v("在块级格式化上下文里面， 它们垂直排列；在行内格式化上下文里面， 它们水平排列。")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".foo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* float: none; */")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" static"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h3",{attrs:{id:"浮动定位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浮动定位"}},[t._v("#")]),t._v(" 浮动定位")]),t._v(" "),v("p",[t._v("对于浮动定位方案，元素框称为浮动盒。它位于当前行的开头或末尾。这导致常规文档流环绕在它的周边，除非设置 "),v("code",[t._v("clear")]),t._v(" 属性。")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    float"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    float"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* position: static;\n    position: relative; */")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h3",{attrs:{id:"绝对定位和固定定位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位和固定定位"}},[t._v("#")]),t._v(" 绝对定位和固定定位")]),t._v(" "),v("p",[t._v("对于绝对定位方案，元素框会脱离常规文档流，不影响常规文档流的布局。 它的定位是相对于包含它的元素框而言的，通过 "),v("code",[t._v("top")]),t._v("、"),v("code",[t._v("bottom")]),t._v("、"),v("code",[t._v("left")]),t._v(" 和 "),v("code",[t._v("right")]),t._v(" 固定位置。")]),t._v(" "),v("p",[t._v("如果元素的属性 "),v("code",[t._v("position")]),t._v(" 为 "),v("code",[t._v("absolute")]),t._v(" 或 "),v("code",[t._v("fixed")]),t._v("， 它是绝对定位元素。")]),t._v(" "),v("p",[t._v("固定定位元素也是绝对定位元素，它的包含块就是可视区域。当页面滚动时它固定在屏幕上，因为可视区域没有移动。")]),t._v(" "),v("h2",{attrs:{id:"分层展示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分层展示"}},[t._v("#")]),t._v(" 分层展示")]),t._v(" "),v("p",[t._v("这是由 CSS 属性 "),v("code",[t._v("z-index")]),t._v(" 指定的。它代表了框的第三个维度，也就是沿“z 轴”方向的位置。")]),t._v(" "),v("p",[t._v("这些框分散到多个堆栈（称为堆栈上下文）中。在每一个堆栈中，会首先绘制后面的元素，然后在顶部绘制前面的元素，以便更靠近用户。如果出现重叠，新绘制的元素就会覆盖之前的元素。")]),t._v(" "),v("p",[t._v("堆栈是按照 "),v("code",[t._v("z-index")]),t._v(" 属性进行排序的。具有 z-index 属性的元素框形成了本地堆栈。可视区域具有外部堆栈。")])])}),[],!1,null,null,null);a.default=e.exports}}]);