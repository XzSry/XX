import{r as f,o as l,c as x,u as j,a as d,b as k,d as u,e as a,t as y,p as w,f as A,g as p,w as h,F as C,h as g,i as B,j as D,k as N,l as I,m as i,n as T,q as $}from"./vendor.e5be5e4b.js";const H=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};H();var _=(e,n)=>{const s=e.__vccOpts||e;for(const[o,t]of n)s[o]=t;return s};const S={};function L(e,n){const s=f("router-view");return l(),x(s)}var O=_(S,[["render",L]]);const z={name:"Home",setup(){const e=j();let n=d(!0),s=k({contA:"asdasd",contB:"\u6211\u5C31\u662F\u6211\uFF0C\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"});function o(){e.push({path:"/dunj"})}return{goDunj:o,contText:s,Asd:n}}},v=e=>(w("data-v-4ce9b96b"),e=e(),A(),e),V={class:"home"},F=v(()=>a("header",null,[a("a",{href:"#",class:"logo animate__animated animate__hinge"},"XX\u535A\u5BA2")],-1)),R={class:"content"},X=v(()=>a("div",{class:"head-portrait"},"Xz",-1)),q=v(()=>a("p",{class:"name"},"\u554A\u54A7\u54A7",-1)),E={class:"cont"},M={class:"cont1"};function P(e,n,s,o,t,r){return l(),u("div",V,[F,a("div",R,[X,q,a("div",E,[a("p",M,y(o.Asd==!0?o.contText.contA:o.contText.contB),1)]),a("ul",null,[a("li",null,[a("button",{onClick:n[0]||(n[0]=c=>e.contChange(o.Asd=!o.Asd))},"\u5173\u4E8E\u6211")]),a("li",null,[a("button",{onClick:n[1]||(n[1]=c=>e.$router.push("/blog"))},"\u8FDB\u5165\u535A\u5BA2")]),a("li",null,[a("button",{onClick:n[2]||(n[2]=c=>o.goDunj())},"\u949D\u89D2")])])])])}var K=_(z,[["render",P],["__scopeId","data-v-4ce9b96b"]]);const W={},G=a("h1",null,"\u8FD9\u4E2A\u662F\u535A\u5BA2",-1),J=g("\u9996\u9875"),Q=g("\u535A\u5BA2");function U(e,n){const s=f("router-link"),o=f("router-view");return l(),u(C,null,[G,p(s,{to:"/"},{default:h(()=>[J]),_:1}),p(s,{to:"/blog"},{default:h(()=>[Q]),_:1}),p(o)],64)}var Y=_(W,[["render",U]]);const Z={name:"Dunj",setup(){}},ee={id:"Dunj"},te=B('<h2 data-v-0f8bfb79><span style="--i:1;" data-v-0f8bfb79>\u6B22</span><span style="--i:2;" data-v-0f8bfb79>\u8FCE</span><span style="--i:3;" data-v-0f8bfb79>\u6765</span><span style="--i:4;" data-v-0f8bfb79>\u5230</span><span style="--i:5;margin-left:5vw;" data-v-0f8bfb79>\u68A6</span><span style="--i:6;" data-v-0f8bfb79>\u5E7B</span><span style="--i:7;" data-v-0f8bfb79>\u821E</span><span style="--i:8;" data-v-0f8bfb79>\u5385</span></h2><div class="ready" data-v-0f8bfb79><button data-v-0f8bfb79>Reday!!!</button></div>',2),ne=[te];function oe(e,n,s,o,t,r){return l(),u("div",ee,ne)}var se=_(Z,[["render",oe],["__scopeId","data-v-0f8bfb79"]]);const ae=D({history:N(),routes:[{path:"/",name:"Home",component:K},{path:"/blog",name:"Blog",component:Y},{path:"/dunj",name:"Dunj",component:se}]});const re={id:"toast"},ce={setup(e){let n=d("info"),s=d("default"),o=d(""),t=d(3e3);return I(()=>{setTimeout(()=>{$destroy(!0),$el.parentNode.removeChild($el)},t)}),(r,c)=>(l(),u("div",re,[a("p",{class:T([i(n)?`toast-${i(n)}`:"",i(s)?`size-${i(s)}`:""])},y(i(o)),3)]))}};var ie=_(ce,[["__scopeId","data-v-098d9127"]]);let de=$(ie),b;const le=function(e={}){typeof e=="string"&&(e={message:e}),b=new de({data:e}),document.body.appendChild(b.$mount().$el)},m=$(O);m.use(ae);m.mount("#app");m.use(le);
