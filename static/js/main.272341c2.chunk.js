(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),u=n.n(c),o=n(2),l=n(4),s=n.n(l),i=n(12),m=n(13),f=n.n(m),p=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)(function(){Object(i.a)(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://jsonplaceholder.typicode.com/".concat(e));case 2:n=t.sent,c(n.data);case 4:case"end":return t.stop()}},t,this)}))(e)},[e]),a},d=function(e){var t=e.resource,n=p(t);return a.a.createElement("ul",null,n.map(function(e){return a.a.createElement("li",{key:e.id},e.title)}))},E=function(){var e=p("users");return a.a.createElement("ul",null,e.map(function(e){return a.a.createElement("li",{key:e.id},e.name)}))};u.a.render(a.a.createElement(function(){var e=Object(r.useState)("posts"),t=Object(o.a)(e,2),n=t[0],c=t[1];return a.a.createElement("div",null,a.a.createElement(E,null),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return c("posts")}},"Posts"),a.a.createElement("button",{onClick:function(){return c("todos")}},"Todos")),a.a.createElement(d,{resource:n}))},null),document.querySelector("#root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.272341c2.chunk.js.map