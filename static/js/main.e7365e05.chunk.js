(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),r=c(1),l=function(e){var t=e.link,c=e.text;return Object(r.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:c})},d=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(l,{link:"/",text:"Home"}),Object(r.jsx)(l,{link:"/tabs",text:"Tabs"})]})})})},o=(c(0),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),x=function(){var e=Object(i.h)().tabId,t=o.find((function(t){return t.id===e}));return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:o.map((function(t){var c=t.id,a=t.title;return Object(r.jsx)("li",{className:j()({"is-active":c===e}),"data-cy":"Tab",children:Object(r.jsx)(s.b,{to:"/tabs/".concat(c),"data-cy":"TabLink",children:a})},c)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})]})},h=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},O=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},m=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(h,{})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(O,{})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(x,{})})]})]})})})]})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e7365e05.chunk.js.map