(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{331:function(a,e,t){"use strict";t.r(e);var r=t(17),s=Object(r.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("CSS3 弹性盒子(Flexible Box 或 Flexbox)，是一种用于在页面上布置元素的布局模式，使得当页面布局必须适应不同的屏幕尺寸和不同的显示设备时，元素可预测地运行/列。对于许多应用程序，弹性盒子模型提供了对块模型的改进，因为它不使用浮动，flex 容器的边缘也不会与其内容的边缘折叠。")]),a._v(" "),t("h3",{attrs:{id:"注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意点","aria-hidden":"true"}},[a._v("#")]),a._v(" 注意点")]),a._v(" "),t("p",[a._v("弹性盒模型,分老版与新版,老版本的我们通常称之为 box,新版本的我们通常称之为 flex."),t("br"),a._v("\n有了新版本后，为什么还需要老版本？（新版本比老版本要强大的很多）很多移动端浏览器内核版本都超低")]),a._v(" "),t("ul",[t("li",[a._v("老版:容器设置 display 为 webkit-box")]),a._v(" "),t("li",[a._v("新版:容器设置 display 为-webkit-flex 或 flex")]),a._v(" "),t("li",[a._v("行内元素:也可以使用 Flex 布局,设置 display: inline-flex")]),a._v(" "),t("li",[a._v("注意，设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。")])]),a._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),t("h3",{attrs:{id:"容器和项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器和项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 容器和项目")]),a._v(" "),t("p",[a._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。')]),a._v(" "),t("h3",{attrs:{id:"主轴和侧轴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主轴和侧轴","aria-hidden":"true"}},[a._v("#")]),a._v(" 主轴和侧轴")]),a._v(" "),t("p",[a._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴,我把它叫侧轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。")]),a._v(" "),t("p",[a._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。")]),a._v(" "),t("h2",{attrs:{id:"容器上的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器上的属性","aria-hidden":"true"}},[a._v("#")]),a._v(" 容器上的属性")]),a._v(" "),t("ul",[t("li",[a._v("flex-direction")]),a._v(" "),t("li",[a._v("flex-wrap")]),a._v(" "),t("li",[a._v("flex-flow")]),a._v(" "),t("li",[a._v("justify-content")]),a._v(" "),t("li",[a._v("align-items")]),a._v(" "),t("li",[a._v("align-content")])]),a._v(" "),t("h3",{attrs:{id:"项目的布局方向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目的布局方向","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目的布局方向")]),a._v(" "),t("p",[a._v("因为项目永远是在主轴上排列的,所以只要改变主轴方向就可控制容器是往左布局还是往右布局.")]),a._v(" "),t("h4",{attrs:{id:"老版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老版","aria-hidden":"true"}},[a._v("#")]),a._v(" 老版")]),a._v(" "),t("p",[a._v("-webkit-box-orient 属性本质上确定了主轴是哪一根")]),a._v(" "),t("ul",[t("li",[a._v("horizontal:x 轴")]),a._v(" "),t("li",[a._v("vertical:y 轴")])]),a._v(" "),t("h4",{attrs:{id:"新版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新版","aria-hidden":"true"}},[a._v("#")]),a._v(" 新版")]),a._v(" "),t("ul",[t("li",[a._v("主轴为水平方向，起点在右端:flex-direction: row;")]),a._v(" "),t("li",[a._v("主轴为垂直方向，起点在上沿:flex-direction: column;")])]),a._v(" "),t("h3",{attrs:{id:"如果一条轴线排不下，如何换行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果一条轴线排不下，如何换行","aria-hidden":"true"}},[a._v("#")]),a._v(" 如果一条轴线排不下，如何换行")]),a._v(" "),t("ul",[t("li",[a._v("老版:默认盒子小溢出不换行，不可改")]),a._v(" "),t("li",[a._v("新版:默认盒子小挤小不换行，可改\n"),t("ul",[t("li",[a._v("flex-wrap(不可继承)\n"),t("ul",[t("li",[a._v("默认值：nowrap")]),a._v(" "),t("li",[a._v("nowrap:不换行")]),a._v(" "),t("li",[a._v("wrap：换行，第一行在上方")]),a._v(" "),t("li",[a._v("wrap-reverse：换行，第一行在下方。")])])])])])]),a._v(" "),t("h3",{attrs:{id:"flex-direction-flex-wrap-的简写-flex-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction-flex-wrap-的简写-flex-flow","aria-hidden":"true"}},[a._v("#")]),a._v(" flex-direction,flex-wrap 的简写:flex-flow")]),a._v(" "),t("p",[a._v("flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。")]),a._v(" "),t("p",[a._v("默认值：row nowrap,不可继承")]),a._v(" "),t("h3",{attrs:{id:"项目排列顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目排列顺序","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目排列顺序")]),a._v(" "),t("p",[a._v("因为项目永远是沿着主轴的正方向排列的,所以我们只需要关心主轴的正方向")]),a._v(" "),t("h4",{attrs:{id:"老版-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老版-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 老版")]),a._v(" "),t("p",[a._v("-webkit-box-direction 属性本质上改变了主轴的方向")]),a._v(" "),t("ul",[t("li",[a._v("normal;x 轴")]),a._v(" "),t("li",[a._v("reverse;y 轴")])]),a._v(" "),t("h4",{attrs:{id:"新版-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新版-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 新版")]),a._v(" "),t("p",[a._v("在新版的弹性盒模型中我们只需要一个：flex-direction：四个属性值")]),a._v(" "),t("ul",[t("li",[a._v("主轴为垂直方向，起点在上沿:flex-direction:row-reverse;")]),a._v(" "),t("li",[a._v("主轴为垂直方向，起点在下沿:flex-direction:column-reverse;")])]),a._v(" "),t("h3",{attrs:{id:"富裕空间的管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#富裕空间的管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 富裕空间的管理")]),a._v(" "),t("h4",{attrs:{id:"老版-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老版-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 老版")]),a._v(" "),t("p",[a._v("富裕空间的位置跟项目排列顺序都无关，只跟主轴是哪一根有关,使用属性-webkit-box-pack")]),a._v(" "),t("h5",{attrs:{id:"主轴是-x-轴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主轴是-x-轴","aria-hidden":"true"}},[a._v("#")]),a._v(" 主轴是 x 轴")]),a._v(" "),t("p",[a._v("(其实可以根据语义判断,所谓的左对齐右对齐等等都是把当前主轴上的项目往左靠,往右靠等等,主轴不同,布局自然改变)")]),a._v(" "),t("ul",[t("li",[a._v("start（默认值）：左对齐\n"),t("ul",[t("li",[a._v("效果是富裕空间在 x 轴的在右边,y 轴的在下边")])])]),a._v(" "),t("li",[a._v("end：右对齐\n"),t("ul",[t("li",[a._v("效果是富裕空间在 x 轴的在左边,y 轴的在下边")])])]),a._v(" "),t("li",[a._v("center：居中\n"),t("ul",[t("li",[a._v("效果是富裕空间在 x 轴,y 轴都在两边")])])]),a._v(" "),t("li",[a._v("justify：两端对齐，项目之间的间隔都相等。\n"),t("ul",[t("li",[a._v("效果是富裕空间在 x 轴,y 轴的项目之间")])])])]),a._v(" "),t("h5",{attrs:{id:"主轴是-y-轴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主轴是-y-轴","aria-hidden":"true"}},[a._v("#")]),a._v(" 主轴是 y 轴")]),a._v(" "),t("p",[a._v("(其实可以根据语义判断,所谓的左对齐右对齐等等都是把当前主轴上的项目往左靠,往右靠等等,主轴改变,自然改变)")]),a._v(" "),t("ul",[t("li",[a._v("start（默认值）：左对齐\n"),t("ul",[t("li",[a._v("效果是富裕空间在 x 轴的在左边,y 轴的在上边")])])]),a._v(" "),t("li",[a._v("end：右对齐\n"),t("ul",[t("li",[a._v("效果是富裕空间在 x 轴的在右边,y 轴的在上边")])])]),a._v(" "),t("li",[a._v("center：居中\n"),t("ul",[t("li",[a._v("效果是富裕空间在 x 轴,y 轴都在两边")])])]),a._v(" "),t("li",[a._v("justify：两端对齐，项目之间的间隔都相等。\n"),t("ul",[t("li",[a._v("效果是富裕空间在 x 轴,y 轴的项目之间")])])])]),a._v(" "),t("h4",{attrs:{id:"新版-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新版-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 新版")]),a._v(" "),t("p",[a._v("富裕空间分布跟主轴是哪一根有关")]),a._v(" "),t("h5",{attrs:{id:"主轴是-x-轴或-y-轴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主轴是-x-轴或-y-轴","aria-hidden":"true"}},[a._v("#")]),a._v(" 主轴是 x 轴或 y 轴")]),a._v(" "),t("p",[a._v("使用属性 justify-content,原理和表现和老版一样")]),a._v(" "),t("ul",[t("li",[a._v("flex-start（默认值）：左对齐")]),a._v(" "),t("li",[a._v("flex-end：右对齐")]),a._v(" "),t("li",[a._v("center： 居中")]),a._v(" "),t("li",[a._v("space-between：两端对齐，项目之间的间隔都相等。")]),a._v(" "),t("li",[a._v("space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍")])]),a._v(" "),t("h3",{attrs:{id:"单行项目在侧轴上如何对齐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单行项目在侧轴上如何对齐","aria-hidden":"true"}},[a._v("#")]),a._v(" 单行项目在侧轴上如何对齐")]),a._v(" "),t("p",[a._v("align-items 属性定义项目在侧轴上如何对齐。")]),a._v(" "),t("ul",[t("li",[a._v("flex-start：交叉轴的起点对齐。")]),a._v(" "),t("li",[a._v("flex-end：交叉轴的终点对齐。")]),a._v(" "),t("li",[a._v("center：交叉轴的中点对齐。")]),a._v(" "),t("li",[a._v("baseline: 项目的第一行文字的基线对齐。")]),a._v(" "),t("li",[a._v("stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。")])]),a._v(" "),t("h3",{attrs:{id:"多行或多列项目在侧轴上如何对齐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多行或多列项目在侧轴上如何对齐","aria-hidden":"true"}},[a._v("#")]),a._v(" 多行或多列项目在侧轴上如何对齐")]),a._v(" "),t("p",[a._v("align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),a._v(" "),t("ul",[t("li",[a._v("flex-start：与交叉轴的起点对齐。")]),a._v(" "),t("li",[a._v("flex-end：与交叉轴的终点对齐。")]),a._v(" "),t("li",[a._v("center：与交叉轴的中点对齐。")]),a._v(" "),t("li",[a._v("space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),a._v(" "),t("li",[a._v("space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),a._v(" "),t("li",[a._v("stretch（默认值）：轴线占满整个交叉轴。")])]),a._v(" "),t("h2",{attrs:{id:"项目的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目的属性","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目的属性")]),a._v(" "),t("ul",[t("li",[a._v("order")]),a._v(" "),t("li",[a._v("flex-grow")]),a._v(" "),t("li",[a._v("flex-shrink")]),a._v(" "),t("li",[a._v("flex-basis")]),a._v(" "),t("li",[a._v("flex")]),a._v(" "),t("li",[a._v("align-self")])]),a._v(" "),t("h3",{attrs:{id:"手动改变项目的排列顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动改变项目的排列顺序","aria-hidden":"true"}},[a._v("#")]),a._v(" 手动改变项目的排列顺序")]),a._v(" "),t("p",[a._v("order 属性规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的增序进行布局。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局，order 越大越靠后")]),a._v(" "),t("p",[a._v("默认值：0 不可继承")]),a._v(" "),t("h3",{attrs:{id:"伸缩规则计算的基准值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伸缩规则计算的基准值","aria-hidden":"true"}},[a._v("#")]),a._v(" 伸缩规则计算的基准值")]),a._v(" "),t("p",[a._v("flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）既是 flex 元素在主轴方向上的初始大小。浏览器根据这个属性，计算主轴是否有多余空间。")]),a._v(" "),t("p",[a._v("默认值 ：auto 不可继承，即项目的本来大小(默认拿 width 或 height 的值)。")]),a._v(" "),t("p",[a._v("注意：在 flex 简写属性中 flex-basis 的默认值为 0")]),a._v(" "),t("h3",{attrs:{id:"定义项目的放大比例-塞满容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义项目的放大比例-塞满容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 定义项目的放大比例,塞满容器")]),a._v(" "),t("p",[a._v("flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。放大的前提是有可用空间")]),a._v(" "),t("h4",{attrs:{id:"计算规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算规则","aria-hidden":"true"}},[a._v("#")]),a._v(" 计算规则")]),a._v(" "),t("ul",[t("li",[a._v("可用空间 = (容器大小 - 所有项目 flex-basis（没有就拿 width 或 height 的值）的总和)")]),a._v(" "),t("li",[a._v("可扩展空间 = (可用空间/所有项目 flex-grow 的总和)")]),a._v(" "),t("li",[a._v("每项伸缩后大小 = (flex-basis + (可扩展空间 x flex-grow 值))")]),a._v(" "),t("li",[a._v("所以当有的项目用到了 flex-grow,有的没有,不会影响到没有用到的大小")])]),a._v(" "),t("h3",{attrs:{id:"定义项目的缩小比例-让项目不溢出容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义项目的缩小比例-让项目不溢出容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 定义项目的缩小比例,让项目不溢出容器")]),a._v(" "),t("p",[a._v("flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。缩小的前提是没有可用空间,和只有在 flex-wrap:nowrap 时才有作用,负值对该属性无效。")]),a._v(" "),t("h4",{attrs:{id:"计算规则-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算规则-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 计算规则")]),a._v(" "),t("ul",[t("li",[a._v("计算收缩因子与项目基准值乘的总和")])]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" flex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" basis "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" 每一项flex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" shrink之和"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 200 *1+ 50*1+ 50*1+ 50*1+ 50*1 = 400")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("计算收缩因数"),t("br"),a._v("\n收缩因数=（项目的收缩因子*项目基准值）/第一步计算总和")])]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("flex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" shrink "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" flex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" basis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1*200 / 400 = 1/2")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1*50 / 400 = 1/8")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[a._v("移除空间的计算"),t("br"),a._v("\n移除空间= 项目收缩因数 x 负溢出的空间")])]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" 溢出的空间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1/2*300 = 150")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1/8*300 = 37.5")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 最后200 - 150 =50；")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//       50 - 37.5 = 12.5")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("ul",[t("li",[a._v("不会把元素缩没,填满容器")]),a._v(" "),t("li",[a._v("所以如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。")]),a._v(" "),t("li",[a._v("所以如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。")])]),a._v(" "),t("h3",{attrs:{id:"flex-简写-flex-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-简写-flex-属性","aria-hidden":"true"}},[a._v("#")]),a._v(" flex 简写:flex 属性")]),a._v(" "),t("p",[a._v("flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。不可继承")]),a._v(" "),t("p",[a._v("该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。")]),a._v(" "),t("p",[a._v("等分布局:flex：1(1 1 0%)")]),a._v(" "),t("h3",{attrs:{id:"项目在侧轴上如何对齐前提下-设置单个项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目在侧轴上如何对齐前提下-设置单个项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目在侧轴上如何对齐前提下,设置单个项目")]),a._v(" "),t("p",[a._v("align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。")]),a._v(" "),t("p",[a._v("如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。")]),a._v(" "),t("ul",[t("li",[a._v("auto,auto,表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。")]),a._v(" "),t("li",[a._v("flex-start：交叉轴的起点对齐。")]),a._v(" "),t("li",[a._v("flex-end：交叉轴的终点对齐。")]),a._v(" "),t("li",[a._v("center：交叉轴的中点对齐。")]),a._v(" "),t("li",[a._v("baseline: 项目的第一行文字的基线对齐。")]),a._v(" "),t("li",[a._v("stretch：如果项目未设置高度或设为 auto，将占满整个容器的高度。")])])])},[],!1,null,null,null);e.default=s.exports}}]);