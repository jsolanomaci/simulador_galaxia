(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="170",Zu=0,ql=1,$u=2,Bh=1,Qu=2,di=3,ni=0,yn=1,Zt=2,gi=0,Ts=1,mn=2,Yl=3,Kl=4,Ju=5,$i=100,ed=101,td=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,wa=204,Ea=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,Aa=0,Ta=1,Ca=2,Ls=3,Ra=4,Pa=5,Ia=6,La=7,zh=0,_d=1,xd=2,Fi=0,kh=1,Gh=2,Vh=3,vl=4,vd=5,Hh=6,Wh=7,jl="attached",Md="detached",Xh=300,Ds=301,Ns=302,Da=303,Na=304,Eo=306,Oi=1e3,Ni=1001,Mo=1002,Tn=1003,qh=1004,lr=1005,Nn=1006,uo=1007,pi=1008,Mi=1009,Yh=1010,Kh=1011,gr=1012,Ml=1013,es=1014,Kn=1015,_i=1016,yl=1017,Sl=1018,Us=1020,jh=35902,Zh=1021,$h=1022,kn=1023,Qh=1024,Jh=1025,Cs=1026,Fs=1027,bl=1028,wl=1029,eu=1030,El=1031,Al=1033,fo=33776,po=33777,mo=33778,go=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Ga=37496,Va=37808,Ha=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Ka=37814,ja=37815,Za=37816,$a=37817,Qa=37818,Ja=37819,el=37820,tl=37821,_o=36492,nl=36494,il=36495,tu=36283,sl=36284,rl=36285,ol=36286,_r=2300,xr=2301,Do=2302,Zl=2400,$l=2401,Ql=2402,yd=2500,Sd=0,nu=1,al=2,bd=3200,wd=3201,iu=0,Ed=1,Di="",Gt="srgb",Sn="srgb-linear",Ao="linear",Wt="srgb",os=7680,Jl=519,Ad=512,Td=513,Cd=514,su=515,Rd=516,Pd=517,Id=518,Ld=519,ll=35044,ec="300 es",mi=2e3,yo=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const ur=Math.PI/180,Os=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function pn(s,e,t){return Math.max(e,Math.min(t,s))}function Tl(s,e){return(s%e+e)%e}function Dd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Nd(s,e,t){return s!==e?(t-s)/(e-s):0}function dr(s,e,t){return(1-t)*s+t*e}function Ud(s,e,t,n){return dr(s,e,1-Math.exp(-t*n))}function Fd(s,e=1){return e-Math.abs(Tl(s,e*2)-e)}function Od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Bd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function zd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kd(s,e){return s+Math.random()*(e-s)}function Gd(s){return s*(.5-Math.random())}function Vd(s){s!==void 0&&(tc=s);let e=tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hd(s){return s*ur}function Wd(s){return s*Os}function Xd(s){return(s&s-1)===0&&s!==0}function qd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Yd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const q={DEG2RAD:ur,RAD2DEG:Os,generateUUID:jn,clamp:pn,euclideanModulo:Tl,mapLinear:Dd,inverseLerp:Nd,lerp:dr,damp:Ud,pingpong:Fd,smoothstep:Od,smootherstep:Bd,randInt:zd,randFloat:kd,randFloatSpread:Gd,seededRandom:Vd,degToRad:Hd,radToDeg:Wd,isPowerOfTwo:Xd,ceilPowerOfTwo:qd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:Kd,normalize:Xt,denormalize:qn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,n,i,r,o,a,l,c){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],S=i[4],x=i[7],R=i[2],E=i[5],T=i[8];return r[0]=o*_+a*y+l*R,r[3]=o*m+a*S+l*E,r[6]=o*p+a*x+l*T,r[1]=c*_+h*y+u*R,r[4]=c*m+h*S+u*E,r[7]=c*p+h*x+u*T,r[2]=d*_+f*y+g*R,r[5]=d*m+f*S+g*E,r[8]=d*p+f*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const No=new Et;function ru(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jd(){const s=vr("canvas");return s.style.display="block",s}const nc={};function cr(s){s in nc||(nc[s]=!0,console.warn(s))}function Zd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $d(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lt={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Wt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Wt&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Ao:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ic=[.64,.33,.3,.6,.15,.06],sc=[.2126,.7152,.0722],rc=[.3127,.329],oc=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Lt.define({[Sn]:{primaries:ic,whitePoint:rc,transfer:Ao,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:sc,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:ic,whitePoint:rc,transfer:Wt,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:sc,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});let as;class Jd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=vr("canvas")),as.width=e.width,as.height=e.height;const n=as.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ef=0;class ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uo(i[o].image)):r.push(Uo(i[o]))}else r=Uo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tf=0;class cn extends Ws{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Ni,i=Ni,r=Nn,o=pi,a=kn,l=Mi,c=cn.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=jn(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Xh;cn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(f+1)/2,R=(p+1)/2,E=(h+d)/4,T=(u+_)/4,M=(g+m)/4;return S>x&&S>R?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=T/n):x>R?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=M/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=T/r,i=M/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nf extends Ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends nf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class au extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sf extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _t{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),E=Math.atan2(R,p*y);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new w,lc=new _t;class Si{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Rr.subVectors(this.max,js),ls.subVectors(e.a,js),cs.subVectors(e.b,js),hs.subVectors(e.c,js),wi.subVectors(cs,ls),Ei.subVectors(hs,cs),Gi.subVectors(ls,hs);let t=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-Gi.z,Gi.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,Gi.z,0,-Gi.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-Gi.y,Gi.x,0];return!Oo(t,ls,cs,hs,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,ls,cs,hs,Rr))?!1:(Pr.crossVectors(wi,Ei),t=[Pr.x,Pr.y,Pr.z],Oo(t,ls,cs,hs,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new w,new w,new w,new w,new w,new w,new w,new w],Vn=new w,Cr=new Si,ls=new w,cs=new w,hs=new w,wi=new w,Ei=new w,Gi=new w,js=new w,Rr=new w,Pr=new w,Vi=new w;function Oo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vi.fromArray(s,r);const a=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rf=new Si,Zs=new w,Bo=new w;class ii{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Bo)),this.expandByPoint(Zs.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new w,zo=new w,Ir=new w,Ai=new w,ko=new w,Lr=new w,Go=new w;class To{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zo.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=Ai.dot(this.direction),l=-Ai.dot(Ir),c=Ai.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zo).addScaledVector(Ir,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){ko.subVectors(t,e),Lr.subVectors(n,e),Go.crossVectors(ko,Lr);let o=this.direction.dot(Go),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(Lr.crossVectors(Ai,Lr));if(l<0)return null;const c=a*this.direction.dot(ko.cross(Ai));if(c<0||l+c>o)return null;const h=-a*Ai.dot(Go);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(of,e,af)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ti.crossVectors(n,In),Ti.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ti.crossVectors(n,In)),Ti.normalize(),Dr.crossVectors(In,Ti),i[0]=Ti.x,i[4]=Dr.x,i[8]=In.x,i[1]=Ti.y,i[5]=Dr.y,i[9]=In.y,i[2]=Ti.z,i[6]=Dr.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],x=n[11],R=n[15],E=i[0],T=i[4],M=i[8],v=i[12],b=i[1],A=i[5],F=i[9],I=i[13],k=i[2],G=i[6],O=i[10],L=i[14],N=i[3],Y=i[7],Q=i[11],se=i[15];return r[0]=o*E+a*b+l*k+c*N,r[4]=o*T+a*A+l*G+c*Y,r[8]=o*M+a*F+l*O+c*Q,r[12]=o*v+a*I+l*L+c*se,r[1]=h*E+u*b+d*k+f*N,r[5]=h*T+u*A+d*G+f*Y,r[9]=h*M+u*F+d*O+f*Q,r[13]=h*v+u*I+d*L+f*se,r[2]=g*E+_*b+m*k+p*N,r[6]=g*T+_*A+m*G+p*Y,r[10]=g*M+_*F+m*O+p*Q,r[14]=g*v+_*I+m*L+p*se,r[3]=y*E+S*b+x*k+R*N,r[7]=y*T+S*A+x*G+R*Y,r[11]=y*M+S*F+x*O+R*Q,r[15]=y*v+S*I+x*L+R*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,E=t*y+n*S+i*x+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=S*T,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=x*T,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=R*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=l*c,S=l*h,x=l*u,R=n.x,E=n.y,T=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+x)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+S)*T,i[9]=(m-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Hn.copy(this);const c=1/r,h=1/o,u=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=mi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===mi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=mi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let g,_;if(a===mi)g=(o+r)*u,_=-2*u;else if(a===yo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new w,Hn=new lt,of=new w(0,0,0),af=new w(1,1,1),Ti=new w,Dr=new w,In=new w,cc=new lt,hc=new _t;class Gn{constructor(e=0,t=0,n=0,i=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hc.setFromEuler(this),this.setFromQuaternion(hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lf=0;const uc=new w,ds=new _t,li=new lt,Nr=new w,$s=new w,cf=new w,hf=new _t,dc=new w(1,0,0),fc=new w(0,1,0),pc=new w(0,0,1),mc={type:"added"},uf={type:"removed"},fs={type:"childadded",child:null},Vo={type:"childremoved",child:null};class zt extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new w,t=new Gn,n=new _t,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Et}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(dc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(pc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt($s,Nr,this.up):li.lookAt(Nr,$s,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(li),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mc),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uf),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mc),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new w(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new w,ci=new w,Ho=new w,hi=new w,ps=new w,ms=new w,gc=new w,Wo=new w,Xo=new w,qo=new w,Yo=new Vt,Ko=new Vt,jo=new Vt;class Bn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wn.subVectors(i,t),ci.subVectors(n,t),Ho.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(ci),l=Wn.dot(Ho),c=ci.dot(ci),h=ci.dot(Ho),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Yo.setScalar(0),Ko.setScalar(0),jo.setScalar(0),Yo.fromBufferAttribute(e,t),Ko.fromBufferAttribute(e,n),jo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Yo,r.x),o.addScaledVector(Ko,r.y),o.addScaledVector(jo,r.z),o}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),ci.subVectors(e,t),Wn.cross(ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Wn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ps.subVectors(i,n),ms.subVectors(r,n),Wo.subVectors(e,n);const l=ps.dot(Wo),c=ms.dot(Wo);if(l<=0&&c<=0)return t.copy(n);Xo.subVectors(e,i);const h=ps.dot(Xo),u=ms.dot(Xo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ps,o);qo.subVectors(e,r);const f=ps.dot(qo),g=ms.dot(qo);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ms,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return gc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(gc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Zo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=Tl(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Zo(o,r,e+1/3),this.g=Zo(o,r,e),this.b=Zo(o,r,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Lt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(pn(Mn.r*255,0,255))*65536+Math.round(pn(Mn.g*255,0,255))*256+Math.round(pn(Mn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,i=Mn.g,r=Mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Gt){Lt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,i=Mn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Ur);const n=dr(Ci.h,Ur.h,t),i=dr(Ci.s,Ur.s,t),r=dr(Ci.l,Ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new re;re.NAMES=cu;let df=0;class $n extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=jn(),this.name="",this.blending=Ts,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ea,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cn extends $n{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new w,Fr=new ke;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class hu extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uu extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ff=0;const Fn=new lt,$o=new zt,gs=new w,Ln=new Si,Qs=new Si,fn=new w;class Nt extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ru(e)?uu:hu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Ln.min,Qs.min),Ln.expandByPoint(fn),fn.addVectors(Ln.max,Qs.max),Ln.expandByPoint(fn)):(Ln.expandByPoint(Qs.min),Ln.expandByPoint(Qs.max))}Ln.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),fn.add(gs)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new w,l[M]=new w;const c=new w,h=new w,u=new w,d=new ke,f=new ke,g=new ke,_=new w,m=new w;function p(M,v,b){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[M].add(_),a[v].add(_),a[b].add(_),l[M].add(m),l[v].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,v=y.length;M<v;++M){const b=y[M],A=b.start,F=b.count;for(let I=A,k=A+F;I<k;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new w,x=new w,R=new w,E=new w;function T(M){R.fromBufferAttribute(i,M),E.copy(R);const v=a[M];S.copy(v),S.sub(R.multiplyScalar(R.dot(v))).normalize(),x.crossVectors(E,v);const A=x.dot(l[M])<0?-1:1;o.setXYZW(M,S.x,S.y,S.z,A)}for(let M=0,v=y.length;M<v;++M){const b=y[M],A=b.start,F=b.count;for(let I=A,k=A+F;I<k;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _c=new lt,Hi=new To,Or=new ii,xc=new w,Br=new w,zr=new w,kr=new w,Qo=new w,Gr=new w,vc=new w,Vr=new w;class dt extends zt{constructor(e=new Nt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Qo.fromBufferAttribute(u,e),o?Gr.addScaledVector(Qo,h):Gr.addScaledVector(Qo.sub(t),h))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(Or.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Or,xc)===null||Hi.origin.distanceToSquared(xc)>(e.far-e.near)**2))&&(_c.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(_c),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,R=S;x<R;x+=3){const E=a.getX(x),T=a.getX(x+1),M=a.getX(x+2);i=Hr(this,p,e,n,c,h,u,E,T,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Hr(this,o,e,n,c,h,u,y,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,R=S;x<R;x+=3){const E=x,T=x+1,M=x+2;i=Hr(this,p,e,n,c,h,u,E,T,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,x=m+2;i=Hr(this,o,e,n,c,h,u,y,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function pf(s,e,t,n,i,r,o,a){let l;if(e.side===yn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ni,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:s}}function Hr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Br),s.getVertexPosition(l,zr),s.getVertexPosition(c,kr);const h=pf(s,e,t,n,Br,zr,kr,vc);if(h){const u=new w;Bn.getBarycoord(vc,Br,zr,kr,u),i&&(h.uv=Bn.getInterpolatedAttribute(i,a,l,c,u,new ke)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,a,l,c,u,new ke)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new w,materialIndex:0};Bn.getNormal(Br,zr,kr,d.normal),h.face=d,h.barycoord=u}return h}class en extends Nt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function g(_,m,p,y,S,x,R,E,T,M,v){const b=x/T,A=R/M,F=x/2,I=R/2,k=E/2,G=T+1,O=M+1;let L=0,N=0;const Y=new w;for(let Q=0;Q<O;Q++){const se=Q*A-I;for(let he=0;he<G;he++){const we=he*b-F;Y[_]=we*y,Y[m]=se*S,Y[p]=k,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(he/T),u.push(1-Q/M),L+=1}}for(let Q=0;Q<M;Q++)for(let se=0;se<T;se++){const he=d+se+G*Q,we=d+se+G*(Q+1),U=d+(se+1)+G*(Q+1),V=d+(se+1)+G*Q;l.push(he,we,V),l.push(we,U,V),N+=6}a.addGroup(f,N,v),f+=N,d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const n=Bs(s[t]);for(const i in n)e[i]=n[i]}return e}function mf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function du(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Mr={clone:Bs,merge:wn};var gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends $n{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fu extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new w,Mc=new ke,yc=new ke;class En extends fu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Mc,yc),t.subVectors(yc,Mc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,xs=1;class xf extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new En(_s,xs,e,t);i.layers=this.layers,this.add(i);const r=new En(_s,xs,e,t);r.layers=this.layers,this.add(r);const o=new En(_s,xs,e,t);o.layers=this.layers,this.add(o);const a=new En(_s,xs,e,t);a.layers=this.layers,this.add(a);const l=new En(_s,xs,e,t);l.layers=this.layers,this.add(l);const c=new En(_s,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pu extends cn{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vf extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new en(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:gi});r.uniforms.tEquirect.value=t;const o=new dt(i,r),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=Nn),new xf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Jo=new w,Mf=new w,yf=new Et;class Ki{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jo.subVectors(n,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yf.getNormalMatrix(e),i=this.coplanarPoint(Jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new ii,Wr=new w;class Cl{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,r=new Ki,o=new Ki){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+y).normalize(),n[3].setComponents(l-o,d-h,m-g,x-y).normalize(),n[4].setComponents(l-a,d-u,m-_,x-S).normalize(),t===mi)n[5].setComponents(l+a,d+u,m+_,x+S).normalize();else if(t===yo)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wr.x=i.normal.x>0?e.max.x:e.min.x,Wr.y=i.normal.y>0?e.max.y:e.min.y,Wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sf(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Qn extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let S=0;S<c;S++){const x=S*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const S=y+c*p,x=y+c*(p+1),R=y+1+c*(p+1),E=y+1+c*p;f.push(S,x,E),f.push(x,R,E)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
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
#endif`,Of=`#ifdef USE_BUMPMAP
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qf=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,yp=`struct PhysicalMaterial {
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
}`,Sp=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lp=`#if defined( USE_POINTS_UV )
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
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
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
#endif`,zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
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
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a0=`float getShadowMask() {
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
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define LAMBERT
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
}`,k0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,V0=`#define NORMAL
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
}`,H0=`#define NORMAL
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
}`,W0=`#define PHONG
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
}`,X0=`#define PHONG
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define STANDARD
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
}`,K0=`#define TOON
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
}`,j0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,J0=`uniform vec3 color;
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
}`,em=`uniform float rotation;
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
}`,tm=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:bf,alphahash_pars_fragment:wf,alphamap_fragment:Ef,alphamap_pars_fragment:Af,alphatest_fragment:Tf,alphatest_pars_fragment:Cf,aomap_fragment:Rf,aomap_pars_fragment:Pf,batching_pars_vertex:If,batching_vertex:Lf,begin_vertex:Df,beginnormal_vertex:Nf,bsdfs:Uf,iridescence_fragment:Ff,bumpmap_pars_fragment:Of,clipping_planes_fragment:Bf,clipping_planes_pars_fragment:zf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Gf,color_fragment:Vf,color_pars_fragment:Hf,color_pars_vertex:Wf,color_vertex:Xf,common:qf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:jf,displacementmap_vertex:Zf,emissivemap_fragment:$f,emissivemap_pars_fragment:Qf,colorspace_fragment:Jf,colorspace_pars_fragment:ep,envmap_fragment:tp,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:mp,envmap_vertex:rp,fog_vertex:op,fog_pars_vertex:ap,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:hp,lightmap_pars_fragment:up,lights_lambert_fragment:dp,lights_lambert_pars_fragment:fp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:_p,lights_phong_fragment:xp,lights_phong_pars_fragment:vp,lights_physical_fragment:Mp,lights_physical_pars_fragment:yp,lights_fragment_begin:Sp,lights_fragment_maps:bp,lights_fragment_end:wp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Cp,map_fragment:Rp,map_pars_fragment:Pp,map_particle_fragment:Ip,map_particle_pars_fragment:Lp,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Np,morphinstance_vertex:Up,morphcolor_vertex:Fp,morphnormal_vertex:Op,morphtarget_pars_vertex:Bp,morphtarget_vertex:zp,normal_fragment_begin:kp,normal_fragment_maps:Gp,normal_pars_fragment:Vp,normal_pars_vertex:Hp,normal_vertex:Wp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:jp,opaque_fragment:Zp,packing:$p,premultiplied_alpha_fragment:Qp,project_vertex:Jp,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:r0,shadowmap_vertex:o0,shadowmask_pars_fragment:a0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:u0,specularmap_fragment:d0,specularmap_pars_fragment:f0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:_0,uv_pars_fragment:x0,uv_pars_vertex:v0,uv_vertex:M0,worldpos_vertex:y0,background_vert:S0,background_frag:b0,backgroundCube_vert:w0,backgroundCube_frag:E0,cube_vert:A0,cube_frag:T0,depth_vert:C0,depth_frag:R0,distanceRGBA_vert:P0,distanceRGBA_frag:I0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:N0,linedashed_frag:U0,meshbasic_vert:F0,meshbasic_frag:O0,meshlambert_vert:B0,meshlambert_frag:z0,meshmatcap_vert:k0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:H0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:q0,meshphysical_frag:Y0,meshtoon_vert:K0,meshtoon_frag:j0,points_vert:Z0,points_frag:$0,shadow_vert:Q0,shadow_frag:J0,sprite_vert:em,sprite_frag:tm},ze={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},ti={basic:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new re(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:wn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:wn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new re(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:wn([ze.points,ze.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:wn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:wn([ze.common,ze.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:wn([ze.sprite,ze.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:wn([ze.common,ze.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:wn([ze.lights,ze.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ti.physical={uniforms:wn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Xr={r:0,b:0,g:0},Xi=new Gn,nm=new lt;function im(s,e,t,n,i,r,o){const a=new re(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const x=g(y);x===null?p(a,l):x&&x.isColor&&(p(x,1),S=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Eo)?(h===void 0&&(h=new dt(new en(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Bs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xi.copy(S.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nm.makeRotationFromEuler(Xi)),h.material.toneMapped=Lt.getTransfer(x.colorSpace)!==Wt,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new dt(new Qn(2,2),new on({name:"BackgroundMaterial",uniforms:Bs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(x.colorSpace)!==Wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Xr,du(s)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function sm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,A,F,I,k){let G=!1;const O=u(I,F,A);r!==O&&(r=O,c(r.object)),G=f(b,I,F,k),G&&g(b,I,F,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(b,A,F,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,A,F){const I=F.wireframe===!0;let k=n[b.id];k===void 0&&(k={},n[b.id]=k);let G=k[A.id];G===void 0&&(G={},k[A.id]=G);let O=G[I];return O===void 0&&(O=d(l()),G[I]=O),O}function d(b){const A=[],F=[],I=[];for(let k=0;k<t;k++)A[k]=0,F[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:I,object:b,attributes:{},index:null}}function f(b,A,F,I){const k=r.attributes,G=A.attributes;let O=0;const L=F.getAttributes();for(const N in L)if(L[N].location>=0){const Q=k[N];let se=G[N];if(se===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function g(b,A,F,I){const k={},G=A.attributes;let O=0;const L=F.getAttributes();for(const N in L)if(L[N].location>=0){let Q=G[N];Q===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),k[N]=se,O++}r.attributes=k,r.attributesNum=O,r.index=I}function _(){const b=r.newAttributes;for(let A=0,F=b.length;A<F;A++)b[A]=0}function m(b){p(b,0)}function p(b,A){const F=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;F[b]=1,I[b]===0&&(s.enableVertexAttribArray(b),I[b]=1),k[b]!==A&&(s.vertexAttribDivisor(b,A),k[b]=A)}function y(){const b=r.newAttributes,A=r.enabledAttributes;for(let F=0,I=A.length;F<I;F++)A[F]!==b[F]&&(s.disableVertexAttribArray(F),A[F]=0)}function S(b,A,F,I,k,G,O){O===!0?s.vertexAttribIPointer(b,A,F,k,G):s.vertexAttribPointer(b,A,F,I,k,G)}function x(b,A,F,I){_();const k=I.attributes,G=F.getAttributes(),O=A.defaultAttributeValues;for(const L in G){const N=G[L];if(N.location>=0){let Y=k[L];if(Y===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor)),Y!==void 0){const Q=Y.normalized,se=Y.itemSize,he=e.get(Y);if(he===void 0)continue;const we=he.buffer,U=he.type,V=he.bytesPerElement,J=U===s.INT||U===s.UNSIGNED_INT||Y.gpuType===Ml;if(Y.isInterleavedBufferAttribute){const ie=Y.data,de=ie.stride,fe=Y.offset;if(ie.isInstancedInterleavedBuffer){for(let xe=0;xe<N.locationSize;xe++)p(N.location+xe,ie.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let xe=0;xe<N.locationSize;xe++)m(N.location+xe);s.bindBuffer(s.ARRAY_BUFFER,we);for(let xe=0;xe<N.locationSize;xe++)S(N.location+xe,se/N.locationSize,U,Q,de*V,(fe+se/N.locationSize*xe)*V,J)}else{if(Y.isInstancedBufferAttribute){for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie,Y.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<N.locationSize;ie++)m(N.location+ie);s.bindBuffer(s.ARRAY_BUFFER,we);for(let ie=0;ie<N.locationSize;ie++)S(N.location+ie,se/N.locationSize,U,Q,se*V,se/N.locationSize*ie*V,J)}}else if(O!==void 0){const Q=O[L];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(N.location,Q);break;case 3:s.vertexAttrib3fv(N.location,Q);break;case 4:s.vertexAttrib4fv(N.location,Q);break;default:s.vertexAttrib1fv(N.location,Q)}}}}y()}function R(){M();for(const b in n){const A=n[b];for(const F in A){const I=A[F];for(const k in I)h(I[k].object),delete I[k];delete A[F]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const A=n[b.id];for(const F in A){const I=A[F];for(const k in I)h(I[k].object),delete I[k];delete A[F]}delete n[b.id]}function T(b){for(const A in n){const F=n[A];if(F[b.id]===void 0)continue;const I=F[b.id];for(const k in I)h(I[k].object),delete I[k];delete F[b.id]}}function M(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:M,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function rm(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function om(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==kn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const M=T===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Mi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!M)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:E}}function am(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ki,a=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,S=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,S,f);for(let R=0;R!==S;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function lm(s){let e=new WeakMap;function t(o,a){return a===Da?o.mapping=Ds:a===Na&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Da||a===Na)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Co extends fu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,Sc=[.125,.215,.35,.446,.526,.582],Qi=20,ea=new Co,bc=new re;let ta=null,na=0,ia=0,sa=!1;const ji=(1+Math.sqrt(5))/2,vs=1/ji,wc=[new w(-ji,vs,0),new w(ji,vs,0),new w(-vs,0,ji),new w(vs,0,ji),new w(0,ji,-vs),new w(0,ji,vs),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta,na,ia),this._renderer.xr.enabled=sa,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:_i,format:kn,colorSpace:Sn,depthBuffer:!1},i=Ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cm(r)),this._blurMaterial=hm(r,e,t)}return i}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,i){const a=new En(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bc),h.toneMapping=Fi,h.autoClear=!1;const f=new Cn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new dt(new en,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(bc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;qr(i,y*S,p>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ds||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wc[(i-r-1)%wc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const p=[];let y=0;for(let T=0;T<Qi;++T){const M=T/_,v=Math.exp(-M*M/2);p.push(v),T===0?y+=v:T<m&&(y+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[i],R=3*x*(i>S-As?i-S+As:0),E=4*(this._cubeSize-x);qr(t,R,E,3*x,2*x),l.setRenderTarget(t),l.render(u,ea)}}function cm(s){const e=[],t=[],n=[];let i=s;const r=s-As+1+Sc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-As?l=Sc[o-s+As-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,M=E>2?0:-1,v=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];y.set(v,_*g*E),S.set(d,m*g*E);const b=[E,E,E,E,E,E];x.set(b,p*g*E)}const R=new Nt;R.setAttribute("position",new St(y,_)),R.setAttribute("uv",new St(S,m)),R.setAttribute("faceIndex",new St(x,p)),e.push(R),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ac(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function hm(s,e,t){const n=new Float32Array(Qi),i=new w(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Tc(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Cc(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function um(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Da||l===Na,h=l===Ds||l===Ns;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ec(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ec(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function dm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fm(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let S=0,x=y.length;S<x;S+=3){const R=y[S+0],E=y[S+1],T=y[S+2];d.push(R,E,E,T,T,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const R=S+0,E=S+1,T=S+2;d.push(R,E,E,T,T,R)}}else return;const m=new(ru(d)?uu:hu)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function pm(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function mm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gm(s,e,t){const n=new WeakMap,i=new Vt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*E*4*u),M=new au(T,R,E,u);M.type=Kn,M.needsUpdate=!0;const v=x*4;for(let A=0;A<u;A++){const F=p[A],I=y[A],k=S[A],G=R*E*4*A;for(let O=0;O<F.count;O++){const L=O*v;g===!0&&(i.fromBufferAttribute(F,O),T[G+L+0]=i.x,T[G+L+1]=i.y,T[G+L+2]=i.z,T[G+L+3]=0),_===!0&&(i.fromBufferAttribute(I,O),T[G+L+4]=i.x,T[G+L+5]=i.y,T[G+L+6]=i.z,T[G+L+7]=0),m===!0&&(i.fromBufferAttribute(k,O),T[G+L+8]=i.x,T[G+L+9]=i.y,T[G+L+10]=i.z,T[G+L+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:M,size:new ke(R,E)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function _m(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class gu extends cn{constructor(e,t,n,i,r,o,a,l,c,h=Cs){if(h!==Cs&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=es),n===void 0&&h===Fs&&(n=Us),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _u=new cn,Rc=new gu(1,1),xu=new au,vu=new sf,Mu=new pu,Pc=[],Ic=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Nc=new Float32Array(4);function Xs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Pc[i];if(r===void 0&&(r=new Float32Array(i),Pc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ro(s,e){let t=Ic[e];t===void 0&&(t=new Int32Array(e),Ic[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function Sm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Nc.set(n),s.uniformMatrix2fv(this.addr,!1,Nc),un(t,n)}}function bm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Dc.set(n),s.uniformMatrix3fv(this.addr,!1,Dc),un(t,n)}}function wm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Lc.set(n),s.uniformMatrix4fv(this.addr,!1,Lc),un(t,n)}}function Em(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function Tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function Cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function Rm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function Im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function Lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function Dm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Rc.compareFunction=su,r=Rc):r=_u,t.setTexture2D(e||r,i)}function Nm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vu,i)}function Um(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mu,i)}function Fm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xu,i)}function Om(s){switch(s){case 5126:return xm;case 35664:return vm;case 35665:return Mm;case 35666:return ym;case 35674:return Sm;case 35675:return bm;case 35676:return wm;case 5124:case 35670:return Em;case 35667:case 35671:return Am;case 35668:case 35672:return Tm;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Pm;case 36295:return Im;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Fm}}function Bm(s,e){s.uniform1fv(this.addr,e)}function zm(s,e){const t=Xs(e,this.size,2);s.uniform2fv(this.addr,t)}function km(s,e){const t=Xs(e,this.size,3);s.uniform3fv(this.addr,t)}function Gm(s,e){const t=Xs(e,this.size,4);s.uniform4fv(this.addr,t)}function Vm(s,e){const t=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Hm(s,e){const t=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Wm(s,e){const t=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xm(s,e){s.uniform1iv(this.addr,e)}function qm(s,e){s.uniform2iv(this.addr,e)}function Ym(s,e){s.uniform3iv(this.addr,e)}function Km(s,e){s.uniform4iv(this.addr,e)}function jm(s,e){s.uniform1uiv(this.addr,e)}function Zm(s,e){s.uniform2uiv(this.addr,e)}function $m(s,e){s.uniform3uiv(this.addr,e)}function Qm(s,e){s.uniform4uiv(this.addr,e)}function Jm(s,e,t){const n=this.cache,i=e.length,r=Ro(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||_u,r[o])}function eg(s,e,t){const n=this.cache,i=e.length,r=Ro(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vu,r[o])}function tg(s,e,t){const n=this.cache,i=e.length,r=Ro(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Mu,r[o])}function ng(s,e,t){const n=this.cache,i=e.length,r=Ro(t,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||xu,r[o])}function ig(s){switch(s){case 5126:return Bm;case 35664:return zm;case 35665:return km;case 35666:return Gm;case 35674:return Vm;case 35675:return Hm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return Km;case 5125:return jm;case 36294:return Zm;case 36295:return $m;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}class sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Om(t.type)}}class rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ig(t.type)}}class og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Uc(s,e){s.seq.push(e),s.map[e.id]=e}function ag(s,e,t){const n=s.name,i=n.length;for(ra.lastIndex=0;;){const r=ra.exec(n),o=ra.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Uc(t,c===void 0?new sg(a,s,e):new rg(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new og(a),Uc(t,u)),t=u}}}class xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ag(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Fc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const lg=37297;let cg=0;function hg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Oc=new Et;function ug(s){Lt._getMatrix(Oc,Lt.workingColorSpace,s);const e=`mat3( ${Oc.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case Ao:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+hg(s.getShaderSource(e),o)}else return i}function dg(s,e){const t=ug(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fg(s,e){let t;switch(e){case kh:t="Linear";break;case Gh:t="Reinhard";break;case Vh:t="Cineon";break;case vl:t="ACESFilmic";break;case Hh:t="AgX";break;case Wh:t="Neutral";break;case vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new w;function pg(){Lt.getLuminanceCoefficients(Yr);const s=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function gg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _g(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function hr(s){return s!==""}function zc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(s){return s.replace(xg,Mg)}const vg=new Map;function Mg(s,e){let t=Tt[e];if(t===void 0){const n=vg.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(s){return s.replace(yg,Sg)}function Sg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function wg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Ag(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function Tg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bg(t),c=wg(t),h=Eg(t),u=Ag(t),d=Tg(t),f=mg(t),g=gg(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,dg("linearToOutputTexel",t.outputColorSpace),pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),o=cl(o),o=zc(o,t),o=kc(o,t),a=cl(a),a=zc(a,t),a=kc(a,t),o=Gc(o),a=Gc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,x=y+p+a,R=Fc(i,i.VERTEX_SHADER,S),E=Fc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,R),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(A){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),I=i.getShaderInfoLog(R).trim(),k=i.getShaderInfoLog(E).trim();let G=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,E);else{const L=Bc(i,R,"vertex"),N=Bc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+L+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||k==="")&&(O=!1);O&&(A.diagnostics={runnable:G,programLog:F,vertexShader:{log:I,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(R),i.deleteShader(E),M=new xo(i,_),v=_g(i,_)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,lg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let Rg=0;class Pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ig(e),t.set(e,n)),n}}class Ig{constructor(e){this.id=Rg++,this.code=e,this.usedTimes=0}}function Lg(s,e,t,n,i,r,o){const a=new lu,l=new Pg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,A,F,I){const k=F.fog,G=I.geometry,O=v.isMeshStandardMaterial?F.environment:null,L=(v.isMeshStandardMaterial?t:e).get(v.envMap||O),N=L&&L.mapping===Eo?L.image.height:null,Y=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=Q!==void 0?Q.length:0;let he=0;G.morphAttributes.position!==void 0&&(he=1),G.morphAttributes.normal!==void 0&&(he=2),G.morphAttributes.color!==void 0&&(he=3);let we,U,V,J;if(Y){const $=ti[Y];we=$.vertexShader,U=$.fragmentShader}else we=v.vertexShader,U=v.fragmentShader,l.update(v),V=l.getVertexShaderID(v),J=l.getFragmentShaderID(v);const ie=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),fe=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,Te=!!v.map,ye=!!v.matcap,Se=!!L,H=!!v.aoMap,tt=!!v.lightMap,We=!!v.bumpMap,Je=!!v.normalMap,Ee=!!v.displacementMap,ot=!!v.emissiveMap,Re=!!v.metalnessMap,D=!!v.roughnessMap,C=v.anisotropy>0,j=v.clearcoat>0,oe=v.dispersion>0,ce=v.iridescence>0,ae=v.sheen>0,Ue=v.transmission>0,Ce=C&&!!v.anisotropyMap,Ne=j&&!!v.clearcoatMap,ft=j&&!!v.clearcoatNormalMap,pe=j&&!!v.clearcoatRoughnessMap,Ie=ce&&!!v.iridescenceMap,Qe=ce&&!!v.iridescenceThicknessMap,it=ae&&!!v.sheenColorMap,Ge=ae&&!!v.sheenRoughnessMap,vt=!!v.specularMap,ct=!!v.specularColorMap,At=!!v.specularIntensityMap,X=Ue&&!!v.transmissionMap,Ae=Ue&&!!v.thicknessMap,Z=!!v.gradientMap,le=!!v.alphaMap,Le=v.alphaTest>0,De=!!v.alphaHash,st=!!v.extensions;let pt=Fi;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(pt=s.toneMapping);const Pt={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:we,fragmentShader:U,defines:v.defines,customVertexShaderID:V,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:xe,batchingColor:xe&&I._colorsTexture!==null,instancing:fe,instancingColor:fe&&I.instanceColor!==null,instancingMorph:fe&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Sn,alphaToCoverage:!!v.alphaToCoverage,map:Te,matcap:ye,envMap:Se,envMapMode:Se&&L.mapping,envMapCubeUVHeight:N,aoMap:H,lightMap:tt,bumpMap:We,normalMap:Je,displacementMap:d&&Ee,emissiveMap:ot,normalMapObjectSpace:Je&&v.normalMapType===Ed,normalMapTangentSpace:Je&&v.normalMapType===iu,metalnessMap:Re,roughnessMap:D,anisotropy:C,anisotropyMap:Ce,clearcoat:j,clearcoatMap:Ne,clearcoatNormalMap:ft,clearcoatRoughnessMap:pe,dispersion:oe,iridescence:ce,iridescenceMap:Ie,iridescenceThicknessMap:Qe,sheen:ae,sheenColorMap:it,sheenRoughnessMap:Ge,specularMap:vt,specularColorMap:ct,specularIntensityMap:At,transmission:Ue,transmissionMap:X,thicknessMap:Ae,gradientMap:Z,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:Le,alphaHash:De,combine:v.combine,mapUv:Te&&_(v.map.channel),aoMapUv:H&&_(v.aoMap.channel),lightMapUv:tt&&_(v.lightMap.channel),bumpMapUv:We&&_(v.bumpMap.channel),normalMapUv:Je&&_(v.normalMap.channel),displacementMapUv:Ee&&_(v.displacementMap.channel),emissiveMapUv:ot&&_(v.emissiveMap.channel),metalnessMapUv:Re&&_(v.metalnessMap.channel),roughnessMapUv:D&&_(v.roughnessMap.channel),anisotropyMapUv:Ce&&_(v.anisotropyMap.channel),clearcoatMapUv:Ne&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:it&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(v.sheenRoughnessMap.channel),specularMapUv:vt&&_(v.specularMap.channel),specularColorMapUv:ct&&_(v.specularColorMap.channel),specularIntensityMapUv:At&&_(v.specularIntensityMap.channel),transmissionMapUv:X&&_(v.transmissionMap.channel),thicknessMapUv:Ae&&_(v.thicknessMap.channel),alphaMapUv:le&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Je||C),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!G.attributes.uv&&(Te||le),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:de,skinning:I.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:pt,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&Lt.getTransfer(v.map.colorSpace)===Wt,decodeVideoTextureEmissive:ot&&v.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(v.emissiveMap.colorSpace)===Wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Zt,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)b.push(A),b.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(y(b,v),S(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const b=g[v.type];let A;if(b){const F=ti[b];A=Mr.clone(F.uniforms)}else A=v.uniforms;return A}function R(v,b){let A;for(let F=0,I=h.length;F<I;F++){const k=h[F];if(k.cacheKey===b){A=k,++A.usedTimes;break}}return A===void 0&&(A=new Cg(s,b,v,r),h.push(A)),A}function E(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function M(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:M}}function Dg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Hc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Ng),n.length>1&&n.sort(d||Hc),i.length>1&&i.sort(d||Hc)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Ug(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Wc,s.set(n,[o])):i>=r.length?(o=new Wc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new re};break;case"SpotLight":t={position:new w,direction:new w,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Og(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Bg=0;function zg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kg(s){const e=new Fg,t=Og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,r=new lt,o=new lt;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,S=0,x=0,R=0,E=0,T=0;c.sort(zg);for(let v=0,b=c.length;v<b;v++){const A=c[v],F=A.color,I=A.intensity,k=A.distance,G=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*I,u+=F.g*I,d+=F.b*I;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],I);T++}else if(A.isDirectionalLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const L=A.shadow,N=t.get(A);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=A.shadow.matrix,y++}n.directional[f]=O,f++}else if(A.isSpotLight){const O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(F).multiplyScalar(I),O.distance=k,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[_]=O;const L=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,L.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[_]=L.matrix,A.castShadow){const N=t.get(A);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=G,x++}_++}else if(A.isRectAreaLight){const O=e.get(A);O.color.copy(F).multiplyScalar(I),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=O,m++}else if(A.isPointLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){const L=A.shadow,N=t.get(A);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,N.shadowCameraNear=L.camera.near,N.shadowCameraFar=L.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=A.shadow.matrix,S++}n.point[g]=O,g++}else if(A.isHemisphereLight){const O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(I),O.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[p]=O,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==f||M.pointLength!==g||M.spotLength!==_||M.rectAreaLength!==m||M.hemiLength!==p||M.numDirectionalShadows!==y||M.numPointShadows!==S||M.numSpotShadows!==x||M.numSpotMaps!==R||M.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,M.directionalLength=f,M.pointLength=g,M.spotLength=_,M.rectAreaLength=m,M.hemiLength=p,M.numDirectionalShadows=y,M.numPointShadows=S,M.numSpotShadows=x,M.numSpotMaps=R,M.numLightProbes=T,n.version=Bg++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Xc(s){const e=new kg(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Xc(s),e.set(i,[a])):r>=o.length?(a=new Xc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Vg extends $n{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hg extends $n{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`;function qg(s,e,t){let n=new Cl;const i=new ke,r=new ke,o=new Vt,a=new Vg({depthPacking:wd}),l=new Hg,c={},h=t.maxTextureSize,u={[ni]:yn,[yn]:ni,[Zt]:Zt},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(E,T,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const v=s.getRenderTarget(),b=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),F=s.state;F.setBlending(gi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=p!==di&&this.type===di,k=p===di&&this.type!==di;for(let G=0,O=E.length;G<O;G++){const L=E[G],N=L.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const Y=N.getFrameExtents();if(i.multiply(Y),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,N.mapSize.y=r.y)),N.map===null||I===!0||k===!0){const se=this.type!==di?{minFilter:Tn,magFilter:Tn}:{};N.map!==null&&N.map.dispose(),N.map=new Zn(i.x,i.y,se),N.map.texture.name=L.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const Q=N.getViewportCount();for(let se=0;se<Q;se++){const he=N.getViewport(se);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),F.viewport(o),N.updateMatrices(L,se),n=N.getFrustum(),x(T,M,N.camera,L,this.type)}N.isPointLightShadow!==!0&&this.type===di&&y(N,M),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,b,A)};function y(E,T){const M=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,M,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,M,f,_,null)}function S(E,T,M,v){let b=null;const A=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)b=A;else if(b=M.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=b.uuid,I=T.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let G=k[I];G===void 0&&(G=b.clone(),k[I]=G,T.addEventListener("dispose",R)),b=G}if(b.visible=T.visible,b.wireframe=T.wireframe,v===di?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,M.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=s.properties.get(b);F.light=M}return b}function x(E,T,M,v,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const I=e.update(E),k=E.material;if(Array.isArray(k)){const G=I.groups;for(let O=0,L=G.length;O<L;O++){const N=G[O],Y=k[N.materialIndex];if(Y&&Y.visible){const Q=S(E,Y,v,b);E.onBeforeShadow(s,E,T,M,I,Q,N),s.renderBufferDirect(M,null,I,Q,E,N),E.onAfterShadow(s,E,T,M,I,Q,N)}}}else if(k.visible){const G=S(E,k,v,b);E.onBeforeShadow(s,E,T,M,I,G,null),s.renderBufferDirect(M,null,I,G,E,null),E.onAfterShadow(s,E,T,M,I,G,null)}}const F=E.children;for(let I=0,k=F.length;I<k;I++)x(F[I],T,M,v,b)}function R(E){E.target.removeEventListener("dispose",R);for(const M in c){const v=c[M],b=E.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const Yg={[Aa]:Ta,[Ca]:Ia,[Ra]:La,[Ls]:Pa,[Ta]:Aa,[Ia]:Ca,[La]:Ra,[Pa]:Ls};function Kg(s,e){function t(){let X=!1;const Ae=new Vt;let Z=null;const le=new Vt(0,0,0,0);return{setMask:function(Le){Z!==Le&&!X&&(s.colorMask(Le,Le,Le,Le),Z=Le)},setLocked:function(Le){X=Le},setClear:function(Le,De,st,pt,Pt){Pt===!0&&(Le*=pt,De*=pt,st*=pt),Ae.set(Le,De,st,pt),le.equals(Ae)===!1&&(s.clearColor(Le,De,st,pt),le.copy(Ae))},reset:function(){X=!1,Z=null,le.set(-1,0,0,0)}}}function n(){let X=!1,Ae=!1,Z=null,le=null,Le=null;return{setReversed:function(De){if(Ae!==De){const st=e.get("EXT_clip_control");Ae?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const pt=Le;Le=null,this.setClear(pt)}Ae=De},getReversed:function(){return Ae},setTest:function(De){De?ie(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(De){Z!==De&&!X&&(s.depthMask(De),Z=De)},setFunc:function(De){if(Ae&&(De=Yg[De]),le!==De){switch(De){case Aa:s.depthFunc(s.NEVER);break;case Ta:s.depthFunc(s.ALWAYS);break;case Ca:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case Ra:s.depthFunc(s.EQUAL);break;case Pa:s.depthFunc(s.GEQUAL);break;case Ia:s.depthFunc(s.GREATER);break;case La:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=De}},setLocked:function(De){X=De},setClear:function(De){Le!==De&&(Ae&&(De=1-De),s.clearDepth(De),Le=De)},reset:function(){X=!1,Z=null,le=null,Le=null,Ae=!1}}}function i(){let X=!1,Ae=null,Z=null,le=null,Le=null,De=null,st=null,pt=null,Pt=null;return{setTest:function($){X||($?ie(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function($){Ae!==$&&!X&&(s.stencilMask($),Ae=$)},setFunc:function($,Pe,Fe){(Z!==$||le!==Pe||Le!==Fe)&&(s.stencilFunc($,Pe,Fe),Z=$,le=Pe,Le=Fe)},setOp:function($,Pe,Fe){(De!==$||st!==Pe||pt!==Fe)&&(s.stencilOp($,Pe,Fe),De=$,st=Pe,pt=Fe)},setLocked:function($){X=$},setClear:function($){Pt!==$&&(s.clearStencil($),Pt=$)},reset:function(){X=!1,Ae=null,Z=null,le=null,Le=null,De=null,st=null,pt=null,Pt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,x=null,R=null,E=null,T=new re(0,0,0),M=0,v=!1,b=null,A=null,F=null,I=null,k=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,L=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=L>=1):N.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=L>=2);let Y=null,Q={};const se=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),we=new Vt().fromArray(se),U=new Vt().fromArray(he);function V(X,Ae,Z,le){const Le=new Uint8Array(4),De=s.createTexture();s.bindTexture(X,De),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<Z;st++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ae+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return De}const J={};J[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(s.DEPTH_TEST),o.setFunc(Ls),We(!1),Je(ql),ie(s.CULL_FACE),H(gi);function ie(X){h[X]!==!0&&(s.enable(X),h[X]=!0)}function de(X){h[X]!==!1&&(s.disable(X),h[X]=!1)}function fe(X,Ae){return u[X]!==Ae?(s.bindFramebuffer(X,Ae),u[X]=Ae,X===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ae),X===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function xe(X,Ae){let Z=f,le=!1;if(X){Z=d.get(Ae),Z===void 0&&(Z=[],d.set(Ae,Z));const Le=X.textures;if(Z.length!==Le.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let De=0,st=Le.length;De<st;De++)Z[De]=s.COLOR_ATTACHMENT0+De;Z.length=Le.length,le=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,le=!0);le&&s.drawBuffers(Z)}function Te(X){return g!==X?(s.useProgram(X),g=X,!0):!1}const ye={[$i]:s.FUNC_ADD,[ed]:s.FUNC_SUBTRACT,[td]:s.FUNC_REVERSE_SUBTRACT};ye[nd]=s.MIN,ye[id]=s.MAX;const Se={[sd]:s.ZERO,[rd]:s.ONE,[od]:s.SRC_COLOR,[wa]:s.SRC_ALPHA,[dd]:s.SRC_ALPHA_SATURATE,[hd]:s.DST_COLOR,[ld]:s.DST_ALPHA,[ad]:s.ONE_MINUS_SRC_COLOR,[Ea]:s.ONE_MINUS_SRC_ALPHA,[ud]:s.ONE_MINUS_DST_COLOR,[cd]:s.ONE_MINUS_DST_ALPHA,[fd]:s.CONSTANT_COLOR,[pd]:s.ONE_MINUS_CONSTANT_COLOR,[md]:s.CONSTANT_ALPHA,[gd]:s.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ae,Z,le,Le,De,st,pt,Pt,$){if(X===gi){_===!0&&(de(s.BLEND),_=!1);return}if(_===!1&&(ie(s.BLEND),_=!0),X!==Ju){if(X!==m||$!==v){if((p!==$i||x!==$i)&&(s.blendEquation(s.FUNC_ADD),p=$i,x=$i),$)switch(X){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mn:s.blendFunc(s.ONE,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,S=null,R=null,E=null,T.set(0,0,0),M=0,m=X,v=$}return}Le=Le||Ae,De=De||Z,st=st||le,(Ae!==p||Le!==x)&&(s.blendEquationSeparate(ye[Ae],ye[Le]),p=Ae,x=Le),(Z!==y||le!==S||De!==R||st!==E)&&(s.blendFuncSeparate(Se[Z],Se[le],Se[De],Se[st]),y=Z,S=le,R=De,E=st),(pt.equals(T)===!1||Pt!==M)&&(s.blendColor(pt.r,pt.g,pt.b,Pt),T.copy(pt),M=Pt),m=X,v=!1}function tt(X,Ae){X.side===Zt?de(s.CULL_FACE):ie(s.CULL_FACE);let Z=X.side===yn;Ae&&(Z=!Z),We(Z),X.blending===Ts&&X.transparent===!1?H(gi):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const le=X.stencilWrite;a.setTest(le),le&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ot(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(X){b!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),b=X)}function Je(X){X!==Zu?(ie(s.CULL_FACE),X!==A&&(X===ql?s.cullFace(s.BACK):X===$u?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),A=X}function Ee(X){X!==F&&(O&&s.lineWidth(X),F=X)}function ot(X,Ae,Z){X?(ie(s.POLYGON_OFFSET_FILL),(I!==Ae||k!==Z)&&(s.polygonOffset(Ae,Z),I=Ae,k=Z)):de(s.POLYGON_OFFSET_FILL)}function Re(X){X?ie(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function D(X){X===void 0&&(X=s.TEXTURE0+G-1),Y!==X&&(s.activeTexture(X),Y=X)}function C(X,Ae,Z){Z===void 0&&(Y===null?Z=s.TEXTURE0+G-1:Z=Y);let le=Q[Z];le===void 0&&(le={type:void 0,texture:void 0},Q[Z]=le),(le.type!==X||le.texture!==Ae)&&(Y!==Z&&(s.activeTexture(Z),Y=Z),s.bindTexture(X,Ae||J[X]),le.type=X,le.texture=Ae)}function j(){const X=Q[Y];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(X){we.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),we.copy(X))}function Ge(X){U.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),U.copy(X))}function vt(X,Ae){let Z=c.get(Ae);Z===void 0&&(Z=new WeakMap,c.set(Ae,Z));let le=Z.get(X);le===void 0&&(le=s.getUniformBlockIndex(Ae,X.name),Z.set(X,le))}function ct(X,Ae){const le=c.get(Ae).get(X);l.get(Ae)!==le&&(s.uniformBlockBinding(Ae,le,X.__bindingPointIndex),l.set(Ae,le))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,Q={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,x=null,R=null,E=null,T=new re(0,0,0),M=0,v=!1,b=null,A=null,F=null,I=null,k=null,we.set(0,0,s.canvas.width,s.canvas.height),U.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:de,bindFramebuffer:fe,drawBuffers:xe,useProgram:Te,setBlending:H,setMaterial:tt,setFlipSided:We,setCullFace:Je,setLineWidth:Ee,setPolygonOffset:ot,setScissorTest:Re,activeTexture:D,bindTexture:C,unbindTexture:j,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:Ie,texImage3D:Qe,updateUBOMapping:vt,uniformBlockBinding:ct,texStorage2D:ft,texStorage3D:pe,texSubImage2D:ae,texSubImage3D:Ue,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:it,viewport:Ge,reset:At}}function qc(s,e,t,n){const i=jg(n);switch(t){case Zh:return s*e;case Qh:return s*e;case Jh:return s*e*2;case bl:return s*e/i.components*i.byteLength;case wl:return s*e/i.components*i.byteLength;case eu:return s*e*2/i.components*i.byteLength;case El:return s*e*2/i.components*i.byteLength;case $h:return s*e*3/i.components*i.byteLength;case kn:return s*e*4/i.components*i.byteLength;case Al:return s*e*4/i.components*i.byteLength;case fo:case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(s,16)*Math.max(e,8)/4;case Ua:case Oa:return Math.max(s,8)*Math.max(e,8)/2;case za:case ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _o:case nl:case il:return Math.ceil(s/4)*Math.ceil(e/4)*16;case tu:case sl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rl:case ol:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jg(s){switch(s){case Mi:case Yh:return{byteLength:1,components:1};case gr:case Kh:case _i:return{byteLength:2,components:1};case yl:case Sl:return{byteLength:2,components:4};case es:case Ml:case Kn:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Zg(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,C){return f?new OffscreenCanvas(D,C):vr("canvas")}function _(D,C,j){let oe=1;const ce=Re(D);if((ce.width>j||ce.height>j)&&(oe=j/Math.max(ce.width,ce.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ae=Math.floor(oe*ce.width),Ue=Math.floor(oe*ce.height);u===void 0&&(u=g(ae,Ue));const Ce=C?g(ae,Ue):u;return Ce.width=ae,Ce.height=Ue,Ce.getContext("2d").drawImage(D,0,0,ae,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ae+"x"+Ue+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){s.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(D,C,j,oe,ce=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ae=C;if(C===s.RED&&(j===s.FLOAT&&(ae=s.R32F),j===s.HALF_FLOAT&&(ae=s.R16F),j===s.UNSIGNED_BYTE&&(ae=s.R8)),C===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.R8UI),j===s.UNSIGNED_SHORT&&(ae=s.R16UI),j===s.UNSIGNED_INT&&(ae=s.R32UI),j===s.BYTE&&(ae=s.R8I),j===s.SHORT&&(ae=s.R16I),j===s.INT&&(ae=s.R32I)),C===s.RG&&(j===s.FLOAT&&(ae=s.RG32F),j===s.HALF_FLOAT&&(ae=s.RG16F),j===s.UNSIGNED_BYTE&&(ae=s.RG8)),C===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RG8UI),j===s.UNSIGNED_SHORT&&(ae=s.RG16UI),j===s.UNSIGNED_INT&&(ae=s.RG32UI),j===s.BYTE&&(ae=s.RG8I),j===s.SHORT&&(ae=s.RG16I),j===s.INT&&(ae=s.RG32I)),C===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),j===s.UNSIGNED_INT&&(ae=s.RGB32UI),j===s.BYTE&&(ae=s.RGB8I),j===s.SHORT&&(ae=s.RGB16I),j===s.INT&&(ae=s.RGB32I)),C===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),j===s.UNSIGNED_INT&&(ae=s.RGBA32UI),j===s.BYTE&&(ae=s.RGBA8I),j===s.SHORT&&(ae=s.RGBA16I),j===s.INT&&(ae=s.RGBA32I)),C===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),C===s.RGBA){const Ue=ce?Ao:Lt.getTransfer(oe);j===s.FLOAT&&(ae=s.RGBA32F),j===s.HALF_FLOAT&&(ae=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ae=Ue===Wt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(D,C){let j;return D?C===null||C===es||C===Us?j=s.DEPTH24_STENCIL8:C===Kn?j=s.DEPTH32F_STENCIL8:C===gr&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===es||C===Us?j=s.DEPTH_COMPONENT24:C===Kn?j=s.DEPTH_COMPONENT32F:C===gr&&(j=s.DEPTH_COMPONENT16),j}function R(D,C){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==Nn?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function E(D){const C=D.target;C.removeEventListener("dispose",E),M(C),C.isVideoTexture&&h.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),b(C)}function M(D){const C=n.get(D);if(C.__webglInit===void 0)return;const j=D.source,oe=d.get(j);if(oe){const ce=oe[C.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&v(D),Object.keys(oe).length===0&&d.delete(j)}n.remove(D)}function v(D){const C=n.get(D);s.deleteTexture(C.__webglTexture);const j=D.source,oe=d.get(j);delete oe[C.__cacheKey],o.memory.textures--}function b(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(C.__webglFramebuffer[oe]))for(let ce=0;ce<C.__webglFramebuffer[oe].length;ce++)s.deleteFramebuffer(C.__webglFramebuffer[oe][ce]);else s.deleteFramebuffer(C.__webglFramebuffer[oe]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[oe])}else{if(Array.isArray(C.__webglFramebuffer))for(let oe=0;oe<C.__webglFramebuffer.length;oe++)s.deleteFramebuffer(C.__webglFramebuffer[oe]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let oe=0;oe<C.__webglColorRenderbuffer.length;oe++)C.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[oe]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const j=D.textures;for(let oe=0,ce=j.length;oe<ce;oe++){const ae=n.get(j[oe]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(j[oe])}n.remove(D)}let A=0;function F(){A=0}function I(){const D=A;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),A+=1,D}function k(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function G(D,C){const j=n.get(D);if(D.isVideoTexture&&Ee(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const oe=D.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(j,D,C);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+C)}function O(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){U(j,D,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+C)}function L(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){U(j,D,C);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+C)}function N(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){V(j,D,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+C)}const Y={[Oi]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[Mo]:s.MIRRORED_REPEAT},Q={[Tn]:s.NEAREST,[qh]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[uo]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},se={[Ad]:s.NEVER,[Ld]:s.ALWAYS,[Td]:s.LESS,[su]:s.LEQUAL,[Cd]:s.EQUAL,[Id]:s.GEQUAL,[Rd]:s.GREATER,[Pd]:s.NOTEQUAL};function he(D,C){if(C.type===Kn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Nn||C.magFilter===uo||C.magFilter===lr||C.magFilter===pi||C.minFilter===Nn||C.minFilter===uo||C.minFilter===lr||C.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Y[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Y[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Y[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Q[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Q[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,se[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Tn||C.minFilter!==lr&&C.minFilter!==pi||C.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function we(D,C){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",E));const oe=C.source;let ce=d.get(oe);ce===void 0&&(ce={},d.set(oe,ce));const ae=k(C);if(ae!==D.__cacheKey){ce[ae]===void 0&&(ce[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ce[ae].usedTimes++;const Ue=ce[D.__cacheKey];Ue!==void 0&&(ce[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&v(C)),D.__cacheKey=ae,D.__webglTexture=ce[ae].texture}return j}function U(D,C,j){let oe=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(oe=s.TEXTURE_3D);const ce=we(D,C),ae=C.source;t.bindTexture(oe,D.__webglTexture,s.TEXTURE0+j);const Ue=n.get(ae);if(ae.version!==Ue.__version||ce===!0){t.activeTexture(s.TEXTURE0+j);const Ce=Lt.getPrimaries(Lt.workingColorSpace),Ne=C.colorSpace===Di?null:Lt.getPrimaries(C.colorSpace),ft=C.colorSpace===Di||Ce===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let pe=_(C.image,!1,i.maxTextureSize);pe=ot(C,pe);const Ie=r.convert(C.format,C.colorSpace),Qe=r.convert(C.type);let it=S(C.internalFormat,Ie,Qe,C.colorSpace,C.isVideoTexture);he(oe,C);let Ge;const vt=C.mipmaps,ct=C.isVideoTexture!==!0,At=Ue.__version===void 0||ce===!0,X=ae.dataReady,Ae=R(C,pe);if(C.isDepthTexture)it=x(C.format===Fs,C.type),At&&(ct?t.texStorage2D(s.TEXTURE_2D,1,it,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,it,pe.width,pe.height,0,Ie,Qe,null));else if(C.isDataTexture)if(vt.length>0){ct&&At&&t.texStorage2D(s.TEXTURE_2D,Ae,it,vt[0].width,vt[0].height);for(let Z=0,le=vt.length;Z<le;Z++)Ge=vt[Z],ct?X&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ge.width,Ge.height,Ie,Qe,Ge.data):t.texImage2D(s.TEXTURE_2D,Z,it,Ge.width,Ge.height,0,Ie,Qe,Ge.data);C.generateMipmaps=!1}else ct?(At&&t.texStorage2D(s.TEXTURE_2D,Ae,it,pe.width,pe.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,Ie,Qe,pe.data)):t.texImage2D(s.TEXTURE_2D,0,it,pe.width,pe.height,0,Ie,Qe,pe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ct&&At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,it,vt[0].width,vt[0].height,pe.depth);for(let Z=0,le=vt.length;Z<le;Z++)if(Ge=vt[Z],C.format!==kn)if(Ie!==null)if(ct){if(X)if(C.layerUpdates.size>0){const Le=qc(Ge.width,Ge.height,C.format,C.type);for(const De of C.layerUpdates){const st=Ge.data.subarray(De*Le/Ge.data.BYTES_PER_ELEMENT,(De+1)*Le/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,De,Ge.width,Ge.height,1,Ie,st)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Ge.width,Ge.height,pe.depth,Ie,Ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,it,Ge.width,Ge.height,pe.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Ge.width,Ge.height,pe.depth,Ie,Qe,Ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,it,Ge.width,Ge.height,pe.depth,0,Ie,Qe,Ge.data)}else{ct&&At&&t.texStorage2D(s.TEXTURE_2D,Ae,it,vt[0].width,vt[0].height);for(let Z=0,le=vt.length;Z<le;Z++)Ge=vt[Z],C.format!==kn?Ie!==null?ct?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Ge.width,Ge.height,Ie,Ge.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,it,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?X&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ge.width,Ge.height,Ie,Qe,Ge.data):t.texImage2D(s.TEXTURE_2D,Z,it,Ge.width,Ge.height,0,Ie,Qe,Ge.data)}else if(C.isDataArrayTexture)if(ct){if(At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,it,pe.width,pe.height,pe.depth),X)if(C.layerUpdates.size>0){const Z=qc(pe.width,pe.height,C.format,C.type);for(const le of C.layerUpdates){const Le=pe.data.subarray(le*Z/pe.data.BYTES_PER_ELEMENT,(le+1)*Z/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,pe.width,pe.height,1,Ie,Qe,Le)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ie,Qe,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,it,pe.width,pe.height,pe.depth,0,Ie,Qe,pe.data);else if(C.isData3DTexture)ct?(At&&t.texStorage3D(s.TEXTURE_3D,Ae,it,pe.width,pe.height,pe.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ie,Qe,pe.data)):t.texImage3D(s.TEXTURE_3D,0,it,pe.width,pe.height,pe.depth,0,Ie,Qe,pe.data);else if(C.isFramebufferTexture){if(At)if(ct)t.texStorage2D(s.TEXTURE_2D,Ae,it,pe.width,pe.height);else{let Z=pe.width,le=pe.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(s.TEXTURE_2D,Le,it,Z,le,0,Ie,Qe,null),Z>>=1,le>>=1}}else if(vt.length>0){if(ct&&At){const Z=Re(vt[0]);t.texStorage2D(s.TEXTURE_2D,Ae,it,Z.width,Z.height)}for(let Z=0,le=vt.length;Z<le;Z++)Ge=vt[Z],ct?X&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ie,Qe,Ge):t.texImage2D(s.TEXTURE_2D,Z,it,Ie,Qe,Ge);C.generateMipmaps=!1}else if(ct){if(At){const Z=Re(pe);t.texStorage2D(s.TEXTURE_2D,Ae,it,Z.width,Z.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Qe,pe)}else t.texImage2D(s.TEXTURE_2D,0,it,Ie,Qe,pe);m(C)&&p(oe),Ue.__version=ae.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function V(D,C,j){if(C.image.length!==6)return;const oe=we(D,C),ce=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+j);const ae=n.get(ce);if(ce.version!==ae.__version||oe===!0){t.activeTexture(s.TEXTURE0+j);const Ue=Lt.getPrimaries(Lt.workingColorSpace),Ce=C.colorSpace===Di?null:Lt.getPrimaries(C.colorSpace),Ne=C.colorSpace===Di||Ue===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ft=C.isCompressedTexture||C.image[0].isCompressedTexture,pe=C.image[0]&&C.image[0].isDataTexture,Ie=[];for(let le=0;le<6;le++)!ft&&!pe?Ie[le]=_(C.image[le],!0,i.maxCubemapSize):Ie[le]=pe?C.image[le].image:C.image[le],Ie[le]=ot(C,Ie[le]);const Qe=Ie[0],it=r.convert(C.format,C.colorSpace),Ge=r.convert(C.type),vt=S(C.internalFormat,it,Ge,C.colorSpace),ct=C.isVideoTexture!==!0,At=ae.__version===void 0||oe===!0,X=ce.dataReady;let Ae=R(C,Qe);he(s.TEXTURE_CUBE_MAP,C);let Z;if(ft){ct&&At&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,vt,Qe.width,Qe.height);for(let le=0;le<6;le++){Z=Ie[le].mipmaps;for(let Le=0;Le<Z.length;Le++){const De=Z[Le];C.format!==kn?it!==null?ct?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,0,0,De.width,De.height,it,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,vt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,0,0,De.width,De.height,it,Ge,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,vt,De.width,De.height,0,it,Ge,De.data)}}}else{if(Z=C.mipmaps,ct&&At){Z.length>0&&Ae++;const le=Re(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,vt,le.width,le.height)}for(let le=0;le<6;le++)if(pe){ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie[le].width,Ie[le].height,it,Ge,Ie[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,vt,Ie[le].width,Ie[le].height,0,it,Ge,Ie[le].data);for(let Le=0;Le<Z.length;Le++){const st=Z[Le].image[le].image;ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,0,0,st.width,st.height,it,Ge,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,vt,st.width,st.height,0,it,Ge,st.data)}}else{ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,it,Ge,Ie[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,vt,it,Ge,Ie[le]);for(let Le=0;Le<Z.length;Le++){const De=Z[Le];ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,0,0,it,Ge,De.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,vt,it,Ge,De.image[le])}}}m(C)&&p(s.TEXTURE_CUBE_MAP),ae.__version=ce.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function J(D,C,j,oe,ce,ae){const Ue=r.convert(j.format,j.colorSpace),Ce=r.convert(j.type),Ne=S(j.internalFormat,Ue,Ce,j.colorSpace),ft=n.get(C),pe=n.get(j);if(pe.__renderTarget=C,!ft.__hasExternalTextures){const Ie=Math.max(1,C.width>>ae),Qe=Math.max(1,C.height>>ae);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,ae,Ne,Ie,Qe,C.depth,0,Ue,Ce,null):t.texImage2D(ce,ae,Ne,Ie,Qe,0,Ue,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Je(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ce,pe.__webglTexture,0,We(C)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ce,pe.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(D,C,j){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const oe=C.depthTexture,ce=oe&&oe.isDepthTexture?oe.type:null,ae=x(C.stencilBuffer,ce),Ue=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=We(C);Je(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,ae,C.width,C.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ae,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,ae,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,D)}else{const oe=C.textures;for(let ce=0;ce<oe.length;ce++){const ae=oe[ce],Ue=r.convert(ae.format,ae.colorSpace),Ce=r.convert(ae.type),Ne=S(ae.internalFormat,Ue,Ce,ae.colorSpace),ft=We(C);j&&Je(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ne,C.width,C.height):Je(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ne,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(C.depthTexture);oe.__renderTarget=C,(!oe.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),G(C.depthTexture,0);const ce=oe.__webglTexture,ae=We(C);if(C.depthTexture.format===Cs)Je(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(C.depthTexture.format===Fs)Je(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function fe(D){const C=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const oe=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),oe){const ce=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,oe.removeEventListener("dispose",ce)};oe.addEventListener("dispose",ce),C.__depthDisposeCallback=ce}C.__boundDepthTexture=oe}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");de(C.__webglFramebuffer,D)}else if(j){C.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[oe]),C.__webglDepthbuffer[oe]===void 0)C.__webglDepthbuffer[oe]=s.createRenderbuffer(),ie(C.__webglDepthbuffer[oe],D,!1);else{const ce=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=C.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ie(C.__webglDepthbuffer,D,!1);else{const oe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(D,C,j){const oe=n.get(D);C!==void 0&&J(oe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&fe(D)}function Te(D){const C=D.texture,j=n.get(D),oe=n.get(C);D.addEventListener("dispose",T);const ce=D.textures,ae=D.isWebGLCubeRenderTarget===!0,Ue=ce.length>1;if(Ue||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=C.version,o.memory.textures++),ae){j.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)j.__webglFramebuffer[Ce][Ne]=s.createFramebuffer()}else j.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ce=0;Ce<C.mipmaps.length;Ce++)j.__webglFramebuffer[Ce]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let Ce=0,Ne=ce.length;Ce<Ne;Ce++){const ft=n.get(ce[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&Je(D)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ce.length;Ce++){const Ne=ce[Ce];j.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Ce]);const ft=r.convert(Ne.format,Ne.colorSpace),pe=r.convert(Ne.type),Ie=S(Ne.internalFormat,ft,pe,Ne.colorSpace,D.isXRRenderTarget===!0),Qe=We(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Ie,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,j.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),he(s.TEXTURE_CUBE_MAP,C);for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ne=0;Ne<C.mipmaps.length;Ne++)J(j.__webglFramebuffer[Ce][Ne],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else J(j.__webglFramebuffer[Ce],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);m(C)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Ce=0,Ne=ce.length;Ce<Ne;Ce++){const ft=ce[Ce],pe=n.get(ft);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),he(s.TEXTURE_2D,ft),J(j.__webglFramebuffer,D,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),m(ft)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,oe.__webglTexture),he(Ce,C),C.mipmaps&&C.mipmaps.length>0)for(let Ne=0;Ne<C.mipmaps.length;Ne++)J(j.__webglFramebuffer[Ne],D,C,s.COLOR_ATTACHMENT0,Ce,Ne);else J(j.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,Ce,0);m(C)&&p(Ce),t.unbindTexture()}D.depthBuffer&&fe(D)}function ye(D){const C=D.textures;for(let j=0,oe=C.length;j<oe;j++){const ce=C[j];if(m(ce)){const ae=y(D),Ue=n.get(ce).__webglTexture;t.bindTexture(ae,Ue),p(ae),t.unbindTexture()}}}const Se=[],H=[];function tt(D){if(D.samples>0){if(Je(D)===!1){const C=D.textures,j=D.width,oe=D.height;let ce=s.COLOR_BUFFER_BIT;const ae=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=n.get(D),Ce=C.length>1;if(Ce)for(let Ne=0;Ne<C.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ne=0;Ne<C.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const ft=n.get(C[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,j,oe,0,0,j,oe,ce,s.NEAREST),l===!0&&(Se.length=0,H.length=0,Se.push(s.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Se.push(ae),H.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<C.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const ft=n.get(C[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function We(D){return Math.min(i.maxSamples,D.samples)}function Je(D){const C=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ee(D){const C=o.render.frame;h.get(D)!==C&&(h.set(D,C),D.update())}function ot(D,C){const j=D.colorSpace,oe=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Sn&&j!==Di&&(Lt.getTransfer(j)===Wt?(oe!==kn||ce!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),C}function Re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=L,this.setTextureCube=N,this.rebindTextures=xe,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Je}function $g(s,e){function t(n,i=Di){let r;const o=Lt.getTransfer(i);if(n===Mi)return s.UNSIGNED_BYTE;if(n===yl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return s.BYTE;if(n===Kh)return s.SHORT;if(n===gr)return s.UNSIGNED_SHORT;if(n===Ml)return s.INT;if(n===es)return s.UNSIGNED_INT;if(n===Kn)return s.FLOAT;if(n===_i)return s.HALF_FLOAT;if(n===Zh)return s.ALPHA;if(n===$h)return s.RGB;if(n===kn)return s.RGBA;if(n===Qh)return s.LUMINANCE;if(n===Jh)return s.LUMINANCE_ALPHA;if(n===Cs)return s.DEPTH_COMPONENT;if(n===Fs)return s.DEPTH_STENCIL;if(n===bl)return s.RED;if(n===wl)return s.RED_INTEGER;if(n===eu)return s.RG;if(n===El)return s.RG_INTEGER;if(n===Al)return s.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===Wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===ka)return o===Wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===ja||n===Za||n===$a||n===Qa||n===Ja||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===nl||n===il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===Wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===sl||n===rl||n===ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Qg extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jg={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
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

}`;class n_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new cn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new on({vertexShader:e_,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i_ extends Ws{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new n_,m=t.getContextAttributes();let p=null,y=null;const S=[],x=[],R=new ke;let E=null;const T=new En;T.viewport=new Vt;const M=new En;M.viewport=new Vt;const v=[T,M],b=new Qg;let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let V=S[U];return V===void 0&&(V=new oa,S[U]=V),V.getTargetRaySpace()},this.getControllerGrip=function(U){let V=S[U];return V===void 0&&(V=new oa,S[U]=V),V.getGripSpace()},this.getHand=function(U){let V=S[U];return V===void 0&&(V=new oa,S[U]=V),V.getHandSpace()};function I(U){const V=x.indexOf(U.inputSource);if(V===-1)return;const J=S[V];J!==void 0&&(J.update(U.inputSource,U.frame,c||o),J.dispatchEvent({type:U.type,data:U.inputSource}))}function k(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",G);for(let U=0;U<S.length;U++){const V=x[U];V!==null&&(x[U]=null,S[U].disconnect(V))}A=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",k),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Zn(f.framebufferWidth,f.framebufferHeight,{format:kn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,J=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=m.stencil?Fs:Cs,J=m.stencil?Us:es);const de={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Zn(d.textureWidth,d.textureHeight,{format:kn,type:Mi,depthTexture:new gu(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(U){for(let V=0;V<U.removed.length;V++){const J=U.removed[V],ie=x.indexOf(J);ie>=0&&(x[ie]=null,S[ie].disconnect(J))}for(let V=0;V<U.added.length;V++){const J=U.added[V];let ie=x.indexOf(J);if(ie===-1){for(let fe=0;fe<S.length;fe++)if(fe>=x.length){x.push(J),ie=fe;break}else if(x[fe]===null){x[fe]=J,ie=fe;break}if(ie===-1)break}const de=S[ie];de&&de.connect(J)}}const O=new w,L=new w;function N(U,V,J){O.setFromMatrixPosition(V.matrixWorld),L.setFromMatrixPosition(J.matrixWorld);const ie=O.distanceTo(L),de=V.projectionMatrix.elements,fe=J.projectionMatrix.elements,xe=de[14]/(de[10]-1),Te=de[14]/(de[10]+1),ye=(de[9]+1)/de[5],Se=(de[9]-1)/de[5],H=(de[8]-1)/de[0],tt=(fe[8]+1)/fe[0],We=xe*H,Je=xe*tt,Ee=ie/(-H+tt),ot=Ee*-H;if(V.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ot),U.translateZ(Ee),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),de[10]===-1)U.projectionMatrix.copy(V.projectionMatrix),U.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Re=xe+Ee,D=Te+Ee,C=We-ot,j=Je+(ie-ot),oe=ye*Te/D*Re,ce=Se*Te/D*Re;U.projectionMatrix.makePerspective(C,j,oe,ce,Re,D),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function Y(U,V){V===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(V.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;let V=U.near,J=U.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(J=_.depthFar)),b.near=M.near=T.near=V,b.far=M.far=T.far=J,(A!==b.near||F!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,F=b.far),T.layers.mask=U.layers.mask|2,M.layers.mask=U.layers.mask|4,b.layers.mask=T.layers.mask|M.layers.mask;const ie=U.parent,de=b.cameras;Y(b,ie);for(let fe=0;fe<de.length;fe++)Y(de[fe],ie);de.length===2?N(b,T,M):b.projectionMatrix.copy(T.projectionMatrix),Q(U,b,ie)};function Q(U,V,J){J===null?U.matrix.copy(V.matrixWorld):(U.matrix.copy(J.matrixWorld),U.matrix.invert(),U.matrix.multiply(V.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(V.projectionMatrix),U.projectionMatrixInverse.copy(V.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Os*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let se=null;function he(U,V){if(h=V.getViewerPose(c||o),g=V,h!==null){const J=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ie=!1;J.length!==b.cameras.length&&(b.cameras.length=0,ie=!0);for(let fe=0;fe<J.length;fe++){const xe=J[fe];let Te=null;if(f!==null)Te=f.getViewport(xe);else{const Se=u.getViewSubImage(d,xe);Te=Se.viewport,fe===0&&(e.setRenderTargetTextures(y,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(y))}let ye=v[fe];ye===void 0&&(ye=new En,ye.layers.enable(fe),ye.viewport=new Vt,v[fe]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Te.x,Te.y,Te.width,Te.height),fe===0&&(b.matrix.copy(ye.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ie===!0&&b.cameras.push(ye)}const de=i.enabledFeatures;if(de&&de.includes("depth-sensing")){const fe=u.getDepthInformation(J[0]);fe&&fe.isValid&&fe.texture&&_.init(e,fe,i.renderState)}}for(let J=0;J<S.length;J++){const ie=x[J],de=S[J];ie!==null&&de!==void 0&&de.update(ie,V,c||o)}se&&se(U,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const we=new mu;we.setAnimationLoop(he),this.setAnimationLoop=function(U){se=U},this.dispose=function(){}}}const qi=new Gn,s_=new lt;function r_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,du(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,qi.copy(x),qi.x*=-1,qi.y*=-1,qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(qi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function c(y,S){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(y,R);const E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const S=u();y.__bindingPointIndex=S;const x=s.createBuffer(),R=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=i[y.id],x=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,T=x.length;E<T;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,b=M.length;v<b;v++){const A=M[v];if(f(A,E,v,R)===!0){const F=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let k=0;for(let G=0;G<I.length;G++){const O=I[G],L=_(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,F+k,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,k),k+=L.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,x,R){const E=y.value,T=S+"_"+x;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const M=R[T];if(typeof E=="number"||typeof E=="boolean"){if(M!==E)return R[T]=E,!0}else if(M.equals(E)===!1)return M.copy(E),!0}return!1}function g(y){const S=y.uniforms;let x=0;const R=16;for(let T=0,M=S.length;T<M;T++){const v=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,A=v.length;b<A;b++){const F=v[b],I=Array.isArray(F.value)?F.value:[F.value];for(let k=0,G=I.length;k<G;k++){const O=I[k],L=_(O),N=x%R,Y=N%L.boundary,Q=N+Y;x+=Y,Q!==0&&R-Q<L.storage&&(x+=R-Q),F.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=L.storage}}}const E=x%R;return E>0&&(x+=R-E),y.__size=x,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class a_{constructor(e={}){const{canvas:t=jd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=Fi,this.toneMappingExposure=1;const x=this;let R=!1,E=0,T=0,M=null,v=-1,b=null;const A=new Vt,F=new Vt;let I=null;const k=new re(0);let G=0,O=t.width,L=t.height,N=1,Y=null,Q=null;const se=new Vt(0,0,O,L),he=new Vt(0,0,O,L);let we=!1;const U=new Cl;let V=!1,J=!1;const ie=new lt,de=new lt,fe=new w,xe=new Vt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Se(){return M===null?N:1}let H=n;function tt(P,W){return t.getContext(P,W)}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const W="webgl2";if(H=tt(W,P),H===null)throw tt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let We,Je,Ee,ot,Re,D,C,j,oe,ce,ae,Ue,Ce,Ne,ft,pe,Ie,Qe,it,Ge,vt,ct,At,X;function Ae(){We=new dm(H),We.init(),ct=new $g(H,We),Je=new om(H,We,e,ct),Ee=new Kg(H,We),Je.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),ot=new mm(H),Re=new Dg,D=new Zg(H,We,Ee,Re,Je,ct,ot),C=new lm(x),j=new um(x),oe=new Sf(H),At=new sm(H,oe),ce=new fm(H,oe,ot,At),ae=new _m(H,ce,oe,ot),it=new gm(H,Je,D),pe=new am(Re),Ue=new Lg(x,C,j,We,Je,At,pe),Ce=new r_(x,Re),Ne=new Ug,ft=new Gg(We),Qe=new im(x,C,j,Ee,ae,f,l),Ie=new qg(x,ae,Je),X=new o_(H,ot,Je,Ee),Ge=new rm(H,We,ot),vt=new pm(H,We,ot),ot.programs=Ue.programs,x.capabilities=Je,x.extensions=We,x.properties=Re,x.renderLists=Ne,x.shadowMap=Ie,x.state=Ee,x.info=ot}Ae();const Z=new i_(x,H);this.xr=Z,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=We.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=We.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(P){P!==void 0&&(N=P,this.setSize(O,L,!1))},this.getSize=function(P){return P.set(O,L)},this.setSize=function(P,W,te=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,L=W,t.width=Math.floor(P*N),t.height=Math.floor(W*N),te===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(O*N,L*N).floor()},this.setDrawingBufferSize=function(P,W,te){O=P,L=W,N=te,t.width=Math.floor(P*te),t.height=Math.floor(W*te),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(se)},this.setViewport=function(P,W,te,ee){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,W,te,ee),Ee.viewport(A.copy(se).multiplyScalar(N).round())},this.getScissor=function(P){return P.copy(he)},this.setScissor=function(P,W,te,ee){P.isVector4?he.set(P.x,P.y,P.z,P.w):he.set(P,W,te,ee),Ee.scissor(F.copy(he).multiplyScalar(N).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(P){Ee.setScissorTest(we=P)},this.setOpaqueSort=function(P){Y=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(P=!0,W=!0,te=!0){let ee=0;if(P){let K=!1;if(M!==null){const Me=M.texture.format;K=Me===Al||Me===El||Me===wl}if(K){const Me=M.texture.type,Be=Me===Mi||Me===es||Me===gr||Me===Us||Me===yl||Me===Sl,je=Qe.getClearColor(),Xe=Qe.getClearAlpha(),xt=je.r,z=je.g,me=je.b;Be?(g[0]=xt,g[1]=z,g[2]=me,g[3]=Xe,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=xt,_[1]=z,_[2]=me,_[3]=Xe,H.clearBufferiv(H.COLOR,0,_))}else ee|=H.COLOR_BUFFER_BIT}W&&(ee|=H.DEPTH_BUFFER_BIT),te&&(ee|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ne.dispose(),ft.dispose(),Re.dispose(),C.dispose(),j.dispose(),ae.dispose(),At.dispose(),X.dispose(),Ue.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",at),Z.removeEventListener("sessionend",nt),Ye.stop()};function le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=ot.autoReset,W=Ie.enabled,te=Ie.autoUpdate,ee=Ie.needsUpdate,K=Ie.type;Ae(),ot.autoReset=P,Ie.enabled=W,Ie.autoUpdate=te,Ie.needsUpdate=ee,Ie.type=K}function De(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function st(P){const W=P.target;W.removeEventListener("dispose",st),pt(W)}function pt(P){Pt(P),Re.remove(P)}function Pt(P){const W=Re.get(P).programs;W!==void 0&&(W.forEach(function(te){Ue.releaseProgram(te)}),P.isShaderMaterial&&Ue.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,te,ee,K,Me){W===null&&(W=Te);const Be=K.isMesh&&K.matrixWorld.determinant()<0,je=Mt(P,W,te,ee,K);Ee.setMaterial(ee,Be);let Xe=te.index,xt=1;if(ee.wireframe===!0){if(Xe=ce.getWireframeAttribute(te),Xe===void 0)return;xt=2}const z=te.drawRange,me=te.attributes.position;let Ke=z.start*xt,rt=(z.start+z.count)*xt;Me!==null&&(Ke=Math.max(Ke,Me.start*xt),rt=Math.min(rt,(Me.start+Me.count)*xt)),Xe!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,Xe.count)):me!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,me.count));const He=rt-Ke;if(He<0||He===1/0)return;At.setup(K,ee,je,te,Xe);let ue,ge=Ge;if(Xe!==null&&(ue=oe.get(Xe),ge=vt,ge.setIndex(ue)),K.isMesh)ee.wireframe===!0?(Ee.setLineWidth(ee.wireframeLinewidth*Se()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(K.isLine){let be=ee.linewidth;be===void 0&&(be=1),Ee.setLineWidth(be*Se()),K.isLineSegments?ge.setMode(H.LINES):K.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else K.isPoints?ge.setMode(H.POINTS):K.isSprite&&ge.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ge.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const be=K._multiDrawStarts,$e=K._multiDrawCounts,Ze=K._multiDrawCount,_e=Xe?oe.get(Xe).bytesPerElement:1,ne=Re.get(ee).currentProgram.getUniforms();for(let Ve=0;Ve<Ze;Ve++)ne.setValue(H,"_gl_DrawID",Ve),ge.render(be[Ve]/_e,$e[Ve])}else if(K.isInstancedMesh)ge.renderInstances(Ke,He,K.count);else if(te.isInstancedBufferGeometry){const be=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,$e=Math.min(te.instanceCount,be);ge.renderInstances(Ke,He,$e)}else ge.render(Ke,He)};function $(P,W,te){P.transparent===!0&&P.side===Zt&&P.forceSinglePass===!1?(P.side=yn,P.needsUpdate=!0,wt(P,W,te),P.side=ni,P.needsUpdate=!0,wt(P,W,te),P.side=Zt):wt(P,W,te)}this.compile=function(P,W,te=null){te===null&&(te=P),p=ft.get(te),p.init(W),S.push(p),te.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),P!==te&&P.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();const ee=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Me=K.material;if(Me)if(Array.isArray(Me))for(let Be=0;Be<Me.length;Be++){const je=Me[Be];$(je,te,K),ee.add(je)}else $(Me,te,K),ee.add(Me)}),S.pop(),p=null,ee},this.compileAsync=function(P,W,te=null){const ee=this.compile(P,W,te);return new Promise(K=>{function Me(){if(ee.forEach(function(Be){Re.get(Be).currentProgram.isReady()&&ee.delete(Be)}),ee.size===0){K(P);return}setTimeout(Me,10)}We.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Pe=null;function Fe(P){Pe&&Pe(P)}function at(){Ye.stop()}function nt(){Ye.start()}const Ye=new mu;Ye.setAnimationLoop(Fe),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(P){Pe=P,Z.setAnimationLoop(P),P===null?Ye.stop():Ye.start()},Z.addEventListener("sessionstart",at),Z.addEventListener("sessionend",nt),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(W),W=Z.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,W,M),p=ft.get(P,S.length),p.init(W),S.push(p),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),U.setFromProjectionMatrix(de),J=this.localClippingEnabled,V=pe.init(this.clippingPlanes,J),m=Ne.get(P,y.length),m.init(),y.push(m),Z.enabled===!0&&Z.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&ut(Me,W,-1/0,x.sortObjects)}ut(P,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,Q),ye=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ye&&Qe.addToRenderList(m,P),this.info.render.frame++,V===!0&&pe.beginShadows();const te=p.state.shadowsArray;Ie.render(te,P,W),V===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,K=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Me=W.cameras;if(K.length>0)for(let Be=0,je=Me.length;Be<je;Be++){const Xe=Me[Be];tn(ee,K,P,Xe)}ye&&Qe.render(P);for(let Be=0,je=Me.length;Be<je;Be++){const Xe=Me[Be];Ct(m,P,Xe,Xe.viewport)}}else K.length>0&&tn(ee,K,P,W),ye&&Qe.render(P),Ct(m,P,W);M!==null&&(D.updateMultisampleRenderTarget(M),D.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(x,P,W),At.resetDefaultState(),v=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],V===!0&&pe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ut(P,W,te,ee){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||U.intersectsSprite(P)){ee&&xe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(de);const Be=ae.update(P),je=P.material;je.visible&&m.push(P,Be,je,te,xe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||U.intersectsObject(P))){const Be=ae.update(P),je=P.material;if(ee&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xe.copy(P.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),xe.copy(Be.boundingSphere.center)),xe.applyMatrix4(P.matrixWorld).applyMatrix4(de)),Array.isArray(je)){const Xe=Be.groups;for(let xt=0,z=Xe.length;xt<z;xt++){const me=Xe[xt],Ke=je[me.materialIndex];Ke&&Ke.visible&&m.push(P,Be,Ke,te,xe.z,me)}}else je.visible&&m.push(P,Be,je,te,xe.z,null)}}const Me=P.children;for(let Be=0,je=Me.length;Be<je;Be++)ut(Me[Be],W,te,ee)}function Ct(P,W,te,ee){const K=P.opaque,Me=P.transmissive,Be=P.transparent;p.setupLightsView(te),V===!0&&pe.setGlobalState(x.clippingPlanes,te),ee&&Ee.viewport(A.copy(ee)),K.length>0&&$t(K,W,te),Me.length>0&&$t(Me,W,te),Be.length>0&&$t(Be,W,te),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function tn(P,W,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Zn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?_i:Mi,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[ee.id],Be=ee.viewport||A;Me.setSize(Be.z,Be.w);const je=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(k),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),ye&&Qe.render(te);const Xe=x.toneMapping;x.toneMapping=Fi;const xt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),V===!0&&pe.setGlobalState(x.clippingPlanes,ee),$t(P,te,ee),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),We.has("WEBGL_multisampled_render_to_texture")===!1){let z=!1;for(let me=0,Ke=W.length;me<Ke;me++){const rt=W[me],He=rt.object,ue=rt.geometry,ge=rt.material,be=rt.group;if(ge.side===Zt&&He.layers.test(ee.layers)){const $e=ge.side;ge.side=yn,ge.needsUpdate=!0,sn(He,te,ee,ue,ge,be),ge.side=$e,ge.needsUpdate=!0,z=!0}}z===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}x.setRenderTarget(je),x.setClearColor(k,G),xt!==void 0&&(ee.viewport=xt),x.toneMapping=Xe}function $t(P,W,te){const ee=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Me=P.length;K<Me;K++){const Be=P[K],je=Be.object,Xe=Be.geometry,xt=ee===null?Be.material:ee,z=Be.group;je.layers.test(te.layers)&&sn(je,W,te,Xe,xt,z)}}function sn(P,W,te,ee,K,Me){P.onBeforeRender(x,W,te,ee,K,Me),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(x,W,te,ee,P,Me),K.transparent===!0&&K.side===Zt&&K.forceSinglePass===!1?(K.side=yn,K.needsUpdate=!0,x.renderBufferDirect(te,W,ee,K,P,Me),K.side=ni,K.needsUpdate=!0,x.renderBufferDirect(te,W,ee,K,P,Me),K.side=Zt):x.renderBufferDirect(te,W,ee,K,P,Me),P.onAfterRender(x,W,te,ee,K,Me)}function wt(P,W,te){W.isScene!==!0&&(W=Te);const ee=Re.get(P),K=p.state.lights,Me=p.state.shadowsArray,Be=K.state.version,je=Ue.getParameters(P,K.state,Me,W,te),Xe=Ue.getProgramCacheKey(je);let xt=ee.programs;ee.environment=P.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(P.isMeshStandardMaterial?j:C).get(P.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,xt===void 0&&(P.addEventListener("dispose",st),xt=new Map,ee.programs=xt);let z=xt.get(Xe);if(z!==void 0){if(ee.currentProgram===z&&ee.lightsStateVersion===Be)return bt(P,je),z}else je.uniforms=Ue.getUniforms(P),P.onBeforeCompile(je,x),z=Ue.acquireProgram(je,Xe),xt.set(Xe,z),ee.uniforms=je.uniforms;const me=ee.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(me.clippingPlanes=pe.uniform),bt(P,je),ee.needsLights=yt(P),ee.lightsStateVersion=Be,ee.needsLights&&(me.ambientLightColor.value=K.state.ambient,me.lightProbe.value=K.state.probe,me.directionalLights.value=K.state.directional,me.directionalLightShadows.value=K.state.directionalShadow,me.spotLights.value=K.state.spot,me.spotLightShadows.value=K.state.spotShadow,me.rectAreaLights.value=K.state.rectArea,me.ltc_1.value=K.state.rectAreaLTC1,me.ltc_2.value=K.state.rectAreaLTC2,me.pointLights.value=K.state.point,me.pointLightShadows.value=K.state.pointShadow,me.hemisphereLights.value=K.state.hemi,me.directionalShadowMap.value=K.state.directionalShadowMap,me.directionalShadowMatrix.value=K.state.directionalShadowMatrix,me.spotShadowMap.value=K.state.spotShadowMap,me.spotLightMatrix.value=K.state.spotLightMatrix,me.spotLightMap.value=K.state.spotLightMap,me.pointShadowMap.value=K.state.pointShadowMap,me.pointShadowMatrix.value=K.state.pointShadowMatrix),ee.currentProgram=z,ee.uniformsList=null,z}function jt(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=xo.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function bt(P,W){const te=Re.get(P);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function Mt(P,W,te,ee,K){W.isScene!==!0&&(W=Te),D.resetTextureUnits();const Me=W.fog,Be=ee.isMeshStandardMaterial?W.environment:null,je=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Sn,Xe=(ee.isMeshStandardMaterial?j:C).get(ee.envMap||Be),xt=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,z=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),me=!!te.morphAttributes.position,Ke=!!te.morphAttributes.normal,rt=!!te.morphAttributes.color;let He=Fi;ee.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(He=x.toneMapping);const ue=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ge=ue!==void 0?ue.length:0,be=Re.get(ee),$e=p.state.lights;if(V===!0&&(J===!0||P!==b)){const It=P===b&&ee.id===v;pe.setState(ee,P,It)}let Ze=!1;ee.version===be.__version?(be.needsLights&&be.lightsStateVersion!==$e.state.version||be.outputColorSpace!==je||K.isBatchedMesh&&be.batching===!1||!K.isBatchedMesh&&be.batching===!0||K.isBatchedMesh&&be.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&be.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&be.instancing===!1||!K.isInstancedMesh&&be.instancing===!0||K.isSkinnedMesh&&be.skinning===!1||!K.isSkinnedMesh&&be.skinning===!0||K.isInstancedMesh&&be.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&be.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&be.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&be.instancingMorph===!1&&K.morphTexture!==null||be.envMap!==Xe||ee.fog===!0&&be.fog!==Me||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==pe.numPlanes||be.numIntersection!==pe.numIntersection)||be.vertexAlphas!==xt||be.vertexTangents!==z||be.morphTargets!==me||be.morphNormals!==Ke||be.morphColors!==rt||be.toneMapping!==He||be.morphTargetsCount!==ge)&&(Ze=!0):(Ze=!0,be.__version=ee.version);let _e=be.currentProgram;Ze===!0&&(_e=wt(ee,W,K));let ne=!1,Ve=!1,ht=!1;const qe=_e.getUniforms(),et=be.uniforms;if(Ee.useProgram(_e.program)&&(ne=!0,Ve=!0,ht=!0),ee.id!==v&&(v=ee.id,Ve=!0),ne||b!==P){Ee.buffers.depth.getReversed()?(ie.copy(P.projectionMatrix),$d(ie),Qd(ie),qe.setValue(H,"projectionMatrix",ie)):qe.setValue(H,"projectionMatrix",P.projectionMatrix),qe.setValue(H,"viewMatrix",P.matrixWorldInverse);const kt=qe.map.cameraPosition;kt!==void 0&&kt.setValue(H,fe.setFromMatrixPosition(P.matrixWorld)),Je.logarithmicDepthBuffer&&qe.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&qe.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Ve=!0,ht=!0)}if(K.isSkinnedMesh){qe.setOptional(H,K,"bindMatrix"),qe.setOptional(H,K,"bindMatrixInverse");const It=K.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),qe.setValue(H,"boneTexture",It.boneTexture,D))}K.isBatchedMesh&&(qe.setOptional(H,K,"batchingTexture"),qe.setValue(H,"batchingTexture",K._matricesTexture,D),qe.setOptional(H,K,"batchingIdTexture"),qe.setValue(H,"batchingIdTexture",K._indirectTexture,D),qe.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&qe.setValue(H,"batchingColorTexture",K._colorsTexture,D));const Qt=te.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&it.update(K,te,_e),(Ve||be.receiveShadow!==K.receiveShadow)&&(be.receiveShadow=K.receiveShadow,qe.setValue(H,"receiveShadow",K.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(et.envMap.value=Xe,et.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(et.envMapIntensity.value=W.environmentIntensity),Ve&&(qe.setValue(H,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&nn(et,ht),Me&&ee.fog===!0&&Ce.refreshFogUniforms(et,Me),Ce.refreshMaterialUniforms(et,ee,N,L,p.state.transmissionRenderTarget[P.id]),xo.upload(H,jt(be),et,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(xo.upload(H,jt(be),et,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&qe.setValue(H,"center",K.center),qe.setValue(H,"modelViewMatrix",K.modelViewMatrix),qe.setValue(H,"normalMatrix",K.normalMatrix),qe.setValue(H,"modelMatrix",K.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const It=ee.uniformsGroups;for(let kt=0,Ut=It.length;kt<Ut;kt++){const Jn=It[kt];X.update(Jn,_e),X.bind(Jn,_e)}}return _e}function nn(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function yt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,W,te){Re.get(P.texture).__webglTexture=W,Re.get(P.depthTexture).__webglTexture=te;const ee=Re.get(P);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=te===void 0,ee.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){const te=Re.get(P);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,te=0){M=P,E=W,T=te;let ee=!0,K=null,Me=!1,Be=!1;if(P){const Xe=Re.get(P);if(Xe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(H.FRAMEBUFFER,null),ee=!1;else if(Xe.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(Xe.__hasExternalTextures)D.rebindTextures(P,Re.get(P.texture).__webglTexture,Re.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const me=P.depthTexture;if(Xe.__boundDepthTexture!==me){if(me!==null&&Re.has(me)&&(P.width!==me.image.width||P.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const xt=P.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(Be=!0);const z=Re.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(z[W])?K=z[W][te]:K=z[W],Me=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?K=Re.get(P).__webglMultisampledFramebuffer:Array.isArray(z)?K=z[te]:K=z,A.copy(P.viewport),F.copy(P.scissor),I=P.scissorTest}else A.copy(se).multiplyScalar(N).floor(),F.copy(he).multiplyScalar(N).floor(),I=we;if(Ee.bindFramebuffer(H.FRAMEBUFFER,K)&&ee&&Ee.drawBuffers(P,K),Ee.viewport(A),Ee.scissor(F),Ee.setScissorTest(I),Me){const Xe=Re.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Xe.__webglTexture,te)}else if(Be){const Xe=Re.get(P.texture),xt=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.__webglTexture,te||0,xt)}v=-1},this.readRenderTargetPixels=function(P,W,te,ee,K,Me,Be){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Re.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je){Ee.bindFramebuffer(H.FRAMEBUFFER,je);try{const Xe=P.texture,xt=Xe.format,z=Xe.type;if(!Je.textureFormatReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-ee&&te>=0&&te<=P.height-K&&H.readPixels(W,te,ee,K,ct.convert(xt),ct.convert(z),Me)}finally{const Xe=M!==null?Re.get(M).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(P,W,te,ee,K,Me,Be){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Re.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je){const Xe=P.texture,xt=Xe.format,z=Xe.type;if(!Je.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=P.width-ee&&te>=0&&te<=P.height-K){Ee.bindFramebuffer(H.FRAMEBUFFER,je);const me=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(W,te,ee,K,ct.convert(xt),ct.convert(z),0);const Ke=M!==null?Re.get(M).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,Ke);const rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Zd(H,rt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,me),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(me),H.deleteSync(rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,W=null,te=0){P.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1]);const ee=Math.pow(2,-te),K=Math.floor(P.image.width*ee),Me=Math.floor(P.image.height*ee),Be=W!==null?W.x:0,je=W!==null?W.y:0;D.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Be,je,K,Me),Ee.unbindTexture()},this.copyTextureToTexture=function(P,W,te=null,ee=null,K=0){P.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,P=arguments[1],W=arguments[2],K=arguments[3]||0,te=null);let Me,Be,je,Xe,xt,z,me,Ke,rt;const He=P.isCompressedTexture?P.mipmaps[K]:P.image;te!==null?(Me=te.max.x-te.min.x,Be=te.max.y-te.min.y,je=te.isBox3?te.max.z-te.min.z:1,Xe=te.min.x,xt=te.min.y,z=te.isBox3?te.min.z:0):(Me=He.width,Be=He.height,je=He.depth||1,Xe=0,xt=0,z=0),ee!==null?(me=ee.x,Ke=ee.y,rt=ee.z):(me=0,Ke=0,rt=0);const ue=ct.convert(W.format),ge=ct.convert(W.type);let be;W.isData3DTexture?(D.setTexture3D(W,0),be=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),be=H.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),be=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const $e=H.getParameter(H.UNPACK_ROW_LENGTH),Ze=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_e=H.getParameter(H.UNPACK_SKIP_PIXELS),ne=H.getParameter(H.UNPACK_SKIP_ROWS),Ve=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,He.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,He.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xe),H.pixelStorei(H.UNPACK_SKIP_ROWS,xt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,z);const ht=P.isDataArrayTexture||P.isData3DTexture,qe=W.isDataArrayTexture||W.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const et=Re.get(P),Qt=Re.get(W),It=Re.get(et.__renderTarget),kt=Re.get(Qt.__renderTarget);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,It.__webglFramebuffer),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Ut=0;Ut<je;Ut++)ht&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.get(P).__webglTexture,K,z+Ut),P.isDepthTexture?(qe&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.get(W).__webglTexture,K,rt+Ut),H.blitFramebuffer(Xe,xt,Me,Be,me,Ke,Me,Be,H.DEPTH_BUFFER_BIT,H.NEAREST)):qe?H.copyTexSubImage3D(be,K,me,Ke,rt+Ut,Xe,xt,Me,Be):H.copyTexSubImage2D(be,K,me,Ke,rt+Ut,Xe,xt,Me,Be);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else qe?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(be,K,me,Ke,rt,Me,Be,je,ue,ge,He.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(be,K,me,Ke,rt,Me,Be,je,ue,He.data):H.texSubImage3D(be,K,me,Ke,rt,Me,Be,je,ue,ge,He):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,me,Ke,Me,Be,ue,ge,He.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,me,Ke,He.width,He.height,ue,He.data):H.texSubImage2D(H.TEXTURE_2D,K,me,Ke,Me,Be,ue,ge,He);H.pixelStorei(H.UNPACK_ROW_LENGTH,$e),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ze),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_e),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ve),K===0&&W.generateMipmaps&&H.generateMipmap(be),Ee.unbindTexture()},this.copyTextureToTexture3D=function(P,W,te=null,ee=null,K=0){return P.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ee=arguments[1]||null,P=arguments[2],W=arguments[3],K=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,W,te,ee,K)},this.initRenderTarget=function(P){Re.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),Ee.unbindTexture()},this.resetState=function(){E=0,T=0,M=null,Ee.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}class Pl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new Pl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class l_ extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new w;class yr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Su extends $n{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const Js=new w,ys=new w,Ss=new w,bs=new ke,er=new ke,bu=new lt,Kr=new w,tr=new w,jr=new w,Yc=new ke,aa=new ke,Kc=new ke;class c_ extends zt{constructor(e=new Su){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yu(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new yr(n,3,0,!1)),Ms.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),bu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ss.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Zr(Kr.set(-.5,-.5,0),Ss,o,ys,i,r),Zr(tr.set(.5,-.5,0),Ss,o,ys,i,r),Zr(jr.set(.5,.5,0),Ss,o,ys,i,r),Yc.set(0,0),aa.set(1,0),Kc.set(1,1);let a=e.ray.intersectTriangle(Kr,tr,jr,!1,Js);if(a===null&&(Zr(tr.set(-.5,.5,0),Ss,o,ys,i,r),aa.set(0,1),a=e.ray.intersectTriangle(Kr,jr,tr,!1,Js),a===null))return;const l=e.ray.origin.distanceTo(Js);l<e.near||l>e.far||t.push({distance:l,point:Js.clone(),uv:Bn.getInterpolation(Js,Kr,tr,jr,Yc,aa,Kc,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zr(s,e,t,n,i,r){bs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(er.x=r*bs.x-i*bs.y,er.y=i*bs.x+r*bs.y):er.copy(bs),s.copy(e),s.x+=er.x,s.y+=er.y,s.applyMatrix4(bu)}const jc=new w,Zc=new Vt,$c=new Vt,h_=new w,Qc=new lt,$r=new w,la=new ii,Jc=new lt,ca=new To;class u_ extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(i),e.ray.intersectsSphere(la)!==!1&&(Jc.copy(i).invert(),ca.copy(e.ray).applyMatrix4(Jc),!(this.boundingBox!==null&&ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Md?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Zc.fromBufferAttribute(i.attributes.skinIndex,e),$c.fromBufferAttribute(i.attributes.skinWeight,e),jc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$c.getComponent(r);if(o!==0){const a=Zc.getComponent(r);Qc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(h_.copy(jc).applyMatrix4(Qc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wu extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Eu extends cn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Tn,h=Tn,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new lt,d_=new lt;class Il{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:d_;eh.multiplyMatrices(a,t[r]),eh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Eu(t,e,e,kn,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new wu),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class hl extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new lt,th=new lt,Qr=[],nh=new Si,f_=new lt,nr=new dt,ir=new ii;class gt extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,f_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),nh.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(nh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),ir.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ws),th.multiplyMatrices(n,ws),nr.matrixWorld=th,nr.raycast(e,Qr);for(let o=0,a=Qr.length;o<a;o++){const l=Qr[o];l.instanceId=r,l.object=this,t.push(l)}Qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eu(new Float32Array(i*this.count),i,this.count,bl,Kn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ll extends $n{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const So=new w,bo=new w,ih=new lt,sr=new To,Jr=new ii,ha=new w,sh=new w;class Dl extends zt{constructor(e=new Nt,t=new Ll){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)So.fromBufferAttribute(t,i-1),bo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=So.distanceTo(bo);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;ih.copy(i).invert(),sr.copy(e.ray).applyMatrix4(ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),y=h.getX(_+1),S=eo(this,e,sr,l,p,y);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=eo(this,e,sr,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=eo(this,e,sr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=eo(this,e,sr,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function eo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(So.fromBufferAttribute(o,i),bo.fromBufferAttribute(o,r),t.distanceSqToSegment(So,bo,ha,sh)>n)return;ha.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ha);if(!(l<e.near||l>e.far))return{distance:l,point:sh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const rh=new w,oh=new w;class Au extends Dl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rh.fromBufferAttribute(t,i),oh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(oh);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p_ extends Dl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class An extends $n{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ah=new lt,ul=new To,to=new ii,no=new w;class Rn extends zt{constructor(e=new Nt,t=new An){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;ah.copy(i).invert(),ul.copy(e.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);no.fromBufferAttribute(u,m),lh(no,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)no.fromBufferAttribute(u,g),lh(no,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lh(s,e,t,n,i,r,o){const a=ul.distanceSqToPoint(s);if(a<t){const l=new w;ul.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xn extends cn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ke:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],o=[],a=new w,l=new lt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pn(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(pn(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tu extends bi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ke){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m_ extends Tu{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const io=new w,ua=new Nl,da=new Nl,fa=new Nl;class Pn extends bi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(io.subVectors(i[0],i[1]).add(i[0]),c=io);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(io.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ua.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),da.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),fa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),da.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),fa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ua.calc(l),da.calc(l),fa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ch(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function g_(s,e){const t=1-s;return t*t*e}function __(s,e){return 2*(1-s)*s*e}function x_(s,e){return s*s*e}function fr(s,e,t,n){return g_(s,e)+__(s,t)+x_(s,n)}function v_(s,e){const t=1-s;return t*t*t*e}function M_(s,e){const t=1-s;return 3*t*t*s*e}function y_(s,e){return 3*(1-s)*s*s*e}function S_(s,e){return s*s*s*e}function pr(s,e,t,n,i){return v_(s,e)+M_(s,t)+y_(s,n)+S_(s,i)}class b_ extends bi{constructor(e=new ke,t=new ke,n=new ke,i=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ke){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(e,i.x,r.x,o.x,a.x),pr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w_ extends bi{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(e,i.x,r.x,o.x,a.x),pr(e,i.y,r.y,o.y,a.y),pr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E_ extends bi{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A_ extends bi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends bi{constructor(e=new ke,t=new ke,n=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ke){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,i.x,r.x,o.x),fr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cu extends bi{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,i.x,r.x,o.x),fr(e,i.y,r.y,o.y),fr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ch(a,l.x,c.x,h.x,u.x),ch(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ke().fromArray(i))}return this}}var R_=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:Pn,CubicBezierCurve:b_,CubicBezierCurve3:w_,EllipseCurve:Tu,LineCurve:E_,LineCurve3:A_,QuadraticBezierCurve:T_,QuadraticBezierCurve3:Cu,SplineCurve:C_});class Ul extends Nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new w,h=new ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jt extends Nt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2));function y(){const x=new w,R=new w;let E=0;const T=(t-e)/n;for(let M=0;M<=r;M++){const v=[],b=M/r,A=b*(t-e)+e;for(let F=0;F<=i;F++){const I=F/i,k=I*l+a,G=Math.sin(k),O=Math.cos(k);R.x=A*G,R.y=-b*n+m,R.z=A*O,u.push(R.x,R.y,R.z),x.set(G,T,O).normalize(),d.push(x.x,x.y,x.z),f.push(I,1-b),v.push(g++)}_.push(v)}for(let M=0;M<i;M++)for(let v=0;v<r;v++){const b=_[v][M],A=_[v+1][M],F=_[v+1][M+1],I=_[v][M+1];(e>0||v!==0)&&(h.push(b,A,I),E+=3),(t>0||v!==r-1)&&(h.push(A,F,I),E+=3)}c.addGroup(p,E,0),p+=E}function S(x){const R=g,E=new ke,T=new w;let M=0;const v=x===!0?e:t,b=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const A=g;for(let F=0;F<=i;F++){const k=F/i*l+a,G=Math.cos(k),O=Math.sin(k);T.x=v*O,T.y=m*b,T.z=v*G,u.push(T.x,T.y,T.z),d.push(0,b,0),E.x=G*.5+.5,E.y=O*.5*b+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){const I=R+F,k=A+F;x===!0?h.push(k,k+1,I):h.push(k+1,k,I),M+=3}c.addGroup(p,M,x===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gn extends Jt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new gn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends Nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new w,x=new w,R=new w;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],x),f(t[E+2],R),l(S,x,R,y)}function l(y,S,x,R){const E=R+1,T=[];for(let M=0;M<=E;M++){T[M]=[];const v=y.clone().lerp(x,M/E),b=S.clone().lerp(x,M/E),A=E-M;for(let F=0;F<=A;F++)F===0&&M===E?T[M][F]=v:T[M][F]=v.clone().lerp(b,F/A)}for(let M=0;M<E;M++)for(let v=0;v<2*(E-M)-1;v++){const b=Math.floor(v/2);v%2===0?(d(T[M][b+1]),d(T[M+1][b]),d(T[M][b])):(d(T[M][b+1]),d(T[M+1][b+1]),d(T[M+1][b]))}}function c(y){const S=new w;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(y),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const y=new w;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const x=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(x,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const S=o[y+0],x=o[y+2],R=o[y+4],E=Math.max(S,x,R),T=Math.min(S,x,R);E>.9&&T<.1&&(S<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){const x=y*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function g(){const y=new w,S=new w,x=new w,R=new w,E=new ke,T=new ke,M=new ke;for(let v=0,b=0;v<r.length;v+=9,b+=6){y.set(r[v+0],r[v+1],r[v+2]),S.set(r[v+3],r[v+4],r[v+5]),x.set(r[v+6],r[v+7],r[v+8]),E.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),M.set(o[b+4],o[b+5]),R.copy(y).add(S).add(x).divideScalar(3);const A=m(R);_(E,b+0,y,A),_(T,b+2,S,A),_(M,b+4,x,A)}}function _(y,S,x,R){R<0&&y.x===1&&(o[S]=y.x-1),x.x===0&&x.z===0&&(o[S]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.vertices,e.indices,e.radius,e.details)}}class zs extends Po{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zs(e.radius,e.detail)}}class Fl extends Po{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fl(e.radius,e.detail)}}class an extends Nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new w,d=new w,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const E=R/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+x,1-S),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const S=h[p][y+1],x=h[p][y],R=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&f.push(S,x,E),(p!==n-1||l<Math.PI)&&f.push(x,R,E)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Un extends Nt{constructor(e=new Cu(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,c=new ke;let h=new w;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2));function _(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),y(),p()}function m(S){h=e.getPointAt(S/t,h);const x=o.normals[S],R=o.binormals[S];for(let E=0;E<=i;E++){const T=E/i*Math.PI*2,M=Math.sin(T),v=-Math.cos(T);l.x=v*x.x+M*R.x,l.y=v*x.y+M*R.y,l.z=v*x.z+M*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let x=1;x<=i;x++){const R=(i+1)*(S-1)+(x-1),E=(i+1)*S+(x-1),T=(i+1)*S+x,M=(i+1)*(S-1)+x;g.push(R,E,M),g.push(E,T,M)}}function y(){for(let S=0;S<=t;S++)for(let x=0;x<=i;x++)c.x=S/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Un(new R_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class P_ extends on{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Oe extends $n{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends Oe{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function so(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function I_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function L_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Ru(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class br{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class D_ extends br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zl,endingEnd:Zl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $l:r=e,a=2*t-n;break;case Ql:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:o=e,l=2*n-t;break;case Ql:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+S*o[l+R]+x*o[u+R];return r}}class N_ extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class U_ extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new U_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new N_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new D_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _r:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&I_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Do,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=xr;class qs extends ri{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=_r;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Pu extends ri{}Pu.prototype.ValueTypeName="color";class ks extends ri{}ks.prototype.ValueTypeName="number";class F_ extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)_t.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Gs extends ri{InterpolantFactoryMethodLinear(e){return new F_(this.times,this.values,this.getValueSize(),e)}}Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends ri{constructor(e,t,n){super(e,t,n)}}Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=_r;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends ri{}Vs.prototype.ValueTypeName="vector";class O_{constructor(e="",t=-1,n=[],i=yd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(z_(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ri.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=L_(l);l=hh(l,1,h),c=hh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ks(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Ru(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new ks(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Vs,f+".position",d,"pos",i),n(Gs,f+".quaternion",d,"rot",i),n(Vs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function B_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ks;case"vector":case"vector2":case"vector3":case"vector4":return Vs;case"color":return Pu;case"quaternion":return Gs;case"bool":case"boolean":return qs;case"string":return Ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function z_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=B_(s.type);if(s.times===void 0){const t=[],n=[];Ru(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ui={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class k_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const G_=new k_;class is{constructor(e){this.manager=e!==void 0?e:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}is.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class V_ extends Error{constructor(e,t){super(e),this.response=t}}class wo extends is{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ui.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:i});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ui[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:x})=>{if(S)p.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,T=h.length;E<T;E++){const M=h[E];M.onProgress&&M.onProgress(R)}p.enqueue(x),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new V_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ui.add(e,c);const h=ui[e];delete ui[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ui[e];if(h===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class H_ extends is{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ui.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=vr("img");function l(){h(),Ui.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class W_ extends is{constructor(e){super(e)}load(e,t,n,i){const r=new cn,o=new H_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class wr extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class X_ extends wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pa=new lt,uh=new w,dh=new w;class Ol{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dh),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q_ extends Ol{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Y_ extends wr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new q_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fh=new lt,rr=new w,ma=new w;class K_ extends Ol{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),ma.copy(n.position),ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ma),n.updateMatrixWorld(),i.makeTranslation(-rr.x,-rr.y,-rr.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}class vo extends wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new K_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class j_ extends Ol{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Iu extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new j_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z_ extends wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $_ extends is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ui.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ui.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ui.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ui.add(e,l),r.manager.itemStart(e)}}class Lu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ph();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ph(){return performance.now()}const Bl="\\[\\]\\.:\\/",Q_=new RegExp("["+Bl+"]","g"),zl="[^"+Bl+"]",J_="[^"+Bl.replace("\\.","")+"]",ex=/((?:WC+[\/:])*)/.source.replace("WC",zl),tx=/(WCOD+)?/.source.replace("WCOD",J_),nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),sx=new RegExp("^"+ex+tx+nx+ix+"$"),rx=["material","materials","bones","map"];class ox{constructor(e,t,n){const i=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qt{constructor(e,t,n){this.path=t,this.parsedPath=n||qt.parseTrackName(t),this.node=qt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qt.Composite(e,t,n):new qt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q_,"")}static parseTrackName(e){const t=sx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);rx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=qt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qt.Composite=ox;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);const Du={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ax=new Co(-1,1,1,-1,0,1);class lx extends Nt{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const cx=new lx;class kl{constructor(e){this._mesh=new dt(cx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ax)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hx extends Ks{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mr.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new kl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mh extends Ks{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class ux extends Ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new Zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hx(Du),this.copyPass.material.blending=gi,this.clock=new Lu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mh!==void 0&&(o instanceof mh?n=!0:o instanceof ux&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fx extends Ks{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const px={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Hs extends Ks{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zn(r,o,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Zn(r,o,{type:_i});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Zn(r,o,{type:_i});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=px;this.highPassUniforms=Mr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Du;this.copyUniforms=Mr.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new re,this.oldClearAlpha=1,this.basic=new Cn,this.fsQuad=new kl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ke(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Hs.BlurDirectionX=new ke(1,0);Hs.BlurDirectionY=new ke(0,1);const mx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class gx extends Ks{constructor(){super();const e=mx;this.uniforms=Mr.clone(e.uniforms),this.material=new P_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===Wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Nu(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new xn(s);return n.needsUpdate=!0,n}function _x(s=8500,e=14e3){const t=new Yt;t.name="Procedural_Starfield";const n=new Float32Array(s*3),i=new Float32Array(s*3),r=[new re(10205439),new re(13293823),new re(16316415),new re(16774378),new re(16765601),new re(16754795)];for(let p=0;p<s;p++){const y=Math.random(),S=Math.random(),x=y*2*Math.PI;let R=Math.acos(2*S-1);Math.random()<.35&&(R=Math.PI*.5+(Math.random()-.5)*.32);const E=e*(.55+.45*Math.random()),T=Math.sin(R);n[p*3]=E*T*Math.cos(x),n[p*3+1]=E*Math.cos(R),n[p*3+2]=E*T*Math.sin(x);const M=r[Math.floor(Math.random()*r.length)],v=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=M.r*v,i[p*3+1]=M.g*v,i[p*3+2]=M.b*v}const o=new Nt;o.setAttribute("position",new St(n,3)),o.setAttribute("color",new St(i,3));const a=Nu(),l=e/14e3,c=new An({size:28*l,map:a,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:mn,sizeAttenuation:!0}),h=new Rn(o,c);t.add(h);const u=500,d=new Float32Array(u*3),f=new Float32Array(u*3);for(let p=0;p<u;p++){const y=Math.random()*2*Math.PI,S=Math.acos(2*Math.random()-1),x=e*.72;d[p*3]=x*Math.sin(S)*Math.cos(y),d[p*3+1]=x*Math.cos(S),d[p*3+2]=x*Math.sin(S)*Math.sin(y);const R=r[p%r.length];f[p*3]=R.r,f[p*3+1]=R.g,f[p*3+2]=R.b}const g=new Nt;g.setAttribute("position",new St(d,3)),g.setAttribute("color",new St(f,3));const _=new An({size:56*l,map:a,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:mn});t.add(new Rn(g,_)),t.renderOrder=-80,h.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const y=q.clamp(p,0,1);c.opacity=.92*y,_.opacity=.95*y,t.visible=y>.015},t}class xx{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let r=0;r<t;r++)n[r*3]=(Math.random()-.5)*28,n[r*3+1]=(Math.random()-.5)*18,n[r*3+2]=-Math.random()*55;this.geometry=new Nt,this.geometry.setAttribute("position",new St(n,3)),this.material=new An({color:new re(16758892),size:.42,map:Nu(),transparent:!0,opacity:0,depthWrite:!1,blending:mn}),this.points=new Rn(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let r=0;r<this.streakCount;r++){const o=Math.random()*Math.PI*2,a=3.5+Math.random()*22,l=Math.cos(o)*a,c=Math.sin(o)*a*.72,h=-8-Math.random()*95,u=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:h,len:u}),i[r*6]=l,i[r*6+1]=c,i[r*6+2]=h,i[r*6+3]=l,i[r*6+4]=c,i[r*6+5]=h-u}this.streakGeometry=new Nt,this.streakGeometry.setAttribute("position",new St(i,3)),this.streakMaterial=new Ll({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:mn}),this.streakLines=new Au(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=q.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=q.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const r=this.geometry.attributes.position,o=r.array,a=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=o[l*3+2]+a;c>2&&(c=-52-Math.random()*12,o[l*3]=(Math.random()-.5)*28,o[l*3+1]=(Math.random()-.5)*18),o[l*3+2]=c}r.needsUpdate=!0}if(this.pulseFactor=q.lerp(this.pulseFactor,q.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const r=this.streakGeometry.attributes.position,o=r.array,a=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const h=this.streakSeeds[c];h.z+=a,h.z>4&&(h.z=-95-Math.random()*25);const u=h.z-h.len*l;o[c*6]=h.x,o[c*6+1]=h.y,o[c*6+2]=h.z,o[c*6+3]=h.x,o[c*6+4]=h.y,o[c*6+5]=u}r.needsUpdate=!0}}}class vx{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new w,this.angularVelocity=new w,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.altitudeContext={surfaceAltitude:9999,planetRadius:220,atmoTopAlt:320,groundFloorAlt:.9,minSpeed:8,submergedRatio:0,planetCenter:new w,prevPlanetCenter:new w,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new w,planetQuatDelta:new _t},this._tmpToShip=new w,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov,this._bindEvents()}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=q.clamp(-t*.011,-.52,.52);this.targetBankAngle=q.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=q.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,minSpeed:r,submergedRatio:o,planetCenter:a,prevPlanetCenter:l,hasPlanet:c,inGravityWell:h,planetDeltaPos:u,planetQuatDelta:d}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||220,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*1.45,this.altitudeContext.groundFloorAlt=i??.9,this.altitudeContext.minSpeed=r??8,this.altitudeContext.submergedRatio=q.clamp(o??0,0,1),a?(this.altitudeContext.planetCenter.copy(a),this.altitudeContext.prevPlanetCenter.copy(l||a),this.altitudeContext.hasPlanet=c!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!h,u?this.altitudeContext.planetDeltaPos.copy(u):this.altitudeContext.planetDeltaPos.set(0,0,0),d?this.altitudeContext.planetQuatDelta.copy(d):this.altitudeContext.planetQuatDelta.identity()}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:r=!1,onComplete:o=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const a=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new w(0,1,0)}));this.autopilot={startPos:a,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:r,onComplete:o}}setPose(e,t,n=new w(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(100,this.altitudeContext.atmoTopAlt),i=q.clamp(t/n,0,1),r=q.smoothstep(t,n,n+1350),o=this.altitudeContext.minSpeed??8,a=q.lerp(1,.48,this.altitudeContext.submergedRatio||0),l=q.lerp(o,38,Math.pow(i,.78))*a,c=q.lerp(l,260,Math.pow(r,1.1)),h=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&h){const m=q.lerp(q.lerp(.22,.56,i),1,r);this.pulseDriveCharge=q.lerp(this.pulseDriveCharge,m,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=q.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const u=this.keys.boost&&h?Math.min(1,this.pulseDriveCharge/Math.max(.2,q.lerp(.22,1,r))):this.pulseDriveCharge,d=q.lerp(2.2,3.05,i),g=q.lerp(d,5.8,r),_=q.lerp(1,g,Math.min(1,u));return c*this.speedMultiplier*_}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell){const c=this.altitudeContext.planetQuatDelta;c.x*c.x+c.y*c.y+c.z*c.z>1e-14?(this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.prevPlanetCenter).applyQuaternion(c),this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip),this.shipQuaternion.premultiply(c).normalize(),this.velocity.applyQuaternion(c),this.camera.quaternion.copy(this.shipQuaternion)):this.camera.position.add(this.altitudeContext.planetDeltaPos)}if(this.autopilot){this.autopilot.elapsed+=t;const c=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),h=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2,{targetPos:u,lookAtPos:d,upVec:f,useCurveNow:g}=this.autopilot.poseProvider(h,c,this.autopilot.startPos),_=this.camera.position.clone();this.autopilot.useDirectCurve||g?this.camera.position.copy(u):this.camera.position.lerpVectors(this.autopilot.startPos,u,h);const m=this.camera.clone();m.position.copy(this.camera.position),m.up.copy(f||new w(0,1,0)),m.lookAt(d),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,m.quaternion,this.autopilot.useDirectCurve?Math.min(1,h*2.2):Math.min(1,h*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(_).divideScalar(t);const p=this.autopilot.useDirectCurve?Math.sin(c*Math.PI)*9:Math.sin(c*Math.PI)*18,y=this.baseFov+p;if(this.camera.fov=q.lerp(this.camera.fov,y,.25),this.camera.updateProjectionMatrix(),c>=1){const S=this.autopilot.onComplete;this.autopilot=null,this.velocity.multiplyScalar(.15),S&&S()}return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const c=new _t().setFromAxisAngle(new w(1,0,0),this.angularVelocity.x),h=new _t().setFromAxisAngle(new w(0,1,0),this.angularVelocity.y),u=new _t().setFromAxisAngle(new w(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(h),this.shipQuaternion.multiply(c),this.shipQuaternion.multiply(u),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=q.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const r=new _t().setFromAxisAngle(new w(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(r);const o=new w((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),a=this._computeAdaptiveSpeedLimits(t);if(o.lengthSq()>0){o.normalize(),o.applyQuaternion(this.shipQuaternion);const c=o.multiplyScalar(a),h=q.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(c,1-Math.exp(-h*t))}else{const c=q.lerp(3.4,6.2,this.altitudeContext.submergedRatio||0);this.velocity.multiplyScalar(Math.exp(-c*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0)}if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const c=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,h=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),u=h.length();if(u>1e-4&&u<c){const d=h.divideScalar(u);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(d,c);const f=this.velocity.dot(d);f<0&&this.velocity.addScaledVector(d,-f)}}const l=this.baseFov+this.pulseDriveCharge*18.5;Math.abs(this.camera.fov-l)>.05&&(this.camera.fov=q.lerp(this.camera.fov,l,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function Bt(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Nt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=gh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=gh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function gh(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new St(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function _h(s,e){if(e===Sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===al||e===nu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===al)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Mx extends is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ex(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new zx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=mr.extractUrlBase(e);o=mr.resolveURL(c,this.path)}else o=mr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Uu){try{o[Dt.KHR_BINARY_GLTF]=new kx(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Jx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Dt.KHR_MATERIALS_UNLIT:o[u]=new bx;break;case Dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Gx(r,this.dracoLoader);break;case Dt.KHR_TEXTURE_TRANSFORM:o[u]=new Vx;break;case Dt.KHR_MESH_QUANTIZATION:o[u]=new Hx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function yx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Sx{constructor(e){this.parser=e,this.name=Dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Sn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Iu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vo(h),c.distance=u;break;case"spot":c=new Y_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class bx{constructor(){this.name=Dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const i=[];e.color=new re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(i)}}class wx{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ex{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(a,a)}return Promise.all(r)}}class Ax{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Tx{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Cx{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Rx{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Px{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(a[0],a[1],a[2],Sn),Promise.all(r)}}class Ix{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Lx{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(a[0],a[1],a[2],Sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(r)}}class Dx{constructor(e){this.parser=e,this.name=Dt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Nx{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Ux{constructor(e){this.parser=e,this.name=Dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Fx{constructor(e){this.parser=e,this.name=Dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ox{constructor(e){this.parser=e,this.name=Dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Bx{constructor(e){this.name=Dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class zx{constructor(e){this.name=Dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new lt,m=new w,p=new _t,y=new w(1,1,1),S=new gt(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,_.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const R=l[x];S.instanceColor=new hl(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);zt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Uu="glTF",or=12,xh={JSON:1313821514,BIN:5130562};class kx{constructor(e){this.name=Dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,or),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-or,r=new DataView(e,or);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===xh.JSON){const c=new Uint8Array(e,or+o,a);this.content=n.decode(c)}else if(l===xh.BIN){const c=or+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Gx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=dl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=dl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ps[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,Sn,d)})})}}class Vx{constructor(){this.name=Dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Hx{constructor(){this.name=Dt.KHR_MESH_QUANTIZATION}}class Fu extends br{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,y=1-m,S=p-d+u;for(let x=0;x!==a;x++){const R=o[_+x+a],E=o[_+x+l]*h,T=o[g+x+a],M=o[g+x]*h;r[x]=y*R+S*E+m*T+p*M}return r}}const Wx=new _t;class Xx extends Fu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Wx.fromArray(r).normalize().toArray(r),r}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vh={9728:Tn,9729:Nn,9984:qh,9985:uo,9986:lr,9987:pi},Mh={33071:Ni,33648:Mo,10497:Oi},ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qx={CUBICSPLINE:void 0,LINEAR:xr,STEP:_r},_a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),s.DefaultMaterial}function Yi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function jx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Zx(s){let e;const t=s.extensions&&s.extensions[Dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xa(t.attributes):e=s.indices+":"+xa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+xa(s.targets[n]);return e}function xa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function fl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $x(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Qx=new lt;class Jx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new W_(this.options.manager):this.textureLoader=new $_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Yi(r,a,i),fi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Dt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(mr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ga[i.type],a=Ps[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new St(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ga[i.type],c=Ps[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(y);S||(_=new c(a,p*f,i.count*f/h),S=new yu(_,f/h),t.cache.add(y,S)),m=new yr(S,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new St(_,l,g);if(i.sparse!==void 0){const p=ga.SCALAR,y=Ps[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new y(o[1],S,i.sparse.count*p),E=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,M=R.length;T<M;T++){const v=R[T];if(m.setX(v,E[T*l]),l>=2&&m.setY(v,E[T*l+1]),l>=3&&m.setZ(v,E[T*l+2]),l>=4&&m.setW(v,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=vh[d.magFilter]||Nn,h.minFilter=vh[d.minFilter]||pi,h.wrapS=Mh[d.wrapS]||Oi,h.wrapT=Mh[d.wrapT]||Oi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Tn&&h.minFilter!==Nn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new cn(_);m.needsUpdate=!0,d(m)}),t.load(mr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),fi(u,o),u.userData.mimeType=o.mimeType||$x(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Dt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new An,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ll,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Oe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Dt.KHR_MATERIALS_UNLIT]){const u=i[Dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Sn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Zt);const h=r.alphaMode||_a.OPAQUE;if(h===_a.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_a.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){const u=r.emissiveFactor;a.emissive=new re().setRGB(u[0],u[1],u[2],Sn)}return r.emissiveTexture!==void 0&&o!==Cn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Yi(i,u,r),u})}createUniqueName(e){const t=qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Zx(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Dt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=yh(new Nt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Yx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const y=c[f];if(m.mode===On.TRIANGLES||m.mode===On.TRIANGLE_STRIP||m.mode===On.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new u_(_,y):new dt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===On.TRIANGLE_STRIP?p.geometry=_h(p.geometry,nu):m.mode===On.TRIANGLE_FAN&&(p.geometry=_h(p.geometry,al));else if(m.mode===On.LINES)p=new Au(_,y);else if(m.mode===On.LINE_STRIP)p=new Dl(_,y);else if(m.mode===On.LINE_LOOP)p=new p_(_,y);else if(m.mode===On.POINTS)p=new Rn(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&jx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),fi(p,r),m.extensions&&Yi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Yi(i,u[0],r),u[0];const d=new Yt;r.extensions&&Yi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new En(q.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Co(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new lt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Il(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,S=d.length;y<S;y++){const x=d[y],R=f[y],E=g[y],T=_[y],M=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const v=n._createAnimationTracks(x,R,E,T,M);if(v)for(let b=0;b<v.length;b++)p.push(v[b])}return new O_(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Qx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new wu:c.length>1?h=new Yt:c.length===1?h=c[0]:h=new zt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),fi(h,r),r.extensions&&Yi(n,h,r),r.matrix!==void 0){const u=new lt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Yt;n.name&&(r.name=i.createUniqueName(n.name)),fi(r,n),n.extensions&&Yi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof $n||d instanceof cn)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Pi[r.path]===Pi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Pi[r.path]){case Pi.weights:c=ks;break;case Pi.rotation:c=Gs;break;case Pi.position:case Pi.scale:c=Vs;break;default:switch(n.itemSize){case 1:c=ks;break;case 2:case 3:default:c=Vs;break}break}const h=i.interpolation!==void 0?qx[i.interpolation]:xr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Pi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=fl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Gs?Xx:Fu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ev(s,e,t){const n=e.attributes,i=new Si;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){const h=fl(Ps[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new w,l=new w;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=fl(Ps[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ii;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function yh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=dl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Lt.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Lt.workingColorSpace}" not supported.`),fi(s,e),ev(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Kx(s,e.targets,t):s})}const va=new WeakMap;class tv extends is{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new wo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Gt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Sn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(va.has(e)){const l=va.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),va.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Nt;e.index&&t.setIndex(new St(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new St(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Gt)return;const n=new re;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Lt.toWorkingColorSpace(n,Gt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new wo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=nv.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function nv(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let y,S;if(c.useUniqueIDs)S=h[m],y=a.GetAttributeByUniqueId(d,S);else{if(S=a.GetAttributeId(d,o[h[m]]),S===-1)continue;y=a.GetAttribute(d,S)}const x=i(o,a,d,m,p,y);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,m,_,p);const y=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:y,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const pl={uSunViewPos:{value:new w}};function B(s,e,t){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Ot(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=Math.floor(t),o=s-n,a=e-i,l=t-r,c=o*o*(3-2*o),h=a*a*(3-2*a),u=l*l*(3-2*l),d=B(n,i,r),f=B(n+1,i,r),g=B(n,i+1,r),_=B(n+1,i+1,r),m=B(n,i,r+1),p=B(n+1,i,r+1),y=B(n,i+1,r+1),S=B(n+1,i+1,r+1),x=d+(f-d)*c,R=g+(_-g)*c,E=m+(p-m)*c,T=y+(S-y)*c,M=x+(R-x)*h,v=E+(T-E)*h;return(M+(v-M)*u)*2-1}function zn(s,e,t,n=4){let i=0,r=.5,o=1;for(let a=0;a<n;a++)i+=r*Ot(s*o+a*17.31,e*o-a*9.7,t*o+a*3.3),o*=2.03,r*=.5;return i}function Kt(s,e,t){const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)}function Ji(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function iv(s=[0,1,0]){return[s,[-s[0],-s[1],-s[2]],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(t=>{const n=new w(...t).normalize(),i=Math.abs(n.y)<.9?new w(0,1,0):new w(1,0,0),r=new w().crossVectors(n,i).normalize(),o=new w().crossVectors(n,r).normalize();return{h:n,e1:r,e2:o}})}const Rt=[{id:"hometree",name:"Gran Árbol Madre (Hometree)",shortName:"Árbol-Casa",theta:.045,phi:-.55,landBoostRad:.24,elevMode:"valley",viewAlt:.092,viewBack:.11},{id:"hallelujah",name:"Montañas Aleluya",shortName:"Aleluya",theta:.38,phi:1.15,landBoostRad:.22,elevMode:"bay",viewAlt:.135,viewBack:.145},{id:"rookery",name:"Nido de Ikran (Ikran Rookery)",shortName:"Nido Ikran",theta:1.06,phi:3.65,landBoostRad:.25,elevMode:"canyon",viewAlt:.105,viewBack:.125},{id:"souls",name:"Árbol de las Almas (Tree of Souls)",shortName:"Árbol Almas",theta:1.54,phi:5.15,landBoostRad:.26,elevMode:"crater",viewAlt:.078,viewBack:.105},{id:"mushrooms",name:"Bosque de Setas Gigantes y Géiseres",shortName:"Setas / Géiseres",theta:2.28,phi:2.1,landBoostRad:.25,elevMode:"basin",viewAlt:.082,viewBack:.11},{id:"ashland",name:"Tierra de Ceniza (Pueblo Ash)",shortName:"Ceniza / Volcanes",theta:1.88,phi:.72,landBoostRad:.34,elevMode:"ash",viewAlt:.115,viewBack:.145},{id:"metkayina",name:"Arrecife Metkayina (Aldea y Abismo)",shortName:"Metkayina",theta:1.18,phi:2.15,landBoostRad:.32,elevMode:"reef",viewAlt:.068,viewBack:.098}].map(s=>{const e=Math.sin(s.theta);return{...s,capDir:new w(e*Math.cos(s.phi),Math.cos(s.theta),e*Math.sin(s.phi)).normalize()}}),sv=[{v:Rt[0].capDir,bias:.25},{v:Rt[1].capDir,bias:.22},{v:Rt[2].capDir,bias:.24},{v:Rt[3].capDir,bias:.26},{v:Rt[4].capDir,bias:.29},{v:new w(.12,-.78,-.22).normalize(),bias:.23},{v:new w(-.05,-.94,.32).normalize(),bias:.24},{v:new w(.45,.62,-.64).normalize(),bias:.18}],rv=[{v:Rt[6].capDir,bias:.39},{v:new w(-.82,.05,.57).normalize(),bias:.39},{v:new w(-.08,.18,.98).normalize(),bias:.32},{v:new w(-.82,-.34,-.45).normalize(),bias:.38},{v:new w(-.55,-.4,.1).normalize(),bias:.31},{v:new w(-.38,-.68,-.62).normalize(),bias:.3}],ov=[{v:Rt[5].capDir,bias:.36},{v:new w(.93,-.15,.33).normalize(),bias:.3},{v:new w(.74,-.6,.28).normalize(),bias:.25},{v:new w(.55,-.18,.81).normalize(),bias:.28}];function Io(s=[0,1,0]){const e=new w(s[0],s[1],s[2]).normalize(),t=new _t().setFromUnitVectors(new w(0,1,0),e),n=Rt.map(i=>({...i,sphereDir:i.capDir.clone().applyQuaternion(t).normalize()}));return n.nationSites={forest:sv.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),water:rv.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),ash:ov.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),metkayinaDir:n[6].sphereDir,ashDir:n[5].sphereDir,soulsDir:n[3].sphereDir,mushDir:n[4].sphereDir},n}const av=Io([0,1,0]);function Gl(s,e,t,n,i=5){const r=n?.nationSites?n:av,{forest:o,water:a,ash:l}=r.nationSites;let c=-9;for(let L=0;L<o.length;L++){const N=o[L],Y=s*N.v.x+e*N.v.y+t*N.v.z+N.bias;Y>c&&(c=Y)}let h=-9;for(let L=0;L<a.length;L++){const N=a[L],Y=s*N.v.x+e*N.v.y+t*N.v.z+N.bias;Y>h&&(h=Y)}let u=-9;for(let L=0;L<l.length;L++){const N=l[L],Y=s*N.v.x+e*N.v.y+t*N.v.z+N.bias;Y>u&&(u=Y)}const d=zn(s*2.2+4.1,e*2.2-1.7,t*2.2+2.9,Math.min(3,i))*.052,f=Ot(s*6.8+1.3,e*6.8-2.1,t*6.8+3.4)*.016,g=Ot(s*3.1-2.2,e*3.1+1.9,t*3.1-.8)*.038,_=c+d+f,m=h-d*.85,p=u+g,y=Math.max(_,p),S=m-y,x=p-Math.max(_,m);let R="forest";x>0&&p>m?R="ash":S>0&&(R="water");const E=Kt(-.035,.045,x),T=Kt(-.035,.045,S)*(1-E),M=Math.max(0,1-E-T),v=Math.abs(p-_),b=Math.exp(-Math.pow(v/.068,2))*(1-Kt(-.02,.08,S));let A=0,F=0;if(R==="water"){const L=Kt(0,.14,S),N=r.nationSites.metkayinaDir,Y=q.clamp(s*N.x+e*N.y+t*N.z,-1,1),Q=Math.acos(Y);if(A=-.02-L*.34,Q<.145){const se=1-Q/.145;A=q.lerp(-.085,-.155,se),F=.72+.28*se}else if(S>.045){const se=Math.exp(-Math.pow((Q-.28)/.16,2)),he=Kt(.1,.28,S)*.65,we=1-Math.abs(Ot(s*4.4+2.7,e*4.4-1.3,t*4.4+.8)),U=zn(s*8.5+3.1,e*8.5-1.9,t*8.5+2.4,Math.min(3,i)),V=se*.44+he*.24+Math.pow(Math.max(0,we),3.4)*.56+U*.28;if(V>.66)A=.012+Math.min(.085,(V-.66)*.42),F=.88;else if(V>.34){const J=Kt(.34,.66,V);A=q.lerp(-.14,-.008,J),F=J*.95}}}else if(R==="ash"){const L=Kt(0,.11,x),N=zn(s*4.1-1.3,e*4.1+2.2,t*4.1-.9,Math.min(4,i))*.06;A=q.lerp(.06,.3,L)+Math.max(-.02,N)+b*.16}else{const L=Math.max(0,_-m),N=Kt(0,.12,L),Y=zn(s*3.6+1.2,e*3.6-.8,t*3.6-2.4,Math.min(4,i))*.075;A=q.lerp(.015,.28,N)+Math.max(0,Y)+b*.16}let I=0;for(let L=0;L<5;L++){const N=r[L],Y=N.sphereDir,Q=Math.acos(q.clamp(s*Y.x+e*Y.y+t*Y.z,-1,1));if(Q<N.landBoostRad){const se=1-Q/N.landBoostRad,he=se*se*(3-2*se);if(N.elevMode==="bay"?A=Math.max(A,.14+he*.18):A=Math.max(A,.16+he*.24),(N.elevMode==="crater"||N.elevMode==="basin")&&Q<.11){const we=1-Q/.11;I=Math.max(I,we*we*.0024)}}}const k=1-Math.abs(Ot(s*5.6+1.9,e*5.6-3.4,t*5.6+.7)),G=Math.max(0,A-.12)*Math.pow(Math.max(0,k),2.1)+b*.28,O=zn(s*8.2+4.1,e*8.2-2.3,t*8.2+.9,3);return{cont:A,ridge:k,highlandRidge:G,craterDepression:I,forestFactor:M,waterFactor:T,ashFactor:E,reefFactor:F,borderMountain:b,forestClump:O,nation:R}}function lv(s,e,t,n=[0,1,0]){const i=new w(n[0],n[1],n[2]).normalize(),r=i.x,o=i.y,a=i.z,l=s==="p1"?Io([r,o,a]):null,c=Ji(e,t),h=Ji(e,t),u=Ji(e,t),d=c.getContext("2d").createImageData(e,t),f=h.getContext("2d").createImageData(e,t),g=u.getContext("2d").createImageData(e,t),_=d.data,m=f.data,p=g.data,y=new Float32Array(e),S=new Float32Array(e);for(let M=0;M<e;M++){const v=(M+.5)/e*Math.PI*2;y[M]=Math.cos(v),S[M]=Math.sin(v)}const x=s==="p4"?iv([r,o,a]):null;for(let M=0;M<t;M++){const v=(M+.5)/t*Math.PI,b=Math.sin(v),A=Math.cos(v);for(let F=0;F<e;F++){const I=-y[F]*b,k=S[F]*b,G=I*r+A*o+k*a,O=(M*e+F)*4;let L=0,N=0,Y=0,Q=0,se=0,he=0,we=.5;if(s==="p4"){let V=-2,J=-2,ie=0;for(let ce=0;ce<x.length;ce++){const ae=x[ce].h,Ue=I*ae.x+A*ae.y+k*ae.z;Ue>V?(J=V,V=Ue,ie=ce):Ue>J&&(J=Ue)}const de=x[ie],fe=Math.acos(Math.min(1,V)),xe=Math.atan2(I*de.e2.x+A*de.e2.y+k*de.e2.z,I*de.e1.x+A*de.e1.y+k*de.e1.z);let Te=Math.abs(Math.cos(fe*95));Te*=Te,Te*=Te,Te*=Te,Te*=Te;const ye=Kt(.008,.02,fe);let Se=Math.abs(Math.cos(xe*12));Se*=Se,Se*=Se,Se*=Se,Se*=Se,Se*=Se;const H=Se*Kt(.02,.07,fe)*(1-Kt(.45,.9,fe)),tt=1-Kt(0,.014,V-J),We=B(Math.floor(I*140),Math.floor(A*140),Math.floor(k*140)),Je=B(Math.floor(I*700)+3,Math.floor(A*700),Math.floor(k*700)),Ee=Ot(I*6,A*6,k*6)*.5+.5,ot=(Je>.6?1:0)*(.35+.65*We)*(.4+.6*Ee),Re=Te*.85*ye+H*.8+tt*1.1+ot*.45;let D,C,j;We<.33?(D=1,C=.74,j=.32):We<.66?(D=1,C=.88,j=.62):(D=1,C=.52,j=.18),Q=Re*D,se=Re*C,he=Re*j;const oe=.11+.1*We+.05*Ee+.06*Te*ye;L=oe*1.05,N=oe,Y=oe*.95,we=.4+.3*We+.2*Te}else if(s==="p2"){let V=zn(I*2.2+5.1,A*2.2,k*2.2,5);G>.62&&(V=Math.max(V,.14+(G-.62)*1.4));const J=V>.02,ie=(V-.02)/.06,de=Math.exp(-ie*ie),fe=B(Math.floor(I*520),Math.floor(A*520),Math.floor(k*520)),xe=B(Math.floor(I*90)+7,Math.floor(A*90),Math.floor(k*90)),Te=Ot(I*7+2,A*7,k*7)*.5+.5;if(G>.48&&G<=.79){const ye=Kt(.48,.58,G)*(1-Kt(.75,.795,G)),Se=Ot(I*14+3,A*14,k*14)*.5+.5,H=.23+.14*Se,tt=.1+.06*Se,We=.06+.03*Se;L=.08*(1-ye)+H*ye,N=.08*(1-ye)+tt*ye,Y=.09*(1-ye)+We*ye,Q=0,se=0,he=0,we=.45+.25*Se}else if(G>.79&&G<=.942){const ye=fe>.86?.14+.12*xe:0;Q=ye*.92,se=ye*(xe>.5?.48:.2),he=ye*.14,L=.05+.03*xe,N=.055+.03*xe,Y=.065+.03*xe,we=.48+.2*xe}else if(J){const ye=G>.942?.85:0,Se=(fe>.52?1:0)*(de*1.1+.14*Te+ye)*(.42+.58*xe);let H,tt,We;Te>.62?(H=1,tt=.16,We=.62):xe>.5?(H=.1,tt=.85,We=1):(H=.65,tt=.8,We=1),Q=Se*H,se=Se*tt,he=Se*We,L=.07+.04*xe,N=.08+.04*xe,Y=.1+.05*xe,we=.55+V*.4}else{const ye=Kt(-.35,.02,V);L=.01+.02*ye,N=.03+.04*ye,Y=.06+.06*ye,we=.3}}else if(s==="p3"){let V=zn(I*1.8+11,A*1.8,k*1.8,5);G>.84&&(V=Math.max(V,.08+(G-.84)*.8));const J=1-Math.abs(Ot(I*7+3,A*7,k*7)),ie=Math.max(0,V-.12)*J*J*3*(G>.9?.2:1),de=Ot(I*14,A*14,k*14);if(V>0)we=.45+V*.6+ie*.6,A<-.9||A>.93?(L=.9,N=.93,Y=.96):ie>.6?(L=.88,N=.9,Y=.94):ie>.25?(L=.36,N=.31,Y=.26):de>.3&&G<.9?(L=.07,N=.2,Y=.07):(L=.15+.04*de,N=.34+.05*de,Y=.11),B(Math.floor(I*300),Math.floor(A*300),Math.floor(k*300))>.996&&(Q=.9,se=.62,he=.3);else{const fe=Kt(-.25,0,V);L=.02+.03*fe,N=.08+.12*fe,Y=.22+.13*fe,(A<-.92||A>.94)&&(L=.88,N=.92,Y=.96),we=.3+V*.3}}else{const{cont:V,highlandRidge:J,forestFactor:ie,ashFactor:de,reefFactor:fe,borderMountain:xe,nation:Te}=Gl(I,A,k,l),ye=Ot(I*11,A*11,k*11),Se=Ot(I*28+2.1,A*28,k*28-1.4)*.5+.5,H=zn(I*6.5-3.2,A*6.5+1.4,k*6.5,3)*.5+.5;if(Te==="ash"&&V>0){const tt=.125+.085*Se+.03*ye,We=Math.min(1,J*2.2+xe*.55);L=q.lerp(tt*1.06,.24,We*.6),N=q.lerp(tt*.98,.22,We*.6),Y=q.lerp(tt*1.04,.24,We*.6);const Ee=Math.pow(Math.max(0,1-Math.abs(Ot(I*18+4.1,A*18,k*18-2.3))),16)*de*.72;L=Math.min(1,L+Ee*.32),N=Math.min(1,N+Ee*.07),Q=Ee*.78,se=Ee*.16,he=Ee*.02,we=.58+de*.28+J*.42}else if(V>0)if(Te==="water"){const tt=Kt(0,.032,V);L=q.lerp(.84,.15+.04*Se,tt),N=q.lerp(.79,.42+.08*H,tt),Y=q.lerp(.61,.18+.03*Se,tt),we=.46+V*1.2}else{const tt=Kt(.28,.78,H);L=q.lerp(.088,.145,tt)+.035*Se,N=q.lerp(.235,.355,tt)+.055*ye,Y=q.lerp(.105,.148,tt)+.022*Se;const We=Kt(.55,.85,Se)*(1-Math.min(1,J*3));L=q.lerp(L,.22,We*.42),N=q.lerp(N,.4,We*.38);const Je=Math.min(1,J*2.6+xe*.72);L=q.lerp(L,.28,Je*.65),N=q.lerp(N,.31,Je*.58),Y=q.lerp(Y,.29,Je*.62);const Ee=Kt(.22,.44,J);L=q.lerp(L,.68,Ee*.52),N=q.lerp(N,.74,Ee*.52),Y=q.lerp(Y,.72,Ee*.52);const ot=Math.pow(Math.max(0,1-Math.abs(Ot(I*13+1.2,A*13-.7,k*13+2.4))),22);if(ot>.22&&J<.14){const ce=(ot-.22)*1.1;L=q.lerp(L,.04,ce),N=q.lerp(N,.28,ce),Y=q.lerp(Y,.34,ce)}const Re=B(Math.floor(I*260),Math.floor(A*260),Math.floor(k*260)),D=Kt(.45,.85,H)*(Re>.965?.36:0),C=ot>.3?(ot-.3)*.28:0,j=(D+C)*ie*(1-Je*.85),oe=Se>.52;Q=j*(oe?.22:.04),se=j*(oe?.12:.34),he=j*.38,we=.48+V*.58+J*.45}else{const tt=Kt(-.36,-.06,V),We=q.lerp(.031,.055,tt),Je=q.lerp(.149,.263,tt),Ee=q.lerp(.29,.459,tt),ot=Kt(-.085,0,V),Re=Math.min(1,Math.max(fe*.92,ot*.85)),D=Kt(.45,.98,Re),C=q.lerp(.11,.22,D),j=q.lerp(.639,.839,D),oe=q.lerp(.62,.769,D);L=q.lerp(We,C,Re),N=q.lerp(Je,j,Re),Y=q.lerp(Ee,oe,Re);const ce=Re*Kt(.55,.95,Se)*.26;Q=ce*.04,se=ce*.34,he=ce*.38,we=.28+Re*.06}}_[O]=L*255,_[O+1]=N*255,_[O+2]=Y*255,_[O+3]=255,m[O]=Q*255,m[O+1]=se*255,m[O+2]=he*255,m[O+3]=255;const U=we*255;p[O]=U,p[O+1]=U,p[O+2]=U,p[O+3]=255}}c.getContext("2d").putImageData(d,0,0),h.getContext("2d").putImageData(f,0,0),u.getContext("2d").putImageData(g,0,0);const R=new xn(c);R.colorSpace=Gt,R.anisotropy=8;const E=new xn(h);E.colorSpace=Gt,E.anisotropy=8;const T=new xn(u);return{map:R,emissiveMap:E,bumpMap:T}}function cv(s,e=1024,t=512,n=[0,1,0]){const i=new w(n[0],n[1],n[2]).normalize(),r=i.x,o=i.y,a=i.z,l=Ji(e,t),c=l.getContext("2d"),h=c.createImageData(e,t),u=h.data,d={p1:{lo:.11,hi:.39,col:[1,1,1],k:.9,cyclonic:!0},p2:{lo:-.18,hi:.25,col:[.2,.22,.28],k:.9},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[s]||{lo:.1,hi:.4,col:[1,1,1],k:.7},f=d.cyclonic?[{v:new w(-.45,.42,.78).normalize(),spin:2.35,radius:.55},{v:new w(.62,.54,-.57).normalize(),spin:-2.15,radius:.48},{v:new w(.18,-.46,.87).normalize(),spin:2.05,radius:.5},{v:new w(-.74,-.35,-.57).normalize(),spin:-2.25,radius:.52},{v:new w(.78,-.18,.6).normalize(),spin:1.85,radius:.44}]:null,g=new Float32Array(e),_=new Float32Array(e);for(let p=0;p<e;p++){const y=(p+.5)/e*Math.PI*2;g[p]=Math.cos(y),_[p]=Math.sin(y)}for(let p=0;p<t;p++){const y=(p+.5)/t*Math.PI,S=Math.sin(y),x=Math.cos(y);for(let R=0;R<e;R++){const E=-g[R]*S,T=_[R]*S,M=E*r+x*o+T*a;let v=0;if(d.cyclonic&&f){let A=E,F=x,I=T,k=0;for(let Y=0;Y<f.length;Y++){const Q=f[Y],se=A*Q.v.x+F*Q.v.y+I*Q.v.z;if(se>.62){const he=Math.acos(Math.min(1,se)),we=Math.exp(-Math.pow(he/Q.radius,2)*2.6),U=Q.spin*we*(1-Math.min(1,he/Q.radius)*.4),V=Math.cos(U),J=Math.sin(U),ie=Q.v.x,de=Q.v.y,fe=Q.v.z,xe=de*I-fe*F,Te=fe*A-ie*I,ye=ie*F-de*A,Se=se;A=A*V+xe*J+ie*Se*(1-V),F=F*V+Te*J+de*Se*(1-V),I=I*V+ye*J+fe*Se*(1-V),k+=we*.24}}const G=Ot(A*2.2+1.5,F*4.5,I*2.2-.8)*.42,O=zn(A*3.1+14+G,F*5.6,I*3.1-G,5),L=Ot(A*9.5+3,F*12,I*9.5)*.08,N=O+k*.55+L;v=Kt(d.lo,d.hi,N)*d.k}else{const A=Ot(E*2+4,x*2,T*2)*.35,F=zn(E*3.2+20+A,x*5,T*3.2-A,5);v=Kt(d.lo,d.hi,F)*d.k,d.clearNorth&&(v*=1-Kt(.78,.9,M))}const b=(p*e+R)*4;u[b]=d.col[0]*255,u[b+1]=d.col[1]*255,u[b+2]=d.col[2]*255,u[b+3]=v*255}}c.putImageData(h,0,0);const m=new xn(l);return m.colorSpace=Gt,m.anisotropy=8,m}function hv(s,e=.06){s.onBeforeCompile=t=>{t.uniforms.uSunViewPos=pl.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},s.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function uv(){const s=Ji(128,128),e=s.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(255, 255, 255, 0.92)"),t.addColorStop(.35,"rgba(242, 248, 255, 0.56)"),t.addColorStop(.7,"rgba(215, 232, 255, 0.18)"),t.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new xn(s);return n.needsUpdate=!0,n}function Sh(s,e){return new on({uniforms:{uCloudMap:{value:s},uSunPosition:{value:new w(0,0,0)},uPlanetCenter:{value:new w(0,0,0)},uAmbientColor:{value:new re(e.ambient)},uSunColor:{value:new re(e.sunlit)},uHorizonColor:{value:new re(e.horizon)},uOpacity:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1,side:Zt})}function dv(){const s=new an(28e3,48,32),e=new on({uniforms:{uLocalUp:{value:new w(0,1,0)},uSunDir:{value:new w(0,.2,1)},uZenithColor:{value:new re(1991880)},uMidColor:{value:new re(5155054)},uHorizonColor:{value:new re(16760171)},uSunGlowColor:{value:new re(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:yn}),t=new dt(s,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t}function fv(s,e=157.5){const t=s.localRadius,n=new Yt;n.name=`${s.id}_Orbital_Globe`;const i=s.capLocalDir?s.capLocalDir.clone().normalize():new w(0,1,0),r=[i.x,i.y,i.z],o={p4:[2048,1024],p2:[1536,768],p1:[1536,768]}[s.id]||[1024,512],{map:a,emissiveMap:l,bumpMap:c}=lv(s.id,o[0],o[1],r),h={p1:{ei:.56,rough:.72,metal:.06,bump:1.45,floor:0},p2:{ei:1.75,rough:.55,metal:.35,bump:.6,floor:.04},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[s.id],u=new Oe({map:a,emissiveMap:l,emissive:new re(1,1,1),emissiveIntensity:h.ei,roughness:h.rough,metalness:h.metal,bumpMap:c,bumpScale:h.bump});hv(u,h.floor);const d=new dt(new an(t,128,128),u);d.name=`${s.id}_Orbital_Surface`,n.add(d);const f=s.id==="p1"?[1536,768]:[1024,512],g=cv(s.id,f[0],f[1],r),_={p1:{ambient:4942728,sunlit:16777215,horizon:10279148},p2:{ambient:860724,sunlit:6205136,horizon:1066082},p3:{ambient:8165566,sunlit:16777215,horizon:16039028},p4:{ambient:6434840,sunlit:16763016,horizon:14446130}}[s.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},m=Sh(g,_),p=new dt(new an(t*1.012,128,128),m);p.name=`${s.id}_Low_Cloud_Shell`,n.add(p);const y=Sh(g,_),S=new dt(new an(t*1.024,128,128),y);S.name=`${s.id}_High_Cloud_Shell`,n.add(S);const x=new Yt;x.name=`${s.id}_Lower_Cloud_Puffs_Group`,x.visible=!1,n.add(x);const R=380,E=new Float32Array(R*3),T=18/e,M=45/e,v=new _t().setFromUnitVectors(new w(0,1,0),i),b=new w;for(let G=0;G<R;G++){const O=Math.acos(1-B(G,2,17)*.42),L=B(G,9,5)*Math.PI*2,N=T+B(G,4,13)*(M-T),Y=t+N;b.set(Y*Math.sin(O)*Math.cos(L),Y*Math.cos(O),Y*Math.sin(O)*Math.sin(L)),b.applyQuaternion(v),E[G*3]=b.x,E[G*3+1]=b.y,E[G*3+2]=b.z}const A=new Nt;A.setAttribute("position",new St(E,3));const F=new An({map:uv(),color:_.sunlit,size:46,transparent:!0,opacity:0,depthWrite:!1,fog:!1,sizeAttenuation:!0}),I=new Rn(A,F);x.add(I);const k=Ou(s,t,s.id==="p4"?1.034:1.052);return n.add(k),{group:n,surfaceMesh:d,upperCloudMesh:S,lowerCloudGroup:x,lowerCloudMesh:p,lowerCloudPuffs:I,cloudDeckPalette:_,atmosphere:k}}function Ou(s,e,t=1.045){const n=new an(e*t,96,96),i={p1:[6083327,9627391],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[s.id]||[6866175,16755285],r=new on({uniforms:{uColorDay:{value:new re(i[0])},uColorHorizon:{value:new re(i[1])},uSunPosition:{value:new w(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:mn,side:ni}),o=new dt(n,r);return o.name=`${s.id}_Fresnel_Atmosphere`,o}function pv(s,e=1400){const t=s.localRadius,n=s.id==="p4",i=256,r=Ji(i,i),o=Ji(i,i),a=r.getContext("2d"),l=o.getContext("2d");a.fillStyle=n?"#2a2c31":"#111821",a.fillRect(0,0,i,i),l.fillStyle="#000000",l.fillRect(0,0,i,i);const c=n?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let y=4;y<i;y+=8)for(let S=3;S<i;S+=6)Math.random()<(n?.55:.42)&&(l.fillStyle=c[Math.random()*c.length|0],l.fillRect(S,y,3,4));const h=new xn(r);h.colorSpace=Gt;const u=new xn(o);u.colorSpace=Gt;const d=new en(1,1,1);d.translate(0,.5,0);const f=new Oe({map:h,emissiveMap:u,emissive:new re(1,1,1),emissiveIntensity:n?1.6:2,roughness:.42,metalness:.7}),g=new gt(d,f,e);g.name=`${s.id}_Horizon_Tower_Band`;const _=new zt,m=new w(0,1,0),p=new w;for(let y=0;y<e;y++){const S=.118+Math.pow(B(y,3,9),.85)*.38,x=B(y,7,1)*Math.PI*2;p.set(Math.sin(S)*Math.cos(x),Math.cos(S),Math.sin(S)*Math.sin(x)),_.position.copy(p).multiplyScalar(t*.998),_.quaternion.setFromUnitVectors(m,p),_.rotateY(B(y,2,2)*Math.PI);const R=t*(.0024+.0042*B(y,5,5)),E=t*(.0024+.0042*B(y,6,8)),T=t*(.006+.025*Math.pow(B(y,9,4),1.6));_.scale.set(R,T,E),_.updateMatrix(),g.setMatrixAt(y,_.matrix)}return g.instanceMatrix.needsUpdate=!0,g}function mv(s,e,t,n){s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.updateMatrixWorld(!0);const i=n==="p2",r=new w(0,1,0),o=e/t,a=i?124:152;function l(y,S,x,R=!1){const E=Math.sqrt(y*y+x*x),T=Math.min(1.18,E/(o*.94)),M=Math.atan2(x,y),v=Math.sin(T),b=v*Math.cos(M),A=Math.cos(T),F=v*Math.sin(M);let I=S;if(R){const O=q.smoothstep(E,a*.65,a*1);I=q.lerp(S,i?-36:-18,O)}const k=n==="p3"?14.5:i?16.5:.4,G=Math.max(o*.9,o+I+k);return{px:G*b,py:G*A-o,pz:G*F,nx:b,ny:A,nz:F}}const c=new lt().copy(s.matrixWorld).invert(),h=[],u=new Map;s.traverse(y=>{if(y.isMesh&&y.geometry){const S=new lt().multiplyMatrices(c,y.matrixWorld);h.push({mesh:y,initRootMat:S}),u.set(y.geometry,(u.get(y.geometry)||0)+1)}});for(const{mesh:y,initRootMat:S}of h)y.parent!==s&&s.attach(y),S.decompose(y.position,y.quaternion,y.scale),y.updateMatrix();const d=new w,f=new _t,g=new w,_=new w,m=new _t,p=new w;for(const{mesh:y,initRootMat:S}of h){if(i){if(/^NC_FarHorizon/.test(y.name)){y.visible=!1;continue}if(/^NC_Canyon_Skyscraper/.test(y.name)&&(d.setFromMatrixPosition(S),Math.hypot(d.x,d.z)>128)){y.visible=!1;continue}}const x=u.get(y.geometry)||1,R=/Terrain|River|Ground|Forest|Canal/.test(y.name);if(x===1||R){x>1&&(y.geometry=y.geometry.clone());const E=y.geometry.attributes.position,T=new lt().copy(S).invert();for(let M=0;M<E.count;M++){p.fromBufferAttribute(E,M).applyMatrix4(S);const v=l(p.x,p.y,p.z,R);p.set(v.px,v.py,v.pz).applyMatrix4(T),E.setXYZ(M,p.x,p.y,p.z)}E.needsUpdate=!0,y.geometry.computeVertexNormals(),y.geometry.computeBoundingBox(),y.geometry.computeBoundingSphere()}else{if(S.decompose(d,f,g),i&&/^NC_Canyon_Skyscraper/.test(y.name)){const T=Math.hypot(d.x,d.z),M=1-q.smoothstep(T,95,128)*.46;g.y*=M}const E=l(d.x,d.y,d.z,!1);_.set(E.nx,E.ny,E.nz).normalize(),m.setFromUnitVectors(r,_),y.position.set(E.px,E.py,E.pz),y.quaternion.copy(m).multiply(f),y.scale.copy(g),y.updateMatrix()}}s.scale.setScalar(t),s.position.set(0,e,0),s.updateMatrixWorld(!0)}const mt=1/3.5,Xn=new w(0,1,0);function bh(s,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,32);i.addColorStop(0,s),i.addColorStop(.45,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new xn(t);return r.needsUpdate=!0,r}function Bu(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new w(1,0,0):new w(0,0,1),n=new w().crossVectors(e,t).normalize(),i=new w().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function gv(){const s=[],e=new Pn([new w(0,0,0),new w(.05,.35,-.02),new w(-.04,.72,.04),new w(.02,1,-.01)]);s.push(new Un(e,6,.075,5,!1).toNonIndexed());const t=[[new w(.02,.48,.01),new w(.32,.76,.14)],[new w(-.02,.62,.03),new w(-.28,.92,-.18)],[new w(0,.78,.02),new w(.18,1.12,-.22)],[new w(.02,.56,-.02),new w(-.22,.82,.25)]];for(const[i,r]of t){const o=i.clone().lerp(r,.5).add(new w(0,.06,0)),a=new Pn([i,o,r]);s.push(new Un(a,4,.026,4,!1).toNonIndexed())}const n=Bt(s,!1);return n.computeVertexNormals(),n}function _v(){const s=[];for(let a=-2;a<=2;a++){const l=new Qn(.36,.95,2,3);l.translate(a*.14,.48,Math.sin(a*.9)*.06),l.rotateZ(-a*.22),s.push(l.toNonIndexed())}const e=Bt(s,!1);e.computeVertexNormals();const t=[];for(let a=0;a<6;a++){const l=a/6*Math.PI*2,c=a===0?0:.28,h=a===0?1:.55+B(a,3,7)*.45,u=new Jt(.11,.08,h,6,1);u.translate(Math.cos(l)*c,h*.5,Math.sin(l)*c),u.rotateZ((B(a,2,5)-.5)*.22),t.push(u.toNonIndexed())}const n=Bt(t,!1);n.computeVertexNormals();const i=[],r=new Jt(.32,.4,.28,8);r.translate(0,.14,0),i.push(r.toNonIndexed());for(let a=0;a<10;a++){const l=a/10*Math.PI*2,c=new gn(.065,.72,4);c.translate(0,.36,0),c.rotateX(.55),c.rotateY(l),c.translate(Math.cos(l)*.22,.2,Math.sin(l)*.22),i.push(c.toNonIndexed())}const o=Bt(i,!1);return o.computeVertexNormals(),{fanGeo:e,tubeGeo:n,anemoneGeo:o}}function xv(){const s=[];for(let t=0;t<2;t++){const n=new Qn(.24,1,2,8);n.translate(0,.5,0);const i=n.attributes.position;for(let r=0;r<i.count;r++){const o=i.getY(r),a=i.getX(r)+Math.sin(o*Math.PI*3)*.14,l=Math.cos(o*Math.PI*2.5+t*1.57)*.1;i.setXYZ(r,a,o,l)}n.rotateY(t*Math.PI*.5),n.computeVertexNormals(),s.push(n.toNonIndexed())}const e=Bt(s,!1);return e.computeVertexNormals(),e}function vv(s,e,t,n){const i=Bu(e.capDir),r=new Yt;r.name="Pandora_Biome_AshPeople";const o=(V,J,ie=0)=>{const de=i.upDir.clone().addScaledVector(i.e1,V).addScaledVector(i.e2,J).normalize(),fe=t(de.x,de.y,de.z);return{pos:de.clone().multiplyScalar(s+fe.elev+ie),normal:de,elev:fe.elev,nation:fe.nation}},a=[];for(let V=0;V<18;V++){const J=V/18*Math.PI*2+B(V,3,9)*.25,ie=[];for(let xe=0;xe<=8;xe++){const Te=xe/8,ye=.018+Te*.16,Se=Math.sin(Te*7+V*1.3)*.018,H=Math.cos(J)*ye-Math.sin(J)*Se,tt=Math.sin(J)*ye+Math.cos(J)*Se;ie.push(o(H,tt,8e-4).pos)}const de=new Pn(ie),fe=new Un(de,14,(.0014+V%3*5e-4)*mt,4,!1).toNonIndexed();a.push(fe)}const l=new Oe({color:3871240,emissive:16726792,emissiveIntensity:.42,roughness:.35});l.userData.animatedEmissive=!0,n.push({mat:l,dayColor:5117962,nightColor:16736792,dayEmissive:14166022,nightEmissive:16729608,dayEI:.42,nightEI:2.55,pulsePhase:.4});const c=new dt(Bt(a,!1),l);c.name="Pandora_Ash_Lava_Fissures",r.add(c);const h=new Oe({vertexColors:!0,roughness:.94,metalness:.06}),u=[{lx:-.045,lz:.032,rad:.145*mt,h:.175*mt},{lx:.072,lz:-.048,rad:.115*mt,h:.135*mt},{lx:-.025,lz:-.095,rad:.105*mt,h:.118*mt}],d=[];u.forEach((V,J)=>{const ie=o(V.lx,V.lz,-.002),de=new Jt(V.rad*.28,V.rad,V.h,16,8,!1);de.translate(0,V.h*.5,0);const fe=de.attributes.position,xe=new Float32Array(fe.count*3);for(let Se=0;Se<fe.count;Se++){let H=fe.getX(Se),tt=fe.getY(Se);const We=fe.getZ(Se),Je=Ot(H*80+J*3.1,tt*50,We*80),Ee=tt/V.h,ot=1+.22*Je*(1-Ee*.4);H*=ot;const Re=We*ot;Ee>.92&&Math.hypot(H,Re)<V.rad*.24&&(tt-=V.h*.14),fe.setXYZ(Se,H,tt,Re);const D=.1+.07*(1-Ee)+.04*Math.max(0,Je);xe[Se*3]=D,xe[Se*3+1]=D*.95,xe[Se*3+2]=D*.98}de.setAttribute("color",new St(xe,3)),de.computeVertexNormals();const Te=new dt(de,h);Te.position.copy(ie.pos),Te.quaternion.setFromUnitVectors(Xn,ie.normal),Te.name=`Pandora_Ash_Volcano_${J+1}`,r.add(Te);const ye=new dt(new Ul(V.rad*.22,12),l);ye.rotateX(-Math.PI*.5),ye.position.copy(ie.pos).addScaledVector(ie.normal,V.h*.88),ye.quaternion.copy(Te.quaternion).multiply(new _t().setFromAxisAngle(new w(1,0,0),-Math.PI*.5)),r.add(ye),d.push({basePos:ie.pos.clone().addScaledVector(ie.normal,V.h*.94),normal:ie.normal.clone(),maxH:(.14+J*.03)*mt,phase:J*2.1})});const f=36,g=d.length*f,_=new Float32Array(g*3),m=new Nt;m.setAttribute("position",new St(_,3));const p=new An({size:13.5,map:bh("rgba(52, 48, 50, 0.72)","rgba(28, 25, 26, 0.28)"),color:3880502,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),y=new Rn(m,p);y.frustumCulled=!1,y.name="Pandora_Ash_Volcano_Smoke",r.add(y);const S=1400,x=new Float32Array(S*3),R=[];for(let V=0;V<S;V++){const J=B(V,3,19)*Math.PI*2,ie=Math.sqrt(B(V,7,11))*.24,de=o(Math.cos(J)*ie,Math.sin(J)*ie,(.006+B(V,5,2)*.22)*mt);x[V*3]=de.pos.x,x[V*3+1]=de.pos.y,x[V*3+2]=de.pos.z,R.push({dir:de.normal,baseAlt:de.pos.length(),phase:B(V,9,4)*Math.PI*2,speed:.04+B(V,2,8)*.06})}const E=new Nt;E.setAttribute("position",new St(x,3));const T=new An({size:.58,map:bh("rgba(160, 150, 145, 0.85)","rgba(90, 80, 75, 0.25)"),color:9471360,transparent:!0,opacity:.52,depthWrite:!1,sizeAttenuation:!0}),M=new Rn(E,T);M.frustumCulled=!1,M.name="Pandora_Ash_Floating_Cinders",r.add(M);const v=440,b=gv(),A=new Oe({color:1775896,roughness:.94,metalness:.05}),F=[],I=new zt;for(let V=0;V<v*2&&F.length<v;V++){const J=B(V,4,17)*Math.PI*2,ie=.045+Math.sqrt(B(V,8,3))*.24,de=o(Math.cos(J)*ie,Math.sin(J)*ie,-5e-4);if(de.nation!=="ash")continue;const fe=(.018+B(V,2,11)*.028)*mt;I.position.copy(de.pos),I.quaternion.setFromUnitVectors(Xn,de.normal),I.rotateY(B(V,6,9)*Math.PI*2),I.rotateX((B(V,1,5)-.5)*.22),I.scale.set(fe,fe,fe),I.updateMatrix(),F.push(I.matrix.clone())}const k=new gt(b,A,Math.max(1,F.length));k.name="Pandora_Ash_Charred_Trees",k.frustumCulled=!1,F.forEach((V,J)=>k.setMatrixAt(J,V)),k.instanceMatrix.needsUpdate=!0,r.add(k);const G=new Oe({color:12167830,roughness:.78}),O=new Oe({color:2366745,roughness:.92}),L=new Oe({color:16755256,emissive:16734740,emissiveIntensity:1.15,roughness:.35});L.userData.animatedEmissive=!0,n.push({mat:L,dayColor:16755256,nightColor:16768376,dayEmissive:16734740,nightEmissive:16738328,dayEI:.95,nightEI:2.65,pulsePhase:1.1});const N=[],Y=[],Q=[];for(let V=0;V<6;V++){const J=V/6*Math.PI*2+.3,ie=.022,de=o(Math.cos(J)*ie,Math.sin(J)*ie,2e-4),fe=new _t().setFromUnitVectors(Xn,de.normal);for(let Te=-1;Te<=1;Te+=2){const ye=new Pn([new w(Te*.012*mt,0,0),new w(Te*.018*mt,.018*mt,.002*mt),new w(0,.032*mt,0)]),Se=new Un(ye,8,.0018*mt,5,!1).toNonIndexed();Se.applyQuaternion(new _t().setFromAxisAngle(Xn,J)),Se.applyQuaternion(fe),Se.translate(de.pos.x,de.pos.y,de.pos.z),Y.push(Se)}const xe=o(Math.cos(J+.25)*.011,Math.sin(J+.25)*.011,5e-4);Q.push(xe)}for(let V=0;V<16;V++){const J=V/16*Math.PI*2+B(V,2,7)*.18,ie=.018+V%3*.008,de=o(Math.cos(J)*ie,Math.sin(J)*ie,0),fe=new gn(.0075*mt,.013*mt,6);fe.translate(0,.006*mt,0);const xe=fe.toNonIndexed();xe.rotateY(B(V,4,1)*Math.PI),xe.applyQuaternion(new _t().setFromUnitVectors(Xn,de.normal)),xe.translate(de.pos.x,de.pos.y,de.pos.z),N.push(xe)}const se=new dt(Bt(Y,!1),G);se.name="Pandora_Ash_Giant_Bone_Totems";const he=new dt(Bt(N,!1),O);he.name="Pandora_Ash_Tribal_Huts",r.add(se,he);const we=[];Q.forEach(V=>{const J=new gn(.003*mt,.009*mt,6).toNonIndexed();J.translate(0,.004*mt,0),J.applyQuaternion(new _t().setFromUnitVectors(Xn,V.normal)),J.translate(V.pos.x,V.pos.y,V.pos.z),we.push(J)});const U=new dt(Bt(we,!1),L);return U.name="Pandora_Ash_Bonfires",r.add(U),{group:r,update(V,J){const ie=m.attributes.position;d.forEach((fe,xe)=>{for(let Te=0;Te<f;Te++){const ye=xe*f+Te,Se=(V*.24+fe.phase+Te/f)%1,H=Se*fe.maxH,tt=Se*.025*mt;ie.setXYZ(ye,fe.basePos.x+fe.normal.x*H+Math.sin(ye+V*.5)*tt,fe.basePos.y+fe.normal.y*H+Math.cos(ye)*tt*.5,fe.basePos.z+fe.normal.z*H+Math.cos(ye+V*.4)*tt)}}),ie.needsUpdate=!0,p.color.setRGB(q.lerp(.24,.42,J),q.lerp(.22,.16,J),q.lerp(.23,.14,J));const de=E.attributes.position;for(let fe=0;fe<S;fe++){const xe=R[fe],Te=Math.sin(V*xe.speed+xe.phase)*.004,ye=xe.baseAlt+Math.cos(V*.4+xe.phase)*.003;de.setXYZ(fe,xe.dir.x*ye+Te,xe.dir.y*ye,xe.dir.z*ye-Te)}de.needsUpdate=!0}}}function Mv(s,e,t,n){const i=Bu(e.capDir),r=new Yt;r.name="Pandora_Biome_MetkayinaReef";const o=(L,N,Y=0)=>{const Q=i.upDir.clone().addScaledVector(i.e1,L).addScaledVector(i.e2,N).normalize();return{pos:Q.clone().multiplyScalar(s+Y),normal:Q}},a=(L,N,Y=0)=>{const Q=i.upDir.clone().addScaledVector(i.e1,L).addScaledVector(i.e2,N).normalize(),se=t(Q.x,Q.y,Q.z);return{pos:Q.clone().multiplyScalar(s+se.elev+Y),normal:Q,elev:se.elev,nation:se.nation}},l=new Oe({color:6045222,roughness:.85}),c=new Oe({color:7758908,roughness:.9}),h=new Oe({color:16764006,emissive:16746532,emissiveIntensity:.55,roughness:.35});h.userData.animatedEmissive=!0,n.push({mat:h,dayColor:16755268,nightColor:16769160,dayEmissive:16742178,nightEmissive:16747560,dayEI:.45,nightEI:2.55,pulsePhase:1.7});const u=[],d=[],f=[],g=[],_=[];for(let L=0;L<18;L++){const N=L<6?.024:.052+L%3*.012,Y=(L<6?L/6*Math.PI*2:(L-6)/12*Math.PI*2)+B(L,4,3)*.25,Q=Math.cos(Y)*N,se=Math.sin(Y)*N,he=o(Q,se,5e-4),we=new _t().setFromUnitVectors(Xn,he.normal).multiply(new _t().setFromAxisAngle(Xn,Y+B(L,2,7))),U=(.018+B(L,5,1)*.008)*mt,V=U*1.25;_.push({pos:he.pos.clone(),normal:he.normal.clone(),qOri:we});const J=new en(U,.0016*mt,V).toNonIndexed();J.translate(0,.0012*mt,0),J.applyQuaternion(we),J.translate(he.pos.x,he.pos.y,he.pos.z),u.push(J);for(let xe=-1;xe<=1;xe+=2){const Te=new Pn([new w(xe*U*.48,-.0015*mt,-V*.72),new w(xe*U*.56,8e-4*mt,0),new w(xe*U*.48,-.0015*mt,V*.72)]),ye=new Un(Te,8,.0014*mt,5,!1).toNonIndexed();ye.applyQuaternion(we),ye.translate(he.pos.x,he.pos.y,he.pos.z),u.push(ye)}const ie=U*.65,de=new Jt(.001,U*.56,ie,8,1);de.scale(.95,1,1.25),de.translate(0,ie*.5+.0018*mt,0);const fe=de.toNonIndexed();fe.applyQuaternion(we),fe.translate(he.pos.x,he.pos.y,he.pos.z),d.push(fe);for(let xe=0;xe<(L%2===0?2:1);xe++){const Te=xe===0?1:-1,ye=new Jt(4e-4*mt,6e-4*mt,.007*mt,5).toNonIndexed();ye.translate(Te*U*.45,.004*mt,V*.52),ye.applyQuaternion(we),ye.translate(he.pos.x,he.pos.y,he.pos.z),u.push(ye);const Se=new an(.0014*mt,6,5).toNonIndexed();Se.translate(Te*U*.45,.008*mt,V*.52),Se.applyQuaternion(we),Se.translate(he.pos.x,he.pos.y,he.pos.z),f.push(Se)}L<14&&g.push({basePos:he.pos.clone().add(new w(U*.72,-2e-4*mt,0).applyQuaternion(we)),normal:he.normal.clone(),qOri:we,phase:L*.9})}for(let L=0;L<_.length;L++){const N=_[L],Y=L<5?L+1:L===5?0:L<17?L+1:6,Q=_[Y],se=N.pos.distanceTo(Q.pos);if(se>.005*mt&&se<.16*mt){const he=N.pos.clone().add(Q.pos).multiplyScalar(.5).normalize().multiplyScalar(s+9e-4),we=new en(.0045*mt,.0011*mt,se).toNonIndexed(),U=Q.pos.clone().sub(N.pos).normalize(),V=he.clone().normalize(),J=new w().crossVectors(V,U).normalize();U.crossVectors(J,V).normalize();const ie=new lt().makeBasis(J,V,U);ie.setPosition(he),we.applyMatrix4(ie),u.push(we)}}const m=new dt(Bt(u,!1),l);m.name="Pandora_Metkayina_Rafts_And_Walkways";const p=new dt(Bt(d,!1),c);p.name="Pandora_Metkayina_Woven_Huts";const y=new dt(Bt(f,!1),h);y.name="Pandora_Metkayina_Torches",r.add(m,p,y);const S=new gn(.0022*mt,.022*mt,6);S.rotateX(Math.PI*.5),S.scale(1,.45,1);const x=new gt(S,l,g.length);x.name="Pandora_Metkayina_Moored_Canoes",r.add(x);const{fanGeo:R,tubeGeo:E,anemoneGeo:T}=_v(),M=[{name:"Pandora_Reef_Corals_CyanFans",geo:R,dayCol:2517860,nightCol:62975,nightEm:65512,matrices:[]},{name:"Pandora_Reef_Corals_MagentaTubes",geo:E,dayCol:9192546,nightCol:16725168,nightEm:16720544,matrices:[]},{name:"Pandora_Reef_Corals_CoralAnemones",geo:T,dayCol:10379322,nightCol:16742436,nightEm:16736792,matrices:[]}],v=new zt;for(let L=0;L<1050;L++){const N=B(L,3,19)*Math.PI*2,Y=Math.sqrt(B(L,7,13))*.165,Q=a(Math.cos(N)*Y,Math.sin(N)*Y,0);if(Q.nation!=="water"||Q.elev>=-.002)continue;const se=(.009+B(L,5,11)*.016)*mt;v.position.copy(Q.pos),v.quaternion.setFromUnitVectors(Xn,Q.normal),v.rotateY(B(L,2,7)*Math.PI*2),v.scale.set(se,se,se),v.updateMatrix(),M[L%3].matrices.push(v.matrix.clone())}M.forEach((L,N)=>{if(L.matrices.length===0)return;const Y=new Oe({color:L.dayCol,emissive:L.nightEm,emissiveIntensity:0,roughness:.55,side:Zt});Y.userData.animatedEmissive=!0,n.push({mat:Y,dayColor:L.dayCol,nightColor:L.nightCol,dayEmissive:1057304,nightEmissive:L.nightEm,dayEI:0,nightEI:2.15,pulsePhase:N*1.4});const Q=new gt(L.geo,Y,L.matrices.length);Q.name=L.name,L.matrices.forEach((se,he)=>Q.setMatrixAt(he,se)),Q.instanceMatrix.needsUpdate=!0,r.add(Q)});const b=[];for(let L=0;L<720;L++){const N=B(L,11,5)*Math.PI*2,Y=Math.sqrt(B(L,4,17))*.155,Q=a(Math.cos(N)*Y,Math.sin(N)*Y,0);if(Q.nation!=="water"||Q.elev>=-.014)continue;const se=Math.abs(Q.elev),he=Math.min(se*.85,(.04+B(L,9,2)*.06)*mt),we=(.012+B(L,6,8)*.012)*mt;v.position.copy(Q.pos),v.quaternion.setFromUnitVectors(Xn,Q.normal),v.rotateY(B(L,1,3)*Math.PI*2),v.scale.set(we,he,we),v.updateMatrix(),b.push(v.matrix.clone())}const A={uTime:{value:0}},F=new Oe({color:1730632,emissive:55450,emissiveIntensity:0,roughness:.55,side:Zt});if(F.userData.animatedEmissive=!0,F.onBeforeCompile=L=>{L.uniforms.uTime=A.uTime,L.vertexShader=`uniform float uTime;
`+L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float swayAmp = position.y * 0.14;
        transformed.x += sin(uTime * 1.45 + position.y * 6.0) * swayAmp;
        transformed.z += cos(uTime * 1.2 + position.y * 5.0) * swayAmp;`)},n.push({mat:F,dayColor:1730632,nightColor:541256,dayEmissive:798238,nightEmissive:57512,dayEI:0,nightEI:1.05}),b.length>0){const L=new gt(xv(),F,b.length);L.name="Pandora_Reef_Giant_Kelp",b.forEach((N,Y)=>L.setMatrixAt(Y,N)),L.instanceMatrix.needsUpdate=!0,r.add(L)}const I=[];for(let L=0;L<32;L++){const N=B(L,8,21)*Math.PI*2,Y=Math.sqrt(B(L,2,13))*.145,Q=o(Math.cos(N)*Y,Math.sin(N)*Y,-.001),se=.095,he=new Jt(.008*mt,.028*mt,se,8,1,!0);he.translate(0,-se*.5,0);const we=he.toNonIndexed(),U=new _t().setFromUnitVectors(Xn,Q.normal),V=new _t().setFromEuler(new Gn(.18,B(L,3,5)*6.28,.12));we.applyQuaternion(U.multiply(V)),we.translate(Q.pos.x,Q.pos.y,Q.pos.z),I.push(we)}const k=new Cn({color:new re(.32,.95,1),transparent:!0,opacity:0,depthWrite:!1,blending:mn,side:Zt}),G=new dt(Bt(I,!1),k);G.name="Pandora_Reef_Underwater_Caustics",G.visible=!1,r.add(G);const O=new zt;return{group:r,update(L,N,Y){A.uTime.value=L;for(let Q=0;Q<g.length;Q++){const se=g[Q],he=Math.sin(L*2.1+se.phase)*45e-5*mt,we=Math.sin(L*1.6+se.phase)*.06;O.position.copy(se.basePos).addScaledVector(se.normal,he),O.quaternion.copy(se.qOri),O.rotateZ(we),O.scale.set(1,1,1),O.updateMatrix(),x.setMatrixAt(Q,O.matrix)}if(x.instanceMatrix.needsUpdate=!0,Y>.01){const Q=.78+.22*Math.sin(L*2.4),se=q.lerp(.28,.08,N);k.opacity=Y*se*Q,G.visible=k.opacity>.005}else G.visible=!1}}}const ve=1/3.5,ln=new w(0,1,0),Vl=new _t().setFromUnitVectors(ln,new w(0,Math.cos(q.degToRad(68)),Math.sin(q.degToRad(68))).normalize()),Hl=Io([0,Math.cos(q.degToRad(68)),Math.sin(q.degToRad(68))]),ml=[{id:"valley_lake",dir:new w(-.08,.992,.095).normalize(),angRad:.056,waterElev:.0022},{id:"east_lake",dir:new w(.42,.78,.46).normalize(),angRad:.06,waterElev:.0025},{id:"west_lake",dir:new w(-.56,.62,-.55).normalize(),angRad:.058,waterElev:.0024},{id:"souls_lake",dir:new w(.36,-.12,-.92).normalize(),angRad:.062,waterElev:.0025},{id:"mush_lake",dir:new w(-.24,-.78,.58).normalize(),angRad:.058,waterElev:.0024}],Ma=new w,ro=new w;function yv(s,e,t,n=0){const i=Math.sin(e),r=i*Math.cos(t),o=Math.cos(e),a=i*Math.sin(t),l=s+n;return{pos:new w(l*r,l*o,l*a),normal:new w(r,o,a)}}function Yn(s,e,t,n=Vl,i=Hl,r=4){Ma.set(s,e,t).normalize(),ro.copy(Ma).applyQuaternion(n).normalize();const o=ro.x,a=ro.y,l=ro.z,{cont:c,ridge:h,highlandRidge:u,craterDepression:d,forestFactor:f,waterFactor:g,ashFactor:_,reefFactor:m,borderMountain:p,forestClump:y,nation:S}=Gl(o,a,l,i,r);let x=0,R=0;if(S==="forest"&&f>.55)for(let M=0;M<ml.length;M++){const v=ml[M],b=Ma.dot(v.dir);if(b>.992){const A=Math.acos(q.clamp(b,-1,1));if(A<v.angRad){const F=1-A/v.angRad;x=Math.max(x,F*F*(3-2*F)),R=v.waterElev}}}let E=0,T="ocean";if(c<=0){const M=q.smoothstep(c,-.34,-.02),v=Ot(o*19,a*19,l*19)*.008,b=-.135*(.45+.55*Math.max(.45,m));E=q.lerp(b,-.0012,M)+v*(1-M*.5),m>.25&&c>-.16&&(E=q.lerp(E,-.022-(1-M)*.085,.65)),T=c>-.16||m>.25?"reef":"ocean"}else{const M=Ot(o*9+1.2,a*9,l*9)*.12,v=Ot(o*9,a*9+2.4,l*9)*.12,b=zn((o+M)*14+3.1,a*14-1.4,(l+v)*14+2.7,4),A=Math.abs(Ot(o*36,a*36,l*36))*.0025,F=q.smoothstep(c,0,.14),I=q.smoothstep(u,.025,.22)*.015,k=p*(.014+Math.max(0,h)*.012),G=_*(.0065+Math.pow(Math.max(0,h),1.8)*.013);E=F*.0018+Math.max(0,b*.52+.34)*.0072*F+A*F+I+k+G-d,x>.01&&(E=q.lerp(E,R-.0038,x)),E=Math.max(4e-4,E),S==="ash"?T="ash":S==="water"?T="atoll_island":x>.45?T="lake":u>.036||p>.45?T="canyon":T="forest"}return{cont:c,ridge:h,highlandRidge:u,forestFactor:f,waterFactor:g,ashFactor:_,reefFactor:m,borderMountain:p,forestClump:y,lakeBlend:x,lakeWaterElev:R,elev:E,biome:T,nation:S,sx:o,sy:a,sz:l}}function oo(s,e,t,n=0,i=null){const r=i?.qCap||Vl,o=i?.sphereLandmarks||Hl;return Yn(s,e,t,r,o,3).elev}function yi(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new w(1,0,0):new w(0,0,1),n=new w().crossVectors(e,t).normalize(),i=new w().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function ts(s,e,t,n,i,r,o){const a=e.upDir.clone().addScaledVector(e.e1,t).addScaledVector(e.e2,n).normalize(),l=Yn(a.x,a.y,a.z,r,o,3).elev;return{pos:a.clone().multiplyScalar(s+l+i),normal:a,elev:l}}function Sv(s,e=null){const t=e?.qCap||Vl,n=e?.sphereLandmarks||Hl,i=[{anchor:new w(0,1,0),span:.24,angle:.55,amp:.045,steps:42},{anchor:new w(.14,.985,.09).normalize(),span:.2,angle:-1.1,amp:.038,steps:32},{anchor:Rt[2].capDir.clone(),span:.24,angle:.8,amp:.038,steps:36},{anchor:Rt[3].capDir.clone(),span:.24,angle:2.1,amp:.04,steps:36},{anchor:Rt[4].capDir.clone(),span:.2,angle:-.7,amp:.032,steps:32},{anchor:new w(.48,.58,-.65).normalize(),span:.22,angle:1.4,amp:.036,steps:32},{anchor:new w(-.46,.72,-.52).normalize(),span:.22,angle:-1.6,amp:.036,steps:32}],r=[];for(const o of i){const a=yi(o.anchor),l=Math.cos(o.angle),c=Math.sin(o.angle),h=[];for(let u=0;u<=o.steps;u++){const d=u/o.steps,f=(d-.5)*o.span,g=Math.sin(d*Math.PI*2.4)*o.amp,_=f*l-g*c,m=f*c+g*l,p=a.upDir.clone().addScaledVector(a.e1,_).addScaledVector(a.e2,m).normalize(),y=Yn(p.x,p.y,p.z,t,n,3);if(y.nation!=="forest"||y.cont<=.005){if(h.length>=6)break;continue}h.push({theta:Math.acos(q.clamp(p.y,-1,1)),phi:Math.atan2(p.z,p.x),pos:p.clone().multiplyScalar(s+y.elev+55e-5),normal:p,elev:y.elev})}h.length>=6&&r.push(h)}return r}function ns(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.hypot(i,r,o);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,r/a,o/a)}return t.needsUpdate=!0,s}function vi(s,e){const t=s.index?s.toNonIndexed():s,n=new re(e),i=t.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return t.setAttribute("color",new St(r,3)),t}function bv(){const s=[],e=new Jt(.032,.14,1,6,1);e.translate(0,.5,0),s.push(vi(e,4600354));const t=[{y:.44,rad:.34,h:.14,col:1793067},{y:.62,rad:.3,h:.13,col:2254896},{y:.78,rad:.24,h:.12,col:2782774},{y:.93,rad:.16,h:.11,col:3506749}];for(const i of t){const r=new gn(i.rad,i.h,7);r.translate(0,i.y,0),s.push(vi(r,i.col))}const n=Bt(s,!1);return n.computeVertexNormals(),ns(n,1)}function wv(){const s=[],e=new Pn([new w(0,0,0),new w(.08,.32,.04),new w(-.05,.68,-.05),new w(.03,.96,.02)]);s.push(vi(new Un(e,6,.068,5,!1),4140576));for(let i=0;i<4;i++){const r=i/4*Math.PI*2+.4,o=new Pn([new w(Math.cos(r)*.04,.34,Math.sin(r)*.04),new w(Math.cos(r)*.18,.22,Math.sin(r)*.18),new w(Math.cos(r)*.26,-.02,Math.sin(r)*.26)]);s.push(vi(new Un(o,4,.028,4,!1),3680284))}const t=new an(.42,8,5);t.scale(1.15,.48,1.15),t.translate(.03,.94,.02),s.push(vi(t,2517550));const n=Bt(s,!1);return n.computeVertexNormals(),ns(n,1)}function Ev(){const s=[],e=new Pn([new w(0,0,0),new w(.06,.38,.03),new w(.14,.78,-.02),new w(.18,1,0)]);s.push(vi(new Un(e,6,.052,5,!1),4930344));for(let n=0;n<6;n++){const i=n/6*Math.PI*2,r=new Qn(.24,.65,1,2);r.translate(0,.32,0),r.rotateX(1.08),r.rotateY(i),r.translate(.18,.96,0),s.push(vi(r,3045940))}const t=Bt(s,!1);return t.computeVertexNormals(),ns(t,1)}function Av(){const s=[];for(let t=0;t<6;t++){const n=t/6*Math.PI*2,i=new Qn(.42,.65,1,2);i.translate(0,.32,0),i.rotateX(.92+t%2*.25),i.rotateY(n),s.push(i.toNonIndexed())}const e=Bt(s,!1);return e.computeVertexNormals(),ns(e,1)}function Tv(){const s=[],e=new zs(.48,0);e.scale(1.2,.65,1),e.translate(0,.22,0),s.push(vi(e,3885110));const t=new zs(.32,0);t.scale(1,.72,1.1),t.translate(.38,.14,.24),s.push(vi(t,2774062));const n=Bt(s,!1);return n.computeVertexNormals(),n}function Cv(){const s=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=new Qn(.32,1,2,3),r=i.attributes.position;for(let o=0;o<r.count;o++){const a=q.clamp(r.getY(o)+.5,0,1),l=r.getX(o)*(1-Math.pow(a,1.4)*.85),c=-a*a*.38;r.setXYZ(o,l,a*.52,c+a*.75)}i.rotateX(.45),i.rotateY(n),i.computeVertexNormals(),s.push(i.toNonIndexed())}const e=Bt(s,!1);return e.computeVertexNormals(),ns(e,1)}function zu(){const s=[];for(let t=0;t<5;t++){const n=new gn(.24,.72,4);n.translate(0,.36,0),n.rotateX(.85),n.rotateY(t/5*Math.PI*2),s.push(n.toNonIndexed())}const e=Bt(s,!1);return e.computeVertexNormals(),e}function Rv(){const s=[],e=new an(1,10,6,0,Math.PI*2,0,Math.PI*.56);e.scale(1,.42,1),e.translate(0,.9,0),s.push(e.toNonIndexed());const t=new Jt(.14,.25,.94,6,1);t.translate(0,.47,0),s.push(t.toNonIndexed());const n=Bt(s,!1);return n.computeVertexNormals(),n}function ku(){const s=new an(1,10,5,0,Math.PI*2,0,Math.PI*.52);s.scale(1.05,.28,1.05),s.computeVertexNormals(),ns(s,1);const e=new gn(.96,.18,10,1,!0);return e.rotateX(Math.PI),e.translate(0,-.02,0),e.computeVertexNormals(),ns(e,-1),{outer:s,under:e}}function Pv(s,e,t,n){const i=new Fl(1,2),r=i.attributes.position,o=r.count,a=new Float32Array(o*3),l=new re(2055213),c=new re(2783806),h=new re(3817286),u=new re(1974824),d=new re;for(let f=0;f<o;f++){let g=r.getX(f),_=r.getY(f),m=r.getZ(f);const p=Ot(g*2.7+s*3.1,_*2.4-s,m*2.7+s*1.9),y=Ot(g*5.5+s*7.3,_*4.5,m*5.5);if(_>.15){const S=.25+(_-.15)*.22+.08*p,x=1+.18*p;g*=e*x,m*=t*x,_=n*S,d.copy(l).lerp(c,Math.max(0,y)*.65)}else{const S=Math.min(1,(.15-_)/1.15),x=Math.pow(1-S*.86,1.25),R=1+.34*p+.16*y;g*=e*x*R,m*=t*x*R,_=-n*S*(.85+.25*Math.abs(p)),d.copy(h).lerp(u,S*.72+Math.max(0,-p)*.28)}r.setXYZ(f,g,_,m),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}return i.setAttribute("color",new St(a,3)),i.computeVertexNormals(),i}function Wl(s,e,t,n,i,r,o,a,l,c,h){const u=ts(s,e,t,n,-.0025*ve,c,h).pos,d=ts(s,e,i,r,-.0025*ve,c,h).pos,f=u.clone().add(d).multiplyScalar(.5).normalize(),g=u.clone().lerp(d,.26).normalize().multiplyScalar(s+o*.74),_=f.clone().multiplyScalar(s+o),m=u.clone().lerp(d,.74).normalize().multiplyScalar(s+o*.76),p=new Pn([u,g,_,m,d]),y=new Un(p,24,a,8,!1),S=y.attributes.position,x=y.attributes.normal,R=new Float32Array(S.count*3),E=new re(3290942),T=new re(2316332),M=new re(3700796),v=new w,b=new w,A=new re;for(let F=0;F<S.count;F++){v.fromBufferAttribute(S,F),b.fromBufferAttribute(x,F);const I=Ot(v.x*220+l*3.7,v.y*220,v.z*220-l),k=Ot(v.x*520,v.y*520,v.z*520),G=v.clone().normalize(),O=Math.max(0,b.dot(G));v.addScaledVector(b,a*(.36*I+.16*k)),S.setXYZ(F,v.x,v.y,v.z),A.copy(E).lerp(T,Math.pow(O,1.25)),O>.45&&k>.2&&A.lerp(M,.48),R[F*3]=A.r,R[F*3+1]=A.g,R[F*3+2]=A.b}return y.setAttribute("color",new St(R,3)),y.computeVertexNormals(),{geo:y,curve:p,apex:_}}function Iv(s){const e=new Jt(.12,1,1,8,6);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new re(2764600),r=new re(2381356),o=new re(3568190),a=new re;for(let l=0;l<t.count;l++){let c=t.getX(l);const h=t.getY(l);let u=t.getZ(l);const d=Ot(c*3.8+s*2.1,h*4.5,u*3.8-s),f=1+.35*d;c*=f,u*=f,t.setXYZ(l,c,h,u),a.copy(i).lerp(r,q.smoothstep(h,.22,.72)),h>.72&&d>.1&&a.lerp(o,.45),n[l*3]=a.r,n[l*3+1]=a.g,n[l*3+2]=a.b}return e.setAttribute("color",new St(n,3)),e.computeVertexNormals(),e}function Lv(s,e){const t=[],n=[],i=new w,r=new w,o=new w;s.forEach((f,g)=>{const _=f.length,m=e[g]||.008*ve,p=[],y=[],S=[];for(let R=0;R<_;R++){const E=f[R],T=f[Math.max(0,R-1)],M=f[Math.min(_-1,R+1)];i.copy(M.pos).sub(T.pos).normalize(),o.copy(E.normal),r.crossVectors(i,o).normalize();const v=1+.22*Math.sin(R*.45+g),b=m*v,A=b*.24,F=E.pos.clone().addScaledVector(r,-b),I=E.pos.clone().addScaledVector(r,b),k=E.pos.clone().addScaledVector(r,-(b+A)).addScaledVector(o,14e-5),G=E.pos.clone().addScaledVector(r,b+A).addScaledVector(o,14e-5);p.push(F.x,F.y,F.z,I.x,I.y,I.z),y.push(k.x,k.y,k.z,F.x,F.y,F.z),S.push(I.x,I.y,I.z,G.x,G.y,G.z)}const x=R=>{const E=[];for(let M=0;M<_-1;M++){const v=M*2,b=v+1,A=v+2,F=v+3;E.push(v,b,A,b,F,A)}const T=new Nt;return T.setAttribute("position",new Ht(R,3)),T.setIndex(E),T.computeVertexNormals(),T.toNonIndexed()};t.push(x(p)),n.push(x(y),x(S))});const a=Bt(t,!1),l=Bt(n,!1),c=new Oe({color:953508,emissive:35e3,emissiveIntensity:0,roughness:.1,metalness:.55,transparent:!0,opacity:.9,depthWrite:!1}),h=new Oe({color:1994328,emissive:62975,emissiveIntensity:0,roughness:.4,transparent:!0,opacity:.88,depthWrite:!1}),u=new dt(a,c);u.name="Pandora_Global_Rivers_Water";const d=new dt(l,h);return d.name="Pandora_Global_Rivers_Banks",{waterMesh:u,bankMesh:d,waterMat:c,bankMat:h}}function Dv(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512),i=n.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){const l=Ot(a*.18,o*.18,2.3)*.5+.5,c=B(a,o,37),h=Math.floor(q.clamp((.76+.24*l+.16*(c-.5))*255,130,255)),u=(o*512+a)*4;i[u]=h,i[u+1]=h,i[u+2]=h,i[u+3]=255}t.putImageData(n,0,0);const r=new xn(e);return r.colorSpace=Gt,r.wrapS=Oi,r.wrapT=Oi,r.repeat.set(42,21),r}function Nv(s,e){const i=document.createElement("canvas");i.width=1024,i.height=512;const r=i.getContext("2d"),o=r.createImageData(1024,512),a=o.data,l=Rt[3].capDir,c=Rt[4].capDir,h=new w;for(let d=0;d<512;d++){const f=(d+.5)/512*Math.PI,g=Math.sin(f),_=Math.cos(f);for(let m=0;m<1024;m++){const p=(m+.5)/1024*Math.PI*2,y=-Math.cos(p)*g,S=Math.sin(p)*g;h.set(y,_,S).applyQuaternion(s);const{cont:x,ashFactor:R,reefFactor:E,nation:T,borderMountain:M}=Gl(h.x,h.y,h.z,e,4);let v=0,b=0,A=0;if(T==="ash"&&x>0){const I=Math.pow(Math.max(0,1-Math.abs(Ot(y*18+4.1,_*18,S*18-2.3))),14);v=I*R*.92,b=I*R*.24,A=I*R*.03}else if(T==="forest"&&x>0){let I=1-Math.abs(Ot(y*24+1,_*24,S*24));I=Math.pow(Math.max(0,I),18);const k=B(Math.floor(y*360),Math.floor(_*360),Math.floor(S*360))>.986?.55:0,G=Math.min(.68,I*.58+k)*(1-Math.min(.9,M));Ot(y*5+9,_*5,S*5)>.1?(v=G*.06,b=G*.78,A=G*.85):(v=G*.58,b=G*.18,A=G*.85);const L=Math.acos(q.clamp(y*l.x+_*l.y+S*l.z,-1,1));if(L<.09){const Y=Math.pow(1-L/.09,1.6);v=Math.min(1,v+Y*.78),b=Math.min(1,b+Y*.38),A=Math.min(1,A+Y*.92)}const N=Math.acos(q.clamp(y*c.x+_*c.y+S*c.z,-1,1));if(N<.09){const Y=Math.pow(1-N/.09,1.7);v=Math.min(1,v+Y*.85),b=Math.min(1,b+Y*.22),A=Math.min(1,A+Y*.72)}}else if(x<=0){const I=Math.max(q.smoothstep(x,-.11,-.002)*.55,E*.58)*.58;v=I*.05,b=I*.75,A=I*.85}const F=(d*1024+m)*4;a[F]=Math.min(255,v*255),a[F+1]=Math.min(255,b*255),a[F+2]=Math.min(255,A*255),a[F+3]=255}}r.putImageData(o,0,0);const u=new xn(i);return u.colorSpace=Gt,u}function Uv(s,e,t,n,i){const r=yi(e.capDir),o=ts(s,r,0,0,-.001,t,n),a=new Yt;a.name="Pandora_Landmark_Hometree",a.position.copy(o.pos),a.quaternion.setFromUnitVectors(ln,o.normal);const l=new Oe({color:3877405,emissive:337972,emissiveIntensity:0,roughness:.9});i.push({mat:l,dayColor:3877405,nightColor:1449006,dayEmissive:337972,nightEmissive:803410,dayEI:0,nightEI:.45});const c=.56*ve,h=new Jt(.065*ve,.14*ve,c,14,14,!0);h.translate(0,c*.5,0);const u=h.attributes.position;for(let x=0;x<u.count;x++){const R=u.getX(x),E=u.getY(x),T=u.getZ(x),M=E/c,v=M*2.4,b=1+.24*Math.sin(Math.atan2(T,R)*6+v),A=M<.25?1+Math.pow((.25-M)/.25,1.5)*.65:1,F=(R*Math.cos(v*.35)-T*Math.sin(v*.35))*b*A,I=(R*Math.sin(v*.35)+T*Math.cos(v*.35))*b*A;u.setXYZ(x,F,E,I)}h.computeVertexNormals(),a.add(new dt(h,l));for(let x=0;x<14;x++){const R=x/14*Math.PI*2+(B(x,3,7)-.5)*.15,E=(.14+B(x,8,2)*.09)*ve,T=(.12+B(x,5,4)*.18)*ve,M=new Pn([new w(Math.cos(R)*.06*ve,T,Math.sin(R)*.06*ve),new w(Math.cos(R)*E*.62,T*.62,Math.sin(R)*E*.62),new w(Math.cos(R)*E,-.015*ve,Math.sin(R)*E)]);a.add(new dt(new Un(M,10,.012*ve,6,!1),l))}const d=new Oe({color:1992238,emissive:407618,emissiveIntensity:0,roughness:.65});i.push({mat:d,dayColor:1992238,nightColor:537660,dayEmissive:407618,nightEmissive:416876,dayEI:0,nightEI:.72});const f=new Oe({color:3041336,emissive:65512,emissiveIntensity:0,roughness:.35,side:Zt});i.push({mat:f,dayColor:3041336,nightColor:61695,dayEmissive:1853990,nightEmissive:63743,dayEI:0,nightEI:2.25,pulsePhase:.6});const g=new Oe({color:3877405,emissive:16755256,emissiveIntensity:0,roughness:.5});i.push({mat:g,dayColor:3877405,nightColor:16762980,dayEmissive:2759184,nightEmissive:16751144,dayEI:0,nightEI:2.1,pulsePhase:1.4});const _=[.34*ve,.28*ve,.21*ve,.14*ve],m=[.34*ve,.44*ve,.53*ve,.61*ve],{outer:p,under:y}=ku();for(let x=0;x<_.length;x++){const R=_[x],E=m[x],T=new dt(p,d);T.position.set(0,E,0),T.scale.set(R,R*.9,R),a.add(T);const M=new dt(y,f);M.position.set(0,E-.004*ve,0),M.scale.set(R*.98,R*.9,R*.98),a.add(M)}const S=new dt(new an(.055*ve,12,8),g);return S.position.set(0,.06*ve,0),a.add(S),{group:a,anchorDir:o.normal,anchorPos:o.pos}}function Fv(s,e,t,n,i){const r=yi(e.capDir),o=ts(s,r,0,0,-5e-4,t,n),a=new Yt;a.name="Pandora_Landmark_TreeOfSouls";const l=new Oe({vertexColors:!0,emissive:2757704,emissiveIntensity:0,roughness:.85});i.push({mat:l,dayColor:16777215,nightColor:10134724,dayEmissive:1054752,nightEmissive:2497092,dayEI:0,nightEI:.45});for(let x=0;x<7;x++){const R=x/7*Math.PI*2,E=R+Math.PI*.88,T=.072,{geo:M}=Wl(s,r,Math.cos(R)*T,Math.sin(R)*T,Math.cos(E)*T,Math.sin(E)*T,(.145+x%3*.025)*ve,.011*ve,50+x,t,n);a.add(new dt(M,l))}const c=new Yt;c.position.copy(o.pos),c.quaternion.setFromUnitVectors(ln,o.normal),a.add(c);const h=new Oe({color:2975798,emissive:9058559,emissiveIntensity:0,roughness:.72});i.push({mat:h,dayColor:2975798,nightColor:1976408,dayEmissive:1194016,nightEmissive:7746303,dayEI:0,nightEI:1.45,pulsePhase:2.1}),c.add(new dt(new Jt(.18*ve,.2*ve,.004*ve,24),h));const u=new Oe({color:10392232,emissive:8409296,emissiveIntensity:0,roughness:.7});i.push({mat:u,dayColor:9274e3,nightColor:12759280,dayEmissive:4734036,nightEmissive:9459967,dayEI:0,nightEI:1.1});const d=.25*ve,f=new Jt(.024*ve,.055*ve,d,10,8);f.translate(0,d*.5,0),c.add(new dt(f,u));const g=new an(.13*ve,12,8);g.scale(1.25,.35,1.25),g.translate(0,d*.96,0),c.add(new dt(g,u));const _=340,m=new Jt(.0014*ve,5e-4*ve,1,4,1);m.translate(0,-.5,0);const p=new Oe({color:14076140,emissive:15120639,emissiveIntensity:0,roughness:.28,transparent:!0,opacity:.92});i.push({mat:p,dayColor:14669034,nightColor:16777215,dayEmissive:12560604,nightEmissive:14456575,dayEI:0,nightEI:2.35,pulsePhase:.2});const y=new gt(m,p,_);y.name="Pandora_TreeOfSouls_Filaments";const S=new zt;for(let x=0;x<_;x++){const R=B(x,4,17)*Math.PI*2,E=(.015+Math.sqrt(B(x,8,11))*.135)*ve,T=(.08+B(x,3,19)*.13)*ve;S.position.set(Math.cos(R)*E,d*.95,Math.sin(R)*E),S.rotation.set((B(x,1,5)-.5)*.14,R,(B(x,2,7)-.5)*.14),S.scale.set(1,T,1),S.updateMatrix(),y.setMatrixAt(x,S.matrix)}return y.instanceMatrix.needsUpdate=!0,c.add(y),{group:a,anchorDir:o.normal,anchorPos:o.pos}}function Ov(s,e,t,n,i,r,o){const a=yi(e.capDir),l=new Yt;l.name="Pandora_Landmark_HallelujahMountains";const c=new Oe({vertexColors:!0,emissive:404528,emissiveIntensity:0,roughness:.86,metalness:.06});i.push({mat:c,dayColor:16777215,nightColor:6455448,dayEmissive:795668,nightEmissive:669766,dayEI:0,nightEI:.52});const h=new Cn({color:new re(.85,.96,1),transparent:!0,opacity:.56,side:Zt,depthWrite:!1});i.push({mat:h,dayColorRGB:[.82,.95,1],nightColorRGB:[.42,1.75,2.3],isWaterfall:!0});const u=[],d=32;for(let _=0;_<d;_++){const m=_===0?0:.03+Math.sqrt(B(_,4,11))*.14,p=_*2.39996+B(_,7,3)*.45,y=(_===0?.24:.078+B(_,9,2)*.21)*ve,S=ts(s,a,Math.cos(p)*m,Math.sin(p)*m,y,t,n),x=(_===0?.095:.036+B(_,2,5)*.056)*ve,R=x*(.72+B(_,5,8)*.45),E=(_===0?.145:.052+B(_,6,1)*.082)*ve,T=Pv(_+1,x,R,E),M=new dt(T,c);M.position.copy(S.pos),M.quaternion.setFromUnitVectors(ln,S.normal),M.rotateY(B(_,1,8)*Math.PI*2),l.add(M),u.push({pos:S.pos,normal:S.normal,rx:x,rz:R,h:E,alt:y});for(let v=0;v<7;v++){const b=B(_,v,14)*Math.PI*2,A=.25+B(_,v,2)*.55,F=new w(Math.cos(b)*x*A,-E*.34,Math.sin(b)*R*A).applyQuaternion(M.quaternion);o.push({pos:S.pos.clone().add(F),normal:S.normal,length:(.016+B(_,v,8)*.036)*ve})}if(_<15){const v=y+.015*ve,b=(.0065+B(_,12,4)*.0075)*ve,A=new Qn(b,v,2,10),F=A.attributes.position;for(let L=0;L<F.count;L++){const N=(F.getY(L)+v*.5)/v;F.setZ(L,Math.sin((1-N)*Math.PI*.5)*.014*ve)}A.computeVertexNormals();const I=B(_,3,6)*Math.PI*2,k=new _t().setFromUnitVectors(ln,S.normal),G=new w(Math.cos(I)*x*.72,0,Math.sin(I)*R*.72).applyQuaternion(k),O=new dt(A,h);O.position.copy(S.pos).add(G).addScaledVector(S.normal,-v*.5+E*.16),O.quaternion.copy(k),O.rotateY(I+Math.PI*.5),l.add(O),r.push({mesh:O,material:h,phase:_*1.17})}}const f=new Oe({color:3889196,emissive:59600,emissiveIntensity:0,roughness:.55});i.push({mat:f,dayColor:3889196,nightColor:940132,dayEmissive:1718294,nightEmissive:1114072,dayEI:0,nightEI:1.35});const g=[];for(let _=0;_<d;_++){const m=u[_];let p=-1,y=.25*ve;for(let S=_+1;S<d;S++){const x=u[S],R=m.pos.distanceTo(x.pos);R>(m.rx+x.rx)*.85&&R<y&&(y=R,p=S)}if(p>=0){const S=u[p],x=m.pos.clone().add(S.pos).multiplyScalar(.5);x.add(x.clone().normalize().multiplyScalar(-y*.18));const R=new Pn([m.pos.clone(),x,S.pos.clone()]);g.push(new Un(R,10,.0014*ve,5,!1).toNonIndexed())}}if(g.length>0){const _=new dt(Bt(g,!1),f);_.name="Pandora_Hallelujah_VineBridges",l.add(_)}return{group:l,islandsData:u,anchorDir:a.upDir,anchorPos:a.upDir.clone().multiplyScalar(s)}}function Bv(s,e,t,n,i,r){const o=yi(e.capDir),a=new Yt;a.name="Pandora_Landmark_IkranRookery";const l=new Oe({vertexColors:!0,emissive:407620,emissiveIntensity:0,roughness:.88});i.push({mat:l,dayColor:16777215,nightColor:6453906,dayEmissive:1058840,nightEmissive:672850,dayEI:0,nightEI:.42});const c=[];return[[-.08,-.05,.08,.05,.21*ve,.015*ve],[-.06,.07,.07,-.06,.24*ve,.016*ve],[-.1,.01,.02,.09,.17*ve,.013*ve],[.01,-.09,.09,.02,.18*ve,.013*ve],[-.09,-.02,.05,.07,.15*ve,.012*ve],[-.04,-.08,.08,-.02,.16*ve,.011*ve],[-.07,.04,.03,-.07,.19*ve,.012*ve],[-.03,.08,.09,.06,.14*ve,.011*ve]].forEach(([u,d,f,g,_,m],p)=>{const{geo:y,curve:S,apex:x}=Wl(s,o,u,d,f,g,_,m,10+p,t,n),R=new dt(y,l);R.name=`Pandora_IkranRookery_Arch_${p+1}`,a.add(R),c.push({apex:x,normal:x.clone().normalize()});for(let E=0;E<14;E++){const T=S.getPoint(.2+E/13*.6),M=T.clone().normalize();r.push({pos:T.addScaledVector(M,-m*.65),normal:M,length:(.014+B(E,p,19)*.026)*ve})}}),{group:a,archCenters:c,anchorDir:o.upDir,anchorPos:o.upDir.clone().multiplyScalar(s)}}function zv(s,e,t,n,i){const r=yi(e.capDir),o=new Yt;o.name="Pandora_Landmark_MushroomGeysers";const a=new Oe({color:3880242,emissive:55528,emissiveIntensity:0,roughness:.88});i.push({mat:a,dayColor:3880242,nightColor:1980488,dayEmissive:926246,nightEmissive:59647,dayEI:0,nightEI:1.85});const l=14,c=new Jt(.18,.95,1,9,1);c.translate(0,.5,0);const h=new gt(c,a,l);h.name="Pandora_Geyser_Vents";const u=[],d=new zt;for(let M=0;M<l;M++){const v=M/l*Math.PI*2+B(M,3,7)*.4,b=.014+B(M,9,2)*.068,A=ts(s,r,Math.cos(v)*b,Math.sin(v)*b,-5e-4,t,n),F=(.008+B(M,2,11)*.006)*ve,I=(.014+B(M,5,13)*.012)*ve;d.position.copy(A.pos),d.quaternion.setFromUnitVectors(ln,A.normal),d.scale.set(F,I,F),d.updateMatrix(),h.setMatrixAt(M,d.matrix),u.push({basePos:A.pos.clone().addScaledVector(A.normal,I*.95),normal:A.normal.clone(),phase:B(M,6,4)*Math.PI*2,maxHeight:(.065+B(M,8,9)*.055)*ve})}h.instanceMatrix.needsUpdate=!0,o.add(h);const f=22,g=l*f,_=new Float32Array(g*3),m=new Float32Array(g*3);for(let M=0;M<g;M++)m[M*3]=.78,m[M*3+1]=.94,m[M*3+2]=1;const p=new Nt;p.setAttribute("position",new St(_,3)),p.setAttribute("color",new St(m,3));const y=document.createElement("canvas");y.width=64,y.height=64;const S=y.getContext("2d"),x=S.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(255, 255, 255, 0.85)"),x.addColorStop(.45,"rgba(180, 245, 255, 0.42)"),x.addColorStop(1,"rgba(0, 0, 0, 0.0)"),S.fillStyle=x,S.fillRect(0,0,64,64);const R=new xn(y);R.needsUpdate=!0;const E=new An({size:5.5,map:R,vertexColors:!0,transparent:!0,opacity:.48,depthWrite:!1,blending:mn,sizeAttenuation:!0}),T=new Rn(p,E);return T.name="Pandora_Geyser_Plumes",T.frustumCulled=!1,o.add(T),{group:o,geyserEmitters:u,plumeGeo:p,plumeMat:E,puffsPerGeyser:f,anchorDir:r.upDir,anchorPos:r.upDir.clone().multiplyScalar(s)}}function kv(s,e,t,n){const i=new Yt;i.name="Pandora_Inland_Lakes_And_Lilies";const r=[],o=[],a=[],l=[],c=new zt;ml.forEach((x,R)=>{const E=yi(x.dir),T=s+x.waterElev,M=8,v=20,b=[],A=[];for(let I=0;I<=M;I++){const G=I/M*x.angRad*.82;for(let O=0;O<=v;O++){const L=O/v*Math.PI*2,N=E.upDir.clone().addScaledVector(E.e1,Math.cos(L)*G).addScaledVector(E.e2,Math.sin(L)*G).normalize();b.push(N.x*T,N.y*T,N.z*T)}}for(let I=0;I<M;I++)for(let k=0;k<v;k++){const G=I*(v+1)+k,O=G+(v+1);A.push(G,G+1,O,G+1,O+1,O)}const F=new Nt;F.setAttribute("position",new Ht(b,3)),F.setIndex(A),F.computeVertexNormals(),r.push(F.toNonIndexed());for(let I=0;I<108;I++){const k=B(I,R+3,19)*Math.PI*2,G=Math.sqrt(B(I,R+7,11))*x.angRad*.72,O=E.upDir.clone().addScaledVector(E.e1,Math.cos(k)*G).addScaledVector(E.e2,Math.sin(k)*G).normalize(),L=(.0045+B(I,R+1,5)*.006)*ve;c.position.copy(O).multiplyScalar(T+18e-5),c.quaternion.setFromUnitVectors(ln,O),c.rotateY(B(I,2,9)*Math.PI*2),c.scale.set(L,L,L),c.updateMatrix(),o.push(c.matrix.clone());const N=L*.65;c.position.copy(O).multiplyScalar(T+38e-5),c.scale.set(N,N,N),c.updateMatrix(),I%2===0?a.push(c.matrix.clone()):l.push(c.matrix.clone())}});const h=new Oe({color:955050,emissive:35e3,emissiveIntensity:0,roughness:.08,metalness:.62,transparent:!0,opacity:.88,depthWrite:!1});n.push({mat:h,dayColor:955050,nightColor:279638,dayEmissive:546924,nightEmissive:39116,dayEI:0,nightEI:1.05});const u=new dt(Bt(r,!1),h);u.name="Pandora_Global_Inland_Lakes",i.add(u);const d=new Jt(1,.92,.08,12,1,!1,.25,Math.PI*1.85);d.translate(0,.04,0);const f=new Oe({color:2387512,emissive:55448,emissiveIntensity:0,roughness:.52});n.push({mat:f,dayColor:2387512,nightColor:803904,dayEmissive:1062936,nightEmissive:57498,dayEI:0,nightEI:1.35,pulsePhase:1.3});const g=new gt(d,f,o.length);g.name="Pandora_Giant_WaterLilies_Pads",g.frustumCulled=!1,o.forEach((x,R)=>g.setMatrixAt(R,x)),g.instanceMatrix.needsUpdate=!0,i.add(g);const _=zu(),m=new Oe({color:14184610,emissive:16726200,emissiveIntensity:0,roughness:.35}),p=new Oe({color:5425368,emissive:62975,emissiveIntensity:0,roughness:.35});n.push({mat:m,dayColor:14184610,nightColor:16732872,dayEmissive:4726840,nightEmissive:16723632,dayEI:0,nightEI:2.35,pulsePhase:.4}),n.push({mat:p,dayColor:5425368,nightColor:3735551,dayEmissive:1853520,nightEmissive:62975,dayEI:0,nightEI:2.35,pulsePhase:2});const y=new gt(_,m,a.length);y.name="Pandora_Giant_WaterLilies_PinkFlowers",y.frustumCulled=!1,a.forEach((x,R)=>y.setMatrixAt(R,x)),y.instanceMatrix.needsUpdate=!0;const S=new gt(_,p,l.length);return S.name="Pandora_Giant_WaterLilies_TurqFlowers",S.frustumCulled=!1,l.forEach((x,R)=>S.setMatrixAt(R,x)),S.instanceMatrix.needsUpdate=!0,i.add(y,S),i}function Gv(s){const e=s.localRadius,t=s.capLocalDir?s.capLocalDir.clone().normalize():new w(0,1,0),n=new _t().setFromUnitVectors(ln,t),i=Io([t.x,t.y,t.z]),r={qCap:n,sphereLandmarks:i},o=new Yt;o.name="Pandora_Global_360_World";const a=[],l=(ue,ge,be)=>Yn(ue,ge,be,n,i,4),c=new an(e,192,128),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),f=new re(270648),g=new re(2274738),_=new re(14208416),m=new re(2911794),p=new re(9213536),y=new re(1793065),S=new re(3889190),x=new re(3817024),R=new re(1841692),E=new re,T=new w;for(let ue=0;ue<u;ue++){T.set(h.getX(ue),h.getY(ue),h.getZ(ue)).normalize();const{cont:ge,highlandRidge:be,ashFactor:$e,reefFactor:Ze,borderMountain:_e,elev:ne,nation:Ve}=Yn(T.x,T.y,T.z,n,i,4);if(h.setXYZ(ue,T.x*(e+ne),T.y*(e+ne),T.z*(e+ne)),ge<=0){const ht=Math.max(q.smoothstep(ge,-.24,0),Ze*.78);E.copy(f).lerp(g,ht)}else if(Ve==="water"){const ht=q.smoothstep(ge,.015,.055);E.copy(_).lerp(m,ht)}else{const ht=Ot(T.x*22+3,T.y*22,T.z*22)*.5+.5;E.copy(p).lerp(y,q.smoothstep(ge,0,.075)),E.lerp(S,ht*.52);const qe=Math.min(.92,be*3.8+_e*.85);qe>.02&&E.lerp(x,qe),($e>.05||Ve==="ash")&&E.lerp(R,Ve==="ash"?.94:Math.min(1,$e*1.15))}d[ue*3]=E.r,d[ue*3+1]=E.g,d[ue*3+2]=E.b}c.setAttribute("color",new St(d,3)),c.computeVertexNormals();const M=Dv(),v=Nv(n,i),b=new Oe({map:M,vertexColors:!0,emissiveMap:v,emissive:new re(1,1,1),emissiveIntensity:0,roughness:.88,metalness:.04});a.push({mat:b,dayColor:16777215,nightColor:3885146,dayEmissive:16777215,nightEmissive:16777215,dayEI:0,nightEI:1.25});const A=new dt(c,b);A.name="Pandora_Global_Terrain_360",o.add(A);const F=new Oe({color:754846,emissive:35512,emissiveIntensity:0,roughness:.12,metalness:.52,transparent:!0,opacity:.72,depthWrite:!1,side:Zt});a.push({mat:F,dayColor:754846,nightColor:209478,dayEmissive:284780,nightEmissive:35e3,dayEI:0,nightEI:.72});const I=new dt(new an(e,112,72),F);I.name="Pandora_Global_Crystal_Ocean",o.add(I);const k=Sv(e,r),G=[.011*ve,.007*ve,.008*ve,.0085*ve,.008*ve,.0075*ve,.0075*ve],{waterMesh:O,bankMesh:L,waterMat:N,bankMat:Y}=Lv(k,G);o.add(O,L);const Q=[{waterMat:N,bankMat:Y,phase:.4}],se=kv(e,n,i,a);o.add(se);const he=[],we=[],U=new zt,V=Uv(e,Rt[0],n,i,a),J=Ov(e,Rt[1],n,i,a,we,he),ie=Bv(e,Rt[2],n,i,a,he),de=Fv(e,Rt[3],n,i,a),fe=zv(e,Rt[4],n,i,a),xe=vv(e,Rt[5],l,a),Te=Mv(e,Rt[6],l,a);o.add(V.group,J.group,ie.group,de.group,fe.group,xe.group,Te.group);const ye=yi(Rt[0].capDir),Se=new Oe({vertexColors:!0,roughness:.88}),H=[...ie.archCenters];[[-.02,.05,.07,-.04,.14*ve,.011*ve],[-.07,-.03,.03,.07,.13*ve,.01*ve]].forEach(([ue,ge,be,$e,Ze,_e],ne)=>{const{geo:Ve,apex:ht}=Wl(e,ye,ue,ge,be,$e,Ze,_e,30+ne,n,i),qe=new dt(Ve,Se);qe.name=`Pandora_Valley_Arch_${ne+1}`,o.add(qe),H.push({apex:ht,normal:ht.clone().normalize()})}),H.push({apex:V.anchorPos,normal:V.anchorDir}),H.push({apex:J.anchorPos,normal:J.anchorDir});const tt=new Jt(34e-5*ve,12e-5*ve,1,4,1);tt.translate(0,-.5,0);const We=new Oe({color:3894837,emissive:2293720,emissiveIntensity:0,roughness:.42});a.push({mat:We,dayColor:3894837,nightColor:59647,dayEmissive:1719834,nightEmissive:2162648,dayEI:0,nightEI:1.95,pulsePhase:.9});const Je=new gt(tt,We,he.length);Je.name="Pandora_Global_Hanging_Vines",Je.frustumCulled=!1,he.forEach((ue,ge)=>{U.position.copy(ue.pos),U.quaternion.setFromUnitVectors(ln,ue.normal),U.scale.set(1,ue.length,1),U.updateMatrix(),Je.setMatrixAt(ge,U.matrix)}),Je.instanceMatrix.needsUpdate=!0,o.add(Je);const Ee=[],ot=[],Re=[],D=[],C=[],j=[],oe=[],ce=[],ae=[],Ue=[],Ce=[],Ne=[],ft=[],pe=[],Ie=[],Qe=[],it=[],Ge=[],vt=[],ct=[],At=[],X=[],Ae=new re,Z=[7252044,3902540,5023330,9348170,3972738,3112256],le=ue=>{const ge=Math.floor(ue*Z.length)%Z.length;return Ae.setHex(Z[ge]),Ae.offsetHSL((ue-.5)*.04,0,(ue-.5)*.14),Ae.clone()},Le=ue=>(Ae.setRGB(.86+ue*.24,.92+(1-Math.abs(ue-.5)*2)*.22,.8+(1-ue)*.24),Ae.clone());for(let ue=0;ue<64;ue++){const ge=J.islandsData[ue%J.islandsData.length],be=B(ue,2,13)*Math.PI*2,$e=Math.sqrt(B(ue,5,2))*.52,Ze=new w(Math.cos(be)*ge.rx*$e,ge.h*.28,Math.sin(be)*ge.rz*$e),_e=new _t().setFromUnitVectors(ln,ge.normal);Ze.applyQuaternion(_e);const ne=ge.pos.clone().add(Ze),Ve=(.018+B(ue,8,4)*.022)*ve,ht=Ve*.65;U.position.copy(ne),U.quaternion.copy(_e),U.rotateY(B(ue,9,9)*Math.PI*2),U.scale.set(Ve,Ve,Ve),U.updateMatrix(),Ee.push(U.matrix.clone()),ot.push(le(B(ue,3,5))),U.position.copy(ne).addScaledVector(ge.normal,Ve*.92),U.scale.set(ht,ht,ht),U.updateMatrix(),Re.push(U.matrix.clone()),(ue%2===0?D:C).push(U.matrix.clone())}const De=(1+Math.sqrt(5))*.5,st=44e3,pt=new w,Pt=new w,$=new _t,Pe=new w,Fe=new w,at=new w;for(let ue=0;ue<st;ue++){const ge=1-(ue+.5)/st*2,be=Math.sqrt(Math.max(0,1-ge*ge)),$e=2*Math.PI*ue/De+(B(ue,3,17)-.5)*.028;pt.set(Math.cos($e)*be,ge,Math.sin($e)*be).normalize();const{cont:Ze,highlandRidge:_e,ashFactor:ne,forestClump:Ve,lakeBlend:ht,elev:qe,biome:et,nation:Qt}=Yn(pt.x,pt.y,pt.z,n,i,3),It=B(ue,11,29),kt=B(ue,19,7),Ut=B(ue,23,13);if(Qt==="ash"||ne>.22)continue;if(Qt==="water"){if(Ze<=.002){if(et==="reef"&&X.length<520&&It<.14&&qe>-.025){Pt.copy(pt).multiplyScalar(e+qe-2e-4),$.setFromUnitVectors(ln,pt),U.position.copy(Pt),U.quaternion.copy($),U.rotateY(kt*Math.PI*2);const Ft=(.007+kt*.013)*ve;U.scale.set(Ft,Ft*.45,Ft*.85),U.updateMatrix(),X.push(U.matrix.clone())}}else if(Ze>.005){if(Pt.copy(pt).multiplyScalar(e+qe),$.setFromUnitVectors(ln,pt),Ue.length<4200&&It<.62){const Ft=.017*ve*(.65+kt*1.15);U.position.copy(Pt),U.quaternion.copy($),U.rotateY(kt*Math.PI*2),U.rotateX((Ut-.5)*.14),U.scale.set(Ft,Ft,Ft),U.updateMatrix(),Ue.push(U.matrix.clone()),Ce.push(Le(Ut))}else if(pe.length<3800&&kt<.45){const Ft=(.007+It*.008)*ve;U.position.copy(Pt),U.quaternion.copy($),U.rotateY(It*Math.PI*2),U.scale.set(Ft,Ft,Ft),U.updateMatrix(),pe.push(U.matrix.clone()),Ie.push(le(It))}else if(Ne.length<5200&&Ut<.35){const Ft=(.006+kt*.007)*ve;U.position.copy(Pt),U.quaternion.copy($),U.rotateY(Ut*Math.PI*2),U.scale.set(Ft,Ft,Ft),U.updateMatrix(),Ne.push(U.matrix.clone()),ft.push(le(kt))}}continue}if(et==="lake"||ht>.35||Ze<=0||pt.distanceTo(Rt[3].capDir)<.036)continue;if(Pt.copy(pt).multiplyScalar(e+qe),$.setFromUnitVectors(ln,pt),et==="canyon"&&At.length<340&&_e>.042&&It<.24){U.position.copy(pt).multiplyScalar(e+qe-.001*ve),U.quaternion.copy($),U.rotateY(kt*Math.PI*2);const Ft=(.008+kt*.011)*ve,ki=(.036+Ut*.052)*ve;U.scale.set(Ft,ki,Ft),U.updateMatrix(),At.push(U.matrix.clone());continue}const Jn=Ve>-.04,rs=Ze<.065;if(Jn||rs&&It<.45){const Ft=.5+Math.pow(kt,1.3)*1.9,ki=(Ut-.5)*.16,Yu=(B(ue,5,31)-.5)*.16,Ku=le(Ut),Tr=Le(Ut);if(U.position.copy(Pt),U.quaternion.copy($),U.rotateY(kt*Math.PI*2),U.rotateX(ki),U.rotateZ(Yu),rs&&It<.55&&Ue.length<4200){const dn=.019*ve*Ft;U.scale.set(dn,dn,dn),U.updateMatrix(),Ue.push(U.matrix.clone()),Ce.push(Tr)}else{const dn=Math.floor(It*100)%3;if(dn===0&&Ee.length<4200){const _n=.024*ve*Ft,Lo=_n*(.58+Ut*.22);U.scale.set(_n,_n,_n),U.updateMatrix(),Ee.push(U.matrix.clone()),ot.push(Ku),U.position.copy(Pt).addScaledVector(pt,_n*.9),U.scale.set(Lo,Lo,Lo),U.updateMatrix(),Re.push(U.matrix.clone()),(Ee.length%2===0?D:C).push(U.matrix.clone())}else if(dn===1&&j.length<4800){const _n=.032*ve*Ft;U.scale.set(_n*.9,_n*1.35,_n*.9),U.updateMatrix(),j.push(U.matrix.clone()),oe.push(Tr)}else if(ce.length<4500){const _n=.022*ve*Ft;U.scale.set(_n,_n,_n),U.updateMatrix(),ce.push(U.matrix.clone()),ae.push(Tr)}else if(Ue.length<4200){const _n=.02*ve*Ft;U.scale.set(_n,_n,_n),U.updateMatrix(),Ue.push(U.matrix.clone()),Ce.push(Tr)}}const ju=Math.abs(pt.x)<.85?ln:new w(0,0,1);if(Fe.crossVectors(pt,ju).normalize(),at.crossVectors(pt,Fe).normalize(),Ne.length<5200&&kt<.58){Pe.copy(pt).addScaledVector(Fe,(It-.5)*.008).addScaledVector(at,(Ut-.5)*.008).normalize();const dn=(.0075+Ut*.009)*ve;U.position.copy(Pe).multiplyScalar(e+qe),U.quaternion.setFromUnitVectors(ln,Pe),U.rotateY(kt*Math.PI*2),U.scale.set(dn,dn,dn),U.updateMatrix(),Ne.push(U.matrix.clone()),ft.push(le(kt))}if(pe.length<3800&&Ut>.48){Pe.copy(pt).addScaledVector(Fe,(Ut-.5)*.01).addScaledVector(at,(It-.5)*.01).normalize();const dn=(.009+It*.011)*ve;U.position.copy(Pe).multiplyScalar(e+qe),U.quaternion.setFromUnitVectors(ln,Pe),U.rotateY(It*Math.PI*2),U.scale.set(dn,dn,dn),U.updateMatrix(),pe.push(U.matrix.clone()),Ie.push(le(It))}if(Qe.length<1800&&It>.78){Pe.copy(pt).addScaledVector(Fe,(kt-.5)*.01).addScaledVector(at,(Ut-.5)*.01).normalize();const dn=(.0065+kt*.01)*ve;U.position.copy(Pe).multiplyScalar(e+qe),U.quaternion.setFromUnitVectors(ln,Pe),U.rotateY(Ut*Math.PI*2),U.scale.set(dn,dn,dn),U.updateMatrix(),Qe.push(U.matrix.clone())}}else if(it.length+Ge.length<2400&&It<.25){const Ft=(.0052+kt*.0062)*ve;U.position.copy(Pt),U.quaternion.copy($),U.rotateY(Ut*Math.PI*2),U.scale.set(Ft,Ft,Ft),U.updateMatrix(),(ue%2===0?it:Ge).push(U.matrix.clone())}else if(vt.length+ct.length<1050&&It>.84){const Ft=(.01+kt*.015)*ve;U.position.copy(Pt),U.quaternion.copy($),U.rotateY(Ut*Math.PI*2),U.scale.set(Ft,Ft,Ft),U.updateMatrix(),(ue%2===0?vt:ct).push(U.matrix.clone())}}const nt=yi(Rt[4].capDir);for(let ue=0;ue<250;ue++){const ge=Math.floor(ue/4),be=B(ge,4,17)*Math.PI*2,$e=Math.sqrt(B(ge,11,3))*.095,Ze=Math.cos(be)*$e+(B(ue,2,9)-.5)*.012,_e=Math.sin(be)*$e+(B(ue,7,5)-.5)*.012,ne=ts(e,nt,Ze,_e,0,n,i),Ve=(.018+B(ue,9,6)*.026)*ve;U.position.copy(ne.pos),U.quaternion.setFromUnitVectors(ln,ne.normal),U.rotateY(B(ue,5,1)*Math.PI*2),U.scale.set(Ve,Ve,Ve),U.updateMatrix(),(ge%2===0?vt:ct).push(U.matrix.clone())}for(let ue=0;ue<420;ue++){const ge=k[ue%k.length],be=ge[Math.floor(B(ue,5,3)*ge.length)],$e=be.phi+(ue%2===0?1:-1)*(.008+B(ue,7,1)*.026)*ve,Ze=q.clamp(be.theta+(B(ue,3,8)-.5)*.018*ve,.001,Math.PI-.001),_e=Math.sin(Ze),ne=Yn(_e*Math.cos($e),Math.cos(Ze),_e*Math.sin($e),n,i,3).elev,Ve=yv(e,Ze,$e,ne);U.position.copy(Ve.pos),U.quaternion.setFromUnitVectors(ln,Ve.normal),U.rotateY(B(ue,1,6)*Math.PI*2);const ht=(.008+B(ue,4,9)*.01)*ve;U.scale.set(ht,ht,ht),U.updateMatrix(),Ne.push(U.matrix.clone()),ft.push(le(B(ue,2,3)))}const Ye=(ue,ge,be,$e,Ze=null)=>{const _e=new gt(ge,be,Math.max(1,$e.length));return _e.name=ue,_e.frustumCulled=!1,$e.forEach((ne,Ve)=>{_e.setMatrixAt(Ve,ne),Ze&&Ze[Ve]&&_e.setColorAt(Ve,Ze[Ve])}),_e.instanceMatrix.needsUpdate=!0,Ze&&_e.instanceColor&&(_e.instanceColor.needsUpdate=!0),o.add(_e),_e};if(At.length>0&&Ye("Pandora_Global_Canyon_Spires",Iv(7),new Oe({vertexColors:!0,roughness:.88}),At),X.length>0){const ue=new Oe({color:4943976,emissive:61695,emissiveIntensity:0,roughness:.72});a.push({mat:ue,dayColor:4943976,nightColor:542818,dayEmissive:1589304,nightEmissive:59647,dayEI:0,nightEI:1.75,pulsePhase:1.2}),Ye("Pandora_Global_Coral_Reefs",new zs(1,0),ue,X)}Qe.length>0&&Ye("Pandora_Global_Mossy_Rocks",Tv(),new Oe({vertexColors:!0,roughness:.9}),Qe);const ut=new Jt(.055,.18,1,6,1);ut.translate(0,.5,0);const Ct=new Oe({color:4337696,roughness:.9});a.push({mat:Ct,dayColor:4337696,nightColor:1446952,dayEmissive:0,nightEmissive:662570,dayEI:0,nightEI:.18}),Ye("Pandora_Global_Tree_Trunks",ut,Ct,Ee);const{outer:tn,under:$t}=ku(),sn=new Oe({color:16777215,emissive:537664,emissiveIntensity:0,roughness:.68});a.push({mat:sn,dayColor:12769474,nightColor:1460812,dayEmissive:667158,nightEmissive:540752,dayEI:0,nightEI:.52}),Ye("Pandora_Global_Canopy_Tops",tn,sn,Re,ot);const wt=new Oe({color:2777650,emissive:65512,emissiveIntensity:0,roughness:.45,side:Zt});a.push({mat:wt,dayColor:2777650,nightColor:62975,dayEmissive:1456156,nightEmissive:65512,dayEI:0,nightEI:2.2,pulsePhase:0}),Ye("Pandora_Global_Canopy_Under_Turquoise",$t,wt,D);const jt=new Oe({color:3303982,emissive:16720544,emissiveIntensity:0,roughness:.45,side:Zt});a.push({mat:jt,dayColor:3303982,nightColor:16725168,dayEmissive:1719320,nightEmissive:16720544,dayEI:0,nightEI:2.15,pulsePhase:1.9}),Ye("Pandora_Global_Canopy_Under_Magenta",$t,jt,C);const bt=new Oe({vertexColors:!0,emissive:51416,emissiveIntensity:0,roughness:.72});a.push({mat:bt,dayColor:16777215,nightColor:5143684,dayEmissive:798236,nightEmissive:34968,dayEI:0,nightEI:.48}),Ye("Pandora_Global_Alien_Redwoods",bv(),bt,j,oe);const Mt=new Oe({vertexColors:!0,emissive:9455871,emissiveIntensity:0,roughness:.78});a.push({mat:Mt,dayColor:16777215,nightColor:6056066,dayEmissive:1189400,nightEmissive:5909664,dayEI:0,nightEI:.55}),Ye("Pandora_Global_Gnarled_Root_Trees",wv(),Mt,ce,ae);const nn=new Oe({vertexColors:!0,emissive:55464,emissiveIntensity:0,roughness:.72,side:Zt});a.push({mat:nn,dayColor:16777215,nightColor:5013626,dayEmissive:1194008,nightEmissive:45206,dayEI:0,nightEI:.75}),Ye("Pandora_Global_Alien_Palms",Ev(),nn,Ue,Ce);const yt=new Oe({color:16777215,emissive:57514,emissiveIntensity:0,roughness:.65,side:Zt});a.push({mat:yt,dayColor:12769474,nightColor:1462860,dayEmissive:1192986,nightEmissive:51352,dayEI:0,nightEI:1.05,pulsePhase:1.1}),Ye("Pandora_Global_Broadleaf_Shrubs",Av(),yt,pe,Ie);const P=new Oe({color:16777215,emissive:59548,emissiveIntensity:0,roughness:.62,side:Zt});a.push({mat:P,dayColor:13032646,nightColor:1333314,dayEmissive:1327646,nightEmissive:57498,dayEI:0,nightEI:1.25,pulsePhase:2.4}),Ye("Pandora_Global_Giant_Ferns",Cv(),P,Ne,ft);const W=zu(),te=new Oe({color:8796822,emissive:12728575,emissiveIntensity:0,roughness:.45});a.push({mat:te,dayColor:8796822,nightColor:13650687,dayEmissive:3807298,nightEmissive:12071167,dayEI:0,nightEI:2.3,pulsePhase:.8}),Ye("Pandora_Global_Flowers_Violet",W,te,it);const ee=new Oe({color:13394984,emissive:16739866,emissiveIntensity:0,roughness:.45});a.push({mat:ee,dayColor:13394984,nightColor:16742946,dayEmissive:4989968,nightEmissive:16738324,dayEI:0,nightEI:2.35,pulsePhase:2.6}),Ye("Pandora_Global_Flowers_Orange",W,ee,Ge);const K=Rv(),Me=new Oe({color:7357048,emissive:11024639,emissiveIntensity:0,roughness:.48});a.push({mat:Me,dayColor:7357048,nightColor:10631935,dayEmissive:3284024,nightEmissive:9973503,dayEI:0,nightEI:2.25,pulsePhase:1.5}),Ye("Pandora_Global_Mushrooms_Violet",K,Me,vt);const Be=new Oe({color:10767974,emissive:16725672,emissiveIntensity:0,roughness:.48});a.push({mat:Be,dayColor:10767974,nightColor:16726186,dayEmissive:4332584,nightEmissive:16722072,dayEI:0,nightEI:2.2,pulsePhase:3.1}),Ye("Pandora_Global_Mushrooms_NeonPink",K,Be,ct),N.userData.animatedEmissive=!0,Y.userData.animatedEmissive=!0;for(let ue=0;ue<a.length;ue++)a[ue].mat.userData=a[ue].mat.userData||{},a[ue].mat.userData.animatedEmissive=!0;const je=new re,Xe=new re,xt=new re(821410),z=new re(280664),me=new re(2649668),Ke=new re(59647);return{group:o,waterfalls:we,pulsingRivers:Q,archCenters:H,riverPaths:k,landmarks:Rt,samplerCtx:r,getFloorAndWaterAtDir:ue=>{const ge=Yn(ue.x,ue.y,ue.z,n,i,3),be=ge.cont<=0||ge.lakeBlend>.35,$e=ge.cont<=0?0:ge.lakeBlend>.35?ge.lakeWaterElev:-1;return{terrainElev:ge.elev,waterElev:$e,hasWater:be,nation:ge.nation,forestFactor:ge.forestFactor,waterFactor:ge.waterFactor,ashFactor:ge.ashFactor,reefFactor:ge.reefFactor,biome:ge.biome}},updateDayNight:(ue,ge,be=0)=>{const $e=q.smoothstep(-ue,-.1,.04);for(let qe=0;qe<a.length;qe++){const et=a[qe];if(et.isWaterfall){const Qt=.85+.15*Math.sin(ge*3.8+qe);et.mat.color.setRGB(q.lerp(et.dayColorRGB[0],et.nightColorRGB[0]*Qt,$e),q.lerp(et.dayColorRGB[1],et.nightColorRGB[1]*Qt,$e),q.lerp(et.dayColorRGB[2],et.nightColorRGB[2]*Qt,$e)),et.mat.opacity=q.lerp(.52,.72,$e);continue}if(et.dayColor!==void 0&&(je.setHex(et.dayColor),Xe.setHex(et.nightColor),et.mat.color.copy(je).lerp(Xe,$e)),et.dayEmissive!==void 0&&(je.setHex(et.dayEmissive),Xe.setHex(et.nightEmissive),et.mat.emissive.copy(je).lerp(Xe,$e)),et.dayEI!==void 0){const Qt=et.pulsePhase!==void 0?.9+.16*Math.sin(ge*1.7+et.pulsePhase):1;et.mat.emissiveIntensity=q.lerp(et.dayEI,et.nightEI*Qt,$e)}}const Ze=.85+.25*Math.sin(ge*2);N.color.copy(xt).lerp(z,$e),N.emissiveIntensity=q.lerp(0,1.15*Ze,$e),Y.color.copy(me).lerp(Ke,$e),Y.emissiveIntensity=q.lerp(0,2.35*Ze,$e);const _e=fe.plumeGeo.attributes.position,ne=fe.plumeGeo.attributes.color,Ve=fe.geyserEmitters,ht=fe.puffsPerGeyser;for(let qe=0;qe<Ve.length;qe++){const et=Ve[qe];for(let Qt=0;Qt<ht;Qt++){const It=qe*ht+Qt,kt=(ge*.48+et.phase+Qt/ht)%1,Ut=kt*et.maxHeight,Jn=Math.sin(kt*Math.PI)*.004*ve;_e.setXYZ(It,et.basePos.x+et.normal.x*Ut+Math.cos(It)*Jn,et.basePos.y+et.normal.y*Ut,et.basePos.z+et.normal.z*Ut+Math.sin(It)*Jn);const rs=q.lerp(.85,qe%2===0?.2:.95,$e),Ft=q.lerp(.95,qe%2===0?1.45:.45,$e),ki=q.lerp(1,1.85,$e);ne.setXYZ(It,rs,Ft,ki)}}_e.needsUpdate=!0,ne.needsUpdate=!0,fe.plumeMat.opacity=q.lerp(.32,.65,$e),xe.update(ge,$e),Te.update(ge,$e,be)}}}function Vv(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new xn(s);return n.needsUpdate=!0,n}const Gu=Vv();function wh(s,e,t=350){const n=e,i=1/3.5,r=s==="p2",o=new Yt;o.name=`${s}_Urban_AV_Traffic_System`;const a=(r?.0068:.0033)*i,l=new en(a*.55,a*.34,a*1.85),c=new Oe({color:1580068,roughness:.38,metalness:.85}),h=new gt(l,c,t),u=new en(a*.58,a*.22,a*.55);u.translate(0,0,a*.92);const d=new Cn({color:s==="p4"?new re(2.4,2.8,3.2):new re(1.4,3.2,4)}),f=new gt(u,d,t),g=new en(a*.42,a*.16,a*3.8);g.translate(0,0,-a*2.55);const _=new Cn({color:s==="p4"?new re(4.2,1.4,.25):new re(4.2,.85,.25),transparent:!0,opacity:.88}),m=new gt(g,_,t);o.add(h,f,m);const p=[],y=[new w(1,0,0),new w(0,0,1),new w(.707,0,.707),new w(-.707,0,.707)];for(let v=0;v<t;v++){const b=v%2===0,A=v%7,F=r?(.045+A*.13+B(v,3,7)*.08)*i:(.016+A*.022+B(v,3,7)*.012)*i,I=n+F;if(b){const k=r&&v%7===0,G=(v>>1)%14,O=r?k?.34+B(v,2,19)*.16:.028+G/13*.28+(B(v,1,9)-.5)*.015:(.035+G*.034+(B(v,1,9)-.5)*.014)*i*1.2,L=G%2===0?1:-1,N=L*(.085+B(v,5,2)*.11)/Math.max(.08,Math.sin(O));p.push({type:"ring",radius:I,theta:O,sinTheta:Math.sin(O),cosTheta:Math.cos(O),phi0:B(v,8,4)*Math.PI*2,omega:N,dir:L,bobAmp:(r?.006:.002+B(v,2,6)*.0025)*i,bobPhase:B(v,4,1)*Math.PI*2})}else{const k=v%y.length,G=r?.078:.042*1.15,O=(Math.floor(v/8)%11-5)*G*i,L=y[k],N=new _t().setFromAxisAngle(L,O),Y=v%4===1?1:-1,Q=r?.34:.52*i*1.2,se=(B(v,6,3)*2-1)*Q,he=Y*(r?.13+B(v,9,5)*.16:(.09+B(v,9,5)*.13)*1.25)*i;p.push({type:"corridor",radius:I,qPlane:N,s0:se,arcSpan:Q,speed:he,dir:Y,bobAmp:(r?.005:.002+B(v,7,2)*.002)*i,bobPhase:B(v,3,4)*Math.PI*2})}}const S=new w,x=new w,R=new w,E=new w,T=new lt,M=new w;return{update(v){if(!(!o.parent||!o.parent.visible)){for(let b=0;b<t;b++){const A=p[b],F=Math.sin(v*2.2+A.bobPhase)*A.bobAmp,I=A.radius+F;if(A.type==="ring"){const G=A.phi0+A.omega*v,O=Math.cos(G),L=Math.sin(G);x.set(A.sinTheta*O,A.cosTheta,A.sinTheta*L).normalize(),S.copy(x).multiplyScalar(I),R.set(-A.dir*L,0,A.dir*O).normalize(),E.crossVectors(x,R).normalize(),R.crossVectors(E,x).normalize()}else{const G=A.arcSpan*2;let O=(A.s0+A.speed*v+A.arcSpan)%G;O<0&&(O+=G);const L=O-A.arcSpan,N=Math.sin(L),Y=Math.cos(L);x.set(N,Y,0).applyQuaternion(A.qPlane).normalize(),S.copy(x).multiplyScalar(I),R.set(A.dir*Y,-A.dir*N,0).applyQuaternion(A.qPlane).normalize(),E.crossVectors(x,R).normalize()}let k=1;if(A.type==="corridor"){const G=Math.abs(Math.acos(q.clamp(x.y,-1,1)))/A.arcSpan;k=1-q.smoothstep(G,.85,1)}T.makeBasis(E,x,R),T.setPosition(S),k<.99&&(M.setScalar(Math.max(.01,k)),T.scale(M)),h.setMatrixAt(b,T),f.setMatrixAt(b,T),m.setMatrixAt(b,T)}h.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}},group:o}}function Hv(s){const e=[],t=[],n=[],i=[],r=[],o=(f,g)=>(f.material&&(f.material.userData=f.material.userData||{},f.material.userData.animatedEmissive=!0),{mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let a=0;s.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";a++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(o(f,a)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(o(f,a)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(o(f,a)):/NC_Neon_Sign_/.test(g)?i.push(o(f,a)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&r.push(o(f,a))});const l=f=>{if(f.length===0)return null;const g=new w;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const _=g.clone().normalize();return{parts:f,centroid:g,localUp:_}},c=[l(e),l(t)].filter(Boolean),h=new _t,u=new _t,d=new w;return{update(f,g=1){c.forEach((_,m)=>{const p=m*2.4,y=Math.sin(f*1.45+p)*1.4,S=Math.sin(f*1.15+p)*.08;for(let x=0;x<_.parts.length;x++){const R=_.parts[x],E=/Tail|Fin/i.test(R.mesh.name),T=Math.sin(f*3.1+p+x*.65)*(E?.14:.045);d.copy(R.basePos).sub(_.centroid),h.setFromAxisAngle(_.localUp,S+T),d.applyQuaternion(h),R.mesh.position.copy(_.centroid).add(d).addScaledVector(_.localUp,y),R.mesh.quaternion.copy(h).multiply(R.baseQuat),R.material&&R.material.emissiveIntensity!==void 0&&(R.material.emissiveIntensity=R.baseEmissive*(.85+.22*Math.sin(f*2.6+x*.7+p))*g)}});for(let _=0;_<n.length;_++){const m=n[_],p=Math.sin(f*1.6+m.seed*.9)*.55;m.mesh.position.copy(m.basePos).addScaledVector(m.normal,p),m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=m.baseEmissive*(.88+.16*Math.sin(f*3.4+m.seed))*g)}for(let _=0;_<i.length;_++){const m=i[_];if(!m.material||m.material.emissiveIntensity===void 0)continue;const p=.88+.14*Math.sin(f*2.2+m.seed*1.7),y=Math.sin(f*23+m.seed*7.3)>.965?.55:1;m.material.emissiveIntensity=m.baseEmissive*p*y*g}for(let _=0;_<r.length;_++){const m=r[_];m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=m.baseEmissive*(.72+.48*Math.sin(f*3.2+m.seed*.8))*g),/Hexagon_Ring|Hexagon_Spoke/i.test(m.mesh.name)&&(u.setFromAxisAngle(m.normal,f*.35*(_%2===0?1:-1)),m.mesh.quaternion.copy(u).multiply(m.baseQuat))}}}}function Wv(s){const e=[];let t=0;return s.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,n.material.userData=n.material.userData||{},n.material.userData.animatedEmissive=!0,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n,i=1){for(let r=0;r<e.length;r++){const o=e[r];if(o.material.emissiveIntensity!==void 0){const a=.78+.36*Math.sin(n*1.9-o.phase);o.material.emissiveIntensity=o.baseEmissive*a*i}}}}}function Xv(s){const e=s,t=1/3.5,n=new Yt;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,r=.0022*t,o=new en(r*.4,r*.32,r*1.8),a=new en(r*1.9,r*.08,r*.72);a.translate(r*.95,0,0);const l=new en(r*1.9,r*.08,r*.72);l.translate(-r*.95,0,0);const c=new Oe({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),h=new gt(o,c,i),u=new gt(a,c,i),d=new gt(l,c,i);n.add(h,u,d);const f=[];for(let I=0;I<i;I++){const k=e+(I<55?.145+B(I,2,7)*.09:.035+B(I,4,3)*.06)*t,G=(.025+B(I,5,1)*.24)*t*1.1,O=B(I,8,9)*Math.PI*2,L=(I%3===0?-1:1)*(.28+B(I,3,6)*.28);f.push({alt:k,theta:G,phi0:O,omega:L,dir:L>=0?1:-1,flapSpeed:5.5+B(I,1,5)*3.5,flapPhase:B(I,7,2)*Math.PI*2,scaleFactor:.75+B(I,9,4)*.8})}const g=42,_=new Float32Array(g*3),m=[];for(let I=0;I<g;I++){const k=(.16+B(I,11,2)*.24)*t*1.15,G=B(I,13,5)*Math.PI*2,O=e+(.045+B(I,4,8)*.065)*t;m.push({theta:k,phi0:G,alt:O,speed:.028+B(I,6,3)*.025})}const p=new Nt;p.setAttribute("position",new St(_,3));const y=new An({map:Gu,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),S=new Rn(p,y);S.name="Medieval_Drifting_Cloud_Banks",n.add(S);const x=new w,R=new w,E=new w,T=new w,M=new lt,v=new lt,b=new _t,A=new w(0,0,1),F=new w;return{group:n,update(I,k=1){if(!n.parent||!n.parent.visible)return;for(let O=0;O<i;O++){const L=f[O],N=L.phi0+L.omega*I,Y=L.theta+Math.sin(I*.6+L.flapPhase)*.008,Q=L.alt+Math.sin(I*1.1+L.flapPhase)*.0018,se=Math.sin(Y),he=Math.cos(Y),we=Math.cos(N),U=Math.sin(N);R.set(se*we,he,se*U).normalize(),x.copy(R).multiplyScalar(Q),E.set(-L.dir*U,0,L.dir*we).normalize(),T.crossVectors(R,E).normalize(),E.crossVectors(T,R).normalize(),M.makeBasis(T,R,E),M.setPosition(x),F.setScalar(L.scaleFactor),M.scale(F),h.setMatrixAt(O,M);const J=Math.sin(I*.45+L.flapPhase)>-.25?.55:.12,ie=Math.sin(I*L.flapSpeed+L.flapPhase)*J;b.setFromAxisAngle(A,ie),v.makeRotationFromQuaternion(b),v.premultiply(M),u.setMatrixAt(O,v),b.setFromAxisAngle(A,-ie),v.makeRotationFromQuaternion(b),v.premultiply(M),d.setMatrixAt(O,v)}h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const G=p.attributes.position;for(let O=0;O<g;O++){const L=m[O],N=L.phi0+L.speed*I,Y=Math.sin(L.theta);G.setXYZ(O,L.alt*Y*Math.cos(N),L.alt*Math.cos(L.theta),L.alt*Y*Math.sin(N))}G.needsUpdate=!0}}}function Bi(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.hypot(i,r,o);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,r/a,o/a)}return t.needsUpdate=!0,s}function Ii(s,e,t){const n=Math.max(1e-6,s),i=new Qn(n,e,4,2);i.rotateX(-Math.PI*.5);const r=i.attributes.position;for(let o=0;o<r.count;o++){const a=q.clamp((r.getX(o)+n*.5)/n,0,1),l=r.getZ(o),c=t*a*n,h=-Math.pow(a,1.35)*e*.85,u=1-Math.pow(a,1.6)*.78,d=Math.sin(a*Math.PI)*e*.14;r.setXYZ(o,c,d,l*u+h)}return i.computeVertexNormals(),Bi(i,1)}function Eh(s){const e=[],t=new gn(s*.34,s*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new gn(s*.18,s*.9,4);n.rotateX(Math.PI*.42),n.translate(0,s*.2,s*1.15),e.push(n.toNonIndexed());const i=new gn(s*.12,s*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-s*1.85),e.push(i.toNonIndexed());const r=Bt(e,!1);return r.computeVertexNormals(),r}function qv(s){const e=[],t=new en(s*.72,s*.68,s*1.55);t.translate(0,s*.95,0),e.push(t.toNonIndexed());const n=new en(s*.36,s*.58,s*.68);n.rotateX(.45),n.translate(0,s*1.32,s*.85),e.push(n.toNonIndexed());const i=new en(s*.92,s*.44,s*.36);i.rotateX(.28),i.translate(0,s*1.54,s*1.15),e.push(i.toNonIndexed());const r=Bt(e,!1);r.computeVertexNormals();const o=[],a=new Jt(s*.1,s*.08,s*.85,5);a.translate(s*.28,-s*.42,0);const l=a.clone();l.translate(-s*.56,0,0),o.push(a.toNonIndexed(),l.toNonIndexed());const c=Bt(o,!1);c.computeVertexNormals();const h=c.clone();return{bodyGeo:r,frontLegsGeo:c,backLegsGeo:h}}function Yv(s){const e=new an(s*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),Bi(e,1);const t=[];for(let i=0;i<4;i++){const r=i/4*Math.PI*2,o=new Jt(s*.05,s*.012,s*1.45,4);o.translate(Math.cos(r)*s*.22,-s*.72,Math.sin(r)*s*.22),t.push(o.toNonIndexed())}const n=Bt(t,!1);return n.computeVertexNormals(),Bi(n,-1),{bellGeo:e,tentGeo:n}}function Sr(s){return s.map(e=>{const t=e.index?e.toNonIndexed():e;return t.attributes.uv&&t.deleteAttribute("uv"),t})}function Kv(s){const e=s,t=[],n=new an(e*.42,12,10);n.scale(.88,.72,2.55),t.push(n);const i=new gn(e*.42,e*1.15,8);i.rotateX(Math.PI*.5),i.scale(1.18,.72,1),i.translate(0,e*.03,e*1.15),t.push(i),[-1,1].forEach(h=>{const u=new en(e*.16,e*.16,e*.92);u.rotateY(h*.12),u.translate(h*e*.24,e*.2,e*.92),t.push(u);const d=new en(e*1.55,e*.06,e*.48);d.rotateY(-h*.34),d.rotateZ(-h*.1),d.translate(h*e*.85,-e*.12,e*.18),t.push(d)});const r=new gn(e*.25,e*1.35,7);r.rotateX(-Math.PI*.5),r.translate(0,0,-e*1.35),t.push(r);const o=new en(e*1.35,e*.05,e*.44);o.translate(0,e*.02,-e*1.98),t.push(o);const a=Bt(Sr(t),!1);a.computeVertexNormals(),Bi(a,1);const l=[];[-1,1].forEach(h=>{for(let u=0;u<4;u++){const d=new en(e*.05,e*.07,e*.22);d.rotateY(h*.08),d.translate(h*(e*.36-u*.04*e),e*.06,e*(.72-u*.42)),l.push(d)}});const c=Bt(Sr(l),!1);return c.computeVertexNormals(),Bi(c,1),{bodyGeo:a,glowGeo:c}}function jv(s){const e=s,t=[],n=new an(e*.24,9,7);n.scale(.85,.72,2),t.push(n);const i=new Jt(e*.07,e*.14,e*.85,6);i.rotateX(Math.PI*.42),i.translate(0,e*.12,e*.74),t.push(i);const r=new gn(e*.09,e*.36,5);r.rotateX(Math.PI*.5),r.translate(0,e*.22,e*1.24),t.push(r);const o=new gn(e*.14,e*1.15,6);o.rotateX(-Math.PI*.5),o.translate(0,-e*.02,-e*.95),t.push(o);const a=Bt(Sr(t),!1);a.computeVertexNormals(),Bi(a,1);const l=[];[-1,1].forEach(h=>{const u=new en(e*.92,e*.04,e*.28);u.rotateY(-h*.35),u.translate(h*e*.48,-e*.05,e*.24),l.push(u);const d=new en(e*.62,e*.035,e*.22);d.rotateY(-h*.28),d.translate(h*e*.34,-e*.06,-e*.34),l.push(d)});const c=Bt(Sr(l),!1);return c.computeVertexNormals(),Bi(c,1),{bodyGeo:a,flipperGeo:c}}function Zv(s){const e=s,t=[],n=new gn(e*.24,e*.85,5);n.rotateX(Math.PI*.5),n.scale(.55,1,1),n.translate(0,0,e*.15),t.push(n);const i=new gn(e*.22,e*.42,4);i.rotateX(-Math.PI*.5),i.scale(.32,1.15,1),i.translate(0,0,-e*.44),t.push(i);const r=Bt(Sr(t),!1);return r.computeVertexNormals(),Bi(r,1),r}function $v(s,e){const t=s,n=1/3.5,i=new Yt;i.name="Pandora_Bioluminescent_Life";const r=e?.samplerCtx||null,o=r?.qCap,a=r?.sphereLandmarks,l=z=>{const me=z.clone().normalize(),Ke=Math.abs(me.x)<.85?new w(1,0,0):new w(0,0,1),rt=new w().crossVectors(me,Ke).normalize(),He=new w().crossVectors(me,rt).normalize();return{normalDir:me,e1:rt,e2:He}},c=2200,h=new Float32Array(c*3),u=new Float32Array(c*3),d=[],f=[new re(62975),new re(11553023),new re(3836159),new re(16732856)],g=(1+Math.sqrt(5))*.5,_=[];for(let z=0;z<5e3;z++){const me=1-(z+.5)/5e3*2,Ke=Math.sqrt(Math.max(0,1-me*me)),rt=2*Math.PI*z/g,He=Math.cos(rt)*Ke,ue=Math.sin(rt)*Ke,ge=Yn(He,me,ue,o,a);ge.nation==="forest"&&ge.forestFactor>.78&&ge.cont>.04&&ge.biome!=="lake"&&ge.elev>5e-4&&_.push({dir:new w(He,me,ue),elev:ge.elev,cont:ge.cont})}_.length===0&&_.push({dir:Rt[0].capDir.clone(),elev:.002,cont:.25});for(let z=0;z<c;z++){let me,Ke=.002;if(z<550){const ue=Rt[z%5],ge=l(ue.capDir),be=B(z,7,13)*Math.PI*2,$e=Math.sqrt(B(z,3,19))*.105;me=ge.normalDir.clone().addScaledVector(ge.e1,Math.cos(be)*$e).addScaledVector(ge.e2,Math.sin(be)*$e).normalize();const Ze=Yn(me.x,me.y,me.z,o,a,3);if(Ze.nation!=="forest"){const _e=_[z%_.length];me.copy(_e.dir),Ke=_e.elev}else Ke=Ze.elev}else{const ue=_[(z*7+Math.floor(B(z,4,11)*19))%_.length],ge=l(ue.dir),be=B(z,2,17)*Math.PI*2,$e=B(z,9,5)*.025;me=ge.normalDir.clone().addScaledVector(ge.e1,Math.cos(be)*$e).addScaledVector(ge.e2,Math.sin(be)*$e).normalize(),Ke=ue.elev}const rt=t+Ke+(.005+B(z,5,11)*.19)*n;d.push({dir:me,baseAlt:rt,driftSpeed:.025+B(z,2,7)*.035,risePhase:B(z,9,4)*Math.PI*2});const He=f[z%f.length];u[z*3]=He.r,u[z*3+1]=He.g,u[z*3+2]=He.b}const m=new Nt;m.setAttribute("position",new St(h,3)),m.setAttribute("color",new St(u,3));const p=new An({size:.72,map:Gu,vertexColors:!0,transparent:!0,opacity:.16,depthWrite:!1,blending:mn,sizeAttenuation:!0}),y=new Rn(m,p);y.frustumCulled=!1,i.add(y);const S=90,x=.0054*n,R=new Oe({color:744312,emissive:55551,emissiveIntensity:.08,roughness:.42}),E=new Oe({color:43200,emissive:61695,emissiveIntensity:.1,roughness:.38,side:Zt}),T=new Oe({color:944852,emissive:2132223,emissiveIntensity:.1,roughness:.42,side:Zt});R.userData.animatedEmissive=!0,E.userData.animatedEmissive=!0,T.userData.animatedEmissive=!0;const M=new gt(Eh(x),R,S),v=new gt(Ii(x*2.75,x*1.1,1),E,S),b=new gt(Ii(x*2.75,x*1.1,-1),E,S),A=new gt(Ii(x*1.65,x*.75,1),T,S),F=new gt(Ii(x*1.65,x*.75,-1),T,S);[M,v,b,A,F].forEach(z=>{z.frustumCulled=!1,i.add(z)});const I=[l(Rt[0].capDir),l(Rt[1].capDir),l(Rt[2].capDir)],k=e?.archCenters||[];for(let z=0;z<k.length;z++)k[z]?.normal&&I.push(l(k[z].normal));const G=[];for(let z=0;z<S;z++){const me=z<25?0:z<55?1:2,Ke=z<60?I[me]:I[z%I.length],rt=(.032+B(z,4,1)*.088)*n,He=t+(.055+B(z,8,5)*.17)*n,ue=(z%3===0?-1:1)*(.4+B(z,6,3)*.34);G.push({frame:Ke,orbitRad:rt,alt:He,phi0:B(z,4,2)*Math.PI*2,omega:ue,phase:B(z,3,9)*Math.PI*2,scale:.78+B(z,5,6)*.55})}const O=4,L=.0145*n,N=new Oe({color:10884618,emissive:16727056,emissiveIntensity:.1,roughness:.4}),Y=new Oe({color:14166542,emissive:16734744,emissiveIntensity:.12,roughness:.4,side:Zt});N.userData.animatedEmissive=!0,Y.userData.animatedEmissive=!0;const Q=new gt(Eh(L),N,O),se=new gt(Ii(L*3.1,L*1.25,1),Y,O),he=new gt(Ii(L*3.1,L*1.25,-1),Y,O),we=new gt(Ii(L*1.85,L*.85,1),Y,O),U=new gt(Ii(L*1.85,L*.85,-1),Y,O);[Q,se,he,we,U].forEach(z=>{z.frustumCulled=!1,i.add(z)});const V=[{frame:l(Rt[0].capDir),alt:t+.19*n,orbitRad:.11*n,phi0:.4,omega:.22,phase:0},{frame:l(Rt[1].capDir),alt:t+.26*n,orbitRad:.14*n,phi0:2.1,omega:-.2,phase:1.5},{frame:l(Rt[2].capDir),alt:t+.21*n,orbitRad:.12*n,phi0:3.9,omega:.21,phase:2.7},{frame:l(Rt[3].capDir),alt:t+.18*n,orbitRad:.1*n,phi0:5.1,omega:-.23,phase:.9}],J=48,ie=.0048*n,{bodyGeo:de,frontLegsGeo:fe,backLegsGeo:xe}=qv(ie),Te=new Oe({color:3682900,emissive:1990808,emissiveIntensity:0,roughness:.68}),ye=new Oe({color:2499642,roughness:.75});Te.userData.animatedEmissive=!0;const Se=new gt(de,Te,J),H=new gt(fe,ye,J),tt=new gt(xe,ye,J);[Se,H,tt].forEach(z=>{z.frustumCulled=!1,i.add(z)});const We=_.filter(z=>z.cont>.08),Je=We.length>=6?We:_,Ee=[];for(let z=0;z<6;z++){const me=Je[Math.floor(z/6*Je.length)%Je.length].dir;Ee.push({...l(me),radOffset:.015+z%3*.004,speed:(z%2===0?1:-1)*(.14+z%3*.02)})}const ot=[];for(let z=0;z<J;z++){const me=Ee[z%Ee.length],Ke=Math.floor(z/Ee.length);ot.push({herd:me,offsetAng:Ke*.78+B(z,2,7)*.35,radialFactor:.52+B(z,5,3)*.65,phase:B(z,9,1)*Math.PI*2,scale:.85+B(z,4,8)*.38})}const Re=240,D=.0038*n,{bellGeo:C,tentGeo:j}=Yv(D),oe=new Oe({color:16047359,emissive:12735743,emissiveIntensity:.12,transparent:!0,opacity:.35,roughness:.25,depthWrite:!1,blending:mn,side:Zt}),ce=new Cn({color:new re(.85,.75,1.05),transparent:!0,opacity:.28,depthWrite:!1,blending:mn});oe.userData.animatedEmissive=!0,ce.userData.animatedEmissive=!0;const ae=new gt(C,oe,Re),Ue=new gt(j,ce,Re);ae.frustumCulled=!1,Ue.frustumCulled=!1,i.add(ae,Ue);const Ce=[];for(let z=0;z<Re;z++){let me,Ke,rt;if(z<75){const He=z<45?Rt[3]:Rt[0];me=l(He.capDir);const ue=B(z,3,15)*Math.PI*2,ge=Math.sqrt(B(z,6,11))*.075;Ke=me.normalDir.clone().addScaledVector(me.e1,Math.cos(ue)*ge).addScaledVector(me.e2,Math.sin(ue)*ge).normalize(),rt=oo(Ke.x,Ke.y,Ke.z,0,r)}else{const He=_[(z*11+Math.floor(B(z,2,13)*13))%_.length];Ke=He.dir,me=l(Ke),rt=He.elev}Ce.push({frame:me,alt:t+rt+(.015+B(z,9,7)*.068)*n,phase:B(z,2,5)*Math.PI*2,scale:.72+B(z,8,3)*.78})}const Ne=Rt[6],ft=l(Ne.capDir),pe=[];for(let z=0;z<1200;z++){const me=B(z,11,29)*Math.PI*2,Ke=Math.sqrt(B(z,17,7))*.34,rt=ft.normalDir.clone().addScaledVector(ft.e1,Math.cos(me)*Ke).addScaledVector(ft.e2,Math.sin(me)*Ke).normalize(),He=Yn(rt.x,rt.y,rt.z,o,a,3);He.nation==="water"&&He.waterFactor>.72&&He.elev<-.025&&pe.push({dir:rt,elev:He.elev})}pe.length===0&&pe.push({dir:ft.normalDir.clone(),elev:-.095});const Ie=5,Qe=.0145*n,{bodyGeo:it,glowGeo:Ge}=Kv(Qe),vt=new Oe({color:2508894,roughness:.42,metalness:.14}),ct=new Oe({color:5826815,emissive:61695,emissiveIntensity:.06,roughness:.3});ct.userData.animatedEmissive=!0;const At=new gt(it,vt,Ie),X=new gt(Ge,ct,Ie);At.frustumCulled=!1,X.frustumCulled=!1,i.add(At,X);const Ae=[];for(let z=0;z<Ie;z++){const me=pe[Math.floor(z/Ie*pe.length)%pe.length];Ae.push({frame:l(me.dir),orbitRad:.055+B(z,3,19)*.065,depthRatio:.45+B(z,8,13)*.25,phi0:B(z,5,23)*Math.PI*2,omega:(z%2===0?1:-1)*(.11+B(z,2,17)*.06),phase:B(z,7,11)*Math.PI*2,scale:.85+B(z,9,4)*.42})}const Z=24,le=.0056*n,{bodyGeo:Le,flipperGeo:De}=jv(le),st=new Oe({color:1465976,emissive:51455,emissiveIntensity:.06,roughness:.35}),pt=new Oe({color:2132126,emissive:2424800,emissiveIntensity:.06,roughness:.38});st.userData.animatedEmissive=!0,pt.userData.animatedEmissive=!0;const Pt=new gt(Le,st,Z),$=new gt(De,pt,Z);Pt.frustumCulled=!1,$.frustumCulled=!1,i.add(Pt,$);const Pe=[];for(let z=0;z<Z;z++){const me=pe[(z*19+3)%pe.length];Pe.push({frame:l(me.dir),orbitRad:.025+B(z,4,29)*.038,phi0:B(z,12,5)*Math.PI*2,omega:(z%2===0?1:-1)*(.28+B(z,6,17)*.14),phase:B(z,8,21)*Math.PI*2,scale:.78+B(z,3,14)*.48})}const Fe=450,at=9,nt=.002*n,Ye=Zv(nt),ut=new Oe({color:16777215,emissive:3201279,emissiveIntensity:.08,roughness:.28});ut.userData.animatedEmissive=!0;const Ct=new gt(Ye,ut,Fe);Ct.frustumCulled=!1;const tn=[new re(2683647),new re(16757816),new re(16735912),new re(6619064),new re(6728447)];for(let z=0;z<Fe;z++)Ct.setColorAt(z,tn[Math.floor(B(z,15,3)*tn.length)%tn.length]);Ct.instanceColor&&(Ct.instanceColor.needsUpdate=!0),i.add(Ct);const $t=[];for(let z=0;z<at;z++){const me=pe[(z*47+7)%pe.length];$t.push({frame:l(me.dir),orbitRad:.022+B(z,9,13)*.035,omega:(z%2===0?1:-1)*(.22+B(z,2,19)*.12),phi0:B(z,6,31)*Math.PI*2,phase:B(z,14,7)*Math.PI*2,centerDir:new w,centerAlt:t-.035,aheadDir:new w,tangentForward:new w,tangentRight:new w})}const sn=[];for(let z=0;z<Fe;z++)sn.push({schoolIdx:z%at,localAng:B(z,4,17)*Math.PI*2,localRad:(.0025+B(z,9,23)*.011)*(.5+.5*(z%3)),vertOff:(B(z,13,5)-.5)*.018,phase:B(z,21,11)*Math.PI*2,scale:.72+B(z,7,19)*.65});const wt=new w,jt=new w,bt=new w,Mt=new w,nn=new w,yt=new lt,P=new lt,W=new _t,te=new _t,ee=new w(1,0,0),K=new w(0,0,1),Me=new w,Be=new w(0,1,0);new w;const je=(z,me,Ke,rt,He,ue,ge,be,$e,Ze,_e,ne)=>{bt.copy(ge).normalize(),Mt.copy(be).sub(ge),Mt.lengthSq()<1e-12&&Mt.set(1,0,0),Mt.normalize(),nn.crossVectors(bt,Mt).normalize(),Mt.crossVectors(nn,bt).normalize(),yt.makeBasis(nn,bt,Mt),te.setFromAxisAngle(K,ne),P.makeRotationFromQuaternion(te),yt.multiply(P),yt.setPosition(ge),Me.setScalar(_e),yt.scale(Me),me.setMatrixAt(z,yt),W.setFromAxisAngle(K,$e),P.makeRotationFromQuaternion(W),P.premultiply(yt),Ke.setMatrixAt(z,P),W.setFromAxisAngle(K,-$e),P.makeRotationFromQuaternion(W),P.premultiply(yt),rt.setMatrixAt(z,P),W.setFromAxisAngle(K,Ze),P.makeRotationFromQuaternion(W),P.setPosition(0,0,-x*.72),P.premultiply(yt),He.setMatrixAt(z,P),W.setFromAxisAngle(K,-Ze),P.makeRotationFromQuaternion(W),P.setPosition(0,0,-x*.72),P.premultiply(yt),ue.setMatrixAt(z,P)},Xe=(z,me,Ke)=>{const rt=z.phi0+z.omega*me,He=z.orbitRad+Math.sin(me*.8+z.phase)*.008*n,ue=z.alt+Math.sin(me*1.15+z.phase)*.006*n;Ke.copy(z.frame.normalDir).addScaledVector(z.frame.e1,Math.cos(rt)*He).addScaledVector(z.frame.e2,Math.sin(rt)*He).normalize().multiplyScalar(ue)};return{group:i,update(z,me=1,Ke=.5,rt=0){if(!i.parent||!i.parent.visible)return;const He=q.smoothstep(-Ke,-.1,.04);e?.updateDayNight&&e.updateDayNight(Ke,z,rt);const ue=m.attributes.position;for(let _e=0;_e<c;_e++){const ne=d[_e],Ve=(ne.risePhase+z*ne.driftSpeed*3)%1*.015,ht=ne.baseAlt+Ve,qe=Math.sin(z*.65+ne.risePhase)*.0022;ue.setXYZ(_e,ne.dir.x*ht+qe,ne.dir.y*ht,ne.dir.z*ht+qe)}ue.needsUpdate=!0,p.opacity=q.lerp(.14,.92,He);for(let _e=0;_e<S;_e++){const ne=G[_e];Xe(ne,z,wt),Xe(ne,z+.05,jt);const Ve=Math.sin(z*.65+ne.phase)>-.2?.46:.1,ht=Math.sin(z*4.9+ne.phase)*Ve,qe=Math.sin(z*4.9+ne.phase-.85)*Ve*.82,et=ne.omega>0?-.32:.32;je(_e,M,v,b,A,F,wt,jt,ht,qe,ne.scale,et)}M.instanceMatrix.needsUpdate=!0,v.instanceMatrix.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0,A.instanceMatrix.needsUpdate=!0,F.instanceMatrix.needsUpdate=!0,R.emissiveIntensity=q.lerp(.06,1.45,He),E.emissiveIntensity=q.lerp(.08,1.85,He),T.emissiveIntensity=q.lerp(.08,1.65,He);for(let _e=0;_e<O;_e++){const ne=V[_e];Xe(ne,z,wt),Xe(ne,z+.08,jt);const Ve=Math.sin(z*2.5+ne.phase)*.42,ht=Math.sin(z*2.5+ne.phase-.9)*.35;je(_e,Q,se,he,we,U,wt,jt,Ve,ht,1,ne.omega>0?-.25:.25)}Q.instanceMatrix.needsUpdate=!0,se.instanceMatrix.needsUpdate=!0,he.instanceMatrix.needsUpdate=!0,we.instanceMatrix.needsUpdate=!0,U.instanceMatrix.needsUpdate=!0,N.emissiveIntensity=q.lerp(.08,1.9,He),Y.emissiveIntensity=q.lerp(.1,2.15,He);const ge=(_e,ne,Ve,ht)=>{const qe=_e.offsetAng+_e.herd.speed*ne,et=_e.herd.radOffset*_e.radialFactor;ht.copy(_e.herd.normalDir).addScaledVector(_e.herd.e1,Math.cos(qe)*et).addScaledVector(_e.herd.e2,Math.sin(qe)*et).normalize();const Qt=oo(ht.x,ht.y,ht.z,0,r);Ve.copy(ht).multiplyScalar(t+Qt)},be=new w;for(let _e=0;_e<J;_e++){const ne=ot[_e];ge(ne,z,wt,bt),ge(ne,z+.08,jt,be),Mt.copy(jt).sub(wt).normalize(),nn.crossVectors(bt,Mt).normalize(),Mt.crossVectors(nn,bt).normalize(),yt.makeBasis(nn,bt,Mt),yt.setPosition(wt),Me.setScalar(ne.scale),yt.scale(Me),Se.setMatrixAt(_e,yt);const Ve=Math.sin(z*4.5+ne.phase)*.42;W.setFromAxisAngle(ee,Ve),P.makeRotationFromQuaternion(W),P.setPosition(0,ie*.72,ie*.52),P.premultiply(yt),H.setMatrixAt(_e,P),W.setFromAxisAngle(ee,-Ve),P.makeRotationFromQuaternion(W),P.setPosition(0,ie*.72,-ie*.56),P.premultiply(yt),tt.setMatrixAt(_e,P)}Se.instanceMatrix.needsUpdate=!0,H.instanceMatrix.needsUpdate=!0,tt.instanceMatrix.needsUpdate=!0,Te.emissiveIntensity=q.lerp(0,.95,He);for(let _e=0;_e<Re;_e++){const ne=Ce[_e],Ve=Math.sin(z*1.15+ne.phase)*.0045*n,ht=Math.cos(z*.45+ne.phase)*.004*n,qe=Math.sin(z*.35+ne.phase)*.004*n;bt.copy(ne.frame.normalDir).addScaledVector(ne.frame.e1,ht).addScaledVector(ne.frame.e2,qe).normalize(),wt.copy(bt).multiplyScalar(ne.alt+Ve);const et=1+Math.sin(z*2.8+ne.phase)*.16;xt(yt,wt,bt,ne.scale*et,ne.scale/Math.sqrt(et)),ae.setMatrixAt(_e,yt),xt(yt,wt,bt,ne.scale,ne.scale*(1+Math.sin(z*2.8+ne.phase)*.08)),Ue.setMatrixAt(_e,yt)}ae.instanceMatrix.needsUpdate=!0,Ue.instanceMatrix.needsUpdate=!0,oe.opacity=q.lerp(.32,.82,He),oe.emissiveIntensity=q.lerp(.08,2.35,He),ce.opacity=q.lerp(.24,.65,He),ce.color.setRGB(q.lerp(.85,1.4,He),q.lerp(.88,.85,He),q.lerp(.96,2.2,He));const $e=(_e,ne,Ve,ht,qe,et,Qt,It,kt,Ut)=>{const Jn=Ve+ht*It;Ut.copy(_e.normalDir).addScaledVector(_e.e1,Math.cos(Jn)*ne).addScaledVector(_e.e2,Math.sin(Jn)*ne).normalize();const rs=oo(Ut.x,Ut.y,Ut.z,0,r),Ft=Math.min(Qt-.004,rs+et),ki=q.lerp(Ft,Qt,qe);kt.copy(Ut).multiplyScalar(t+ki)},Ze=new w;for(let _e=0;_e<Ie;_e++){const ne=Ae[_e];$e(ne.frame,ne.orbitRad,ne.phi0,ne.omega,ne.depthRatio,.015,-.016,z,wt,bt),$e(ne.frame,ne.orbitRad,ne.phi0,ne.omega,ne.depthRatio,.015,-.016,z+.14,jt,Ze),Mt.copy(jt).sub(wt),Mt.lengthSq()<1e-12&&Mt.set(1,0,0),Mt.normalize(),nn.crossVectors(bt,Mt).normalize(),Mt.crossVectors(nn,bt).normalize();const Ve=Math.sin(z*1.15+ne.phase)*.06;W.setFromAxisAngle(ee,Ve),yt.makeBasis(nn,bt,Mt),yt.setPosition(wt),Me.setScalar(ne.scale),yt.scale(Me),P.makeRotationFromQuaternion(W),yt.multiply(P),At.setMatrixAt(_e,yt),X.setMatrixAt(_e,yt)}At.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,ct.emissiveIntensity=q.lerp(.06,1.85,He);for(let _e=0;_e<Z;_e++){const ne=Pe[_e],Ve=.55+Math.sin(z*.75+ne.phase)*.25;$e(ne.frame,ne.orbitRad,ne.phi0,ne.omega,Ve,.008,-.01,z,wt,bt),$e(ne.frame,ne.orbitRad,ne.phi0,ne.omega,Ve,.008,-.01,z+.07,jt,Ze),Mt.copy(jt).sub(wt),Mt.lengthSq()<1e-12&&Mt.set(1,0,0),Mt.normalize(),nn.crossVectors(bt,Mt).normalize(),Mt.crossVectors(nn,bt).normalize(),yt.makeBasis(nn,bt,Mt),yt.setPosition(wt),Me.setScalar(ne.scale),yt.scale(Me),Pt.setMatrixAt(_e,yt);const ht=Math.sin(z*5.4+ne.phase)*.42;W.setFromAxisAngle(K,ht),P.makeRotationFromQuaternion(W),P.premultiply(yt),$.setMatrixAt(_e,P)}Pt.instanceMatrix.needsUpdate=!0,$.instanceMatrix.needsUpdate=!0,st.emissiveIntensity=q.lerp(.06,1.35,He),pt.emissiveIntensity=q.lerp(.08,1.75,He);for(let _e=0;_e<at;_e++){const ne=$t[_e],Ve=ne.phi0+ne.omega*z,ht=ne.phi0+ne.omega*(z+.06);ne.centerDir.copy(ne.frame.normalDir).addScaledVector(ne.frame.e1,Math.cos(Ve)*ne.orbitRad).addScaledVector(ne.frame.e2,Math.sin(Ve)*ne.orbitRad).normalize(),ne.aheadDir.copy(ne.frame.normalDir).addScaledVector(ne.frame.e1,Math.cos(ht)*ne.orbitRad).addScaledVector(ne.frame.e2,Math.sin(ht)*ne.orbitRad).normalize();const qe=oo(ne.centerDir.x,ne.centerDir.y,ne.centerDir.z,0,r),et=Math.min(-.012,qe+.008),Qt=q.lerp(et,-.01,.48+.28*Math.sin(z*.65+ne.phase));ne.centerAlt=t+Qt,ne.tangentForward.copy(ne.aheadDir).sub(ne.centerDir),ne.tangentForward.lengthSq()<1e-12&&ne.tangentForward.set(1,0,0),ne.tangentForward.normalize(),ne.tangentRight.crossVectors(ne.centerDir,ne.tangentForward).normalize(),ne.tangentForward.crossVectors(ne.tangentRight,ne.centerDir).normalize()}for(let _e=0;_e<Fe;_e++){const ne=sn[_e],Ve=$t[ne.schoolIdx],ht=ne.localAng+z*1.15,qe=Math.sin(z*3.4+ne.phase)*.003;bt.copy(Ve.centerDir).addScaledVector(Ve.tangentRight,Math.cos(ht)*ne.localRad).addScaledVector(Ve.tangentForward,Math.sin(ht)*ne.localRad).normalize(),wt.copy(bt).multiplyScalar(Ve.centerAlt+ne.vertOff+qe);const et=Math.sin(z*8.5+ne.phase)*.14;W.setFromAxisAngle(ee,0),Mt.copy(Ve.tangentForward).addScaledVector(Ve.tangentRight,et).normalize(),nn.crossVectors(bt,Mt).normalize(),Mt.crossVectors(nn,bt).normalize(),yt.makeBasis(nn,bt,Mt),yt.setPosition(wt),Me.setScalar(ne.scale),yt.scale(Me),Ct.setMatrixAt(_e,yt)}Ct.instanceMatrix.needsUpdate=!0,ut.emissiveIntensity=q.lerp(.08,1.65,He)}};function xt(z,me,Ke,rt,He){W.setFromUnitVectors(Be,Ke),Me.set(rt,He,rt),z.compose(me,W,Me)}}const gl=new w(0,1,0);function _l(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function ao(s,e){const t=_l(64,64),n=t.getContext("2d"),i=n.createRadialGradient(32,32,1,32,32,32);i.addColorStop(0,s),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new xn(t);return r.needsUpdate=!0,r}function ar(s,e,t,n,i){const r=q.smoothstep(n,.63,.7),o=1-q.smoothstep(n,1.01,1.08),a=r*o;if(a<=1e-4)return 0;const l=1-Math.abs(Ot(s*14+3.1,e*14,t*14-2.7)),c=zn(s*7.5-4.2,e*7.5+1.1,t*7.5+5.8,4),h=Math.max(0,c+.15)*(.45+.85*Math.pow(l,2.2));return i*(-.0018+.0155*h)*a}function ei(s,e,t,n,i,r,o){s.position.copy(e).multiplyScalar(t),s.quaternion.setFromUnitVectors(gl,e),n!==0&&s.rotateY(n),s.scale.set(i,r,o),s.updateMatrix()}function Qv(){const e=_l(256,256),t=_l(256,256),n=e.getContext("2d"),i=t.getContext("2d");n.fillStyle="#14171d",n.fillRect(0,0,256,256);for(let c=0;c<256;c+=8){const h=Math.floor(B(0,c,19)*14);n.fillStyle=`rgb(${16+h}, ${18+h}, ${22+h})`,n.fillRect(0,c,256,4)}i.fillStyle="#000000",i.fillRect(0,0,256,256);const r=["#9a521e","#7c401b","#8c1e24","#6d4b2b"];let o=0;for(let c=6;c<256;c+=10)for(let h=4;h<256;h+=8)o++,B(h,c,41)<.135&&(i.fillStyle=r[o%r.length],i.fillRect(h,c,4,3));const a=new xn(e);a.colorSpace=Gt;const l=new xn(t);return l.colorSpace=Gt,{map:a,emissiveMap:l}}function Jv(s){const e=s.localRadius,t=new Yt;t.name="NightCity_Concentric_Districts_R2_R3";const n=new zt,i=new w,{map:r,emissiveMap:o}=Qv(),a=new Oe({map:r,emissiveMap:o,emissive:new re(1,.9,.8),emissiveIntensity:.48,roughness:.78,metalness:.35});a.userData.animatedEmissive=!0;const l=new Oe({color:1580066,roughness:.72,metalness:.6}),c=new Oe({color:2105894,roughness:.68,metalness:.52}),h=new Cn({color:new re(1.2,.18,.12)});h.userData.animatedEmissive=!0;const u=960,d=new en(1,1,1);d.translate(0,.5,0);const f=new gt(d,a,u);f.name="NC_Ring2_Industrial_Slum_Blocks";for(let $=0;$<u;$++){const Pe=B($,3,19),Fe=.335+Math.pow(Pe,.92)*.315,at=B($,7,23)*Math.PI*2;i.set(Math.sin(Fe)*Math.cos(at),Math.cos(Fe),Math.sin(Fe)*Math.sin(at));const nt=1-q.smoothstep(Fe,.35,.64),Ye=e*(.0055+.0085*B($,5,11)),ut=e*(.0055+.0085*B($,9,13)),Ct=e*(.008+(.044*nt+.012)*Math.pow(B($,11,29),1.45));ei(n,i,e*.9985,B($,2,7)*Math.PI,Ye,Ct,ut),f.setMatrixAt($,n.matrix)}f.instanceMatrix.needsUpdate=!0,t.add(f);const g=260,_=new gt(d,l,g);_.name="NC_Ring2_Industrial_Warehouses";for(let $=0;$<g;$++){const Pe=.42+B($,17,5)*.23,Fe=B($,19,31)*Math.PI*2;i.set(Math.sin(Pe)*Math.cos(Fe),Math.cos(Pe),Math.sin(Pe)*Math.sin(Fe));const at=e*(.014+.018*B($,4,8)),nt=e*(.018+.022*B($,6,12)),Ye=e*(.008+.011*B($,8,16));ei(n,i,e*.9985,B($,3,21)*Math.PI,at,Ye,nt),_.setMatrixAt($,n.matrix)}_.instanceMatrix.needsUpdate=!0,t.add(_);const m=72,p=new Jt(.46,.78,1,12,1,!1);p.translate(0,.5,0);const y=new gt(p,c,m);y.name="NC_Ring2_Cooling_Towers";const S=140,x=new Jt(.18,.34,1,8);x.translate(0,.5,0);const R=new gt(x,c,S);R.name="NC_Ring2_Smokestacks";const E=new an(.32,6,6),T=new gt(E,h,S);T.name="NC_Ring2_Stack_RedBeacons";const M=new Float32Array((m+S)*3),v=[];for(let $=0;$<m;$++){const Pe=.44+B($,21,9)*.21,Fe=B($,25,13)*Math.PI*2;i.set(Math.sin(Pe)*Math.cos(Fe),Math.cos(Pe),Math.sin(Pe)*Math.sin(Fe));const at=e*(.008+.006*B($,2,15)),nt=e*(.022+.016*B($,6,27));ei(n,i,e*.9985,0,at,nt,at),y.setMatrixAt($,n.matrix);const Ye=e*.9985+nt*1.15;v.push({dir:i.clone(),alt:Ye,phase:B($,1,3)*Math.PI*2}),M[$*3]=i.x*Ye,M[$*3+1]=i.y*Ye,M[$*3+2]=i.z*Ye}y.instanceMatrix.needsUpdate=!0;for(let $=0;$<S;$++){const Pe=.38+B($,29,7)*.27,Fe=B($,31,17)*Math.PI*2;i.set(Math.sin(Pe)*Math.cos(Fe),Math.cos(Pe),Math.sin(Pe)*Math.sin(Fe));const at=e*(.0045+.003*B($,4,18)),nt=e*(.028+.024*B($,9,22));ei(n,i,e*.9985,0,at,nt,at),R.setMatrixAt($,n.matrix);const Ye=e*.9985+nt;ei(n,i,Ye,0,at*.6,at*.6,at*.6),T.setMatrixAt($,n.matrix);const ut=m+$,Ct=Ye+e*.008;v.push({dir:i.clone(),alt:Ct,phase:B(ut,5,9)*Math.PI*2}),M[ut*3]=i.x*Ct,M[ut*3+1]=i.y*Ct,M[ut*3+2]=i.z*Ct}R.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,t.add(y,R,T);const b=210,A=new gt(x,l,b);A.name="NC_Ring2_Antennas";for(let $=0;$<b;$++){const Pe=.35+B($,41,11)*.3,Fe=B($,43,19)*Math.PI*2;i.set(Math.sin(Pe)*Math.cos(Fe),Math.cos(Pe),Math.sin(Pe)*Math.sin(Fe));const at=e*(.018+.032*B($,8,25));ei(n,i,e*1.005,0,e*.0014,at,e*.0014),A.setMatrixAt($,n.matrix)}A.instanceMatrix.needsUpdate=!0,t.add(A);const F=240,I=new Float32Array(F*3);for(let $=0;$<F;$++){const Pe=$%6,Fe=.35+$/F*.3,at=Pe*Math.PI/3+Math.sin(Fe*5)*.08+(B($,3,37)-.5)*.05;i.set(Math.sin(Fe)*Math.cos(at),Math.cos(Fe),Math.sin(Fe)*Math.sin(at));const nt=e*1.0025;I[$*3]=i.x*nt,I[$*3+1]=i.y*nt,I[$*3+2]=i.z*nt}const k=new Nt;k.setAttribute("position",new St(I,3));const G=new An({map:ao("rgba(255, 195, 115, 0.9)","rgba(180, 90, 30, 0.32)"),color:14254136,size:1.65,transparent:!0,opacity:.78,depthWrite:!1,blending:mn,sizeAttenuation:!0}),O=new Rn(k,G);O.name="NC_Ring2_Isolated_Streetlamps",t.add(O);const L=new Nt;L.setAttribute("position",new St(M,3));const N=new An({map:ao("rgba(22, 26, 34, 0.55)","rgba(14, 18, 24, 0.25)"),color:1975340,size:15.5,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),Y=new Rn(L,N);Y.name="NC_Ring2_Industrial_Smoke",t.add(Y);const Q=44,se=96,he=(Q+1)*(se+1),we=new Float32Array(he*3),U=new Float32Array(he*3),V=[];for(let $=0;$<=Q;$++){const Pe=.62+$/Q*.46,Fe=Math.sin(Pe),at=Math.cos(Pe);for(let nt=0;nt<=se;nt++){const Ye=nt/se*Math.PI*2,ut=Fe*Math.cos(Ye),Ct=at,tn=Fe*Math.sin(Ye),$t=ar(ut,Ct,tn,Pe,e),sn=e*.999+$t,wt=$*(se+1)+nt;we[wt*3]=ut*sn,we[wt*3+1]=Ct*sn,we[wt*3+2]=tn*sn;const jt=Ot(ut*18+2,Ct*18,tn*18)*.5+.5,bt=q.clamp($t/(e*.012),0,1);U[wt*3]=.24+jt*.14+bt*.12,U[wt*3+1]=.11+jt*.055+bt*.04,U[wt*3+2]=.07+jt*.035}}for(let $=0;$<Q;$++)for(let Pe=0;Pe<se;Pe++){const Fe=$*(se+1)+Pe,at=Fe+(se+1);V.push(Fe,at,Fe+1,Fe+1,at,at+1)}const J=new Nt;J.setAttribute("position",new St(we,3)),J.setAttribute("color",new St(U,3)),J.setIndex(V),J.computeVertexNormals();const ie=new Oe({vertexColors:!0,roughness:.96,metalness:.04}),de=new dt(J,ie);de.name="NC_Ring3_Badlands_Terrain",t.add(de);const fe=420,xe=new zs(1,0),Te=xe.attributes.position;for(let $=0;$<Te.count;$++){const Pe=Te.getX($),Fe=Te.getY($),at=Te.getZ($),nt=.72+.42*B(Math.round(Pe*100),Math.round(Fe*100),Math.round(at*100));Te.setXYZ($,Pe*nt,Fe*(.55+.35*nt),at*nt)}xe.computeVertexNormals();const ye=new Oe({color:6041375,roughness:.94,metalness:.05}),Se=new gt(xe,ye,fe);Se.name="NC_Ring3_Badlands_Rocks";for(let $=0;$<fe;$++){const Pe=.67+B($,51,3)*.37,Fe=B($,53,17)*Math.PI*2;i.set(Math.sin(Pe)*Math.cos(Fe),Math.cos(Pe),Math.sin(Pe)*Math.sin(Fe));const at=ar(i.x,i.y,i.z,Pe,e),nt=e*(.008+.022*Math.pow(B($,7,11),1.6)),Ye=nt*(.45+.9*B($,9,13)),ut=nt*(.65+.6*B($,13,5));ei(n,i,e+at*.96,B($,3,29)*Math.PI*2,nt,Ye,ut),Se.setMatrixAt($,n.matrix)}Se.instanceMatrix.needsUpdate=!0,t.add(Se);const H=4,tt=[.25,1.85,3.45,5.05],We=[],Je=[],Ee=38,ot=e*.0042,Re=new w,D=new w,C=new w,j=new Oe({color:1710364,roughness:.88,metalness:.1,side:Zt});for(let $=0;$<H;$++){const Pe=tt[$],Fe=new Float32Array((Ee+1)*2*3),at=[];for(let ut=0;ut<=Ee;ut++){const Ct=ut/Ee,tn=.64+Ct*.4,$t=Pe+Math.sin(Ct*3.8+$)*.11,sn=Math.sin(tn),wt=Math.cos(tn);i.set(sn*Math.cos($t),wt,sn*Math.sin($t)),Re.set(wt*Math.cos($t),-sn,wt*Math.sin($t)).normalize(),D.crossVectors(i,Re).normalize();const jt=ar(i.x,i.y,i.z,tn,e),bt=e+jt+e*8e-4;C.copy(i).multiplyScalar(bt);const Mt=ut*2;if(Fe[Mt*3]=C.x-D.x*ot,Fe[Mt*3+1]=C.y-D.y*ot,Fe[Mt*3+2]=C.z-D.z*ot,Fe[(Mt+1)*3]=C.x+D.x*ot,Fe[(Mt+1)*3+1]=C.y+D.y*ot,Fe[(Mt+1)*3+2]=C.z+D.z*ot,ut<Ee&&at.push(Mt,Mt+2,Mt+1,Mt+1,Mt+2,Mt+3),ut>1&&ut<Ee-1&&ut%2===0){const nn=ut%4===0?1:-1,yt=C.clone().addScaledVector(D,nn*ot*1.45).normalize(),P=e*.0085;ei(n,yt,bt-e*4e-4,0,e*6e-4,P,e*6e-4),We.push(n.matrix.clone());const W=bt+P;Je.push(yt.x*W,yt.y*W,yt.z*W)}}const nt=new Nt;nt.setAttribute("position",new St(Fe,3)),nt.setIndex(at),nt.computeVertexNormals();const Ye=new dt(nt,j);Ye.name=`NC_Ring3_Badlands_Road_${$+1}`,t.add(Ye)}const oe=new Jt(.4,.55,1,5);oe.translate(0,.5,0);const ce=new gt(oe,l,We.length);ce.name="NC_Ring3_Road_LightPoles",We.forEach(($,Pe)=>ce.setMatrixAt(Pe,$)),ce.instanceMatrix.needsUpdate=!0,t.add(ce);const ae=new Nt;ae.setAttribute("position",new Ht(Je,3));const Ue=new An({map:ao("rgba(255, 185, 95, 0.95)","rgba(220, 100, 28, 0.35)"),color:16754250,size:2.1,transparent:!0,opacity:.85,depthWrite:!1,blending:mn,sizeAttenuation:!0}),Ce=new Rn(ae,Ue);Ce.name="NC_Ring3_Road_LightOrbs",t.add(Ce);const Ne=36,ft=new gt(x,new Oe({color:7304574,roughness:.55,metalness:.45}),Ne);ft.name="NC_Ring3_WindTurbine_Masts";const pe=new en(.11,1,.03);pe.translate(0,.5,0);const Ie=new gt(pe,new Oe({color:9278878,roughness:.45,metalness:.35}),Ne*3);Ie.name="NC_Ring3_WindTurbine_Blades";const Qe=[];for(let $=0;$<Ne;$++){const Pe=$%4,Fe=.72+Pe*.072,at=.78+Pe*1.48,nt=Fe+(B($,61,7)-.5)*.075,Ye=at+(B($,67,13)-.5)*.24;i.set(Math.sin(nt)*Math.cos(Ye),Math.cos(nt),Math.sin(nt)*Math.sin(Ye));const ut=ar(i.x,i.y,i.z,nt,e),Ct=e*(.025+.012*B($,3,7)),tn=e+ut-e*5e-4;ei(n,i,tn,0,e*.0022,Ct,e*.0022),ft.setMatrixAt($,n.matrix);const $t=i.clone().multiplyScalar(tn+Ct),sn=new _t().setFromUnitVectors(gl,i),wt=new _t().setFromAxisAngle(gl,B($,12,5)*Math.PI*2),jt=sn.multiply(wt);Qe.push({hubPos:$t,orientQuat:jt,bladeLen:Ct*.58,omega:1+B($,8,19)*.9,phase:B($,15,2)*Math.PI*2})}ft.instanceMatrix.needsUpdate=!0,t.add(ft,Ie);const it=18,Ge=it*3,vt=new gt(d,l,Ge);vt.name="NC_Ring3_Isolated_Outposts";const ct=[];let At=0;for(let $=0;$<it;$++){const Pe=.74+B($,71,9)*.27,Fe=B($,73,19)*Math.PI*2;i.set(Math.sin(Pe)*Math.cos(Fe),Math.cos(Pe),Math.sin(Pe)*Math.sin(Fe));const at=ar(i.x,i.y,i.z,Pe,e),nt=new w(Math.cos(Pe)*Math.cos(Fe),-Math.sin(Pe),Math.cos(Pe)*Math.sin(Fe)).normalize(),Ye=new w().crossVectors(i,nt).normalize();for(let ut=0;ut<3;ut++){const Ct=(B($*3+ut,2,11)-.5)*.025,tn=(B($*3+ut,4,17)-.5)*.025,$t=i.clone().addScaledVector(nt,Ct).addScaledVector(Ye,tn).normalize(),sn=e*(.0055+.004*B($,ut,21)),wt=e*(.0065+.005*B(ut,$,31)),jt=e*(.0042+.003*B($+1,ut,5));if(ei(n,$t,e+at*.95,B($,ut,4)*Math.PI,sn,jt,wt),vt.setMatrixAt(At++,n.matrix),ut<2){const bt=e+at*.95+jt*1.1;ct.push($t.x*bt,$t.y*bt,$t.z*bt)}}}vt.instanceMatrix.needsUpdate=!0,t.add(vt);const X=new Nt;X.setAttribute("position",new Ht(ct,3));const Ae=new An({map:ao("rgba(255, 215, 145, 1.0)","rgba(255, 145, 50, 0.35)"),color:16760944,size:2,transparent:!0,opacity:.9,depthWrite:!1,blending:mn,sizeAttenuation:!0}),Z=new Rn(X,Ae);Z.name="NC_Ring3_Outpost_WarmLights",t.add(Z);const le=new _t,Le=new _t,De=new w,st=new lt,pt=Math.PI*2/3,Pt=new w(0,0,1);return{group:t,update($,Pe=1){if(!t.parent||!t.parent.visible)return;for(let nt=0;nt<Ne;nt++){const Ye=Qe[nt],ut=$*Ye.omega+Ye.phase;De.set(Ye.bladeLen*.25,Ye.bladeLen,Ye.bladeLen*.25);for(let Ct=0;Ct<3;Ct++){const tn=ut+Ct*pt;le.setFromAxisAngle(Pt,tn),Le.copy(Ye.orientQuat).multiply(le),st.compose(Ye.hubPos,Le,De),Ie.setMatrixAt(nt*3+Ct,st)}}Ie.instanceMatrix.needsUpdate=!0;const Fe=L.attributes.position;for(let nt=0;nt<v.length;nt++){const Ye=v[nt],ut=1+.002*Math.sin($*.7+Ye.phase);Fe.setXYZ(nt,Ye.dir.x*Ye.alt*ut,Ye.dir.y*Ye.alt*ut,Ye.dir.z*Ye.alt*ut)}Fe.needsUpdate=!0;const at=q.clamp(.45+(Pe-1)*.28,.35,.85);a.emissiveIntensity=.48*at,G.opacity=q.clamp(.45+(Pe-.8)*.25,.38,.82),Ue.opacity=q.clamp(.45+(Pe-.8)*.3,.4,.88),Ae.opacity=q.clamp(.5+(Pe-.8)*.32,.45,.92)}}}const Li=157.5,Es=1.45,ya=1/3.5,Ah=q.degToRad(68),lo=new w(0,Math.cos(Ah),Math.sin(Ah)).normalize(),eM={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:11.5,eccentricity:.045,orbitOmega:.0295,localRadius:1.32,groundFloorAlt:1.65,kmScale:5800,rotationSpeed:.014,axialOmega:.015,axialTiltX:q.degToRad(6),axialTiltZ:q.degToRad(21),initialSpinAngle:-.95,capLocalDir:lo,landable:!0,hasProceduralWorld:!0,fogColor:5944012,maxFogDensity:.0036,skyColor:2523838,particleColor:10417919,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new w(0,1.32*2.58,1.32*.92),lowOrbitLookAt:new w(0,1.32,0),highCloudOffset:new w(-.08,1.32*2.24,1.32*.56),aerialOffset:new w(-.025,1.32+.072,.095),aerialLookAt:new w(.028,1.32+.048,-.022),sunColor:16773332,sunIntensity:2.85,ambientColor:2377264,ambientIntensity:.92,hemiSkyColor:6469887,hemiGroundColor:1985064,hemiIntensity:1.45,localLightColor:61695,localBounceColor:12073215,bloomStrength:.54,skyDome:{zenith:1866720,mid:5420780,horizon:9365738,sunGlow:16773320,zenithAlpha:.92,starFloor:0}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:18.5,eccentricity:.035,orbitOmega:.0144,localRadius:1.42,groundFloorAlt:.32,minSpeed:3.2,glbLocalScale:.0038*ya*3.8,kmScale:6200,rotationSpeed:.011,axialOmega:.012,axialTiltX:q.degToRad(-5),axialTiltZ:q.degToRad(18.5),initialSpinAngle:-.62,capLocalDir:lo,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0044,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new w(0,1.42*2.58,1.42*.92),lowOrbitLookAt:new w(0,1.42,0),highCloudOffset:new w(-.06,1.42*2.24,1.42*.56),aerialOffset:new w(-.012,1.42+.145,.195),aerialLookAt:new w(.005,1.42+.175,-.055),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.56,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:26.5,eccentricity:.05,orbitOmega:.0084,localRadius:1.52,groundFloorAlt:.95,glbLocalScale:.004*ya,kmScale:6800,rotationSpeed:.01,axialOmega:.011,axialTiltX:q.degToRad(8),axialTiltZ:q.degToRad(-23.5),initialSpinAngle:-1.18,capLocalDir:lo,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new w(-.32,1.52*2.58,1.52*.92),lowOrbitLookAt:new w(0,1.52,0),highCloudOffset:new w(-.18,1.52*2.24,1.52*.58),aerialOffset:new w(-.025,1.52+.08,.092),aerialLookAt:new w(.003,1.52+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:35.5,eccentricity:.04,orbitOmega:.0054,localRadius:1.62,groundFloorAlt:.95,glbLocalScale:.0039*ya,kmScale:7500,rotationSpeed:.009,axialOmega:.01,axialTiltX:q.degToRad(-6),axialTiltZ:q.degToRad(24),initialSpinAngle:-.88,capLocalDir:lo,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new w(0,1.62*2.58,1.62*.92),lowOrbitLookAt:new w(0,1.62,0),highCloudOffset:new w(.08,1.62*2.24,1.62*.58),aerialOffset:new w(0,1.62+.042,.102),aerialLookAt:new w(0,1.62+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:46,eccentricity:.06,orbitOmega:.0037,localRadius:1.85,groundFloorAlt:2,kmScale:11800,rotationSpeed:.05,axialOmega:.024,axialTiltX:q.degToRad(7),axialTiltZ:q.degToRad(26),initialSpinAngle:0,landable:!1}};class tM{constructor({scene:e,camera:t,controls:n,starfield:i,cockpitParticles:r,bloomPass:o,onStatusUpdate:a}){this.scene=e,this.camera=t,this.controls=n,this.starfield=i,this.cockpitParticles=r,this.bloomPass=o,this.onStatusUpdate=a||(()=>{}),this.dracoLoader=new tv,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new Mx,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Yt,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(Li),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.elapsedTime=0,this.simulationTime=0,this.timeScales=[1,10,60],this.timeScaleIndex=0,this.timeScale=1,this._tmpInvQuat=new _t,this._tmpCapInvQuat=new _t,this._tmpLocalDir=new w,this._tmpRadial=new w,this._tmpSunDir=new w,this._tmpPlanetToSun=new w,this._tmpUp=new w(0,1,0),this._tmpStationPos=new w,this._tmpColorA=new re,this._tmpColorB=new re,this._tmpColorC=new re,this._tmpSkyColor=new re,this._tmpFogColor=new re,this._identityQuat=new _t,this.skyDome=dv(),this.scene.add(this.skyDome),this._setupLighting()}_setupLighting(){this.ambientLight=new Z_(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new X_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new vo(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new Iu(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.scene.add(this.planetaryDirLight),this.localAtmoLight=new vo(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new vo(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(.85),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new w(3.4,2.35,.72)},uHotColor:{value:new w(4,3.1,1.45)},uLimbColor:{value:new w(2.2,.85,.14)}};const n=new on({uniforms:this.sunPlasmaUniforms,vertexShader:`
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
      `,fog:!1});this.sunNode.traverse(_=>{_.isMesh&&(_.material=n)});const i=new on({uniforms:{uColor:{value:new w(2.8,1.35,.35)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,fog:!1,blending:mn,side:yn}),r=new dt(new an(2.52,48,48),i);r.name="Solar_Tight_Corona";const o=document.createElement("canvas");o.width=512,o.height=512;const a=o.getContext("2d");a.clearRect(0,0,512,512);const l=256,c=256,h=a.createRadialGradient(l,c,4,l,c,130);h.addColorStop(0,"rgba(255, 245, 205, 0.72)"),h.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),h.addColorStop(1,"rgba(255, 140, 40, 0.0)"),a.fillStyle=h,a.beginPath(),a.arc(l,c,130,0,Math.PI*2),a.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((_,m)=>{a.save(),a.translate(l,c),a.rotate(_+.18);const p=m===0?242:210,y=a.createLinearGradient(-p,0,p,0);y.addColorStop(0,"rgba(255, 210, 120, 0.0)"),y.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),y.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),y.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),y.addColorStop(1,"rgba(255, 210, 120, 0.0)"),a.fillStyle=y,a.beginPath(),a.ellipse(0,0,p,3.2,0,0,Math.PI*2),a.fill(),a.restore()});const d=new xn(o);d.colorSpace=Gt;const f=new Su({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:mn}),g=new c_(f);g.name="Solar_Diffraction_Rays",g.scale.set(10.8,10.8,1),t&&(t.add(r),t.add(g))}cycleTimeScale(){return this.timeScaleIndex=(this.timeScaleIndex+1)%this.timeScales.length,this.timeScale=this.timeScales[this.timeScaleIndex],this.timeScale}syncCameraPostFlight(){this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position),this.camera.updateMatrixWorld(),pl.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),(this.localAtmoLight.intensity>.001||this.localBounceLight.intensity>.001)&&(this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,18),this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,-8))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,r)=>{this.gltfLoader.load(e,o=>i(o),void 0,o=>r(o))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const r=Array.isArray(i.material)?i.material:[i.material];for(const o of r)o&&o.emissiveIntensity!==void 0&&o.emissiveIntensity>3.2&&(o.emissiveIntensity=2.2+Math.log10(o.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(eM)){const r=t.getObjectByName(i.spinnerName),o=t.getObjectByName(i.rootName),a=t.getObjectByName(i.bodyName);if(!o)continue;const c=new Gn().setFromQuaternion(r?r.quaternion:new _t,"YXZ").y||0,h=i.semiMajorAxis,u=i.eccentricity||.04,d=h*(1-u*u)/(1+u*Math.cos(c));o.position.set(d,0,0);const f=[];let g=0;o.children.forEach(T=>{if(T.name.includes("Moon")&&!T.name.endsWith("_Orbit")){if(T.traverse(M=>{M.isMesh&&M.material&&(M.material.fog=!1)}),n==="p1"){const M=i.localRadius*(1.95+g*.65),v=M*(.22+g*.14),b=g===0?-1.85:-.78;T.position.set(Math.cos(b)*M,v,Math.sin(b)*M),f.push({node:T,baseRadius:M,angle:b,yOffset:v,speed:.014+g*.008})}else T.position.multiplyScalar(1.65),T.position.length()<i.localRadius*1.6&&T.position.normalize().multiplyScalar(i.localRadius*1.65),f.push({node:T,baseRadius:T.position.length(),angle:Math.atan2(T.position.z,T.position.x),yOffset:T.position.y,speed:.06+Math.random()*.08});g++}});const _=new Yt;_.name=`${i.id}_Axial_Tilt`,_.rotation.order="XZY",_.rotation.x=i.axialTiltX||0,_.rotation.z=i.axialTiltZ||0,o.add(_);const m=new Yt;m.name=`${i.id}_Axial_Spin`,m.rotation.y=i.initialSpinAngle||0,_.add(m);let p=null,y=null,S=null;if(i.landable){o.traverse(M=>{M!==o&&M.isMesh&&(M.name.includes("_Body")||M.name.includes("_Atmosphere")||M.name.includes("_Clouds")||M.name.includes("_DarkClouds")||/^Planet_01/i.test(M.name))&&(M.visible=!1)}),p=fv(i,Li),p.userBaseColors={sunlit:new re(p.cloudDeckPalette.sunlit),ambient:new re(p.cloudDeckPalette.ambient),horizon:new re(p.cloudDeckPalette.horizon)},m.add(p.group),y=p.atmosphere,S=new Yt,S.name=`${i.id}_Cap_Frame`;const T=i.capLocalDir?i.capLocalDir.clone().normalize():new w(0,1,0);S.quaternion.setFromUnitVectors(new w(0,1,0),T),m.add(S)}else{const T=o.children.filter(M=>M!==_&&!M.name.includes("Moon")&&!M.name.includes("_Orbit"));for(const M of T)m.add(M);y=Ou(i,i.localRadius,1.05),m.add(y)}const x=new Yt;x.name=`${i.id}_Atmosphere_Surface_Detail`,x.visible=!1,(S||m).add(x),this.orbitalGroup.updateMatrixWorld(!0);const R=new w;o.getWorldPosition(R);const E=new _t;m.getWorldQuaternion(E),this.planetNodes.set(n,{config:i,spinner:r,root:o,tiltGroup:_,spinGroup:m,capFrame:S,body:a,orbitalBundle:p,atmosphereShell:y,surfaceCapGroup:x,surfaceLoaded:!1,surfaceLoading:!1,animators:[],nightMaterials:[],orbitAngle:c,spinAngle:i.initialSpinAngle||0,prevWorldPos:R.clone(),currWorldPos:R.clone(),planetDeltaPos:new w,prevSpinWorldQuat:E.clone(),currSpinWorldQuat:E.clone(),spinQuatDelta:new _t,moonOrbits:f})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95,2.15,2.35),this.controls.setPose(new w(0,1190,4270),new w(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded||t.surfaceLoading)return;t.surfaceLoading=!0;const n=t.config;try{if(n.hasProceduralWorld){const r=Gv(n);t.surfaceCapGroup.add(r.group),t.pandoraWorld=r;const o=$v(n.localRadius,r);t.surfaceCapGroup.add(o.group),t.animators.push(o)}else if(n.surfaceUrl){const r=await this._loadGLB(n.surfaceUrl);if(mv(r,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(r),n.id==="p2"){this._calibrateNightCityMaterials(r);const o=Jv(n);t.surfaceCapGroup.add(o.group),t.animators.push(o);const a=wh(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(Hv(r))}else if(n.id==="p4"){const o=pv(n,1400);t.surfaceCapGroup.add(o);const a=wh(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(Wv(r))}else if(n.id==="p3"){const o=Xv(n.localRadius);t.surfaceCapGroup.add(o.group),t.animators.push(o)}}const i=new Set;t.surfaceCapGroup.traverse(r=>{if(!r.isMesh&&!r.isInstancedMesh)return;const o=Array.isArray(r.material)?r.material:[r.material];for(const a of o){if(!a||i.has(a)||a.userData?.animatedEmissive)continue;i.add(a),a.emissive&&a.emissiveIntensity!==void 0&&(a.emissiveMap||a.emissive.r>.008||a.emissive.g>.008||a.emissive.b>.008)&&t.nightMaterials.push({material:a,baseEmissive:a.emissiveIntensity,tier:a.userData?.nightTier||"default"})}}),t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}}_calibrateNightCityMaterials(e){const t=new Set;e.traverse(n=>{if(!n.isMesh)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i){if(!r||t.has(r)||r.emissiveIntensity===void 0)continue;t.add(r),r.userData=r.userData||{};const o=r.name||"";/Windows_Dense|Windows_Brutal|Windows_High/i.test(o)?(r.emissive.setHex(12113130),r.emissiveIntensity=.44,r.userData.nightTier="window"):/rib_warm_white/i.test(o)?(r.emissiveIntensity=1.05,r.userData.nightTier="window"):/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber|chimney_flare/i.test(o)?(r.emissiveIntensity=1.55,r.userData.nightTier="accent"):/backboard/i.test(o)?(r.emissiveIntensity=.42,r.userData.nightTier="window"):/neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(o)&&(r.emissiveIntensity=/Koi|Geisha|Banner/i.test(o)?2.15:2.35,r.userData.nightTier="hero")}})}_showTransitionBanner(e,t,n,i=1500){const r=document.getElementById("hud-transition-banner"),o=document.getElementById("banner-subtitle"),a=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");o&&(o.textContent=e),a&&(a.textContent=t),r&&r.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{r&&r.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){document.querySelectorAll(".nav-btn").forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){const t=String(e);if(this._highlightActiveNavButton(t),t==="1"){this.controls.engageAutopilot({getTargetPose:()=>({targetPos:new w(0,1280,4380),lookAtPos:new w(0,0,0),upVec:new w(0,1,0)}),duration:3.4});return}if(t==="2"){if(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor)return;this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const f=new w;return this.crystalPalaceAnchor.getWorldPosition(f),{targetPos:f.clone().add(new w(0,18,74)),lookAtPos:f,upVec:new w(0,1,0)}},duration:3.6});return}const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const r=this.planetNodes.get(i);if(!r)return;await this.ensurePlanetSurfaceLoaded(i);const o=r.config,a=r.capFrame||r.spinGroup||r.root;this.orbitalGroup.updateMatrixWorld(!0);const l=new w;r.root.getWorldPosition(l);const c=this.camera.position.distanceTo(l),h=o.localRadius*Li,u=h*Es,d=c-h;if(d>u*1.1){const f=q.clamp(c/820,3,5.2);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:o.lowOrbitOffset.clone().applyMatrix4(a.matrixWorld),lookAtPos:o.lowOrbitLookAt.clone().applyMatrix4(a.matrixWorld),upVec:new w(0,1,0).transformDirection(a.matrixWorld).normalize()}),duration:f});return}if(d>u*.24){const f=this.camera.position.clone();this.orbitalGroup.updateMatrixWorld(!0);const g=new lt().copy(a.matrixWorld).invert();f.applyMatrix4(g);const _=[f];f.distanceTo(o.highCloudOffset)>o.localRadius*.25&&d>u*.85&&_.push(o.highCloudOffset.clone());const m=o.highCloudOffset.clone().lerp(o.aerialOffset,.55).normalize().multiplyScalar(o.localRadius*(1+Es*.42)),p=o.highCloudOffset.clone().lerp(o.aerialOffset,.82).normalize().multiplyScalar(o.localRadius*(1+Es*.16));_.push(m,p,o.aerialOffset.clone());const y=new Pn(_);this.controls.engageAutopilot({useDirectCurve:!0,duration:8.6,getTargetPose:S=>{this.orbitalGroup.updateMatrixWorld(!0);const x=y.getPoint(S),R=o.aerialLookAt.clone().lerp(o.lowOrbitLookAt,Math.pow(1-S,1.8)*.45),T=y.getPoint(Math.min(1,S+.08)).lerp(R,Math.min(1,S*1.15+.2));return{targetPos:x.applyMatrix4(a.matrixWorld),lookAtPos:T.applyMatrix4(a.matrixWorld),upVec:new w(0,1,0).transformDirection(a.matrixWorld).normalize()}}});return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:o.aerialOffset.clone().applyMatrix4(a.matrixWorld),lookAtPos:o.aerialLookAt.clone().applyMatrix4(a.matrixWorld),upVec:new w(0,1,0).transformDirection(a.matrixWorld).normalize()}),duration:2.6})}async navigateToPandoraLandmark(e){const t=Rt.find(v=>v.id===e),n=this.planetNodes.get("p1");if(!t||!n)return;await this.ensurePlanetSurfaceLoaded("p1");const i=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const r=n.config.localRadius,o=new lt().copy(i.matrixWorld).invert(),a=this.camera.position.clone().applyMatrix4(o),l=a.clone().normalize(),c=t.capDir.clone().normalize(),h=Math.abs(c.y)<.85?new w(0,1,0):new w(1,0,0),u=new w().crossVectors(c,h).normalize(),d=c.clone().multiplyScalar(r+t.viewAlt).addScaledVector(u,-t.viewBack).normalize().multiplyScalar(r+t.viewAlt),f=c.clone().multiplyScalar(r+t.viewAlt*.25),g=l.angleTo(c),_=Math.min(.45,g*.22),m=Math.max(3,Math.ceil(g/.35)),p=new _t,y=new _t().setFromUnitVectors(l,c),S=new _t,x=Math.max(r+.05,Math.min(a.length(),r*1.48)),R=r+t.viewAlt,E=[a.clone()];for(let v=1;v<m;v++){const b=v/m;p.copy(S).slerp(y,b);const A=l.clone().applyQuaternion(p).normalize(),F=q.lerp(x,R,b)+Math.sin(b*Math.PI)*_;E.push(A.multiplyScalar(F))}E.push(d);const T=new Pn(E),M=q.clamp(2.2+g*1.5,2.4,5.4);this.controls.engageAutopilot({useDirectCurve:!0,duration:M,getTargetPose:v=>{this.orbitalGroup.updateMatrixWorld(!0);const b=T.getPoint(v),F=T.getPoint(Math.min(1,v+.08)).lerp(f,Math.min(1,v*1.35)),I=b.clone().normalize();return{targetPos:b.applyMatrix4(i.matrixWorld),lookAtPos:F.applyMatrix4(i.matrixWorld),upVec:I.transformDirection(i.matrixWorld).normalize()}}})}update(e){const t=Math.min(e,.1),n=t*this.timeScale;this.elapsedTime+=t,this.simulationTime+=n,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),pl.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,M]of this.planetNodes){const v=M.config;M.prevWorldPos.copy(M.currWorldPos),M.spinGroup&&M.prevSpinWorldQuat.copy(M.currSpinWorldQuat),M.orbitAngle+=n*v.orbitOmega;const b=v.semiMajorAxis,A=v.eccentricity||.04,F=b*(1-A*A)/(1+A*Math.cos(M.orbitAngle));M.spinner&&(M.spinner.rotation.y=M.orbitAngle),M.root.position.set(F,0,0);for(const I of M.moonOrbits)I.angle+=n*I.speed,I.node.position.set(Math.cos(I.angle)*I.baseRadius,I.yOffset,Math.sin(I.angle)*I.baseRadius);M.spinAngle+=n*(v.axialOmega??v.rotationSpeed??.012),M.spinGroup&&(M.spinGroup.rotation.y=M.spinAngle),M.orbitalBundle&&(M.orbitalBundle.lowerCloudMesh.rotation.y+=n*v.rotationSpeed*.45,M.orbitalBundle.upperCloudMesh.rotation.y+=n*v.rotationSpeed*.85,M.orbitalBundle.lowerCloudGroup.rotation.y+=n*v.rotationSpeed*.28)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=n*.06),this.orbitalGroup.updateMatrixWorld(!0);let i="Sol Central",r=Math.max(0,this.camera.position.length()-2.21*Li),o=12e3,a=null,l=null,c=99999;for(const[M,v]of this.planetNodes){v.root.getWorldPosition(v.currWorldPos),v.planetDeltaPos.copy(v.currWorldPos).sub(v.prevWorldPos),v.spinGroup&&(v.spinGroup.getWorldQuaternion(v.currSpinWorldQuat),this._tmpInvQuat.copy(v.prevSpinWorldQuat).invert(),v.spinQuatDelta.copy(v.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize());const b=v.config.localRadius*Li,A=b*Es,F=this.camera.position.distanceTo(v.currWorldPos),I=F-b,k=I/A;if(v.atmosphereShell&&v.atmosphereShell.material.uniforms){const G=v.atmosphereShell.material.uniforms;G.uSunPosition.value.set(0,0,0);const O=q.smoothstep(k,0,.85);G.uAltitudeFade.value=q.lerp(.18,1,O)}if(v.config.landable){!v.surfaceLoaded&&!v.surfaceLoading&&F<b*4.5&&this.ensurePlanetSurfaceLoaded(M),v.surfaceCapGroup.scale.setScalar(1);const G=k<(v.config.id==="p2"?.54:.56);if(v.surfaceCapGroup.visible=G,v.config.hasProceduralWorld&&v.orbitalBundle&&(v.orbitalBundle.surfaceMesh.visible=!G),v.orbitalBundle){const O=v.orbitalBundle;O.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(v.currWorldPos),O.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(v.currWorldPos);const L=q.smoothstep(k,.16,.46),N=L*.64,Y=L*.86;if(O.lowerCloudMesh.material.uniforms.uOpacity.value=N,O.lowerCloudMesh.visible=N>.008,O.upperCloudMesh.material.uniforms.uOpacity.value=Y,O.upperCloudMesh.visible=Y>.008,k<.98){const Q=1-q.smoothstep(k,.56,.98),se=Math.exp(-Math.pow((k-.36)/.16,2))*.82,he=Math.max(Q*.36,se);O.lowerCloudPuffs.material.opacity=he,O.lowerCloudGroup.visible=he>.008}else O.lowerCloudGroup.visible=!1}}I<r&&(r=Math.max(0,I),i=v.config.name,o=v.config.kmScale),I<c&&(c=I,l=v,a=M)}if(this.crystalPalaceAnchor){this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);const M=Math.max(0,this.camera.position.distanceTo(this._tmpStationPos)-12);M<r&&(r=M,i="Estación Crystal Palace",o=850)}let h=!1,u=!1,d=null,f=null,g=null,_=this._identityQuat,m=220,p=220*Es,y=.95,S=8,x=0,R=0,E=null,T="ESPACIO";if(l){const M=l.config;if(m=M.localRadius*Li,p=m*Es,y=M.groundFloorAlt??.95,S=M.minSpeed??8,M.id==="p1"&&l.pandoraWorld){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();const F=l.pandoraWorld.getFloorAndWaterAtDir(this._tmpLocalDir);E=F;const I=F.terrainElev*Li+(F.hasWater?.55:1.15);if(y=F.hasWater?I:Math.max(.65,I),F.hasWater){const k=F.waterElev*Li;c<k&&(R=k-c,x=q.clamp(R/1.8,0,1))}}const v=p*1.25,b=c/p;if(c<v)u=!0,d=l.planetDeltaPos,f=l.currWorldPos,g=l.prevWorldPos,_=l.spinQuatDelta;else if(this.crystalPalaceAnchor){const A=this.planetNodes.get("p2");A&&(this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos),this.camera.position.distanceTo(this._tmpStationPos)<220&&(u=!0,d=A.planetDeltaPos,f=A.currWorldPos,g=A.prevWorldPos,_=this._identityQuat))}if(M.landable&&b<1.06){h=b<=1,this.currentDominantPlanet=h?M:null,h&&this.lastBannerPlanetId!==M.id&&(this.lastBannerPlanetId=M.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${M.name.toUpperCase()}`,M.glowCss,1700),M.navKey&&this._highlightActiveNavButton(M.navKey));const A=q.clamp(1-b,0,1),F=1-q.smoothstep(b,.92,1.06),I=this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),k=this._tmpSunDir.copy(this.camera.position).negate().normalize(),G=q.clamp(I.dot(k),-1,1),O=q.smoothstep(-G,-.02,.24),L=q.smoothstep(G,-.02,.28),N=Math.exp(-Math.pow((G-.02)/.14,2))*(1-O*.55);G>.14?T="DÍA":G>=-.08?T="ATARDECER":T="NOCHE";const Y=1-q.smoothstep(A,.04,.25);for(const Z of this.orbitLines)Z.material.opacity=Z.baseOpacity*Y,Z.mesh.visible=Y>.01;const Q=-Math.sqrt(Math.max(0,1-Math.pow(m/Math.max(m,m+c),2))),se=q.smoothstep(A,.01,.36),he=this.skyDome.material.uniforms;if(M.skyDome){const Z=M.id==="p2"?1444388:1841212,le=M.id==="p2"?7085388:M.id==="p1"?6039150:10174e3,Le=M.id==="p2"?16726909:16743220,De=M.id==="p2"?331292:198678,st=M.id==="p2"?1058888:M.id==="p1"?404536:M.id==="p4"?2494984:529190,pt=M.id==="p1"&&E?this._tmpColorC.setHex(1799371).lerp(this._tmpColorB.setHex(1737450),E.waterFactor).lerp(this._tmpColorB.setHex(3024934),E.ashFactor).getHex():M.skyDome.zenith,Pt=M.id==="p1"&&E?this._tmpColorC.setHex(5157068).lerp(this._tmpColorB.setHex(5687029),E.waterFactor).lerp(this._tmpColorB.setHex(6309432),E.ashFactor).getHex():M.skyDome.mid,$=M.id==="p1"&&E?this._tmpColorC.setHex(8707782).lerp(this._tmpColorB.setHex(10810618),E.waterFactor).lerp(this._tmpColorB.setHex(11034162),E.ashFactor).getHex():M.skyDome.horizon;this._tmpColorA.setHex(pt),this._tmpColorA.lerp(this._tmpColorB.setHex(Z),N*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(66312),O*.94),he.uZenithColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(Pt),this._tmpColorA.lerp(this._tmpColorB.setHex(le),N*.85),this._tmpColorA.lerp(this._tmpColorB.setHex(De),O*.92),he.uMidColor.value.copy(this._tmpColorA),this._tmpColorA.setHex($),this._tmpColorA.lerp(this._tmpColorB.setHex(Le),N*.9),this._tmpColorA.lerp(this._tmpColorB.setHex(st),O*.92),he.uHorizonColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(M.skyDome.sunGlow),this._tmpColorA.lerp(this._tmpColorB.setHex(16757844),N*.82),this._tmpColorA.lerp(this._tmpColorB.setHex(1451069),O*.9),he.uSunGlowColor.value.copy(this._tmpColorA);const Pe=M.skyDome.zenithAlpha;if(he.uZenithAlpha.value=q.lerp(Pe,Math.max(.16,Pe*.24),O),x>.001){const Fe=O>.5?136738:547442,at=O>.5?272444:821410;he.uZenithColor.value.lerp(this._tmpColorB.setHex(Fe),x),he.uMidColor.value.lerp(this._tmpColorB.setHex(Fe),x),he.uHorizonColor.value.lerp(this._tmpColorB.setHex(at),x),he.uSunGlowColor.value.lerp(this._tmpColorB.setHex(2808046),x*.85),he.uZenithAlpha.value=q.lerp(he.uZenithAlpha.value,.96,x)}if(he.uLocalUp.value.copy(I),he.uSunDir.value.copy(k),he.uHorizonDot.value=Q,he.uAtmoOpacity.value=se,this.skyDome.visible=se>.005,this.starfield.userData.setStarVisibility){const Fe=q.lerp(M.skyDome.starFloor,Math.max(M.skyDome.starFloor,.45),N*(1-L*.7)),at=q.lerp(Fe,.96,O),nt=q.lerp(1,at,q.smoothstep(A,.06,.42))*(1-x);this.starfield.userData.setStarVisibility(nt)}}if(l.orbitalBundle){const Z=l.orbitalBundle,le=M.id==="p2"?14239882:16749142,Le=M.id==="p2"?16726909:16740396;if(Z.userBaseColors){this._tmpColorA.copy(Z.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(le),N*.72),this._tmpColorC.copy(Z.userBaseColors.horizon).lerp(this._tmpColorB.setHex(Le),N*.85);for(const st of[Z.upperCloudMesh,Z.lowerCloudMesh])st.material.uniforms.uSunColor.value.copy(this._tmpColorA),st.material.uniforms.uHorizonColor.value.copy(this._tmpColorC)}const De=M.id==="p2"?1452616:1319480;this._tmpColorA.copy(Z.userBaseColors?Z.userBaseColors.sunlit:this._tmpColorB.setHex(16777215)),this._tmpColorA.lerp(this._tmpColorB.setHex(le),N*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(De),O*.88),Z.lowerCloudPuffs.material.color.copy(this._tmpColorA)}const we=A>.32;for(const[Z,le]of this.planetNodes)le.root.visible=we?Z===a:!0;const U=1-q.smoothstep(b,.45,.98),V=M.id==="p1"&&E&&E.ashFactor>.35?919044:198156,J=M.id==="p2"?3871275:8139812,ie=M.id==="p1"&&E?this._tmpColorC.setHex(2655412).lerp(this._tmpColorB.setHex(2527952),E.waterFactor).lerp(this._tmpColorB.setHex(4994604),E.ashFactor).getHex():M.skyColor;this._tmpSkyColor.setHex(ie).lerp(this._tmpColorB.setHex(J),N*.72).lerp(this._tmpColorB.setHex(V),O*.92),x>.001&&this._tmpSkyColor.lerp(this._tmpColorB.setHex(683142).lerp(this._tmpColorC.setHex(137768),O),x),this.scene.background=this._tmpColorA.setHex(V).clone().lerp(this._tmpSkyColor,U*.9);const de=M.id==="p1"&&E?1.05*E.forestFactor+.78*E.waterFactor+2.15*E.ashFactor:1,fe=M.maxFogDensity*de*(1-q.smoothstep(b,.16,.85)),xe=.02*Math.exp(-Math.pow((b-.43)/.11,2)),Te=.0028*Math.exp(-Math.pow((b-.94)/.12,2)),ye=M.id==="p1"?.0024*(1-q.smoothstep(b,0,.09))*(1-(E?.ashFactor||0)*.4):0,Se=(fe+xe+Te+ye)*F,H=q.lerp(.022,.036,O),tt=q.lerp(Se,H,x),We=M.id==="p1"&&E?this._tmpColorC.setHex(5023914).lerp(this._tmpColorB.setHex(6476523),E.waterFactor).lerp(this._tmpColorB.setHex(6046772),E.ashFactor).getHex():M.fogColor,Je=M.id==="p2"?6428730:13920826,Ee=M.id==="p1"?E&&E.ashFactor>.35?1444358:268836:M.id==="p2"?265496:329744;this._tmpFogColor.setHex(We).lerp(this._tmpColorB.setHex(Je),N*.78).lerp(this._tmpColorB.setHex(Ee),O*.9),x>.001&&this._tmpFogColor.lerp(this._tmpColorB.setHex(883350).lerp(this._tmpColorC.setHex(205362),O),x),this.scene.fog?(this.scene.fog.color.copy(this._tmpFogColor),this.scene.fog.density=tt):this.scene.fog=new Pl(this._tmpFogColor.getHex(),tt);const ot=M.id==="p1"?1-.34*(1-q.smoothstep(b,0,.12)):1,Re=M.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1,D=q.lerp(.05,1,q.smoothstep(G,-.06,.24)),C=q.lerp(1,.45,x);this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize(),this.planetaryDirLight.position.copy(this._tmpPlanetToSun).multiplyScalar(1200),this.planetaryDirLight.color.setHex(M.sunColor).lerp(this._tmpColorB.setHex(16741424),N*.72).lerp(this._tmpColorB.setHex(5008280),O*.85),this.planetaryDirLight.intensity=q.lerp(.25,M.sunIntensity,A)*ot*D*C,this.hemiLight.position.copy(I).multiplyScalar(100);const j=M.id==="p2"?16726909:16743220,oe=M.id==="p1"?537668:M.id==="p2"?926272:792108,ce=M.id==="p1"?401448:527380,ae=M.id==="p1"&&E?this._tmpColorC.setHex(6079672).lerp(this._tmpColorB.setHex(7395583),E.waterFactor).lerp(this._tmpColorB.setHex(9069644),E.ashFactor).getHex():M.hemiSkyColor,Ue=M.id==="p1"&&E?this._tmpColorC.setHex(1985064).lerp(this._tmpColorB.setHex(1330784),E.waterFactor).lerp(this._tmpColorB.setHex(2890772),E.ashFactor).getHex():M.hemiGroundColor;this._tmpColorA.setHex(ae).lerp(this._tmpColorB.setHex(j),N*.55).lerp(this._tmpColorB.setHex(oe),O*.9),x>.001&&this._tmpColorA.lerp(this._tmpColorB.setHex(1889514).lerp(this._tmpColorC.setHex(407624),O),x*.85),this.hemiLight.color.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this._tmpColorA.setHex(Ue).lerp(this._tmpColorB.setHex(ce),O*.85),this.hemiLight.groundColor.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this.hemiLight.intensity=q.lerp(.42,M.hemiIntensity,A)*q.lerp(1,.36,O);const Ce=M.id==="p1"&&E?this._tmpColorC.setHex(2247218).lerp(this._tmpColorB.setHex(1986148),E.waterFactor).lerp(this._tmpColorB.setHex(3548186),E.ashFactor).getHex():M.ambientColor;this._tmpColorA.setHex(Ce).lerp(this._tmpColorB.setHex(1054760),O*.82),this.ambientLight.color.lerp(this._tmpColorA,Math.min(1,A*.35+.08)),this.ambientLight.intensity=q.lerp(.55,M.ambientIntensity,A)*ot*q.lerp(1,.45,O);const Ne=M.id==="p1"?.74:M.id==="p3"?.85:.9,ft=M.id==="p1"?2.45*Re:M.id==="p2"?2.15:M.id==="p3"?2.25:1.95,pe=Math.min(1,Math.max(O,N*.45)),Ie=q.lerp(Ne,ft,pe);if(l.surfaceCapGroup.visible){for(const Z of l.animators)Z.update(this.elapsedTime,Ie,G,x);for(const Z of l.nightMaterials)M.id==="p2"?Z.tier==="window"?Z.material.emissiveIntensity=Z.baseEmissive*q.lerp(.65,1.45,pe):Z.tier==="hero"?Z.material.emissiveIntensity=Z.baseEmissive*q.lerp(.95,1.32,pe):Z.material.emissiveIntensity=Z.baseEmissive*q.lerp(.78,1.18,pe):Z.material.emissiveIntensity=Z.baseEmissive*Ie}const Qe=1-q.smoothstep(b,.05,.45),it=M.id==="p1"?q.smoothstep(-G,-.1,.04):1,Ge=M.id==="p1"&&E&&x<=.2?this._tmpColorC.setHex(M.localLightColor).lerp(this._tmpColorB.setHex(2683096),E.waterFactor).lerp(this._tmpColorB.setHex(16742456),E.ashFactor).getHex():x>.2?1894655:M.localLightColor,vt=M.id==="p1"&&E?this._tmpColorC.setHex(M.localBounceColor).lerp(this._tmpColorB.setHex(1628415),E.waterFactor).lerp(this._tmpColorB.setHex(16730648),E.ashFactor).getHex():M.localBounceColor;if(this.localAtmoLight.color.setHex(Ge),this.localAtmoLight.intensity=Qe*5.2*Re*q.lerp(.85,1.38,pe)*Math.max(it,x*.6),this.localAtmoLight.position.copy(this.camera.position).addScaledVector(I,18),this.localBounceLight.color.setHex(vt),this.localBounceLight.intensity=Qe*4.8*Re*q.lerp(.85,1.35,pe)*it,this.localBounceLight.position.copy(this.camera.position).addScaledVector(I,-8),this.bloomPass){const Z=M.id==="p2"?1.08:1.18,le=M.bloomStrength*Re*q.lerp(.92,Z,O);this.bloomPass.strength=q.lerp(.55,Math.min(.76,le),Qe)}const ct=Math.exp(-Math.pow((b-.78)/.2,2))*.85,At=Math.exp(-Math.pow((b-.4)/.14,2))*.55,X=M.id==="p1"&&E?E.ashFactor*Qe*.42:0,Ae=x>.08?4126184:M.id==="p1"&&E&&E.ashFactor>.38?16751192:M.particleColor;this.cockpitParticles.setAtmosphereStyle(Ae,Math.max(Math.max(ct,At),x*.72,X))}}if(l&&c/p>=1.06&&(h=!1),this.mode=h?"SURFACE":"ORBIT",!l||!l.config.landable||c/p>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const M of this.orbitLines)M.material.opacity=M.baseOpacity,M.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,M]of this.planetNodes)M.root.visible=!0,M.config.hasProceduralWorld&&M.orbitalBundle&&(M.orbitalBundle.surfaceMesh.visible=!0);this.scene.background.lerp(new re(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.planetaryDirLight.intensity=q.lerp(this.planetaryDirLight.intensity,.22,.1),this.hemiLight.position.set(0,100,0),this.hemiLight.color.lerp(new re(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new re(1053724),Math.min(1,t*3)),this.hemiLight.intensity=q.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new re(1844790),Math.min(1,t*3)),this.ambientLight.intensity=q.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=q.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=q.lerp(this.localBounceLight.intensity,0,.15),this.bloomPass&&(this.bloomPass.strength=q.lerp(this.bloomPass.strength,.55,.1)),this.cockpitParticles.setAtmosphereStyle(8965375,0)}if(this.controls.setAltitudeContext({surfaceAltitude:c,planetRadius:m,atmoTopAlt:p,groundFloorAlt:y,minSpeed:S,submergedRatio:x,planetCenter:f||(l?l.currWorldPos:null),prevPlanetCenter:g||(l?l.prevWorldPos:null),hasPlanet:!!l,inGravityWell:u,planetDeltaPos:d,planetQuatDelta:_}),h&&this.currentDominantPlanet){const M=R>.05,v=M?Math.round(R*15):Math.max(0,Math.round((c-y)*115));let b=null;if(this.currentDominantPlanet.id==="p1"){const A=this.planetNodes.get("p1"),F=A?.capFrame||A?.spinGroup||A?.root;F&&(b=Rt.map(I=>{this._tmpStationPos.copy(I.capDir).multiplyScalar(A.config.localRadius).applyMatrix4(F.matrixWorld);const k=Math.round(this.camera.position.distanceTo(this._tmpStationPos)*(A.config.kmScale/620));return{id:I.id,shortName:I.shortName,distKm:k}}))}this.onStatusUpdate({modeText:M?"SUBMARINO":"ATMOSFÉRICO",isSurface:!0,isUnderwater:M,sectorName:this.currentDominantPlanet.name.toUpperCase(),nearestText:`${this.currentDominantPlanet.name}`,altitudeText:M?`-${v.toLocaleString("es-ES")} m`:`${v.toLocaleString("es-ES")} m`,timeScale:this.timeScale,solarPhaseName:T,pandoraLandmarks:b})}else{const M=Math.max(1,Math.round(r*(o/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${i} · ${M.toLocaleString("es-ES")} km`,altitudeText:`${M.toLocaleString("es-ES")} km`,timeScale:this.timeScale,solarPhaseName:"ESPACIO"})}}}const Vu=document.getElementById("app-canvas"),Th=document.getElementById("loading-screen"),co=document.getElementById("loading-status"),Ch=document.getElementById("loading-bar-fill"),Sa=document.getElementById("hud-mode"),Rh=document.getElementById("hud-sector"),Ph=document.getElementById("hud-nearest"),Ih=document.getElementById("hud-altitude"),Lh=document.getElementById("hud-time-btn"),Is=document.getElementById("hud-time"),ho=document.getElementById("pandora-landmarks-bar"),Dh=document.getElementById("hud-speed"),Nh=document.getElementById("hud-speed-unit"),Uh=document.getElementById("hud-speed-bar"),Fh=document.getElementById("hud-mult"),ba=document.getElementById("hud-boost"),Oh=document.getElementById("hud-coords"),Er=new l_;Er.background=new re(198156);const zi=new En(62,window.innerWidth/window.innerHeight,.05,12e4);Er.add(zi);const ss=new a_({canvas:Vu,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});ss.setSize(window.innerWidth,window.innerHeight);ss.setPixelRatio(Math.min(window.devicePixelRatio,2));ss.outputColorSpace=Gt;ss.toneMapping=vl;ss.toneMappingExposure=1.08;const Ar=new dx(ss),nM=new fx(Er,zi);Ar.addPass(nM);const Xl=new Hs(new ke(window.innerWidth,window.innerHeight),.55,.35,.95);Ar.addPass(Xl);const iM=new gx;Ar.addPass(iM);const Hu=_x(8500,52e3);Er.add(Hu);const Wu=new xx(zi,420),Zi=new vx(zi,Vu),Dn=new tM({scene:Er,camera:zi,controls:Zi,starfield:Hu,cockpitParticles:Wu,bloomPass:Xl,onStatusUpdate:s=>{if(Sa){Sa.textContent=s.modeText;const e=s.isUnderwater?"mode-sub":s.isSurface?"mode-atmo":"mode-orbit";Sa.className=`hud-value ${e}`}if(Rh&&(Rh.textContent=s.sectorName),Ph&&(Ph.textContent=s.nearestText),Ih&&(Ih.textContent=s.altitudeText),Is&&(Is.textContent=`${s.timeScale}x · ${s.solarPhaseName}`,Is.className=`hud-value ${s.solarPhaseName==="DÍA"?"phase-day":s.solarPhaseName==="ATARDECER"?"phase-dusk":s.solarPhaseName==="NOCHE"?"phase-night":""}`),ho)if(s.pandoraLandmarks){ho.classList.remove("hidden");for(const e of s.pandoraLandmarks){const t=ho.querySelector(`small[data-dist="${e.id}"]`);t&&(t.textContent=`${e.distKm.toLocaleString("es-ES")} km`)}}else ho.classList.add("hidden")}}),Xu=()=>{const s=Dn.cycleTimeScale();if(Is){const e=Is.textContent.split("·")[1]?.trim()||"ESPACIO";Is.textContent=`${s}x · ${e}`}};Lh&&Lh.addEventListener("click",s=>{s.stopPropagation(),Xu()});document.querySelectorAll(".nav-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.target;t&&Dn.navigateToTarget(t)})});document.querySelectorAll(".pandora-lm-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.landmark;t&&Dn.navigateToPandoraLandmark(t)})});window.addEventListener("keydown",s=>{["Digit1","Numpad1"].includes(s.code)&&Dn.navigateToTarget("1"),["Digit2","Numpad2"].includes(s.code)&&Dn.navigateToTarget("2"),["Digit3","Numpad3"].includes(s.code)&&Dn.navigateToTarget("3"),["Digit4","Numpad4"].includes(s.code)&&Dn.navigateToTarget("4"),["Digit5","Numpad5"].includes(s.code)&&Dn.navigateToTarget("5"),["Digit6","Numpad6"].includes(s.code)&&Dn.navigateToTarget("6"),s.code==="KeyT"&&!s.repeat&&Xu()});window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;zi.aspect=s/e,zi.updateProjectionMatrix(),ss.setSize(s,e),Ar.setSize(s,e),Xl.resolution.set(s,e)});async function sM(){try{await Dn.init((s,e)=>{Ch&&(Ch.style.width=`${s}%`),co&&(co.textContent=e)})}catch(s){console.error("Error inicializando simulador:",s),co&&(co.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{Th&&Th.classList.add("hidden")},300)}}const rM=new Lu;function qu(){requestAnimationFrame(qu);const s=rM.getDelta();Dn.update(s),Zi.update(s),Dn.syncCameraPostFlight();const e=Zi.getCurrentSpeed(),t=Zi.getPulseRatio();Wu.update(s,e,t);const n=Dn.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(Dh&&(Dh.textContent=i),Nh&&(Nh.textContent=n?"km/s":"m/s"),Uh){const r=(n?1400:120)*Zi.speedMultiplier,o=Math.min(100,e/Math.max(1,r)*100);Uh.style.width=`${o}%`}if(Fh&&(Fh.textContent=`x${Zi.speedMultiplier.toFixed(1)}`),ba){const r=t>.1;ba.textContent=Zi.autopilot?"PILOTO AUTO":r?"MOTOR PULSE":"EN ESPERA",ba.className=r?"status-active":"status-standby"}if(Oh){const r=zi.position;Oh.textContent=`${r.x.toFixed(0)}, ${r.y.toFixed(0)}, ${r.z.toFixed(0)}`}Ar.render()}sM();qu();
