webpackJsonp([0],{"B+aH":function(t,s){},FjwH:function(t,s){},Jgdl:function(t,s){},PXOj:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("43Vb"),i=e.n(o),a=e("7+uW"),n=new a.a,r={name:"cartcontrol",props:{food:{type:Object}},created:function(){},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count+=1:a.a.set(this.food,"count",1),this.$nextTick(function(){n.$emit("addcart",t.target)}))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"slide-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"car-decrease",on:{click:t.decreaseCart}},[e("span",{staticClass:" icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"car-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"car-add icon-add_circle",on:{click:t.addCart}})],1)},staticRenderFns:[]};var l=e("VU/8")(r,c,!1,function(t){e("FjwH")},null,null).exports,d={name:"shopcart",props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},created:function(){var t=this;this.$nextTick(function(){n.$on("addcart",t.drop)})},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去結算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&(this.listContentScroll?this.$nextTick(function(){t.listContentScroll.refresh()}):this.listContentScroll=new i.a(this.$refs.listContent,{click:!0})),s}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var o=e.el.getBoundingClientRect(),i=o.left-32,a=-(window.innerHeight-o.top-22);t.style.display="",t.style.webkitTransform="translate3d(0, "+a+"px, 0)",t.style.transform="translate3d(0, "+a+"px, 0)";var n=t.getElementsByClassName("inner-hook")[0];n.style.webkitTransform="translate3d("+i+"px, 0, 0)",n.style.transform="translate3d("+i+"px, 0, 0)"}}},enter:function(t){t.offsetHeight,this.$nextTick(function(){t.style.webkitTransform="translate3d(0, 0, 0)",t.style.transform="translate3d(0, 0, 0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.webkitTransform="translate3d(0, 0, 0)",s.style.transform="translate3d(0, 0, 0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},hideList:function(){this.fold=!0},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},pay:function(){this.totalPrice<this.minPrice||window.alert("需要支付"+this.totalPrice+"元")}},components:{cartcontrol:l}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("span",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice)+"元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送費"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass,on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[t._v("\n        "+t._s(t.payDesc)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},[e("transition-group",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},t._l(t.balls,function(t,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"ball.show"}],key:"myname"+s,staticClass:"ball"},[e("span",{staticClass:"inner inner-hook"})])}),0)],1),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("購物車")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}),0)])])]),t._v(" "),e("transition",{attrs:{name:"mask-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]};var h=e("VU/8")(d,f,!1,function(t){e("Jgdl")},null,null).exports,u=e("fjIZ"),v=e("e9KK"),p=e("fJdx"),_={name:"food",props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.$nextTick(function(){t.foodScroll?t.foodScroll.refresh():t.foodScroll=new i.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(this.$nextTick(function(){n.$emit("addcart",t.target)}),a.a.set(this.food,"count",1))},selecttype:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.foodScroll.refresh()})},content:function(){var t=this;this.onlyContent=!this.onlyContent,this.$nextTick(function(){t.foodScroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate:function(t){var s=new Date(t);return Object(u.a)(s,"yyyy-MM-dd hh:mm")}},components:{cartcontrol:l,ratingselect:v.a,split:p.a}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好評率"+t._s(t.food.rating)+"$")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入購物車")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("div",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{selecttype:t.selecttype,content:t.content}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n              ")])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var C=e("VU/8")(_,m,!1,function(t){e("B+aH")},null,null).exports,w=e("EBsG"),g=e.n(w),y={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.goods=g.a.goods,this.$nextTick(function(){t._initScroll(),t._calculateHeight()})},mounted:function(){},methods:{_initScroll:function(){var t=this;this.menuScroll=new i.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new i.a(this.$refs.foodWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsList,s=0;if(this.listHeight.push(s),t){for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}console.log(t.length)}},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodWrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)}},selectFood:function(t){this.selectedFood=t,this.$refs.food.show()}},components:{shopcart:h,cartcontrol:l,food:C}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",{staticClass:"content"},t._l(t.goods,function(s,o){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===o},on:{click:function(s){return t.selectMenu(o,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n        ")])])}),0)]),t._v(" "),e("div",{ref:"foodWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{ref:"foodsList",refInFor:!0,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px"},[e("div",{staticClass:"icon",on:{click:function(e){return t.selectFood(s)}}},[e("img",{attrs:{width:"57",height:"57",src:s.icon,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"cunt"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好評率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcart",{attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var k=e("VU/8")(y,x,!1,function(t){e("Wh/2")},null,null);s.default=k.exports},"Wh/2":function(t,s){}});
//# sourceMappingURL=0.c41aee9b93d46302f298.js.map