(self.webpackChunkb2_wortschatz=self.webpackChunkb2_wortschatz||[]).push([[464],{7987:function(t,n,e){"use strict";e.d(n,{$E:function(){return s},LI:function(){return o},MH:function(){return c},Ot:function(){return i},ri:function(){return a}});var r=e(3433);function c(t,n){var e=Math.floor(Math.random()*t)+1;do{e=Math.floor(Math.random()*t)+1}while(n&&e===n);return e}function o(){return(new Date).getTime().toString()+Math.random().toString().substr(2,5)}function i(t,n){var e=new Set(n.map((function(t){return t.toLowerCase()})));return t.split(/\b/).map((function(t){var n=t.toLowerCase();return e.has(n)?"<b>".concat(t,"</b>"):t})).join("")}function a(){for(var t=Math.floor(6*Math.random())+1,n=Math.floor(6*Math.random())+1;n===t;)n=Math.floor(6*Math.random())+1;return[t,n]}function s(t){for(var n=(0,r.Z)(t),e=n.length-1;e>0;e--){var c=Math.floor(Math.random()*(e+1)),o=[n[c],n[e]];n[e]=o[0],n[c]=o[1]}return n}},8074:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var r="BreadCrumbs_BreadCrumbs__iuTfE",c=e(1087),o=e(7987),i=e(184),a=function(t){var n=t.location,e=t.books,a=n.pathname.split("/"),s=[{text:"B\xfccher",url:"../"}];return a[1]&&s.push({text:e[Number(a[1])-1].name,url:"../".concat(a[1])}),a[2]&&s.push({text:e[Number(a[1])-1].thems[Number(a[2])-1].name,url:"../".concat(a[1],"/").concat(a[2])}),a[3]&&s.push({text:e[Number(a[1])-1].thems[Number(a[2])-1].words[Number(a[3])-1].id,url:"../".concat(a[1],"/").concat(a[2],"/").concat(a[3])}),(0,i.jsx)("ul",{className:r,children:a.map((function(t,n){return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:s[n].url,children:s[n].text})},(0,o.LI)())}))})}},3339:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var r="ThemesCollection_ThemesCollection__2pU8F",c="ThemesCollection_ThemesCollectionItem__jBNGr",o=e(8074),i=e(6717),a=e(7689),s=e(1087),u=e(9487),f=e(184),l=function(){var t=0,n=(0,a.TH)(),l=n.pathname.split("/")[1],h=u.Z.find((function(t){return t.id===Number(l)})),d=h.id,p=h.level,m=h.name,j=h.thems;return j.forEach((function(n){t+=n.words.length})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.Z,{children:(0,f.jsx)(o.Z,{location:n,books:u.Z})}),(0,f.jsxs)(i.Z,{children:[(0,f.jsx)("img",{src:e(4528)("./".concat(d,".jpg")),alt:"book"}),(0,f.jsx)("h1",{children:m}),(0,f.jsx)("p",{children:p}),(0,f.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u043c: ",j.length]}),(0,f.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0432: ",t]})]}),(0,f.jsx)(i.Z,{title:"W\xe4hlen Sie ein Thema",children:(0,f.jsx)("div",{className:r,children:j.map((function(t){var e=t.id,r=t.name,o=t.words;return(0,f.jsxs)(s.rU,{to:"".concat(n.pathname,"/").concat(e),className:c,children:[(0,f.jsxs)("p",{children:["\u041d\u043e\u043c\u0435\u0440:",e]}),(0,f.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",r]}),(0,f.jsxs)("p",{children:["\u041a-\u0432\u043e \u0441\u043b\u043e\u0432:",o.length]})]},e)}))})})]})},h=function(){return(0,f.jsx)(l,{})}},4528:function(t,n,e){var r={"./1.jpg":2677,"./2.jpg":656,"./3.jpg":3777,"./4.jpg":2962,"./5.jpg":3997,"./6.jpg":2319,"./7.jpg":260,"./8.jpg":8055};function c(t){var n=o(t);return e(n)}function o(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}c.keys=function(){return Object.keys(r)},c.resolve=o,t.exports=c,c.id=4528},2677:function(t,n,e){"use strict";t.exports=e.p+"static/media/1.0e9e1fe2d00b43e48cf3.jpg"},656:function(t,n,e){"use strict";t.exports=e.p+"static/media/2.5e3a7f97e86893508386.jpg"},3777:function(t,n,e){"use strict";t.exports=e.p+"static/media/3.80bcb61579c269b02afa.jpg"},2962:function(t,n,e){"use strict";t.exports=e.p+"static/media/4.4b437e4f8f6879d661c7.jpg"},3997:function(t,n,e){"use strict";t.exports=e.p+"static/media/5.84610243a2bd665e9740.jpg"},2319:function(t,n,e){"use strict";t.exports=e.p+"static/media/6.533ae8532fccfaf98ee7.jpg"},260:function(t,n,e){"use strict";t.exports=e.p+"static/media/7.517b2cbe98b0fe1aa69c.jpg"},8055:function(t,n,e){"use strict";t.exports=e.p+"static/media/8.7ff72003e28ddabc77d5.jpg"}}]);
//# sourceMappingURL=464.47d703d9.chunk.js.map