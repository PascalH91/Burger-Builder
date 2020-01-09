(this.webpackJsonpburgerbuilder=this.webpackJsonpburgerbuilder||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,,function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,function(e,t,a){e.exports={content:"Layout_content__1t8Hf"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),i=(a(28),a(2)),o=a(3),s=a(5),u=a(4),d=a(6),m=function(e){return e.children},p=a(14),g=a.n(p),b=a(15),h=a.n(b),_=a(16),f=a.n(_),E=a(17),v=a.n(E),B=function(e){return r.a.createElement("div",{className:v.a.Logo},r.a.createElement("img",{src:f.a,alt:"MyBurger"}))},C=a(18),k=a.n(C),N=a(9),y=a.n(N),O=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?y.a.active:null},e.children))},S=function(){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(O,{link:"/",active:!0},"Burger Builder "),r.a.createElement(O,{link:"/",active:!0},"Checkout "))},j=function(e){return r.a.createElement("header",{className:h.a.Toolbar},r.a.createElement("div",null,"MENU"),r.a.createElement(B,null),r.a.createElement("nav",null,r.a.createElement(S,null)))},I=function(e){return r.a.createElement(m,null,r.a.createElement(j,null,"Toolbar, SideDrawer, Backdrop"),r.a.createElement("main",{className:g.a.content},e.children))},w=a(8),x=a(22),T=a(19),M=a.n(T),L=a(1),H=a.n(L),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:H.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:H.a.BreadTop},r.a.createElement("div",{className:H.a.Seeds1}),r.a.createElement("div",{className:H.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:H.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:H.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:H.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:H.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),F=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(x.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(P,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:M.a.Burger},r.a.createElement(P,{type:"bread-top"}),t,r.a.createElement(P,{type:"bread-bottom"}))},Y=a(10),A=a.n(Y),D=a(7),R=a.n(D),J=function(e){return r.a.createElement("div",{className:R.a.BuildControl},r.a.createElement("div",{className:R.a.Label},e.label),r.a.createElement("button",{className:R.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:R.a.More,onClick:e.added},"More"))},K=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"},{label:"Cheese",type:"cheese"}],U=function(e){return r.a.createElement("div",{className:A.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),K.map((function(t){return r.a.createElement(J,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{disabled:e.purchasable,className:A.a.OrderButton,onClick:e.ordered},"ORDER NOW"))},W=a(20),X=a.n(W),q=a(21),z=a.n(q),Q=function(e){return e.show?r.a.createElement("div",{className:z.a.Backdrop,onClick:e.clicked}):null},V=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:X.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?1:0}},e.children))},Z=a(11),$=a.n(Z),G=function(e){return r.a.createElement("button",{className:[$.a.Button,$.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ee=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t,style:{textTransform:"capitalize"}},r.a.createElement("span",null,t),": ",e.ingredients[t])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(G,{btnType:"Danger",clicked:e.purchaseCanceled},"CANCEL"),r.a.createElement(G,{btnType:"Success",clicked:e.purchaseContinue},"CONTINUE"))},te={salad:.5,cheese:.4,meat:1.3,bacon:.7},ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(w.a)({},a.state.ingredients);n[e]=t;var r=te[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n},(function(){return a.updatePurchaseState()}))},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(w.a)({},a.state.ingredients);r[e]=n;var l=te[e],c=a.state.totalPrice-l;a.setState({totalPrice:c,ingredients:r},(function(){return a.updatePurchaseState()}))}},a.updatePurchaseState=function(){var e=Object(w.a)({},a.state.ingredients),t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);a.setState({purchasable:t>0})},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You continue!")},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object(w.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(ee,{ingredients:this.state.ingredients,purchaseCanceled:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,price:this.state.totalPrice})),r.a.createElement(F,{ingredients:this.state.ingredients}),r.a.createElement(U,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,purchasable:!this.state.purchasable,ordered:this.purchaseHandler}))}}]),t}(n.Component),ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,null,r.a.createElement(ae,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[23,1,2]]]);
//# sourceMappingURL=main.a5c4c038.chunk.js.map