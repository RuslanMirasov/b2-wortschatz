(self.webpackChunkb2_wortschatz=self.webpackChunkb2_wortschatz||[]).push([[977],{7987:function(t,n,r){"use strict";function e(t,n){var r=Math.floor(Math.random()*t)+1;do{r=Math.floor(Math.random()*t)+1}while(n&&r===n);return r}function a(){return(new Date).getTime().toString()+Math.random().toString().substr(2,5)}function c(t,n){var r=new Set(n.map((function(t){return t.toLowerCase()})));return t.split(/\b/).map((function(t){var n=t.toLowerCase();return r.has(n)?"<b>".concat(t,"</b>"):t})).join("")}function o(){for(var t=Math.floor(6*Math.random())+1,n=Math.floor(6*Math.random())+1;n===t;)n=Math.floor(6*Math.random())+1;return[t,n]}r.d(n,{LI:function(){return a},MH:function(){return e},Ot:function(){return c},ri:function(){return o}})},8074:function(t,n,r){"use strict";r.d(n,{Z:function(){return i}});var e="BreadCrumbs_BreadCrumbs__iuTfE",a=r(1087),c=r(7987),o=r(184),i=function(t){var n=t.location,r=t.books,i=n.pathname.split("/"),s=[{text:"B\xfccher",url:"../"}];return i[1]&&s.push({text:r[Number(i[1])-1].name,url:"../".concat(i[1])}),i[2]&&s.push({text:r[Number(i[1])-1].thems[Number(i[2])-1].name,url:"../".concat(i[1],"/").concat(i[2])}),i[3]&&s.push({text:r[Number(i[1])-1].thems[Number(i[2])-1].words[Number(i[3])-1].id,url:"../".concat(i[1],"/").concat(i[2],"/").concat(i[3])}),(0,o.jsx)("ul",{className:e,children:i.map((function(t,n){return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:s[n].url,children:s[n].text})},(0,c.LI)())}))})}},204:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var e=r(2791),a="Game_WordTitle__15-P4",c="Game_Dialog__oHr3H",o="Game_DialogItem__RvsNM",i="Game_Avatar__sclxc",s="Game_GameButtons__c2EpP",u=r(6717),d=r(8074),f=r(7689),l=r(1087),m=r(9487),p=r(7987),h=r(184),x=function(){var t=(0,f.TH)(),n=t.pathname.split("/"),x=m.Z.find((function(t){return t.id===Number(n[1])})),j=x.thems.find((function(t){return t.id===Number(n[2])})),b=j.words.find((function(t){return t.id===Number(n[3])})),_=j.words.length,g=(0,p.ri)(),N=b.id,v=b.examples,M=b.name;return(0,e.useEffect)((function(){document.querySelectorAll(".exampleEl").forEach((function(t){var n=t.textContent,r=(0,p.Ot)(n,M.split(" "));t.innerHTML=r}))}),[M]),(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(d.Z,{location:t,books:m.Z}),(0,h.jsx)("h1",{className:a,children:M}),(0,h.jsx)("div",{className:c,children:v.map((function(t,n){return(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("div",{className:i,children:(0,h.jsx)("img",{src:r(6205)("./".concat(g[n],".jpg")),alt:"partner"})}),(0,h.jsx)("p",{className:"exampleEl",children:t})]},(0,p.LI)())}))}),(0,h.jsx)("div",{className:s,children:(0,h.jsx)(l.rU,{to:"../".concat(x.id,"/").concat(j.id,"/").concat((0,p.MH)(_,N)),className:"button",children:"Weiter"})})]})},j=function(){return(0,h.jsx)(x,{})}},6205:function(t,n,r){var e={"./1.jpg":231,"./2.jpg":9823,"./3.jpg":479,"./4.jpg":7105,"./5.jpg":7874,"./6.jpg":3828};function a(t){var n=c(t);return r(n)}function c(t){if(!r.o(e,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e[t]}a.keys=function(){return Object.keys(e)},a.resolve=c,t.exports=a,a.id=6205},231:function(t,n,r){"use strict";t.exports=r.p+"static/media/1.4cdc3a90c589ec3762af.jpg"},9823:function(t,n,r){"use strict";t.exports=r.p+"static/media/2.d9a88d645a5ef7235833.jpg"},479:function(t,n,r){"use strict";t.exports=r.p+"static/media/3.8b63292d4a2c69a453c6.jpg"},7105:function(t,n,r){"use strict";t.exports=r.p+"static/media/4.3c93a7203c880132527c.jpg"},7874:function(t,n,r){"use strict";t.exports=r.p+"static/media/5.cf35b15ac3bae3248adf.jpg"},3828:function(t,n,r){"use strict";t.exports=r.p+"static/media/6.4692ef3ab8897dc757ea.jpg"}}]);
//# sourceMappingURL=977.6f77e01a.chunk.js.map