import{S as t,i as s,s as a,e as o,t as e,k as n,c as r,a as f,g as i,d as m,n as p,f as c,F as d,h as u,G as h}from"../chunks/vendor-b98260c5.js";import{b as _,a as x}from"../chunks/paths-2c73d5fe.js";function l(t){let s,a,_,x,l,$,k;return{c(){s=o("p"),a=e("from endpoint: "),_=e(t[0]),x=n(),l=o("p"),$=e("from asset: "),k=e(t[1])},l(o){s=r(o,"P",{});var e=f(s);a=i(e,"from endpoint: "),_=i(e,t[0]),e.forEach(m),x=p(o),l=r(o,"P",{});var n=f(l);$=i(n,"from asset: "),k=i(n,t[1]),n.forEach(m)},m(t,o){c(t,s,o),d(s,a),d(s,_),c(t,x,o),c(t,l,o),d(l,$),d(l,k)},p(t,[s]){1&s&&u(_,t[0]),2&s&&u(k,t[1])},i:h,o:h,d(t){t&&m(s),t&&m(x),t&&m(l)}}}async function $({fetch:t}){return{props:{from_endpoint:await t(`${_}/endpoint.txt`).then((t=>t.text())),from_asset:await t(`${x}/asset.txt`).then((t=>t.text()))}}}function k(t,s,a){let{from_endpoint:o}=s,{from_asset:e}=s;return t.$$set=t=>{"from_endpoint"in t&&a(0,o=t.from_endpoint),"from_asset"in t&&a(1,e=t.from_asset)},[o,e]}export default class extends t{constructor(t){super(),s(this,t,k,l,a,{from_endpoint:0,from_asset:1})}}export{$ as load};
