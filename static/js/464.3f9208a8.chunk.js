(self.webpackChunkb2_wortschatz=self.webpackChunkb2_wortschatz||[]).push([[464],{7987:function(t,n,e){"use strict";e.d(n,{$E:function(){return s},LI:function(){return c},MH:function(){return o},Ot:function(){return a},kC:function(){return u},ri:function(){return i}});var r=e(3433);function o(t,n){var e=Math.floor(Math.random()*t)+1;do{e=Math.floor(Math.random()*t)+1}while(n&&e===n);return e}function c(){return(new Date).getTime().toString()+Math.random().toString().substr(2,5)}function a(t,n){var e=new Set(n.map((function(t){return t.toLowerCase()})));return t.split(/\b/).map((function(t){var n=t.toLowerCase();return e.has(n)?"<b>".concat(t,"</b>"):t})).join("")}function i(){for(var t=Math.floor(6*Math.random())+1,n=Math.floor(6*Math.random())+1;n===t;)n=Math.floor(6*Math.random())+1;return[t,n]}function s(t){for(var n=(0,r.Z)(t),e=n.length-1;e>0;e--){var o=Math.floor(Math.random()*(e+1)),c=[n[o],n[e]];n[e]=c[0],n[o]=c[1]}return n}function u(t){for(var n=t.split(""),e=n.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),o=[n[r],n[e]];n[e]=o[0],n[r]=o[1]}return n}},8074:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r="BreadCrumbs_BreadCrumbs__iuTfE",o=e(1087),c=e(7987),a=e(184),i=function(t){var n=t.location,e=t.books,i=n.pathname.split("/"),s=[{text:"B\xfccher",url:"../"}];return i[1]&&s.push({text:e[Number(i[1])-1].name,url:"../".concat(i[1])}),i[2]&&s.push({text:e[Number(i[1])-1].thems[Number(i[2])-1].name,url:"../".concat(i[1],"/").concat(i[2])}),i[3]&&s.push({text:e[Number(i[1])-1].thems[Number(i[2])-1].words[Number(i[3])-1].id,url:"../".concat(i[1],"/").concat(i[2],"/").concat(i[3])}),(0,a.jsx)("ul",{className:r,children:i.map((function(t,n){return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:s[n].url,children:s[n].text})},(0,c.LI)())}))})}},3339:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var r="ThemesCollection_ThemesCollection__2pU8F",o="ThemesCollection_ThemesCollectionItem__jBNGr",c=e(8074),a=e(6717),i=e(7689),s=e(1087),u=e(9487),f=e(184),l=function(){var t=0,n=(0,i.TH)(),l=n.pathname.split("/")[1],h=u.Z.find((function(t){return t.id===Number(l)})),d=h.id,p=h.level,m=h.name,j=h.thems;return j.forEach((function(n){t+=n.words.length})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{children:(0,f.jsx)(c.Z,{location:n,books:u.Z})}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)("img",{src:e(4528)("./".concat(d,".jpg")),alt:"book"}),(0,f.jsx)("h1",{children:m}),(0,f.jsx)("p",{children:p}),(0,f.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u043c: ",j.length]}),(0,f.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0432: ",t]})]}),(0,f.jsx)(a.Z,{title:"W\xe4hlen Sie ein Thema",children:(0,f.jsx)("div",{className:r,children:j.map((function(t){var e=t.id,r=t.name,c=t.words;return(0,f.jsxs)(s.rU,{to:"".concat(n.pathname,"/").concat(e),className:o,children:[(0,f.jsxs)("p",{children:["\u041d\u043e\u043c\u0435\u0440:",e]}),(0,f.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",r]}),(0,f.jsxs)("p",{children:["\u041a-\u0432\u043e \u0441\u043b\u043e\u0432:",c.length]})]},e)}))})})]})},h=function(){return(0,f.jsx)(l,{})}},4528:function(t,n,e){var r={"./1.jpg":2677,"./2.jpg":656,"./3.jpg":3777,"./4.jpg":2962,"./5.jpg":3997,"./6.jpg":2319,"./7.jpg":260,"./8.jpg":8055};function o(t){var n=c(t);return e(n)}function c(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=c,t.exports=o,o.id=4528},2677:function(t,n,e){"use strict";t.exports=e.p+"static/media/1.0e9e1fe2d00b43e48cf3.jpg"},656:function(t,n,e){"use strict";t.exports=e.p+"static/media/2.5e3a7f97e86893508386.jpg"},3777:function(t,n,e){"use strict";t.exports=e.p+"static/media/3.80bcb61579c269b02afa.jpg"},2962:function(t,n,e){"use strict";t.exports=e.p+"static/media/4.4b437e4f8f6879d661c7.jpg"},3997:function(t,n,e){"use strict";t.exports=e.p+"static/media/5.84610243a2bd665e9740.jpg"},2319:function(t,n,e){"use strict";t.exports=e.p+"static/media/6.533ae8532fccfaf98ee7.jpg"},260:function(t,n,e){"use strict";t.exports=e.p+"static/media/7.517b2cbe98b0fe1aa69c.jpg"},8055:function(t,n,e){"use strict";t.exports=e.p+"static/media/8.7ff72003e28ddabc77d5.jpg"}}]);
//# sourceMappingURL=464.3f9208a8.chunk.js.map