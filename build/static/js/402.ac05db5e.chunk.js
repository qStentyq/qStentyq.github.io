"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[402],{5356:function(e,r,t){t.d(r,{Z:function(){return s}});var a=t.p+"static/media/error.b0232c0ecedc97323513.gif",n=t(184),s=function(){return(0,n.jsx)("img",{style:{display:"block",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"error404"})}},2340:function(e,r,t){t.r(r),t.d(r,{default:function(){return I}});var a=t(9439),n=t(2791),s=t(5356),i=t.p+"static/media/mjolnir.61f31e1809f12183a524.png",c=t(4304),l=t(108),o=t(184),u=function(e){var r=e.char,t=r.name,a=r.description,n=r.thumbnail,s=r.homepage,i=r.wiki,c="randomchar__img";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(c+=" contain"),(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:n,alt:"Random character",className:c}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:t}),(0,o.jsx)("p",{className:"randomchar__descr",children:a}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:s,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:i,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=(0,n.useState)({}),r=(0,a.Z)(e,2),t=r[0],h=r[1],d=(0,c.Z)(),m=d.loading,x=d.error,f=d.getCharacter,p=d.clearError,j=function(){p();var e=Math.floor(400*Math.random()+1011e3);f(e).then(v)};(0,n.useEffect)((function(){j()}),[]);var v=function(e){h(e)},g=x?(0,o.jsx)(s.Z,{}):null,b=m?(0,o.jsx)(l.Z,{}):null,_=m||x?null:(0,o.jsx)(u,{char:t});return(0,o.jsxs)("div",{className:"randomchar",children:[g,b,_,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{className:"button button__main",children:(0,o.jsx)("div",{className:"inner",onClick:j,children:"try it"})}),(0,o.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=t(3433),m=t(6983),x=t(5660),f=function(e){var r=(0,n.useState)([]),t=(0,a.Z)(r,2),i=t[0],u=t[1],h=(0,n.useState)(0),f=(0,a.Z)(h,2),p=f[0],j=f[1],v=(0,n.useState)(!1),g=(0,a.Z)(v,2),b=g[0],_=g[1],y=(0,n.useState)(!1),N=(0,a.Z)(y,2),k=N[0],Z=N[1],w=(0,c.Z)(),C=w.loading,T=w.error,S=w.getAllCharacters;(0,n.useEffect)((function(){S(p).then(E)}),[]);var E=function(e){var r=!1;e.length<8&&(r=!0),u((function(r){return[].concat((0,d.Z)(r),(0,d.Z)(e))})),_(!1),Z(r)},I=(0,n.useRef)([]),A=function(e){I.current.forEach((function(e){return e.classList.remove("char__item_selected")})),I.current[e].classList.add("char__item_selected"),I.current[e].focus()};var F=function(r){var t=r.map((function(r,t){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r.thumbnail&&(a={objectFit:"unset"}),(0,o.jsx)(m.Z,{timeout:500,classNames:"char__item",children:(0,o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return I.current[t]=e},onClick:function(){e.onCharSelected(r.id),A(t)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(r.id),A(t))},children:[(0,o.jsx)("img",{src:r.thumbnail,alt:r.name,style:a}),(0,o.jsx)("div",{className:"char__name",children:r.name})]},r.id)},r.id)}));return(0,o.jsx)(x.Z,{component:null,children:(0,o.jsx)("ul",{className:"char__grid",children:t})})}(i),B=T?(0,o.jsx)(s.Z,{}):null,M=C&&!b?(0,o.jsx)(l.Z,{}):null;return(0,o.jsxs)("div",{className:"char__list",children:[B,M,F,(0,o.jsx)("button",{className:"button button__main button__long",disabled:b,onClick:function(){return function(e,r){_(!r),S(e+9).then(E),j((function(e){return e+9})),console.log(e)}(p,!1)},style:{display:k?"none":"block"},children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},p=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},j=t(1087),v=function(e){var r=e.char,t=r.name,a=r.description,n=r.thumbnail,s=r.homepage,i=r.wiki,c=r.comics,l={"object-fit":"cover"};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(l={"object-fit":"contain"});var u=0===c.length?"\u041f\u043e \u044d\u0442\u043e\u043c\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0443 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043a\u043e\u043c\u0438\u043a\u0441\u043e\u0432":null;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:n,alt:t,style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:t}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:s,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:i,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:a}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[u,c.map((function(e,r){if(r>9)return null;var t="/comics/".concat(parseInt(e.resourceURI.slice(43)));return(0,o.jsx)("li",{className:"char__comics-item",children:(0,o.jsx)(j.rU,{to:t,children:e.name})},r)}))]})]})},g=function(e){var r=e.charId,t=(0,n.useState)(null),i=(0,a.Z)(t,2),u=i[0],h=i[1],d=(0,c.Z)(),m=d.loading,x=d.error,f=d.getCharacter,j=d.clearError;(0,n.useEffect)((function(){g()}),[r]);var g=function(){r&&(j(),f(r).then(h))},b=u||m||x?null:(0,o.jsx)(p,{}),_=x?(0,o.jsx)(s.Z,{}):null,y=m?(0,o.jsx)(l.Z,{}):null,N=m||x||!u?null:(0,o.jsx)(v,{char:u});return(0,o.jsxs)("div",{className:"char__info",children:[b,_,y,N]})},b=t(5705),_=t(7670),y=function(){var e=(0,n.useState)(""),r=(0,a.Z)(e,2),t=r[0],i=r[1],l=(0,n.useState)(null),u=(0,a.Z)(l,2),h=u[0],d=u[1],m=(0,c.Z)(),x=m.loading,f=m.error,p=m.getCharacterByName,v=m.clearError,g=function(e){d(e)},y=f?(0,o.jsx)("div",{className:"char__search-critical-error",children:(0,o.jsx)(s.Z,{})}):null,N=h?h.length>0?(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",h[0].name," page?"]}),(0,o.jsx)(j.rU,{to:"/characters/".concat(h[0].id),className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})]}):(0,o.jsxs)("div",{className:"char__search-error",children:["The character ",t," was not found. Check the name and try again"]}):null;return(0,o.jsxs)("div",{className:"char__search-form",children:[(0,o.jsx)(b.J9,{initialValues:{charName:""},validationSchema:_.Ry({charName:_.Z_().required("This field is required")}),onSubmit:function(e){var r,t=e.charName;r=t,v(),p(r).then(g),i(r)},children:(0,o.jsxs)(b.l0,{children:[(0,o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)(b.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,o.jsx)("button",{type:"submit",className:"button button__main",disabled:x,children:(0,o.jsx)("div",{className:"inner",children:"find"})})]}),(0,o.jsx)(b.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),N,y]})},N=t(5671),k=t(3144),Z=t(136),w=t(7277),C=function(e){(0,Z.Z)(t,e);var r=(0,w.Z)(t);function t(){var e;(0,N.Z)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=r.call.apply(r,[this].concat(n))).state={error:!1},e}return(0,k.Z)(t,[{key:"componentDidCatch",value:function(e,r){console.log(e,r),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,o.jsx)(s.Z,{}):this.props.children}}]),t}(n.Component),T=C,S=t.p+"static/media/vision.067d4ae1936d64a577ce.png",E=t(4270),I=function(){var e=(0,n.useState)(null),r=(0,a.Z)(e,2),t=r[0],s=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(E.q,{children:[(0,o.jsx)("meta",{name:"description",content:"Main page of API marvel app"}),(0,o.jsx)("title",{children:"Information Marvel Portal"})]}),(0,o.jsx)(T,{children:(0,o.jsx)(h,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(T,{children:(0,o.jsx)(f,{onCharSelected:function(e){s(e)}})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(T,{children:(0,o.jsx)(g,{charId:t})}),(0,o.jsx)(T,{children:(0,o.jsx)(y,{})})]})]}),(0,o.jsx)("img",{className:"bg-decoration",src:S,alt:"vision"})]})}},108:function(e,r,t){var a=t(184);r.Z=function(){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto",background:"white",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[(0,a.jsx)("g",{transform:"rotate(0 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#da3732",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(30 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#e4762f",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(60 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#f7be33",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(90 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#da3732",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(120 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#e4762f",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(150 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#f7be33",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(180 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#da3732",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(210 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#e4762f",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(240 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#f7be33",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(270 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#da3732",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(300 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#e4762f",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})})}),(0,a.jsx)("g",{transform:"rotate(330 50 50)",children:(0,a.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#f7be33",children:(0,a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})})]})}},4304:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(4165),n=t(5861),s=t(9439),i=t(2791),c=function(){var e,r,t,c,l,o=function(){var e,r=(0,i.useState)(!1),t=(0,s.Z)(r,2),c=t[0],l=t[1],o=(0,i.useState)(null),u=(0,s.Z)(o,2),h=u[0],d=u[1],m=(0,i.useCallback)((function(r){return(e=e||(0,n.Z)((0,a.Z)().mark((function e(r){var t,n,s,i,c,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,s=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},l(!0),e.prev=4,e.next=7,fetch(r,{method:t,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return c=e.sent,l(!1),e.abrupt("return",c);case 17:throw e.prev=17,e.t0=e.catch(4),l(!1),d(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})))).apply(this,arguments)}),[]);return{loading:c,request:m,error:h,clearError:(0,i.useCallback)((function(){d(null)}),[])}}(),u=o.loading,h=o.request,d=o.error,m=o.clearError,x="apikey=fdd12521ddeaa43bedac19c6a3422b87",f="https://gateway.marvel.com:443/v1/public",p=function(e){var r=e.description;return 0===r.length&&(r="\u041e \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"),r.length>200&&(r=r.slice(0,200)+"..."),{id:e.id,name:e.name,description:r,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},j=function(e){var r,t=e.description,a=e.prices[0].price+"$";return"0"===a.slice(0,1)&&(a="NOT AVAIBLE"),{id:e.id,title:e.title,description:t?"".concat(t):"No description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(r=e.textObjects[0])||void 0===r?void 0:r.language)||"en-us",price:a,url:e.urls[0].url}};return{loading:u,error:d,getAllCharacters:function(){return(c=c||(0,n.Z)((0,a.Z)().mark((function e(){var r,t,n=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,h("".concat(f,"/characters?limit=9&offset=").concat(r,"&").concat(x));case 3:return t=e.sent,console.log(t),e.abrupt("return",t.data.results.map(p));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getCharacter:function(e){return(l=l||(0,n.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("".concat(f,"/characters/").concat(r,"?").concat(x));case 2:return t=e.sent,e.abrupt("return",p(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},clearError:m,getNewComics:function(){return(r=r||(0,n.Z)((0,a.Z)().mark((function e(){var r,t,n=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:2,e.next=3,h("".concat(f,"/comics?format=comic&formatType=comic&orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(x));case 3:return t=e.sent,console.log(t),e.abrupt("return",t.data.results.map(j));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getNewComic:function(e){return(t=t||(0,n.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("".concat(f,"/comics/").concat(r,"?").concat(x));case 2:return t=e.sent,e.abrupt("return",j(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getCharacterByName:function(r){return(e=e||(0,n.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("".concat(f,"/characters?name=").concat(r,"&").concat(x));case 2:return t=e.sent,e.abrupt("return",t.data.results.map(p));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}}}]);
//# sourceMappingURL=402.ac05db5e.chunk.js.map