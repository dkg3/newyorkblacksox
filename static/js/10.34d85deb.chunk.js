(this.webpackJsonpnewyorkblacksox=this.webpackJsonpnewyorkblacksox||[]).push([[10],{176:function(e,t,a){"use strict";a.r(t);var s=a(1),n=(a(0),a(5)),r=a(22),c=a(52),l=a(53);t.default=function(){return Object(s.jsx)(r.a,{title:"Stats",description:"Stats Page for the New York Blacksox",children:Object(s.jsxs)("article",{className:"post",id:"stats",children:[Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h2",{"data-testid":"heading",children:Object(s.jsx)(n.b,{to:"/stats",children:"Stats"})})})}),Object(s.jsx)(c.a,{}),Object(s.jsx)(l.a,{})]})})}},50:function(e,t,a){"use strict";var s=a(1),n=(a(0),function(e){var t=e.label,a=e.link,n=e.value,r=e.format;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{width:"70%",children:t}),Object(s.jsx)("td",{children:a?Object(s.jsx)("a",{href:a,children:r(n)}):r(n)})]})});n.defaultProps={format:function(e){return e},link:null,value:null};var r=n;t.a=function(e){var t=e.data;return Object(s.jsx)("table",{children:Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(r,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})}},52:function(e,t,a){"use strict";var s=a(1),n=a(0),r=a(50),c=a(21),l=function(){var e=Object(n.useState)(),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1990-02-05T09:24:00");r(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(s.jsx)(s.Fragment,{children:a})},i=[{key:"age",label:"Current age",value:Object(s.jsx)(l,{})},{key:"countries",label:"Countries visited",value:53,link:"https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2"},{key:"location",label:"Current city",value:"New York, NY"}];t.a=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Some stats about me"}),Object(s.jsx)(r.a,{data:i})]})}},53:function(e,t,a){"use strict";var s=a(1),n=a(61),r=a.n(n),c=a(51),l=a(62),i=a(21),o=a(0),u=a(50),b=a(58),j=a.n(b),h=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(e){return j()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}];t.a=function(){var e=Object(o.useState)(h),t=Object(i.a)(e,2),a=t[0],n=t[1],b=Object(o.useCallback)(Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(h.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(o.useEffect)((function(){b()}),[b]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Some stats about this site"}),Object(s.jsx)(u.a,{data:a})]})}}}]);
//# sourceMappingURL=10.34d85deb.chunk.js.map