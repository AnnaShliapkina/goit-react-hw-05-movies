"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[557],{725:function(t,n,e){e.d(n,{s:function(){return c}});var r=e(470),a=e(6731),u=e(184),c=function(t){var n=t.movies,e=(0,r.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){var n=t.id,r=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:e},children:r})},n)}))})})}},1840:function(t,n,e){e.d(n,{Df:function(){return s},IQ:function(){return p},Jh:function(){return l},XT:function(){return d},rs:function(){return f}});var r=e(5861),a=e(4687),u=e.n(a),c=e(4569),i=e.n(c),o="?api_key=f5218897c19d56d1ba7debc5ad0a32a8";i().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n).concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("search/movie".concat(o,"&query=").concat(n,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews").concat(o,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},1557:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,a=e(885),u=e(2791),c=e(6731),i=e(168),o=e(8117).Z.form(r||(r=(0,i.Z)(["\n  padding-left: 100px;\n"]))),s=e(184),f=function(){var t=(0,c.lr)(),n=(0,a.Z)(t,2),e=n[0],r=n[1],i=(0,u.useRef)();(0,u.useEffect)((function(){var t=e.get("query");t&&(i.current.value=t)}),[e]);return(0,s.jsx)("div",{children:(0,s.jsxs)(o,{action:"",onSubmit:function(t){t.preventDefault(),r({query:t.target.search.value})},children:[(0,s.jsx)("input",{ref:i,type:"text",name:"search"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})})},p=e(725),d=e(1840),l=function(){var t=(0,u.useState)(null),n=(0,a.Z)(t,2),e=n[0],r=n[1],i=(0,c.lr)(),o=(0,a.Z)(i,1)[0];return(0,u.useEffect)((function(){var t=o.get("query");t&&d.XT(t).then((function(t){return r(t)}))}),[o]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{}),e&&(0,s.jsx)(p.s,{movies:e}),0===(null===e||void 0===e?void 0:e.length)&&(0,s.jsx)("p",{children:"Not found"})]})}}}]);
//# sourceMappingURL=557.24b13d9d.chunk.js.map