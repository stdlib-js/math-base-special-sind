"use strict";var f=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=f(function(l,s){
var u=require('@stdlib/math-base-special-deg2rad/dist'),a=require('@stdlib/math-base-special-kernel-sin/dist'),t=require('@stdlib/math-base-special-kernel-cos/dist'),q=require('@stdlib/math-base-special-fmod/dist'),n=require('@stdlib/math-base-special-signum/dist'),o=require('@stdlib/math-base-special-abs/dist'),d=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-assert-is-infinite/dist');function m(i){var r,e;return c(i)||d(i)?NaN:(e=q(i,360),r=o(e),e===0?0:r<45?a(u(e),0):r<=135?n(e)*t(u(90-r),0):r===180?n(e)*0:r<225?a(u((180-r)*n(e)),0):r<=315?-n(e)*t(u(270-r),0):a(u(e-360*n(e)),0))}s.exports=m
});var g=v();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
