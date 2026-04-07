const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Projects-B-E0uvW_.js","assets/index-DQFjSuBT.js","assets/index-BQL_y-fA.css","assets/aos-Cpz8gJJs.js","assets/aos-DvB2Xm2x.css","assets/index.esm-Dyat83ld.js","assets/index.esm-B7nPXnWI.js","assets/Projects-BkXfeJtW.css","assets/AboutMe-D1lMcbyu.js","assets/AboutMe-KgdZH38O.css","assets/Contact-C0XvKr8s.js"])))=>i.map(i=>d[i]);
import{g as xl,r as At,f as Ml,j as we,m as Tn,h as Sl,i as El,M as yl,k as bl,l as Tl,n as Al,o as wl,p as Aa,q as wa,t as na}from"./index-DQFjSuBT.js";var Po={exports:{}};(function(i,e){(function(t,n){i.exports=n(At)})(typeof self<"u"?self:Ml,t=>(()=>{var n={2:(a,c,o)=>{var u=o(2199),d=o(4664),f=o(5950);a.exports=function(h){return u(h,f,d)}},79:(a,c,o)=>{var u=o(3702),d=o(80),f=o(4739),h=o(8655),g=o(1175);function x(m){var p=-1,S=m==null?0:m.length;for(this.clear();++p<S;){var y=m[p];this.set(y[0],y[1])}}x.prototype.clear=u,x.prototype.delete=d,x.prototype.get=f,x.prototype.has=h,x.prototype.set=g,a.exports=x},80:(a,c,o)=>{var u=o(6025),d=Array.prototype.splice;a.exports=function(f){var h=this.__data__,g=u(h,f);return!(g<0||(g==h.length-1?h.pop():d.call(h,g,1),--this.size,0))}},270:(a,c,o)=>{var u=o(7068),d=o(346);a.exports=function f(h,g,x,m,p){return h===g||(h==null||g==null||!d(h)&&!d(g)?h!=h&&g!=g:u(h,g,x,m,f,p))}},289:(a,c,o)=>{var u=o(2651);a.exports=function(d){return u(this,d).get(d)}},294:a=>{a.exports=function(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}},317:a=>{a.exports=function(c){var o=-1,u=Array(c.size);return c.forEach(function(d,f){u[++o]=[f,d]}),u}},346:a=>{a.exports=function(c){return c!=null&&typeof c=="object"}},361:a=>{var c=/^(?:0|[1-9]\d*)$/;a.exports=function(o,u){var d=typeof o;return!!(u=u??9007199254740991)&&(d=="number"||d!="symbol"&&c.test(o))&&o>-1&&o%1==0&&o<u}},392:a=>{a.exports=function(c,o){return c==null?void 0:c[o]}},659:(a,c,o)=>{var u=o(1873),d=Object.prototype,f=d.hasOwnProperty,h=d.toString,g=u?u.toStringTag:void 0;a.exports=function(x){var m=f.call(x,g),p=x[g];try{x[g]=void 0;var S=!0}catch{}var y=h.call(x);return S&&(m?x[g]=p:delete x[g]),y}},689:(a,c,o)=>{var u=o(2),d=Object.prototype.hasOwnProperty;a.exports=function(f,h,g,x,m,p){var S=1&g,y=u(f),b=y.length;if(b!=u(h).length&&!S)return!1;for(var R=b;R--;){var T=y[R];if(!(S?T in h:d.call(h,T)))return!1}var C=p.get(f),v=p.get(h);if(C&&v)return C==h&&v==f;var E=!0;p.set(f,h),p.set(h,f);for(var B=S;++R<b;){var w=f[T=y[R]],F=h[T];if(x)var z=S?x(F,w,T,h,f,p):x(w,F,T,f,h,p);if(!(z===void 0?w===F||m(w,F,g,x,p):z)){E=!1;break}B||(B=T=="constructor")}if(E&&!B){var I=f.constructor,D=h.constructor;I==D||!("constructor"in f)||!("constructor"in h)||typeof I=="function"&&I instanceof I&&typeof D=="function"&&D instanceof D||(E=!1)}return p.delete(f),p.delete(h),E}},695:(a,c,o)=>{var u=o(8096),d=o(2428),f=o(6449),h=o(3656),g=o(361),x=o(7167),m=Object.prototype.hasOwnProperty;a.exports=function(p,S){var y=f(p),b=!y&&d(p),R=!y&&!b&&h(p),T=!y&&!b&&!R&&x(p),C=y||b||R||T,v=C?u(p.length,String):[],E=v.length;for(var B in p)!S&&!m.call(p,B)||C&&(B=="length"||R&&(B=="offset"||B=="parent")||T&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||g(B,E))||v.push(B);return v}},938:a=>{a.exports=function(c){var o=this.__data__,u=o.delete(c);return this.size=o.size,u}},945:(a,c,o)=>{var u=o(79),d=o(8223),f=o(3661);a.exports=function(h,g){var x=this.__data__;if(x instanceof u){var m=x.__data__;if(!d||m.length<199)return m.push([h,g]),this.size=++x.size,this;x=this.__data__=new f(m)}return x.set(h,g),this.size=x.size,this}},1042:(a,c,o)=>{var u=o(6110)(Object,"create");a.exports=u},1175:(a,c,o)=>{var u=o(6025);a.exports=function(d,f){var h=this.__data__,g=u(h,d);return g<0?(++this.size,h.push([d,f])):h[g][1]=f,this}},1380:a=>{a.exports=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this}},1420:(a,c,o)=>{var u=o(79);a.exports=function(){this.__data__=new u,this.size=0}},1459:a=>{a.exports=function(c){return this.__data__.has(c)}},1549:(a,c,o)=>{var u=o(2032),d=o(3862),f=o(6721),h=o(2749),g=o(5749);function x(m){var p=-1,S=m==null?0:m.length;for(this.clear();++p<S;){var y=m[p];this.set(y[0],y[1])}}x.prototype.clear=u,x.prototype.delete=d,x.prototype.get=f,x.prototype.has=h,x.prototype.set=g,a.exports=x},1873:(a,c,o)=>{var u=o(9325).Symbol;a.exports=u},1882:(a,c,o)=>{var u=o(2552),d=o(3805);a.exports=function(f){if(!d(f))return!1;var h=u(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1986:(a,c,o)=>{var u=o(1873),d=o(7828),f=o(5288),h=o(5911),g=o(317),x=o(4247),m=u?u.prototype:void 0,p=m?m.valueOf:void 0;a.exports=function(S,y,b,R,T,C,v){switch(b){case"[object DataView]":if(S.byteLength!=y.byteLength||S.byteOffset!=y.byteOffset)return!1;S=S.buffer,y=y.buffer;case"[object ArrayBuffer]":return!(S.byteLength!=y.byteLength||!C(new d(S),new d(y)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+S,+y);case"[object Error]":return S.name==y.name&&S.message==y.message;case"[object RegExp]":case"[object String]":return S==y+"";case"[object Map]":var E=g;case"[object Set]":var B=1&R;if(E||(E=x),S.size!=y.size&&!B)return!1;var w=v.get(S);if(w)return w==y;R|=2,v.set(S,y);var F=h(E(S),E(y),R,T,C,v);return v.delete(S),F;case"[object Symbol]":if(p)return p.call(S)==p.call(y)}return!1}},2032:(a,c,o)=>{var u=o(1042);a.exports=function(){this.__data__=u?u(null):{},this.size=0}},2199:(a,c,o)=>{var u=o(4528),d=o(6449);a.exports=function(f,h,g){var x=h(f);return d(f)?x:u(x,g(f))}},2404:(a,c,o)=>{var u=o(270);a.exports=function(d,f){return u(d,f)}},2428:(a,c,o)=>{var u=o(7534),d=o(346),f=Object.prototype,h=f.hasOwnProperty,g=f.propertyIsEnumerable,x=u(function(){return arguments}())?u:function(m){return d(m)&&h.call(m,"callee")&&!g.call(m,"callee")};a.exports=x},2552:(a,c,o)=>{var u=o(1873),d=o(659),f=o(9350),h=u?u.toStringTag:void 0;a.exports=function(g){return g==null?g===void 0?"[object Undefined]":"[object Null]":h&&h in Object(g)?d(g):f(g)}},2651:(a,c,o)=>{var u=o(4218);a.exports=function(d,f){var h=d.__data__;return u(f)?h[typeof f=="string"?"string":"hash"]:h.map}},2749:(a,c,o)=>{var u=o(1042),d=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;return u?h[f]!==void 0:d.call(h,f)}},2804:(a,c,o)=>{var u=o(6110)(o(9325),"Promise");a.exports=u},2949:(a,c,o)=>{var u=o(2651);a.exports=function(d,f){var h=u(this,d),g=h.size;return h.set(d,f),this.size+=h.size==g?0:1,this}},3040:(a,c,o)=>{var u=o(1549),d=o(79),f=o(8223);a.exports=function(){this.size=0,this.__data__={hash:new u,map:new(f||d),string:new u}}},3146:(a,c,o)=>{for(var u=o(3491),d=typeof window>"u"?o.g:window,f=["moz","webkit"],h="AnimationFrame",g=d["request"+h],x=d["cancel"+h]||d["cancelRequest"+h],m=0;!g&&m<f.length;m++)g=d[f[m]+"Request"+h],x=d[f[m]+"Cancel"+h]||d[f[m]+"CancelRequest"+h];if(!g||!x){var p=0,S=0,y=[],b=1e3/60;g=function(R){if(y.length===0){var T=u(),C=Math.max(0,b-(T-p));p=C+T,setTimeout(function(){var v=y.slice(0);y.length=0;for(var E=0;E<v.length;E++)if(!v[E].cancelled)try{v[E].callback(p)}catch(B){setTimeout(function(){throw B},0)}},Math.round(C))}return y.push({handle:++S,callback:R,cancelled:!1}),S},x=function(R){for(var T=0;T<y.length;T++)y[T].handle===R&&(y[T].cancelled=!0)}}a.exports=function(R){return g.call(d,R)},a.exports.cancel=function(){x.apply(d,arguments)},a.exports.polyfill=function(R){R||(R=d),R.requestAnimationFrame=g,R.cancelAnimationFrame=x}},3345:a=>{a.exports=function(){return[]}},3491:function(a){(function(){var c,o,u,d,f,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(c()-f)/1e6},o=process.hrtime,d=(c=function(){var g;return 1e9*(g=o())[0]+g[1]})(),h=1e9*process.uptime(),f=d-h):Date.now?(a.exports=function(){return Date.now()-u},u=Date.now()):(a.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},3605:a=>{a.exports=function(c){return this.__data__.get(c)}},3650:(a,c,o)=>{var u=o(4335)(Object.keys,Object);a.exports=u},3656:(a,c,o)=>{a=o.nmd(a);var u=o(9325),d=o(9935),f=c&&!c.nodeType&&c,h=f&&a&&!a.nodeType&&a,g=h&&h.exports===f?u.Buffer:void 0,x=(g?g.isBuffer:void 0)||d;a.exports=x},3661:(a,c,o)=>{var u=o(3040),d=o(7670),f=o(289),h=o(4509),g=o(2949);function x(m){var p=-1,S=m==null?0:m.length;for(this.clear();++p<S;){var y=m[p];this.set(y[0],y[1])}}x.prototype.clear=u,x.prototype.delete=d,x.prototype.get=f,x.prototype.has=h,x.prototype.set=g,a.exports=x},3702:a=>{a.exports=function(){this.__data__=[],this.size=0}},3805:a=>{a.exports=function(c){var o=typeof c;return c!=null&&(o=="object"||o=="function")}},3862:a=>{a.exports=function(c){var o=this.has(c)&&delete this.__data__[c];return this.size-=o?1:0,o}},4218:a=>{a.exports=function(c){var o=typeof c;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?c!=="__proto__":c===null}},4247:a=>{a.exports=function(c){var o=-1,u=Array(c.size);return c.forEach(function(d){u[++o]=d}),u}},4248:a=>{a.exports=function(c,o){for(var u=-1,d=c==null?0:c.length;++u<d;)if(o(c[u],u,c))return!0;return!1}},4335:a=>{a.exports=function(c,o){return function(u){return c(o(u))}}},4509:(a,c,o)=>{var u=o(2651);a.exports=function(d){return u(this,d).has(d)}},4528:a=>{a.exports=function(c,o){for(var u=-1,d=o.length,f=c.length;++u<d;)c[f+u]=o[u];return c}},4664:(a,c,o)=>{var u=o(9770),d=o(3345),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,g=h?function(x){return x==null?[]:(x=Object(x),u(h(x),function(m){return f.call(x,m)}))}:d;a.exports=g},4739:(a,c,o)=>{var u=o(6025);a.exports=function(d){var f=this.__data__,h=u(f,d);return h<0?void 0:f[h][1]}},4840:(a,c,o)=>{var u=typeof o.g=="object"&&o.g&&o.g.Object===Object&&o.g;a.exports=u},4894:(a,c,o)=>{var u=o(1882),d=o(294);a.exports=function(f){return f!=null&&d(f.length)&&!u(f)}},4901:(a,c,o)=>{var u=o(2552),d=o(294),f=o(346),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(g){return f(g)&&d(g.length)&&!!h[u(g)]}},5083:(a,c,o)=>{var u=o(1882),d=o(7296),f=o(3805),h=o(7473),g=/^\[object .+?Constructor\]$/,x=Function.prototype,m=Object.prototype,p=x.toString,S=m.hasOwnProperty,y=RegExp("^"+p.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(b){return!(!f(b)||d(b))&&(u(b)?y:g).test(h(b))}},5288:a=>{a.exports=function(c,o){return c===o||c!=c&&o!=o}},5481:(a,c,o)=>{var u=o(9325)["__core-js_shared__"];a.exports=u},5527:a=>{var c=Object.prototype;a.exports=function(o){var u=o&&o.constructor;return o===(typeof u=="function"&&u.prototype||c)}},5580:(a,c,o)=>{var u=o(6110)(o(9325),"DataView");a.exports=u},5749:(a,c,o)=>{var u=o(1042);a.exports=function(d,f){var h=this.__data__;return this.size+=this.has(d)?0:1,h[d]=u&&f===void 0?"__lodash_hash_undefined__":f,this}},5861:(a,c,o)=>{var u=o(5580),d=o(8223),f=o(2804),h=o(6545),g=o(8303),x=o(2552),m=o(7473),p="[object Map]",S="[object Promise]",y="[object Set]",b="[object WeakMap]",R="[object DataView]",T=m(u),C=m(d),v=m(f),E=m(h),B=m(g),w=x;(u&&w(new u(new ArrayBuffer(1)))!=R||d&&w(new d)!=p||f&&w(f.resolve())!=S||h&&w(new h)!=y||g&&w(new g)!=b)&&(w=function(F){var z=x(F),I=z=="[object Object]"?F.constructor:void 0,D=I?m(I):"";if(D)switch(D){case T:return R;case C:return p;case v:return S;case E:return y;case B:return b}return z}),a.exports=w},5911:(a,c,o)=>{var u=o(8859),d=o(4248),f=o(9219);a.exports=function(h,g,x,m,p,S){var y=1&x,b=h.length,R=g.length;if(b!=R&&!(y&&R>b))return!1;var T=S.get(h),C=S.get(g);if(T&&C)return T==g&&C==h;var v=-1,E=!0,B=2&x?new u:void 0;for(S.set(h,g),S.set(g,h);++v<b;){var w=h[v],F=g[v];if(m)var z=y?m(F,w,v,g,h,S):m(w,F,v,h,g,S);if(z!==void 0){if(z)continue;E=!1;break}if(B){if(!d(g,function(I,D){if(!f(B,D)&&(w===I||p(w,I,x,m,S)))return B.push(D)})){E=!1;break}}else if(w!==F&&!p(w,F,x,m,S)){E=!1;break}}return S.delete(h),S.delete(g),E}},5950:(a,c,o)=>{var u=o(695),d=o(8984),f=o(4894);a.exports=function(h){return f(h)?u(h):d(h)}},6009:(a,c,o)=>{a=o.nmd(a);var u=o(4840),d=c&&!c.nodeType&&c,f=d&&a&&!a.nodeType&&a,h=f&&f.exports===d&&u.process,g=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=g},6025:(a,c,o)=>{var u=o(5288);a.exports=function(d,f){for(var h=d.length;h--;)if(u(d[h][0],f))return h;return-1}},6110:(a,c,o)=>{var u=o(5083),d=o(392);a.exports=function(f,h){var g=d(f,h);return u(g)?g:void 0}},6449:a=>{var c=Array.isArray;a.exports=c},6545:(a,c,o)=>{var u=o(6110)(o(9325),"Set");a.exports=u},6721:(a,c,o)=>{var u=o(1042),d=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;if(u){var g=h[f];return g==="__lodash_hash_undefined__"?void 0:g}return d.call(h,f)?h[f]:void 0}},7068:(a,c,o)=>{var u=o(7217),d=o(5911),f=o(1986),h=o(689),g=o(5861),x=o(6449),m=o(3656),p=o(7167),S="[object Arguments]",y="[object Array]",b="[object Object]",R=Object.prototype.hasOwnProperty;a.exports=function(T,C,v,E,B,w){var F=x(T),z=x(C),I=F?y:g(T),D=z?y:g(C),L=(I=I==S?b:I)==b,V=(D=D==S?b:D)==b,ee=I==D;if(ee&&m(T)){if(!m(C))return!1;F=!0,L=!1}if(ee&&!L)return w||(w=new u),F||p(T)?d(T,C,v,E,B,w):f(T,C,I,v,E,B,w);if(!(1&v)){var j=L&&R.call(T,"__wrapped__"),Y=V&&R.call(C,"__wrapped__");if(j||Y){var Q=j?T.value():T,J=Y?C.value():C;return w||(w=new u),B(Q,J,v,E,w)}}return!!ee&&(w||(w=new u),h(T,C,v,E,B,w))}},7167:(a,c,o)=>{var u=o(4901),d=o(7301),f=o(6009),h=f&&f.isTypedArray,g=h?d(h):u;a.exports=g},7217:(a,c,o)=>{var u=o(79),d=o(1420),f=o(938),h=o(3605),g=o(9817),x=o(945);function m(p){var S=this.__data__=new u(p);this.size=S.size}m.prototype.clear=d,m.prototype.delete=f,m.prototype.get=h,m.prototype.has=g,m.prototype.set=x,a.exports=m},7296:(a,c,o)=>{var u,d=o(5481),f=(u=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";a.exports=function(h){return!!f&&f in h}},7301:a=>{a.exports=function(c){return function(o){return c(o)}}},7473:a=>{var c=Function.prototype.toString;a.exports=function(o){if(o!=null){try{return c.call(o)}catch{}try{return o+""}catch{}}return""}},7534:(a,c,o)=>{var u=o(2552),d=o(346);a.exports=function(f){return d(f)&&u(f)=="[object Arguments]"}},7670:(a,c,o)=>{var u=o(2651);a.exports=function(d){var f=u(this,d).delete(d);return this.size-=f?1:0,f}},7828:(a,c,o)=>{var u=o(9325).Uint8Array;a.exports=u},8096:a=>{a.exports=function(c,o){for(var u=-1,d=Array(c);++u<c;)d[u]=o(u);return d}},8223:(a,c,o)=>{var u=o(6110)(o(9325),"Map");a.exports=u},8303:(a,c,o)=>{var u=o(6110)(o(9325),"WeakMap");a.exports=u},8655:(a,c,o)=>{var u=o(6025);a.exports=function(d){return u(this.__data__,d)>-1}},8859:(a,c,o)=>{var u=o(3661),d=o(1380),f=o(1459);function h(g){var x=-1,m=g==null?0:g.length;for(this.__data__=new u;++x<m;)this.add(g[x])}h.prototype.add=h.prototype.push=d,h.prototype.has=f,a.exports=h},8984:(a,c,o)=>{var u=o(5527),d=o(3650),f=Object.prototype.hasOwnProperty;a.exports=function(h){if(!u(h))return d(h);var g=[];for(var x in Object(h))f.call(h,x)&&x!="constructor"&&g.push(x);return g}},9155:a=>{a.exports=t},9219:a=>{a.exports=function(c,o){return c.has(o)}},9325:(a,c,o)=>{var u=o(4840),d=typeof self=="object"&&self&&self.Object===Object&&self,f=u||d||Function("return this")();a.exports=f},9350:a=>{var c=Object.prototype.toString;a.exports=function(o){return c.call(o)}},9770:a=>{a.exports=function(c,o){for(var u=-1,d=c==null?0:c.length,f=0,h=[];++u<d;){var g=c[u];o(g,u,c)&&(h[f++]=g)}return h}},9817:a=>{a.exports=function(c){return this.__data__.has(c)}},9905:(a,c,o)=>{o.d(c,{default:()=>ee});var u=o(3146),d=o.n(u);const f=function(j){return new RegExp(/<[a-z][\s\S]*>/i).test(j)},h=function(j,Y){return Math.floor(Math.random()*(Y-j+1))+j};var g="TYPE_CHARACTER",x="REMOVE_CHARACTER",m="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",S="PAUSE_FOR",y="CALL_FUNCTION",b="ADD_HTML_TAG_ELEMENT",R="CHANGE_DELETE_SPEED",T="CHANGE_DELAY",C="CHANGE_CURSOR",v="PASTE_STRING",E="HTML_TAG";function B(j){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Y){return typeof Y}:function(Y){return Y&&typeof Symbol=="function"&&Y.constructor===Symbol&&Y!==Symbol.prototype?"symbol":typeof Y},B(j)}function w(j,Y){var Q=Object.keys(j);if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(j);Y&&(J=J.filter(function(xe){return Object.getOwnPropertyDescriptor(j,xe).enumerable})),Q.push.apply(Q,J)}return Q}function F(j){for(var Y=1;Y<arguments.length;Y++){var Q=arguments[Y]!=null?arguments[Y]:{};Y%2?w(Object(Q),!0).forEach(function(J){L(j,J,Q[J])}):Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(Q)):w(Object(Q)).forEach(function(J){Object.defineProperty(j,J,Object.getOwnPropertyDescriptor(Q,J))})}return j}function z(j){return function(Y){if(Array.isArray(Y))return I(Y)}(j)||function(Y){if(typeof Symbol<"u"&&Y[Symbol.iterator]!=null||Y["@@iterator"]!=null)return Array.from(Y)}(j)||function(Y,Q){if(Y){if(typeof Y=="string")return I(Y,Q);var J={}.toString.call(Y).slice(8,-1);return J==="Object"&&Y.constructor&&(J=Y.constructor.name),J==="Map"||J==="Set"?Array.from(Y):J==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(J)?I(Y,Q):void 0}}(j)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function I(j,Y){(Y==null||Y>j.length)&&(Y=j.length);for(var Q=0,J=Array(Y);Q<Y;Q++)J[Q]=j[Q];return J}function D(j,Y){for(var Q=0;Q<Y.length;Q++){var J=Y[Q];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(j,V(J.key),J)}}function L(j,Y,Q){return(Y=V(Y))in j?Object.defineProperty(j,Y,{value:Q,enumerable:!0,configurable:!0,writable:!0}):j[Y]=Q,j}function V(j){var Y=function(Q){if(B(Q)!="object"||!Q)return Q;var J=Q[Symbol.toPrimitive];if(J!==void 0){var xe=J.call(Q,"string");if(B(xe)!="object")return xe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Q)}(j);return B(Y)=="symbol"?Y:Y+""}const ee=function(){function j(J,xe){var W=this;if(function(G,te){if(!(G instanceof te))throw new TypeError("Cannot call a class as a function")}(this,j),L(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),L(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),L(this,"setupWrapperElement",function(){W.state.elements.container&&(W.state.elements.wrapper.className=W.options.wrapperClassName,W.state.elements.cursor.className=W.options.cursorClassName,W.state.elements.cursor.innerHTML=W.options.cursor,W.state.elements.container.innerHTML="",W.state.elements.container.appendChild(W.state.elements.wrapper),W.state.elements.container.appendChild(W.state.elements.cursor))}),L(this,"start",function(){return W.state.eventLoopPaused=!1,W.runEventLoop(),W}),L(this,"pause",function(){return W.state.eventLoopPaused=!0,W}),L(this,"stop",function(){return W.state.eventLoop&&((0,u.cancel)(W.state.eventLoop),W.state.eventLoop=null),W}),L(this,"pauseFor",function(G){return W.addEventToQueue(S,{ms:G}),W}),L(this,"typeOutAllStrings",function(){return typeof W.options.strings=="string"?(W.typeString(W.options.strings).pauseFor(W.options.pauseFor),W):(W.options.strings.forEach(function(G){W.typeString(G).pauseFor(W.options.pauseFor).deleteAll(W.options.deleteSpeed)}),W)}),L(this,"typeString",function(G){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(G))return W.typeOutHTMLString(G,te);if(G){var ie=(W.options||{}).stringSplitter,Te=typeof ie=="function"?ie(G):G.split("");W.typeCharacters(Te,te)}return W}),L(this,"pasteString",function(G){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(G)?W.typeOutHTMLString(G,te,!0):(G&&W.addEventToQueue(v,{character:G,node:te}),W)}),L(this,"typeOutHTMLString",function(G){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,ie=arguments.length>2?arguments[2]:void 0,Te=function(Be){var We=document.createElement("div");return We.innerHTML=Be,We.childNodes}(G);if(Te.length>0)for(var fe=0;fe<Te.length;fe++){var Ae=Te[fe],rt=Ae.innerHTML;Ae&&Ae.nodeType!==3?(Ae.innerHTML="",W.addEventToQueue(b,{node:Ae,parentNode:te}),ie?W.pasteString(rt,Ae):W.typeString(rt,Ae)):Ae.textContent&&(ie?W.pasteString(Ae.textContent,te):W.typeString(Ae.textContent,te))}return W}),L(this,"deleteAll",function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return W.addEventToQueue(m,{speed:G}),W}),L(this,"changeDeleteSpeed",function(G){if(!G)throw new Error("Must provide new delete speed");return W.addEventToQueue(R,{speed:G}),W}),L(this,"changeDelay",function(G){if(!G)throw new Error("Must provide new delay");return W.addEventToQueue(T,{delay:G}),W}),L(this,"changeCursor",function(G){if(!G)throw new Error("Must provide new cursor");return W.addEventToQueue(C,{cursor:G}),W}),L(this,"deleteChars",function(G){if(!G)throw new Error("Must provide amount of characters to delete");for(var te=0;te<G;te++)W.addEventToQueue(x);return W}),L(this,"callFunction",function(G,te){if(!G||typeof G!="function")throw new Error("Callback must be a function");return W.addEventToQueue(y,{cb:G,thisArg:te}),W}),L(this,"typeCharacters",function(G){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G||!Array.isArray(G))throw new Error("Characters must be an array");return G.forEach(function(ie){W.addEventToQueue(g,{character:ie,node:te})}),W}),L(this,"removeCharacters",function(G){if(!G||!Array.isArray(G))throw new Error("Characters must be an array");return G.forEach(function(){W.addEventToQueue(x)}),W}),L(this,"addEventToQueue",function(G,te){var ie=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return W.addEventToStateProperty(G,te,ie,"eventQueue")}),L(this,"addReverseCalledEvent",function(G,te){var ie=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return W.options.loop?W.addEventToStateProperty(G,te,ie,"reverseCalledEvents"):W}),L(this,"addEventToStateProperty",function(G,te){var ie=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Te=arguments.length>3?arguments[3]:void 0,fe={eventName:G,eventArgs:te||{}};return W.state[Te]=ie?[fe].concat(z(W.state[Te])):[].concat(z(W.state[Te]),[fe]),W}),L(this,"runEventLoop",function(){W.state.lastFrameTime||(W.state.lastFrameTime=Date.now());var G=Date.now(),te=G-W.state.lastFrameTime;if(!W.state.eventQueue.length){if(!W.options.loop)return;W.state.eventQueue=z(W.state.calledEvents),W.state.calledEvents=[],W.options=F({},W.state.initialOptions)}if(W.state.eventLoop=d()(W.runEventLoop),!W.state.eventLoopPaused){if(W.state.pauseUntil){if(G<W.state.pauseUntil)return;W.state.pauseUntil=null}var ie,Te=z(W.state.eventQueue),fe=Te.shift();if(!(te<=(ie=fe.eventName===p||fe.eventName===x?W.options.deleteSpeed==="natural"?h(40,80):W.options.deleteSpeed:W.options.delay==="natural"?h(120,160):W.options.delay))){var Ae=fe.eventName,rt=fe.eventArgs;switch(W.logInDevMode({currentEvent:fe,state:W.state,delay:ie}),Ae){case v:case g:var Be=rt.character,We=rt.node,Ze=document.createTextNode(Be),Ue=Ze;W.options.onCreateTextNode&&typeof W.options.onCreateTextNode=="function"&&(Ue=W.options.onCreateTextNode(Be,Ze)),Ue&&(We?We.appendChild(Ue):W.state.elements.wrapper.appendChild(Ue)),W.state.visibleNodes=[].concat(z(W.state.visibleNodes),[{type:"TEXT_NODE",character:Be,node:Ue}]);break;case x:Te.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case S:var st=fe.eventArgs.ms;W.state.pauseUntil=Date.now()+parseInt(st);break;case y:var P=fe.eventArgs,at=P.cb,je=P.thisArg;at.call(je,{elements:W.state.elements});break;case b:var $e=fe.eventArgs,_e=$e.node,A=$e.parentNode;A?A.appendChild(_e):W.state.elements.wrapper.appendChild(_e),W.state.visibleNodes=[].concat(z(W.state.visibleNodes),[{type:E,node:_e,parentNode:A||W.state.elements.wrapper}]);break;case m:var _=W.state.visibleNodes,N=rt.speed,$=[];N&&$.push({eventName:R,eventArgs:{speed:N,temp:!0}});for(var ne=0,K=_.length;ne<K;ne++)$.push({eventName:p,eventArgs:{removingCharacterNode:!1}});N&&$.push({eventName:R,eventArgs:{speed:W.options.deleteSpeed,temp:!0}}),Te.unshift.apply(Te,$);break;case p:var ve=fe.eventArgs.removingCharacterNode;if(W.state.visibleNodes.length){var ae=W.state.visibleNodes.pop(),Ce=ae.type,De=ae.node,re=ae.character;W.options.onRemoveNode&&typeof W.options.onRemoveNode=="function"&&W.options.onRemoveNode({node:De,character:re}),De&&De.parentNode.removeChild(De),Ce===E&&ve&&Te.unshift({eventName:p,eventArgs:{}})}break;case R:W.options.deleteSpeed=fe.eventArgs.speed;break;case T:W.options.delay=fe.eventArgs.delay;break;case C:W.options.cursor=fe.eventArgs.cursor,W.state.elements.cursor.innerHTML=fe.eventArgs.cursor}W.options.loop&&(fe.eventName===p||fe.eventArgs&&fe.eventArgs.temp||(W.state.calledEvents=[].concat(z(W.state.calledEvents),[fe]))),W.state.eventQueue=Te,W.state.lastFrameTime=G}}}),J)if(typeof J=="string"){var Ke=document.querySelector(J);if(!Ke)throw new Error("Could not find container element");this.state.elements.container=Ke}else this.state.elements.container=J;xe&&(this.options=F(F({},this.options),xe)),this.state.initialOptions=F({},this.options),this.init()}var Y,Q;return Y=j,(Q=[{key:"init",value:function(){var J,xe;this.setupWrapperElement(),this.addEventToQueue(C,{cursor:this.options.cursor},!0),this.addEventToQueue(m,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(J=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(xe=document.createElement("style")).appendChild(document.createTextNode(J)),document.head.appendChild(xe),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(J){this.options.devMode&&console.log(J)}}])&&D(Y.prototype,Q),Object.defineProperty(Y,"prototype",{writable:!1}),j}()},9935:a=>{a.exports=function(){return!1}}},r={};function s(a){var c=r[a];if(c!==void 0)return c.exports;var o=r[a]={id:a,loaded:!1,exports:{}};return n[a].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.n=a=>{var c=a&&a.__esModule?()=>a.default:()=>a;return s.d(c,{a:c}),c},s.d=(a,c)=>{for(var o in c)s.o(c,o)&&!s.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:c[o]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),s.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{s.d(l,{default:()=>b});var a=s(9155),c=s.n(a),o=s(9905),u=s(2404),d=s.n(u);function f(R){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},f(R)}function h(R,T){for(var C=0;C<T.length;C++){var v=T[C];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(R,S(v.key),v)}}function g(R,T){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(C,v){return C.__proto__=v,C},g(R,T)}function x(R){if(R===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R}function m(){try{var R=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m=function(){return!!R})()}function p(R){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(T){return T.__proto__||Object.getPrototypeOf(T)},p(R)}function S(R){var T=function(C){if(f(C)!="object"||!C)return C;var v=C[Symbol.toPrimitive];if(v!==void 0){var E=v.call(C,"string");if(f(E)!="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(C)}(R);return f(T)=="symbol"?T:T+""}var y=function(R){(function(B,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");B.prototype=Object.create(w&&w.prototype,{constructor:{value:B,writable:!0,configurable:!0}}),Object.defineProperty(B,"prototype",{writable:!1}),w&&g(B,w)})(E,R);var T,C,v=function(B){var w=m();return function(){var F,z=p(B);if(w){var I=p(this).constructor;F=Reflect.construct(z,arguments,I)}else F=z.apply(this,arguments);return function(D,L){if(L&&(f(L)=="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(D)}(this,F)}}(E);function E(){var B,w,F,z;(function(V,ee){if(!(V instanceof ee))throw new TypeError("Cannot call a class as a function")})(this,E);for(var I=arguments.length,D=new Array(I),L=0;L<I;L++)D[L]=arguments[L];return w=x(B=v.call.apply(v,[this].concat(D))),z={instance:null},(F=S(F="state"))in w?Object.defineProperty(w,F,{value:z,enumerable:!0,configurable:!0,writable:!0}):w[F]=z,B}return T=E,(C=[{key:"componentDidMount",value:function(){var B=this,w=new o.default(this.typewriter,this.props.options);this.setState({instance:w},function(){var F=B.props.onInit;F&&F(w)})}},{key:"componentDidUpdate",value:function(B){d()(this.props.options,B.options)||this.setState({instance:new o.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var B=this,w=this.props.component;return c().createElement(w,{ref:function(F){return B.typewriter=F},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&h(T.prototype,C),Object.defineProperty(T,"prototype",{writable:!1}),E}(a.Component);y.defaultProps={component:"div"};const b=y})(),l.default})())})(Po);var Rl=Po.exports;const Cl=xl(Rl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="183",Pl=0,Ra=1,Dl=2,cr=1,Ll=2,bi=3,wn=0,wt=1,fn=2,Qt=0,si=1,gr=2,Ca=3,Pa=4,Ul=5,On=100,Il=101,Nl=102,Fl=103,Ol=104,Bl=200,zl=201,Vl=202,Gl=203,us=204,fs=205,Hl=206,kl=207,Wl=208,Xl=209,jl=210,ql=211,Yl=212,Kl=213,Zl=214,hs=0,ds=1,ps=2,oi=3,ms=4,gs=5,_s=6,vs=7,Do=0,$l=1,Jl=2,en=0,Lo=1,Uo=2,Io=3,No=4,Fo=5,Oo=6,Bo=7,zo=300,Gn=301,li=302,Dr=303,Lr=304,br=306,xs=1e3,hn=1001,Ms=1002,_t=1003,Ql=1004,zi=1005,St=1006,Ur=1007,zn=1008,zt=1009,Vo=1010,Go=1011,Ci=1012,ra=1013,tn=1014,$t=1015,Ut=1016,sa=1017,aa=1018,Pi=1020,Ho=35902,ko=35899,Wo=1021,Xo=1022,jt=1023,pn=1026,Vn=1027,jo=1028,oa=1029,ci=1030,la=1031,ca=1033,ur=33776,fr=33777,hr=33778,dr=33779,Ss=35840,Es=35841,ys=35842,bs=35843,Ts=36196,As=37492,ws=37496,Rs=37488,Cs=37489,Ps=37490,Ds=37491,Ls=37808,Us=37809,Is=37810,Ns=37811,Fs=37812,Os=37813,Bs=37814,zs=37815,Vs=37816,Gs=37817,Hs=37818,ks=37819,Ws=37820,Xs=37821,js=36492,qs=36494,Ys=36495,Ks=36283,Zs=36284,$s=36285,Js=36286,ec=3200,tc=0,nc=1,bn="",Ot="srgb",ui="srgb-linear",_r="linear",Qe="srgb",Wn=7680,Da=519,ic=512,rc=513,sc=514,ua=515,ac=516,oc=517,fa=518,lc=519,La=35044,Ua="300 es",Jt=2e3,vr=2001;function cc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uc(){const i=xr("canvas");return i.style.display="block",i}const Ia={};function Na(...i){const e="THREE."+i.shift();console.log(e,...i)}function qo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Mr(...i){const e=i.join(" ");e in Ia||(Ia[e]=!0,Le(...i))}function fc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const hc={[hs]:ds,[ps]:_s,[ms]:vs,[oi]:gs,[ds]:hs,[_s]:ps,[vs]:ms,[gs]:oi};class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fa=1234567;const wi=Math.PI/180,Di=180/Math.PI;function pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function ha(i,e){return(i%e+e)%e}function dc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pc(i,e,t){return i!==e?(t-i)/(e-i):0}function Ri(i,e,t){return(1-t)*i+t*e}function mc(i,e,t,n){return Ri(i,e,1-Math.exp(-t*n))}function gc(i,e=1){return e-Math.abs(ha(i,e*2)-e)}function _c(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mc(i,e){return i+Math.random()*(e-i)}function Sc(i){return i*(.5-Math.random())}function Ec(i){i!==void 0&&(Fa=i);let e=Fa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yc(i){return i*wi}function bc(i){return i*Di}function Tc(i){return(i&i-1)===0&&i!==0}function Ac(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rc(i,e,t,n,r){const s=Math.cos,l=Math.sin,a=s(t/2),c=l(t/2),o=s((e+n)/2),u=l((e+n)/2),d=s((e-n)/2),f=l((e-n)/2),h=s((n-e)/2),g=l((n-e)/2);switch(r){case"XYX":i.set(a*u,c*d,c*f,a*o);break;case"YZY":i.set(c*f,a*u,c*d,a*o);break;case"ZXZ":i.set(c*d,c*f,a*u,a*o);break;case"XZX":i.set(a*u,c*g,c*h,a*o);break;case"YXY":i.set(c*h,a*u,c*g,a*o);break;case"ZYZ":i.set(c*g,c*h,a*u,a*o);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cc={DEG2RAD:wi,RAD2DEG:Di,generateUUID:pi,clamp:ke,euclideanModulo:ha,mapLinear:dc,inverseLerp:pc,lerp:Ri,damp:mc,pingpong:gc,smoothstep:_c,smootherstep:vc,randInt:xc,randFloat:Mc,randFloatSpread:Sc,seededRandom:Ec,degToRad:yc,radToDeg:bc,isPowerOfTwo:Tc,ceilPowerOfTwo:Ac,floorPowerOfTwo:wc,setQuaternionFromProperEuler:Rc,normalize:yt,denormalize:ri};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*r+e.x,this.y=s*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,l,a){let c=n[r+0],o=n[r+1],u=n[r+2],d=n[r+3],f=s[l+0],h=s[l+1],g=s[l+2],x=s[l+3];if(d!==x||c!==f||o!==h||u!==g){let m=c*f+o*h+u*g+d*x;m<0&&(f=-f,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),y=Math.sin(S);p=Math.sin(p*S)/y,a=Math.sin(a*S)/y,c=c*p+f*a,o=o*p+h*a,u=u*p+g*a,d=d*p+x*a}else{c=c*p+f*a,o=o*p+h*a,u=u*p+g*a,d=d*p+x*a;const S=1/Math.sqrt(c*c+o*o+u*u+d*d);c*=S,o*=S,u*=S,d*=S}}e[t]=c,e[t+1]=o,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,l){const a=n[r],c=n[r+1],o=n[r+2],u=n[r+3],d=s[l],f=s[l+1],h=s[l+2],g=s[l+3];return e[t]=a*g+u*d+c*h-o*f,e[t+1]=c*g+u*f+o*d-a*h,e[t+2]=o*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-o*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,l=e._order,a=Math.cos,c=Math.sin,o=a(n/2),u=a(r/2),d=a(s/2),f=c(n/2),h=c(r/2),g=c(s/2);switch(l){case"XYZ":this._x=f*u*d+o*h*g,this._y=o*h*d-f*u*g,this._z=o*u*g+f*h*d,this._w=o*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+o*h*g,this._y=o*h*d-f*u*g,this._z=o*u*g-f*h*d,this._w=o*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-o*h*g,this._y=o*h*d+f*u*g,this._z=o*u*g+f*h*d,this._w=o*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-o*h*g,this._y=o*h*d+f*u*g,this._z=o*u*g-f*h*d,this._w=o*u*d+f*h*g;break;case"YZX":this._x=f*u*d+o*h*g,this._y=o*h*d+f*u*g,this._z=o*u*g-f*h*d,this._w=o*u*d-f*h*g;break;case"XZY":this._x=f*u*d-o*h*g,this._y=o*h*d-f*u*g,this._z=o*u*g+f*h*d,this._w=o*u*d+f*h*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],l=t[1],a=t[5],c=t[9],o=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-o)*h,this._z=(l-r)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+l)/h,this._z=(s+o)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(s-o)/h,this._x=(r+l)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(l-r)/h,this._x=(s+o)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,l=e._w,a=t._x,c=t._y,o=t._z,u=t._w;return this._x=n*u+l*a+r*o-s*c,this._y=r*u+l*c+s*a-n*o,this._z=s*u+l*o+n*c-r*a,this._w=l*u-n*a-r*c-s*o,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,l=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,l=-l,a=-a);let c=1-t;if(a<.9995){const o=Math.acos(a),u=Math.sin(o);c=Math.sin(c*o)/u,t=Math.sin(t*o)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+l*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,l=e.y,a=e.z,c=e.w,o=2*(l*r-a*n),u=2*(a*t-s*r),d=2*(s*n-l*t);return this.x=t+c*o+l*d-a*u,this.y=n+c*u+a*o-s*d,this.z=r+c*d+s*u-l*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,l=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*l-n*c,this.z=n*a-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new H,Oa=new mi;class Fe{constructor(e,t,n,r,s,l,a,c,o){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,l,a,c,o)}set(e,t,n,r,s,l,a,c,o){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=l,u[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,l=n[0],a=n[3],c=n[6],o=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],x=r[0],m=r[3],p=r[6],S=r[1],y=r[4],b=r[7],R=r[2],T=r[5],C=r[8];return s[0]=l*x+a*S+c*R,s[3]=l*m+a*y+c*T,s[6]=l*p+a*b+c*C,s[1]=o*x+u*S+d*R,s[4]=o*m+u*y+d*T,s[7]=o*p+u*b+d*C,s[2]=f*x+h*S+g*R,s[5]=f*m+h*y+g*T,s[8]=f*p+h*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],a=e[5],c=e[6],o=e[7],u=e[8];return t*l*u-t*a*o-n*s*u+n*a*c+r*s*o-r*l*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],a=e[5],c=e[6],o=e[7],u=e[8],d=u*l-a*o,f=a*c-u*s,h=o*s-l*c,g=t*d+n*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*o-u*n)*x,e[2]=(a*n-r*l)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(n*c-o*t)*x,e[8]=(l*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,l,a){const c=Math.cos(s),o=Math.sin(s);return this.set(n*c,n*o,-n*(c*l+o*a)+l+e,-r*o,r*c,-r*(-o*l+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Fe,Ba=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pc(){const i={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(r,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===Qe&&(r.r=dn(r.r),r.g=dn(r.g),r.b=dn(r.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Qe&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?_r:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,l){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ui]:{primaries:e,whitePoint:n,transfer:_r,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const Xe=Pc();function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class Dc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xn===void 0&&(Xn=xr("canvas")),Xn.width=e.width,Xn.height=e.height;const r=Xn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=dn(s[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dn(t[n]/255)*255):t[n]=dn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lc=0;class da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?s.push(Fr(r[l].image)):s.push(Fr(r[l]))}else s=Fr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Uc=0;const Or=new H;class Tt extends di{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=hn,r=hn,s=St,l=zn,a=jt,c=zt,o=Tt.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=pi(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Or).x}get height(){return this.source.getSize(Or).y}get depth(){return this.source.getSize(Or).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=zo;Tt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,o=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(o+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(o+1)/2,b=(h+1)/2,R=(p+1)/2,T=(u+f)/4,C=(d+x)/4,v=(g+m)/4;return y>b&&y>R?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=C/n):b>R?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=v/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=C/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(f-u)/S,this.w=Math.acos((o+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ic extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Tt(r),l=n.count;for(let a=0;a<l;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new da(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rt extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yo extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nc extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{constructor(e,t,n,r,s,l,a,c,o,u,d,f,h,g,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,l,a,c,o,u,d,f,h,g,x,m)}set(e,t,n,r,s,l,a,c,o,u,d,f,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=l,p[9]=a,p[13]=c,p[2]=o,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/jn.setFromMatrixColumn(e,0).length(),s=1/jn.setFromMatrixColumn(e,1).length(),l=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,l=Math.cos(n),a=Math.sin(n),c=Math.cos(r),o=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=l*u,h=l*d,g=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=o,t[1]=h+g*o,t[5]=f-x*o,t[9]=-a*c,t[2]=x-f*o,t[6]=g+h*o,t[10]=l*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=o*u,x=o*d;t[0]=f+x*a,t[4]=g*a-h,t[8]=l*o,t[1]=l*d,t[5]=l*u,t[9]=-a,t[2]=h*a-g,t[6]=x+f*a,t[10]=l*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=o*u,x=o*d;t[0]=f-x*a,t[4]=-l*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=l*u,t[9]=x-f*a,t[2]=-l*o,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){const f=l*u,h=l*d,g=a*u,x=a*d;t[0]=c*u,t[4]=g*o-h,t[8]=f*o+x,t[1]=c*d,t[5]=x*o+f,t[9]=h*o-g,t[2]=-o,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){const f=l*c,h=l*o,g=a*c,x=a*o;t[0]=c*u,t[4]=x-f*d,t[8]=g*d+h,t[1]=d,t[5]=l*u,t[9]=-a*u,t[2]=-o*u,t[6]=h*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=l*c,h=l*o,g=a*c,x=a*o;t[0]=c*u,t[4]=-d,t[8]=o*u,t[1]=f*d+x,t[5]=l*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fc,e,Oc)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),vn.crossVectors(n,Dt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),vn.crossVectors(n,Dt)),vn.normalize(),Vi.crossVectors(Dt,vn),r[0]=vn.x,r[4]=Vi.x,r[8]=Dt.x,r[1]=vn.y,r[5]=Vi.y,r[9]=Dt.y,r[2]=vn.z,r[6]=Vi.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,l=n[0],a=n[4],c=n[8],o=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],y=n[7],b=n[11],R=n[15],T=r[0],C=r[4],v=r[8],E=r[12],B=r[1],w=r[5],F=r[9],z=r[13],I=r[2],D=r[6],L=r[10],V=r[14],ee=r[3],j=r[7],Y=r[11],Q=r[15];return s[0]=l*T+a*B+c*I+o*ee,s[4]=l*C+a*w+c*D+o*j,s[8]=l*v+a*F+c*L+o*Y,s[12]=l*E+a*z+c*V+o*Q,s[1]=u*T+d*B+f*I+h*ee,s[5]=u*C+d*w+f*D+h*j,s[9]=u*v+d*F+f*L+h*Y,s[13]=u*E+d*z+f*V+h*Q,s[2]=g*T+x*B+m*I+p*ee,s[6]=g*C+x*w+m*D+p*j,s[10]=g*v+x*F+m*L+p*Y,s[14]=g*E+x*z+m*V+p*Q,s[3]=S*T+y*B+b*I+R*ee,s[7]=S*C+y*w+b*D+R*j,s[11]=S*v+y*F+b*L+R*Y,s[15]=S*E+y*z+b*V+R*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],l=e[1],a=e[5],c=e[9],o=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=c*h-o*f,y=a*h-o*d,b=a*f-c*d,R=l*h-o*u,T=l*f-c*u,C=l*d-a*u;return t*(x*S-m*y+p*b)-n*(g*S-m*R+p*T)+r*(g*y-x*R+p*C)-s*(g*b-x*T+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],a=e[5],c=e[6],o=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=t*a-n*l,y=t*c-r*l,b=t*o-s*l,R=n*c-r*a,T=n*o-s*a,C=r*o-s*c,v=u*x-d*g,E=u*m-f*g,B=u*p-h*g,w=d*m-f*x,F=d*p-h*x,z=f*p-h*m,I=S*z-y*F+b*w+R*B-T*E+C*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=(a*z-c*F+o*w)*D,e[1]=(r*F-n*z-s*w)*D,e[2]=(x*C-m*T+p*R)*D,e[3]=(f*T-d*C-h*R)*D,e[4]=(c*B-l*z-o*E)*D,e[5]=(t*z-r*B+s*E)*D,e[6]=(m*b-g*C-p*y)*D,e[7]=(u*C-f*b+h*y)*D,e[8]=(l*F-a*B+o*v)*D,e[9]=(n*B-t*F-s*v)*D,e[10]=(g*T-x*b+p*S)*D,e[11]=(d*b-u*T-h*S)*D,e[12]=(a*E-l*w-c*v)*D,e[13]=(t*w-n*E+r*v)*D,e[14]=(x*y-g*R-m*S)*D,e[15]=(u*R-d*y+f*S)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,l=e.x,a=e.y,c=e.z,o=s*l,u=s*a;return this.set(o*l+n,o*a-r*c,o*c+r*a,0,o*a+r*c,u*a+n,u*c-r*l,0,o*c-r*a,u*c+r*l,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,l){return this.set(1,n,s,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,l=t._y,a=t._z,c=t._w,o=s+s,u=l+l,d=a+a,f=s*o,h=s*u,g=s*d,x=l*u,m=l*d,p=a*d,S=c*o,y=c*u,b=c*d,R=n.x,T=n.y,C=n.z;return r[0]=(1-(x+p))*R,r[1]=(h+b)*R,r[2]=(g-y)*R,r[3]=0,r[4]=(h-b)*T,r[5]=(1-(f+p))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+y)*C,r[9]=(m-S)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let l=jn.set(r[0],r[1],r[2]).length();const a=jn.set(r[4],r[5],r[6]).length(),c=jn.set(r[8],r[9],r[10]).length();s<0&&(l=-l),Ht.copy(this);const o=1/l,u=1/a,d=1/c;return Ht.elements[0]*=o,Ht.elements[1]*=o,Ht.elements[2]*=o,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=d,Ht.elements[9]*=d,Ht.elements[10]*=d,t.setFromRotationMatrix(Ht),n.x=l,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,l,a=Jt,c=!1){const o=this.elements,u=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let g,x;if(c)g=s/(l-s),x=l*s/(l-s);else if(a===Jt)g=-(l+s)/(l-s),x=-2*l*s/(l-s);else if(a===vr)g=-l/(l-s),x=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=u,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=d,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=x,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,l,a=Jt,c=!1){const o=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),h=-(n+r)/(n-r);let g,x;if(c)g=1/(l-s),x=l/(l-s);else if(a===Jt)g=-2/(l-s),x=-(l+s)/(l-s);else if(a===vr)g=-1/(l-s),x=-s/(l-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=u,o[4]=0,o[8]=0,o[12]=f,o[1]=0,o[5]=d,o[9]=0,o[13]=h,o[2]=0,o[6]=0,o[10]=g,o[14]=x,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jn=new H,Ht=new ut,Fc=new H(0,0,0),Oc=new H(1,1,1),vn=new H,Vi=new H,Dt=new H,Va=new ut,Ga=new mi;class mn{constructor(e=0,t=0,n=0,r=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],l=r[4],a=r[8],c=r[1],o=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(f,o),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-l,o)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-l,o));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,o),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,o),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bc=0;const Ha=new H,qn=new mi,an=new ut,Gi=new H,_i=new H,zc=new H,Vc=new mi,ka=new H(1,0,0),Wa=new H(0,1,0),Xa=new H(0,0,1),ja={type:"added"},Gc={type:"removed"},Yn={type:"childadded",child:null},Br={type:"childremoved",child:null};class Ct extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new H,t=new mn,n=new mi,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Fe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(ka,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(Xa,e)}translateOnAxis(e,t){return Ha.copy(e).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ka,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(Xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gi.copy(e):Gi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(_i,Gi,this.up):an.lookAt(Gi,_i,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(an),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ja),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gc),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ja),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,zc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let o=0,u=c.length;o<u;o++){const d=c[o];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,o=this.material.length;c<o;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=l(e.geometries),c=l(e.materials),o=l(e.textures),u=l(e.images),d=l(e.shapes),f=l(e.skeletons),h=l(e.animations),g=l(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function l(a){const c=[];for(const o in a){const u=a[o];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new H(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ti extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hc={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,l=null;const a=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){l=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(o,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=o.joints["index-finger-tip"],d=o.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;o.inputState.pinching&&f>h+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&f<=h-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hc)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),o!==null&&(o.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function Vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=ha(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=Vr(l,s,e+1/3),this.g=Vr(l,s,e),this.b=Vr(l,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Xe.workingToColorSpace(Mt.copy(this),e),Math.round(ke(Mt.r*255,0,255))*65536+Math.round(ke(Mt.g*255,0,255))*256+Math.round(ke(Mt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,l=Math.max(n,r,s),a=Math.min(n,r,s);let c,o;const u=(a+l)/2;if(a===l)c=0,o=0;else{const d=l-a;switch(o=u<=.5?d/(l+a):d/(2-l-a),l){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=o,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Ot){Xe.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(Hi);const n=Ri(xn.h,Hi.h,t),r=Ri(xn.s,Hi.s,t),s=Ri(xn.l,Hi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new He;He.NAMES=Zo;class pa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new pa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kc extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kt=new H,on=new H,Gr=new H,ln=new H,Kn=new H,Zn=new H,qa=new H,Hr=new H,kr=new H,Wr=new H,Xr=new ct,jr=new ct,qr=new ct;class Xt{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kt.subVectors(r,t),on.subVectors(n,t),Gr.subVectors(e,t);const l=kt.dot(kt),a=kt.dot(on),c=kt.dot(Gr),o=on.dot(on),u=on.dot(Gr),d=l*o-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(o*c-a*u)*f,g=(l*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,r,s,l,a,c){return this.getBarycoord(e,t,n,r,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ln.x),c.addScaledVector(l,ln.y),c.addScaledVector(a,ln.z),c)}static getInterpolatedAttribute(e,t,n,r,s,l){return Xr.setScalar(0),jr.setScalar(0),qr.setScalar(0),Xr.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,n),qr.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Xr,s.x),l.addScaledVector(jr,s.y),l.addScaledVector(qr,s.z),l}static isFrontFacing(e,t,n,r){return kt.subVectors(n,t),on.subVectors(e,t),kt.cross(on).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),kt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let l,a;Kn.subVectors(r,n),Zn.subVectors(s,n),Hr.subVectors(e,n);const c=Kn.dot(Hr),o=Zn.dot(Hr);if(c<=0&&o<=0)return t.copy(n);kr.subVectors(e,r);const u=Kn.dot(kr),d=Zn.dot(kr);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*o;if(f<=0&&c>=0&&u<=0)return l=c/(c-u),t.copy(n).addScaledVector(Kn,l);Wr.subVectors(e,s);const h=Kn.dot(Wr),g=Zn.dot(Wr);if(g>=0&&h<=g)return t.copy(s);const x=h*o-c*g;if(x<=0&&o>=0&&g<=0)return a=o/(o-g),t.copy(n).addScaledVector(Zn,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return qa.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(qa,a);const p=1/(m+x+f);return l=x*p,a=f*p,t.copy(n).addScaledVector(Kn,l).addScaledVector(Zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ui{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,a=s.count;l<a;l++)e.isMesh===!0?e.getVertexPosition(l,Wt):Wt.fromBufferAttribute(s,l),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const r=e.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Wi.subVectors(this.max,vi),$n.subVectors(e.a,vi),Jn.subVectors(e.b,vi),Qn.subVectors(e.c,vi),Mn.subVectors(Jn,$n),Sn.subVectors(Qn,Jn),Pn.subVectors($n,Qn);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Pn.z,Pn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Pn.z,0,-Pn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Pn.y,Pn.x,0];return!Yr(t,$n,Jn,Qn,Wi)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,$n,Jn,Qn,Wi))?!1:(Xi.crossVectors(Mn,Sn),t=[Xi.x,Xi.y,Xi.z],Yr(t,$n,Jn,Qn,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cn=[new H,new H,new H,new H,new H,new H,new H,new H],Wt=new H,ki=new Ui,$n=new H,Jn=new H,Qn=new H,Mn=new H,Sn=new H,Pn=new H,vi=new H,Wi=new H,Xi=new H,Dn=new H;function Yr(i,e,t,n,r){for(let s=0,l=i.length-3;s<=l;s+=3){Dn.fromArray(i,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),c=e.dot(Dn),o=t.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(c,o,u),Math.min(c,o,u))>a)return!1}return!0}const ft=new H,ji=new Ge;let Wc=0;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}}class $o extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jo extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Xc=new Ui,xi=new H,Kr=new H;class Tr{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,l=e.length;s<l;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Kr)),this.expandByPoint(xi.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jc=0;const Ft=new ut,Zr=new Ct,ei=new H,Lt=new Ui,Mi=new Ui,mt=new H;class Nt extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cc(e)?Jo:$o)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Zr.lookAt(e),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const a=t[s];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Lt.min,Mi.min),Lt.expandByPoint(mt),mt.addVectors(Lt.max,Mi.max),Lt.expandByPoint(mt)):(Lt.expandByPoint(Mi.min),Lt.expandByPoint(Mi.max))}Lt.getCenter(n);let r=0;for(let s=0,l=e.count;s<l;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,l=t.length;s<l;s++){const a=t[s],c=this.morphTargetsRelative;for(let o=0,u=a.count;o<u;o++)mt.fromBufferAttribute(a,o),c&&(ei.fromBufferAttribute(e,o),mt.add(ei)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new H,c[v]=new H;const o=new H,u=new H,d=new H,f=new Ge,h=new Ge,g=new Ge,x=new H,m=new H;function p(v,E,B){o.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,B),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,E),g.fromBufferAttribute(s,B),u.sub(o),d.sub(o),h.sub(f),g.sub(f);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(w),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(w),a[v].add(x),a[E].add(x),a[B].add(x),c[v].add(m),c[E].add(m),c[B].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,E=S.length;v<E;++v){const B=S[v],w=B.start,F=B.count;for(let z=w,I=w+F;z<I;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new H,b=new H,R=new H,T=new H;function C(v){R.fromBufferAttribute(r,v),T.copy(R);const E=a[v];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),b.crossVectors(T,E);const w=b.dot(c[v])<0?-1:1;l.setXYZW(v,y.x,y.y,y.z,w)}for(let v=0,E=S.length;v<E;++v){const B=S[v],w=B.start,F=B.count;for(let z=w,I=w+F;z<I;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new H,s=new H,l=new H,a=new H,c=new H,o=new H,u=new H,d=new H;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),l.fromBufferAttribute(t,m),u.subVectors(l,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),a.add(u),c.add(u),o.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,o.x,o.y,o.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),u.subVectors(l,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,c){const o=a.array,u=a.itemSize,d=a.normalized,f=new o.constructor(c.length*u);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=o[h++]}return new It(f,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],o=e(c,n);t.setAttribute(a,o)}const s=this.morphAttributes;for(const a in s){const c=[],o=s[a];for(let u=0,d=o.length;u<d;u++){const f=o[u],h=e(f,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,c=l.length;a<c;a++){const o=l[a];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const o=n[c];e.data.attributes[c]=o.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],u=[];for(let d=0,f=o.length;d<f;d++){const h=o[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const o in r){const u=r[o];this.setAttribute(o,u.clone(t))}const s=e.morphAttributes;for(const o in s){const u=[],d=s[o];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[o]=u}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let o=0,u=l.length;o<u;o++){const d=l[o];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qc=0;class Ii extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=si,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=us,this.blendDst=fs,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==us&&(n.blendSrc=this.blendSrc),this.blendDst!==fs&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const l=[];for(const a in s){const c=s[a];delete c.metadata,l.push(c)}return l}if(t){const s=r(e.textures),l=r(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const un=new H,$r=new H,qi=new H,En=new H,Jr=new H,Yi=new H,Qr=new H;class Qo{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$r.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),En.copy(this.origin).sub($r);const s=e.distanceTo(t)*.5,l=-this.direction.dot(qi),a=En.dot(this.direction),c=-En.dot(qi),o=En.lengthSq(),u=Math.abs(1-l*l);let d,f,h,g;if(u>0)if(d=l*c-a,f=l*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,h=d*(d+l*f+2*a)+f*(l*d+f+2*c)+o}else f=s,d=Math.max(0,-(l*f+a)),h=-d*d+f*(f+2*c)+o;else f=-s,d=Math.max(0,-(l*f+a)),h=-d*d+f*(f+2*c)+o;else f<=-g?(d=Math.max(0,-(-l*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+o):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+o):(d=Math.max(0,-(l*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+o);else f=l>0?-s:s,d=Math.max(0,-(l*f+a)),h=-d*d+f*(f+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($r).addScaledVector(qi,f),h}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const l=Math.sqrt(s-r),a=n-l,c=n+l;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,l,a,c;const o=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return o>=0?(n=(e.min.x-f.x)*o,r=(e.max.x-f.x)*o):(n=(e.max.x-f.x)*o,r=(e.min.x-f.x)*o),u>=0?(s=(e.min.y-f.y)*u,l=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,l=(e.min.y-f.y)*u),n>l||s>r||((s>n||isNaN(n))&&(n=s),(l<r||isNaN(r))&&(r=l),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){Jr.subVectors(t,e),Yi.subVectors(n,e),Qr.crossVectors(Jr,Yi);let l=this.direction.dot(Qr),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;En.subVectors(this.origin,e);const c=a*this.direction.dot(Yi.crossVectors(En,Yi));if(c<0)return null;const o=a*this.direction.dot(Jr.cross(En));if(o<0||c+o>l)return null;const u=-a*En.dot(Qr);return u<0?null:this.at(u/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ma extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ya=new ut,Ln=new Qo,Ki=new Tr,Ka=new H,Zi=new H,$i=new H,Ji=new H,es=new H,Qi=new H,Za=new H,er=new H;class nn extends Ct{constructor(e=new Nt,t=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qi.set(0,0,0);for(let c=0,o=s.length;c<o;c++){const u=a[c],d=s[c];u!==0&&(es.fromBufferAttribute(d,e),l?Qi.addScaledVector(es,u):Qi.addScaledVector(es.sub(t),u))}t.add(Qi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(s),Ln.copy(e.ray).recast(e.near),!(Ki.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Ki,Ka)===null||Ln.origin.distanceToSquared(Ka)>(e.far-e.near)**2))&&(Ya.copy(s).invert(),Ln.copy(e.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let r;const s=this.geometry,l=this.material,a=s.index,c=s.attributes.position,o=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(l))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=l[m.materialIndex],S=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=S,R=y;b<R;b+=3){const T=a.getX(b),C=a.getX(b+1),v=a.getX(b+2);r=tr(this,p,e,n,o,u,d,T,C,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=tr(this,l,e,n,o,u,d,S,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=l[m.materialIndex],S=Math.max(m.start,h.start),y=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=S,R=y;b<R;b+=3){const T=b,C=b+1,v=b+2;r=tr(this,p,e,n,o,u,d,T,C,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const S=m,y=m+1,b=m+2;r=tr(this,l,e,n,o,u,d,S,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Yc(i,e,t,n,r,s,l,a){let c;if(e.side===wt?c=n.intersectTriangle(l,s,r,!0,a):c=n.intersectTriangle(r,s,l,e.side===wn,a),c===null)return null;er.copy(a),er.applyMatrix4(i.matrixWorld);const o=t.ray.origin.distanceTo(er);return o<t.near||o>t.far?null:{distance:o,point:er.clone(),object:i}}function tr(i,e,t,n,r,s,l,a,c,o){i.getVertexPosition(a,Zi),i.getVertexPosition(c,$i),i.getVertexPosition(o,Ji);const u=Yc(i,e,t,n,Zi,$i,Ji,Za);if(u){const d=new H;Xt.getBarycoord(Za,Zi,$i,Ji,d),r&&(u.uv=Xt.getInterpolatedAttribute(r,a,c,o,d,new Ge)),s&&(u.uv1=Xt.getInterpolatedAttribute(s,a,c,o,d,new Ge)),l&&(u.normal=Xt.getInterpolatedAttribute(l,a,c,o,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:o,normal:new H,materialIndex:0};Xt.getNormal(Zi,$i,Ji,f.normal),u.face=f,u.barycoord=d}return u}class Kc extends Tt{constructor(e=null,t=1,n=1,r,s,l,a,c,o=_t,u=_t,d,f){super(null,l,a,c,o,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ts=new H,Zc=new H,$c=new Fe;class Fn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ts.subVectors(n,t).cross(Zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$c.getNormalMatrix(e),r=this.coplanarPoint(ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Tr,Jc=new Ge(.5,.5),nr=new H;class el{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,l=new Fn){this.planes=[e,t,n,r,s,l]}set(e,t,n,r,s,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jt,n=!1){const r=this.planes,s=e.elements,l=s[0],a=s[1],c=s[2],o=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],S=s[12],y=s[13],b=s[14],R=s[15];if(r[0].setComponents(o-l,h-u,p-g,R-S).normalize(),r[1].setComponents(o+l,h+u,p+g,R+S).normalize(),r[2].setComponents(o+a,h+d,p+x,R+y).normalize(),r[3].setComponents(o-a,h-d,p-x,R-y).normalize(),n)r[4].setComponents(c,f,m,b).normalize(),r[5].setComponents(o-c,h-f,p-m,R-b).normalize();else if(r[4].setComponents(o-c,h-f,p-m,R-b).normalize(),t===Jt)r[5].setComponents(o+c,h+f,p+m,R+b).normalize();else if(t===vr)r[5].setComponents(c,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){Un.center.set(0,0,0);const t=Jc.distanceTo(e.center);return Un.radius=.7071067811865476+t,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(nr.x=r.normal.x>0?e.max.x:e.min.x,nr.y=r.normal.y>0?e.max.y:e.min.y,nr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qs extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sr=new H,Er=new H,$a=new ut,Si=new Qo,ir=new Tr,ns=new H,Ja=new H;class Qa extends Ct{constructor(e=new Nt,t=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Sr.fromBufferAttribute(t,r-1),Er.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Sr.distanceTo(Er);e.setAttribute("lineDistance",new Vt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),ir.radius+=s,e.ray.intersectsSphere(ir)===!1)return;$a.copy(r).invert(),Si.copy(e.ray).applyMatrix4($a);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,o=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,l.start),g=Math.min(u.count,l.start+l.count);for(let x=h,m=g-1;x<m;x+=o){const p=u.getX(x),S=u.getX(x+1),y=rr(this,e,Si,c,p,S,x);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(h),p=rr(this,e,Si,c,x,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,l.start),g=Math.min(f.count,l.start+l.count);for(let x=h,m=g-1;x<m;x+=o){const p=rr(this,e,Si,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=rr(this,e,Si,c,g-1,h,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rr(i,e,t,n,r,s,l){const a=i.geometry.attributes.position;if(Sr.fromBufferAttribute(a,r),Er.fromBufferAttribute(a,s),t.distanceSqToSegment(Sr,Er,ns,Ja)>n)return;ns.applyMatrix4(i.matrixWorld);const o=e.ray.origin.distanceTo(ns);if(!(o<e.near||o>e.far))return{distance:o,point:Ja.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}class tl extends Tt{constructor(e=[],t=Gn,n,r,s,l,a,c,o,u){super(e,t,n,r,s,l,a,c,o,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Li extends Tt{constructor(e,t,n=tn,r,s,l,a=_t,c=_t,o,u=pn,d=1){if(u!==pn&&u!==Vn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,l,a,c,u,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qc extends Li{constructor(e,t=tn,n=Gn,r,s,l=_t,a=_t,c,o=pn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,l,a,c,o),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nl extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ni extends Nt{constructor(e=1,t=1,n=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:l};const a=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const c=[],o=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,l,s,0),g("z","y","x",1,-1,n,t,-e,l,s,1),g("x","z","y",1,1,e,n,t,r,l,2),g("x","z","y",1,-1,e,n,-t,r,l,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(d,2));function g(x,m,p,S,y,b,R,T,C,v,E){const B=b/C,w=R/v,F=b/2,z=R/2,I=T/2,D=C+1,L=v+1;let V=0,ee=0;const j=new H;for(let Y=0;Y<L;Y++){const Q=Y*w-z;for(let J=0;J<D;J++){const xe=J*B-F;j[x]=xe*S,j[m]=Q*y,j[p]=I,o.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=T>0?1:-1,u.push(j.x,j.y,j.z),d.push(J/C),d.push(1-Y/v),V+=1}}for(let Y=0;Y<v;Y++)for(let Q=0;Q<C;Q++){const J=f+Q+D*Y,xe=f+Q+D*(Y+1),W=f+(Q+1)+D*(Y+1),Ke=f+(Q+1)+D*Y;c.push(J,xe,Ke),c.push(xe,W,Ke),ee+=6}a.addGroup(h,ee,E),h+=ee,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ar extends Nt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,l=t/2,a=Math.floor(n),c=Math.floor(r),o=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const S=p*f-l;for(let y=0;y<o;y++){const b=y*d-s;g.push(b,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+o*p,b=S+o*(p+1),R=S+1+o*(p+1),T=S+1+o*p;h.push(y,b,T),h.push(b,R,T)}this.setIndex(h),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}function fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=fi(i[t]);for(const r in n)e[r]=n[r]}return e}function eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const yr={clone:fi,merge:bt};var tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fi(e.uniforms),this.uniformsGroups=eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class iu extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ru extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class su extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sr=new H,ar=new mi,Yt=new H;class rl extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sr,ar,Yt),Yt.x===1&&Yt.y===1&&Yt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,ar,Yt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(sr,ar,Yt),Yt.x===1&&Yt.y===1&&Yt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,ar,Yt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yn=new H,eo=new Ge,to=new Ge;class Bt extends rl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yn.x,yn.y).multiplyScalar(-e/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-e/yn.z)}getViewSize(e,t){return this.getViewBounds(e,eo,to),t.subVectors(to,eo)}setViewOffset(e,t,n,r,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,o=l.fullHeight;s+=l.offsetX*r/c,t-=l.offsetY*n/o,r*=l.width/c,n*=l.height/o}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ga extends rl{constructor(e=-1,t=1,n=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,l=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=o*this.view.offsetX,l=s+o*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,l,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ti=-90,ni=1;class au extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(ti,ni,e,t);r.layers=this.layers,this.add(r);const s=new Bt(ti,ni,e,t);s.layers=this.layers,this.add(s);const l=new Bt(ti,ni,e,t);l.layers=this.layers,this.add(l);const a=new Bt(ti,ni,e,t);a.layers=this.layers,this.add(a);const c=new Bt(ti,ni,e,t);c.layers=this.layers,this.add(c);const o=new Bt(ti,ni,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,l,a,c]=t;for(const o of t)this.remove(o);if(e===Jt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,a,c,o,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ou extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lu{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cu.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cu(){this._document.hidden===!1&&this.reset()}class uu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function no(i,e,t,n){const r=fu(n);switch(t){case Wo:return i*e;case jo:return i*e/r.components*r.byteLength;case oa:return i*e/r.components*r.byteLength;case ci:return i*e*2/r.components*r.byteLength;case la:return i*e*2/r.components*r.byteLength;case Xo:return i*e*3/r.components*r.byteLength;case jt:return i*e*4/r.components*r.byteLength;case ca:return i*e*4/r.components*r.byteLength;case ur:case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:case bs:return Math.max(i,16)*Math.max(e,8)/4;case Ss:case ys:return Math.max(i,8)*Math.max(e,8)/2;case Ts:case As:case Rs:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ws:case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Us:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Is:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ns:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Os:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ks:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ws:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case js:case qs:case Ys:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ks:case Zs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $s:case Js:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fu(i){switch(i){case zt:case Vo:return{byteLength:1,components:1};case Ci:case Go:case Ut:return{byteLength:2,components:1};case sa:case aa:return{byteLength:2,components:4};case tn:case ra:case $t:return{byteLength:4,components:1};case Ho:case ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sl(){let i=null,e=!1,t=null,n=null;function r(s,l){t(s,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function hu(i){const e=new WeakMap;function t(a,c){const o=a.array,u=a.usage,d=o.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,o,u),a.onUploadCallback();let h;if(o instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)h=i.HALF_FLOAT;else if(o instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)h=i.SHORT;else if(o instanceof Uint32Array)h=i.UNSIGNED_INT;else if(o instanceof Int32Array)h=i.INT;else if(o instanceof Int8Array)h=i.BYTE;else if(o instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:f,type:h,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,o){const u=c.array,d=c.updateRanges;if(i.bindBuffer(o,a),d.length===0)i.bufferSubData(o,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const x=d[h];i.bufferSubData(o,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function l(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const o=e.get(a);if(o===void 0)e.set(a,t(a,c));else if(o.version<a.version){if(o.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,a,c),o.version=a.version}}return{get:r,remove:s,update:l}}var du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Au=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ou=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ef=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ff=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,df=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,th=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ih=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ah=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ph=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ah=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ph=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ih=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:du,alphahash_pars_fragment:pu,alphamap_fragment:mu,alphamap_pars_fragment:gu,alphatest_fragment:_u,alphatest_pars_fragment:vu,aomap_fragment:xu,aomap_pars_fragment:Mu,batching_pars_vertex:Su,batching_vertex:Eu,begin_vertex:yu,beginnormal_vertex:bu,bsdfs:Tu,iridescence_fragment:Au,bumpmap_pars_fragment:wu,clipping_planes_fragment:Ru,clipping_planes_pars_fragment:Cu,clipping_planes_pars_vertex:Pu,clipping_planes_vertex:Du,color_fragment:Lu,color_pars_fragment:Uu,color_pars_vertex:Iu,color_vertex:Nu,common:Fu,cube_uv_reflection_fragment:Ou,defaultnormal_vertex:Bu,displacementmap_pars_vertex:zu,displacementmap_vertex:Vu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Hu,colorspace_fragment:ku,colorspace_pars_fragment:Wu,envmap_fragment:Xu,envmap_common_pars_fragment:ju,envmap_pars_fragment:qu,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:af,envmap_vertex:Ku,fog_vertex:Zu,fog_pars_vertex:$u,fog_fragment:Ju,fog_pars_fragment:Qu,gradientmap_pars_fragment:ef,lightmap_pars_fragment:tf,lights_lambert_fragment:nf,lights_lambert_pars_fragment:rf,lights_pars_begin:sf,lights_toon_fragment:of,lights_toon_pars_fragment:lf,lights_phong_fragment:cf,lights_phong_pars_fragment:uf,lights_physical_fragment:ff,lights_physical_pars_fragment:hf,lights_fragment_begin:df,lights_fragment_maps:pf,lights_fragment_end:mf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:xf,map_fragment:Mf,map_pars_fragment:Sf,map_particle_fragment:Ef,map_particle_pars_fragment:yf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Tf,morphinstance_vertex:Af,morphcolor_vertex:wf,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Df,normal_fragment_maps:Lf,normal_pars_fragment:Uf,normal_pars_vertex:If,normal_vertex:Nf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Vf,opaque_fragment:Gf,packing:Hf,premultiplied_alpha_fragment:kf,project_vertex:Wf,dithering_fragment:Xf,dithering_pars_fragment:jf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:Zf,shadowmap_vertex:$f,shadowmask_pars_fragment:Jf,skinbase_vertex:Qf,skinning_pars_vertex:eh,skinning_vertex:th,skinnormal_vertex:nh,specularmap_fragment:ih,specularmap_pars_fragment:rh,tonemapping_fragment:sh,tonemapping_pars_fragment:ah,transmission_fragment:oh,transmission_pars_fragment:lh,uv_pars_fragment:ch,uv_pars_vertex:uh,uv_vertex:fh,worldpos_vertex:hh,background_vert:dh,background_frag:ph,backgroundCube_vert:mh,backgroundCube_frag:gh,cube_vert:_h,cube_frag:vh,depth_vert:xh,depth_frag:Mh,distance_vert:Sh,distance_frag:Eh,equirect_vert:yh,equirect_frag:bh,linedashed_vert:Th,linedashed_frag:Ah,meshbasic_vert:wh,meshbasic_frag:Rh,meshlambert_vert:Ch,meshlambert_frag:Ph,meshmatcap_vert:Dh,meshmatcap_frag:Lh,meshnormal_vert:Uh,meshnormal_frag:Ih,meshphong_vert:Nh,meshphong_frag:Fh,meshphysical_vert:Oh,meshphysical_frag:Bh,meshtoon_vert:zh,meshtoon_frag:Vh,points_vert:Gh,points_frag:Hh,shadow_vert:kh,shadow_frag:Wh,sprite_vert:Xh,sprite_frag:jh},ue={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Zt={basic:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:bt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:bt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:bt([ue.points,ue.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:bt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:bt([ue.common,ue.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:bt([ue.sprite,ue.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:bt([ue.common,ue.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:bt([ue.lights,ue.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Zt.physical={uniforms:bt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const or={r:0,b:0,g:0},In=new mn,qh=new ut;function Yh(i,e,t,n,r,s){const l=new He(0);let a=r===!0?0:1,c,o,u=null,d=0,f=null;function h(S){let y=S.isScene===!0?S.background:null;if(y&&y.isTexture){const b=S.backgroundBlurriness>0;y=e.get(y,b)}return y}function g(S){let y=!1;const b=h(S);b===null?m(l,a):b&&b.isColor&&(m(b,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,y){const b=h(y);b&&(b.isCubeTexture||b.mapping===br)?(o===void 0&&(o=new nn(new Ni(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:fi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),In.copy(y.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),o.material.uniforms.envMap.value=b,o.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(qh.makeRotationFromEuler(In)),o.material.toneMapped=Xe.getTransfer(b.colorSpace)!==Qe,(u!==b||d!==b.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),o.layers.enableAll(),S.unshift(o,o.geometry,o.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new nn(new Ar(2,2),new Et({name:"BackgroundMaterial",uniforms:fi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==Qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB(or,il(i)),t.buffers.color.setClear(or.r,or.g,or.b,y,s)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return l},setClearColor:function(S,y=1){l.set(S),a=y,m(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(l,a)},render:g,addToRenderList:x,dispose:p}}function Kh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,l=!1;function a(w,F,z,I,D){let L=!1;const V=d(w,I,z,F);s!==V&&(s=V,o(s.object)),L=h(w,I,z,D),L&&g(w,I,z,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(L||l)&&(l=!1,b(w,F,z,I),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function o(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function d(w,F,z,I){const D=I.wireframe===!0;let L=n[F.id];L===void 0&&(L={},n[F.id]=L);const V=w.isInstancedMesh===!0?w.id:0;let ee=L[V];ee===void 0&&(ee={},L[V]=ee);let j=ee[z.id];j===void 0&&(j={},ee[z.id]=j);let Y=j[D];return Y===void 0&&(Y=f(c()),j[D]=Y),Y}function f(w){const F=[],z=[],I=[];for(let D=0;D<t;D++)F[D]=0,z[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:I,object:w,attributes:{},index:null}}function h(w,F,z,I){const D=s.attributes,L=F.attributes;let V=0;const ee=z.getAttributes();for(const j in ee)if(ee[j].location>=0){const Q=D[j];let J=L[j];if(J===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),Q===void 0||Q.attribute!==J||J&&Q.data!==J.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function g(w,F,z,I){const D={},L=F.attributes;let V=0;const ee=z.getAttributes();for(const j in ee)if(ee[j].location>=0){let Q=L[j];Q===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor));const J={};J.attribute=Q,Q&&Q.data&&(J.data=Q.data),D[j]=J,V++}s.attributes=D,s.attributesNum=V,s.index=I}function x(){const w=s.newAttributes;for(let F=0,z=w.length;F<z;F++)w[F]=0}function m(w){p(w,0)}function p(w,F){const z=s.newAttributes,I=s.enabledAttributes,D=s.attributeDivisors;z[w]=1,I[w]===0&&(i.enableVertexAttribArray(w),I[w]=1),D[w]!==F&&(i.vertexAttribDivisor(w,F),D[w]=F)}function S(){const w=s.newAttributes,F=s.enabledAttributes;for(let z=0,I=F.length;z<I;z++)F[z]!==w[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function y(w,F,z,I,D,L,V){V===!0?i.vertexAttribIPointer(w,F,z,D,L):i.vertexAttribPointer(w,F,z,I,D,L)}function b(w,F,z,I){x();const D=I.attributes,L=z.getAttributes(),V=F.defaultAttributeValues;for(const ee in L){const j=L[ee];if(j.location>=0){let Y=D[ee];if(Y===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),Y!==void 0){const Q=Y.normalized,J=Y.itemSize,xe=e.get(Y);if(xe===void 0)continue;const W=xe.buffer,Ke=xe.type,G=xe.bytesPerElement,te=Ke===i.INT||Ke===i.UNSIGNED_INT||Y.gpuType===ra;if(Y.isInterleavedBufferAttribute){const ie=Y.data,Te=ie.stride,fe=Y.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<j.locationSize;Ae++)p(j.location+Ae,ie.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)m(j.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Ae=0;Ae<j.locationSize;Ae++)y(j.location+Ae,J/j.locationSize,Ke,Q,Te*G,(fe+J/j.locationSize*Ae)*G,te)}else{if(Y.isInstancedBufferAttribute){for(let ie=0;ie<j.locationSize;ie++)p(j.location+ie,Y.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<j.locationSize;ie++)m(j.location+ie);i.bindBuffer(i.ARRAY_BUFFER,W);for(let ie=0;ie<j.locationSize;ie++)y(j.location+ie,J/j.locationSize,Ke,Q,J*G,J/j.locationSize*ie*G,te)}}else if(V!==void 0){const Q=V[ee];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(j.location,Q);break;case 3:i.vertexAttrib3fv(j.location,Q);break;case 4:i.vertexAttrib4fv(j.location,Q);break;default:i.vertexAttrib1fv(j.location,Q)}}}}S()}function R(){E();for(const w in n){const F=n[w];for(const z in F){const I=F[z];for(const D in I){const L=I[D];for(const V in L)u(L[V].object),delete L[V];delete I[D]}}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const F=n[w.id];for(const z in F){const I=F[z];for(const D in I){const L=I[D];for(const V in L)u(L[V].object),delete L[V];delete I[D]}}delete n[w.id]}function C(w){for(const F in n){const z=n[F];for(const I in z){const D=z[I];if(D[w.id]===void 0)continue;const L=D[w.id];for(const V in L)u(L[V].object),delete L[V];delete D[w.id]}}}function v(w){for(const F in n){const z=n[F],I=w.isInstancedMesh===!0?w.id:0,D=z[I];if(D!==void 0){for(const L in D){const V=D[L];for(const ee in V)u(V[ee].object),delete V[ee];delete D[L]}delete z[I],Object.keys(z).length===0&&delete n[F]}}}function E(){B(),l=!0,s!==r&&(s=r,o(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Zh(i,e,t){let n;function r(o){n=o}function s(o,u){i.drawArrays(n,o,u),t.update(u,n,1)}function l(o,u,d){d!==0&&(i.drawArraysInstanced(n,o,u,d),t.update(u,n,d))}function a(o,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}function c(o,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<o.length;g++)l(o[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,o,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=l,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $h(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(C){return!(C!==jt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const v=C===Ut&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$t&&!v)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const u=c(o);u!==o&&(Le("WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:l,textureTypeReadable:a,precision:o,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:b,maxSamples:R,samples:T}}function Jh(i){const e=this;let t=null,n=0,r=!1,s=!1;const l=new Fn,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||r;return r=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):o();else{const S=s?0:n,y=S*4;let b=p.clippingState||null;c.value=b,b=u(g,f,y,h);for(let R=0;R!==y;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=h;y!==x;++y,b+=4)l.copy(d[y]).applyMatrix4(S,a),l.normal.toArray(m,b),m[b+3]=l.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const An=4,io=[.125,.215,.35,.446,.526,.582],Bn=20,Qh=256,Ei=new ga,ro=new He;let is=null,rs=0,ss=0,as=!1;const ed=new H;class so{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:l=256,position:a=ed}=s;is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(is,rs,ss),this._renderer.xr.enabled=as,e.scissorTest=!1,ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ut,format:jt,colorSpace:ui,depthBuffer:!1},r=ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ao(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=td(s)),this._blurMaterial=id(s,e,t),this._ggxMaterial=nd(s,e,t)}return r}_compileMaterial(e){const t=new nn(new Nt,e);this._renderer.compile(t,Ei)}_sceneToCubeUV(e,t,n,r,s){const c=new Bt(90,1,t,n),o=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(ro),d.toneMapping=en,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new Ni,new ma({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(ro),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(c.up.set(0,o[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):b===1?(c.up.set(0,0,o[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,o[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const R=this._cubeSize;ii(r,b*R,y>2?R:0,R,R),d.setRenderTarget(r),p&&d.render(x,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gn||e.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oo());const s=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ii(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,Ei)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,l=this._ggxMaterial,a=this._lodMeshes[n];a.material=l;const c=l.uniforms,o=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(o*o-u*u),f=0+o*1.25,h=d*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-An?n-g+An:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,ii(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Ei),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ii(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(a,Ei)}_blur(e,t,n,r,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",s),this._halfBlur(l,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,l,a){const c=this._renderer,o=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=o;const f=o.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Bn-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Bn;m>Bn&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);const p=[];let S=0;for(let C=0;C<Bn;++C){const v=C/x,E=Math.exp(-v*v/2);p.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=l==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[r],R=3*b*(r>y-An?r-y+An:0),T=4*(this._cubeSize-b);ii(t,R,T,3*b,2*b),c.setRenderTarget(t),c.render(d,Ei)}}function td(i){const e=[],t=[],n=[];let r=i;const s=i-An+1+io.length;for(let l=0;l<s;l++){const a=Math.pow(2,r);e.push(a);let c=1/a;l>i-An?c=io[l-i+An-1]:l===0&&(c=0),t.push(c);const o=1/(a-2),u=-o,d=1+o,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*h),y=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let T=0;T<h;T++){const C=T%3*2/3-1,v=T>2?0:-1,E=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];S.set(E,x*g*T),y.set(f,m*g*T);const B=[T,T,T,T,T,T];b.set(B,p*g*T)}const R=new Nt;R.setAttribute("position",new It(S,x)),R.setAttribute("uv",new It(y,m)),R.setAttribute("faceIndex",new It(b,p)),n.push(new nn(R,null)),r>An&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ao(i,e,t){const n=new Rt(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ii(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function nd(i,e,t){return new Et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function id(i,e,t){const n=new Float32Array(Bn),r=new H(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function oo(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function lo(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function wr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class al extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new Et({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:Qt});s.uniforms.tEquirect.value=t;const l=new nn(r,s),a=t.minFilter;return t.minFilter===zn&&(t.minFilter=St),new au(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(s)}}function rd(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,h=!1){return f==null?null:h?l(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Dr||h===Lr)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const x=new al(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",o),a(x.texture,f.mapping)}else return null}}return f}function l(f){if(f&&f.isTexture){const h=f.mapping,g=h===Dr||h===Lr,x=h===Gn||h===li;if(g||x){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new so(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return g&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new so(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===Dr?f.mapping=Gn:h===Lr&&(f.mapping=li),f}function c(f){let h=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&h++;return h===g}function o(f){const h=f.target;h.removeEventListener("dispose",o);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function sd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Mr("WebGLRenderer: "+n+" extension not supported."),r}}}function ad(i,e,t,n){const r={},s=new WeakMap;function l(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",l),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function o(d){const f=[],h=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(h!==null){const S=h.array;x=h.version;for(let y=0,b=S.length;y<b;y+=3){const R=S[y+0],T=S[y+1],C=S[y+2];f.push(R,T,T,C,C,R)}}else{const S=g.array;x=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const R=y+0,T=y+1,C=y+2;f.push(R,T,T,C,C,R)}}const m=new(g.count>=65535?Jo:$o)(f,1);m.version=x;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&o(d)}else o(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function od(i,e,t){let n;function r(f){n=f}let s,l;function a(f){s=f.type,l=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*l),t.update(h,n,1)}function o(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,f*l,g),t.update(h,n,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function d(f,h,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)o(f[p]/l,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=h[S]*x[S];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=o,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ld(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,a){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Ye("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function cd(i,e,t){const n=new WeakMap,r=new ct;function s(l,a,c){const o=l.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;h===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let b=a.attributes.position.count*y,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*R*4*d),C=new Yo(T,b,R,d);C.type=$t,C.needsUpdate=!0;const v=y*4;for(let B=0;B<d;B++){const w=m[B],F=p[B],z=S[B],I=b*R*4*B;for(let D=0;D<w.count;D++){const L=D*v;h===!0&&(r.fromBufferAttribute(w,D),T[I+L+0]=r.x,T[I+L+1]=r.y,T[I+L+2]=r.z,T[I+L+3]=0),g===!0&&(r.fromBufferAttribute(F,D),T[I+L+4]=r.x,T[I+L+5]=r.y,T[I+L+6]=r.z,T[I+L+7]=0),x===!0&&(r.fromBufferAttribute(z,D),T[I+L+8]=r.x,T[I+L+9]=r.y,T[I+L+10]=r.z,T[I+L+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new Ge(b,R)},n.set(a,f),a.addEventListener("dispose",E)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let h=0;for(let x=0;x<o.length;x++)h+=o[x];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",o)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function ud(i,e,t,n,r){let s=new WeakMap;function l(o){const u=r.render.frame,d=o.geometry,f=e.get(o,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),s.get(o)!==u&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),s.set(o,u))),o.isSkinnedMesh){const h=o.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function c(o){const u=o.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:l,dispose:a}}const fd={[Lo]:"LINEAR_TONE_MAPPING",[Uo]:"REINHARD_TONE_MAPPING",[Io]:"CINEON_TONE_MAPPING",[No]:"ACES_FILMIC_TONE_MAPPING",[Oo]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[Fo]:"CUSTOM_TONE_MAPPING"};function hd(i,e,t,n,r){const s=new Rt(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),l=new Rt(e,t,{type:Ut,depthBuffer:!1,stencilBuffer:!1}),a=new Nt;a.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const c=new iu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),o=new nn(a,c),u=new ga(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,x=null,m=[],p=!1;this.setSize=function(S,y){s.setSize(S,y),l.setSize(S,y);for(let b=0;b<m.length;b++){const R=m[b];R.setSize&&R.setSize(S,y)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const y=s.width,b=s.height;for(let R=0;R<m.length;R++){const T=m[R];T.setSize&&T.setSize(y,b)}},this.begin=function(S,y){if(h||S.toneMapping===en&&m.length===0)return!1;if(x=y,y!==null){const b=y.width,R=y.height;(s.width!==b||s.height!==R)&&this.setSize(b,R)}return p===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=en,!0},this.hasRenderPass=function(){return p},this.end=function(S,y){S.toneMapping=g,h=!0;let b=s,R=l;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(S,R,b,y),C.needsSwap!==!1)){const v=b;b=R,R=v}}if(d!==S.outputColorSpace||f!==S.toneMapping){d=S.outputColorSpace,f=S.toneMapping,c.defines={},Xe.getTransfer(d)===Qe&&(c.defines.SRGB_TRANSFER="");const T=fd[f];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(x),S.render(o,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),l.dispose(),a.dispose(),c.dispose()}}const ol=new Tt,ea=new Li(1,1),ll=new Yo,cl=new Nc,ul=new tl,co=[],uo=[],fo=new Float32Array(16),ho=new Float32Array(9),po=new Float32Array(4);function gi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=co[r];if(s===void 0&&(s=new Float32Array(r),co[r]=s),e!==0){n.toArray(s,0);for(let l=1,a=0;l!==e;++l)a+=t,i[l].toArray(s,a)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rr(i,e){let t=uo[e];t===void 0&&(t=new Int32Array(e),uo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function _d(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;po.set(n),i.uniformMatrix2fv(this.addr,!1,po),dt(t,n)}}function vd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;ho.set(n),i.uniformMatrix3fv(this.addr,!1,ho),dt(t,n)}}function xd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;fo.set(n),i.uniformMatrix4fv(this.addr,!1,fo),dt(t,n)}}function Md(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Ed(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Td(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function Rd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ea.compareFunction=t.isReversedDepthBuffer()?fa:ua,s=ea):s=ol,t.setTexture2D(e||s,r)}function Cd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cl,r)}function Pd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ul,r)}function Dd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ll,r)}function Ld(i){switch(i){case 5126:return dd;case 35664:return pd;case 35665:return md;case 35666:return gd;case 35674:return _d;case 35675:return vd;case 35676:return xd;case 5124:case 35670:return Md;case 35667:case 35671:return Sd;case 35668:case 35672:return Ed;case 35669:case 35673:return yd;case 5125:return bd;case 36294:return Td;case 36295:return Ad;case 36296:return wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Rd;case 35679:case 36299:case 36307:return Cd;case 35680:case 36300:case 36308:case 36293:return Pd;case 36289:case 36303:case 36311:case 36292:return Dd}}function Ud(i,e){i.uniform1fv(this.addr,e)}function Id(i,e){const t=gi(e,this.size,2);i.uniform2fv(this.addr,t)}function Nd(i,e){const t=gi(e,this.size,3);i.uniform3fv(this.addr,t)}function Fd(i,e){const t=gi(e,this.size,4);i.uniform4fv(this.addr,t)}function Od(i,e){const t=gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bd(i,e){const t=gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zd(i,e){const t=gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vd(i,e){i.uniform1iv(this.addr,e)}function Gd(i,e){i.uniform2iv(this.addr,e)}function Hd(i,e){i.uniform3iv(this.addr,e)}function kd(i,e){i.uniform4iv(this.addr,e)}function Wd(i,e){i.uniform1uiv(this.addr,e)}function Xd(i,e){i.uniform2uiv(this.addr,e)}function jd(i,e){i.uniform3uiv(this.addr,e)}function qd(i,e){i.uniform4uiv(this.addr,e)}function Yd(i,e,t){const n=this.cache,r=e.length,s=Rr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));let l;this.type===i.SAMPLER_2D_SHADOW?l=ea:l=ol;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||l,s[a])}function Kd(i,e,t){const n=this.cache,r=e.length,s=Rr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||cl,s[l])}function Zd(i,e,t){const n=this.cache,r=e.length,s=Rr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||ul,s[l])}function $d(i,e,t){const n=this.cache,r=e.length,s=Rr(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||ll,s[l])}function Jd(i){switch(i){case 5126:return Ud;case 35664:return Id;case 35665:return Nd;case 35666:return Fd;case 35674:return Od;case 35675:return Bd;case 35676:return zd;case 5124:case 35670:return Vd;case 35667:case 35671:return Gd;case 35668:case 35672:return Hd;case 35669:case 35673:return kd;case 5125:return Wd;case 36294:return Xd;case 36295:return jd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return Kd;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return $d}}class Qd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ld(t.type)}}class ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jd(t.type)}}class tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const os=/(\w+)(\])?(\[|\.)?/g;function mo(i,e){i.seq.push(e),i.map[e.id]=e}function np(i,e,t){const n=i.name,r=n.length;for(os.lastIndex=0;;){const s=os.exec(n),l=os.lastIndex;let a=s[1];const c=s[2]==="]",o=s[3];if(c&&(a=a|0),o===void 0||o==="["&&l+2===r){mo(t,o===void 0?new Qd(a,i,e):new ep(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new tp(a),mo(t,d)),t=d}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const a=e.getActiveUniform(t,l),c=e.getUniformLocation(t,a.name);np(a,c,this)}const r=[],s=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):s.push(l);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,l=t.length;s!==l;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function go(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ip=37297;let rp=0;function sp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=r;l<s;l++){const a=l+1;n.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return n.join(`
`)}const _o=new Fe;function ap(i){Xe._getMatrix(_o,Xe.workingColorSpace,i);const e=`mat3( ${_o.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case _r:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const a=parseInt(l[1]);return t.toUpperCase()+`

`+s+`

`+sp(i.getShaderSource(e),a)}else return s}function op(i,e){const t=ap(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lp={[Lo]:"Linear",[Uo]:"Reinhard",[Io]:"Cineon",[No]:"ACESFilmic",[Oo]:"AgX",[Bo]:"Neutral",[Fo]:"Custom"};function cp(i,e){const t=lp[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new H;function up(){Xe.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function hp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),l=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[l]={type:s.type,location:i.getAttribLocation(e,l),locationSize:a}}return t}function Ai(i){return i!==""}function xo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(i){return i.replace(pp,gp)}const mp=new Map;function gp(i,e){let t=Oe[e];if(t===void 0){const n=mp.get(e);if(n!==void 0)t=Oe[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ta(t)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(i){return i.replace(_p,vp)}function vp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Eo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xp={[cr]:"SHADOWMAP_TYPE_PCF",[bi]:"SHADOWMAP_TYPE_VSM"};function Mp(i){return xp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sp={[Gn]:"ENVMAP_TYPE_CUBE",[li]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function Ep(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const yp={[li]:"ENVMAP_MODE_REFRACTION"};function bp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Tp={[Do]:"ENVMAP_BLENDING_MULTIPLY",[$l]:"ENVMAP_BLENDING_MIX",[Jl]:"ENVMAP_BLENDING_ADD"};function Ap(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Tp[i.combine]||"ENVMAP_BLENDING_NONE"}function wp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rp(i,e,t,n){const r=i.getContext(),s=t.defines;let l=t.vertexShader,a=t.fragmentShader;const c=Mp(t),o=Ep(t),u=bp(t),d=Ap(t),f=wp(t),h=fp(t),g=hp(s),x=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ai).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ai).join(`
`),p.length>0&&(p+=`
`)):(m=[Eo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),p=[Eo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?Oe.tonemapping_pars_fragment:"",t.toneMapping!==en?cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,op("linearToOutputTexel",t.outputColorSpace),up(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),l=ta(l),l=xo(l,t),l=Mo(l,t),a=ta(a),a=xo(a,t),a=Mo(a,t),l=So(l),a=So(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+l,b=S+p+a,R=go(r,r.VERTEX_SHADER,y),T=go(r,r.FRAGMENT_SHADER,b);r.attachShader(x,R),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(w){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(R)||"",I=r.getShaderInfoLog(T)||"",D=F.trim(),L=z.trim(),V=I.trim();let ee=!0,j=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,T);else{const Y=vo(r,R,"vertex"),Q=vo(r,T,"fragment");Ye("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+D+`
`+Y+`
`+Q)}else D!==""?Le("WebGLProgram: Program Info Log:",D):(L===""||V==="")&&(j=!1);j&&(w.diagnostics={runnable:ee,programLog:D,vertexShader:{log:L,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(R),r.deleteShader(T),v=new pr(r,x),E=dp(r,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(x,ip)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}let Cp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dp(e),t.set(e,n)),n}}class Dp{constructor(e){this.id=Cp++,this.code=e,this.usedTimes=0}}function Lp(i,e,t,n,r,s){const l=new Ko,a=new Pp,c=new Set,o=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,E,B,w,F){const z=w.fog,I=F.geometry,D=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,L=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||D,L),ee=V&&V.mapping===br?V.image.height:null,j=h[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Le("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Y=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=Y!==void 0?Y.length:0;let J=0;I.morphAttributes.position!==void 0&&(J=1),I.morphAttributes.normal!==void 0&&(J=2),I.morphAttributes.color!==void 0&&(J=3);let xe,W,Ke,G;if(j){const Je=Zt[j];xe=Je.vertexShader,W=Je.fragmentShader}else xe=v.vertexShader,W=v.fragmentShader,a.update(v),Ke=a.getVertexShaderID(v),G=a.getFragmentShaderID(v);const te=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),Te=F.isInstancedMesh===!0,fe=F.isBatchedMesh===!0,Ae=!!v.map,rt=!!v.matcap,Be=!!V,We=!!v.aoMap,Ze=!!v.lightMap,Ue=!!v.bumpMap,st=!!v.normalMap,P=!!v.displacementMap,at=!!v.emissiveMap,je=!!v.metalnessMap,$e=!!v.roughnessMap,_e=v.anisotropy>0,A=v.clearcoat>0,_=v.dispersion>0,N=v.iridescence>0,$=v.sheen>0,ne=v.transmission>0,K=_e&&!!v.anisotropyMap,ve=A&&!!v.clearcoatMap,ae=A&&!!v.clearcoatNormalMap,Ce=A&&!!v.clearcoatRoughnessMap,De=N&&!!v.iridescenceMap,re=N&&!!v.iridescenceThicknessMap,oe=$&&!!v.sheenColorMap,Me=$&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,pe=!!v.specularColorMap,ze=!!v.specularIntensityMap,U=ne&&!!v.transmissionMap,ce=ne&&!!v.thicknessMap,le=!!v.gradientMap,ge=!!v.alphaMap,se=v.alphaTest>0,Z=!!v.alphaHash,Se=!!v.extensions;let Ie=en;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const it={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:xe,fragmentShader:W,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:G,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:fe,batchingColor:fe&&F._colorsTexture!==null,instancing:Te,instancingColor:Te&&F.instanceColor!==null,instancingMorph:Te&&F.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ui,alphaToCoverage:!!v.alphaToCoverage,map:Ae,matcap:rt,envMap:Be,envMapMode:Be&&V.mapping,envMapCubeUVHeight:ee,aoMap:We,lightMap:Ze,bumpMap:Ue,normalMap:st,displacementMap:P,emissiveMap:at,normalMapObjectSpace:st&&v.normalMapType===nc,normalMapTangentSpace:st&&v.normalMapType===tc,metalnessMap:je,roughnessMap:$e,anisotropy:_e,anisotropyMap:K,clearcoat:A,clearcoatMap:ve,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:N,iridescenceMap:De,iridescenceThicknessMap:re,sheen:$,sheenColorMap:oe,sheenRoughnessMap:Me,specularMap:Ee,specularColorMap:pe,specularIntensityMap:ze,transmission:ne,transmissionMap:U,thicknessMap:ce,gradientMap:le,opaque:v.transparent===!1&&v.blending===si&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:se,alphaHash:Z,combine:v.combine,mapUv:Ae&&g(v.map.channel),aoMapUv:We&&g(v.aoMap.channel),lightMapUv:Ze&&g(v.lightMap.channel),bumpMapUv:Ue&&g(v.bumpMap.channel),normalMapUv:st&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:at&&g(v.emissiveMap.channel),metalnessMapUv:je&&g(v.metalnessMap.channel),roughnessMapUv:$e&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:ve&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(v.sheenRoughnessMap.channel),specularMapUv:Ee&&g(v.specularMap.channel),specularColorMapUv:pe&&g(v.specularColorMap.channel),specularIntensityMapUv:ze&&g(v.specularIntensityMap.channel),transmissionMapUv:U&&g(v.transmissionMap.channel),thicknessMapUv:ce&&g(v.thicknessMap.channel),alphaMapUv:ge&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(st||_e),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Ae||ge),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&st===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===Qe,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fn,flipSided:v.side===wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&v.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)E.push(B),E.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(p(E,v),S(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){l.disableAll(),E.instancing&&l.enable(0),E.instancingColor&&l.enable(1),E.instancingMorph&&l.enable(2),E.matcap&&l.enable(3),E.envMap&&l.enable(4),E.normalMapObjectSpace&&l.enable(5),E.normalMapTangentSpace&&l.enable(6),E.clearcoat&&l.enable(7),E.iridescence&&l.enable(8),E.alphaTest&&l.enable(9),E.vertexColors&&l.enable(10),E.vertexAlphas&&l.enable(11),E.vertexUv1s&&l.enable(12),E.vertexUv2s&&l.enable(13),E.vertexUv3s&&l.enable(14),E.vertexTangents&&l.enable(15),E.anisotropy&&l.enable(16),E.alphaHash&&l.enable(17),E.batching&&l.enable(18),E.dispersion&&l.enable(19),E.batchingColor&&l.enable(20),E.gradientMap&&l.enable(21),v.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reversedDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),v.push(l.mask)}function y(v){const E=h[v.type];let B;if(E){const w=Zt[E];B=yr.clone(w.uniforms)}else B=v.uniforms;return B}function b(v,E){let B=u.get(E);return B!==void 0?++B.usedTimes:(B=new Rp(i,E,v,r),o.push(B),u.set(E,B)),B}function R(v){if(--v.usedTimes===0){const E=o.indexOf(v);o[E]=o[o.length-1],o.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:R,releaseShaderCache:T,programs:o,dispose:C}}function Up(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let a=i.get(l);return a===void 0&&(a={},i.set(l,a)),a}function n(l){i.delete(l)}function r(l,a,c){i.get(l)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ip(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function l(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,x,m,p){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:g,materialVariant:l(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},i[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=g,S.materialVariant=l(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=m,S.group=p),e++,S}function c(f,h,g,x,m,p){const S=a(f,h,g,x,m,p);g.transmission>0?n.push(S):g.transparent===!0?r.push(S):t.push(S)}function o(f,h,g,x,m,p){const S=a(f,h,g,x,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function u(f,h){t.length>1&&t.sort(f||Ip),n.length>1&&n.sort(h||yo),r.length>1&&r.sort(h||yo)}function d(){for(let f=e,h=i.length;f<h;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:o,finish:d,sort:u}}function Np(){let i=new WeakMap;function e(n,r){const s=i.get(n);let l;return s===void 0?(l=new bo,i.set(n,[l])):r>=s.length?(l=new bo,s.push(l)):l=s[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new He};break;case"SpotLight":t={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Op(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bp=0;function zp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vp(i){const e=new Fp,t=Op(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new H);const r=new H,s=new ut,l=new ut;function a(o){let u=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,S=0,y=0,b=0,R=0,T=0,C=0;o.sort(zp);for(let E=0,B=o.length;E<B;E++){const w=o[E],F=w.color,z=w.intensity,I=w.distance;let D=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ci?D=w.shadow.map.texture:D=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=F.r*z,d+=F.g*z,f+=F.b*z;else if(w.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(w.sh.coefficients[L],z);C++}else if(w.isDirectionalLight){const L=e.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const V=w.shadow,ee=t.get(w);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.directionalShadow[h]=ee,n.directionalShadowMap[h]=D,n.directionalShadowMatrix[h]=w.shadow.matrix,S++}n.directional[h]=L,h++}else if(w.isSpotLight){const L=e.get(w);L.position.setFromMatrixPosition(w.matrixWorld),L.color.copy(F).multiplyScalar(z),L.distance=I,L.coneCos=Math.cos(w.angle),L.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),L.decay=w.decay,n.spot[x]=L;const V=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,V.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[x]=V.matrix,w.castShadow){const ee=t.get(w);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=D,b++}x++}else if(w.isRectAreaLight){const L=e.get(w);L.color.copy(F).multiplyScalar(z),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=L,m++}else if(w.isPointLight){const L=e.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),L.distance=w.distance,L.decay=w.decay,w.castShadow){const V=w.shadow,ee=t.get(w);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=L,g++}else if(w.isHemisphereLight){const L=e.get(w);L.skyColor.copy(w.color).multiplyScalar(z),L.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[p]=L,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==h||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==y||v.numSpotShadows!==b||v.numSpotMaps!==R||v.numLightProbes!==C)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,v.directionalLength=h,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=y,v.numSpotShadows=b,v.numSpotMaps=R,v.numLightProbes=C,n.version=Bp++)}function c(o,u){let d=0,f=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,S=o.length;p<S;p++){const y=o[p];if(y.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(y.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),l.identity(),s.copy(y.matrixWorld),s.premultiply(m),l.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),g++}else if(y.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function To(i){const e=new Vp(i),t=[],n=[];function r(u){o.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function l(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const o={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:o,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:l}}function Gp(i){let e=new WeakMap;function t(r,s=0){const l=e.get(r);let a;return l===void 0?(a=new To(i),e.set(r,[a])):s>=l.length?(a=new To(i),l.push(a)):a=l[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wp=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Xp=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ao=new ut,yi=new H,ls=new H;function jp(i,e,t){let n=new el;const r=new Ge,s=new Ge,l=new ct,a=new ru,c=new su,o={},u=t.maxTextureSize,d={[wn]:wt,[wt]:wn,[fn]:fn},f=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Hp,fragmentShader:kp}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new nn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let p=this.type;this.render=function(T,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ll&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cr);const E=i.getRenderTarget(),B=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Qt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(D=>D.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,D=T.length;I<D;I++){const L=T[I],V=L.shadow;if(V===void 0){Le("WebGLShadowMap:",L,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ee=V.getFrameExtents();r.multiply(ee),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,V.mapSize.y=s.y));const j=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=j,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===bi){if(L.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Rt(r.x,r.y,{format:ci,type:Ut,minFilter:St,magFilter:St,generateMipmaps:!1}),V.map.texture.name=L.name+".shadowMap",V.map.depthTexture=new Li(r.x,r.y,$t),V.map.depthTexture.name=L.name+".shadowMapDepth",V.map.depthTexture.format=pn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=_t,V.map.depthTexture.magFilter=_t}else L.isPointLight?(V.map=new al(r.x),V.map.depthTexture=new Qc(r.x,tn)):(V.map=new Rt(r.x,r.y),V.map.depthTexture=new Li(r.x,r.y,tn)),V.map.depthTexture.name=L.name+".shadowMap",V.map.depthTexture.format=pn,this.type===cr?(V.map.depthTexture.compareFunction=j?fa:ua,V.map.depthTexture.minFilter=St,V.map.depthTexture.magFilter=St):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=_t,V.map.depthTexture.magFilter=_t);V.camera.updateProjectionMatrix()}const Y=V.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<Y;Q++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(V.map),i.clear());const J=V.getViewport(Q);l.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),F.viewport(l)}if(L.isPointLight){const J=V.camera,xe=V.matrix,W=L.distance||J.far;W!==J.far&&(J.far=W,J.updateProjectionMatrix()),yi.setFromMatrixPosition(L.matrixWorld),J.position.copy(yi),ls.copy(J.position),ls.add(Wp[Q]),J.up.copy(Xp[Q]),J.lookAt(ls),J.updateMatrixWorld(),xe.makeTranslation(-yi.x,-yi.y,-yi.z),Ao.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ao,J.coordinateSystem,J.reversedDepth)}else V.updateMatrices(L);n=V.getFrustum(),b(C,v,V.camera,L,this.type)}V.isPointLightShadow!==!0&&this.type===bi&&S(V,v),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,B,w)};function S(T,C){const v=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Rt(r.x,r.y,{format:ci,type:Ut})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,v,f,x,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,v,h,x,null)}function y(T,C,v,E){let B=null;const w=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)B=w;else if(B=v.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=B.uuid,z=C.uuid;let I=o[F];I===void 0&&(I={},o[F]=I);let D=I[z];D===void 0&&(D=B.clone(),I[z]=D,C.addEventListener("dispose",R)),B=D}if(B.visible=C.visible,B.wireframe=C.wireframe,E===bi?B.side=C.shadowSide!==null?C.shadowSide:C.side:B.side=C.shadowSide!==null?C.shadowSide:d[C.side],B.alphaMap=C.alphaMap,B.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,B.map=C.map,B.clipShadows=C.clipShadows,B.clippingPlanes=C.clippingPlanes,B.clipIntersection=C.clipIntersection,B.displacementMap=C.displacementMap,B.displacementScale=C.displacementScale,B.displacementBias=C.displacementBias,B.wireframeLinewidth=C.wireframeLinewidth,B.linewidth=C.linewidth,v.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const F=i.properties.get(B);F.light=v}return B}function b(T,C,v,E,B){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===bi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const z=e.update(T),I=T.material;if(Array.isArray(I)){const D=z.groups;for(let L=0,V=D.length;L<V;L++){const ee=D[L],j=I[ee.materialIndex];if(j&&j.visible){const Y=y(T,j,E,B);T.onBeforeShadow(i,T,C,v,z,Y,ee),i.renderBufferDirect(v,null,z,Y,T,ee),T.onAfterShadow(i,T,C,v,z,Y,ee)}}}else if(I.visible){const D=y(T,I,E,B);T.onBeforeShadow(i,T,C,v,z,D,null),i.renderBufferDirect(v,null,z,D,T,null),T.onAfterShadow(i,T,C,v,z,D,null)}}const F=T.children;for(let z=0,I=F.length;z<I;z++)b(F[z],C,v,E,B)}function R(T){T.target.removeEventListener("dispose",R);for(const v in o){const E=o[v],B=T.target.uuid;B in E&&(E[B].dispose(),delete E[B])}}}function qp(i,e){function t(){let U=!1;const ce=new ct;let le=null;const ge=new ct(0,0,0,0);return{setMask:function(se){le!==se&&!U&&(i.colorMask(se,se,se,se),le=se)},setLocked:function(se){U=se},setClear:function(se,Z,Se,Ie,it){it===!0&&(se*=Ie,Z*=Ie,Se*=Ie),ce.set(se,Z,Se,Ie),ge.equals(ce)===!1&&(i.clearColor(se,Z,Se,Ie),ge.copy(ce))},reset:function(){U=!1,le=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,le=null,ge=null,se=null;return{setReversed:function(Z){if(ce!==Z){const Se=e.get("EXT_clip_control");Z?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ce=Z;const Ie=se;se=null,this.setClear(Ie)}},getReversed:function(){return ce},setTest:function(Z){Z?te(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(Z){le!==Z&&!U&&(i.depthMask(Z),le=Z)},setFunc:function(Z){if(ce&&(Z=hc[Z]),ge!==Z){switch(Z){case hs:i.depthFunc(i.NEVER);break;case ds:i.depthFunc(i.ALWAYS);break;case ps:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case ms:i.depthFunc(i.EQUAL);break;case gs:i.depthFunc(i.GEQUAL);break;case _s:i.depthFunc(i.GREATER);break;case vs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Z}},setLocked:function(Z){U=Z},setClear:function(Z){se!==Z&&(se=Z,ce&&(Z=1-Z),i.clearDepth(Z))},reset:function(){U=!1,le=null,ge=null,se=null,ce=!1}}}function r(){let U=!1,ce=null,le=null,ge=null,se=null,Z=null,Se=null,Ie=null,it=null;return{setTest:function(Je){U||(Je?te(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!U&&(i.stencilMask(Je),ce=Je)},setFunc:function(Je,rn,sn){(le!==Je||ge!==rn||se!==sn)&&(i.stencilFunc(Je,rn,sn),le=Je,ge=rn,se=sn)},setOp:function(Je,rn,sn){(Z!==Je||Se!==rn||Ie!==sn)&&(i.stencilOp(Je,rn,sn),Z=Je,Se=rn,Ie=sn)},setLocked:function(Je){U=Je},setClear:function(Je){it!==Je&&(i.clearStencil(Je),it=Je)},reset:function(){U=!1,ce=null,le=null,ge=null,se=null,Z=null,Se=null,Ie=null,it=null}}}const s=new t,l=new n,a=new r,c=new WeakMap,o=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,S=null,y=null,b=null,R=null,T=null,C=new He(0,0,0),v=0,E=!1,B=null,w=null,F=null,z=null,I=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,V=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),L=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),L=V>=2);let j=null,Y={};const Q=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),xe=new ct().fromArray(Q),W=new ct().fromArray(J);function Ke(U,ce,le,ge){const se=new Uint8Array(4),Z=i.createTexture();i.bindTexture(U,Z),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<le;Se++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(ce+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return Z}const G={};G[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),a.setClear(0),te(i.DEPTH_TEST),l.setFunc(oi),Ue(!1),st(Ra),te(i.CULL_FACE),We(Qt);function te(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function ie(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Te(U,ce){return d[U]!==ce?(i.bindFramebuffer(U,ce),d[U]=ce,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function fe(U,ce){let le=h,ge=!1;if(U){le=f.get(ce),le===void 0&&(le=[],f.set(ce,le));const se=U.textures;if(le.length!==se.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Se=se.length;Z<Se;Z++)le[Z]=i.COLOR_ATTACHMENT0+Z;le.length=se.length,ge=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,ge=!0);ge&&i.drawBuffers(le)}function Ae(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const rt={[On]:i.FUNC_ADD,[Il]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};rt[Fl]=i.MIN,rt[Ol]=i.MAX;const Be={[Bl]:i.ZERO,[zl]:i.ONE,[Vl]:i.SRC_COLOR,[us]:i.SRC_ALPHA,[jl]:i.SRC_ALPHA_SATURATE,[Wl]:i.DST_COLOR,[Hl]:i.DST_ALPHA,[Gl]:i.ONE_MINUS_SRC_COLOR,[fs]:i.ONE_MINUS_SRC_ALPHA,[Xl]:i.ONE_MINUS_DST_COLOR,[kl]:i.ONE_MINUS_DST_ALPHA,[ql]:i.CONSTANT_COLOR,[Yl]:i.ONE_MINUS_CONSTANT_COLOR,[Kl]:i.CONSTANT_ALPHA,[Zl]:i.ONE_MINUS_CONSTANT_ALPHA};function We(U,ce,le,ge,se,Z,Se,Ie,it,Je){if(U===Qt){x===!0&&(ie(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),U!==Ul){if(U!==m||Je!==E){if((p!==On||b!==On)&&(i.blendEquation(i.FUNC_ADD),p=On,b=On),Je)switch(U){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gr:i.blendFunc(i.ONE,i.ONE);break;case Ca:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",U);break}else switch(U){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ca:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pa:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",U);break}S=null,y=null,R=null,T=null,C.set(0,0,0),v=0,m=U,E=Je}return}se=se||ce,Z=Z||le,Se=Se||ge,(ce!==p||se!==b)&&(i.blendEquationSeparate(rt[ce],rt[se]),p=ce,b=se),(le!==S||ge!==y||Z!==R||Se!==T)&&(i.blendFuncSeparate(Be[le],Be[ge],Be[Z],Be[Se]),S=le,y=ge,R=Z,T=Se),(Ie.equals(C)===!1||it!==v)&&(i.blendColor(Ie.r,Ie.g,Ie.b,it),C.copy(Ie),v=it),m=U,E=!1}function Ze(U,ce){U.side===fn?ie(i.CULL_FACE):te(i.CULL_FACE);let le=U.side===wt;ce&&(le=!le),Ue(le),U.blending===si&&U.transparent===!1?We(Qt):We(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;a.setTest(ge),ge&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),at(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function st(U){U!==Pl?(te(i.CULL_FACE),U!==w&&(U===Ra?i.cullFace(i.BACK):U===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),w=U}function P(U){U!==F&&(L&&i.lineWidth(U),F=U)}function at(U,ce,le){U?(te(i.POLYGON_OFFSET_FILL),(z!==ce||I!==le)&&(z=ce,I=le,l.getReversed()&&(ce=-ce),i.polygonOffset(ce,le))):ie(i.POLYGON_OFFSET_FILL)}function je(U){U?te(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function $e(U){U===void 0&&(U=i.TEXTURE0+D-1),j!==U&&(i.activeTexture(U),j=U)}function _e(U,ce,le){le===void 0&&(j===null?le=i.TEXTURE0+D-1:le=j);let ge=Y[le];ge===void 0&&(ge={type:void 0,texture:void 0},Y[le]=ge),(ge.type!==U||ge.texture!==ce)&&(j!==le&&(i.activeTexture(le),j=le),i.bindTexture(U,ce||G[U]),ge.type=U,ge.texture=ce)}function A(){const U=Y[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function ne(){try{i.texSubImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function ae(){try{i.texStorage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Ce(){try{i.texStorage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function De(){try{i.texImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function re(){try{i.texImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function oe(U){xe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),xe.copy(U))}function Me(U){W.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function Ee(U,ce){let le=o.get(ce);le===void 0&&(le=new WeakMap,o.set(ce,le));let ge=le.get(U);ge===void 0&&(ge=i.getUniformBlockIndex(ce,U.name),le.set(U,ge))}function pe(U,ce){const ge=o.get(ce).get(U);c.get(ce)!==ge&&(i.uniformBlockBinding(ce,ge,U.__bindingPointIndex),c.set(ce,ge))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,Y={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,S=null,y=null,b=null,R=null,T=null,C=new He(0,0,0),v=0,E=!1,B=null,w=null,F=null,z=null,I=null,xe.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),a.reset()}return{buffers:{color:s,depth:l,stencil:a},enable:te,disable:ie,bindFramebuffer:Te,drawBuffers:fe,useProgram:Ae,setBlending:We,setMaterial:Ze,setFlipSided:Ue,setCullFace:st,setLineWidth:P,setPolygonOffset:at,setScissorTest:je,activeTexture:$e,bindTexture:_e,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:De,texImage3D:re,updateUBOMapping:Ee,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Ce,texSubImage2D:$,texSubImage3D:ne,compressedTexSubImage2D:K,compressedTexSubImage3D:ve,scissor:oe,viewport:Me,reset:ze}}function Yp(i,e,t,n,r,s,l){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Ge,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return h?new OffscreenCanvas(A,_):xr("canvas")}function x(A,_,N){let $=1;const ne=_e(A);if((ne.width>N||ne.height>N)&&($=N/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor($*ne.width),ve=Math.floor($*ne.height);d===void 0&&(d=g(K,ve));const ae=_?g(K,ve):d;return ae.width=K,ae.height=ve,ae.getContext("2d").drawImage(A,0,0,K,ve),Le("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+ve+")."),ae}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,_,N,$,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=_;if(_===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),_===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RG8UI),N===i.UNSIGNED_SHORT&&(K=i.RG16UI),N===i.UNSIGNED_INT&&(K=i.RG32UI),N===i.BYTE&&(K=i.RG8I),N===i.SHORT&&(K=i.RG16I),N===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGB8UI),N===i.UNSIGNED_SHORT&&(K=i.RGB16UI),N===i.UNSIGNED_INT&&(K=i.RGB32UI),N===i.BYTE&&(K=i.RGB8I),N===i.SHORT&&(K=i.RGB16I),N===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),N===i.UNSIGNED_INT&&(K=i.RGBA32UI),N===i.BYTE&&(K=i.RGBA8I),N===i.SHORT&&(K=i.RGBA16I),N===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){const ve=ne?_r:Xe.getTransfer($);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=ve===Qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(A,_){let N;return A?_===null||_===tn||_===Pi?N=i.DEPTH24_STENCIL8:_===$t?N=i.DEPTH32F_STENCIL8:_===Ci&&(N=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===tn||_===Pi?N=i.DEPTH_COMPONENT24:_===$t?N=i.DEPTH_COMPONENT32F:_===Ci&&(N=i.DEPTH_COMPONENT16),N}function R(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==_t&&A.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){const _=A.target;_.removeEventListener("dispose",T),v(_),_.isVideoTexture&&u.delete(_)}function C(A){const _=A.target;_.removeEventListener("dispose",C),B(_)}function v(A){const _=n.get(A);if(_.__webglInit===void 0)return;const N=A.source,$=f.get(N);if($){const ne=$[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(A),Object.keys($).length===0&&f.delete(N)}n.remove(A)}function E(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const N=A.source,$=f.get(N);delete $[_.__cacheKey],l.memory.textures--}function B(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let ne=0;ne<_.__webglFramebuffer[$].length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[$][ne]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=A.textures;for(let $=0,ne=N.length;$<ne;$++){const K=n.get(N[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),l.memory.textures--),n.remove(N[$])}n.remove(A)}let w=0;function F(){w=0}function z(){const A=w;return A>=r.maxTextures&&Le("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),w+=1,A}function I(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function D(A,_){const N=n.get(A);if(A.isVideoTexture&&je(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const $=A.image;if($===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{G(N,A,_);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function L(A,_){const N=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){G(N,A,_);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function V(A,_){const N=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){G(N,A,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function ee(A,_){const N=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){te(N,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const j={[xs]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},Y={[_t]:i.NEAREST,[Ql]:i.NEAREST_MIPMAP_NEAREST,[zi]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},Q={[ic]:i.NEVER,[lc]:i.ALWAYS,[rc]:i.LESS,[ua]:i.LEQUAL,[sc]:i.EQUAL,[fa]:i.GEQUAL,[ac]:i.GREATER,[oc]:i.NOTEQUAL};function J(A,_){if(_.type===$t&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===St||_.magFilter===Ur||_.magFilter===zi||_.magFilter===zn||_.minFilter===St||_.minFilter===Ur||_.minFilter===zi||_.minFilter===zn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,j[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,j[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,j[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Y[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Y[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Q[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_t||_.minFilter!==zi&&_.minFilter!==zn||_.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function xe(A,_){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));const $=_.source;let ne=f.get($);ne===void 0&&(ne={},f.set($,ne));const K=I(_);if(K!==A.__cacheKey){ne[K]===void 0&&(ne[K]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,N=!0),ne[K].usedTimes++;const ve=ne[A.__cacheKey];ve!==void 0&&(ne[A.__cacheKey].usedTimes--,ve.usedTimes===0&&E(_)),A.__cacheKey=K,A.__webglTexture=ne[K].texture}return N}function W(A,_,N){return Math.floor(Math.floor(A/N)/_)}function Ke(A,_,N,$){const K=A.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,$,_.data);else{K.sort((re,oe)=>re.start-oe.start);let ve=0;for(let re=1;re<K.length;re++){const oe=K[ve],Me=K[re],Ee=oe.start+oe.count,pe=W(Me.start,_.width,4),ze=W(oe.start,_.width,4);Me.start<=Ee+1&&pe===ze&&W(Me.start+Me.count-1,_.width,4)===pe?oe.count=Math.max(oe.count,Me.start+Me.count-oe.start):(++ve,K[ve]=Me)}K.length=ve+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let re=0,oe=K.length;re<oe;re++){const Me=K[re],Ee=Math.floor(Me.start/4),pe=Math.ceil(Me.count/4),ze=Ee%_.width,U=Math.floor(Ee/_.width),ce=pe,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ze,U,ce,le,N,$,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function G(A,_,N){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const ne=xe(A,_),K=_.source;t.bindTexture($,A.__webglTexture,i.TEXTURE0+N);const ve=n.get(K);if(K.version!==ve.__version||ne===!0){t.activeTexture(i.TEXTURE0+N);const ae=Xe.getPrimaries(Xe.workingColorSpace),Ce=_.colorSpace===bn?null:Xe.getPrimaries(_.colorSpace),De=_.colorSpace===bn||ae===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let re=x(_.image,!1,r.maxTextureSize);re=$e(_,re);const oe=s.convert(_.format,_.colorSpace),Me=s.convert(_.type);let Ee=y(_.internalFormat,oe,Me,_.colorSpace,_.isVideoTexture);J($,_);let pe;const ze=_.mipmaps,U=_.isVideoTexture!==!0,ce=ve.__version===void 0||ne===!0,le=K.dataReady,ge=R(_,re);if(_.isDepthTexture)Ee=b(_.format===Vn,_.type),ce&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ee,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,oe,Me,null));else if(_.isDataTexture)if(ze.length>0){U&&ce&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,ze[0].width,ze[0].height);for(let se=0,Z=ze.length;se<Z;se++)pe=ze[se],U?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,oe,Me,pe.data):t.texImage2D(i.TEXTURE_2D,se,Ee,pe.width,pe.height,0,oe,Me,pe.data);_.generateMipmaps=!1}else U?(ce&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,re.width,re.height),le&&Ke(_,re,oe,Me)):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,oe,Me,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ee,ze[0].width,ze[0].height,re.depth);for(let se=0,Z=ze.length;se<Z;se++)if(pe=ze[se],_.format!==jt)if(oe!==null)if(U){if(le)if(_.layerUpdates.size>0){const Se=no(pe.width,pe.height,_.format,_.type);for(const Ie of _.layerUpdates){const it=pe.data.subarray(Ie*Se/pe.data.BYTES_PER_ELEMENT,(Ie+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ie,pe.width,pe.height,1,oe,it)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,re.depth,oe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ee,pe.width,pe.height,re.depth,0,pe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,re.depth,oe,Me,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ee,pe.width,pe.height,re.depth,0,oe,Me,pe.data)}else{U&&ce&&t.texStorage2D(i.TEXTURE_2D,ge,Ee,ze[0].width,ze[0].height);for(let se=0,Z=ze.length;se<Z;se++)pe=ze[se],_.format!==jt?oe!==null?U?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,oe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ee,pe.width,pe.height,0,pe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,oe,Me,pe.data):t.texImage2D(i.TEXTURE_2D,se,Ee,pe.width,pe.height,0,oe,Me,pe.data)}else if(_.isDataArrayTexture)if(U){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ee,re.width,re.height,re.depth),le)if(_.layerUpdates.size>0){const se=no(re.width,re.height,_.format,_.type);for(const Z of _.layerUpdates){const Se=re.data.subarray(Z*se/re.data.BYTES_PER_ELEMENT,(Z+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,oe,Me,Se)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,oe,Me,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,re.width,re.height,re.depth,0,oe,Me,re.data);else if(_.isData3DTexture)U?(ce&&t.texStorage3D(i.TEXTURE_3D,ge,Ee,re.width,re.height,re.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,oe,Me,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,re.width,re.height,re.depth,0,oe,Me,re.data);else if(_.isFramebufferTexture){if(ce)if(U)t.texStorage2D(i.TEXTURE_2D,ge,Ee,re.width,re.height);else{let se=re.width,Z=re.height;for(let Se=0;Se<ge;Se++)t.texImage2D(i.TEXTURE_2D,Se,Ee,se,Z,0,oe,Me,null),se>>=1,Z>>=1}}else if(ze.length>0){if(U&&ce){const se=_e(ze[0]);t.texStorage2D(i.TEXTURE_2D,ge,Ee,se.width,se.height)}for(let se=0,Z=ze.length;se<Z;se++)pe=ze[se],U?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,oe,Me,pe):t.texImage2D(i.TEXTURE_2D,se,Ee,oe,Me,pe);_.generateMipmaps=!1}else if(U){if(ce){const se=_e(re);t.texStorage2D(i.TEXTURE_2D,ge,Ee,se.width,se.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Me,re)}else t.texImage2D(i.TEXTURE_2D,0,Ee,oe,Me,re);m(_)&&p($),ve.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function te(A,_,N){if(_.image.length!==6)return;const $=xe(A,_),ne=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const K=n.get(ne);if(ne.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const ve=Xe.getPrimaries(Xe.workingColorSpace),ae=_.colorSpace===bn?null:Xe.getPrimaries(_.colorSpace),Ce=_.colorSpace===bn||ve===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const De=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!De&&!re?oe[Z]=x(_.image[Z],!0,r.maxCubemapSize):oe[Z]=re?_.image[Z].image:_.image[Z],oe[Z]=$e(_,oe[Z]);const Me=oe[0],Ee=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),ze=y(_.internalFormat,Ee,pe,_.colorSpace),U=_.isVideoTexture!==!0,ce=K.__version===void 0||$===!0,le=ne.dataReady;let ge=R(_,Me);J(i.TEXTURE_CUBE_MAP,_);let se;if(De){U&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ze,Me.width,Me.height);for(let Z=0;Z<6;Z++){se=oe[Z].mipmaps;for(let Se=0;Se<se.length;Se++){const Ie=se[Se];_.format!==jt?Ee!==null?U?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,ze,Ie.width,Ie.height,0,Ie.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Ie.width,Ie.height,Ee,pe,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,ze,Ie.width,Ie.height,0,Ee,pe,Ie.data)}}}else{if(se=_.mipmaps,U&&ce){se.length>0&&ge++;const Z=_e(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,Ee,pe,oe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,oe[Z].width,oe[Z].height,0,Ee,pe,oe[Z].data);for(let Se=0;Se<se.length;Se++){const it=se[Se].image[Z].image;U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,it.width,it.height,Ee,pe,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,ze,it.width,it.height,0,Ee,pe,it.data)}}else{U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,pe,oe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Ee,pe,oe[Z]);for(let Se=0;Se<se.length;Se++){const Ie=se[Se];U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,Ee,pe,Ie.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,ze,Ee,pe,Ie.image[Z])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),K.__version=ne.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ie(A,_,N,$,ne,K){const ve=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),Ce=y(N.internalFormat,ve,ae,N.colorSpace),De=n.get(_),re=n.get(N);if(re.__renderTarget=_,!De.__hasExternalTextures){const oe=Math.max(1,_.width>>K),Me=Math.max(1,_.height>>K);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,K,Ce,oe,Me,_.depth,0,ve,ae,null):t.texImage2D(ne,K,Ce,oe,Me,0,ve,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),at(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ne,re.__webglTexture,0,P(_)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ne,re.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(A,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const $=_.depthTexture,ne=$&&$.isDepthTexture?$.type:null,K=b(_.stencilBuffer,ne),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;at(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),K,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,A)}else{const $=_.textures;for(let ne=0;ne<$.length;ne++){const K=$[ne],ve=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),Ce=y(K.internalFormat,ve,ae,K.colorSpace);at(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),Ce,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),Ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(A,_,N){const $=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(_.depthTexture);if(ne.__renderTarget=_,(!ne.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),J(i.TEXTURE_CUBE_MAP,_.depthTexture);const De=s.convert(_.depthTexture.format),re=s.convert(_.depthTexture.type);let oe;_.depthTexture.format===pn?oe=i.DEPTH_COMPONENT24:_.depthTexture.format===Vn&&(oe=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,_.width,_.height,0,De,re,null)}}else D(_.depthTexture,0);const K=ne.__webglTexture,ve=P(_),ae=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Ce=_.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===pn)at(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,ae,K,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,ae,K,0);else if(_.depthTexture.format===Vn)at(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,ae,K,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,ae,K,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const _=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",ne)};$.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=$}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let $=0;$<6;$++)fe(_.__webglFramebuffer[$],A,$);else{const $=A.texture.mipmaps;$&&$.length>0?fe(_.__webglFramebuffer[0],A,0):fe(_.__webglFramebuffer,A,0)}else if(N){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),Te(_.__webglDepthbuffer[$],A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,K)}}else{const $=A.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Te(_.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,_,N){const $=n.get(A);_!==void 0&&ie($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ae(A)}function Be(A){const _=A.texture,N=n.get(A),$=n.get(_);A.addEventListener("dispose",C);const ne=A.textures,K=A.isWebGLCubeRenderTarget===!0,ve=ne.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,l.memory.textures++),K){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)N.__webglFramebuffer[ae][Ce]=i.createFramebuffer()}else N.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)N.__webglFramebuffer[ae]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ae=0,Ce=ne.length;ae<Ce;ae++){const De=n.get(ne[ae]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),l.memory.textures++)}if(A.samples>0&&at(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<ne.length;ae++){const Ce=ne[ae];N.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const De=s.convert(Ce.format,Ce.colorSpace),re=s.convert(Ce.type),oe=y(Ce.internalFormat,De,re,Ce.colorSpace,A.isXRRenderTarget===!0),Me=P(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,oe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),J(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)ie(N.__webglFramebuffer[ae][Ce],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce);else ie(N.__webglFramebuffer[ae],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,Ce=ne.length;ae<Ce;ae++){const De=ne[ae],re=n.get(De);let oe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,re.__webglTexture),J(oe,De),ie(N.__webglFramebuffer,A,De,i.COLOR_ATTACHMENT0+ae,oe,0),m(De)&&p(oe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),J(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)ie(N.__webglFramebuffer[Ce],A,_,i.COLOR_ATTACHMENT0,ae,Ce);else ie(N.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,ae,0);m(_)&&p(ae),t.unbindTexture()}A.depthBuffer&&Ae(A)}function We(A){const _=A.textures;for(let N=0,$=_.length;N<$;N++){const ne=_[N];if(m(ne)){const K=S(A),ve=n.get(ne).__webglTexture;t.bindTexture(K,ve),p(K),t.unbindTexture()}}}const Ze=[],Ue=[];function st(A){if(A.samples>0){if(at(A)===!1){const _=A.textures,N=A.width,$=A.height;let ne=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(A),ae=_.length>1;if(ae)for(let De=0;De<_.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ce=A.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let De=0;De<_.length;De++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);const re=n.get(_[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,ne,i.NEAREST),c===!0&&(Ze.length=0,Ue.length=0,Ze.push(i.COLOR_ATTACHMENT0+De),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push(K),Ue.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let De=0;De<_.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);const re=n.get(_[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function P(A){return Math.min(r.maxSamples,A.samples)}function at(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function je(A){const _=l.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function $e(A,_){const N=A.colorSpace,$=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==ui&&N!==bn&&(Xe.getTransfer(N)===Qe?($!==jt||ne!==zt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",N)),_}function _e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(o.width=A.naturalWidth||A.width,o.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(o.width=A.displayWidth,o.height=A.displayHeight):(o.width=A.width,o.height=A.height),o}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=rt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kp(i,e){function t(n,r=bn){let s;const l=Xe.getTransfer(r);if(n===zt)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ko)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vo)return i.BYTE;if(n===Go)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===$t)return i.FLOAT;if(n===Ut)return i.HALF_FLOAT;if(n===Wo)return i.ALPHA;if(n===Xo)return i.RGB;if(n===jt)return i.RGBA;if(n===pn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===ci)return i.RG;if(n===la)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===ur||n===fr||n===hr||n===dr)if(l===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ur)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ur)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ss||n===Es||n===ys||n===bs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Es)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ys)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ts||n===As||n===ws||n===Rs||n===Cs||n===Ps||n===Ds)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ts||n===As)return l===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ws)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rs)return s.COMPRESSED_R11_EAC;if(n===Cs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ps)return s.COMPRESSED_RG11_EAC;if(n===Ds)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ls||n===Us||n===Is||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Vs||n===Gs||n===Hs||n===ks||n===Ws||n===Xs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ls)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Us)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Is)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ns)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Os)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ks)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ws)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===qs||n===Ys)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===js)return l===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ys)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ks||n===Zs||n===$s||n===Js)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Js)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$p=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Et({vertexShader:Zp,fragmentShader:$p,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends di{constructor(e,t){super();const n=this;let r=null,s=1,l=null,a="local-floor",c=1,o=null,u=null,d=null,f=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Jp,p={},S=t.getContextAttributes();let y=null,b=null;const R=[],T=[],C=new Ge;let v=null;const E=new Bt;E.viewport=new ct;const B=new Bt;B.viewport=new ct;const w=[E,B],F=new ou;let z=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=R[G];return te===void 0&&(te=new zr,R[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=R[G];return te===void 0&&(te=new zr,R[G]=te),te.getGripSpace()},this.getHand=function(G){let te=R[G];return te===void 0&&(te=new zr,R[G]=te),te.getHandSpace()};function D(G){const te=T.indexOf(G.inputSource);if(te===-1)return;const ie=R[te];ie!==void 0&&(ie.update(G.inputSource,G.frame,o||l),ie.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",V);for(let G=0;G<R.length;G++){const te=T[G];te!==null&&(T[G]=null,R[G].disconnect(te))}z=null,I=null,m.reset();for(const G in p)delete p[G];e.setRenderTarget(y),h=null,f=null,d=null,r=null,b=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||l},this.setReferenceSpace=function(G){o=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",L),r.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Te=null,fe=null;S.depth&&(fe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?Vn:pn,Te=S.stencil?Pi:tn);const Ae={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Rt(f.textureWidth,f.textureHeight,{format:jt,type:zt,depthTexture:new Li(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Rt(h.framebufferWidth,h.framebufferHeight,{format:jt,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),o=null,l=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(G){for(let te=0;te<G.removed.length;te++){const ie=G.removed[te],Te=T.indexOf(ie);Te>=0&&(T[Te]=null,R[Te].disconnect(ie))}for(let te=0;te<G.added.length;te++){const ie=G.added[te];let Te=T.indexOf(ie);if(Te===-1){for(let Ae=0;Ae<R.length;Ae++)if(Ae>=T.length){T.push(ie),Te=Ae;break}else if(T[Ae]===null){T[Ae]=ie,Te=Ae;break}if(Te===-1)break}const fe=R[Te];fe&&fe.connect(ie)}}const ee=new H,j=new H;function Y(G,te,ie){ee.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ie.matrixWorld);const Te=ee.distanceTo(j),fe=te.projectionMatrix.elements,Ae=ie.projectionMatrix.elements,rt=fe[14]/(fe[10]-1),Be=fe[14]/(fe[10]+1),We=(fe[9]+1)/fe[5],Ze=(fe[9]-1)/fe[5],Ue=(fe[8]-1)/fe[0],st=(Ae[8]+1)/Ae[0],P=rt*Ue,at=rt*st,je=Te/(-Ue+st),$e=je*-Ue;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX($e),G.translateZ(je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),fe[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const _e=rt+je,A=Be+je,_=P-$e,N=at+(Te-$e),$=We*Be/A*_e,ne=Ze*Be/A*_e;G.projectionMatrix.makePerspective(_,N,$,ne,_e,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Q(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,ie=G.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),F.near=B.near=E.near=te,F.far=B.far=E.far=ie,(z!==F.near||I!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,I=F.far),F.layers.mask=G.layers.mask|6,E.layers.mask=F.layers.mask&-5,B.layers.mask=F.layers.mask&-3;const Te=G.parent,fe=F.cameras;Q(F,Te);for(let Ae=0;Ae<fe.length;Ae++)Q(fe[Ae],Te);fe.length===2?Y(F,E,B):F.projectionMatrix.copy(E.projectionMatrix),J(G,F,Te)};function J(G,te,ie){ie===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(ie.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Di*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(G){return p[G]};let xe=null;function W(G,te){if(u=te.getViewerPose(o||l),g=te,u!==null){const ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Te=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,Te=!0);for(let Be=0;Be<ie.length;Be++){const We=ie[Be];let Ze=null;if(h!==null)Ze=h.getViewport(We);else{const st=d.getViewSubImage(f,We);Ze=st.viewport,Be===0&&(e.setRenderTargetTextures(b,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(b))}let Ue=w[Be];Ue===void 0&&(Ue=new Bt,Ue.layers.enable(Be),Ue.viewport=new ct,w[Be]=Ue),Ue.matrix.fromArray(We.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(We.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Be===0&&(F.matrix.copy(Ue.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Te===!0&&F.cameras.push(Ue)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Be=d.getDepthInformation(ie[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,r.renderState)}if(fe&&fe.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Be=0;Be<ie.length;Be++){const We=ie[Be].camera;if(We){let Ze=p[We];Ze||(Ze=new nl,p[We]=Ze);const Ue=d.getCameraImage(We);Ze.sourceTexture=Ue}}}}for(let ie=0;ie<R.length;ie++){const Te=T[ie],fe=R[ie];Te!==null&&fe!==void 0&&fe.update(Te,te,o||l)}xe&&xe(G,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ke=new sl;Ke.setAnimationLoop(W),this.setAnimationLoop=function(G){xe=G},this.dispose=function(){}}}const Nn=new mn,em=new ut;function tm(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,il(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,y,b){p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(l(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,b=S.envMapRotation;y&&(m.envMap.value=y,Nn.copy(b),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),m.envMapRotation.value.setFromMatrix4(em.makeRotationFromEuler(Nn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nm(i,e,t,n){let r={},s={},l=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function o(S,y){let b=r[S.id];b===void 0&&(g(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(S,R);const T=e.render.frame;s[S.id]!==T&&(f(S),s[S.id]=T)}function u(S){const y=d();S.__bindingPointIndex=y;const b=i.createBuffer(),R=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function d(){for(let S=0;S<a;S++)if(l.indexOf(S)===-1)return l.push(S),S;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=r[S.id],b=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,C=b.length;T<C;T++){const v=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,B=v.length;E<B;E++){const w=v[E];if(h(w,T,E,R)===!0){const F=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let I=0;for(let D=0;D<z.length;D++){const L=z[D],V=x(L);typeof L=="number"||typeof L=="boolean"?(w.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,F+I,w.__data)):L.isMatrix3?(w.__data[0]=L.elements[0],w.__data[1]=L.elements[1],w.__data[2]=L.elements[2],w.__data[3]=0,w.__data[4]=L.elements[3],w.__data[5]=L.elements[4],w.__data[6]=L.elements[5],w.__data[7]=0,w.__data[8]=L.elements[6],w.__data[9]=L.elements[7],w.__data[10]=L.elements[8],w.__data[11]=0):(L.toArray(w.__data,I),I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,y,b,R){const T=S.value,C=y+"_"+b;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const v=R[C];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return R[C]=T,!0}else if(v.equals(T)===!1)return v.copy(T),!0}return!1}function g(S){const y=S.uniforms;let b=0;const R=16;for(let C=0,v=y.length;C<v;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let B=0,w=E.length;B<w;B++){const F=E[B],z=Array.isArray(F.value)?F.value:[F.value];for(let I=0,D=z.length;I<D;I++){const L=z[I],V=x(L),ee=b%R,j=ee%V.boundary,Y=ee+j;b+=j,Y!==0&&R-Y<V.storage&&(b+=R-Y),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=V.storage}}}const T=b%R;return T>0&&(b+=R-T),S.__size=b,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const b=l.indexOf(y.__bindingPointIndex);l.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);l=[],r={},s={}}return{bind:c,update:o,dispose:p}}const im=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kt=null;function rm(){return Kt===null&&(Kt=new Kc(im,16,16,ci,Ut),Kt.name="DFG_LUT",Kt.minFilter=St,Kt.magFilter=St,Kt.wrapS=hn,Kt.wrapT=hn,Kt.generateMipmaps=!1,Kt.needsUpdate=!0),Kt}class sm{constructor(e={}){const{canvas:t=uc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:l=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=l;const x=h,m=new Set([ca,la,oa]),p=new Set([zt,tn,Ci,Pi,sa,aa]),S=new Uint32Array(4),y=new Int32Array(4);let b=null,R=null;const T=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let B=!1;this._outputColorSpace=Ot;let w=0,F=0,z=null,I=-1,D=null;const L=new ct,V=new ct;let ee=null;const j=new He(0);let Y=0,Q=t.width,J=t.height,xe=1,W=null,Ke=null;const G=new ct(0,0,Q,J),te=new ct(0,0,Q,J);let ie=!1;const Te=new el;let fe=!1,Ae=!1;const rt=new ut,Be=new H,We=new ct,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function st(){return z===null?xe:1}let P=n;function at(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",it,!1),P===null){const O="webgl2";if(P=at(O,M),P===null)throw at(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ye("WebGLRenderer: "+M.message),M}let je,$e,_e,A,_,N,$,ne,K,ve,ae,Ce,De,re,oe,Me,Ee,pe,ze,U,ce,le,ge;function se(){je=new sd(P),je.init(),ce=new Kp(P,je),$e=new $h(P,je,e,ce),_e=new qp(P,je),$e.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),A=new ld(P),_=new Up,N=new Yp(P,je,_e,_,$e,ce,A),$=new rd(E),ne=new hu(P),le=new Kh(P,ne),K=new ad(P,ne,A,le),ve=new ud(P,K,ne,le,A),pe=new cd(P,$e,N),oe=new Jh(_),ae=new Lp(E,$,je,$e,le,oe),Ce=new tm(E,_),De=new Np,re=new Gp(je),Ee=new Yh(E,$,_e,ve,g,c),Me=new jp(E,ve,$e),ge=new nm(P,A,$e,_e),ze=new Zh(P,je,A),U=new od(P,je,A),A.programs=ae.programs,E.capabilities=$e,E.extensions=je,E.properties=_,E.renderLists=De,E.shadowMap=Me,E.state=_e,E.info=A}se(),x!==zt&&(v=new hd(x,t.width,t.height,r,s));const Z=new Qp(E,P);this.xr=Z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(M){M!==void 0&&(xe=M,this.setSize(Q,J,!1))},this.getSize=function(M){return M.set(Q,J)},this.setSize=function(M,O,q=!0){if(Z.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=M,J=O,t.width=Math.floor(M*xe),t.height=Math.floor(O*xe),q===!0&&(t.style.width=M+"px",t.style.height=O+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Q*xe,J*xe).floor()},this.setDrawingBufferSize=function(M,O,q){Q=M,J=O,xe=q,t.width=Math.floor(M*q),t.height=Math.floor(O*q),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(x===zt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(G)},this.setViewport=function(M,O,q,X){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,O,q,X),_e.viewport(L.copy(G).multiplyScalar(xe).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,O,q,X){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,O,q,X),_e.scissor(V.copy(te).multiplyScalar(xe).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){_e.setScissorTest(ie=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){Ke=M},this.getClearColor=function(M){return M.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,q=!0){let X=0;if(M){let k=!1;if(z!==null){const he=z.texture.format;k=m.has(he)}if(k){const he=z.texture.type,me=p.has(he),de=Ee.getClearColor(),ye=Ee.getClearAlpha(),Re=de.r,Ne=de.g,Ve=de.b;me?(S[0]=Re,S[1]=Ne,S[2]=Ve,S[3]=ye,P.clearBufferuiv(P.COLOR,0,S)):(y[0]=Re,y[1]=Ne,y[2]=Ve,y[3]=ye,P.clearBufferiv(P.COLOR,0,y))}else X|=P.COLOR_BUFFER_BIT}O&&(X|=P.DEPTH_BUFFER_BIT),q&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",it,!1),Ee.dispose(),De.dispose(),re.dispose(),_.dispose(),$.dispose(),ve.dispose(),le.dispose(),ge.dispose(),ae.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",va),Z.removeEventListener("sessionend",xa),Rn.stop()};function Se(M){M.preventDefault(),Na("WebGLRenderer: Context Lost."),B=!0}function Ie(){Na("WebGLRenderer: Context Restored."),B=!1;const M=A.autoReset,O=Me.enabled,q=Me.autoUpdate,X=Me.needsUpdate,k=Me.type;se(),A.autoReset=M,Me.enabled=O,Me.autoUpdate=q,Me.needsUpdate=X,Me.type=k}function it(M){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Je(M){const O=M.target;O.removeEventListener("dispose",Je),rn(O)}function rn(M){sn(M),_.remove(M)}function sn(M){const O=_.get(M).programs;O!==void 0&&(O.forEach(function(q){ae.releaseProgram(q)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,q,X,k,he){O===null&&(O=Ze);const me=k.isMesh&&k.matrixWorld.determinant()<0,de=dl(M,O,q,X,k);_e.setMaterial(X,me);let ye=q.index,Re=1;if(X.wireframe===!0){if(ye=K.getWireframeAttribute(q),ye===void 0)return;Re=2}const Ne=q.drawRange,Ve=q.attributes.position;let Pe=Ne.start*Re,et=(Ne.start+Ne.count)*Re;he!==null&&(Pe=Math.max(Pe,he.start*Re),et=Math.min(et,(he.start+he.count)*Re)),ye!==null?(Pe=Math.max(Pe,0),et=Math.min(et,ye.count)):Ve!=null&&(Pe=Math.max(Pe,0),et=Math.min(et,Ve.count));const lt=et-Pe;if(lt<0||lt===1/0)return;le.setup(k,X,de,q,ye);let ot,tt=ze;if(ye!==null&&(ot=ne.get(ye),tt=U,tt.setIndex(ot)),k.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*st()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(k.isLine){let vt=X.linewidth;vt===void 0&&(vt=1),_e.setLineWidth(vt*st()),k.isLineSegments?tt.setMode(P.LINES):k.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else k.isPoints?tt.setMode(P.POINTS):k.isSprite&&tt.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Mr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const vt=k._multiDrawStarts,be=k._multiDrawCounts,Pt=k._multiDrawCount,qe=ye?ne.get(ye).bytesPerElement:1,Gt=_.get(X).currentProgram.getUniforms();for(let qt=0;qt<Pt;qt++)Gt.setValue(P,"_gl_DrawID",qt),tt.render(vt[qt]/qe,be[qt])}else if(k.isInstancedMesh)tt.renderInstances(Pe,lt,k.count);else if(q.isInstancedBufferGeometry){const vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,vt);tt.renderInstances(Pe,lt,be)}else tt.render(Pe,lt)};function _a(M,O,q){M.transparent===!0&&M.side===fn&&M.forceSinglePass===!1?(M.side=wt,M.needsUpdate=!0,Bi(M,O,q),M.side=wn,M.needsUpdate=!0,Bi(M,O,q),M.side=fn):Bi(M,O,q)}this.compile=function(M,O,q=null){q===null&&(q=M),R=re.get(q),R.init(O),C.push(R),q.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(R.pushLight(k),k.castShadow&&R.pushShadow(k))}),M!==q&&M.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(R.pushLight(k),k.castShadow&&R.pushShadow(k))}),R.setupLights();const X=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let me=0;me<he.length;me++){const de=he[me];_a(de,q,k),X.add(de)}else _a(he,q,k),X.add(he)}),R=C.pop(),X},this.compileAsync=function(M,O,q=null){const X=this.compile(M,O,q);return new Promise(k=>{function he(){if(X.forEach(function(me){_.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){k(M);return}setTimeout(he,10)}je.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Cr=null;function hl(M){Cr&&Cr(M)}function va(){Rn.stop()}function xa(){Rn.start()}const Rn=new sl;Rn.setAnimationLoop(hl),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(M){Cr=M,Z.setAnimationLoop(M),M===null?Rn.stop():Rn.start()},Z.addEventListener("sessionstart",va),Z.addEventListener("sessionend",xa),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const q=Z.enabled===!0&&Z.isPresenting===!0,X=v!==null&&(z===null||q)&&v.begin(E,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,O,z),R=re.get(M,C.length),R.init(O),C.push(R),rt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Te.setFromProjectionMatrix(rt,Jt,O.reversedDepth),Ae=this.localClippingEnabled,fe=oe.init(this.clippingPlanes,Ae),b=De.get(M,T.length),b.init(),T.push(b),Z.enabled===!0&&Z.isPresenting===!0){const me=E.xr.getDepthSensingMesh();me!==null&&Pr(me,O,-1/0,E.sortObjects)}Pr(M,O,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(W,Ke),Ue=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ue&&Ee.addToRenderList(b,M),this.info.render.frame++,fe===!0&&oe.beginShadows();const k=R.state.shadowsArray;if(Me.render(k,M,O),fe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&v.hasRenderPass())===!1){const me=b.opaque,de=b.transmissive;if(R.setupLights(),O.isArrayCamera){const ye=O.cameras;if(de.length>0)for(let Re=0,Ne=ye.length;Re<Ne;Re++){const Ve=ye[Re];Sa(me,de,M,Ve)}Ue&&Ee.render(M);for(let Re=0,Ne=ye.length;Re<Ne;Re++){const Ve=ye[Re];Ma(b,M,Ve,Ve.viewport)}}else de.length>0&&Sa(me,de,M,O),Ue&&Ee.render(M),Ma(b,M,O)}z!==null&&F===0&&(N.updateMultisampleRenderTarget(z),N.updateRenderTargetMipmap(z)),X&&v.end(E),M.isScene===!0&&M.onAfterRender(E,M,O),le.resetDefaultState(),I=-1,D=null,C.pop(),C.length>0?(R=C[C.length-1],fe===!0&&oe.setGlobalState(E.clippingPlanes,R.state.camera)):R=null,T.pop(),T.length>0?b=T[T.length-1]:b=null};function Pr(M,O,q,X){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Te.intersectsSprite(M)){X&&We.setFromMatrixPosition(M.matrixWorld).applyMatrix4(rt);const me=ve.update(M),de=M.material;de.visible&&b.push(M,me,de,q,We.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Te.intersectsObject(M))){const me=ve.update(M),de=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),We.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),We.copy(me.boundingSphere.center)),We.applyMatrix4(M.matrixWorld).applyMatrix4(rt)),Array.isArray(de)){const ye=me.groups;for(let Re=0,Ne=ye.length;Re<Ne;Re++){const Ve=ye[Re],Pe=de[Ve.materialIndex];Pe&&Pe.visible&&b.push(M,me,Pe,q,We.z,Ve)}}else de.visible&&b.push(M,me,de,q,We.z,null)}}const he=M.children;for(let me=0,de=he.length;me<de;me++)Pr(he[me],O,q,X)}function Ma(M,O,q,X){const{opaque:k,transmissive:he,transparent:me}=M;R.setupLightsView(q),fe===!0&&oe.setGlobalState(E.clippingPlanes,q),X&&_e.viewport(L.copy(X)),k.length>0&&Oi(k,O,q),he.length>0&&Oi(he,O,q),me.length>0&&Oi(me,O,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Sa(M,O,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[X.id]===void 0){const Pe=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[X.id]=new Rt(1,1,{generateMipmaps:!0,type:Pe?Ut:zt,minFilter:zn,samples:Math.max(4,$e.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const he=R.state.transmissionRenderTarget[X.id],me=X.viewport||L;he.setSize(me.z*E.transmissionResolutionScale,me.w*E.transmissionResolutionScale);const de=E.getRenderTarget(),ye=E.getActiveCubeFace(),Re=E.getActiveMipmapLevel();E.setRenderTarget(he),E.getClearColor(j),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),Ue&&Ee.render(q);const Ne=E.toneMapping;E.toneMapping=en;const Ve=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),R.setupLightsView(X),fe===!0&&oe.setGlobalState(E.clippingPlanes,X),Oi(M,q,X),N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he),je.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let et=0,lt=O.length;et<lt;et++){const ot=O[et],{object:tt,geometry:vt,material:be,group:Pt}=ot;if(be.side===fn&&tt.layers.test(X.layers)){const qe=be.side;be.side=wt,be.needsUpdate=!0,Ea(tt,q,X,vt,be,Pt),be.side=qe,be.needsUpdate=!0,Pe=!0}}Pe===!0&&(N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he))}E.setRenderTarget(de,ye,Re),E.setClearColor(j,Y),Ve!==void 0&&(X.viewport=Ve),E.toneMapping=Ne}function Oi(M,O,q){const X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,he=M.length;k<he;k++){const me=M[k],{object:de,geometry:ye,group:Re}=me;let Ne=me.material;Ne.allowOverride===!0&&X!==null&&(Ne=X),de.layers.test(q.layers)&&Ea(de,O,q,ye,Ne,Re)}}function Ea(M,O,q,X,k,he){M.onBeforeRender(E,O,q,X,k,he),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(E,O,q,X,M,he),k.transparent===!0&&k.side===fn&&k.forceSinglePass===!1?(k.side=wt,k.needsUpdate=!0,E.renderBufferDirect(q,O,X,k,M,he),k.side=wn,k.needsUpdate=!0,E.renderBufferDirect(q,O,X,k,M,he),k.side=fn):E.renderBufferDirect(q,O,X,k,M,he),M.onAfterRender(E,O,q,X,k,he)}function Bi(M,O,q){O.isScene!==!0&&(O=Ze);const X=_.get(M),k=R.state.lights,he=R.state.shadowsArray,me=k.state.version,de=ae.getParameters(M,k.state,he,O,q),ye=ae.getProgramCacheKey(de);let Re=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;const Ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=$.get(M.envMap||X.environment,Ne),X.envMapRotation=X.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",Je),Re=new Map,X.programs=Re);let Ve=Re.get(ye);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===me)return ba(M,de),Ve}else de.uniforms=ae.getUniforms(M),M.onBeforeCompile(de,E),Ve=ae.acquireProgram(de,ye),Re.set(ye,Ve),X.uniforms=de.uniforms;const Pe=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),ba(M,de),X.needsLights=ml(M),X.lightsStateVersion=me,X.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function ya(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=pr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function ba(M,O){const q=_.get(M);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function dl(M,O,q,X,k){O.isScene!==!0&&(O=Ze),N.resetTextureUnits();const he=O.fog,me=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,de=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ui,ye=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Re=$.get(X.envMap||me,ye),Ne=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,lt=!!q.morphAttributes.color;let ot=en;X.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ot=E.toneMapping);const tt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=tt!==void 0?tt.length:0,be=_.get(X),Pt=R.state.lights;if(fe===!0&&(Ae===!0||M!==D)){const pt=M===D&&X.id===I;oe.setState(X,M,pt)}let qe=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Pt.state.version||be.outputColorSpace!==de||k.isBatchedMesh&&be.batching===!1||!k.isBatchedMesh&&be.batching===!0||k.isBatchedMesh&&be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&be.instancing===!1||!k.isInstancedMesh&&be.instancing===!0||k.isSkinnedMesh&&be.skinning===!1||!k.isSkinnedMesh&&be.skinning===!0||k.isInstancedMesh&&be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&be.instancingMorph===!1&&k.morphTexture!==null||be.envMap!==Re||X.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==oe.numPlanes||be.numIntersection!==oe.numIntersection)||be.vertexAlphas!==Ne||be.vertexTangents!==Ve||be.morphTargets!==Pe||be.morphNormals!==et||be.morphColors!==lt||be.toneMapping!==ot||be.morphTargetsCount!==vt)&&(qe=!0):(qe=!0,be.__version=X.version);let Gt=be.currentProgram;qe===!0&&(Gt=Bi(X,O,k));let qt=!1,Cn=!1,Hn=!1;const nt=Gt.getUniforms(),gt=be.uniforms;if(_e.useProgram(Gt.program)&&(qt=!0,Cn=!0,Hn=!0),X.id!==I&&(I=X.id,Cn=!0),qt||D!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),nt.setValue(P,"projectionMatrix",M.projectionMatrix),nt.setValue(P,"viewMatrix",M.matrixWorldInverse);const _n=nt.map.cameraPosition;_n!==void 0&&_n.setValue(P,Be.setFromMatrixPosition(M.matrixWorld)),$e.logarithmicDepthBuffer&&nt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&nt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),D!==M&&(D=M,Cn=!0,Hn=!0)}if(be.needsLights&&(Pt.state.directionalShadowMap.length>0&&nt.setValue(P,"directionalShadowMap",Pt.state.directionalShadowMap,N),Pt.state.spotShadowMap.length>0&&nt.setValue(P,"spotShadowMap",Pt.state.spotShadowMap,N),Pt.state.pointShadowMap.length>0&&nt.setValue(P,"pointShadowMap",Pt.state.pointShadowMap,N)),k.isSkinnedMesh){nt.setOptional(P,k,"bindMatrix"),nt.setOptional(P,k,"bindMatrixInverse");const pt=k.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),nt.setValue(P,"boneTexture",pt.boneTexture,N))}k.isBatchedMesh&&(nt.setOptional(P,k,"batchingTexture"),nt.setValue(P,"batchingTexture",k._matricesTexture,N),nt.setOptional(P,k,"batchingIdTexture"),nt.setValue(P,"batchingIdTexture",k._indirectTexture,N),nt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&nt.setValue(P,"batchingColorTexture",k._colorsTexture,N));const gn=q.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&pe.update(k,q,Gt),(Cn||be.receiveShadow!==k.receiveShadow)&&(be.receiveShadow=k.receiveShadow,nt.setValue(P,"receiveShadow",k.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(gt.envMapIntensity.value=O.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=rm()),Cn&&(nt.setValue(P,"toneMappingExposure",E.toneMappingExposure),be.needsLights&&pl(gt,Hn),he&&X.fog===!0&&Ce.refreshFogUniforms(gt,he),Ce.refreshMaterialUniforms(gt,X,xe,J,R.state.transmissionRenderTarget[M.id]),pr.upload(P,ya(be),gt,N)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(pr.upload(P,ya(be),gt,N),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&nt.setValue(P,"center",k.center),nt.setValue(P,"modelViewMatrix",k.modelViewMatrix),nt.setValue(P,"normalMatrix",k.normalMatrix),nt.setValue(P,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const pt=X.uniformsGroups;for(let _n=0,kn=pt.length;_n<kn;_n++){const Ta=pt[_n];ge.update(Ta,Gt),ge.bind(Ta,Gt)}}return Gt}function pl(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ml(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,O,q){const X=_.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=O,_.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const q=_.get(M);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const gl=P.createFramebuffer();this.setRenderTarget=function(M,O=0,q=0){z=M,w=O,F=q;let X=null,k=!1,he=!1;if(M){const de=_.get(M);if(de.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),L.copy(M.viewport),V.copy(M.scissor),ee=M.scissorTest,_e.viewport(L),_e.scissor(V),_e.setScissorTest(ee),I=-1;return}else if(de.__webglFramebuffer===void 0)N.setupRenderTarget(M);else if(de.__hasExternalTextures)N.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ne=M.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&_.has(Ne)&&(M.width!==Ne.image.width||M.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(M)}}const ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(he=!0);const Re=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?X=Re[O][q]:X=Re[O],k=!0):M.samples>0&&N.useMultisampledRTT(M)===!1?X=_.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?X=Re[q]:X=Re,L.copy(M.viewport),V.copy(M.scissor),ee=M.scissorTest}else L.copy(G).multiplyScalar(xe).floor(),V.copy(te).multiplyScalar(xe).floor(),ee=ie;if(q!==0&&(X=gl),_e.bindFramebuffer(P.FRAMEBUFFER,X)&&_e.drawBuffers(M,X),_e.viewport(L),_e.scissor(V),_e.setScissorTest(ee),k){const de=_.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,q)}else if(he){const de=O;for(let ye=0;ye<M.textures.length;ye++){const Re=_.get(M.textures[ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ye,Re.__webglTexture,q,de)}}else if(M!==null&&q!==0){const de=_.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,q)}I=-1},this.readRenderTargetPixels=function(M,O,q,X,k,he,me,de=0){if(!(M&&M.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){_e.bindFramebuffer(P.FRAMEBUFFER,ye);try{const Re=M.textures[de],Ne=Re.format,Ve=Re.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!$e.textureFormatReadable(Ne)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ve)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-X&&q>=0&&q<=M.height-k&&P.readPixels(O,q,X,k,ce.convert(Ne),ce.convert(Ve),he)}finally{const Re=z!==null?_.get(z).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,O,q,X,k,he,me,de=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye)if(O>=0&&O<=M.width-X&&q>=0&&q<=M.height-k){_e.bindFramebuffer(P.FRAMEBUFFER,ye);const Re=M.textures[de],Ne=Re.format,Ve=Re.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(O,q,X,k,ce.convert(Ne),ce.convert(Ve),0);const et=z!==null?_.get(z).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,et);const lt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await fc(P,lt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(Pe),P.deleteSync(lt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,q=0){const X=Math.pow(2,-q),k=Math.floor(M.image.width*X),he=Math.floor(M.image.height*X),me=O!==null?O.x:0,de=O!==null?O.y:0;N.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,me,de,k,he),_e.unbindTexture()};const _l=P.createFramebuffer(),vl=P.createFramebuffer();this.copyTextureToTexture=function(M,O,q=null,X=null,k=0,he=0){let me,de,ye,Re,Ne,Ve,Pe,et,lt;const ot=M.isCompressedTexture?M.mipmaps[he]:M.image;if(q!==null)me=q.max.x-q.min.x,de=q.max.y-q.min.y,ye=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Ne=q.min.y,Ve=q.isBox3?q.min.z:0;else{const gt=Math.pow(2,-k);me=Math.floor(ot.width*gt),de=Math.floor(ot.height*gt),M.isDataArrayTexture?ye=ot.depth:M.isData3DTexture?ye=Math.floor(ot.depth*gt):ye=1,Re=0,Ne=0,Ve=0}X!==null?(Pe=X.x,et=X.y,lt=X.z):(Pe=0,et=0,lt=0);const tt=ce.convert(O.format),vt=ce.convert(O.type);let be;O.isData3DTexture?(N.setTexture3D(O,0),be=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),be=P.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),be=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const Pt=P.getParameter(P.UNPACK_ROW_LENGTH),qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Gt=P.getParameter(P.UNPACK_SKIP_PIXELS),qt=P.getParameter(P.UNPACK_SKIP_ROWS),Cn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve);const Hn=M.isDataArrayTexture||M.isData3DTexture,nt=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const gt=_.get(M),gn=_.get(O),pt=_.get(gt.__renderTarget),_n=_.get(gn.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,pt.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let kn=0;kn<ye;kn++)Hn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(M).__webglTexture,k,Ve+kn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(O).__webglTexture,he,lt+kn)),P.blitFramebuffer(Re,Ne,me,de,Pe,et,me,de,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||_.has(M)){const gt=_.get(M),gn=_.get(O);_e.bindFramebuffer(P.READ_FRAMEBUFFER,_l),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,vl);for(let pt=0;pt<ye;pt++)Hn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,gt.__webglTexture,k,Ve+pt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,gt.__webglTexture,k),nt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,gn.__webglTexture,he,lt+pt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,gn.__webglTexture,he),k!==0?P.blitFramebuffer(Re,Ne,me,de,Pe,et,me,de,P.COLOR_BUFFER_BIT,P.NEAREST):nt?P.copyTexSubImage3D(be,he,Pe,et,lt+pt,Re,Ne,me,de):P.copyTexSubImage2D(be,he,Pe,et,Re,Ne,me,de);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nt?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(be,he,Pe,et,lt,me,de,ye,tt,vt,ot.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(be,he,Pe,et,lt,me,de,ye,tt,ot.data):P.texSubImage3D(be,he,Pe,et,lt,me,de,ye,tt,vt,ot):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,Pe,et,me,de,tt,vt,ot.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,Pe,et,ot.width,ot.height,tt,ot.data):P.texSubImage2D(P.TEXTURE_2D,he,Pe,et,me,de,tt,vt,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Cn),he===0&&O.generateMipmaps&&P.generateMipmap(be),_e.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&N.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?N.setTextureCube(M,0):M.isData3DTexture?N.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?N.setTexture2DArray(M,0):N.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){w=0,F=0,z=null,_e.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const am=new ga(-1,1,1,-1,0,1);class om extends Nt{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const lm=new om;class fl{constructor(e){this._mesh=new nn(lm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,am)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cm extends Fi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yr.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class wo extends Fi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let l,a;this.inverse?(l=0,a=1):(l=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class um extends Fi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ge);this._width=n.width,this._height=n.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ut}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cm(mr),this.copyPass.material.blending=Qt,this.timer=new lu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wo!==void 0&&(l instanceof wo?n=!0:l instanceof um&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hm extends Fi{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new He}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const dm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class hi extends Fi{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(s,l,{type:Ut}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Rt(s,l,{type:Ut});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Rt(s,l,{type:Ut});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),l=Math.round(l/2)}const a=dm;this.highPassUniforms=yr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ge(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const o=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=o,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=yr.clone(mr.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,premultipliedAlpha:!0,blending:gr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new ma,this._fsQuad=new fl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ge(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=hi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=hi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=l}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}hi.BlurDirectionX=new Ge(1,0);hi.BlurDirectionY=new Ge(0,1);const pm={colorBg:"#02101c",colorLine:"#bea2a2",colorSignal:"#16922f",useColor2:!1,colorSignal2:"#ff1463",useColor3:!1,colorSignal3:"#ffcc00",lineCount:79,globalRotation:180,positionX:37.2,positionY:-6.8,spreadHeight:61.03,spreadDepth:0,curveLength:65.63,straightLength:200,curvePower:.4915,waveSpeed:1.31,waveHeight:.8,lineOpacity:.275,signalCount:200,speedGlobal:.291,trailLength:29,bloomStrength:2.14,bloomRadius:.491},mm={lineCount:50,signalCount:100,positionX:0,positionY:0,spreadHeight:35,curveLength:45,straightLength:130,bloomStrength:1.5,bloomRadius:.4},gm="(max-width: 1023px)";function _m(){return typeof window>"u"?!1:window.matchMedia(gm).matches}const cs=150,Ro=150,vm=()=>{const i=At.useRef(null);return At.useEffect(()=>{const e=i.current;if(!e)return;let t=e.clientWidth,n=e.clientHeight;const r={...pm,..._m()?mm:{}},s=new kc;s.background=new He(r.colorBg),s.fog=new pa(r.colorBg,.002);const l=new Bt(45,t/n,1,1e3);l.position.set(0,0,90),l.lookAt(0,0,0);const a=new sm({antialias:!0});a.setSize(t,n),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(a.domElement);const c=new Ti;c.position.set(r.positionX,r.positionY,0),c.rotation.z=Cc.degToRad(r.globalRotation),s.add(c);const o=new hm(s,l),u=new hi(new Ge(t,n),1.5,.4,.85);u.threshold=0,u.strength=r.bloomStrength,u.radius=r.bloomRadius;const d=new fm(a);d.addPass(o),d.addPass(u);const f=new H;function h(I,D,L){const V=r.curveLength+r.straightLength,ee=-r.curveLength+I*V;let j=0,Y=0;const Q=(D/r.lineCount-.5)*2;if(ee<0){const J=(ee+r.curveLength)/r.curveLength;let xe=(Math.cos(J*Math.PI)+1)/2;xe=Math.pow(xe,r.curvePower),j=Q*r.spreadHeight*xe,Y=Q*r.spreadDepth*xe;const W=xe,Ke=Math.sin(L*r.waveSpeed+ee*.1+D)*r.waveHeight*W;j+=Ke}return f.set(ee,j,Y),f}const g=new Qs({color:r.colorLine,transparent:!0,opacity:r.lineOpacity,depthWrite:!1}),x=new Qs({vertexColors:!0,blending:gr,depthWrite:!1,depthTest:!1,transparent:!0}),m=new He(r.colorSignal),p=new He(r.colorSignal2),S=new He(r.colorSignal3);function y(){const I=[m];return r.useColor2&&I.push(p),r.useColor3&&I.push(S),I[Math.floor(Math.random()*I.length)]}let b=[],R=[];function T(){const I=new Nt,D=new Float32Array(Ro*3),L=new Float32Array(Ro*3);I.setAttribute("position",new It(D,3)),I.setAttribute("color",new It(L,3));const V=new Qa(I,x);V.frustumCulled=!1,V.renderOrder=1,c.add(V),R.push({mesh:V,laneIndex:Math.floor(Math.random()*r.lineCount),speed:.2+Math.random()*.5,progress:Math.random(),history:[],assignedColor:y()})}function C(){R.forEach(I=>{c.remove(I.mesh),I.mesh.geometry.dispose()}),R=[];for(let I=0;I<r.signalCount;I++)T()}function v(){b.forEach(I=>{c.remove(I),I.geometry.dispose()}),b=[];for(let I=0;I<r.lineCount;I++){const D=new Nt,L=new Float32Array(cs*3);D.setAttribute("position",new It(L,3));const V=new Qa(D,g);V.userData={id:I},V.renderOrder=0,c.add(V),b.push(V)}C()}v();const E=new uu;let B;function w(){B=requestAnimationFrame(w);const I=E.getElapsedTime();for(const D of b){const L=D.geometry.attributes.position.array,V=D.userData.id;for(let ee=0;ee<cs;ee++){const j=ee/(cs-1),Y=h(j,V,I);L[ee*3]=Y.x,L[ee*3+1]=Y.y,L[ee*3+2]=Y.z}D.geometry.attributes.position.needsUpdate=!0}for(const D of R){D.progress+=D.speed*.005*r.speedGlobal,D.progress>1&&(D.progress=0,D.laneIndex=Math.floor(Math.random()*r.lineCount),D.history=[],D.assignedColor=y());const L=h(D.progress,D.laneIndex,I);D.history.push(L.clone()),D.history.length>r.trailLength+1&&D.history.shift();const V=D.mesh.geometry.attributes.position.array,ee=D.mesh.geometry.attributes.color.array,j=Math.max(1,r.trailLength),Y=D.history.length;for(let Q=0;Q<j;Q++){let J=Y-1-Q;J<0&&(J=0);const xe=D.history[J]||new H;V[Q*3]=xe.x,V[Q*3+1]=xe.y,V[Q*3+2]=xe.z;let W=1;r.trailLength>0&&(W=Math.max(0,1-Q/r.trailLength)),ee[Q*3]=D.assignedColor.r*W,ee[Q*3+1]=D.assignedColor.g*W,ee[Q*3+2]=D.assignedColor.b*W}D.mesh.geometry.setDrawRange(0,j),D.mesh.geometry.attributes.position.needsUpdate=!0,D.mesh.geometry.attributes.color.needsUpdate=!0}d.render()}w();const F=()=>{t=e.clientWidth,n=e.clientHeight,l.aspect=t/n,l.updateProjectionMatrix(),a.setSize(t,n),d.setSize(t,n)},z=new ResizeObserver(F);return z.observe(e),window.addEventListener("resize",F),()=>{cancelAnimationFrame(B),z.disconnect(),window.removeEventListener("resize",F),b.forEach(I=>I.geometry.dispose()),R.forEach(I=>I.mesh.geometry.dispose()),g.dispose(),x.dispose(),d.dispose(),a.dispose(),a.domElement.parentNode===e&&e.removeChild(a.domElement)}},[]),we.jsx("div",{ref:i,className:"absolute inset-0 w-full h-full overflow-hidden pointer-events-none","aria-hidden":"true"})},xm=()=>{const[,i]=At.useState(!1);return At.useEffect(()=>{const e=setTimeout(()=>{i(!0)},2e3);return()=>clearTimeout(e)},[i]),we.jsxs(Tn.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"relative w-full overflow-hidden border-b-ternary-light dark:border-b-ternary-dark border-b-2",children:[we.jsx(vm,{}),we.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#061422]/80 via-[#061422]/40 to-transparent pointer-events-none"}),we.jsx("div",{className:"relative z-10 container mx-auto flex flex-col items-center lg:items-start justify-center min-h-[80vh] lg:min-h-[85vh] py-16 lg:py-24",children:we.jsxs("div",{className:"flex flex-col text-center lg:text-left space-y-4 w-full lg:max-w-3xl",children:[we.jsxs(Tn.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.1},children:[we.jsxs("p",{className:"text-3xl mb-2",children:[we.jsx("span",{className:"waving-hand",role:"img","aria-label":"Waving Hand",children:"👋"}),we.jsx("span",{className:"wave-text font-general-semibold text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-green-200",children:"Hi, My Name is"})]}),we.jsx("h1",{className:"font-general-semibold text-4xl lg:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-green-200",children:"Ikhsan Dwi Saputra"})]}),we.jsxs(Tn.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl leading-normal text-gray-200 flex justify-center lg:justify-start items-center min-h-[60px] md:min-h-0",children:[we.jsx("span",{className:"mr-2",children:"I am a"}),we.jsx(Cl,{options:{strings:["Front-End Developer.","Back-End Developer.","Full-Stack Developer.","Programmer."],autoStart:!0,loop:!0}})]}),we.jsxs(Tn.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"w-full flex flex-wrap justify-center lg:justify-start gap-2 pt-6",children:[we.jsxs("a",{href:"https://github.com/ikhsandwisaputra",className:"font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-white/20 backdrop-blur-sm bg-white/5 py-2.5 sm:py-2 shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-white/10 text-gray-200 hover:text-white duration-500",target:"_blank",rel:"noreferrer",children:[we.jsx(Sl,{className:"mr-2 sm:mr-3 h-5 w-5"}),we.jsx("span",{className:"text-sm sm:text-lg",children:"Github"})]}),we.jsxs("a",{href:"https://www.linkedin.com/in/ikhsan-dwi-saputra-339482297/",target:"_blank",rel:"noreferrer",className:"font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-white/20 backdrop-blur-sm bg-white/5 py-2.5 sm:py-2 shadow-lg rounded-lg focus:ring-1 focus:ring-green-900 hover:bg-white/10 text-gray-200 hover:text-white duration-500",children:[we.jsx(El,{className:"mr-2 sm:mr-3 h-5 w-5"}),we.jsx("span",{className:"text-sm sm:text-lg",children:"LinkedIn"})]}),we.jsxs("a",{href:"mailto:ikhsandwisaputraaaa@gmail.com",className:"font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-white/20 backdrop-blur-sm bg-white/5 py-2.5 sm:py-2 shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-white/10 text-gray-200 hover:text-white duration-500",children:[we.jsx(yl,{className:"mr-2 sm:mr-3 h-5 w-5"}),we.jsx("span",{className:"text-sm sm:text-lg",children:"Email"})]})]})]})})]})},Co=[{id:"projects",label:"Projects",Icon:Tl},{id:"about",label:"About",Icon:Al},{id:"contact",label:"Contact",Icon:wl}],Mm=({activeSection:i,onSelectSection:e,onLogoClick:t})=>{const[n,r]=bl(),[s,l]=At.useState(!1),a=At.useRef(null);return At.useEffect(()=>{const c=a.current;if(!c||typeof IntersectionObserver>"u")return;const o=new IntersectionObserver(([u])=>{l(!u.isIntersecting)},{threshold:0,rootMargin:"0px"});return o.observe(c),()=>o.disconnect()},[]),we.jsxs(we.Fragment,{children:[we.jsx("div",{ref:a,"aria-hidden":"true",className:"hidden sm:block h-px w-full"}),we.jsx(Tn.nav,{id:"sticky-nav",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},className:`hidden sm:block sticky top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${s?"bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md shadow-lg border-b border-ternary-light dark:border-ternary-dark":"bg-white/40 dark:bg-primary-dark/40 backdrop-blur-sm"}`,children:we.jsxs("div",{className:"container mx-auto flex items-center gap-2 px-4 py-3",children:[we.jsx("div",{className:"flex-1","aria-hidden":"true"}),we.jsx("ul",{className:"flex items-center gap-1 md:gap-4",children:Co.map(({id:c,label:o,Icon:u})=>{const d=i===c;return we.jsx("li",{children:we.jsxs("button",{type:"button",onClick:()=>e(c),className:`font-general-medium flex items-center gap-1.5 px-3 py-2 text-base text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light transition-colors border-b-2 ${d?"border-ternary-dark dark:border-ternary-light":"border-transparent"}`,"aria-label":o,"aria-current":d?"page":void 0,children:[we.jsx(u,{className:"h-5 w-5"}),we.jsx("span",{children:o})]})},c)})}),we.jsx("div",{className:"flex-1 flex justify-end",children:we.jsx("button",{type:"button",onClick:()=>r(n),"aria-label":"Theme Switcher",className:"shrink-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:n==="dark"?we.jsx(Aa,{className:"text-ternary-dark dark:text-ternary-light text-xl"}):we.jsx(wa,{className:"text-gray-200 hover:text-gray-50 text-xl"})})})]})}),we.jsx(Tn.div,{className:"fixed top-4 right-4 flex items-center z-[999999999] sm:hidden",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:we.jsx("button",{type:"button",onClick:()=>r(n),"aria-label":"Theme Switcher",className:"bg-primary-light border-[1px] dark:border-ternary-light border-ternary-dark dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:n==="dark"?we.jsx(Aa,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):we.jsx(wa,{className:"text-gray-200 hover:text-gray-50 text-xl"})})}),we.jsx(Tn.nav,{className:"fixed sm:hidden bottom-0 left-0 right-0 backdrop-filter bg-white pt-0 pb-5 z-[9999] w-full mx-auto dark:bg-ternary-dark",initial:{y:"100%"},animate:{y:"0%"},children:we.jsx("ul",{className:"flex justify-evenly items-center",children:Co.map(({id:c,label:o,Icon:u})=>{const d=i===c;return we.jsx("li",{className:`px-4 ${d?"border-t-2 border-ternary-dark dark:border-ternary-light":""}`,children:we.jsxs("button",{type:"button",onClick:()=>e(c),className:"flex flex-col justify-center items-center text-left text-md text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light border-b-2 border-transparent","aria-label":o,"aria-current":d?"page":void 0,children:[we.jsx(u,{className:"mt-3"}),o]})},c)})})})]})},Sm=At.lazy(()=>na(()=>import("./Projects-B-E0uvW_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Em=At.lazy(()=>na(()=>import("./AboutMe-D1lMcbyu.js"),__vite__mapDeps([8,1,2,3,4,6,9]))),ym=At.lazy(()=>na(()=>import("./Contact-C0XvKr8s.js"),__vite__mapDeps([10,1,2]))),Tm=()=>{const[i,e]=At.useState("projects"),t=At.useRef(null),n=l=>{e(l),requestAnimationFrame(()=>{const a=t.current;if(!a)return;const c=a.offsetTop;window.scrollY>c&&window.scrollTo({top:c,behavior:"auto"})})},r=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=()=>{switch(i){case"about":return we.jsx(Em,{});case"contact":return we.jsx(ym,{});case"projects":default:return we.jsx(Sm,{})}};return we.jsxs("div",{className:"mx-auto w-full",children:[we.jsx(xm,{}),we.jsxs("div",{ref:t,className:"relative",children:[we.jsx(Mm,{activeSection:i,onSelectSection:n,onLogoClick:r}),we.jsx(At.Suspense,{fallback:we.jsx("div",{className:"min-h-[60vh]"}),children:we.jsx(Tn.main,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.35,ease:"easeOut"},className:"min-h-[60vh]",children:s()},i)})]})]})};export{Tm as default};
