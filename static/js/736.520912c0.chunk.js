"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c=e(5861),u=e(9439),i=e(4687),s=e.n(i),o=e(6911),p=e(2791),f=e(7689),l=e(168),d=e(5706),h=d.Z.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n\n"]))),v=d.Z.div(a||(a=(0,l.Z)(["\n  text-align: center;\n  width: 200px;\n\n"]))),g=e(184),m=function(){var n=(0,p.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)(""),i=(0,u.Z)(a,2),l=i[0],d=i[1],m=(0,f.UO)().moviesId;return(0,p.useEffect)((function(){if(null!==m){var n=function(){var n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.y)(m);case 3:t=n.sent,r(t.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[m]),(0,g.jsxs)(g.Fragment,{children:[l&&(0,g.jsx)("div",{children:l}),e&&(0,g.jsx)(h,{children:e.map((function(n){return(0,g.jsxs)(v,{children:[(0,g.jsx)("img",{src:null!==n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):"https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg",alt:"".concat(n.name),width:200,height:300,loading:"lazy"}),(0,g.jsx)("p",{children:n.name}),(0,g.jsxs)("p",{children:["Character: ",n.character]})]},n.cast_id)}))})]})}},6911:function(n,t,e){e.d(t,{Ai:function(){return l},DC:function(){return s},l2:function(){return o},r7:function(){return f},y:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org";var i="41b8f9437bf3f899281f8a3f9bdc0891",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.520912c0.chunk.js.map