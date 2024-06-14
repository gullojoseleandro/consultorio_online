import{r as l}from"./index.DhYZZe0J.js";/* empty css                       */var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=l,d=Symbol.for("react.element"),_=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function a(o,e,u){var r,n={},c=null,s=null;u!==void 0&&(c=""+u),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)m.call(e,r)&&!j.hasOwnProperty(r)&&(n[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:d,type:o,key:c,ref:s,props:n,_owner:x.current}}i.Fragment=_;i.jsx=a;i.jsxs=a;p.exports=i;var t=p.exports;function h({children:o,count:e}){const[u,r]=l.useState(e),n=()=>r(s=>s+1),c=()=>r(s=>s-1);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"counter",children:[t.jsx("button",{onClick:c,children:"-"}),t.jsx("pre",{children:u}),t.jsx("button",{onClick:n,children:"+"})]}),t.jsx("div",{className:"counter-message",children:o})]})}export{h as default};
