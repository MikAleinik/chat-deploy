"use strict";(self.webpackChunkrs_chat=self.webpackChunkrs_chat||[]).push([[660],{660:(e,s,l)=>{l.r(s),l.d(s,{default:()=>ae});const a="style_main__16KWY";var t=l(791),r=l(434),n=l(810),c=l(553),i=l(644);const o="style_header__PlMnG";var d=l(980),_=l(689),u=l(36),h=l(184);const m=()=>{const e=(0,r.v9)((e=>e.users.userCurrent)),s=(0,_.s0)(),l={pending:()=>{},fullfilled:()=>{d.h.dispatch((0,u.kS)()),s("/login")},rejected:()=>{}},[a,t,m]=(0,c.T)(e,n.EJ.LOGOUT,l);return(0,h.jsxs)("section",{className:o,children:[(0,h.jsxs)("label",{children:["\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",e.login]}),(0,h.jsx)("label",{children:"RS-Chat"}),(0,h.jsx)(i.Z,{text:"\u0412\u044b\u0445\u043e\u0434",callback:t,small:!0})]})},x="style_footer__ULGny",g=()=>(0,h.jsxs)("section",{className:x,children:[(0,h.jsx)("label",{children:"RSSchool"}),(0,h.jsx)("label",{children:"MikAleinik"}),(0,h.jsx)("label",{children:"2023"})]}),j="style_contacts__HfViV",v="style_search__SEAlv";var f=l(101);const y="style_user-contact-container__W+gz4",N="style_user-status__vBNSG",b="style_active__qWs-k",p="style_user-login__aILzc",S="style_user-messages__TRTGI",C=e=>{let{login:s,active:l,messages:a=0}=e;return(0,h.jsxs)("li",{className:y,onClick:()=>{d.h.dispatch((0,f.dy)(s))},children:[(0,h.jsx)("div",{className:l?"".concat(N," ").concat(b):N}),(0,h.jsx)("label",{className:p,children:s}),0!==a&&(0,h.jsx)("label",{className:S,children:a})]})},R="style_user-list__ZzQiZ",k=(e,s)=>{let l=0;return s.forEach((s=>{s.login===e&&Array.isArray(s.messages)&&s.messages.forEach((s=>{s.from===e&&!1===s.status.isReaded&&(l+=1)}))})),l},E=e=>{let{search:s}=e;const l=(0,r.v9)((e=>e.users.userCurrent.login)),a=(0,r.v9)((e=>e.users.usersAnother.active)),t=(0,r.v9)((e=>e.users.usersAnother.inactive)),n=(0,r.v9)((e=>e.dialog.messages));return(0,h.jsxs)("ul",{className:R,children:[a.map(((e,a)=>e!==l&&-1!==e.indexOf(s)&&(0,h.jsx)(C,{login:e,active:!0,messages:k(e,n)},a))),t.map(((e,l)=>-1!==e.indexOf(s)&&(0,h.jsx)(C,{login:e,active:!1,messages:k(e,n)},l)))]})},w=()=>{const[e,s]=(0,t.useState)("");return(0,h.jsxs)("aside",{className:j,children:[(0,h.jsx)("input",{className:v,placeholder:"\u041f\u043e\u0438\u0441\u043a...",onKeyUp:e=>{s(e.currentTarget.value)}}),(0,h.jsx)(E,{search:e})]})},A="style_dialog-content__ICg9o",T="style_info__EqnC0",L="style_history-delimier__TMeq1",V="style_delimier-text__uBNhs",G="style_message-container__Tflpy",I="style_current__fYex7",Z="style_another__1ZVqf",M="style_message__vtYZd",z="style_header__XYwMV",D="style_text__yn2vV",O="style_footer__4XVvj",X=e=>{let{message:s,innerRef:l}=e;const a=(0,r.v9)((e=>e.users.userCurrent.login));return(0,h.jsx)("div",{ref:l,className:a===s.from?"".concat(G," ").concat(I):"".concat(G," ").concat(Z),children:(0,h.jsxs)("div",{className:M,children:[(0,h.jsxs)("div",{className:z,children:[(0,h.jsx)("label",{children:s.from===a?"\u0432\u044b":s.from}),(0,h.jsx)("label",{children:new Date(s.datetime).toLocaleString()})]}),(0,h.jsx)("div",{className:D,children:s.text}),a===s.from&&(0,h.jsx)("div",{className:O,children:(t=s.status.isDelivered,n=s.status.isReaded,n?"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043e".toLowerCase():t?"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e".toLowerCase():"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e".toLowerCase())})]})});var t,n};var Y=l(83);const q=()=>{const e=d.h.getState(),s=e.dialog.messages.filter((s=>s.login===e.dialog.selected))[0];s&&s.messages.forEach((s=>{if(!s.status.isReaded&&s.from!==e.users.userCurrent.login){const e={id:s.id};(0,Y.b)(n.kX.MSG_READED,e)}}))},W=(e,s,l,a)=>0===a&&l.from===s||l.from!==s?e:void 0,U=()=>{const e=(0,r.v9)((e=>e.dialog.selected)),s=(0,r.v9)((e=>e.dialog.messages)),[l,a]=(0,t.useState)(new Array),[n,c]=(0,t.useState)(new Array),[i,o]=(0,t.useState)(!1);(0,t.useEffect)((()=>{const l=((e,s)=>{const l=[];return s.forEach((s=>{s.login===e&&l.push(...s.messages)})),l})(e,s),t=l.filter((e=>!1!==e.status.isReaded)),r=l.filter((e=>!1===e.status.isReaded));a(t),c(r),r.length>0&&r[0].from===e?o(!0):o(!1)}),[s,e]);const d=(0,t.useRef)(null),_=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e,s;i?null===(e=_.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}):null===(s=d.current)||void 0===s||s.scrollIntoView({behavior:"smooth"})}),[i,_,d,n]),(0,h.jsxs)("article",{className:A,onClick:q,onWheel:q,ref:_,children:[null===e&&(0,h.jsx)("label",{className:T,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f..."}),null!==e&&0===l.length&&0===n.length&&(0,h.jsx)("label",{className:T,children:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u043f\u0435\u0440\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."}),l.map((e=>(0,h.jsx)(X,{message:e},e.id))),i&&(0,h.jsx)("div",{className:L,ref:_,children:(0,h.jsx)("label",{className:V,children:"\u041d\u043e\u0432\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),n.map(((s,l)=>(0,h.jsx)(X,{message:s,innerRef:W(d,e,s,l)},s.id)))]})},B="style_dialog-header__XLReP",H="style_user-active__0VIus",K="style_user-inactive__h1zHf",P=()=>{const e=(0,r.v9)((e=>e.users.usersAnother.active)),s=(0,r.v9)((e=>e.dialog.selected)),[l,a]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const l=e.some((e=>e===s));a(l)}),[e,s]),(0,h.jsxs)("article",{className:B,children:[(0,h.jsx)("label",{children:s}),s&&(0,h.jsx)("label",{className:l?H:K,children:l?"\u0432 \u0441\u0435\u0442\u0438":"\u043d\u0435 \u0432 \u0441\u0435\u0442\u0438"})]})},F="style_dialog-input__Y-F0x",J="style_dialog-input-field__3RzOS",Q=()=>{const e=(0,r.v9)((e=>e.dialog.selected)),[s,l]=(0,t.useState)("");return(0,h.jsxs)("article",{className:F,children:[(0,h.jsx)("input",{value:s,className:J,placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",onChange:e=>{l(e.currentTarget.value)},disabled:null===e}),(0,h.jsx)(i.Z,{text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",callback:()=>{const a={login:e,text:s};(0,Y.b)(n.kX.MSG_SEND,a),l(""),q()},small:!0,disabled:null===e||""===s})]})},$="style_dialog-container__ZlILo",ee=()=>(0,h.jsxs)("article",{className:$,children:[(0,h.jsx)(P,{}),(0,h.jsx)(U,{}),(0,h.jsx)(Q,{})]}),se="style_content__hTiAT",le=()=>(0,h.jsxs)("section",{className:se,children:[(0,h.jsx)(w,{}),(0,h.jsx)(ee,{})]}),ae=()=>(0,h.jsxs)("main",{className:a,children:[(0,h.jsx)(m,{}),(0,h.jsx)(le,{}),(0,h.jsx)(g,{})]})}}]);
//# sourceMappingURL=660.fb9d9ea6.chunk.js.map