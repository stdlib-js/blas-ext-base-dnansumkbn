"use strict";var q=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var b=q(function(D,l){
var o=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-abs/dist');function E(n,r,t){var a,e,u,i,v,s;if(n<=0)return 0;if(n===1||t===0)return o(r[0])?0:r[0];for(t<0?e=(1-n)*t:e=0,a=0,v=0,s=0;s<n;s++)u=r[e],o(u)===!1&&(i=a+u,c(a)>=c(u)?v+=a-i+u:v+=u-i+a,a=i),e+=t;return a+v}l.exports=E
});var y=q(function(F,k){
var p=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist');function O(n,r,t,a){var e,u,i,v,s,f;if(n<=0)return 0;if(n===1||t===0)return p(r[a])?0:r[a];for(u=a,e=0,s=0,f=0;f<n;f++)i=r[u],p(i)===!1&&(v=e+i,d(e)>=d(i)?s+=e-v+i:s+=i-v+e,e=v),u+=t;return e+s}k.exports=O
});var R=q(function(G,x){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=b(),h=y();g(j,"ndarray",h);x.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=R(),m,_=z(w(__dirname,"./native.js"));A(_)?m=B:m=_;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
