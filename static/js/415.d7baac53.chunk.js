"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{275:function(n,t,e){e.d(t,{h:function(){return l}});var i=e(671),r=e(144),a=e(274),o=e(359),c=e(263),s=(0,o.Z)("API_KEY"),u=(0,o.Z)("API_URL"),l=new(function(){function n(){(0,i.Z)(this,n),Object.defineProperty(this,s,{writable:!0,value:"65e6f4aac7e3640c780d24b1205717d3"}),Object.defineProperty(this,u,{writable:!0,value:"https://api.themoviedb.org/3"}),this.endpoint=null,this.query=null}return(0,r.Z)(n,[{key:"fetchMovies",value:function(){var n=new URLSearchParams({api_key:(0,a.Z)(this,s)[s],query:this.query});return c.Z.get("".concat((0,a.Z)(this,u)[u]).concat(this.endpoint,"?").concat(n))}}]),n}())},58:function(n,t,e){e.d(t,{Z:function(){return v}});var i,r,a,o,c=e(168),s=e(444),u=s.ZP.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 45px;\n"]))),l=s.ZP.li(r||(r=(0,c.Z)(["\n  width: calc((100% - 90px) / 3);\n  margin-top: 10px;\n  text-align: left;\n"]))),f=s.ZP.img(a||(a=(0,c.Z)(["\n  margin-bottom: 10px;\n"]))),p=s.ZP.p(o||(o=(0,c.Z)(["\n  font-size: 20px;\n  font-family: 'FixelREgular';\n"]))),h=e(87),d=e(184);function v(n){var t=n.movies,e=n.location,i=n.configSrc;return(0,d.jsx)(u,{children:t.map((function(n){return(0,d.jsx)(l,{children:(0,d.jsxs)(h.rU,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,d.jsx)(f,{loading:"lazy",src:i+n.poster_path,alt:"movie poster"}),(0,d.jsx)(p,{children:n.title})]})},n.id)}))})}},415:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var i=e(861),r=e(439),a=e(757),o=e.n(a),c=e(791),s=e(689),u=e(58),l=e(275),f=e(184);function p(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],a=t[1],p=(0,s.TH)();return(0,c.useEffect)((function(){function n(){return(n=(0,i.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.h.fetchMovies();case 3:t=n.sent,a(t.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}l.h.endpoint="/trending/movie/day",function(){n.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(u.Z,{movies:e,location:p,configSrc:"https://image.tmdb.org/t/p/original"})]})}}}]);
//# sourceMappingURL=415.d7baac53.chunk.js.map