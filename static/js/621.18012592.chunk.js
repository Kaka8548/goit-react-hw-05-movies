"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[621],{275:function(e,n,t){t.d(n,{h:function(){return h}});var r=t(671),i=t(144),a=t(274),c=t(359),o=t(263),s=(0,c.Z)("API_KEY"),u=(0,c.Z)("API_URL"),h=new(function(){function e(){(0,r.Z)(this,e),Object.defineProperty(this,s,{writable:!0,value:"65e6f4aac7e3640c780d24b1205717d3"}),Object.defineProperty(this,u,{writable:!0,value:"https://api.themoviedb.org/3"}),this.endpoint=null,this.query=null}return(0,i.Z)(e,[{key:"fetchMovies",value:function(){var e=new URLSearchParams({api_key:(0,a.Z)(this,s)[s],query:this.query});return o.Z.get("".concat((0,a.Z)(this,u)[u]).concat(this.searchType,"?").concat(e))}}]),e}())},621:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r,i,a,c,o,s=t(861),u=t(439),h=t(757),l=t.n(h),f=t(791),p=t(689),v=t(168),d=t(444),Z=d.ZP.ul(r||(r=(0,v.Z)(["\n  margin-top: 15px;\n"]))),m=d.ZP.li(i||(i=(0,v.Z)(["\n  & + & {\n    margin-top: 10px;\n  }\n"]))),x=d.ZP.p(a||(a=(0,v.Z)(["\n  font-family: 'FixelRegular';\n  font-size: 16px;\n"]))),g=d.ZP.p(c||(c=(0,v.Z)([""]))),w=d.ZP.p(o||(o=(0,v.Z)(["\n  margin-top: 15px;\n  font-family: 'FixelRegular';\n"]))),y=t(275),_=t(184);function P(){var e=(0,p.UO)().movieId,n=(0,f.useState)([]),t=(0,u.Z)(n,2),r=t[0],i=t[1];return(0,f.useEffect)((function(){if(r){var n=y.h;n.endpoint="/movie/".concat(e,"/reviews"),function(){t.apply(this,arguments)}()}function t(){return(t=(0,s.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.fetchMovies();case 3:t=e.sent,i(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}),[r,e]),(0,_.jsx)(_.Fragment,{children:0===r.length?(0,_.jsx)(w,{children:"There are no reviews for this movie \ud83d\ude43"}):(0,_.jsx)(Z,{children:r.map((function(e){return(0,_.jsxs)(m,{children:[(0,_.jsxs)(x,{children:[e.author,": "]}),(0,_.jsx)(g,{children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=621.18012592.chunk.js.map