import{u as U,f as se,g as te,h as Y,i as le,P as ae,j as re,k as ue,l as F,m as A,n as ie,w as M,p as t,q as oe,R as O,s as ne,v as ce,x as ve,C as pe,y as he,z as de,A as ye,B as me,D as ge,E as fe,F as He,G as $,H as j,I as Re,J as Q,K as we}from"./app-BqZQ35VP.js";const Ee=["/","/posts/about.html","/posts/flows/flows1/F2024001_%E8%AE%A4%E7%9F%A5%E5%9F%BA%E7%A1%80.html","/posts/news/news1/N202405.html","/posts/tools/tools2/TBa_%E5%9B%BE%E4%B9%A6%E8%B5%84%E6%BA%90.html","/posts/tools/tools2/TBb_%E6%9C%AA%E6%95%B4%E7%90%86.html","/posts/tools/tools3/TAa.html","/404.html"],ke="SEARCH_PRO_QUERY_HISTORY",g=U(ke,[]),Ae=()=>{const{queryHistoryCount:l}=Q,a=l>0;return{enabled:a,queryHistory:g,addQueryHistory:r=>{a&&(g.value=Array.from(new Set([r,...g.value.slice(0,l-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},L=l=>Ee[l.id]+("anchor"in l?`#${l.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=Q,f=U(Qe,[]),qe=()=>{const l=I>0;return{enabled:l,resultHistory:f,addResultHistory:a=>{if(l){const r={link:L(a),display:a.display};"header"in a&&(r.header=a.header),f.value=[r,...f.value.slice(0,I-1)]}},removeResultHistory:a=>{f.value=[...f.value.slice(0,a),...f.value.slice(a+1)]}}},xe=l=>{const a=pe(),r=Y(),q=he(),i=F(0),w=A(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:x}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:C=h=>h,splitWord:S,suggestionsFilter:T,...m}=a.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(h=>C(h,R,r.value,q.value)).then(h=>{i.value-=1,d.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(d.value=[])})):d.value=[]},Q.searchDelay-Q.suggestDelay);M([l,r],([c])=>H(c),{immediate:!0}),ge(()=>{x()})}),{isSearching:w,results:d}};var Se=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:a}){const r=te(),q=Y(),i=le(ae),{enabled:w,addQueryHistory:d,queryHistory:y,removeQueryHistory:x}=Ae(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:C}=qe(),S=w||H,T=re(l,"queries"),{results:m,isSearching:h}=xe(T),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),_=A(()=>S&&(y.value.length>0||c.value.length>0)),B=A(()=>m.value.length>0),b=A(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=b.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},N=()=>{p.value<b.value.contents.length-1?p.value+=1:K()},V=()=>{p.value>0?p.value-=1:J()},D=e=>e.map(s=>we(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,k=""]=He(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",D([o,...n,k])))}return e.display.map(s=>t("div",D(s)))},E=()=>{v.value=0,p.value=0,a("updateQuery",""),a("close")},X=()=>w?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{a("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(O,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{E()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>D(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null;return ie("keydown",e=>{if(l.isFocusing){if(B.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=b.value.contents[p.value];d(l.queries.join(" ")),R(s),r.push(L(s)),E()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(a("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),E())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!B.value:!_.value}],id:"search-pro-results"},l.queries.length?h.value?t(oe,{hint:i.value.searching}):B.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const k=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:k}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const P=k&&p.value===ee;return t(O,{to:L(n),class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{d(l.queries.join(" ")),R(n),E()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:S?_.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Se as default};
