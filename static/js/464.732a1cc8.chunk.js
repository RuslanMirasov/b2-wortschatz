(self.webpackChunkb2_wortschatz=self.webpackChunkb2_wortschatz||[]).push([[464],{7987:function(t,e,n){"use strict";function r(t){return Math.floor(Math.random()*t)+1}function c(){return(new Date).getTime().toString()+Math.random().toString().substr(2,5)}n.d(e,{L:function(){return c},M:function(){return r}})},8074:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r="BreadCrumbs_BreadCrumbs__iuTfE",c=n(1087),s=n(7987),i=n(184),o=function(t){var e=t.location,n=t.books,o=e.pathname.split("/"),a=[{text:"B\xfccher",url:"../"}];return console.log(n[Number(o[1])-1]),o[1]&&a.push({text:n[Number(o[1])-1].name,url:"../".concat(o[1])}),o[2]&&a.push({text:n[Number(o[1])-1].thems[Number(o[2])-1].name,url:"../".concat(o[1],"/").concat(o[2])}),o[3]&&a.push({text:n[Number(o[1])-1].thems[Number(o[2])-1].words[Number(o[3])-1].id,url:"../".concat(o[1],"/").concat(o[2],"/").concat(o[3])}),(0,i.jsx)("ul",{className:r,children:o.map((function(t,e){return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:a[e].url,children:a[e].text})},(0,s.L)())}))})}},3339:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(6717),c="ThemesCollection_ThemesCollection__2pU8F",s="ThemesCollection_ThemesCollectionItem__jBNGr",i=n(8074),o=n(7689),a=n(1087),u=n(9487),p=n(184),l=function(){var t=0,e=(0,o.TH)(),r=e.pathname.split("/")[1],l=u.Z.find((function(t){return t.id===Number(r)})),d=l.id,f=l.level,m=l.name,h=l.thems;return h.forEach((function(e){t+=e.words.length})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{location:e,books:u.Z}),(0,p.jsx)("img",{src:n(4528)("./".concat(d,".jpg")),alt:"book"}),(0,p.jsx)("h1",{children:m}),(0,p.jsx)("p",{children:f}),(0,p.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u043c: ",h.length]}),(0,p.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0432: ",t]}),(0,p.jsx)("div",{className:c,children:h.map((function(t){var n=t.id,r=t.name,c=t.words;return(0,p.jsxs)(a.rU,{to:"".concat(e.pathname,"/").concat(n),className:s,children:[(0,p.jsxs)("p",{children:["\u041d\u043e\u043c\u0435\u0440:",n]}),(0,p.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",r]}),(0,p.jsxs)("p",{children:["\u041a-\u0432\u043e \u0441\u043b\u043e\u0432:",c.length]})]},n)}))})]})},d=function(){return(0,p.jsx)(r.Z,{title:"W\xe4hlen Sie ein Thema",children:(0,p.jsx)(l,{})})}},4528:function(t,e,n){var r={"./1.jpg":2677,"./2.jpg":656,"./3.jpg":3777,"./4.jpg":2962,"./5.jpg":3997,"./6.jpg":2319,"./7.jpg":260,"./8.jpg":8055};function c(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}c.keys=function(){return Object.keys(r)},c.resolve=s,t.exports=c,c.id=4528},2677:function(t,e,n){"use strict";t.exports=n.p+"static/media/1.0e9e1fe2d00b43e48cf3.jpg"},656:function(t,e,n){"use strict";t.exports=n.p+"static/media/2.5e3a7f97e86893508386.jpg"},3777:function(t,e,n){"use strict";t.exports=n.p+"static/media/3.80bcb61579c269b02afa.jpg"},2962:function(t,e,n){"use strict";t.exports=n.p+"static/media/4.4b437e4f8f6879d661c7.jpg"},3997:function(t,e,n){"use strict";t.exports=n.p+"static/media/5.84610243a2bd665e9740.jpg"},2319:function(t,e,n){"use strict";t.exports=n.p+"static/media/6.533ae8532fccfaf98ee7.jpg"},260:function(t,e,n){"use strict";t.exports=n.p+"static/media/7.517b2cbe98b0fe1aa69c.jpg"},8055:function(t,e,n){"use strict";t.exports=n.p+"static/media/8.7ff72003e28ddabc77d5.jpg"}}]);
//# sourceMappingURL=464.732a1cc8.chunk.js.map