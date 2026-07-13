"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var l=q(function(F,c){
var v=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-abs/dist');function g(a,r,i,_){var n,o,u,e,t,f,s;if(a<=0)return 0;if(u=_,i===0)return v(r[u])?0:r[u]*a;for(s=0;s<a&&(e=r[u],v(e)!==!1);s++)u+=i;if(s===a)return 0;if(n=e,u+=i,s+=1,n===0)for(;s<a;s++){if(e=r[u],v(e)===!1){if(e!==0){o=!0;break}n+=e}u+=i}else o=!0;for(f=0;s<a;s++)e=r[u],v(e)===!1&&(t=n+e,b(n)>=b(e)?f+=n-t+e:f+=e-t+n,n=t),u+=i;return o?n+f:n}c.exports=g
});var d=q(function(G,k){
var x=require('@stdlib/strided-base-stride2offset/dist'),E=l();function O(a,r,i){return E(a,r,i,x(a,i))}k.exports=O
});var j=q(function(H,y){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),w=l();h(p,"ndarray",w);y.exports=p
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=j(),m,R=A(z(__dirname,"./native.js"));B(R)?m=C:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
