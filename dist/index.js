"use strict";var q=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var l=q(function(F,c){
var v=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-abs/dist');function g(a,e,s,_){var i,o,n,r,t,f,u;if(a<=0)return 0;if(n=_,s===0)return v(e[n])?0:e[n]*a;for(u=0;u<a&&(r=e[n],v(r)!==!1);u++)n+=s;if(u===a)return 0;if(i=r,n+=s,u+=1,i===0)for(;u<a;u++){if(r=e[n],v(r)===!1){if(r!==0){o=!0;break}i+=r}n+=s}else o=!0;for(f=0;u<a;u++)r=e[n],v(r)===!1&&(t=i+r,b(i)>=b(r)?f+=i-t+r:f+=r-t+i,i=t),n+=s;return o?i+f:i}c.exports=g
});var d=q(function(G,k){
var x=require('@stdlib/strided-base-stride2offset/dist'),E=l();function O(a,e,s){return E(a,e,s,x(a,s))}k.exports=O
});var j=q(function(H,y){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),w=l();h(p,"ndarray",w);y.exports=p
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=j(),m,R=A(z(__dirname,"./native.js"));B(R)?m=C:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
