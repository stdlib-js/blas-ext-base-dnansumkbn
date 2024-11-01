"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var q=f(function(D,c){
var d=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist');function R(a,r,n,x){var e,u,i,s,t,v;if(e=0,a<=0)return e;if(u=x,n===0)return d(r[u])?e:r[u]*a;for(t=0,v=0;v<a;v++)i=r[u],d(i)===!1&&(s=e+i,m(e)>=m(i)?t+=e-s+i:t+=i-s+e,e=s),u+=n;return e+t}c.exports=R
});var p=f(function(F,b){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=q();function O(a,r,n){return E(a,r,n,_(a,n))}b.exports=O
});var l=f(function(G,k){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),h=q();g(y,"ndarray",h);k.exports=y
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),o,j=z(w(__dirname,"./native.js"));A(j)?o=B:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
