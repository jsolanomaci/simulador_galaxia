(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="170",Wu=0,Hl=1,Xu=2,Uh=1,qu=2,ci=3,Jn=0,vn=1,qt=2,pi=0,ws=1,fn=2,Wl=3,Xl=4,Yu=5,ji=100,Ku=101,ju=102,Zu=103,$u=104,Qu=200,Ju=201,ed=202,td=203,Ma=204,ya=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,ld=212,cd=213,hd=214,Sa=0,ba=1,wa=2,Rs=3,Ea=4,Aa=5,Ta=6,Ca=7,Fh=0,ud=1,dd=2,Ni=0,Oh=1,Bh=2,zh=3,ml=4,fd=5,kh=6,Gh=7,ql="attached",pd="detached",Vh=300,Ps=301,Is=302,Ra=303,Pa=304,yo=306,Ui=1e3,Li=1001,go=1002,En=1003,Hh=1004,or=1005,Ln=1006,ao=1007,di=1008,xi=1009,Wh=1010,Xh=1011,pr=1012,gl=1013,Qi=1014,qn=1015,mi=1016,_l=1017,xl=1018,Ls=1020,qh=35902,Yh=1021,Kh=1022,Bn=1023,jh=1024,Zh=1025,Es=1026,Ds=1027,vl=1028,Ml=1029,$h=1030,yl=1031,Sl=1033,lo=33776,co=33777,ho=33778,uo=33779,Ia=35840,La=35841,Da=35842,Na=35843,Ua=36196,Fa=37492,Oa=37496,Ba=37808,za=37809,ka=37810,Ga=37811,Va=37812,Ha=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Ka=37818,ja=37819,Za=37820,$a=37821,fo=36492,Qa=36494,Ja=36495,Qh=36283,el=36284,tl=36285,nl=36286,mr=2300,gr=2301,Ro=2302,Yl=2400,Kl=2401,jl=2402,md=2500,gd=0,Jh=1,il=2,_d=3200,xd=3201,eu=0,vd=1,Ii="",Ut="srgb",Mn="srgb-linear",So="linear",kt="srgb",is=7680,Zl=519,Md=512,yd=513,Sd=514,tu=515,bd=516,wd=517,Ed=518,Ad=519,sl=35044,$l="300 es",fi=2e3,_o=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const cr=Math.PI/180,Ns=180/Math.PI;function Yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function dn(s,e,t){return Math.max(e,Math.min(t,s))}function bl(s,e){return(s%e+e)%e}function Td(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Cd(s,e,t){return s!==e?(t-s)/(e-s):0}function hr(s,e,t){return(1-t)*s+t*e}function Rd(s,e,t,n){return hr(s,e,1-Math.exp(-t*n))}function Pd(s,e=1){return e-Math.abs(bl(s,e*2)-e)}function Id(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ld(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Dd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Nd(s,e){return s+Math.random()*(e-s)}function Ud(s){return s*(.5-Math.random())}function Fd(s){s!==void 0&&(Ql=s);let e=Ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Od(s){return s*cr}function Bd(s){return s*Ns}function zd(s){return(s&s-1)===0&&s!==0}function kd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Z={DEG2RAD:cr,RAD2DEG:Ns,generateUUID:Yn,clamp:dn,euclideanModulo:bl,mapLinear:Td,inverseLerp:Cd,lerp:hr,damp:Rd,pingpong:Pd,smoothstep:Id,smootherstep:Ld,randInt:Dd,randFloat:Nd,randFloatSpread:Ud,seededRandom:Fd,degToRad:Od,radToDeg:Bd,isPowerOfTwo:zd,ceilPowerOfTwo:kd,floorPowerOfTwo:Gd,setQuaternionFromProperEuler:Vd,normalize:Gt,denormalize:Xn};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,i,r,o,a,l,c){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],M=i[1],y=i[4],_=i[7],A=i[2],C=i[5],S=i[8];return r[0]=o*x+a*M+l*A,r[3]=o*m+a*y+l*C,r[6]=o*p+a*_+l*S,r[1]=c*x+h*M+u*A,r[4]=c*m+h*y+u*C,r[7]=c*p+h*_+u*S,r[2]=d*x+f*M+g*A,r[5]=d*m+f*y+g*C,r[8]=d*p+f*_+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new St;function nu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hd(){const s=_r("canvas");return s.style.display="block",s}const Jl={};function ar(s){s in Jl||(Jl[s]=!0,console.warn(s))}function Wd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Xd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===kt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===kt&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?So:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ec=[.64,.33,.3,.6,.15,.06],tc=[.2126,.7152,.0722],nc=[.3127,.329],ic=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[Mn]:{primaries:ec,whitePoint:nc,transfer:So,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:tc,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:ec,whitePoint:nc,transfer:kt,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:tc,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let ss;class Yd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=_r("canvas")),ss.width=e.width,ss.height=e.height;const n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Io(i[o].image)):r.push(Io(i[o]))}else r=Io(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Io(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jd=0;class rn extends Gs{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Li,i=Li,r=Ln,o=di,a=Bn,l=xi,c=rn.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Yn(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Vh;rn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,i=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(f+1)/2,A=(p+1)/2,C=(h+d)/4,S=(u+x)/4,E=(g+m)/4;return y>_&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=C/n,r=S/n):_>A?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=C/i,r=E/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=S/r,i=E/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends Gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Zd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class su extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),C=Math.atan2(A,p*M);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const _=a*M;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new w,rc=new ht;class Mi{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Ar.subVectors(this.max,qs),rs.subVectors(e.a,qs),os.subVectors(e.b,qs),as.subVectors(e.c,qs),Si.subVectors(os,rs),bi.subVectors(as,os),zi.subVectors(rs,as);let t=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-zi.z,zi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,zi.z,0,-zi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-zi.y,zi.x,0];return!Do(t,rs,os,as,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,rs,os,as,Ar))?!1:(Tr.crossVectors(Si,bi),t=[Tr.x,Tr.y,Tr.z],Do(t,rs,os,as,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new w,new w,new w,new w,new w,new w,new w,new w],Gn=new w,Er=new Mi,rs=new w,os=new w,as=new w,Si=new w,bi=new w,zi=new w,qs=new w,Ar=new w,Tr=new w,ki=new w;function Do(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ki.fromArray(s,r);const a=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qd=new Mi,Ys=new w,No=new w;class ei{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(No)),this.expandByPoint(Ys.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new w,Uo=new w,Cr=new w,wi=new w,Fo=new w,Rr=new w,Oo=new w;class bo{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Uo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=wi.dot(this.direction),l=-wi.dot(Cr),c=wi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Uo).addScaledVector(Cr,d),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,r){Fo.subVectors(t,e),Rr.subVectors(n,e),Oo.crossVectors(Fo,Rr);let o=this.direction.dot(Oo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(Rr.crossVectors(wi,Rr));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(wi));if(c<0||l+c>o)return null;const h=-a*wi.dot(Oo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,x,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jd,e,ef)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ei.crossVectors(n,Rn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ei.crossVectors(n,Rn)),Ei.normalize(),Pr.crossVectors(Rn,Ei),i[0]=Ei.x,i[4]=Pr.x,i[8]=Rn.x,i[1]=Ei.y,i[5]=Pr.y,i[9]=Rn.y,i[2]=Ei.z,i[6]=Pr.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],y=n[7],_=n[11],A=n[15],C=i[0],S=i[4],E=i[8],v=i[12],b=i[1],P=i[5],N=i[9],D=i[13],z=i[2],O=i[6],k=i[10],L=i[14],B=i[3],ne=i[7],ie=i[11],oe=i[15];return r[0]=o*C+a*b+l*z+c*B,r[4]=o*S+a*P+l*O+c*ne,r[8]=o*E+a*N+l*k+c*ie,r[12]=o*v+a*D+l*L+c*oe,r[1]=h*C+u*b+d*z+f*B,r[5]=h*S+u*P+d*O+f*ne,r[9]=h*E+u*N+d*k+f*ie,r[13]=h*v+u*D+d*L+f*oe,r[2]=g*C+x*b+m*z+p*B,r[6]=g*S+x*P+m*O+p*ne,r[10]=g*E+x*N+m*k+p*ie,r[14]=g*v+x*D+m*L+p*oe,r[3]=M*C+y*b+_*z+A*B,r[7]=M*S+y*P+_*O+A*ne,r[11]=M*E+y*N+_*k+A*ie,r[15]=M*v+y*D+_*L+A*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,A=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,C=t*M+n*y+i*_+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return e[0]=M*S,e[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*S,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*S,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*S,e[4]=y*S,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*S,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*S,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*S,e[8]=_*S,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*S,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*S,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*S,e[12]=A*S,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*S,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*S,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=l*c,y=l*h,_=l*u,A=n.x,C=n.y,S=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+_)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-_)*C,i[5]=(1-(d+p))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(g+y)*S,i[9]=(m-M)*S,i[10]=(1-(d+x))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ls.set(i[0],i[1],i[2]).length();const o=ls.set(i[4],i[5],i[6]).length(),a=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);const c=1/r,h=1/o,u=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=fi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===fi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_o)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=fi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let g,x;if(a===fi)g=(o+r)*u,x=-2*u;else if(a===_o)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ls=new w,Vn=new tt,Jd=new w(0,0,0),ef=new w(1,1,1),Ei=new w,Pr=new w,Rn=new w,oc=new tt,ac=new ht;class zn{constructor(e=0,t=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tf=0;const lc=new w,cs=new ht,ri=new tt,Ir=new w,Ks=new w,nf=new w,sf=new ht,cc=new w(1,0,0),hc=new w(0,1,0),uc=new w(0,0,1),dc={type:"added"},rf={type:"removed"},hs={type:"childadded",child:null},Bo={type:"childremoved",child:null};class Dt extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new w,t=new zn,n=new ht,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new St}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return lc.copy(e).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Ks,Ir,this.up):ri.lookAt(Ir,Ks,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(ri),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,sf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dt.DEFAULT_UP=new w(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new w,oi=new w,zo=new w,ai=new w,us=new w,ds=new w,fc=new w,ko=new w,Go=new w,Vo=new w,Ho=new Ft,Wo=new Ft,Xo=new Ft;class On{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hn.subVectors(e,t),i.cross(Hn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Hn.subVectors(i,t),oi.subVectors(n,t),zo.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(oi),l=Hn.dot(zo),c=oi.dot(oi),h=oi.dot(zo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ho.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Ho.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ho,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(e,t,n,i){return Hn.subVectors(n,t),oi.subVectors(e,t),Hn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Hn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;us.subVectors(i,n),ds.subVectors(r,n),ko.subVectors(e,n);const l=us.dot(ko),c=ds.dot(ko);if(l<=0&&c<=0)return t.copy(n);Go.subVectors(e,i);const h=us.dot(Go),u=ds.dot(Go);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(us,o);Vo.subVectors(e,r);const f=us.dot(Vo),g=ds.dot(Vo);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ds,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return fc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(fc,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function qo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=bl(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qo(o,r,e+1/3),this.g=qo(o,r,e),this.b=qo(o,r,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ct.fromWorkingColorSpace(xn.copy(this),e),Math.round(dn(xn.r*255,0,255))*65536+Math.round(dn(xn.g*255,0,255))*256+Math.round(dn(xn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,r=xn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ut){Ct.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Lr);const n=hr(Ai.h,Lr.h,t),i=hr(Ai.s,Lr.s,t),r=hr(Ai.l,Lr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new le;le.NAMES=ou;let of=0;class jn extends Gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Yn(),this.name="",this.blending=ws,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ya,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class An extends jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new w,Dr=new ze;class vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class au extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lu extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let af=0;const Nn=new tt,Yo=new Dt,fs=new w,Pn=new Mi,js=new Mi,hn=new w;class Pt extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?lu:au)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Pn.min,js.min),Pn.expandByPoint(hn),hn.addVectors(Pn.max,js.max),Pn.expandByPoint(hn)):(Pn.expandByPoint(js.min),Pn.expandByPoint(js.max))}Pn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),hn.add(fs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new w,l[E]=new w;const c=new w,h=new w,u=new w,d=new ze,f=new ze,g=new ze,x=new w,m=new w;function p(E,v,b){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[E].add(x),a[v].add(x),a[b].add(x),l[E].add(m),l[v].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,v=M.length;E<v;++E){const b=M[E],P=b.start,N=b.count;for(let D=P,z=P+N;D<z;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new w,_=new w,A=new w,C=new w;function S(E){A.fromBufferAttribute(i,E),C.copy(A);const v=a[E];y.copy(v),y.sub(A.multiplyScalar(A.dot(v))).normalize(),_.crossVectors(C,v);const P=_.dot(l[E])<0?-1:1;o.setXYZW(E,y.x,y.y,y.z,P)}for(let E=0,v=M.length;E<v;++E){const b=M[E],P=b.start,N=b.count;for(let D=P,z=P+N;D<z;D+=3)S(e.getX(D+0)),S(e.getX(D+1)),S(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new tt,Gi=new bo,Nr=new ei,mc=new w,Ur=new w,Fr=new w,Or=new w,Ko=new w,Br=new w,gc=new w,zr=new w;class ot extends Dt{constructor(e=new Pt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ko.fromBufferAttribute(u,e),o?Br.addScaledVector(Ko,h):Br.addScaledVector(Ko.sub(t),h))}t.add(Br)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Nr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Nr,mc)===null||Gi.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(pc.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(pc),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,A=y;_<A;_+=3){const C=a.getX(_),S=a.getX(_+1),E=a.getX(_+2);i=kr(this,p,e,n,c,h,u,C,S,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);i=kr(this,o,e,n,c,h,u,M,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,A=y;_<A;_+=3){const C=_,S=_+1,E=_+2;i=kr(this,p,e,n,c,h,u,C,S,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=m,y=m+1,_=m+2;i=kr(this,o,e,n,c,h,u,M,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function lf(s,e,t,n,i,r,o,a){let l;if(e.side===vn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Jn,a),l===null)return null;zr.copy(a),zr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:s}}function kr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ur),s.getVertexPosition(l,Fr),s.getVertexPosition(c,Or);const h=lf(s,e,t,n,Ur,Fr,Or,gc);if(h){const u=new w;On.getBarycoord(gc,Ur,Fr,Or,u),i&&(h.uv=On.getInterpolatedAttribute(i,a,l,c,u,new ze)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,l,c,u,new ze)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new w,materialIndex:0};On.getNormal(Ur,Fr,Or,d.normal),h.face=d,h.barycoord=u}return h}class jt extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(x,m,p,M,y,_,A,C,S,E,v){const b=_/S,P=A/E,N=_/2,D=A/2,z=C/2,O=S+1,k=E+1;let L=0,B=0;const ne=new w;for(let ie=0;ie<k;ie++){const oe=ie*P-D;for(let X=0;X<O;X++){const Pe=X*b-N;ne[x]=Pe*M,ne[m]=oe*y,ne[p]=z,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=C>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(X/S),u.push(1-ie/E),L+=1}}for(let ie=0;ie<E;ie++)for(let oe=0;oe<S;oe++){const X=d+oe+O*ie,Pe=d+oe+O*(ie+1),G=d+(oe+1)+O*(ie+1),K=d+(oe+1)+O*ie;l.push(X,Pe,K),l.push(Pe,G,K),B+=6}a.addGroup(f,B,v),f+=B,d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(s){const e={};for(let t=0;t<s.length;t++){const n=Us(s[t]);for(const i in n)e[i]=n[i]}return e}function cf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const xr={clone:Us,merge:Sn};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hu extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new w,_c=new ze,xc=new ze;class bn extends hu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,_c,xc),t.subVectors(xc,_c)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class df extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bn(ps,ms,e,t);i.layers=this.layers,this.add(i);const r=new bn(ps,ms,e,t);r.layers=this.layers,this.add(r);const o=new bn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new bn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new bn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new bn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uu extends rn{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ff extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new uu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jt(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:pi});r.uniforms.tEquirect.value=t;const o=new ot(i,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=Ln),new df(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const jo=new w,pf=new w,mf=new St;class qi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=jo.subVectors(n,t).cross(pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mf.getNormalMatrix(e),i=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new ei,Gr=new w;class wl{constructor(e=new qi,t=new qi,n=new qi,i=new qi,r=new qi,o=new qi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],M=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+h,m+g,_+M).normalize(),n[3].setComponents(l-o,d-h,m-g,_-M).normalize(),n[4].setComponents(l-a,d-u,m-x,_-y).normalize(),t===fi)n[5].setComponents(l+a,d+u,m+x,_+y).normalize();else if(t===_o)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gr.x=i.normal.x>0?e.max.x:e.min.x,Gr.y=i.normal.y>0?e.max.y:e.min.y,Gr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function du(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function gf(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Zn extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let y=0;y<c;y++){const _=y*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,_=M+c*(p+1),A=M+1+c*(p+1),C=M+1+c*p;f.push(y,_,C),f.push(_,A,C)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.widthSegments,e.heightSegments)}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tm=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Lm=`#define LAMBERT
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
}`,Dm=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Um=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define PHONG
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
}`,zm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:_f,alphahash_pars_fragment:xf,alphamap_fragment:vf,alphamap_pars_fragment:Mf,alphatest_fragment:yf,alphatest_pars_fragment:Sf,aomap_fragment:bf,aomap_pars_fragment:wf,batching_pars_vertex:Ef,batching_vertex:Af,begin_vertex:Tf,beginnormal_vertex:Cf,bsdfs:Rf,iridescence_fragment:Pf,bumpmap_pars_fragment:If,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Uf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:Bf,color_vertex:zf,common:kf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:Kf,envmap_fragment:jf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:$f,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:cp,envmap_vertex:Jf,fog_vertex:ep,fog_pars_vertex:tp,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:op,lights_lambert_pars_fragment:ap,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:xp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Sp,map_fragment:bp,map_pars_fragment:wp,map_particle_fragment:Ep,map_particle_pars_fragment:Ap,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Rp,morphcolor_vertex:Pp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Lp,morphtarget_vertex:Dp,normal_fragment_begin:Np,normal_fragment_maps:Up,normal_pars_fragment:Fp,normal_pars_vertex:Op,normal_vertex:Bp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Hp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:qp,project_vertex:Yp,dithering_fragment:Kp,dithering_pars_fragment:jp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:Jp,shadowmap_vertex:em,shadowmask_pars_fragment:tm,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:xm,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:ym,depth_vert:Sm,depth_frag:bm,distanceRGBA_vert:wm,distanceRGBA_frag:Em,equirect_vert:Am,equirect_frag:Tm,linedashed_vert:Cm,linedashed_frag:Rm,meshbasic_vert:Pm,meshbasic_frag:Im,meshlambert_vert:Lm,meshlambert_frag:Dm,meshmatcap_vert:Nm,meshmatcap_frag:Um,meshnormal_vert:Fm,meshnormal_frag:Om,meshphong_vert:Bm,meshphong_frag:zm,meshphysical_vert:km,meshphysical_frag:Gm,meshtoon_vert:Vm,meshtoon_frag:Hm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:Km,sprite_frag:jm},Be={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Qn={basic:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new le(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Sn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Sn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new le(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Sn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Sn([Be.points,Be.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Sn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Sn([Be.common,Be.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Sn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Sn([Be.sprite,Be.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Sn([Be.common,Be.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Sn([Be.lights,Be.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Qn.physical={uniforms:Sn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Vr={r:0,b:0,g:0},Hi=new zn,Zm=new tt;function $m(s,e,t,n,i,r,o){const a=new le(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1;const _=g(M);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===yo)?(h===void 0&&(h=new ot(new jt(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Us(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(Hi)),h.material.toneMapped=Ct.getTransfer(_.colorSpace)!==kt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ot(new Zn(2,2),new tn({name:"BackgroundMaterial",uniforms:Us(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(_.colorSpace)!==kt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Vr,cu(s)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m}}function Qm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,P,N,D,z){let O=!1;const k=u(D,N,P);r!==k&&(r=k,c(r.object)),O=f(b,D,N,z),O&&g(b,D,N,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(b,P,N,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,P,N){const D=N.wireframe===!0;let z=n[b.id];z===void 0&&(z={},n[b.id]=z);let O=z[P.id];O===void 0&&(O={},z[P.id]=O);let k=O[D];return k===void 0&&(k=d(l()),O[D]=k),k}function d(b){const P=[],N=[],D=[];for(let z=0;z<t;z++)P[z]=0,N[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:b,attributes:{},index:null}}function f(b,P,N,D){const z=r.attributes,O=P.attributes;let k=0;const L=N.getAttributes();for(const B in L)if(L[B].location>=0){const ie=z[B];let oe=O[B];if(oe===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function g(b,P,N,D){const z={},O=P.attributes;let k=0;const L=N.getAttributes();for(const B in L)if(L[B].location>=0){let ie=O[B];ie===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),z[B]=oe,k++}r.attributes=z,r.attributesNum=k,r.index=D}function x(){const b=r.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const N=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;N[b]=1,D[b]===0&&(s.enableVertexAttribArray(b),D[b]=1),z[b]!==P&&(s.vertexAttribDivisor(b,P),z[b]=P)}function M(){const b=r.newAttributes,P=r.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==b[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function y(b,P,N,D,z,O,k){k===!0?s.vertexAttribIPointer(b,P,N,z,O):s.vertexAttribPointer(b,P,N,D,z,O)}function _(b,P,N,D){x();const z=D.attributes,O=N.getAttributes(),k=P.defaultAttributeValues;for(const L in O){const B=O[L];if(B.location>=0){let ne=z[L];if(ne===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){const ie=ne.normalized,oe=ne.itemSize,X=e.get(ne);if(X===void 0)continue;const Pe=X.buffer,G=X.type,K=X.bytesPerElement,ue=G===s.INT||G===s.UNSIGNED_INT||ne.gpuType===gl;if(ne.isInterleavedBufferAttribute){const J=ne.data,fe=J.stride,ve=ne.offset;if(J.isInstancedInterleavedBuffer){for(let ge=0;ge<B.locationSize;ge++)p(B.location+ge,J.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ge=0;ge<B.locationSize;ge++)m(B.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ge=0;ge<B.locationSize;ge++)y(B.location+ge,oe/B.locationSize,G,ie,fe*K,(ve+oe/B.locationSize*ge)*K,ue)}else{if(ne.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)p(B.location+J,ne.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let J=0;J<B.locationSize;J++)m(B.location+J);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let J=0;J<B.locationSize;J++)y(B.location+J,oe/B.locationSize,G,ie,oe*K,oe/B.locationSize*J*K,ue)}}else if(k!==void 0){const ie=k[L];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(B.location,ie);break;case 3:s.vertexAttrib3fv(B.location,ie);break;case 4:s.vertexAttrib4fv(B.location,ie);break;default:s.vertexAttrib1fv(B.location,ie)}}}}M()}function A(){E();for(const b in n){const P=n[b];for(const N in P){const D=P[N];for(const z in D)h(D[z].object),delete D[z];delete P[N]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const N in P){const D=P[N];for(const z in D)h(D[z].object),delete D[z];delete P[N]}delete n[b.id]}function S(b){for(const P in n){const N=n[P];if(N[b.id]===void 0)continue;const D=N[b.id];for(const z in D)h(D[z].object),delete D[z];delete N[b.id]}}function E(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Jm(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==Bn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const E=S===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==xi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==qn&&!E)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:C}}function t0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new qi,a=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,y=M*4;let _=p.clippingState||null;l.value=_,_=h(g,d,y,f);for(let A=0;A!==y;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function n0(s){let e=new WeakMap;function t(o,a){return a===Ra?o.mapping=Ps:a===Pa&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ra||a===Pa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ff(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wo extends hu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,vc=[.125,.215,.35,.446,.526,.582],Zi=20,Zo=new wo,Mc=new le;let $o=null,Qo=0,Jo=0,ea=!1;const Yi=(1+Math.sqrt(5))/2,gs=1/Yi,yc=[new w(-Yi,gs,0),new w(Yi,gs,0),new w(-gs,0,Yi),new w(gs,0,Yi),new w(0,Yi,-gs),new w(0,Yi,gs),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$o=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($o,Qo,Jo),this._renderer.xr.enabled=ea,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:mi,format:Bn,colorSpace:Mn,depthBuffer:!1},i=bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i0(r)),this._blurMaterial=s0(r,e,t)}return i}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,n,i){const a=new bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mc),h.toneMapping=Ni,h.autoClear=!1;const f=new An({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new ot(new jt,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Mc),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Hr(i,M*y,p>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ps||e.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yc[(i-r-1)%yc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let M=0;for(let S=0;S<Zi;++S){const E=S/x,v=Math.exp(-E*E/2);p.push(v),S===0?M+=v:S<m&&(M+=2*v)}for(let S=0;S<p.length;S++)p[S]=p[S]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[i],A=3*_*(i>y-bs?i-y+bs:0),C=4*(this._cubeSize-_);Hr(t,A,C,3*_,2*_),l.setRenderTarget(t),l.render(u,Zo)}}function i0(s){const e=[],t=[],n=[];let i=s;const r=s-bs+1+vc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-bs?l=vc[o-s+bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let C=0;C<f;C++){const S=C%3*2/3-1,E=C>2?0:-1,v=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];M.set(v,x*g*C),y.set(d,m*g*C);const b=[C,C,C,C,C,C];_.set(b,p*g*C)}const A=new Pt;A.setAttribute("position",new vt(M,x)),A.setAttribute("uv",new vt(y,m)),A.setAttribute("faceIndex",new vt(_,p)),e.push(A),i>bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bc(s,e,t){const n=new Kn(s,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function s0(s,e,t){const n=new Float32Array(Zi),i=new w(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:El(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function wc(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ec(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function r0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ra||l===Pa,h=l===Ps||l===Is;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Sc(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Sc(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function o0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function a0(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let y=0,_=M.length;y<_;y+=3){const A=M[y+0],C=M[y+1],S=M[y+2];d.push(A,C,C,S,S,A)}}else if(g!==void 0){const M=g.array;x=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const A=y+0,C=y+1,S=y+2;d.push(A,C,C,S,S,A)}}else return;const m=new(nu(d)?lu:au)(d,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function l0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*x[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function c0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function h0(s,e,t){const n=new WeakMap,i=new Ft;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const S=new Float32Array(A*C*4*u),E=new su(S,A,C,u);E.type=qn,E.needsUpdate=!0;const v=_*4;for(let P=0;P<u;P++){const N=p[P],D=M[P],z=y[P],O=A*C*4*P;for(let k=0;k<N.count;k++){const L=k*v;g===!0&&(i.fromBufferAttribute(N,k),S[O+L+0]=i.x,S[O+L+1]=i.y,S[O+L+2]=i.z,S[O+L+3]=0),x===!0&&(i.fromBufferAttribute(D,k),S[O+L+4]=i.x,S[O+L+5]=i.y,S[O+L+6]=i.z,S[O+L+7]=0),m===!0&&(i.fromBufferAttribute(z,k),S[O+L+8]=i.x,S[O+L+9]=i.y,S[O+L+10]=i.z,S[O+L+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new ze(A,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function u0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class fu extends rn{constructor(e,t,n,i,r,o,a,l,c,h=Es){if(h!==Es&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Qi),n===void 0&&h===Ds&&(n=Ls),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pu=new rn,Ac=new fu(1,1),mu=new su,gu=new $d,_u=new uu,Tc=[],Cc=[],Rc=new Float32Array(16),Pc=new Float32Array(9),Ic=new Float32Array(4);function Vs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Tc[i];if(r===void 0&&(r=new Float32Array(i),Tc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Eo(s,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function d0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function f0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function p0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function m0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function g0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Ic.set(n),s.uniformMatrix2fv(this.addr,!1,Ic),an(t,n)}}function _0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Pc.set(n),s.uniformMatrix3fv(this.addr,!1,Pc),an(t,n)}}function x0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Rc.set(n),s.uniformMatrix4fv(this.addr,!1,Rc),an(t,n)}}function v0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function M0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function b0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function w0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function E0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function A0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function T0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ac.compareFunction=tu,r=Ac):r=pu,t.setTexture2D(e||r,i)}function C0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gu,i)}function R0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_u,i)}function P0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mu,i)}function I0(s){switch(s){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return x0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return y0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return w0;case 36295:return E0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return P0}}function L0(s,e){s.uniform1fv(this.addr,e)}function D0(s,e){const t=Vs(e,this.size,2);s.uniform2fv(this.addr,t)}function N0(s,e){const t=Vs(e,this.size,3);s.uniform3fv(this.addr,t)}function U0(s,e){const t=Vs(e,this.size,4);s.uniform4fv(this.addr,t)}function F0(s,e){const t=Vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function O0(s,e){const t=Vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function B0(s,e){const t=Vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function z0(s,e){s.uniform1iv(this.addr,e)}function k0(s,e){s.uniform2iv(this.addr,e)}function G0(s,e){s.uniform3iv(this.addr,e)}function V0(s,e){s.uniform4iv(this.addr,e)}function H0(s,e){s.uniform1uiv(this.addr,e)}function W0(s,e){s.uniform2uiv(this.addr,e)}function X0(s,e){s.uniform3uiv(this.addr,e)}function q0(s,e){s.uniform4uiv(this.addr,e)}function Y0(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||pu,r[o])}function K0(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||gu,r[o])}function j0(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_u,r[o])}function Z0(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||mu,r[o])}function $0(s){switch(s){case 5126:return L0;case 35664:return D0;case 35665:return N0;case 35666:return U0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return k0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return H0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return Z0}}class Q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I0(t.type)}}class J0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$0(t.type)}}class eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Lc(s,e){s.seq.push(e),s.map[e.id]=e}function tg(s,e,t){const n=s.name,i=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),o=ta.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lc(t,c===void 0?new Q0(a,s,e):new J0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new eg(a),Lc(t,u)),t=u}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);tg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Dc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ng=37297;let ig=0;function sg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Nc=new St;function rg(s){Ct._getMatrix(Nc,Ct.workingColorSpace,s);const e=`mat3( ${Nc.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case So:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Uc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+sg(s.getShaderSource(e),o)}else return i}function og(s,e){const t=rg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ag(s,e){let t;switch(e){case Oh:t="Linear";break;case Bh:t="Reinhard";break;case zh:t="Cineon";break;case ml:t="ACESFilmic";break;case kh:t="AgX";break;case Gh:t="Neutral";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new w;function lg(){Ct.getLuminanceCoefficients(Wr);const s=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function hg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ug(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function lr(s){return s!==""}function Fc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(s){return s.replace(dg,pg)}const fg=new Map;function pg(s,e){let t=wt[e];if(t===void 0){const n=fg.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(s){return s.replace(mg,gg)}function gg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zc(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function _g(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function xg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Is:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function Mg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case ud:e="ENVMAP_BLENDING_MIX";break;case dd:e="ENVMAP_BLENDING_ADD";break}return e}function yg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_g(t),c=xg(t),h=vg(t),u=Mg(t),d=yg(t),f=cg(t),g=hg(r),x=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?wt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,og("linearToOutputTexel",t.outputColorSpace),lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=rl(o),o=Fc(o,t),o=Oc(o,t),a=rl(a),a=Fc(a,t),a=Oc(a,t),o=Bc(o),a=Bc(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,_=M+p+a,A=Dc(i,i.VERTEX_SHADER,y),C=Dc(i,i.FRAGMENT_SHADER,_);i.attachShader(x,A),i.attachShader(x,C),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function S(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(x).trim(),D=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(C).trim();let O=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,C);else{const L=Uc(i,A,"vertex"),B=Uc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+L+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||z==="")&&(k=!1);k&&(P.diagnostics={runnable:O,programLog:N,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(A),i.deleteShader(C),E=new po(i,x),v=ug(i,x)}let E;this.getUniforms=function(){return E===void 0&&S(this),E};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,ng)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}let bg=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Eg(e),t.set(e,n)),n}}class Eg{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}}function Ag(s,e,t,n,i,r,o){const a=new ru,l=new wg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,P,N,D){const z=N.fog,O=D.geometry,k=v.isMeshStandardMaterial?N.environment:null,L=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),B=L&&L.mapping===yo?L.image.height:null,ne=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,oe=ie!==void 0?ie.length:0;let X=0;O.morphAttributes.position!==void 0&&(X=1),O.morphAttributes.normal!==void 0&&(X=2),O.morphAttributes.color!==void 0&&(X=3);let Pe,G,K,ue;if(ne){const Q=Qn[ne];Pe=Q.vertexShader,G=Q.fragmentShader}else Pe=v.vertexShader,G=v.fragmentShader,l.update(v),K=l.getVertexShaderID(v),ue=l.getFragmentShaderID(v);const J=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),ve=D.isInstancedMesh===!0,ge=D.isBatchedMesh===!0,Se=!!v.map,_e=!!v.matcap,De=!!L,V=!!v.aoMap,Et=!!v.lightMap,Xe=!!v.bumpMap,nt=!!v.normalMap,Ge=!!v.displacementMap,gt=!!v.emissiveMap,Ve=!!v.metalnessMap,I=!!v.roughnessMap,T=v.anisotropy>0,j=v.clearcoat>0,he=v.dispersion>0,de=v.iridescence>0,ae=v.sheen>0,Ne=v.transmission>0,Te=T&&!!v.anisotropyMap,Ue=j&&!!v.clearcoatMap,ft=j&&!!v.clearcoatNormalMap,se=j&&!!v.clearcoatRoughnessMap,be=de&&!!v.iridescenceMap,Ke=de&&!!v.iridescenceThicknessMap,je=ae&&!!v.sheenColorMap,Fe=ae&&!!v.sheenRoughnessMap,ut=!!v.specularMap,Qe=!!v.specularColorMap,bt=!!v.specularIntensityMap,W=Ne&&!!v.transmissionMap,Ie=Ne&&!!v.thicknessMap,re=!!v.gradientMap,ce=!!v.alphaMap,Re=v.alphaTest>0,Ce=!!v.alphaHash,$e=!!v.extensions;let It=Ni;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(It=s.toneMapping);const Wt={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:G,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ge,batchingColor:ge&&D._colorsTexture!==null,instancing:ve,instancingColor:ve&&D.instanceColor!==null,instancingMorph:ve&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Mn,alphaToCoverage:!!v.alphaToCoverage,map:Se,matcap:_e,envMap:De,envMapMode:De&&L.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:Et,bumpMap:Xe,normalMap:nt,displacementMap:d&&Ge,emissiveMap:gt,normalMapObjectSpace:nt&&v.normalMapType===vd,normalMapTangentSpace:nt&&v.normalMapType===eu,metalnessMap:Ve,roughnessMap:I,anisotropy:T,anisotropyMap:Te,clearcoat:j,clearcoatMap:Ue,clearcoatNormalMap:ft,clearcoatRoughnessMap:se,dispersion:he,iridescence:de,iridescenceMap:be,iridescenceThicknessMap:Ke,sheen:ae,sheenColorMap:je,sheenRoughnessMap:Fe,specularMap:ut,specularColorMap:Qe,specularIntensityMap:bt,transmission:Ne,transmissionMap:W,thicknessMap:Ie,gradientMap:re,opaque:v.transparent===!1&&v.blending===ws&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:Re,alphaHash:Ce,combine:v.combine,mapUv:Se&&x(v.map.channel),aoMapUv:V&&x(v.aoMap.channel),lightMapUv:Et&&x(v.lightMap.channel),bumpMapUv:Xe&&x(v.bumpMap.channel),normalMapUv:nt&&x(v.normalMap.channel),displacementMapUv:Ge&&x(v.displacementMap.channel),emissiveMapUv:gt&&x(v.emissiveMap.channel),metalnessMapUv:Ve&&x(v.metalnessMap.channel),roughnessMapUv:I&&x(v.roughnessMap.channel),anisotropyMapUv:Te&&x(v.anisotropyMap.channel),clearcoatMapUv:Ue&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:je&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&x(v.sheenRoughnessMap.channel),specularMapUv:ut&&x(v.specularMap.channel),specularColorMapUv:Qe&&x(v.specularColorMap.channel),specularIntensityMapUv:bt&&x(v.specularIntensityMap.channel),transmissionMapUv:W&&x(v.transmissionMap.channel),thicknessMapUv:Ie&&x(v.thicknessMap.channel),alphaMapUv:ce&&x(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(nt||T),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Se||ce),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:fe,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:X,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Se&&v.map.isVideoTexture===!0&&Ct.getTransfer(v.map.colorSpace)===kt,decodeVideoTextureEmissive:gt&&v.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(v.emissiveMap.colorSpace)===kt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qt,flipSided:v.side===vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:$e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&v.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(b,v),y(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function _(v){const b=g[v.type];let P;if(b){const N=Qn[b];P=xr.clone(N.uniforms)}else P=v.uniforms;return P}function A(v,b){let P;for(let N=0,D=h.length;N<D;N++){const z=h[N];if(z.cacheKey===b){P=z,++P.usedTimes;break}}return P===void 0&&(P=new Sg(s,b,v,r),h.push(P)),P}function C(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function S(v){l.remove(v)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:C,releaseShaderCache:S,programs:h,dispose:E}}function Tg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function kc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Cg),n.length>1&&n.sort(d||kc),i.length>1&&i.sort(d||kc)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Rg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Gc,s.set(n,[o])):i>=r.length?(o=new Gc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Pg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new le};break;case"SpotLight":t={position:new w,direction:new w,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Ig(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Lg=0;function Dg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ng(s){const e=new Pg,t=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,r=new tt,o=new tt;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,y=0,_=0,A=0,C=0,S=0;c.sort(Dg);for(let v=0,b=c.length;v<b;v++){const P=c[v],N=P.color,D=P.intensity,z=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*D,u+=N.g*D,d+=N.b*D;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],D);S++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,B=t.get(P);B.shadowIntensity=L.intensity,B.shadowBias=L.bias,B.shadowNormalBias=L.normalBias,B.shadowRadius=L.radius,B.shadowMapSize=L.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(D),k.distance=z,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;const L=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,L.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=L.matrix,P.castShadow){const B=t.get(P);B.shadowIntensity=L.intensity,B.shadowBias=L.bias,B.shadowNormalBias=L.normalBias,B.shadowRadius=L.radius,B.shadowMapSize=L.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=O,_++}x++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(N).multiplyScalar(D),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const L=P.shadow,B=t.get(P);B.shadowIntensity=L.intensity,B.shadowBias=L.bias,B.shadowNormalBias=L.normalBias,B.shadowRadius=L.radius,B.shadowMapSize=L.mapSize,B.shadowCameraNear=L.camera.near,B.shadowCameraFar=L.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(D),k.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==x||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==M||E.numPointShadows!==y||E.numSpotShadows!==_||E.numSpotMaps!==A||E.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,E.directionalLength=f,E.pointLength=g,E.spotLength=x,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=M,E.numPointShadows=y,E.numSpotShadows=_,E.numSpotMaps=A,E.numLightProbes=S,n.version=Lg++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Vc(s){const e=new Ng(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ug(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Vc(s),e.set(i,[a])):r>=o.length?(a=new Vc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Fg extends jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Og extends jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
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
}`;function kg(s,e,t){let n=new wl;const i=new ze,r=new ze,o=new Ft,a=new Fg({depthPacking:xd}),l=new Og,c={},h=t.maxTextureSize,u={[Jn]:vn,[vn]:Jn,[qt]:qt},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Bg,fragmentShader:zg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(C,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const v=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(pi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==ci&&this.type===ci,z=p===ci&&this.type!==ci;for(let O=0,k=C.length;O<k;O++){const L=C[O],B=L.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const ne=B.getFrameExtents();if(i.multiply(ne),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,B.mapSize.y=r.y)),B.map===null||D===!0||z===!0){const oe=this.type!==ci?{minFilter:En,magFilter:En}:{};B.map!==null&&B.map.dispose(),B.map=new Kn(i.x,i.y,oe),B.map.texture.name=L.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const ie=B.getViewportCount();for(let oe=0;oe<ie;oe++){const X=B.getViewport(oe);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),N.viewport(o),B.updateMatrices(L,oe),n=B.getFrustum(),_(S,E,B.camera,L,this.type)}B.isPointLightShadow!==!0&&this.type===ci&&M(B,E),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,b,P)};function M(C,S){const E=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Kn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(S,null,E,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(S,null,E,f,x,null)}function y(C,S,E,v){let b=null;const P=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)b=P;else if(b=E.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=b.uuid,D=S.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let O=z[D];O===void 0&&(O=b.clone(),z[D]=O,S.addEventListener("dispose",A)),b=O}if(b.visible=S.visible,b.wireframe=S.wireframe,v===ci?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=s.properties.get(b);N.light=E}return b}function _(C,S,E,v,b){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===ci)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const D=e.update(C),z=C.material;if(Array.isArray(z)){const O=D.groups;for(let k=0,L=O.length;k<L;k++){const B=O[k],ne=z[B.materialIndex];if(ne&&ne.visible){const ie=y(C,ne,v,b);C.onBeforeShadow(s,C,S,E,D,ie,B),s.renderBufferDirect(E,null,D,ie,C,B),C.onAfterShadow(s,C,S,E,D,ie,B)}}}else if(z.visible){const O=y(C,z,v,b);C.onBeforeShadow(s,C,S,E,D,O,null),s.renderBufferDirect(E,null,D,O,C,null),C.onAfterShadow(s,C,S,E,D,O,null)}}const N=C.children;for(let D=0,z=N.length;D<z;D++)_(N[D],S,E,v,b)}function A(C){C.target.removeEventListener("dispose",A);for(const E in c){const v=c[E],b=C.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const Gg={[Sa]:ba,[wa]:Ta,[Ea]:Ca,[Rs]:Aa,[ba]:Sa,[Ta]:wa,[Ca]:Ea,[Aa]:Rs};function Vg(s,e){function t(){let W=!1;const Ie=new Ft;let re=null;const ce=new Ft(0,0,0,0);return{setMask:function(Re){re!==Re&&!W&&(s.colorMask(Re,Re,Re,Re),re=Re)},setLocked:function(Re){W=Re},setClear:function(Re,Ce,$e,It,Wt){Wt===!0&&(Re*=It,Ce*=It,$e*=It),Ie.set(Re,Ce,$e,It),ce.equals(Ie)===!1&&(s.clearColor(Re,Ce,$e,It),ce.copy(Ie))},reset:function(){W=!1,re=null,ce.set(-1,0,0,0)}}}function n(){let W=!1,Ie=!1,re=null,ce=null,Re=null;return{setReversed:function(Ce){if(Ie!==Ce){const $e=e.get("EXT_clip_control");Ie?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const It=Re;Re=null,this.setClear(It)}Ie=Ce},getReversed:function(){return Ie},setTest:function(Ce){Ce?J(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(Ce){re!==Ce&&!W&&(s.depthMask(Ce),re=Ce)},setFunc:function(Ce){if(Ie&&(Ce=Gg[Ce]),ce!==Ce){switch(Ce){case Sa:s.depthFunc(s.NEVER);break;case ba:s.depthFunc(s.ALWAYS);break;case wa:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case Ea:s.depthFunc(s.EQUAL);break;case Aa:s.depthFunc(s.GEQUAL);break;case Ta:s.depthFunc(s.GREATER);break;case Ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ce}},setLocked:function(Ce){W=Ce},setClear:function(Ce){Re!==Ce&&(Ie&&(Ce=1-Ce),s.clearDepth(Ce),Re=Ce)},reset:function(){W=!1,re=null,ce=null,Re=null,Ie=!1}}}function i(){let W=!1,Ie=null,re=null,ce=null,Re=null,Ce=null,$e=null,It=null,Wt=null;return{setTest:function(Q){W||(Q?J(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(Q){Ie!==Q&&!W&&(s.stencilMask(Q),Ie=Q)},setFunc:function(Q,we,He){(re!==Q||ce!==we||Re!==He)&&(s.stencilFunc(Q,we,He),re=Q,ce=we,Re=He)},setOp:function(Q,we,He){(Ce!==Q||$e!==we||It!==He)&&(s.stencilOp(Q,we,He),Ce=Q,$e=we,It=He)},setLocked:function(Q){W=Q},setClear:function(Q){Wt!==Q&&(s.clearStencil(Q),Wt=Q)},reset:function(){W=!1,Ie=null,re=null,ce=null,Re=null,Ce=null,$e=null,It=null,Wt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,y=null,_=null,A=null,C=null,S=new le(0,0,0),E=0,v=!1,b=null,P=null,N=null,D=null,z=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,L=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=L>=1):B.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=L>=2);let ne=null,ie={};const oe=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),Pe=new Ft().fromArray(oe),G=new Ft().fromArray(X);function K(W,Ie,re,ce){const Re=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(W,Ce),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<re;$e++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Ie+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return Ce}const ue={};ue[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(Rs),Xe(!1),nt(Hl),J(s.CULL_FACE),V(pi);function J(W){h[W]!==!0&&(s.enable(W),h[W]=!0)}function fe(W){h[W]!==!1&&(s.disable(W),h[W]=!1)}function ve(W,Ie){return u[W]!==Ie?(s.bindFramebuffer(W,Ie),u[W]=Ie,W===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ie),W===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ge(W,Ie){let re=f,ce=!1;if(W){re=d.get(Ie),re===void 0&&(re=[],d.set(Ie,re));const Re=W.textures;if(re.length!==Re.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,$e=Re.length;Ce<$e;Ce++)re[Ce]=s.COLOR_ATTACHMENT0+Ce;re.length=Re.length,ce=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,ce=!0);ce&&s.drawBuffers(re)}function Se(W){return g!==W?(s.useProgram(W),g=W,!0):!1}const _e={[ji]:s.FUNC_ADD,[Ku]:s.FUNC_SUBTRACT,[ju]:s.FUNC_REVERSE_SUBTRACT};_e[Zu]=s.MIN,_e[$u]=s.MAX;const De={[Qu]:s.ZERO,[Ju]:s.ONE,[ed]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[od]:s.SRC_ALPHA_SATURATE,[sd]:s.DST_COLOR,[nd]:s.DST_ALPHA,[td]:s.ONE_MINUS_SRC_COLOR,[ya]:s.ONE_MINUS_SRC_ALPHA,[rd]:s.ONE_MINUS_DST_COLOR,[id]:s.ONE_MINUS_DST_ALPHA,[ad]:s.CONSTANT_COLOR,[ld]:s.ONE_MINUS_CONSTANT_COLOR,[cd]:s.CONSTANT_ALPHA,[hd]:s.ONE_MINUS_CONSTANT_ALPHA};function V(W,Ie,re,ce,Re,Ce,$e,It,Wt,Q){if(W===pi){x===!0&&(fe(s.BLEND),x=!1);return}if(x===!1&&(J(s.BLEND),x=!0),W!==Yu){if(W!==m||Q!==v){if((p!==ji||_!==ji)&&(s.blendEquation(s.FUNC_ADD),p=ji,_=ji),Q)switch(W){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fn:s.blendFunc(s.ONE,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}M=null,y=null,A=null,C=null,S.set(0,0,0),E=0,m=W,v=Q}return}Re=Re||Ie,Ce=Ce||re,$e=$e||ce,(Ie!==p||Re!==_)&&(s.blendEquationSeparate(_e[Ie],_e[Re]),p=Ie,_=Re),(re!==M||ce!==y||Ce!==A||$e!==C)&&(s.blendFuncSeparate(De[re],De[ce],De[Ce],De[$e]),M=re,y=ce,A=Ce,C=$e),(It.equals(S)===!1||Wt!==E)&&(s.blendColor(It.r,It.g,It.b,Wt),S.copy(It),E=Wt),m=W,v=!1}function Et(W,Ie){W.side===qt?fe(s.CULL_FACE):J(s.CULL_FACE);let re=W.side===vn;Ie&&(re=!re),Xe(re),W.blending===ws&&W.transparent===!1?V(pi):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const ce=W.stencilWrite;a.setTest(ce),ce&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(W){b!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),b=W)}function nt(W){W!==Wu?(J(s.CULL_FACE),W!==P&&(W===Hl?s.cullFace(s.BACK):W===Xu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),P=W}function Ge(W){W!==N&&(k&&s.lineWidth(W),N=W)}function gt(W,Ie,re){W?(J(s.POLYGON_OFFSET_FILL),(D!==Ie||z!==re)&&(s.polygonOffset(Ie,re),D=Ie,z=re)):fe(s.POLYGON_OFFSET_FILL)}function Ve(W){W?J(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function I(W){W===void 0&&(W=s.TEXTURE0+O-1),ne!==W&&(s.activeTexture(W),ne=W)}function T(W,Ie,re){re===void 0&&(ne===null?re=s.TEXTURE0+O-1:re=ne);let ce=ie[re];ce===void 0&&(ce={type:void 0,texture:void 0},ie[re]=ce),(ce.type!==W||ce.texture!==Ie)&&(ne!==re&&(s.activeTexture(re),ne=re),s.bindTexture(W,Ie||ue[W]),ce.type=W,ce.texture=Ie)}function j(){const W=ie[ne];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(W){Pe.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Pe.copy(W))}function Fe(W){G.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),G.copy(W))}function ut(W,Ie){let re=c.get(Ie);re===void 0&&(re=new WeakMap,c.set(Ie,re));let ce=re.get(W);ce===void 0&&(ce=s.getUniformBlockIndex(Ie,W.name),re.set(W,ce))}function Qe(W,Ie){const ce=c.get(Ie).get(W);l.get(Ie)!==ce&&(s.uniformBlockBinding(Ie,ce,W.__bindingPointIndex),l.set(Ie,ce))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ne=null,ie={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,y=null,_=null,A=null,C=null,S=new le(0,0,0),E=0,v=!1,b=null,P=null,N=null,D=null,z=null,Pe.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:fe,bindFramebuffer:ve,drawBuffers:ge,useProgram:Se,setBlending:V,setMaterial:Et,setFlipSided:Xe,setCullFace:nt,setLineWidth:Ge,setPolygonOffset:gt,setScissorTest:Ve,activeTexture:I,bindTexture:T,unbindTexture:j,compressedTexImage2D:he,compressedTexImage3D:de,texImage2D:be,texImage3D:Ke,updateUBOMapping:ut,uniformBlockBinding:Qe,texStorage2D:ft,texStorage3D:se,texSubImage2D:ae,texSubImage3D:Ne,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ue,scissor:je,viewport:Fe,reset:bt}}function Hc(s,e,t,n){const i=Hg(n);switch(t){case Yh:return s*e;case jh:return s*e;case Zh:return s*e*2;case vl:return s*e/i.components*i.byteLength;case Ml:return s*e/i.components*i.byteLength;case $h:return s*e*2/i.components*i.byteLength;case yl:return s*e*2/i.components*i.byteLength;case Kh:return s*e*3/i.components*i.byteLength;case Bn:return s*e*4/i.components*i.byteLength;case Sl:return s*e*4/i.components*i.byteLength;case lo:case co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ho:case uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case La:case Na:return Math.max(s,16)*Math.max(e,8)/4;case Ia:case Da:return Math.max(s,8)*Math.max(e,8)/2;case Ua:case Fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fo:case Qa:case Ja:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qh:case el:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hg(s){switch(s){case xi:case Wh:return{byteLength:1,components:1};case pr:case Xh:case mi:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case Qi:case gl:case qn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Wg(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return f?new OffscreenCanvas(I,T):_r("canvas")}function x(I,T,j){let he=1;const de=Ve(I);if((de.width>j||de.height>j)&&(he=j/Math.max(de.width,de.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ae=Math.floor(he*de.width),Ne=Math.floor(he*de.height);u===void 0&&(u=g(ae,Ne));const Te=T?g(ae,Ne):u;return Te.width=ae,Te.height=Ne,Te.getContext("2d").drawImage(I,0,0,ae,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ae+"x"+Ne+")."),Te}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,T,j,he,de=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=T;if(T===s.RED&&(j===s.FLOAT&&(ae=s.R32F),j===s.HALF_FLOAT&&(ae=s.R16F),j===s.UNSIGNED_BYTE&&(ae=s.R8)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.R8UI),j===s.UNSIGNED_SHORT&&(ae=s.R16UI),j===s.UNSIGNED_INT&&(ae=s.R32UI),j===s.BYTE&&(ae=s.R8I),j===s.SHORT&&(ae=s.R16I),j===s.INT&&(ae=s.R32I)),T===s.RG&&(j===s.FLOAT&&(ae=s.RG32F),j===s.HALF_FLOAT&&(ae=s.RG16F),j===s.UNSIGNED_BYTE&&(ae=s.RG8)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RG8UI),j===s.UNSIGNED_SHORT&&(ae=s.RG16UI),j===s.UNSIGNED_INT&&(ae=s.RG32UI),j===s.BYTE&&(ae=s.RG8I),j===s.SHORT&&(ae=s.RG16I),j===s.INT&&(ae=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),j===s.UNSIGNED_INT&&(ae=s.RGB32UI),j===s.BYTE&&(ae=s.RGB8I),j===s.SHORT&&(ae=s.RGB16I),j===s.INT&&(ae=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),j===s.UNSIGNED_INT&&(ae=s.RGBA32UI),j===s.BYTE&&(ae=s.RGBA8I),j===s.SHORT&&(ae=s.RGBA16I),j===s.INT&&(ae=s.RGBA32I)),T===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),T===s.RGBA){const Ne=de?So:Ct.getTransfer(he);j===s.FLOAT&&(ae=s.RGBA32F),j===s.HALF_FLOAT&&(ae=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ae=Ne===kt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function _(I,T){let j;return I?T===null||T===Qi||T===Ls?j=s.DEPTH24_STENCIL8:T===qn?j=s.DEPTH32F_STENCIL8:T===pr&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qi||T===Ls?j=s.DEPTH_COMPONENT24:T===qn?j=s.DEPTH_COMPONENT32F:T===pr&&(j=s.DEPTH_COMPONENT16),j}function A(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==En&&I.minFilter!==Ln?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function C(I){const T=I.target;T.removeEventListener("dispose",C),E(T),T.isVideoTexture&&h.delete(T)}function S(I){const T=I.target;T.removeEventListener("dispose",S),b(T)}function E(I){const T=n.get(I);if(T.__webglInit===void 0)return;const j=I.source,he=d.get(j);if(he){const de=he[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&v(I),Object.keys(he).length===0&&d.delete(j)}n.remove(I)}function v(I){const T=n.get(I);s.deleteTexture(T.__webglTexture);const j=I.source,he=d.get(j);delete he[T.__cacheKey],o.memory.textures--}function b(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let de=0;de<T.__webglFramebuffer[he].length;de++)s.deleteFramebuffer(T.__webglFramebuffer[he][de]);else s.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)s.deleteFramebuffer(T.__webglFramebuffer[he]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=I.textures;for(let he=0,de=j.length;he<de;he++){const ae=n.get(j[he]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(j[he])}n.remove(I)}let P=0;function N(){P=0}function D(){const I=P;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function z(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function O(I,T){const j=n.get(I);if(I.isVideoTexture&&Ge(I),I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){const he=I.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(j,I,T);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function k(I,T){const j=n.get(I);if(I.version>0&&j.__version!==I.version){G(j,I,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function L(I,T){const j=n.get(I);if(I.version>0&&j.__version!==I.version){G(j,I,T);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function B(I,T){const j=n.get(I);if(I.version>0&&j.__version!==I.version){K(j,I,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}const ne={[Ui]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[go]:s.MIRRORED_REPEAT},ie={[En]:s.NEAREST,[Hh]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[ao]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},oe={[Md]:s.NEVER,[Ad]:s.ALWAYS,[yd]:s.LESS,[tu]:s.LEQUAL,[Sd]:s.EQUAL,[Ed]:s.GEQUAL,[bd]:s.GREATER,[wd]:s.NOTEQUAL};function X(I,T){if(T.type===qn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ln||T.magFilter===ao||T.magFilter===or||T.magFilter===di||T.minFilter===Ln||T.minFilter===ao||T.minFilter===or||T.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ne[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ne[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ne[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ie[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===En||T.minFilter!==or&&T.minFilter!==di||T.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Pe(I,T){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",C));const he=T.source;let de=d.get(he);de===void 0&&(de={},d.set(he,de));const ae=z(T);if(ae!==I.__cacheKey){de[ae]===void 0&&(de[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),de[ae].usedTimes++;const Ne=de[I.__cacheKey];Ne!==void 0&&(de[I.__cacheKey].usedTimes--,Ne.usedTimes===0&&v(T)),I.__cacheKey=ae,I.__webglTexture=de[ae].texture}return j}function G(I,T,j){let he=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=s.TEXTURE_3D);const de=Pe(I,T),ae=T.source;t.bindTexture(he,I.__webglTexture,s.TEXTURE0+j);const Ne=n.get(ae);if(ae.version!==Ne.__version||de===!0){t.activeTexture(s.TEXTURE0+j);const Te=Ct.getPrimaries(Ct.workingColorSpace),Ue=T.colorSpace===Ii?null:Ct.getPrimaries(T.colorSpace),ft=T.colorSpace===Ii||Te===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let se=x(T.image,!1,i.maxTextureSize);se=gt(T,se);const be=r.convert(T.format,T.colorSpace),Ke=r.convert(T.type);let je=y(T.internalFormat,be,Ke,T.colorSpace,T.isVideoTexture);X(he,T);let Fe;const ut=T.mipmaps,Qe=T.isVideoTexture!==!0,bt=Ne.__version===void 0||de===!0,W=ae.dataReady,Ie=A(T,se);if(T.isDepthTexture)je=_(T.format===Ds,T.type),bt&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,je,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,je,se.width,se.height,0,be,Ke,null));else if(T.isDataTexture)if(ut.length>0){Qe&&bt&&t.texStorage2D(s.TEXTURE_2D,Ie,je,ut[0].width,ut[0].height);for(let re=0,ce=ut.length;re<ce;re++)Fe=ut[re],Qe?W&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Fe.width,Fe.height,be,Ke,Fe.data):t.texImage2D(s.TEXTURE_2D,re,je,Fe.width,Fe.height,0,be,Ke,Fe.data);T.generateMipmaps=!1}else Qe?(bt&&t.texStorage2D(s.TEXTURE_2D,Ie,je,se.width,se.height),W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,be,Ke,se.data)):t.texImage2D(s.TEXTURE_2D,0,je,se.width,se.height,0,be,Ke,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Qe&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,je,ut[0].width,ut[0].height,se.depth);for(let re=0,ce=ut.length;re<ce;re++)if(Fe=ut[re],T.format!==Bn)if(be!==null)if(Qe){if(W)if(T.layerUpdates.size>0){const Re=Hc(Fe.width,Fe.height,T.format,T.type);for(const Ce of T.layerUpdates){const $e=Fe.data.subarray(Ce*Re/Fe.data.BYTES_PER_ELEMENT,(Ce+1)*Re/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Ce,Fe.width,Fe.height,1,be,$e)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,se.depth,be,Fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,je,Fe.width,Fe.height,se.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,se.depth,be,Ke,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,je,Fe.width,Fe.height,se.depth,0,be,Ke,Fe.data)}else{Qe&&bt&&t.texStorage2D(s.TEXTURE_2D,Ie,je,ut[0].width,ut[0].height);for(let re=0,ce=ut.length;re<ce;re++)Fe=ut[re],T.format!==Bn?be!==null?Qe?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Fe.width,Fe.height,be,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,re,je,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?W&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Fe.width,Fe.height,be,Ke,Fe.data):t.texImage2D(s.TEXTURE_2D,re,je,Fe.width,Fe.height,0,be,Ke,Fe.data)}else if(T.isDataArrayTexture)if(Qe){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,je,se.width,se.height,se.depth),W)if(T.layerUpdates.size>0){const re=Hc(se.width,se.height,T.format,T.type);for(const ce of T.layerUpdates){const Re=se.data.subarray(ce*re/se.data.BYTES_PER_ELEMENT,(ce+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,se.width,se.height,1,be,Ke,Re)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Ke,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,je,se.width,se.height,se.depth,0,be,Ke,se.data);else if(T.isData3DTexture)Qe?(bt&&t.texStorage3D(s.TEXTURE_3D,Ie,je,se.width,se.height,se.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Ke,se.data)):t.texImage3D(s.TEXTURE_3D,0,je,se.width,se.height,se.depth,0,be,Ke,se.data);else if(T.isFramebufferTexture){if(bt)if(Qe)t.texStorage2D(s.TEXTURE_2D,Ie,je,se.width,se.height);else{let re=se.width,ce=se.height;for(let Re=0;Re<Ie;Re++)t.texImage2D(s.TEXTURE_2D,Re,je,re,ce,0,be,Ke,null),re>>=1,ce>>=1}}else if(ut.length>0){if(Qe&&bt){const re=Ve(ut[0]);t.texStorage2D(s.TEXTURE_2D,Ie,je,re.width,re.height)}for(let re=0,ce=ut.length;re<ce;re++)Fe=ut[re],Qe?W&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,be,Ke,Fe):t.texImage2D(s.TEXTURE_2D,re,je,be,Ke,Fe);T.generateMipmaps=!1}else if(Qe){if(bt){const re=Ve(se);t.texStorage2D(s.TEXTURE_2D,Ie,je,re.width,re.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Ke,se)}else t.texImage2D(s.TEXTURE_2D,0,je,be,Ke,se);m(T)&&p(he),Ne.__version=ae.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function K(I,T,j){if(T.image.length!==6)return;const he=Pe(I,T),de=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+j);const ae=n.get(de);if(de.version!==ae.__version||he===!0){t.activeTexture(s.TEXTURE0+j);const Ne=Ct.getPrimaries(Ct.workingColorSpace),Te=T.colorSpace===Ii?null:Ct.getPrimaries(T.colorSpace),Ue=T.colorSpace===Ii||Ne===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,be=[];for(let ce=0;ce<6;ce++)!ft&&!se?be[ce]=x(T.image[ce],!0,i.maxCubemapSize):be[ce]=se?T.image[ce].image:T.image[ce],be[ce]=gt(T,be[ce]);const Ke=be[0],je=r.convert(T.format,T.colorSpace),Fe=r.convert(T.type),ut=y(T.internalFormat,je,Fe,T.colorSpace),Qe=T.isVideoTexture!==!0,bt=ae.__version===void 0||he===!0,W=de.dataReady;let Ie=A(T,Ke);X(s.TEXTURE_CUBE_MAP,T);let re;if(ft){Qe&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ut,Ke.width,Ke.height);for(let ce=0;ce<6;ce++){re=be[ce].mipmaps;for(let Re=0;Re<re.length;Re++){const Ce=re[Re];T.format!==Bn?je!==null?Qe?W&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,Ce.width,Ce.height,je,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,ut,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,Ce.width,Ce.height,je,Fe,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,ut,Ce.width,Ce.height,0,je,Fe,Ce.data)}}}else{if(re=T.mipmaps,Qe&&bt){re.length>0&&Ie++;const ce=Ve(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ut,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(se){Qe?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,be[ce].width,be[ce].height,je,Fe,be[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ut,be[ce].width,be[ce].height,0,je,Fe,be[ce].data);for(let Re=0;Re<re.length;Re++){const $e=re[Re].image[ce].image;Qe?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,$e.width,$e.height,je,Fe,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,ut,$e.width,$e.height,0,je,Fe,$e.data)}}else{Qe?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,je,Fe,be[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ut,je,Fe,be[ce]);for(let Re=0;Re<re.length;Re++){const Ce=re[Re];Qe?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,je,Fe,Ce.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,ut,je,Fe,Ce.image[ce])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),ae.__version=de.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ue(I,T,j,he,de,ae){const Ne=r.convert(j.format,j.colorSpace),Te=r.convert(j.type),Ue=y(j.internalFormat,Ne,Te,j.colorSpace),ft=n.get(T),se=n.get(j);if(se.__renderTarget=T,!ft.__hasExternalTextures){const be=Math.max(1,T.width>>ae),Ke=Math.max(1,T.height>>ae);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,ae,Ue,be,Ke,T.depth,0,Ne,Te,null):t.texImage2D(de,ae,Ue,be,Ke,0,Ne,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),nt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,de,se.__webglTexture,0,Xe(T)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,de,se.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(I,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const he=T.depthTexture,de=he&&he.isDepthTexture?he.type:null,ae=_(T.stencilBuffer,de),Ne=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=Xe(T);nt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ae,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ae,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ae,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,I)}else{const he=T.textures;for(let de=0;de<he.length;de++){const ae=he[de],Ne=r.convert(ae.format,ae.colorSpace),Te=r.convert(ae.type),Ue=y(ae.internalFormat,Ne,Te,ae.colorSpace),ft=Xe(T);j&&nt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ue,T.width,T.height):nt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(T.depthTexture);he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const de=he.__webglTexture,ae=Xe(T);if(T.depthTexture.format===Es)nt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(T.depthTexture.format===Ds)nt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ve(I){const T=n.get(I),j=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",de)};he.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=he}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,I)}else if(j){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=s.createRenderbuffer(),J(T.__webglDepthbuffer[he],I,!1);else{const de=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),J(T.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,de)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(I,T,j){const he=n.get(I);T!==void 0&&ue(he.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ve(I)}function Se(I){const T=I.texture,j=n.get(I),he=n.get(T);I.addEventListener("dispose",S);const de=I.textures,ae=I.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,o.memory.textures++),ae){j.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Te]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)j.__webglFramebuffer[Te][Ue]=s.createFramebuffer()}else j.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Te=0;Te<T.mipmaps.length;Te++)j.__webglFramebuffer[Te]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let Te=0,Ue=de.length;Te<Ue;Te++){const ft=n.get(de[Te]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&nt(I)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Te=0;Te<de.length;Te++){const Ue=de[Te];j.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Te]);const ft=r.convert(Ue.format,Ue.colorSpace),se=r.convert(Ue.type),be=y(Ue.internalFormat,ft,se,Ue.colorSpace,I.isXRRenderTarget===!0),Ke=Xe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,be,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,j.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),J(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),X(s.TEXTURE_CUBE_MAP,T);for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ue(j.__webglFramebuffer[Te][Ue],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ue);else ue(j.__webglFramebuffer[Te],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Te=0,Ue=de.length;Te<Ue;Te++){const ft=de[Te],se=n.get(ft);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),X(s.TEXTURE_2D,ft),ue(j.__webglFramebuffer,I,ft,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,0),m(ft)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),X(Te,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ue(j.__webglFramebuffer[Ue],I,T,s.COLOR_ATTACHMENT0,Te,Ue);else ue(j.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,Te,0);m(T)&&p(Te),t.unbindTexture()}I.depthBuffer&&ve(I)}function _e(I){const T=I.textures;for(let j=0,he=T.length;j<he;j++){const de=T[j];if(m(de)){const ae=M(I),Ne=n.get(de).__webglTexture;t.bindTexture(ae,Ne),p(ae),t.unbindTexture()}}}const De=[],V=[];function Et(I){if(I.samples>0){if(nt(I)===!1){const T=I.textures,j=I.width,he=I.height;let de=s.COLOR_BUFFER_BIT;const ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=n.get(I),Te=T.length>1;if(Te)for(let Ue=0;Ue<T.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ue]);const ft=n.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,j,he,0,0,j,he,de,s.NEAREST),l===!0&&(De.length=0,V.length=0,De.push(s.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(De.push(ae),V.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let Ue=0;Ue<T.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ue]);const ft=n.get(T[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Xe(I){return Math.min(i.maxSamples,I.samples)}function nt(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ge(I){const T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function gt(I,T){const j=I.colorSpace,he=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Mn&&j!==Ii&&(Ct.getTransfer(j)===kt?(he!==Bn||de!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=L,this.setTextureCube=B,this.rebindTextures=ge,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=nt}function Xg(s,e){function t(n,i=Ii){let r;const o=Ct.getTransfer(i);if(n===xi)return s.UNSIGNED_BYTE;if(n===_l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return s.BYTE;if(n===Xh)return s.SHORT;if(n===pr)return s.UNSIGNED_SHORT;if(n===gl)return s.INT;if(n===Qi)return s.UNSIGNED_INT;if(n===qn)return s.FLOAT;if(n===mi)return s.HALF_FLOAT;if(n===Yh)return s.ALPHA;if(n===Kh)return s.RGB;if(n===Bn)return s.RGBA;if(n===jh)return s.LUMINANCE;if(n===Zh)return s.LUMINANCE_ALPHA;if(n===Es)return s.DEPTH_COMPONENT;if(n===Ds)return s.DEPTH_STENCIL;if(n===vl)return s.RED;if(n===Ml)return s.RED_INTEGER;if(n===$h)return s.RG;if(n===yl)return s.RG_INTEGER;if(n===Sl)return s.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(o===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===La||n===Da||n===Na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Fa)return o===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===za||n===ka||n===Ga||n===Va||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===ja||n===Za||n===$a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===Qa||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return o===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class qg extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yg={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jg=`
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

}`;class Zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new rn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tn({vertexShader:Kg,fragmentShader:jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends Gs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new Zg,m=t.getContextAttributes();let p=null,M=null;const y=[],_=[],A=new ze;let C=null;const S=new bn;S.viewport=new Ft;const E=new bn;E.viewport=new Ft;const v=[S,E],b=new qg;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=y[G];return K===void 0&&(K=new na,y[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=y[G];return K===void 0&&(K=new na,y[G]=K),K.getGripSpace()},this.getHand=function(G){let K=y[G];return K===void 0&&(K=new na,y[G]=K),K.getHandSpace()};function D(G){const K=_.indexOf(G.inputSource);if(K===-1)return;const ue=y[K];ue!==void 0&&(ue.update(G.inputSource,G.frame,c||o),ue.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",O);for(let G=0;G<y.length;G++){const K=_[G];K!==null&&(_[G]=null,y[G].disconnect(K))}P=null,N=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Kn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ue=null,J=null;m.depth&&(J=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Ds:Es,ue=m.stencil?Ls:Qi);const fe={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Kn(d.textureWidth,d.textureHeight,{format:Bn,type:xi,depthTexture:new fu(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(G){for(let K=0;K<G.removed.length;K++){const ue=G.removed[K],J=_.indexOf(ue);J>=0&&(_[J]=null,y[J].disconnect(ue))}for(let K=0;K<G.added.length;K++){const ue=G.added[K];let J=_.indexOf(ue);if(J===-1){for(let ve=0;ve<y.length;ve++)if(ve>=_.length){_.push(ue),J=ve;break}else if(_[ve]===null){_[ve]=ue,J=ve;break}if(J===-1)break}const fe=y[J];fe&&fe.connect(ue)}}const k=new w,L=new w;function B(G,K,ue){k.setFromMatrixPosition(K.matrixWorld),L.setFromMatrixPosition(ue.matrixWorld);const J=k.distanceTo(L),fe=K.projectionMatrix.elements,ve=ue.projectionMatrix.elements,ge=fe[14]/(fe[10]-1),Se=fe[14]/(fe[10]+1),_e=(fe[9]+1)/fe[5],De=(fe[9]-1)/fe[5],V=(fe[8]-1)/fe[0],Et=(ve[8]+1)/ve[0],Xe=ge*V,nt=ge*Et,Ge=J/(-V+Et),gt=Ge*-V;if(K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(gt),G.translateZ(Ge),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),fe[10]===-1)G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ve=ge+Ge,I=Se+Ge,T=Xe-gt,j=nt+(J-gt),he=_e*Se/I*Ve,de=De*Se/I*Ve;G.projectionMatrix.makePerspective(T,j,he,de,Ve,I),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ne(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let K=G.near,ue=G.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),b.near=E.near=S.near=K,b.far=E.far=S.far=ue,(P!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,N=b.far),S.layers.mask=G.layers.mask|2,E.layers.mask=G.layers.mask|4,b.layers.mask=S.layers.mask|E.layers.mask;const J=G.parent,fe=b.cameras;ne(b,J);for(let ve=0;ve<fe.length;ve++)ne(fe[ve],J);fe.length===2?B(b,S,E):b.projectionMatrix.copy(S.projectionMatrix),ie(G,b,J)};function ie(G,K,ue){ue===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ue.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ns*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let oe=null;function X(G,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let J=!1;ue.length!==b.cameras.length&&(b.cameras.length=0,J=!0);for(let ve=0;ve<ue.length;ve++){const ge=ue[ve];let Se=null;if(f!==null)Se=f.getViewport(ge);else{const De=u.getViewSubImage(d,ge);Se=De.viewport,ve===0&&(e.setRenderTargetTextures(M,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(M))}let _e=v[ve];_e===void 0&&(_e=new bn,_e.layers.enable(ve),_e.viewport=new Ft,v[ve]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Se.x,Se.y,Se.width,Se.height),ve===0&&(b.matrix.copy(_e.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),J===!0&&b.cameras.push(_e)}const fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const ve=u.getDepthInformation(ue[0]);ve&&ve.isValid&&ve.texture&&x.init(e,ve,i.renderState)}}for(let ue=0;ue<y.length;ue++){const J=_[ue],fe=y[ue];J!==null&&fe!==void 0&&fe.update(J,K,c||o)}oe&&oe(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Pe=new du;Pe.setAnimationLoop(X),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const Wi=new zn,Qg=new tt;function Jg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,_=M.envMapRotation;y&&(m.envMap.value=y,Wi.copy(_),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(Wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const _=y.program;n.uniformBlockBinding(M,_)}function c(M,y){let _=i[M.id];_===void 0&&(g(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(M,A);const C=e.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function h(M){const y=u();M.__bindingPointIndex=y;const _=s.createBuffer(),A=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=i[M.id],_=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let C=0,S=_.length;C<S;C++){const E=Array.isArray(_[C])?_[C]:[_[C]];for(let v=0,b=E.length;v<b;v++){const P=E[v];if(f(P,C,v,A)===!0){const N=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let O=0;O<D.length;O++){const k=D[O],L=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,N+z,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,z),z+=L.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,_,A){const C=M.value,S=y+"_"+_;if(A[S]===void 0)return typeof C=="number"||typeof C=="boolean"?A[S]=C:A[S]=C.clone(),!0;{const E=A[S];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return A[S]=C,!0}else if(E.equals(C)===!1)return E.copy(C),!0}return!1}function g(M){const y=M.uniforms;let _=0;const A=16;for(let S=0,E=y.length;S<E;S++){const v=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,P=v.length;b<P;b++){const N=v[b],D=Array.isArray(N.value)?N.value:[N.value];for(let z=0,O=D.length;z<O;z++){const k=D[z],L=x(k),B=_%A,ne=B%L.boundary,ie=B+ne;_+=ne,ie!==0&&A-ie<L.storage&&(_+=A-ie),N.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=L.storage}}}const C=_%A;return C>0&&(_+=A-C),M.__size=_,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class t_{constructor(e={}){const{canvas:t=Hd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Ni,this.toneMappingExposure=1;const _=this;let A=!1,C=0,S=0,E=null,v=-1,b=null;const P=new Ft,N=new Ft;let D=null;const z=new le(0);let O=0,k=t.width,L=t.height,B=1,ne=null,ie=null;const oe=new Ft(0,0,k,L),X=new Ft(0,0,k,L);let Pe=!1;const G=new wl;let K=!1,ue=!1;const J=new tt,fe=new tt,ve=new w,ge=new Ft,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function De(){return E===null?B:1}let V=n;function Et(R,H){return t.getContext(R,H)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),V===null){const H="webgl2";if(V=Et(H,R),V===null)throw Et(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xe,nt,Ge,gt,Ve,I,T,j,he,de,ae,Ne,Te,Ue,ft,se,be,Ke,je,Fe,ut,Qe,bt,W;function Ie(){Xe=new o0(V),Xe.init(),Qe=new Xg(V,Xe),nt=new e0(V,Xe,e,Qe),Ge=new Vg(V,Xe),nt.reverseDepthBuffer&&d&&Ge.buffers.depth.setReversed(!0),gt=new c0(V),Ve=new Tg,I=new Wg(V,Xe,Ge,Ve,nt,Qe,gt),T=new n0(_),j=new r0(_),he=new gf(V),bt=new Qm(V,he),de=new a0(V,he,gt,bt),ae=new u0(V,de,he,gt),je=new h0(V,nt,I),se=new t0(Ve),Ne=new Ag(_,T,j,Xe,nt,bt,se),Te=new Jg(_,Ve),Ue=new Rg,ft=new Ug(Xe),Ke=new $m(_,T,j,Ge,ae,f,l),be=new kg(_,ae,nt),W=new e_(V,gt,nt,Ge),Fe=new Jm(V,Xe,gt),ut=new l0(V,Xe,gt),gt.programs=Ne.programs,_.capabilities=nt,_.extensions=Xe,_.properties=Ve,_.renderLists=Ue,_.shadowMap=be,_.state=Ge,_.info=gt}Ie();const re=new $g(_,V);this.xr=re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(k,L,!1))},this.getSize=function(R){return R.set(k,L)},this.setSize=function(R,H,te=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,L=H,t.width=Math.floor(R*B),t.height=Math.floor(H*B),te===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(k*B,L*B).floor()},this.setDrawingBufferSize=function(R,H,te){k=R,L=H,B=te,t.width=Math.floor(R*te),t.height=Math.floor(H*te),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,H,te,ee){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,H,te,ee),Ge.viewport(P.copy(oe).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,H,te,ee){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,H,te,ee),Ge.scissor(N.copy(X).multiplyScalar(B).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){Ge.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,H=!0,te=!0){let ee=0;if(R){let q=!1;if(E!==null){const xe=E.texture.format;q=xe===Sl||xe===yl||xe===Ml}if(q){const xe=E.texture.type,ke=xe===xi||xe===Qi||xe===pr||xe===Ls||xe===_l||xe===xl,Ye=Ke.getClearColor(),qe=Ke.getClearAlpha(),pt=Ye.r,F=Ye.g,Y=Ye.b;ke?(g[0]=pt,g[1]=F,g[2]=Y,g[3]=qe,V.clearBufferuiv(V.COLOR,0,g)):(x[0]=pt,x[1]=F,x[2]=Y,x[3]=qe,V.clearBufferiv(V.COLOR,0,x))}else ee|=V.COLOR_BUFFER_BIT}H&&(ee|=V.DEPTH_BUFFER_BIT),te&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ue.dispose(),ft.dispose(),Ve.dispose(),T.dispose(),j.dispose(),ae.dispose(),bt.dispose(),W.dispose(),Ne.dispose(),re.dispose(),re.removeEventListener("sessionstart",dt),re.removeEventListener("sessionend",et),it.stop()};function ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=gt.autoReset,H=be.enabled,te=be.autoUpdate,ee=be.needsUpdate,q=be.type;Ie(),gt.autoReset=R,be.enabled=H,be.autoUpdate=te,be.needsUpdate=ee,be.type=q}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $e(R){const H=R.target;H.removeEventListener("dispose",$e),It(H)}function It(R){Wt(R),Ve.remove(R)}function Wt(R){const H=Ve.get(R).programs;H!==void 0&&(H.forEach(function(te){Ne.releaseProgram(te)}),R.isShaderMaterial&&Ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,te,ee,q,xe){H===null&&(H=Se);const ke=q.isMesh&&q.matrixWorld.determinant()<0,Ye=_t(R,H,te,ee,q);Ge.setMaterial(ee,ke);let qe=te.index,pt=1;if(ee.wireframe===!0){if(qe=de.getWireframeAttribute(te),qe===void 0)return;pt=2}const F=te.drawRange,Y=te.attributes.position;let pe=F.start*pt,Le=(F.start+F.count)*pt;xe!==null&&(pe=Math.max(pe,xe.start*pt),Le=Math.min(Le,(xe.start+xe.count)*pt)),qe!==null?(pe=Math.max(pe,0),Le=Math.min(Le,qe.count)):Y!=null&&(pe=Math.max(pe,0),Le=Math.min(Le,Y.count));const me=Le-pe;if(me<0||me===1/0)return;bt.setup(q,ee,Ye,te,qe);let Ze,Ee=Fe;if(qe!==null&&(Ze=he.get(qe),Ee=ut,Ee.setIndex(Ze)),q.isMesh)ee.wireframe===!0?(Ge.setLineWidth(ee.wireframeLinewidth*De()),Ee.setMode(V.LINES)):Ee.setMode(V.TRIANGLES);else if(q.isLine){let Ae=ee.linewidth;Ae===void 0&&(Ae=1),Ge.setLineWidth(Ae*De()),q.isLineSegments?Ee.setMode(V.LINES):q.isLineLoop?Ee.setMode(V.LINE_LOOP):Ee.setMode(V.LINE_STRIP)}else q.isPoints?Ee.setMode(V.POINTS):q.isSprite&&Ee.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ee.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Ee.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ae=q._multiDrawStarts,mt=q._multiDrawCounts,st=q._multiDrawCount,ye=qe?he.get(qe).bytesPerElement:1,$=Ve.get(ee).currentProgram.getUniforms();for(let We=0;We<st;We++)$.setValue(V,"_gl_DrawID",We),Ee.render(Ae[We]/ye,mt[We])}else if(q.isInstancedMesh)Ee.renderInstances(pe,me,q.count);else if(te.isInstancedBufferGeometry){const Ae=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,mt=Math.min(te.instanceCount,Ae);Ee.renderInstances(pe,me,mt)}else Ee.render(pe,me)};function Q(R,H,te){R.transparent===!0&&R.side===qt&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,yt(R,H,te),R.side=Jn,R.needsUpdate=!0,yt(R,H,te),R.side=qt):yt(R,H,te)}this.compile=function(R,H,te=null){te===null&&(te=R),p=ft.get(te),p.init(H),y.push(p),te.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==te&&R.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ee=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const xe=q.material;if(xe)if(Array.isArray(xe))for(let ke=0;ke<xe.length;ke++){const Ye=xe[ke];Q(Ye,te,q),ee.add(Ye)}else Q(xe,te,q),ee.add(xe)}),y.pop(),p=null,ee},this.compileAsync=function(R,H,te=null){const ee=this.compile(R,H,te);return new Promise(q=>{function xe(){if(ee.forEach(function(ke){Ve.get(ke).currentProgram.isReady()&&ee.delete(ke)}),ee.size===0){q(R);return}setTimeout(xe,10)}Xe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let we=null;function He(R){we&&we(R)}function dt(){it.stop()}function et(){it.start()}const it=new du;it.setAnimationLoop(He),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(R){we=R,re.setAnimationLoop(R),R===null?it.stop():it.start()},re.addEventListener("sessionstart",dt),re.addEventListener("sessionend",et),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(H),H=re.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,H,E),p=ft.get(R,y.length),p.init(H),y.push(p),fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),G.setFromProjectionMatrix(fe),ue=this.localClippingEnabled,K=se.init(this.clippingPlanes,ue),m=Ue.get(R,M.length),m.init(),M.push(m),re.enabled===!0&&re.isPresenting===!0){const xe=_.xr.getDepthSensingMesh();xe!==null&&rt(xe,H,-1/0,_.sortObjects)}rt(R,H,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ne,ie),_e=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,_e&&Ke.addToRenderList(m,R),this.info.render.frame++,K===!0&&se.beginShadows();const te=p.state.shadowsArray;be.render(te,R,H),K===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,q=m.transmissive;if(p.setupLights(),H.isArrayCamera){const xe=H.cameras;if(q.length>0)for(let ke=0,Ye=xe.length;ke<Ye;ke++){const qe=xe[ke];Zt(ee,q,R,qe)}_e&&Ke.render(R);for(let ke=0,Ye=xe.length;ke<Ye;ke++){const qe=xe[ke];At(m,R,qe,qe.viewport)}}else q.length>0&&Zt(ee,q,R,H),_e&&Ke.render(R),At(m,R,H);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(_,R,H),bt.resetDefaultState(),v=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],K===!0&&se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function rt(R,H,te,ee){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){ee&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const ke=ae.update(R),Ye=R.material;Ye.visible&&m.push(R,ke,Ye,te,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){const ke=ae.update(R),Ye=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ge.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ge.copy(ke.boundingSphere.center)),ge.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(Ye)){const qe=ke.groups;for(let pt=0,F=qe.length;pt<F;pt++){const Y=qe[pt],pe=Ye[Y.materialIndex];pe&&pe.visible&&m.push(R,ke,pe,te,ge.z,Y)}}else Ye.visible&&m.push(R,ke,Ye,te,ge.z,null)}}const xe=R.children;for(let ke=0,Ye=xe.length;ke<Ye;ke++)rt(xe[ke],H,te,ee)}function At(R,H,te,ee){const q=R.opaque,xe=R.transmissive,ke=R.transparent;p.setupLightsView(te),K===!0&&se.setGlobalState(_.clippingPlanes,te),ee&&Ge.viewport(P.copy(ee)),q.length>0&&Yt(q,H,te),xe.length>0&&Yt(xe,H,te),ke.length>0&&Yt(ke,H,te),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Zt(R,H,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Kn(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?mi:xi,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const xe=p.state.transmissionRenderTarget[ee.id],ke=ee.viewport||P;xe.setSize(ke.z,ke.w);const Ye=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(z),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),_e&&Ke.render(te);const qe=_.toneMapping;_.toneMapping=Ni;const pt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),K===!0&&se.setGlobalState(_.clippingPlanes,ee),Yt(R,te,ee),I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let F=!1;for(let Y=0,pe=H.length;Y<pe;Y++){const Le=H[Y],me=Le.object,Ze=Le.geometry,Ee=Le.material,Ae=Le.group;if(Ee.side===qt&&me.layers.test(ee.layers)){const mt=Ee.side;Ee.side=vn,Ee.needsUpdate=!0,Qt(me,te,ee,Ze,Ee,Ae),Ee.side=mt,Ee.needsUpdate=!0,F=!0}}F===!0&&(I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe))}_.setRenderTarget(Ye),_.setClearColor(z,O),pt!==void 0&&(ee.viewport=pt),_.toneMapping=qe}function Yt(R,H,te){const ee=H.isScene===!0?H.overrideMaterial:null;for(let q=0,xe=R.length;q<xe;q++){const ke=R[q],Ye=ke.object,qe=ke.geometry,pt=ee===null?ke.material:ee,F=ke.group;Ye.layers.test(te.layers)&&Qt(Ye,H,te,qe,pt,F)}}function Qt(R,H,te,ee,q,xe){R.onBeforeRender(_,H,te,ee,q,xe),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(_,H,te,ee,R,xe),q.transparent===!0&&q.side===qt&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,_.renderBufferDirect(te,H,ee,q,R,xe),q.side=Jn,q.needsUpdate=!0,_.renderBufferDirect(te,H,ee,q,R,xe),q.side=qt):_.renderBufferDirect(te,H,ee,q,R,xe),R.onAfterRender(_,H,te,ee,q,xe)}function yt(R,H,te){H.isScene!==!0&&(H=Se);const ee=Ve.get(R),q=p.state.lights,xe=p.state.shadowsArray,ke=q.state.version,Ye=Ne.getParameters(R,q.state,xe,H,te),qe=Ne.getProgramCacheKey(Ye);let pt=ee.programs;ee.environment=R.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(R.isMeshStandardMaterial?j:T).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,pt===void 0&&(R.addEventListener("dispose",$e),pt=new Map,ee.programs=pt);let F=pt.get(qe);if(F!==void 0){if(ee.currentProgram===F&&ee.lightsStateVersion===ke)return Mt(R,Ye),F}else Ye.uniforms=Ne.getUniforms(R),R.onBeforeCompile(Ye,_),F=Ne.acquireProgram(Ye,qe),pt.set(qe,F),ee.uniforms=Ye.uniforms;const Y=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Y.clippingPlanes=se.uniform),Mt(R,Ye),ee.needsLights=xt(R),ee.lightsStateVersion=ke,ee.needsLights&&(Y.ambientLightColor.value=q.state.ambient,Y.lightProbe.value=q.state.probe,Y.directionalLights.value=q.state.directional,Y.directionalLightShadows.value=q.state.directionalShadow,Y.spotLights.value=q.state.spot,Y.spotLightShadows.value=q.state.spotShadow,Y.rectAreaLights.value=q.state.rectArea,Y.ltc_1.value=q.state.rectAreaLTC1,Y.ltc_2.value=q.state.rectAreaLTC2,Y.pointLights.value=q.state.point,Y.pointLightShadows.value=q.state.pointShadow,Y.hemisphereLights.value=q.state.hemi,Y.directionalShadowMap.value=q.state.directionalShadowMap,Y.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Y.spotShadowMap.value=q.state.spotShadowMap,Y.spotLightMatrix.value=q.state.spotLightMatrix,Y.spotLightMap.value=q.state.spotLightMap,Y.pointShadowMap.value=q.state.pointShadowMap,Y.pointShadowMatrix.value=q.state.pointShadowMatrix),ee.currentProgram=F,ee.uniformsList=null,F}function Xt(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=po.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Mt(R,H){const te=Ve.get(R);te.outputColorSpace=H.outputColorSpace,te.batching=H.batching,te.batchingColor=H.batchingColor,te.instancing=H.instancing,te.instancingColor=H.instancingColor,te.instancingMorph=H.instancingMorph,te.skinning=H.skinning,te.morphTargets=H.morphTargets,te.morphNormals=H.morphNormals,te.morphColors=H.morphColors,te.morphTargetsCount=H.morphTargetsCount,te.numClippingPlanes=H.numClippingPlanes,te.numIntersection=H.numClipIntersection,te.vertexAlphas=H.vertexAlphas,te.vertexTangents=H.vertexTangents,te.toneMapping=H.toneMapping}function _t(R,H,te,ee,q){H.isScene!==!0&&(H=Se),I.resetTextureUnits();const xe=H.fog,ke=ee.isMeshStandardMaterial?H.environment:null,Ye=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Mn,qe=(ee.isMeshStandardMaterial?j:T).get(ee.envMap||ke),pt=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,F=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Y=!!te.morphAttributes.position,pe=!!te.morphAttributes.normal,Le=!!te.morphAttributes.color;let me=Ni;ee.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(me=_.toneMapping);const Ze=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ee=Ze!==void 0?Ze.length:0,Ae=Ve.get(ee),mt=p.state.lights;if(K===!0&&(ue===!0||R!==b)){const Tt=R===b&&ee.id===v;se.setState(ee,R,Tt)}let st=!1;ee.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==mt.state.version||Ae.outputColorSpace!==Ye||q.isBatchedMesh&&Ae.batching===!1||!q.isBatchedMesh&&Ae.batching===!0||q.isBatchedMesh&&Ae.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ae.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ae.instancing===!1||!q.isInstancedMesh&&Ae.instancing===!0||q.isSkinnedMesh&&Ae.skinning===!1||!q.isSkinnedMesh&&Ae.skinning===!0||q.isInstancedMesh&&Ae.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ae.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ae.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ae.instancingMorph===!1&&q.morphTexture!==null||Ae.envMap!==qe||ee.fog===!0&&Ae.fog!==xe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==pt||Ae.vertexTangents!==F||Ae.morphTargets!==Y||Ae.morphNormals!==pe||Ae.morphColors!==Le||Ae.toneMapping!==me||Ae.morphTargetsCount!==Ee)&&(st=!0):(st=!0,Ae.__version=ee.version);let ye=Ae.currentProgram;st===!0&&(ye=yt(ee,H,q));let $=!1,We=!1,at=!1;const Je=ye.getUniforms(),Ot=Ae.uniforms;if(Ge.useProgram(ye.program)&&($=!0,We=!0,at=!0),ee.id!==v&&(v=ee.id,We=!0),$||b!==R){Ge.buffers.depth.getReversed()?(J.copy(R.projectionMatrix),Xd(J),qd(J),Je.setValue(V,"projectionMatrix",J)):Je.setValue(V,"projectionMatrix",R.projectionMatrix),Je.setValue(V,"viewMatrix",R.matrixWorldInverse);const gn=Je.map.cameraPosition;gn!==void 0&&gn.setValue(V,ve.setFromMatrixPosition(R.matrixWorld)),nt.logarithmicDepthBuffer&&Je.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Je.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,We=!0,at=!0)}if(q.isSkinnedMesh){Je.setOptional(V,q,"bindMatrix"),Je.setOptional(V,q,"bindMatrixInverse");const Tt=q.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Je.setValue(V,"boneTexture",Tt.boneTexture,I))}q.isBatchedMesh&&(Je.setOptional(V,q,"batchingTexture"),Je.setValue(V,"batchingTexture",q._matricesTexture,I),Je.setOptional(V,q,"batchingIdTexture"),Je.setValue(V,"batchingIdTexture",q._indirectTexture,I),Je.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&Je.setValue(V,"batchingColorTexture",q._colorsTexture,I));const ln=te.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&je.update(q,te,ye),(We||Ae.receiveShadow!==q.receiveShadow)&&(Ae.receiveShadow=q.receiveShadow,Je.setValue(V,"receiveShadow",q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ot.envMap.value=qe,Ot.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(Ot.envMapIntensity.value=H.environmentIntensity),We&&(Je.setValue(V,"toneMappingExposure",_.toneMappingExposure),Ae.needsLights&&$t(Ot,at),xe&&ee.fog===!0&&Te.refreshFogUniforms(Ot,xe),Te.refreshMaterialUniforms(Ot,ee,B,L,p.state.transmissionRenderTarget[R.id]),po.upload(V,Xt(Ae),Ot,I)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(po.upload(V,Xt(Ae),Ot,I),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Je.setValue(V,"center",q.center),Je.setValue(V,"modelViewMatrix",q.modelViewMatrix),Je.setValue(V,"normalMatrix",q.normalMatrix),Je.setValue(V,"modelMatrix",q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Tt=ee.uniformsGroups;for(let gn=0,cn=Tt.length;gn<cn;gn++){const kn=Tt[gn];W.update(kn,ye),W.bind(kn,ye)}}return ye}function $t(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function xt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,H,te){Ve.get(R.texture).__webglTexture=H,Ve.get(R.depthTexture).__webglTexture=te;const ee=Ve.get(R);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=te===void 0,ee.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){const te=Ve.get(R);te.__webglFramebuffer=H,te.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,te=0){E=R,C=H,S=te;let ee=!0,q=null,xe=!1,ke=!1;if(R){const qe=Ve.get(R);if(qe.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(V.FRAMEBUFFER,null),ee=!1;else if(qe.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(qe.__hasExternalTextures)I.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Y=R.depthTexture;if(qe.__boundDepthTexture!==Y){if(Y!==null&&Ve.has(Y)&&(R.width!==Y.image.width||R.height!==Y.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const pt=R.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(ke=!0);const F=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(F[H])?q=F[H][te]:q=F[H],xe=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?q=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(F)?q=F[te]:q=F,P.copy(R.viewport),N.copy(R.scissor),D=R.scissorTest}else P.copy(oe).multiplyScalar(B).floor(),N.copy(X).multiplyScalar(B).floor(),D=Pe;if(Ge.bindFramebuffer(V.FRAMEBUFFER,q)&&ee&&Ge.drawBuffers(R,q),Ge.viewport(P),Ge.scissor(N),Ge.setScissorTest(D),xe){const qe=Ve.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,qe.__webglTexture,te)}else if(ke){const qe=Ve.get(R.texture),pt=H||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.__webglTexture,te||0,pt)}v=-1},this.readRenderTargetPixels=function(R,H,te,ee,q,xe,ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){Ge.bindFramebuffer(V.FRAMEBUFFER,Ye);try{const qe=R.texture,pt=qe.format,F=qe.type;if(!nt.textureFormatReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(F)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-ee&&te>=0&&te<=R.height-q&&V.readPixels(H,te,ee,q,Qe.convert(pt),Qe.convert(F),xe)}finally{const qe=E!==null?Ve.get(E).__webglFramebuffer:null;Ge.bindFramebuffer(V.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,H,te,ee,q,xe,ke){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){const qe=R.texture,pt=qe.format,F=qe.type;if(!nt.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(F))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-ee&&te>=0&&te<=R.height-q){Ge.bindFramebuffer(V.FRAMEBUFFER,Ye);const Y=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Y),V.bufferData(V.PIXEL_PACK_BUFFER,xe.byteLength,V.STREAM_READ),V.readPixels(H,te,ee,q,Qe.convert(pt),Qe.convert(F),0);const pe=E!==null?Ve.get(E).__webglFramebuffer:null;Ge.bindFramebuffer(V.FRAMEBUFFER,pe);const Le=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Wd(V,Le,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Y),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,xe),V.deleteBuffer(Y),V.deleteSync(Le),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,te=0){R.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);const ee=Math.pow(2,-te),q=Math.floor(R.image.width*ee),xe=Math.floor(R.image.height*ee),ke=H!==null?H.x:0,Ye=H!==null?H.y:0;I.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,te,0,0,ke,Ye,q,xe),Ge.unbindTexture()},this.copyTextureToTexture=function(R,H,te=null,ee=null,q=0){R.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,R=arguments[1],H=arguments[2],q=arguments[3]||0,te=null);let xe,ke,Ye,qe,pt,F,Y,pe,Le;const me=R.isCompressedTexture?R.mipmaps[q]:R.image;te!==null?(xe=te.max.x-te.min.x,ke=te.max.y-te.min.y,Ye=te.isBox3?te.max.z-te.min.z:1,qe=te.min.x,pt=te.min.y,F=te.isBox3?te.min.z:0):(xe=me.width,ke=me.height,Ye=me.depth||1,qe=0,pt=0,F=0),ee!==null?(Y=ee.x,pe=ee.y,Le=ee.z):(Y=0,pe=0,Le=0);const Ze=Qe.convert(H.format),Ee=Qe.convert(H.type);let Ae;H.isData3DTexture?(I.setTexture3D(H,0),Ae=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),Ae=V.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),Ae=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);const mt=V.getParameter(V.UNPACK_ROW_LENGTH),st=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ye=V.getParameter(V.UNPACK_SKIP_PIXELS),$=V.getParameter(V.UNPACK_SKIP_ROWS),We=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,me.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,me.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,pt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,F);const at=R.isDataArrayTexture||R.isData3DTexture,Je=H.isDataArrayTexture||H.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Ot=Ve.get(R),ln=Ve.get(H),Tt=Ve.get(Ot.__renderTarget),gn=Ve.get(ln.__renderTarget);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,Tt.__webglFramebuffer),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let cn=0;cn<Ye;cn++)at&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,q,F+cn),R.isDepthTexture?(Je&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(H).__webglTexture,q,Le+cn),V.blitFramebuffer(qe,pt,xe,ke,Y,pe,xe,ke,V.DEPTH_BUFFER_BIT,V.NEAREST)):Je?V.copyTexSubImage3D(Ae,q,Y,pe,Le+cn,qe,pt,xe,ke):V.copyTexSubImage2D(Ae,q,Y,pe,Le+cn,qe,pt,xe,ke);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Je?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ae,q,Y,pe,Le,xe,ke,Ye,Ze,Ee,me.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(Ae,q,Y,pe,Le,xe,ke,Ye,Ze,me.data):V.texSubImage3D(Ae,q,Y,pe,Le,xe,ke,Ye,Ze,Ee,me):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,q,Y,pe,xe,ke,Ze,Ee,me.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,q,Y,pe,me.width,me.height,Ze,me.data):V.texSubImage2D(V.TEXTURE_2D,q,Y,pe,xe,ke,Ze,Ee,me);V.pixelStorei(V.UNPACK_ROW_LENGTH,mt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,st),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ye),V.pixelStorei(V.UNPACK_SKIP_ROWS,$),V.pixelStorei(V.UNPACK_SKIP_IMAGES,We),q===0&&H.generateMipmaps&&V.generateMipmap(Ae),Ge.unbindTexture()},this.copyTextureToTexture3D=function(R,H,te=null,ee=null,q=0){return R.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ee=arguments[1]||null,R=arguments[2],H=arguments[3],q=arguments[4]||0),ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,H,te,ee,q)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){C=0,S=0,E=null,Ge.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}class Al{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(e),this.density=t}clone(){return new Al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class n_ extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new w;class vr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vu extends jn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const Zs=new w,xs=new w,vs=new w,Ms=new ze,$s=new ze,Mu=new tt,Xr=new w,Qs=new w,qr=new w,Wc=new ze,ia=new ze,Xc=new ze;class i_ extends Dt{constructor(e=new vu){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xu(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new vr(n,3,0,!1)),_s.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=_s,this.material=e,this.center=new ze(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Mu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Yr(Xr.set(-.5,-.5,0),vs,o,xs,i,r),Yr(Qs.set(.5,-.5,0),vs,o,xs,i,r),Yr(qr.set(.5,.5,0),vs,o,xs,i,r),Wc.set(0,0),ia.set(1,0),Xc.set(1,1);let a=e.ray.intersectTriangle(Xr,Qs,qr,!1,Zs);if(a===null&&(Yr(Qs.set(-.5,.5,0),vs,o,xs,i,r),ia.set(0,1),a=e.ray.intersectTriangle(Xr,qr,Qs,!1,Zs),a===null))return;const l=e.ray.origin.distanceTo(Zs);l<e.near||l>e.far||t.push({distance:l,point:Zs.clone(),uv:On.getInterpolation(Zs,Xr,Qs,qr,Wc,ia,Xc,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Yr(s,e,t,n,i,r){Ms.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?($s.x=r*Ms.x-i*Ms.y,$s.y=i*Ms.x+r*Ms.y):$s.copy(Ms),s.copy(e),s.x+=$s.x,s.y+=$s.y,s.applyMatrix4(Mu)}const qc=new w,Yc=new Ft,Kc=new Ft,s_=new w,jc=new tt,Kr=new w,sa=new ei,Zc=new tt,ra=new bo;class r_ extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ql,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingBox.expandByPoint(Kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingSphere.expandByPoint(Kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(i),e.ray.intersectsSphere(sa)!==!1&&(Zc.copy(i).invert(),ra.copy(e.ray).applyMatrix4(Zc),!(this.boundingBox!==null&&ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ra)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ql?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Yc.fromBufferAttribute(i.attributes.skinIndex,e),Kc.fromBufferAttribute(i.attributes.skinWeight,e),qc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Kc.getComponent(r);if(o!==0){const a=Yc.getComponent(r);jc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(s_.copy(qc).applyMatrix4(jc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yu extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Su extends rn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=En,h=En,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new tt,o_=new tt;class Tl{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:o_;$c.multiplyMatrices(a,t[r]),$c.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Tl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Su(t,e,e,Bn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new yu),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ol extends vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new tt,Qc=new tt,jr=[],Jc=new Mi,a_=new tt,Js=new ot,er=new ei;class ct extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,a_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),Jc.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(Jc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),er.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ys),Qc.multiplyMatrices(n,ys),Js.matrixWorld=Qc,Js.raycast(e,jr);for(let o=0,a=jr.length;o<a;o++){const l=jr[o];l.instanceId=r,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Su(new Float32Array(i*this.count),i,this.count,vl,qn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cl extends jn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xo=new w,vo=new w,eh=new tt,tr=new bo,Zr=new ei,oa=new w,th=new w;class Rl extends Dt{constructor(e=new Pt,t=new Cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xo.fromBufferAttribute(t,i-1),vo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xo.distanceTo(vo);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;eh.copy(i).invert(),tr.copy(e.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),M=h.getX(x+1),y=$r(this,e,tr,l,p,M);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=$r(this,e,tr,l,x,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=$r(this,e,tr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=$r(this,e,tr,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $r(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(xo.fromBufferAttribute(o,i),vo.fromBufferAttribute(o,r),t.distanceSqToSegment(xo,vo,oa,th)>n)return;oa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(oa);if(!(l<e.near||l>e.far))return{distance:l,point:th.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const nh=new w,ih=new w;class bu extends Rl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l_ extends Rl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wn extends jn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sh=new tt,al=new bo,Qr=new ei,Jr=new w;class Tn extends Dt{constructor(e=new Pt,t=new wn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;sh.copy(i).invert(),al.copy(e.ray).applyMatrix4(sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);Jr.fromBufferAttribute(u,m),rh(Jr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Jr.fromBufferAttribute(u,g),rh(Jr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rh(s,e,t,n,i,r,o){const a=al.distanceSqToPoint(s);if(a<t){const l=new w;al.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class mn extends rn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ze:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],o=[],a=new w,l=new tt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(dn(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(dn(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wu extends yi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ze){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c_ extends wu{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const eo=new w,aa=new Pl,la=new Pl,ca=new Pl;class Cn extends yi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(eo.subVectors(i[0],i[1]).add(i[0]),c=eo);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(eo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),aa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),la.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),la.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(aa.calc(l),la.calc(l),ca.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function oh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function h_(s,e){const t=1-s;return t*t*e}function u_(s,e){return 2*(1-s)*s*e}function d_(s,e){return s*s*e}function ur(s,e,t,n){return h_(s,e)+u_(s,t)+d_(s,n)}function f_(s,e){const t=1-s;return t*t*t*e}function p_(s,e){const t=1-s;return 3*t*t*s*e}function m_(s,e){return 3*(1-s)*s*s*e}function g_(s,e){return s*s*s*e}function dr(s,e,t,n,i){return f_(s,e)+p_(s,t)+m_(s,n)+g_(s,i)}class __ extends yi{constructor(e=new ze,t=new ze,n=new ze,i=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ze){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,i.x,r.x,o.x,a.x),dr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class x_ extends yi{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,i.x,r.x,o.x,a.x),dr(e,i.y,r.y,o.y,a.y),dr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v_ extends yi{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends yi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y_ extends yi{constructor(e=new ze,t=new ze,n=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ze){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,i.x,r.x,o.x),ur(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eu extends yi{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,i.x,r.x,o.x),ur(e,i.y,r.y,o.y),ur(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(oh(a,l.x,c.x,h.x,u.x),oh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ze().fromArray(i))}return this}}var b_=Object.freeze({__proto__:null,ArcCurve:c_,CatmullRomCurve3:Cn,CubicBezierCurve:__,CubicBezierCurve3:x_,EllipseCurve:wu,LineCurve:v_,LineCurve3:M_,QuadraticBezierCurve:y_,QuadraticBezierCurve3:Eu,SplineCurve:S_});class Il extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new w,h=new ze;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kt extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function M(){const _=new w,A=new w;let C=0;const S=(t-e)/n;for(let E=0;E<=r;E++){const v=[],b=E/r,P=b*(t-e)+e;for(let N=0;N<=i;N++){const D=N/i,z=D*l+a,O=Math.sin(z),k=Math.cos(z);A.x=P*O,A.y=-b*n+m,A.z=P*k,u.push(A.x,A.y,A.z),_.set(O,S,k).normalize(),d.push(_.x,_.y,_.z),f.push(D,1-b),v.push(g++)}x.push(v)}for(let E=0;E<i;E++)for(let v=0;v<r;v++){const b=x[v][E],P=x[v+1][E],N=x[v+1][E+1],D=x[v][E+1];(e>0||v!==0)&&(h.push(b,P,D),C+=3),(t>0||v!==r-1)&&(h.push(P,N,D),C+=3)}c.addGroup(p,C,0),p+=C}function y(_){const A=g,C=new ze,S=new w;let E=0;const v=_===!0?e:t,b=_===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const z=N/i*l+a,O=Math.cos(z),k=Math.sin(z);S.x=v*k,S.y=m*b,S.z=v*O,u.push(S.x,S.y,S.z),d.push(0,b,0),C.x=O*.5+.5,C.y=k*.5*b+.5,f.push(C.x,C.y),g++}for(let N=0;N<i;N++){const D=A+N,z=P+N;_===!0?h.push(z,z+1,D):h.push(z+1,z,D),E+=3}c.addGroup(p,E,_===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pn extends Kt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new w,_=new w,A=new w;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],_),f(t[C+2],A),l(y,_,A,M)}function l(M,y,_,A){const C=A+1,S=[];for(let E=0;E<=C;E++){S[E]=[];const v=M.clone().lerp(_,E/C),b=y.clone().lerp(_,E/C),P=C-E;for(let N=0;N<=P;N++)N===0&&E===C?S[E][N]=v:S[E][N]=v.clone().lerp(b,N/P)}for(let E=0;E<C;E++)for(let v=0;v<2*(C-E)-1;v++){const b=Math.floor(v/2);v%2===0?(d(S[E][b+1]),d(S[E+1][b]),d(S[E][b])):(d(S[E][b+1]),d(S[E+1][b+1]),d(S[E+1][b]))}}function c(M){const y=new w;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const M=new w;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const _=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(_,1-A)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const y=o[M+0],_=o[M+2],A=o[M+4],C=Math.max(y,_,A),S=Math.min(y,_,A);C>.9&&S<.1&&(y<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const _=M*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const M=new w,y=new w,_=new w,A=new w,C=new ze,S=new ze,E=new ze;for(let v=0,b=0;v<r.length;v+=9,b+=6){M.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),C.set(o[b+0],o[b+1]),S.set(o[b+2],o[b+3]),E.set(o[b+4],o[b+5]),A.copy(M).add(y).add(_).divideScalar(3);const P=m(A);x(C,b+0,M,P),x(S,b+2,y,P),x(E,b+4,_,P)}}function x(M,y,_,A){A<0&&M.x===1&&(o[y]=M.x-1),_.x===0&&_.z===0&&(o[y]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.vertices,e.indices,e.radius,e.details)}}class Fs extends Ao{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fs(e.radius,e.detail)}}class Ll extends Ao{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ll(e.radius,e.detail)}}class nn extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new w,d=new w,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const C=A/t;u.x=-e*Math.cos(i+C*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+C*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+_,1-y),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const y=h[p][M+1],_=h[p][M],A=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&f.push(y,_,C),(p!==n-1||l<Math.PI)&&f.push(_,A,C)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dn extends Pt{constructor(e=new Eu(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,c=new ze;let h=new w;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),M(),p()}function m(y){h=e.getPointAt(y/t,h);const _=o.normals[y],A=o.binormals[y];for(let C=0;C<=i;C++){const S=C/i*Math.PI*2,E=Math.sin(S),v=-Math.cos(S);l.x=v*_.x+E*A.x,l.y=v*_.y+E*A.y,l.z=v*_.z+E*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=i;_++){const A=(i+1)*(y-1)+(_-1),C=(i+1)*y+(_-1),S=(i+1)*y+_,E=(i+1)*(y-1)+_;g.push(A,C,E),g.push(C,S,E)}}function M(){for(let y=0;y<=t;y++)for(let _=0;_<=i;_++)c.x=y/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Dn(new b_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class w_ extends tn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Oe extends jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ti extends Oe{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function to(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function E_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function A_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ah(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Au(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class yr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class T_ extends yr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:r=e,a=2*t-n;break;case jl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kl:o=e,l=2*n-t;break;case jl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+M*o[c+A]+y*o[l+A]+_*o[u+A];return r}}class C_ extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class R_ extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ni{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new R_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new C_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new T_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case gr:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&E_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ro,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=gr;class Hs extends ni{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=mr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Tu extends ni{}Tu.prototype.ValueTypeName="color";class Os extends ni{}Os.prototype.ValueTypeName="number";class P_ extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)ht.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Bs extends ni{InterpolantFactoryMethodLinear(e){return new P_(this.times,this.values,this.getValueSize(),e)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends ni{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=mr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends ni{}zs.prototype.ValueTypeName="vector";class I_{constructor(e="",t=-1,n=[],i=md){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(D_(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ni.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=A_(l);l=ah(l,1,h),c=ah(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Os(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];Au(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new Os(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(zs,f+".position",d,"pos",i),n(Bs,f+".quaternion",d,"rot",i),n(zs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function L_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Os;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return Tu;case"quaternion":return Bs;case"bool":case"boolean":return Hs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function D_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=L_(s.type);if(s.times===void 0){const t=[],n=[];Au(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class N_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const U_=new N_;class ts{constructor(e){this.manager=e!==void 0?e:U_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ts.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class F_ extends Error{constructor(e,t){super(e),this.response=t}}class Mo extends ts{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:i});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=li[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let C=0,S=h.length;C<S;C++){const E=h[C];E.onProgress&&E.onProgress(A)}p.enqueue(_),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new F_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Di.add(e,c);const h=li[e];delete li[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=li[e];if(h===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class O_ extends ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=_r("img");function l(){h(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class B_ extends ts{constructor(e){super(e)}load(e,t,n,i){const r=new rn,o=new O_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Sr extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class z_ extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ha=new tt,lh=new w,ch=new w;class Dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(lh),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k_ extends Dl{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class G_ extends Sr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new k_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hh=new tt,nr=new w,ua=new w;class V_ extends Dl{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),ua.copy(n.position),ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh)}}class mo extends Sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class H_ extends Dl{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cu extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class W_ extends Sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class X_ extends ts{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,l),r.manager.itemStart(e)}}class Ru{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=uh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uh(){return performance.now()}const Nl="\\[\\]\\.:\\/",q_=new RegExp("["+Nl+"]","g"),Ul="[^"+Nl+"]",Y_="[^"+Nl.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",Ul),j_=/(WCOD+)?/.source.replace("WCOD",Y_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),$_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),Q_=new RegExp("^"+K_+j_+Z_+$_+"$"),J_=["material","materials","bones","map"];class ex{constructor(e,t,n){const i=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Vt{constructor(e,t,n){this.path=t,this.parsedPath=n||Vt.parseTrackName(t),this.node=Vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Vt.Composite(e,t,n):new Vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(e){const t=Q_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);J_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=ex;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);const Pu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tx=new wo(-1,1,1,-1,0,1);class nx extends Pt{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}}const ix=new nx;class Fl{constructor(e){this._mesh=new ot(ix,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class sx extends Xs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xr.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dh extends Xs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class rx extends Xs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ox{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ze);this._width=n.width,this._height=n.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sx(Pu),this.copyPass.material.blending=pi,this.clock=new Ru}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}dh!==void 0&&(o instanceof dh?n=!0:o instanceof rx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ax extends Xs{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const lx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ks extends Xs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ze(e.x,e.y):new ze(256,256),this.clearColor=new le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(r,o,{type:mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Kn(r,o,{type:mi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Kn(r,o,{type:mi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=lx;this.highPassUniforms=xr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ze(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Pu;this.copyUniforms=xr.clone(h.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new le,this.oldClearAlpha=1,this.basic=new An,this.fsQuad=new Fl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ze(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new tn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ze(.5,.5)},direction:{value:new ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new tn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ks.BlurDirectionX=new ze(1,0);ks.BlurDirectionY=new ze(0,1);const cx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class hx extends Xs{constructor(){super();const e=cx;this.uniforms=xr.clone(e.uniforms),this.material=new w_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Fl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Iu(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new mn(s);return n.needsUpdate=!0,n}function ux(s=8500,e=14e3){const t=new Ht;t.name="Procedural_Starfield";const n=new Float32Array(s*3),i=new Float32Array(s*3),r=[new le(10205439),new le(13293823),new le(16316415),new le(16774378),new le(16765601),new le(16754795)];for(let p=0;p<s;p++){const M=Math.random(),y=Math.random(),_=M*2*Math.PI;let A=Math.acos(2*y-1);Math.random()<.35&&(A=Math.PI*.5+(Math.random()-.5)*.32);const C=e*(.55+.45*Math.random()),S=Math.sin(A);n[p*3]=C*S*Math.cos(_),n[p*3+1]=C*Math.cos(A),n[p*3+2]=C*S*Math.sin(_);const E=r[Math.floor(Math.random()*r.length)],v=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=E.r*v,i[p*3+1]=E.g*v,i[p*3+2]=E.b*v}const o=new Pt;o.setAttribute("position",new vt(n,3)),o.setAttribute("color",new vt(i,3));const a=Iu(),l=e/14e3,c=new wn({size:28*l,map:a,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:fn,sizeAttenuation:!0}),h=new Tn(o,c);t.add(h);const u=500,d=new Float32Array(u*3),f=new Float32Array(u*3);for(let p=0;p<u;p++){const M=Math.random()*2*Math.PI,y=Math.acos(2*Math.random()-1),_=e*.72;d[p*3]=_*Math.sin(y)*Math.cos(M),d[p*3+1]=_*Math.cos(y),d[p*3+2]=_*Math.sin(y)*Math.sin(M);const A=r[p%r.length];f[p*3]=A.r,f[p*3+1]=A.g,f[p*3+2]=A.b}const g=new Pt;g.setAttribute("position",new vt(d,3)),g.setAttribute("color",new vt(f,3));const x=new wn({size:56*l,map:a,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:fn});t.add(new Tn(g,x)),t.renderOrder=-80,h.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const M=Z.clamp(p,0,1);c.opacity=.92*M,x.opacity=.95*M,t.visible=M>.015},t}class dx{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let r=0;r<t;r++)n[r*3]=(Math.random()-.5)*28,n[r*3+1]=(Math.random()-.5)*18,n[r*3+2]=-Math.random()*55;this.geometry=new Pt,this.geometry.setAttribute("position",new vt(n,3)),this.material=new wn({color:new le(16758892),size:.42,map:Iu(),transparent:!0,opacity:0,depthWrite:!1,blending:fn}),this.points=new Tn(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let r=0;r<this.streakCount;r++){const o=Math.random()*Math.PI*2,a=3.5+Math.random()*22,l=Math.cos(o)*a,c=Math.sin(o)*a*.72,h=-8-Math.random()*95,u=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:h,len:u}),i[r*6]=l,i[r*6+1]=c,i[r*6+2]=h,i[r*6+3]=l,i[r*6+4]=c,i[r*6+5]=h-u}this.streakGeometry=new Pt,this.streakGeometry.setAttribute("position",new vt(i,3)),this.streakMaterial=new Cl({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:fn}),this.streakLines=new bu(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=Z.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=Z.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const r=this.geometry.attributes.position,o=r.array,a=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=o[l*3+2]+a;c>2&&(c=-52-Math.random()*12,o[l*3]=(Math.random()-.5)*28,o[l*3+1]=(Math.random()-.5)*18),o[l*3+2]=c}r.needsUpdate=!0}if(this.pulseFactor=Z.lerp(this.pulseFactor,Z.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const r=this.streakGeometry.attributes.position,o=r.array,a=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const h=this.streakSeeds[c];h.z+=a,h.z>4&&(h.z=-95-Math.random()*25);const u=h.z-h.len*l;o[c*6]=h.x,o[c*6+1]=h.y,o[c*6+2]=h.z,o[c*6+3]=h.x,o[c*6+4]=h.y,o[c*6+5]=u}r.needsUpdate=!0}}}class fx{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new w,this.angularVelocity=new w,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.altitudeContext={surfaceAltitude:9999,planetRadius:220,atmoTopAlt:320,groundFloorAlt:.9,minSpeed:8,submergedRatio:0,planetCenter:new w,prevPlanetCenter:new w,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new w,planetQuatDelta:new ht},this._tmpToShip=new w,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov,this._bindEvents()}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=Z.clamp(-t*.011,-.52,.52);this.targetBankAngle=Z.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=Z.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,minSpeed:r,submergedRatio:o,planetCenter:a,prevPlanetCenter:l,hasPlanet:c,inGravityWell:h,planetDeltaPos:u,planetQuatDelta:d}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||220,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*1.45,this.altitudeContext.groundFloorAlt=i??.9,this.altitudeContext.minSpeed=r??8,this.altitudeContext.submergedRatio=Z.clamp(o??0,0,1),a?(this.altitudeContext.planetCenter.copy(a),this.altitudeContext.prevPlanetCenter.copy(l||a),this.altitudeContext.hasPlanet=c!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!h,u?this.altitudeContext.planetDeltaPos.copy(u):this.altitudeContext.planetDeltaPos.set(0,0,0),d?this.altitudeContext.planetQuatDelta.copy(d):this.altitudeContext.planetQuatDelta.identity()}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:r=!1,onComplete:o=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const a=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new w(0,1,0)}));this.autopilot={startPos:a,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:r,onComplete:o}}setPose(e,t,n=new w(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(100,this.altitudeContext.atmoTopAlt),i=Z.clamp(t/n,0,1),r=Z.smoothstep(t,n,n+1350),o=this.altitudeContext.minSpeed??8,a=Z.lerp(1,.48,this.altitudeContext.submergedRatio||0),l=Z.lerp(o,38,Math.pow(i,.78))*a,c=Z.lerp(l,260,Math.pow(r,1.1)),h=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&h){const m=Z.lerp(Z.lerp(.22,.56,i),1,r);this.pulseDriveCharge=Z.lerp(this.pulseDriveCharge,m,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=Z.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const u=this.keys.boost&&h?Math.min(1,this.pulseDriveCharge/Math.max(.2,Z.lerp(.22,1,r))):this.pulseDriveCharge,d=Z.lerp(2.2,3.05,i),g=Z.lerp(d,5.8,r),x=Z.lerp(1,g,Math.min(1,u));return c*this.speedMultiplier*x}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell){const c=this.altitudeContext.planetQuatDelta;c.x*c.x+c.y*c.y+c.z*c.z>1e-14?(this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.prevPlanetCenter).applyQuaternion(c),this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip),this.shipQuaternion.premultiply(c).normalize(),this.velocity.applyQuaternion(c),this.camera.quaternion.copy(this.shipQuaternion)):this.camera.position.add(this.altitudeContext.planetDeltaPos)}if(this.autopilot){this.autopilot.elapsed+=t;const c=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),h=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2,{targetPos:u,lookAtPos:d,upVec:f,useCurveNow:g}=this.autopilot.poseProvider(h,c,this.autopilot.startPos),x=this.camera.position.clone();this.autopilot.useDirectCurve||g?this.camera.position.copy(u):this.camera.position.lerpVectors(this.autopilot.startPos,u,h);const m=this.camera.clone();m.position.copy(this.camera.position),m.up.copy(f||new w(0,1,0)),m.lookAt(d),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,m.quaternion,this.autopilot.useDirectCurve?Math.min(1,h*2.2):Math.min(1,h*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(x).divideScalar(t);const p=this.autopilot.useDirectCurve?Math.sin(c*Math.PI)*9:Math.sin(c*Math.PI)*18,M=this.baseFov+p;if(this.camera.fov=Z.lerp(this.camera.fov,M,.25),this.camera.updateProjectionMatrix(),c>=1){const y=this.autopilot.onComplete;this.autopilot=null,this.velocity.multiplyScalar(.15),y&&y()}return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const c=new ht().setFromAxisAngle(new w(1,0,0),this.angularVelocity.x),h=new ht().setFromAxisAngle(new w(0,1,0),this.angularVelocity.y),u=new ht().setFromAxisAngle(new w(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(h),this.shipQuaternion.multiply(c),this.shipQuaternion.multiply(u),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=Z.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const r=new ht().setFromAxisAngle(new w(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(r);const o=new w((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),a=this._computeAdaptiveSpeedLimits(t);if(o.lengthSq()>0){o.normalize(),o.applyQuaternion(this.shipQuaternion);const c=o.multiplyScalar(a),h=Z.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(c,1-Math.exp(-h*t))}else{const c=Z.lerp(3.4,6.2,this.altitudeContext.submergedRatio||0);this.velocity.multiplyScalar(Math.exp(-c*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0)}if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const c=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,h=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),u=h.length();if(u>1e-4&&u<c){const d=h.divideScalar(u);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(d,c);const f=this.velocity.dot(d);f<0&&this.velocity.addScaledVector(d,-f)}}const l=this.baseFov+this.pulseDriveCharge*18.5;Math.abs(this.camera.fov-l)>.05&&(this.camera.fov=Z.lerp(this.camera.fov,l,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function Lt(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Pt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=fh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const g=fh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function fh(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new vt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function ph(s,e){if(e===gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===il||e===Jh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===il)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class px extends ts{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Dx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=fr.extractUrlBase(e);o=fr.resolveURL(c,this.path)}else o=fr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lu){try{o[Rt.KHR_BINARY_GLTF]=new Nx(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Yx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Rt.KHR_MATERIALS_UNLIT:o[u]=new _x;break;case Rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ux(r,this.dracoLoader);break;case Rt.KHR_TEXTURE_TRANSFORM:o[u]=new Fx;break;case Rt.KHR_MESH_QUANTIZATION:o[u]=new Ox;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function mx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gx{constructor(e){this.parser=e,this.name=Rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mo(h),c.distance=u;break;case"spot":c=new G_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class _x{constructor(){this.name=Rt.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){const i=[];e.color=new le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(i)}}class xx{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class vx{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(a,a)}return Promise.all(r)}}class Mx{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class yx{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Sx{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class bx{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class wx{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new le().setRGB(a[0],a[1],a[2],Mn),Promise.all(r)}}class Ex{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ax{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new le().setRGB(a[0],a[1],a[2],Mn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(r)}}class Tx{constructor(e){this.parser=e,this.name=Rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Cx{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Rx{constructor(e){this.parser=e,this.name=Rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Px{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ix{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lx{constructor(e){this.name=Rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Dx{constructor(e){this.name=Rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const x=new tt,m=new w,p=new ht,M=new w(1,1,1),y=new ct(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&M.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,p,M));for(const _ in l)if(_==="_COLOR_0"){const A=l[_];y.instanceColor=new ol(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Dt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Lu="glTF",ir=12,mh={JSON:1313821514,BIN:5130562};class Nx{constructor(e){this.name=Rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ir),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ir,r=new DataView(e,ir);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===mh.JSON){const c=new Uint8Array(e,ir+o,a);this.content=n.decode(c)}else if(l===mh.BIN){const c=ir+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ux{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=ll[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ll[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ts[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},a,c,Mn,d)})})}}class Fx{constructor(){this.name=Rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ox{constructor(){this.name=Rt.KHR_MESH_QUANTIZATION}}class Du extends yr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,M=1-m,y=p-d+u;for(let _=0;_!==a;_++){const A=o[x+_+a],C=o[x+_+l]*h,S=o[g+_+a],E=o[g+_]*h;r[_]=M*A+y*C+m*S+p*E}return r}}const Bx=new ht;class zx extends Du{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Bx.fromArray(r).normalize().toArray(r),r}}const Fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gh={9728:En,9729:Ln,9984:Hh,9985:ao,9986:or,9987:di},_h={33071:Li,33648:go,10497:Ui},da={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kx={CUBICSPLINE:void 0,LINEAR:gr,STEP:mr},fa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),s.DefaultMaterial}function Xi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Hx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wx(s){let e;const t=s.extensions&&s.extensions[Rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pa(t.attributes):e=s.indices+":"+pa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+pa(s.targets[n]);return e}function pa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function cl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const qx=new tt;class Yx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new B_(this.options.manager):this.textureLoader=new X_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Xi(r,a,i),hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Rt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(fr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=da[i.type],a=Ts[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new vt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=da[i.type],c=Ts[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(M);y||(x=new c(a,p*f,i.count*f/h),y=new xu(x,f/h),t.cache.add(M,y)),m=new vr(y,l,d%f/h,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new vt(x,l,g);if(i.sparse!==void 0){const p=da.SCALAR,M=Ts[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,A=new M(o[1],y,i.sparse.count*p),C=new c(o[2],_,i.sparse.count*l);a!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,E=A.length;S<E;S++){const v=A[S];if(m.setX(v,C[S*l]),l>=2&&m.setY(v,C[S*l+1]),l>=3&&m.setZ(v,C[S*l+2]),l>=4&&m.setW(v,C[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=gh[d.magFilter]||Ln,h.minFilter=gh[d.minFilter]||di,h.wrapS=_h[d.wrapS]||Ui,h.wrapT=_h[d.wrapT]||Ui,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==En&&h.minFilter!==Ln,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new rn(x);m.needsUpdate=!0,d(m)}),t.load(fr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),hi(u,o),u.userData.mimeType=o.mimeType||Xx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wn,jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Cl,jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Oe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Rt.KHR_MATERIALS_UNLIT]){const u=i[Rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Mn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qt);const h=r.alphaMode||fa.OPAQUE;if(h===fa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===fa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==An){const u=r.emissiveFactor;a.emissive=new le().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&o!==An&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Xi(i,u,r),u})}createUniqueName(e){const t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return xh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Wx(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=xh(new Pt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Gx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=o[f];let p;const M=c[f];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new r_(x,M):new ot(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Fn.TRIANGLE_STRIP?p.geometry=ph(p.geometry,Jh):m.mode===Fn.TRIANGLE_FAN&&(p.geometry=ph(p.geometry,il));else if(m.mode===Fn.LINES)p=new bu(x,M);else if(m.mode===Fn.LINE_STRIP)p=new Rl(x,M);else if(m.mode===Fn.LINE_LOOP)p=new l_(x,M);else if(m.mode===Fn.POINTS)p=new Tn(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Hx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),m.extensions&&Xi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Xi(i,u[0],r),u[0];const d=new Ht;r.extensions&&Xi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bn(Z.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new tt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Tl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let M=0,y=d.length;M<y;M++){const _=d[M],A=f[M],C=g[M],S=x[M],E=m[M];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const v=n._createAnimationTracks(_,A,C,S,E);if(v)for(let b=0;b<v.length;b++)p.push(v[b])}return new I_(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new yu:c.length>1?h=new Ht:c.length===1?h=c[0]:h=new Dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),hi(h,r),r.extensions&&Xi(n,h,r),r.matrix!==void 0){const u=new tt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ht;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&Xi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof jn||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ci[r.path]===Ci.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ci[r.path]){case Ci.weights:c=Os;break;case Ci.rotation:c=Bs;break;case Ci.position:case Ci.scale:c=zs;break;default:switch(n.itemSize){case 1:c=Os;break;case 2:case 3:default:c=zs;break}break}const h=i.interpolation!==void 0?kx[i.interpolation]:gr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ci[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=cl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Bs?zx:Du;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Kx(s,e,t){const n=e.attributes,i=new Mi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){const h=cl(Ts[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new w,l=new w;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=cl(Ts[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function xh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=ll[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ct.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),hi(s,e),Kx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vx(s,e.targets,t):s})}const ma=new WeakMap;class jx extends ts{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Mo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ut,n).catch(n)}decodeDracoFile(e,t,n,i,r=Mn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ma.has(e)){const l=ma.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),ma.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Pt;e.index&&t.setIndex(new vt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new vt(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ut)return;const n=new le;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Ct.toWorkingColorSpace(n,Ut),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Mo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Zx.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Zx(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const x={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let M,y;if(c.useUniqueIDs)y=h[m],M=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[m]]),y===-1)continue;M=a.GetAttribute(d,y)}const _=i(o,a,d,m,p,M);m==="color"&&(_.vertexColorSpace=c.vertexColorSpace),x.attributes.push(_)}return g===o.TRIANGULAR_MESH&&(x.index=n(o,a,d)),o.destroy(d),x}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,x=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,u,m,x,p);const M=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:M,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const hl={uSunViewPos:{value:new w}};function U(s,e,t){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Nt(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=Math.floor(t),o=s-n,a=e-i,l=t-r,c=o*o*(3-2*o),h=a*a*(3-2*a),u=l*l*(3-2*l),d=U(n,i,r),f=U(n+1,i,r),g=U(n,i+1,r),x=U(n+1,i+1,r),m=U(n,i,r+1),p=U(n+1,i,r+1),M=U(n,i+1,r+1),y=U(n+1,i+1,r+1),_=d+(f-d)*c,A=g+(x-g)*c,C=m+(p-m)*c,S=M+(y-M)*c,E=_+(A-_)*h,v=C+(S-C)*h;return(E+(v-E)*u)*2-1}function Ji(s,e,t,n=4){let i=0,r=.5,o=1;for(let a=0;a<n;a++)i+=r*Nt(s*o+a*17.31,e*o-a*9.7,t*o+a*3.3),o*=2.03,r*=.5;return i}function Un(s,e,t){const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)}function $i(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function $x(s=[0,1,0]){return[s,[-s[0],-s[1],-s[2]],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(t=>{const n=new w(...t).normalize(),i=Math.abs(n.y)<.9?new w(0,1,0):new w(1,0,0),r=new w().crossVectors(n,i).normalize(),o=new w().crossVectors(n,r).normalize();return{h:n,e1:r,e2:o}})}const Bt=[{id:"hometree",name:"Gran Árbol Madre (Hometree)",shortName:"Árbol-Casa",theta:.045,phi:-.55,landBoostRad:.24,elevMode:"valley",viewAlt:.092,viewBack:.11},{id:"hallelujah",name:"Montañas Aleluya",shortName:"Aleluya",theta:.38,phi:1.15,landBoostRad:.22,elevMode:"bay",viewAlt:.135,viewBack:.145},{id:"rookery",name:"Nido de Ikran (Ikran Rookery)",shortName:"Nido Ikran",theta:1.06,phi:3.65,landBoostRad:.25,elevMode:"canyon",viewAlt:.105,viewBack:.125},{id:"souls",name:"Árbol de las Almas (Tree of Souls)",shortName:"Árbol Almas",theta:1.54,phi:5.15,landBoostRad:.26,elevMode:"crater",viewAlt:.078,viewBack:.105},{id:"mushrooms",name:"Bosque de Setas Gigantes y Géiseres",shortName:"Setas / Géiseres",theta:2.28,phi:2.1,landBoostRad:.25,elevMode:"basin",viewAlt:.082,viewBack:.11},{id:"ashland",name:"Tierra de Ceniza (Pueblo Ash)",shortName:"Ceniza / Volcanes",theta:1.88,phi:.72,landBoostRad:.34,elevMode:"ash",viewAlt:.115,viewBack:.145},{id:"metkayina",name:"Arrecife Metkayina (Aldea y Abismo)",shortName:"Metkayina",theta:1.18,phi:2.15,landBoostRad:.32,elevMode:"reef",viewAlt:.068,viewBack:.098}].map(s=>{const e=Math.sin(s.theta);return{...s,capDir:new w(e*Math.cos(s.phi),Math.cos(s.theta),e*Math.sin(s.phi)).normalize()}});function Ol(s=[0,1,0]){const e=new w(s[0],s[1],s[2]).normalize(),t=new ht().setFromUnitVectors(new w(0,1,0),e);return Bt.map(n=>({...n,sphereDir:n.capDir.clone().applyQuaternion(t).normalize()}))}function Bl(s,e,t,n,i=5){let r=Ji(s*2-7,e*2,t*2,i);const o=Nt(s*7.4+2.3,e*7.4-1.1,t*7.4+4.2);r>-.24&&r<.06&&o>.22&&(r+=(o-.22)*.62);let a=0,l=0,c=0;if(n)for(let f=0;f<n.length;f++){const g=n[f],x=g.sphereDir,m=Z.clamp(s*x.x+e*x.y+t*x.z,-1,1),p=Math.acos(m);if(p<g.landBoostRad){const M=1-p/g.landBoostRad,y=M*M*(3-2*M);if(g.elevMode==="ash")l=Math.max(l,y),r=Math.max(r,.18+y*.36);else if(g.elevMode==="reef")if(c=Math.max(c,y),p<.165)r=Math.min(r,-.14-(1-p/.165)*.08);else{const _=Math.sin((p-.165)*18)*.5+.5;o+_*.35>.25?r=Math.max(r,.06+y*.14):r=Math.min(r,-.06)}else g.elevMode==="bay"?r=Math.max(r,-.05+y*.22):r=Math.max(r,.14+y*.34);if((g.elevMode==="crater"||g.elevMode==="basin")&&p<.11){const _=1-p/.11;a=Math.max(a,_*_*.0024)}}}const h=1-Math.abs(Nt(s*5.6+1.9,e*5.6-3.4,t*5.6+.7)),u=Math.max(0,r-.1)*Math.pow(Math.max(0,h),2.1),d=Ji(s*8.2+4.1,e*8.2-2.3,t*8.2+.9,3);return{cont:r,ridge:h,highlandRidge:u,craterDepression:a,ashFactor:l,reefFactor:c,forestClump:d}}function Qx(s,e,t,n=[0,1,0]){const i=new w(n[0],n[1],n[2]).normalize(),r=i.x,o=i.y,a=i.z,l=s==="p1"?Ol([r,o,a]):null,c=$i(e,t),h=$i(e,t),u=$i(e,t),d=c.getContext("2d").createImageData(e,t),f=h.getContext("2d").createImageData(e,t),g=u.getContext("2d").createImageData(e,t),x=d.data,m=f.data,p=g.data,M=new Float32Array(e),y=new Float32Array(e);for(let E=0;E<e;E++){const v=(E+.5)/e*Math.PI*2;M[E]=Math.cos(v),y[E]=Math.sin(v)}const _=s==="p4"?$x([r,o,a]):null;for(let E=0;E<t;E++){const v=(E+.5)/t*Math.PI,b=Math.sin(v),P=Math.cos(v);for(let N=0;N<e;N++){const D=-M[N]*b,z=y[N]*b,O=D*r+P*o+z*a,k=(E*e+N)*4;let L=0,B=0,ne=0,ie=0,oe=0,X=0,Pe=.5;if(s==="p4"){let K=-2,ue=-2,J=0;for(let de=0;de<_.length;de++){const ae=_[de].h,Ne=D*ae.x+P*ae.y+z*ae.z;Ne>K?(ue=K,K=Ne,J=de):Ne>ue&&(ue=Ne)}const fe=_[J],ve=Math.acos(Math.min(1,K)),ge=Math.atan2(D*fe.e2.x+P*fe.e2.y+z*fe.e2.z,D*fe.e1.x+P*fe.e1.y+z*fe.e1.z);let Se=Math.abs(Math.cos(ve*95));Se*=Se,Se*=Se,Se*=Se,Se*=Se;const _e=Un(.008,.02,ve);let De=Math.abs(Math.cos(ge*12));De*=De,De*=De,De*=De,De*=De,De*=De;const V=De*Un(.02,.07,ve)*(1-Un(.45,.9,ve)),Et=1-Un(0,.014,K-ue),Xe=U(Math.floor(D*140),Math.floor(P*140),Math.floor(z*140)),nt=U(Math.floor(D*700)+3,Math.floor(P*700),Math.floor(z*700)),Ge=Nt(D*6,P*6,z*6)*.5+.5,gt=(nt>.6?1:0)*(.35+.65*Xe)*(.4+.6*Ge),Ve=Se*.85*_e+V*.8+Et*1.1+gt*.45;let I,T,j;Xe<.33?(I=1,T=.74,j=.32):Xe<.66?(I=1,T=.88,j=.62):(I=1,T=.52,j=.18),ie=Ve*I,oe=Ve*T,X=Ve*j;const he=.11+.1*Xe+.05*Ge+.06*Se*_e;L=he*1.05,B=he,ne=he*.95,Pe=.4+.3*Xe+.2*Se}else if(s==="p2"){let K=Ji(D*2.2+5.1,P*2.2,z*2.2,5);O>.62&&(K=Math.max(K,.14+(O-.62)*1.4));const ue=K>.02,J=(K-.02)/.06,fe=Math.exp(-J*J),ve=U(Math.floor(D*520),Math.floor(P*520),Math.floor(z*520)),ge=U(Math.floor(D*90)+7,Math.floor(P*90),Math.floor(z*90)),Se=Nt(D*7+2,P*7,z*7)*.5+.5;if(O>.48&&O<=.79){const _e=Un(.48,.58,O)*(1-Un(.75,.795,O)),De=Nt(D*14+3,P*14,z*14)*.5+.5,V=.23+.14*De,Et=.1+.06*De,Xe=.06+.03*De;L=.08*(1-_e)+V*_e,B=.08*(1-_e)+Et*_e,ne=.09*(1-_e)+Xe*_e,ie=0,oe=0,X=0,Pe=.45+.25*De}else if(O>.79&&O<=.942){const _e=ve>.86?.14+.12*ge:0;ie=_e*.92,oe=_e*(ge>.5?.48:.2),X=_e*.14,L=.05+.03*ge,B=.055+.03*ge,ne=.065+.03*ge,Pe=.48+.2*ge}else if(ue){const _e=O>.942?.85:0,De=(ve>.52?1:0)*(fe*1.1+.14*Se+_e)*(.42+.58*ge);let V,Et,Xe;Se>.62?(V=1,Et=.16,Xe=.62):ge>.5?(V=.1,Et=.85,Xe=1):(V=.65,Et=.8,Xe=1),ie=De*V,oe=De*Et,X=De*Xe,L=.07+.04*ge,B=.08+.04*ge,ne=.1+.05*ge,Pe=.55+K*.4}else{const _e=Un(-.35,.02,K);L=.01+.02*_e,B=.03+.04*_e,ne=.06+.06*_e,Pe=.3}}else if(s==="p3"){let K=Ji(D*1.8+11,P*1.8,z*1.8,5);O>.84&&(K=Math.max(K,.08+(O-.84)*.8));const ue=1-Math.abs(Nt(D*7+3,P*7,z*7)),J=Math.max(0,K-.12)*ue*ue*3*(O>.9?.2:1),fe=Nt(D*14,P*14,z*14);if(K>0)Pe=.45+K*.6+J*.6,P<-.9||P>.93?(L=.9,B=.93,ne=.96):J>.6?(L=.88,B=.9,ne=.94):J>.25?(L=.36,B=.31,ne=.26):fe>.3&&O<.9?(L=.07,B=.2,ne=.07):(L=.15+.04*fe,B=.34+.05*fe,ne=.11),U(Math.floor(D*300),Math.floor(P*300),Math.floor(z*300))>.996&&(ie=.9,oe=.62,X=.3);else{const ve=Un(-.25,0,K);L=.02+.03*ve,B=.08+.12*ve,ne=.22+.13*ve,(P<-.92||P>.94)&&(L=.88,B=.92,ne=.96),Pe=.3+K*.3}}else{const{cont:K,highlandRidge:ue,ashFactor:J,reefFactor:fe}=Bl(D,P,z,l),ve=Nt(D*11,P*11,z*11);if(J>.25&&K>0){const ge=Math.pow(Math.max(0,1-Math.abs(Nt(D*16+4.1,P*16,z*16-2.3))),12),Se=.08+.06*ve;L=Z.lerp(.1,Se,J),B=Z.lerp(.24,Se*.92,J),ne=Z.lerp(.11,Se*.95,J),ie=ge*J*1,oe=ge*J*.26,X=ge*J*.04,Pe=.55+J*.35+ue*.35}else if(K>0){const ge=Math.min(1,ue*2.4);L=.08+.06*ve+ge*.11,B=.34+.11*ve-ge*.06,ne=.1+.05*ve+ge*.03;let Se=1-Math.abs(Nt(D*9+1,P*9,z*9)),_e=1-Math.abs(Nt(D*23+5,P*23,z*23));Se=Math.pow(Se,14),_e=Math.pow(_e,20);const De=Se*.9+_e*.55;Nt(D*3+9,P*3,z*3)>0?(ie=De*.12,oe=De*.95,X=De*1):(ie=De*.85,oe=De*.18,X=De*1),Pe=.5+K*.65+ue*.35}else{const ge=Un(-.32,0,K);L=.01+.06*ge+fe*.05,B=.24+.42*ge+fe*.18,ne=.38+.36*ge+fe*.14;const Se=Math.max(Un(-.09,0,K),fe*.55)*.62;ie=Se*.08,oe=Se*.88,X=Se*1,Pe=.3}}x[k]=L*255,x[k+1]=B*255,x[k+2]=ne*255,x[k+3]=255,m[k]=ie*255,m[k+1]=oe*255,m[k+2]=X*255,m[k+3]=255;const G=Pe*255;p[k]=G,p[k+1]=G,p[k+2]=G,p[k+3]=255}}c.getContext("2d").putImageData(d,0,0),h.getContext("2d").putImageData(f,0,0),u.getContext("2d").putImageData(g,0,0);const A=new mn(c);A.colorSpace=Ut,A.anisotropy=8;const C=new mn(h);C.colorSpace=Ut,C.anisotropy=8;const S=new mn(u);return{map:A,emissiveMap:C,bumpMap:S}}function Jx(s,e=1024,t=512,n=[0,1,0]){const i=new w(n[0],n[1],n[2]).normalize(),r=i.x,o=i.y,a=i.z,l=$i(e,t),c=l.getContext("2d"),h=c.createImageData(e,t),u=h.data,d={p1:{lo:.05,hi:.38,col:[1,1,1],k:.82},p2:{lo:-.18,hi:.25,col:[.2,.22,.28],k:.9},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[s]||{lo:.1,hi:.4,col:[1,1,1],k:.7};for(let g=0;g<t;g++){const x=(g+.5)/t*Math.PI,m=Math.sin(x),p=Math.cos(x);for(let M=0;M<e;M++){const y=(M+.5)/e*Math.PI*2,_=-Math.cos(y)*m,A=Math.sin(y)*m,C=_*r+p*o+A*a,S=Nt(_*2+4,p*2,A*2)*.35,E=Ji(_*3.2+20+S,p*5,A*3.2-S,5);let v=Un(d.lo,d.hi,E)*d.k;d.clearNorth&&(v*=1-Un(.78,.9,C));const b=(g*e+M)*4;u[b]=d.col[0]*255,u[b+1]=d.col[1]*255,u[b+2]=d.col[2]*255,u[b+3]=v*255}}c.putImageData(h,0,0);const f=new mn(l);return f.colorSpace=Ut,f.anisotropy=8,f}function ev(s,e=.06){s.onBeforeCompile=t=>{t.uniforms.uSunViewPos=hl.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},s.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function tv(){const s=$i(128,128),e=s.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(255, 255, 255, 0.92)"),t.addColorStop(.35,"rgba(242, 248, 255, 0.56)"),t.addColorStop(.7,"rgba(215, 232, 255, 0.18)"),t.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new mn(s);return n.needsUpdate=!0,n}function vh(s,e){return new tn({uniforms:{uCloudMap:{value:s},uSunPosition:{value:new w(0,0,0)},uPlanetCenter:{value:new w(0,0,0)},uAmbientColor:{value:new le(e.ambient)},uSunColor:{value:new le(e.sunlit)},uHorizonColor:{value:new le(e.horizon)},uOpacity:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1,side:qt})}function nv(){const s=new nn(28e3,48,32),e=new tn({uniforms:{uLocalUp:{value:new w(0,1,0)},uSunDir:{value:new w(0,.2,1)},uZenithColor:{value:new le(1991880)},uMidColor:{value:new le(5155054)},uHorizonColor:{value:new le(16760171)},uSunGlowColor:{value:new le(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:vn}),t=new ot(s,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t}function iv(s,e=157.5){const t=s.localRadius,n=new Ht;n.name=`${s.id}_Orbital_Globe`;const i=s.capLocalDir?s.capLocalDir.clone().normalize():new w(0,1,0),r=[i.x,i.y,i.z],o={p4:[2048,1024],p2:[1536,768]}[s.id]||[1024,512],{map:a,emissiveMap:l,bumpMap:c}=Qx(s.id,o[0],o[1],r),h={p1:{ei:2.1,rough:.76,metal:.05,bump:1.2,floor:0},p2:{ei:1.75,rough:.55,metal:.35,bump:.6,floor:.04},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[s.id],u=new Oe({map:a,emissiveMap:l,emissive:new le(1,1,1),emissiveIntensity:h.ei,roughness:h.rough,metalness:h.metal,bumpMap:c,bumpScale:h.bump});ev(u,h.floor);const d=new ot(new nn(t,128,128),u);d.name=`${s.id}_Orbital_Surface`,n.add(d);const f=Jx(s.id,1024,512,r),g={p1:{ambient:1858672,sunlit:14219519,horizon:2400946},p2:{ambient:860724,sunlit:6205136,horizon:1066082},p3:{ambient:8165566,sunlit:16777215,horizon:16039028},p4:{ambient:6434840,sunlit:16763016,horizon:14446130}}[s.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},x=vh(f,g),m=new ot(new nn(t*1.012,128,128),x);m.name=`${s.id}_Low_Cloud_Shell`,n.add(m);const p=vh(f,g),M=new ot(new nn(t*1.024,128,128),p);M.name=`${s.id}_High_Cloud_Shell`,n.add(M);const y=new Ht;y.name=`${s.id}_Lower_Cloud_Puffs_Group`,y.visible=!1,n.add(y);const _=380,A=new Float32Array(_*3),C=18/e,S=45/e,E=new ht().setFromUnitVectors(new w(0,1,0),i),v=new w;for(let z=0;z<_;z++){const O=Math.acos(1-U(z,2,17)*.42),k=U(z,9,5)*Math.PI*2,L=C+U(z,4,13)*(S-C),B=t+L;v.set(B*Math.sin(O)*Math.cos(k),B*Math.cos(O),B*Math.sin(O)*Math.sin(k)),v.applyQuaternion(E),A[z*3]=v.x,A[z*3+1]=v.y,A[z*3+2]=v.z}const b=new Pt;b.setAttribute("position",new vt(A,3));const P=new wn({map:tv(),color:g.sunlit,size:46,transparent:!0,opacity:0,depthWrite:!1,fog:!1,sizeAttenuation:!0}),N=new Tn(b,P);y.add(N);const D=Nu(s,t,s.id==="p4"?1.034:1.052);return n.add(D),{group:n,surfaceMesh:d,upperCloudMesh:M,lowerCloudGroup:y,lowerCloudMesh:m,lowerCloudPuffs:N,cloudDeckPalette:g,atmosphere:D}}function Nu(s,e,t=1.045){const n=new nn(e*t,96,96),i={p1:[6281471,11558143],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[s.id]||[6866175,16755285],r=new tn({uniforms:{uColorDay:{value:new le(i[0])},uColorHorizon:{value:new le(i[1])},uSunPosition:{value:new w(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:fn,side:Jn}),o=new ot(n,r);return o.name=`${s.id}_Fresnel_Atmosphere`,o}function sv(s,e=1400){const t=s.localRadius,n=s.id==="p4",i=256,r=$i(i,i),o=$i(i,i),a=r.getContext("2d"),l=o.getContext("2d");a.fillStyle=n?"#2a2c31":"#111821",a.fillRect(0,0,i,i),l.fillStyle="#000000",l.fillRect(0,0,i,i);const c=n?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let M=4;M<i;M+=8)for(let y=3;y<i;y+=6)Math.random()<(n?.55:.42)&&(l.fillStyle=c[Math.random()*c.length|0],l.fillRect(y,M,3,4));const h=new mn(r);h.colorSpace=Ut;const u=new mn(o);u.colorSpace=Ut;const d=new jt(1,1,1);d.translate(0,.5,0);const f=new Oe({map:h,emissiveMap:u,emissive:new le(1,1,1),emissiveIntensity:n?1.6:2,roughness:.42,metalness:.7}),g=new ct(d,f,e);g.name=`${s.id}_Horizon_Tower_Band`;const x=new Dt,m=new w(0,1,0),p=new w;for(let M=0;M<e;M++){const y=.118+Math.pow(U(M,3,9),.85)*.38,_=U(M,7,1)*Math.PI*2;p.set(Math.sin(y)*Math.cos(_),Math.cos(y),Math.sin(y)*Math.sin(_)),x.position.copy(p).multiplyScalar(t*.998),x.quaternion.setFromUnitVectors(m,p),x.rotateY(U(M,2,2)*Math.PI);const A=t*(.0024+.0042*U(M,5,5)),C=t*(.0024+.0042*U(M,6,8)),S=t*(.006+.025*Math.pow(U(M,9,4),1.6));x.scale.set(A,S,C),x.updateMatrix(),g.setMatrixAt(M,x.matrix)}return g.instanceMatrix.needsUpdate=!0,g}function rv(s,e,t,n){s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.updateMatrixWorld(!0);const i=n==="p2",r=new w(0,1,0),o=e/t,a=i?124:152;function l(M,y,_,A=!1){const C=Math.sqrt(M*M+_*_),S=Math.min(1.18,C/(o*.94)),E=Math.atan2(_,M),v=Math.sin(S),b=v*Math.cos(E),P=Math.cos(S),N=v*Math.sin(E);let D=y;if(A){const k=Z.smoothstep(C,a*.65,a*1);D=Z.lerp(y,i?-36:-18,k)}const z=n==="p3"?14.5:i?16.5:.4,O=Math.max(o*.9,o+D+z);return{px:O*b,py:O*P-o,pz:O*N,nx:b,ny:P,nz:N}}const c=new tt().copy(s.matrixWorld).invert(),h=[],u=new Map;s.traverse(M=>{if(M.isMesh&&M.geometry){const y=new tt().multiplyMatrices(c,M.matrixWorld);h.push({mesh:M,initRootMat:y}),u.set(M.geometry,(u.get(M.geometry)||0)+1)}});for(const{mesh:M,initRootMat:y}of h)M.parent!==s&&s.attach(M),y.decompose(M.position,M.quaternion,M.scale),M.updateMatrix();const d=new w,f=new ht,g=new w,x=new w,m=new ht,p=new w;for(const{mesh:M,initRootMat:y}of h){if(i){if(/^NC_FarHorizon/.test(M.name)){M.visible=!1;continue}if(/^NC_Canyon_Skyscraper/.test(M.name)&&(d.setFromMatrixPosition(y),Math.hypot(d.x,d.z)>128)){M.visible=!1;continue}}const _=u.get(M.geometry)||1,A=/Terrain|River|Ground|Forest|Canal/.test(M.name);if(_===1||A){_>1&&(M.geometry=M.geometry.clone());const C=M.geometry.attributes.position,S=new tt().copy(y).invert();for(let E=0;E<C.count;E++){p.fromBufferAttribute(C,E).applyMatrix4(y);const v=l(p.x,p.y,p.z,A);p.set(v.px,v.py,v.pz).applyMatrix4(S),C.setXYZ(E,p.x,p.y,p.z)}C.needsUpdate=!0,M.geometry.computeVertexNormals(),M.geometry.computeBoundingBox(),M.geometry.computeBoundingSphere()}else{if(y.decompose(d,f,g),i&&/^NC_Canyon_Skyscraper/.test(M.name)){const S=Math.hypot(d.x,d.z),E=1-Z.smoothstep(S,95,128)*.46;g.y*=E}const C=l(d.x,d.y,d.z,!1);x.set(C.nx,C.ny,C.nz).normalize(),m.setFromUnitVectors(r,x),M.position.set(C.px,C.py,C.pz),M.quaternion.copy(m).multiply(f),M.scale.copy(g),M.updateMatrix()}}s.scale.setScalar(t),s.position.set(0,e,0),s.updateMatrixWorld(!0)}const lt=1/3.5,Wn=new w(0,1,0);function Mh(s,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,32);i.addColorStop(0,s),i.addColorStop(.45,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new mn(t);return r.needsUpdate=!0,r}function Uu(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new w(1,0,0):new w(0,0,1),n=new w().crossVectors(e,t).normalize(),i=new w().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function ov(){const s=[],e=new Cn([new w(0,0,0),new w(.05,.35,-.02),new w(-.04,.72,.04),new w(.02,1,-.01)]);s.push(new Dn(e,6,.075,5,!1).toNonIndexed());const t=[[new w(.02,.48,.01),new w(.32,.76,.14)],[new w(-.02,.62,.03),new w(-.28,.92,-.18)],[new w(0,.78,.02),new w(.18,1.12,-.22)],[new w(.02,.56,-.02),new w(-.22,.82,.25)]];for(const[i,r]of t){const o=i.clone().lerp(r,.5).add(new w(0,.06,0)),a=new Cn([i,o,r]);s.push(new Dn(a,4,.026,4,!1).toNonIndexed())}const n=Lt(s,!1);return n.computeVertexNormals(),n}function av(){const s=[];for(let a=-2;a<=2;a++){const l=new Zn(.36,.95,2,3);l.translate(a*.14,.48,Math.sin(a*.9)*.06),l.rotateZ(-a*.22),s.push(l.toNonIndexed())}const e=Lt(s,!1);e.computeVertexNormals();const t=[];for(let a=0;a<6;a++){const l=a/6*Math.PI*2,c=a===0?0:.28,h=a===0?1:.55+U(a,3,7)*.45,u=new Kt(.11,.08,h,6,1);u.translate(Math.cos(l)*c,h*.5,Math.sin(l)*c),u.rotateZ((U(a,2,5)-.5)*.22),t.push(u.toNonIndexed())}const n=Lt(t,!1);n.computeVertexNormals();const i=[],r=new Kt(.32,.4,.28,8);r.translate(0,.14,0),i.push(r.toNonIndexed());for(let a=0;a<10;a++){const l=a/10*Math.PI*2,c=new pn(.065,.72,4);c.translate(0,.36,0),c.rotateX(.55),c.rotateY(l),c.translate(Math.cos(l)*.22,.2,Math.sin(l)*.22),i.push(c.toNonIndexed())}const o=Lt(i,!1);return o.computeVertexNormals(),{fanGeo:e,tubeGeo:n,anemoneGeo:o}}function lv(){const s=[];for(let t=0;t<2;t++){const n=new Zn(.24,1,2,8);n.translate(0,.5,0);const i=n.attributes.position;for(let r=0;r<i.count;r++){const o=i.getY(r),a=i.getX(r)+Math.sin(o*Math.PI*3)*.14,l=Math.cos(o*Math.PI*2.5+t*1.57)*.1;i.setXYZ(r,a,o,l)}n.rotateY(t*Math.PI*.5),n.computeVertexNormals(),s.push(n.toNonIndexed())}const e=Lt(s,!1);return e.computeVertexNormals(),e}function cv(s,e,t,n){const i=Uu(e.capDir),r=new Ht;r.name="Pandora_Biome_AshPeople";const o=(G,K,ue=0)=>{const J=i.upDir.clone().addScaledVector(i.e1,G).addScaledVector(i.e2,K).normalize(),fe=t(J.x,J.y,J.z);return{pos:J.clone().multiplyScalar(s+fe.elev+ue),normal:J,elev:fe.elev}},a=[];for(let G=0;G<18;G++){const K=G/18*Math.PI*2+U(G,3,9)*.25,ue=[];for(let ve=0;ve<=8;ve++){const ge=ve/8,Se=.018+ge*.16,_e=Math.sin(ge*7+G*1.3)*.018,De=Math.cos(K)*Se-Math.sin(K)*_e,V=Math.sin(K)*Se+Math.cos(K)*_e;ue.push(o(De,V,8e-4).pos)}const J=new Cn(ue),fe=new Dn(J,14,(.0014+G%3*5e-4)*lt,4,!1).toNonIndexed();a.push(fe)}const l=new Oe({color:3871240,emissive:16726792,emissiveIntensity:.42,roughness:.35});l.userData.animatedEmissive=!0,n.push({mat:l,dayColor:5117962,nightColor:16736792,dayEmissive:14166022,nightEmissive:16729608,dayEI:.42,nightEI:2.55,pulsePhase:.4});const c=new ot(Lt(a,!1),l);c.name="Pandora_Ash_Lava_Fissures",r.add(c);const h=new Oe({vertexColors:!0,roughness:.94,metalness:.06}),u=[{lx:-.045,lz:.032,rad:.145*lt,h:.175*lt},{lx:.072,lz:-.048,rad:.115*lt,h:.135*lt},{lx:-.025,lz:-.095,rad:.105*lt,h:.118*lt}],d=[];u.forEach((G,K)=>{const ue=o(G.lx,G.lz,-.002),J=new Kt(G.rad*.28,G.rad,G.h,16,8,!1);J.translate(0,G.h*.5,0);const fe=J.attributes.position,ve=new Float32Array(fe.count*3);for(let _e=0;_e<fe.count;_e++){let De=fe.getX(_e),V=fe.getY(_e);const Et=fe.getZ(_e),Xe=Nt(De*80+K*3.1,V*50,Et*80),nt=V/G.h,Ge=1+.22*Xe*(1-nt*.4);De*=Ge;const gt=Et*Ge;nt>.92&&Math.hypot(De,gt)<G.rad*.24&&(V-=G.h*.14),fe.setXYZ(_e,De,V,gt);const Ve=.1+.07*(1-nt)+.04*Math.max(0,Xe);ve[_e*3]=Ve,ve[_e*3+1]=Ve*.95,ve[_e*3+2]=Ve*.98}J.setAttribute("color",new vt(ve,3)),J.computeVertexNormals();const ge=new ot(J,h);ge.position.copy(ue.pos),ge.quaternion.setFromUnitVectors(Wn,ue.normal),ge.name=`Pandora_Ash_Volcano_${K+1}`,r.add(ge);const Se=new ot(new Il(G.rad*.22,12),l);Se.rotateX(-Math.PI*.5),Se.position.copy(ue.pos).addScaledVector(ue.normal,G.h*.88),Se.quaternion.copy(ge.quaternion).multiply(new ht().setFromAxisAngle(new w(1,0,0),-Math.PI*.5)),r.add(Se),d.push({basePos:ue.pos.clone().addScaledVector(ue.normal,G.h*.94),normal:ue.normal.clone(),maxH:(.14+K*.03)*lt,phase:K*2.1})});const f=36,g=d.length*f,x=new Float32Array(g*3),m=new Pt;m.setAttribute("position",new vt(x,3));const p=new wn({size:13.5,map:Mh("rgba(52, 48, 50, 0.72)","rgba(28, 25, 26, 0.28)"),color:3880502,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),M=new Tn(m,p);M.frustumCulled=!1,M.name="Pandora_Ash_Volcano_Smoke",r.add(M);const y=1400,_=new Float32Array(y*3),A=[];for(let G=0;G<y;G++){const K=U(G,3,19)*Math.PI*2,ue=Math.sqrt(U(G,7,11))*.24,J=o(Math.cos(K)*ue,Math.sin(K)*ue,(.006+U(G,5,2)*.22)*lt);_[G*3]=J.pos.x,_[G*3+1]=J.pos.y,_[G*3+2]=J.pos.z,A.push({dir:J.normal,baseAlt:J.pos.length(),phase:U(G,9,4)*Math.PI*2,speed:.04+U(G,2,8)*.06})}const C=new Pt;C.setAttribute("position",new vt(_,3));const S=new wn({size:.58,map:Mh("rgba(160, 150, 145, 0.85)","rgba(90, 80, 75, 0.25)"),color:9471360,transparent:!0,opacity:.52,depthWrite:!1,sizeAttenuation:!0}),E=new Tn(C,S);E.frustumCulled=!1,E.name="Pandora_Ash_Floating_Cinders",r.add(E);const v=440,b=ov(),P=new Oe({color:1775896,roughness:.94,metalness:.05}),N=new ct(b,P,v);N.name="Pandora_Ash_Charred_Trees",N.frustumCulled=!1;const D=new Dt;for(let G=0;G<v;G++){const K=U(G,4,17)*Math.PI*2,ue=.045+Math.sqrt(U(G,8,3))*.2,J=o(Math.cos(K)*ue,Math.sin(K)*ue,-5e-4),fe=(.018+U(G,2,11)*.028)*lt;D.position.copy(J.pos),D.quaternion.setFromUnitVectors(Wn,J.normal),D.rotateY(U(G,6,9)*Math.PI*2),D.rotateX((U(G,1,5)-.5)*.22),D.scale.set(fe,fe,fe),D.updateMatrix(),N.setMatrixAt(G,D.matrix)}N.instanceMatrix.needsUpdate=!0,r.add(N);const z=new Oe({color:12167830,roughness:.78}),O=new Oe({color:2366745,roughness:.92}),k=new Oe({color:16755256,emissive:16734740,emissiveIntensity:1.15,roughness:.35});k.userData.animatedEmissive=!0,n.push({mat:k,dayColor:16755256,nightColor:16768376,dayEmissive:16734740,nightEmissive:16738328,dayEI:.95,nightEI:2.65,pulsePhase:1.1});const L=[],B=[],ne=[];for(let G=0;G<6;G++){const K=G/6*Math.PI*2+.3,ue=.022,J=o(Math.cos(K)*ue,Math.sin(K)*ue,2e-4),fe=new ht().setFromUnitVectors(Wn,J.normal);for(let ge=-1;ge<=1;ge+=2){const Se=new Cn([new w(ge*.012*lt,0,0),new w(ge*.018*lt,.018*lt,.002*lt),new w(0,.032*lt,0)]),_e=new Dn(Se,8,.0018*lt,5,!1).toNonIndexed();_e.applyQuaternion(new ht().setFromAxisAngle(Wn,K)),_e.applyQuaternion(fe),_e.translate(J.pos.x,J.pos.y,J.pos.z),B.push(_e)}const ve=o(Math.cos(K+.25)*.011,Math.sin(K+.25)*.011,5e-4);ne.push(ve)}for(let G=0;G<16;G++){const K=G/16*Math.PI*2+U(G,2,7)*.18,ue=.018+G%3*.008,J=o(Math.cos(K)*ue,Math.sin(K)*ue,0),fe=new pn(.0075*lt,.013*lt,6);fe.translate(0,.006*lt,0);const ve=fe.toNonIndexed();ve.rotateY(U(G,4,1)*Math.PI),ve.applyQuaternion(new ht().setFromUnitVectors(Wn,J.normal)),ve.translate(J.pos.x,J.pos.y,J.pos.z),L.push(ve)}const ie=new ot(Lt(B,!1),z);ie.name="Pandora_Ash_Giant_Bone_Totems";const oe=new ot(Lt(L,!1),O);oe.name="Pandora_Ash_Tribal_Huts",r.add(ie,oe);const X=[];ne.forEach(G=>{const K=new pn(.003*lt,.009*lt,6).toNonIndexed();K.translate(0,.004*lt,0),K.applyQuaternion(new ht().setFromUnitVectors(Wn,G.normal)),K.translate(G.pos.x,G.pos.y,G.pos.z),X.push(K)});const Pe=new ot(Lt(X,!1),k);return Pe.name="Pandora_Ash_Bonfires",r.add(Pe),{group:r,update(G,K){const ue=m.attributes.position;d.forEach((fe,ve)=>{for(let ge=0;ge<f;ge++){const Se=ve*f+ge,_e=(G*.24+fe.phase+ge/f)%1,De=_e*fe.maxH,V=_e*.025*lt;ue.setXYZ(Se,fe.basePos.x+fe.normal.x*De+Math.sin(Se+G*.5)*V,fe.basePos.y+fe.normal.y*De+Math.cos(Se)*V*.5,fe.basePos.z+fe.normal.z*De+Math.cos(Se+G*.4)*V)}}),ue.needsUpdate=!0,p.color.setRGB(Z.lerp(.24,.42,K),Z.lerp(.22,.16,K),Z.lerp(.23,.14,K));const J=C.attributes.position;for(let fe=0;fe<y;fe++){const ve=A[fe],ge=Math.sin(G*ve.speed+ve.phase)*.004,Se=ve.baseAlt+Math.cos(G*.4+ve.phase)*.003;J.setXYZ(fe,ve.dir.x*Se+ge,ve.dir.y*Se,ve.dir.z*Se-ge)}J.needsUpdate=!0}}}function hv(s,e,t,n){const i=Uu(e.capDir),r=new Ht;r.name="Pandora_Biome_MetkayinaReef";const o=(L,B,ne=0)=>{const ie=i.upDir.clone().addScaledVector(i.e1,L).addScaledVector(i.e2,B).normalize();return{pos:ie.clone().multiplyScalar(s+ne),normal:ie}},a=(L,B,ne=0)=>{const ie=i.upDir.clone().addScaledVector(i.e1,L).addScaledVector(i.e2,B).normalize(),oe=t(ie.x,ie.y,ie.z);return{pos:ie.clone().multiplyScalar(s+oe.elev+ne),normal:ie,elev:oe.elev}},l=new Oe({color:6045222,roughness:.85}),c=new Oe({color:7758908,roughness:.9}),h=new Oe({color:16764006,emissive:16746532,emissiveIntensity:.55,roughness:.35});h.userData.animatedEmissive=!0,n.push({mat:h,dayColor:16755268,nightColor:16769160,dayEmissive:16742178,nightEmissive:16747560,dayEI:.45,nightEI:2.55,pulsePhase:1.7});const u=[],d=[],f=[],g=[],x=[];for(let L=0;L<18;L++){const B=L<6?.024:.052+L%3*.012,ne=(L<6?L/6*Math.PI*2:(L-6)/12*Math.PI*2)+U(L,4,3)*.25,ie=Math.cos(ne)*B,oe=Math.sin(ne)*B,X=o(ie,oe,5e-4),Pe=new ht().setFromUnitVectors(Wn,X.normal).multiply(new ht().setFromAxisAngle(Wn,ne+U(L,2,7))),G=(.018+U(L,5,1)*.008)*lt,K=G*1.25;x.push({pos:X.pos.clone(),normal:X.normal.clone(),qOri:Pe});const ue=new jt(G,.0016*lt,K).toNonIndexed();ue.translate(0,.0012*lt,0),ue.applyQuaternion(Pe),ue.translate(X.pos.x,X.pos.y,X.pos.z),u.push(ue);for(let ge=-1;ge<=1;ge+=2){const Se=new Cn([new w(ge*G*.48,-.0015*lt,-K*.72),new w(ge*G*.56,8e-4*lt,0),new w(ge*G*.48,-.0015*lt,K*.72)]),_e=new Dn(Se,8,.0014*lt,5,!1).toNonIndexed();_e.applyQuaternion(Pe),_e.translate(X.pos.x,X.pos.y,X.pos.z),u.push(_e)}const J=G*.65,fe=new Kt(.001,G*.56,J,8,1);fe.scale(.95,1,1.25),fe.translate(0,J*.5+.0018*lt,0);const ve=fe.toNonIndexed();ve.applyQuaternion(Pe),ve.translate(X.pos.x,X.pos.y,X.pos.z),d.push(ve);for(let ge=0;ge<(L%2===0?2:1);ge++){const Se=ge===0?1:-1,_e=new Kt(4e-4*lt,6e-4*lt,.007*lt,5).toNonIndexed();_e.translate(Se*G*.45,.004*lt,K*.52),_e.applyQuaternion(Pe),_e.translate(X.pos.x,X.pos.y,X.pos.z),u.push(_e);const De=new nn(.0014*lt,6,5).toNonIndexed();De.translate(Se*G*.45,.008*lt,K*.52),De.applyQuaternion(Pe),De.translate(X.pos.x,X.pos.y,X.pos.z),f.push(De)}L<14&&g.push({basePos:X.pos.clone().add(new w(G*.72,-2e-4*lt,0).applyQuaternion(Pe)),normal:X.normal.clone(),qOri:Pe,phase:L*.9})}for(let L=0;L<x.length;L++){const B=x[L],ne=L<5?L+1:L===5?0:L<17?L+1:6,ie=x[ne],oe=B.pos.distanceTo(ie.pos);if(oe>.005*lt&&oe<.16*lt){const X=B.pos.clone().add(ie.pos).multiplyScalar(.5).normalize().multiplyScalar(s+9e-4),Pe=new jt(.0045*lt,.0011*lt,oe).toNonIndexed(),G=ie.pos.clone().sub(B.pos).normalize(),K=X.clone().normalize(),ue=new w().crossVectors(K,G).normalize();G.crossVectors(ue,K).normalize();const J=new tt().makeBasis(ue,K,G);J.setPosition(X),Pe.applyMatrix4(J),u.push(Pe)}}const m=new ot(Lt(u,!1),l);m.name="Pandora_Metkayina_Rafts_And_Walkways";const p=new ot(Lt(d,!1),c);p.name="Pandora_Metkayina_Woven_Huts";const M=new ot(Lt(f,!1),h);M.name="Pandora_Metkayina_Torches",r.add(m,p,M);const y=new pn(.0022*lt,.022*lt,6);y.rotateX(Math.PI*.5),y.scale(1,.45,1);const _=new ct(y,l,g.length);_.name="Pandora_Metkayina_Moored_Canoes",r.add(_);const{fanGeo:A,tubeGeo:C,anemoneGeo:S}=av(),E=[{name:"Pandora_Reef_Corals_CyanFans",geo:A,dayCol:2517860,nightCol:62975,nightEm:65512,matrices:[]},{name:"Pandora_Reef_Corals_MagentaTubes",geo:C,dayCol:9192546,nightCol:16725168,nightEm:16720544,matrices:[]},{name:"Pandora_Reef_Corals_CoralAnemones",geo:S,dayCol:10379322,nightCol:16742436,nightEm:16736792,matrices:[]}],v=new Dt;for(let L=0;L<1050;L++){const B=U(L,3,19)*Math.PI*2,ne=Math.sqrt(U(L,7,13))*.165,ie=a(Math.cos(B)*ne,Math.sin(B)*ne,0);if(ie.elev>=-.002)continue;const oe=(.009+U(L,5,11)*.016)*lt;v.position.copy(ie.pos),v.quaternion.setFromUnitVectors(Wn,ie.normal),v.rotateY(U(L,2,7)*Math.PI*2),v.scale.set(oe,oe,oe),v.updateMatrix(),E[L%3].matrices.push(v.matrix.clone())}E.forEach((L,B)=>{if(L.matrices.length===0)return;const ne=new Oe({color:L.dayCol,emissive:L.nightEm,emissiveIntensity:0,roughness:.55,side:qt});ne.userData.animatedEmissive=!0,n.push({mat:ne,dayColor:L.dayCol,nightColor:L.nightCol,dayEmissive:1057304,nightEmissive:L.nightEm,dayEI:0,nightEI:2.15,pulsePhase:B*1.4});const ie=new ct(L.geo,ne,L.matrices.length);ie.name=L.name,L.matrices.forEach((oe,X)=>ie.setMatrixAt(X,oe)),ie.instanceMatrix.needsUpdate=!0,r.add(ie)});const b=[];for(let L=0;L<720;L++){const B=U(L,11,5)*Math.PI*2,ne=Math.sqrt(U(L,4,17))*.155,ie=a(Math.cos(B)*ne,Math.sin(B)*ne,0);if(ie.elev>=-.014)continue;const oe=Math.abs(ie.elev),X=Math.min(oe*.85,(.04+U(L,9,2)*.06)*lt),Pe=(.012+U(L,6,8)*.012)*lt;v.position.copy(ie.pos),v.quaternion.setFromUnitVectors(Wn,ie.normal),v.rotateY(U(L,1,3)*Math.PI*2),v.scale.set(Pe,X,Pe),v.updateMatrix(),b.push(v.matrix.clone())}const P={uTime:{value:0}},N=new Oe({color:1730632,emissive:55450,emissiveIntensity:0,roughness:.55,side:qt});if(N.userData.animatedEmissive=!0,N.onBeforeCompile=L=>{L.uniforms.uTime=P.uTime,L.vertexShader=`uniform float uTime;
`+L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float swayAmp = position.y * 0.14;
        transformed.x += sin(uTime * 1.45 + position.y * 6.0) * swayAmp;
        transformed.z += cos(uTime * 1.2 + position.y * 5.0) * swayAmp;`)},n.push({mat:N,dayColor:1730632,nightColor:541256,dayEmissive:798238,nightEmissive:57512,dayEI:0,nightEI:1.05}),b.length>0){const L=new ct(lv(),N,b.length);L.name="Pandora_Reef_Giant_Kelp",b.forEach((B,ne)=>L.setMatrixAt(ne,B)),L.instanceMatrix.needsUpdate=!0,r.add(L)}const D=[];for(let L=0;L<32;L++){const B=U(L,8,21)*Math.PI*2,ne=Math.sqrt(U(L,2,13))*.145,ie=o(Math.cos(B)*ne,Math.sin(B)*ne,-.001),oe=.095,X=new Kt(.008*lt,.028*lt,oe,8,1,!0);X.translate(0,-oe*.5,0);const Pe=X.toNonIndexed(),G=new ht().setFromUnitVectors(Wn,ie.normal),K=new ht().setFromEuler(new zn(.18,U(L,3,5)*6.28,.12));Pe.applyQuaternion(G.multiply(K)),Pe.translate(ie.pos.x,ie.pos.y,ie.pos.z),D.push(Pe)}const z=new An({color:new le(.32,.95,1),transparent:!0,opacity:0,depthWrite:!1,blending:fn,side:qt}),O=new ot(Lt(D,!1),z);O.name="Pandora_Reef_Underwater_Caustics",O.visible=!1,r.add(O);const k=new Dt;return{group:r,update(L,B,ne){P.uTime.value=L;for(let ie=0;ie<g.length;ie++){const oe=g[ie],X=Math.sin(L*2.1+oe.phase)*45e-5*lt,Pe=Math.sin(L*1.6+oe.phase)*.06;k.position.copy(oe.basePos).addScaledVector(oe.normal,X),k.quaternion.copy(oe.qOri),k.rotateZ(Pe),k.scale.set(1,1,1),k.updateMatrix(),_.setMatrixAt(ie,k.matrix)}if(_.instanceMatrix.needsUpdate=!0,ne>.01){const ie=.78+.22*Math.sin(L*2.4),oe=Z.lerp(.28,.08,B);z.opacity=ne*oe*ie,O.visible=z.opacity>.005}else O.visible=!1}}}const Me=1/3.5,un=new w(0,1,0),zl=new ht().setFromUnitVectors(un,new w(0,Math.cos(Z.degToRad(68)),Math.sin(Z.degToRad(68))).normalize()),kl=Ol([0,Math.cos(Z.degToRad(68)),Math.sin(Z.degToRad(68))]),ul=[{id:"valley_lake",dir:new w(-.08,.992,.095).normalize(),angRad:.055,waterElev:.0022},{id:"east_lake",dir:new w(.42,.78,.46).normalize(),angRad:.062,waterElev:.0025},{id:"west_lake",dir:new w(-.56,.62,-.55).normalize(),angRad:.06,waterElev:.0024},{id:"south_lake",dir:new w(.28,-.68,-.68).normalize(),angRad:.065,waterElev:.0025},{id:"equator_lake",dir:new w(-.78,.14,.61).normalize(),angRad:.058,waterElev:.0024}],ga=new w,no=new w;function uv(s,e,t,n=0){const i=Math.sin(e),r=i*Math.cos(t),o=Math.cos(e),a=i*Math.sin(t),l=s+n;return{pos:new w(l*r,l*o,l*a),normal:new w(r,o,a)}}function ui(s,e,t,n=zl,i=kl,r=4){ga.set(s,e,t).normalize(),no.copy(ga).applyQuaternion(n).normalize();const o=no.x,a=no.y,l=no.z,{cont:c,ridge:h,highlandRidge:u,craterDepression:d,ashFactor:f,reefFactor:g,forestClump:x}=Bl(o,a,l,i,r);let m=0,p=0;for(let _=0;_<ul.length;_++){const A=ul[_],C=ga.dot(A.dir);if(C>.992){const S=Math.acos(Z.clamp(C,-1,1));if(S<A.angRad){const E=1-S/A.angRad;m=Math.max(m,E*E*(3-2*E)),p=A.waterElev}}}let M=0,y="ocean";if(c<=0){const _=Z.smoothstep(c,-.34,-.02),A=Nt(o*19,a*19,l*19)*.008,C=-.135*(.45+.55*Math.max(.45,g));M=Z.lerp(C,-.0012,_)+A*(1-_*.5),g>.2&&(M=Math.min(M,-.018-(1-_)*.11)),y=c>-.18||g>.25?"reef":"ocean"}else{const _=Nt(o*9+1.2,a*9,l*9)*.12,A=Nt(o*9,a*9+2.4,l*9)*.12,C=Ji((o+_)*14+3.1,a*14-1.4,(l+A)*14+2.7,4),S=Math.abs(Nt(o*36,a*36,l*36))*.0025,E=Z.smoothstep(c,0,.14),v=Z.smoothstep(u,.025,.16)*.014,b=f*(.0075+Math.pow(Math.max(0,h),1.8)*.014);M=E*.0018+Math.max(0,C*.52+.34)*.0075*E+S*E+v+b-d,m>.01&&(M=Z.lerp(M,p-.0038,m)),M=Math.max(4e-4,M),f>.26?y="ash":m>.45?y="lake":u>.032?y="canyon":c<.075?y="archipelago":y="forest"}return{cont:c,ridge:h,highlandRidge:u,ashFactor:f,reefFactor:g,forestClump:x,lakeBlend:m,lakeWaterElev:p,elev:M,biome:y,sx:o,sy:a,sz:l}}function sr(s,e,t,n=0,i=null){const r=i?.qCap||zl,o=i?.sphereLandmarks||kl;return ui(s,e,t,r,o,3).elev}function vi(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new w(1,0,0):new w(0,0,1),n=new w().crossVectors(e,t).normalize(),i=new w().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Fi(s,e,t,n,i,r,o){const a=e.upDir.clone().addScaledVector(e.e1,t).addScaledVector(e.e2,n).normalize(),l=ui(a.x,a.y,a.z,r,o,3).elev;return{pos:a.clone().multiplyScalar(s+l+i),normal:a,elev:l}}function dv(s,e=null){const t=e?.qCap||zl,n=e?.sphereLandmarks||kl,i=[{anchor:new w(0,1,0),span:.24,angle:.55,amp:.045,steps:42},{anchor:new w(.14,.985,.09).normalize(),span:.2,angle:-1.1,amp:.038,steps:32},{anchor:Bt[2].capDir.clone(),span:.26,angle:.8,amp:.042,steps:36},{anchor:Bt[3].capDir.clone(),span:.24,angle:2.1,amp:.04,steps:36},{anchor:Bt[4].capDir.clone(),span:.24,angle:-.7,amp:.042,steps:36},{anchor:new w(-.75,.35,.56).normalize(),span:.24,angle:1.4,amp:.04,steps:32},{anchor:new w(.68,-.45,-.58).normalize(),span:.24,angle:-2,amp:.04,steps:32}],r=[];for(const o of i){const a=vi(o.anchor),l=Math.cos(o.angle),c=Math.sin(o.angle),h=[];for(let u=0;u<=o.steps;u++){const d=u/o.steps,f=(d-.5)*o.span,g=Math.sin(d*Math.PI*2.4)*o.amp,x=f*l-g*c,m=f*c+g*l,p=Fi(s,a,x,m,55e-5,t,n);h.push({theta:Math.acos(Z.clamp(p.normal.y,-1,1)),phi:Math.atan2(p.normal.z,p.normal.x),...p})}r.push(h)}return r}function es(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.hypot(i,r,o);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,r/a,o/a)}return t.needsUpdate=!0,s}function _i(s,e){const t=s.index?s.toNonIndexed():s,n=new le(e),i=t.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return t.setAttribute("color",new vt(r,3)),t}function fv(){const s=[],e=new Kt(.032,.14,1,6,1);e.translate(0,.5,0),s.push(_i(e,4600354));const t=[{y:.44,rad:.34,h:.14,col:1793067},{y:.62,rad:.3,h:.13,col:2254896},{y:.78,rad:.24,h:.12,col:2782774},{y:.93,rad:.16,h:.11,col:3506749}];for(const i of t){const r=new pn(i.rad,i.h,7);r.translate(0,i.y,0),s.push(_i(r,i.col))}const n=Lt(s,!1);return n.computeVertexNormals(),es(n,1)}function pv(){const s=[],e=new Cn([new w(0,0,0),new w(.08,.32,.04),new w(-.05,.68,-.05),new w(.03,.96,.02)]);s.push(_i(new Dn(e,6,.068,5,!1),4140576));for(let i=0;i<4;i++){const r=i/4*Math.PI*2+.4,o=new Cn([new w(Math.cos(r)*.04,.34,Math.sin(r)*.04),new w(Math.cos(r)*.18,.22,Math.sin(r)*.18),new w(Math.cos(r)*.26,-.02,Math.sin(r)*.26)]);s.push(_i(new Dn(o,4,.028,4,!1),3680284))}const t=new nn(.42,8,5);t.scale(1.15,.48,1.15),t.translate(.03,.94,.02),s.push(_i(t,2517550));const n=Lt(s,!1);return n.computeVertexNormals(),es(n,1)}function mv(){const s=[],e=new Cn([new w(0,0,0),new w(.06,.38,.03),new w(.14,.78,-.02),new w(.18,1,0)]);s.push(_i(new Dn(e,6,.052,5,!1),4930344));for(let n=0;n<6;n++){const i=n/6*Math.PI*2,r=new Zn(.24,.65,1,2);r.translate(0,.32,0),r.rotateX(1.08),r.rotateY(i),r.translate(.18,.96,0),s.push(_i(r,3045940))}const t=Lt(s,!1);return t.computeVertexNormals(),es(t,1)}function gv(){const s=[];for(let t=0;t<6;t++){const n=t/6*Math.PI*2,i=new Zn(.42,.65,1,2);i.translate(0,.32,0),i.rotateX(.92+t%2*.25),i.rotateY(n),s.push(i.toNonIndexed())}const e=Lt(s,!1);return e.computeVertexNormals(),es(e,1)}function _v(){const s=[],e=new Fs(.48,0);e.scale(1.2,.65,1),e.translate(0,.22,0),s.push(_i(e,3885110));const t=new Fs(.32,0);t.scale(1,.72,1.1),t.translate(.38,.14,.24),s.push(_i(t,2774062));const n=Lt(s,!1);return n.computeVertexNormals(),n}function xv(){const s=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=new Zn(.32,1,2,3),r=i.attributes.position;for(let o=0;o<r.count;o++){const a=Z.clamp(r.getY(o)+.5,0,1),l=r.getX(o)*(1-Math.pow(a,1.4)*.85),c=-a*a*.38;r.setXYZ(o,l,a*.52,c+a*.75)}i.rotateX(.45),i.rotateY(n),i.computeVertexNormals(),s.push(i.toNonIndexed())}const e=Lt(s,!1);return e.computeVertexNormals(),es(e,1)}function Fu(){const s=[];for(let t=0;t<5;t++){const n=new pn(.24,.72,4);n.translate(0,.36,0),n.rotateX(.85),n.rotateY(t/5*Math.PI*2),s.push(n.toNonIndexed())}const e=Lt(s,!1);return e.computeVertexNormals(),e}function vv(){const s=[],e=new nn(1,10,6,0,Math.PI*2,0,Math.PI*.56);e.scale(1,.42,1),e.translate(0,.9,0),s.push(e.toNonIndexed());const t=new Kt(.14,.25,.94,6,1);t.translate(0,.47,0),s.push(t.toNonIndexed());const n=Lt(s,!1);return n.computeVertexNormals(),n}function Ou(){const s=new nn(1,10,5,0,Math.PI*2,0,Math.PI*.52);s.scale(1.05,.28,1.05),s.computeVertexNormals(),es(s,1);const e=new pn(.96,.18,10,1,!0);return e.rotateX(Math.PI),e.translate(0,-.02,0),e.computeVertexNormals(),es(e,-1),{outer:s,under:e}}function Mv(s,e,t,n){const i=new Ll(1,2),r=i.attributes.position,o=r.count,a=new Float32Array(o*3),l=new le(2055213),c=new le(2783806),h=new le(3817286),u=new le(1974824),d=new le;for(let f=0;f<o;f++){let g=r.getX(f),x=r.getY(f),m=r.getZ(f);const p=Nt(g*2.7+s*3.1,x*2.4-s,m*2.7+s*1.9),M=Nt(g*5.5+s*7.3,x*4.5,m*5.5);if(x>.15){const y=.25+(x-.15)*.22+.08*p,_=1+.18*p;g*=e*_,m*=t*_,x=n*y,d.copy(l).lerp(c,Math.max(0,M)*.65)}else{const y=Math.min(1,(.15-x)/1.15),_=Math.pow(1-y*.86,1.25),A=1+.34*p+.16*M;g*=e*_*A,m*=t*_*A,x=-n*y*(.85+.25*Math.abs(p)),d.copy(h).lerp(u,y*.72+Math.max(0,-p)*.28)}r.setXYZ(f,g,x,m),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}return i.setAttribute("color",new vt(a,3)),i.computeVertexNormals(),i}function Gl(s,e,t,n,i,r,o,a,l,c,h){const u=Fi(s,e,t,n,-.0025*Me,c,h).pos,d=Fi(s,e,i,r,-.0025*Me,c,h).pos,f=u.clone().add(d).multiplyScalar(.5).normalize(),g=u.clone().lerp(d,.26).normalize().multiplyScalar(s+o*.74),x=f.clone().multiplyScalar(s+o),m=u.clone().lerp(d,.74).normalize().multiplyScalar(s+o*.76),p=new Cn([u,g,x,m,d]),M=new Dn(p,24,a,8,!1),y=M.attributes.position,_=M.attributes.normal,A=new Float32Array(y.count*3),C=new le(3290942),S=new le(2316332),E=new le(3700796),v=new w,b=new w,P=new le;for(let N=0;N<y.count;N++){v.fromBufferAttribute(y,N),b.fromBufferAttribute(_,N);const D=Nt(v.x*220+l*3.7,v.y*220,v.z*220-l),z=Nt(v.x*520,v.y*520,v.z*520),O=v.clone().normalize(),k=Math.max(0,b.dot(O));v.addScaledVector(b,a*(.36*D+.16*z)),y.setXYZ(N,v.x,v.y,v.z),P.copy(C).lerp(S,Math.pow(k,1.25)),k>.45&&z>.2&&P.lerp(E,.48),A[N*3]=P.r,A[N*3+1]=P.g,A[N*3+2]=P.b}return M.setAttribute("color",new vt(A,3)),M.computeVertexNormals(),{geo:M,curve:p,apex:x}}function yv(s){const e=new Kt(.12,1,1,8,6);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new le(2764600),r=new le(2381356),o=new le(3568190),a=new le;for(let l=0;l<t.count;l++){let c=t.getX(l);const h=t.getY(l);let u=t.getZ(l);const d=Nt(c*3.8+s*2.1,h*4.5,u*3.8-s),f=1+.35*d;c*=f,u*=f,t.setXYZ(l,c,h,u),a.copy(i).lerp(r,Z.smoothstep(h,.22,.72)),h>.72&&d>.1&&a.lerp(o,.45),n[l*3]=a.r,n[l*3+1]=a.g,n[l*3+2]=a.b}return e.setAttribute("color",new vt(n,3)),e.computeVertexNormals(),e}function Sv(s,e){const t=[],n=[],i=new w,r=new w,o=new w;s.forEach((f,g)=>{const x=f.length,m=e[g]||.008*Me,p=[],M=[],y=[];for(let A=0;A<x;A++){const C=f[A],S=f[Math.max(0,A-1)],E=f[Math.min(x-1,A+1)];i.copy(E.pos).sub(S.pos).normalize(),o.copy(C.normal),r.crossVectors(i,o).normalize();const v=1+.22*Math.sin(A*.45+g),b=m*v,P=b*.24,N=C.pos.clone().addScaledVector(r,-b),D=C.pos.clone().addScaledVector(r,b),z=C.pos.clone().addScaledVector(r,-(b+P)).addScaledVector(o,14e-5),O=C.pos.clone().addScaledVector(r,b+P).addScaledVector(o,14e-5);p.push(N.x,N.y,N.z,D.x,D.y,D.z),M.push(z.x,z.y,z.z,N.x,N.y,N.z),y.push(D.x,D.y,D.z,O.x,O.y,O.z)}const _=A=>{const C=[];for(let E=0;E<x-1;E++){const v=E*2,b=v+1,P=v+2,N=v+3;C.push(v,b,P,b,N,P)}const S=new Pt;return S.setAttribute("position",new zt(A,3)),S.setIndex(C),S.computeVertexNormals(),S.toNonIndexed()};t.push(_(p)),n.push(_(M),_(y))});const a=Lt(t,!1),l=Lt(n,!1),c=new Oe({color:953508,emissive:35e3,emissiveIntensity:0,roughness:.1,metalness:.55,transparent:!0,opacity:.9,depthWrite:!1}),h=new Oe({color:1994328,emissive:62975,emissiveIntensity:0,roughness:.4,transparent:!0,opacity:.88,depthWrite:!1}),u=new ot(a,c);u.name="Pandora_Global_Rivers_Water";const d=new ot(l,h);return d.name="Pandora_Global_Rivers_Banks",{waterMesh:u,bankMesh:d,waterMat:c,bankMat:h}}function bv(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512),i=n.data;for(let o=0;o<512;o++)for(let a=0;a<512;a++){const l=Nt(a*.18,o*.18,2.3)*.5+.5,c=U(a,o,37),h=Math.floor(Z.clamp((.76+.24*l+.16*(c-.5))*255,130,255)),u=(o*512+a)*4;i[u]=h,i[u+1]=h,i[u+2]=h,i[u+3]=255}t.putImageData(n,0,0);const r=new mn(e);return r.colorSpace=Ut,r.wrapS=Ui,r.wrapT=Ui,r.repeat.set(42,21),r}function wv(s,e){const i=document.createElement("canvas");i.width=1024,i.height=512;const r=i.getContext("2d"),o=r.createImageData(1024,512),a=o.data,l=Bt[3].capDir,c=Bt[4].capDir,h=new w;for(let d=0;d<512;d++){const f=(d+.5)/512*Math.PI,g=Math.sin(f),x=Math.cos(f);for(let m=0;m<1024;m++){const p=(m+.5)/1024*Math.PI*2,M=-Math.cos(p)*g,y=Math.sin(p)*g;h.set(M,x,y).applyQuaternion(s);const{cont:_,ashFactor:A,reefFactor:C}=Bl(h.x,h.y,h.z,e,4);let S=0,E=0,v=0;if(A>.26&&_>0){const P=Math.pow(Math.max(0,1-Math.abs(Nt(M*18+4.1,x*18,y*18-2.3))),10);S=P*A*1,E=P*A*.28,v=P*A*.04}else if(_>0){let P=1-Math.abs(Nt(M*14+1,x*14,y*14)),N=1-Math.abs(Nt(M*36+5,x*36,y*36));P=Math.pow(Math.max(0,P),11),N=Math.pow(Math.max(0,N),14);const D=U(Math.floor(M*320),Math.floor(x*320),Math.floor(y*320))>.985?.85:0,z=Math.min(1,P*.95+N*.65+D*.55),O=Nt(M*4.5+9,x*4.5,y*4.5);O>.1?(S=z*.08,E=z*.95,v=z*1):O<-.25?(S=z*1,E=z*.42,v=z*.08):(S=z*.78,E=z*.16,v=z*1);const k=Math.acos(Z.clamp(M*l.x+x*l.y+y*l.z,-1,1));if(k<.09){const B=Math.pow(1-k/.09,1.5);S=Math.min(1,S+B*.88),E=Math.min(1,E+B*.45),v=Math.min(1,v+B*1)}const L=Math.acos(Z.clamp(M*c.x+x*c.y+y*c.z,-1,1));if(L<.09){const B=Math.pow(1-L/.09,1.6);S=Math.min(1,S+B*.95),E=Math.min(1,E+B*.22),v=Math.min(1,v+B*.78)}}else{const P=Math.max(Z.smoothstep(_,-.14,-.002),C*.65)*.78;S=P*.06,E=P*.9,v=P*1}const b=(d*1024+m)*4;a[b]=Math.min(255,S*255),a[b+1]=Math.min(255,E*255),a[b+2]=Math.min(255,v*255),a[b+3]=255}}r.putImageData(o,0,0);const u=new mn(i);return u.colorSpace=Ut,u}function Ev(s,e,t,n,i){const r=vi(e.capDir),o=Fi(s,r,0,0,-.001,t,n),a=new Ht;a.name="Pandora_Landmark_Hometree",a.position.copy(o.pos),a.quaternion.setFromUnitVectors(un,o.normal);const l=new Oe({color:3877405,emissive:337972,emissiveIntensity:0,roughness:.9});i.push({mat:l,dayColor:3877405,nightColor:1449006,dayEmissive:337972,nightEmissive:803410,dayEI:0,nightEI:.45});const c=.56*Me,h=new Kt(.065*Me,.14*Me,c,14,14,!0);h.translate(0,c*.5,0);const u=h.attributes.position;for(let _=0;_<u.count;_++){const A=u.getX(_),C=u.getY(_),S=u.getZ(_),E=C/c,v=E*2.4,b=1+.24*Math.sin(Math.atan2(S,A)*6+v),P=E<.25?1+Math.pow((.25-E)/.25,1.5)*.65:1,N=(A*Math.cos(v*.35)-S*Math.sin(v*.35))*b*P,D=(A*Math.sin(v*.35)+S*Math.cos(v*.35))*b*P;u.setXYZ(_,N,C,D)}h.computeVertexNormals(),a.add(new ot(h,l));for(let _=0;_<14;_++){const A=_/14*Math.PI*2+(U(_,3,7)-.5)*.15,C=(.14+U(_,8,2)*.09)*Me,S=(.12+U(_,5,4)*.18)*Me,E=new Cn([new w(Math.cos(A)*.06*Me,S,Math.sin(A)*.06*Me),new w(Math.cos(A)*C*.62,S*.62,Math.sin(A)*C*.62),new w(Math.cos(A)*C,-.015*Me,Math.sin(A)*C)]);a.add(new ot(new Dn(E,10,.012*Me,6,!1),l))}const d=new Oe({color:1992238,emissive:407618,emissiveIntensity:0,roughness:.65});i.push({mat:d,dayColor:1992238,nightColor:537660,dayEmissive:407618,nightEmissive:416876,dayEI:0,nightEI:.72});const f=new Oe({color:3041336,emissive:65512,emissiveIntensity:0,roughness:.35,side:qt});i.push({mat:f,dayColor:3041336,nightColor:61695,dayEmissive:1853990,nightEmissive:63743,dayEI:0,nightEI:2.25,pulsePhase:.6});const g=new Oe({color:3877405,emissive:16755256,emissiveIntensity:0,roughness:.5});i.push({mat:g,dayColor:3877405,nightColor:16762980,dayEmissive:2759184,nightEmissive:16751144,dayEI:0,nightEI:2.1,pulsePhase:1.4});const x=[.34*Me,.28*Me,.21*Me,.14*Me],m=[.34*Me,.44*Me,.53*Me,.61*Me],{outer:p,under:M}=Ou();for(let _=0;_<x.length;_++){const A=x[_],C=m[_],S=new ot(p,d);S.position.set(0,C,0),S.scale.set(A,A*.9,A),a.add(S);const E=new ot(M,f);E.position.set(0,C-.004*Me,0),E.scale.set(A*.98,A*.9,A*.98),a.add(E)}const y=new ot(new nn(.055*Me,12,8),g);return y.position.set(0,.06*Me,0),a.add(y),{group:a,anchorDir:o.normal,anchorPos:o.pos}}function Av(s,e,t,n,i){const r=vi(e.capDir),o=Fi(s,r,0,0,-5e-4,t,n),a=new Ht;a.name="Pandora_Landmark_TreeOfSouls";const l=new Oe({vertexColors:!0,emissive:2757704,emissiveIntensity:0,roughness:.85});i.push({mat:l,dayColor:16777215,nightColor:10134724,dayEmissive:1054752,nightEmissive:2497092,dayEI:0,nightEI:.45});for(let _=0;_<7;_++){const A=_/7*Math.PI*2,C=A+Math.PI*.88,S=.072,{geo:E}=Gl(s,r,Math.cos(A)*S,Math.sin(A)*S,Math.cos(C)*S,Math.sin(C)*S,(.145+_%3*.025)*Me,.011*Me,50+_,t,n);a.add(new ot(E,l))}const c=new Ht;c.position.copy(o.pos),c.quaternion.setFromUnitVectors(un,o.normal),a.add(c);const h=new Oe({color:2975798,emissive:9058559,emissiveIntensity:0,roughness:.72});i.push({mat:h,dayColor:2975798,nightColor:1976408,dayEmissive:1194016,nightEmissive:7746303,dayEI:0,nightEI:1.45,pulsePhase:2.1}),c.add(new ot(new Kt(.18*Me,.2*Me,.004*Me,24),h));const u=new Oe({color:10392232,emissive:8409296,emissiveIntensity:.05,roughness:.7});i.push({mat:u,dayColor:9274e3,nightColor:12759280,dayEmissive:4734036,nightEmissive:9459967,dayEI:.05,nightEI:1.1});const d=.25*Me,f=new Kt(.024*Me,.055*Me,d,10,8);f.translate(0,d*.5,0),c.add(new ot(f,u));const g=new nn(.13*Me,12,8);g.scale(1.25,.35,1.25),g.translate(0,d*.96,0),c.add(new ot(g,u));const x=340,m=new Kt(.0014*Me,5e-4*Me,1,4,1);m.translate(0,-.5,0);const p=new Oe({color:14076140,emissive:15120639,emissiveIntensity:.06,roughness:.28,transparent:!0,opacity:.92});i.push({mat:p,dayColor:14076140,nightColor:16777215,dayEmissive:12560604,nightEmissive:14456575,dayEI:.06,nightEI:2.35,pulsePhase:.2});const M=new ct(m,p,x);M.name="Pandora_TreeOfSouls_Filaments";const y=new Dt;for(let _=0;_<x;_++){const A=U(_,4,17)*Math.PI*2,C=(.015+Math.sqrt(U(_,8,11))*.135)*Me,S=(.08+U(_,3,19)*.13)*Me;y.position.set(Math.cos(A)*C,d*.95,Math.sin(A)*C),y.rotation.set((U(_,1,5)-.5)*.14,A,(U(_,2,7)-.5)*.14),y.scale.set(1,S,1),y.updateMatrix(),M.setMatrixAt(_,y.matrix)}return M.instanceMatrix.needsUpdate=!0,c.add(M),{group:a,anchorDir:o.normal,anchorPos:o.pos}}function Tv(s,e,t,n,i,r,o){const a=vi(e.capDir),l=new Ht;l.name="Pandora_Landmark_HallelujahMountains";const c=new Oe({vertexColors:!0,emissive:404528,emissiveIntensity:0,roughness:.86,metalness:.06});i.push({mat:c,dayColor:16777215,nightColor:6455448,dayEmissive:795668,nightEmissive:669766,dayEI:0,nightEI:.52});const h=new An({color:new le(.85,.96,1),transparent:!0,opacity:.56,side:qt,depthWrite:!1});i.push({mat:h,dayColorRGB:[.82,.95,1],nightColorRGB:[.42,1.75,2.3],isWaterfall:!0});const u=[],d=32;for(let x=0;x<d;x++){const m=x===0?0:.03+Math.sqrt(U(x,4,11))*.14,p=x*2.39996+U(x,7,3)*.45,M=(x===0?.24:.078+U(x,9,2)*.21)*Me,y=Fi(s,a,Math.cos(p)*m,Math.sin(p)*m,M,t,n),_=(x===0?.095:.036+U(x,2,5)*.056)*Me,A=_*(.72+U(x,5,8)*.45),C=(x===0?.145:.052+U(x,6,1)*.082)*Me,S=Mv(x+1,_,A,C),E=new ot(S,c);E.position.copy(y.pos),E.quaternion.setFromUnitVectors(un,y.normal),E.rotateY(U(x,1,8)*Math.PI*2),l.add(E),u.push({pos:y.pos,normal:y.normal,rx:_,rz:A,h:C,alt:M});for(let v=0;v<7;v++){const b=U(x,v,14)*Math.PI*2,P=.25+U(x,v,2)*.55,N=new w(Math.cos(b)*_*P,-C*.34,Math.sin(b)*A*P).applyQuaternion(E.quaternion);o.push({pos:y.pos.clone().add(N),normal:y.normal,length:(.016+U(x,v,8)*.036)*Me})}if(x<15){const v=M+.015*Me,b=(.0065+U(x,12,4)*.0075)*Me,P=new Zn(b,v,2,10),N=P.attributes.position;for(let L=0;L<N.count;L++){const B=(N.getY(L)+v*.5)/v;N.setZ(L,Math.sin((1-B)*Math.PI*.5)*.014*Me)}P.computeVertexNormals();const D=U(x,3,6)*Math.PI*2,z=new ht().setFromUnitVectors(un,y.normal),O=new w(Math.cos(D)*_*.72,0,Math.sin(D)*A*.72).applyQuaternion(z),k=new ot(P,h);k.position.copy(y.pos).add(O).addScaledVector(y.normal,-v*.5+C*.16),k.quaternion.copy(z),k.rotateY(D+Math.PI*.5),l.add(k),r.push({mesh:k,material:h,phase:x*1.17})}}const f=new Oe({color:3889196,emissive:59600,emissiveIntensity:0,roughness:.55});i.push({mat:f,dayColor:3889196,nightColor:940132,dayEmissive:1718294,nightEmissive:1114072,dayEI:0,nightEI:1.35});const g=[];for(let x=0;x<d;x++){const m=u[x];let p=-1,M=.25*Me;for(let y=x+1;y<d;y++){const _=u[y],A=m.pos.distanceTo(_.pos);A>(m.rx+_.rx)*.85&&A<M&&(M=A,p=y)}if(p>=0){const y=u[p],_=m.pos.clone().add(y.pos).multiplyScalar(.5);_.add(_.clone().normalize().multiplyScalar(-M*.18));const A=new Cn([m.pos.clone(),_,y.pos.clone()]);g.push(new Dn(A,10,.0014*Me,5,!1).toNonIndexed())}}if(g.length>0){const x=new ot(Lt(g,!1),f);x.name="Pandora_Hallelujah_VineBridges",l.add(x)}return{group:l,islandsData:u,anchorDir:a.upDir,anchorPos:a.upDir.clone().multiplyScalar(s)}}function Cv(s,e,t,n,i,r){const o=vi(e.capDir),a=new Ht;a.name="Pandora_Landmark_IkranRookery";const l=new Oe({vertexColors:!0,emissive:407620,emissiveIntensity:0,roughness:.88});i.push({mat:l,dayColor:16777215,nightColor:6453906,dayEmissive:1058840,nightEmissive:672850,dayEI:0,nightEI:.42});const c=[];return[[-.08,-.05,.08,.05,.21*Me,.015*Me],[-.06,.07,.07,-.06,.24*Me,.016*Me],[-.1,.01,.02,.09,.17*Me,.013*Me],[.01,-.09,.09,.02,.18*Me,.013*Me],[-.09,-.02,.05,.07,.15*Me,.012*Me],[-.04,-.08,.08,-.02,.16*Me,.011*Me],[-.07,.04,.03,-.07,.19*Me,.012*Me],[-.03,.08,.09,.06,.14*Me,.011*Me]].forEach(([u,d,f,g,x,m],p)=>{const{geo:M,curve:y,apex:_}=Gl(s,o,u,d,f,g,x,m,10+p,t,n),A=new ot(M,l);A.name=`Pandora_IkranRookery_Arch_${p+1}`,a.add(A),c.push({apex:_,normal:_.clone().normalize()});for(let C=0;C<14;C++){const S=y.getPoint(.2+C/13*.6),E=S.clone().normalize();r.push({pos:S.addScaledVector(E,-m*.65),normal:E,length:(.014+U(C,p,19)*.026)*Me})}}),{group:a,archCenters:c,anchorDir:o.upDir,anchorPos:o.upDir.clone().multiplyScalar(s)}}function Rv(s,e,t,n,i){const r=vi(e.capDir),o=new Ht;o.name="Pandora_Landmark_MushroomGeysers";const a=new Oe({color:3880242,emissive:55528,emissiveIntensity:0,roughness:.88});i.push({mat:a,dayColor:3880242,nightColor:1980488,dayEmissive:926246,nightEmissive:59647,dayEI:0,nightEI:1.85});const l=14,c=new Kt(.18,.95,1,9,1);c.translate(0,.5,0);const h=new ct(c,a,l);h.name="Pandora_Geyser_Vents";const u=[],d=new Dt;for(let E=0;E<l;E++){const v=E/l*Math.PI*2+U(E,3,7)*.4,b=.014+U(E,9,2)*.068,P=Fi(s,r,Math.cos(v)*b,Math.sin(v)*b,-5e-4,t,n),N=(.008+U(E,2,11)*.006)*Me,D=(.014+U(E,5,13)*.012)*Me;d.position.copy(P.pos),d.quaternion.setFromUnitVectors(un,P.normal),d.scale.set(N,D,N),d.updateMatrix(),h.setMatrixAt(E,d.matrix),u.push({basePos:P.pos.clone().addScaledVector(P.normal,D*.95),normal:P.normal.clone(),phase:U(E,6,4)*Math.PI*2,maxHeight:(.065+U(E,8,9)*.055)*Me})}h.instanceMatrix.needsUpdate=!0,o.add(h);const f=22,g=l*f,x=new Float32Array(g*3),m=new Float32Array(g*3);for(let E=0;E<g;E++)m[E*3]=.78,m[E*3+1]=.94,m[E*3+2]=1;const p=new Pt;p.setAttribute("position",new vt(x,3)),p.setAttribute("color",new vt(m,3));const M=document.createElement("canvas");M.width=64,M.height=64;const y=M.getContext("2d"),_=y.createRadialGradient(32,32,2,32,32,32);_.addColorStop(0,"rgba(255, 255, 255, 0.85)"),_.addColorStop(.45,"rgba(180, 245, 255, 0.42)"),_.addColorStop(1,"rgba(0, 0, 0, 0.0)"),y.fillStyle=_,y.fillRect(0,0,64,64);const A=new mn(M);A.needsUpdate=!0;const C=new wn({size:5.5,map:A,vertexColors:!0,transparent:!0,opacity:.48,depthWrite:!1,blending:fn,sizeAttenuation:!0}),S=new Tn(p,C);return S.name="Pandora_Geyser_Plumes",S.frustumCulled=!1,o.add(S),{group:o,geyserEmitters:u,plumeGeo:p,plumeMat:C,puffsPerGeyser:f,anchorDir:r.upDir,anchorPos:r.upDir.clone().multiplyScalar(s)}}function Pv(s,e,t,n){const i=new Ht;i.name="Pandora_Inland_Lakes_And_Lilies";const r=[],o=[],a=[],l=[],c=new Dt;ul.forEach((_,A)=>{const C=vi(_.dir),S=s+_.waterElev,E=8,v=20,b=[],P=[];for(let D=0;D<=E;D++){const O=D/E*_.angRad*.82;for(let k=0;k<=v;k++){const L=k/v*Math.PI*2,B=C.upDir.clone().addScaledVector(C.e1,Math.cos(L)*O).addScaledVector(C.e2,Math.sin(L)*O).normalize();b.push(B.x*S,B.y*S,B.z*S)}}for(let D=0;D<E;D++)for(let z=0;z<v;z++){const O=D*(v+1)+z,k=O+(v+1);P.push(O,O+1,k,O+1,k+1,k)}const N=new Pt;N.setAttribute("position",new zt(b,3)),N.setIndex(P),N.computeVertexNormals(),r.push(N.toNonIndexed());for(let D=0;D<108;D++){const z=U(D,A+3,19)*Math.PI*2,O=Math.sqrt(U(D,A+7,11))*_.angRad*.72,k=C.upDir.clone().addScaledVector(C.e1,Math.cos(z)*O).addScaledVector(C.e2,Math.sin(z)*O).normalize(),L=(.0045+U(D,A+1,5)*.006)*Me;c.position.copy(k).multiplyScalar(S+18e-5),c.quaternion.setFromUnitVectors(un,k),c.rotateY(U(D,2,9)*Math.PI*2),c.scale.set(L,L,L),c.updateMatrix(),o.push(c.matrix.clone());const B=L*.65;c.position.copy(k).multiplyScalar(S+38e-5),c.scale.set(B,B,B),c.updateMatrix(),D%2===0?a.push(c.matrix.clone()):l.push(c.matrix.clone())}});const h=new Oe({color:955050,emissive:35e3,emissiveIntensity:0,roughness:.08,metalness:.62,transparent:!0,opacity:.88,depthWrite:!1});n.push({mat:h,dayColor:955050,nightColor:279638,dayEmissive:546924,nightEmissive:39116,dayEI:0,nightEI:1.05});const u=new ot(Lt(r,!1),h);u.name="Pandora_Global_Inland_Lakes",i.add(u);const d=new Kt(1,.92,.08,12,1,!1,.25,Math.PI*1.85);d.translate(0,.04,0);const f=new Oe({color:2387512,emissive:55448,emissiveIntensity:0,roughness:.52});n.push({mat:f,dayColor:2387512,nightColor:803904,dayEmissive:1062936,nightEmissive:57498,dayEI:0,nightEI:1.35,pulsePhase:1.3});const g=new ct(d,f,o.length);g.name="Pandora_Giant_WaterLilies_Pads",g.frustumCulled=!1,o.forEach((_,A)=>g.setMatrixAt(A,_)),g.instanceMatrix.needsUpdate=!0,i.add(g);const x=Fu(),m=new Oe({color:14184610,emissive:16726200,emissiveIntensity:0,roughness:.35}),p=new Oe({color:5425368,emissive:62975,emissiveIntensity:0,roughness:.35});n.push({mat:m,dayColor:14184610,nightColor:16732872,dayEmissive:4726840,nightEmissive:16723632,dayEI:0,nightEI:2.35,pulsePhase:.4}),n.push({mat:p,dayColor:5425368,nightColor:3735551,dayEmissive:1853520,nightEmissive:62975,dayEI:0,nightEI:2.35,pulsePhase:2});const M=new ct(x,m,a.length);M.name="Pandora_Giant_WaterLilies_PinkFlowers",M.frustumCulled=!1,a.forEach((_,A)=>M.setMatrixAt(A,_)),M.instanceMatrix.needsUpdate=!0;const y=new ct(x,p,l.length);return y.name="Pandora_Giant_WaterLilies_TurqFlowers",y.frustumCulled=!1,l.forEach((_,A)=>y.setMatrixAt(A,_)),y.instanceMatrix.needsUpdate=!0,i.add(M,y),i}function Iv(s){const e=s.localRadius,t=s.capLocalDir?s.capLocalDir.clone().normalize():new w(0,1,0),n=new ht().setFromUnitVectors(un,t),i=Ol([t.x,t.y,t.z]),r={qCap:n,sphereLandmarks:i},o=new Ht;o.name="Pandora_Global_360_World";const a=[],l=(Y,pe,Le)=>ui(Y,pe,Le,n,i,4),c=new nn(e,192,128),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),f=new le(206392),g=new le(2668216),x=new le(8162904),m=new le(1794604),p=new le(3823656),M=new le(3488574),y=new le(1776156),_=new le,A=new w;for(let Y=0;Y<u;Y++){A.set(h.getX(Y),h.getY(Y),h.getZ(Y)).normalize();const{cont:pe,highlandRidge:Le,ashFactor:me,elev:Ze}=ui(A.x,A.y,A.z,n,i,4);if(h.setXYZ(Y,A.x*(e+Ze),A.y*(e+Ze),A.z*(e+Ze)),pe<=0){const Ee=Z.smoothstep(pe,-.28,0);_.copy(f).lerp(g,Ee)}else{const Ee=Nt(A.x*22+3,A.y*22,A.z*22)*.5+.5;_.copy(x).lerp(m,Z.smoothstep(pe,0,.075)),_.lerp(p,Ee*.55),Le>.02&&_.lerp(M,Math.min(.88,Le*4)),me>.05&&_.lerp(y,Math.min(1,me*1.15))}d[Y*3]=_.r,d[Y*3+1]=_.g,d[Y*3+2]=_.b}c.setAttribute("color",new vt(d,3)),c.computeVertexNormals();const C=bv(),S=wv(n,i),E=new Oe({map:C,vertexColors:!0,emissiveMap:S,emissive:new le(1,1,1),emissiveIntensity:0,roughness:.88,metalness:.04});a.push({mat:E,dayColor:16777215,nightColor:4346468,dayEmissive:16777215,nightEmissive:16777215,dayEI:0,nightEI:1.65});const v=new ot(c,E);v.name="Pandora_Global_Terrain_360",o.add(v);const b=new Oe({color:754846,emissive:35512,emissiveIntensity:0,roughness:.12,metalness:.52,transparent:!0,opacity:.72,depthWrite:!1,side:qt});a.push({mat:b,dayColor:754846,nightColor:209478,dayEmissive:284780,nightEmissive:35e3,dayEI:0,nightEI:.72});const P=new ot(new nn(e,112,72),b);P.name="Pandora_Global_Crystal_Ocean",o.add(P);const N=dv(e,r),D=[.011*Me,.007*Me,.008*Me,.0085*Me,.008*Me,.0075*Me,.0075*Me],{waterMesh:z,bankMesh:O,waterMat:k,bankMat:L}=Sv(N,D);o.add(z,O);const B=[{waterMat:k,bankMat:L,phase:.4}],ne=Pv(e,n,i,a);o.add(ne);const ie=[],oe=[],X=new Dt,Pe=Ev(e,Bt[0],n,i,a),G=Tv(e,Bt[1],n,i,a,oe,ie),K=Cv(e,Bt[2],n,i,a,ie),ue=Av(e,Bt[3],n,i,a),J=Rv(e,Bt[4],n,i,a),fe=cv(e,Bt[5],l,a),ve=hv(e,Bt[6],l,a);o.add(Pe.group,G.group,K.group,ue.group,J.group,fe.group,ve.group);const ge=vi(Bt[0].capDir),Se=new Oe({vertexColors:!0,roughness:.88}),_e=[...K.archCenters];[[-.02,.05,.07,-.04,.14*Me,.011*Me],[-.07,-.03,.03,.07,.13*Me,.01*Me]].forEach(([Y,pe,Le,me,Ze,Ee],Ae)=>{const{geo:mt,apex:st}=Gl(e,ge,Y,pe,Le,me,Ze,Ee,30+Ae,n,i),ye=new ot(mt,Se);ye.name=`Pandora_Valley_Arch_${Ae+1}`,o.add(ye),_e.push({apex:st,normal:st.clone().normalize()})}),_e.push({apex:Pe.anchorPos,normal:Pe.anchorDir}),_e.push({apex:G.anchorPos,normal:G.anchorDir});const De=new Kt(34e-5*Me,12e-5*Me,1,4,1);De.translate(0,-.5,0);const V=new Oe({color:3894837,emissive:2293720,emissiveIntensity:0,roughness:.42});a.push({mat:V,dayColor:3894837,nightColor:59647,dayEmissive:1719834,nightEmissive:2162648,dayEI:0,nightEI:1.95,pulsePhase:.9});const Et=new ct(De,V,ie.length);Et.name="Pandora_Global_Hanging_Vines",Et.frustumCulled=!1,ie.forEach((Y,pe)=>{X.position.copy(Y.pos),X.quaternion.setFromUnitVectors(un,Y.normal),X.scale.set(1,Y.length,1),X.updateMatrix(),Et.setMatrixAt(pe,X.matrix)}),Et.instanceMatrix.needsUpdate=!0,o.add(Et);const Xe=[],nt=[],Ge=[],gt=[],Ve=[],I=[],T=[],j=[],he=[],de=[],ae=[],Ne=[],Te=[],Ue=[],ft=[],se=[],be=[],Ke=[],je=[],Fe=[],ut=[],Qe=[],bt=new le,W=Y=>(bt.setHSL(.28+(Y-.5)*.14,.35+Y*.25,.72+Y*.42),bt.clone());for(let Y=0;Y<64;Y++){const pe=G.islandsData[Y%G.islandsData.length],Le=U(Y,2,13)*Math.PI*2,me=Math.sqrt(U(Y,5,2))*.52,Ze=new w(Math.cos(Le)*pe.rx*me,pe.h*.28,Math.sin(Le)*pe.rz*me),Ee=new ht().setFromUnitVectors(un,pe.normal);Ze.applyQuaternion(Ee);const Ae=pe.pos.clone().add(Ze),mt=(.018+U(Y,8,4)*.022)*Me,st=mt*.65;X.position.copy(Ae),X.quaternion.copy(Ee),X.rotateY(U(Y,9,9)*Math.PI*2),X.scale.set(mt,mt,mt),X.updateMatrix(),Xe.push(X.matrix.clone()),nt.push(W(U(Y,3,5))),X.position.copy(Ae).addScaledVector(pe.normal,mt*.92),X.scale.set(st,st,st),X.updateMatrix(),Ge.push(X.matrix.clone()),(Y%2===0?gt:Ve).push(X.matrix.clone())}const Ie=(1+Math.sqrt(5))*.5,re=44e3,ce=new w,Re=new w,Ce=new ht,$e=new w,It=new w,Wt=new w;for(let Y=0;Y<re;Y++){const pe=1-(Y+.5)/re*2,Le=Math.sqrt(Math.max(0,1-pe*pe)),me=2*Math.PI*Y/Ie+(U(Y,3,17)-.5)*.028;ce.set(Math.cos(me)*Le,pe,Math.sin(me)*Le).normalize();const{cont:Ze,highlandRidge:Ee,ashFactor:Ae,forestClump:mt,lakeBlend:st,elev:ye,biome:$}=ui(ce.x,ce.y,ce.z,n,i,3),We=U(Y,11,29),at=U(Y,19,7),Je=U(Y,23,13);if($==="reef"){if(Qe.length<520&&We<.14&&ye>-.015){Re.copy(ce).multiplyScalar(e+ye-2e-4),Ce.setFromUnitVectors(un,ce),X.position.copy(Re),X.quaternion.copy(Ce),X.rotateY(at*Math.PI*2);const Tt=(.007+at*.013)*Me;X.scale.set(Tt,Tt*.45,Tt*.85),X.updateMatrix(),Qe.push(X.matrix.clone())}continue}if($==="ocean"||$==="lake"||st>.35||Ae>.22||ce.distanceTo(Bt[3].capDir)<.036)continue;if(Re.copy(ce).multiplyScalar(e+ye),Ce.setFromUnitVectors(un,ce),$==="canyon"&&ut.length<340&&Ee>.038&&We<.24){X.position.copy(ce).multiplyScalar(e+ye-.001*Me),X.quaternion.copy(Ce),X.rotateY(at*Math.PI*2);const Tt=(.008+at*.011)*Me,gn=(.036+Je*.052)*Me;X.scale.set(Tt,gn,Tt),X.updateMatrix(),ut.push(X.matrix.clone());continue}const Ot=mt>-.04,ln=Ze<.06;if(Ot||ln&&We<.45){const Tt=.5+Math.pow(at,1.3)*1.9,gn=(Je-.5)*.16,cn=(U(Y,5,31)-.5)*.16,kn=W(Je);if(X.position.copy(Re),X.quaternion.copy(Ce),X.rotateY(at*Math.PI*2),X.rotateX(gn),X.rotateZ(cn),ln&&We<.65&&de.length<4200){const Jt=.019*Me*Tt;X.scale.set(Jt,Jt,Jt),X.updateMatrix(),de.push(X.matrix.clone()),ae.push(kn)}else{const Jt=Math.floor(We*100)%3;if(Jt===0&&Xe.length<4200){const sn=.024*Me*Tt,Co=sn*(.58+Je*.22);X.scale.set(sn,sn,sn),X.updateMatrix(),Xe.push(X.matrix.clone()),nt.push(kn),X.position.copy(Re).addScaledVector(ce,sn*.9),X.scale.set(Co,Co,Co),X.updateMatrix(),Ge.push(X.matrix.clone()),(Xe.length%2===0?gt:Ve).push(X.matrix.clone())}else if(Jt===1&&I.length<4800){const sn=.032*Me*Tt;X.scale.set(sn*.9,sn*1.35,sn*.9),X.updateMatrix(),I.push(X.matrix.clone()),T.push(kn)}else if(j.length<4500){const sn=.022*Me*Tt;X.scale.set(sn,sn,sn),X.updateMatrix(),j.push(X.matrix.clone()),he.push(kn)}else if(de.length<4200){const sn=.02*Me*Tt;X.scale.set(sn,sn,sn),X.updateMatrix(),de.push(X.matrix.clone()),ae.push(kn)}}const To=Math.abs(ce.x)<.85?un:new w(0,0,1);if(It.crossVectors(ce,To).normalize(),Wt.crossVectors(ce,It).normalize(),Ne.length<5200&&at<.58){$e.copy(ce).addScaledVector(It,(We-.5)*.008).addScaledVector(Wt,(Je-.5)*.008).normalize();const Jt=(.0075+Je*.009)*Me;X.position.copy($e).multiplyScalar(e+ye),X.quaternion.setFromUnitVectors(un,$e),X.rotateY(at*Math.PI*2),X.scale.set(Jt,Jt,Jt),X.updateMatrix(),Ne.push(X.matrix.clone()),Te.push(W(at))}if(Ue.length<3800&&Je>.48){$e.copy(ce).addScaledVector(It,(Je-.5)*.01).addScaledVector(Wt,(We-.5)*.01).normalize();const Jt=(.009+We*.011)*Me;X.position.copy($e).multiplyScalar(e+ye),X.quaternion.setFromUnitVectors(un,$e),X.rotateY(We*Math.PI*2),X.scale.set(Jt,Jt,Jt),X.updateMatrix(),Ue.push(X.matrix.clone()),ft.push(W(We))}if(se.length<1800&&We>.78){$e.copy(ce).addScaledVector(It,(at-.5)*.01).addScaledVector(Wt,(Je-.5)*.01).normalize();const Jt=(.0065+at*.01)*Me;X.position.copy($e).multiplyScalar(e+ye),X.quaternion.setFromUnitVectors(un,$e),X.rotateY(Je*Math.PI*2),X.scale.set(Jt,Jt,Jt),X.updateMatrix(),se.push(X.matrix.clone())}}else if(be.length+Ke.length<2400&&We<.25){const Tt=(.0052+at*.0062)*Me;X.position.copy(Re),X.quaternion.copy(Ce),X.rotateY(Je*Math.PI*2),X.scale.set(Tt,Tt,Tt),X.updateMatrix(),(Y%2===0?be:Ke).push(X.matrix.clone())}else if(je.length+Fe.length<1050&&We>.84){const Tt=(.01+at*.015)*Me;X.position.copy(Re),X.quaternion.copy(Ce),X.rotateY(Je*Math.PI*2),X.scale.set(Tt,Tt,Tt),X.updateMatrix(),(Y%2===0?je:Fe).push(X.matrix.clone())}}const Q=vi(Bt[4].capDir);for(let Y=0;Y<250;Y++){const pe=Math.floor(Y/4),Le=U(pe,4,17)*Math.PI*2,me=Math.sqrt(U(pe,11,3))*.095,Ze=Math.cos(Le)*me+(U(Y,2,9)-.5)*.012,Ee=Math.sin(Le)*me+(U(Y,7,5)-.5)*.012,Ae=Fi(e,Q,Ze,Ee,0,n,i),mt=(.018+U(Y,9,6)*.026)*Me;X.position.copy(Ae.pos),X.quaternion.setFromUnitVectors(un,Ae.normal),X.rotateY(U(Y,5,1)*Math.PI*2),X.scale.set(mt,mt,mt),X.updateMatrix(),(pe%2===0?je:Fe).push(X.matrix.clone())}for(let Y=0;Y<420;Y++){const pe=N[Y%N.length],Le=pe[Math.floor(U(Y,5,3)*pe.length)],me=Le.phi+(Y%2===0?1:-1)*(.008+U(Y,7,1)*.026)*Me,Ze=Z.clamp(Le.theta+(U(Y,3,8)-.5)*.018*Me,.001,Math.PI-.001),Ee=Math.sin(Ze),Ae=ui(Ee*Math.cos(me),Math.cos(Ze),Ee*Math.sin(me),n,i,3).elev,mt=uv(e,Ze,me,Ae);X.position.copy(mt.pos),X.quaternion.setFromUnitVectors(un,mt.normal),X.rotateY(U(Y,1,6)*Math.PI*2);const st=(.008+U(Y,4,9)*.01)*Me;X.scale.set(st,st,st),X.updateMatrix(),Ne.push(X.matrix.clone()),Te.push(W(U(Y,2,3)))}const we=(Y,pe,Le,me,Ze=null)=>{const Ee=new ct(pe,Le,Math.max(1,me.length));return Ee.name=Y,Ee.frustumCulled=!1,me.forEach((Ae,mt)=>{Ee.setMatrixAt(mt,Ae),Ze&&Ze[mt]&&Ee.setColorAt(mt,Ze[mt])}),Ee.instanceMatrix.needsUpdate=!0,Ze&&Ee.instanceColor&&(Ee.instanceColor.needsUpdate=!0),o.add(Ee),Ee};if(ut.length>0&&we("Pandora_Global_Canyon_Spires",yv(7),new Oe({vertexColors:!0,roughness:.88}),ut),Qe.length>0){const Y=new Oe({color:4943976,emissive:61695,emissiveIntensity:0,roughness:.72});a.push({mat:Y,dayColor:4943976,nightColor:542818,dayEmissive:1589304,nightEmissive:59647,dayEI:0,nightEI:1.75,pulsePhase:1.2}),we("Pandora_Global_Coral_Reefs",new Fs(1,0),Y,Qe)}se.length>0&&we("Pandora_Global_Mossy_Rocks",_v(),new Oe({vertexColors:!0,roughness:.9}),se);const He=new Kt(.055,.18,1,6,1);He.translate(0,.5,0);const dt=new Oe({color:4337696,roughness:.9});a.push({mat:dt,dayColor:4337696,nightColor:1446952,dayEmissive:0,nightEmissive:662570,dayEI:0,nightEI:.18}),we("Pandora_Global_Tree_Trunks",He,dt,Xe);const{outer:et,under:it}=Ou(),rt=new Oe({color:16777215,emissive:537664,emissiveIntensity:0,roughness:.68});a.push({mat:rt,dayColor:2126900,nightColor:866364,dayEmissive:667158,nightEmissive:540752,dayEI:0,nightEI:.52}),we("Pandora_Global_Canopy_Tops",et,rt,Ge,nt);const At=new Oe({color:2777650,emissive:65512,emissiveIntensity:0,roughness:.45,side:qt});a.push({mat:At,dayColor:2777650,nightColor:62975,dayEmissive:1456156,nightEmissive:65512,dayEI:0,nightEI:2.2,pulsePhase:0}),we("Pandora_Global_Canopy_Under_Turquoise",it,At,gt);const Zt=new Oe({color:3303982,emissive:16720544,emissiveIntensity:0,roughness:.45,side:qt});a.push({mat:Zt,dayColor:3303982,nightColor:16725168,dayEmissive:1719320,nightEmissive:16720544,dayEI:0,nightEI:2.15,pulsePhase:1.9}),we("Pandora_Global_Canopy_Under_Magenta",it,Zt,Ve);const Yt=new Oe({vertexColors:!0,emissive:51416,emissiveIntensity:0,roughness:.72});a.push({mat:Yt,dayColor:16777215,nightColor:5143684,dayEmissive:798236,nightEmissive:34968,dayEI:0,nightEI:.48}),we("Pandora_Global_Alien_Redwoods",fv(),Yt,I,T);const Qt=new Oe({vertexColors:!0,emissive:9455871,emissiveIntensity:0,roughness:.78});a.push({mat:Qt,dayColor:16777215,nightColor:6056066,dayEmissive:1189400,nightEmissive:5909664,dayEI:0,nightEI:.55}),we("Pandora_Global_Gnarled_Root_Trees",pv(),Qt,j,he);const yt=new Oe({vertexColors:!0,emissive:55464,emissiveIntensity:0,roughness:.72,side:qt});a.push({mat:yt,dayColor:16777215,nightColor:5013626,dayEmissive:1194008,nightEmissive:45206,dayEI:0,nightEI:.75}),we("Pandora_Global_Alien_Palms",mv(),yt,de,ae);const Xt=new Oe({color:16777215,emissive:57514,emissiveIntensity:0,roughness:.65,side:qt});a.push({mat:Xt,dayColor:2519090,nightColor:936516,dayEmissive:1192986,nightEmissive:51352,dayEI:0,nightEI:1.05,pulsePhase:1.1}),we("Pandora_Global_Broadleaf_Shrubs",gv(),Xt,Ue,ft);const Mt=new Oe({color:16777215,emissive:59548,emissiveIntensity:0,roughness:.62,side:qt});a.push({mat:Mt,dayColor:2454578,nightColor:805946,dayEmissive:1327646,nightEmissive:57498,dayEI:0,nightEI:1.25,pulsePhase:2.4}),we("Pandora_Global_Giant_Ferns",xv(),Mt,Ne,Te);const _t=Fu(),$t=new Oe({color:8796822,emissive:12728575,emissiveIntensity:0,roughness:.45});a.push({mat:$t,dayColor:8796822,nightColor:13650687,dayEmissive:3807298,nightEmissive:12071167,dayEI:0,nightEI:2.3,pulsePhase:.8}),we("Pandora_Global_Flowers_Violet",_t,$t,be);const xt=new Oe({color:13394984,emissive:16739866,emissiveIntensity:0,roughness:.45});a.push({mat:xt,dayColor:13394984,nightColor:16742946,dayEmissive:4989968,nightEmissive:16738324,dayEI:0,nightEI:2.35,pulsePhase:2.6}),we("Pandora_Global_Flowers_Orange",_t,xt,Ke);const R=vv(),H=new Oe({color:7357048,emissive:11024639,emissiveIntensity:0,roughness:.48});a.push({mat:H,dayColor:7357048,nightColor:10631935,dayEmissive:3284024,nightEmissive:9973503,dayEI:0,nightEI:2.25,pulsePhase:1.5}),we("Pandora_Global_Mushrooms_Violet",R,H,je);const te=new Oe({color:10767974,emissive:16725672,emissiveIntensity:0,roughness:.48});a.push({mat:te,dayColor:10767974,nightColor:16726186,dayEmissive:4332584,nightEmissive:16722072,dayEI:0,nightEI:2.2,pulsePhase:3.1}),we("Pandora_Global_Mushrooms_NeonPink",R,te,Fe),k.userData.animatedEmissive=!0,L.userData.animatedEmissive=!0;for(let Y=0;Y<a.length;Y++)a[Y].mat.userData=a[Y].mat.userData||{},a[Y].mat.userData.animatedEmissive=!0;const ee=new le,q=new le,xe=new le(821410),ke=new le(280664),Ye=new le(2649668),qe=new le(59647);return{group:o,waterfalls:oe,pulsingRivers:B,archCenters:_e,riverPaths:N,landmarks:Bt,samplerCtx:r,getFloorAndWaterAtDir:Y=>{const pe=ui(Y.x,Y.y,Y.z,n,i,3),Le=pe.cont<=0||pe.lakeBlend>.35,me=pe.cont<=0?0:pe.lakeBlend>.35?pe.lakeWaterElev:-1;return{terrainElev:pe.elev,waterElev:me,hasWater:Le,ashFactor:pe.ashFactor,reefFactor:pe.reefFactor,biome:pe.biome}},updateDayNight:(Y,pe,Le=0)=>{const me=Z.smoothstep(-Y,-.1,.04);for(let ye=0;ye<a.length;ye++){const $=a[ye];if($.isWaterfall){const We=.85+.15*Math.sin(pe*3.8+ye);$.mat.color.setRGB(Z.lerp($.dayColorRGB[0],$.nightColorRGB[0]*We,me),Z.lerp($.dayColorRGB[1],$.nightColorRGB[1]*We,me),Z.lerp($.dayColorRGB[2],$.nightColorRGB[2]*We,me)),$.mat.opacity=Z.lerp(.52,.72,me);continue}if($.dayColor!==void 0&&(ee.setHex($.dayColor),q.setHex($.nightColor),$.mat.color.copy(ee).lerp(q,me)),$.dayEmissive!==void 0&&(ee.setHex($.dayEmissive),q.setHex($.nightEmissive),$.mat.emissive.copy(ee).lerp(q,me)),$.dayEI!==void 0){const We=$.pulsePhase!==void 0?.9+.16*Math.sin(pe*1.7+$.pulsePhase):1;$.mat.emissiveIntensity=Z.lerp($.dayEI,$.nightEI*We,me)}}const Ze=.85+.25*Math.sin(pe*2);k.color.copy(xe).lerp(ke,me),k.emissiveIntensity=Z.lerp(0,1.15*Ze,me),L.color.copy(Ye).lerp(qe,me),L.emissiveIntensity=Z.lerp(0,2.35*Ze,me);const Ee=J.plumeGeo.attributes.position,Ae=J.plumeGeo.attributes.color,mt=J.geyserEmitters,st=J.puffsPerGeyser;for(let ye=0;ye<mt.length;ye++){const $=mt[ye];for(let We=0;We<st;We++){const at=ye*st+We,Je=(pe*.48+$.phase+We/st)%1,Ot=Je*$.maxHeight,ln=Math.sin(Je*Math.PI)*.004*Me;Ee.setXYZ(at,$.basePos.x+$.normal.x*Ot+Math.cos(at)*ln,$.basePos.y+$.normal.y*Ot,$.basePos.z+$.normal.z*Ot+Math.sin(at)*ln);const Tt=Z.lerp(.85,ye%2===0?.2:.95,me),gn=Z.lerp(.95,ye%2===0?1.45:.45,me),cn=Z.lerp(1,1.85,me);Ae.setXYZ(at,Tt,gn,cn)}}Ee.needsUpdate=!0,Ae.needsUpdate=!0,J.plumeMat.opacity=Z.lerp(.32,.65,me),fe.update(pe,me),ve.update(pe,me,Le)}}}function Lv(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new mn(s);return n.needsUpdate=!0,n}const Bu=Lv();function yh(s,e,t=350){const n=e,i=1/3.5,r=s==="p2",o=new Ht;o.name=`${s}_Urban_AV_Traffic_System`;const a=(r?.0068:.0033)*i,l=new jt(a*.55,a*.34,a*1.85),c=new Oe({color:1580068,roughness:.38,metalness:.85}),h=new ct(l,c,t),u=new jt(a*.58,a*.22,a*.55);u.translate(0,0,a*.92);const d=new An({color:s==="p4"?new le(2.4,2.8,3.2):new le(1.4,3.2,4)}),f=new ct(u,d,t),g=new jt(a*.42,a*.16,a*3.8);g.translate(0,0,-a*2.55);const x=new An({color:s==="p4"?new le(4.2,1.4,.25):new le(4.2,.85,.25),transparent:!0,opacity:.88}),m=new ct(g,x,t);o.add(h,f,m);const p=[],M=[new w(1,0,0),new w(0,0,1),new w(.707,0,.707),new w(-.707,0,.707)];for(let v=0;v<t;v++){const b=v%2===0,P=v%7,N=r?(.045+P*.13+U(v,3,7)*.08)*i:(.016+P*.022+U(v,3,7)*.012)*i,D=n+N;if(b){const z=r&&v%7===0,O=(v>>1)%14,k=r?z?.34+U(v,2,19)*.16:.028+O/13*.28+(U(v,1,9)-.5)*.015:(.035+O*.034+(U(v,1,9)-.5)*.014)*i*1.2,L=O%2===0?1:-1,B=L*(.085+U(v,5,2)*.11)/Math.max(.08,Math.sin(k));p.push({type:"ring",radius:D,theta:k,sinTheta:Math.sin(k),cosTheta:Math.cos(k),phi0:U(v,8,4)*Math.PI*2,omega:B,dir:L,bobAmp:(r?.006:.002+U(v,2,6)*.0025)*i,bobPhase:U(v,4,1)*Math.PI*2})}else{const z=v%M.length,O=r?.078:.042*1.15,k=(Math.floor(v/8)%11-5)*O*i,L=M[z],B=new ht().setFromAxisAngle(L,k),ne=v%4===1?1:-1,ie=r?.34:.52*i*1.2,oe=(U(v,6,3)*2-1)*ie,X=ne*(r?.13+U(v,9,5)*.16:(.09+U(v,9,5)*.13)*1.25)*i;p.push({type:"corridor",radius:D,qPlane:B,s0:oe,arcSpan:ie,speed:X,dir:ne,bobAmp:(r?.005:.002+U(v,7,2)*.002)*i,bobPhase:U(v,3,4)*Math.PI*2})}}const y=new w,_=new w,A=new w,C=new w,S=new tt,E=new w;return{update(v){if(!(!o.parent||!o.parent.visible)){for(let b=0;b<t;b++){const P=p[b],N=Math.sin(v*2.2+P.bobPhase)*P.bobAmp,D=P.radius+N;if(P.type==="ring"){const O=P.phi0+P.omega*v,k=Math.cos(O),L=Math.sin(O);_.set(P.sinTheta*k,P.cosTheta,P.sinTheta*L).normalize(),y.copy(_).multiplyScalar(D),A.set(-P.dir*L,0,P.dir*k).normalize(),C.crossVectors(_,A).normalize(),A.crossVectors(C,_).normalize()}else{const O=P.arcSpan*2;let k=(P.s0+P.speed*v+P.arcSpan)%O;k<0&&(k+=O);const L=k-P.arcSpan,B=Math.sin(L),ne=Math.cos(L);_.set(B,ne,0).applyQuaternion(P.qPlane).normalize(),y.copy(_).multiplyScalar(D),A.set(P.dir*ne,-P.dir*B,0).applyQuaternion(P.qPlane).normalize(),C.crossVectors(_,A).normalize()}let z=1;if(P.type==="corridor"){const O=Math.abs(Math.acos(Z.clamp(_.y,-1,1)))/P.arcSpan;z=1-Z.smoothstep(O,.85,1)}S.makeBasis(C,_,A),S.setPosition(y),z<.99&&(E.setScalar(Math.max(.01,z)),S.scale(E)),h.setMatrixAt(b,S),f.setMatrixAt(b,S),m.setMatrixAt(b,S)}h.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}},group:o}}function Dv(s){const e=[],t=[],n=[],i=[],r=[],o=(f,g)=>(f.material&&(f.material.userData=f.material.userData||{},f.material.userData.animatedEmissive=!0),{mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let a=0;s.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";a++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(o(f,a)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(o(f,a)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(o(f,a)):/NC_Neon_Sign_/.test(g)?i.push(o(f,a)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&r.push(o(f,a))});const l=f=>{if(f.length===0)return null;const g=new w;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const x=g.clone().normalize();return{parts:f,centroid:g,localUp:x}},c=[l(e),l(t)].filter(Boolean),h=new ht,u=new ht,d=new w;return{update(f,g=1){c.forEach((x,m)=>{const p=m*2.4,M=Math.sin(f*1.45+p)*1.4,y=Math.sin(f*1.15+p)*.08;for(let _=0;_<x.parts.length;_++){const A=x.parts[_],C=/Tail|Fin/i.test(A.mesh.name),S=Math.sin(f*3.1+p+_*.65)*(C?.14:.045);d.copy(A.basePos).sub(x.centroid),h.setFromAxisAngle(x.localUp,y+S),d.applyQuaternion(h),A.mesh.position.copy(x.centroid).add(d).addScaledVector(x.localUp,M),A.mesh.quaternion.copy(h).multiply(A.baseQuat),A.material&&A.material.emissiveIntensity!==void 0&&(A.material.emissiveIntensity=A.baseEmissive*(.85+.22*Math.sin(f*2.6+_*.7+p))*g)}});for(let x=0;x<n.length;x++){const m=n[x],p=Math.sin(f*1.6+m.seed*.9)*.55;m.mesh.position.copy(m.basePos).addScaledVector(m.normal,p),m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=m.baseEmissive*(.88+.16*Math.sin(f*3.4+m.seed))*g)}for(let x=0;x<i.length;x++){const m=i[x];if(!m.material||m.material.emissiveIntensity===void 0)continue;const p=.88+.14*Math.sin(f*2.2+m.seed*1.7),M=Math.sin(f*23+m.seed*7.3)>.965?.55:1;m.material.emissiveIntensity=m.baseEmissive*p*M*g}for(let x=0;x<r.length;x++){const m=r[x];m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=m.baseEmissive*(.72+.48*Math.sin(f*3.2+m.seed*.8))*g),/Hexagon_Ring|Hexagon_Spoke/i.test(m.mesh.name)&&(u.setFromAxisAngle(m.normal,f*.35*(x%2===0?1:-1)),m.mesh.quaternion.copy(u).multiply(m.baseQuat))}}}}function Nv(s){const e=[];let t=0;return s.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,n.material.userData=n.material.userData||{},n.material.userData.animatedEmissive=!0,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n,i=1){for(let r=0;r<e.length;r++){const o=e[r];if(o.material.emissiveIntensity!==void 0){const a=.78+.36*Math.sin(n*1.9-o.phase);o.material.emissiveIntensity=o.baseEmissive*a*i}}}}}function Uv(s){const e=s,t=1/3.5,n=new Ht;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,r=.0022*t,o=new jt(r*.4,r*.32,r*1.8),a=new jt(r*1.9,r*.08,r*.72);a.translate(r*.95,0,0);const l=new jt(r*1.9,r*.08,r*.72);l.translate(-r*.95,0,0);const c=new Oe({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),h=new ct(o,c,i),u=new ct(a,c,i),d=new ct(l,c,i);n.add(h,u,d);const f=[];for(let D=0;D<i;D++){const z=e+(D<55?.145+U(D,2,7)*.09:.035+U(D,4,3)*.06)*t,O=(.025+U(D,5,1)*.24)*t*1.1,k=U(D,8,9)*Math.PI*2,L=(D%3===0?-1:1)*(.28+U(D,3,6)*.28);f.push({alt:z,theta:O,phi0:k,omega:L,dir:L>=0?1:-1,flapSpeed:5.5+U(D,1,5)*3.5,flapPhase:U(D,7,2)*Math.PI*2,scaleFactor:.75+U(D,9,4)*.8})}const g=42,x=new Float32Array(g*3),m=[];for(let D=0;D<g;D++){const z=(.16+U(D,11,2)*.24)*t*1.15,O=U(D,13,5)*Math.PI*2,k=e+(.045+U(D,4,8)*.065)*t;m.push({theta:z,phi0:O,alt:k,speed:.028+U(D,6,3)*.025})}const p=new Pt;p.setAttribute("position",new vt(x,3));const M=new wn({map:Bu,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),y=new Tn(p,M);y.name="Medieval_Drifting_Cloud_Banks",n.add(y);const _=new w,A=new w,C=new w,S=new w,E=new tt,v=new tt,b=new ht,P=new w(0,0,1),N=new w;return{group:n,update(D,z=1){if(!n.parent||!n.parent.visible)return;for(let k=0;k<i;k++){const L=f[k],B=L.phi0+L.omega*D,ne=L.theta+Math.sin(D*.6+L.flapPhase)*.008,ie=L.alt+Math.sin(D*1.1+L.flapPhase)*.0018,oe=Math.sin(ne),X=Math.cos(ne),Pe=Math.cos(B),G=Math.sin(B);A.set(oe*Pe,X,oe*G).normalize(),_.copy(A).multiplyScalar(ie),C.set(-L.dir*G,0,L.dir*Pe).normalize(),S.crossVectors(A,C).normalize(),C.crossVectors(S,A).normalize(),E.makeBasis(S,A,C),E.setPosition(_),N.setScalar(L.scaleFactor),E.scale(N),h.setMatrixAt(k,E);const ue=Math.sin(D*.45+L.flapPhase)>-.25?.55:.12,J=Math.sin(D*L.flapSpeed+L.flapPhase)*ue;b.setFromAxisAngle(P,J),v.makeRotationFromQuaternion(b),v.premultiply(E),u.setMatrixAt(k,v),b.setFromAxisAngle(P,-J),v.makeRotationFromQuaternion(b),v.premultiply(E),d.setMatrixAt(k,v)}h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const O=p.attributes.position;for(let k=0;k<g;k++){const L=m[k],B=L.phi0+L.speed*D,ne=Math.sin(L.theta);O.setXYZ(k,L.alt*ne*Math.cos(B),L.alt*Math.cos(L.theta),L.alt*ne*Math.sin(B))}O.needsUpdate=!0}}}function Oi(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.hypot(i,r,o);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,r/a,o/a)}return t.needsUpdate=!0,s}function Ri(s,e,t){const n=Math.max(1e-6,s),i=new Zn(n,e,4,2);i.rotateX(-Math.PI*.5);const r=i.attributes.position;for(let o=0;o<r.count;o++){const a=Z.clamp((r.getX(o)+n*.5)/n,0,1),l=r.getZ(o),c=t*a*n,h=-Math.pow(a,1.35)*e*.85,u=1-Math.pow(a,1.6)*.78,d=Math.sin(a*Math.PI)*e*.14;r.setXYZ(o,c,d,l*u+h)}return i.computeVertexNormals(),Oi(i,1)}function Sh(s){const e=[],t=new pn(s*.34,s*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new pn(s*.18,s*.9,4);n.rotateX(Math.PI*.42),n.translate(0,s*.2,s*1.15),e.push(n.toNonIndexed());const i=new pn(s*.12,s*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-s*1.85),e.push(i.toNonIndexed());const r=Lt(e,!1);return r.computeVertexNormals(),r}function Fv(s){const e=[],t=new jt(s*.72,s*.68,s*1.55);t.translate(0,s*.95,0),e.push(t.toNonIndexed());const n=new jt(s*.36,s*.58,s*.68);n.rotateX(.45),n.translate(0,s*1.32,s*.85),e.push(n.toNonIndexed());const i=new jt(s*.92,s*.44,s*.36);i.rotateX(.28),i.translate(0,s*1.54,s*1.15),e.push(i.toNonIndexed());const r=Lt(e,!1);r.computeVertexNormals();const o=[],a=new Kt(s*.1,s*.08,s*.85,5);a.translate(s*.28,-s*.42,0);const l=a.clone();l.translate(-s*.56,0,0),o.push(a.toNonIndexed(),l.toNonIndexed());const c=Lt(o,!1);c.computeVertexNormals();const h=c.clone();return{bodyGeo:r,frontLegsGeo:c,backLegsGeo:h}}function Ov(s){const e=new nn(s*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),Oi(e,1);const t=[];for(let i=0;i<4;i++){const r=i/4*Math.PI*2,o=new Kt(s*.05,s*.012,s*1.45,4);o.translate(Math.cos(r)*s*.22,-s*.72,Math.sin(r)*s*.22),t.push(o.toNonIndexed())}const n=Lt(t,!1);return n.computeVertexNormals(),Oi(n,-1),{bellGeo:e,tentGeo:n}}function Mr(s){return s.map(e=>{const t=e.index?e.toNonIndexed():e;return t.attributes.uv&&t.deleteAttribute("uv"),t})}function Bv(s){const e=s,t=[],n=new nn(e*.42,12,10);n.scale(.88,.72,2.55),t.push(n);const i=new pn(e*.42,e*1.15,8);i.rotateX(Math.PI*.5),i.scale(1.18,.72,1),i.translate(0,e*.03,e*1.15),t.push(i),[-1,1].forEach(h=>{const u=new jt(e*.16,e*.16,e*.92);u.rotateY(h*.12),u.translate(h*e*.24,e*.2,e*.92),t.push(u);const d=new jt(e*1.55,e*.06,e*.48);d.rotateY(-h*.34),d.rotateZ(-h*.1),d.translate(h*e*.85,-e*.12,e*.18),t.push(d)});const r=new pn(e*.25,e*1.35,7);r.rotateX(-Math.PI*.5),r.translate(0,0,-e*1.35),t.push(r);const o=new jt(e*1.35,e*.05,e*.44);o.translate(0,e*.02,-e*1.98),t.push(o);const a=Lt(Mr(t),!1);a.computeVertexNormals(),Oi(a,1);const l=[];[-1,1].forEach(h=>{for(let u=0;u<4;u++){const d=new jt(e*.05,e*.07,e*.22);d.rotateY(h*.08),d.translate(h*(e*.36-u*.04*e),e*.06,e*(.72-u*.42)),l.push(d)}});const c=Lt(Mr(l),!1);return c.computeVertexNormals(),Oi(c,1),{bodyGeo:a,glowGeo:c}}function zv(s){const e=s,t=[],n=new nn(e*.24,9,7);n.scale(.85,.72,2),t.push(n);const i=new Kt(e*.07,e*.14,e*.85,6);i.rotateX(Math.PI*.42),i.translate(0,e*.12,e*.74),t.push(i);const r=new pn(e*.09,e*.36,5);r.rotateX(Math.PI*.5),r.translate(0,e*.22,e*1.24),t.push(r);const o=new pn(e*.14,e*1.15,6);o.rotateX(-Math.PI*.5),o.translate(0,-e*.02,-e*.95),t.push(o);const a=Lt(Mr(t),!1);a.computeVertexNormals(),Oi(a,1);const l=[];[-1,1].forEach(h=>{const u=new jt(e*.92,e*.04,e*.28);u.rotateY(-h*.35),u.translate(h*e*.48,-e*.05,e*.24),l.push(u);const d=new jt(e*.62,e*.035,e*.22);d.rotateY(-h*.28),d.translate(h*e*.34,-e*.06,-e*.34),l.push(d)});const c=Lt(Mr(l),!1);return c.computeVertexNormals(),Oi(c,1),{bodyGeo:a,flipperGeo:c}}function kv(s){const e=s,t=[],n=new pn(e*.24,e*.85,5);n.rotateX(Math.PI*.5),n.scale(.55,1,1),n.translate(0,0,e*.15),t.push(n);const i=new pn(e*.22,e*.42,4);i.rotateX(-Math.PI*.5),i.scale(.32,1.15,1),i.translate(0,0,-e*.44),t.push(i);const r=Lt(Mr(t),!1);return r.computeVertexNormals(),Oi(r,1),r}function Gv(s,e){const t=s,n=1/3.5,i=new Ht;i.name="Pandora_Bioluminescent_Life";const r=e?.samplerCtx||null,o=r?.qCap,a=r?.sphereLandmarks,l=F=>{const Y=F.clone().normalize(),pe=Math.abs(Y.x)<.85?new w(1,0,0):new w(0,0,1),Le=new w().crossVectors(Y,pe).normalize(),me=new w().crossVectors(Y,Le).normalize();return{normalDir:Y,e1:Le,e2:me}},c=2200,h=new Float32Array(c*3),u=new Float32Array(c*3),d=[],f=[new le(62975),new le(11553023),new le(3836159),new le(16732856)],g=(1+Math.sqrt(5))*.5,x=[];for(let F=0;F<5e3;F++){const Y=1-(F+.5)/5e3*2,pe=Math.sqrt(Math.max(0,1-Y*Y)),Le=2*Math.PI*F/g,me=Math.cos(Le)*pe,Ze=Math.sin(Le)*pe,Ee=ui(me,Y,Ze,o,a);Ee.cont>.02&&Ee.biome!=="ash"&&Ee.biome!=="lake"&&Ee.biome!=="reef"&&Ee.elev>5e-4&&x.push({dir:new w(me,Y,Ze),elev:Ee.elev,cont:Ee.cont})}x.length===0&&x.push({dir:new w(0,1,0),elev:.002,cont:.2});for(let F=0;F<c;F++){let Y,pe=.002;if(F<550){const Ze=Bt[F%5],Ee=l(Ze.capDir),Ae=U(F,7,13)*Math.PI*2,mt=Math.sqrt(U(F,3,19))*.14;Y=Ee.normalDir.clone().addScaledVector(Ee.e1,Math.cos(Ae)*mt).addScaledVector(Ee.e2,Math.sin(Ae)*mt).normalize(),pe=sr(Y.x,Y.y,Y.z,0,r)}else{const Ze=x[(F*7+Math.floor(U(F,4,11)*19))%x.length],Ee=l(Ze.dir),Ae=U(F,2,17)*Math.PI*2,mt=U(F,9,5)*.04;Y=Ee.normalDir.clone().addScaledVector(Ee.e1,Math.cos(Ae)*mt).addScaledVector(Ee.e2,Math.sin(Ae)*mt).normalize(),pe=Ze.elev}const Le=t+pe+(.005+U(F,5,11)*.19)*n;d.push({dir:Y,baseAlt:Le,driftSpeed:.025+U(F,2,7)*.035,risePhase:U(F,9,4)*Math.PI*2});const me=f[F%f.length];u[F*3]=me.r,u[F*3+1]=me.g,u[F*3+2]=me.b}const m=new Pt;m.setAttribute("position",new vt(h,3)),m.setAttribute("color",new vt(u,3));const p=new wn({size:.72,map:Bu,vertexColors:!0,transparent:!0,opacity:.16,depthWrite:!1,blending:fn,sizeAttenuation:!0}),M=new Tn(m,p);M.frustumCulled=!1,i.add(M);const y=90,_=.0054*n,A=new Oe({color:744312,emissive:55551,emissiveIntensity:.08,roughness:.42}),C=new Oe({color:43200,emissive:61695,emissiveIntensity:.1,roughness:.38,side:qt}),S=new Oe({color:944852,emissive:2132223,emissiveIntensity:.1,roughness:.42,side:qt});A.userData.animatedEmissive=!0,C.userData.animatedEmissive=!0,S.userData.animatedEmissive=!0;const E=new ct(Sh(_),A,y),v=new ct(Ri(_*2.75,_*1.1,1),C,y),b=new ct(Ri(_*2.75,_*1.1,-1),C,y),P=new ct(Ri(_*1.65,_*.75,1),S,y),N=new ct(Ri(_*1.65,_*.75,-1),S,y);[E,v,b,P,N].forEach(F=>{F.frustumCulled=!1,i.add(F)});const D=[l(Bt[0].capDir),l(Bt[1].capDir),l(Bt[2].capDir)],z=e?.archCenters||[];for(let F=0;F<z.length;F++)z[F]?.normal&&D.push(l(z[F].normal));const O=[];for(let F=0;F<y;F++){const Y=F<25?0:F<55?1:2,pe=F<60?D[Y]:D[F%D.length],Le=(.032+U(F,4,1)*.088)*n,me=t+(.055+U(F,8,5)*.17)*n,Ze=(F%3===0?-1:1)*(.4+U(F,6,3)*.34);O.push({frame:pe,orbitRad:Le,alt:me,phi0:U(F,4,2)*Math.PI*2,omega:Ze,phase:U(F,3,9)*Math.PI*2,scale:.78+U(F,5,6)*.55})}const k=4,L=.0145*n,B=new Oe({color:10884618,emissive:16727056,emissiveIntensity:.1,roughness:.4}),ne=new Oe({color:14166542,emissive:16734744,emissiveIntensity:.12,roughness:.4,side:qt});B.userData.animatedEmissive=!0,ne.userData.animatedEmissive=!0;const ie=new ct(Sh(L),B,k),oe=new ct(Ri(L*3.1,L*1.25,1),ne,k),X=new ct(Ri(L*3.1,L*1.25,-1),ne,k),Pe=new ct(Ri(L*1.85,L*.85,1),ne,k),G=new ct(Ri(L*1.85,L*.85,-1),ne,k);[ie,oe,X,Pe,G].forEach(F=>{F.frustumCulled=!1,i.add(F)});const K=[{frame:l(Bt[0].capDir),alt:t+.19*n,orbitRad:.11*n,phi0:.4,omega:.22,phase:0},{frame:l(Bt[1].capDir),alt:t+.26*n,orbitRad:.14*n,phi0:2.1,omega:-.2,phase:1.5},{frame:l(Bt[2].capDir),alt:t+.21*n,orbitRad:.12*n,phi0:3.9,omega:.21,phase:2.7},{frame:l(Bt[3].capDir),alt:t+.18*n,orbitRad:.1*n,phi0:5.1,omega:-.23,phase:.9}],ue=48,J=.0048*n,{bodyGeo:fe,frontLegsGeo:ve,backLegsGeo:ge}=Fv(J),Se=new Oe({color:3682900,emissive:1990808,emissiveIntensity:0,roughness:.68}),_e=new Oe({color:2499642,roughness:.75});Se.userData.animatedEmissive=!0;const De=new ct(fe,Se,ue),V=new ct(ve,_e,ue),Et=new ct(ge,_e,ue);[De,V,Et].forEach(F=>{F.frustumCulled=!1,i.add(F)});const Xe=x.filter(F=>F.cont>.05&&F.cont<.26),nt=Xe.length>=6?Xe:x,Ge=[];for(let F=0;F<6;F++){const Y=nt[Math.floor(F/6*nt.length)%nt.length].dir;Ge.push({...l(Y),radOffset:.022+F%3*.005,speed:(F%2===0?1:-1)*(.14+F%3*.02)})}const gt=[];for(let F=0;F<ue;F++){const Y=Ge[F%Ge.length],pe=Math.floor(F/Ge.length);gt.push({herd:Y,offsetAng:pe*.78+U(F,2,7)*.35,radialFactor:.52+U(F,5,3)*.65,phase:U(F,9,1)*Math.PI*2,scale:.85+U(F,4,8)*.38})}const Ve=240,I=.0038*n,{bellGeo:T,tentGeo:j}=Ov(I),he=new Oe({color:16047359,emissive:12735743,emissiveIntensity:.12,transparent:!0,opacity:.35,roughness:.25,depthWrite:!1,blending:fn,side:qt}),de=new An({color:new le(.85,.75,1.05),transparent:!0,opacity:.28,depthWrite:!1,blending:fn});he.userData.animatedEmissive=!0,de.userData.animatedEmissive=!0;const ae=new ct(T,he,Ve),Ne=new ct(j,de,Ve);ae.frustumCulled=!1,Ne.frustumCulled=!1,i.add(ae,Ne);const Te=[];for(let F=0;F<Ve;F++){let Y,pe,Le;if(F<75){const me=F<45?Bt[3]:Bt[0];Y=l(me.capDir);const Ze=U(F,3,15)*Math.PI*2,Ee=Math.sqrt(U(F,6,11))*.075;pe=Y.normalDir.clone().addScaledVector(Y.e1,Math.cos(Ze)*Ee).addScaledVector(Y.e2,Math.sin(Ze)*Ee).normalize(),Le=sr(pe.x,pe.y,pe.z,0,r)}else{const me=x[(F*11+Math.floor(U(F,2,13)*13))%x.length];pe=me.dir,Y=l(pe),Le=me.elev}Te.push({frame:Y,alt:t+Le+(.015+U(F,9,7)*.068)*n,phase:U(F,2,5)*Math.PI*2,scale:.72+U(F,8,3)*.78})}const Ue=Bt[6],ft=l(Ue.capDir),se=[];for(let F=0;F<1200;F++){const Y=U(F,11,29)*Math.PI*2,pe=Math.sqrt(U(F,17,7))*.34,Le=ft.normalDir.clone().addScaledVector(ft.e1,Math.cos(Y)*pe).addScaledVector(ft.e2,Math.sin(Y)*pe).normalize(),me=ui(Le.x,Le.y,Le.z,o,a,3);me.elev<-.025&&se.push({dir:Le,elev:me.elev})}se.length===0&&se.push({dir:ft.normalDir.clone(),elev:-.095});const be=5,Ke=.0145*n,{bodyGeo:je,glowGeo:Fe}=Bv(Ke),ut=new Oe({color:2508894,roughness:.42,metalness:.14}),Qe=new Oe({color:5826815,emissive:61695,emissiveIntensity:.06,roughness:.3});Qe.userData.animatedEmissive=!0;const bt=new ct(je,ut,be),W=new ct(Fe,Qe,be);bt.frustumCulled=!1,W.frustumCulled=!1,i.add(bt,W);const Ie=[];for(let F=0;F<be;F++){const Y=se[Math.floor(F/be*se.length)%se.length];Ie.push({frame:l(Y.dir),orbitRad:.055+U(F,3,19)*.065,depthRatio:.45+U(F,8,13)*.25,phi0:U(F,5,23)*Math.PI*2,omega:(F%2===0?1:-1)*(.11+U(F,2,17)*.06),phase:U(F,7,11)*Math.PI*2,scale:.85+U(F,9,4)*.42})}const re=24,ce=.0056*n,{bodyGeo:Re,flipperGeo:Ce}=zv(ce),$e=new Oe({color:1465976,emissive:51455,emissiveIntensity:.06,roughness:.35}),It=new Oe({color:2132126,emissive:2424800,emissiveIntensity:.06,roughness:.38});$e.userData.animatedEmissive=!0,It.userData.animatedEmissive=!0;const Wt=new ct(Re,$e,re),Q=new ct(Ce,It,re);Wt.frustumCulled=!1,Q.frustumCulled=!1,i.add(Wt,Q);const we=[];for(let F=0;F<re;F++){const Y=se[(F*19+3)%se.length];we.push({frame:l(Y.dir),orbitRad:.025+U(F,4,29)*.038,phi0:U(F,12,5)*Math.PI*2,omega:(F%2===0?1:-1)*(.28+U(F,6,17)*.14),phase:U(F,8,21)*Math.PI*2,scale:.78+U(F,3,14)*.48})}const He=450,dt=9,et=.002*n,it=kv(et),rt=new Oe({color:16777215,emissive:3201279,emissiveIntensity:.08,roughness:.28});rt.userData.animatedEmissive=!0;const At=new ct(it,rt,He);At.frustumCulled=!1;const Zt=[new le(2683647),new le(16757816),new le(16735912),new le(6619064),new le(6728447)];for(let F=0;F<He;F++)At.setColorAt(F,Zt[Math.floor(U(F,15,3)*Zt.length)%Zt.length]);At.instanceColor&&(At.instanceColor.needsUpdate=!0),i.add(At);const Yt=[];for(let F=0;F<dt;F++){const Y=se[(F*47+7)%se.length];Yt.push({frame:l(Y.dir),orbitRad:.022+U(F,9,13)*.035,omega:(F%2===0?1:-1)*(.22+U(F,2,19)*.12),phi0:U(F,6,31)*Math.PI*2,phase:U(F,14,7)*Math.PI*2,centerDir:new w,centerAlt:t-.035,aheadDir:new w,tangentForward:new w,tangentRight:new w})}const Qt=[];for(let F=0;F<He;F++)Qt.push({schoolIdx:F%dt,localAng:U(F,4,17)*Math.PI*2,localRad:(.0025+U(F,9,23)*.011)*(.5+.5*(F%3)),vertOff:(U(F,13,5)-.5)*.018,phase:U(F,21,11)*Math.PI*2,scale:.72+U(F,7,19)*.65});const yt=new w,Xt=new w,Mt=new w,_t=new w,$t=new w,xt=new tt,R=new tt,H=new ht,te=new ht,ee=new w(1,0,0),q=new w(0,0,1),xe=new w,ke=new w(0,1,0);new w;const Ye=(F,Y,pe,Le,me,Ze,Ee,Ae,mt,st,ye,$)=>{Mt.copy(Ee).normalize(),_t.copy(Ae).sub(Ee),_t.lengthSq()<1e-12&&_t.set(1,0,0),_t.normalize(),$t.crossVectors(Mt,_t).normalize(),_t.crossVectors($t,Mt).normalize(),xt.makeBasis($t,Mt,_t),te.setFromAxisAngle(q,$),R.makeRotationFromQuaternion(te),xt.multiply(R),xt.setPosition(Ee),xe.setScalar(ye),xt.scale(xe),Y.setMatrixAt(F,xt),H.setFromAxisAngle(q,mt),R.makeRotationFromQuaternion(H),R.premultiply(xt),pe.setMatrixAt(F,R),H.setFromAxisAngle(q,-mt),R.makeRotationFromQuaternion(H),R.premultiply(xt),Le.setMatrixAt(F,R),H.setFromAxisAngle(q,st),R.makeRotationFromQuaternion(H),R.setPosition(0,0,-_*.72),R.premultiply(xt),me.setMatrixAt(F,R),H.setFromAxisAngle(q,-st),R.makeRotationFromQuaternion(H),R.setPosition(0,0,-_*.72),R.premultiply(xt),Ze.setMatrixAt(F,R)},qe=(F,Y,pe)=>{const Le=F.phi0+F.omega*Y,me=F.orbitRad+Math.sin(Y*.8+F.phase)*.008*n,Ze=F.alt+Math.sin(Y*1.15+F.phase)*.006*n;pe.copy(F.frame.normalDir).addScaledVector(F.frame.e1,Math.cos(Le)*me).addScaledVector(F.frame.e2,Math.sin(Le)*me).normalize().multiplyScalar(Ze)};return{group:i,update(F,Y=1,pe=.5,Le=0){if(!i.parent||!i.parent.visible)return;const me=Z.smoothstep(-pe,-.1,.04);e?.updateDayNight&&e.updateDayNight(pe,F,Le);const Ze=m.attributes.position;for(let ye=0;ye<c;ye++){const $=d[ye],We=($.risePhase+F*$.driftSpeed*3)%1*.015,at=$.baseAlt+We,Je=Math.sin(F*.65+$.risePhase)*.0022;Ze.setXYZ(ye,$.dir.x*at+Je,$.dir.y*at,$.dir.z*at+Je)}Ze.needsUpdate=!0,p.opacity=Z.lerp(.14,.92,me);for(let ye=0;ye<y;ye++){const $=O[ye];qe($,F,yt),qe($,F+.05,Xt);const We=Math.sin(F*.65+$.phase)>-.2?.46:.1,at=Math.sin(F*4.9+$.phase)*We,Je=Math.sin(F*4.9+$.phase-.85)*We*.82,Ot=$.omega>0?-.32:.32;Ye(ye,E,v,b,P,N,yt,Xt,at,Je,$.scale,Ot)}E.instanceMatrix.needsUpdate=!0,v.instanceMatrix.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0,P.instanceMatrix.needsUpdate=!0,N.instanceMatrix.needsUpdate=!0,A.emissiveIntensity=Z.lerp(.06,1.45,me),C.emissiveIntensity=Z.lerp(.08,1.85,me),S.emissiveIntensity=Z.lerp(.08,1.65,me);for(let ye=0;ye<k;ye++){const $=K[ye];qe($,F,yt),qe($,F+.08,Xt);const We=Math.sin(F*2.5+$.phase)*.42,at=Math.sin(F*2.5+$.phase-.9)*.35;Ye(ye,ie,oe,X,Pe,G,yt,Xt,We,at,1,$.omega>0?-.25:.25)}ie.instanceMatrix.needsUpdate=!0,oe.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,Pe.instanceMatrix.needsUpdate=!0,G.instanceMatrix.needsUpdate=!0,B.emissiveIntensity=Z.lerp(.08,1.9,me),ne.emissiveIntensity=Z.lerp(.1,2.15,me);const Ee=(ye,$,We,at)=>{const Je=ye.offsetAng+ye.herd.speed*$,Ot=ye.herd.radOffset*ye.radialFactor;at.copy(ye.herd.normalDir).addScaledVector(ye.herd.e1,Math.cos(Je)*Ot).addScaledVector(ye.herd.e2,Math.sin(Je)*Ot).normalize();const ln=sr(at.x,at.y,at.z,0,r);We.copy(at).multiplyScalar(t+ln)},Ae=new w;for(let ye=0;ye<ue;ye++){const $=gt[ye];Ee($,F,yt,Mt),Ee($,F+.08,Xt,Ae),_t.copy(Xt).sub(yt).normalize(),$t.crossVectors(Mt,_t).normalize(),_t.crossVectors($t,Mt).normalize(),xt.makeBasis($t,Mt,_t),xt.setPosition(yt),xe.setScalar($.scale),xt.scale(xe),De.setMatrixAt(ye,xt);const We=Math.sin(F*4.5+$.phase)*.42;H.setFromAxisAngle(ee,We),R.makeRotationFromQuaternion(H),R.setPosition(0,J*.72,J*.52),R.premultiply(xt),V.setMatrixAt(ye,R),H.setFromAxisAngle(ee,-We),R.makeRotationFromQuaternion(H),R.setPosition(0,J*.72,-J*.56),R.premultiply(xt),Et.setMatrixAt(ye,R)}De.instanceMatrix.needsUpdate=!0,V.instanceMatrix.needsUpdate=!0,Et.instanceMatrix.needsUpdate=!0,Se.emissiveIntensity=Z.lerp(0,.95,me);for(let ye=0;ye<Ve;ye++){const $=Te[ye],We=Math.sin(F*1.15+$.phase)*.0045*n,at=Math.cos(F*.45+$.phase)*.004*n,Je=Math.sin(F*.35+$.phase)*.004*n;Mt.copy($.frame.normalDir).addScaledVector($.frame.e1,at).addScaledVector($.frame.e2,Je).normalize(),yt.copy(Mt).multiplyScalar($.alt+We);const Ot=1+Math.sin(F*2.8+$.phase)*.16;pt(xt,yt,Mt,$.scale*Ot,$.scale/Math.sqrt(Ot)),ae.setMatrixAt(ye,xt),pt(xt,yt,Mt,$.scale,$.scale*(1+Math.sin(F*2.8+$.phase)*.08)),Ne.setMatrixAt(ye,xt)}ae.instanceMatrix.needsUpdate=!0,Ne.instanceMatrix.needsUpdate=!0,he.opacity=Z.lerp(.32,.82,me),he.emissiveIntensity=Z.lerp(.08,2.35,me),de.opacity=Z.lerp(.24,.65,me),de.color.setRGB(Z.lerp(.85,1.4,me),Z.lerp(.88,.85,me),Z.lerp(.96,2.2,me));const mt=(ye,$,We,at,Je,Ot,ln,Tt,gn,cn)=>{const kn=We+at*Tt;cn.copy(ye.normalDir).addScaledVector(ye.e1,Math.cos(kn)*$).addScaledVector(ye.e2,Math.sin(kn)*$).normalize();const To=sr(cn.x,cn.y,cn.z,0,r),Jt=Math.min(ln-.004,To+Ot),sn=Z.lerp(Jt,ln,Je);gn.copy(cn).multiplyScalar(t+sn)},st=new w;for(let ye=0;ye<be;ye++){const $=Ie[ye];mt($.frame,$.orbitRad,$.phi0,$.omega,$.depthRatio,.015,-.016,F,yt,Mt),mt($.frame,$.orbitRad,$.phi0,$.omega,$.depthRatio,.015,-.016,F+.14,Xt,st),_t.copy(Xt).sub(yt),_t.lengthSq()<1e-12&&_t.set(1,0,0),_t.normalize(),$t.crossVectors(Mt,_t).normalize(),_t.crossVectors($t,Mt).normalize();const We=Math.sin(F*1.15+$.phase)*.06;H.setFromAxisAngle(ee,We),xt.makeBasis($t,Mt,_t),xt.setPosition(yt),xe.setScalar($.scale),xt.scale(xe),R.makeRotationFromQuaternion(H),xt.multiply(R),bt.setMatrixAt(ye,xt),W.setMatrixAt(ye,xt)}bt.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0,Qe.emissiveIntensity=Z.lerp(.06,1.85,me);for(let ye=0;ye<re;ye++){const $=we[ye],We=.55+Math.sin(F*.75+$.phase)*.25;mt($.frame,$.orbitRad,$.phi0,$.omega,We,.008,-.01,F,yt,Mt),mt($.frame,$.orbitRad,$.phi0,$.omega,We,.008,-.01,F+.07,Xt,st),_t.copy(Xt).sub(yt),_t.lengthSq()<1e-12&&_t.set(1,0,0),_t.normalize(),$t.crossVectors(Mt,_t).normalize(),_t.crossVectors($t,Mt).normalize(),xt.makeBasis($t,Mt,_t),xt.setPosition(yt),xe.setScalar($.scale),xt.scale(xe),Wt.setMatrixAt(ye,xt);const at=Math.sin(F*5.4+$.phase)*.42;H.setFromAxisAngle(q,at),R.makeRotationFromQuaternion(H),R.premultiply(xt),Q.setMatrixAt(ye,R)}Wt.instanceMatrix.needsUpdate=!0,Q.instanceMatrix.needsUpdate=!0,$e.emissiveIntensity=Z.lerp(.06,1.35,me),It.emissiveIntensity=Z.lerp(.08,1.75,me);for(let ye=0;ye<dt;ye++){const $=Yt[ye],We=$.phi0+$.omega*F,at=$.phi0+$.omega*(F+.06);$.centerDir.copy($.frame.normalDir).addScaledVector($.frame.e1,Math.cos(We)*$.orbitRad).addScaledVector($.frame.e2,Math.sin(We)*$.orbitRad).normalize(),$.aheadDir.copy($.frame.normalDir).addScaledVector($.frame.e1,Math.cos(at)*$.orbitRad).addScaledVector($.frame.e2,Math.sin(at)*$.orbitRad).normalize();const Je=sr($.centerDir.x,$.centerDir.y,$.centerDir.z,0,r),Ot=Math.min(-.012,Je+.008),ln=Z.lerp(Ot,-.01,.48+.28*Math.sin(F*.65+$.phase));$.centerAlt=t+ln,$.tangentForward.copy($.aheadDir).sub($.centerDir),$.tangentForward.lengthSq()<1e-12&&$.tangentForward.set(1,0,0),$.tangentForward.normalize(),$.tangentRight.crossVectors($.centerDir,$.tangentForward).normalize(),$.tangentForward.crossVectors($.tangentRight,$.centerDir).normalize()}for(let ye=0;ye<He;ye++){const $=Qt[ye],We=Yt[$.schoolIdx],at=$.localAng+F*1.15,Je=Math.sin(F*3.4+$.phase)*.003;Mt.copy(We.centerDir).addScaledVector(We.tangentRight,Math.cos(at)*$.localRad).addScaledVector(We.tangentForward,Math.sin(at)*$.localRad).normalize(),yt.copy(Mt).multiplyScalar(We.centerAlt+$.vertOff+Je);const Ot=Math.sin(F*8.5+$.phase)*.14;H.setFromAxisAngle(ee,0),_t.copy(We.tangentForward).addScaledVector(We.tangentRight,Ot).normalize(),$t.crossVectors(Mt,_t).normalize(),_t.crossVectors($t,Mt).normalize(),xt.makeBasis($t,Mt,_t),xt.setPosition(yt),xe.setScalar($.scale),xt.scale(xe),At.setMatrixAt(ye,xt)}At.instanceMatrix.needsUpdate=!0,rt.emissiveIntensity=Z.lerp(.08,1.65,me)}};function pt(F,Y,pe,Le,me){H.setFromUnitVectors(ke,pe),xe.set(Le,me,Le),F.compose(Y,H,xe)}}const dl=new w(0,1,0);function fl(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function io(s,e){const t=fl(64,64),n=t.getContext("2d"),i=n.createRadialGradient(32,32,1,32,32,32);i.addColorStop(0,s),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new mn(t);return r.needsUpdate=!0,r}function rr(s,e,t,n,i){const r=Z.smoothstep(n,.63,.7),o=1-Z.smoothstep(n,1.01,1.08),a=r*o;if(a<=1e-4)return 0;const l=1-Math.abs(Nt(s*14+3.1,e*14,t*14-2.7)),c=Ji(s*7.5-4.2,e*7.5+1.1,t*7.5+5.8,4),h=Math.max(0,c+.15)*(.45+.85*Math.pow(l,2.2));return i*(-.0018+.0155*h)*a}function $n(s,e,t,n,i,r,o){s.position.copy(e).multiplyScalar(t),s.quaternion.setFromUnitVectors(dl,e),n!==0&&s.rotateY(n),s.scale.set(i,r,o),s.updateMatrix()}function Vv(){const e=fl(256,256),t=fl(256,256),n=e.getContext("2d"),i=t.getContext("2d");n.fillStyle="#14171d",n.fillRect(0,0,256,256);for(let c=0;c<256;c+=8){const h=Math.floor(U(0,c,19)*14);n.fillStyle=`rgb(${16+h}, ${18+h}, ${22+h})`,n.fillRect(0,c,256,4)}i.fillStyle="#000000",i.fillRect(0,0,256,256);const r=["#9a521e","#7c401b","#8c1e24","#6d4b2b"];let o=0;for(let c=6;c<256;c+=10)for(let h=4;h<256;h+=8)o++,U(h,c,41)<.135&&(i.fillStyle=r[o%r.length],i.fillRect(h,c,4,3));const a=new mn(e);a.colorSpace=Ut;const l=new mn(t);return l.colorSpace=Ut,{map:a,emissiveMap:l}}function Hv(s){const e=s.localRadius,t=new Ht;t.name="NightCity_Concentric_Districts_R2_R3";const n=new Dt,i=new w,{map:r,emissiveMap:o}=Vv(),a=new Oe({map:r,emissiveMap:o,emissive:new le(1,.9,.8),emissiveIntensity:.48,roughness:.78,metalness:.35});a.userData.animatedEmissive=!0;const l=new Oe({color:1580066,roughness:.72,metalness:.6}),c=new Oe({color:2105894,roughness:.68,metalness:.52}),h=new An({color:new le(1.2,.18,.12)});h.userData.animatedEmissive=!0;const u=960,d=new jt(1,1,1);d.translate(0,.5,0);const f=new ct(d,a,u);f.name="NC_Ring2_Industrial_Slum_Blocks";for(let Q=0;Q<u;Q++){const we=U(Q,3,19),He=.335+Math.pow(we,.92)*.315,dt=U(Q,7,23)*Math.PI*2;i.set(Math.sin(He)*Math.cos(dt),Math.cos(He),Math.sin(He)*Math.sin(dt));const et=1-Z.smoothstep(He,.35,.64),it=e*(.0055+.0085*U(Q,5,11)),rt=e*(.0055+.0085*U(Q,9,13)),At=e*(.008+(.044*et+.012)*Math.pow(U(Q,11,29),1.45));$n(n,i,e*.9985,U(Q,2,7)*Math.PI,it,At,rt),f.setMatrixAt(Q,n.matrix)}f.instanceMatrix.needsUpdate=!0,t.add(f);const g=260,x=new ct(d,l,g);x.name="NC_Ring2_Industrial_Warehouses";for(let Q=0;Q<g;Q++){const we=.42+U(Q,17,5)*.23,He=U(Q,19,31)*Math.PI*2;i.set(Math.sin(we)*Math.cos(He),Math.cos(we),Math.sin(we)*Math.sin(He));const dt=e*(.014+.018*U(Q,4,8)),et=e*(.018+.022*U(Q,6,12)),it=e*(.008+.011*U(Q,8,16));$n(n,i,e*.9985,U(Q,3,21)*Math.PI,dt,it,et),x.setMatrixAt(Q,n.matrix)}x.instanceMatrix.needsUpdate=!0,t.add(x);const m=72,p=new Kt(.46,.78,1,12,1,!1);p.translate(0,.5,0);const M=new ct(p,c,m);M.name="NC_Ring2_Cooling_Towers";const y=140,_=new Kt(.18,.34,1,8);_.translate(0,.5,0);const A=new ct(_,c,y);A.name="NC_Ring2_Smokestacks";const C=new nn(.32,6,6),S=new ct(C,h,y);S.name="NC_Ring2_Stack_RedBeacons";const E=new Float32Array((m+y)*3),v=[];for(let Q=0;Q<m;Q++){const we=.44+U(Q,21,9)*.21,He=U(Q,25,13)*Math.PI*2;i.set(Math.sin(we)*Math.cos(He),Math.cos(we),Math.sin(we)*Math.sin(He));const dt=e*(.008+.006*U(Q,2,15)),et=e*(.022+.016*U(Q,6,27));$n(n,i,e*.9985,0,dt,et,dt),M.setMatrixAt(Q,n.matrix);const it=e*.9985+et*1.15;v.push({dir:i.clone(),alt:it,phase:U(Q,1,3)*Math.PI*2}),E[Q*3]=i.x*it,E[Q*3+1]=i.y*it,E[Q*3+2]=i.z*it}M.instanceMatrix.needsUpdate=!0;for(let Q=0;Q<y;Q++){const we=.38+U(Q,29,7)*.27,He=U(Q,31,17)*Math.PI*2;i.set(Math.sin(we)*Math.cos(He),Math.cos(we),Math.sin(we)*Math.sin(He));const dt=e*(.0045+.003*U(Q,4,18)),et=e*(.028+.024*U(Q,9,22));$n(n,i,e*.9985,0,dt,et,dt),A.setMatrixAt(Q,n.matrix);const it=e*.9985+et;$n(n,i,it,0,dt*.6,dt*.6,dt*.6),S.setMatrixAt(Q,n.matrix);const rt=m+Q,At=it+e*.008;v.push({dir:i.clone(),alt:At,phase:U(rt,5,9)*Math.PI*2}),E[rt*3]=i.x*At,E[rt*3+1]=i.y*At,E[rt*3+2]=i.z*At}A.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0,t.add(M,A,S);const b=210,P=new ct(_,l,b);P.name="NC_Ring2_Antennas";for(let Q=0;Q<b;Q++){const we=.35+U(Q,41,11)*.3,He=U(Q,43,19)*Math.PI*2;i.set(Math.sin(we)*Math.cos(He),Math.cos(we),Math.sin(we)*Math.sin(He));const dt=e*(.018+.032*U(Q,8,25));$n(n,i,e*1.005,0,e*.0014,dt,e*.0014),P.setMatrixAt(Q,n.matrix)}P.instanceMatrix.needsUpdate=!0,t.add(P);const N=240,D=new Float32Array(N*3);for(let Q=0;Q<N;Q++){const we=Q%6,He=.35+Q/N*.3,dt=we*Math.PI/3+Math.sin(He*5)*.08+(U(Q,3,37)-.5)*.05;i.set(Math.sin(He)*Math.cos(dt),Math.cos(He),Math.sin(He)*Math.sin(dt));const et=e*1.0025;D[Q*3]=i.x*et,D[Q*3+1]=i.y*et,D[Q*3+2]=i.z*et}const z=new Pt;z.setAttribute("position",new vt(D,3));const O=new wn({map:io("rgba(255, 195, 115, 0.9)","rgba(180, 90, 30, 0.32)"),color:14254136,size:1.65,transparent:!0,opacity:.78,depthWrite:!1,blending:fn,sizeAttenuation:!0}),k=new Tn(z,O);k.name="NC_Ring2_Isolated_Streetlamps",t.add(k);const L=new Pt;L.setAttribute("position",new vt(E,3));const B=new wn({map:io("rgba(22, 26, 34, 0.55)","rgba(14, 18, 24, 0.25)"),color:1975340,size:15.5,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),ne=new Tn(L,B);ne.name="NC_Ring2_Industrial_Smoke",t.add(ne);const ie=44,oe=96,X=(ie+1)*(oe+1),Pe=new Float32Array(X*3),G=new Float32Array(X*3),K=[];for(let Q=0;Q<=ie;Q++){const we=.62+Q/ie*.46,He=Math.sin(we),dt=Math.cos(we);for(let et=0;et<=oe;et++){const it=et/oe*Math.PI*2,rt=He*Math.cos(it),At=dt,Zt=He*Math.sin(it),Yt=rr(rt,At,Zt,we,e),Qt=e*.999+Yt,yt=Q*(oe+1)+et;Pe[yt*3]=rt*Qt,Pe[yt*3+1]=At*Qt,Pe[yt*3+2]=Zt*Qt;const Xt=Nt(rt*18+2,At*18,Zt*18)*.5+.5,Mt=Z.clamp(Yt/(e*.012),0,1);G[yt*3]=.24+Xt*.14+Mt*.12,G[yt*3+1]=.11+Xt*.055+Mt*.04,G[yt*3+2]=.07+Xt*.035}}for(let Q=0;Q<ie;Q++)for(let we=0;we<oe;we++){const He=Q*(oe+1)+we,dt=He+(oe+1);K.push(He,dt,He+1,He+1,dt,dt+1)}const ue=new Pt;ue.setAttribute("position",new vt(Pe,3)),ue.setAttribute("color",new vt(G,3)),ue.setIndex(K),ue.computeVertexNormals();const J=new Oe({vertexColors:!0,roughness:.96,metalness:.04}),fe=new ot(ue,J);fe.name="NC_Ring3_Badlands_Terrain",t.add(fe);const ve=420,ge=new Fs(1,0),Se=ge.attributes.position;for(let Q=0;Q<Se.count;Q++){const we=Se.getX(Q),He=Se.getY(Q),dt=Se.getZ(Q),et=.72+.42*U(Math.round(we*100),Math.round(He*100),Math.round(dt*100));Se.setXYZ(Q,we*et,He*(.55+.35*et),dt*et)}ge.computeVertexNormals();const _e=new Oe({color:6041375,roughness:.94,metalness:.05}),De=new ct(ge,_e,ve);De.name="NC_Ring3_Badlands_Rocks";for(let Q=0;Q<ve;Q++){const we=.67+U(Q,51,3)*.37,He=U(Q,53,17)*Math.PI*2;i.set(Math.sin(we)*Math.cos(He),Math.cos(we),Math.sin(we)*Math.sin(He));const dt=rr(i.x,i.y,i.z,we,e),et=e*(.008+.022*Math.pow(U(Q,7,11),1.6)),it=et*(.45+.9*U(Q,9,13)),rt=et*(.65+.6*U(Q,13,5));$n(n,i,e+dt*.96,U(Q,3,29)*Math.PI*2,et,it,rt),De.setMatrixAt(Q,n.matrix)}De.instanceMatrix.needsUpdate=!0,t.add(De);const V=4,Et=[.25,1.85,3.45,5.05],Xe=[],nt=[],Ge=38,gt=e*.0042,Ve=new w,I=new w,T=new w,j=new Oe({color:1710364,roughness:.88,metalness:.1,side:qt});for(let Q=0;Q<V;Q++){const we=Et[Q],He=new Float32Array((Ge+1)*2*3),dt=[];for(let rt=0;rt<=Ge;rt++){const At=rt/Ge,Zt=.64+At*.4,Yt=we+Math.sin(At*3.8+Q)*.11,Qt=Math.sin(Zt),yt=Math.cos(Zt);i.set(Qt*Math.cos(Yt),yt,Qt*Math.sin(Yt)),Ve.set(yt*Math.cos(Yt),-Qt,yt*Math.sin(Yt)).normalize(),I.crossVectors(i,Ve).normalize();const Xt=rr(i.x,i.y,i.z,Zt,e),Mt=e+Xt+e*8e-4;T.copy(i).multiplyScalar(Mt);const _t=rt*2;if(He[_t*3]=T.x-I.x*gt,He[_t*3+1]=T.y-I.y*gt,He[_t*3+2]=T.z-I.z*gt,He[(_t+1)*3]=T.x+I.x*gt,He[(_t+1)*3+1]=T.y+I.y*gt,He[(_t+1)*3+2]=T.z+I.z*gt,rt<Ge&&dt.push(_t,_t+2,_t+1,_t+1,_t+2,_t+3),rt>1&&rt<Ge-1&&rt%2===0){const $t=rt%4===0?1:-1,xt=T.clone().addScaledVector(I,$t*gt*1.45).normalize(),R=e*.0085;$n(n,xt,Mt-e*4e-4,0,e*6e-4,R,e*6e-4),Xe.push(n.matrix.clone());const H=Mt+R;nt.push(xt.x*H,xt.y*H,xt.z*H)}}const et=new Pt;et.setAttribute("position",new vt(He,3)),et.setIndex(dt),et.computeVertexNormals();const it=new ot(et,j);it.name=`NC_Ring3_Badlands_Road_${Q+1}`,t.add(it)}const he=new Kt(.4,.55,1,5);he.translate(0,.5,0);const de=new ct(he,l,Xe.length);de.name="NC_Ring3_Road_LightPoles",Xe.forEach((Q,we)=>de.setMatrixAt(we,Q)),de.instanceMatrix.needsUpdate=!0,t.add(de);const ae=new Pt;ae.setAttribute("position",new zt(nt,3));const Ne=new wn({map:io("rgba(255, 185, 95, 0.95)","rgba(220, 100, 28, 0.35)"),color:16754250,size:2.1,transparent:!0,opacity:.85,depthWrite:!1,blending:fn,sizeAttenuation:!0}),Te=new Tn(ae,Ne);Te.name="NC_Ring3_Road_LightOrbs",t.add(Te);const Ue=36,ft=new ct(_,new Oe({color:7304574,roughness:.55,metalness:.45}),Ue);ft.name="NC_Ring3_WindTurbine_Masts";const se=new jt(.11,1,.03);se.translate(0,.5,0);const be=new ct(se,new Oe({color:9278878,roughness:.45,metalness:.35}),Ue*3);be.name="NC_Ring3_WindTurbine_Blades";const Ke=[];for(let Q=0;Q<Ue;Q++){const we=Q%4,He=.72+we*.072,dt=.78+we*1.48,et=He+(U(Q,61,7)-.5)*.075,it=dt+(U(Q,67,13)-.5)*.24;i.set(Math.sin(et)*Math.cos(it),Math.cos(et),Math.sin(et)*Math.sin(it));const rt=rr(i.x,i.y,i.z,et,e),At=e*(.025+.012*U(Q,3,7)),Zt=e+rt-e*5e-4;$n(n,i,Zt,0,e*.0022,At,e*.0022),ft.setMatrixAt(Q,n.matrix);const Yt=i.clone().multiplyScalar(Zt+At),Qt=new ht().setFromUnitVectors(dl,i),yt=new ht().setFromAxisAngle(dl,U(Q,12,5)*Math.PI*2),Xt=Qt.multiply(yt);Ke.push({hubPos:Yt,orientQuat:Xt,bladeLen:At*.58,omega:1+U(Q,8,19)*.9,phase:U(Q,15,2)*Math.PI*2})}ft.instanceMatrix.needsUpdate=!0,t.add(ft,be);const je=18,Fe=je*3,ut=new ct(d,l,Fe);ut.name="NC_Ring3_Isolated_Outposts";const Qe=[];let bt=0;for(let Q=0;Q<je;Q++){const we=.74+U(Q,71,9)*.27,He=U(Q,73,19)*Math.PI*2;i.set(Math.sin(we)*Math.cos(He),Math.cos(we),Math.sin(we)*Math.sin(He));const dt=rr(i.x,i.y,i.z,we,e),et=new w(Math.cos(we)*Math.cos(He),-Math.sin(we),Math.cos(we)*Math.sin(He)).normalize(),it=new w().crossVectors(i,et).normalize();for(let rt=0;rt<3;rt++){const At=(U(Q*3+rt,2,11)-.5)*.025,Zt=(U(Q*3+rt,4,17)-.5)*.025,Yt=i.clone().addScaledVector(et,At).addScaledVector(it,Zt).normalize(),Qt=e*(.0055+.004*U(Q,rt,21)),yt=e*(.0065+.005*U(rt,Q,31)),Xt=e*(.0042+.003*U(Q+1,rt,5));if($n(n,Yt,e+dt*.95,U(Q,rt,4)*Math.PI,Qt,Xt,yt),ut.setMatrixAt(bt++,n.matrix),rt<2){const Mt=e+dt*.95+Xt*1.1;Qe.push(Yt.x*Mt,Yt.y*Mt,Yt.z*Mt)}}}ut.instanceMatrix.needsUpdate=!0,t.add(ut);const W=new Pt;W.setAttribute("position",new zt(Qe,3));const Ie=new wn({map:io("rgba(255, 215, 145, 1.0)","rgba(255, 145, 50, 0.35)"),color:16760944,size:2,transparent:!0,opacity:.9,depthWrite:!1,blending:fn,sizeAttenuation:!0}),re=new Tn(W,Ie);re.name="NC_Ring3_Outpost_WarmLights",t.add(re);const ce=new ht,Re=new ht,Ce=new w,$e=new tt,It=Math.PI*2/3,Wt=new w(0,0,1);return{group:t,update(Q,we=1){if(!t.parent||!t.parent.visible)return;for(let et=0;et<Ue;et++){const it=Ke[et],rt=Q*it.omega+it.phase;Ce.set(it.bladeLen*.25,it.bladeLen,it.bladeLen*.25);for(let At=0;At<3;At++){const Zt=rt+At*It;ce.setFromAxisAngle(Wt,Zt),Re.copy(it.orientQuat).multiply(ce),$e.compose(it.hubPos,Re,Ce),be.setMatrixAt(et*3+At,$e)}}be.instanceMatrix.needsUpdate=!0;const He=L.attributes.position;for(let et=0;et<v.length;et++){const it=v[et],rt=1+.002*Math.sin(Q*.7+it.phase);He.setXYZ(et,it.dir.x*it.alt*rt,it.dir.y*it.alt*rt,it.dir.z*it.alt*rt)}He.needsUpdate=!0;const dt=Z.clamp(.45+(we-1)*.28,.35,.85);a.emissiveIntensity=.48*dt,O.opacity=Z.clamp(.45+(we-.8)*.25,.38,.82),Ne.opacity=Z.clamp(.45+(we-.8)*.3,.4,.88),Ie.opacity=Z.clamp(.5+(we-.8)*.32,.45,.92)}}}const Pi=157.5,Ss=1.45,_a=1/3.5,bh=Z.degToRad(68),so=new w(0,Math.cos(bh),Math.sin(bh)).normalize(),Wv={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:11.5,eccentricity:.045,orbitOmega:.0295,localRadius:1.32,groundFloorAlt:1.65,kmScale:5800,rotationSpeed:.014,axialOmega:.015,axialTiltX:Z.degToRad(6),axialTiltZ:Z.degToRad(21),initialSpinAngle:-.95,capLocalDir:so,landable:!0,hasProceduralWorld:!0,fogColor:5944012,maxFogDensity:.0036,skyColor:2523838,particleColor:10417919,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new w(0,1.32*2.58,1.32*.92),lowOrbitLookAt:new w(0,1.32,0),highCloudOffset:new w(-.08,1.32*2.24,1.32*.56),aerialOffset:new w(-.025,1.32+.072,.095),aerialLookAt:new w(.028,1.32+.048,-.022),sunColor:16773332,sunIntensity:2.85,ambientColor:2377264,ambientIntensity:.92,hemiSkyColor:6469887,hemiGroundColor:1985064,hemiIntensity:1.45,localLightColor:61695,localBounceColor:12073215,bloomStrength:.54,skyDome:{zenith:1866720,mid:5420780,horizon:9365738,sunGlow:16773320,zenithAlpha:.92,starFloor:0}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:18.5,eccentricity:.035,orbitOmega:.0144,localRadius:1.42,groundFloorAlt:.32,minSpeed:3.2,glbLocalScale:.0038*_a*3.8,kmScale:6200,rotationSpeed:.011,axialOmega:.012,axialTiltX:Z.degToRad(-5),axialTiltZ:Z.degToRad(18.5),initialSpinAngle:-.62,capLocalDir:so,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0044,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new w(0,1.42*2.58,1.42*.92),lowOrbitLookAt:new w(0,1.42,0),highCloudOffset:new w(-.06,1.42*2.24,1.42*.56),aerialOffset:new w(-.012,1.42+.145,.195),aerialLookAt:new w(.005,1.42+.175,-.055),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.56,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:26.5,eccentricity:.05,orbitOmega:.0084,localRadius:1.52,groundFloorAlt:.95,glbLocalScale:.004*_a,kmScale:6800,rotationSpeed:.01,axialOmega:.011,axialTiltX:Z.degToRad(8),axialTiltZ:Z.degToRad(-23.5),initialSpinAngle:-1.18,capLocalDir:so,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new w(-.32,1.52*2.58,1.52*.92),lowOrbitLookAt:new w(0,1.52,0),highCloudOffset:new w(-.18,1.52*2.24,1.52*.58),aerialOffset:new w(-.025,1.52+.08,.092),aerialLookAt:new w(.003,1.52+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:35.5,eccentricity:.04,orbitOmega:.0054,localRadius:1.62,groundFloorAlt:.95,glbLocalScale:.0039*_a,kmScale:7500,rotationSpeed:.009,axialOmega:.01,axialTiltX:Z.degToRad(-6),axialTiltZ:Z.degToRad(24),initialSpinAngle:-.88,capLocalDir:so,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new w(0,1.62*2.58,1.62*.92),lowOrbitLookAt:new w(0,1.62,0),highCloudOffset:new w(.08,1.62*2.24,1.62*.58),aerialOffset:new w(0,1.62+.042,.102),aerialLookAt:new w(0,1.62+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:46,eccentricity:.06,orbitOmega:.0037,localRadius:1.85,groundFloorAlt:2,kmScale:11800,rotationSpeed:.05,axialOmega:.024,axialTiltX:Z.degToRad(7),axialTiltZ:Z.degToRad(26),initialSpinAngle:0,landable:!1}};class Xv{constructor({scene:e,camera:t,controls:n,starfield:i,cockpitParticles:r,bloomPass:o,onStatusUpdate:a}){this.scene=e,this.camera=t,this.controls=n,this.starfield=i,this.cockpitParticles=r,this.bloomPass=o,this.onStatusUpdate=a||(()=>{}),this.dracoLoader=new jx,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new px,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Ht,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(Pi),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.elapsedTime=0,this.simulationTime=0,this.timeScales=[1,10,60],this.timeScaleIndex=0,this.timeScale=1,this._tmpInvQuat=new ht,this._tmpCapInvQuat=new ht,this._tmpLocalDir=new w,this._tmpRadial=new w,this._tmpSunDir=new w,this._tmpPlanetToSun=new w,this._tmpUp=new w(0,1,0),this._tmpStationPos=new w,this._tmpColorA=new le,this._tmpColorB=new le,this._tmpColorC=new le,this._tmpSkyColor=new le,this._tmpFogColor=new le,this._identityQuat=new ht,this.skyDome=nv(),this.scene.add(this.skyDome),this._setupLighting()}_setupLighting(){this.ambientLight=new W_(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new z_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new mo(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new Cu(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.scene.add(this.planetaryDirLight),this.localAtmoLight=new mo(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new mo(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(.85),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new w(3.4,2.35,.72)},uHotColor:{value:new w(4,3.1,1.45)},uLimbColor:{value:new w(2.2,.85,.14)}};const n=new tn({uniforms:this.sunPlasmaUniforms,vertexShader:`
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
      `,fog:!1});this.sunNode.traverse(x=>{x.isMesh&&(x.material=n)});const i=new tn({uniforms:{uColor:{value:new w(2.8,1.35,.35)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,fog:!1,blending:fn,side:vn}),r=new ot(new nn(2.52,48,48),i);r.name="Solar_Tight_Corona";const o=document.createElement("canvas");o.width=512,o.height=512;const a=o.getContext("2d");a.clearRect(0,0,512,512);const l=256,c=256,h=a.createRadialGradient(l,c,4,l,c,130);h.addColorStop(0,"rgba(255, 245, 205, 0.72)"),h.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),h.addColorStop(1,"rgba(255, 140, 40, 0.0)"),a.fillStyle=h,a.beginPath(),a.arc(l,c,130,0,Math.PI*2),a.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((x,m)=>{a.save(),a.translate(l,c),a.rotate(x+.18);const p=m===0?242:210,M=a.createLinearGradient(-p,0,p,0);M.addColorStop(0,"rgba(255, 210, 120, 0.0)"),M.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),M.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),M.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),M.addColorStop(1,"rgba(255, 210, 120, 0.0)"),a.fillStyle=M,a.beginPath(),a.ellipse(0,0,p,3.2,0,0,Math.PI*2),a.fill(),a.restore()});const d=new mn(o);d.colorSpace=Ut;const f=new vu({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:fn}),g=new i_(f);g.name="Solar_Diffraction_Rays",g.scale.set(10.8,10.8,1),t&&(t.add(r),t.add(g))}cycleTimeScale(){return this.timeScaleIndex=(this.timeScaleIndex+1)%this.timeScales.length,this.timeScale=this.timeScales[this.timeScaleIndex],this.timeScale}syncCameraPostFlight(){this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position),this.camera.updateMatrixWorld(),hl.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),(this.localAtmoLight.intensity>.001||this.localBounceLight.intensity>.001)&&(this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,18),this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,-8))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,r)=>{this.gltfLoader.load(e,o=>i(o),void 0,o=>r(o))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const r=Array.isArray(i.material)?i.material:[i.material];for(const o of r)o&&o.emissiveIntensity!==void 0&&o.emissiveIntensity>3.2&&(o.emissiveIntensity=2.2+Math.log10(o.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(Wv)){const r=t.getObjectByName(i.spinnerName),o=t.getObjectByName(i.rootName),a=t.getObjectByName(i.bodyName);if(!o)continue;const c=new zn().setFromQuaternion(r?r.quaternion:new ht,"YXZ").y||0,h=i.semiMajorAxis,u=i.eccentricity||.04,d=h*(1-u*u)/(1+u*Math.cos(c));o.position.set(d,0,0);const f=[];let g=0;o.children.forEach(S=>{if(S.name.includes("Moon")&&!S.name.endsWith("_Orbit")){if(S.traverse(E=>{E.isMesh&&E.material&&(E.material.fog=!1)}),n==="p1"){const E=i.localRadius*(1.95+g*.65),v=E*(.22+g*.14),b=g===0?-1.85:-.78;S.position.set(Math.cos(b)*E,v,Math.sin(b)*E),f.push({node:S,baseRadius:E,angle:b,yOffset:v,speed:.014+g*.008})}else S.position.multiplyScalar(1.65),S.position.length()<i.localRadius*1.6&&S.position.normalize().multiplyScalar(i.localRadius*1.65),f.push({node:S,baseRadius:S.position.length(),angle:Math.atan2(S.position.z,S.position.x),yOffset:S.position.y,speed:.06+Math.random()*.08});g++}});const x=new Ht;x.name=`${i.id}_Axial_Tilt`,x.rotation.order="XZY",x.rotation.x=i.axialTiltX||0,x.rotation.z=i.axialTiltZ||0,o.add(x);const m=new Ht;m.name=`${i.id}_Axial_Spin`,m.rotation.y=i.initialSpinAngle||0,x.add(m);let p=null,M=null,y=null;if(i.landable){o.traverse(E=>{E!==o&&E.isMesh&&(E.name.includes("_Body")||E.name.includes("_Atmosphere")||E.name.includes("_Clouds")||E.name.includes("_DarkClouds")||/^Planet_01/i.test(E.name))&&(E.visible=!1)}),p=iv(i,Pi),p.userBaseColors={sunlit:new le(p.cloudDeckPalette.sunlit),ambient:new le(p.cloudDeckPalette.ambient),horizon:new le(p.cloudDeckPalette.horizon)},m.add(p.group),M=p.atmosphere,y=new Ht,y.name=`${i.id}_Cap_Frame`;const S=i.capLocalDir?i.capLocalDir.clone().normalize():new w(0,1,0);y.quaternion.setFromUnitVectors(new w(0,1,0),S),m.add(y)}else{const S=o.children.filter(E=>E!==x&&!E.name.includes("Moon")&&!E.name.includes("_Orbit"));for(const E of S)m.add(E);M=Nu(i,i.localRadius,1.05),m.add(M)}const _=new Ht;_.name=`${i.id}_Atmosphere_Surface_Detail`,_.visible=!1,(y||m).add(_),this.orbitalGroup.updateMatrixWorld(!0);const A=new w;o.getWorldPosition(A);const C=new ht;m.getWorldQuaternion(C),this.planetNodes.set(n,{config:i,spinner:r,root:o,tiltGroup:x,spinGroup:m,capFrame:y,body:a,orbitalBundle:p,atmosphereShell:M,surfaceCapGroup:_,surfaceLoaded:!1,surfaceLoading:!1,animators:[],nightMaterials:[],orbitAngle:c,spinAngle:i.initialSpinAngle||0,prevWorldPos:A.clone(),currWorldPos:A.clone(),planetDeltaPos:new w,prevSpinWorldQuat:C.clone(),currSpinWorldQuat:C.clone(),spinQuatDelta:new ht,moonOrbits:f})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95,2.15,2.35),this.controls.setPose(new w(0,1190,4270),new w(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded||t.surfaceLoading)return;t.surfaceLoading=!0;const n=t.config;try{if(n.hasProceduralWorld){const r=Iv(n);t.surfaceCapGroup.add(r.group),t.pandoraWorld=r;const o=Gv(n.localRadius,r);t.surfaceCapGroup.add(o.group),t.animators.push(o)}else if(n.surfaceUrl){const r=await this._loadGLB(n.surfaceUrl);if(rv(r,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(r),n.id==="p2"){this._calibrateNightCityMaterials(r);const o=Hv(n);t.surfaceCapGroup.add(o.group),t.animators.push(o);const a=yh(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(Dv(r))}else if(n.id==="p4"){const o=sv(n,1400);t.surfaceCapGroup.add(o);const a=yh(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(Nv(r))}else if(n.id==="p3"){const o=Uv(n.localRadius);t.surfaceCapGroup.add(o.group),t.animators.push(o)}}const i=new Set;t.surfaceCapGroup.traverse(r=>{if(!r.isMesh&&!r.isInstancedMesh)return;const o=Array.isArray(r.material)?r.material:[r.material];for(const a of o){if(!a||i.has(a)||a.userData?.animatedEmissive)continue;i.add(a),a.emissive&&a.emissiveIntensity!==void 0&&(a.emissiveMap||a.emissive.r>.008||a.emissive.g>.008||a.emissive.b>.008)&&t.nightMaterials.push({material:a,baseEmissive:a.emissiveIntensity,tier:a.userData?.nightTier||"default"})}}),t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}}_calibrateNightCityMaterials(e){const t=new Set;e.traverse(n=>{if(!n.isMesh)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i){if(!r||t.has(r)||r.emissiveIntensity===void 0)continue;t.add(r),r.userData=r.userData||{};const o=r.name||"";/Windows_Dense|Windows_Brutal|Windows_High/i.test(o)?(r.emissive.setHex(12113130),r.emissiveIntensity=.44,r.userData.nightTier="window"):/rib_warm_white/i.test(o)?(r.emissiveIntensity=1.05,r.userData.nightTier="window"):/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber|chimney_flare/i.test(o)?(r.emissiveIntensity=1.55,r.userData.nightTier="accent"):/backboard/i.test(o)?(r.emissiveIntensity=.42,r.userData.nightTier="window"):/neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(o)&&(r.emissiveIntensity=/Koi|Geisha|Banner/i.test(o)?2.15:2.35,r.userData.nightTier="hero")}})}_showTransitionBanner(e,t,n,i=1500){const r=document.getElementById("hud-transition-banner"),o=document.getElementById("banner-subtitle"),a=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");o&&(o.textContent=e),a&&(a.textContent=t),r&&r.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{r&&r.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){document.querySelectorAll(".nav-btn").forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){const t=String(e);if(this._highlightActiveNavButton(t),t==="1"){this.controls.engageAutopilot({getTargetPose:()=>({targetPos:new w(0,1280,4380),lookAtPos:new w(0,0,0),upVec:new w(0,1,0)}),duration:3.4});return}if(t==="2"){if(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor)return;this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const f=new w;return this.crystalPalaceAnchor.getWorldPosition(f),{targetPos:f.clone().add(new w(0,18,74)),lookAtPos:f,upVec:new w(0,1,0)}},duration:3.6});return}const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const r=this.planetNodes.get(i);if(!r)return;await this.ensurePlanetSurfaceLoaded(i);const o=r.config,a=r.capFrame||r.spinGroup||r.root;this.orbitalGroup.updateMatrixWorld(!0);const l=new w;r.root.getWorldPosition(l);const c=this.camera.position.distanceTo(l),h=o.localRadius*Pi,u=h*Ss,d=c-h;if(d>u*1.1){const f=Z.clamp(c/820,3,5.2);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:o.lowOrbitOffset.clone().applyMatrix4(a.matrixWorld),lookAtPos:o.lowOrbitLookAt.clone().applyMatrix4(a.matrixWorld),upVec:new w(0,1,0).transformDirection(a.matrixWorld).normalize()}),duration:f});return}if(d>u*.24){const f=this.camera.position.clone();this.orbitalGroup.updateMatrixWorld(!0);const g=new tt().copy(a.matrixWorld).invert();f.applyMatrix4(g);const x=[f];f.distanceTo(o.highCloudOffset)>o.localRadius*.25&&d>u*.85&&x.push(o.highCloudOffset.clone());const m=o.highCloudOffset.clone().lerp(o.aerialOffset,.55).normalize().multiplyScalar(o.localRadius*(1+Ss*.42)),p=o.highCloudOffset.clone().lerp(o.aerialOffset,.82).normalize().multiplyScalar(o.localRadius*(1+Ss*.16));x.push(m,p,o.aerialOffset.clone());const M=new Cn(x);this.controls.engageAutopilot({useDirectCurve:!0,duration:8.6,getTargetPose:y=>{this.orbitalGroup.updateMatrixWorld(!0);const _=M.getPoint(y),A=o.aerialLookAt.clone().lerp(o.lowOrbitLookAt,Math.pow(1-y,1.8)*.45),S=M.getPoint(Math.min(1,y+.08)).lerp(A,Math.min(1,y*1.15+.2));return{targetPos:_.applyMatrix4(a.matrixWorld),lookAtPos:S.applyMatrix4(a.matrixWorld),upVec:new w(0,1,0).transformDirection(a.matrixWorld).normalize()}}});return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:o.aerialOffset.clone().applyMatrix4(a.matrixWorld),lookAtPos:o.aerialLookAt.clone().applyMatrix4(a.matrixWorld),upVec:new w(0,1,0).transformDirection(a.matrixWorld).normalize()}),duration:2.6})}async navigateToPandoraLandmark(e){const t=Bt.find(v=>v.id===e),n=this.planetNodes.get("p1");if(!t||!n)return;await this.ensurePlanetSurfaceLoaded("p1");const i=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const r=n.config.localRadius,o=new tt().copy(i.matrixWorld).invert(),a=this.camera.position.clone().applyMatrix4(o),l=a.clone().normalize(),c=t.capDir.clone().normalize(),h=Math.abs(c.y)<.85?new w(0,1,0):new w(1,0,0),u=new w().crossVectors(c,h).normalize(),d=c.clone().multiplyScalar(r+t.viewAlt).addScaledVector(u,-t.viewBack).normalize().multiplyScalar(r+t.viewAlt),f=c.clone().multiplyScalar(r+t.viewAlt*.25),g=l.angleTo(c),x=Math.min(.45,g*.22),m=Math.max(3,Math.ceil(g/.35)),p=new ht,M=new ht().setFromUnitVectors(l,c),y=new ht,_=Math.max(r+.05,Math.min(a.length(),r*1.48)),A=r+t.viewAlt,C=[a.clone()];for(let v=1;v<m;v++){const b=v/m;p.copy(y).slerp(M,b);const P=l.clone().applyQuaternion(p).normalize(),N=Z.lerp(_,A,b)+Math.sin(b*Math.PI)*x;C.push(P.multiplyScalar(N))}C.push(d);const S=new Cn(C),E=Z.clamp(2.2+g*1.5,2.4,5.4);this.controls.engageAutopilot({useDirectCurve:!0,duration:E,getTargetPose:v=>{this.orbitalGroup.updateMatrixWorld(!0);const b=S.getPoint(v),N=S.getPoint(Math.min(1,v+.08)).lerp(f,Math.min(1,v*1.35)),D=b.clone().normalize();return{targetPos:b.applyMatrix4(i.matrixWorld),lookAtPos:N.applyMatrix4(i.matrixWorld),upVec:D.transformDirection(i.matrixWorld).normalize()}}})}update(e){const t=Math.min(e,.1),n=t*this.timeScale;this.elapsedTime+=t,this.simulationTime+=n,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),hl.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,S]of this.planetNodes){const E=S.config;S.prevWorldPos.copy(S.currWorldPos),S.spinGroup&&S.prevSpinWorldQuat.copy(S.currSpinWorldQuat),S.orbitAngle+=n*E.orbitOmega;const v=E.semiMajorAxis,b=E.eccentricity||.04,P=v*(1-b*b)/(1+b*Math.cos(S.orbitAngle));S.spinner&&(S.spinner.rotation.y=S.orbitAngle),S.root.position.set(P,0,0);for(const N of S.moonOrbits)N.angle+=n*N.speed,N.node.position.set(Math.cos(N.angle)*N.baseRadius,N.yOffset,Math.sin(N.angle)*N.baseRadius);S.spinAngle+=n*(E.axialOmega??E.rotationSpeed??.012),S.spinGroup&&(S.spinGroup.rotation.y=S.spinAngle),S.orbitalBundle&&(S.orbitalBundle.lowerCloudMesh.rotation.y+=n*E.rotationSpeed*.45,S.orbitalBundle.upperCloudMesh.rotation.y+=n*E.rotationSpeed*.85,S.orbitalBundle.lowerCloudGroup.rotation.y+=n*E.rotationSpeed*.28)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=n*.06),this.orbitalGroup.updateMatrixWorld(!0);let i="Sol Central",r=Math.max(0,this.camera.position.length()-2.21*Pi),o=12e3,a=null,l=null,c=99999;for(const[S,E]of this.planetNodes){E.root.getWorldPosition(E.currWorldPos),E.planetDeltaPos.copy(E.currWorldPos).sub(E.prevWorldPos),E.spinGroup&&(E.spinGroup.getWorldQuaternion(E.currSpinWorldQuat),this._tmpInvQuat.copy(E.prevSpinWorldQuat).invert(),E.spinQuatDelta.copy(E.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize());const v=E.config.localRadius*Pi,b=v*Ss,P=this.camera.position.distanceTo(E.currWorldPos),N=P-v,D=N/b;if(E.atmosphereShell&&E.atmosphereShell.material.uniforms){const z=E.atmosphereShell.material.uniforms;z.uSunPosition.value.set(0,0,0);const O=Z.smoothstep(D,0,.85);z.uAltitudeFade.value=Z.lerp(.18,1,O)}if(E.config.landable){!E.surfaceLoaded&&!E.surfaceLoading&&P<v*4.5&&this.ensurePlanetSurfaceLoaded(S),E.surfaceCapGroup.scale.setScalar(1);const z=D<(E.config.id==="p2"?.54:.56);if(E.surfaceCapGroup.visible=z,E.config.hasProceduralWorld&&E.orbitalBundle&&(E.orbitalBundle.surfaceMesh.visible=!z),E.orbitalBundle){const O=E.orbitalBundle;O.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(E.currWorldPos),O.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(E.currWorldPos);const k=Z.smoothstep(D,.16,.46),L=k*.64,B=k*.86;if(O.lowerCloudMesh.material.uniforms.uOpacity.value=L,O.lowerCloudMesh.visible=L>.008,O.upperCloudMesh.material.uniforms.uOpacity.value=B,O.upperCloudMesh.visible=B>.008,D<.98){const ne=1-Z.smoothstep(D,.56,.98),ie=Math.exp(-Math.pow((D-.36)/.16,2))*.82,oe=Math.max(ne*.36,ie);O.lowerCloudPuffs.material.opacity=oe,O.lowerCloudGroup.visible=oe>.008}else O.lowerCloudGroup.visible=!1}}N<r&&(r=Math.max(0,N),i=E.config.name,o=E.config.kmScale),N<c&&(c=N,l=E,a=S)}if(this.crystalPalaceAnchor){this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);const S=Math.max(0,this.camera.position.distanceTo(this._tmpStationPos)-12);S<r&&(r=S,i="Estación Crystal Palace",o=850)}let h=!1,u=!1,d=null,f=null,g=null,x=this._identityQuat,m=220,p=220*Ss,M=.95,y=8,_=0,A=0,C="ESPACIO";if(l){const S=l.config;if(m=S.localRadius*Pi,p=m*Ss,M=S.groundFloorAlt??.95,y=S.minSpeed??8,S.id==="p1"&&l.pandoraWorld){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();const P=l.pandoraWorld.getFloorAndWaterAtDir(this._tmpLocalDir),N=P.terrainElev*Pi+(P.hasWater?.55:1.15);if(M=P.hasWater?N:Math.max(.65,N),P.hasWater){const D=P.waterElev*Pi;c<D&&(A=D-c,_=Z.clamp(A/1.8,0,1))}}const E=p*1.25,v=c/p;if(c<E)u=!0,d=l.planetDeltaPos,f=l.currWorldPos,g=l.prevWorldPos,x=l.spinQuatDelta;else if(this.crystalPalaceAnchor){const b=this.planetNodes.get("p2");b&&(this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos),this.camera.position.distanceTo(this._tmpStationPos)<220&&(u=!0,d=b.planetDeltaPos,f=b.currWorldPos,g=b.prevWorldPos,x=this._identityQuat))}if(S.landable&&v<1.06){h=v<=1,this.currentDominantPlanet=h?S:null,h&&this.lastBannerPlanetId!==S.id&&(this.lastBannerPlanetId=S.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${S.name.toUpperCase()}`,S.glowCss,1700),S.navKey&&this._highlightActiveNavButton(S.navKey));const b=Z.clamp(1-v,0,1),P=1-Z.smoothstep(v,.92,1.06),N=this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),D=this._tmpSunDir.copy(this.camera.position).negate().normalize(),z=Z.clamp(N.dot(D),-1,1),O=Z.smoothstep(-z,-.02,.24),k=Z.smoothstep(z,-.02,.28),L=Math.exp(-Math.pow((z-.02)/.14,2))*(1-O*.55);z>.14?C="DÍA":z>=-.08?C="ATARDECER":C="NOCHE";const B=1-Z.smoothstep(b,.04,.25);for(const se of this.orbitLines)se.material.opacity=se.baseOpacity*B,se.mesh.visible=B>.01;const ne=-Math.sqrt(Math.max(0,1-Math.pow(m/Math.max(m,m+c),2))),ie=Z.smoothstep(b,.01,.36),oe=this.skyDome.material.uniforms;if(S.skyDome){const se=S.id==="p2"?1444388:1841212,be=S.id==="p2"?7085388:S.id==="p1"?6039150:10174e3,Ke=S.id==="p2"?16726909:16743220,je=S.id==="p2"?331292:198678,Fe=S.id==="p2"?1058888:S.id==="p1"?404536:S.id==="p4"?2494984:529190;this._tmpColorA.setHex(S.skyDome.zenith),this._tmpColorA.lerp(this._tmpColorB.setHex(se),L*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(66312),O*.94),oe.uZenithColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(S.skyDome.mid),this._tmpColorA.lerp(this._tmpColorB.setHex(be),L*.85),this._tmpColorA.lerp(this._tmpColorB.setHex(je),O*.92),oe.uMidColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(S.skyDome.horizon),this._tmpColorA.lerp(this._tmpColorB.setHex(Ke),L*.9),this._tmpColorA.lerp(this._tmpColorB.setHex(Fe),O*.92),oe.uHorizonColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(S.skyDome.sunGlow),this._tmpColorA.lerp(this._tmpColorB.setHex(16757844),L*.82),this._tmpColorA.lerp(this._tmpColorB.setHex(1451069),O*.9),oe.uSunGlowColor.value.copy(this._tmpColorA);const ut=S.skyDome.zenithAlpha;if(oe.uZenithAlpha.value=Z.lerp(ut,Math.max(.16,ut*.24),O),_>.001){const Qe=O>.5?136738:547442,bt=O>.5?272444:821410;oe.uZenithColor.value.lerp(this._tmpColorB.setHex(Qe),_),oe.uMidColor.value.lerp(this._tmpColorB.setHex(Qe),_),oe.uHorizonColor.value.lerp(this._tmpColorB.setHex(bt),_),oe.uSunGlowColor.value.lerp(this._tmpColorB.setHex(2808046),_*.85),oe.uZenithAlpha.value=Z.lerp(oe.uZenithAlpha.value,.96,_)}if(oe.uLocalUp.value.copy(N),oe.uSunDir.value.copy(D),oe.uHorizonDot.value=ne,oe.uAtmoOpacity.value=ie,this.skyDome.visible=ie>.005,this.starfield.userData.setStarVisibility){const Qe=Z.lerp(S.skyDome.starFloor,Math.max(S.skyDome.starFloor,.45),L*(1-k*.7)),bt=Z.lerp(Qe,.96,O),W=Z.lerp(1,bt,Z.smoothstep(b,.06,.42))*(1-_);this.starfield.userData.setStarVisibility(W)}}if(l.orbitalBundle){const se=l.orbitalBundle,be=S.id==="p2"?14239882:16749142,Ke=S.id==="p2"?16726909:16740396;if(se.userBaseColors){this._tmpColorA.copy(se.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(be),L*.72),this._tmpColorC.copy(se.userBaseColors.horizon).lerp(this._tmpColorB.setHex(Ke),L*.85);for(const Fe of[se.upperCloudMesh,se.lowerCloudMesh])Fe.material.uniforms.uSunColor.value.copy(this._tmpColorA),Fe.material.uniforms.uHorizonColor.value.copy(this._tmpColorC)}const je=S.id==="p2"?1452616:1319480;this._tmpColorA.copy(se.userBaseColors?se.userBaseColors.sunlit:this._tmpColorB.setHex(16777215)),this._tmpColorA.lerp(this._tmpColorB.setHex(be),L*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(je),O*.88),se.lowerCloudPuffs.material.color.copy(this._tmpColorA)}const X=b>.32;for(const[se,be]of this.planetNodes)be.root.visible=X?se===a:!0;const Pe=1-Z.smoothstep(v,.45,.98),G=198156,K=S.id==="p2"?3871275:8139812;this._tmpSkyColor.setHex(S.skyColor).lerp(this._tmpColorB.setHex(K),L*.72).lerp(this._tmpColorB.setHex(G),O*.92),_>.001&&this._tmpSkyColor.lerp(this._tmpColorB.setHex(683142).lerp(this._tmpColorC.setHex(137768),O),_),this.scene.background=this._tmpColorA.setHex(G).clone().lerp(this._tmpSkyColor,Pe*.9);const ue=S.maxFogDensity*(1-Z.smoothstep(v,.16,.85)),J=.02*Math.exp(-Math.pow((v-.43)/.11,2)),fe=.0028*Math.exp(-Math.pow((v-.94)/.12,2)),ve=S.id==="p1"?.0024*(1-Z.smoothstep(v,0,.09)):0,ge=(ue+J+fe+ve)*P,Se=Z.lerp(.022,.036,O),_e=Z.lerp(ge,Se,_),De=S.id==="p2"?6428730:13920826,V=S.id==="p1"?268836:S.id==="p2"?265496:329744;this._tmpFogColor.setHex(S.fogColor).lerp(this._tmpColorB.setHex(De),L*.78).lerp(this._tmpColorB.setHex(V),O*.9),_>.001&&this._tmpFogColor.lerp(this._tmpColorB.setHex(883350).lerp(this._tmpColorC.setHex(205362),O),_),this.scene.fog?(this.scene.fog.color.copy(this._tmpFogColor),this.scene.fog.density=_e):this.scene.fog=new Al(this._tmpFogColor.getHex(),_e);const Et=S.id==="p1"?1-.34*(1-Z.smoothstep(v,0,.12)):1,Xe=S.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1,nt=Z.lerp(.05,1,Z.smoothstep(z,-.06,.24)),Ge=Z.lerp(1,.45,_);this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize(),this.planetaryDirLight.position.copy(this._tmpPlanetToSun).multiplyScalar(1200),this.planetaryDirLight.color.setHex(S.sunColor).lerp(this._tmpColorB.setHex(16741424),L*.72).lerp(this._tmpColorB.setHex(5008280),O*.85),this.planetaryDirLight.intensity=Z.lerp(.25,S.sunIntensity,b)*Et*nt*Ge,this.hemiLight.position.copy(N).multiplyScalar(100);const gt=S.id==="p2"?16726909:16743220,Ve=S.id==="p1"?537668:S.id==="p2"?926272:792108,I=S.id==="p1"?401448:527380;this._tmpColorA.setHex(S.hemiSkyColor).lerp(this._tmpColorB.setHex(gt),L*.55).lerp(this._tmpColorB.setHex(Ve),O*.9),_>.001&&this._tmpColorA.lerp(this._tmpColorB.setHex(1889514).lerp(this._tmpColorC.setHex(407624),O),_*.85),this.hemiLight.color.lerp(this._tmpColorA,Math.min(1,b*.35+.08)),this._tmpColorA.setHex(S.hemiGroundColor).lerp(this._tmpColorB.setHex(I),O*.85),this.hemiLight.groundColor.lerp(this._tmpColorA,Math.min(1,b*.35+.08)),this.hemiLight.intensity=Z.lerp(.42,S.hemiIntensity,b)*Z.lerp(1,.36,O),this._tmpColorA.setHex(S.ambientColor).lerp(this._tmpColorB.setHex(1054760),O*.82),this.ambientLight.color.lerp(this._tmpColorA,Math.min(1,b*.35+.08)),this.ambientLight.intensity=Z.lerp(.55,S.ambientIntensity,b)*Et*Z.lerp(1,.45,O);const T=S.id==="p1"?.74:S.id==="p3"?.85:.9,j=S.id==="p1"?2.45*Xe:S.id==="p2"?2.15:S.id==="p3"?2.25:1.95,he=Math.min(1,Math.max(O,L*.45)),de=Z.lerp(T,j,he);if(l.surfaceCapGroup.visible){for(const se of l.animators)se.update(this.elapsedTime,de,z,_);for(const se of l.nightMaterials)S.id==="p2"?se.tier==="window"?se.material.emissiveIntensity=se.baseEmissive*Z.lerp(.65,1.45,he):se.tier==="hero"?se.material.emissiveIntensity=se.baseEmissive*Z.lerp(.95,1.32,he):se.material.emissiveIntensity=se.baseEmissive*Z.lerp(.78,1.18,he):se.material.emissiveIntensity=se.baseEmissive*de}const ae=1-Z.smoothstep(v,.05,.45),Ne=S.id==="p1"?Z.smoothstep(-z,-.1,.04):1;if(this.localAtmoLight.color.setHex(_>.2?1894655:S.localLightColor),this.localAtmoLight.intensity=ae*5.2*Xe*Z.lerp(.85,1.38,he)*Math.max(Ne,_*.6),this.localAtmoLight.position.copy(this.camera.position).addScaledVector(N,18),this.localBounceLight.color.setHex(S.localBounceColor),this.localBounceLight.intensity=ae*4.8*Xe*Z.lerp(.85,1.35,he)*Ne,this.localBounceLight.position.copy(this.camera.position).addScaledVector(N,-8),this.bloomPass){const se=S.id==="p2"?1.08:1.18,be=S.bloomStrength*Xe*Z.lerp(.92,se,O);this.bloomPass.strength=Z.lerp(.55,Math.min(.76,be),ae)}const Te=Math.exp(-Math.pow((v-.78)/.2,2))*.85,Ue=Math.exp(-Math.pow((v-.4)/.14,2))*.55,ft=_>.08?4126184:S.particleColor;this.cockpitParticles.setAtmosphereStyle(ft,Math.max(Math.max(Te,Ue),_*.72))}}if(l&&c/p>=1.06&&(h=!1),this.mode=h?"SURFACE":"ORBIT",!l||!l.config.landable||c/p>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const S of this.orbitLines)S.material.opacity=S.baseOpacity,S.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,S]of this.planetNodes)S.root.visible=!0,S.config.hasProceduralWorld&&S.orbitalBundle&&(S.orbitalBundle.surfaceMesh.visible=!0);this.scene.background.lerp(new le(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.planetaryDirLight.intensity=Z.lerp(this.planetaryDirLight.intensity,.22,.1),this.hemiLight.position.set(0,100,0),this.hemiLight.color.lerp(new le(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new le(1053724),Math.min(1,t*3)),this.hemiLight.intensity=Z.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new le(1844790),Math.min(1,t*3)),this.ambientLight.intensity=Z.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=Z.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=Z.lerp(this.localBounceLight.intensity,0,.15),this.bloomPass&&(this.bloomPass.strength=Z.lerp(this.bloomPass.strength,.55,.1)),this.cockpitParticles.setAtmosphereStyle(8965375,0)}if(this.controls.setAltitudeContext({surfaceAltitude:c,planetRadius:m,atmoTopAlt:p,groundFloorAlt:M,minSpeed:y,submergedRatio:_,planetCenter:f||(l?l.currWorldPos:null),prevPlanetCenter:g||(l?l.prevWorldPos:null),hasPlanet:!!l,inGravityWell:u,planetDeltaPos:d,planetQuatDelta:x}),h&&this.currentDominantPlanet){const S=A>.05,E=S?Math.round(A*15):Math.max(0,Math.round((c-M)*115));let v=null;if(this.currentDominantPlanet.id==="p1"){const b=this.planetNodes.get("p1"),P=b?.capFrame||b?.spinGroup||b?.root;P&&(v=Bt.map(N=>{this._tmpStationPos.copy(N.capDir).multiplyScalar(b.config.localRadius).applyMatrix4(P.matrixWorld);const D=Math.round(this.camera.position.distanceTo(this._tmpStationPos)*(b.config.kmScale/620));return{id:N.id,shortName:N.shortName,distKm:D}}))}this.onStatusUpdate({modeText:S?"SUBMARINO":"ATMOSFÉRICO",isSurface:!0,isUnderwater:S,sectorName:this.currentDominantPlanet.name.toUpperCase(),nearestText:`${this.currentDominantPlanet.name}`,altitudeText:S?`-${E.toLocaleString("es-ES")} m`:`${E.toLocaleString("es-ES")} m`,timeScale:this.timeScale,solarPhaseName:C,pandoraLandmarks:v})}else{const S=Math.max(1,Math.round(r*(o/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${i} · ${S.toLocaleString("es-ES")} km`,altitudeText:`${S.toLocaleString("es-ES")} km`,timeScale:this.timeScale,solarPhaseName:"ESPACIO"})}}}const zu=document.getElementById("app-canvas"),wh=document.getElementById("loading-screen"),ro=document.getElementById("loading-status"),Eh=document.getElementById("loading-bar-fill"),xa=document.getElementById("hud-mode"),Ah=document.getElementById("hud-sector"),Th=document.getElementById("hud-nearest"),Ch=document.getElementById("hud-altitude"),Rh=document.getElementById("hud-time-btn"),Cs=document.getElementById("hud-time"),oo=document.getElementById("pandora-landmarks-bar"),Ph=document.getElementById("hud-speed"),Ih=document.getElementById("hud-speed-unit"),Lh=document.getElementById("hud-speed-bar"),Dh=document.getElementById("hud-mult"),va=document.getElementById("hud-boost"),Nh=document.getElementById("hud-coords"),br=new n_;br.background=new le(198156);const Bi=new bn(62,window.innerWidth/window.innerHeight,.05,12e4);br.add(Bi);const ns=new t_({canvas:zu,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});ns.setSize(window.innerWidth,window.innerHeight);ns.setPixelRatio(Math.min(window.devicePixelRatio,2));ns.outputColorSpace=Ut;ns.toneMapping=ml;ns.toneMappingExposure=1.08;const wr=new ox(ns),qv=new ax(br,Bi);wr.addPass(qv);const Vl=new ks(new ze(window.innerWidth,window.innerHeight),.55,.35,.95);wr.addPass(Vl);const Yv=new hx;wr.addPass(Yv);const ku=ux(8500,52e3);br.add(ku);const Gu=new dx(Bi,420),Ki=new fx(Bi,zu),In=new Xv({scene:br,camera:Bi,controls:Ki,starfield:ku,cockpitParticles:Gu,bloomPass:Vl,onStatusUpdate:s=>{if(xa){xa.textContent=s.modeText;const e=s.isUnderwater?"mode-sub":s.isSurface?"mode-atmo":"mode-orbit";xa.className=`hud-value ${e}`}if(Ah&&(Ah.textContent=s.sectorName),Th&&(Th.textContent=s.nearestText),Ch&&(Ch.textContent=s.altitudeText),Cs&&(Cs.textContent=`${s.timeScale}x · ${s.solarPhaseName}`,Cs.className=`hud-value ${s.solarPhaseName==="DÍA"?"phase-day":s.solarPhaseName==="ATARDECER"?"phase-dusk":s.solarPhaseName==="NOCHE"?"phase-night":""}`),oo)if(s.pandoraLandmarks){oo.classList.remove("hidden");for(const e of s.pandoraLandmarks){const t=oo.querySelector(`small[data-dist="${e.id}"]`);t&&(t.textContent=`${e.distKm.toLocaleString("es-ES")} km`)}}else oo.classList.add("hidden")}}),Vu=()=>{const s=In.cycleTimeScale();if(Cs){const e=Cs.textContent.split("·")[1]?.trim()||"ESPACIO";Cs.textContent=`${s}x · ${e}`}};Rh&&Rh.addEventListener("click",s=>{s.stopPropagation(),Vu()});document.querySelectorAll(".nav-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.target;t&&In.navigateToTarget(t)})});document.querySelectorAll(".pandora-lm-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.landmark;t&&In.navigateToPandoraLandmark(t)})});window.addEventListener("keydown",s=>{["Digit1","Numpad1"].includes(s.code)&&In.navigateToTarget("1"),["Digit2","Numpad2"].includes(s.code)&&In.navigateToTarget("2"),["Digit3","Numpad3"].includes(s.code)&&In.navigateToTarget("3"),["Digit4","Numpad4"].includes(s.code)&&In.navigateToTarget("4"),["Digit5","Numpad5"].includes(s.code)&&In.navigateToTarget("5"),["Digit6","Numpad6"].includes(s.code)&&In.navigateToTarget("6"),s.code==="KeyT"&&!s.repeat&&Vu()});window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;Bi.aspect=s/e,Bi.updateProjectionMatrix(),ns.setSize(s,e),wr.setSize(s,e),Vl.resolution.set(s,e)});async function Kv(){try{await In.init((s,e)=>{Eh&&(Eh.style.width=`${s}%`),ro&&(ro.textContent=e)})}catch(s){console.error("Error inicializando simulador:",s),ro&&(ro.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{wh&&wh.classList.add("hidden")},300)}}const jv=new Ru;function Hu(){requestAnimationFrame(Hu);const s=jv.getDelta();In.update(s),Ki.update(s),In.syncCameraPostFlight();const e=Ki.getCurrentSpeed(),t=Ki.getPulseRatio();Gu.update(s,e,t);const n=In.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(Ph&&(Ph.textContent=i),Ih&&(Ih.textContent=n?"km/s":"m/s"),Lh){const r=(n?1400:120)*Ki.speedMultiplier,o=Math.min(100,e/Math.max(1,r)*100);Lh.style.width=`${o}%`}if(Dh&&(Dh.textContent=`x${Ki.speedMultiplier.toFixed(1)}`),va){const r=t>.1;va.textContent=Ki.autopilot?"PILOTO AUTO":r?"MOTOR PULSE":"EN ESPERA",va.className=r?"status-active":"status-standby"}if(Nh){const r=Bi.position;Nh.textContent=`${r.x.toFixed(0)}, ${r.y.toFixed(0)}, ${r.z.toFixed(0)}`}wr.render()}Kv();Hu();
