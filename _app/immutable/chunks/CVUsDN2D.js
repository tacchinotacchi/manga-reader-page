import{J as D,A as _,B as O,K as U,M as Y,N as h,O as y,Q as F,R as g,T as I,U as N,V as A,W as H,X as L,Y as M,Z,_ as m,x as k,i as q,l as w}from"./ZCrrH9wl.js";import{s as B,g as C}from"./C9AGEhQZ.js";function P(e,n,[a,s]=[0,0]){_&&a===0&&O();var u=e,f=null,i=null,t=H,E=a>0?U:0,c=!1;const R=(o,r=!0)=>{c=!0,v(r,o)},v=(o,r)=>{if(t===(t=o))return;let T=!1;if(_&&s!==-1){if(a===0){const b=u.data;b===Y?s=0:b===h?s=1/0:(s=parseInt(b.substring(1)),s!==s&&(s=t?1/0:-1))}const S=s>a;!!t===S&&(u=y(),F(u),g(!1),T=!0,s=-1)}t?(f?I(f):r&&(f=N(()=>r(u))),i&&A(i,()=>{i=null})):(i?I(i):r&&(i=N(()=>r(u,[a+1,s]))),f&&A(f,()=>{f=null})),T&&g(!0)};D(()=>{c=!1,n(R),c||v(null,null)},E),_&&(u=L)}let l=!1,p=Symbol();function Q(e,n,a){const s=a[n]??(a[n]={store:null,source:k(void 0),unsubscribe:m});if(s.store!==e&&!(p in a))if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=m;else{var u=!0;s.unsubscribe=B(e,f=>{u?s.source.v=f:w(s.source,f)}),u=!1}return e&&p in a?C(e):q(s.source)}function V(){const e={};function n(){M(()=>{for(var a in e)e[a].unsubscribe();Z(e,p,{enumerable:!1,value:!0})})}return[e,n]}function W(e){var n=l;try{return l=!1,[e(),l]}finally{l=n}}export{Q as a,W as c,P as i,V as s};
