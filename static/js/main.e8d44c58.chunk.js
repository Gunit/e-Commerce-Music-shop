(this["webpackJsonpe-Commerce-React-Project-Ogogo"]=this["webpackJsonpe-Commerce-React-Project-Ogogo"]||[]).push([[0],{12:function(e,t,c){e.exports={card:"Card_card__2UFhr",favorite:"Card_favorite__3xIl7",cardBottom:"Card_cardBottom__2pRi0",cardPrice:"Card_cardPrice__2HR0t",button:"Card_button__1ga76"}},15:function(e,t,c){e.exports={card:"Orders_card__37bCk",favorite:"Orders_favorite__hXuqu",cardBottom:"Orders_cardBottom__2kcXY",cardPrice:"Orders_cardPrice__1W6Jp",button:"Orders_button__Ecmpf",content:"Orders_content__2GdWa"}},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),s=c(30),i=c.n(s),n=c(9),o=c(10),l=c(8),d=c.n(l),j=c(11),u=c(6),b=c(2),h=Object(r.createContext)({}),x=c(7),m=c.n(x),O=c(1),p=function(e){var t=e.onClickCart,c=e.allPrice;return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)(n.c,{to:"/",children:Object(O.jsxs)("div",{className:"headerLeft",children:[Object(O.jsx)("img",{width:40,height:40,src:"images/logo.png",alt:"logo"}),Object(O.jsxs)("div",{className:"headerInfo",children:[Object(O.jsx)("h3",{style:{textTransform:"uppercase"},children:"music store"}),Object(O.jsx)("p",{style:{opacity:".5"},children:"The most delicious music"})]})]})}),Object(O.jsxs)("ul",{className:"headerRight",children:[Object(O.jsxs)("li",{style:{cursor:"pointer"},onClick:t,children:[Object(O.jsx)("img",{width:18,height:18,src:"images/cart.svg",alt:"cart"}),Object(O.jsx)("span",{children:c>0?"".concat(c," \u0441\u043e\u043c."):null})]}),Object(O.jsx)("li",{style:{cursor:"pointer"},children:Object(O.jsx)(n.c,{to:"/favorites",children:Object(O.jsx)("img",{src:"images/favorite.svg",alt:"favorite"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.c,{to:"/orders",children:Object(O.jsx)("img",{width:18,height:18,src:"images/user.svg",alt:"user"})})})]})]})},f=function(e){var t=e.onClose,c=e.items,r=void 0===c?[]:c,s=e.removeItem,i=e.allPrice,n=(e.imgURL,a.a.useContext(h).buyExample),o=.007*i;return Object(O.jsx)("div",{className:"sideBarBlock",children:Object(O.jsxs)("div",{className:"sideBar",children:[Object(O.jsxs)("h2",{style:{marginBottom:"30px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(O.jsx)("img",{style:{cursor:"pointer",opacity:".5"},width:22,height:22,src:"images/close.svg",alt:"close",onClick:t})]}),Object(O.jsxs)("div",{className:"items",children:[r.map((function(e){return Object(O.jsxs)("div",{className:"cartItem",style:{display:"flex",alignItems:"center",marginRight:"20px",marginBottom:"20px"},children:[Object(O.jsx)("img",{style:{marginRight:"5px"},width:70,height:70,src:e.imgURL,alt:"music"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{style:{marginBottom:"5px",color:"#000"},children:e.title}),Object(O.jsxs)("b",{style:{color:"#000"},children:[e.price," \u0441\u043e\u043c."]})]}),Object(O.jsx)("img",{onClick:function(){return s(e.id)},style:{cursor:"pointer",opacity:".5"},width:22,height:22,src:"/images/close.svg",alt:"close"})]},e.title)})),Object(O.jsxs)("div",{className:"cartTotalBlock",children:[Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[i," \u0441\u043e\u043c."]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u041d\u0434\u0441 7%:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[Math.round(o)," \u0441\u043e\u043c."]})]})]}),Object(O.jsxs)("button",{onClick:n,className:"myButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(O.jsx)("img",{src:"images/arrow.svg",alt:"arrow"})]})]})]})]})})},v=c(34),g=c(33),y=c(12),k=c.n(y),w=function(e){var t=e.id,c=e.title,s=e.price,i=e.imgURL,n=e.onPlus,o=e.onClickFavorites,l=e.stateHeart,d=(e.added,e.loading),j=Object(r.useState)(l),b=Object(u.a)(j,2),x=b[0],m=b[1],p=a.a.useContext(h).isItemAdded,f={title:c,price:s,imgURL:i,id:t,parentId:t};return Object(O.jsx)("div",{className:k.a.card,children:d?Object(O.jsxs)(g.a,{speed:2,width:150,height:150,viewBox:"0 0 150 150",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"58",y:"18",rx:"2",ry:"2",width:"140",height:"10"}),Object(O.jsx)("rect",{x:"58",y:"34",rx:"2",ry:"2",width:"140",height:"10"}),Object(O.jsx)("rect",{x:"1",y:"59",rx:"2",ry:"2",width:"208",height:"80"}),Object(O.jsx)("circle",{cx:"30",cy:"41",r:"19"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:k.a.favorite,children:Object(O.jsx)("img",{alt:"Heart",onClick:function(){o(f),m(!x)},src:x?"images/hearttrue.svg":"images/heartfalse.svg"})}),Object(O.jsx)("img",{width:133,height:112,src:i,alt:"Music"}),Object(O.jsx)("h5",{children:c}),Object(O.jsxs)("div",{className:k.a.cardBottom,children:[Object(O.jsxs)("div",{className:k.a.cardPrice,children:[Object(O.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(O.jsxs)("b",{children:[s," \u0441\u043e\u043c."]})]}),Object(O.jsx)("button",{className:k.a.button,onClick:function(){n(f)},children:Object(O.jsx)("img",{width:30,height:30,src:p(t)?"images/addCard.svg":"images/plus.svg",alt:"plus"})})]})]})})},C=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onAddFavorites,s=e.onAddToCart,i=e.loading;return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsxs)("div",{className:"allSearch",style:{display:"flex",alignItems:"center",marginBottom:"40px",justifyContent:"space-between"},children:[Object(O.jsx)("h1",{className:"allMusic",children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "'.concat(c,'"'):"All Music"}),Object(O.jsxs)("div",{className:"search-block",children:[Object(O.jsx)("img",{src:"images/search.svg",alt:"serch"}),c&&Object(O.jsx)("img",{className:"clear",width:22,height:22,src:"images/close.svg",alt:"close",onClick:function(){return r("")}}),Object(O.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:c,onChange:function(e){return r(e.target.value)}})]})]}),Object(O.jsx)("div",{className:"media",style:{display:"flex",flexWrap:"wrap"},children:(i?Object(o.a)(Array(12)):t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))).map((function(e,t){return Object(O.jsx)(w,Object(v.a)({onClickFavorites:function(e){return a(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))})]})},N=function(e){var t=e.onAddFavorites,c=(e.onAddToCart,a.a.useContext(h).favorites);return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("div",{style:{display:"flex",alignItems:"center",marginBottom:"40px",justifyContent:"space-between"},children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(O.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:c.map((function(e){return Object(O.jsx)(w,{id:e.id,title:e.title,price:e.price,imgURL:e.imgURL,onClickFavorites:t,stateHeart:!0},"".concat(e.title,"_").concat(e.id))}))})]})},_=c(15),B=c.n(_),I=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];a.a.useEffect((function(){Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://615c3596c298130017735fd3.mockapi.io/orders");case 2:t=e.sent,c=t.data,s(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[]));case 5:case"end":return e.stop()}}),e)})))()}),[]);var i={fontSize:"1.4vw",fontWeight:"600",color:"#bebebe"};return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("div",{style:{display:"flex",alignItems:"center",marginBottom:"40px",justifyContent:"space-between"},children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(O.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:c.map((function(e,t){return Object(O.jsxs)("div",{className:B.a.card,children:[Object(O.jsx)("h5",{style:i,children:t+1}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:B.a.favorite}),Object(O.jsx)("img",{width:133,height:112,src:e.imgURL,alt:"Music"}),Object(O.jsx)("h5",{children:e.title}),Object(O.jsx)("div",{className:B.a.cardBottom,children:Object(O.jsx)("div",{className:B.a.cardPrice})})]})]})}))})]})};var P=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)([]),i=Object(u.a)(s,2),l=i[0],x=i[1],v=Object(r.useState)([]),g=Object(u.a)(v,2),y=g[0],k=g[1],w=Object(r.useState)(""),_=Object(u.a)(w,2),B=_[0],P=_[1],S=Object(r.useState)(!1),R=Object(u.a)(S,2),A=R[0],F=R[1],L=Object(r.useState)(!0),U=Object(u.a)(L,2),T=U[0],E=U[1],M=Object(r.useState)(null),W=Object(u.a)(M,2),H=(W[0],W[1]),J=l.reduce((function(e,t){return e+t.price}),0);Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,c,r,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([m.a.get("https://615c3596c298130017735fd3.mockapi.io/cart"),m.a.get("https://615c3596c298130017735fd3.mockapi.io/favorites"),m.a.get("https://615c3596c298130017735fd3.mockapi.io/card")]);case 3:t=e.sent,c=Object(u.a)(t,3),r=c[0],s=c[1],i=c[2],E(!1),x(r.data),k(s.data),a(i.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=l.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return e.next=5,m.a.delete("https://615c3596c298130017735fd3.mockapi.io/cart/".concat(c.id));case 5:x((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=14;break;case 8:return e.next=10,m.a.post("https://615c3596c298130017735fd3.mockapi.io/cart",t);case 10:r=e.sent,a=r.data,x((function(e){return[].concat(Object(o.a)(e),[a])})),alert(JSON.stringify(t.title));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!y.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}m.a.delete("https://615c3596c298130017735fd3.mockapi.io/favorites/".concat(t.id)),k((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,m.a.post("https://615c3596c298130017735fd3.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,k((function(e){return[].concat(Object(o.a)(e),[r])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430...");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("https://615c3596c298130017735fd3.mockapi.io/orders",{items:l});case 3:t=e.sent,c=t.data,H(c.id),x([]),r=0;case 8:if(!(r<l.length)){e.next=17;break}return a=l[r],e.next=12,m.a.delete("https://615c3596c298130017735fd3.mockapi.io/cart/"+a.id);case 12:return e.next=14,new Promise((function(e){return setTimeout(e,1e3)}));case 14:r++,e.next=8;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(n.b,{children:Object(O.jsx)(h.Provider,{value:{items:c,cartItems:l,favorites:y,isItemAdded:function(e){return l.some((function(t){return Number(t.parentId)===Number(e)}))},buyExample:q},children:Object(O.jsxs)("div",{className:"wrapper",children:[A&&Object(O.jsx)(f,{onClose:function(){return F(!1)},items:l,removeItem:function(e){m.a.delete("https://615c3596c298130017735fd3.mockapi.io/cart/".concat(e)),x((function(t){return t.filter((function(t){return t.id!==e}))}))},allPrice:J}),Object(O.jsx)(p,{onClickCart:function(){return F(!0)},allPrice:J}),Object(O.jsx)(b.a,{path:"/",exact:!0,children:Object(O.jsx)(C,{items:c,searchValue:B,setSearchValue:P,onAddFavorites:X,onAddToCart:V,cartItems:l,loading:T})}),Object(O.jsx)(b.a,{path:"/favorites",children:Object(O.jsx)(N,{onAddFavorites:X})}),Object(O.jsx)(b.a,{path:"/orders",children:Object(O.jsx)(I,{})})]})})})};c(68);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(n.a,{children:Object(O.jsx)(P,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.e8d44c58.chunk.js.map