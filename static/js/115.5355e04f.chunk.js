"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{275:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(671),a=n(144),c=n(274),i=n(359),s=n(263),u=(0,i.Z)("API_KEY"),o=(0,i.Z)("API_URL"),f=function(){function e(){(0,r.Z)(this,e),Object.defineProperty(this,u,{writable:!0,value:"65e6f4aac7e3640c780d24b1205717d3"}),Object.defineProperty(this,o,{writable:!0,value:"https://api.themoviedb.org/3"}),this.searchType=null,this.query=null}return(0,a.Z)(e,[{key:"fetchMovies",value:function(){var e=new URLSearchParams({api_key:(0,c.Z)(this,u)[u],query:this.query});return s.Z.get("".concat((0,c.Z)(this,o)[o]).concat(this.searchType,"?").concat(e))}}]),e}()},115:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,a=n(861),c=n(439),i=n(757),s=n.n(i),u=n(275),o=n(791),f=n(689),h=n(168),p=n(444).ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 15px;\n"]))),l=n(184);function v(){var e=(0,f.UO)().movieId,t=(0,o.useState)([]),n=(0,c.Z)(t,2),r=n[0],i=n[1];return(0,o.useEffect)((function(){if(r){var t=new u.Z;t.searchType="/movie/".concat(e,"/credits"),function(){n.apply(this,arguments)}()}function n(){return(n=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchMovies();case 3:n=e.sent,i(n.data.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}),[r,e]),(0,l.jsx)(p,{children:r.map((function(e){return(0,l.jsxs)("li",{children:[e.name,";"]},e.id)}))})}}}]);
//# sourceMappingURL=115.5355e04f.chunk.js.map