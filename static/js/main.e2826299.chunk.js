(this["webpackJsonpreact-calc"]=this["webpackJsonpreact-calc"]||[]).push([[0],{31:function(e,n,c){},32:function(e,n,c){},33:function(e,n,c){},35:function(e,n,c){},36:function(e,n,c){},37:function(e,n,c){},47:function(e,n){},48:function(e,n,c){"use strict";c.r(n);var t,i=c(2),l=c.n(i),s=c(20),r=c.n(s),a=(c(31),c(5)),d=(c(32),c(33),c(1)),j=function(e){return Object(d.jsx)("div",{className:"button-wrapper ".concat((n=e.children,isNaN(n)&&"."!==n&&"="!==n?"operator":null)),onClick:function(){return e.handleClick(e.children)},children:e.children});var n},o=(c(35),function(e){return Object(d.jsx)("div",{className:"input",children:e.input})}),h=(c(36),function(e){return Object(d.jsx)("div",{className:"clear-button",onClick:e.handleClear,children:e.children})}),b=c(50),u=(c(37),function(e){var n=e.goals.map((function(e){return Object(d.jsx)("div",{className:"log-list",children:e.text})}));return Object(d.jsx)("div",{children:n})}),O=c(21),x=c(15),f=x.a.div(t||(t=Object(O.a)(["\n    visibility: ",";\n    background-color: #708090;\n    color: white;\n    padding: 16px;\n    position: absolute;\n    top: ","px;\n    right: 16px;\n    z-index: 999;\n    transition: top 0.5s ease;\n"])),(function(e){return e.visible}),(function(e){return e.top})),v=function(e){return Object(d.jsx)(l.a.Fragment,{children:Object(d.jsx)(f,{top:e.top,visible:e.visibility,children:"A user has logged a calculation!"})})};var p=function(){var e=Object(i.useState)(!1),n=Object(a.a)(e,2),c=n[0],t=n[1],l=Object(i.useState)([]),s=Object(a.a)(l,2),r=s[0],O=s[1],x=Object(i.useState)(""),f=Object(a.a)(x,2),p=f[0],C=f[1],k="",m={},g=function(e){C(p+e)};return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)("div",{className:"calc-wrapper",children:[Object(d.jsx)(o,{input:p}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(j,{handleClick:g,children:"7"}),Object(d.jsx)(j,{handleClick:g,children:"8"}),Object(d.jsx)(j,{handleClick:g,children:"9"}),Object(d.jsx)(j,{handleClick:g,children:"/"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(j,{handleClick:g,children:"4"}),Object(d.jsx)(j,{handleClick:g,children:"5"}),Object(d.jsx)(j,{handleClick:g,children:"6"}),Object(d.jsx)(j,{handleClick:g,children:"*"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(j,{handleClick:g,children:"1"}),Object(d.jsx)(j,{handleClick:g,children:"2"}),Object(d.jsx)(j,{handleClick:g,children:"3"}),Object(d.jsx)(j,{handleClick:g,children:"+"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(j,{handleClick:g,children:"."}),Object(d.jsx)(j,{handleClick:g,children:"0"}),Object(d.jsx)(j,{handleClick:function(){return k=b.a(p),m={id:Math.random().toString,text:p+" = "+k},10===r.length&&r.shift(),O((function(e){return e.concat(m)})),C(k),void t(!0)},children:"="}),Object(d.jsx)(j,{handleClick:g,children:"-"})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(h,{handleClear:function(){return C("")},children:"Clear"})})]}),Object(d.jsx)("div",{className:"main-logs",children:Object(d.jsx)(u,{goals:r})}),Object(d.jsxs)("div",{className:"notifs",children:[Object(d.jsx)(v,{top:16,visibility:c?"visible":"hidden"}),Object(d.jsx)("button",{className:"ok-button",onClick:function(){t(!1)},children:"OK"})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(n){var c=n.getCLS,t=n.getFID,i=n.getFCP,l=n.getLCP,s=n.getTTFB;c(e),t(e),i(e),l(e),s(e)}))};r.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),C()}},[[48,1,2]]]);
//# sourceMappingURL=main.e2826299.chunk.js.map