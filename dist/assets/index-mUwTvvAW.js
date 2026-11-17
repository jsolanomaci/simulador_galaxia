(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="170",nd=0,Ql=1,id=2,Xh=1,sd=2,pi=3,si=0,bn=1,$t=2,xi=0,Rs=1,_n=2,Jl=3,ec=4,od=5,ts=100,rd=101,ad=102,ld=103,cd=104,hd=200,ud=201,dd=202,fd=203,Ra=204,Ia=205,pd=206,md=207,gd=208,_d=209,xd=210,vd=211,yd=212,Md=213,Sd=214,La=0,Da=1,Na=2,Us=3,Ua=4,Fa=5,Oa=6,Ba=7,qh=0,bd=1,wd=2,ki=0,Yh=1,Kh=2,jh=3,El=4,Ed=5,Zh=6,$h=7,tc="attached",Ad="detached",Qh=300,Fs=301,Os=302,ka=303,za=304,Pr=306,zi=1e3,Oi=1001,br=1002,Rn=1003,Jh=1004,uo=1005,On=1006,mr=1007,gi=1008,Si=1009,eu=1010,tu=1011,yo=1012,Al=1013,ss=1014,$n=1015,vi=1016,Tl=1017,Cl=1018,Bs=1020,nu=35902,iu=1021,su=1022,Wn=1023,ou=1024,ru=1025,Is=1026,ks=1027,Pl=1028,Rl=1029,au=1030,Il=1031,Ll=1033,gr=33776,_r=33777,xr=33778,vr=33779,Ga=35840,Va=35841,Ha=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,Ka=37808,ja=37809,Za=37810,$a=37811,Qa=37812,Ja=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,ol=37819,rl=37820,al=37821,yr=36492,ll=36494,cl=36495,lu=36283,hl=36284,ul=36285,dl=36286,Mo=2300,So=2301,Br=2302,nc=2400,ic=2401,sc=2402,Td=2500,Cd=0,cu=1,fl=2,Pd=3200,Rd=3201,hu=0,Id=1,Fi="",Gt="srgb",wn="srgb-linear",Rr="linear",Wt="srgb",cs=7680,oc=519,Ld=512,Dd=513,Nd=514,uu=515,Ud=516,Fd=517,Od=518,Bd=519,pl=35044,rc="300 es",_i=2e3,wr=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ac=1234567;const mo=Math.PI/180,zs=180/Math.PI;function Qn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[o&255]+Mn[o>>8&255]+Mn[o>>16&255]+Mn[o>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function gn(o,e,t){return Math.max(e,Math.min(t,o))}function Dl(o,e){return(o%e+e)%e}function kd(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function zd(o,e,t){return o!==e?(t-o)/(e-o):0}function go(o,e,t){return(1-t)*o+t*e}function Gd(o,e,t,n){return go(o,e,1-Math.exp(-t*n))}function Vd(o,e=1){return e-Math.abs(Dl(o,e*2)-e)}function Hd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Wd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Xd(o,e){return o+Math.floor(Math.random()*(e-o+1))}function qd(o,e){return o+Math.random()*(e-o)}function Yd(o){return o*(.5-Math.random())}function Kd(o){o!==void 0&&(ac=o);let e=ac+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jd(o){return o*mo}function Zd(o){return o*zs}function $d(o){return(o&o-1)===0&&o!==0}function Qd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Jd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ef(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const X={DEG2RAD:mo,RAD2DEG:zs,generateUUID:Qn,clamp:gn,euclideanModulo:Dl,mapLinear:kd,inverseLerp:zd,lerp:go,damp:Gd,pingpong:Vd,smoothstep:Hd,smootherstep:Wd,randInt:Xd,randFloat:qd,randFloatSpread:Yd,seededRandom:Kd,degToRad:jd,radToDeg:Zd,isPowerOfTwo:$d,ceilPowerOfTwo:Qd,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:ef,normalize:Xt,denormalize:Zn};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(e,t,n,i,s,r,a,l,c){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c)}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],b=i[4],x=i[7],P=i[2],E=i[5],T=i[8];return s[0]=r*_+a*y+l*P,s[3]=r*m+a*b+l*E,s[6]=r*p+a*x+l*T,s[1]=c*_+h*y+u*P,s[4]=c*m+h*b+u*E,s[7]=c*p+h*x+u*T,s[2]=d*_+f*y+g*P,s[5]=d*m+f*b+g*E,s[8]=d*p+f*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*r)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new bt;function du(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tf(){const o=bo("canvas");return o.style.display="block",o}const lc={};function fo(o){o in lc||(lc[o]=!0,console.warn(o))}function nf(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function sf(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function of(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tt={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Wt&&(o.r=yi(o.r),o.g=yi(o.g),o.b=yi(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Wt&&(o.r=Ls(o.r),o.g=Ls(o.g),o.b=Ls(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fi?Rr:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function yi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ls(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const cc=[.64,.33,.3,.6,.15,.06],hc=[.2126,.7152,.0722],uc=[.3127,.329],dc=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fc=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Tt.define({[wn]:{primaries:cc,whitePoint:uc,transfer:Rr,toXYZ:dc,fromXYZ:fc,luminanceCoefficients:hc,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:cc,whitePoint:uc,transfer:Wt,toXYZ:dc,fromXYZ:fc,luminanceCoefficients:hc,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});let hs;class rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=bo("canvas")),hs.width=e.width,hs.height=e.height;const n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=yi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let af=0;class fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(zr(i[r].image)):s.push(zr(i[r]))}else s=zr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rf.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lf=0;class un extends Ys{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=Oi,i=Oi,s=On,r=gi,a=Wn,l=Si,c=un.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Qn(),this.name="",this.source=new fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Qh;un.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(f+1)/2,P=(p+1)/2,E=(h+d)/4,T=(u+_)/4,S=(g+m)/4;return b>x&&b>P?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=T/n):x>P?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=S/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=T/s,i=S/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cf extends Ys{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends cf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pu extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),E=Math.atan2(P,p*y);m=Math.sin(m*E)/P,a=Math.sin(a*E)/P}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,n=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),h=2*(a*t-s*i),u=2*(s*n-r*t);return this.x=t+l*c+r*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new M,pc=new mt;class wi{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,qn):qn.fromBufferAttribute(s,r),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Do.subVectors(this.max,Qs),us.subVectors(e.a,Qs),ds.subVectors(e.b,Qs),fs.subVectors(e.c,Qs),Ai.subVectors(ds,us),Ti.subVectors(fs,ds),Xi.subVectors(us,fs);let t=[0,-Ai.z,Ai.y,0,-Ti.z,Ti.y,0,-Xi.z,Xi.y,Ai.z,0,-Ai.x,Ti.z,0,-Ti.x,Xi.z,0,-Xi.x,-Ai.y,Ai.x,0,-Ti.y,Ti.x,0,-Xi.y,Xi.x,0];return!Vr(t,us,ds,fs,Do)||(t=[1,0,0,0,1,0,0,0,1],!Vr(t,us,ds,fs,Do))?!1:(No.crossVectors(Ai,Ti),t=[No.x,No.y,No.z],Vr(t,us,ds,fs,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new M,new M,new M,new M,new M,new M,new M,new M],qn=new M,Lo=new wi,us=new M,ds=new M,fs=new M,Ai=new M,Ti=new M,Xi=new M,Qs=new M,Do=new M,No=new M,qi=new M;function Vr(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){qi.fromArray(o,s);const a=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const uf=new wi,Js=new M,Hr=new M;class oi{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Hr)),this.expandByPoint(Js.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new M,Wr=new M,Uo=new M,Ci=new M,Xr=new M,Fo=new M,qr=new M;class Ir{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wr.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Wr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Uo),a=Ci.dot(this.direction),l=-Ci.dot(Uo),c=Ci.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wr).addScaledVector(Uo,d),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),i=ci.dot(ci)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,s){Xr.subVectors(t,e),Fo.subVectors(n,e),qr.crossVectors(Xr,Fo);let r=this.direction.dot(qr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(Fo.crossVectors(Ci,Fo));if(l<0)return null;const c=a*this.direction.dot(Xr.cross(Ci));if(c<0||l+c>r)return null;const h=-a*Ci.dot(qr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,r,a,l,c,h,u,d,f,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,s,r,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),r=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=_-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,n){const i=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Pi.crossVectors(n,Un),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Pi.crossVectors(n,Un)),Pi.normalize(),Oo.crossVectors(Un,Pi),i[0]=Pi.x,i[4]=Oo.x,i[8]=Un.x,i[1]=Pi.y,i[5]=Oo.y,i[9]=Un.y,i[2]=Pi.z,i[6]=Oo.z,i[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],x=n[11],P=n[15],E=i[0],T=i[4],S=i[8],v=i[12],w=i[1],A=i[5],F=i[9],I=i[13],G=i[2],z=i[6],O=i[10],L=i[14],N=i[3],Y=i[7],J=i[11],oe=i[15];return s[0]=r*E+a*w+l*G+c*N,s[4]=r*T+a*A+l*z+c*Y,s[8]=r*S+a*F+l*O+c*J,s[12]=r*v+a*I+l*L+c*oe,s[1]=h*E+u*w+d*G+f*N,s[5]=h*T+u*A+d*z+f*Y,s[9]=h*S+u*F+d*O+f*J,s[13]=h*v+u*I+d*L+f*oe,s[2]=g*E+_*w+m*G+p*N,s[6]=g*T+_*A+m*z+p*Y,s[10]=g*S+_*F+m*O+p*J,s[14]=g*v+_*I+m*L+p*oe,s[3]=y*E+b*w+x*G+P*N,s[7]=y*T+b*A+x*z+P*Y,s[11]=y*S+b*F+x*O+P*J,s[15]=y*v+b*I+x*L+P*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*r*u+n*r*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,b=g*d*c-h*m*c-g*l*f+r*m*f+h*l*p-r*d*p,x=h*_*c-g*u*c+g*a*f-r*_*f-h*a*p+r*u*p,P=g*u*l-h*_*l-g*a*d+r*_*d+h*a*m-r*u*m,E=t*y+n*b+i*x+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=b*T,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*p-t*l*p)*T,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*f+t*l*f)*T,e[8]=x*T,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*T,e[10]=(r*_*s-g*a*s+g*n*c-t*_*c-r*n*p+t*a*p)*T,e[11]=(h*a*s-r*u*s-h*n*c+t*u*c+r*n*f-t*a*f)*T,e[12]=P*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*a*i-r*_*i-g*n*l+t*_*l+r*n*m-t*a*m)*T,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,g=s*u,_=r*h,m=r*u,p=a*u,y=l*c,b=l*h,x=l*u,P=n.x,E=n.y,T=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+x)*P,i[2]=(g-b)*P,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+b)*T,i[9]=(m-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ps.set(i[0],i[1],i[2]).length();const r=ps.set(i[4],i[5],i[6]).length(),a=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);const c=1/s,h=1/r,u=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=_i){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===_i)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===wr)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=_i){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(r-s),d=(t+e)*c,f=(n+i)*h;let g,_;if(a===_i)g=(r+s)*u,_=-2*u;else if(a===wr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ps=new M,Yn=new rt,df=new M(0,0,0),ff=new M(1,1,1),Pi=new M,Oo=new M,Un=new M,mc=new rt,gc=new mt;class Xn{constructor(e=0,t=0,n=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pf=0;const _c=new M,ms=new mt,hi=new rt,Bo=new M,eo=new M,mf=new M,gf=new mt,xc=new M(1,0,0),vc=new M(0,1,0),yc=new M(0,0,1),Mc={type:"added"},_f={type:"removed"},gs={type:"childadded",child:null},Yr={type:"childremoved",child:null};class Ot extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new M,t=new Xn,n=new mt,i=new M(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new bt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(xc,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xc,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(eo,Bo,this.up):hi.lookAt(Bo,eo,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(hi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mc),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ot.DEFAULT_UP=new M(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new M,ui=new M,Kr=new M,di=new M,_s=new M,xs=new M,Sc=new M,jr=new M,Zr=new M,$r=new M,Qr=new Vt,Jr=new Vt,ea=new Vt;class Gn{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kn.subVectors(i,t),ui.subVectors(n,t),Kr.subVectors(e,t);const r=Kn.dot(Kn),a=Kn.dot(ui),l=Kn.dot(Kr),c=ui.dot(ui),h=ui.dot(Kr),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(r,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return Qr.setScalar(0),Jr.setScalar(0),ea.setScalar(0),Qr.fromBufferAttribute(e,t),Jr.fromBufferAttribute(e,n),ea.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Qr,s.x),r.addScaledVector(Jr,s.y),r.addScaledVector(ea,s.z),r}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),ui.subVectors(e,t),Kn.cross(ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Kn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;_s.subVectors(i,n),xs.subVectors(s,n),jr.subVectors(e,n);const l=_s.dot(jr),c=xs.dot(jr);if(l<=0&&c<=0)return t.copy(n);Zr.subVectors(e,i);const h=_s.dot(Zr),u=xs.dot(Zr);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(_s,r);$r.subVectors(e,s);const f=_s.dot($r),g=xs.dot($r);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(xs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sc.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Sc,a);const p=1/(m+_+d);return r=_*p,a=d*p,t.copy(n).addScaledVector(_s,r).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ko={h:0,s:0,l:0};function ta(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Tt.workingColorSpace){if(e=Dl(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ta(r,s,e+1/3),this.g=ta(r,s,e),this.b=ta(r,s,e-1/3)}return Tt.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Tt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(gn(Sn.r*255,0,255))*65536+Math.round(gn(Sn.g*255,0,255))*256+Math.round(gn(Sn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Sn.copy(this),t);const n=Sn.r,i=Sn.g,s=Sn.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Gt){Tt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,i=Sn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(ko);const n=go(Ri.h,ko.h,t),i=go(Ri.s,ko.s,t),s=go(Ri.l,ko.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new re;re.NAMES=gu;let xf=0;class ei extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Qn(),this.name="",this.blending=Rs,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ia,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class In extends ei{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new M,zo=new Ge;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}}class _u extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xu extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vf=0;const kn=new rt,na=new Ot,vs=new M,Fn=new wi,to=new wi,mn=new M;class Pt extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(du(e)?xu:_u)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new bt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Fn.min,to.min),Fn.expandByPoint(mn),mn.addVectors(Fn.max,to.max),Fn.expandByPoint(mn)):(Fn.expandByPoint(to.min),Fn.expandByPoint(to.max))}Fn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mn.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),mn.add(vs)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new M,l[S]=new M;const c=new M,h=new M,u=new M,d=new Ge,f=new Ge,g=new Ge,_=new M,m=new M;function p(S,v,w){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,w),d.fromBufferAttribute(s,S),f.fromBufferAttribute(s,v),g.fromBufferAttribute(s,w),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[S].add(_),a[v].add(_),a[w].add(_),l[S].add(m),l[v].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let S=0,v=y.length;S<v;++S){const w=y[S],A=w.start,F=w.count;for(let I=A,G=A+F;I<G;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const b=new M,x=new M,P=new M,E=new M;function T(S){P.fromBufferAttribute(i,S),E.copy(P);const v=a[S];b.copy(v),b.sub(P.multiplyScalar(P.dot(v))).normalize(),x.crossVectors(E,v);const A=x.dot(l[S])<0?-1:1;r.setXYZW(S,b.x,b.y,b.z,A)}for(let S=0,v=y.length;S<v;++S){const w=y[S],A=w.start,F=w.count;for(let I=A,G=A+F;I<G;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new M,s=new M,r=new M,a=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new rt,Yi=new Ir,Go=new oi,wc=new M,Vo=new M,Ho=new M,Wo=new M,ia=new M,Xo=new M,Ec=new M,qo=new M;class ht extends Ot{constructor(e=new Pt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Xo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ia.fromBufferAttribute(u,e),r?Xo.addScaledVector(ia,h):Xo.addScaledVector(ia.sub(t),h))}t.add(Xo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(Go.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Go,wc)===null||Yi.origin.distanceToSquared(wc)>(e.far-e.near)**2))&&(bc.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(bc),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,P=b;x<P;x+=3){const E=a.getX(x),T=a.getX(x+1),S=a.getX(x+2);i=Yo(this,p,e,n,c,h,u,E,T,S),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);i=Yo(this,r,e,n,c,h,u,y,b,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,P=b;x<P;x+=3){const E=x,T=x+1,S=x+2;i=Yo(this,p,e,n,c,h,u,E,T,S),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,x=m+2;i=Yo(this,r,e,n,c,h,u,y,b,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function yf(o,e,t,n,i,s,r,a){let l;if(e.side===bn?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===si,a),l===null)return null;qo.copy(a),qo.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(qo);return c<t.near||c>t.far?null:{distance:c,point:qo.clone(),object:o}}function Yo(o,e,t,n,i,s,r,a,l,c){o.getVertexPosition(a,Vo),o.getVertexPosition(l,Ho),o.getVertexPosition(c,Wo);const h=yf(o,e,t,n,Vo,Ho,Wo,Ec);if(h){const u=new M;Gn.getBarycoord(Ec,Vo,Ho,Wo,u),i&&(h.uv=Gn.getInterpolatedAttribute(i,a,l,c,u,new Ge)),s&&(h.uv1=Gn.getInterpolatedAttribute(s,a,l,c,u,new Ge)),r&&(h.normal=Gn.getInterpolatedAttribute(r,a,l,c,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new M,materialIndex:0};Gn.getNormal(Vo,Ho,Wo,d.normal),h.face=d,h.barycoord=u}return h}class nn extends Pt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function g(_,m,p,y,b,x,P,E,T,S,v){const w=x/T,A=P/S,F=x/2,I=P/2,G=E/2,z=T+1,O=S+1;let L=0,N=0;const Y=new M;for(let J=0;J<O;J++){const oe=J*A-I;for(let he=0;he<z;he++){const be=he*w-F;Y[_]=be*y,Y[m]=oe*b,Y[p]=G,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(he/T),u.push(1-J/S),L+=1}}for(let J=0;J<S;J++)for(let oe=0;oe<T;oe++){const he=d+oe+z*J,be=d+oe+z*(J+1),U=d+(oe+1)+z*(J+1),V=d+(oe+1)+z*J;l.push(he,be,V),l.push(be,U,V),N+=6}a.addGroup(f,N,v),f+=N,d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(o){const e={};for(let t=0;t<o.length;t++){const n=Gs(o[t]);for(const i in n)e[i]=n[i]}return e}function Mf(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function vu(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const wo={clone:Gs,merge:An};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends ei{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yu extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new M,Ac=new Ge,Tc=new Ge;class Tn extends yu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Ac,Tc),t.subVectors(Tc,Ac)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Ms=1;class wf extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tn(ys,Ms,e,t);i.layers=this.layers,this.add(i);const s=new Tn(ys,Ms,e,t);s.layers=this.layers,this.add(s);const r=new Tn(ys,Ms,e,t);r.layers=this.layers,this.add(r);const a=new Tn(ys,Ms,e,t);a.layers=this.layers,this.add(a);const l=new Tn(ys,Ms,e,t);l.layers=this.layers,this.add(l);const c=new Tn(ys,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mu extends un{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ef extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nn(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:xi});s.uniforms.tEquirect.value=t;const r=new ht(i,s),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=On),new wf(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const sa=new M,Af=new M,Tf=new bt;class Ji{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sa.subVectors(n,t).cross(Af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tf.getNormalMatrix(e),i=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new oi,Ko=new M;class Nl{constructor(e=new Ji,t=new Ji,n=new Ji,i=new Ji,s=new Ji,r=new Ji){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],b=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+r,d+h,m+g,x+y).normalize(),n[3].setComponents(l-r,d-h,m-g,x-y).normalize(),n[4].setComponents(l-a,d-u,m-_,x-b).normalize(),t===_i)n[5].setComponents(l+a,d+u,m+_,x+b).normalize();else if(t===wr)n[5].setComponents(a,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ko.x=i.normal.x>0?e.max.x:e.min.x,Ko.y=i.normal.y>0?e.max.y:e.min.y,Ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Su(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Cf(o){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(o.bindBuffer(c,a),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];o.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class ti extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-r;for(let b=0;b<c;b++){const x=b*u-s;g.push(x,-y,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const b=y+c*p,x=y+c*(p+1),P=y+1+c*(p+1),E=y+1+c*p;f.push(b,x,E),f.push(x,P,E)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
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
#endif`,Tp=`struct PhysicalMaterial {
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
}`,Cp=`
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,$0=`#define PHONG
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
}`,Q0=`#define STANDARD
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
}`,J0=`#define STANDARD
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
}`,em=`#define TOON
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
}`,tm=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,om=`uniform vec3 color;
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
}`,rm=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Pf,alphahash_pars_fragment:Rf,alphamap_fragment:If,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:Nf,aomap_fragment:Uf,aomap_pars_fragment:Ff,batching_pars_vertex:Of,batching_vertex:Bf,begin_vertex:kf,beginnormal_vertex:zf,bsdfs:Gf,iridescence_fragment:Vf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Yf,color_fragment:Kf,color_pars_fragment:jf,color_pars_vertex:Zf,color_vertex:$f,common:Qf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:ep,displacementmap_pars_vertex:tp,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:op,colorspace_pars_fragment:rp,envmap_fragment:ap,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:_p,lights_lambert_fragment:xp,lights_lambert_pars_fragment:vp,lights_pars_begin:yp,lights_toon_fragment:Sp,lights_toon_pars_fragment:bp,lights_phong_fragment:wp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Ap,lights_physical_pars_fragment:Tp,lights_fragment_begin:Cp,lights_fragment_maps:Pp,lights_fragment_end:Rp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Np,map_fragment:Up,map_pars_fragment:Fp,map_particle_fragment:Op,map_particle_pars_fragment:Bp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Gp,morphcolor_vertex:Vp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:qp,normal_fragment_maps:Yp,normal_pars_fragment:Kp,normal_pars_vertex:jp,normal_vertex:Zp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:e0,iridescence_pars_fragment:t0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:o0,dithering_fragment:r0,dithering_pars_fragment:a0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:_0,specularmap_fragment:x0,specularmap_pars_fragment:v0,tonemapping_fragment:y0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:b0,uv_pars_fragment:w0,uv_pars_vertex:E0,uv_vertex:A0,worldpos_vertex:T0,background_vert:C0,background_frag:P0,backgroundCube_vert:R0,backgroundCube_frag:I0,cube_vert:L0,cube_frag:D0,depth_vert:N0,depth_frag:U0,distanceRGBA_vert:F0,distanceRGBA_frag:O0,equirect_vert:B0,equirect_frag:k0,linedashed_vert:z0,linedashed_frag:G0,meshbasic_vert:V0,meshbasic_frag:H0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:K0,meshnormal_frag:j0,meshphong_vert:Z0,meshphong_frag:$0,meshphysical_vert:Q0,meshphysical_frag:J0,meshtoon_vert:em,meshtoon_frag:tm,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:om,sprite_vert:rm,sprite_frag:am},ze={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},ii={basic:{uniforms:An([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:An([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new re(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:An([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:An([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:An([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new re(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:An([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:An([ze.points,ze.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:An([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:An([ze.common,ze.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:An([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:An([ze.sprite,ze.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:An([ze.common,ze.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:An([ze.lights,ze.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ii.physical={uniforms:An([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const jo={r:0,b:0,g:0},ji=new Xn,lm=new rt;function cm(o,e,t,n,i,s,r){const a=new re(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function _(y){let b=!1;const x=g(y);x===null?p(a,l):x&&x.isColor&&(p(x,1),b=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(y,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Pr)?(h===void 0&&(h=new ht(new nn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Gs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ji.copy(b.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(ji)),h.material.toneMapped=Tt.getTransfer(x.colorSpace)!==Wt,(u!==x||d!==x.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ht(new ti(2,2),new an({name:"BackgroundMaterial",uniforms:Gs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(x.colorSpace)!==Wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(jo,vu(o)),n.buffers.color.setClear(jo.r,jo.g,jo.b,b,r)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function hm(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function a(w,A,F,I,G){let z=!1;const O=u(I,F,A);s!==O&&(s=O,c(s.object)),z=f(w,I,F,G),z&&g(w,I,F,G),G!==null&&e.update(G,o.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,x(w,A,F,I),G!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return o.createVertexArray()}function c(w){return o.bindVertexArray(w)}function h(w){return o.deleteVertexArray(w)}function u(w,A,F){const I=F.wireframe===!0;let G=n[w.id];G===void 0&&(G={},n[w.id]=G);let z=G[A.id];z===void 0&&(z={},G[A.id]=z);let O=z[I];return O===void 0&&(O=d(l()),z[I]=O),O}function d(w){const A=[],F=[],I=[];for(let G=0;G<t;G++)A[G]=0,F[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:I,object:w,attributes:{},index:null}}function f(w,A,F,I){const G=s.attributes,z=A.attributes;let O=0;const L=F.getAttributes();for(const N in L)if(L[N].location>=0){const J=G[N];let oe=z[N];if(oe===void 0&&(N==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),N==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function g(w,A,F,I){const G={},z=A.attributes;let O=0;const L=F.getAttributes();for(const N in L)if(L[N].location>=0){let J=z[N];J===void 0&&(N==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),N==="instanceColor"&&w.instanceColor&&(J=w.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),G[N]=oe,O++}s.attributes=G,s.attributesNum=O,s.index=I}function _(){const w=s.newAttributes;for(let A=0,F=w.length;A<F;A++)w[A]=0}function m(w){p(w,0)}function p(w,A){const F=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;F[w]=1,I[w]===0&&(o.enableVertexAttribArray(w),I[w]=1),G[w]!==A&&(o.vertexAttribDivisor(w,A),G[w]=A)}function y(){const w=s.newAttributes,A=s.enabledAttributes;for(let F=0,I=A.length;F<I;F++)A[F]!==w[F]&&(o.disableVertexAttribArray(F),A[F]=0)}function b(w,A,F,I,G,z,O){O===!0?o.vertexAttribIPointer(w,A,F,G,z):o.vertexAttribPointer(w,A,F,I,G,z)}function x(w,A,F,I){_();const G=I.attributes,z=F.getAttributes(),O=A.defaultAttributeValues;for(const L in z){const N=z[L];if(N.location>=0){let Y=G[L];if(Y===void 0&&(L==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),L==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),Y!==void 0){const J=Y.normalized,oe=Y.itemSize,he=e.get(Y);if(he===void 0)continue;const be=he.buffer,U=he.type,V=he.bytesPerElement,te=U===o.INT||U===o.UNSIGNED_INT||Y.gpuType===Al;if(Y.isInterleavedBufferAttribute){const se=Y.data,de=se.stride,fe=Y.offset;if(se.isInstancedInterleavedBuffer){for(let _e=0;_e<N.locationSize;_e++)p(N.location+_e,se.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let _e=0;_e<N.locationSize;_e++)m(N.location+_e);o.bindBuffer(o.ARRAY_BUFFER,be);for(let _e=0;_e<N.locationSize;_e++)b(N.location+_e,oe/N.locationSize,U,J,de*V,(fe+oe/N.locationSize*_e)*V,te)}else{if(Y.isInstancedBufferAttribute){for(let se=0;se<N.locationSize;se++)p(N.location+se,Y.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<N.locationSize;se++)m(N.location+se);o.bindBuffer(o.ARRAY_BUFFER,be);for(let se=0;se<N.locationSize;se++)b(N.location+se,oe/N.locationSize,U,J,oe*V,oe/N.locationSize*se*V,te)}}else if(O!==void 0){const J=O[L];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(N.location,J);break;case 3:o.vertexAttrib3fv(N.location,J);break;case 4:o.vertexAttrib4fv(N.location,J);break;default:o.vertexAttrib1fv(N.location,J)}}}}y()}function P(){S();for(const w in n){const A=n[w];for(const F in A){const I=A[F];for(const G in I)h(I[G].object),delete I[G];delete A[F]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const A=n[w.id];for(const F in A){const I=A[F];for(const G in I)h(I[G].object),delete I[G];delete A[F]}delete n[w.id]}function T(w){for(const A in n){const F=n[A];if(F[w.id]===void 0)continue;const I=F[w.id];for(const G in I)h(I[G].object),delete I[G];delete F[w.id]}}function S(){v(),r=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function um(o,e,t){let n;function i(c){n=c}function s(c,h){o.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,u){u!==0&&(o.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dm(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==Wn&&n.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const S=T===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Si&&n.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$n&&!S)}function l(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:P,maxSamples:E}}function fm(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Ji,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=o.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,b=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,b,f);for(let P=0;P!==b;++P)x[P]=t[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==_;++b,x+=4)r.copy(u[b]).applyMatrix4(y,a),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function pm(o){let e=new WeakMap;function t(r,a){return a===ka?r.mapping=Fs:a===za&&(r.mapping=Os),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ka||a===za)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ef(l.height);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Lr extends yu{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Cc=[.125,.215,.35,.446,.526,.582],ns=20,oa=new Lr,Pc=new re;let ra=null,aa=0,la=0,ca=!1;const es=(1+Math.sqrt(5))/2,Ss=1/es,Rc=[new M(-es,Ss,0),new M(es,Ss,0),new M(-Ss,0,es),new M(Ss,0,es),new M(0,es,-Ss),new M(0,es,Ss),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)];class Ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra,aa,la),this._renderer.xr.enabled=ca,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:vi,format:Wn,colorSpace:wn,depthBuffer:!1},i=Lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(s)),this._blurMaterial=gm(s,e,t)}return i}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,i){const a=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pc),h.toneMapping=ki,h.autoClear=!1;const f=new In({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new ht(new nn,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Pc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const b=this._cubeSize;Zo(i,y*b,p>2?b:0,b,b),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fs||e.mapping===Os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rc[(i-s-1)%Rc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ht(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ns-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ns;m>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let y=0;for(let T=0;T<ns;++T){const S=T/_,v=Math.exp(-S*S/2);p.push(v),T===0?y+=v:T<m&&(y+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const x=this._sizeLods[i],P=3*x*(i>b-Ps?i-b+Ps:0),E=4*(this._cubeSize-x);Zo(t,P,E,3*x,2*x),l.setRenderTarget(t),l.render(u,oa)}}function mm(o){const e=[],t=[],n=[];let i=o;const s=o-Ps+1+Cc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Ps?l=Cc[r-o+Ps-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,S=E>2?0:-1,v=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];y.set(v,_*g*E),b.set(d,m*g*E);const w=[E,E,E,E,E,E];x.set(w,p*g*E)}const P=new Pt;P.setAttribute("position",new St(y,_)),P.setAttribute("uv",new St(b,m)),P.setAttribute("faceIndex",new St(x,p)),e.push(P),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lc(o,e,t){const n=new Jn(o,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function gm(o,e,t){const n=new Float32Array(ns),i=new M(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Dc(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nc(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function _m(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ka||l===za,h=l===Fs||l===Os;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ic(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ic(o)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function xm(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vm(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],o.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let b=0,x=y.length;b<x;b+=3){const P=y[b+0],E=y[b+1],T=y[b+2];d.push(P,E,E,T,T,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){const P=b+0,E=b+1,T=b+2;d.push(P,E,E,T,T,P)}}else return;const m=new(du(d)?xu:_u)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ym(o,e,t){let n;function i(d){n=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,f){o.drawElements(n,f,s,d*r),t.update(f,n,1)}function c(d,f,g){g!==0&&(o.drawElementsInstanced(n,f,s,d*r,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mm(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sm(o,e,t){const n=new WeakMap,i=new Vt;function s(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*E*4*u),S=new pu(T,P,E,u);S.type=$n,S.needsUpdate=!0;const v=x*4;for(let A=0;A<u;A++){const F=p[A],I=y[A],G=b[A],z=P*E*4*A;for(let O=0;O<F.count;O++){const L=O*v;g===!0&&(i.fromBufferAttribute(F,O),T[z+L+0]=i.x,T[z+L+1]=i.y,T[z+L+2]=i.z,T[z+L+3]=0),_===!0&&(i.fromBufferAttribute(I,O),T[z+L+4]=i.x,T[z+L+5]=i.y,T[z+L+6]=i.z,T[z+L+7]=0),m===!0&&(i.fromBufferAttribute(G,O),T[z+L+8]=i.x,T[z+L+9]=i.y,T[z+L+10]=i.z,T[z+L+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new Ge(P,E)},n.set(a,d),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",_),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function bm(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class bu extends un{constructor(e,t,n,i,s,r,a,l,c,h=Is){if(h!==Is&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=ss),n===void 0&&h===ks&&(n=Bs),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wu=new un,Uc=new bu(1,1),Eu=new pu,Au=new hf,Tu=new Mu,Fc=[],Oc=[],Bc=new Float32Array(16),kc=new Float32Array(9),zc=new Float32Array(4);function Ks(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Fc[i];if(s===void 0&&(s=new Float32Array(i),Fc[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function dn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function fn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Dr(o,e){let t=Oc[e];t===void 0&&(t=new Int32Array(e),Oc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function wm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Em(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;o.uniform2fv(this.addr,e),fn(t,e)}}function Am(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;o.uniform3fv(this.addr,e),fn(t,e)}}function Tm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;o.uniform4fv(this.addr,e),fn(t,e)}}function Cm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;zc.set(n),o.uniformMatrix2fv(this.addr,!1,zc),fn(t,n)}}function Pm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;kc.set(n),o.uniformMatrix3fv(this.addr,!1,kc),fn(t,n)}}function Rm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Bc.set(n),o.uniformMatrix4fv(this.addr,!1,Bc),fn(t,n)}}function Im(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Lm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;o.uniform2iv(this.addr,e),fn(t,e)}}function Dm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;o.uniform3iv(this.addr,e),fn(t,e)}}function Nm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;o.uniform4iv(this.addr,e),fn(t,e)}}function Um(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Fm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;o.uniform2uiv(this.addr,e),fn(t,e)}}function Om(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;o.uniform3uiv(this.addr,e),fn(t,e)}}function Bm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;o.uniform4uiv(this.addr,e),fn(t,e)}}function km(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Uc.compareFunction=uu,s=Uc):s=wu,t.setTexture2D(e||s,i)}function zm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Au,i)}function Gm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tu,i)}function Vm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Eu,i)}function Hm(o){switch(o){case 5126:return wm;case 35664:return Em;case 35665:return Am;case 35666:return Tm;case 35674:return Cm;case 35675:return Pm;case 35676:return Rm;case 5124:case 35670:return Im;case 35667:case 35671:return Lm;case 35668:case 35672:return Dm;case 35669:case 35673:return Nm;case 5125:return Um;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Wm(o,e){o.uniform1fv(this.addr,e)}function Xm(o,e){const t=Ks(e,this.size,2);o.uniform2fv(this.addr,t)}function qm(o,e){const t=Ks(e,this.size,3);o.uniform3fv(this.addr,t)}function Ym(o,e){const t=Ks(e,this.size,4);o.uniform4fv(this.addr,t)}function Km(o,e){const t=Ks(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function jm(o,e){const t=Ks(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Zm(o,e){const t=Ks(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function $m(o,e){o.uniform1iv(this.addr,e)}function Qm(o,e){o.uniform2iv(this.addr,e)}function Jm(o,e){o.uniform3iv(this.addr,e)}function eg(o,e){o.uniform4iv(this.addr,e)}function tg(o,e){o.uniform1uiv(this.addr,e)}function ng(o,e){o.uniform2uiv(this.addr,e)}function ig(o,e){o.uniform3uiv(this.addr,e)}function sg(o,e){o.uniform4uiv(this.addr,e)}function og(o,e,t){const n=this.cache,i=e.length,s=Dr(t,i);dn(n,s)||(o.uniform1iv(this.addr,s),fn(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||wu,s[r])}function rg(o,e,t){const n=this.cache,i=e.length,s=Dr(t,i);dn(n,s)||(o.uniform1iv(this.addr,s),fn(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Au,s[r])}function ag(o,e,t){const n=this.cache,i=e.length,s=Dr(t,i);dn(n,s)||(o.uniform1iv(this.addr,s),fn(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Tu,s[r])}function lg(o,e,t){const n=this.cache,i=e.length,s=Dr(t,i);dn(n,s)||(o.uniform1iv(this.addr,s),fn(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Eu,s[r])}function cg(o){switch(o){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Km;case 35675:return jm;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Qm;case 35668:case 35672:return Jm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}class hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}}class ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cg(t.type)}}class dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Gc(o,e){o.seq.push(e),o.map[e.id]=e}function fg(o,e,t){const n=o.name,i=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),r=ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Gc(t,c===void 0?new hg(a,o,e):new ug(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new dg(a),Gc(t,u)),t=u}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);fg(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Vc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const pg=37297;let mg=0;function gg(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const Hc=new bt;function _g(o){Tt._getMatrix(Hc,Tt.workingColorSpace,o);const e=`mat3( ${Hc.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Rr:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Wc(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+gg(o.getShaderSource(e),r)}else return i}function xg(o,e){const t=_g(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vg(o,e){let t;switch(e){case Yh:t="Linear";break;case Kh:t="Reinhard";break;case jh:t="Cineon";break;case El:t="ACESFilmic";break;case Zh:t="AgX";break;case $h:t="Neutral";break;case Ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $o=new M;function yg(){Tt.getLuminanceCoefficients($o);const o=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function Sg(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bg(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function po(o){return o!==""}function Xc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(o){return o.replace(wg,Ag)}const Eg=new Map;function Ag(o,e){let t=wt[e];if(t===void 0){const n=Eg.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ml(t)}const Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(o){return o.replace(Tg,Cg)}function Cg(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Kc(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Pg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Rg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ig(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function Lg(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qh:e="ENVMAP_BLENDING_MULTIPLY";break;case bd:e="ENVMAP_BLENDING_MIX";break;case wd:e="ENVMAP_BLENDING_ADD";break}return e}function Dg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ng(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=Pg(t),c=Rg(t),h=Ig(t),u=Lg(t),d=Dg(t),f=Mg(t),g=Sg(s),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(po).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(po).join(`
`),p.length>0&&(p+=`
`)):(m=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?wt.tonemapping_pars_fragment:"",t.toneMapping!==ki?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,xg("linearToOutputTexel",t.outputColorSpace),yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),r=ml(r),r=Xc(r,t),r=qc(r,t),a=ml(a),a=Xc(a,t),a=qc(a,t),r=Yc(r),a=Yc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+r,x=y+p+a,P=Vc(i,i.VERTEX_SHADER,b),E=Vc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(A){if(o.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),I=i.getShaderInfoLog(P).trim(),G=i.getShaderInfoLog(E).trim();let z=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,P,E);else{const L=Wc(i,P,"vertex"),N=Wc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+L+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||G==="")&&(O=!1);O&&(A.diagnostics={runnable:z,programLog:F,vertexShader:{log:I,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(P),i.deleteShader(E),S=new Mr(i,_),v=bg(i,_)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,pg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=E,this}let Ug=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Og(e),t.set(e,n)),n}}class Og{constructor(e){this.id=Ug++,this.code=e,this.usedTimes=0}}function Bg(o,e,t,n,i,s,r){const a=new mu,l=new Fg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,w,A,F,I){const G=F.fog,z=I.geometry,O=v.isMeshStandardMaterial?F.environment:null,L=(v.isMeshStandardMaterial?t:e).get(v.envMap||O),N=L&&L.mapping===Pr?L.image.height:null,Y=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=J!==void 0?J.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let be,U,V,te;if(Y){const $=ii[Y];be=$.vertexShader,U=$.fragmentShader}else be=v.vertexShader,U=v.fragmentShader,l.update(v),V=l.getVertexShaderID(v),te=l.getFragmentShaderID(v);const se=o.getRenderTarget(),de=o.state.buffers.depth.getReversed(),fe=I.isInstancedMesh===!0,_e=I.isBatchedMesh===!0,Pe=!!v.map,ye=!!v.matcap,Se=!!L,W=!!v.aoMap,Je=!!v.lightMap,We=!!v.bumpMap,je=!!v.normalMap,Ee=!!v.displacementMap,nt=!!v.emissiveMap,Le=!!v.metalnessMap,D=!!v.roughnessMap,C=v.anisotropy>0,j=v.clearcoat>0,ue=v.dispersion>0,ce=v.iridescence>0,le=v.sheen>0,Fe=v.transmission>0,Ae=C&&!!v.anisotropyMap,De=j&&!!v.clearcoatMap,xt=j&&!!v.clearcoatNormalMap,me=j&&!!v.clearcoatRoughnessMap,Te=ce&&!!v.iridescenceMap,Xe=ce&&!!v.iridescenceThicknessMap,it=le&&!!v.sheenColorMap,He=le&&!!v.sheenRoughnessMap,_t=!!v.specularMap,lt=!!v.specularColorMap,At=!!v.specularIntensityMap,q=Fe&&!!v.transmissionMap,we=Fe&&!!v.thicknessMap,Z=!!v.gradientMap,ae=!!v.alphaMap,Ne=v.alphaTest>0,Ue=!!v.alphaHash,at=!!v.extensions;let ut=ki;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ut=o.toneMapping);const Rt={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:be,fragmentShader:U,defines:v.defines,customVertexShaderID:V,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:_e,batchingColor:_e&&I._colorsTexture!==null,instancing:fe,instancingColor:fe&&I.instanceColor!==null,instancingMorph:fe&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?o.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:wn,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:ye,envMap:Se,envMapMode:Se&&L.mapping,envMapCubeUVHeight:N,aoMap:W,lightMap:Je,bumpMap:We,normalMap:je,displacementMap:d&&Ee,emissiveMap:nt,normalMapObjectSpace:je&&v.normalMapType===Id,normalMapTangentSpace:je&&v.normalMapType===hu,metalnessMap:Le,roughnessMap:D,anisotropy:C,anisotropyMap:Ae,clearcoat:j,clearcoatMap:De,clearcoatNormalMap:xt,clearcoatRoughnessMap:me,dispersion:ue,iridescence:ce,iridescenceMap:Te,iridescenceThicknessMap:Xe,sheen:le,sheenColorMap:it,sheenRoughnessMap:He,specularMap:_t,specularColorMap:lt,specularIntensityMap:At,transmission:Fe,transmissionMap:q,thicknessMap:we,gradientMap:Z,opaque:v.transparent===!1&&v.blending===Rs&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ne,alphaHash:Ue,combine:v.combine,mapUv:Pe&&_(v.map.channel),aoMapUv:W&&_(v.aoMap.channel),lightMapUv:Je&&_(v.lightMap.channel),bumpMapUv:We&&_(v.bumpMap.channel),normalMapUv:je&&_(v.normalMap.channel),displacementMapUv:Ee&&_(v.displacementMap.channel),emissiveMapUv:nt&&_(v.emissiveMap.channel),metalnessMapUv:Le&&_(v.metalnessMap.channel),roughnessMapUv:D&&_(v.roughnessMap.channel),anisotropyMapUv:Ae&&_(v.anisotropyMap.channel),clearcoatMapUv:De&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:it&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(v.sheenRoughnessMap.channel),specularMapUv:_t&&_(v.specularMap.channel),specularColorMapUv:lt&&_(v.specularColorMap.channel),specularIntensityMapUv:At&&_(v.specularIntensityMap.channel),transmissionMapUv:q&&_(v.transmissionMap.channel),thicknessMapUv:we&&_(v.thicknessMap.channel),alphaMapUv:ae&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(je||C),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Pe||ae),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:de,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&A.length>0,shadowMapType:o.shadowMap.type,toneMapping:ut,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&Tt.getTransfer(v.map.colorSpace)===Wt,decodeVideoTextureEmissive:nt&&v.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(v.emissiveMap.colorSpace)===Wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$t,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:at&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&v.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)w.push(A),w.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(y(w,v),b(w,v),w.push(o.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const w=g[v.type];let A;if(w){const F=ii[w];A=wo.clone(F.uniforms)}else A=v.uniforms;return A}function P(v,w){let A;for(let F=0,I=h.length;F<I;F++){const G=h[F];if(G.cacheKey===w){A=G,++A.usedTimes;break}}return A===void 0&&(A=new Ng(o,w,v,s),h.push(A)),A}function E(v){if(--v.usedTimes===0){const w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function S(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:S}}function kg(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function zg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function jc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Zc(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,g,_,m){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||zg),n.length>1&&n.sort(d||jc),i.length>1&&i.sort(d||jc)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Gg(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new Zc,o.set(n,[r])):i>=s.length?(r=new Zc,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Vg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new re};break;case"SpotLight":t={position:new M,direction:new M,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new M,halfWidth:new M,halfHeight:new M};break}return o[e.id]=t,t}}}function Hg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Wg=0;function Xg(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function qg(o){const e=new Vg,t=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new M);const i=new M,s=new rt,r=new rt;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,b=0,x=0,P=0,E=0,T=0;c.sort(Xg);for(let v=0,w=c.length;v<w;v++){const A=c[v],F=A.color,I=A.intensity,G=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*I,u+=F.g*I,d+=F.b*I;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],I);T++}else if(A.isDirectionalLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const L=A.shadow,N=t.get(A);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=A.shadow.matrix,y++}n.directional[f]=O,f++}else if(A.isSpotLight){const O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(F).multiplyScalar(I),O.distance=G,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[_]=O;const L=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,L.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[_]=L.matrix,A.castShadow){const N=t.get(A);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=z,x++}_++}else if(A.isRectAreaLight){const O=e.get(A);O.color.copy(F).multiplyScalar(I),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=O,m++}else if(A.isPointLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){const L=A.shadow,N=t.get(A);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,N.shadowCameraNear=L.camera.near,N.shadowCameraFar=L.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=A.shadow.matrix,b++}n.point[g]=O,g++}else if(A.isHemisphereLight){const O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(I),O.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[p]=O,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const S=n.hash;(S.directionalLength!==f||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==y||S.numPointShadows!==b||S.numSpotShadows!==x||S.numSpotMaps!==P||S.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,S.directionalLength=f,S.pointLength=g,S.spotLength=_,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=y,S.numPointShadows=b,S.numSpotShadows=x,S.numSpotMaps=P,S.numLightProbes=T,n.version=Wg++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(b.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),r.identity(),s.copy(b.matrixWorld),s.premultiply(m),r.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function $c(o){const e=new qg(o),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function r(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Yg(o){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let a;return r===void 0?(a=new $c(o),e.set(i,[a])):s>=r.length?(a=new $c(o),r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Kg extends ei{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jg extends ei{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function Qg(o,e,t){let n=new Nl;const i=new Ge,s=new Ge,r=new Vt,a=new Kg({depthPacking:Rd}),l=new jg,c={},h=t.maxTextureSize,u={[si]:bn,[bn]:si,[$t]:$t},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Zg,fragmentShader:$g}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let p=this.type;this.render=function(E,T,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const v=o.getRenderTarget(),w=o.getActiveCubeFace(),A=o.getActiveMipmapLevel(),F=o.state;F.setBlending(xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=p!==pi&&this.type===pi,G=p===pi&&this.type!==pi;for(let z=0,O=E.length;z<O;z++){const L=E[z],N=L.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const Y=N.getFrameExtents();if(i.multiply(Y),s.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,N.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,N.mapSize.y=s.y)),N.map===null||I===!0||G===!0){const oe=this.type!==pi?{minFilter:Rn,magFilter:Rn}:{};N.map!==null&&N.map.dispose(),N.map=new Jn(i.x,i.y,oe),N.map.texture.name=L.name+".shadowMap",N.camera.updateProjectionMatrix()}o.setRenderTarget(N.map),o.clear();const J=N.getViewportCount();for(let oe=0;oe<J;oe++){const he=N.getViewport(oe);r.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),F.viewport(r),N.updateMatrices(L,oe),n=N.getFrustum(),x(T,S,N.camera,L,this.type)}N.isPointLightShadow!==!0&&this.type===pi&&y(N,S),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(v,w,A)};function y(E,T){const S=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,o.setRenderTarget(E.mapPass),o.clear(),o.renderBufferDirect(T,null,S,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,o.setRenderTarget(E.map),o.clear(),o.renderBufferDirect(T,null,S,f,_,null)}function b(E,T,S,v){let w=null;const A=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)w=A;else if(w=S.isPointLight===!0?l:a,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=w.uuid,I=T.uuid;let G=c[F];G===void 0&&(G={},c[F]=G);let z=G[I];z===void 0&&(z=w.clone(),G[I]=z,T.addEventListener("dispose",P)),w=z}if(w.visible=T.visible,w.wireframe=T.wireframe,v===pi?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=o.properties.get(w);F.light=S}return w}function x(E,T,S,v,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===pi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const I=e.update(E),G=E.material;if(Array.isArray(G)){const z=I.groups;for(let O=0,L=z.length;O<L;O++){const N=z[O],Y=G[N.materialIndex];if(Y&&Y.visible){const J=b(E,Y,v,w);E.onBeforeShadow(o,E,T,S,I,J,N),o.renderBufferDirect(S,null,I,J,E,N),E.onAfterShadow(o,E,T,S,I,J,N)}}}else if(G.visible){const z=b(E,G,v,w);E.onBeforeShadow(o,E,T,S,I,z,null),o.renderBufferDirect(S,null,I,z,E,null),E.onAfterShadow(o,E,T,S,I,z,null)}}const F=E.children;for(let I=0,G=F.length;I<G;I++)x(F[I],T,S,v,w)}function P(E){E.target.removeEventListener("dispose",P);for(const S in c){const v=c[S],w=E.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}const Jg={[La]:Da,[Na]:Oa,[Ua]:Ba,[Us]:Fa,[Da]:La,[Oa]:Na,[Ba]:Ua,[Fa]:Us};function e_(o,e){function t(){let q=!1;const we=new Vt;let Z=null;const ae=new Vt(0,0,0,0);return{setMask:function(Ne){Z!==Ne&&!q&&(o.colorMask(Ne,Ne,Ne,Ne),Z=Ne)},setLocked:function(Ne){q=Ne},setClear:function(Ne,Ue,at,ut,Rt){Rt===!0&&(Ne*=ut,Ue*=ut,at*=ut),we.set(Ne,Ue,at,ut),ae.equals(we)===!1&&(o.clearColor(Ne,Ue,at,ut),ae.copy(we))},reset:function(){q=!1,Z=null,ae.set(-1,0,0,0)}}}function n(){let q=!1,we=!1,Z=null,ae=null,Ne=null;return{setReversed:function(Ue){if(we!==Ue){const at=e.get("EXT_clip_control");we?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const ut=Ne;Ne=null,this.setClear(ut)}we=Ue},getReversed:function(){return we},setTest:function(Ue){Ue?se(o.DEPTH_TEST):de(o.DEPTH_TEST)},setMask:function(Ue){Z!==Ue&&!q&&(o.depthMask(Ue),Z=Ue)},setFunc:function(Ue){if(we&&(Ue=Jg[Ue]),ae!==Ue){switch(Ue){case La:o.depthFunc(o.NEVER);break;case Da:o.depthFunc(o.ALWAYS);break;case Na:o.depthFunc(o.LESS);break;case Us:o.depthFunc(o.LEQUAL);break;case Ua:o.depthFunc(o.EQUAL);break;case Fa:o.depthFunc(o.GEQUAL);break;case Oa:o.depthFunc(o.GREATER);break;case Ba:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ae=Ue}},setLocked:function(Ue){q=Ue},setClear:function(Ue){Ne!==Ue&&(we&&(Ue=1-Ue),o.clearDepth(Ue),Ne=Ue)},reset:function(){q=!1,Z=null,ae=null,Ne=null,we=!1}}}function i(){let q=!1,we=null,Z=null,ae=null,Ne=null,Ue=null,at=null,ut=null,Rt=null;return{setTest:function($){q||($?se(o.STENCIL_TEST):de(o.STENCIL_TEST))},setMask:function($){we!==$&&!q&&(o.stencilMask($),we=$)},setFunc:function($,Re,Be){(Z!==$||ae!==Re||Ne!==Be)&&(o.stencilFunc($,Re,Be),Z=$,ae=Re,Ne=Be)},setOp:function($,Re,Be){(Ue!==$||at!==Re||ut!==Be)&&(o.stencilOp($,Re,Be),Ue=$,at=Re,ut=Be)},setLocked:function($){q=$},setClear:function($){Rt!==$&&(o.clearStencil($),Rt=$)},reset:function(){q=!1,we=null,Z=null,ae=null,Ne=null,Ue=null,at=null,ut=null,Rt=null}}}const s=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,x=null,P=null,E=null,T=new re(0,0,0),S=0,v=!1,w=null,A=null,F=null,I=null,G=null;const z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,L=0;const N=o.getParameter(o.VERSION);N.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=L>=1):N.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=L>=2);let Y=null,J={};const oe=o.getParameter(o.SCISSOR_BOX),he=o.getParameter(o.VIEWPORT),be=new Vt().fromArray(oe),U=new Vt().fromArray(he);function V(q,we,Z,ae){const Ne=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(q,Ue),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let at=0;at<Z;at++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,ae,0,o.RGBA,o.UNSIGNED_BYTE,Ne):o.texImage2D(we+at,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ne);return Ue}const te={};te[o.TEXTURE_2D]=V(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=V(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=V(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=V(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),se(o.DEPTH_TEST),r.setFunc(Us),We(!1),je(Ql),se(o.CULL_FACE),W(xi);function se(q){h[q]!==!0&&(o.enable(q),h[q]=!0)}function de(q){h[q]!==!1&&(o.disable(q),h[q]=!1)}function fe(q,we){return u[q]!==we?(o.bindFramebuffer(q,we),u[q]=we,q===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=we),q===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=we),!0):!1}function _e(q,we){let Z=f,ae=!1;if(q){Z=d.get(we),Z===void 0&&(Z=[],d.set(we,Z));const Ne=q.textures;if(Z.length!==Ne.length||Z[0]!==o.COLOR_ATTACHMENT0){for(let Ue=0,at=Ne.length;Ue<at;Ue++)Z[Ue]=o.COLOR_ATTACHMENT0+Ue;Z.length=Ne.length,ae=!0}}else Z[0]!==o.BACK&&(Z[0]=o.BACK,ae=!0);ae&&o.drawBuffers(Z)}function Pe(q){return g!==q?(o.useProgram(q),g=q,!0):!1}const ye={[ts]:o.FUNC_ADD,[rd]:o.FUNC_SUBTRACT,[ad]:o.FUNC_REVERSE_SUBTRACT};ye[ld]=o.MIN,ye[cd]=o.MAX;const Se={[hd]:o.ZERO,[ud]:o.ONE,[dd]:o.SRC_COLOR,[Ra]:o.SRC_ALPHA,[xd]:o.SRC_ALPHA_SATURATE,[gd]:o.DST_COLOR,[pd]:o.DST_ALPHA,[fd]:o.ONE_MINUS_SRC_COLOR,[Ia]:o.ONE_MINUS_SRC_ALPHA,[_d]:o.ONE_MINUS_DST_COLOR,[md]:o.ONE_MINUS_DST_ALPHA,[vd]:o.CONSTANT_COLOR,[yd]:o.ONE_MINUS_CONSTANT_COLOR,[Md]:o.CONSTANT_ALPHA,[Sd]:o.ONE_MINUS_CONSTANT_ALPHA};function W(q,we,Z,ae,Ne,Ue,at,ut,Rt,$){if(q===xi){_===!0&&(de(o.BLEND),_=!1);return}if(_===!1&&(se(o.BLEND),_=!0),q!==od){if(q!==m||$!==v){if((p!==ts||x!==ts)&&(o.blendEquation(o.FUNC_ADD),p=ts,x=ts),$)switch(q){case Rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _n:o.blendFunc(o.ONE,o.ONE);break;case Jl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ec:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _n:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Jl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ec:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,b=null,P=null,E=null,T.set(0,0,0),S=0,m=q,v=$}return}Ne=Ne||we,Ue=Ue||Z,at=at||ae,(we!==p||Ne!==x)&&(o.blendEquationSeparate(ye[we],ye[Ne]),p=we,x=Ne),(Z!==y||ae!==b||Ue!==P||at!==E)&&(o.blendFuncSeparate(Se[Z],Se[ae],Se[Ue],Se[at]),y=Z,b=ae,P=Ue,E=at),(ut.equals(T)===!1||Rt!==S)&&(o.blendColor(ut.r,ut.g,ut.b,Rt),T.copy(ut),S=Rt),m=q,v=!1}function Je(q,we){q.side===$t?de(o.CULL_FACE):se(o.CULL_FACE);let Z=q.side===bn;we&&(Z=!Z),We(Z),q.blending===Rs&&q.transparent===!1?W(xi):W(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),s.setMask(q.colorWrite);const ae=q.stencilWrite;a.setTest(ae),ae&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),nt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?se(o.SAMPLE_ALPHA_TO_COVERAGE):de(o.SAMPLE_ALPHA_TO_COVERAGE)}function We(q){w!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),w=q)}function je(q){q!==nd?(se(o.CULL_FACE),q!==A&&(q===Ql?o.cullFace(o.BACK):q===id?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):de(o.CULL_FACE),A=q}function Ee(q){q!==F&&(O&&o.lineWidth(q),F=q)}function nt(q,we,Z){q?(se(o.POLYGON_OFFSET_FILL),(I!==we||G!==Z)&&(o.polygonOffset(we,Z),I=we,G=Z)):de(o.POLYGON_OFFSET_FILL)}function Le(q){q?se(o.SCISSOR_TEST):de(o.SCISSOR_TEST)}function D(q){q===void 0&&(q=o.TEXTURE0+z-1),Y!==q&&(o.activeTexture(q),Y=q)}function C(q,we,Z){Z===void 0&&(Y===null?Z=o.TEXTURE0+z-1:Z=Y);let ae=J[Z];ae===void 0&&(ae={type:void 0,texture:void 0},J[Z]=ae),(ae.type!==q||ae.texture!==we)&&(Y!==Z&&(o.activeTexture(Z),Y=Z),o.bindTexture(q,we||te[q]),ae.type=q,ae.texture=we)}function j(){const q=J[Y];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ue(){try{o.compressedTexImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(){try{o.compressedTexImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function le(){try{o.texSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Fe(){try{o.texSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function De(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{o.texStorage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{o.texStorage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(){try{o.texImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xe(){try{o.texImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(q){be.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),be.copy(q))}function He(q){U.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),U.copy(q))}function _t(q,we){let Z=c.get(we);Z===void 0&&(Z=new WeakMap,c.set(we,Z));let ae=Z.get(q);ae===void 0&&(ae=o.getUniformBlockIndex(we,q.name),Z.set(q,ae))}function lt(q,we){const ae=c.get(we).get(q);l.get(we)!==ae&&(o.uniformBlockBinding(we,ae,q.__bindingPointIndex),l.set(we,ae))}function At(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},Y=null,J={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,x=null,P=null,E=null,T=new re(0,0,0),S=0,v=!1,w=null,A=null,F=null,I=null,G=null,be.set(0,0,o.canvas.width,o.canvas.height),U.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:se,disable:de,bindFramebuffer:fe,drawBuffers:_e,useProgram:Pe,setBlending:W,setMaterial:Je,setFlipSided:We,setCullFace:je,setLineWidth:Ee,setPolygonOffset:nt,setScissorTest:Le,activeTexture:D,bindTexture:C,unbindTexture:j,compressedTexImage2D:ue,compressedTexImage3D:ce,texImage2D:Te,texImage3D:Xe,updateUBOMapping:_t,uniformBlockBinding:lt,texStorage2D:xt,texStorage3D:me,texSubImage2D:le,texSubImage3D:Fe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:De,scissor:it,viewport:He,reset:At}}function Qc(o,e,t,n){const i=t_(n);switch(t){case iu:return o*e;case ou:return o*e;case ru:return o*e*2;case Pl:return o*e/i.components*i.byteLength;case Rl:return o*e/i.components*i.byteLength;case au:return o*e*2/i.components*i.byteLength;case Il:return o*e*2/i.components*i.byteLength;case su:return o*e*3/i.components*i.byteLength;case Wn:return o*e*4/i.components*i.byteLength;case Ll:return o*e*4/i.components*i.byteLength;case gr:case _r:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xr:case vr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Va:case Wa:return Math.max(o,16)*Math.max(e,8)/4;case Ga:case Ha:return Math.max(o,8)*Math.max(e,8)/2;case Xa:case qa:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ya:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case rl:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yr:case ll:case cl:return Math.ceil(o/4)*Math.ceil(e/4)*16;case lu:case hl:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ul:case dl:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t_(o){switch(o){case Si:case eu:return{byteLength:1,components:1};case yo:case tu:case vi:return{byteLength:2,components:1};case Tl:case Cl:return{byteLength:2,components:4};case ss:case Al:case $n:return{byteLength:4,components:1};case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function n_(o,e,t,n,i,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,C){return f?new OffscreenCanvas(D,C):bo("canvas")}function _(D,C,j){let ue=1;const ce=Le(D);if((ce.width>j||ce.height>j)&&(ue=j/Math.max(ce.width,ce.height)),ue<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const le=Math.floor(ue*ce.width),Fe=Math.floor(ue*ce.height);u===void 0&&(u=g(le,Fe));const Ae=C?g(le,Fe):u;return Ae.width=le,Ae.height=Fe,Ae.getContext("2d").drawImage(D,0,0,le,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+le+"x"+Fe+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){o.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(D,C,j,ue,ce=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let le=C;if(C===o.RED&&(j===o.FLOAT&&(le=o.R32F),j===o.HALF_FLOAT&&(le=o.R16F),j===o.UNSIGNED_BYTE&&(le=o.R8)),C===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(le=o.R8UI),j===o.UNSIGNED_SHORT&&(le=o.R16UI),j===o.UNSIGNED_INT&&(le=o.R32UI),j===o.BYTE&&(le=o.R8I),j===o.SHORT&&(le=o.R16I),j===o.INT&&(le=o.R32I)),C===o.RG&&(j===o.FLOAT&&(le=o.RG32F),j===o.HALF_FLOAT&&(le=o.RG16F),j===o.UNSIGNED_BYTE&&(le=o.RG8)),C===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(le=o.RG8UI),j===o.UNSIGNED_SHORT&&(le=o.RG16UI),j===o.UNSIGNED_INT&&(le=o.RG32UI),j===o.BYTE&&(le=o.RG8I),j===o.SHORT&&(le=o.RG16I),j===o.INT&&(le=o.RG32I)),C===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(le=o.RGB8UI),j===o.UNSIGNED_SHORT&&(le=o.RGB16UI),j===o.UNSIGNED_INT&&(le=o.RGB32UI),j===o.BYTE&&(le=o.RGB8I),j===o.SHORT&&(le=o.RGB16I),j===o.INT&&(le=o.RGB32I)),C===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(le=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(le=o.RGBA16UI),j===o.UNSIGNED_INT&&(le=o.RGBA32UI),j===o.BYTE&&(le=o.RGBA8I),j===o.SHORT&&(le=o.RGBA16I),j===o.INT&&(le=o.RGBA32I)),C===o.RGB&&j===o.UNSIGNED_INT_5_9_9_9_REV&&(le=o.RGB9_E5),C===o.RGBA){const Fe=ce?Rr:Tt.getTransfer(ue);j===o.FLOAT&&(le=o.RGBA32F),j===o.HALF_FLOAT&&(le=o.RGBA16F),j===o.UNSIGNED_BYTE&&(le=Fe===Wt?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(le=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(le=o.RGB5_A1)}return(le===o.R16F||le===o.R32F||le===o.RG16F||le===o.RG32F||le===o.RGBA16F||le===o.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(D,C){let j;return D?C===null||C===ss||C===Bs?j=o.DEPTH24_STENCIL8:C===$n?j=o.DEPTH32F_STENCIL8:C===yo&&(j=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ss||C===Bs?j=o.DEPTH_COMPONENT24:C===$n?j=o.DEPTH_COMPONENT32F:C===yo&&(j=o.DEPTH_COMPONENT16),j}function P(D,C){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==On?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function E(D){const C=D.target;C.removeEventListener("dispose",E),S(C),C.isVideoTexture&&h.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),w(C)}function S(D){const C=n.get(D);if(C.__webglInit===void 0)return;const j=D.source,ue=d.get(j);if(ue){const ce=ue[C.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&v(D),Object.keys(ue).length===0&&d.delete(j)}n.remove(D)}function v(D){const C=n.get(D);o.deleteTexture(C.__webglTexture);const j=D.source,ue=d.get(j);delete ue[C.__cacheKey],r.memory.textures--}function w(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(C.__webglFramebuffer[ue]))for(let ce=0;ce<C.__webglFramebuffer[ue].length;ce++)o.deleteFramebuffer(C.__webglFramebuffer[ue][ce]);else o.deleteFramebuffer(C.__webglFramebuffer[ue]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[ue])}else{if(Array.isArray(C.__webglFramebuffer))for(let ue=0;ue<C.__webglFramebuffer.length;ue++)o.deleteFramebuffer(C.__webglFramebuffer[ue]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ue=0;ue<C.__webglColorRenderbuffer.length;ue++)C.__webglColorRenderbuffer[ue]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[ue]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const j=D.textures;for(let ue=0,ce=j.length;ue<ce;ue++){const le=n.get(j[ue]);le.__webglTexture&&(o.deleteTexture(le.__webglTexture),r.memory.textures--),n.remove(j[ue])}n.remove(D)}let A=0;function F(){A=0}function I(){const D=A;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),A+=1,D}function G(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function z(D,C){const j=n.get(D);if(D.isVideoTexture&&Ee(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(j,D,C);return}}t.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+C)}function O(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){U(j,D,C);return}t.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+C)}function L(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){U(j,D,C);return}t.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+C)}function N(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){V(j,D,C);return}t.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+C)}const Y={[zi]:o.REPEAT,[Oi]:o.CLAMP_TO_EDGE,[br]:o.MIRRORED_REPEAT},J={[Rn]:o.NEAREST,[Jh]:o.NEAREST_MIPMAP_NEAREST,[uo]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[mr]:o.LINEAR_MIPMAP_NEAREST,[gi]:o.LINEAR_MIPMAP_LINEAR},oe={[Ld]:o.NEVER,[Bd]:o.ALWAYS,[Dd]:o.LESS,[uu]:o.LEQUAL,[Nd]:o.EQUAL,[Od]:o.GEQUAL,[Ud]:o.GREATER,[Fd]:o.NOTEQUAL};function he(D,C){if(C.type===$n&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===On||C.magFilter===mr||C.magFilter===uo||C.magFilter===gi||C.minFilter===On||C.minFilter===mr||C.minFilter===uo||C.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Y[C.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Y[C.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Y[C.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,J[C.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,J[C.minFilter]),C.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,oe[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Rn||C.minFilter!==uo&&C.minFilter!==gi||C.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function be(D,C){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",E));const ue=C.source;let ce=d.get(ue);ce===void 0&&(ce={},d.set(ue,ce));const le=G(C);if(le!==D.__cacheKey){ce[le]===void 0&&(ce[le]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,j=!0),ce[le].usedTimes++;const Fe=ce[D.__cacheKey];Fe!==void 0&&(ce[D.__cacheKey].usedTimes--,Fe.usedTimes===0&&v(C)),D.__cacheKey=le,D.__webglTexture=ce[le].texture}return j}function U(D,C,j){let ue=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ue=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ue=o.TEXTURE_3D);const ce=be(D,C),le=C.source;t.bindTexture(ue,D.__webglTexture,o.TEXTURE0+j);const Fe=n.get(le);if(le.version!==Fe.__version||ce===!0){t.activeTexture(o.TEXTURE0+j);const Ae=Tt.getPrimaries(Tt.workingColorSpace),De=C.colorSpace===Fi?null:Tt.getPrimaries(C.colorSpace),xt=C.colorSpace===Fi||Ae===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let me=_(C.image,!1,i.maxTextureSize);me=nt(C,me);const Te=s.convert(C.format,C.colorSpace),Xe=s.convert(C.type);let it=b(C.internalFormat,Te,Xe,C.colorSpace,C.isVideoTexture);he(ue,C);let He;const _t=C.mipmaps,lt=C.isVideoTexture!==!0,At=Fe.__version===void 0||ce===!0,q=le.dataReady,we=P(C,me);if(C.isDepthTexture)it=x(C.format===ks,C.type),At&&(lt?t.texStorage2D(o.TEXTURE_2D,1,it,me.width,me.height):t.texImage2D(o.TEXTURE_2D,0,it,me.width,me.height,0,Te,Xe,null));else if(C.isDataTexture)if(_t.length>0){lt&&At&&t.texStorage2D(o.TEXTURE_2D,we,it,_t[0].width,_t[0].height);for(let Z=0,ae=_t.length;Z<ae;Z++)He=_t[Z],lt?q&&t.texSubImage2D(o.TEXTURE_2D,Z,0,0,He.width,He.height,Te,Xe,He.data):t.texImage2D(o.TEXTURE_2D,Z,it,He.width,He.height,0,Te,Xe,He.data);C.generateMipmaps=!1}else lt?(At&&t.texStorage2D(o.TEXTURE_2D,we,it,me.width,me.height),q&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,me.width,me.height,Te,Xe,me.data)):t.texImage2D(o.TEXTURE_2D,0,it,me.width,me.height,0,Te,Xe,me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){lt&&At&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,it,_t[0].width,_t[0].height,me.depth);for(let Z=0,ae=_t.length;Z<ae;Z++)if(He=_t[Z],C.format!==Wn)if(Te!==null)if(lt){if(q)if(C.layerUpdates.size>0){const Ne=Qc(He.width,He.height,C.format,C.type);for(const Ue of C.layerUpdates){const at=He.data.subarray(Ue*Ne/He.data.BYTES_PER_ELEMENT,(Ue+1)*Ne/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Z,0,0,Ue,He.width,He.height,1,Te,at)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Z,0,0,0,He.width,He.height,me.depth,Te,He.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Z,it,He.width,He.height,me.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?q&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Z,0,0,0,He.width,He.height,me.depth,Te,Xe,He.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Z,it,He.width,He.height,me.depth,0,Te,Xe,He.data)}else{lt&&At&&t.texStorage2D(o.TEXTURE_2D,we,it,_t[0].width,_t[0].height);for(let Z=0,ae=_t.length;Z<ae;Z++)He=_t[Z],C.format!==Wn?Te!==null?lt?q&&t.compressedTexSubImage2D(o.TEXTURE_2D,Z,0,0,He.width,He.height,Te,He.data):t.compressedTexImage2D(o.TEXTURE_2D,Z,it,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?q&&t.texSubImage2D(o.TEXTURE_2D,Z,0,0,He.width,He.height,Te,Xe,He.data):t.texImage2D(o.TEXTURE_2D,Z,it,He.width,He.height,0,Te,Xe,He.data)}else if(C.isDataArrayTexture)if(lt){if(At&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,it,me.width,me.height,me.depth),q)if(C.layerUpdates.size>0){const Z=Qc(me.width,me.height,C.format,C.type);for(const ae of C.layerUpdates){const Ne=me.data.subarray(ae*Z/me.data.BYTES_PER_ELEMENT,(ae+1)*Z/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ae,me.width,me.height,1,Te,Xe,Ne)}C.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Te,Xe,me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,it,me.width,me.height,me.depth,0,Te,Xe,me.data);else if(C.isData3DTexture)lt?(At&&t.texStorage3D(o.TEXTURE_3D,we,it,me.width,me.height,me.depth),q&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Te,Xe,me.data)):t.texImage3D(o.TEXTURE_3D,0,it,me.width,me.height,me.depth,0,Te,Xe,me.data);else if(C.isFramebufferTexture){if(At)if(lt)t.texStorage2D(o.TEXTURE_2D,we,it,me.width,me.height);else{let Z=me.width,ae=me.height;for(let Ne=0;Ne<we;Ne++)t.texImage2D(o.TEXTURE_2D,Ne,it,Z,ae,0,Te,Xe,null),Z>>=1,ae>>=1}}else if(_t.length>0){if(lt&&At){const Z=Le(_t[0]);t.texStorage2D(o.TEXTURE_2D,we,it,Z.width,Z.height)}for(let Z=0,ae=_t.length;Z<ae;Z++)He=_t[Z],lt?q&&t.texSubImage2D(o.TEXTURE_2D,Z,0,0,Te,Xe,He):t.texImage2D(o.TEXTURE_2D,Z,it,Te,Xe,He);C.generateMipmaps=!1}else if(lt){if(At){const Z=Le(me);t.texStorage2D(o.TEXTURE_2D,we,it,Z.width,Z.height)}q&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,Xe,me)}else t.texImage2D(o.TEXTURE_2D,0,it,Te,Xe,me);m(C)&&p(ue),Fe.__version=le.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function V(D,C,j){if(C.image.length!==6)return;const ue=be(D,C),ce=C.source;t.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+j);const le=n.get(ce);if(ce.version!==le.__version||ue===!0){t.activeTexture(o.TEXTURE0+j);const Fe=Tt.getPrimaries(Tt.workingColorSpace),Ae=C.colorSpace===Fi?null:Tt.getPrimaries(C.colorSpace),De=C.colorSpace===Fi||Fe===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const xt=C.isCompressedTexture||C.image[0].isCompressedTexture,me=C.image[0]&&C.image[0].isDataTexture,Te=[];for(let ae=0;ae<6;ae++)!xt&&!me?Te[ae]=_(C.image[ae],!0,i.maxCubemapSize):Te[ae]=me?C.image[ae].image:C.image[ae],Te[ae]=nt(C,Te[ae]);const Xe=Te[0],it=s.convert(C.format,C.colorSpace),He=s.convert(C.type),_t=b(C.internalFormat,it,He,C.colorSpace),lt=C.isVideoTexture!==!0,At=le.__version===void 0||ue===!0,q=ce.dataReady;let we=P(C,Xe);he(o.TEXTURE_CUBE_MAP,C);let Z;if(xt){lt&&At&&t.texStorage2D(o.TEXTURE_CUBE_MAP,we,_t,Xe.width,Xe.height);for(let ae=0;ae<6;ae++){Z=Te[ae].mipmaps;for(let Ne=0;Ne<Z.length;Ne++){const Ue=Z[Ne];C.format!==Wn?it!==null?lt?q&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Ue.width,Ue.height,it,Ue.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,_t,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Ue.width,Ue.height,it,He,Ue.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,_t,Ue.width,Ue.height,0,it,He,Ue.data)}}}else{if(Z=C.mipmaps,lt&&At){Z.length>0&&we++;const ae=Le(Te[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,we,_t,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(me){lt?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Te[ae].width,Te[ae].height,it,He,Te[ae].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_t,Te[ae].width,Te[ae].height,0,it,He,Te[ae].data);for(let Ne=0;Ne<Z.length;Ne++){const at=Z[Ne].image[ae].image;lt?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,at.width,at.height,it,He,at.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,_t,at.width,at.height,0,it,He,at.data)}}else{lt?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,it,He,Te[ae]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_t,it,He,Te[ae]);for(let Ne=0;Ne<Z.length;Ne++){const Ue=Z[Ne];lt?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,it,He,Ue.image[ae]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,_t,it,He,Ue.image[ae])}}}m(C)&&p(o.TEXTURE_CUBE_MAP),le.__version=ce.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function te(D,C,j,ue,ce,le){const Fe=s.convert(j.format,j.colorSpace),Ae=s.convert(j.type),De=b(j.internalFormat,Fe,Ae,j.colorSpace),xt=n.get(C),me=n.get(j);if(me.__renderTarget=C,!xt.__hasExternalTextures){const Te=Math.max(1,C.width>>le),Xe=Math.max(1,C.height>>le);ce===o.TEXTURE_3D||ce===o.TEXTURE_2D_ARRAY?t.texImage3D(ce,le,De,Te,Xe,C.depth,0,Fe,Ae,null):t.texImage2D(ce,le,De,Te,Xe,0,Fe,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,D),je(C)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ue,ce,me.__webglTexture,0,We(C)):(ce===o.TEXTURE_2D||ce>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ue,ce,me.__webglTexture,le),t.bindFramebuffer(o.FRAMEBUFFER,null)}function se(D,C,j){if(o.bindRenderbuffer(o.RENDERBUFFER,D),C.depthBuffer){const ue=C.depthTexture,ce=ue&&ue.isDepthTexture?ue.type:null,le=x(C.stencilBuffer,ce),Fe=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=We(C);je(C)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,le,C.width,C.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,le,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,le,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Fe,o.RENDERBUFFER,D)}else{const ue=C.textures;for(let ce=0;ce<ue.length;ce++){const le=ue[ce],Fe=s.convert(le.format,le.colorSpace),Ae=s.convert(le.type),De=b(le.internalFormat,Fe,Ae,le.colorSpace),xt=We(C);j&&je(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,De,C.width,C.height):je(C)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,De,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,De,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function de(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=n.get(C.depthTexture);ue.__renderTarget=C,(!ue.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);const ce=ue.__webglTexture,le=We(C);if(C.depthTexture.format===Is)je(C)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ce,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ce,0);else if(C.depthTexture.format===ks)je(C)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ce,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function fe(D){const C=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const ue=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ue){const ce=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ue.removeEventListener("dispose",ce)};ue.addEventListener("dispose",ce),C.__depthDisposeCallback=ce}C.__boundDepthTexture=ue}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");de(C.__webglFramebuffer,D)}else if(j){C.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[ue]),C.__webglDepthbuffer[ue]===void 0)C.__webglDepthbuffer[ue]=o.createRenderbuffer(),se(C.__webglDepthbuffer[ue],D,!1);else{const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=C.__webglDepthbuffer[ue];o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ce,o.RENDERBUFFER,le)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),se(C.__webglDepthbuffer,D,!1);else{const ue=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ue,o.RENDERBUFFER,ce)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function _e(D,C,j){const ue=n.get(D);C!==void 0&&te(ue.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&fe(D)}function Pe(D){const C=D.texture,j=n.get(D),ue=n.get(C);D.addEventListener("dispose",T);const ce=D.textures,le=D.isWebGLCubeRenderTarget===!0,Fe=ce.length>1;if(Fe||(ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture()),ue.__version=C.version,r.memory.textures++),le){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let De=0;De<C.mipmaps.length;De++)j.__webglFramebuffer[Ae][De]=o.createFramebuffer()}else j.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(Fe)for(let Ae=0,De=ce.length;Ae<De;Ae++){const xt=n.get(ce[Ae]);xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture(),r.memory.textures++)}if(D.samples>0&&je(D)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ce.length;Ae++){const De=ce[Ae];j.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const xt=s.convert(De.format,De.colorSpace),me=s.convert(De.type),Te=b(De.internalFormat,xt,me,De.colorSpace,D.isXRRenderTarget===!0),Xe=We(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,Te,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),se(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(le){t.bindTexture(o.TEXTURE_CUBE_MAP,ue.__webglTexture),he(o.TEXTURE_CUBE_MAP,C);for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0)for(let De=0;De<C.mipmaps.length;De++)te(j.__webglFramebuffer[Ae][De],D,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,De);else te(j.__webglFramebuffer[Ae],D,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(C)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Ae=0,De=ce.length;Ae<De;Ae++){const xt=ce[Ae],me=n.get(xt);t.bindTexture(o.TEXTURE_2D,me.__webglTexture),he(o.TEXTURE_2D,xt),te(j.__webglFramebuffer,D,xt,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),m(xt)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ue.__webglTexture),he(Ae,C),C.mipmaps&&C.mipmaps.length>0)for(let De=0;De<C.mipmaps.length;De++)te(j.__webglFramebuffer[De],D,C,o.COLOR_ATTACHMENT0,Ae,De);else te(j.__webglFramebuffer,D,C,o.COLOR_ATTACHMENT0,Ae,0);m(C)&&p(Ae),t.unbindTexture()}D.depthBuffer&&fe(D)}function ye(D){const C=D.textures;for(let j=0,ue=C.length;j<ue;j++){const ce=C[j];if(m(ce)){const le=y(D),Fe=n.get(ce).__webglTexture;t.bindTexture(le,Fe),p(le),t.unbindTexture()}}}const Se=[],W=[];function Je(D){if(D.samples>0){if(je(D)===!1){const C=D.textures,j=D.width,ue=D.height;let ce=o.COLOR_BUFFER_BIT;const le=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Fe=n.get(D),Ae=C.length>1;if(Ae)for(let De=0;De<C.length;De++)t.bindFramebuffer(o.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Fe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let De=0;De<C.length;De++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Fe.__webglColorRenderbuffer[De]);const xt=n.get(C[De]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,j,ue,0,0,j,ue,ce,o.NEAREST),l===!0&&(Se.length=0,W.length=0,Se.push(o.COLOR_ATTACHMENT0+De),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Se.push(le),W.push(le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,W)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let De=0;De<C.length;De++){t.bindFramebuffer(o.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,Fe.__webglColorRenderbuffer[De]);const xt=n.get(C[De]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Fe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,xt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function We(D){return Math.min(i.maxSamples,D.samples)}function je(D){const C=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ee(D){const C=r.render.frame;h.get(D)!==C&&(h.set(D,C),D.update())}function nt(D,C){const j=D.colorSpace,ue=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==wn&&j!==Fi&&(Tt.getTransfer(j)===Wt?(ue!==Wn||ce!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),C}function Le(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=L,this.setTextureCube=N,this.rebindTextures=_e,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=je}function i_(o,e){function t(n,i=Fi){let s;const r=Tt.getTransfer(i);if(n===Si)return o.UNSIGNED_BYTE;if(n===Tl)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return o.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return o.BYTE;if(n===tu)return o.SHORT;if(n===yo)return o.UNSIGNED_SHORT;if(n===Al)return o.INT;if(n===ss)return o.UNSIGNED_INT;if(n===$n)return o.FLOAT;if(n===vi)return o.HALF_FLOAT;if(n===iu)return o.ALPHA;if(n===su)return o.RGB;if(n===Wn)return o.RGBA;if(n===ou)return o.LUMINANCE;if(n===ru)return o.LUMINANCE_ALPHA;if(n===Is)return o.DEPTH_COMPONENT;if(n===ks)return o.DEPTH_STENCIL;if(n===Pl)return o.RED;if(n===Rl)return o.RED_INTEGER;if(n===au)return o.RG;if(n===Il)return o.RG_INTEGER;if(n===Ll)return o.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===vr)if(r===Wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Va||n===Ha||n===Wa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Ya)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xa||n===qa)return r===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ya)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ka||n===ja||n===Za||n===$a||n===Qa||n===Ja||n===el||n===tl||n===nl||n===il||n===sl||n===ol||n===rl||n===al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ka)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return r===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===ll||n===cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yr)return r===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===hl||n===ul||n===dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class s_ extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o_={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`;class l_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new un,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:r_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c_ extends Ys{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new l_,m=t.getContextAttributes();let p=null,y=null;const b=[],x=[],P=new Ge;let E=null;const T=new Tn;T.viewport=new Vt;const S=new Tn;S.viewport=new Vt;const v=[T,S],w=new s_;let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let V=b[U];return V===void 0&&(V=new ua,b[U]=V),V.getTargetRaySpace()},this.getControllerGrip=function(U){let V=b[U];return V===void 0&&(V=new ua,b[U]=V),V.getGripSpace()},this.getHand=function(U){let V=b[U];return V===void 0&&(V=new ua,b[U]=V),V.getHandSpace()};function I(U){const V=x.indexOf(U.inputSource);if(V===-1)return;const te=b[V];te!==void 0&&(te.update(U.inputSource,U.frame,c||r),te.dispatchEvent({type:U.type,data:U.inputSource}))}function G(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",z);for(let U=0;U<b.length;U++){const V=x[U];V!==null&&(x[U]=null,b[U].disconnect(V))}A=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",G),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,te=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=m.stencil?ks:Is,te=m.stencil?Bs:ss);const de={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Jn(d.textureWidth,d.textureHeight,{format:Wn,type:Si,depthTexture:new bu(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(U){for(let V=0;V<U.removed.length;V++){const te=U.removed[V],se=x.indexOf(te);se>=0&&(x[se]=null,b[se].disconnect(te))}for(let V=0;V<U.added.length;V++){const te=U.added[V];let se=x.indexOf(te);if(se===-1){for(let fe=0;fe<b.length;fe++)if(fe>=x.length){x.push(te),se=fe;break}else if(x[fe]===null){x[fe]=te,se=fe;break}if(se===-1)break}const de=b[se];de&&de.connect(te)}}const O=new M,L=new M;function N(U,V,te){O.setFromMatrixPosition(V.matrixWorld),L.setFromMatrixPosition(te.matrixWorld);const se=O.distanceTo(L),de=V.projectionMatrix.elements,fe=te.projectionMatrix.elements,_e=de[14]/(de[10]-1),Pe=de[14]/(de[10]+1),ye=(de[9]+1)/de[5],Se=(de[9]-1)/de[5],W=(de[8]-1)/de[0],Je=(fe[8]+1)/fe[0],We=_e*W,je=_e*Je,Ee=se/(-W+Je),nt=Ee*-W;if(V.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(nt),U.translateZ(Ee),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),de[10]===-1)U.projectionMatrix.copy(V.projectionMatrix),U.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Le=_e+Ee,D=Pe+Ee,C=We-nt,j=je+(se-nt),ue=ye*Pe/D*Le,ce=Se*Pe/D*Le;U.projectionMatrix.makePerspective(C,j,ue,ce,Le,D),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function Y(U,V){V===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(V.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;let V=U.near,te=U.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(te=_.depthFar)),w.near=S.near=T.near=V,w.far=S.far=T.far=te,(A!==w.near||F!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,F=w.far),T.layers.mask=U.layers.mask|2,S.layers.mask=U.layers.mask|4,w.layers.mask=T.layers.mask|S.layers.mask;const se=U.parent,de=w.cameras;Y(w,se);for(let fe=0;fe<de.length;fe++)Y(de[fe],se);de.length===2?N(w,T,S):w.projectionMatrix.copy(T.projectionMatrix),J(U,w,se)};function J(U,V,te){te===null?U.matrix.copy(V.matrixWorld):(U.matrix.copy(te.matrixWorld),U.matrix.invert(),U.matrix.multiply(V.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(V.projectionMatrix),U.projectionMatrixInverse.copy(V.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=zs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let oe=null;function he(U,V){if(h=V.getViewerPose(c||r),g=V,h!==null){const te=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let se=!1;te.length!==w.cameras.length&&(w.cameras.length=0,se=!0);for(let fe=0;fe<te.length;fe++){const _e=te[fe];let Pe=null;if(f!==null)Pe=f.getViewport(_e);else{const Se=u.getViewSubImage(d,_e);Pe=Se.viewport,fe===0&&(e.setRenderTargetTextures(y,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(y))}let ye=v[fe];ye===void 0&&(ye=new Tn,ye.layers.enable(fe),ye.viewport=new Vt,v[fe]=ye),ye.matrix.fromArray(_e.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(_e.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),fe===0&&(w.matrix.copy(ye.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),se===!0&&w.cameras.push(ye)}const de=i.enabledFeatures;if(de&&de.includes("depth-sensing")){const fe=u.getDepthInformation(te[0]);fe&&fe.isValid&&fe.texture&&_.init(e,fe,i.renderState)}}for(let te=0;te<b.length;te++){const se=x[te],de=b[te];se!==null&&de!==void 0&&de.update(se,V,c||r)}oe&&oe(U,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const be=new Su;be.setAnimationLoop(he),this.setAnimationLoop=function(U){oe=U},this.dispose=function(){}}}const Zi=new Xn,h_=new rt;function u_(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vu(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,Zi.copy(x),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(Zi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function d_(o,e,t,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const x=b.program;n.uniformBlockBinding(y,x)}function c(y,b){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(y,P);const E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function h(y){const b=u();y.__bindingPointIndex=b;const x=o.createBuffer(),P=y.__size,E=y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,x),o.bufferData(o.UNIFORM_BUFFER,P,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,x),x}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=i[y.id],x=y.uniforms,P=y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let E=0,T=x.length;E<T;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,w=S.length;v<w;v++){const A=S[v];if(f(A,E,v,P)===!0){const F=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let z=0;z<I.length;z++){const O=I[z],L=_(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,F+G,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,G),G+=L.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,A.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(y,b,x,P){const E=y.value,T=b+"_"+x;if(P[T]===void 0)return typeof E=="number"||typeof E=="boolean"?P[T]=E:P[T]=E.clone(),!0;{const S=P[T];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return P[T]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function g(y){const b=y.uniforms;let x=0;const P=16;for(let T=0,S=b.length;T<S;T++){const v=Array.isArray(b[T])?b[T]:[b[T]];for(let w=0,A=v.length;w<A;w++){const F=v[w],I=Array.isArray(F.value)?F.value:[F.value];for(let G=0,z=I.length;G<z;G++){const O=I[G],L=_(O),N=x%P,Y=N%L.boundary,J=N+Y;x+=Y,J!==0&&P-J<L.storage&&(x+=P-J),F.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=L.storage}}}const E=x%P;return E>0&&(x+=P-E),y.__size=x,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const x=r.indexOf(b.__bindingPointIndex);r.splice(x,1),o.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const y in i)o.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class f_{constructor(e={}){const{canvas:t=tf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=ki,this.toneMappingExposure=1;const x=this;let P=!1,E=0,T=0,S=null,v=-1,w=null;const A=new Vt,F=new Vt;let I=null;const G=new re(0);let z=0,O=t.width,L=t.height,N=1,Y=null,J=null;const oe=new Vt(0,0,O,L),he=new Vt(0,0,O,L);let be=!1;const U=new Nl;let V=!1,te=!1;const se=new rt,de=new rt,fe=new M,_e=new Vt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Se(){return S===null?N:1}let W=n;function Je(R,H){return t.getContext(R,H)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),W===null){const H="webgl2";if(W=Je(H,R),W===null)throw Je(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let We,je,Ee,nt,Le,D,C,j,ue,ce,le,Fe,Ae,De,xt,me,Te,Xe,it,He,_t,lt,At,q;function we(){We=new xm(W),We.init(),lt=new i_(W,We),je=new dm(W,We,e,lt),Ee=new e_(W,We),je.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),nt=new Mm(W),Le=new kg,D=new n_(W,We,Ee,Le,je,lt,nt),C=new pm(x),j=new _m(x),ue=new Cf(W),At=new hm(W,ue),ce=new vm(W,ue,nt,At),le=new bm(W,ce,ue,nt),it=new Sm(W,je,D),me=new fm(Le),Fe=new Bg(x,C,j,We,je,At,me),Ae=new u_(x,Le),De=new Gg,xt=new Yg(We),Xe=new cm(x,C,j,Ee,le,f,l),Te=new Qg(x,le,je),q=new d_(W,nt,je,Ee),He=new um(W,We,nt),_t=new ym(W,We,nt),nt.programs=Fe.programs,x.capabilities=je,x.extensions=We,x.properties=Le,x.renderLists=De,x.shadowMap=Te,x.state=Ee,x.info=nt}we();const Z=new c_(x,W);this.xr=Z,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=We.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=We.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(R){R!==void 0&&(N=R,this.setSize(O,L,!1))},this.getSize=function(R){return R.set(O,L)},this.setSize=function(R,H,Q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,L=H,t.width=Math.floor(R*N),t.height=Math.floor(H*N),Q===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(O*N,L*N).floor()},this.setDrawingBufferSize=function(R,H,Q){O=R,L=H,N=Q,t.width=Math.floor(R*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,H,Q,ie){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,H,Q,ie),Ee.viewport(A.copy(oe).multiplyScalar(N).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,H,Q,ie){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,H,Q,ie),Ee.scissor(F.copy(he).multiplyScalar(N).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Ee.setScissorTest(be=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(R=!0,H=!0,Q=!0){let ie=0;if(R){let K=!1;if(S!==null){const Me=S.texture.format;K=Me===Ll||Me===Il||Me===Rl}if(K){const Me=S.texture.type,Ce=Me===Si||Me===ss||Me===yo||Me===Bs||Me===Tl||Me===Cl,Ke=Xe.getClearColor(),Ye=Xe.getClearAlpha(),ct=Ke.r,vt=Ke.g,B=Ke.b;Ce?(g[0]=ct,g[1]=vt,g[2]=B,g[3]=Ye,W.clearBufferuiv(W.COLOR,0,g)):(_[0]=ct,_[1]=vt,_[2]=B,_[3]=Ye,W.clearBufferiv(W.COLOR,0,_))}else ie|=W.COLOR_BUFFER_BIT}H&&(ie|=W.DEPTH_BUFFER_BIT),Q&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),De.dispose(),xt.dispose(),Le.dispose(),C.dispose(),j.dispose(),le.dispose(),At.dispose(),q.dispose(),Fe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ot),Z.removeEventListener("sessionend",et),qe.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=nt.autoReset,H=Te.enabled,Q=Te.autoUpdate,ie=Te.needsUpdate,K=Te.type;we(),nt.autoReset=R,Te.enabled=H,Te.autoUpdate=Q,Te.needsUpdate=ie,Te.type=K}function Ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const H=R.target;H.removeEventListener("dispose",at),ut(H)}function ut(R){Rt(R),Le.remove(R)}function Rt(R){const H=Le.get(R).programs;H!==void 0&&(H.forEach(function(Q){Fe.releaseProgram(Q)}),R.isShaderMaterial&&Fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Q,ie,K,Me){H===null&&(H=Pe);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Ke=Mt(R,H,Q,ie,K);Ee.setMaterial(ie,Ce);let Ye=Q.index,ct=1;if(ie.wireframe===!0){if(Ye=ce.getWireframeAttribute(Q),Ye===void 0)return;ct=2}const vt=Q.drawRange,B=Q.attributes.position;let Ie=vt.start*ct,Ze=(vt.start+vt.count)*ct;Me!==null&&(Ie=Math.max(Ie,Me.start*ct),Ze=Math.min(Ze,(Me.start+Me.count)*ct)),Ye!==null?(Ie=Math.max(Ie,0),Ze=Math.min(Ze,Ye.count)):B!=null&&(Ie=Math.max(Ie,0),Ze=Math.min(Ze,B.count));const st=Ze-Ie;if(st<0||st===1/0)return;At.setup(K,ie,Ke,Q,Ye);let ne,ge=He;if(Ye!==null&&(ne=ue.get(Ye),ge=_t,ge.setIndex(ne)),K.isMesh)ie.wireframe===!0?(Ee.setLineWidth(ie.wireframeLinewidth*Se()),ge.setMode(W.LINES)):ge.setMode(W.TRIANGLES);else if(K.isLine){let pe=ie.linewidth;pe===void 0&&(pe=1),Ee.setLineWidth(pe*Se()),K.isLineSegments?ge.setMode(W.LINES):K.isLineLoop?ge.setMode(W.LINE_LOOP):ge.setMode(W.LINE_STRIP)}else K.isPoints?ge.setMode(W.POINTS):K.isSprite&&ge.setMode(W.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ge.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const pe=K._multiDrawStarts,$e=K._multiDrawCounts,Ve=K._multiDrawCount,dt=Ye?ue.get(Ye).bytesPerElement:1,ve=Le.get(ie).currentProgram.getUniforms();for(let ee=0;ee<Ve;ee++)ve.setValue(W,"_gl_DrawID",ee),ge.render(pe[ee]/dt,$e[ee])}else if(K.isInstancedMesh)ge.renderInstances(Ie,st,K.count);else if(Q.isInstancedBufferGeometry){const pe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,$e=Math.min(Q.instanceCount,pe);ge.renderInstances(Ie,st,$e)}else ge.render(Ie,st)};function $(R,H,Q){R.transparent===!0&&R.side===$t&&R.forceSinglePass===!1?(R.side=bn,R.needsUpdate=!0,en(R,H,Q),R.side=si,R.needsUpdate=!0,en(R,H,Q),R.side=$t):en(R,H,Q)}this.compile=function(R,H,Q=null){Q===null&&(Q=R),p=xt.get(Q),p.init(H),b.push(p),Q.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),R!==Q&&R.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();const ie=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Me=K.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Ke=Me[Ce];$(Ke,Q,K),ie.add(Ke)}else $(Me,Q,K),ie.add(Me)}),b.pop(),p=null,ie},this.compileAsync=function(R,H,Q=null){const ie=this.compile(R,H,Q);return new Promise(K=>{function Me(){if(ie.forEach(function(Ce){Le.get(Ce).currentProgram.isReady()&&ie.delete(Ce)}),ie.size===0){K(R);return}setTimeout(Me,10)}We.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Re=null;function Be(R){Re&&Re(R)}function ot(){qe.stop()}function et(){qe.start()}const qe=new Su;qe.setAnimationLoop(Be),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(R){Re=R,Z.setAnimationLoop(R),R===null?qe.stop():qe.start()},Z.addEventListener("sessionstart",ot),Z.addEventListener("sessionend",et),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(H),H=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,H,S),p=xt.get(R,b.length),p.init(H),b.push(p),de.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),U.setFromProjectionMatrix(de),te=this.localClippingEnabled,V=me.init(this.clippingPlanes,te),m=De.get(R,y.length),m.init(),y.push(m),Z.enabled===!0&&Z.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&gt(Me,H,-1/0,x.sortObjects)}gt(R,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,J),ye=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ye&&Xe.addToRenderList(m,R),this.info.render.frame++,V===!0&&me.beginShadows();const Q=p.state.shadowsArray;Te.render(Q,R,H),V===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,K=m.transmissive;if(p.setupLights(),H.isArrayCamera){const Me=H.cameras;if(K.length>0)for(let Ce=0,Ke=Me.length;Ce<Ke;Ce++){const Ye=Me[Ce];jt(ie,K,R,Ye)}ye&&Xe.render(R);for(let Ce=0,Ke=Me.length;Ce<Ke;Ce++){const Ye=Me[Ce];Nt(m,R,Ye,Ye.viewport)}}else K.length>0&&jt(ie,K,R,H),ye&&Xe.render(R),Nt(m,R,H);S!==null&&(D.updateMultisampleRenderTarget(S),D.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(x,R,H),At.resetDefaultState(),v=-1,w=null,b.pop(),b.length>0?(p=b[b.length-1],V===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function gt(R,H,Q,ie){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||U.intersectsSprite(R)){ie&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);const Ce=le.update(R),Ke=R.material;Ke.visible&&m.push(R,Ce,Ke,Q,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||U.intersectsObject(R))){const Ce=le.update(R),Ke=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),_e.copy(Ce.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(Ke)){const Ye=Ce.groups;for(let ct=0,vt=Ye.length;ct<vt;ct++){const B=Ye[ct],Ie=Ke[B.materialIndex];Ie&&Ie.visible&&m.push(R,Ce,Ie,Q,_e.z,B)}}else Ke.visible&&m.push(R,Ce,Ke,Q,_e.z,null)}}const Me=R.children;for(let Ce=0,Ke=Me.length;Ce<Ke;Ce++)gt(Me[Ce],H,Q,ie)}function Nt(R,H,Q,ie){const K=R.opaque,Me=R.transmissive,Ce=R.transparent;p.setupLightsView(Q),V===!0&&me.setGlobalState(x.clippingPlanes,Q),ie&&Ee.viewport(A.copy(ie)),K.length>0&&Qt(K,H,Q),Me.length>0&&Qt(Me,H,Q),Ce.length>0&&Qt(Ce,H,Q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function jt(R,H,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new Jn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?vi:Si,minFilter:gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[ie.id],Ce=ie.viewport||A;Me.setSize(Ce.z,Ce.w);const Ke=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(G),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),ye&&Xe.render(Q);const Ye=x.toneMapping;x.toneMapping=ki;const ct=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),V===!0&&me.setGlobalState(x.clippingPlanes,ie),Qt(R,Q,ie),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),We.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let B=0,Ie=H.length;B<Ie;B++){const Ze=H[B],st=Ze.object,ne=Ze.geometry,ge=Ze.material,pe=Ze.group;if(ge.side===$t&&st.layers.test(ie.layers)){const $e=ge.side;ge.side=bn,ge.needsUpdate=!0,sn(st,Q,ie,ne,ge,pe),ge.side=$e,ge.needsUpdate=!0,vt=!0}}vt===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}x.setRenderTarget(Ke),x.setClearColor(G,z),ct!==void 0&&(ie.viewport=ct),x.toneMapping=Ye}function Qt(R,H,Q){const ie=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Me=R.length;K<Me;K++){const Ce=R[K],Ke=Ce.object,Ye=Ce.geometry,ct=ie===null?Ce.material:ie,vt=Ce.group;Ke.layers.test(Q.layers)&&sn(Ke,H,Q,Ye,ct,vt)}}function sn(R,H,Q,ie,K,Me){R.onBeforeRender(x,H,Q,ie,K,Me),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(x,H,Q,ie,R,Me),K.transparent===!0&&K.side===$t&&K.forceSinglePass===!1?(K.side=bn,K.needsUpdate=!0,x.renderBufferDirect(Q,H,ie,K,R,Me),K.side=si,K.needsUpdate=!0,x.renderBufferDirect(Q,H,ie,K,R,Me),K.side=$t):x.renderBufferDirect(Q,H,ie,K,R,Me),R.onAfterRender(x,H,Q,ie,K,Me)}function en(R,H,Q){H.isScene!==!0&&(H=Pe);const ie=Le.get(R),K=p.state.lights,Me=p.state.shadowsArray,Ce=K.state.version,Ke=Fe.getParameters(R,K.state,Me,H,Q),Ye=Fe.getProgramCacheKey(Ke);let ct=ie.programs;ie.environment=R.isMeshStandardMaterial?H.environment:null,ie.fog=H.fog,ie.envMap=(R.isMeshStandardMaterial?j:C).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,ct===void 0&&(R.addEventListener("dispose",at),ct=new Map,ie.programs=ct);let vt=ct.get(Ye);if(vt!==void 0){if(ie.currentProgram===vt&&ie.lightsStateVersion===Ce)return Zt(R,Ke),vt}else Ke.uniforms=Fe.getUniforms(R),R.onBeforeCompile(Ke,x),vt=Fe.acquireProgram(Ke,Ye),ct.set(Ye,vt),ie.uniforms=Ke.uniforms;const B=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(B.clippingPlanes=me.uniform),Zt(R,Ke),ie.needsLights=tn(R),ie.lightsStateVersion=Ce,ie.needsLights&&(B.ambientLightColor.value=K.state.ambient,B.lightProbe.value=K.state.probe,B.directionalLights.value=K.state.directional,B.directionalLightShadows.value=K.state.directionalShadow,B.spotLights.value=K.state.spot,B.spotLightShadows.value=K.state.spotShadow,B.rectAreaLights.value=K.state.rectArea,B.ltc_1.value=K.state.rectAreaLTC1,B.ltc_2.value=K.state.rectAreaLTC2,B.pointLights.value=K.state.point,B.pointLightShadows.value=K.state.pointShadow,B.hemisphereLights.value=K.state.hemi,B.directionalShadowMap.value=K.state.directionalShadowMap,B.directionalShadowMatrix.value=K.state.directionalShadowMatrix,B.spotShadowMap.value=K.state.spotShadowMap,B.spotLightMatrix.value=K.state.spotLightMatrix,B.spotLightMap.value=K.state.spotLightMap,B.pointShadowMap.value=K.state.pointShadowMap,B.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.currentProgram=vt,ie.uniformsList=null,vt}function Dt(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Mr.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Zt(R,H){const Q=Le.get(R);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Mt(R,H,Q,ie,K){H.isScene!==!0&&(H=Pe),D.resetTextureUnits();const Me=H.fog,Ce=ie.isMeshStandardMaterial?H.environment:null,Ke=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:wn,Ye=(ie.isMeshStandardMaterial?j:C).get(ie.envMap||Ce),ct=ie.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vt=!!Q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),B=!!Q.morphAttributes.position,Ie=!!Q.morphAttributes.normal,Ze=!!Q.morphAttributes.color;let st=ki;ie.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(st=x.toneMapping);const ne=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ge=ne!==void 0?ne.length:0,pe=Le.get(ie),$e=p.state.lights;if(V===!0&&(te===!0||R!==w)){const yt=R===w&&ie.id===v;me.setState(ie,R,yt)}let Ve=!1;ie.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==$e.state.version||pe.outputColorSpace!==Ke||K.isBatchedMesh&&pe.batching===!1||!K.isBatchedMesh&&pe.batching===!0||K.isBatchedMesh&&pe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&pe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&pe.instancing===!1||!K.isInstancedMesh&&pe.instancing===!0||K.isSkinnedMesh&&pe.skinning===!1||!K.isSkinnedMesh&&pe.skinning===!0||K.isInstancedMesh&&pe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&pe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&pe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&pe.instancingMorph===!1&&K.morphTexture!==null||pe.envMap!==Ye||ie.fog===!0&&pe.fog!==Me||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==me.numPlanes||pe.numIntersection!==me.numIntersection)||pe.vertexAlphas!==ct||pe.vertexTangents!==vt||pe.morphTargets!==B||pe.morphNormals!==Ie||pe.morphColors!==Ze||pe.toneMapping!==st||pe.morphTargetsCount!==ge)&&(Ve=!0):(Ve=!0,pe.__version=ie.version);let dt=pe.currentProgram;Ve===!0&&(dt=en(ie,H,K));let ve=!1,ee=!1,tt=!1;const Oe=dt.getUniforms(),Qe=pe.uniforms;if(Ee.useProgram(dt.program)&&(ve=!0,ee=!0,tt=!0),ie.id!==v&&(v=ie.id,ee=!0),ve||w!==R){Ee.buffers.depth.getReversed()?(se.copy(R.projectionMatrix),sf(se),of(se),Oe.setValue(W,"projectionMatrix",se)):Oe.setValue(W,"projectionMatrix",R.projectionMatrix),Oe.setValue(W,"viewMatrix",R.matrixWorldInverse);const kt=Oe.map.cameraPosition;kt!==void 0&&kt.setValue(W,fe.setFromMatrixPosition(R.matrixWorld)),je.logarithmicDepthBuffer&&Oe.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Oe.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,ee=!0,tt=!0)}if(K.isSkinnedMesh){Oe.setOptional(W,K,"bindMatrix"),Oe.setOptional(W,K,"bindMatrixInverse");const yt=K.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),Oe.setValue(W,"boneTexture",yt.boneTexture,D))}K.isBatchedMesh&&(Oe.setOptional(W,K,"batchingTexture"),Oe.setValue(W,"batchingTexture",K._matricesTexture,D),Oe.setOptional(W,K,"batchingIdTexture"),Oe.setValue(W,"batchingIdTexture",K._indirectTexture,D),Oe.setOptional(W,K,"batchingColorTexture"),K._colorsTexture!==null&&Oe.setValue(W,"batchingColorTexture",K._colorsTexture,D));const Bt=Q.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&it.update(K,Q,dt),(ee||pe.receiveShadow!==K.receiveShadow)&&(pe.receiveShadow=K.receiveShadow,Oe.setValue(W,"receiveShadow",K.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Qe.envMap.value=Ye,Qe.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&H.environment!==null&&(Qe.envMapIntensity.value=H.environmentIntensity),ee&&(Oe.setValue(W,"toneMappingExposure",x.toneMappingExposure),pe.needsLights&&It(Qe,tt),Me&&ie.fog===!0&&Ae.refreshFogUniforms(Qe,Me),Ae.refreshMaterialUniforms(Qe,ie,N,L,p.state.transmissionRenderTarget[R.id]),Mr.upload(W,Dt(pe),Qe,D)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Mr.upload(W,Dt(pe),Qe,D),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Oe.setValue(W,"center",K.center),Oe.setValue(W,"modelViewMatrix",K.modelViewMatrix),Oe.setValue(W,"normalMatrix",K.normalMatrix),Oe.setValue(W,"modelMatrix",K.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const yt=ie.uniformsGroups;for(let kt=0,zt=yt.length;kt<zt;kt++){const Nn=yt[kt];q.update(Nn,dt),q.bind(Nn,dt)}}return dt}function It(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function tn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,H,Q){Le.get(R.texture).__webglTexture=H,Le.get(R.depthTexture).__webglTexture=Q;const ie=Le.get(R);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=Q===void 0,ie.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){const Q=Le.get(R);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,Q=0){S=R,E=H,T=Q;let ie=!0,K=null,Me=!1,Ce=!1;if(R){const Ye=Le.get(R);if(Ye.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(W.FRAMEBUFFER,null),ie=!1;else if(Ye.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ye.__hasExternalTextures)D.rebindTextures(R,Le.get(R.texture).__webglTexture,Le.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const B=R.depthTexture;if(Ye.__boundDepthTexture!==B){if(B!==null&&Le.has(B)&&(R.width!==B.image.width||R.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const ct=R.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ce=!0);const vt=Le.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(vt[H])?K=vt[H][Q]:K=vt[H],Me=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?K=Le.get(R).__webglMultisampledFramebuffer:Array.isArray(vt)?K=vt[Q]:K=vt,A.copy(R.viewport),F.copy(R.scissor),I=R.scissorTest}else A.copy(oe).multiplyScalar(N).floor(),F.copy(he).multiplyScalar(N).floor(),I=be;if(Ee.bindFramebuffer(W.FRAMEBUFFER,K)&&ie&&Ee.drawBuffers(R,K),Ee.viewport(A),Ee.scissor(F),Ee.setScissorTest(I),Me){const Ye=Le.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ye.__webglTexture,Q)}else if(Ce){const Ye=Le.get(R.texture),ct=H||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,Q||0,ct)}v=-1},this.readRenderTargetPixels=function(R,H,Q,ie,K,Me,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ke=Ke[Ce]),Ke){Ee.bindFramebuffer(W.FRAMEBUFFER,Ke);try{const Ye=R.texture,ct=Ye.format,vt=Ye.type;if(!je.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-ie&&Q>=0&&Q<=R.height-K&&W.readPixels(H,Q,ie,K,lt.convert(ct),lt.convert(vt),Me)}finally{const Ye=S!==null?Le.get(S).__webglFramebuffer:null;Ee.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,H,Q,ie,K,Me,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=Le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ke=Ke[Ce]),Ke){const Ye=R.texture,ct=Ye.format,vt=Ye.type;if(!je.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-ie&&Q>=0&&Q<=R.height-K){Ee.bindFramebuffer(W.FRAMEBUFFER,Ke);const B=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,B),W.bufferData(W.PIXEL_PACK_BUFFER,Me.byteLength,W.STREAM_READ),W.readPixels(H,Q,ie,K,lt.convert(ct),lt.convert(vt),0);const Ie=S!==null?Le.get(S).__webglFramebuffer:null;Ee.bindFramebuffer(W.FRAMEBUFFER,Ie);const Ze=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await nf(W,Ze,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,B),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Me),W.deleteBuffer(B),W.deleteSync(Ze),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,Q=0){R.isTexture!==!0&&(fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);const ie=Math.pow(2,-Q),K=Math.floor(R.image.width*ie),Me=Math.floor(R.image.height*ie),Ce=H!==null?H.x:0,Ke=H!==null?H.y:0;D.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,Ce,Ke,K,Me),Ee.unbindTexture()},this.copyTextureToTexture=function(R,H,Q=null,ie=null,K=0){R.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,R=arguments[1],H=arguments[2],K=arguments[3]||0,Q=null);let Me,Ce,Ke,Ye,ct,vt,B,Ie,Ze;const st=R.isCompressedTexture?R.mipmaps[K]:R.image;Q!==null?(Me=Q.max.x-Q.min.x,Ce=Q.max.y-Q.min.y,Ke=Q.isBox3?Q.max.z-Q.min.z:1,Ye=Q.min.x,ct=Q.min.y,vt=Q.isBox3?Q.min.z:0):(Me=st.width,Ce=st.height,Ke=st.depth||1,Ye=0,ct=0,vt=0),ie!==null?(B=ie.x,Ie=ie.y,Ze=ie.z):(B=0,Ie=0,Ze=0);const ne=lt.convert(H.format),ge=lt.convert(H.type);let pe;H.isData3DTexture?(D.setTexture3D(H,0),pe=W.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(D.setTexture2DArray(H,0),pe=W.TEXTURE_2D_ARRAY):(D.setTexture2D(H,0),pe=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment);const $e=W.getParameter(W.UNPACK_ROW_LENGTH),Ve=W.getParameter(W.UNPACK_IMAGE_HEIGHT),dt=W.getParameter(W.UNPACK_SKIP_PIXELS),ve=W.getParameter(W.UNPACK_SKIP_ROWS),ee=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,st.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,st.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ye),W.pixelStorei(W.UNPACK_SKIP_ROWS,ct),W.pixelStorei(W.UNPACK_SKIP_IMAGES,vt);const tt=R.isDataArrayTexture||R.isData3DTexture,Oe=H.isDataArrayTexture||H.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Qe=Le.get(R),Bt=Le.get(H),yt=Le.get(Qe.__renderTarget),kt=Le.get(Bt.__renderTarget);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,yt.__webglFramebuffer),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let zt=0;zt<Ke;zt++)tt&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Le.get(R).__webglTexture,K,vt+zt),R.isDepthTexture?(Oe&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Le.get(H).__webglTexture,K,Ze+zt),W.blitFramebuffer(Ye,ct,Me,Ce,B,Ie,Me,Ce,W.DEPTH_BUFFER_BIT,W.NEAREST)):Oe?W.copyTexSubImage3D(pe,K,B,Ie,Ze+zt,Ye,ct,Me,Ce):W.copyTexSubImage2D(pe,K,B,Ie,Ze+zt,Ye,ct,Me,Ce);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(pe,K,B,Ie,Ze,Me,Ce,Ke,ne,ge,st.data):H.isCompressedArrayTexture?W.compressedTexSubImage3D(pe,K,B,Ie,Ze,Me,Ce,Ke,ne,st.data):W.texSubImage3D(pe,K,B,Ie,Ze,Me,Ce,Ke,ne,ge,st):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,K,B,Ie,Me,Ce,ne,ge,st.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,K,B,Ie,st.width,st.height,ne,st.data):W.texSubImage2D(W.TEXTURE_2D,K,B,Ie,Me,Ce,ne,ge,st);W.pixelStorei(W.UNPACK_ROW_LENGTH,$e),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ve),W.pixelStorei(W.UNPACK_SKIP_PIXELS,dt),W.pixelStorei(W.UNPACK_SKIP_ROWS,ve),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ee),K===0&&H.generateMipmaps&&W.generateMipmap(pe),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,H,Q=null,ie=null,K=0){return R.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ie=arguments[1]||null,R=arguments[2],H=arguments[3],K=arguments[4]||0),fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,H,Q,ie,K)},this.initRenderTarget=function(R){Le.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){E=0,T=0,S=null,Ee.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}class Fl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new Fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class p_ extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new M;class Eo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pu extends ei{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bs;const no=new M,ws=new M,Es=new M,As=new Ge,io=new Ge,Ru=new rt,Qo=new M,so=new M,Jo=new M,Jc=new Ge,da=new Ge,eh=new Ge;class m_ extends Ot{constructor(e=new Pu){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cu(t,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Eo(n,3,0,!1)),bs.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=bs,this.material=e,this.center=new Ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Es.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;er(Qo.set(-.5,-.5,0),Es,r,ws,i,s),er(so.set(.5,-.5,0),Es,r,ws,i,s),er(Jo.set(.5,.5,0),Es,r,ws,i,s),Jc.set(0,0),da.set(1,0),eh.set(1,1);let a=e.ray.intersectTriangle(Qo,so,Jo,!1,no);if(a===null&&(er(so.set(-.5,.5,0),Es,r,ws,i,s),da.set(0,1),a=e.ray.intersectTriangle(Qo,Jo,so,!1,no),a===null))return;const l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:Gn.getInterpolation(no,Qo,so,Jo,Jc,da,eh,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function er(o,e,t,n,i,s){As.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(io.x=s*As.x-i*As.y,io.y=i*As.x+s*As.y):io.copy(As),o.copy(e),o.x+=io.x,o.y+=io.y,o.applyMatrix4(Ru)}const th=new M,nh=new Vt,ih=new Vt,g_=new M,sh=new rt,tr=new M,fa=new oi,oh=new rt,pa=new Ir;class __ extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tr),this.boundingBox.expandByPoint(tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tr),this.boundingSphere.expandByPoint(tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1&&(oh.copy(i).invert(),pa.copy(e.ray).applyMatrix4(oh),!(this.boundingBox!==null&&pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ad?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;nh.fromBufferAttribute(i.attributes.skinIndex,e),ih.fromBufferAttribute(i.attributes.skinWeight,e),th.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=ih.getComponent(s);if(r!==0){const a=nh.getComponent(s);sh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(g_.copy(th).applyMatrix4(sh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Iu extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lu extends un{constructor(e=null,t=1,n=1,i,s,r,a,l,c=Rn,h=Rn,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rh=new rt,x_=new rt;class Ol{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:x_;rh.multiplyMatrices(a,t[s]),rh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Lu(t,e,e,Wn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Iu),this.bones.push(r),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class gl extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new rt,ah=new rt,nr=[],lh=new wi,v_=new rt,oo=new ht,ro=new oi;class pt extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,v_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),lh.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(lh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),ro.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),e.ray.intersectsSphere(ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ts),ah.multiplyMatrices(n,Ts),oo.matrixWorld=ah,oo.raycast(e,nr);for(let r=0,a=nr.length;r<a;r++){const l=nr[r];l.instanceId=s,l.object=this,t.push(l)}nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lu(new Float32Array(i*this.count),i,this.count,Pl,$n));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bl extends ei{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Er=new M,Ar=new M,ch=new rt,ao=new Ir,ir=new oi,ma=new M,hh=new M;class kl extends Ot{constructor(e=new Pt,t=new Bl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Er.fromBufferAttribute(t,i-1),Ar.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Er.distanceTo(Ar);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=s,e.ray.intersectsSphere(ir)===!1)return;ch.copy(i).invert(),ao.copy(e.ray).applyMatrix4(ch);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),y=h.getX(_+1),b=sr(this,e,ao,l,p,y);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=sr(this,e,ao,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=sr(this,e,ao,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=sr(this,e,ao,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sr(o,e,t,n,i,s){const r=o.geometry.attributes.position;if(Er.fromBufferAttribute(r,i),Ar.fromBufferAttribute(r,s),t.distanceSqToSegment(Er,Ar,ma,hh)>n)return;ma.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(ma);if(!(l<e.near||l>e.far))return{distance:l,point:hh.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}const uh=new M,dh=new M;class Du extends kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)uh.fromBufferAttribute(t,i),dh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uh.distanceTo(dh);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class y_ extends kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pn extends ei{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fh=new rt,_l=new Ir,or=new oi,rr=new M;class Ln extends Ot{constructor(e=new Pt,t=new Pn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=s,e.ray.intersectsSphere(or)===!1)return;fh.copy(i).invert(),_l.copy(e.ray).applyMatrix4(fh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);rr.fromBufferAttribute(u,m),ph(rr,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,_=f;g<_;g++)rr.fromBufferAttribute(u,g),ph(rr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ph(o,e,t,n,i,s,r){const a=_l.distanceSqToPoint(o);if(a<t){const l=new M;_l.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class yn extends un{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=t||(r.isVector2?new Ge:new M);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new M,i=[],s=[],r=[],a=new M,l=new rt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new M)}s[0]=new M,r[0]=new M;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gn(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(gn(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nu extends Ei{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ge){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class M_ extends Nu{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function zl(){let o=0,e=0,t=0,n=0;function i(s,r,a,l){o=s,e=a,t=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,u){let d=(r-s)/c-(a-s)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,i(r,a,d,f)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const ar=new M,ga=new zl,_a=new zl,xa=new zl;class Dn extends Ei{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(ar.subVectors(i[0],i[1]).add(i[0]),c=ar);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ar.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ar),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ga.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),_a.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),xa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),_a.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),xa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ga.calc(l),_a.calc(l),xa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mh(o,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*a+s*o+t}function S_(o,e){const t=1-o;return t*t*e}function b_(o,e){return 2*(1-o)*o*e}function w_(o,e){return o*o*e}function _o(o,e,t,n){return S_(o,e)+b_(o,t)+w_(o,n)}function E_(o,e){const t=1-o;return t*t*t*e}function A_(o,e){const t=1-o;return 3*t*t*o*e}function T_(o,e){return 3*(1-o)*o*o*e}function C_(o,e){return o*o*o*e}function xo(o,e,t,n,i){return E_(o,e)+A_(o,t)+T_(o,n)+C_(o,i)}class P_ extends Ei{constructor(e=new Ge,t=new Ge,n=new Ge,i=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ge){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(xo(e,i.x,s.x,r.x,a.x),xo(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R_ extends Ei{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(xo(e,i.x,s.x,r.x,a.x),xo(e,i.y,s.y,r.y,a.y),xo(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I_ extends Ei{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends Ei{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D_ extends Ei{constructor(e=new Ge,t=new Ge,n=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ge){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(_o(e,i.x,s.x,r.x),_o(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uu extends Ei{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(_o(e,i.x,s.x,r.x),_o(e,i.y,s.y,r.y),_o(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N_ extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(mh(a,l.x,c.x,h.x,u.x),mh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ge().fromArray(i))}return this}}var U_=Object.freeze({__proto__:null,ArcCurve:M_,CatmullRomCurve3:Dn,CubicBezierCurve:P_,CubicBezierCurve3:R_,EllipseCurve:Nu,LineCurve:I_,LineCurve3:L_,QuadraticBezierCurve:D_,QuadraticBezierCurve3:Uu,SplineCurve:N_});class Gl extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new M,h=new Ge;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jt extends Pt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),r===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2));function y(){const x=new M,P=new M;let E=0;const T=(t-e)/n;for(let S=0;S<=s;S++){const v=[],w=S/s,A=w*(t-e)+e;for(let F=0;F<=i;F++){const I=F/i,G=I*l+a,z=Math.sin(G),O=Math.cos(G);P.x=A*z,P.y=-w*n+m,P.z=A*O,u.push(P.x,P.y,P.z),x.set(z,T,O).normalize(),d.push(x.x,x.y,x.z),f.push(I,1-w),v.push(g++)}_.push(v)}for(let S=0;S<i;S++)for(let v=0;v<s;v++){const w=_[v][S],A=_[v+1][S],F=_[v+1][S+1],I=_[v][S+1];(e>0||v!==0)&&(h.push(w,A,I),E+=3),(t>0||v!==s-1)&&(h.push(A,F,I),E+=3)}c.addGroup(p,E,0),p+=E}function b(x){const P=g,E=new Ge,T=new M;let S=0;const v=x===!0?e:t,w=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const A=g;for(let F=0;F<=i;F++){const G=F/i*l+a,z=Math.cos(G),O=Math.sin(G);T.x=v*O,T.y=m*w,T.z=v*z,u.push(T.x,T.y,T.z),d.push(0,w,0),E.x=z*.5+.5,E.y=O*.5*w+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){const I=P+F,G=A+F;x===!0?h.push(G,G+1,I):h.push(G+1,G,I),S+=3}c.addGroup(p,S,x===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn extends Jt{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new xn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nr extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];a(i),c(n),h(),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(s.slice(),3)),this.setAttribute("uv",new Ht(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const b=new M,x=new M,P=new M;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],x),f(t[E+2],P),l(b,x,P,y)}function l(y,b,x,P){const E=P+1,T=[];for(let S=0;S<=E;S++){T[S]=[];const v=y.clone().lerp(x,S/E),w=b.clone().lerp(x,S/E),A=E-S;for(let F=0;F<=A;F++)F===0&&S===E?T[S][F]=v:T[S][F]=v.clone().lerp(w,F/A)}for(let S=0;S<E;S++)for(let v=0;v<2*(E-S)-1;v++){const w=Math.floor(v/2);v%2===0?(d(T[S][w+1]),d(T[S+1][w]),d(T[S][w])):(d(T[S][w+1]),d(T[S+1][w+1]),d(T[S+1][w]))}}function c(y){const b=new M;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(y),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function h(){const y=new M;for(let b=0;b<s.length;b+=3){y.x=s[b+0],y.y=s[b+1],y.z=s[b+2];const x=m(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;r.push(x,1-P)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){const b=r[y+0],x=r[y+2],P=r[y+4],E=Math.max(b,x,P),T=Math.min(b,x,P);E>.9&&T<.1&&(b<.2&&(r[y+0]+=1),x<.2&&(r[y+2]+=1),P<.2&&(r[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,b){const x=y*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const y=new M,b=new M,x=new M,P=new M,E=new Ge,T=new Ge,S=new Ge;for(let v=0,w=0;v<s.length;v+=9,w+=6){y.set(s[v+0],s[v+1],s[v+2]),b.set(s[v+3],s[v+4],s[v+5]),x.set(s[v+6],s[v+7],s[v+8]),E.set(r[w+0],r[w+1]),T.set(r[w+2],r[w+3]),S.set(r[w+4],r[w+5]),P.copy(y).add(b).add(x).divideScalar(3);const A=m(P);_(E,w+0,y,A),_(T,w+2,b,A),_(S,w+4,x,A)}}function _(y,b,x,P){P<0&&y.x===1&&(r[b]=y.x-1),x.x===0&&x.z===0&&(r[b]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.vertices,e.indices,e.radius,e.details)}}class Vs extends Nr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vs(e.radius,e.detail)}}class Vl extends Nr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vl(e.radius,e.detail)}}class ln extends Pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new M,d=new M,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n;let x=0;p===0&&r===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const E=P/t;u.x=-e*Math.cos(i+E*s)*Math.sin(r+b*a),u.y=e*Math.cos(r+b*a),u.z=e*Math.sin(i+E*s)*Math.sin(r+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+x,1-b),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const b=h[p][y+1],x=h[p][y],P=h[p+1][y],E=h[p+1][y+1];(p!==0||r>0)&&f.push(b,x,E),(p!==n-1||l<Math.PI)&&f.push(x,P,E)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bn extends Pt{constructor(e=new Uu(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new M,l=new M,c=new Ge;let h=new M;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2));function _(){for(let b=0;b<t;b++)m(b);m(s===!1?t:0),y(),p()}function m(b){h=e.getPointAt(b/t,h);const x=r.normals[b],P=r.binormals[b];for(let E=0;E<=i;E++){const T=E/i*Math.PI*2,S=Math.sin(T),v=-Math.cos(T);l.x=v*x.x+S*P.x,l.y=v*x.y+S*P.y,l.z=v*x.z+S*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=t;b++)for(let x=1;x<=i;x++){const P=(i+1)*(b-1)+(x-1),E=(i+1)*b+(x-1),T=(i+1)*b+x,S=(i+1)*(b-1)+x;g.push(P,E,S),g.push(E,T,S)}}function y(){for(let b=0;b<=t;b++)for(let x=0;x<=i;x++)c.x=b/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bn(new U_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class F_ extends an{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ke extends ei{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ri extends ke{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function lr(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function O_(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function B_(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gh(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Fu(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class To{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class k_ extends To{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case ic:s=e,a=2*t-n;break;case sc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ic:r=e,l=2*n-t;break;case sc:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let P=0;P!==a;++P)s[P]=p*r[h+P]+y*r[c+P]+b*r[l+P]+x*r[u+P];return s}}class z_ extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class G_ extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new G_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new z_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new k_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case Br:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return Br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&O_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Br,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=So;class js extends ai{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Mo;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Ou extends ai{}Ou.prototype.ValueTypeName="color";class Hs extends ai{}Hs.prototype.ValueTypeName="number";class V_ extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)mt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Ws extends ai{InterpolantFactoryMethodLinear(e){return new V_(this.times,this.values,this.getValueSize(),e)}}Ws.prototype.ValueTypeName="quaternion";Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends ai{constructor(e,t,n){super(e,t,n)}}Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Mo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends ai{}Xs.prototype.ValueTypeName="vector";class H_{constructor(e="",t=-1,n=[],i=Td){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(X_(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(ai.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=B_(l);l=gh(l,1,h),c=gh(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Hs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Fu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const b=d[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new Hs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*r}else{const f=".bones["+t[u].name+"]";n(Xs,f+".position",d,"pos",i),n(Ws,f+".quaternion",d,"rot",i),n(Xs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function W_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hs;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return Ou;case"quaternion":return Ws;case"bool":case"boolean":return js;case"string":return Zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function X_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=W_(o.type);if(o.times===void 0){const t=[],n=[];Fu(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Bi={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class q_{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Y_=new q_;class as{constructor(e){this.manager=e!==void 0?e:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}as.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class K_ extends Error{constructor(e,t){super(e),this.response=t}}class Tr extends as{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:i});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=fi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:x})=>{if(b)p.close();else{_+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,T=h.length;E<T;E++){const S=h[E];S.onProgress&&S.onProgress(P)}p.enqueue(x),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new K_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Bi.add(e,c);const h=fi[e];delete fi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class j_ extends as{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Bi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=bo("img");function l(){h(),Bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Z_ extends as{constructor(e){super(e)}load(e,t,n,i){const s=new un,r=new j_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Co extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $_ extends Co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const va=new rt,_h=new M,xh=new M;class Hl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xh),t.updateMatrixWorld(),va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q_ extends Hl{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class J_ extends Co{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Q_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vh=new rt,lo=new M,ya=new M;class ex extends Hl{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),n.position.copy(lo),ya.copy(n.position),ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ya),n.updateMatrixWorld(),i.makeTranslation(-lo.x,-lo.y,-lo.z),vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh)}}class Sr extends Co{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ex}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tx extends Hl{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bu extends Co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new tx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nx extends Co{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ix extends as{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Bi.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Bi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Bi.add(e,l),s.manager.itemStart(e)}}class ku{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yh(){return performance.now()}const Wl="\\[\\]\\.:\\/",sx=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",ox="[^"+Wl.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",Xl),ax=/(WCOD+)?/.source.replace("WCOD",ox),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),hx=new RegExp("^"+rx+ax+lx+cx+"$"),ux=["material","materials","bones","map"];class dx{constructor(e,t,n){const i=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qt{constructor(e,t,n){this.path=t,this.parsedPath=n||qt.parseTrackName(t),this.node=qt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qt.Composite(e,t,n):new qt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(e){const t=hx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ux.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=qt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qt.Composite=dx;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);const zu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fx=new Lr(-1,1,1,-1,0,1);class px extends Pt{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const mx=new px;class ql{constructor(e){this._mesh=new ht(mx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gx extends $s{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wo.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ql(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Mh extends $s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class _x extends $s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class xx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ge);this._width=n.width,this._height=n.height,t=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gx(zu),this.copyPass.material.blending=xi,this.clock=new ku}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Mh!==void 0&&(r instanceof Mh?n=!0:r instanceof _x&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vx extends $s{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const yx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qs extends $s{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Jn(s,r,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Jn(s,r,{type:vi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Jn(s,r,{type:vi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const a=yx;this.highPassUniforms=wo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ge(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=zu;this.copyUniforms=wo.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new re,this.oldClearAlpha=1,this.basic=new In,this.fsQuad=new ql(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ge(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=qs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}qs.BlurDirectionX=new Ge(1,0);qs.BlurDirectionY=new Ge(0,1);const Mx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Sx extends $s{constructor(){super();const e=Mx;this.uniforms=wo.clone(e.uniforms),this.material=new F_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ql(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Tt.getTransfer(this._outputColorSpace)===Wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===El?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$h&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Gu(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new yn(o);return n.needsUpdate=!0,n}function bx(o=8500,e=14e3){const t=new Yt;t.name="Procedural_Starfield";const n=new Float32Array(o*3),i=new Float32Array(o*3),s=[new re(10205439),new re(13293823),new re(16316415),new re(16774378),new re(16765601),new re(16754795)];for(let p=0;p<o;p++){const y=Math.random(),b=Math.random(),x=y*2*Math.PI;let P=Math.acos(2*b-1);Math.random()<.35&&(P=Math.PI*.5+(Math.random()-.5)*.32);const E=e*(.55+.45*Math.random()),T=Math.sin(P);n[p*3]=E*T*Math.cos(x),n[p*3+1]=E*Math.cos(P),n[p*3+2]=E*T*Math.sin(x);const S=s[Math.floor(Math.random()*s.length)],v=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=S.r*v,i[p*3+1]=S.g*v,i[p*3+2]=S.b*v}const r=new Pt;r.setAttribute("position",new St(n,3)),r.setAttribute("color",new St(i,3));const a=Gu(),l=e/14e3,c=new Pn({size:28*l,map:a,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:_n,sizeAttenuation:!0}),h=new Ln(r,c);t.add(h);const u=500,d=new Float32Array(u*3),f=new Float32Array(u*3);for(let p=0;p<u;p++){const y=Math.random()*2*Math.PI,b=Math.acos(2*Math.random()-1),x=e*.72;d[p*3]=x*Math.sin(b)*Math.cos(y),d[p*3+1]=x*Math.cos(b),d[p*3+2]=x*Math.sin(b)*Math.sin(y);const P=s[p%s.length];f[p*3]=P.r,f[p*3+1]=P.g,f[p*3+2]=P.b}const g=new Pt;g.setAttribute("position",new St(d,3)),g.setAttribute("color",new St(f,3));const _=new Pn({size:56*l,map:a,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:_n});t.add(new Ln(g,_)),t.renderOrder=-80,h.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const y=X.clamp(p,0,1);c.opacity=.92*y,_.opacity=.95*y,t.visible=y>.015},t}class wx{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=(Math.random()-.5)*28,n[s*3+1]=(Math.random()-.5)*18,n[s*3+2]=-Math.random()*55;this.geometry=new Pt,this.geometry.setAttribute("position",new St(n,3)),this.material=new Pn({color:new re(16758892),size:.42,map:Gu(),transparent:!0,opacity:0,depthWrite:!1,blending:_n}),this.points=new Ln(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let s=0;s<this.streakCount;s++){const r=Math.random()*Math.PI*2,a=3.5+Math.random()*22,l=Math.cos(r)*a,c=Math.sin(r)*a*.72,h=-8-Math.random()*95,u=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:h,len:u}),i[s*6]=l,i[s*6+1]=c,i[s*6+2]=h,i[s*6+3]=l,i[s*6+4]=c,i[s*6+5]=h-u}this.streakGeometry=new Pt,this.streakGeometry.setAttribute("position",new St(i,3)),this.streakMaterial=new Bl({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:_n}),this.streakLines=new Du(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=X.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=X.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const s=this.geometry.attributes.position,r=s.array,a=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=r[l*3+2]+a;c>2&&(c=-52-Math.random()*12,r[l*3]=(Math.random()-.5)*28,r[l*3+1]=(Math.random()-.5)*18),r[l*3+2]=c}s.needsUpdate=!0}if(this.pulseFactor=X.lerp(this.pulseFactor,X.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const s=this.streakGeometry.attributes.position,r=s.array,a=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const h=this.streakSeeds[c];h.z+=a,h.z>4&&(h.z=-95-Math.random()*25);const u=h.z-h.len*l;r[c*6]=h.x,r[c*6+1]=h.y,r[c*6+2]=h.z,r[c*6+3]=h.x,r[c*6+4]=h.y,r[c*6+5]=u}s.needsUpdate=!0}}}class Ex{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new M,this.angularVelocity=new M,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.altitudeContext={surfaceAltitude:9999,planetRadius:220,atmoTopAlt:320,groundFloorAlt:.9,minSpeed:8,submergedRatio:0,planetCenter:new M,prevPlanetCenter:new M,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new M,planetQuatDelta:new mt},this._tmpToShip=new M,this.enabled=!0,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov,this._bindEvents()}setEnabled(e){if(this.enabled=!!e,!this.enabled){this.isDragging=!1;for(const t of Object.keys(this.keys))this.keys[t]=!1;typeof document<"u"&&document.pointerLockElement===this.domElement&&document.exitPointerLock&&document.exitPointerLock()}}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{this.enabled&&!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{this.enabled&&e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.enabled||!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=X.clamp(-t*.011,-.52,.52);this.targetBankAngle=X.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{if(!this.enabled)return;const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=X.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){if(!(!this.enabled&&t))switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,minSpeed:s,submergedRatio:r,planetCenter:a,prevPlanetCenter:l,hasPlanet:c,inGravityWell:h,planetDeltaPos:u,planetQuatDelta:d}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||220,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*1.45,this.altitudeContext.groundFloorAlt=i??.9,this.altitudeContext.minSpeed=s??8,this.altitudeContext.submergedRatio=X.clamp(r??0,0,1),a?(this.altitudeContext.planetCenter.copy(a),this.altitudeContext.prevPlanetCenter.copy(l||a),this.altitudeContext.hasPlanet=c!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!h,u?this.altitudeContext.planetDeltaPos.copy(u):this.altitudeContext.planetDeltaPos.set(0,0,0),d?this.altitudeContext.planetQuatDelta.copy(d):this.altitudeContext.planetQuatDelta.identity()}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:s=!1,onComplete:r=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const a=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new M(0,1,0)}));this.autopilot={startPos:a,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:s,onComplete:r}}setPose(e,t,n=new M(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(100,this.altitudeContext.atmoTopAlt),i=X.clamp(t/n,0,1),s=X.smoothstep(t,n,n+1350),r=this.altitudeContext.minSpeed??8,a=X.lerp(1,.48,this.altitudeContext.submergedRatio||0),l=X.lerp(r,38,Math.pow(i,.78))*a,c=X.lerp(l,260,Math.pow(s,1.1)),h=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&h){const m=X.lerp(X.lerp(.22,.56,i),1,s);this.pulseDriveCharge=X.lerp(this.pulseDriveCharge,m,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=X.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const u=this.keys.boost&&h?Math.min(1,this.pulseDriveCharge/Math.max(.2,X.lerp(.22,1,s))):this.pulseDriveCharge,d=X.lerp(2.2,3.05,i),g=X.lerp(d,5.8,s),_=X.lerp(1,g,Math.min(1,u));return c*this.speedMultiplier*_}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell){const c=this.altitudeContext.planetQuatDelta;c.x*c.x+c.y*c.y+c.z*c.z>1e-14?(this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.prevPlanetCenter).applyQuaternion(c),this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip),this.shipQuaternion.premultiply(c).normalize(),this.velocity.applyQuaternion(c),this.camera.quaternion.copy(this.shipQuaternion)):this.camera.position.add(this.altitudeContext.planetDeltaPos)}if(this.autopilot){this.autopilot.elapsed+=t;const c=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),h=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2,{targetPos:u,lookAtPos:d,upVec:f,useCurveNow:g}=this.autopilot.poseProvider(h,c,this.autopilot.startPos),_=this.camera.position.clone();this.autopilot.useDirectCurve||g?this.camera.position.copy(u):this.camera.position.lerpVectors(this.autopilot.startPos,u,h);const m=this.camera.clone();m.position.copy(this.camera.position),m.up.copy(f||new M(0,1,0)),m.lookAt(d),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,m.quaternion,this.autopilot.useDirectCurve?Math.min(1,h*2.2):Math.min(1,h*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(_).divideScalar(t);const p=this.autopilot.useDirectCurve?Math.sin(c*Math.PI)*9:Math.sin(c*Math.PI)*18,y=this.baseFov+p;if(this.camera.fov=X.lerp(this.camera.fov,y,.25),this.camera.updateProjectionMatrix(),c>=1){const b=this.autopilot.onComplete;this.autopilot=null,this.velocity.multiplyScalar(.15),b&&b()}return}if(!this.enabled){this.angularVelocity.set(0,0,0);return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const c=new mt().setFromAxisAngle(new M(1,0,0),this.angularVelocity.x),h=new mt().setFromAxisAngle(new M(0,1,0),this.angularVelocity.y),u=new mt().setFromAxisAngle(new M(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(h),this.shipQuaternion.multiply(c),this.shipQuaternion.multiply(u),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=X.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const s=new mt().setFromAxisAngle(new M(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(s);const r=new M((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),a=this._computeAdaptiveSpeedLimits(t);if(r.lengthSq()>0){r.normalize(),r.applyQuaternion(this.shipQuaternion);const c=r.multiplyScalar(a),h=X.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(c,1-Math.exp(-h*t))}else{const c=X.lerp(3.4,6.2,this.altitudeContext.submergedRatio||0);this.velocity.multiplyScalar(Math.exp(-c*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0)}if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const c=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,h=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),u=h.length();if(u>1e-4&&u<c){const d=h.divideScalar(u);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(d,c);const f=this.velocity.dot(d);f<0&&this.velocity.addScaledVector(d,-f)}}const l=this.baseFov+this.pulseDriveCharge*18.5;Math.abs(this.camera.fov-l)>.05&&(this.camera.fov=X.lerp(this.camera.fov,l,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function Ft(o,e=!1){const t=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),s={},r={},a=o[0].morphTargetsRelative,l=new Pt;let c=0;for(let h=0;h<o.length;++h){const u=o[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<o.length;++d){const f=o[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=o[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Sh(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<r[h].length;++_)f.push(r[h][_][d]);const g=Sh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Sh(o){let e,t,n,i=-1,s=0;for(let c=0;c<o.length;++c){const h=o[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const r=new e(s),a=new St(r,t,n);let l=0;for(let c=0;c<o.length;++c){const h=o[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else r.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function bh(o,e){if(e===Cd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===fl||e===cu){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===fl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Ax extends as{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ix(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Xx(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=vo.extractUrlBase(e);r=vo.resolveURL(c,this.path)}else r=vo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Tr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vu){try{r[Ct.KHR_BINARY_GLTF]=new qx(e)}catch(u){i&&i(u);return}s=JSON.parse(r[Ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ov(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ct.KHR_MATERIALS_UNLIT:r[u]=new Px;break;case Ct.KHR_DRACO_MESH_COMPRESSION:r[u]=new Yx(s,this.dracoLoader);break;case Ct.KHR_TEXTURE_TRANSFORM:r[u]=new Kx;break;case Ct.KHR_MESH_QUANTIZATION:r[u]=new jx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Tx(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cx{constructor(e){this.parser=e,this.name=Ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],wn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Sr(h),c.distance=u;break;case"spot":c=new J_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Px{constructor(){this.name=Ct.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,n){const i=[];e.color=new re(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],wn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Gt))}return Promise.all(i)}}class Rx{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Ix{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(a,a)}return Promise.all(s)}}class Lx{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Dx{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Nx{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],wn)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Gt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Ux{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Fx{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(a[0],a[1],a[2],wn),Promise.all(s)}}class Ox{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Bx{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(a[0],a[1],a[2],wn),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Gt)),Promise.all(s)}}class kx{constructor(e){this.parser=e,this.name=Ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class zx{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class Gx{constructor(e){this.parser=e,this.name=Ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Vx{constructor(e){this.parser=e,this.name=Ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hx{constructor(e){this.parser=e,this.name=Ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Wx{constructor(e){this.name=Ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Xx{constructor(e){this.name=Ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new rt,m=new M,p=new mt,y=new M(1,1,1),b=new pt(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,_.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const P=l[x];b.instanceColor=new gl(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Ot.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Vu="glTF",co=12,wh={JSON:1313821514,BIN:5130562};class qx{constructor(e){this.name=Ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-co,s=new DataView(e,co);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===wh.JSON){const c=new Uint8Array(e,co+r,a);this.content=n.decode(c)}else if(l===wh.BIN){const c=co+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=xl[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=xl[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ds[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,wn,d)})})}}class Kx{constructor(){this.name=Ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jx{constructor(){this.name=Ct.KHR_MESH_QUANTIZATION}}class Hu extends To{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+u;for(let x=0;x!==a;x++){const P=r[_+x+a],E=r[_+x+l]*h,T=r[g+x+a],S=r[g+x]*h;s[x]=y*P+b*E+m*T+p*S}return s}}const Zx=new mt;class $x extends Hu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Zx.fromArray(s).normalize().toArray(s),s}}const zn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eh={9728:Rn,9729:On,9984:Jh,9985:mr,9986:uo,9987:gi},Ah={33071:Oi,33648:br,10497:zi},Ma={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qx={CUBICSPLINE:void 0,LINEAR:So,STEP:Mo},Sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jx(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),o.DefaultMaterial}function $i(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ev(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function tv(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nv(o){let e;const t=o.extensions&&o.extensions[Ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ba(t.attributes):e=o.indices+":"+ba(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+ba(o.targets[n]);return e}function ba(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function vl(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sv=new rt;class ov{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Tx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Z_(this.options.manager):this.textureLoader=new ix(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return $i(s,a,i),mi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(vo.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Ma[i.type],a=Ds[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new St(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=Ma[i.type],c=Ds[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(y);b||(_=new c(a,p*f,i.count*f/h),b=new Cu(_,f/h),t.cache.add(y,b)),m=new Eo(b,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new St(_,l,g);if(i.sparse!==void 0){const p=Ma.SCALAR,y=Ds[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,P=new y(r[1],b,i.sparse.count*p),E=new c(r[2],x,i.sparse.count*l);a!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,S=P.length;T<S;T++){const v=P[T];if(m.setX(v,E[T*l]),l>=2&&m.setY(v,E[T*l+1]),l>=3&&m.setZ(v,E[T*l+2]),l>=4&&m.setW(v,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Eh[d.magFilter]||On,h.minFilter=Eh[d.minFilter]||gi,h.wrapS=Ah[d.wrapS]||zi,h.wrapT=Ah[d.wrapT]||zi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rn&&h.minFilter!==On,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new un(_);m.needsUpdate=!0,d(m)}),t.load(vo.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),mi(u,r),u.userData.mimeType=r.mimeType||iv(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[Ct.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Pn,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Bl,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ke}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[Ct.KHR_MATERIALS_UNLIT]){const u=i[Ct.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],wn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=$t);const h=s.alphaMode||Sa.OPAQUE;if(h===Sa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Sa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==In&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==In&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==In){const u=s.emissiveFactor;a.emissive=new re().setRGB(u[0],u[1],u[2],wn)}return s.emissiveTexture!==void 0&&r!==In&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Gt)),Promise.all(c).then(function(){const u=new r(a);return s.name&&(u.name=s.name),mi(u,s),t.associations.set(u,{materials:e}),s.extensions&&$i(i,u,s),u})}createUniqueName(e){const t=qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Th(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=nv(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Ct.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Th(new Pt,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?Jx(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=r[f];let p;const y=c[f];if(m.mode===zn.TRIANGLES||m.mode===zn.TRIANGLE_STRIP||m.mode===zn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new __(_,y):new ht(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===zn.TRIANGLE_STRIP?p.geometry=bh(p.geometry,cu):m.mode===zn.TRIANGLE_FAN&&(p.geometry=bh(p.geometry,fl));else if(m.mode===zn.LINES)p=new Du(_,y);else if(m.mode===zn.LINE_STRIP)p=new kl(_,y);else if(m.mode===zn.LINE_LOOP)p=new y_(_,y);else if(m.mode===zn.POINTS)p=new Ln(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&tv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),mi(p,s),m.extensions&&$i(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&$i(i,u[0],s),u[0];const d=new Yt;s.extensions&&$i(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tn(X.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Lr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u){a.push(u);const d=new rt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ol(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,b=d.length;y<b;y++){const x=d[y],P=f[y],E=g[y],T=_[y],S=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const v=n._createAnimationTracks(x,P,E,T,S);if(v)for(let w=0;w<v.length;w++)p.push(v[w])}return new H_(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,sv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Iu:c.length>1?h=new Yt:c.length===1?h=c[0]:h=new Ot,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),mi(h,s),s.extensions&&$i(n,h,s),s.matrix!==void 0){const u=new rt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Yt;n.name&&(s.name=i.createUniqueName(n.name)),mi(s,n),n.extensions&&$i(t,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ei||d instanceof un)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,l=[];Li[s.path]===Li.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Li[s.path]){case Li.weights:c=Hs;break;case Li.rotation:c=Ws;break;case Li.position:case Li.scale:c=Xs;break;default:switch(n.itemSize){case 1:c=Hs;break;case 2:case 3:default:c=Xs;break}break}const h=i.interpolation!==void 0?Qx[i.interpolation]:So,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Li[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vl(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ws?$x:Hu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rv(o,e,t){const n=e.attributes,i=new wi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new M(l[0],l[1],l[2]),new M(c[0],c[1],c[2])),a.normalized){const h=vl(Ds[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new M,l=new M;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=vl(Ds[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new oi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function Th(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=xl[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return Tt.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),mi(o,e),rv(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ev(o,e.targets,t):o})}const wa=new WeakMap;class av extends as{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Tr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Gt,n).catch(n)}decodeDracoFile(e,t,n,i,s=wn,r=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(r)}decodeGeometry(e,t){const n=JSON.stringify(t);if(wa.has(e)){const l=wa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),wa.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Pt;e.index&&t.setIndex(new St(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,a=i.itemSize,l=new St(r,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(r instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Gt)return;const n=new re;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Tt.toWorkingColorSpace(n,Gt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Tr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=lv.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function lv(){let o,e;onmessage=function(r){const a=r.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(r,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let y,b;if(c.useUniqueIDs)b=h[m],y=a.GetAttributeByUniqueId(d,b);else{if(b=a.GetAttributeId(d,r[h[m]]),b===-1)continue;y=a.GetAttribute(d,b)}const x=i(r,a,d,m,p,y);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===r.TRIANGULAR_MESH&&(_.index=n(r,a,d)),r.destroy(d),_}function n(r,a,l){const h=l.num_faces()*3,u=h*4,d=r._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:f,itemSize:1}}function i(r,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=s(r,h),p=r._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,m,_,p);const y=new h(r.HEAPF32.buffer,p,g).slice();return r._free(p),{name:c,array:y,itemSize:d}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}const yl={uSunViewPos:{value:new M}};function k(o,e,t){let n=Math.imul(o|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Ut(o,e,t){const n=Math.floor(o),i=Math.floor(e),s=Math.floor(t),r=o-n,a=e-i,l=t-s,c=r*r*(3-2*r),h=a*a*(3-2*a),u=l*l*(3-2*l),d=k(n,i,s),f=k(n+1,i,s),g=k(n,i+1,s),_=k(n+1,i+1,s),m=k(n,i,s+1),p=k(n+1,i,s+1),y=k(n,i+1,s+1),b=k(n+1,i+1,s+1),x=d+(f-d)*c,P=g+(_-g)*c,E=m+(p-m)*c,T=y+(b-y)*c,S=x+(P-x)*h,v=E+(T-E)*h;return(S+(v-S)*u)*2-1}function Vn(o,e,t,n=4){let i=0,s=.5,r=1;for(let a=0;a<n;a++)i+=s*Ut(o*r+a*17.31,e*r-a*9.7,t*r+a*3.3),r*=2.03,s*=.5;return i}function Kt(o,e,t){const n=Math.min(1,Math.max(0,(t-o)/(e-o)));return n*n*(3-2*n)}function is(o,e){const t=document.createElement("canvas");return t.width=o,t.height=e,t}function cv(o=[0,1,0]){return[o,[-o[0],-o[1],-o[2]],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(t=>{const n=new M(...t).normalize(),i=Math.abs(n.y)<.9?new M(0,1,0):new M(1,0,0),s=new M().crossVectors(n,i).normalize(),r=new M().crossVectors(n,s).normalize();return{h:n,e1:s,e2:r}})}const Et=[{id:"hometree",name:"Gran Árbol Madre (Hometree)",shortName:"Árbol-Casa",theta:.045,phi:-.55,landBoostRad:.24,elevMode:"valley",viewAlt:.092,viewBack:.11},{id:"hallelujah",name:"Montañas Aleluya",shortName:"Aleluya",theta:.38,phi:1.15,landBoostRad:.22,elevMode:"bay",viewAlt:.135,viewBack:.145},{id:"rookery",name:"Nido de Ikran (Ikran Rookery)",shortName:"Nido Ikran",theta:1.06,phi:3.65,landBoostRad:.25,elevMode:"canyon",viewAlt:.105,viewBack:.125},{id:"souls",name:"Árbol de las Almas (Tree of Souls)",shortName:"Árbol Almas",theta:1.54,phi:5.15,landBoostRad:.26,elevMode:"crater",viewAlt:.078,viewBack:.105},{id:"mushrooms",name:"Bosque de Setas Gigantes y Géiseres",shortName:"Setas / Géiseres",theta:2.28,phi:2.1,landBoostRad:.25,elevMode:"basin",viewAlt:.082,viewBack:.11},{id:"ashland",name:"Tierra de Ceniza (Pueblo Ash)",shortName:"Ceniza / Volcanes",theta:1.88,phi:.72,landBoostRad:.34,elevMode:"ash",viewAlt:.115,viewBack:.145},{id:"metkayina",name:"Arrecife Metkayina (Aldea y Abismo)",shortName:"Metkayina",theta:1.18,phi:2.15,landBoostRad:.32,elevMode:"reef",viewAlt:.068,viewBack:.098}].map(o=>{const e=Math.sin(o.theta);return{...o,capDir:new M(e*Math.cos(o.phi),Math.cos(o.theta),e*Math.sin(o.phi)).normalize()}}),hv=[{v:Et[0].capDir,bias:.25},{v:Et[1].capDir,bias:.22},{v:Et[2].capDir,bias:.24},{v:Et[3].capDir,bias:.26},{v:Et[4].capDir,bias:.29},{v:new M(.12,-.78,-.22).normalize(),bias:.23},{v:new M(-.05,-.94,.32).normalize(),bias:.24},{v:new M(.45,.62,-.64).normalize(),bias:.18}],uv=[{v:Et[6].capDir,bias:.39},{v:new M(-.82,.05,.57).normalize(),bias:.39},{v:new M(-.08,.18,.98).normalize(),bias:.32},{v:new M(-.82,-.34,-.45).normalize(),bias:.38},{v:new M(-.55,-.4,.1).normalize(),bias:.31},{v:new M(-.38,-.68,-.62).normalize(),bias:.3}],dv=[{v:Et[5].capDir,bias:.36},{v:new M(.93,-.15,.33).normalize(),bias:.3},{v:new M(.74,-.6,.28).normalize(),bias:.25},{v:new M(.55,-.18,.81).normalize(),bias:.28}];function Ur(o=[0,1,0]){const e=new M(o[0],o[1],o[2]).normalize(),t=new mt().setFromUnitVectors(new M(0,1,0),e),n=Et.map(i=>({...i,sphereDir:i.capDir.clone().applyQuaternion(t).normalize()}));return n.nationSites={forest:hv.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),water:uv.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),ash:dv.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),metkayinaDir:n[6].sphereDir,ashDir:n[5].sphereDir,soulsDir:n[3].sphereDir,mushDir:n[4].sphereDir},n}const fv=Ur([0,1,0]);function Yl(o,e,t,n,i=5){const s=n?.nationSites?n:fv,{forest:r,water:a,ash:l}=s.nationSites;let c=-9;for(let L=0;L<r.length;L++){const N=r[L],Y=o*N.v.x+e*N.v.y+t*N.v.z+N.bias;Y>c&&(c=Y)}let h=-9;for(let L=0;L<a.length;L++){const N=a[L],Y=o*N.v.x+e*N.v.y+t*N.v.z+N.bias;Y>h&&(h=Y)}let u=-9;for(let L=0;L<l.length;L++){const N=l[L],Y=o*N.v.x+e*N.v.y+t*N.v.z+N.bias;Y>u&&(u=Y)}const d=Vn(o*2.2+4.1,e*2.2-1.7,t*2.2+2.9,Math.min(3,i))*.052,f=Ut(o*6.8+1.3,e*6.8-2.1,t*6.8+3.4)*.016,g=Ut(o*3.1-2.2,e*3.1+1.9,t*3.1-.8)*.038,_=c+d+f,m=h-d*.85,p=u+g,y=Math.max(_,p),b=m-y,x=p-Math.max(_,m);let P="forest";x>0&&p>m?P="ash":b>0&&(P="water");const E=Kt(-.035,.045,x),T=Kt(-.035,.045,b)*(1-E),S=Math.max(0,1-E-T),v=Math.abs(p-_),w=Math.exp(-Math.pow(v/.068,2))*(1-Kt(-.02,.08,b));let A=0,F=0;if(P==="water"){const L=Kt(0,.14,b),N=s.nationSites.metkayinaDir,Y=X.clamp(o*N.x+e*N.y+t*N.z,-1,1),J=Math.acos(Y);if(A=-.02-L*.34,J<.145){const oe=1-J/.145;A=X.lerp(-.085,-.155,oe),F=.72+.28*oe}else if(b>.045){const oe=Math.exp(-Math.pow((J-.28)/.17,2)),he=Kt(.14,.34,b)*.48,be=1-Math.abs(Ut(o*4.4+2.7,e*4.4-1.3,t*4.4+.8)),U=Vn(o*8.5+3.1,e*8.5-1.9,t*8.5+2.4,Math.min(3,i)),V=oe*.48+he*.22+Math.pow(Math.max(0,be),3.6)*.52+U*.26;if(V>.72)A=.012+Math.min(.085,(V-.72)*.48),F=.9;else if(V>.38){const te=Kt(.38,.72,V);A=X.lerp(-.14,-.008,te),F=te*.95}}}else if(P==="ash"){const L=Kt(0,.11,x),N=Vn(o*4.1-1.3,e*4.1+2.2,t*4.1-.9,Math.min(4,i))*.06;A=X.lerp(.06,.3,L)+Math.max(-.02,N)+w*.16}else{const L=Math.max(0,_-m),N=Kt(0,.12,L),Y=Vn(o*3.6+1.2,e*3.6-.8,t*3.6-2.4,Math.min(4,i))*.075;A=X.lerp(.015,.28,N)+Math.max(0,Y)+w*.16}let I=0;for(let L=0;L<5;L++){const N=s[L],Y=N.sphereDir,J=Math.acos(X.clamp(o*Y.x+e*Y.y+t*Y.z,-1,1));if(J<N.landBoostRad){const oe=1-J/N.landBoostRad,he=oe*oe*(3-2*oe);if(N.elevMode==="bay"?A=Math.max(A,.14+he*.18):A=Math.max(A,.16+he*.24),(N.elevMode==="crater"||N.elevMode==="basin")&&J<.11){const be=1-J/.11;I=Math.max(I,be*be*.0024)}}}const G=1-Math.abs(Ut(o*5.6+1.9,e*5.6-3.4,t*5.6+.7)),z=Math.max(0,A-.12)*Math.pow(Math.max(0,G),2.1)+w*.28,O=Vn(o*8.2+4.1,e*8.2-2.3,t*8.2+.9,3);return{cont:A,ridge:G,highlandRidge:z,craterDepression:I,forestFactor:S,waterFactor:T,ashFactor:E,reefFactor:F,borderMountain:w,forestClump:O,nation:P}}function pv(o,e,t,n=[0,1,0]){const i=new M(n[0],n[1],n[2]).normalize(),s=i.x,r=i.y,a=i.z,l=o==="p1"?Ur([s,r,a]):null,c=is(e,t),h=is(e,t),u=is(e,t),d=c.getContext("2d").createImageData(e,t),f=h.getContext("2d").createImageData(e,t),g=u.getContext("2d").createImageData(e,t),_=d.data,m=f.data,p=g.data,y=new Float32Array(e),b=new Float32Array(e);for(let S=0;S<e;S++){const v=(S+.5)/e*Math.PI*2;y[S]=Math.cos(v),b[S]=Math.sin(v)}const x=o==="p4"?cv([s,r,a]):null;for(let S=0;S<t;S++){const v=(S+.5)/t*Math.PI,w=Math.sin(v),A=Math.cos(v);for(let F=0;F<e;F++){const I=-y[F]*w,G=b[F]*w,z=I*s+A*r+G*a,O=(S*e+F)*4;let L=0,N=0,Y=0,J=0,oe=0,he=0,be=.5;if(o==="p4"){let V=-2,te=-2,se=0;for(let ce=0;ce<x.length;ce++){const le=x[ce].h,Fe=I*le.x+A*le.y+G*le.z;Fe>V?(te=V,V=Fe,se=ce):Fe>te&&(te=Fe)}const de=x[se],fe=Math.acos(Math.min(1,V)),_e=Math.atan2(I*de.e2.x+A*de.e2.y+G*de.e2.z,I*de.e1.x+A*de.e1.y+G*de.e1.z);let Pe=Math.abs(Math.cos(fe*95));Pe*=Pe,Pe*=Pe,Pe*=Pe,Pe*=Pe;const ye=Kt(.008,.02,fe);let Se=Math.abs(Math.cos(_e*12));Se*=Se,Se*=Se,Se*=Se,Se*=Se,Se*=Se;const W=Se*Kt(.02,.07,fe)*(1-Kt(.45,.9,fe)),Je=1-Kt(0,.014,V-te),We=k(Math.floor(I*140),Math.floor(A*140),Math.floor(G*140)),je=k(Math.floor(I*700)+3,Math.floor(A*700),Math.floor(G*700)),Ee=Ut(I*6,A*6,G*6)*.5+.5,nt=(je>.6?1:0)*(.35+.65*We)*(.4+.6*Ee),Le=Pe*.85*ye+W*.8+Je*1.1+nt*.45;let D,C,j;We<.33?(D=1,C=.74,j=.32):We<.66?(D=1,C=.88,j=.62):(D=1,C=.52,j=.18),J=Le*D,oe=Le*C,he=Le*j;const ue=.11+.1*We+.05*Ee+.06*Pe*ye;L=ue*1.05,N=ue,Y=ue*.95,be=.4+.3*We+.2*Pe}else if(o==="p2"){let V=Vn(I*2.2+5.1,A*2.2,G*2.2,5);z>.62&&(V=Math.max(V,.14+(z-.62)*1.4));const te=V>.02,se=(V-.02)/.06,de=Math.exp(-se*se),fe=k(Math.floor(I*520),Math.floor(A*520),Math.floor(G*520)),_e=k(Math.floor(I*90)+7,Math.floor(A*90),Math.floor(G*90)),Pe=Ut(I*7+2,A*7,G*7)*.5+.5;if(z>.48&&z<=.79){const ye=Kt(.48,.58,z)*(1-Kt(.75,.795,z)),Se=Ut(I*14+3,A*14,G*14)*.5+.5,W=.23+.14*Se,Je=.1+.06*Se,We=.06+.03*Se;L=.08*(1-ye)+W*ye,N=.08*(1-ye)+Je*ye,Y=.09*(1-ye)+We*ye,J=0,oe=0,he=0,be=.45+.25*Se}else if(z>.79&&z<=.942){const ye=fe>.86?.14+.12*_e:0;J=ye*.92,oe=ye*(_e>.5?.48:.2),he=ye*.14,L=.05+.03*_e,N=.055+.03*_e,Y=.065+.03*_e,be=.48+.2*_e}else if(te){const ye=z>.942?.85:0,Se=(fe>.52?1:0)*(de*1.1+.14*Pe+ye)*(.42+.58*_e);let W,Je,We;Pe>.62?(W=1,Je=.16,We=.62):_e>.5?(W=.1,Je=.85,We=1):(W=.65,Je=.8,We=1),J=Se*W,oe=Se*Je,he=Se*We,L=.07+.04*_e,N=.08+.04*_e,Y=.1+.05*_e,be=.55+V*.4}else{const ye=Kt(-.35,.02,V);L=.01+.02*ye,N=.03+.04*ye,Y=.06+.06*ye,be=.3}}else if(o==="p3"){let V=Vn(I*1.8+11,A*1.8,G*1.8,5);z>.84&&(V=Math.max(V,.08+(z-.84)*.8));const te=1-Math.abs(Ut(I*7+3,A*7,G*7)),se=Math.max(0,V-.12)*te*te*3*(z>.9?.2:1),de=Ut(I*14,A*14,G*14);if(V>0)be=.45+V*.6+se*.6,A<-.9||A>.93?(L=.9,N=.93,Y=.96):se>.6?(L=.88,N=.9,Y=.94):se>.25?(L=.36,N=.31,Y=.26):de>.3&&z<.9?(L=.07,N=.2,Y=.07):(L=.15+.04*de,N=.34+.05*de,Y=.11),k(Math.floor(I*300),Math.floor(A*300),Math.floor(G*300))>.996&&(J=.9,oe=.62,he=.3);else{const fe=Kt(-.25,0,V);L=.02+.03*fe,N=.08+.12*fe,Y=.22+.13*fe,(A<-.92||A>.94)&&(L=.88,N=.92,Y=.96),be=.3+V*.3}}else{const{cont:V,highlandRidge:te,forestFactor:se,ashFactor:de,reefFactor:fe,borderMountain:_e,nation:Pe}=Yl(I,A,G,l),ye=Ut(I*11,A*11,G*11),Se=Ut(I*28+2.1,A*28,G*28-1.4)*.5+.5,W=Vn(I*6.5-3.2,A*6.5+1.4,G*6.5,3)*.5+.5;if(Pe==="ash"&&V>0){const Je=.125+.085*Se+.03*ye,We=Math.min(1,te*2.2+_e*.55);L=X.lerp(Je*1.06,.24,We*.6),N=X.lerp(Je*.98,.22,We*.6),Y=X.lerp(Je*1.04,.24,We*.6);const Ee=Math.pow(Math.max(0,1-Math.abs(Ut(I*18+4.1,A*18,G*18-2.3))),16)*de*.72;L=Math.min(1,L+Ee*.32),N=Math.min(1,N+Ee*.07),J=Ee*.78,oe=Ee*.16,he=Ee*.02,be=.58+de*.28+te*.42}else if(V>0)if(Pe==="water"){const Je=Kt(0,.032,V);L=X.lerp(.84,.15+.04*Se,Je),N=X.lerp(.79,.42+.08*W,Je),Y=X.lerp(.61,.18+.03*Se,Je),be=.46+V*1.2}else{const Je=Kt(.28,.78,W);L=X.lerp(.088,.145,Je)+.035*Se,N=X.lerp(.235,.355,Je)+.055*ye,Y=X.lerp(.105,.148,Je)+.022*Se;const We=Kt(.55,.85,Se)*(1-Math.min(1,te*3));L=X.lerp(L,.22,We*.42),N=X.lerp(N,.4,We*.38);const je=Math.min(1,te*2.6+_e*.72);L=X.lerp(L,.28,je*.65),N=X.lerp(N,.31,je*.58),Y=X.lerp(Y,.29,je*.62);const Ee=Kt(.22,.44,te);L=X.lerp(L,.68,Ee*.52),N=X.lerp(N,.74,Ee*.52),Y=X.lerp(Y,.72,Ee*.52);const nt=Math.pow(Math.max(0,1-Math.abs(Ut(I*13+1.2,A*13-.7,G*13+2.4))),22);if(nt>.22&&te<.14){const ce=(nt-.22)*1.1;L=X.lerp(L,.04,ce),N=X.lerp(N,.28,ce),Y=X.lerp(Y,.34,ce)}const Le=k(Math.floor(I*260),Math.floor(A*260),Math.floor(G*260)),D=Kt(.45,.85,W)*(Le>.965?.36:0),C=nt>.3?(nt-.3)*.28:0,j=(D+C)*se*(1-je*.85),ue=Se>.52;J=j*(ue?.22:.04),oe=j*(ue?.12:.34),he=j*.38,be=.48+V*.58+te*.45}else{const Je=Kt(-.36,-.06,V),We=X.lerp(.031,.055,Je),je=X.lerp(.149,.263,Je),Ee=X.lerp(.29,.459,Je),nt=Kt(-.085,0,V),Le=Math.min(1,Math.max(fe*.92,nt*.85)),D=Kt(.45,.98,Le),C=X.lerp(.11,.22,D),j=X.lerp(.639,.839,D),ue=X.lerp(.62,.769,D);L=X.lerp(We,C,Le),N=X.lerp(je,j,Le),Y=X.lerp(Ee,ue,Le);const ce=Le*Kt(.55,.95,Se)*.26;J=ce*.04,oe=ce*.34,he=ce*.38,be=.28+Le*.06}}_[O]=L*255,_[O+1]=N*255,_[O+2]=Y*255,_[O+3]=255,m[O]=J*255,m[O+1]=oe*255,m[O+2]=he*255,m[O+3]=255;const U=be*255;p[O]=U,p[O+1]=U,p[O+2]=U,p[O+3]=255}}c.getContext("2d").putImageData(d,0,0),h.getContext("2d").putImageData(f,0,0),u.getContext("2d").putImageData(g,0,0);const P=new yn(c);P.colorSpace=Gt,P.anisotropy=8;const E=new yn(h);E.colorSpace=Gt,E.anisotropy=8;const T=new yn(u);return{map:P,emissiveMap:E,bumpMap:T}}function mv(o,e=1024,t=512,n=[0,1,0]){const i=new M(n[0],n[1],n[2]).normalize(),s=i.x,r=i.y,a=i.z,l=is(e,t),c=l.getContext("2d"),h=c.createImageData(e,t),u=h.data,d={p1:{lo:.04,hi:.34,col:[1,1,1],k:.92,cyclonic:!0},p2:{lo:-.18,hi:.25,col:[.2,.22,.28],k:.9},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[o]||{lo:.1,hi:.4,col:[1,1,1],k:.7},f=d.cyclonic?[{v:new M(-.45,.42,.78).normalize(),spin:2.35,radius:.55},{v:new M(.62,.54,-.57).normalize(),spin:-2.15,radius:.48},{v:new M(.18,-.46,.87).normalize(),spin:2.05,radius:.5},{v:new M(-.74,-.35,-.57).normalize(),spin:-2.25,radius:.52},{v:new M(.78,-.18,.6).normalize(),spin:1.85,radius:.44}]:null,g=new Float32Array(e),_=new Float32Array(e);for(let p=0;p<e;p++){const y=(p+.5)/e*Math.PI*2;g[p]=Math.cos(y),_[p]=Math.sin(y)}for(let p=0;p<t;p++){const y=(p+.5)/t*Math.PI,b=Math.sin(y),x=Math.cos(y);for(let P=0;P<e;P++){const E=-g[P]*b,T=_[P]*b,S=E*s+x*r+T*a;let v=0;if(d.cyclonic&&f){let A=E,F=x,I=T,G=0;for(let Y=0;Y<f.length;Y++){const J=f[Y],oe=A*J.v.x+F*J.v.y+I*J.v.z;if(oe>.62){const he=Math.acos(Math.min(1,oe)),be=Math.exp(-Math.pow(he/J.radius,2)*2.6),U=J.spin*be*(1-Math.min(1,he/J.radius)*.4),V=Math.cos(U),te=Math.sin(U),se=J.v.x,de=J.v.y,fe=J.v.z,_e=de*I-fe*F,Pe=fe*A-se*I,ye=se*F-de*A,Se=oe;A=A*V+_e*te+se*Se*(1-V),F=F*V+Pe*te+de*Se*(1-V),I=I*V+ye*te+fe*Se*(1-V),G+=be*.24}}const z=Ut(A*2.2+1.5,F*4.5,I*2.2-.8)*.42,O=Vn(A*3.1+14+z,F*5.6,I*3.1-z,5),L=Ut(A*9.5+3,F*12,I*9.5)*.08,N=O+G*.55+L;v=Kt(d.lo,d.hi,N)*d.k}else{const A=Ut(E*2+4,x*2,T*2)*.35,F=Vn(E*3.2+20+A,x*5,T*3.2-A,5);v=Kt(d.lo,d.hi,F)*d.k,d.clearNorth&&(v*=1-Kt(.78,.9,S))}const w=(p*e+P)*4;u[w]=d.col[0]*255,u[w+1]=d.col[1]*255,u[w+2]=d.col[2]*255,u[w+3]=v*255}}c.putImageData(h,0,0);const m=new yn(l);return m.colorSpace=Gt,m.anisotropy=8,m}function gv(o,e=.06){o.onBeforeCompile=t=>{t.uniforms.uSunViewPos=yl.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},o.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function _v(){const o=is(128,128),e=o.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(255, 255, 255, 0.92)"),t.addColorStop(.35,"rgba(242, 248, 255, 0.56)"),t.addColorStop(.7,"rgba(215, 232, 255, 0.18)"),t.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new yn(o);return n.needsUpdate=!0,n}function Ch(o,e){return new an({uniforms:{uCloudMap:{value:o},uSunPosition:{value:new M(0,0,0)},uPlanetCenter:{value:new M(0,0,0)},uAmbientColor:{value:new re(e.ambient)},uSunColor:{value:new re(e.sunlit)},uHorizonColor:{value:new re(e.horizon)},uOpacity:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1,side:$t})}function xv(){const o=new ln(28e3,48,32),e=new an({uniforms:{uLocalUp:{value:new M(0,1,0)},uSunDir:{value:new M(0,.2,1)},uZenithColor:{value:new re(1991880)},uMidColor:{value:new re(5155054)},uHorizonColor:{value:new re(16760171)},uSunGlowColor:{value:new re(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1}},vertexShader:`
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
      varying vec3 vWorldPos;

      void main() {
        #include <logdepthbuf_fragment>
        if (uAtmoOpacity < 0.004) discard;

        vec3 rDelta = vWorldPos - cameraPosition;
        vec3 rayDir = length(rDelta) > 0.0001 ? normalize(rDelta) : vec3(0.0, 1.0, 0.0);
        vec3 upDir = length(uLocalUp) > 0.0001 ? normalize(uLocalUp) : vec3(0.0, 1.0, 0.0);
        vec3 sDir = length(uSunDir) > 0.0001 ? normalize(uSunDir) : vec3(0.0, 0.0, 1.0);

        float elev = dot(rayDir, upDir);
        float skyH = clamp((elev - uHorizonDot) / max(0.12, 1.0 - uHorizonDot), 0.0, 1.0);

        // Gradiente horizonte -> cielo medio -> cenit
        vec3 col = mix(uHorizonColor, uMidColor, smoothstep(0.0, 0.26, skyH));
        col = mix(col, uZenithColor, smoothstep(0.24, 0.92, skyH));

        // Dispersión Mie alrededor del Sol protegida contra pow(<=0) y picos HDR
        float sDot = max(dot(rayDir, sDir), 0.0001);
        float sunGlow = pow(sDot, 6.0) * 0.42 + pow(sDot, 2.0) * 0.16;
        col += uSunGlowColor * sunGlow * (1.0 - skyH * 0.55);
        col = clamp(col, 0.0, 4.0);

        float alpha = mix(1.0, uZenithAlpha, smoothstep(0.16, 0.8, skyH)) * uAtmoOpacity;
        gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:bn}),t=new ht(o,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t}function vv(o,e=157.5){const t=o.localRadius,n=new Yt;n.name=`${o.id}_Orbital_Globe`;const i=o.capLocalDir?o.capLocalDir.clone().normalize():new M(0,1,0),s=[i.x,i.y,i.z],r={p4:[2048,1024],p2:[1536,768],p1:[1536,768]}[o.id]||[1024,512],{map:a,emissiveMap:l,bumpMap:c}=pv(o.id,r[0],r[1],s),h={p1:{ei:.56,rough:.72,metal:.06,bump:1.45,floor:0},p2:{ei:1.75,rough:.55,metal:.35,bump:.6,floor:.04},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[o.id],u=new ke({map:a,emissiveMap:l,emissive:new re(1,1,1),emissiveIntensity:h.ei,roughness:h.rough,metalness:h.metal,bumpMap:c,bumpScale:h.bump});gv(u,h.floor);const d=new ht(new ln(t,128,128),u);d.name=`${o.id}_Orbital_Surface`,n.add(d);const f=o.id==="p1"?[1536,768]:[1024,512],g=mv(o.id,f[0],f[1],s),_={p1:{ambient:4942728,sunlit:16777215,horizon:10279148},p2:{ambient:860724,sunlit:6205136,horizon:1066082},p3:{ambient:8165566,sunlit:16777215,horizon:16039028},p4:{ambient:6434840,sunlit:16763016,horizon:14446130}}[o.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},m=Ch(g,_),p=new ht(new ln(t*1.012,128,128),m);p.name=`${o.id}_Low_Cloud_Shell`,n.add(p);const y=Ch(g,_),b=new ht(new ln(t*1.024,128,128),y);b.name=`${o.id}_High_Cloud_Shell`,n.add(b);const x=new Yt;x.name=`${o.id}_Lower_Cloud_Puffs_Group`,x.visible=!1,n.add(x);const P=380,E=new Float32Array(P*3),T=18/e,S=45/e,v=new mt().setFromUnitVectors(new M(0,1,0),i),w=new M;for(let z=0;z<P;z++){const O=Math.acos(1-k(z,2,17)*.42),L=k(z,9,5)*Math.PI*2,N=T+k(z,4,13)*(S-T),Y=t+N;w.set(Y*Math.sin(O)*Math.cos(L),Y*Math.cos(O),Y*Math.sin(O)*Math.sin(L)),w.applyQuaternion(v),E[z*3]=w.x,E[z*3+1]=w.y,E[z*3+2]=w.z}const A=new Pt;A.setAttribute("position",new St(E,3));const F=new Pn({map:_v(),color:_.sunlit,size:46,transparent:!0,opacity:0,depthWrite:!1,fog:!1,sizeAttenuation:!0}),I=new Ln(A,F);x.add(I);const G=Wu(o,t,o.id==="p4"?1.034:1.052);return n.add(G),{group:n,surfaceMesh:d,upperCloudMesh:b,lowerCloudGroup:x,lowerCloudMesh:p,lowerCloudPuffs:I,cloudDeckPalette:_,atmosphere:G}}function Wu(o,e,t=1.045){const n=new ln(e*t,96,96),i={p1:[6083327,9627391],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[o.id]||[6866175,16755285],s=new an({uniforms:{uColorDay:{value:new re(i[0])},uColorHorizon:{value:new re(i[1])},uSunPosition:{value:new M(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
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
        vec3 col = mix(uColorHorizon, uColorDay, twilight);
        float alpha = fresnel * sunLight * uAltitudeFade * 0.9;
        vec3 outCol = clamp(col * (1.2 + fresnel * 0.7), 0.0, 4.0);
        gl_FragColor = vec4(outCol, clamp(alpha, 0.0, 0.9));
      }
    `,transparent:!0,depthWrite:!1,blending:_n,side:si}),r=new ht(n,s);return r.name=`${o.id}_Fresnel_Atmosphere`,r}function yv(o,e=1400){const t=o.localRadius,n=o.id==="p4",i=256,s=is(i,i),r=is(i,i),a=s.getContext("2d"),l=r.getContext("2d");a.fillStyle=n?"#2a2c31":"#111821",a.fillRect(0,0,i,i),l.fillStyle="#000000",l.fillRect(0,0,i,i);const c=n?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let y=4;y<i;y+=8)for(let b=3;b<i;b+=6)Math.random()<(n?.55:.42)&&(l.fillStyle=c[Math.random()*c.length|0],l.fillRect(b,y,3,4));const h=new yn(s);h.colorSpace=Gt;const u=new yn(r);u.colorSpace=Gt;const d=new nn(1,1,1);d.translate(0,.5,0);const f=new ke({map:h,emissiveMap:u,emissive:new re(1,1,1),emissiveIntensity:n?1.6:2,roughness:.42,metalness:.7}),g=new pt(d,f,e);g.name=`${o.id}_Horizon_Tower_Band`;const _=new Ot,m=new M(0,1,0),p=new M;for(let y=0;y<e;y++){const b=.118+Math.pow(k(y,3,9),.85)*.38,x=k(y,7,1)*Math.PI*2;p.set(Math.sin(b)*Math.cos(x),Math.cos(b),Math.sin(b)*Math.sin(x)),_.position.copy(p).multiplyScalar(t*.998),_.quaternion.setFromUnitVectors(m,p),_.rotateY(k(y,2,2)*Math.PI);const P=t*(.0024+.0042*k(y,5,5)),E=t*(.0024+.0042*k(y,6,8)),T=t*(.006+.025*Math.pow(k(y,9,4),1.6));_.scale.set(P,T,E),_.updateMatrix(),g.setMatrixAt(y,_.matrix)}return g.instanceMatrix.needsUpdate=!0,g}function Mv(o,e,t,n){o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1),o.updateMatrixWorld(!0);const i=n==="p2",s=new M(0,1,0),r=e/t,a=i?124:152;function l(y,b,x,P=!1){const E=Math.sqrt(y*y+x*x),T=Math.min(1.18,E/(r*.94)),S=Math.atan2(x,y),v=Math.sin(T),w=v*Math.cos(S),A=Math.cos(T),F=v*Math.sin(S);let I=b;if(P){const O=X.smoothstep(E,a*.65,a*1);I=X.lerp(b,i?-36:-18,O)}const G=n==="p3"?14.5:i?16.5:.4,z=Math.max(r*.9,r+I+G);return{px:z*w,py:z*A-r,pz:z*F,nx:w,ny:A,nz:F}}const c=new rt().copy(o.matrixWorld).invert(),h=[],u=new Map;o.traverse(y=>{if(y.isMesh&&y.geometry){const b=new rt().multiplyMatrices(c,y.matrixWorld);h.push({mesh:y,initRootMat:b}),u.set(y.geometry,(u.get(y.geometry)||0)+1)}});for(const{mesh:y,initRootMat:b}of h)y.parent!==o&&o.attach(y),b.decompose(y.position,y.quaternion,y.scale),y.updateMatrix();const d=new M,f=new mt,g=new M,_=new M,m=new mt,p=new M;for(const{mesh:y,initRootMat:b}of h){if(i){if(/^NC_FarHorizon/.test(y.name)){y.visible=!1;continue}if(/^NC_Canyon_Skyscraper/.test(y.name)&&(d.setFromMatrixPosition(b),Math.hypot(d.x,d.z)>128)){y.visible=!1;continue}}const x=u.get(y.geometry)||1,P=/Terrain|River|Ground|Forest|Canal/.test(y.name);if(x===1||P){x>1&&(y.geometry=y.geometry.clone());const E=y.geometry.attributes.position,T=new rt().copy(b).invert();for(let S=0;S<E.count;S++){p.fromBufferAttribute(E,S).applyMatrix4(b);const v=l(p.x,p.y,p.z,P);p.set(v.px,v.py,v.pz).applyMatrix4(T),E.setXYZ(S,p.x,p.y,p.z)}E.needsUpdate=!0,y.geometry.computeVertexNormals(),y.geometry.computeBoundingBox(),y.geometry.computeBoundingSphere()}else{if(b.decompose(d,f,g),i&&/^NC_Canyon_Skyscraper/.test(y.name)){const T=Math.hypot(d.x,d.z),S=1-X.smoothstep(T,95,128)*.46;g.y*=S}const E=l(d.x,d.y,d.z,!1);_.set(E.nx,E.ny,E.nz).normalize(),m.setFromUnitVectors(s,_),y.position.set(E.px,E.py,E.pz),y.quaternion.copy(m).multiply(f),y.scale.copy(g),y.updateMatrix()}}o.scale.setScalar(t),o.position.set(0,e,0),o.updateMatrixWorld(!0)}const ft=1/3.5,jn=new M(0,1,0);function Ph(o,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,32);i.addColorStop(0,o),i.addColorStop(.45,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new yn(t);return s.needsUpdate=!0,s}function Xu(o){const e=o.clone().normalize(),t=Math.abs(e.x)<.85?new M(1,0,0):new M(0,0,1),n=new M().crossVectors(e,t).normalize(),i=new M().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Sv(){const o=[],e=new Dn([new M(0,0,0),new M(.05,.35,-.02),new M(-.04,.72,.04),new M(.02,1,-.01)]);o.push(new Bn(e,6,.075,5,!1).toNonIndexed());const t=[[new M(.02,.48,.01),new M(.32,.76,.14)],[new M(-.02,.62,.03),new M(-.28,.92,-.18)],[new M(0,.78,.02),new M(.18,1.12,-.22)],[new M(.02,.56,-.02),new M(-.22,.82,.25)]];for(const[i,s]of t){const r=i.clone().lerp(s,.5).add(new M(0,.06,0)),a=new Dn([i,r,s]);o.push(new Bn(a,4,.026,4,!1).toNonIndexed())}const n=Ft(o,!1);return n.computeVertexNormals(),n}function bv(){const o=[];for(let a=-2;a<=2;a++){const l=new ti(.36,.95,2,3);l.translate(a*.14,.48,Math.sin(a*.9)*.06),l.rotateZ(-a*.22),o.push(l.toNonIndexed())}const e=Ft(o,!1);e.computeVertexNormals();const t=[];for(let a=0;a<6;a++){const l=a/6*Math.PI*2,c=a===0?0:.28,h=a===0?1:.55+k(a,3,7)*.45,u=new Jt(.11,.08,h,6,1);u.translate(Math.cos(l)*c,h*.5,Math.sin(l)*c),u.rotateZ((k(a,2,5)-.5)*.22),t.push(u.toNonIndexed())}const n=Ft(t,!1);n.computeVertexNormals();const i=[],s=new Jt(.32,.4,.28,8);s.translate(0,.14,0),i.push(s.toNonIndexed());for(let a=0;a<10;a++){const l=a/10*Math.PI*2,c=new xn(.065,.72,4);c.translate(0,.36,0),c.rotateX(.55),c.rotateY(l),c.translate(Math.cos(l)*.22,.2,Math.sin(l)*.22),i.push(c.toNonIndexed())}const r=Ft(i,!1);return r.computeVertexNormals(),{fanGeo:e,tubeGeo:n,anemoneGeo:r}}function wv(){const o=[];for(let t=0;t<2;t++){const n=new ti(.24,1,2,8);n.translate(0,.5,0);const i=n.attributes.position;for(let s=0;s<i.count;s++){const r=i.getY(s),a=i.getX(s)+Math.sin(r*Math.PI*3)*.14,l=Math.cos(r*Math.PI*2.5+t*1.57)*.1;i.setXYZ(s,a,r,l)}n.rotateY(t*Math.PI*.5),n.computeVertexNormals(),o.push(n.toNonIndexed())}const e=Ft(o,!1);return e.computeVertexNormals(),e}function Ev(o,e,t,n){const i=Xu(e.capDir),s=new Yt;s.name="Pandora_Biome_AshPeople";const r=(V,te,se=0)=>{const de=i.upDir.clone().addScaledVector(i.e1,V).addScaledVector(i.e2,te).normalize(),fe=t(de.x,de.y,de.z);return{pos:de.clone().multiplyScalar(o+fe.elev+se),normal:de,elev:fe.elev,nation:fe.nation}},a=[];for(let V=0;V<18;V++){const te=V/18*Math.PI*2+k(V,3,9)*.25,se=[];for(let _e=0;_e<=8;_e++){const Pe=_e/8,ye=.018+Pe*.16,Se=Math.sin(Pe*7+V*1.3)*.018,W=Math.cos(te)*ye-Math.sin(te)*Se,Je=Math.sin(te)*ye+Math.cos(te)*Se;se.push(r(W,Je,8e-4).pos)}const de=new Dn(se),fe=new Bn(de,14,(.0014+V%3*5e-4)*ft,4,!1).toNonIndexed();a.push(fe)}const l=new ke({color:3871240,emissive:16726792,emissiveIntensity:.42,roughness:.35});l.userData.animatedEmissive=!0,n.push({mat:l,dayColor:5117962,nightColor:16736792,dayEmissive:14166022,nightEmissive:16729608,dayEI:.42,nightEI:2.55,pulsePhase:.4});const c=new ht(Ft(a,!1),l);c.name="Pandora_Ash_Lava_Fissures",s.add(c);const h=new ke({vertexColors:!0,roughness:.94,metalness:.06}),u=[{lx:-.045,lz:.032,rad:.145*ft,h:.175*ft},{lx:.072,lz:-.048,rad:.115*ft,h:.135*ft},{lx:-.025,lz:-.095,rad:.105*ft,h:.118*ft}],d=[];u.forEach((V,te)=>{const se=r(V.lx,V.lz,-.002),de=new Jt(V.rad*.28,V.rad,V.h,16,8,!1);de.translate(0,V.h*.5,0);const fe=de.attributes.position,_e=new Float32Array(fe.count*3);for(let Se=0;Se<fe.count;Se++){let W=fe.getX(Se),Je=fe.getY(Se);const We=fe.getZ(Se),je=Ut(W*80+te*3.1,Je*50,We*80),Ee=Je/V.h,nt=1+.22*je*(1-Ee*.4);W*=nt;const Le=We*nt;Ee>.92&&Math.hypot(W,Le)<V.rad*.24&&(Je-=V.h*.14),fe.setXYZ(Se,W,Je,Le);const D=.1+.07*(1-Ee)+.04*Math.max(0,je);_e[Se*3]=D,_e[Se*3+1]=D*.95,_e[Se*3+2]=D*.98}de.setAttribute("color",new St(_e,3)),de.computeVertexNormals();const Pe=new ht(de,h);Pe.position.copy(se.pos),Pe.quaternion.setFromUnitVectors(jn,se.normal),Pe.name=`Pandora_Ash_Volcano_${te+1}`,s.add(Pe);const ye=new ht(new Gl(V.rad*.22,12),l);ye.rotateX(-Math.PI*.5),ye.position.copy(se.pos).addScaledVector(se.normal,V.h*.88),ye.quaternion.copy(Pe.quaternion).multiply(new mt().setFromAxisAngle(new M(1,0,0),-Math.PI*.5)),s.add(ye),d.push({basePos:se.pos.clone().addScaledVector(se.normal,V.h*.94),normal:se.normal.clone(),maxH:(.14+te*.03)*ft,phase:te*2.1})});const f=36,g=d.length*f,_=new Float32Array(g*3),m=new Pt;m.setAttribute("position",new St(_,3));const p=new Pn({size:13.5,map:Ph("rgba(52, 48, 50, 0.72)","rgba(28, 25, 26, 0.28)"),color:3880502,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),y=new Ln(m,p);y.frustumCulled=!1,y.name="Pandora_Ash_Volcano_Smoke",s.add(y);const b=1400,x=new Float32Array(b*3),P=[];for(let V=0;V<b;V++){const te=k(V,3,19)*Math.PI*2,se=Math.sqrt(k(V,7,11))*.24,de=r(Math.cos(te)*se,Math.sin(te)*se,(.006+k(V,5,2)*.22)*ft);x[V*3]=de.pos.x,x[V*3+1]=de.pos.y,x[V*3+2]=de.pos.z,P.push({dir:de.normal,baseAlt:de.pos.length(),phase:k(V,9,4)*Math.PI*2,speed:.04+k(V,2,8)*.06})}const E=new Pt;E.setAttribute("position",new St(x,3));const T=new Pn({size:.58,map:Ph("rgba(160, 150, 145, 0.85)","rgba(90, 80, 75, 0.25)"),color:9471360,transparent:!0,opacity:.52,depthWrite:!1,sizeAttenuation:!0}),S=new Ln(E,T);S.frustumCulled=!1,S.name="Pandora_Ash_Floating_Cinders",s.add(S);const v=440,w=Sv(),A=new ke({color:1775896,roughness:.94,metalness:.05}),F=[],I=new Ot;for(let V=0;V<v*2&&F.length<v;V++){const te=k(V,4,17)*Math.PI*2,se=.045+Math.sqrt(k(V,8,3))*.24,de=r(Math.cos(te)*se,Math.sin(te)*se,-5e-4);if(de.nation!=="ash")continue;const fe=(.018+k(V,2,11)*.028)*ft;I.position.copy(de.pos),I.quaternion.setFromUnitVectors(jn,de.normal),I.rotateY(k(V,6,9)*Math.PI*2),I.rotateX((k(V,1,5)-.5)*.22),I.scale.set(fe,fe,fe),I.updateMatrix(),F.push(I.matrix.clone())}const G=new pt(w,A,Math.max(1,F.length));G.name="Pandora_Ash_Charred_Trees",G.frustumCulled=!1,F.forEach((V,te)=>G.setMatrixAt(te,V)),G.instanceMatrix.needsUpdate=!0,s.add(G);const z=new ke({color:12167830,roughness:.78}),O=new ke({color:2366745,roughness:.92}),L=new ke({color:16755256,emissive:16734740,emissiveIntensity:1.15,roughness:.35});L.userData.animatedEmissive=!0,n.push({mat:L,dayColor:16755256,nightColor:16768376,dayEmissive:16734740,nightEmissive:16738328,dayEI:.95,nightEI:2.65,pulsePhase:1.1});const N=[],Y=[],J=[];for(let V=0;V<6;V++){const te=V/6*Math.PI*2+.3,se=.022,de=r(Math.cos(te)*se,Math.sin(te)*se,2e-4),fe=new mt().setFromUnitVectors(jn,de.normal);for(let Pe=-1;Pe<=1;Pe+=2){const ye=new Dn([new M(Pe*.012*ft,0,0),new M(Pe*.018*ft,.018*ft,.002*ft),new M(0,.032*ft,0)]),Se=new Bn(ye,8,.0018*ft,5,!1).toNonIndexed();Se.applyQuaternion(new mt().setFromAxisAngle(jn,te)),Se.applyQuaternion(fe),Se.translate(de.pos.x,de.pos.y,de.pos.z),Y.push(Se)}const _e=r(Math.cos(te+.25)*.011,Math.sin(te+.25)*.011,5e-4);J.push(_e)}for(let V=0;V<16;V++){const te=V/16*Math.PI*2+k(V,2,7)*.18,se=.018+V%3*.008,de=r(Math.cos(te)*se,Math.sin(te)*se,0),fe=new xn(.0075*ft,.013*ft,6);fe.translate(0,.006*ft,0);const _e=fe.toNonIndexed();_e.rotateY(k(V,4,1)*Math.PI),_e.applyQuaternion(new mt().setFromUnitVectors(jn,de.normal)),_e.translate(de.pos.x,de.pos.y,de.pos.z),N.push(_e)}const oe=new ht(Ft(Y,!1),z);oe.name="Pandora_Ash_Giant_Bone_Totems";const he=new ht(Ft(N,!1),O);he.name="Pandora_Ash_Tribal_Huts",s.add(oe,he);const be=[];J.forEach(V=>{const te=new xn(.003*ft,.009*ft,6).toNonIndexed();te.translate(0,.004*ft,0),te.applyQuaternion(new mt().setFromUnitVectors(jn,V.normal)),te.translate(V.pos.x,V.pos.y,V.pos.z),be.push(te)});const U=new ht(Ft(be,!1),L);return U.name="Pandora_Ash_Bonfires",s.add(U),{group:s,update(V,te){const se=m.attributes.position;d.forEach((fe,_e)=>{for(let Pe=0;Pe<f;Pe++){const ye=_e*f+Pe,Se=(V*.24+fe.phase+Pe/f)%1,W=Se*fe.maxH,Je=Se*.025*ft;se.setXYZ(ye,fe.basePos.x+fe.normal.x*W+Math.sin(ye+V*.5)*Je,fe.basePos.y+fe.normal.y*W+Math.cos(ye)*Je*.5,fe.basePos.z+fe.normal.z*W+Math.cos(ye+V*.4)*Je)}}),se.needsUpdate=!0,p.color.setRGB(X.lerp(.24,.42,te),X.lerp(.22,.16,te),X.lerp(.23,.14,te));const de=E.attributes.position;for(let fe=0;fe<b;fe++){const _e=P[fe],Pe=Math.sin(V*_e.speed+_e.phase)*.004,ye=_e.baseAlt+Math.cos(V*.4+_e.phase)*.003;de.setXYZ(fe,_e.dir.x*ye+Pe,_e.dir.y*ye,_e.dir.z*ye-Pe)}de.needsUpdate=!0}}}function Av(o,e,t,n){const i=Xu(e.capDir),s=new Yt;s.name="Pandora_Biome_MetkayinaReef";const r=(L,N,Y=0)=>{const J=i.upDir.clone().addScaledVector(i.e1,L).addScaledVector(i.e2,N).normalize();return{pos:J.clone().multiplyScalar(o+Y),normal:J}},a=(L,N,Y=0)=>{const J=i.upDir.clone().addScaledVector(i.e1,L).addScaledVector(i.e2,N).normalize(),oe=t(J.x,J.y,J.z);return{pos:J.clone().multiplyScalar(o+oe.elev+Y),normal:J,elev:oe.elev,nation:oe.nation}},l=new ke({color:6045222,roughness:.85}),c=new ke({color:7758908,roughness:.9}),h=new ke({color:16764006,emissive:16746532,emissiveIntensity:.55,roughness:.35});h.userData.animatedEmissive=!0,n.push({mat:h,dayColor:16755268,nightColor:16769160,dayEmissive:16742178,nightEmissive:16747560,dayEI:.45,nightEI:2.55,pulsePhase:1.7});const u=[],d=[],f=[],g=[],_=[];for(let L=0;L<18;L++){const N=L<6?.024:.052+L%3*.012,Y=(L<6?L/6*Math.PI*2:(L-6)/12*Math.PI*2)+k(L,4,3)*.25,J=Math.cos(Y)*N,oe=Math.sin(Y)*N,he=r(J,oe,5e-4),be=new mt().setFromUnitVectors(jn,he.normal).multiply(new mt().setFromAxisAngle(jn,Y+k(L,2,7))),U=(.018+k(L,5,1)*.008)*ft,V=U*1.25;_.push({pos:he.pos.clone(),normal:he.normal.clone(),qOri:be});const te=new nn(U,.0016*ft,V).toNonIndexed();te.translate(0,.0012*ft,0),te.applyQuaternion(be),te.translate(he.pos.x,he.pos.y,he.pos.z),u.push(te);for(let _e=-1;_e<=1;_e+=2){const Pe=new Dn([new M(_e*U*.48,-.0015*ft,-V*.72),new M(_e*U*.56,8e-4*ft,0),new M(_e*U*.48,-.0015*ft,V*.72)]),ye=new Bn(Pe,8,.0014*ft,5,!1).toNonIndexed();ye.applyQuaternion(be),ye.translate(he.pos.x,he.pos.y,he.pos.z),u.push(ye)}const se=U*.65,de=new Jt(.001,U*.56,se,8,1);de.scale(.95,1,1.25),de.translate(0,se*.5+.0018*ft,0);const fe=de.toNonIndexed();fe.applyQuaternion(be),fe.translate(he.pos.x,he.pos.y,he.pos.z),d.push(fe);for(let _e=0;_e<(L%2===0?2:1);_e++){const Pe=_e===0?1:-1,ye=new Jt(4e-4*ft,6e-4*ft,.007*ft,5).toNonIndexed();ye.translate(Pe*U*.45,.004*ft,V*.52),ye.applyQuaternion(be),ye.translate(he.pos.x,he.pos.y,he.pos.z),u.push(ye);const Se=new ln(.0014*ft,6,5).toNonIndexed();Se.translate(Pe*U*.45,.008*ft,V*.52),Se.applyQuaternion(be),Se.translate(he.pos.x,he.pos.y,he.pos.z),f.push(Se)}L<14&&g.push({basePos:he.pos.clone().add(new M(U*.72,-2e-4*ft,0).applyQuaternion(be)),normal:he.normal.clone(),qOri:be,phase:L*.9})}for(let L=0;L<_.length;L++){const N=_[L],Y=L<5?L+1:L===5?0:L<17?L+1:6,J=_[Y],oe=N.pos.distanceTo(J.pos);if(oe>.005*ft&&oe<.16*ft){const he=N.pos.clone().add(J.pos).multiplyScalar(.5).normalize().multiplyScalar(o+9e-4),be=new nn(.0045*ft,.0011*ft,oe).toNonIndexed(),U=J.pos.clone().sub(N.pos).normalize(),V=he.clone().normalize(),te=new M().crossVectors(V,U).normalize();U.crossVectors(te,V).normalize();const se=new rt().makeBasis(te,V,U);se.setPosition(he),be.applyMatrix4(se),u.push(be)}}const m=new ht(Ft(u,!1),l);m.name="Pandora_Metkayina_Rafts_And_Walkways";const p=new ht(Ft(d,!1),c);p.name="Pandora_Metkayina_Woven_Huts";const y=new ht(Ft(f,!1),h);y.name="Pandora_Metkayina_Torches",s.add(m,p,y);const b=new xn(.0022*ft,.022*ft,6);b.rotateX(Math.PI*.5),b.scale(1,.45,1);const x=new pt(b,l,g.length);x.name="Pandora_Metkayina_Moored_Canoes",s.add(x);const{fanGeo:P,tubeGeo:E,anemoneGeo:T}=bv(),S=[{name:"Pandora_Reef_Corals_CyanFans",geo:P,dayCol:2517860,nightCol:62975,nightEm:65512,matrices:[]},{name:"Pandora_Reef_Corals_MagentaTubes",geo:E,dayCol:9192546,nightCol:16725168,nightEm:16720544,matrices:[]},{name:"Pandora_Reef_Corals_CoralAnemones",geo:T,dayCol:10379322,nightCol:16742436,nightEm:16736792,matrices:[]}],v=new Ot;for(let L=0;L<1050;L++){const N=k(L,3,19)*Math.PI*2,Y=Math.sqrt(k(L,7,13))*.165,J=a(Math.cos(N)*Y,Math.sin(N)*Y,0);if(J.nation!=="water"||J.elev>=-.002)continue;const oe=(.009+k(L,5,11)*.016)*ft;v.position.copy(J.pos),v.quaternion.setFromUnitVectors(jn,J.normal),v.rotateY(k(L,2,7)*Math.PI*2),v.scale.set(oe,oe,oe),v.updateMatrix(),S[L%3].matrices.push(v.matrix.clone())}S.forEach((L,N)=>{if(L.matrices.length===0)return;const Y=new ke({color:L.dayCol,emissive:L.nightEm,emissiveIntensity:0,roughness:.55,side:$t});Y.userData.animatedEmissive=!0,n.push({mat:Y,dayColor:L.dayCol,nightColor:L.nightCol,dayEmissive:1057304,nightEmissive:L.nightEm,dayEI:0,nightEI:2.15,pulsePhase:N*1.4});const J=new pt(L.geo,Y,L.matrices.length);J.name=L.name,L.matrices.forEach((oe,he)=>J.setMatrixAt(he,oe)),J.instanceMatrix.needsUpdate=!0,s.add(J)});const w=[];for(let L=0;L<720;L++){const N=k(L,11,5)*Math.PI*2,Y=Math.sqrt(k(L,4,17))*.155,J=a(Math.cos(N)*Y,Math.sin(N)*Y,0);if(J.nation!=="water"||J.elev>=-.014)continue;const oe=Math.abs(J.elev),he=Math.min(oe*.85,(.04+k(L,9,2)*.06)*ft),be=(.012+k(L,6,8)*.012)*ft;v.position.copy(J.pos),v.quaternion.setFromUnitVectors(jn,J.normal),v.rotateY(k(L,1,3)*Math.PI*2),v.scale.set(be,he,be),v.updateMatrix(),w.push(v.matrix.clone())}const A={uTime:{value:0}},F=new ke({color:1730632,emissive:55450,emissiveIntensity:0,roughness:.55,side:$t});if(F.userData.animatedEmissive=!0,F.onBeforeCompile=L=>{L.uniforms.uTime=A.uTime,L.vertexShader=`uniform float uTime;
`+L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float swayAmp = position.y * 0.14;
        transformed.x += sin(uTime * 1.45 + position.y * 6.0) * swayAmp;
        transformed.z += cos(uTime * 1.2 + position.y * 5.0) * swayAmp;`)},n.push({mat:F,dayColor:1730632,nightColor:541256,dayEmissive:798238,nightEmissive:57512,dayEI:0,nightEI:1.05}),w.length>0){const L=new pt(wv(),F,w.length);L.name="Pandora_Reef_Giant_Kelp",w.forEach((N,Y)=>L.setMatrixAt(Y,N)),L.instanceMatrix.needsUpdate=!0,s.add(L)}const I=[];for(let L=0;L<32;L++){const N=k(L,8,21)*Math.PI*2,Y=Math.sqrt(k(L,2,13))*.145,J=r(Math.cos(N)*Y,Math.sin(N)*Y,-.001),oe=.095,he=new Jt(.008*ft,.028*ft,oe,8,1,!0);he.translate(0,-oe*.5,0);const be=he.toNonIndexed(),U=new mt().setFromUnitVectors(jn,J.normal),V=new mt().setFromEuler(new Xn(.18,k(L,3,5)*6.28,.12));be.applyQuaternion(U.multiply(V)),be.translate(J.pos.x,J.pos.y,J.pos.z),I.push(be)}const G=new In({color:new re(.32,.95,1),transparent:!0,opacity:0,depthWrite:!1,blending:_n,side:$t}),z=new ht(Ft(I,!1),G);z.name="Pandora_Reef_Underwater_Caustics",z.visible=!1,s.add(z);const O=new Ot;return{group:s,update(L,N,Y){A.uTime.value=L;for(let J=0;J<g.length;J++){const oe=g[J],he=Math.sin(L*2.1+oe.phase)*45e-5*ft,be=Math.sin(L*1.6+oe.phase)*.06;O.position.copy(oe.basePos).addScaledVector(oe.normal,he),O.quaternion.copy(oe.qOri),O.rotateZ(be),O.scale.set(1,1,1),O.updateMatrix(),x.setMatrixAt(J,O.matrix)}if(x.instanceMatrix.needsUpdate=!0,Y>.01){const J=.78+.22*Math.sin(L*2.4),oe=X.lerp(.28,.08,N);G.opacity=Y*oe*J,z.visible=G.opacity>.005}else z.visible=!1}}}const xe=1/3.5,hn=new M(0,1,0),Kl=new mt().setFromUnitVectors(hn,new M(0,Math.cos(X.degToRad(68)),Math.sin(X.degToRad(68))).normalize()),jl=Ur([0,Math.cos(X.degToRad(68)),Math.sin(X.degToRad(68))]),Ml=[{id:"valley_lake",dir:new M(-.08,.992,.095).normalize(),angRad:.056,waterElev:.0022},{id:"east_lake",dir:new M(.42,.78,.46).normalize(),angRad:.06,waterElev:.0025},{id:"west_lake",dir:new M(-.56,.62,-.55).normalize(),angRad:.058,waterElev:.0024},{id:"souls_lake",dir:new M(.36,-.12,-.92).normalize(),angRad:.062,waterElev:.0025},{id:"mush_lake",dir:new M(-.24,-.78,.58).normalize(),angRad:.058,waterElev:.0024}],Ea=new M,cr=new M;function Tv(o,e,t,n=0){const i=Math.sin(e),s=i*Math.cos(t),r=Math.cos(e),a=i*Math.sin(t),l=o+n;return{pos:new M(l*s,l*r,l*a),normal:new M(s,r,a)}}function Hn(o,e,t,n=Kl,i=jl,s=4){Ea.set(o,e,t).normalize(),cr.copy(Ea).applyQuaternion(n).normalize();const r=cr.x,a=cr.y,l=cr.z,{cont:c,ridge:h,highlandRidge:u,craterDepression:d,forestFactor:f,waterFactor:g,ashFactor:_,reefFactor:m,borderMountain:p,forestClump:y,nation:b}=Yl(r,a,l,i,s);let x=0,P=0;if(b==="forest"&&f>.55)for(let S=0;S<Ml.length;S++){const v=Ml[S],w=Ea.dot(v.dir);if(w>.992){const A=Math.acos(X.clamp(w,-1,1));if(A<v.angRad){const F=1-A/v.angRad;x=Math.max(x,F*F*(3-2*F)),P=v.waterElev}}}let E=0,T="ocean";if(c<=0){const S=X.smoothstep(c,-.34,-.02),v=Ut(r*19,a*19,l*19)*.008,w=-.135*(.45+.55*Math.max(.45,m));E=X.lerp(w,-.0012,S)+v*(1-S*.5),m>.25&&c>-.16&&(E=X.lerp(E,-.022-(1-S)*.085,.65)),T=c>-.16||m>.25?"reef":"ocean"}else{const S=Ut(r*9+1.2,a*9,l*9)*.12,v=Ut(r*9,a*9+2.4,l*9)*.12,w=Vn((r+S)*14+3.1,a*14-1.4,(l+v)*14+2.7,4),A=Math.abs(Ut(r*36,a*36,l*36))*.0025,F=X.smoothstep(c,0,.14),I=X.smoothstep(u,.025,.22)*.015,G=p*(.014+Math.max(0,h)*.012),z=_*(.0065+Math.pow(Math.max(0,h),1.8)*.013);E=F*.0018+Math.max(0,w*.52+.34)*.0072*F+A*F+I+G+z-d,x>.01&&(E=X.lerp(E,P-.0038,x)),E=Math.max(4e-4,E),b==="ash"?T="ash":b==="water"?T="atoll_island":x>.45?T="lake":u>.036||p>.45?T="canyon":T="forest"}return{cont:c,ridge:h,highlandRidge:u,forestFactor:f,waterFactor:g,ashFactor:_,reefFactor:m,borderMountain:p,forestClump:y,lakeBlend:x,lakeWaterElev:P,elev:E,biome:T,nation:b,sx:r,sy:a,sz:l}}function hr(o,e,t,n=0,i=null){const s=i?.qCap||Kl,r=i?.sphereLandmarks||jl;return Hn(o,e,t,s,r,3).elev}function bi(o){const e=o.clone().normalize(),t=Math.abs(e.x)<.85?new M(1,0,0):new M(0,0,1),n=new M().crossVectors(e,t).normalize(),i=new M().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function os(o,e,t,n,i,s,r){const a=e.upDir.clone().addScaledVector(e.e1,t).addScaledVector(e.e2,n).normalize(),l=Hn(a.x,a.y,a.z,s,r,3).elev;return{pos:a.clone().multiplyScalar(o+l+i),normal:a,elev:l}}function Cv(o,e=null){const t=e?.qCap||Kl,n=e?.sphereLandmarks||jl,i=[{anchor:new M(0,1,0),span:.24,angle:.55,amp:.045,steps:42},{anchor:new M(.14,.985,.09).normalize(),span:.2,angle:-1.1,amp:.038,steps:32},{anchor:Et[2].capDir.clone(),span:.24,angle:.8,amp:.038,steps:36},{anchor:Et[3].capDir.clone(),span:.24,angle:2.1,amp:.04,steps:36},{anchor:Et[4].capDir.clone(),span:.2,angle:-.7,amp:.032,steps:32},{anchor:new M(.48,.58,-.65).normalize(),span:.22,angle:1.4,amp:.036,steps:32},{anchor:new M(-.46,.72,-.52).normalize(),span:.22,angle:-1.6,amp:.036,steps:32}],s=[];for(const r of i){const a=bi(r.anchor),l=Math.cos(r.angle),c=Math.sin(r.angle),h=[];for(let u=0;u<=r.steps;u++){const d=u/r.steps,f=(d-.5)*r.span,g=Math.sin(d*Math.PI*2.4)*r.amp,_=f*l-g*c,m=f*c+g*l,p=a.upDir.clone().addScaledVector(a.e1,_).addScaledVector(a.e2,m).normalize(),y=Hn(p.x,p.y,p.z,t,n,3);if(y.nation!=="forest"||y.cont<=.005){if(h.length>=6)break;continue}h.push({theta:Math.acos(X.clamp(p.y,-1,1)),phi:Math.atan2(p.z,p.x),pos:p.clone().multiplyScalar(o+y.elev+55e-5),normal:p,elev:y.elev})}h.length>=6&&s.push(h)}return s}function rs(o,e=1){const t=o.attributes.normal;if(!t)return o;for(let n=0;n<t.count;n++){const i=t.getX(n),s=t.getY(n),r=t.getZ(n),a=Math.hypot(i,s,r);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,s/a,r/a)}return t.needsUpdate=!0,o}function Mi(o,e){const t=o.index?o.toNonIndexed():o,n=new re(e),i=t.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new St(s,3)),t}function Pv(){const o=[],e=new Jt(.032,.14,1,6,1);e.translate(0,.5,0),o.push(Mi(e,4600354));const t=[{y:.44,rad:.34,h:.14,col:1793067},{y:.62,rad:.3,h:.13,col:2254896},{y:.78,rad:.24,h:.12,col:2782774},{y:.93,rad:.16,h:.11,col:3506749}];for(const i of t){const s=new xn(i.rad,i.h,7);s.translate(0,i.y,0),o.push(Mi(s,i.col))}const n=Ft(o,!1);return n.computeVertexNormals(),rs(n,1)}function Rv(){const o=[],e=new Dn([new M(0,0,0),new M(.08,.32,.04),new M(-.05,.68,-.05),new M(.03,.96,.02)]);o.push(Mi(new Bn(e,6,.068,5,!1),4140576));for(let i=0;i<4;i++){const s=i/4*Math.PI*2+.4,r=new Dn([new M(Math.cos(s)*.04,.34,Math.sin(s)*.04),new M(Math.cos(s)*.18,.22,Math.sin(s)*.18),new M(Math.cos(s)*.26,-.02,Math.sin(s)*.26)]);o.push(Mi(new Bn(r,4,.028,4,!1),3680284))}const t=new ln(.42,8,5);t.scale(1.15,.48,1.15),t.translate(.03,.94,.02),o.push(Mi(t,2517550));const n=Ft(o,!1);return n.computeVertexNormals(),rs(n,1)}function Iv(){const o=[],e=new Dn([new M(0,0,0),new M(.06,.38,.03),new M(.14,.78,-.02),new M(.18,1,0)]);o.push(Mi(new Bn(e,6,.052,5,!1),4930344));for(let n=0;n<6;n++){const i=n/6*Math.PI*2,s=new ti(.24,.65,1,2);s.translate(0,.32,0),s.rotateX(1.08),s.rotateY(i),s.translate(.18,.96,0),o.push(Mi(s,3045940))}const t=Ft(o,!1);return t.computeVertexNormals(),rs(t,1)}function Lv(){const o=[];for(let t=0;t<6;t++){const n=t/6*Math.PI*2,i=new ti(.42,.65,1,2);i.translate(0,.32,0),i.rotateX(.92+t%2*.25),i.rotateY(n),o.push(i.toNonIndexed())}const e=Ft(o,!1);return e.computeVertexNormals(),rs(e,1)}function Dv(){const o=[],e=new Vs(.48,0);e.scale(1.2,.65,1),e.translate(0,.22,0),o.push(Mi(e,3885110));const t=new Vs(.32,0);t.scale(1,.72,1.1),t.translate(.38,.14,.24),o.push(Mi(t,2774062));const n=Ft(o,!1);return n.computeVertexNormals(),n}function Nv(){const o=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=new ti(.32,1,2,3),s=i.attributes.position;for(let r=0;r<s.count;r++){const a=X.clamp(s.getY(r)+.5,0,1),l=s.getX(r)*(1-Math.pow(a,1.4)*.85),c=-a*a*.38;s.setXYZ(r,l,a*.52,c+a*.75)}i.rotateX(.45),i.rotateY(n),i.computeVertexNormals(),o.push(i.toNonIndexed())}const e=Ft(o,!1);return e.computeVertexNormals(),rs(e,1)}function qu(){const o=[];for(let t=0;t<5;t++){const n=new xn(.24,.72,4);n.translate(0,.36,0),n.rotateX(.85),n.rotateY(t/5*Math.PI*2),o.push(n.toNonIndexed())}const e=Ft(o,!1);return e.computeVertexNormals(),e}function Uv(){const o=[],e=new ln(1,10,6,0,Math.PI*2,0,Math.PI*.56);e.scale(1,.42,1),e.translate(0,.9,0),o.push(e.toNonIndexed());const t=new Jt(.14,.25,.94,6,1);t.translate(0,.47,0),o.push(t.toNonIndexed());const n=Ft(o,!1);return n.computeVertexNormals(),n}function Yu(){const o=new ln(1,10,5,0,Math.PI*2,0,Math.PI*.52);o.scale(1.05,.28,1.05),o.computeVertexNormals(),rs(o,1);const e=new xn(.96,.18,10,1,!0);return e.rotateX(Math.PI),e.translate(0,-.02,0),e.computeVertexNormals(),rs(e,-1),{outer:o,under:e}}function Fv(o,e,t,n){const i=new Vl(1,2),s=i.attributes.position,r=s.count,a=new Float32Array(r*3),l=new re(2055213),c=new re(2783806),h=new re(3817286),u=new re(1974824),d=new re;for(let f=0;f<r;f++){let g=s.getX(f),_=s.getY(f),m=s.getZ(f);const p=Ut(g*2.7+o*3.1,_*2.4-o,m*2.7+o*1.9),y=Ut(g*5.5+o*7.3,_*4.5,m*5.5);if(_>.15){const b=.25+(_-.15)*.22+.08*p,x=1+.18*p;g*=e*x,m*=t*x,_=n*b,d.copy(l).lerp(c,Math.max(0,y)*.65)}else{const b=Math.min(1,(.15-_)/1.15),x=Math.pow(1-b*.86,1.25),P=1+.34*p+.16*y;g*=e*x*P,m*=t*x*P,_=-n*b*(.85+.25*Math.abs(p)),d.copy(h).lerp(u,b*.72+Math.max(0,-p)*.28)}s.setXYZ(f,g,_,m),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}return i.setAttribute("color",new St(a,3)),i.computeVertexNormals(),i}function Zl(o,e,t,n,i,s,r,a,l,c,h){const u=os(o,e,t,n,-.0025*xe,c,h).pos,d=os(o,e,i,s,-.0025*xe,c,h).pos,f=u.clone().add(d).multiplyScalar(.5).normalize(),g=u.clone().lerp(d,.26).normalize().multiplyScalar(o+r*.74),_=f.clone().multiplyScalar(o+r),m=u.clone().lerp(d,.74).normalize().multiplyScalar(o+r*.76),p=new Dn([u,g,_,m,d]),y=new Bn(p,24,a,8,!1),b=y.attributes.position,x=y.attributes.normal,P=new Float32Array(b.count*3),E=new re(3290942),T=new re(2316332),S=new re(3700796),v=new M,w=new M,A=new re;for(let F=0;F<b.count;F++){v.fromBufferAttribute(b,F),w.fromBufferAttribute(x,F);const I=Ut(v.x*220+l*3.7,v.y*220,v.z*220-l),G=Ut(v.x*520,v.y*520,v.z*520),z=v.clone().normalize(),O=Math.max(0,w.dot(z));v.addScaledVector(w,a*(.36*I+.16*G)),b.setXYZ(F,v.x,v.y,v.z),A.copy(E).lerp(T,Math.pow(O,1.25)),O>.45&&G>.2&&A.lerp(S,.48),P[F*3]=A.r,P[F*3+1]=A.g,P[F*3+2]=A.b}return y.setAttribute("color",new St(P,3)),y.computeVertexNormals(),{geo:y,curve:p,apex:_}}function Ov(o){const e=new Jt(.12,1,1,8,6);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new re(2764600),s=new re(2381356),r=new re(3568190),a=new re;for(let l=0;l<t.count;l++){let c=t.getX(l);const h=t.getY(l);let u=t.getZ(l);const d=Ut(c*3.8+o*2.1,h*4.5,u*3.8-o),f=1+.35*d;c*=f,u*=f,t.setXYZ(l,c,h,u),a.copy(i).lerp(s,X.smoothstep(h,.22,.72)),h>.72&&d>.1&&a.lerp(r,.45),n[l*3]=a.r,n[l*3+1]=a.g,n[l*3+2]=a.b}return e.setAttribute("color",new St(n,3)),e.computeVertexNormals(),e}function Bv(o,e){const t=[],n=[],i=new M,s=new M,r=new M;o.forEach((f,g)=>{const _=f.length,m=e[g]||.008*xe,p=[],y=[],b=[];for(let P=0;P<_;P++){const E=f[P],T=f[Math.max(0,P-1)],S=f[Math.min(_-1,P+1)];i.copy(S.pos).sub(T.pos).normalize(),r.copy(E.normal),s.crossVectors(i,r).normalize();const v=1+.22*Math.sin(P*.45+g),w=m*v,A=w*.24,F=E.pos.clone().addScaledVector(s,-w),I=E.pos.clone().addScaledVector(s,w),G=E.pos.clone().addScaledVector(s,-(w+A)).addScaledVector(r,14e-5),z=E.pos.clone().addScaledVector(s,w+A).addScaledVector(r,14e-5);p.push(F.x,F.y,F.z,I.x,I.y,I.z),y.push(G.x,G.y,G.z,F.x,F.y,F.z),b.push(I.x,I.y,I.z,z.x,z.y,z.z)}const x=P=>{const E=[];for(let S=0;S<_-1;S++){const v=S*2,w=v+1,A=v+2,F=v+3;E.push(v,w,A,w,F,A)}const T=new Pt;return T.setAttribute("position",new Ht(P,3)),T.setIndex(E),T.computeVertexNormals(),T.toNonIndexed()};t.push(x(p)),n.push(x(y),x(b))});const a=Ft(t,!1),l=Ft(n,!1),c=new ke({color:953508,emissive:35e3,emissiveIntensity:0,roughness:.1,metalness:.55,transparent:!0,opacity:.9,depthWrite:!1}),h=new ke({color:1994328,emissive:62975,emissiveIntensity:0,roughness:.4,transparent:!0,opacity:.88,depthWrite:!1}),u=new ht(a,c);u.name="Pandora_Global_Rivers_Water";const d=new ht(l,h);return d.name="Pandora_Global_Rivers_Banks",{waterMesh:u,bankMesh:d,waterMat:c,bankMat:h}}function kv(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512),i=n.data;for(let r=0;r<512;r++)for(let a=0;a<512;a++){const l=Ut(a*.18,r*.18,2.3)*.5+.5,c=k(a,r,37),h=Math.floor(X.clamp((.76+.24*l+.16*(c-.5))*255,130,255)),u=(r*512+a)*4;i[u]=h,i[u+1]=h,i[u+2]=h,i[u+3]=255}t.putImageData(n,0,0);const s=new yn(e);return s.colorSpace=Gt,s.wrapS=zi,s.wrapT=zi,s.repeat.set(42,21),s}function zv(o,e){const i=document.createElement("canvas");i.width=1024,i.height=512;const s=i.getContext("2d"),r=s.createImageData(1024,512),a=r.data,l=Et[3].capDir,c=Et[4].capDir,h=new M;for(let d=0;d<512;d++){const f=(d+.5)/512*Math.PI,g=Math.sin(f),_=Math.cos(f);for(let m=0;m<1024;m++){const p=(m+.5)/1024*Math.PI*2,y=-Math.cos(p)*g,b=Math.sin(p)*g;h.set(y,_,b).applyQuaternion(o);const{cont:x,ashFactor:P,reefFactor:E,nation:T,borderMountain:S}=Yl(h.x,h.y,h.z,e,4);let v=0,w=0,A=0;if(T==="ash"&&x>0){const I=Math.pow(Math.max(0,1-Math.abs(Ut(y*18+4.1,_*18,b*18-2.3))),14);v=I*P*.92,w=I*P*.24,A=I*P*.03}else if(T==="forest"&&x>0){let I=1-Math.abs(Ut(y*24+1,_*24,b*24));I=Math.pow(Math.max(0,I),18);const G=k(Math.floor(y*360),Math.floor(_*360),Math.floor(b*360))>.986?.55:0,z=Math.min(.68,I*.58+G)*(1-Math.min(.9,S));Ut(y*5+9,_*5,b*5)>.1?(v=z*.06,w=z*.78,A=z*.85):(v=z*.58,w=z*.18,A=z*.85);const L=Math.acos(X.clamp(y*l.x+_*l.y+b*l.z,-1,1));if(L<.09){const Y=Math.pow(1-L/.09,1.6);v=Math.min(1,v+Y*.78),w=Math.min(1,w+Y*.38),A=Math.min(1,A+Y*.92)}const N=Math.acos(X.clamp(y*c.x+_*c.y+b*c.z,-1,1));if(N<.09){const Y=Math.pow(1-N/.09,1.7);v=Math.min(1,v+Y*.85),w=Math.min(1,w+Y*.22),A=Math.min(1,A+Y*.72)}}else if(x<=0){const I=Math.max(X.smoothstep(x,-.11,-.002)*.55,E*.58)*.58;v=I*.05,w=I*.75,A=I*.85}const F=(d*1024+m)*4;a[F]=Math.min(255,v*255),a[F+1]=Math.min(255,w*255),a[F+2]=Math.min(255,A*255),a[F+3]=255}}s.putImageData(r,0,0);const u=new yn(i);return u.colorSpace=Gt,u}function Gv(o,e,t,n,i){const s=bi(e.capDir),r=os(o,s,0,0,-.001,t,n),a=new Yt;a.name="Pandora_Landmark_Hometree",a.position.copy(r.pos),a.quaternion.setFromUnitVectors(hn,r.normal);const l=new ke({color:3877405,emissive:337972,emissiveIntensity:0,roughness:.9});i.push({mat:l,dayColor:3877405,nightColor:1449006,dayEmissive:337972,nightEmissive:803410,dayEI:0,nightEI:.45});const c=.56*xe,h=new Jt(.065*xe,.14*xe,c,14,14,!0);h.translate(0,c*.5,0);const u=h.attributes.position;for(let x=0;x<u.count;x++){const P=u.getX(x),E=u.getY(x),T=u.getZ(x),S=E/c,v=S*2.4,w=1+.24*Math.sin(Math.atan2(T,P)*6+v),A=S<.25?1+Math.pow((.25-S)/.25,1.5)*.65:1,F=(P*Math.cos(v*.35)-T*Math.sin(v*.35))*w*A,I=(P*Math.sin(v*.35)+T*Math.cos(v*.35))*w*A;u.setXYZ(x,F,E,I)}h.computeVertexNormals(),a.add(new ht(h,l));for(let x=0;x<14;x++){const P=x/14*Math.PI*2+(k(x,3,7)-.5)*.15,E=(.14+k(x,8,2)*.09)*xe,T=(.12+k(x,5,4)*.18)*xe,S=new Dn([new M(Math.cos(P)*.06*xe,T,Math.sin(P)*.06*xe),new M(Math.cos(P)*E*.62,T*.62,Math.sin(P)*E*.62),new M(Math.cos(P)*E,-.015*xe,Math.sin(P)*E)]);a.add(new ht(new Bn(S,10,.012*xe,6,!1),l))}const d=new ke({color:1992238,emissive:407618,emissiveIntensity:0,roughness:.65});i.push({mat:d,dayColor:1992238,nightColor:537660,dayEmissive:407618,nightEmissive:416876,dayEI:0,nightEI:.72});const f=new ke({color:3041336,emissive:65512,emissiveIntensity:0,roughness:.35,side:$t});i.push({mat:f,dayColor:3041336,nightColor:61695,dayEmissive:1853990,nightEmissive:63743,dayEI:0,nightEI:2.25,pulsePhase:.6});const g=new ke({color:3877405,emissive:16755256,emissiveIntensity:0,roughness:.5});i.push({mat:g,dayColor:3877405,nightColor:16762980,dayEmissive:2759184,nightEmissive:16751144,dayEI:0,nightEI:2.1,pulsePhase:1.4});const _=[.34*xe,.28*xe,.21*xe,.14*xe],m=[.34*xe,.44*xe,.53*xe,.61*xe],{outer:p,under:y}=Yu();for(let x=0;x<_.length;x++){const P=_[x],E=m[x],T=new ht(p,d);T.position.set(0,E,0),T.scale.set(P,P*.9,P),a.add(T);const S=new ht(y,f);S.position.set(0,E-.004*xe,0),S.scale.set(P*.98,P*.9,P*.98),a.add(S)}const b=new ht(new ln(.055*xe,12,8),g);return b.position.set(0,.06*xe,0),a.add(b),{group:a,anchorDir:r.normal,anchorPos:r.pos}}function Vv(o,e,t,n,i){const s=bi(e.capDir),r=os(o,s,0,0,-5e-4,t,n),a=new Yt;a.name="Pandora_Landmark_TreeOfSouls";const l=new ke({vertexColors:!0,emissive:2757704,emissiveIntensity:0,roughness:.85});i.push({mat:l,dayColor:16777215,nightColor:10134724,dayEmissive:1054752,nightEmissive:2497092,dayEI:0,nightEI:.45});for(let x=0;x<7;x++){const P=x/7*Math.PI*2,E=P+Math.PI*.88,T=.072,{geo:S}=Zl(o,s,Math.cos(P)*T,Math.sin(P)*T,Math.cos(E)*T,Math.sin(E)*T,(.145+x%3*.025)*xe,.011*xe,50+x,t,n);a.add(new ht(S,l))}const c=new Yt;c.position.copy(r.pos),c.quaternion.setFromUnitVectors(hn,r.normal),a.add(c);const h=new ke({color:2975798,emissive:9058559,emissiveIntensity:0,roughness:.72});i.push({mat:h,dayColor:2975798,nightColor:1976408,dayEmissive:1194016,nightEmissive:7746303,dayEI:0,nightEI:1.45,pulsePhase:2.1}),c.add(new ht(new Jt(.18*xe,.2*xe,.004*xe,24),h));const u=new ke({color:10392232,emissive:8409296,emissiveIntensity:0,roughness:.7});i.push({mat:u,dayColor:9274e3,nightColor:12759280,dayEmissive:4734036,nightEmissive:9459967,dayEI:0,nightEI:1.1});const d=.25*xe,f=new Jt(.024*xe,.055*xe,d,10,8);f.translate(0,d*.5,0),c.add(new ht(f,u));const g=new ln(.13*xe,12,8);g.scale(1.25,.35,1.25),g.translate(0,d*.96,0),c.add(new ht(g,u));const _=340,m=new Jt(.0014*xe,5e-4*xe,1,4,1);m.translate(0,-.5,0);const p=new ke({color:14076140,emissive:15120639,emissiveIntensity:0,roughness:.28,transparent:!0,opacity:.92});i.push({mat:p,dayColor:14669034,nightColor:16777215,dayEmissive:12560604,nightEmissive:14456575,dayEI:0,nightEI:2.35,pulsePhase:.2});const y=new pt(m,p,_);y.name="Pandora_TreeOfSouls_Filaments";const b=new Ot;for(let x=0;x<_;x++){const P=k(x,4,17)*Math.PI*2,E=(.015+Math.sqrt(k(x,8,11))*.135)*xe,T=(.08+k(x,3,19)*.13)*xe;b.position.set(Math.cos(P)*E,d*.95,Math.sin(P)*E),b.rotation.set((k(x,1,5)-.5)*.14,P,(k(x,2,7)-.5)*.14),b.scale.set(1,T,1),b.updateMatrix(),y.setMatrixAt(x,b.matrix)}return y.instanceMatrix.needsUpdate=!0,c.add(y),{group:a,anchorDir:r.normal,anchorPos:r.pos}}function Hv(o,e,t,n,i,s,r){const a=bi(e.capDir),l=new Yt;l.name="Pandora_Landmark_HallelujahMountains";const c=new ke({vertexColors:!0,emissive:404528,emissiveIntensity:0,roughness:.86,metalness:.06});i.push({mat:c,dayColor:16777215,nightColor:6455448,dayEmissive:795668,nightEmissive:669766,dayEI:0,nightEI:.52});const h=new In({color:new re(.85,.96,1),transparent:!0,opacity:.56,side:$t,depthWrite:!1});i.push({mat:h,dayColorRGB:[.82,.95,1],nightColorRGB:[.42,1.75,2.3],isWaterfall:!0});const u=[],d=32;for(let _=0;_<d;_++){const m=_===0?0:.03+Math.sqrt(k(_,4,11))*.14,p=_*2.39996+k(_,7,3)*.45,y=(_===0?.24:.078+k(_,9,2)*.21)*xe,b=os(o,a,Math.cos(p)*m,Math.sin(p)*m,y,t,n),x=(_===0?.095:.036+k(_,2,5)*.056)*xe,P=x*(.72+k(_,5,8)*.45),E=(_===0?.145:.052+k(_,6,1)*.082)*xe,T=Fv(_+1,x,P,E),S=new ht(T,c);S.position.copy(b.pos),S.quaternion.setFromUnitVectors(hn,b.normal),S.rotateY(k(_,1,8)*Math.PI*2),l.add(S),u.push({pos:b.pos,normal:b.normal,rx:x,rz:P,h:E,alt:y});for(let v=0;v<7;v++){const w=k(_,v,14)*Math.PI*2,A=.25+k(_,v,2)*.55,F=new M(Math.cos(w)*x*A,-E*.34,Math.sin(w)*P*A).applyQuaternion(S.quaternion);r.push({pos:b.pos.clone().add(F),normal:b.normal,length:(.016+k(_,v,8)*.036)*xe})}if(_<15){const v=y+.015*xe,w=(.0065+k(_,12,4)*.0075)*xe,A=new ti(w,v,2,10),F=A.attributes.position;for(let L=0;L<F.count;L++){const N=(F.getY(L)+v*.5)/v;F.setZ(L,Math.sin((1-N)*Math.PI*.5)*.014*xe)}A.computeVertexNormals();const I=k(_,3,6)*Math.PI*2,G=new mt().setFromUnitVectors(hn,b.normal),z=new M(Math.cos(I)*x*.72,0,Math.sin(I)*P*.72).applyQuaternion(G),O=new ht(A,h);O.position.copy(b.pos).add(z).addScaledVector(b.normal,-v*.5+E*.16),O.quaternion.copy(G),O.rotateY(I+Math.PI*.5),l.add(O),s.push({mesh:O,material:h,phase:_*1.17})}}const f=new ke({color:3889196,emissive:59600,emissiveIntensity:0,roughness:.55});i.push({mat:f,dayColor:3889196,nightColor:940132,dayEmissive:1718294,nightEmissive:1114072,dayEI:0,nightEI:1.35});const g=[];for(let _=0;_<d;_++){const m=u[_];let p=-1,y=.25*xe;for(let b=_+1;b<d;b++){const x=u[b],P=m.pos.distanceTo(x.pos);P>(m.rx+x.rx)*.85&&P<y&&(y=P,p=b)}if(p>=0){const b=u[p],x=m.pos.clone().add(b.pos).multiplyScalar(.5);x.add(x.clone().normalize().multiplyScalar(-y*.18));const P=new Dn([m.pos.clone(),x,b.pos.clone()]);g.push(new Bn(P,10,.0014*xe,5,!1).toNonIndexed())}}if(g.length>0){const _=new ht(Ft(g,!1),f);_.name="Pandora_Hallelujah_VineBridges",l.add(_)}return{group:l,islandsData:u,anchorDir:a.upDir,anchorPos:a.upDir.clone().multiplyScalar(o)}}function Wv(o,e,t,n,i,s){const r=bi(e.capDir),a=new Yt;a.name="Pandora_Landmark_IkranRookery";const l=new ke({vertexColors:!0,emissive:407620,emissiveIntensity:0,roughness:.88});i.push({mat:l,dayColor:16777215,nightColor:6453906,dayEmissive:1058840,nightEmissive:672850,dayEI:0,nightEI:.42});const c=[];return[[-.08,-.05,.08,.05,.21*xe,.015*xe],[-.06,.07,.07,-.06,.24*xe,.016*xe],[-.1,.01,.02,.09,.17*xe,.013*xe],[.01,-.09,.09,.02,.18*xe,.013*xe],[-.09,-.02,.05,.07,.15*xe,.012*xe],[-.04,-.08,.08,-.02,.16*xe,.011*xe],[-.07,.04,.03,-.07,.19*xe,.012*xe],[-.03,.08,.09,.06,.14*xe,.011*xe]].forEach(([u,d,f,g,_,m],p)=>{const{geo:y,curve:b,apex:x}=Zl(o,r,u,d,f,g,_,m,10+p,t,n),P=new ht(y,l);P.name=`Pandora_IkranRookery_Arch_${p+1}`,a.add(P),c.push({apex:x,normal:x.clone().normalize()});for(let E=0;E<14;E++){const T=b.getPoint(.2+E/13*.6),S=T.clone().normalize();s.push({pos:T.addScaledVector(S,-m*.65),normal:S,length:(.014+k(E,p,19)*.026)*xe})}}),{group:a,archCenters:c,anchorDir:r.upDir,anchorPos:r.upDir.clone().multiplyScalar(o)}}function Xv(o,e,t,n,i){const s=bi(e.capDir),r=new Yt;r.name="Pandora_Landmark_MushroomGeysers";const a=new ke({color:3880242,emissive:55528,emissiveIntensity:0,roughness:.88});i.push({mat:a,dayColor:3880242,nightColor:1980488,dayEmissive:926246,nightEmissive:59647,dayEI:0,nightEI:1.85});const l=14,c=new Jt(.18,.95,1,9,1);c.translate(0,.5,0);const h=new pt(c,a,l);h.name="Pandora_Geyser_Vents";const u=[],d=new Ot;for(let S=0;S<l;S++){const v=S/l*Math.PI*2+k(S,3,7)*.4,w=.014+k(S,9,2)*.068,A=os(o,s,Math.cos(v)*w,Math.sin(v)*w,-5e-4,t,n),F=(.008+k(S,2,11)*.006)*xe,I=(.014+k(S,5,13)*.012)*xe;d.position.copy(A.pos),d.quaternion.setFromUnitVectors(hn,A.normal),d.scale.set(F,I,F),d.updateMatrix(),h.setMatrixAt(S,d.matrix),u.push({basePos:A.pos.clone().addScaledVector(A.normal,I*.95),normal:A.normal.clone(),phase:k(S,6,4)*Math.PI*2,maxHeight:(.065+k(S,8,9)*.055)*xe})}h.instanceMatrix.needsUpdate=!0,r.add(h);const f=22,g=l*f,_=new Float32Array(g*3),m=new Float32Array(g*3);for(let S=0;S<g;S++)m[S*3]=.78,m[S*3+1]=.94,m[S*3+2]=1;const p=new Pt;p.setAttribute("position",new St(_,3)),p.setAttribute("color",new St(m,3));const y=document.createElement("canvas");y.width=64,y.height=64;const b=y.getContext("2d"),x=b.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(255, 255, 255, 0.85)"),x.addColorStop(.45,"rgba(180, 245, 255, 0.42)"),x.addColorStop(1,"rgba(0, 0, 0, 0.0)"),b.fillStyle=x,b.fillRect(0,0,64,64);const P=new yn(y);P.needsUpdate=!0;const E=new Pn({size:5.5,map:P,vertexColors:!0,transparent:!0,opacity:.48,depthWrite:!1,blending:_n,sizeAttenuation:!0}),T=new Ln(p,E);return T.name="Pandora_Geyser_Plumes",T.frustumCulled=!1,r.add(T),{group:r,geyserEmitters:u,plumeGeo:p,plumeMat:E,puffsPerGeyser:f,anchorDir:s.upDir,anchorPos:s.upDir.clone().multiplyScalar(o)}}function qv(o,e,t,n){const i=new Yt;i.name="Pandora_Inland_Lakes_And_Lilies";const s=[],r=[],a=[],l=[],c=new Ot;Ml.forEach((x,P)=>{const E=bi(x.dir),T=o+x.waterElev,S=8,v=20,w=[],A=[];for(let I=0;I<=S;I++){const z=I/S*x.angRad*.82;for(let O=0;O<=v;O++){const L=O/v*Math.PI*2,N=E.upDir.clone().addScaledVector(E.e1,Math.cos(L)*z).addScaledVector(E.e2,Math.sin(L)*z).normalize();w.push(N.x*T,N.y*T,N.z*T)}}for(let I=0;I<S;I++)for(let G=0;G<v;G++){const z=I*(v+1)+G,O=z+(v+1);A.push(z,z+1,O,z+1,O+1,O)}const F=new Pt;F.setAttribute("position",new Ht(w,3)),F.setIndex(A),F.computeVertexNormals(),s.push(F.toNonIndexed());for(let I=0;I<108;I++){const G=k(I,P+3,19)*Math.PI*2,z=Math.sqrt(k(I,P+7,11))*x.angRad*.72,O=E.upDir.clone().addScaledVector(E.e1,Math.cos(G)*z).addScaledVector(E.e2,Math.sin(G)*z).normalize(),L=(.0045+k(I,P+1,5)*.006)*xe;c.position.copy(O).multiplyScalar(T+18e-5),c.quaternion.setFromUnitVectors(hn,O),c.rotateY(k(I,2,9)*Math.PI*2),c.scale.set(L,L,L),c.updateMatrix(),r.push(c.matrix.clone());const N=L*.65;c.position.copy(O).multiplyScalar(T+38e-5),c.scale.set(N,N,N),c.updateMatrix(),I%2===0?a.push(c.matrix.clone()):l.push(c.matrix.clone())}});const h=new ke({color:955050,emissive:35e3,emissiveIntensity:0,roughness:.08,metalness:.62,transparent:!0,opacity:.88,depthWrite:!1});n.push({mat:h,dayColor:955050,nightColor:279638,dayEmissive:546924,nightEmissive:39116,dayEI:0,nightEI:1.05});const u=new ht(Ft(s,!1),h);u.name="Pandora_Global_Inland_Lakes",i.add(u);const d=new Jt(1,.92,.08,12,1,!1,.25,Math.PI*1.85);d.translate(0,.04,0);const f=new ke({color:2387512,emissive:55448,emissiveIntensity:0,roughness:.52});n.push({mat:f,dayColor:2387512,nightColor:803904,dayEmissive:1062936,nightEmissive:57498,dayEI:0,nightEI:1.35,pulsePhase:1.3});const g=new pt(d,f,r.length);g.name="Pandora_Giant_WaterLilies_Pads",g.frustumCulled=!1,r.forEach((x,P)=>g.setMatrixAt(P,x)),g.instanceMatrix.needsUpdate=!0,i.add(g);const _=qu(),m=new ke({color:14184610,emissive:16726200,emissiveIntensity:0,roughness:.35}),p=new ke({color:5425368,emissive:62975,emissiveIntensity:0,roughness:.35});n.push({mat:m,dayColor:14184610,nightColor:16732872,dayEmissive:4726840,nightEmissive:16723632,dayEI:0,nightEI:2.35,pulsePhase:.4}),n.push({mat:p,dayColor:5425368,nightColor:3735551,dayEmissive:1853520,nightEmissive:62975,dayEI:0,nightEI:2.35,pulsePhase:2});const y=new pt(_,m,a.length);y.name="Pandora_Giant_WaterLilies_PinkFlowers",y.frustumCulled=!1,a.forEach((x,P)=>y.setMatrixAt(P,x)),y.instanceMatrix.needsUpdate=!0;const b=new pt(_,p,l.length);return b.name="Pandora_Giant_WaterLilies_TurqFlowers",b.frustumCulled=!1,l.forEach((x,P)=>b.setMatrixAt(P,x)),b.instanceMatrix.needsUpdate=!0,i.add(y,b),i}function Yv(o){const e=o.localRadius,t=o.capLocalDir?o.capLocalDir.clone().normalize():new M(0,1,0),n=new mt().setFromUnitVectors(hn,t),i=Ur([t.x,t.y,t.z]),s={qCap:n,sphereLandmarks:i},r=new Yt;r.name="Pandora_Global_360_World";const a=[],l=(ne,ge,pe)=>Hn(ne,ge,pe,n,i,4),c=new ln(e,192,128),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),f=new re(270648),g=new re(2274738),_=new re(14208416),m=new re(2911794),p=new re(9213536),y=new re(1793065),b=new re(3889190),x=new re(3817024),P=new re(1841692),E=new re,T=new M;for(let ne=0;ne<u;ne++){T.set(h.getX(ne),h.getY(ne),h.getZ(ne)).normalize();const{cont:ge,highlandRidge:pe,ashFactor:$e,reefFactor:Ve,borderMountain:dt,elev:ve,nation:ee}=Hn(T.x,T.y,T.z,n,i,4);if(h.setXYZ(ne,T.x*(e+ve),T.y*(e+ve),T.z*(e+ve)),ge<=0){const tt=Math.max(X.smoothstep(ge,-.24,0),Ve*.78);E.copy(f).lerp(g,tt)}else if(ee==="water"){const tt=X.smoothstep(ge,.015,.055);E.copy(_).lerp(m,tt)}else{const tt=Ut(T.x*22+3,T.y*22,T.z*22)*.5+.5;E.copy(p).lerp(y,X.smoothstep(ge,0,.075)),E.lerp(b,tt*.52);const Oe=Math.min(.92,pe*3.8+dt*.85);Oe>.02&&E.lerp(x,Oe),($e>.05||ee==="ash")&&E.lerp(P,ee==="ash"?.94:Math.min(1,$e*1.15))}d[ne*3]=E.r,d[ne*3+1]=E.g,d[ne*3+2]=E.b}c.setAttribute("color",new St(d,3)),c.computeVertexNormals();const S=kv(),v=zv(n,i),w=new ke({map:S,vertexColors:!0,emissiveMap:v,emissive:new re(1,1,1),emissiveIntensity:0,roughness:.88,metalness:.04});a.push({mat:w,dayColor:16777215,nightColor:3885146,dayEmissive:16777215,nightEmissive:16777215,dayEI:0,nightEI:1.25});const A=new ht(c,w);A.name="Pandora_Global_Terrain_360",r.add(A);const F=new ke({color:754846,emissive:35512,emissiveIntensity:0,roughness:.12,metalness:.52,transparent:!0,opacity:.72,depthWrite:!1,side:$t});a.push({mat:F,dayColor:754846,nightColor:209478,dayEmissive:284780,nightEmissive:35e3,dayEI:0,nightEI:.72});const I=new ht(new ln(e,112,72),F);I.name="Pandora_Global_Crystal_Ocean",r.add(I);const G=Cv(e,s),z=[.011*xe,.007*xe,.008*xe,.0085*xe,.008*xe,.0075*xe,.0075*xe],{waterMesh:O,bankMesh:L,waterMat:N,bankMat:Y}=Bv(G,z);r.add(O,L);const J=[{waterMat:N,bankMat:Y,phase:.4}],oe=qv(e,n,i,a);r.add(oe);const he=[],be=[],U=new Ot,V=Gv(e,Et[0],n,i,a),te=Hv(e,Et[1],n,i,a,be,he),se=Wv(e,Et[2],n,i,a,he),de=Vv(e,Et[3],n,i,a),fe=Xv(e,Et[4],n,i,a),_e=Ev(e,Et[5],l,a),Pe=Av(e,Et[6],l,a);r.add(V.group,te.group,se.group,de.group,fe.group,_e.group,Pe.group);const ye=bi(Et[0].capDir),Se=new ke({vertexColors:!0,roughness:.88}),W=[...se.archCenters];[[-.02,.05,.07,-.04,.14*xe,.011*xe],[-.07,-.03,.03,.07,.13*xe,.01*xe]].forEach(([ne,ge,pe,$e,Ve,dt],ve)=>{const{geo:ee,apex:tt}=Zl(e,ye,ne,ge,pe,$e,Ve,dt,30+ve,n,i),Oe=new ht(ee,Se);Oe.name=`Pandora_Valley_Arch_${ve+1}`,r.add(Oe),W.push({apex:tt,normal:tt.clone().normalize()})}),W.push({apex:V.anchorPos,normal:V.anchorDir}),W.push({apex:te.anchorPos,normal:te.anchorDir});const Je=new Jt(34e-5*xe,12e-5*xe,1,4,1);Je.translate(0,-.5,0);const We=new ke({color:3894837,emissive:2293720,emissiveIntensity:0,roughness:.42});a.push({mat:We,dayColor:3894837,nightColor:59647,dayEmissive:1719834,nightEmissive:2162648,dayEI:0,nightEI:1.95,pulsePhase:.9});const je=new pt(Je,We,he.length);je.name="Pandora_Global_Hanging_Vines",je.frustumCulled=!1,he.forEach((ne,ge)=>{U.position.copy(ne.pos),U.quaternion.setFromUnitVectors(hn,ne.normal),U.scale.set(1,ne.length,1),U.updateMatrix(),je.setMatrixAt(ge,U.matrix)}),je.instanceMatrix.needsUpdate=!0,r.add(je);const Ee=[],nt=[],Le=[],D=[],C=[],j=[],ue=[],ce=[],le=[],Fe=[],Ae=[],De=[],xt=[],me=[],Te=[],Xe=[],it=[],He=[],_t=[],lt=[],At=[],q=[],we=new re,Z=[7252044,3902540,5023330,9348170,3972738,3112256],ae=ne=>{const ge=Math.floor(ne*Z.length)%Z.length;return we.setHex(Z[ge]),we.offsetHSL((ne-.5)*.04,0,(ne-.5)*.14),we.clone()},Ne=ne=>(we.setRGB(.86+ne*.24,.92+(1-Math.abs(ne-.5)*2)*.22,.8+(1-ne)*.24),we.clone());for(let ne=0;ne<64;ne++){const ge=te.islandsData[ne%te.islandsData.length],pe=k(ne,2,13)*Math.PI*2,$e=Math.sqrt(k(ne,5,2))*.52,Ve=new M(Math.cos(pe)*ge.rx*$e,ge.h*.28,Math.sin(pe)*ge.rz*$e),dt=new mt().setFromUnitVectors(hn,ge.normal);Ve.applyQuaternion(dt);const ve=ge.pos.clone().add(Ve),ee=(.018+k(ne,8,4)*.022)*xe,tt=ee*.65;U.position.copy(ve),U.quaternion.copy(dt),U.rotateY(k(ne,9,9)*Math.PI*2),U.scale.set(ee,ee,ee),U.updateMatrix(),Ee.push(U.matrix.clone()),nt.push(ae(k(ne,3,5))),U.position.copy(ve).addScaledVector(ge.normal,ee*.92),U.scale.set(tt,tt,tt),U.updateMatrix(),Le.push(U.matrix.clone()),(ne%2===0?D:C).push(U.matrix.clone())}const Ue=(1+Math.sqrt(5))*.5,at=44e3,ut=new M,Rt=new M,$=new mt,Re=new M,Be=new M,ot=new M;for(let ne=0;ne<at;ne++){const ge=1-(ne+.5)/at*2,pe=Math.sqrt(Math.max(0,1-ge*ge)),$e=2*Math.PI*ne/Ue+(k(ne,3,17)-.5)*.028;ut.set(Math.cos($e)*pe,ge,Math.sin($e)*pe).normalize();const{cont:Ve,highlandRidge:dt,ashFactor:ve,forestClump:ee,lakeBlend:tt,elev:Oe,biome:Qe,nation:Bt}=Hn(ut.x,ut.y,ut.z,n,i,3),yt=k(ne,11,29),kt=k(ne,19,7),zt=k(ne,23,13);if(Bt==="ash"||ve>.22)continue;if(Bt==="water"){if(Ve<=.002){if(Qe==="reef"&&q.length<520&&yt<.14&&Oe>-.025){Rt.copy(ut).multiplyScalar(e+Oe-2e-4),$.setFromUnitVectors(hn,ut),U.position.copy(Rt),U.quaternion.copy($),U.rotateY(kt*Math.PI*2);const Lt=(.007+kt*.013)*xe;U.scale.set(Lt,Lt*.45,Lt*.85),U.updateMatrix(),q.push(U.matrix.clone())}}else if(Ve>.005){if(Rt.copy(ut).multiplyScalar(e+Oe),$.setFromUnitVectors(hn,ut),Fe.length<4200&&yt<.62){const Lt=.017*xe*(.65+kt*1.15);U.position.copy(Rt),U.quaternion.copy($),U.rotateY(kt*Math.PI*2),U.rotateX((zt-.5)*.14),U.scale.set(Lt,Lt,Lt),U.updateMatrix(),Fe.push(U.matrix.clone()),Ae.push(Ne(zt))}else if(me.length<3800&&kt<.45){const Lt=(.007+yt*.008)*xe;U.position.copy(Rt),U.quaternion.copy($),U.rotateY(yt*Math.PI*2),U.scale.set(Lt,Lt,Lt),U.updateMatrix(),me.push(U.matrix.clone()),Te.push(ae(yt))}else if(De.length<5200&&zt<.35){const Lt=(.006+kt*.007)*xe;U.position.copy(Rt),U.quaternion.copy($),U.rotateY(zt*Math.PI*2),U.scale.set(Lt,Lt,Lt),U.updateMatrix(),De.push(U.matrix.clone()),xt.push(ae(kt))}}continue}if(Qe==="lake"||tt>.35||Ve<=0||ut.distanceTo(Et[3].capDir)<.036)continue;if(Rt.copy(ut).multiplyScalar(e+Oe),$.setFromUnitVectors(hn,ut),Qe==="canyon"&&At.length<340&&dt>.042&&yt<.24){U.position.copy(ut).multiplyScalar(e+Oe-.001*xe),U.quaternion.copy($),U.rotateY(kt*Math.PI*2);const Lt=(.008+kt*.011)*xe,Wi=(.036+zt*.052)*xe;U.scale.set(Lt,Wi,Lt),U.updateMatrix(),At.push(U.matrix.clone());continue}const Nn=ee>-.04,Hi=Ve<.065;if(Nn||Hi&&yt<.45){const Lt=.5+Math.pow(kt,1.3)*1.9,Wi=(zt-.5)*.16,Fr=(k(ne,5,31)-.5)*.16,ed=ae(zt),Io=Ne(zt);if(U.position.copy(Rt),U.quaternion.copy($),U.rotateY(kt*Math.PI*2),U.rotateX(Wi),U.rotateZ(Fr),Hi&&yt<.55&&Fe.length<4200){const pn=.019*xe*Lt;U.scale.set(pn,pn,pn),U.updateMatrix(),Fe.push(U.matrix.clone()),Ae.push(Io)}else{const pn=Math.floor(yt*100)%3;if(pn===0&&Ee.length<4200){const vn=.024*xe*Lt,Or=vn*(.58+zt*.22);U.scale.set(vn,vn,vn),U.updateMatrix(),Ee.push(U.matrix.clone()),nt.push(ed),U.position.copy(Rt).addScaledVector(ut,vn*.9),U.scale.set(Or,Or,Or),U.updateMatrix(),Le.push(U.matrix.clone()),(Ee.length%2===0?D:C).push(U.matrix.clone())}else if(pn===1&&j.length<4800){const vn=.032*xe*Lt;U.scale.set(vn*.9,vn*1.35,vn*.9),U.updateMatrix(),j.push(U.matrix.clone()),ue.push(Io)}else if(ce.length<4500){const vn=.022*xe*Lt;U.scale.set(vn,vn,vn),U.updateMatrix(),ce.push(U.matrix.clone()),le.push(Io)}else if(Fe.length<4200){const vn=.02*xe*Lt;U.scale.set(vn,vn,vn),U.updateMatrix(),Fe.push(U.matrix.clone()),Ae.push(Io)}}const td=Math.abs(ut.x)<.85?hn:new M(0,0,1);if(Be.crossVectors(ut,td).normalize(),ot.crossVectors(ut,Be).normalize(),De.length<5200&&kt<.58){Re.copy(ut).addScaledVector(Be,(yt-.5)*.008).addScaledVector(ot,(zt-.5)*.008).normalize();const pn=(.0075+zt*.009)*xe;U.position.copy(Re).multiplyScalar(e+Oe),U.quaternion.setFromUnitVectors(hn,Re),U.rotateY(kt*Math.PI*2),U.scale.set(pn,pn,pn),U.updateMatrix(),De.push(U.matrix.clone()),xt.push(ae(kt))}if(me.length<3800&&zt>.48){Re.copy(ut).addScaledVector(Be,(zt-.5)*.01).addScaledVector(ot,(yt-.5)*.01).normalize();const pn=(.009+yt*.011)*xe;U.position.copy(Re).multiplyScalar(e+Oe),U.quaternion.setFromUnitVectors(hn,Re),U.rotateY(yt*Math.PI*2),U.scale.set(pn,pn,pn),U.updateMatrix(),me.push(U.matrix.clone()),Te.push(ae(yt))}if(Xe.length<1800&&yt>.78){Re.copy(ut).addScaledVector(Be,(kt-.5)*.01).addScaledVector(ot,(zt-.5)*.01).normalize();const pn=(.0065+kt*.01)*xe;U.position.copy(Re).multiplyScalar(e+Oe),U.quaternion.setFromUnitVectors(hn,Re),U.rotateY(zt*Math.PI*2),U.scale.set(pn,pn,pn),U.updateMatrix(),Xe.push(U.matrix.clone())}}else if(it.length+He.length<2400&&yt<.25){const Lt=(.0052+kt*.0062)*xe;U.position.copy(Rt),U.quaternion.copy($),U.rotateY(zt*Math.PI*2),U.scale.set(Lt,Lt,Lt),U.updateMatrix(),(ne%2===0?it:He).push(U.matrix.clone())}else if(_t.length+lt.length<1050&&yt>.84){const Lt=(.01+kt*.015)*xe;U.position.copy(Rt),U.quaternion.copy($),U.rotateY(zt*Math.PI*2),U.scale.set(Lt,Lt,Lt),U.updateMatrix(),(ne%2===0?_t:lt).push(U.matrix.clone())}}const et=bi(Et[4].capDir);for(let ne=0;ne<250;ne++){const ge=Math.floor(ne/4),pe=k(ge,4,17)*Math.PI*2,$e=Math.sqrt(k(ge,11,3))*.095,Ve=Math.cos(pe)*$e+(k(ne,2,9)-.5)*.012,dt=Math.sin(pe)*$e+(k(ne,7,5)-.5)*.012,ve=os(e,et,Ve,dt,0,n,i),ee=(.018+k(ne,9,6)*.026)*xe;U.position.copy(ve.pos),U.quaternion.setFromUnitVectors(hn,ve.normal),U.rotateY(k(ne,5,1)*Math.PI*2),U.scale.set(ee,ee,ee),U.updateMatrix(),(ge%2===0?_t:lt).push(U.matrix.clone())}for(let ne=0;ne<420;ne++){const ge=G[ne%G.length],pe=ge[Math.floor(k(ne,5,3)*ge.length)],$e=pe.phi+(ne%2===0?1:-1)*(.008+k(ne,7,1)*.026)*xe,Ve=X.clamp(pe.theta+(k(ne,3,8)-.5)*.018*xe,.001,Math.PI-.001),dt=Math.sin(Ve),ve=Hn(dt*Math.cos($e),Math.cos(Ve),dt*Math.sin($e),n,i,3).elev,ee=Tv(e,Ve,$e,ve);U.position.copy(ee.pos),U.quaternion.setFromUnitVectors(hn,ee.normal),U.rotateY(k(ne,1,6)*Math.PI*2);const tt=(.008+k(ne,4,9)*.01)*xe;U.scale.set(tt,tt,tt),U.updateMatrix(),De.push(U.matrix.clone()),xt.push(ae(k(ne,2,3)))}const qe=(ne,ge,pe,$e,Ve=null)=>{const dt=new pt(ge,pe,Math.max(1,$e.length));return dt.name=ne,dt.frustumCulled=!1,$e.forEach((ve,ee)=>{dt.setMatrixAt(ee,ve),Ve&&Ve[ee]&&dt.setColorAt(ee,Ve[ee])}),dt.instanceMatrix.needsUpdate=!0,Ve&&dt.instanceColor&&(dt.instanceColor.needsUpdate=!0),r.add(dt),dt};if(At.length>0&&qe("Pandora_Global_Canyon_Spires",Ov(7),new ke({vertexColors:!0,roughness:.88}),At),q.length>0){const ne=new ke({color:4943976,emissive:61695,emissiveIntensity:0,roughness:.72});a.push({mat:ne,dayColor:4943976,nightColor:542818,dayEmissive:1589304,nightEmissive:59647,dayEI:0,nightEI:1.75,pulsePhase:1.2}),qe("Pandora_Global_Coral_Reefs",new Vs(1,0),ne,q)}Xe.length>0&&qe("Pandora_Global_Mossy_Rocks",Dv(),new ke({vertexColors:!0,roughness:.9}),Xe);const gt=new Jt(.055,.18,1,6,1);gt.translate(0,.5,0);const Nt=new ke({color:4337696,roughness:.9});a.push({mat:Nt,dayColor:4337696,nightColor:1446952,dayEmissive:0,nightEmissive:662570,dayEI:0,nightEI:.18}),qe("Pandora_Global_Tree_Trunks",gt,Nt,Ee);const{outer:jt,under:Qt}=Yu(),sn=new ke({color:16777215,emissive:537664,emissiveIntensity:0,roughness:.68});a.push({mat:sn,dayColor:12769474,nightColor:1460812,dayEmissive:667158,nightEmissive:540752,dayEI:0,nightEI:.52}),qe("Pandora_Global_Canopy_Tops",jt,sn,Le,nt);const en=new ke({color:2777650,emissive:65512,emissiveIntensity:0,roughness:.45,side:$t});a.push({mat:en,dayColor:2777650,nightColor:62975,dayEmissive:1456156,nightEmissive:65512,dayEI:0,nightEI:2.2,pulsePhase:0}),qe("Pandora_Global_Canopy_Under_Turquoise",Qt,en,D);const Dt=new ke({color:3303982,emissive:16720544,emissiveIntensity:0,roughness:.45,side:$t});a.push({mat:Dt,dayColor:3303982,nightColor:16725168,dayEmissive:1719320,nightEmissive:16720544,dayEI:0,nightEI:2.15,pulsePhase:1.9}),qe("Pandora_Global_Canopy_Under_Magenta",Qt,Dt,C);const Zt=new ke({vertexColors:!0,emissive:51416,emissiveIntensity:0,roughness:.72});a.push({mat:Zt,dayColor:16777215,nightColor:5143684,dayEmissive:798236,nightEmissive:34968,dayEI:0,nightEI:.48}),qe("Pandora_Global_Alien_Redwoods",Pv(),Zt,j,ue);const Mt=new ke({vertexColors:!0,emissive:9455871,emissiveIntensity:0,roughness:.78});a.push({mat:Mt,dayColor:16777215,nightColor:6056066,dayEmissive:1189400,nightEmissive:5909664,dayEI:0,nightEI:.55}),qe("Pandora_Global_Gnarled_Root_Trees",Rv(),Mt,ce,le);const It=new ke({vertexColors:!0,emissive:55464,emissiveIntensity:0,roughness:.72,side:$t});a.push({mat:It,dayColor:16777215,nightColor:5013626,dayEmissive:1194008,nightEmissive:45206,dayEI:0,nightEI:.75}),qe("Pandora_Global_Alien_Palms",Iv(),It,Fe,Ae);const tn=new ke({color:16777215,emissive:57514,emissiveIntensity:0,roughness:.65,side:$t});a.push({mat:tn,dayColor:12769474,nightColor:1462860,dayEmissive:1192986,nightEmissive:51352,dayEI:0,nightEI:1.05,pulsePhase:1.1}),qe("Pandora_Global_Broadleaf_Shrubs",Lv(),tn,me,Te);const R=new ke({color:16777215,emissive:59548,emissiveIntensity:0,roughness:.62,side:$t});a.push({mat:R,dayColor:13032646,nightColor:1333314,dayEmissive:1327646,nightEmissive:57498,dayEI:0,nightEI:1.25,pulsePhase:2.4}),qe("Pandora_Global_Giant_Ferns",Nv(),R,De,xt);const H=qu(),Q=new ke({color:8796822,emissive:12728575,emissiveIntensity:0,roughness:.45});a.push({mat:Q,dayColor:8796822,nightColor:13650687,dayEmissive:3807298,nightEmissive:12071167,dayEI:0,nightEI:2.3,pulsePhase:.8}),qe("Pandora_Global_Flowers_Violet",H,Q,it);const ie=new ke({color:13394984,emissive:16739866,emissiveIntensity:0,roughness:.45});a.push({mat:ie,dayColor:13394984,nightColor:16742946,dayEmissive:4989968,nightEmissive:16738324,dayEI:0,nightEI:2.35,pulsePhase:2.6}),qe("Pandora_Global_Flowers_Orange",H,ie,He);const K=Uv(),Me=new ke({color:7357048,emissive:11024639,emissiveIntensity:0,roughness:.48});a.push({mat:Me,dayColor:7357048,nightColor:10631935,dayEmissive:3284024,nightEmissive:9973503,dayEI:0,nightEI:2.25,pulsePhase:1.5}),qe("Pandora_Global_Mushrooms_Violet",K,Me,_t);const Ce=new ke({color:10767974,emissive:16725672,emissiveIntensity:0,roughness:.48});a.push({mat:Ce,dayColor:10767974,nightColor:16726186,dayEmissive:4332584,nightEmissive:16722072,dayEI:0,nightEI:2.2,pulsePhase:3.1}),qe("Pandora_Global_Mushrooms_NeonPink",K,Ce,lt),N.userData.animatedEmissive=!0,Y.userData.animatedEmissive=!0;for(let ne=0;ne<a.length;ne++)a[ne].mat.userData=a[ne].mat.userData||{},a[ne].mat.userData.animatedEmissive=!0;const Ke=new re,Ye=new re,ct=new re(821410),vt=new re(280664),B=new re(2649668),Ie=new re(59647);return{group:r,waterfalls:be,pulsingRivers:J,archCenters:W,riverPaths:G,landmarks:Et,samplerCtx:s,getFloorAndWaterAtDir:ne=>{const ge=Hn(ne.x,ne.y,ne.z,n,i,3),pe=ge.cont<=0||ge.lakeBlend>.35,$e=ge.cont<=0?0:ge.lakeBlend>.35?ge.lakeWaterElev:-1;return{terrainElev:ge.elev,waterElev:$e,hasWater:pe,nation:ge.nation,forestFactor:ge.forestFactor,waterFactor:ge.waterFactor,ashFactor:ge.ashFactor,reefFactor:ge.reefFactor,biome:ge.biome}},updateDayNight:(ne,ge,pe=0)=>{const $e=X.smoothstep(-ne,-.1,.04);for(let Oe=0;Oe<a.length;Oe++){const Qe=a[Oe];if(Qe.isWaterfall){const Bt=.85+.15*Math.sin(ge*3.8+Oe);Qe.mat.color.setRGB(X.lerp(Qe.dayColorRGB[0],Qe.nightColorRGB[0]*Bt,$e),X.lerp(Qe.dayColorRGB[1],Qe.nightColorRGB[1]*Bt,$e),X.lerp(Qe.dayColorRGB[2],Qe.nightColorRGB[2]*Bt,$e)),Qe.mat.opacity=X.lerp(.52,.72,$e);continue}if(Qe.dayColor!==void 0&&(Ke.setHex(Qe.dayColor),Ye.setHex(Qe.nightColor),Qe.mat.color.copy(Ke).lerp(Ye,$e)),Qe.dayEmissive!==void 0&&(Ke.setHex(Qe.dayEmissive),Ye.setHex(Qe.nightEmissive),Qe.mat.emissive.copy(Ke).lerp(Ye,$e)),Qe.dayEI!==void 0){const Bt=Qe.pulsePhase!==void 0?.9+.16*Math.sin(ge*1.7+Qe.pulsePhase):1;Qe.mat.emissiveIntensity=X.lerp(Qe.dayEI,Qe.nightEI*Bt,$e)}}const Ve=.85+.25*Math.sin(ge*2);N.color.copy(ct).lerp(vt,$e),N.emissiveIntensity=X.lerp(0,1.15*Ve,$e),Y.color.copy(B).lerp(Ie,$e),Y.emissiveIntensity=X.lerp(0,2.35*Ve,$e);const dt=fe.plumeGeo.attributes.position,ve=fe.plumeGeo.attributes.color,ee=fe.geyserEmitters,tt=fe.puffsPerGeyser;for(let Oe=0;Oe<ee.length;Oe++){const Qe=ee[Oe];for(let Bt=0;Bt<tt;Bt++){const yt=Oe*tt+Bt,kt=(ge*.48+Qe.phase+Bt/tt)%1,zt=kt*Qe.maxHeight,Nn=Math.sin(kt*Math.PI)*.004*xe;dt.setXYZ(yt,Qe.basePos.x+Qe.normal.x*zt+Math.cos(yt)*Nn,Qe.basePos.y+Qe.normal.y*zt,Qe.basePos.z+Qe.normal.z*zt+Math.sin(yt)*Nn);const Hi=X.lerp(.85,Oe%2===0?.2:.95,$e),Lt=X.lerp(.95,Oe%2===0?1.45:.45,$e),Wi=X.lerp(1,1.85,$e);ve.setXYZ(yt,Hi,Lt,Wi)}}dt.needsUpdate=!0,ve.needsUpdate=!0,fe.plumeMat.opacity=X.lerp(.32,.65,$e),_e.update(ge,$e),Pe.update(ge,$e,pe)}}}function Kv(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new yn(o);return n.needsUpdate=!0,n}const Ku=Kv();function Rh(o,e,t=350){const n=e,i=1/3.5,s=o==="p2",r=new Yt;r.name=`${o}_Urban_AV_Traffic_System`;const a=(s?.0068:.0033)*i,l=new nn(a*.55,a*.34,a*1.85),c=new ke({color:1580068,roughness:.38,metalness:.85}),h=new pt(l,c,t),u=new nn(a*.58,a*.22,a*.55);u.translate(0,0,a*.92);const d=new In({color:o==="p4"?new re(2.4,2.8,3.2):new re(1.4,3.2,4)}),f=new pt(u,d,t),g=new nn(a*.42,a*.16,a*3.8);g.translate(0,0,-a*2.55);const _=new In({color:o==="p4"?new re(4.2,1.4,.25):new re(4.2,.85,.25),transparent:!0,opacity:.88}),m=new pt(g,_,t);r.add(h,f,m);const p=[],y=[new M(1,0,0),new M(0,0,1),new M(.707,0,.707),new M(-.707,0,.707)];for(let v=0;v<t;v++){const w=v%2===0,A=v%7,F=s?(.045+A*.13+k(v,3,7)*.08)*i:(.016+A*.022+k(v,3,7)*.012)*i,I=n+F;if(w){const G=s&&v%7===0,z=(v>>1)%14,O=s?G?.34+k(v,2,19)*.16:.028+z/13*.28+(k(v,1,9)-.5)*.015:(.035+z*.034+(k(v,1,9)-.5)*.014)*i*1.2,L=z%2===0?1:-1,N=L*(.085+k(v,5,2)*.11)/Math.max(.08,Math.sin(O));p.push({type:"ring",radius:I,theta:O,sinTheta:Math.sin(O),cosTheta:Math.cos(O),phi0:k(v,8,4)*Math.PI*2,omega:N,dir:L,bobAmp:(s?.006:.002+k(v,2,6)*.0025)*i,bobPhase:k(v,4,1)*Math.PI*2})}else{const G=v%y.length,z=s?.078:.042*1.15,O=(Math.floor(v/8)%11-5)*z*i,L=y[G],N=new mt().setFromAxisAngle(L,O),Y=v%4===1?1:-1,J=s?.34:.52*i*1.2,oe=(k(v,6,3)*2-1)*J,he=Y*(s?.13+k(v,9,5)*.16:(.09+k(v,9,5)*.13)*1.25)*i;p.push({type:"corridor",radius:I,qPlane:N,s0:oe,arcSpan:J,speed:he,dir:Y,bobAmp:(s?.005:.002+k(v,7,2)*.002)*i,bobPhase:k(v,3,4)*Math.PI*2})}}const b=new M,x=new M,P=new M,E=new M,T=new rt,S=new M;return{update(v){if(!(!r.parent||!r.parent.visible)){for(let w=0;w<t;w++){const A=p[w],F=Math.sin(v*2.2+A.bobPhase)*A.bobAmp,I=A.radius+F;if(A.type==="ring"){const z=A.phi0+A.omega*v,O=Math.cos(z),L=Math.sin(z);x.set(A.sinTheta*O,A.cosTheta,A.sinTheta*L).normalize(),b.copy(x).multiplyScalar(I),P.set(-A.dir*L,0,A.dir*O).normalize(),E.crossVectors(x,P).normalize(),P.crossVectors(E,x).normalize()}else{const z=A.arcSpan*2;let O=(A.s0+A.speed*v+A.arcSpan)%z;O<0&&(O+=z);const L=O-A.arcSpan,N=Math.sin(L),Y=Math.cos(L);x.set(N,Y,0).applyQuaternion(A.qPlane).normalize(),b.copy(x).multiplyScalar(I),P.set(A.dir*Y,-A.dir*N,0).applyQuaternion(A.qPlane).normalize(),E.crossVectors(x,P).normalize()}let G=1;if(A.type==="corridor"){const z=Math.abs(Math.acos(X.clamp(x.y,-1,1)))/A.arcSpan;G=1-X.smoothstep(z,.85,1)}T.makeBasis(E,x,P),T.setPosition(b),G<.99&&(S.setScalar(Math.max(.01,G)),T.scale(S)),h.setMatrixAt(w,T),f.setMatrixAt(w,T),m.setMatrixAt(w,T)}h.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}},group:r}}function jv(o){const e=[],t=[],n=[],i=[],s=[],r=(f,g)=>(f.material&&(f.material.userData=f.material.userData||{},f.material.userData.animatedEmissive=!0),{mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let a=0;o.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";a++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(r(f,a)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(r(f,a)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(r(f,a)):/NC_Neon_Sign_/.test(g)?i.push(r(f,a)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&s.push(r(f,a))});const l=f=>{if(f.length===0)return null;const g=new M;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const _=g.clone().normalize();return{parts:f,centroid:g,localUp:_}},c=[l(e),l(t)].filter(Boolean),h=new mt,u=new mt,d=new M;return{update(f,g=1){c.forEach((_,m)=>{const p=m*2.4,y=Math.sin(f*1.45+p)*1.4,b=Math.sin(f*1.15+p)*.08;for(let x=0;x<_.parts.length;x++){const P=_.parts[x],E=/Tail|Fin/i.test(P.mesh.name),T=Math.sin(f*3.1+p+x*.65)*(E?.14:.045);d.copy(P.basePos).sub(_.centroid),h.setFromAxisAngle(_.localUp,b+T),d.applyQuaternion(h),P.mesh.position.copy(_.centroid).add(d).addScaledVector(_.localUp,y),P.mesh.quaternion.copy(h).multiply(P.baseQuat),P.material&&P.material.emissiveIntensity!==void 0&&(P.material.emissiveIntensity=P.baseEmissive*(.85+.22*Math.sin(f*2.6+x*.7+p))*g)}});for(let _=0;_<n.length;_++){const m=n[_],p=Math.sin(f*1.6+m.seed*.9)*.55;m.mesh.position.copy(m.basePos).addScaledVector(m.normal,p),m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=m.baseEmissive*(.88+.16*Math.sin(f*3.4+m.seed))*g)}for(let _=0;_<i.length;_++){const m=i[_];if(!m.material||m.material.emissiveIntensity===void 0)continue;const p=.88+.14*Math.sin(f*2.2+m.seed*1.7),y=Math.sin(f*23+m.seed*7.3)>.965?.55:1;m.material.emissiveIntensity=m.baseEmissive*p*y*g}for(let _=0;_<s.length;_++){const m=s[_];m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=m.baseEmissive*(.72+.48*Math.sin(f*3.2+m.seed*.8))*g),/Hexagon_Ring|Hexagon_Spoke/i.test(m.mesh.name)&&(u.setFromAxisAngle(m.normal,f*.35*(_%2===0?1:-1)),m.mesh.quaternion.copy(u).multiply(m.baseQuat))}}}}function Zv(o){const e=[];let t=0;return o.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,n.material.userData=n.material.userData||{},n.material.userData.animatedEmissive=!0,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n,i=1){for(let s=0;s<e.length;s++){const r=e[s];if(r.material.emissiveIntensity!==void 0){const a=.78+.36*Math.sin(n*1.9-r.phase);r.material.emissiveIntensity=r.baseEmissive*a*i}}}}}function $v(o){const e=o,t=1/3.5,n=new Yt;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,s=.0022*t,r=new nn(s*.4,s*.32,s*1.8),a=new nn(s*1.9,s*.08,s*.72);a.translate(s*.95,0,0);const l=new nn(s*1.9,s*.08,s*.72);l.translate(-s*.95,0,0);const c=new ke({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),h=new pt(r,c,i),u=new pt(a,c,i),d=new pt(l,c,i);n.add(h,u,d);const f=[];for(let I=0;I<i;I++){const G=e+(I<55?.145+k(I,2,7)*.09:.035+k(I,4,3)*.06)*t,z=(.025+k(I,5,1)*.24)*t*1.1,O=k(I,8,9)*Math.PI*2,L=(I%3===0?-1:1)*(.28+k(I,3,6)*.28);f.push({alt:G,theta:z,phi0:O,omega:L,dir:L>=0?1:-1,flapSpeed:5.5+k(I,1,5)*3.5,flapPhase:k(I,7,2)*Math.PI*2,scaleFactor:.75+k(I,9,4)*.8})}const g=42,_=new Float32Array(g*3),m=[];for(let I=0;I<g;I++){const G=(.16+k(I,11,2)*.24)*t*1.15,z=k(I,13,5)*Math.PI*2,O=e+(.045+k(I,4,8)*.065)*t;m.push({theta:G,phi0:z,alt:O,speed:.028+k(I,6,3)*.025})}const p=new Pt;p.setAttribute("position",new St(_,3));const y=new Pn({map:Ku,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),b=new Ln(p,y);b.name="Medieval_Drifting_Cloud_Banks",n.add(b);const x=new M,P=new M,E=new M,T=new M,S=new rt,v=new rt,w=new mt,A=new M(0,0,1),F=new M;return{group:n,update(I,G=1){if(!n.parent||!n.parent.visible)return;for(let O=0;O<i;O++){const L=f[O],N=L.phi0+L.omega*I,Y=L.theta+Math.sin(I*.6+L.flapPhase)*.008,J=L.alt+Math.sin(I*1.1+L.flapPhase)*.0018,oe=Math.sin(Y),he=Math.cos(Y),be=Math.cos(N),U=Math.sin(N);P.set(oe*be,he,oe*U).normalize(),x.copy(P).multiplyScalar(J),E.set(-L.dir*U,0,L.dir*be).normalize(),T.crossVectors(P,E).normalize(),E.crossVectors(T,P).normalize(),S.makeBasis(T,P,E),S.setPosition(x),F.setScalar(L.scaleFactor),S.scale(F),h.setMatrixAt(O,S);const te=Math.sin(I*.45+L.flapPhase)>-.25?.55:.12,se=Math.sin(I*L.flapSpeed+L.flapPhase)*te;w.setFromAxisAngle(A,se),v.makeRotationFromQuaternion(w),v.premultiply(S),u.setMatrixAt(O,v),w.setFromAxisAngle(A,-se),v.makeRotationFromQuaternion(w),v.premultiply(S),d.setMatrixAt(O,v)}h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const z=p.attributes.position;for(let O=0;O<g;O++){const L=m[O],N=L.phi0+L.speed*I,Y=Math.sin(L.theta);z.setXYZ(O,L.alt*Y*Math.cos(N),L.alt*Math.cos(L.theta),L.alt*Y*Math.sin(N))}z.needsUpdate=!0}}}function Gi(o,e=1){const t=o.attributes.normal;if(!t)return o;for(let n=0;n<t.count;n++){const i=t.getX(n),s=t.getY(n),r=t.getZ(n),a=Math.hypot(i,s,r);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,s/a,r/a)}return t.needsUpdate=!0,o}function Di(o,e,t){const n=Math.max(1e-6,o),i=new ti(n,e,4,2);i.rotateX(-Math.PI*.5);const s=i.attributes.position;for(let r=0;r<s.count;r++){const a=X.clamp((s.getX(r)+n*.5)/n,0,1),l=s.getZ(r),c=t*a*n,h=-Math.pow(a,1.35)*e*.85,u=1-Math.pow(a,1.6)*.78,d=Math.sin(a*Math.PI)*e*.14;s.setXYZ(r,c,d,l*u+h)}return i.computeVertexNormals(),Gi(i,1)}function Ih(o){const e=[],t=new xn(o*.34,o*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new xn(o*.18,o*.9,4);n.rotateX(Math.PI*.42),n.translate(0,o*.2,o*1.15),e.push(n.toNonIndexed());const i=new xn(o*.12,o*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-o*1.85),e.push(i.toNonIndexed());const s=Ft(e,!1);return s.computeVertexNormals(),s}function Qv(o){const e=[],t=new nn(o*.72,o*.68,o*1.55);t.translate(0,o*.95,0),e.push(t.toNonIndexed());const n=new nn(o*.36,o*.58,o*.68);n.rotateX(.45),n.translate(0,o*1.32,o*.85),e.push(n.toNonIndexed());const i=new nn(o*.92,o*.44,o*.36);i.rotateX(.28),i.translate(0,o*1.54,o*1.15),e.push(i.toNonIndexed());const s=Ft(e,!1);s.computeVertexNormals();const r=[],a=new Jt(o*.1,o*.08,o*.85,5);a.translate(o*.28,-o*.42,0);const l=a.clone();l.translate(-o*.56,0,0),r.push(a.toNonIndexed(),l.toNonIndexed());const c=Ft(r,!1);c.computeVertexNormals();const h=c.clone();return{bodyGeo:s,frontLegsGeo:c,backLegsGeo:h}}function Jv(o){const e=new ln(o*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),Gi(e,1);const t=[];for(let i=0;i<4;i++){const s=i/4*Math.PI*2,r=new Jt(o*.05,o*.012,o*1.45,4);r.translate(Math.cos(s)*o*.22,-o*.72,Math.sin(s)*o*.22),t.push(r.toNonIndexed())}const n=Ft(t,!1);return n.computeVertexNormals(),Gi(n,-1),{bellGeo:e,tentGeo:n}}function Ao(o){return o.map(e=>{const t=e.index?e.toNonIndexed():e;return t.attributes.uv&&t.deleteAttribute("uv"),t})}function ey(o){const e=o,t=[],n=new ln(e*.42,12,10);n.scale(.88,.72,2.55),t.push(n);const i=new xn(e*.42,e*1.15,8);i.rotateX(Math.PI*.5),i.scale(1.18,.72,1),i.translate(0,e*.03,e*1.15),t.push(i),[-1,1].forEach(h=>{const u=new nn(e*.16,e*.16,e*.92);u.rotateY(h*.12),u.translate(h*e*.24,e*.2,e*.92),t.push(u);const d=new nn(e*1.55,e*.06,e*.48);d.rotateY(-h*.34),d.rotateZ(-h*.1),d.translate(h*e*.85,-e*.12,e*.18),t.push(d)});const s=new xn(e*.25,e*1.35,7);s.rotateX(-Math.PI*.5),s.translate(0,0,-e*1.35),t.push(s);const r=new nn(e*1.35,e*.05,e*.44);r.translate(0,e*.02,-e*1.98),t.push(r);const a=Ft(Ao(t),!1);a.computeVertexNormals(),Gi(a,1);const l=[];[-1,1].forEach(h=>{for(let u=0;u<4;u++){const d=new nn(e*.05,e*.07,e*.22);d.rotateY(h*.08),d.translate(h*(e*.36-u*.04*e),e*.06,e*(.72-u*.42)),l.push(d)}});const c=Ft(Ao(l),!1);return c.computeVertexNormals(),Gi(c,1),{bodyGeo:a,glowGeo:c}}function ty(o){const e=o,t=[],n=new ln(e*.24,9,7);n.scale(.85,.72,2),t.push(n);const i=new Jt(e*.07,e*.14,e*.85,6);i.rotateX(Math.PI*.42),i.translate(0,e*.12,e*.74),t.push(i);const s=new xn(e*.09,e*.36,5);s.rotateX(Math.PI*.5),s.translate(0,e*.22,e*1.24),t.push(s);const r=new xn(e*.14,e*1.15,6);r.rotateX(-Math.PI*.5),r.translate(0,-e*.02,-e*.95),t.push(r);const a=Ft(Ao(t),!1);a.computeVertexNormals(),Gi(a,1);const l=[];[-1,1].forEach(h=>{const u=new nn(e*.92,e*.04,e*.28);u.rotateY(-h*.35),u.translate(h*e*.48,-e*.05,e*.24),l.push(u);const d=new nn(e*.62,e*.035,e*.22);d.rotateY(-h*.28),d.translate(h*e*.34,-e*.06,-e*.34),l.push(d)});const c=Ft(Ao(l),!1);return c.computeVertexNormals(),Gi(c,1),{bodyGeo:a,flipperGeo:c}}function ny(o){const e=o,t=[],n=new xn(e*.24,e*.85,5);n.rotateX(Math.PI*.5),n.scale(.55,1,1),n.translate(0,0,e*.15),t.push(n);const i=new xn(e*.22,e*.42,4);i.rotateX(-Math.PI*.5),i.scale(.32,1.15,1),i.translate(0,0,-e*.44),t.push(i);const s=Ft(Ao(t),!1);return s.computeVertexNormals(),Gi(s,1),s}function iy(o,e){const t=o,n=1/3.5,i=new Yt;i.name="Pandora_Bioluminescent_Life";const s=e?.samplerCtx||null,r=s?.qCap,a=s?.sphereLandmarks,l=B=>{const Ie=B.clone().normalize(),Ze=Math.abs(Ie.x)<.85?new M(1,0,0):new M(0,0,1),st=new M().crossVectors(Ie,Ze).normalize(),ne=new M().crossVectors(Ie,st).normalize();return{normalDir:Ie,e1:st,e2:ne}},c=2200,h=new Float32Array(c*3),u=new Float32Array(c*3),d=[],f=[new re(62975),new re(11553023),new re(3836159),new re(16732856)],g=(1+Math.sqrt(5))*.5,_=[];for(let B=0;B<5e3;B++){const Ie=1-(B+.5)/5e3*2,Ze=Math.sqrt(Math.max(0,1-Ie*Ie)),st=2*Math.PI*B/g,ne=Math.cos(st)*Ze,ge=Math.sin(st)*Ze,pe=Hn(ne,Ie,ge,r,a);pe.nation==="forest"&&pe.forestFactor>.99&&pe.ashFactor<.01&&pe.waterFactor<.01&&pe.borderMountain<.12&&pe.cont>.06&&pe.biome!=="lake"&&pe.elev>5e-4&&_.push({dir:new M(ne,Ie,ge),elev:pe.elev,cont:pe.cont})}_.length===0&&_.push({dir:Et[0].capDir.clone(),elev:.002,cont:.25});for(let B=0;B<c;B++){let Ie,Ze=.002;if(B<550){const ge=Et[B%5],pe=l(ge.capDir),$e=k(B,7,13)*Math.PI*2,Ve=Math.sqrt(k(B,3,19))*.105;Ie=pe.normalDir.clone().addScaledVector(pe.e1,Math.cos($e)*Ve).addScaledVector(pe.e2,Math.sin($e)*Ve).normalize();const dt=Hn(Ie.x,Ie.y,Ie.z,r,a,3);if(dt.nation!=="forest"){const ve=_[B%_.length];Ie.copy(ve.dir),Ze=ve.elev}else Ze=dt.elev}else{const ge=_[(B*7+Math.floor(k(B,4,11)*19))%_.length],pe=l(ge.dir),$e=k(B,2,17)*Math.PI*2,Ve=k(B,9,5)*.025;Ie=pe.normalDir.clone().addScaledVector(pe.e1,Math.cos($e)*Ve).addScaledVector(pe.e2,Math.sin($e)*Ve).normalize(),Ze=ge.elev}const st=t+Ze+(.005+k(B,5,11)*.19)*n;d.push({dir:Ie,baseAlt:st,driftSpeed:.025+k(B,2,7)*.035,risePhase:k(B,9,4)*Math.PI*2});const ne=f[B%f.length];u[B*3]=ne.r,u[B*3+1]=ne.g,u[B*3+2]=ne.b}const m=new Pt;m.setAttribute("position",new St(h,3)),m.setAttribute("color",new St(u,3));const p=new Pn({size:.72,map:Ku,vertexColors:!0,transparent:!0,opacity:.16,depthWrite:!1,blending:_n,sizeAttenuation:!0}),y=new Ln(m,p);y.frustumCulled=!1,i.add(y);const b=90,x=.0054*n,P=new ke({color:744312,emissive:55551,emissiveIntensity:.08,roughness:.42}),E=new ke({color:43200,emissive:61695,emissiveIntensity:.1,roughness:.38,side:$t}),T=new ke({color:944852,emissive:2132223,emissiveIntensity:.1,roughness:.42,side:$t});P.userData.animatedEmissive=!0,E.userData.animatedEmissive=!0,T.userData.animatedEmissive=!0;const S=new pt(Ih(x),P,b),v=new pt(Di(x*2.75,x*1.1,1),E,b),w=new pt(Di(x*2.75,x*1.1,-1),E,b),A=new pt(Di(x*1.65,x*.75,1),T,b),F=new pt(Di(x*1.65,x*.75,-1),T,b);[S,v,w,A,F].forEach(B=>{B.frustumCulled=!1,i.add(B)});const I=[l(Et[0].capDir),l(Et[1].capDir),l(Et[2].capDir)],G=e?.archCenters||[];for(let B=0;B<G.length;B++)G[B]?.normal&&I.push(l(G[B].normal));const z=[];for(let B=0;B<b;B++){const Ie=B<25?0:B<55?1:2,Ze=B<60?I[Ie]:I[B%I.length],st=(.032+k(B,4,1)*.088)*n,ne=t+(.055+k(B,8,5)*.17)*n,ge=(B%3===0?-1:1)*(.4+k(B,6,3)*.34);z.push({frame:Ze,orbitRad:st,alt:ne,phi0:k(B,4,2)*Math.PI*2,omega:ge,phase:k(B,3,9)*Math.PI*2,scale:.78+k(B,5,6)*.55})}const O=4,L=.0145*n,N=new ke({color:10884618,emissive:16727056,emissiveIntensity:.1,roughness:.4}),Y=new ke({color:14166542,emissive:16734744,emissiveIntensity:.12,roughness:.4,side:$t});N.userData.animatedEmissive=!0,Y.userData.animatedEmissive=!0;const J=new pt(Ih(L),N,O),oe=new pt(Di(L*3.1,L*1.25,1),Y,O),he=new pt(Di(L*3.1,L*1.25,-1),Y,O),be=new pt(Di(L*1.85,L*.85,1),Y,O),U=new pt(Di(L*1.85,L*.85,-1),Y,O);[J,oe,he,be,U].forEach(B=>{B.frustumCulled=!1,i.add(B)});const V=[{frame:l(Et[0].capDir),alt:t+.19*n,orbitRad:.11*n,phi0:.4,omega:.22,phase:0},{frame:l(Et[1].capDir),alt:t+.26*n,orbitRad:.14*n,phi0:2.1,omega:-.2,phase:1.5},{frame:l(Et[2].capDir),alt:t+.21*n,orbitRad:.12*n,phi0:3.9,omega:.21,phase:2.7},{frame:l(Et[3].capDir),alt:t+.18*n,orbitRad:.1*n,phi0:5.1,omega:-.23,phase:.9}],te=48,se=.0048*n,{bodyGeo:de,frontLegsGeo:fe,backLegsGeo:_e}=Qv(se),Pe=new ke({color:3682900,emissive:1990808,emissiveIntensity:0,roughness:.68}),ye=new ke({color:2499642,roughness:.75});Pe.userData.animatedEmissive=!0;const Se=new pt(de,Pe,te),W=new pt(fe,ye,te),Je=new pt(_e,ye,te);[Se,W,Je].forEach(B=>{B.frustumCulled=!1,i.add(B)});const We=_.filter(B=>B.cont>.08),je=We.length>=6?We:_,Ee=[],nt=new M;for(let B=0;B<6;B++){let Ie=null;const Ze=.015+B%3*.004,st=Math.floor(B/6*je.length)%je.length;for(let ne=0;ne<je.length;ne++){const ge=je[(st+ne*7)%je.length],pe=l(ge.dir);let $e=!0;for(let Ve=0;Ve<8;Ve++){const dt=Ve/8*Math.PI*2;nt.copy(pe.normalDir).addScaledVector(pe.e1,Math.cos(dt)*Ze*1.3).addScaledVector(pe.e2,Math.sin(dt)*Ze*1.3).normalize();const ve=Hn(nt.x,nt.y,nt.z,r,a,3);if(ve.nation!=="forest"||ve.ashFactor>.04||ve.biome==="lake"){$e=!1;break}}if($e){Ie=pe;break}}Ee.push({...Ie||l(Et[0].capDir),radOffset:Ze,speed:(B%2===0?1:-1)*(.14+B%3*.02)})}const Le=[];for(let B=0;B<te;B++){const Ie=Ee[B%Ee.length],Ze=Math.floor(B/Ee.length);Le.push({herd:Ie,offsetAng:Ze*.78+k(B,2,7)*.35,radialFactor:.52+k(B,5,3)*.65,phase:k(B,9,1)*Math.PI*2,scale:.85+k(B,4,8)*.38})}const D=240,C=.0038*n,{bellGeo:j,tentGeo:ue}=Jv(C),ce=new ke({color:16047359,emissive:12735743,emissiveIntensity:.12,transparent:!0,opacity:.35,roughness:.25,depthWrite:!1,blending:_n,side:$t}),le=new In({color:new re(.85,.75,1.05),transparent:!0,opacity:.28,depthWrite:!1,blending:_n});ce.userData.animatedEmissive=!0,le.userData.animatedEmissive=!0;const Fe=new pt(j,ce,D),Ae=new pt(ue,le,D);Fe.frustumCulled=!1,Ae.frustumCulled=!1,i.add(Fe,Ae);const De=[];for(let B=0;B<D;B++){let Ie,Ze,st;if(B<75){const ne=B<45?Et[3]:Et[0];Ie=l(ne.capDir);const ge=k(B,3,15)*Math.PI*2,pe=Math.sqrt(k(B,6,11))*.075;Ze=Ie.normalDir.clone().addScaledVector(Ie.e1,Math.cos(ge)*pe).addScaledVector(Ie.e2,Math.sin(ge)*pe).normalize(),st=hr(Ze.x,Ze.y,Ze.z,0,s)}else{const ne=_[(B*11+Math.floor(k(B,2,13)*13))%_.length];Ze=ne.dir,Ie=l(Ze),st=ne.elev}De.push({frame:Ie,alt:t+st+(.015+k(B,9,7)*.068)*n,phase:k(B,2,5)*Math.PI*2,scale:.72+k(B,8,3)*.78})}const xt=Et[6],me=l(xt.capDir),Te=[];for(let B=0;B<1200;B++){const Ie=k(B,11,29)*Math.PI*2,Ze=Math.sqrt(k(B,17,7))*.14,st=me.normalDir.clone().addScaledVector(me.e1,Math.cos(Ie)*Ze).addScaledVector(me.e2,Math.sin(Ie)*Ze).normalize(),ne=Hn(st.x,st.y,st.z,r,a,3);ne.nation==="water"&&ne.waterFactor>.92&&ne.elev<-.045&&Te.push({dir:st,elev:ne.elev})}Te.length===0&&Te.push({dir:me.normalDir.clone(),elev:-.095});const Xe=5,it=.0145*n,{bodyGeo:He,glowGeo:_t}=ey(it),lt=new ke({color:2508894,roughness:.42,metalness:.14}),At=new ke({color:5826815,emissive:61695,emissiveIntensity:.06,roughness:.3});At.userData.animatedEmissive=!0;const q=new pt(He,lt,Xe),we=new pt(_t,At,Xe);q.frustumCulled=!1,we.frustumCulled=!1,i.add(q,we);const Z=[];for(let B=0;B<Xe;B++){const Ie=Te[Math.floor(B/Xe*Te.length)%Te.length];Z.push({frame:l(Ie.dir),orbitRad:.055+k(B,3,19)*.065,depthRatio:.45+k(B,8,13)*.25,phi0:k(B,5,23)*Math.PI*2,omega:(B%2===0?1:-1)*(.11+k(B,2,17)*.06),phase:k(B,7,11)*Math.PI*2,scale:.85+k(B,9,4)*.42})}const ae=24,Ne=.0056*n,{bodyGeo:Ue,flipperGeo:at}=ty(Ne),ut=new ke({color:1465976,emissive:51455,emissiveIntensity:.06,roughness:.35}),Rt=new ke({color:2132126,emissive:2424800,emissiveIntensity:.06,roughness:.38});ut.userData.animatedEmissive=!0,Rt.userData.animatedEmissive=!0;const $=new pt(Ue,ut,ae),Re=new pt(at,Rt,ae);$.frustumCulled=!1,Re.frustumCulled=!1,i.add($,Re);const Be=[];for(let B=0;B<ae;B++){const Ie=Te[(B*19+3)%Te.length];Be.push({frame:l(Ie.dir),orbitRad:.025+k(B,4,29)*.038,phi0:k(B,12,5)*Math.PI*2,omega:(B%2===0?1:-1)*(.28+k(B,6,17)*.14),phase:k(B,8,21)*Math.PI*2,scale:.78+k(B,3,14)*.48})}const ot=450,et=9,qe=.002*n,gt=ny(qe),Nt=new ke({color:16777215,emissive:3201279,emissiveIntensity:.08,roughness:.28});Nt.userData.animatedEmissive=!0;const jt=new pt(gt,Nt,ot);jt.frustumCulled=!1;const Qt=[new re(2683647),new re(16757816),new re(16735912),new re(6619064),new re(6728447)];for(let B=0;B<ot;B++)jt.setColorAt(B,Qt[Math.floor(k(B,15,3)*Qt.length)%Qt.length]);jt.instanceColor&&(jt.instanceColor.needsUpdate=!0),i.add(jt);const sn=[];for(let B=0;B<et;B++){const Ie=Te[(B*47+7)%Te.length];sn.push({frame:l(Ie.dir),orbitRad:.022+k(B,9,13)*.035,omega:(B%2===0?1:-1)*(.22+k(B,2,19)*.12),phi0:k(B,6,31)*Math.PI*2,phase:k(B,14,7)*Math.PI*2,centerDir:new M,centerAlt:t-.035,aheadDir:new M,tangentForward:new M,tangentRight:new M})}const en=[];for(let B=0;B<ot;B++)en.push({schoolIdx:B%et,localAng:k(B,4,17)*Math.PI*2,localRad:(.0025+k(B,9,23)*.011)*(.5+.5*(B%3)),vertOff:(k(B,13,5)-.5)*.018,phase:k(B,21,11)*Math.PI*2,scale:.72+k(B,7,19)*.65});const Dt=new M,Zt=new M,Mt=new M,It=new M,tn=new M,R=new rt,H=new rt,Q=new mt,ie=new mt,K=new M(1,0,0),Me=new M(0,0,1),Ce=new M,Ke=new M(0,1,0);new M;const Ye=(B,Ie,Ze,st,ne,ge,pe,$e,Ve,dt,ve,ee)=>{Mt.copy(pe).normalize(),It.copy($e).sub(pe),It.lengthSq()<1e-12&&It.set(1,0,0),It.normalize(),tn.crossVectors(Mt,It).normalize(),It.crossVectors(tn,Mt).normalize(),R.makeBasis(tn,Mt,It),ie.setFromAxisAngle(Me,ee),H.makeRotationFromQuaternion(ie),R.multiply(H),R.setPosition(pe),Ce.setScalar(ve),R.scale(Ce),Ie.setMatrixAt(B,R),Q.setFromAxisAngle(Me,Ve),H.makeRotationFromQuaternion(Q),H.premultiply(R),Ze.setMatrixAt(B,H),Q.setFromAxisAngle(Me,-Ve),H.makeRotationFromQuaternion(Q),H.premultiply(R),st.setMatrixAt(B,H),Q.setFromAxisAngle(Me,dt),H.makeRotationFromQuaternion(Q),H.setPosition(0,0,-x*.72),H.premultiply(R),ne.setMatrixAt(B,H),Q.setFromAxisAngle(Me,-dt),H.makeRotationFromQuaternion(Q),H.setPosition(0,0,-x*.72),H.premultiply(R),ge.setMatrixAt(B,H)},ct=(B,Ie,Ze)=>{const st=B.phi0+B.omega*Ie,ne=B.orbitRad+Math.sin(Ie*.8+B.phase)*.008*n,ge=B.alt+Math.sin(Ie*1.15+B.phase)*.006*n;Ze.copy(B.frame.normalDir).addScaledVector(B.frame.e1,Math.cos(st)*ne).addScaledVector(B.frame.e2,Math.sin(st)*ne).normalize().multiplyScalar(ge)};return{group:i,update(B,Ie=1,Ze=.5,st=0){if(!i.parent||!i.parent.visible)return;const ne=X.smoothstep(-Ze,-.1,.04);e?.updateDayNight&&e.updateDayNight(Ze,B,st);const ge=m.attributes.position;for(let ve=0;ve<c;ve++){const ee=d[ve],tt=(ee.risePhase+B*ee.driftSpeed*3)%1*.015,Oe=ee.baseAlt+tt,Qe=Math.sin(B*.65+ee.risePhase)*.0022;ge.setXYZ(ve,ee.dir.x*Oe+Qe,ee.dir.y*Oe,ee.dir.z*Oe+Qe)}ge.needsUpdate=!0,p.opacity=X.lerp(.14,.92,ne);for(let ve=0;ve<b;ve++){const ee=z[ve];ct(ee,B,Dt),ct(ee,B+.05,Zt);const tt=Math.sin(B*.65+ee.phase)>-.2?.46:.1,Oe=Math.sin(B*4.9+ee.phase)*tt,Qe=Math.sin(B*4.9+ee.phase-.85)*tt*.82,Bt=ee.omega>0?-.32:.32;Ye(ve,S,v,w,A,F,Dt,Zt,Oe,Qe,ee.scale,Bt)}S.instanceMatrix.needsUpdate=!0,v.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0,A.instanceMatrix.needsUpdate=!0,F.instanceMatrix.needsUpdate=!0,P.emissiveIntensity=X.lerp(.06,1.45,ne),E.emissiveIntensity=X.lerp(.08,1.85,ne),T.emissiveIntensity=X.lerp(.08,1.65,ne);for(let ve=0;ve<O;ve++){const ee=V[ve];ct(ee,B,Dt),ct(ee,B+.08,Zt);const tt=Math.sin(B*2.5+ee.phase)*.42,Oe=Math.sin(B*2.5+ee.phase-.9)*.35;Ye(ve,J,oe,he,be,U,Dt,Zt,tt,Oe,1,ee.omega>0?-.25:.25)}J.instanceMatrix.needsUpdate=!0,oe.instanceMatrix.needsUpdate=!0,he.instanceMatrix.needsUpdate=!0,be.instanceMatrix.needsUpdate=!0,U.instanceMatrix.needsUpdate=!0,N.emissiveIntensity=X.lerp(.08,1.9,ne),Y.emissiveIntensity=X.lerp(.1,2.15,ne);const pe=(ve,ee,tt,Oe)=>{const Qe=ve.offsetAng+ve.herd.speed*ee,Bt=ve.herd.radOffset*ve.radialFactor;Oe.copy(ve.herd.normalDir).addScaledVector(ve.herd.e1,Math.cos(Qe)*Bt).addScaledVector(ve.herd.e2,Math.sin(Qe)*Bt).normalize();const yt=hr(Oe.x,Oe.y,Oe.z,0,s);tt.copy(Oe).multiplyScalar(t+yt)},$e=new M;for(let ve=0;ve<te;ve++){const ee=Le[ve];pe(ee,B,Dt,Mt),pe(ee,B+.08,Zt,$e),It.copy(Zt).sub(Dt).normalize(),tn.crossVectors(Mt,It).normalize(),It.crossVectors(tn,Mt).normalize(),R.makeBasis(tn,Mt,It),R.setPosition(Dt),Ce.setScalar(ee.scale),R.scale(Ce),Se.setMatrixAt(ve,R);const tt=Math.sin(B*4.5+ee.phase)*.42;Q.setFromAxisAngle(K,tt),H.makeRotationFromQuaternion(Q),H.setPosition(0,se*.72,se*.52),H.premultiply(R),W.setMatrixAt(ve,H),Q.setFromAxisAngle(K,-tt),H.makeRotationFromQuaternion(Q),H.setPosition(0,se*.72,-se*.56),H.premultiply(R),Je.setMatrixAt(ve,H)}Se.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0,Je.instanceMatrix.needsUpdate=!0,Pe.emissiveIntensity=X.lerp(0,.95,ne);for(let ve=0;ve<D;ve++){const ee=De[ve],tt=Math.sin(B*1.15+ee.phase)*.0045*n,Oe=Math.cos(B*.45+ee.phase)*.004*n,Qe=Math.sin(B*.35+ee.phase)*.004*n;Mt.copy(ee.frame.normalDir).addScaledVector(ee.frame.e1,Oe).addScaledVector(ee.frame.e2,Qe).normalize(),Dt.copy(Mt).multiplyScalar(ee.alt+tt);const Bt=1+Math.sin(B*2.8+ee.phase)*.16;vt(R,Dt,Mt,ee.scale*Bt,ee.scale/Math.sqrt(Bt)),Fe.setMatrixAt(ve,R),vt(R,Dt,Mt,ee.scale,ee.scale*(1+Math.sin(B*2.8+ee.phase)*.08)),Ae.setMatrixAt(ve,R)}Fe.instanceMatrix.needsUpdate=!0,Ae.instanceMatrix.needsUpdate=!0,ce.opacity=X.lerp(.32,.82,ne),ce.emissiveIntensity=X.lerp(.08,2.35,ne),le.opacity=X.lerp(.24,.65,ne),le.color.setRGB(X.lerp(.85,1.4,ne),X.lerp(.88,.85,ne),X.lerp(.96,2.2,ne));const Ve=(ve,ee,tt,Oe,Qe,Bt,yt,kt,zt,Nn)=>{const Hi=tt+Oe*kt;Nn.copy(ve.normalDir).addScaledVector(ve.e1,Math.cos(Hi)*ee).addScaledVector(ve.e2,Math.sin(Hi)*ee).normalize();const Lt=hr(Nn.x,Nn.y,Nn.z,0,s),Wi=Math.min(yt-.004,Lt+Bt),Fr=X.lerp(Wi,yt,Qe);zt.copy(Nn).multiplyScalar(t+Fr)},dt=new M;for(let ve=0;ve<Xe;ve++){const ee=Z[ve];Ve(ee.frame,ee.orbitRad,ee.phi0,ee.omega,ee.depthRatio,.015,-.016,B,Dt,Mt),Ve(ee.frame,ee.orbitRad,ee.phi0,ee.omega,ee.depthRatio,.015,-.016,B+.14,Zt,dt),It.copy(Zt).sub(Dt),It.lengthSq()<1e-12&&It.set(1,0,0),It.normalize(),tn.crossVectors(Mt,It).normalize(),It.crossVectors(tn,Mt).normalize();const tt=Math.sin(B*1.15+ee.phase)*.06;Q.setFromAxisAngle(K,tt),R.makeBasis(tn,Mt,It),R.setPosition(Dt),Ce.setScalar(ee.scale),R.scale(Ce),H.makeRotationFromQuaternion(Q),R.multiply(H),q.setMatrixAt(ve,R),we.setMatrixAt(ve,R)}q.instanceMatrix.needsUpdate=!0,we.instanceMatrix.needsUpdate=!0,At.emissiveIntensity=X.lerp(.06,1.85,ne);for(let ve=0;ve<ae;ve++){const ee=Be[ve],tt=.55+Math.sin(B*.75+ee.phase)*.25;Ve(ee.frame,ee.orbitRad,ee.phi0,ee.omega,tt,.008,-.01,B,Dt,Mt),Ve(ee.frame,ee.orbitRad,ee.phi0,ee.omega,tt,.008,-.01,B+.07,Zt,dt),It.copy(Zt).sub(Dt),It.lengthSq()<1e-12&&It.set(1,0,0),It.normalize(),tn.crossVectors(Mt,It).normalize(),It.crossVectors(tn,Mt).normalize(),R.makeBasis(tn,Mt,It),R.setPosition(Dt),Ce.setScalar(ee.scale),R.scale(Ce),$.setMatrixAt(ve,R);const Oe=Math.sin(B*5.4+ee.phase)*.42;Q.setFromAxisAngle(Me,Oe),H.makeRotationFromQuaternion(Q),H.premultiply(R),Re.setMatrixAt(ve,H)}$.instanceMatrix.needsUpdate=!0,Re.instanceMatrix.needsUpdate=!0,ut.emissiveIntensity=X.lerp(.06,1.35,ne),Rt.emissiveIntensity=X.lerp(.08,1.75,ne);for(let ve=0;ve<et;ve++){const ee=sn[ve],tt=ee.phi0+ee.omega*B,Oe=ee.phi0+ee.omega*(B+.06);ee.centerDir.copy(ee.frame.normalDir).addScaledVector(ee.frame.e1,Math.cos(tt)*ee.orbitRad).addScaledVector(ee.frame.e2,Math.sin(tt)*ee.orbitRad).normalize(),ee.aheadDir.copy(ee.frame.normalDir).addScaledVector(ee.frame.e1,Math.cos(Oe)*ee.orbitRad).addScaledVector(ee.frame.e2,Math.sin(Oe)*ee.orbitRad).normalize();const Qe=hr(ee.centerDir.x,ee.centerDir.y,ee.centerDir.z,0,s),Bt=Math.min(-.022,Qe+.01),yt=X.lerp(Bt,-.018,.48+.25*Math.sin(B*.65+ee.phase));ee.centerAlt=t+yt,ee.tangentForward.copy(ee.aheadDir).sub(ee.centerDir),ee.tangentForward.lengthSq()<1e-12&&ee.tangentForward.set(1,0,0),ee.tangentForward.normalize(),ee.tangentRight.crossVectors(ee.centerDir,ee.tangentForward).normalize(),ee.tangentForward.crossVectors(ee.tangentRight,ee.centerDir).normalize()}for(let ve=0;ve<ot;ve++){const ee=en[ve],tt=sn[ee.schoolIdx],Oe=ee.localAng+B*1.15,Qe=Math.sin(B*3.4+ee.phase)*.0024;Mt.copy(tt.centerDir).addScaledVector(tt.tangentRight,Math.cos(Oe)*ee.localRad).addScaledVector(tt.tangentForward,Math.sin(Oe)*ee.localRad).normalize();const Bt=Math.min(t-.008,tt.centerAlt+ee.vertOff+Qe);Dt.copy(Mt).multiplyScalar(Bt);const yt=Math.sin(B*8.5+ee.phase)*.14;Q.setFromAxisAngle(K,0),It.copy(tt.tangentForward).addScaledVector(tt.tangentRight,yt).normalize(),tn.crossVectors(Mt,It).normalize(),It.crossVectors(tn,Mt).normalize(),R.makeBasis(tn,Mt,It),R.setPosition(Dt),Ce.setScalar(ee.scale),R.scale(Ce),jt.setMatrixAt(ve,R)}jt.instanceMatrix.needsUpdate=!0,Nt.emissiveIntensity=X.lerp(.08,1.65,ne)}};function vt(B,Ie,Ze,st,ne){Q.setFromUnitVectors(Ke,Ze),Ce.set(st,ne,st),B.compose(Ie,Q,Ce)}}const Sl=new M(0,1,0);function bl(o,e){const t=document.createElement("canvas");return t.width=o,t.height=e,t}function ur(o,e){const t=bl(64,64),n=t.getContext("2d"),i=n.createRadialGradient(32,32,1,32,32,32);i.addColorStop(0,o),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new yn(t);return s.needsUpdate=!0,s}function ho(o,e,t,n,i){const s=X.smoothstep(n,.63,.7),r=1-X.smoothstep(n,1.01,1.08),a=s*r;if(a<=1e-4)return 0;const l=1-Math.abs(Ut(o*14+3.1,e*14,t*14-2.7)),c=Vn(o*7.5-4.2,e*7.5+1.1,t*7.5+5.8,4),h=Math.max(0,c+.15)*(.45+.85*Math.pow(l,2.2));return i*(-.0018+.0155*h)*a}function ni(o,e,t,n,i,s,r){o.position.copy(e).multiplyScalar(t),o.quaternion.setFromUnitVectors(Sl,e),n!==0&&o.rotateY(n),o.scale.set(i,s,r),o.updateMatrix()}function sy(){const e=bl(256,256),t=bl(256,256),n=e.getContext("2d"),i=t.getContext("2d");n.fillStyle="#14171d",n.fillRect(0,0,256,256);for(let c=0;c<256;c+=8){const h=Math.floor(k(0,c,19)*14);n.fillStyle=`rgb(${16+h}, ${18+h}, ${22+h})`,n.fillRect(0,c,256,4)}i.fillStyle="#000000",i.fillRect(0,0,256,256);const s=["#9a521e","#7c401b","#8c1e24","#6d4b2b"];let r=0;for(let c=6;c<256;c+=10)for(let h=4;h<256;h+=8)r++,k(h,c,41)<.135&&(i.fillStyle=s[r%s.length],i.fillRect(h,c,4,3));const a=new yn(e);a.colorSpace=Gt;const l=new yn(t);return l.colorSpace=Gt,{map:a,emissiveMap:l}}function oy(o){const e=o.localRadius,t=new Yt;t.name="NightCity_Concentric_Districts_R2_R3";const n=new Ot,i=new M,{map:s,emissiveMap:r}=sy(),a=new ke({map:s,emissiveMap:r,emissive:new re(1,.9,.8),emissiveIntensity:.48,roughness:.78,metalness:.35});a.userData.animatedEmissive=!0;const l=new ke({color:1580066,roughness:.72,metalness:.6}),c=new ke({color:2105894,roughness:.68,metalness:.52}),h=new In({color:new re(1.2,.18,.12)});h.userData.animatedEmissive=!0;const u=960,d=new nn(1,1,1);d.translate(0,.5,0);const f=new pt(d,a,u);f.name="NC_Ring2_Industrial_Slum_Blocks";for(let $=0;$<u;$++){const Re=k($,3,19),Be=.335+Math.pow(Re,.92)*.315,ot=k($,7,23)*Math.PI*2;i.set(Math.sin(Be)*Math.cos(ot),Math.cos(Be),Math.sin(Be)*Math.sin(ot));const et=1-X.smoothstep(Be,.35,.64),qe=e*(.0055+.0085*k($,5,11)),gt=e*(.0055+.0085*k($,9,13)),Nt=e*(.008+(.044*et+.012)*Math.pow(k($,11,29),1.45));ni(n,i,e*.9985,k($,2,7)*Math.PI,qe,Nt,gt),f.setMatrixAt($,n.matrix)}f.instanceMatrix.needsUpdate=!0,t.add(f);const g=260,_=new pt(d,l,g);_.name="NC_Ring2_Industrial_Warehouses";for(let $=0;$<g;$++){const Re=.42+k($,17,5)*.23,Be=k($,19,31)*Math.PI*2;i.set(Math.sin(Re)*Math.cos(Be),Math.cos(Re),Math.sin(Re)*Math.sin(Be));const ot=e*(.014+.018*k($,4,8)),et=e*(.018+.022*k($,6,12)),qe=e*(.008+.011*k($,8,16));ni(n,i,e*.9985,k($,3,21)*Math.PI,ot,qe,et),_.setMatrixAt($,n.matrix)}_.instanceMatrix.needsUpdate=!0,t.add(_);const m=72,p=new Jt(.46,.78,1,12,1,!1);p.translate(0,.5,0);const y=new pt(p,c,m);y.name="NC_Ring2_Cooling_Towers";const b=140,x=new Jt(.18,.34,1,8);x.translate(0,.5,0);const P=new pt(x,c,b);P.name="NC_Ring2_Smokestacks";const E=new ln(.32,6,6),T=new pt(E,h,b);T.name="NC_Ring2_Stack_RedBeacons";const S=new Float32Array((m+b)*3),v=[];for(let $=0;$<m;$++){const Re=.44+k($,21,9)*.21,Be=k($,25,13)*Math.PI*2;i.set(Math.sin(Re)*Math.cos(Be),Math.cos(Re),Math.sin(Re)*Math.sin(Be));const ot=e*(.008+.006*k($,2,15)),et=e*(.022+.016*k($,6,27));ni(n,i,e*.9985,0,ot,et,ot),y.setMatrixAt($,n.matrix);const qe=e*.9985+et*1.15;v.push({dir:i.clone(),alt:qe,phase:k($,1,3)*Math.PI*2}),S[$*3]=i.x*qe,S[$*3+1]=i.y*qe,S[$*3+2]=i.z*qe}y.instanceMatrix.needsUpdate=!0;for(let $=0;$<b;$++){const Re=.38+k($,29,7)*.27,Be=k($,31,17)*Math.PI*2;i.set(Math.sin(Re)*Math.cos(Be),Math.cos(Re),Math.sin(Re)*Math.sin(Be));const ot=e*(.0045+.003*k($,4,18)),et=e*(.028+.024*k($,9,22));ni(n,i,e*.9985,0,ot,et,ot),P.setMatrixAt($,n.matrix);const qe=e*.9985+et;ni(n,i,qe,0,ot*.6,ot*.6,ot*.6),T.setMatrixAt($,n.matrix);const gt=m+$,Nt=qe+e*.008;v.push({dir:i.clone(),alt:Nt,phase:k(gt,5,9)*Math.PI*2}),S[gt*3]=i.x*Nt,S[gt*3+1]=i.y*Nt,S[gt*3+2]=i.z*Nt}P.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,t.add(y,P,T);const w=210,A=new pt(x,l,w);A.name="NC_Ring2_Antennas";for(let $=0;$<w;$++){const Re=.35+k($,41,11)*.3,Be=k($,43,19)*Math.PI*2;i.set(Math.sin(Re)*Math.cos(Be),Math.cos(Re),Math.sin(Re)*Math.sin(Be));const ot=e*(.018+.032*k($,8,25));ni(n,i,e*1.005,0,e*.0014,ot,e*.0014),A.setMatrixAt($,n.matrix)}A.instanceMatrix.needsUpdate=!0,t.add(A);const F=240,I=new Float32Array(F*3);for(let $=0;$<F;$++){const Re=$%6,Be=.35+$/F*.3,ot=Re*Math.PI/3+Math.sin(Be*5)*.08+(k($,3,37)-.5)*.05;i.set(Math.sin(Be)*Math.cos(ot),Math.cos(Be),Math.sin(Be)*Math.sin(ot));const et=e*1.0025;I[$*3]=i.x*et,I[$*3+1]=i.y*et,I[$*3+2]=i.z*et}const G=new Pt;G.setAttribute("position",new St(I,3));const z=new Pn({map:ur("rgba(255, 195, 115, 0.9)","rgba(180, 90, 30, 0.32)"),color:14254136,size:1.65,transparent:!0,opacity:.78,depthWrite:!1,blending:_n,sizeAttenuation:!0}),O=new Ln(G,z);O.name="NC_Ring2_Isolated_Streetlamps",t.add(O);const L=new Pt;L.setAttribute("position",new St(S,3));const N=new Pn({map:ur("rgba(22, 26, 34, 0.55)","rgba(14, 18, 24, 0.25)"),color:1975340,size:15.5,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),Y=new Ln(L,N);Y.name="NC_Ring2_Industrial_Smoke",t.add(Y);const J=44,oe=96,he=(J+1)*(oe+1),be=new Float32Array(he*3),U=new Float32Array(he*3),V=[];for(let $=0;$<=J;$++){const Re=.62+$/J*.46,Be=Math.sin(Re),ot=Math.cos(Re);for(let et=0;et<=oe;et++){const qe=et/oe*Math.PI*2,gt=Be*Math.cos(qe),Nt=ot,jt=Be*Math.sin(qe),Qt=ho(gt,Nt,jt,Re,e),sn=e*.999+Qt,en=$*(oe+1)+et;be[en*3]=gt*sn,be[en*3+1]=Nt*sn,be[en*3+2]=jt*sn;const Dt=Ut(gt*18+2,Nt*18,jt*18)*.5+.5,Zt=X.clamp(Qt/(e*.012),0,1);U[en*3]=.24+Dt*.14+Zt*.12,U[en*3+1]=.11+Dt*.055+Zt*.04,U[en*3+2]=.07+Dt*.035}}for(let $=0;$<J;$++)for(let Re=0;Re<oe;Re++){const Be=$*(oe+1)+Re,ot=Be+(oe+1);V.push(Be,ot,Be+1,Be+1,ot,ot+1)}const te=new Pt;te.setAttribute("position",new St(be,3)),te.setAttribute("color",new St(U,3)),te.setIndex(V),te.computeVertexNormals();const se=new ke({vertexColors:!0,roughness:.96,metalness:.04}),de=new ht(te,se);de.name="NC_Ring3_Badlands_Terrain",t.add(de);const fe=420,_e=new Vs(1,0),Pe=_e.attributes.position;for(let $=0;$<Pe.count;$++){const Re=Pe.getX($),Be=Pe.getY($),ot=Pe.getZ($),et=.72+.42*k(Math.round(Re*100),Math.round(Be*100),Math.round(ot*100));Pe.setXYZ($,Re*et,Be*(.55+.35*et),ot*et)}_e.computeVertexNormals();const ye=new ke({color:6041375,roughness:.94,metalness:.05}),Se=new pt(_e,ye,fe);Se.name="NC_Ring3_Badlands_Rocks";for(let $=0;$<fe;$++){const Re=.67+k($,51,3)*.37,Be=k($,53,17)*Math.PI*2;i.set(Math.sin(Re)*Math.cos(Be),Math.cos(Re),Math.sin(Re)*Math.sin(Be));const ot=ho(i.x,i.y,i.z,Re,e),et=e*(.008+.022*Math.pow(k($,7,11),1.6)),qe=et*(.45+.9*k($,9,13)),gt=et*(.65+.6*k($,13,5));ni(n,i,e+ot*.96,k($,3,29)*Math.PI*2,et,qe,gt),Se.setMatrixAt($,n.matrix)}Se.instanceMatrix.needsUpdate=!0,t.add(Se);const W=4,Je=[.25,1.85,3.45,5.05],We=[],je=[],Ee=38,nt=e*.0042,Le=new M,D=new M,C=new M,j=new ke({color:1710364,roughness:.88,metalness:.1,side:$t});for(let $=0;$<W;$++){const Re=Je[$],Be=new Float32Array((Ee+1)*2*3),ot=[];for(let gt=0;gt<=Ee;gt++){const Nt=gt/Ee,jt=.64+Nt*.4,Qt=Re+Math.sin(Nt*3.8+$)*.11,sn=Math.sin(jt),en=Math.cos(jt);i.set(sn*Math.cos(Qt),en,sn*Math.sin(Qt)),Le.set(en*Math.cos(Qt),-sn,en*Math.sin(Qt)).normalize(),D.crossVectors(i,Le).normalize();const Dt=ho(i.x,i.y,i.z,jt,e),Zt=e+Dt+e*8e-4;C.copy(i).multiplyScalar(Zt);const Mt=gt*2;if(Be[Mt*3]=C.x-D.x*nt,Be[Mt*3+1]=C.y-D.y*nt,Be[Mt*3+2]=C.z-D.z*nt,Be[(Mt+1)*3]=C.x+D.x*nt,Be[(Mt+1)*3+1]=C.y+D.y*nt,Be[(Mt+1)*3+2]=C.z+D.z*nt,gt<Ee&&ot.push(Mt,Mt+2,Mt+1,Mt+1,Mt+2,Mt+3),gt>1&&gt<Ee-1&&gt%2===0){const It=gt%4===0?1:-1,tn=C.clone().addScaledVector(D,It*nt*1.45).normalize(),R=e*.0085;ni(n,tn,Zt-e*4e-4,0,e*6e-4,R,e*6e-4),We.push(n.matrix.clone());const H=Zt+R;je.push(tn.x*H,tn.y*H,tn.z*H)}}const et=new Pt;et.setAttribute("position",new St(Be,3)),et.setIndex(ot),et.computeVertexNormals();const qe=new ht(et,j);qe.name=`NC_Ring3_Badlands_Road_${$+1}`,t.add(qe)}const ue=new Jt(.4,.55,1,5);ue.translate(0,.5,0);const ce=new pt(ue,l,We.length);ce.name="NC_Ring3_Road_LightPoles",We.forEach(($,Re)=>ce.setMatrixAt(Re,$)),ce.instanceMatrix.needsUpdate=!0,t.add(ce);const le=new Pt;le.setAttribute("position",new Ht(je,3));const Fe=new Pn({map:ur("rgba(255, 185, 95, 0.95)","rgba(220, 100, 28, 0.35)"),color:16754250,size:2.1,transparent:!0,opacity:.85,depthWrite:!1,blending:_n,sizeAttenuation:!0}),Ae=new Ln(le,Fe);Ae.name="NC_Ring3_Road_LightOrbs",t.add(Ae);const De=36,xt=new pt(x,new ke({color:7304574,roughness:.55,metalness:.45}),De);xt.name="NC_Ring3_WindTurbine_Masts";const me=new nn(.11,1,.03);me.translate(0,.5,0);const Te=new pt(me,new ke({color:9278878,roughness:.45,metalness:.35}),De*3);Te.name="NC_Ring3_WindTurbine_Blades";const Xe=[];for(let $=0;$<De;$++){const Re=$%4,Be=.72+Re*.072,ot=.78+Re*1.48,et=Be+(k($,61,7)-.5)*.075,qe=ot+(k($,67,13)-.5)*.24;i.set(Math.sin(et)*Math.cos(qe),Math.cos(et),Math.sin(et)*Math.sin(qe));const gt=ho(i.x,i.y,i.z,et,e),Nt=e*(.025+.012*k($,3,7)),jt=e+gt-e*5e-4;ni(n,i,jt,0,e*.0022,Nt,e*.0022),xt.setMatrixAt($,n.matrix);const Qt=i.clone().multiplyScalar(jt+Nt),sn=new mt().setFromUnitVectors(Sl,i),en=new mt().setFromAxisAngle(Sl,k($,12,5)*Math.PI*2),Dt=sn.multiply(en);Xe.push({hubPos:Qt,orientQuat:Dt,bladeLen:Nt*.58,omega:1+k($,8,19)*.9,phase:k($,15,2)*Math.PI*2})}xt.instanceMatrix.needsUpdate=!0,t.add(xt,Te);const it=18,He=it*3,_t=new pt(d,l,He);_t.name="NC_Ring3_Isolated_Outposts";const lt=[];let At=0;for(let $=0;$<it;$++){const Re=.74+k($,71,9)*.27,Be=k($,73,19)*Math.PI*2;i.set(Math.sin(Re)*Math.cos(Be),Math.cos(Re),Math.sin(Re)*Math.sin(Be));const ot=ho(i.x,i.y,i.z,Re,e),et=new M(Math.cos(Re)*Math.cos(Be),-Math.sin(Re),Math.cos(Re)*Math.sin(Be)).normalize(),qe=new M().crossVectors(i,et).normalize();for(let gt=0;gt<3;gt++){const Nt=(k($*3+gt,2,11)-.5)*.025,jt=(k($*3+gt,4,17)-.5)*.025,Qt=i.clone().addScaledVector(et,Nt).addScaledVector(qe,jt).normalize(),sn=e*(.0055+.004*k($,gt,21)),en=e*(.0065+.005*k(gt,$,31)),Dt=e*(.0042+.003*k($+1,gt,5));if(ni(n,Qt,e+ot*.95,k($,gt,4)*Math.PI,sn,Dt,en),_t.setMatrixAt(At++,n.matrix),gt<2){const Zt=e+ot*.95+Dt*1.1;lt.push(Qt.x*Zt,Qt.y*Zt,Qt.z*Zt)}}}_t.instanceMatrix.needsUpdate=!0,t.add(_t);const q=new Pt;q.setAttribute("position",new Ht(lt,3));const we=new Pn({map:ur("rgba(255, 215, 145, 1.0)","rgba(255, 145, 50, 0.35)"),color:16760944,size:2,transparent:!0,opacity:.9,depthWrite:!1,blending:_n,sizeAttenuation:!0}),Z=new Ln(q,we);Z.name="NC_Ring3_Outpost_WarmLights",t.add(Z);const ae=new mt,Ne=new mt,Ue=new M,at=new rt,ut=Math.PI*2/3,Rt=new M(0,0,1);return{group:t,update($,Re=1){if(!t.parent||!t.parent.visible)return;for(let et=0;et<De;et++){const qe=Xe[et],gt=$*qe.omega+qe.phase;Ue.set(qe.bladeLen*.25,qe.bladeLen,qe.bladeLen*.25);for(let Nt=0;Nt<3;Nt++){const jt=gt+Nt*ut;ae.setFromAxisAngle(Rt,jt),Ne.copy(qe.orientQuat).multiply(ae),at.compose(qe.hubPos,Ne,Ue),Te.setMatrixAt(et*3+Nt,at)}}Te.instanceMatrix.needsUpdate=!0;const Be=L.attributes.position;for(let et=0;et<v.length;et++){const qe=v[et],gt=1+.002*Math.sin($*.7+qe.phase);Be.setXYZ(et,qe.dir.x*qe.alt*gt,qe.dir.y*qe.alt*gt,qe.dir.z*qe.alt*gt)}Be.needsUpdate=!0;const ot=X.clamp(.45+(Re-1)*.28,.35,.85);a.emissiveIntensity=.48*ot,z.opacity=X.clamp(.45+(Re-.8)*.25,.38,.82),Fe.opacity=X.clamp(.45+(Re-.8)*.3,.4,.88),we.opacity=X.clamp(.5+(Re-.8)*.32,.45,.92)}}}const cn=157.5,Ni=1.45,Aa=1/3.5,Lh=X.degToRad(68),dr=new M(0,Math.cos(Lh),Math.sin(Lh)).normalize(),ry={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:11.5,eccentricity:.045,orbitOmega:.0295,localRadius:1.32,groundFloorAlt:1.65,kmScale:5800,rotationSpeed:.014,axialOmega:.015,axialTiltX:X.degToRad(6),axialTiltZ:X.degToRad(21),initialSpinAngle:-.95,capLocalDir:dr,landable:!0,hasProceduralWorld:!0,fogColor:5944012,maxFogDensity:.0036,skyColor:2523838,particleColor:10417919,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new M(0,1.32*2.58,1.32*.92),lowOrbitLookAt:new M(0,1.32,0),highCloudOffset:new M(-.08,1.32*2.24,1.32*.56),aerialOffset:new M(-.025,1.32+.072,.095),aerialLookAt:new M(.028,1.32+.048,-.022),sunColor:16773332,sunIntensity:2.85,ambientColor:2377264,ambientIntensity:.92,hemiSkyColor:6469887,hemiGroundColor:1985064,hemiIntensity:1.45,localLightColor:61695,localBounceColor:12073215,bloomStrength:.54,skyDome:{zenith:1866720,mid:5420780,horizon:9365738,sunGlow:16773320,zenithAlpha:.92,starFloor:0}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:18.5,eccentricity:.035,orbitOmega:.0144,localRadius:1.42,groundFloorAlt:.32,minSpeed:3.2,glbLocalScale:.0038*Aa*3.8,kmScale:6200,rotationSpeed:.011,axialOmega:.012,axialTiltX:X.degToRad(-5),axialTiltZ:X.degToRad(18.5),initialSpinAngle:-.62,capLocalDir:dr,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0044,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new M(0,1.42*2.58,1.42*.92),lowOrbitLookAt:new M(0,1.42,0),highCloudOffset:new M(-.06,1.42*2.24,1.42*.56),aerialOffset:new M(-.012,1.42+.145,.195),aerialLookAt:new M(.005,1.42+.175,-.055),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.56,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:26.5,eccentricity:.05,orbitOmega:.0084,localRadius:1.52,groundFloorAlt:.95,glbLocalScale:.004*Aa,kmScale:6800,rotationSpeed:.01,axialOmega:.011,axialTiltX:X.degToRad(8),axialTiltZ:X.degToRad(-23.5),initialSpinAngle:-1.18,capLocalDir:dr,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new M(-.32,1.52*2.58,1.52*.92),lowOrbitLookAt:new M(0,1.52,0),highCloudOffset:new M(-.18,1.52*2.24,1.52*.58),aerialOffset:new M(-.025,1.52+.08,.092),aerialLookAt:new M(.003,1.52+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:35.5,eccentricity:.04,orbitOmega:.0054,localRadius:1.62,groundFloorAlt:.95,glbLocalScale:.0039*Aa,kmScale:7500,rotationSpeed:.009,axialOmega:.01,axialTiltX:X.degToRad(-6),axialTiltZ:X.degToRad(24),initialSpinAngle:-.88,capLocalDir:dr,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new M(0,1.62*2.58,1.62*.92),lowOrbitLookAt:new M(0,1.62,0),highCloudOffset:new M(.08,1.62*2.24,1.62*.58),aerialOffset:new M(0,1.62+.042,.102),aerialLookAt:new M(0,1.62+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:46,eccentricity:.06,orbitOmega:.0037,localRadius:1.85,groundFloorAlt:2,kmScale:11800,rotationSpeed:.05,axialOmega:.024,axialTiltX:X.degToRad(7),axialTiltZ:X.degToRad(26),initialSpinAngle:0,landable:!1}};class ay{constructor({scene:e,camera:t,controls:n,starfield:i,cockpitParticles:s,bloomPass:r,onStatusUpdate:a}){this.scene=e,this.camera=t,this.controls=n,this.starfield=i,this.cockpitParticles=s,this.bloomPass=r,this.onStatusUpdate=a||(()=>{}),this.dracoLoader=new av,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new Ax,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Yt,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(cn),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.elapsedTime=0,this.simulationTime=0,this.timeScales=[1,10,60],this.timeScaleIndex=0,this.timeScale=1,this._tmpInvQuat=new mt,this._tmpCapInvQuat=new mt,this._tmpLocalDir=new M,this._tmpRadial=new M,this._tmpSunDir=new M,this._tmpPlanetToSun=new M,this._tmpUp=new M(0,1,0),this._tmpStationPos=new M,this._tmpColorA=new re,this._tmpColorB=new re,this._tmpColorC=new re,this._tmpSkyColor=new re,this._tmpFogColor=new re,this._identityQuat=new mt,this.skyDome=xv(),this.scene.add(this.skyDome),this._setupLighting()}_setupLighting(){this.ambientLight=new nx(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new $_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new Sr(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new Bu(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.scene.add(this.planetaryDirLight),this.localAtmoLight=new Sr(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new Sr(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(.85),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new M(3.4,2.35,.72)},uHotColor:{value:new M(4,3.1,1.45)},uLimbColor:{value:new M(2.2,.85,.14)}};const n=new an({uniforms:this.sunPlasmaUniforms,vertexShader:`
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
      `,fog:!1});this.sunNode.traverse(_=>{_.isMesh&&(_.material=n)});const i=new an({uniforms:{uColor:{value:new M(2.8,1.35,.35)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,fog:!1,blending:_n,side:bn}),s=new ht(new ln(2.52,48,48),i);s.name="Solar_Tight_Corona";const r=document.createElement("canvas");r.width=512,r.height=512;const a=r.getContext("2d");a.clearRect(0,0,512,512);const l=256,c=256,h=a.createRadialGradient(l,c,4,l,c,130);h.addColorStop(0,"rgba(255, 245, 205, 0.72)"),h.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),h.addColorStop(1,"rgba(255, 140, 40, 0.0)"),a.fillStyle=h,a.beginPath(),a.arc(l,c,130,0,Math.PI*2),a.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((_,m)=>{a.save(),a.translate(l,c),a.rotate(_+.18);const p=m===0?242:210,y=a.createLinearGradient(-p,0,p,0);y.addColorStop(0,"rgba(255, 210, 120, 0.0)"),y.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),y.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),y.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),y.addColorStop(1,"rgba(255, 210, 120, 0.0)"),a.fillStyle=y,a.beginPath(),a.ellipse(0,0,p,3.2,0,0,Math.PI*2),a.fill(),a.restore()});const d=new yn(r);d.colorSpace=Gt;const f=new Pu({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:_n}),g=new m_(f);g.name="Solar_Diffraction_Rays",g.scale.set(10.8,10.8,1),t&&(t.add(s),t.add(g))}cycleTimeScale(){return this.timeScaleIndex=(this.timeScaleIndex+1)%this.timeScales.length,this.timeScale=this.timeScales[this.timeScaleIndex],this.timeScale}syncCameraPostFlight(){this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position),this.camera.updateMatrixWorld(),yl.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),(this.localAtmoLight.intensity>.001||this.localBounceLight.intensity>.001)&&(this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,18),this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,-8))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,s)=>{this.gltfLoader.load(e,r=>i(r),void 0,r=>s(r))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const s=Array.isArray(i.material)?i.material:[i.material];for(const r of s)r&&r.emissiveIntensity!==void 0&&r.emissiveIntensity>3.2&&(r.emissiveIntensity=2.2+Math.log10(r.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(ry)){const s=t.getObjectByName(i.spinnerName),r=t.getObjectByName(i.rootName),a=t.getObjectByName(i.bodyName);if(!r)continue;const c=new Xn().setFromQuaternion(s?s.quaternion:new mt,"YXZ").y||0,h=i.semiMajorAxis,u=i.eccentricity||.04,d=h*(1-u*u)/(1+u*Math.cos(c));r.position.set(d,0,0);const f=[];let g=0;const _={P1_Moon_A_Ghomrassen:"Luna Ghomrassen",P1_Moon_B_Guermessa:"Luna Guermessa",P2_Moon_NeoLuna:"Neo-Luna",P3_Moon_A_Argent:"Luna Argent",P3_Moon_B_Crimson:"Luna Crimson",P4_Moon_Centax_1:"Centax I",P4_Moon_Centax_2:"Centax II",P4_Moon_Centax_3:"Centax III",P5_Moon_1_InnerShepherd:"Pastora Interior",P5_Moon_2_Polyphemus_Minor:"Polyphemus Minor",P5_Moon_3_Eywa_Outpost:"Puesto Eywa"};this.orbitalGroup.updateMatrixWorld(!0),r.children.forEach(S=>{if(S.name.includes("Moon")&&!S.name.endsWith("_Orbit")){let v=.08;if(S.traverse(w=>{if(w.isMesh&&w.material&&(w.material.fog=!1,w.geometry)){w.geometry.boundingSphere||w.geometry.computeBoundingSphere();const A=(w.geometry.boundingSphere?.radius||.5)*Math.max(w.scale.x,w.scale.y,w.scale.z);A>v&&(v=A)}}),n==="p1"){const w=i.localRadius*(1.95+g*.65),A=w*(.22+g*.14),F=g===0?-1.85:-.78;S.position.set(Math.cos(F)*w,A,Math.sin(F)*w);const I=new M;S.getWorldPosition(I),f.push({index:g,rawName:S.name,name:_[S.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:S,moonRadius:Math.max(8,v*Math.max(S.scale.x,1)*cn),baseRadius:w,angle:F,yOffset:A,speed:.014+g*.008,prevWorldPos:I.clone(),currWorldPos:I.clone(),deltaPos:new M})}else{S.position.multiplyScalar(1.65),S.position.length()<i.localRadius*1.6&&S.position.normalize().multiplyScalar(i.localRadius*1.65);const w=new M;S.getWorldPosition(w),f.push({index:g,rawName:S.name,name:_[S.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:S,moonRadius:Math.max(8,v*Math.max(S.scale.x,1)*cn),baseRadius:S.position.length(),angle:Math.atan2(S.position.z,S.position.x),yOffset:S.position.y,speed:.06+Math.random()*.08,prevWorldPos:w.clone(),currWorldPos:w.clone(),deltaPos:new M})}g++}});const m=new Yt;m.name=`${i.id}_Axial_Tilt`,m.rotation.order="XZY",m.rotation.x=i.axialTiltX||0,m.rotation.z=i.axialTiltZ||0,r.add(m);const p=new Yt;p.name=`${i.id}_Axial_Spin`,p.rotation.y=i.initialSpinAngle||0,m.add(p);let y=null,b=null,x=null;if(i.landable){r.traverse(v=>{v!==r&&v.isMesh&&(v.name.includes("_Body")||v.name.includes("_Atmosphere")||v.name.includes("_Clouds")||v.name.includes("_DarkClouds")||/^Planet_01/i.test(v.name))&&(v.visible=!1)}),y=vv(i,cn),y.userBaseColors={sunlit:new re(y.cloudDeckPalette.sunlit),ambient:new re(y.cloudDeckPalette.ambient),horizon:new re(y.cloudDeckPalette.horizon)},p.add(y.group),b=y.atmosphere,x=new Yt,x.name=`${i.id}_Cap_Frame`;const S=i.capLocalDir?i.capLocalDir.clone().normalize():new M(0,1,0);x.quaternion.setFromUnitVectors(new M(0,1,0),S),p.add(x)}else{const S=r.children.filter(v=>v!==m&&!v.name.includes("Moon")&&!v.name.includes("_Orbit"));for(const v of S)p.add(v);b=Wu(i,i.localRadius,1.05),p.add(b)}const P=new Yt;P.name=`${i.id}_Atmosphere_Surface_Detail`,P.visible=!1,(x||p).add(P),this.orbitalGroup.updateMatrixWorld(!0);const E=new M;r.getWorldPosition(E);const T=new mt;p.getWorldQuaternion(T),this.planetNodes.set(n,{config:i,spinner:s,root:r,tiltGroup:m,spinGroup:p,capFrame:x,body:a,orbitalBundle:y,atmosphereShell:b,surfaceCapGroup:P,surfaceLoaded:!1,surfaceLoading:!1,animators:[],nightMaterials:[],orbitAngle:c,spinAngle:i.initialSpinAngle||0,prevWorldPos:E.clone(),currWorldPos:E.clone(),planetDeltaPos:new M,prevSpinWorldQuat:T.clone(),currSpinWorldQuat:T.clone(),spinQuatDelta:new mt,moonOrbits:f})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95,2.15,2.35),this.controls.setPose(new M(0,1190,4270),new M(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded||t.surfaceLoading)return;t.surfaceLoading=!0;const n=t.config;try{if(n.hasProceduralWorld){const s=Yv(n);t.surfaceCapGroup.add(s.group),t.pandoraWorld=s;const r=iy(n.localRadius,s);t.surfaceCapGroup.add(r.group),t.animators.push(r)}else if(n.surfaceUrl){const s=await this._loadGLB(n.surfaceUrl);if(Mv(s,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(s),n.id==="p2"){this._calibrateNightCityMaterials(s);const r=oy(n);t.surfaceCapGroup.add(r.group),t.animators.push(r);const a=Rh(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(jv(s))}else if(n.id==="p4"){const r=yv(n,1400);t.surfaceCapGroup.add(r);const a=Rh(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(Zv(s))}else if(n.id==="p3"){const r=$v(n.localRadius);t.surfaceCapGroup.add(r.group),t.animators.push(r)}}const i=new Set;t.surfaceCapGroup.traverse(s=>{if(!s.isMesh&&!s.isInstancedMesh)return;const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){if(!a||i.has(a)||a.userData?.animatedEmissive)continue;i.add(a),a.emissive&&a.emissiveIntensity!==void 0&&(a.emissiveMap||a.emissive.r>.008||a.emissive.g>.008||a.emissive.b>.008)&&t.nightMaterials.push({material:a,baseEmissive:a.emissiveIntensity,tier:a.userData?.nightTier||"default"})}}),t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}}_calibrateNightCityMaterials(e){const t=new Set;e.traverse(n=>{if(!n.isMesh)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const s of i){if(!s||t.has(s)||s.emissiveIntensity===void 0)continue;t.add(s),s.userData=s.userData||{};const r=s.name||"";/Windows_Dense|Windows_Brutal|Windows_High/i.test(r)?(s.emissive.setHex(12113130),s.emissiveIntensity=.44,s.userData.nightTier="window"):/rib_warm_white/i.test(r)?(s.emissiveIntensity=1.05,s.userData.nightTier="window"):/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber|chimney_flare/i.test(r)?(s.emissiveIntensity=1.55,s.userData.nightTier="accent"):/backboard/i.test(r)?(s.emissiveIntensity=.42,s.userData.nightTier="window"):/neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(r)&&(s.emissiveIntensity=/Koi|Geisha|Banner/i.test(r)?2.15:2.35,s.userData.nightTier="hero")}})}_showTransitionBanner(e,t,n,i=1500){const s=document.getElementById("hud-transition-banner"),r=document.getElementById("banner-subtitle"),a=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");r&&(r.textContent=e),a&&(a.textContent=t),s&&s.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{s&&s.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){const t=document.querySelectorAll(".nav-btn");t.length!==0&&t.forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){if(e&&typeof e=="object")return this._navigateToDescriptor(e);const t=String(e);if(this._highlightActiveNavButton(t),t==="1")return this._flyToSolarSystemOverview(!1);if(t==="2")return this._flyToStation("crystal_palace");const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const s=this.planetNodes.get(i);if(!s)return;await this.ensurePlanetSurfaceLoaded(i),this.orbitalGroup.updateMatrixWorld(!0);const r=new M;s.root.getWorldPosition(r);const a=this.camera.position.distanceTo(r),l=s.config.localRadius*cn,c=l*Ni;return a-l>c*1.1?this._flyToPlanetOrbit(i):this._flyToPlanetSurface(i)}async _navigateToDescriptor(e){switch(e.type){case"sun_orbit":return this._flyToSolarSystemOverview(!0);case"station":return this._flyToStation(e.stationId||"crystal_palace");case"planet_orbit":return this._flyToPlanetOrbit(e.planetKey);case"planet_surface":return this._flyToPlanetSurface(e.planetKey,e.landmarkId);case"moon":return this._flyToMoon(e.planetKey,e.moonIndex??0);default:return null}}_flyToSolarSystemOverview(e=!1){const t=e?{targetPos:new M(0,380,1460),lookAtPos:new M(0,0,0)}:{targetPos:new M(0,1280,4380),lookAtPos:new M(0,0,0)};this.controls.engageAutopilot({getTargetPose:()=>({targetPos:t.targetPos.clone(),lookAtPos:t.lookAtPos.clone(),upVec:new M(0,1,0)}),duration:3.4})}async _flyToStation(e="crystal_palace"){if(e!=="crystal_palace"||(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor))return;this.orbitalGroup.updateMatrixWorld(!0);const t=new M;this.crystalPalaceAnchor.getWorldPosition(t);const n=this.camera.position.distanceTo(t),i=X.clamp(n/780,2.8,4.8);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const s=new M;this.crystalPalaceAnchor.getWorldPosition(s);const r=s.clone().negate().normalize(),a=new M().crossVectors(new M(0,1,0),r).normalize();return{targetPos:s.clone().addScaledVector(r,62).addScaledVector(a,38).add(new M(0,20,0)),lookAtPos:s,upVec:new M(0,1,0)}},duration:i})}async _flyToPlanetOrbit(e){const t=this.planetNodes.get(e);if(!t)return;const n=t.config;n.landable&&await this.ensurePlanetSurfaceLoaded(e);const i=t.capFrame||t.spinGroup||t.root;this.orbitalGroup.updateMatrixWorld(!0);const s=new M;t.root.getWorldPosition(s);const r=this.camera.position.distanceTo(s),a=X.clamp(r/820,2.8,5.2);this.controls.engageAutopilot({getTargetPose:()=>{if(this.orbitalGroup.updateMatrixWorld(!0),!n.landable){const l=new M;t.root.getWorldPosition(l);const c=l.clone().negate().normalize(),h=new M().crossVectors(new M(0,1,0),c).normalize(),u=n.localRadius*cn;return{targetPos:l.clone().addScaledVector(c,u*2.55).addScaledVector(h,u*1.45).add(new M(0,u*1.15,0)),lookAtPos:l,upVec:new M(0,1,0)}}return{targetPos:n.lowOrbitOffset.clone().applyMatrix4(i.matrixWorld),lookAtPos:n.lowOrbitLookAt.clone().applyMatrix4(i.matrixWorld),upVec:new M(0,1,0).transformDirection(i.matrixWorld).normalize()}},duration:a})}async _flyToPlanetSurface(e,t=null){const n=this.planetNodes.get(e);if(!n)return;const i=n.config;if(!i.landable)return this._flyToPlanetOrbit(e);if(await this.ensurePlanetSurfaceLoaded(e),e==="p1"&&t)return this.navigateToPandoraLandmark(t);const s=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const r=new M;n.root.getWorldPosition(r);const a=this.camera.position.distanceTo(r),l=i.localRadius*cn,c=l*Ni,h=a-l;if(h>c*1.18){const u=X.clamp(a/840,2.8,5);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.highCloudOffset.clone().applyMatrix4(s.matrixWorld),lookAtPos:i.lowOrbitLookAt.clone().applyMatrix4(s.matrixWorld),upVec:new M(0,1,0).transformDirection(s.matrixWorld).normalize()}),duration:u,onComplete:()=>{this._engageCloudBreakoutGlide(i,s)}});return}if(h>c*.24){this._engageCloudBreakoutGlide(i,s);return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.aerialOffset.clone().applyMatrix4(s.matrixWorld),lookAtPos:i.aerialLookAt.clone().applyMatrix4(s.matrixWorld),upVec:new M(0,1,0).transformDirection(s.matrixWorld).normalize()}),duration:2.6})}_engageCloudBreakoutGlide(e,t){this.orbitalGroup.updateMatrixWorld(!0);const n=new rt().copy(t.matrixWorld).invert(),i=this.camera.position.clone().applyMatrix4(n),s=[i];i.distanceTo(e.highCloudOffset)>e.localRadius*.28&&s.push(e.highCloudOffset.clone());const r=e.highCloudOffset.clone().lerp(e.aerialOffset,.55).normalize().multiplyScalar(e.localRadius*(1+Ni*.42)),a=e.highCloudOffset.clone().lerp(e.aerialOffset,.82).normalize().multiplyScalar(e.localRadius*(1+Ni*.16));s.push(r,a,e.aerialOffset.clone());const l=new Dn(s);this.controls.engageAutopilot({useDirectCurve:!0,duration:7.4,getTargetPose:c=>{this.orbitalGroup.updateMatrixWorld(!0);const h=l.getPoint(c),u=e.aerialLookAt.clone().lerp(e.lowOrbitLookAt,Math.pow(1-c,1.8)*.45),f=l.getPoint(Math.min(1,c+.08)).lerp(u,Math.min(1,c*1.15+.2));return{targetPos:h.applyMatrix4(t.matrixWorld),lookAtPos:f.applyMatrix4(t.matrixWorld),upVec:new M(0,1,0).transformDirection(t.matrixWorld).normalize()}}})}async _flyToMoon(e,t=0){const n=this.planetNodes.get(e),i=n?.moonOrbits?.[t];if(!n||!i)return;this.orbitalGroup.updateMatrixWorld(!0);const s=new M;i.node.getWorldPosition(s);const r=this.camera.position.distanceTo(s),a=X.clamp(r/820,2.8,5.2),l=Math.max(26,i.moonRadius*4);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const c=new M;i.node.getWorldPosition(c);const h=c.clone().negate().normalize(),u=new M().crossVectors(new M(0,1,0),h).normalize();return{targetPos:c.clone().addScaledVector(h,l*.72).addScaledVector(u,l*.68).add(new M(0,l*.26,0)),lookAtPos:c,upVec:new M(0,1,0)}},duration:a})}async navigateToPandoraLandmark(e){const t=Et.find(v=>v.id===e),n=this.planetNodes.get("p1");if(!t||!n)return;await this.ensurePlanetSurfaceLoaded("p1");const i=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const s=n.config.localRadius,r=new rt().copy(i.matrixWorld).invert(),a=this.camera.position.clone().applyMatrix4(r),l=t.capDir.clone().normalize(),c=Math.abs(l.y)<.85?new M(0,1,0):new M(1,0,0),h=new M().crossVectors(l,c).normalize(),u=l.clone().multiplyScalar(s+t.viewAlt).addScaledVector(h,-t.viewBack).normalize().multiplyScalar(s+t.viewAlt),d=l.clone().multiplyScalar(s+t.viewAlt*.25);if(a.length()>s*2.15){const v=l.clone().multiplyScalar(s*1.46).addScaledVector(h,-.22),w=new M;n.root.getWorldPosition(w);const A=X.clamp(this.camera.position.distanceTo(w)/840,2.8,5);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:v.clone().applyMatrix4(i.matrixWorld),lookAtPos:l.clone().multiplyScalar(s).applyMatrix4(i.matrixWorld),upVec:l.clone().transformDirection(i.matrixWorld).normalize()}),duration:A,onComplete:()=>{this.navigateToPandoraLandmark(e)}});return}const f=a.clone().normalize(),g=f.angleTo(l),_=Math.min(.45,g*.22),m=Math.max(3,Math.ceil(g/.35)),p=new mt,y=new mt().setFromUnitVectors(f,l),b=new mt,x=Math.max(s+.05,Math.min(a.length(),s*1.48)),P=s+t.viewAlt,E=[a.clone()];for(let v=1;v<m;v++){const w=v/m;p.copy(b).slerp(y,w);const A=f.clone().applyQuaternion(p).normalize(),F=X.lerp(x,P,w)+Math.sin(w*Math.PI)*_;E.push(A.multiplyScalar(F))}E.push(u);const T=new Dn(E),S=X.clamp(2.2+g*1.5,2.4,5.4);this.controls.engageAutopilot({useDirectCurve:!0,duration:S,getTargetPose:v=>{this.orbitalGroup.updateMatrixWorld(!0);const w=T.getPoint(v),F=T.getPoint(Math.min(1,v+.08)).lerp(d,Math.min(1,v*1.35)),I=w.clone().normalize();return{targetPos:w.applyMatrix4(i.matrixWorld),lookAtPos:F.applyMatrix4(i.matrixWorld),upVec:I.transformDirection(i.matrixWorld).normalize()}}})}update(e){const t=Math.min(e,.1),n=t*this.timeScale;this.elapsedTime+=t,this.simulationTime+=n,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),yl.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,S]of this.planetNodes){const v=S.config;S.prevWorldPos.copy(S.currWorldPos),S.spinGroup&&S.prevSpinWorldQuat.copy(S.currSpinWorldQuat),S.orbitAngle+=n*v.orbitOmega;const w=v.semiMajorAxis,A=v.eccentricity||.04,F=w*(1-A*A)/(1+A*Math.cos(S.orbitAngle));S.spinner&&(S.spinner.rotation.y=S.orbitAngle),S.root.position.set(F,0,0);for(const I of S.moonOrbits)I.angle+=n*I.speed,I.node.position.set(Math.cos(I.angle)*I.baseRadius,I.yOffset,Math.sin(I.angle)*I.baseRadius);S.spinAngle+=n*(v.axialOmega??v.rotationSpeed??.012),S.spinGroup&&(S.spinGroup.rotation.y=S.spinAngle),S.orbitalBundle&&(S.orbitalBundle.lowerCloudMesh.rotation.y+=n*v.rotationSpeed*.45,S.orbitalBundle.upperCloudMesh.rotation.y+=n*v.rotationSpeed*.85,S.orbitalBundle.lowerCloudGroup.rotation.y+=n*v.rotationSpeed*.28)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=n*.06),this.orbitalGroup.updateMatrixWorld(!0);let i="Sol Central",s=Math.max(0,this.camera.position.length()-2.21*cn),r=12e3,a=null,l=null,c=99999;for(const[S,v]of this.planetNodes){v.root.getWorldPosition(v.currWorldPos),v.planetDeltaPos.copy(v.currWorldPos).sub(v.prevWorldPos);for(const z of v.moonOrbits)z.prevWorldPos.copy(z.currWorldPos),z.node.getWorldPosition(z.currWorldPos),z.deltaPos.copy(z.currWorldPos).sub(z.prevWorldPos);v.spinGroup&&(v.spinGroup.getWorldQuaternion(v.currSpinWorldQuat),this._tmpInvQuat.copy(v.prevSpinWorldQuat).invert(),v.spinQuatDelta.copy(v.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize());const w=v.config.localRadius*cn,A=w*Ni,F=this.camera.position.distanceTo(v.currWorldPos),I=F-w,G=I/A;if(v.atmosphereShell&&v.atmosphereShell.material.uniforms){const z=v.atmosphereShell.material.uniforms;z.uSunPosition.value.set(0,0,0);const O=X.smoothstep(G,0,.85);z.uAltitudeFade.value=X.lerp(.18,1,O)}if(v.config.landable){!v.surfaceLoaded&&!v.surfaceLoading&&F<w*4.5&&this.ensurePlanetSurfaceLoaded(S),v.surfaceCapGroup.scale.setScalar(1);const z=G<(v.config.id==="p2"?.54:.56);if(v.surfaceCapGroup.visible=z,v.config.hasProceduralWorld&&v.orbitalBundle&&(v.orbitalBundle.surfaceMesh.visible=!z),v.orbitalBundle){const O=v.orbitalBundle;O.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(v.currWorldPos),O.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(v.currWorldPos);const L=X.smoothstep(G,.16,.46),N=L*.64,Y=L*.86;if(O.lowerCloudMesh.material.uniforms.uOpacity.value=N,O.lowerCloudMesh.visible=N>.008,O.upperCloudMesh.material.uniforms.uOpacity.value=Y,O.upperCloudMesh.visible=Y>.008,G<.98){const J=1-X.smoothstep(G,.56,.98),oe=Math.exp(-Math.pow((G-.36)/.16,2))*.82,he=Math.max(J*.36,oe);O.lowerCloudPuffs.material.opacity=he,O.lowerCloudGroup.visible=he>.008}else O.lowerCloudGroup.visible=!1}}I<s&&(s=Math.max(0,I),i=v.config.name,r=v.config.kmScale),I<c&&(c=I,l=v,a=S)}if(this.crystalPalaceAnchor){this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);const S=Math.max(0,this.camera.position.distanceTo(this._tmpStationPos)-12);S<s&&(s=S,i="Estación Crystal Palace",r=850)}let h=!1,u=!1,d=null,f=null,g=null,_=this._identityQuat,m=220,p=220*Ni,y=.95,b=8,x=0,P=0,E=null,T="ESPACIO";if(l){const S=l.config;if(m=S.localRadius*cn,p=m*Ni,y=S.groundFloorAlt??.95,b=S.minSpeed??8,S.id==="p1"&&l.pandoraWorld){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();const F=l.pandoraWorld.getFloorAndWaterAtDir(this._tmpLocalDir);E=F;const I=F.terrainElev*cn+(F.hasWater?.55:1.15);if(y=F.hasWater?I:Math.max(.65,I),F.hasWater){const G=F.waterElev*cn;c<G&&(P=G-c,x=X.clamp(P/1.8,0,1))}}const v=p*1.25,w=c/p;if(c<v)u=!0,d=l.planetDeltaPos,f=l.currWorldPos,g=l.prevWorldPos,_=l.spinQuatDelta;else{for(const A of l.moonOrbits)if(this.camera.position.distanceTo(A.currWorldPos)<Math.max(52,A.moonRadius*4.8)){u=!0,d=A.deltaPos,f=A.currWorldPos,g=A.prevWorldPos,_=this._identityQuat;break}if(!u&&this.crystalPalaceAnchor){const A=this.planetNodes.get("p2");A&&(this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos),this.camera.position.distanceTo(this._tmpStationPos)<220&&(u=!0,d=A.planetDeltaPos,f=A.currWorldPos,g=A.prevWorldPos,_=this._identityQuat))}}if(S.landable&&w<1.06){h=w<=1,this.currentDominantPlanet=h?S:null,h&&this.lastBannerPlanetId!==S.id&&(this.lastBannerPlanetId=S.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${S.name.toUpperCase()}`,S.glowCss,1700),S.navKey&&this._highlightActiveNavButton(S.navKey));const A=X.clamp(1-w,0,1),F=1-X.smoothstep(w,.92,1.06),I=this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),G=this._tmpSunDir.copy(this.camera.position).negate().normalize(),z=X.clamp(I.dot(G),-1,1),O=X.smoothstep(-z,-.02,.24),L=X.smoothstep(z,-.02,.28),N=Math.exp(-Math.pow((z-.02)/.14,2))*(1-O*.55);z>.14?T="DÍA":z>=-.08?T="ATARDECER":T="NOCHE";const Y=1-X.smoothstep(A,.04,.25);for(const Z of this.orbitLines)Z.material.opacity=Z.baseOpacity*Y,Z.mesh.visible=Y>.01;const J=-Math.sqrt(Math.max(0,1-Math.pow(m/Math.max(m,m+c),2))),oe=X.smoothstep(A,.01,.36),he=this.skyDome.material.uniforms;if(S.skyDome){const Z=S.id==="p2"?1444388:1841212,ae=S.id==="p2"?7085388:S.id==="p1"?6039150:10174e3,Ne=S.id==="p2"?16726909:16743220,Ue=S.id==="p2"?331292:198678,at=S.id==="p2"?1058888:S.id==="p1"?404536:S.id==="p4"?2494984:529190,ut=S.id==="p1"&&E?this._tmpColorC.setHex(1799371).lerp(this._tmpColorB.setHex(1737450),E.waterFactor).lerp(this._tmpColorB.setHex(3024934),E.ashFactor).getHex():S.skyDome.zenith,Rt=S.id==="p1"&&E?this._tmpColorC.setHex(5157068).lerp(this._tmpColorB.setHex(5687029),E.waterFactor).lerp(this._tmpColorB.setHex(6309432),E.ashFactor).getHex():S.skyDome.mid,$=S.id==="p1"&&E?this._tmpColorC.setHex(8707782).lerp(this._tmpColorB.setHex(10810618),E.waterFactor).lerp(this._tmpColorB.setHex(11034162),E.ashFactor).getHex():S.skyDome.horizon;this._tmpColorA.setHex(ut),this._tmpColorA.lerp(this._tmpColorB.setHex(Z),N*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(66312),O*.94),he.uZenithColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(Rt),this._tmpColorA.lerp(this._tmpColorB.setHex(ae),N*.85),this._tmpColorA.lerp(this._tmpColorB.setHex(Ue),O*.92),he.uMidColor.value.copy(this._tmpColorA),this._tmpColorA.setHex($),this._tmpColorA.lerp(this._tmpColorB.setHex(Ne),N*.9),this._tmpColorA.lerp(this._tmpColorB.setHex(at),O*.92),he.uHorizonColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(S.skyDome.sunGlow),this._tmpColorA.lerp(this._tmpColorB.setHex(16757844),N*.82),this._tmpColorA.lerp(this._tmpColorB.setHex(1451069),O*.9),he.uSunGlowColor.value.copy(this._tmpColorA);const Re=S.skyDome.zenithAlpha;if(he.uZenithAlpha.value=X.lerp(Re,Math.max(.16,Re*.24),O),x>.001){const Be=O>.5?136738:547442,ot=O>.5?272444:821410;he.uZenithColor.value.lerp(this._tmpColorB.setHex(Be),x),he.uMidColor.value.lerp(this._tmpColorB.setHex(Be),x),he.uHorizonColor.value.lerp(this._tmpColorB.setHex(ot),x),he.uSunGlowColor.value.lerp(this._tmpColorB.setHex(2808046),x*.85),he.uZenithAlpha.value=X.lerp(he.uZenithAlpha.value,.96,x)}if(he.uLocalUp.value.copy(I),he.uSunDir.value.copy(G),he.uHorizonDot.value=J,he.uAtmoOpacity.value=oe,this.skyDome.visible=oe>.005,this.starfield.userData.setStarVisibility){const Be=X.lerp(S.skyDome.starFloor,Math.max(S.skyDome.starFloor,.45),N*(1-L*.7)),ot=X.lerp(Be,.96,O),et=X.lerp(1,ot,X.smoothstep(A,.06,.42))*(1-x);this.starfield.userData.setStarVisibility(et)}}if(l.orbitalBundle){const Z=l.orbitalBundle,ae=S.id==="p2"?14239882:16749142,Ne=S.id==="p2"?16726909:16740396;if(Z.userBaseColors){this._tmpColorA.copy(Z.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(ae),N*.72),this._tmpColorC.copy(Z.userBaseColors.horizon).lerp(this._tmpColorB.setHex(Ne),N*.85);for(const at of[Z.upperCloudMesh,Z.lowerCloudMesh])at.material.uniforms.uSunColor.value.copy(this._tmpColorA),at.material.uniforms.uHorizonColor.value.copy(this._tmpColorC)}const Ue=S.id==="p2"?1452616:1319480;this._tmpColorA.copy(Z.userBaseColors?Z.userBaseColors.sunlit:this._tmpColorB.setHex(16777215)),this._tmpColorA.lerp(this._tmpColorB.setHex(ae),N*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(Ue),O*.88),Z.lowerCloudPuffs.material.color.copy(this._tmpColorA)}const be=A>.32;for(const[Z,ae]of this.planetNodes)ae.root.visible=be?Z===a:!0;const U=1-X.smoothstep(w,.45,.98),V=S.id==="p1"&&E&&E.ashFactor>.35?919044:198156,te=S.id==="p2"?3871275:8139812,se=S.id==="p1"&&E?this._tmpColorC.setHex(2655412).lerp(this._tmpColorB.setHex(2527952),E.waterFactor).lerp(this._tmpColorB.setHex(4994604),E.ashFactor).getHex():S.skyColor;this._tmpSkyColor.setHex(se).lerp(this._tmpColorB.setHex(te),N*.72).lerp(this._tmpColorB.setHex(V),O*.92),x>.001&&this._tmpSkyColor.lerp(this._tmpColorB.setHex(683142).lerp(this._tmpColorC.setHex(137768),O),x),this.scene.background=this._tmpColorA.setHex(V).clone().lerp(this._tmpSkyColor,U*.9);const de=S.id==="p1"&&E?1.05*E.forestFactor+.78*E.waterFactor+2.15*E.ashFactor:1,fe=S.maxFogDensity*de*(1-X.smoothstep(w,.16,.85)),_e=.02*Math.exp(-Math.pow((w-.43)/.11,2)),Pe=.0028*Math.exp(-Math.pow((w-.94)/.12,2)),ye=S.id==="p1"?.0024*(1-X.smoothstep(w,0,.09))*(1-(E?.ashFactor||0)*.4):0,Se=(fe+_e+Pe+ye)*F,W=X.lerp(.022,.036,O),Je=X.lerp(Se,W,x),We=S.id==="p1"&&E?this._tmpColorC.setHex(5023914).lerp(this._tmpColorB.setHex(6476523),E.waterFactor).lerp(this._tmpColorB.setHex(6046772),E.ashFactor).getHex():S.fogColor,je=S.id==="p2"?6428730:13920826,Ee=S.id==="p1"?E&&E.ashFactor>.35?1444358:268836:S.id==="p2"?265496:329744;this._tmpFogColor.setHex(We).lerp(this._tmpColorB.setHex(je),N*.78).lerp(this._tmpColorB.setHex(Ee),O*.9),x>.001&&this._tmpFogColor.lerp(this._tmpColorB.setHex(883350).lerp(this._tmpColorC.setHex(205362),O),x),this.scene.fog?(this.scene.fog.color.copy(this._tmpFogColor),this.scene.fog.density=Je):this.scene.fog=new Fl(this._tmpFogColor.getHex(),Je);const nt=S.id==="p1"?1-.34*(1-X.smoothstep(w,0,.12)):1,Le=S.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1,D=X.lerp(.05,1,X.smoothstep(z,-.06,.24)),C=X.lerp(1,.45,x);this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize(),this.planetaryDirLight.position.copy(this._tmpPlanetToSun).multiplyScalar(1200),this.planetaryDirLight.color.setHex(S.sunColor).lerp(this._tmpColorB.setHex(16741424),N*.72).lerp(this._tmpColorB.setHex(5008280),O*.85),this.planetaryDirLight.intensity=X.lerp(.25,S.sunIntensity,A)*nt*D*C,this.hemiLight.position.copy(I).multiplyScalar(100);const j=S.id==="p2"?16726909:16743220,ue=S.id==="p1"?537668:S.id==="p2"?926272:792108,ce=S.id==="p1"?401448:527380,le=S.id==="p1"&&E?this._tmpColorC.setHex(6079672).lerp(this._tmpColorB.setHex(7395583),E.waterFactor).lerp(this._tmpColorB.setHex(9069644),E.ashFactor).getHex():S.hemiSkyColor,Fe=S.id==="p1"&&E?this._tmpColorC.setHex(1985064).lerp(this._tmpColorB.setHex(1330784),E.waterFactor).lerp(this._tmpColorB.setHex(2890772),E.ashFactor).getHex():S.hemiGroundColor;this._tmpColorA.setHex(le).lerp(this._tmpColorB.setHex(j),N*.55).lerp(this._tmpColorB.setHex(ue),O*.9),x>.001&&this._tmpColorA.lerp(this._tmpColorB.setHex(1889514).lerp(this._tmpColorC.setHex(407624),O),x*.85),this.hemiLight.color.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this._tmpColorA.setHex(Fe).lerp(this._tmpColorB.setHex(ce),O*.85),this.hemiLight.groundColor.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this.hemiLight.intensity=X.lerp(.42,S.hemiIntensity,A)*X.lerp(1,.36,O);const Ae=S.id==="p1"&&E?this._tmpColorC.setHex(2247218).lerp(this._tmpColorB.setHex(1986148),E.waterFactor).lerp(this._tmpColorB.setHex(3548186),E.ashFactor).getHex():S.ambientColor;this._tmpColorA.setHex(Ae).lerp(this._tmpColorB.setHex(1054760),O*.82),this.ambientLight.color.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this.ambientLight.intensity=X.lerp(.55,S.ambientIntensity,A)*nt*X.lerp(1,.45,O);const De=S.id==="p1"?.74:S.id==="p3"?.85:.9,xt=S.id==="p1"?2.45*Le:S.id==="p2"?2.15:S.id==="p3"?2.25:1.95,me=Math.min(1,Math.max(O,N*.45)),Te=X.lerp(De,xt,me);if(l.surfaceCapGroup.visible){for(const Z of l.animators)Z.update(this.elapsedTime,Te,z,x);for(const Z of l.nightMaterials)S.id==="p2"?Z.tier==="window"?Z.material.emissiveIntensity=Z.baseEmissive*X.lerp(.65,1.45,me):Z.tier==="hero"?Z.material.emissiveIntensity=Z.baseEmissive*X.lerp(.95,1.32,me):Z.material.emissiveIntensity=Z.baseEmissive*X.lerp(.78,1.18,me):Z.material.emissiveIntensity=Z.baseEmissive*Te}const Xe=1-X.smoothstep(w,.05,.45),it=S.id==="p1"?X.smoothstep(-z,-.1,.04):1,He=S.id==="p1"&&E&&x<=.2?this._tmpColorC.setHex(S.localLightColor).lerp(this._tmpColorB.setHex(2683096),E.waterFactor).lerp(this._tmpColorB.setHex(16742456),E.ashFactor).getHex():x>.2?1894655:S.localLightColor,_t=S.id==="p1"&&E?this._tmpColorC.setHex(S.localBounceColor).lerp(this._tmpColorB.setHex(1628415),E.waterFactor).lerp(this._tmpColorB.setHex(16730648),E.ashFactor).getHex():S.localBounceColor;if(this.localAtmoLight.color.setHex(He),this.localAtmoLight.intensity=Xe*5.2*Le*X.lerp(.85,1.38,me)*Math.max(it,x*.6),this.localAtmoLight.position.copy(this.camera.position).addScaledVector(I,18),this.localBounceLight.color.setHex(_t),this.localBounceLight.intensity=Xe*4.8*Le*X.lerp(.85,1.35,me)*it,this.localBounceLight.position.copy(this.camera.position).addScaledVector(I,-8),this.bloomPass){const Z=S.id==="p2"?1.08:1.18,ae=S.bloomStrength*Le*X.lerp(.92,Z,O);this.bloomPass.strength=X.lerp(.55,Math.min(.76,ae),Xe)}const lt=Math.exp(-Math.pow((w-.78)/.2,2))*.85,At=Math.exp(-Math.pow((w-.4)/.14,2))*.55,q=S.id==="p1"&&E?E.ashFactor*Xe*.42:0,we=x>.08?4126184:S.id==="p1"&&E&&E.ashFactor>.38?16751192:S.particleColor;this.cockpitParticles.setAtmosphereStyle(we,Math.max(Math.max(lt,At),x*.72,q))}}if(l&&c/p>=1.06&&(h=!1),this.mode=h?"SURFACE":"ORBIT",!l||!l.config.landable||c/p>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const S of this.orbitLines)S.material.opacity=S.baseOpacity,S.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,S]of this.planetNodes)S.root.visible=!0,S.config.hasProceduralWorld&&S.orbitalBundle&&(S.orbitalBundle.surfaceMesh.visible=!0);this.scene.background.lerp(new re(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.planetaryDirLight.intensity=X.lerp(this.planetaryDirLight.intensity,.22,.1),this.hemiLight.position.set(0,100,0),this.hemiLight.color.lerp(new re(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new re(1053724),Math.min(1,t*3)),this.hemiLight.intensity=X.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new re(1844790),Math.min(1,t*3)),this.ambientLight.intensity=X.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=X.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=X.lerp(this.localBounceLight.intensity,0,.15),this.bloomPass&&(this.bloomPass.strength=X.lerp(this.bloomPass.strength,.55,.1)),this.cockpitParticles.setAtmosphereStyle(8965375,0)}if(this.controls.setAltitudeContext({surfaceAltitude:c,planetRadius:m,atmoTopAlt:p,groundFloorAlt:y,minSpeed:b,submergedRatio:x,planetCenter:f||(l?l.currWorldPos:null),prevPlanetCenter:g||(l?l.prevWorldPos:null),hasPlanet:!!l,inGravityWell:u,planetDeltaPos:d,planetQuatDelta:_}),h&&this.currentDominantPlanet){const S=P>.05,v=S?Math.round(P*15):Math.max(0,Math.round((c-y)*115));let w=null;if(this.currentDominantPlanet.id==="p1"){const A=this.planetNodes.get("p1"),F=A?.capFrame||A?.spinGroup||A?.root;F&&(w=Et.map(I=>{this._tmpStationPos.copy(I.capDir).multiplyScalar(A.config.localRadius).applyMatrix4(F.matrixWorld);const G=Math.round(this.camera.position.distanceTo(this._tmpStationPos)*(A.config.kmScale/620));return{id:I.id,shortName:I.shortName,distKm:G}}))}this.lastP1RegionInfo=E,this.lastSolarPhaseName=T,this.lastIsUnderwater=S,this.onStatusUpdate({modeText:S?"SUBMARINO":"ATMOSFÉRICO",isSurface:!0,isUnderwater:S,sectorName:this.currentDominantPlanet.name.toUpperCase(),nearestText:`${this.currentDominantPlanet.name}`,altitudeText:S?`-${v.toLocaleString("es-ES")} m`:`${v.toLocaleString("es-ES")} m`,timeScale:this.timeScale,solarPhaseName:T,pandoraLandmarks:w})}else{this.lastP1RegionInfo=null,this.lastSolarPhaseName="ESPACIO",this.lastIsUnderwater=!1;const S=Math.max(1,Math.round(s*(r/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${i} · ${S.toLocaleString("es-ES")} km`,altitudeText:`${S.toLocaleString("es-ES")} km`,timeScale:this.timeScale,solarPhaseName:"ESPACIO"})}}getStarChartState(){this.orbitalGroup.updateMatrixWorld(!0);const e=this.camera.position.clone(),t=new M(0,0,-1).applyQuaternion(this.camera.quaternion).normalize(),n=new M(1,0,0).applyQuaternion(this.camera.quaternion).normalize(),i=Math.atan2(t.x,t.z);let s=null;if(this.crystalPalaceAnchor){const h=new M;this.crystalPalaceAnchor.getWorldPosition(h),s={id:"crystal_palace",name:"CRYSTAL PALACE",planetKey:"p2",worldPos:h,distWorld:e.distanceTo(h),loaded:!!this.crystalPalaceDetailed}}const r={p1:{shortName:"PANDORA",code:"P1",tagline:"Luna oceánica y selvática · 3 Macro-Naciones",color:"#34d8c4",accent:"#44f0a8",gravity:"0.80 G",atmoDesc:"Densa · Respirable c/máscara (Nitrógeno/Xenón)",climate:"Selva bioluminiscente, archipiélago Metkayina y calderas de Ceniza"},p2:{shortName:"NIGHT CITY",code:"P2",tagline:"Megalópolis cyberpunk · Corpo Plaza y Crystal Palace",color:"#00d8ff",accent:"#ff3b9a",gravity:"1.00 G",atmoDesc:"Densa · Niebla urbana e industrial estratificada",climate:"Cañón neón central, suburbios sombríos y Badlands áridas"},p3:{shortName:"PERUGIUS",code:"P3",tagline:"Mundo templado medieval · Ciudadela Fortaleza",color:"#6ec878",accent:"#ffba52",gravity:"0.95 G",atmoDesc:"Óptima · Cielos dorados templados",climate:"Valles verdes, fortalezas en altura y cumbres nevadas"},p4:{shortName:"CORUSCANT",code:"P4",tagline:"Ecumenópolis total · Distrito del Senado",color:"#f4a259",accent:"#ff8a3a",gravity:"1.00 G",atmoDesc:"Regulada · Tráfico orbital y cúpulas ámbar",climate:"Planeta-ciudad continuo de miles de niveles"},p5:{shortName:"GIGANTE P5",code:"P5",tagline:"Gigante gaseoso azul con sistema de anillos y 3 lunas",color:"#5fa8ff",accent:"#8ee8ff",gravity:"2.45 G",atmoDesc:"Turbulenta · Hidrógeno y helio (Solo órbita)",climate:"Tormentas de metano, anillos helados y lunas pastoras"}},a=[],l=["p1","p2","p3","p4","p5"];for(const h of l){const u=this.planetNodes.get(h);if(!u)continue;const d=u.config,f=r[h]||{shortName:h.toUpperCase(),code:h.toUpperCase(),color:"#8cc4ff"},g=u.currWorldPos.clone(),_=e.distanceTo(g),m=u.moonOrbits.map((p,y)=>({index:y,name:p.name,baseRadius:p.baseRadius,baseRadiusWorld:p.baseRadius*cn,angle:p.angle,moonRadius:p.moonRadius,worldPos:p.currWorldPos.clone(),distWorld:e.distanceTo(p.currWorldPos)}));a.push({key:h,id:d.id,code:f.code,name:d.name,shortName:f.shortName,tagline:f.tagline,color:f.color,accent:f.accent,gravity:f.gravity,atmoDesc:f.atmoDesc,climate:f.climate,navKey:d.navKey,landable:d.landable,semiMajorAxis:d.semiMajorAxis,semiMajorAxisWorld:d.semiMajorAxis*cn,eccentricity:d.eccentricity||.04,orbitAngle:u.orbitAngle,localRadius:d.localRadius,worldRadius:d.localRadius*cn,atmoTopAlt:d.localRadius*cn*Ni,kmScale:d.kmScale,glowCss:d.glowCss||"rgba(94, 212, 255, 0.45)",worldPos:g,distWorld:_,distKm:Math.max(0,Math.round(Math.max(0,_-d.localRadius*cn)*(d.kmScale/620))),moons:m,hasCrystalPalace:h==="p2"&&!!s})}let c=null;if(this.mode==="SURFACE"&&this.currentDominantPlanet){const h=this.currentDominantPlanet,u=this.planetNodes.get(h.id);if(u){const d=u.capFrame||u.spinGroup||u.root,f=u.currWorldPos.clone(),g=e.clone().sub(f).normalize(),_=e.clone().negate().normalize(),m=[];if(h.id==="p1"){const p={hometree:{nation:"forest",color:"#44f0a8"},hallelujah:{nation:"forest",color:"#44f0a8"},rookery:{nation:"forest",color:"#44f0a8"},souls:{nation:"forest",color:"#44f0a8"},mushrooms:{nation:"forest",color:"#a864ff"},ashland:{nation:"ash",color:"#ff6c34"},metkayina:{nation:"water",color:"#26e8ff"}};for(const y of Et){const b=y.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld),x=p[y.id]||{nation:"forest",color:"#44f0a8"};m.push({id:y.id,shortName:y.shortName,nation:x.nation,color:x.color,worldPos:b,distKm:Math.round(e.distanceTo(b)*(h.kmScale/620))})}}else if(h.id==="p2"){const p=[{id:"corpo_plaza",shortName:"Corpo Plaza",local:new M(0,h.localRadius,0),color:"#00e5ff"},{id:"suburbios",shortName:"Suburbios Ind.",local:new M(.45,h.localRadius*.9,0),color:"#ff9038"},{id:"badlands",shortName:"Badlands",local:new M(-.72,h.localRadius*.72,.2),color:"#ff4848"}];for(const y of p){const b=y.local.clone().normalize().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld);m.push({id:y.id,shortName:y.shortName,color:y.color,worldPos:b,distKm:Math.round(e.distanceTo(b)*(h.kmScale/620))})}}else{const p=new M(0,h.localRadius,0).applyMatrix4(d.matrixWorld);m.push({id:"capital",shortName:h.id==="p3"?"Fortaleza Perugius":"Plaza del Senado",color:h.id==="p3"?"#ffcf78":"#ff944d",worldPos:p,distKm:Math.round(e.distanceTo(p)*(h.kmScale/620))})}c={planetKey:h.id,planetName:h.name,planetWorldPos:f,worldRadius:h.localRadius*cn,radialUp:g,sunDir:_,solarPhaseName:this.lastSolarPhaseName||"DÍA",isUnderwater:!!this.lastIsUnderwater,regionNation:this.lastP1RegionInfo?.nation||"forest",markers:m}}}return{mode:this.mode,isUnderwater:!!this.lastIsUnderwater,shipPos:e,shipForward:t,shipRight:n,shipYawRad:i,sunPos:new M(0,0,0),sunWorldRadius:2.21*cn,planets:a,crystalPalace:s,atmosphereLocal:c,dominantPlanetKey:this.currentDominantPlanet?.id||null}}}new M(0,1,0);const Qi=new M,Ta=new M,Cs=new M;class ly{constructor({containerEl:e,canvasEl:t,scaleEl:n,sceneManager:i,onOpenStarMap:s}){this.containerEl=e,this.canvas=t,this.ctx=t?.getContext?.("2d")||null,this.scaleEl=n,this.sceneManager=i,this.onOpenStarMap=s||(()=>{}),this.size=170,this._bindEvents(),this._resizeCanvas()}_bindEvents(){this.containerEl&&this.containerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenStarMap()})}_resizeCanvas(){if(!this.canvas||!this.ctx)return;const e=typeof window<"u"?Math.min(window.devicePixelRatio||1,2):1;this.canvas.width=this.size*e,this.canvas.height=this.size*e,this.dpr=e}update(e=0){if(!this.ctx||!this.sceneManager)return;const t=this.ctx,n=this.size,i=n*.5,s=this.dpr||1;t.setTransform(s,0,0,s,0,0),t.clearRect(0,0,n,n);const r=this.sceneManager.getStarChartState();if(!r)return;t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.strokeStyle="rgba(94, 212, 255, 0.16)",t.lineWidth=1;for(const c of[.32,.62,.9])t.beginPath(),t.arc(i,i,(i-6)*c,0,Math.PI*2),t.stroke();t.strokeStyle="rgba(94, 212, 255, 0.12)",t.beginPath(),t.moveTo(i,8),t.lineTo(i,n-8),t.moveTo(8,i),t.lineTo(n-8,i),t.stroke();const a=e*1.35%(Math.PI*2),l=t.createRadialGradient(i,i,4,i,i,i-6);l.addColorStop(0,"rgba(94, 212, 255, 0.02)"),l.addColorStop(1,"rgba(94, 212, 255, 0.12)"),t.fillStyle=l,t.beginPath(),t.moveTo(i,i),t.arc(i,i,i-6,a-.45,a),t.closePath(),t.fill(),r.mode==="SURFACE"&&r.atmosphereLocal?this._drawAtmosphericRadar(t,n,i,r):this._drawSolarRadar(t,n,i,r),t.fillStyle=r.isUnderwater?"#38f6d2":"#ffae42",t.strokeStyle="#040a14",t.lineWidth=1.4,t.beginPath(),t.moveTo(i,i-7),t.lineTo(i+5.2,i+5.2),t.lineTo(i,i+2.6),t.lineTo(i-5.2,i+5.2),t.closePath(),t.fill(),t.stroke(),t.restore()}_drawSolarRadar(e,t,n,i){let s=i.shipForward.x,r=i.shipForward.z;const a=Math.hypot(s,r);a<.001?(s=0,r=-1):(s/=a,r/=a);const l=-r,c=s,h=n-15,u=Math.hypot(i.shipPos.x,i.shipPos.z),d=Math.max(3800,Math.min(11500,u*1.45+3200));this.scaleEl&&(this.scaleEl.textContent=`ÓRBITA · ${Math.round(d/100)/10}k`);const f=(_,m)=>{const p=_-i.shipPos.x,y=m-i.shipPos.z,b=p*l+y*c,x=p*s+y*r,P=Math.hypot(b,x),E=Math.pow(Math.min(1,P/d),.78),T=Math.atan2(-x,b);return{x:n+Math.cos(T)*E*h,y:n+Math.sin(T)*E*h,clipped:P>d}},g=f(i.sunPos.x,i.sunPos.z);if(e.fillStyle="rgba(255, 200, 72, 0.35)",e.beginPath(),e.arc(g.x,g.y,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffdc64",e.beginPath(),e.arc(g.x,g.y,4.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 224, 130, 0.9)",e.font='600 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText("SOL",g.x,g.y-7),i.crystalPalace){const _=f(i.crystalPalace.worldPos.x,i.crystalPalace.worldPos.z);e.strokeStyle="#ffae42",e.lineWidth=1.2,e.beginPath(),e.moveTo(_.x,_.y-3.5),e.lineTo(_.x+3.5,_.y),e.lineTo(_.x,_.y+3.5),e.lineTo(_.x-3.5,_.y),e.closePath(),e.stroke()}for(const _ of i.planets){const m=f(_.worldPos.x,_.worldPos.z);e.fillStyle=_.color,e.beginPath(),e.arc(m.x,m.y,_.landable?3.8:4.6,0,Math.PI*2),e.fill(),e.fillStyle="rgba(230, 243, 255, 0.9)",e.font='700 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText(_.code,m.x,m.y-6)}}_drawAtmosphericRadar(e,t,n,i){const s=i.atmosphereLocal,r=s.radialUp;Qi.copy(i.shipForward).addScaledVector(r,-i.shipForward.dot(r)),Qi.lengthSq()<1e-4&&Qi.copy(i.shipRight).cross(r),Qi.normalize(),Ta.crossVectors(Qi,r).normalize();const a=n-16,l=Math.max(85,s.worldRadius*1.15);if(this.scaleEl){const g=s.isUnderwater?"SUBMARINO":s.planetKey==="p1"?{forest:"BOSQUE",water:"METKAYINA",ash:"CENIZA"}[s.regionNation]||"PANDORA":s.planetKey.toUpperCase();this.scaleEl.textContent=`${g} · ${s.solarPhaseName}`}const c=Cs.copy(s.sunDir).dot(Ta),h=Cs.dot(Qi),u=Math.atan2(-h,c),d=n+Math.cos(u)*(n-11),f=n+Math.sin(u)*(n-11);e.fillStyle="#ffd65a",e.beginPath(),e.arc(d,f,4.2,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 214, 90, 0.5)",e.lineWidth=1,e.beginPath(),e.arc(d,f,7,0,Math.PI*2),e.stroke(),e.font='600 7.5px "Cascadia Code", Consolas, monospace',e.textAlign="center";for(const g of s.markers){Cs.copy(g.worldPos).sub(i.shipPos);const _=Cs.dot(Ta),m=Cs.dot(Qi),p=Math.hypot(_,m),y=Math.min(1,Math.pow(p/l,.72)),b=Math.atan2(-m,_),x=n+Math.cos(b)*y*a,P=n+Math.sin(b)*y*a,E=Cs.dot(r)<-s.worldRadius*.45;e.globalAlpha=E?.45:.95,e.fillStyle=g.color||"#5ed4ff",e.beginPath(),e.arc(x,P,E?2.4:3.2,0,Math.PI*2),e.fill(),e.fillStyle="#e6f3ff";const T=g.shortName.length>9?g.shortName.slice(0,8)+".":g.shortName;e.fillText(T,x,P-5)}e.globalAlpha=1}}const rn=Object.freeze({CLOSED:"CLOSED",SOLAR_SYSTEM:"SOLAR_SYSTEM",PLANET_ZOOM:"PLANET_ZOOM",JUMP_CONFIRMED:"JUMP_CONFIRMED"});class cy{constructor({overlayEl:e,canvasEl:t,backBtnEl:n,closeBtnEl:i,levelTagEl:s,titleEl:r,dossierEl:a,dossierBadgeEl:l,dossierTitleEl:c,dossierDescEl:h,dossierTypeEl:u,dossierAltEl:d,dossierAtmoEl:f,dossierDistEl:g,jumpBtnEl:_,footerEl:m,sceneManager:p,controls:y,onConfirmJump:b,onStateChange:x}){this.overlayEl=e,this.canvas=t,this.ctx=t?.getContext?.("2d")||null,this.backBtnEl=n,this.closeBtnEl=i,this.levelTagEl=s,this.titleEl=r,this.dossierEl=a,this.dossierBadgeEl=l,this.dossierTitleEl=c,this.dossierDescEl=h,this.dossierTypeEl=u,this.dossierAltEl=d,this.dossierAtmoEl=f,this.dossierDistEl=g,this.jumpBtnEl=_,this.footerEl=m,this.sceneManager=p,this.controls=y,this.onConfirmJump=b||(P=>p?.navigateToTarget?.(P)),this.onStateChange=x||(()=>{}),this.state=rn.CLOSED,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.zoomDuration=.65,this.zoomStartPos={x:0,y:0},this.lastTimeMs=0,this.viewW=1280,this.viewH=720,this.dpr=1,this.mouseX=-9999,this.mouseY=-9999,this.currentSolarNodes=[],this.currentLevel2Nodes=[],this._bindEvents()}_bindEvents(){this.backBtnEl&&this.backBtnEl.addEventListener("click",e=>{e.stopPropagation(),this.backToSolarSystem()}),this.closeBtnEl&&this.closeBtnEl.addEventListener("click",e=>{e.stopPropagation(),this.close()}),this.jumpBtnEl&&this.jumpBtnEl.addEventListener("click",e=>{e.stopPropagation(),this.confirmJump()}),this.canvas&&(this.canvas.addEventListener("mousemove",e=>{const t=this.canvas.getBoundingClientRect();this.handlePointerMove(e.clientX-t.left,e.clientY-t.top)}),this.canvas.addEventListener("click",e=>{const t=this.canvas.getBoundingClientRect();this.handleClick(e.clientX-t.left,e.clientY-t.top)}),this.canvas.addEventListener("dblclick",e=>{const t=this.canvas.getBoundingClientRect();this.handleDoubleClick(e.clientX-t.left,e.clientY-t.top)}),this.canvas.addEventListener("contextmenu",e=>{e.preventDefault(),this.state===rn.PLANET_ZOOM&&this.backToSolarSystem()})),typeof window<"u"&&(window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",e=>this._onKeyDown(e)))}_onKeyDown(e){if(e.code==="KeyM"&&!e.repeat){e.preventDefault(),this.isOpen()?this.close():this.open();return}this.isOpen()&&(e.code==="Escape"?(e.preventDefault(),this.close()):e.code==="Backspace"&&this.state===rn.PLANET_ZOOM?(e.preventDefault(),this.backToSolarSystem()):e.code==="Enter"&&this.state===rn.PLANET_ZOOM&&this.selectedNode&&(e.preventDefault(),this.confirmJump()))}isOpen(){return this.state!==rn.CLOSED}resize(){if(!this.canvas||typeof window>"u")return;const e=window.innerWidth||1280,t=window.innerHeight||720;this.dpr=Math.min(window.devicePixelRatio||1,2),this.viewW=e,this.viewH=t,this.canvas.width=Math.round(e*this.dpr),this.canvas.height=Math.round(t*this.dpr)}open(){this.resize(),typeof document<"u"&&document.pointerLockElement&&document.exitPointerLock&&document.pointerLockElement&&document.exitPointerLock(),this.controls?.setEnabled?this.controls.setEnabled(!1):this.controls&&(this.controls.enabled=!1),this.state=rn.SOLAR_SYSTEM,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.lastTimeMs=typeof performance<"u"?performance.now():0,this.overlayEl&&this.overlayEl.classList.remove("hidden"),this._syncHeaderAndDossier(),this.onStateChange(this.state)}close(){this.state!==rn.CLOSED&&(this.state=rn.CLOSED,this.hoveredNode=null,this.overlayEl&&this.overlayEl.classList.add("hidden"),this.controls?.setEnabled?this.controls.setEnabled(!0):this.controls&&(this.controls.enabled=!0),this.onStateChange(this.state))}selectPlanetForZoom(e){if(!e)return;const t=this.sceneManager?.getStarChartState?.(),i=(t?this._computeSolarLayout(t):null)?.solarBodies?.find(s=>s.key===e);if(this.zoomStartPos=i?{x:i.x,y:i.y}:{x:this.viewW*.5,y:this.viewH*.5},this.selectedPlanetKey=e,this.state=rn.PLANET_ZOOM,this.zoomTarget=1,this.hoveredNode=null,t){const s=this._buildLevel2Nodes(t,e,this.viewW*.44,this.viewH*.52,Math.min(this.viewW,this.viewH)*.125);this.selectedNode=s[0]||null}else this.selectedNode=null;this._syncHeaderAndDossier(),this.onStateChange(this.state)}backToSolarSystem(){this.state===rn.PLANET_ZOOM&&(this.state=rn.SOLAR_SYSTEM,this.zoomTarget=0,this.selectedNode=null,this.hoveredNode=null,this._syncHeaderAndDossier(),this.onStateChange(this.state))}selectNodeById(e){const t=this.currentLevel2Nodes.find(n=>n.id===e);return t?(this.selectedNode=t,this._syncHeaderAndDossier(),t):null}confirmJump(){if(this.state!==rn.PLANET_ZOOM||!this.selectedNode)return null;const e=this.selectedNode.descriptor;return this.state=rn.JUMP_CONFIRMED,this.onStateChange(this.state,e),this.close(),this.onConfirmJump(e),e}getVisibleNodes(){return this.state===rn.PLANET_ZOOM?this.currentLevel2Nodes:this.currentSolarNodes}handlePointerMove(e,t){this.mouseX=e,this.mouseY=t;const n=this._pickNodeAt(e,t);this.hoveredNode=n,this.canvas&&this.canvas.classList.toggle("hovering",!!n)}handleClick(e,t){this.mouseX=e,this.mouseY=t;const n=this._pickNodeAt(e,t);n&&(this.state===rn.SOLAR_SYSTEM?this.selectPlanetForZoom(n.planetKey):this.state===rn.PLANET_ZOOM&&(this.selectedNode=n,this._syncHeaderAndDossier()))}handleDoubleClick(e,t){if(this.state!==rn.PLANET_ZOOM)return;const n=this._pickNodeAt(e,t);n&&(this.selectedNode=n,this._syncHeaderAndDossier(),this.confirmJump())}_pickNodeAt(e,t){const n=this.state===rn.PLANET_ZOOM?this.currentLevel2Nodes:this.currentSolarNodes;let i=null,s=1/0;for(let r=0;r<n.length;r++){const a=n[r],l=a.hitRadius||24,c=e-a.x,h=t-a.y,u=c*c+h*h;u<=l*l&&u<s&&(s=u,i=a)}return i}_syncHeaderAndDossier(){const e=this.state===rn.PLANET_ZOOM;if(this.backBtnEl&&this.backBtnEl.classList.toggle("hidden",!e),this.levelTagEl&&(this.levelTagEl.textContent=e?"SUB-MAPA PLANETARIO // NIVEL 2":"CARTOGRAFÍA ESTELAR // NIVEL 1"),this.titleEl)if(e&&this.selectedPlanetKey){const i=this.sceneManager?.getStarChartState?.()?.planets?.find(s=>s.key===this.selectedPlanetKey);this.titleEl.textContent=this.selectedPlanetKey==="sun"?"SOL CENTRAL // ESTRELLA TIPO G":`${i?.code||""} · ${i?.shortName||this.selectedPlanetKey.toUpperCase()}`}else this.titleEl.textContent="SISTEMA SOLAR CENTRAL";if(this.footerEl&&(this.footerEl.textContent=e?"Clic en un nodo orbital/superficie/luna para ver su ficha · Doble clic o Enter para saltar · Backspace para volver":"Haz clic en un planeta para inspeccionar lunas, estaciones y regiones antes de viajar · [M] / [ESC] cerrar"),!this.dossierEl)return;if(!e||!this.selectedNode){this.dossierEl.classList.add("hidden");return}const t=this.selectedNode;this.dossierEl.classList.remove("hidden"),this.dossierBadgeEl&&(this.dossierBadgeEl.textContent=t.badge||"NODO TÁCTICO"),this.dossierTitleEl&&(this.dossierTitleEl.textContent=t.title||t.label),this.dossierDescEl&&(this.dossierDescEl.textContent=t.description||""),this.dossierTypeEl&&(this.dossierTypeEl.textContent=t.destTypeLabel||"Órbita"),this.dossierAltEl&&(this.dossierAltEl.textContent=t.insertionAlt||"--"),this.dossierAtmoEl&&(this.dossierAtmoEl.textContent=t.atmoGravity||"--"),this.dossierDistEl&&(this.dossierDistEl.textContent=t.distText||"--")}_computeSolarLayout(e){const t=this.viewW*.5,n=this.viewH*.52,i=Math.min(this.viewW*.43,this.viewH*.41),s=Math.max(20,i*.095),r=46,a=(h,u)=>{const d=Math.hypot(h,u)/157.5,f=d<.01?0:s+18+Math.pow(Math.min(1.35,d/r),.72)*(i-s-22),g=Math.atan2(u,h);return{x:t+Math.cos(g)*f,y:n+Math.sin(g)*f,rPx:f}},l=[{id:"sun",planetKey:"sun",key:"sun",label:"SOL CENTRAL",x:t,y:n,orbitRPx:0,radiusPx:s,hitRadius:s+10,color:"#ffcc44",tagline:"Estrella central HDR · Iluminación del sistema",distKm:Math.max(0,Math.round(Math.max(0,Math.hypot(e.shipPos.x,e.shipPos.y,e.shipPos.z)-e.sunWorldRadius)*(12e3/620))),descriptor:{type:"sun_orbit"}}];for(const h of e.planets){const u=s+18+Math.pow(h.semiMajorAxis/r,.72)*(i-s-22),d=a(h.worldPos.x,h.worldPos.z),f=h.key==="p5"?16:11.5;l.push({id:h.key,planetKey:h.key,key:h.key,planet:h,label:`${h.code} · ${h.shortName}`,shortName:h.shortName,x:d.x,y:d.y,orbitRPx:u,radiusPx:f,hitRadius:f+14,color:h.color,accent:h.accent,tagline:h.tagline,distKm:h.distKm})}const c=a(e.shipPos.x,e.shipPos.z);return{cx:t,cy:n,maxR:i,sunR:s,toChartXY:a,solarBodies:l,ship2:c}}_buildLevel2Nodes(e,t,n,i,s){if(t==="sun")return[{id:"sun_orbit",label:"Órbita Panorámica del Sistema",title:"SOL CENTRAL // ÓRBITA DE OBSERVACIÓN",badge:"ESTRELLA PRINCIPAL",description:"Vista exterior segura frente al disco solar de plasma y las 5 órbitas keplerianas.",destTypeLabel:"Órbita Estelar",insertionAlt:"1.150.000 km",atmoGravity:"Corona Plasma · Radiación Extrema",distText:`${Math.max(0,Math.round(Math.max(0,Math.hypot(e.shipPos.x,e.shipPos.y,e.shipPos.z)-e.sunWorldRadius)*19.35483870967742)).toLocaleString("es-ES")} km`,x:n+s*1.65,y:i-s*.65,radius:12,hitRadius:24,color:"#ffd24c",kind:"orbit",descriptor:{type:"sun_orbit"}}];const r=e.planets.find(h=>h.key===t);if(!r)return[];const a=[],l=s*1.48;if(a.push({id:`${r.key}_orbit`,label:"Órbita Baja",title:`${r.shortName} · ÓRBITA ESTACIONARIA`,badge:"ÓRBITA BAJA",description:r.tagline,destTypeLabel:"Órbita Planetaria",insertionAlt:`${Math.round(r.atmoTopAlt*1.2*(r.kmScale/620)).toLocaleString("es-ES")} km`,atmoGravity:`${r.atmoDesc} · ${r.gravity}`,distText:`${r.distKm.toLocaleString("es-ES")} km`,x:n+Math.cos(-.68)*l,y:i+Math.sin(-.68)*l,radius:11,hitRadius:24,color:r.color,kind:"orbit",descriptor:{type:"planet_orbit",planetKey:r.key}}),r.landable)if(r.key==="p1"){const h=[{landmarkId:"hometree",label:"Nación del Bosque · Árbol-Casa",short:"Bosque (Hometree)",badge:"NACIÓN DEL BOSQUE",desc:"Gran Continente Selvático continuo (45% del globo): árboles gigantes paraguas, secuoyas, manadas y ríos bioluminiscentes.",ang:-1.85,rFrac:.62,color:"#44f0a8"},{landmarkId:"metkayina",label:"Nación del Agua · Metkayina",short:"Agua (Metkayina)",badge:"NACIÓN DEL AGUA · BUCEO",desc:"Océano y Archipiélago coralino: aldeas flotantes sobre balsas, laguna turquesa inmersiva, Tulkun, Ilu y arrecifes luminosos.",ang:2.38,rFrac:.66,color:"#26e8ff"},{landmarkId:"ashland",label:"Nación de la Ceniza · Volcanes",short:"Ceniza (Mangkwan)",badge:"NACIÓN DE LA CENIZA",desc:"Península volcánica oscura tras la cordillera basáltica: 3 volcanes humeantes, fisuras de lava, árboles calcinados y hogueras.",ang:.42,rFrac:.64,color:"#ff6c34"},{landmarkId:"hallelujah",label:"Montañas Aleluya",short:"Aleluya",badge:"ZONA DE MONTAÑA",desc:"Islas rocosas flotantes entre cascadas, lianas luminosas y bandadas de Ikran y Toruk.",ang:-.95,rFrac:.46,color:"#7ef5c4"},{landmarkId:"souls",label:"Árbol de las Almas",short:"Árbol Almas",badge:"SANTUARIO",desc:"Cráter sagrado rodeado de arcos de piedra y filamentos luminosos de Eywa.",ang:1.25,rFrac:.46,color:"#c978ff"}];for(const u of h)a.push({id:`p1_surface_${u.landmarkId}`,label:u.short,title:u.label.toUpperCase(),badge:u.badge,description:u.desc,destTypeLabel:"Descenso Atmosférico",insertionAlt:"1.850 m s.n.m.",atmoGravity:`${r.atmoDesc} · ${r.gravity}`,distText:`${r.distKm.toLocaleString("es-ES")} km`,x:n+Math.cos(u.ang)*s*u.rFrac,y:i+Math.sin(u.ang)*s*u.rFrac,radius:8.5,hitRadius:20,color:u.color,kind:"surface",descriptor:{type:"planet_surface",planetKey:"p1",landmarkId:u.landmarkId}})}else{const h={p2:{short:"Corpo Plaza (Superficie)",title:"NIGHT CITY // CAÑÓN CENTRAL",desc:"Descenso atravesando nubes industriales hacia torres colosales, hologramas Koi y 350 AVs en tráfico aéreo."},p3:{short:"Ciudadela Fortaleza",title:"PERUGIUS // CIUDADELA DEL VALLE",desc:"Planeo sobre valles boscosos hacia la fortaleza flotante y murallas doradas del mundo medieval."},p4:{short:"Distrito del Senado",title:"CORUSCANT // PLAZA DEL SENADO",desc:"Entrada atmosférica hacia la ecumenópolis global con anillos de luz dorada y tráfico orbital."}}[r.key];a.push({id:`${r.key}_surface`,label:h.short,title:h.title,badge:"ATERRIZAJE EN SUPERFICIE",description:h.desc,destTypeLabel:"Descenso Atmosférico",insertionAlt:r.key==="p2"?"450 m (Nivel Cañón)":"2.100 m s.n.m.",atmoGravity:`${r.atmoDesc} · ${r.gravity}`,distText:`${r.distKm.toLocaleString("es-ES")} km`,x:n-s*.28,y:i+s*.34,radius:10.5,hitRadius:24,color:r.accent,kind:"surface",descriptor:{type:"planet_surface",planetKey:r.key}})}if(r.hasCrystalPalace&&e.crystalPalace){const h=s*1.98,u=Math.round(e.crystalPalace.distWorld*(r.kmScale/620));a.push({id:"station_crystal_palace",label:"Crystal Palace",title:"ESTACIÓN ORBITAL CRYSTAL PALACE",badge:"ESTACIÓN ESPACIAL",description:"Plataforma orbital de lujo sobre Night City con 36 hangares iluminados y anillos rotatorios.",destTypeLabel:"Estación Orbital",insertionAlt:"Órbita Alta (320 km)",atmoGravity:"Gravedad Artificial · Vacío",distText:`${u.toLocaleString("es-ES")} km`,orbitRingR:h,x:n+Math.cos(-2.45)*h,y:i+Math.sin(-2.45)*h,radius:11.5,hitRadius:24,color:"#ffae42",kind:"station",descriptor:{type:"station",stationId:"crystal_palace"}})}const c=r.moons.length;return r.moons.forEach((h,u)=>{const d=1.85+(u+(r.hasCrystalPalace?.55:0))*(1.28/Math.max(1,c)),f=s*d,g=h.angle+u*.65,_=n+Math.cos(g)*f,m=i+Math.sin(g)*f*.88,p=Math.max(1,Math.round(Math.max(0,h.distWorld-h.moonRadius)*(r.kmScale/620))),y=Math.round(h.baseRadiusWorld*(r.kmScale/620));a.push({id:`${r.key}_moon_${u}`,label:h.name,title:h.name.toUpperCase(),badge:"SATÉLITE NATURAL",description:`Órbita lunar estacionaria alrededor de ${h.name} con seguimiento gravitatorio sincronizado.`,destTypeLabel:"Órbita Lunar",insertionAlt:`Órbita a ${y.toLocaleString("es-ES")} km`,atmoGravity:"Exosfera tenue · 0.18 G",distText:`${p.toLocaleString("es-ES")} km`,orbitRingR:f,x:_,y:m,radius:9,hitRadius:22,color:"#b8d8ff",kind:"moon",descriptor:{type:"moon",planetKey:r.key,moonIndex:h.index}})}),a}updateAndDraw(e=typeof performance<"u"?performance.now():0){if(!this.isOpen()||!this.ctx||!this.sceneManager)return;const t=this.lastTimeMs?Math.min(.05,(e-this.lastTimeMs)/1e3):.016;this.lastTimeMs=e;const n=e*.001;if(Math.abs(this.zoomTarget-this.zoomProgress)>.001){const f=t/this.zoomDuration;this.zoomTarget>this.zoomProgress?this.zoomProgress=Math.min(1,this.zoomProgress+f):this.zoomProgress=Math.max(0,this.zoomProgress-f)}else this.zoomProgress=this.zoomTarget;const i=this.zoomProgress,s=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,r=this.sceneManager.getStarChartState(),a=this._computeSolarLayout(r),l=this.ctx,c=this.viewW,h=this.viewH;l.setTransform(this.dpr,0,0,this.dpr,0,0),l.clearRect(0,0,c,h),this._drawAstrometricBackdrop(l,c,h,n);const u=Math.max(0,1-s*1.45);if(this.currentSolarNodes=u>.05?a.solarBodies:[],u>.02){l.save(),l.globalAlpha=u;const f=a.solarBodies.find(p=>p.key===this.selectedPlanetKey)||this.zoomStartPos,g=1+s*2.2,_=(c*.5-f.x)*s,m=(h*.52-f.y)*s;l.translate(c*.5+_,h*.52+m),l.scale(g,g),l.translate(-c*.5,-h*.52),this._drawSolarSystemLevel1(l,a,r,n),l.restore()}const d=Math.max(0,Math.min(1,(s-.12)/.88));if(this.selectedPlanetKey&&d>.02){const f=c*.43,g=h*.52,_=Math.min(c,h)*.128;if(this.currentLevel2Nodes=this._buildLevel2Nodes(r,this.selectedPlanetKey,f,g,_),this.selectedNode){const p=this.currentLevel2Nodes.find(y=>y.id===this.selectedNode.id);p&&(this.selectedNode=p)}l.save(),l.globalAlpha=d;const m=.45+.55*d;l.translate(f,g),l.scale(m,m),l.translate(-f,-g),this._drawPlanetLevel2(l,r,this.selectedPlanetKey,f,g,_,n),l.restore()}else this.currentLevel2Nodes=[];this.state===rn.SOLAR_SYSTEM&&this.hoveredNode&&this._drawHoverTooltip(l,this.hoveredNode)}_drawAstrometricBackdrop(e,t,n,i){e.strokeStyle="rgba(94, 212, 255, 0.05)",e.lineWidth=1;const s=64;for(let a=t*.5%s;a<t;a+=s)e.beginPath(),e.moveTo(a,0),e.lineTo(a,n),e.stroke();for(let a=n*.5%s;a<n;a+=s)e.beginPath(),e.moveTo(0,a),e.lineTo(t,a),e.stroke();const r=Math.min(t,n)*.46;e.strokeStyle="rgba(94, 212, 255, 0.08)",e.setLineDash([6,10]),e.beginPath(),e.arc(t*.5,n*.52,r,i*.04,i*.04+Math.PI*2),e.stroke(),e.setLineDash([])}_drawSolarSystemLevel1(e,t,n,i){const{cx:s,cy:r,sunR:a,solarBodies:l,ship2:c}=t;for(const f of l){if(f.orbitRPx<=0)continue;const g=this.hoveredNode?.key===f.key;e.strokeStyle=g?"rgba(255, 174, 66, 0.65)":"rgba(94, 212, 255, 0.18)",e.lineWidth=g?1.8:1,e.beginPath(),e.arc(s,r,f.orbitRPx,0,Math.PI*2),e.stroke()}const h=l[0],u=e.createRadialGradient(s,r,a*.25,s,r,a*2.4);if(u.addColorStop(0,"rgba(255, 244, 190, 1.0)"),u.addColorStop(.45,"rgba(255, 192, 68, 0.65)"),u.addColorStop(1,"rgba(255, 130, 20, 0.0)"),e.fillStyle=u,e.beginPath(),e.arc(s,r,a*2.4,0,Math.PI*2),e.fill(),e.fillStyle="#ffe588",e.beginPath(),e.arc(s,r,a*.85,0,Math.PI*2),e.fill(),this._drawReticleIfMatch(e,h,i),n.crystalPalace){const f=t.toChartXY(n.crystalPalace.worldPos.x,n.crystalPalace.worldPos.z);e.strokeStyle="#ffae42",e.lineWidth=1.4,e.beginPath(),e.moveTo(f.x,f.y-5),e.lineTo(f.x+5,f.y),e.lineTo(f.x,f.y+5),e.lineTo(f.x-5,f.y),e.closePath(),e.stroke()}for(const f of l){if(f.key==="sun")continue;f.key==="p5"&&(e.save(),e.translate(f.x,f.y),e.rotate(-.35),e.strokeStyle="rgba(142, 232, 255, 0.72)",e.lineWidth=2.4,e.beginPath(),e.ellipse(0,0,f.radiusPx*1.75,f.radiusPx*.55,0,0,Math.PI*2),e.stroke(),e.restore());const g=e.createRadialGradient(f.x-f.radiusPx*.3,f.y-f.radiusPx*.3,1,f.x,f.y,f.radiusPx);g.addColorStop(0,"#ffffff"),g.addColorStop(.32,f.color),g.addColorStop(1,"#091426"),e.fillStyle=g,e.beginPath(),e.arc(f.x,f.y,f.radiusPx,0,Math.PI*2),e.fill();const _=f.planet?.moons||[];for(let m=0;m<_.length;m++){const p=_[m].angle+m*.7,y=f.radiusPx+7+m*4;e.fillStyle="#c4e0ff",e.beginPath(),e.arc(f.x+Math.cos(p)*y,f.y+Math.sin(p)*y*.85,2,0,Math.PI*2),e.fill()}e.fillStyle="#e6f3ff",e.font='700 10.5px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText(f.label,f.x,f.y+f.radiusPx+16),this._drawReticleIfMatch(e,f,i)}const d=.65+.35*Math.sin(i*4.5);e.strokeStyle=`rgba(255, 174, 66, ${d})`,e.lineWidth=1.6,e.beginPath(),e.arc(c.x,c.y,8+d*4,0,Math.PI*2),e.stroke(),e.fillStyle="#ffae42",e.beginPath(),e.moveTo(c.x,c.y-6),e.lineTo(c.x+5,c.y+5),e.lineTo(c.x,c.y+2),e.lineTo(c.x-5,c.y+5),e.closePath(),e.fill(),e.fillStyle="#ffcf78",e.font='700 10px "Cascadia Code", Consolas, monospace',e.textAlign="left",e.fillText("[ TÚ ]",c.x+11,c.y+3)}_drawPlanetLevel2(e,t,n,i,s,r,a){const l=n==="sun",c=t.planets.find(h=>h.key===n);for(const h of this.currentLevel2Nodes)h.orbitRingR&&(e.strokeStyle=h.kind==="station"?"rgba(255, 174, 66, 0.36)":"rgba(94, 212, 255, 0.22)",e.lineWidth=1.1,e.setLineDash([5,6]),e.beginPath(),e.ellipse(i,s,h.orbitRingR,h.orbitRingR*.88,0,0,Math.PI*2),e.stroke(),e.setLineDash([]));if(e.strokeStyle="rgba(94, 212, 255, 0.32)",e.lineWidth=1.2,e.beginPath(),e.arc(i,s,r*1.48,0,Math.PI*2),e.stroke(),l){const h=e.createRadialGradient(i,s,r*.15,i,s,r*1.7);h.addColorStop(0,"#fff7cc"),h.addColorStop(.55,"#ffaa28"),h.addColorStop(1,"rgba(255, 90, 10, 0)"),e.fillStyle=h,e.beginPath(),e.arc(i,s,r*1.7,0,Math.PI*2),e.fill()}else if(c){const h=Math.atan2(-c.worldPos.z,-c.worldPos.x),u=i+Math.cos(h)*r*.38,d=s+Math.sin(h)*r*.38;c.key==="p5"&&(e.save(),e.translate(i,s),e.rotate(-.28),e.strokeStyle="rgba(130, 218, 255, 0.58)",e.lineWidth=10,e.beginPath(),e.ellipse(0,0,r*1.95,r*.52,0,Math.PI,Math.PI*2),e.stroke(),e.restore());const f=e.createRadialGradient(i,s,r*.88,i,s,r*1.24);f.addColorStop(0,c.glowCss),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.beginPath(),e.arc(i,s,r*1.24,0,Math.PI*2),e.fill(),e.save(),e.beginPath(),e.arc(i,s,r,0,Math.PI*2),e.clip();const g=e.createRadialGradient(u,d,r*.1,i,s,r*1.15);if(g.addColorStop(0,"#ffffff"),g.addColorStop(.28,c.color),g.addColorStop(1,"#060c1a"),e.fillStyle=g,e.fillRect(i-r,s-r,r*2,r*2),c.key==="p1")e.fillStyle="rgba(34, 118, 54, 0.72)",e.beginPath(),e.ellipse(i-r*.12,s-r*.34,r*.62,r*.44,-.3,0,Math.PI*2),e.fill(),e.fillStyle="rgba(28, 178, 170, 0.55)",e.beginPath(),e.arc(i-r*.35,s+r*.35,r*.44,0,Math.PI*2),e.fill(),e.fillStyle="rgba(36, 32, 34, 0.85)",e.beginPath(),e.ellipse(i+r*.45,s+r*.25,r*.38,r*.28,.4,0,Math.PI*2),e.fill();else if(c.key==="p2")e.strokeStyle="rgba(255, 42, 149, 0.45)",e.lineWidth=2,e.beginPath(),e.arc(i-r*.15,s-r*.1,r*.45,0,Math.PI*2),e.stroke();else if(c.key==="p4"){e.strokeStyle="rgba(255, 190, 95, 0.48)",e.lineWidth=1.8;for(const _ of[.35,.6,.82])e.beginPath(),e.arc(i,s,r*_,0,Math.PI*2),e.stroke()}e.restore(),c.key==="p5"&&(e.save(),e.translate(i,s),e.rotate(-.28),e.strokeStyle="rgba(165, 232, 255, 0.78)",e.lineWidth=10,e.beginPath(),e.ellipse(0,0,r*1.95,r*.52,0,0,Math.PI),e.stroke(),e.restore())}for(const h of this.currentLevel2Nodes){const u=this.selectedNode?.id===h.id,d=this.hoveredNode?.id===h.id;if(u&&(e.strokeStyle="rgba(255, 174, 66, 0.42)",e.lineWidth=1.2,e.setLineDash([4,4]),e.beginPath(),e.moveTo(h.x,h.y),e.lineTo(this.viewW-350,this.viewH*.5),e.stroke(),e.setLineDash([])),h.kind==="station"){e.fillStyle=u?"#ffd87a":"#1b2b44",e.strokeStyle=h.color,e.lineWidth=u?2.4:1.6,e.beginPath();for(let f=0;f<6;f++){const g=f/6*Math.PI*2+Math.PI/6,_=h.x+Math.cos(g)*h.radius,m=h.y+Math.sin(g)*h.radius;f===0?e.moveTo(_,m):e.lineTo(_,m)}e.closePath(),e.fill(),e.stroke()}else e.fillStyle=h.color,e.beginPath(),e.arc(h.x,h.y,h.radius,0,Math.PI*2),e.fill(),e.strokeStyle="#06101e",e.lineWidth=2,e.stroke();(u||d)&&this._drawReticleRing(e,h.x,h.y,h.radius+7,u?"#ffae42":"#5ed4ff",a),e.fillStyle=u?"#ffda88":"#e6f3ff",e.font=`${u?"700":"600"} 10.5px "Cascadia Code", Consolas, monospace`,e.textAlign="center",e.fillText(h.label,h.x,h.y-h.radius-8)}}_drawReticleIfMatch(e,t,n){this.hoveredNode?.key===t.key&&this._drawReticleRing(e,t.x,t.y,t.radiusPx+8,"#ffae42",n)}_drawReticleRing(e,t,n,i,s,r){e.save(),e.translate(t,n),e.rotate(r*1.4),e.strokeStyle=s,e.lineWidth=1.8;for(let a=0;a<4;a++){const l=a*Math.PI/2+.18,c=(a+1)*Math.PI/2-.18;e.beginPath(),e.arc(0,0,i,l,c),e.stroke()}e.restore()}_drawHoverTooltip(e,t){let r=t.x+t.radiusPx+16,a=t.y-58*.5;r+232>this.viewW-20&&(r=t.x-232-t.radiusPx-16),a<76&&(a=76),a+58>this.viewH-56&&(a=this.viewH-56-58),e.fillStyle="rgba(7, 15, 30, 0.92)",e.strokeStyle="rgba(255, 174, 66, 0.72)",e.lineWidth=1.2,e.fillRect(r,a,232,58),e.strokeRect(r,a,232,58),e.fillStyle="#ffae42",e.font='700 11px "Cascadia Code", Consolas, monospace',e.textAlign="left",e.fillText(t.label,r+12,a+18),e.fillStyle="#e6f3ff",e.font='600 10px "Cascadia Code", Consolas, monospace',e.fillText(`DISTANCIA: ${t.distKm.toLocaleString("es-ES")} km`,r+12,a+34),e.fillStyle="#8aa6c1",e.font='400 9.5px "Segoe UI", system-ui, sans-serif';const l=t.tagline.length>36?t.tagline.slice(0,35)+"…":t.tagline;e.fillText(l,r+12,a+49)}}const ju=document.getElementById("app-canvas"),Dh=document.getElementById("loading-screen"),fr=document.getElementById("loading-status"),Nh=document.getElementById("loading-bar-fill"),Ca=document.getElementById("hud-mode"),Uh=document.getElementById("hud-sector"),Fh=document.getElementById("hud-nearest"),Oh=document.getElementById("hud-altitude"),Bh=document.getElementById("hud-time-btn"),Ns=document.getElementById("hud-time"),pr=document.getElementById("pandora-landmarks-bar"),kh=document.getElementById("hud-speed"),zh=document.getElementById("hud-speed-unit"),Gh=document.getElementById("hud-speed-bar"),Vh=document.getElementById("hud-mult"),Pa=document.getElementById("hud-boost"),Hh=document.getElementById("hud-coords"),Po=new p_;Po.background=new re(198156);const Vi=new Tn(62,window.innerWidth/window.innerHeight,.05,12e4);Po.add(Vi);const ls=new f_({canvas:ju,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});ls.setSize(window.innerWidth,window.innerHeight);ls.setPixelRatio(Math.min(window.devicePixelRatio,2));ls.outputColorSpace=Gt;ls.toneMapping=El;ls.toneMappingExposure=1.08;const Ro=new xx(ls),hy=new vx(Po,Vi);Ro.addPass(hy);const $l=new qs(new Ge(window.innerWidth,window.innerHeight),.55,.35,.95);Ro.addPass($l);const uy=new Sx;Ro.addPass(uy);const Zu=bx(8500,52e3);Po.add(Zu);const $u=new wx(Vi,420),Ui=new Ex(Vi,ju),Cn=new ay({scene:Po,camera:Vi,controls:Ui,starfield:Zu,cockpitParticles:$u,bloomPass:$l,onStatusUpdate:o=>{if(Ca){Ca.textContent=o.modeText;const e=o.isUnderwater?"mode-sub":o.isSurface?"mode-atmo":"mode-orbit";Ca.className=`hud-value ${e}`}if(Uh&&(Uh.textContent=o.sectorName),Fh&&(Fh.textContent=o.nearestText),Oh&&(Oh.textContent=o.altitudeText),Ns&&(Ns.textContent=`${o.timeScale}x · ${o.solarPhaseName}`,Ns.className=`hud-value ${o.solarPhaseName==="DÍA"?"phase-day":o.solarPhaseName==="ATARDECER"?"phase-dusk":o.solarPhaseName==="NOCHE"?"phase-night":""}`),pr)if(o.pandoraLandmarks){pr.classList.remove("hidden");for(const e of o.pandoraLandmarks){const t=pr.querySelector(`small[data-dist="${e.id}"]`);t&&(t.textContent=`${e.distKm.toLocaleString("es-ES")} km`)}}else pr.classList.add("hidden")}}),Qu=()=>{const o=Cn.cycleTimeScale();if(Ns){const e=Ns.textContent.split("·")[1]?.trim()||"ESPACIO";Ns.textContent=`${o}x · ${e}`}};Bh&&Bh.addEventListener("click",o=>{o.stopPropagation(),Qu()});const Cr=new cy({overlayEl:document.getElementById("star-map-overlay"),canvasEl:document.getElementById("star-map-canvas"),backBtnEl:document.getElementById("star-map-back-btn"),closeBtnEl:document.getElementById("star-map-close-btn"),levelTagEl:document.getElementById("star-map-level-tag"),titleEl:document.getElementById("star-map-title"),dossierEl:document.getElementById("star-map-dossier"),dossierBadgeEl:document.getElementById("dossier-badge"),dossierTitleEl:document.getElementById("dossier-title"),dossierDescEl:document.getElementById("dossier-desc"),dossierTypeEl:document.getElementById("dossier-type"),dossierAltEl:document.getElementById("dossier-alt"),dossierAtmoEl:document.getElementById("dossier-atmo"),dossierDistEl:document.getElementById("dossier-dist"),jumpBtnEl:document.getElementById("star-map-jump-btn"),footerEl:document.getElementById("star-map-footer"),sceneManager:Cn,controls:Ui,onConfirmJump:o=>Cn.navigateToTarget(o)}),dy=new ly({containerEl:document.getElementById("tactical-minimap"),canvasEl:document.getElementById("minimap-canvas"),scaleEl:document.getElementById("minimap-scale"),sceneManager:Cn,onOpenStarMap:()=>Cr.open()});document.querySelectorAll(".pandora-lm-btn").forEach(o=>{o.addEventListener("click",e=>{e.stopPropagation();const t=o.dataset.landmark;t&&Cn.navigateToPandoraLandmark(t)})});window.addEventListener("keydown",o=>{Cr.isOpen()||(["Digit1","Numpad1"].includes(o.code)&&Cn.navigateToTarget("1"),["Digit2","Numpad2"].includes(o.code)&&Cn.navigateToTarget("2"),["Digit3","Numpad3"].includes(o.code)&&Cn.navigateToTarget("3"),["Digit4","Numpad4"].includes(o.code)&&Cn.navigateToTarget("4"),["Digit5","Numpad5"].includes(o.code)&&Cn.navigateToTarget("5"),["Digit6","Numpad6"].includes(o.code)&&Cn.navigateToTarget("6"),o.code==="KeyT"&&!o.repeat&&Qu())});window.addEventListener("resize",()=>{const o=window.innerWidth,e=window.innerHeight;Vi.aspect=o/e,Vi.updateProjectionMatrix(),ls.setSize(o,e),Ro.setSize(o,e),$l.resolution.set(o,e)});async function fy(){try{await Cn.init((o,e)=>{Nh&&(Nh.style.width=`${o}%`),fr&&(fr.textContent=e)})}catch(o){console.error("Error inicializando simulador:",o),fr&&(fr.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{Dh&&Dh.classList.add("hidden")},300)}}const Wh=new ku;function Ju(){requestAnimationFrame(Ju);const o=Wh.getDelta();Cn.update(o),Ui.update(o),Cn.syncCameraPostFlight();const e=Ui.getCurrentSpeed(),t=Ui.getPulseRatio();$u.update(o,e,t);const n=Cn.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(kh&&(kh.textContent=i),zh&&(zh.textContent=n?"km/s":"m/s"),Gh){const s=(n?1400:120)*Ui.speedMultiplier,r=Math.min(100,e/Math.max(1,s)*100);Gh.style.width=`${r}%`}if(Vh&&(Vh.textContent=`x${Ui.speedMultiplier.toFixed(1)}`),Pa){const s=t>.1;Pa.textContent=Ui.autopilot?"PILOTO AUTO":s?"MOTOR PULSE":"EN ESPERA",Pa.className=s?"status-active":"status-standby"}if(Hh){const s=Vi.position;Hh.textContent=`${s.x.toFixed(0)}, ${s.y.toFixed(0)}, ${s.z.toFixed(0)}`}Cr.isOpen()?Cr.updateAndDraw(performance.now()):dy.update(Wh.elapsedTime),Ro.render()}fy();Ju();
