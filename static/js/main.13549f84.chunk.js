(this.webpackJsonpnewyorkblacksox=this.webpackJsonpnewyorkblacksox||[]).push([[1],{22:function(e,t,n){"use strict";var c=n(1),l=n(0),a=n(16),s=n(3),i=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/newyorkblacksox",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),o=r.NODE_ENV,b=r.REACT_APP_GA_TRACKING_ID;"production"===o&&i.a.initialize(b);var j=function(){var e=Object(s.f)().pathname;return Object(l.useEffect)((function(){"production"===o&&(i.a.set({page:e}),i.a.pageview(e))}),[e]),null},u=n(5),h=n(21),d=[{index:!0,label:"New York Blacksox",path:"/"},{label:"About",path:"/about"},{label:"News",path:"/news"},{label:"Scores",path:"/scores"},{label:"Schedule",path:"/schedule"},{label:"Stats",path:"/stats"},{label:"Roster",path:"/roster"},{label:"Photos",path:"/photos"},{label:"Videos",path:"/videos"},{label:"Archives",path:"/archives"},{label:"Contact",path:"/contact"}],O=Object(l.lazy)((function(){return n.e(5).then(n.t.bind(null,178,7))})),x=function(){var e=Object(l.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return a(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/newyorkblacksox","/images/team.png"),alt:"Blacksox Team Logo"})}),Object(c.jsx)("header",{children:Object(c.jsx)("h2",{children:"New York Blacksox"})})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("p",{children:"This is the official homepage for the New York Blacksox; a New York City adult league baseball club that plays throughout the Spring and Summer."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/about",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 New York Blacksox ",Object(c.jsx)(u.b,{to:"/",children:"newyorkblacksox.com"}),"."]})]})]})},k=function(){var e=Object(s.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},w=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(k,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | New York Blacksox",defaultTitle:"New York Blacksox",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};w.defaultProps={children:null,fullPage:!1,title:null,description:"The New York Blacksox Official Website."};t.a=w},25:function(e,t,n){"use strict";var c=n(1),l=(n(0),n(29)),a=n(30),s=n(31),i=n(32),r=n(33),o=[{link:"https://facebook.com/newyorkblacksox",label:"Facebook",icon:a.faFacebookF},{link:"https://www.instagram.com/newyorkblacksox/",label:"Instagram",icon:s.faInstagram},{link:"https://twitter.com/newyorkblacksox",label:"Twitter",icon:i.faTwitter},{link:"mailto:money.s.2007@gmail.com",label:"Email",icon:r.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(l.a,{icon:e.icon})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n(0),a=n.n(l),s=n(15),i=n(5),r=n(3),o=n(22),b=(n(46),Object(l.lazy)((function(){return Promise.all([n.e(3),n.e(14)]).then(n.bind(null,169))}))),j=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,170))})),u=Object(l.lazy)((function(){return n.e(15).then(n.bind(null,181))})),h=Object(l.lazy)((function(){return n.e(16).then(n.bind(null,171))})),d=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,172))})),O=Object(l.lazy)((function(){return n.e(17).then(n.bind(null,173))})),x=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,174))})),m=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,175))})),p=Object(l.lazy)((function(){return n.e(12).then(n.bind(null,179))})),f=Object(l.lazy)((function(){return n.e(13).then(n.bind(null,180))})),k=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,176))})),w=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,177))})),N=function(){return Object(c.jsx)(i.a,{basename:"/newyorkblacksox",children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(r.a,{path:"/about",component:b}),Object(c.jsx)(r.a,{path:"/news",component:d}),Object(c.jsx)(r.a,{path:"/scores",component:f}),Object(c.jsx)(r.a,{path:"/schedule",component:p}),Object(c.jsx)(r.a,{path:"/stats",component:k}),Object(c.jsx)(r.a,{path:"/roster",component:m}),Object(c.jsx)(r.a,{path:"/photos",component:x}),Object(c.jsx)(r.a,{path:"/videos",component:w}),Object(c.jsx)(r.a,{path:"/archives",component:j}),Object(c.jsx)(r.a,{path:"/contact",component:u}),Object(c.jsx)(r.a,{component:O,status:404})]})})})},y=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(N,{})})},v=document.getElementById("root");v.hasChildNodes()?Object(s.hydrate)(Object(c.jsx)(y,{}),v):Object(s.render)(Object(c.jsx)(y,{}),v)}},[[47,2,4]]]);
//# sourceMappingURL=main.13549f84.chunk.js.map