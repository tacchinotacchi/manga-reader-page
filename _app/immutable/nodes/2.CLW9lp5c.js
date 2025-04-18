import{l as fe,t as $,e as U,c as h}from"../chunks/yXoHkmtp.js";import{i as Ae}from"../chunks/B9uL8g3S.js";import{ad as Ce,E as _e,ae as me,p as be,q as De,a9 as p,u as je,ac as l,z as qe,A as i,aa as r,ab as s,N as G,D as L,a8 as Be}from"../chunks/DZs8gjkn.js";import{s as u}from"../chunks/BSHCUC_7.js";import{i as J,s as x,a as Ie,b as M}from"../chunks/CMGm8hXo.js";import{e as de,i as ve,r as w,s as Ne}from"../chunks/Bt7EvAED.js";import{s as ne,b as ce,d as ue,v as ge,r as ze,m as Oe,a as Re,p as Ue}from"../chunks/B8kLrR2h.js";function K(e,d,v=d){var _=Ce();fe(e,"input",c=>{var g=c?e.defaultValue:e.value;if(g=Q(e)?W(g):g,v(g),_&&g!==(g=d())){var E=e.selectionStart,y=e.selectionEnd;e.value=g??"",y!==null&&(e.selectionStart=E,e.selectionEnd=Math.min(y,e.value.length))}}),(be&&e.defaultValue!==e.value||_e(d)==null&&e.value)&&v(Q(e)?W(e.value):e.value),me(()=>{var c=d();Q(e)&&c===W(e.value)||e.type==="date"&&!c&&!e.value||c!==e.value&&(e.value=c??"")})}function Ge(e,d,v=d){fe(e,"change",_=>{var c=_?e.defaultChecked:e.checked;v(c)}),(be&&e.defaultChecked!==e.checked||_e(d)==null)&&v(e.checked),me(()=>{var _=d();e.checked=!!_})}function Q(e){var d=e.type;return d==="number"||d==="range"}function W(e){return e===""?null:+e}var Je=$('<div class="progress svelte-rxgdlo"><div class="progress-bar svelte-rxgdlo"></div> <div class="progress-text svelte-rxgdlo"> </div></div>'),Ke=$("<li> </li>"),Qe=$('<div class="errors svelte-rxgdlo"><h3> </h3> <ul></ul></div>'),We=$("<div> </div> <!>",1),Xe=$('<div class="chapter"><a> </a></div>'),Ye=$(`<div class="main-container svelte-rxgdlo"><div class="loading-container svelte-rxgdlo"><div class="title svelte-rxgdlo">Input</div> <div>These buttons do NOT upload anything to the internet!</div> <div>They only load the files into your browser's memory.</div> <div>Expected folder structure for the episode: <pre class="code svelte-rxgdlo">script.json
img/
  ch-1/
    01.jpg
    ...
voice/
  ch-1/
    01.ogg
    ...</pre></div> <button class="load-button svelte-rxgdlo"> </button> <div>Expected folder structure for the sound files: <pre class="code svelte-rxgdlo">se/
  001.ogg
  ...
bgm/
  001.ogg
  ...</pre></div> <button class="load-button svelte-rxgdlo"> </button> <div>Use this button before loading a new episode.</div> <button class="load-button svelte-rxgdlo">Reset</button> <!> <!></div> <div class="vertical-divider svelte-rxgdlo"></div> <div class="toc-container svelte-rxgdlo"><div class="title svelte-rxgdlo">Table of Contents</div> <!></div> <div class="vertical-divider svelte-rxgdlo"></div> <div class="settings-container svelte-rxgdlo"><div class="title svelte-rxgdlo">Settings</div> <div class="settings-content svelte-rxgdlo"><div class="settings-content-group svelte-rxgdlo"><label for="voice-volume"> </label> <input type="range" id="voice-volume" min="0" max="100" class="svelte-rxgdlo"></div> <div class="settings-content-group svelte-rxgdlo"><label for="se-volume"> </label> <input type="range" id="se-volume" min="0" max="100" class="svelte-rxgdlo"></div> <div class="settings-content-group svelte-rxgdlo"><label for="bgm-volume"> </label> <input type="range" id="bgm-volume" min="0" max="100" class="svelte-rxgdlo"></div> <div class="settings-content-checkbox-group svelte-rxgdlo"><label for="enable-header">Disable site header</label> <input type="checkbox" id="disable-header"></div></div></div></div>`);function oa(e,d){De(d,!1);const[v,_]=Ie(),c=()=>x(Ue,"$processFiles",v),g=()=>x(Oe,"$manga",v),E=()=>x(ge,"$voiceVolume",v),y=()=>x(ne,"$seVolume",v),X=()=>x(ce,"$bgmVolume",v),he=()=>x(ue,"$disableHeader",v);let S=G(0),f=G(!1),b=G(null);function Y(a){const t=document.createElement("input");t.type="file",t.setAttribute("webkitdirectory",""),t.setAttribute("directory",""),t.onchange=async o=>{if(o.target instanceof HTMLInputElement&&o.target.files&&o.target.files.length>0){L(f,!0);try{L(b,await a(o.target.files,n=>{L(S,n)}))}catch(n){console.error("Error processing folder:",n)}finally{L(f,!1)}}},t.click()}function pe(){Y((a,t)=>c()(a,!1,t))}function xe(){Y((a,t)=>c()(a,!0,t))}Ae();var T=Ye(),F=r(T),k=l(r(F),8),$e=r(k,!0);s(k);var V=l(k,4),ye=r(V,!0);s(V);var H=l(V,4),Z=l(H,2);{var ke=a=>{var t=Je(),o=r(t),n=l(o,2),m=r(n);s(n),s(t),p(()=>{Re(o,`width: ${i(S)??""}%`),u(m,`${i(S)??""}%`)}),h(a,t)};J(Z,a=>{i(f)&&a(ke)})}var Ve=l(Z,2);{var Ee=a=>{var t=We(),o=Be(t),n=r(o);s(o);var m=l(o,2);{var I=N=>{var z=Qe(),O=r(z),Te=r(O);s(O);var ie=l(O,2);de(ie,5,()=>i(b).errors,ve,(Fe,He)=>{var R=Ke(),Pe=r(R,!0);s(R),p(()=>u(Pe,i(He))),h(Fe,R)}),s(ie),s(z),p(()=>u(Te,`Errors (${i(b).errors.length??""}):`)),h(N,z)};J(m,N=>{i(b).errors.length>0&&N(I)})}p(()=>u(n,`Processed ${i(b).processed??""} files`)),h(a,t)};J(Ve,a=>{i(b)!==null&&a(Ee)})}s(F);var P=l(F,4),Le=l(r(P),2);de(Le,1,()=>{var a;return((a=g())==null?void 0:a.chapters)??[]},ve,(a,t,o)=>{var n=Xe(),m=r(n);Ne(m,"href",`/reader?chapter=${o}`);var I=r(m,!0);s(m),s(n),p(()=>u(I,i(t).title)),h(a,n)}),s(P);var ee=l(P,4),ae=l(r(ee),2),A=r(ae),C=r(A),Me=r(C);s(C);var te=l(C,2);w(te),s(A);var D=l(A,2),j=r(D),we=r(j);s(j);var se=l(j,2);w(se),s(D);var q=l(D,2),B=r(q),Se=r(B);s(B);var re=l(B,2);w(re),s(q);var le=l(q,2),oe=l(r(le),2);w(oe),s(le),s(ae),s(ee),s(T),p((a,t,o)=>{k.disabled=i(f),u($e,i(f)?"Processing...":"Load episode"),V.disabled=i(f),u(ye,i(f)?"Processing...":"Load sound files"),H.disabled=i(f),u(Me,`Voice Volume: ${a??""}`),u(we,`Sound Effect Volume: ${t??""}`),u(Se,`Background Music Volume: ${o??""}`)},[()=>Math.round(E()),()=>Math.round(y()),()=>Math.round(X())],qe),U("click",k,pe),U("click",V,xe),U("click",H,function(...a){var t;(t=ze)==null||t.apply(this,a)}),K(te,E,a=>M(ge,a)),K(se,y,a=>M(ne,a)),K(re,X,a=>M(ce,a)),Ge(oe,he,a=>M(ue,a)),h(e,T),je(),_()}export{oa as component};
