var Fv=Object.defineProperty;var Bv=(n,e,t)=>e in n?Fv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ql=(n,e,t)=>Bv(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Nt={},Ns=[],gi=()=>{},kv=()=>!1,sl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),_u=n=>n.startsWith("onUpdate:"),Rn=Object.assign,vu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hv=Object.prototype.hasOwnProperty,At=(n,e)=>Hv.call(n,e),rt=Array.isArray,Us=n=>al(n)==="[object Map]",Lp=n=>al(n)==="[object Set]",at=n=>typeof n=="function",Zt=n=>typeof n=="string",Vi=n=>typeof n=="symbol",Wt=n=>n!==null&&typeof n=="object",Pp=n=>(Wt(n)||at(n))&&at(n.then)&&at(n.catch),Ip=Object.prototype.toString,al=n=>Ip.call(n),zv=n=>al(n).slice(8,-1),Dp=n=>al(n)==="[object Object]",xu=n=>Zt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ea=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ol=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Gv=/-(\w)/g,fr=ol(n=>n.replace(Gv,(e,t)=>t?t.toUpperCase():"")),Vv=/\B([A-Z])/g,qr=ol(n=>n.replace(Vv,"-$1").toLowerCase()),Np=ol(n=>n.charAt(0).toUpperCase()+n.slice(1)),Yl=ol(n=>n?`on${Np(n)}`:""),or=(n,e)=>!Object.is(n,e),Kl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Up=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Wv=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let rf;const ll=()=>rf||(rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(n){if(rt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Zt(i)?qv(i):Gr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Zt(n)||Wt(n))return n}const Xv=/;(?![^(]*\))/g,jv=/:([^]+)/,$v=/\/\*[^]*?\*\//g;function qv(n){const e={};return n.replace($v,"").split(Xv).forEach(t=>{if(t){const i=t.split(jv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function oi(n){let e="";if(Zt(n))e=n;else if(rt(n))for(let t=0;t<n.length;t++){const i=oi(n[t]);i&&(e+=i+" ")}else if(Wt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Yv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kv=gu(Yv);function Op(n){return!!n||n===""}const Fp=n=>!!(n&&n.__v_isRef===!0),Kn=n=>Zt(n)?n:n==null?"":rt(n)||Wt(n)&&(n.toString===Ip||!at(n.toString))?Fp(n)?Kn(n.value):JSON.stringify(n,Bp,2):String(n),Bp=(n,e)=>Fp(e)?Bp(n,e.value):Us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Zl(i,s)+" =>"]=r,t),{})}:Lp(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Zl(t))}:Vi(e)?Zl(e):Wt(e)&&!rt(e)&&!Dp(e)?String(e):e,Zl=(n,e="")=>{var t;return Vi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hn;class Zv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Hn,!e&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Hn;try{return Hn=this,e()}finally{Hn=t}}}on(){Hn=this}off(){Hn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Jv(){return Hn}let Ft;const Jl=new WeakSet;class kp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Hn&&Hn.active&&Hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jl.has(this)&&(Jl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sf(this),Gp(this);const e=Ft,t=ri;Ft=this,ri=!0;try{return this.fn()}finally{Vp(this),Ft=e,ri=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mu(e);this.deps=this.depsTail=void 0,sf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let Hp=0,Ta,Aa;function zp(n,e=!1){if(n.flags|=8,e){n.next=Aa,Aa=n;return}n.next=Ta,Ta=n}function yu(){Hp++}function bu(){if(--Hp>0)return;if(Aa){let e=Aa;for(Aa=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ta;){let e=Ta;for(Ta=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Gp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vp(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Mu(i),Qv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Wc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Wp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ia))return;n.globalVersion=Ia;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Wc(n)){n.flags&=-3;return}const t=Ft,i=ri;Ft=n,ri=!0;try{Gp(n);const r=n.fn(n._value);(e.version===0||or(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=t,ri=i,Vp(n),n.flags&=-3}}function Mu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Mu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Qv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ri=!0;const Xp=[];function gr(){Xp.push(ri),ri=!1}function _r(){const n=Xp.pop();ri=n===void 0?!0:n}function sf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let Ia=0;class ex{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Su{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ft||!ri||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new ex(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,jp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,Ia++,this.notify(e)}notify(e){yu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bu()}}}function jp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)jp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Xc=new WeakMap,Br=Symbol(""),jc=Symbol(""),Da=Symbol("");function _n(n,e,t){if(ri&&Ft){let i=Xc.get(n);i||Xc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Su),r.map=i,r.key=t),r.track()}}function Fi(n,e,t,i,r,s){const a=Xc.get(n);if(!a){Ia++;return}const o=l=>{l&&l.trigger()};if(yu(),e==="clear")a.forEach(o);else{const l=rt(n),c=l&&xu(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,f)=>{(f==="length"||f===Da||!Vi(f)&&f>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Da)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Br)),Us(n)&&o(a.get(jc)));break;case"delete":l||(o(a.get(Br)),Us(n)&&o(a.get(jc)));break;case"set":Us(n)&&o(a.get(Br));break}}bu()}function cs(n){const e=Tt(n);return e===n?e:(_n(e,"iterate",Da),Yn(n)?e:e.map(vn))}function cl(n){return _n(n=Tt(n),"iterate",Da),n}const tx={__proto__:null,[Symbol.iterator](){return Ql(this,Symbol.iterator,vn)},concat(...n){return cs(this).concat(...n.map(e=>rt(e)?cs(e):e))},entries(){return Ql(this,"entries",n=>(n[1]=vn(n[1]),n))},every(n,e){return wi(this,"every",n,e,void 0,arguments)},filter(n,e){return wi(this,"filter",n,e,t=>t.map(vn),arguments)},find(n,e){return wi(this,"find",n,e,vn,arguments)},findIndex(n,e){return wi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wi(this,"findLast",n,e,vn,arguments)},findLastIndex(n,e){return wi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wi(this,"forEach",n,e,void 0,arguments)},includes(...n){return ec(this,"includes",n)},indexOf(...n){return ec(this,"indexOf",n)},join(n){return cs(this).join(n)},lastIndexOf(...n){return ec(this,"lastIndexOf",n)},map(n,e){return wi(this,"map",n,e,void 0,arguments)},pop(){return ha(this,"pop")},push(...n){return ha(this,"push",n)},reduce(n,...e){return af(this,"reduce",n,e)},reduceRight(n,...e){return af(this,"reduceRight",n,e)},shift(){return ha(this,"shift")},some(n,e){return wi(this,"some",n,e,void 0,arguments)},splice(...n){return ha(this,"splice",n)},toReversed(){return cs(this).toReversed()},toSorted(n){return cs(this).toSorted(n)},toSpliced(...n){return cs(this).toSpliced(...n)},unshift(...n){return ha(this,"unshift",n)},values(){return Ql(this,"values",vn)}};function Ql(n,e,t){const i=cl(n),r=i[e]();return i!==n&&!Yn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const nx=Array.prototype;function wi(n,e,t,i,r,s){const a=cl(n),o=a!==n&&!Yn(n),l=a[e];if(l!==nx[e]){const h=l.apply(n,s);return o?vn(h):h}let c=t;a!==n&&(o?c=function(h,f){return t.call(this,vn(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function af(n,e,t,i){const r=cl(n);let s=t;return r!==n&&(Yn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,vn(o),l,n)}),r[e](s,...i)}function ec(n,e,t){const i=Tt(n);_n(i,"iterate",Da);const r=i[e](...t);return(r===-1||r===!1)&&wu(t[0])?(t[0]=Tt(t[0]),i[e](...t)):r}function ha(n,e,t=[]){gr(),yu();const i=Tt(n)[e].apply(n,t);return bu(),_r(),i}const ix=gu("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vi));function rx(n){Vi(n)||(n=String(n));const e=Tt(this);return _n(e,"has",n),e.hasOwnProperty(n)}class qp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?px:Jp:s?Zp:Kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=rt(e);if(!r){let l;if(a&&(l=tx[t]))return l;if(t==="hasOwnProperty")return rx}const o=Reflect.get(e,t,yn(e)?e:i);return(Vi(t)?$p.has(t):ix(t))||(r||_n(e,"get",t),s)?o:yn(o)?a&&xu(t)?o:o.value:Wt(o)?r?Qp(o):Tu(o):o}}class Yp extends qp{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Vr(s);if(!Yn(i)&&!Vr(i)&&(s=Tt(s),i=Tt(i)),!rt(e)&&yn(s)&&!yn(i))return l?!1:(s.value=i,!0)}const a=rt(e)&&xu(t)?Number(t)<e.length:At(e,t),o=Reflect.set(e,t,i,yn(e)?e:r);return e===Tt(r)&&(a?or(i,s)&&Fi(e,"set",t,i):Fi(e,"add",t,i)),o}deleteProperty(e,t){const i=At(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Fi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Vi(t)||!$p.has(t))&&_n(e,"has",t),i}ownKeys(e){return _n(e,"iterate",rt(e)?"length":Br),Reflect.ownKeys(e)}}class sx extends qp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ax=new Yp,ox=new sx,lx=new Yp(!0);const $c=n=>n,ro=n=>Reflect.getPrototypeOf(n);function cx(n,e,t){return function(...i){const r=this.__v_raw,s=Tt(r),a=Us(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?$c:e?qc:vn;return!e&&_n(s,"iterate",l?jc:Br),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function so(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ux(n,e){const t={get(r){const s=this.__v_raw,a=Tt(s),o=Tt(r);n||(or(r,o)&&_n(a,"get",r),_n(a,"get",o));const{has:l}=ro(a),c=e?$c:n?qc:vn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&_n(Tt(r),"iterate",Br),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=Tt(s),o=Tt(r);return n||(or(r,o)&&_n(a,"has",r),_n(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Tt(o),c=e?$c:n?qc:vn;return!n&&_n(l,"iterate",Br),o.forEach((u,h)=>r.call(s,c(u),c(h),a))}};return Rn(t,n?{add:so("add"),set:so("set"),delete:so("delete"),clear:so("clear")}:{add(r){!e&&!Yn(r)&&!Vr(r)&&(r=Tt(r));const s=Tt(this);return ro(s).has.call(s,r)||(s.add(r),Fi(s,"add",r,r)),this},set(r,s){!e&&!Yn(s)&&!Vr(s)&&(s=Tt(s));const a=Tt(this),{has:o,get:l}=ro(a);let c=o.call(a,r);c||(r=Tt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?or(s,u)&&Fi(a,"set",r,s):Fi(a,"add",r,s),this},delete(r){const s=Tt(this),{has:a,get:o}=ro(s);let l=a.call(s,r);l||(r=Tt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Fi(s,"delete",r,void 0),c},clear(){const r=Tt(this),s=r.size!==0,a=r.clear();return s&&Fi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=cx(r,n,e)}),t}function Eu(n,e){const t=ux(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(At(t,r)&&r in i?t:i,r,s)}const hx={get:Eu(!1,!1)},fx={get:Eu(!1,!0)},dx={get:Eu(!0,!1)};const Kp=new WeakMap,Zp=new WeakMap,Jp=new WeakMap,px=new WeakMap;function mx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gx(n){return n.__v_skip||!Object.isExtensible(n)?0:mx(zv(n))}function Tu(n){return Vr(n)?n:Au(n,!1,ax,hx,Kp)}function _x(n){return Au(n,!1,lx,fx,Zp)}function Qp(n){return Au(n,!0,ox,dx,Jp)}function Au(n,e,t,i,r){if(!Wt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=gx(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Os(n){return Vr(n)?Os(n.__v_raw):!!(n&&n.__v_isReactive)}function Vr(n){return!!(n&&n.__v_isReadonly)}function Yn(n){return!!(n&&n.__v_isShallow)}function wu(n){return n?!!n.__v_raw:!1}function Tt(n){const e=n&&n.__v_raw;return e?Tt(e):n}function vx(n){return!At(n,"__v_skip")&&Object.isExtensible(n)&&Up(n,"__v_skip",!0),n}const vn=n=>Wt(n)?Tu(n):n,qc=n=>Wt(n)?Qp(n):n;function yn(n){return n?n.__v_isRef===!0:!1}function Jt(n){return em(n,!1)}function tc(n){return em(n,!0)}function em(n,e){return yn(n)?n:new xx(n,e)}class xx{constructor(e,t){this.dep=new Su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Tt(e),this._value=t?e:vn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Yn(e)||Vr(e);e=i?e:Tt(e),or(e,t)&&(this._rawValue=e,this._value=i?e:vn(e),this.dep.trigger())}}function Ir(n){return yn(n)?n.value:n}const yx={get:(n,e,t)=>e==="__v_raw"?n:Ir(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yn(r)&&!yn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function tm(n){return Os(n)?n:new Proxy(n,yx)}class bx{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ia-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return zp(this,!0),!0}get value(){const e=this.dep.track();return Wp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mx(n,e,t=!1){let i,r;return at(n)?i=n:(i=n.get,r=n.set),new bx(i,r,t)}const ao={},Wo=new WeakMap;let Dr;function Sx(n,e=!1,t=Dr){if(t){let i=Wo.get(t);i||Wo.set(t,i=[]),i.push(n)}}function Ex(n,e,t=Nt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=A=>r?A:Yn(A)||r===!1||r===0?Bi(A,1):Bi(A);let u,h,f,m,x=!1,v=!1;if(yn(n)?(h=()=>n.value,x=Yn(n)):Os(n)?(h=()=>c(n),x=!0):rt(n)?(v=!0,x=n.some(A=>Os(A)||Yn(A)),h=()=>n.map(A=>{if(yn(A))return A.value;if(Os(A))return c(A);if(at(A))return l?l(A,2):A()})):at(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){gr();try{f()}finally{_r()}}const A=Dr;Dr=u;try{return l?l(n,3,[m]):n(m)}finally{Dr=A}}:h=gi,e&&r){const A=h,P=r===!0?1/0:r;h=()=>Bi(A(),P)}const g=Jv(),p=()=>{u.stop(),g&&g.active&&vu(g.effects,u)};if(s&&e){const A=e;e=(...P)=>{A(...P),p()}}let w=v?new Array(n.length).fill(ao):ao;const S=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const P=u.run();if(r||x||(v?P.some((D,I)=>or(D,w[I])):or(P,w))){f&&f();const D=Dr;Dr=u;try{const I=[P,w===ao?void 0:v&&w[0]===ao?[]:w,m];l?l(e,3,I):e(...I),w=P}finally{Dr=D}}}else u.run()};return o&&o(S),u=new kp(h),u.scheduler=a?()=>a(S,!1):S,m=A=>Sx(A,!1,u),f=u.onStop=()=>{const A=Wo.get(u);if(A){if(l)l(A,4);else for(const P of A)P();Wo.delete(u)}},e?i?S(!0):w=u.run():a?a(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Bi(n,e=1/0,t){if(e<=0||!Wt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,yn(n))Bi(n.value,e,t);else if(rt(n))for(let i=0;i<n.length;i++)Bi(n[i],e,t);else if(Lp(n)||Us(n))n.forEach(i=>{Bi(i,e,t)});else if(Dp(n)){for(const i in n)Bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ka(n,e,t,i){try{return i?n(...i):n()}catch(r){ul(r,e,t)}}function vi(n,e,t,i){if(at(n)){const r=ka(n,e,t,i);return r&&Pp(r)&&r.catch(s=>{ul(s,e,t)}),r}if(rt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(vi(n[s],e,t,i));return r}}function ul(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(s){gr(),ka(s,null,10,[n,l,c]),_r();return}}Tx(n,t,r,i,a)}function Tx(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Tn=[];let hi=-1;const Fs=[];let tr=null,Ls=0;const nm=Promise.resolve();let Xo=null;function Ax(n){const e=Xo||nm;return n?e.then(this?n.bind(this):n):e}function wx(n){let e=hi+1,t=Tn.length;for(;e<t;){const i=e+t>>>1,r=Tn[i],s=Na(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ru(n){if(!(n.flags&1)){const e=Na(n),t=Tn[Tn.length-1];!t||!(n.flags&2)&&e>=Na(t)?Tn.push(n):Tn.splice(wx(e),0,n),n.flags|=1,im()}}function im(){Xo||(Xo=nm.then(sm))}function Rx(n){rt(n)?Fs.push(...n):tr&&n.id===-1?tr.splice(Ls+1,0,n):n.flags&1||(Fs.push(n),n.flags|=1),im()}function of(n,e,t=hi+1){for(;t<Tn.length;t++){const i=Tn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Tn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function rm(n){if(Fs.length){const e=[...new Set(Fs)].sort((t,i)=>Na(t)-Na(i));if(Fs.length=0,tr){tr.push(...e);return}for(tr=e,Ls=0;Ls<tr.length;Ls++){const t=tr[Ls];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}tr=null,Ls=0}}const Na=n=>n.id==null?n.flags&2?-1:1/0:n.id;function sm(n){try{for(hi=0;hi<Tn.length;hi++){const e=Tn[hi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ka(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hi<Tn.length;hi++){const e=Tn[hi];e&&(e.flags&=-2)}hi=-1,Tn.length=0,rm(),Xo=null,(Tn.length||Fs.length)&&sm()}}let xn=null,am=null;function jo(n){const e=xn;return xn=n,am=n&&n.type.__scopeId||null,e}function Cu(n,e=xn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&gf(-1);const s=jo(e);let a;try{a=n(...r)}finally{jo(s),i._d&&gf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Cx(n,e){if(xn===null)return n;const t=pl(xn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=Nt]=e[r];s&&(at(s)&&(s={mounted:s,updated:s}),s.deep&&Bi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Tr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(gr(),vi(l,t,8,[n.el,o,n,e]),_r())}}const Lx=Symbol("_vte"),Px=n=>n.__isTeleport;function Lu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Lu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function om(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $o(n,e,t,i,r=!1){if(rt(n)){n.forEach((x,v)=>$o(x,e&&(rt(e)?e[v]:e),t,i,r));return}if(Bs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$o(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?pl(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Nt?o.refs={}:o.refs,h=o.setupState,f=Tt(h),m=h===Nt?()=>!1:x=>At(f,x);if(c!=null&&c!==l&&(Zt(c)?(u[c]=null,m(c)&&(h[c]=null)):yn(c)&&(c.value=null)),at(l))ka(l,o,12,[a,u]);else{const x=Zt(l),v=yn(l);if(x||v){const g=()=>{if(n.f){const p=x?m(l)?h[l]:u[l]:l.value;r?rt(p)&&vu(p,s):rt(p)?p.includes(s)||p.push(s):x?(u[l]=[s],m(l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else x?(u[l]=a,m(l)&&(h[l]=a)):v&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,Bn(g,t)):g()}}}ll().requestIdleCallback;ll().cancelIdleCallback;const Bs=n=>!!n.type.__asyncLoader,lm=n=>n.type.__isKeepAlive;function Ix(n,e){cm(n,"a",e)}function Dx(n,e){cm(n,"da",e)}function cm(n,e,t=An){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(hl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)lm(r.parent.vnode)&&Nx(i,e,t,r),r=r.parent}}function Nx(n,e,t,i){const r=hl(e,n,i,!0);um(()=>{vu(i[e],r)},t)}function hl(n,e,t=An,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{gr();const o=Ha(t),l=vi(e,t,n,a);return o(),_r(),l});return i?r.unshift(s):r.push(s),s}}const Wi=n=>(e,t=An)=>{(!Oa||n==="sp")&&hl(n,(...i)=>e(...i),t)},Ux=Wi("bm"),Pu=Wi("m"),Ox=Wi("bu"),Fx=Wi("u"),Bx=Wi("bum"),um=Wi("um"),kx=Wi("sp"),Hx=Wi("rtg"),zx=Wi("rtc");function Gx(n,e=An){hl("ec",n,e)}const Vx=Symbol.for("v-ndc");function hm(n,e,t,i){let r;const s=t,a=rt(n);if(a||Zt(n)){const o=a&&Os(n);let l=!1;o&&(l=!Yn(n),n=cl(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?vn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(Wt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function Wx(n,e,t={},i,r){if(xn.ce||xn.parent&&Bs(xn.parent)&&xn.parent.ce)return Lt(),pr(Pn,null,[$t("slot",t,i)],64);let s=n[e];s&&s._c&&(s._d=!1),Lt();const a=s&&fm(s(t)),o=t.key||a&&a.key,l=pr(Pn,{key:(o&&!Vi(o)?o:`_${e}`)+""},a||[],a&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function fm(n){return n.some(e=>Du(e)?!(e.type===dr||e.type===Pn&&!fm(e.children)):!0)?n:null}const Yc=n=>n?Dm(n)?pl(n):Yc(n.parent):null,wa=Rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yc(n.parent),$root:n=>Yc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>pm(n),$forceUpdate:n=>n.f||(n.f=()=>{Ru(n.update)}),$nextTick:n=>n.n||(n.n=Ax.bind(n.proxy)),$watch:n=>fy.bind(n)}),nc=(n,e)=>n!==Nt&&!n.__isScriptSetup&&At(n,e),Xx={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(nc(i,e))return a[e]=1,i[e];if(r!==Nt&&At(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&At(c,e))return a[e]=3,s[e];if(t!==Nt&&At(t,e))return a[e]=4,t[e];Kc&&(a[e]=0)}}const u=wa[e];let h,f;if(u)return e==="$attrs"&&_n(n.attrs,"get",""),u(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==Nt&&At(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,At(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return nc(r,e)?(r[e]=t,!0):i!==Nt&&At(i,e)?(i[e]=t,!0):At(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Nt&&At(n,a)||nc(e,a)||(o=s[0])&&At(o,a)||At(i,a)||At(wa,a)||At(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:At(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lf(n){return rt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Kc=!0;function jx(n){const e=pm(n),t=n.proxy,i=n.ctx;Kc=!1,e.beforeCreate&&cf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:x,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:w,destroyed:S,unmounted:A,render:P,renderTracked:D,renderTriggered:I,errorCaptured:H,serverPrefetch:E,expose:L,inheritAttrs:Z,components:me,directives:_e,filters:k}=e;if(c&&$x(c,i,null),a)for(const J in a){const fe=a[J];at(fe)&&(i[J]=fe.bind(t))}if(r){const J=r.call(t,t);Wt(J)&&(n.data=Tu(J))}if(Kc=!0,s)for(const J in s){const fe=s[J],se=at(fe)?fe.bind(t,t):at(fe.get)?fe.get.bind(t,t):gi,ve=!at(fe)&&at(fe.set)?fe.set.bind(t):gi,X=za({get:se,set:ve});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>X.value,set:ne=>X.value=ne})}if(o)for(const J in o)dm(o[J],i,t,J);if(l){const J=at(l)?l.call(t):l;Reflect.ownKeys(J).forEach(fe=>{Qx(fe,J[fe])})}u&&cf(u,n,"c");function ee(J,fe){rt(fe)?fe.forEach(se=>J(se.bind(t))):fe&&J(fe.bind(t))}if(ee(Ux,h),ee(Pu,f),ee(Ox,m),ee(Fx,x),ee(Ix,v),ee(Dx,g),ee(Gx,H),ee(zx,D),ee(Hx,I),ee(Bx,w),ee(um,A),ee(kx,E),rt(L))if(L.length){const J=n.exposed||(n.exposed={});L.forEach(fe=>{Object.defineProperty(J,fe,{get:()=>t[fe],set:se=>t[fe]=se})})}else n.exposed||(n.exposed={});P&&n.render===gi&&(n.render=P),Z!=null&&(n.inheritAttrs=Z),me&&(n.components=me),_e&&(n.directives=_e),E&&om(n)}function $x(n,e,t=gi){rt(n)&&(n=Zc(n));for(const i in n){const r=n[i];let s;Wt(r)?"default"in r?s=Oo(r.from||i,r.default,!0):s=Oo(r.from||i):s=Oo(r),yn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function cf(n,e,t){vi(rt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function dm(n,e,t,i){let r=i.includes(".")?Rm(t,i):()=>t[i];if(Zt(n)){const s=e[n];at(s)&&rc(r,s)}else if(at(n))rc(r,n.bind(t));else if(Wt(n))if(rt(n))n.forEach(s=>dm(s,e,t,i));else{const s=at(n.handler)?n.handler.bind(t):e[n.handler];at(s)&&rc(r,s,n)}}function pm(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>qo(l,c,a,!0)),qo(l,e,a)),Wt(e)&&s.set(e,l),l}function qo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&qo(n,s,t,!0),r&&r.forEach(a=>qo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=qx[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const qx={data:uf,props:hf,emits:hf,methods:Ma,computed:Ma,beforeCreate:Sn,created:Sn,beforeMount:Sn,mounted:Sn,beforeUpdate:Sn,updated:Sn,beforeDestroy:Sn,beforeUnmount:Sn,destroyed:Sn,unmounted:Sn,activated:Sn,deactivated:Sn,errorCaptured:Sn,serverPrefetch:Sn,components:Ma,directives:Ma,watch:Kx,provide:uf,inject:Yx};function uf(n,e){return e?n?function(){return Rn(at(n)?n.call(this,this):n,at(e)?e.call(this,this):e)}:e:n}function Yx(n,e){return Ma(Zc(n),Zc(e))}function Zc(n){if(rt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Sn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ma(n,e){return n?Rn(Object.create(null),n,e):e}function hf(n,e){return n?rt(n)&&rt(e)?[...new Set([...n,...e])]:Rn(Object.create(null),lf(n),lf(e??{})):e}function Kx(n,e){if(!n)return e;if(!e)return n;const t=Rn(Object.create(null),n);for(const i in e)t[i]=Sn(n[i],e[i]);return t}function mm(){return{app:null,config:{isNativeTag:kv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zx=0;function Jx(n,e){return function(i,r=null){at(i)||(i=Rn({},i)),r!=null&&!Wt(r)&&(r=null);const s=mm(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Zx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Dy,get config(){return s.config},set config(u){},use(u,...h){return a.has(u)||(u&&at(u.install)?(a.add(u),u.install(c,...h)):at(u)&&(a.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const m=c._ceVNode||$t(i,r);return m.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,pl(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(vi(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=ks;ks=c;try{return u()}finally{ks=h}}};return c}}let ks=null;function Qx(n,e){if(An){let t=An.provides;const i=An.parent&&An.parent.provides;i===t&&(t=An.provides=Object.create(i)),t[n]=e}}function Oo(n,e,t=!1){const i=An||xn;if(i||ks){const r=ks?ks._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&at(e)?e.call(i&&i.proxy):e}}const gm={},_m=()=>Object.create(gm),vm=n=>Object.getPrototypeOf(n)===gm;function ey(n,e,t,i=!1){const r={},s=_m();n.propsDefaults=Object.create(null),xm(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:_x(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ty(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Tt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(fl(n.emitsOptions,f))continue;const m=e[f];if(l)if(At(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const x=fr(f);r[x]=Jc(l,o,x,m,n,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{xm(n,e,r,s)&&(c=!0);let u;for(const h in o)(!e||!At(e,h)&&((u=qr(h))===h||!At(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Jc(l,o,h,void 0,n,!0)):delete r[h]);if(s!==o)for(const h in s)(!e||!At(e,h))&&(delete s[h],c=!0)}c&&Fi(n.attrs,"set","")}function xm(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ea(l))continue;const c=e[l];let u;r&&At(r,u=fr(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:fl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Tt(t),c=o||Nt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Jc(r,l,h,c[h],n,!At(c,h))}}return a}function Jc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=At(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&at(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ha(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===qr(t))&&(i=!0))}return i}const ny=new WeakMap;function ym(n,e,t=!1){const i=t?ny:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!at(n)){const u=h=>{l=!0;const[f,m]=ym(h,e,!0);Rn(a,f),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Wt(n)&&i.set(n,Ns),Ns;if(rt(s))for(let u=0;u<s.length;u++){const h=fr(s[u]);ff(h)&&(a[h]=Nt)}else if(s)for(const u in s){const h=fr(u);if(ff(h)){const f=s[u],m=a[h]=rt(f)||at(f)?{type:f}:Rn({},f),x=m.type;let v=!1,g=!0;if(rt(x))for(let p=0;p<x.length;++p){const w=x[p],S=at(w)&&w.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(g=!1)}else v=at(x)&&x.name==="Boolean";m[0]=v,m[1]=g,(v||At(m,"default"))&&o.push(h)}}const c=[a,o];return Wt(n)&&i.set(n,c),c}function ff(n){return n[0]!=="$"&&!Ea(n)}const bm=n=>n[0]==="_"||n==="$stable",Iu=n=>rt(n)?n.map(fi):[fi(n)],iy=(n,e,t)=>{if(e._n)return e;const i=Cu((...r)=>Iu(e(...r)),t);return i._c=!1,i},Mm=(n,e,t)=>{const i=n._ctx;for(const r in n){if(bm(r))continue;const s=n[r];if(at(s))e[r]=iy(r,s,i);else if(s!=null){const a=Iu(s);e[r]=()=>a}}},Sm=(n,e)=>{const t=Iu(e);n.slots.default=()=>t},Em=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},ry=(n,e,t)=>{const i=n.slots=_m();if(n.vnode.shapeFlag&32){const r=e._;r?(Em(i,e,t),t&&Up(i,"_",r,!0)):Mm(e,i)}else e&&Sm(n,e)},sy=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Em(r,e,t):(s=!e.$stable,Mm(e,r)),a=e}else e&&(Sm(n,e),a={default:1});if(s)for(const o in r)!bm(o)&&a[o]==null&&delete r[o]},Bn=xy;function ay(n){return oy(n)}function oy(n,e){const t=ll();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=gi,insertStaticContent:x}=n,v=(M,F,W,te=null,Q=null,ce=null,pe=void 0,le=null,de=!!F.dynamicChildren)=>{if(M===F)return;M&&!fa(M,F)&&(te=Ye(M),ne(M,Q,ce,!0),M=null),F.patchFlag===-2&&(de=!1,F.dynamicChildren=null);const{type:ge,ref:Oe,shapeFlag:T}=F;switch(ge){case dl:g(M,F,W,te);break;case dr:p(M,F,W,te);break;case Fo:M==null&&w(F,W,te,pe);break;case Pn:me(M,F,W,te,Q,ce,pe,le,de);break;default:T&1?P(M,F,W,te,Q,ce,pe,le,de):T&6?_e(M,F,W,te,Q,ce,pe,le,de):(T&64||T&128)&&ge.process(M,F,W,te,Q,ce,pe,le,de,Bt)}Oe!=null&&Q&&$o(Oe,M&&M.ref,ce,F||M,!F)},g=(M,F,W,te)=>{if(M==null)i(F.el=o(F.children),W,te);else{const Q=F.el=M.el;F.children!==M.children&&c(Q,F.children)}},p=(M,F,W,te)=>{M==null?i(F.el=l(F.children||""),W,te):F.el=M.el},w=(M,F,W,te)=>{[M.el,M.anchor]=x(M.children,F,W,te,M.el,M.anchor)},S=({el:M,anchor:F},W,te)=>{let Q;for(;M&&M!==F;)Q=f(M),i(M,W,te),M=Q;i(F,W,te)},A=({el:M,anchor:F})=>{let W;for(;M&&M!==F;)W=f(M),r(M),M=W;r(F)},P=(M,F,W,te,Q,ce,pe,le,de)=>{F.type==="svg"?pe="svg":F.type==="math"&&(pe="mathml"),M==null?D(F,W,te,Q,ce,pe,le,de):E(M,F,Q,ce,pe,le,de)},D=(M,F,W,te,Q,ce,pe,le)=>{let de,ge;const{props:Oe,shapeFlag:T,transition:b,dirs:V}=M;if(de=M.el=a(M.type,ce,Oe&&Oe.is,Oe),T&8?u(de,M.children):T&16&&H(M.children,de,null,te,Q,ic(M,ce),pe,le),V&&Tr(M,null,te,"created"),I(de,M,M.scopeId,pe,te),Oe){for(const oe in Oe)oe!=="value"&&!Ea(oe)&&s(de,oe,null,Oe[oe],ce,te);"value"in Oe&&s(de,"value",null,Oe.value,ce),(ge=Oe.onVnodeBeforeMount)&&ui(ge,te,M)}V&&Tr(M,null,te,"beforeMount");const ae=ly(Q,b);ae&&b.beforeEnter(de),i(de,F,W),((ge=Oe&&Oe.onVnodeMounted)||ae||V)&&Bn(()=>{ge&&ui(ge,te,M),ae&&b.enter(de),V&&Tr(M,null,te,"mounted")},Q)},I=(M,F,W,te,Q)=>{if(W&&m(M,W),te)for(let ce=0;ce<te.length;ce++)m(M,te[ce]);if(Q){let ce=Q.subTree;if(F===ce||Lm(ce.type)&&(ce.ssContent===F||ce.ssFallback===F)){const pe=Q.vnode;I(M,pe,pe.scopeId,pe.slotScopeIds,Q.parent)}}},H=(M,F,W,te,Q,ce,pe,le,de=0)=>{for(let ge=de;ge<M.length;ge++){const Oe=M[ge]=le?nr(M[ge]):fi(M[ge]);v(null,Oe,F,W,te,Q,ce,pe,le)}},E=(M,F,W,te,Q,ce,pe)=>{const le=F.el=M.el;let{patchFlag:de,dynamicChildren:ge,dirs:Oe}=F;de|=M.patchFlag&16;const T=M.props||Nt,b=F.props||Nt;let V;if(W&&Ar(W,!1),(V=b.onVnodeBeforeUpdate)&&ui(V,W,F,M),Oe&&Tr(F,M,W,"beforeUpdate"),W&&Ar(W,!0),(T.innerHTML&&b.innerHTML==null||T.textContent&&b.textContent==null)&&u(le,""),ge?L(M.dynamicChildren,ge,le,W,te,ic(F,Q),ce):pe||fe(M,F,le,null,W,te,ic(F,Q),ce,!1),de>0){if(de&16)Z(le,T,b,W,Q);else if(de&2&&T.class!==b.class&&s(le,"class",null,b.class,Q),de&4&&s(le,"style",T.style,b.style,Q),de&8){const ae=F.dynamicProps;for(let oe=0;oe<ae.length;oe++){const ue=ae[oe],Ne=T[ue],Me=b[ue];(Me!==Ne||ue==="value")&&s(le,ue,Ne,Me,Q,W)}}de&1&&M.children!==F.children&&u(le,F.children)}else!pe&&ge==null&&Z(le,T,b,W,Q);((V=b.onVnodeUpdated)||Oe)&&Bn(()=>{V&&ui(V,W,F,M),Oe&&Tr(F,M,W,"updated")},te)},L=(M,F,W,te,Q,ce,pe)=>{for(let le=0;le<F.length;le++){const de=M[le],ge=F[le],Oe=de.el&&(de.type===Pn||!fa(de,ge)||de.shapeFlag&70)?h(de.el):W;v(de,ge,Oe,null,te,Q,ce,pe,!0)}},Z=(M,F,W,te,Q)=>{if(F!==W){if(F!==Nt)for(const ce in F)!Ea(ce)&&!(ce in W)&&s(M,ce,F[ce],null,Q,te);for(const ce in W){if(Ea(ce))continue;const pe=W[ce],le=F[ce];pe!==le&&ce!=="value"&&s(M,ce,le,pe,Q,te)}"value"in W&&s(M,"value",F.value,W.value,Q)}},me=(M,F,W,te,Q,ce,pe,le,de)=>{const ge=F.el=M?M.el:o(""),Oe=F.anchor=M?M.anchor:o("");let{patchFlag:T,dynamicChildren:b,slotScopeIds:V}=F;V&&(le=le?le.concat(V):V),M==null?(i(ge,W,te),i(Oe,W,te),H(F.children||[],W,Oe,Q,ce,pe,le,de)):T>0&&T&64&&b&&M.dynamicChildren?(L(M.dynamicChildren,b,W,Q,ce,pe,le),(F.key!=null||Q&&F===Q.subTree)&&Tm(M,F,!0)):fe(M,F,W,Oe,Q,ce,pe,le,de)},_e=(M,F,W,te,Q,ce,pe,le,de)=>{F.slotScopeIds=le,M==null?F.shapeFlag&512?Q.ctx.activate(F,W,te,pe,de):k(F,W,te,Q,ce,pe,de):Y(M,F,de)},k=(M,F,W,te,Q,ce,pe)=>{const le=M.component=wy(M,te,Q);if(lm(M)&&(le.ctx.renderer=Bt),Ry(le,!1,pe),le.asyncDep){if(Q&&Q.registerDep(le,ee,pe),!M.el){const de=le.subTree=$t(dr);p(null,de,F,W)}}else ee(le,M,F,W,Q,ce,pe)},Y=(M,F,W)=>{const te=F.component=M.component;if(_y(M,F,W))if(te.asyncDep&&!te.asyncResolved){J(te,F,W);return}else te.next=F,te.update();else F.el=M.el,te.vnode=F},ee=(M,F,W,te,Q,ce,pe)=>{const le=()=>{if(M.isMounted){let{next:T,bu:b,u:V,parent:ae,vnode:oe}=M;{const O=Am(M);if(O){T&&(T.el=oe.el,J(M,T,pe)),O.asyncDep.then(()=>{M.isUnmounted||le()});return}}let ue=T,Ne;Ar(M,!1),T?(T.el=oe.el,J(M,T,pe)):T=oe,b&&Kl(b),(Ne=T.props&&T.props.onVnodeBeforeUpdate)&&ui(Ne,ae,T,oe),Ar(M,!0);const Me=pf(M),Re=M.subTree;M.subTree=Me,v(Re,Me,h(Re.el),Ye(Re),M,Q,ce),T.el=Me.el,ue===null&&vy(M,Me.el),V&&Bn(V,Q),(Ne=T.props&&T.props.onVnodeUpdated)&&Bn(()=>ui(Ne,ae,T,oe),Q)}else{let T;const{el:b,props:V}=F,{bm:ae,m:oe,parent:ue,root:Ne,type:Me}=M,Re=Bs(F);Ar(M,!1),ae&&Kl(ae),!Re&&(T=V&&V.onVnodeBeforeMount)&&ui(T,ue,F),Ar(M,!0);{Ne.ce&&Ne.ce._injectChildStyle(Me);const O=M.subTree=pf(M);v(null,O,W,te,M,Q,ce),F.el=O.el}if(oe&&Bn(oe,Q),!Re&&(T=V&&V.onVnodeMounted)){const O=F;Bn(()=>ui(T,ue,O),Q)}(F.shapeFlag&256||ue&&Bs(ue.vnode)&&ue.vnode.shapeFlag&256)&&M.a&&Bn(M.a,Q),M.isMounted=!0,F=W=te=null}};M.scope.on();const de=M.effect=new kp(le);M.scope.off();const ge=M.update=de.run.bind(de),Oe=M.job=de.runIfDirty.bind(de);Oe.i=M,Oe.id=M.uid,de.scheduler=()=>Ru(Oe),Ar(M,!0),ge()},J=(M,F,W)=>{F.component=M;const te=M.vnode.props;M.vnode=F,M.next=null,ty(M,F.props,te,W),sy(M,F.children,W),gr(),of(M),_r()},fe=(M,F,W,te,Q,ce,pe,le,de=!1)=>{const ge=M&&M.children,Oe=M?M.shapeFlag:0,T=F.children,{patchFlag:b,shapeFlag:V}=F;if(b>0){if(b&128){ve(ge,T,W,te,Q,ce,pe,le,de);return}else if(b&256){se(ge,T,W,te,Q,ce,pe,le,de);return}}V&8?(Oe&16&&je(ge,Q,ce),T!==ge&&u(W,T)):Oe&16?V&16?ve(ge,T,W,te,Q,ce,pe,le,de):je(ge,Q,ce,!0):(Oe&8&&u(W,""),V&16&&H(T,W,te,Q,ce,pe,le,de))},se=(M,F,W,te,Q,ce,pe,le,de)=>{M=M||Ns,F=F||Ns;const ge=M.length,Oe=F.length,T=Math.min(ge,Oe);let b;for(b=0;b<T;b++){const V=F[b]=de?nr(F[b]):fi(F[b]);v(M[b],V,W,null,Q,ce,pe,le,de)}ge>Oe?je(M,Q,ce,!0,!1,T):H(F,W,te,Q,ce,pe,le,de,T)},ve=(M,F,W,te,Q,ce,pe,le,de)=>{let ge=0;const Oe=F.length;let T=M.length-1,b=Oe-1;for(;ge<=T&&ge<=b;){const V=M[ge],ae=F[ge]=de?nr(F[ge]):fi(F[ge]);if(fa(V,ae))v(V,ae,W,null,Q,ce,pe,le,de);else break;ge++}for(;ge<=T&&ge<=b;){const V=M[T],ae=F[b]=de?nr(F[b]):fi(F[b]);if(fa(V,ae))v(V,ae,W,null,Q,ce,pe,le,de);else break;T--,b--}if(ge>T){if(ge<=b){const V=b+1,ae=V<Oe?F[V].el:te;for(;ge<=b;)v(null,F[ge]=de?nr(F[ge]):fi(F[ge]),W,ae,Q,ce,pe,le,de),ge++}}else if(ge>b)for(;ge<=T;)ne(M[ge],Q,ce,!0),ge++;else{const V=ge,ae=ge,oe=new Map;for(ge=ae;ge<=b;ge++){const Ge=F[ge]=de?nr(F[ge]):fi(F[ge]);Ge.key!=null&&oe.set(Ge.key,ge)}let ue,Ne=0;const Me=b-ae+1;let Re=!1,O=0;const Ee=new Array(Me);for(ge=0;ge<Me;ge++)Ee[ge]=0;for(ge=V;ge<=T;ge++){const Ge=M[ge];if(Ne>=Me){ne(Ge,Q,ce,!0);continue}let Fe;if(Ge.key!=null)Fe=oe.get(Ge.key);else for(ue=ae;ue<=b;ue++)if(Ee[ue-ae]===0&&fa(Ge,F[ue])){Fe=ue;break}Fe===void 0?ne(Ge,Q,ce,!0):(Ee[Fe-ae]=ge+1,Fe>=O?O=Fe:Re=!0,v(Ge,F[Fe],W,null,Q,ce,pe,le,de),Ne++)}const xe=Re?cy(Ee):Ns;for(ue=xe.length-1,ge=Me-1;ge>=0;ge--){const Ge=ae+ge,Fe=F[Ge],Xe=Ge+1<Oe?F[Ge+1].el:te;Ee[ge]===0?v(null,Fe,W,Xe,Q,ce,pe,le,de):Re&&(ue<0||ge!==xe[ue]?X(Fe,W,Xe,2):ue--)}}},X=(M,F,W,te,Q=null)=>{const{el:ce,type:pe,transition:le,children:de,shapeFlag:ge}=M;if(ge&6){X(M.component.subTree,F,W,te);return}if(ge&128){M.suspense.move(F,W,te);return}if(ge&64){pe.move(M,F,W,Bt);return}if(pe===Pn){i(ce,F,W);for(let T=0;T<de.length;T++)X(de[T],F,W,te);i(M.anchor,F,W);return}if(pe===Fo){S(M,F,W);return}if(te!==2&&ge&1&&le)if(te===0)le.beforeEnter(ce),i(ce,F,W),Bn(()=>le.enter(ce),Q);else{const{leave:T,delayLeave:b,afterLeave:V}=le,ae=()=>i(ce,F,W),oe=()=>{T(ce,()=>{ae(),V&&V()})};b?b(ce,ae,oe):oe()}else i(ce,F,W)},ne=(M,F,W,te=!1,Q=!1)=>{const{type:ce,props:pe,ref:le,children:de,dynamicChildren:ge,shapeFlag:Oe,patchFlag:T,dirs:b,cacheIndex:V}=M;if(T===-2&&(Q=!1),le!=null&&$o(le,null,W,M,!0),V!=null&&(F.renderCache[V]=void 0),Oe&256){F.ctx.deactivate(M);return}const ae=Oe&1&&b,oe=!Bs(M);let ue;if(oe&&(ue=pe&&pe.onVnodeBeforeUnmount)&&ui(ue,F,M),Oe&6)Be(M.component,W,te);else{if(Oe&128){M.suspense.unmount(W,te);return}ae&&Tr(M,null,F,"beforeUnmount"),Oe&64?M.type.remove(M,F,W,Bt,te):ge&&!ge.hasOnce&&(ce!==Pn||T>0&&T&64)?je(ge,F,W,!1,!0):(ce===Pn&&T&384||!Q&&Oe&16)&&je(de,F,W),te&&Ae(M)}(oe&&(ue=pe&&pe.onVnodeUnmounted)||ae)&&Bn(()=>{ue&&ui(ue,F,M),ae&&Tr(M,null,F,"unmounted")},W)},Ae=M=>{const{type:F,el:W,anchor:te,transition:Q}=M;if(F===Pn){Pe(W,te);return}if(F===Fo){A(M);return}const ce=()=>{r(W),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(M.shapeFlag&1&&Q&&!Q.persisted){const{leave:pe,delayLeave:le}=Q,de=()=>pe(W,ce);le?le(M.el,ce,de):de()}else ce()},Pe=(M,F)=>{let W;for(;M!==F;)W=f(M),r(M),M=W;r(F)},Be=(M,F,W)=>{const{bum:te,scope:Q,job:ce,subTree:pe,um:le,m:de,a:ge}=M;df(de),df(ge),te&&Kl(te),Q.stop(),ce&&(ce.flags|=8,ne(pe,M,F,W)),le&&Bn(le,F),Bn(()=>{M.isUnmounted=!0},F),F&&F.pendingBranch&&!F.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===F.pendingId&&(F.deps--,F.deps===0&&F.resolve())},je=(M,F,W,te=!1,Q=!1,ce=0)=>{for(let pe=ce;pe<M.length;pe++)ne(M[pe],F,W,te,Q)},Ye=M=>{if(M.shapeFlag&6)return Ye(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const F=f(M.anchor||M.el),W=F&&F[Lx];return W?f(W):F};let $e=!1;const ut=(M,F,W)=>{M==null?F._vnode&&ne(F._vnode,null,null,!0):v(F._vnode||null,M,F,null,null,null,W),F._vnode=M,$e||($e=!0,of(),rm(),$e=!1)},Bt={p:v,um:ne,m:X,r:Ae,mt:k,mc:H,pc:fe,pbc:L,n:Ye,o:n};return{render:ut,hydrate:void 0,createApp:Jx(ut)}}function ic({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ar({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ly(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Tm(n,e,t=!1){const i=n.children,r=e.children;if(rt(i)&&rt(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=nr(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Tm(a,o)),o.type===dl&&(o.el=a.el)}}function cy(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Am(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Am(e)}function df(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const uy=Symbol.for("v-scx"),hy=()=>Oo(uy);function rc(n,e,t){return wm(n,e,t)}function wm(n,e,t=Nt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Rn({},t),l=e&&i||!e&&s!=="post";let c;if(Oa){if(s==="sync"){const m=hy();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=gi,m.resume=gi,m.pause=gi,m}}const u=An;o.call=(m,x,v)=>vi(m,u,x,v);let h=!1;s==="post"?o.scheduler=m=>{Bn(m,u&&u.suspense)}:s!=="sync"&&(h=!0,o.scheduler=(m,x)=>{x?m():Ru(m)}),o.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=Ex(n,e,o);return Oa&&(c?c.push(f):l&&f()),f}function fy(n,e,t){const i=this.proxy,r=Zt(n)?n.includes(".")?Rm(i,n):()=>i[n]:n.bind(i,i);let s;at(e)?s=e:(s=e.handler,t=e);const a=Ha(this),o=wm(r,s.bind(i),t);return a(),o}function Rm(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const dy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${fr(e)}Modifiers`]||n[`${qr(e)}Modifiers`];function py(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Nt;let r=t;const s=e.startsWith("update:"),a=s&&dy(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Zt(u)?u.trim():u)),a.number&&(r=t.map(Wv)));let o,l=i[o=Yl(e)]||i[o=Yl(fr(e))];!l&&s&&(l=i[o=Yl(qr(e))]),l&&vi(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,vi(c,n,6,r)}}function Cm(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!at(n)){const l=c=>{const u=Cm(c,e,!0);u&&(o=!0,Rn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Wt(n)&&i.set(n,null),null):(rt(s)?s.forEach(l=>a[l]=null):Rn(a,s),Wt(n)&&i.set(n,a),a)}function fl(n,e){return!n||!sl(e)?!1:(e=e.slice(2).replace(/Once$/,""),At(n,e[0].toLowerCase()+e.slice(1))||At(n,qr(e))||At(n,e))}function pf(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:x,inheritAttrs:v}=n,g=jo(n);let p,w;try{if(t.shapeFlag&4){const A=r||i,P=A;p=fi(c.call(P,A,u,h,m,f,x)),w=o}else{const A=e;p=fi(A.length>1?A(h,{attrs:o,slots:a,emit:l}):A(h,null)),w=e.props?o:my(o)}}catch(A){Ra.length=0,ul(A,n,1),p=$t(dr)}let S=p;if(w&&v!==!1){const A=Object.keys(w),{shapeFlag:P}=S;A.length&&P&7&&(s&&A.some(_u)&&(w=gy(w,s)),S=Ws(S,w,!1,!0))}return t.dirs&&(S=Ws(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Lu(S,t.transition),p=S,jo(g),p}const my=n=>{let e;for(const t in n)(t==="class"||t==="style"||sl(t))&&((e||(e={}))[t]=n[t]);return e},gy=(n,e)=>{const t={};for(const i in n)(!_u(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function _y(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?mf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==i[f]&&!fl(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?mf(i,a,c):!0:!!a;return!1}function mf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!fl(t,s))return!0}return!1}function vy({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Lm=n=>n.__isSuspense;function xy(n,e){e&&e.pendingBranch?rt(n)?e.effects.push(...n):e.effects.push(n):Rx(n)}const Pn=Symbol.for("v-fgt"),dl=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),Ra=[];let zn=null;function Lt(n=!1){Ra.push(zn=n?null:[])}function yy(){Ra.pop(),zn=Ra[Ra.length-1]||null}let Ua=1;function gf(n,e=!1){Ua+=n,n<0&&zn&&e&&(zn.hasOnce=!0)}function Pm(n){return n.dynamicChildren=Ua>0?zn||Ns:null,yy(),Ua>0&&zn&&zn.push(n),n}function qt(n,e,t,i,r,s){return Pm(_t(n,e,t,i,r,s,!0))}function pr(n,e,t,i,r){return Pm($t(n,e,t,i,r,!0))}function Du(n){return n?n.__v_isVNode===!0:!1}function fa(n,e){return n.type===e.type&&n.key===e.key}const Im=({key:n})=>n??null,Bo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Zt(n)||yn(n)||at(n)?{i:xn,r:n,k:e,f:!!t}:n:null);function _t(n,e=null,t=null,i=0,r=null,s=n===Pn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Im(e),ref:e&&Bo(e),scopeId:am,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:xn};return o?(Nu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Zt(t)?8:16),Ua>0&&!a&&zn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&zn.push(l),l}const $t=by;function by(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Vx)&&(n=dr),Du(n)){const o=Ws(n,e,!0);return t&&Nu(o,t),Ua>0&&!s&&zn&&(o.shapeFlag&6?zn[zn.indexOf(n)]=o:zn.push(o)),o.patchFlag=-2,o}if(Iy(n)&&(n=n.__vccOpts),e){e=My(e);let{class:o,style:l}=e;o&&!Zt(o)&&(e.class=oi(o)),Wt(l)&&(wu(l)&&!rt(l)&&(l=Rn({},l)),e.style=Gr(l))}const a=Zt(n)?1:Lm(n)?128:Px(n)?64:Wt(n)?4:at(n)?2:0;return _t(n,e,t,i,r,a,s,!0)}function My(n){return n?wu(n)||vm(n)?Rn({},n):n:null}function Ws(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Ey(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Im(c),ref:e&&e.ref?t&&s?rt(s)?s.concat(Bo(e)):[s,Bo(e)]:Bo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Pn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ws(n.ssContent),ssFallback:n.ssFallback&&Ws(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Lu(u,l.clone(u)),u}function ko(n=" ",e=0){return $t(dl,null,n,e)}function Sy(n,e){const t=$t(Fo,null,n);return t.staticCount=e,t}function Yr(n="",e=!1){return e?(Lt(),pr(dr,null,n)):$t(dr,null,n)}function fi(n){return n==null||typeof n=="boolean"?$t(dr):rt(n)?$t(Pn,null,n.slice()):Du(n)?nr(n):$t(dl,null,String(n))}function nr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ws(n)}function Nu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(rt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Nu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!vm(e)?e._ctx=xn:r===3&&xn&&(xn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else at(e)?(e={default:e,_ctx:xn},t=32):(e=String(e),i&64?(t=16,e=[ko(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ey(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=oi([e.class,i.class]));else if(r==="style")e.style=Gr([e.style,i.style]);else if(sl(r)){const s=e[r],a=i[r];a&&s!==a&&!(rt(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function ui(n,e,t,i=null){vi(n,e,7,[t,i])}const Ty=mm();let Ay=0;function wy(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ty,s={uid:Ay++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ym(i,r),emitsOptions:Cm(i,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:i.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=py.bind(null,s),n.ce&&n.ce(s),s}let An=null,Yo,Qc;{const n=ll(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Yo=e("__VUE_INSTANCE_SETTERS__",t=>An=t),Qc=e("__VUE_SSR_SETTERS__",t=>Oa=t)}const Ha=n=>{const e=An;return Yo(n),n.scope.on(),()=>{n.scope.off(),Yo(e)}},_f=()=>{An&&An.scope.off(),Yo(null)};function Dm(n){return n.vnode.shapeFlag&4}let Oa=!1;function Ry(n,e=!1,t=!1){e&&Qc(e);const{props:i,children:r}=n.vnode,s=Dm(n);ey(n,i,s,e),ry(n,r,t);const a=s?Cy(n,e):void 0;return e&&Qc(!1),a}function Cy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xx);const{setup:i}=t;if(i){gr();const r=n.setupContext=i.length>1?Py(n):null,s=Ha(n),a=ka(i,n,0,[n.props,r]),o=Pp(a);if(_r(),s(),(o||n.sp)&&!Bs(n)&&om(n),o){if(a.then(_f,_f),e)return a.then(l=>{vf(n,l)}).catch(l=>{ul(l,n,0)});n.asyncDep=a}else vf(n,a)}else Nm(n)}function vf(n,e,t){at(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Wt(e)&&(n.setupState=tm(e)),Nm(n)}function Nm(n,e,t){const i=n.type;n.render||(n.render=i.render||gi);{const r=Ha(n);gr();try{jx(n)}finally{_r(),r()}}}const Ly={get(n,e){return _n(n,"get",""),n[e]}};function Py(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ly),slots:n.slots,emit:n.emit,expose:e}}function pl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(tm(vx(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in wa)return wa[t](n)},has(e,t){return t in e||t in wa}})):n.proxy}function Iy(n){return at(n)&&"__vccOpts"in n}const za=(n,e)=>Mx(n,e,Oa),Dy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let eu;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{eu=xf.createPolicy("vue",{createHTML:n=>n})}catch{}const Um=eu?n=>eu.createHTML(n):n=>n,Ny="http://www.w3.org/2000/svg",Uy="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,yf=Oi&&Oi.createElement("template"),Oy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Oi.createElementNS(Ny,n):e==="mathml"?Oi.createElementNS(Uy,n):t?Oi.createElement(n,{is:t}):Oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Oi.createTextNode(n),createComment:n=>Oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yf.innerHTML=Um(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=yf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Fy=Symbol("_vtc");function By(n,e,t){const i=n[Fy];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ko=Symbol("_vod"),Om=Symbol("_vsh"),ky={beforeMount(n,{value:e},{transition:t}){n[Ko]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):da(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),da(n,!0),i.enter(n)):i.leave(n,()=>{da(n,!1)}):da(n,e))},beforeUnmount(n,{value:e}){da(n,e)}};function da(n,e){n.style.display=e?n[Ko]:"none",n[Om]=!e}const Hy=Symbol(""),zy=/(^|;)\s*display\s*:/;function Gy(n,e,t){const i=n.style,r=Zt(t);let s=!1;if(t&&!r){if(e)if(Zt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ho(i,o,"")}else for(const a in e)t[a]==null&&Ho(i,a,"");for(const a in t)a==="display"&&(s=!0),Ho(i,a,t[a])}else if(r){if(e!==t){const a=i[Hy];a&&(t+=";"+a),i.cssText=t,s=zy.test(t)}}else e&&n.removeAttribute("style");Ko in n&&(n[Ko]=s?i.display:"",n[Om]&&(i.display="none"))}const bf=/\s*!important$/;function Ho(n,e,t){if(rt(t))t.forEach(i=>Ho(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Vy(n,e);bf.test(t)?n.setProperty(qr(i),t.replace(bf,""),"important"):n[i]=t}}const Mf=["Webkit","Moz","ms"],sc={};function Vy(n,e){const t=sc[e];if(t)return t;let i=fr(e);if(i!=="filter"&&i in n)return sc[e]=i;i=Np(i);for(let r=0;r<Mf.length;r++){const s=Mf[r]+i;if(s in n)return sc[e]=s}return e}const Sf="http://www.w3.org/1999/xlink";function Ef(n,e,t,i,r,s=Kv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Sf,e.slice(6,e.length)):n.setAttributeNS(Sf,e,t):t==null||s&&!Op(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Vi(t)?String(t):t)}function Tf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Um(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Op(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Wy(n,e,t,i){n.addEventListener(e,t,i)}function Xy(n,e,t,i){n.removeEventListener(e,t,i)}const Af=Symbol("_vei");function jy(n,e,t,i,r=null){const s=n[Af]||(n[Af]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=$y(e);if(i){const c=s[e]=Ky(i,r);Wy(n,o,c,l)}else a&&(Xy(n,o,a,l),s[e]=void 0)}}const wf=/(?:Once|Passive|Capture)$/;function $y(n){let e;if(wf.test(n)){e={};let i;for(;i=n.match(wf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):qr(n.slice(2)),e]}let ac=0;const qy=Promise.resolve(),Yy=()=>ac||(qy.then(()=>ac=0),ac=Date.now());function Ky(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;vi(Zy(i,t.value),e,5,[i])};return t.value=n,t.attached=Yy(),t}function Zy(n,e){if(rt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Rf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jy=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?By(n,i,a):e==="style"?Gy(n,t,i):sl(e)?_u(e)||jy(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qy(n,e,i,a))?(Tf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ef(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Zt(i))?Tf(n,fr(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ef(n,e,i,a))};function Qy(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Rf(e)&&at(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Rf(e)&&Zt(t)?!1:e in n}const eb=Rn({patchProp:Jy},Oy);let Cf;function tb(){return Cf||(Cf=ay(eb))}const nb=(...n)=>{const e=tb().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=rb(i);if(!r)return;const s=e._component;!at(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,ib(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function ib(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function rb(n){return Zt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uu="157",us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sb=0,Lf=1,ab=2,Fm=1,ob=2,Ui=3,Gi=0,Dn=1,pi=2,lr=0,Hs=1,Pf=2,If=3,Df=4,lb=5,Ps=100,cb=101,ub=102,Nf=103,Uf=104,hb=200,fb=201,db=202,pb=203,Bm=204,km=205,mb=206,gb=207,_b=208,vb=209,xb=210,yb=0,bb=1,Mb=2,tu=3,Sb=4,Eb=5,Tb=6,Ab=7,Hm=0,wb=1,Rb=2,cr=0,Cb=1,Lb=2,Pb=3,Ib=4,Db=5,zm=300,Xs=301,js=302,Zo=303,nu=304,ml=306,$s=1e3,In=1001,Jo=1002,an=1003,iu=1004,zo=1005,Qt=1006,Gm=1007,mr=1008,ur=1009,Nb=1010,Ub=1011,Ou=1012,Vm=1013,sr=1014,$n=1015,Hi=1016,Wm=1017,Xm=1018,kr=1020,Ob=1021,Xn=1023,Fb=1024,Bb=1025,Hr=1026,qs=1027,kb=1028,jm=1029,Hb=1030,$m=1031,qm=1033,oc=33776,lc=33777,cc=33778,uc=33779,Of=35840,Ff=35841,Bf=35842,kf=35843,zb=36196,Hf=37492,zf=37496,Gf=37808,Vf=37809,Wf=37810,Xf=37811,jf=37812,$f=37813,qf=37814,Yf=37815,Kf=37816,Zf=37817,Jf=37818,Qf=37819,ed=37820,td=37821,hc=36492,nd=36494,id=36495,Gb=36283,rd=36284,sd=36285,ad=36286,Fa=2300,Ys=2301,fc=2302,od=2400,ld=2401,cd=2402,Vb=2500,Wb=0,Ym=1,ru=2,Km=3e3,zr=3001,Xb=3200,jb=3201,Zm=0,$b=1,jn="",jt="srgb",ln="srgb-linear",Fu="display-p3",gl="display-p3-linear",Qo="linear",kt="srgb",el="rec709",tl="p3",dc=7680,qb=519,Yb=512,Kb=513,Zb=514,Jb=515,Qb=516,eM=517,tM=518,nM=519,su=35044,ud="300 es",au=1035,zi=2e3,nl=2001;class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hd=1234567;const Ca=Math.PI/180,Ks=180/Math.PI;function si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function on(n,e,t){return Math.max(e,Math.min(t,n))}function Bu(n,e){return(n%e+e)%e}function iM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function rM(n,e,t){return n!==e?(t-n)/(e-n):0}function La(n,e,t){return(1-t)*n+t*e}function sM(n,e,t,i){return La(n,e,1-Math.exp(-t*i))}function aM(n,e=1){return e-Math.abs(Bu(n,e*2)-e)}function oM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function uM(n,e){return n+Math.random()*(e-n)}function hM(n){return n*(.5-Math.random())}function fM(n){n!==void 0&&(hd=n);let e=hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dM(n){return n*Ca}function pM(n){return n*Ks}function ou(n){return(n&n-1)===0&&n!==0}function Jm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function il(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mM(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wr={DEG2RAD:Ca,RAD2DEG:Ks,generateUUID:si,clamp:on,euclideanModulo:Bu,mapLinear:iM,inverseLerp:rM,lerp:La,damp:sM,pingpong:aM,smoothstep:oM,smootherstep:lM,randInt:cM,randFloat:uM,randFloatSpread:hM,seededRandom:fM,degToRad:dM,radToDeg:pM,isPowerOfTwo:ou,ceilPowerOfTwo:Jm,floorPowerOfTwo:il,setQuaternionFromProperEuler:mM,normalize:Pt,denormalize:mi};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,r,s,a,o,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],x=i[8],v=r[0],g=r[3],p=r[6],w=r[1],S=r[4],A=r[7],P=r[2],D=r[5],I=r[8];return s[0]=a*v+o*w+l*P,s[3]=a*g+o*S+l*D,s[6]=a*p+o*A+l*I,s[1]=c*v+u*w+h*P,s[4]=c*g+u*S+h*D,s[7]=c*p+u*A+h*I,s[2]=f*v+m*w+x*P,s[5]=f*g+m*S+x*D,s[8]=f*p+m*A+x*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,x=t*h+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new pt;function Qm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gM(){const n=Ba("canvas");return n.style.display="block",n}const fd={};function Pa(n){n in fd||(fd[n]=!0,console.warn(n))}const dd=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pd=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[ln]:{transfer:Qo,primaries:el,toReference:n=>n,fromReference:n=>n},[jt]:{transfer:kt,primaries:el,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[gl]:{transfer:Qo,primaries:tl,toReference:n=>n.applyMatrix3(pd),fromReference:n=>n.applyMatrix3(dd)},[Fu]:{transfer:kt,primaries:tl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(pd),fromReference:n=>n.applyMatrix3(dd).convertLinearToSRGB()}},_M=new Set([ln,gl]),wt={enabled:!0,_workingColorSpace:ln,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_M.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=oo[e].toReference,r=oo[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return oo[n].primaries},getTransfer:function(n){return n===jn?Qo:oo[n].transfer}};function zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fs;class eg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=Ba("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zs(t[i]/255)*255):t[i]=zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vM=0;class tg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(gc(r[a].image)):s.push(gc(r[a]))}else s=gc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xM=0;class pn extends Kr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,i=In,r=In,s=Qt,a=mr,o=Xn,l=ur,c=pn.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=si(),this.name="",this.source=new tg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===zr?jt:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?zr:Km}set encoding(e){Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zr?jt:jn}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=zm;pn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,A=(m+1)/2,P=(p+1)/2,D=(u+f)/4,I=(h+v)/4,H=(x+g)/4;return S>A&&S>P?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=D/i,s=I/i):A>P?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=D/r,s=H/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=I/s,r=H/s),this.set(i,r,s,t),this}let w=Math.sqrt((g-x)*(g-x)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-x)/w,this.y=(h-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Kr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zr?jt:jn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends yM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ng extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bM extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(h!==v||l!==f||c!==m||u!==x){let g=1-o;const p=l*f+c*m+u*x+h*v,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),D=Math.atan2(P,p*w);g=Math.sin(g*D)/P,o=Math.sin(o*D)/P}const A=o*w;if(l=l*g+f*A,c=c*g+m*A,u=u*g+x*A,h=h*g+v*A,g===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*m-c*f,e[t+1]=l*x+u*f+c*h-o*m,e[t+2]=c*x+u*m+o*f-l*h,e[t+3]=u*x-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(md.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,h=l*r+s*i-a*t,f=-s*t-a*i-o*r;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new z,md=new xi;class bi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox),ds.applyMatrix4(e.matrixWorld),this.union(ds);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Ci.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ci)}else r.boundingBox===null&&r.computeBoundingBox(),ds.copy(r.boundingBox),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),lo.subVectors(this.max,pa),ps.subVectors(e.a,pa),ms.subVectors(e.b,pa),gs.subVectors(e.c,pa),Yi.subVectors(ms,ps),Ki.subVectors(gs,ms),wr.subVectors(ps,gs);let t=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-wr.z,wr.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,wr.z,0,-wr.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-wr.y,wr.x,0];return!vc(t,ps,ms,gs,lo)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,ps,ms,gs,lo))?!1:(co.crossVectors(Yi,Ki),t=[co.x,co.y,co.z],vc(t,ps,ms,gs,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new z,new z,new z,new z,new z,new z,new z,new z],Ci=new z,ds=new bi,ps=new z,ms=new z,gs=new z,Yi=new z,Ki=new z,wr=new z,pa=new z,lo=new z,co=new z,Rr=new z;function vc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Rr.fromArray(n,s);const o=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),c=t.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const MM=new bi,ma=new z,xc=new z;class Mi{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):MM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(xc)),this.expandByPoint(ma.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new z,yc=new z,uo=new z,Zi=new z,bc=new z,ho=new z,Mc=new z;class ta{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yc.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(yc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(uo),o=Zi.dot(this.direction),l=-Zi.dot(uo),c=Zi.lengthSq(),u=Math.abs(1-a*a);let h,f,m,x;if(u>0)if(h=a*l-o,f=a*o-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const v=1/u;h*=v,f*=v,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yc).addScaledVector(uo,f),m}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,s){bc.subVectors(t,e),ho.subVectors(i,e),Mc.crossVectors(bc,ho);let a=this.direction.dot(Mc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);const l=o*this.direction.dot(ho.crossVectors(Zi,ho));if(l<0)return null;const c=o*this.direction.dot(bc.cross(Zi));if(c<0||l+c>a)return null;const u=-o*Zi.dot(Mc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,l,c,u,h,f,m,x,v,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,f,m,x,v,g)}set(e,t,i,r,s,a,o,l,c,u,h,f,m,x,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=x,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,x=c*u,v=c*h;t[0]=f+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,x=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=x*c-m,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=x*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+x,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SM,e,EM)}lookAt(e,t,i){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Ji.crossVectors(i,On),Ji.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Ji.crossVectors(i,On)),Ji.normalize(),fo.crossVectors(On,Ji),r[0]=Ji.x,r[4]=fo.x,r[8]=On.x,r[1]=Ji.y,r[5]=fo.y,r[9]=On.y,r[2]=Ji.z,r[6]=fo.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],x=i[2],v=i[6],g=i[10],p=i[14],w=i[3],S=i[7],A=i[11],P=i[15],D=r[0],I=r[4],H=r[8],E=r[12],L=r[1],Z=r[5],me=r[9],_e=r[13],k=r[2],Y=r[6],ee=r[10],J=r[14],fe=r[3],se=r[7],ve=r[11],X=r[15];return s[0]=a*D+o*L+l*k+c*fe,s[4]=a*I+o*Z+l*Y+c*se,s[8]=a*H+o*me+l*ee+c*ve,s[12]=a*E+o*_e+l*J+c*X,s[1]=u*D+h*L+f*k+m*fe,s[5]=u*I+h*Z+f*Y+m*se,s[9]=u*H+h*me+f*ee+m*ve,s[13]=u*E+h*_e+f*J+m*X,s[2]=x*D+v*L+g*k+p*fe,s[6]=x*I+v*Z+g*Y+p*se,s[10]=x*H+v*me+g*ee+p*ve,s[14]=x*E+v*_e+g*J+p*X,s[3]=w*D+S*L+A*k+P*fe,s[7]=w*I+S*Z+A*Y+P*se,s[11]=w*H+S*me+A*ee+P*ve,s[15]=w*E+S*_e+A*J+P*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],x=e[3],v=e[7],g=e[11],p=e[15];return x*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+v*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+g*(+t*c*h-t*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],x=e[12],v=e[13],g=e[14],p=e[15],w=h*g*c-v*f*c+v*l*m-o*g*m-h*l*p+o*f*p,S=x*f*c-u*g*c-x*l*m+a*g*m+u*l*p-a*f*p,A=u*v*c-x*h*c+x*o*m-a*v*m-u*o*p+a*h*p,P=x*h*l-u*v*l-x*o*f+a*v*f+u*o*g-a*h*g,D=t*w+i*S+r*A+s*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=w*I,e[1]=(v*f*s-h*g*s-v*r*m+i*g*m+h*r*p-i*f*p)*I,e[2]=(o*g*s-v*l*s+v*r*c-i*g*c-o*r*p+i*l*p)*I,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*I,e[4]=S*I,e[5]=(u*g*s-x*f*s+x*r*m-t*g*m-u*r*p+t*f*p)*I,e[6]=(x*l*s-a*g*s-x*r*c+t*g*c+a*r*p-t*l*p)*I,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*m+t*l*m)*I,e[8]=A*I,e[9]=(x*h*s-u*v*s-x*i*m+t*v*m+u*i*p-t*h*p)*I,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*p+t*o*p)*I,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*m-t*o*m)*I,e[12]=P*I,e[13]=(u*v*r-x*h*r+x*i*f-t*v*f-u*i*g+t*h*g)*I,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*g-t*o*g)*I,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*f+t*o*f)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,x=s*h,v=a*u,g=a*h,p=o*h,w=l*c,S=l*u,A=l*h,P=i.x,D=i.y,I=i.z;return r[0]=(1-(v+p))*P,r[1]=(m+A)*P,r[2]=(x-S)*P,r[3]=0,r[4]=(m-A)*D,r[5]=(1-(f+p))*D,r[6]=(g+w)*D,r[7]=0,r[8]=(x+S)*I,r[9]=(g-w)*I,r[10]=(1-(f+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),o=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,u=1/a,h=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=zi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,x;if(o===zi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===nl)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=zi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*c,m=(i+r)*u;let x,v;if(o===zi)x=(a+s)*h,v=-2*h;else if(o===nl)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _s=new z,ti=new mt,SM=new z(0,0,0),EM=new z(1,1,1),Ji=new z,fo=new z,On=new z,gd=new mt,_d=new xi;class _l{constructor(e=0,t=0,i=0,r=_l.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _d.setFromEuler(this),this.setFromQuaternion(_d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_l.DEFAULT_ORDER="XYZ";class ku{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TM=0;const vd=new z,vs=new xi,Pi=new mt,po=new z,ga=new z,AM=new z,wM=new xi,xd=new z(1,0,0),yd=new z(0,1,0),bd=new z(0,0,1),RM={type:"added"},CM={type:"removed"};class Gt extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new z,t=new _l,i=new xi,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new pt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(yd,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(yd,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?po.copy(e):po.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ga,po,this.up):Pi.lookAt(po,ga,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Pi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(RM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(CM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,AM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,wM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new z,Ii=new z,Sc=new z,Di=new z,xs=new z,ys=new z,Md=new z,Ec=new z,Tc=new z,Ac=new z;let mo=!1;class ii{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ni.subVectors(e,t),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ni.subVectors(r,t),Ii.subVectors(i,t),Sc.subVectors(e,t);const a=ni.dot(ni),o=ni.dot(Ii),l=ni.dot(Sc),c=Ii.dot(Ii),u=Ii.dot(Sc),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,x=(a*u-o*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di),Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,t,i,r,s,a,o,l){return mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mo=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Di),l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l}static isFrontFacing(e,t,i,r){return ni.subVectors(i,t),Ii.subVectors(e,t),ni.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ni.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mo=!0),ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;xs.subVectors(r,i),ys.subVectors(s,i),Ec.subVectors(e,i);const l=xs.dot(Ec),c=ys.dot(Ec);if(l<=0&&c<=0)return t.copy(i);Tc.subVectors(e,r);const u=xs.dot(Tc),h=ys.dot(Tc);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(xs,a);Ac.subVectors(e,s);const m=xs.dot(Ac),x=ys.dot(Ac);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(ys,o);const g=u*x-m*h;if(g<=0&&h-u>=0&&m-x>=0)return Md.subVectors(s,r),o=(h-u)/(h-u+(m-x)),t.copy(r).addScaledVector(Md,o);const p=1/(g+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(xs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let LM=0;class _i extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Hs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bm,this.blendDst=km,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=tu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dc,this.stencilZFail=dc,this.stencilZPass=dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},go={h:0,s:0,l:0};function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=wt.workingColorSpace){if(e=Bu(e,1),t=on(t,0,1),i=on(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=wc(a,s,e+1/3),this.g=wc(a,s,e),this.b=wc(a,s,e-1/3)}return wt.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=ig[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return wt.fromWorkingColorSpace(gn.copy(this),e),Math.round(on(gn.r*255,0,255))*65536+Math.round(on(gn.g*255,0,255))*256+Math.round(on(gn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(gn.copy(this),t);const i=gn.r,r=gn.g,s=gn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=jt){wt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,i=gn.g,r=gn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(go);const i=La(Qi.h,go.h,t),r=La(Qi.s,go.s,t),s=La(Qi.l,go.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new ct;ct.NAMES=ig;class Or extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ki=PM();function PM(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function IM(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=on(n,-65504,65504),ki.floatView[0]=n;const e=ki.uint32View[0],t=e>>23&511;return ki.baseTable[t]+((e&8388607)>>ki.shiftTable[t])}function DM(n){const e=n>>10;return ki.uint32View[0]=ki.mantissaTable[ki.offsetTable[e]+(n&1023)]+ki.exponentTable[e],ki.floatView[0]}const _o={toHalfFloat:IM,fromHalfFloat:DM},Kt=new z,vo=new tt;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=su,this.updateRange={offset:0,count:-1},this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class rg extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sg extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ai extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let NM=0;const Vn=new mt,Rc=new Gt,bs=new z,Fn=new bi,_a=new bi,sn=new z;class li extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qm(e)?sg:rg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new pt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Fn.min,_a.min),Fn.expandByPoint(sn),sn.addVectors(Fn.max,_a.max),Fn.expandByPoint(sn)):(Fn.expandByPoint(_a.min),Fn.expandByPoint(_a.max))}Fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),sn.add(bs)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new z,u[L]=new z;const h=new z,f=new z,m=new z,x=new tt,v=new tt,g=new tt,p=new z,w=new z;function S(L,Z,me){h.fromArray(r,L*3),f.fromArray(r,Z*3),m.fromArray(r,me*3),x.fromArray(a,L*2),v.fromArray(a,Z*2),g.fromArray(a,me*2),f.sub(h),m.sub(h),v.sub(x),g.sub(x);const _e=1/(v.x*g.y-g.x*v.y);isFinite(_e)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(m,-v.y).multiplyScalar(_e),w.copy(m).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(_e),c[L].add(p),c[Z].add(p),c[me].add(p),u[L].add(w),u[Z].add(w),u[me].add(w))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let L=0,Z=A.length;L<Z;++L){const me=A[L],_e=me.start,k=me.count;for(let Y=_e,ee=_e+k;Y<ee;Y+=3)S(i[Y+0],i[Y+1],i[Y+2])}const P=new z,D=new z,I=new z,H=new z;function E(L){I.fromArray(s,L*3),H.copy(I);const Z=c[L];P.copy(Z),P.sub(I.multiplyScalar(I.dot(Z))).normalize(),D.crossVectors(H,Z);const _e=D.dot(u[L])<0?-1:1;l[L*4]=P.x,l[L*4+1]=P.y,l[L*4+2]=P.z,l[L*4+3]=_e}for(let L=0,Z=A.length;L<Z;++L){const me=A[L],_e=me.start,k=me.count;for(let Y=_e,ee=_e+k;Y<ee;Y+=3)E(i[Y+0]),E(i[Y+1]),E(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let p=0;p<u;p++)f[x++]=c[m++]}return new wn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sd=new mt,Cr=new ta,xo=new Mi,Ed=new z,Ms=new z,Ss=new z,Es=new z,Cc=new z,yo=new z,bo=new tt,Mo=new tt,So=new tt,Td=new z,Ad=new z,wd=new z,Eo=new z,To=new z;class qn extends Gt{constructor(e=new li,t=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Cc.fromBufferAttribute(h,e),a?yo.addScaledVector(Cc,u):yo.addScaledVector(Cc.sub(t),u))}t.add(yo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(xo.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(xo,Ed)===null||Cr.origin.distanceToSquared(Ed)>(e.far-e.near)**2))&&(Sd.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Sd),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){const g=f[x],p=a[g.materialIndex],w=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let A=w,P=S;A<P;A+=3){const D=o.getX(A),I=o.getX(A+1),H=o.getX(A+2);r=Ao(this,p,e,i,c,u,h,D,I,H),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=x,p=v;g<p;g+=3){const w=o.getX(g),S=o.getX(g+1),A=o.getX(g+2);r=Ao(this,a,e,i,c,u,h,w,S,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){const g=f[x],p=a[g.materialIndex],w=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let A=w,P=S;A<P;A+=3){const D=A,I=A+1,H=A+2;r=Ao(this,p,e,i,c,u,h,D,I,H),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=x,p=v;g<p;g+=3){const w=g,S=g+1,A=g+2;r=Ao(this,a,e,i,c,u,h,w,S,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function UM(n,e,t,i,r,s,a,o){let l;if(e.side===Dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Gi,o),l===null)return null;To.copy(o),To.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:n}}function Ao(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ms),n.getVertexPosition(l,Ss),n.getVertexPosition(c,Es);const u=UM(n,e,t,i,Ms,Ss,Es,Eo);if(u){r&&(bo.fromBufferAttribute(r,o),Mo.fromBufferAttribute(r,l),So.fromBufferAttribute(r,c),u.uv=ii.getInterpolation(Eo,Ms,Ss,Es,bo,Mo,So,new tt)),s&&(bo.fromBufferAttribute(s,o),Mo.fromBufferAttribute(s,l),So.fromBufferAttribute(s,c),u.uv1=ii.getInterpolation(Eo,Ms,Ss,Es,bo,Mo,So,new tt),u.uv2=u.uv1),a&&(Td.fromBufferAttribute(a,o),Ad.fromBufferAttribute(a,l),wd.fromBufferAttribute(a,c),u.normal=ii.getInterpolation(Eo,Ms,Ss,Es,Td,Ad,wd,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};ii.getNormal(Ms,Ss,Es,h.normal),u.face=h}return u}class Ga extends li{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(h,2));function x(v,g,p,w,S,A,P,D,I,H,E){const L=A/I,Z=P/H,me=A/2,_e=P/2,k=D/2,Y=I+1,ee=H+1;let J=0,fe=0;const se=new z;for(let ve=0;ve<ee;ve++){const X=ve*Z-_e;for(let ne=0;ne<Y;ne++){const Ae=ne*L-me;se[v]=Ae*w,se[g]=X*S,se[p]=k,c.push(se.x,se.y,se.z),se[v]=0,se[g]=0,se[p]=D>0?1:-1,u.push(se.x,se.y,se.z),h.push(ne/I),h.push(1-ve/H),J+=1}}for(let ve=0;ve<H;ve++)for(let X=0;X<I;X++){const ne=f+X+Y*ve,Ae=f+X+Y*(ve+1),Pe=f+(X+1)+Y*(ve+1),Be=f+(X+1)+Y*ve;l.push(ne,Ae,Be),l.push(Ae,Pe,Be),fe+=6}o.addGroup(m,fe,E),m+=fe,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function En(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const r in i)e[r]=i[r]}return e}function OM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ag(n){return n.getRenderTarget()===null?n.outputColorSpace:wt.workingColorSpace}const FM={clone:Zs,merge:En};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=kM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=OM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class og extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends og{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,As=1;class HM extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Ts,As,e,t);r.layers=this.layers,this.add(r);const s=new dn(Ts,As,e,t);s.layers=this.layers,this.add(s);const a=new dn(Ts,As,e,t);a.layers=this.layers,this.add(a);const o=new dn(Ts,As,e,t);o.layers=this.layers,this.add(o);const l=new dn(Ts,As,e,t);l.layers=this.layers,this.add(l);const c=new dn(Ts,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class lg extends pn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zM extends Xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zr?jt:jn),this.texture=new lg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),s=new jr({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:lr});s.uniforms.tEquirect.value=t;const a=new qn(r,s),o=t.minFilter;return t.minFilter===mr&&(t.minFilter=Qt),new HM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Lc=new z,GM=new z,VM=new pt;class ir{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Lc.subVectors(i,t).cross(GM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VM.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Mi,wo=new z;class Hu{constructor(e=new ir,t=new ir,i=new ir,r=new ir,s=new ir,a=new ir){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],x=r[9],v=r[10],g=r[11],p=r[12],w=r[13],S=r[14],A=r[15];if(i[0].setComponents(l-s,f-c,g-m,A-p).normalize(),i[1].setComponents(l+s,f+c,g+m,A+p).normalize(),i[2].setComponents(l+a,f+u,g+x,A+w).normalize(),i[3].setComponents(l-a,f-u,g-x,A-w).normalize(),i[4].setComponents(l-o,f-h,g-v,A-S).normalize(),t===zi)i[5].setComponents(l+o,f+h,g+v,A+S).normalize();else if(t===nl)i[5].setComponents(o,h,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cg(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,f),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;n.bindBuffer(h,c),m.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class zu extends li{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,m=[],x=[],v=[],g=[];for(let p=0;p<u;p++){const w=p*f-a;for(let S=0;S<c;S++){const A=S*h-s;x.push(A,-w,0),v.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const S=w+c*p,A=w+c*(p+1),P=w+1+c*(p+1),D=w+1+c*p;m.push(S,A,D),m.push(A,P,D)}this.setIndex(m),this.setAttribute("position",new ai(x,3)),this.setAttribute("normal",new ai(v,3)),this.setAttribute("uv",new ai(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,$M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nS=`#ifdef USE_IRIDESCENCE
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
#endif`,iS=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fS=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,dS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,pS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xS="gl_FragColor = linearToOutputTexel( gl_FragColor );",yS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,AS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LS=`#ifdef USE_GRADIENTMAP
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
}`,PS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,IS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,US=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,OS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,GS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QS=`#if defined( USE_POINTS_UV )
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
#endif`,eE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hE=`#ifdef USE_NORMALMAP
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
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,YE=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,KE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ZE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,iT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,sT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,aT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,oT=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,hT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,dT=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,mT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gT=`uniform float size;
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
}`,_T=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,xT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,bT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lt={alphahash_fragment:XM,alphahash_pars_fragment:jM,alphamap_fragment:$M,alphamap_pars_fragment:qM,alphatest_fragment:YM,alphatest_pars_fragment:KM,aomap_fragment:ZM,aomap_pars_fragment:JM,begin_vertex:QM,beginnormal_vertex:eS,bsdfs:tS,iridescence_fragment:nS,bumpmap_pars_fragment:iS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:sS,clipping_planes_pars_vertex:aS,clipping_planes_vertex:oS,color_fragment:lS,color_pars_fragment:cS,color_pars_vertex:uS,color_vertex:hS,common:fS,cube_uv_reflection_fragment:dS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:_S,emissivemap_pars_fragment:vS,colorspace_fragment:xS,colorspace_pars_fragment:yS,envmap_fragment:bS,envmap_common_pars_fragment:MS,envmap_pars_fragment:SS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:OS,envmap_vertex:TS,fog_vertex:AS,fog_pars_vertex:wS,fog_fragment:RS,fog_pars_fragment:CS,gradientmap_pars_fragment:LS,lightmap_fragment:PS,lightmap_pars_fragment:IS,lights_lambert_fragment:DS,lights_lambert_pars_fragment:NS,lights_pars_begin:US,lights_toon_fragment:FS,lights_toon_pars_fragment:BS,lights_phong_fragment:kS,lights_phong_pars_fragment:HS,lights_physical_fragment:zS,lights_physical_pars_fragment:GS,lights_fragment_begin:VS,lights_fragment_maps:WS,lights_fragment_end:XS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:YS,map_fragment:KS,map_pars_fragment:ZS,map_particle_fragment:JS,map_particle_pars_fragment:QS,metalnessmap_fragment:eE,metalnessmap_pars_fragment:tE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:rE,morphtarget_vertex:sE,normal_fragment_begin:aE,normal_fragment_maps:oE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:uE,normalmap_pars_fragment:hE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:_E,premultiplied_alpha_fragment:vE,project_vertex:xE,dithering_fragment:yE,dithering_pars_fragment:bE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:AE,shadowmask_pars_fragment:wE,skinbase_vertex:RE,skinning_pars_vertex:CE,skinning_vertex:LE,skinnormal_vertex:PE,specularmap_fragment:IE,specularmap_pars_fragment:DE,tonemapping_fragment:NE,tonemapping_pars_fragment:UE,transmission_fragment:OE,transmission_pars_fragment:FE,uv_pars_fragment:BE,uv_pars_vertex:kE,uv_vertex:HE,worldpos_vertex:zE,background_vert:GE,background_frag:VE,backgroundCube_vert:WE,backgroundCube_frag:XE,cube_vert:jE,cube_frag:$E,depth_vert:qE,depth_frag:YE,distanceRGBA_vert:KE,distanceRGBA_frag:ZE,equirect_vert:JE,equirect_frag:QE,linedashed_vert:eT,linedashed_frag:tT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:rT,meshlambert_frag:sT,meshmatcap_vert:aT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:uT,meshphong_frag:hT,meshphysical_vert:fT,meshphysical_frag:dT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:_T,shadow_vert:vT,shadow_frag:xT,sprite_vert:yT,sprite_frag:bT},De={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},di={basic:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ct(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:En([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:En([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ct(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:En([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:En([De.points,De.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:En([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:En([De.common,De.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:En([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:En([De.sprite,De.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:En([De.common,De.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:En([De.lights,De.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};di.physical={uniforms:En([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ro={r:0,b:0,g:0};function MT(n,e,t,i,r,s,a){const o=new ct(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function x(g,p){let w=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=(p.backgroundBlurriness>0?t:e).get(S)),S===null?v(o,l):S&&S.isColor&&(v(S,1),w=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ml)?(u===void 0&&(u=new qn(new Ga(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:Zs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=wt.getTransfer(S.colorSpace)!==kt,(h!==S||f!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,m=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new qn(new zu(2,2),new jr({name:"BackgroundMaterial",uniforms:Zs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=wt.getTransfer(S.colorSpace)!==kt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(Ro,ag(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:x}}function ST(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l,u=!1;function h(k,Y,ee,J,fe){let se=!1;if(a){const ve=v(J,ee,Y);c!==ve&&(c=ve,m(c.object)),se=p(k,J,ee,fe),se&&w(k,J,ee,fe)}else{const ve=Y.wireframe===!0;(c.geometry!==J.id||c.program!==ee.id||c.wireframe!==ve)&&(c.geometry=J.id,c.program=ee.id,c.wireframe=ve,se=!0)}fe!==null&&t.update(fe,n.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,H(k,Y,ee,J),fe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(fe).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function x(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function v(k,Y,ee){const J=ee.wireframe===!0;let fe=o[k.id];fe===void 0&&(fe={},o[k.id]=fe);let se=fe[Y.id];se===void 0&&(se={},fe[Y.id]=se);let ve=se[J];return ve===void 0&&(ve=g(f()),se[J]=ve),ve}function g(k){const Y=[],ee=[],J=[];for(let fe=0;fe<r;fe++)Y[fe]=0,ee[fe]=0,J[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ee,attributeDivisors:J,object:k,attributes:{},index:null}}function p(k,Y,ee,J){const fe=c.attributes,se=Y.attributes;let ve=0;const X=ee.getAttributes();for(const ne in X)if(X[ne].location>=0){const Pe=fe[ne];let Be=se[ne];if(Be===void 0&&(ne==="instanceMatrix"&&k.instanceMatrix&&(Be=k.instanceMatrix),ne==="instanceColor"&&k.instanceColor&&(Be=k.instanceColor)),Pe===void 0||Pe.attribute!==Be||Be&&Pe.data!==Be.data)return!0;ve++}return c.attributesNum!==ve||c.index!==J}function w(k,Y,ee,J){const fe={},se=Y.attributes;let ve=0;const X=ee.getAttributes();for(const ne in X)if(X[ne].location>=0){let Pe=se[ne];Pe===void 0&&(ne==="instanceMatrix"&&k.instanceMatrix&&(Pe=k.instanceMatrix),ne==="instanceColor"&&k.instanceColor&&(Pe=k.instanceColor));const Be={};Be.attribute=Pe,Pe&&Pe.data&&(Be.data=Pe.data),fe[ne]=Be,ve++}c.attributes=fe,c.attributesNum=ve,c.index=J}function S(){const k=c.newAttributes;for(let Y=0,ee=k.length;Y<ee;Y++)k[Y]=0}function A(k){P(k,0)}function P(k,Y){const ee=c.newAttributes,J=c.enabledAttributes,fe=c.attributeDivisors;ee[k]=1,J[k]===0&&(n.enableVertexAttribArray(k),J[k]=1),fe[k]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),fe[k]=Y)}function D(){const k=c.newAttributes,Y=c.enabledAttributes;for(let ee=0,J=Y.length;ee<J;ee++)Y[ee]!==k[ee]&&(n.disableVertexAttribArray(ee),Y[ee]=0)}function I(k,Y,ee,J,fe,se,ve){ve===!0?n.vertexAttribIPointer(k,Y,ee,fe,se):n.vertexAttribPointer(k,Y,ee,J,fe,se)}function H(k,Y,ee,J){if(i.isWebGL2===!1&&(k.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const fe=J.attributes,se=ee.getAttributes(),ve=Y.defaultAttributeValues;for(const X in se){const ne=se[X];if(ne.location>=0){let Ae=fe[X];if(Ae===void 0&&(X==="instanceMatrix"&&k.instanceMatrix&&(Ae=k.instanceMatrix),X==="instanceColor"&&k.instanceColor&&(Ae=k.instanceColor)),Ae!==void 0){const Pe=Ae.normalized,Be=Ae.itemSize,je=t.get(Ae);if(je===void 0)continue;const Ye=je.buffer,$e=je.type,ut=je.bytesPerElement,Bt=i.isWebGL2===!0&&($e===n.INT||$e===n.UNSIGNED_INT||Ae.gpuType===Vm);if(Ae.isInterleavedBufferAttribute){const nt=Ae.data,M=nt.stride,F=Ae.offset;if(nt.isInstancedInterleavedBuffer){for(let W=0;W<ne.locationSize;W++)P(ne.location+W,nt.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let W=0;W<ne.locationSize;W++)A(ne.location+W);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let W=0;W<ne.locationSize;W++)I(ne.location+W,Be/ne.locationSize,$e,Pe,M*ut,(F+Be/ne.locationSize*W)*ut,Bt)}else{if(Ae.isInstancedBufferAttribute){for(let nt=0;nt<ne.locationSize;nt++)P(ne.location+nt,Ae.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let nt=0;nt<ne.locationSize;nt++)A(ne.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let nt=0;nt<ne.locationSize;nt++)I(ne.location+nt,Be/ne.locationSize,$e,Pe,Be*ut,Be/ne.locationSize*nt*ut,Bt)}}else if(ve!==void 0){const Pe=ve[X];if(Pe!==void 0)switch(Pe.length){case 2:n.vertexAttrib2fv(ne.location,Pe);break;case 3:n.vertexAttrib3fv(ne.location,Pe);break;case 4:n.vertexAttrib4fv(ne.location,Pe);break;default:n.vertexAttrib1fv(ne.location,Pe)}}}}D()}function E(){me();for(const k in o){const Y=o[k];for(const ee in Y){const J=Y[ee];for(const fe in J)x(J[fe].object),delete J[fe];delete Y[ee]}delete o[k]}}function L(k){if(o[k.id]===void 0)return;const Y=o[k.id];for(const ee in Y){const J=Y[ee];for(const fe in J)x(J[fe].object),delete J[fe];delete Y[ee]}delete o[k.id]}function Z(k){for(const Y in o){const ee=o[Y];if(ee[k.id]===void 0)continue;const J=ee[k.id];for(const fe in J)x(J[fe].object),delete J[fe];delete ee[k.id]}}function me(){_e(),u=!0,c!==l&&(c=l,m(c.object))}function _e(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:me,resetDefaultState:_e,dispose:E,releaseStatesOfGeometry:L,releaseStatesOfProgram:Z,initAttributes:S,enableAttribute:A,disableUnusedAttributes:D}}function ET(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function TT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,A=a||e.has("OES_texture_float"),P=S&&A,D=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:S,floatFragmentTextures:A,floatVertexTextures:P,maxSamples:D}}function AT(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ir,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const w=s?0:i,S=w*4;let A=p.clippingState||null;l.value=A,A=u(x,f,S,m);for(let P=0;P!==S;++P)A[P]=t[P];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,x){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const p=m+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,A=m;S!==v;++S,A+=4)a.copy(h[S]).applyMatrix4(w,o),a.normal.toArray(g,A),g[A+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function wT(n){let e=new WeakMap;function t(a,o){return o===Zo?a.mapping=Xs:o===nu&&(a.mapping=js),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Zo||o===nu)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zM(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gu extends og{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,Rd=[.125,.215,.35,.446,.526,.582],Ur=20,Pc=new Gu,Cd=new ct;let Ic=null;const Nr=(1+Math.sqrt(5))/2,ws=1/Nr,Ld=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Nr,ws),new z(0,Nr,-ws),new z(ws,0,Nr),new z(-ws,0,Nr),new z(Nr,ws,0),new z(-Nr,ws,0)];class Pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ic=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic),e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Hi,format:Xn,colorSpace:ln,depthBuffer:!1},r=Id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(s)),this._blurMaterial=CT(s,e,t)}return r}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,i,r){const o=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Cd),u.toneMapping=cr,u.autoClear=!1;const m=new Or({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),x=new qn(new Ga,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(Cd),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;Co(r,w*S,p>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new qn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Pc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ld[(r-1)%Ld.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ur-1),v=s/x,g=isFinite(s)?1+Math.floor(u*v):Ur;g>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ur}`);const p=[];let w=0;for(let I=0;I<Ur;++I){const H=I/v,E=Math.exp(-H*H/2);p.push(E),I===0?w+=E:I<g&&(w+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=x,f.mipInt.value=S-i;const A=this._sizeLods[r],P=3*A*(r>S-Is?r-S+Is:0),D=4*(this._cubeSize-A);Co(t,P,D,3*A,2*A),l.setRenderTarget(t),l.render(h,Pc)}}function RT(n){const e=[],t=[],i=[];let r=n;const s=n-Is+1+Rd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Is?l=Rd[a-n+Is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,v=3,g=2,p=1,w=new Float32Array(v*x*m),S=new Float32Array(g*x*m),A=new Float32Array(p*x*m);for(let D=0;D<m;D++){const I=D%3*2/3-1,H=D>2?0:-1,E=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];w.set(E,v*x*D),S.set(f,g*x*D);const L=[D,D,D,D,D,D];A.set(L,p*x*D)}const P=new li;P.setAttribute("position",new wn(w,v)),P.setAttribute("uv",new wn(S,g)),P.setAttribute("faceIndex",new wn(A,p)),e.push(P),r>Is&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Id(n,e,t){const i=new Xr(n,e,t);return i.texture.mapping=ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function CT(n,e,t){const i=new Float32Array(Ur),r=new z(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Dd(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Nd(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}function LT(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zo||l===nu,u=l===Xs||l===js;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Pd(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Pd(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function PT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IT(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const v=f.morphAttributes[x];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let g=0,p=v.length;g<p;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let S=0,A=w.length;S<A;S+=3){const P=w[S+0],D=w[S+1],I=w[S+2];f.push(P,D,D,I,I,P)}}else if(x!==void 0){const w=x.array;v=x.version;for(let S=0,A=w.length/3-1;S<A;S+=3){const P=S+0,D=S+1,I=S+2;f.push(P,D,D,I,I,P)}}else return;const g=new(Qm(f)?sg:rg)(f,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function DT(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(s,m,o,f*l),t.update(m,s,1)}function h(f,m,x){if(x===0)return;let v,g;if(r)v=n,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](s,m,o,f*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function NT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function UT(n,e){return n[0]-e[0]}function OT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function FT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==x){let k=function(){me.dispose(),s.delete(u),u.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let H=0;w===!0&&(H=1),S===!0&&(H=2),A===!0&&(H=3);let E=u.attributes.position.count*H,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Z=new Float32Array(E*L*4*x),me=new ng(Z,E,L,x);me.type=$n,me.needsUpdate=!0;const _e=H*4;for(let Y=0;Y<x;Y++){const ee=P[Y],J=D[Y],fe=I[Y],se=E*L*4*Y;for(let ve=0;ve<ee.count;ve++){const X=ve*_e;w===!0&&(a.fromBufferAttribute(ee,ve),Z[se+X+0]=a.x,Z[se+X+1]=a.y,Z[se+X+2]=a.z,Z[se+X+3]=0),S===!0&&(a.fromBufferAttribute(J,ve),Z[se+X+4]=a.x,Z[se+X+5]=a.y,Z[se+X+6]=a.z,Z[se+X+7]=0),A===!0&&(a.fromBufferAttribute(fe,ve),Z[se+X+8]=a.x,Z[se+X+9]=a.y,Z[se+X+10]=a.z,Z[se+X+11]=fe.itemSize===4?a.w:1)}}v={count:x,texture:me,size:new tt(E,L)},s.set(u,v),u.addEventListener("dispose",k)}let g=0;for(let w=0;w<f.length;w++)g+=f[w];const p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let x=i[u.id];if(x===void 0||x.length!==m){x=[];for(let S=0;S<m;S++)x[S]=[S,0];i[u.id]=x}for(let S=0;S<m;S++){const A=x[S];A[0]=S,A[1]=f[S]}x.sort(OT);for(let S=0;S<8;S++)S<m&&x[S][1]?(o[S][0]=x[S][0],o[S][1]=x[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(UT);const v=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let S=0;S<8;S++){const A=o[S],P=A[0],D=A[1];P!==Number.MAX_SAFE_INTEGER&&D?(v&&u.getAttribute("morphTarget"+S)!==v[P]&&u.setAttribute("morphTarget"+S,v[P]),g&&u.getAttribute("morphNormal"+S)!==g[P]&&u.setAttribute("morphNormal"+S,g[P]),r[S]=D,p+=D):(v&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),g&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const w=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function BT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ug=new pn,hg=new ng,fg=new bM,dg=new lg,Ud=[],Od=[],Fd=new Float32Array(16),Bd=new Float32Array(9),kd=new Float32Array(4);function na(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ud[r];if(s===void 0&&(s=new Float32Array(r),Ud[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vl(n,e){let t=Od[e];t===void 0&&(t=new Int32Array(e),Od[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function zT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function GT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function VT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;kd.set(i),n.uniformMatrix2fv(this.addr,!1,kd),tn(t,i)}}function WT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Bd.set(i),n.uniformMatrix3fv(this.addr,!1,Bd),tn(t,i)}}function XT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Fd.set(i),n.uniformMatrix4fv(this.addr,!1,Fd),tn(t,i)}}function jT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function qT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function YT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function KT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function JT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function QT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function eA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||ug,r)}function tA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fg,r)}function nA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dg,r)}function iA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hg,r)}function rA(n){switch(n){case 5126:return kT;case 35664:return HT;case 35665:return zT;case 35666:return GT;case 35674:return VT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return jT;case 35667:case 35671:return $T;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return KT;case 36294:return ZT;case 36295:return JT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}function sA(n,e){n.uniform1fv(this.addr,e)}function aA(n,e){const t=na(e,this.size,2);n.uniform2fv(this.addr,t)}function oA(n,e){const t=na(e,this.size,3);n.uniform3fv(this.addr,t)}function lA(n,e){const t=na(e,this.size,4);n.uniform4fv(this.addr,t)}function cA(n,e){const t=na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uA(n,e){const t=na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hA(n,e){const t=na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fA(n,e){n.uniform1iv(this.addr,e)}function dA(n,e){n.uniform2iv(this.addr,e)}function pA(n,e){n.uniform3iv(this.addr,e)}function mA(n,e){n.uniform4iv(this.addr,e)}function gA(n,e){n.uniform1uiv(this.addr,e)}function _A(n,e){n.uniform2uiv(this.addr,e)}function vA(n,e){n.uniform3uiv(this.addr,e)}function xA(n,e){n.uniform4uiv(this.addr,e)}function yA(n,e,t){const i=this.cache,r=e.length,s=vl(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ug,s[a])}function bA(n,e,t){const i=this.cache,r=e.length,s=vl(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||fg,s[a])}function MA(n,e,t){const i=this.cache,r=e.length,s=vl(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||dg,s[a])}function SA(n,e,t){const i=this.cache,r=e.length,s=vl(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hg,s[a])}function EA(n){switch(n){case 5126:return sA;case 35664:return aA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return hA;case 5124:case 35670:return fA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return SA}}class TA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=rA(t.type)}}class AA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=EA(t.type)}}class wA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function Hd(n,e){n.seq.push(e),n.map[e.id]=e}function RA(n,e,t){const i=n.name,r=i.length;for(Dc.lastIndex=0;;){const s=Dc.exec(i),a=Dc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hd(t,c===void 0?new TA(o,n,e):new AA(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new wA(o),Hd(t,h)),t=h}}}class Go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);RA(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function zd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let CA=0;function LA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function PA(n){const e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(n);let i;switch(e===t?i="":e===tl&&t===el?i="LinearDisplayP3ToLinearSRGB":e===el&&t===tl&&(i="LinearSRGBToLinearDisplayP3"),n){case ln:case gl:return[i,"LinearTransferOETF"];case jt:case Fu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+LA(n.getShaderSource(e),a)}else return r}function IA(n,e){const t=PA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function DA(n,e){let t;switch(e){case Cb:t="Linear";break;case Lb:t="Reinhard";break;case Pb:t="OptimizedCineon";break;case Ib:t="ACESFilmic";break;case Db:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}function UA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sa(n){return n!==""}function Vd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FA=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(n){return n.replace(FA,kA)}const BA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kA(n,e){let t=lt[e];if(t===void 0){const i=BA.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lu(t)}const HA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(n){return n.replace(HA,zA)}function zA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ob?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function VA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function XA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hm:e="ENVMAP_BLENDING_MULTIPLY";break;case wb:e="ENVMAP_BLENDING_MIX";break;case Rb:e="ENVMAP_BLENDING_ADD";break}return e}function jA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $A(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=GA(t),c=VA(t),u=WA(t),h=XA(t),f=jA(t),m=t.isWebGL2?"":NA(t),x=UA(s),v=r.createProgram();let g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Sa).join(`
`),g.length>0&&(g+=`
`),p=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(g=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[m,jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?lt.tonemapping_pars_fragment:"",t.toneMapping!==cr?DA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,IA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=lu(a),a=Vd(a,t),a=Wd(a,t),o=lu(o),o=Vd(o,t),o=Wd(o,t),a=Xd(a),o=Xd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+g+a,A=w+p+o,P=zd(r,r.VERTEX_SHADER,S),D=zd(r,r.FRAGMENT_SHADER,A);if(r.attachShader(v,P),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(P).trim(),Z=r.getShaderInfoLog(D).trim();let me=!0,_e=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,P,D);else{const k=Gd(r,P,"vertex"),Y=Gd(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+k+`
`+Y)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(L===""||Z==="")&&(_e=!1);_e&&(this.diagnostics={runnable:me,programLog:E,vertexShader:{log:L,prefix:g},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(P),r.deleteShader(D);let I;this.getUniforms=function(){return I===void 0&&(I=new Go(r,v)),I};let H;return this.getAttributes=function(){return H===void 0&&(H=OA(r,v)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=D,this}let qA=0;class YA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new KA(e),t.set(e,i)),i}}class KA{constructor(e){this.id=qA++,this.code=e,this.usedTimes=0}}function ZA(n,e,t,i,r,s,a){const o=new ku,l=new YA,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function g(E,L,Z,me,_e){const k=me.fog,Y=_e.geometry,ee=E.isMeshStandardMaterial?me.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||ee),fe=J&&J.mapping===ml?J.image.height:null,se=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,X=ve!==void 0?ve.length:0;let ne=0;Y.morphAttributes.position!==void 0&&(ne=1),Y.morphAttributes.normal!==void 0&&(ne=2),Y.morphAttributes.color!==void 0&&(ne=3);let Ae,Pe,Be,je;if(se){const It=di[se];Ae=It.vertexShader,Pe=It.fragmentShader}else Ae=E.vertexShader,Pe=E.fragmentShader,l.update(E),Be=l.getVertexShaderID(E),je=l.getFragmentShaderID(E);const Ye=n.getRenderTarget(),$e=_e.isInstancedMesh===!0,ut=!!E.map,Bt=!!E.matcap,nt=!!J,M=!!E.aoMap,F=!!E.lightMap,W=!!E.bumpMap,te=!!E.normalMap,Q=!!E.displacementMap,ce=!!E.emissiveMap,pe=!!E.metalnessMap,le=!!E.roughnessMap,de=E.anisotropy>0,ge=E.clearcoat>0,Oe=E.iridescence>0,T=E.sheen>0,b=E.transmission>0,V=de&&!!E.anisotropyMap,ae=ge&&!!E.clearcoatMap,oe=ge&&!!E.clearcoatNormalMap,ue=ge&&!!E.clearcoatRoughnessMap,Ne=Oe&&!!E.iridescenceMap,Me=Oe&&!!E.iridescenceThicknessMap,Re=T&&!!E.sheenColorMap,O=T&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,xe=!!E.specularColorMap,Ge=!!E.specularIntensityMap,Fe=b&&!!E.transmissionMap,Xe=b&&!!E.thicknessMap,We=!!E.gradientMap,N=!!E.alphaMap,Ce=E.alphaTest>0,we=!!E.alphaHash,Ie=!!E.extensions,Le=!!Y.attributes.uv1,ye=!!Y.attributes.uv2,Ve=!!Y.attributes.uv3;let Ze=cr;return E.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(Ze=n.toneMapping),{isWebGL2:u,shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:Ae,fragmentShader:Pe,defines:E.defines,customVertexShaderID:Be,customFragmentShaderID:je,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:$e,instancingColor:$e&&_e.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ye===null?n.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:ln,map:ut,matcap:Bt,envMap:nt,envMapMode:nt&&J.mapping,envMapCubeUVHeight:fe,aoMap:M,lightMap:F,bumpMap:W,normalMap:te,displacementMap:f&&Q,emissiveMap:ce,normalMapObjectSpace:te&&E.normalMapType===$b,normalMapTangentSpace:te&&E.normalMapType===Zm,metalnessMap:pe,roughnessMap:le,anisotropy:de,anisotropyMap:V,clearcoat:ge,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:ue,iridescence:Oe,iridescenceMap:Ne,iridescenceThicknessMap:Me,sheen:T,sheenColorMap:Re,sheenRoughnessMap:O,specularMap:Ee,specularColorMap:xe,specularIntensityMap:Ge,transmission:b,transmissionMap:Fe,thicknessMap:Xe,gradientMap:We,opaque:E.transparent===!1&&E.blending===Hs,alphaMap:N,alphaTest:Ce,alphaHash:we,combine:E.combine,mapUv:ut&&v(E.map.channel),aoMapUv:M&&v(E.aoMap.channel),lightMapUv:F&&v(E.lightMap.channel),bumpMapUv:W&&v(E.bumpMap.channel),normalMapUv:te&&v(E.normalMap.channel),displacementMapUv:Q&&v(E.displacementMap.channel),emissiveMapUv:ce&&v(E.emissiveMap.channel),metalnessMapUv:pe&&v(E.metalnessMap.channel),roughnessMapUv:le&&v(E.roughnessMap.channel),anisotropyMapUv:V&&v(E.anisotropyMap.channel),clearcoatMapUv:ae&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:O&&v(E.sheenRoughnessMap.channel),specularMapUv:Ee&&v(E.specularMap.channel),specularColorMapUv:xe&&v(E.specularColorMap.channel),specularIntensityMapUv:Ge&&v(E.specularIntensityMap.channel),transmissionMapUv:Fe&&v(E.transmissionMap.channel),thicknessMapUv:Xe&&v(E.thicknessMap.channel),alphaMapUv:N&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(te||de),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:ye,vertexUv3s:Ve,pointsUvs:_e.isPoints===!0&&!!Y.attributes.uv&&(ut||N),fog:!!k,useFog:E.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:_e.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ne,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&wt.getTransfer(E.map.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pi,flipSided:E.side===Dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ie&&E.extensions.derivatives===!0,extensionFragDepth:Ie&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Z in E.defines)L.push(Z),L.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(w(L,E),S(L,E),L.push(n.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function w(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function S(E,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.matcap&&o.enable(4),L.envMap&&o.enable(5),L.normalMapObjectSpace&&o.enable(6),L.normalMapTangentSpace&&o.enable(7),L.clearcoat&&o.enable(8),L.iridescence&&o.enable(9),L.alphaTest&&o.enable(10),L.vertexColors&&o.enable(11),L.vertexAlphas&&o.enable(12),L.vertexUv1s&&o.enable(13),L.vertexUv2s&&o.enable(14),L.vertexUv3s&&o.enable(15),L.vertexTangents&&o.enable(16),L.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.useLegacyLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function A(E){const L=x[E.type];let Z;if(L){const me=di[L];Z=FM.clone(me.uniforms)}else Z=E.uniforms;return Z}function P(E,L){let Z;for(let me=0,_e=c.length;me<_e;me++){const k=c[me];if(k.cacheKey===L){Z=k,++Z.usedTimes;break}}return Z===void 0&&(Z=new $A(n,L,E,s),c.push(Z)),Z}function D(E){if(--E.usedTimes===0){const L=c.indexOf(E);c[L]=c[c.length-1],c.pop(),E.destroy()}}function I(E){l.remove(E)}function H(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:A,acquireProgram:P,releaseProgram:D,releaseShaderCache:I,programs:c,dispose:H}}function JA(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function QA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,m,x,v,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,f,m,x,v,g){const p=a(h,f,m,x,v,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,f,m,x,v,g){const p=a(h,f,m,x,v,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||QA),i.length>1&&i.sort(f||$d),r.length>1&&r.sort(f||$d)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function ew(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new qd,n.set(i,[a])):r>=s.length?(a=new qd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function tw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ct};break;case"SpotLight":t={position:new z,direction:new z,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function nw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iw=0;function rw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sw(n,e){const t=new tw,i=nw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,a=new mt,o=new mt;function l(u,h){let f=0,m=0,x=0;for(let me=0;me<9;me++)r.probe[me].set(0,0,0);let v=0,g=0,p=0,w=0,S=0,A=0,P=0,D=0,I=0,H=0,E=0;u.sort(rw);const L=h===!0?Math.PI:1;for(let me=0,_e=u.length;me<_e;me++){const k=u[me],Y=k.color,ee=k.intensity,J=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=Y.r*ee*L,m+=Y.g*ee*L,x+=Y.b*ee*L;else if(k.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(k.sh.coefficients[se],ee);E++}else if(k.isDirectionalLight){const se=t.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity*L),k.castShadow){const ve=k.shadow,X=i.get(k);X.shadowBias=ve.bias,X.shadowNormalBias=ve.normalBias,X.shadowRadius=ve.radius,X.shadowMapSize=ve.mapSize,r.directionalShadow[v]=X,r.directionalShadowMap[v]=fe,r.directionalShadowMatrix[v]=k.shadow.matrix,A++}r.directional[v]=se,v++}else if(k.isSpotLight){const se=t.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(Y).multiplyScalar(ee*L),se.distance=J,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,r.spot[p]=se;const ve=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,ve.updateMatrices(k),k.castShadow&&H++),r.spotLightMatrix[p]=ve.matrix,k.castShadow){const X=i.get(k);X.shadowBias=ve.bias,X.shadowNormalBias=ve.normalBias,X.shadowRadius=ve.radius,X.shadowMapSize=ve.mapSize,r.spotShadow[p]=X,r.spotShadowMap[p]=fe,D++}p++}else if(k.isRectAreaLight){const se=t.get(k);se.color.copy(Y).multiplyScalar(ee),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),r.rectArea[w]=se,w++}else if(k.isPointLight){const se=t.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity*L),se.distance=k.distance,se.decay=k.decay,k.castShadow){const ve=k.shadow,X=i.get(k);X.shadowBias=ve.bias,X.shadowNormalBias=ve.normalBias,X.shadowRadius=ve.radius,X.shadowMapSize=ve.mapSize,X.shadowCameraNear=ve.camera.near,X.shadowCameraFar=ve.camera.far,r.pointShadow[g]=X,r.pointShadowMap[g]=fe,r.pointShadowMatrix[g]=k.shadow.matrix,P++}r.point[g]=se,g++}else if(k.isHemisphereLight){const se=t.get(k);se.skyColor.copy(k.color).multiplyScalar(ee*L),se.groundColor.copy(k.groundColor).multiplyScalar(ee*L),r.hemi[S]=se,S++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==v||Z.pointLength!==g||Z.spotLength!==p||Z.rectAreaLength!==w||Z.hemiLength!==S||Z.numDirectionalShadows!==A||Z.numPointShadows!==P||Z.numSpotShadows!==D||Z.numSpotMaps!==I||Z.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=w,r.point.length=g,r.hemi.length=S,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+I-H,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=E,Z.directionalLength=v,Z.pointLength=g,Z.spotLength=p,Z.rectAreaLength=w,Z.hemiLength=S,Z.numDirectionalShadows=A,Z.numPointShadows=P,Z.numSpotShadows=D,Z.numSpotMaps=I,Z.numLightProbes=E,r.version=iw++)}function c(u,h){let f=0,m=0,x=0,v=0,g=0;const p=h.matrixWorldInverse;for(let w=0,S=u.length;w<S;w++){const A=u[w];if(A.isDirectionalLight){const P=r.directional[f];P.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),f++}else if(A.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),x++}else if(A.isRectAreaLight){const P=r.rectArea[v];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),o.identity(),a.copy(A.matrixWorld),a.premultiply(p),o.extractRotation(a),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){const P=r.hemi[g];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:r}}function Yd(n,e){const t=new sw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function aw(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Yd(n,e),t.set(s,[l])):a>=o.length?(l=new Yd(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ow extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lw extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hw(n,e,t){let i=new Hu;const r=new tt,s=new tt,a=new Ut,o=new ow({depthPacking:jb}),l=new lw,c={},u=t.maxTextureSize,h={[Gi]:Dn,[Dn]:Gi,[pi]:pi},f=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:cw,fragmentShader:uw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new li;x.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qn(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fm;let p=this.type;this.render=function(P,D,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const H=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(lr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const me=p!==Ui&&this.type===Ui,_e=p===Ui&&this.type!==Ui;for(let k=0,Y=P.length;k<Y;k++){const ee=P[k],J=ee.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const fe=J.getFrameExtents();if(r.multiply(fe),s.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,J.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,J.mapSize.y=s.y)),J.map===null||me===!0||_e===!0){const ve=this.type!==Ui?{minFilter:an,magFilter:an}:{};J.map!==null&&J.map.dispose(),J.map=new Xr(r.x,r.y,ve),J.map.texture.name=ee.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const se=J.getViewportCount();for(let ve=0;ve<se;ve++){const X=J.getViewport(ve);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),Z.viewport(a),J.updateMatrices(ee,ve),i=J.getFrustum(),A(D,I,J.camera,ee,this.type)}J.isPointLightShadow!==!0&&this.type===Ui&&w(J,I),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(H,E,L)};function w(P,D){const I=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xr(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,I,f,v,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,I,m,v,null)}function S(P,D,I,H){let E=null;const L=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)E=L;else if(E=I.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const Z=E.uuid,me=D.uuid;let _e=c[Z];_e===void 0&&(_e={},c[Z]=_e);let k=_e[me];k===void 0&&(k=E.clone(),_e[me]=k),E=k}if(E.visible=D.visible,E.wireframe=D.wireframe,H===Ui?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:h[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Z=n.properties.get(E);Z.light=I}return E}function A(P,D,I,H,E){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===Ui)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const me=e.update(P),_e=P.material;if(Array.isArray(_e)){const k=me.groups;for(let Y=0,ee=k.length;Y<ee;Y++){const J=k[Y],fe=_e[J.materialIndex];if(fe&&fe.visible){const se=S(P,fe,H,E);n.renderBufferDirect(I,null,me,se,P,J)}}}else if(_e.visible){const k=S(P,_e,H,E);n.renderBufferDirect(I,null,me,k,P,null)}}const Z=P.children;for(let me=0,_e=Z.length;me<_e;me++)A(Z[me],D,I,H,E)}}function fw(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const Ce=new Ut;let we=null;const Ie=new Ut(0,0,0,0);return{setMask:function(Le){we!==Le&&!N&&(n.colorMask(Le,Le,Le,Le),we=Le)},setLocked:function(Le){N=Le},setClear:function(Le,ye,Ve,Ze,Xt){Xt===!0&&(Le*=Ze,ye*=Ze,Ve*=Ze),Ce.set(Le,ye,Ve,Ze),Ie.equals(Ce)===!1&&(n.clearColor(Le,ye,Ve,Ze),Ie.copy(Ce))},reset:function(){N=!1,we=null,Ie.set(-1,0,0,0)}}}function s(){let N=!1,Ce=null,we=null,Ie=null;return{setTest:function(Le){Le?Ye(n.DEPTH_TEST):$e(n.DEPTH_TEST)},setMask:function(Le){Ce!==Le&&!N&&(n.depthMask(Le),Ce=Le)},setFunc:function(Le){if(we!==Le){switch(Le){case yb:n.depthFunc(n.NEVER);break;case bb:n.depthFunc(n.ALWAYS);break;case Mb:n.depthFunc(n.LESS);break;case tu:n.depthFunc(n.LEQUAL);break;case Sb:n.depthFunc(n.EQUAL);break;case Eb:n.depthFunc(n.GEQUAL);break;case Tb:n.depthFunc(n.GREATER);break;case Ab:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=Le}},setLocked:function(Le){N=Le},setClear:function(Le){Ie!==Le&&(n.clearDepth(Le),Ie=Le)},reset:function(){N=!1,Ce=null,we=null,Ie=null}}}function a(){let N=!1,Ce=null,we=null,Ie=null,Le=null,ye=null,Ve=null,Ze=null,Xt=null;return{setTest:function(It){N||(It?Ye(n.STENCIL_TEST):$e(n.STENCIL_TEST))},setMask:function(It){Ce!==It&&!N&&(n.stencilMask(It),Ce=It)},setFunc:function(It,Gn,cn){(we!==It||Ie!==Gn||Le!==cn)&&(n.stencilFunc(It,Gn,cn),we=It,Ie=Gn,Le=cn)},setOp:function(It,Gn,cn){(ye!==It||Ve!==Gn||Ze!==cn)&&(n.stencilOp(It,Gn,cn),ye=It,Ve=Gn,Ze=cn)},setLocked:function(It){N=It},setClear:function(It){Xt!==It&&(n.clearStencil(It),Xt=It)},reset:function(){N=!1,Ce=null,we=null,Ie=null,Le=null,ye=null,Ve=null,Ze=null,Xt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,v=[],g=null,p=!1,w=null,S=null,A=null,P=null,D=null,I=null,H=null,E=!1,L=null,Z=null,me=null,_e=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,J=0;const fe=n.getParameter(n.VERSION);fe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ee=J>=1):fe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ee=J>=2);let se=null,ve={};const X=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Ae=new Ut().fromArray(X),Pe=new Ut().fromArray(ne);function Be(N,Ce,we,Ie){const Le=new Uint8Array(4),ye=n.createTexture();n.bindTexture(N,ye),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<we;Ve++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Ce+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return ye}const je={};je[n.TEXTURE_2D]=Be(n.TEXTURE_2D,n.TEXTURE_2D,1),je[n.TEXTURE_CUBE_MAP]=Be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(je[n.TEXTURE_2D_ARRAY]=Be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),je[n.TEXTURE_3D]=Be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ye(n.DEPTH_TEST),l.setFunc(tu),Q(!1),ce(Lf),Ye(n.CULL_FACE),W(lr);function Ye(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function $e(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function ut(N,Ce){return m[N]!==Ce?(n.bindFramebuffer(N,Ce),m[N]=Ce,i&&(N===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ce),N===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function Bt(N,Ce){let we=v,Ie=!1;if(N)if(we=x.get(Ce),we===void 0&&(we=[],x.set(Ce,we)),N.isWebGLMultipleRenderTargets){const Le=N.texture;if(we.length!==Le.length||we[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Ve=Le.length;ye<Ve;ye++)we[ye]=n.COLOR_ATTACHMENT0+ye;we.length=Le.length,Ie=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Ie=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function nt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const M={[Ps]:n.FUNC_ADD,[cb]:n.FUNC_SUBTRACT,[ub]:n.FUNC_REVERSE_SUBTRACT};if(i)M[Nf]=n.MIN,M[Uf]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(M[Nf]=N.MIN_EXT,M[Uf]=N.MAX_EXT)}const F={[hb]:n.ZERO,[fb]:n.ONE,[db]:n.SRC_COLOR,[Bm]:n.SRC_ALPHA,[xb]:n.SRC_ALPHA_SATURATE,[_b]:n.DST_COLOR,[mb]:n.DST_ALPHA,[pb]:n.ONE_MINUS_SRC_COLOR,[km]:n.ONE_MINUS_SRC_ALPHA,[vb]:n.ONE_MINUS_DST_COLOR,[gb]:n.ONE_MINUS_DST_ALPHA};function W(N,Ce,we,Ie,Le,ye,Ve,Ze){if(N===lr){p===!0&&($e(n.BLEND),p=!1);return}if(p===!1&&(Ye(n.BLEND),p=!0),N!==lb){if(N!==w||Ze!==E){if((S!==Ps||D!==Ps)&&(n.blendEquation(n.FUNC_ADD),S=Ps,D=Ps),Ze)switch(N){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pf:n.blendFunc(n.ONE,n.ONE);break;case If:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case If:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Df:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,P=null,I=null,H=null,w=N,E=Ze}return}Le=Le||Ce,ye=ye||we,Ve=Ve||Ie,(Ce!==S||Le!==D)&&(n.blendEquationSeparate(M[Ce],M[Le]),S=Ce,D=Le),(we!==A||Ie!==P||ye!==I||Ve!==H)&&(n.blendFuncSeparate(F[we],F[Ie],F[ye],F[Ve]),A=we,P=Ie,I=ye,H=Ve),w=N,E=!1}function te(N,Ce){N.side===pi?$e(n.CULL_FACE):Ye(n.CULL_FACE);let we=N.side===Dn;Ce&&(we=!we),Q(we),N.blending===Hs&&N.transparent===!1?W(lr):W(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Ie=N.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ye(n.SAMPLE_ALPHA_TO_COVERAGE):$e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function ce(N){N!==sb?(Ye(n.CULL_FACE),N!==Z&&(N===Lf?n.cullFace(n.BACK):N===ab?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$e(n.CULL_FACE),Z=N}function pe(N){N!==me&&(ee&&n.lineWidth(N),me=N)}function le(N,Ce,we){N?(Ye(n.POLYGON_OFFSET_FILL),(_e!==Ce||k!==we)&&(n.polygonOffset(Ce,we),_e=Ce,k=we)):$e(n.POLYGON_OFFSET_FILL)}function de(N){N?Ye(n.SCISSOR_TEST):$e(n.SCISSOR_TEST)}function ge(N){N===void 0&&(N=n.TEXTURE0+Y-1),se!==N&&(n.activeTexture(N),se=N)}function Oe(N,Ce,we){we===void 0&&(se===null?we=n.TEXTURE0+Y-1:we=se);let Ie=ve[we];Ie===void 0&&(Ie={type:void 0,texture:void 0},ve[we]=Ie),(Ie.type!==N||Ie.texture!==Ce)&&(se!==we&&(n.activeTexture(we),se=we),n.bindTexture(N,Ce||je[N]),Ie.type=N,Ie.texture=Ce)}function T(){const N=ve[se];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(N){Ae.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ae.copy(N))}function Ge(N){Pe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Pe.copy(N))}function Fe(N,Ce){let we=h.get(Ce);we===void 0&&(we=new WeakMap,h.set(Ce,we));let Ie=we.get(N);Ie===void 0&&(Ie=n.getUniformBlockIndex(Ce,N.name),we.set(N,Ie))}function Xe(N,Ce){const Ie=h.get(Ce).get(N);u.get(Ce)!==Ie&&(n.uniformBlockBinding(Ce,Ie,N.__bindingPointIndex),u.set(Ce,Ie))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},se=null,ve={},m={},x=new WeakMap,v=[],g=null,p=!1,w=null,S=null,A=null,P=null,D=null,I=null,H=null,E=!1,L=null,Z=null,me=null,_e=null,k=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ye,disable:$e,bindFramebuffer:ut,drawBuffers:Bt,useProgram:nt,setBlending:W,setMaterial:te,setFlipSided:Q,setCullFace:ce,setLineWidth:pe,setPolygonOffset:le,setScissorTest:de,activeTexture:ge,bindTexture:Oe,unbindTexture:T,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:O,texImage3D:Ee,updateUBOMapping:Fe,uniformBlockBinding:Xe,texStorage2D:Me,texStorage3D:Re,texSubImage2D:ae,texSubImage3D:oe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ne,scissor:xe,viewport:Ge,reset:We}}function dw(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(T,b){return p?new OffscreenCanvas(T,b):Ba("canvas")}function S(T,b,V,ae){let oe=1;if((T.width>ae||T.height>ae)&&(oe=ae/Math.max(T.width,T.height)),oe<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ue=b?il:Math.floor,Ne=ue(oe*T.width),Me=ue(oe*T.height);v===void 0&&(v=w(Ne,Me));const Re=V?w(Ne,Me):v;return Re.width=Ne,Re.height=Me,Re.getContext("2d").drawImage(T,0,0,Ne,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ne+"x"+Me+")."),Re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function A(T){return ou(T.width)&&ou(T.height)}function P(T){return o?!1:T.wrapS!==In||T.wrapT!==In||T.minFilter!==an&&T.minFilter!==Qt}function D(T,b){return T.generateMipmaps&&b&&T.minFilter!==an&&T.minFilter!==Qt}function I(T){n.generateMipmap(T)}function H(T,b,V,ae,oe=!1){if(o===!1)return b;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue=b;if(b===n.RED&&(V===n.FLOAT&&(ue=n.R32F),V===n.HALF_FLOAT&&(ue=n.R16F),V===n.UNSIGNED_BYTE&&(ue=n.R8)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ue=n.R8UI),V===n.UNSIGNED_SHORT&&(ue=n.R16UI),V===n.UNSIGNED_INT&&(ue=n.R32UI),V===n.BYTE&&(ue=n.R8I),V===n.SHORT&&(ue=n.R16I),V===n.INT&&(ue=n.R32I)),b===n.RG&&(V===n.FLOAT&&(ue=n.RG32F),V===n.HALF_FLOAT&&(ue=n.RG16F),V===n.UNSIGNED_BYTE&&(ue=n.RG8)),b===n.RGBA){const Ne=oe?Qo:wt.getTransfer(ae);V===n.FLOAT&&(ue=n.RGBA32F),V===n.HALF_FLOAT&&(ue=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ue=Ne===kt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function E(T,b,V){return D(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==an&&T.minFilter!==Qt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function L(T){return T===an||T===iu||T===zo?n.NEAREST:n.LINEAR}function Z(T){const b=T.target;b.removeEventListener("dispose",Z),_e(b),b.isVideoTexture&&x.delete(b)}function me(T){const b=T.target;b.removeEventListener("dispose",me),Y(b)}function _e(T){const b=i.get(T);if(b.__webglInit===void 0)return;const V=T.source,ae=g.get(V);if(ae){const oe=ae[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&k(T),Object.keys(ae).length===0&&g.delete(V)}i.remove(T)}function k(T){const b=i.get(T);n.deleteTexture(b.__webglTexture);const V=T.source,ae=g.get(V);delete ae[b.__cacheKey],a.memory.textures--}function Y(T){const b=T.texture,V=i.get(T),ae=i.get(b);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(V.__webglFramebuffer[oe]))for(let ue=0;ue<V.__webglFramebuffer[oe].length;ue++)n.deleteFramebuffer(V.__webglFramebuffer[oe][ue]);else n.deleteFramebuffer(V.__webglFramebuffer[oe]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[oe])}else{if(Array.isArray(V.__webglFramebuffer))for(let oe=0;oe<V.__webglFramebuffer.length;oe++)n.deleteFramebuffer(V.__webglFramebuffer[oe]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let oe=0;oe<V.__webglColorRenderbuffer.length;oe++)V.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[oe]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let oe=0,ue=b.length;oe<ue;oe++){const Ne=i.get(b[oe]);Ne.__webglTexture&&(n.deleteTexture(Ne.__webglTexture),a.memory.textures--),i.remove(b[oe])}i.remove(b),i.remove(T)}let ee=0;function J(){ee=0}function fe(){const T=ee;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),ee+=1,T}function se(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function ve(T,b){const V=i.get(T);if(T.isVideoTexture&&ge(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const ae=T.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(V,T,b);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function X(T,b){const V=i.get(T);if(T.version>0&&V.__version!==T.version){ut(V,T,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function ne(T,b){const V=i.get(T);if(T.version>0&&V.__version!==T.version){ut(V,T,b);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function Ae(T,b){const V=i.get(T);if(T.version>0&&V.__version!==T.version){Bt(V,T,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}const Pe={[$s]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},Be={[an]:n.NEAREST,[iu]:n.NEAREST_MIPMAP_NEAREST,[zo]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Gm]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},je={[Yb]:n.NEVER,[nM]:n.ALWAYS,[Kb]:n.LESS,[Jb]:n.LEQUAL,[Zb]:n.EQUAL,[tM]:n.GEQUAL,[Qb]:n.GREATER,[eM]:n.NOTEQUAL};function Ye(T,b,V){if(V?(n.texParameteri(T,n.TEXTURE_WRAP_S,Pe[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Pe[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Pe[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Be[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Be[b.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==In||b.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,L(b.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,L(b.minFilter)),b.minFilter!==an&&b.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,je[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===an||b.minFilter!==zo&&b.minFilter!==mr||b.type===$n&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Hi&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(T,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function $e(T,b){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",Z));const ae=b.source;let oe=g.get(ae);oe===void 0&&(oe={},g.set(ae,oe));const ue=se(b);if(ue!==T.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),oe[ue].usedTimes++;const Ne=oe[T.__cacheKey];Ne!==void 0&&(oe[T.__cacheKey].usedTimes--,Ne.usedTimes===0&&k(b)),T.__cacheKey=ue,T.__webglTexture=oe[ue].texture}return V}function ut(T,b,V){let ae=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=n.TEXTURE_3D);const oe=$e(T,b),ue=b.source;t.bindTexture(ae,T.__webglTexture,n.TEXTURE0+V);const Ne=i.get(ue);if(ue.version!==Ne.__version||oe===!0){t.activeTexture(n.TEXTURE0+V);const Me=wt.getPrimaries(wt.workingColorSpace),Re=b.colorSpace===jn?null:wt.getPrimaries(b.colorSpace),O=b.colorSpace===jn||Me===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const Ee=P(b)&&A(b.image)===!1;let xe=S(b.image,Ee,!1,u);xe=Oe(b,xe);const Ge=A(xe)||o,Fe=s.convert(b.format,b.colorSpace);let Xe=s.convert(b.type),We=H(b.internalFormat,Fe,Xe,b.colorSpace,b.isVideoTexture);Ye(ae,b,Ge);let N;const Ce=b.mipmaps,we=o&&b.isVideoTexture!==!0,Ie=Ne.__version===void 0||oe===!0,Le=E(b,xe,Ge);if(b.isDepthTexture)We=n.DEPTH_COMPONENT,o?b.type===$n?We=n.DEPTH_COMPONENT32F:b.type===sr?We=n.DEPTH_COMPONENT24:b.type===kr?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:b.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Hr&&We===n.DEPTH_COMPONENT&&b.type!==Ou&&b.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=sr,Xe=s.convert(b.type)),b.format===qs&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,b.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=kr,Xe=s.convert(b.type))),Ie&&(we?t.texStorage2D(n.TEXTURE_2D,1,We,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,We,xe.width,xe.height,0,Fe,Xe,null));else if(b.isDataTexture)if(Ce.length>0&&Ge){we&&Ie&&t.texStorage2D(n.TEXTURE_2D,Le,We,Ce[0].width,Ce[0].height);for(let ye=0,Ve=Ce.length;ye<Ve;ye++)N=Ce[ye],we?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,N.width,N.height,Fe,Xe,N.data):t.texImage2D(n.TEXTURE_2D,ye,We,N.width,N.height,0,Fe,Xe,N.data);b.generateMipmaps=!1}else we?(Ie&&t.texStorage2D(n.TEXTURE_2D,Le,We,xe.width,xe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe.width,xe.height,Fe,Xe,xe.data)):t.texImage2D(n.TEXTURE_2D,0,We,xe.width,xe.height,0,Fe,Xe,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){we&&Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,We,Ce[0].width,Ce[0].height,xe.depth);for(let ye=0,Ve=Ce.length;ye<Ve;ye++)N=Ce[ye],b.format!==Xn?Fe!==null?we?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,N.width,N.height,xe.depth,Fe,N.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,We,N.width,N.height,xe.depth,0,N.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,N.width,N.height,xe.depth,Fe,Xe,N.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,We,N.width,N.height,xe.depth,0,Fe,Xe,N.data)}else{we&&Ie&&t.texStorage2D(n.TEXTURE_2D,Le,We,Ce[0].width,Ce[0].height);for(let ye=0,Ve=Ce.length;ye<Ve;ye++)N=Ce[ye],b.format!==Xn?Fe!==null?we?t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,N.width,N.height,Fe,N.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,We,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,N.width,N.height,Fe,Xe,N.data):t.texImage2D(n.TEXTURE_2D,ye,We,N.width,N.height,0,Fe,Xe,N.data)}else if(b.isDataArrayTexture)we?(Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,We,xe.width,xe.height,xe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Fe,Xe,xe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,xe.width,xe.height,xe.depth,0,Fe,Xe,xe.data);else if(b.isData3DTexture)we?(Ie&&t.texStorage3D(n.TEXTURE_3D,Le,We,xe.width,xe.height,xe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Fe,Xe,xe.data)):t.texImage3D(n.TEXTURE_3D,0,We,xe.width,xe.height,xe.depth,0,Fe,Xe,xe.data);else if(b.isFramebufferTexture){if(Ie)if(we)t.texStorage2D(n.TEXTURE_2D,Le,We,xe.width,xe.height);else{let ye=xe.width,Ve=xe.height;for(let Ze=0;Ze<Le;Ze++)t.texImage2D(n.TEXTURE_2D,Ze,We,ye,Ve,0,Fe,Xe,null),ye>>=1,Ve>>=1}}else if(Ce.length>0&&Ge){we&&Ie&&t.texStorage2D(n.TEXTURE_2D,Le,We,Ce[0].width,Ce[0].height);for(let ye=0,Ve=Ce.length;ye<Ve;ye++)N=Ce[ye],we?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Fe,Xe,N):t.texImage2D(n.TEXTURE_2D,ye,We,Fe,Xe,N);b.generateMipmaps=!1}else we?(Ie&&t.texStorage2D(n.TEXTURE_2D,Le,We,xe.width,xe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe,Xe,xe)):t.texImage2D(n.TEXTURE_2D,0,We,Fe,Xe,xe);D(b,Ge)&&I(ae),Ne.__version=ue.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Bt(T,b,V){if(b.image.length!==6)return;const ae=$e(T,b),oe=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);const ue=i.get(oe);if(oe.version!==ue.__version||ae===!0){t.activeTexture(n.TEXTURE0+V);const Ne=wt.getPrimaries(wt.workingColorSpace),Me=b.colorSpace===jn?null:wt.getPrimaries(b.colorSpace),Re=b.colorSpace===jn||Ne===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const O=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let ye=0;ye<6;ye++)!O&&!Ee?xe[ye]=S(b.image[ye],!1,!0,c):xe[ye]=Ee?b.image[ye].image:b.image[ye],xe[ye]=Oe(b,xe[ye]);const Ge=xe[0],Fe=A(Ge)||o,Xe=s.convert(b.format,b.colorSpace),We=s.convert(b.type),N=H(b.internalFormat,Xe,We,b.colorSpace),Ce=o&&b.isVideoTexture!==!0,we=ue.__version===void 0||ae===!0;let Ie=E(b,Ge,Fe);Ye(n.TEXTURE_CUBE_MAP,b,Fe);let Le;if(O){Ce&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,N,Ge.width,Ge.height);for(let ye=0;ye<6;ye++){Le=xe[ye].mipmaps;for(let Ve=0;Ve<Le.length;Ve++){const Ze=Le[Ve];b.format!==Xn?Xe!==null?Ce?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,Ze.width,Ze.height,Xe,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,N,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,Ze.width,Ze.height,Xe,We,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,N,Ze.width,Ze.height,0,Xe,We,Ze.data)}}}else{Le=b.mipmaps,Ce&&we&&(Le.length>0&&Ie++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,N,xe[0].width,xe[0].height));for(let ye=0;ye<6;ye++)if(Ee){Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,xe[ye].width,xe[ye].height,Xe,We,xe[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,N,xe[ye].width,xe[ye].height,0,Xe,We,xe[ye].data);for(let Ve=0;Ve<Le.length;Ve++){const Xt=Le[Ve].image[ye].image;Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,Xt.width,Xt.height,Xe,We,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,N,Xt.width,Xt.height,0,Xe,We,Xt.data)}}else{Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Xe,We,xe[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,N,Xe,We,xe[ye]);for(let Ve=0;Ve<Le.length;Ve++){const Ze=Le[Ve];Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,Xe,We,Ze.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,N,Xe,We,Ze.image[ye])}}}D(b,Fe)&&I(n.TEXTURE_CUBE_MAP),ue.__version=oe.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function nt(T,b,V,ae,oe,ue){const Ne=s.convert(V.format,V.colorSpace),Me=s.convert(V.type),Re=H(V.internalFormat,Ne,Me,V.colorSpace);if(!i.get(b).__hasExternalTextures){const Ee=Math.max(1,b.width>>ue),xe=Math.max(1,b.height>>ue);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ue,Re,Ee,xe,b.depth,0,Ne,Me,null):t.texImage2D(oe,ue,Re,Ee,xe,0,Ne,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),de(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,oe,i.get(V).__webglTexture,0,le(b)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,oe,i.get(V).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function M(T,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let ae=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||de(b)){const oe=b.depthTexture;oe&&oe.isDepthTexture&&(oe.type===$n?ae=n.DEPTH_COMPONENT32F:oe.type===sr&&(ae=n.DEPTH_COMPONENT24));const ue=le(b);de(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ae,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ae,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){const ae=le(b);V&&de(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,b.width,b.height):de(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ae=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let oe=0;oe<ae.length;oe++){const ue=ae[oe],Ne=s.convert(ue.format,ue.colorSpace),Me=s.convert(ue.type),Re=H(ue.internalFormat,Ne,Me,ue.colorSpace),O=le(b);V&&de(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,O,Re,b.width,b.height):de(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O,Re,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Re,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ve(b.depthTexture,0);const ae=i.get(b.depthTexture).__webglTexture,oe=le(b);if(b.depthTexture.format===Hr)de(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(b.depthTexture.format===qs)de(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function W(T){const b=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");F(b.__webglFramebuffer,T)}else if(V){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]=n.createRenderbuffer(),M(b.__webglDepthbuffer[ae],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),M(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(T,b,V){const ae=i.get(T);b!==void 0&&nt(ae.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&W(T)}function Q(T){const b=T.texture,V=i.get(T),ae=i.get(b);T.addEventListener("dispose",me),T.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=b.version,a.memory.textures++);const oe=T.isWebGLCubeRenderTarget===!0,ue=T.isWebGLMultipleRenderTargets===!0,Ne=A(T)||o;if(oe){V.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(o&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[Me]=[];for(let Re=0;Re<b.mipmaps.length;Re++)V.__webglFramebuffer[Me][Re]=n.createFramebuffer()}else V.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let Me=0;Me<b.mipmaps.length;Me++)V.__webglFramebuffer[Me]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ue)if(r.drawBuffers){const Me=T.texture;for(let Re=0,O=Me.length;Re<O;Re++){const Ee=i.get(Me[Re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&de(T)===!1){const Me=ue?b:[b];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Re=0;Re<Me.length;Re++){const O=Me[Re];V.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Re]);const Ee=s.convert(O.format,O.colorSpace),xe=s.convert(O.type),Ge=H(O.internalFormat,Ee,xe,O.colorSpace,T.isXRRenderTarget===!0),Fe=le(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ge,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,V.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),M(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,b,Ne);for(let Me=0;Me<6;Me++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)nt(V.__webglFramebuffer[Me][Re],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Re);else nt(V.__webglFramebuffer[Me],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);D(b,Ne)&&I(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const Me=T.texture;for(let Re=0,O=Me.length;Re<O;Re++){const Ee=Me[Re],xe=i.get(Ee);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),Ye(n.TEXTURE_2D,Ee,Ne),nt(V.__webglFramebuffer,T,Ee,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),D(Ee,Ne)&&I(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?Me=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,ae.__webglTexture),Ye(Me,b,Ne),o&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)nt(V.__webglFramebuffer[Re],T,b,n.COLOR_ATTACHMENT0,Me,Re);else nt(V.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,Me,0);D(b,Ne)&&I(Me),t.unbindTexture()}T.depthBuffer&&W(T)}function ce(T){const b=A(T)||o,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0,oe=V.length;ae<oe;ae++){const ue=V[ae];if(D(ue,b)){const Ne=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(ue).__webglTexture;t.bindTexture(Ne,Me),I(Ne),t.unbindTexture()}}}function pe(T){if(o&&T.samples>0&&de(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,ae=T.height;let oe=n.COLOR_BUFFER_BIT;const ue=[],Ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(T),Re=T.isWebGLMultipleRenderTargets===!0;if(Re)for(let O=0;O<b.length;O++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let O=0;O<b.length;O++){ue.push(n.COLOR_ATTACHMENT0+O),T.depthBuffer&&ue.push(Ne);const Ee=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Ee===!1&&(T.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[O]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),Re){const xe=i.get(b[O]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,V,ae,0,0,V,ae,oe,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let O=0;O<b.length;O++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,Me.__webglColorRenderbuffer[O]);const Ee=i.get(b[O]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function le(T){return Math.min(h,T.samples)}function de(T){const b=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(T){const b=a.render.frame;x.get(T)!==b&&(x.set(T,b),T.update())}function Oe(T,b){const V=T.colorSpace,ae=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===au||V!==ln&&V!==jn&&(wt.getTransfer(V)===kt?o===!1?e.has("EXT_sRGB")===!0&&ae===Xn?(T.format=au,T.minFilter=Qt,T.generateMipmaps=!1):b=eg.sRGBToLinear(b):(ae!==Xn||oe!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}this.allocateTextureUnit=fe,this.resetTextureUnits=J,this.setTexture2D=ve,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=Ae,this.rebindTextures=te,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=de}function pw(n,e,t){const i=t.isWebGL2;function r(s,a=jn){let o;const l=wt.getTransfer(a);if(s===ur)return n.UNSIGNED_BYTE;if(s===Wm)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Xm)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Nb)return n.BYTE;if(s===Ub)return n.SHORT;if(s===Ou)return n.UNSIGNED_SHORT;if(s===Vm)return n.INT;if(s===sr)return n.UNSIGNED_INT;if(s===$n)return n.FLOAT;if(s===Hi)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ob)return n.ALPHA;if(s===Xn)return n.RGBA;if(s===Fb)return n.LUMINANCE;if(s===Bb)return n.LUMINANCE_ALPHA;if(s===Hr)return n.DEPTH_COMPONENT;if(s===qs)return n.DEPTH_STENCIL;if(s===au)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===kb)return n.RED;if(s===jm)return n.RED_INTEGER;if(s===Hb)return n.RG;if(s===$m)return n.RG_INTEGER;if(s===qm)return n.RGBA_INTEGER;if(s===oc||s===lc||s===cc||s===uc)if(l===kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===oc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===oc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Of||s===Ff||s===Bf||s===kf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Of)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ff)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zb)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hf||s===zf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Hf)return l===kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===zf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gf||s===Vf||s===Wf||s===Xf||s===jf||s===$f||s===qf||s===Yf||s===Kf||s===Zf||s===Jf||s===Qf||s===ed||s===td)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Gf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$f)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qf)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ed)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===td)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hc||s===nd||s===id)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===hc)return l===kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===id)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gb||s===rd||s===sd||s===ad)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===hc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===rd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ad)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===kr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class mw extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let ar=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const gw={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _w extends pn{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Hr,u!==Hr&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hr&&(i=sr),i===void 0&&u===qs&&(i=kr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vw extends Kr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,x=null;const v=t.getContextAttributes();let g=null,p=null;const w=[],S=[],A=new dn;A.layers.enable(1),A.viewport=new Ut;const P=new dn;P.layers.enable(2),P.viewport=new Ut;const D=[A,P],I=new mw;I.layers.enable(1),I.layers.enable(2);let H=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=w[X];return ne===void 0&&(ne=new Nc,w[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=w[X];return ne===void 0&&(ne=new Nc,w[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=w[X];return ne===void 0&&(ne=new Nc,w[X]=ne),ne.getHandSpace()};function L(X){const ne=S.indexOf(X.inputSource);if(ne===-1)return;const Ae=w[ne];Ae!==void 0&&(Ae.update(X.inputSource,X.frame,c||a),Ae.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",me);for(let X=0;X<w.length;X++){const ne=S[X];ne!==null&&(S[X]=null,w[X].disconnect(ne))}H=null,E=null,e.setRenderTarget(g),m=null,f=null,h=null,r=null,p=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",me),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),p=new Xr(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,Ae=null,Pe=null;v.depth&&(Pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?qs:Hr,Ae=v.stencil?kr:sr);const Be={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Be),r.updateRenderState({layers:[f]}),p=new Xr(f.textureWidth,f.textureHeight,{format:Xn,type:ur,depthTexture:new _w(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const je=e.properties.get(p);je.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function me(X){for(let ne=0;ne<X.removed.length;ne++){const Ae=X.removed[ne],Pe=S.indexOf(Ae);Pe>=0&&(S[Pe]=null,w[Pe].disconnect(Ae))}for(let ne=0;ne<X.added.length;ne++){const Ae=X.added[ne];let Pe=S.indexOf(Ae);if(Pe===-1){for(let je=0;je<w.length;je++)if(je>=S.length){S.push(Ae),Pe=je;break}else if(S[je]===null){S[je]=Ae,Pe=je;break}if(Pe===-1)break}const Be=w[Pe];Be&&Be.connect(Ae)}}const _e=new z,k=new z;function Y(X,ne,Ae){_e.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(Ae.matrixWorld);const Pe=_e.distanceTo(k),Be=ne.projectionMatrix.elements,je=Ae.projectionMatrix.elements,Ye=Be[14]/(Be[10]-1),$e=Be[14]/(Be[10]+1),ut=(Be[9]+1)/Be[5],Bt=(Be[9]-1)/Be[5],nt=(Be[8]-1)/Be[0],M=(je[8]+1)/je[0],F=Ye*nt,W=Ye*M,te=Pe/(-nt+M),Q=te*-nt;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Q),X.translateZ(te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const ce=Ye+te,pe=$e+te,le=F-Q,de=W+(Pe-Q),ge=ut*$e/pe*ce,Oe=Bt*$e/pe*ce;X.projectionMatrix.makePerspective(le,de,ge,Oe,ce,pe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ee(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;I.near=P.near=A.near=X.near,I.far=P.far=A.far=X.far,(H!==I.near||E!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,E=I.far);const ne=X.parent,Ae=I.cameras;ee(I,ne);for(let Pe=0;Pe<Ae.length;Pe++)ee(Ae[Pe],ne);Ae.length===2?Y(I,A,P):I.projectionMatrix.copy(A.projectionMatrix),J(X,I,ne)};function J(X,ne,Ae){Ae===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(Ae.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ks*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let fe=null;function se(X,ne){if(u=ne.getViewerPose(c||a),x=ne,u!==null){const Ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let Pe=!1;Ae.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let Be=0;Be<Ae.length;Be++){const je=Ae[Be];let Ye=null;if(m!==null)Ye=m.getViewport(je);else{const ut=h.getViewSubImage(f,je);Ye=ut.viewport,Be===0&&(e.setRenderTargetTextures(p,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(p))}let $e=D[Be];$e===void 0&&($e=new dn,$e.layers.enable(Be),$e.viewport=new Ut,D[Be]=$e),$e.matrix.fromArray(je.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(je.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Be===0&&(I.matrix.copy($e.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push($e)}}for(let Ae=0;Ae<w.length;Ae++){const Pe=S[Ae],Be=w[Ae];Pe!==null&&Be!==void 0&&Be.update(Pe,ne,c||a)}fe&&fe(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const ve=new cg;ve.setAnimationLoop(se),this.setAnimationLoop=function(X){fe=X},this.dispose=function(){}}}function xw(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ag(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,S,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,A)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,w,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(g.envMap.value=w,g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*S,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yw(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,S){const A=S.program;i.uniformBlockBinding(w,A)}function c(w,S){let A=r[w.id];A===void 0&&(x(w),A=u(w),r[w.id]=A,w.addEventListener("dispose",g));const P=S.program;i.updateUBOMapping(w,P);const D=e.render.frame;s[w.id]!==D&&(f(w),s[w.id]=D)}function u(w){const S=h();w.__bindingPointIndex=S;const A=n.createBuffer(),P=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,P,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=r[w.id],A=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,I=A.length;D<I;D++){const H=A[D];if(m(H,D,P)===!0){const E=H.__offset,L=Array.isArray(H.value)?H.value:[H.value];let Z=0;for(let me=0;me<L.length;me++){const _e=L[me],k=v(_e);typeof _e=="number"?(H.__data[0]=_e,n.bufferSubData(n.UNIFORM_BUFFER,E+Z,H.__data)):_e.isMatrix3?(H.__data[0]=_e.elements[0],H.__data[1]=_e.elements[1],H.__data[2]=_e.elements[2],H.__data[3]=_e.elements[0],H.__data[4]=_e.elements[3],H.__data[5]=_e.elements[4],H.__data[6]=_e.elements[5],H.__data[7]=_e.elements[0],H.__data[8]=_e.elements[6],H.__data[9]=_e.elements[7],H.__data[10]=_e.elements[8],H.__data[11]=_e.elements[0]):(_e.toArray(H.__data,Z),Z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,H.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,S,A){const P=w.value;if(A[S]===void 0){if(typeof P=="number")A[S]=P;else{const D=Array.isArray(P)?P:[P],I=[];for(let H=0;H<D.length;H++)I.push(D[H].clone());A[S]=I}return!0}else if(typeof P=="number"){if(A[S]!==P)return A[S]=P,!0}else{const D=Array.isArray(A[S])?A[S]:[A[S]],I=Array.isArray(P)?P:[P];for(let H=0;H<D.length;H++){const E=D[H];if(E.equals(I[H])===!1)return E.copy(I[H]),!0}}return!1}function x(w){const S=w.uniforms;let A=0;const P=16;let D=0;for(let I=0,H=S.length;I<H;I++){const E=S[I],L={boundary:0,storage:0},Z=Array.isArray(E.value)?E.value:[E.value];for(let me=0,_e=Z.length;me<_e;me++){const k=Z[me],Y=v(k);L.boundary+=Y.boundary,L.storage+=Y.storage}if(E.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=A,I>0){D=A%P;const me=P-D;D!==0&&me-L.boundary<0&&(A+=P-D,E.__offset=A)}A+=L.storage}return D=A%P,D>0&&(A+=P-D),w.__size=A,w.__cache={},this}function v(w){const S={boundary:0,storage:0};return typeof w=="number"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){const S=w.target;S.removeEventListener("dispose",g);const A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class pg{constructor(e={}){const{canvas:t=gM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,g=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const S=this;let A=!1,P=0,D=0,I=null,H=-1,E=null;const L=new Ut,Z=new Ut;let me=null;const _e=new ct(0);let k=0,Y=t.width,ee=t.height,J=1,fe=null,se=null;const ve=new Ut(0,0,Y,ee),X=new Ut(0,0,Y,ee);let ne=!1;const Ae=new Hu;let Pe=!1,Be=!1,je=null;const Ye=new mt,$e=new tt,ut=new z,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return I===null?J:1}let M=i;function F(R,q){for(let ie=0;ie<R.length;ie++){const K=R[ie],re=t.getContext(K,q);if(re!==null)return re}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uu}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),M===null){const q=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&q.shift(),M=F(q,R),M===null)throw F(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&M instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let W,te,Q,ce,pe,le,de,ge,Oe,T,b,V,ae,oe,ue,Ne,Me,Re,O,Ee,xe,Ge,Fe,Xe;function We(){W=new PT(M),te=new TT(M,W,e),W.init(te),Ge=new pw(M,W,te),Q=new fw(M,W,te),ce=new NT(M),pe=new JA,le=new dw(M,W,Q,pe,te,Ge,ce),de=new wT(S),ge=new LT(S),Oe=new WM(M,te),Fe=new ST(M,W,Oe,te),T=new IT(M,Oe,ce,Fe),b=new BT(M,T,Oe,ce),O=new FT(M,te,le),Ne=new AT(pe),V=new ZA(S,de,ge,W,te,Fe,Ne),ae=new xw(S,pe),oe=new ew,ue=new aw(W,te),Re=new MT(S,de,ge,Q,b,f,l),Me=new hw(S,b,te),Xe=new yw(M,ce,te,Q),Ee=new ET(M,W,ce,te),xe=new DT(M,W,ce,te),ce.programs=V.programs,S.capabilities=te,S.extensions=W,S.properties=pe,S.renderLists=oe,S.shadowMap=Me,S.state=Q,S.info=ce}We();const N=new vw(S,M);this.xr=N,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const R=W.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=W.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(Y,ee,!1))},this.getSize=function(R){return R.set(Y,ee)},this.setSize=function(R,q,ie=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,ee=q,t.width=Math.floor(R*J),t.height=Math.floor(q*J),ie===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Y*J,ee*J).floor()},this.setDrawingBufferSize=function(R,q,ie){Y=R,ee=q,J=ie,t.width=Math.floor(R*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(ve)},this.setViewport=function(R,q,ie,K){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,q,ie,K),Q.viewport(L.copy(ve).multiplyScalar(J).floor())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,q,ie,K){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,q,ie,K),Q.scissor(Z.copy(X).multiplyScalar(J).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){Q.setScissorTest(ne=R)},this.setOpaqueSort=function(R){fe=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(R=!0,q=!0,ie=!0){let K=0;if(R){let re=!1;if(I!==null){const He=I.texture.format;re=He===qm||He===$m||He===jm}if(re){const He=I.texture.type,qe=He===ur||He===sr||He===Ou||He===kr||He===Wm||He===Xm,Qe=Re.getClearColor(),et=Re.getClearAlpha(),ot=Qe.r,Je=Qe.g,st=Qe.b;qe?(m[0]=ot,m[1]=Je,m[2]=st,m[3]=et,M.clearBufferuiv(M.COLOR,0,m)):(x[0]=ot,x[1]=Je,x[2]=st,x[3]=et,M.clearBufferiv(M.COLOR,0,x))}else K|=M.COLOR_BUFFER_BIT}q&&(K|=M.DEPTH_BUFFER_BIT),ie&&(K|=M.STENCIL_BUFFER_BIT),M.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),oe.dispose(),ue.dispose(),pe.dispose(),de.dispose(),ge.dispose(),b.dispose(),Fe.dispose(),Xe.dispose(),V.dispose(),N.dispose(),N.removeEventListener("sessionstart",It),N.removeEventListener("sessionend",Gn),je&&(je.dispose(),je=null),cn.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=ce.autoReset,q=Me.enabled,ie=Me.autoUpdate,K=Me.needsUpdate,re=Me.type;We(),ce.autoReset=R,Me.enabled=q,Me.autoUpdate=ie,Me.needsUpdate=K,Me.type=re}function Ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Le(R){const q=R.target;q.removeEventListener("dispose",Le),ye(q)}function ye(R){Ve(R),pe.remove(R)}function Ve(R){const q=pe.get(R).programs;q!==void 0&&(q.forEach(function(ie){V.releaseProgram(ie)}),R.isShaderMaterial&&V.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ie,K,re,He){q===null&&(q=Bt);const qe=re.isMesh&&re.matrixWorld.determinant()<0,Qe=yl(R,q,ie,K,re);Q.setMaterial(K,qe);let et=ie.index,ot=1;if(K.wireframe===!0){if(et=T.getWireframeAttribute(ie),et===void 0)return;ot=2}const Je=ie.drawRange,st=ie.attributes.position;let Ht=Je.start*ot,Vt=(Je.start+Je.count)*ot;He!==null&&(Ht=Math.max(Ht,He.start*ot),Vt=Math.min(Vt,(He.start+He.count)*ot)),et!==null?(Ht=Math.max(Ht,0),Vt=Math.min(Vt,et.count)):st!=null&&(Ht=Math.max(Ht,0),Vt=Math.min(Vt,st.count));const Cn=Vt-Ht;if(Cn<0||Cn===1/0)return;Fe.setup(re,K,Qe,ie,et);let Zn,zt=Ee;if(et!==null&&(Zn=Oe.get(et),zt=xe,zt.setIndex(Zn)),re.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*nt()),zt.setMode(M.LINES)):zt.setMode(M.TRIANGLES);else if(re.isLine){let it=K.linewidth;it===void 0&&(it=1),Q.setLineWidth(it*nt()),re.isLineSegments?zt.setMode(M.LINES):re.isLineLoop?zt.setMode(M.LINE_LOOP):zt.setMode(M.LINE_STRIP)}else re.isPoints?zt.setMode(M.POINTS):re.isSprite&&zt.setMode(M.TRIANGLES);if(re.isInstancedMesh)zt.renderInstances(Ht,Cn,re.count);else if(ie.isInstancedBufferGeometry){const it=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,yr=Math.min(ie.instanceCount,it);zt.renderInstances(Ht,Cn,yr)}else zt.render(Ht,Cn)},this.compile=function(R,q){function ie(K,re,He){K.transparent===!0&&K.side===pi&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,Qr(K,re,He),K.side=Gi,K.needsUpdate=!0,Qr(K,re,He),K.side=pi):Qr(K,re,He)}g=ue.get(R),g.init(),w.push(g),R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(S._useLegacyLights),R.traverse(function(K){const re=K.material;if(re)if(Array.isArray(re))for(let He=0;He<re.length;He++){const qe=re[He];ie(qe,R,K)}else ie(re,R,K)}),w.pop(),g=null};let Ze=null;function Xt(R){Ze&&Ze(R)}function It(){cn.stop()}function Gn(){cn.start()}const cn=new cg;cn.setAnimationLoop(Xt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(R){Ze=R,N.setAnimationLoop(R),R===null?cn.stop():cn.start()},N.addEventListener("sessionstart",It),N.addEventListener("sessionend",Gn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(q),q=N.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,q,I),g=ue.get(R,w.length),g.init(),w.push(g),Ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ae.setFromProjectionMatrix(Ye),Be=this.localClippingEnabled,Pe=Ne.init(this.clippingPlanes,Be),v=oe.get(R,p.length),v.init(),p.push(v),Wa(R,q,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(fe,se),this.info.render.frame++,Pe===!0&&Ne.beginShadows();const ie=g.state.shadowsArray;if(Me.render(ie,R,q),Pe===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Re.render(v,R),g.setupLights(S._useLegacyLights),q.isArrayCamera){const K=q.cameras;for(let re=0,He=K.length;re<He;re++){const qe=K[re];sa(v,R,qe,qe.viewport)}}else sa(v,R,q);I!==null&&(le.updateMultisampleRenderTarget(I),le.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(S,R,q),Fe.resetDefaultState(),H=-1,E=null,w.pop(),w.length>0?g=w[w.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Wa(R,q,ie,K){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ae.intersectsSprite(R)){K&&ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ye);const qe=b.update(R),Qe=R.material;Qe.visible&&v.push(R,qe,Qe,ie,ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ae.intersectsObject(R))){const qe=b.update(R),Qe=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ut.copy(R.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ut.copy(qe.boundingSphere.center)),ut.applyMatrix4(R.matrixWorld).applyMatrix4(Ye)),Array.isArray(Qe)){const et=qe.groups;for(let ot=0,Je=et.length;ot<Je;ot++){const st=et[ot],Ht=Qe[st.materialIndex];Ht&&Ht.visible&&v.push(R,qe,Ht,ie,ut.z,st)}}else Qe.visible&&v.push(R,qe,Qe,ie,ut.z,null)}}const He=R.children;for(let qe=0,Qe=He.length;qe<Qe;qe++)Wa(He[qe],q,ie,K)}function sa(R,q,ie,K){const re=R.opaque,He=R.transmissive,qe=R.transparent;g.setupLightsView(ie),Pe===!0&&Ne.setGlobalState(S.clippingPlanes,ie),He.length>0&&Xa(re,He,q,ie),K&&Q.viewport(L.copy(K)),re.length>0&&Jr(re,q,ie),He.length>0&&Jr(He,q,ie),qe.length>0&&Jr(qe,q,ie),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Xa(R,q,ie,K){const re=te.isWebGL2;je===null&&(je=new Xr(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")?Hi:ur,minFilter:mr,samples:re?4:0})),S.getDrawingBufferSize($e),re?je.setSize($e.x,$e.y):je.setSize(il($e.x),il($e.y));const He=S.getRenderTarget();S.setRenderTarget(je),S.getClearColor(_e),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear();const qe=S.toneMapping;S.toneMapping=cr,Jr(R,ie,K),le.updateMultisampleRenderTarget(je),le.updateRenderTargetMipmap(je);let Qe=!1;for(let et=0,ot=q.length;et<ot;et++){const Je=q[et],st=Je.object,Ht=Je.geometry,Vt=Je.material,Cn=Je.group;if(Vt.side===pi&&st.layers.test(K.layers)){const Zn=Vt.side;Vt.side=Dn,Vt.needsUpdate=!0,ja(st,ie,K,Ht,Vt,Cn),Vt.side=Zn,Vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(le.updateMultisampleRenderTarget(je),le.updateRenderTargetMipmap(je)),S.setRenderTarget(He),S.setClearColor(_e,k),S.toneMapping=qe}function Jr(R,q,ie){const K=q.isScene===!0?q.overrideMaterial:null;for(let re=0,He=R.length;re<He;re++){const qe=R[re],Qe=qe.object,et=qe.geometry,ot=K===null?qe.material:K,Je=qe.group;Qe.layers.test(ie.layers)&&ja(Qe,q,ie,et,ot,Je)}}function ja(R,q,ie,K,re,He){R.onBeforeRender(S,q,ie,K,re,He),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(S,q,ie,K,R,He),re.transparent===!0&&re.side===pi&&re.forceSinglePass===!1?(re.side=Dn,re.needsUpdate=!0,S.renderBufferDirect(ie,q,K,re,R,He),re.side=Gi,re.needsUpdate=!0,S.renderBufferDirect(ie,q,K,re,R,He),re.side=pi):S.renderBufferDirect(ie,q,K,re,R,He),R.onAfterRender(S,q,ie,K,re,He)}function Qr(R,q,ie){q.isScene!==!0&&(q=Bt);const K=pe.get(R),re=g.state.lights,He=g.state.shadowsArray,qe=re.state.version,Qe=V.getParameters(R,re.state,He,q,ie),et=V.getProgramCacheKey(Qe);let ot=K.programs;K.environment=R.isMeshStandardMaterial?q.environment:null,K.fog=q.fog,K.envMap=(R.isMeshStandardMaterial?ge:de).get(R.envMap||K.environment),ot===void 0&&(R.addEventListener("dispose",Le),ot=new Map,K.programs=ot);let Je=ot.get(et);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===qe)return xr(R,Qe),Je}else Qe.uniforms=V.getUniforms(R),R.onBuild(ie,Qe,S),R.onBeforeCompile(Qe,S),Je=V.acquireProgram(Qe,et),ot.set(et,Je),K.uniforms=Qe.uniforms;const st=K.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=Ne.uniform),xr(R,Qe),K.needsLights=bl(R),K.lightsStateVersion=qe,K.needsLights&&(st.ambientLightColor.value=re.state.ambient,st.lightProbe.value=re.state.probe,st.directionalLights.value=re.state.directional,st.directionalLightShadows.value=re.state.directionalShadow,st.spotLights.value=re.state.spot,st.spotLightShadows.value=re.state.spotShadow,st.rectAreaLights.value=re.state.rectArea,st.ltc_1.value=re.state.rectAreaLTC1,st.ltc_2.value=re.state.rectAreaLTC2,st.pointLights.value=re.state.point,st.pointLightShadows.value=re.state.pointShadow,st.hemisphereLights.value=re.state.hemi,st.directionalShadowMap.value=re.state.directionalShadowMap,st.directionalShadowMatrix.value=re.state.directionalShadowMatrix,st.spotShadowMap.value=re.state.spotShadowMap,st.spotLightMatrix.value=re.state.spotLightMatrix,st.spotLightMap.value=re.state.spotLightMap,st.pointShadowMap.value=re.state.pointShadowMap,st.pointShadowMatrix.value=re.state.pointShadowMatrix);const Ht=Je.getUniforms(),Vt=Go.seqWithValue(Ht.seq,st);return K.currentProgram=Je,K.uniformsList=Vt,Je}function xr(R,q){const ie=pe.get(R);ie.outputColorSpace=q.outputColorSpace,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function yl(R,q,ie,K,re){q.isScene!==!0&&(q=Bt),le.resetTextureUnits();const He=q.fog,qe=K.isMeshStandardMaterial?q.environment:null,Qe=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ln,et=(K.isMeshStandardMaterial?ge:de).get(K.envMap||qe),ot=K.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!ie.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),st=!!ie.morphAttributes.position,Ht=!!ie.morphAttributes.normal,Vt=!!ie.morphAttributes.color;let Cn=cr;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Cn=S.toneMapping);const Zn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,zt=Zn!==void 0?Zn.length:0,it=pe.get(K),yr=g.state.lights;if(Pe===!0&&(Be===!0||R!==E)){const bn=R===E&&K.id===H;Ne.setState(K,R,bn)}let Dt=!1;K.version===it.__version?(it.needsLights&&it.lightsStateVersion!==yr.state.version||it.outputColorSpace!==Qe||re.isInstancedMesh&&it.instancing===!1||!re.isInstancedMesh&&it.instancing===!0||re.isSkinnedMesh&&it.skinning===!1||!re.isSkinnedMesh&&it.skinning===!0||re.isInstancedMesh&&it.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&it.instancingColor===!1&&re.instanceColor!==null||it.envMap!==et||K.fog===!0&&it.fog!==He||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ne.numPlanes||it.numIntersection!==Ne.numIntersection)||it.vertexAlphas!==ot||it.vertexTangents!==Je||it.morphTargets!==st||it.morphNormals!==Ht||it.morphColors!==Vt||it.toneMapping!==Cn||te.isWebGL2===!0&&it.morphTargetsCount!==zt)&&(Dt=!0):(Dt=!0,it.__version=K.version);let Ei=it.currentProgram;Dt===!0&&(Ei=Qr(K,q,re));let qa=!1,br=!1,aa=!1;const un=Ei.getUniforms(),ci=it.uniforms;if(Q.useProgram(Ei.program)&&(qa=!0,br=!0,aa=!0),K.id!==H&&(H=K.id,br=!0),qa||E!==R){un.setValue(M,"projectionMatrix",R.projectionMatrix),un.setValue(M,"viewMatrix",R.matrixWorldInverse);const bn=un.map.cameraPosition;bn!==void 0&&bn.setValue(M,ut.setFromMatrixPosition(R.matrixWorld)),te.logarithmicDepthBuffer&&un.setValue(M,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&un.setValue(M,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,br=!0,aa=!0)}if(re.isSkinnedMesh){un.setOptional(M,re,"bindMatrix"),un.setOptional(M,re,"bindMatrixInverse");const bn=re.skeleton;bn&&(te.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),un.setValue(M,"boneTexture",bn.boneTexture,le),un.setValue(M,"boneTextureSize",bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const es=ie.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0&&te.isWebGL2===!0)&&O.update(re,ie,Ei),(br||it.receiveShadow!==re.receiveShadow)&&(it.receiveShadow=re.receiveShadow,un.setValue(M,"receiveShadow",re.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ci.envMap.value=et,ci.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),br&&(un.setValue(M,"toneMappingExposure",S.toneMappingExposure),it.needsLights&&$a(ci,aa),He&&K.fog===!0&&ae.refreshFogUniforms(ci,He),ae.refreshMaterialUniforms(ci,K,J,ee,je),Go.upload(M,it.uniformsList,ci,le)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Go.upload(M,it.uniformsList,ci,le),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&un.setValue(M,"center",re.center),un.setValue(M,"modelViewMatrix",re.modelViewMatrix),un.setValue(M,"normalMatrix",re.normalMatrix),un.setValue(M,"modelMatrix",re.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const bn=K.uniformsGroups;for(let oa=0,Ml=bn.length;oa<Ml;oa++)if(te.isWebGL2){const Ya=bn[oa];Xe.update(Ya,Ei),Xe.bind(Ya,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function $a(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function bl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,q,ie){pe.get(R.texture).__webglTexture=q,pe.get(R.depthTexture).__webglTexture=ie;const K=pe.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=ie===void 0,K.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){const ie=pe.get(R);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ie=0){I=R,P=q,D=ie;let K=!0,re=null,He=!1,qe=!1;if(R){const et=pe.get(R);et.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(M.FRAMEBUFFER,null),K=!1):et.__webglFramebuffer===void 0?le.setupRenderTarget(R):et.__hasExternalTextures&&le.rebindTextures(R,pe.get(R.texture).__webglTexture,pe.get(R.depthTexture).__webglTexture);const ot=R.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(qe=!0);const Je=pe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?re=Je[q][ie]:re=Je[q],He=!0):te.isWebGL2&&R.samples>0&&le.useMultisampledRTT(R)===!1?re=pe.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?re=Je[ie]:re=Je,L.copy(R.viewport),Z.copy(R.scissor),me=R.scissorTest}else L.copy(ve).multiplyScalar(J).floor(),Z.copy(X).multiplyScalar(J).floor(),me=ne;if(Q.bindFramebuffer(M.FRAMEBUFFER,re)&&te.drawBuffers&&K&&Q.drawBuffers(R,re),Q.viewport(L),Q.scissor(Z),Q.setScissorTest(me),He){const et=pe.get(R.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+q,et.__webglTexture,ie)}else if(qe){const et=pe.get(R.texture),ot=q||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,et.__webglTexture,ie||0,ot)}H=-1},this.readRenderTargetPixels=function(R,q,ie,K,re,He,qe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe){Q.bindFramebuffer(M.FRAMEBUFFER,Qe);try{const et=R.texture,ot=et.format,Je=et.type;if(ot!==Xn&&Ge.convert(ot)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=Je===Hi&&(W.has("EXT_color_buffer_half_float")||te.isWebGL2&&W.has("EXT_color_buffer_float"));if(Je!==ur&&Ge.convert(Je)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===$n&&(te.isWebGL2||W.has("OES_texture_float")||W.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-K&&ie>=0&&ie<=R.height-re&&M.readPixels(q,ie,K,re,Ge.convert(ot),Ge.convert(Je),He)}finally{const et=I!==null?pe.get(I).__webglFramebuffer:null;Q.bindFramebuffer(M.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(R,q,ie=0){const K=Math.pow(2,-ie),re=Math.floor(q.image.width*K),He=Math.floor(q.image.height*K);le.setTexture2D(q,0),M.copyTexSubImage2D(M.TEXTURE_2D,ie,0,0,R.x,R.y,re,He),Q.unbindTexture()},this.copyTextureToTexture=function(R,q,ie,K=0){const re=q.image.width,He=q.image.height,qe=Ge.convert(ie.format),Qe=Ge.convert(ie.type);le.setTexture2D(ie,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,ie.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,ie.unpackAlignment),q.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,K,R.x,R.y,re,He,qe,Qe,q.image.data):q.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,K,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,qe,q.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,K,R.x,R.y,qe,Qe,q.image),K===0&&ie.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ie,K,re=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=R.max.x-R.min.x+1,qe=R.max.y-R.min.y+1,Qe=R.max.z-R.min.z+1,et=Ge.convert(K.format),ot=Ge.convert(K.type);let Je;if(K.isData3DTexture)le.setTexture3D(K,0),Je=M.TEXTURE_3D;else if(K.isDataArrayTexture)le.setTexture2DArray(K,0),Je=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,K.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,K.unpackAlignment);const st=M.getParameter(M.UNPACK_ROW_LENGTH),Ht=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Vt=M.getParameter(M.UNPACK_SKIP_PIXELS),Cn=M.getParameter(M.UNPACK_SKIP_ROWS),Zn=M.getParameter(M.UNPACK_SKIP_IMAGES),zt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,zt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,zt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,R.min.x),M.pixelStorei(M.UNPACK_SKIP_ROWS,R.min.y),M.pixelStorei(M.UNPACK_SKIP_IMAGES,R.min.z),ie.isDataTexture||ie.isData3DTexture?M.texSubImage3D(Je,re,q.x,q.y,q.z,He,qe,Qe,et,ot,zt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),M.compressedTexSubImage3D(Je,re,q.x,q.y,q.z,He,qe,Qe,et,zt.data)):M.texSubImage3D(Je,re,q.x,q.y,q.z,He,qe,Qe,et,ot,zt),M.pixelStorei(M.UNPACK_ROW_LENGTH,st),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ht),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Vt),M.pixelStorei(M.UNPACK_SKIP_ROWS,Cn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Zn),re===0&&K.generateMipmaps&&M.generateMipmap(Je),Q.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?le.setTextureCube(R,0):R.isData3DTexture?le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?le.setTexture2DArray(R,0):le.setTexture2D(R,0),Q.unbindTexture()},this.resetState=function(){P=0,D=0,I=null,Q.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fu?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===gl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?zr:Km}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zr?jt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bw extends pg{}bw.prototype.isWebGL1Renderer=!0;class Mw extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Sw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=su,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new z;class Wu{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kd=new z,Zd=new Ut,Jd=new Ut,Ew=new z,Qd=new mt,Rs=new z,Uc=new Mi,ep=new mt,Oc=new ta;class Tw extends qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)Rs.fromBufferAttribute(t,i),this.applyBoneTransform(i,Rs),this.boundingBox.expandByPoint(Rs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)Rs.fromBufferAttribute(t,i),this.applyBoneTransform(i,Rs),this.boundingSphere.expandByPoint(Rs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uc.copy(this.boundingSphere),Uc.applyMatrix4(r),e.ray.intersectsSphere(Uc)!==!1&&(ep.copy(r).invert(),Oc.copy(e.ray).applyMatrix4(ep),!(this.boundingBox!==null&&Oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Zd.fromBufferAttribute(r.attributes.skinIndex,e),Jd.fromBufferAttribute(r.attributes.skinWeight,e),Kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Jd.getComponent(s);if(a!==0){const o=Zd.getComponent(s);Qd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Ew.copy(Kd).applyMatrix4(Qd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class mg extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gg extends pn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=an,u=an,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tp=new mt,Aw=new mt;class Xu{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Aw;tp.multiplyMatrices(o,t[s]),tp.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Xu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Jm(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new gg(t,e,e,Xn,$n);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new mg),this.bones.push(a),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class np extends wn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new mt,ip=new mt,Lo=[],rp=new bi,ww=new mt,va=new qn,xa=new Mi;class Rw extends qn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new np(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ww)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),rp.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(rp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),xa.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Cs),ip.multiplyMatrices(i,Cs),va.matrixWorld=ip,va.raycast(e,Lo);for(let a=0,o=Lo.length;a<o;a++){const l=Lo[a];l.instanceId=s,l.object=this,t.push(l)}Lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new np(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _g extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sp=new z,ap=new z,op=new mt,Fc=new ta,Po=new Mi;class ju extends Gt{constructor(e=new li,t=new _g){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)sp.fromBufferAttribute(t,r-1),ap.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=sp.distanceTo(ap);e.setAttribute("lineDistance",new ai(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;op.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(op);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new z,u=new z,h=new z,f=new z,m=this.isLineSegments?2:1,x=i.index,g=i.attributes.position;if(x!==null){const p=Math.max(0,a.start),w=Math.min(x.count,a.start+a.count);for(let S=p,A=w-1;S<A;S+=m){const P=x.getX(S),D=x.getX(S+1);if(c.fromBufferAttribute(g,P),u.fromBufferAttribute(g,D),Fc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(f);H<e.near||H>e.far||t.push({distance:H,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let S=p,A=w-1;S<A;S+=m){if(c.fromBufferAttribute(g,S),u.fromBufferAttribute(g,S+1),Fc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const lp=new z,cp=new z;class Cw extends ju{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)lp.fromBufferAttribute(t,r),cp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lp.distanceTo(cp);e.setAttribute("lineDistance",new ai(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lw extends ju{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $u extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const up=new mt,cu=new ta,Io=new Mi,Do=new z;class vg extends Gt{constructor(e=new li,t=new $u){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;up.copy(r).invert(),cu.copy(e.ray).applyMatrix4(up);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=f,v=m;x<v;x++){const g=c.getX(x);Do.fromBufferAttribute(h,g),hp(Do,g,l,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,v=m;x<v;x++)Do.fromBufferAttribute(h,x),hp(Do,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hp(n,e,t,i,r,s,a){const o=cu.distanceSqToPoint(n);if(o<t){const l=new z;cu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class qu extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zm,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vr extends qu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function No(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Pw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Iw(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function fp(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function xg(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Va{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dw extends Va{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:od,endingEnd:od}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ld:s=e,o=2*t-i;break;case cd:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ld:a=e,l=2*i-t;break;case cd:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(i-t)/(r-t),v=x*x,g=v*x,p=-f*g+2*f*v-f*x,w=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*x+1,S=(-1-m)*g+(1.5+m)*v+.5*x,A=m*g-m*v;for(let P=0;P!==o;++P)s[P]=p*a[u+P]+w*a[c+P]+S*a[l+P]+A*a[h+P];return s}}class Nw extends Va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class Uw extends Va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Si{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Uw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fa:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Pw(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*i,f=h-i,m=h+i;for(let x=0;x!==i;++x){const v=t[h+x];if(v!==t[f+x]||v!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,f=a*i;for(let m=0;m!==i;++m)t[f+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Ys;class ia extends Si{}ia.prototype.ValueTypeName="bool";ia.prototype.ValueBufferType=Array;ia.prototype.DefaultInterpolation=Fa;ia.prototype.InterpolantFactoryMethodLinear=void 0;ia.prototype.InterpolantFactoryMethodSmooth=void 0;class yg extends Si{}yg.prototype.ValueTypeName="color";class Js extends Si{}Js.prototype.ValueTypeName="number";class Ow extends Va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)xi.slerpFlat(s,0,a,c-o,a,c,l);return s}}class $r extends Si{InterpolantFactoryMethodLinear(e){return new Ow(this.times,this.values,this.getValueSize(),e)}}$r.prototype.ValueTypeName="quaternion";$r.prototype.DefaultInterpolation=Ys;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class ra extends Si{}ra.prototype.ValueTypeName="string";ra.prototype.ValueBufferType=Array;ra.prototype.DefaultInterpolation=Fa;ra.prototype.InterpolantFactoryMethodLinear=void 0;ra.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Si{}Qs.prototype.ValueTypeName="vector";class Fw{constructor(e,t=-1,i,r=Vb){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(kw(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Si.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Iw(l);l=fp(l,1,u),c=fp(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Js(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,m,x,v){if(m.length!==0){const g=[],p=[];xg(m,g,p,x),g.length!==0&&v.push(new h(f,g,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let v=0;v<f[x].morphTargets.length;v++)m[f[x].morphTargets[v]]=-1;for(const v in m){const g=[],p=[];for(let w=0;w!==f[x].morphTargets.length;++w){const S=f[x];g.push(S.time),p.push(S.morphTarget===v?1:0)}r.push(new Js(".morphTargetInfluence["+v+"]",g,p))}l=m.length*a}else{const m=".bones["+t[h].name+"]";i(Qs,m+".position",f,"pos",r),i($r,m+".quaternion",f,"rot",r),i(Qs,m+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bw(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return Qs;case"color":return yg;case"quaternion":return $r;case"bool":case"boolean":return ia;case"string":return ra}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function kw(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bw(n.type);if(n.times===void 0){const t=[],i=[];xg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ea={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Hw{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const zw=new Hw;class Zr{constructor(e){this.manager=e!==void 0?e:zw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class Gw extends Error{constructor(e,t){super(e),this.response=t}}class Yu extends Zr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ea.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:r});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,x=m!==0;let v=0;const g=new ReadableStream({start(p){w();function w(){h.read().then(({done:S,value:A})=>{if(S)p.close();else{v+=A.byteLength;const P=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:m});for(let D=0,I=u.length;D<I;D++){const H=u[D];H.onProgress&&H.onProgress(P)}p.enqueue(A),w()}})}}});return new Response(g)}else throw new Gw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{ea.add(e,c);const u=Ni[e];delete Ni[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vw extends Zr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ea.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ba("img");function l(){u(),ea.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Ww extends Zr{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new gg,o=new Yu(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:In,a.wrapT=c.wrapT!==void 0?c.wrapT:In,a.magFilter=c.magFilter!==void 0?c.magFilter:Qt,a.minFilter=c.minFilter!==void 0?c.minFilter:Qt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=mr),c.mipmapCount===1&&(a.minFilter=Qt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,r),a}}class Xw extends Zr{constructor(e){super(e)}load(e,t,i,r){const s=new pn,a=new Vw(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class xl extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Bc=new mt,dp=new z,pp=new z;class Ku{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hu,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(dp),pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pp),t.updateMatrixWorld(),Bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jw extends Ku{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ks*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $w extends xl{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new jw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mp=new mt,ya=new z,kc=new z;class qw extends Ku{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),kc.copy(i.position),kc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kc),i.updateMatrixWorld(),r.makeTranslation(-ya.x,-ya.y,-ya.z),mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp)}}class Yw extends xl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new qw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kw extends Ku{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zw extends xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Kw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jw extends xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uu{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qw extends Zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ea.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ea.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class e1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gp(){return(typeof performance>"u"?Date:performance).now()}const Zu="\\[\\]\\.:\\/",t1=new RegExp("["+Zu+"]","g"),Ju="[^"+Zu+"]",n1="[^"+Zu.replace("\\.","")+"]",i1=/((?:WC+[\/:])*)/.source.replace("WC",Ju),r1=/(WCOD+)?/.source.replace("WCOD",n1),s1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),a1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),o1=new RegExp("^"+i1+r1+s1+a1+"$"),l1=["material","materials","bones","map"];class c1{constructor(e,t,i){const r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ct{constructor(e,t,i){this.path=t,this.parsedPath=i||Ct.parseTrackName(t),this.node=Ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ct.Composite(e,t,i):new Ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t1,"")}static parseTrackName(e){const t=o1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);l1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ct.Composite=c1;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class u1{constructor(e,t,i=0,r=1/0){this.ray=new ta(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ku,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return hu(e,this,i,t),i.sort(_p),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hu(e[r],this,i,t);return i.sort(_p),i}}function _p(n,e){return n.distance-e.distance}function hu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)hu(r[s],e,t,!0)}}class vp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(on(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);function xp(n,e){if(e===Wb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ru||e===Ym){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===ru)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class h1 extends Zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new g1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new R1(t)})}load(e,t,i,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=uu.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Yu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bg){try{a[xt.KHR_BINARY_GLTF]=new C1(e)}catch(h){r&&r(h);return}s=JSON.parse(a[xt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new G1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:a[h]=new p1;break;case xt.KHR_DRACO_MESH_COMPRESSION:a[h]=new L1(s,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:a[h]=new P1;break;case xt.KHR_MESH_QUANTIZATION:a[h]=new I1;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function f1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class d1{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ct(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ln);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zw(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yw(u),c.distance=h;break;case"spot":c=new $w(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,rr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class p1{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Or}extendParams(e,t,i){const r=[];e.color=new ct(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ln),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,jt))}return Promise.all(r)}}class m1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class g1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:vr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(o,o)}return Promise.all(s)}}class _1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:vr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class v1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:vr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],ln)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,jt)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class x1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:vr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class y1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:vr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(o[0],o[1],o[2],ln),Promise.all(s)}}class b1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:vr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class M1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:vr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(o[0],o[1],o[2],ln),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,jt)),Promise.all(s)}}class S1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:vr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class E1{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class T1{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class A1{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class w1{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,f,r.mode,r.filter),m})})}else return null}}class R1{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,m=[];for(const x of h){const v=new mt,g=new z,p=new xi,w=new z(1,1,1),S=new Rw(x.geometry,x.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,A),l.SCALE&&w.fromBufferAttribute(l.SCALE,A),S.setMatrixAt(A,v.compose(g,p,w));for(const A in l)A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&x.geometry.setAttribute(A,l[A]);Gt.prototype.copy.call(S,x),this.parser.assignFinalMaterial(S),m.push(S)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const bg="glTF",ba=12,yp={JSON:1313821514,BIN:5130562};class C1{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ba),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ba,s=new DataView(e,ba);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===yp.JSON){const c=new Uint8Array(e,ba+a,o);this.content=i.decode(c)}else if(l===yp.BIN){const c=ba+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class L1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=fu[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=fu[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[e.attributes[u]],m=Gs[f.componentType];c[h]=m.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){r.decodeDracoFile(u,function(f){for(const m in f.attributes){const x=f.attributes[m],v=l[m];v!==void 0&&(x.normalized=v)}h(f)},o,c)})})}}class P1{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class I1{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class Mg extends Va{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(i-t)/u,f=h*h,m=f*h,x=e*c,v=x-c,g=-2*m+3*f,p=m-f,w=1-g,S=p-f+h;for(let A=0;A!==o;A++){const P=a[v+A+o],D=a[v+A+l]*u,I=a[x+A+o],H=a[x+A]*u;s[A]=w*P+S*D+g*I+p*H}return s}}const D1=new xi;class N1 extends Mg{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return D1.fromArray(s).normalize().toArray(s),s}}const Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bp={9728:an,9729:Qt,9984:iu,9985:Gm,9986:zo,9987:mr},Mp={33071:In,33648:Jo,10497:$s},Hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U1={CUBICSPLINE:void 0,LINEAR:Ys,STEP:Fa},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function O1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new qu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),n.DefaultMaterial}function Pr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function rr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function F1(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function B1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function k1(n){let e;const t=n.extensions&&n.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gc(t.attributes):e=n.indices+":"+Gc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Gc(n.targets[i]);return e}function Gc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function du(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function H1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const z1=new mt;class G1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new f1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new Xw(this.options.manager):this.textureLoader=new Qw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Pr(s,o,r),rr(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(uu.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Hc[r.type],o=Gs[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new wn(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Hc[r.type],c=Gs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0;let v,g;if(m&&m!==h){const p=Math.floor(f/m),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let S=t.cache.get(w);S||(v=new c(o,p*m,r.count*m/u),S=new Sw(v,m/u),t.cache.add(w,S)),g=new Wu(S,l,f%m/u,x)}else o===null?v=new c(r.count*l):v=new c(o,f,r.count*l),g=new wn(v,l,x);if(r.sparse!==void 0){const p=Hc.SCALAR,w=Gs[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,A=r.sparse.values.byteOffset||0,P=new w(a[1],S,r.sparse.count*p),D=new c(a[2],A,r.sparse.count*l);o!==null&&(g=new wn(g.array.slice(),g.itemSize,g.normalized));for(let I=0,H=P.length;I<H;I++){const E=P[I];if(g.setX(E,D[I*l]),l>=2&&g.setY(E,D[I*l+1]),l>=3&&g.setZ(E,D[I*l+2]),l>=4&&g.setW(E,D[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=bp[f.magFilter]||Qt,u.minFilter=bp[f.minFilter]||mr,u.wrapS=Mp[f.wrapS]||$s,u.wrapT=Mp[f.wrapT]||$s,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(v){const g=new pn(v);g.needsUpdate=!0,f(g)}),t.load(uu.resolveURL(h,s.path),x,void 0,m)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||H1(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[xt.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new $u,_i.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new _g,_i.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return qu}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){const h=r[xt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new ct(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],ln),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,jt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=pi);const u=s.alphaMode||zc.OPAQUE;if(u===zc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===zc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Or&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new tt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Or&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Or){const h=s.emissiveFactor;o.emissive=new ct().setRGB(h[0],h[1],h[2],ln)}return s.emissiveTexture!==void 0&&a!==Or&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,jt)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),rr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Pr(r,h,s),h})}createUniqueName(e){const t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Sp(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=k1(c),h=r[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Sp(new li,c,t),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?O1(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,x=u.length;m<x;m++){const v=u[m],g=a[m];let p;const w=c[m];if(g.mode===Wn.TRIANGLES||g.mode===Wn.TRIANGLE_STRIP||g.mode===Wn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Tw(v,w):new qn(v,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Wn.TRIANGLE_STRIP?p.geometry=xp(p.geometry,Ym):g.mode===Wn.TRIANGLE_FAN&&(p.geometry=xp(p.geometry,ru));else if(g.mode===Wn.LINES)p=new Cw(v,w);else if(g.mode===Wn.LINE_STRIP)p=new ju(v,w);else if(g.mode===Wn.LINE_LOOP)p=new Lw(v,w);else if(g.mode===Wn.POINTS)p=new vg(v,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&B1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),rr(p,s),g.extensions&&Pr(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let m=0,x=h.length;m<x;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return s.extensions&&Pr(r,h[0],s),h[0];const f=new ar;s.extensions&&Pr(r,f,s),t.associations.set(f,{meshes:e});for(let m=0,x=h.length;m<x;m++)f.add(h[m]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new dn(Wr.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Gu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),rr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new mt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xu(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const m=r.channels[h],x=r.samplers[m.sampler],v=m.target,g=v.node,p=r.parameters!==void 0?r.parameters[x.input]:x.input,w=r.parameters!==void 0?r.parameters[x.output]:x.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",w)),c.push(x),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],m=h[1],x=h[2],v=h[3],g=h[4],p=[];for(let w=0,S=f.length;w<S;w++){const A=f[w],P=m[w],D=x[w],I=v[w],H=g[w];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const E=i._createAnimationTracks(A,P,D,I,H);if(E)for(let L=0;L<E.length;L++)p.push(E[L])}return new Fw(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(f,z1)});for(let m=0,x=h.length;m<x;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new mg:c.length>1?u=new ar:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),rr(u,s),s.extensions&&Pr(i,u,s),s.matrix!==void 0){const h=new mt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new ar;i.name&&(s.name=r.createUniqueName(i.name)),rr(s,i),i.extensions&&Pr(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,m]of r.associations)(f instanceof _i||f instanceof pn)&&h.set(f,m);return u.traverse(f=>{const m=r.associations.get(f);m!=null&&h.set(f,m)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];er[s.path]===er.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(er[s.path]){case er.weights:c=Js;break;case er.rotation:c=$r;break;case er.position:case er.scale:c=Qs;break;default:switch(i.itemSize){case 1:c=Js;break;case 2:case 3:default:c=Qs;break}break}const u=r.interpolation!==void 0?U1[r.interpolation]:Ys,h=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){const x=new c(l[f]+"."+er[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=du(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof $r?N1:Mg;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function V1(n,e,t){const i=e.attributes,r=new bi;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),o.normalized){const u=du(Gs[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new z,l=new z;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,x=f.max;if(m!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),f.normalized){const v=du(Gs[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new Mi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function Sp(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=fu[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return wt.workingColorSpace!==ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),rr(n,e),V1(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?F1(n,e.targets,t):n})}class W1 extends Ww{constructor(e){super(e),this.type=Hi}parse(e){const a=function(H,E){switch(H){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(E||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(E||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(E||""))}},u=`
`,h=function(H,E,L){E=E||1024;let me=H.pos,_e=-1,k=0,Y="",ee=String.fromCharCode.apply(null,new Uint16Array(H.subarray(me,me+128)));for(;0>(_e=ee.indexOf(u))&&k<E&&me<H.byteLength;)Y+=ee,k+=ee.length,me+=128,ee+=String.fromCharCode.apply(null,new Uint16Array(H.subarray(me,me+128)));return-1<_e?(H.pos+=k+_e+1,Y+ee.slice(0,_e)):!1},f=function(H){const E=/^#\?(\S+)/,L=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,Z=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,me=/^\s*FORMAT=(\S+)\s*$/,_e=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,k={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Y,ee;for((H.pos>=H.byteLength||!(Y=h(H)))&&a(1,"no header found"),(ee=Y.match(E))||a(3,"bad initial token"),k.valid|=1,k.programtype=ee[1],k.string+=Y+`
`;Y=h(H),Y!==!1;){if(k.string+=Y+`
`,Y.charAt(0)==="#"){k.comments+=Y+`
`;continue}if((ee=Y.match(L))&&(k.gamma=parseFloat(ee[1])),(ee=Y.match(Z))&&(k.exposure=parseFloat(ee[1])),(ee=Y.match(me))&&(k.valid|=2,k.format=ee[1]),(ee=Y.match(_e))&&(k.valid|=4,k.height=parseInt(ee[1],10),k.width=parseInt(ee[2],10)),k.valid&2&&k.valid&4)break}return k.valid&2||a(3,"missing format specifier"),k.valid&4||a(3,"missing image size specifier"),k},m=function(H,E,L){const Z=E;if(Z<8||Z>32767||H[0]!==2||H[1]!==2||H[2]&128)return new Uint8Array(H);Z!==(H[2]<<8|H[3])&&a(3,"wrong scanline width");const me=new Uint8Array(4*E*L);me.length||a(4,"unable to allocate buffer space");let _e=0,k=0;const Y=4*Z,ee=new Uint8Array(4),J=new Uint8Array(Y);let fe=L;for(;fe>0&&k<H.byteLength;){k+4>H.byteLength&&a(1),ee[0]=H[k++],ee[1]=H[k++],ee[2]=H[k++],ee[3]=H[k++],(ee[0]!=2||ee[1]!=2||(ee[2]<<8|ee[3])!=Z)&&a(3,"bad rgbe scanline format");let se=0,ve;for(;se<Y&&k<H.byteLength;){ve=H[k++];const ne=ve>128;if(ne&&(ve-=128),(ve===0||se+ve>Y)&&a(3,"bad scanline data"),ne){const Ae=H[k++];for(let Pe=0;Pe<ve;Pe++)J[se++]=Ae}else J.set(H.subarray(k,k+ve),se),se+=ve,k+=ve}const X=Z;for(let ne=0;ne<X;ne++){let Ae=0;me[_e]=J[ne+Ae],Ae+=Z,me[_e+1]=J[ne+Ae],Ae+=Z,me[_e+2]=J[ne+Ae],Ae+=Z,me[_e+3]=J[ne+Ae],_e+=4}fe--}return me},x=function(H,E,L,Z){const me=H[E+3],_e=Math.pow(2,me-128)/255;L[Z+0]=H[E+0]*_e,L[Z+1]=H[E+1]*_e,L[Z+2]=H[E+2]*_e,L[Z+3]=1},v=function(H,E,L,Z){const me=H[E+3],_e=Math.pow(2,me-128)/255;L[Z+0]=_o.toHalfFloat(Math.min(H[E+0]*_e,65504)),L[Z+1]=_o.toHalfFloat(Math.min(H[E+1]*_e,65504)),L[Z+2]=_o.toHalfFloat(Math.min(H[E+2]*_e,65504)),L[Z+3]=_o.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const p=f(g),w=p.width,S=p.height,A=m(g.subarray(g.pos),w,S);let P,D,I;switch(this.type){case $n:I=A.length/4;const H=new Float32Array(I*4);for(let L=0;L<I;L++)x(A,L*4,H,L*4);P=H,D=$n;break;case Hi:I=A.length/4;const E=new Uint16Array(I*4);for(let L=0;L<I;L++)v(A,L*4,E,L*4);P=E,D=Hi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:w,height:S,data:P,header:p.string,gamma:p.gamma,exposure:p.exposure,type:D}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(a,o){switch(a.type){case $n:case Hi:a.colorSpace=ln,a.minFilter=Qt,a.magFilter=Qt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,i,r)}}const Ep={type:"change"},Vc={type:"start"},Tp={type:"end"},Uo=new ta,Ap=new ir,X1=Math.cos(70*Wr.DEG2RAD);class j1 extends Kr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",b),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ep),i.update(),s=r.NONE},this.update=function(){const O=new z,Ee=new xi().setFromUnitVectors(e.up,new z(0,1,0)),xe=Ee.clone().invert(),Ge=new z,Fe=new xi,Xe=new z,We=2*Math.PI;return function(Ce=null){const we=i.object.position;O.copy(we).sub(i.target),O.applyQuaternion(Ee),o.setFromVector3(O),i.autoRotate&&s===r.NONE&&Z(E(Ce)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ie=i.minAzimuthAngle,Le=i.maxAzimuthAngle;isFinite(Ie)&&isFinite(Le)&&(Ie<-Math.PI?Ie+=We:Ie>Math.PI&&(Ie-=We),Le<-Math.PI?Le+=We:Le>Math.PI&&(Le-=We),Ie<=Le?o.theta=Math.max(Ie,Math.min(Le,o.theta)):o.theta=o.theta>(Ie+Le)/2?Math.max(Ie,o.theta):Math.min(Le,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&D||i.object.isOrthographicCamera?o.radius=se(o.radius):o.radius=se(o.radius*c),O.setFromSpherical(o),O.applyQuaternion(xe),we.copy(i.target).add(O),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ye=!1;if(i.zoomToCursor&&D){let Ve=null;if(i.object.isPerspectiveCamera){const Ze=O.length();Ve=se(Ze*c);const Xt=Ze-Ve;i.object.position.addScaledVector(A,Xt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ze=new z(P.x,P.y,0);Ze.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ye=!0;const Xt=new z(P.x,P.y,0);Xt.unproject(i.object),i.object.position.sub(Xt).add(Ze),i.object.updateMatrixWorld(),Ve=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ve!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ve).add(i.object.position):(Uo.origin.copy(i.object.position),Uo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Uo.direction))<X1?e.lookAt(i.target):(Ap.setFromNormalAndCoplanarPoint(i.object.up,i.target),Uo.intersectPlane(Ap,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ye=!0);return c=1,D=!1,ye||Ge.distanceToSquared(i.object.position)>a||8*(1-Fe.dot(i.object.quaternion))>a||Xe.distanceToSquared(i.target)>0?(i.dispatchEvent(Ep),Ge.copy(i.object.position),Fe.copy(i.object.quaternion),Xe.copy(i.target),ye=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",oe),i.domElement.removeEventListener("pointerdown",pe),i.domElement.removeEventListener("pointercancel",de),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",le),i.domElement.removeEventListener("pointerup",de),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",b),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new vp,l=new vp;let c=1;const u=new z,h=new tt,f=new tt,m=new tt,x=new tt,v=new tt,g=new tt,p=new tt,w=new tt,S=new tt,A=new z,P=new tt;let D=!1;const I=[],H={};function E(O){return O!==null?2*Math.PI/60*i.autoRotateSpeed*O:2*Math.PI/60/60*i.autoRotateSpeed}function L(){return Math.pow(.95,i.zoomSpeed)}function Z(O){l.theta-=O}function me(O){l.phi-=O}const _e=function(){const O=new z;return function(xe,Ge){O.setFromMatrixColumn(Ge,0),O.multiplyScalar(-xe),u.add(O)}}(),k=function(){const O=new z;return function(xe,Ge){i.screenSpacePanning===!0?O.setFromMatrixColumn(Ge,1):(O.setFromMatrixColumn(Ge,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(xe),u.add(O)}}(),Y=function(){const O=new z;return function(xe,Ge){const Fe=i.domElement;if(i.object.isPerspectiveCamera){const Xe=i.object.position;O.copy(Xe).sub(i.target);let We=O.length();We*=Math.tan(i.object.fov/2*Math.PI/180),_e(2*xe*We/Fe.clientHeight,i.object.matrix),k(2*Ge*We/Fe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(_e(xe*(i.object.right-i.object.left)/i.object.zoom/Fe.clientWidth,i.object.matrix),k(Ge*(i.object.top-i.object.bottom)/i.object.zoom/Fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ee(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function fe(O){if(!i.zoomToCursor)return;D=!0;const Ee=i.domElement.getBoundingClientRect(),xe=O.clientX-Ee.left,Ge=O.clientY-Ee.top,Fe=Ee.width,Xe=Ee.height;P.x=xe/Fe*2-1,P.y=-(Ge/Xe)*2+1,A.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function se(O){return Math.max(i.minDistance,Math.min(i.maxDistance,O))}function ve(O){h.set(O.clientX,O.clientY)}function X(O){fe(O),p.set(O.clientX,O.clientY)}function ne(O){x.set(O.clientX,O.clientY)}function Ae(O){f.set(O.clientX,O.clientY),m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const Ee=i.domElement;Z(2*Math.PI*m.x/Ee.clientHeight),me(2*Math.PI*m.y/Ee.clientHeight),h.copy(f),i.update()}function Pe(O){w.set(O.clientX,O.clientY),S.subVectors(w,p),S.y>0?ee(L()):S.y<0&&J(L()),p.copy(w),i.update()}function Be(O){v.set(O.clientX,O.clientY),g.subVectors(v,x).multiplyScalar(i.panSpeed),Y(g.x,g.y),x.copy(v),i.update()}function je(O){fe(O),O.deltaY<0?J(L()):O.deltaY>0&&ee(L()),i.update()}function Ye(O){let Ee=!1;switch(O.code){case i.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),Ee=!0;break;case i.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),Ee=!0;break;case i.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),Ee=!0;break;case i.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),Ee=!0;break}Ee&&(O.preventDefault(),i.update())}function $e(){if(I.length===1)h.set(I[0].pageX,I[0].pageY);else{const O=.5*(I[0].pageX+I[1].pageX),Ee=.5*(I[0].pageY+I[1].pageY);h.set(O,Ee)}}function ut(){if(I.length===1)x.set(I[0].pageX,I[0].pageY);else{const O=.5*(I[0].pageX+I[1].pageX),Ee=.5*(I[0].pageY+I[1].pageY);x.set(O,Ee)}}function Bt(){const O=I[0].pageX-I[1].pageX,Ee=I[0].pageY-I[1].pageY,xe=Math.sqrt(O*O+Ee*Ee);p.set(0,xe)}function nt(){i.enableZoom&&Bt(),i.enablePan&&ut()}function M(){i.enableZoom&&Bt(),i.enableRotate&&$e()}function F(O){if(I.length==1)f.set(O.pageX,O.pageY);else{const xe=Re(O),Ge=.5*(O.pageX+xe.x),Fe=.5*(O.pageY+xe.y);f.set(Ge,Fe)}m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const Ee=i.domElement;Z(2*Math.PI*m.x/Ee.clientHeight),me(2*Math.PI*m.y/Ee.clientHeight),h.copy(f)}function W(O){if(I.length===1)v.set(O.pageX,O.pageY);else{const Ee=Re(O),xe=.5*(O.pageX+Ee.x),Ge=.5*(O.pageY+Ee.y);v.set(xe,Ge)}g.subVectors(v,x).multiplyScalar(i.panSpeed),Y(g.x,g.y),x.copy(v)}function te(O){const Ee=Re(O),xe=O.pageX-Ee.x,Ge=O.pageY-Ee.y,Fe=Math.sqrt(xe*xe+Ge*Ge);w.set(0,Fe),S.set(0,Math.pow(w.y/p.y,i.zoomSpeed)),ee(S.y),p.copy(w)}function Q(O){i.enableZoom&&te(O),i.enablePan&&W(O)}function ce(O){i.enableZoom&&te(O),i.enableRotate&&F(O)}function pe(O){i.enabled!==!1&&(I.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",le),i.domElement.addEventListener("pointerup",de)),ue(O),O.pointerType==="touch"?V(O):ge(O))}function le(O){i.enabled!==!1&&(O.pointerType==="touch"?ae(O):Oe(O))}function de(O){Ne(O),I.length===0&&(i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",le),i.domElement.removeEventListener("pointerup",de)),i.dispatchEvent(Tp),s=r.NONE}function ge(O){let Ee;switch(O.button){case 0:Ee=i.mouseButtons.LEFT;break;case 1:Ee=i.mouseButtons.MIDDLE;break;case 2:Ee=i.mouseButtons.RIGHT;break;default:Ee=-1}switch(Ee){case us.DOLLY:if(i.enableZoom===!1)return;X(O),s=r.DOLLY;break;case us.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;ne(O),s=r.PAN}else{if(i.enableRotate===!1)return;ve(O),s=r.ROTATE}break;case us.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;ve(O),s=r.ROTATE}else{if(i.enablePan===!1)return;ne(O),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Vc)}function Oe(O){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Ae(O);break;case r.DOLLY:if(i.enableZoom===!1)return;Pe(O);break;case r.PAN:if(i.enablePan===!1)return;Be(O);break}}function T(O){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(O.preventDefault(),i.dispatchEvent(Vc),je(O),i.dispatchEvent(Tp))}function b(O){i.enabled===!1||i.enablePan===!1||Ye(O)}function V(O){switch(Me(O),I.length){case 1:switch(i.touches.ONE){case hs.ROTATE:if(i.enableRotate===!1)return;$e(),s=r.TOUCH_ROTATE;break;case hs.PAN:if(i.enablePan===!1)return;ut(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case hs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;nt(),s=r.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;M(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Vc)}function ae(O){switch(Me(O),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;F(O),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;W(O),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Q(O),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ce(O),i.update();break;default:s=r.NONE}}function oe(O){i.enabled!==!1&&O.preventDefault()}function ue(O){I.push(O)}function Ne(O){delete H[O.pointerId];for(let Ee=0;Ee<I.length;Ee++)if(I[Ee].pointerId==O.pointerId){I.splice(Ee,1);return}}function Me(O){let Ee=H[O.pointerId];Ee===void 0&&(Ee=new tt,H[O.pointerId]=Ee),Ee.set(O.pageX,O.pageY)}function Re(O){const Ee=O.pointerId===I[0].pointerId?I[1]:I[0];return H[Ee.pointerId]}i.domElement.addEventListener("contextmenu",oe),i.domElement.addEventListener("pointerdown",pe),i.domElement.addEventListener("pointercancel",de),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}class $1 extends Gt{constructor(e,t,i,r){super(),this.particleCount=e,this.radius=t,this.camera=i,this.controls=r,this.particles=new ar,this.initParticles(),this.add(this.particles),this.previousCameraPosition=new z().copy(i.position),r.addEventListener("change",this.onControlsChange.bind(this))}initParticles(){const e=new li,t=[],i=[];for(let s=0;s<this.particleCount;s++){const a=new z((Math.random()*2-1)*this.radius,(Math.random()*2-1)*this.radius,(Math.random()*2-1)*this.radius);a.length()>this.radius&&a.normalize().multiplyScalar(this.radius),t.push(a.x,a.y,a.z),i.push((Math.random()-.5)*.1,-Math.random()*.02,(Math.random()-.5)*.1)}e.setAttribute("position",new ai(t,3)),e.setAttribute("velocity",new ai(i,3));const r=new $u({color:16777215,size:.06});this.particleSystem=new vg(e,r),this.particles.add(this.particleSystem),this.stirUpParticles(.1)}onControlsChange(){const t=this.camera.position.clone().sub(this.previousCameraPosition).length()*.05;this.stirUpParticles(t),this.previousCameraPosition.copy(this.camera.position)}stirUpParticles(e){const t=this.particleSystem.geometry.attributes.position,i=this.particleSystem.geometry.attributes.velocity;for(let r=0;r<t.count;r++)i.setY(r,i.getY(r)+e*(Math.random()-.5)),i.setX(r,i.getX(r)+(Math.random()-.5)*.001),i.setZ(r,i.getZ(r)+(Math.random()-.5)*.001),i.getY(r)>.1&&i.setY(r,.1);i.needsUpdate=!0}update(){const e=this.particleSystem.geometry.attributes.position,t=this.particleSystem.geometry.attributes.velocity;for(let i=0;i<this.particleCount;i++){const r=e.getX(i),s=e.getY(i),a=e.getZ(i),o=new z(t.getX(i),t.getY(i),t.getZ(i));let l=new z(r,s,a).add(o);l.length()>this.radius&&l.normalize().multiplyScalar(this.radius),e.setXYZ(i,l.x,l.y,l.z);const c=-this.radius*.995;l.y<c?(t.setY(i,0),l.setY(c)):t.setY(i,t.getY(i)-5e-5)}e.needsUpdate=!0}}class q1{constructor(){this.isReady=!1,this.readyListeners=[],this.sceneObjectsByID=new Map,this.sceneObjectsByClass=new Map,this.cameraToUse=null,this.buildThreeScene(),this.animate()}async buildThreeScene(){this.scene=new Mw,this.renderer=new pg({alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.camera=new dn(75,window.innerWidth/window.innerHeight,.1,1e3);const e=.75;this.camera.position.z=10*e,this.camera.position.y=7*e,this.cameraToUse=this.camera,this.pullCamera=new dn(75,window.innerWidth/window.innerHeight,.1,1e3),this.pullCamera.position.z=10,this.pullCamera.position.y=7,this.capsuleCamera=new dn(75,window.innerWidth/window.innerHeight,.1,1e3),this.capsuleCamera.position.z=5,this.capsuleCamera.position.y=0,this.controls=new j1(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.update(),await this.loadReflectionMap(),await this.loadSceneAssets(),this.parseSceneObjects(),this.applyMaterialTweaks(),this.setUpLights(),this.buildParticleSystem(),this.setSceneReady()}async loadReflectionMap(e="venice_sunset_1k.hdr"){const t=new W1;this.reflectionMap=await new Promise((i,r)=>{t.load(`assets/hdr/${e}`,i,void 0,r)}),this.reflectionMap.mapping=Zo,this.scene.environment=this.reflectionMap}async loadSceneAssets(){const e=new h1;this.gltfScene=await new Promise((t,i)=>{e.load("assets/models/snow_globe_scene.glb",t,void 0,i)}),this.scene.add(this.gltfScene.scene)}buildParticleSystem(){const e=this.$("#GlobeGlass"),t=new z;e.getWorldPosition(t);const r=new bi().setFromObject(e).getSize(new z).length()/3.5,s=2e3;this.particleSystem=new $1(s,r,this.camera,this.controls),this.scene.add(this.particleSystem),this.particleSystem.position.copy(t)}parseSceneObjects(){const e=t=>{t.children.forEach(i=>{(i.userData.name?i.userData.name:i.name).split(" ").forEach(a=>{if(a.startsWith("#")){const o=a.substring(1);this.sceneObjectsByID.set(o,i)}else if(a.startsWith(".")){const o=a.substring(1);this.sceneObjectsByClass.has(o)||this.sceneObjectsByClass.set(o,[]),this.sceneObjectsByClass.get(o).push(i)}}),e(i)})};e(this.gltfScene.scene)}applyMaterialTweaks(){const e=this.$("#GlobeBase").children[0].material;e.envMap=this.reflectionMap,e.envMapIntensity=1,e.roughness=.2,e.needsUpdate=!0;const t=this.$("#GlobeBase").children[1].material;t.envMap=null,t.roughness=10,t.envMapIntensity=0;const i=this.$("#GlobeGlass").material;i.envMap=this.reflectionMap,i.envMapIntensity=20;const r=.05;i.color.r=r,i.color.g=r,i.color.b=r,i.roughness=0,i.needsUpdate=!0;const s=this.$("#WindShield").material;s.roughness=0,s.envMapIntensity=1,s.opacity=.5,this.render()}$(e){if(e.startsWith("#")){const t=e.substring(1);return this.sceneObjectsByID.get(t)}else if(e.startsWith(".")){const t=e.substring(1);return this.sceneObjectsByClass.get(t)}else return null}setUpLights(){const e=new Jw(16777215,2);this.scene.add(e)}printObjects(e=!1){console.log("Objects by ID:"),this.sceneObjectsByID.forEach((t,i)=>{e==!1?console.log(`#${i}`):console.log(`#${i}`,t)}),console.log("Objects by Class:"),this.sceneObjectsByClass.forEach((t,i)=>{e==!1?console.log(`.${i}`):console.log(`.${i}`,t)})}mountSceneToDOM(e){this.ifOrWhenSceneIsReady(()=>{this.renderContainer=e,e.appendChild(this.renderer.domElement),this.buildResizeObserver(e)})}buildResizeObserver(e){this.resizeObserver=new ResizeObserver(t=>{for(let i of t){const r=i.contentRect;this.renderer.setSize(r.width,r.height),this.camera.aspect=r.width/r.height,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),this.pullCamera.aspect=r.width/r.height,this.pullCamera.updateProjectionMatrix(),this.capsuleCamera.aspect=r.width/r.height,this.capsuleCamera.updateProjectionMatrix()}}),this.resizeObserver.observe(e)}ifOrWhenSceneIsReady(e){this.isReady?e():this.readyListeners.push(e)}setSceneReady(){this.isReady=!0,this.readyListeners.forEach(e=>e())}animate(){requestAnimationFrame(()=>this.animate()),this.particleSystem&&this.particleSystem.update(),this.render()}setCamera(e){this.cameraToUse=e}render(){this.renderer.render(this.scene,this.cameraToUse)}}class Sg{constructor(e){this.threeScene=e,this.enabled=!0,this.threeScene.ifOrWhenSceneIsReady(this.onReady.bind(this)),this.raycaster=new u1,this.mouse=new tt,this.listeners=[],this.baseFilter=null,this.filter=null}onReady(){this.scene=this.threeScene.scene,this.camera=this.threeScene.camera,this.renderer=this.threeScene.renderer,this.container=this.threeScene.renderContainer,this.container.addEventListener("click",this.onClick.bind(this))}onClick(e){if(!this.enabled)return;const t=this.container.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.baseObject?this.baseObject.children:this.scene.children,r=this.raycaster.intersectObjects(i),s=this.filter?r.filter(a=>this.filter.includes(a.object)):r;if(s.length>0)for(const a of this.listeners)a(s[0])}setBaseFilter(e){this.baseFilter=e}setFilter(e){Array.isArray(e)?this.filter=e.reduce((t,i)=>(t.push(...i.children),t),[]):this.filter=[e]}onHit(e){if(typeof e=="function")this.listeners.push(e);else throw new Error("Callback must be a function.")}}class Y1{constructor(e){this.toastLength=e*1e3,this.currentMessage=Jt({message:"",title:""}),this.showToast=Jt(!1),this.messageQueue=[],this.timerId=null}showToastMsg(e,t=""){const i={message:e,title:t};this.showToast.value===!1?this.setCurrentMessage(i):this.messageQueue.push(i)}setCurrentMessage(e){this.currentMessage.value=e,this.showToast.value=!0,setTimeout(()=>{new Audio("assets/sfx/ding.mp3").play()},100),this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.clearCurrentMessage()},this.toastLength)}clearCurrentMessage(){this.showToast.value=!1,this.messageQueue.length>0&&setTimeout(()=>{this.setCurrentMessage(this.messageQueue.shift())},500)}}class K1{constructor(e,t,i){this.threeScene=t,this.presentObjs=e,this.onComplete=i,this.currentStep=0,this.isAnimating=!1,this.unwrappingSound=new Audio("assets/sfx/unwrap.mp3"),this.gatchaWoosh=new Audio("assets/sfx/gatcha_woosh.mp3"),this.steps=[{key:"Bow_Off",duration:.6},{key:["Ribbon_A_1","Ribbon_A_2"],duration:[.3,.5],sequential:!0},{key:["Ribbon_B_1","Ribbon_B_2"],duration:[.3,.5],sequential:!0},{key:"Lid_Off",duration:.7},{key:"Box_Off",duration:.7}],this.buildPresentRaycaster()}buildPresentRaycaster(){this.raycaster=new Sg(this.threeScene);const e=[this.threeScene.$("#GiftBox")];this.raycaster.setFilter(e),this.raycaster.onHit(t=>{let i=t.object.userData.name;for(;!i&&(t.object=t.object.parent,i=t.object.userData.name,!!t.object.parent););i&&(i=i.split(" ")[0].replace("#","").toLowerCase(),i==="giftbox"&&this.nextStep())})}nextStep(){if(this.isAnimating||this.currentStep>=this.steps.length)return;this.isAnimating=!0,this.currentStep===this.steps.length-1&&this.zoomIn(1,()=>{}),this.unwrappingSound.currentTime=0,this.unwrappingSound.play();const e=this.steps[this.currentStep],t=i=>{const r=e.key[i],s=e.duration[i]*1e3;let a=Date.now();const o=()=>{const l=Date.now()-a,c=Math.min(l/s,1);this.presentObjs.forEach(u=>{const h=u.morphTargetDictionary[r];h!==void 0&&(u.morphTargetInfluences[h]=c)}),c<1?requestAnimationFrame(o):i+1<e.key.length?t(i+1):(this.isAnimating=!1,this.currentStep++,this.currentStep===this.steps.length&&this.onComplete&&typeof this.onComplete=="function"&&this.onComplete())};o()};if(e.sequential)t(0);else{const i=Array.isArray(e.key)?e.key:[e.key],r=Array.isArray(e.duration)?e.duration[0]*1e3:e.duration*1e3;let s=Date.now();const a=()=>{const o=Date.now()-s,l=Math.min(o/r,1);i.forEach((c,u)=>{this.presentObjs.forEach(h=>{const f=h.morphTargetDictionary[c];f!==void 0&&(h.morphTargetInfluences[f]=l)})}),l<1?requestAnimationFrame(a):(this.isAnimating=!1,this.currentStep++,this.currentStep===this.steps.length&&this.onComplete&&typeof this.onComplete=="function"&&this.onComplete())};a()}}reset(){this.currentStep=0,this.isAnimating=!1,this.presentObj.morphTargetInfluences.forEach((e,t)=>{this.presentObj.morphTargetInfluences[t]=0})}zoomIn(e,t){this.gatchaWoosh.currentTime=0,this.gatchaWoosh.play();const i=this.threeScene.camera.zoom,r=i*2,s=Date.now(),a=()=>{const l=Date.now()-s;if(l<e*1e3){const c=Wr.smoothstep(l/(e*1e3),0,1);let u=i+(r-i)*c;this.threeScene.camera.zoom=u,this.threeScene.camera.updateProjectionMatrix(),this.threeScene.controls.update(),requestAnimationFrame(a)}else this.threeScene.camera.zoom=r,this.threeScene.camera.updateProjectionMatrix(),this.threeScene.controls.update(),t&&typeof t=="function"&&t()};requestAnimationFrame(a)}}function Z1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vo={exports:{}};/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */var J1=Vo.exports,wp;function Q1(){return wp||(wp=1,function(n,e){(function(t,i){n.exports=i()})(J1,function(){for(var t=function(d,_,y){return _===void 0&&(_=0),y===void 0&&(y=1),d<_?_:d>y?y:d},i=t,r=function(d){d._clipped=!1,d._unclipped=d.slice(0);for(var _=0;_<=3;_++)_<3?((d[_]<0||d[_]>255)&&(d._clipped=!0),d[_]=i(d[_],0,255)):_===3&&(d[_]=i(d[_],0,1));return d},s={},a=0,o=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];a<o.length;a+=1){var l=o[a];s["[object "+l+"]"]=l.toLowerCase()}var c=function(d){return s[Object.prototype.toString.call(d)]||"object"},u=c,h=function(d,_){return _===void 0&&(_=null),d.length>=3?Array.prototype.slice.call(d):u(d[0])=="object"&&_?_.split("").filter(function(y){return d[0][y]!==void 0}).map(function(y){return d[0][y]}):d[0]},f=c,m=function(d){if(d.length<2)return null;var _=d.length-1;return f(d[_])=="string"?d[_].toLowerCase():null},x=Math.PI,v={clip_rgb:r,limit:t,type:c,unpack:h,last:m,PI:x,TWOPI:x*2,PITHIRD:x/3,DEG2RAD:x/180,RAD2DEG:180/x},g={format:{},autodetect:[]},p=v.last,w=v.clip_rgb,S=v.type,A=g,P=function(){for(var _=[],y=arguments.length;y--;)_[y]=arguments[y];var C=this;if(S(_[0])==="object"&&_[0].constructor&&_[0].constructor===this.constructor)return _[0];var B=p(_),G=!1;if(!B){G=!0,A.sorted||(A.autodetect=A.autodetect.sort(function(be,Ue){return Ue.p-be.p}),A.sorted=!0);for(var U=0,j=A.autodetect;U<j.length;U+=1){var $=j[U];if(B=$.test.apply($,_),B)break}}if(A.format[B]){var he=A.format[B].apply(null,G?_:_.slice(0,-1));C._rgb=w(he)}else throw new Error("unknown format: "+_);C._rgb.length===3&&C._rgb.push(1)};P.prototype.toString=function(){return S(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var D=P,I=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(I.Color,[null].concat(d)))};I.Color=D,I.version="2.4.2";var H=I,E=v.unpack,L=Math.max,Z=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=E(d,"rgb"),C=y[0],B=y[1],G=y[2];C=C/255,B=B/255,G=G/255;var U=1-L(C,L(B,G)),j=U<1?1/(1-U):0,$=(1-C-U)*j,he=(1-B-U)*j,be=(1-G-U)*j;return[$,he,be,U]},me=Z,_e=v.unpack,k=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];d=_e(d,"cmyk");var y=d[0],C=d[1],B=d[2],G=d[3],U=d.length>4?d[4]:1;return G===1?[0,0,0,U]:[y>=1?0:255*(1-y)*(1-G),C>=1?0:255*(1-C)*(1-G),B>=1?0:255*(1-B)*(1-G),U]},Y=k,ee=H,J=D,fe=g,se=v.unpack,ve=v.type,X=me;J.prototype.cmyk=function(){return X(this._rgb)},ee.cmyk=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(J,[null].concat(d,["cmyk"])))},fe.format.cmyk=Y,fe.autodetect.push({p:2,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=se(d,"cmyk"),ve(d)==="array"&&d.length===4)return"cmyk"}});var ne=v.unpack,Ae=v.last,Pe=function(d){return Math.round(d*100)/100},Be=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=ne(d,"hsla"),C=Ae(d)||"lsa";return y[0]=Pe(y[0]||0),y[1]=Pe(y[1]*100)+"%",y[2]=Pe(y[2]*100)+"%",C==="hsla"||y.length>3&&y[3]<1?(y[3]=y.length>3?y[3]:1,C="hsla"):y.length=3,C+"("+y.join(",")+")"},je=Be,Ye=v.unpack,$e=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];d=Ye(d,"rgba");var y=d[0],C=d[1],B=d[2];y/=255,C/=255,B/=255;var G=Math.min(y,C,B),U=Math.max(y,C,B),j=(U+G)/2,$,he;return U===G?($=0,he=Number.NaN):$=j<.5?(U-G)/(U+G):(U-G)/(2-U-G),y==U?he=(C-B)/(U-G):C==U?he=2+(B-y)/(U-G):B==U&&(he=4+(y-C)/(U-G)),he*=60,he<0&&(he+=360),d.length>3&&d[3]!==void 0?[he,$,j,d[3]]:[he,$,j]},ut=$e,Bt=v.unpack,nt=v.last,M=je,F=ut,W=Math.round,te=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=Bt(d,"rgba"),C=nt(d)||"rgb";return C.substr(0,3)=="hsl"?M(F(y),C):(y[0]=W(y[0]),y[1]=W(y[1]),y[2]=W(y[2]),(C==="rgba"||y.length>3&&y[3]<1)&&(y[3]=y.length>3?y[3]:1,C="rgba"),C+"("+y.slice(0,C==="rgb"?3:4).join(",")+")")},Q=te,ce=v.unpack,pe=Math.round,le=function(){for(var d,_=[],y=arguments.length;y--;)_[y]=arguments[y];_=ce(_,"hsl");var C=_[0],B=_[1],G=_[2],U,j,$;if(B===0)U=j=$=G*255;else{var he=[0,0,0],be=[0,0,0],Ue=G<.5?G*(1+B):G+B-G*B,Se=2*G-Ue,ze=C/360;he[0]=ze+1/3,he[1]=ze,he[2]=ze-1/3;for(var ke=0;ke<3;ke++)he[ke]<0&&(he[ke]+=1),he[ke]>1&&(he[ke]-=1),6*he[ke]<1?be[ke]=Se+(Ue-Se)*6*he[ke]:2*he[ke]<1?be[ke]=Ue:3*he[ke]<2?be[ke]=Se+(Ue-Se)*(2/3-he[ke])*6:be[ke]=Se;d=[pe(be[0]*255),pe(be[1]*255),pe(be[2]*255)],U=d[0],j=d[1],$=d[2]}return _.length>3?[U,j,$,_[3]]:[U,j,$,1]},de=le,ge=de,Oe=g,T=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,b=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,V=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,ae=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,oe=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,ue=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ne=Math.round,Me=function(d){d=d.toLowerCase().trim();var _;if(Oe.format.named)try{return Oe.format.named(d)}catch{}if(_=d.match(T)){for(var y=_.slice(1,4),C=0;C<3;C++)y[C]=+y[C];return y[3]=1,y}if(_=d.match(b)){for(var B=_.slice(1,5),G=0;G<4;G++)B[G]=+B[G];return B}if(_=d.match(V)){for(var U=_.slice(1,4),j=0;j<3;j++)U[j]=Ne(U[j]*2.55);return U[3]=1,U}if(_=d.match(ae)){for(var $=_.slice(1,5),he=0;he<3;he++)$[he]=Ne($[he]*2.55);return $[3]=+$[3],$}if(_=d.match(oe)){var be=_.slice(1,4);be[1]*=.01,be[2]*=.01;var Ue=ge(be);return Ue[3]=1,Ue}if(_=d.match(ue)){var Se=_.slice(1,4);Se[1]*=.01,Se[2]*=.01;var ze=ge(Se);return ze[3]=+_[4],ze}};Me.test=function(d){return T.test(d)||b.test(d)||V.test(d)||ae.test(d)||oe.test(d)||ue.test(d)};var Re=Me,O=H,Ee=D,xe=g,Ge=v.type,Fe=Q,Xe=Re;Ee.prototype.css=function(d){return Fe(this._rgb,d)},O.css=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(Ee,[null].concat(d,["css"])))},xe.format.css=Xe,xe.autodetect.push({p:5,test:function(d){for(var _=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];if(!_.length&&Ge(d)==="string"&&Xe.test(d))return"css"}});var We=D,N=H,Ce=g,we=v.unpack;Ce.format.gl=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=we(d,"rgba");return y[0]*=255,y[1]*=255,y[2]*=255,y},N.gl=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(We,[null].concat(d,["gl"])))},We.prototype.gl=function(){var d=this._rgb;return[d[0]/255,d[1]/255,d[2]/255,d[3]]};var Ie=v.unpack,Le=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=Ie(d,"rgb"),C=y[0],B=y[1],G=y[2],U=Math.min(C,B,G),j=Math.max(C,B,G),$=j-U,he=$*100/255,be=U/(255-$)*100,Ue;return $===0?Ue=Number.NaN:(C===j&&(Ue=(B-G)/$),B===j&&(Ue=2+(G-C)/$),G===j&&(Ue=4+(C-B)/$),Ue*=60,Ue<0&&(Ue+=360)),[Ue,he,be]},ye=Le,Ve=v.unpack,Ze=Math.floor,Xt=function(){for(var d,_,y,C,B,G,U=[],j=arguments.length;j--;)U[j]=arguments[j];U=Ve(U,"hcg");var $=U[0],he=U[1],be=U[2],Ue,Se,ze;be=be*255;var ke=he*255;if(he===0)Ue=Se=ze=be;else{$===360&&($=0),$>360&&($-=360),$<0&&($+=360),$/=60;var ht=Ze($),gt=$-ht,yt=be*(1-he),Mt=yt+ke*(1-gt),hn=yt+ke*gt,rn=yt+ke;switch(ht){case 0:d=[rn,hn,yt],Ue=d[0],Se=d[1],ze=d[2];break;case 1:_=[Mt,rn,yt],Ue=_[0],Se=_[1],ze=_[2];break;case 2:y=[yt,rn,hn],Ue=y[0],Se=y[1],ze=y[2];break;case 3:C=[yt,Mt,rn],Ue=C[0],Se=C[1],ze=C[2];break;case 4:B=[hn,yt,rn],Ue=B[0],Se=B[1],ze=B[2];break;case 5:G=[rn,yt,Mt],Ue=G[0],Se=G[1],ze=G[2];break}}return[Ue,Se,ze,U.length>3?U[3]:1]},It=Xt,Gn=v.unpack,cn=v.type,Wa=H,sa=D,Xa=g,Jr=ye;sa.prototype.hcg=function(){return Jr(this._rgb)},Wa.hcg=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(sa,[null].concat(d,["hcg"])))},Xa.format.hcg=It,Xa.autodetect.push({p:1,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=Gn(d,"hcg"),cn(d)==="array"&&d.length===3)return"hcg"}});var ja=v.unpack,Qr=v.last,xr=Math.round,yl=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=ja(d,"rgba"),C=y[0],B=y[1],G=y[2],U=y[3],j=Qr(d)||"auto";U===void 0&&(U=1),j==="auto"&&(j=U<1?"rgba":"rgb"),C=xr(C),B=xr(B),G=xr(G);var $=C<<16|B<<8|G,he="000000"+$.toString(16);he=he.substr(he.length-6);var be="0"+xr(U*255).toString(16);switch(be=be.substr(be.length-2),j.toLowerCase()){case"rgba":return"#"+he+be;case"argb":return"#"+be+he;default:return"#"+he}},$a=yl,bl=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,R=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,q=function(d){if(d.match(bl)){(d.length===4||d.length===7)&&(d=d.substr(1)),d.length===3&&(d=d.split(""),d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]);var _=parseInt(d,16),y=_>>16,C=_>>8&255,B=_&255;return[y,C,B,1]}if(d.match(R)){(d.length===5||d.length===9)&&(d=d.substr(1)),d.length===4&&(d=d.split(""),d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]);var G=parseInt(d,16),U=G>>24&255,j=G>>16&255,$=G>>8&255,he=Math.round((G&255)/255*100)/100;return[U,j,$,he]}throw new Error("unknown hex color: "+d)},ie=q,K=H,re=D,He=v.type,qe=g,Qe=$a;re.prototype.hex=function(d){return Qe(this._rgb,d)},K.hex=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(re,[null].concat(d,["hex"])))},qe.format.hex=ie,qe.autodetect.push({p:4,test:function(d){for(var _=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];if(!_.length&&He(d)==="string"&&[3,4,5,6,7,8,9].indexOf(d.length)>=0)return"hex"}});var et=v.unpack,ot=v.TWOPI,Je=Math.min,st=Math.sqrt,Ht=Math.acos,Vt=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=et(d,"rgb"),C=y[0],B=y[1],G=y[2];C/=255,B/=255,G/=255;var U,j=Je(C,B,G),$=(C+B+G)/3,he=$>0?1-j/$:0;return he===0?U=NaN:(U=(C-B+(C-G))/2,U/=st((C-B)*(C-B)+(C-G)*(B-G)),U=Ht(U),G>B&&(U=ot-U),U/=ot),[U*360,he,$]},Cn=Vt,Zn=v.unpack,zt=v.limit,it=v.TWOPI,yr=v.PITHIRD,Dt=Math.cos,Ei=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];d=Zn(d,"hsi");var y=d[0],C=d[1],B=d[2],G,U,j;return isNaN(y)&&(y=0),isNaN(C)&&(C=0),y>360&&(y-=360),y<0&&(y+=360),y/=360,y<1/3?(j=(1-C)/3,G=(1+C*Dt(it*y)/Dt(yr-it*y))/3,U=1-(j+G)):y<2/3?(y-=1/3,G=(1-C)/3,U=(1+C*Dt(it*y)/Dt(yr-it*y))/3,j=1-(G+U)):(y-=2/3,U=(1-C)/3,j=(1+C*Dt(it*y)/Dt(yr-it*y))/3,G=1-(U+j)),G=zt(B*G*3),U=zt(B*U*3),j=zt(B*j*3),[G*255,U*255,j*255,d.length>3?d[3]:1]},qa=Ei,br=v.unpack,aa=v.type,un=H,ci=D,es=g,bn=Cn;ci.prototype.hsi=function(){return bn(this._rgb)},un.hsi=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(ci,[null].concat(d,["hsi"])))},es.format.hsi=qa,es.autodetect.push({p:2,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=br(d,"hsi"),aa(d)==="array"&&d.length===3)return"hsi"}});var oa=v.unpack,Ml=v.type,Ya=H,eh=D,th=g,Ag=ut;eh.prototype.hsl=function(){return Ag(this._rgb)},Ya.hsl=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(eh,[null].concat(d,["hsl"])))},th.format.hsl=de,th.autodetect.push({p:2,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=oa(d,"hsl"),Ml(d)==="array"&&d.length===3)return"hsl"}});var wg=v.unpack,Rg=Math.min,Cg=Math.max,Lg=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];d=wg(d,"rgb");var y=d[0],C=d[1],B=d[2],G=Rg(y,C,B),U=Cg(y,C,B),j=U-G,$,he,be;return be=U/255,U===0?($=Number.NaN,he=0):(he=j/U,y===U&&($=(C-B)/j),C===U&&($=2+(B-y)/j),B===U&&($=4+(y-C)/j),$*=60,$<0&&($+=360)),[$,he,be]},Pg=Lg,Ig=v.unpack,Dg=Math.floor,Ng=function(){for(var d,_,y,C,B,G,U=[],j=arguments.length;j--;)U[j]=arguments[j];U=Ig(U,"hsv");var $=U[0],he=U[1],be=U[2],Ue,Se,ze;if(be*=255,he===0)Ue=Se=ze=be;else{$===360&&($=0),$>360&&($-=360),$<0&&($+=360),$/=60;var ke=Dg($),ht=$-ke,gt=be*(1-he),yt=be*(1-he*ht),Mt=be*(1-he*(1-ht));switch(ke){case 0:d=[be,Mt,gt],Ue=d[0],Se=d[1],ze=d[2];break;case 1:_=[yt,be,gt],Ue=_[0],Se=_[1],ze=_[2];break;case 2:y=[gt,be,Mt],Ue=y[0],Se=y[1],ze=y[2];break;case 3:C=[gt,yt,be],Ue=C[0],Se=C[1],ze=C[2];break;case 4:B=[Mt,gt,be],Ue=B[0],Se=B[1],ze=B[2];break;case 5:G=[be,gt,yt],Ue=G[0],Se=G[1],ze=G[2];break}}return[Ue,Se,ze,U.length>3?U[3]:1]},Ug=Ng,Og=v.unpack,Fg=v.type,Bg=H,nh=D,ih=g,kg=Pg;nh.prototype.hsv=function(){return kg(this._rgb)},Bg.hsv=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(nh,[null].concat(d,["hsv"])))},ih.format.hsv=Ug,ih.autodetect.push({p:2,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=Og(d,"hsv"),Fg(d)==="array"&&d.length===3)return"hsv"}});var Ka={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ts=Ka,Hg=v.unpack,rh=Math.pow,zg=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=Hg(d,"rgb"),C=y[0],B=y[1],G=y[2],U=Gg(C,B,G),j=U[0],$=U[1],he=U[2],be=116*$-16;return[be<0?0:be,500*(j-$),200*($-he)]},Sl=function(d){return(d/=255)<=.04045?d/12.92:rh((d+.055)/1.055,2.4)},El=function(d){return d>ts.t3?rh(d,1/3):d/ts.t2+ts.t0},Gg=function(d,_,y){d=Sl(d),_=Sl(_),y=Sl(y);var C=El((.4124564*d+.3575761*_+.1804375*y)/ts.Xn),B=El((.2126729*d+.7151522*_+.072175*y)/ts.Yn),G=El((.0193339*d+.119192*_+.9503041*y)/ts.Zn);return[C,B,G]},sh=zg,ns=Ka,Vg=v.unpack,Wg=Math.pow,Xg=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];d=Vg(d,"lab");var y=d[0],C=d[1],B=d[2],G,U,j,$,he,be;return U=(y+16)/116,G=isNaN(C)?U:U+C/500,j=isNaN(B)?U:U-B/200,U=ns.Yn*Al(U),G=ns.Xn*Al(G),j=ns.Zn*Al(j),$=Tl(3.2404542*G-1.5371385*U-.4985314*j),he=Tl(-.969266*G+1.8760108*U+.041556*j),be=Tl(.0556434*G-.2040259*U+1.0572252*j),[$,he,be,d.length>3?d[3]:1]},Tl=function(d){return 255*(d<=.00304?12.92*d:1.055*Wg(d,1/2.4)-.055)},Al=function(d){return d>ns.t1?d*d*d:ns.t2*(d-ns.t0)},ah=Xg,jg=v.unpack,$g=v.type,qg=H,oh=D,lh=g,Yg=sh;oh.prototype.lab=function(){return Yg(this._rgb)},qg.lab=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(oh,[null].concat(d,["lab"])))},lh.format.lab=ah,lh.autodetect.push({p:2,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=jg(d,"lab"),$g(d)==="array"&&d.length===3)return"lab"}});var Kg=v.unpack,Zg=v.RAD2DEG,Jg=Math.sqrt,Qg=Math.atan2,e_=Math.round,t_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=Kg(d,"lab"),C=y[0],B=y[1],G=y[2],U=Jg(B*B+G*G),j=(Qg(G,B)*Zg+360)%360;return e_(U*1e4)===0&&(j=Number.NaN),[C,U,j]},ch=t_,n_=v.unpack,i_=sh,r_=ch,s_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=n_(d,"rgb"),C=y[0],B=y[1],G=y[2],U=i_(C,B,G),j=U[0],$=U[1],he=U[2];return r_(j,$,he)},a_=s_,o_=v.unpack,l_=v.DEG2RAD,c_=Math.sin,u_=Math.cos,h_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=o_(d,"lch"),C=y[0],B=y[1],G=y[2];return isNaN(G)&&(G=0),G=G*l_,[C,u_(G)*B,c_(G)*B]},uh=h_,f_=v.unpack,d_=uh,p_=ah,m_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];d=f_(d,"lch");var y=d[0],C=d[1],B=d[2],G=d_(y,C,B),U=G[0],j=G[1],$=G[2],he=p_(U,j,$),be=he[0],Ue=he[1],Se=he[2];return[be,Ue,Se,d.length>3?d[3]:1]},hh=m_,g_=v.unpack,__=hh,v_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=g_(d,"hcl").reverse();return __.apply(void 0,y)},x_=v_,y_=v.unpack,b_=v.type,fh=H,Za=D,wl=g,dh=a_;Za.prototype.lch=function(){return dh(this._rgb)},Za.prototype.hcl=function(){return dh(this._rgb).reverse()},fh.lch=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(Za,[null].concat(d,["lch"])))},fh.hcl=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(Za,[null].concat(d,["hcl"])))},wl.format.lch=hh,wl.format.hcl=x_,["lch","hcl"].forEach(function(d){return wl.autodetect.push({p:2,test:function(){for(var _=[],y=arguments.length;y--;)_[y]=arguments[y];if(_=y_(_,d),b_(_)==="array"&&_.length===3)return d}})});var M_={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},ph=M_,S_=D,mh=g,E_=v.type,la=ph,T_=ie,A_=$a;S_.prototype.name=function(){for(var d=A_(this._rgb,"rgb"),_=0,y=Object.keys(la);_<y.length;_+=1){var C=y[_];if(la[C]===d)return C.toLowerCase()}return d},mh.format.named=function(d){if(d=d.toLowerCase(),la[d])return T_(la[d]);throw new Error("unknown color name: "+d)},mh.autodetect.push({p:5,test:function(d){for(var _=[],y=arguments.length-1;y-- >0;)_[y]=arguments[y+1];if(!_.length&&E_(d)==="string"&&la[d.toLowerCase()])return"named"}});var w_=v.unpack,R_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=w_(d,"rgb"),C=y[0],B=y[1],G=y[2];return(C<<16)+(B<<8)+G},C_=R_,L_=v.type,P_=function(d){if(L_(d)=="number"&&d>=0&&d<=16777215){var _=d>>16,y=d>>8&255,C=d&255;return[_,y,C,1]}throw new Error("unknown num color: "+d)},I_=P_,D_=H,gh=D,_h=g,N_=v.type,U_=C_;gh.prototype.num=function(){return U_(this._rgb)},D_.num=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(gh,[null].concat(d,["num"])))},_h.format.num=I_,_h.autodetect.push({p:5,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d.length===1&&N_(d[0])==="number"&&d[0]>=0&&d[0]<=16777215)return"num"}});var O_=H,Rl=D,vh=g,xh=v.unpack,yh=v.type,bh=Math.round;Rl.prototype.rgb=function(d){return d===void 0&&(d=!0),d===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(bh)},Rl.prototype.rgba=function(d){return d===void 0&&(d=!0),this._rgb.slice(0,4).map(function(_,y){return y<3?d===!1?_:bh(_):_})},O_.rgb=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(Rl,[null].concat(d,["rgb"])))},vh.format.rgb=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=xh(d,"rgba");return y[3]===void 0&&(y[3]=1),y},vh.autodetect.push({p:3,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=xh(d,"rgba"),yh(d)==="array"&&(d.length===3||d.length===4&&yh(d[3])=="number"&&d[3]>=0&&d[3]<=1))return"rgb"}});var Ja=Math.log,F_=function(d){var _=d/100,y,C,B;return _<66?(y=255,C=_<6?0:-155.25485562709179-.44596950469579133*(C=_-2)+104.49216199393888*Ja(C),B=_<20?0:-254.76935184120902+.8274096064007395*(B=_-10)+115.67994401066147*Ja(B)):(y=351.97690566805693+.114206453784165*(y=_-55)-40.25366309332127*Ja(y),C=325.4494125711974+.07943456536662342*(C=_-50)-28.0852963507957*Ja(C),B=255),[y,C,B,1]},Mh=F_,B_=Mh,k_=v.unpack,H_=Math.round,z_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];for(var y=k_(d,"rgb"),C=y[0],B=y[2],G=1e3,U=4e4,j=.4,$;U-G>j;){$=(U+G)*.5;var he=B_($);he[2]/he[0]>=B/C?U=$:G=$}return H_($)},G_=z_,Cl=H,Qa=D,Ll=g,V_=G_;Qa.prototype.temp=Qa.prototype.kelvin=Qa.prototype.temperature=function(){return V_(this._rgb)},Cl.temp=Cl.kelvin=Cl.temperature=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(Qa,[null].concat(d,["temp"])))},Ll.format.temp=Ll.format.kelvin=Ll.format.temperature=Mh;var W_=v.unpack,Pl=Math.cbrt,X_=Math.pow,j_=Math.sign,$_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=W_(d,"rgb"),C=y[0],B=y[1],G=y[2],U=[Il(C/255),Il(B/255),Il(G/255)],j=U[0],$=U[1],he=U[2],be=Pl(.4122214708*j+.5363325363*$+.0514459929*he),Ue=Pl(.2119034982*j+.6806995451*$+.1073969566*he),Se=Pl(.0883024619*j+.2817188376*$+.6299787005*he);return[.2104542553*be+.793617785*Ue-.0040720468*Se,1.9779984951*be-2.428592205*Ue+.4505937099*Se,.0259040371*be+.7827717662*Ue-.808675766*Se]},Sh=$_;function Il(d){var _=Math.abs(d);return _<.04045?d/12.92:(j_(d)||1)*X_((_+.055)/1.055,2.4)}var q_=v.unpack,eo=Math.pow,Y_=Math.sign,K_=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];d=q_(d,"lab");var y=d[0],C=d[1],B=d[2],G=eo(y+.3963377774*C+.2158037573*B,3),U=eo(y-.1055613458*C-.0638541728*B,3),j=eo(y-.0894841775*C-1.291485548*B,3);return[255*Dl(4.0767416621*G-3.3077115913*U+.2309699292*j),255*Dl(-1.2684380046*G+2.6097574011*U-.3413193965*j),255*Dl(-.0041960863*G-.7034186147*U+1.707614701*j),d.length>3?d[3]:1]},Eh=K_;function Dl(d){var _=Math.abs(d);return _>.0031308?(Y_(d)||1)*(1.055*eo(_,1/2.4)-.055):d*12.92}var Z_=v.unpack,J_=v.type,Q_=H,Th=D,Ah=g,e0=Sh;Th.prototype.oklab=function(){return e0(this._rgb)},Q_.oklab=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(Th,[null].concat(d,["oklab"])))},Ah.format.oklab=Eh,Ah.autodetect.push({p:3,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=Z_(d,"oklab"),J_(d)==="array"&&d.length===3)return"oklab"}});var t0=v.unpack,n0=Sh,i0=ch,r0=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];var y=t0(d,"rgb"),C=y[0],B=y[1],G=y[2],U=n0(C,B,G),j=U[0],$=U[1],he=U[2];return i0(j,$,he)},s0=r0,a0=v.unpack,o0=uh,l0=Eh,c0=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];d=a0(d,"lch");var y=d[0],C=d[1],B=d[2],G=o0(y,C,B),U=G[0],j=G[1],$=G[2],he=l0(U,j,$),be=he[0],Ue=he[1],Se=he[2];return[be,Ue,Se,d.length>3?d[3]:1]},u0=c0,h0=v.unpack,f0=v.type,d0=H,wh=D,Rh=g,p0=s0;wh.prototype.oklch=function(){return p0(this._rgb)},d0.oklch=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];return new(Function.prototype.bind.apply(wh,[null].concat(d,["oklch"])))},Rh.format.oklch=u0,Rh.autodetect.push({p:3,test:function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];if(d=h0(d,"oklch"),f0(d)==="array"&&d.length===3)return"oklch"}});var Ch=D,m0=v.type;Ch.prototype.alpha=function(d,_){return _===void 0&&(_=!1),d!==void 0&&m0(d)==="number"?_?(this._rgb[3]=d,this):new Ch([this._rgb[0],this._rgb[1],this._rgb[2],d],"rgb"):this._rgb[3]};var g0=D;g0.prototype.clipped=function(){return this._rgb._clipped||!1};var Mr=D,_0=Ka;Mr.prototype.darken=function(d){d===void 0&&(d=1);var _=this,y=_.lab();return y[0]-=_0.Kn*d,new Mr(y,"lab").alpha(_.alpha(),!0)},Mr.prototype.brighten=function(d){return d===void 0&&(d=1),this.darken(-d)},Mr.prototype.darker=Mr.prototype.darken,Mr.prototype.brighter=Mr.prototype.brighten;var v0=D;v0.prototype.get=function(d){var _=d.split("."),y=_[0],C=_[1],B=this[y]();if(C){var G=y.indexOf(C)-(y.substr(0,2)==="ok"?2:0);if(G>-1)return B[G];throw new Error("unknown channel "+C+" in mode "+y)}else return B};var is=D,x0=v.type,y0=Math.pow,b0=1e-7,M0=20;is.prototype.luminance=function(d){if(d!==void 0&&x0(d)==="number"){if(d===0)return new is([0,0,0,this._rgb[3]],"rgb");if(d===1)return new is([255,255,255,this._rgb[3]],"rgb");var _=this.luminance(),y="rgb",C=M0,B=function(U,j){var $=U.interpolate(j,.5,y),he=$.luminance();return Math.abs(d-he)<b0||!C--?$:he>d?B(U,$):B($,j)},G=(_>d?B(new is([0,0,0]),this):B(this,new is([255,255,255]))).rgb();return new is(G.concat([this._rgb[3]]))}return S0.apply(void 0,this._rgb.slice(0,3))};var S0=function(d,_,y){return d=Nl(d),_=Nl(_),y=Nl(y),.2126*d+.7152*_+.0722*y},Nl=function(d){return d/=255,d<=.03928?d/12.92:y0((d+.055)/1.055,2.4)},Un={},Lh=D,Ph=v.type,to=Un,Ih=function(d,_,y){y===void 0&&(y=.5);for(var C=[],B=arguments.length-3;B-- >0;)C[B]=arguments[B+3];var G=C[0]||"lrgb";if(!to[G]&&!C.length&&(G=Object.keys(to)[0]),!to[G])throw new Error("interpolation mode "+G+" is not defined");return Ph(d)!=="object"&&(d=new Lh(d)),Ph(_)!=="object"&&(_=new Lh(_)),to[G](d,_,y).alpha(d.alpha()+y*(_.alpha()-d.alpha()))},Dh=D,E0=Ih;Dh.prototype.mix=Dh.prototype.interpolate=function(d,_){_===void 0&&(_=.5);for(var y=[],C=arguments.length-2;C-- >0;)y[C]=arguments[C+2];return E0.apply(void 0,[this,d,_].concat(y))};var Nh=D;Nh.prototype.premultiply=function(d){d===void 0&&(d=!1);var _=this._rgb,y=_[3];return d?(this._rgb=[_[0]*y,_[1]*y,_[2]*y,y],this):new Nh([_[0]*y,_[1]*y,_[2]*y,y],"rgb")};var Ul=D,T0=Ka;Ul.prototype.saturate=function(d){d===void 0&&(d=1);var _=this,y=_.lch();return y[1]+=T0.Kn*d,y[1]<0&&(y[1]=0),new Ul(y,"lch").alpha(_.alpha(),!0)},Ul.prototype.desaturate=function(d){return d===void 0&&(d=1),this.saturate(-d)};var Uh=D,Oh=v.type;Uh.prototype.set=function(d,_,y){y===void 0&&(y=!1);var C=d.split("."),B=C[0],G=C[1],U=this[B]();if(G){var j=B.indexOf(G)-(B.substr(0,2)==="ok"?2:0);if(j>-1){if(Oh(_)=="string")switch(_.charAt(0)){case"+":U[j]+=+_;break;case"-":U[j]+=+_;break;case"*":U[j]*=+_.substr(1);break;case"/":U[j]/=+_.substr(1);break;default:U[j]=+_}else if(Oh(_)==="number")U[j]=_;else throw new Error("unsupported value for Color.set");var $=new Uh(U,B);return y?(this._rgb=$._rgb,this):$}throw new Error("unknown channel "+G+" in mode "+B)}else return U};var A0=D,w0=function(d,_,y){var C=d._rgb,B=_._rgb;return new A0(C[0]+y*(B[0]-C[0]),C[1]+y*(B[1]-C[1]),C[2]+y*(B[2]-C[2]),"rgb")};Un.rgb=w0;var R0=D,Ol=Math.sqrt,rs=Math.pow,C0=function(d,_,y){var C=d._rgb,B=C[0],G=C[1],U=C[2],j=_._rgb,$=j[0],he=j[1],be=j[2];return new R0(Ol(rs(B,2)*(1-y)+rs($,2)*y),Ol(rs(G,2)*(1-y)+rs(he,2)*y),Ol(rs(U,2)*(1-y)+rs(be,2)*y),"rgb")};Un.lrgb=C0;var L0=D,P0=function(d,_,y){var C=d.lab(),B=_.lab();return new L0(C[0]+y*(B[0]-C[0]),C[1]+y*(B[1]-C[1]),C[2]+y*(B[2]-C[2]),"lab")};Un.lab=P0;var Fh=D,ss=function(d,_,y,C){var B,G,U,j;C==="hsl"?(U=d.hsl(),j=_.hsl()):C==="hsv"?(U=d.hsv(),j=_.hsv()):C==="hcg"?(U=d.hcg(),j=_.hcg()):C==="hsi"?(U=d.hsi(),j=_.hsi()):C==="lch"||C==="hcl"?(C="hcl",U=d.hcl(),j=_.hcl()):C==="oklch"&&(U=d.oklch().reverse(),j=_.oklch().reverse());var $,he,be,Ue,Se,ze;(C.substr(0,1)==="h"||C==="oklch")&&(B=U,$=B[0],be=B[1],Se=B[2],G=j,he=G[0],Ue=G[1],ze=G[2]);var ke,ht,gt,yt;return!isNaN($)&&!isNaN(he)?(he>$&&he-$>180?yt=he-($+360):he<$&&$-he>180?yt=he+360-$:yt=he-$,ht=$+y*yt):isNaN($)?isNaN(he)?ht=Number.NaN:(ht=he,(Se==1||Se==0)&&C!="hsv"&&(ke=Ue)):(ht=$,(ze==1||ze==0)&&C!="hsv"&&(ke=be)),ke===void 0&&(ke=be+y*(Ue-be)),gt=Se+y*(ze-Se),C==="oklch"?new Fh([gt,ke,ht],C):new Fh([ht,ke,gt],C)},I0=ss,Bh=function(d,_,y){return I0(d,_,y,"lch")};Un.lch=Bh,Un.hcl=Bh;var D0=D,N0=function(d,_,y){var C=d.num(),B=_.num();return new D0(C+y*(B-C),"num")};Un.num=N0;var U0=ss,O0=function(d,_,y){return U0(d,_,y,"hcg")};Un.hcg=O0;var F0=ss,B0=function(d,_,y){return F0(d,_,y,"hsi")};Un.hsi=B0;var k0=ss,H0=function(d,_,y){return k0(d,_,y,"hsl")};Un.hsl=H0;var z0=ss,G0=function(d,_,y){return z0(d,_,y,"hsv")};Un.hsv=G0;var V0=D,W0=function(d,_,y){var C=d.oklab(),B=_.oklab();return new V0(C[0]+y*(B[0]-C[0]),C[1]+y*(B[1]-C[1]),C[2]+y*(B[2]-C[2]),"oklab")};Un.oklab=W0;var X0=ss,j0=function(d,_,y){return X0(d,_,y,"oklch")};Un.oklch=j0;var Fl=D,$0=v.clip_rgb,Bl=Math.pow,kl=Math.sqrt,Hl=Math.PI,kh=Math.cos,Hh=Math.sin,q0=Math.atan2,Y0=function(d,_,y){_===void 0&&(_="lrgb"),y===void 0&&(y=null);var C=d.length;y||(y=Array.from(new Array(C)).map(function(){return 1}));var B=C/y.reduce(function(ht,gt){return ht+gt});if(y.forEach(function(ht,gt){y[gt]*=B}),d=d.map(function(ht){return new Fl(ht)}),_==="lrgb")return K0(d,y);for(var G=d.shift(),U=G.get(_),j=[],$=0,he=0,be=0;be<U.length;be++)if(U[be]=(U[be]||0)*y[0],j.push(isNaN(U[be])?0:y[0]),_.charAt(be)==="h"&&!isNaN(U[be])){var Ue=U[be]/180*Hl;$+=kh(Ue)*y[0],he+=Hh(Ue)*y[0]}var Se=G.alpha()*y[0];d.forEach(function(ht,gt){var yt=ht.get(_);Se+=ht.alpha()*y[gt+1];for(var Mt=0;Mt<U.length;Mt++)if(!isNaN(yt[Mt]))if(j[Mt]+=y[gt+1],_.charAt(Mt)==="h"){var hn=yt[Mt]/180*Hl;$+=kh(hn)*y[gt+1],he+=Hh(hn)*y[gt+1]}else U[Mt]+=yt[Mt]*y[gt+1]});for(var ze=0;ze<U.length;ze++)if(_.charAt(ze)==="h"){for(var ke=q0(he/j[ze],$/j[ze])/Hl*180;ke<0;)ke+=360;for(;ke>=360;)ke-=360;U[ze]=ke}else U[ze]=U[ze]/j[ze];return Se/=C,new Fl(U,_).alpha(Se>.99999?1:Se,!0)},K0=function(d,_){for(var y=d.length,C=[0,0,0,0],B=0;B<d.length;B++){var G=d[B],U=_[B]/y,j=G._rgb;C[0]+=Bl(j[0],2)*U,C[1]+=Bl(j[1],2)*U,C[2]+=Bl(j[2],2)*U,C[3]+=j[3]*U}return C[0]=kl(C[0]),C[1]=kl(C[1]),C[2]=kl(C[2]),C[3]>.9999999&&(C[3]=1),new Fl($0(C))},Jn=H,as=v.type,Z0=Math.pow,zl=function(d){var _="rgb",y=Jn("#ccc"),C=0,B=[0,1],G=[],U=[0,0],j=!1,$=[],he=!1,be=0,Ue=1,Se=!1,ze={},ke=!0,ht=1,gt=function(Te){if(Te=Te||["#fff","#000"],Te&&as(Te)==="string"&&Jn.brewer&&Jn.brewer[Te.toLowerCase()]&&(Te=Jn.brewer[Te.toLowerCase()]),as(Te)==="array"){Te.length===1&&(Te=[Te[0],Te[0]]),Te=Te.slice(0);for(var Ke=0;Ke<Te.length;Ke++)Te[Ke]=Jn(Te[Ke]);G.length=0;for(var dt=0;dt<Te.length;dt++)G.push(dt/(Te.length-1))}return Ln(),$=Te},yt=function(Te){if(j!=null){for(var Ke=j.length-1,dt=0;dt<Ke&&Te>=j[dt];)dt++;return dt-1}return 0},Mt=function(Te){return Te},hn=function(Te){return Te},rn=function(Te,Ke){var dt,ft;if(Ke==null&&(Ke=!1),isNaN(Te)||Te===null)return y;if(Ke)ft=Te;else if(j&&j.length>2){var fn=yt(Te);ft=fn/(j.length-2)}else Ue!==be?ft=(Te-be)/(Ue-be):ft=1;ft=hn(ft),Ke||(ft=Mt(ft)),ht!==1&&(ft=Z0(ft,ht)),ft=U[0]+ft*(1-U[0]-U[1]),ft=Math.min(1,Math.max(0,ft));var Ot=Math.floor(ft*1e4);if(ke&&ze[Ot])dt=ze[Ot];else{if(as($)==="array")for(var bt=0;bt<G.length;bt++){var St=G[bt];if(ft<=St){dt=$[bt];break}if(ft>=St&&bt===G.length-1){dt=$[bt];break}if(ft>St&&ft<G[bt+1]){ft=(ft-St)/(G[bt+1]-St),dt=Jn.interpolate($[bt],$[bt+1],ft,_);break}}else as($)==="function"&&(dt=$(ft));ke&&(ze[Ot]=dt)}return dt},Ln=function(){return ze={}};gt(d);var vt=function(Te){var Ke=Jn(rn(Te));return he&&Ke[he]?Ke[he]():Ke};return vt.classes=function(Te){if(Te!=null){if(as(Te)==="array")j=Te,B=[Te[0],Te[Te.length-1]];else{var Ke=Jn.analyze(B);Te===0?j=[Ke.min,Ke.max]:j=Jn.limits(Ke,"e",Te)}return vt}return j},vt.domain=function(Te){if(!arguments.length)return B;be=Te[0],Ue=Te[Te.length-1],G=[];var Ke=$.length;if(Te.length===Ke&&be!==Ue)for(var dt=0,ft=Array.from(Te);dt<ft.length;dt+=1){var fn=ft[dt];G.push((fn-be)/(Ue-be))}else{for(var Ot=0;Ot<Ke;Ot++)G.push(Ot/(Ke-1));if(Te.length>2){var bt=Te.map(function(Et,Rt){return Rt/(Te.length-1)}),St=Te.map(function(Et){return(Et-be)/(Ue-be)});St.every(function(Et,Rt){return bt[Rt]===Et})||(hn=function(Et){if(Et<=0||Et>=1)return Et;for(var Rt=0;Et>=St[Rt+1];)Rt++;var ei=(Et-St[Rt])/(St[Rt+1]-St[Rt]),$i=bt[Rt]+ei*(bt[Rt+1]-bt[Rt]);return $i})}}return B=[be,Ue],vt},vt.mode=function(Te){return arguments.length?(_=Te,Ln(),vt):_},vt.range=function(Te,Ke){return gt(Te),vt},vt.out=function(Te){return he=Te,vt},vt.spread=function(Te){return arguments.length?(C=Te,vt):C},vt.correctLightness=function(Te){return Te==null&&(Te=!0),Se=Te,Ln(),Se?Mt=function(Ke){for(var dt=rn(0,!0).lab()[0],ft=rn(1,!0).lab()[0],fn=dt>ft,Ot=rn(Ke,!0).lab()[0],bt=dt+(ft-dt)*Ke,St=Ot-bt,Et=0,Rt=1,ei=20;Math.abs(St)>.01&&ei-- >0;)(function(){return fn&&(St*=-1),St<0?(Et=Ke,Ke+=(Rt-Ke)*.5):(Rt=Ke,Ke+=(Et-Ke)*.5),Ot=rn(Ke,!0).lab()[0],St=Ot-bt})();return Ke}:Mt=function(Ke){return Ke},vt},vt.padding=function(Te){return Te!=null?(as(Te)==="number"&&(Te=[Te,Te]),U=Te,vt):U},vt.colors=function(Te,Ke){arguments.length<2&&(Ke="hex");var dt=[];if(arguments.length===0)dt=$.slice(0);else if(Te===1)dt=[vt(.5)];else if(Te>1){var ft=B[0],fn=B[1]-ft;dt=J0(0,Te).map(function(Rt){return vt(ft+Rt/(Te-1)*fn)})}else{d=[];var Ot=[];if(j&&j.length>2)for(var bt=1,St=j.length,Et=1<=St;Et?bt<St:bt>St;Et?bt++:bt--)Ot.push((j[bt-1]+j[bt])*.5);else Ot=B;dt=Ot.map(function(Rt){return vt(Rt)})}return Jn[Ke]&&(dt=dt.map(function(Rt){return Rt[Ke]()})),dt},vt.cache=function(Te){return Te!=null?(ke=Te,vt):ke},vt.gamma=function(Te){return Te!=null?(ht=Te,vt):ht},vt.nodata=function(Te){return Te!=null?(y=Jn(Te),vt):y},vt};function J0(d,_,y){for(var C=[],B=d<_,G=_,U=d;B?U<G:U>G;B?U++:U--)C.push(U);return C}var ca=D,Q0=zl,ev=function(d){for(var _=[1,1],y=1;y<d;y++){for(var C=[1],B=1;B<=_.length;B++)C[B]=(_[B]||0)+_[B-1];_=C}return _},tv=function(d){var _,y,C,B,G,U,j;if(d=d.map(function(Se){return new ca(Se)}),d.length===2)_=d.map(function(Se){return Se.lab()}),G=_[0],U=_[1],B=function(Se){var ze=[0,1,2].map(function(ke){return G[ke]+Se*(U[ke]-G[ke])});return new ca(ze,"lab")};else if(d.length===3)y=d.map(function(Se){return Se.lab()}),G=y[0],U=y[1],j=y[2],B=function(Se){var ze=[0,1,2].map(function(ke){return(1-Se)*(1-Se)*G[ke]+2*(1-Se)*Se*U[ke]+Se*Se*j[ke]});return new ca(ze,"lab")};else if(d.length===4){var $;C=d.map(function(Se){return Se.lab()}),G=C[0],U=C[1],j=C[2],$=C[3],B=function(Se){var ze=[0,1,2].map(function(ke){return(1-Se)*(1-Se)*(1-Se)*G[ke]+3*(1-Se)*(1-Se)*Se*U[ke]+3*(1-Se)*Se*Se*j[ke]+Se*Se*Se*$[ke]});return new ca(ze,"lab")}}else if(d.length>=5){var he,be,Ue;he=d.map(function(Se){return Se.lab()}),Ue=d.length-1,be=ev(Ue),B=function(Se){var ze=1-Se,ke=[0,1,2].map(function(ht){return he.reduce(function(gt,yt,Mt){return gt+be[Mt]*Math.pow(ze,Ue-Mt)*Math.pow(Se,Mt)*yt[ht]},0)});return new ca(ke,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return B},nv=function(d){var _=tv(d);return _.scale=function(){return Q0(_)},_},Gl=H,Qn=function(d,_,y){if(!Qn[y])throw new Error("unknown blend mode "+y);return Qn[y](d,_)},Xi=function(d){return function(_,y){var C=Gl(y).rgb(),B=Gl(_).rgb();return Gl.rgb(d(C,B))}},ji=function(d){return function(_,y){var C=[];return C[0]=d(_[0],y[0]),C[1]=d(_[1],y[1]),C[2]=d(_[2],y[2]),C}},iv=function(d){return d},rv=function(d,_){return d*_/255},sv=function(d,_){return d>_?_:d},av=function(d,_){return d>_?d:_},ov=function(d,_){return 255*(1-(1-d/255)*(1-_/255))},lv=function(d,_){return _<128?2*d*_/255:255*(1-2*(1-d/255)*(1-_/255))},cv=function(d,_){return 255*(1-(1-_/255)/(d/255))},uv=function(d,_){return d===255?255:(d=255*(_/255)/(1-d/255),d>255?255:d)};Qn.normal=Xi(ji(iv)),Qn.multiply=Xi(ji(rv)),Qn.screen=Xi(ji(ov)),Qn.overlay=Xi(ji(lv)),Qn.darken=Xi(ji(sv)),Qn.lighten=Xi(ji(av)),Qn.dodge=Xi(ji(uv)),Qn.burn=Xi(ji(cv));for(var hv=Qn,Vl=v.type,fv=v.clip_rgb,dv=v.TWOPI,pv=Math.pow,mv=Math.sin,gv=Math.cos,zh=H,_v=function(d,_,y,C,B){d===void 0&&(d=300),_===void 0&&(_=-1.5),y===void 0&&(y=1),C===void 0&&(C=1),B===void 0&&(B=[0,1]);var G=0,U;Vl(B)==="array"?U=B[1]-B[0]:(U=0,B=[B,B]);var j=function($){var he=dv*((d+120)/360+_*$),be=pv(B[0]+U*$,C),Ue=G!==0?y[0]+$*G:y,Se=Ue*be*(1-be)/2,ze=gv(he),ke=mv(he),ht=be+Se*(-.14861*ze+1.78277*ke),gt=be+Se*(-.29227*ze-.90649*ke),yt=be+Se*(1.97294*ze);return zh(fv([ht*255,gt*255,yt*255,1]))};return j.start=function($){return $==null?d:(d=$,j)},j.rotations=function($){return $==null?_:(_=$,j)},j.gamma=function($){return $==null?C:(C=$,j)},j.hue=function($){return $==null?y:(y=$,Vl(y)==="array"?(G=y[1]-y[0],G===0&&(y=y[1])):G=0,j)},j.lightness=function($){return $==null?B:(Vl($)==="array"?(B=$,U=$[1]-$[0]):(B=[$,$],U=0),j)},j.scale=function(){return zh.scale(j)},j.hue(y),j},vv=D,xv="0123456789abcdef",yv=Math.floor,bv=Math.random,Mv=function(){for(var d="#",_=0;_<6;_++)d+=xv.charAt(yv(bv()*16));return new vv(d,"hex")},Wl=c,Gh=Math.log,Sv=Math.pow,Ev=Math.floor,Tv=Math.abs,Vh=function(d,_){_===void 0&&(_=null);var y={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return Wl(d)==="object"&&(d=Object.values(d)),d.forEach(function(C){_&&Wl(C)==="object"&&(C=C[_]),C!=null&&!isNaN(C)&&(y.values.push(C),y.sum+=C,C<y.min&&(y.min=C),C>y.max&&(y.max=C),y.count+=1)}),y.domain=[y.min,y.max],y.limits=function(C,B){return Wh(y,C,B)},y},Wh=function(d,_,y){_===void 0&&(_="equal"),y===void 0&&(y=7),Wl(d)=="array"&&(d=Vh(d));var C=d.min,B=d.max,G=d.values.sort(function(jl,$l){return jl-$l});if(y===1)return[C,B];var U=[];if(_.substr(0,1)==="c"&&(U.push(C),U.push(B)),_.substr(0,1)==="e"){U.push(C);for(var j=1;j<y;j++)U.push(C+j/y*(B-C));U.push(B)}else if(_.substr(0,1)==="l"){if(C<=0)throw new Error("Logarithmic scales are only possible for values > 0");var $=Math.LOG10E*Gh(C),he=Math.LOG10E*Gh(B);U.push(C);for(var be=1;be<y;be++)U.push(Sv(10,$+be/y*(he-$)));U.push(B)}else if(_.substr(0,1)==="q"){U.push(C);for(var Ue=1;Ue<y;Ue++){var Se=(G.length-1)*Ue/y,ze=Ev(Se);if(ze===Se)U.push(G[ze]);else{var ke=Se-ze;U.push(G[ze]*(1-ke)+G[ze+1]*ke)}}U.push(B)}else if(_.substr(0,1)==="k"){var ht,gt=G.length,yt=new Array(gt),Mt=new Array(y),hn=!0,rn=0,Ln=null;Ln=[],Ln.push(C);for(var vt=1;vt<y;vt++)Ln.push(C+vt/y*(B-C));for(Ln.push(B);hn;){for(var Te=0;Te<y;Te++)Mt[Te]=0;for(var Ke=0;Ke<gt;Ke++)for(var dt=G[Ke],ft=Number.MAX_VALUE,fn=void 0,Ot=0;Ot<y;Ot++){var bt=Tv(Ln[Ot]-dt);bt<ft&&(ft=bt,fn=Ot),Mt[fn]++,yt[Ke]=fn}for(var St=new Array(y),Et=0;Et<y;Et++)St[Et]=null;for(var Rt=0;Rt<gt;Rt++)ht=yt[Rt],St[ht]===null?St[ht]=G[Rt]:St[ht]+=G[Rt];for(var ei=0;ei<y;ei++)St[ei]*=1/Mt[ei];hn=!1;for(var $i=0;$i<y;$i++)if(St[$i]!==Ln[$i]){hn=!0;break}Ln=St,rn++,rn>200&&(hn=!1)}for(var qi={},os=0;os<y;os++)qi[os]=[];for(var ls=0;ls<gt;ls++)ht=yt[ls],qi[ht].push(G[ls]);for(var Ai=[],Sr=0;Sr<y;Sr++)Ai.push(qi[Sr][0]),Ai.push(qi[Sr][qi[Sr].length-1]);Ai=Ai.sort(function(jl,$l){return jl-$l}),U.push(Ai[0]);for(var ua=1;ua<Ai.length;ua+=2){var Er=Ai[ua];!isNaN(Er)&&U.indexOf(Er)===-1&&U.push(Er)}}return U},Xh={analyze:Vh,limits:Wh},jh=D,Av=function(d,_){d=new jh(d),_=new jh(_);var y=d.luminance(),C=_.luminance();return y>C?(y+.05)/(C+.05):(C+.05)/(y+.05)},$h=D,Ti=Math.sqrt,Yt=Math.pow,wv=Math.min,Rv=Math.max,qh=Math.atan2,Yh=Math.abs,no=Math.cos,Kh=Math.sin,Cv=Math.exp,Zh=Math.PI,Lv=function(d,_,y,C,B){y===void 0&&(y=1),C===void 0&&(C=1),B===void 0&&(B=1);var G=function(Er){return 360*Er/(2*Zh)},U=function(Er){return 2*Zh*Er/360};d=new $h(d),_=new $h(_);var j=Array.from(d.lab()),$=j[0],he=j[1],be=j[2],Ue=Array.from(_.lab()),Se=Ue[0],ze=Ue[1],ke=Ue[2],ht=($+Se)/2,gt=Ti(Yt(he,2)+Yt(be,2)),yt=Ti(Yt(ze,2)+Yt(ke,2)),Mt=(gt+yt)/2,hn=.5*(1-Ti(Yt(Mt,7)/(Yt(Mt,7)+Yt(25,7)))),rn=he*(1+hn),Ln=ze*(1+hn),vt=Ti(Yt(rn,2)+Yt(be,2)),Te=Ti(Yt(Ln,2)+Yt(ke,2)),Ke=(vt+Te)/2,dt=G(qh(be,rn)),ft=G(qh(ke,Ln)),fn=dt>=0?dt:dt+360,Ot=ft>=0?ft:ft+360,bt=Yh(fn-Ot)>180?(fn+Ot+360)/2:(fn+Ot)/2,St=1-.17*no(U(bt-30))+.24*no(U(2*bt))+.32*no(U(3*bt+6))-.2*no(U(4*bt-63)),Et=Ot-fn;Et=Yh(Et)<=180?Et:Ot<=fn?Et+360:Et-360,Et=2*Ti(vt*Te)*Kh(U(Et)/2);var Rt=Se-$,ei=Te-vt,$i=1+.015*Yt(ht-50,2)/Ti(20+Yt(ht-50,2)),qi=1+.045*Ke,os=1+.015*Ke*St,ls=30*Cv(-Yt((bt-275)/25,2)),Ai=2*Ti(Yt(Ke,7)/(Yt(Ke,7)+Yt(25,7))),Sr=-Ai*Kh(2*U(ls)),ua=Ti(Yt(Rt/(y*$i),2)+Yt(ei/(C*qi),2)+Yt(Et/(B*os),2)+Sr*(ei/(C*qi))*(Et/(B*os)));return Rv(0,wv(100,ua))},Jh=D,Pv=function(d,_,y){y===void 0&&(y="lab"),d=new Jh(d),_=new Jh(_);var C=d.get(y),B=_.get(y),G=0;for(var U in C){var j=(C[U]||0)-(B[U]||0);G+=j*j}return Math.sqrt(G)},Iv=D,Dv=function(){for(var d=[],_=arguments.length;_--;)d[_]=arguments[_];try{return new(Function.prototype.bind.apply(Iv,[null].concat(d))),!0}catch{return!1}},Qh=H,ef=zl,Nv={cool:function(){return ef([Qh.hsl(180,1,.9),Qh.hsl(250,.7,.4)])},hot:function(){return ef(["#000","#f00","#ff0","#fff"]).mode("rgb")}},io={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Xl=0,tf=Object.keys(io);Xl<tf.length;Xl+=1){var nf=tf[Xl];io[nf.toLowerCase()]=io[nf]}var Uv=io,nn=H;nn.average=Y0,nn.bezier=nv,nn.blend=hv,nn.cubehelix=_v,nn.mix=nn.interpolate=Ih,nn.random=Mv,nn.scale=zl,nn.analyze=Xh.analyze,nn.contrast=Av,nn.deltaE=Lv,nn.distance=Pv,nn.limits=Xh.limits,nn.valid=Dv,nn.scales=Nv,nn.colors=ph,nn.brewer=Uv;var Ov=nn;return Ov})}(Vo)),Vo.exports}var eR=Q1();const tR=Z1(eR);var Vs=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Vs.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Vs.Bounce.In(n*2)*.5:Vs.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),Ds=function(){return performance.now()},Eg=function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var r=0,s=t;r<s.length;r++){var a=s[r];(e=a._group)===null||e===void 0||e.remove(a),a._group=this,this._tweens[a.getId()]=a,this._tweensAddedDuringUpdate[a.getId()]=a}},n.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,r=e;i<r.length;i++){var s=r[i];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},n.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},n.prototype.update=function(e,t){e===void 0&&(e=Ds()),t===void 0&&(t=!0);var i=Object.keys(this._tweens);if(i.length!==0)for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],a=!t;s&&s.update(e,a)===!1&&!t&&this.remove(s)}i=Object.keys(this._tweensAddedDuringUpdate)}},n}(),Fr={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Fr.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Fr.Utils.Bernstein,a=0;a<=i;a++)t+=r(1-e,i-a)*r(e,a)*n[a]*s(i,a);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Fr.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Fr.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*t+s+a)*l+(-3*e+3*t-2*s-a)*o+s*r+e}}},Qu=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),pu=new Eg,nR=function(){function n(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Vs.Linear.None,this._interpolationFunction=Fr.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Qu.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=pu,pu.add(this))}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=Ds()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,s){for(var a in i){var o=e[a],l=Array.isArray(o),c=l?"array":typeof o,u=!l&&Array.isArray(i[a]);if(!(c==="undefined"||c==="function")){if(u){var h=i[a];if(h.length===0)continue;for(var f=[o],m=0,x=h.length;m<x;m+=1){var v=this._handleRelativeValue(o,h[m]);if(isNaN(v)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}u&&(i[a]=f)}if((c==="object"||l)&&o&&!u){t[a]=l?[]:{};var g=o;for(var p in g)t[a][p]=g[p];r[a]=l?[]:{};var h=i[a];if(!this._isDynamic){var w={};for(var p in h)w[p]=h[p];i[a]=h=w}this._setupProperties(g,t[a],h,r[a],s)}else(typeof t[a]>"u"||s)&&(t[a]=o),l||(t[a]*=1),u?r[a]=i[a].slice().reverse():r[a]=t[a]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},n.prototype.pause=function(e){return e===void 0&&(e=Ds()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},n.prototype.resume=function(e){return e===void 0&&(e=Ds()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},n.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=Vs.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Fr.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,r;if(e===void 0&&(e=Ds()),t===void 0&&(t=n.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,o=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),l=this._duration+this._repeat*o,c=function(){if(i._duration===0||a>l)return 1;var v=Math.trunc(a/o),g=a-v*o,p=Math.min(g/i._duration,1);return p===0&&a===i._duration?1:p},u=c(),h=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var m=0,x=this._chainedTweens.length;m<x;m++)this._chainedTweens[m].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var a=t[s]||0,o=i[s],l=Array.isArray(e[s]),c=Array.isArray(o),u=!l&&c;u?e[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(e[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[s]=a+(o-a)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n.autoStartOnUpdate=!1,n}(),iR="25.0.0",rR=Qu.nextId,yi=pu,sR=yi.getAll.bind(yi),aR=yi.removeAll.bind(yi),oR=yi.add.bind(yi),lR=yi.remove.bind(yi),cR=yi.update.bind(yi),rl={Easing:Vs,Group:Eg,Interpolation:Fr,now:Ds,Sequence:Qu,nextId:rR,Tween:nR,VERSION:iR,getAll:sR,removeAll:aR,add:oR,remove:lR,update:cR};class uR{constructor(e,t,i){this.threeScene=t,this.objects=e,this.cloneMaterials(),this.onComplete=i,this.clock=new e1(!1),this.animations=[{key:"Shrink",from:1,to:0,start:0,duration:.5},{key:"Move_Up",from:0,to:1,start:.5,duration:.3},{key:"Open",from:0,to:1.05,start:.8,duration:.3},{key:"Unfold_AY",from:0,to:1,start:1.1,duration:.2,easing:"inOut"},{key:"Unfold_AY",from:1,to:0,start:1.3,duration:.2,easing:"inOut"},{key:"Unfold_AX",from:0,to:1,start:1.1,duration:.4},{key:"Unfold_BY",from:0,to:1,start:1.5,duration:.2,easing:"inOut"},{key:"Unfold_BY",from:1,to:0,start:1.7,duration:.2,easing:"inOut"},{key:"Unfold_BZ",from:0,to:1,start:1.5,duration:.4},{key:"Center_Paper",from:0,to:1.5,start:1.1,duration:.8}],this.totalDuration=1.8}cloneMaterials(){this.objects.forEach(e=>{e.material=e.material.clone()})}animate(){const e=this.clock.getElapsedTime();if(e>this.totalDuration){this.setMorpthTargetValue("Shrink",0),this.setMorpthTargetValue("Unfold_AY",0),this.setMorpthTargetValue("Unfold_AX",1),this.setMorpthTargetValue("Unfold_BY",.6),this.setMorpthTargetValue("Unfold_BZ",.7),this.setMorpthTargetValue("Center_Paper",1.35),this.onComplete(),this.clock.stop();return}this.animations.forEach(t=>{this.applyAnimation(t,e)}),requestAnimationFrame(this.animate.bind(this))}setMorpthTargetValue(e,t){this.objects.forEach(i=>{i.morphTargetDictionary&&i.morphTargetDictionary[e]!==void 0&&(i.morphTargetInfluences[i.morphTargetDictionary[e]]=t)})}applyAnimation(e,t){const i=t-e.start;if(i>=0&&i<=e.duration){const r=i/e.duration,s=e.easing==="inOut"?Wr.smoothstep(r,0,1):r,a=Wr.lerp(e.from,e.to,s);this.objects.forEach(o=>{o.morphTargetDictionary&&o.morphTargetDictionary[e.key]!==void 0&&(o.morphTargetInfluences[o.morphTargetDictionary[e.key]]=a)})}}start(e=null){this.onComplete=e||this.onComplete;const t=tR.hsl(Math.random()*360,.75,.5).hex();this.objects[1].material.color.set(t),this.zoomOut(2),this.clock.start(),requestAnimationFrame(this.animate.bind(this))}resetAnimations(){this.animations.forEach(e=>{const t=e.key==="Shrink"?1:0;this.objects.forEach(i=>{i.morphTargetDictionary&&i.morphTargetDictionary[e.key]!==void 0&&(i.morphTargetInfluences[i.morphTargetDictionary[e.key]]=t)})})}zoomOut(e){this.capsuleCameraEndPos||(this.capsuleCameraEndPos=this.threeScene.capsuleCamera.position.clone()),this.capsuleCameraStartPos||(this.capsuleCameraStartPos=this.capsuleCameraEndPos.clone().add(new z(0,0,1)));const i=(Math.random()<.5?-1:1)*(7*Math.PI/180),r=0;this.threeScene.capsuleCamera.position.copy(this.capsuleCameraStartPos),this.threeScene.capsuleCamera.rotation.z=i;const s=new rl.Tween({zr:i,x:this.capsuleCameraStartPos.x,y:this.capsuleCameraStartPos.y,z:this.capsuleCameraStartPos.z}).to({zr:r,x:this.capsuleCameraEndPos.x,y:this.capsuleCameraEndPos.y,z:this.capsuleCameraEndPos.z},e*1e3).onUpdate(o=>{this.threeScene.capsuleCamera.position.set(o.x,o.y,o.z),this.threeScene.capsuleCamera.rotation.z=o.zr}).easing(rl.Easing.Cubic.Out).start(),a=()=>{requestAnimationFrame(a),s.update()};a()}}class hR{constructor(e,t,i,r,s){this.camera=e,this.targets=t,this.sweepCount=i,this.startScale=s,this.targets.sort(()=>Math.random()-.5),this.sweepLength=r*1e3,this.lastTargetIndex=-1,this.currentSweep=0,this.animating=!1,this.activeTweens=[]}start(e){this.onComplete=e,this.currentSweep=0,this.animating=!0,this.nextSweep(),this.animate()}getRandomTarget(){this.lastTargetIndex++,this.lastTargetIndex>=this.targets.length&&(this.lastTargetIndex=0,this.targets.sort(()=>Math.random()-.5));const e=this.targets[this.lastTargetIndex],t=Math.floor(Math.random()*e.children.length),i=e.children[t];return{target:e,child:i}}nextSweep(){if(this.currentSweep<this.sweepCount){const{target:e,child:t}=this.getRandomTarget(),i=new z;e.getWorldPosition(i);const r=new z;t.getWorldPosition(r);const s=new z().subVectors(i,r),a=new z().subVectors(i,s.multiplyScalar(this.startScale)),o=r;this.camera.position.copy(a),this.camera.lookAt(i);const l=this.camera.rotation.clone(),c=7,u=Math.random()>.5?l.z+Wr.degToRad(c):l.z-Wr.degToRad(c),h=new rl.Tween(this.camera.rotation).to({z:u},this.sweepLength).yoyo(!0).repeat(1),f=new rl.Tween(this.camera.position).to({x:o.x,y:o.y,z:o.z},this.sweepLength).onComplete(()=>{this.currentSweep++,this.nextSweep()});this.activeTweens.push(h,f),h.start(),f.start()}else this.animating=!1,this.activeTweens=[],this.onComplete&&this.onComplete()}animate(){const e=()=>{this.animating&&(requestAnimationFrame(e),this.activeTweens.forEach(t=>t.update()))};e()}}const Rp=[{name:"Cookie",icon:"01_cookie.png",object:"Cookie"},{name:"Front",icon:"12_front.png",object:"FrontKitteh"},{name:"Chimney",icon:"02_chimney.png",object:"ChimneyKitteh"},{name:"Trash",icon:"03_trash.png",object:"TrashKitteh"},{name:"Fence",icon:"04_fence.png",object:"FenceKitteh"},{name:"Window",icon:"05_window.png",object:"WindowKitteh"},{name:"Ladder",icon:"06_ladder.png",object:"LadderKitteh"},{name:"Truck",icon:"07_truck.png",object:"TruckKitteh"},{name:"Front Door",icon:"08_front_door.png",object:"FrontDoorKitteh"},{name:"Upper Tree Kitteh",icon:"09_tree_upper.png",object:"TopTreeKitteh"},{name:"Under Tree Kitteh",icon:"10_tree_lower.png",object:"UnderTreeKitteh"},{name:"Mailbox",icon:"11_mailbox.png",object:"MailKitteh"}],mu=[{from:"Orokro",text:"The scuff in this xMas gatcha is real"},{from:"Orokro",text:"Last rizzmas I gave you my Gyatt. This rizzmas ILL FN DO IT AGAIN"},{from:"Cookie",text:"Meowy Christmas!"},{from:"Cookie",text:"Feed me mother!"},{from:"Orokro",text:"I herd u liek snow globes. Merry Crimmas!",force_first:!0},{from:"Don",text:"Imperial Units"},{from:"Don",text:"What the fuck is a kilometer"},{from:"Don",text:`"I'm just a little catboy" ~Reli in cosplay at AWA" - Lucina`},{from:"Araziel",text:`"It's jiggling because it's a fake chest" Said by Reli`},{from:"Araziel",text:'"I am 1.03125 Relis tall on a Tuesday” -Drewus Maximus'},{from:"Araziel",text:'"Imagine being an alien residing in the land of horny measurements and not being allowed to be sekushii"'},{from:"Araziel",text:"Women love me, Fish fear me, Childe wants me"},{from:"Araziel",text:"Wow Aurelia encourages unsafe driving smh my head"},{from:"Araziel",text:"Assiopeia should be the NSFW tag"},{from:"Rennova",text:"I first followed you on Christmas day a year ago, and do not regret it. Thanks for this past year, Aurelia. Hope to get to know you more in the future."},{from:"Rennova",text:"Have a cosmic Christmas!"},{from:"Fiend",text:"Stopped binging alcohol to watch the Space Lady"},{from:"Fiend",text:"The V-Moe girls distracted me long enough for the Dunkin Donuts employee I was holding at gun point to run away"},{from:"Lotus the Ghost",text:"Merry Christmas Reli! I hope you're able to reach your goals and have fun in the new year!"},{from:"Lotus the Ghost",text:"help i'm stuck in a website"},{from:"Zach M",text:"Happy Holidays Aurelia, I just wanted to use this opportunity to say thank you for being your: awesome, funny, lighthearted, sometimes lewd, always crazy, kind, incredible costume-making, amazing, self. I’m so glad to have discovered you, and look forward to giving you my continued support. Happy holidays!!! P.S. Don’t tell Allen, but you’re actually my number one favorite twerking alien."},{from:"Zach M",text:"Aurelia, My last two brain cells were so busy competing for third place that they both came in fourth, trying to write this message; Anyways………..HERES TO CELEBRATING SOME HAPPY HOLIDAYS AND TO MANY MORE!!!!! 🍺"},{from:"Drewus Maximus",text:"MERRY CHRISTMAS TO OUR BESTEST IDOL ALIEN! Hope you have a nice holiday and all your dreams come true next year 💜"},{from:"Drewus Maximus",text:"Skibidi Reli in Fortnite"},{from:"Drewus Maximus",text:"cookie when she heard what Santa eats"},{from:"Wooderson",text:'“I love chicken katsu, on a bed of rice, that shit slaps my nuts." -Aurelia Cassiopeia, 2024'},{from:"Wooderson",text:"Merry Christmas to the greatest space alien, idol, maid(failure)"},{from:"Abysmal",text:"Reliiiiii!! While I haven't been here long, it's been extremely entertaining watching you and your community grow. Anytime I catch you or a VOD I know I'm in for a good laugh and a great time. Thanks for sharing that golden personality with us! ✌️😁 I'll always be wishing you the best!"},{from:"TomtheIronMan",text:"“Oh man, I’m gonna be #FreakinIt” - every time playing RE2"},{from:"TomtheIronMan",text:'"All my cards are ASS"'},{from:"ZbotZero",text:"I like porple"},{from:"ZbotZero",text:"“She’s gonna cry happy again”"},{from:"ZbotZero",text:"We pulling out the big tears every time"},{from:"Lethia",text:"Dear Aurelia, THANK YOU FOR BEING SUCH A FANTASTIC GENMATE!!! You are so freaking talented, and I am floored by both the caliber of your content and how many talents you have. Singing? ✅  Sewing? ✅ Being V-Moe's lil freak? ✅ ✅ ✅  I could not imagine Moe-Kyun without you my dear alien. HERE'S TO MORE SHENANIGANS YIPPEE!!!! 🥳 🥳"},{from:"Lethia",text:"What's an alien's favorite holiday treat? Hot cocoa with martian-mellows!!! 👽 ☕"}],kn=class kn{constructor(e,t,i,r){this.scene=e,this.toastManager=t,this.modalManager=i,this.bgmPlayer=r,this.heySound=new Audio("assets/sfx/hey.mp3"),this.yaySound=new Audio("assets/sfx/yay.mp3"),this.gatchaWoosh=new Audio("assets/sfx/gatcha_woosh.mp3"),this.woosh=new Audio("assets/sfx/unwrap.mp3"),this.mode=Jt(kn.MODE.LOADING),this.foundCats=tc([]),this.gatchaQuotesSeen=tc([]),this.catsMenuOpen=Jt(!1),this.gatchaMenuOpen=Jt(!1),this.allCatsFound=Jt(!1),this.allGatchaQuotesFound=Jt(!1),this.catsMenuCount=Jt(0),this.gatchaMenuCount=Jt(0),this.gatchaPulls=Jt(0),this.gatchaUnlocked=Jt(!1),this.doingPull=Jt(!1),this.hideUI=Jt(!1),this.doingPullCameraAnimation=Jt(!1),this.doingCapsuleAnimation=Jt(!1),this.pickedQuote=tc(null),this.initGame(),e.ifOrWhenSceneIsReady(()=>{this.beginGame()})}initGame(){this.foundCats.value=Rp.map((t,i)=>({...t,id:`cat_${i}`,found:!1}));let e=mu.map((t,i)=>({...t,id:`quote_${i}`,found:!1}));e=e.sort(()=>Math.random()-.5),this.gatchaQuotesSeen.value=e,this.allCatsFound.value=!1,this.allGatchaQuotesFound.value=!1,this.catsMenuCount.value=0,this.gatchaMenuCount.value=0,this.gatchaPulls.value=0,this.gatchaUnlocked.value=!1,this.doingPull.value=!1}playSound(e){e.currentTime=0,e.play()}beginGame(){this.mode.value=kn.MODE.UNPACKING,this.playSound(this.heySound),this.modalManager.showModal("Click the present to unwrap it!","Hey You!",()=>{this.mode.value=kn.MODE.UNPACKING}),setTimeout(()=>{const e=this.scene.$("#GiftBox").children;this.scene.$("#GiftBox").visible=!0,this.presentUnboxing=new K1(e,this.scene,()=>{this.mode.value=kn.MODE.PLAYING,this.scene.particleSystem.stirUpParticles(.2),this.scene.$("#GiftBox").visible=!1,this.playSound(this.heySound),this.modalManager.showModal("Find some hidden kitties!","Hey You!",()=>{})}),this.buildKittehRaycaster(),this.pullCameraAnimator=new hR(this.scene.pullCamera,this.scene.$(".f_targ"),2,.75,1.2),this.capsuleAnimator=new uR(this.scene.$("#Capsule").children,this.scene,()=>{})},500)}buildKittehRaycaster(){this.catRaycaster=new Sg(this.scene);const e=[...this.scene.$(".cat")];this.catRaycaster.setFilter(e),this.catRaycaster.onHit(t=>{if(this.mode.value!==kn.MODE.PLAYING)return;let i=t.object.userData.name;for(;!i&&(t.object=t.object.parent,i=t.object.userData.name,!!t.object.parent););i&&(i=i.split(" ")[0].replace("#","").toLowerCase(),Rp.find(r=>r.object.toLowerCase()===i)&&this.findCat(i))})}showMenu(e){if(this.playSound(this.woosh),e===kn.MENU.CATS&&this.catsMenuOpen.value){this.catsMenuOpen.value=!1;return}if(e===kn.MENU.GATCHA&&this.gatchaMenuOpen.value){this.gatchaMenuOpen.value=!1;return}(this.catsMenuOpen.value||this.gatchaMenuOpen.value)&&(this.catsMenuOpen.value=!1,this.gatchaMenuOpen.value=!1),e===kn.MENU.CATS?(this.catsMenuOpen.value=!0,this.catsMenuCount.value=0):e===kn.MENU.GATCHA&&(this.gatchaMenuOpen.value=!0,this.gatchaMenuCount.value=0)}findCat(e){e=e.split(" ")[0].replace("#","").toLowerCase();const t=this.foundCats.value,i=t.find(o=>o.object.toLowerCase()===e);if(i.found)return;i.found=!0,this.foundCats.value=[],this.foundCats.value=t,this.allCatsFound.value=t.every(o=>o.found),this.catsMenuOpen.value===!1&&this.catsMenuCount.value++,new Audio("assets/sfx/meow.mp3").play();const s=mu.length;let a=Math.floor(s/12);if(this.gatchaPulls.value+=a,this.gatchaUnlocked.value=!0,this.allCatsFound.value){this.playSound(this.yaySound),this.modalManager.showModal("You found all the kittehs!","Congratulations!");const l=this.gatchaQuotesSeen.value.filter(c=>!c.found);a=l.length-this.gatchaPulls.value,l.length>this.gatchaPulls.value&&(this.gatchaPulls.value=l.length)}this.toastManager.showToastMsg(`You found ${i.name} Kitteh!`,`+${a} Gatcha Pulls!`),this.allGatchaQuotesFound.value&&(this.gatchaPulls.value=0)}doPull(){this.gatchaPulls.value<1||this.doingPull.value||(this.playSound(this.gatchaWoosh),this.gatchaPulls.value--,this.doingPull.value=!0,setTimeout(()=>{this.bgmPlayer.playGatchaTheme()},750),setTimeout(()=>{this.hideUI.value=!0},1e3),setTimeout(()=>{this.doingPullCameraAnimation.value=!0,this.scene.setCamera(this.scene.pullCamera),this.pullCameraAnimator.start(()=>{this.doingPullCameraAnimation.value=!1,this.scene.setCamera(this.scene.capsuleCamera),this.doingCapsuleAnimation.value=!0,this.capsuleAnimator.start(()=>{this.doingCapsuleAnimation.value=!1,this.pickRandomQuote()})})},1400))}pickRandomQuote(){const e=this.gatchaQuotesSeen.value;let t=e.find(i=>i.force_first&&!i.found);if(!t){const i=e.filter(r=>!r.found);t=i[Math.floor(Math.random()*i.length)]}t&&(t.found=!0,this.gatchaQuotesSeen.value=[],this.gatchaQuotesSeen.value=e,this.pickedQuote.value=t,this.gatchaMenuOpen.value===!1&&this.gatchaMenuCount.value++,this.allGatchaQuotesFound.value=e.every(i=>i.found),this.allGatchaQuotesFound.value&&(this.playSound(this.yaySound),this.modalManager.showModal("You found all the quotes!","Congratulations!"),this.gatchaPulls.value=0))}completePull(){this.capsuleAnimator.resetAnimations(),this.doingPull.value=!1,this.hideUI.value=!1,this.scene.setCamera(this.scene.camera),this.pickedQuote.value=null}};ql(kn,"MODE",{LOADING:0,UNPACKING:10,PLAYING:20}),ql(kn,"MENU",{CATS:0,GATCHA:10});let hr=kn;const Nn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},fR={class:"bgLayers"},dR={key:0,class:"gatchaLayer"},pR={__name:"BackgroundLayers",props:{gameState:Object},setup(n){const e=n,t=za(()=>{const i=e.gameState.mode.value==hr.MODE.LOADING,r=e.gameState.mode.value==hr.MODE.UNPACKING;return i||r});return(i,r)=>(Lt(),qt("div",fR,[r[0]||(r[0]=_t("div",{class:"gradientLayer"},null,-1)),r[1]||(r[1]=_t("div",{class:"imageLayer"},null,-1)),n.gameState.doingCapsuleAnimation.value==!0||n.gameState.doingPullCameraAnimation.value?(Lt(),qt("div",dR)):Yr("",!0),_t("div",{class:oi(["blackFade",{hide:t.value==!1}])},null,2)]))}},mR=Nn(pR,[["__scopeId","data-v-ac21a2af"]]),gR={__name:"ThreeSceneLayer",props:{scene:Object},setup(n){const e=Jt(null),t=n;return Pu(()=>{t.scene&&(window.s=t.scene,t.scene.mountSceneToDOM(e.value))}),(i,r)=>(Lt(),qt("div",{ref_key:"sceneWrapper",ref:e,class:"threeSceneWrapper"},null,512))}},_R=Nn(gR,[["__scopeId","data-v-872ce6cb"]]),vR=["src"],xR={key:0,class:"notificationCount"},yR={__name:"MenuIcon",props:{left:{type:Number,default:30},icon:{type:String,default:"cat_menu_icon"},notificationCount:{type:Number,default:0}},setup(n){const e=n;return(t,i)=>(Lt(),qt("div",{class:"menuIcon",style:Gr({left:e.left+"px"})},[_t("img",{src:`assets/img/icons/${e.icon}.png`,alt:"Hidden Cats"},null,8,vR),e.notificationCount>0?(Lt(),qt("div",xR,[_t("span",null,Kn(e.notificationCount),1)])):Yr("",!0)],4))}},Cp=Nn(yR,[["__scopeId","data-v-3084b956"]]),bR={__name:"MenuPanel",props:{isOpen:{type:Boolean,default:!1},size:{type:Number,default:300},position:{type:Object,default:()=>({top:0,left:0})},tabLocation:{type:Number,default:0}},setup(n){const e=n;return(t,i)=>(Lt(),qt("div",{class:oi(["mainMenuBox",{isOpen:e.isOpen}]),style:Gr({width:e.size+"px",top:e.position.top+"px",left:e.position.left+"px"})},[_t("div",{class:"tab",style:Gr({left:e.tabLocation+"px"})},null,4),Wx(t.$slots,"default",{},void 0)],6))}},Tg=Nn(bR,[["__scopeId","data-v-f63c66ed"]]),MR=["title"],SR={__name:"HiddenCatIcon",props:{cat:{type:Object,default:()=>({name:"Unknown Cat",icon:"00_mystery.png",object:"Unknown",found:!1})}},setup(n){const e=n,t=za(()=>e.cat.found==!0?{backgroundImage:`url(assets/img/hidden_cat_icons/${e.cat.icon})`,text:e.cat.name}:{backgroundImage:"url(assets/img/hidden_cat_icons/00_mystery.png)",text:"Find Me!"});return(i,r)=>(Lt(),qt("div",{class:"iconBox",style:Gr({backgroundImage:t.value.backgroundImage}),title:t.value.text},null,12,MR))}},ER=Nn(SR,[["__scopeId","data-v-7b8b99ea"]]),TR={class:"catMenuIcons"},AR={__name:"CatsMenu",props:{isOpen:{type:Boolean,default:!1},gameState:Object},setup(n){return(e,t)=>(Lt(),pr(Tg,{isOpen:n.isOpen,size:470,position:{top:130,left:10},tabLocation:21},{default:Cu(()=>[_t("h1",null,Kn(n.gameState.allCatsFound.value?"All Cats Found!":"Find Hidden Cats to get Gatcha Pulls!"),1),_t("div",TR,[(Lt(!0),qt(Pn,null,hm(n.gameState.foundCats.value,i=>(Lt(),pr(ER,{key:i.id+i.found,catFound:i.found,cat:i},null,8,["catFound","cat"]))),128))])]),_:1},8,["isOpen"]))}},wR=Nn(AR,[["__scopeId","data-v-7a9f83ea"]]),RR=["title"],CR={key:0,class:"author"},LR={__name:"GatchaRow",props:{quote:{type:Object,default:()=>({from:"Unknown Aurelinaut",text:"Meow",found:!1})}},setup(n){const e=n,t=za(()=>e.quote.found==!0?{from:e.quote.from,text:e.quote.text,found:!0}:{from:"",text:"???",found:!1});return(i,r)=>(Lt(),qt("div",{class:"quoteRow",title:t.value.text},[t.value.from!=""?(Lt(),qt("div",CR,Kn(t.value.from),1)):Yr("",!0),_t("div",{class:oi(["quote",{unFound:!t.value.found}])},Kn(t.value.text),3)],8,RR))}},PR=Nn(LR,[["__scopeId","data-v-977b1f0f"]]),IR={class:"quotesList scrollable-element"},DR={__name:"GatchaMenu",props:{isOpen:{type:Boolean,default:!1},gameState:Object},setup(n){return(e,t)=>(Lt(),pr(Tg,{isOpen:n.isOpen,size:470,position:{top:130,left:10},tabLocation:121},{default:Cu(()=>[_t("h1",null,Kn(n.gameState.allGatchaQuotesFound.value?"All Quotes Found!":"Pull for Merry Quotes!"),1),_t("div",IR,[(Lt(!0),qt(Pn,null,hm(n.gameState.gatchaQuotesSeen.value,i=>(Lt(),pr(PR,{key:i.id+i.found,quoteFound:i.found,quote:i},null,8,["quoteFound","quote"]))),128))])]),_:1},8,["isOpen"]))}},NR=Nn(DR,[["__scopeId","data-v-d5966be7"]]),UR={class:"shadow"},OR={class:"top"},FR={__name:"GatchaButton",props:{gameState:Object},setup(n){return(e,t)=>(Lt(),qt("div",{class:oi(["gatchaButtonBox",{noPullsLeft:n.gameState.gatchaPulls.value===0,gatchaEnabled:n.gameState.gatchaUnlocked.value}]),title:"Lets gooooooooo!",onClick:t[0]||(t[0]=i=>n.gameState.doPull())},[_t("div",UR,[_t("div",OR,[t[1]||(t[1]=_t("div",{class:"text"}," Pull! ",-1)),_t("div",{class:oi(["pullsLeft",{noPullsLeft:n.gameState.gatchaPulls.value===0}])}," Pulls Left: "+Kn(n.gameState.gatchaPulls.value),3)])])],2))}},BR=Nn(FR,[["__scopeId","data-v-f2356080"]]),kR=""+new URL("reli_ship-s6Gga_-B.png",import.meta.url).href,HR={key:0,class:"quoteBox"},zR={class:"quote"},GR={class:"author"},VR={class:"closeButtonRow"},WR={__name:"GatchaPullOverlay",props:{gameState:Object},setup(n){const e={START:0,HORIZONTAL:1,VERTICAL:2,END:3},t=Jt(e.START);return Pu(()=>{setTimeout(()=>{t.value=e.HORIZONTAL},1),setTimeout(()=>{t.value=e.VERTICAL},1200)}),(i,r)=>(Lt(),qt("div",{class:oi(["gatchaPullOverlay",{horizontal:t.value===e.HORIZONTAL,vertical:t.value===e.VERTICAL}])},[r[2]||(r[2]=Sy('<div class="curtain curtain1" data-v-6f07d8da><div class="letter" data-v-6f07d8da>P</div></div><div class="curtain curtain2" data-v-6f07d8da><div class="letter" data-v-6f07d8da>U</div></div><div class="curtain curtain3" data-v-6f07d8da><div class="letter" data-v-6f07d8da>L</div></div><div class="curtain curtain4" data-v-6f07d8da><div class="letter" data-v-6f07d8da>L</div></div><div class="curtain curtain5" data-v-6f07d8da><div class="letter" data-v-6f07d8da>!</div></div><div class="reli" data-v-6f07d8da><img src="'+kR+'" alt="Reli" data-v-6f07d8da></div>',6)),n.gameState.pickedQuote.value!=null?(Lt(),qt("div",HR,[_t("div",zR,Kn(n.gameState.pickedQuote.value.text),1),_t("div",GR,"From: "+Kn(n.gameState.pickedQuote.value.from),1),_t("div",VR,[_t("button",{onClick:r[0]||(r[0]=s=>n.gameState.completePull())},"Close")]),r[1]||(r[1]=_t("div",{class:"reliPointing"},null,-1))])):Yr("",!0)],2))}},XR=Nn(WR,[["__scopeId","data-v-6f07d8da"]]),jR=""+new URL("control_icons-B_Q2l5r4.png",import.meta.url).href,$R={class:"controlsBox"},qR={__name:"ControlsPanel",props:{modalManager:Object},setup(n){const e=n,t=()=>{const i=`
		<style type="text/css">
			.inlineStyle {
				text-align: left;
				padding: 10px 30px;
			}

			.inlineStyle a {
				color: white;
			}
		</style>`;let r=`
		<div class="inlineStyle"><small><small>

			A game by Greg Miller (Orokro/RlySrsBiz)<br>
			<br>
			<a href="http://gmiller.net" target="_blank">gmiller.net</a><br>
			<a href="https://x.com/RlySrsBiz" target="_blank">@RlySrsBiz</a>
		</small></small></div>
	`+i;e.modalManager.showModal(r,"Programming & 3D Modeling"),r=`
		<div class="inlineStyle"><small><small>
			Music by ZbotZero<br>
			<br>
			<a href="https://discord.com/invite/yZyNufZcAh" target="_blank">Discord Server</a><br>
			<a href="https://soundcloud.com/zbotzero" target="_blank">SoundCloud</a><br>
			<a href="https://www.youtube.com/@ZbotZero" target="_blank">YouTube</a><br>
		</small></small></div>
	`+i,e.modalManager.showModal(r,"Music"),r=`
		<div class="inlineStyle"><small><small>
			2D/3D Assets modeled by Greg Miller, <br>
			but additional models downloaded:<br>
			<br>
			<a href="https://free3d.com/3d-model/tree-v3--182436.html" target="_blank">Tree</a><br>
			<a href="https://sketchfab.com/3d-models/pickup-truck-scene-fcd1362ddc45471b8d53cec41ee38582" target="_blank">Truck</a><br>

		</small></small></div>
	`+i,e.modalManager.showModal(r,"Additional Art"),r=`
		<div class="inlineStyle"><small><small>
			Thanks to everyone who contributed quotes:<br>
			<small><small>${mu.map(o=>o.from).filter((o,l,c)=>c.indexOf(o)===l).join(", ")}</small></small>
		</small></small></div>
	`+i,e.modalManager.showModal(r,"Contributions")};return(i,r)=>(Lt(),qt("div",$R,[r[0]||(r[0]=_t("img",{src:jR,class:"controlsImage"},null,-1)),r[1]||(r[1]=_t("div",{class:"row row_1"},[_t("span",null,"Left Mouse"),ko(" to Rotate")],-1)),r[2]||(r[2]=_t("div",{class:"row row_2"},[_t("span",null,"Scroll"),ko(" to Zoom In/Out")],-1)),r[3]||(r[3]=_t("div",{class:"row row_3"},[_t("span",null,"Right Mouse"),ko(" to Pan")],-1)),_t("div",{class:"row row_4 creditsRow"},[_t("span",{onClick:t},"Credits")])]))}},YR=Nn(qR,[["__scopeId","data-v-933fc20b"]]),KR={class:"gameUILayer"},ZR={__name:"GameUILayer",props:{scene:Object,gameState:Object},setup(n){const e=n,t=za(()=>{const s=!e.gameState.hideUI.value,a=e.gameState.mode.value===hr.MODE.PLAYING;return s&&a});function i(){e.gameState.showMenu(hr.MENU.CATS)}function r(){e.gameState.showMenu(hr.MENU.GATCHA)}return(s,a)=>(Lt(),qt("div",KR,[Cx(_t("div",null,[$t(wR,{isOpen:n.gameState.catsMenuOpen.value,gameState:n.gameState},null,8,["isOpen","gameState"]),$t(NR,{isOpen:n.gameState.gatchaMenuOpen.value,gameState:n.gameState},null,8,["isOpen","gameState"]),$t(Cp,{icon:"cat_menu_icon",left:30,notificationCount:n.gameState.catsMenuCount.value,onClick:i},null,8,["notificationCount"]),$t(Cp,{icon:"gatcha_menu_icon",left:130,notificationCount:n.gameState.gatchaMenuCount.value,onClick:r},null,8,["notificationCount"]),$t(YR,{modalManager:n.gameState.modalManager},null,8,["modalManager"]),$t(BR,{gameState:n.gameState},null,8,["gameState"])],512),[[ky,t.value]]),n.gameState.doingPull.value?(Lt(),pr(XR,{key:0,gameState:n.gameState},null,8,["gameState"])):Yr("",!0)]))}},JR=Nn(ZR,[["__scopeId","data-v-3b71d231"]]),QR={key:0,class:"toastTitle"},eC={class:"toastMessage"},tC={__name:"ToastMsg",props:{toastManager:Object},setup(n){const e=n;return(t,i)=>(Lt(),qt("div",{class:oi(["toastBody",{show:e.toastManager.showToast.value}])},[e.toastManager.currentMessage.value.title!=""?(Lt(),qt("div",QR,Kn(e.toastManager.currentMessage.value.title),1)):Yr("",!0),_t("div",eC,Kn(e.toastManager.currentMessage.value.message),1)],2))}},nC=Nn(tC,[["__scopeId","data-v-1f554532"]]),iC={class:"modalBody"},rC={key:0,class:"modalTitle"},sC=["innerHTML"],aC={class:"closeButtonRow"},oC={__name:"ModalMsg",props:{modalManager:Object},setup(n){const e=n;return(t,i)=>(Lt(),qt("div",{class:oi(["modalLayer",{show:e.modalManager.modalIsOpen.value}])},[_t("div",iC,[e.modalManager.currentMessage.value.title!=""?(Lt(),qt("div",rC,Kn(e.modalManager.currentMessage.value.title),1)):Yr("",!0),_t("div",{innerHTML:e.modalManager.currentMessage.value.message,class:"modalMessage"},null,8,sC),_t("div",aC,[_t("button",{onClick:i[0]||(i[0]=(...r)=>e.modalManager.closeModal&&e.modalManager.closeModal(...r))}," K ")])])],2))}},lC=Nn(oC,[["__scopeId","data-v-cdea9a92"]]);class cC{constructor(){this.currentMessage=Jt({message:"",title:""}),this.modalIsOpen=Jt(!1),this.modalQueue=[],this.currentCallback=null}showModal(e,t="",i=null){const r={message:e,title:t,callback:i};this.modalIsOpen.value?this.modalQueue.push(r):this.setCurrentModal(r)}setCurrentModal(e){this.currentMessage.value={message:e.message,title:e.title},this.currentCallback=e.callback,this.modalIsOpen.value=!0}closeModal(e){this.currentCallback&&this.currentCallback(e),this.modalIsOpen.value=!1,this.modalQueue.length>0&&setTimeout(()=>{this.setCurrentModal(this.modalQueue.shift())},500)}}class uC{constructor(){this.bgm=new Audio("assets/sfx/zbot_theme.mp3"),this.gatchaTheme=new Audio("assets/sfx/zbot_gatcha.mp3"),this.bgm.loop=!0,this.initialized=!1,window.addEventListener("click",()=>{this.initialized||(this.bgm.play(),this.initialized=!0)},{once:!0})}playGatchaTheme(){this.fadeVolume(this.bgm,1,0,1e3,()=>{this.gatchaTheme.play(),this.gatchaTheme.onended=()=>{this.fadeVolume(this.bgm,0,1,1e3)}})}fadeVolume(e,t,i,r,s){const o=r/50,l=(i-t)/50;let c=0;e.volume=t;const u=setInterval(()=>{c>=50?(clearInterval(u),s&&s()):(c++,e.volume+=l)},o)}}const hC={__name:"App",setup(n){const e=new q1,t=new uC,i=new Y1(3),r=new cC,s=new hr(e,i,r,t);return window.b=t,window.s=e,window.t=i,window.m=r,window.g=s,(a,o)=>(Lt(),qt("main",null,[$t(mR,{gameState:Ir(s)},null,8,["gameState"]),$t(_R,{scene:Ir(e)},null,8,["scene"]),$t(JR,{scene:Ir(e),gameState:Ir(s)},null,8,["scene","gameState"]),$t(nC,{toastManager:Ir(i)},null,8,["toastManager"]),$t(lC,{modalManager:Ir(r)},null,8,["modalManager"])]))}};nb(hC).mount("#app");
