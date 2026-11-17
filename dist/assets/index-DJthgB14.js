(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="170",r0=0,Bh=1,l0=2,zd=1,Gd=2,is=3,Ti=0,Hn=1,wt=2,ii=0,Ys=1,Rn=2,zh=3,Gh=4,Hd=5,os=100,c0=101,h0=102,u0=103,d0=104,ac=200,f0=201,p0=202,m0=203,rc=204,lc=205,Vd=206,g0=207,Wd=208,v0=209,x0=210,_0=211,M0=212,y0=213,b0=214,cc=0,hc=1,uc=2,Fo=3,dc=4,fc=5,pc=6,mc=7,Xd=0,S0=1,w0=2,Ts=0,qd=1,Yd=2,jd=3,jr=4,A0=5,Kd=6,Zd=7,Hh="attached",E0="detached",$d=300,Oo=301,ko=302,gc=303,vc=304,Kr=306,Nn=1e3,Fi=1001,zr=1002,Ln=1003,Qd=1004,ua=1005,gi=1006,Rr=1007,as=1008,zi=1009,Jd=1010,ef=1011,Sa=1012,sh=1013,Ks=1014,Si=1015,ki=1016,oh=1017,ah=1018,Zs=1020,tf=35902,nf=1021,sf=1022,wi=1023,of=1024,af=1025,Do=1026,$s=1027,Zr=1028,rh=1029,rf=1030,lh=1031,ch=1033,Dr=33776,Ir=33777,Lr=33778,Nr=33779,xc=35840,_c=35841,Mc=35842,yc=35843,bc=36196,Sc=37492,wc=37496,Ac=37808,Ec=37809,Tc=37810,Cc=37811,Pc=37812,Rc=37813,Dc=37814,Ic=37815,Lc=37816,Nc=37817,Uc=37818,Fc=37819,Oc=37820,kc=37821,Ur=36492,Bc=36494,zc=36495,lf=36283,Gc=36284,Hc=36285,Vc=36286,wa=2300,Aa=2301,hl=2302,Vh=2400,Wh=2401,Xh=2402,T0=2500,C0=0,cf=1,Wc=2,P0=3200,Xc=3201,hh=0,R0=1,Wi="",Xt="srgb",Qn="srgb-linear",$r="linear",Jt="srgb",ro=7680,qh=519,D0=512,I0=513,L0=514,hf=515,N0=516,U0=517,F0=518,O0=519,qc=35044,Yh="300 es",rs=2e3,Gr=2001;class Xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const ma=Math.PI/180,Bo=180/Math.PI;function Bi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jn[o&255]+jn[o>>8&255]+jn[o>>16&255]+jn[o>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]).toLowerCase()}function Gn(o,e,t){return Math.max(e,Math.min(t,o))}function uh(o,e){return(o%e+e)%e}function k0(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function B0(o,e,t){return o!==e?(t-o)/(e-o):0}function ga(o,e,t){return(1-t)*o+t*e}function z0(o,e,t,n){return ga(o,e,1-Math.exp(-t*n))}function G0(o,e=1){return e-Math.abs(uh(o,e*2)-e)}function H0(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function V0(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function W0(o,e){return o+Math.floor(Math.random()*(e-o+1))}function X0(o,e){return o+Math.random()*(e-o)}function q0(o){return o*(.5-Math.random())}function Y0(o){o!==void 0&&(jh=o);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j0(o){return o*ma}function K0(o){return o*Bo}function Z0(o){return(o&o-1)===0&&o!==0}function $0(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Q0(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function J0(o,e,t,n,i){const s=Math.cos,a=Math.sin,r=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":o.set(r*h,l*u,l*d,r*c);break;case"YZY":o.set(l*d,r*h,l*u,r*c);break;case"ZXZ":o.set(l*u,l*d,r*h,r*c);break;case"XZX":o.set(r*h,l*g,l*f,r*c);break;case"YXY":o.set(l*f,r*h,l*g,r*c);break;case"ZYZ":o.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ui(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function en(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const H={DEG2RAD:ma,RAD2DEG:Bo,generateUUID:Bi,clamp:Gn,euclideanModulo:uh,mapLinear:k0,inverseLerp:B0,lerp:ga,damp:z0,pingpong:G0,smoothstep:H0,smootherstep:V0,randInt:W0,randFloat:X0,randFloatSpread:q0,seededRandom:Y0,degToRad:j0,radToDeg:K0,isPowerOfTwo:Z0,ceilPowerOfTwo:$0,floorPowerOfTwo:Q0,setQuaternionFromProperEuler:J0,normalize:en,denormalize:Ui};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(e,t,n,i,s,a,r,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,r,l,c)}set(e,t,n,i,s,a,r,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],T=i[2],w=i[5],E=i[8];return s[0]=a*v+r*_+l*T,s[3]=a*m+r*y+l*w,s[6]=a*p+r*x+l*E,s[1]=c*v+h*_+u*T,s[4]=c*m+h*y+u*w,s[7]=c*p+h*x+u*E,s[2]=d*v+f*_+g*T,s[5]=d*m+f*y+g*w,s[8]=d*p+f*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*r*c-n*s*h+n*r*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=h*a-r*c,d=r*l-h*s,f=c*s-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(r*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-r*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*r)+a+e,-i*c,i*l,-i*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ul=new Pt;function uf(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ea(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ep(){const o=Ea("canvas");return o.style.display="block",o}const Kh={};function da(o){o in Kh||(Kh[o]=!0,console.warn(o))}function tp(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function np(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ip(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zt={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Jt&&(o.r=ls(o.r),o.g=ls(o.g),o.b=ls(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Jt&&(o.r=Io(o.r),o.g=Io(o.g),o.b=Io(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wi?$r:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function ls(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Io(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Zh=[.64,.33,.3,.6,.15,.06],$h=[.2126,.7152,.0722],Qh=[.3127,.329],Jh=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[Qn]:{primaries:Zh,whitePoint:Qh,transfer:$r,toXYZ:Jh,fromXYZ:eu,luminanceCoefficients:$h,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:Zh,whitePoint:Qh,transfer:Jt,toXYZ:Jh,fromXYZ:eu,luminanceCoefficients:$h,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let lo;class sp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lo===void 0&&(lo=Ea("canvas")),lo.width=e.width,lo.height=e.height;const n=lo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ls(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let op=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?s.push(dl(i[a].image)):s.push(dl(i[a]))}else s=dl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function dl(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?sp.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ap=0;class Dn extends Xo{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=Fi,i=Fi,s=gi,a=as,r=wi,l=zi,c=Dn.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Bi(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=$d;Dn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,n=0,i=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,T=(p+1)/2,w=(h+d)/4,E=(u+v)/4,A=(g+m)/4;return y>x&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=E/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=A/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=A/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rp extends Xo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends rp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ff extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lp extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,r){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(r===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-r;const p=l*d+c*f+h*g+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,p*_);m=Math.sin(m*w)/T,r=Math.sin(r*w)/T}const x=r*_;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-r){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=r*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-r*f,e[t+2]=c*g+h*f+r*d-l*u,e[t+3]=h*g-r*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),u=r(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*r+i*c-s*l,this._y=i*h+a*l+s*r-n*c,this._z=s*h+a*c+n*l-i*r,this._w=a*h-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let r=a*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*i-r*n),h=2*(r*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-r*h,this.y=n+l*h+r*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,r=t.y,l=t.z;return this.x=i*l-s*r,this.y=s*a-n*l,this.z=n*r-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new b,tu=new ut;class cs{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Ha.subVectors(this.max,Jo),co.subVectors(e.a,Jo),ho.subVectors(e.b,Jo),uo.subVectors(e.c,Jo),ds.subVectors(ho,co),fs.subVectors(uo,ho),Ns.subVectors(co,uo);let t=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-Ns.z,Ns.y,ds.z,0,-ds.x,fs.z,0,-fs.x,Ns.z,0,-Ns.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-Ns.y,Ns.x,0];return!pl(t,co,ho,uo,Ha)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,co,ho,uo,Ha))?!1:(Va.crossVectors(ds,fs),t=[Va.x,Va.y,Va.z],pl(t,co,ho,uo,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new b,new b,new b,new b,new b,new b,new b,new b],Ri=new b,Ga=new cs,co=new b,ho=new b,uo=new b,ds=new b,fs=new b,Ns=new b,Jo=new b,Ha=new b,Va=new b,Us=new b;function pl(o,e,t,n,i){for(let s=0,a=o.length-3;s<=a;s+=3){Us.fromArray(o,s);const r=i.x*Math.abs(Us.x)+i.y*Math.abs(Us.y)+i.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const cp=new cs,ea=new b,ml=new b;class ai{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ea,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(ml)),this.expandByPoint(ea.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new b,gl=new b,Wa=new b,ps=new b,vl=new b,Xa=new b,xl=new b;class Ra{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gl.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),ps.copy(this.origin).sub(gl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wa),r=ps.dot(this.direction),l=-ps.dot(Wa),c=ps.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-r,d=a*r-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+r)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+r)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gl).addScaledVector(Wa,d),f}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const n=Qi.dot(this.direction),i=Qi.dot(Qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(r=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(r=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,i,s){vl.subVectors(t,e),Xa.subVectors(n,e),xl.crossVectors(vl,Xa);let a=this.direction.dot(xl),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;ps.subVectors(this.origin,e);const l=r*this.direction.dot(Xa.crossVectors(ps,Xa));if(l<0)return null;const c=r*this.direction.dot(vl.cross(ps));if(c<0||l+c>a)return null;const h=-r*ps.dot(xl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,i,s,a,r,l,c,h,u,d,f,g,v,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,r,l,c,h,u,d,f,g,v,m)}set(e,t,n,i,s,a,r,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fo.setFromMatrixColumn(e,0).length(),s=1/fo.setFromMatrixColumn(e,1).length(),a=1/fo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=r*h,v=r*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-r*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*r,t[4]=g*r-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-r,t[2]=f*r-g,t[6]=v+d*r,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*r,t[4]=-a*u,t[8]=g+f*r,t[1]=f+g*r,t[5]=a*h,t[9]=v-d*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=r*h,v=r*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=r*l,v=r*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-r*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=r*l,v=r*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=r*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hp,e,up)}lookAt(e,t,n){const i=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ms.crossVectors(n,fi),ms.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ms.crossVectors(n,fi)),ms.normalize(),qa.crossVectors(fi,ms),i[0]=ms.x,i[4]=qa.x,i[8]=fi.x,i[1]=ms.y,i[5]=qa.y,i[9]=fi.y,i[2]=ms.z,i[6]=qa.z,i[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],T=n[15],w=i[0],E=i[4],A=i[8],M=i[12],S=i[1],C=i[5],R=i[9],N=i[13],P=i[2],k=i[6],z=i[10],F=i[14],U=i[3],L=i[7],W=i[11],te=i[15];return s[0]=a*w+r*S+l*P+c*U,s[4]=a*E+r*C+l*k+c*L,s[8]=a*A+r*R+l*z+c*W,s[12]=a*M+r*N+l*F+c*te,s[1]=h*w+u*S+d*P+f*U,s[5]=h*E+u*C+d*k+f*L,s[9]=h*A+u*R+d*z+f*W,s[13]=h*M+u*N+d*F+f*te,s[2]=g*w+v*S+m*P+p*U,s[6]=g*E+v*C+m*k+p*L,s[10]=g*A+v*R+m*z+p*W,s[14]=g*M+v*N+m*F+p*te,s[3]=_*w+y*S+x*P+T*U,s[7]=_*E+y*C+x*k+T*L,s[11]=_*A+y*R+x*z+T*W,s[15]=_*M+y*N+x*F+T*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],r=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*r*d+n*c*d+i*r*f-n*l*f)+v*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+t*c*u-t*r*f-s*a*u+n*a*f+s*r*h-n*c*h)+p*(-i*r*h-t*l*u+t*r*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=u*m*c-v*d*c+v*l*f-r*m*f-u*l*p+r*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*r*f-a*v*f-h*r*p+a*u*p,T=g*u*l-h*v*l-g*r*d+a*v*d+h*r*m-a*u*m,w=t*_+n*y+i*x+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=_*E,e[1]=(v*d*s-u*m*s-v*i*f+n*m*f+u*i*p-n*d*p)*E,e[2]=(r*m*s-v*l*s+v*i*c-n*m*c-r*i*p+n*l*p)*E,e[3]=(u*l*s-r*d*s-u*i*c+n*d*c+r*i*f-n*l*f)*E,e[4]=y*E,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*E,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*E,e[8]=x*E,e[9]=(g*u*s-h*v*s-g*n*f+t*v*f+h*n*p-t*u*p)*E,e[10]=(a*v*s-g*r*s+g*n*c-t*v*c-a*n*p+t*r*p)*E,e[11]=(h*r*s-a*u*s-h*n*c+t*u*c+a*n*f-t*r*f)*E,e[12]=T*E,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*m+t*u*m)*E,e[14]=(g*r*i-a*v*i-g*n*l+t*v*l+a*n*m-t*r*m)*E,e[15]=(a*u*i-h*r*i+h*n*l-t*u*l-a*n*d+t*r*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,r=e.y,l=e.z,c=s*a,h=s*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*a,0,c*l-i*r,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,r=t._z,l=t._w,c=s+s,h=a+a,u=r+r,d=s*c,f=s*h,g=s*u,v=a*h,m=a*u,p=r*u,_=l*c,y=l*h,x=l*u,T=n.x,w=n.y,E=n.z;return i[0]=(1-(v+p))*T,i[1]=(f+x)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(g+y)*E,i[9]=(m-_)*E,i[10]=(1-(d+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fo.set(i[0],i[1],i[2]).length();const a=fo.set(i[4],i[5],i[6]).length(),r=fo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Di.copy(this);const c=1/s,h=1/a,u=1/r;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=u,Di.elements[9]*=u,Di.elements[10]*=u,t.setFromRotationMatrix(Di),n.x=s,n.y=a,n.z=r,this}makePerspective(e,t,n,i,s,a,r=rs){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(r===rs)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(r===Gr)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,r=rs){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,f=(n+i)*h;let g,v;if(r===rs)g=(a+s)*u,v=-2*u;else if(r===Gr)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fo=new b,Di=new nt,hp=new b(0,0,0),up=new b(1,1,1),ms=new b,qa=new b,fi=new b,nu=new nt,iu=new ut;class ui{constructor(e=0,t=0,n=0,i=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],r=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Gn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dp=0;const su=new b,po=new ut,Ji=new nt,Ya=new b,ta=new b,fp=new b,pp=new ut,ou=new b(1,0,0),au=new b(0,1,0),ru=new b(0,0,1),lu={type:"added"},mp={type:"removed"},mo={type:"childadded",child:null},_l={type:"childremoved",child:null};class Wt extends Xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new b,t=new ui,n=new ut,i=new b(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Pt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(ta,Ya,this.up):Ji.lookAt(Ya,ta,this.up),this.quaternion.setFromRotationMatrix(Ji),i&&(Ji.extractRotation(i.matrixWorld),po.setFromRotationMatrix(Ji),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),mo.child=e,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mp),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(s(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wt.DEFAULT_UP=new b(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new b,es=new b,Ml=new b,ts=new b,go=new b,vo=new b,cu=new b,yl=new b,bl=new b,Sl=new b,wl=new qt,Al=new qt,El=new qt;class bi{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ii.subVectors(e,t),i.cross(Ii);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ii.subVectors(i,t),es.subVectors(n,t),Ml.subVectors(e,t);const a=Ii.dot(Ii),r=Ii.dot(es),l=Ii.dot(Ml),c=es.dot(es),h=es.dot(Ml),u=a*c-r*r;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-r*h)*d,g=(a*h-r*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(e,t,n,i,s,a,r,l){return this.getBarycoord(e,t,n,i,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ts.x),l.addScaledVector(a,ts.y),l.addScaledVector(r,ts.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return wl.setScalar(0),Al.setScalar(0),El.setScalar(0),wl.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,n),El.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(wl,s.x),a.addScaledVector(Al,s.y),a.addScaledVector(El,s.z),a}static isFrontFacing(e,t,n,i){return Ii.subVectors(n,t),es.subVectors(e,t),Ii.cross(es).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Ii.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return bi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,r;go.subVectors(i,n),vo.subVectors(s,n),yl.subVectors(e,n);const l=go.dot(yl),c=vo.dot(yl);if(l<=0&&c<=0)return t.copy(n);bl.subVectors(e,i);const h=go.dot(bl),u=vo.dot(bl);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(go,a);Sl.subVectors(e,s);const f=go.dot(Sl),g=vo.dot(Sl);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(vo,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return cu.subVectors(s,i),r=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(cu,r);const p=1/(m+v+d);return a=v*p,r=d*p,t.copy(n).addScaledVector(go,a).addScaledVector(vo,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Tl(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=zt.workingColorSpace){if(e=uh(e,1),t=Gn(t,0,1),n=Gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Tl(a,s,e+1/3),this.g=Tl(a,s,e),this.b=Tl(a,s,e-1/3)}return zt.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return zt.fromWorkingColorSpace(Kn.copy(this),e),Math.round(Gn(Kn.r*255,0,255))*65536+Math.round(Gn(Kn.g*255,0,255))*256+Math.round(Gn(Kn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(Kn.copy(this),t);const n=Kn.r,i=Kn.g,s=Kn.b,a=Math.max(n,i,s),r=Math.min(n,i,s);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Xt){zt.fromWorkingColorSpace(Kn.copy(this),e);const t=Kn.r,n=Kn.g,i=Kn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(ja);const n=ga(gs.h,ja.h,t),i=ga(gs.s,ja.s,t),s=ga(gs.l,ja.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new ne;ne.NAMES=pf;let gp=0;class Ei extends Xo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Bi(),this.name="",this.blending=Ys,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=lc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dn extends Ei{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=new b,Ka=new Oe;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class mf extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gf extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vp=0;const _i=new nt,Cl=new Wt,xo=new b,pi=new cs,na=new cs,zn=new b;class At extends Xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uf(e)?gf:mf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const r=t[s];na.setFromBufferAttribute(r),this.morphTargetsRelative?(zn.addVectors(pi.min,na.min),pi.expandByPoint(zn),zn.addVectors(pi.max,na.max),pi.expandByPoint(zn)):(pi.expandByPoint(na.min),pi.expandByPoint(na.max))}pi.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)zn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zn));if(t)for(let s=0,a=t.length;s<a;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)zn.fromBufferAttribute(r,c),l&&(xo.fromBufferAttribute(e,c),zn.add(xo)),i=Math.max(i,n.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let A=0;A<n.count;A++)r[A]=new b,l[A]=new b;const c=new b,h=new b,u=new b,d=new Oe,f=new Oe,g=new Oe,v=new b,m=new b;function p(A,M,S){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),r[A].add(v),r[M].add(v),r[S].add(v),l[A].add(m),l[M].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,M=_.length;A<M;++A){const S=_[A],C=S.start,R=S.count;for(let N=C,P=C+R;N<P;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new b,x=new b,T=new b,w=new b;function E(A){T.fromBufferAttribute(i,A),w.copy(T);const M=r[A];y.copy(M),y.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(w,M);const C=x.dot(l[A])<0?-1:1;a.setXYZW(A,y.x,y.y,y.z,C)}for(let A=0,M=_.length;A<M;++A){const S=_[A],C=S.start,R=S.count;for(let N=C,P=C+R;N<P;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,s=new b,a=new b,r=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zn.fromBufferAttribute(e,t),zn.normalize(),e.setXYZ(t,zn.x,zn.y,zn.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=e(l,n);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new nt,Fs=new Ra,Za=new ai,uu=new b,$a=new b,Qa=new b,Ja=new b,Pl=new b,er=new b,du=new b,tr=new b;class Ve extends Wt{constructor(e=new At,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){er.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],u=s[l];h!==0&&(Pl.fromBufferAttribute(u,e),a?er.addScaledVector(Pl,h):er.addScaledVector(Pl.sub(t),h))}t.add(er)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Fs.copy(e.ray).recast(e.near),!(Za.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Za,uu)===null||Fs.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(hu.copy(s).invert(),Fs.copy(e.ray).applyMatrix4(hu),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,T=y;x<T;x+=3){const w=r.getX(x),E=r.getX(x+1),A=r.getX(x+2);i=nr(this,p,e,n,c,h,u,w,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=r.getX(m),y=r.getX(m+1),x=r.getX(m+2);i=nr(this,a,e,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,T=y;x<T;x+=3){const w=x,E=x+1,A=x+2;i=nr(this,p,e,n,c,h,u,w,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;i=nr(this,a,e,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function xp(o,e,t,n,i,s,a,r){let l;if(e.side===Hn?l=n.intersectTriangle(a,s,i,!0,r):l=n.intersectTriangle(i,s,a,e.side===Ti,r),l===null)return null;tr.copy(r),tr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(tr);return c<t.near||c>t.far?null:{distance:c,point:tr.clone(),object:o}}function nr(o,e,t,n,i,s,a,r,l,c){o.getVertexPosition(r,$a),o.getVertexPosition(l,Qa),o.getVertexPosition(c,Ja);const h=xp(o,e,t,n,$a,Qa,Ja,du);if(h){const u=new b;bi.getBarycoord(du,$a,Qa,Ja,u),i&&(h.uv=bi.getInterpolatedAttribute(i,r,l,c,u,new Oe)),s&&(h.uv1=bi.getInterpolatedAttribute(s,r,l,c,u,new Oe)),a&&(h.normal=bi.getInterpolatedAttribute(a,r,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new b,materialIndex:0};bi.getNormal($a,Qa,Ja,d.normal),h.face=d,h.barycoord=u}return h}class cn extends At{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const r=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function g(v,m,p,_,y,x,T,w,E,A,M){const S=x/E,C=T/A,R=x/2,N=T/2,P=w/2,k=E+1,z=A+1;let F=0,U=0;const L=new b;for(let W=0;W<z;W++){const te=W*C-N;for(let j=0;j<k;j++){const be=j*S-R;L[v]=be*_,L[m]=te*y,L[p]=P,c.push(L.x,L.y,L.z),L[v]=0,L[m]=0,L[p]=w>0?1:-1,h.push(L.x,L.y,L.z),u.push(j/E),u.push(1-W/A),F+=1}}for(let W=0;W<A;W++)for(let te=0;te<E;te++){const j=d+te+k*W,be=d+te+k*(W+1),Y=d+(te+1)+k*(W+1),fe=d+(te+1)+k*W;l.push(j,be,fe),l.push(be,Y,fe),U+=6}r.addGroup(f,U,M),f+=U,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ti(o){const e={};for(let t=0;t<o.length;t++){const n=zo(o[t]);for(const i in n)e[i]=n[i]}return e}function _p(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function vf(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const Oi={clone:zo,merge:ti};var Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Ei{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xf extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=rs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new b,fu=new Oe,pu=new Oe;class Xn extends xf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _o=-90,Mo=1;class bp extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xn(_o,Mo,e,t);i.layers=this.layers,this.add(i);const s=new Xn(_o,Mo,e,t);s.layers=this.layers,this.add(s);const a=new Xn(_o,Mo,e,t);a.layers=this.layers,this.add(a);const r=new Xn(_o,Mo,e,t);r.layers=this.layers,this.add(r);const l=new Xn(_o,Mo,e,t);l.layers=this.layers,this.add(l);const c=new Xn(_o,Mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,r,l]=t;for(const c of t)this.remove(c);if(e===rs)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,r),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _f extends Dn{constructor(e,t,n,i,s,a,r,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Oo,super(e,t,n,i,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sp extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _f(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new cn(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:ii});s.uniforms.tEquirect.value=t;const a=new Ve(i,s),r=t.minFilter;return t.minFilter===as&&(t.minFilter=gi),new bp(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Rl=new b,wp=new b,Ap=new Pt;class ys{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rl.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ap.getNormalMatrix(e),i=this.coplanarPoint(Rl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new ai,ir=new b;class fh{constructor(e=new ys,t=new ys,n=new ys,i=new ys,s=new ys,a=new ys){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rs){const n=this.planes,i=e.elements,s=i[0],a=i[1],r=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+_).normalize(),n[3].setComponents(l-a,d-h,m-g,x-_).normalize(),n[4].setComponents(l-r,d-u,m-v,x-y).normalize(),t===rs)n[5].setComponents(l+r,d+u,m+v,x+y).normalize();else if(t===Gr)n[5].setComponents(r,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ir.x=i.normal.x>0?e.max.x:e.min.x,ir.y=i.normal.y>0?e.max.y:e.min.y,ir.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mf(){let o=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Ep(o){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(o.bindBuffer(c,r),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];o.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(o.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:s,update:a}}class hs extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,u=e/r,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-a;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<r;_++){const y=_+c*p,x=_+c*(p+1),T=_+1+c*(p+1),w=_+1+c*p;f.push(y,x,w),f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,_m=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,Em=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ng=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Vg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,Zg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Qg=`#define TOON
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
}`,Jg=`#define TOON
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
}`,ev=`uniform float size;
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
}`,tv=`uniform vec3 diffuse;
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
}`,nv=`#include <common>
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
}`,iv=`uniform vec3 color;
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
}`,sv=`uniform float rotation;
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
}`,ov=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:Tp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Rp,alphatest_fragment:Dp,alphatest_pars_fragment:Ip,aomap_fragment:Lp,aomap_pars_fragment:Np,batching_pars_vertex:Up,batching_vertex:Fp,begin_vertex:Op,beginnormal_vertex:kp,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:jp,color_vertex:Kp,common:Zp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Qp,displacementmap_pars_vertex:Jp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:rm,envmap_pars_vertex:lm,envmap_physical_pars_fragment:_m,envmap_vertex:cm,fog_vertex:hm,fog_pars_vertex:um,fog_fragment:dm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:vm,lights_pars_begin:xm,lights_toon_fragment:Mm,lights_toon_pars_fragment:ym,lights_phong_fragment:bm,lights_phong_pars_fragment:Sm,lights_physical_fragment:wm,lights_physical_pars_fragment:Am,lights_fragment_begin:Em,lights_fragment_maps:Tm,lights_fragment_end:Cm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Im,map_fragment:Lm,map_pars_fragment:Nm,map_particle_fragment:Um,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:km,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:jm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:Jm,opaque_fragment:eg,packing:tg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:og,roughnessmap_fragment:ag,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:hg,shadowmask_pars_fragment:ug,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:vg,tonemapping_fragment:xg,tonemapping_pars_fragment:_g,transmission_fragment:Mg,transmission_pars_fragment:yg,uv_pars_fragment:bg,uv_pars_vertex:Sg,uv_vertex:wg,worldpos_vertex:Ag,background_vert:Eg,background_frag:Tg,backgroundCube_vert:Cg,backgroundCube_frag:Pg,cube_vert:Rg,cube_frag:Dg,depth_vert:Ig,depth_frag:Lg,distanceRGBA_vert:Ng,distanceRGBA_frag:Ug,equirect_vert:Fg,equirect_frag:Og,linedashed_vert:kg,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:Gg,meshlambert_vert:Hg,meshlambert_frag:Vg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:jg,meshphong_frag:Kg,meshphysical_vert:Zg,meshphysical_frag:$g,meshtoon_vert:Qg,meshtoon_frag:Jg,points_vert:ev,points_frag:tv,shadow_vert:nv,shadow_frag:iv,sprite_vert:sv,sprite_frag:ov},Ye={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Vi={basic:{uniforms:ti([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:ti([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new ne(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:ti([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:ti([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:ti([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new ne(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:ti([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:ti([Ye.points,Ye.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:ti([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:ti([Ye.common,Ye.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:ti([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:ti([Ye.sprite,Ye.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:ti([Ye.common,Ye.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:ti([Ye.lights,Ye.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Vi.physical={uniforms:ti([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const sr={r:0,b:0,g:0},ks=new ui,av=new nt;function rv(o,e,t,n,i,s,a){const r=new ne(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?p(r,l):x&&x.isColor&&(p(x,1),y=!0);const T=o.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(o.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Kr)?(h===void 0&&(h=new Ve(new cn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:zo(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ks.copy(y.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(av.makeRotationFromEuler(ks)),h.material.toneMapped=zt.getTransfer(x.colorSpace)!==Jt,(u!==x||d!==x.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ve(new hs(2,2),new nn({name:"BackgroundMaterial",uniforms:zo(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=zt.getTransfer(x.colorSpace)!==Jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(sr,vf(o)),n.buffers.color.setClear(sr.r,sr.g,sr.b,y,a)}return{getClearColor:function(){return r},setClearColor:function(_,y=1){r.set(_),l=y,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(r,l)},render:v,addToRenderList:m}}function lv(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function r(S,C,R,N,P){let k=!1;const z=u(N,R,C);s!==z&&(s=z,c(s.object)),k=f(S,N,R,P),k&&g(S,N,R,P),P!==null&&e.update(P,o.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(S,C,R,N),P!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return o.createVertexArray()}function c(S){return o.bindVertexArray(S)}function h(S){return o.deleteVertexArray(S)}function u(S,C,R){const N=R.wireframe===!0;let P=n[S.id];P===void 0&&(P={},n[S.id]=P);let k=P[C.id];k===void 0&&(k={},P[C.id]=k);let z=k[N];return z===void 0&&(z=d(l()),k[N]=z),z}function d(S){const C=[],R=[],N=[];for(let P=0;P<t;P++)C[P]=0,R[P]=0,N[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,C,R,N){const P=s.attributes,k=C.attributes;let z=0;const F=R.getAttributes();for(const U in F)if(F[U].location>=0){const W=P[U];let te=k[U];if(te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),W===void 0||W.attribute!==te||te&&W.data!==te.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(S,C,R,N){const P={},k=C.attributes;let z=0;const F=R.getAttributes();for(const U in F)if(F[U].location>=0){let W=k[U];W===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));const te={};te.attribute=W,W&&W.data&&(te.data=W.data),P[U]=te,z++}s.attributes=P,s.attributesNum=z,s.index=N}function v(){const S=s.newAttributes;for(let C=0,R=S.length;C<R;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const R=s.newAttributes,N=s.enabledAttributes,P=s.attributeDivisors;R[S]=1,N[S]===0&&(o.enableVertexAttribArray(S),N[S]=1),P[S]!==C&&(o.vertexAttribDivisor(S,C),P[S]=C)}function _(){const S=s.newAttributes,C=s.enabledAttributes;for(let R=0,N=C.length;R<N;R++)C[R]!==S[R]&&(o.disableVertexAttribArray(R),C[R]=0)}function y(S,C,R,N,P,k,z){z===!0?o.vertexAttribIPointer(S,C,R,P,k):o.vertexAttribPointer(S,C,R,N,P,k)}function x(S,C,R,N){v();const P=N.attributes,k=R.getAttributes(),z=C.defaultAttributeValues;for(const F in k){const U=k[F];if(U.location>=0){let L=P[F];if(L===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(L=S.instanceColor)),L!==void 0){const W=L.normalized,te=L.itemSize,j=e.get(L);if(j===void 0)continue;const be=j.buffer,Y=j.type,fe=j.bytesPerElement,pe=Y===o.INT||Y===o.UNSIGNED_INT||L.gpuType===sh;if(L.isInterleavedBufferAttribute){const he=L.data,J=he.stride,de=L.offset;if(he.isInstancedInterleavedBuffer){for(let ge=0;ge<U.locationSize;ge++)p(U.location+ge,he.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<U.locationSize;ge++)m(U.location+ge);o.bindBuffer(o.ARRAY_BUFFER,be);for(let ge=0;ge<U.locationSize;ge++)y(U.location+ge,te/U.locationSize,Y,W,J*fe,(de+te/U.locationSize*ge)*fe,pe)}else{if(L.isInstancedBufferAttribute){for(let he=0;he<U.locationSize;he++)p(U.location+he,L.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let he=0;he<U.locationSize;he++)m(U.location+he);o.bindBuffer(o.ARRAY_BUFFER,be);for(let he=0;he<U.locationSize;he++)y(U.location+he,te/U.locationSize,Y,W,te*fe,te/U.locationSize*he*fe,pe)}}else if(z!==void 0){const W=z[F];if(W!==void 0)switch(W.length){case 2:o.vertexAttrib2fv(U.location,W);break;case 3:o.vertexAttrib3fv(U.location,W);break;case 4:o.vertexAttrib4fv(U.location,W);break;default:o.vertexAttrib1fv(U.location,W)}}}}_()}function T(){A();for(const S in n){const C=n[S];for(const R in C){const N=C[R];for(const P in N)h(N[P].object),delete N[P];delete C[R]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const R in C){const N=C[R];for(const P in N)h(N[P].object),delete N[P];delete C[R]}delete n[S.id]}function E(S){for(const C in n){const R=n[C];if(R[S.id]===void 0)continue;const N=R[S.id];for(const P in N)h(N[P].object),delete N[P];delete R[S.id]}}function A(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:A,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function cv(o,e,t){let n;function i(c){n=c}function s(c,h){o.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(o.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function r(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function hv(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==wi&&n.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(E){const A=E===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zi&&n.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Si&&!A)}function l(E){if(E==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),_=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function uv(o){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ys,r=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=o.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let T=0;T!==y;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;r.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)a.copy(u[y]).applyMatrix4(_,r),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function dv(o){let e=new WeakMap;function t(a,r){return r===gc?a.mapping=Oo:r===vc&&(a.mapping=ko),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===gc||r===vc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sp(l.height);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Qr extends xf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=4,mu=[.125,.215,.35,.446,.526,.582],Ws=20,Dl=new Qr,gu=new ne;let Il=null,Ll=0,Nl=0,Ul=!1;const Vs=(1+Math.sqrt(5))/2,yo=1/Vs,vu=[new b(-Vs,yo,0),new b(Vs,yo,0),new b(-yo,0,Vs),new b(yo,0,Vs),new b(0,Vs,-yo),new b(0,Vs,yo),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Il=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Ll,Nl),this._renderer.xr.enabled=Ul,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oo||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:ki,format:wi,colorSpace:Qn,depthBuffer:!1},i=xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fv(s)),this._blurMaterial=pv(s,e,t)}return i}_compileMaterial(e){const t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,n,i){const r=new Xn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gu),h.toneMapping=Ts,h.autoClear=!1;const f=new dn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),g=new Ve(new cn,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(gu),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(r.up.set(0,l[p],0),r.lookAt(c[p],0,0)):_===1?(r.up.set(0,0,l[p]),r.lookAt(0,c[p],0)):(r.up.set(0,l[p],0),r.lookAt(0,0,c[p]));const y=this._cubeSize;or(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oo||e.mapping===ko;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ve(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=vu[(i-s-1)%vu.length];this._blur(e,s-1,s,a,r)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ve(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ws-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Ws;m>Ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);const p=[];let _=0;for(let E=0;E<Ws;++E){const A=E/v,M=Math.exp(-A*A/2);p.push(M),E===0?_+=M:E<m&&(_+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],T=3*x*(i>y-Co?i-y+Co:0),w=4*(this._cubeSize-x);or(t,T,w,3*x,2*x),l.setRenderTarget(t),l.render(u,Dl)}}function fv(o){const e=[],t=[],n=[];let i=o;const s=o-Co+1+mu.length;for(let a=0;a<s;a++){const r=Math.pow(2,i);t.push(r);let l=1/r;a>o-Co?l=mu[a-o+Co-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,A=w>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];_.set(M,v*g*w),y.set(d,m*g*w);const S=[w,w,w,w,w,w];x.set(S,p*g*w)}const T=new At;T.setAttribute("position",new xt(_,v)),T.setAttribute("uv",new xt(y,m)),T.setAttribute("faceIndex",new xt(x,p)),e.push(T),i>Co&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xu(o,e,t){const n=new ci(o,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function pv(o,e,t){const n=new Float32Array(Ws),i=new b(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function _u(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Mu(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function mv(o){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===gc||l===vc,h=l===Oo||l===ko;if(c||h){let u=e.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return t===null&&(t=new Yc(o)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Yc(o)),u=c?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",s),u.texture):null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gv(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&da("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vv(o,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function r(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],o.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const T=_[y+0],w=_[y+1],E=_[y+2];d.push(T,w,w,E,E,T)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const T=y+0,w=y+1,E=y+2;d.push(T,w,w,E,E,T)}}else return;const m=new(uf(d)?gf:mf)(d,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function xv(o,e,t){let n;function i(d){n=d}let s,a;function r(d){s=d.type,a=d.bytesPerElement}function l(d,f){o.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(o.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _v(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,r){switch(t.calls++,a){case o.TRIANGLES:t.triangles+=r*(s/3);break;case o.LINES:t.lines+=r*(s/2);break;case o.LINE_STRIP:t.lines+=r*(s-1);break;case o.LINE_LOOP:t.lines+=r*s;break;case o.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mv(o,e,t){const n=new WeakMap,i=new qt;function s(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(r),r.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],_=r.morphAttributes.normal||[],y=r.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let T=r.attributes.position.count*x,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const E=new Float32Array(T*w*4*u),A=new ff(E,T,w,u);A.type=Si,A.needsUpdate=!0;const M=x*4;for(let C=0;C<u;C++){const R=p[C],N=_[C],P=y[C],k=T*w*4*C;for(let z=0;z<R.count;z++){const F=z*M;g===!0&&(i.fromBufferAttribute(R,z),E[k+F+0]=i.x,E[k+F+1]=i.y,E[k+F+2]=i.z,E[k+F+3]=0),v===!0&&(i.fromBufferAttribute(N,z),E[k+F+4]=i.x,E[k+F+5]=i.y,E[k+F+6]=i.z,E[k+F+7]=0),m===!0&&(i.fromBufferAttribute(P,z),E[k+F+8]=i.x,E[k+F+9]=i.y,E[k+F+10]=i.z,E[k+F+11]=P.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Oe(T,w)},n.set(r,d),r.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",v),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function yv(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class mh extends Dn{constructor(e,t,n,i,s,a,r,l,c,h=Do){if(h!==Do&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Do&&(n=Ks),n===void 0&&h===$s&&(n=Zs),super(null,i,s,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yf=new Dn,yu=new mh(1,1),bf=new ff,Sf=new lp,wf=new _f,bu=[],Su=[],wu=new Float32Array(16),Au=new Float32Array(9),Eu=new Float32Array(4);function qo(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=bu[i];if(s===void 0&&(s=new Float32Array(i),bu[i]=s),e!==0){n.toArray(s,0);for(let a=1,r=0;a!==e;++a)r+=t,o[a].toArray(s,r)}return s}function Un(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Fn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Jr(o,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function bv(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Sv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;o.uniform2fv(this.addr,e),Fn(t,e)}}function wv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Un(t,e))return;o.uniform3fv(this.addr,e),Fn(t,e)}}function Av(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;o.uniform4fv(this.addr,e),Fn(t,e)}}function Ev(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;Eu.set(n),o.uniformMatrix2fv(this.addr,!1,Eu),Fn(t,n)}}function Tv(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;Au.set(n),o.uniformMatrix3fv(this.addr,!1,Au),Fn(t,n)}}function Cv(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;wu.set(n),o.uniformMatrix4fv(this.addr,!1,wu),Fn(t,n)}}function Pv(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Rv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;o.uniform2iv(this.addr,e),Fn(t,e)}}function Dv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;o.uniform3iv(this.addr,e),Fn(t,e)}}function Iv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;o.uniform4iv(this.addr,e),Fn(t,e)}}function Lv(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Nv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;o.uniform2uiv(this.addr,e),Fn(t,e)}}function Uv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;o.uniform3uiv(this.addr,e),Fn(t,e)}}function Fv(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;o.uniform4uiv(this.addr,e),Fn(t,e)}}function Ov(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(yu.compareFunction=hf,s=yu):s=yf,t.setTexture2D(e||s,i)}function kv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sf,i)}function Bv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wf,i)}function zv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bf,i)}function Gv(o){switch(o){case 5126:return bv;case 35664:return Sv;case 35665:return wv;case 35666:return Av;case 35674:return Ev;case 35675:return Tv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Rv;case 35668:case 35672:return Dv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Nv;case 36295:return Uv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}function Hv(o,e){o.uniform1fv(this.addr,e)}function Vv(o,e){const t=qo(e,this.size,2);o.uniform2fv(this.addr,t)}function Wv(o,e){const t=qo(e,this.size,3);o.uniform3fv(this.addr,t)}function Xv(o,e){const t=qo(e,this.size,4);o.uniform4fv(this.addr,t)}function qv(o,e){const t=qo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Yv(o,e){const t=qo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function jv(o,e){const t=qo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Kv(o,e){o.uniform1iv(this.addr,e)}function Zv(o,e){o.uniform2iv(this.addr,e)}function $v(o,e){o.uniform3iv(this.addr,e)}function Qv(o,e){o.uniform4iv(this.addr,e)}function Jv(o,e){o.uniform1uiv(this.addr,e)}function ex(o,e){o.uniform2uiv(this.addr,e)}function tx(o,e){o.uniform3uiv(this.addr,e)}function nx(o,e){o.uniform4uiv(this.addr,e)}function ix(o,e,t){const n=this.cache,i=e.length,s=Jr(t,i);Un(n,s)||(o.uniform1iv(this.addr,s),Fn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||yf,s[a])}function sx(o,e,t){const n=this.cache,i=e.length,s=Jr(t,i);Un(n,s)||(o.uniform1iv(this.addr,s),Fn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sf,s[a])}function ox(o,e,t){const n=this.cache,i=e.length,s=Jr(t,i);Un(n,s)||(o.uniform1iv(this.addr,s),Fn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wf,s[a])}function ax(o,e,t){const n=this.cache,i=e.length,s=Jr(t,i);Un(n,s)||(o.uniform1iv(this.addr,s),Fn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bf,s[a])}function rx(o){switch(o){case 5126:return Hv;case 35664:return Vv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return jv;case 5124:case 35670:return Kv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Qv;case 5125:return Jv;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}class lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gv(t.type)}}class cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rx(t.type)}}class hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function Tu(o,e){o.seq.push(e),o.map[e.id]=e}function ux(o,e,t){const n=o.name,i=n.length;for(Fl.lastIndex=0;;){const s=Fl.exec(n),a=Fl.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){Tu(t,c===void 0?new lx(r,o,e):new cx(r,o,e));break}else{let u=t.map[r];u===void 0&&(u=new hx(r),Tu(t,u)),t=u}}}class Fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);ux(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const r=t[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Cu(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const dx=37297;let fx=0;function px(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const r=a+1;n.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return n.join(`
`)}const Pu=new Pt;function mx(o){zt._getMatrix(Pu,zt.workingColorSpace,o);const e=`mat3( ${Pu.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(o)){case $r:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Ru(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+px(o.getShaderSource(e),a)}else return i}function gx(o,e){const t=mx(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vx(o,e){let t;switch(e){case qd:t="Linear";break;case Yd:t="Reinhard";break;case jd:t="Cineon";break;case jr:t="ACESFilmic";break;case Kd:t="AgX";break;case Zd:t="Neutral";break;case A0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ar=new b;function xx(){zt.getLuminanceCoefficients(ar);const o=ar.x.toFixed(4),e=ar.y.toFixed(4),t=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _x(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function Mx(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yx(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),a=s.name;let r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),t[a]={type:s.type,location:o.getAttribLocation(e,a),locationSize:r}}return t}function fa(o){return o!==""}function Du(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(o){return o.replace(bx,wx)}const Sx=new Map;function wx(o,e){let t=Lt[e];if(t===void 0){const n=Sx.get(e);if(n!==void 0)t=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(o){return o.replace(Ax,Ex)}function Ex(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nu(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tx(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function Cx(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Oo:case ko:e="ENVMAP_TYPE_CUBE";break;case Kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Px(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function Rx(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Xd:e="ENVMAP_BLENDING_MULTIPLY";break;case S0:e="ENVMAP_BLENDING_MIX";break;case w0:e="ENVMAP_BLENDING_ADD";break}return e}function Dx(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ix(o,e,t,n){const i=o.getContext(),s=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=Tx(t),c=Cx(t),h=Px(t),u=Rx(t),d=Dx(t),f=_x(t),g=Mx(s),v=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ts?"#define TONE_MAPPING":"",t.toneMapping!==Ts?Lt.tonemapping_pars_fragment:"",t.toneMapping!==Ts?vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=jc(a),a=Du(a,t),a=Iu(a,t),r=jc(r),r=Du(r,t),r=Iu(r,t),a=Lu(a),r=Lu(r),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+a,x=_+p+r,T=Cu(i,i.VERTEX_SHADER,y),w=Cu(i,i.FRAGMENT_SHADER,x);i.attachShader(v,T),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(C){if(o.debug.checkShaderErrors){const R=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(T).trim(),P=i.getShaderInfoLog(w).trim();let k=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,v,T,w);else{const F=Ru(i,T,"vertex"),U=Ru(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+F+`
`+U)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||P==="")&&(z=!1);z&&(C.diagnostics={runnable:k,programLog:R,vertexShader:{log:N,prefix:m},fragmentShader:{log:P,prefix:p}})}i.deleteShader(T),i.deleteShader(w),A=new Fr(i,v),M=yx(i,v)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,dx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let Lx=0;class Nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ux(e),t.set(e,n)),n}}class Ux{constructor(e){this.id=Lx++,this.code=e,this.usedTimes=0}}function Fx(o,e,t,n,i,s,a){const r=new dh,l=new Nx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,C,R,N){const P=R.fog,k=N.geometry,z=M.isMeshStandardMaterial?R.environment:null,F=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),U=F&&F.mapping===Kr?F.image.height:null,L=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const W=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=W!==void 0?W.length:0;let j=0;k.morphAttributes.position!==void 0&&(j=1),k.morphAttributes.normal!==void 0&&(j=2),k.morphAttributes.color!==void 0&&(j=3);let be,Y,fe,pe;if(L){const gt=Vi[L];be=gt.vertexShader,Y=gt.fragmentShader}else be=M.vertexShader,Y=M.fragmentShader,l.update(M),fe=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const he=o.getRenderTarget(),J=o.state.buffers.depth.getReversed(),de=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,Ae=!!M.map,ve=!!M.matcap,De=!!F,B=!!M.aoMap,ot=!!M.lightMap,G=!!M.bumpMap,We=!!M.normalMap,Ie=!!M.displacementMap,at=!!M.emissiveMap,je=!!M.metalnessMap,O=!!M.roughnessMap,D=M.anisotropy>0,se=M.clearcoat>0,xe=M.dispersion>0,oe=M.iridescence>0,ue=M.sheen>0,Re=M.transmission>0,we=D&&!!M.anisotropyMap,Ne=se&&!!M.clearcoatMap,dt=se&&!!M.clearcoatNormalMap,Ee=se&&!!M.clearcoatRoughnessMap,Ue=oe&&!!M.iridescenceMap,Je=oe&&!!M.iridescenceThicknessMap,ct=ue&&!!M.sheenColorMap,He=ue&&!!M.sheenRoughnessMap,mt=!!M.specularMap,ht=!!M.specularColorMap,ft=!!M.specularIntensityMap,q=Re&&!!M.transmissionMap,Ce=Re&&!!M.thicknessMap,me=!!M.gradientMap,Me=!!M.alphaMap,ke=M.alphaTest>0,Fe=!!M.alphaHash,Ze=!!M.extensions;let kt=Ts;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(kt=o.toneMapping);const Ht={shaderID:L,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:Y,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:de,instancingColor:de&&N.instanceColor!==null,instancingMorph:de&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?o.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Qn,alphaToCoverage:!!M.alphaToCoverage,map:Ae,matcap:ve,envMap:De,envMapMode:De&&F.mapping,envMapCubeUVHeight:U,aoMap:B,lightMap:ot,bumpMap:G,normalMap:We,displacementMap:d&&Ie,emissiveMap:at,normalMapObjectSpace:We&&M.normalMapType===R0,normalMapTangentSpace:We&&M.normalMapType===hh,metalnessMap:je,roughnessMap:O,anisotropy:D,anisotropyMap:we,clearcoat:se,clearcoatMap:Ne,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ee,dispersion:xe,iridescence:oe,iridescenceMap:Ue,iridescenceThicknessMap:Je,sheen:ue,sheenColorMap:ct,sheenRoughnessMap:He,specularMap:mt,specularColorMap:ht,specularIntensityMap:ft,transmission:Re,transmissionMap:q,thicknessMap:Ce,gradientMap:me,opaque:M.transparent===!1&&M.blending===Ys&&M.alphaToCoverage===!1,alphaMap:Me,alphaTest:ke,alphaHash:Fe,combine:M.combine,mapUv:Ae&&v(M.map.channel),aoMapUv:B&&v(M.aoMap.channel),lightMapUv:ot&&v(M.lightMap.channel),bumpMapUv:G&&v(M.bumpMap.channel),normalMapUv:We&&v(M.normalMap.channel),displacementMapUv:Ie&&v(M.displacementMap.channel),emissiveMapUv:at&&v(M.emissiveMap.channel),metalnessMapUv:je&&v(M.metalnessMap.channel),roughnessMapUv:O&&v(M.roughnessMap.channel),anisotropyMapUv:we&&v(M.anisotropyMap.channel),clearcoatMapUv:Ne&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:He&&v(M.sheenRoughnessMap.channel),specularMapUv:mt&&v(M.specularMap.channel),specularColorMapUv:ht&&v(M.specularColorMap.channel),specularIntensityMapUv:ft&&v(M.specularIntensityMap.channel),transmissionMapUv:q&&v(M.transmissionMap.channel),thicknessMapUv:Ce&&v(M.thicknessMap.channel),alphaMapUv:Me&&v(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(We||D),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Ae||Me),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:J,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&C.length>0,shadowMapType:o.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&zt.getTransfer(M.map.colorSpace)===Jt,decodeVideoTextureEmissive:at&&M.emissiveMap.isVideoTexture===!0&&zt.getTransfer(M.emissiveMap.colorSpace)===Jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wt,flipSided:M.side===Hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&M.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(o.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){r.disableAll(),S.supportsVertexTextures&&r.enable(0),S.instancing&&r.enable(1),S.instancingColor&&r.enable(2),S.instancingMorph&&r.enable(3),S.matcap&&r.enable(4),S.envMap&&r.enable(5),S.normalMapObjectSpace&&r.enable(6),S.normalMapTangentSpace&&r.enable(7),S.clearcoat&&r.enable(8),S.iridescence&&r.enable(9),S.alphaTest&&r.enable(10),S.vertexColors&&r.enable(11),S.vertexAlphas&&r.enable(12),S.vertexUv1s&&r.enable(13),S.vertexUv2s&&r.enable(14),S.vertexUv3s&&r.enable(15),S.vertexTangents&&r.enable(16),S.anisotropy&&r.enable(17),S.alphaHash&&r.enable(18),S.batching&&r.enable(19),S.dispersion&&r.enable(20),S.batchingColor&&r.enable(21),M.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reverseDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),M.push(r.mask)}function x(M){const S=g[M.type];let C;if(S){const R=Vi[S];C=Oi.clone(R.uniforms)}else C=M.uniforms;return C}function T(M,S){let C;for(let R=0,N=h.length;R<N;R++){const P=h[R];if(P.cacheKey===S){C=P,++C.usedTimes;break}}return C===void 0&&(C=new Ix(o,S,M,s),h.push(C)),C}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:A}}function Ox(){let o=new WeakMap;function e(a){return o.has(a)}function t(a){let r=o.get(a);return r===void 0&&(r={},o.set(a,r)),r}function n(a){o.delete(a)}function i(a,r,l){o.get(a)[r]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function kx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Uu(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Fu(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,v,m){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function r(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||kx),n.length>1&&n.sort(d||Uu),i.length>1&&i.sort(d||Uu)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:h,sort:c}}function Bx(){let o=new WeakMap;function e(n,i){const s=o.get(n);let a;return s===void 0?(a=new Fu,o.set(n,[a])):i>=s.length?(a=new Fu,s.push(a)):a=s[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function zx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ne};break;case"SpotLight":t={position:new b,direction:new b,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new b,halfWidth:new b,halfHeight:new b};break}return o[e.id]=t,t}}}function Gx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Hx=0;function Vx(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Wx(o){const e=new zx,t=Gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const i=new b,s=new nt,a=new nt;function r(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,T=0,w=0,E=0;c.sort(Vx);for(let M=0,S=c.length;M<S;M++){const C=c[M],R=C.color,N=C.intensity,P=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=R.r*N,u+=R.g*N,d+=R.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],N);E++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,U=t.get(C);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=z,f++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(R).multiplyScalar(N),z.distance=P,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[v]=z;const F=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,F.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=F.matrix,C.castShadow){const U=t.get(C);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=k,x++}v++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(R).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const F=C.shadow,U=t.get(C);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,U.shadowCameraNear=F.camera.near,U.shadowCameraFar=F.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==_||A.numPointShadows!==y||A.numSpotShadows!==x||A.numSpotMaps!==T||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=_,A.numPointShadows=y,A.numSpotShadows=x,A.numSpotMaps=T,A.numLightProbes=E,n.version=Hx++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:n}}function Ou(o){const e=new Wx(o),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function Xx(o){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let r;return a===void 0?(r=new Ou(o),e.set(i,[r])):s>=a.length?(r=new Ou(o),a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}class Kc extends Ei{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qx extends Ei{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
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
}`;function Kx(o,e,t){let n=new fh;const i=new Oe,s=new Oe,a=new qt,r=new Kc({depthPacking:Xc}),l=new qx,c={},h=t.maxTextureSize,u={[Ti]:Hn,[Hn]:Ti,[wt]:wt},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Yx,fragmentShader:jx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let p=this.type;this.render=function(w,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=o.getRenderTarget(),S=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),R=o.state;R.setBlending(ii),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const N=p!==is&&this.type===is,P=p===is&&this.type!==is;for(let k=0,z=w.length;k<z;k++){const F=w[k],U=F.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const L=U.getFrameExtents();if(i.multiply(L),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/L.x),i.x=s.x*L.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/L.y),i.y=s.y*L.y,U.mapSize.y=s.y)),U.map===null||N===!0||P===!0){const te=this.type!==is?{minFilter:Ln,magFilter:Ln}:{};U.map!==null&&U.map.dispose(),U.map=new ci(i.x,i.y,te),U.map.texture.name=F.name+".shadowMap",U.camera.updateProjectionMatrix()}o.setRenderTarget(U.map),o.clear();const W=U.getViewportCount();for(let te=0;te<W;te++){const j=U.getViewport(te);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),R.viewport(a),U.updateMatrices(F,te),n=U.getFrustum(),x(E,A,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===is&&_(U,A),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(M,S,C)};function _(w,E){const A=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ci(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(E,null,A,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(E,null,A,f,v,null)}function y(w,E,A,M){let S=null;const C=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=A.isPointLight===!0?l:r,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const R=S.uuid,N=E.uuid;let P=c[R];P===void 0&&(P={},c[R]=P);let k=P[N];k===void 0&&(k=S.clone(),P[N]=k,E.addEventListener("dispose",T)),S=k}if(S.visible=E.visible,S.wireframe=E.wireframe,M===is?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=o.properties.get(S);R.light=A}return S}function x(w,E,A,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===is)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const N=e.update(w),P=w.material;if(Array.isArray(P)){const k=N.groups;for(let z=0,F=k.length;z<F;z++){const U=k[z],L=P[U.materialIndex];if(L&&L.visible){const W=y(w,L,M,S);w.onBeforeShadow(o,w,E,A,N,W,U),o.renderBufferDirect(A,null,N,W,w,U),w.onAfterShadow(o,w,E,A,N,W,U)}}}else if(P.visible){const k=y(w,P,M,S);w.onBeforeShadow(o,w,E,A,N,k,null),o.renderBufferDirect(A,null,N,k,w,null),w.onAfterShadow(o,w,E,A,N,k,null)}}const R=w.children;for(let N=0,P=R.length;N<P;N++)x(R[N],E,A,M,S)}function T(w){w.target.removeEventListener("dispose",T);for(const A in c){const M=c[A],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Zx={[cc]:hc,[uc]:pc,[dc]:mc,[Fo]:fc,[hc]:cc,[pc]:uc,[mc]:dc,[fc]:Fo};function $x(o,e){function t(){let q=!1;const Ce=new qt;let me=null;const Me=new qt(0,0,0,0);return{setMask:function(ke){me!==ke&&!q&&(o.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){q=ke},setClear:function(ke,Fe,Ze,kt,Ht){Ht===!0&&(ke*=kt,Fe*=kt,Ze*=kt),Ce.set(ke,Fe,Ze,kt),Me.equals(Ce)===!1&&(o.clearColor(ke,Fe,Ze,kt),Me.copy(Ce))},reset:function(){q=!1,me=null,Me.set(-1,0,0,0)}}}function n(){let q=!1,Ce=!1,me=null,Me=null,ke=null;return{setReversed:function(Fe){if(Ce!==Fe){const Ze=e.get("EXT_clip_control");Ce?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const kt=ke;ke=null,this.setClear(kt)}Ce=Fe},getReversed:function(){return Ce},setTest:function(Fe){Fe?he(o.DEPTH_TEST):J(o.DEPTH_TEST)},setMask:function(Fe){me!==Fe&&!q&&(o.depthMask(Fe),me=Fe)},setFunc:function(Fe){if(Ce&&(Fe=Zx[Fe]),Me!==Fe){switch(Fe){case cc:o.depthFunc(o.NEVER);break;case hc:o.depthFunc(o.ALWAYS);break;case uc:o.depthFunc(o.LESS);break;case Fo:o.depthFunc(o.LEQUAL);break;case dc:o.depthFunc(o.EQUAL);break;case fc:o.depthFunc(o.GEQUAL);break;case pc:o.depthFunc(o.GREATER);break;case mc:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Me=Fe}},setLocked:function(Fe){q=Fe},setClear:function(Fe){ke!==Fe&&(Ce&&(Fe=1-Fe),o.clearDepth(Fe),ke=Fe)},reset:function(){q=!1,me=null,Me=null,ke=null,Ce=!1}}}function i(){let q=!1,Ce=null,me=null,Me=null,ke=null,Fe=null,Ze=null,kt=null,Ht=null;return{setTest:function(gt){q||(gt?he(o.STENCIL_TEST):J(o.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!q&&(o.stencilMask(gt),Ce=gt)},setFunc:function(gt,hn,an){(me!==gt||Me!==hn||ke!==an)&&(o.stencilFunc(gt,hn,an),me=gt,Me=hn,ke=an)},setOp:function(gt,hn,an){(Fe!==gt||Ze!==hn||kt!==an)&&(o.stencilOp(gt,hn,an),Fe=gt,Ze=hn,kt=an)},setLocked:function(gt){q=gt},setClear:function(gt){Ht!==gt&&(o.clearStencil(gt),Ht=gt)},reset:function(){q=!1,Ce=null,me=null,Me=null,ke=null,Fe=null,Ze=null,kt=null,Ht=null}}}const s=new t,a=new n,r=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,T=null,w=null,E=new ne(0,0,0),A=0,M=!1,S=null,C=null,R=null,N=null,P=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,F=0;const U=o.getParameter(o.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=F>=2);let L=null,W={};const te=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),be=new qt().fromArray(te),Y=new qt().fromArray(j);function fe(q,Ce,me,Me){const ke=new Uint8Array(4),Fe=o.createTexture();o.bindTexture(q,Fe),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ze=0;Ze<me;Ze++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ce,0,o.RGBA,1,1,Me,0,o.RGBA,o.UNSIGNED_BYTE,ke):o.texImage2D(Ce+Ze,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ke);return Fe}const pe={};pe[o.TEXTURE_2D]=fe(o.TEXTURE_2D,o.TEXTURE_2D,1),pe[o.TEXTURE_CUBE_MAP]=fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[o.TEXTURE_2D_ARRAY]=fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pe[o.TEXTURE_3D]=fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),he(o.DEPTH_TEST),a.setFunc(Fo),G(!1),We(Bh),he(o.CULL_FACE),B(ii);function he(q){h[q]!==!0&&(o.enable(q),h[q]=!0)}function J(q){h[q]!==!1&&(o.disable(q),h[q]=!1)}function de(q,Ce){return u[q]!==Ce?(o.bindFramebuffer(q,Ce),u[q]=Ce,q===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=Ce),q===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ge(q,Ce){let me=f,Me=!1;if(q){me=d.get(Ce),me===void 0&&(me=[],d.set(Ce,me));const ke=q.textures;if(me.length!==ke.length||me[0]!==o.COLOR_ATTACHMENT0){for(let Fe=0,Ze=ke.length;Fe<Ze;Fe++)me[Fe]=o.COLOR_ATTACHMENT0+Fe;me.length=ke.length,Me=!0}}else me[0]!==o.BACK&&(me[0]=o.BACK,Me=!0);Me&&o.drawBuffers(me)}function Ae(q){return g!==q?(o.useProgram(q),g=q,!0):!1}const ve={[os]:o.FUNC_ADD,[c0]:o.FUNC_SUBTRACT,[h0]:o.FUNC_REVERSE_SUBTRACT};ve[u0]=o.MIN,ve[d0]=o.MAX;const De={[ac]:o.ZERO,[f0]:o.ONE,[p0]:o.SRC_COLOR,[rc]:o.SRC_ALPHA,[x0]:o.SRC_ALPHA_SATURATE,[Wd]:o.DST_COLOR,[Vd]:o.DST_ALPHA,[m0]:o.ONE_MINUS_SRC_COLOR,[lc]:o.ONE_MINUS_SRC_ALPHA,[v0]:o.ONE_MINUS_DST_COLOR,[g0]:o.ONE_MINUS_DST_ALPHA,[_0]:o.CONSTANT_COLOR,[M0]:o.ONE_MINUS_CONSTANT_COLOR,[y0]:o.CONSTANT_ALPHA,[b0]:o.ONE_MINUS_CONSTANT_ALPHA};function B(q,Ce,me,Me,ke,Fe,Ze,kt,Ht,gt){if(q===ii){v===!0&&(J(o.BLEND),v=!1);return}if(v===!1&&(he(o.BLEND),v=!0),q!==Hd){if(q!==m||gt!==M){if((p!==os||x!==os)&&(o.blendEquation(o.FUNC_ADD),p=os,x=os),gt)switch(q){case Ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rn:o.blendFunc(o.ONE,o.ONE);break;case zh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Gh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rn:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case zh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Gh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}_=null,y=null,T=null,w=null,E.set(0,0,0),A=0,m=q,M=gt}return}ke=ke||Ce,Fe=Fe||me,Ze=Ze||Me,(Ce!==p||ke!==x)&&(o.blendEquationSeparate(ve[Ce],ve[ke]),p=Ce,x=ke),(me!==_||Me!==y||Fe!==T||Ze!==w)&&(o.blendFuncSeparate(De[me],De[Me],De[Fe],De[Ze]),_=me,y=Me,T=Fe,w=Ze),(kt.equals(E)===!1||Ht!==A)&&(o.blendColor(kt.r,kt.g,kt.b,Ht),E.copy(kt),A=Ht),m=q,M=!1}function ot(q,Ce){q.side===wt?J(o.CULL_FACE):he(o.CULL_FACE);let me=q.side===Hn;Ce&&(me=!me),G(me),q.blending===Ys&&q.transparent===!1?B(ii):B(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);const Me=q.stencilWrite;r.setTest(Me),Me&&(r.setMask(q.stencilWriteMask),r.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),r.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),at(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(o.SAMPLE_ALPHA_TO_COVERAGE):J(o.SAMPLE_ALPHA_TO_COVERAGE)}function G(q){S!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),S=q)}function We(q){q!==r0?(he(o.CULL_FACE),q!==C&&(q===Bh?o.cullFace(o.BACK):q===l0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):J(o.CULL_FACE),C=q}function Ie(q){q!==R&&(z&&o.lineWidth(q),R=q)}function at(q,Ce,me){q?(he(o.POLYGON_OFFSET_FILL),(N!==Ce||P!==me)&&(o.polygonOffset(Ce,me),N=Ce,P=me)):J(o.POLYGON_OFFSET_FILL)}function je(q){q?he(o.SCISSOR_TEST):J(o.SCISSOR_TEST)}function O(q){q===void 0&&(q=o.TEXTURE0+k-1),L!==q&&(o.activeTexture(q),L=q)}function D(q,Ce,me){me===void 0&&(L===null?me=o.TEXTURE0+k-1:me=L);let Me=W[me];Me===void 0&&(Me={type:void 0,texture:void 0},W[me]=Me),(Me.type!==q||Me.texture!==Ce)&&(L!==me&&(o.activeTexture(me),L=me),o.bindTexture(q,Ce||pe[q]),Me.type=q,Me.texture=Ce)}function se(){const q=W[L];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function xe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function oe(){try{o.compressedTexImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Re(){try{o.texSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{o.texStorage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{o.texStorage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{o.texImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Je(){try{o.texImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(q){be.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),be.copy(q))}function He(q){Y.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Y.copy(q))}function mt(q,Ce){let me=c.get(Ce);me===void 0&&(me=new WeakMap,c.set(Ce,me));let Me=me.get(q);Me===void 0&&(Me=o.getUniformBlockIndex(Ce,q.name),me.set(q,Me))}function ht(q,Ce){const Me=c.get(Ce).get(q);l.get(Ce)!==Me&&(o.uniformBlockBinding(Ce,Me,q.__bindingPointIndex),l.set(Ce,Me))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),a.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},L=null,W={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,T=null,w=null,E=new ne(0,0,0),A=0,M=!1,S=null,C=null,R=null,N=null,P=null,be.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:he,disable:J,bindFramebuffer:de,drawBuffers:ge,useProgram:Ae,setBlending:B,setMaterial:ot,setFlipSided:G,setCullFace:We,setLineWidth:Ie,setPolygonOffset:at,setScissorTest:je,activeTexture:O,bindTexture:D,unbindTexture:se,compressedTexImage2D:xe,compressedTexImage3D:oe,texImage2D:Ue,texImage3D:Je,updateUBOMapping:mt,uniformBlockBinding:ht,texStorage2D:dt,texStorage3D:Ee,texSubImage2D:ue,texSubImage3D:Re,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:ct,viewport:He,reset:ft}}function ku(o,e,t,n){const i=Qx(n);switch(t){case nf:return o*e;case of:return o*e;case af:return o*e*2;case Zr:return o*e/i.components*i.byteLength;case rh:return o*e/i.components*i.byteLength;case rf:return o*e*2/i.components*i.byteLength;case lh:return o*e*2/i.components*i.byteLength;case sf:return o*e*3/i.components*i.byteLength;case wi:return o*e*4/i.components*i.byteLength;case ch:return o*e*4/i.components*i.byteLength;case Dr:case Ir:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lr:case Nr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _c:case yc:return Math.max(o,16)*Math.max(e,8)/4;case xc:case Mc:return Math.max(o,8)*Math.max(e,8)/2;case bc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ur:case Bc:case zc:return Math.ceil(o/4)*Math.ceil(e/4)*16;case lf:case Gc:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Hc:case Vc:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qx(o){switch(o){case zi:case Jd:return{byteLength:1,components:1};case Sa:case ef:case ki:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case Ks:case sh:case Si:return{byteLength:4,components:1};case tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Jx(o,e,t,n,i,s,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,D){return f?new OffscreenCanvas(O,D):Ea("canvas")}function v(O,D,se){let xe=1;const oe=je(O);if((oe.width>se||oe.height>se)&&(xe=se/Math.max(oe.width,oe.height)),xe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ue=Math.floor(xe*oe.width),Re=Math.floor(xe*oe.height);u===void 0&&(u=g(ue,Re));const we=D?g(ue,Re):u;return we.width=ue,we.height=Re,we.getContext("2d").drawImage(O,0,0,ue,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ue+"x"+Re+")."),we}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),O;return O}function m(O){return O.generateMipmaps}function p(O){o.generateMipmap(O)}function _(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function y(O,D,se,xe,oe=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ue=D;if(D===o.RED&&(se===o.FLOAT&&(ue=o.R32F),se===o.HALF_FLOAT&&(ue=o.R16F),se===o.UNSIGNED_BYTE&&(ue=o.R8)),D===o.RED_INTEGER&&(se===o.UNSIGNED_BYTE&&(ue=o.R8UI),se===o.UNSIGNED_SHORT&&(ue=o.R16UI),se===o.UNSIGNED_INT&&(ue=o.R32UI),se===o.BYTE&&(ue=o.R8I),se===o.SHORT&&(ue=o.R16I),se===o.INT&&(ue=o.R32I)),D===o.RG&&(se===o.FLOAT&&(ue=o.RG32F),se===o.HALF_FLOAT&&(ue=o.RG16F),se===o.UNSIGNED_BYTE&&(ue=o.RG8)),D===o.RG_INTEGER&&(se===o.UNSIGNED_BYTE&&(ue=o.RG8UI),se===o.UNSIGNED_SHORT&&(ue=o.RG16UI),se===o.UNSIGNED_INT&&(ue=o.RG32UI),se===o.BYTE&&(ue=o.RG8I),se===o.SHORT&&(ue=o.RG16I),se===o.INT&&(ue=o.RG32I)),D===o.RGB_INTEGER&&(se===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),se===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),se===o.UNSIGNED_INT&&(ue=o.RGB32UI),se===o.BYTE&&(ue=o.RGB8I),se===o.SHORT&&(ue=o.RGB16I),se===o.INT&&(ue=o.RGB32I)),D===o.RGBA_INTEGER&&(se===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),se===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),se===o.UNSIGNED_INT&&(ue=o.RGBA32UI),se===o.BYTE&&(ue=o.RGBA8I),se===o.SHORT&&(ue=o.RGBA16I),se===o.INT&&(ue=o.RGBA32I)),D===o.RGB&&se===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),D===o.RGBA){const Re=oe?$r:zt.getTransfer(xe);se===o.FLOAT&&(ue=o.RGBA32F),se===o.HALF_FLOAT&&(ue=o.RGBA16F),se===o.UNSIGNED_BYTE&&(ue=Re===Jt?o.SRGB8_ALPHA8:o.RGBA8),se===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),se===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(O,D){let se;return O?D===null||D===Ks||D===Zs?se=o.DEPTH24_STENCIL8:D===Si?se=o.DEPTH32F_STENCIL8:D===Sa&&(se=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Ks||D===Zs?se=o.DEPTH_COMPONENT24:D===Si?se=o.DEPTH_COMPONENT32F:D===Sa&&(se=o.DEPTH_COMPONENT16),se}function T(O,D){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ln&&O.minFilter!==gi?Math.log2(Math.max(D.width,D.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?D.mipmaps.length:1}function w(O){const D=O.target;D.removeEventListener("dispose",w),A(D),D.isVideoTexture&&h.delete(D)}function E(O){const D=O.target;D.removeEventListener("dispose",E),S(D)}function A(O){const D=n.get(O);if(D.__webglInit===void 0)return;const se=O.source,xe=d.get(se);if(xe){const oe=xe[D.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&M(O),Object.keys(xe).length===0&&d.delete(se)}n.remove(O)}function M(O){const D=n.get(O);o.deleteTexture(D.__webglTexture);const se=O.source,xe=d.get(se);delete xe[D.__cacheKey],a.memory.textures--}function S(O){const D=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(D.__webglFramebuffer[xe]))for(let oe=0;oe<D.__webglFramebuffer[xe].length;oe++)o.deleteFramebuffer(D.__webglFramebuffer[xe][oe]);else o.deleteFramebuffer(D.__webglFramebuffer[xe]);D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer[xe])}else{if(Array.isArray(D.__webglFramebuffer))for(let xe=0;xe<D.__webglFramebuffer.length;xe++)o.deleteFramebuffer(D.__webglFramebuffer[xe]);else o.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&o.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let xe=0;xe<D.__webglColorRenderbuffer.length;xe++)D.__webglColorRenderbuffer[xe]&&o.deleteRenderbuffer(D.__webglColorRenderbuffer[xe]);D.__webglDepthRenderbuffer&&o.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const se=O.textures;for(let xe=0,oe=se.length;xe<oe;xe++){const ue=n.get(se[xe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(se[xe])}n.remove(O)}let C=0;function R(){C=0}function N(){const O=C;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),C+=1,O}function P(O){const D=[];return D.push(O.wrapS),D.push(O.wrapT),D.push(O.wrapR||0),D.push(O.magFilter),D.push(O.minFilter),D.push(O.anisotropy),D.push(O.internalFormat),D.push(O.format),D.push(O.type),D.push(O.generateMipmaps),D.push(O.premultiplyAlpha),D.push(O.flipY),D.push(O.unpackAlignment),D.push(O.colorSpace),D.join()}function k(O,D){const se=n.get(O);if(O.isVideoTexture&&Ie(O),O.isRenderTargetTexture===!1&&O.version>0&&se.__version!==O.version){const xe=O.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(se,O,D);return}}t.bindTexture(o.TEXTURE_2D,se.__webglTexture,o.TEXTURE0+D)}function z(O,D){const se=n.get(O);if(O.version>0&&se.__version!==O.version){Y(se,O,D);return}t.bindTexture(o.TEXTURE_2D_ARRAY,se.__webglTexture,o.TEXTURE0+D)}function F(O,D){const se=n.get(O);if(O.version>0&&se.__version!==O.version){Y(se,O,D);return}t.bindTexture(o.TEXTURE_3D,se.__webglTexture,o.TEXTURE0+D)}function U(O,D){const se=n.get(O);if(O.version>0&&se.__version!==O.version){fe(se,O,D);return}t.bindTexture(o.TEXTURE_CUBE_MAP,se.__webglTexture,o.TEXTURE0+D)}const L={[Nn]:o.REPEAT,[Fi]:o.CLAMP_TO_EDGE,[zr]:o.MIRRORED_REPEAT},W={[Ln]:o.NEAREST,[Qd]:o.NEAREST_MIPMAP_NEAREST,[ua]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[Rr]:o.LINEAR_MIPMAP_NEAREST,[as]:o.LINEAR_MIPMAP_LINEAR},te={[D0]:o.NEVER,[O0]:o.ALWAYS,[I0]:o.LESS,[hf]:o.LEQUAL,[L0]:o.EQUAL,[F0]:o.GEQUAL,[N0]:o.GREATER,[U0]:o.NOTEQUAL};function j(O,D){if(D.type===Si&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===gi||D.magFilter===Rr||D.magFilter===ua||D.magFilter===as||D.minFilter===gi||D.minFilter===Rr||D.minFilter===ua||D.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,L[D.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,L[D.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,L[D.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,W[D.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,W[D.minFilter]),D.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,te[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Ln||D.minFilter!==ua&&D.minFilter!==as||D.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,i.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function be(O,D){let se=!1;O.__webglInit===void 0&&(O.__webglInit=!0,D.addEventListener("dispose",w));const xe=D.source;let oe=d.get(xe);oe===void 0&&(oe={},d.set(xe,oe));const ue=P(D);if(ue!==O.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,se=!0),oe[ue].usedTimes++;const Re=oe[O.__cacheKey];Re!==void 0&&(oe[O.__cacheKey].usedTimes--,Re.usedTimes===0&&M(D)),O.__cacheKey=ue,O.__webglTexture=oe[ue].texture}return se}function Y(O,D,se){let xe=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(xe=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(xe=o.TEXTURE_3D);const oe=be(O,D),ue=D.source;t.bindTexture(xe,O.__webglTexture,o.TEXTURE0+se);const Re=n.get(ue);if(ue.version!==Re.__version||oe===!0){t.activeTexture(o.TEXTURE0+se);const we=zt.getPrimaries(zt.workingColorSpace),Ne=D.colorSpace===Wi?null:zt.getPrimaries(D.colorSpace),dt=D.colorSpace===Wi||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ee=v(D.image,!1,i.maxTextureSize);Ee=at(D,Ee);const Ue=s.convert(D.format,D.colorSpace),Je=s.convert(D.type);let ct=y(D.internalFormat,Ue,Je,D.colorSpace,D.isVideoTexture);j(xe,D);let He;const mt=D.mipmaps,ht=D.isVideoTexture!==!0,ft=Re.__version===void 0||oe===!0,q=ue.dataReady,Ce=T(D,Ee);if(D.isDepthTexture)ct=x(D.format===$s,D.type),ft&&(ht?t.texStorage2D(o.TEXTURE_2D,1,ct,Ee.width,Ee.height):t.texImage2D(o.TEXTURE_2D,0,ct,Ee.width,Ee.height,0,Ue,Je,null));else if(D.isDataTexture)if(mt.length>0){ht&&ft&&t.texStorage2D(o.TEXTURE_2D,Ce,ct,mt[0].width,mt[0].height);for(let me=0,Me=mt.length;me<Me;me++)He=mt[me],ht?q&&t.texSubImage2D(o.TEXTURE_2D,me,0,0,He.width,He.height,Ue,Je,He.data):t.texImage2D(o.TEXTURE_2D,me,ct,He.width,He.height,0,Ue,Je,He.data);D.generateMipmaps=!1}else ht?(ft&&t.texStorage2D(o.TEXTURE_2D,Ce,ct,Ee.width,Ee.height),q&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ue,Je,Ee.data)):t.texImage2D(o.TEXTURE_2D,0,ct,Ee.width,Ee.height,0,Ue,Je,Ee.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){ht&&ft&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,ct,mt[0].width,mt[0].height,Ee.depth);for(let me=0,Me=mt.length;me<Me;me++)if(He=mt[me],D.format!==wi)if(Ue!==null)if(ht){if(q)if(D.layerUpdates.size>0){const ke=ku(He.width,He.height,D.format,D.type);for(const Fe of D.layerUpdates){const Ze=He.data.subarray(Fe*ke/He.data.BYTES_PER_ELEMENT,(Fe+1)*ke/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,Fe,He.width,He.height,1,Ue,Ze)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,0,He.width,He.height,Ee.depth,Ue,He.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,me,ct,He.width,He.height,Ee.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?q&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,0,He.width,He.height,Ee.depth,Ue,Je,He.data):t.texImage3D(o.TEXTURE_2D_ARRAY,me,ct,He.width,He.height,Ee.depth,0,Ue,Je,He.data)}else{ht&&ft&&t.texStorage2D(o.TEXTURE_2D,Ce,ct,mt[0].width,mt[0].height);for(let me=0,Me=mt.length;me<Me;me++)He=mt[me],D.format!==wi?Ue!==null?ht?q&&t.compressedTexSubImage2D(o.TEXTURE_2D,me,0,0,He.width,He.height,Ue,He.data):t.compressedTexImage2D(o.TEXTURE_2D,me,ct,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?q&&t.texSubImage2D(o.TEXTURE_2D,me,0,0,He.width,He.height,Ue,Je,He.data):t.texImage2D(o.TEXTURE_2D,me,ct,He.width,He.height,0,Ue,Je,He.data)}else if(D.isDataArrayTexture)if(ht){if(ft&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,ct,Ee.width,Ee.height,Ee.depth),q)if(D.layerUpdates.size>0){const me=ku(Ee.width,Ee.height,D.format,D.type);for(const Me of D.layerUpdates){const ke=Ee.data.subarray(Me*me/Ee.data.BYTES_PER_ELEMENT,(Me+1)*me/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Me,Ee.width,Ee.height,1,Ue,Je,ke)}D.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,Je,Ee.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,ct,Ee.width,Ee.height,Ee.depth,0,Ue,Je,Ee.data);else if(D.isData3DTexture)ht?(ft&&t.texStorage3D(o.TEXTURE_3D,Ce,ct,Ee.width,Ee.height,Ee.depth),q&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,Je,Ee.data)):t.texImage3D(o.TEXTURE_3D,0,ct,Ee.width,Ee.height,Ee.depth,0,Ue,Je,Ee.data);else if(D.isFramebufferTexture){if(ft)if(ht)t.texStorage2D(o.TEXTURE_2D,Ce,ct,Ee.width,Ee.height);else{let me=Ee.width,Me=Ee.height;for(let ke=0;ke<Ce;ke++)t.texImage2D(o.TEXTURE_2D,ke,ct,me,Me,0,Ue,Je,null),me>>=1,Me>>=1}}else if(mt.length>0){if(ht&&ft){const me=je(mt[0]);t.texStorage2D(o.TEXTURE_2D,Ce,ct,me.width,me.height)}for(let me=0,Me=mt.length;me<Me;me++)He=mt[me],ht?q&&t.texSubImage2D(o.TEXTURE_2D,me,0,0,Ue,Je,He):t.texImage2D(o.TEXTURE_2D,me,ct,Ue,Je,He);D.generateMipmaps=!1}else if(ht){if(ft){const me=je(Ee);t.texStorage2D(o.TEXTURE_2D,Ce,ct,me.width,me.height)}q&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ue,Je,Ee)}else t.texImage2D(o.TEXTURE_2D,0,ct,Ue,Je,Ee);m(D)&&p(xe),Re.__version=ue.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function fe(O,D,se){if(D.image.length!==6)return;const xe=be(O,D),oe=D.source;t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+se);const ue=n.get(oe);if(oe.version!==ue.__version||xe===!0){t.activeTexture(o.TEXTURE0+se);const Re=zt.getPrimaries(zt.workingColorSpace),we=D.colorSpace===Wi?null:zt.getPrimaries(D.colorSpace),Ne=D.colorSpace===Wi||Re===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const dt=D.isCompressedTexture||D.image[0].isCompressedTexture,Ee=D.image[0]&&D.image[0].isDataTexture,Ue=[];for(let Me=0;Me<6;Me++)!dt&&!Ee?Ue[Me]=v(D.image[Me],!0,i.maxCubemapSize):Ue[Me]=Ee?D.image[Me].image:D.image[Me],Ue[Me]=at(D,Ue[Me]);const Je=Ue[0],ct=s.convert(D.format,D.colorSpace),He=s.convert(D.type),mt=y(D.internalFormat,ct,He,D.colorSpace),ht=D.isVideoTexture!==!0,ft=ue.__version===void 0||xe===!0,q=oe.dataReady;let Ce=T(D,Je);j(o.TEXTURE_CUBE_MAP,D);let me;if(dt){ht&&ft&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ce,mt,Je.width,Je.height);for(let Me=0;Me<6;Me++){me=Ue[Me].mipmaps;for(let ke=0;ke<me.length;ke++){const Fe=me[ke];D.format!==wi?ct!==null?ht?q&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,Fe.width,Fe.height,ct,Fe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,mt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,Fe.width,Fe.height,ct,He,Fe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,mt,Fe.width,Fe.height,0,ct,He,Fe.data)}}}else{if(me=D.mipmaps,ht&&ft){me.length>0&&Ce++;const Me=je(Ue[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ce,mt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ee){ht?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ue[Me].width,Ue[Me].height,ct,He,Ue[Me].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,mt,Ue[Me].width,Ue[Me].height,0,ct,He,Ue[Me].data);for(let ke=0;ke<me.length;ke++){const Ze=me[ke].image[Me].image;ht?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,Ze.width,Ze.height,ct,He,Ze.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,mt,Ze.width,Ze.height,0,ct,He,Ze.data)}}else{ht?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ct,He,Ue[Me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,mt,ct,He,Ue[Me]);for(let ke=0;ke<me.length;ke++){const Fe=me[ke];ht?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,ct,He,Fe.image[Me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,mt,ct,He,Fe.image[Me])}}}m(D)&&p(o.TEXTURE_CUBE_MAP),ue.__version=oe.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function pe(O,D,se,xe,oe,ue){const Re=s.convert(se.format,se.colorSpace),we=s.convert(se.type),Ne=y(se.internalFormat,Re,we,se.colorSpace),dt=n.get(D),Ee=n.get(se);if(Ee.__renderTarget=D,!dt.__hasExternalTextures){const Ue=Math.max(1,D.width>>ue),Je=Math.max(1,D.height>>ue);oe===o.TEXTURE_3D||oe===o.TEXTURE_2D_ARRAY?t.texImage3D(oe,ue,Ne,Ue,Je,D.depth,0,Re,we,null):t.texImage2D(oe,ue,Ne,Ue,Je,0,Re,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,O),We(D)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xe,oe,Ee.__webglTexture,0,G(D)):(oe===o.TEXTURE_2D||oe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xe,oe,Ee.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function he(O,D,se){if(o.bindRenderbuffer(o.RENDERBUFFER,O),D.depthBuffer){const xe=D.depthTexture,oe=xe&&xe.isDepthTexture?xe.type:null,ue=x(D.stencilBuffer,oe),Re=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=G(D);We(D)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ue,D.width,D.height):se?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ue,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,ue,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Re,o.RENDERBUFFER,O)}else{const xe=D.textures;for(let oe=0;oe<xe.length;oe++){const ue=xe[oe],Re=s.convert(ue.format,ue.colorSpace),we=s.convert(ue.type),Ne=y(ue.internalFormat,Re,we,ue.colorSpace),dt=G(D);se&&We(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,dt,Ne,D.width,D.height):We(D)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,dt,Ne,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function J(O,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,O),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=n.get(D.depthTexture);xe.__renderTarget=D,(!xe.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),k(D.depthTexture,0);const oe=xe.__webglTexture,ue=G(D);if(D.depthTexture.format===Do)We(D)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,oe,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,oe,0);else if(D.depthTexture.format===$s)We(D)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,oe,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function de(O){const D=n.get(O),se=O.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==O.depthTexture){const xe=O.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),xe){const oe=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,xe.removeEventListener("dispose",oe)};xe.addEventListener("dispose",oe),D.__depthDisposeCallback=oe}D.__boundDepthTexture=xe}if(O.depthTexture&&!D.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");J(D.__webglFramebuffer,O)}else if(se){D.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[xe]),D.__webglDepthbuffer[xe]===void 0)D.__webglDepthbuffer[xe]=o.createRenderbuffer(),he(D.__webglDepthbuffer[xe],O,!1);else{const oe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=D.__webglDepthbuffer[xe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,oe,o.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=o.createRenderbuffer(),he(D.__webglDepthbuffer,O,!1);else{const xe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=D.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,oe)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(O,D,se){const xe=n.get(O);D!==void 0&&pe(xe.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),se!==void 0&&de(O)}function Ae(O){const D=O.texture,se=n.get(O),xe=n.get(D);O.addEventListener("dispose",E);const oe=O.textures,ue=O.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture()),xe.__version=D.version,a.memory.textures++),ue){se.__webglFramebuffer=[];for(let we=0;we<6;we++)if(D.mipmaps&&D.mipmaps.length>0){se.__webglFramebuffer[we]=[];for(let Ne=0;Ne<D.mipmaps.length;Ne++)se.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else se.__webglFramebuffer[we]=o.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){se.__webglFramebuffer=[];for(let we=0;we<D.mipmaps.length;we++)se.__webglFramebuffer[we]=o.createFramebuffer()}else se.__webglFramebuffer=o.createFramebuffer();if(Re)for(let we=0,Ne=oe.length;we<Ne;we++){const dt=n.get(oe[we]);dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture(),a.memory.textures++)}if(O.samples>0&&We(O)===!1){se.__webglMultisampledFramebuffer=o.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let we=0;we<oe.length;we++){const Ne=oe[we];se.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,se.__webglColorRenderbuffer[we]);const dt=s.convert(Ne.format,Ne.colorSpace),Ee=s.convert(Ne.type),Ue=y(Ne.internalFormat,dt,Ee,Ne.colorSpace,O.isXRRenderTarget===!0),Je=G(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Je,Ue,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,se.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(se.__webglDepthRenderbuffer=o.createRenderbuffer(),he(se.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),j(o.TEXTURE_CUBE_MAP,D);for(let we=0;we<6;we++)if(D.mipmaps&&D.mipmaps.length>0)for(let Ne=0;Ne<D.mipmaps.length;Ne++)pe(se.__webglFramebuffer[we][Ne],O,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else pe(se.__webglFramebuffer[we],O,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);m(D)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let we=0,Ne=oe.length;we<Ne;we++){const dt=oe[we],Ee=n.get(dt);t.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),j(o.TEXTURE_2D,dt),pe(se.__webglFramebuffer,O,dt,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),m(dt)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,xe.__webglTexture),j(we,D),D.mipmaps&&D.mipmaps.length>0)for(let Ne=0;Ne<D.mipmaps.length;Ne++)pe(se.__webglFramebuffer[Ne],O,D,o.COLOR_ATTACHMENT0,we,Ne);else pe(se.__webglFramebuffer,O,D,o.COLOR_ATTACHMENT0,we,0);m(D)&&p(we),t.unbindTexture()}O.depthBuffer&&de(O)}function ve(O){const D=O.textures;for(let se=0,xe=D.length;se<xe;se++){const oe=D[se];if(m(oe)){const ue=_(O),Re=n.get(oe).__webglTexture;t.bindTexture(ue,Re),p(ue),t.unbindTexture()}}}const De=[],B=[];function ot(O){if(O.samples>0){if(We(O)===!1){const D=O.textures,se=O.width,xe=O.height;let oe=o.COLOR_BUFFER_BIT;const ue=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=n.get(O),we=D.length>1;if(we)for(let Ne=0;Ne<D.length;Ne++)t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ne=0;Ne<D.length;Ne++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(oe|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(oe|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);const dt=n.get(D[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,dt,0)}o.blitFramebuffer(0,0,se,xe,0,0,se,xe,oe,o.NEAREST),l===!0&&(De.length=0,B.length=0,De.push(o.COLOR_ATTACHMENT0+Ne),O.depthBuffer&&O.resolveDepthBuffer===!1&&(De.push(ue),B.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<D.length;Ne++){t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);const dt=n.get(D[Ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,dt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){const D=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[D])}}}function G(O){return Math.min(i.maxSamples,O.samples)}function We(O){const D=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Ie(O){const D=a.render.frame;h.get(O)!==D&&(h.set(O,D),O.update())}function at(O,D){const se=O.colorSpace,xe=O.format,oe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||se!==Qn&&se!==Wi&&(zt.getTransfer(se)===Jt?(xe!==wi||oe!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),D}function je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=R,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=U,this.rebindTextures=ge,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=We}function e_(o,e){function t(n,i=Wi){let s;const a=zt.getTransfer(i);if(n===zi)return o.UNSIGNED_BYTE;if(n===oh)return o.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return o.UNSIGNED_SHORT_5_5_5_1;if(n===tf)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Jd)return o.BYTE;if(n===ef)return o.SHORT;if(n===Sa)return o.UNSIGNED_SHORT;if(n===sh)return o.INT;if(n===Ks)return o.UNSIGNED_INT;if(n===Si)return o.FLOAT;if(n===ki)return o.HALF_FLOAT;if(n===nf)return o.ALPHA;if(n===sf)return o.RGB;if(n===wi)return o.RGBA;if(n===of)return o.LUMINANCE;if(n===af)return o.LUMINANCE_ALPHA;if(n===Do)return o.DEPTH_COMPONENT;if(n===$s)return o.DEPTH_STENCIL;if(n===Zr)return o.RED;if(n===rh)return o.RED_INTEGER;if(n===rf)return o.RG;if(n===lh)return o.RG_INTEGER;if(n===ch)return o.RGBA_INTEGER;if(n===Dr||n===Ir||n===Lr||n===Nr)if(a===Jt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===_c||n===Mc||n===yc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Sc||n===wc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bc||n===Sc)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Ec||n===Tc||n===Cc||n===Pc||n===Rc||n===Dc||n===Ic||n===Lc||n===Nc||n===Uc||n===Fc||n===Oc||n===kc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ac)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ur||n===Bc||n===zc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ur)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lf||n===Gc||n===Hc||n===Vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ur)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class t_ extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ut extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n_={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
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

}`;class o_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new nn({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a_ extends Xo{constructor(e,t){super();const n=this;let i=null,s=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new o_,m=t.getContextAttributes();let p=null,_=null;const y=[],x=[],T=new Oe;let w=null;const E=new Xn;E.viewport=new qt;const A=new Xn;A.viewport=new qt;const M=[E,A],S=new t_;let C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=y[Y];return fe===void 0&&(fe=new Ol,y[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=y[Y];return fe===void 0&&(fe=new Ol,y[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=y[Y];return fe===void 0&&(fe=new Ol,y[Y]=fe),fe.getHandSpace()};function N(Y){const fe=x.indexOf(Y.inputSource);if(fe===-1)return;const pe=y[fe];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function P(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",k);for(let Y=0;Y<y.length;Y++){const fe=x[Y];fe!==null&&(x[Y]=null,y[Y].disconnect(fe))}C=null,R=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",P),i.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ci(f.framebufferWidth,f.framebufferHeight,{format:wi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,pe=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?$s:Do,pe=m.stencil?Zs:Ks);const J={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(J),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ci(d.textureWidth,d.textureHeight,{format:wi,type:zi,depthTexture:new mh(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(Y){for(let fe=0;fe<Y.removed.length;fe++){const pe=Y.removed[fe],he=x.indexOf(pe);he>=0&&(x[he]=null,y[he].disconnect(pe))}for(let fe=0;fe<Y.added.length;fe++){const pe=Y.added[fe];let he=x.indexOf(pe);if(he===-1){for(let de=0;de<y.length;de++)if(de>=x.length){x.push(pe),he=de;break}else if(x[de]===null){x[de]=pe,he=de;break}if(he===-1)break}const J=y[he];J&&J.connect(pe)}}const z=new b,F=new b;function U(Y,fe,pe){z.setFromMatrixPosition(fe.matrixWorld),F.setFromMatrixPosition(pe.matrixWorld);const he=z.distanceTo(F),J=fe.projectionMatrix.elements,de=pe.projectionMatrix.elements,ge=J[14]/(J[10]-1),Ae=J[14]/(J[10]+1),ve=(J[9]+1)/J[5],De=(J[9]-1)/J[5],B=(J[8]-1)/J[0],ot=(de[8]+1)/de[0],G=ge*B,We=ge*ot,Ie=he/(-B+ot),at=Ie*-B;if(fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(at),Y.translateZ(Ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),J[10]===-1)Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=ge+Ie,O=Ae+Ie,D=G-at,se=We+(he-at),xe=ve*Ae/O*je,oe=De*Ae/O*je;Y.projectionMatrix.makePerspective(D,se,xe,oe,je,O),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function L(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let fe=Y.near,pe=Y.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),S.near=A.near=E.near=fe,S.far=A.far=E.far=pe,(C!==S.near||R!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,R=S.far),E.layers.mask=Y.layers.mask|2,A.layers.mask=Y.layers.mask|4,S.layers.mask=E.layers.mask|A.layers.mask;const he=Y.parent,J=S.cameras;L(S,he);for(let de=0;de<J.length;de++)L(J[de],he);J.length===2?U(S,E,A):S.projectionMatrix.copy(E.projectionMatrix),W(Y,S,he)};function W(Y,fe,pe){pe===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let te=null;function j(Y,fe){if(h=fe.getViewerPose(c||a),g=fe,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let he=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let de=0;de<pe.length;de++){const ge=pe[de];let Ae=null;if(f!==null)Ae=f.getViewport(ge);else{const De=u.getViewSubImage(d,ge);Ae=De.viewport,de===0&&(e.setRenderTargetTextures(_,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(_))}let ve=M[de];ve===void 0&&(ve=new Xn,ve.layers.enable(de),ve.viewport=new qt,M[de]=ve),ve.matrix.fromArray(ge.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ge.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),de===0&&(S.matrix.copy(ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(ve)}const J=i.enabledFeatures;if(J&&J.includes("depth-sensing")){const de=u.getDepthInformation(pe[0]);de&&de.isValid&&de.texture&&v.init(e,de,i.renderState)}}for(let pe=0;pe<y.length;pe++){const he=x[pe],J=y[pe];he!==null&&J!==void 0&&J.update(he,fe,c||a)}te&&te(Y,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const be=new Mf;be.setAnimationLoop(j),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}}const Bs=new ui,r_=new nt;function l_(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vf(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Bs.copy(x),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(Bs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function c_(o,e,t,n){let i={},s={},a=[];const r=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(_,T);const w=e.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function h(_){const y=u();_.__bindingPointIndex=y;const x=o.createBuffer(),T=_.__size,w=_.usage;return o.bindBuffer(o.UNIFORM_BUFFER,x),o.bufferData(o.UNIFORM_BUFFER,T,w),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<r;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,T=_.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let w=0,E=x.length;w<E;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,S=A.length;M<S;M++){const C=A[M];if(f(C,w,M,T)===!0){const R=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let P=0;for(let k=0;k<N.length;k++){const z=N[k],F=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,R+P,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,P),P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,R,C.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(_,y,x,T){const w=_.value,E=y+"_"+x;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{const A=T[E];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return T[E]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(_){const y=_.uniforms;let x=0;const T=16;for(let E=0,A=y.length;E<A;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,C=M.length;S<C;S++){const R=M[S],N=Array.isArray(R.value)?R.value:[R.value];for(let P=0,k=N.length;P<k;P++){const z=N[P],F=v(z),U=x%T,L=U%F.boundary,W=U+L;x+=L,W!==0&&T-W<F.storage&&(x+=T-W),R.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,x+=F.storage}}}const w=x%T;return w>0&&(x+=T-w),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const _ in i)o.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Af{constructor(e={}){const{canvas:t=ep(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Ts,this.toneMappingExposure=1;const x=this;let T=!1,w=0,E=0,A=null,M=-1,S=null;const C=new qt,R=new qt;let N=null;const P=new ne(0);let k=0,z=t.width,F=t.height,U=1,L=null,W=null;const te=new qt(0,0,z,F),j=new qt(0,0,z,F);let be=!1;const Y=new fh;let fe=!1,pe=!1;const he=new nt,J=new nt,de=new b,ge=new qt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function De(){return A===null?U:1}let B=n;function ot(I,ee){return t.getContext(I,ee)}try{const I={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ih}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),B===null){const ee="webgl2";if(B=ot(ee,I),B===null)throw ot(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let G,We,Ie,at,je,O,D,se,xe,oe,ue,Re,we,Ne,dt,Ee,Ue,Je,ct,He,mt,ht,ft,q;function Ce(){G=new gv(B),G.init(),ht=new e_(B,G),We=new hv(B,G,e,ht),Ie=new $x(B,G),We.reverseDepthBuffer&&d&&Ie.buffers.depth.setReversed(!0),at=new _v(B),je=new Ox,O=new Jx(B,G,Ie,je,We,ht,at),D=new dv(x),se=new mv(x),xe=new Ep(B),ft=new lv(B,xe),oe=new vv(B,xe,at,ft),ue=new yv(B,oe,xe,at),ct=new Mv(B,We,O),Ee=new uv(je),Re=new Fx(x,D,se,G,We,ft,Ee),we=new l_(x,je),Ne=new Bx,dt=new Xx(G),Je=new rv(x,D,se,Ie,ue,f,l),Ue=new Kx(x,ue,We),q=new c_(B,at,We,Ie),He=new cv(B,G,at),mt=new xv(B,G,at),at.programs=Re.programs,x.capabilities=We,x.extensions=G,x.properties=je,x.renderLists=Ne,x.shadowMap=Ue,x.state=Ie,x.info=at}Ce();const me=new a_(x,B);this.xr=me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=G.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=G.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(I){I!==void 0&&(U=I,this.setSize(z,F,!1))},this.getSize=function(I){return I.set(z,F)},this.setSize=function(I,ee,ie=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,F=ee,t.width=Math.floor(I*U),t.height=Math.floor(ee*U),ie===!0&&(t.style.width=I+"px",t.style.height=ee+"px"),this.setViewport(0,0,I,ee)},this.getDrawingBufferSize=function(I){return I.set(z*U,F*U).floor()},this.setDrawingBufferSize=function(I,ee,ie){z=I,F=ee,U=ie,t.width=Math.floor(I*ie),t.height=Math.floor(ee*ie),this.setViewport(0,0,I,ee)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(te)},this.setViewport=function(I,ee,ie,ae){I.isVector4?te.set(I.x,I.y,I.z,I.w):te.set(I,ee,ie,ae),Ie.viewport(C.copy(te).multiplyScalar(U).round())},this.getScissor=function(I){return I.copy(j)},this.setScissor=function(I,ee,ie,ae){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,ee,ie,ae),Ie.scissor(R.copy(j).multiplyScalar(U).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(I){Ie.setScissorTest(be=I)},this.setOpaqueSort=function(I){L=I},this.setTransparentSort=function(I){W=I},this.getClearColor=function(I){return I.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(I=!0,ee=!0,ie=!0){let ae=0;if(I){let $=!1;if(A!==null){const _e=A.texture.format;$=_e===ch||_e===lh||_e===rh}if($){const _e=A.texture.type,Be=_e===zi||_e===Ks||_e===Sa||_e===Zs||_e===oh||_e===ah,$e=Je.getClearColor(),qe=Je.getClearAlpha(),rt=$e.r,pt=$e.g,Le=$e.b;Be?(g[0]=rt,g[1]=pt,g[2]=Le,g[3]=qe,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=rt,v[1]=pt,v[2]=Le,v[3]=qe,B.clearBufferiv(B.COLOR,0,v))}else ae|=B.COLOR_BUFFER_BIT}ee&&(ae|=B.DEPTH_BUFFER_BIT),ie&&(ae|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Ne.dispose(),dt.dispose(),je.dispose(),D.dispose(),se.dispose(),ue.dispose(),ft.dispose(),q.dispose(),Re.dispose(),me.dispose(),me.removeEventListener("sessionstart",Mn),me.removeEventListener("sessionend",qn),An.stop()};function Me(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const I=at.autoReset,ee=Ue.enabled,ie=Ue.autoUpdate,ae=Ue.needsUpdate,$=Ue.type;Ce(),at.autoReset=I,Ue.enabled=ee,Ue.autoUpdate=ie,Ue.needsUpdate=ae,Ue.type=$}function Fe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ze(I){const ee=I.target;ee.removeEventListener("dispose",Ze),kt(ee)}function kt(I){Ht(I),je.remove(I)}function Ht(I){const ee=je.get(I).programs;ee!==void 0&&(ee.forEach(function(ie){Re.releaseProgram(ie)}),I.isShaderMaterial&&Re.releaseShaderCache(I))}this.renderBufferDirect=function(I,ee,ie,ae,$,_e){ee===null&&(ee=Ae);const Be=$.isMesh&&$.matrixWorld.determinant()<0,$e=yn(I,ee,ie,ae,$);Ie.setMaterial(ae,Be);let qe=ie.index,rt=1;if(ae.wireframe===!0){if(qe=oe.getWireframeAttribute(ie),qe===void 0)return;rt=2}const pt=ie.drawRange,Le=ie.attributes.position;let X=pt.start*rt,Xe=(pt.start+pt.count)*rt;_e!==null&&(X=Math.max(X,_e.start*rt),Xe=Math.min(Xe,(_e.start+_e.count)*rt)),qe!==null?(X=Math.max(X,0),Xe=Math.min(Xe,qe.count)):Le!=null&&(X=Math.max(X,0),Xe=Math.min(Xe,Le.count));const it=Xe-X;if(it<0||it===1/0)return;ft.setup($,ae,$e,ie,qe);let K,le=He;if(qe!==null&&(K=xe.get(qe),le=mt,le.setIndex(K)),$.isMesh)ae.wireframe===!0?(Ie.setLineWidth(ae.wireframeLinewidth*De()),le.setMode(B.LINES)):le.setMode(B.TRIANGLES);else if($.isLine){let Z=ae.linewidth;Z===void 0&&(Z=1),Ie.setLineWidth(Z*De()),$.isLineSegments?le.setMode(B.LINES):$.isLineLoop?le.setMode(B.LINE_LOOP):le.setMode(B.LINE_STRIP)}else $.isPoints?le.setMode(B.POINTS):$.isSprite&&le.setMode(B.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)le.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))le.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Z=$._multiDrawStarts,ye=$._multiDrawCounts,ce=$._multiDrawCount,re=qe?xe.get(qe).bytesPerElement:1,Q=je.get(ae).currentProgram.getUniforms();for(let Pe=0;Pe<ce;Pe++)Q.setValue(B,"_gl_DrawID",Pe),le.render(Z[Pe]/re,ye[Pe])}else if($.isInstancedMesh)le.renderInstances(X,it,$.count);else if(ie.isInstancedBufferGeometry){const Z=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ye=Math.min(ie.instanceCount,Z);le.renderInstances(X,it,ye)}else le.render(X,it)};function gt(I,ee,ie){I.transparent===!0&&I.side===wt&&I.forceSinglePass===!1?(I.side=Hn,I.needsUpdate=!0,kn(I,ee,ie),I.side=Ti,I.needsUpdate=!0,kn(I,ee,ie),I.side=wt):kn(I,ee,ie)}this.compile=function(I,ee,ie=null){ie===null&&(ie=I),p=dt.get(ie),p.init(ee),y.push(p),ie.traverseVisible(function($){$.isLight&&$.layers.test(ee.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),I!==ie&&I.traverseVisible(function($){$.isLight&&$.layers.test(ee.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const ae=new Set;return I.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const _e=$.material;if(_e)if(Array.isArray(_e))for(let Be=0;Be<_e.length;Be++){const $e=_e[Be];gt($e,ie,$),ae.add($e)}else gt(_e,ie,$),ae.add(_e)}),y.pop(),p=null,ae},this.compileAsync=function(I,ee,ie=null){const ae=this.compile(I,ee,ie);return new Promise($=>{function _e(){if(ae.forEach(function(Be){je.get(Be).currentProgram.isReady()&&ae.delete(Be)}),ae.size===0){$(I);return}setTimeout(_e,10)}G.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let hn=null;function an(I){hn&&hn(I)}function Mn(){An.stop()}function qn(){An.start()}const An=new Mf;An.setAnimationLoop(an),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(I){hn=I,me.setAnimationLoop(I),I===null?An.stop():An.start()},me.addEventListener("sessionstart",Mn),me.addEventListener("sessionend",qn),this.render=function(I,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(ee),ee=me.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,ee,A),p=dt.get(I,y.length),p.init(ee),y.push(p),J.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Y.setFromProjectionMatrix(J),pe=this.localClippingEnabled,fe=Ee.init(this.clippingPlanes,pe),m=Ne.get(I,_.length),m.init(),_.push(m),me.enabled===!0&&me.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&tt(_e,ee,-1/0,x.sortObjects)}tt(I,ee,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(L,W),ve=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ve&&Je.addToRenderList(m,I),this.info.render.frame++,fe===!0&&Ee.beginShadows();const ie=p.state.shadowsArray;Ue.render(ie,I,ee),fe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=m.opaque,$=m.transmissive;if(p.setupLights(),ee.isArrayCamera){const _e=ee.cameras;if($.length>0)for(let Be=0,$e=_e.length;Be<$e;Be++){const qe=_e[Be];un(ae,$,I,qe)}ve&&Je.render(I);for(let Be=0,$e=_e.length;Be<$e;Be++){const qe=_e[Be];Et(m,I,qe,qe.viewport)}}else $.length>0&&un(ae,$,I,ee),ve&&Je.render(I),Et(m,I,ee);A!==null&&(O.updateMultisampleRenderTarget(A),O.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(x,I,ee),ft.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],fe===!0&&Ee.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function tt(I,ee,ie,ae){if(I.visible===!1)return;if(I.layers.test(ee.layers)){if(I.isGroup)ie=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ee);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Y.intersectsSprite(I)){ae&&ge.setFromMatrixPosition(I.matrixWorld).applyMatrix4(J);const Be=ue.update(I),$e=I.material;$e.visible&&m.push(I,Be,$e,ie,ge.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Y.intersectsObject(I))){const Be=ue.update(I),$e=I.material;if(ae&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ge.copy(I.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),ge.copy(Be.boundingSphere.center)),ge.applyMatrix4(I.matrixWorld).applyMatrix4(J)),Array.isArray($e)){const qe=Be.groups;for(let rt=0,pt=qe.length;rt<pt;rt++){const Le=qe[rt],X=$e[Le.materialIndex];X&&X.visible&&m.push(I,Be,X,ie,ge.z,Le)}}else $e.visible&&m.push(I,Be,$e,ie,ge.z,null)}}const _e=I.children;for(let Be=0,$e=_e.length;Be<$e;Be++)tt(_e[Be],ee,ie,ae)}function Et(I,ee,ie,ae){const $=I.opaque,_e=I.transmissive,Be=I.transparent;p.setupLightsView(ie),fe===!0&&Ee.setGlobalState(x.clippingPlanes,ie),ae&&Ie.viewport(C.copy(ae)),$.length>0&&On($,ee,ie),_e.length>0&&On(_e,ee,ie),Be.length>0&&On(Be,ee,ie),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function un(I,ee,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ae.id]===void 0&&(p.state.transmissionRenderTarget[ae.id]=new ci(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?ki:zi,minFilter:as,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const _e=p.state.transmissionRenderTarget[ae.id],Be=ae.viewport||C;_e.setSize(Be.z,Be.w);const $e=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(P),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),ve&&Je.render(ie);const qe=x.toneMapping;x.toneMapping=Ts;const rt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),p.setupLightsView(ae),fe===!0&&Ee.setGlobalState(x.clippingPlanes,ae),On(I,ie,ae),O.updateMultisampleRenderTarget(_e),O.updateRenderTargetMipmap(_e),G.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Le=0,X=ee.length;Le<X;Le++){const Xe=ee[Le],it=Xe.object,K=Xe.geometry,le=Xe.material,Z=Xe.group;if(le.side===wt&&it.layers.test(ae.layers)){const ye=le.side;le.side=Hn,le.needsUpdate=!0,gn(it,ie,ae,K,le,Z),le.side=ye,le.needsUpdate=!0,pt=!0}}pt===!0&&(O.updateMultisampleRenderTarget(_e),O.updateRenderTargetMipmap(_e))}x.setRenderTarget($e),x.setClearColor(P,k),rt!==void 0&&(ae.viewport=rt),x.toneMapping=qe}function On(I,ee,ie){const ae=ee.isScene===!0?ee.overrideMaterial:null;for(let $=0,_e=I.length;$<_e;$++){const Be=I[$],$e=Be.object,qe=Be.geometry,rt=ae===null?Be.material:ae,pt=Be.group;$e.layers.test(ie.layers)&&gn($e,ee,ie,qe,rt,pt)}}function gn(I,ee,ie,ae,$,_e){I.onBeforeRender(x,ee,ie,ae,$,_e),I.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(x,ee,ie,ae,I,_e),$.transparent===!0&&$.side===wt&&$.forceSinglePass===!1?($.side=Hn,$.needsUpdate=!0,x.renderBufferDirect(ie,ee,ae,$,I,_e),$.side=Ti,$.needsUpdate=!0,x.renderBufferDirect(ie,ee,ae,$,I,_e),$.side=wt):x.renderBufferDirect(ie,ee,ae,$,I,_e),I.onAfterRender(x,ee,ie,ae,$,_e)}function kn(I,ee,ie){ee.isScene!==!0&&(ee=Ae);const ae=je.get(I),$=p.state.lights,_e=p.state.shadowsArray,Be=$.state.version,$e=Re.getParameters(I,$.state,_e,ee,ie),qe=Re.getProgramCacheKey($e);let rt=ae.programs;ae.environment=I.isMeshStandardMaterial?ee.environment:null,ae.fog=ee.fog,ae.envMap=(I.isMeshStandardMaterial?se:D).get(I.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&I.envMap===null?ee.environmentRotation:I.envMapRotation,rt===void 0&&(I.addEventListener("dispose",Ze),rt=new Map,ae.programs=rt);let pt=rt.get(qe);if(pt!==void 0){if(ae.currentProgram===pt&&ae.lightsStateVersion===Be)return Ct(I,$e),pt}else $e.uniforms=Re.getUniforms(I),I.onBeforeCompile($e,x),pt=Re.acquireProgram($e,qe),rt.set(qe,pt),ae.uniforms=$e.uniforms;const Le=ae.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Le.clippingPlanes=Ee.uniform),Ct(I,$e),ae.needsLights=vt(I),ae.lightsStateVersion=Be,ae.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.directionalShadowMap.value=$.state.directionalShadowMap,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotShadowMap.value=$.state.spotShadowMap,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMap.value=$.state.pointShadowMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix),ae.currentProgram=pt,ae.uniformsList=null,pt}function sn(I){if(I.uniformsList===null){const ee=I.currentProgram.getUniforms();I.uniformsList=Fr.seqWithValue(ee.seq,I.uniforms)}return I.uniformsList}function Ct(I,ee){const ie=je.get(I);ie.outputColorSpace=ee.outputColorSpace,ie.batching=ee.batching,ie.batchingColor=ee.batchingColor,ie.instancing=ee.instancing,ie.instancingColor=ee.instancingColor,ie.instancingMorph=ee.instancingMorph,ie.skinning=ee.skinning,ie.morphTargets=ee.morphTargets,ie.morphNormals=ee.morphNormals,ie.morphColors=ee.morphColors,ie.morphTargetsCount=ee.morphTargetsCount,ie.numClippingPlanes=ee.numClippingPlanes,ie.numIntersection=ee.numClipIntersection,ie.vertexAlphas=ee.vertexAlphas,ie.vertexTangents=ee.vertexTangents,ie.toneMapping=ee.toneMapping}function yn(I,ee,ie,ae,$){ee.isScene!==!0&&(ee=Ae),O.resetTextureUnits();const _e=ee.fog,Be=ae.isMeshStandardMaterial?ee.environment:null,$e=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qn,qe=(ae.isMeshStandardMaterial?se:D).get(ae.envMap||Be),rt=ae.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pt=!!ie.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Le=!!ie.morphAttributes.position,X=!!ie.morphAttributes.normal,Xe=!!ie.morphAttributes.color;let it=Ts;ae.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(it=x.toneMapping);const K=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,le=K!==void 0?K.length:0,Z=je.get(ae),ye=p.state.lights;if(fe===!0&&(pe===!0||I!==S)){const Ft=I===S&&ae.id===M;Ee.setState(ae,I,Ft)}let ce=!1;ae.version===Z.__version?(Z.needsLights&&Z.lightsStateVersion!==ye.state.version||Z.outputColorSpace!==$e||$.isBatchedMesh&&Z.batching===!1||!$.isBatchedMesh&&Z.batching===!0||$.isBatchedMesh&&Z.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Z.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Z.instancing===!1||!$.isInstancedMesh&&Z.instancing===!0||$.isSkinnedMesh&&Z.skinning===!1||!$.isSkinnedMesh&&Z.skinning===!0||$.isInstancedMesh&&Z.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Z.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Z.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Z.instancingMorph===!1&&$.morphTexture!==null||Z.envMap!==qe||ae.fog===!0&&Z.fog!==_e||Z.numClippingPlanes!==void 0&&(Z.numClippingPlanes!==Ee.numPlanes||Z.numIntersection!==Ee.numIntersection)||Z.vertexAlphas!==rt||Z.vertexTangents!==pt||Z.morphTargets!==Le||Z.morphNormals!==X||Z.morphColors!==Xe||Z.toneMapping!==it||Z.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Z.__version=ae.version);let re=Z.currentProgram;ce===!0&&(re=kn(ae,ee,$));let Q=!1,Pe=!1,et=!1;const lt=re.getUniforms(),Yt=Z.uniforms;if(Ie.useProgram(re.program)&&(Q=!0,Pe=!0,et=!0),ae.id!==M&&(M=ae.id,Pe=!0),Q||S!==I){Ie.buffers.depth.getReversed()?(he.copy(I.projectionMatrix),np(he),ip(he),lt.setValue(B,"projectionMatrix",he)):lt.setValue(B,"projectionMatrix",I.projectionMatrix),lt.setValue(B,"viewMatrix",I.matrixWorldInverse);const En=lt.map.cameraPosition;En!==void 0&&En.setValue(B,de.setFromMatrixPosition(I.matrixWorld)),We.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&lt.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,Pe=!0,et=!0)}if($.isSkinnedMesh){lt.setOptional(B,$,"bindMatrix"),lt.setOptional(B,$,"bindMatrixInverse");const Ft=$.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),lt.setValue(B,"boneTexture",Ft.boneTexture,O))}$.isBatchedMesh&&(lt.setOptional(B,$,"batchingTexture"),lt.setValue(B,"batchingTexture",$._matricesTexture,O),lt.setOptional(B,$,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",$._indirectTexture,O),lt.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",$._colorsTexture,O));const rn=ie.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&ct.update($,ie,re),(Pe||Z.receiveShadow!==$.receiveShadow)&&(Z.receiveShadow=$.receiveShadow,lt.setValue(B,"receiveShadow",$.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Yt.envMap.value=qe,Yt.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&ee.environment!==null&&(Yt.envMapIntensity.value=ee.environmentIntensity),Pe&&(lt.setValue(B,"toneMappingExposure",x.toneMappingExposure),Z.needsLights&&vn(Yt,et),_e&&ae.fog===!0&&we.refreshFogUniforms(Yt,_e),we.refreshMaterialUniforms(Yt,ae,U,F,p.state.transmissionRenderTarget[I.id]),Fr.upload(B,sn(Z),Yt,O)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Fr.upload(B,sn(Z),Yt,O),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&lt.setValue(B,"center",$.center),lt.setValue(B,"modelViewMatrix",$.modelViewMatrix),lt.setValue(B,"normalMatrix",$.normalMatrix),lt.setValue(B,"modelMatrix",$.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Ft=ae.uniformsGroups;for(let En=0,Rt=Ft.length;En<Rt;En++){const In=Ft[En];q.update(In,re),q.bind(In,re)}}return re}function vn(I,ee){I.ambientLightColor.needsUpdate=ee,I.lightProbe.needsUpdate=ee,I.directionalLights.needsUpdate=ee,I.directionalLightShadows.needsUpdate=ee,I.pointLights.needsUpdate=ee,I.pointLightShadows.needsUpdate=ee,I.spotLights.needsUpdate=ee,I.spotLightShadows.needsUpdate=ee,I.rectAreaLights.needsUpdate=ee,I.hemisphereLights.needsUpdate=ee}function vt(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,ee,ie){je.get(I.texture).__webglTexture=ee,je.get(I.depthTexture).__webglTexture=ie;const ae=je.get(I);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=ie===void 0,ae.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,ee){const ie=je.get(I);ie.__webglFramebuffer=ee,ie.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(I,ee=0,ie=0){A=I,w=ee,E=ie;let ae=!0,$=null,_e=!1,Be=!1;if(I){const qe=je.get(I);if(qe.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(B.FRAMEBUFFER,null),ae=!1;else if(qe.__webglFramebuffer===void 0)O.setupRenderTarget(I);else if(qe.__hasExternalTextures)O.rebindTextures(I,je.get(I.texture).__webglTexture,je.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Le=I.depthTexture;if(qe.__boundDepthTexture!==Le){if(Le!==null&&je.has(Le)&&(I.width!==Le.image.width||I.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(I)}}const rt=I.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Be=!0);const pt=je.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(pt[ee])?$=pt[ee][ie]:$=pt[ee],_e=!0):I.samples>0&&O.useMultisampledRTT(I)===!1?$=je.get(I).__webglMultisampledFramebuffer:Array.isArray(pt)?$=pt[ie]:$=pt,C.copy(I.viewport),R.copy(I.scissor),N=I.scissorTest}else C.copy(te).multiplyScalar(U).floor(),R.copy(j).multiplyScalar(U).floor(),N=be;if(Ie.bindFramebuffer(B.FRAMEBUFFER,$)&&ae&&Ie.drawBuffers(I,$),Ie.viewport(C),Ie.scissor(R),Ie.setScissorTest(N),_e){const qe=je.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+ee,qe.__webglTexture,ie)}else if(Be){const qe=je.get(I.texture),rt=ee||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.__webglTexture,ie||0,rt)}M=-1},this.readRenderTargetPixels=function(I,ee,ie,ae,$,_e,Be){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=je.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Be!==void 0&&($e=$e[Be]),$e){Ie.bindFramebuffer(B.FRAMEBUFFER,$e);try{const qe=I.texture,rt=qe.format,pt=qe.type;if(!We.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=I.width-ae&&ie>=0&&ie<=I.height-$&&B.readPixels(ee,ie,ae,$,ht.convert(rt),ht.convert(pt),_e)}finally{const qe=A!==null?je.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(I,ee,ie,ae,$,_e,Be){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=je.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Be!==void 0&&($e=$e[Be]),$e){const qe=I.texture,rt=qe.format,pt=qe.type;if(!We.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ee>=0&&ee<=I.width-ae&&ie>=0&&ie<=I.height-$){Ie.bindFramebuffer(B.FRAMEBUFFER,$e);const Le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Le),B.bufferData(B.PIXEL_PACK_BUFFER,_e.byteLength,B.STREAM_READ),B.readPixels(ee,ie,ae,$,ht.convert(rt),ht.convert(pt),0);const X=A!==null?je.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(B.FRAMEBUFFER,X);const Xe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await tp(B,Xe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_e),B.deleteBuffer(Le),B.deleteSync(Xe),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,ee=null,ie=0){I.isTexture!==!0&&(da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ee=arguments[0]||null,I=arguments[1]);const ae=Math.pow(2,-ie),$=Math.floor(I.image.width*ae),_e=Math.floor(I.image.height*ae),Be=ee!==null?ee.x:0,$e=ee!==null?ee.y:0;O.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,Be,$e,$,_e),Ie.unbindTexture()},this.copyTextureToTexture=function(I,ee,ie=null,ae=null,$=0){I.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,I=arguments[1],ee=arguments[2],$=arguments[3]||0,ie=null);let _e,Be,$e,qe,rt,pt,Le,X,Xe;const it=I.isCompressedTexture?I.mipmaps[$]:I.image;ie!==null?(_e=ie.max.x-ie.min.x,Be=ie.max.y-ie.min.y,$e=ie.isBox3?ie.max.z-ie.min.z:1,qe=ie.min.x,rt=ie.min.y,pt=ie.isBox3?ie.min.z:0):(_e=it.width,Be=it.height,$e=it.depth||1,qe=0,rt=0,pt=0),ae!==null?(Le=ae.x,X=ae.y,Xe=ae.z):(Le=0,X=0,Xe=0);const K=ht.convert(ee.format),le=ht.convert(ee.type);let Z;ee.isData3DTexture?(O.setTexture3D(ee,0),Z=B.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(O.setTexture2DArray(ee,0),Z=B.TEXTURE_2D_ARRAY):(O.setTexture2D(ee,0),Z=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ee.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ee.unpackAlignment);const ye=B.getParameter(B.UNPACK_ROW_LENGTH),ce=B.getParameter(B.UNPACK_IMAGE_HEIGHT),re=B.getParameter(B.UNPACK_SKIP_PIXELS),Q=B.getParameter(B.UNPACK_SKIP_ROWS),Pe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,it.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,it.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qe),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,pt);const et=I.isDataArrayTexture||I.isData3DTexture,lt=ee.isDataArrayTexture||ee.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Yt=je.get(I),rn=je.get(ee),Ft=je.get(Yt.__renderTarget),En=je.get(rn.__renderTarget);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let Rt=0;Rt<$e;Rt++)et&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(I).__webglTexture,$,pt+Rt),I.isDepthTexture?(lt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(ee).__webglTexture,$,Xe+Rt),B.blitFramebuffer(qe,rt,_e,Be,Le,X,_e,Be,B.DEPTH_BUFFER_BIT,B.NEAREST)):lt?B.copyTexSubImage3D(Z,$,Le,X,Xe+Rt,qe,rt,_e,Be):B.copyTexSubImage2D(Z,$,Le,X,Xe+Rt,qe,rt,_e,Be);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else lt?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(Z,$,Le,X,Xe,_e,Be,$e,K,le,it.data):ee.isCompressedArrayTexture?B.compressedTexSubImage3D(Z,$,Le,X,Xe,_e,Be,$e,K,it.data):B.texSubImage3D(Z,$,Le,X,Xe,_e,Be,$e,K,le,it):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,$,Le,X,_e,Be,K,le,it.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,$,Le,X,it.width,it.height,K,it.data):B.texSubImage2D(B.TEXTURE_2D,$,Le,X,_e,Be,K,le,it);B.pixelStorei(B.UNPACK_ROW_LENGTH,ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce),B.pixelStorei(B.UNPACK_SKIP_PIXELS,re),B.pixelStorei(B.UNPACK_SKIP_ROWS,Q),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pe),$===0&&ee.generateMipmaps&&B.generateMipmap(Z),Ie.unbindTexture()},this.copyTextureToTexture3D=function(I,ee,ie=null,ae=null,$=0){return I.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,ae=arguments[1]||null,I=arguments[2],ee=arguments[3],$=arguments[4]||0),da('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,ee,ie,ae,$)},this.initRenderTarget=function(I){je.get(I).__webglFramebuffer===void 0&&O.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),Ie.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,Ie.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}}class el{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(e),this.density=t}clone(){return new el(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gh extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ei=new b;class Qs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array),s=en(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ef extends Ei{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bo;const ia=new b,So=new b,wo=new b,Ao=new Oe,sa=new Oe,Tf=new nt,rr=new b,oa=new b,lr=new b,Bu=new Oe,kl=new Oe,zu=new Oe;class h_ extends Wt{constructor(e=new Ef){if(super(),this.isSprite=!0,this.type="Sprite",bo===void 0){bo=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vh(t,5);bo.setIndex([0,1,2,0,2,3]),bo.setAttribute("position",new Qs(n,3,0,!1)),bo.setAttribute("uv",new Qs(n,2,3,!1))}this.geometry=bo,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),So.setFromMatrixScale(this.matrixWorld),Tf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&So.multiplyScalar(-wo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;cr(rr.set(-.5,-.5,0),wo,a,So,i,s),cr(oa.set(.5,-.5,0),wo,a,So,i,s),cr(lr.set(.5,.5,0),wo,a,So,i,s),Bu.set(0,0),kl.set(1,0),zu.set(1,1);let r=e.ray.intersectTriangle(rr,oa,lr,!1,ia);if(r===null&&(cr(oa.set(-.5,.5,0),wo,a,So,i,s),kl.set(0,1),r=e.ray.intersectTriangle(rr,lr,oa,!1,ia),r===null))return;const l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:bi.getInterpolation(ia,rr,oa,lr,Bu,kl,zu,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function cr(o,e,t,n,i,s){Ao.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(sa.x=s*Ao.x-i*Ao.y,sa.y=i*Ao.x+s*Ao.y):sa.copy(Ao),o.copy(e),o.x+=sa.x,o.y+=sa.y,o.applyMatrix4(Tf)}const Gu=new b,Hu=new qt,Vu=new qt,u_=new b,Wu=new nt,hr=new b,Bl=new ai,Xu=new nt,zl=new Ra;class d_ extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cs),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hr),this.boundingBox.expandByPoint(hr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hr),this.boundingSphere.expandByPoint(hr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bl.copy(this.boundingSphere),Bl.applyMatrix4(i),e.ray.intersectsSphere(Bl)!==!1&&(Xu.copy(i).invert(),zl.copy(e.ray).applyMatrix4(Xu),!(this.boundingBox!==null&&zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===E0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Hu.fromBufferAttribute(i.attributes.skinIndex,e),Vu.fromBufferAttribute(i.attributes.skinWeight,e),Gu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Vu.getComponent(s);if(a!==0){const r=Hu.getComponent(s);Wu.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),t.addScaledVector(u_.copy(Gu).applyMatrix4(Wu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cf extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tl extends Dn{constructor(e=null,t=1,n=1,i,s,a,r,l,c=Ln,h=Ln,u,d){super(null,a,r,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qu=new nt,f_=new nt;class xh{constructor(e=[],t=[]){this.uuid=Bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const r=e[s]?e[s].matrixWorld:f_;qu.multiplyMatrices(r,t[s]),qu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tl(t,e,e,wi,Si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Cf),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const r=n[i];e.boneInverses.push(r.toArray())}return e}}class Zc extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Eo=new nt,Yu=new nt,ur=[],ju=new cs,p_=new nt,aa=new Ve,ra=new ai;class St extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,p_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Eo),ju.copy(e.boundingBox).applyMatrix4(Eo),this.boundingBox.union(ju)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Eo),ra.copy(e.boundingSphere).applyMatrix4(Eo),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let r=0;r<n.length;r++)n[r]=i[a+r]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),e.ray.intersectsSphere(ra)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Eo),Yu.multiplyMatrices(n,Eo),aa.matrixWorld=Yu,aa.raycast(e,ur);for(let a=0,r=ur.length;a<r;a++){const l=ur[a];l.instanceId=s,l.object=this,t.push(l)}ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tl(new Float32Array(i*this.count),i,this.count,Zr,Si));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=r,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qs extends Ei{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hr=new b,Vr=new b,Ku=new nt,la=new Ra,dr=new ai,Gl=new b,Zu=new b;class nl extends Wt{constructor(e=new At,t=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Hr.fromBufferAttribute(t,i-1),Vr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Hr.distanceTo(Vr);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=s,e.ray.intersectsSphere(dr)===!1)return;Ku.copy(i).invert(),la.copy(e.ray).applyMatrix4(Ku);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),_=h.getX(v+1),y=fr(this,e,la,l,p,_);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=fr(this,e,la,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=fr(this,e,la,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=fr(this,e,la,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function fr(o,e,t,n,i,s){const a=o.geometry.attributes.position;if(Hr.fromBufferAttribute(a,i),Vr.fromBufferAttribute(a,s),t.distanceSqToSegment(Hr,Vr,Gl,Zu)>n)return;Gl.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Gl);if(!(l<e.near||l>e.far))return{distance:l,point:Zu.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}const $u=new b,Qu=new b;class Pf extends nl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)$u.fromBufferAttribute(t,i),Qu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$u.distanceTo(Qu);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Or extends nl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ci extends Ei{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ju=new nt,$c=new Ra,pr=new ai,mr=new b;class Pi extends Wt{constructor(e=new At,t=new Ci){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=s,e.ray.intersectsSphere(pr)===!1)return;Ju.copy(i).invert(),$c.copy(e.ray).applyMatrix4(Ju);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);mr.fromBufferAttribute(u,m),ed(mr,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)mr.fromBufferAttribute(u,g),ed(mr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function ed(o,e,t,n,i,s,a){const r=$c.distanceSqToPoint(o);if(r<t){const l=new b;$c.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class td extends Dn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ln,this.minFilter=Ln,this.generateMipmaps=!1,this.needsUpdate=!0}}class fn extends Dn{constructor(e,t,n,i,s,a,r,l,c){super(e,t,n,i,s,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let r=0,l=s-1,c;for(;r<=l;)if(i=Math.floor(r+(l-r)/2),c=n[i]-a,c<0)r=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),r=this.getPoint(s),l=t||(a.isVector2?new Oe:new b);return l.copy(r).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],s=[],a=[],r=new b,l=new nt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new b)}s[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],r),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(i[f-1],i[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(Gn(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Gn(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(r.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rf extends us{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new Oe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const r=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m_ extends Rf{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _h(){let o=0,e=0,t=0,n=0;function i(s,a,r,l){o=s,e=r,t=-3*s+3*a-2*r-l,n=2*s-2*a+r+l}return{initCatmullRom:function(s,a,r,l,c){i(a,r,c*(r-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,r,l,c,h,u){let d=(a-s)/c-(r-s)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,f*=h,i(a,r,d,f)},calc:function(s){const a=s*s,r=a*s;return o+e*s+t*a+n*r}}}const gr=new b,Hl=new _h,Vl=new _h,Wl=new _h;class hi extends us{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:l===0&&r===s-1&&(r=s-2,l=1);let c,h;this.closed||r>0?c=i[(r-1)%s]:(gr.subVectors(i[0],i[1]).add(i[0]),c=gr);const u=i[r%s],d=i[(r+1)%s];if(this.closed||r+2<s?h=i[(r+2)%s]:(gr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Hl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Vl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Wl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Hl.calc(l),Vl.calc(l),Wl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nd(o,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,r=o*o,l=o*r;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*r+s*o+t}function g_(o,e){const t=1-o;return t*t*e}function v_(o,e){return 2*(1-o)*o*e}function x_(o,e){return o*o*e}function va(o,e,t,n){return g_(o,e)+v_(o,t)+x_(o,n)}function __(o,e){const t=1-o;return t*t*t*e}function M_(o,e){const t=1-o;return 3*t*t*o*e}function y_(o,e){return 3*(1-o)*o*o*e}function b_(o,e){return o*o*o*e}function xa(o,e,t,n,i){return __(o,e)+M_(o,t)+y_(o,n)+b_(o,i)}class S_ extends us{constructor(e=new Oe,t=new Oe,n=new Oe,i=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Oe){const n=t,i=this.v0,s=this.v1,a=this.v2,r=this.v3;return n.set(xa(e,i.x,s.x,a.x,r.x),xa(e,i.y,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w_ extends us{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,s=this.v1,a=this.v2,r=this.v3;return n.set(xa(e,i.x,s.x,a.x,r.x),xa(e,i.y,s.y,a.y,r.y),xa(e,i.z,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A_ extends us{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E_ extends us{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends us{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(va(e,i.x,s.x,a.x),va(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Df extends us{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(va(e,i.x,s.x,a.x),va(e,i.y,s.y,a.y),va(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends us{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),r=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(nd(r,l.x,c.x,h.x,u.x),nd(r,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Oe().fromArray(i))}return this}}var P_=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:hi,CubicBezierCurve:S_,CubicBezierCurve3:w_,EllipseCurve:Rf,LineCurve:A_,LineCurve3:E_,QuadraticBezierCurve:T_,QuadraticBezierCurve3:Df,SplineCurve:C_});class Cs extends At{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],r=[],l=[],c=new b,h=new Oe;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(r,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qt extends At{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(f,2));function _(){const x=new b,T=new b;let w=0;const E=(t-e)/n;for(let A=0;A<=s;A++){const M=[],S=A/s,C=S*(t-e)+e;for(let R=0;R<=i;R++){const N=R/i,P=N*l+r,k=Math.sin(P),z=Math.cos(P);T.x=C*k,T.y=-S*n+m,T.z=C*z,u.push(T.x,T.y,T.z),x.set(k,E,z).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-S),M.push(g++)}v.push(M)}for(let A=0;A<i;A++)for(let M=0;M<s;M++){const S=v[M][A],C=v[M+1][A],R=v[M+1][A+1],N=v[M][A+1];(e>0||M!==0)&&(h.push(S,C,N),w+=3),(t>0||M!==s-1)&&(h.push(C,R,N),w+=3)}c.addGroup(p,w,0),p+=w}function y(x){const T=g,w=new Oe,E=new b;let A=0;const M=x===!0?e:t,S=x===!0?1:-1;for(let R=1;R<=i;R++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const C=g;for(let R=0;R<=i;R++){const P=R/i*l+r,k=Math.cos(P),z=Math.sin(P);E.x=M*z,E.y=m*S,E.z=M*k,u.push(E.x,E.y,E.z),d.push(0,S,0),w.x=k*.5+.5,w.y=z*.5*S+.5,f.push(w.x,w.y),g++}for(let R=0;R<i;R++){const N=T+R,P=C+R;x===!0?h.push(P,P+1,N):h.push(P+1,P,N),A+=3}c.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $n extends Qt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,r=Math.PI*2){super(0,e,t,n,i,s,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(e){return new $n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Da extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];r(i),c(n),h(),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(s.slice(),3)),this.setAttribute("uv",new Nt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(_){const y=new b,x=new b,T=new b;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],x),f(t[w+2],T),l(y,x,T,_)}function l(_,y,x,T){const w=T+1,E=[];for(let A=0;A<=w;A++){E[A]=[];const M=_.clone().lerp(x,A/w),S=y.clone().lerp(x,A/w),C=w-A;for(let R=0;R<=C;R++)R===0&&A===w?E[A][R]=M:E[A][R]=M.clone().lerp(S,R/C)}for(let A=0;A<w;A++)for(let M=0;M<2*(w-A)-1;M++){const S=Math.floor(M/2);M%2===0?(d(E[A][S+1]),d(E[A+1][S]),d(E[A][S])):(d(E[A][S+1]),d(E[A+1][S+1]),d(E[A+1][S]))}}function c(_){const y=new b;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(_),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const _=new b;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const x=m(_)/2/Math.PI+.5,T=p(_)/Math.PI+.5;a.push(x,1-T)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){const y=a[_+0],x=a[_+2],T=a[_+4],w=Math.max(y,x,T),E=Math.min(y,x,T);w>.9&&E<.1&&(y<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const _=new b,y=new b,x=new b,T=new b,w=new Oe,E=new Oe,A=new Oe;for(let M=0,S=0;M<s.length;M+=9,S+=6){_.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),w.set(a[S+0],a[S+1]),E.set(a[S+2],a[S+3]),A.set(a[S+4],a[S+5]),T.copy(_).add(y).add(x).divideScalar(3);const C=m(T);v(w,S+0,_,C),v(E,S+2,y,C),v(A,S+4,x,C)}}function v(_,y,x,T){T<0&&_.x===1&&(a[y]=_.x-1),x.x===0&&x.z===0&&(a[y]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.vertices,e.indices,e.radius,e.details)}}class Ps extends Da{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ps(e.radius,e.detail)}}class Mh extends Da{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mh(e.radius,e.detail)}}class _a extends Da{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _a(e.radius,e.detail)}}class Xs extends At{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const r=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new b,g=new Oe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,y=_,x=_+n+1,T=_+n+2,w=_+1;r.push(y,x,w),r.push(x,T,w)}}this.setIndex(r),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ln extends At{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new b,d=new b,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const w=T/t;u.x=-e*Math.cos(i+w*s)*Math.sin(a+y*r),u.y=e*Math.cos(a+y*r),u.z=e*Math.sin(i+w*s)*Math.sin(a+y*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+x,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=h[p][_+1],x=h[p][_],T=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(y,x,w),(p!==n-1||l<Math.PI)&&f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class il extends At{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;a.push(v,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vi extends At{constructor(e=new Df(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new b,l=new b,c=new Oe;let h=new b;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(f,2));function v(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),_(),p()}function m(y){h=e.getPointAt(y/t,h);const x=a.normals[y],T=a.binormals[y];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,A=Math.sin(E),M=-Math.cos(E);l.x=M*x.x+A*T.x,l.y=M*x.y+A*T.y,l.z=M*x.z+A*T.z,l.normalize(),d.push(l.x,l.y,l.z),r.x=h.x+n*l.x,r.y=h.y+n*l.y,r.z=h.z+n*l.z,u.push(r.x,r.y,r.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=i;x++){const T=(i+1)*(y-1)+(x-1),w=(i+1)*y+(x-1),E=(i+1)*y+x,A=(i+1)*(y-1)+x;g.push(T,w,A),g.push(w,E,A)}}function _(){for(let y=0;y<=t;y++)for(let x=0;x<=i;x++)c.x=y/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new vi(new P_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class kr extends nn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ze extends Ei{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yi extends ze{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class R_ extends Ei{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function vr(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function D_(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function I_(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function id(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,a=0;a!==n;++s){const r=t[s]*e;for(let l=0;l!==e;++l)i[a++]=o[r+l]}return i}function If(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=o[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=o[i++];while(s!==void 0)}class Ia{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let r=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const r=t[1];e<r&&(n=2,s=r);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const r=n+a>>>1;e<t[r]?a=r:n=r+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class L_ extends Ia{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,r=i[s],l=i[a];if(r===void 0)switch(this.getSettings_().endingStart){case Wh:s=e,r=2*t-n;break;case Xh:s=i.length-2,r=t+i[s]-i[s+1];break;default:s=e,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wh:a=e,l=2*n-t;break;case Xh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let T=0;T!==r;++T)s[T]=p*a[h+T]+_*a[c+T]+y*a[l+T]+x*a[u+T];return s}}class N_ extends Ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==r;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class U_ extends Ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new U_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new N_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new L_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wa:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case hl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const r=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*r,a*r)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let r=0;r!==s;r++){const l=n[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),e=!1;break}a=l}if(i!==void 0&&D_(i))for(let r=0,l=i.length;r!==l;++r){const c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===hl,s=e.length-1;let a=1;for(let r=1;r<s;++r){let l=!1;const c=e[r],h=e[r+1];if(c!==h&&(r!==1||c!==e[0]))if(i)l=!0;else{const u=r*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(r!==a){e[a]=e[r];const u=r*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let r=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[r+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ji.prototype.TimeBufferType=Float32Array;ji.prototype.ValueBufferType=Float32Array;ji.prototype.DefaultInterpolation=Aa;class Yo extends ji{constructor(e,t,n){super(e,t,n)}}Yo.prototype.ValueTypeName="bool";Yo.prototype.ValueBufferType=Array;Yo.prototype.DefaultInterpolation=wa;Yo.prototype.InterpolantFactoryMethodLinear=void 0;Yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Lf extends ji{}Lf.prototype.ValueTypeName="color";class Go extends ji{}Go.prototype.ValueTypeName="number";class F_ extends Ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(n-t)/(i-t);let c=e*r;for(let h=c+r;c!==h;c+=4)ut.slerpFlat(s,0,a,c-r,a,c,l);return s}}class Ho extends ji{InterpolantFactoryMethodLinear(e){return new F_(this.times,this.values,this.getValueSize(),e)}}Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;class jo extends ji{constructor(e,t,n){super(e,t,n)}}jo.prototype.ValueTypeName="string";jo.prototype.ValueBufferType=Array;jo.prototype.DefaultInterpolation=wa;jo.prototype.InterpolantFactoryMethodLinear=void 0;jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Vo extends ji{}Vo.prototype.ValueTypeName="vector";class O_{constructor(e="",t=-1,n=[],i=T0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,r=n.length;a!==r;++a)t.push(B_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let r=0;r<s;r++){let l=[],c=[];l.push((r+s-1)%s,r,(r+1)%s),c.push(0,1,0);const h=I_(l);l=id(l,1,h),c=id(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Go(".morphTargetInfluences["+t[r].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,l=e.length;r<l;r++){const c=e[r],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const r in i)a.push(this.CreateFromMorphTargetSequence(r,i[r],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];If(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,r=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new Go(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Vo,f+".position",d,"pos",i),n(Ho,f+".quaternion",d,"rot",i),n(Vo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,r)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function k_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Go;case"vector":case"vector2":case"vector3":case"vector4":return Vo;case"color":return Lf;case"quaternion":return Ho;case"bool":case"boolean":return Yo;case"string":return jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function B_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=k_(o.type);if(o.times===void 0){const t=[],n=[];If(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const As={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class z_{constructor(e,t,n){const i=this;let s=!1,a=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,r),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,r),a===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const G_=new z_;class eo{constructor(e){this.manager=e!==void 0?e:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ns={};class H_ extends Error{constructor(e,t){super(e),this.response=t}}class Wr extends eo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=As.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ns[e]!==void 0){ns[e].push({onLoad:t,onProgress:n,onError:i});return}ns[e]=[],ns[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ns[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{v+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,E=h.length;w<E;w++){const A=h[w];A.onProgress&&A.onProgress(T)}p.enqueue(x),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new H_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,r));case"json":return c.json();default:if(r===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(r),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{As.add(e,c);const h=ns[e];delete ns[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ns[e];if(h===void 0)throw this.manager.itemError(e),c;delete ns[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class V_ extends eo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=As.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const r=Ea("img");function l(){h(),As.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}}class W_ extends eo{constructor(e){super(e)}load(e,t,n,i){const s=new Dn,a=new V_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class La extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class X_ extends La{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xl=new nt,sd=new b,od=new b;class yh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(sd),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q_ extends yh{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Y_ extends La{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new q_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ad=new nt,ca=new b,ql=new b;class j_ extends yh{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),n.position.copy(ca),ql.copy(n.position),ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ql),n.updateMatrixWorld(),i.makeTranslation(-ca.x,-ca.y,-ca.z),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad)}}class Ma extends La{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class K_ extends yh{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bh extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new K_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nf extends La{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ya{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Z_ extends eo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=As.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader;const l=fetch(e,r).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return As.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),As.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});As.add(e,l),s.manager.itemStart(e)}}class Uf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rd(){return performance.now()}const Sh="\\[\\]\\.:\\/",$_=new RegExp("["+Sh+"]","g"),wh="[^"+Sh+"]",Q_="[^"+Sh.replace("\\.","")+"]",J_=/((?:WC+[\/:])*)/.source.replace("WC",wh),eM=/(WCOD+)?/.source.replace("WCOD",Q_),tM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),nM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),iM=new RegExp("^"+J_+eM+tM+nM+"$"),sM=["material","materials","bones","map"];class oM{constructor(e,t,n){const i=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tn{constructor(e,t,n){this.path=t,this.parsedPath=n||tn.parseTrackName(t),this.node=tn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tn.Composite(e,t,n):new tn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($_,"")}static parseTrackName(e){const t=iM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);sM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const r=s[a];if(r.name===t||r.uuid===t)return r;const l=n(r.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tn.Composite=oM;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ld=new nt;class aM{constructor(e,t,n=0,i=1/0){this.ray=new Ra(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new dh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(e,t=!0,n=[]){return Qc(e,this,n,t),n.sort(cd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Qc(e[i],this,n,t);return n.sort(cd),n}}function cd(o,e){return o.distance-e.distance}function Qc(o,e,t,n){let i=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=o.children;for(let a=0,r=s.length;a<r;a++)Qc(s[a],e,t,!0)}}const hd=new Oe;class rM{constructor(e=new Oe(1/0,1/0),t=new Oe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);const ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class to{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lM=new Qr(-1,1,1,-1,0,1);class cM extends At{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}}const hM=new cM;class sl{constructor(e){this._mesh=new Ve(hM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ff extends to{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oi.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new sl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ud extends to{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class uM extends to{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ki}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ff(ba),this.copyPass.material.blending=ii,this.clock=new Uf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}ud!==void 0&&(a instanceof ud?n=!0:a instanceof uM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fM extends to{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class pM{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}noise(e,t){let n,i,s;const a=.5*(Math.sqrt(3)-1),r=(e+t)*a,l=Math.floor(e+r),c=Math.floor(t+r),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,v=t-f;let m,p;g>v?(m=1,p=0):(m=0,p=1);const _=g-m+h,y=v-p+h,x=g-1+2*h,T=v-1+2*h,w=l&255,E=c&255,A=this.perm[w+this.perm[E]]%12,M=this.perm[w+m+this.perm[E+p]]%12,S=this.perm[w+1+this.perm[E+1]]%12;let C=.5-g*g-v*v;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[A],g,v));let R=.5-_*_-y*y;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[M],_,y));let N=.5-x*x-T*T;return N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[S],x,T)),70*(n+i+s)}noise3d(e,t,n){let i,s,a,r;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,_=e-v,y=t-m,x=n-p;let T,w,E,A,M,S;_>=y?y>=x?(T=1,w=0,E=0,A=1,M=1,S=0):_>=x?(T=1,w=0,E=0,A=1,M=0,S=1):(T=0,w=0,E=1,A=1,M=0,S=1):y<x?(T=0,w=0,E=1,A=0,M=1,S=1):_<x?(T=0,w=1,E=0,A=0,M=1,S=1):(T=0,w=1,E=0,A=1,M=1,S=0);const C=_-T+f,R=y-w+f,N=x-E+f,P=_-A+2*f,k=y-M+2*f,z=x-S+2*f,F=_-1+3*f,U=y-1+3*f,L=x-1+3*f,W=h&255,te=u&255,j=d&255,be=this.perm[W+this.perm[te+this.perm[j]]]%12,Y=this.perm[W+T+this.perm[te+w+this.perm[j+E]]]%12,fe=this.perm[W+A+this.perm[te+M+this.perm[j+S]]]%12,pe=this.perm[W+1+this.perm[te+1+this.perm[j+1]]]%12;let he=.6-_*_-y*y-x*x;he<0?i=0:(he*=he,i=he*he*this.dot3(this.grad3[be],_,y,x));let J=.6-C*C-R*R-N*N;J<0?s=0:(J*=J,s=J*J*this.dot3(this.grad3[Y],C,R,N));let de=.6-P*P-k*k-z*z;de<0?a=0:(de*=de,a=de*de*this.dot3(this.grad3[fe],P,k,z));let ge=.6-F*F-U*U-L*L;return ge<0?r=0:(ge*=ge,r=ge*ge*this.dot3(this.grad3[pe],F,U,L)),32*(i+s+a+r)}noise4d(e,t,n,i){const s=this.grad4,a=this.simplex,r=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const v=(e+t+n+i)*l,m=Math.floor(e+v),p=Math.floor(t+v),_=Math.floor(n+v),y=Math.floor(i+v),x=(m+p+_+y)*c,T=m-x,w=p-x,E=_-x,A=y-x,M=e-T,S=t-w,C=n-E,R=i-A,N=M>S?32:0,P=M>C?16:0,k=S>C?8:0,z=M>R?4:0,F=S>R?2:0,U=C>R?1:0,L=N+P+k+z+F+U,W=a[L][0]>=3?1:0,te=a[L][1]>=3?1:0,j=a[L][2]>=3?1:0,be=a[L][3]>=3?1:0,Y=a[L][0]>=2?1:0,fe=a[L][1]>=2?1:0,pe=a[L][2]>=2?1:0,he=a[L][3]>=2?1:0,J=a[L][0]>=1?1:0,de=a[L][1]>=1?1:0,ge=a[L][2]>=1?1:0,Ae=a[L][3]>=1?1:0,ve=M-W+c,De=S-te+c,B=C-j+c,ot=R-be+c,G=M-Y+2*c,We=S-fe+2*c,Ie=C-pe+2*c,at=R-he+2*c,je=M-J+3*c,O=S-de+3*c,D=C-ge+3*c,se=R-Ae+3*c,xe=M-1+4*c,oe=S-1+4*c,ue=C-1+4*c,Re=R-1+4*c,we=m&255,Ne=p&255,dt=_&255,Ee=y&255,Ue=r[we+r[Ne+r[dt+r[Ee]]]]%32,Je=r[we+W+r[Ne+te+r[dt+j+r[Ee+be]]]]%32,ct=r[we+Y+r[Ne+fe+r[dt+pe+r[Ee+he]]]]%32,He=r[we+J+r[Ne+de+r[dt+ge+r[Ee+Ae]]]]%32,mt=r[we+1+r[Ne+1+r[dt+1+r[Ee+1]]]]%32;let ht=.6-M*M-S*S-C*C-R*R;ht<0?h=0:(ht*=ht,h=ht*ht*this.dot4(s[Ue],M,S,C,R));let ft=.6-ve*ve-De*De-B*B-ot*ot;ft<0?u=0:(ft*=ft,u=ft*ft*this.dot4(s[Je],ve,De,B,ot));let q=.6-G*G-We*We-Ie*Ie-at*at;q<0?d=0:(q*=q,d=q*q*this.dot4(s[ct],G,We,Ie,at));let Ce=.6-je*je-O*O-D*D-se*se;Ce<0?f=0:(Ce*=Ce,f=Ce*Ce*this.dot4(s[He],je,O,D,se));let me=.6-xe*xe-oe*oe-ue*ue-Re*Re;return me<0?g=0:(me*=me,g=me*me*this.dot4(s[mt],xe,oe,ue,Re)),27*(h+u+d+f+g)}}const xr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Oe},cameraProjectionMatrix:{value:new nt},cameraInverseProjectionMatrix:{value:new nt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},_r={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Mr={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class ws extends to{constructor(e,t,n,i,s=32){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const a=new mh;a.format=$s,a.type=Zs,this.normalRenderTarget=new ci(this.width,this.height,{minFilter:Ln,magFilter:Ln,type:ki,depthTexture:a}),this.ssaoRenderTarget=new ci(this.width,this.height,{type:ki}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new nn({defines:Object.assign({},xr.defines),uniforms:Oi.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader,blending:ii}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new R_,this.normalMaterial.blending=ii,this.blurMaterial=new nn({defines:Object.assign({},Mr.defines),uniforms:Oi.clone(Mr.uniforms),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new nn({defines:Object.assign({},_r.defines),uniforms:Oi.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,blending:ii}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new nn({uniforms:Oi.clone(ba.uniforms),vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Wd,blendDst:ac,blendEquation:os,blendSrcAlpha:Vd,blendDstAlpha:ac,blendEquationAlpha:os}),this.fsQuad=new sl(null),this.originalClearColor=new ne}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,n){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case ws.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=ii,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ws.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ii,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ws.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ws.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ii,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ws.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Hd,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,n,i,s){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,s){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const i=new b;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let s=n/e;s=H.lerp(.1,1,s*s),i.multiplyScalar(s),t.push(i)}}generateRandomKernelRotations(){const n=new pM,i=16,s=new Float32Array(i);for(let a=0;a<i;a++){const r=Math.random()*2-1,l=Math.random()*2-1,c=0;s[a]=n.noise3d(r,l,c)}this.noiseTexture=new tl(s,4,4,Zr,Si),this.noiseTexture.wrapS=Nn,this.noiseTexture.wrapT=Nn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}}ws.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const mM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Wo extends to{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(s,a,{type:ki}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ci(s,a,{type:ki});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ci(s,a,{type:ki});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const r=mM;this.highPassUniforms=Oi.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Oe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ba;this.copyUniforms=Oi.clone(h.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new dn,this.fsQuad=new sl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Wo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Wo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Wo.BlurDirectionX=new Oe(1,0);Wo.BlurDirectionY=new Oe(0,1);const gM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class vM extends to{constructor(){super();const e=gM;this.uniforms=Oi.clone(e.uniforms),this.material=new kr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new sl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Of(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new fn(o);return n.needsUpdate=!0,n}function xM(o=8500,e=14e3){const t=new Ut;t.name="Procedural_Starfield";const n=new Float32Array(o*3),i=new Float32Array(o*3),s=[new ne(10205439),new ne(13293823),new ne(16316415),new ne(16774378),new ne(16765601),new ne(16754795)];for(let p=0;p<o;p++){const _=Math.random(),y=Math.random(),x=_*2*Math.PI;let T=Math.acos(2*y-1);Math.random()<.35&&(T=Math.PI*.5+(Math.random()-.5)*.32);const w=e*(.55+.45*Math.random()),E=Math.sin(T);n[p*3]=w*E*Math.cos(x),n[p*3+1]=w*Math.cos(T),n[p*3+2]=w*E*Math.sin(x);const A=s[Math.floor(Math.random()*s.length)],M=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=A.r*M,i[p*3+1]=A.g*M,i[p*3+2]=A.b*M}const a=new At;a.setAttribute("position",new xt(n,3)),a.setAttribute("color",new xt(i,3));const r=Of(),l=e/14e3,c=new Ci({size:28*l,map:r,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Rn,sizeAttenuation:!0}),h=new Pi(a,c);t.add(h);const u=500,d=new Float32Array(u*3),f=new Float32Array(u*3);for(let p=0;p<u;p++){const _=Math.random()*2*Math.PI,y=Math.acos(2*Math.random()-1),x=e*.72;d[p*3]=x*Math.sin(y)*Math.cos(_),d[p*3+1]=x*Math.cos(y),d[p*3+2]=x*Math.sin(y)*Math.sin(_);const T=s[p%s.length];f[p*3]=T.r,f[p*3+1]=T.g,f[p*3+2]=T.b}const g=new At;g.setAttribute("position",new xt(d,3)),g.setAttribute("color",new xt(f,3));const v=new Ci({size:56*l,map:r,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Rn});t.add(new Pi(g,v)),t.renderOrder=-80,h.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const _=H.clamp(p,0,1);c.opacity=.92*_,v.opacity=.95*_,t.visible=_>.015},t}class _M{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=(Math.random()-.5)*28,n[s*3+1]=(Math.random()-.5)*18,n[s*3+2]=-Math.random()*55;this.geometry=new At,this.geometry.setAttribute("position",new xt(n,3)),this.material=new Ci({color:new ne(16758892),size:.42,map:Of(),transparent:!0,opacity:0,depthWrite:!1,blending:Rn}),this.points=new Pi(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let s=0;s<this.streakCount;s++){const a=Math.random()*Math.PI*2,r=3.5+Math.random()*22,l=Math.cos(a)*r,c=Math.sin(a)*r*.72,h=-8-Math.random()*95,u=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:h,len:u}),i[s*6]=l,i[s*6+1]=c,i[s*6+2]=h,i[s*6+3]=l,i[s*6+4]=c,i[s*6+5]=h-u}this.streakGeometry=new At,this.streakGeometry.setAttribute("position",new xt(i,3)),this.streakMaterial=new qs({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:Rn}),this.streakLines=new Pf(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=H.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=H.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const s=this.geometry.attributes.position,a=s.array,r=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=a[l*3+2]+r;c>2&&(c=-52-Math.random()*12,a[l*3]=(Math.random()-.5)*28,a[l*3+1]=(Math.random()-.5)*18),a[l*3+2]=c}s.needsUpdate=!0}if(this.pulseFactor=H.lerp(this.pulseFactor,H.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const s=this.streakGeometry.attributes.position,a=s.array,r=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const h=this.streakSeeds[c];h.z+=r,h.z>4&&(h.z=-95-Math.random()*25);const u=h.z-h.len*l;a[c*6]=h.x,a[c*6+1]=h.y,a[c*6+2]=h.z,a[c*6+3]=h.x,a[c*6+4]=h.y,a[c*6+5]=u}s.needsUpdate=!0}}}class MM{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new b,this.angularVelocity=new b,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.speedRatio=0,this.lastLayerBaseSpeed=8,this.lastLayerBoostMax=24,this._shakePhase=0,this._qShake=new ut,this._eulerShake=new ui,this.altitudeContext={surfaceAltitude:9999,planetRadius:1050,atmoTopAlt:750,groundFloorAlt:.9,minSpeed:8,metersPerUnit:62,submergedRatio:0,planetCenter:new b,prevPlanetCenter:new b,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new b,planetQuatDelta:new ut},this._tmpToShip=new b,this.enabled=!0,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov||60,this._bindEvents()}setEnabled(e){if(this.enabled=!!e,!this.enabled){this.isDragging=!1;for(const t of Object.keys(this.keys))this.keys[t]=!1;typeof document<"u"&&document.pointerLockElement===this.domElement&&document.exitPointerLock&&document.exitPointerLock()}}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{this.enabled&&!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{this.enabled&&e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.enabled||!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=H.clamp(-t*.011,-.52,.52);this.targetBankAngle=H.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{if(!this.enabled)return;const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=H.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){if(!(!this.enabled&&t))switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,minSpeed:s,metersPerUnit:a,submergedRatio:r,planetCenter:l,prevPlanetCenter:c,hasPlanet:h,inGravityWell:u,planetDeltaPos:d,planetQuatDelta:f}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||1050,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*.72,this.altitudeContext.groundFloorAlt=i??.9,this.altitudeContext.minSpeed=s??8,this.altitudeContext.metersPerUnit=a??62,this.altitudeContext.submergedRatio=H.clamp(r??0,0,1),l?(this.altitudeContext.planetCenter.copy(l),this.altitudeContext.prevPlanetCenter.copy(c||l),this.altitudeContext.hasPlanet=h!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!u,d?this.altitudeContext.planetDeltaPos.copy(d):this.altitudeContext.planetDeltaPos.set(0,0,0),f?this.altitudeContext.planetQuatDelta.copy(f):this.altitudeContext.planetQuatDelta.identity()}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:s=!1,onComplete:a=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const r=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new b(0,1,0)}));this.autopilot={startPos:r,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:s,onComplete:a}}setPose(e,t,n=new b(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getSpeedRatio(){return this.speedRatio}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(0,this.altitudeContext.groundFloorAlt||0),s=Math.max(0,t-n)*(this.altitudeContext.metersPerUnit??62),a=Math.max(200,this.altitudeContext.atmoTopAlt),r=H.clamp(t/a,0,1),l=H.smoothstep(t,a,a+2600),c=this.altitudeContext.minSpeed??8,h=H.lerp(1,.48,this.altitudeContext.submergedRatio||0),u=H.smoothstep(s,0,2500),d=H.smoothstep(s,2500,12e3),f=H.smoothstep(s,12e3,35e3),g=H.smoothstep(s,35e3,62e3);let v=H.lerp(c,18,u);v=H.lerp(v,44,d),v=H.lerp(v,105,f),v=H.lerp(v,165,g),v*=h;const m=H.lerp(v,440,Math.pow(l,1.08)),p=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&p){const E=H.lerp(H.lerp(.24,.62,r),1,l);this.pulseDriveCharge=H.lerp(this.pulseDriveCharge,E,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=H.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const _=this.keys.boost&&p?Math.min(1,this.pulseDriveCharge/Math.max(.2,H.lerp(.24,1,l))):this.pulseDriveCharge,y=H.lerp(2.2,3.2,r),T=H.lerp(y,7.2,l),w=H.lerp(1,T,Math.min(1,_));return this.lastLayerBaseSpeed=m*this.speedMultiplier,this.lastLayerBoostMax=m*this.speedMultiplier*T,m*this.speedMultiplier*w}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell){const p=this.altitudeContext.planetQuatDelta;p.x*p.x+p.y*p.y+p.z*p.z>1e-14?(this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.prevPlanetCenter).applyQuaternion(p),this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip),this.shipQuaternion.premultiply(p).normalize(),this.velocity.applyQuaternion(p),this.camera.quaternion.copy(this.shipQuaternion)):this.camera.position.add(this.altitudeContext.planetDeltaPos)}if(this.autopilot){this.autopilot.elapsed+=t;const p=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),_=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,{targetPos:y,lookAtPos:x,upVec:T,useCurveNow:w}=this.autopilot.poseProvider(_,p,this.autopilot.startPos),E=this.camera.position.clone();this.autopilot.useDirectCurve||w?this.camera.position.copy(y):this.camera.position.lerpVectors(this.autopilot.startPos,y,_);const A=this.camera.clone();A.position.copy(this.camera.position),A.up.copy(T||new b(0,1,0)),A.lookAt(x),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,A.quaternion,this.autopilot.useDirectCurve?Math.min(1,_*2.2):Math.min(1,_*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(E).divideScalar(t);const M=this.autopilot.useDirectCurve?Math.sin(p*Math.PI)*14:Math.sin(p*Math.PI)*28,S=this.baseFov+M;if(Math.abs(this.camera.fov-S)>.03&&(this.camera.fov=H.lerp(this.camera.fov,S,.22),this.camera.updateProjectionMatrix()),this.speedRatio=H.lerp(this.speedRatio,this.autopilot.useDirectCurve?.35*Math.sin(p*Math.PI):.72*Math.sin(p*Math.PI),.18),p>=1){const C=this.autopilot.onComplete;this.autopilot=null,C?(this.velocity.multiplyScalar(.2),C()):this.velocity.set(0,0,0)}return}if(!this.enabled){this.angularVelocity.set(0,0,0);return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const p=new ut().setFromAxisAngle(new b(1,0,0),this.angularVelocity.x),_=new ut().setFromAxisAngle(new b(0,1,0),this.angularVelocity.y),y=new ut().setFromAxisAngle(new b(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(_),this.shipQuaternion.multiply(p),this.shipQuaternion.multiply(y),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=H.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const s=new ut().setFromAxisAngle(new b(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(s);const a=new b((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),r=this._computeAdaptiveSpeedLimits(t);if(a.lengthSq()>0){a.normalize(),a.applyQuaternion(this.shipQuaternion);const p=a.multiplyScalar(r),_=H.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(p,1-Math.exp(-_*t))}else{const p=H.lerp(3.4,6.2,this.altitudeContext.submergedRatio||0);this.velocity.multiplyScalar(Math.exp(-p*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0)}if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const p=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,_=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),y=_.length();if(y>1e-4&&y<p){const x=_.divideScalar(y);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(x,p);const T=this.velocity.dot(x);T<0&&this.velocity.addScaledVector(x,-T)}}const l=this.velocity.length(),c=Math.max(.001,this.lastLayerBoostMax-this.lastLayerBaseSpeed*.25),h=H.clamp((l-this.lastLayerBaseSpeed*.25)/c,0,1),u=H.clamp(Math.max(h,this.pulseDriveCharge*.94),0,1);this.speedRatio=H.lerp(this.speedRatio,u,1-Math.exp(-8.5*t));const d=Math.max(0,this.altitudeContext.surfaceAltitude||9999),f=Math.max(200,this.altitudeContext.atmoTopAlt||750),g=d/f;if(this.altitudeContext.hasPlanet&&g<.85&&(this.altitudeContext.submergedRatio||0)<.08&&this.speedRatio>.72){this._shakePhase+=t*58;const _=H.smoothstep(this.speedRatio,.72,1)*(1-H.clamp(g/.85,0,1))*.0042;this._eulerShake.set(Math.sin(this._shakePhase*1.13)*_,Math.cos(this._shakePhase*.89)*_,Math.sin(this._shakePhase*1.47)*_*1.4),this._qShake.setFromEuler(this._eulerShake),this.camera.quaternion.multiply(this._qShake)}const m=H.lerp(this.baseFov,94,Math.pow(this.speedRatio,1.12));Math.abs(this.camera.fov-m)>.03&&(this.camera.fov=H.lerp(this.camera.fov,m,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function It(o,e=!1){const t=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),s={},a={},r=o[0].morphTargetsRelative,l=new At;let c=0;for(let h=0;h<o.length;++h){const u=o[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<o.length;++d){const f=o[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=o[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=dd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);const g=dd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function dd(o){let e,t,n,i=-1,s=0;for(let c=0;c<o.length;++c){const h=o[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),r=new xt(a,t,n);let l=0;for(let c=0;c<o.length;++c){const h=o[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const v=h.getComponent(d,g);r.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(r.gpuType=i),r}function fd(o,e){if(e===C0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Wc||e===cf){let t=o.getIndex();if(t===null){const a=[],r=o.getAttribute("position");if(r!==void 0){for(let l=0;l<r.count;l++)a.push(l);o.setIndex(a),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Wc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class yM extends eo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new EM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new zM(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ya.extractUrlBase(e);a=ya.resolveURL(c,this.path)}else a=ya.extractUrlBase(e);this.manager.itemStart(e);const r=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Wr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},r)}catch(h){r(h)}},n,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},r={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kf){try{a[Gt.KHR_BINARY_GLTF]=new GM(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Gt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new e1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Gt.KHR_MATERIALS_UNLIT:a[u]=new wM;break;case Gt.KHR_DRACO_MESH_COMPRESSION:a[u]=new HM(s,this.dracoLoader);break;case Gt.KHR_TEXTURE_TRANSFORM:a[u]=new VM;break;case Gt.KHR_MESH_QUANTIZATION:a[u]=new WM;break;default:d.indexOf(u)>=0&&r[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(r),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function bM(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class SM{constructor(e){this.parser=e,this.name=Gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Qn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ma(h),c.distance=u;break;case"spot":c=new Y_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ss(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],r=(s.extensions&&s.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(l){return n._getNodeRef(t.cache,r,l)})}}class wM{constructor(){this.name=Gt.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){const i=[];e.color=new ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Qn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Xt))}return Promise.all(i)}}class AM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const r=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(s)}}class TM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class CM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class PM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const r=a.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Qn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Xt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class RM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class DM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const r=a.attenuationColor||[1,1,1];return t.attenuationColor=new ne().setRGB(r[0],r[1],r[2],Qn),Promise.all(s)}}class IM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class LM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const r=a.specularColorFactor||[1,1,1];return t.specularColor=new ne().setRGB(r[0],r[1],r[2],Qn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Xt)),Promise.all(s)}}class NM{constructor(e){this.parser=e,this.name=Gt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class UM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class FM{constructor(e){this.parser=e,this.name=Gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class OM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],r=i.images[a.source];let l=n.textureLoader;if(r.uri){const c=n.options.manager.getHandler(r.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],r=i.images[a.source];let l=n.textureLoader;if(r.uri){const c=n.options.manager.getHandler(r.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BM{constructor(e){this.name=Gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(r){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(r,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class zM{constructor(e){this.name=Gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Mi.TRIANGLES&&c.mode!==Mi.TRIANGLE_STRIP&&c.mode!==Mi.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,r=[],l={};for(const c in a)r.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return r.length<1?null:(r.push(this.parser.createNodeMesh(e)),Promise.all(r).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new nt,m=new b,p=new ut,_=new b(1,1,1),y=new St(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(m,p,_));for(const x in l)if(x==="_COLOR_0"){const T=l[x];y.instanceColor=new Zc(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Wt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const kf="glTF",ha=12,pd={JSON:1313821514,BIN:5130562};class GM{constructor(e){this.name=Gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ha,s=new DataView(e,ha);let a=0;for(;a<i;){const r=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===pd.JSON){const c=new Uint8Array(e,ha+a,r);this.content=n.decode(c)}else if(l===pd.BIN){const c=ha+a;this.body=e.slice(c,c+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class HM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,r={},l={},c={};for(const h in a){const u=Jc[h]||h.toLowerCase();r[u]=a[h]}for(const h in e.attributes){const u=Jc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Lo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},r,c,Qn,d)})})}}class VM{constructor(){this.name=Gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class WM{constructor(){this.name=Gt.KHR_MESH_QUANTIZATION}}class Bf extends Ia{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=r*2,c=r*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+u;for(let x=0;x!==r;x++){const T=a[v+x+r],w=a[v+x+l]*h,E=a[g+x+r],A=a[g+x]*h;s[x]=_*T+y*w+m*E+p*A}return s}}const XM=new ut;class qM extends Bf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return XM.fromArray(s).normalize().toArray(s),s}}const Mi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},md={9728:Ln,9729:gi,9984:Qd,9985:Rr,9986:ua,9987:as},gd={33071:Fi,33648:zr,10497:Nn},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YM={CUBICSPLINE:void 0,LINEAR:Aa,STEP:wa},jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jM(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new ze({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),o.DefaultMaterial}function zs(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ss(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KM(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const a=[],r=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;r.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function ZM(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $M(o){let e;const t=o.extensions&&o.extensions[Gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kl(t.attributes):e=o.indices+":"+Kl(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+Kl(o.targets[n]);return e}function Kl(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function eh(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QM(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const JM=new nt;class e1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const r=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(r)===!0;const l=r.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=r.indexOf("Firefox")>-1,a=s?r.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new W_(this.options.manager):this.textureLoader=new Z_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const r={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return zs(s,r,i),ss(r,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(r)})).then(function(){for(const l of r.scenes)l.updateMatrixWorld();e(r)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let r=0,l=a.length;r<l;r++)e[a[r]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,r)=>{const l=this.associations.get(a);l!=null&&this.associations.set(r,l);for(const[c,h]of a.children.entries())s(h,r.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(ya.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Yl[i.type],r=Lo[i.componentType],l=i.normalized===!0,c=new r(i.count*a);return Promise.resolve(new xt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const r=a[0],l=Yl[i.type],c=Lo[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(_);y||(v=new c(r,p*f,i.count*f/h),y=new vh(v,f/h),t.cache.add(_,y)),m=new Qs(y,l,d%f/h,g)}else r===null?v=new c(i.count*l):v=new c(r,d,i.count*l),m=new xt(v,l,g);if(i.sparse!==void 0){const p=Yl.SCALAR,_=Lo[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new _(a[1],y,i.sparse.count*p),w=new c(a[2],x,i.sparse.count*l);r!==null&&(m=new xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,A=T.length;E<A;E++){const M=T[E];if(m.setX(M,w[E*l]),l>=2&&m.setY(M,w[E*l+1]),l>=3&&m.setZ(M,w[E*l+2]),l>=4&&m.setW(M,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let r=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(r=l)}return this.loadTextureImage(e,s,r)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],r=s.images[t],l=(r.uri||r.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||r.name||"",h.name===""&&typeof r.uri=="string"&&r.uri.startsWith("data:image/")===!1&&(h.name=r.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=md[d.magFilter]||gi,h.minFilter=md[d.minFilter]||as,h.wrapS=gd[d.wrapS]||Nn,h.wrapT=gd[d.wrapT]||Nn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ln&&h.minFilter!==gi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],r=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=r.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Dn(v);m.needsUpdate=!0,d(m)}),t.load(ya.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&r.revokeObjectURL(l),ss(u,a),u.userData.mimeType=a.mimeType||QM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Gt.KHR_TEXTURE_TRANSFORM]){const r=n.extensions!==void 0?n.extensions[Gt.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const l=s.associations.get(a);a=s.extensions[Gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,r),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const r="PointsMaterial:"+n.uuid;let l=this.cache.get(r);l||(l=new Ci,Ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(r,l)),n=l}else if(e.isLine){const r="LineBasicMaterial:"+n.uuid;let l=this.cache.get(r);l||(l=new qs,Ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(r,l)),n=l}if(i||s||a){let r="ClonedMaterial:"+n.uuid+":";i&&(r+="derivative-tangents:"),s&&(r+="vertex-colors:"),a&&(r+="flat-shading:");let l=this.cache.get(r);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(r,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ze}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const r={},l=s.extensions||{},c=[];if(l[Gt.KHR_MATERIALS_UNLIT]){const u=i[Gt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(r,s,t))}else{const u=s.pbrMetallicRoughness||{};if(r.color=new ne(1,1,1),r.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;r.color.setRGB(d[0],d[1],d[2],Qn),r.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(r,"map",u.baseColorTexture,Xt)),r.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,r.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(r,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(r,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,r)})))}s.doubleSided===!0&&(r.side=wt);const h=s.alphaMode||jl.OPAQUE;if(h===jl.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,h===jl.MASK&&(r.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==dn&&(c.push(t.assignTexture(r,"normalMap",s.normalTexture)),r.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;r.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==dn&&(c.push(t.assignTexture(r,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==dn){const u=s.emissiveFactor;r.emissive=new ne().setRGB(u[0],u[1],u[2],Qn)}return s.emissiveTexture!==void 0&&a!==dn&&c.push(t.assignTexture(r,"emissiveMap",s.emissiveTexture,Xt)),Promise.all(c).then(function(){const u=new a(r);return s.name&&(u.name=s.name),ss(u,s),t.associations.set(u,{materials:e}),s.extensions&&zs(i,u,s),u})}createUniqueName(e){const t=tn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(r){return n[Gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,t).then(function(l){return vd(l,r,t)})}const a=[];for(let r=0,l=e.length;r<l;r++){const c=e[r],h=$M(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Gt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=vd(new At,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,r=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?jM(this.cache):this.getDependency("material",a[l].material);r.push(h)}return r.push(t.loadGeometries(a)),Promise.all(r).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const _=c[f];if(m.mode===Mi.TRIANGLES||m.mode===Mi.TRIANGLE_STRIP||m.mode===Mi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new d_(v,_):new Ve(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mi.TRIANGLE_STRIP?p.geometry=fd(p.geometry,cf):m.mode===Mi.TRIANGLE_FAN&&(p.geometry=fd(p.geometry,Wc));else if(m.mode===Mi.LINES)p=new Pf(v,_);else if(m.mode===Mi.LINE_STRIP)p=new nl(v,_);else if(m.mode===Mi.LINE_LOOP)p=new Or(v,_);else if(m.mode===Mi.POINTS)p=new Pi(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ZM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ss(p,s),m.extensions&&zs(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&zs(i,u[0],s),u[0];const d=new Ut;s.extensions&&zs(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xn(H.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ss(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,r=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){r.push(u);const d=new nt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xh(r,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],r=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),r.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],T=f[_],w=g[_],E=v[_],A=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,T,w,E,A);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new O_(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(r){if(r.isMesh)for(let l=0,c=i.weights.length;l<c;l++)r.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],r=i.children||[];for(let c=0,h=r.length;c<h;c++)a.push(n.getDependency("node",r[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,JM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",r=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&r.push(l),s.camera!==void 0&&r.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){r.push(c)}),this.nodeCache[e]=Promise.all(r).then(function(c){let h;if(s.isBone===!0?h=new Cf:c.length>1?h=new Ut:c.length===1?h=c[0]:h=new Wt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),ss(h,s),s.extensions&&zs(n,h,s),s.matrix!==void 0){const u=new nt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ut;n.name&&(s.name=i.createUniqueName(n.name)),ss(s,n),n.extensions&&zs(t,s,n);const a=n.nodes||[],r=[];for(let l=0,c=a.length;l<c;l++)r.push(i.getDependency("node",a[l]));return Promise.all(r).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Ei||d instanceof Dn)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],r=e.name?e.name:e.uuid,l=[];xs[s.path]===xs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(r);let c;switch(xs[s.path]){case xs.weights:c=Go;break;case xs.rotation:c=Ho;break;case xs.position:case xs.scale:c=Vo;break;default:switch(n.itemSize){case 1:c=Go;break;case 2:case 3:default:c=Vo;break}break}const h=i.interpolation!==void 0?YM[i.interpolation]:Aa,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+xs[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=eh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ho?qM:Bf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function t1(o,e,t){const n=e.attributes,i=new cs;if(n.POSITION!==void 0){const r=t.json.accessors[n.POSITION],l=r.min,c=r.max;if(l!==void 0&&c!==void 0){if(i.set(new b(l[0],l[1],l[2]),new b(c[0],c[1],c[2])),r.normalized){const h=eh(Lo[r.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const r=new b,l=new b;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=eh(Lo[d.componentType]);l.multiplyScalar(v)}r.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(r)}o.boundingBox=i;const a=new ai;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=a}function vd(o,e,t){const n=e.attributes,i=[];function s(a,r){return t.getDependency("accessor",a).then(function(l){o.setAttribute(r,l)})}for(const a in n){const r=Jc[a]||a.toLowerCase();r in o.attributes||i.push(s(n[a],r))}if(e.indices!==void 0&&!o.index){const a=t.getDependency("accessor",e.indices).then(function(r){o.setIndex(r)});i.push(a)}return zt.workingColorSpace!==Qn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zt.workingColorSpace}" not supported.`),ss(o,e),t1(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?KM(o,e.targets,t):o})}const Zl=new WeakMap;class n1 extends eo{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Wr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Xt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Qn,a=()=>{}){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,r).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Zl.has(e)){const l=Zl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,r=this._getWorker(s,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return r.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Zl.set(e,{key:n,promise:r}),r}_createGeometry(e){const t=new At;e.index&&t.setIndex(new xt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,a=i.array,r=i.itemSize,l=new xt(a,r);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Xt)return;const n=new ne;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),zt.toWorkingColorSpace(n,Xt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Wr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=i1.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function i1(){let o,e;onmessage=function(a){const r=a.data;switch(r.type){case"init":o=r.decoderConfig,e=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=r.buffer,c=r.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(v=>v.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:r.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:r.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,r,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=r.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=r.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=r.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let _,y;if(c.useUniqueIDs)y=h[m],_=r.GetAttributeByUniqueId(d,y);else{if(y=r.GetAttributeId(d,a[h[m]]),y===-1)continue;_=r.GetAttribute(d,y)}const x=i(a,r,d,m,p,_);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),v.attributes.push(x)}return g===a.TRIANGULAR_MESH&&(v.index=n(a,r,d)),a.destroy(d),v}function n(a,r,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);r.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,r,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,v=g*h.BYTES_PER_ELEMENT,m=s(a,h),p=a._malloc(v);r.GetAttributeDataArrayForAllPoints(l,u,m,v,p);const _=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:c,array:_,itemSize:d}}function s(a,r){switch(r){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class Ta extends Ve{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,r=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new b(.70707,.70707,0),u=new ne(t.sunColor!==void 0?t.sunColor:16777215),d=new ne(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new b(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:Ti,m=t.fog!==void 0?t.fog:!1,p=new ys,_=new b,y=new b,x=new b,T=new nt,w=new b(0,0,-1),E=new qt,A=new b,M=new b,S=new qt,C=new nt,R=new Xn,N=new ci(i,s),P={name:"MirrorShader",uniforms:Oi.merge([Ye.fog,Ye.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new nt},sunColor:{value:new ne(8355711)},sunDirection:{value:new b(.70707,.70707,0)},eye:{value:new b},waterColor:{value:new ne(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},k=new nn({name:P.name,uniforms:Oi.clone(P.uniforms),vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,lights:!0,side:v,fog:m});k.uniforms.mirrorSampler.value=N.texture,k.uniforms.textureMatrix.value=C,k.uniforms.alpha.value=r,k.uniforms.time.value=l,k.uniforms.normalSampler.value=c,k.uniforms.sunColor.value=u,k.uniforms.waterColor.value=d,k.uniforms.sunDirection.value=h,k.uniforms.distortionScale.value=g,k.uniforms.eye.value=f,n.material=k,n.onBeforeRender=function(z,F,U){if(y.setFromMatrixPosition(n.matrixWorld),x.setFromMatrixPosition(U.matrixWorld),T.extractRotation(n.matrixWorld),_.set(0,0,1),_.applyMatrix4(T),A.subVectors(y,x),A.dot(_)>0)return;A.reflect(_).negate(),A.add(y),T.extractRotation(U.matrixWorld),w.set(0,0,-1),w.applyMatrix4(T),w.add(x),M.subVectors(y,w),M.reflect(_).negate(),M.add(y),R.position.copy(A),R.up.set(0,1,0),R.up.applyMatrix4(T),R.up.reflect(_),R.lookAt(M),R.far=U.far,R.updateMatrixWorld(),R.projectionMatrix.copy(U.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(R.projectionMatrix),C.multiply(R.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(_,y),p.applyMatrix4(R.matrixWorldInverse),E.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const L=R.projectionMatrix;S.x=(Math.sign(E.x)+L.elements[8])/L.elements[0],S.y=(Math.sign(E.y)+L.elements[9])/L.elements[5],S.z=-1,S.w=(1+L.elements[10])/L.elements[14],E.multiplyScalar(2/E.dot(S)),L.elements[2]=E.x,L.elements[6]=E.y,L.elements[10]=E.z+1-a,L.elements[14]=E.w,f.setFromMatrixPosition(U.matrixWorld);const W=z.getRenderTarget(),te=z.xr.enabled,j=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget(N),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(F,R),n.visible=!0,z.xr.enabled=te,z.shadowMap.autoUpdate=j,z.setRenderTarget(W);const be=U.viewport;be!==void 0&&z.state.viewport(be)}}}class Ca extends Ve{constructor(){super(Ca.Geometry,new dn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new b,t=new b,n=new td(16,16),i=new td(16,16);let s=zi;const a=Ca.Geometry,r=new kr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new kr({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new Ve(a,r),h=[],u=Ah.Shader,d=new kr({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new ne(16777215)},scale:{value:new Oe},screenPosition:{value:new b}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Rn,transparent:!0,depthWrite:!1}),f=new Ve(a,d);this.addElement=function(_){h.push(_)};const g=new Oe,v=new Oe,m=new rM,p=new qt;this.onBeforeRender=function(_,y,x){_.getCurrentViewport(p);const T=_.getRenderTarget(),w=T!==null?T.texture.type:zi;s!==w&&(n.dispose(),i.dispose(),n.type=i.type=w,s=w);const E=p.w/p.z,A=p.z/2,M=p.w/2;let S=16/p.w;if(g.set(S*E,S),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(x.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(x.projectionMatrix),v.x=p.x+e.x*A+A-8,v.y=p.y+e.y*M+M-8,m.containsPoint(v))){_.copyFramebufferToTexture(n,v);let C=r.uniforms;C.scale.value=g,C.screenPosition.value=e,_.renderBufferDirect(x,null,a,r,c,null),_.copyFramebufferToTexture(i,v),C=l.uniforms,C.scale.value=g,C.screenPosition.value=e,_.renderBufferDirect(x,null,a,l,c,null);const R=-e.x*2,N=-e.y*2;for(let P=0,k=h.length;P<k;P++){const z=h[P],F=d.uniforms;F.color.value.copy(z.color),F.map.value=z.texture,F.screenPosition.value.x=e.x+R*z.distance,F.screenPosition.value.y=e.y+N*z.distance,S=z.size/p.w;const U=p.w/p.z;F.scale.value.set(S*U,S),d.uniformsNeedUpdate=!0,_.renderBufferDirect(x,null,a,d,f,null)}}},this.dispose=function(){r.dispose(),l.dispose(),d.dispose(),n.dispose(),i.dispose();for(let _=0,y=h.length;_<y;_++)h[_].texture.dispose()}}}class Ah{constructor(e,t=1,n=0,i=new ne(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}Ah.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Ca.Geometry=(function(){const o=new At,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new vh(e,5);return o.setIndex([0,1,2,0,2,3]),o.setAttribute("position",new Qs(t,3,0,!1)),o.setAttribute("uv",new Qs(t,2,3,!1)),o})();function yi(o,e,t=0){let n=Math.imul(o|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Ai(o,e,t,n=0){const i=o*t,s=e*t,a=Math.floor(i),r=Math.floor(s),l=i-a,c=s-r,h=l*l*(3-2*l),u=c*c*(3-2*c),d=(a%t+t)%t,f=(d+1)%t,g=(r%t+t)%t,v=(g+1)%t,m=yi(d,g,n),p=yi(f,g,n),_=yi(d,v,n),y=yi(f,v,n);return m+(p-m)*h+(_+(y-_)*h-(m+(p-m)*h))*u}function Rs(o,e,t=8,n=4,i=0){let s=0,a=.5,r=t,l=0;for(let c=0;c<n;c++)s+=a*Ai(o,e,r,i+c*31),l+=a,a*=.5,r*=2;return s/Math.max(1e-5,l)}function ol(o,e,t=8,n=4,i=100){let s=0,a=.5,r=t,l=0;for(let c=0;c<n;c++){const h=1-Math.abs(Ai(o,e,r,i+c*37)*2-1);s+=a*(h*h),l+=a,a*=.5,r*=2}return s/Math.max(1e-5,l)}function Es(o,e){if(typeof document>"u")return null;const t=document.createElement("canvas");return t.width=o,t.height=e,t}function Br(o,e=!0,t=4){return o.colorSpace=e?Xt:Wi,o.wrapS=Nn,o.wrapT=Nn,o.repeat.set(t,t),o.anisotropy=8,o.needsUpdate=!0,o}const wn=new Map;function Na(o,e,t){const n=Es(o,o),i=Es(o,o),s=Es(o,o);if(!n||!i||!s)return{map:null,roughnessMap:null,bumpMap:null};const a=n.getContext("2d"),r=i.getContext("2d"),l=s.getContext("2d"),c=a.createImageData(o,o),h=r.createImageData(o,o),u=l.createImageData(o,o),d=c.data,f=h.data,g=u.data,v={r:128,g:128,b:128,rough:.85,bump:.5};for(let m=0;m<o;m++){const p=(m+.5)/o;for(let _=0;_<o;_++){const y=(_+.5)/o;t(y,p,_,m,v);const x=(m*o+_)*4;d[x]=Math.min(255,Math.max(0,v.r|0)),d[x+1]=Math.min(255,Math.max(0,v.g|0)),d[x+2]=Math.min(255,Math.max(0,v.b|0)),d[x+3]=255;const T=Math.min(255,Math.max(0,Math.round(v.rough*255)));f[x]=T,f[x+1]=T,f[x+2]=T,f[x+3]=255;const w=Math.min(255,Math.max(0,Math.round(v.bump*255)));g[x]=w,g[x+1]=w,g[x+2]=w,g[x+3]=255}}return a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0),{map:Br(new fn(n),!0,e),roughnessMap:Br(new fn(i),!1,e),bumpMap:Br(new fn(s),!1,e)}}function s1(){if(wn.has("asphalt"))return wn.get("asphalt");const o=Na(512,6,(e,t,n,i,s)=>{const a=Ai(e,t,128,3),r=Rs(e,t,8,4,17),l=1-Math.pow(ol(e,t,6,3,73),3),c=Math.max(0,Math.min(1,(r-.56)*4.2)),h=Math.abs(e-.5)<.014&&Math.floor(t*16)%2===0,u=Math.abs(e-.09)<.011||Math.abs(e-.91)<.011,d=h||u?.62*(.5+.5*a):0;let f=26+a*18+r*16-l*14;f*=1-c*.24,s.r=f+d*145,s.g=f+d*122,s.b=f*1.08+d*70,s.rough=.88-c*.63-a*.04,s.bump=Math.max(0,Math.min(1,.5+(a-.5)*.42-l*.35-c*.15))});return wn.set("asphalt",o),o}function zf(){if(wn.has("concrete"))return wn.get("concrete");const o=Na(512,2,(e,t,n,i,s)=>{const a=Rs(e,t,16,4,29),r=Ai(e,t,96,11),l=i%32<2?1:0,c=n%64<2?.7:0,h=n%32>13&&n%32<17&&i%32>13&&i%32<17?1:0,u=Ai(e,t*.25,24,53),d=Math.max(0,(u-.55)*1.8),f=110+(a-.5)*32+(r-.5)*16-l*38-c*26-h*36-d*28;s.r=f+d*14,s.g=f+d*4,s.b=f*1.03-d*6,s.rough=Math.max(.78,Math.min(.95,.88+(a-.5)*.12-d*.08+l*.05)),s.bump=Math.max(0,Math.min(1,.56+(r-.5)*.28+(a-.5)*.24-l*.38-h*.35))});return wn.set("concrete",o),o}function Ko(){if(wn.has("rock"))return wn.get("rock");const o=Na(512,8,(e,t,n,i,s)=>{const a=Rs(e*.7+Rs(e,t,4,2,9)*.18,t*2.2,6,4,41),r=ol(e,t,6,4,91),l=Ai(e,t,96,19),c=165+(a-.5)*58-Math.pow(r,2.2)*52+(l-.5)*26;s.r=c,s.g=c*.98,s.b=c*.96,s.rough=Math.max(.7,Math.min(.96,.86+(l-.5)*.14-r*.1)),s.bump=Math.max(0,Math.min(1,.5+(a-.5)*.45-r*.32+(l-.5)*.22))});return wn.set("rock",o),o}function al(){if(wn.has("terrain"))return wn.get("terrain");const o=Na(512,64,(e,t,n,i,s)=>{const a=Rs(e,t,8,4,61),r=Ai(e,t,96,23),l=ol(e,t,10,3,131),c=205+(a-.5)*44+(r-.5)*28-l*18;s.r=c,s.g=c,s.b=c,s.rough=Math.max(.62,Math.min(.96,.86+(a-.5)*.16-l*.14)),s.bump=Math.max(0,Math.min(1,.52+(a-.5)*.36+(r-.5)*.34-l*.2))});return wn.set("terrain",o),o}function Eh(){if(wn.has("bark"))return wn.get("bark");const o=Na(512,2,(e,t,n,i,s)=>{const a=Rs(e*2,t*.65,6,3,211)*.12,r=ol((e*1.4+a+1)%1,t*.35%1,12,3,223),l=Ai(e,t,64,241),c=175+(l-.5)*38-Math.pow(r,1.8)*58;s.r=c*1.02,s.g=c*.94,s.b=c*.84,s.rough=Math.max(.78,Math.min(.97,.88+r*.08+(l-.5)*.06)),s.bump=Math.max(0,Math.min(1,.55-r*.44+(l-.5)*.24))});return o.map&&(o.map.repeat.set(2,4),o.roughnessMap.repeat.set(2,4),o.bumpMap.repeat.set(2,4)),wn.set("bark",o),o}function yr(o,e=!0){return o.colorSpace=e?Xt:Wi,o.wrapS=Fi,o.wrapT=Fi,o.anisotropy=8,o.needsUpdate=!0,o}function br(o,e){const t=Es(o,o),n=Es(o,o),i=Es(o,o),s=Es(o,o);if(!t||!n||!i||!s)return{map:null,alphaMap:null,roughnessMap:null,emissiveMap:null};const a=t.getContext("2d"),r=n.getContext("2d"),l=i.getContext("2d"),c=s.getContext("2d"),h=a.createImageData(o,o),u=r.createImageData(o,o),d=l.createImageData(o,o),f=c.createImageData(o,o),g=h.data,v=u.data,m=d.data,p=f.data,_={r:170,g:205,b:165,a:0,rough:.68,emR:0,emG:0,emB:0};for(let y=0;y<o;y++){const x=1-(y+.5)/o;for(let T=0;T<o;T++){const w=(T+.5)/o;e(w,x,_);const E=(y*o+T)*4,A=Math.min(255,Math.max(0,Math.round(_.a*255)));g[E]=Math.min(255,Math.max(0,Math.round(_.r))),g[E+1]=Math.min(255,Math.max(0,Math.round(_.g))),g[E+2]=Math.min(255,Math.max(0,Math.round(_.b))),g[E+3]=A,v[E]=A,v[E+1]=A,v[E+2]=A,v[E+3]=255;const M=Math.min(255,Math.max(0,Math.round(_.rough*255)));m[E]=M,m[E+1]=M,m[E+2]=M,m[E+3]=255;const S=_.a>=.45?1:0;p[E]=Math.min(255,Math.max(0,Math.round(_.emR*S))),p[E+1]=Math.min(255,Math.max(0,Math.round(_.emG*S))),p[E+2]=Math.min(255,Math.max(0,Math.round(_.emB*S))),p[E+3]=255}}return a.putImageData(h,0,0),r.putImageData(u,0,0),l.putImageData(d,0,0),c.putImageData(f,0,0),{map:yr(new fn(t),!0),alphaMap:yr(new fn(n),!1),roughnessMap:yr(new fn(i),!1),emissiveMap:yr(new fn(s),!0)}}function o1(o,e,t,n,i,s){const a=i-t,r=s-n,l=o-t,c=e-n,h=a*a+r*r+1e-8,u=Math.min(1,Math.max(0,(l*a+c*r)/h));return Math.hypot(o-(t+a*u),e-(n+r*u))}function Th(){if(wn.has("foliage"))return wn.get("foliage");const o=br(512,(l,c,h)=>{const u=.5+.022*Math.sin(c*Math.PI),d=l-u,f=Math.abs(d),g=.015*(1-c*.72),v=c>=.015&&c<=.96&&f<=g,m=(c-.08)/.89,p=m>0&&m<1?.44*Math.pow(Math.sin(Math.pow(m,.78)*Math.PI),.72):0,_=.94+.06*Ai(l,c,24,307),y=p*_;let x=!1,T=.78,w=0;if(m>0&&m<1&&f<=y&&f>=g*.65){const E=f/Math.max(.02,y),M=(c-f*(.46+.24*(1-c)))*27+(d>=0?0:.35),S=M-Math.floor(M),C=Math.abs(S-.5)*2,R=.07*Math.sin(f*140),N=Math.max(.08,.78*(1-Math.pow(E,1.45))+R);if(C<=N){x=!0;const P=Math.exp(-Math.pow(C/.16,2)),k=Math.floor(M)+(d>=0?11:37);T=(.82+.18*yi(k,5,19))*(.72+.22*E+.16*P),w=Math.max(0,(E-.65)/.35)+P*.45}}if(v){const E=1-f/Math.max(.001,g);h.r=165+E*35,h.g=192+E*30,h.b=128+E*25,h.a=1,h.rough=.58,h.emR=140*E,h.emG=235*E,h.emB=210*E}else if(x){h.r=178*T,h.g=224*T,h.b=164*T,h.a=1,h.rough=.66-Math.min(.14,w*.1);const E=Math.min(1,w*.85);h.emR=100*E,h.emG=245*E,h.emB=225*E}else h.r=135,h.g=175,h.b=120,h.a=0,h.rough=.72,h.emR=0,h.emG=0,h.emB=0}),e=[[.5,.02,.5,.55],[.5,.28,.28,.54],[.5,.34,.72,.58],[.5,.52,.36,.82],[.5,.55,.65,.84]],t=28,n=[];for(let l=0;l<t;l++){const c=l/t,h=.14+.24*Math.sin(c*Math.PI*.92+.25),u=l*2.39996+(yi(l,3,71)-.5)*.42,d=.5+Math.cos(u)*h*1.15,f=.24+c*.64+(yi(l,9,43)-.5)*.07,g=Math.atan2(f-.26,d-.5)+(yi(l,11,17)-.5)*.55,v=.13+yi(l,7,5)*.075,m=v*(.44+yi(l,13,29)*.16),p=.64+.36*c+(yi(l,4,83)-.5)*.1;n.push({cx:d,cy:f,cosA:Math.cos(g),sinA:Math.sin(g),invLen:1/v,invWid:1/m,maxR:v*1.12,shade:p})}const i=br(512,(l,c,h)=>{let u=!1,d=.72,f=0,g=0;for(let m=0;m<t;m++){const p=n[m];if(Math.abs(l-p.cx)>p.maxR||Math.abs(c-p.cy)>p.maxR)continue;const _=l-p.cx,y=c-p.cy,x=(_*p.cosA+y*p.sinA)*p.invLen;if(x<-1||x>1)continue;const T=(-_*p.sinA+y*p.cosA)*p.invWid,w=(1-x*x)*(1-.28*Math.max(0,x))+.055*Math.sin(x*22),E=Math.abs(T)/Math.max(.02,w);if(E<=1){u=!0;const A=Math.exp(-Math.pow(Math.abs(T)/.12,2))*(1-Math.max(0,x)*.45),M=Math.max(0,Math.sin((x*4.5-Math.abs(T)*3.8)*Math.PI))*(1-E)*.45;f=Math.max(A,M),g=Math.pow(E,3.2)*.85+Math.max(0,x)*.35,d=p.shade*(.86+.18*(1-E)+.12*A)}}let v=!1;for(let m=0;m<e.length;m++){const p=e[m],_=o1(l,c,p[0],p[1],p[2],p[3]),y=m===0?.015*(1-c*.5):.008;if(_<=y){v=!0;break}}if(u){h.r=182*d,h.g=228*d,h.b=176*d,h.a=1,h.rough=.68-f*.14;const m=Math.min(1,f*.88+g*.58);h.emR=135*m,h.emG=248*m,h.emB=228*m}else v?(h.r=112,h.g=94,h.b=68,h.a=1,h.rough=.88,h.emR=25,h.emG=60,h.emB=55):(h.r=140,h.g=180,h.b=130,h.a=0,h.rough=.72,h.emR=0,h.emG=0,h.emB=0)}),s=br(512,(l,c,h)=>{const u=.5+.018*Math.sin(c*4.2),d=l-u,f=Math.abs(d),g=.014*(1-c*.78),v=c>=.015&&c<=.96&&f<=g,m=(c-.06)/.9,p=m>0&&m<1?.45*Math.pow(Math.sin(Math.pow(m,.7)*Math.PI),.85):0;let _=!1,y=.8,x=0;if(m>0&&m<1&&f<=p&&f>=g*.55){const T=f/Math.max(.02,p),E=(c-f*(.3+.14*c))*23+(d>=0?0:.45),A=E-Math.floor(E),M=Math.abs(A-.5)*2,S=.14*Math.sin(f*110)*(1-T*.4),C=Math.max(.06,.82*(1-Math.pow(T,1.25))+S);if(M<=C){_=!0;const R=Math.exp(-Math.pow(M/.18,2)),N=Math.pow(M/Math.max(.05,C),2.4);y=(.84+.16*yi(Math.floor(E),8,53))*(.76+.18*R+.12*T),x=Math.min(1,R*.75+N*.65+T*.25)}}v?(h.r=160,h.g=205,h.b=142,h.a=1,h.rough=.6,h.emR=110,h.emG=230,h.emB=185):_?(h.r=176*y,h.g=230*y,h.b=165*y,h.a=1,h.rough=.64,h.emR=95*x,h.emG=248*x,h.emB=195*x):(h.r=132,h.g=178,h.b=122,h.a=0,h.rough=.72,h.emR=0,h.emG=0,h.emB=0)}),a=br(512,(l,c,h)=>{const u=l-.5,d=Math.max(0,c-.04),f=Math.hypot(u*1.05,d),g=Math.atan2(d,u),v=Math.abs(g-Math.PI*.5)<1.38,m=.78+.065*Math.sin(g*11+.5)+.028*Math.cos(g*25)+.03*Ai(l,c,20,409),p=Ai(l,c,36,421)>.78&&f>m*.84;if(v&&f>=.02&&f<=m&&!p){const _=f/Math.max(.05,m),y=Math.pow(Math.abs(Math.sin(g*28+Math.sin(f*14)*.3)),1.6),x=Ai(l*1.4,c*1.4,24,433),T=Math.pow(_,2.8),w=.72+.24*y+.14*x-.12*Math.pow(_,2);h.r=Math.min(255,224*w),h.g=Math.min(255,198*w),h.b=Math.min(255,238*w),h.a=1,h.rough=.44+y*.22;const E=Math.min(1,y*.72*_+T*.78+(x>.74?.45:0));h.emR=235*E,h.emG=140*E,h.emB=255*E}else h.r=165,h.g=128,h.b=180,h.a=0,h.rough=.65,h.emR=0,h.emG=0,h.emB=0}),r={texPalmFrondAlpha:o,texCanopyBranchAlpha:i,texFernClusterAlpha:s,texMushroomCapAlpha:a,palm:o,canopy:i,fern:s,mushroom:a};return wn.set("foliage",r),r}const $l=new WeakMap;function Po(o){if(!o)return new Kc({depthPacking:Xc,alphaTest:.45,side:wt});if($l.has(o))return $l.get(o);const e=new Kc({depthPacking:Xc,map:o,alphaTest:.45,side:wt});return $l.set(o,e),e}function Ua(){if(wn.has("waterNormals"))return wn.get("waterNormals");const o=512,e=Es(o,o);if(!e)return null;const t=e.getContext("2d"),n=t.createImageData(o,o),i=n.data,s=(l,c)=>{const h=Rs(l,c,6,3,301),u=Rs(l*1.5+.3,c*1.5-.2,12,3,419)*.55,d=Math.sin((l*6+c*4)*Math.PI*2)*.08+Math.cos((l*10-c*8)*Math.PI*2)*.05;return h+u+d},a=1/o;for(let l=0;l<o;l++){const c=(l+.5)/o;for(let h=0;h<o;h++){const u=(h+.5)/o,d=(s((u+a)%1,c)-s((u-a+1)%1,c))*2.2,f=(s(u,(c+a)%1)-s(u,(c-a+1)%1))*2.2,g=Math.hypot(-d,-f,1),v=(l*o+h)*4;i[v]=Math.round((-d/g*.5+.5)*255),i[v+1]=Math.round((-f/g*.5+.5)*255),i[v+2]=Math.round((1/g*.5+.5)*255),i[v+3]=255}}t.putImageData(n,0,0);const r=Br(new fn(e),!1,1);return wn.set("waterNormals",r),r}let Ql=null;function a1(){if(Ql)return Ql;const o=new Uint8Array([205,205,205,255]),e=new tl(o,1,1);return e.wrapS=Nn,e.wrapT=Nn,e.needsUpdate=!0,Ql=e,e}function Ch(o,e={}){const t=e.mode||"pandora",n=new ne(e.rockHex??(t==="badlands"?6043174:3883078)),i=new ne(e.peakHex??(t==="badlands"?10251856:13819112)),s=new ne(e.shoreHex??(t==="badlands"?1450540:2895908)),a=e.peakStart??4.8,r=e.peakEnd??9.5,l=e.shoreBand??.65,c=!!e.hasAshFissures,h=!!e.hasNationWeights,u=e.detailTex||al().map||a1(),d={uPlanetCenter:{value:new b},uPlanetWorldRadius:{value:e.worldRadius??1e3},uRockColor:{value:n},uPeakColor:{value:i},uShoreColor:{value:s},uDetailTex:{value:u},uLavaTime:{value:0}};o.userData.splatUniforms=d;const f=o.onBeforeCompile;return o.onBeforeCompile=(g,v)=>{f&&f(g,v),g.uniforms.uPlanetCenter=d.uPlanetCenter,g.uniforms.uPlanetWorldRadius=d.uPlanetWorldRadius,g.uniforms.uRockColor=d.uRockColor,g.uniforms.uPeakColor=d.uPeakColor,g.uniforms.uShoreColor=d.uShoreColor,g.uniforms.uDetailTex=d.uDetailTex,g.uniforms.uLavaTime=d.uLavaTime;const m=c?`attribute float aAshMask;
varying float vAshMask;
`:"",p=c?`
        vAshMask = aAshMask;`:"",_=h?`attribute vec3 aNationWeights;
varying vec3 vNationWeights;
`:"",y=h?`
        vNationWeights = aNationWeights;`:"";g.vertexShader=`varying vec3 vSplatWorldPos;
varying vec3 vSplatWorldNormal;
varying vec3 vSplatLocalPos;
varying vec3 vSplatLocalNormal;
${m}${_}`+g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vSplatLocalPos = transformed;
        vSplatLocalNormal = objectNormal;
        vSplatWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vSplatWorldNormal = normalize(mat3(modelMatrix) * objectNormal);${p}${y}`);const x=c?`uniform float uLavaTime;
varying float vAshMask;
vec3 _hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
float _vorCrack3D(vec3 x) {
  vec3 n = floor(x);
  vec3 f = fract(x);
  float d1 = 8.0;
  float d2 = 8.0;
  for (int k = -1; k <= 1; k++) {
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec3 g = vec3(float(i), float(j), float(k));
        vec3 o = 0.5 + 0.42 * sin(_hash33(n + g) * 6.2831853 + vec3(0.0, 2.1, 4.2));
        vec3 r = g + o - f;
        float d = dot(r, r);
        if (d < d1) { d2 = d1; d1 = d; }
        else if (d < d2) { d2 = d; }
      }
    }
  }
  return sqrt(d2) - sqrt(d1);
}
`:"",T=h?`varying vec3 vNationWeights;
`:"",w=h?`
          vec3 _natW = vNationWeights / max(0.001, vNationWeights.x + vNationWeights.y + vNationWeights.z);
          float _flatLand = (1.0 - smoothstep(0.18, 0.44, _splatSlope)) * smoothstep(0.08, 0.55, _splatAlt);
          vec3 _forestHumus = mix(vec3(0.06, 0.12, 0.07), vec3(0.11, 0.24, 0.10), clamp((_gMacro - 0.55) * 1.8, 0.0, 1.0));
          diffuseColor.rgb = mix(diffuseColor.rgb, mix(diffuseColor.rgb, _forestHumus, 0.44), _natW.x * _flatLand * _closeFade);
          float _sandZone = smoothstep(-0.08, 0.16, _splatAlt) * (1.0 - smoothstep(0.45, 1.15, _splatAlt)) * (1.0 - smoothstep(0.25, 0.55, _splatSlope));
          vec3 _coralSand = vec3(0.76, 0.68, 0.49) * (0.86 + 0.28 * _gMacro);
          diffuseColor.rgb = mix(diffuseColor.rgb, _coralSand, _natW.y * _sandZone * 0.68);
          float _wetTide = (1.0 - smoothstep(0.0, 0.34, abs(_splatAlt))) * step(-0.22, _splatAlt);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.14, 0.20, 0.18), _natW.y * _wetTide * 0.58);
          vec3 _ashBasalt = vec3(0.075, 0.068, 0.072) * (0.82 + 0.36 * _gMacro);
          diffuseColor.rgb = mix(diffuseColor.rgb, _ashBasalt, _natW.z * smoothstep(0.15, 0.48, _splatSlope) * 0.55);`:"",E=h?`
          vec3 _natWR = vNationWeights / max(0.001, vNationWeights.x + vNationWeights.y + vNationWeights.z);
          float _wetShoreR = (1.0 - smoothstep(0.0, 0.38, abs(_splatAltR))) * step(-0.24, _splatAltR);
          roughnessFactor = mix(roughnessFactor, 0.18, _natWR.y * _wetShoreR * 0.88);
          roughnessFactor = mix(roughnessFactor, 0.84, _natWR.x * (1.0 - _rockRoughMask) * 0.35);`:"",A=c?`
          float _vorCrackGlow = 0.0;
          float _vorCrackCore = 0.0;
          float _ashZone = smoothstep(0.55, 0.78, vAshMask);
          if (_ashZone > 0.005) {
            vec3 _warpP = vSplatLocalPos * 11.5 + sin(vSplatLocalPos.yzx * 23.0) * 0.24 + cos(vSplatLocalPos.zxy * 41.0) * 0.09;
            float _v1 = _vorCrack3D(_warpP);
            float _v2 = _vorCrack3D(_warpP * 2.35 + vec3(3.7, 1.9, 5.1));
            float _cr1 = 1.0 - smoothstep(0.010, 0.062, _v1);
            float _cr2 = (1.0 - smoothstep(0.006, 0.044, _v2)) * (1.0 - smoothstep(0.018, 0.26, _v1));
            _vorCrackGlow = clamp(_cr1 + _cr2 * 0.82, 0.0, 1.0) * _ashZone;
            _vorCrackCore = (1.0 - smoothstep(0.002, 0.026, min(_v1, _v2 * 1.15))) * _ashZone;
            float _scorchRim = (1.0 - smoothstep(0.03, 0.16, _v1)) * _ashZone;
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.048, 0.042, 0.046), _ashZone * 0.45);
            diffuseColor.rgb *= mix(1.0, 0.38, _scorchRim);
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.95, 0.28, 0.04), _vorCrackGlow * 0.55);
          }`:"";let M=`uniform vec3 uPlanetCenter;
uniform float uPlanetWorldRadius;
uniform vec3 uRockColor;
uniform vec3 uPeakColor;
uniform vec3 uShoreColor;
uniform sampler2D uDetailTex;
${x}${T}varying vec3 vSplatWorldPos;
varying vec3 vSplatWorldNormal;
varying vec3 vSplatLocalPos;
varying vec3 vSplatLocalNormal;
`+g.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          vec3 _splatRad = vSplatWorldPos - uPlanetCenter;
          float _splatDist = max(0.001, length(_splatRad));
          vec3 _splatUp = _splatRad / _splatDist;
          float _splatAlt = _splatDist - uPlanetWorldRadius;
          float _splatSlope = 1.0 - abs(dot(normalize(vSplatWorldNormal), _splatUp));
          float _rockMask = smoothstep(0.28, 0.58, _splatSlope) * smoothstep(-0.2, 0.7, _splatAlt);
          float _peakMask = smoothstep(${a.toFixed(2)}, ${r.toFixed(2)}, _splatAlt);
          float _shoreMask = (1.0 - smoothstep(0.0, ${l.toFixed(2)}, abs(_splatAlt))) * step(-0.35, _splatAlt);
          float _camDistS = length(cameraPosition - vSplatWorldPos);
          float _closeFade = 1.0 - smoothstep(26.0, 96.0, _camDistS);
          float _microFade = 1.0 - smoothstep(8.0, 38.0, _camDistS);
          vec3 _triW = pow(abs(normalize(vSplatLocalNormal)), vec3(4.0));
          _triW /= max(0.001, _triW.x + _triW.y + _triW.z);
          float _gMacro = texture2D(uDetailTex, vSplatLocalPos.yz * 16.0).g * _triW.x
                        + texture2D(uDetailTex, vSplatLocalPos.xz * 16.0).g * _triW.y
                        + texture2D(uDetailTex, vSplatLocalPos.xy * 16.0).g * _triW.z;
          float _gMicro = texture2D(uDetailTex, vSplatLocalPos.yz * 88.0).g * _triW.x
                        + texture2D(uDetailTex, vSplatLocalPos.xz * 88.0).g * _triW.y
                        + texture2D(uDetailTex, vSplatLocalPos.xy * 88.0).g * _triW.z;
          float _detailMul = 1.0 + (_gMacro - 0.80) * 0.42 * _closeFade + (_gMicro - 0.80) * 0.56 * _microFade;
          float _strataWave = 0.80 + 0.20 * sin(_splatAlt * 26.0 + _gMacro * 4.2);
          vec3 _strataTex = uRockColor * (0.82 + 0.36 * _gMacro) * mix(1.0, _strataWave, 0.68 * _closeFade);
          diffuseColor.rgb = mix(diffuseColor.rgb, _strataTex, _rockMask * 0.78);
          diffuseColor.rgb = mix(diffuseColor.rgb, uPeakColor, _peakMask * 0.62);
          diffuseColor.rgb = mix(diffuseColor.rgb, uShoreColor, _shoreMask * 0.72);${w}
          diffuseColor.rgb *= clamp(_detailMul, 0.72, 1.28);${A}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          vec3 _splatRadR = vSplatWorldPos - uPlanetCenter;
          float _splatDistR = max(0.001, length(_splatRadR));
          vec3 _splatUpR = _splatRadR / _splatDistR;
          float _splatAltR = _splatDistR - uPlanetWorldRadius;
          float _splatSlopeR = 1.0 - abs(dot(normalize(vSplatWorldNormal), _splatUpR));
          float _rockRoughMask = smoothstep(0.35, 0.65, _splatSlopeR);
          float _shoreRoughMask = (1.0 - smoothstep(0.0, ${l.toFixed(2)}, abs(_splatAltR))) * step(-0.35, _splatAltR);
          float _camDistR = length(cameraPosition - vSplatWorldPos);
          float _microFadeR = 1.0 - smoothstep(10.0, 52.0, _camDistR);
          vec3 _triWR = pow(abs(normalize(vSplatLocalNormal)), vec3(4.0));
          _triWR /= max(0.001, _triWR.x + _triWR.y + _triWR.z);
          float _gMicroR = texture2D(uDetailTex, vSplatLocalPos.yz * 72.0).g * _triWR.x
                         + texture2D(uDetailTex, vSplatLocalPos.xz * 72.0).g * _triWR.y
                         + texture2D(uDetailTex, vSplatLocalPos.xy * 72.0).g * _triWR.z;
          roughnessFactor = clamp(roughnessFactor + (_gMicroR - 0.80) * 0.28 * _microFadeR, 0.16, 0.98);
          roughnessFactor = mix(roughnessFactor, 0.94, _rockRoughMask * 0.7);
          roughnessFactor = mix(roughnessFactor, 0.22, _shoreRoughMask * 0.85);${E}`);c&&(M=M.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          if (_vorCrackGlow > 0.002) {
            float _magmaPulse = 0.86 + 0.14 * sin(uLavaTime * 2.1 + vSplatLocalPos.x * 16.0 + vSplatLocalPos.z * 13.0);
            vec3 _magmaCol = mix(vec3(1.15, 0.18, 0.02), vec3(2.35, 0.92, 0.16), clamp(_vorCrackCore * 1.2, 0.0, 1.0));
            totalEmissiveRadiance += _magmaCol * _vorCrackGlow * _magmaPulse;
          }`)),g.fragmentShader=M},o.customProgramCacheKey=()=>`terrainSplat_${t}_${a}_${c?"ashvor":"std"}_${h?"nat":"nonat"}_triplanar2`,d}const r1={name:"RadialMotionBlurShader",uniforms:{tDiffuse:{value:null},uBlurStrength:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uBlurStrength;
    varying vec2 vUv;
    void main() {
      vec4 base = texture2D(tDiffuse, vUv);
      if (uBlurStrength < 0.002) {
        gl_FragColor = base;
        return;
      }
      vec2 toEdge = vUv - vec2(0.5);
      float radialDist = length(toEdge);
      float edgeMask = smoothstep(0.18, 0.72, radialDist);
      vec2 stepUv = toEdge * (uBlurStrength * 0.036 * edgeMask);
      vec4 accum = base;
      accum += texture2D(tDiffuse, vUv - stepUv * 0.2);
      accum += texture2D(tDiffuse, vUv - stepUv * 0.4);
      accum += texture2D(tDiffuse, vUv - stepUv * 0.6);
      accum += texture2D(tDiffuse, vUv - stepUv * 0.8);
      accum += texture2D(tDiffuse, vUv - stepUv);
      gl_FragColor = mix(base, accum / 6.0, edgeMask);
    }
  `};function l1(){const o=new $n(8.5,22,32,8,!0);o.rotateX(-Math.PI*.5);const e={uTime:{value:0},uOpacity:{value:0},uColor:{value:new ne(13430527)}},t=new nn({uniforms:e,vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vNormalV;
      varying vec3 vViewPos;
      void main() {
        vUv = uv;
        vec3 displaced = position + normal * (sin(position.z * 1.4 - uTime * 22.0) * 0.18 * (1.0 - uv.y));
        vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
        vViewPos = -mv.xyz;
        vNormalV = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
        #include <logdepthbuf_vertex>
      }
    `,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform float uTime;
      uniform float uOpacity;
      uniform vec3 uColor;
      varying vec2 vUv;
      varying vec3 vNormalV;
      varying vec3 vViewPos;
      void main() {
        #include <logdepthbuf_fragment>
        if (uOpacity < 0.005) discard;
        vec3 V = normalize(vViewPos);
        vec3 N = normalize(vNormalV);
        float fresnel = pow(max(1.0 - abs(dot(N, V)), 0.001), 2.1);
        float vaporRing = exp(-pow((vUv.y - 0.52) / 0.16, 2.0));
        float streaks = 0.65 + 0.35 * sin(vUv.x * 56.0 + uTime * 18.0);
        float alpha = uOpacity * (fresnel * 0.72 + vaporRing * 0.55) * streaks * smoothstep(0.02, 0.25, vUv.y) * (1.0 - smoothstep(0.82, 1.0, vUv.y));
        gl_FragColor = vec4(uColor * (1.2 + vaporRing * 0.8), clamp(alpha, 0.0, 0.85));
      }
    `,transparent:!0,depthWrite:!1,blending:Rn,side:wt}),n=new Ve(o,t);return n.name="Mach_Supersonic_Shockwave_Cone",n.position.set(0,-.35,-10.5),n.visible=!1,n.frustumCulled=!1,n.userData.skipSSAO=!0,{mesh:n,uniforms:e}}const pa=new b(0,1,0),Ke=.45;function bs(o,e,t){return Math.max(e,Math.min(t,o))}function Hi(o,e,t){const n=bs((t-o)/(e-o),0,1);return n*n*(3-2*n)}function ni(o,e){const t=Math.hypot(o,e);if(t<1e-6)return new b(0,1,0);const n=Math.sin(t)/t;return new b(o*n,Math.cos(t),-e*n).normalize()}function c1(o,e,t){const n=Math.hypot(o,t),i=Math.atan2(n,bs(e,-1,1)),s=n>1e-6?i/n:0;return{ax:o*s,ay:-t*s,theta:i}}const No=[{id:"city_center",name:"City Center · Corpo Plaza",shortName:"Corpo Plaza",badge:"NÚCLEO CORPORATIVO",color:"#2eb8ff",accent:"#ffd068",mapAx:.02,mapAy:0,ax:.02*Ke,ay:0*Ke,capDir:ni(.02*Ke,0),viewAlt:.145,viewBack:.165,description:"Centro neurálgico con Corpo Plaza, monolitos Neomilitaristas (Arasaka/Militech), torres Neokitsch y hologramas Koi en niebla azul clínica.",atmo:{fogDay:2247272,fogNight:464422,fogDusk:4725304,fogDensity:.0046,hemiSky:1985648,hemiGround:1055786,ambient:1058877,localLight:3721471,localBounce:15116344,bloomCap:.5}},{id:"watson",name:"Watson · Little China / Northside",shortName:"Watson",badge:"MEGAEDIFICIOS Y PUERTO",color:"#ff3450",accent:"#00e5ff",mapAx:-.05,mapAy:.34,ax:-.05*Ke,ay:.34*Ke,capDir:ni(-.05*Ke,.34*Ke),viewAlt:.125,viewBack:.145,description:"Norte de Night City: megaedificios mate H10, bloques apilados en Little China/Kabuki con carteles bajos puntuales y muelles en Northside.",atmo:{fogDay:2897480,fogNight:1116950,fogDusk:5380140,fogDensity:.0054,hemiSky:2504781,hemiGround:2101270,ambient:1580072,localLight:16726872,localBounce:1758955,bloomCap:.5}},{id:"westbrook",name:"Westbrook · Japantown / North Oak",shortName:"Westbrook",badge:"OCIO Y COLINAS ALTAS",color:"#e058ff",accent:"#fff0d8",mapAx:.36,mapAy:.16,ax:.36*Ke,ay:.16*Ke,capDir:ni(.36*Ke,.16*Ke),viewAlt:.135,viewBack:.155,description:"Este metropolitano en 3 niveles: neón selectivo en Japantown, terrazas blancas en Charter Hill y mansiones limpias en North Oak.",atmo:{fogDay:5533320,fogNight:726568,fogDusk:7025244,fogDensity:.0024,hemiSky:5008268,hemiGround:2629676,ambient:2372680,localLight:15235327,localBounce:16768936,bloomCap:.45}},{id:"heywood",name:"Heywood · The Glen / Vista del Rey",shortName:"Heywood",badge:"DISTRITO SUR · DORADO",color:"#ffb03b",accent:"#ffd884",mapAx:.02,mapAy:-.31,ax:.02*Ke,ay:-.31*Ke,capDir:ni(.02*Ke,-.31*Ke),viewAlt:.125,viewBack:.145,description:"Sur de City Center frente a la bahía: torres escalonadas en The Glen/Wellsprings y tejados bajos cálidos en Vista del Rey.",atmo:{fogDay:5916200,fogNight:1708552,fogDusk:8011808,fogDensity:.004,hemiSky:6442544,hemiGround:2891020,ambient:2826258,localLight:16757575,localBounce:14253604,bloomCap:.46}},{id:"santo_domingo",name:"Santo Domingo · Arroyo / Rancho Coronado",shortName:"Santo Domingo",badge:"INDUSTRIA Y SUBURBIOS",color:"#ff7a2e",accent:"#9aa0a8",mapAx:.39,mapAy:-.37,ax:.39*Ke,ay:-.37*Ke,capDir:ni(.39*Ke,-.37*Ke),viewAlt:.115,viewBack:.145,description:"Sureste industrial pesado: complejos fabriles, tuberías y refinerías en Arroyo junto al suburbio cuadriculado de Rancho Coronado sin neón.",atmo:{fogDay:6571052,fogNight:1904904,fogDusk:8537116,fogDensity:.0056,hemiSky:6439468,hemiGround:2627598,ambient:2891284,localLight:16745522,localBounce:7225894,bloomCap:.44}},{id:"pacifica",name:"Pacifica · Coastview / Dogtown",shortName:"Pacifica",badge:"ZONA EN RUINAS · OSCURA",color:"#7e8c9e",accent:"#ff5228",mapAx:-.23,mapAy:-.47,ax:-.23*Ke,ay:-.47*Ke,capDir:ni(-.23*Ke,-.47*Ke),viewAlt:.115,viewBack:.145,description:"Suroeste costero en penumbra: esqueletos de hoteles sin fachada, noria oxidada, fogatas aisladas y la zona amurallada de Dogtown.",atmo:{fogDay:2634302,fogNight:197896,fogDusk:3678246,fogDensity:.0044,hemiSky:2239544,hemiGround:724498,ambient:988188,localLight:6057864,localBounce:12075548,bloomCap:.34}},{id:"badlands",name:"Las Badlands · Tierras Baldías",shortName:"Las Badlands",badge:"PERÍMETRO EXTERIOR",color:"#c96f3b",accent:"#e8c488",mapAx:.76,mapAy:.06,ax:.76*Ke,ay:.06*Ke,capDir:ni(.76*Ke,.06*Ke),viewAlt:.125,viewBack:.155,description:"Cinturón exterior sin neón: campos petrolíferos al norte, parques eólicos e invernaderos Biotechnica al este y desierto nómada al sur.",atmo:{fogDay:9068090,fogNight:132104,fogDusk:10245164,fogDensity:.0014,hemiSky:9069636,hemiGround:3809298,ambient:3416596,localLight:14458980,localBounce:9062434,bloomCap:.3}}],Sr=Object.fromEntries(No.map(o=>[o.id,o]));function Gf(o,e){if(typeof document>"u")return null;const t=document.createElement("canvas");return t.width=o,t.height=e,t}function h1(o,e){const t=Gf(64,64);if(!t)return null;const n=t.getContext?.("2d");if(!n)return null;const i=n.createRadialGradient(32,32,1,32,32,32);i.addColorStop(0,o),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new fn(t);return s.needsUpdate=!0,s}function u1(){const e=a=>{const r=Gf(512,512);if(!r)return null;const l=r.getContext?.("2d");if(!l)return null;a(l,512);const c=new fn(r);return c.colorSpace=Xt,c.wrapS=Nn,c.wrapT=Nn,c},t=e((a,r)=>{a.fillStyle="#6c7075",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=32){for(let c=0;c<r;c+=64){const h=Math.floor((V(c,l,7)-.5)*18);a.fillStyle=`rgb(${102+h}, ${105+h}, ${110+h})`,a.fillRect(c+1,l+1,62,30)}a.fillStyle="#383b40",a.fillRect(0,l,r,2),a.fillStyle="#2d3034";for(let c=16;c<r;c+=32)a.fillRect(c,l+14,3,3)}for(let l=0;l<55;l++){const c=Math.floor(V(l,11,3)*r),h=Math.floor(V(l,19,5)*(r-96)),u=28+Math.floor(V(l,23,9)*84);a.fillStyle=l%3===0?"rgba(92, 52, 30, 0.28)":"rgba(34, 38, 42, 0.34)",a.fillRect(c,h,2+l%4,u)}for(let l=8;l<r;l+=32)for(let c=8;c<r;c+=20)V(c,l,31)>.22&&(a.fillStyle="#1b232d",a.fillRect(c,l,10,14),a.fillStyle="rgba(130, 165, 195, 0.14)",a.fillRect(c+1,l+1,8,5))}),n=e((a,r)=>{a.fillStyle="#8b5d47",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=32){for(let c=0;c<r;c+=32){const h=Math.floor((V(c,l,17)-.5)*26);a.fillStyle=`rgb(${144+h}, ${95+Math.floor(h*.7)}, ${74+Math.floor(h*.5)})`,a.fillRect(c+1,l+1,30,30),V(c,l,59)>.18&&(a.fillStyle="#181e26",a.fillRect(c+6,l+7,20,16),a.fillStyle="rgba(110, 140, 168, 0.15)",a.fillRect(c+7,l+8,18,6))}a.fillStyle="#40342f",a.fillRect(0,l,r,3)}}),i=e((a,r)=>{a.fillStyle="#484d54",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=8)a.fillStyle=l%16===0?"#5c636b":"#353a40",a.fillRect(l,0,4,r);for(let l=0;l<r;l+=64)a.fillStyle="#25282c",a.fillRect(0,l,r,3);for(let l=0;l<36;l++){const c=Math.floor(V(l,4,13)*(r-40)),h=Math.floor(V(l,8,21)*(r-40));a.fillStyle=l%2===0?"rgba(122, 62, 32, 0.35)":"#23282e",a.fillRect(c,h,28,18)}}),s=e((a,r)=>{const l=a.createLinearGradient(0,0,r,r);l.addColorStop(0,"#101d2b"),l.addColorStop(.5,"#193146"),l.addColorStop(1,"#0e1924"),a.fillStyle=l,a.fillRect(0,0,r,r);for(let c=0;c<r;c+=16)a.fillStyle=c%48===0?"#4e6378":"#213142",a.fillRect(c,0,c%48===0?3:1,r);for(let c=0;c<r;c+=24)a.fillStyle="#091119",a.fillRect(0,c,r,2)});return{texBrutalistConcrete:t,texTerracottaPanels:n,texCorrugatedMetal:i,texCorporateGlass:s}}function li(o,e=null){const t=new nt,n=new ui,i=new ut,s=new b,a=new b,r=[];for(const c of o){const h=c.geo,u=h.index?h.toNonIndexed():h.clone();u.attributes.uv1&&u.deleteAttribute("uv1"),u.attributes.color&&u.deleteAttribute("color"),s.set(c.pos?.[0]||0,c.pos?.[1]||0,c.pos?.[2]||0),n.set(c.rot?.[0]||0,c.rot?.[1]||0,c.rot?.[2]||0),i.setFromEuler(n),a.set(c.scale?.[0]??1,c.scale?.[1]??1,c.scale?.[2]??1),t.compose(s,i,a),u.applyMatrix4(t),r.push(u)}const l=It(r,!1);for(const c of r)c.dispose();return e?l.boundingSphere=e:l.computeBoundingSphere(),l}function d1(o){const e=new cn(1,1,1),t=new Qt(.5,.56,1,8),n=new Qt(.36,.48,1,12),i=new Qt(.38,.65,1,10),s=new Qt(.5,.5,1,12),a=li([{geo:e,pos:[0,.11,0],scale:[1.04,.22,1.04]},{geo:e,pos:[-.26,.56,0],scale:[.36,.72,.86]},{geo:e,pos:[.26,.56,0],scale:[.36,.72,.86]},{geo:e,pos:[0,.52,0],scale:[.38,.64,.52]},{geo:e,pos:[-.48,.44,-.34],scale:[.1,.78,.14]},{geo:e,pos:[.48,.44,-.34],scale:[.1,.78,.14]},{geo:e,pos:[-.48,.44,.34],scale:[.1,.78,.14]},{geo:e,pos:[.48,.44,.34],scale:[.1,.78,.14]},{geo:e,pos:[0,.42,0],scale:[1.08,.04,.96]},{geo:e,pos:[0,.72,0],scale:[1.02,.04,.92]},{geo:e,pos:[0,.96,-.14],scale:[.46,.1,.42]},{geo:e,pos:[-.24,.94,.22],scale:[.2,.07,.22]}],o),r=li([{geo:e,pos:[0,.18,0],scale:[.78,.36,.78]},{geo:e,pos:[-.22,.46,.08],scale:[.72,.26,.58]},{geo:e,pos:[.22,.64,-.06],scale:[.68,.28,.6]},{geo:e,pos:[-.12,.84,.02],scale:[.58,.22,.54]},{geo:e,pos:[.14,.98,.12],scale:[.18,.08,.18]},{geo:s,pos:[-.22,1.09,-.1],scale:[.03,.28,.03]},{geo:s,pos:[.06,1.07,-.18],scale:[.025,.22,.025]}],o),l=li([{geo:e,pos:[-.28,.24,0],scale:[.46,.48,.68]},{geo:e,pos:[.28,.19,.06],scale:[.44,.38,.62]},{geo:e,pos:[-.28,.5,0],rot:[0,0,.24],scale:[.52,.06,.74]},{geo:e,pos:[.28,.4,.06],rot:[.18,0,-.2],scale:[.5,.05,.68]},{geo:e,pos:[.08,.58,0],scale:[1.18,.07,.22]},{geo:s,pos:[-.15,.34,.42],rot:[0,0,Math.PI*.5],scale:[.06,.96,.06]}],o),c=li([{geo:e,pos:[-.14,.2,0],scale:[.74,.4,1.12]},{geo:e,pos:[-.14,.43,-.22],rot:[.25,0,0],scale:[.7,.08,.36]},{geo:e,pos:[-.14,.43,.22],rot:[.25,0,0],scale:[.7,.08,.36]},{geo:s,pos:[.38,.26,-.32],scale:[.34,.52,.34]},{geo:e,pos:[.34,.44,.3],scale:[.1,.88,.1]},{geo:e,pos:[.34,.9,.02],rot:[-.36,0,0],scale:[.09,.08,.96]}],o),h=li([{geo:t,pos:[0,.29,0],rot:[0,Math.PI/8,0],scale:[.92,.58,.92]},{geo:t,pos:[0,.69,0],rot:[0,Math.PI/8,0],scale:[.72,.26,.72]},{geo:e,pos:[-.42,.38,0],scale:[.16,.76,.34]},{geo:e,pos:[.42,.38,0],scale:[.16,.76,.34]},{geo:s,pos:[0,.86,0],scale:[.58,.06,.58]},{geo:s,pos:[0,.95,0],scale:[.14,.14,.14]}],o),u=li([{geo:n,pos:[0,.44,0],scale:[.82,.88,.66]},{geo:n,pos:[0,.56,0],scale:[.96,.08,.8]},{geo:e,pos:[-.14,.96,0],scale:[.1,.24,.24]},{geo:s,pos:[.12,1.02,0],scale:[.06,.34,.06]}],o),d=li([{geo:e,pos:[0,.16,0],scale:[.96,.32,.92]},{geo:e,pos:[-.08,.45,-.05],scale:[.76,.28,.74]},{geo:e,pos:[-.14,.7,-.1],scale:[.56,.24,.56]},{geo:e,pos:[.18,.34,.24],scale:[.34,.05,.28]},{geo:e,pos:[-.14,.86,-.1],scale:[.46,.06,.46]}],o),f=li([{geo:e,pos:[0,.12,0],scale:[1.38,.24,.88]},{geo:e,pos:[-.22,.42,-.1],scale:[.94,.36,.52]},{geo:e,pos:[.28,.36,.18],scale:[.58,.24,.46]},{geo:s,pos:[.48,.26,-.26],scale:[.46,.06,.46]}],o),g=li([{geo:e,pos:[-.16,.18,0],scale:[.92,.36,.72]},{geo:i,pos:[.36,.34,-.24],scale:[.48,.68,.48]},{geo:s,pos:[.36,.48,.24],scale:[.14,.96,.14]},{geo:s,pos:[.08,.45,.32],scale:[.12,.9,.12]},{geo:s,pos:[.12,.38,0],rot:[0,0,Math.PI*.5],scale:[.07,.64,.07]}],o),v=li([{geo:e,pos:[-.08,.3,0],scale:[.84,.6,.72]},{geo:e,pos:[.36,.24,.14],scale:[.38,.48,.48]},{geo:e,pos:[-.08,.64,.18],rot:[.12,0,0],scale:[.92,.08,.94]},{geo:e,pos:[-.24,.74,-.14],scale:[.22,.12,.22]}],o),m=li([{geo:e,pos:[-.42,.5,-.38],scale:[.11,1,.11]},{geo:e,pos:[.42,.5,-.38],scale:[.11,1,.11]},{geo:e,pos:[-.42,.5,.38],scale:[.11,1,.11]},{geo:e,pos:[.42,.5,.38],scale:[.11,1,.11]},{geo:e,pos:[0,.18,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.4,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.62,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.84,0],scale:[.86,.06,.78]},{geo:e,pos:[.12,.96,0],scale:[.32,.18,.28]}],o),p=li([{geo:e,pos:[0,.5,0],scale:[1,.14,1]},{geo:e,pos:[-.42,0,0],scale:[.14,1.4,.14]},{geo:e,pos:[.42,0,0],scale:[.14,1.4,.14]}],o),_=li([{geo:e,pos:[0,.22,.51],scale:[.16,.04,.02]},{geo:e,pos:[.18,.48,-.51],scale:[.14,.035,.02]},{geo:e,pos:[-.51,.66,.12],scale:[.02,.035,.14]}],o),y=li([{geo:n,pos:[0,0,0],rot:[Math.PI*.5,0,0],scale:[.42,1.65,.34]},{geo:e,pos:[0,-.22,0],scale:[.16,.14,.76]},{geo:e,pos:[0,.16,-.68],scale:[.04,.3,.28]},{geo:e,pos:[0,0,-.68],scale:[.48,.04,.26]}],o);return e.dispose(),t.dispose(),n.dispose(),i.dispose(),s.dispose(),{geoH10Megablock:a,geoStackedContainers:r,geoShantySkybridge:l,geoPortCraneDepot:c,geoCorpoNeoMilTower:h,geoCorpoNeoKitschTower:u,geoCharterTerraceTower:d,geoNorthOakMansion:f,geoArroyoFactory:g,geoRanchoHouse:v,geoPacificaSkeleton:m,geoBayBridge:p,geoMicroWindow:_,geoBlimpHull:y}}function f1(o,e=0){let t=-.24;return o>.26?t=-.34-Hi(.28,.72,o)*.24:o>-.2?t=-.235+Math.exp(-Math.pow(o/.14,2))*.085:t=-.23-Hi(-.26,-.58,o)*.26,t+e*.035}function Ro(o,e,t){const n=c1(o,e,t),i=n.ax/Ke,s=n.ay/Ke,a=n.theta/Ke,r=1/Ke,l=Zn(o*5.2*r+2.1,e*5.2*r,t*5.2*r,3)*.045,c=Zn(o*5.2*r-3.7,e*5.2*r+1.4,t*5.2*r,3)*.045,h=i+l*.45,u=s+c*.45,d=Math.hypot(h,u),f=Kt(o*14*r+1.2,e*14*r,t*14*r),g=f1(s,f),v=i-g,m=i<.04?Math.exp(-Math.pow((s-.195)/.022,2))*Hi(.05,-.14,i):0,p=i<.05?Math.exp(-Math.pow((s+.195)/.022,2))*Hi(.06,-.14,i):0,_=Math.max(m,p)>.48,y=v<0||_,x=Math.min(v,_?-.02:1),T=Hi(-.025,.025,x),w=Math.hypot(h*.92,u*.95),E=.565+f*.032;let A="city_center",M="corpo_plaza";y?(A=s<-.35&&i>-.58?"pacifica":i>-.3&&s>.18?"watson":"city_center",M="ocean_bay"):w>=E||a>=.62?(A="badlands",s>.34?M="oilfields":s>-.32&&i>.25?M="eastern_plains":M="southern_desert"):d<.215&&i>=g?(A="city_center",M=d<.11?"corpo_plaza":"downtown"):s>=.19&&i<.22+(s-.19)*.22?(A="watson",s>.39||i<g+.11?M="northside_port":i>.03?M="kabuki":M="little_china"):i>=.16&&s>-.23?(A="westbrook",i<.34&&s>-.06&&s<.26?M="japantown":s<=.06?M="charter_hill":M="north_oak"):s<=-.37&&i<.12?(A="pacifica",M=i>-.06&&s>-.51?"dogtown":"coastview"):s<=-.19&&i<.22?(A="heywood",M=i<-.02?"wellsprings":s>-.33?"the_glen":"vista_del_rey"):(A="santo_domingo",M=s>-.36?"arroyo":"rancho_coronado");let S=0;if(y)S=(-.0022-.0045*Hi(0,-.12,x))*.25;else{const N=Math.hypot((i-.42)/.17,(s-.28)/.16),P=Math.max(0,1-N*N),k=Hi(0,.85,P),z=Hi(.55,.65,a),F=1-Hi(.99,1.08,a),U=z*F,L=1-Math.abs(Kt(o*14*r+3.1,e*14*r,t*14*r-2.7)),W=Zn(o*7.5*r-4.2,e*7.5*r+1.1,t*7.5*r+5.8,4),j=(-.0014+.014*(Math.max(0,W+.15)*(.45+.85*Math.pow(L,2.2))))*U;S=(k*.0155+j)*.34}const C={};let R=0;for(const N of No){const P=N.mapAx??N.ax/Ke,k=N.mapAy??N.ay/Ke,z=(i-P)*(i-P)+(s-k)*(s-k),F=N.id==="badlands"?.18:.055;let U=Math.exp(-z/F);N.id===A&&(U+=1.45),N.id==="badlands"&&a>.6&&!y&&(U+=1.65),C[N.id]=U,R+=U}for(const N of No)C[N.id]/=Math.max(1e-5,R);return{ax:n.ax,ay:n.ay,theta:n.theta,mapAx:i,mapAy:s,mapTheta:a,isOcean:y,isBayChannel:_,coastBlend:T,coastSignedDist:x,district:A,subzone:M,elevationRatio:S,weights:C}}function p1(o,e,t,n,i,s,a){o.position.copy(e).multiplyScalar(t),o.quaternion.setFromUnitVectors(pa,e),n!==0&&o.rotateY(n),o.scale.set(i,s,a),o.updateMatrix()}function m1(o){const e=o.localRadius,t=1.42,n=new Ut;n.name="NightCity_7Districts_Arch_Group";const i=new Wt,s=new b,a=new ne,r=new ai(new b(0,0,0),e*1.28),{texBrutalistConcrete:l,texTerracottaPanels:c,texCorrugatedMetal:h,texCorporateGlass:u}=u1(),d=d1(r),f=58,g=112,v=(f+1)*(g+1),m=new Float32Array(v*3),p=new Float32Array(v*3),_=[];for(let K=0;K<=f;K++){const le=K/f*(1.08*Ke),Z=Math.sin(le),ye=Math.cos(le);for(let ce=0;ce<=g;ce++){const re=ce/g*Math.PI*2,Q=Z*Math.cos(re),Pe=ye,et=Z*Math.sin(re),lt=Ro(Q,Pe,et),Yt=Hi(1.04,1.08,lt.mapTheta)*-4e-4,rn=lt.isOcean?14e-5:24e-5+Math.max(-1e-4,lt.elevationRatio),Ft=e*(1+rn+Yt),En=K*(g+1)+ce;m[En*3]=Q*Ft,m[En*3+1]=Pe*Ft,m[En*3+2]=et*Ft;const Rt=Kt(Q*24+2,Pe*24,et*24)*.5+.5;let In=.055,Jn=.062,ri=.075;if(lt.isOcean)In=.014,Jn=.036+Rt*.015,ri=.064+Rt*.024;else if(lt.district==="badlands")if(lt.subzone==="oilfields")In=.07+Rt*.04,Jn=.065+Rt*.03,ri=.06+Rt*.025;else{const Is=bs(lt.elevationRatio/.004,0,1);In=.24+Rt*.13+Is*.1,Jn=.12+Rt*.055+Is*.04,ri=.075+Rt*.03}else lt.district==="westbrook"&&lt.subzone==="north_oak"?(In=.095+Rt*.045,Jn=.155+Rt*.075,ri=.085+Rt*.035):lt.district==="pacifica"?(In=.062+Rt*.032,Jn=.062+Rt*.032,ri=.068+Rt*.032):lt.district==="santo_domingo"?(In=.095+Rt*.04,Jn=.075+Rt*.035,ri=.062+Rt*.025):lt.district==="heywood"?(In=.082+Rt*.03,Jn=.076+Rt*.025,ri=.065+Rt*.02):(In=.044+Rt*.022,Jn=.05+Rt*.024,ri=.064+Rt*.028);p[En*3]=In,p[En*3+1]=Jn,p[En*3+2]=ri}}for(let K=0;K<f;K++)for(let le=0;le<g;le++){const Z=K*(g+1)+le,ye=Z+(g+1);_.push(Z,ye,Z+1,Z+1,ye,ye+1)}const y=new At;y.setAttribute("position",new xt(m,3)),y.setAttribute("color",new xt(p,3));const x=new Float32Array(v*2);for(let K=0;K<=f;K++)for(let le=0;le<=g;le++){const Z=K*(g+1)+le;x[Z*2]=le/g*6,x[Z*2+1]=K/f*4}y.setAttribute("uv",new xt(x,2)),y.setIndex(_),y.computeVertexNormals(),y.boundingSphere=r;const T=al(),w=s1(),E=zf(),A=Ko(),M=new ze({vertexColors:!0,roughnessMap:T.roughnessMap,bumpMap:T.bumpMap,bumpScale:.045,roughness:.92,metalness:.05}),S=Ch(M,{mode:"badlands",worldRadius:e*157.5,peakStart:3,peakEnd:8.5,shoreBand:.55}),C=new Ve(y,M);C.name="NC_7Districts_Coastal_Terrain",C.userData.splatUniforms=S,C.frustumCulled=!1,C.castShadow=!1,C.receiveShadow=!1,n.add(C);const R=(K,le=.88,Z=.14,ye=E)=>{const ce=new ze({color:16777215,map:K,roughnessMap:ye?.roughnessMap||null,bumpMap:ye?.bumpMap||null,bumpScale:.032,emissive:new ne(0),emissiveMap:null,emissiveIntensity:0,roughness:le,metalness:Z});return ce.userData.outsideCityCenterMatte=!0,ce},N=R(c,.88,.12),P=R(l,.9,.14),k=R(h,.84,.28),z=R(h,.85,.32),F=R(l,.86,.12),U=R(l,.82,.15),L=R(h,.9,.24),W=R(c,.92,.06),te=R(l,.94,.08),j=R(null,.82,.35),be=R(null,.94,.04,A),Y=new ze({color:16777215,map:l,roughnessMap:E.roughnessMap,bumpMap:E.bumpMap,bumpScale:.028,emissive:new ne(0),emissiveIntensity:0,roughness:.62,metalness:.45}),fe=new ze({color:16777215,map:u,roughnessMap:w.roughnessMap,bumpMap:E.bumpMap,bumpScale:.015,emissive:new ne(4883112),emissiveIntensity:.18,roughness:.24,metalness:.82}),pe=new ze({color:13623518,emissive:new ne(8959146),emissiveIntensity:.18,roughness:.42,metalness:.08}),he=new ze({color:16777215,emissive:new ne(16769202),emissiveIntensity:.3,roughness:.9});he.userData.animatedEmissive=!0,he.userData.nightTier="microwindow";const J=[],de=(K,le,Z={})=>{const ye=new ze({color:new ne(K),emissive:new ne(K),emissiveIntensity:bs(le,1.3,1.9),roughness:.25,metalness:.1,...Z});return ye.userData.baseEmissive=bs(le,1.3,1.9),ye.userData.nightTier="hero",ye.userData.animatedEmissive=!0,J.push(ye),ye},ge=de("#ff223d",1.65),Ae=de("#00e5ff",1.58),ve=de("#ff2eb8",1.62),De=de("#30b8ff",1.55,{transparent:!0,opacity:.48,depthWrite:!1}),B=de("#ff7a1f",1.78),ot=de("#ff3b6c",1.52),G={h10:[],stacked:[],shanty:[],port:[],corpoMil:[],corpoKitsch:[],terrace:[],northOak:[],arroyo:[],rancho:[],pacifica:[],bridges:[],rocks:[],pumpBases:[],greenhouses:[],turbMasts:[],nomads:[],microWin:[],watsonNeonRed:[],watsonNeonCyan:[],japantownNeon:[],corpoBeams:[],arroyoFlares:[]},We=[],Ie=[],at=[],je=[],O=[],D=[],se=[],xe=[],oe=(K,le,Z,ye,ce,re,Q,Pe)=>{p1(i,le,Z,ye,ce,re,Q),K.push({matrix:i.matrix.clone(),color:Pe.clone()})};let ue=1;const Re=(K,le,Z=1)=>{const ye=[];for(let ce=0;ce<le*6&&ye.length<le;ce++){ue++;const re=(V(ue,3,17)*2-1)*.72*Ke*Z,Q=(V(ue,7,31)*2-1)*.72*Ke*Z,Pe=ni(re,Q),et=Ro(Pe.x,Pe.y,Pe.z);K(et)&&ye.push({dir:Pe,s:et,i:ye.length})}return ye},we=(K,le,Z=.08)=>{a.setHex(K[le%K.length]);const ye=(V(le,19,37)-.5)*Z;return a.offsetHSL(ye*.15,ye*.25,ye),a},Ne=Re(K=>!K.isOcean&&K.district==="city_center"&&Math.hypot(K.mapAx,K.mapAy)>.078,130,.34);for(const{dir:K,i:le}of Ne){const Z=t*(.072+.056*Math.pow(V(le,13,29),1.15)),ye=t*(.009+.009*V(le,5,19));le%2===0?oe(G.corpoMil,K,e*1.00015,V(le,2,5)*Math.PI*.5,ye*1.1,Z,ye*1.1,we([3554631,4541524,2764856],le)):oe(G.corpoKitsch,K,e*1.00015,V(le,4,7)*Math.PI,ye*.95,Z*1.06,ye*.95,we([5930654,9270866,3892096],le)),le%7===0&&G.corpoBeams.length<18&&oe(G.corpoBeams,K,e*1.0002+Z*.45,0,t*.0018,Z*.65,t*.0018,a.setHex(le%14===0?16762460:3328255))}const dt=Re(K=>!K.isOcean&&K.district==="watson"&&(K.subzone==="little_china"||K.subzone==="kabuki"),410,.85);for(const{dir:K,s:le,i:Z}of dt){const ye=V(Z,1,7)*Math.PI;if(Z%5===0){const ce=t*(.011+.006*V(Z,3,13)),re=t*(.042+.026*V(Z,9,3));oe(G.h10,K,e*1.00015,ye,ce,re,ce,we([9198406,7040885,10058834,7561816],Z)),Z%65===0&&oe(G.microWin,K,e*1.00015,ye,ce,re,ce,we([16765844,11064560],Z,.02))}else if(Z%3===1||le.subzone==="little_china"){const ce=t*(.008+.005*V(Z,5,19)),re=t*(.028+.024*V(Z,7,11));oe(G.stacked,K,e*1.00015,ye,ce,re,ce,we([8027522,9726548,6450032,8747106],Z)),Z%45===1&&oe(G.microWin,K,e*1.00015,ye,ce,re,ce,we([16763522,9880808],Z,.02))}else{const ce=t*(.007+.005*V(Z,4,9)),re=t*(.005+.0065*V(Z,12,17));oe(G.shanty,K,e*1.00015,ye,ce,re,ce,we([7235939,6055019,8019018],Z))}if(Z%19===0&&G.watsonNeonRed.length+G.watsonNeonCyan.length<21){const ce=K.clone().add(new b(.001,0,-7e-4)).normalize(),re=Z%38===0?G.watsonNeonRed:G.watsonNeonCyan;oe(re,ce,e*1.0002+t*.005,ye,t*.0011,t*(.009+.005*V(Z,2,11)),t*.0026,a.setHex(16777215))}}const Ee=Re(K=>!K.isOcean&&K.district==="watson"&&K.subzone==="northside_port",145,.92);for(const{dir:K,i:le}of Ee){const Z=t*(.014+.014*V(le,4,21)),ye=t*(.012+.014*V(le,8,13));oe(G.port,K,e*1.00015,V(le,6,9)*Math.PI*.5,Z,ye,Z,we([5922920,7229250,4541266],le))}const Ue=Re(K=>!K.isOcean&&K.district==="westbrook"&&K.subzone==="japantown",185,.72);for(const{dir:K,s:le,i:Z}of Ue){const ye=e*(1.00015+le.elevationRatio),ce=t*(.008+.006*V(Z,5,31)),re=t*(.022+.028*Math.pow(V(Z,12,7),1.2)),Q=V(Z,3,21)*Math.PI;oe(G.stacked,K,ye,Q,ce,re,ce,we([6711928,8217970,5396582],Z)),Z%7===0&&G.japantownNeon.length<28&&oe(G.japantownNeon,K,ye+re*.25,Q,t*.0014,re*.42,t*.0034,a.setHex(16777215))}const Je=Re(K=>!K.isOcean&&K.district==="westbrook"&&K.subzone==="charter_hill",155,.85);for(const{dir:K,s:le,i:Z}of Je){const ye=e*(1.00015+le.elevationRatio),ce=t*(.01+.007*V(Z,2,11)),re=t*(.018+.022*V(Z,13,5));oe(G.terrace,K,ye,V(Z,4,2)*Math.PI*.5,ce,re,ce,we([13817564,12502476,14672614],Z,.04))}const ct=Re(K=>!K.isOcean&&K.district==="westbrook"&&K.subzone==="north_oak",48,.95);for(const{dir:K,s:le,i:Z}of ct){const ye=e*(1.00015+le.elevationRatio),ce=t*(.012+.005*V(Z,3,9)),re=t*(.005+.003*V(Z,7,13));oe(G.northOak,K,ye,V(Z,8,17)*Math.PI,ce,re,ce,we([15130838,13946823,15591647],Z,.03));const Q=ye+re*1.15;D.push(K.x*Q,K.y*Q,K.z*Q)}const He=Re(K=>!K.isOcean&&K.district==="heywood",265,.85);for(const{dir:K,s:le,i:Z}of He){const ye=V(Z,4,33)*Math.PI*.5;if(le.subzone==="vista_del_rey"){const ce=t*(.008+.005*V(Z,3,27)),re=t*(.0055+.0065*V(Z,11,7));oe(G.shanty,K,e*1.00015,ye,ce,re,ce,we([9401436,8217938,10256998],Z))}else{const ce=t*(.009+.006*V(Z,8,19)),re=t*(.018+.022*Math.pow(V(Z,14,9),1.2));Z%3===0?oe(G.h10,K,e*1.00015,ye,ce,re,ce,we([10255196,8549992,10717544],Z)):oe(G.terrace,K,e*1.00015,ye,ce,re,ce,we([12100748,10392196,12890262],Z)),Z%16===0&&oe(G.microWin,K,e*1.00015,ye,ce,re,ce,we([16763776,16769200],Z,.02))}if(Z%6===0){const ce=e*1.0002+t*.0026;at.push(K.x*ce,K.y*ce,K.z*ce)}}const mt=Re(K=>!K.isOcean&&K.district==="santo_domingo"&&K.subzone==="arroyo",130,.95);for(const{dir:K,i:le}of mt){const Z=t*(.015+.012*V(le,2,11)),ye=t*(.016+.018*V(le,7,19));if(oe(G.arroyo,K,e*1.00015,V(le,4,15)*Math.PI*.5,Z,ye,Z,we([6708824,5396060,7562069],le)),le%7===0&&G.arroyoFlares.length<18){const ce=e*1.0002+ye*.96;oe(G.arroyoFlares,K,ce,0,t*.003,t*.0048,t*.003,a.setHex(16777215)),je.push(K.x*ce,K.y*ce,K.z*ce)}if(le%6===0&&se.length<36){const ce=e*1.0003+ye*1.12;se.push({dir:K.clone(),alt:ce,phase:le*.5}),xe.push(K.x*ce,K.y*ce,K.z*ce)}}for(let K=0;K<20;K++)for(let le=0;le<20;le++){const Z=(.25+K*.017)*Ke,ye=(-.34-le*.017)*Ke,ce=ni(Z,ye),re=Ro(ce.x,ce.y,ce.z);if(!re.isOcean&&re.district==="santo_domingo"&&re.subzone==="rancho_coronado"){const Q=t*.0068,Pe=t*(.0042+.0018*V(K,le,4));if(oe(G.rancho,ce,e*1.0002,.08,Q,Pe,Q,we([9205862,8219741,10060910],K*20+le)),(K*20+le)%34===0&&oe(G.microWin,ce,e*1.0002,.08,Q,Pe,Q,a.setHex(16760434)),(K+le)%5===0){const et=e*1.0002+t*.0026;at.push(ce.x*et,ce.y*et,ce.z*et)}}}const ht=Re(K=>!K.isOcean&&K.district==="pacifica",165,.95);for(const{dir:K,s:le,i:Z}of ht){const ye=t*(.011+.008*V(Z,2,19)),ce=le.subzone==="dogtown"?t*(.01+.014*V(Z,9,13)):t*(.016+.022*Math.pow(V(Z,6,29),1.3));if(oe(G.pacifica,K,e*1.00015,V(Z,1,8)*.5,ye,ce,ye,we([5001044,6051922,3882562],Z)),Z%14===0&&O.length<30){const re=e*1.0002+t*.0014;O.push(K.x*re,K.y*re,K.z*re)}}const ft=ni(-.33*Ke,-.48*Ke),q=new Ve(new il(t*.019,t*.0014,6,20),te);q.name="NC_Pacifica_Abandoned_FerrisWheel",q.position.copy(ft).multiplyScalar(e+t*.021),q.quaternion.setFromUnitVectors(pa,ft),q.rotateY(.4),q.castShadow=!1,q.receiveShadow=!1,n.add(q);const Ce=[{a:[-.08*Ke,.14*Ke],b:[-.2*Ke,.25*Ke]},{a:[-.14*Ke,.01*Ke],b:[-.42*Ke,-.02*Ke]},{a:[-.09*Ke,-.15*Ke],b:[-.21*Ke,-.34*Ke]}];for(const K of Ce){const Z=ni(K.a[0],K.a[1]),ye=ni(K.b[0],K.b[1]),ce=Math.atan2(ye.x-Z.x,ye.z-Z.z);for(let re=0;re<=12;re++){const Q=re/12,Pe=Z.clone().lerp(ye,Q).normalize(),et=t*.008+Math.sin(Q*Math.PI)*t*.005;oe(G.bridges,Pe,e-t*.002+et,ce,t*.007,t*.014,t*.022,a.setHex(4870232))}}const me=Re(K=>!K.isOcean&&K.district==="badlands"&&K.mapTheta<1.05,420,1.48);for(const{dir:K,s:le,i:Z}of me){const ye=e*1.0002+le.elevationRatio*e;if(le.subzone==="oilfields")if(Z%7===0&&Ie.length<32)oe(G.pumpBases,K,ye-t*5e-4,0,t*.004,t*.0085,t*.004,a.setHex(3817028)),Ie.push({pos:K.clone().multiplyScalar(ye+t*.008),quat:new ut().setFromUnitVectors(pa,K),scale:new b(t*.0022,t*.0022,t*.015),phase:Z*.65});else{const ce=t*(.007+.014*V(Z,3,5));oe(G.rocks,K,ye,V(Z,2,9)*3.1,ce,ce*.6,ce,we([3880242,5063484],Z))}else if(le.subzone==="eastern_plains")if(Z%10===0&&We.length<34){const ce=t*(.024+.01*V(Z,5,11));oe(G.turbMasts,K,ye-t*5e-4,0,t*.0022,ce,t*.0022,a.setHex(12765390));const re=new ut().setFromUnitVectors(pa,K),Q=new ut().setFromAxisAngle(pa,V(Z,12,5)*Math.PI*2);We.push({hubPos:K.clone().multiplyScalar(ye+ce),orientQuat:re.multiply(Q),bladeLen:ce*.56,omega:1+V(Z,8,19)*.85,phase:V(Z,15,2)*Math.PI*2})}else if(Z%8===0&&G.greenhouses.length<44)oe(G.greenhouses,K,ye-t*4e-4,.3,t*.011,t*.0035,t*.032,a.setHex(14215910));else{const ce=t*(.009+.018*Math.pow(V(Z,7,13),1.5));oe(G.rocks,K,ye,V(Z,5,17)*3.1,ce,ce*.7,ce*.85,we([7027496,8210482],Z))}else if(Z%16===0&&G.nomads.length<36){oe(G.nomads,K,ye,V(Z,4,21)*Math.PI,t*.007,t*.0038,t*.0085,a.setHex(7235164));const ce=ye+t*.0025;O.push(K.x*ce,K.y*ce,K.z*ce)}else{const ce=t*(.008+.018*Math.pow(V(Z,3,29),1.6));oe(G.rocks,K,ye,V(Z,7,19)*3.1,ce,ce*.65,ce*.8,we([7552553,6042145],Z))}}const Me=new cn(1,1,1);Me.translate(0,.5,0),Me.boundingSphere=r;const ke=new Qt(.45,.55,1,8);ke.translate(0,.5,0),ke.boundingSphere=r;const Fe=new Ps(1,0);Fe.boundingSphere=r;const Ze=(K,le,Z,ye)=>{if(!K.length)return null;const ce=new St(le,Z,K.length);ce.name=ye,ce.frustumCulled=!1,ce.castShadow=!1,ce.receiveShadow=!1;for(let re=0;re<K.length;re++)ce.setMatrixAt(re,K[re].matrix),ce.setColorAt(re,K[re].color);return ce.instanceMatrix.needsUpdate=!0,ce.instanceColor&&(ce.instanceColor.needsUpdate=!0),n.add(ce),ce};Ze(G.h10,d.geoH10Megablock,N,"NC_Arch1_H10_Megablocks"),Ze(G.stacked,d.geoStackedContainers,P,"NC_Arch2_Stacked_Containers"),Ze(G.shanty,d.geoShantySkybridge,k,"NC_Arch3_Slum_SheetRoofs"),Ze(G.port,d.geoPortCraneDepot,z,"NC_Arch4_Northside_PortDepots"),Ze(G.corpoMil,d.geoCorpoNeoMilTower,Y,"NC_Arch5_CityCenter_NeoMil"),Ze(G.corpoKitsch,d.geoCorpoNeoKitschTower,fe,"NC_Arch6_CityCenter_NeoKitsch"),Ze(G.terrace,d.geoCharterTerraceTower,F,"NC_Arch7_Charter_Heywood_Terraces"),Ze(G.northOak,d.geoNorthOakMansion,U,"NC_Arch8_NorthOak_Mansions"),Ze(G.arroyo,d.geoArroyoFactory,L,"NC_Arch9_Arroyo_Factories"),Ze(G.rancho,d.geoRanchoHouse,W,"NC_Arch10_Rancho_Houses"),Ze(G.pacifica,d.geoPacificaSkeleton,te,"NC_Arch11_Pacifica_Skeletons"),Ze(G.bridges,d.geoBayBridge,P,"NC_Bay_Connecting_Bridges"),Ze(G.rocks,Fe,be,"NC_Badlands_Rocks"),Ze(G.pumpBases,ke,k,"NC_Badlands_Oil_Pump_Bases"),Ze(G.turbMasts,ke,j,"NC_Badlands_WindTurbine_Masts"),Ze(G.greenhouses,Me,pe,"NC_Badlands_Biotechnica_Greenhouses"),Ze(G.nomads,Me,W,"NC_Badlands_Nomad_Outposts"),Ze(G.microWin,d.geoMicroWindow,he,"NC_Isolated_MicroWindows"),Ze(G.watsonNeonRed,Me,ge,"NC_Watson_VerticalNeon_Red"),Ze(G.watsonNeonCyan,Me,Ae,"NC_Watson_VerticalNeon_Cyan"),Ze(G.japantownNeon,Me,ve,"NC_Westbrook_Japantown_Neon"),Ze(G.corpoBeams,ke,De,"NC_CityCenter_LightBeams"),Ze(G.arroyoFlares,ke,B,"NC_SantoDomingo_Refinery_Flares");const kt=new cn(.11,1,.03);kt.translate(0,.5,0),kt.boundingSphere=r;const Ht=We.length?new St(kt,j,We.length*3):null;Ht&&(Ht.name="NC_Badlands_WindTurbine_Blades",Ht.frustumCulled=!1,Ht.castShadow=!1,Ht.receiveShadow=!1,n.add(Ht));const gt=Ie.length?new St(Me,L,Ie.length):null;gt&&(gt.name="NC_Badlands_Oil_Pumpjacks",gt.frustumCulled=!1,gt.castShadow=!1,gt.receiveShadow=!1,n.add(gt));const hn=new cn(.46,.16,.85);hn.boundingSphere=r;const an=new St(d.geoBlimpHull,k,3);an.name="AV_Blimp_Hulls",an.frustumCulled=!1,an.castShadow=!1,an.receiveShadow=!1;const Mn=new St(hn,ot,3);Mn.name="AV_Blimp_Screens",Mn.frustumCulled=!1,Mn.castShadow=!1,Mn.receiveShadow=!1,n.add(an,Mn);const qn=[{ax0:-.1*Ke,ay0:.21*Ke,rx:.14*Ke,ry:.06*Ke,alt:e+t*.068,omega:.085,phase:0,scale:t*.022},{ax0:.06*Ke,ay0:.18*Ke,rx:.12*Ke,ry:.07*Ke,alt:e+t*.08,omega:-.072,phase:2.1,scale:t*.025},{ax0:-.03*Ke,ay0:.25*Ke,rx:.16*Ke,ry:.05*Ke,alt:e+t*.062,omega:.064,phase:4.2,scale:t*.02}],An=[{start:[.58*Ke,-.15*Ke],end:[.92*Ke,-.45*Ke]},{start:[.35*Ke,-.6*Ke],end:[.55*Ke,-.96*Ke]}],tt=28,Et=t*.004,un=[],On=new b,gn=new b,kn=new b;for(let K=0;K<An.length;K++){const le=An[K],Z=new Float32Array((tt+1)*2*3),ye=new Float32Array((tt+1)*2*2),ce=[];for(let Q=0;Q<=tt;Q++){const Pe=Q/tt,et=H.lerp(le.start[0],le.end[0],Pe)+Math.sin(Pe*3.2+K)*.025*Ke,lt=H.lerp(le.start[1],le.end[1],Pe);s.copy(ni(et,lt));const Yt=Ro(s.x,s.y,s.z),rn=e*1.0002+Yt.elevationRatio*e+t*8e-4;kn.copy(s).multiplyScalar(rn),On.set(.3,0,-1).cross(s).normalize(),gn.crossVectors(s,On).normalize();const Ft=Q*2;Z[Ft*3]=kn.x-gn.x*Et,Z[Ft*3+1]=kn.y-gn.y*Et,Z[Ft*3+2]=kn.z-gn.z*Et,Z[(Ft+1)*3]=kn.x+gn.x*Et,Z[(Ft+1)*3+1]=kn.y+gn.y*Et,Z[(Ft+1)*3+2]=kn.z+gn.z*Et,ye[Ft*2]=0,ye[Ft*2+1]=Pe*8,ye[(Ft+1)*2]=1,ye[(Ft+1)*2+1]=Pe*8,Q<tt&&ce.push(Ft,Ft+2,Ft+1,Ft+1,Ft+2,Ft+3)}const re=new At;re.setAttribute("position",new xt(Z,3)),re.setAttribute("uv",new xt(ye,2)),re.setIndex(ce),re.computeVertexNormals(),un.push({geo:re.toNonIndexed()}),re.dispose()}const sn=It(un.map(K=>K.geo),!1);un.forEach(K=>K.geo.dispose()),sn.boundingSphere=r;const Ct=new Ve(sn,new ze({color:16777215,map:w.map,roughnessMap:w.roughnessMap,bumpMap:w.bumpMap,bumpScale:.04,roughness:1,metalness:.08,side:wt}));Ct.name="NC_Badlands_Desert_Roads",Ct.frustumCulled=!1,Ct.castShadow=!1,Ct.receiveShadow=!1,n.add(Ct);const yn=ni(-.27*Ke,.01*Ke),vn=new Cs(e*.16*Ke,40),vt=new Ta(vn,{textureWidth:256,textureHeight:256,waterNormals:Ua(),sunDirection:new b(.4,.6,.5).normalize(),sunColor:9224959,waterColor:466222,distortionScale:.35,size:4.5,clipBias:.002,alpha:.92,fog:!0});vt.name="NC_CoronadoBay_Reflective_Water",vt.position.copy(yn).multiplyScalar(e*1.00025),vt.quaternion.setFromUnitVectors(new b(0,0,1),yn),vt.visible=!1,vt.castShadow=!1,vt.receiveShadow=!1,n.add(vt);const I=(K,le,Z,ye,ce,re)=>{if(!K.length)return null;const Q=new At;Q.setAttribute("position",new Nt(K,3)),Q.boundingSphere=r;const Pe=new Ci({map:h1("rgba(255,255,255,0.92)","rgba(255,210,160,0.32)"),color:le,size:Z,transparent:!0,opacity:ye,depthWrite:!1,blending:ce?Rn:Ys,sizeAttenuation:!0}),et=new Pi(Q,Pe);return et.name=re,et.frustumCulled=!1,n.add(et),{pts:et,mat:Pe,geo:Q}},ee=I(at.concat(D),16755272,1.3,.66,!0,"NC_Heywood_Rancho_Streetlamps"),ie=I(O.concat(je),16739364,2.1,.84,!0,"NC_Pacifica_Arroyo_FlaresAndFires"),ae=I(xe,2761760,14,.5,!1,"NC_Arroyo_Industrial_Smoke"),$=new ut,_e=new ut,Be=new b,$e=new nt,qe=new b,rt=new b,pt=new b,Le=new nt,X=Math.PI*2/3,Xe=new b(0,0,1),it=new b(1,0,0);return{group:n,terrainSplatUniforms:S,bayWater:vt,update(K,le=1){if(!n.parent||!n.parent.visible)return;if(vt.material?.uniforms?.time&&(vt.material.uniforms.time.value=K*.48),Ht){for(let re=0;re<We.length;re++){const Q=We[re],Pe=K*Q.omega+Q.phase;Be.set(Q.bladeLen*.25,Q.bladeLen,Q.bladeLen*.25);for(let et=0;et<3;et++)$.setFromAxisAngle(Xe,Pe+et*X),_e.copy(Q.orientQuat).multiply($),$e.compose(Q.hubPos,_e,Be),Ht.setMatrixAt(re*3+et,$e)}Ht.instanceMatrix.needsUpdate=!0}if(gt){for(let re=0;re<Ie.length;re++){const Q=Ie[re];$.setFromAxisAngle(it,Math.sin(K*1.15+Q.phase)*.28),_e.copy(Q.quat).multiply($),$e.compose(Q.pos,_e,Q.scale),gt.setMatrixAt(re,$e)}gt.instanceMatrix.needsUpdate=!0}for(let re=0;re<qn.length;re++){const Q=qn[re],Pe=K*Q.omega+Q.phase,et=Q.ax0+Math.cos(Pe)*Q.rx,lt=Q.ay0+Math.sin(Pe)*Q.ry,Yt=-Math.sin(Pe)*Q.rx*Q.omega,rn=Math.cos(Pe)*Q.ry*Q.omega;s.copy(ni(et,lt)),qe.copy(s).multiplyScalar(Q.alt+Math.sin(K*.8+re)*t*.002),rt.set(Yt,0,-rn),rt.addScaledVector(s,-s.dot(rt)),rt.lengthSq()<1e-8&&rt.set(1,0,0).addScaledVector(s,-s.x),rt.normalize(),pt.crossVectors(s,rt),pt.lengthSq()<1e-8&&pt.set(0,0,1),pt.normalize(),rt.crossVectors(pt,s).normalize(),Le.makeBasis(pt,s,rt),Le.setPosition(qe),Be.setScalar(Q.scale),Le.scale(Be),an.setMatrixAt(re,Le),Mn.setMatrixAt(re,Le)}if(an.instanceMatrix.needsUpdate=!0,Mn.instanceMatrix.needsUpdate=!0,ae&&se.length>0){const re=ae.geo.attributes.position;for(let Q=0;Q<se.length;Q++){const Pe=se[Q],et=1+.002*Math.sin(K*.7+Pe.phase);re.setXYZ(Q,Pe.dir.x*Pe.alt*et,Pe.dir.y*Pe.alt*et,Pe.dir.z*Pe.alt*et)}re.needsUpdate=!0}const Z=.94+.06*Math.sin(K*2.2),ye=bs(.88+(le-1)*.14,.85,1.08);for(let re=0;re<J.length;re++){const Q=J[re];Q.emissiveIntensity=bs(Q.userData.baseEmissive*ye*Z,1.3,1.9)}const ce=bs(.42+(le-.8)*.25,.35,.78);ee&&(ee.mat.opacity=ce),ie&&(ie.mat.opacity=.7+.18*Math.sin(K*8.2))}}}const th={uSunViewPos:{value:new b}};function V(o,e,t){let n=Math.imul(o|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Kt(o,e,t){const n=Math.floor(o),i=Math.floor(e),s=Math.floor(t),a=o-n,r=e-i,l=t-s,c=a*a*(3-2*a),h=r*r*(3-2*r),u=l*l*(3-2*l),d=V(n,i,s),f=V(n+1,i,s),g=V(n,i+1,s),v=V(n+1,i+1,s),m=V(n,i,s+1),p=V(n+1,i,s+1),_=V(n,i+1,s+1),y=V(n+1,i+1,s+1),x=d+(f-d)*c,T=g+(v-g)*c,w=m+(p-m)*c,E=_+(y-_)*c,A=x+(T-x)*h,M=w+(E-w)*h;return(A+(M-A)*u)*2-1}function Zn(o,e,t,n=4){let i=0,s=.5,a=1;for(let r=0;r<n;r++)i+=s*Kt(o*a+r*17.31,e*a-r*9.7,t*a+r*3.3),a*=2.03,s*=.5;return i}function Xr(o,e,t,n=4,i=2.12,s=.52){let a=0,r=1,l=.5,c=1,h=0;for(let u=0;u<n;u++){let d=1-Math.abs(Kt(o*r+u*19.7,e*r-u*11.3,t*r+u*7.1));d*=d*c,c=Math.min(1,Math.max(0,d*1.95)),a+=d*l,h+=l,r*=i,l*=s}return h>0?a/h:0}function $t(o,e,t){const n=Math.min(1,Math.max(0,(t-o)/(e-o)));return n*n*(3-2*n)}function js(o,e){const t=document.createElement("canvas");return t.width=o,t.height=e,t}function g1(o=[0,1,0]){return[o,[-o[0],-o[1],-o[2]],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(t=>{const n=new b(...t).normalize(),i=Math.abs(n.y)<.9?new b(0,1,0):new b(1,0,0),s=new b().crossVectors(n,i).normalize(),a=new b().crossVectors(n,s).normalize();return{h:n,e1:s,e2:a}})}const Tt=[{id:"hometree",name:"Gran Árbol Madre (Hometree)",shortName:"Árbol-Casa",theta:.045,phi:-.55,landBoostRad:.24,elevMode:"valley",viewAlt:.092,viewBack:.11},{id:"hallelujah",name:"Montañas Aleluya",shortName:"Aleluya",theta:.38,phi:1.15,landBoostRad:.22,elevMode:"bay",viewAlt:.135,viewBack:.145},{id:"rookery",name:"Nido de Ikran (Ikran Rookery)",shortName:"Nido Ikran",theta:1.06,phi:3.65,landBoostRad:.25,elevMode:"canyon",viewAlt:.105,viewBack:.125},{id:"souls",name:"Árbol de las Almas (Tree of Souls)",shortName:"Árbol Almas",theta:1.54,phi:5.15,landBoostRad:.26,elevMode:"crater",viewAlt:.078,viewBack:.105},{id:"mushrooms",name:"Bosque de Setas Gigantes y Géiseres",shortName:"Setas / Géiseres",theta:2.28,phi:2.1,landBoostRad:.25,elevMode:"basin",viewAlt:.082,viewBack:.11},{id:"ashland",name:"Tierra de Ceniza (Pueblo Ash)",shortName:"Ceniza / Volcanes",theta:1.88,phi:.72,landBoostRad:.34,elevMode:"ash",viewAlt:.115,viewBack:.145},{id:"metkayina",name:"Arrecife Metkayina (Aldea y Abismo)",shortName:"Metkayina",theta:1.18,phi:2.15,landBoostRad:.32,elevMode:"reef",viewAlt:.068,viewBack:.098}].map(o=>{const e=Math.sin(o.theta);return{...o,capDir:new b(e*Math.cos(o.phi),Math.cos(o.theta),e*Math.sin(o.phi)).normalize()}}),v1=[{v:Tt[0].capDir,bias:.25},{v:Tt[1].capDir,bias:.22},{v:Tt[2].capDir,bias:.24},{v:Tt[3].capDir,bias:.26},{v:Tt[4].capDir,bias:.29},{v:new b(.12,-.78,-.22).normalize(),bias:.23},{v:new b(-.05,-.94,.32).normalize(),bias:.24},{v:new b(.45,.62,-.64).normalize(),bias:.18}],x1=[{v:Tt[6].capDir,bias:.39},{v:new b(-.82,.05,.57).normalize(),bias:.39},{v:new b(-.08,.18,.98).normalize(),bias:.32},{v:new b(-.82,-.34,-.45).normalize(),bias:.38},{v:new b(-.55,-.4,.1).normalize(),bias:.31},{v:new b(-.38,-.68,-.62).normalize(),bias:.3}],_1=[{v:Tt[5].capDir,bias:.36},{v:new b(.93,-.15,.33).normalize(),bias:.3},{v:new b(.74,-.6,.28).normalize(),bias:.25},{v:new b(.55,-.18,.81).normalize(),bias:.28}];function rl(o=[0,1,0]){const e=new b(o[0],o[1],o[2]).normalize(),t=new ut().setFromUnitVectors(new b(0,1,0),e),n=Tt.map(i=>({...i,sphereDir:i.capDir.clone().applyQuaternion(t).normalize()}));return n.nationSites={forest:v1.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),water:x1.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),ash:_1.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),metkayinaDir:n[6].sphereDir,ashDir:n[5].sphereDir,soulsDir:n[3].sphereDir,mushDir:n[4].sphereDir},n}const M1=rl([0,1,0]);function Ph(o,e,t,n,i=5){const s=n?.nationSites?n:M1,{forest:a,water:r,ash:l}=s.nationSites;let c=-9;for(let F=0;F<a.length;F++){const U=a[F],L=o*U.v.x+e*U.v.y+t*U.v.z+U.bias;L>c&&(c=L)}let h=-9;for(let F=0;F<r.length;F++){const U=r[F],L=o*U.v.x+e*U.v.y+t*U.v.z+U.bias;L>h&&(h=L)}let u=-9;for(let F=0;F<l.length;F++){const U=l[F],L=o*U.v.x+e*U.v.y+t*U.v.z+U.bias;L>u&&(u=L)}const d=Zn(o*2.2+4.1,e*2.2-1.7,t*2.2+2.9,Math.min(3,i))*.052,f=Kt(o*6.8+1.3,e*6.8-2.1,t*6.8+3.4)*.016,g=Kt(o*3.1-2.2,e*3.1+1.9,t*3.1-.8)*.038,v=c+d+f,m=h-d*.85,p=u+g,_=Math.max(v,p),y=m-_,x=p-Math.max(v,m);let T="forest";x>0&&p>m?T="ash":y>0&&(T="water");const w=$t(-.035,.045,x),E=$t(-.035,.045,y)*(1-w),A=Math.max(0,1-w-E),M=Math.abs(p-v),S=Math.exp(-Math.pow(M/.068,2))*(1-$t(-.02,.08,y));let C=0,R=0;if(T==="water"){const F=$t(0,.14,y),U=s.nationSites.metkayinaDir,L=H.clamp(o*U.x+e*U.y+t*U.z,-1,1),W=Math.acos(L);if(C=-.02-F*.34,W<.145){const te=1-W/.145;C=H.lerp(-.085,-.155,te),R=.72+.28*te}else if(y>.045){const te=Math.exp(-Math.pow((W-.28)/.17,2)),j=$t(.14,.34,y)*.48,be=1-Math.abs(Kt(o*4.4+2.7,e*4.4-1.3,t*4.4+.8)),Y=Zn(o*8.5+3.1,e*8.5-1.9,t*8.5+2.4,Math.min(3,i)),fe=te*.48+j*.22+Math.pow(Math.max(0,be),3.6)*.52+Y*.26;if(fe>.72)C=.012+Math.min(.085,(fe-.72)*.48),R=.9;else if(fe>.38){const pe=$t(.38,.72,fe);C=H.lerp(-.14,-.008,pe),R=pe*.95}}}else if(T==="ash"){const F=$t(0,.11,x),U=Zn(o*4.1-1.3,e*4.1+2.2,t*4.1-.9,Math.min(4,i))*.06;C=H.lerp(.06,.3,F)+Math.max(-.02,U)+S*.16}else{const F=Math.max(0,v-m),U=$t(0,.12,F),L=Zn(o*3.6+1.2,e*3.6-.8,t*3.6-2.4,Math.min(4,i))*.075;C=H.lerp(.015,.28,U)+Math.max(0,L)+S*.16}let N=0;for(let F=0;F<5;F++){const U=s[F],L=U.sphereDir,W=Math.acos(H.clamp(o*L.x+e*L.y+t*L.z,-1,1));if(W<U.landBoostRad){const te=1-W/U.landBoostRad,j=te*te*(3-2*te);if(U.elevMode==="bay"?C=Math.max(C,.14+j*.18):C=Math.max(C,.16+j*.24),(U.elevMode==="crater"||U.elevMode==="basin")&&W<.11){const be=1-W/.11;N=Math.max(N,be*be*.0024)}}}const P=Xr(o*4.9+1.9,e*4.9-3.4,t*4.9+.7,Math.min(4,Math.max(2,i))),k=Math.max(0,C-.08)*Math.pow(Math.max(0,P),1.65)+S*.34,z=Zn(o*8.2+4.1,e*8.2-2.3,t*8.2+.9,3);return{cont:C,ridge:P,highlandRidge:k,craterDepression:N,forestFactor:A,waterFactor:E,ashFactor:w,reefFactor:R,borderMountain:S,forestClump:z,nation:T}}function y1(o,e,t,n=[0,1,0]){const i=new b(n[0],n[1],n[2]).normalize(),s=i.x,a=i.y,r=i.z,l=o==="p1"?rl([s,a,r]):null;let c=null;if(o==="p2"){const M=new ut().setFromUnitVectors(new b(0,1,0),i).invert();c=new Pt().setFromMatrix4(new nt().makeRotationFromQuaternion(M)).elements}const h=js(e,t),u=js(e,t),d=js(e,t),f=h.getContext("2d").createImageData(e,t),g=u.getContext("2d").createImageData(e,t),v=d.getContext("2d").createImageData(e,t),m=f.data,p=g.data,_=v.data,y=new Float32Array(e),x=new Float32Array(e);for(let M=0;M<e;M++){const S=(M+.5)/e*Math.PI*2;y[M]=Math.cos(S),x[M]=Math.sin(S)}const T=o==="p4"?g1([s,a,r]):null;for(let M=0;M<t;M++){const S=(M+.5)/t*Math.PI,C=Math.sin(S),R=Math.cos(S);for(let N=0;N<e;N++){const P=-y[N]*C,k=x[N]*C,z=P*s+R*a+k*r,F=(M*e+N)*4;let U=0,L=0,W=0,te=0,j=0,be=0,Y=.5;if(o==="p4"){let pe=-2,he=-2,J=0;for(let ue=0;ue<T.length;ue++){const Re=T[ue].h,we=P*Re.x+R*Re.y+k*Re.z;we>pe?(he=pe,pe=we,J=ue):we>he&&(he=we)}const de=T[J],ge=Math.acos(Math.min(1,pe)),Ae=Math.atan2(P*de.e2.x+R*de.e2.y+k*de.e2.z,P*de.e1.x+R*de.e1.y+k*de.e1.z);let ve=Math.abs(Math.cos(ge*95));ve*=ve,ve*=ve,ve*=ve,ve*=ve;const De=$t(.008,.02,ge);let B=Math.abs(Math.cos(Ae*12));B*=B,B*=B,B*=B,B*=B,B*=B;const ot=B*$t(.02,.07,ge)*(1-$t(.45,.9,ge)),G=1-$t(0,.014,pe-he),We=V(Math.floor(P*140),Math.floor(R*140),Math.floor(k*140)),Ie=V(Math.floor(P*700)+3,Math.floor(R*700),Math.floor(k*700)),at=Kt(P*6,R*6,k*6)*.5+.5,je=(Ie>.6?1:0)*(.35+.65*We)*(.4+.6*at),O=ve*.85*De+ot*.8+G*1.1+je*.45;let D,se,xe;We<.33?(D=1,se=.74,xe=.32):We<.66?(D=1,se=.88,xe=.62):(D=1,se=.52,xe=.18),te=O*D,j=O*se,be=O*xe;const oe=.11+.1*We+.05*at+.06*ve*De;U=oe*1.05,L=oe,W=oe*.95,Y=.4+.3*We+.2*ve}else if(o==="p2"){const pe=c[0]*P+c[3]*R+c[6]*k,he=c[1]*P+c[4]*R+c[7]*k,J=c[2]*P+c[5]*R+c[8]*k,de=V(Math.floor(pe*560),Math.floor(he*560),Math.floor(J*560)),ge=V(Math.floor(pe*96)+7,Math.floor(he*96),Math.floor(J*96));if(z>.84){const Ae=Ro(pe,he,J),ve=Kt(pe*14+3,he*14,J*14)*.5+.5,De=1-$t(.41,.49,Ae.theta);if(Ae.isOcean){const B=$t(-.045,0,Ae.coastSignedDist);U=.012+.018*B,L=.032+.045*B,W=.062+.055*B,te=0,j=0,be=0,Y=.25}else if(Ae.district==="badlands")Ae.subzone==="oilfields"?(U=.075+.04*ve,L=.07+.035*ve,W=.065+.03*ve,te=0,j=0,be=0,Y=.44+.2*ve):(U=(.24+.14*ve)*De+.19*(1-De),L=(.115+.055*ve)*De+.1*(1-De),W=(.068+.03*ve)*De+.06*(1-De),Ae.subzone==="eastern_plains"&&de>.965&&Math.abs(Math.sin(pe*42))>.85&&(te=.16,j=.24,be=.2),Y=.46+.28*ve);else if(Ae.district==="pacifica")U=.052+.03*ge,L=.055+.03*ge,W=.062+.03*ge,de>.992&&(te=.35,j=.12,be=.04),Y=.44+.16*ge;else if(Ae.district==="santo_domingo"){if(Ae.subzone==="arroyo"){U=.11+.04*ve,L=.085+.03*ve,W=.065+.02*ve;const B=de>.92?.35+.35*ge:0;te=B*.95,j=B*.42,be=B*.1}else{const B=Math.abs(Math.sin(Ae.ax*190))>.86||Math.abs(Math.sin(Ae.ay*190))>.86;U=.13+.04*ve,L=.105+.035*ve,W=.08,B&&de>.78&&(te=.42,j=.21,be=.06)}Y=.46+.15*ge}else if(Ae.district==="heywood"){if(U=.095+.035*ge,L=.085+.03*ge,W=.07,de>.74){const B=.38+.45*ge;te=B*.96,j=B*.62,be=B*.18}Y=.52+.24*ge}else if(Ae.district==="westbrook")if(Ae.subzone==="north_oak")U=.095+.04*ve,L=.165+.06*ve,W=.085+.03*ve,de>.978&&(te=.48,j=.36,be=.18),Y=.62+.26*ve;else if(Ae.subzone==="charter_hill")U=.19+.05*ge,L=.2+.05*ge,W=.22+.05*ge,de>.8&&(te=.35,j=.38,be=.44),Y=.54+.22*ge;else{if(U=.075+.03*ge,L=.07+.03*ge,W=.095+.04*ge,de>.65){const B=.45+.48*ge;te=B*.88,j=B*.24,be=B*.72}Y=.58+.26*ge}else if(Ae.district==="watson")if(Ae.subzone==="northside_port")U=.055+.025*ge,L=.06+.025*ge,W=.075+.03*ge,de>.93&&(te=.16,j=.34,be=.42),Y=.44+.15*ge;else{if(U=.065+.03*ge,L=.065+.03*ge,W=.082+.035*ge,de>.6){const B=.48+.52*ge;ge>.62?(te=B*.95,j=B*.14,be=B*.22):ge>.25?(te=B*.12,j=B*.78,be=B*.92):(te=B*.92,j=B*.72,be=B*.16)}Y=.58+.28*ge}else{const B=1-$t(.06,.21,Math.hypot(Ae.ax,Ae.ay));if(U=.075+.04*ge,L=.085+.04*ge,W=.115+.05*ge,de>.48){const ot=(.48+.65*B)*(.45+.55*ge);ge>.72?(te=ot*.92,j=ot*.76,be=ot*.38):ge>.34?(te=ot*.22,j=ot*.78,be=ot*1):(te=ot*.78,j=ot*.88,be=ot*1)}Y=.65+.28*B}}else{let Ae=Zn(pe*2.1+4.3,he*2.1,J*2.1,5);if(pe<-.25&&(Ae-=(-.25-pe)*.45),Ae>.04){const ve=Kt(pe*9+1.5,he*9,J*9)*.5+.5;U=.21+.12*ve,L=.105+.05*ve,W=.065+.03*ve,Y=.46+.28*ve}else{const ve=$t(-.35,.04,Ae);U=.012+.02*ve,L=.032+.045*ve,W=.068+.065*ve,Y=.28}}}else if(o==="p3"){let pe=Zn(P*1.8+11,R*1.8,k*1.8,5);z>.84&&(pe=Math.max(pe,.08+(z-.84)*.8));const he=1-Math.abs(Kt(P*7+3,R*7,k*7)),J=Math.max(0,pe-.12)*he*he*3*(z>.9?.2:1),de=Kt(P*14,R*14,k*14);if(pe>0)Y=.45+pe*.6+J*.6,R<-.9||R>.93?(U=.9,L=.93,W=.96):J>.6?(U=.88,L=.9,W=.94):J>.25?(U=.36,L=.31,W=.26):de>.3&&z<.9?(U=.07,L=.2,W=.07):(U=.15+.04*de,L=.34+.05*de,W=.11),V(Math.floor(P*300),Math.floor(R*300),Math.floor(k*300))>.996&&(te=.9,j=.62,be=.3);else{const ge=$t(-.25,0,pe);U=.02+.03*ge,L=.08+.12*ge,W=.22+.13*ge,(R<-.92||R>.94)&&(U=.88,L=.92,W=.96),Y=.3+pe*.3}}else{const{cont:pe,highlandRidge:he,forestFactor:J,ashFactor:de,reefFactor:ge,borderMountain:Ae,nation:ve}=Ph(P,R,k,l),De=Kt(P*11,R*11,k*11),B=Kt(P*28+2.1,R*28,k*28-1.4)*.5+.5,ot=Zn(P*6.5-3.2,R*6.5+1.4,k*6.5,3)*.5+.5;if(ve==="ash"&&pe>0){const G=.125+.085*B+.03*De,We=Math.min(1,he*2.2+Ae*.55);U=H.lerp(G*1.06,.24,We*.6),L=H.lerp(G*.98,.22,We*.6),W=H.lerp(G*1.04,.24,We*.6);const at=Math.pow(Math.max(0,1-Math.abs(Kt(P*18+4.1,R*18,k*18-2.3))),16)*de*.72;U=Math.min(1,U+at*.32),L=Math.min(1,L+at*.07),te=at*.78,j=at*.16,be=at*.02,Y=.58+de*.28+he*.42}else if(pe>0)if(ve==="water"){const G=$t(0,.032,pe);U=H.lerp(.84,.15+.04*B,G),L=H.lerp(.79,.42+.08*ot,G),W=H.lerp(.61,.18+.03*B,G),Y=.46+pe*1.2}else{const G=$t(.28,.78,ot);U=H.lerp(.088,.145,G)+.035*B,L=H.lerp(.235,.355,G)+.055*De,W=H.lerp(.105,.148,G)+.022*B;const We=$t(.55,.85,B)*(1-Math.min(1,he*3));U=H.lerp(U,.22,We*.42),L=H.lerp(L,.4,We*.38);const Ie=Math.min(1,he*2.6+Ae*.72);U=H.lerp(U,.28,Ie*.65),L=H.lerp(L,.31,Ie*.58),W=H.lerp(W,.29,Ie*.62);const at=$t(.22,.44,he);U=H.lerp(U,.68,at*.52),L=H.lerp(L,.74,at*.52),W=H.lerp(W,.72,at*.52);const je=Math.pow(Math.max(0,1-Math.abs(Kt(P*13+1.2,R*13-.7,k*13+2.4))),22);if(je>.22&&he<.14){const ue=(je-.22)*1.1;U=H.lerp(U,.04,ue),L=H.lerp(L,.28,ue),W=H.lerp(W,.34,ue)}const O=V(Math.floor(P*260),Math.floor(R*260),Math.floor(k*260)),D=$t(.45,.85,ot)*(O>.965?.36:0),se=je>.3?(je-.3)*.28:0,xe=(D+se)*J*(1-Ie*.85),oe=B>.52;te=xe*(oe?.22:.04),j=xe*(oe?.12:.34),be=xe*.38,Y=.48+pe*.58+he*.45}else{const G=$t(-.36,-.06,pe),We=H.lerp(.031,.055,G),Ie=H.lerp(.149,.263,G),at=H.lerp(.29,.459,G),je=$t(-.085,0,pe),O=Math.min(1,Math.max(ge*.92,je*.85)),D=$t(.45,.98,O),se=H.lerp(.11,.22,D),xe=H.lerp(.639,.839,D),oe=H.lerp(.62,.769,D);U=H.lerp(We,se,O),L=H.lerp(Ie,xe,O),W=H.lerp(at,oe,O);const ue=O*$t(.55,.95,B)*.26;te=ue*.04,j=ue*.34,be=ue*.38,Y=.28+O*.06}}m[F]=U*255,m[F+1]=L*255,m[F+2]=W*255,m[F+3]=255,p[F]=te*255,p[F+1]=j*255,p[F+2]=be*255,p[F+3]=255;const fe=Y*255;_[F]=fe,_[F+1]=fe,_[F+2]=fe,_[F+3]=255}}h.getContext("2d").putImageData(f,0,0),u.getContext("2d").putImageData(g,0,0),d.getContext("2d").putImageData(v,0,0);const w=new fn(h);w.colorSpace=Xt,w.anisotropy=8;const E=new fn(u);E.colorSpace=Xt,E.anisotropy=8;const A=new fn(d);return{map:w,emissiveMap:E,bumpMap:A}}function b1(o,e=1024,t=512,n=[0,1,0]){const i=new b(n[0],n[1],n[2]).normalize(),s=i.x,a=i.y,r=i.z,l=js(e,t),c=l.getContext("2d"),h=c.createImageData(e,t),u=h.data,d={p1:{lo:.04,hi:.34,col:[1,1,1],k:.92,cyclonic:!0},p2:{lo:-.04,hi:.32,col:[.34,.4,.48],k:.56},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[o]||{lo:.1,hi:.4,col:[1,1,1],k:.7},f=d.cyclonic?[{v:new b(-.45,.42,.78).normalize(),spin:2.35,radius:.55},{v:new b(.62,.54,-.57).normalize(),spin:-2.15,radius:.48},{v:new b(.18,-.46,.87).normalize(),spin:2.05,radius:.5},{v:new b(-.74,-.35,-.57).normalize(),spin:-2.25,radius:.52},{v:new b(.78,-.18,.6).normalize(),spin:1.85,radius:.44}]:null,g=new Float32Array(e),v=new Float32Array(e);for(let p=0;p<e;p++){const _=(p+.5)/e*Math.PI*2;g[p]=Math.cos(_),v[p]=Math.sin(_)}for(let p=0;p<t;p++){const _=(p+.5)/t*Math.PI,y=Math.sin(_),x=Math.cos(_);for(let T=0;T<e;T++){const w=-g[T]*y,E=v[T]*y,A=w*s+x*a+E*r;let M=0;if(d.cyclonic&&f){let C=w,R=x,N=E,P=0;for(let L=0;L<f.length;L++){const W=f[L],te=C*W.v.x+R*W.v.y+N*W.v.z;if(te>.62){const j=Math.acos(Math.min(1,te)),be=Math.exp(-Math.pow(j/W.radius,2)*2.6),Y=W.spin*be*(1-Math.min(1,j/W.radius)*.4),fe=Math.cos(Y),pe=Math.sin(Y),he=W.v.x,J=W.v.y,de=W.v.z,ge=J*N-de*R,Ae=de*C-he*N,ve=he*R-J*C,De=te;C=C*fe+ge*pe+he*De*(1-fe),R=R*fe+Ae*pe+J*De*(1-fe),N=N*fe+ve*pe+de*De*(1-fe),P+=be*.24}}const k=Kt(C*2.2+1.5,R*4.5,N*2.2-.8)*.42,z=Zn(C*3.1+14+k,R*5.6,N*3.1-k,5),F=Kt(C*9.5+3,R*12,N*9.5)*.08,U=z+P*.55+F;M=$t(d.lo,d.hi,U)*d.k}else{const C=Kt(w*2+4,x*2,E*2)*.35,R=Zn(w*3.2+20+C,x*5,E*3.2-C,5);M=$t(d.lo,d.hi,R)*d.k,d.clearNorth&&(M*=1-$t(.78,.9,A))}const S=(p*e+T)*4;u[S]=d.col[0]*255,u[S+1]=d.col[1]*255,u[S+2]=d.col[2]*255,u[S+3]=M*255}}c.putImageData(h,0,0);const m=new fn(l);return m.colorSpace=Xt,m.anisotropy=8,m}function S1(o,e=.06){o.onBeforeCompile=t=>{t.uniforms.uSunViewPos=th.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},o.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function w1(){const e=js(128,128),t=e.getContext("2d"),n=t.createImageData(128,128),i=n.data;for(let a=0;a<128;a++){const r=a/128*2-1;for(let l=0;l<128;l++){const c=l/128*2-1,h=Math.hypot(c,r),u=Math.max(0,1-$t(.18,.98,h)),d=Zn(c*2.8+4.2,r*2.8-1.7,3.1,4)*.5+.5,f=Math.max(0,Math.min(1,u*(.45+.85*d))),g=Math.round(236+19*d),v=(a*128+l)*4;i[v]=g,i[v+1]=Math.min(255,g+4),i[v+2]=255,i[v+3]=Math.round(f*255)}}t.putImageData(n,0,0);const s=new fn(e);return s.needsUpdate=!0,s}function A1(o,e){const t={uMap:{value:o},uColor:{value:new ne(e)},uOpacity:{value:0},uPointSize:{value:94}},n=new nn({uniforms:t,vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      uniform float uPointSize;
      varying float vCamFade;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float camDist = max(0.1, -mvPosition.z);
        vCamFade = smoothstep(3.5, 28.0, camDist) * (1.0 - smoothstep(420.0, 920.0, camDist));
        gl_PointSize = clamp((uPointSize * 480.0) / camDist, 2.0, 440.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
      }
    `,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform sampler2D uMap;
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vCamFade;
      void main() {
        #include <logdepthbuf_fragment>
        vec4 tex = texture2D(uMap, gl_PointCoord);
        float alpha = tex.a * uOpacity * vCamFade;
        if (alpha < 0.004) discard;
        gl_FragColor = vec4(uColor * tex.rgb, clamp(alpha, 0.0, 0.92));
      }
    `,transparent:!0,depthWrite:!1,fog:!1});return n.color=t.uColor.value,Object.defineProperty(n,"opacity",{get:()=>t.uOpacity.value,set:i=>{t.uOpacity.value=i}}),n}function xd(o,e){return new nn({uniforms:{uCloudMap:{value:o},uSunPosition:{value:new b(0,0,0)},uPlanetCenter:{value:new b(0,0,0)},uAmbientColor:{value:new ne(e.ambient)},uSunColor:{value:new ne(e.sunlit)},uHorizonColor:{value:new ne(e.horizon)},uOpacity:{value:0}},vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      uniform vec3 uPlanetCenter;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vRadialNorm;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vec3 radDelta = wp.xyz - uPlanetCenter;
        vRadialNorm = length(radDelta) > 0.0001 ? normalize(radDelta) : vec3(0.0, 1.0, 0.0);
        gl_Position = projectionMatrix * viewMatrix * wp;
        #include <logdepthbuf_vertex>
      }
    `,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform sampler2D uCloudMap;
      uniform vec3 uSunPosition;
      uniform vec3 uAmbientColor;
      uniform vec3 uSunColor;
      uniform vec3 uHorizonColor;
      uniform float uOpacity;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vRadialNorm;

      void main() {
        #include <logdepthbuf_fragment>
        vec4 tex = texture2D(uCloudMap, vUv);
        float cloudAlpha = clamp(tex.a * uOpacity, 0.0, 1.0);
        if (cloudAlpha < 0.004) discard;

        vec3 n = length(vRadialNorm) > 0.0001 ? normalize(vRadialNorm) : vec3(0.0, 1.0, 0.0);
        vec3 sDelta = uSunPosition - vWorldPos;
        vec3 sunDir = length(sDelta) > 0.0001 ? normalize(sDelta) : vec3(0.0, 1.0, 0.0);
        vec3 vDelta = cameraPosition - vWorldPos;
        vec3 viewDir = length(vDelta) > 0.0001 ? normalize(vDelta) : vec3(0.0, 1.0, 0.0);

        // Iluminación solar envolvente + dispersión hacia adelante protegida contra pow(<=0)
        float ndots = dot(n, sunDir);
        float sunWrap = smoothstep(-0.42, 0.72, ndots);
        float termGlow = exp(-pow((ndots - 0.04) / 0.22, 2.0)) * 0.55;
        float forwardCos = max(dot(-viewDir, sunDir), 0.0001);
        float forward = pow(forwardCos, 3.2) * 0.45;
        vec3 baseCloud = mix(uAmbientColor, uSunColor, clamp(sunWrap + forward, 0.0, 1.0)) * (0.75 + 0.35 * tex.rgb);
        vec3 litCloud = mix(baseCloud, uHorizonColor * 1.15, termGlow);

        // Fundir bordes rasantes al horizonte con tono diurno/crepúsculo, oscuro en la cara nocturna
        float ndotv = abs(dot(n, viewDir));
        float dayLimb = smoothstep(-0.35, 0.35, ndots);
        float horizonBlend = (1.0 - smoothstep(0.02, 0.28, ndotv)) * mix(0.22, 1.0, dayLimb);
        vec3 rimTarget = mix(uAmbientColor * 0.65, uHorizonColor, dayLimb);
        vec3 finalCol = clamp(mix(litCloud, rimTarget, horizonBlend * 0.78), 0.0, 4.0);
        float edgeAlpha = cloudAlpha * smoothstep(0.005, 0.14, ndotv);

        gl_FragColor = vec4(finalCol, clamp(edgeAlpha, 0.0, 0.96));
      }
    `,transparent:!0,depthWrite:!1,fog:!1,side:wt})}function E1(){const o=new ln(28e3,48,32),e=new nn({uniforms:{uLocalUp:{value:new b(0,1,0)},uSunDir:{value:new b(0,.2,1)},uZenithColor:{value:new ne(1991880)},uMidColor:{value:new ne(5155054)},uHorizonColor:{value:new ne(16760171)},uSunGlowColor:{value:new ne(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1},uMieG:{value:.78},uMieIntensity:{value:.55}},vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
        #include <logdepthbuf_vertex>
      }
    `,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform vec3 uLocalUp;
      uniform vec3 uSunDir;
      uniform vec3 uZenithColor;
      uniform vec3 uMidColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uSunGlowColor;
      uniform float uHorizonDot;
      uniform float uAtmoOpacity;
      uniform float uZenithAlpha;
      uniform float uMieG;
      uniform float uMieIntensity;
      varying vec3 vWorldPos;

      float hgPhase(float cosTheta, float g) {
        float g2 = g * g;
        return (1.0 - g2) / max(0.04, 4.0 * 3.14159265 * pow(max(0.05, 1.0 + g2 - 2.0 * g * cosTheta), 1.5));
      }

      void main() {
        #include <logdepthbuf_fragment>
        if (uAtmoOpacity < 0.004) discard;

        vec3 rDelta = vWorldPos - cameraPosition;
        vec3 rayDir = length(rDelta) > 0.0001 ? normalize(rDelta) : vec3(0.0, 1.0, 0.0);
        vec3 upDir = length(uLocalUp) > 0.0001 ? normalize(uLocalUp) : vec3(0.0, 1.0, 0.0);
        vec3 sDir = length(uSunDir) > 0.0001 ? normalize(uSunDir) : vec3(0.0, 0.0, 1.0);

        float elev = dot(rayDir, upDir);
        float skyH = clamp((elev - uHorizonDot) / max(0.12, 1.0 - uHorizonDot), 0.0, 1.0);
        float sunElev = dot(sDir, upDir);

        // Modelo Rayleigh (extinción óptica según masa de aire hacia el horizonte) + gradiente planetario
        float cosTheta = clamp(dot(rayDir, sDir), -0.999, 0.999);
        float rayleighPhase = 0.75 * (1.0 + cosTheta * cosTheta);
        float horizonMass = exp(-skyH * 3.1);

        vec3 rayCol = mix(uHorizonColor, uMidColor, smoothstep(0.0, 0.28, skyH));
        rayCol = mix(rayCol, uZenithColor, smoothstep(0.24, 0.92, skyH));
        rayCol *= mix(0.86, 1.14, rayleighPhase * 0.55);

        // Dispersión frontal Mie (Henyey-Greenstein) concentrada alrededor del disco solar y ocaso
        float mieHG = hgPhase(cosTheta, uMieG);
        float forwardGlow = pow(max(cosTheta, 0.0), 4.0) * 0.28 + clamp(mieHG * 0.65, 0.0, 1.8);
        float sunsetWarmth = smoothstep(-0.18, 0.25, sunElev) * (0.45 + 0.55 * horizonMass);
        vec3 col = rayCol + uSunGlowColor * forwardGlow * uMieIntensity * sunsetWarmth * (1.0 - skyH * 0.48);
        col = clamp(col, 0.0, 3.8);

        float alpha = mix(1.0, uZenithAlpha, smoothstep(0.14, 0.78, skyH)) * uAtmoOpacity;
        gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:Hn}),t=new Ve(o,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t.userData.skipSSAO=!0,t}function T1(o,e=157.5){const t=o.localRadius,n=new Ut;n.name=`${o.id}_Orbital_Globe`;const i=o.capLocalDir?o.capLocalDir.clone().normalize():new b(0,1,0),s=[i.x,i.y,i.z],a={p4:[2048,1024],p2:[1536,768],p1:[1536,768]}[o.id]||[1024,512],{map:r,emissiveMap:l,bumpMap:c}=y1(o.id,a[0],a[1],s),h={p1:{ei:.56,rough:.72,metal:.06,bump:1.45,floor:0},p2:{ei:.96,rough:.58,metal:.3,bump:.65,floor:0},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[o.id],u=new ze({map:r,emissiveMap:l,emissive:new ne(1,1,1),emissiveIntensity:h.ei,roughness:h.rough,metalness:h.metal,bumpMap:c,bumpScale:h.bump});S1(u,h.floor);const d=new Ve(new ln(t,128,128),u);d.name=`${o.id}_Orbital_Surface`,n.add(d);const f=o.id==="p1"?[1536,768]:[1024,512],g=b1(o.id,f[0],f[1],s),v={p1:{ambient:4942728,sunlit:16777215,horizon:10279148},p2:{ambient:860724,sunlit:6205136,horizon:1066082},p3:{ambient:8165566,sunlit:16777215,horizon:16039028},p4:{ambient:6434840,sunlit:16763016,horizon:14446130}}[o.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},m=xd(g,v),p=new Ve(new ln(t*1.045,128,128),m);p.name=`${o.id}_Low_Cloud_Shell`,p.userData.skipSSAO=!0,n.add(p);const _=xd(g,v),y=new Ve(new ln(t*1.082,128,128),_);y.name=`${o.id}_High_Cloud_Shell`,y.userData.skipSSAO=!0,n.add(y);const x=new Ut;x.name=`${o.id}_Lower_Cloud_Puffs_Group`,x.visible=!1,n.add(x);const T=460,w=new Float32Array(T*3),E=65/e,A=160/e,M=new ut().setFromUnitVectors(new b(0,1,0),i),S=new b;for(let k=0;k<T;k++){const z=Math.acos(1-V(k,2,17)*.42),F=V(k,9,5)*Math.PI*2,U=E+V(k,4,13)*(A-E),L=t+U;S.set(L*Math.sin(z)*Math.cos(F),L*Math.cos(z),L*Math.sin(z)*Math.sin(F)),S.applyQuaternion(M),w[k*3]=S.x,w[k*3+1]=S.y,w[k*3+2]=S.z}const C=new At;C.setAttribute("position",new xt(w,3));const R=A1(w1(),v.sunlit),N=new Pi(C,R);N.name=`${o.id}_Volumetric_Billboard_Clouds`,N.userData.skipSSAO=!0,x.add(N);const P=Hf(o,t,o.id==="p4"?1.078:1.095);return n.add(P),{group:n,surfaceMesh:d,upperCloudMesh:y,lowerCloudGroup:x,lowerCloudMesh:p,lowerCloudPuffs:N,cloudDeckPalette:v,atmosphere:P}}function Hf(o,e,t=1.045){const n=new ln(e*t,96,96),i={p1:[6083327,9627391],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[o.id]||[6866175,16755285],s=new nn({uniforms:{uColorDay:{value:new ne(i[0])},uColorHorizon:{value:new ne(i[1])},uSunPosition:{value:new b(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
        #include <logdepthbuf_vertex>
      }
    `,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform vec3 uColorDay;
      uniform vec3 uColorHorizon;
      uniform vec3 uSunPosition;
      uniform float uAltitudeFade;
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      void main() {
        #include <logdepthbuf_fragment>
        vec3 vDelta = cameraPosition - vWorldPosition;
        vec3 viewDir = length(vDelta) > 0.0001 ? normalize(vDelta) : vec3(0.0, 1.0, 0.0);
        vec3 n = length(vWorldNormal) > 0.0001 ? normalize(vWorldNormal) : vec3(0.0, 1.0, 0.0);
        vec3 sDelta = uSunPosition - vWorldPosition;
        vec3 sunDir = length(sDelta) > 0.0001 ? normalize(sDelta) : vec3(0.0, 1.0, 0.0);

        float ndotv = abs(dot(n, viewDir));
        float fresnel = pow(max(1.0 - ndotv, 0.0001), 2.6);
        float sunLight = clamp(dot(n, sunDir) * 0.7 + 0.35, 0.05, 1.0);
        float twilight = smoothstep(-0.35, 0.45, dot(n, sunDir));
        float mieLimb = pow(max(dot(-viewDir, sunDir), 0.0001), 4.0) * 0.55;
        vec3 col = mix(uColorHorizon, uColorDay, twilight) + uColorHorizon * mieLimb;
        float alpha = fresnel * sunLight * uAltitudeFade * 0.9;
        vec3 outCol = clamp(col * (1.15 + fresnel * 0.75), 0.0, 3.6);
        gl_FragColor = vec4(outCol, clamp(alpha, 0.0, 0.9));
      }
    `,transparent:!0,depthWrite:!1,blending:Rn,side:Ti}),a=new Ve(n,s);return a.name=`${o.id}_Fresnel_Atmosphere`,a.userData.skipSSAO=!0,a}function C1(o,e=1400){const t=o.localRadius,n=1.65,i=o.id==="p4",s=256,a=js(s,s),r=js(s,s),l=a.getContext("2d"),c=r.getContext("2d");l.fillStyle=i?"#2a2c31":"#111821",l.fillRect(0,0,s,s),c.fillStyle="#000000",c.fillRect(0,0,s,s);const h=i?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let y=4;y<s;y+=8)for(let x=3;x<s;x+=6)Math.random()<(i?.55:.42)&&(c.fillStyle=h[Math.random()*h.length|0],c.fillRect(x,y,3,4));const u=new fn(a);u.colorSpace=Xt;const d=new fn(r);d.colorSpace=Xt;const f=new cn(1,1,1);f.translate(0,.5,0);const g=new ze({map:u,emissiveMap:d,emissive:new ne(1,1,1),emissiveIntensity:i?1.6:2,roughness:.42,metalness:.7}),v=new St(f,g,e);v.name=`${o.id}_Horizon_Tower_Band`;const m=new Wt,p=new b(0,1,0),_=new b;for(let y=0;y<e;y++){const x=.025+Math.pow(V(y,3,9),.85)*.14,T=V(y,7,1)*Math.PI*2;_.set(Math.sin(x)*Math.cos(T),Math.cos(x),Math.sin(x)*Math.sin(T)),m.position.copy(_).multiplyScalar(t*.9996),m.quaternion.setFromUnitVectors(p,_),m.rotateY(V(y,2,2)*Math.PI);const w=n*(.0024+.0042*V(y,5,5)),E=n*(.0024+.0042*V(y,6,8)),A=n*(.006+.025*Math.pow(V(y,9,4),1.6));m.scale.set(w,A,E),m.updateMatrix(),v.setMatrixAt(y,m.matrix)}return v.instanceMatrix.needsUpdate=!0,v}function P1(o,e,t,n){o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1),o.updateMatrixWorld(!0);const i=n==="p2",s=new b(0,1,0),a=e/t,r=i?124:152;function l(w,E,A,M=!1){const S=Math.sqrt(w*w+A*A),C=Math.min(1.18,S/(a*.94)),R=Math.atan2(A,w),N=Math.sin(C),P=N*Math.cos(R),k=Math.cos(C),z=N*Math.sin(R);let F=E;if(M){const W=H.smoothstep(S,r*.65,r*1);F=H.lerp(E,i?-36:-18,W)}const U=n==="p3"?14.5:i?16.5:.4,L=Math.max(a*.9,a+F+U);return{px:L*P,py:L*k-a,pz:L*z,nx:P,ny:k,nz:z}}const c=new nt().copy(o.matrixWorld).invert(),h=[],u=new Map;o.traverse(w=>{if(w.isMesh&&w.geometry){const E=new nt().multiplyMatrices(c,w.matrixWorld);h.push({mesh:w,initRootMat:E}),u.set(w.geometry,(u.get(w.geometry)||0)+1)}});for(const{mesh:w,initRootMat:E}of h)w.parent!==o&&o.attach(w),E.decompose(w.position,w.quaternion,w.scale),w.updateMatrix();const d=new b,f=new ut,g=new b,v=new b,m=new ut,p=new b,_=zf(),y=al(),x=[];let T=0;for(const{mesh:w,initRootMat:E}of h){if(i){if(/^NC_FarHorizon/.test(w.name)){w.visible=!1;continue}if(/^NC_Canyon_Skyscraper/.test(w.name)&&(d.setFromMatrixPosition(E),Math.hypot(d.x,d.z)>104||d.x<-58)){w.visible=!1;continue}}const A=u.get(w.geometry)||1,M=/Terrain|River|Ground|Forest|Canal|Hill|Slope|Meadow|Grass|Cliff|Earth|Dirt|Landscape|Surface/i.test(w.name),S=/Citadel|Castle|Fortress|Keep|Senate|Tower|Skyscraper|Bridge|Spire|Tree|Foliage|Oak|Pine/i.test(w.name);w.castShadow=!M&&S&&T<110,w.castShadow&&T++,w.receiveShadow=M||S;const C=Array.isArray(w.material)?w.material:[w.material];w.castShadow&&C.some(R=>R?.transparent&&!(R.alphaTest>0))&&(w.castShadow=!1);for(const R of C)!R||R.userData?.pbrUpgraded||(R.userData.pbrUpgraded=!0,M&&R.isMeshStandardMaterial?(!R.roughnessMap&&y.roughnessMap&&(R.roughnessMap=y.roughnessMap),!R.bumpMap&&y.bumpMap&&(R.bumpMap=y.bumpMap,R.bumpScale=.04),n==="p3"&&x.push(Ch(R,{mode:"perugius",worldRadius:e*157.5,peakStart:3.6,peakEnd:8.2,shoreBand:.55})),R.needsUpdate=!0):R.isMeshStandardMaterial&&!R.transparent&&!R.map&&_.map&&(R.roughnessMap=_.roughnessMap,R.bumpMap=_.bumpMap,R.bumpScale=.025,R.needsUpdate=!0));if(A===1||M){A>1&&(w.geometry=w.geometry.clone());const R=w.geometry.attributes.position,N=new nt().copy(E).invert();for(let P=0;P<R.count;P++){p.fromBufferAttribute(R,P).applyMatrix4(E);const k=l(p.x,p.y,p.z,M);p.set(k.px,k.py,k.pz).applyMatrix4(N),R.setXYZ(P,p.x,p.y,p.z)}R.needsUpdate=!0,w.geometry.computeVertexNormals(),w.geometry.computeBoundingBox(),w.geometry.computeBoundingSphere()}else{if(E.decompose(d,f,g),i&&/^NC_Canyon_Skyscraper/.test(w.name)){const N=Math.hypot(d.x,d.z),P=1-H.smoothstep(N,95,128)*.46;g.y*=P}const R=l(d.x,d.y,d.z,!1);v.set(R.nx,R.ny,R.nz).normalize(),m.setFromUnitVectors(s,v),w.position.set(R.px,R.py,R.pz),w.quaternion.copy(m).multiply(f),w.scale.copy(g),w.updateMatrix()}}o.scale.setScalar(t),o.position.set(0,e,0),o.updateMatrixWorld(!0),o.userData.splatUniforms=x}const _t=1/3.5,Ni=new b(0,1,0);function _d(o,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,32);i.addColorStop(0,o),i.addColorStop(.45,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new fn(t);return s.needsUpdate=!0,s}function Vf(o){const e=o.clone().normalize(),t=Math.abs(e.x)<.85?new b(1,0,0):new b(0,0,1),n=new b().crossVectors(e,t).normalize(),i=new b().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function R1(){const o=[],e=new hi([new b(0,0,0),new b(.05,.35,-.02),new b(-.04,.72,.04),new b(.02,1,-.01)]);o.push(new vi(e,6,.075,5,!1).toNonIndexed());const t=[[new b(.02,.48,.01),new b(.32,.76,.14)],[new b(-.02,.62,.03),new b(-.28,.92,-.18)],[new b(0,.78,.02),new b(.18,1.12,-.22)],[new b(.02,.56,-.02),new b(-.22,.82,.25)]];for(const[i,s]of t){const a=i.clone().lerp(s,.5).add(new b(0,.06,0)),r=new hi([i,a,s]);o.push(new vi(r,4,.026,4,!1).toNonIndexed())}const n=It(o,!1);return n.computeVertexNormals(),n}function D1(){const o=[];for(let r=-2;r<=2;r++){const l=new hs(.36,.95,2,3);l.translate(r*.14,.48,Math.sin(r*.9)*.06),l.rotateZ(-r*.22),o.push(l.toNonIndexed())}const e=It(o,!1);e.computeVertexNormals();const t=[];for(let r=0;r<6;r++){const l=r/6*Math.PI*2,c=r===0?0:.28,h=r===0?1:.55+V(r,3,7)*.45,u=new Qt(.11,.08,h,6,1);u.translate(Math.cos(l)*c,h*.5,Math.sin(l)*c),u.rotateZ((V(r,2,5)-.5)*.22),t.push(u.toNonIndexed())}const n=It(t,!1);n.computeVertexNormals();const i=[],s=new Qt(.32,.4,.28,8);s.translate(0,.14,0),i.push(s.toNonIndexed());for(let r=0;r<10;r++){const l=r/10*Math.PI*2,c=new $n(.065,.72,4);c.translate(0,.36,0),c.rotateX(.55),c.rotateY(l),c.translate(Math.cos(l)*.22,.2,Math.sin(l)*.22),i.push(c.toNonIndexed())}const a=It(i,!1);return a.computeVertexNormals(),{fanGeo:e,tubeGeo:n,anemoneGeo:a}}function I1(){const o=[];for(let t=0;t<2;t++){const n=new hs(.24,1,2,8);n.translate(0,.5,0);const i=n.attributes.position;for(let s=0;s<i.count;s++){const a=i.getY(s),r=i.getX(s)+Math.sin(a*Math.PI*3)*.14,l=Math.cos(a*Math.PI*2.5+t*1.57)*.1;i.setXYZ(s,r,a,l)}n.rotateY(t*Math.PI*.5),n.computeVertexNormals(),o.push(n.toNonIndexed())}const e=It(o,!1);return e.computeVertexNormals(),e}function L1(o,e,t,n){const s=Vf(e.capDir),a=new Ut;a.name="Pandora_Biome_AshPeople";const r=(J,de,ge=0)=>{const Ae=s.upDir.clone().addScaledVector(s.e1,J).addScaledVector(s.e2,de).normalize(),ve=t(Ae.x,Ae.y,Ae.z);return{pos:Ae.clone().multiplyScalar(o+ve.elev+ge),normal:Ae,elev:ve.elev,nation:ve.nation}},l=Ko(),c={uLavaTime:{value:0}},h=new ze({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.055,roughness:.92,metalness:.06});h.onBeforeCompile=J=>{J.uniforms.uLavaTime=c.uLavaTime,J.vertexShader=`attribute float aVolcanoLava;
varying float vVolcanoLava;
varying vec3 vVolPos;
`+J.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vVolcanoLava = aVolcanoLava;
        vVolPos = transformed;`),J.fragmentShader=`uniform float uLavaTime;
varying float vVolcanoLava;
varying vec3 vVolPos;
`+J.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (vVolcanoLava > 0.01) {
          float pulseV = 0.84 + 0.16 * sin(uLavaTime * 2.4 + vVolPos.x * 95.0 + vVolPos.z * 85.0);
          vec3 magma = mix(vec3(1.1, 0.16, 0.02), vec3(2.2, 0.62, 0.08), vVolcanoLava);
          totalEmissiveRadiance += magma * pow(vVolcanoLava, 1.35) * pulseV;
        }`)},h.customProgramCacheKey=()=>"pandoraAshStratovolcanoV1";const u=new ze({color:7017476,emissive:16729608,emissiveIntensity:1.55,roughness:.25});u.userData.animatedEmissive=!0,n.push({mat:u,dayColor:8133638,nightColor:16736792,dayEmissive:16726792,nightEmissive:16733196,dayEI:1.45,nightEI:2.65,pulsePhase:.4});const d=(J,de)=>{const ve=-.11746031746031746,De=1225,B=new Float32Array(De*3),ot=new Float32Array(De*3),G=new Float32Array(De*2),We=new Float32Array(De),Ie=[],at=new ne(1446935),je=new ne(2170144),O=new ne(2762024),D=new ne(1052176),se=new ne;for(let oe=0;oe<=24;oe++)for(let ue=0;ue<=48;ue++){const Re=ue/48,we=Re*Math.PI*2,Ne=Math.cos(we),dt=Math.sin(we),Ee=Zn(Ne*2.1+de,oe/24*2.4,dt*2.1-de,3),Ue=Kt(Ne*5.8+de*1.7,oe/24*4.5,dt*5.8),Je=Math.sin(we*9+Ee*4.2+de*2.3),ct=Math.pow(Math.max(0,-Je),2.5);let He=J.rad,mt=0,ht=0;if(oe<=4){const q=oe/4;mt=H.lerp(ve,-.004,q);const Ce=H.lerp(1.48,1.3,q);He=J.rad*Ce*(1+(Ee-.5)*.14),se.copy(at)}else if(oe<=18){const q=(oe-4)/14,Ce=J.rad*H.lerp(1.3,.34,Math.pow(q,.72)),me=1+(.12*Je+.16*(Ee-.5)+.07*Ue)*(1-q*.28);He=Ce*me,mt=H.lerp(-.004,J.h,Math.pow(q,1.32))+(Ee-.5)*J.h*.055*(1-q*.3);const Me=H.smoothstep(q,.56,.96);ht=ct*Me*.72,se.copy(at).lerp(je,q*.8).lerp(O,Math.max(0,Ue)*.48)}else{const q=(oe-18)/6,Ce=J.rad*.34*(1+.16*(Ee-.5)+.08*Ue),me=J.h*(1+.09*(Ee-.5)+.06*Je);He=Ce*(1-q*.88),mt=me-Math.pow(q,.76)*(J.h*.38),ht=Math.max(ct*.45*(1-q*.5),Math.pow(q,1.45)*.95),se.copy(je).lerp(D,q*.9)}const ft=oe*49+ue;B[ft*3]=Ne*He,B[ft*3+1]=mt,B[ft*3+2]=dt*He,ot[ft*3]=se.r,ot[ft*3+1]=se.g,ot[ft*3+2]=se.b,G[ft*2]=Re*4,G[ft*2+1]=oe/24*3,We[ft]=ht}for(let oe=0;oe<24;oe++)for(let ue=0;ue<48;ue++){const Re=oe*49+ue,we=Re+48+1,Ne=Re+1,dt=we+1;Ie.push(Re,we,Ne,Ne,we,dt)}const xe=new At;return xe.setAttribute("position",new xt(B,3)),xe.setAttribute("color",new xt(ot,3)),xe.setAttribute("uv",new xt(G,2)),xe.setAttribute("aVolcanoLava",new xt(We,1)),xe.setIndex(Ie),xe.computeVertexNormals(),xe},f=[{lx:-.045*.3125,lz:.032*.3125,rad:.185*_t,h:.215*_t},{lx:.072*.3125,lz:-.048*.3125,rad:.155*_t,h:.175*_t},{lx:-.025*.3125,lz:-.095*.3125,rad:.142*_t,h:.155*_t}],g=[];f.forEach((J,de)=>{const ge=r(J.lx,J.lz,0),Ae=d(J,de*4.7+1.3),ve=new Ve(Ae,h);ve.position.copy(ge.pos),ve.quaternion.setFromUnitVectors(Ni,ge.normal),ve.castShadow=!0,ve.receiveShadow=!0,ve.name=`Pandora_Ash_Volcano_${de+1}`,a.add(ve);const De=new Ve(new Cs(J.rad*.22,18),u);De.rotateX(-Math.PI*.5),De.position.set(0,J.h*.65,0),De.name=`Pandora_Ash_Volcano_MagmaCore_${de+1}`,ve.add(De),g.push({basePos:ge.pos.clone().addScaledVector(ge.normal,J.h*.72),normal:ge.normal.clone(),maxH:(.16+de*.03)*_t,phase:de*2.1})});const v=32,m=g.length*v,p=new Float32Array(m*3),_=new At;_.setAttribute("position",new xt(p,3));const y=new Ci({size:14.5,map:_d("rgba(38, 34, 36, 0.76)","rgba(18, 16, 17, 0.30)"),color:2499108,transparent:!0,opacity:.66,depthWrite:!1,sizeAttenuation:!0}),x=new Pi(_,y);x.frustumCulled=!1,x.castShadow=!1,x.name="Pandora_Ash_Volcano_Smoke",a.add(x);const T=600,w=new Float32Array(T*3),E=[];for(let J=0;J<T;J++){const de=V(J,3,19)*Math.PI*2,ge=Math.sqrt(V(J,7,11))*.24*.3125,Ae=r(Math.cos(de)*ge,Math.sin(de)*ge,(.006+V(J,5,2)*.2)*_t);w[J*3]=Ae.pos.x,w[J*3+1]=Ae.pos.y,w[J*3+2]=Ae.pos.z,E.push({dir:Ae.normal,baseAlt:Ae.pos.length(),phase:V(J,9,4)*Math.PI*2,speed:.04+V(J,2,8)*.06})}const A=new At;A.setAttribute("position",new xt(w,3));const M=new Ci({size:.62,map:_d("rgba(255, 138, 64, 0.92)","rgba(180, 62, 24, 0.28)"),color:16751194,transparent:!0,opacity:.54,depthWrite:!1,sizeAttenuation:!0}),S=new Pi(A,M);S.frustumCulled=!1,S.castShadow=!1,S.name="Pandora_Ash_Floating_Cinders",a.add(S);const C=260,R=Eh(),N=R1();N.boundingSphere=new ai(new b(0,0,0),o+1.5);const P=new ze({color:2499104,map:R.map,roughnessMap:R.roughnessMap,bumpMap:R.bumpMap,bumpScale:.04,roughness:.94,metalness:.05}),k=[],z=new Wt;for(let J=0;J<C*2&&k.length<C;J++){const de=V(J,4,17)*Math.PI*2,ge=.014+Math.sqrt(V(J,8,3))*.1,Ae=r(Math.cos(de)*ge,Math.sin(de)*ge,-5e-4);if(Ae.nation!=="ash")continue;const ve=(.018+V(J,2,11)*.028)*_t;z.position.copy(Ae.pos),z.quaternion.setFromUnitVectors(Ni,Ae.normal),z.rotateY(V(J,6,9)*Math.PI*2),z.rotateX((V(J,1,5)-.5)*.22),z.scale.set(ve,ve,ve),z.updateMatrix(),k.push(z.matrix.clone())}const F=new St(N,P,Math.max(1,k.length));F.name="Pandora_Ash_Charred_Trees",F.frustumCulled=!1,F.castShadow=!0,F.receiveShadow=!0,k.forEach((J,de)=>F.setMatrixAt(de,J)),F.instanceMatrix.needsUpdate=!0,a.add(F);const U=new ze({color:12167830,roughness:.78}),L=new ze({color:2366745,roughness:.92}),W=new ze({color:16755256,emissive:16734740,emissiveIntensity:1.15,roughness:.35});W.userData.animatedEmissive=!0,n.push({mat:W,dayColor:16755256,nightColor:16768376,dayEmissive:16734740,nightEmissive:16738328,dayEI:.95,nightEI:2.65,pulsePhase:1.1});const te=[],j=[],be=[];for(let J=0;J<6;J++){const de=J/6*Math.PI*2+.3,ge=.022*.3125,Ae=r(Math.cos(de)*ge,Math.sin(de)*ge,2e-4),ve=new ut().setFromUnitVectors(Ni,Ae.normal);for(let B=-1;B<=1;B+=2){const ot=new hi([new b(B*.012*_t,0,0),new b(B*.018*_t,.018*_t,.002*_t),new b(0,.032*_t,0)]),G=new vi(ot,8,.0018*_t,5,!1).toNonIndexed();G.applyQuaternion(new ut().setFromAxisAngle(Ni,de)),G.applyQuaternion(ve),G.translate(Ae.pos.x,Ae.pos.y,Ae.pos.z),j.push(G)}const De=r(Math.cos(de+.25)*.011*.3125,Math.sin(de+.25)*.011*.3125,5e-4);be.push(De)}for(let J=0;J<16;J++){const de=J/16*Math.PI*2+V(J,2,7)*.18,ge=(.018+J%3*.008)*.3125,Ae=r(Math.cos(de)*ge,Math.sin(de)*ge,0),ve=new $n(.0075*_t,.013*_t,6);ve.translate(0,.006*_t,0);const De=ve.toNonIndexed();De.rotateY(V(J,4,1)*Math.PI),De.applyQuaternion(new ut().setFromUnitVectors(Ni,Ae.normal)),De.translate(Ae.pos.x,Ae.pos.y,Ae.pos.z),te.push(De)}const Y=new Ve(It(j,!1),U);Y.name="Pandora_Ash_Giant_Bone_Totems";const fe=new Ve(It(te,!1),L);fe.name="Pandora_Ash_Tribal_Huts",a.add(Y,fe);const pe=[];be.forEach(J=>{const de=new $n(.003*_t,.009*_t,6).toNonIndexed();de.translate(0,.004*_t,0),de.applyQuaternion(new ut().setFromUnitVectors(Ni,J.normal)),de.translate(J.pos.x,J.pos.y,J.pos.z),pe.push(de)});const he=new Ve(It(pe,!1),W);return he.name="Pandora_Ash_Bonfires",a.add(he),{group:a,update(J,de){c.uLavaTime.value=J;const ge=_.attributes.position;g.forEach((ve,De)=>{for(let B=0;B<v;B++){const ot=De*v+B,G=(J*.24+ve.phase+B/v)%1,We=G*ve.maxH,Ie=G*.025*_t;ge.setXYZ(ot,ve.basePos.x+ve.normal.x*We+Math.sin(ot+J*.5)*Ie,ve.basePos.y+ve.normal.y*We+Math.cos(ot)*Ie*.5,ve.basePos.z+ve.normal.z*We+Math.cos(ot+J*.4)*Ie)}}),ge.needsUpdate=!0,y.color.setRGB(H.lerp(.24,.42,de),H.lerp(.22,.16,de),H.lerp(.23,.14,de));const Ae=A.attributes.position;for(let ve=0;ve<T;ve++){const De=E[ve],B=Math.sin(J*De.speed+De.phase)*.004,ot=De.baseAlt+Math.cos(J*.4+De.phase)*.003;Ae.setXYZ(ve,De.dir.x*ot+B,De.dir.y*ot,De.dir.z*ot-B)}Ae.needsUpdate=!0}}}function N1(o,e,t,n){const i=.29411764705882354,s=Vf(e.capDir),a=new Ut;a.name="Pandora_Biome_MetkayinaReef";const r=(L,W,te=0)=>{const j=s.upDir.clone().addScaledVector(s.e1,L).addScaledVector(s.e2,W).normalize();return{pos:j.clone().multiplyScalar(o+te),normal:j}},l=(L,W,te=0)=>{const j=s.upDir.clone().addScaledVector(s.e1,L).addScaledVector(s.e2,W).normalize(),be=t(j.x,j.y,j.z);return{pos:j.clone().multiplyScalar(o+be.elev+te),normal:j,elev:be.elev,nation:be.nation}},c=new ze({color:6045222,roughness:.85}),h=new ze({color:7758908,roughness:.9}),u=new ze({color:16764006,emissive:16746532,emissiveIntensity:.55,roughness:.35});u.userData.animatedEmissive=!0,n.push({mat:u,dayColor:16755268,nightColor:16769160,dayEmissive:16742178,nightEmissive:16747560,dayEI:.45,nightEI:2.55,pulsePhase:1.7});const d=[],f=[],g=[],v=[],m=[];for(let L=0;L<18;L++){const W=(L<6?.024:.052+L%3*.012)*i,te=(L<6?L/6*Math.PI*2:(L-6)/12*Math.PI*2)+V(L,4,3)*.25,j=Math.cos(te)*W,be=Math.sin(te)*W,Y=r(j,be,5e-4),fe=new ut().setFromUnitVectors(Ni,Y.normal).multiply(new ut().setFromAxisAngle(Ni,te+V(L,2,7))),pe=(.018+V(L,5,1)*.008)*_t,he=pe*1.25;m.push({pos:Y.pos.clone(),normal:Y.normal.clone(),qOri:fe});const J=new cn(pe,.0016*_t,he).toNonIndexed();J.translate(0,.0012*_t,0),J.applyQuaternion(fe),J.translate(Y.pos.x,Y.pos.y,Y.pos.z),d.push(J);for(let ve=-1;ve<=1;ve+=2){const De=new hi([new b(ve*pe*.48,-.0015*_t,-he*.72),new b(ve*pe*.56,8e-4*_t,0),new b(ve*pe*.48,-.0015*_t,he*.72)]),B=new vi(De,8,.0014*_t,5,!1).toNonIndexed();B.applyQuaternion(fe),B.translate(Y.pos.x,Y.pos.y,Y.pos.z),d.push(B)}const de=pe*.65,ge=new Qt(.001,pe*.56,de,8,1);ge.scale(.95,1,1.25),ge.translate(0,de*.5+.0018*_t,0);const Ae=ge.toNonIndexed();Ae.applyQuaternion(fe),Ae.translate(Y.pos.x,Y.pos.y,Y.pos.z),f.push(Ae);for(let ve=0;ve<(L%2===0?2:1);ve++){const De=ve===0?1:-1,B=new Qt(4e-4*_t,6e-4*_t,.007*_t,5).toNonIndexed();B.translate(De*pe*.45,.004*_t,he*.52),B.applyQuaternion(fe),B.translate(Y.pos.x,Y.pos.y,Y.pos.z),d.push(B);const ot=new ln(.0014*_t,6,5).toNonIndexed();ot.translate(De*pe*.45,.008*_t,he*.52),ot.applyQuaternion(fe),ot.translate(Y.pos.x,Y.pos.y,Y.pos.z),g.push(ot)}L<14&&v.push({basePos:Y.pos.clone().add(new b(pe*.72,-2e-4*_t,0).applyQuaternion(fe)),normal:Y.normal.clone(),qOri:fe,phase:L*.9})}for(let L=0;L<m.length;L++){const W=m[L],te=L<5?L+1:L===5?0:L<17?L+1:6,j=m[te],be=W.pos.distanceTo(j.pos);if(be>.005*_t&&be<.22*_t){const Y=W.pos.clone().add(j.pos).multiplyScalar(.5).normalize().multiplyScalar(o+9e-4),fe=new cn(.0045*_t,.0011*_t,be).toNonIndexed(),pe=j.pos.clone().sub(W.pos).normalize(),he=Y.clone().normalize(),J=new b().crossVectors(he,pe).normalize();pe.crossVectors(J,he).normalize();const de=new nt().makeBasis(J,he,pe);de.setPosition(Y),fe.applyMatrix4(de),d.push(fe)}}const p=new Ve(It(d,!1),c);p.name="Pandora_Metkayina_Rafts_And_Walkways";const _=new Ve(It(f,!1),h);_.name="Pandora_Metkayina_Woven_Huts";const y=new Ve(It(g,!1),u);y.name="Pandora_Metkayina_Torches",a.add(p,_,y);const x=new $n(.0022*_t,.022*_t,6);x.rotateX(Math.PI*.5),x.scale(1,.45,1);const T=new St(x,c,v.length);T.name="Pandora_Metkayina_Moored_Canoes",a.add(T);const{fanGeo:w,tubeGeo:E,anemoneGeo:A}=D1(),M=new ai(new b(0,0,0),o+1.5);w.boundingSphere=M,E.boundingSphere=M,A.boundingSphere=M;const S=[{name:"Pandora_Reef_Corals_CyanFans",geo:w,dayCol:2517860,nightCol:62975,nightEm:65512,matrices:[]},{name:"Pandora_Reef_Corals_MagentaTubes",geo:E,dayCol:9192546,nightCol:16725168,nightEm:16720544,matrices:[]},{name:"Pandora_Reef_Corals_CoralAnemones",geo:A,dayCol:10379322,nightCol:16742436,nightEm:16736792,matrices:[]}],C=new Wt;for(let L=0;L<580;L++){const W=V(L,3,19)*Math.PI*2,te=Math.sqrt(V(L,7,13))*.165*i,j=l(Math.cos(W)*te,Math.sin(W)*te,0);if(j.nation!=="water"||j.elev>=-.002)continue;const be=(.011+V(L,5,11)*.017)*_t;C.position.copy(j.pos),C.quaternion.setFromUnitVectors(Ni,j.normal),C.rotateY(V(L,2,7)*Math.PI*2),C.scale.set(be,be,be),C.updateMatrix(),S[L%3].matrices.push(C.matrix.clone())}S.forEach((L,W)=>{if(L.matrices.length===0)return;const te=new ze({color:L.dayCol,emissive:L.nightEm,emissiveIntensity:0,roughness:.55,side:wt});te.userData.animatedEmissive=!0,n.push({mat:te,dayColor:L.dayCol,nightColor:L.nightCol,dayEmissive:1057304,nightEmissive:L.nightEm,dayEI:0,nightEI:2.15,pulsePhase:W*1.4});const j=new St(L.geo,te,L.matrices.length);j.name=L.name,j.frustumCulled=!1,j.castShadow=!1,j.receiveShadow=!1,L.matrices.forEach((be,Y)=>j.setMatrixAt(Y,be)),j.instanceMatrix.needsUpdate=!0,a.add(j)});const R=[];for(let L=0;L<380;L++){const W=V(L,11,5)*Math.PI*2,te=Math.sqrt(V(L,4,17))*.155*i,j=l(Math.cos(W)*te,Math.sin(W)*te,0);if(j.nation!=="water"||j.elev>=-.014)continue;const be=Math.abs(j.elev),Y=Math.min(be*.85,(.045+V(L,9,2)*.065)*_t),fe=(.014+V(L,6,8)*.014)*_t;C.position.copy(j.pos),C.quaternion.setFromUnitVectors(Ni,j.normal),C.rotateY(V(L,1,3)*Math.PI*2),C.scale.set(fe,Y,fe),C.updateMatrix(),R.push(C.matrix.clone())}const N={uTime:{value:0}},P=new ze({color:1730632,emissive:55450,emissiveIntensity:0,roughness:.55,side:wt});if(P.userData.animatedEmissive=!0,P.onBeforeCompile=L=>{L.uniforms.uTime=N.uTime,L.vertexShader=`uniform float uTime;
`+L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float swayAmp = position.y * 0.14;
        transformed.x += sin(uTime * 1.45 + position.y * 6.0) * swayAmp;
        transformed.z += cos(uTime * 1.2 + position.y * 5.0) * swayAmp;`)},n.push({mat:P,dayColor:1730632,nightColor:541256,dayEmissive:798238,nightEmissive:57512,dayEI:0,nightEI:1.05}),R.length>0){const L=I1();L.boundingSphere=M;const W=new St(L,P,R.length);W.name="Pandora_Reef_Giant_Kelp",W.frustumCulled=!1,W.castShadow=!1,W.receiveShadow=!1,R.forEach((te,j)=>W.setMatrixAt(j,te)),W.instanceMatrix.needsUpdate=!0,a.add(W)}const k=[];for(let L=0;L<32;L++){const W=V(L,8,21)*Math.PI*2,te=Math.sqrt(V(L,2,13))*.145*i,j=r(Math.cos(W)*te,Math.sin(W)*te,-.001),be=.095,Y=new Qt(.008*_t,.028*_t,be,8,1,!0);Y.translate(0,-be*.5,0);const fe=Y.toNonIndexed(),pe=new ut().setFromUnitVectors(Ni,j.normal),he=new ut().setFromEuler(new ui(.18,V(L,3,5)*6.28,.12));fe.applyQuaternion(pe.multiply(he)),fe.translate(j.pos.x,j.pos.y,j.pos.z),k.push(fe)}const z=new dn({color:new ne(.32,.95,1),transparent:!0,opacity:0,depthWrite:!1,blending:Rn,side:wt}),F=new Ve(It(k,!1),z);F.name="Pandora_Reef_Underwater_Caustics",F.visible=!1,a.add(F);const U=new Wt;return{group:a,update(L,W,te){N.uTime.value=L;for(let j=0;j<v.length;j++){const be=v[j],Y=Math.sin(L*2.1+be.phase)*45e-5*_t,fe=Math.sin(L*1.6+be.phase)*.06;U.position.copy(be.basePos).addScaledVector(be.normal,Y),U.quaternion.copy(be.qOri),U.rotateZ(fe),U.scale.set(1,1,1),U.updateMatrix(),T.setMatrixAt(j,U.matrix)}if(T.instanceMatrix.needsUpdate=!0,te>.01){const j=.78+.22*Math.sin(L*2.4),be=H.lerp(.28,.08,W);z.opacity=te*be*j,F.visible=z.opacity>.005}else F.visible=!1}}}const Te=1/3.5,Sn=new b(0,1,0),Rh=new ut().setFromUnitVectors(Sn,new b(0,Math.cos(H.degToRad(68)),Math.sin(H.degToRad(68))).normalize()),Dh=rl([0,Math.cos(H.degToRad(68)),Math.sin(H.degToRad(68))]),bt=1/3.2,qr=[{id:"valley_lake",dir:new b(-.08,.992,.095).normalize(),angRad:.024,waterElev:.0026},{id:"east_lake",dir:new b(.42,.78,.46).normalize(),angRad:.025,waterElev:.0028},{id:"west_lake",dir:new b(-.56,.62,-.55).normalize(),angRad:.024,waterElev:.0027},{id:"souls_lake",dir:new b(.36,-.12,-.92).normalize(),angRad:.026,waterElev:.0028},{id:"mush_lake",dir:new b(-.24,-.78,.58).normalize(),angRad:.024,waterElev:.0027}],Jl=new b,wr=new b;function U1(o,e,t,n=0){const i=Math.sin(e),s=i*Math.cos(t),a=Math.cos(e),r=i*Math.sin(t),l=o+n;return{pos:new b(l*s,l*a,l*r),normal:new b(s,a,r)}}function mi(o,e,t,n=Rh,i=Dh,s=4){Jl.set(o,e,t).normalize(),wr.copy(Jl).applyQuaternion(n).normalize();const a=wr.x,r=wr.y,l=wr.z,{cont:c,ridge:h,highlandRidge:u,craterDepression:d,forestFactor:f,waterFactor:g,ashFactor:v,reefFactor:m,borderMountain:p,forestClump:_,nation:y}=Ph(a,r,l,i,s);let x=0,T=0;if(y==="forest"&&f>.55)for(let A=0;A<qr.length;A++){const M=qr[A],S=Jl.dot(M.dir);if(S>.992){const C=Math.acos(H.clamp(S,-1,1));if(C<M.angRad){const R=1-C/M.angRad;x=Math.max(x,R*R*(3-2*R)),T=M.waterElev}}}let w=0,E="ocean";if(c<=0){const A=H.smoothstep(c,-.34,-.02),M=Kt(a*19,r*19,l*19)*.008,S=-.11*(.45+.55*Math.max(.45,m));w=H.lerp(S,-.0012,A)+M*(1-A*.5),m>.25&&c>-.16&&(w=H.lerp(w,-.022-(1-A)*.085,.65)),E=c>-.16||m>.25?"reef":"ocean"}else{const A=Kt(a*9+1.2,r*9,l*9)*.12,M=Kt(a*9,r*9+2.4,l*9)*.12,S=Zn((a+A)*14+3.1,r*14-1.4,(l+M)*14+2.7,4),C=Xr((a+A)*18+4.3,r*18-2.1,(l+M)*18+1.9,4,2.18,.52),R=Xr(a*24-1.7,r*24+3.2,l*24,3,2.05,.5),N=(Math.abs(Kt(a*36,r*36,l*36))*.0022+R*.0024)*1,P=H.smoothstep(c,0,.14),k=H.smoothstep(u,.02,.24)*(.014+.0075*C),z=Math.pow(Math.max(0,C-.36),1.55)*.009*P*(y==="water"?.25:1),F=p*(.014+Math.max(0,h)*.013),U=v*(.0065+Math.pow(Math.max(0,h),1.75)*.0135+Math.max(0,C-.4)*.005);w=Math.min(.068,(P*.0018+Math.max(0,S*.52+.34)*.0072*P+N*P+k+z+F+U-d)*1.45),x>.01&&(w=H.lerp(w,T-.0038,x)),w=Math.max(4e-4,w),y==="ash"?E="ash":y==="water"?E="atoll_island":x>.45?E="lake":u>.036||p>.45?E="canyon":E="forest"}return{cont:c,ridge:h,highlandRidge:u,forestFactor:f,waterFactor:g,ashFactor:v,reefFactor:m,borderMountain:p,forestClump:_,lakeBlend:x,lakeWaterElev:T,elev:w,biome:E,nation:y,sx:a,sy:r,sz:l}}function Ar(o,e,t,n=0,i=null){const s=i?.qCap||Rh,a=i?.sphereLandmarks||Dh;return mi(o,e,t,s,a,3).elev}function Xi(o){const e=o.clone().normalize(),t=Math.abs(e.x)<.85?new b(1,0,0):new b(0,0,1),n=new b().crossVectors(e,t).normalize(),i=new b().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Js(o,e,t,n,i,s,a){const r=e.upDir.clone().addScaledVector(e.e1,t).addScaledVector(e.e2,n).normalize(),l=mi(r.x,r.y,r.z,s,a,3).elev;return{pos:r.clone().multiplyScalar(o+l+i),normal:r,elev:l}}function F1(o,e=null){const t=e?.qCap||Rh,n=e?.sphereLandmarks||Dh,i=[{anchor:new b(0,1,0),span:.24,angle:.55,amp:.045,steps:42},{anchor:new b(.14,.985,.09).normalize(),span:.2,angle:-1.1,amp:.038,steps:32},{anchor:Tt[2].capDir.clone(),span:.24,angle:.8,amp:.038,steps:36},{anchor:Tt[3].capDir.clone(),span:.24,angle:2.1,amp:.04,steps:36},{anchor:Tt[4].capDir.clone(),span:.2,angle:-.7,amp:.032,steps:32},{anchor:new b(.48,.58,-.65).normalize(),span:.22,angle:1.4,amp:.036,steps:32},{anchor:new b(-.46,.72,-.52).normalize(),span:.22,angle:-1.6,amp:.036,steps:32}],s=[];for(const a of i){const r=Xi(a.anchor),l=Math.cos(a.angle),c=Math.sin(a.angle),h=[];for(let u=0;u<=a.steps;u++){const d=u/a.steps,f=(d-.5)*a.span,g=Math.sin(d*Math.PI*2.4)*a.amp,v=f*l-g*c,m=f*c+g*l,p=r.upDir.clone().addScaledVector(r.e1,v).addScaledVector(r.e2,m).normalize(),_=mi(p.x,p.y,p.z,t,n,3);if(_.nation!=="forest"||_.cont<=.005){if(h.length>=6)break;continue}h.push({theta:Math.acos(H.clamp(p.y,-1,1)),phi:Math.atan2(p.z,p.x),pos:p.clone().multiplyScalar(o+_.elev+55e-5),normal:p,elev:_.elev})}h.length>=6&&s.push(h)}return s}function oi(o,e=1){const t=o.attributes.normal;if(!t)return o;for(let n=0;n<t.count;n++){const i=t.getX(n),s=t.getY(n),a=t.getZ(n),r=Math.hypot(i,s,a);!Number.isFinite(r)||r<1e-4?t.setXYZ(n,0,e,0):Math.abs(r-1)>.001&&t.setXYZ(n,i/r,s/r,a/r)}return t.needsUpdate=!0,o}function Md(o,e){const t=o.index?o.toNonIndexed():o,n=new ne(e),i=t.attributes.position.count,s=new Float32Array(i*3);for(let a=0;a<i;a++)s[a*3]=n.r,s[a*3+1]=n.g,s[a*3+2]=n.b;return t.setAttribute("color",new xt(s,3)),t}function Vn(o,e,t=.28,n=.1,i=2,s=3,a=.45){const r=new hs(o,e,i,s);r.translate(0,e*.5,0);const l=r.attributes.position;for(let g=0;g<l.count;g++){const v=l.getX(g),m=l.getY(g),p=H.clamp(m/Math.max(1e-4,e),0,1),_=H.clamp(v/Math.max(1e-4,o),-.5,.5)*2,y=t*Math.pow(p,1.55)*e,x=-n*(_*_-.35)*(.25+.75*p)*o,T=Math.sin(p*Math.PI)*Math.abs(t)*.14*e;l.setXYZ(g,v,m+T,y+x)}const c=r.toNonIndexed();c.computeVertexNormals();const h=c.attributes.normal,u=c.attributes.position,d=new b,f=new b;for(let g=0;g<h.count;g++)f.fromBufferAttribute(h,g),d.set(u.getX(g),a*e+u.getY(g)*.65,u.getZ(g)+.12*e),d.lengthSq()>1e-6&&(d.normalize(),f.lerp(d,.42).normalize(),h.setXYZ(g,f.x,f.y,f.z));return oi(c,1)}function O1(){const o=[],e=new Qt(.03,.14,1,6,1);e.translate(0,.5,0),o.push(e.toNonIndexed());const t=[{y:.42,rad:.24},{y:.6,rad:.2},{y:.77,rad:.16},{y:.91,rad:.11}];for(let i=0;i<t.length;i++){const s=t[i];for(let a=0;a<3;a++){const r=a/3*Math.PI*2+i*.72,l=new Qt(.008,.022,s.rad,4,1);l.translate(0,s.rad*.5,0),l.rotateZ(-1.35),l.rotateY(r),l.translate(0,s.y,0),o.push(l.toNonIndexed())}}const n=It(o,!1);return n.computeVertexNormals(),oi(n,1)}function k1(){const o=[],e=[{y:.42,w:.4,h:.5,n:4,tilt:1.24,twist:0},{y:.6,w:.35,h:.44,n:4,tilt:1.18,twist:.45},{y:.77,w:.29,h:.36,n:3,tilt:1.08,twist:.25},{y:.91,w:.24,h:.28,n:3,tilt:.88,twist:.65}];for(const i of e)for(let s=0;s<i.n;s++){const a=s/i.n*Math.PI*2+i.twist,r=Vn(i.w,i.h,.26,.09,1,2,.35);r.rotateX(i.tilt),r.rotateZ((s%2*2-1)*.14),r.rotateY(a),r.translate(Math.sin(a)*.03,i.y,Math.cos(a)*.03),o.push(r)}const t=Vn(.24,.28,.18,.08,1,2,.5);t.rotateX(.32),t.rotateY(.3),t.translate(0,.96,0),o.push(t);const n=It(o,!1);return n.computeVertexNormals(),oi(n,1)}function B1(){const o=[],e=new hi([new b(0,0,0),new b(.08,.32,.04),new b(-.05,.68,-.05),new b(.03,.94,.02)]);o.push(new vi(e,6,.068,5,!1).toNonIndexed());for(let n=0;n<4;n++){const i=n/4*Math.PI*2+.4,s=new hi([new b(Math.cos(i)*.04,.34,Math.sin(i)*.04),new b(Math.cos(i)*.18,.22,Math.sin(i)*.18),new b(Math.cos(i)*.26,-.02,Math.sin(i)*.26)]);o.push(new vi(s,4,.028,4,!1).toNonIndexed())}for(let n=0;n<3;n++){const i=n/3*Math.PI*2+.55,s=new hi([new b(.01,.78,0),new b(Math.cos(i)*.16,.9,Math.sin(i)*.16),new b(Math.cos(i)*.32,.96,Math.sin(i)*.32)]);o.push(new vi(s,4,.024,4,!1).toNonIndexed())}const t=It(o,!1);return t.computeVertexNormals(),oi(t,1)}function z1(){const o=[];for(let t=0;t<4;t++){const n=t/4*Math.PI*2+.22,i=Vn(.56,.64,.32,.12,1,2,.38);i.rotateX(1.12+t%2*.14),i.rotateZ((t%3-1)*.12),i.rotateY(n),i.translate(.03+Math.sin(n)*.08,.92+t%2*.04,.02+Math.cos(n)*.08),o.push(i)}for(let t=0;t<2;t++){const n=Vn(.6,.62,.24,.14,1,2,.5);n.rotateX(.68),n.rotateY(t*Math.PI*.65+.4),n.translate(.03,.96,.02),o.push(n)}const e=It(o,!1);return e.computeVertexNormals(),oi(e,1)}function G1(){const o=new hi([new b(0,0,0),new b(.06,.38,.03),new b(.14,.78,-.02),new b(.18,1,0)]),e=new vi(o,6,.052,5,!1).toNonIndexed();return e.computeVertexNormals(),oi(e,1)}function H1(){const o=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=Vn(.44,.92,.42,.14,1,3,.28);i.rotateX(1.06+t%2*.16),i.rotateZ((t%2*2-1)*.1),i.rotateY(n),i.translate(.18,.98,0),o.push(i)}for(let t=0;t<3;t++){const n=t/3*Math.PI*2+.42,i=Vn(.36,.74,.3,.12,1,3,.45);i.rotateX(.62+t%2*.12),i.rotateY(n),i.translate(.18,1,0),o.push(i)}const e=It(o,!1);return e.computeVertexNormals(),oi(e,1)}function V1(){const o=[];for(let t=0;t<3;t++){const n=t/3*Math.PI*2,i=Vn(.6,.72,.34,.12,1,2,.38);i.rotateX(.95+t%2*.18),i.rotateY(n),o.push(i)}for(let t=0;t<2;t++){const n=t*Math.PI+.52,i=Vn(.48,.68,.22,.1,1,2,.52);i.rotateX(.52),i.rotateY(n),o.push(i)}const e=It(o,!1);return e.computeVertexNormals(),oi(e,1)}function W1(){const o=[],e=new Ps(.48,0);e.scale(1.2,.65,1),e.translate(0,.22,0),o.push(Md(e,3885110));const t=new Ps(.32,0);t.scale(1,.72,1.1),t.translate(.38,.14,.24),o.push(Md(t,2774062));const n=It(o,!1);return n.computeVertexNormals(),n}function X1(){const o=[];for(let n=0;n<4;n++){const i=n/4*Math.PI*2,s=Vn(.48,1,.44,.15,1,3,.3);s.rotateX(.86+n%2*.14),s.rotateY(i),o.push(s)}const e=Vn(.38,.8,.26,.12,1,2,.48);e.rotateX(.44),e.rotateY(.6),o.push(e);const t=It(o,!1);return t.computeVertexNormals(),oi(t,1)}function q1(){const o=[];for(let t=0;t<3;t++){const n=t/3*Math.PI*2+.2,i=Vn(.72,.96,.24,.1,1,2,.45);i.rotateX(.36),i.rotateY(n),o.push(i)}const e=It(o,!1);return e.computeVertexNormals(),oi(e,1)}function Y1(){const o=[],e=new Ps(.42,0);e.scale(1.25,.56,.95),e.translate(0,.16,0),o.push(e.index?e.toNonIndexed():e);const t=new Ps(.28,0);t.scale(.9,.68,1.15),t.rotateY(.85),t.translate(.38,.11,-.22),o.push(t.index?t.toNonIndexed():t);const n=It(o,!1);return n.computeVertexNormals(),oi(n,1)}function Wf(){const o=[];for(let t=0;t<6;t++){const n=Vn(.46,.72,.34,.16,2,3,.42);n.rotateX(1.02+t%2*.14),n.rotateY(t/6*Math.PI*2),o.push(n)}for(let t=0;t<3;t++){const n=Vn(.28,.56,.18,.1,2,2,.55);n.rotateX(.44),n.rotateY(t/3*Math.PI*2+.5),o.push(n)}const e=It(o,!1);return e.computeVertexNormals(),oi(e,1)}function j1(){const o=[],e=new Qt(.12,.24,.86,6,1);e.translate(0,.43,0);const t=e.toNonIndexed(),n=t.attributes.uv;if(n)for(let s=0;s<n.count;s++)n.setXY(s,.48+n.getX(s)*.04,.26+n.getY(s)*.24);o.push(t);for(let s=0;s<5;s++){const a=s/5*Math.PI*2,r=Vn(1.18,1.08,.36,.16,2,3,.52);r.rotateX(1.16+s%2*.08),r.rotateY(a),r.translate(0,.82,0),o.push(r)}for(let s=0;s<3;s++){const a=s/3*Math.PI*2+.45,r=Vn(.72,.78,-.22,.12,2,2,.65);r.rotateX(.54),r.rotateY(a),r.translate(0,.86,0),o.push(r)}const i=It(o,!1);return i.computeVertexNormals(),oi(i,1)}function Xf(){const o=[];for(let i=0;i<5;i++){const s=i/5*Math.PI*2,a=Vn(.96,1.12,.34,.14,1,2,.45);a.rotateX(1.36+i%2*.08),a.rotateZ((i%2*2-1)*.1),a.rotateY(s),a.translate(0,.02,0),o.push(a)}for(let i=0;i<3;i++){const s=i/3*Math.PI*2+.42,a=Vn(.88,.92,.24,.12,1,2,.58);a.rotateX(.86),a.rotateY(s),a.translate(0,.11,0),o.push(a)}const e=It(o,!1);e.computeVertexNormals(),oi(e,1);const t=[];for(let i=0;i<5;i++){const s=i/5*Math.PI*2+.26,a=Vn(.88,.98,.38,.12,1,2,-.35);a.rotateX(1.62+i%2*.08),a.rotateY(s),a.translate(0,-.02,0),t.push(a)}const n=It(t,!1);return n.computeVertexNormals(),oi(n,-1),{outer:e,under:n}}function K1(o,e,t,n){const i=new Mh(1,2),s=i.attributes.position,a=s.count,r=new Float32Array(a*3),l=new ne(2055213),c=new ne(2783806),h=new ne(3817286),u=new ne(1974824),d=new ne;for(let f=0;f<a;f++){let g=s.getX(f),v=s.getY(f),m=s.getZ(f);const p=Xr(g*2.4+o*3.1,v*2.2-o,m*2.4+o*1.9,4,2.15,.52)*2-.85,_=Kt(g*5.8+o*7.3,v*4.8,m*5.8);if(v>.15){const y=.24+(v-.15)*.22+.08*p,x=1+.19*p;g*=e*x,m*=t*x,v=n*y,d.copy(l).lerp(c,Math.max(0,_)*.68)}else{const y=Math.min(1,(.15-v)/1.15),x=Math.pow(1-y*.86,1.25),T=Math.sin(y*Math.PI*5+_*1.6)*.09,w=1+.34*p+.16*_+T;g*=e*x*w,m*=t*x*w,v=-n*y*(.85+.25*Math.abs(p)),d.copy(h).lerp(u,y*.72+Math.max(0,-p)*.28)}s.setXYZ(f,g,v,m),r[f*3]=d.r,r[f*3+1]=d.g,r[f*3+2]=d.b}return i.setAttribute("color",new xt(r,3)),i.computeVertexNormals(),i}function Ih(o,e,t,n,i,s,a,r,l,c,h){const u=Js(o,e,t,n,-.0025*Te,c,h).pos,d=Js(o,e,i,s,-.0025*Te,c,h).pos,f=u.clone().add(d).multiplyScalar(.5).normalize(),g=u.clone().lerp(d,.26).normalize().multiplyScalar(o+a*.74),v=f.clone().multiplyScalar(o+a),m=u.clone().lerp(d,.74).normalize().multiplyScalar(o+a*.76),p=new hi([u,g,v,m,d]),_=new vi(p,24,r,8,!1),y=_.attributes.position,x=_.attributes.normal,T=new Float32Array(y.count*3),w=new ne(3290942),E=new ne(2316332),A=new ne(3700796),M=new b,S=new b,C=new ne;for(let R=0;R<y.count;R++){M.fromBufferAttribute(y,R),S.fromBufferAttribute(x,R);const N=Kt(M.x*220+l*3.7,M.y*220,M.z*220-l),P=Kt(M.x*520,M.y*520,M.z*520),k=M.clone().normalize(),z=Math.max(0,S.dot(k));M.addScaledVector(S,r*(.36*N+.16*P)),y.setXYZ(R,M.x,M.y,M.z),C.copy(w).lerp(E,Math.pow(z,1.25)),z>.45&&P>.2&&C.lerp(A,.48),T[R*3]=C.r,T[R*3+1]=C.g,T[R*3+2]=C.b}return _.setAttribute("color",new xt(T,3)),_.computeVertexNormals(),{geo:_,curve:p,apex:v}}function Z1(o){const e=new Qt(.12,1,1,8,6);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new ne(2764600),s=new ne(2381356),a=new ne(3568190),r=new ne;for(let l=0;l<t.count;l++){let c=t.getX(l);const h=t.getY(l);let u=t.getZ(l);const d=Kt(c*3.8+o*2.1,h*4.5,u*3.8-o),f=1+.35*d;c*=f,u*=f,t.setXYZ(l,c,h,u),r.copy(i).lerp(s,H.smoothstep(h,.22,.72)),h>.72&&d>.1&&r.lerp(a,.45),n[l*3]=r.r,n[l*3+1]=r.g,n[l*3+2]=r.b}return e.setAttribute("color",new xt(n,3)),e.computeVertexNormals(),e}function nh(o,e=.66){const t=o?.material;return!t||!t.vertexShader||!t.fragmentShader||t.fragmentShader.includes("_waterEdgeFeather")||(t.vertexShader=`varying vec2 vWaterDiscUv;
`+t.vertexShader.replace("void main() {",`void main() {
				vWaterDiscUv = uv;`),t.fragmentShader=`varying vec2 vWaterDiscUv;
`+t.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, alpha );",`float _waterEdgeDist = length(vWaterDiscUv - vec2(0.5)) * 2.0;
				float _waterEdgeFeather = 1.0 - smoothstep(${e.toFixed(2)}, 1.0, _waterEdgeDist);
				gl_FragColor = vec4( outgoingLight, alpha * _waterEdgeFeather );`),t.transparent=!0,t.depthWrite=!1,t.needsUpdate=!0),o}function $1(o,e){const t=[],n=[],i=new b,s=new b,a=new b,r=new ne(4974314),l=new ne(416888),c=new ne(1459256),h=new ne(3172928);o.forEach((y,x)=>{const T=y.length,w=e[x]||.008*Te,E=[],A=[],M=[],S=[],C=[],R=[],N=[],P=[],k=[];let z=0;for(let L=0;L<T;L++){const W=y[L],te=y[Math.max(0,L-1)],j=y[Math.min(T-1,L+1)];L>0&&(z+=W.pos.distanceTo(te.pos)),i.copy(j.pos).sub(te.pos).normalize(),a.copy(W.normal),s.crossVectors(i,a).normalize();const be=1+.22*Math.sin(L*.45+x),Y=w*be,fe=Y*.28,pe=z*28,he=W.pos.clone().addScaledVector(s,-Y),J=W.pos.clone().addScaledVector(a,12e-5),de=W.pos.clone().addScaledVector(s,Y),ge=W.pos.clone().addScaledVector(s,-(Y+fe)).addScaledVector(a,14e-5),Ae=W.pos.clone().addScaledVector(s,Y+fe).addScaledVector(a,14e-5);E.push(he.x,he.y,he.z,J.x,J.y,J.z,de.x,de.y,de.z),A.push(0,pe,.5,pe,1,pe),M.push(r.r,r.g,r.b,l.r,l.g,l.b,r.r,r.g,r.b),S.push(ge.x,ge.y,ge.z,he.x,he.y,he.z),C.push(0,pe,1,pe),R.push(h.r,h.g,h.b,c.r,c.g,c.b),N.push(de.x,de.y,de.z,Ae.x,Ae.y,Ae.z),P.push(0,pe,1,pe),k.push(c.r,c.g,c.b,h.r,h.g,h.b)}const F=()=>{const L=[];for(let te=0;te<T-1;te++){const j=te*3,be=(te+1)*3;L.push(j,j+1,be,j+1,be+1,be),L.push(j+1,j+2,be+1,j+2,be+2,be+1)}const W=new At;return W.setAttribute("position",new Nt(E,3)),W.setAttribute("uv",new Nt(A,2)),W.setAttribute("color",new Nt(M,3)),W.setIndex(L),W.computeVertexNormals(),W.toNonIndexed()},U=(L,W,te)=>{const j=[];for(let Y=0;Y<T-1;Y++){const fe=Y*2,pe=fe+1,he=fe+2,J=fe+3;j.push(fe,pe,he,pe,J,he)}const be=new At;return be.setAttribute("position",new Nt(L,3)),be.setAttribute("uv",new Nt(W,2)),be.setAttribute("color",new Nt(te,3)),be.setIndex(j),be.computeVertexNormals(),be.toNonIndexed()};t.push(F()),n.push(U(S,C,R),U(N,P,k))});const u=It(t,!1),d=It(n,!1),f=Ua(),g=f?f.clone():null;g&&(g.wrapS=Nn,g.wrapT=Nn,g.repeat.set(2,6),g.needsUpdate=!0);const v=new ze({color:16777215,vertexColors:!0,normalMap:g,normalScale:new Oe(.42,.42),emissive:35e3,emissiveIntensity:0,roughness:.09,metalness:.62,transparent:!0,opacity:.9,depthWrite:!1}),m=new ze({color:16777215,vertexColors:!0,emissive:62975,emissiveIntensity:0,roughness:.42,transparent:!0,opacity:.88,depthWrite:!1}),p=new Ve(u,v);p.name="Pandora_Global_Rivers_Water",p.receiveShadow=!0;const _=new Ve(d,m);return _.name="Pandora_Global_Rivers_Banks",_.receiveShadow=!0,{waterMesh:p,bankMesh:_,waterMat:v,bankMat:m,riverNormalMap:g}}function Q1(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512),i=n.data;for(let a=0;a<512;a++)for(let r=0;r<512;r++){const l=Kt(r*.18,a*.18,2.3)*.5+.5,c=V(r,a,37),h=Math.floor(H.clamp((.76+.24*l+.16*(c-.5))*255,130,255)),u=(a*512+r)*4;i[u]=h,i[u+1]=h,i[u+2]=h,i[u+3]=255}t.putImageData(n,0,0);const s=new fn(e);return s.colorSpace=Xt,s.wrapS=Nn,s.wrapT=Nn,s.repeat.set(96,48),s.anisotropy=8,s}function J1(o,e){const i=document.createElement("canvas");i.width=1024,i.height=512;const s=i.getContext("2d"),a=s.createImageData(1024,512),r=a.data,l=Tt[3].capDir,c=Tt[4].capDir,h=new b;for(let d=0;d<512;d++){const f=(d+.5)/512*Math.PI,g=Math.sin(f),v=Math.cos(f);for(let m=0;m<1024;m++){const p=(m+.5)/1024*Math.PI*2,_=-Math.cos(p)*g,y=Math.sin(p)*g;h.set(_,v,y).applyQuaternion(o);const{cont:x,reefFactor:T,nation:w,borderMountain:E}=Ph(h.x,h.y,h.z,e,4);let A=0,M=0,S=0;if(w==="ash"&&x>0)A=0,M=0,S=0;else if(w==="forest"&&x>0){let R=1-Math.abs(Kt(_*24+1,v*24,y*24));R=Math.pow(Math.max(0,R),18);const N=V(Math.floor(_*360),Math.floor(v*360),Math.floor(y*360))>.986?.55:0,P=Math.min(.68,R*.58+N)*(1-Math.min(.9,E));Kt(_*5+9,v*5,y*5)>.1?(A=P*.06,M=P*.78,S=P*.85):(A=P*.58,M=P*.18,S=P*.85);const z=Math.acos(H.clamp(_*l.x+v*l.y+y*l.z,-1,1));if(z<.032){const U=Math.pow(1-z/.032,1.6);A=Math.min(1,A+U*.78),M=Math.min(1,M+U*.38),S=Math.min(1,S+U*.92)}const F=Math.acos(H.clamp(_*c.x+v*c.y+y*c.z,-1,1));if(F<.032){const U=Math.pow(1-F/.032,1.7);A=Math.min(1,A+U*.85),M=Math.min(1,M+U*.22),S=Math.min(1,S+U*.72)}}else if(x<=0){const R=Math.max(H.smoothstep(x,-.11,-.002)*.55,T*.58)*.58;A=R*.05,M=R*.75,S=R*.85}const C=(d*1024+m)*4;r[C]=Math.min(255,A*255),r[C+1]=Math.min(255,M*255),r[C+2]=Math.min(255,S*255),r[C+3]=255}}s.putImageData(a,0,0);const u=new fn(i);return u.colorSpace=Xt,u}function ey(o,e,t,n,i){const s=Xi(e.capDir),a=Js(o,s,0,0,-.001,t,n),r=new Ut;r.name="Pandora_Landmark_Hometree",r.position.copy(a.pos),r.quaternion.setFromUnitVectors(Sn,a.normal);const l=Eh(),c=Th(),h=new ze({color:6047284,map:l.map,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:337972,emissiveIntensity:0,roughness:.9});i.push({mat:h,dayColor:6047284,nightColor:2239556,dayEmissive:337972,nightEmissive:803410,dayEI:0,nightEI:.45});const u=.56*Te,d=new Qt(.065*Te,.14*Te,u,14,14,!0);d.translate(0,u*.5,0);const f=d.attributes.position;for(let A=0;A<f.count;A++){const M=f.getX(A),S=f.getY(A),C=f.getZ(A),R=S/u,N=R*2.4,P=1+.24*Math.sin(Math.atan2(C,M)*6+N),k=R<.25?1+Math.pow((.25-R)/.25,1.5)*.65:1,z=(M*Math.cos(N*.35)-C*Math.sin(N*.35))*P*k,F=(M*Math.sin(N*.35)+C*Math.cos(N*.35))*P*k;f.setXYZ(A,z,S,F)}d.computeVertexNormals();const g=new Ve(d,h);g.castShadow=!0,g.receiveShadow=!0,r.add(g);for(let A=0;A<14;A++){const M=A/14*Math.PI*2+(V(A,3,7)-.5)*.15,S=(.14+V(A,8,2)*.09)*Te,C=(.12+V(A,5,4)*.18)*Te,R=new hi([new b(Math.cos(M)*.06*Te,C,Math.sin(M)*.06*Te),new b(Math.cos(M)*S*.62,C*.62,Math.sin(M)*S*.62),new b(Math.cos(M)*S,-.015*Te,Math.sin(M)*S)]),N=new Ve(new vi(R,10,.012*Te,6,!1),h);N.castShadow=!0,N.receiveShadow=!0,r.add(N)}const v=new ze({color:3901e3,map:c.canopy.map,roughnessMap:c.canopy.roughnessMap,emissiveMap:c.canopy.emissiveMap,emissive:407618,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});i.push({mat:v,dayColor:3901e3,nightColor:1068118,dayEmissive:407618,nightEmissive:557718,dayEI:0,nightEI:.85});const m=new ze({color:4622420,map:c.canopy.map,roughnessMap:c.canopy.roughnessMap,emissiveMap:c.canopy.emissiveMap,emissive:65512,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});i.push({mat:m,dayColor:4622420,nightColor:1366248,dayEmissive:1853990,nightEmissive:63743,dayEI:0,nightEI:2.25,pulsePhase:.6});const p=new ze({color:3877405,emissive:16755256,emissiveIntensity:0,roughness:.5});i.push({mat:p,dayColor:3877405,nightColor:16762980,dayEmissive:2759184,nightEmissive:16751144,dayEI:0,nightEI:2.1,pulsePhase:1.4});const _=[.34*Te,.28*Te,.21*Te,.14*Te],y=[.34*Te,.44*Te,.53*Te,.61*Te],{outer:x,under:T}=Xf(),w=Po(c.canopy.map);for(let A=0;A<_.length;A++){const M=_[A],S=y[A],C=new Ve(x,v);C.position.set(0,S,0),C.scale.set(M,M*.9,M),C.castShadow=!0,C.receiveShadow=!0,C.customDepthMaterial=w,r.add(C);const R=new Ve(T,m);R.position.set(0,S-.004*Te,0),R.scale.set(M*.98,M*.9,M*.98),R.receiveShadow=!0,r.add(R)}const E=new Ve(new ln(.055*Te,12,8),p);return E.position.set(0,.06*Te,0),r.add(E),{group:r,anchorDir:a.normal,anchorPos:a.pos}}function ty(o,e,t,n,i){const s=Xi(e.capDir),a=Js(o,s,0,0,-5e-4,t,n),r=new Ut;r.name="Pandora_Landmark_TreeOfSouls";const l=Ko(),c=new ze({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:2757704,emissiveIntensity:0,roughness:.85});i.push({mat:c,dayColor:16777215,nightColor:10134724,dayEmissive:1054752,nightEmissive:2497092,dayEI:0,nightEI:.45});for(let T=0;T<7;T++){const w=T/7*Math.PI*2,E=w+Math.PI*.88,A=.072*bt,{geo:M}=Ih(o,s,Math.cos(w)*A,Math.sin(w)*A,Math.cos(E)*A,Math.sin(E)*A,(.145+T%3*.025)*Te,.011*Te,50+T,t,n),S=new Ve(M,c);S.castShadow=!0,S.receiveShadow=!0,r.add(S)}const h=new Ut;h.position.copy(a.pos),h.quaternion.setFromUnitVectors(Sn,a.normal),r.add(h);const u=new ze({color:2975798,emissive:9058559,emissiveIntensity:0,roughness:.72});i.push({mat:u,dayColor:2975798,nightColor:1976408,dayEmissive:1194016,nightEmissive:7746303,dayEI:0,nightEI:1.45,pulsePhase:2.1}),h.add(new Ve(new Qt(.18*Te,.2*Te,.004*Te,24),u));const d=new ze({color:10392232,emissive:8409296,emissiveIntensity:0,roughness:.7});i.push({mat:d,dayColor:9274e3,nightColor:12759280,dayEmissive:4734036,nightEmissive:9459967,dayEI:0,nightEI:1.1});const f=.25*Te,g=new Qt(.024*Te,.055*Te,f,10,8);g.translate(0,f*.5,0),h.add(new Ve(g,d));const v=new ln(.13*Te,12,8);v.scale(1.25,.35,1.25),v.translate(0,f*.96,0),h.add(new Ve(v,d));const m=340,p=new Qt(.0014*Te,5e-4*Te,1,4,1);p.translate(0,-.5,0);const _=new ze({color:14076140,emissive:15120639,emissiveIntensity:0,roughness:.28,transparent:!0,opacity:.92});i.push({mat:_,dayColor:14669034,nightColor:16777215,dayEmissive:12560604,nightEmissive:14456575,dayEI:0,nightEI:2.35,pulsePhase:.2});const y=new St(p,_,m);y.name="Pandora_TreeOfSouls_Filaments";const x=new Wt;for(let T=0;T<m;T++){const w=V(T,4,17)*Math.PI*2,E=(.015+Math.sqrt(V(T,8,11))*.135)*Te,A=(.08+V(T,3,19)*.13)*Te;x.position.set(Math.cos(w)*E,f*.95,Math.sin(w)*E),x.rotation.set((V(T,1,5)-.5)*.14,w,(V(T,2,7)-.5)*.14),x.scale.set(1,A,1),x.updateMatrix(),y.setMatrixAt(T,x.matrix)}return y.instanceMatrix.needsUpdate=!0,h.add(y),{group:r,anchorDir:a.normal,anchorPos:a.pos}}function ny(o,e,t,n,i,s,a){const r=Xi(e.capDir),l=new Ut;l.name="Pandora_Landmark_HallelujahMountains";const c=Ko(),h=new ze({vertexColors:!0,roughnessMap:c.roughnessMap,bumpMap:c.bumpMap,bumpScale:.05,emissive:404528,emissiveIntensity:0,roughness:.86,metalness:.06});i.push({mat:h,dayColor:16777215,nightColor:6455448,dayEmissive:795668,nightEmissive:669766,dayEI:0,nightEI:.52});const u=new dn({color:new ne(.85,.96,1),transparent:!0,opacity:.56,side:wt,depthWrite:!1});i.push({mat:u,dayColorRGB:[.82,.95,1],nightColorRGB:[.42,1.75,2.3],isWaterfall:!0});const d=[],f=32;for(let m=0;m<f;m++){const p=m===0?0:(.03+Math.sqrt(V(m,4,11))*.14)*bt,_=m*2.39996+V(m,7,3)*.45,y=(m===0?.24:.078+V(m,9,2)*.21)*Te,x=Js(o,r,Math.cos(_)*p,Math.sin(_)*p,y,t,n),T=(m===0?.095:.036+V(m,2,5)*.056)*Te,w=T*(.72+V(m,5,8)*.45),E=(m===0?.145:.052+V(m,6,1)*.082)*Te,A=K1(m+1,T,w,E),M=new Ve(A,h);M.position.copy(x.pos),M.quaternion.setFromUnitVectors(Sn,x.normal),M.rotateY(V(m,1,8)*Math.PI*2),M.castShadow=m<16,M.receiveShadow=!0,l.add(M),d.push({pos:x.pos,normal:x.normal,rx:T,rz:w,h:E,alt:y});for(let S=0;S<4;S++){const C=V(m,S,14)*Math.PI*2,R=.25+V(m,S,2)*.55,N=new b(Math.cos(C)*T*R,-E*.34,Math.sin(C)*w*R).applyQuaternion(M.quaternion);a.push({pos:x.pos.clone().add(N),normal:x.normal,length:(.016+V(m,S,8)*.036)*Te})}if(m<15){const S=y+.015*Te,C=(.0065+V(m,12,4)*.0075)*Te,R=new hs(C,S,2,10),N=R.attributes.position;for(let U=0;U<N.count;U++){const L=(N.getY(U)+S*.5)/S;N.setZ(U,Math.sin((1-L)*Math.PI*.5)*.014*Te)}R.computeVertexNormals();const P=V(m,3,6)*Math.PI*2,k=new ut().setFromUnitVectors(Sn,x.normal),z=new b(Math.cos(P)*T*.72,0,Math.sin(P)*w*.72).applyQuaternion(k),F=new Ve(R,u);F.position.copy(x.pos).add(z).addScaledVector(x.normal,-S*.5+E*.16),F.quaternion.copy(k),F.rotateY(P+Math.PI*.5),l.add(F),s.push({mesh:F,material:u,phase:m*1.17})}}const g=new ze({color:3889196,emissive:59600,emissiveIntensity:0,roughness:.55});i.push({mat:g,dayColor:3889196,nightColor:940132,dayEmissive:1718294,nightEmissive:1114072,dayEI:0,nightEI:1.35});const v=[];for(let m=0;m<f;m++){const p=d[m];let _=-1,y=.25*Te;for(let x=m+1;x<f;x++){const T=d[x],w=p.pos.distanceTo(T.pos);w>(p.rx+T.rx)*.85&&w<y&&(y=w,_=x)}if(_>=0){const x=d[_],T=p.pos.clone().add(x.pos).multiplyScalar(.5);T.add(T.clone().normalize().multiplyScalar(-y*.18));const w=new hi([p.pos.clone(),T,x.pos.clone()]);v.push(new vi(w,10,.0014*Te,5,!1).toNonIndexed())}}if(v.length>0){const m=new Ve(It(v,!1),g);m.name="Pandora_Hallelujah_VineBridges",l.add(m)}return{group:l,islandsData:d,anchorDir:r.upDir,anchorPos:r.upDir.clone().multiplyScalar(o)}}function iy(o,e,t,n,i,s){const a=Xi(e.capDir),r=new Ut;r.name="Pandora_Landmark_IkranRookery";const l=Ko(),c=new ze({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:407620,emissiveIntensity:0,roughness:.88});i.push({mat:c,dayColor:16777215,nightColor:6453906,dayEmissive:1058840,nightEmissive:672850,dayEI:0,nightEI:.42});const h=[];return[[-.08*bt,-.05*bt,.08*bt,.05*bt,.21*Te,.015*Te],[-.06*bt,.07*bt,.07*bt,-.06*bt,.24*Te,.016*Te],[-.1*bt,.01*bt,.02*bt,.09*bt,.17*Te,.013*Te],[.01*bt,-.09*bt,.09*bt,.02*bt,.18*Te,.013*Te],[-.09*bt,-.02*bt,.05*bt,.07*bt,.15*Te,.012*Te],[-.04*bt,-.08*bt,.08*bt,-.02*bt,.16*Te,.011*Te],[-.07*bt,.04*bt,.03*bt,-.07*bt,.19*Te,.012*Te],[-.03*bt,.08*bt,.09*bt,.06*bt,.14*Te,.011*Te]].forEach(([d,f,g,v,m,p],_)=>{const{geo:y,curve:x,apex:T}=Ih(o,a,d,f,g,v,m,p,10+_,t,n),w=new Ve(y,c);w.name=`Pandora_IkranRookery_Arch_${_+1}`,r.add(w),h.push({apex:T,normal:T.clone().normalize()});for(let E=0;E<14;E++){const A=x.getPoint(.2+E/13*.6),M=A.clone().normalize();s.push({pos:A.addScaledVector(M,-p*.65),normal:M,length:(.014+V(E,_,19)*.026)*Te})}}),{group:r,archCenters:h,anchorDir:a.upDir,anchorPos:a.upDir.clone().multiplyScalar(o)}}function sy(o,e,t,n,i){const s=Xi(e.capDir),a=new Ut;a.name="Pandora_Landmark_MushroomGeysers";const r=new ze({color:3880242,emissive:55528,emissiveIntensity:0,roughness:.88});i.push({mat:r,dayColor:3880242,nightColor:1980488,dayEmissive:926246,nightEmissive:59647,dayEI:0,nightEI:1.85});const l=14,c=new Qt(.18,.95,1,9,1);c.translate(0,.5,0);const h=new St(c,r,l);h.name="Pandora_Geyser_Vents";const u=[],d=new Wt;for(let A=0;A<l;A++){const M=A/l*Math.PI*2+V(A,3,7)*.4,S=(.014+V(A,9,2)*.068)*bt,C=Js(o,s,Math.cos(M)*S,Math.sin(M)*S,-5e-4,t,n),R=(.008+V(A,2,11)*.006)*Te,N=(.014+V(A,5,13)*.012)*Te;d.position.copy(C.pos),d.quaternion.setFromUnitVectors(Sn,C.normal),d.scale.set(R,N,R),d.updateMatrix(),h.setMatrixAt(A,d.matrix),u.push({basePos:C.pos.clone().addScaledVector(C.normal,N*.95),normal:C.normal.clone(),phase:V(A,6,4)*Math.PI*2,maxHeight:(.065+V(A,8,9)*.055)*Te})}h.instanceMatrix.needsUpdate=!0,a.add(h);const f=22,g=l*f,v=new Float32Array(g*3),m=new Float32Array(g*3);for(let A=0;A<g;A++)m[A*3]=.78,m[A*3+1]=.94,m[A*3+2]=1;const p=new At;p.setAttribute("position",new xt(v,3)),p.setAttribute("color",new xt(m,3));const _=document.createElement("canvas");_.width=64,_.height=64;const y=_.getContext("2d"),x=y.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(255, 255, 255, 0.85)"),x.addColorStop(.45,"rgba(180, 245, 255, 0.42)"),x.addColorStop(1,"rgba(0, 0, 0, 0.0)"),y.fillStyle=x,y.fillRect(0,0,64,64);const T=new fn(_);T.needsUpdate=!0;const w=new Ci({size:5.5,map:T,vertexColors:!0,transparent:!0,opacity:.48,depthWrite:!1,blending:Rn,sizeAttenuation:!0}),E=new Pi(p,w);return E.name="Pandora_Geyser_Plumes",E.frustumCulled=!1,a.add(E),{group:a,geyserEmitters:u,plumeGeo:p,plumeMat:w,puffsPerGeyser:f,anchorDir:s.upDir,anchorPos:s.upDir.clone().multiplyScalar(o)}}function oy(o,e,t,n){const i=new Ut;i.name="Pandora_Inland_Lakes_And_Lilies";const s=[],a=[],r=[],l=[],c=new Wt;qr.forEach((A,M)=>{const S=Xi(A.dir),C=o+A.waterElev,R=8,N=20,P=[],k=[];for(let F=0;F<=R;F++){const L=F/R*A.angRad*.82;for(let W=0;W<=N;W++){const te=W/N*Math.PI*2,j=S.upDir.clone().addScaledVector(S.e1,Math.cos(te)*L).addScaledVector(S.e2,Math.sin(te)*L).normalize();P.push(j.x*C,j.y*C,j.z*C)}}for(let F=0;F<R;F++)for(let U=0;U<N;U++){const L=F*(N+1)+U,W=L+(N+1);k.push(L,L+1,W,L+1,W+1,W)}const z=new At;z.setAttribute("position",new Nt(P,3)),z.setIndex(k),z.computeVertexNormals(),s.push(z.toNonIndexed());for(let F=0;F<108;F++){const U=V(F,M+3,19)*Math.PI*2,L=Math.sqrt(V(F,M+7,11))*A.angRad*.72,W=S.upDir.clone().addScaledVector(S.e1,Math.cos(U)*L).addScaledVector(S.e2,Math.sin(U)*L).normalize(),te=(.0045+V(F,M+1,5)*.006)*Te;c.position.copy(W).multiplyScalar(C+18e-5),c.quaternion.setFromUnitVectors(Sn,W),c.rotateY(V(F,2,9)*Math.PI*2),c.scale.set(te,te,te),c.updateMatrix(),a.push(c.matrix.clone());const j=te*.65;c.position.copy(W).multiplyScalar(C+38e-5),c.scale.set(j,j,j),c.updateMatrix(),F%2===0?r.push(c.matrix.clone()):l.push(c.matrix.clone())}});const h=new ze({color:955050,emissive:35e3,emissiveIntensity:0,roughness:.08,metalness:.62,transparent:!0,opacity:.88,depthWrite:!1});n.push({mat:h,dayColor:955050,nightColor:279638,dayEmissive:546924,nightEmissive:39116,dayEI:0,nightEI:1.05});const u=new Ve(It(s,!1),h);u.name="Pandora_Global_Inland_Lakes",i.add(u);const d=new Qt(1,.92,.08,12,1,!1,.25,Math.PI*1.85);d.translate(0,.04,0);const f=new ze({color:2387512,emissive:55448,emissiveIntensity:0,roughness:.52});n.push({mat:f,dayColor:2387512,nightColor:803904,dayEmissive:1062936,nightEmissive:57498,dayEI:0,nightEI:1.35,pulsePhase:1.3});const g=new St(d,f,a.length);g.name="Pandora_Giant_WaterLilies_Pads",g.frustumCulled=!1,a.forEach((A,M)=>g.setMatrixAt(M,A)),g.instanceMatrix.needsUpdate=!0,i.add(g);const v=Th(),m=Po(v.mushroom.map),p=Wf(),_=new ze({color:16748228,map:v.mushroom.map,roughnessMap:v.mushroom.roughnessMap,emissiveMap:v.mushroom.emissiveMap,emissive:16726200,emissiveIntensity:0,roughness:.42,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt}),y=new ze({color:8120048,map:v.mushroom.map,roughnessMap:v.mushroom.roughnessMap,emissiveMap:v.mushroom.emissiveMap,emissive:62975,emissiveIntensity:0,roughness:.42,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});n.push({mat:_,dayColor:16748228,nightColor:16736976,dayEmissive:4726840,nightEmissive:16724660,dayEI:0,nightEI:2.35,pulsePhase:.4}),n.push({mat:y,dayColor:8120048,nightColor:4784127,dayEmissive:1853520,nightEmissive:62975,dayEI:0,nightEI:2.35,pulsePhase:2});const x=new St(p,_,r.length);x.name="Pandora_Giant_WaterLilies_PinkFlowers",x.frustumCulled=!1,x.castShadow=!0,x.receiveShadow=!0,x.customDepthMaterial=m,r.forEach((A,M)=>x.setMatrixAt(M,A)),x.instanceMatrix.needsUpdate=!0;const T=new St(p,y,l.length);T.name="Pandora_Giant_WaterLilies_TurqFlowers",T.frustumCulled=!1,T.castShadow=!0,T.receiveShadow=!0,T.customDepthMaterial=m,l.forEach((A,M)=>T.setMatrixAt(M,A)),T.instanceMatrix.needsUpdate=!0,i.add(x,T);const w=[],E=Ua();return qr.forEach((A,M)=>{const S=new Ta(new Cs(A.angRad*o*.78,28),{textureWidth:256,textureHeight:256,waterNormals:E,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:683130,distortionScale:.36,size:3,clipBias:.002,alpha:.88,fog:!0});nh(S,.65),S.name=`Pandora_Inland_Lake_Water_${M}`,S.position.copy(A.dir).multiplyScalar(o+A.waterElev+18e-5),S.quaternion.setFromUnitVectors(new b(0,0,1),A.dir),S.visible=!1,i.add(S),w.push({water:S,centerLocal:S.position.clone(),isOceanSurface:!1})}),{group:i,lakeWaters:w}}function ay(o){const e=o.localRadius,t=o.capLocalDir?o.capLocalDir.clone().normalize():new b(0,1,0),n=new ut().setFromUnitVectors(Sn,t),i=rl([t.x,t.y,t.z]),s={qCap:n,sphereLandmarks:i},a=new Ut;a.name="Pandora_Global_360_World";const r=[],l=(Se,Ge,Dt)=>mi(Se,Ge,Dt,n,i,4),c=new ln(e,192,128),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),f=new Float32Array(u),g=new Float32Array(u*3),v=new ne(270648),m=new ne(2274738),p=new ne(14208416),_=new ne(2911794),y=new ne(9213536),x=new ne(1793065),T=new ne(3889190),w=new ne(3817024),E=new ne(1315349),A=new ne,M=new b;for(let Se=0;Se<u;Se++){M.set(h.getX(Se),h.getY(Se),h.getZ(Se)).normalize();const{cont:Ge,highlandRidge:Dt,forestFactor:st,waterFactor:Vt,ashFactor:on,reefFactor:Zt,borderMountain:jt,elev:Bt,nation:yt}=mi(M.x,M.y,M.z,n,i,4);if(h.setXYZ(Se,M.x*(e+Bt),M.y*(e+Bt),M.z*(e+Bt)),f[Se]=on*H.smoothstep(Ge,-.01,.04),g[Se*3]=Math.max(0,st),g[Se*3+1]=Math.max(0,Vt),g[Se*3+2]=Math.max(0,on),Ge<=0){const Qe=Math.max(H.smoothstep(Ge,-.24,0),Zt*.78);A.copy(v).lerp(m,Qe)}else if(yt==="water"){const Qe=H.smoothstep(Ge,.015,.055);A.copy(p).lerp(_,Qe)}else{const Qe=Kt(M.x*22+3,M.y*22,M.z*22)*.5+.5;A.copy(y).lerp(x,H.smoothstep(Ge,0,.075)),A.lerp(T,Qe*.52);const Ot=Math.min(.92,Dt*3.8+jt*.85);Ot>.02&&A.lerp(w,Ot),(on>.05||yt==="ash")&&A.lerp(E,yt==="ash"?.96:Math.min(1,on*1.15))}d[Se*3]=A.r,d[Se*3+1]=A.g,d[Se*3+2]=A.b}c.setAttribute("color",new xt(d,3)),c.setAttribute("aAshMask",new xt(f,1)),c.setAttribute("aNationWeights",new xt(g,3)),c.computeVertexNormals();const S=al(),C=Ua(),R=Q1(),N=J1(n,i),P=new ze({map:R,roughnessMap:S.roughnessMap,bumpMap:S.bumpMap,bumpScale:.055,vertexColors:!0,emissiveMap:N,emissive:new ne(1,1,1),emissiveIntensity:0,roughness:.88,metalness:.04}),k=Ch(P,{mode:"pandora",hasAshFissures:!0,hasNationWeights:!0,worldRadius:e*157.5,peakStart:4.5,peakEnd:9.8,shoreBand:.65,detailTex:S.map});r.push({mat:P,dayColor:16777215,nightColor:3885146,dayEmissive:16777215,nightEmissive:16777215,dayEI:0,nightEI:1.25});const z=new Ve(c,P);z.name="Pandora_Global_Terrain_360",z.userData.splatUniforms=k,z.receiveShadow=!0,a.add(z);const F=C?C.clone():null;F&&(F.repeat.set(36,18),F.needsUpdate=!0);const U=new ze({color:754846,normalMap:F,normalScale:new Oe(.32,.32),emissive:35512,emissiveIntensity:0,roughness:.08,metalness:.58,transparent:!0,opacity:.72,depthWrite:!1,side:wt});r.push({mat:U,dayColor:754846,nightColor:209478,dayEmissive:284780,nightEmissive:35e3,dayEI:0,nightEI:.72});const L=new Ve(new ln(e,112,72),U);L.name="Pandora_Global_Crystal_Ocean",L.receiveShadow=!0,a.add(L);const W=Tt[6].capDir.clone().normalize(),te=new Ta(new Cs(e*.048,36),{textureWidth:256,textureHeight:256,waterNormals:C,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:957112,distortionScale:.45,size:4,clipBias:.002,alpha:.9,fog:!0});nh(te,.65),te.name="Pandora_Metkayina_Reflective_Water",te.position.copy(W).multiplyScalar(e+25e-5),te.quaternion.setFromUnitVectors(new b(0,0,1),W),te.visible=!1,a.add(te);const j=F1(e,s),be=[.011*Te,.007*Te,.008*Te,.0085*Te,.008*Te,.0075*Te,.0075*Te],{waterMesh:Y,bankMesh:fe,waterMat:pe,bankMat:he,riverNormalMap:J}=$1(j,be);a.add(Y,fe);const de=[{waterMat:pe,bankMat:he,phase:.4}],ge=[];for(let Se=0;Se<Math.min(2,j.length);Se++){const Ge=j[Se];if(!Ge||Ge.length<3)continue;const Dt=Ge[Math.floor(Ge.length*.5)],st=new Ta(new Cs((be[Se]||.009*Te)*1.45,24),{textureWidth:256,textureHeight:256,waterNormals:C,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:752526,distortionScale:.34,size:2.6,clipBias:.002,alpha:.86,fog:!0});nh(st,.6),st.name=`Pandora_River_Reflective_Water_${Se}`,st.position.copy(Dt.normal).multiplyScalar(Dt.pos.length()+22e-5),st.quaternion.setFromUnitVectors(new b(0,0,1),Dt.normal),st.visible=!1,a.add(st),ge.push({water:st,centerLocal:st.position.clone(),isOceanSurface:!1})}const{group:Ae,lakeWaters:ve}=oy(e,n,i,r);a.add(Ae);const De=[{water:te,centerLocal:te.position.clone(),isOceanSurface:!0},...ve,...ge],B=[],ot=[],G=new Wt,We=ey(e,Tt[0],n,i,r),Ie=ny(e,Tt[1],n,i,r,ot,B),at=iy(e,Tt[2],n,i,r,B),je=ty(e,Tt[3],n,i,r),O=sy(e,Tt[4],n,i,r),D=L1(e,Tt[5],l,r),se=N1(e,Tt[6],l,r);a.add(We.group,Ie.group,at.group,je.group,O.group,D.group,se.group);const xe=Xi(Tt[0].capDir),oe=Ko(),ue=new ze({vertexColors:!0,roughnessMap:oe.roughnessMap,bumpMap:oe.bumpMap,bumpScale:.045,roughness:.88}),Re=[...at.archCenters];[[-.02*bt,.05*bt,.07*bt,-.04*bt,.14*Te,.011*Te],[-.07*bt,-.03*bt,.03*bt,.07*bt,.13*Te,.01*Te]].forEach(([Se,Ge,Dt,st,Vt,on],Zt)=>{const{geo:jt,apex:Bt}=Ih(e,xe,Se,Ge,Dt,st,Vt,on,30+Zt,n,i),yt=new Ve(jt,ue);yt.name=`Pandora_Valley_Arch_${Zt+1}`,yt.castShadow=!0,yt.receiveShadow=!0,a.add(yt),Re.push({apex:Bt,normal:Bt.clone().normalize()})}),Re.push({apex:We.anchorPos,normal:We.anchorDir}),Re.push({apex:Ie.anchorPos,normal:Ie.anchorDir});const we=new Qt(34e-5*Te,12e-5*Te,1,4,1);we.translate(0,-.5,0);const Ne=new ze({color:3894837,emissive:2293720,emissiveIntensity:0,roughness:.42});r.push({mat:Ne,dayColor:3894837,nightColor:59647,dayEmissive:1719834,nightEmissive:2162648,dayEI:0,nightEI:1.95,pulsePhase:.9});const dt=new St(we,Ne,B.length);dt.name="Pandora_Global_Hanging_Vines",dt.frustumCulled=!1,B.forEach((Se,Ge)=>{G.position.copy(Se.pos),G.quaternion.setFromUnitVectors(Sn,Se.normal),G.scale.set(1,Se.length,1),G.updateMatrix(),dt.setMatrixAt(Ge,G.matrix)}),dt.instanceMatrix.needsUpdate=!0,a.add(dt);const Ee=[],Ue=[],Je=[],ct=[],He=[],mt=[],ht=[],ft=[],q=[],Ce=[],me=[],Me=[],ke=[],Fe=[],Ze=[],kt=[],Ht=[],gt=[],hn=[],an=[],Mn=[],qn=[],An=new ne,tt=[7252044,3902540,5023330,9348170,3972738,3112256],Et=Se=>{const Ge=Math.floor(Se*tt.length)%tt.length;return An.setHex(tt[Ge]),An.offsetHSL((Se-.5)*.04,0,(Se-.5)*.14),An.clone()},un=Se=>(An.setRGB(.86+Se*.24,.92+(1-Math.abs(Se-.5)*2)*.22,.8+(1-Se)*.24),An.clone());for(let Se=0;Se<64;Se++){const Ge=Ie.islandsData[Se%Ie.islandsData.length],Dt=V(Se,2,13)*Math.PI*2,st=Math.sqrt(V(Se,5,2))*.52,Vt=new b(Math.cos(Dt)*Ge.rx*st,Ge.h*.28,Math.sin(Dt)*Ge.rz*st),on=new ut().setFromUnitVectors(Sn,Ge.normal);Vt.applyQuaternion(on);const Zt=Ge.pos.clone().add(Vt),jt=(.018+V(Se,8,4)*.022)*Te,Bt=jt*.65;G.position.copy(Zt),G.quaternion.copy(on),G.rotateY(V(Se,9,9)*Math.PI*2),G.scale.set(jt,jt,jt),G.updateMatrix(),Ee.push(G.matrix.clone()),Ue.push(Et(V(Se,3,5))),G.position.copy(Zt).addScaledVector(Ge.normal,jt*.92),G.scale.set(Bt,Bt,Bt),G.updateMatrix(),Je.push(G.matrix.clone()),(Se%2===0?ct:He).push(G.matrix.clone())}const On=(1+Math.sqrt(5))*.5,gn=9e3,sn=gn+12500,Ct=new b,yn=new b,vn=new ut,vt=new b,I=new b,ee=new b,ie=[0,1,2,3,4].map(Se=>Xi(Tt[Se].capDir));for(let Se=0;Se<sn;Se++){if(Se<gn){const Mt=Se%ie.length,Yn=ie[Mt],Bn=2*Math.PI*Se/On,Wn=Mt===0?.36:.24,Tn=Math.sqrt((Se+.5)/gn)*Wn;Ct.copy(Yn.upDir).addScaledVector(Yn.e1,Math.cos(Bn)*Tn).addScaledVector(Yn.e2,Math.sin(Bn)*Tn).normalize()}else{const Mt=Se-gn,Bn=1-Mt*.7548776662%1*2,Wn=Math.sqrt(Math.max(0,1-Bn*Bn)),Tn=2*Math.PI*Mt/On+(V(Se,3,17)-.5)*.028;Ct.set(Math.cos(Tn)*Wn,Bn,Math.sin(Tn)*Wn).normalize()}const{cont:Ge,highlandRidge:Dt,ashFactor:st,forestClump:Vt,lakeBlend:on,elev:Zt,biome:jt,nation:Bt}=mi(Ct.x,Ct.y,Ct.z,n,i,3),yt=V(Se,11,29),Qe=V(Se,19,7),Ot=V(Se,23,13);if(Bt==="ash"||st>.22)continue;if(Bt==="water"){if(Ge<=.002){if(jt==="reef"&&qn.length<280&&yt<.14&&Zt>-.025){yn.copy(Ct).multiplyScalar(e+Zt-2e-4),vn.setFromUnitVectors(Sn,Ct),G.position.copy(yn),G.quaternion.copy(vn),G.rotateY(Qe*Math.PI*2);const Mt=(.007+Qe*.013)*Te;G.scale.set(Mt,Mt*.45,Mt*.85),G.updateMatrix(),qn.push(G.matrix.clone())}}else if(Ge>.005){if(yn.copy(Ct).multiplyScalar(e+Zt),vn.setFromUnitVectors(Sn,Ct),Ce.length<1400&&yt<.62){const Mt=.017*Te*(.65+Qe*1.15)*1.15;G.position.copy(yn),G.quaternion.copy(vn),G.rotateY(Qe*Math.PI*2),G.rotateX((Ot-.5)*.14),G.scale.set(Mt,Mt,Mt),G.updateMatrix(),Ce.push(G.matrix.clone()),me.push(un(Ot))}else if(Fe.length<1600&&Qe<.42){const Mt=(.007+yt*.008)*Te;G.position.copy(yn),G.quaternion.copy(vn),G.rotateY(yt*Math.PI*2),G.scale.set(Mt,Mt,Mt),G.updateMatrix(),Fe.push(G.matrix.clone()),Ze.push(Et(yt))}else if(Me.length<2400&&Ot<.32){const Mt=(.006+Qe*.007)*Te;G.position.copy(yn),G.quaternion.copy(vn),G.rotateY(Ot*Math.PI*2),G.scale.set(Mt,Mt,Mt),G.updateMatrix(),Me.push(G.matrix.clone()),ke.push(Et(Qe))}}continue}if(jt==="lake"||on>.35||Ge<=0||Ct.distanceTo(Tt[3].capDir)<.036*bt)continue;if(yn.copy(Ct).multiplyScalar(e+Zt),vn.setFromUnitVectors(Sn,Ct),jt==="canyon"&&Mn.length<250&&Dt>.042&&yt<.24){G.position.copy(Ct).multiplyScalar(e+Zt-.001*Te),G.quaternion.copy(vn),G.rotateY(Qe*Math.PI*2);const Mt=(.008+Qe*.011)*Te,Yn=(.036+Ot*.052)*Te;G.scale.set(Mt,Yn,Mt),G.updateMatrix(),Mn.push(G.matrix.clone());continue}const xi=Vt>-.04,Gi=Ge<.065;if(xi||Gi&&yt<.45){const Mt=.5+Math.pow(Qe,1.3)*1.9,Yn=(Ot-.5)*.16,Bn=(V(Se,5,31)-.5)*.16,Wn=Et(Ot),Tn=un(Ot);if(G.position.copy(yn),G.quaternion.copy(vn),G.rotateY(Qe*Math.PI*2),G.rotateX(Yn),G.rotateZ(Bn),Gi&&yt<.55&&Ce.length<1400){const bn=.019*Te*Mt*1.15;G.scale.set(bn,bn,bn),G.updateMatrix(),Ce.push(G.matrix.clone()),me.push(Tn)}else{const bn=Math.floor(yt*100)%3;if(bn===0&&Ee.length<2300){const pn=.024*Te*Mt,ao=pn*(.58+Ot*.22)*1.15;G.scale.set(pn,pn,pn),G.updateMatrix(),Ee.push(G.matrix.clone()),Ue.push(Wn),G.position.copy(yn).addScaledVector(Ct,pn*.9),G.scale.set(ao,ao,ao),G.updateMatrix(),Je.push(G.matrix.clone()),(Ee.length%2===0?ct:He).push(G.matrix.clone())}else if(bn===1&&mt.length<2500){const pn=.032*Te*Mt*1.15;G.scale.set(pn*.9,pn*1.35,pn*.9),G.updateMatrix(),mt.push(G.matrix.clone()),ht.push(Tn)}else if(ft.length<2350){const pn=.022*Te*Mt*1.15;G.scale.set(pn,pn,pn),G.updateMatrix(),ft.push(G.matrix.clone()),q.push(Tn)}else if(Ce.length<1400){const pn=.02*Te*Mt*1.15;G.scale.set(pn,pn,pn),G.updateMatrix(),Ce.push(G.matrix.clone()),me.push(Tn)}}const ka=Math.abs(Ct.x)<.85?Sn:new b(0,0,1);if(I.crossVectors(Ct,ka).normalize(),ee.crossVectors(Ct,I).normalize(),Me.length<2800&&Qe<.52){vt.copy(Ct).addScaledVector(I,(yt-.5)*.0025).addScaledVector(ee,(Ot-.5)*.0025).normalize();const bn=(.0085+Ot*.0095)*Te;G.position.copy(vt).multiplyScalar(e+Zt),G.quaternion.setFromUnitVectors(Sn,vt),G.rotateY(Qe*Math.PI*2),G.scale.set(bn,bn,bn),G.updateMatrix(),Me.push(G.matrix.clone()),ke.push(Et(Qe))}if(Fe.length<1900&&Ot>.54){vt.copy(Ct).addScaledVector(I,(Ot-.5)*.003).addScaledVector(ee,(yt-.5)*.003).normalize();const bn=(.01+yt*.011)*Te;G.position.copy(vt).multiplyScalar(e+Zt),G.quaternion.setFromUnitVectors(Sn,vt),G.rotateY(yt*Math.PI*2),G.scale.set(bn,bn,bn),G.updateMatrix(),Fe.push(G.matrix.clone()),Ze.push(Et(yt))}if(kt.length<950&&yt>.8){vt.copy(Ct).addScaledVector(I,(Qe-.5)*.003).addScaledVector(ee,(Ot-.5)*.003).normalize();const bn=(.0068+Qe*.01)*Te;G.position.copy(vt).multiplyScalar(e+Zt),G.quaternion.setFromUnitVectors(Sn,vt),G.rotateY(Ot*Math.PI*2),G.scale.set(bn,bn,bn),G.updateMatrix(),kt.push(G.matrix.clone())}}else if(Ht.length+gt.length<1e3&&yt<.22){const Mt=(.0056+Qe*.0065)*Te;G.position.copy(yn),G.quaternion.copy(vn),G.rotateY(Ot*Math.PI*2),G.scale.set(Mt,Mt,Mt),G.updateMatrix(),(Se%2===0?Ht:gt).push(G.matrix.clone())}else if(hn.length+an.length<520&&yt>.85){const Mt=(.011+Qe*.016)*Te;G.position.copy(yn),G.quaternion.copy(vn),G.rotateY(Ot*Math.PI*2),G.scale.set(Mt,Mt,Mt),G.updateMatrix(),(Se%2===0?hn:an).push(G.matrix.clone())}}const ae=Xi(Tt[4].capDir);for(let Se=0;Se<120;Se++){const Ge=Math.floor(Se/4),Dt=V(Ge,4,17)*Math.PI*2,st=Math.sqrt(V(Ge,11,3))*(.095*bt),Vt=Math.cos(Dt)*st+(V(Se,2,9)-.5)*(.012*bt),on=Math.sin(Dt)*st+(V(Se,7,5)-.5)*(.012*bt),Zt=Js(e,ae,Vt,on,0,n,i),jt=(.018+V(Se,9,6)*.026)*Te;G.position.copy(Zt.pos),G.quaternion.setFromUnitVectors(Sn,Zt.normal),G.rotateY(V(Se,5,1)*Math.PI*2),G.scale.set(jt,jt,jt),G.updateMatrix(),(Ge%2===0?hn:an).push(G.matrix.clone())}for(let Se=0;Se<200;Se++){const Ge=j[Se%j.length],Dt=Ge[Math.floor(V(Se,5,3)*Ge.length)],st=Dt.phi+(Se%2===0?1:-1)*(.008+V(Se,7,1)*.026)*Te,Vt=H.clamp(Dt.theta+(V(Se,3,8)-.5)*.018*Te,.001,Math.PI-.001),on=Math.sin(Vt),Zt=mi(on*Math.cos(st),Math.cos(Vt),on*Math.sin(st),n,i,3).elev,jt=U1(e,Vt,st,Zt);G.position.copy(jt.pos),G.quaternion.setFromUnitVectors(Sn,jt.normal),G.rotateY(V(Se,1,6)*Math.PI*2);const Bt=(.008+V(Se,4,9)*.01)*Te;G.scale.set(Bt,Bt,Bt),G.updateMatrix(),Me.push(G.matrix.clone()),ke.push(Et(V(Se,2,3)))}const $=Eh(),_e=Th(),Be=Po(_e.canopy.map),$e=Po(_e.palm.map),qe=Po(_e.fern.map),rt=Po(_e.mushroom.map),pt=new ai(new b(0,0,0),e+1.8),Le=(Se,Ge,Dt,st,Vt=null,{castShadow:on=!1,receiveShadow:Zt=!1,customDepthMaterial:jt=null}={})=>{Ge.boundingSphere=pt;const Bt=new St(Ge,Dt,Math.max(1,st.length));return Bt.name=Se,Bt.frustumCulled=!1,Bt.castShadow=on,Bt.receiveShadow=Zt,jt&&(Bt.customDepthMaterial=jt),st.forEach((yt,Qe)=>{Bt.setMatrixAt(Qe,yt),Vt&&Vt[Qe]&&Bt.setColorAt(Qe,Vt[Qe])}),Bt.instanceMatrix.needsUpdate=!0,Vt&&Bt.instanceColor&&(Bt.instanceColor.needsUpdate=!0),a.add(Bt),Bt};if(Mn.length>0){const Se=new ze({vertexColors:!0,roughnessMap:oe.roughnessMap,bumpMap:oe.bumpMap,bumpScale:.045,roughness:.88});Le("Pandora_Global_Canyon_Spires",Z1(7),Se,Mn,null,{castShadow:!0,receiveShadow:!0})}if(qn.length>0){const Se=new ze({color:4943976,emissive:61695,emissiveIntensity:0,roughness:.72});r.push({mat:Se,dayColor:4943976,nightColor:542818,dayEmissive:1589304,nightEmissive:59647,dayEI:0,nightEI:1.75,pulsePhase:1.2}),Le("Pandora_Global_Coral_Reefs",new Ps(1,0),Se,qn)}if(kt.length>0){const Se=new ze({vertexColors:!0,roughnessMap:oe.roughnessMap,bumpMap:oe.bumpMap,bumpScale:.035,roughness:.9});Le("Pandora_Global_Mossy_Rocks",W1(),Se,kt,null,{castShadow:!0,receiveShadow:!0})}const X=new ze({color:6441782,map:$.map,roughnessMap:$.roughnessMap,bumpMap:$.bumpMap,bumpScale:.04,roughness:.92});r.push({mat:X,dayColor:6441782,nightColor:2238012,dayEmissive:0,nightEmissive:662570,dayEI:0,nightEI:.16});const Xe=new Qt(.055,.18,1,6,1);Xe.translate(0,.5,0),Le("Pandora_Global_Tree_Trunks",Xe,X,Ee,null,{castShadow:!0,receiveShadow:!0});const{outer:it,under:K}=Xf(),le=new ze({color:16777215,map:_e.canopy.map,roughnessMap:_e.canopy.roughnessMap,emissiveMap:_e.canopy.emissiveMap,emissive:537664,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:le,dayColor:13954004,nightColor:1793118,dayEmissive:667158,nightEmissive:562344,dayEI:0,nightEI:1.18}),Le("Pandora_Global_Canopy_Tops",it,le,Je,Ue,{castShadow:!0,receiveShadow:!0,customDepthMaterial:Be});const Z=new ze({color:3901e3,map:_e.canopy.map,roughnessMap:_e.canopy.roughnessMap,emissiveMap:_e.canopy.emissiveMap,emissive:65512,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:Z,dayColor:3901e3,nightColor:1108216,dayEmissive:1456156,nightEmissive:65512,dayEI:0,nightEI:2.2,pulsePhase:0}),Le("Pandora_Global_Canopy_Under_Turquoise",K,Z,ct,null,{castShadow:!1,receiveShadow:!0});const ye=new ze({color:4556866,map:_e.canopy.map,roughnessMap:_e.canopy.roughnessMap,emissiveMap:_e.canopy.emissiveMap,emissive:16720544,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:ye,dayColor:4556866,nightColor:16728760,dayEmissive:1719320,nightEmissive:16720544,dayEI:0,nightEI:2.15,pulsePhase:1.9}),Le("Pandora_Global_Canopy_Under_Magenta",K,ye,He,null,{castShadow:!1,receiveShadow:!0}),Le("Pandora_Global_Alien_Redwoods",O1(),X,mt,null,{castShadow:!0,receiveShadow:!0});const ce=new ze({color:16777215,map:_e.canopy.map,roughnessMap:_e.canopy.roughnessMap,emissiveMap:_e.canopy.emissiveMap,emissive:51416,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:ce,dayColor:14216664,nightColor:3903136,dayEmissive:798236,nightEmissive:42168,dayEI:0,nightEI:1.16}),Le("Pandora_Global_Alien_Redwoods_Canopy",k1(),ce,mt,ht,{castShadow:!0,receiveShadow:!0,customDepthMaterial:Be}),Le("Pandora_Global_Gnarled_Root_Trees",B1(),X,ft,null,{castShadow:!0,receiveShadow:!0});const re=new ze({color:16777215,map:_e.canopy.map,roughnessMap:_e.canopy.roughnessMap,emissiveMap:_e.canopy.emissiveMap,emissive:9455871,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:re,dayColor:14084820,nightColor:6451352,dayEmissive:1189400,nightEmissive:6830288,dayEI:0,nightEI:1.22}),Le("Pandora_Global_Gnarled_Root_Canopy",z1(),re,ft,q,{castShadow:!0,receiveShadow:!0,customDepthMaterial:Be}),Le("Pandora_Global_Alien_Palms",G1(),X,Ce,null,{castShadow:!0,receiveShadow:!0});const Q=new ze({color:16777215,map:_e.palm.map,roughnessMap:_e.palm.roughnessMap,emissiveMap:_e.palm.emissiveMap,emissive:55464,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:Q,dayColor:14217432,nightColor:5022876,dayEmissive:1194008,nightEmissive:52392,dayEI:0,nightEI:1.28}),Le("Pandora_Global_Alien_Palms_Fronds",H1(),Q,Ce,me,{castShadow:!0,receiveShadow:!0,customDepthMaterial:$e});const Pe=new ze({color:16777215,map:_e.canopy.map,roughnessMap:_e.canopy.roughnessMap,emissiveMap:_e.canopy.emissiveMap,emissive:57514,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:Pe,dayColor:14085332,nightColor:1861214,dayEmissive:1192986,nightEmissive:55464,dayEI:0,nightEI:1.38,pulsePhase:1.1}),Le("Pandora_Global_Broadleaf_Shrubs",V1(),Pe,Fe,Ze,{castShadow:!0,receiveShadow:!0,customDepthMaterial:Be});const et=new ze({color:16777215,map:_e.fern.map,roughnessMap:_e.fern.roughnessMap,emissiveMap:_e.fern.emissiveMap,emissive:59548,emissiveIntensity:0,roughness:.66,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:et,dayColor:14216920,nightColor:1600338,dayEmissive:1327646,nightEmissive:59558,dayEI:0,nightEI:1.42,pulsePhase:2.4}),Le("Pandora_Global_Giant_Ferns",X1(),et,Me,ke,{castShadow:!0,receiveShadow:!0,customDepthMaterial:qe});const lt=Wf(),Yt=new ze({color:12872928,map:_e.mushroom.map,roughnessMap:_e.mushroom.roughnessMap,emissiveMap:_e.mushroom.emissiveMap,emissive:12728575,emissiveIntensity:0,roughness:.48,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:Yt,dayColor:12872928,nightColor:13650687,dayEmissive:3807298,nightEmissive:12071167,dayEI:0,nightEI:2.35,pulsePhase:.8}),Le("Pandora_Global_Flowers_Violet",lt,Yt,Ht,null,{castShadow:!0,receiveShadow:!0,customDepthMaterial:rt});const rn=new ze({color:16747592,map:_e.mushroom.map,roughnessMap:_e.mushroom.roughnessMap,emissiveMap:_e.mushroom.emissiveMap,emissive:16739866,emissiveIntensity:0,roughness:.48,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:rn,dayColor:16747592,nightColor:16742946,dayEmissive:4989968,nightEmissive:16738324,dayEI:0,nightEI:2.35,pulsePhase:2.6}),Le("Pandora_Global_Flowers_Orange",lt,rn,gt,null,{castShadow:!0,receiveShadow:!0,customDepthMaterial:rt});const Ft=j1(),En=new ze({color:10777794,map:_e.mushroom.map,roughnessMap:_e.mushroom.roughnessMap,emissiveMap:_e.mushroom.emissiveMap,emissive:11024639,emissiveIntensity:0,roughness:.5,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:En,dayColor:10777794,nightColor:10631935,dayEmissive:3284024,nightEmissive:9973503,dayEI:0,nightEI:2.45,pulsePhase:1.5}),Le("Pandora_Global_Mushrooms_Violet",Ft,En,hn,null,{castShadow:!0,receiveShadow:!0,customDepthMaterial:rt});const Rt=new ze({color:14710936,map:_e.mushroom.map,roughnessMap:_e.mushroom.roughnessMap,emissiveMap:_e.mushroom.emissiveMap,emissive:16725672,emissiveIntensity:0,roughness:.5,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:Rt,dayColor:14710936,nightColor:16726186,dayEmissive:4332584,nightEmissive:16722072,dayEI:0,nightEI:2.45,pulsePhase:3.1}),Le("Pandora_Global_Mushrooms_NeonPink",Ft,Rt,an,null,{castShadow:!0,receiveShadow:!0,customDepthMaterial:rt});const In=1200,Jn=600,ri=q1();ri.boundingSphere=pt;const Is=new ze({color:16777215,map:_e.fern.map,roughnessMap:_e.fern.roughnessMap,emissiveMap:_e.fern.emissiveMap,emissive:57494,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:wt});r.push({mat:Is,dayColor:13954002,nightColor:1465932,dayEmissive:1062426,nightEmissive:56224,dayEI:0,nightEI:1.36,pulsePhase:.9});const xn=new St(ri,Is,In);xn.name="Pandora_Ground_Clutter_Grass",xn.frustumCulled=!1,xn.castShadow=!1,xn.receiveShadow=!0,xn.visible=!1,xn.userData.manualClutterLod=!0,xn.setColorAt(0,new ne(16777215));const Uh=Y1();Uh.boundingSphere=pt;const Qf=new ze({color:16777215,roughnessMap:oe.roughnessMap,bumpMap:oe.bumpMap,bumpScale:.03,roughness:.92}),_n=new St(Uh,Qf,Jn);_n.name="Pandora_Ground_Clutter_Pebbles",_n.frustumCulled=!1,_n.castShadow=!1,_n.receiveShadow=!0,_n.visible=!1,_n.userData.manualClutterLod=!0,_n.setColorAt(0,new ne(16777215));const Fh=new nt().makeScale(0,0,0),Oh=new ne(1,1,1);for(let Se=0;Se<In;Se++)xn.setMatrixAt(Se,Fh),xn.setColorAt(Se,Oh);for(let Se=0;Se<Jn;Se++)_n.setMatrixAt(Se,Fh),_n.setColorAt(Se,Oh);xn.count=0,_n.count=0,a.add(xn),a.add(_n),pe.userData.animatedEmissive=!0,he.userData.animatedEmissive=!0;for(let Se=0;Se<r.length;Se++)r[Se].mat.userData=r[Se].mat.userData||{},r[Se].mat.userData.animatedEmissive=!0;const Fa=new ne,Oa=new ne,Jf=new ne(14481663),e0=new ne(6592174),t0=new ne(15661294),n0=new ne(5433599),i0=Se=>{const Ge=mi(Se.x,Se.y,Se.z,n,i,3),Dt=Ge.cont<=0||Ge.lakeBlend>.35,st=Ge.cont<=0?0:Ge.lakeBlend>.35?Ge.lakeWaterElev:-1;return{terrainElev:Ge.elev,waterElev:st,hasWater:Dt,nation:Ge.nation,forestFactor:Ge.forestFactor,waterFactor:Ge.waterFactor,ashFactor:Ge.ashFactor,reefFactor:Ge.reefFactor,biome:Ge.biome}},s0=(Se,Ge,Dt=0)=>{const st=H.smoothstep(-Se,-.1,.04);k?.uLavaTime&&(k.uLavaTime.value=Ge);for(let yt=0;yt<r.length;yt++){const Qe=r[yt];if(Qe.isWaterfall){const Ot=.85+.15*Math.sin(Ge*3.8+yt);Qe.mat.color.setRGB(H.lerp(Qe.dayColorRGB[0],Qe.nightColorRGB[0]*Ot,st),H.lerp(Qe.dayColorRGB[1],Qe.nightColorRGB[1]*Ot,st),H.lerp(Qe.dayColorRGB[2],Qe.nightColorRGB[2]*Ot,st)),Qe.mat.opacity=H.lerp(.52,.72,st);continue}if(Qe.dayColor!==void 0&&(Fa.setHex(Qe.dayColor),Oa.setHex(Qe.nightColor),Qe.mat.color.copy(Fa).lerp(Oa,st)),Qe.dayEmissive!==void 0&&(Fa.setHex(Qe.dayEmissive),Oa.setHex(Qe.nightEmissive),Qe.mat.emissive.copy(Fa).lerp(Oa,st)),Qe.dayEI!==void 0){const Ot=Qe.pulsePhase!==void 0?.9+.16*Math.sin(Ge*1.7+Qe.pulsePhase):1;Qe.mat.emissiveIntensity=H.lerp(Qe.dayEI,Qe.nightEI*Ot,st)}}const Vt=.85+.25*Math.sin(Ge*2);pe.color.copy(Jf).lerp(e0,st),pe.emissiveIntensity=H.lerp(0,1.15*Vt,st),he.color.copy(t0).lerp(n0,st),he.emissiveIntensity=H.lerp(0,2.35*Vt,st);const on=O.plumeGeo.attributes.position,Zt=O.plumeGeo.attributes.color,jt=O.geyserEmitters,Bt=O.puffsPerGeyser;for(let yt=0;yt<jt.length;yt++){const Qe=jt[yt];for(let Ot=0;Ot<Bt;Ot++){const xi=yt*Bt+Ot,Gi=(Ge*.48+Qe.phase+Ot/Bt)%1,Mt=Gi*Qe.maxHeight,Yn=Math.sin(Gi*Math.PI)*.004*Te;on.setXYZ(xi,Qe.basePos.x+Qe.normal.x*Mt+Math.cos(xi)*Yn,Qe.basePos.y+Qe.normal.y*Mt,Qe.basePos.z+Qe.normal.z*Mt+Math.sin(xi)*Yn);const Bn=H.lerp(.85,yt%2===0?.2:.95,st),Wn=H.lerp(.95,yt%2===0?1.45:.45,st),Tn=H.lerp(1,1.85,st);Zt.setXYZ(xi,Bn,Wn,Tn)}}on.needsUpdate=!0,Zt.needsUpdate=!0,O.plumeMat.opacity=H.lerp(.32,.65,st),F&&(F.offset.x=Ge*.014%1,F.offset.y=Ge*.009%1),J&&(J.offset.x=Ge*.006%1,J.offset.y=Ge*-.085%1);for(let yt=0;yt<De.length;yt++){const Qe=De[yt];Qe.water.material?.uniforms?.time&&(Qe.water.material.uniforms.time.value=Ge*.55)}D.update(Ge,st),se.update(Ge,st,Dt)},io=.0011,so=19;let cl="";const Zi=new b,di=new Wt,Ls=new ne,oo=new ne,o0=(Se,Ge,Dt)=>{const st=Math.abs(Se),Vt=Math.abs(Ge),on=Math.abs(Dt);if(st>=Vt&&st>=on){const jt=Se>=0?1:-1;return{face:Se>=0?0:1,u:Ge*jt/Math.max(1e-5,st),v:Dt/Math.max(1e-5,st)}}if(Vt>=st&&Vt>=on){const jt=Ge>=0?1:-1;return{face:Ge>=0?2:3,u:Se*jt/Math.max(1e-5,Vt),v:Dt/Math.max(1e-5,Vt)}}const Zt=Dt>=0?1:-1;return{face:Dt>=0?4:5,u:Se*Zt/Math.max(1e-5,on),v:Ge/Math.max(1e-5,on)}},kh=(Se,Ge,Dt,st)=>(Se===0?st.set(1,Ge,Dt):Se===1?st.set(-1,-Ge,Dt):Se===2?st.set(Ge,1,Dt):Se===3?st.set(-Ge,-1,Dt):Se===4?st.set(Ge,Dt,1):st.set(-Ge,Dt,-1),st.normalize());return{group:a,terrainSplatUniforms:k,reflectiveWaters:De,waterfalls:ot,pulsingRivers:de,archCenters:Re,riverPaths:j,landmarks:Tt,samplerCtx:s,getFloorAndWaterAtDir:i0,updateDayNight:s0,updateGroundClutter:(Se,Ge,Dt=0)=>{if(!Se||!Number.isFinite(Ge)||Ge>=450||Dt>.05){xn.visible=!1,_n.visible=!1,cl="";return}const st=Se.lengthSq();if(!Number.isFinite(st)||st<1e-6){xn.visible=!1,_n.visible=!1;return}const{face:Vt,u:on,v:Zt}=o0(Se.x,Se.y,Se.z),jt=Math.round(on/io),Bt=Math.round(Zt/io),yt=`${Vt}_${jt}_${Bt}`;if(yt===cl){xn.visible=xn.count>0,_n.visible=_n.count>0;return}cl=yt;let Qe=0,Ot=0;for(let xi=-so;xi<=so;xi++){const Gi=Bt+xi;for(let Mt=-so;Mt<=so;Mt++){if(Mt*Mt+xi*xi>so*so)continue;const Yn=jt+Mt,Bn=V(Yn+5e3,Gi+5e3,Vt*17+3),Wn=V(Yn+5e3,Gi+5e3,Vt*31+11),Tn=V(Yn+5e3,Gi+5e3,Vt*47+23),ka=(Yn+(Bn-.5)*.85)*io,bn=(Gi+(Wn-.5)*.85)*io;kh(Vt,ka,bn,Zi);const pn=mi(Zi.x,Zi.y,Zi.z,n,i,3);if(!Number.isFinite(pn.elev)||pn.cont<=.004||pn.lakeBlend>.35)continue;const ao=e+pn.elev,Ba=pn.nation==="ash"||pn.ashFactor>.25,$o=pn.nation==="water";if(!Ba&&Qe<In&&(!$o||Tn<.42)){const Qo=($o?.0014:.002+Bn*.0028)*Te;di.position.copy(Zi).multiplyScalar(ao),di.quaternion.setFromUnitVectors(Sn,Zi),di.rotateY(Wn*Math.PI*2),di.rotateX((Tn-.5)*.16),di.scale.set(Qo*(.85+Wn*.35),Qo*(.8+Tn*.55),Qo*(.85+Bn*.35)),di.updateMatrix(),xn.setMatrixAt(Qe,di.matrix),$o?Ls.setHex(6600808).lerp(oo.setHex(8965242),Tn):Ls.setHex(2059828).lerp(oo.setHex(2659944),Wn).lerp(oo.setHex(4882992),Tn*.35),xn.setColorAt(Qe,Ls),Qe++}if(Tn<(Ba?.58:$o?.32:.42)&&Ot<Jn){const Qo=(Wn-.5)*io*.35,a0=(Bn-.5)*io*.35;kh(Vt,ka+Qo,bn+a0,Zi);const za=(Ba?.0014+Wn*.0024:.0011+Bn*.0018)*Te;di.position.copy(Zi).multiplyScalar(ao-za*.08),di.quaternion.setFromUnitVectors(Sn,Zi),di.rotateY(Bn*Math.PI*2),di.scale.set(za,za*(.75+Tn*.5),za),di.updateMatrix(),_n.setMatrixAt(Ot,di.matrix),Ba?Ls.setHex(2499622).lerp(oo.setHex(3813936),Wn):$o?Ls.setHex(13155998).lerp(oo.setHex(10131080),Bn):Ls.setHex(4475968).lerp(oo.setHex(3168308),Wn*.65),_n.setColorAt(Ot,Ls),Ot++}}}xn.count=Qe,xn.instanceMatrix.needsUpdate=!0,xn.instanceColor&&(xn.instanceColor.needsUpdate=!0),xn.visible=Qe>0,_n.count=Ot,_n.instanceMatrix.needsUpdate=!0,_n.instanceColor&&(_n.instanceColor.needsUpdate=!0),_n.visible=Ot>0},groundClutterMeshes:{grass:xn,pebbles:_n}}}function ry(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new fn(o);return n.needsUpdate=!0,n}const qf=ry();function yd(o,e,t=350){const n=e,i=1/3.5,s=o==="p2",a=new Ut;a.name=`${o}_Urban_AV_Traffic_System`;const r=(s?.0068:.0033)*i,l=new cn(r*.55,r*.34,r*1.85),c=new ze({color:1580068,roughness:.38,metalness:.85}),h=new St(l,c,t),u=new cn(r*.58,r*.22,r*.55);u.translate(0,0,r*.92);const d=new dn({color:o==="p4"?new ne(2.1,2.3,2.5):new ne(1.35,1.7,1.88)}),f=new St(u,d,t),g=new cn(r*.42,r*.16,r*3.8);g.translate(0,0,-r*2.55);const v=new dn({color:o==="p4"?new ne(3.6,1.25,.25):new ne(1.85,.56,.22),transparent:!0,opacity:.85}),m=new St(g,v,t);for(const M of[h,f,m])M.frustumCulled=!1,M.castShadow=!1,M.receiveShadow=!1,M.geometry.boundingSphere=new ai(new b(0,0,0),n*1.28);a.add(h,f,m);const p=[],_=[new b(1,0,0),new b(0,0,1),new b(.707,0,.707),new b(-.707,0,.707)];for(let M=0;M<t;M++){const S=M%2===0,R=.038+M%7/6*.062+V(M,3,7)*.014,N=n+R;if(S){const P=(M>>1)%14,k=s?(.032+P/13*.185+(V(M,1,9)-.5)*.012)*.45:(.035+P*.034+(V(M,1,9)-.5)*.014)*i*1.2/3.2,z=P%2===0?1:-1,F=z*(.085+V(M,5,2)*.11)/Math.max(.04,Math.sin(k))*(s?.48:1/1.5);p.push({type:"ring",radius:N,theta:k,sinTheta:Math.sin(k),cosTheta:Math.cos(k),phi0:V(M,8,4)*Math.PI*2,omega:F,dir:z,bobAmp:(s?.006:.002+V(M,2,6)*.0025)*i,bobPhase:V(M,4,1)*Math.PI*2})}else{const P=M%_.length,k=s?.064*.45:.042*1.15/3.2,z=(Math.floor(M/8)%11-5)*k*i,F=_[P],U=new ut().setFromAxisAngle(F,z);s&&M%3===0&&U.premultiply(new ut().setFromAxisAngle(_[0],-.22*.45));const L=M%4===1?1:-1,W=s?.24*.45:.52*i*1.2/3.2,te=(V(M,6,3)*2-1)*W,j=L*(s?.13+V(M,9,5)*.16:(.09+V(M,9,5)*.13)*1.25)*i/4.8;p.push({type:"corridor",radius:N,qPlane:U,s0:te,arcSpan:W,speed:j,dir:L,bobAmp:(s?.005:.002+V(M,7,2)*.002)*i,bobPhase:V(M,3,4)*Math.PI*2})}}const y=new b,x=new b,T=new b,w=new b,E=new nt,A=new b;return{update(M){if(!(!a.parent||!a.parent.visible)){for(let S=0;S<t;S++){const C=p[S],R=Math.sin(M*2.2+C.bobPhase)*C.bobAmp,N=C.radius+R;if(C.type==="ring"){const k=C.phi0+C.omega*M,z=Math.cos(k),F=Math.sin(k);x.set(C.sinTheta*z,C.cosTheta,C.sinTheta*F).normalize(),y.copy(x).multiplyScalar(N),T.set(-C.dir*F,0,C.dir*z).normalize(),w.crossVectors(x,T).normalize(),T.crossVectors(w,x).normalize()}else{const k=C.arcSpan*2;let z=(C.s0+C.speed*M+C.arcSpan)%k;z<0&&(z+=k);const F=z-C.arcSpan,U=Math.sin(F),L=Math.cos(F);x.set(U,L,0).applyQuaternion(C.qPlane).normalize(),y.copy(x).multiplyScalar(N),T.set(C.dir*L,-C.dir*U,0).applyQuaternion(C.qPlane).normalize(),w.crossVectors(x,T).normalize()}let P=1;if(C.type==="corridor"){const k=Math.abs(Math.acos(H.clamp(x.y,-1,1)))/C.arcSpan;P=1-H.smoothstep(k,.85,1)}E.makeBasis(w,x,T),E.setPosition(y),P<.99&&(A.setScalar(Math.max(.01,P)),E.scale(A)),h.setMatrixAt(S,E),f.setMatrixAt(S,E),m.setMatrixAt(S,E)}h.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}},group:a}}function ly(o){const e=[],t=[],n=[],i=[],s=[],a=(f,g)=>(f.material&&(f.material.userData=f.material.userData||{},f.material.userData.animatedEmissive=!0),{mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let r=0;o.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";r++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(a(f,r)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(a(f,r)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(a(f,r)):/NC_Neon_Sign_/.test(g)?i.push(a(f,r)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&s.push(a(f,r))});const l=f=>{if(f.length===0)return null;const g=new b;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const v=g.clone().normalize();return{parts:f,centroid:g,localUp:v}},c=[l(e),l(t)].filter(Boolean),h=new ut,u=new ut,d=new b;return{update(f,g=1){c.forEach((v,m)=>{const p=m*2.4,_=Math.sin(f*1.45+p)*1.4,y=Math.sin(f*1.15+p)*.08;for(let x=0;x<v.parts.length;x++){const T=v.parts[x],w=/Tail|Fin/i.test(T.mesh.name),E=Math.sin(f*3.1+p+x*.65)*(w?.14:.045);d.copy(T.basePos).sub(v.centroid),h.setFromAxisAngle(v.localUp,y+E),d.applyQuaternion(h),T.mesh.position.copy(v.centroid).add(d).addScaledVector(v.localUp,_),T.mesh.quaternion.copy(h).multiply(T.baseQuat),T.material&&T.material.emissiveIntensity!==void 0&&(T.material.emissiveIntensity=Math.min(1.9,T.baseEmissive*(.86+.14*Math.sin(f*2.6+x*.7+p))*g))}});for(let v=0;v<n.length;v++){const m=n[v],p=Math.sin(f*1.6+m.seed*.9)*.55;m.mesh.position.copy(m.basePos).addScaledVector(m.normal,p),m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=Math.min(1.9,m.baseEmissive*(.88+.1*Math.sin(f*3.4+m.seed))*g))}for(let v=0;v<i.length;v++){const m=i[v];if(!m.material||m.material.emissiveIntensity===void 0)continue;const p=.88+.1*Math.sin(f*2.2+m.seed*1.7),_=Math.sin(f*23+m.seed*7.3)>.965?.55:1;m.material.emissiveIntensity=Math.min(1.9,m.baseEmissive*p*_*g)}for(let v=0;v<s.length;v++){const m=s[v];m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=Math.min(1.85,m.baseEmissive*(.76+.3*Math.sin(f*3.2+m.seed*.8))*g)),/Hexagon_Ring|Hexagon_Spoke/i.test(m.mesh.name)&&(u.setFromAxisAngle(m.normal,f*.35*(v%2===0?1:-1)),m.mesh.quaternion.copy(u).multiply(m.baseQuat))}}}}function cy(o){const e=[];let t=0;return o.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,n.material.userData=n.material.userData||{},n.material.userData.animatedEmissive=!0,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n,i=1){for(let s=0;s<e.length;s++){const a=e[s];if(a.material.emissiveIntensity!==void 0){const r=.78+.36*Math.sin(n*1.9-a.phase);a.material.emissiveIntensity=a.baseEmissive*r*i}}}}}function hy(o){const e=o,t=1/3.5,n=new Ut;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,s=.0022*t,a=new cn(s*.4,s*.32,s*1.8),r=new cn(s*1.9,s*.08,s*.72);r.translate(s*.95,0,0);const l=new cn(s*1.9,s*.08,s*.72);l.translate(-s*.95,0,0);const c=new ze({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),h=new St(a,c,i),u=new St(r,c,i),d=new St(l,c,i);n.add(h,u,d);const f=[];for(let N=0;N<i;N++){const P=e+(N<55?.145+V(N,2,7)*.09:.035+V(N,4,3)*.06)*t,k=(.025+V(N,5,1)*.24)*t*1.1,z=V(N,8,9)*Math.PI*2,F=(N%3===0?-1:1)*(.28+V(N,3,6)*.28);f.push({alt:P,theta:k,phi0:z,omega:F,dir:F>=0?1:-1,flapSpeed:5.5+V(N,1,5)*3.5,flapPhase:V(N,7,2)*Math.PI*2,scaleFactor:.75+V(N,9,4)*.8})}const g=42,v=new Float32Array(g*3),m=[];for(let N=0;N<g;N++){const P=(.16+V(N,11,2)*.24)*t*1.15,k=V(N,13,5)*Math.PI*2,z=e+(.045+V(N,4,8)*.065)*t;m.push({theta:P,phi0:k,alt:z,speed:.028+V(N,6,3)*.025})}const p=new At;p.setAttribute("position",new xt(v,3));const _=new Ci({map:qf,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),y=new Pi(p,_);y.name="Medieval_Drifting_Cloud_Banks",n.add(y);const x=new b,T=new b,w=new b,E=new b,A=new nt,M=new nt,S=new ut,C=new b(0,0,1),R=new b;return{group:n,update(N,P=1){if(!n.parent||!n.parent.visible)return;for(let z=0;z<i;z++){const F=f[z],U=F.phi0+F.omega*N,L=F.theta+Math.sin(N*.6+F.flapPhase)*.008,W=F.alt+Math.sin(N*1.1+F.flapPhase)*.0018,te=Math.sin(L),j=Math.cos(L),be=Math.cos(U),Y=Math.sin(U);T.set(te*be,j,te*Y).normalize(),x.copy(T).multiplyScalar(W),w.set(-F.dir*Y,0,F.dir*be).normalize(),E.crossVectors(T,w).normalize(),w.crossVectors(E,T).normalize(),A.makeBasis(E,T,w),A.setPosition(x),R.setScalar(F.scaleFactor),A.scale(R),h.setMatrixAt(z,A);const pe=Math.sin(N*.45+F.flapPhase)>-.25?.55:.12,he=Math.sin(N*F.flapSpeed+F.flapPhase)*pe;S.setFromAxisAngle(C,he),M.makeRotationFromQuaternion(S),M.premultiply(A),u.setMatrixAt(z,M),S.setFromAxisAngle(C,-he),M.makeRotationFromQuaternion(S),M.premultiply(A),d.setMatrixAt(z,M)}h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const k=p.attributes.position;for(let z=0;z<g;z++){const F=m[z],U=F.phi0+F.speed*N,L=Math.sin(F.theta);k.setXYZ(z,F.alt*L*Math.cos(U),F.alt*Math.cos(F.theta),F.alt*L*Math.sin(U))}k.needsUpdate=!0}}}function Ds(o,e=1){const t=o.attributes.normal;if(!t)return o;for(let n=0;n<t.count;n++){const i=t.getX(n),s=t.getY(n),a=t.getZ(n),r=Math.hypot(i,s,a);!Number.isFinite(r)||r<1e-4?t.setXYZ(n,0,e,0):Math.abs(r-1)>.001&&t.setXYZ(n,i/r,s/r,a/r)}return t.needsUpdate=!0,o}function _s(o,e,t){const n=Math.max(1e-6,o),i=new hs(n,e,4,2);i.rotateX(-Math.PI*.5);const s=i.attributes.position;for(let a=0;a<s.count;a++){const r=H.clamp((s.getX(a)+n*.5)/n,0,1),l=s.getZ(a),c=t*r*n,h=-Math.pow(r,1.35)*e*.85,u=1-Math.pow(r,1.6)*.78,d=Math.sin(r*Math.PI)*e*.14;s.setXYZ(a,c,d,l*u+h)}return i.computeVertexNormals(),Ds(i,1)}function bd(o){const e=[],t=new $n(o*.34,o*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new $n(o*.18,o*.9,4);n.rotateX(Math.PI*.42),n.translate(0,o*.2,o*1.15),e.push(n.toNonIndexed());const i=new $n(o*.12,o*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-o*1.85),e.push(i.toNonIndexed());const s=It(e,!1);return s.computeVertexNormals(),s}function uy(o){const e=[],t=new cn(o*.72,o*.68,o*1.55);t.translate(0,o*.95,0),e.push(t.toNonIndexed());const n=new cn(o*.36,o*.58,o*.68);n.rotateX(.45),n.translate(0,o*1.32,o*.85),e.push(n.toNonIndexed());const i=new cn(o*.92,o*.44,o*.36);i.rotateX(.28),i.translate(0,o*1.54,o*1.15),e.push(i.toNonIndexed());const s=It(e,!1);s.computeVertexNormals();const a=[],r=new Qt(o*.1,o*.08,o*.85,5);r.translate(o*.28,-o*.42,0);const l=r.clone();l.translate(-o*.56,0,0),a.push(r.toNonIndexed(),l.toNonIndexed());const c=It(a,!1);c.computeVertexNormals();const h=c.clone();return{bodyGeo:s,frontLegsGeo:c,backLegsGeo:h}}function dy(o){const e=new ln(o*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),Ds(e,1);const t=[];for(let i=0;i<4;i++){const s=i/4*Math.PI*2,a=new Qt(o*.05,o*.012,o*1.45,4);a.translate(Math.cos(s)*o*.22,-o*.72,Math.sin(s)*o*.22),t.push(a.toNonIndexed())}const n=It(t,!1);return n.computeVertexNormals(),Ds(n,-1),{bellGeo:e,tentGeo:n}}function Pa(o){return o.map(e=>{const t=e.index?e.toNonIndexed():e;return t.attributes.uv&&t.deleteAttribute("uv"),t})}function fy(o){const e=o,t=[],n=new ln(e*.42,12,10);n.scale(.88,.72,2.55),t.push(n);const i=new $n(e*.42,e*1.15,8);i.rotateX(Math.PI*.5),i.scale(1.18,.72,1),i.translate(0,e*.03,e*1.15),t.push(i),[-1,1].forEach(h=>{const u=new cn(e*.16,e*.16,e*.92);u.rotateY(h*.12),u.translate(h*e*.24,e*.2,e*.92),t.push(u);const d=new cn(e*1.55,e*.06,e*.48);d.rotateY(-h*.34),d.rotateZ(-h*.1),d.translate(h*e*.85,-e*.12,e*.18),t.push(d)});const s=new $n(e*.25,e*1.35,7);s.rotateX(-Math.PI*.5),s.translate(0,0,-e*1.35),t.push(s);const a=new cn(e*1.35,e*.05,e*.44);a.translate(0,e*.02,-e*1.98),t.push(a);const r=It(Pa(t),!1);r.computeVertexNormals(),Ds(r,1);const l=[];[-1,1].forEach(h=>{for(let u=0;u<4;u++){const d=new cn(e*.05,e*.07,e*.22);d.rotateY(h*.08),d.translate(h*(e*.36-u*.04*e),e*.06,e*(.72-u*.42)),l.push(d)}});const c=It(Pa(l),!1);return c.computeVertexNormals(),Ds(c,1),{bodyGeo:r,glowGeo:c}}function py(o){const e=o,t=[],n=new ln(e*.24,9,7);n.scale(.85,.72,2),t.push(n);const i=new Qt(e*.07,e*.14,e*.85,6);i.rotateX(Math.PI*.42),i.translate(0,e*.12,e*.74),t.push(i);const s=new $n(e*.09,e*.36,5);s.rotateX(Math.PI*.5),s.translate(0,e*.22,e*1.24),t.push(s);const a=new $n(e*.14,e*1.15,6);a.rotateX(-Math.PI*.5),a.translate(0,-e*.02,-e*.95),t.push(a);const r=It(Pa(t),!1);r.computeVertexNormals(),Ds(r,1);const l=[];[-1,1].forEach(h=>{const u=new cn(e*.92,e*.04,e*.28);u.rotateY(-h*.35),u.translate(h*e*.48,-e*.05,e*.24),l.push(u);const d=new cn(e*.62,e*.035,e*.22);d.rotateY(-h*.28),d.translate(h*e*.34,-e*.06,-e*.34),l.push(d)});const c=It(Pa(l),!1);return c.computeVertexNormals(),Ds(c,1),{bodyGeo:r,flipperGeo:c}}function my(o){const e=o,t=[],n=new $n(e*.24,e*.85,5);n.rotateX(Math.PI*.5),n.scale(.55,1,1),n.translate(0,0,e*.15),t.push(n);const i=new $n(e*.22,e*.42,4);i.rotateX(-Math.PI*.5),i.scale(.32,1.15,1),i.translate(0,0,-e*.44),t.push(i);const s=It(Pa(t),!1);return s.computeVertexNormals(),Ds(s,1),s}function gy(o,e){const t=o,n=1/3.5,i=new Ut;i.name="Pandora_Bioluminescent_Life";const s=e?.samplerCtx||null,a=s?.qCap,r=s?.sphereLandmarks,l=X=>{const Xe=X.clone().normalize(),it=Math.abs(Xe.x)<.85?new b(1,0,0):new b(0,0,1),K=new b().crossVectors(Xe,it).normalize(),le=new b().crossVectors(Xe,K).normalize();return{normalDir:Xe,e1:K,e2:le}},c=180,h=new Float32Array(c*3),u=new Float32Array(c*3),d=[],f=[new ne(62975),new ne(11553023),new ne(3836159),new ne(16732856)],g=(1+Math.sqrt(5))*.5,v=[];for(let X=0;X<5e3;X++){const Xe=1-(X+.5)/5e3*2,it=Math.sqrt(Math.max(0,1-Xe*Xe)),K=2*Math.PI*X/g,le=Math.cos(K)*it,Z=Math.sin(K)*it,ye=mi(le,Xe,Z,a,r);ye.nation==="forest"&&ye.forestFactor>.99&&ye.ashFactor<.01&&ye.waterFactor<.01&&ye.borderMountain<.12&&ye.cont>.06&&ye.biome!=="lake"&&ye.elev>5e-4&&v.push({dir:new b(le,Xe,Z),elev:ye.elev,cont:ye.cont})}v.length===0&&v.push({dir:Tt[0].capDir.clone(),elev:.002,cont:.25});for(let X=0;X<c;X++){let Xe,it=.002;if(X<90){const Z=Tt[X%5],ye=l(Z.capDir),ce=V(X,7,13)*Math.PI*2,re=Math.sqrt(V(X,3,19))*(.105/3.2);Xe=ye.normalDir.clone().addScaledVector(ye.e1,Math.cos(ce)*re).addScaledVector(ye.e2,Math.sin(ce)*re).normalize();const Q=mi(Xe.x,Xe.y,Xe.z,a,r,3);if(Q.nation!=="forest"){const Pe=v[X%v.length];Xe.copy(Pe.dir),it=Pe.elev}else it=Q.elev}else{const Z=v[(X*7+Math.floor(V(X,4,11)*19))%v.length],ye=l(Z.dir),ce=V(X,2,17)*Math.PI*2,re=V(X,9,5)*(.025/3.2);Xe=ye.normalDir.clone().addScaledVector(ye.e1,Math.cos(ce)*re).addScaledVector(ye.e2,Math.sin(ce)*re).normalize(),it=Z.elev}const K=t+it+(.005+V(X,5,11)*.19)*n;d.push({dir:Xe,baseAlt:K,driftSpeed:.025+V(X,2,7)*.035,risePhase:V(X,9,4)*Math.PI*2});const le=f[X%f.length];u[X*3]=le.r,u[X*3+1]=le.g,u[X*3+2]=le.b}const m=new At;m.setAttribute("position",new xt(h,3)),m.setAttribute("color",new xt(u,3));const p=new Ci({size:.72,map:qf,vertexColors:!0,transparent:!0,opacity:.16,depthWrite:!1,blending:Rn,sizeAttenuation:!0}),_=new Pi(m,p);_.frustumCulled=!1,i.add(_);const y=90,x=.0054*n,T=new ze({color:744312,emissive:55551,emissiveIntensity:.08,roughness:.42}),w=new ze({color:43200,emissive:61695,emissiveIntensity:.1,roughness:.38,side:wt}),E=new ze({color:944852,emissive:2132223,emissiveIntensity:.1,roughness:.42,side:wt});T.userData.animatedEmissive=!0,w.userData.animatedEmissive=!0,E.userData.animatedEmissive=!0;const A=new St(bd(x),T,y),M=new St(_s(x*2.75,x*1.1,1),w,y),S=new St(_s(x*2.75,x*1.1,-1),w,y),C=new St(_s(x*1.65,x*.75,1),E,y),R=new St(_s(x*1.65,x*.75,-1),E,y);[A,M,S,C,R].forEach(X=>{X.frustumCulled=!1,i.add(X)});const N=[l(Tt[0].capDir),l(Tt[1].capDir),l(Tt[2].capDir)],P=e?.archCenters||[];for(let X=0;X<P.length;X++)P[X]?.normal&&N.push(l(P[X].normal));const k=[];for(let X=0;X<y;X++){const Xe=X<25?0:X<55?1:2,it=X<60?N[Xe]:N[X%N.length],K=(.032+V(X,4,1)*.088)*n/3.2,le=t+(.055+V(X,8,5)*.17)*n,Z=(X%3===0?-1:1)*(.4+V(X,6,3)*.34);k.push({frame:it,orbitRad:K,alt:le,phi0:V(X,4,2)*Math.PI*2,omega:Z,phase:V(X,3,9)*Math.PI*2,scale:.78+V(X,5,6)*.55})}const z=4,F=.0145*n,U=new ze({color:10884618,emissive:16727056,emissiveIntensity:.1,roughness:.4}),L=new ze({color:14166542,emissive:16734744,emissiveIntensity:.12,roughness:.4,side:wt});U.userData.animatedEmissive=!0,L.userData.animatedEmissive=!0;const W=new St(bd(F),U,z),te=new St(_s(F*3.1,F*1.25,1),L,z),j=new St(_s(F*3.1,F*1.25,-1),L,z),be=new St(_s(F*1.85,F*.85,1),L,z),Y=new St(_s(F*1.85,F*.85,-1),L,z);[W,te,j,be,Y].forEach(X=>{X.frustumCulled=!1,i.add(X)});const fe=[{frame:l(Tt[0].capDir),alt:t+.19*n,orbitRad:.11*n/3.2,phi0:.4,omega:.22,phase:0},{frame:l(Tt[1].capDir),alt:t+.26*n,orbitRad:.14*n/3.2,phi0:2.1,omega:-.2,phase:1.5},{frame:l(Tt[2].capDir),alt:t+.21*n,orbitRad:.12*n/3.2,phi0:3.9,omega:.21,phase:2.7},{frame:l(Tt[3].capDir),alt:t+.18*n,orbitRad:.1*n/3.2,phi0:5.1,omega:-.23,phase:.9}],pe=48,he=.0048*n,{bodyGeo:J,frontLegsGeo:de,backLegsGeo:ge}=uy(he),Ae=new ze({color:3682900,emissive:1990808,emissiveIntensity:0,roughness:.68}),ve=new ze({color:2499642,roughness:.75});Ae.userData.animatedEmissive=!0;const De=new St(J,Ae,pe),B=new St(de,ve,pe),ot=new St(ge,ve,pe);[De,B,ot].forEach(X=>{X.frustumCulled=!1,i.add(X)});const G=v.filter(X=>X.cont>.08),We=G.length>=6?G:v,Ie=[],at=new b;for(let X=0;X<6;X++){let Xe=null;const it=(.015+X%3*.004)/3.2,K=Math.floor(X/6*We.length)%We.length;for(let le=0;le<We.length;le++){const Z=We[(K+le*7)%We.length],ye=l(Z.dir);let ce=!0;for(let re=0;re<8;re++){const Q=re/8*Math.PI*2;at.copy(ye.normalDir).addScaledVector(ye.e1,Math.cos(Q)*it*1.3).addScaledVector(ye.e2,Math.sin(Q)*it*1.3).normalize();const Pe=mi(at.x,at.y,at.z,a,r,3);if(Pe.nation!=="forest"||Pe.ashFactor>.04||Pe.biome==="lake"){ce=!1;break}}if(ce){Xe=ye;break}}Ie.push({...Xe||l(Tt[0].capDir),radOffset:it,speed:(X%2===0?1:-1)*(.14+X%3*.02)})}const je=[];for(let X=0;X<pe;X++){const Xe=Ie[X%Ie.length],it=Math.floor(X/Ie.length);je.push({herd:Xe,offsetAng:it*.78+V(X,2,7)*.35,radialFactor:.52+V(X,5,3)*.65,phase:V(X,9,1)*Math.PI*2,scale:.85+V(X,4,8)*.38})}const O=240,D=.0038*n,{bellGeo:se,tentGeo:xe}=dy(D),oe=new ze({color:16047359,emissive:12735743,emissiveIntensity:.12,transparent:!0,opacity:.35,roughness:.25,depthWrite:!1,blending:Rn,side:wt}),ue=new dn({color:new ne(.85,.75,1.05),transparent:!0,opacity:.28,depthWrite:!1,blending:Rn});oe.userData.animatedEmissive=!0,ue.userData.animatedEmissive=!0;const Re=new St(se,oe,O),we=new St(xe,ue,O);Re.frustumCulled=!1,we.frustumCulled=!1,i.add(Re,we);const Ne=[];for(let X=0;X<O;X++){let Xe,it,K;if(X<75){const le=X<45?Tt[3]:Tt[0];Xe=l(le.capDir);const Z=V(X,3,15)*Math.PI*2,ye=Math.sqrt(V(X,6,11))*(.075/3.2);it=Xe.normalDir.clone().addScaledVector(Xe.e1,Math.cos(Z)*ye).addScaledVector(Xe.e2,Math.sin(Z)*ye).normalize(),K=Ar(it.x,it.y,it.z,0,s)}else{const le=v[(X*11+Math.floor(V(X,2,13)*13))%v.length];it=le.dir,Xe=l(it),K=le.elev}Ne.push({frame:Xe,alt:t+K+(.015+V(X,9,7)*.068)*n,phase:V(X,2,5)*Math.PI*2,scale:.72+V(X,8,3)*.78})}const dt=Tt[6],Ee=l(dt.capDir),Ue=[];for(let X=0;X<1200;X++){const Xe=V(X,11,29)*Math.PI*2,it=Math.sqrt(V(X,17,7))*(.14/3.2),K=Ee.normalDir.clone().addScaledVector(Ee.e1,Math.cos(Xe)*it).addScaledVector(Ee.e2,Math.sin(Xe)*it).normalize(),le=mi(K.x,K.y,K.z,a,r,3);le.nation==="water"&&le.waterFactor>.92&&le.elev<-.045&&Ue.push({dir:K,elev:le.elev})}Ue.length===0&&Ue.push({dir:Ee.normalDir.clone(),elev:-.095});const Je=5,ct=.0145*n,{bodyGeo:He,glowGeo:mt}=fy(ct),ht=new ze({color:2508894,roughness:.42,metalness:.14}),ft=new ze({color:5826815,emissive:61695,emissiveIntensity:.06,roughness:.3});ft.userData.animatedEmissive=!0;const q=new St(He,ht,Je),Ce=new St(mt,ft,Je);q.frustumCulled=!1,Ce.frustumCulled=!1,i.add(q,Ce);const me=[];for(let X=0;X<Je;X++){const Xe=Ue[Math.floor(X/Je*Ue.length)%Ue.length];me.push({frame:l(Xe.dir),orbitRad:(.055+V(X,3,19)*.065)/3.2,depthRatio:.45+V(X,8,13)*.25,phi0:V(X,5,23)*Math.PI*2,omega:(X%2===0?1:-1)*(.11+V(X,2,17)*.06),phase:V(X,7,11)*Math.PI*2,scale:.85+V(X,9,4)*.42})}const Me=24,ke=.0056*n,{bodyGeo:Fe,flipperGeo:Ze}=py(ke),kt=new ze({color:1465976,emissive:51455,emissiveIntensity:.06,roughness:.35}),Ht=new ze({color:2132126,emissive:2424800,emissiveIntensity:.06,roughness:.38});kt.userData.animatedEmissive=!0,Ht.userData.animatedEmissive=!0;const gt=new St(Fe,kt,Me),hn=new St(Ze,Ht,Me);gt.frustumCulled=!1,hn.frustumCulled=!1,i.add(gt,hn);const an=[];for(let X=0;X<Me;X++){const Xe=Ue[(X*19+3)%Ue.length];an.push({frame:l(Xe.dir),orbitRad:(.025+V(X,4,29)*.038)/3.2,phi0:V(X,12,5)*Math.PI*2,omega:(X%2===0?1:-1)*(.28+V(X,6,17)*.14),phase:V(X,8,21)*Math.PI*2,scale:.78+V(X,3,14)*.48})}const Mn=220,qn=6,An=.002*n,tt=my(An),Et=new ze({color:16777215,emissive:3201279,emissiveIntensity:.08,roughness:.28});Et.userData.animatedEmissive=!0;const un=new St(tt,Et,Mn);un.name="Pandora_Reef_Fish_Schools",un.frustumCulled=!1,un.castShadow=!1,un.receiveShadow=!1;const On=[new ne(2683647),new ne(16757816),new ne(16735912),new ne(6619064),new ne(6728447)];for(let X=0;X<Mn;X++)un.setColorAt(X,On[Math.floor(V(X,15,3)*On.length)%On.length]);un.instanceColor&&(un.instanceColor.needsUpdate=!0),i.add(un);const gn=[];for(let X=0;X<qn;X++){const Xe=Ue[(X*47+7)%Ue.length];gn.push({frame:l(Xe.dir),orbitRad:(.022+V(X,9,13)*.035)/3.2,omega:(X%2===0?1:-1)*(.22+V(X,2,19)*.12),phi0:V(X,6,31)*Math.PI*2,phase:V(X,14,7)*Math.PI*2,centerDir:new b,centerAlt:t-.035,aheadDir:new b,tangentForward:new b,tangentRight:new b})}const kn=[];for(let X=0;X<Mn;X++)kn.push({schoolIdx:X%qn,localAng:V(X,4,17)*Math.PI*2,localRad:(.0025+V(X,9,23)*.011)*(.5+.5*(X%3))/3.2,vertOff:(V(X,13,5)-.5)*.018,phase:V(X,21,11)*Math.PI*2,scale:.72+V(X,7,19)*.65});const sn=new b,Ct=new b,yn=new b,vn=new b,vt=new b,I=new b,ee=new b,ie=new nt,ae=new nt,$=new ut,_e=new ut,Be=new b(1,0,0),$e=new b(0,0,1),qe=new b,rt=new b(0,1,0);new b;const pt=(X,Xe,it,K,le,Z,ye,ce,re,Q,Pe,et)=>{vt.copy(ye).normalize(),I.copy(ce).sub(ye),I.lengthSq()<1e-12&&I.set(1,0,0),I.normalize(),ee.crossVectors(vt,I).normalize(),I.crossVectors(ee,vt).normalize(),ie.makeBasis(ee,vt,I),_e.setFromAxisAngle($e,et),ae.makeRotationFromQuaternion(_e),ie.multiply(ae),ie.setPosition(ye),qe.setScalar(Pe),ie.scale(qe),Xe.setMatrixAt(X,ie),$.setFromAxisAngle($e,re),ae.makeRotationFromQuaternion($),ae.premultiply(ie),it.setMatrixAt(X,ae),$.setFromAxisAngle($e,-re),ae.makeRotationFromQuaternion($),ae.premultiply(ie),K.setMatrixAt(X,ae),$.setFromAxisAngle($e,Q),ae.makeRotationFromQuaternion($),ae.setPosition(0,0,-x*.72),ae.premultiply(ie),le.setMatrixAt(X,ae),$.setFromAxisAngle($e,-Q),ae.makeRotationFromQuaternion($),ae.setPosition(0,0,-x*.72),ae.premultiply(ie),Z.setMatrixAt(X,ae)},Le=(X,Xe,it)=>{const K=X.phi0+X.omega*Xe,le=X.orbitRad+Math.sin(Xe*.8+X.phase)*(.008/3.2)*n,Z=X.alt+Math.sin(Xe*1.15+X.phase)*.006*n;it.copy(X.frame.normalDir).addScaledVector(X.frame.e1,Math.cos(K)*le).addScaledVector(X.frame.e2,Math.sin(K)*le).normalize().multiplyScalar(Z)};return{group:i,update(X,Xe=1,it=.5,K=0){if(!i.parent||!i.parent.visible)return;const le=H.smoothstep(-it,-.1,.04);e?.updateDayNight&&e.updateDayNight(it,X,K);const Z=m.attributes.position;for(let re=0;re<c;re++){const Q=d[re],Pe=(Q.risePhase+X*Q.driftSpeed*3)%1*.015,et=Q.baseAlt+Pe,lt=Math.sin(X*.65+Q.risePhase)*.0022;Z.setXYZ(re,Q.dir.x*et+lt,Q.dir.y*et,Q.dir.z*et+lt)}Z.needsUpdate=!0,p.opacity=H.lerp(.14,.92,le);for(let re=0;re<y;re++){const Q=k[re];Le(Q,X,sn),Le(Q,X+.05,Ct);const Pe=Math.sin(X*.65+Q.phase)>-.2?.46:.1,et=Math.sin(X*4.9+Q.phase)*Pe,lt=Math.sin(X*4.9+Q.phase-.85)*Pe*.82,Yt=Q.omega>0?-.32:.32;pt(re,A,M,S,C,R,sn,Ct,et,lt,Q.scale,Yt)}A.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,T.emissiveIntensity=H.lerp(.06,1.45,le),w.emissiveIntensity=H.lerp(.08,1.85,le),E.emissiveIntensity=H.lerp(.08,1.65,le);for(let re=0;re<z;re++){const Q=fe[re];Le(Q,X,sn),Le(Q,X+.08,Ct);const Pe=Math.sin(X*2.5+Q.phase)*.42,et=Math.sin(X*2.5+Q.phase-.9)*.35;pt(re,W,te,j,be,Y,sn,Ct,Pe,et,1,Q.omega>0?-.25:.25)}W.instanceMatrix.needsUpdate=!0,te.instanceMatrix.needsUpdate=!0,j.instanceMatrix.needsUpdate=!0,be.instanceMatrix.needsUpdate=!0,Y.instanceMatrix.needsUpdate=!0,U.emissiveIntensity=H.lerp(.08,1.9,le),L.emissiveIntensity=H.lerp(.1,2.15,le);const ye=(re,Q,Pe,et)=>{const lt=re.offsetAng+re.herd.speed*Q,Yt=re.herd.radOffset*re.radialFactor;et.copy(re.herd.normalDir).addScaledVector(re.herd.e1,Math.cos(lt)*Yt).addScaledVector(re.herd.e2,Math.sin(lt)*Yt).normalize();const rn=Ar(et.x,et.y,et.z,0,s);Pe.copy(et).multiplyScalar(t+rn)};for(let re=0;re<pe;re++){const Q=je[re];ye(Q,X,sn,vt),ye(Q,X+.08,Ct,yn),I.copy(Ct).sub(sn).normalize(),ee.crossVectors(vt,I).normalize(),I.crossVectors(ee,vt).normalize(),ie.makeBasis(ee,vt,I),ie.setPosition(sn),qe.setScalar(Q.scale),ie.scale(qe),De.setMatrixAt(re,ie);const Pe=Math.sin(X*4.5+Q.phase)*.42;$.setFromAxisAngle(Be,Pe),ae.makeRotationFromQuaternion($),ae.setPosition(0,he*.72,he*.52),ae.premultiply(ie),B.setMatrixAt(re,ae),$.setFromAxisAngle(Be,-Pe),ae.makeRotationFromQuaternion($),ae.setPosition(0,he*.72,-he*.56),ae.premultiply(ie),ot.setMatrixAt(re,ae)}De.instanceMatrix.needsUpdate=!0,B.instanceMatrix.needsUpdate=!0,ot.instanceMatrix.needsUpdate=!0,Ae.emissiveIntensity=H.lerp(0,.95,le);for(let re=0;re<O;re++){const Q=Ne[re],Pe=Math.sin(X*1.15+Q.phase)*.0045*n,et=Math.cos(X*.45+Q.phase)*(.004/3.2)*n,lt=Math.sin(X*.35+Q.phase)*(.004/3.2)*n;vt.copy(Q.frame.normalDir).addScaledVector(Q.frame.e1,et).addScaledVector(Q.frame.e2,lt).normalize(),sn.copy(vt).multiplyScalar(Q.alt+Pe);const Yt=Math.sin(X*2.8+Q.phase),rn=1+Yt*.16;$.setFromUnitVectors(rt,vt),qe.set(Q.scale*rn,Q.scale/Math.sqrt(rn),Q.scale*rn),ie.compose(sn,$,qe),Re.setMatrixAt(re,ie),qe.set(Q.scale,Q.scale*(1+Yt*.08),Q.scale),ie.compose(sn,$,qe),we.setMatrixAt(re,ie)}Re.instanceMatrix.needsUpdate=!0,we.instanceMatrix.needsUpdate=!0,oe.opacity=H.lerp(.32,.82,le),oe.emissiveIntensity=H.lerp(.08,2.35,le),ue.opacity=H.lerp(.24,.65,le),ue.color.setRGB(H.lerp(.85,1.4,le),H.lerp(.88,.85,le),H.lerp(.96,2.2,le));const ce=(re,Q,Pe,et,lt,Yt,rn,Ft,En,Rt)=>{const In=Pe+et*Ft;Rt.copy(re.normalDir).addScaledVector(re.e1,Math.cos(In)*Q).addScaledVector(re.e2,Math.sin(In)*Q).normalize();const Jn=Ar(Rt.x,Rt.y,Rt.z,0,s),ri=Math.min(rn-.004,Jn+Yt),Is=H.lerp(ri,rn,lt);En.copy(Rt).multiplyScalar(t+Is)};for(let re=0;re<Je;re++){const Q=me[re];ce(Q.frame,Q.orbitRad,Q.phi0,Q.omega,Q.depthRatio,.015,-.016,X,sn,vt),ce(Q.frame,Q.orbitRad,Q.phi0,Q.omega,Q.depthRatio,.015,-.016,X+.14,Ct,vn),I.copy(Ct).sub(sn),I.lengthSq()<1e-12&&I.set(1,0,0),I.normalize(),ee.crossVectors(vt,I).normalize(),I.crossVectors(ee,vt).normalize();const Pe=Math.sin(X*1.15+Q.phase)*.06;$.setFromAxisAngle(Be,Pe),ie.makeBasis(ee,vt,I),ie.setPosition(sn),qe.setScalar(Q.scale),ie.scale(qe),ae.makeRotationFromQuaternion($),ie.multiply(ae),q.setMatrixAt(re,ie),Ce.setMatrixAt(re,ie)}q.instanceMatrix.needsUpdate=!0,Ce.instanceMatrix.needsUpdate=!0,ft.emissiveIntensity=H.lerp(.06,1.85,le);for(let re=0;re<Me;re++){const Q=an[re],Pe=.55+Math.sin(X*.75+Q.phase)*.25;ce(Q.frame,Q.orbitRad,Q.phi0,Q.omega,Pe,.008,-.01,X,sn,vt),ce(Q.frame,Q.orbitRad,Q.phi0,Q.omega,Pe,.008,-.01,X+.07,Ct,vn),I.copy(Ct).sub(sn),I.lengthSq()<1e-12&&I.set(1,0,0),I.normalize(),ee.crossVectors(vt,I).normalize(),I.crossVectors(ee,vt).normalize(),ie.makeBasis(ee,vt,I),ie.setPosition(sn),qe.setScalar(Q.scale),ie.scale(qe),gt.setMatrixAt(re,ie);const et=Math.sin(X*5.4+Q.phase)*.42;$.setFromAxisAngle($e,et),ae.makeRotationFromQuaternion($),ae.premultiply(ie),hn.setMatrixAt(re,ae)}gt.instanceMatrix.needsUpdate=!0,hn.instanceMatrix.needsUpdate=!0,kt.emissiveIntensity=H.lerp(.06,1.35,le),Ht.emissiveIntensity=H.lerp(.08,1.75,le);for(let re=0;re<qn;re++){const Q=gn[re],Pe=Q.phi0+Q.omega*X,et=Q.phi0+Q.omega*(X+.06);Q.centerDir.copy(Q.frame.normalDir).addScaledVector(Q.frame.e1,Math.cos(Pe)*Q.orbitRad).addScaledVector(Q.frame.e2,Math.sin(Pe)*Q.orbitRad).normalize(),Q.aheadDir.copy(Q.frame.normalDir).addScaledVector(Q.frame.e1,Math.cos(et)*Q.orbitRad).addScaledVector(Q.frame.e2,Math.sin(et)*Q.orbitRad).normalize();const lt=Ar(Q.centerDir.x,Q.centerDir.y,Q.centerDir.z,0,s),Yt=Math.min(-.022,lt+.01),rn=H.lerp(Yt,-.018,.48+.25*Math.sin(X*.65+Q.phase));Q.centerAlt=t+rn,Q.tangentForward.copy(Q.aheadDir).sub(Q.centerDir),Q.tangentForward.lengthSq()<1e-12&&Q.tangentForward.set(1,0,0),Q.tangentForward.normalize(),Q.tangentRight.crossVectors(Q.centerDir,Q.tangentForward).normalize(),Q.tangentForward.crossVectors(Q.tangentRight,Q.centerDir).normalize()}for(let re=0;re<Mn;re++){const Q=kn[re],Pe=gn[Q.schoolIdx],et=Q.localAng+X*1.15,lt=Math.sin(X*3.4+Q.phase)*.0024;vt.copy(Pe.centerDir).addScaledVector(Pe.tangentRight,Math.cos(et)*Q.localRad).addScaledVector(Pe.tangentForward,Math.sin(et)*Q.localRad).normalize();const Yt=Math.min(t-.008,Pe.centerAlt+Q.vertOff+lt);sn.copy(vt).multiplyScalar(Yt);const rn=Math.sin(X*8.5+Q.phase)*.14;$.setFromAxisAngle(Be,0),I.copy(Pe.tangentForward).addScaledVector(Pe.tangentRight,rn).normalize(),ee.crossVectors(vt,I).normalize(),I.crossVectors(ee,vt).normalize(),ie.makeBasis(ee,vt,I),ie.setPosition(sn),qe.setScalar(Q.scale),ie.scale(qe),un.setMatrixAt(re,ie)}un.instanceMatrix.needsUpdate=!0,Et.emissiveIntensity=H.lerp(.08,1.65,le)}}}const Pn=157.5,Li=4.8,Er=62,Ms=.72,ec=1/3.5,vy=3,Sd=.88,xy=35e3,_y=36e3,My=3500,yy=1200,wd=H.degToRad(68),Tr=new b(0,Math.cos(wd),Math.sin(wd)).normalize(),by={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:55.2,eccentricity:.045,orbitOmega:.0028,localRadius:6.336,groundFloorAlt:1.65,kmScale:27840,rotationSpeed:.014,axialOmega:.015,axialTiltX:H.degToRad(6),axialTiltZ:H.degToRad(21),initialSpinAngle:-.95,capLocalDir:Tr,landable:!0,hasProceduralWorld:!0,fogColor:5944012,maxFogDensity:.0036,skyColor:2523838,particleColor:10417919,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new b(0,6.336*2.25,6.336*.85),lowOrbitLookAt:new b(0,6.336,0),highCloudOffset:new b(-.08,6.336*1.48,6.336*.36),aerialOffset:new b(-.025,6.336+.072,.095),aerialLookAt:new b(.028,6.336+.048,-.022),sunColor:16773332,sunIntensity:2.85,ambientColor:2377264,ambientIntensity:.92,hemiSkyColor:6469887,hemiGroundColor:1985064,hemiIntensity:1.45,localLightColor:61695,localBounceColor:12073215,bloomStrength:.54,skyDome:{zenith:1866720,mid:5420780,horizon:9365738,sunGlow:16773320,zenithAlpha:.92,starFloor:0}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:88.8,eccentricity:.035,orbitOmega:.00137,localRadius:6.816,groundFloorAlt:.32,minSpeed:3.2,glbLocalScale:.0038*ec*3.8,kmScale:29760,rotationSpeed:.011,axialOmega:.012,axialTiltX:H.degToRad(-5),axialTiltZ:H.degToRad(18.5),initialSpinAngle:-.62,capLocalDir:Tr,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0044,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new b(0,6.816*2.25,6.816*.85),lowOrbitLookAt:new b(0,6.816,0),highCloudOffset:new b(-.06,6.816*1.48,6.816*.36),aerialOffset:new b(-.012,6.816+.145,.195),aerialLookAt:new b(.005,6.816+.175,-.055),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.48,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:127.2,eccentricity:.05,orbitOmega:797e-6,localRadius:7.296,groundFloorAlt:.95,glbLocalScale:.004*ec,kmScale:32640,rotationSpeed:.01,axialOmega:.011,axialTiltX:H.degToRad(8),axialTiltZ:H.degToRad(-23.5),initialSpinAngle:-1.18,capLocalDir:Tr,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new b(-.32,7.296*2.25,7.296*.85),lowOrbitLookAt:new b(0,7.296,0),highCloudOffset:new b(-.18,7.296*1.48,7.296*.36),aerialOffset:new b(-.025,7.296+.08,.092),aerialLookAt:new b(.003,7.296+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:170.4,eccentricity:.04,orbitOmega:516e-6,localRadius:7.776,groundFloorAlt:.95,glbLocalScale:.0039*ec,kmScale:36e3,rotationSpeed:.009,axialOmega:.01,axialTiltX:H.degToRad(-6),axialTiltZ:H.degToRad(24),initialSpinAngle:-.88,capLocalDir:Tr,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new b(0,7.776*2.25,7.776*.85),lowOrbitLookAt:new b(0,7.776,0),highCloudOffset:new b(.08,7.776*1.48,7.776*.36),aerialOffset:new b(0,7.776+.042,.102),aerialLookAt:new b(0,7.776+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:220.8,eccentricity:.06,orbitOmega:352e-6,localRadius:8.88,groundFloorAlt:2,kmScale:56640,rotationSpeed:.05,axialOmega:.024,axialTiltX:H.degToRad(7),axialTiltZ:H.degToRad(26),initialSpinAngle:0,landable:!1}};class Sy{constructor({scene:e,camera:t,renderer:n,controls:i,starfield:s,cockpitParticles:a,bloomPass:r,ssaoPass:l,radialBlurPass:c,onStatusUpdate:h}){this.scene=e,this.camera=t,this.renderer=n||null,this.controls=i,this.starfield=s,this.cockpitParticles=a,this.bloomPass=r,this.ssaoPass=l||null,this.radialBlurPass=c||null,this.onStatusUpdate=h||(()=>{}),this.dracoLoader=new n1,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new yM,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Ut,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(Pn),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.lastP2DistrictId="city_center",this.lastP2DistrictName="City Center · Corpo Plaza",this.elapsedTime=0,this.simulationTime=0,this.timeScales=[1,10,60],this.timeScaleIndex=0,this.timeScale=1,this._tmpInvQuat=new ut,this._tmpCapInvQuat=new ut,this._tmpLocalDir=new b,this._tmpRadial=new b,this._tmpSunDir=new b,this._tmpPlanetToSun=new b,this._tmpUp=new b(0,1,0),this._tmpStationPos=new b,this._tmpColorA=new ne,this._tmpColorB=new ne,this._tmpColorC=new ne,this._tmpSkyColor=new ne,this._tmpFogColor=new ne,this._p2Atmo={fogDay:new ne,fogNight:new ne,fogDusk:new ne,hemiSky:new ne,hemiGround:new ne,ambient:new ne,localLight:new ne,localBounce:new ne,fogDensity:.0044,bloomCap:.48},this._identityQuat=new ut,this._tmpCamFwd=new b,this._tmpRayOccl=new b,this._tmpLocalCam=new b,this._tmpIblZenith=new ne(329746),this._tmpIblHorizon=new ne(1319482),this._tmpIblGround=new ne(263692),this._tmpIblSun=new ne(16771264),this.skyDome=E1(),this.scene.add(this.skyDome);const u=l1();this.machConeMesh=u.mesh,this.machConeUniforms=u.uniforms,this.camera.add(this.machConeMesh),this.solarLensflare=null,this.solarLensflareElements=[],this._setupLighting(),this._initIblPipeline()}_initIblPipeline(){if(!this.renderer||typeof this.renderer.getContext!="function"){this.pmremGenerator=null;return}this.pmremGenerator=new Yc(this.renderer),this.pmremGenerator.compileEquirectangularShader(),this.envRenderTarget=null,this._lastIblTime=-99,this._lastIblPlanetId=null,this._lastIblSunElev=-9,this._lastIblAltRatio=-9,this.iblScene=new gh,this.iblUniforms={uZenithColor:{value:new ne(1594024)},uHorizonColor:{value:new ne(7914728)},uGroundColor:{value:new ne(1583132)},uSunDir:{value:new b(.4,.7,.3)},uSunColor:{value:new ne(2.4,2.1,1.6)}};const e=new ln(20,24,16),t=new nn({uniforms:this.iblUniforms,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uZenithColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uGroundColor;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec3 vDir;
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 col = h >= 0.0
            ? mix(uHorizonColor, uZenithColor, smoothstep(0.0, 0.78, h))
            : mix(uHorizonColor * 0.75, uGroundColor, smoothstep(0.0, -0.45, h));
          float sunSpot = pow(max(dot(d, normalize(uSunDir)), 0.0), 28.0);
          col += uSunColor * sunSpot * 1.4;
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:Hn,depthWrite:!1});this.iblScene.add(new Ve(e,t))}_updateDynamicIbl({planetId:e,zenithColor:t,horizonColor:n,groundColor:i,sunDir:s,sunColor:a,sunElev:r,altRatio:l,intensity:c}){if(!this.pmremGenerator||!this.iblScene)return;this.scene.environmentIntensity=c;const h=this.elapsedTime-this._lastIblTime;if(!(e!==this._lastIblPlanetId||Math.abs(r-this._lastIblSunElev)>.06||Math.abs(l-this._lastIblAltRatio)>.08||h>.45))return;this.iblUniforms.uZenithColor.value.copy(t),this.iblUniforms.uHorizonColor.value.copy(n),this.iblUniforms.uGroundColor.value.copy(i),this.iblUniforms.uSunDir.value.copy(s).normalize(),this.iblUniforms.uSunColor.value.copy(a).multiplyScalar(Math.max(.25,c*2.2));const d=this.envRenderTarget;this.envRenderTarget=this.pmremGenerator.fromScene(this.iblScene,.04),this.scene.environment=this.envRenderTarget.texture,d&&d.dispose(),this._lastIblTime=this.elapsedTime,this._lastIblPlanetId=e,this._lastIblSunElev=r,this._lastIblAltRatio=l}_setupLighting(){this.ambientLight=new Nf(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new X_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new Ma(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new bh(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.planetaryDirLight.castShadow=!1,this.planetaryDirLight.shadow.mapSize.set(2048,2048),this.planetaryDirLight.shadow.camera.near=4,this.planetaryDirLight.shadow.camera.far=520;const e=180;this.planetaryDirLight.shadow.camera.left=-e,this.planetaryDirLight.shadow.camera.right=e,this.planetaryDirLight.shadow.camera.top=e,this.planetaryDirLight.shadow.camera.bottom=-e,this.planetaryDirLight.shadow.bias=-4e-4,this.planetaryDirLight.shadow.normalBias=.03,this.scene.add(this.planetaryDirLight),this.scene.add(this.planetaryDirLight.target),this.localAtmoLight=new Ma(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new Ma(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(2.72),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new b(3.4,2.35,.72)},uHotColor:{value:new b(4,3.1,1.45)},uLimbColor:{value:new b(2.2,.85,.14)}};const n=new nn({uniforms:this.sunPlasmaUniforms,vertexShader:`
        #include <common>
        #include <logdepthbuf_pars_vertex>
        varying vec3 vLocalDir;
        varying vec3 vWorldPos;
        varying vec3 vWorldNorm;
        void main() {
          vLocalDir = length(position) > 0.0001 ? normalize(position) : vec3(0.0, 1.0, 0.0);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vWorldNorm = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }
      `,fragmentShader:`
        #include <common>
        #include <logdepthbuf_pars_fragment>
        uniform float uTime;
        uniform vec3 uCoreColor;
        uniform vec3 uHotColor;
        uniform vec3 uLimbColor;
        varying vec3 vLocalDir;
        varying vec3 vWorldPos;
        varying vec3 vWorldNorm;

        float solarTurbulence(vec3 p, float t) {
          float s = 0.0;
          s += sin(p.x * 7.0 + t * 0.9) * cos(p.y * 6.5 - t * 0.7) * sin(p.z * 7.2 + t * 0.6);
          s += 0.5 * sin(p.x * 15.0 - t * 1.4) * sin(p.y * 14.0 + t * 1.1) * cos(p.z * 16.0);
          return clamp(s * 0.48 + 0.52, 0.0, 1.0);
        }

        void main() {
          #include <logdepthbuf_fragment>
          float gran = solarTurbulence(vLocalDir, uTime);
          vec3 vDelta = cameraPosition - vWorldPos;
          vec3 viewDir = length(vDelta) > 0.0001 ? normalize(vDelta) : vec3(0.0, 1.0, 0.0);
          vec3 wn = length(vWorldNorm) > 0.0001 ? normalize(vWorldNorm) : vec3(0.0, 1.0, 0.0);

          // Borde nítido con leve oscurecimiento al limbo
          float ndotv = max(dot(wn, viewDir), 0.0001);
          float limb = pow(ndotv, 0.38);

          vec3 col = mix(uLimbColor, uCoreColor, smoothstep(0.08, 0.65, limb));
          col = mix(col, uHotColor, smoothstep(0.6, 0.95, gran) * limb * 0.65);
          col = clamp(col, 0.0, 4.0);

          gl_FragColor = vec4(col, 1.0);
        }
      `,fog:!1});this.sunNode.traverse(v=>{v.isMesh&&(v.material=n)});const i=new nn({uniforms:{uColor:{value:new b(2.8,1.35,.35)}},vertexShader:`
        #include <common>
        #include <logdepthbuf_pars_vertex>
        varying vec3 vWorldPos;
        varying vec3 vWorldNorm;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vWorldNorm = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }
      `,fragmentShader:`
        #include <common>
        #include <logdepthbuf_pars_fragment>
        uniform vec3 uColor;
        varying vec3 vWorldPos;
        varying vec3 vWorldNorm;
        void main() {
          #include <logdepthbuf_fragment>
          vec3 vDelta = cameraPosition - vWorldPos;
          vec3 viewDir = length(vDelta) > 0.0001 ? normalize(vDelta) : vec3(0.0, 1.0, 0.0);
          vec3 wn = length(vWorldNorm) > 0.0001 ? normalize(vWorldNorm) : vec3(0.0, 1.0, 0.0);
          float ndotv = abs(dot(wn, viewDir));
          float glow = pow(max(1.0 - ndotv, 0.0001), 4.6) * smoothstep(0.02, 0.4, ndotv);
          vec3 col = clamp(uColor * glow, 0.0, 3.0);
          gl_FragColor = vec4(col, clamp(glow * 0.42, 0.0, 0.65));
        }
      `,transparent:!0,depthWrite:!1,fog:!1,blending:Rn,side:Hn}),s=new Ve(new ln(2.52*3.2,48,48),i);s.name="Solar_Tight_Corona";const a=document.createElement("canvas");a.width=512,a.height=512;const r=a.getContext("2d");r.clearRect(0,0,512,512);const l=256,c=256,h=r.createRadialGradient(l,c,4,l,c,130);h.addColorStop(0,"rgba(255, 245, 205, 0.72)"),h.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),h.addColorStop(1,"rgba(255, 140, 40, 0.0)"),r.fillStyle=h,r.beginPath(),r.arc(l,c,130,0,Math.PI*2),r.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((v,m)=>{r.save(),r.translate(l,c),r.rotate(v+.18);const p=m===0?242:210,_=r.createLinearGradient(-p,0,p,0);_.addColorStop(0,"rgba(255, 210, 120, 0.0)"),_.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),_.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),_.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),_.addColorStop(1,"rgba(255, 210, 120, 0.0)"),r.fillStyle=_,r.beginPath(),r.ellipse(0,0,p,3.2,0,0,Math.PI*2),r.fill(),r.restore()});const d=new fn(a);d.colorSpace=Xt;const f=new Ef({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:Rn}),g=new h_(f);g.name="Solar_Diffraction_Rays",g.scale.set(10.8*3.2,10.8*3.2,1),t&&(t.add(s),t.add(g)),this._createSolarLensflare()}_createSolarLensflare(){if(this.solarLensflare||typeof document>"u")return;const e=(a,r)=>{const l=document.createElement("canvas");l.width=a,l.height=a;const c=l.getContext("2d"),h=a*.5;if(r){const d=c.createRadialGradient(h,h,2,h,h,h);d.addColorStop(0,"rgba(255, 252, 240, 0.95)"),d.addColorStop(.18,"rgba(255, 232, 175, 0.52)"),d.addColorStop(.45,"rgba(255, 180, 95, 0.14)"),d.addColorStop(1,"rgba(255, 140, 40, 0.0)"),c.fillStyle=d,c.fillRect(0,0,a,a);const f=c.createLinearGradient(0,h,a,h);f.addColorStop(0,"rgba(180, 225, 255, 0.0)"),f.addColorStop(.5,"rgba(255, 240, 200, 0.42)"),f.addColorStop(1,"rgba(180, 225, 255, 0.0)"),c.fillStyle=f,c.beginPath(),c.ellipse(h,h,h*.96,Math.max(2,a*.025),0,0,Math.PI*2),c.fill()}else{const d=c.createRadialGradient(h,h,h*.45,h,h,h*.96);d.addColorStop(0,"rgba(255, 255, 255, 0.0)"),d.addColorStop(.58,"rgba(165, 215, 255, 0.22)"),d.addColorStop(.82,"rgba(255, 210, 150, 0.28)"),d.addColorStop(1,"rgba(255, 255, 255, 0.0)"),c.fillStyle=d,c.beginPath(),c.arc(h,h,h*.96,0,Math.PI*2),c.fill()}const u=new fn(l);return u.colorSpace=Xt,u},t=e(256,!0),n=e(128,!1),i=new Ca;i.name="Central_Solar_Lensflare",i.userData.skipSSAO=!0;const s=[{tex:t,size:320,dist:0,hex:16773328},{tex:n,size:78,dist:.34,hex:16769192},{tex:n,size:54,dist:.58,hex:9097471},{tex:n,size:96,dist:.88,hex:16758904}];this.solarLensflareElements=s.map(a=>{const r=new ne(a.hex),l=new Ah(a.tex,a.size,a.dist,r.clone());return l.baseColor=r,i.addElement(l),l}),i.position.set(0,0,0),this.scene.add(i),this.solarLensflare=i}setRenderer(e){this.renderer=e||null,this.pmremGenerator||this._initIblPipeline()}_hideAllReflectiveWaters(e=null){for(const[,t]of this.planetNodes)if(!(t===e||!t.reflectiveWaters))for(const n of t.reflectiveWaters)n.water&&(n.water.visible=!1)}_updateReflectiveWaters(e,t,n,i){if(!e||!e.reflectiveWaters||!e.reflectiveWaters.length)return;if(!t){for(const r of e.reflectiveWaters)r.water&&(r.water.visible=!1);return}e.surfaceCapGroup.updateMatrixWorld();let s=null,a=57600;for(const r of e.reflectiveWaters){if(!r.water)continue;if(r.isOceanSurface&&n>.06){r.water.visible=!1;continue}this._tmpStationPos.copy(r.centerLocal).applyMatrix4(e.surfaceCapGroup.matrixWorld);const l=this._tmpStationPos.distanceToSquared(this.camera.position);l<a&&(a=l,s=r)}for(const r of e.reflectiveWaters){if(!r.water)continue;const l=r===s;if(r.water.visible=l,l&&r.water.material?.uniforms){const c=r.water.material.uniforms;c.eye&&c.eye.value.copy(this.camera.position),c.sunDirection&&c.sunDirection.value.copy(i).normalize(),c.sunColor&&c.sunColor.value.copy(this.planetaryDirLight.color)}}}_updateSolarLensflare(e,t,n,i,s){if(!this.solarLensflare||!this.solarLensflareElements.length)return;const a=this.camera.position.lengthSq();if(a<25||t){this.solarLensflare.visible=!1;return}const r=Math.sqrt(a);this._tmpRayOccl.copy(this.camera.position).negate().multiplyScalar(1/r);let l=1;for(const[,c]of this.planetNodes){const h=this._tmpStationPos.copy(c.currWorldPos).sub(this.camera.position),u=h.dot(this._tmpRayOccl);if(u>0&&u<r){const d=Math.max(0,h.lengthSq()-u*u),f=c.config.localRadius*Pn;if(d<f*f){l=0;break}else if(d<f*f*1.08){const g=Math.sqrt(d)/f;l=Math.min(l,H.smoothstep(g,1,1.04))}}}if(e&&l>.01){const c=H.smoothstep(n,-.04,.08),h=H.lerp(1,.68,i);l*=c*h*(1-s)}if(l<=.01){this.solarLensflare.visible=!1;return}this.solarLensflare.visible=!0;for(const c of this.solarLensflareElements)c.color&&c.baseColor&&c.color.copy(c.baseColor).multiplyScalar(l)}cycleTimeScale(){return this.timeScaleIndex=(this.timeScaleIndex+1)%this.timeScales.length,this.timeScale=this.timeScales[this.timeScaleIndex],this.timeScale}syncCameraPostFlight(){if(this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position),this.camera.updateMatrixWorld(),th.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.ssaoPass&&this.ssaoPass.enabled&&this.ssaoPass.ssaoMaterial?.uniforms){const e=this.ssaoPass.ssaoMaterial.uniforms;e.cameraProjectionMatrix&&e.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),e.cameraInverseProjectionMatrix&&e.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse)}(this.localAtmoLight.intensity>.001||this.localBounceLight.intensity>.001)&&(this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,18),this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,-8))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,s)=>{this.gltfLoader.load(e,a=>i(a),void 0,a=>s(a))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const s=Array.isArray(i.material)?i.material:[i.material];for(const a of s)a&&a.emissiveIntensity!==void 0&&a.emissiveIntensity>3.2&&(a.emissiveIntensity=2.2+Math.log10(a.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){n.scale.multiplyScalar(Li);const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(by)){const s=t.getObjectByName(i.spinnerName),a=t.getObjectByName(i.rootName),r=t.getObjectByName(i.bodyName);if(!a)continue;const c=new ui().setFromQuaternion(s?s.quaternion:new ut,"YXZ").y||0,h=i.semiMajorAxis,u=i.eccentricity||.04,d=h*(1-u*u)/(1+u*Math.cos(c));a.position.set(d,0,0);const f=[];let g=0;const v={P1_Moon_A_Ghomrassen:"Luna Ghomrassen",P1_Moon_B_Guermessa:"Luna Guermessa",P2_Moon_NeoLuna:"Neo-Luna",P3_Moon_A_Argent:"Luna Argent",P3_Moon_B_Crimson:"Luna Crimson",P4_Moon_Centax_1:"Centax I",P4_Moon_Centax_2:"Centax II",P4_Moon_Centax_3:"Centax III",P5_Moon_1_InnerShepherd:"Pastora Interior",P5_Moon_2_Polyphemus_Minor:"Polyphemus Minor",P5_Moon_3_Eywa_Outpost:"Puesto Eywa"};this.orbitalGroup.updateMatrixWorld(!0),a.children.forEach(A=>{if(A.name.includes("Moon")&&!A.name.endsWith("_Orbit")){A.scale.multiplyScalar(2.6);let M=.08;A.traverse(C=>{if(C.isMesh&&C.material&&(C.material.fog=!1,C.geometry)){C.geometry.boundingSphere||C.geometry.computeBoundingSphere();const R=(C.geometry.boundingSphere?.radius||.5)*Math.max(C.scale.x,C.scale.y,C.scale.z);R>M&&(M=R)}});const S=2.35+g*.48;if(n==="p1"){const C=i.localRadius*(2.35+g*.62),R=C*(.16+g*.08),N=g===0?-1.85:-.78;A.position.set(Math.cos(N)*C,R,Math.sin(N)*C),a.updateMatrixWorld(!0);const P=new b;A.getWorldPosition(P),f.push({index:g,rawName:A.name,name:v[A.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:A,moonRadius:Math.max(20,M*Math.max(A.scale.x,1)*Pn),baseRadius:C,angle:N,yOffset:R,speed:.014+g*.008,prevWorldPos:P.clone(),currWorldPos:P.clone(),deltaPos:new b})}else{A.position.multiplyScalar(Li),A.position.length()<i.localRadius*S&&A.position.normalize().multiplyScalar(i.localRadius*S),a.updateMatrixWorld(!0);const C=new b;A.getWorldPosition(C);const R=Math.max(i.localRadius*S*.85,Math.hypot(A.position.x,A.position.z));f.push({index:g,rawName:A.name,name:v[A.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:A,moonRadius:Math.max(20,M*Math.max(A.scale.x,1)*Pn),baseRadius:R,angle:Math.atan2(A.position.z,A.position.x),yOffset:A.position.y,speed:.06+g%3*.03,prevWorldPos:C.clone(),currWorldPos:C.clone(),deltaPos:new b})}g++}});const m=new Ut;m.name=`${i.id}_Axial_Tilt`,m.rotation.order="XZY",m.rotation.x=i.axialTiltX||0,m.rotation.z=i.axialTiltZ||0,a.add(m);const p=new Ut;p.name=`${i.id}_Axial_Spin`,p.rotation.y=i.initialSpinAngle||0,m.add(p);let _=null,y=null,x=null;if(i.landable){a.traverse(M=>{M!==a&&M.isMesh&&(M.name.includes("_Body")||M.name.includes("_Atmosphere")||M.name.includes("_Clouds")||M.name.includes("_DarkClouds")||/^Planet_01/i.test(M.name))&&(M.visible=!1)}),_=T1(i,Pn),_.userBaseColors={sunlit:new ne(_.cloudDeckPalette.sunlit),ambient:new ne(_.cloudDeckPalette.ambient),horizon:new ne(_.cloudDeckPalette.horizon)},p.add(_.group),y=_.atmosphere,x=new Ut,x.name=`${i.id}_Cap_Frame`;const A=i.capLocalDir?i.capLocalDir.clone().normalize():new b(0,1,0);x.quaternion.setFromUnitVectors(new b(0,1,0),A),p.add(x)}else{const A=a.children.filter(M=>M!==m&&!M.name.includes("Moon")&&!M.name.includes("_Orbit"));for(const M of A)M.scale.multiplyScalar(Li),p.add(M);y=Hf(i,i.localRadius,1.05),p.add(y)}const T=new Ut;T.name=`${i.id}_Atmosphere_Surface_Detail`,T.visible=!1,(x||p).add(T),this.orbitalGroup.updateMatrixWorld(!0);const w=new b;a.getWorldPosition(w);const E=new ut;p.getWorldQuaternion(E),this.planetNodes.set(n,{config:i,spinner:s,root:a,tiltGroup:m,spinGroup:p,capFrame:x,body:r,orbitalBundle:_,atmosphereShell:y,surfaceCapGroup:T,surfaceLoaded:!1,surfaceLoading:!1,surfaceStreaming:null,surfaceTerrainActivated:!1,lastActivatedThisFrame:0,animators:[],nightMaterials:[],orbitAngle:c,spinAngle:i.initialSpinAngle||0,prevWorldPos:w.clone(),currWorldPos:w.clone(),planetDeltaPos:new b,prevSpinWorldQuat:E.clone(),currSpinWorldQuat:E.clone(),spinQuatDelta:new ut,moonOrbits:f})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95*Li,2.15*Li,2.35*Li),this.controls.setPose(new b(0,5600,19800),new b(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded)return t?.surfacePromise||null;if(t.surfacePromise)return t.surfacePromise;t.surfaceLoading=!0;const n=t.config;return t.surfacePromise=(async()=>{try{if(n.hasProceduralWorld){const s=ay(n);t.surfaceCapGroup.add(s.group),t.pandoraWorld=s,s.terrainSplatUniforms&&(t.splatUniforms=[s.terrainSplatUniforms]),s.reflectiveWaters&&(t.reflectiveWaters=s.reflectiveWaters);const a=gy(n.localRadius,s);t.surfaceCapGroup.add(a.group),t.animators.push(a)}else if(n.surfaceUrl){const s=await this._loadGLB(n.surfaceUrl);if(P1(s,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(s),s.userData?.splatUniforms?.length&&(t.splatUniforms=[...t.splatUniforms||[],...s.userData.splatUniforms]),n.id==="p2"){this._calibrateNightCityMaterials(s);const a=m1(n),r=a.group.getObjectByName("NC_7Districts_Coastal_Terrain");r&&(r.receiveShadow=!0);const l=a.group.getObjectByName("NC_Badlands_Desert_Roads");l&&(l.receiveShadow=!0),a.terrainSplatUniforms&&(t.splatUniforms=[...t.splatUniforms||[],a.terrainSplatUniforms]),a.bayWater&&(t.reflectiveWaters=[{water:a.bayWater,centerLocal:a.bayWater.position.clone(),isOceanSurface:!1}]),t.surfaceCapGroup.add(a.group),t.animators.push(a);const c=yd(n.id,n.localRadius,350);t.surfaceCapGroup.add(c.group),t.animators.push(c),t.animators.push(ly(s))}else if(n.id==="p4"){const a=C1(n,1400);t.surfaceCapGroup.add(a);const r=yd(n.id,n.localRadius,350);t.surfaceCapGroup.add(r.group),t.animators.push(r),t.animators.push(cy(s))}else if(n.id==="p3"){const a=hy(n.localRadius);t.surfaceCapGroup.add(a.group),t.animators.push(a);const r=new Cs(n.localRadius*.038,32),l=new Ta(r,{textureWidth:256,textureHeight:256,waterNormals:Ua(),sunDirection:new b(.4,.7,.3).normalize(),sunColor:16764808,waterColor:1465960,distortionScale:.36,size:3.2,clipBias:.002,alpha:.88,fog:!0});l.name="P3_Perugius_Reflective_Water",l.position.set(.035,n.localRadius+.0025,.015),l.rotation.x=-Math.PI*.5,l.visible=!1,t.surfaceCapGroup.add(l),t.reflectiveWaters=[{water:l,centerLocal:l.position.clone(),isOceanSurface:!1}],t.p3Water=l}}const i=new Set;t.surfaceCapGroup.traverse(s=>{if(!s.isMesh&&!s.isInstancedMesh)return;const a=Array.isArray(s.material)?s.material:[s.material];for(const r of a){if(!r||i.has(r)||r.userData?.animatedEmissive)continue;i.add(r),r.emissive&&r.emissiveIntensity!==void 0&&(r.emissiveMap||r.emissive.r>.008||r.emissive.g>.008||r.emissive.b>.008)&&t.nightMaterials.push({material:r,baseEmissive:r.emissiveIntensity,tier:r.userData?.nightTier||"default"})}}),this._buildSurfaceStreamingQueue(t),t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}})(),t.surfacePromise}_classifySurfaceTier(e,t){const n=/Shanty|Slum|Rancho|MicroWindow|VerticalNeon|Japantown_Neon|Streetlamp|FlaresAndFires|Industrial_Smoke|Abandoned_FerrisWheel|Giant_Ferns|Broadleaf_Shrubs|Ground_Clutter|Flowers_|Mushrooms_|Mossy_Rocks|WaterLilies|Hanging_Vines|Waterfall|Floating_Cinders|Reef_Corals|Giant_Kelp|Underwater_Caustics|Metkayina_Torches|Ash_Bonfires|Volcano_Smoke|HoloSign_|Sign_3D_|EdgeBeacon|Antenna|Beacon|Billboard|Lamp/i,i=/H10_Megablock|Stacked_Container|PortDepot|Charter_Heywood|NorthOak|Pacifica_Skeleton|Bay_Connecting_Bridges|Badlands_Rocks|Oil_Pump|WindTurbine|Greenhouse|Nomad|Desert_Roads|AV_Blimp|Urban_AV_Traffic|TowerBand|Medieval_Life|Geyser|IkranRookery|TreeOfSouls|Metkayina|Ash_Volcano|Giant_Bone|Tribal_Huts|Charred_Trees|Lava_Fissures|VineBridges|Canyon_Spires|Coral_Reefs|Valley_Arch|Inland_Lakes|Canopy_Under|Alien_Palms|Gnarled_Root|Alien_Redwood/i,s=/Terrain|Crystal_Ocean|Rivers|Hometree|HallelujahMountains|Tree_Trunks|Canopy_Tops|NeoMil|NeoKitsch|CityCenter_LightBeams|Procedural_Districts_Terrain/i,a=e.name||"";if(n.test(a))return"micro";if(i.test(a))return"medium";if(s.test(a))return"macro";let r=e.parent;for(;r&&r!==t;){const l=r.name||"";if(n.test(l))return"micro";if(i.test(l)||/Pandora_Life_System|Urban_AV_Traffic|TowerBand/i.test(l))return"medium";r=r.parent}return"macro"}_buildSurfaceStreamingQueue(e){const t=[],n={macro:0,medium:1,micro:2};e.surfaceCapGroup.traverse(i=>{if(i!==e.surfaceCapGroup){if(i.isWater||i.userData?.manualClutterLod){i.visible=!1;return}if(i.isMesh||i.isInstancedMesh||i.isPoints){const s=this._classifySurfaceTier(i,e.surfaceCapGroup),a=/Terrain|Crystal_Ocean|NeoMil|NeoKitsch|Hometree/i.test(i.name||"");i.visible=!1,t.push({obj:i,tier:s,priority:n[s]*10+(a?0:1),activated:!1,isPandoraTerrain:i.name==="Pandora_Global_Terrain_360"})}else(i.isGroup||i.isObject3D)&&!i.isLight&&(i.visible=!0)}}),t.sort((i,s)=>i.priority-s.priority),e.surfaceStreaming={items:t,totalCount:t.length,macroCount:t.filter(i=>i.tier==="macro").length,mediumCount:t.filter(i=>i.tier==="medium").length,microCount:t.filter(i=>i.tier==="micro").length,compiled:!1,compiling:!1},e.surfaceTerrainActivated=!1,e.lastActivatedThisFrame=0}_updateSurfaceStreaming(e,t,n){e.lastActivatedThisFrame=0;const i=e.surfaceStreaming;if(!e.surfaceLoaded||!i){e.surfaceCapGroup.visible=!1,e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}if(t<=Sd&&!i.compiled&&!i.compiling&&typeof this.renderer?.compileAsync=="function"&&(i.compiling=!0,Promise.resolve(this.renderer.compileAsync(e.surfaceCapGroup,this.camera,this.scene)).catch(()=>{}).finally(()=>{i.compiled=!0,i.compiling=!1})),n>_y||t>Sd){if(e.surfaceCapGroup.visible||e.surfaceTerrainActivated){e.surfaceCapGroup.visible=!1,e.surfaceTerrainActivated=!1;for(let c=0;c<i.items.length;c++){const h=i.items[c];(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1)}}e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}const s=n<=xy&&t<=.86,a=n<=My,r=n<=yy;if(!s){e.surfaceCapGroup.visible=!1,e.surfaceTerrainActivated=!1;for(let c=0;c<i.items.length;c++){const h=i.items[c];(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1)}e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}e.surfaceCapGroup.visible=!0;let l=0;for(let c=0;c<i.items.length;c++){const h=i.items[c];if(!(h.tier==="macro"?s:h.tier==="medium"?a:r)){(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1,h.isPandoraTerrain&&(e.surfaceTerrainActivated=!1));continue}h.activated||l<vy&&(h.obj.visible=!0,h.activated=!0,l++,h.isPandoraTerrain&&(e.surfaceTerrainActivated=!0))}e.lastActivatedThisFrame=l,e.config.hasProceduralWorld&&e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!e.surfaceTerrainActivated)}_calibrateNightCityMaterials(e){const t=new Set;e.traverse(n=>{if(n.isLight){n.visible=!1,n.intensity=0;return}if(!n.isMesh)return;const i=/Skyscraper|Tower|Plaza|Arasaka|Militech|Corp|Bridge/i.test(n.name||"");n.castShadow=i,n.receiveShadow=!0;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){if(!a||t.has(a)||a.emissiveIntensity===void 0)continue;t.add(a),a.userData=a.userData||{};const r=a.name||"";/Windows_Dense|Windows_Brutal|Windows_High|backboard/i.test(r)?(a.emissive.setHex(11059928),a.emissiveIntensity=.24,a.userData.nightTier="window"):/rib_warm_white/i.test(r)?(a.emissiveIntensity=.27,a.userData.nightTier="window"):/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber/i.test(r)?(a.emissiveIntensity=.82,a.userData.nightTier="accent"):/chimney_flare/i.test(r)?(a.emissiveIntensity=1.78,a.userData.nightTier="hero"):/neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(r)?(a.emissiveIntensity=/Koi|Geisha|Banner/i.test(r)?1.85:1.62,a.userData.nightTier="hero"):(a.emissiveIntensity=Math.min(.24,a.emissiveIntensity),a.userData.nightTier="window")}})}_showTransitionBanner(e,t,n,i=1500){const s=document.getElementById("hud-transition-banner"),a=document.getElementById("banner-subtitle"),r=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");a&&(a.textContent=e),r&&(r.textContent=t),s&&s.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{s&&s.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){const t=document.querySelectorAll(".nav-btn");t.length!==0&&t.forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){if(e&&typeof e=="object")return this._navigateToDescriptor(e);const t=String(e);if(this._highlightActiveNavButton(t),t==="1")return this._flyToSolarSystemOverview(!1);if(t==="2")return this._flyToStation("crystal_palace");const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const s=this.planetNodes.get(i);if(!s)return;await this.ensurePlanetSurfaceLoaded(i),this.orbitalGroup.updateMatrixWorld(!0);const a=new b;s.root.getWorldPosition(a);const r=this.camera.position.distanceTo(a),l=s.config.localRadius*Pn,c=l*Ms;return r-l>c*1.1?this._flyToPlanetOrbit(i):this._flyToPlanetSurface(i)}async _navigateToDescriptor(e){switch(e.type){case"sun_orbit":return this._flyToSolarSystemOverview(!0);case"station":return this._flyToStation(e.stationId||"crystal_palace");case"planet_orbit":return this._flyToPlanetOrbit(e.planetKey);case"planet_surface":return this._flyToPlanetSurface(e.planetKey,e.landmarkId);case"moon":return this._flyToMoon(e.planetKey,e.moonIndex??0);default:return null}}_flyToSolarSystemOverview(e=!1){const t=e?{targetPos:new b(0,1200,4400),lookAtPos:new b(0,0,0)}:{targetPos:new b(0,6100,21e3),lookAtPos:new b(0,0,0)};this.controls.engageAutopilot({getTargetPose:()=>({targetPos:t.targetPos.clone(),lookAtPos:t.lookAtPos.clone(),upVec:new b(0,1,0)}),duration:3.4})}async _flyToStation(e="crystal_palace"){if(e!=="crystal_palace"||(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor))return;this.orbitalGroup.updateMatrixWorld(!0);const t=new b;this.crystalPalaceAnchor.getWorldPosition(t);const n=this.camera.position.distanceTo(t),i=H.clamp(n/3200,2.8,5.2);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const s=new b;this.crystalPalaceAnchor.getWorldPosition(s);const a=s.clone().negate().normalize(),r=new b().crossVectors(new b(0,1,0),a).normalize();return{targetPos:s.clone().addScaledVector(a,62).addScaledVector(r,38).add(new b(0,20,0)),lookAtPos:s,upVec:new b(0,1,0)}},duration:i})}async _flyToPlanetOrbit(e){const t=this.planetNodes.get(e);if(!t)return;const n=t.config;n.landable&&await this.ensurePlanetSurfaceLoaded(e);const i=t.capFrame||t.spinGroup||t.root;this.orbitalGroup.updateMatrixWorld(!0);const s=new b;t.root.getWorldPosition(s);const a=this.camera.position.distanceTo(s),r=H.clamp(a/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>{if(this.orbitalGroup.updateMatrixWorld(!0),!n.landable){const l=new b;t.root.getWorldPosition(l);const c=l.clone().negate().normalize(),h=new b().crossVectors(new b(0,1,0),c).normalize(),u=n.localRadius*Pn;return{targetPos:l.clone().addScaledVector(c,u*2.55).addScaledVector(h,u*1.45).add(new b(0,u*1.15,0)),lookAtPos:l,upVec:new b(0,1,0)}}return{targetPos:n.lowOrbitOffset.clone().applyMatrix4(i.matrixWorld),lookAtPos:n.lowOrbitLookAt.clone().applyMatrix4(i.matrixWorld),upVec:new b(0,1,0).transformDirection(i.matrixWorld).normalize()}},duration:r})}async _flyToPlanetSurface(e,t=null){const n=this.planetNodes.get(e);if(!n)return;const i=n.config;if(!i.landable)return this._flyToPlanetOrbit(e);if(await this.ensurePlanetSurfaceLoaded(e),e==="p1"&&t)return this.navigateToPandoraLandmark(t);if(e==="p2"&&t)return this.navigateToNightCityDistrict(t);const s=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const a=new b;n.root.getWorldPosition(a);const r=this.camera.position.distanceTo(a),l=i.localRadius*Pn,c=l*Ms,h=r-l;if(h>c*1.18){const u=H.clamp(r/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.highCloudOffset.clone().applyMatrix4(s.matrixWorld),lookAtPos:i.lowOrbitLookAt.clone().applyMatrix4(s.matrixWorld),upVec:new b(0,1,0).transformDirection(s.matrixWorld).normalize()}),duration:u,onComplete:()=>{this._engageCloudBreakoutGlide(i,s)}});return}if(h>c*.24){this._engageCloudBreakoutGlide(i,s);return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.aerialOffset.clone().applyMatrix4(s.matrixWorld),lookAtPos:i.aerialLookAt.clone().applyMatrix4(s.matrixWorld),upVec:new b(0,1,0).transformDirection(s.matrixWorld).normalize()}),duration:2.6})}_engageCloudBreakoutGlide(e,t){this.orbitalGroup.updateMatrixWorld(!0);const n=new nt().copy(t.matrixWorld).invert(),i=this.camera.position.clone().applyMatrix4(n),s=[i];i.distanceTo(e.highCloudOffset)>e.localRadius*.28&&s.push(e.highCloudOffset.clone());const a=e.highCloudOffset.clone().lerp(e.aerialOffset,.55).normalize().multiplyScalar(e.localRadius*(1+Ms*.48)),r=e.highCloudOffset.clone().lerp(e.aerialOffset,.82).normalize().multiplyScalar(e.localRadius*(1+Ms*.16));s.push(a,r,e.aerialOffset.clone());const l=new hi(s);this.controls.engageAutopilot({useDirectCurve:!0,duration:8.2,getTargetPose:c=>{this.orbitalGroup.updateMatrixWorld(!0);const h=l.getPoint(c),u=e.aerialLookAt.clone().lerp(e.lowOrbitLookAt,Math.pow(1-c,1.8)*.45),f=l.getPoint(Math.min(1,c+.08)).lerp(u,Math.min(1,c*1.15+.2));return{targetPos:h.applyMatrix4(t.matrixWorld),lookAtPos:f.applyMatrix4(t.matrixWorld),upVec:new b(0,1,0).transformDirection(t.matrixWorld).normalize()}}})}async _flyToMoon(e,t=0){const n=this.planetNodes.get(e),i=n?.moonOrbits?.[t];if(!n||!i)return;this.orbitalGroup.updateMatrixWorld(!0);const s=new b;i.node.getWorldPosition(s);const a=this.camera.position.distanceTo(s),r=H.clamp(a/3400,2.8,5.4),l=Math.max(46,i.moonRadius*4);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const c=new b;i.node.getWorldPosition(c);const h=c.clone().negate().normalize(),u=new b().crossVectors(new b(0,1,0),h).normalize();return{targetPos:c.clone().addScaledVector(h,l*.72).addScaledVector(u,l*.68).add(new b(0,l*.26,0)),lookAtPos:c,upVec:new b(0,1,0)}},duration:r})}async navigateToPandoraLandmark(e){const t=Tt.find(n=>n.id===e);return this._navigateToCapLandmark("p1",t)}async navigateToNightCityDistrict(e){const t=Sr[e]||Sr.city_center;return this._navigateToCapLandmark("p2",t)}async _navigateToCapLandmark(e,t){const n=this.planetNodes.get(e);if(!t||!n)return;await this.ensurePlanetSurfaceLoaded(e);const i=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const s=n.config.localRadius,a=new nt().copy(i.matrixWorld).invert(),r=this.camera.position.clone().applyMatrix4(a),l=t.capDir.clone().normalize(),c=Math.abs(l.y)<.85?new b(0,1,0):new b(1,0,0),h=new b().crossVectors(l,c).normalize(),u=l.clone().multiplyScalar(s+t.viewAlt).addScaledVector(h,-t.viewBack).normalize().multiplyScalar(s+t.viewAlt),d=l.clone().multiplyScalar(s+t.viewAlt*.25);if(r.length()>s*1.88){const M=l.clone().multiplyScalar(s*1.48).addScaledVector(h,-.22),S=new b;n.root.getWorldPosition(S);const C=H.clamp(this.camera.position.distanceTo(S)/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:M.clone().applyMatrix4(i.matrixWorld),lookAtPos:l.clone().multiplyScalar(s).applyMatrix4(i.matrixWorld),upVec:l.clone().transformDirection(i.matrixWorld).normalize()}),duration:C,onComplete:()=>{this._navigateToCapLandmark(e,t)}});return}const f=r.clone().normalize(),g=f.angleTo(l),v=Math.min(1.15,g*.65),m=Math.max(3,Math.ceil(g/.35)),p=new ut,_=new ut().setFromUnitVectors(f,l),y=new ut,x=Math.max(s+.05,Math.min(r.length(),s*1.48)),T=s+t.viewAlt,w=[r.clone()];for(let M=1;M<m;M++){const S=M/m;p.copy(y).slerp(_,S);const C=f.clone().applyQuaternion(p).normalize(),R=H.lerp(x,T,S)+Math.sin(S*Math.PI)*v;w.push(C.multiplyScalar(R))}w.push(u);const E=new hi(w),A=H.clamp(2.2+g*1.5,2.4,5.4);this.controls.engageAutopilot({useDirectCurve:!0,duration:A,getTargetPose:M=>{this.orbitalGroup.updateMatrixWorld(!0);const S=E.getPoint(M),R=E.getPoint(Math.min(1,M+.08)).lerp(d,Math.min(1,M*1.35)),N=S.clone().normalize();return{targetPos:S.applyMatrix4(i.matrixWorld),lookAtPos:R.applyMatrix4(i.matrixWorld),upVec:N.transformDirection(i.matrixWorld).normalize()}}})}_sampleNightCityAtmo(e){const t=this._p2Atmo;t.fogDay.setRGB(0,0,0),t.fogNight.setRGB(0,0,0),t.fogDusk.setRGB(0,0,0),t.hemiSky.setRGB(0,0,0),t.hemiGround.setRGB(0,0,0),t.ambient.setRGB(0,0,0),t.localLight.setRGB(0,0,0),t.localBounce.setRGB(0,0,0);let n=0,i=0;for(const s of No){const a=e.weights[s.id]||0;if(a<=1e-4)continue;const r=s.atmo;t.fogDay.add(this._tmpColorC.setHex(r.fogDay).multiplyScalar(a)),t.fogNight.add(this._tmpColorC.setHex(r.fogNight).multiplyScalar(a)),t.fogDusk.add(this._tmpColorC.setHex(r.fogDusk).multiplyScalar(a)),t.hemiSky.add(this._tmpColorC.setHex(r.hemiSky).multiplyScalar(a)),t.hemiGround.add(this._tmpColorC.setHex(r.hemiGround).multiplyScalar(a)),t.ambient.add(this._tmpColorC.setHex(r.ambient).multiplyScalar(a)),t.localLight.add(this._tmpColorC.setHex(r.localLight).multiplyScalar(a)),t.localBounce.add(this._tmpColorC.setHex(r.localBounce).multiplyScalar(a)),n+=r.fogDensity*a,i+=r.bloomCap*a}return e.district==="westbrook"&&e.subzone==="north_oak"&&(n*=.48,i=Math.min(i,.4)),t.fogDensity=n,t.bloomCap=i,t}update(e){const t=Math.min(e,.1),n=t*this.timeScale;this.elapsedTime+=t,this.simulationTime+=n,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),th.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,P]of this.planetNodes){const k=P.config;P.prevWorldPos.copy(P.currWorldPos),P.spinGroup&&P.prevSpinWorldQuat.copy(P.currSpinWorldQuat),P.orbitAngle+=n*k.orbitOmega;const z=k.semiMajorAxis,F=k.eccentricity||.04,U=z*(1-F*F)/(1+F*Math.cos(P.orbitAngle));P.spinner&&(P.spinner.rotation.y=P.orbitAngle),P.root.position.set(U,0,0);for(const L of P.moonOrbits)L.angle+=n*L.speed,L.node.position.set(Math.cos(L.angle)*L.baseRadius,L.yOffset,Math.sin(L.angle)*L.baseRadius);P.spinAngle+=n*(k.axialOmega??k.rotationSpeed??.012),P.spinGroup&&(P.spinGroup.rotation.y=P.spinAngle),P.orbitalBundle&&(P.orbitalBundle.lowerCloudMesh.rotation.y+=n*k.rotationSpeed*.45,P.orbitalBundle.upperCloudMesh.rotation.y+=n*k.rotationSpeed*.85,P.orbitalBundle.lowerCloudGroup.rotation.y+=n*k.rotationSpeed*.28)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=n*.06),this.orbitalGroup.updateMatrixWorld(!0);let i="Sol Central",s=Math.max(0,this.camera.position.length()-2.21*3.2*Pn),a=12e3,r=null,l=null,c=99999;for(const[P,k]of this.planetNodes){k.root.getWorldPosition(k.currWorldPos),k.planetDeltaPos.copy(k.currWorldPos).sub(k.prevWorldPos);for(const te of k.moonOrbits)te.prevWorldPos.copy(te.currWorldPos),te.node.getWorldPosition(te.currWorldPos),te.deltaPos.copy(te.currWorldPos).sub(te.prevWorldPos);k.spinGroup&&(k.spinGroup.getWorldQuaternion(k.currSpinWorldQuat),this._tmpInvQuat.copy(k.prevSpinWorldQuat).invert(),k.spinQuatDelta.copy(k.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize());const z=k.config.localRadius*Pn,F=z*Ms,U=this.camera.position.distanceTo(k.currWorldPos),L=U-z,W=L/F;if(k.atmosphereShell&&k.atmosphereShell.material.uniforms){const te=k.atmosphereShell.material.uniforms;te.uSunPosition.value.set(0,0,0);const j=H.smoothstep(W,0,.85);te.uAltitudeFade.value=H.lerp(.18,1,j)}if(k.config.landable){!k.surfaceLoaded&&!k.surfaceLoading&&U<z*4.5&&this.ensurePlanetSurfaceLoaded(P),k.surfaceCapGroup.scale.setScalar(1);const te=Math.max(0,(L-(k.config.groundFloorAlt??.95))*Er);if(this._updateSurfaceStreaming(k,W,te),k.orbitalBundle){const j=k.orbitalBundle;j.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(k.currWorldPos),j.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(k.currWorldPos);const be=H.smoothstep(W,.14,.42),Y=be*.64,fe=be*.86;if(j.lowerCloudMesh.material.uniforms.uOpacity.value=Y,j.lowerCloudMesh.visible=Y>.008,j.upperCloudMesh.material.uniforms.uOpacity.value=fe,j.upperCloudMesh.visible=fe>.008,W<.85){const pe=1-H.smoothstep(W,.42,.85),he=Math.exp(-Math.pow((W-.15)/.14,2))*.85,J=Math.max(pe*.36,he);j.lowerCloudPuffs.material.opacity=J,j.lowerCloudGroup.visible=J>.008}else j.lowerCloudGroup.visible=!1}}L<s&&(s=Math.max(0,L),i=k.config.name,a=k.config.kmScale),L<c&&(c=L,l=k,r=P)}if(this.crystalPalaceAnchor){this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);const P=Math.max(0,this.camera.position.distanceTo(this._tmpStationPos)-12);P<s&&(s=P,i="Estación Crystal Palace",a=850)}let h=!1,u=!1,d=1,f=0,g=null,v=null,m=null,p=this._identityQuat,_=220,y=220*Ms,x=.95,T=8,w=0,E=0,A=null,M=null,S=null,C="ESPACIO";if(l){const P=l.config;if(_=P.localRadius*Pn,y=_*Ms,x=P.groundFloorAlt??.95,T=P.minSpeed??8,P.id==="p1"&&l.pandoraWorld){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();const U=l.pandoraWorld.getFloorAndWaterAtDir(this._tmpLocalDir);A=U;const L=U.terrainElev*Pn+(U.hasWater?.55:1.15);if(x=U.hasWater?L:Math.max(.65,L),U.hasWater){const W=U.waterElev*Pn;c<W&&(E=W-c,w=H.clamp(E/1.8,0,1))}}else if(P.id==="p2"){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize(),M=Ro(this._tmpLocalDir.x,this._tmpLocalDir.y,this._tmpLocalDir.z),S=this._sampleNightCityAtmo(M);const U=Math.max(0,M.elevationRatio)*_;x=Math.max(P.groundFloorAlt??.32,U+.38)}const k=y*1.25,z=c/y;if(z>1){for(const F of l.moonOrbits){const U=this.camera.position.distanceTo(F.currWorldPos);if(U<Math.max(85,F.moonRadius*6)){u=!0,g=F.deltaPos,v=F.currWorldPos,m=F.prevWorldPos,p=this._identityQuat,_=F.moonRadius,x=1.8,y=Math.max(95,F.moonRadius*4.5),c=U-F.moonRadius,i=F.name,s=Math.max(0,c);break}}if(!u&&this.crystalPalaceAnchor){const F=this.planetNodes.get("p2");F&&(this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos),this.camera.position.distanceTo(this._tmpStationPos)<220&&(u=!0,g=F.planetDeltaPos,v=F.currWorldPos,m=F.prevWorldPos,p=this._identityQuat))}}if(!u&&c<k&&(u=!0,g=l.planetDeltaPos,v=l.currWorldPos,m=l.prevWorldPos,p=l.spinQuatDelta),P.landable&&z<1.06){h=z<=1,this.currentDominantPlanet=h?P:null,h&&this.lastBannerPlanetId!==P.id&&(this.lastBannerPlanetId=P.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${P.name.toUpperCase()}`,P.glowCss,1700),P.navKey&&this._highlightActiveNavButton(P.navKey));const F=H.clamp(1-z,0,1),U=1-H.smoothstep(z,.92,1.06),L=this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),W=this._tmpSunDir.copy(this.camera.position).negate().normalize(),te=H.clamp(L.dot(W),-1,1);d=te,f=F;const j=H.smoothstep(-te,-.02,.24),be=H.smoothstep(te,-.02,.28),Y=Math.exp(-Math.pow((te-.02)/.14,2))*(1-j*.55);te>.14?C="DÍA":te>=-.08?C="ATARDECER":C="NOCHE";const fe=1-H.smoothstep(F,.04,.25);for(const tt of this.orbitLines)tt.material.opacity=tt.baseOpacity*fe,tt.mesh.visible=fe>.01;const pe=-Math.sqrt(Math.max(0,1-Math.pow(_/Math.max(_,_+c),2))),he=H.smoothstep(F,.01,.36),J=this.skyDome.material.uniforms;if(P.skyDome){const tt=P.id==="p2"?1444388:1841212,Et=P.id==="p2"?7085388:P.id==="p1"?6039150:10174e3,un=P.id==="p2"?16726909:16743220,On=P.id==="p2"?331292:198678,gn=P.id==="p2"?1058888:P.id==="p1"?404536:P.id==="p4"?2494984:529190,kn=P.id==="p1"&&A?this._tmpColorC.setHex(1799371).lerp(this._tmpColorB.setHex(1737450),A.waterFactor).lerp(this._tmpColorB.setHex(3024934),A.ashFactor).getHex():P.skyDome.zenith,sn=P.id==="p1"&&A?this._tmpColorC.setHex(5157068).lerp(this._tmpColorB.setHex(5687029),A.waterFactor).lerp(this._tmpColorB.setHex(6309432),A.ashFactor).getHex():P.skyDome.mid,Ct=P.id==="p1"&&A?this._tmpColorC.setHex(8707782).lerp(this._tmpColorB.setHex(10810618),A.waterFactor).lerp(this._tmpColorB.setHex(11034162),A.ashFactor).getHex():P.skyDome.horizon;this._tmpColorA.setHex(kn),this._tmpColorA.lerp(this._tmpColorB.setHex(tt),Y*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(66312),j*.94),J.uZenithColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(sn),this._tmpColorA.lerp(this._tmpColorB.setHex(Et),Y*.85),this._tmpColorA.lerp(this._tmpColorB.setHex(On),j*.92),J.uMidColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(Ct),this._tmpColorA.lerp(this._tmpColorB.setHex(un),Y*.9),this._tmpColorA.lerp(this._tmpColorB.setHex(gn),j*.92),J.uHorizonColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(P.skyDome.sunGlow),this._tmpColorA.lerp(this._tmpColorB.setHex(16757844),Y*.82),this._tmpColorA.lerp(this._tmpColorB.setHex(1451069),j*.9),J.uSunGlowColor.value.copy(this._tmpColorA);const yn=P.skyDome.zenithAlpha;if(J.uZenithAlpha.value=H.lerp(yn,Math.max(.16,yn*.24),j),w>.001){const vn=j>.5?136738:547442,vt=j>.5?272444:821410;J.uZenithColor.value.lerp(this._tmpColorB.setHex(vn),w),J.uMidColor.value.lerp(this._tmpColorB.setHex(vn),w),J.uHorizonColor.value.lerp(this._tmpColorB.setHex(vt),w),J.uSunGlowColor.value.lerp(this._tmpColorB.setHex(2808046),w*.85),J.uZenithAlpha.value=H.lerp(J.uZenithAlpha.value,.96,w)}if(J.uLocalUp.value.copy(L),J.uSunDir.value.copy(W),J.uHorizonDot.value=pe,J.uAtmoOpacity.value=he,J.uMieIntensity&&(J.uMieIntensity.value=H.lerp(.62,.08,j)),this.skyDome.visible=he>.005,this.starfield.userData.setStarVisibility){const vn=M?.weights?.badlands||0,vt=M?.district==="westbrook"&&M?.subzone==="north_oak"?.35:0,I=Math.min(.6,vn*.55+vt),ee=H.lerp(Math.max(P.skyDome.starFloor,I),Math.max(P.skyDome.starFloor,.45+I*.35),Y*(1-be*.7)),ie=H.lerp(ee,M&&vn>.45?1:.96,j),ae=H.lerp(1,ie,H.smoothstep(F,.06,.42))*(1-w);this.starfield.userData.setStarVisibility(ae)}}if(l.orbitalBundle){const tt=l.orbitalBundle,Et=P.id==="p2"?14239882:16749142,un=P.id==="p2"?16726909:16740396;if(tt.userBaseColors){this._tmpColorA.copy(tt.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(Et),Y*.72),this._tmpColorC.copy(tt.userBaseColors.horizon).lerp(this._tmpColorB.setHex(un),Y*.85);for(const gn of[tt.upperCloudMesh,tt.lowerCloudMesh])gn.material.uniforms.uSunColor.value.copy(this._tmpColorA),gn.material.uniforms.uHorizonColor.value.copy(this._tmpColorC)}const On=P.id==="p2"?1452616:1319480;this._tmpColorA.copy(tt.userBaseColors?tt.userBaseColors.sunlit:this._tmpColorB.setHex(16777215)),this._tmpColorA.lerp(this._tmpColorB.setHex(Et),Y*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(On),j*.88),tt.lowerCloudPuffs.material.color.copy(this._tmpColorA)}const de=F>.32;for(const[tt,Et]of this.planetNodes)Et.root.visible=de?tt===r:!0;const ge=1-H.smoothstep(z,.45,.98),Ae=P.id==="p1"&&A&&A.ashFactor>.35?919044:198156,ve=P.id==="p2"?3871275:8139812,De=P.id==="p1"&&A?this._tmpColorC.setHex(2655412).lerp(this._tmpColorB.setHex(2527952),A.waterFactor).lerp(this._tmpColorB.setHex(4994604),A.ashFactor).getHex():P.skyColor;this._tmpSkyColor.setHex(De).lerp(this._tmpColorB.setHex(ve),Y*.72).lerp(this._tmpColorB.setHex(Ae),j*.92),w>.001&&this._tmpSkyColor.lerp(this._tmpColorB.setHex(683142).lerp(this._tmpColorC.setHex(137768),j),w),this.scene.background=this._tmpColorA.setHex(Ae).clone().lerp(this._tmpSkyColor,ge*.9);const B=P.id==="p1"&&A?1.05*A.forestFactor+.78*A.waterFactor+2.15*A.ashFactor:1,G=(P.id==="p2"&&S?S.fogDensity:P.maxFogDensity*B)*(1-H.smoothstep(z,.2,.9)),We=.012*Math.exp(-Math.pow((z-.14)/.06,2)),Ie=.0022*Math.exp(-Math.pow((z-.85)/.12,2)),at=P.id==="p1"?.0024*(1-H.smoothstep(z,0,.05))*(1-(A?.ashFactor||0)*.4):0,je=(G+We+Ie+at)*U,O=H.lerp(.022,.036,j),D=H.lerp(je,O,w);if(P.id==="p2"&&S)this._tmpFogColor.copy(S.fogDay).lerp(S.fogDusk,Y*.76).lerp(S.fogNight,j*.92);else{const tt=P.id==="p1"&&A?this._tmpColorC.setHex(5023914).lerp(this._tmpColorB.setHex(6476523),A.waterFactor).lerp(this._tmpColorB.setHex(6046772),A.ashFactor).getHex():P.fogColor,Et=P.id==="p2"?6428730:13920826,un=P.id==="p1"?A&&A.ashFactor>.35?1444358:268836:329744;this._tmpFogColor.setHex(tt).lerp(this._tmpColorB.setHex(Et),Y*.78).lerp(this._tmpColorB.setHex(un),j*.9)}w>.001&&this._tmpFogColor.lerp(this._tmpColorB.setHex(883350).lerp(this._tmpColorC.setHex(205362),j),w),this.camera.getWorldDirection(this._tmpCamFwd);const se=Math.max(0,this._tmpCamFwd.dot(W)),xe=Math.pow(se,3)*.35*(1-j*.8)*(1-w);xe>.001&&J.uSunGlowColor&&this._tmpFogColor.lerp(J.uSunGlowColor.value,xe),this.scene.fog?(this.scene.fog.color.copy(this._tmpFogColor),this.scene.fog.density=D):this.scene.fog=new el(this._tmpFogColor.getHex(),D);const oe=E>.05,ue=Math.max(0,(c-x)*Er),Re=P.id==="p1"?1-.34*(1-H.smoothstep(z,0,.05)):1,we=P.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1,Ne=H.lerp(.05,1,H.smoothstep(te,-.06,.24)),dt=H.lerp(1,.45,w);this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize();const Ee=P.id==="p1",Je=h&&ue<(Ee?1500:2500)&&Ne>.08&&!oe;if(this.planetaryDirLight.castShadow=Je,Je){const tt=this.planetaryDirLight.shadow.camera,Et=Ee?ue<350?46:H.lerp(46,110,H.smoothstep(ue,350,1500)):ue<450?48:H.lerp(48,180,H.smoothstep(ue,450,2500));Math.abs(tt.right-Et)>1&&(tt.left=-Et,tt.right=Et,tt.top=Et,tt.bottom=-Et,tt.near=4,tt.far=520,tt.updateProjectionMatrix()),this.planetaryDirLight.target.position.copy(this.camera.position),this.planetaryDirLight.position.copy(this.camera.position).addScaledVector(this._tmpPlanetToSun,220),this.planetaryDirLight.target.updateMatrixWorld()}else this.planetaryDirLight.target.position.copy(l.currWorldPos),this.planetaryDirLight.position.copy(l.currWorldPos).addScaledVector(this._tmpPlanetToSun,1200),this.planetaryDirLight.target.updateMatrixWorld();this.planetaryDirLight.color.setHex(P.sunColor).lerp(this._tmpColorB.setHex(16741424),Y*.72).lerp(this._tmpColorB.setHex(5008280),j*.85),this.planetaryDirLight.intensity=H.lerp(.25,P.sunIntensity,F)*Re*Ne*dt,this.hemiLight.position.copy(L).multiplyScalar(100);const ct=P.id==="p2"?16726909:16743220,He=P.id==="p1"?537668:P.id==="p2"?926272:792108,mt=P.id==="p1"?401448:527380,ht=P.id==="p1"&&A?this._tmpColorC.setHex(6079672).lerp(this._tmpColorB.setHex(7395583),A.waterFactor).lerp(this._tmpColorB.setHex(9069644),A.ashFactor).getHex():P.id==="p2"&&S?S.hemiSky.getHex():P.hemiSkyColor,ft=P.id==="p1"&&A?this._tmpColorC.setHex(1985064).lerp(this._tmpColorB.setHex(1330784),A.waterFactor).lerp(this._tmpColorB.setHex(2890772),A.ashFactor).getHex():P.id==="p2"&&S?S.hemiGround.getHex():P.hemiGroundColor;this._tmpColorA.setHex(ht).lerp(this._tmpColorB.setHex(ct),Y*.55).lerp(this._tmpColorB.setHex(He),j*.9),w>.001&&this._tmpColorA.lerp(this._tmpColorB.setHex(1889514).lerp(this._tmpColorC.setHex(407624),j),w*.85),this.hemiLight.color.lerp(this._tmpColorA,Math.min(1,F*.35+.08)),this._tmpColorA.setHex(ft).lerp(this._tmpColorB.setHex(mt),j*.85),this.hemiLight.groundColor.lerp(this._tmpColorA,Math.min(1,F*.35+.08)),this.hemiLight.intensity=H.lerp(.42,P.hemiIntensity,F)*H.lerp(1,.36,j);const q=P.id==="p1"&&A?this._tmpColorC.setHex(2247218).lerp(this._tmpColorB.setHex(1986148),A.waterFactor).lerp(this._tmpColorB.setHex(3548186),A.ashFactor).getHex():P.id==="p2"&&S?S.ambient.getHex():P.ambientColor;this._tmpColorA.setHex(q).lerp(this._tmpColorB.setHex(1054760),j*.82),this.ambientLight.color.lerp(this._tmpColorA,Math.min(1,F*.35+.08)),this.ambientLight.intensity=H.lerp(.55,P.ambientIntensity,F)*Re*H.lerp(1,.45,j);const Ce=P.id==="p1"?.74:P.id==="p3"?.85:.9,me=P.id==="p1"?2.45*we:P.id==="p2"?2.15:P.id==="p3"?2.25:1.95,Me=Math.min(1,Math.max(j,Y*.45)),ke=H.lerp(Ce,me,Me);if(l.surfaceCapGroup.visible){if(l.splatUniforms?.length)for(const tt of l.splatUniforms)tt.uPlanetCenter.value.copy(l.currWorldPos);l.p3Water?.material?.uniforms?.time&&(l.p3Water.material.uniforms.time.value+=t*.5),this._hideAllReflectiveWaters(l),this._updateReflectiveWaters(l,h&&!oe&&ue<1e4,w,W),P.id==="p1"&&l.pandoraWorld?.updateGroundClutter&&l.pandoraWorld.updateGroundClutter(this._tmpLocalDir,ue,w);for(const tt of l.animators)tt.update(this.elapsedTime,ke,te,w);for(const tt of l.nightMaterials)P.id==="p2"?tt.tier==="window"?tt.material.emissiveIntensity=Math.min(.28,tt.baseEmissive*H.lerp(.7,1.15,Me)):tt.tier==="hero"?tt.material.emissiveIntensity=H.clamp(tt.baseEmissive*H.lerp(.88,1.04,Me),1.3,1.9):tt.material.emissiveIntensity=Math.min(.88,tt.baseEmissive*H.lerp(.75,1.1,Me)):tt.material.emissiveIntensity=tt.baseEmissive*ke}else P.id==="p1"&&l.pandoraWorld?.updateGroundClutter&&l.pandoraWorld.updateGroundClutter(null,99999,0);const Fe=1-H.smoothstep(z,.05,.45),Ze=P.id==="p1"?H.smoothstep(-te,-.1,.04):1,kt=P.id==="p1"&&A&&w<=.2?this._tmpColorC.setHex(P.localLightColor).lerp(this._tmpColorB.setHex(2683096),A.waterFactor).lerp(this._tmpColorB.setHex(16742456),A.ashFactor).getHex():P.id==="p2"&&S?S.localLight.getHex():w>.2?1894655:P.localLightColor,Ht=P.id==="p1"&&A?this._tmpColorC.setHex(P.localBounceColor).lerp(this._tmpColorB.setHex(1628415),A.waterFactor).lerp(this._tmpColorB.setHex(16730648),A.ashFactor).getHex():P.id==="p2"&&S?S.localBounce.getHex():P.localBounceColor;this.localAtmoLight.color.setHex(kt);const gt=P.id==="p2"&&M?M.district==="pacifica"?.28:M.district==="badlands"?.22:.72:1;this.localAtmoLight.intensity=Fe*5.2*gt*we*H.lerp(.85,1.38,Me)*Math.max(Ze,w*.6),this.localAtmoLight.position.copy(this.camera.position).addScaledVector(L,18),this.localBounceLight.color.setHex(Ht),this.localBounceLight.intensity=Fe*4.8*gt*we*H.lerp(.85,1.35,Me)*Ze,this.localBounceLight.position.copy(this.camera.position).addScaledVector(L,-8);const hn=H.lerp(.85,.55,j)*(1-w*.45);if(this._updateDynamicIbl({planetId:P.id,zenithColor:J.uZenithColor?J.uZenithColor.value:this._tmpIblZenith,horizonColor:this._tmpFogColor,groundColor:this.hemiLight.groundColor,sunDir:W,sunColor:this.planetaryDirLight.color,sunElev:te,altRatio:z,intensity:hn}),this.ssaoPass){const tt=h&&ue<4e3&&!oe;if(this.ssaoPass.enabled=tt,tt&&this.ssaoPass.ssaoMaterial?.uniforms){const Et=this.ssaoPass.ssaoMaterial.uniforms;Et.cameraProjectionMatrix&&Et.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),Et.cameraInverseProjectionMatrix&&Et.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse)}}if(this.bloomPass){if(P.id==="p2"&&S){const tt=Math.min(.45,S.bloomCap*H.lerp(.82,.95,j));this.bloomPass.strength=H.lerp(.36,tt,Fe)}else{const Et=Math.min(.45,P.bloomStrength*.68*we*H.lerp(.85,1.12,j));this.bloomPass.strength=H.lerp(.35,Et,Fe)}this.bloomPass.strength=Math.min(.45,this.bloomPass.strength)}if(this.renderer){const tt=H.lerp(1.04,1.12,j)*(1-w*.06);this.renderer.toneMappingExposure=H.lerp(this.renderer.toneMappingExposure,H.clamp(tt,.98,1.15),Math.min(1,t*3))}const an=Math.exp(-Math.pow((z-.78)/.2,2))*.85,Mn=Math.exp(-Math.pow((z-.4)/.14,2))*.55,qn=P.id==="p1"&&A?A.ashFactor*Fe*.42:0,An=w>.08?4126184:P.id==="p1"&&A&&A.ashFactor>.38?16751192:P.particleColor;this.cockpitParticles.setAtmosphereStyle(An,Math.max(Math.max(an,Mn),w*.72,qn))}}if(l&&c/y>=1.06&&(h=!1),this.mode=h?"SURFACE":"ORBIT",!l||!l.config.landable||c/y>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const P of this.orbitLines)P.material.opacity=P.baseOpacity,P.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,P]of this.planetNodes)P.root.visible=!0,P.config.hasProceduralWorld&&P.orbitalBundle&&(P.orbitalBundle.surfaceMesh.visible=!0);this._hideAllReflectiveWaters(null),this.planetNodes.get("p1")?.pandoraWorld?.updateGroundClutter?.(null,99999,0),this.scene.background.lerp(new ne(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.planetaryDirLight.castShadow=!1,this.planetaryDirLight.intensity=H.lerp(this.planetaryDirLight.intensity,.22,.1),this.hemiLight.position.set(0,100,0),this.hemiLight.color.lerp(new ne(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new ne(1053724),Math.min(1,t*3)),this.hemiLight.intensity=H.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new ne(1844790),Math.min(1,t*3)),this.ambientLight.intensity=H.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=H.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=H.lerp(this.localBounceLight.intensity,0,.15),l?this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize():this._tmpPlanetToSun.copy(this.camera.position).negate().normalize(),this._updateDynamicIbl({planetId:"space",zenithColor:this._tmpIblZenith,horizonColor:this._tmpIblHorizon,groundColor:this._tmpIblGround,sunDir:this._tmpPlanetToSun,sunColor:this._tmpIblSun,sunElev:1,altRatio:2,intensity:.25}),this.ssaoPass&&(this.ssaoPass.enabled=!1),this.bloomPass&&(this.bloomPass.strength=H.lerp(this.bloomPass.strength,.38,.1)),this.renderer&&(this.renderer.toneMappingExposure=H.lerp(this.renderer.toneMappingExposure,1.05,Math.min(1,t*3))),this.cockpitParticles.setAtmosphereStyle(8965375,0)}const R=typeof this.controls.getSpeedRatio=="function"?this.controls.getSpeedRatio():0,N=h&&E>.05;if(this.radialBlurPass?.uniforms?.uBlurStrength){const k=(R>.45?H.smoothstep(R,.45,1):0)*(N?.35:1);this.radialBlurPass.uniforms.uBlurStrength.value=H.lerp(this.radialBlurPass.uniforms.uBlurStrength.value,k,Math.min(1,t*8)),this.radialBlurPass.enabled=this.radialBlurPass.uniforms.uBlurStrength.value>.002}if(this.machConeMesh&&this.machConeUniforms){const k=!!(h&&!N&&l&&c/y<.85)&&R>.72?H.smoothstep(R,.72,1)*.72:0;this.machConeUniforms.uTime.value=this.elapsedTime,this.machConeUniforms.uOpacity.value=H.lerp(this.machConeUniforms.uOpacity.value,k,Math.min(1,t*7)),this.machConeMesh.visible=this.machConeUniforms.uOpacity.value>.01}if(this._updateSolarLensflare(h,N,d,f,w),this.controls.setAltitudeContext({surfaceAltitude:c,planetRadius:_,atmoTopAlt:y,groundFloorAlt:x,minSpeed:T,metersPerUnit:Er,submergedRatio:w,planetCenter:v||(l?l.currWorldPos:null),prevPlanetCenter:m||(l?l.prevWorldPos:null),hasPlanet:!!l,inGravityWell:u,planetDeltaPos:g,planetQuatDelta:p}),h&&this.currentDominantPlanet){const P=E>.05,k=P?Math.round(E*15):Math.max(0,Math.round((c-x)*Er));let z=null;if(this.currentDominantPlanet.id==="p1"){const U=this.planetNodes.get("p1"),L=U?.capFrame||U?.spinGroup||U?.root;L&&(z=Tt.map(W=>{this._tmpStationPos.copy(W.capDir).multiplyScalar(U.config.localRadius).applyMatrix4(L.matrixWorld);const te=Math.round(this.camera.position.distanceTo(this._tmpStationPos)*(U.config.kmScale/(620*Li)));return{id:W.id,shortName:W.shortName,distKm:te}}))}if(this.lastP1RegionInfo=A,this.currentDominantPlanet.id==="p2"&&M){const U=Sr[M.district]||Sr.city_center;this.lastP2DistrictId=U.id,this.lastP2DistrictName=M.subzone==="north_oak"?"Westbrook · North Oak":M.subzone==="dogtown"?"Pacifica · Dogtown":U.name,this.lastP2DistrictShort=M.subzone==="north_oak"?"North Oak":M.subzone==="dogtown"?"Dogtown":U.shortName}this.lastSolarPhaseName=C,this.lastIsUnderwater=P;const F=this.currentDominantPlanet.id==="p2"?`NIGHT CITY // ${this.lastP2DistrictName.toUpperCase()}`:this.currentDominantPlanet.name.toUpperCase();this.onStatusUpdate({modeText:P?"SUBMARINO":"ATMOSFÉRICO",isSurface:!0,isUnderwater:P,sectorName:F,nearestText:this.currentDominantPlanet.id==="p2"?this.lastP2DistrictName:`${this.currentDominantPlanet.name}`,altitudeText:P?`-${k.toLocaleString("es-ES")} m`:`${k.toLocaleString("es-ES")} m`,timeScale:this.timeScale,solarPhaseName:C,pandoraLandmarks:z,nightCityDistrict:this.currentDominantPlanet.id==="p2"?this.lastP2DistrictId:null})}else{this.lastP1RegionInfo=null,this.lastSolarPhaseName="ESPACIO",this.lastIsUnderwater=!1;const P=Math.max(1,Math.round(s*(a/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${i} · ${P.toLocaleString("es-ES")} km`,altitudeText:`${P.toLocaleString("es-ES")} km`,timeScale:this.timeScale,solarPhaseName:"ESPACIO"})}}getStarChartState(){this.orbitalGroup.updateMatrixWorld(!0);const e=this.camera.position.clone(),t=new b(0,0,-1).applyQuaternion(this.camera.quaternion).normalize(),n=new b(1,0,0).applyQuaternion(this.camera.quaternion).normalize(),i=Math.atan2(t.x,t.z);let s=null;if(this.crystalPalaceAnchor){const h=new b;this.crystalPalaceAnchor.getWorldPosition(h),s={id:"crystal_palace",name:"CRYSTAL PALACE",planetKey:"p2",worldPos:h,distWorld:e.distanceTo(h),loaded:!!this.crystalPalaceDetailed}}const a={p1:{shortName:"PANDORA",code:"P1",tagline:"Luna oceánica y selvática · 3 Macro-Naciones",color:"#34d8c4",accent:"#44f0a8",gravity:"0.80 G",atmoDesc:"Densa · Respirable c/máscara (Nitrógeno/Xenón)",climate:"Selva bioluminiscente, archipiélago Metkayina y calderas de Ceniza"},p2:{shortName:"NIGHT CITY",code:"P2",tagline:"Megalópolis cyberpunk · Corpo Plaza y Crystal Palace",color:"#00d8ff",accent:"#ff3b9a",gravity:"1.00 G",atmoDesc:"Densa · Niebla urbana e industrial estratificada",climate:"Cañón neón central, suburbios sombríos y Badlands áridas"},p3:{shortName:"PERUGIUS",code:"P3",tagline:"Mundo templado medieval · Ciudadela Fortaleza",color:"#6ec878",accent:"#ffba52",gravity:"0.95 G",atmoDesc:"Óptima · Cielos dorados templados",climate:"Valles verdes, fortalezas en altura y cumbres nevadas"},p4:{shortName:"CORUSCANT",code:"P4",tagline:"Ecumenópolis total · Distrito del Senado",color:"#f4a259",accent:"#ff8a3a",gravity:"1.00 G",atmoDesc:"Regulada · Tráfico orbital y cúpulas ámbar",climate:"Planeta-ciudad continuo de miles de niveles"},p5:{shortName:"GIGANTE P5",code:"P5",tagline:"Gigante gaseoso azul con sistema de anillos y 3 lunas",color:"#5fa8ff",accent:"#8ee8ff",gravity:"2.45 G",atmoDesc:"Turbulenta · Hidrógeno y helio (Solo órbita)",climate:"Tormentas de metano, anillos helados y lunas pastoras"}},r=[],l=["p1","p2","p3","p4","p5"];for(const h of l){const u=this.planetNodes.get(h);if(!u)continue;const d=u.config,f=a[h]||{shortName:h.toUpperCase(),code:h.toUpperCase(),color:"#8cc4ff"},g=u.currWorldPos.clone(),v=e.distanceTo(g),m=u.moonOrbits.map((x,T)=>({index:T,name:x.name,baseRadius:x.baseRadius,baseRadiusWorld:x.baseRadius*Pn,angle:x.angle,yOffset:x.yOffset,moonRadius:x.moonRadius,worldPos:x.currWorldPos.clone(),distWorld:e.distanceTo(x.currWorldPos)})),p=new ut;u.spinGroup&&u.spinGroup.getWorldQuaternion(p);const _=new ut;u.spinner?.parent&&u.spinner.parent.getWorldQuaternion(_);const y=u.capFrame?u.capFrame.quaternion.clone():new ut;r.push({key:h,id:d.id,code:f.code,name:d.name,shortName:f.shortName,tagline:f.tagline,color:f.color,accent:f.accent,gravity:f.gravity,atmoDesc:f.atmoDesc,climate:f.climate,navKey:d.navKey,landable:d.landable,semiMajorAxis:d.semiMajorAxis,semiMajorAxisWorld:d.semiMajorAxis*Pn,eccentricity:d.eccentricity||.04,orbitAngle:u.orbitAngle,localRadius:d.localRadius,worldRadius:d.localRadius*Pn,atmoTopAlt:d.localRadius*Pn*Ms,kmScale:d.kmScale,glowCss:d.glowCss||"rgba(94, 212, 255, 0.45)",worldPos:g,distWorld:v,distKm:Math.max(0,Math.round(Math.max(0,v-d.localRadius*Pn)*(d.kmScale/(620*Li)))),moons:m,hasCrystalPalace:h==="p2"&&!!s,spinWorldQuat:p,orbitalPlaneQuat:_,capLocalQuat:y,orbitalMap:u.orbitalBundle?.surfaceMesh?.material?.map||null,orbitalEmissiveMap:u.orbitalBundle?.surfaceMesh?.material?.emissiveMap||null,cloudMap:u.orbitalBundle?.upperCloudMesh?.material?.uniforms?.uCloudMap?.value||null,pandoraLandmarks:h==="p1"?Tt:null,nightCityLandmarks:h==="p2"?No:null})}let c=null;if(this.mode==="SURFACE"&&this.currentDominantPlanet){const h=this.currentDominantPlanet,u=this.planetNodes.get(h.id);if(u){const d=u.capFrame||u.spinGroup||u.root,f=u.currWorldPos.clone(),g=e.clone().sub(f).normalize(),v=e.clone().negate().normalize(),m=[];if(h.id==="p1"){const p={hometree:{nation:"forest",color:"#44f0a8"},hallelujah:{nation:"forest",color:"#44f0a8"},rookery:{nation:"forest",color:"#44f0a8"},souls:{nation:"forest",color:"#44f0a8"},mushrooms:{nation:"forest",color:"#a864ff"},ashland:{nation:"ash",color:"#ff6c34"},metkayina:{nation:"water",color:"#26e8ff"}};for(const _ of Tt){const y=_.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld),x=p[_.id]||{nation:"forest",color:"#44f0a8"};m.push({id:_.id,shortName:_.shortName,nation:x.nation,color:x.color,worldPos:y,distKm:Math.round(e.distanceTo(y)*(h.kmScale/(620*Li)))})}}else if(h.id==="p2")for(const p of No){const _=p.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld);m.push({id:p.id,shortName:p.shortName,color:p.color,worldPos:_,distKm:Math.round(e.distanceTo(_)*(h.kmScale/(620*Li)))})}else{const p=new b(0,h.localRadius,0).applyMatrix4(d.matrixWorld);m.push({id:"capital",shortName:h.id==="p3"?"Fortaleza Perugius":"Plaza del Senado",color:h.id==="p3"?"#ffcf78":"#ff944d",worldPos:p,distKm:Math.round(e.distanceTo(p)*(h.kmScale/(620*Li)))})}c={planetKey:h.id,planetName:h.name,planetWorldPos:f,worldRadius:h.localRadius*Pn,radialUp:g,sunDir:v,solarPhaseName:this.lastSolarPhaseName||"DÍA",isUnderwater:!!this.lastIsUnderwater,regionNation:this.lastP1RegionInfo?.nation||"forest",regionDistrict:this.lastP2DistrictId||"city_center",regionDistrictName:this.lastP2DistrictName||"Corpo Plaza",regionDistrictShort:this.lastP2DistrictShort||"Corpo Plaza",markers:m}}}return{mode:this.mode,isUnderwater:!!this.lastIsUnderwater,shipPos:e,shipForward:t,shipRight:n,shipYawRad:i,sunPos:new b(0,0,0),sunWorldRadius:2.21*3.2*Pn,planets:r,crystalPalace:s,atmosphereLocal:c,dominantPlanetKey:this.currentDominantPlanet?.id||null}}}new b(0,1,0);const Gs=new b,tc=new b,To=new b;class wy{constructor({containerEl:e,canvasEl:t,scaleEl:n,sceneManager:i,onOpenStarMap:s}){this.containerEl=e,this.canvas=t,this.ctx=t?.getContext?.("2d")||null,this.scaleEl=n,this.sceneManager=i,this.onOpenStarMap=s||(()=>{}),this.size=170,this._bindEvents(),this._resizeCanvas()}_bindEvents(){this.containerEl&&this.containerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenStarMap()})}_resizeCanvas(){if(!this.canvas||!this.ctx)return;const e=typeof window<"u"?Math.min(window.devicePixelRatio||1,2):1;this.canvas.width=this.size*e,this.canvas.height=this.size*e,this.dpr=e}update(e=0){if(!this.ctx||!this.sceneManager)return;const t=this.ctx,n=this.size,i=n*.5,s=this.dpr||1;t.setTransform(s,0,0,s,0,0),t.clearRect(0,0,n,n);const a=this.sceneManager.getStarChartState();if(!a)return;t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.strokeStyle="rgba(94, 212, 255, 0.16)",t.lineWidth=1;for(const c of[.32,.62,.9])t.beginPath(),t.arc(i,i,(i-6)*c,0,Math.PI*2),t.stroke();t.strokeStyle="rgba(94, 212, 255, 0.12)",t.beginPath(),t.moveTo(i,8),t.lineTo(i,n-8),t.moveTo(8,i),t.lineTo(n-8,i),t.stroke();const r=e*1.35%(Math.PI*2),l=t.createRadialGradient(i,i,4,i,i,i-6);l.addColorStop(0,"rgba(94, 212, 255, 0.02)"),l.addColorStop(1,"rgba(94, 212, 255, 0.12)"),t.fillStyle=l,t.beginPath(),t.moveTo(i,i),t.arc(i,i,i-6,r-.45,r),t.closePath(),t.fill(),a.mode==="SURFACE"&&a.atmosphereLocal?this._drawAtmosphericRadar(t,n,i,a):this._drawSolarRadar(t,n,i,a),t.fillStyle=a.isUnderwater?"#38f6d2":"#ffae42",t.strokeStyle="#040a14",t.lineWidth=1.4,t.beginPath(),t.moveTo(i,i-7),t.lineTo(i+5.2,i+5.2),t.lineTo(i,i+2.6),t.lineTo(i-5.2,i+5.2),t.closePath(),t.fill(),t.stroke(),t.restore()}_drawSolarRadar(e,t,n,i){let s=i.shipForward.x,a=i.shipForward.z;const r=Math.hypot(s,a);r<.001?(s=0,a=-1):(s/=r,a/=r);const l=-a,c=s,h=n-15,u=Math.hypot(i.shipPos.x,i.shipPos.z),d=Math.max(12e3,Math.min(48e3,u*1.45+11e3));this.scaleEl&&(this.scaleEl.textContent=`ÓRBITA · ${Math.round(d/100)/10}k`);const f=(v,m)=>{const p=v-i.shipPos.x,_=m-i.shipPos.z,y=p*l+_*c,x=p*s+_*a,T=Math.hypot(y,x),w=Math.pow(Math.min(1,T/d),.78),E=Math.atan2(-x,y);return{x:n+Math.cos(E)*w*h,y:n+Math.sin(E)*w*h,clipped:T>d}},g=f(i.sunPos.x,i.sunPos.z);if(e.fillStyle="rgba(255, 200, 72, 0.35)",e.beginPath(),e.arc(g.x,g.y,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffdc64",e.beginPath(),e.arc(g.x,g.y,4.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 224, 130, 0.9)",e.font='600 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText("SOL",g.x,g.y-7),i.crystalPalace){const v=f(i.crystalPalace.worldPos.x,i.crystalPalace.worldPos.z);e.strokeStyle="#ffae42",e.lineWidth=1.2,e.beginPath(),e.moveTo(v.x,v.y-3.5),e.lineTo(v.x+3.5,v.y),e.lineTo(v.x,v.y+3.5),e.lineTo(v.x-3.5,v.y),e.closePath(),e.stroke()}for(const v of i.planets){const m=f(v.worldPos.x,v.worldPos.z);e.fillStyle=v.color,e.beginPath(),e.arc(m.x,m.y,v.landable?3.8:4.6,0,Math.PI*2),e.fill(),e.fillStyle="rgba(230, 243, 255, 0.9)",e.font='700 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText(v.code,m.x,m.y-6)}}_drawAtmosphericRadar(e,t,n,i){const s=i.atmosphereLocal,a=s.radialUp;Gs.copy(i.shipForward).addScaledVector(a,-i.shipForward.dot(a)),Gs.lengthSq()<1e-4&&Gs.copy(i.shipRight).cross(a),Gs.normalize(),tc.crossVectors(Gs,a).normalize();const r=n-16,l=Math.max(220,s.planetKey==="p2"?s.worldRadius*.56:s.worldRadius*1.08);if(this.scaleEl){const g=s.isUnderwater?"SUBMARINO":s.planetKey==="p1"?{forest:"BOSQUE",water:"METKAYINA",ash:"CENIZA"}[s.regionNation]||"PANDORA":s.planetKey==="p2"?(s.regionDistrictShort||s.regionDistrictName||"NIGHT CITY").toUpperCase():s.planetKey.toUpperCase();this.scaleEl.textContent=`${g} · ${s.solarPhaseName}`}const c=To.copy(s.sunDir).dot(tc),h=To.dot(Gs),u=Math.atan2(-h,c),d=n+Math.cos(u)*(n-11),f=n+Math.sin(u)*(n-11);e.fillStyle="#ffd65a",e.beginPath(),e.arc(d,f,4.2,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 214, 90, 0.5)",e.lineWidth=1,e.beginPath(),e.arc(d,f,7,0,Math.PI*2),e.stroke(),e.font='600 7.5px "Cascadia Code", Consolas, monospace',e.textAlign="center";for(const g of s.markers){To.copy(g.worldPos).sub(i.shipPos);const v=To.dot(tc),m=To.dot(Gs),p=Math.hypot(v,m),_=Math.min(1,Math.pow(p/l,.72)),y=Math.atan2(-m,v),x=n+Math.cos(y)*_*r,T=n+Math.sin(y)*_*r,w=To.dot(a)<-s.worldRadius*.45;e.globalAlpha=w?.45:.95,e.fillStyle=g.color||"#5ed4ff",e.beginPath(),e.arc(x,T,w?2.4:3.2,0,Math.PI*2),e.fill(),e.fillStyle="#e6f3ff";const E=g.shortName.length>9?g.shortName.slice(0,8)+".":g.shortName;e.fillText(E,x,T-5)}e.globalAlpha=1}}const mn=Object.freeze({CLOSED:"CLOSED",SOLAR_SYSTEM:"SOLAR_SYSTEM",PLANET_ZOOM:"PLANET_ZOOM",JUMP_CONFIRMED:"JUMP_CONFIRMED"}),Ay=230*157.5,Hs=12.5,Ad=4.2,Ey=6,Ed=5;function Ty(o){const e=Math.max(0,Math.min(1,o));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function nc(o,e=new b){if(!o)return e.set(0,0,0);const t=Math.hypot(o.x||0,o.y||0,o.z||0);if(t<1e-4)return e.set(0,0,0);const n=t/Ay,s=(24+Math.pow(Math.min(1.4,n),.72)*168)/t;return e.set(o.x*s,o.y*s,o.z*s)}function Cy(){if(typeof document>"u")return null;const o=document.createElement("canvas");o.width=512,o.height=256;const e=o.getContext?.("2d");if(!e)return null;const t=e.createLinearGradient(0,0,0,o.height);t.addColorStop(0,"#133056"),t.addColorStop(.16,"#27598d"),t.addColorStop(.28,"#4f9cd9"),t.addColorStop(.38,"#9fd8ff"),t.addColorStop(.49,"#316aa6"),t.addColorStop(.62,"#64b8f2"),t.addColorStop(.74,"#244d80"),t.addColorStop(.86,"#488cc8"),t.addColorStop(1,"#122949"),e.fillStyle=t,e.fillRect(0,0,o.width,o.height);for(let i=0;i<28;i++){const s=i/28*o.height;e.fillStyle=i%2===0?"rgba(180, 232, 255, 0.14)":"rgba(10, 28, 56, 0.16)",e.fillRect(0,s,o.width,3+i%4)}e.fillStyle="rgba(155, 228, 255, 0.38)",e.beginPath(),e.ellipse(o.width*.62,o.height*.58,34,14,0,0,Math.PI*2),e.fill();const n=new fn(o);return n.colorSpace=Xt,n.wrapS=Nn,n.wrapT=Fi,n}function Td(o,e=.72){const t=new ne(o||"#5ed4ff");return new nn({uniforms:{uColor:{value:t},uIntensity:{value:e}},vertexShader:`
      varying vec3 vNormalW;
      varying vec3 vViewDir;
      void main() {
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vNormalW = normalize(normalMatrix * normal);
        vViewDir = normalize(-mvPos.xyz);
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      varying vec3 vNormalW;
      varying vec3 vViewDir;
      void main() {
        float ndv = clamp(dot(normalize(vNormalW), normalize(vViewDir)), 0.0, 1.0);
        float rim = pow(clamp(1.0 - ndv, 0.0, 1.0), 2.6);
        gl_FragColor = vec4(uColor * (rim * uIntensity), clamp(rim * uIntensity, 0.0, 0.95));
      }
    `,transparent:!0,depthWrite:!1,blending:Rn,side:Ti})}function ic(){return new dn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})}class Py{constructor({overlayEl:e,canvasEl:t,labelsEl:n,backBtnEl:i,closeBtnEl:s,levelTagEl:a,titleEl:r,dossierEl:l,dossierBadgeEl:c,dossierTitleEl:h,dossierDescEl:u,dossierTypeEl:d,dossierAltEl:f,dossierAtmoEl:g,dossierDistEl:v,jumpBtnEl:m,footerEl:p,sceneManager:_,controls:y,onConfirmJump:x,onStateChange:T,createRenderer:w}={}){this.overlayEl=e||null,this.canvas=t||null,this.labelsEl=n||(typeof document<"u"?document.getElementById("star-map-labels"):null),this.backBtnEl=i||null,this.closeBtnEl=s||null,this.levelTagEl=a||null,this.titleEl=r||null,this.dossierEl=l||null,this.dossierBadgeEl=c||null,this.dossierTitleEl=h||null,this.dossierDescEl=u||null,this.dossierTypeEl=d||null,this.dossierAltEl=f||null,this.dossierAtmoEl=g||null,this.dossierDistEl=v||null,this.jumpBtnEl=m||null,this.footerEl=p||null,this.sceneManager=_,this.controls=y,this.onConfirmJump=x||(E=>_?.navigateToTarget?.(E)),this.onStateChange=T||(()=>{}),this.createRenderer=w||null,this.state=mn.CLOSED,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.zoomDuration=.75,this.transitionElapsed=.75,this.transitionActive=!1,this.transitionFromCamPos=new b(0,145,195),this.transitionFromLookAt=new b(0,0,0),this.lastTimeMs=0,this.solarOrbit={theta:.62,phi:.92,radius:225},this.level2Orbit={theta:.65,phi:1.15,radius:24},this.curCamPos=new b(110,145,170),this.curLookAt=new b(0,0,0),this.viewW=1280,this.viewH=720,this.dpr=1,this.mouseX=-9999,this.mouseY=-9999,this.isPointerDown=!1,this.downX=0,this.downY=0,this.lastPointerX=0,this.lastPointerY=0,this.dragDistance=0,this._suppressNextClick=!1,this.currentSolarNodes=[],this.currentLevel2Nodes=[],this.activeHitMeshes=[],this.mapScene=null,this.mapCamera=null,this.renderer=null,this.raycaster=new aM,this.planetRigs=new Map,this.sunRig=null,this.shipBeacon=null,this.l2RingsGroup=null,this.l2PinGroup=null,this.l2PinPool=[],this.l2OrbitRingPool=[],this.disposables=[],this.svgEl=null,this.labelEls=new Map,this.lineEls=new Map,this.tooltipEl=null,this._tmpVecA=new b,this._tmpVecB=new b,this._tmpVecC=new b,this._tmpDesiredCam=new b,this._tmpDesiredLook=new b,this._boundHandlers={},this._bindEvents()}_bindEvents(){this.backBtnEl&&(this._boundHandlers.onBackClick=e=>{e.stopPropagation(),this.backToSolarSystem()},this.backBtnEl.addEventListener("click",this._boundHandlers.onBackClick)),this.closeBtnEl&&(this._boundHandlers.onCloseClick=e=>{e.stopPropagation(),this.close()},this.closeBtnEl.addEventListener("click",this._boundHandlers.onCloseClick)),this.jumpBtnEl&&(this._boundHandlers.onJumpClick=e=>{e.stopPropagation(),this.confirmJump()},this.jumpBtnEl.addEventListener("click",this._boundHandlers.onJumpClick)),this.canvas&&(this._boundHandlers.onMouseDown=e=>{if(e.button!==0)return;const t=this.canvas.getBoundingClientRect();this.handlePointerDown(e.clientX-t.left,e.clientY-t.top,e.button)},this._boundHandlers.onMouseMove=e=>{if(!this.isOpen())return;const t=this.canvas.getBoundingClientRect();this.handlePointerMove(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onMouseUp=e=>{if(!this.isPointerDown)return;const t=this.canvas.getBoundingClientRect();this.handlePointerUp(e.clientX-t.left,e.clientY-t.top,e.button)},this._boundHandlers.onClick=e=>{if(this._suppressNextClick){this._suppressNextClick=!1,this.dragDistance=0;return}const t=this.canvas.getBoundingClientRect();this.handleClick(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onDblClick=e=>{if(this.dragDistance>Ed)return;const t=this.canvas.getBoundingClientRect();this.handleDoubleClick(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onWheel=e=>{this.isOpen()&&(e.preventDefault(),this.handleWheel(e.deltaY))},this._boundHandlers.onContextMenu=e=>{e.preventDefault(),this.state===mn.PLANET_ZOOM&&this.backToSolarSystem()},this.canvas.addEventListener("mousedown",this._boundHandlers.onMouseDown),this.canvas.addEventListener("click",this._boundHandlers.onClick),this.canvas.addEventListener("dblclick",this._boundHandlers.onDblClick),this.canvas.addEventListener("wheel",this._boundHandlers.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this._boundHandlers.onContextMenu)),typeof window<"u"&&(this._boundHandlers.onResize=()=>this.resize(),this._boundHandlers.onKeyDown=e=>this._onKeyDown(e),this._boundHandlers.onMouseMove&&window.addEventListener("mousemove",this._boundHandlers.onMouseMove),this._boundHandlers.onMouseUp&&window.addEventListener("mouseup",this._boundHandlers.onMouseUp),window.addEventListener("resize",this._boundHandlers.onResize),window.addEventListener("keydown",this._boundHandlers.onKeyDown))}_onKeyDown(e){if(e.code==="KeyM"&&!e.repeat){e.preventDefault(),this.isOpen()?this.close():this.open();return}this.isOpen()&&(e.code==="Escape"?(e.preventDefault(),this.close()):e.code==="Backspace"&&this.state===mn.PLANET_ZOOM?(e.preventDefault(),this.backToSolarSystem()):e.code==="Enter"&&this.state===mn.PLANET_ZOOM&&this.selectedNode&&(e.preventDefault(),this.confirmJump()))}isOpen(){return this.state!==mn.CLOSED}_trackDisposable(e){return e&&this.disposables.push(e),e}_ensureScene3D(e){if(!this.mapCamera){const t=Math.max(.5,(this.viewW||1280)/Math.max(1,this.viewH||720));this.mapCamera=new Xn(45,t,.1,1e4),this._syncCameraFromSpherical(this.curCamPos,this.curLookAt,this.solarOrbit,new b(0,0,0)),this.mapCamera.position.copy(this.curCamPos),this.mapCamera.lookAt(this.curLookAt)}this.mapScene||(this.mapScene=new gh,this.mapScene.fog=new el(132626,55e-5),this._buildStaticBackdrop()),!this.renderer&&this.canvas&&(typeof this.createRenderer=="function"?this.renderer=this.createRenderer(this.canvas):this.renderer=new Af({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer&&(this.renderer.setPixelRatio?.(Math.min(typeof window<"u"&&window.devicePixelRatio||1,2)),this.renderer.setSize?.(this.viewW,this.viewH,!1),this.renderer.setClearColor?.(132626,.94),"toneMapping"in this.renderer&&(this.renderer.toneMapping=jr,this.renderer.toneMappingExposure=1.15))),e&&!this.sunRig&&this._buildSunAndPlanets(e)}_buildStaticBackdrop(){const e=this.mapScene;e.add(new Nf(2638182,.52));const t=new Ma(16773580,3.4,1500,.28);t.position.set(0,0,0),e.add(t);const n=new bh(4835071,.36);n.position.set(-180,140,-160),e.add(n);const i=1100,s=new Float32Array(i*3),a=new Float32Array(i*3);for(let x=0;x<i;x++){const T=Math.sin(x*12.9898)*43758.5453,w=T-Math.floor(T),E=Math.sin(x*78.233)*28411.172,A=E-Math.floor(E),M=w*Math.PI*2,S=Math.acos(2*A-1),C=1100+x%7*140;s[x*3]=C*Math.sin(S)*Math.cos(M),s[x*3+1]=C*Math.cos(S),s[x*3+2]=C*Math.sin(S)*Math.sin(M);const R=.72+.28*(x%5/4);a[x*3]=R*(x%3===0?1:.75),a[x*3+1]=R*.88,a[x*3+2]=R}const r=this._trackDisposable(new At);r.setAttribute("position",new xt(s,3)),r.setAttribute("color",new xt(a,3));const l=this._trackDisposable(new Ci({size:3.2,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1}));e.add(new Pi(r,l));const c=new Ut,h=[34,66,98,132,168,202],u=this._trackDisposable(new qs({color:3718648,transparent:!0,opacity:.14,depthWrite:!1}));for(const x of h){const T=[];for(let A=0;A<128;A++){const M=A/128*Math.PI*2;T.push(new b(Math.cos(M)*x,-.4,Math.sin(M)*x))}const E=this._trackDisposable(new At().setFromPoints(T));c.add(new Or(E,u))}const d=this._trackDisposable(new qs({color:16762478,transparent:!0,opacity:.11,depthWrite:!1}));for(let x=0;x<12;x++){const T=x/12*Math.PI*2,w=this._trackDisposable(new At().setFromPoints([new b(Math.cos(T)*20,-.4,Math.sin(T)*20),new b(Math.cos(T)*212,-.4,Math.sin(T)*212)]));c.add(new nl(w,d))}e.add(c);const f=new Ut,g=this._trackDisposable(new _a(2.1,0)),v=this._trackDisposable(new dn({color:16756290,wireframe:!1,transparent:!0,opacity:.95})),m=new Ve(g,v);f.add(m);const p=this._trackDisposable(new Xs(2.6,3.2,32)),_=this._trackDisposable(new dn({color:16763760,transparent:!0,opacity:.72,side:wt,depthWrite:!1})),y=new Ve(p,_);y.rotation.x=Math.PI*.5,f.add(y),e.add(f),this.shipBeacon={group:f,diamond:m,ring:y},this.l2RingsGroup=new Ut,this.l2RingsGroup.visible=!1,e.add(this.l2RingsGroup),this.l2PinGroup=new Ut,this.l2PinGroup.visible=!1,e.add(this.l2PinGroup)}_buildSunAndPlanets(e){const t=this.mapScene,n=new Ut,i=this._trackDisposable(new ln(Hs,40,28)),s=this._trackDisposable(new dn({color:16766574})),a=new Ve(i,s);n.add(a);const r=this._trackDisposable(new ln(Hs*1.24,32,24)),l=this._trackDisposable(Td("#ff9f2e",1.15));n.add(new Ve(r,l));const c=this._trackDisposable(new ln(Hs*1.55,24,18)),h=this._trackDisposable(new dn({color:16755248,transparent:!0,opacity:.14,depthWrite:!1,blending:Rn,side:Hn}));n.add(new Ve(c,h));const u=this._trackDisposable(new ln(Hs*1.38,16,12)),d=new Ve(u,this._trackDisposable(ic()));n.add(d),t.add(n),this.sunRig={group:n,mesh:a,hitMesh:d};const f=this._trackDisposable(new ln(1,48,32)),g=this._trackDisposable(new ln(1.018,36,24)),v=this._trackDisposable(new ln(1.075,36,24)),m=this._trackDisposable(new ln(1,20,14)),p=this._trackDisposable(new ln(1,14,10)),_=this._trackDisposable(ic()),y=Cy();y&&this._trackDisposable(y);for(const x of e.planets){const T=x.key==="p5"?Ey:Ad,w=x.eccentricity||.04,E=[],A=144,M=new b;for(let J=0;J<A;J++){const de=J/A*Math.PI*2,Ae=x.semiMajorAxis*(1-w*w)/(1+w*Math.cos(de))*157.5;M.set(Math.cos(de)*Ae,0,Math.sin(de)*Ae),x.orbitalPlaneQuat&&M.applyQuaternion(x.orbitalPlaneQuat),E.push(nc(M))}const S=this._trackDisposable(new At().setFromPoints(E)),C=this._trackDisposable(new qs({color:new ne(x.color),transparent:!0,opacity:.42,depthWrite:!1})),R=new Or(S,C);t.add(R);const N=new Ut,P=new Ut;N.add(P);const k=!!x.orbitalMap,z=this._trackDisposable(new ze({color:x.key==="p5"||k?16777215:new ne(x.color),map:x.orbitalMap||(x.key==="p5"?y:null),emissive:x.orbitalEmissiveMap?new ne(16777215):new ne(x.color),emissiveMap:x.orbitalEmissiveMap||null,emissiveIntensity:x.orbitalEmissiveMap?1.15:.14,roughness:x.key==="p5"?.65:.72,metalness:.08})),F=new Ve(f,z);F.scale.setScalar(T),P.add(F);const U=this._trackDisposable(new ze({map:x.cloudMap||null,transparent:!0,opacity:x.cloudMap?.36:0,depthWrite:!1,roughness:.9})),L=new Ve(g,U);L.scale.setScalar(T),L.visible=!!x.cloudMap,P.add(L);const W=this._trackDisposable(Td(x.color,.76)),te=new Ve(v,W);if(te.scale.setScalar(T),P.add(te),x.key==="p5"){const J=this._trackDisposable(new Xs(1.38*T,2.36*T,84)),de=this._trackDisposable(new dn({color:8378623,transparent:!0,opacity:.38,side:wt,depthWrite:!1})),ge=new Ve(J,de);ge.rotation.x=Math.PI*.44,ge.rotation.y=.22,P.add(ge);const Ae=this._trackDisposable(new Xs(1.56*T,1.88*T,72)),ve=this._trackDisposable(new dn({color:12774655,transparent:!0,opacity:.26,side:wt,depthWrite:!1})),De=new Ve(Ae,ve);De.rotation.copy(ge.rotation),P.add(De)}const j=new Ve(p,_);j.scale.setScalar(T*1.55),N.add(j);const be=this._trackDisposable(new Xs(T*1.48,T*1.66,48)),Y=this._trackDisposable(new dn({color:new ne(x.color),transparent:!0,opacity:.75,side:wt,depthWrite:!1})),fe=new Ve(be,Y);fe.rotation.x=Math.PI*.5,fe.visible=!1,N.add(fe);const pe=x.moons.map((J,de)=>{const ge=Math.max(.55,Math.min(1.15,J.moonRadius/Math.max(1,x.worldRadius)*T*2.1)),Ae=new Ut,ve=this._trackDisposable(new ze({color:13164287,emissive:3891345,emissiveIntensity:.28,roughness:.85})),De=new Ve(m,ve);De.scale.setScalar(ge),Ae.add(De);const B=new Ve(p,_);return B.scale.setScalar(Math.max(1.5,ge*2.2)),Ae.add(B),N.add(Ae),{index:de,name:J.name,group:Ae,mesh:De,hitMesh:B,orbitChartR:T*(1.76+de*.46)}});let he=null;x.hasCrystalPalace&&(he=this._buildCrystalPalace3DRig(T,p,_),N.add(he.group)),t.add(N),this.planetRigs.set(x.key,{key:x.key,pChartR:T,orbitLine:R,orbitMat:C,rootGroup:N,spinGroup:P,globeMesh:F,globeMat:z,cloudMesh:L,cloudMat:U,haloMat:W,l1HitMesh:j,selectRingMesh:fe,moonRigs:pe,stationRig:he,lastOrbitalMap:x.orbitalMap||null,lastEmissiveMap:x.orbitalEmissiveMap||null,lastCloudMap:x.cloudMap||null})}}_buildCrystalPalace3DRig(e,t,n){const i=new Ut,s=this._trackDisposable(new il(.95,.14,10,28)),a=this._trackDisposable(new ze({color:16765572,emissive:16751400,emissiveIntensity:.72,metalness:.6,roughness:.25})),r=new Ve(s,a);r.rotation.x=Math.PI*.5,i.add(r);const l=this._trackDisposable(new _a(.45,0)),c=this._trackDisposable(new dn({color:16770227}));i.add(new Ve(l,c));const h=this._trackDisposable(new Qt(.06,.06,1.9,6)),u=new Ve(h,a);u.rotation.z=Math.PI*.5;const d=new Ve(h,a);d.rotation.x=Math.PI*.5,i.add(u,d);const f=new Ve(t,n);return f.scale.setScalar(1.9),i.add(f),{group:i,hitMesh:f,orbitChartR:e*1.96}}resize(){if(!this.canvas)return;const e=typeof window<"u"&&window.innerWidth||this.viewW||1280,t=typeof window<"u"&&window.innerHeight||this.viewH||720;this.dpr=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),this.viewW=Math.max(1,e),this.viewH=Math.max(1,t),this.canvas.width=Math.round(this.viewW*this.dpr),this.canvas.height=Math.round(this.viewH*this.dpr),this.mapCamera&&(this.mapCamera.aspect=this.viewW/Math.max(1,this.viewH),this.mapCamera.updateProjectionMatrix()),this.renderer&&(this.renderer.setPixelRatio?.(this.dpr),this.renderer.setSize?.(this.viewW,this.viewH,!1))}open(){this.resize(),typeof document<"u"&&document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),this.controls?.setEnabled?this.controls.setEnabled(!1):this.controls&&(this.controls.enabled=!1);const e=this.sceneManager?.getStarChartState?.()||null;this._ensureScene3D(e),this.state=mn.SOLAR_SYSTEM,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.transitionActive=!1,this.transitionElapsed=this.zoomDuration,this.lastTimeMs=typeof performance<"u"?performance.now():0,e&&(this._syncScenePositions(e,this.lastTimeMs*.001),this.currentSolarNodes=this._buildSolarNodes3D(e),this._updateCamera(.016),this._updateLabelsAndLeaderLines(e)),this.overlayEl&&this.overlayEl.classList.remove("hidden"),this._syncHeaderAndDossier(),this.onStateChange(this.state)}close(){this.state!==mn.CLOSED&&(this.state=mn.CLOSED,this.hoveredNode=null,this.isPointerDown=!1,this._suppressNextClick=!1,this.canvas?.classList?.remove("dragging"),this.canvas?.classList?.remove("hovering"),this._clearLabelDOM(),this.renderer?.renderLists?.dispose&&this.renderer.renderLists.dispose(),this.overlayEl&&this.overlayEl.classList.add("hidden"),this.controls?.setEnabled?this.controls.setEnabled(!0):this.controls&&(this.controls.enabled=!0),this.onStateChange(this.state))}selectPlanetForZoom(e){if(!e)return;const t=this.sceneManager?.getStarChartState?.();this._ensureScene3D(t),this.selectedPlanetKey=e,this.state=mn.PLANET_ZOOM,this.zoomTarget=1,this.hoveredNode=null,this.mapCamera&&(this.transitionFromCamPos.copy(this.mapCamera.position),this.transitionFromLookAt.copy(this.curLookAt),this.transitionElapsed=0,this.transitionActive=!0);const n=this.planetRigs.get(e),i=e==="sun"?Hs:n?.pChartR||Ad;this.level2Orbit.radius=e==="sun"?46:i*4.4,this.level2Orbit.phi=1.12,this.level2Orbit.theta=.58,t?(this._syncScenePositions(t,0),this.l2RingsGroup&&(this.l2RingsGroup.visible=!0),this.l2PinGroup&&(this.l2PinGroup.visible=!0),this.currentLevel2Nodes=this._buildLevel2Nodes3D(t,e),this.selectedNode=this.currentLevel2Nodes[0]||null,this._updateLabelsAndLeaderLines(t)):(this.currentLevel2Nodes=[],this.selectedNode=null),this._syncHeaderAndDossier(),this.onStateChange(this.state)}backToSolarSystem(){this.state===mn.PLANET_ZOOM&&(this.state=mn.SOLAR_SYSTEM,this.zoomTarget=0,this.selectedNode=null,this.hoveredNode=null,this.l2RingsGroup&&(this.l2RingsGroup.visible=!1),this.l2PinGroup&&(this.l2PinGroup.visible=!1),this.mapCamera&&(this.transitionFromCamPos.copy(this.mapCamera.position),this.transitionFromLookAt.copy(this.curLookAt),this.transitionElapsed=0,this.transitionActive=!0),this._syncHeaderAndDossier(),this.onStateChange(this.state))}selectNodeById(e){const t=this.currentLevel2Nodes.find(n=>n.id===e);return t?(this.selectedNode=t,this._syncHeaderAndDossier(),t):null}confirmJump(){if(this.state!==mn.PLANET_ZOOM||!this.selectedNode)return null;const e=this.selectedNode.descriptor;return this.state=mn.JUMP_CONFIRMED,this.onStateChange(this.state,e),this.close(),this.onConfirmJump(e),e}getVisibleNodes(){return this.state===mn.PLANET_ZOOM?this.currentLevel2Nodes:this.currentSolarNodes}handlePointerDown(e,t,n=0){n===0&&(this.isPointerDown=!0,this.downX=e,this.downY=t,this.lastPointerX=e,this.lastPointerY=t,this.dragDistance=0,this._suppressNextClick=!1)}handlePointerMove(e,t){if(this.mouseX=e,this.mouseY=t,this.isPointerDown){const i=e-this.lastPointerX,s=t-this.lastPointerY;if(this.lastPointerX=e,this.lastPointerY=t,this.dragDistance=Math.hypot(e-this.downX,t-this.downY),this.dragDistance>Ed){this._suppressNextClick=!0,this.canvas?.classList?.add("dragging"),this.hoveredNode=null,this.state===mn.PLANET_ZOOM?(this.level2Orbit.theta-=i*.0072,this.level2Orbit.phi=H.clamp(this.level2Orbit.phi-s*.0062,.16,2.94)):(this.solarOrbit.theta-=i*.0065,this.solarOrbit.phi=H.clamp(this.solarOrbit.phi-s*.0055,.14,1.48));return}}const n=this._pickNodeAt(e,t);this.hoveredNode=n,this.canvas?.classList?.toggle("hovering",!!n)}handlePointerUp(e,t,n=0){n===0&&(this.isPointerDown=!1,this.canvas?.classList?.remove("dragging"),this.dragDistance=Math.hypot(e-this.downX,t-this.downY))}handleWheel(e){const t=1+Math.max(-.35,Math.min(.35,e*.0011));if(this.state===mn.PLANET_ZOOM){const n=this.planetRigs.get(this.selectedPlanetKey),i=this.selectedPlanetKey==="sun"?22:(n?.pChartR||4.2)*2.1,s=this.selectedPlanetKey==="sun"?120:(n?.pChartR||4.2)*14;this.level2Orbit.radius=H.clamp(this.level2Orbit.radius*t,i,s)}else this.solarOrbit.radius=H.clamp(this.solarOrbit.radius*t,68,430)}handleClick(e,t){this.mouseX=e,this.mouseY=t;const n=this._pickNodeAt(e,t);n&&(this.state===mn.SOLAR_SYSTEM?this.selectPlanetForZoom(n.planetKey):this.state===mn.PLANET_ZOOM&&(this.selectedNode=n,this._syncHeaderAndDossier()))}handleDoubleClick(e,t){if(this.state!==mn.PLANET_ZOOM)return;const n=this._pickNodeAt(e,t);n&&(this.selectedNode=n,this._syncHeaderAndDossier(),this.confirmJump())}_pickNodeAt(e,t){if(!this.mapScene||!this.mapCamera)return null;this.mapScene.updateMatrixWorld(!0),this.mapCamera.updateMatrixWorld();const n=e/Math.max(1,this.viewW)*2-1,i=-(t/Math.max(1,this.viewH))*2+1;this.raycaster.setFromCamera({x:n,y:i},this.mapCamera);const s=this.getVisibleNodes(),a=[];for(const l of s)l.occluded||!l.hitMesh||(l.hitMesh.userData.starNode=l,a.push(l.hitMesh));const r=this.raycaster.intersectObjects(a,!1);return r.length>0&&r[0].object.userData.starNode||null}_syncHeaderAndDossier(){const e=this.state===mn.PLANET_ZOOM;if(this.backBtnEl&&this.backBtnEl.classList.toggle("hidden",!e),this.levelTagEl&&(this.levelTagEl.textContent=e?"SUB-MAPA PLANETARIO 3D // NIVEL 2":"CARTOGRAFÍA ESTELAR 3D // NIVEL 1"),this.titleEl)if(e&&this.selectedPlanetKey){const i=this.sceneManager?.getStarChartState?.()?.planets?.find(s=>s.key===this.selectedPlanetKey);this.titleEl.textContent=this.selectedPlanetKey==="sun"?"SOL CENTRAL // ESTRELLA TIPO G":`${i?.code||""} · ${i?.shortName||this.selectedPlanetKey.toUpperCase()}`}else this.titleEl.textContent="SISTEMA SOLAR CENTRAL";if(this.footerEl&&(this.footerEl.textContent=e?"Arrastra para orbitar el planeta en 3D · Rueda para zoom · Clic en nodo · Doble clic o Enter para saltar · Backspace volver":"Arrastra para orbitar en 3D · Rueda para zoom · Clic en un planeta para inspeccionarlo antes de saltar · [M] / [ESC] cerrar"),!this.dossierEl)return;if(!e||!this.selectedNode){this.dossierEl.classList.add("hidden");return}const t=this.selectedNode;this.dossierEl.classList.remove("hidden"),this.dossierBadgeEl&&(this.dossierBadgeEl.textContent=t.badge||"NODO TÁCTICO"),this.dossierTitleEl&&(this.dossierTitleEl.textContent=t.title||t.label),this.dossierDescEl&&(this.dossierDescEl.textContent=t.description||""),this.dossierTypeEl&&(this.dossierTypeEl.textContent=t.destTypeLabel||"Órbita"),this.dossierAltEl&&(this.dossierAltEl.textContent=t.insertionAlt||"--"),this.dossierAtmoEl&&(this.dossierAtmoEl.textContent=t.atmoGravity||"--"),this.dossierDistEl&&(this.dossierDistEl.textContent=t.distText||"--")}_syncCameraFromSpherical(e,t,n,i){e.set(i.x+n.radius*Math.sin(n.phi)*Math.cos(n.theta),i.y+n.radius*Math.cos(n.phi),i.z+n.radius*Math.sin(n.phi)*Math.sin(n.theta)),t.copy(i)}_getShipChartPos(e){let t=null,n=1/0;for(const s of e.planets){const a=e.shipPos.distanceTo(s.worldPos);a<n&&(n=a,t=s)}const i=nc(e.shipPos);if(t&&n<t.worldRadius*6){const s=this.planetRigs.get(t.key);if(s){const a=e.shipPos.clone().sub(t.worldPos),r=a.length(),l=Math.max(1.01,r/Math.max(1,t.worldRadius)),c=r>1e-4?a.divideScalar(r):new b(0,1,0),h=s.rootGroup.position.clone().addScaledVector(c,s.pChartR*Math.min(2.8,l)),u=H.clamp(1-(n-t.worldRadius*2)/(t.worldRadius*4),0,1);return i.lerp(h,u)}}return i}_syncScenePositions(e,t){for(const n of e.planets){const i=this.planetRigs.get(n.key);if(!i)continue;nc(n.worldPos,i.rootGroup.position),n.spinWorldQuat&&i.spinGroup.quaternion.copy(n.spinWorldQuat),n.orbitalMap&&n.orbitalMap!==i.lastOrbitalMap&&(i.globeMat.map=n.orbitalMap,i.globeMat.color.setHex(16777215),i.globeMat.needsUpdate=!0,i.lastOrbitalMap=n.orbitalMap),n.orbitalEmissiveMap!==i.lastEmissiveMap&&(i.globeMat.emissiveMap=n.orbitalEmissiveMap||null,i.globeMat.emissive.setHex(n.orbitalEmissiveMap?16777215:0),n.orbitalEmissiveMap||i.globeMat.emissive.set(n.color),i.globeMat.emissiveIntensity=n.orbitalEmissiveMap?1.15:.14,i.globeMat.needsUpdate=!0,i.lastEmissiveMap=n.orbitalEmissiveMap||null),n.cloudMap!==i.lastCloudMap&&(i.cloudMat.map=n.cloudMap||null,i.cloudMat.opacity=n.cloudMap?.36:0,i.cloudMesh.visible=!!n.cloudMap,i.cloudMat.needsUpdate=!0,i.lastCloudMap=n.cloudMap||null);const s=this.state===mn.PLANET_ZOOM&&this.selectedPlanetKey===n.key,a=this.hoveredNode?.planetKey===n.key;if(i.orbitMat.opacity=s?.85:a?.72:.34,i.selectRingMesh.visible=this.state===mn.SOLAR_SYSTEM&&a,i.moonRigs.forEach((r,l)=>{const c=n.moons[l];if(!c)return;const h=this._tmpVecA.copy(c.worldPos).sub(n.worldPos),u=h.length();u>1e-4?h.multiplyScalar(r.orbitChartR/u):h.set(r.orbitChartR,0,0),r.group.position.copy(h),r.group.rotation.y=t*.4}),i.stationRig&&e.crystalPalace){const r=this._tmpVecA.copy(e.crystalPalace.worldPos).sub(n.worldPos),l=r.length();l>1e-4?r.multiplyScalar(i.stationRig.orbitChartR/l):r.set(-i.stationRig.orbitChartR,1.5,0),i.stationRig.group.position.copy(r),i.stationRig.group.rotation.y=t*.55}}if(this.shipBeacon){const n=this._getShipChartPos(e);this.shipBeacon.group.position.copy(n),this.shipBeacon.diamond.rotation.y=t*1.4;const i=.88+Math.sin(t*4.5)*.25;this.shipBeacon.ring.scale.setScalar(i)}}_buildSolarNodes3D(e){const n=[{id:"sun",planetKey:"sun",key:"sun",label:"SOL CENTRAL",tagline:"Estrella central HDR · Iluminación del sistema",color:"#ffcc44",distKm:Math.max(0,Math.round(Math.max(0,e.shipPos.length()-e.sunWorldRadius)*19.35483870967742)),hitMesh:this.sunRig?.hitMesh||null,worldAnchor:new b(0,0,0),x:0,y:0,occluded:!1,descriptor:{type:"sun_orbit"}}];for(const i of e.planets){const s=this.planetRigs.get(i.key);s&&n.push({id:i.key,planetKey:i.key,key:i.key,planet:i,label:`${i.code} · ${i.shortName}`,shortName:i.shortName,tagline:i.tagline,color:i.color,accent:i.accent,distKm:i.distKm,hitMesh:s.l1HitMesh,worldAnchor:s.rootGroup.position.clone(),x:0,y:0,occluded:!1})}return n}_ensureL2PinPool(e){for(;this.l2PinPool.length<e;){const t=new Ut,n=this._trackDisposable(new Qt(.05,.05,.75,6)),i=this._trackDisposable(new dn({color:16777215})),s=new Ve(n,i);s.position.y=.375;const a=this._trackDisposable(new _a(.32,0)),r=this._trackDisposable(new dn({color:16777215})),l=new Ve(a,r);l.position.y=.85;const c=this._trackDisposable(new Xs(.36,.48,24)),h=this._trackDisposable(new dn({color:16777215,side:wt,transparent:!0,opacity:.82})),u=new Ve(c,h);u.rotation.x=Math.PI*.5,u.position.y=.06;const d=this._trackDisposable(new ln(.78,12,8)),f=new Ve(d,this._trackDisposable(ic()));f.position.y=.6,t.add(s,l,u,f),this.l2PinGroup.add(t),this.l2PinPool.push({group:t,stemMat:i,head:l,headMat:r,ringMat:h,hitMesh:f})}}_ensureL2OrbitRingPool(e){for(;this.l2OrbitRingPool.length<e;){const t=[];for(let a=0;a<96;a++){const r=a/96*Math.PI*2;t.push(new b(Math.cos(r),0,Math.sin(r)))}const n=this._trackDisposable(new At().setFromPoints(t)),i=this._trackDisposable(new qs({color:6214911,transparent:!0,opacity:.42,depthWrite:!1})),s=new Or(n,i);this.l2RingsGroup.add(s),this.l2OrbitRingPool.push({line:s,mat:i})}}_buildLevel2Nodes3D(e,t){if(t==="sun"){const v=Math.max(0,Math.round(Math.max(0,e.shipPos.length()-e.sunWorldRadius)*19.35483870967742));this._ensureL2PinPool(1),this._ensureL2OrbitRingPool(1);const m=this.l2OrbitRingPool[0];m.line.visible=!0,m.line.position.set(0,0,0),m.line.scale.setScalar(Hs*1.65),m.mat.color.set("#ffd24c");const p=this.l2PinPool[0];p.group.visible=!0,p.group.position.set(Hs*1.65,0,0),p.group.quaternion.identity(),p.stemMat.color.set("#ffd24c"),p.headMat.color.set("#ffd24c"),p.ringMat.color.set("#ffd24c");for(let _=1;_<this.l2PinPool.length;_++)this.l2PinPool[_].group.visible=!1;for(let _=1;_<this.l2OrbitRingPool.length;_++)this.l2OrbitRingPool[_].line.visible=!1;return[{id:"sun_orbit",label:"Órbita Panorámica del Sistema",title:"SOL CENTRAL // ÓRBITA DE OBSERVACIÓN",badge:"ESTRELLA PRINCIPAL",description:"Vista exterior segura frente al disco solar de plasma y las 5 órbitas keplerianas.",destTypeLabel:"Órbita Estelar",insertionAlt:"1.150.000 km",atmoGravity:"Corona Plasma · Radiación Extrema",distText:`${v.toLocaleString("es-ES")} km`,color:"#ffd24c",kind:"orbit",hitMesh:p.hitMesh,worldAnchor:p.group.position.clone(),x:0,y:0,occluded:!1,descriptor:{type:"sun_orbit"}}]}const n=e.planets.find(v=>v.key===t),i=this.planetRigs.get(t);if(!n||!i)return[];const s=[],a=i.rootGroup.position,r=i.pChartR,l=new b(0,1,0);let c=0,h=0;const u=r*1.52;this._ensureL2OrbitRingPool(1+i.moonRigs.length+(i.stationRig?1:0)),this._ensureL2PinPool(10);const d=this.l2OrbitRingPool[h++];d.line.visible=!0,d.line.position.copy(a),d.line.scale.setScalar(u),d.mat.color.set(n.color),d.mat.opacity=.56;const f=this.l2PinPool[c++];f.group.visible=!0;const g=new b(a.x+Math.cos(-.68)*u,a.y+.2,a.z+Math.sin(-.68)*u);if(f.group.position.copy(g),f.group.quaternion.identity(),f.stemMat.color.set(n.color),f.headMat.color.set(n.color),f.ringMat.color.set(n.color),s.push({id:`${n.key}_orbit`,label:"Órbita Baja",title:`${n.shortName} · ÓRBITA ESTACIONARIA`,badge:"ÓRBITA BAJA",description:n.tagline,destTypeLabel:"Órbita Planetaria",insertionAlt:`${Math.round(n.atmoTopAlt*1.15*.062).toLocaleString("es-ES")} km`,atmoGravity:`${n.atmoDesc} · ${n.gravity}`,distText:`${n.distKm.toLocaleString("es-ES")} km`,color:n.color,kind:"orbit",hitMesh:f.hitMesh,_pinObj:f,worldAnchor:g,x:0,y:0,occluded:!1,descriptor:{type:"planet_orbit",planetKey:n.key}}),n.landable){const v=i.spinGroup.quaternion,m=n.capLocalQuat||new ut,p=({id:_,label:y,title:x,badge:T,description:w,insertionAlt:E,color:A,localDir:M,descriptor:S})=>{const C=M.clone().normalize().applyQuaternion(m).applyQuaternion(v).normalize(),R=a.clone().addScaledVector(C,r*1.015),N=this.l2PinPool[c++];N.group.visible=!0,N.group.position.copy(R),N.group.quaternion.setFromUnitVectors(l,C),N.stemMat.color.set(A),N.headMat.color.set(A),N.ringMat.color.set(A),s.push({id:_,label:y,title:x,badge:T,description:w,destTypeLabel:"Descenso Atmosférico",insertionAlt:E,atmoGravity:`${n.atmoDesc} · ${n.gravity}`,distText:`${n.distKm.toLocaleString("es-ES")} km`,color:A,kind:"surface",surfaceNormal:C,hitMesh:N.hitMesh,_pinObj:N,worldAnchor:R,x:0,y:0,occluded:!1,descriptor:S})};if(n.key==="p1"){const _=[{landmarkId:"hometree",label:"Nación del Bosque · Árbol-Casa",short:"Bosque (Hometree)",badge:"NACIÓN DEL BOSQUE",desc:"Gran Continente Selvático continuo (45% del globo): árboles gigantes paraguas, secuoyas, manadas y ríos bioluminiscentes.",fallbackDir:new b(.15,.96,.22),color:"#44f0a8"},{landmarkId:"metkayina",label:"Nación del Agua · Metkayina",short:"Agua (Metkayina)",badge:"NACIÓN DEL AGUA · BUCEO",desc:"Océano y Archipiélago coralino: aldeas flotantes sobre balsas, laguna turquesa inmersiva, Tulkun, Ilu y arrecifes luminosos.",fallbackDir:new b(-.78,.16,.6),color:"#26e8ff"},{landmarkId:"ashland",label:"Nación de la Ceniza · Volcanes",short:"Ceniza (Mangkwan)",badge:"NACIÓN DE LA CENIZA",desc:"Península volcánica oscura tras la cordillera basáltica: 3 volcanes humeantes, fisuras de lava, árboles calcinados y hogueras.",fallbackDir:new b(.84,-.05,.54),color:"#ff6c34"},{landmarkId:"hallelujah",label:"Montañas Aleluya",short:"Aleluya",badge:"ZONA DE MONTAÑA",desc:"Islas rocosas flotantes entre cascadas, lianas luminosas y bandadas de Ikran y Toruk.",fallbackDir:new b(-.24,.86,-.45),color:"#7ef5c4"},{landmarkId:"souls",label:"Árbol de las Almas",short:"Árbol Almas",badge:"SANTUARIO",desc:"Cráter sagrado rodeado de arcos de piedra y filamentos luminosos de Eywa.",fallbackDir:new b(.28,.88,-.38),color:"#c978ff"}];for(const y of _){const x=n.pandoraLandmarks?.find(T=>T.id===y.landmarkId);p({id:`p1_surface_${y.landmarkId}`,label:y.short,title:y.label.toUpperCase(),badge:y.badge,description:y.desc,insertionAlt:"1.850 m s.n.m.",color:y.color,localDir:x?.capDir||y.fallbackDir,descriptor:{type:"planet_surface",planetKey:"p1",landmarkId:y.landmarkId}})}}else if(n.key==="p2"&&Array.isArray(n.nightCityLandmarks))for(const _ of n.nightCityLandmarks)p({id:`p2_surface_${_.id}`,label:_.shortName,title:_.name.toUpperCase(),badge:_.badge||"DISTRITO",description:_.description,insertionAlt:_.id==="city_center"?"450 m (Nivel Cañón)":"720 m (Vuelo Rasante)",color:_.color,localDir:_.capDir||new b(0,1,0),descriptor:{type:"planet_surface",planetKey:"p2",landmarkId:_.id}});else{const _={p2:{short:"Corpo Plaza (Superficie)",title:"NIGHT CITY // CAÑÓN CENTRAL",desc:"Descenso atravesando nubes hacia Corpo Plaza y los 7 distritos reales de Night City."},p3:{short:"Ciudadela Fortaleza",title:"PERUGIUS // CIUDADELA DEL VALLE",desc:"Planeo sobre valles boscosos hacia la fortaleza flotante y murallas doradas del mundo medieval."},p4:{short:"Distrito del Senado",title:"CORUSCANT // PLAZA DEL SENADO",desc:"Entrada atmosférica hacia la ecumenópolis global con anillos de luz dorada y tráfico orbital."}}[n.key];p({id:`${n.key}_surface`,label:_.short,title:_.title,badge:"ATERRIZAJE EN SUPERFICIE",description:_.desc,insertionAlt:n.key==="p2"?"450 m (Nivel Cañón)":"2.100 m s.n.m.",color:n.accent,localDir:new b(.32,.85,.42),descriptor:{type:"planet_surface",planetKey:n.key}})}}if(n.hasCrystalPalace&&e.crystalPalace&&i.stationRig){const v=Math.round(e.crystalPalace.distWorld*(n.kmScale/2976)),m=a.clone().add(i.stationRig.group.position),p=this.l2OrbitRingPool[h++];p.line.visible=!0,p.line.position.copy(a),p.line.scale.setScalar(i.stationRig.orbitChartR),p.mat.color.set("#ffae42"),p.mat.opacity=.48,s.push({id:"station_crystal_palace",label:"Crystal Palace",title:"ESTACIÓN ORBITAL CRYSTAL PALACE",badge:"ESTACIÓN ESPACIAL",description:"Plataforma orbital de lujo sobre Night City con 36 hangares iluminados y anillos rotatorios.",destTypeLabel:"Estación Orbital",insertionAlt:"Órbita Alta (320 km)",atmoGravity:"Gravedad Artificial · Vacío",distText:`${v.toLocaleString("es-ES")} km`,color:"#ffae42",kind:"station",hitMesh:i.stationRig.hitMesh,worldAnchor:m,x:0,y:0,occluded:!1,descriptor:{type:"station",stationId:"crystal_palace"}})}n.moons.forEach((v,m)=>{const p=i.moonRigs[m];if(!p)return;const _=this.l2OrbitRingPool[h++];_.line.visible=!0,_.line.position.copy(a),_.line.scale.setScalar(p.orbitChartR),_.mat.color.set("#9ec5ff"),_.mat.opacity=.34;const y=a.clone().add(p.group.position),x=Math.max(1,Math.round(Math.max(0,v.distWorld-v.moonRadius)*(n.kmScale/(620*4.8)))),T=Math.round(v.baseRadiusWorld*(n.kmScale/(620*4.8)));s.push({id:`${n.key}_moon_${m}`,label:v.name,title:v.name.toUpperCase(),badge:"SATÉLITE NATURAL",description:`Órbita lunar estacionaria alrededor de ${v.name} con seguimiento gravitatorio sincronizado.`,destTypeLabel:"Órbita Lunar",insertionAlt:`Órbita a ${T.toLocaleString("es-ES")} km`,atmoGravity:"Exosfera tenue · 0.18 G",distText:`${x.toLocaleString("es-ES")} km`,color:"#b8d8ff",kind:"moon",hitMesh:p.hitMesh,worldAnchor:y,x:0,y:0,occluded:!1,descriptor:{type:"moon",planetKey:n.key,moonIndex:v.index}})});for(let v=c;v<this.l2PinPool.length;v++)this.l2PinPool[v].group.visible=!1;for(let v=h;v<this.l2OrbitRingPool.length;v++)this.l2OrbitRingPool[v].line.visible=!1;for(let v=0;v<s.length;v++){const m=s[v];if(m._pinObj){const p=this.selectedNode?.id===m.id,_=this.hoveredNode?.id===m.id;m._pinObj.head.scale.setScalar(p?1.45:_?1.25:1)}}return s}_refreshLevel2NodeSelectionPreservingId(e,t){if(e){const n=this.currentLevel2Nodes.find(i=>i.id===e);n&&(this.selectedNode=n)}t&&(this.hoveredNode=this.currentLevel2Nodes.find(n=>n.id===t)||null)}_updateCamera(e){const t=this.state===mn.PLANET_ZOOM,n=this._tmpDesiredLook.set(0,0,0);if(t&&this.selectedPlanetKey&&this.selectedPlanetKey!=="sun"){const s=this.planetRigs.get(this.selectedPlanetKey);s&&n.copy(s.rootGroup.position)}const i=t?this.level2Orbit:this.solarOrbit;if(this._syncCameraFromSpherical(this._tmpDesiredCam,n,i,n),this.transitionActive){this.transitionElapsed=Math.min(this.zoomDuration,this.transitionElapsed+e);const s=this.transitionElapsed/Math.max(.01,this.zoomDuration),a=Ty(s);this.zoomProgress=t?a:1-a,this.curCamPos.lerpVectors(this.transitionFromCamPos,this._tmpDesiredCam,a),this.curLookAt.lerpVectors(this.transitionFromLookAt,this._tmpDesiredLook,a),s>=1&&(this.transitionActive=!1,this.zoomProgress=t?1:0)}else{const s=1-Math.exp(-12*Math.max(.001,e));this.curCamPos.lerp(this._tmpDesiredCam,s),this.curLookAt.lerp(this._tmpDesiredLook,s),this.zoomProgress=t?1:0}this.mapCamera.position.copy(this.curCamPos),this.mapCamera.lookAt(this.curLookAt),this.mapCamera.updateMatrixWorld()}_ensureLabelOverlayInit(){return!this.labelsEl||typeof document>"u"?!1:(this.svgEl||(this.svgEl=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svgEl.setAttribute("class","sm-leader-svg"),this.labelsEl.appendChild(this.svgEl)),this.tooltipEl||(this.tooltipEl=document.createElement("div"),this.tooltipEl.className="sm-hover-tooltip",this.tooltipEl.style.display="none",this.labelsEl.appendChild(this.tooltipEl)),!0)}_clearLabelDOM(){for(const e of this.labelEls.values())e.style.display="none";for(const e of this.lineEls.values())e.style.display="none";this.tooltipEl&&(this.tooltipEl.style.display="none")}_updateLabelsAndLeaderLines(e){const t=this.getVisibleNodes(),n=this.state===mn.PLANET_ZOOM,i=n&&this.selectedPlanetKey&&this.selectedPlanetKey!=="sun"?this.planetRigs.get(this.selectedPlanetKey):null,s=i?i.rootGroup.position:null,a=this._tmpVecA,r=this._tmpVecB,l=n&&s?s.clone().project(this.mapCamera):null,c=l?(l.x*.5+.5)*this.viewW:this.viewW*.5,h=l?(-l.y*.5+.5)*this.viewH:this.viewH*.5;for(const g of t){if(g.kind==="surface"&&g.surfaceNormal&&s){r.copy(this.mapCamera.position).sub(s).normalize();const v=g.surfaceNormal.dot(r);g.facingDot=v,g.occluded=v<.08}else g.facingDot=1,g.occluded=!1;a.copy(g.worldAnchor).project(this.mapCamera),(a.z<-1||a.z>1)&&(g.occluded=!0),g.x=(a.x*.5+.5)*this.viewW,g.y=(-a.y*.5+.5)*this.viewH}if(!this._ensureLabelOverlayInit())return;const u=new Set,d=(g,v,m,p,_,y,x,T="")=>{u.add(g);let w=this.labelEls.get(g);if(w||(w=document.createElement("div"),this.labelsEl.appendChild(w),this.labelEls.set(g,w)),w.className=`sm-label ${T}`.trim(),w.style.display="block",w.style.left=`${Math.round(_)}px`,w.style.top=`${Math.round(y)}px`,x&&(w.style.borderColor=x),w.textContent!==v&&(w.textContent=v),Math.hypot(_-m,y-p)>2){let E=this.lineEls.get(g);E||(E=document.createElementNS("http://www.w3.org/2000/svg","line"),E.setAttribute("stroke-width","1.1"),E.setAttribute("stroke-opacity","0.55"),this.svgEl.appendChild(E),this.lineEls.set(g,E)),E.style.display="block",E.setAttribute("x1",`${m.toFixed(1)}`),E.setAttribute("y1",`${p.toFixed(1)}`),E.setAttribute("x2",`${_.toFixed(1)}`),E.setAttribute("y2",`${(y-2).toFixed(1)}`),E.setAttribute("stroke",x||"#5ed4ff")}};for(const g of t){if(g.occluded||g.x<-80||g.x>this.viewW+80||g.y<-80||g.y>this.viewH+80)continue;const v=n&&this.selectedNode?.id===g.id,m=this.hoveredNode?.id===g.id;let p=g.x,_=g.y-18;if(n&&g.kind==="surface"){const x=g.x-c,T=g.y-h,w=Math.max(1,Math.hypot(x,T));p=g.x+x/w*26,_=g.y+T/w*26-6}const y=`${v?"selected":""} ${m?"hovered":""}`.trim();d(g.id,g.label,g.x,g.y,p,_,v?"#ffae42":g.color,y)}if(this.shipBeacon&&e&&(a.copy(this.shipBeacon.group.position).project(this.mapCamera),a.z>=-1&&a.z<=1)){const g=(a.x*.5+.5)*this.viewW,v=(-a.y*.5+.5)*this.viewH,m=e.isUnderwater?"[ TÚ · OCÉANO ]":e.mode==="SURFACE"?"[ TÚ · ATMÓSFERA ]":"[ TÚ ]";d("__self_beacon__",m,g,v,g,v,"#ffae42","self-beacon")}for(const[g,v]of this.labelEls.entries())u.has(g)||(v.style.display="none");for(const[g,v]of this.lineEls.entries())u.has(g)||(v.style.display="none");const f=this.hoveredNode;if(f&&!f.occluded&&!n){this.tooltipEl.style.display="block";const g=Math.min(this.viewW-275,Math.max(16,f.x+18)),v=Math.max(76,Math.min(this.viewH-125,f.y-18));this.tooltipEl.style.left=`${Math.round(g)}px`,this.tooltipEl.style.top=`${Math.round(v)}px`,this.tooltipEl.style.borderColor=f.color||"#ffae42",this.tooltipEl.innerHTML=`<h4>${f.label}</h4><div class="sm-ht-dist">DISTANCIA: ${Number(f.distKm||0).toLocaleString("es-ES")} KM · CLIC PARA ZOOM</div><p>${f.tagline||""}</p>`}else this.tooltipEl.style.display="none"}updateAndDraw(e=typeof performance<"u"?performance.now():0){if(!this.isOpen()||!this.sceneManager)return;const t=this.lastTimeMs?Math.min(.1,Math.max(.001,(e-this.lastTimeMs)/1e3)):.016;this.lastTimeMs=e;const n=e*.001,i=this.sceneManager.getStarChartState();if(this._ensureScene3D(i),!this.mapScene||!this.mapCamera)return;this._syncScenePositions(i,n);const s=this.state===mn.PLANET_ZOOM;if(this.l2RingsGroup&&(this.l2RingsGroup.visible=s),this.l2PinGroup&&(this.l2PinGroup.visible=s),s&&this.selectedPlanetKey){const a=this.selectedNode?.id||null,r=this.hoveredNode?.id||null;this.currentLevel2Nodes=this._buildLevel2Nodes3D(i,this.selectedPlanetKey),this._refreshLevel2NodeSelectionPreservingId(a,r)}else this.currentSolarNodes=this._buildSolarNodes3D(i);this._updateCamera(t),this._updateLabelsAndLeaderLines(i),this.renderer&&this.renderer.render(this.mapScene,this.mapCamera)}dispose(){this.close(),this.backBtnEl&&this._boundHandlers.onBackClick&&this.backBtnEl.removeEventListener("click",this._boundHandlers.onBackClick),this.closeBtnEl&&this._boundHandlers.onCloseClick&&this.closeBtnEl.removeEventListener("click",this._boundHandlers.onCloseClick),this.jumpBtnEl&&this._boundHandlers.onJumpClick&&this.jumpBtnEl.removeEventListener("click",this._boundHandlers.onJumpClick),this.canvas&&(this._boundHandlers.onMouseDown&&this.canvas.removeEventListener("mousedown",this._boundHandlers.onMouseDown),this._boundHandlers.onClick&&this.canvas.removeEventListener("click",this._boundHandlers.onClick),this._boundHandlers.onDblClick&&this.canvas.removeEventListener("dblclick",this._boundHandlers.onDblClick),this._boundHandlers.onWheel&&this.canvas.removeEventListener("wheel",this._boundHandlers.onWheel),this._boundHandlers.onContextMenu&&this.canvas.removeEventListener("contextmenu",this._boundHandlers.onContextMenu)),typeof window<"u"&&(this._boundHandlers.onMouseMove&&window.removeEventListener("mousemove",this._boundHandlers.onMouseMove),this._boundHandlers.onMouseUp&&window.removeEventListener("mouseup",this._boundHandlers.onMouseUp),this._boundHandlers.onResize&&window.removeEventListener("resize",this._boundHandlers.onResize),this._boundHandlers.onKeyDown&&window.removeEventListener("keydown",this._boundHandlers.onKeyDown));for(const e of this.disposables)e?.dispose?.();this.disposables=[],this.renderer&&(this.renderer.renderLists?.dispose?.(),this.renderer.dispose?.(),this.renderer=null),this.labelsEl&&(this.labelsEl.innerHTML=""),this.labelEls.clear(),this.lineEls.clear(),this.svgEl=null,this.tooltipEl=null,this.mapScene=null,this.mapCamera=null}}const Yf=document.getElementById("app-canvas"),Cd=document.getElementById("loading-screen"),Cr=document.getElementById("loading-status"),Pd=document.getElementById("loading-bar-fill"),sc=document.getElementById("hud-mode"),Rd=document.getElementById("hud-sector"),Dd=document.getElementById("hud-nearest"),Id=document.getElementById("hud-altitude"),Ld=document.getElementById("hud-time-btn"),Uo=document.getElementById("hud-time"),Pr=document.getElementById("pandora-landmarks-bar"),Nd=document.getElementById("hud-speed"),Ud=document.getElementById("hud-speed-unit"),Fd=document.getElementById("hud-speed-bar"),Od=document.getElementById("hud-mult"),oc=document.getElementById("hud-boost"),kd=document.getElementById("hud-coords"),Zo=new gh;Zo.background=new ne(198156);const qi=new Xn(60,window.innerWidth/window.innerHeight,.05,48e4);Zo.add(qi);const Ki=new Af({canvas:Yf,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});Ki.setSize(window.innerWidth,window.innerHeight);Ki.setPixelRatio(Math.min(window.devicePixelRatio,2));Ki.outputColorSpace=Xt;Ki.toneMapping=jr;Ki.toneMappingExposure=1.05;Ki.shadowMap.enabled=!0;Ki.shadowMap.type=Gd;function Ry(o,e){o.kernelRadius=6,o.minDistance=.001,o.maxDistance=.04,o.enabled=!1,o.ssaoMaterial.uniforms.uLogFar={value:Math.log2(e.far+1)};let t=o.ssaoMaterial.fragmentShader;t=t.replace("uniform float cameraFar;",`uniform float cameraFar;
		uniform float uLogFar;`).replace(/float getViewZ\([\s\S]*?\n\t\t\}/,`float getViewZ( const in float depth ) {
        float wVal = pow( 2.0, clamp( depth * uLogFar, 0.0, 22.0 ) );
        return -( wVal - 1.0 );
      }`).replace(/vec3 getViewPosition\([\s\S]*?\n\t\t\}/,`vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
        vec4 rayClip = vec4( screenPosition * 2.0 - 1.0, -1.0, 1.0 );
        vec4 rayView = cameraInverseProjectionMatrix * rayClip;
        vec3 viewRay = rayView.xyz / max( 1e-4, abs( rayView.w ) );
        return viewRay * ( -viewZ / max( 1e-4, -viewRay.z ) );
      }`).replace("if ( depth == 1.0 ) {",`float _vzRoot = getViewZ( depth );
			if ( depth >= 0.99999 || -_vzRoot > 1100.0 ) {`).replace("float viewZ = getViewZ( depth );","float viewZ = _vzRoot;").replace(`float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value`,`float realDepth = -getViewZ( getDepth( samplePointUv ) ) / 65.0;
					float sampleDepth = -samplePoint.z / 65.0;`).replace("gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );","gl_FragColor = vec4( vec3( 1.0 - occlusion * 0.42 ), 1.0 );"),o.ssaoMaterial.fragmentShader=t,o.ssaoMaterial.needsUpdate=!0,o.overrideVisibility=function(){const n=this.scene,i=this._visibilityCache;n.traverse(s=>{i.set(s,s.visible),(s.isPoints||s.isLine||s.userData?.skipSSAO||s.isMesh&&s.material&&!Array.isArray(s.material)&&s.material.transparent&&!s.isWater)&&(s.visible=!1)})}}const no=new dM(Ki),Dy=new fM(Zo,qi);no.addPass(Dy);const ll=new ws(Zo,qi,window.innerWidth,window.innerHeight,16);Ry(ll,qi);no.addPass(ll);const Lh=new Wo(new Oe(window.innerWidth,window.innerHeight),.42,.34,.96);no.addPass(Lh);const Nh=new Ff(r1);Nh.enabled=!1;no.addPass(Nh);const Iy=new vM;no.addPass(Iy);const jf=xM(8500,19e4);Zo.add(jf);const Kf=new _M(qi,420),Ss=new MM(qi,Yf),si=new Sy({scene:Zo,camera:qi,renderer:Ki,controls:Ss,starfield:jf,cockpitParticles:Kf,bloomPass:Lh,ssaoPass:ll,radialBlurPass:Nh,onStatusUpdate:o=>{if(sc){sc.textContent=o.modeText;const e=o.isUnderwater?"mode-sub":o.isSurface?"mode-atmo":"mode-orbit";sc.className=`hud-value ${e}`}if(Rd&&(Rd.textContent=o.sectorName),Dd&&(Dd.textContent=o.nearestText),Id&&(Id.textContent=o.altitudeText),Uo&&(Uo.textContent=`${o.timeScale}x · ${o.solarPhaseName}`,Uo.className=`hud-value ${o.solarPhaseName==="DÍA"?"phase-day":o.solarPhaseName==="ATARDECER"?"phase-dusk":o.solarPhaseName==="NOCHE"?"phase-night":""}`),Pr)if(o.pandoraLandmarks){Pr.classList.remove("hidden");for(const e of o.pandoraLandmarks){const t=Pr.querySelector(`small[data-dist="${e.id}"]`);t&&(t.textContent=`${e.distKm.toLocaleString("es-ES")} km`)}}else Pr.classList.add("hidden")}}),Zf=()=>{const o=si.cycleTimeScale();if(Uo){const e=Uo.textContent.split("·")[1]?.trim()||"ESPACIO";Uo.textContent=`${o}x · ${e}`}};Ld&&Ld.addEventListener("click",o=>{o.stopPropagation(),Zf()});const Yr=new Py({overlayEl:document.getElementById("star-map-overlay"),canvasEl:document.getElementById("star-map-canvas"),labelsEl:document.getElementById("star-map-labels"),backBtnEl:document.getElementById("star-map-back-btn"),closeBtnEl:document.getElementById("star-map-close-btn"),levelTagEl:document.getElementById("star-map-level-tag"),titleEl:document.getElementById("star-map-title"),dossierEl:document.getElementById("star-map-dossier"),dossierBadgeEl:document.getElementById("dossier-badge"),dossierTitleEl:document.getElementById("dossier-title"),dossierDescEl:document.getElementById("dossier-desc"),dossierTypeEl:document.getElementById("dossier-type"),dossierAltEl:document.getElementById("dossier-alt"),dossierAtmoEl:document.getElementById("dossier-atmo"),dossierDistEl:document.getElementById("dossier-dist"),jumpBtnEl:document.getElementById("star-map-jump-btn"),footerEl:document.getElementById("star-map-footer"),sceneManager:si,controls:Ss,onConfirmJump:o=>si.navigateToTarget(o)}),Ly=new wy({containerEl:document.getElementById("tactical-minimap"),canvasEl:document.getElementById("minimap-canvas"),scaleEl:document.getElementById("minimap-scale"),sceneManager:si,onOpenStarMap:()=>Yr.open()});document.querySelectorAll(".pandora-lm-btn").forEach(o=>{o.addEventListener("click",e=>{e.stopPropagation();const t=o.dataset.landmark;t&&si.navigateToPandoraLandmark(t)})});window.addEventListener("keydown",o=>{Yr.isOpen()||(["Digit1","Numpad1"].includes(o.code)&&si.navigateToTarget("1"),["Digit2","Numpad2"].includes(o.code)&&si.navigateToTarget("2"),["Digit3","Numpad3"].includes(o.code)&&si.navigateToTarget("3"),["Digit4","Numpad4"].includes(o.code)&&si.navigateToTarget("4"),["Digit5","Numpad5"].includes(o.code)&&si.navigateToTarget("5"),["Digit6","Numpad6"].includes(o.code)&&si.navigateToTarget("6"),o.code==="KeyT"&&!o.repeat&&Zf())});window.addEventListener("resize",()=>{const o=window.innerWidth,e=window.innerHeight;qi.aspect=o/e,qi.updateProjectionMatrix(),Ki.setSize(o,e),no.setSize(o,e),ll.setSize(o,e),Lh.resolution.set(o,e)});async function Ny(){try{await si.init((o,e)=>{Pd&&(Pd.style.width=`${o}%`),Cr&&(Cr.textContent=e)})}catch(o){console.error("Error inicializando simulador:",o),Cr&&(Cr.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{Cd&&Cd.classList.add("hidden")},300)}}const Bd=new Uf;function $f(){requestAnimationFrame($f);const o=Bd.getDelta();si.update(o),Ss.update(o),si.syncCameraPostFlight();const e=Ss.getCurrentSpeed(),t=Ss.getPulseRatio();Kf.update(o,e,t);const n=si.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(Nd&&(Nd.textContent=i),Ud&&(Ud.textContent=n?"km/s":"m/s"),Fd){const s=(n?1400:120)*Ss.speedMultiplier,a=Math.min(100,e/Math.max(1,s)*100);Fd.style.width=`${a}%`}if(Od&&(Od.textContent=`x${Ss.speedMultiplier.toFixed(1)}`),oc){const s=t>.1;oc.textContent=Ss.autopilot?"PILOTO AUTO":s?"MOTOR PULSE":"EN ESPERA",oc.className=s?"status-active":"status-standby"}if(kd){const s=qi.position;kd.textContent=`${s.x.toFixed(0)}, ${s.y.toFixed(0)}, ${s.z.toFixed(0)}`}Yr.isOpen()?Yr.updateAndDraw(performance.now()):Ly.update(Bd.elapsedTime),no.render()}Ny();$f();
