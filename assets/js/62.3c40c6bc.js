(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{244:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"第三十八期（2019-11-01）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三十八期（2019-11-01）","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三十八期（2019.11.01）")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("保持Node.js的快速：高性能Node.js服务器的工具，技术和技巧汇总")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.smashingmagazine.com/2018/06/nodejs-tools-techniques-performance-servers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.smashingmagazine.com/2018/06/nodejs-tools-techniques-performance-servers/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/Joeycz/pics/master/20191024164255.png",alt:"20191024164255.png"}})])]),t._v(" "),s("li",[s("p",[t._v("共享可变状态问题，通常是引用类型拷贝的问题，涉及深浅拷贝的问题")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://2ality.com/2019/10/shared-mutable-state.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://2ality.com/2019/10/shared-mutable-state.html"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请注意，deepCopy()仅解决了扩展的一个问题：浅复制。其他所有内容：不复制原型，仅部分复制特殊对象，忽略不可枚举的属性，忽略大多数属性。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通常，不可能完全实现复制：并非所有数据都是一棵树，有时您并不需要所有属性，等等。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deepCopy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("original")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("original"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" original"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deepCopy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" original "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" original "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromEntries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("entries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("original"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deepCopy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Primitive value: atomic, no need to copy")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" original"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Peaks.js是一个JavaScript组件，允许用户在浏览器中查看音频波形并与之交互。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://waveform.prototyping.bbc.co.uk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://waveform.prototyping.bbc.co.uk/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/Joeycz/pics/master/20191030183252.png",alt:"20191030183252.png"}})])]),t._v(" "),s("li",[s("p",[t._v("μPlot，μPlot是基于Canvas 2D的快速，高效内存的时间序列图；从冷启动开始，150,000个数据点创建一个交互式图表只需要40ms。除了快速的初始渲染外，缩放和光标性能是所有类似制图库中最好的。它的大小约为10 KB，可能是最小且最快的时间序列绘图仪，没有使用WebGL着色器或WASM，这两种绘图仪的启动成本和代码大小都高得多。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/leeoniya/uPlot",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/leeoniya/uPlot"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("mermaid：以类似 markdown 的文本生成图表和流程图的方。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/knsv/mermaid",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/knsv/mermaid"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("mitt：一个事件订阅和发射器的 javascript 库，Mitt 是为浏览器设计的，但是可以在任何JavaScript运行时中使用。它没有依赖项，并支持IE9+。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/developit/mitt",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/developit/mitt"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("Nzh 适用于需要转换阿拉伯数字与中文数字的场景。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/cnwhy/nzh",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/cnwhy/nzh"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("SandDance：微软开源的数据可视化库，SandDance使用单元可视化，在数据库中的行与屏幕上的标记之间应用一对一映射。视图之间保持平滑无缝的切换，使数据可视化更加的炫酷和未来感。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/microsoft/SandDance",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/microsoft/SandDance"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/11507384/54236654-52d42800-44d1-11e9-859e-6c5d297a46d2.gif",alt:""}})])])])])},[],!1,null,null,null);a.default=e.exports}}]);