"use strict";(self.webpackChunkb2_wortschatz=self.webpackChunkb2_wortschatz||[]).push([[55],{7987:function(n,t,r){function e(n){return Math.floor(Math.random()*n)+1}function s(){return(new Date).getTime().toString()+Math.random().toString().substr(2,5)}r.d(t,{L:function(){return s},M:function(){return e}})},8074:function(n,t,r){r.d(t,{Z:function(){return a}});var e="BreadCrumbs_BreadCrumbs__iuTfE",s=r(1087),c=r(7987),o=r(184),a=function(n){var t=n.location,r=n.books,a=t.pathname.split("/"),i=[{text:"B\xfccher",url:"../"}];return console.log(r[Number(a[1])-1]),a[1]&&i.push({text:r[Number(a[1])-1].name,url:"../".concat(a[1])}),a[2]&&i.push({text:r[Number(a[1])-1].thems[Number(a[2])-1].name,url:"../".concat(a[1],"/").concat(a[2])}),a[3]&&i.push({text:r[Number(a[1])-1].thems[Number(a[2])-1].words[Number(a[3])-1].id,url:"../".concat(a[1],"/").concat(a[2],"/").concat(a[3])}),(0,o.jsx)("ul",{className:e,children:a.map((function(n,t){return(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:i[t].url,children:i[t].text})},(0,c.L)())}))})}},635:function(n,t,r){r.r(t),r.d(t,{default:function(){return j}});var e=r(6717),s="WordsCollection_TitleBox__qLn20",c="WordsCollection_WordsList__0TosX",o="WordsCollection_WordsListItem__FSlNn",a="WordsCollection_Number__-rppR",i="WordsCollection_Name__GiwmB",l="WordsCollection_Progress__Cv0WJ",u="WordsCollection_ProcentLine__Coj2f",d=r(8074),h=r(7689),m=r(1087),x=r(9487),_=r(7987),f=r(184),p=function(){var n=(0,h.TH)(),t=n.pathname.split("/"),r=x.Z.find((function(n){return n.id===Number(t[1])})).thems.find((function(n){return n.id===Number(t[2])}));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{location:n,books:x.Z}),(0,f.jsxs)("div",{className:s,children:[(0,f.jsxs)("h1",{children:[r.name," ",(0,f.jsxs)("span",{children:["(",r.words.length," W\xf6rtern)"]})]}),(0,f.jsx)(m.rU,{to:"".concat(n.pathname,"/").concat((0,_.M)(r.words.length)),className:"button",children:(0,f.jsx)("p",{children:"Beginn des Unterrichts"})})]}),(0,f.jsx)("ul",{className:c,children:r.words.map((function(t){var r=t.id,e=t.name,s=25*t.progress;return(0,f.jsxs)(m.rU,{className:o,to:"".concat(n.pathname,"/").concat(r),children:[(0,f.jsx)("span",{className:a,children:r}),(0,f.jsx)("p",{className:i,children:e}),(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("div",{className:u,style:{width:"".concat(s,"%")}}),(0,f.jsxs)("p",{children:[s,"%"]})]})]},r)}))}),(0,f.jsx)(m.rU,{to:"".concat(n.pathname,"/").concat((0,_.M)(r.words.length)),className:"button",children:(0,f.jsx)("p",{children:"Beginn des Unterrichts"})})]})},j=function(){return(0,f.jsx)(e.Z,{children:(0,f.jsx)(p,{})})}}}]);
//# sourceMappingURL=55.72f96663.chunk.js.map