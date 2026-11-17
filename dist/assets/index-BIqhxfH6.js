(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="170",Qf=0,Rh=1,Jf=2,Dd=1,Id=2,ts=3,wi=0,zn=1,Dt=2,Jn=0,Ws=1,Dn=2,Dh=3,Ih=4,Ld=5,is=100,ep=101,tp=102,np=103,ip=104,tc=200,sp=201,op=202,ap=203,nc=204,ic=205,Nd=206,rp=207,Ud=208,lp=209,cp=210,hp=211,up=212,dp=213,fp=214,sc=0,oc=1,ac=2,No=3,rc=4,lc=5,cc=6,hc=7,Fd=0,pp=1,mp=2,As=0,Od=1,Bd=2,kd=3,zr=4,gp=5,zd=6,Gd=7,Lh="attached",xp="detached",Hd=300,Uo=301,Fo=302,uc=303,dc=304,Gr=306,Wn=1e3,Li=1001,Lr=1002,Nn=1003,Vd=1004,la=1005,pi=1006,Sr=1007,ss=1008,Oi=1009,Wd=1010,Xd=1011,Ma=1012,Jc=1013,qs=1014,yi=1015,Ui=1016,eh=1017,th=1018,Ys=1020,qd=35902,Yd=1021,jd=1022,bi=1023,Kd=1024,Zd=1025,Po=1026,js=1027,Hr=1028,nh=1029,$d=1030,ih=1031,sh=1033,wr=33776,Er=33777,Ar=33778,Tr=33779,fc=35840,pc=35841,mc=35842,gc=35843,xc=36196,vc=37492,_c=37496,Mc=37808,yc=37809,bc=37810,Sc=37811,wc=37812,Ec=37813,Ac=37814,Tc=37815,Cc=37816,Pc=37817,Rc=37818,Dc=37819,Ic=37820,Lc=37821,Cr=36492,Nc=36494,Uc=36495,Qd=36283,Fc=36284,Oc=36285,Bc=36286,ya=2300,ba=2301,sl=2302,Nh=2400,Uh=2401,Fh=2402,vp=2500,_p=0,Jd=1,kc=2,Mp=3200,zc=3201,oh=0,yp=1,Gi="",$t="srgb",jn="srgb-linear",Vr="linear",on="srgb",ao=7680,Oh=519,bp=512,Sp=513,wp=514,ef=515,Ep=516,Ap=517,Tp=518,Cp=519,Gc=35044,Bh="300 es",os=2e3,Nr=2001;class Vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kh=1234567;const da=Math.PI/180,Oo=180/Math.PI;function Fi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function kn(s,e,t){return Math.max(e,Math.min(t,s))}function ah(s,e){return(s%e+e)%e}function Pp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Rp(s,e,t){return s!==e?(t-s)/(e-s):0}function fa(s,e,t){return(1-t)*s+t*e}function Dp(s,e,t,n){return fa(s,e,1-Math.exp(-t*n))}function Ip(s,e=1){return e-Math.abs(ah(s,e*2)-e)}function Lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Np(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Up(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fp(s,e){return s+Math.random()*(e-s)}function Op(s){return s*(.5-Math.random())}function Bp(s){s!==void 0&&(kh=s);let e=kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kp(s){return s*da}function zp(s){return s*Oo}function Gp(s){return(s&s-1)===0&&s!==0}function Hp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wp(s,e,t,n,i){const o=Math.cos,a=Math.sin,r=o(t/2),l=a(t/2),c=o((e+n)/2),h=a((e+n)/2),u=o((e-n)/2),d=a((e-n)/2),f=o((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(r*h,l*u,l*d,r*c);break;case"YZY":s.set(l*d,r*h,l*u,r*c);break;case"ZXZ":s.set(l*u,l*d,r*h,r*c);break;case"XZX":s.set(r*h,l*g,l*f,r*c);break;case"YXY":s.set(l*f,r*h,l*g,r*c);break;case"ZYZ":s.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function an(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const X={DEG2RAD:da,RAD2DEG:Oo,generateUUID:Fi,clamp:kn,euclideanModulo:ah,mapLinear:Pp,inverseLerp:Rp,lerp:fa,damp:Dp,pingpong:Ip,smoothstep:Lp,smootherstep:Np,randInt:Up,randFloat:Fp,randFloatSpread:Op,seededRandom:Bp,degToRad:kp,radToDeg:zp,isPowerOfTwo:Gp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Wp,normalize:an,denormalize:Ii};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*i+e.x,this.y=o*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,t,n,i,o,a,r,l,c){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,a,r,l,c)}set(e,t,n,i,o,a,r,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],y=i[4],v=i[7],T=i[2],w=i[5],A=i[8];return o[0]=a*x+r*_+l*T,o[3]=a*m+r*y+l*w,o[6]=a*p+r*v+l*A,o[1]=c*x+h*_+u*T,o[4]=c*m+h*y+u*w,o[7]=c*p+h*v+u*A,o[2]=d*x+f*_+g*T,o[5]=d*m+f*y+g*w,o[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*r*c-n*o*h+n*r*l+i*o*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=h*a-r*c,d=r*l-h*o,f=c*o-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(r*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*o-r*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+e,-i*c,i*l,-i*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new At;function tf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xp(){const s=Sa("canvas");return s.style.display="block",s}const zh={};function ca(s){s in zh||(zh[s]=!0,console.warn(s))}function qp(s,e,t){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Yp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zt={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===on&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===on&&(s.r=Ro(s.r),s.g=Ro(s.g),s.b=Ro(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?Vr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function as(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Gh=[.64,.33,.3,.6,.15,.06],Hh=[.2126,.7152,.0722],Vh=[.3127,.329],Wh=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[jn]:{primaries:Gh,whitePoint:Vh,transfer:Vr,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:Hh,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:Gh,whitePoint:Vh,transfer:on,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:Hh,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}});let ro;class Kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ro===void 0&&(ro=Sa("canvas")),ro.width=e.width,ro.height=e.height;const n=ro.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ro}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=as(o[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(as(t[n]/255)*255):t[n]=as(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zp=0;class nf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(al(i[a].image)):o.push(al(i[a]))}else o=al(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $p=0;class In extends Vo{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,n=Li,i=Li,o=pi,a=ss,r=bi,l=Oi,c=In.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Fi(),this.name="",this.source=new nf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Hd;In.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,n=0,i=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,T=(p+1)/2,w=(h+d)/4,A=(u+x)/4,E=(g+m)/4;return y>v&&y>T?y<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(y),i=w/n,o=A/n):v>T?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=w/i,o=E/i):T<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(T),n=A/o,i=E/o),this.set(n,i,o,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qp extends Vo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new In(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Qp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sf extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jp extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ct{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,a,r){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=o[a+0],f=o[a+1],g=o[a+2],x=o[a+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(r===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-r;const p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,p*_);m=Math.sin(m*w)/T,r=Math.sin(r*w)/T}const v=r*_;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-r){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,o,a){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[a],d=o[a+1],f=o[a+2],g=o[a+3];return e[t]=r*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-r*f,e[t+2]=c*g+h*f+r*d-l*u,e[t+3]=h*g-r*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,o=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),u=r(o/2),d=l(n/2),f=l(i/2),g=l(o/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],a=t[1],r=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(a-i)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(o+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(o-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,a=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*r+i*c-o*l,this._y=i*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-i*r,this._w=a*h-n*r-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*e._w+n*e._x+i*e._y+o*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*i-r*n),h=2*(r*t-o*i),u=2*(o*n-a*t);return this.x=t+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=i+l*u+o*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,a=t.x,r=t.y,l=t.z;return this.x=i*l-o*r,this.y=o*a-n*l,this.z=n*r-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new b,qh=new ct;class ls{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,Ti):Ti.fromBufferAttribute(o,a),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const i=e.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Fa.subVectors(this.max,Zo),lo.subVectors(e.a,Zo),co.subVectors(e.b,Zo),ho.subVectors(e.c,Zo),us.subVectors(co,lo),ds.subVectors(ho,co),Ds.subVectors(lo,ho);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Ds.z,Ds.y,us.z,0,-us.x,ds.z,0,-ds.x,Ds.z,0,-Ds.x,-us.y,us.x,0,-ds.y,ds.x,0,-Ds.y,Ds.x,0];return!ll(t,lo,co,ho,Fa)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,lo,co,ho,Fa))?!1:(Oa.crossVectors(us,ds),t=[Oa.x,Oa.y,Oa.z],ll(t,lo,co,ho,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new b,new b,new b,new b,new b,new b,new b,new b],Ti=new b,Ua=new ls,lo=new b,co=new b,ho=new b,us=new b,ds=new b,Ds=new b,Zo=new b,Fa=new b,Oa=new b,Is=new b;function ll(s,e,t,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){Is.fromArray(s,o);const r=i.x*Math.abs(Is.x)+i.y*Math.abs(Is.y)+i.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const e0=new ls,$o=new b,cl=new b;class ci{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):e0.setFromPoints(e).getCenter(n);let i=0;for(let o=0,a=e.length;o<a;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const t=$o.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($o,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(cl)),this.expandByPoint($o.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new b,hl=new b,Ba=new b,fs=new b,ul=new b,ka=new b,dl=new b;class Aa{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hl.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(hl);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),r=fs.dot(this.direction),l=-fs.dot(Ba),c=fs.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-r,d=a*r-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*o+r)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(a*o+r)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=a>0?-o:o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(hl).addScaledVector(Ba,d),f}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,o=e.radius*e.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(o=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),u>=0?(r=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(r=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,i,o){ul.subVectors(t,e),ka.subVectors(n,e),dl.crossVectors(ul,ka);let a=this.direction.dot(dl),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;fs.subVectors(this.origin,e);const l=r*this.direction.dot(ka.crossVectors(fs,ka));if(l<0)return null;const c=r*this.direction.dot(ul.cross(fs));if(c<0||l+c>a)return null;const h=-r*fs.dot(dl);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,i,o,a,r,l,c,h,u,d,f,g,x,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,a,r,l,c,h,u,d,f,g,x,m)}set(e,t,n,i,o,a,r,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=o,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/uo.setFromMatrixColumn(e,0).length(),o=1/uo.setFromMatrixColumn(e,1).length(),a=1/uo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const d=a*h,f=a*u,g=r*h,x=r*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-r*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*r,t[4]=g*r-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-r,t[2]=f*r-g,t[6]=x+d*r,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*r,t[4]=-a*u,t[8]=g+f*r,t[1]=f+g*r,t[5]=a*h,t[9]=x-d*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=r*h,x=r*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=r*l,x=r*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-r*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=r*l,x=r*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=r*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,n){const i=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ps.crossVectors(n,ui),ps.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ps.crossVectors(n,ui)),ps.normalize(),za.crossVectors(ui,ps),i[0]=ps.x,i[4]=za.x,i[8]=ui.x,i[1]=ps.y,i[5]=za.y,i[9]=ui.y,i[2]=ps.z,i[6]=za.z,i[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],v=n[11],T=n[15],w=i[0],A=i[4],E=i[8],M=i[12],S=i[1],C=i[5],D=i[9],N=i[13],R=i[2],U=i[6],z=i[10],B=i[14],I=i[3],O=i[7],j=i[11],J=i[15];return o[0]=a*w+r*S+l*R+c*I,o[4]=a*A+r*C+l*U+c*O,o[8]=a*E+r*D+l*z+c*j,o[12]=a*M+r*N+l*B+c*J,o[1]=h*w+u*S+d*R+f*I,o[5]=h*A+u*C+d*U+f*O,o[9]=h*E+u*D+d*z+f*j,o[13]=h*M+u*N+d*B+f*J,o[2]=g*w+x*S+m*R+p*I,o[6]=g*A+x*C+m*U+p*O,o[10]=g*E+x*D+m*z+p*j,o[14]=g*M+x*N+m*B+p*J,o[3]=_*w+y*S+v*R+T*I,o[7]=_*A+y*C+v*U+T*O,o[11]=_*E+y*D+v*z+T*j,o[15]=_*M+y*N+v*B+T*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],a=e[1],r=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+o*l*u-i*c*u-o*r*d+n*c*d+i*r*f-n*l*f)+x*(+t*l*f-t*c*d+o*a*d-i*a*f+i*c*h-o*l*h)+m*(+t*c*u-t*r*f-o*a*u+n*a*f+o*r*h-n*c*h)+p*(-i*r*h-t*l*u+t*r*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*c-x*d*c+x*l*f-r*m*f-u*l*p+r*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*x*c-g*u*c+g*r*f-a*x*f-h*r*p+a*u*p,T=g*u*l-h*x*l-g*r*d+a*x*d+h*r*m-a*u*m,w=t*_+n*y+i*v+o*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=_*A,e[1]=(x*d*o-u*m*o-x*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(r*m*o-x*l*o+x*i*c-n*m*c-r*i*p+n*l*p)*A,e[3]=(u*l*o-r*d*o-u*i*c+n*d*c+r*i*f-n*l*f)*A,e[4]=y*A,e[5]=(h*m*o-g*d*o+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*o-a*m*o-g*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*d*o-h*l*o+h*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=v*A,e[9]=(g*u*o-h*x*o-g*n*f+t*x*f+h*n*p-t*u*p)*A,e[10]=(a*x*o-g*r*o+g*n*c-t*x*c-a*n*p+t*r*p)*A,e[11]=(h*r*o-a*u*o-h*n*c+t*u*c+a*n*f-t*r*f)*A,e[12]=T*A,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*A,e[14]=(g*r*i-a*x*i-g*n*l+t*x*l+a*n*m-t*r*m)*A,e[15]=(a*u*i-h*r*i+h*n*l-t*u*l-a*n*d+t*r*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,a=e.x,r=e.y,l=e.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*a,0,c*l-i*r,h*l+i*a,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,a){return this.set(1,n,o,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,a=t._y,r=t._z,l=t._w,c=o+o,h=a+a,u=r+r,d=o*c,f=o*h,g=o*u,x=a*h,m=a*u,p=r*u,_=l*c,y=l*h,v=l*u,T=n.x,w=n.y,A=n.z;return i[0]=(1-(x+p))*T,i[1]=(f+v)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(g+y)*A,i[9]=(m-_)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=uo.set(i[0],i[1],i[2]).length();const a=uo.set(i[4],i[5],i[6]).length(),r=uo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],Ci.copy(this);const c=1/o,h=1/a,u=1/r;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,t.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=r,this}makePerspective(e,t,n,i,o,a,r=os){const l=this.elements,c=2*o/(t-e),h=2*o/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(r===os)f=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===Nr)f=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,o,a,r=os){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-o),d=(t+e)*c,f=(n+i)*h;let g,x;if(r===os)g=(a+o)*u,x=-2*u;else if(r===Nr)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const uo=new b,Ci=new nt,t0=new b(0,0,0),n0=new b(1,1,1),ps=new b,za=new b,ui=new b,Yh=new nt,jh=new ct;class li{constructor(e=0,t=0,n=0,i=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],a=i[4],r=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(kn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(kn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-kn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jh.setFromEuler(this),this.setFromQuaternion(jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i0=0;const Kh=new b,fo=new ct,$i=new nt,Ga=new b,Qo=new b,s0=new b,o0=new ct,Zh=new b(1,0,0),$h=new b(0,1,0),Qh=new b(0,0,1),Jh={type:"added"},a0={type:"removed"},po={type:"childadded",child:null},fl={type:"childremoved",child:null};class jt extends Vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new b,t=new li,n=new ct,i=new b(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new At}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Qo,Ga,this.up):$i.lookAt(Ga,Qo,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),fo.setFromRotationMatrix($i),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),po.child=e,this.dispatchEvent(po),po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a0),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(e.materials,this.material[l]));i.material=r}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(o(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}jt.DEFAULT_UP=new b(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new b,Qi=new b,pl=new b,Ji=new b,mo=new b,go=new b,eu=new b,ml=new b,gl=new b,xl=new b,vl=new Qt,_l=new Qt,Ml=new Qt;class Mi{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pi.subVectors(e,t),i.cross(Pi);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){Pi.subVectors(i,t),Qi.subVectors(n,t),pl.subVectors(e,t);const a=Pi.dot(Pi),r=Pi.dot(Qi),l=Pi.dot(pl),c=Qi.dot(Qi),h=Qi.dot(pl),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-r*h)*d,g=(a*h-r*l)*d;return o.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,i,o,a,r,l){return this.getBarycoord(e,t,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ji.x),l.addScaledVector(a,Ji.y),l.addScaledVector(r,Ji.z),l)}static getInterpolatedAttribute(e,t,n,i,o,a){return vl.setScalar(0),_l.setScalar(0),Ml.setScalar(0),vl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),Ml.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vl,o.x),a.addScaledVector(_l,o.y),a.addScaledVector(Ml,o.z),a}static isFrontFacing(e,t,n,i){return Pi.subVectors(n,t),Qi.subVectors(e,t),Pi.cross(Qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Pi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let a,r;mo.subVectors(i,n),go.subVectors(o,n),ml.subVectors(e,n);const l=mo.dot(ml),c=go.dot(ml);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,i);const h=mo.dot(gl),u=go.dot(gl);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(mo,a);xl.subVectors(e,o);const f=mo.dot(xl),g=go.dot(xl);if(g>=0&&f<=g)return t.copy(o);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(go,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return eu.subVectors(o,i),r=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(eu,r);const p=1/(m+x+d);return a=x*p,r=d*p,t.copy(n).addScaledVector(mo,a).addScaledVector(go,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function yl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=zt.workingColorSpace){if(e=ah(e,1),t=kn(t,0,1),n=kn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=yl(a,o,e+1/3),this.g=yl(a,o,e),this.b=yl(a,o,e-1/3)}return zt.toWorkingColorSpace(this,i),this}setStyle(e,t=$t){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return zt.fromWorkingColorSpace(Yn.copy(this),e),Math.round(kn(Yn.r*255,0,255))*65536+Math.round(kn(Yn.g*255,0,255))*256+Math.round(kn(Yn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(Yn.copy(this),t);const n=Yn.r,i=Yn.g,o=Yn.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=$t){zt.fromWorkingColorSpace(Yn.copy(this),e);const t=Yn.r,n=Yn.g,i=Yn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Ha);const n=fa(ms.h,Ha.h,t),i=fa(ms.s,Ha.s,t),o=fa(ms.l,Ha.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new te;te.NAMES=of;let r0=0;class Si extends Vo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Fi(),this.name="",this.blending=Ws,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(t){const o=i(e.textures),a=i(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gn extends Si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pn=new b,Va=new Ue;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix3(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array),o=an(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class af extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rf extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let l0=0;const xi=new nt,bl=new jt,xo=new b,di=new ls,Jo=new ls,Bn=new b;class Tt extends Vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tf(e)?rf:af)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new At().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];di.setFromBufferAttribute(o),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const r=t[o];Jo.setFromBufferAttribute(r),this.morphTargetsRelative?(Bn.addVectors(di.min,Jo.min),di.expandByPoint(Bn),Bn.addVectors(di.max,Jo.max),di.expandByPoint(Bn)):(di.expandByPoint(Jo.min),di.expandByPoint(Jo.max))}di.getCenter(n);let i=0;for(let o=0,a=e.count;o<a;o++)Bn.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(Bn));if(t)for(let o=0,a=t.length;o<a;o++){const r=t[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Bn.fromBufferAttribute(r,c),l&&(xo.fromBufferAttribute(e,c),Bn.add(xo)),i=Math.max(i,n.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let E=0;E<n.count;E++)r[E]=new b,l[E]=new b;const c=new b,h=new b,u=new b,d=new Ue,f=new Ue,g=new Ue,x=new b,m=new b;function p(E,M,S){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(o,E),f.fromBufferAttribute(o,M),g.fromBufferAttribute(o,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),r[E].add(x),r[M].add(x),r[S].add(x),l[E].add(m),l[M].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let E=0,M=_.length;E<M;++E){const S=_[E],C=S.start,D=S.count;for(let N=C,R=C+D;N<R;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new b,v=new b,T=new b,w=new b;function A(E){T.fromBufferAttribute(i,E),w.copy(T);const M=r[E];y.copy(M),y.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(w,M);const C=v.dot(l[E])<0?-1:1;a.setXYZW(E,y.x,y.y,y.z,C)}for(let E=0,M=_.length;E<M;++E){const S=_[E],C=S.start,D=S.count;for(let N=C,R=C+D;N<R;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,o=new b,a=new b,r=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,o),u.subVectors(i,o),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){r.isInterleavedBufferAttribute?f=l[x]*r.data.stride+r.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=e(l,n);t.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new nt,Ls=new Aa,Wa=new ci,nu=new b,Xa=new b,qa=new b,Ya=new b,Sl=new b,ja=new b,iu=new b,Ka=new b;class Ge extends jt{constructor(e=new Tt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(o&&r){ja.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(Sl.fromBufferAttribute(u,e),a?ja.addScaledVector(Sl,h):ja.addScaledVector(Sl.sub(t),h))}t.add(ja)}return t}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(o),Ls.copy(e.ray).recast(e.near),!(Wa.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Wa,nu)===null||Ls.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(o).invert(),Ls.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let i;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,T=y;v<T;v+=3){const w=r.getX(v),A=r.getX(v+1),E=r.getX(v+2);i=Za(this,p,e,n,c,h,u,w,A,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(r.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=r.getX(m),y=r.getX(m+1),v=r.getX(m+2);i=Za(this,a,e,n,c,h,u,_,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,T=y;v<T;v+=3){const w=v,A=v+1,E=v+2;i=Za(this,p,e,n,c,h,u,w,A,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=m,y=m+1,v=m+2;i=Za(this,a,e,n,c,h,u,_,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function c0(s,e,t,n,i,o,a,r){let l;if(e.side===zn?l=n.intersectTriangle(a,o,i,!0,r):l=n.intersectTriangle(i,o,a,e.side===wi,r),l===null)return null;Ka.copy(r),Ka.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:s}}function Za(s,e,t,n,i,o,a,r,l,c){s.getVertexPosition(r,Xa),s.getVertexPosition(l,qa),s.getVertexPosition(c,Ya);const h=c0(s,e,t,n,Xa,qa,Ya,iu);if(h){const u=new b;Mi.getBarycoord(iu,Xa,qa,Ya,u),i&&(h.uv=Mi.getInterpolatedAttribute(i,r,l,c,u,new Ue)),o&&(h.uv1=Mi.getInterpolatedAttribute(o,r,l,c,u,new Ue)),a&&(h.normal=Mi.getInterpolatedAttribute(a,r,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new b,materialIndex:0};Mi.getNormal(Xa,qa,Ya,d.normal),h.face=d,h.barycoord=u}return h}class pn extends Tt{constructor(e=1,t=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,o,0),g("z","y","x",1,-1,n,t,-e,a,o,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,o,4),g("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(x,m,p,_,y,v,T,w,A,E,M){const S=v/A,C=T/E,D=v/2,N=T/2,R=w/2,U=A+1,z=E+1;let B=0,I=0;const O=new b;for(let j=0;j<z;j++){const J=j*C-N;for(let ne=0;ne<U;ne++){const ye=ne*S-D;O[x]=ye*_,O[m]=J*y,O[p]=R,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[p]=w>0?1:-1,h.push(O.x,O.y,O.z),u.push(ne/A),u.push(1-j/E),B+=1}}for(let j=0;j<E;j++)for(let J=0;J<A;J++){const ne=d+J+U*j,ye=d+J+U*(j+1),Q=d+(J+1)+U*(j+1),de=d+(J+1)+U*j;l.push(ne,ye,de),l.push(ye,Q,de),I+=6}r.addGroup(f,I,M),f+=I,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $n(s){const e={};for(let t=0;t<s.length;t++){const n=Bo(s[t]);for(const i in n)e[i]=n[i]}return e}function h0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function lf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const Ni={clone:Bo,merge:$n};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cf extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=os}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new b,su=new Ue,ou=new Ue;class Hn extends cf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,su,ou),t.subVectors(ou,su)}setViewOffset(e,t,n,i,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(da*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vo=-90,_o=1;class f0 extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(vo,_o,e,t);i.layers=this.layers,this.add(i);const o=new Hn(vo,_o,e,t);o.layers=this.layers,this.add(o);const a=new Hn(vo,_o,e,t);a.layers=this.layers,this.add(a);const r=new Hn(vo,_o,e,t);r.layers=this.layers,this.add(r);const l=new Hn(vo,_o,e,t);l.layers=this.layers,this.add(l);const c=new Hn(vo,_o,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,o,a,r,l]=t;for(const c of t)this.remove(c);if(e===os)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,r),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hf extends In{constructor(e,t,n,i,o,a,r,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Uo,super(e,t,n,i,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p0 extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pn(5,5,5),o=new ln({name:"CubemapFromEquirect",uniforms:Bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Jn});o.uniforms.tEquirect.value=t;const a=new Ge(i,o),r=t.minFilter;return t.minFilter===ss&&(t.minFilter=pi),new f0(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(o)}}const wl=new b,m0=new b,g0=new At;class Ms{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wl.subVectors(n,t).cross(m0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||g0.getNormalMatrix(e),i=this.coplanarPoint(wl).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new ci,$a=new b;class lh{constructor(e=new Ms,t=new Ms,n=new Ms,i=new Ms,o=new Ms,a=new Ms){this.planes=[e,t,n,i,o,a]}set(e,t,n,i,o,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=os){const n=this.planes,i=e.elements,o=i[0],a=i[1],r=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-o,d-c,m-f,v-p).normalize(),n[1].setComponents(l+o,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+_).normalize(),n[3].setComponents(l-a,d-h,m-g,v-_).normalize(),n[4].setComponents(l-r,d-u,m-x,v-y).normalize(),t===os)n[5].setComponents(l+r,d+u,m+x,v+y).normalize();else if(t===Nr)n[5].setComponents(r,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($a.x=i.normal.x>0?e.max.x:e.min.x,$a.y=i.normal.y>0?e.max.y:e.min.y,$a.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uf(){let s=null,e=!1,t=null,n=null;function i(o,a){t(o,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function x0(s){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,r),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(s.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:o,update:a}}class cs extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,a=t/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,u=e/r,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const _=p*d-a;for(let y=0;y<c;y++){const v=y*u-o;g.push(v,-_,0),x.push(0,0,1),m.push(y/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<r;_++){const y=_+c*p,v=_+c*(p+1),T=_+1+c*(p+1),w=_+1+c*p;f.push(y,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,T0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,xm=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#define LAMBERT
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,zg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Vg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,Xg=`uniform float size;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,jg=`uniform vec3 color;
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
}`,Kg=`uniform float rotation;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:v0,alphahash_pars_fragment:_0,alphamap_fragment:M0,alphamap_pars_fragment:y0,alphatest_fragment:b0,alphatest_pars_fragment:S0,aomap_fragment:w0,aomap_pars_fragment:E0,batching_pars_vertex:A0,batching_vertex:T0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:R0,iridescence_fragment:D0,bumpmap_pars_fragment:I0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:B0,color_pars_vertex:k0,color_vertex:z0,common:G0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:V0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:j0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:$0,envmap_pars_fragment:Q0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:hm,envmap_vertex:em,fog_vertex:tm,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:om,lightmap_pars_fragment:am,lights_lambert_fragment:rm,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:um,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:xm,lights_fragment_maps:vm,lights_fragment_end:_m,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Sm,map_fragment:wm,map_pars_fragment:Em,map_particle_fragment:Am,map_particle_pars_fragment:Tm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Rm,morphcolor_vertex:Dm,morphnormal_vertex:Im,morphtarget_pars_vertex:Lm,morphtarget_vertex:Nm,normal_fragment_begin:Um,normal_fragment_maps:Fm,normal_pars_fragment:Om,normal_pars_vertex:Bm,normal_vertex:km,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:jm,dithering_fragment:Km,dithering_pars_fragment:Zm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:eg,shadowmap_vertex:tg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:rg,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:xg,background_frag:vg,backgroundCube_vert:_g,backgroundCube_frag:Mg,cube_vert:yg,cube_frag:bg,depth_vert:Sg,depth_frag:wg,distanceRGBA_vert:Eg,distanceRGBA_frag:Ag,equirect_vert:Tg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Rg,meshbasic_vert:Dg,meshbasic_frag:Ig,meshlambert_vert:Lg,meshlambert_frag:Ng,meshmatcap_vert:Ug,meshmatcap_frag:Fg,meshnormal_vert:Og,meshnormal_frag:Bg,meshphong_vert:kg,meshphong_frag:zg,meshphysical_vert:Gg,meshphysical_frag:Hg,meshtoon_vert:Vg,meshtoon_frag:Wg,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:jg,sprite_vert:Kg,sprite_frag:Zg},We={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},zi={basic:{uniforms:$n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:$n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new te(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:$n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:$n([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:$n([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new te(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:$n([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:$n([We.points,We.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:$n([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:$n([We.common,We.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:$n([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:$n([We.sprite,We.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:$n([We.common,We.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:$n([We.lights,We.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};zi.physical={uniforms:$n([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Qa={r:0,b:0,g:0},Us=new li,$g=new nt;function Qg(s,e,t,n,i,o,a){const r=new te(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1;const v=g(_);v===null?p(r,l):v&&v.isColor&&(p(v,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===Gr)?(h===void 0&&(h=new Ge(new pn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Bo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Us.copy(y.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(Us)),h.material.toneMapped=zt.getTransfer(v.colorSpace)!==on,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ge(new cs(2,2),new ln({name:"BackgroundMaterial",uniforms:Bo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=zt.getTransfer(v.colorSpace)!==on,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Qa,lf(s)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,y,a)}return{getClearColor:function(){return r},setClearColor:function(_,y=1){r.set(_),l=y,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(r,l)},render:x,addToRenderList:m}}function Jg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,a=!1;function r(S,C,D,N,R){let U=!1;const z=u(N,D,C);o!==z&&(o=z,c(o.object)),U=f(S,N,D,R),U&&g(S,N,D,R),R!==null&&e.update(R,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,v(S,C,D,N),R!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,C,D){const N=D.wireframe===!0;let R=n[S.id];R===void 0&&(R={},n[S.id]=R);let U=R[C.id];U===void 0&&(U={},R[C.id]=U);let z=U[N];return z===void 0&&(z=d(l()),U[N]=z),z}function d(S){const C=[],D=[],N=[];for(let R=0;R<t;R++)C[R]=0,D[R]=0,N[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,C,D,N){const R=o.attributes,U=C.attributes;let z=0;const B=D.getAttributes();for(const I in B)if(B[I].location>=0){const j=R[I];let J=U[I];if(J===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),j===void 0||j.attribute!==J||J&&j.data!==J.data)return!0;z++}return o.attributesNum!==z||o.index!==N}function g(S,C,D,N){const R={},U=C.attributes;let z=0;const B=D.getAttributes();for(const I in B)if(B[I].location>=0){let j=U[I];j===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));const J={};J.attribute=j,j&&j.data&&(J.data=j.data),R[I]=J,z++}o.attributes=R,o.attributesNum=z,o.index=N}function x(){const S=o.newAttributes;for(let C=0,D=S.length;C<D;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const D=o.newAttributes,N=o.enabledAttributes,R=o.attributeDivisors;D[S]=1,N[S]===0&&(s.enableVertexAttribArray(S),N[S]=1),R[S]!==C&&(s.vertexAttribDivisor(S,C),R[S]=C)}function _(){const S=o.newAttributes,C=o.enabledAttributes;for(let D=0,N=C.length;D<N;D++)C[D]!==S[D]&&(s.disableVertexAttribArray(D),C[D]=0)}function y(S,C,D,N,R,U,z){z===!0?s.vertexAttribIPointer(S,C,D,R,U):s.vertexAttribPointer(S,C,D,N,R,U)}function v(S,C,D,N){x();const R=N.attributes,U=D.getAttributes(),z=C.defaultAttributeValues;for(const B in U){const I=U[B];if(I.location>=0){let O=R[B];if(O===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(O=S.instanceColor)),O!==void 0){const j=O.normalized,J=O.itemSize,ne=e.get(O);if(ne===void 0)continue;const ye=ne.buffer,Q=ne.type,de=ne.bytesPerElement,xe=Q===s.INT||Q===s.UNSIGNED_INT||O.gpuType===Jc;if(O.isInterleavedBufferAttribute){const $=O.data,ae=$.stride,me=O.offset;if($.isInstancedInterleavedBuffer){for(let re=0;re<I.locationSize;re++)p(I.location+re,$.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<I.locationSize;re++)m(I.location+re);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let re=0;re<I.locationSize;re++)y(I.location+re,J/I.locationSize,Q,j,ae*de,(me+J/I.locationSize*re)*de,xe)}else{if(O.isInstancedBufferAttribute){for(let $=0;$<I.locationSize;$++)p(I.location+$,O.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let $=0;$<I.locationSize;$++)m(I.location+$);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let $=0;$<I.locationSize;$++)y(I.location+$,J/I.locationSize,Q,j,J*de,J/I.locationSize*$*de,xe)}}else if(z!==void 0){const j=z[B];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(I.location,j);break;case 3:s.vertexAttrib3fv(I.location,j);break;case 4:s.vertexAttrib4fv(I.location,j);break;default:s.vertexAttrib1fv(I.location,j)}}}}_()}function T(){E();for(const S in n){const C=n[S];for(const D in C){const N=C[D];for(const R in N)h(N[R].object),delete N[R];delete C[D]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const D in C){const N=C[D];for(const R in N)h(N[R].object),delete N[R];delete C[D]}delete n[S.id]}function A(S){for(const C in n){const D=n[C];if(D[S.id]===void 0)continue;const N=D[S.id];for(const R in N)h(N[R].object),delete N[R];delete D[S.id]}}function E(){M(),a=!0,o!==i&&(o=i,c(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:E,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function ex(s,e,t){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function r(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function tx(s,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==bi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const E=A===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Oi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yi&&!E)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function nx(s){const e=this;let t=null,n=0,i=!1,o=!1;const a=new Ms,r=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||o&&!m)o?h(null):c();else{const _=o?0:n,y=_*4;let v=p.clippingState||null;l.value=v,v=h(g,d,y,f);for(let T=0;T!==y;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,_=d.matrixWorldInverse;r.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)a.copy(u[y]).applyMatrix4(_,r),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ix(s){let e=new WeakMap;function t(a,r){return r===uc?a.mapping=Uo:r===dc&&(a.mapping=Fo),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===uc||r===dc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new p0(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Wr extends cf{constructor(e=-1,t=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,a=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const To=4,au=[.125,.215,.35,.446,.526,.582],Gs=20,El=new Wr,ru=new te;let Al=null,Tl=0,Cl=0,Pl=!1;const zs=(1+Math.sqrt(5))/2,Mo=1/zs,lu=[new b(-zs,Mo,0),new b(zs,Mo,0),new b(-Mo,0,zs),new b(Mo,0,zs),new b(0,zs,-Mo),new b(0,zs,Mo),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Al=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Al,Tl,Cl),this._renderer.xr.enabled=Pl,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Uo||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Ui,format:bi,colorSpace:jn,depthBuffer:!1},i=cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(o)),this._blurMaterial=ox(o,e,t)}return i}_compileMaterial(e){const t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,i){const r=new Hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ru),h.toneMapping=As,h.autoClear=!1;const f=new gn({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new Ge(new pn,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(ru),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(r.up.set(0,l[p],0),r.lookAt(c[p],0,0)):_===1?(r.up.set(0,0,l[p]),r.lookAt(0,c[p],0)):(r.up.set(0,l[p],0),r.lookAt(0,0,c[p]));const y=this._cubeSize;Ja(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Uo||e.mapping===Fo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=e;const l=this._cubeSize;Ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,El)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=lu[(i-o-1)%lu.length];this._blur(e,o-1,o,a,r)}t.autoClear=n}_blur(e,t,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",o),this._halfBlur(a,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ge(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Gs-1),x=o/g,m=isFinite(o)?1+Math.floor(h*x):Gs;m>Gs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gs}`);const p=[];let _=0;for(let A=0;A<Gs;++A){const E=A/x,M=Math.exp(-E*E/2);p.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[i],T=3*v*(i>y-To?i-y+To:0),w=4*(this._cubeSize-v);Ja(t,T,w,3*v,2*v),l.setRenderTarget(t),l.render(u,El)}}function sx(s){const e=[],t=[],n=[];let i=s;const o=s-To+1+au.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);t.push(r);let l=1/r;a>s-To?l=au[a-s+To-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,E=w>2?0:-1,M=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];_.set(M,x*g*w),y.set(d,m*g*w);const S=[w,w,w,w,w,w];v.set(S,p*g*w)}const T=new Tt;T.setAttribute("position",new bt(_,x)),T.setAttribute("uv",new bt(y,m)),T.setAttribute("faceIndex",new bt(v,p)),e.push(T),i>To&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cu(s,e,t){const n=new ai(s,e,t);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ox(s,e,t){const n=new Float32Array(Gs),i=new b(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function hu(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function uu(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function ax(s){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===uc||l===dc,h=l===Uo||l===Fo;if(c||h){let u=e.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return t===null&&(t=new Hc(s)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Hc(s)),u=c?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function rx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ca("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lx(s,e,t,n){const i={},o=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=o.get(d);f&&(e.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function r(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){const T=_[y+0],w=_[y+1],A=_[y+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){const _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const T=y+0,w=y+1,A=y+2;d.push(T,w,w,A,A,T)}}else return;const m=new(tf(d)?rf:af)(d,1);m.version=x;const p=o.get(u);p&&e.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function cx(s,e,t){let n;function i(d){n=d}let o,a;function r(d){o=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,o,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,o,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=r*(o/3);break;case s.LINES:t.lines+=r*(o/2);break;case s.LINE_STRIP:t.lines+=r*(o-1);break;case s.LINE_LOOP:t.lines+=r*o;break;case s.POINTS:t.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ux(s,e,t){const n=new WeakMap,i=new Qt;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let S=function(){E.dispose(),n.delete(r),r.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],_=r.morphAttributes.normal||[],y=r.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let T=r.attributes.position.count*v,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*u),E=new sf(A,T,w,u);E.type=yi,E.needsUpdate=!0;const M=v*4;for(let C=0;C<u;C++){const D=p[C],N=_[C],R=y[C],U=T*w*4*C;for(let z=0;z<D.count;z++){const B=z*M;g===!0&&(i.fromBufferAttribute(D,z),A[U+B+0]=i.x,A[U+B+1]=i.y,A[U+B+2]=i.z,A[U+B+3]=0),x===!0&&(i.fromBufferAttribute(N,z),A[U+B+4]=i.x,A[U+B+5]=i.y,A[U+B+6]=i.z,A[U+B+7]=0),m===!0&&(i.fromBufferAttribute(R,z),A[U+B+8]=i.x,A[U+B+9]=i.y,A[U+B+10]=i.z,A[U+B+11]=R.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new Ue(T,w)},n.set(r,d),r.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function dx(s,e,t,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}class hh extends In{constructor(e,t,n,i,o,a,r,l,c,h=Po){if(h!==Po&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Po&&(n=qs),n===void 0&&h===js&&(n=Ys),super(null,i,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const df=new In,du=new hh(1,1),ff=new sf,pf=new Jp,mf=new hf,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function Wo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let o=fu[i];if(o===void 0&&(o=new Float32Array(i),fu[i]=o),e!==0){n.toArray(o,0);for(let a=1,r=0;a!==e;++a)r+=t,s[a].toArray(o,r)}return o}function Un(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Fn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xr(s,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function fx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function px(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;s.uniform2fv(this.addr,e),Fn(t,e)}}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Un(t,e))return;s.uniform3fv(this.addr,e),Fn(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;s.uniform4fv(this.addr,e),Fn(t,e)}}function xx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;xu.set(n),s.uniformMatrix2fv(this.addr,!1,xu),Fn(t,n)}}function vx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;gu.set(n),s.uniformMatrix3fv(this.addr,!1,gu),Fn(t,n)}}function _x(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;mu.set(n),s.uniformMatrix4fv(this.addr,!1,mu),Fn(t,n)}}function Mx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;s.uniform2iv(this.addr,e),Fn(t,e)}}function bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;s.uniform3iv(this.addr,e),Fn(t,e)}}function Sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;s.uniform4iv(this.addr,e),Fn(t,e)}}function wx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;s.uniform2uiv(this.addr,e),Fn(t,e)}}function Ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;s.uniform3uiv(this.addr,e),Fn(t,e)}}function Tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;s.uniform4uiv(this.addr,e),Fn(t,e)}}function Cx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(du.compareFunction=ef,o=du):o=df,t.setTexture2D(e||o,i)}function Px(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pf,i)}function Rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mf,i)}function Dx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ff,i)}function Ix(s){switch(s){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return vx;case 35676:return _x;case 5124:case 35670:return Mx;case 35667:case 35671:return yx;case 35668:case 35672:return bx;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return Ex;case 36295:return Ax;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Dx}}function Lx(s,e){s.uniform1fv(this.addr,e)}function Nx(s,e){const t=Wo(e,this.size,2);s.uniform2fv(this.addr,t)}function Ux(s,e){const t=Wo(e,this.size,3);s.uniform3fv(this.addr,t)}function Fx(s,e){const t=Wo(e,this.size,4);s.uniform4fv(this.addr,t)}function Ox(s,e){const t=Wo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bx(s,e){const t=Wo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kx(s,e){const t=Wo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zx(s,e){s.uniform1iv(this.addr,e)}function Gx(s,e){s.uniform2iv(this.addr,e)}function Hx(s,e){s.uniform3iv(this.addr,e)}function Vx(s,e){s.uniform4iv(this.addr,e)}function Wx(s,e){s.uniform1uiv(this.addr,e)}function Xx(s,e){s.uniform2uiv(this.addr,e)}function qx(s,e){s.uniform3uiv(this.addr,e)}function Yx(s,e){s.uniform4uiv(this.addr,e)}function jx(s,e,t){const n=this.cache,i=e.length,o=Xr(t,i);Un(n,o)||(s.uniform1iv(this.addr,o),Fn(n,o));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||df,o[a])}function Kx(s,e,t){const n=this.cache,i=e.length,o=Xr(t,i);Un(n,o)||(s.uniform1iv(this.addr,o),Fn(n,o));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pf,o[a])}function Zx(s,e,t){const n=this.cache,i=e.length,o=Xr(t,i);Un(n,o)||(s.uniform1iv(this.addr,o),Fn(n,o));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||mf,o[a])}function $x(s,e,t){const n=this.cache,i=e.length,o=Xr(t,i);Un(n,o)||(s.uniform1iv(this.addr,o),Fn(n,o));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ff,o[a])}function Qx(s){switch(s){case 5126:return Lx;case 35664:return Nx;case 35665:return Ux;case 35666:return Fx;case 35674:return Ox;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return zx;case 35667:case 35671:return Gx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return $x}}class Jx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ix(t.type)}}class ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qx(t.type)}}class tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(e,t[r.id],n)}}}const Rl=/(\w+)(\])?(\[|\.)?/g;function vu(s,e){s.seq.push(e),s.map[e.id]=e}function nv(s,e,t){const n=s.name,i=n.length;for(Rl.lastIndex=0;;){const o=Rl.exec(n),a=Rl.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){vu(t,c===void 0?new Jx(r,s,e):new ev(r,s,e));break}else{let u=t.map[r];u===void 0&&(u=new tv(r),vu(t,u)),t=u}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),a=e.getUniformLocation(t,o.name);nv(o,a,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,a=t.length;o!==a;++o){const r=t[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function _u(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const iv=37297;let sv=0;function ov(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return n.join(`
`)}const Mu=new At;function av(s){zt._getMatrix(Mu,zt.workingColorSpace,s);const e=`mat3( ${Mu.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(s)){case Vr:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+ov(s.getShaderSource(e),a)}else return i}function rv(s,e){const t=av(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lv(s,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case kd:t="Cineon";break;case zr:t="ACESFilmic";break;case zd:t="AgX";break;case Gd:t="Neutral";break;case gp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const er=new b;function cv(){zt.getLuminanceCoefficients(er);const s=er.x.toFixed(4),e=er.y.toFixed(4),t=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function uv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),t[a]={type:o.type,location:s.getAttribLocation(e,a),locationSize:r}}return t}function ha(s){return s!==""}function bu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(s){return s.replace(fv,mv)}const pv=new Map;function mv(s,e){let t=Rt[e];if(t===void 0){const n=pv.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vc(t)}const gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(s){return s.replace(gv,xv)}function xv(s,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Eu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function vv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ts&&(e="SHADOWMAP_TYPE_VSM"),e}function _v(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Uo:case Fo:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fo:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fd:e="ENVMAP_BLENDING_MULTIPLY";break;case pp:e="ENVMAP_BLENDING_MIX";break;case mp:e="ENVMAP_BLENDING_ADD";break}return e}function bv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sv(s,e,t,n){const i=s.getContext(),o=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=vv(t),c=_v(t),h=Mv(t),u=yv(t),d=bv(t),f=hv(t),g=uv(o),x=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(m=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?Rt.tonemapping_pars_fragment:"",t.toneMapping!==As?lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,rv("linearToOutputTexel",t.outputColorSpace),cv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),a=Vc(a),a=bu(a,t),a=Su(a,t),r=Vc(r),r=bu(r,t),r=Su(r,t),a=wu(a),r=wu(r),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+a,v=_+p+r,T=_u(i,i.VERTEX_SHADER,y),w=_u(i,i.FRAGMENT_SHADER,v);i.attachShader(x,T),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(C){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(T).trim(),R=i.getShaderInfoLog(w).trim();let U=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,w);else{const B=yu(i,T,"vertex"),I=yu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+B+`
`+I)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||R==="")&&(z=!1);z&&(C.diagnostics={runnable:U,programLog:D,vertexShader:{log:N,prefix:m},fragmentShader:{log:R,prefix:p}})}i.deleteShader(T),i.deleteShader(w),E=new Pr(i,x),M=dv(i,x)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,iv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let wv=0;class Ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Av(e),t.set(e,n)),n}}class Av{constructor(e){this.id=wv++,this.code=e,this.usedTimes=0}}function Tv(s,e,t,n,i,o,a){const r=new rh,l=new Ev,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,C,D,N){const R=D.fog,U=N.geometry,z=M.isMeshStandardMaterial?D.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),I=B&&B.mapping===Gr?B.image.height:null,O=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=j!==void 0?j.length:0;let ne=0;U.morphAttributes.position!==void 0&&(ne=1),U.morphAttributes.normal!==void 0&&(ne=2),U.morphAttributes.color!==void 0&&(ne=3);let ye,Q,de,xe;if(O){const mt=zi[O];ye=mt.vertexShader,Q=mt.fragmentShader}else ye=M.vertexShader,Q=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const $=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),me=N.isInstancedMesh===!0,re=N.isBatchedMesh===!0,Me=!!M.map,V=!!M.matcap,Re=!!B,k=!!M.aoMap,it=!!M.lightMap,ge=!!M.bumpMap,Ne=!!M.normalMap,Be=!!M.displacementMap,rt=!!M.emissiveMap,Ve=!!M.metalnessMap,F=!!M.roughnessMap,L=M.anisotropy>0,ee=M.clearcoat>0,ve=M.dispersion>0,le=M.iridescence>0,ce=M.sheen>0,Ie=M.transmission>0,Se=L&&!!M.anisotropyMap,ze=ee&&!!M.clearcoatMap,xt=ee&&!!M.clearcoatNormalMap,Ae=ee&&!!M.clearcoatRoughnessMap,Fe=le&&!!M.iridescenceMap,st=le&&!!M.iridescenceThicknessMap,ht=ce&&!!M.sheenColorMap,qe=ce&&!!M.sheenRoughnessMap,pt=!!M.specularMap,ut=!!M.specularColorMap,vt=!!M.specularIntensityMap,K=Ie&&!!M.transmissionMap,Pe=Ie&&!!M.thicknessMap,fe=!!M.gradientMap,_e=!!M.alphaMap,Oe=M.alphaTest>0,He=!!M.alphaHash,Ye=!!M.extensions;let Nt=As;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Ft={shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:ye,fragmentShader:Q,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:re,batchingColor:re&&N._colorsTexture!==null,instancing:me,instancingColor:me&&N.instanceColor!==null,instancingMorph:me&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:jn,alphaToCoverage:!!M.alphaToCoverage,map:Me,matcap:V,envMap:Re,envMapMode:Re&&B.mapping,envMapCubeUVHeight:I,aoMap:k,lightMap:it,bumpMap:ge,normalMap:Ne,displacementMap:d&&Be,emissiveMap:rt,normalMapObjectSpace:Ne&&M.normalMapType===yp,normalMapTangentSpace:Ne&&M.normalMapType===oh,metalnessMap:Ve,roughnessMap:F,anisotropy:L,anisotropyMap:Se,clearcoat:ee,clearcoatMap:ze,clearcoatNormalMap:xt,clearcoatRoughnessMap:Ae,dispersion:ve,iridescence:le,iridescenceMap:Fe,iridescenceThicknessMap:st,sheen:ce,sheenColorMap:ht,sheenRoughnessMap:qe,specularMap:pt,specularColorMap:ut,specularIntensityMap:vt,transmission:Ie,transmissionMap:K,thicknessMap:Pe,gradientMap:fe,opaque:M.transparent===!1&&M.blending===Ws&&M.alphaToCoverage===!1,alphaMap:_e,alphaTest:Oe,alphaHash:He,combine:M.combine,mapUv:Me&&x(M.map.channel),aoMapUv:k&&x(M.aoMap.channel),lightMapUv:it&&x(M.lightMap.channel),bumpMapUv:ge&&x(M.bumpMap.channel),normalMapUv:Ne&&x(M.normalMap.channel),displacementMapUv:Be&&x(M.displacementMap.channel),emissiveMapUv:rt&&x(M.emissiveMap.channel),metalnessMapUv:Ve&&x(M.metalnessMap.channel),roughnessMapUv:F&&x(M.roughnessMap.channel),anisotropyMapUv:Se&&x(M.anisotropyMap.channel),clearcoatMapUv:ze&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&x(M.sheenRoughnessMap.channel),specularMapUv:pt&&x(M.specularMap.channel),specularColorMapUv:ut&&x(M.specularColorMap.channel),specularIntensityMapUv:vt&&x(M.specularIntensityMap.channel),transmissionMapUv:K&&x(M.transmissionMap.channel),thicknessMapUv:Pe&&x(M.thicknessMap.channel),alphaMapUv:_e&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ne||L),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Me||_e),fog:!!R,useFog:M.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ae,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&zt.getTransfer(M.map.colorSpace)===on,decodeVideoTextureEmissive:rt&&M.emissiveMap.isVideoTexture===!0&&zt.getTransfer(M.emissiveMap.colorSpace)===on,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Dt,flipSided:M.side===zn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){r.disableAll(),S.supportsVertexTextures&&r.enable(0),S.instancing&&r.enable(1),S.instancingColor&&r.enable(2),S.instancingMorph&&r.enable(3),S.matcap&&r.enable(4),S.envMap&&r.enable(5),S.normalMapObjectSpace&&r.enable(6),S.normalMapTangentSpace&&r.enable(7),S.clearcoat&&r.enable(8),S.iridescence&&r.enable(9),S.alphaTest&&r.enable(10),S.vertexColors&&r.enable(11),S.vertexAlphas&&r.enable(12),S.vertexUv1s&&r.enable(13),S.vertexUv2s&&r.enable(14),S.vertexUv3s&&r.enable(15),S.vertexTangents&&r.enable(16),S.anisotropy&&r.enable(17),S.alphaHash&&r.enable(18),S.batching&&r.enable(19),S.dispersion&&r.enable(20),S.batchingColor&&r.enable(21),M.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reverseDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),M.push(r.mask)}function v(M){const S=g[M.type];let C;if(S){const D=zi[S];C=Ni.clone(D.uniforms)}else C=M.uniforms;return C}function T(M,S){let C;for(let D=0,N=h.length;D<N;D++){const R=h[D];if(R.cacheKey===S){C=R,++C.usedTimes;break}}return C===void 0&&(C=new Sv(s,S,M,o),h.push(C)),C}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:E}}function Cv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function n(a){s.delete(a)}function i(a,r,l){s.get(a)[r]=l}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:o}}function Pv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Au(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tu(){const s=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function r(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Pv),n.length>1&&n.sort(d||Au),i.length>1&&i.sort(d||Au)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:r,unshift:l,finish:h,sort:c}}function Rv(){let s=new WeakMap;function e(n,i){const o=s.get(n);let a;return o===void 0?(a=new Tu,s.set(n,[a])):i>=o.length?(a=new Tu,o.push(a)):a=o[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Dv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new te};break;case"SpotLight":t={position:new b,direction:new b,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new te,groundColor:new te};break;case"RectAreaLight":t={color:new te,position:new b,halfWidth:new b,halfHeight:new b};break}return s[e.id]=t,t}}}function Iv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Lv=0;function Nv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Uv(s){const e=new Dv,t=Iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const i=new b,o=new nt,a=new nt;function r(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,T=0,w=0,A=0;c.sort(Nv);for(let M=0,S=c.length;M<S;M++){const C=c[M],D=C.color,N=C.intensity,R=C.distance,U=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*N,u+=D.g*N,d+=D.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],N);A++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,I=t.get(C);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=z,f++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(D).multiplyScalar(N),z.distance=R,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[x]=z;const B=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,B.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=B.matrix,C.castShadow){const I=t.get(C);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,n.spotShadow[x]=I,n.spotShadowMap[x]=U,v++}x++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(D).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const B=C.shadow,I=t.get(C);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,I.shadowCameraNear=B.camera.near,I.shadowCameraFar=B.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==x||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==_||E.numPointShadows!==y||E.numSpotShadows!==v||E.numSpotMaps!==T||E.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,E.directionalLength=f,E.pointLength=g,E.spotLength=x,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=_,E.numPointShadows=y,E.numSpotShadows=v,E.numSpotMaps=T,E.numLightProbes=A,n.version=Lv++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:r,setupView:l,state:n}}function Cu(s){const e=new Uv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function Fv(s){let e=new WeakMap;function t(i,o=0){const a=e.get(i);let r;return a===void 0?(r=new Cu(s),e.set(i,[r])):o>=a.length?(r=new Cu(s),a.push(r)):r=a[o],r}function n(){e=new WeakMap}return{get:t,dispose:n}}class Wc extends Si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ov extends Si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
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
}`;function zv(s,e,t){let n=new lh;const i=new Ue,o=new Ue,a=new Qt,r=new Wc({depthPacking:zc}),l=new Ov,c={},h=t.maxTextureSize,u={[wi]:zn,[zn]:wi,[Dt]:Dt},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Bv,fragmentShader:kv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let p=this.type;this.render=function(w,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Jn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==ts&&this.type===ts,R=p===ts&&this.type!==ts;for(let U=0,z=w.length;U<z;U++){const B=w[U],I=B.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const O=I.getFrameExtents();if(i.multiply(O),o.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/O.x),i.x=o.x*O.x,I.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/O.y),i.y=o.y*O.y,I.mapSize.y=o.y)),I.map===null||N===!0||R===!0){const J=this.type!==ts?{minFilter:Nn,magFilter:Nn}:{};I.map!==null&&I.map.dispose(),I.map=new ai(i.x,i.y,J),I.map.texture.name=B.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const j=I.getViewportCount();for(let J=0;J<j;J++){const ne=I.getViewport(J);a.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),D.viewport(a),I.updateMatrices(B,J),n=I.getFrustum(),v(A,E,I.camera,B,this.type)}I.isPointLightShadow!==!0&&this.type===ts&&_(I,E),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,C)};function _(w,A){const E=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,E,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,E,f,x,null)}function y(w,A,E,M){let S=null;const C=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=E.isPointLight===!0?l:r,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=S.uuid,N=A.uuid;let R=c[D];R===void 0&&(R={},c[D]=R);let U=R[N];U===void 0&&(U=S.clone(),R[N]=U,A.addEventListener("dispose",T)),S=U}if(S.visible=A.visible,S.wireframe=A.wireframe,M===ts?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=s.properties.get(S);D.light=E}return S}function v(w,A,E,M,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ts)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const N=e.update(w),R=w.material;if(Array.isArray(R)){const U=N.groups;for(let z=0,B=U.length;z<B;z++){const I=U[z],O=R[I.materialIndex];if(O&&O.visible){const j=y(w,O,M,S);w.onBeforeShadow(s,w,A,E,N,j,I),s.renderBufferDirect(E,null,N,j,w,I),w.onAfterShadow(s,w,A,E,N,j,I)}}}else if(R.visible){const U=y(w,R,M,S);w.onBeforeShadow(s,w,A,E,N,U,null),s.renderBufferDirect(E,null,N,U,w,null),w.onAfterShadow(s,w,A,E,N,U,null)}}const D=w.children;for(let N=0,R=D.length;N<R;N++)v(D[N],A,E,M,S)}function T(w){w.target.removeEventListener("dispose",T);for(const E in c){const M=c[E],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Gv={[sc]:oc,[ac]:cc,[rc]:hc,[No]:lc,[oc]:sc,[cc]:ac,[hc]:rc,[lc]:No};function Hv(s,e){function t(){let K=!1;const Pe=new Qt;let fe=null;const _e=new Qt(0,0,0,0);return{setMask:function(Oe){fe!==Oe&&!K&&(s.colorMask(Oe,Oe,Oe,Oe),fe=Oe)},setLocked:function(Oe){K=Oe},setClear:function(Oe,He,Ye,Nt,Ft){Ft===!0&&(Oe*=Nt,He*=Nt,Ye*=Nt),Pe.set(Oe,He,Ye,Nt),_e.equals(Pe)===!1&&(s.clearColor(Oe,He,Ye,Nt),_e.copy(Pe))},reset:function(){K=!1,fe=null,_e.set(-1,0,0,0)}}}function n(){let K=!1,Pe=!1,fe=null,_e=null,Oe=null;return{setReversed:function(He){if(Pe!==He){const Ye=e.get("EXT_clip_control");Pe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Oe;Oe=null,this.setClear(Nt)}Pe=He},getReversed:function(){return Pe},setTest:function(He){He?$(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(He){fe!==He&&!K&&(s.depthMask(He),fe=He)},setFunc:function(He){if(Pe&&(He=Gv[He]),_e!==He){switch(He){case sc:s.depthFunc(s.NEVER);break;case oc:s.depthFunc(s.ALWAYS);break;case ac:s.depthFunc(s.LESS);break;case No:s.depthFunc(s.LEQUAL);break;case rc:s.depthFunc(s.EQUAL);break;case lc:s.depthFunc(s.GEQUAL);break;case cc:s.depthFunc(s.GREATER);break;case hc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=He}},setLocked:function(He){K=He},setClear:function(He){Oe!==He&&(Pe&&(He=1-He),s.clearDepth(He),Oe=He)},reset:function(){K=!1,fe=null,_e=null,Oe=null,Pe=!1}}}function i(){let K=!1,Pe=null,fe=null,_e=null,Oe=null,He=null,Ye=null,Nt=null,Ft=null;return{setTest:function(mt){K||(mt?$(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(mt){Pe!==mt&&!K&&(s.stencilMask(mt),Pe=mt)},setFunc:function(mt,dn,mn){(fe!==mt||_e!==dn||Oe!==mn)&&(s.stencilFunc(mt,dn,mn),fe=mt,_e=dn,Oe=mn)},setOp:function(mt,dn,mn){(He!==mt||Ye!==dn||Nt!==mn)&&(s.stencilOp(mt,dn,mn),He=mt,Ye=dn,Nt=mn)},setLocked:function(mt){K=mt},setClear:function(mt){Ft!==mt&&(s.clearStencil(mt),Ft=mt)},reset:function(){K=!1,Pe=null,fe=null,_e=null,Oe=null,He=null,Ye=null,Nt=null,Ft=null}}}const o=new t,a=new n,r=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,T=null,w=null,A=new te(0,0,0),E=0,M=!1,S=null,C=null,D=null,N=null,R=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(I)[1]),z=B>=1):I.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),z=B>=2);let O=null,j={};const J=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),ye=new Qt().fromArray(J),Q=new Qt().fromArray(ne);function de(K,Pe,fe,_e){const Oe=new Uint8Array(4),He=s.createTexture();s.bindTexture(K,He),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<fe;Ye++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Pe+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return He}const xe={};xe[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),$(s.DEPTH_TEST),a.setFunc(No),ge(!1),Ne(Rh),$(s.CULL_FACE),k(Jn);function $(K){h[K]!==!0&&(s.enable(K),h[K]=!0)}function ae(K){h[K]!==!1&&(s.disable(K),h[K]=!1)}function me(K,Pe){return u[K]!==Pe?(s.bindFramebuffer(K,Pe),u[K]=Pe,K===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Pe),K===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function re(K,Pe){let fe=f,_e=!1;if(K){fe=d.get(Pe),fe===void 0&&(fe=[],d.set(Pe,fe));const Oe=K.textures;if(fe.length!==Oe.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let He=0,Ye=Oe.length;He<Ye;He++)fe[He]=s.COLOR_ATTACHMENT0+He;fe.length=Oe.length,_e=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,_e=!0);_e&&s.drawBuffers(fe)}function Me(K){return g!==K?(s.useProgram(K),g=K,!0):!1}const V={[is]:s.FUNC_ADD,[ep]:s.FUNC_SUBTRACT,[tp]:s.FUNC_REVERSE_SUBTRACT};V[np]=s.MIN,V[ip]=s.MAX;const Re={[tc]:s.ZERO,[sp]:s.ONE,[op]:s.SRC_COLOR,[nc]:s.SRC_ALPHA,[cp]:s.SRC_ALPHA_SATURATE,[Ud]:s.DST_COLOR,[Nd]:s.DST_ALPHA,[ap]:s.ONE_MINUS_SRC_COLOR,[ic]:s.ONE_MINUS_SRC_ALPHA,[lp]:s.ONE_MINUS_DST_COLOR,[rp]:s.ONE_MINUS_DST_ALPHA,[hp]:s.CONSTANT_COLOR,[up]:s.ONE_MINUS_CONSTANT_COLOR,[dp]:s.CONSTANT_ALPHA,[fp]:s.ONE_MINUS_CONSTANT_ALPHA};function k(K,Pe,fe,_e,Oe,He,Ye,Nt,Ft,mt){if(K===Jn){x===!0&&(ae(s.BLEND),x=!1);return}if(x===!1&&($(s.BLEND),x=!0),K!==Ld){if(K!==m||mt!==M){if((p!==is||v!==is)&&(s.blendEquation(s.FUNC_ADD),p=is,v=is),mt)switch(K){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dn:s.blendFunc(s.ONE,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ih:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}_=null,y=null,T=null,w=null,A.set(0,0,0),E=0,m=K,M=mt}return}Oe=Oe||Pe,He=He||fe,Ye=Ye||_e,(Pe!==p||Oe!==v)&&(s.blendEquationSeparate(V[Pe],V[Oe]),p=Pe,v=Oe),(fe!==_||_e!==y||He!==T||Ye!==w)&&(s.blendFuncSeparate(Re[fe],Re[_e],Re[He],Re[Ye]),_=fe,y=_e,T=He,w=Ye),(Nt.equals(A)===!1||Ft!==E)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Ft),A.copy(Nt),E=Ft),m=K,M=!1}function it(K,Pe){K.side===Dt?ae(s.CULL_FACE):$(s.CULL_FACE);let fe=K.side===zn;Pe&&(fe=!fe),ge(fe),K.blending===Ws&&K.transparent===!1?k(Jn):k(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),o.setMask(K.colorWrite);const _e=K.stencilWrite;r.setTest(_e),_e&&(r.setMask(K.stencilWriteMask),r.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),r.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),rt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(K){S!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),S=K)}function Ne(K){K!==Qf?($(s.CULL_FACE),K!==C&&(K===Rh?s.cullFace(s.BACK):K===Jf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),C=K}function Be(K){K!==D&&(z&&s.lineWidth(K),D=K)}function rt(K,Pe,fe){K?($(s.POLYGON_OFFSET_FILL),(N!==Pe||R!==fe)&&(s.polygonOffset(Pe,fe),N=Pe,R=fe)):ae(s.POLYGON_OFFSET_FILL)}function Ve(K){K?$(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function F(K){K===void 0&&(K=s.TEXTURE0+U-1),O!==K&&(s.activeTexture(K),O=K)}function L(K,Pe,fe){fe===void 0&&(O===null?fe=s.TEXTURE0+U-1:fe=O);let _e=j[fe];_e===void 0&&(_e={type:void 0,texture:void 0},j[fe]=_e),(_e.type!==K||_e.texture!==Pe)&&(O!==fe&&(s.activeTexture(fe),O=fe),s.bindTexture(K,Pe||xe[K]),_e.type=K,_e.texture=Pe)}function ee(){const K=j[O];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ie(){try{s.texSubImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xt(){try{s.texStorage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function st(){try{s.texImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ht(K){ye.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),ye.copy(K))}function qe(K){Q.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),Q.copy(K))}function pt(K,Pe){let fe=c.get(Pe);fe===void 0&&(fe=new WeakMap,c.set(Pe,fe));let _e=fe.get(K);_e===void 0&&(_e=s.getUniformBlockIndex(Pe,K.name),fe.set(K,_e))}function ut(K,Pe){const _e=c.get(Pe).get(K);l.get(Pe)!==_e&&(s.uniformBlockBinding(Pe,_e,K.__bindingPointIndex),l.set(Pe,_e))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},O=null,j={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,T=null,w=null,A=new te(0,0,0),E=0,M=!1,S=null,C=null,D=null,N=null,R=null,ye.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:$,disable:ae,bindFramebuffer:me,drawBuffers:re,useProgram:Me,setBlending:k,setMaterial:it,setFlipSided:ge,setCullFace:Ne,setLineWidth:Be,setPolygonOffset:rt,setScissorTest:Ve,activeTexture:F,bindTexture:L,unbindTexture:ee,compressedTexImage2D:ve,compressedTexImage3D:le,texImage2D:Fe,texImage3D:st,updateUBOMapping:pt,uniformBlockBinding:ut,texStorage2D:xt,texStorage3D:Ae,texSubImage2D:ce,texSubImage3D:Ie,compressedTexSubImage2D:Se,compressedTexSubImage3D:ze,scissor:ht,viewport:qe,reset:vt}}function Pu(s,e,t,n){const i=Vv(n);switch(t){case Yd:return s*e;case Kd:return s*e;case Zd:return s*e*2;case Hr:return s*e/i.components*i.byteLength;case nh:return s*e/i.components*i.byteLength;case $d:return s*e*2/i.components*i.byteLength;case ih:return s*e*2/i.components*i.byteLength;case jd:return s*e*3/i.components*i.byteLength;case bi:return s*e*4/i.components*i.byteLength;case sh:return s*e*4/i.components*i.byteLength;case wr:case Er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Tr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pc:case gc:return Math.max(s,16)*Math.max(e,8)/4;case fc:case mc:return Math.max(s,8)*Math.max(e,8)/2;case xc:case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cr:case Nc:case Uc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qd:case Fc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Oc:case Bc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vv(s){switch(s){case Oi:case Wd:return{byteLength:1,components:1};case Ma:case Xd:case Ui:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case qs:case Jc:case yi:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Wv(s,e,t,n,i,o,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,L){return f?new OffscreenCanvas(F,L):Sa("canvas")}function x(F,L,ee){let ve=1;const le=Ve(F);if((le.width>ee||le.height>ee)&&(ve=ee/Math.max(le.width,le.height)),ve<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ce=Math.floor(ve*le.width),Ie=Math.floor(ve*le.height);u===void 0&&(u=g(ce,Ie));const Se=L?g(ce,Ie):u;return Se.width=ce,Se.height=Ie,Se.getContext("2d").drawImage(F,0,0,ce,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ce+"x"+Ie+")."),Se}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),F;return F}function m(F){return F.generateMipmaps}function p(F){s.generateMipmap(F)}function _(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(F,L,ee,ve,le=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ce=L;if(L===s.RED&&(ee===s.FLOAT&&(ce=s.R32F),ee===s.HALF_FLOAT&&(ce=s.R16F),ee===s.UNSIGNED_BYTE&&(ce=s.R8)),L===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ce=s.R8UI),ee===s.UNSIGNED_SHORT&&(ce=s.R16UI),ee===s.UNSIGNED_INT&&(ce=s.R32UI),ee===s.BYTE&&(ce=s.R8I),ee===s.SHORT&&(ce=s.R16I),ee===s.INT&&(ce=s.R32I)),L===s.RG&&(ee===s.FLOAT&&(ce=s.RG32F),ee===s.HALF_FLOAT&&(ce=s.RG16F),ee===s.UNSIGNED_BYTE&&(ce=s.RG8)),L===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ce=s.RG8UI),ee===s.UNSIGNED_SHORT&&(ce=s.RG16UI),ee===s.UNSIGNED_INT&&(ce=s.RG32UI),ee===s.BYTE&&(ce=s.RG8I),ee===s.SHORT&&(ce=s.RG16I),ee===s.INT&&(ce=s.RG32I)),L===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),ee===s.UNSIGNED_INT&&(ce=s.RGB32UI),ee===s.BYTE&&(ce=s.RGB8I),ee===s.SHORT&&(ce=s.RGB16I),ee===s.INT&&(ce=s.RGB32I)),L===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),ee===s.UNSIGNED_INT&&(ce=s.RGBA32UI),ee===s.BYTE&&(ce=s.RGBA8I),ee===s.SHORT&&(ce=s.RGBA16I),ee===s.INT&&(ce=s.RGBA32I)),L===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),L===s.RGBA){const Ie=le?Vr:zt.getTransfer(ve);ee===s.FLOAT&&(ce=s.RGBA32F),ee===s.HALF_FLOAT&&(ce=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(ce=Ie===on?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function v(F,L){let ee;return F?L===null||L===qs||L===Ys?ee=s.DEPTH24_STENCIL8:L===yi?ee=s.DEPTH32F_STENCIL8:L===Ma&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===qs||L===Ys?ee=s.DEPTH_COMPONENT24:L===yi?ee=s.DEPTH_COMPONENT32F:L===Ma&&(ee=s.DEPTH_COMPONENT16),ee}function T(F,L){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Nn&&F.minFilter!==pi?Math.log2(Math.max(L.width,L.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?L.mipmaps.length:1}function w(F){const L=F.target;L.removeEventListener("dispose",w),E(L),L.isVideoTexture&&h.delete(L)}function A(F){const L=F.target;L.removeEventListener("dispose",A),S(L)}function E(F){const L=n.get(F);if(L.__webglInit===void 0)return;const ee=F.source,ve=d.get(ee);if(ve){const le=ve[L.__cacheKey];le.usedTimes--,le.usedTimes===0&&M(F),Object.keys(ve).length===0&&d.delete(ee)}n.remove(F)}function M(F){const L=n.get(F);s.deleteTexture(L.__webglTexture);const ee=F.source,ve=d.get(ee);delete ve[L.__cacheKey],a.memory.textures--}function S(F){const L=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(L.__webglFramebuffer[ve]))for(let le=0;le<L.__webglFramebuffer[ve].length;le++)s.deleteFramebuffer(L.__webglFramebuffer[ve][le]);else s.deleteFramebuffer(L.__webglFramebuffer[ve]);L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer[ve])}else{if(Array.isArray(L.__webglFramebuffer))for(let ve=0;ve<L.__webglFramebuffer.length;ve++)s.deleteFramebuffer(L.__webglFramebuffer[ve]);else s.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&s.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let ve=0;ve<L.__webglColorRenderbuffer.length;ve++)L.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(L.__webglColorRenderbuffer[ve]);L.__webglDepthRenderbuffer&&s.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const ee=F.textures;for(let ve=0,le=ee.length;ve<le;ve++){const ce=n.get(ee[ve]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ee[ve])}n.remove(F)}let C=0;function D(){C=0}function N(){const F=C;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),C+=1,F}function R(F){const L=[];return L.push(F.wrapS),L.push(F.wrapT),L.push(F.wrapR||0),L.push(F.magFilter),L.push(F.minFilter),L.push(F.anisotropy),L.push(F.internalFormat),L.push(F.format),L.push(F.type),L.push(F.generateMipmaps),L.push(F.premultiplyAlpha),L.push(F.flipY),L.push(F.unpackAlignment),L.push(F.colorSpace),L.join()}function U(F,L){const ee=n.get(F);if(F.isVideoTexture&&Be(F),F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){const ve=F.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ee,F,L);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+L)}function z(F,L){const ee=n.get(F);if(F.version>0&&ee.__version!==F.version){Q(ee,F,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+L)}function B(F,L){const ee=n.get(F);if(F.version>0&&ee.__version!==F.version){Q(ee,F,L);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+L)}function I(F,L){const ee=n.get(F);if(F.version>0&&ee.__version!==F.version){de(ee,F,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+L)}const O={[Wn]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[Lr]:s.MIRRORED_REPEAT},j={[Nn]:s.NEAREST,[Vd]:s.NEAREST_MIPMAP_NEAREST,[la]:s.NEAREST_MIPMAP_LINEAR,[pi]:s.LINEAR,[Sr]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},J={[bp]:s.NEVER,[Cp]:s.ALWAYS,[Sp]:s.LESS,[ef]:s.LEQUAL,[wp]:s.EQUAL,[Tp]:s.GEQUAL,[Ep]:s.GREATER,[Ap]:s.NOTEQUAL};function ne(F,L){if(L.type===yi&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===pi||L.magFilter===Sr||L.magFilter===la||L.magFilter===ss||L.minFilter===pi||L.minFilter===Sr||L.minFilter===la||L.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,O[L.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,O[L.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,O[L.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,j[L.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,j[L.minFilter]),L.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,J[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Nn||L.minFilter!==la&&L.minFilter!==ss||L.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function ye(F,L){let ee=!1;F.__webglInit===void 0&&(F.__webglInit=!0,L.addEventListener("dispose",w));const ve=L.source;let le=d.get(ve);le===void 0&&(le={},d.set(ve,le));const ce=R(L);if(ce!==F.__cacheKey){le[ce]===void 0&&(le[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),le[ce].usedTimes++;const Ie=le[F.__cacheKey];Ie!==void 0&&(le[F.__cacheKey].usedTimes--,Ie.usedTimes===0&&M(L)),F.__cacheKey=ce,F.__webglTexture=le[ce].texture}return ee}function Q(F,L,ee){let ve=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ve=s.TEXTURE_3D);const le=ye(F,L),ce=L.source;t.bindTexture(ve,F.__webglTexture,s.TEXTURE0+ee);const Ie=n.get(ce);if(ce.version!==Ie.__version||le===!0){t.activeTexture(s.TEXTURE0+ee);const Se=zt.getPrimaries(zt.workingColorSpace),ze=L.colorSpace===Gi?null:zt.getPrimaries(L.colorSpace),xt=L.colorSpace===Gi||Se===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ae=x(L.image,!1,i.maxTextureSize);Ae=rt(L,Ae);const Fe=o.convert(L.format,L.colorSpace),st=o.convert(L.type);let ht=y(L.internalFormat,Fe,st,L.colorSpace,L.isVideoTexture);ne(ve,L);let qe;const pt=L.mipmaps,ut=L.isVideoTexture!==!0,vt=Ie.__version===void 0||le===!0,K=ce.dataReady,Pe=T(L,Ae);if(L.isDepthTexture)ht=v(L.format===js,L.type),vt&&(ut?t.texStorage2D(s.TEXTURE_2D,1,ht,Ae.width,Ae.height):t.texImage2D(s.TEXTURE_2D,0,ht,Ae.width,Ae.height,0,Fe,st,null));else if(L.isDataTexture)if(pt.length>0){ut&&vt&&t.texStorage2D(s.TEXTURE_2D,Pe,ht,pt[0].width,pt[0].height);for(let fe=0,_e=pt.length;fe<_e;fe++)qe=pt[fe],ut?K&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,qe.width,qe.height,Fe,st,qe.data):t.texImage2D(s.TEXTURE_2D,fe,ht,qe.width,qe.height,0,Fe,st,qe.data);L.generateMipmaps=!1}else ut?(vt&&t.texStorage2D(s.TEXTURE_2D,Pe,ht,Ae.width,Ae.height),K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Fe,st,Ae.data)):t.texImage2D(s.TEXTURE_2D,0,ht,Ae.width,Ae.height,0,Fe,st,Ae.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){ut&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ht,pt[0].width,pt[0].height,Ae.depth);for(let fe=0,_e=pt.length;fe<_e;fe++)if(qe=pt[fe],L.format!==bi)if(Fe!==null)if(ut){if(K)if(L.layerUpdates.size>0){const Oe=Pu(qe.width,qe.height,L.format,L.type);for(const He of L.layerUpdates){const Ye=qe.data.subarray(He*Oe/qe.data.BYTES_PER_ELEMENT,(He+1)*Oe/qe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,He,qe.width,qe.height,1,Fe,Ye)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,qe.width,qe.height,Ae.depth,Fe,qe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,ht,qe.width,qe.height,Ae.depth,0,qe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,qe.width,qe.height,Ae.depth,Fe,st,qe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,ht,qe.width,qe.height,Ae.depth,0,Fe,st,qe.data)}else{ut&&vt&&t.texStorage2D(s.TEXTURE_2D,Pe,ht,pt[0].width,pt[0].height);for(let fe=0,_e=pt.length;fe<_e;fe++)qe=pt[fe],L.format!==bi?Fe!==null?ut?K&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,qe.width,qe.height,Fe,qe.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,ht,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?K&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,qe.width,qe.height,Fe,st,qe.data):t.texImage2D(s.TEXTURE_2D,fe,ht,qe.width,qe.height,0,Fe,st,qe.data)}else if(L.isDataArrayTexture)if(ut){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ht,Ae.width,Ae.height,Ae.depth),K)if(L.layerUpdates.size>0){const fe=Pu(Ae.width,Ae.height,L.format,L.type);for(const _e of L.layerUpdates){const Oe=Ae.data.subarray(_e*fe/Ae.data.BYTES_PER_ELEMENT,(_e+1)*fe/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,Ae.width,Ae.height,1,Fe,st,Oe)}L.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,st,Ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ht,Ae.width,Ae.height,Ae.depth,0,Fe,st,Ae.data);else if(L.isData3DTexture)ut?(vt&&t.texStorage3D(s.TEXTURE_3D,Pe,ht,Ae.width,Ae.height,Ae.depth),K&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,st,Ae.data)):t.texImage3D(s.TEXTURE_3D,0,ht,Ae.width,Ae.height,Ae.depth,0,Fe,st,Ae.data);else if(L.isFramebufferTexture){if(vt)if(ut)t.texStorage2D(s.TEXTURE_2D,Pe,ht,Ae.width,Ae.height);else{let fe=Ae.width,_e=Ae.height;for(let Oe=0;Oe<Pe;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,ht,fe,_e,0,Fe,st,null),fe>>=1,_e>>=1}}else if(pt.length>0){if(ut&&vt){const fe=Ve(pt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,ht,fe.width,fe.height)}for(let fe=0,_e=pt.length;fe<_e;fe++)qe=pt[fe],ut?K&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Fe,st,qe):t.texImage2D(s.TEXTURE_2D,fe,ht,Fe,st,qe);L.generateMipmaps=!1}else if(ut){if(vt){const fe=Ve(Ae);t.texStorage2D(s.TEXTURE_2D,Pe,ht,fe.width,fe.height)}K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,st,Ae)}else t.texImage2D(s.TEXTURE_2D,0,ht,Fe,st,Ae);m(L)&&p(ve),Ie.__version=ce.version,L.onUpdate&&L.onUpdate(L)}F.__version=L.version}function de(F,L,ee){if(L.image.length!==6)return;const ve=ye(F,L),le=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+ee);const ce=n.get(le);if(le.version!==ce.__version||ve===!0){t.activeTexture(s.TEXTURE0+ee);const Ie=zt.getPrimaries(zt.workingColorSpace),Se=L.colorSpace===Gi?null:zt.getPrimaries(L.colorSpace),ze=L.colorSpace===Gi||Ie===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const xt=L.isCompressedTexture||L.image[0].isCompressedTexture,Ae=L.image[0]&&L.image[0].isDataTexture,Fe=[];for(let _e=0;_e<6;_e++)!xt&&!Ae?Fe[_e]=x(L.image[_e],!0,i.maxCubemapSize):Fe[_e]=Ae?L.image[_e].image:L.image[_e],Fe[_e]=rt(L,Fe[_e]);const st=Fe[0],ht=o.convert(L.format,L.colorSpace),qe=o.convert(L.type),pt=y(L.internalFormat,ht,qe,L.colorSpace),ut=L.isVideoTexture!==!0,vt=ce.__version===void 0||ve===!0,K=le.dataReady;let Pe=T(L,st);ne(s.TEXTURE_CUBE_MAP,L);let fe;if(xt){ut&&vt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,pt,st.width,st.height);for(let _e=0;_e<6;_e++){fe=Fe[_e].mipmaps;for(let Oe=0;Oe<fe.length;Oe++){const He=fe[Oe];L.format!==bi?ht!==null?ut?K&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,He.width,He.height,ht,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,pt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,He.width,He.height,ht,qe,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,pt,He.width,He.height,0,ht,qe,He.data)}}}else{if(fe=L.mipmaps,ut&&vt){fe.length>0&&Pe++;const _e=Ve(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,pt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ae){ut?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Fe[_e].width,Fe[_e].height,ht,qe,Fe[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,Fe[_e].width,Fe[_e].height,0,ht,qe,Fe[_e].data);for(let Oe=0;Oe<fe.length;Oe++){const Ye=fe[Oe].image[_e].image;ut?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,Ye.width,Ye.height,ht,qe,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,pt,Ye.width,Ye.height,0,ht,qe,Ye.data)}}else{ut?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ht,qe,Fe[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,ht,qe,Fe[_e]);for(let Oe=0;Oe<fe.length;Oe++){const He=fe[Oe];ut?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,ht,qe,He.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,pt,ht,qe,He.image[_e])}}}m(L)&&p(s.TEXTURE_CUBE_MAP),ce.__version=le.version,L.onUpdate&&L.onUpdate(L)}F.__version=L.version}function xe(F,L,ee,ve,le,ce){const Ie=o.convert(ee.format,ee.colorSpace),Se=o.convert(ee.type),ze=y(ee.internalFormat,Ie,Se,ee.colorSpace),xt=n.get(L),Ae=n.get(ee);if(Ae.__renderTarget=L,!xt.__hasExternalTextures){const Fe=Math.max(1,L.width>>ce),st=Math.max(1,L.height>>ce);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?t.texImage3D(le,ce,ze,Fe,st,L.depth,0,Ie,Se,null):t.texImage2D(le,ce,ze,Fe,st,0,Ie,Se,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),Ne(L)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,le,Ae.__webglTexture,0,ge(L)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,le,Ae.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $(F,L,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,F),L.depthBuffer){const ve=L.depthTexture,le=ve&&ve.isDepthTexture?ve.type:null,ce=v(L.stencilBuffer,le),Ie=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=ge(L);Ne(L)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,ce,L.width,L.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,ce,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,ce,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,F)}else{const ve=L.textures;for(let le=0;le<ve.length;le++){const ce=ve[le],Ie=o.convert(ce.format,ce.colorSpace),Se=o.convert(ce.type),ze=y(ce.internalFormat,Ie,Se,ce.colorSpace),xt=ge(L);ee&&Ne(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,ze,L.width,L.height):Ne(L)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,ze,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,ze,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(F,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=n.get(L.depthTexture);ve.__renderTarget=L,(!ve.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),U(L.depthTexture,0);const le=ve.__webglTexture,ce=ge(L);if(L.depthTexture.format===Po)Ne(L)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(L.depthTexture.format===js)Ne(L)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function me(F){const L=n.get(F),ee=F.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==F.depthTexture){const ve=F.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),ve){const le=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,ve.removeEventListener("dispose",le)};ve.addEventListener("dispose",le),L.__depthDisposeCallback=le}L.__boundDepthTexture=ve}if(F.depthTexture&&!L.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");ae(L.__webglFramebuffer,F)}else if(ee){L.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[ve]),L.__webglDepthbuffer[ve]===void 0)L.__webglDepthbuffer[ve]=s.createRenderbuffer(),$(L.__webglDepthbuffer[ve],F,!1);else{const le=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=L.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=s.createRenderbuffer(),$(L.__webglDepthbuffer,F,!1);else{const ve=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=L.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(F,L,ee){const ve=n.get(F);L!==void 0&&xe(ve.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&me(F)}function Me(F){const L=F.texture,ee=n.get(F),ve=n.get(L);F.addEventListener("dispose",A);const le=F.textures,ce=F.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=L.version,a.memory.textures++),ce){ee.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(L.mipmaps&&L.mipmaps.length>0){ee.__webglFramebuffer[Se]=[];for(let ze=0;ze<L.mipmaps.length;ze++)ee.__webglFramebuffer[Se][ze]=s.createFramebuffer()}else ee.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Se=0;Se<L.mipmaps.length;Se++)ee.__webglFramebuffer[Se]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let Se=0,ze=le.length;Se<ze;Se++){const xt=n.get(le[Se]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(F.samples>0&&Ne(F)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Se=0;Se<le.length;Se++){const ze=le[Se];ee.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Se]);const xt=o.convert(ze.format,ze.colorSpace),Ae=o.convert(ze.type),Fe=y(ze.internalFormat,xt,Ae,ze.colorSpace,F.isXRRenderTarget===!0),st=ge(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,Fe,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),$(ee.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),ne(s.TEXTURE_CUBE_MAP,L);for(let Se=0;Se<6;Se++)if(L.mipmaps&&L.mipmaps.length>0)for(let ze=0;ze<L.mipmaps.length;ze++)xe(ee.__webglFramebuffer[Se][ze],F,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze);else xe(ee.__webglFramebuffer[Se],F,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(L)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Se=0,ze=le.length;Se<ze;Se++){const xt=le[Se],Ae=n.get(xt);t.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),ne(s.TEXTURE_2D,xt),xe(ee.__webglFramebuffer,F,xt,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),m(xt)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Se=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Se=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,ve.__webglTexture),ne(Se,L),L.mipmaps&&L.mipmaps.length>0)for(let ze=0;ze<L.mipmaps.length;ze++)xe(ee.__webglFramebuffer[ze],F,L,s.COLOR_ATTACHMENT0,Se,ze);else xe(ee.__webglFramebuffer,F,L,s.COLOR_ATTACHMENT0,Se,0);m(L)&&p(Se),t.unbindTexture()}F.depthBuffer&&me(F)}function V(F){const L=F.textures;for(let ee=0,ve=L.length;ee<ve;ee++){const le=L[ee];if(m(le)){const ce=_(F),Ie=n.get(le).__webglTexture;t.bindTexture(ce,Ie),p(ce),t.unbindTexture()}}}const Re=[],k=[];function it(F){if(F.samples>0){if(Ne(F)===!1){const L=F.textures,ee=F.width,ve=F.height;let le=s.COLOR_BUFFER_BIT;const ce=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(F),Se=L.length>1;if(Se)for(let ze=0;ze<L.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ze=0;ze<L.length;ze++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[ze]);const xt=n.get(L[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xt,0)}s.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,le,s.NEAREST),l===!0&&(Re.length=0,k.length=0,Re.push(s.COLOR_ATTACHMENT0+ze),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Re.push(ce),k.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let ze=0;ze<L.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[ze]);const xt=n.get(L[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,xt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const L=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[L])}}}function ge(F){return Math.min(i.maxSamples,F.samples)}function Ne(F){const L=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Be(F){const L=a.render.frame;h.get(F)!==L&&(h.set(F,L),F.update())}function rt(F,L){const ee=F.colorSpace,ve=F.format,le=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ee!==jn&&ee!==Gi&&(zt.getTransfer(ee)===on?(ve!==bi||le!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),L}function Ve(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=I,this.rebindTextures=re,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ne}function Xv(s,e){function t(n,i=Gi){let o;const a=zt.getTransfer(i);if(n===Oi)return s.UNSIGNED_BYTE;if(n===eh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===th)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wd)return s.BYTE;if(n===Xd)return s.SHORT;if(n===Ma)return s.UNSIGNED_SHORT;if(n===Jc)return s.INT;if(n===qs)return s.UNSIGNED_INT;if(n===yi)return s.FLOAT;if(n===Ui)return s.HALF_FLOAT;if(n===Yd)return s.ALPHA;if(n===jd)return s.RGB;if(n===bi)return s.RGBA;if(n===Kd)return s.LUMINANCE;if(n===Zd)return s.LUMINANCE_ALPHA;if(n===Po)return s.DEPTH_COMPONENT;if(n===js)return s.DEPTH_STENCIL;if(n===Hr)return s.RED;if(n===nh)return s.RED_INTEGER;if(n===$d)return s.RG;if(n===ih)return s.RG_INTEGER;if(n===sh)return s.RGBA_INTEGER;if(n===wr||n===Er||n===Ar||n===Tr)if(a===on)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===wr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===wr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===pc||n===mc||n===gc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===fc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===vc||n===_c)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===xc||n===vc)return a===on?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===_c)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===yc||n===bc||n===Sc||n===wc||n===Ec||n===Ac||n===Tc||n===Cc||n===Pc||n===Rc||n===Dc||n===Ic||n===Lc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Mc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return a===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===Nc||n===Uc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Cr)return a===on?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qd||n===Fc||n===Oc||n===Bc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Cr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class qv extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yv={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Yv)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kv=`
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

}`;class Zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new In,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ln({vertexShader:jv,fragmentShader:Kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends Vo{constructor(e,t){super();const n=this;let i=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new Zv,m=t.getContextAttributes();let p=null,_=null;const y=[],v=[],T=new Ue;let w=null;const A=new Hn;A.viewport=new Qt;const E=new Hn;E.viewport=new Qt;const M=[A,E],S=new qv;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=y[Q];return de===void 0&&(de=new Dl,y[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=y[Q];return de===void 0&&(de=new Dl,y[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=y[Q];return de===void 0&&(de=new Dl,y[Q]=de),de.getHandSpace()};function N(Q){const de=v.indexOf(Q.inputSource);if(de===-1)return;const xe=y[de];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,c||a),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function R(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",U);for(let Q=0;Q<y.length;Q++){const de=v[Q];de!==null&&(v[Q]=null,y[Q].disconnect(de))}C=null,D=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",R),i.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ai(f.framebufferWidth,f.framebufferHeight,{format:bi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,xe=null,$=null;m.depth&&($=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?js:Po,xe=m.stencil?Ys:qs);const ae={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:o};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ai(d.textureWidth,d.textureHeight,{format:bi,type:Oi,depthTexture:new hh(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(Q){for(let de=0;de<Q.removed.length;de++){const xe=Q.removed[de],$=v.indexOf(xe);$>=0&&(v[$]=null,y[$].disconnect(xe))}for(let de=0;de<Q.added.length;de++){const xe=Q.added[de];let $=v.indexOf(xe);if($===-1){for(let me=0;me<y.length;me++)if(me>=v.length){v.push(xe),$=me;break}else if(v[me]===null){v[me]=xe,$=me;break}if($===-1)break}const ae=y[$];ae&&ae.connect(xe)}}const z=new b,B=new b;function I(Q,de,xe){z.setFromMatrixPosition(de.matrixWorld),B.setFromMatrixPosition(xe.matrixWorld);const $=z.distanceTo(B),ae=de.projectionMatrix.elements,me=xe.projectionMatrix.elements,re=ae[14]/(ae[10]-1),Me=ae[14]/(ae[10]+1),V=(ae[9]+1)/ae[5],Re=(ae[9]-1)/ae[5],k=(ae[8]-1)/ae[0],it=(me[8]+1)/me[0],ge=re*k,Ne=re*it,Be=$/(-k+it),rt=Be*-k;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(rt),Q.translateZ(Be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ae[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ve=re+Be,F=Me+Be,L=ge-rt,ee=Ne+($-rt),ve=V*Me/F*Ve,le=Re*Me/F*Ve;Q.projectionMatrix.makePerspective(L,ee,ve,le,Ve,F),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function O(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let de=Q.near,xe=Q.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),S.near=E.near=A.near=de,S.far=E.far=A.far=xe,(C!==S.near||D!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,D=S.far),A.layers.mask=Q.layers.mask|2,E.layers.mask=Q.layers.mask|4,S.layers.mask=A.layers.mask|E.layers.mask;const $=Q.parent,ae=S.cameras;O(S,$);for(let me=0;me<ae.length;me++)O(ae[me],$);ae.length===2?I(S,A,E):S.projectionMatrix.copy(A.projectionMatrix),j(Q,S,$)};function j(Q,de,xe){xe===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Oo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let J=null;function ne(Q,de){if(h=de.getViewerPose(c||a),g=de,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let $=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,$=!0);for(let me=0;me<xe.length;me++){const re=xe[me];let Me=null;if(f!==null)Me=f.getViewport(re);else{const Re=u.getViewSubImage(d,re);Me=Re.viewport,me===0&&(e.setRenderTargetTextures(_,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(_))}let V=M[me];V===void 0&&(V=new Hn,V.layers.enable(me),V.viewport=new Qt,M[me]=V),V.matrix.fromArray(re.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(re.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Me.x,Me.y,Me.width,Me.height),me===0&&(S.matrix.copy(V.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),$===!0&&S.cameras.push(V)}const ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const me=u.getDepthInformation(xe[0]);me&&me.isValid&&me.texture&&x.init(e,me,i.renderState)}}for(let xe=0;xe<y.length;xe++){const $=v[xe],ae=y[xe];$!==null&&ae!==void 0&&ae.update($,de,c||a)}J&&J(Q,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const ye=new uf;ye.setAnimationLoop(ne),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}const Fs=new li,Qv=new nt;function Jv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,Fs.copy(v),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(Fs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e_(s,e,t,n){let i={},o={},a=[];const r=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(_,T);const w=e.render.frame;o[_.id]!==w&&(d(_),o[_.id]=w)}function h(_){const y=u();_.__bindingPointIndex=y;const v=s.createBuffer(),T=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<r;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],v=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){const E=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=E.length;M<S;M++){const C=E[M];if(f(C,w,M,T)===!0){const D=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let R=0;for(let U=0;U<N.length;U++){const z=N[U],B=x(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,D+R,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,R),R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,v,T){const w=_.value,A=y+"_"+v;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const E=T[A];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return T[A]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function g(_){const y=_.uniforms;let v=0;const T=16;for(let A=0,E=y.length;A<E;A++){const M=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,C=M.length;S<C;S++){const D=M[S],N=Array.isArray(D.value)?D.value:[D.value];for(let R=0,U=N.length;R<U;R++){const z=N[R],B=x(z),I=v%T,O=I%B.boundary,j=I+O;v+=O,j!==0&&T-j<B.storage&&(v+=T-j),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=B.storage}}}const w=v%T;return w>0&&(v+=T-w),_.__size=v,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},o={}}return{bind:l,update:c,dispose:p}}class gf{constructor(e={}){const{canvas:t=Xp(),context:n=null,depth:i=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=As,this.toneMappingExposure=1;const v=this;let T=!1,w=0,A=0,E=null,M=-1,S=null;const C=new Qt,D=new Qt;let N=null;const R=new te(0);let U=0,z=t.width,B=t.height,I=1,O=null,j=null;const J=new Qt(0,0,z,B),ne=new Qt(0,0,z,B);let ye=!1;const Q=new lh;let de=!1,xe=!1;const $=new nt,ae=new nt,me=new b,re=new Qt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function Re(){return E===null?I:1}let k=n;function it(P,Y){return t.getContext(P,Y)}try{const P={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",He,!1),k===null){const Y="webgl2";if(k=it(Y,P),k===null)throw it(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ge,Ne,Be,rt,Ve,F,L,ee,ve,le,ce,Ie,Se,ze,xt,Ae,Fe,st,ht,qe,pt,ut,vt,K;function Pe(){ge=new rx(k),ge.init(),ut=new Xv(k,ge),Ne=new tx(k,ge,e,ut),Be=new Hv(k,ge),Ne.reverseDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),rt=new hx(k),Ve=new Cv,F=new Wv(k,ge,Be,Ve,Ne,ut,rt),L=new ix(v),ee=new ax(v),ve=new x0(k),vt=new Jg(k,ve),le=new lx(k,ve,rt,vt),ce=new dx(k,le,ve,rt),ht=new ux(k,Ne,F),Ae=new nx(Ve),Ie=new Tv(v,L,ee,ge,Ne,vt,Ae),Se=new Jv(v,Ve),ze=new Rv,xt=new Fv(ge),st=new Qg(v,L,ee,Be,ce,f,l),Fe=new zv(v,ce,Ne),K=new e_(k,rt,Ne,Be),qe=new ex(k,ge,rt),pt=new cx(k,ge,rt),rt.programs=Ie.programs,v.capabilities=Ne,v.extensions=ge,v.properties=Ve,v.renderLists=ze,v.shadowMap=Fe,v.state=Be,v.info=rt}Pe();const fe=new $v(v,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=ge.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ge.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(P){P!==void 0&&(I=P,this.setSize(z,B,!1))},this.getSize=function(P){return P.set(z,B)},this.setSize=function(P,Y,se=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,B=Y,t.width=Math.floor(P*I),t.height=Math.floor(Y*I),se===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(z*I,B*I).floor()},this.setDrawingBufferSize=function(P,Y,se){z=P,B=Y,I=se,t.width=Math.floor(P*se),t.height=Math.floor(Y*se),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,Y,se,he){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,Y,se,he),Be.viewport(C.copy(J).multiplyScalar(I).round())},this.getScissor=function(P){return P.copy(ne)},this.setScissor=function(P,Y,se,he){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,Y,se,he),Be.scissor(D.copy(ne).multiplyScalar(I).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(P){Be.setScissorTest(ye=P)},this.setOpaqueSort=function(P){O=P},this.setTransparentSort=function(P){j=P},this.getClearColor=function(P){return P.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(P=!0,Y=!0,se=!0){let he=0;if(P){let Z=!1;if(E!==null){const Ce=E.texture.format;Z=Ce===sh||Ce===ih||Ce===nh}if(Z){const Ce=E.texture.type,De=Ce===Oi||Ce===qs||Ce===Ma||Ce===Ys||Ce===eh||Ce===th,Qe=st.getClearColor(),Je=st.getClearAlpha(),at=Qe.r,ft=Qe.g,G=Qe.b;De?(g[0]=at,g[1]=ft,g[2]=G,g[3]=Je,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=at,x[1]=ft,x[2]=G,x[3]=Je,k.clearBufferiv(k.COLOR,0,x))}else he|=k.COLOR_BUFFER_BIT}Y&&(he|=k.DEPTH_BUFFER_BIT),se&&(he|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",He,!1),ze.dispose(),xt.dispose(),Ve.dispose(),L.dispose(),ee.dispose(),ce.dispose(),vt.dispose(),K.dispose(),Ie.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",vn),fe.removeEventListener("sessionend",ot),Ot.stop()};function _e(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=rt.autoReset,Y=Fe.enabled,se=Fe.autoUpdate,he=Fe.needsUpdate,Z=Fe.type;Pe(),rt.autoReset=P,Fe.enabled=Y,Fe.autoUpdate=se,Fe.needsUpdate=he,Fe.type=Z}function He(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ye(P){const Y=P.target;Y.removeEventListener("dispose",Ye),Nt(Y)}function Nt(P){Ft(P),Ve.remove(P)}function Ft(P){const Y=Ve.get(P).programs;Y!==void 0&&(Y.forEach(function(se){Ie.releaseProgram(se)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,se,he,Z,Ce){Y===null&&(Y=Me);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Qe=Bt(P,Y,se,he,Z);Be.setMaterial(he,De);let Je=se.index,at=1;if(he.wireframe===!0){if(Je=le.getWireframeAttribute(se),Je===void 0)return;at=2}const ft=se.drawRange,G=se.attributes.position;let Le=ft.start*at,$e=(ft.start+ft.count)*at;Ce!==null&&(Le=Math.max(Le,Ce.start*at),$e=Math.min($e,(Ce.start+Ce.count)*at)),Je!==null?(Le=Math.max(Le,0),$e=Math.min($e,Je.count)):G!=null&&(Le=Math.max(Le,0),$e=Math.min($e,G.count));const lt=$e-Le;if(lt<0||lt===1/0)return;vt.setup(Z,he,Qe,se,Je);let W,pe=qe;if(Je!==null&&(W=ve.get(Je),pe=pt,pe.setIndex(W)),Z.isMesh)he.wireframe===!0?(Be.setLineWidth(he.wireframeLinewidth*Re()),pe.setMode(k.LINES)):pe.setMode(k.TRIANGLES);else if(Z.isLine){let q=he.linewidth;q===void 0&&(q=1),Be.setLineWidth(q*Re()),Z.isLineSegments?pe.setMode(k.LINES):Z.isLineLoop?pe.setMode(k.LINE_LOOP):pe.setMode(k.LINE_STRIP)}else Z.isPoints?pe.setMode(k.POINTS):Z.isSprite&&pe.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const q=Z._multiDrawStarts,we=Z._multiDrawCounts,oe=Z._multiDrawCount,Ee=Je?ve.get(Je).bytesPerElement:1,ue=Ve.get(he).currentProgram.getUniforms();for(let ie=0;ie<oe;ie++)ue.setValue(k,"_gl_DrawID",ie),pe.render(q[ie]/Ee,we[ie])}else if(Z.isInstancedMesh)pe.renderInstances(Le,lt,Z.count);else if(se.isInstancedBufferGeometry){const q=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,we=Math.min(se.instanceCount,q);pe.renderInstances(Le,lt,we)}else pe.render(Le,lt)};function mt(P,Y,se){P.transparent===!0&&P.side===Dt&&P.forceSinglePass===!1?(P.side=zn,P.needsUpdate=!0,fn(P,Y,se),P.side=wi,P.needsUpdate=!0,fn(P,Y,se),P.side=Dt):fn(P,Y,se)}this.compile=function(P,Y,se=null){se===null&&(se=P),p=xt.get(se),p.init(Y),y.push(p),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),P!==se&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();const he=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ce=Z.material;if(Ce)if(Array.isArray(Ce))for(let De=0;De<Ce.length;De++){const Qe=Ce[De];mt(Qe,se,Z),he.add(Qe)}else mt(Ce,se,Z),he.add(Ce)}),y.pop(),p=null,he},this.compileAsync=function(P,Y,se=null){const he=this.compile(P,Y,se);return new Promise(Z=>{function Ce(){if(he.forEach(function(De){Ve.get(De).currentProgram.isReady()&&he.delete(De)}),he.size===0){Z(P);return}setTimeout(Ce,10)}ge.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let dn=null;function mn(P){dn&&dn(P)}function vn(){Ot.stop()}function ot(){Ot.start()}const Ot=new uf;Ot.setAnimationLoop(mn),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(P){dn=P,fe.setAnimationLoop(P),P===null?Ot.stop():Ot.start()},fe.addEventListener("sessionstart",vn),fe.addEventListener("sessionend",ot),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Y),Y=fe.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,Y,E),p=xt.get(P,y.length),p.init(Y),y.push(p),ae.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(ae),xe=this.localClippingEnabled,de=Ae.init(this.clippingPlanes,xe),m=ze.get(P,_.length),m.init(),_.push(m),fe.enabled===!0&&fe.isPresenting===!0){const Ce=v.xr.getDepthSensingMesh();Ce!==null&&Sn(Ce,Y,-1/0,v.sortObjects)}Sn(P,Y,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(O,j),V=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,V&&st.addToRenderList(m,P),this.info.render.frame++,de===!0&&Ae.beginShadows();const se=p.state.shadowsArray;Fe.render(se,P,Y),de===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=m.opaque,Z=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const Ce=Y.cameras;if(Z.length>0)for(let De=0,Qe=Ce.length;De<Qe;De++){const Je=Ce[De];Pt(he,Z,P,Je)}V&&st.render(P);for(let De=0,Qe=Ce.length;De<Qe;De++){const Je=Ce[De];Ln(m,P,Je,Je.viewport)}}else Z.length>0&&Pt(he,Z,P,Y),V&&st.render(P),Ln(m,P,Y);E!==null&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(v,P,Y),vt.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],de===!0&&Ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Sn(P,Y,se,he){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){he&&re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ae);const De=ce.update(P),Qe=P.material;Qe.visible&&m.push(P,De,Qe,se,re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const De=ce.update(P),Qe=P.material;if(he&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),re.copy(P.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),re.copy(De.boundingSphere.center)),re.applyMatrix4(P.matrixWorld).applyMatrix4(ae)),Array.isArray(Qe)){const Je=De.groups;for(let at=0,ft=Je.length;at<ft;at++){const G=Je[at],Le=Qe[G.materialIndex];Le&&Le.visible&&m.push(P,De,Le,se,re.z,G)}}else Qe.visible&&m.push(P,De,Qe,se,re.z,null)}}const Ce=P.children;for(let De=0,Qe=Ce.length;De<Qe;De++)Sn(Ce[De],Y,se,he)}function Ln(P,Y,se,he){const Z=P.opaque,Ce=P.transmissive,De=P.transparent;p.setupLightsView(se),de===!0&&Ae.setGlobalState(v.clippingPlanes,se),he&&Be.viewport(C.copy(he)),Z.length>0&&_n(Z,Y,se),Ce.length>0&&_n(Ce,Y,se),De.length>0&&_n(De,Y,se),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Pt(P,Y,se,he){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[he.id]===void 0&&(p.state.transmissionRenderTarget[he.id]=new ai(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Ui:Oi,minFilter:ss,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const Ce=p.state.transmissionRenderTarget[he.id],De=he.viewport||C;Ce.setSize(De.z,De.w);const Qe=v.getRenderTarget();v.setRenderTarget(Ce),v.getClearColor(R),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),V&&st.render(se);const Je=v.toneMapping;v.toneMapping=As;const at=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),p.setupLightsView(he),de===!0&&Ae.setGlobalState(v.clippingPlanes,he),_n(P,se,he),F.updateMultisampleRenderTarget(Ce),F.updateRenderTargetMipmap(Ce),ge.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let G=0,Le=Y.length;G<Le;G++){const $e=Y[G],lt=$e.object,W=$e.geometry,pe=$e.material,q=$e.group;if(pe.side===Dt&&lt.layers.test(he.layers)){const we=pe.side;pe.side=zn,pe.needsUpdate=!0,cn(lt,se,he,W,pe,q),pe.side=we,pe.needsUpdate=!0,ft=!0}}ft===!0&&(F.updateMultisampleRenderTarget(Ce),F.updateRenderTargetMipmap(Ce))}v.setRenderTarget(Qe),v.setClearColor(R,U),at!==void 0&&(he.viewport=at),v.toneMapping=Je}function _n(P,Y,se){const he=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ce=P.length;Z<Ce;Z++){const De=P[Z],Qe=De.object,Je=De.geometry,at=he===null?De.material:he,ft=De.group;Qe.layers.test(se.layers)&&cn(Qe,Y,se,Je,at,ft)}}function cn(P,Y,se,he,Z,Ce){P.onBeforeRender(v,Y,se,he,Z,Ce),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(v,Y,se,he,P,Ce),Z.transparent===!0&&Z.side===Dt&&Z.forceSinglePass===!1?(Z.side=zn,Z.needsUpdate=!0,v.renderBufferDirect(se,Y,he,Z,P,Ce),Z.side=wi,Z.needsUpdate=!0,v.renderBufferDirect(se,Y,he,Z,P,Ce),Z.side=Dt):v.renderBufferDirect(se,Y,he,Z,P,Ce),P.onAfterRender(v,Y,se,he,Z,Ce)}function fn(P,Y,se){Y.isScene!==!0&&(Y=Me);const he=Ve.get(P),Z=p.state.lights,Ce=p.state.shadowsArray,De=Z.state.version,Qe=Ie.getParameters(P,Z.state,Ce,Y,se),Je=Ie.getProgramCacheKey(Qe);let at=he.programs;he.environment=P.isMeshStandardMaterial?Y.environment:null,he.fog=Y.fog,he.envMap=(P.isMeshStandardMaterial?ee:L).get(P.envMap||he.environment),he.envMapRotation=he.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,at===void 0&&(P.addEventListener("dispose",Ye),at=new Map,he.programs=at);let ft=at.get(Je);if(ft!==void 0){if(he.currentProgram===ft&&he.lightsStateVersion===De)return nn(P,Qe),ft}else Qe.uniforms=Ie.getUniforms(P),P.onBeforeCompile(Qe,v),ft=Ie.acquireProgram(Qe,Je),at.set(Je,ft),he.uniforms=Qe.uniforms;const G=he.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(G.clippingPlanes=Ae.uniform),nn(P,Qe),he.needsLights=Zt(P),he.lightsStateVersion=De,he.needsLights&&(G.ambientLightColor.value=Z.state.ambient,G.lightProbe.value=Z.state.probe,G.directionalLights.value=Z.state.directional,G.directionalLightShadows.value=Z.state.directionalShadow,G.spotLights.value=Z.state.spot,G.spotLightShadows.value=Z.state.spotShadow,G.rectAreaLights.value=Z.state.rectArea,G.ltc_1.value=Z.state.rectAreaLTC1,G.ltc_2.value=Z.state.rectAreaLTC2,G.pointLights.value=Z.state.point,G.pointLightShadows.value=Z.state.pointShadow,G.hemisphereLights.value=Z.state.hemi,G.directionalShadowMap.value=Z.state.directionalShadowMap,G.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,G.spotShadowMap.value=Z.state.spotShadowMap,G.spotLightMatrix.value=Z.state.spotLightMatrix,G.spotLightMap.value=Z.state.spotLightMap,G.pointShadowMap.value=Z.state.pointShadowMap,G.pointShadowMatrix.value=Z.state.pointShadowMatrix),he.currentProgram=ft,he.uniformsList=null,ft}function Jt(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Pr.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function nn(P,Y){const se=Ve.get(P);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Bt(P,Y,se,he,Z){Y.isScene!==!0&&(Y=Me),F.resetTextureUnits();const Ce=Y.fog,De=he.isMeshStandardMaterial?Y.environment:null,Qe=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:jn,Je=(he.isMeshStandardMaterial?ee:L).get(he.envMap||De),at=he.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ft=!!se.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),G=!!se.morphAttributes.position,Le=!!se.morphAttributes.normal,$e=!!se.morphAttributes.color;let lt=As;he.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(lt=v.toneMapping);const W=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,pe=W!==void 0?W.length:0,q=Ve.get(he),we=p.state.lights;if(de===!0&&(xe===!0||P!==S)){const et=P===S&&he.id===M;Ae.setState(he,P,et)}let oe=!1;he.version===q.__version?(q.needsLights&&q.lightsStateVersion!==we.state.version||q.outputColorSpace!==Qe||Z.isBatchedMesh&&q.batching===!1||!Z.isBatchedMesh&&q.batching===!0||Z.isBatchedMesh&&q.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&q.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&q.instancing===!1||!Z.isInstancedMesh&&q.instancing===!0||Z.isSkinnedMesh&&q.skinning===!1||!Z.isSkinnedMesh&&q.skinning===!0||Z.isInstancedMesh&&q.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&q.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&q.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&q.instancingMorph===!1&&Z.morphTexture!==null||q.envMap!==Je||he.fog===!0&&q.fog!==Ce||q.numClippingPlanes!==void 0&&(q.numClippingPlanes!==Ae.numPlanes||q.numIntersection!==Ae.numIntersection)||q.vertexAlphas!==at||q.vertexTangents!==ft||q.morphTargets!==G||q.morphNormals!==Le||q.morphColors!==$e||q.toneMapping!==lt||q.morphTargetsCount!==pe)&&(oe=!0):(oe=!0,q.__version=he.version);let Ee=q.currentProgram;oe===!0&&(Ee=fn(he,Y,Z));let ue=!1,ie=!1,Ze=!1;const Ke=Ee.getUniforms(),Vt=q.uniforms;if(Be.useProgram(Ee.program)&&(ue=!0,ie=!0,Ze=!0),he.id!==M&&(M=he.id,ie=!0),ue||S!==P){Be.buffers.depth.getReversed()?($.copy(P.projectionMatrix),Yp($),jp($),Ke.setValue(k,"projectionMatrix",$)):Ke.setValue(k,"projectionMatrix",P.projectionMatrix),Ke.setValue(k,"viewMatrix",P.matrixWorldInverse);const Tn=Ke.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,me.setFromMatrixPosition(P.matrixWorld)),Ne.logarithmicDepthBuffer&&Ke.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Ke.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,ie=!0,Ze=!0)}if(Z.isSkinnedMesh){Ke.setOptional(k,Z,"bindMatrix"),Ke.setOptional(k,Z,"bindMatrixInverse");const et=Z.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),Ke.setValue(k,"boneTexture",et.boneTexture,F))}Z.isBatchedMesh&&(Ke.setOptional(k,Z,"batchingTexture"),Ke.setValue(k,"batchingTexture",Z._matricesTexture,F),Ke.setOptional(k,Z,"batchingIdTexture"),Ke.setValue(k,"batchingIdTexture",Z._indirectTexture,F),Ke.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ke.setValue(k,"batchingColorTexture",Z._colorsTexture,F));const hn=se.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ht.update(Z,se,Ee),(ie||q.receiveShadow!==Z.receiveShadow)&&(q.receiveShadow=Z.receiveShadow,Ke.setValue(k,"receiveShadow",Z.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Vt.envMap.value=Je,Vt.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&Y.environment!==null&&(Vt.envMapIntensity.value=Y.environmentIntensity),ie&&(Ke.setValue(k,"toneMappingExposure",v.toneMappingExposure),q.needsLights&&Ut(Vt,Ze),Ce&&he.fog===!0&&Se.refreshFogUniforms(Vt,Ce),Se.refreshMaterialUniforms(Vt,he,I,B,p.state.transmissionRenderTarget[P.id]),Pr.upload(k,Jt(q),Vt,F)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Pr.upload(k,Jt(q),Vt,F),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Ke.setValue(k,"center",Z.center),Ke.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Ke.setValue(k,"normalMatrix",Z.normalMatrix),Ke.setValue(k,"modelMatrix",Z.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const et=he.uniformsGroups;for(let Tn=0,Ht=et.length;Tn<Ht;Tn++){const Et=et[Tn];K.update(Et,Ee),K.bind(Et,Ee)}}return Ee}function Ut(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Zt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,Y,se){Ve.get(P.texture).__webglTexture=Y,Ve.get(P.depthTexture).__webglTexture=se;const he=Ve.get(P);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=se===void 0,he.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const se=Ve.get(P);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,se=0){E=P,w=Y,A=se;let he=!0,Z=null,Ce=!1,De=!1;if(P){const Je=Ve.get(P);if(Je.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(k.FRAMEBUFFER,null),he=!1;else if(Je.__webglFramebuffer===void 0)F.setupRenderTarget(P);else if(Je.__hasExternalTextures)F.rebindTextures(P,Ve.get(P.texture).__webglTexture,Ve.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const G=P.depthTexture;if(Je.__boundDepthTexture!==G){if(G!==null&&Ve.has(G)&&(P.width!==G.image.width||P.height!==G.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(P)}}const at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(De=!0);const ft=Ve.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ft[Y])?Z=ft[Y][se]:Z=ft[Y],Ce=!0):P.samples>0&&F.useMultisampledRTT(P)===!1?Z=Ve.get(P).__webglMultisampledFramebuffer:Array.isArray(ft)?Z=ft[se]:Z=ft,C.copy(P.viewport),D.copy(P.scissor),N=P.scissorTest}else C.copy(J).multiplyScalar(I).floor(),D.copy(ne).multiplyScalar(I).floor(),N=ye;if(Be.bindFramebuffer(k.FRAMEBUFFER,Z)&&he&&Be.drawBuffers(P,Z),Be.viewport(C),Be.scissor(D),Be.setScissorTest(N),Ce){const Je=Ve.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Je.__webglTexture,se)}else if(De){const Je=Ve.get(P.texture),at=Y||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Je.__webglTexture,se||0,at)}M=-1},this.readRenderTargetPixels=function(P,Y,se,he,Z,Ce,De){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Qe=Qe[De]),Qe){Be.bindFramebuffer(k.FRAMEBUFFER,Qe);try{const Je=P.texture,at=Je.format,ft=Je.type;if(!Ne.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-he&&se>=0&&se<=P.height-Z&&k.readPixels(Y,se,he,Z,ut.convert(at),ut.convert(ft),Ce)}finally{const Je=E!==null?Ve.get(E).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(P,Y,se,he,Z,Ce,De){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Qe=Qe[De]),Qe){const Je=P.texture,at=Je.format,ft=Je.type;if(!Ne.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-he&&se>=0&&se<=P.height-Z){Be.bindFramebuffer(k.FRAMEBUFFER,Qe);const G=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,G),k.bufferData(k.PIXEL_PACK_BUFFER,Ce.byteLength,k.STREAM_READ),k.readPixels(Y,se,he,Z,ut.convert(at),ut.convert(ft),0);const Le=E!==null?Ve.get(E).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,Le);const $e=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await qp(k,$e,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,G),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ce),k.deleteBuffer(G),k.deleteSync($e),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Y=null,se=0){P.isTexture!==!0&&(ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const he=Math.pow(2,-se),Z=Math.floor(P.image.width*he),Ce=Math.floor(P.image.height*he),De=Y!==null?Y.x:0,Qe=Y!==null?Y.y:0;F.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,De,Qe,Z,Ce),Be.unbindTexture()},this.copyTextureToTexture=function(P,Y,se=null,he=null,Z=0){P.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,P=arguments[1],Y=arguments[2],Z=arguments[3]||0,se=null);let Ce,De,Qe,Je,at,ft,G,Le,$e;const lt=P.isCompressedTexture?P.mipmaps[Z]:P.image;se!==null?(Ce=se.max.x-se.min.x,De=se.max.y-se.min.y,Qe=se.isBox3?se.max.z-se.min.z:1,Je=se.min.x,at=se.min.y,ft=se.isBox3?se.min.z:0):(Ce=lt.width,De=lt.height,Qe=lt.depth||1,Je=0,at=0,ft=0),he!==null?(G=he.x,Le=he.y,$e=he.z):(G=0,Le=0,$e=0);const W=ut.convert(Y.format),pe=ut.convert(Y.type);let q;Y.isData3DTexture?(F.setTexture3D(Y,0),q=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(F.setTexture2DArray(Y,0),q=k.TEXTURE_2D_ARRAY):(F.setTexture2D(Y,0),q=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const we=k.getParameter(k.UNPACK_ROW_LENGTH),oe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ee=k.getParameter(k.UNPACK_SKIP_PIXELS),ue=k.getParameter(k.UNPACK_SKIP_ROWS),ie=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,lt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Je),k.pixelStorei(k.UNPACK_SKIP_ROWS,at),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ft);const Ze=P.isDataArrayTexture||P.isData3DTexture,Ke=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Vt=Ve.get(P),hn=Ve.get(Y),et=Ve.get(Vt.__renderTarget),Tn=Ve.get(hn.__renderTarget);Be.bindFramebuffer(k.READ_FRAMEBUFFER,et.__webglFramebuffer),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let Ht=0;Ht<Qe;Ht++)Ze&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.get(P).__webglTexture,Z,ft+Ht),P.isDepthTexture?(Ke&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.get(Y).__webglTexture,Z,$e+Ht),k.blitFramebuffer(Je,at,Ce,De,G,Le,Ce,De,k.DEPTH_BUFFER_BIT,k.NEAREST)):Ke?k.copyTexSubImage3D(q,Z,G,Le,$e+Ht,Je,at,Ce,De):k.copyTexSubImage2D(q,Z,G,Le,$e+Ht,Je,at,Ce,De);Be.bindFramebuffer(k.READ_FRAMEBUFFER,null),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ke?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(q,Z,G,Le,$e,Ce,De,Qe,W,pe,lt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(q,Z,G,Le,$e,Ce,De,Qe,W,lt.data):k.texSubImage3D(q,Z,G,Le,$e,Ce,De,Qe,W,pe,lt):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Z,G,Le,Ce,De,W,pe,lt.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Z,G,Le,lt.width,lt.height,W,lt.data):k.texSubImage2D(k.TEXTURE_2D,Z,G,Le,Ce,De,W,pe,lt);k.pixelStorei(k.UNPACK_ROW_LENGTH,we),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,oe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ee),k.pixelStorei(k.UNPACK_SKIP_ROWS,ue),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ie),Z===0&&Y.generateMipmaps&&k.generateMipmap(q),Be.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,se=null,he=null,Z=0){return P.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,he=arguments[1]||null,P=arguments[2],Y=arguments[3],Z=arguments[4]||0),ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,se,he,Z)},this.initRenderTarget=function(P){Ve.get(P).__webglFramebuffer===void 0&&F.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?F.setTextureCube(P,0):P.isData3DTexture?F.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?F.setTexture2DArray(P,0):F.setTexture2D(P,0),Be.unbindTexture()},this.resetState=function(){w=0,A=0,E=null,Be.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}}class qr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(e),this.density=t}clone(){return new qr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uh extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,o=this.stride;i<o;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zn=new b;class Ks{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array),o=an(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xf extends Si{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let yo;const ea=new b,bo=new b,So=new b,wo=new Ue,ta=new Ue,vf=new nt,tr=new b,na=new b,nr=new b,Ru=new Ue,Il=new Ue,Du=new Ue;class t_ extends jt{constructor(e=new xf){if(super(),this.isSprite=!0,this.type="Sprite",yo===void 0){yo=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dh(t,5);yo.setIndex([0,1,2,0,2,3]),yo.setAttribute("position",new Ks(n,3,0,!1)),yo.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=yo,this.material=e,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bo.setFromMatrixScale(this.matrixWorld),vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),So.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bo.multiplyScalar(-So.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const a=this.center;ir(tr.set(-.5,-.5,0),So,a,bo,i,o),ir(na.set(.5,-.5,0),So,a,bo,i,o),ir(nr.set(.5,.5,0),So,a,bo,i,o),Ru.set(0,0),Il.set(1,0),Du.set(1,1);let r=e.ray.intersectTriangle(tr,na,nr,!1,ea);if(r===null&&(ir(na.set(-.5,.5,0),So,a,bo,i,o),Il.set(0,1),r=e.ray.intersectTriangle(tr,nr,na,!1,ea),r===null))return;const l=e.ray.origin.distanceTo(ea);l<e.near||l>e.far||t.push({distance:l,point:ea.clone(),uv:Mi.getInterpolation(ea,tr,na,nr,Ru,Il,Du,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ir(s,e,t,n,i,o){wo.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ta.x=o*wo.x-i*wo.y,ta.y=i*wo.x+o*wo.y):ta.copy(wo),s.copy(e),s.x+=ta.x,s.y+=ta.y,s.applyMatrix4(vf)}const Iu=new b,Lu=new Qt,Nu=new Qt,n_=new b,Uu=new nt,sr=new b,Ll=new ci,Fu=new nt,Nl=new Aa;class i_ extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ls),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sr),this.boundingBox.expandByPoint(sr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sr),this.boundingSphere.expandByPoint(sr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ll.copy(this.boundingSphere),Ll.applyMatrix4(i),e.ray.intersectsSphere(Ll)!==!1&&(Fu.copy(i).invert(),Nl.copy(e.ray).applyMatrix4(Fu),!(this.boundingBox!==null&&Nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Lu.fromBufferAttribute(i.attributes.skinIndex,e),Nu.fromBufferAttribute(i.attributes.skinWeight,e),Iu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const a=Nu.getComponent(o);if(a!==0){const r=Lu.getComponent(o);Uu.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),t.addScaledVector(n_.copy(Iu).applyMatrix4(Uu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _f extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yr extends In{constructor(e=null,t=1,n=1,i,o,a,r,l,c=Nn,h=Nn,u,d){super(null,a,r,l,c,h,i,o,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ou=new nt,s_=new nt;class fh{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,a=e.length;o<a;o++){const r=e[o]?e[o].matrixWorld:s_;Ou.multiplyMatrices(r,t[o]),Ou.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yr(t,e,e,bi,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const o=e.bones[n];let a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new _f),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,o=t.length;i<o;i++){const a=t[i];e.bones.push(a.uuid);const r=n[i];e.boneInverses.push(r.toArray())}return e}}class Xc extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Eo=new nt,Bu=new nt,or=[],ku=new ls,o_=new nt,ia=new Ge,sa=new ci;class yt extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,o_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ls),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Eo),ku.copy(e.boundingBox).applyMatrix4(Eo),this.boundingBox.union(ku)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Eo),sa.copy(e.boundingSphere).applyMatrix4(Eo),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,a=e*o+1;for(let r=0;r<n.length;r++)n[r]=i[a+r]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),e.ray.intersectsSphere(sa)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Eo),Bu.multiplyMatrices(n,Eo),ia.matrixWorld=Bu,ia.raycast(e,or);for(let a=0,r=or.length;a<r;a++){const l=or[a];l.instanceId=o,l.object=this,t.push(l)}or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(i*this.count),i,this.count,Hr,yi));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=i*e;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vs extends Si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new b,Fr=new b,zu=new nt,oa=new Aa,ar=new ci,Ul=new b,Gu=new b;class jr extends jt{constructor(e=new Tt,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)Ur.fromBufferAttribute(t,i-1),Fr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ur.distanceTo(Fr);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(i),ar.radius+=o,e.ray.intersectsSphere(ar)===!1)return;zu.copy(i).invert(),oa.copy(e.ray).applyMatrix4(zu);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),_=h.getX(x+1),y=rr(this,e,oa,l,p,_);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=rr(this,e,oa,l,x,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=rr(this,e,oa,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=rr(this,e,oa,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function rr(s,e,t,n,i,o){const a=s.geometry.attributes.position;if(Ur.fromBufferAttribute(a,i),Fr.fromBufferAttribute(a,o),t.distanceSqToSegment(Ur,Fr,Ul,Gu)>n)return;Ul.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ul);if(!(l<e.near||l>e.far))return{distance:l,point:Gu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Hu=new b,Vu=new b;class Mf extends jr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,o=t.count;i<o;i+=2)Hu.fromBufferAttribute(t,i),Vu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hu.distanceTo(Vu);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rr extends jr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ei extends Si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wu=new nt,qc=new Aa,lr=new ci,cr=new b;class Ai extends jt{constructor(e=new Tt,t=new Ei){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(i),lr.radius+=o,e.ray.intersectsSphere(lr)===!1)return;Wu.copy(i).invert(),qc.copy(e.ray).applyMatrix4(Wu);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);cr.fromBufferAttribute(u,m),Xu(cr,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)cr.fromBufferAttribute(u,g),Xu(cr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Xu(s,e,t,n,i,o,a){const r=qc.distanceSqToPoint(s);if(r<t){const l=new b;qc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qu extends In{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Nn,this.minFilter=Nn,this.generateMipmaps=!1,this.needsUpdate=!0}}class xn extends In{constructor(e,t,n,i,o,a,r,l,c){super(e,t,n,i,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),o+=n.distanceTo(i),t.push(o),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const o=n.length;let a;t?a=t:a=e*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(i=Math.floor(r+(l-r)/2),c=n[i]-a,c<0)r=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(o-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(o-1)}getTangent(e,t){let i=e-1e-4,o=e+1e-4;i<0&&(i=0),o>1&&(o=1);const a=this.getPoint(i),r=this.getPoint(o),l=t||(a.isVector2?new Ue:new b);return l.copy(r).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],o=[],a=[],r=new b,l=new nt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new b)}o[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],r),a[0].crossVectors(i[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(i[f-1],i[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(kn(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(i[f],o[f])}if(t===!0){let f=Math.acos(kn(o[0].dot(o[e]),-1,1));f/=e,i[0].dot(r.crossVectors(o[0],o[e]))>0&&(f=-f);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yf extends hs{constructor(e=0,t=0,n=1,i=1,o=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new Ue){const n=t,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(a?o=0:o=i),this.aClockwise===!0&&!a&&(o===i?o=-i:o=o-i);const r=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class a_ extends yf{constructor(e,t,n,i,o,a){super(e,t,n,n,i,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ph(){let s=0,e=0,t=0,n=0;function i(o,a,r,l){s=o,e=r,t=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){i(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let d=(a-o)/c-(r-o)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,f*=h,i(a,r,d,f)},calc:function(o){const a=o*o,r=a*o;return s+e*o+t*a+n*r}}}const hr=new b,Fl=new ph,Ol=new ph,Bl=new ph;class ii extends hs{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,o=i.length,a=(o-(this.closed?0:1))*e;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=i[(r-1)%o]:(hr.subVectors(i[0],i[1]).add(i[0]),c=hr);const u=i[r%o],d=i[(r+1)%o];if(this.closed||r+2<o?h=i[(r+2)%o]:(hr.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=hr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Fl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Ol.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ol.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Fl.calc(l),Ol.calc(l),Bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yu(s,e,t,n,i){const o=(n-e)*.5,a=(i-t)*.5,r=s*s,l=s*r;return(2*t-2*n+o+a)*l+(-3*t+3*n-2*o-a)*r+o*s+t}function r_(s,e){const t=1-s;return t*t*e}function l_(s,e){return 2*(1-s)*s*e}function c_(s,e){return s*s*e}function pa(s,e,t,n){return r_(s,e)+l_(s,t)+c_(s,n)}function h_(s,e){const t=1-s;return t*t*t*e}function u_(s,e){const t=1-s;return 3*t*t*s*e}function d_(s,e){return 3*(1-s)*s*s*e}function f_(s,e){return s*s*s*e}function ma(s,e,t,n,i){return h_(s,e)+u_(s,t)+d_(s,n)+f_(s,i)}class p_ extends hs{constructor(e=new Ue,t=new Ue,n=new Ue,i=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ue){const n=t,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(ma(e,i.x,o.x,a.x,r.x),ma(e,i.y,o.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m_ extends hs{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(ma(e,i.x,o.x,a.x,r.x),ma(e,i.y,o.y,a.y,r.y),ma(e,i.z,o.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g_ extends hs{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x_ extends hs{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v_ extends hs{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){const n=t,i=this.v0,o=this.v1,a=this.v2;return n.set(pa(e,i.x,o.x,a.x),pa(e,i.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bf extends hs{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,o=this.v1,a=this.v2;return n.set(pa(e,i.x,o.x,a.x),pa(e,i.y,o.y,a.y),pa(e,i.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class __ extends hs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const n=t,i=this.points,o=(i.length-1)*e,a=Math.floor(o),r=o-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Yu(r,l.x,c.x,h.x,u.x),Yu(r,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ue().fromArray(i))}return this}}var M_=Object.freeze({__proto__:null,ArcCurve:a_,CatmullRomCurve3:ii,CubicBezierCurve:p_,CubicBezierCurve3:m_,EllipseCurve:yf,LineCurve:g_,LineCurve3:x_,QuadraticBezierCurve:v_,QuadraticBezierCurve3:bf,SplineCurve:__});class $s extends Tt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const o=[],a=[],r=[],l=[],c=new b,h=new Ue;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tn extends Tt{constructor(e=1,t=1,n=1,i=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function _(){const v=new b,T=new b;let w=0;const A=(t-e)/n;for(let E=0;E<=o;E++){const M=[],S=E/o,C=S*(t-e)+e;for(let D=0;D<=i;D++){const N=D/i,R=N*l+r,U=Math.sin(R),z=Math.cos(R);T.x=C*U,T.y=-S*n+m,T.z=C*z,u.push(T.x,T.y,T.z),v.set(U,A,z).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-S),M.push(g++)}x.push(M)}for(let E=0;E<i;E++)for(let M=0;M<o;M++){const S=x[M][E],C=x[M+1][E],D=x[M+1][E+1],N=x[M][E+1];(e>0||M!==0)&&(h.push(S,C,N),w+=3),(t>0||M!==o-1)&&(h.push(C,D,N),w+=3)}c.addGroup(p,w,0),p+=w}function y(v){const T=g,w=new Ue,A=new b;let E=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const C=g;for(let D=0;D<=i;D++){const R=D/i*l+r,U=Math.cos(R),z=Math.sin(R);A.x=M*z,A.y=m*S,A.z=M*U,u.push(A.x,A.y,A.z),d.push(0,S,0),w.x=U*.5+.5,w.y=z*.5*S+.5,f.push(w.x,w.y),g++}for(let D=0;D<i;D++){const N=T+D,R=C+D;v===!0?h.push(R,R+1,N):h.push(R+1,R,N),E+=3}c.addGroup(p,E,v===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vn extends tn{constructor(e=1,t=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,e,t,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(e){return new Vn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends Tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const o=[],a=[];r(i),c(n),h(),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(o.slice(),3)),this.setAttribute("uv",new Kt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(_){const y=new b,v=new b,T=new b;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],v),f(t[w+2],T),l(y,v,T,_)}function l(_,y,v,T){const w=T+1,A=[];for(let E=0;E<=w;E++){A[E]=[];const M=_.clone().lerp(v,E/w),S=y.clone().lerp(v,E/w),C=w-E;for(let D=0;D<=C;D++)D===0&&E===w?A[E][D]=M:A[E][D]=M.clone().lerp(S,D/C)}for(let E=0;E<w;E++)for(let M=0;M<2*(w-E)-1;M++){const S=Math.floor(M/2);M%2===0?(d(A[E][S+1]),d(A[E+1][S]),d(A[E][S])):(d(A[E][S+1]),d(A[E+1][S+1]),d(A[E+1][S]))}}function c(_){const y=new b;for(let v=0;v<o.length;v+=3)y.x=o[v+0],y.y=o[v+1],y.z=o[v+2],y.normalize().multiplyScalar(_),o[v+0]=y.x,o[v+1]=y.y,o[v+2]=y.z}function h(){const _=new b;for(let y=0;y<o.length;y+=3){_.x=o[y+0],_.y=o[y+1],_.z=o[y+2];const v=m(_)/2/Math.PI+.5,T=p(_)/Math.PI+.5;a.push(v,1-T)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){const y=a[_+0],v=a[_+2],T=a[_+4],w=Math.max(y,v,T),A=Math.min(y,v,T);w>.9&&A<.1&&(y<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function d(_){o.push(_.x,_.y,_.z)}function f(_,y){const v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const _=new b,y=new b,v=new b,T=new b,w=new Ue,A=new Ue,E=new Ue;for(let M=0,S=0;M<o.length;M+=9,S+=6){_.set(o[M+0],o[M+1],o[M+2]),y.set(o[M+3],o[M+4],o[M+5]),v.set(o[M+6],o[M+7],o[M+8]),w.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),E.set(a[S+4],a[S+5]),T.copy(_).add(y).add(v).divideScalar(3);const C=m(T);x(w,S+0,_,C),x(A,S+2,y,C),x(E,S+4,v,C)}}function x(_,y,v,T){T<0&&_.x===1&&(a[y]=_.x-1),v.x===0&&v.z===0&&(a[y]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.vertices,e.indices,e.radius,e.details)}}class Ts extends Ta{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ts(e.radius,e.detail)}}class mh extends Ta{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mh(e.radius,e.detail)}}class ga extends Ta{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ga(e.radius,e.detail)}}class Hs extends Tt{constructor(e=.5,t=1,n=32,i=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const r=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new b,g=new Ue;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=o+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const _=p+m,y=_,v=_+n+1,T=_+n+2,w=_+1;r.push(y,v,w),r.push(v,T,w)}}this.setIndex(r),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class un extends Tt{constructor(e=1,t=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new b,d=new b,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const w=T/t;u.x=-e*Math.cos(i+w*o)*Math.sin(a+y*r),u.y=e*Math.cos(a+y*r),u.z=e*Math.sin(i+w*o)*Math.sin(a+y*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+v,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=h[p][_+1],v=h[p][_],T=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(y,v,w),(p!==n-1||l<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kr extends Tt{constructor(e=1,t=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const x=g/i*o,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;a.push(x,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ri extends Tt{constructor(e=new bf(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:o};const a=e.computeFrenetFrames(t,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new b,l=new b,c=new Ue;let h=new b;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function x(){for(let y=0;y<t;y++)m(y);m(o===!1?t:0),_(),p()}function m(y){h=e.getPointAt(y/t,h);const v=a.normals[y],T=a.binormals[y];for(let w=0;w<=i;w++){const A=w/i*Math.PI*2,E=Math.sin(A),M=-Math.cos(A);l.x=M*v.x+E*T.x,l.y=M*v.y+E*T.y,l.z=M*v.z+E*T.z,l.normalize(),d.push(l.x,l.y,l.z),r.x=h.x+n*l.x,r.y=h.y+n*l.y,r.z=h.z+n*l.z,u.push(r.x,r.y,r.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const T=(i+1)*(y-1)+(v-1),w=(i+1)*y+(v-1),A=(i+1)*y+v,E=(i+1)*(y-1)+v;g.push(T,w,E),g.push(w,A,E)}}function _(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)c.x=y/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ri(new M_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Dr extends ln{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ke extends Si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends ke{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class y_ extends Si{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function ur(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function b_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function S_(s){function e(i,o){return s[i]-s[o]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ju(s,e,t){const n=s.length,i=new s.constructor(n);for(let o=0,a=0;a!==n;++o){const r=t[o]*e;for(let l=0;l!==e;++l)i[a++]=s[r+l]}return i}function Sf(s,e,t,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let a=o[n];if(a!==void 0)if(Array.isArray(a))do a=o[n],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=s[i++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[n],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=s[i++];while(o!==void 0);else do a=o[n],a!==void 0&&(e.push(o.time),t.push(a)),o=s[i++];while(o!==void 0)}class Ca{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],o=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let r=n+2;;){if(i===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(o=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=o)){const r=t[1];e<r&&(n=2,o=r);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=o,o=t[--n-1],e>=o)break e}a=n,n=0;break t}break n}for(;n<a;){const r=n+a>>>1;e<t[r]?a=r:n=r+1}if(i=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i;for(let a=0;a!==i;++a)t[a]=n[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w_ extends Ca{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let o=e-2,a=e+1,r=i[o],l=i[a];if(r===void 0)switch(this.getSettings_().endingStart){case Uh:o=e,r=2*t-n;break;case Fh:o=i.length-2,r=t+i[o]-i[o+1];break;default:o=e,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:a=e,l=2*n-t;break;case Fh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let T=0;T!==r;++T)o[T]=p*a[h+T]+_*a[c+T]+y*a[l+T]+v*a[u+T];return o}}class E_ extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==r;++d)o[d]=a[c+d]*u+a[l+d]*h;return o}}class A_ extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ur(t,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ur(e.times,Array),values:ur(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new A_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new E_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let o=0,a=i-1;for(;o!==i&&n[o]<e;)++o;for(;a!==-1&&n[a]>t;)--a;if(++a,o!==0||a!==i){o>=a&&(a=Math.max(a,1),o=a-1);const r=this.getValueSize();this.times=n.slice(o,a),this.values=this.values.slice(o*r,a*r)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let r=0;r!==o;r++){const l=n[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),e=!1;break}a=l}if(i!==void 0&&b_(i))for(let r=0,l=i.length;r!==l;++r){const c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sl,o=e.length-1;let a=1;for(let r=1;r<o;++r){let l=!1;const c=e[r],h=e[r+1];if(c!==h&&(r!==1||c!==e[0]))if(i)l=!0;else{const u=r*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(r!==a){e[a]=e[r];const u=r*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(o>0){e[a]=e[o];for(let r=o*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[r+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=ba;class Xo extends Xi{constructor(e,t,n){super(e,t,n)}}Xo.prototype.ValueTypeName="bool";Xo.prototype.ValueBufferType=Array;Xo.prototype.DefaultInterpolation=ya;Xo.prototype.InterpolantFactoryMethodLinear=void 0;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;class wf extends Xi{}wf.prototype.ValueTypeName="color";class ko extends Xi{}ko.prototype.ValueTypeName="number";class T_ extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(n-t)/(i-t);let c=e*r;for(let h=c+r;c!==h;c+=4)ct.slerpFlat(o,0,a,c-r,a,c,l);return o}}class zo extends Xi{InterpolantFactoryMethodLinear(e){return new T_(this.times,this.values,this.getValueSize(),e)}}zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends Xi{constructor(e,t,n){super(e,t,n)}}qo.prototype.ValueTypeName="string";qo.prototype.ValueBufferType=Array;qo.prototype.DefaultInterpolation=ya;qo.prototype.InterpolantFactoryMethodLinear=void 0;qo.prototype.InterpolantFactoryMethodSmooth=void 0;class Go extends Xi{}Go.prototype.ValueTypeName="vector";class C_{constructor(e="",t=-1,n=[],i=vp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,r=n.length;a!==r;++a)t.push(R_(n[a]).scale(i));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=n.length;o!==a;++o)t.push(Xi.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const o=t.length,a=[];for(let r=0;r<o;r++){let l=[],c=[];l.push((r+o-1)%o,r,(r+1)%o),c.push(0,1,0);const h=S_(l);l=ju(l,1,h),c=ju(c,1,h),!i&&l[0]===0&&(l.push(o),c.push(c[0])),a.push(new ko(".morphTargetInfluences["+t[r].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let r=0,l=e.length;r<l;r++){const c=e[r],h=c.name.match(o);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const r in i)a.push(this.CreateFromMorphTargetSequence(r,i[r],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];Sf(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],o=e.name||"default",a=e.fps||30,r=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new ko(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Go,f+".position",d,"pos",i),n(zo,f+".quaternion",d,"rot",i),n(Go,f+".scale",d,"scl",i)}}return i.length===0?null:new this(o,l,i,r)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function P_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ko;case"vector":case"vector2":case"vector3":case"vector4":return Go;case"color":return wf;case"quaternion":return zo;case"bool":case"boolean":return Xo;case"string":return qo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function R_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=P_(s.type);if(s.times===void 0){const t=[],n=[];Sf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ws={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class D_{constructor(e,t,n){const i=this;let o=!1,a=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,o===!1&&i.onStart!==void 0&&i.onStart(h,a,r),o=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,r),a===r&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const I_=new D_;class Qs{constructor(e){this.manager=e!==void 0?e:I_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,o){n.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const es={};class L_ extends Error{constructor(e,t){super(e),this.response=t}}class Or extends Qs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ws.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(es[e]!==void 0){es[e].push({onLoad:t,onProgress:n,onError:i});return}es[e]=[],es[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=es[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{x+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,A=h.length;w<A;w++){const E=h[w];E.onProgress&&E.onProgress(T)}p.enqueue(v),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new L_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,r));case"json":return c.json();default:if(r===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(r),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ws.add(e,c);const h=es[e];delete es[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=es[e];if(h===void 0)throw this.manager.itemError(e),c;delete es[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class N_ extends Qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=ws.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const r=Sa("img");function l(){h(),ws.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(u){h(),i&&i(u),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),o.manager.itemStart(e),r.src=e,r}}class U_ extends Qs{constructor(e){super(e)}load(e,t,n,i){const o=new In,a=new N_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(r){o.image=r,o.needsUpdate=!0,t!==void 0&&t(o)},n,i),o}}class Pa extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class F_ extends Pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const kl=new nt,Ku=new b,Zu=new b;class gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O_ extends gh{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Oo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||i!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=i,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class B_ extends Pa{constructor(e,t,n=0,i=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=i,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new O_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $u=new nt,aa=new b,zl=new b;class k_ extends gh{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),n.position.copy(aa),zl.copy(n.position),zl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zl),n.updateMatrixWorld(),i.makeTranslation(-aa.x,-aa.y,-aa.z),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u)}}class xa extends Pa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new k_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z_ extends gh{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xh extends Pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new z_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ef extends Pa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class va{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class G_ extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=ws.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),o.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}const r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader;const l=fetch(e,r).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(c){return ws.add(e,c),t&&t(c),o.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ws.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});ws.add(e,l),o.manager.itemStart(e)}}class Af{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qu(){return performance.now()}const vh="\\[\\]\\.:\\/",H_=new RegExp("["+vh+"]","g"),_h="[^"+vh+"]",V_="[^"+vh.replace("\\.","")+"]",W_=/((?:WC+[\/:])*)/.source.replace("WC",_h),X_=/(WCOD+)?/.source.replace("WCOD",V_),q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),j_=new RegExp("^"+W_+X_+q_+Y_+"$"),K_=["material","materials","bones","map"];class Z_{constructor(e,t,n){const i=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rn{constructor(e,t,n){this.path=t,this.parsedPath=n||rn.parseTrackName(t),this.node=rn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rn.Composite(e,t,n):new rn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H_,"")}static parseTrackName(e){const t=j_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);K_.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===t||r.uuid===t)return r;const l=n(r.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let o=t.propertyIndex;if(e||(e=rn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rn.Composite=Z_;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ju=new nt;class $_{constructor(e,t,n=0,i=1/0){this.ray=new Aa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new rh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(e,t=!0,n=[]){return Yc(e,this,n,t),n.sort(ed),n}intersectObjects(e,t=!0,n=[]){for(let i=0,o=e.length;i<o;i++)Yc(e[i],this,n,t);return n.sort(ed),n}}function ed(s,e){return s.distance-e.distance}function Yc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let a=0,r=o.length;a<r;a++)Yc(o[a],e,t,!0)}}const td=new Ue;class Q_{constructor(e=new Ue(1/0,1/0),t=new Ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=td.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,td).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const _a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const J_=new Wr(-1,1,1,-1,0,1);class eM extends Tt{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const tM=new eM;class Zr{constructor(e){this._mesh=new Ge(tM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,J_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Tf extends Js{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nd extends Js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class nM extends Js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class iM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tf(_a),this.copyPass.material.blending=Jn,this.clock=new Af}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}nd!==void 0&&(a instanceof nd?n=!0:a instanceof nM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sM extends Js{constructor(e,t,n=null,i=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class oM{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,o){return e[0]*t+e[1]*n+e[2]*i+e[3]*o}noise(e,t){let n,i,o;const a=.5*(Math.sqrt(3)-1),r=(e+t)*a,l=Math.floor(e+r),c=Math.floor(t+r),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,x=t-f;let m,p;g>x?(m=1,p=0):(m=0,p=1);const _=g-m+h,y=x-p+h,v=g-1+2*h,T=x-1+2*h,w=l&255,A=c&255,E=this.perm[w+this.perm[A]]%12,M=this.perm[w+m+this.perm[A+p]]%12,S=this.perm[w+1+this.perm[A+1]]%12;let C=.5-g*g-x*x;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[E],g,x));let D=.5-_*_-y*y;D<0?i=0:(D*=D,i=D*D*this.dot(this.grad3[M],_,y));let N=.5-v*v-T*T;return N<0?o=0:(N*=N,o=N*N*this.dot(this.grad3[S],v,T)),70*(n+i+o)}noise3d(e,t,n){let i,o,a,r;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,x=h-g,m=u-g,p=d-g,_=e-x,y=t-m,v=n-p;let T,w,A,E,M,S;_>=y?y>=v?(T=1,w=0,A=0,E=1,M=1,S=0):_>=v?(T=1,w=0,A=0,E=1,M=0,S=1):(T=0,w=0,A=1,E=1,M=0,S=1):y<v?(T=0,w=0,A=1,E=0,M=1,S=1):_<v?(T=0,w=1,A=0,E=0,M=1,S=1):(T=0,w=1,A=0,E=1,M=1,S=0);const C=_-T+f,D=y-w+f,N=v-A+f,R=_-E+2*f,U=y-M+2*f,z=v-S+2*f,B=_-1+3*f,I=y-1+3*f,O=v-1+3*f,j=h&255,J=u&255,ne=d&255,ye=this.perm[j+this.perm[J+this.perm[ne]]]%12,Q=this.perm[j+T+this.perm[J+w+this.perm[ne+A]]]%12,de=this.perm[j+E+this.perm[J+M+this.perm[ne+S]]]%12,xe=this.perm[j+1+this.perm[J+1+this.perm[ne+1]]]%12;let $=.6-_*_-y*y-v*v;$<0?i=0:($*=$,i=$*$*this.dot3(this.grad3[ye],_,y,v));let ae=.6-C*C-D*D-N*N;ae<0?o=0:(ae*=ae,o=ae*ae*this.dot3(this.grad3[Q],C,D,N));let me=.6-R*R-U*U-z*z;me<0?a=0:(me*=me,a=me*me*this.dot3(this.grad3[de],R,U,z));let re=.6-B*B-I*I-O*O;return re<0?r=0:(re*=re,r=re*re*this.dot3(this.grad3[xe],B,I,O)),32*(i+o+a+r)}noise4d(e,t,n,i){const o=this.grad4,a=this.simplex,r=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const x=(e+t+n+i)*l,m=Math.floor(e+x),p=Math.floor(t+x),_=Math.floor(n+x),y=Math.floor(i+x),v=(m+p+_+y)*c,T=m-v,w=p-v,A=_-v,E=y-v,M=e-T,S=t-w,C=n-A,D=i-E,N=M>S?32:0,R=M>C?16:0,U=S>C?8:0,z=M>D?4:0,B=S>D?2:0,I=C>D?1:0,O=N+R+U+z+B+I,j=a[O][0]>=3?1:0,J=a[O][1]>=3?1:0,ne=a[O][2]>=3?1:0,ye=a[O][3]>=3?1:0,Q=a[O][0]>=2?1:0,de=a[O][1]>=2?1:0,xe=a[O][2]>=2?1:0,$=a[O][3]>=2?1:0,ae=a[O][0]>=1?1:0,me=a[O][1]>=1?1:0,re=a[O][2]>=1?1:0,Me=a[O][3]>=1?1:0,V=M-j+c,Re=S-J+c,k=C-ne+c,it=D-ye+c,ge=M-Q+2*c,Ne=S-de+2*c,Be=C-xe+2*c,rt=D-$+2*c,Ve=M-ae+3*c,F=S-me+3*c,L=C-re+3*c,ee=D-Me+3*c,ve=M-1+4*c,le=S-1+4*c,ce=C-1+4*c,Ie=D-1+4*c,Se=m&255,ze=p&255,xt=_&255,Ae=y&255,Fe=r[Se+r[ze+r[xt+r[Ae]]]]%32,st=r[Se+j+r[ze+J+r[xt+ne+r[Ae+ye]]]]%32,ht=r[Se+Q+r[ze+de+r[xt+xe+r[Ae+$]]]]%32,qe=r[Se+ae+r[ze+me+r[xt+re+r[Ae+Me]]]]%32,pt=r[Se+1+r[ze+1+r[xt+1+r[Ae+1]]]]%32;let ut=.6-M*M-S*S-C*C-D*D;ut<0?h=0:(ut*=ut,h=ut*ut*this.dot4(o[Fe],M,S,C,D));let vt=.6-V*V-Re*Re-k*k-it*it;vt<0?u=0:(vt*=vt,u=vt*vt*this.dot4(o[st],V,Re,k,it));let K=.6-ge*ge-Ne*Ne-Be*Be-rt*rt;K<0?d=0:(K*=K,d=K*K*this.dot4(o[ht],ge,Ne,Be,rt));let Pe=.6-Ve*Ve-F*F-L*L-ee*ee;Pe<0?f=0:(Pe*=Pe,f=Pe*Pe*this.dot4(o[qe],Ve,F,L,ee));let fe=.6-ve*ve-le*le-ce*ce-Ie*Ie;return fe<0?g=0:(fe*=fe,g=fe*fe*this.dot4(o[pt],ve,le,ce,Ie)),27*(h+u+d+f+g)}}const dr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Ue},cameraProjectionMatrix:{value:new nt},cameraInverseProjectionMatrix:{value:new nt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},fr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},pr={uniforms:{tDiffuse:{value:null},resolution:{value:new Ue}},vertexShader:`varying vec2 vUv;

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

		}`};class Ss extends Js{constructor(e,t,n,i,o=32){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(o),this.generateRandomKernelRotations();const a=new hh;a.format=js,a.type=Ys,this.normalRenderTarget=new ai(this.width,this.height,{minFilter:Nn,magFilter:Nn,type:Ui,depthTexture:a}),this.ssaoRenderTarget=new ai(this.width,this.height,{type:Ui}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new ln({defines:Object.assign({},dr.defines),uniforms:Ni.clone(dr.uniforms),vertexShader:dr.vertexShader,fragmentShader:dr.fragmentShader,blending:Jn}),this.ssaoMaterial.defines.KERNEL_SIZE=o,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new y_,this.normalMaterial.blending=Jn,this.blurMaterial=new ln({defines:Object.assign({},pr.defines),uniforms:Ni.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ln({defines:Object.assign({},fr.defines),uniforms:Ni.clone(fr.uniforms),vertexShader:fr.vertexShader,fragmentShader:fr.fragmentShader,blending:Jn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ln({uniforms:Ni.clone(_a.uniforms),vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ud,blendDst:tc,blendEquation:is,blendSrcAlpha:Nd,blendDstAlpha:tc,blendEquationAlpha:is}),this.fsQuad=new Zr(null),this.originalClearColor=new te}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,n){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case Ss.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Jn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Ss.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Jn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Ss.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Ss.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Jn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Ss.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ld,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,n,i,o){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,o){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,o=t.clearAlpha||o,i!=null&&(e.setClearColor(i),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const i=new b;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let o=n/e;o=X.lerp(.1,1,o*o),i.multiplyScalar(o),t.push(i)}}generateRandomKernelRotations(){const n=new oM,i=16,o=new Float32Array(i);for(let a=0;a<i;a++){const r=Math.random()*2-1,l=Math.random()*2-1,c=0;o[a]=n.noise3d(r,l,c)}this.noiseTexture=new Yr(o,4,4,Hr,yi),this.noiseTexture.wrapS=Wn,this.noiseTexture.wrapT=Wn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}}Ss.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const aM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ho extends Js{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(o,a,{type:Ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ai(o,a,{type:Ui});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ai(o,a,{type:Ui});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),a=Math.round(a/2)}const r=aM;this.highPassUniforms=Ni.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ue(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=_a;this.copyUniforms=Ni.clone(h.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new te,this.oldClearAlpha=1,this.basic=new gn,this.fsQuad=new Zr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new Ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ho.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ho.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ho.BlurDirectionX=new Ue(1,0);Ho.BlurDirectionY=new Ue(0,1);const rM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class lM extends Js{constructor(){super();const e=rM;this.uniforms=Ni.clone(e.uniforms),this.material=new Dr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Zr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===on&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Od?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Cf(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new xn(s);return n.needsUpdate=!0,n}function cM(s=8500,e=14e3){const t=new Lt;t.name="Procedural_Starfield";const n=new Float32Array(s*3),i=new Float32Array(s*3),o=[new te(10205439),new te(13293823),new te(16316415),new te(16774378),new te(16765601),new te(16754795)];for(let p=0;p<s;p++){const _=Math.random(),y=Math.random(),v=_*2*Math.PI;let T=Math.acos(2*y-1);Math.random()<.35&&(T=Math.PI*.5+(Math.random()-.5)*.32);const w=e*(.55+.45*Math.random()),A=Math.sin(T);n[p*3]=w*A*Math.cos(v),n[p*3+1]=w*Math.cos(T),n[p*3+2]=w*A*Math.sin(v);const E=o[Math.floor(Math.random()*o.length)],M=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=E.r*M,i[p*3+1]=E.g*M,i[p*3+2]=E.b*M}const a=new Tt;a.setAttribute("position",new bt(n,3)),a.setAttribute("color",new bt(i,3));const r=Cf(),l=e/14e3,c=new Ei({size:28*l,map:r,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Dn,sizeAttenuation:!0}),h=new Ai(a,c);t.add(h);const u=500,d=new Float32Array(u*3),f=new Float32Array(u*3);for(let p=0;p<u;p++){const _=Math.random()*2*Math.PI,y=Math.acos(2*Math.random()-1),v=e*.72;d[p*3]=v*Math.sin(y)*Math.cos(_),d[p*3+1]=v*Math.cos(y),d[p*3+2]=v*Math.sin(y)*Math.sin(_);const T=o[p%o.length];f[p*3]=T.r,f[p*3+1]=T.g,f[p*3+2]=T.b}const g=new Tt;g.setAttribute("position",new bt(d,3)),g.setAttribute("color",new bt(f,3));const x=new Ei({size:56*l,map:r,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Dn});t.add(new Ai(g,x)),t.renderOrder=-80,h.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const _=X.clamp(p,0,1);c.opacity=.92*_,x.opacity=.95*_,t.visible=_>.015},t}class hM{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let o=0;o<t;o++)n[o*3]=(Math.random()-.5)*28,n[o*3+1]=(Math.random()-.5)*18,n[o*3+2]=-Math.random()*55;this.geometry=new Tt,this.geometry.setAttribute("position",new bt(n,3)),this.material=new Ei({color:new te(16758892),size:.42,map:Cf(),transparent:!0,opacity:0,depthWrite:!1,blending:Dn}),this.points=new Ai(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let o=0;o<this.streakCount;o++){const a=Math.random()*Math.PI*2,r=3.5+Math.random()*22,l=Math.cos(a)*r,c=Math.sin(a)*r*.72,h=-8-Math.random()*95,u=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:h,len:u}),i[o*6]=l,i[o*6+1]=c,i[o*6+2]=h,i[o*6+3]=l,i[o*6+4]=c,i[o*6+5]=h-u}this.streakGeometry=new Tt,this.streakGeometry.setAttribute("position",new bt(i,3)),this.streakMaterial=new Vs({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:Dn}),this.streakLines=new Mf(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=X.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=X.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const o=this.geometry.attributes.position,a=o.array,r=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=a[l*3+2]+r;c>2&&(c=-52-Math.random()*12,a[l*3]=(Math.random()-.5)*28,a[l*3+1]=(Math.random()-.5)*18),a[l*3+2]=c}o.needsUpdate=!0}if(this.pulseFactor=X.lerp(this.pulseFactor,X.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const o=this.streakGeometry.attributes.position,a=o.array,r=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const h=this.streakSeeds[c];h.z+=r,h.z>4&&(h.z=-95-Math.random()*25);const u=h.z-h.len*l;a[c*6]=h.x,a[c*6+1]=h.y,a[c*6+2]=h.z,a[c*6+3]=h.x,a[c*6+4]=h.y,a[c*6+5]=u}o.needsUpdate=!0}}}class uM{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new b,this.angularVelocity=new b,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.speedRatio=0,this.lastLayerBaseSpeed=8,this.lastLayerBoostMax=24,this._shakePhase=0,this._qShake=new ct,this._eulerShake=new li,this.altitudeContext={surfaceAltitude:9999,planetRadius:1050,atmoTopAlt:750,groundFloorAlt:.9,minSpeed:8,metersPerUnit:62,submergedRatio:0,planetCenter:new b,prevPlanetCenter:new b,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new b,planetQuatDelta:new ct},this._tmpToShip=new b,this.enabled=!0,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov||60,this._bindEvents()}setEnabled(e){if(this.enabled=!!e,!this.enabled){this.isDragging=!1;for(const t of Object.keys(this.keys))this.keys[t]=!1;typeof document<"u"&&document.pointerLockElement===this.domElement&&document.exitPointerLock&&document.exitPointerLock()}}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{this.enabled&&!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{this.enabled&&e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.enabled||!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=X.clamp(-t*.011,-.52,.52);this.targetBankAngle=X.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{if(!this.enabled)return;const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=X.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){if(!(!this.enabled&&t))switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,minSpeed:o,metersPerUnit:a,submergedRatio:r,planetCenter:l,prevPlanetCenter:c,hasPlanet:h,inGravityWell:u,planetDeltaPos:d,planetQuatDelta:f}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||1050,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*.72,this.altitudeContext.groundFloorAlt=i??.9,this.altitudeContext.minSpeed=o??8,this.altitudeContext.metersPerUnit=a??62,this.altitudeContext.submergedRatio=X.clamp(r??0,0,1),l?(this.altitudeContext.planetCenter.copy(l),this.altitudeContext.prevPlanetCenter.copy(c||l),this.altitudeContext.hasPlanet=h!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!u,d?this.altitudeContext.planetDeltaPos.copy(d):this.altitudeContext.planetDeltaPos.set(0,0,0),f?this.altitudeContext.planetQuatDelta.copy(f):this.altitudeContext.planetQuatDelta.identity()}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:o=!1,onComplete:a=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const r=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new b(0,1,0)}));this.autopilot={startPos:r,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:o,onComplete:a}}setPose(e,t,n=new b(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getSpeedRatio(){return this.speedRatio}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(0,this.altitudeContext.groundFloorAlt||0),o=Math.max(0,t-n)*(this.altitudeContext.metersPerUnit??62),a=Math.max(200,this.altitudeContext.atmoTopAlt),r=X.clamp(t/a,0,1),l=X.smoothstep(t,a,a+2600),c=this.altitudeContext.minSpeed??8,h=X.lerp(1,.48,this.altitudeContext.submergedRatio||0),u=X.smoothstep(o,0,2500),d=X.smoothstep(o,2500,12e3),f=X.smoothstep(o,12e3,35e3),g=X.smoothstep(o,35e3,62e3);let x=X.lerp(c,18,u);x=X.lerp(x,44,d),x=X.lerp(x,105,f),x=X.lerp(x,165,g),x*=h;const m=X.lerp(x,440,Math.pow(l,1.08)),p=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&p){const A=X.lerp(X.lerp(.24,.62,r),1,l);this.pulseDriveCharge=X.lerp(this.pulseDriveCharge,A,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=X.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const _=this.keys.boost&&p?Math.min(1,this.pulseDriveCharge/Math.max(.2,X.lerp(.24,1,l))):this.pulseDriveCharge,y=X.lerp(2.2,3.2,r),T=X.lerp(y,7.2,l),w=X.lerp(1,T,Math.min(1,_));return this.lastLayerBaseSpeed=m*this.speedMultiplier,this.lastLayerBoostMax=m*this.speedMultiplier*T,m*this.speedMultiplier*w}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell){const p=this.altitudeContext.planetQuatDelta;p.x*p.x+p.y*p.y+p.z*p.z>1e-14?(this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.prevPlanetCenter).applyQuaternion(p),this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip),this.shipQuaternion.premultiply(p).normalize(),this.velocity.applyQuaternion(p),this.camera.quaternion.copy(this.shipQuaternion)):this.camera.position.add(this.altitudeContext.planetDeltaPos)}if(this.autopilot){this.autopilot.elapsed+=t;const p=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),_=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,{targetPos:y,lookAtPos:v,upVec:T,useCurveNow:w}=this.autopilot.poseProvider(_,p,this.autopilot.startPos),A=this.camera.position.clone();this.autopilot.useDirectCurve||w?this.camera.position.copy(y):this.camera.position.lerpVectors(this.autopilot.startPos,y,_);const E=this.camera.clone();E.position.copy(this.camera.position),E.up.copy(T||new b(0,1,0)),E.lookAt(v),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,E.quaternion,this.autopilot.useDirectCurve?Math.min(1,_*2.2):Math.min(1,_*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(A).divideScalar(t);const M=this.autopilot.useDirectCurve?Math.sin(p*Math.PI)*14:Math.sin(p*Math.PI)*28,S=this.baseFov+M;if(Math.abs(this.camera.fov-S)>.03&&(this.camera.fov=X.lerp(this.camera.fov,S,.22),this.camera.updateProjectionMatrix()),this.speedRatio=X.lerp(this.speedRatio,this.autopilot.useDirectCurve?.35*Math.sin(p*Math.PI):.72*Math.sin(p*Math.PI),.18),p>=1){const C=this.autopilot.onComplete;this.autopilot=null,C?(this.velocity.multiplyScalar(.2),C()):this.velocity.set(0,0,0)}return}if(!this.enabled){this.angularVelocity.set(0,0,0);return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const p=new ct().setFromAxisAngle(new b(1,0,0),this.angularVelocity.x),_=new ct().setFromAxisAngle(new b(0,1,0),this.angularVelocity.y),y=new ct().setFromAxisAngle(new b(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(_),this.shipQuaternion.multiply(p),this.shipQuaternion.multiply(y),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=X.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const o=new ct().setFromAxisAngle(new b(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(o);const a=new b((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),r=this._computeAdaptiveSpeedLimits(t);if(a.lengthSq()>0){a.normalize(),a.applyQuaternion(this.shipQuaternion);const p=a.multiplyScalar(r),_=X.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(p,1-Math.exp(-_*t))}else{const p=X.lerp(3.4,6.2,this.altitudeContext.submergedRatio||0);this.velocity.multiplyScalar(Math.exp(-p*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0)}if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const p=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,_=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),y=_.length();if(y>1e-4&&y<p){const v=_.divideScalar(y);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(v,p);const T=this.velocity.dot(v);T<0&&this.velocity.addScaledVector(v,-T)}}const l=this.velocity.length(),c=Math.max(.001,this.lastLayerBoostMax-this.lastLayerBaseSpeed*.25),h=X.clamp((l-this.lastLayerBaseSpeed*.25)/c,0,1),u=X.clamp(Math.max(h,this.pulseDriveCharge*.94),0,1);this.speedRatio=X.lerp(this.speedRatio,u,1-Math.exp(-8.5*t));const d=Math.max(0,this.altitudeContext.surfaceAltitude||9999),f=Math.max(200,this.altitudeContext.atmoTopAlt||750),g=d/f;if(this.altitudeContext.hasPlanet&&g<.85&&(this.altitudeContext.submergedRatio||0)<.08&&this.speedRatio>.72){this._shakePhase+=t*58;const _=X.smoothstep(this.speedRatio,.72,1)*(1-X.clamp(g/.85,0,1))*.0042;this._eulerShake.set(Math.sin(this._shakePhase*1.13)*_,Math.cos(this._shakePhase*.89)*_,Math.sin(this._shakePhase*1.47)*_*1.4),this._qShake.setFromEuler(this._eulerShake),this.camera.quaternion.multiply(this._qShake)}const m=X.lerp(this.baseFov,94,Math.pow(this.speedRatio,1.12));Math.abs(this.camera.fov-m)>.03&&(this.camera.fov=X.lerp(this.camera.fov,m,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function Ct(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},a={},r=s[0].morphTargetsRelative,l=new Tt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=id(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);const g=id(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function id(s){let e,t,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*t}const a=new e(o),r=new bt(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const x=h.getComponent(d,g);r.setComponent(d+u,g,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(r.gpuType=i),r}function sd(s,e){if(e===_p)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===kc||e===Jd){let t=s.getIndex();if(t===null){const a=[],r=s.getAttribute("position");if(r!==void 0){for(let l=0;l<r.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===kc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class dM extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new DM(t)})}load(e,t,n,i){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=va.extractUrlBase(e);a=va.resolveURL(c,this.path)}else a=va.extractUrlBase(e);this.manager.itemStart(e);const r=function(c){i?i(c):console.error(c),o.manager.itemError(e),o.manager.itemEnd(e)},l=new Or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{o.parse(c,a,function(h){t(h),o.manager.itemEnd(e)},r)}catch(h){r(h)}},n,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let o;const a={},r={},l=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Pf){try{a[Gt.KHR_BINARY_GLTF]=new IM(e)}catch(u){i&&i(u);return}o=JSON.parse(a[Gt.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XM(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[u.name]=u,a[u.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){const u=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(u){case Gt.KHR_MATERIALS_UNLIT:a[u]=new mM;break;case Gt.KHR_DRACO_MESH_COMPRESSION:a[u]=new LM(o,this.dracoLoader);break;case Gt.KHR_TEXTURE_TRANSFORM:a[u]=new NM;break;case Gt.KHR_MESH_QUANTIZATION:a[u]=new UM;break;default:d.indexOf(u)>=0&&r[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(r),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,o){n.parse(e,t,i,o)})}}function fM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pM{constructor(e){this.parser=e,this.name=Gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const o=t.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let c;const h=new te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xa(h),c.distance=u;break;case"spot":c=new B_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ns(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],r=(o.extensions&&o.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(l){return n._getNodeRef(t.cache,r,l)})}}class mM{constructor(){this.name=Gt.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){const i=[];e.color=new te(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jn),e.opacity=a[3]}o.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",o.baseColorTexture,$t))}return Promise.all(i)}}class gM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class xM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const r=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(r,r)}return Promise.all(o)}}class vM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class MM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const r=a.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],jn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,$t)),a.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class yM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class bM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const r=a.attenuationColor||[1,1,1];return t.attenuationColor=new te().setRGB(r[0],r[1],r[2],jn),Promise.all(o)}}class SM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class wM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const r=a.specularColorFactor||[1,1,1];return t.specularColor=new te().setRGB(r[0],r[1],r[2],jn),a.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,$t)),Promise.all(o)}}class EM{constructor(e){this.parser=e,this.name=Gt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}}class AM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class TM{constructor(e){this.parser=e,this.name=Gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const o=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}}class CM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],r=i.images[a.source];let l=n.textureLoader;if(r.uri){const c=n.options.manager.getHandler(r.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],r=i.images[a.source];let l=n.textureLoader;if(r.uri){const c=n.options.manager.getHandler(r.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class RM{constructor(e){this.name=Gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],o=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(r){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(r,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class DM{constructor(e){this.name=Gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,r=[],l={};for(const c in a)r.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return r.length<1?null:(r.push(this.parser.createNodeMesh(e)),Promise.all(r).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const x=new nt,m=new b,p=new ct,_=new b(1,1,1),y=new yt(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,x.compose(m,p,_));for(const v in l)if(v==="_COLOR_0"){const T=l[v];y.instanceColor=new Xc(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);jt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Pf="glTF",ra=12,od={JSON:1313821514,BIN:5130562};class IM{constructor(e){this.name=Gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ra,o=new DataView(e,ra);let a=0;for(;a<i;){const r=o.getUint32(a,!0);a+=4;const l=o.getUint32(a,!0);if(a+=4,l===od.JSON){const c=new Uint8Array(e,ra+a,r);this.content=n.decode(c)}else if(l===od.BIN){const c=ra+a;this.body=e.slice(c,c+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class LM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,r={},l={},c={};for(const h in a){const u=jc[h]||h.toLowerCase();r[u]=a[h]}for(const h in e.attributes){const u=jc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Do[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",o).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},r,c,jn,d)})})}}class NM{constructor(){this.name=Gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UM{constructor(){this.name=Gt.KHR_MESH_QUANTIZATION}}class Rf extends Ca{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[o+a];return t}interpolate_(e,t,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=r*2,c=r*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+u;for(let v=0;v!==r;v++){const T=a[x+v+r],w=a[x+v+l]*h,A=a[g+v+r],E=a[g+v]*h;o[v]=_*T+y*w+m*A+p*E}return o}}const FM=new ct;class OM extends Rf{interpolate_(e,t,n,i){const o=super.interpolate_(e,t,n,i);return FM.fromArray(o).normalize().toArray(o),o}}const vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Do={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ad={9728:Nn,9729:pi,9984:Vd,9985:Sr,9986:la,9987:ss},rd={33071:Li,33648:Lr,10497:Wn},Gl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BM={CUBICSPLINE:void 0,LINEAR:ba,STEP:ya},Hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),s.DefaultMaterial}function Os(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ns(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zM(s,e,t){let n=!1,i=!1,o=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(o=!0),n&&i&&o)break}if(!n&&!i&&!o)return Promise.resolve(s);const a=[],r=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;r.push(d)}if(o){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),o&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function GM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function HM(s){let e;const t=s.extensions&&s.extensions[Gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vl(t.attributes):e=s.indices+":"+Vl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Vl(s.targets[n]);return e}function Vl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Kc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const WM=new nt;class XM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,o=!1,a=-1;if(typeof navigator<"u"){const r=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(r)===!0;const l=r.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,o=r.indexOf("Firefox")>-1,a=o?r.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||o&&a<98?this.textureLoader=new U_(this.options.manager):this.textureLoader=new G_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const r={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Os(o,r,i),ns(r,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(r)})).then(function(){for(const l of r.scenes)l.updateMatrixWorld();e(r)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,o=t.length;i<o;i++){const a=t[i].joints;for(let r=0,l=a.length;r<l;r++)e[a[r]].isBone=!0}for(let i=0,o=e.length;i<o;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),o=(a,r)=>{const l=this.associations.get(a);l!=null&&this.associations.set(r,l);for(const[c,h]of a.children.entries())o(h,r.children[c])};return o(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const o=e(t[i]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":i=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(o,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(o,a){n.load(va.resolveURL(t.uri,i.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Gl[i.type],r=Do[i.componentType],l=i.normalized===!0,c=new r(i.count*a);return Promise.resolve(new bt(c,a,l))}const o=[];return i.bufferView!==void 0?o.push(this.getDependency("bufferView",i.bufferView)):o.push(null),i.sparse!==void 0&&(o.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(o).then(function(a){const r=a[0],l=Gl[i.type],c=Do[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(_);y||(x=new c(r,p*f,i.count*f/h),y=new dh(x,f/h),t.cache.add(_,y)),m=new Ks(y,l,d%f/h,g)}else r===null?x=new c(i.count*l):x=new c(r,d,i.count*l),m=new bt(x,l,g);if(i.sparse!==void 0){const p=Gl.SCALAR,_=Do[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new _(a[1],y,i.sparse.count*p),w=new c(a[2],v,i.sparse.count*l);r!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,E=T.length;A<E;A++){const M=T[A];if(m.setX(M,w[A*l]),l>=2&&m.setY(M,w[A*l+1]),l>=3&&m.setZ(M,w[A*l+2]),l>=4&&m.setW(M,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,a=t.images[o];let r=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(r=l)}return this.loadTextureImage(e,o,r)}loadTextureImage(e,t,n){const i=this,o=this.json,a=o.textures[e],r=o.images[t],l=(r.uri||r.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||r.name||"",h.name===""&&typeof r.uri=="string"&&r.uri.startsWith("data:image/")===!1&&(h.name=r.uri);const d=(o.samplers||{})[a.sampler]||{};return h.magFilter=ad[d.magFilter]||pi,h.minFilter=ad[d.minFilter]||ss,h.wrapS=rd[d.wrapS]||Wn,h.wrapT=rd[d.wrapT]||Wn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nn&&h.minFilter!==pi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],r=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=r.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new In(x);m.needsUpdate=!0,d(m)}),t.load(va.resolveURL(u,o.path),g,void 0,f)})}).then(function(u){return c===!0&&r.revokeObjectURL(l),ns(u,a),u.userData.mimeType=a.mimeType||VM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const o=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),o.extensions[Gt.KHR_TEXTURE_TRANSFORM]){const r=n.extensions!==void 0?n.extensions[Gt.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const l=o.associations.get(a);a=o.extensions[Gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,r),o.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const r="PointsMaterial:"+n.uuid;let l=this.cache.get(r);l||(l=new Ei,Si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(r,l)),n=l}else if(e.isLine){const r="LineBasicMaterial:"+n.uuid;let l=this.cache.get(r);l||(l=new Vs,Si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(r,l)),n=l}if(i||o||a){let r="ClonedMaterial:"+n.uuid+":";i&&(r+="derivative-tangents:"),o&&(r+="vertex-colors:"),a&&(r+="flat-shading:");let l=this.cache.get(r);l||(l=n.clone(),o&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(r,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ke}loadMaterial(e){const t=this,n=this.json,i=this.extensions,o=n.materials[e];let a;const r={},l=o.extensions||{},c=[];if(l[Gt.KHR_MATERIALS_UNLIT]){const u=i[Gt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(r,o,t))}else{const u=o.pbrMetallicRoughness||{};if(r.color=new te(1,1,1),r.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;r.color.setRGB(d[0],d[1],d[2],jn),r.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(r,"map",u.baseColorTexture,$t)),r.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,r.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(r,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(r,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,r)})))}o.doubleSided===!0&&(r.side=Dt);const h=o.alphaMode||Hl.OPAQUE;if(h===Hl.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,h===Hl.MASK&&(r.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==gn&&(c.push(t.assignTexture(r,"normalMap",o.normalTexture)),r.normalScale=new Ue(1,1),o.normalTexture.scale!==void 0)){const u=o.normalTexture.scale;r.normalScale.set(u,u)}if(o.occlusionTexture!==void 0&&a!==gn&&(c.push(t.assignTexture(r,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==gn){const u=o.emissiveFactor;r.emissive=new te().setRGB(u[0],u[1],u[2],jn)}return o.emissiveTexture!==void 0&&a!==gn&&c.push(t.assignTexture(r,"emissiveMap",o.emissiveTexture,$t)),Promise.all(c).then(function(){const u=new a(r);return o.name&&(u.name=o.name),ns(u,o),t.associations.set(u,{materials:e}),o.extensions&&Os(i,u,o),u})}createUniqueName(e){const t=rn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function o(r){return n[Gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,t).then(function(l){return ld(l,r,t)})}const a=[];for(let r=0,l=e.length;r<l;r++){const c=e[r],h=HM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Gt.KHR_DRACO_MESH_COMPRESSION]?d=o(c):d=ld(new Tt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,o=n.meshes[e],a=o.primitives,r=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?kM(this.cache):this.getDependency("material",a[l].material);r.push(h)}return r.push(t.loadGeometries(a)),Promise.all(r).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=a[f];let p;const _=c[f];if(m.mode===vi.TRIANGLES||m.mode===vi.TRIANGLE_STRIP||m.mode===vi.TRIANGLE_FAN||m.mode===void 0)p=o.isSkinnedMesh===!0?new i_(x,_):new Ge(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vi.TRIANGLE_STRIP?p.geometry=sd(p.geometry,Jd):m.mode===vi.TRIANGLE_FAN&&(p.geometry=sd(p.geometry,kc));else if(m.mode===vi.LINES)p=new Mf(x,_);else if(m.mode===vi.LINE_STRIP)p=new jr(x,_);else if(m.mode===vi.LINE_LOOP)p=new Rr(x,_);else if(m.mode===vi.POINTS)p=new Ai(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&GM(p,o),p.name=t.createUniqueName(o.name||"mesh_"+e),ns(p,o),m.extensions&&Os(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return o.extensions&&Os(i,u[0],o),u[0];const d=new Lt;o.extensions&&Os(i,d,o),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Hn(X.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ns(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,o=t.joints.length;i<o;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const o=i.pop(),a=i,r=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){r.push(u);const d=new nt;o!==null&&d.fromArray(o.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fh(r,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],o=i.name?i.name:"animation_"+e,a=[],r=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),r.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,y=d.length;_<y;_++){const v=d[_],T=f[_],w=g[_],A=x[_],E=m[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,T,w,A,E);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new C_(o,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(o){const a=n._getNodeRef(n.meshCache,i.mesh,o);return i.weights!==void 0&&a.traverse(function(r){if(r.isMesh)for(let l=0,c=i.weights.length;l<c;l++)r.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],o=n._loadNodeShallow(e),a=[],r=i.children||[];for(let c=0,h=r.length;c<h;c++)a.push(n.getDependency("node",r[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([o,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,WM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],a=o.name?i.createUniqueName(o.name):"",r=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&r.push(l),o.camera!==void 0&&r.push(i.getDependency("camera",o.camera).then(function(c){return i._getNodeRef(i.cameraCache,o.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){r.push(c)}),this.nodeCache[e]=Promise.all(r).then(function(c){let h;if(o.isBone===!0?h=new _f:c.length>1?h=new Lt:c.length===1?h=c[0]:h=new jt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(o.name&&(h.userData.name=o.name,h.name=a),ns(h,o),o.extensions&&Os(n,h,o),o.matrix!==void 0){const u=new nt;u.fromArray(o.matrix),h.applyMatrix4(u)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,o=new Lt;n.name&&(o.name=i.createUniqueName(n.name)),ns(o,n),n.extensions&&Os(t,o,n);const a=n.nodes||[],r=[];for(let l=0,c=a.length;l<c;l++)r.push(i.getDependency("node",a[l]));return Promise.all(r).then(function(l){for(let h=0,u=l.length;h<u;h++)o.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Si||d instanceof In)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(o),o})}_createAnimationTracks(e,t,n,i,o){const a=[],r=e.name?e.name:e.uuid,l=[];xs[o.path]===xs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(r);let c;switch(xs[o.path]){case xs.weights:c=ko;break;case xs.rotation:c=zo;break;case xs.position:case xs.scale:c=Go;break;default:switch(n.itemSize){case 1:c=ko;break;case 2:case 3:default:c=Go;break}break}const h=i.interpolation!==void 0?BM[i.interpolation]:ba,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+xs[o.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Kc(t.constructor),i=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=t[o]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof zo?OM:Rf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qM(s,e,t){const n=e.attributes,i=new ls;if(n.POSITION!==void 0){const r=t.json.accessors[n.POSITION],l=r.min,c=r.max;if(l!==void 0&&c!==void 0){if(i.set(new b(l[0],l[1],l[2]),new b(c[0],c[1],c[2])),r.normalized){const h=Kc(Do[r.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const r=new b,l=new b;for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Kc(Do[d.componentType]);l.multiplyScalar(x)}r.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(r)}s.boundingBox=i;const a=new ci;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ld(s,e,t){const n=e.attributes,i=[];function o(a,r){return t.getDependency("accessor",a).then(function(l){s.setAttribute(r,l)})}for(const a in n){const r=jc[a]||a.toLowerCase();r in s.attributes||i.push(o(n[a],r))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(r){s.setIndex(r)});i.push(a)}return zt.workingColorSpace!==jn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zt.workingColorSpace}" not supported.`),ns(s,e),qM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?zM(s,e.targets,t):s})}const Wl=new WeakMap;class YM extends Qs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const o=new Or(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,$t,n).catch(n)}decodeDracoFile(e,t,n,i,o=jn,a=()=>{}){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:o};return this.decodeGeometry(e,r).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Wl.has(e)){const l=Wl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const o=this.workerNextTaskID++,a=e.byteLength,r=this._getWorker(o,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[o]={resolve:c,reject:h},i.postMessage({type:"decode",id:o,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return r.catch(()=>!0).then(()=>{i&&o&&this._releaseTask(i,o)}),Wl.set(e,{key:n,promise:r}),r}_createGeometry(e){const t=new Tt;e.index&&t.setIndex(new bt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],o=i.name,a=i.array,r=i.itemSize,l=new bt(a,r);o==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(o,l)}return t}_assignVertexColorSpace(e,t){if(t!==$t)return;const n=new te;for(let i=0,o=e.count;i<o;i++)n.fromBufferAttribute(e,i),zt.toWorkingColorSpace(n,$t),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Or(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,o)=>{n.load(e,i,void 0,o)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const o=jM.toString(),a=["/* draco decoder */",i,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(o){const a=o.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,o){return i._taskLoad>o._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function jM(){let s,e;onmessage=function(a){const r=a.data;switch(r.type){case"init":s=r.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=r.buffer,c=r.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:r.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:r.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,r,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=r.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=r.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=r.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const x={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let _,y;if(c.useUniqueIDs)y=h[m],_=r.GetAttributeByUniqueId(d,y);else{if(y=r.GetAttributeId(d,a[h[m]]),y===-1)continue;_=r.GetAttribute(d,y)}const v=i(a,r,d,m,p,_);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),x.attributes.push(v)}return g===a.TRIANGULAR_MESH&&(x.index=n(a,r,d)),a.destroy(d),x}function n(a,r,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);r.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,r,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,x=g*h.BYTES_PER_ELEMENT,m=o(a,h),p=a._malloc(x);r.GetAttributeDataArrayForAllPoints(l,u,m,x,p);const _=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:c,array:_,itemSize:d}}function o(a,r){switch(r){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class $r extends Ge{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,o=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,r=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new b(.70707,.70707,0),u=new te(t.sunColor!==void 0?t.sunColor:16777215),d=new te(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new b(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:wi,m=t.fog!==void 0?t.fog:!1,p=new Ms,_=new b,y=new b,v=new b,T=new nt,w=new b(0,0,-1),A=new Qt,E=new b,M=new b,S=new Qt,C=new nt,D=new Hn,N=new ai(i,o),R={name:"MirrorShader",uniforms:Ni.merge([We.fog,We.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new nt},sunColor:{value:new te(8355711)},sunDirection:{value:new b(.70707,.70707,0)},eye:{value:new b},waterColor:{value:new te(5592405)}}]),vertexShader:`
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
				}`},U=new ln({name:R.name,uniforms:Ni.clone(R.uniforms),vertexShader:R.vertexShader,fragmentShader:R.fragmentShader,lights:!0,side:x,fog:m});U.uniforms.mirrorSampler.value=N.texture,U.uniforms.textureMatrix.value=C,U.uniforms.alpha.value=r,U.uniforms.time.value=l,U.uniforms.normalSampler.value=c,U.uniforms.sunColor.value=u,U.uniforms.waterColor.value=d,U.uniforms.sunDirection.value=h,U.uniforms.distortionScale.value=g,U.uniforms.eye.value=f,n.material=U,n.onBeforeRender=function(z,B,I){if(y.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(I.matrixWorld),T.extractRotation(n.matrixWorld),_.set(0,0,1),_.applyMatrix4(T),E.subVectors(y,v),E.dot(_)>0)return;E.reflect(_).negate(),E.add(y),T.extractRotation(I.matrixWorld),w.set(0,0,-1),w.applyMatrix4(T),w.add(v),M.subVectors(y,w),M.reflect(_).negate(),M.add(y),D.position.copy(E),D.up.set(0,1,0),D.up.applyMatrix4(T),D.up.reflect(_),D.lookAt(M),D.far=I.far,D.updateMatrixWorld(),D.projectionMatrix.copy(I.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(D.projectionMatrix),C.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(_,y),p.applyMatrix4(D.matrixWorldInverse),A.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const O=D.projectionMatrix;S.x=(Math.sign(A.x)+O.elements[8])/O.elements[0],S.y=(Math.sign(A.y)+O.elements[9])/O.elements[5],S.z=-1,S.w=(1+O.elements[10])/O.elements[14],A.multiplyScalar(2/A.dot(S)),O.elements[2]=A.x,O.elements[6]=A.y,O.elements[10]=A.z+1-a,O.elements[14]=A.w,f.setFromMatrixPosition(I.matrixWorld);const j=z.getRenderTarget(),J=z.xr.enabled,ne=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget(N),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(B,D),n.visible=!0,z.xr.enabled=J,z.shadowMap.autoUpdate=ne,z.setRenderTarget(j);const ye=I.viewport;ye!==void 0&&z.state.viewport(ye)}}}class wa extends Ge{constructor(){super(wa.Geometry,new gn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new b,t=new b,n=new qu(16,16),i=new qu(16,16);let o=Oi;const a=wa.Geometry,r=new Dr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new Dr({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new Ge(a,r),h=[],u=Mh.Shader,d=new Dr({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new te(16777215)},scale:{value:new Ue},screenPosition:{value:new b}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Dn,transparent:!0,depthWrite:!1}),f=new Ge(a,d);this.addElement=function(_){h.push(_)};const g=new Ue,x=new Ue,m=new Q_,p=new Qt;this.onBeforeRender=function(_,y,v){_.getCurrentViewport(p);const T=_.getRenderTarget(),w=T!==null?T.texture.type:Oi;o!==w&&(n.dispose(),i.dispose(),n.type=i.type=w,o=w);const A=p.w/p.z,E=p.z/2,M=p.w/2;let S=16/p.w;if(g.set(S*A,S),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(v.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(v.projectionMatrix),x.x=p.x+e.x*E+E-8,x.y=p.y+e.y*M+M-8,m.containsPoint(x))){_.copyFramebufferToTexture(n,x);let C=r.uniforms;C.scale.value=g,C.screenPosition.value=e,_.renderBufferDirect(v,null,a,r,c,null),_.copyFramebufferToTexture(i,x),C=l.uniforms,C.scale.value=g,C.screenPosition.value=e,_.renderBufferDirect(v,null,a,l,c,null);const D=-e.x*2,N=-e.y*2;for(let R=0,U=h.length;R<U;R++){const z=h[R],B=d.uniforms;B.color.value.copy(z.color),B.map.value=z.texture,B.screenPosition.value.x=e.x+D*z.distance,B.screenPosition.value.y=e.y+N*z.distance,S=z.size/p.w;const I=p.w/p.z;B.scale.value.set(S*I,S),d.uniformsNeedUpdate=!0,_.renderBufferDirect(v,null,a,d,f,null)}}},this.dispose=function(){r.dispose(),l.dispose(),d.dispose(),n.dispose(),i.dispose();for(let _=0,y=h.length;_<y;_++)h[_].texture.dispose()}}}class Mh{constructor(e,t=1,n=0,i=new te(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}Mh.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};wa.Geometry=(function(){const s=new Tt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new dh(e,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new Ks(t,3,0,!1)),s.setAttribute("uv",new Ks(t,2,3,!1)),s})();function _i(s,e,t=0){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function rs(s,e,t,n=0){const i=s*t,o=e*t,a=Math.floor(i),r=Math.floor(o),l=i-a,c=o-r,h=l*l*(3-2*l),u=c*c*(3-2*c),d=(a%t+t)%t,f=(d+1)%t,g=(r%t+t)%t,x=(g+1)%t,m=_i(d,g,n),p=_i(f,g,n),_=_i(d,x,n),y=_i(f,x,n);return m+(p-m)*h+(_+(y-_)*h-(m+(p-m)*h))*u}function Cs(s,e,t=8,n=4,i=0){let o=0,a=.5,r=t,l=0;for(let c=0;c<n;c++)o+=a*rs(s,e,r,i+c*31),l+=a,a*=.5,r*=2;return o/Math.max(1e-5,l)}function Qr(s,e,t=8,n=4,i=100){let o=0,a=.5,r=t,l=0;for(let c=0;c<n;c++){const h=1-Math.abs(rs(s,e,r,i+c*37)*2-1);o+=a*(h*h),l+=a,a*=.5,r*=2}return o/Math.max(1e-5,l)}function Es(s,e){if(typeof document>"u")return null;const t=document.createElement("canvas");return t.width=s,t.height=e,t}function Ir(s,e=!0,t=4){return s.colorSpace=e?$t:Gi,s.wrapS=Wn,s.wrapT=Wn,s.repeat.set(t,t),s.anisotropy=8,s.needsUpdate=!0,s}const An=new Map;function Ra(s,e,t){const n=Es(s,s),i=Es(s,s),o=Es(s,s);if(!n||!i||!o)return{map:null,roughnessMap:null,bumpMap:null};const a=n.getContext("2d"),r=i.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(s,s),h=r.createImageData(s,s),u=l.createImageData(s,s),d=c.data,f=h.data,g=u.data,x={r:128,g:128,b:128,rough:.85,bump:.5};for(let m=0;m<s;m++){const p=(m+.5)/s;for(let _=0;_<s;_++){const y=(_+.5)/s;t(y,p,_,m,x);const v=(m*s+_)*4;d[v]=Math.min(255,Math.max(0,x.r|0)),d[v+1]=Math.min(255,Math.max(0,x.g|0)),d[v+2]=Math.min(255,Math.max(0,x.b|0)),d[v+3]=255;const T=Math.min(255,Math.max(0,Math.round(x.rough*255)));f[v]=T,f[v+1]=T,f[v+2]=T,f[v+3]=255;const w=Math.min(255,Math.max(0,Math.round(x.bump*255)));g[v]=w,g[v+1]=w,g[v+2]=w,g[v+3]=255}}return a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0),{map:Ir(new xn(n),!0,e),roughnessMap:Ir(new xn(i),!1,e),bumpMap:Ir(new xn(o),!1,e)}}function KM(){if(An.has("asphalt"))return An.get("asphalt");const s=Ra(512,6,(e,t,n,i,o)=>{const a=rs(e,t,128,3),r=Cs(e,t,8,4,17),l=1-Math.pow(Qr(e,t,6,3,73),3),c=Math.max(0,Math.min(1,(r-.56)*4.2)),h=Math.abs(e-.5)<.014&&Math.floor(t*16)%2===0,u=Math.abs(e-.09)<.011||Math.abs(e-.91)<.011,d=h||u?.62*(.5+.5*a):0;let f=26+a*18+r*16-l*14;f*=1-c*.24,o.r=f+d*145,o.g=f+d*122,o.b=f*1.08+d*70,o.rough=.88-c*.63-a*.04,o.bump=Math.max(0,Math.min(1,.5+(a-.5)*.42-l*.35-c*.15))});return An.set("asphalt",s),s}function Df(){if(An.has("concrete"))return An.get("concrete");const s=Ra(512,2,(e,t,n,i,o)=>{const a=Cs(e,t,16,4,29),r=rs(e,t,96,11),l=i%32<2?1:0,c=n%64<2?.7:0,h=n%32>13&&n%32<17&&i%32>13&&i%32<17?1:0,u=rs(e,t*.25,24,53),d=Math.max(0,(u-.55)*1.8),f=110+(a-.5)*32+(r-.5)*16-l*38-c*26-h*36-d*28;o.r=f+d*14,o.g=f+d*4,o.b=f*1.03-d*6,o.rough=Math.max(.78,Math.min(.95,.88+(a-.5)*.12-d*.08+l*.05)),o.bump=Math.max(0,Math.min(1,.56+(r-.5)*.28+(a-.5)*.24-l*.38-h*.35))});return An.set("concrete",s),s}function Da(){if(An.has("rock"))return An.get("rock");const s=Ra(512,8,(e,t,n,i,o)=>{const a=Cs(e*.7+Cs(e,t,4,2,9)*.18,t*2.2,6,4,41),r=Qr(e,t,6,4,91),l=rs(e,t,96,19),c=165+(a-.5)*58-Math.pow(r,2.2)*52+(l-.5)*26;o.r=c,o.g=c*.98,o.b=c*.96,o.rough=Math.max(.7,Math.min(.96,.86+(l-.5)*.14-r*.1)),o.bump=Math.max(0,Math.min(1,.5+(a-.5)*.45-r*.32+(l-.5)*.22))});return An.set("rock",s),s}function Jr(){if(An.has("terrain"))return An.get("terrain");const s=Ra(512,64,(e,t,n,i,o)=>{const a=Cs(e,t,8,4,61),r=rs(e,t,96,23),l=Qr(e,t,10,3,131),c=205+(a-.5)*44+(r-.5)*28-l*18;o.r=c,o.g=c,o.b=c,o.rough=Math.max(.62,Math.min(.96,.86+(a-.5)*.16-l*.14)),o.bump=Math.max(0,Math.min(1,.52+(a-.5)*.36+(r-.5)*.34-l*.2))});return An.set("terrain",s),s}function yh(){if(An.has("bark"))return An.get("bark");const s=Ra(512,2,(e,t,n,i,o)=>{const a=Cs(e*2,t*.65,6,3,211)*.12,r=Qr((e*1.4+a+1)%1,t*.35%1,12,3,223),l=rs(e,t,64,241),c=175+(l-.5)*38-Math.pow(r,1.8)*58;o.r=c*1.02,o.g=c*.94,o.b=c*.84,o.rough=Math.max(.78,Math.min(.97,.88+r*.08+(l-.5)*.06)),o.bump=Math.max(0,Math.min(1,.55-r*.44+(l-.5)*.24))});return s.map&&(s.map.repeat.set(2,4),s.roughnessMap.repeat.set(2,4),s.bumpMap.repeat.set(2,4)),An.set("bark",s),s}function mr(s,e=!0){return s.colorSpace=e?$t:Gi,s.wrapS=Li,s.wrapT=Li,s.anisotropy=8,s.needsUpdate=!0,s}function Xl(s,e){const t=Es(s,s),n=Es(s,s),i=Es(s,s),o=Es(s,s);if(!t||!n||!i||!o)return{map:null,alphaMap:null,roughnessMap:null,emissiveMap:null};const a=t.getContext("2d"),r=n.getContext("2d"),l=i.getContext("2d"),c=o.getContext("2d"),h=a.createImageData(s,s),u=r.createImageData(s,s),d=l.createImageData(s,s),f=c.createImageData(s,s),g=h.data,x=u.data,m=d.data,p=f.data,_={r:170,g:205,b:165,a:0,rough:.68,emR:0,emG:0,emB:0};for(let y=0;y<s;y++){const v=1-(y+.5)/s;for(let T=0;T<s;T++){const w=(T+.5)/s;e(w,v,_);const A=(y*s+T)*4,E=Math.min(255,Math.max(0,Math.round(_.a*255)));g[A]=Math.min(255,Math.max(0,Math.round(_.r))),g[A+1]=Math.min(255,Math.max(0,Math.round(_.g))),g[A+2]=Math.min(255,Math.max(0,Math.round(_.b))),g[A+3]=E,x[A]=E,x[A+1]=E,x[A+2]=E,x[A+3]=255;const M=Math.min(255,Math.max(0,Math.round(_.rough*255)));m[A]=M,m[A+1]=M,m[A+2]=M,m[A+3]=255;const S=_.a>=.45?1:0;p[A]=Math.min(255,Math.max(0,Math.round(_.emR*S))),p[A+1]=Math.min(255,Math.max(0,Math.round(_.emG*S))),p[A+2]=Math.min(255,Math.max(0,Math.round(_.emB*S))),p[A+3]=255}}return a.putImageData(h,0,0),r.putImageData(u,0,0),l.putImageData(d,0,0),c.putImageData(f,0,0),{map:mr(new xn(t),!0),alphaMap:mr(new xn(n),!1),roughnessMap:mr(new xn(i),!1),emissiveMap:mr(new xn(o),!0)}}function ZM(s,e,t,n,i,o){const a=i-t,r=o-n,l=s-t,c=e-n,h=a*a+r*r+1e-8,u=Math.min(1,Math.max(0,(l*a+c*r)/h));return Math.hypot(s-(t+a*u),e-(n+r*u))}function If(){if(An.has("foliage"))return An.get("foliage");const s=Xl(512,(r,l,c)=>{const h=.5+.022*Math.sin(l*Math.PI),u=r-h,d=Math.abs(u),f=.015*(1-l*.72),g=l>=.015&&l<=.96&&d<=f,x=(l-.08)/.89,m=x>0&&x<1?.44*Math.pow(Math.sin(Math.pow(x,.78)*Math.PI),.72):0,p=.94+.06*rs(r,l,24,307),_=m*p;let y=!1,v=.78,T=0;if(x>0&&x<1&&d<=_&&d>=f*.65){const w=d/Math.max(.02,_),E=(l-d*(.46+.24*(1-l)))*27+(u>=0?0:.35),M=E-Math.floor(E),S=Math.abs(M-.5)*2,C=.07*Math.sin(d*140),D=Math.max(.08,.78*(1-Math.pow(w,1.45))+C);if(S<=D){y=!0;const N=Math.exp(-Math.pow(S/.16,2)),R=Math.floor(E)+(u>=0?11:37);v=(.82+.18*_i(R,5,19))*(.72+.22*w+.16*N),T=Math.max(0,(w-.65)/.35)+N*.45}}if(g){const w=1-d/Math.max(.001,f);c.r=165+w*35,c.g=192+w*30,c.b=128+w*25,c.a=1,c.rough=.58,c.emR=140*w,c.emG=235*w,c.emB=210*w}else if(y){c.r=178*v,c.g=224*v,c.b=164*v,c.a=1,c.rough=.66-Math.min(.14,T*.1);const w=Math.min(1,T*.85);c.emR=100*w,c.emG=245*w,c.emB=225*w}else c.r=135,c.g=175,c.b=120,c.a=0,c.rough=.72,c.emR=0,c.emG=0,c.emB=0}),e=[[.5,.02,.5,.55],[.5,.28,.28,.54],[.5,.34,.72,.58],[.5,.52,.36,.82],[.5,.55,.65,.84]],t=28,n=[];for(let r=0;r<t;r++){const l=r/t,c=.14+.24*Math.sin(l*Math.PI*.92+.25),h=r*2.39996+(_i(r,3,71)-.5)*.42,u=.5+Math.cos(h)*c*1.15,d=.24+l*.64+(_i(r,9,43)-.5)*.07,f=Math.atan2(d-.26,u-.5)+(_i(r,11,17)-.5)*.55,g=.13+_i(r,7,5)*.075,x=g*(.44+_i(r,13,29)*.16),m=.64+.36*l+(_i(r,4,83)-.5)*.1;n.push({cx:u,cy:d,cosA:Math.cos(f),sinA:Math.sin(f),invLen:1/g,invWid:1/x,maxR:g*1.12,shade:m})}const i=Xl(512,(r,l,c)=>{let h=!1,u=.72,d=0,f=0;for(let x=0;x<t;x++){const m=n[x];if(Math.abs(r-m.cx)>m.maxR||Math.abs(l-m.cy)>m.maxR)continue;const p=r-m.cx,_=l-m.cy,y=(p*m.cosA+_*m.sinA)*m.invLen;if(y<-1||y>1)continue;const v=(-p*m.sinA+_*m.cosA)*m.invWid,T=(1-y*y)*(1-.28*Math.max(0,y))+.055*Math.sin(y*22),w=Math.abs(v)/Math.max(.02,T);if(w<=1){h=!0;const A=Math.exp(-Math.pow(Math.abs(v)/.12,2))*(1-Math.max(0,y)*.45),E=Math.max(0,Math.sin((y*4.5-Math.abs(v)*3.8)*Math.PI))*(1-w)*.45;d=Math.max(A,E),f=Math.pow(w,3.2)*.85+Math.max(0,y)*.35,u=m.shade*(.86+.18*(1-w)+.12*A)}}let g=!1;for(let x=0;x<e.length;x++){const m=e[x],p=ZM(r,l,m[0],m[1],m[2],m[3]),_=x===0?.015*(1-l*.5):.008;if(p<=_){g=!0;break}}if(h){c.r=182*u,c.g=228*u,c.b=176*u,c.a=1,c.rough=.68-d*.14;const x=Math.min(1,d*.88+f*.58);c.emR=135*x,c.emG=248*x,c.emB=228*x}else g?(c.r=112,c.g=94,c.b=68,c.a=1,c.rough=.88,c.emR=25,c.emG=60,c.emB=55):(c.r=140,c.g=180,c.b=130,c.a=0,c.rough=.72,c.emR=0,c.emG=0,c.emB=0)}),o=Xl(512,(r,l,c)=>{const h=.5+.018*Math.sin(l*4.2),u=r-h,d=Math.abs(u),f=.014*(1-l*.78),g=l>=.015&&l<=.96&&d<=f,x=(l-.06)/.9,m=x>0&&x<1?.45*Math.pow(Math.sin(Math.pow(x,.7)*Math.PI),.85):0;let p=!1,_=.8,y=0;if(x>0&&x<1&&d<=m&&d>=f*.55){const v=d/Math.max(.02,m),w=(l-d*(.3+.14*l))*23+(u>=0?0:.45),A=w-Math.floor(w),E=Math.abs(A-.5)*2,M=.14*Math.sin(d*110)*(1-v*.4),S=Math.max(.06,.82*(1-Math.pow(v,1.25))+M);if(E<=S){p=!0;const C=Math.exp(-Math.pow(E/.18,2)),D=Math.pow(E/Math.max(.05,S),2.4);_=(.84+.16*_i(Math.floor(w),8,53))*(.76+.18*C+.12*v),y=Math.min(1,C*.75+D*.65+v*.25)}}g?(c.r=160,c.g=205,c.b=142,c.a=1,c.rough=.6,c.emR=110,c.emG=230,c.emB=185):p?(c.r=176*_,c.g=230*_,c.b=165*_,c.a=1,c.rough=.64,c.emR=95*y,c.emG=248*y,c.emB=195*y):(c.r=132,c.g=178,c.b=122,c.a=0,c.rough=.72,c.emR=0,c.emG=0,c.emB=0)}),a={texPalmFrondAlpha:s,texCanopyBranchAlpha:i,texFernClusterAlpha:o,palm:s,canopy:i,fern:o};return An.set("foliage",a),a}const ql=new WeakMap;function Zc(s){if(!s)return new Wc({depthPacking:zc,alphaTest:.45,side:Dt});if(ql.has(s))return ql.get(s);const e=new Wc({depthPacking:zc,map:s,alphaTest:.45,side:Dt});return ql.set(s,e),e}function el(){if(An.has("waterNormals"))return An.get("waterNormals");const s=512,e=Es(s,s);if(!e)return null;const t=e.getContext("2d"),n=t.createImageData(s,s),i=n.data,o=(l,c)=>{const h=Cs(l,c,6,3,301),u=Cs(l*1.5+.3,c*1.5-.2,12,3,419)*.55,d=Math.sin((l*6+c*4)*Math.PI*2)*.08+Math.cos((l*10-c*8)*Math.PI*2)*.05;return h+u+d},a=1/s;for(let l=0;l<s;l++){const c=(l+.5)/s;for(let h=0;h<s;h++){const u=(h+.5)/s,d=(o((u+a)%1,c)-o((u-a+1)%1,c))*2.2,f=(o(u,(c+a)%1)-o(u,(c-a+1)%1))*2.2,g=Math.hypot(-d,-f,1),x=(l*s+h)*4;i[x]=Math.round((-d/g*.5+.5)*255),i[x+1]=Math.round((-f/g*.5+.5)*255),i[x+2]=Math.round((1/g*.5+.5)*255),i[x+3]=255}}t.putImageData(n,0,0);const r=Ir(new xn(e),!1,1);return An.set("waterNormals",r),r}let Yl=null;function $M(){if(Yl)return Yl;const s=new Uint8Array([205,205,205,255]),e=new Yr(s,1,1);return e.wrapS=Wn,e.wrapT=Wn,e.needsUpdate=!0,Yl=e,e}function bh(s,e={}){const t=e.mode||"pandora",n=new te(e.rockHex??(t==="badlands"?6043174:3883078)),i=new te(e.peakHex??(t==="badlands"?10251856:13819112)),o=new te(e.shoreHex??(t==="badlands"?1450540:2895908)),a=e.peakStart??4.8,r=e.peakEnd??9.5,l=e.shoreBand??.65,c=e.detailTex||Jr().map||$M(),h={uPlanetCenter:{value:new b},uPlanetWorldRadius:{value:e.worldRadius??1e3},uRockColor:{value:n},uPeakColor:{value:i},uShoreColor:{value:o},uDetailTex:{value:c}};s.userData.splatUniforms=h;const u=s.onBeforeCompile;return s.onBeforeCompile=(d,f)=>{u&&u(d,f),d.uniforms.uPlanetCenter=h.uPlanetCenter,d.uniforms.uPlanetWorldRadius=h.uPlanetWorldRadius,d.uniforms.uRockColor=h.uRockColor,d.uniforms.uPeakColor=h.uPeakColor,d.uniforms.uShoreColor=h.uShoreColor,d.uniforms.uDetailTex=h.uDetailTex,d.vertexShader=`varying vec3 vSplatWorldPos;
varying vec3 vSplatWorldNormal;
varying vec3 vSplatLocalPos;
varying vec3 vSplatLocalNormal;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vSplatLocalPos = transformed;
        vSplatLocalNormal = objectNormal;
        vSplatWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vSplatWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),d.fragmentShader=`uniform vec3 uPlanetCenter;
uniform float uPlanetWorldRadius;
uniform vec3 uRockColor;
uniform vec3 uPeakColor;
uniform vec3 uShoreColor;
uniform sampler2D uDetailTex;
varying vec3 vSplatWorldPos;
varying vec3 vSplatWorldNormal;
varying vec3 vSplatLocalPos;
varying vec3 vSplatLocalNormal;
`+d.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          vec3 _splatRad = vSplatWorldPos - uPlanetCenter;
          float _splatDist = max(0.001, length(_splatRad));
          vec3 _splatUp = _splatRad / _splatDist;
          float _splatAlt = _splatDist - uPlanetWorldRadius;
          float _splatSlope = 1.0 - abs(dot(normalize(vSplatWorldNormal), _splatUp));
          float _rockMask = smoothstep(0.32, 0.62, _splatSlope) * smoothstep(-0.2, 0.8, _splatAlt);
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
          vec3 _strataTex = uRockColor * (0.82 + 0.36 * _gMacro);
          diffuseColor.rgb = mix(diffuseColor.rgb, _strataTex, _rockMask * 0.78);
          diffuseColor.rgb = mix(diffuseColor.rgb, uPeakColor, _peakMask * 0.62);
          diffuseColor.rgb = mix(diffuseColor.rgb, uShoreColor, _shoreMask * 0.72);
          diffuseColor.rgb *= clamp(_detailMul, 0.72, 1.28);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
          roughnessFactor = mix(roughnessFactor, 0.22, _shoreRoughMask * 0.85);`)},s.customProgramCacheKey=()=>`terrainSplat_${t}_${a}_triplanar2`,h}const QM={name:"RadialMotionBlurShader",uniforms:{tDiffuse:{value:null},uBlurStrength:{value:0}},vertexShader:`
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
  `};function JM(){const s=new Vn(8.5,22,32,8,!0);s.rotateX(-Math.PI*.5);const e={uTime:{value:0},uOpacity:{value:0},uColor:{value:new te(13430527)}},t=new ln({uniforms:e,vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Dn,side:Dt}),n=new Ge(s,t);return n.name="Mach_Supersonic_Shockwave_Cone",n.position.set(0,-.35,-10.5),n.visible=!1,n.frustumCulled=!1,n.userData.skipSSAO=!0,{mesh:n,uniforms:e}}const ua=new b(0,1,0),Xe=.45;function ys(s,e,t){return Math.max(e,Math.min(t,s))}function ki(s,e,t){const n=ys((t-s)/(e-s),0,1);return n*n*(3-2*n)}function Qn(s,e){const t=Math.hypot(s,e);if(t<1e-6)return new b(0,1,0);const n=Math.sin(t)/t;return new b(s*n,Math.cos(t),-e*n).normalize()}function ey(s,e,t){const n=Math.hypot(s,t),i=Math.atan2(n,ys(e,-1,1)),o=n>1e-6?i/n:0;return{ax:s*o,ay:-t*o,theta:i}}const Io=[{id:"city_center",name:"City Center · Corpo Plaza",shortName:"Corpo Plaza",badge:"NÚCLEO CORPORATIVO",color:"#2eb8ff",accent:"#ffd068",mapAx:.02,mapAy:0,ax:.02*Xe,ay:0*Xe,capDir:Qn(.02*Xe,0),viewAlt:.145,viewBack:.165,description:"Centro neurálgico con Corpo Plaza, monolitos Neomilitaristas (Arasaka/Militech), torres Neokitsch y hologramas Koi en niebla azul clínica.",atmo:{fogDay:2247272,fogNight:464422,fogDusk:4725304,fogDensity:.0046,hemiSky:1985648,hemiGround:1055786,ambient:1058877,localLight:3721471,localBounce:15116344,bloomCap:.5}},{id:"watson",name:"Watson · Little China / Northside",shortName:"Watson",badge:"MEGAEDIFICIOS Y PUERTO",color:"#ff3450",accent:"#00e5ff",mapAx:-.05,mapAy:.34,ax:-.05*Xe,ay:.34*Xe,capDir:Qn(-.05*Xe,.34*Xe),viewAlt:.125,viewBack:.145,description:"Norte de Night City: megaedificios mate H10, bloques apilados en Little China/Kabuki con carteles bajos puntuales y muelles en Northside.",atmo:{fogDay:2897480,fogNight:1116950,fogDusk:5380140,fogDensity:.0054,hemiSky:2504781,hemiGround:2101270,ambient:1580072,localLight:16726872,localBounce:1758955,bloomCap:.5}},{id:"westbrook",name:"Westbrook · Japantown / North Oak",shortName:"Westbrook",badge:"OCIO Y COLINAS ALTAS",color:"#e058ff",accent:"#fff0d8",mapAx:.36,mapAy:.16,ax:.36*Xe,ay:.16*Xe,capDir:Qn(.36*Xe,.16*Xe),viewAlt:.135,viewBack:.155,description:"Este metropolitano en 3 niveles: neón selectivo en Japantown, terrazas blancas en Charter Hill y mansiones limpias en North Oak.",atmo:{fogDay:5533320,fogNight:726568,fogDusk:7025244,fogDensity:.0024,hemiSky:5008268,hemiGround:2629676,ambient:2372680,localLight:15235327,localBounce:16768936,bloomCap:.45}},{id:"heywood",name:"Heywood · The Glen / Vista del Rey",shortName:"Heywood",badge:"DISTRITO SUR · DORADO",color:"#ffb03b",accent:"#ffd884",mapAx:.02,mapAy:-.31,ax:.02*Xe,ay:-.31*Xe,capDir:Qn(.02*Xe,-.31*Xe),viewAlt:.125,viewBack:.145,description:"Sur de City Center frente a la bahía: torres escalonadas en The Glen/Wellsprings y tejados bajos cálidos en Vista del Rey.",atmo:{fogDay:5916200,fogNight:1708552,fogDusk:8011808,fogDensity:.004,hemiSky:6442544,hemiGround:2891020,ambient:2826258,localLight:16757575,localBounce:14253604,bloomCap:.46}},{id:"santo_domingo",name:"Santo Domingo · Arroyo / Rancho Coronado",shortName:"Santo Domingo",badge:"INDUSTRIA Y SUBURBIOS",color:"#ff7a2e",accent:"#9aa0a8",mapAx:.39,mapAy:-.37,ax:.39*Xe,ay:-.37*Xe,capDir:Qn(.39*Xe,-.37*Xe),viewAlt:.115,viewBack:.145,description:"Sureste industrial pesado: complejos fabriles, tuberías y refinerías en Arroyo junto al suburbio cuadriculado de Rancho Coronado sin neón.",atmo:{fogDay:6571052,fogNight:1904904,fogDusk:8537116,fogDensity:.0056,hemiSky:6439468,hemiGround:2627598,ambient:2891284,localLight:16745522,localBounce:7225894,bloomCap:.44}},{id:"pacifica",name:"Pacifica · Coastview / Dogtown",shortName:"Pacifica",badge:"ZONA EN RUINAS · OSCURA",color:"#7e8c9e",accent:"#ff5228",mapAx:-.23,mapAy:-.47,ax:-.23*Xe,ay:-.47*Xe,capDir:Qn(-.23*Xe,-.47*Xe),viewAlt:.115,viewBack:.145,description:"Suroeste costero en penumbra: esqueletos de hoteles sin fachada, noria oxidada, fogatas aisladas y la zona amurallada de Dogtown.",atmo:{fogDay:2634302,fogNight:197896,fogDusk:3678246,fogDensity:.0044,hemiSky:2239544,hemiGround:724498,ambient:988188,localLight:6057864,localBounce:12075548,bloomCap:.34}},{id:"badlands",name:"Las Badlands · Tierras Baldías",shortName:"Las Badlands",badge:"PERÍMETRO EXTERIOR",color:"#c96f3b",accent:"#e8c488",mapAx:.76,mapAy:.06,ax:.76*Xe,ay:.06*Xe,capDir:Qn(.76*Xe,.06*Xe),viewAlt:.125,viewBack:.155,description:"Cinturón exterior sin neón: campos petrolíferos al norte, parques eólicos e invernaderos Biotechnica al este y desierto nómada al sur.",atmo:{fogDay:9068090,fogNight:132104,fogDusk:10245164,fogDensity:.0014,hemiSky:9069636,hemiGround:3809298,ambient:3416596,localLight:14458980,localBounce:9062434,bloomCap:.3}}],gr=Object.fromEntries(Io.map(s=>[s.id,s]));function Lf(s,e){if(typeof document>"u")return null;const t=document.createElement("canvas");return t.width=s,t.height=e,t}function ty(s,e){const t=Lf(64,64);if(!t)return null;const n=t.getContext?.("2d");if(!n)return null;const i=n.createRadialGradient(32,32,1,32,32,32);i.addColorStop(0,s),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const o=new xn(t);return o.needsUpdate=!0,o}function ny(){const e=a=>{const r=Lf(512,512);if(!r)return null;const l=r.getContext?.("2d");if(!l)return null;a(l,512);const c=new xn(r);return c.colorSpace=$t,c.wrapS=Wn,c.wrapT=Wn,c},t=e((a,r)=>{a.fillStyle="#6c7075",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=32){for(let c=0;c<r;c+=64){const h=Math.floor((H(c,l,7)-.5)*18);a.fillStyle=`rgb(${102+h}, ${105+h}, ${110+h})`,a.fillRect(c+1,l+1,62,30)}a.fillStyle="#383b40",a.fillRect(0,l,r,2),a.fillStyle="#2d3034";for(let c=16;c<r;c+=32)a.fillRect(c,l+14,3,3)}for(let l=0;l<55;l++){const c=Math.floor(H(l,11,3)*r),h=Math.floor(H(l,19,5)*(r-96)),u=28+Math.floor(H(l,23,9)*84);a.fillStyle=l%3===0?"rgba(92, 52, 30, 0.28)":"rgba(34, 38, 42, 0.34)",a.fillRect(c,h,2+l%4,u)}for(let l=8;l<r;l+=32)for(let c=8;c<r;c+=20)H(c,l,31)>.22&&(a.fillStyle="#1b232d",a.fillRect(c,l,10,14),a.fillStyle="rgba(130, 165, 195, 0.14)",a.fillRect(c+1,l+1,8,5))}),n=e((a,r)=>{a.fillStyle="#8b5d47",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=32){for(let c=0;c<r;c+=32){const h=Math.floor((H(c,l,17)-.5)*26);a.fillStyle=`rgb(${144+h}, ${95+Math.floor(h*.7)}, ${74+Math.floor(h*.5)})`,a.fillRect(c+1,l+1,30,30),H(c,l,59)>.18&&(a.fillStyle="#181e26",a.fillRect(c+6,l+7,20,16),a.fillStyle="rgba(110, 140, 168, 0.15)",a.fillRect(c+7,l+8,18,6))}a.fillStyle="#40342f",a.fillRect(0,l,r,3)}}),i=e((a,r)=>{a.fillStyle="#484d54",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=8)a.fillStyle=l%16===0?"#5c636b":"#353a40",a.fillRect(l,0,4,r);for(let l=0;l<r;l+=64)a.fillStyle="#25282c",a.fillRect(0,l,r,3);for(let l=0;l<36;l++){const c=Math.floor(H(l,4,13)*(r-40)),h=Math.floor(H(l,8,21)*(r-40));a.fillStyle=l%2===0?"rgba(122, 62, 32, 0.35)":"#23282e",a.fillRect(c,h,28,18)}}),o=e((a,r)=>{const l=a.createLinearGradient(0,0,r,r);l.addColorStop(0,"#101d2b"),l.addColorStop(.5,"#193146"),l.addColorStop(1,"#0e1924"),a.fillStyle=l,a.fillRect(0,0,r,r);for(let c=0;c<r;c+=16)a.fillStyle=c%48===0?"#4e6378":"#213142",a.fillRect(c,0,c%48===0?3:1,r);for(let c=0;c<r;c+=24)a.fillStyle="#091119",a.fillRect(0,c,r,2)});return{texBrutalistConcrete:t,texTerracottaPanels:n,texCorrugatedMetal:i,texCorporateGlass:o}}function oi(s,e=null){const t=new nt,n=new li,i=new ct,o=new b,a=new b,r=[];for(const c of s){const h=c.geo,u=h.index?h.toNonIndexed():h.clone();u.attributes.uv1&&u.deleteAttribute("uv1"),u.attributes.color&&u.deleteAttribute("color"),o.set(c.pos?.[0]||0,c.pos?.[1]||0,c.pos?.[2]||0),n.set(c.rot?.[0]||0,c.rot?.[1]||0,c.rot?.[2]||0),i.setFromEuler(n),a.set(c.scale?.[0]??1,c.scale?.[1]??1,c.scale?.[2]??1),t.compose(o,i,a),u.applyMatrix4(t),r.push(u)}const l=Ct(r,!1);for(const c of r)c.dispose();return e?l.boundingSphere=e:l.computeBoundingSphere(),l}function iy(s){const e=new pn(1,1,1),t=new tn(.5,.56,1,8),n=new tn(.36,.48,1,12),i=new tn(.38,.65,1,10),o=new tn(.5,.5,1,12),a=oi([{geo:e,pos:[0,.11,0],scale:[1.04,.22,1.04]},{geo:e,pos:[-.26,.56,0],scale:[.36,.72,.86]},{geo:e,pos:[.26,.56,0],scale:[.36,.72,.86]},{geo:e,pos:[0,.52,0],scale:[.38,.64,.52]},{geo:e,pos:[-.48,.44,-.34],scale:[.1,.78,.14]},{geo:e,pos:[.48,.44,-.34],scale:[.1,.78,.14]},{geo:e,pos:[-.48,.44,.34],scale:[.1,.78,.14]},{geo:e,pos:[.48,.44,.34],scale:[.1,.78,.14]},{geo:e,pos:[0,.42,0],scale:[1.08,.04,.96]},{geo:e,pos:[0,.72,0],scale:[1.02,.04,.92]},{geo:e,pos:[0,.96,-.14],scale:[.46,.1,.42]},{geo:e,pos:[-.24,.94,.22],scale:[.2,.07,.22]}],s),r=oi([{geo:e,pos:[0,.18,0],scale:[.78,.36,.78]},{geo:e,pos:[-.22,.46,.08],scale:[.72,.26,.58]},{geo:e,pos:[.22,.64,-.06],scale:[.68,.28,.6]},{geo:e,pos:[-.12,.84,.02],scale:[.58,.22,.54]},{geo:e,pos:[.14,.98,.12],scale:[.18,.08,.18]},{geo:o,pos:[-.22,1.09,-.1],scale:[.03,.28,.03]},{geo:o,pos:[.06,1.07,-.18],scale:[.025,.22,.025]}],s),l=oi([{geo:e,pos:[-.28,.24,0],scale:[.46,.48,.68]},{geo:e,pos:[.28,.19,.06],scale:[.44,.38,.62]},{geo:e,pos:[-.28,.5,0],rot:[0,0,.24],scale:[.52,.06,.74]},{geo:e,pos:[.28,.4,.06],rot:[.18,0,-.2],scale:[.5,.05,.68]},{geo:e,pos:[.08,.58,0],scale:[1.18,.07,.22]},{geo:o,pos:[-.15,.34,.42],rot:[0,0,Math.PI*.5],scale:[.06,.96,.06]}],s),c=oi([{geo:e,pos:[-.14,.2,0],scale:[.74,.4,1.12]},{geo:e,pos:[-.14,.43,-.22],rot:[.25,0,0],scale:[.7,.08,.36]},{geo:e,pos:[-.14,.43,.22],rot:[.25,0,0],scale:[.7,.08,.36]},{geo:o,pos:[.38,.26,-.32],scale:[.34,.52,.34]},{geo:e,pos:[.34,.44,.3],scale:[.1,.88,.1]},{geo:e,pos:[.34,.9,.02],rot:[-.36,0,0],scale:[.09,.08,.96]}],s),h=oi([{geo:t,pos:[0,.29,0],rot:[0,Math.PI/8,0],scale:[.92,.58,.92]},{geo:t,pos:[0,.69,0],rot:[0,Math.PI/8,0],scale:[.72,.26,.72]},{geo:e,pos:[-.42,.38,0],scale:[.16,.76,.34]},{geo:e,pos:[.42,.38,0],scale:[.16,.76,.34]},{geo:o,pos:[0,.86,0],scale:[.58,.06,.58]},{geo:o,pos:[0,.95,0],scale:[.14,.14,.14]}],s),u=oi([{geo:n,pos:[0,.44,0],scale:[.82,.88,.66]},{geo:n,pos:[0,.56,0],scale:[.96,.08,.8]},{geo:e,pos:[-.14,.96,0],scale:[.1,.24,.24]},{geo:o,pos:[.12,1.02,0],scale:[.06,.34,.06]}],s),d=oi([{geo:e,pos:[0,.16,0],scale:[.96,.32,.92]},{geo:e,pos:[-.08,.45,-.05],scale:[.76,.28,.74]},{geo:e,pos:[-.14,.7,-.1],scale:[.56,.24,.56]},{geo:e,pos:[.18,.34,.24],scale:[.34,.05,.28]},{geo:e,pos:[-.14,.86,-.1],scale:[.46,.06,.46]}],s),f=oi([{geo:e,pos:[0,.12,0],scale:[1.38,.24,.88]},{geo:e,pos:[-.22,.42,-.1],scale:[.94,.36,.52]},{geo:e,pos:[.28,.36,.18],scale:[.58,.24,.46]},{geo:o,pos:[.48,.26,-.26],scale:[.46,.06,.46]}],s),g=oi([{geo:e,pos:[-.16,.18,0],scale:[.92,.36,.72]},{geo:i,pos:[.36,.34,-.24],scale:[.48,.68,.48]},{geo:o,pos:[.36,.48,.24],scale:[.14,.96,.14]},{geo:o,pos:[.08,.45,.32],scale:[.12,.9,.12]},{geo:o,pos:[.12,.38,0],rot:[0,0,Math.PI*.5],scale:[.07,.64,.07]}],s),x=oi([{geo:e,pos:[-.08,.3,0],scale:[.84,.6,.72]},{geo:e,pos:[.36,.24,.14],scale:[.38,.48,.48]},{geo:e,pos:[-.08,.64,.18],rot:[.12,0,0],scale:[.92,.08,.94]},{geo:e,pos:[-.24,.74,-.14],scale:[.22,.12,.22]}],s),m=oi([{geo:e,pos:[-.42,.5,-.38],scale:[.11,1,.11]},{geo:e,pos:[.42,.5,-.38],scale:[.11,1,.11]},{geo:e,pos:[-.42,.5,.38],scale:[.11,1,.11]},{geo:e,pos:[.42,.5,.38],scale:[.11,1,.11]},{geo:e,pos:[0,.18,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.4,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.62,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.84,0],scale:[.86,.06,.78]},{geo:e,pos:[.12,.96,0],scale:[.32,.18,.28]}],s),p=oi([{geo:e,pos:[0,.5,0],scale:[1,.14,1]},{geo:e,pos:[-.42,0,0],scale:[.14,1.4,.14]},{geo:e,pos:[.42,0,0],scale:[.14,1.4,.14]}],s),_=oi([{geo:e,pos:[0,.22,.51],scale:[.16,.04,.02]},{geo:e,pos:[.18,.48,-.51],scale:[.14,.035,.02]},{geo:e,pos:[-.51,.66,.12],scale:[.02,.035,.14]}],s),y=oi([{geo:n,pos:[0,0,0],rot:[Math.PI*.5,0,0],scale:[.42,1.65,.34]},{geo:e,pos:[0,-.22,0],scale:[.16,.14,.76]},{geo:e,pos:[0,.16,-.68],scale:[.04,.3,.28]},{geo:e,pos:[0,0,-.68],scale:[.48,.04,.26]}],s);return e.dispose(),t.dispose(),n.dispose(),i.dispose(),o.dispose(),{geoH10Megablock:a,geoStackedContainers:r,geoShantySkybridge:l,geoPortCraneDepot:c,geoCorpoNeoMilTower:h,geoCorpoNeoKitschTower:u,geoCharterTerraceTower:d,geoNorthOakMansion:f,geoArroyoFactory:g,geoRanchoHouse:x,geoPacificaSkeleton:m,geoBayBridge:p,geoMicroWindow:_,geoBlimpHull:y}}function sy(s,e=0){let t=-.24;return s>.26?t=-.34-ki(.28,.72,s)*.24:s>-.2?t=-.235+Math.exp(-Math.pow(s/.14,2))*.085:t=-.23-ki(-.26,-.58,s)*.26,t+e*.035}function Co(s,e,t){const n=ey(s,e,t),i=n.ax/Xe,o=n.ay/Xe,a=n.theta/Xe,r=1/Xe,l=ti(s*5.2*r+2.1,e*5.2*r,t*5.2*r,3)*.045,c=ti(s*5.2*r-3.7,e*5.2*r+1.4,t*5.2*r,3)*.045,h=i+l*.45,u=o+c*.45,d=Math.hypot(h,u),f=Yt(s*14*r+1.2,e*14*r,t*14*r),g=sy(o,f),x=i-g,m=i<.04?Math.exp(-Math.pow((o-.195)/.022,2))*ki(.05,-.14,i):0,p=i<.05?Math.exp(-Math.pow((o+.195)/.022,2))*ki(.06,-.14,i):0,_=Math.max(m,p)>.48,y=x<0||_,v=Math.min(x,_?-.02:1),T=ki(-.025,.025,v),w=Math.hypot(h*.92,u*.95),A=.565+f*.032;let E="city_center",M="corpo_plaza";y?(E=o<-.35&&i>-.58?"pacifica":i>-.3&&o>.18?"watson":"city_center",M="ocean_bay"):w>=A||a>=.62?(E="badlands",o>.34?M="oilfields":o>-.32&&i>.25?M="eastern_plains":M="southern_desert"):d<.215&&i>=g?(E="city_center",M=d<.11?"corpo_plaza":"downtown"):o>=.19&&i<.22+(o-.19)*.22?(E="watson",o>.39||i<g+.11?M="northside_port":i>.03?M="kabuki":M="little_china"):i>=.16&&o>-.23?(E="westbrook",i<.34&&o>-.06&&o<.26?M="japantown":o<=.06?M="charter_hill":M="north_oak"):o<=-.37&&i<.12?(E="pacifica",M=i>-.06&&o>-.51?"dogtown":"coastview"):o<=-.19&&i<.22?(E="heywood",M=i<-.02?"wellsprings":o>-.33?"the_glen":"vista_del_rey"):(E="santo_domingo",M=o>-.36?"arroyo":"rancho_coronado");let S=0;if(y)S=(-.0022-.0045*ki(0,-.12,v))*.25;else{const N=Math.hypot((i-.42)/.17,(o-.28)/.16),R=Math.max(0,1-N*N),U=ki(0,.85,R),z=ki(.55,.65,a),B=1-ki(.99,1.08,a),I=z*B,O=1-Math.abs(Yt(s*14*r+3.1,e*14*r,t*14*r-2.7)),j=ti(s*7.5*r-4.2,e*7.5*r+1.1,t*7.5*r+5.8,4),ne=(-.0014+.014*(Math.max(0,j+.15)*(.45+.85*Math.pow(O,2.2))))*I;S=(U*.0155+ne)*.34}const C={};let D=0;for(const N of Io){const R=N.mapAx??N.ax/Xe,U=N.mapAy??N.ay/Xe,z=(i-R)*(i-R)+(o-U)*(o-U),B=N.id==="badlands"?.18:.055;let I=Math.exp(-z/B);N.id===E&&(I+=1.45),N.id==="badlands"&&a>.6&&!y&&(I+=1.65),C[N.id]=I,D+=I}for(const N of Io)C[N.id]/=Math.max(1e-5,D);return{ax:n.ax,ay:n.ay,theta:n.theta,mapAx:i,mapAy:o,mapTheta:a,isOcean:y,isBayChannel:_,coastBlend:T,coastSignedDist:v,district:E,subzone:M,elevationRatio:S,weights:C}}function oy(s,e,t,n,i,o,a){s.position.copy(e).multiplyScalar(t),s.quaternion.setFromUnitVectors(ua,e),n!==0&&s.rotateY(n),s.scale.set(i,o,a),s.updateMatrix()}function ay(s){const e=s.localRadius,t=1.42,n=new Lt;n.name="NightCity_7Districts_Arch_Group";const i=new jt,o=new b,a=new te,r=new ci(new b(0,0,0),e*1.28),{texBrutalistConcrete:l,texTerracottaPanels:c,texCorrugatedMetal:h,texCorporateGlass:u}=ny(),d=iy(r),f=58,g=112,x=(f+1)*(g+1),m=new Float32Array(x*3),p=new Float32Array(x*3),_=[];for(let W=0;W<=f;W++){const pe=W/f*(1.08*Xe),q=Math.sin(pe),we=Math.cos(pe);for(let oe=0;oe<=g;oe++){const Ee=oe/g*Math.PI*2,ue=q*Math.cos(Ee),ie=we,Ze=q*Math.sin(Ee),Ke=Co(ue,ie,Ze),Vt=ki(1.04,1.08,Ke.mapTheta)*-4e-4,hn=Ke.isOcean?14e-5:24e-5+Math.max(-1e-4,Ke.elevationRatio),et=e*(1+hn+Vt),Tn=W*(g+1)+oe;m[Tn*3]=ue*et,m[Tn*3+1]=ie*et,m[Tn*3+2]=Ze*et;const Ht=Yt(ue*24+2,ie*24,Ze*24)*.5+.5;let Et=.055,Kn=.062,si=.075;if(Ke.isOcean)Et=.014,Kn=.036+Ht*.015,si=.064+Ht*.024;else if(Ke.district==="badlands")if(Ke.subzone==="oilfields")Et=.07+Ht*.04,Kn=.065+Ht*.03,si=.06+Ht*.025;else{const Yi=ys(Ke.elevationRatio/.004,0,1);Et=.24+Ht*.13+Yi*.1,Kn=.12+Ht*.055+Yi*.04,si=.075+Ht*.03}else Ke.district==="westbrook"&&Ke.subzone==="north_oak"?(Et=.095+Ht*.045,Kn=.155+Ht*.075,si=.085+Ht*.035):Ke.district==="pacifica"?(Et=.062+Ht*.032,Kn=.062+Ht*.032,si=.068+Ht*.032):Ke.district==="santo_domingo"?(Et=.095+Ht*.04,Kn=.075+Ht*.035,si=.062+Ht*.025):Ke.district==="heywood"?(Et=.082+Ht*.03,Kn=.076+Ht*.025,si=.065+Ht*.02):(Et=.044+Ht*.022,Kn=.05+Ht*.024,si=.064+Ht*.028);p[Tn*3]=Et,p[Tn*3+1]=Kn,p[Tn*3+2]=si}}for(let W=0;W<f;W++)for(let pe=0;pe<g;pe++){const q=W*(g+1)+pe,we=q+(g+1);_.push(q,we,q+1,q+1,we,we+1)}const y=new Tt;y.setAttribute("position",new bt(m,3)),y.setAttribute("color",new bt(p,3));const v=new Float32Array(x*2);for(let W=0;W<=f;W++)for(let pe=0;pe<=g;pe++){const q=W*(g+1)+pe;v[q*2]=pe/g*6,v[q*2+1]=W/f*4}y.setAttribute("uv",new bt(v,2)),y.setIndex(_),y.computeVertexNormals(),y.boundingSphere=r;const T=Jr(),w=KM(),A=Df(),E=Da(),M=new ke({vertexColors:!0,roughnessMap:T.roughnessMap,bumpMap:T.bumpMap,bumpScale:.045,roughness:.92,metalness:.05}),S=bh(M,{mode:"badlands",worldRadius:e*157.5,peakStart:3,peakEnd:8.5,shoreBand:.55}),C=new Ge(y,M);C.name="NC_7Districts_Coastal_Terrain",C.userData.splatUniforms=S,C.frustumCulled=!1,C.castShadow=!1,C.receiveShadow=!1,n.add(C);const D=(W,pe=.88,q=.14,we=A)=>{const oe=new ke({color:16777215,map:W,roughnessMap:we?.roughnessMap||null,bumpMap:we?.bumpMap||null,bumpScale:.032,emissive:new te(0),emissiveMap:null,emissiveIntensity:0,roughness:pe,metalness:q});return oe.userData.outsideCityCenterMatte=!0,oe},N=D(c,.88,.12),R=D(l,.9,.14),U=D(h,.84,.28),z=D(h,.85,.32),B=D(l,.86,.12),I=D(l,.82,.15),O=D(h,.9,.24),j=D(c,.92,.06),J=D(l,.94,.08),ne=D(null,.82,.35),ye=D(null,.94,.04,E),Q=new ke({color:16777215,map:l,roughnessMap:A.roughnessMap,bumpMap:A.bumpMap,bumpScale:.028,emissive:new te(0),emissiveIntensity:0,roughness:.62,metalness:.45}),de=new ke({color:16777215,map:u,roughnessMap:w.roughnessMap,bumpMap:A.bumpMap,bumpScale:.015,emissive:new te(4883112),emissiveIntensity:.18,roughness:.24,metalness:.82}),xe=new ke({color:13623518,emissive:new te(8959146),emissiveIntensity:.18,roughness:.42,metalness:.08}),$=new ke({color:16777215,emissive:new te(16769202),emissiveIntensity:.3,roughness:.9});$.userData.animatedEmissive=!0,$.userData.nightTier="microwindow";const ae=[],me=(W,pe,q={})=>{const we=new ke({color:new te(W),emissive:new te(W),emissiveIntensity:ys(pe,1.3,1.9),roughness:.25,metalness:.1,...q});return we.userData.baseEmissive=ys(pe,1.3,1.9),we.userData.nightTier="hero",we.userData.animatedEmissive=!0,ae.push(we),we},re=me("#ff223d",1.65),Me=me("#00e5ff",1.58),V=me("#ff2eb8",1.62),Re=me("#30b8ff",1.55,{transparent:!0,opacity:.48,depthWrite:!1}),k=me("#ff7a1f",1.78),it=me("#ff3b6c",1.52),ge={h10:[],stacked:[],shanty:[],port:[],corpoMil:[],corpoKitsch:[],terrace:[],northOak:[],arroyo:[],rancho:[],pacifica:[],bridges:[],rocks:[],pumpBases:[],greenhouses:[],turbMasts:[],nomads:[],microWin:[],watsonNeonRed:[],watsonNeonCyan:[],japantownNeon:[],corpoBeams:[],arroyoFlares:[]},Ne=[],Be=[],rt=[],Ve=[],F=[],L=[],ee=[],ve=[],le=(W,pe,q,we,oe,Ee,ue,ie)=>{oy(i,pe,q,we,oe,Ee,ue),W.push({matrix:i.matrix.clone(),color:ie.clone()})};let ce=1;const Ie=(W,pe,q=1)=>{const we=[];for(let oe=0;oe<pe*6&&we.length<pe;oe++){ce++;const Ee=(H(ce,3,17)*2-1)*.72*Xe*q,ue=(H(ce,7,31)*2-1)*.72*Xe*q,ie=Qn(Ee,ue),Ze=Co(ie.x,ie.y,ie.z);W(Ze)&&we.push({dir:ie,s:Ze,i:we.length})}return we},Se=(W,pe,q=.08)=>{a.setHex(W[pe%W.length]);const we=(H(pe,19,37)-.5)*q;return a.offsetHSL(we*.15,we*.25,we),a},ze=Ie(W=>!W.isOcean&&W.district==="city_center"&&Math.hypot(W.mapAx,W.mapAy)>.078,130,.34);for(const{dir:W,i:pe}of ze){const q=t*(.072+.056*Math.pow(H(pe,13,29),1.15)),we=t*(.009+.009*H(pe,5,19));pe%2===0?le(ge.corpoMil,W,e*1.00015,H(pe,2,5)*Math.PI*.5,we*1.1,q,we*1.1,Se([3554631,4541524,2764856],pe)):le(ge.corpoKitsch,W,e*1.00015,H(pe,4,7)*Math.PI,we*.95,q*1.06,we*.95,Se([5930654,9270866,3892096],pe)),pe%7===0&&ge.corpoBeams.length<18&&le(ge.corpoBeams,W,e*1.0002+q*.45,0,t*.0018,q*.65,t*.0018,a.setHex(pe%14===0?16762460:3328255))}const xt=Ie(W=>!W.isOcean&&W.district==="watson"&&(W.subzone==="little_china"||W.subzone==="kabuki"),410,.85);for(const{dir:W,s:pe,i:q}of xt){const we=H(q,1,7)*Math.PI;if(q%5===0){const oe=t*(.011+.006*H(q,3,13)),Ee=t*(.042+.026*H(q,9,3));le(ge.h10,W,e*1.00015,we,oe,Ee,oe,Se([9198406,7040885,10058834,7561816],q)),q%65===0&&le(ge.microWin,W,e*1.00015,we,oe,Ee,oe,Se([16765844,11064560],q,.02))}else if(q%3===1||pe.subzone==="little_china"){const oe=t*(.008+.005*H(q,5,19)),Ee=t*(.028+.024*H(q,7,11));le(ge.stacked,W,e*1.00015,we,oe,Ee,oe,Se([8027522,9726548,6450032,8747106],q)),q%45===1&&le(ge.microWin,W,e*1.00015,we,oe,Ee,oe,Se([16763522,9880808],q,.02))}else{const oe=t*(.007+.005*H(q,4,9)),Ee=t*(.005+.0065*H(q,12,17));le(ge.shanty,W,e*1.00015,we,oe,Ee,oe,Se([7235939,6055019,8019018],q))}if(q%19===0&&ge.watsonNeonRed.length+ge.watsonNeonCyan.length<21){const oe=W.clone().add(new b(.001,0,-7e-4)).normalize(),Ee=q%38===0?ge.watsonNeonRed:ge.watsonNeonCyan;le(Ee,oe,e*1.0002+t*.005,we,t*.0011,t*(.009+.005*H(q,2,11)),t*.0026,a.setHex(16777215))}}const Ae=Ie(W=>!W.isOcean&&W.district==="watson"&&W.subzone==="northside_port",145,.92);for(const{dir:W,i:pe}of Ae){const q=t*(.014+.014*H(pe,4,21)),we=t*(.012+.014*H(pe,8,13));le(ge.port,W,e*1.00015,H(pe,6,9)*Math.PI*.5,q,we,q,Se([5922920,7229250,4541266],pe))}const Fe=Ie(W=>!W.isOcean&&W.district==="westbrook"&&W.subzone==="japantown",185,.72);for(const{dir:W,s:pe,i:q}of Fe){const we=e*(1.00015+pe.elevationRatio),oe=t*(.008+.006*H(q,5,31)),Ee=t*(.022+.028*Math.pow(H(q,12,7),1.2)),ue=H(q,3,21)*Math.PI;le(ge.stacked,W,we,ue,oe,Ee,oe,Se([6711928,8217970,5396582],q)),q%7===0&&ge.japantownNeon.length<28&&le(ge.japantownNeon,W,we+Ee*.25,ue,t*.0014,Ee*.42,t*.0034,a.setHex(16777215))}const st=Ie(W=>!W.isOcean&&W.district==="westbrook"&&W.subzone==="charter_hill",155,.85);for(const{dir:W,s:pe,i:q}of st){const we=e*(1.00015+pe.elevationRatio),oe=t*(.01+.007*H(q,2,11)),Ee=t*(.018+.022*H(q,13,5));le(ge.terrace,W,we,H(q,4,2)*Math.PI*.5,oe,Ee,oe,Se([13817564,12502476,14672614],q,.04))}const ht=Ie(W=>!W.isOcean&&W.district==="westbrook"&&W.subzone==="north_oak",48,.95);for(const{dir:W,s:pe,i:q}of ht){const we=e*(1.00015+pe.elevationRatio),oe=t*(.012+.005*H(q,3,9)),Ee=t*(.005+.003*H(q,7,13));le(ge.northOak,W,we,H(q,8,17)*Math.PI,oe,Ee,oe,Se([15130838,13946823,15591647],q,.03));const ue=we+Ee*1.15;L.push(W.x*ue,W.y*ue,W.z*ue)}const qe=Ie(W=>!W.isOcean&&W.district==="heywood",265,.85);for(const{dir:W,s:pe,i:q}of qe){const we=H(q,4,33)*Math.PI*.5;if(pe.subzone==="vista_del_rey"){const oe=t*(.008+.005*H(q,3,27)),Ee=t*(.0055+.0065*H(q,11,7));le(ge.shanty,W,e*1.00015,we,oe,Ee,oe,Se([9401436,8217938,10256998],q))}else{const oe=t*(.009+.006*H(q,8,19)),Ee=t*(.018+.022*Math.pow(H(q,14,9),1.2));q%3===0?le(ge.h10,W,e*1.00015,we,oe,Ee,oe,Se([10255196,8549992,10717544],q)):le(ge.terrace,W,e*1.00015,we,oe,Ee,oe,Se([12100748,10392196,12890262],q)),q%16===0&&le(ge.microWin,W,e*1.00015,we,oe,Ee,oe,Se([16763776,16769200],q,.02))}if(q%6===0){const oe=e*1.0002+t*.0026;rt.push(W.x*oe,W.y*oe,W.z*oe)}}const pt=Ie(W=>!W.isOcean&&W.district==="santo_domingo"&&W.subzone==="arroyo",130,.95);for(const{dir:W,i:pe}of pt){const q=t*(.015+.012*H(pe,2,11)),we=t*(.016+.018*H(pe,7,19));if(le(ge.arroyo,W,e*1.00015,H(pe,4,15)*Math.PI*.5,q,we,q,Se([6708824,5396060,7562069],pe)),pe%7===0&&ge.arroyoFlares.length<18){const oe=e*1.0002+we*.96;le(ge.arroyoFlares,W,oe,0,t*.003,t*.0048,t*.003,a.setHex(16777215)),Ve.push(W.x*oe,W.y*oe,W.z*oe)}if(pe%6===0&&ee.length<36){const oe=e*1.0003+we*1.12;ee.push({dir:W.clone(),alt:oe,phase:pe*.5}),ve.push(W.x*oe,W.y*oe,W.z*oe)}}for(let W=0;W<20;W++)for(let pe=0;pe<20;pe++){const q=(.25+W*.017)*Xe,we=(-.34-pe*.017)*Xe,oe=Qn(q,we),Ee=Co(oe.x,oe.y,oe.z);if(!Ee.isOcean&&Ee.district==="santo_domingo"&&Ee.subzone==="rancho_coronado"){const ue=t*.0068,ie=t*(.0042+.0018*H(W,pe,4));if(le(ge.rancho,oe,e*1.0002,.08,ue,ie,ue,Se([9205862,8219741,10060910],W*20+pe)),(W*20+pe)%34===0&&le(ge.microWin,oe,e*1.0002,.08,ue,ie,ue,a.setHex(16760434)),(W+pe)%5===0){const Ze=e*1.0002+t*.0026;rt.push(oe.x*Ze,oe.y*Ze,oe.z*Ze)}}}const ut=Ie(W=>!W.isOcean&&W.district==="pacifica",165,.95);for(const{dir:W,s:pe,i:q}of ut){const we=t*(.011+.008*H(q,2,19)),oe=pe.subzone==="dogtown"?t*(.01+.014*H(q,9,13)):t*(.016+.022*Math.pow(H(q,6,29),1.3));if(le(ge.pacifica,W,e*1.00015,H(q,1,8)*.5,we,oe,we,Se([5001044,6051922,3882562],q)),q%14===0&&F.length<30){const Ee=e*1.0002+t*.0014;F.push(W.x*Ee,W.y*Ee,W.z*Ee)}}const vt=Qn(-.33*Xe,-.48*Xe),K=new Ge(new Kr(t*.019,t*.0014,6,20),J);K.name="NC_Pacifica_Abandoned_FerrisWheel",K.position.copy(vt).multiplyScalar(e+t*.021),K.quaternion.setFromUnitVectors(ua,vt),K.rotateY(.4),K.castShadow=!1,K.receiveShadow=!1,n.add(K);const Pe=[{a:[-.08*Xe,.14*Xe],b:[-.2*Xe,.25*Xe]},{a:[-.14*Xe,.01*Xe],b:[-.42*Xe,-.02*Xe]},{a:[-.09*Xe,-.15*Xe],b:[-.21*Xe,-.34*Xe]}];for(const W of Pe){const q=Qn(W.a[0],W.a[1]),we=Qn(W.b[0],W.b[1]),oe=Math.atan2(we.x-q.x,we.z-q.z);for(let Ee=0;Ee<=12;Ee++){const ue=Ee/12,ie=q.clone().lerp(we,ue).normalize(),Ze=t*.008+Math.sin(ue*Math.PI)*t*.005;le(ge.bridges,ie,e-t*.002+Ze,oe,t*.007,t*.014,t*.022,a.setHex(4870232))}}const fe=Ie(W=>!W.isOcean&&W.district==="badlands"&&W.mapTheta<1.05,420,1.48);for(const{dir:W,s:pe,i:q}of fe){const we=e*1.0002+pe.elevationRatio*e;if(pe.subzone==="oilfields")if(q%7===0&&Be.length<32)le(ge.pumpBases,W,we-t*5e-4,0,t*.004,t*.0085,t*.004,a.setHex(3817028)),Be.push({pos:W.clone().multiplyScalar(we+t*.008),quat:new ct().setFromUnitVectors(ua,W),scale:new b(t*.0022,t*.0022,t*.015),phase:q*.65});else{const oe=t*(.007+.014*H(q,3,5));le(ge.rocks,W,we,H(q,2,9)*3.1,oe,oe*.6,oe,Se([3880242,5063484],q))}else if(pe.subzone==="eastern_plains")if(q%10===0&&Ne.length<34){const oe=t*(.024+.01*H(q,5,11));le(ge.turbMasts,W,we-t*5e-4,0,t*.0022,oe,t*.0022,a.setHex(12765390));const Ee=new ct().setFromUnitVectors(ua,W),ue=new ct().setFromAxisAngle(ua,H(q,12,5)*Math.PI*2);Ne.push({hubPos:W.clone().multiplyScalar(we+oe),orientQuat:Ee.multiply(ue),bladeLen:oe*.56,omega:1+H(q,8,19)*.85,phase:H(q,15,2)*Math.PI*2})}else if(q%8===0&&ge.greenhouses.length<44)le(ge.greenhouses,W,we-t*4e-4,.3,t*.011,t*.0035,t*.032,a.setHex(14215910));else{const oe=t*(.009+.018*Math.pow(H(q,7,13),1.5));le(ge.rocks,W,we,H(q,5,17)*3.1,oe,oe*.7,oe*.85,Se([7027496,8210482],q))}else if(q%16===0&&ge.nomads.length<36){le(ge.nomads,W,we,H(q,4,21)*Math.PI,t*.007,t*.0038,t*.0085,a.setHex(7235164));const oe=we+t*.0025;F.push(W.x*oe,W.y*oe,W.z*oe)}else{const oe=t*(.008+.018*Math.pow(H(q,3,29),1.6));le(ge.rocks,W,we,H(q,7,19)*3.1,oe,oe*.65,oe*.8,Se([7552553,6042145],q))}}const _e=new pn(1,1,1);_e.translate(0,.5,0),_e.boundingSphere=r;const Oe=new tn(.45,.55,1,8);Oe.translate(0,.5,0),Oe.boundingSphere=r;const He=new Ts(1,0);He.boundingSphere=r;const Ye=(W,pe,q,we)=>{if(!W.length)return null;const oe=new yt(pe,q,W.length);oe.name=we,oe.frustumCulled=!1,oe.castShadow=!1,oe.receiveShadow=!1;for(let Ee=0;Ee<W.length;Ee++)oe.setMatrixAt(Ee,W[Ee].matrix),oe.setColorAt(Ee,W[Ee].color);return oe.instanceMatrix.needsUpdate=!0,oe.instanceColor&&(oe.instanceColor.needsUpdate=!0),n.add(oe),oe};Ye(ge.h10,d.geoH10Megablock,N,"NC_Arch1_H10_Megablocks"),Ye(ge.stacked,d.geoStackedContainers,R,"NC_Arch2_Stacked_Containers"),Ye(ge.shanty,d.geoShantySkybridge,U,"NC_Arch3_Slum_SheetRoofs"),Ye(ge.port,d.geoPortCraneDepot,z,"NC_Arch4_Northside_PortDepots"),Ye(ge.corpoMil,d.geoCorpoNeoMilTower,Q,"NC_Arch5_CityCenter_NeoMil"),Ye(ge.corpoKitsch,d.geoCorpoNeoKitschTower,de,"NC_Arch6_CityCenter_NeoKitsch"),Ye(ge.terrace,d.geoCharterTerraceTower,B,"NC_Arch7_Charter_Heywood_Terraces"),Ye(ge.northOak,d.geoNorthOakMansion,I,"NC_Arch8_NorthOak_Mansions"),Ye(ge.arroyo,d.geoArroyoFactory,O,"NC_Arch9_Arroyo_Factories"),Ye(ge.rancho,d.geoRanchoHouse,j,"NC_Arch10_Rancho_Houses"),Ye(ge.pacifica,d.geoPacificaSkeleton,J,"NC_Arch11_Pacifica_Skeletons"),Ye(ge.bridges,d.geoBayBridge,R,"NC_Bay_Connecting_Bridges"),Ye(ge.rocks,He,ye,"NC_Badlands_Rocks"),Ye(ge.pumpBases,Oe,U,"NC_Badlands_Oil_Pump_Bases"),Ye(ge.turbMasts,Oe,ne,"NC_Badlands_WindTurbine_Masts"),Ye(ge.greenhouses,_e,xe,"NC_Badlands_Biotechnica_Greenhouses"),Ye(ge.nomads,_e,j,"NC_Badlands_Nomad_Outposts"),Ye(ge.microWin,d.geoMicroWindow,$,"NC_Isolated_MicroWindows"),Ye(ge.watsonNeonRed,_e,re,"NC_Watson_VerticalNeon_Red"),Ye(ge.watsonNeonCyan,_e,Me,"NC_Watson_VerticalNeon_Cyan"),Ye(ge.japantownNeon,_e,V,"NC_Westbrook_Japantown_Neon"),Ye(ge.corpoBeams,Oe,Re,"NC_CityCenter_LightBeams"),Ye(ge.arroyoFlares,Oe,k,"NC_SantoDomingo_Refinery_Flares");const Nt=new pn(.11,1,.03);Nt.translate(0,.5,0),Nt.boundingSphere=r;const Ft=Ne.length?new yt(Nt,ne,Ne.length*3):null;Ft&&(Ft.name="NC_Badlands_WindTurbine_Blades",Ft.frustumCulled=!1,Ft.castShadow=!1,Ft.receiveShadow=!1,n.add(Ft));const mt=Be.length?new yt(_e,O,Be.length):null;mt&&(mt.name="NC_Badlands_Oil_Pumpjacks",mt.frustumCulled=!1,mt.castShadow=!1,mt.receiveShadow=!1,n.add(mt));const dn=new pn(.46,.16,.85);dn.boundingSphere=r;const mn=new yt(d.geoBlimpHull,U,3);mn.name="AV_Blimp_Hulls",mn.frustumCulled=!1,mn.castShadow=!1,mn.receiveShadow=!1;const vn=new yt(dn,it,3);vn.name="AV_Blimp_Screens",vn.frustumCulled=!1,vn.castShadow=!1,vn.receiveShadow=!1,n.add(mn,vn);const ot=[{ax0:-.1*Xe,ay0:.21*Xe,rx:.14*Xe,ry:.06*Xe,alt:e+t*.068,omega:.085,phase:0,scale:t*.022},{ax0:.06*Xe,ay0:.18*Xe,rx:.12*Xe,ry:.07*Xe,alt:e+t*.08,omega:-.072,phase:2.1,scale:t*.025},{ax0:-.03*Xe,ay0:.25*Xe,rx:.16*Xe,ry:.05*Xe,alt:e+t*.062,omega:.064,phase:4.2,scale:t*.02}],Ot=[{start:[.58*Xe,-.15*Xe],end:[.92*Xe,-.45*Xe]},{start:[.35*Xe,-.6*Xe],end:[.55*Xe,-.96*Xe]}],Sn=28,Ln=t*.004,Pt=[],_n=new b,cn=new b,fn=new b;for(let W=0;W<Ot.length;W++){const pe=Ot[W],q=new Float32Array((Sn+1)*2*3),we=new Float32Array((Sn+1)*2*2),oe=[];for(let ue=0;ue<=Sn;ue++){const ie=ue/Sn,Ze=X.lerp(pe.start[0],pe.end[0],ie)+Math.sin(ie*3.2+W)*.025*Xe,Ke=X.lerp(pe.start[1],pe.end[1],ie);o.copy(Qn(Ze,Ke));const Vt=Co(o.x,o.y,o.z),hn=e*1.0002+Vt.elevationRatio*e+t*8e-4;fn.copy(o).multiplyScalar(hn),_n.set(.3,0,-1).cross(o).normalize(),cn.crossVectors(o,_n).normalize();const et=ue*2;q[et*3]=fn.x-cn.x*Ln,q[et*3+1]=fn.y-cn.y*Ln,q[et*3+2]=fn.z-cn.z*Ln,q[(et+1)*3]=fn.x+cn.x*Ln,q[(et+1)*3+1]=fn.y+cn.y*Ln,q[(et+1)*3+2]=fn.z+cn.z*Ln,we[et*2]=0,we[et*2+1]=ie*8,we[(et+1)*2]=1,we[(et+1)*2+1]=ie*8,ue<Sn&&oe.push(et,et+2,et+1,et+1,et+2,et+3)}const Ee=new Tt;Ee.setAttribute("position",new bt(q,3)),Ee.setAttribute("uv",new bt(we,2)),Ee.setIndex(oe),Ee.computeVertexNormals(),Pt.push({geo:Ee.toNonIndexed()}),Ee.dispose()}const Jt=Ct(Pt.map(W=>W.geo),!1);Pt.forEach(W=>W.geo.dispose()),Jt.boundingSphere=r;const nn=new Ge(Jt,new ke({color:16777215,map:w.map,roughnessMap:w.roughnessMap,bumpMap:w.bumpMap,bumpScale:.04,roughness:1,metalness:.08,side:Dt}));nn.name="NC_Badlands_Desert_Roads",nn.frustumCulled=!1,nn.castShadow=!1,nn.receiveShadow=!1,n.add(nn);const Bt=Qn(-.27*Xe,.01*Xe),Ut=new $s(e*.16*Xe,40),Zt=new $r(Ut,{textureWidth:256,textureHeight:256,waterNormals:el(),sunDirection:new b(.4,.6,.5).normalize(),sunColor:9224959,waterColor:466222,distortionScale:.35,size:4.5,clipBias:.002,alpha:.92,fog:!0});Zt.name="NC_CoronadoBay_Reflective_Water",Zt.position.copy(Bt).multiplyScalar(e*1.00025),Zt.quaternion.setFromUnitVectors(new b(0,0,1),Bt),Zt.visible=!1,Zt.castShadow=!1,Zt.receiveShadow=!1,n.add(Zt);const P=(W,pe,q,we,oe,Ee)=>{if(!W.length)return null;const ue=new Tt;ue.setAttribute("position",new Kt(W,3)),ue.boundingSphere=r;const ie=new Ei({map:ty("rgba(255,255,255,0.92)","rgba(255,210,160,0.32)"),color:pe,size:q,transparent:!0,opacity:we,depthWrite:!1,blending:oe?Dn:Ws,sizeAttenuation:!0}),Ze=new Ai(ue,ie);return Ze.name=Ee,Ze.frustumCulled=!1,n.add(Ze),{pts:Ze,mat:ie,geo:ue}},Y=P(rt.concat(L),16755272,1.3,.66,!0,"NC_Heywood_Rancho_Streetlamps"),se=P(F.concat(Ve),16739364,2.1,.84,!0,"NC_Pacifica_Arroyo_FlaresAndFires"),he=P(ve,2761760,14,.5,!1,"NC_Arroyo_Industrial_Smoke"),Z=new ct,Ce=new ct,De=new b,Qe=new nt,Je=new b,at=new b,ft=new b,G=new nt,Le=Math.PI*2/3,$e=new b(0,0,1),lt=new b(1,0,0);return{group:n,terrainSplatUniforms:S,bayWater:Zt,update(W,pe=1){if(!n.parent||!n.parent.visible)return;if(Zt.material?.uniforms?.time&&(Zt.material.uniforms.time.value=W*.48),Ft){for(let Ee=0;Ee<Ne.length;Ee++){const ue=Ne[Ee],ie=W*ue.omega+ue.phase;De.set(ue.bladeLen*.25,ue.bladeLen,ue.bladeLen*.25);for(let Ze=0;Ze<3;Ze++)Z.setFromAxisAngle($e,ie+Ze*Le),Ce.copy(ue.orientQuat).multiply(Z),Qe.compose(ue.hubPos,Ce,De),Ft.setMatrixAt(Ee*3+Ze,Qe)}Ft.instanceMatrix.needsUpdate=!0}if(mt){for(let Ee=0;Ee<Be.length;Ee++){const ue=Be[Ee];Z.setFromAxisAngle(lt,Math.sin(W*1.15+ue.phase)*.28),Ce.copy(ue.quat).multiply(Z),Qe.compose(ue.pos,Ce,ue.scale),mt.setMatrixAt(Ee,Qe)}mt.instanceMatrix.needsUpdate=!0}for(let Ee=0;Ee<ot.length;Ee++){const ue=ot[Ee],ie=W*ue.omega+ue.phase,Ze=ue.ax0+Math.cos(ie)*ue.rx,Ke=ue.ay0+Math.sin(ie)*ue.ry,Vt=-Math.sin(ie)*ue.rx*ue.omega,hn=Math.cos(ie)*ue.ry*ue.omega;o.copy(Qn(Ze,Ke)),Je.copy(o).multiplyScalar(ue.alt+Math.sin(W*.8+Ee)*t*.002),at.set(Vt,0,-hn),at.addScaledVector(o,-o.dot(at)),at.lengthSq()<1e-8&&at.set(1,0,0).addScaledVector(o,-o.x),at.normalize(),ft.crossVectors(o,at),ft.lengthSq()<1e-8&&ft.set(0,0,1),ft.normalize(),at.crossVectors(ft,o).normalize(),G.makeBasis(ft,o,at),G.setPosition(Je),De.setScalar(ue.scale),G.scale(De),mn.setMatrixAt(Ee,G),vn.setMatrixAt(Ee,G)}if(mn.instanceMatrix.needsUpdate=!0,vn.instanceMatrix.needsUpdate=!0,he&&ee.length>0){const Ee=he.geo.attributes.position;for(let ue=0;ue<ee.length;ue++){const ie=ee[ue],Ze=1+.002*Math.sin(W*.7+ie.phase);Ee.setXYZ(ue,ie.dir.x*ie.alt*Ze,ie.dir.y*ie.alt*Ze,ie.dir.z*ie.alt*Ze)}Ee.needsUpdate=!0}const q=.94+.06*Math.sin(W*2.2),we=ys(.88+(pe-1)*.14,.85,1.08);for(let Ee=0;Ee<ae.length;Ee++){const ue=ae[Ee];ue.emissiveIntensity=ys(ue.userData.baseEmissive*we*q,1.3,1.9)}const oe=ys(.42+(pe-.8)*.25,.35,.78);Y&&(Y.mat.opacity=oe),se&&(se.mat.opacity=.7+.18*Math.sin(W*8.2))}}}const $c={uSunViewPos:{value:new b}};function H(s,e,t){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Yt(s,e,t){const n=Math.floor(s),i=Math.floor(e),o=Math.floor(t),a=s-n,r=e-i,l=t-o,c=a*a*(3-2*a),h=r*r*(3-2*r),u=l*l*(3-2*l),d=H(n,i,o),f=H(n+1,i,o),g=H(n,i+1,o),x=H(n+1,i+1,o),m=H(n,i,o+1),p=H(n+1,i,o+1),_=H(n,i+1,o+1),y=H(n+1,i+1,o+1),v=d+(f-d)*c,T=g+(x-g)*c,w=m+(p-m)*c,A=_+(y-_)*c,E=v+(T-v)*h,M=w+(A-w)*h;return(E+(M-E)*u)*2-1}function ti(s,e,t,n=4){let i=0,o=.5,a=1;for(let r=0;r<n;r++)i+=o*Yt(s*a+r*17.31,e*a-r*9.7,t*a+r*3.3),a*=2.03,o*=.5;return i}function sn(s,e,t){const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)}function Xs(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function ry(s=[0,1,0]){return[s,[-s[0],-s[1],-s[2]],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(t=>{const n=new b(...t).normalize(),i=Math.abs(n.y)<.9?new b(0,1,0):new b(1,0,0),o=new b().crossVectors(n,i).normalize(),a=new b().crossVectors(n,o).normalize();return{h:n,e1:o,e2:a}})}const wt=[{id:"hometree",name:"Gran Árbol Madre (Hometree)",shortName:"Árbol-Casa",theta:.045,phi:-.55,landBoostRad:.24,elevMode:"valley",viewAlt:.092,viewBack:.11},{id:"hallelujah",name:"Montañas Aleluya",shortName:"Aleluya",theta:.38,phi:1.15,landBoostRad:.22,elevMode:"bay",viewAlt:.135,viewBack:.145},{id:"rookery",name:"Nido de Ikran (Ikran Rookery)",shortName:"Nido Ikran",theta:1.06,phi:3.65,landBoostRad:.25,elevMode:"canyon",viewAlt:.105,viewBack:.125},{id:"souls",name:"Árbol de las Almas (Tree of Souls)",shortName:"Árbol Almas",theta:1.54,phi:5.15,landBoostRad:.26,elevMode:"crater",viewAlt:.078,viewBack:.105},{id:"mushrooms",name:"Bosque de Setas Gigantes y Géiseres",shortName:"Setas / Géiseres",theta:2.28,phi:2.1,landBoostRad:.25,elevMode:"basin",viewAlt:.082,viewBack:.11},{id:"ashland",name:"Tierra de Ceniza (Pueblo Ash)",shortName:"Ceniza / Volcanes",theta:1.88,phi:.72,landBoostRad:.34,elevMode:"ash",viewAlt:.115,viewBack:.145},{id:"metkayina",name:"Arrecife Metkayina (Aldea y Abismo)",shortName:"Metkayina",theta:1.18,phi:2.15,landBoostRad:.32,elevMode:"reef",viewAlt:.068,viewBack:.098}].map(s=>{const e=Math.sin(s.theta);return{...s,capDir:new b(e*Math.cos(s.phi),Math.cos(s.theta),e*Math.sin(s.phi)).normalize()}}),ly=[{v:wt[0].capDir,bias:.25},{v:wt[1].capDir,bias:.22},{v:wt[2].capDir,bias:.24},{v:wt[3].capDir,bias:.26},{v:wt[4].capDir,bias:.29},{v:new b(.12,-.78,-.22).normalize(),bias:.23},{v:new b(-.05,-.94,.32).normalize(),bias:.24},{v:new b(.45,.62,-.64).normalize(),bias:.18}],cy=[{v:wt[6].capDir,bias:.39},{v:new b(-.82,.05,.57).normalize(),bias:.39},{v:new b(-.08,.18,.98).normalize(),bias:.32},{v:new b(-.82,-.34,-.45).normalize(),bias:.38},{v:new b(-.55,-.4,.1).normalize(),bias:.31},{v:new b(-.38,-.68,-.62).normalize(),bias:.3}],hy=[{v:wt[5].capDir,bias:.36},{v:new b(.93,-.15,.33).normalize(),bias:.3},{v:new b(.74,-.6,.28).normalize(),bias:.25},{v:new b(.55,-.18,.81).normalize(),bias:.28}];function tl(s=[0,1,0]){const e=new b(s[0],s[1],s[2]).normalize(),t=new ct().setFromUnitVectors(new b(0,1,0),e),n=wt.map(i=>({...i,sphereDir:i.capDir.clone().applyQuaternion(t).normalize()}));return n.nationSites={forest:ly.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),water:cy.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),ash:hy.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),metkayinaDir:n[6].sphereDir,ashDir:n[5].sphereDir,soulsDir:n[3].sphereDir,mushDir:n[4].sphereDir},n}const uy=tl([0,1,0]);function Sh(s,e,t,n,i=5){const o=n?.nationSites?n:uy,{forest:a,water:r,ash:l}=o.nationSites;let c=-9;for(let B=0;B<a.length;B++){const I=a[B],O=s*I.v.x+e*I.v.y+t*I.v.z+I.bias;O>c&&(c=O)}let h=-9;for(let B=0;B<r.length;B++){const I=r[B],O=s*I.v.x+e*I.v.y+t*I.v.z+I.bias;O>h&&(h=O)}let u=-9;for(let B=0;B<l.length;B++){const I=l[B],O=s*I.v.x+e*I.v.y+t*I.v.z+I.bias;O>u&&(u=O)}const d=ti(s*2.2+4.1,e*2.2-1.7,t*2.2+2.9,Math.min(3,i))*.052,f=Yt(s*6.8+1.3,e*6.8-2.1,t*6.8+3.4)*.016,g=Yt(s*3.1-2.2,e*3.1+1.9,t*3.1-.8)*.038,x=c+d+f,m=h-d*.85,p=u+g,_=Math.max(x,p),y=m-_,v=p-Math.max(x,m);let T="forest";v>0&&p>m?T="ash":y>0&&(T="water");const w=sn(-.035,.045,v),A=sn(-.035,.045,y)*(1-w),E=Math.max(0,1-w-A),M=Math.abs(p-x),S=Math.exp(-Math.pow(M/.068,2))*(1-sn(-.02,.08,y));let C=0,D=0;if(T==="water"){const B=sn(0,.14,y),I=o.nationSites.metkayinaDir,O=X.clamp(s*I.x+e*I.y+t*I.z,-1,1),j=Math.acos(O);if(C=-.02-B*.34,j<.145){const J=1-j/.145;C=X.lerp(-.085,-.155,J),D=.72+.28*J}else if(y>.045){const J=Math.exp(-Math.pow((j-.28)/.17,2)),ne=sn(.14,.34,y)*.48,ye=1-Math.abs(Yt(s*4.4+2.7,e*4.4-1.3,t*4.4+.8)),Q=ti(s*8.5+3.1,e*8.5-1.9,t*8.5+2.4,Math.min(3,i)),de=J*.48+ne*.22+Math.pow(Math.max(0,ye),3.6)*.52+Q*.26;if(de>.72)C=.012+Math.min(.085,(de-.72)*.48),D=.9;else if(de>.38){const xe=sn(.38,.72,de);C=X.lerp(-.14,-.008,xe),D=xe*.95}}}else if(T==="ash"){const B=sn(0,.11,v),I=ti(s*4.1-1.3,e*4.1+2.2,t*4.1-.9,Math.min(4,i))*.06;C=X.lerp(.06,.3,B)+Math.max(-.02,I)+S*.16}else{const B=Math.max(0,x-m),I=sn(0,.12,B),O=ti(s*3.6+1.2,e*3.6-.8,t*3.6-2.4,Math.min(4,i))*.075;C=X.lerp(.015,.28,I)+Math.max(0,O)+S*.16}let N=0;for(let B=0;B<5;B++){const I=o[B],O=I.sphereDir,j=Math.acos(X.clamp(s*O.x+e*O.y+t*O.z,-1,1));if(j<I.landBoostRad){const J=1-j/I.landBoostRad,ne=J*J*(3-2*J);if(I.elevMode==="bay"?C=Math.max(C,.14+ne*.18):C=Math.max(C,.16+ne*.24),(I.elevMode==="crater"||I.elevMode==="basin")&&j<.11){const ye=1-j/.11;N=Math.max(N,ye*ye*.0024)}}}const R=1-Math.abs(Yt(s*5.6+1.9,e*5.6-3.4,t*5.6+.7)),U=Math.max(0,C-.12)*Math.pow(Math.max(0,R),2.1)+S*.28,z=ti(s*8.2+4.1,e*8.2-2.3,t*8.2+.9,3);return{cont:C,ridge:R,highlandRidge:U,craterDepression:N,forestFactor:E,waterFactor:A,ashFactor:w,reefFactor:D,borderMountain:S,forestClump:z,nation:T}}function dy(s,e,t,n=[0,1,0]){const i=new b(n[0],n[1],n[2]).normalize(),o=i.x,a=i.y,r=i.z,l=s==="p1"?tl([o,a,r]):null;let c=null;if(s==="p2"){const M=new ct().setFromUnitVectors(new b(0,1,0),i).invert();c=new At().setFromMatrix4(new nt().makeRotationFromQuaternion(M)).elements}const h=Xs(e,t),u=Xs(e,t),d=Xs(e,t),f=h.getContext("2d").createImageData(e,t),g=u.getContext("2d").createImageData(e,t),x=d.getContext("2d").createImageData(e,t),m=f.data,p=g.data,_=x.data,y=new Float32Array(e),v=new Float32Array(e);for(let M=0;M<e;M++){const S=(M+.5)/e*Math.PI*2;y[M]=Math.cos(S),v[M]=Math.sin(S)}const T=s==="p4"?ry([o,a,r]):null;for(let M=0;M<t;M++){const S=(M+.5)/t*Math.PI,C=Math.sin(S),D=Math.cos(S);for(let N=0;N<e;N++){const R=-y[N]*C,U=v[N]*C,z=R*o+D*a+U*r,B=(M*e+N)*4;let I=0,O=0,j=0,J=0,ne=0,ye=0,Q=.5;if(s==="p4"){let xe=-2,$=-2,ae=0;for(let ce=0;ce<T.length;ce++){const Ie=T[ce].h,Se=R*Ie.x+D*Ie.y+U*Ie.z;Se>xe?($=xe,xe=Se,ae=ce):Se>$&&($=Se)}const me=T[ae],re=Math.acos(Math.min(1,xe)),Me=Math.atan2(R*me.e2.x+D*me.e2.y+U*me.e2.z,R*me.e1.x+D*me.e1.y+U*me.e1.z);let V=Math.abs(Math.cos(re*95));V*=V,V*=V,V*=V,V*=V;const Re=sn(.008,.02,re);let k=Math.abs(Math.cos(Me*12));k*=k,k*=k,k*=k,k*=k,k*=k;const it=k*sn(.02,.07,re)*(1-sn(.45,.9,re)),ge=1-sn(0,.014,xe-$),Ne=H(Math.floor(R*140),Math.floor(D*140),Math.floor(U*140)),Be=H(Math.floor(R*700)+3,Math.floor(D*700),Math.floor(U*700)),rt=Yt(R*6,D*6,U*6)*.5+.5,Ve=(Be>.6?1:0)*(.35+.65*Ne)*(.4+.6*rt),F=V*.85*Re+it*.8+ge*1.1+Ve*.45;let L,ee,ve;Ne<.33?(L=1,ee=.74,ve=.32):Ne<.66?(L=1,ee=.88,ve=.62):(L=1,ee=.52,ve=.18),J=F*L,ne=F*ee,ye=F*ve;const le=.11+.1*Ne+.05*rt+.06*V*Re;I=le*1.05,O=le,j=le*.95,Q=.4+.3*Ne+.2*V}else if(s==="p2"){const xe=c[0]*R+c[3]*D+c[6]*U,$=c[1]*R+c[4]*D+c[7]*U,ae=c[2]*R+c[5]*D+c[8]*U,me=H(Math.floor(xe*560),Math.floor($*560),Math.floor(ae*560)),re=H(Math.floor(xe*96)+7,Math.floor($*96),Math.floor(ae*96));if(z>.84){const Me=Co(xe,$,ae),V=Yt(xe*14+3,$*14,ae*14)*.5+.5,Re=1-sn(.41,.49,Me.theta);if(Me.isOcean){const k=sn(-.045,0,Me.coastSignedDist);I=.012+.018*k,O=.032+.045*k,j=.062+.055*k,J=0,ne=0,ye=0,Q=.25}else if(Me.district==="badlands")Me.subzone==="oilfields"?(I=.075+.04*V,O=.07+.035*V,j=.065+.03*V,J=0,ne=0,ye=0,Q=.44+.2*V):(I=(.24+.14*V)*Re+.19*(1-Re),O=(.115+.055*V)*Re+.1*(1-Re),j=(.068+.03*V)*Re+.06*(1-Re),Me.subzone==="eastern_plains"&&me>.965&&Math.abs(Math.sin(xe*42))>.85&&(J=.16,ne=.24,ye=.2),Q=.46+.28*V);else if(Me.district==="pacifica")I=.052+.03*re,O=.055+.03*re,j=.062+.03*re,me>.992&&(J=.35,ne=.12,ye=.04),Q=.44+.16*re;else if(Me.district==="santo_domingo"){if(Me.subzone==="arroyo"){I=.11+.04*V,O=.085+.03*V,j=.065+.02*V;const k=me>.92?.35+.35*re:0;J=k*.95,ne=k*.42,ye=k*.1}else{const k=Math.abs(Math.sin(Me.ax*190))>.86||Math.abs(Math.sin(Me.ay*190))>.86;I=.13+.04*V,O=.105+.035*V,j=.08,k&&me>.78&&(J=.42,ne=.21,ye=.06)}Q=.46+.15*re}else if(Me.district==="heywood"){if(I=.095+.035*re,O=.085+.03*re,j=.07,me>.74){const k=.38+.45*re;J=k*.96,ne=k*.62,ye=k*.18}Q=.52+.24*re}else if(Me.district==="westbrook")if(Me.subzone==="north_oak")I=.095+.04*V,O=.165+.06*V,j=.085+.03*V,me>.978&&(J=.48,ne=.36,ye=.18),Q=.62+.26*V;else if(Me.subzone==="charter_hill")I=.19+.05*re,O=.2+.05*re,j=.22+.05*re,me>.8&&(J=.35,ne=.38,ye=.44),Q=.54+.22*re;else{if(I=.075+.03*re,O=.07+.03*re,j=.095+.04*re,me>.65){const k=.45+.48*re;J=k*.88,ne=k*.24,ye=k*.72}Q=.58+.26*re}else if(Me.district==="watson")if(Me.subzone==="northside_port")I=.055+.025*re,O=.06+.025*re,j=.075+.03*re,me>.93&&(J=.16,ne=.34,ye=.42),Q=.44+.15*re;else{if(I=.065+.03*re,O=.065+.03*re,j=.082+.035*re,me>.6){const k=.48+.52*re;re>.62?(J=k*.95,ne=k*.14,ye=k*.22):re>.25?(J=k*.12,ne=k*.78,ye=k*.92):(J=k*.92,ne=k*.72,ye=k*.16)}Q=.58+.28*re}else{const k=1-sn(.06,.21,Math.hypot(Me.ax,Me.ay));if(I=.075+.04*re,O=.085+.04*re,j=.115+.05*re,me>.48){const it=(.48+.65*k)*(.45+.55*re);re>.72?(J=it*.92,ne=it*.76,ye=it*.38):re>.34?(J=it*.22,ne=it*.78,ye=it*1):(J=it*.78,ne=it*.88,ye=it*1)}Q=.65+.28*k}}else{let Me=ti(xe*2.1+4.3,$*2.1,ae*2.1,5);if(xe<-.25&&(Me-=(-.25-xe)*.45),Me>.04){const V=Yt(xe*9+1.5,$*9,ae*9)*.5+.5;I=.21+.12*V,O=.105+.05*V,j=.065+.03*V,Q=.46+.28*V}else{const V=sn(-.35,.04,Me);I=.012+.02*V,O=.032+.045*V,j=.068+.065*V,Q=.28}}}else if(s==="p3"){let xe=ti(R*1.8+11,D*1.8,U*1.8,5);z>.84&&(xe=Math.max(xe,.08+(z-.84)*.8));const $=1-Math.abs(Yt(R*7+3,D*7,U*7)),ae=Math.max(0,xe-.12)*$*$*3*(z>.9?.2:1),me=Yt(R*14,D*14,U*14);if(xe>0)Q=.45+xe*.6+ae*.6,D<-.9||D>.93?(I=.9,O=.93,j=.96):ae>.6?(I=.88,O=.9,j=.94):ae>.25?(I=.36,O=.31,j=.26):me>.3&&z<.9?(I=.07,O=.2,j=.07):(I=.15+.04*me,O=.34+.05*me,j=.11),H(Math.floor(R*300),Math.floor(D*300),Math.floor(U*300))>.996&&(J=.9,ne=.62,ye=.3);else{const re=sn(-.25,0,xe);I=.02+.03*re,O=.08+.12*re,j=.22+.13*re,(D<-.92||D>.94)&&(I=.88,O=.92,j=.96),Q=.3+xe*.3}}else{const{cont:xe,highlandRidge:$,forestFactor:ae,ashFactor:me,reefFactor:re,borderMountain:Me,nation:V}=Sh(R,D,U,l),Re=Yt(R*11,D*11,U*11),k=Yt(R*28+2.1,D*28,U*28-1.4)*.5+.5,it=ti(R*6.5-3.2,D*6.5+1.4,U*6.5,3)*.5+.5;if(V==="ash"&&xe>0){const ge=.125+.085*k+.03*Re,Ne=Math.min(1,$*2.2+Me*.55);I=X.lerp(ge*1.06,.24,Ne*.6),O=X.lerp(ge*.98,.22,Ne*.6),j=X.lerp(ge*1.04,.24,Ne*.6);const rt=Math.pow(Math.max(0,1-Math.abs(Yt(R*18+4.1,D*18,U*18-2.3))),16)*me*.72;I=Math.min(1,I+rt*.32),O=Math.min(1,O+rt*.07),J=rt*.78,ne=rt*.16,ye=rt*.02,Q=.58+me*.28+$*.42}else if(xe>0)if(V==="water"){const ge=sn(0,.032,xe);I=X.lerp(.84,.15+.04*k,ge),O=X.lerp(.79,.42+.08*it,ge),j=X.lerp(.61,.18+.03*k,ge),Q=.46+xe*1.2}else{const ge=sn(.28,.78,it);I=X.lerp(.088,.145,ge)+.035*k,O=X.lerp(.235,.355,ge)+.055*Re,j=X.lerp(.105,.148,ge)+.022*k;const Ne=sn(.55,.85,k)*(1-Math.min(1,$*3));I=X.lerp(I,.22,Ne*.42),O=X.lerp(O,.4,Ne*.38);const Be=Math.min(1,$*2.6+Me*.72);I=X.lerp(I,.28,Be*.65),O=X.lerp(O,.31,Be*.58),j=X.lerp(j,.29,Be*.62);const rt=sn(.22,.44,$);I=X.lerp(I,.68,rt*.52),O=X.lerp(O,.74,rt*.52),j=X.lerp(j,.72,rt*.52);const Ve=Math.pow(Math.max(0,1-Math.abs(Yt(R*13+1.2,D*13-.7,U*13+2.4))),22);if(Ve>.22&&$<.14){const ce=(Ve-.22)*1.1;I=X.lerp(I,.04,ce),O=X.lerp(O,.28,ce),j=X.lerp(j,.34,ce)}const F=H(Math.floor(R*260),Math.floor(D*260),Math.floor(U*260)),L=sn(.45,.85,it)*(F>.965?.36:0),ee=Ve>.3?(Ve-.3)*.28:0,ve=(L+ee)*ae*(1-Be*.85),le=k>.52;J=ve*(le?.22:.04),ne=ve*(le?.12:.34),ye=ve*.38,Q=.48+xe*.58+$*.45}else{const ge=sn(-.36,-.06,xe),Ne=X.lerp(.031,.055,ge),Be=X.lerp(.149,.263,ge),rt=X.lerp(.29,.459,ge),Ve=sn(-.085,0,xe),F=Math.min(1,Math.max(re*.92,Ve*.85)),L=sn(.45,.98,F),ee=X.lerp(.11,.22,L),ve=X.lerp(.639,.839,L),le=X.lerp(.62,.769,L);I=X.lerp(Ne,ee,F),O=X.lerp(Be,ve,F),j=X.lerp(rt,le,F);const ce=F*sn(.55,.95,k)*.26;J=ce*.04,ne=ce*.34,ye=ce*.38,Q=.28+F*.06}}m[B]=I*255,m[B+1]=O*255,m[B+2]=j*255,m[B+3]=255,p[B]=J*255,p[B+1]=ne*255,p[B+2]=ye*255,p[B+3]=255;const de=Q*255;_[B]=de,_[B+1]=de,_[B+2]=de,_[B+3]=255}}h.getContext("2d").putImageData(f,0,0),u.getContext("2d").putImageData(g,0,0),d.getContext("2d").putImageData(x,0,0);const w=new xn(h);w.colorSpace=$t,w.anisotropy=8;const A=new xn(u);A.colorSpace=$t,A.anisotropy=8;const E=new xn(d);return{map:w,emissiveMap:A,bumpMap:E}}function fy(s,e=1024,t=512,n=[0,1,0]){const i=new b(n[0],n[1],n[2]).normalize(),o=i.x,a=i.y,r=i.z,l=Xs(e,t),c=l.getContext("2d"),h=c.createImageData(e,t),u=h.data,d={p1:{lo:.04,hi:.34,col:[1,1,1],k:.92,cyclonic:!0},p2:{lo:-.04,hi:.32,col:[.34,.4,.48],k:.56},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[s]||{lo:.1,hi:.4,col:[1,1,1],k:.7},f=d.cyclonic?[{v:new b(-.45,.42,.78).normalize(),spin:2.35,radius:.55},{v:new b(.62,.54,-.57).normalize(),spin:-2.15,radius:.48},{v:new b(.18,-.46,.87).normalize(),spin:2.05,radius:.5},{v:new b(-.74,-.35,-.57).normalize(),spin:-2.25,radius:.52},{v:new b(.78,-.18,.6).normalize(),spin:1.85,radius:.44}]:null,g=new Float32Array(e),x=new Float32Array(e);for(let p=0;p<e;p++){const _=(p+.5)/e*Math.PI*2;g[p]=Math.cos(_),x[p]=Math.sin(_)}for(let p=0;p<t;p++){const _=(p+.5)/t*Math.PI,y=Math.sin(_),v=Math.cos(_);for(let T=0;T<e;T++){const w=-g[T]*y,A=x[T]*y,E=w*o+v*a+A*r;let M=0;if(d.cyclonic&&f){let C=w,D=v,N=A,R=0;for(let O=0;O<f.length;O++){const j=f[O],J=C*j.v.x+D*j.v.y+N*j.v.z;if(J>.62){const ne=Math.acos(Math.min(1,J)),ye=Math.exp(-Math.pow(ne/j.radius,2)*2.6),Q=j.spin*ye*(1-Math.min(1,ne/j.radius)*.4),de=Math.cos(Q),xe=Math.sin(Q),$=j.v.x,ae=j.v.y,me=j.v.z,re=ae*N-me*D,Me=me*C-$*N,V=$*D-ae*C,Re=J;C=C*de+re*xe+$*Re*(1-de),D=D*de+Me*xe+ae*Re*(1-de),N=N*de+V*xe+me*Re*(1-de),R+=ye*.24}}const U=Yt(C*2.2+1.5,D*4.5,N*2.2-.8)*.42,z=ti(C*3.1+14+U,D*5.6,N*3.1-U,5),B=Yt(C*9.5+3,D*12,N*9.5)*.08,I=z+R*.55+B;M=sn(d.lo,d.hi,I)*d.k}else{const C=Yt(w*2+4,v*2,A*2)*.35,D=ti(w*3.2+20+C,v*5,A*3.2-C,5);M=sn(d.lo,d.hi,D)*d.k,d.clearNorth&&(M*=1-sn(.78,.9,E))}const S=(p*e+T)*4;u[S]=d.col[0]*255,u[S+1]=d.col[1]*255,u[S+2]=d.col[2]*255,u[S+3]=M*255}}c.putImageData(h,0,0);const m=new xn(l);return m.colorSpace=$t,m.anisotropy=8,m}function py(s,e=.06){s.onBeforeCompile=t=>{t.uniforms.uSunViewPos=$c.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},s.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function my(){const e=Xs(128,128),t=e.getContext("2d"),n=t.createImageData(128,128),i=n.data;for(let a=0;a<128;a++){const r=a/128*2-1;for(let l=0;l<128;l++){const c=l/128*2-1,h=Math.hypot(c,r),u=Math.max(0,1-sn(.18,.98,h)),d=ti(c*2.8+4.2,r*2.8-1.7,3.1,4)*.5+.5,f=Math.max(0,Math.min(1,u*(.45+.85*d))),g=Math.round(236+19*d),x=(a*128+l)*4;i[x]=g,i[x+1]=Math.min(255,g+4),i[x+2]=255,i[x+3]=Math.round(f*255)}}t.putImageData(n,0,0);const o=new xn(e);return o.needsUpdate=!0,o}function gy(s,e){const t={uMap:{value:s},uColor:{value:new te(e)},uOpacity:{value:0},uPointSize:{value:94}},n=new ln({uniforms:t,vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1});return n.color=t.uColor.value,Object.defineProperty(n,"opacity",{get:()=>t.uOpacity.value,set:i=>{t.uOpacity.value=i}}),n}function cd(s,e){return new ln({uniforms:{uCloudMap:{value:s},uSunPosition:{value:new b(0,0,0)},uPlanetCenter:{value:new b(0,0,0)},uAmbientColor:{value:new te(e.ambient)},uSunColor:{value:new te(e.sunlit)},uHorizonColor:{value:new te(e.horizon)},uOpacity:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1,side:Dt})}function xy(){const s=new un(28e3,48,32),e=new ln({uniforms:{uLocalUp:{value:new b(0,1,0)},uSunDir:{value:new b(0,.2,1)},uZenithColor:{value:new te(1991880)},uMidColor:{value:new te(5155054)},uHorizonColor:{value:new te(16760171)},uSunGlowColor:{value:new te(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1},uMieG:{value:.78},uMieIntensity:{value:.55}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:zn}),t=new Ge(s,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t.userData.skipSSAO=!0,t}function vy(s,e=157.5){const t=s.localRadius,n=new Lt;n.name=`${s.id}_Orbital_Globe`;const i=s.capLocalDir?s.capLocalDir.clone().normalize():new b(0,1,0),o=[i.x,i.y,i.z],a={p4:[2048,1024],p2:[1536,768],p1:[1536,768]}[s.id]||[1024,512],{map:r,emissiveMap:l,bumpMap:c}=dy(s.id,a[0],a[1],o),h={p1:{ei:.56,rough:.72,metal:.06,bump:1.45,floor:0},p2:{ei:.96,rough:.58,metal:.3,bump:.65,floor:0},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[s.id],u=new ke({map:r,emissiveMap:l,emissive:new te(1,1,1),emissiveIntensity:h.ei,roughness:h.rough,metalness:h.metal,bumpMap:c,bumpScale:h.bump});py(u,h.floor);const d=new Ge(new un(t,128,128),u);d.name=`${s.id}_Orbital_Surface`,n.add(d);const f=s.id==="p1"?[1536,768]:[1024,512],g=fy(s.id,f[0],f[1],o),x={p1:{ambient:4942728,sunlit:16777215,horizon:10279148},p2:{ambient:860724,sunlit:6205136,horizon:1066082},p3:{ambient:8165566,sunlit:16777215,horizon:16039028},p4:{ambient:6434840,sunlit:16763016,horizon:14446130}}[s.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},m=cd(g,x),p=new Ge(new un(t*1.045,128,128),m);p.name=`${s.id}_Low_Cloud_Shell`,p.userData.skipSSAO=!0,n.add(p);const _=cd(g,x),y=new Ge(new un(t*1.082,128,128),_);y.name=`${s.id}_High_Cloud_Shell`,y.userData.skipSSAO=!0,n.add(y);const v=new Lt;v.name=`${s.id}_Lower_Cloud_Puffs_Group`,v.visible=!1,n.add(v);const T=460,w=new Float32Array(T*3),A=65/e,E=160/e,M=new ct().setFromUnitVectors(new b(0,1,0),i),S=new b;for(let U=0;U<T;U++){const z=Math.acos(1-H(U,2,17)*.42),B=H(U,9,5)*Math.PI*2,I=A+H(U,4,13)*(E-A),O=t+I;S.set(O*Math.sin(z)*Math.cos(B),O*Math.cos(z),O*Math.sin(z)*Math.sin(B)),S.applyQuaternion(M),w[U*3]=S.x,w[U*3+1]=S.y,w[U*3+2]=S.z}const C=new Tt;C.setAttribute("position",new bt(w,3));const D=gy(my(),x.sunlit),N=new Ai(C,D);N.name=`${s.id}_Volumetric_Billboard_Clouds`,N.userData.skipSSAO=!0,v.add(N);const R=Nf(s,t,s.id==="p4"?1.078:1.095);return n.add(R),{group:n,surfaceMesh:d,upperCloudMesh:y,lowerCloudGroup:v,lowerCloudMesh:p,lowerCloudPuffs:N,cloudDeckPalette:x,atmosphere:R}}function Nf(s,e,t=1.045){const n=new un(e*t,96,96),i={p1:[6083327,9627391],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[s.id]||[6866175,16755285],o=new ln({uniforms:{uColorDay:{value:new te(i[0])},uColorHorizon:{value:new te(i[1])},uSunPosition:{value:new b(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Dn,side:wi}),a=new Ge(n,o);return a.name=`${s.id}_Fresnel_Atmosphere`,a.userData.skipSSAO=!0,a}function _y(s,e=1400){const t=s.localRadius,n=1.65,i=s.id==="p4",o=256,a=Xs(o,o),r=Xs(o,o),l=a.getContext("2d"),c=r.getContext("2d");l.fillStyle=i?"#2a2c31":"#111821",l.fillRect(0,0,o,o),c.fillStyle="#000000",c.fillRect(0,0,o,o);const h=i?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let y=4;y<o;y+=8)for(let v=3;v<o;v+=6)Math.random()<(i?.55:.42)&&(c.fillStyle=h[Math.random()*h.length|0],c.fillRect(v,y,3,4));const u=new xn(a);u.colorSpace=$t;const d=new xn(r);d.colorSpace=$t;const f=new pn(1,1,1);f.translate(0,.5,0);const g=new ke({map:u,emissiveMap:d,emissive:new te(1,1,1),emissiveIntensity:i?1.6:2,roughness:.42,metalness:.7}),x=new yt(f,g,e);x.name=`${s.id}_Horizon_Tower_Band`;const m=new jt,p=new b(0,1,0),_=new b;for(let y=0;y<e;y++){const v=.025+Math.pow(H(y,3,9),.85)*.14,T=H(y,7,1)*Math.PI*2;_.set(Math.sin(v)*Math.cos(T),Math.cos(v),Math.sin(v)*Math.sin(T)),m.position.copy(_).multiplyScalar(t*.9996),m.quaternion.setFromUnitVectors(p,_),m.rotateY(H(y,2,2)*Math.PI);const w=n*(.0024+.0042*H(y,5,5)),A=n*(.0024+.0042*H(y,6,8)),E=n*(.006+.025*Math.pow(H(y,9,4),1.6));m.scale.set(w,E,A),m.updateMatrix(),x.setMatrixAt(y,m.matrix)}return x.instanceMatrix.needsUpdate=!0,x}function My(s,e,t,n){s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.updateMatrixWorld(!0);const i=n==="p2",o=new b(0,1,0),a=e/t,r=i?124:152;function l(w,A,E,M=!1){const S=Math.sqrt(w*w+E*E),C=Math.min(1.18,S/(a*.94)),D=Math.atan2(E,w),N=Math.sin(C),R=N*Math.cos(D),U=Math.cos(C),z=N*Math.sin(D);let B=A;if(M){const j=X.smoothstep(S,r*.65,r*1);B=X.lerp(A,i?-36:-18,j)}const I=n==="p3"?14.5:i?16.5:.4,O=Math.max(a*.9,a+B+I);return{px:O*R,py:O*U-a,pz:O*z,nx:R,ny:U,nz:z}}const c=new nt().copy(s.matrixWorld).invert(),h=[],u=new Map;s.traverse(w=>{if(w.isMesh&&w.geometry){const A=new nt().multiplyMatrices(c,w.matrixWorld);h.push({mesh:w,initRootMat:A}),u.set(w.geometry,(u.get(w.geometry)||0)+1)}});for(const{mesh:w,initRootMat:A}of h)w.parent!==s&&s.attach(w),A.decompose(w.position,w.quaternion,w.scale),w.updateMatrix();const d=new b,f=new ct,g=new b,x=new b,m=new ct,p=new b,_=Df(),y=Jr(),v=[];let T=0;for(const{mesh:w,initRootMat:A}of h){if(i){if(/^NC_FarHorizon/.test(w.name)){w.visible=!1;continue}if(/^NC_Canyon_Skyscraper/.test(w.name)&&(d.setFromMatrixPosition(A),Math.hypot(d.x,d.z)>104||d.x<-58)){w.visible=!1;continue}}const E=u.get(w.geometry)||1,M=/Terrain|River|Ground|Forest|Canal|Hill|Slope|Meadow|Grass|Cliff|Earth|Dirt|Landscape|Surface/i.test(w.name),S=/Citadel|Castle|Fortress|Keep|Senate|Tower|Skyscraper|Bridge|Spire|Tree|Foliage|Oak|Pine/i.test(w.name);w.castShadow=!M&&S&&T<110,w.castShadow&&T++,w.receiveShadow=M||S;const C=Array.isArray(w.material)?w.material:[w.material];w.castShadow&&C.some(D=>D?.transparent&&!(D.alphaTest>0))&&(w.castShadow=!1);for(const D of C)!D||D.userData?.pbrUpgraded||(D.userData.pbrUpgraded=!0,M&&D.isMeshStandardMaterial?(!D.roughnessMap&&y.roughnessMap&&(D.roughnessMap=y.roughnessMap),!D.bumpMap&&y.bumpMap&&(D.bumpMap=y.bumpMap,D.bumpScale=.04),n==="p3"&&v.push(bh(D,{mode:"perugius",worldRadius:e*157.5,peakStart:3.6,peakEnd:8.2,shoreBand:.55})),D.needsUpdate=!0):D.isMeshStandardMaterial&&!D.transparent&&!D.map&&_.map&&(D.roughnessMap=_.roughnessMap,D.bumpMap=_.bumpMap,D.bumpScale=.025,D.needsUpdate=!0));if(E===1||M){E>1&&(w.geometry=w.geometry.clone());const D=w.geometry.attributes.position,N=new nt().copy(A).invert();for(let R=0;R<D.count;R++){p.fromBufferAttribute(D,R).applyMatrix4(A);const U=l(p.x,p.y,p.z,M);p.set(U.px,U.py,U.pz).applyMatrix4(N),D.setXYZ(R,p.x,p.y,p.z)}D.needsUpdate=!0,w.geometry.computeVertexNormals(),w.geometry.computeBoundingBox(),w.geometry.computeBoundingSphere()}else{if(A.decompose(d,f,g),i&&/^NC_Canyon_Skyscraper/.test(w.name)){const N=Math.hypot(d.x,d.z),R=1-X.smoothstep(N,95,128)*.46;g.y*=R}const D=l(d.x,d.y,d.z,!1);x.set(D.nx,D.ny,D.nz).normalize(),m.setFromUnitVectors(o,x),w.position.set(D.px,D.py,D.pz),w.quaternion.copy(m).multiply(f),w.scale.copy(g),w.updateMatrix()}}s.scale.setScalar(t),s.position.set(0,e,0),s.updateMatrixWorld(!0),s.userData.splatUniforms=v}const gt=1/3.5,Di=new b(0,1,0);function hd(s,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,32);i.addColorStop(0,s),i.addColorStop(.45,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const o=new xn(t);return o.needsUpdate=!0,o}function Uf(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new b(1,0,0):new b(0,0,1),n=new b().crossVectors(e,t).normalize(),i=new b().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function yy(){const s=[],e=new ii([new b(0,0,0),new b(.05,.35,-.02),new b(-.04,.72,.04),new b(.02,1,-.01)]);s.push(new ri(e,6,.075,5,!1).toNonIndexed());const t=[[new b(.02,.48,.01),new b(.32,.76,.14)],[new b(-.02,.62,.03),new b(-.28,.92,-.18)],[new b(0,.78,.02),new b(.18,1.12,-.22)],[new b(.02,.56,-.02),new b(-.22,.82,.25)]];for(const[i,o]of t){const a=i.clone().lerp(o,.5).add(new b(0,.06,0)),r=new ii([i,a,o]);s.push(new ri(r,4,.026,4,!1).toNonIndexed())}const n=Ct(s,!1);return n.computeVertexNormals(),n}function by(){const s=[];for(let r=-2;r<=2;r++){const l=new cs(.36,.95,2,3);l.translate(r*.14,.48,Math.sin(r*.9)*.06),l.rotateZ(-r*.22),s.push(l.toNonIndexed())}const e=Ct(s,!1);e.computeVertexNormals();const t=[];for(let r=0;r<6;r++){const l=r/6*Math.PI*2,c=r===0?0:.28,h=r===0?1:.55+H(r,3,7)*.45,u=new tn(.11,.08,h,6,1);u.translate(Math.cos(l)*c,h*.5,Math.sin(l)*c),u.rotateZ((H(r,2,5)-.5)*.22),t.push(u.toNonIndexed())}const n=Ct(t,!1);n.computeVertexNormals();const i=[],o=new tn(.32,.4,.28,8);o.translate(0,.14,0),i.push(o.toNonIndexed());for(let r=0;r<10;r++){const l=r/10*Math.PI*2,c=new Vn(.065,.72,4);c.translate(0,.36,0),c.rotateX(.55),c.rotateY(l),c.translate(Math.cos(l)*.22,.2,Math.sin(l)*.22),i.push(c.toNonIndexed())}const a=Ct(i,!1);return a.computeVertexNormals(),{fanGeo:e,tubeGeo:n,anemoneGeo:a}}function Sy(){const s=[];for(let t=0;t<2;t++){const n=new cs(.24,1,2,8);n.translate(0,.5,0);const i=n.attributes.position;for(let o=0;o<i.count;o++){const a=i.getY(o),r=i.getX(o)+Math.sin(a*Math.PI*3)*.14,l=Math.cos(a*Math.PI*2.5+t*1.57)*.1;i.setXYZ(o,r,a,l)}n.rotateY(t*Math.PI*.5),n.computeVertexNormals(),s.push(n.toNonIndexed())}const e=Ct(s,!1);return e.computeVertexNormals(),e}function wy(s,e,t,n){const o=Uf(e.capDir),a=new Lt;a.name="Pandora_Biome_AshPeople";const r=($,ae,me=0)=>{const re=o.upDir.clone().addScaledVector(o.e1,$).addScaledVector(o.e2,ae).normalize(),Me=t(re.x,re.y,re.z);return{pos:re.clone().multiplyScalar(s+Me.elev+me),normal:re,elev:Me.elev,nation:Me.nation}},l=[];for(let $=0;$<18;$++){const ae=$/18*Math.PI*2+H($,3,9)*.25,me=[];for(let V=0;V<=8;V++){const Re=V/8,k=(.018+Re*.16)*.3125,it=Math.sin(Re*7+$*1.3)*.018*.3125,ge=Math.cos(ae)*k-Math.sin(ae)*it,Ne=Math.sin(ae)*k+Math.cos(ae)*it;me.push(r(ge,Ne,8e-4).pos)}const re=new ii(me),Me=new ri(re,14,(.0014+$%3*5e-4)*gt,4,!1).toNonIndexed();l.push(Me)}const c=new ke({color:3871240,emissive:16726792,emissiveIntensity:.42,roughness:.35});c.userData.animatedEmissive=!0,n.push({mat:c,dayColor:5117962,nightColor:16736792,dayEmissive:14166022,nightEmissive:16729608,dayEI:.42,nightEI:2.55,pulsePhase:.4});const h=new Ge(Ct(l,!1),c);h.name="Pandora_Ash_Lava_Fissures",a.add(h);const u=new ke({vertexColors:!0,roughness:.94,metalness:.06}),d=[{lx:-.045*.3125,lz:.032*.3125,rad:.145*gt,h:.175*gt},{lx:.072*.3125,lz:-.048*.3125,rad:.115*gt,h:.135*gt},{lx:-.025*.3125,lz:-.095*.3125,rad:.105*gt,h:.118*gt}],f=[];d.forEach(($,ae)=>{const me=r($.lx,$.lz,-.002),re=new tn($.rad*.28,$.rad,$.h,16,8,!1);re.translate(0,$.h*.5,0);const Me=re.attributes.position,V=new Float32Array(Me.count*3);for(let it=0;it<Me.count;it++){let ge=Me.getX(it),Ne=Me.getY(it);const Be=Me.getZ(it),rt=Yt(ge*80+ae*3.1,Ne*50,Be*80),Ve=Ne/$.h,F=1+.22*rt*(1-Ve*.4);ge*=F;const L=Be*F;Ve>.92&&Math.hypot(ge,L)<$.rad*.24&&(Ne-=$.h*.14),Me.setXYZ(it,ge,Ne,L);const ee=.1+.07*(1-Ve)+.04*Math.max(0,rt);V[it*3]=ee,V[it*3+1]=ee*.95,V[it*3+2]=ee*.98}re.setAttribute("color",new bt(V,3)),re.computeVertexNormals();const Re=new Ge(re,u);Re.position.copy(me.pos),Re.quaternion.setFromUnitVectors(Di,me.normal),Re.name=`Pandora_Ash_Volcano_${ae+1}`,a.add(Re);const k=new Ge(new $s($.rad*.22,12),c);k.rotateX(-Math.PI*.5),k.position.copy(me.pos).addScaledVector(me.normal,$.h*.88),k.quaternion.copy(Re.quaternion).multiply(new ct().setFromAxisAngle(new b(1,0,0),-Math.PI*.5)),a.add(k),f.push({basePos:me.pos.clone().addScaledVector(me.normal,$.h*.94),normal:me.normal.clone(),maxH:(.14+ae*.03)*gt,phase:ae*2.1})});const g=36,x=f.length*g,m=new Float32Array(x*3),p=new Tt;p.setAttribute("position",new bt(m,3));const _=new Ei({size:13.5,map:hd("rgba(52, 48, 50, 0.72)","rgba(28, 25, 26, 0.28)"),color:3880502,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),y=new Ai(p,_);y.frustumCulled=!1,y.name="Pandora_Ash_Volcano_Smoke",a.add(y);const v=1400,T=new Float32Array(v*3),w=[];for(let $=0;$<v;$++){const ae=H($,3,19)*Math.PI*2,me=Math.sqrt(H($,7,11))*.24*.3125,re=r(Math.cos(ae)*me,Math.sin(ae)*me,(.006+H($,5,2)*.22)*gt);T[$*3]=re.pos.x,T[$*3+1]=re.pos.y,T[$*3+2]=re.pos.z,w.push({dir:re.normal,baseAlt:re.pos.length(),phase:H($,9,4)*Math.PI*2,speed:.04+H($,2,8)*.06})}const A=new Tt;A.setAttribute("position",new bt(T,3));const E=new Ei({size:.58,map:hd("rgba(160, 150, 145, 0.85)","rgba(90, 80, 75, 0.25)"),color:9471360,transparent:!0,opacity:.52,depthWrite:!1,sizeAttenuation:!0}),M=new Ai(A,E);M.frustumCulled=!1,M.name="Pandora_Ash_Floating_Cinders",a.add(M);const S=440,C=yh(),D=yy();D.boundingSphere=new ci(new b(0,0,0),s+1.5);const N=new ke({color:2499104,map:C.map,roughnessMap:C.roughnessMap,bumpMap:C.bumpMap,bumpScale:.04,roughness:.94,metalness:.05}),R=[],U=new jt;for(let $=0;$<S*2&&R.length<S;$++){const ae=H($,4,17)*Math.PI*2,me=.014+Math.sqrt(H($,8,3))*.1,re=r(Math.cos(ae)*me,Math.sin(ae)*me,-5e-4);if(re.nation!=="ash")continue;const Me=(.018+H($,2,11)*.028)*gt;U.position.copy(re.pos),U.quaternion.setFromUnitVectors(Di,re.normal),U.rotateY(H($,6,9)*Math.PI*2),U.rotateX((H($,1,5)-.5)*.22),U.scale.set(Me,Me,Me),U.updateMatrix(),R.push(U.matrix.clone())}const z=new yt(D,N,Math.max(1,R.length));z.name="Pandora_Ash_Charred_Trees",z.frustumCulled=!1,z.castShadow=!0,z.receiveShadow=!0,R.forEach(($,ae)=>z.setMatrixAt(ae,$)),z.instanceMatrix.needsUpdate=!0,a.add(z);const B=new ke({color:12167830,roughness:.78}),I=new ke({color:2366745,roughness:.92}),O=new ke({color:16755256,emissive:16734740,emissiveIntensity:1.15,roughness:.35});O.userData.animatedEmissive=!0,n.push({mat:O,dayColor:16755256,nightColor:16768376,dayEmissive:16734740,nightEmissive:16738328,dayEI:.95,nightEI:2.65,pulsePhase:1.1});const j=[],J=[],ne=[];for(let $=0;$<6;$++){const ae=$/6*Math.PI*2+.3,me=.022*.3125,re=r(Math.cos(ae)*me,Math.sin(ae)*me,2e-4),Me=new ct().setFromUnitVectors(Di,re.normal);for(let Re=-1;Re<=1;Re+=2){const k=new ii([new b(Re*.012*gt,0,0),new b(Re*.018*gt,.018*gt,.002*gt),new b(0,.032*gt,0)]),it=new ri(k,8,.0018*gt,5,!1).toNonIndexed();it.applyQuaternion(new ct().setFromAxisAngle(Di,ae)),it.applyQuaternion(Me),it.translate(re.pos.x,re.pos.y,re.pos.z),J.push(it)}const V=r(Math.cos(ae+.25)*.011*.3125,Math.sin(ae+.25)*.011*.3125,5e-4);ne.push(V)}for(let $=0;$<16;$++){const ae=$/16*Math.PI*2+H($,2,7)*.18,me=(.018+$%3*.008)*.3125,re=r(Math.cos(ae)*me,Math.sin(ae)*me,0),Me=new Vn(.0075*gt,.013*gt,6);Me.translate(0,.006*gt,0);const V=Me.toNonIndexed();V.rotateY(H($,4,1)*Math.PI),V.applyQuaternion(new ct().setFromUnitVectors(Di,re.normal)),V.translate(re.pos.x,re.pos.y,re.pos.z),j.push(V)}const ye=new Ge(Ct(J,!1),B);ye.name="Pandora_Ash_Giant_Bone_Totems";const Q=new Ge(Ct(j,!1),I);Q.name="Pandora_Ash_Tribal_Huts",a.add(ye,Q);const de=[];ne.forEach($=>{const ae=new Vn(.003*gt,.009*gt,6).toNonIndexed();ae.translate(0,.004*gt,0),ae.applyQuaternion(new ct().setFromUnitVectors(Di,$.normal)),ae.translate($.pos.x,$.pos.y,$.pos.z),de.push(ae)});const xe=new Ge(Ct(de,!1),O);return xe.name="Pandora_Ash_Bonfires",a.add(xe),{group:a,update($,ae){const me=p.attributes.position;f.forEach((Me,V)=>{for(let Re=0;Re<g;Re++){const k=V*g+Re,it=($*.24+Me.phase+Re/g)%1,ge=it*Me.maxH,Ne=it*.025*gt;me.setXYZ(k,Me.basePos.x+Me.normal.x*ge+Math.sin(k+$*.5)*Ne,Me.basePos.y+Me.normal.y*ge+Math.cos(k)*Ne*.5,Me.basePos.z+Me.normal.z*ge+Math.cos(k+$*.4)*Ne)}}),me.needsUpdate=!0,_.color.setRGB(X.lerp(.24,.42,ae),X.lerp(.22,.16,ae),X.lerp(.23,.14,ae));const re=A.attributes.position;for(let Me=0;Me<v;Me++){const V=w[Me],Re=Math.sin($*V.speed+V.phase)*.004,k=V.baseAlt+Math.cos($*.4+V.phase)*.003;re.setXYZ(Me,V.dir.x*k+Re,V.dir.y*k,V.dir.z*k-Re)}re.needsUpdate=!0}}}function Ey(s,e,t,n){const i=.29411764705882354,o=Uf(e.capDir),a=new Lt;a.name="Pandora_Biome_MetkayinaReef";const r=(I,O,j=0)=>{const J=o.upDir.clone().addScaledVector(o.e1,I).addScaledVector(o.e2,O).normalize();return{pos:J.clone().multiplyScalar(s+j),normal:J}},l=(I,O,j=0)=>{const J=o.upDir.clone().addScaledVector(o.e1,I).addScaledVector(o.e2,O).normalize(),ne=t(J.x,J.y,J.z);return{pos:J.clone().multiplyScalar(s+ne.elev+j),normal:J,elev:ne.elev,nation:ne.nation}},c=new ke({color:6045222,roughness:.85}),h=new ke({color:7758908,roughness:.9}),u=new ke({color:16764006,emissive:16746532,emissiveIntensity:.55,roughness:.35});u.userData.animatedEmissive=!0,n.push({mat:u,dayColor:16755268,nightColor:16769160,dayEmissive:16742178,nightEmissive:16747560,dayEI:.45,nightEI:2.55,pulsePhase:1.7});const d=[],f=[],g=[],x=[],m=[];for(let I=0;I<18;I++){const O=(I<6?.024:.052+I%3*.012)*i,j=(I<6?I/6*Math.PI*2:(I-6)/12*Math.PI*2)+H(I,4,3)*.25,J=Math.cos(j)*O,ne=Math.sin(j)*O,ye=r(J,ne,5e-4),Q=new ct().setFromUnitVectors(Di,ye.normal).multiply(new ct().setFromAxisAngle(Di,j+H(I,2,7))),de=(.018+H(I,5,1)*.008)*gt,xe=de*1.25;m.push({pos:ye.pos.clone(),normal:ye.normal.clone(),qOri:Q});const $=new pn(de,.0016*gt,xe).toNonIndexed();$.translate(0,.0012*gt,0),$.applyQuaternion(Q),$.translate(ye.pos.x,ye.pos.y,ye.pos.z),d.push($);for(let Me=-1;Me<=1;Me+=2){const V=new ii([new b(Me*de*.48,-.0015*gt,-xe*.72),new b(Me*de*.56,8e-4*gt,0),new b(Me*de*.48,-.0015*gt,xe*.72)]),Re=new ri(V,8,.0014*gt,5,!1).toNonIndexed();Re.applyQuaternion(Q),Re.translate(ye.pos.x,ye.pos.y,ye.pos.z),d.push(Re)}const ae=de*.65,me=new tn(.001,de*.56,ae,8,1);me.scale(.95,1,1.25),me.translate(0,ae*.5+.0018*gt,0);const re=me.toNonIndexed();re.applyQuaternion(Q),re.translate(ye.pos.x,ye.pos.y,ye.pos.z),f.push(re);for(let Me=0;Me<(I%2===0?2:1);Me++){const V=Me===0?1:-1,Re=new tn(4e-4*gt,6e-4*gt,.007*gt,5).toNonIndexed();Re.translate(V*de*.45,.004*gt,xe*.52),Re.applyQuaternion(Q),Re.translate(ye.pos.x,ye.pos.y,ye.pos.z),d.push(Re);const k=new un(.0014*gt,6,5).toNonIndexed();k.translate(V*de*.45,.008*gt,xe*.52),k.applyQuaternion(Q),k.translate(ye.pos.x,ye.pos.y,ye.pos.z),g.push(k)}I<14&&x.push({basePos:ye.pos.clone().add(new b(de*.72,-2e-4*gt,0).applyQuaternion(Q)),normal:ye.normal.clone(),qOri:Q,phase:I*.9})}for(let I=0;I<m.length;I++){const O=m[I],j=I<5?I+1:I===5?0:I<17?I+1:6,J=m[j],ne=O.pos.distanceTo(J.pos);if(ne>.005*gt&&ne<.22*gt){const ye=O.pos.clone().add(J.pos).multiplyScalar(.5).normalize().multiplyScalar(s+9e-4),Q=new pn(.0045*gt,.0011*gt,ne).toNonIndexed(),de=J.pos.clone().sub(O.pos).normalize(),xe=ye.clone().normalize(),$=new b().crossVectors(xe,de).normalize();de.crossVectors($,xe).normalize();const ae=new nt().makeBasis($,xe,de);ae.setPosition(ye),Q.applyMatrix4(ae),d.push(Q)}}const p=new Ge(Ct(d,!1),c);p.name="Pandora_Metkayina_Rafts_And_Walkways";const _=new Ge(Ct(f,!1),h);_.name="Pandora_Metkayina_Woven_Huts";const y=new Ge(Ct(g,!1),u);y.name="Pandora_Metkayina_Torches",a.add(p,_,y);const v=new Vn(.0022*gt,.022*gt,6);v.rotateX(Math.PI*.5),v.scale(1,.45,1);const T=new yt(v,c,x.length);T.name="Pandora_Metkayina_Moored_Canoes",a.add(T);const{fanGeo:w,tubeGeo:A,anemoneGeo:E}=by(),M=[{name:"Pandora_Reef_Corals_CyanFans",geo:w,dayCol:2517860,nightCol:62975,nightEm:65512,matrices:[]},{name:"Pandora_Reef_Corals_MagentaTubes",geo:A,dayCol:9192546,nightCol:16725168,nightEm:16720544,matrices:[]},{name:"Pandora_Reef_Corals_CoralAnemones",geo:E,dayCol:10379322,nightCol:16742436,nightEm:16736792,matrices:[]}],S=new jt;for(let I=0;I<1050;I++){const O=H(I,3,19)*Math.PI*2,j=Math.sqrt(H(I,7,13))*.165*i,J=l(Math.cos(O)*j,Math.sin(O)*j,0);if(J.nation!=="water"||J.elev>=-.002)continue;const ne=(.009+H(I,5,11)*.016)*gt;S.position.copy(J.pos),S.quaternion.setFromUnitVectors(Di,J.normal),S.rotateY(H(I,2,7)*Math.PI*2),S.scale.set(ne,ne,ne),S.updateMatrix(),M[I%3].matrices.push(S.matrix.clone())}M.forEach((I,O)=>{if(I.matrices.length===0)return;const j=new ke({color:I.dayCol,emissive:I.nightEm,emissiveIntensity:0,roughness:.55,side:Dt});j.userData.animatedEmissive=!0,n.push({mat:j,dayColor:I.dayCol,nightColor:I.nightCol,dayEmissive:1057304,nightEmissive:I.nightEm,dayEI:0,nightEI:2.15,pulsePhase:O*1.4});const J=new yt(I.geo,j,I.matrices.length);J.name=I.name,I.matrices.forEach((ne,ye)=>J.setMatrixAt(ye,ne)),J.instanceMatrix.needsUpdate=!0,a.add(J)});const C=[];for(let I=0;I<720;I++){const O=H(I,11,5)*Math.PI*2,j=Math.sqrt(H(I,4,17))*.155*i,J=l(Math.cos(O)*j,Math.sin(O)*j,0);if(J.nation!=="water"||J.elev>=-.014)continue;const ne=Math.abs(J.elev),ye=Math.min(ne*.85,(.04+H(I,9,2)*.06)*gt),Q=(.012+H(I,6,8)*.012)*gt;S.position.copy(J.pos),S.quaternion.setFromUnitVectors(Di,J.normal),S.rotateY(H(I,1,3)*Math.PI*2),S.scale.set(Q,ye,Q),S.updateMatrix(),C.push(S.matrix.clone())}const D={uTime:{value:0}},N=new ke({color:1730632,emissive:55450,emissiveIntensity:0,roughness:.55,side:Dt});if(N.userData.animatedEmissive=!0,N.onBeforeCompile=I=>{I.uniforms.uTime=D.uTime,I.vertexShader=`uniform float uTime;
`+I.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float swayAmp = position.y * 0.14;
        transformed.x += sin(uTime * 1.45 + position.y * 6.0) * swayAmp;
        transformed.z += cos(uTime * 1.2 + position.y * 5.0) * swayAmp;`)},n.push({mat:N,dayColor:1730632,nightColor:541256,dayEmissive:798238,nightEmissive:57512,dayEI:0,nightEI:1.05}),C.length>0){const I=new yt(Sy(),N,C.length);I.name="Pandora_Reef_Giant_Kelp",C.forEach((O,j)=>I.setMatrixAt(j,O)),I.instanceMatrix.needsUpdate=!0,a.add(I)}const R=[];for(let I=0;I<32;I++){const O=H(I,8,21)*Math.PI*2,j=Math.sqrt(H(I,2,13))*.145*i,J=r(Math.cos(O)*j,Math.sin(O)*j,-.001),ne=.095,ye=new tn(.008*gt,.028*gt,ne,8,1,!0);ye.translate(0,-ne*.5,0);const Q=ye.toNonIndexed(),de=new ct().setFromUnitVectors(Di,J.normal),xe=new ct().setFromEuler(new li(.18,H(I,3,5)*6.28,.12));Q.applyQuaternion(de.multiply(xe)),Q.translate(J.pos.x,J.pos.y,J.pos.z),R.push(Q)}const U=new gn({color:new te(.32,.95,1),transparent:!0,opacity:0,depthWrite:!1,blending:Dn,side:Dt}),z=new Ge(Ct(R,!1),U);z.name="Pandora_Reef_Underwater_Caustics",z.visible=!1,a.add(z);const B=new jt;return{group:a,update(I,O,j){D.uTime.value=I;for(let J=0;J<x.length;J++){const ne=x[J],ye=Math.sin(I*2.1+ne.phase)*45e-5*gt,Q=Math.sin(I*1.6+ne.phase)*.06;B.position.copy(ne.basePos).addScaledVector(ne.normal,ye),B.quaternion.copy(ne.qOri),B.rotateZ(Q),B.scale.set(1,1,1),B.updateMatrix(),T.setMatrixAt(J,B.matrix)}if(T.instanceMatrix.needsUpdate=!0,j>.01){const J=.78+.22*Math.sin(I*2.4),ne=X.lerp(.28,.08,O);U.opacity=j*ne*J,z.visible=U.opacity>.005}else z.visible=!1}}}const Te=1/3.5,En=new b(0,1,0),wh=new ct().setFromUnitVectors(En,new b(0,Math.cos(X.degToRad(68)),Math.sin(X.degToRad(68))).normalize()),Eh=tl([0,Math.cos(X.degToRad(68)),Math.sin(X.degToRad(68))]),Mt=1/3.2,Br=[{id:"valley_lake",dir:new b(-.08,.992,.095).normalize(),angRad:.024,waterElev:.0026},{id:"east_lake",dir:new b(.42,.78,.46).normalize(),angRad:.025,waterElev:.0028},{id:"west_lake",dir:new b(-.56,.62,-.55).normalize(),angRad:.024,waterElev:.0027},{id:"souls_lake",dir:new b(.36,-.12,-.92).normalize(),angRad:.026,waterElev:.0028},{id:"mush_lake",dir:new b(-.24,-.78,.58).normalize(),angRad:.024,waterElev:.0027}],jl=new b,xr=new b;function Ay(s,e,t,n=0){const i=Math.sin(e),o=i*Math.cos(t),a=Math.cos(e),r=i*Math.sin(t),l=s+n;return{pos:new b(l*o,l*a,l*r),normal:new b(o,a,r)}}function fi(s,e,t,n=wh,i=Eh,o=4){jl.set(s,e,t).normalize(),xr.copy(jl).applyQuaternion(n).normalize();const a=xr.x,r=xr.y,l=xr.z,{cont:c,ridge:h,highlandRidge:u,craterDepression:d,forestFactor:f,waterFactor:g,ashFactor:x,reefFactor:m,borderMountain:p,forestClump:_,nation:y}=Sh(a,r,l,i,o);let v=0,T=0;if(y==="forest"&&f>.55)for(let E=0;E<Br.length;E++){const M=Br[E],S=jl.dot(M.dir);if(S>.992){const C=Math.acos(X.clamp(S,-1,1));if(C<M.angRad){const D=1-C/M.angRad;v=Math.max(v,D*D*(3-2*D)),T=M.waterElev}}}let w=0,A="ocean";if(c<=0){const E=X.smoothstep(c,-.34,-.02),M=Yt(a*19,r*19,l*19)*.008,S=-.11*(.45+.55*Math.max(.45,m));w=X.lerp(S,-.0012,E)+M*(1-E*.5),m>.25&&c>-.16&&(w=X.lerp(w,-.022-(1-E)*.085,.65)),A=c>-.16||m>.25?"reef":"ocean"}else{const E=Yt(a*9+1.2,r*9,l*9)*.12,M=Yt(a*9,r*9+2.4,l*9)*.12,S=ti((a+E)*14+3.1,r*14-1.4,(l+M)*14+2.7,4),C=Math.abs(Yt(a*36,r*36,l*36))*.0025,D=X.smoothstep(c,0,.14),N=X.smoothstep(u,.025,.22)*.015,R=p*(.014+Math.max(0,h)*.012),U=x*(.0065+Math.pow(Math.max(0,h),1.8)*.013);w=Math.min(.068,(D*.0018+Math.max(0,S*.52+.34)*.0072*D+C*D+N+R+U-d)*1.45),v>.01&&(w=X.lerp(w,T-.0038,v)),w=Math.max(4e-4,w),y==="ash"?A="ash":y==="water"?A="atoll_island":v>.45?A="lake":u>.036||p>.45?A="canyon":A="forest"}return{cont:c,ridge:h,highlandRidge:u,forestFactor:f,waterFactor:g,ashFactor:x,reefFactor:m,borderMountain:p,forestClump:_,lakeBlend:v,lakeWaterElev:T,elev:w,biome:A,nation:y,sx:a,sy:r,sz:l}}function vr(s,e,t,n=0,i=null){const o=i?.qCap||wh,a=i?.sphereLandmarks||Eh;return fi(s,e,t,o,a,3).elev}function Hi(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new b(1,0,0):new b(0,0,1),n=new b().crossVectors(e,t).normalize(),i=new b().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Zs(s,e,t,n,i,o,a){const r=e.upDir.clone().addScaledVector(e.e1,t).addScaledVector(e.e2,n).normalize(),l=fi(r.x,r.y,r.z,o,a,3).elev;return{pos:r.clone().multiplyScalar(s+l+i),normal:r,elev:l}}function Ty(s,e=null){const t=e?.qCap||wh,n=e?.sphereLandmarks||Eh,i=[{anchor:new b(0,1,0),span:.24,angle:.55,amp:.045,steps:42},{anchor:new b(.14,.985,.09).normalize(),span:.2,angle:-1.1,amp:.038,steps:32},{anchor:wt[2].capDir.clone(),span:.24,angle:.8,amp:.038,steps:36},{anchor:wt[3].capDir.clone(),span:.24,angle:2.1,amp:.04,steps:36},{anchor:wt[4].capDir.clone(),span:.2,angle:-.7,amp:.032,steps:32},{anchor:new b(.48,.58,-.65).normalize(),span:.22,angle:1.4,amp:.036,steps:32},{anchor:new b(-.46,.72,-.52).normalize(),span:.22,angle:-1.6,amp:.036,steps:32}],o=[];for(const a of i){const r=Hi(a.anchor),l=Math.cos(a.angle),c=Math.sin(a.angle),h=[];for(let u=0;u<=a.steps;u++){const d=u/a.steps,f=(d-.5)*a.span,g=Math.sin(d*Math.PI*2.4)*a.amp,x=f*l-g*c,m=f*c+g*l,p=r.upDir.clone().addScaledVector(r.e1,x).addScaledVector(r.e2,m).normalize(),_=fi(p.x,p.y,p.z,t,n,3);if(_.nation!=="forest"||_.cont<=.005){if(h.length>=6)break;continue}h.push({theta:Math.acos(X.clamp(p.y,-1,1)),phi:Math.atan2(p.z,p.x),pos:p.clone().multiplyScalar(s+_.elev+55e-5),normal:p,elev:_.elev})}h.length>=6&&o.push(h)}return o}function mi(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),o=t.getY(n),a=t.getZ(n),r=Math.hypot(i,o,a);!Number.isFinite(r)||r<1e-4?t.setXYZ(n,0,e,0):Math.abs(r-1)>.001&&t.setXYZ(n,i/r,o/r,a/r)}return t.needsUpdate=!0,s}function ud(s,e){const t=s.index?s.toNonIndexed():s,n=new te(e),i=t.attributes.position.count,o=new Float32Array(i*3);for(let a=0;a<i;a++)o[a*3]=n.r,o[a*3+1]=n.g,o[a*3+2]=n.b;return t.setAttribute("color",new bt(o,3)),t}function ni(s,e,t=.28,n=.1,i=2,o=3,a=.45){const r=new cs(s,e,i,o);r.translate(0,e*.5,0);const l=r.attributes.position;for(let g=0;g<l.count;g++){const x=l.getX(g),m=l.getY(g),p=X.clamp(m/Math.max(1e-4,e),0,1),_=X.clamp(x/Math.max(1e-4,s),-.5,.5)*2,y=t*Math.pow(p,1.55)*e,v=-n*(_*_-.35)*(.25+.75*p)*s,T=Math.sin(p*Math.PI)*Math.abs(t)*.14*e;l.setXYZ(g,x,m+T,y+v)}const c=r.toNonIndexed();c.computeVertexNormals();const h=c.attributes.normal,u=c.attributes.position,d=new b,f=new b;for(let g=0;g<h.count;g++)f.fromBufferAttribute(h,g),d.set(u.getX(g),a*e+u.getY(g)*.65,u.getZ(g)+.12*e),d.lengthSq()>1e-6&&(d.normalize(),f.lerp(d,.42).normalize(),h.setXYZ(g,f.x,f.y,f.z));return mi(c,1)}function Cy(){const s=[],e=new tn(.03,.14,1,6,1);e.translate(0,.5,0),s.push(e.toNonIndexed());const t=[{y:.42,rad:.24},{y:.6,rad:.2},{y:.77,rad:.16},{y:.91,rad:.11}];for(let i=0;i<t.length;i++){const o=t[i];for(let a=0;a<3;a++){const r=a/3*Math.PI*2+i*.72,l=new tn(.008,.022,o.rad,4,1);l.translate(0,o.rad*.5,0),l.rotateZ(-1.35),l.rotateY(r),l.translate(0,o.y,0),s.push(l.toNonIndexed())}}const n=Ct(s,!1);return n.computeVertexNormals(),mi(n,1)}function Py(){const s=[],e=[{y:.42,w:.34,h:.44,n:5,tilt:1.24,twist:0},{y:.6,w:.3,h:.39,n:5,tilt:1.18,twist:.45},{y:.77,w:.25,h:.32,n:4,tilt:1.08,twist:.25},{y:.91,w:.2,h:.25,n:4,tilt:.88,twist:.65}];for(const n of e)for(let i=0;i<n.n;i++){const o=i/n.n*Math.PI*2+n.twist,a=ni(n.w,n.h,.26,.09,2,3,.35);a.rotateX(n.tilt),a.rotateZ((i%2*2-1)*.14),a.rotateY(o),a.translate(Math.sin(o)*.03,n.y,Math.cos(o)*.03),s.push(a)}for(let n=0;n<2;n++){const i=ni(.2,.24,.18,.08,2,2,.5);i.rotateX(.32),i.rotateY(n*Math.PI*.5+.3),i.translate(0,.96,0),s.push(i)}const t=Ct(s,!1);return t.computeVertexNormals(),mi(t,1)}function Ry(){const s=[],e=new ii([new b(0,0,0),new b(.08,.32,.04),new b(-.05,.68,-.05),new b(.03,.94,.02)]);s.push(new ri(e,6,.068,5,!1).toNonIndexed());for(let n=0;n<4;n++){const i=n/4*Math.PI*2+.4,o=new ii([new b(Math.cos(i)*.04,.34,Math.sin(i)*.04),new b(Math.cos(i)*.18,.22,Math.sin(i)*.18),new b(Math.cos(i)*.26,-.02,Math.sin(i)*.26)]);s.push(new ri(o,4,.028,4,!1).toNonIndexed())}for(let n=0;n<3;n++){const i=n/3*Math.PI*2+.55,o=new ii([new b(.01,.78,0),new b(Math.cos(i)*.16,.9,Math.sin(i)*.16),new b(Math.cos(i)*.32,.96,Math.sin(i)*.32)]);s.push(new ri(o,4,.024,4,!1).toNonIndexed())}const t=Ct(s,!1);return t.computeVertexNormals(),mi(t,1)}function Dy(){const s=[];for(let t=0;t<6;t++){const n=t/6*Math.PI*2+.22,i=ni(.46,.56,.32,.12,2,3,.38);i.rotateX(1.12+t%2*.14),i.rotateZ((t%3-1)*.12),i.rotateY(n),i.translate(.03+Math.sin(n)*.08,.92+t%2*.04,.02+Math.cos(n)*.08),s.push(i)}for(let t=0;t<2;t++){const n=ni(.52,.54,.24,.14,2,3,.5);n.rotateX(.68),n.rotateY(t*Math.PI*.65+.4),n.translate(.03,.96,.02),s.push(n)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function Iy(){const s=new ii([new b(0,0,0),new b(.06,.38,.03),new b(.14,.78,-.02),new b(.18,1,0)]),e=new ri(s,7,.052,6,!1).toNonIndexed();return e.computeVertexNormals(),mi(e,1)}function Ly(){const s=[];for(let t=0;t<6;t++){const n=t/6*Math.PI*2,i=ni(.38,.84,.42,.14,2,4,.28);i.rotateX(1.06+t%2*.16),i.rotateZ((t%2*2-1)*.1),i.rotateY(n),i.translate(.18,.98,0),s.push(i)}for(let t=0;t<4;t++){const n=t/4*Math.PI*2+.42,i=ni(.3,.66,.3,.12,2,4,.45);i.rotateX(.62+t%2*.12),i.rotateY(n),i.translate(.18,1,0),s.push(i)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function Ny(){const s=[];for(let t=0;t<4;t++){const n=t/4*Math.PI*2,i=ni(.54,.68,.34,.12,2,3,.38);i.rotateX(.95+t%2*.18),i.rotateY(n),s.push(i)}for(let t=0;t<3;t++){const n=t/3*Math.PI*2+.52,i=ni(.42,.62,.22,.1,2,3,.52);i.rotateX(.52),i.rotateY(n),s.push(i)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function Uy(){const s=[],e=new Ts(.48,0);e.scale(1.2,.65,1),e.translate(0,.22,0),s.push(ud(e,3885110));const t=new Ts(.32,0);t.scale(1,.72,1.1),t.translate(.38,.14,.24),s.push(ud(t,2774062));const n=Ct(s,!1);return n.computeVertexNormals(),n}function Fy(){const s=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=ni(.44,.96,.44,.15,2,4,.3);i.rotateX(.86+t%2*.14),i.rotateY(n),s.push(i)}for(let t=0;t<2;t++){const n=t*Math.PI+.6,i=ni(.34,.76,.26,.12,2,3,.48);i.rotateX(.44),i.rotateY(n),s.push(i)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function Oy(){const s=[];for(let t=0;t<3;t++){const n=t/3*Math.PI*2+.2,i=ni(.72,.96,.24,.1,1,2,.45);i.rotateX(.36),i.rotateY(n),s.push(i)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function By(){const s=[],e=new Ts(.42,0);e.scale(1.25,.56,.95),e.translate(0,.16,0),s.push(e.index?e.toNonIndexed():e);const t=new Ts(.28,0);t.scale(.9,.68,1.15),t.rotateY(.85),t.translate(.38,.11,-.22),s.push(t.index?t.toNonIndexed():t);const n=Ct(s,!1);return n.computeVertexNormals(),mi(n,1)}function Ff(){const s=[];for(let t=0;t<5;t++){const n=new Vn(.24,.72,4);n.translate(0,.36,0),n.rotateX(.85),n.rotateY(t/5*Math.PI*2),s.push(n.toNonIndexed())}const e=Ct(s,!1);return e.computeVertexNormals(),e}function ky(){const s=[],e=new un(1,10,6,0,Math.PI*2,0,Math.PI*.56);e.scale(1,.42,1),e.translate(0,.9,0),s.push(e.toNonIndexed());const t=new tn(.14,.25,.94,6,1);t.translate(0,.47,0),s.push(t.toNonIndexed());const n=Ct(s,!1);return n.computeVertexNormals(),n}function Of(){const s=[];for(let i=0;i<6;i++){const o=i/6*Math.PI*2,a=ni(.82,1.08,.34,.14,2,3,.45);a.rotateX(1.36+i%2*.08),a.rotateZ((i%2*2-1)*.1),a.rotateY(o),a.translate(0,.02,0),s.push(a)}for(let i=0;i<4;i++){const o=i/4*Math.PI*2+.42,a=ni(.74,.88,.26,.12,2,3,.55);a.rotateX(.98),a.rotateY(o),a.translate(0,.1,0),s.push(a)}for(let i=0;i<2;i++){const o=ni(.76,.72,.22,.12,2,2,.65);o.rotateX(.68),o.rotateY(i*Math.PI*.5+.25),o.translate(0,.15,0),s.push(o)}const e=Ct(s,!1);e.computeVertexNormals(),mi(e,1);const t=[];for(let i=0;i<6;i++){const o=i/6*Math.PI*2+.26,a=ni(.76,.96,.38,.12,2,3,-.35);a.rotateX(1.62+i%2*.08),a.rotateY(o),a.translate(0,-.02,0),t.push(a)}const n=Ct(t,!1);return n.computeVertexNormals(),mi(n,-1),{outer:e,under:n}}function zy(s,e,t,n){const i=new mh(1,2),o=i.attributes.position,a=o.count,r=new Float32Array(a*3),l=new te(2055213),c=new te(2783806),h=new te(3817286),u=new te(1974824),d=new te;for(let f=0;f<a;f++){let g=o.getX(f),x=o.getY(f),m=o.getZ(f);const p=Yt(g*2.7+s*3.1,x*2.4-s,m*2.7+s*1.9),_=Yt(g*5.5+s*7.3,x*4.5,m*5.5);if(x>.15){const y=.25+(x-.15)*.22+.08*p,v=1+.18*p;g*=e*v,m*=t*v,x=n*y,d.copy(l).lerp(c,Math.max(0,_)*.65)}else{const y=Math.min(1,(.15-x)/1.15),v=Math.pow(1-y*.86,1.25),T=1+.34*p+.16*_;g*=e*v*T,m*=t*v*T,x=-n*y*(.85+.25*Math.abs(p)),d.copy(h).lerp(u,y*.72+Math.max(0,-p)*.28)}o.setXYZ(f,g,x,m),r[f*3]=d.r,r[f*3+1]=d.g,r[f*3+2]=d.b}return i.setAttribute("color",new bt(r,3)),i.computeVertexNormals(),i}function Ah(s,e,t,n,i,o,a,r,l,c,h){const u=Zs(s,e,t,n,-.0025*Te,c,h).pos,d=Zs(s,e,i,o,-.0025*Te,c,h).pos,f=u.clone().add(d).multiplyScalar(.5).normalize(),g=u.clone().lerp(d,.26).normalize().multiplyScalar(s+a*.74),x=f.clone().multiplyScalar(s+a),m=u.clone().lerp(d,.74).normalize().multiplyScalar(s+a*.76),p=new ii([u,g,x,m,d]),_=new ri(p,24,r,8,!1),y=_.attributes.position,v=_.attributes.normal,T=new Float32Array(y.count*3),w=new te(3290942),A=new te(2316332),E=new te(3700796),M=new b,S=new b,C=new te;for(let D=0;D<y.count;D++){M.fromBufferAttribute(y,D),S.fromBufferAttribute(v,D);const N=Yt(M.x*220+l*3.7,M.y*220,M.z*220-l),R=Yt(M.x*520,M.y*520,M.z*520),U=M.clone().normalize(),z=Math.max(0,S.dot(U));M.addScaledVector(S,r*(.36*N+.16*R)),y.setXYZ(D,M.x,M.y,M.z),C.copy(w).lerp(A,Math.pow(z,1.25)),z>.45&&R>.2&&C.lerp(E,.48),T[D*3]=C.r,T[D*3+1]=C.g,T[D*3+2]=C.b}return _.setAttribute("color",new bt(T,3)),_.computeVertexNormals(),{geo:_,curve:p,apex:x}}function Gy(s){const e=new tn(.12,1,1,8,6);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new te(2764600),o=new te(2381356),a=new te(3568190),r=new te;for(let l=0;l<t.count;l++){let c=t.getX(l);const h=t.getY(l);let u=t.getZ(l);const d=Yt(c*3.8+s*2.1,h*4.5,u*3.8-s),f=1+.35*d;c*=f,u*=f,t.setXYZ(l,c,h,u),r.copy(i).lerp(o,X.smoothstep(h,.22,.72)),h>.72&&d>.1&&r.lerp(a,.45),n[l*3]=r.r,n[l*3+1]=r.g,n[l*3+2]=r.b}return e.setAttribute("color",new bt(n,3)),e.computeVertexNormals(),e}function Hy(s,e){const t=[],n=[],i=new b,o=new b,a=new b;s.forEach((f,g)=>{const x=f.length,m=e[g]||.008*Te,p=[],_=[],y=[];for(let T=0;T<x;T++){const w=f[T],A=f[Math.max(0,T-1)],E=f[Math.min(x-1,T+1)];i.copy(E.pos).sub(A.pos).normalize(),a.copy(w.normal),o.crossVectors(i,a).normalize();const M=1+.22*Math.sin(T*.45+g),S=m*M,C=S*.24,D=w.pos.clone().addScaledVector(o,-S),N=w.pos.clone().addScaledVector(o,S),R=w.pos.clone().addScaledVector(o,-(S+C)).addScaledVector(a,14e-5),U=w.pos.clone().addScaledVector(o,S+C).addScaledVector(a,14e-5);p.push(D.x,D.y,D.z,N.x,N.y,N.z),_.push(R.x,R.y,R.z,D.x,D.y,D.z),y.push(N.x,N.y,N.z,U.x,U.y,U.z)}const v=T=>{const w=[];for(let E=0;E<x-1;E++){const M=E*2,S=M+1,C=M+2,D=M+3;w.push(M,S,C,S,D,C)}const A=new Tt;return A.setAttribute("position",new Kt(T,3)),A.setIndex(w),A.computeVertexNormals(),A.toNonIndexed()};t.push(v(p)),n.push(v(_),v(y))});const r=Ct(t,!1),l=Ct(n,!1),c=new ke({color:953508,emissive:35e3,emissiveIntensity:0,roughness:.1,metalness:.55,transparent:!0,opacity:.9,depthWrite:!1}),h=new ke({color:1994328,emissive:62975,emissiveIntensity:0,roughness:.4,transparent:!0,opacity:.88,depthWrite:!1}),u=new Ge(r,c);u.name="Pandora_Global_Rivers_Water";const d=new Ge(l,h);return d.name="Pandora_Global_Rivers_Banks",{waterMesh:u,bankMesh:d,waterMat:c,bankMat:h}}function Vy(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512),i=n.data;for(let a=0;a<512;a++)for(let r=0;r<512;r++){const l=Yt(r*.18,a*.18,2.3)*.5+.5,c=H(r,a,37),h=Math.floor(X.clamp((.76+.24*l+.16*(c-.5))*255,130,255)),u=(a*512+r)*4;i[u]=h,i[u+1]=h,i[u+2]=h,i[u+3]=255}t.putImageData(n,0,0);const o=new xn(e);return o.colorSpace=$t,o.wrapS=Wn,o.wrapT=Wn,o.repeat.set(96,48),o.anisotropy=8,o}function Wy(s,e){const i=document.createElement("canvas");i.width=1024,i.height=512;const o=i.getContext("2d"),a=o.createImageData(1024,512),r=a.data,l=wt[3].capDir,c=wt[4].capDir,h=new b;for(let d=0;d<512;d++){const f=(d+.5)/512*Math.PI,g=Math.sin(f),x=Math.cos(f);for(let m=0;m<1024;m++){const p=(m+.5)/1024*Math.PI*2,_=-Math.cos(p)*g,y=Math.sin(p)*g;h.set(_,x,y).applyQuaternion(s);const{cont:v,ashFactor:T,reefFactor:w,nation:A,borderMountain:E}=Sh(h.x,h.y,h.z,e,4);let M=0,S=0,C=0;if(A==="ash"&&v>0){const N=Math.pow(Math.max(0,1-Math.abs(Yt(_*18+4.1,x*18,y*18-2.3))),14);M=N*T*.92,S=N*T*.24,C=N*T*.03}else if(A==="forest"&&v>0){let N=1-Math.abs(Yt(_*24+1,x*24,y*24));N=Math.pow(Math.max(0,N),18);const R=H(Math.floor(_*360),Math.floor(x*360),Math.floor(y*360))>.986?.55:0,U=Math.min(.68,N*.58+R)*(1-Math.min(.9,E));Yt(_*5+9,x*5,y*5)>.1?(M=U*.06,S=U*.78,C=U*.85):(M=U*.58,S=U*.18,C=U*.85);const B=Math.acos(X.clamp(_*l.x+x*l.y+y*l.z,-1,1));if(B<.032){const O=Math.pow(1-B/.032,1.6);M=Math.min(1,M+O*.78),S=Math.min(1,S+O*.38),C=Math.min(1,C+O*.92)}const I=Math.acos(X.clamp(_*c.x+x*c.y+y*c.z,-1,1));if(I<.032){const O=Math.pow(1-I/.032,1.7);M=Math.min(1,M+O*.85),S=Math.min(1,S+O*.22),C=Math.min(1,C+O*.72)}}else if(v<=0){const N=Math.max(X.smoothstep(v,-.11,-.002)*.55,w*.58)*.58;M=N*.05,S=N*.75,C=N*.85}const D=(d*1024+m)*4;r[D]=Math.min(255,M*255),r[D+1]=Math.min(255,S*255),r[D+2]=Math.min(255,C*255),r[D+3]=255}}o.putImageData(a,0,0);const u=new xn(i);return u.colorSpace=$t,u}function Xy(s,e,t,n,i){const o=Hi(e.capDir),a=Zs(s,o,0,0,-.001,t,n),r=new Lt;r.name="Pandora_Landmark_Hometree",r.position.copy(a.pos),r.quaternion.setFromUnitVectors(En,a.normal);const l=yh(),c=If(),h=new ke({color:6047284,map:l.map,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:337972,emissiveIntensity:0,roughness:.9});i.push({mat:h,dayColor:6047284,nightColor:2239556,dayEmissive:337972,nightEmissive:803410,dayEI:0,nightEI:.45});const u=.56*Te,d=new tn(.065*Te,.14*Te,u,14,14,!0);d.translate(0,u*.5,0);const f=d.attributes.position;for(let E=0;E<f.count;E++){const M=f.getX(E),S=f.getY(E),C=f.getZ(E),D=S/u,N=D*2.4,R=1+.24*Math.sin(Math.atan2(C,M)*6+N),U=D<.25?1+Math.pow((.25-D)/.25,1.5)*.65:1,z=(M*Math.cos(N*.35)-C*Math.sin(N*.35))*R*U,B=(M*Math.sin(N*.35)+C*Math.cos(N*.35))*R*U;f.setXYZ(E,z,S,B)}d.computeVertexNormals();const g=new Ge(d,h);g.castShadow=!0,g.receiveShadow=!0,r.add(g);for(let E=0;E<14;E++){const M=E/14*Math.PI*2+(H(E,3,7)-.5)*.15,S=(.14+H(E,8,2)*.09)*Te,C=(.12+H(E,5,4)*.18)*Te,D=new ii([new b(Math.cos(M)*.06*Te,C,Math.sin(M)*.06*Te),new b(Math.cos(M)*S*.62,C*.62,Math.sin(M)*S*.62),new b(Math.cos(M)*S,-.015*Te,Math.sin(M)*S)]),N=new Ge(new ri(D,10,.012*Te,6,!1),h);N.castShadow=!0,N.receiveShadow=!0,r.add(N)}const x=new ke({color:3901e3,map:c.canopy.map,roughnessMap:c.canopy.roughnessMap,emissiveMap:c.canopy.emissiveMap,emissive:407618,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});i.push({mat:x,dayColor:3901e3,nightColor:1068118,dayEmissive:407618,nightEmissive:557718,dayEI:0,nightEI:.85});const m=new ke({color:4622420,map:c.canopy.map,roughnessMap:c.canopy.roughnessMap,emissiveMap:c.canopy.emissiveMap,emissive:65512,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});i.push({mat:m,dayColor:4622420,nightColor:1366248,dayEmissive:1853990,nightEmissive:63743,dayEI:0,nightEI:2.25,pulsePhase:.6});const p=new ke({color:3877405,emissive:16755256,emissiveIntensity:0,roughness:.5});i.push({mat:p,dayColor:3877405,nightColor:16762980,dayEmissive:2759184,nightEmissive:16751144,dayEI:0,nightEI:2.1,pulsePhase:1.4});const _=[.34*Te,.28*Te,.21*Te,.14*Te],y=[.34*Te,.44*Te,.53*Te,.61*Te],{outer:v,under:T}=Of(),w=Zc(c.canopy.map);for(let E=0;E<_.length;E++){const M=_[E],S=y[E],C=new Ge(v,x);C.position.set(0,S,0),C.scale.set(M,M*.9,M),C.castShadow=!0,C.receiveShadow=!0,C.customDepthMaterial=w,r.add(C);const D=new Ge(T,m);D.position.set(0,S-.004*Te,0),D.scale.set(M*.98,M*.9,M*.98),D.receiveShadow=!0,r.add(D)}const A=new Ge(new un(.055*Te,12,8),p);return A.position.set(0,.06*Te,0),r.add(A),{group:r,anchorDir:a.normal,anchorPos:a.pos}}function qy(s,e,t,n,i){const o=Hi(e.capDir),a=Zs(s,o,0,0,-5e-4,t,n),r=new Lt;r.name="Pandora_Landmark_TreeOfSouls";const l=Da(),c=new ke({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:2757704,emissiveIntensity:0,roughness:.85});i.push({mat:c,dayColor:16777215,nightColor:10134724,dayEmissive:1054752,nightEmissive:2497092,dayEI:0,nightEI:.45});for(let T=0;T<7;T++){const w=T/7*Math.PI*2,A=w+Math.PI*.88,E=.072*Mt,{geo:M}=Ah(s,o,Math.cos(w)*E,Math.sin(w)*E,Math.cos(A)*E,Math.sin(A)*E,(.145+T%3*.025)*Te,.011*Te,50+T,t,n),S=new Ge(M,c);S.castShadow=!0,S.receiveShadow=!0,r.add(S)}const h=new Lt;h.position.copy(a.pos),h.quaternion.setFromUnitVectors(En,a.normal),r.add(h);const u=new ke({color:2975798,emissive:9058559,emissiveIntensity:0,roughness:.72});i.push({mat:u,dayColor:2975798,nightColor:1976408,dayEmissive:1194016,nightEmissive:7746303,dayEI:0,nightEI:1.45,pulsePhase:2.1}),h.add(new Ge(new tn(.18*Te,.2*Te,.004*Te,24),u));const d=new ke({color:10392232,emissive:8409296,emissiveIntensity:0,roughness:.7});i.push({mat:d,dayColor:9274e3,nightColor:12759280,dayEmissive:4734036,nightEmissive:9459967,dayEI:0,nightEI:1.1});const f=.25*Te,g=new tn(.024*Te,.055*Te,f,10,8);g.translate(0,f*.5,0),h.add(new Ge(g,d));const x=new un(.13*Te,12,8);x.scale(1.25,.35,1.25),x.translate(0,f*.96,0),h.add(new Ge(x,d));const m=340,p=new tn(.0014*Te,5e-4*Te,1,4,1);p.translate(0,-.5,0);const _=new ke({color:14076140,emissive:15120639,emissiveIntensity:0,roughness:.28,transparent:!0,opacity:.92});i.push({mat:_,dayColor:14669034,nightColor:16777215,dayEmissive:12560604,nightEmissive:14456575,dayEI:0,nightEI:2.35,pulsePhase:.2});const y=new yt(p,_,m);y.name="Pandora_TreeOfSouls_Filaments";const v=new jt;for(let T=0;T<m;T++){const w=H(T,4,17)*Math.PI*2,A=(.015+Math.sqrt(H(T,8,11))*.135)*Te,E=(.08+H(T,3,19)*.13)*Te;v.position.set(Math.cos(w)*A,f*.95,Math.sin(w)*A),v.rotation.set((H(T,1,5)-.5)*.14,w,(H(T,2,7)-.5)*.14),v.scale.set(1,E,1),v.updateMatrix(),y.setMatrixAt(T,v.matrix)}return y.instanceMatrix.needsUpdate=!0,h.add(y),{group:r,anchorDir:a.normal,anchorPos:a.pos}}function Yy(s,e,t,n,i,o,a){const r=Hi(e.capDir),l=new Lt;l.name="Pandora_Landmark_HallelujahMountains";const c=Da(),h=new ke({vertexColors:!0,roughnessMap:c.roughnessMap,bumpMap:c.bumpMap,bumpScale:.05,emissive:404528,emissiveIntensity:0,roughness:.86,metalness:.06});i.push({mat:h,dayColor:16777215,nightColor:6455448,dayEmissive:795668,nightEmissive:669766,dayEI:0,nightEI:.52});const u=new gn({color:new te(.85,.96,1),transparent:!0,opacity:.56,side:Dt,depthWrite:!1});i.push({mat:u,dayColorRGB:[.82,.95,1],nightColorRGB:[.42,1.75,2.3],isWaterfall:!0});const d=[],f=32;for(let m=0;m<f;m++){const p=m===0?0:(.03+Math.sqrt(H(m,4,11))*.14)*Mt,_=m*2.39996+H(m,7,3)*.45,y=(m===0?.24:.078+H(m,9,2)*.21)*Te,v=Zs(s,r,Math.cos(_)*p,Math.sin(_)*p,y,t,n),T=(m===0?.095:.036+H(m,2,5)*.056)*Te,w=T*(.72+H(m,5,8)*.45),A=(m===0?.145:.052+H(m,6,1)*.082)*Te,E=zy(m+1,T,w,A),M=new Ge(E,h);M.position.copy(v.pos),M.quaternion.setFromUnitVectors(En,v.normal),M.rotateY(H(m,1,8)*Math.PI*2),M.castShadow=m<16,M.receiveShadow=!0,l.add(M),d.push({pos:v.pos,normal:v.normal,rx:T,rz:w,h:A,alt:y});for(let S=0;S<7;S++){const C=H(m,S,14)*Math.PI*2,D=.25+H(m,S,2)*.55,N=new b(Math.cos(C)*T*D,-A*.34,Math.sin(C)*w*D).applyQuaternion(M.quaternion);a.push({pos:v.pos.clone().add(N),normal:v.normal,length:(.016+H(m,S,8)*.036)*Te})}if(m<15){const S=y+.015*Te,C=(.0065+H(m,12,4)*.0075)*Te,D=new cs(C,S,2,10),N=D.attributes.position;for(let I=0;I<N.count;I++){const O=(N.getY(I)+S*.5)/S;N.setZ(I,Math.sin((1-O)*Math.PI*.5)*.014*Te)}D.computeVertexNormals();const R=H(m,3,6)*Math.PI*2,U=new ct().setFromUnitVectors(En,v.normal),z=new b(Math.cos(R)*T*.72,0,Math.sin(R)*w*.72).applyQuaternion(U),B=new Ge(D,u);B.position.copy(v.pos).add(z).addScaledVector(v.normal,-S*.5+A*.16),B.quaternion.copy(U),B.rotateY(R+Math.PI*.5),l.add(B),o.push({mesh:B,material:u,phase:m*1.17})}}const g=new ke({color:3889196,emissive:59600,emissiveIntensity:0,roughness:.55});i.push({mat:g,dayColor:3889196,nightColor:940132,dayEmissive:1718294,nightEmissive:1114072,dayEI:0,nightEI:1.35});const x=[];for(let m=0;m<f;m++){const p=d[m];let _=-1,y=.25*Te;for(let v=m+1;v<f;v++){const T=d[v],w=p.pos.distanceTo(T.pos);w>(p.rx+T.rx)*.85&&w<y&&(y=w,_=v)}if(_>=0){const v=d[_],T=p.pos.clone().add(v.pos).multiplyScalar(.5);T.add(T.clone().normalize().multiplyScalar(-y*.18));const w=new ii([p.pos.clone(),T,v.pos.clone()]);x.push(new ri(w,10,.0014*Te,5,!1).toNonIndexed())}}if(x.length>0){const m=new Ge(Ct(x,!1),g);m.name="Pandora_Hallelujah_VineBridges",l.add(m)}return{group:l,islandsData:d,anchorDir:r.upDir,anchorPos:r.upDir.clone().multiplyScalar(s)}}function jy(s,e,t,n,i,o){const a=Hi(e.capDir),r=new Lt;r.name="Pandora_Landmark_IkranRookery";const l=Da(),c=new ke({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:407620,emissiveIntensity:0,roughness:.88});i.push({mat:c,dayColor:16777215,nightColor:6453906,dayEmissive:1058840,nightEmissive:672850,dayEI:0,nightEI:.42});const h=[];return[[-.08*Mt,-.05*Mt,.08*Mt,.05*Mt,.21*Te,.015*Te],[-.06*Mt,.07*Mt,.07*Mt,-.06*Mt,.24*Te,.016*Te],[-.1*Mt,.01*Mt,.02*Mt,.09*Mt,.17*Te,.013*Te],[.01*Mt,-.09*Mt,.09*Mt,.02*Mt,.18*Te,.013*Te],[-.09*Mt,-.02*Mt,.05*Mt,.07*Mt,.15*Te,.012*Te],[-.04*Mt,-.08*Mt,.08*Mt,-.02*Mt,.16*Te,.011*Te],[-.07*Mt,.04*Mt,.03*Mt,-.07*Mt,.19*Te,.012*Te],[-.03*Mt,.08*Mt,.09*Mt,.06*Mt,.14*Te,.011*Te]].forEach(([d,f,g,x,m,p],_)=>{const{geo:y,curve:v,apex:T}=Ah(s,a,d,f,g,x,m,p,10+_,t,n),w=new Ge(y,c);w.name=`Pandora_IkranRookery_Arch_${_+1}`,r.add(w),h.push({apex:T,normal:T.clone().normalize()});for(let A=0;A<14;A++){const E=v.getPoint(.2+A/13*.6),M=E.clone().normalize();o.push({pos:E.addScaledVector(M,-p*.65),normal:M,length:(.014+H(A,_,19)*.026)*Te})}}),{group:r,archCenters:h,anchorDir:a.upDir,anchorPos:a.upDir.clone().multiplyScalar(s)}}function Ky(s,e,t,n,i){const o=Hi(e.capDir),a=new Lt;a.name="Pandora_Landmark_MushroomGeysers";const r=new ke({color:3880242,emissive:55528,emissiveIntensity:0,roughness:.88});i.push({mat:r,dayColor:3880242,nightColor:1980488,dayEmissive:926246,nightEmissive:59647,dayEI:0,nightEI:1.85});const l=14,c=new tn(.18,.95,1,9,1);c.translate(0,.5,0);const h=new yt(c,r,l);h.name="Pandora_Geyser_Vents";const u=[],d=new jt;for(let E=0;E<l;E++){const M=E/l*Math.PI*2+H(E,3,7)*.4,S=(.014+H(E,9,2)*.068)*Mt,C=Zs(s,o,Math.cos(M)*S,Math.sin(M)*S,-5e-4,t,n),D=(.008+H(E,2,11)*.006)*Te,N=(.014+H(E,5,13)*.012)*Te;d.position.copy(C.pos),d.quaternion.setFromUnitVectors(En,C.normal),d.scale.set(D,N,D),d.updateMatrix(),h.setMatrixAt(E,d.matrix),u.push({basePos:C.pos.clone().addScaledVector(C.normal,N*.95),normal:C.normal.clone(),phase:H(E,6,4)*Math.PI*2,maxHeight:(.065+H(E,8,9)*.055)*Te})}h.instanceMatrix.needsUpdate=!0,a.add(h);const f=22,g=l*f,x=new Float32Array(g*3),m=new Float32Array(g*3);for(let E=0;E<g;E++)m[E*3]=.78,m[E*3+1]=.94,m[E*3+2]=1;const p=new Tt;p.setAttribute("position",new bt(x,3)),p.setAttribute("color",new bt(m,3));const _=document.createElement("canvas");_.width=64,_.height=64;const y=_.getContext("2d"),v=y.createRadialGradient(32,32,2,32,32,32);v.addColorStop(0,"rgba(255, 255, 255, 0.85)"),v.addColorStop(.45,"rgba(180, 245, 255, 0.42)"),v.addColorStop(1,"rgba(0, 0, 0, 0.0)"),y.fillStyle=v,y.fillRect(0,0,64,64);const T=new xn(_);T.needsUpdate=!0;const w=new Ei({size:5.5,map:T,vertexColors:!0,transparent:!0,opacity:.48,depthWrite:!1,blending:Dn,sizeAttenuation:!0}),A=new Ai(p,w);return A.name="Pandora_Geyser_Plumes",A.frustumCulled=!1,a.add(A),{group:a,geyserEmitters:u,plumeGeo:p,plumeMat:w,puffsPerGeyser:f,anchorDir:o.upDir,anchorPos:o.upDir.clone().multiplyScalar(s)}}function Zy(s,e,t,n){const i=new Lt;i.name="Pandora_Inland_Lakes_And_Lilies";const o=[],a=[],r=[],l=[],c=new jt;Br.forEach((w,A)=>{const E=Hi(w.dir),M=s+w.waterElev,S=8,C=20,D=[],N=[];for(let U=0;U<=S;U++){const B=U/S*w.angRad*.82;for(let I=0;I<=C;I++){const O=I/C*Math.PI*2,j=E.upDir.clone().addScaledVector(E.e1,Math.cos(O)*B).addScaledVector(E.e2,Math.sin(O)*B).normalize();D.push(j.x*M,j.y*M,j.z*M)}}for(let U=0;U<S;U++)for(let z=0;z<C;z++){const B=U*(C+1)+z,I=B+(C+1);N.push(B,B+1,I,B+1,I+1,I)}const R=new Tt;R.setAttribute("position",new Kt(D,3)),R.setIndex(N),R.computeVertexNormals(),o.push(R.toNonIndexed());for(let U=0;U<108;U++){const z=H(U,A+3,19)*Math.PI*2,B=Math.sqrt(H(U,A+7,11))*w.angRad*.72,I=E.upDir.clone().addScaledVector(E.e1,Math.cos(z)*B).addScaledVector(E.e2,Math.sin(z)*B).normalize(),O=(.0045+H(U,A+1,5)*.006)*Te;c.position.copy(I).multiplyScalar(M+18e-5),c.quaternion.setFromUnitVectors(En,I),c.rotateY(H(U,2,9)*Math.PI*2),c.scale.set(O,O,O),c.updateMatrix(),a.push(c.matrix.clone());const j=O*.65;c.position.copy(I).multiplyScalar(M+38e-5),c.scale.set(j,j,j),c.updateMatrix(),U%2===0?r.push(c.matrix.clone()):l.push(c.matrix.clone())}});const h=new ke({color:955050,emissive:35e3,emissiveIntensity:0,roughness:.08,metalness:.62,transparent:!0,opacity:.88,depthWrite:!1});n.push({mat:h,dayColor:955050,nightColor:279638,dayEmissive:546924,nightEmissive:39116,dayEI:0,nightEI:1.05});const u=new Ge(Ct(o,!1),h);u.name="Pandora_Global_Inland_Lakes",i.add(u);const d=new tn(1,.92,.08,12,1,!1,.25,Math.PI*1.85);d.translate(0,.04,0);const f=new ke({color:2387512,emissive:55448,emissiveIntensity:0,roughness:.52});n.push({mat:f,dayColor:2387512,nightColor:803904,dayEmissive:1062936,nightEmissive:57498,dayEI:0,nightEI:1.35,pulsePhase:1.3});const g=new yt(d,f,a.length);g.name="Pandora_Giant_WaterLilies_Pads",g.frustumCulled=!1,a.forEach((w,A)=>g.setMatrixAt(A,w)),g.instanceMatrix.needsUpdate=!0,i.add(g);const x=Ff(),m=new ke({color:14184610,emissive:16726200,emissiveIntensity:0,roughness:.35}),p=new ke({color:5425368,emissive:62975,emissiveIntensity:0,roughness:.35});n.push({mat:m,dayColor:14184610,nightColor:16732872,dayEmissive:4726840,nightEmissive:16723632,dayEI:0,nightEI:2.35,pulsePhase:.4}),n.push({mat:p,dayColor:5425368,nightColor:3735551,dayEmissive:1853520,nightEmissive:62975,dayEI:0,nightEI:2.35,pulsePhase:2});const _=new yt(x,m,r.length);_.name="Pandora_Giant_WaterLilies_PinkFlowers",_.frustumCulled=!1,r.forEach((w,A)=>_.setMatrixAt(A,w)),_.instanceMatrix.needsUpdate=!0;const y=new yt(x,p,l.length);y.name="Pandora_Giant_WaterLilies_TurqFlowers",y.frustumCulled=!1,l.forEach((w,A)=>y.setMatrixAt(A,w)),y.instanceMatrix.needsUpdate=!0,i.add(_,y);const v=[],T=el();return Br.forEach((w,A)=>{const E=new $r(new $s(w.angRad*s*.78,28),{textureWidth:256,textureHeight:256,waterNormals:T,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:683130,distortionScale:.36,size:3,clipBias:.002,alpha:.88,fog:!0});E.name=`Pandora_Inland_Lake_Water_${A}`,E.position.copy(w.dir).multiplyScalar(s+w.waterElev+18e-5),E.quaternion.setFromUnitVectors(new b(0,0,1),w.dir),E.visible=!1,i.add(E),v.push({water:E,centerLocal:E.position.clone(),isOceanSurface:!1})}),{group:i,lakeWaters:v}}function $y(s){const e=s.localRadius,t=s.capLocalDir?s.capLocalDir.clone().normalize():new b(0,1,0),n=new ct().setFromUnitVectors(En,t),i=tl([t.x,t.y,t.z]),o={qCap:n,sphereLandmarks:i},a=new Lt;a.name="Pandora_Global_360_World";const r=[],l=(be,je,kt)=>fi(be,je,kt,n,i,4),c=new un(e,192,128),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),f=new te(270648),g=new te(2274738),x=new te(14208416),m=new te(2911794),p=new te(9213536),_=new te(1793065),y=new te(3889190),v=new te(3817024),T=new te(1841692),w=new te,A=new b;for(let be=0;be<u;be++){A.set(h.getX(be),h.getY(be),h.getZ(be)).normalize();const{cont:je,highlandRidge:kt,ashFactor:dt,reefFactor:Wt,borderMountain:Mn,elev:en,nation:Xt}=fi(A.x,A.y,A.z,n,i,4);if(h.setXYZ(be,A.x*(e+en),A.y*(e+en),A.z*(e+en)),je<=0){const It=Math.max(X.smoothstep(je,-.24,0),Wt*.78);w.copy(f).lerp(g,It)}else if(Xt==="water"){const It=X.smoothstep(je,.015,.055);w.copy(x).lerp(m,It)}else{const It=Yt(A.x*22+3,A.y*22,A.z*22)*.5+.5;w.copy(p).lerp(_,X.smoothstep(je,0,.075)),w.lerp(y,It*.52);const St=Math.min(.92,kt*3.8+Mn*.85);St>.02&&w.lerp(v,St),(dt>.05||Xt==="ash")&&w.lerp(T,Xt==="ash"?.94:Math.min(1,dt*1.15))}d[be*3]=w.r,d[be*3+1]=w.g,d[be*3+2]=w.b}c.setAttribute("color",new bt(d,3)),c.computeVertexNormals();const E=Jr(),M=el(),S=Vy(),C=Wy(n,i),D=new ke({map:S,roughnessMap:E.roughnessMap,bumpMap:E.bumpMap,bumpScale:.055,vertexColors:!0,emissiveMap:C,emissive:new te(1,1,1),emissiveIntensity:0,roughness:.88,metalness:.04}),N=bh(D,{mode:"pandora",worldRadius:e*157.5,peakStart:4.5,peakEnd:9.8,shoreBand:.65,detailTex:E.map});r.push({mat:D,dayColor:16777215,nightColor:3885146,dayEmissive:16777215,nightEmissive:16777215,dayEI:0,nightEI:1.25});const R=new Ge(c,D);R.name="Pandora_Global_Terrain_360",R.userData.splatUniforms=N,R.receiveShadow=!0,a.add(R);const U=M?M.clone():null;U&&(U.repeat.set(36,18),U.needsUpdate=!0);const z=new ke({color:754846,normalMap:U,normalScale:new Ue(.32,.32),emissive:35512,emissiveIntensity:0,roughness:.08,metalness:.58,transparent:!0,opacity:.72,depthWrite:!1,side:Dt});r.push({mat:z,dayColor:754846,nightColor:209478,dayEmissive:284780,nightEmissive:35e3,dayEI:0,nightEI:.72});const B=new Ge(new un(e,112,72),z);B.name="Pandora_Global_Crystal_Ocean",B.receiveShadow=!0,a.add(B);const I=wt[6].capDir.clone().normalize(),O=new $r(new $s(e*.048,36),{textureWidth:256,textureHeight:256,waterNormals:M,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:957112,distortionScale:.45,size:4,clipBias:.002,alpha:.9,fog:!0});O.name="Pandora_Metkayina_Reflective_Water",O.position.copy(I).multiplyScalar(e+25e-5),O.quaternion.setFromUnitVectors(new b(0,0,1),I),O.visible=!1,a.add(O);const j=Ty(e,o),J=[.011*Te,.007*Te,.008*Te,.0085*Te,.008*Te,.0075*Te,.0075*Te],{waterMesh:ne,bankMesh:ye,waterMat:Q,bankMat:de}=Hy(j,J);a.add(ne,ye);const xe=[{waterMat:Q,bankMat:de,phase:.4}],{group:$,lakeWaters:ae}=Zy(e,n,i,r);a.add($);const me=[{water:O,centerLocal:O.position.clone(),isOceanSurface:!0},...ae],re=[],Me=[],V=new jt,Re=Xy(e,wt[0],n,i,r),k=Yy(e,wt[1],n,i,r,Me,re),it=jy(e,wt[2],n,i,r,re),ge=qy(e,wt[3],n,i,r),Ne=Ky(e,wt[4],n,i,r),Be=wy(e,wt[5],l,r),rt=Ey(e,wt[6],l,r);a.add(Re.group,k.group,it.group,ge.group,Ne.group,Be.group,rt.group);const Ve=Hi(wt[0].capDir),F=Da(),L=new ke({vertexColors:!0,roughnessMap:F.roughnessMap,bumpMap:F.bumpMap,bumpScale:.045,roughness:.88}),ee=[...it.archCenters];[[-.02*Mt,.05*Mt,.07*Mt,-.04*Mt,.14*Te,.011*Te],[-.07*Mt,-.03*Mt,.03*Mt,.07*Mt,.13*Te,.01*Te]].forEach(([be,je,kt,dt,Wt,Mn],en)=>{const{geo:Xt,apex:It}=Ah(e,Ve,be,je,kt,dt,Wt,Mn,30+en,n,i),St=new Ge(Xt,L);St.name=`Pandora_Valley_Arch_${en+1}`,a.add(St),ee.push({apex:It,normal:It.clone().normalize()})}),ee.push({apex:Re.anchorPos,normal:Re.anchorDir}),ee.push({apex:k.anchorPos,normal:k.anchorDir});const ve=new tn(34e-5*Te,12e-5*Te,1,4,1);ve.translate(0,-.5,0);const le=new ke({color:3894837,emissive:2293720,emissiveIntensity:0,roughness:.42});r.push({mat:le,dayColor:3894837,nightColor:59647,dayEmissive:1719834,nightEmissive:2162648,dayEI:0,nightEI:1.95,pulsePhase:.9});const ce=new yt(ve,le,re.length);ce.name="Pandora_Global_Hanging_Vines",ce.frustumCulled=!1,re.forEach((be,je)=>{V.position.copy(be.pos),V.quaternion.setFromUnitVectors(En,be.normal),V.scale.set(1,be.length,1),V.updateMatrix(),ce.setMatrixAt(je,V.matrix)}),ce.instanceMatrix.needsUpdate=!0,a.add(ce);const Ie=[],Se=[],ze=[],xt=[],Ae=[],Fe=[],st=[],ht=[],qe=[],pt=[],ut=[],vt=[],K=[],Pe=[],fe=[],_e=[],Oe=[],He=[],Ye=[],Nt=[],Ft=[],mt=[],dn=new te,mn=[7252044,3902540,5023330,9348170,3972738,3112256],vn=be=>{const je=Math.floor(be*mn.length)%mn.length;return dn.setHex(mn[je]),dn.offsetHSL((be-.5)*.04,0,(be-.5)*.14),dn.clone()},ot=be=>(dn.setRGB(.86+be*.24,.92+(1-Math.abs(be-.5)*2)*.22,.8+(1-be)*.24),dn.clone());for(let be=0;be<64;be++){const je=k.islandsData[be%k.islandsData.length],kt=H(be,2,13)*Math.PI*2,dt=Math.sqrt(H(be,5,2))*.52,Wt=new b(Math.cos(kt)*je.rx*dt,je.h*.28,Math.sin(kt)*je.rz*dt),Mn=new ct().setFromUnitVectors(En,je.normal);Wt.applyQuaternion(Mn);const en=je.pos.clone().add(Wt),Xt=(.018+H(be,8,4)*.022)*Te,It=Xt*.65;V.position.copy(en),V.quaternion.copy(Mn),V.rotateY(H(be,9,9)*Math.PI*2),V.scale.set(Xt,Xt,Xt),V.updateMatrix(),Ie.push(V.matrix.clone()),Se.push(vn(H(be,3,5))),V.position.copy(en).addScaledVector(je.normal,Xt*.92),V.scale.set(It,It,It),V.updateMatrix(),ze.push(V.matrix.clone()),(be%2===0?xt:Ae).push(V.matrix.clone())}const Ot=(1+Math.sqrt(5))*.5,Sn=16e3,Ln=44e3,Pt=new b,_n=new b,cn=new ct,fn=new b,Jt=new b,nn=new b,Bt=[0,1,2,3,4].map(be=>Hi(wt[be].capDir));for(let be=0;be<Ln;be++){if(be<Sn){const _t=be%Bt.length,Xn=Bt[_t],On=2*Math.PI*be/Ot,Gn=_t===0?.36:.24,Cn=Math.sqrt((be+.5)/Sn)*Gn;Pt.copy(Xn.upDir).addScaledVector(Xn.e1,Math.cos(On)*Cn).addScaledVector(Xn.e2,Math.sin(On)*Cn).normalize()}else{const _t=be-Sn,On=1-_t*.7548776662%1*2,Gn=Math.sqrt(Math.max(0,1-On*On)),Cn=2*Math.PI*_t/Ot+(H(be,3,17)-.5)*.028;Pt.set(Math.cos(Cn)*Gn,On,Math.sin(Cn)*Gn).normalize()}const{cont:je,highlandRidge:kt,ashFactor:dt,forestClump:Wt,lakeBlend:Mn,elev:en,biome:Xt,nation:It}=fi(Pt.x,Pt.y,Pt.z,n,i,3),St=H(be,11,29),tt=H(be,19,7),qt=H(be,23,13);if(It==="ash"||dt>.22)continue;if(It==="water"){if(je<=.002){if(Xt==="reef"&&mt.length<520&&St<.14&&en>-.025){_n.copy(Pt).multiplyScalar(e+en-2e-4),cn.setFromUnitVectors(En,Pt),V.position.copy(_n),V.quaternion.copy(cn),V.rotateY(tt*Math.PI*2);const _t=(.007+tt*.013)*Te;V.scale.set(_t,_t*.45,_t*.85),V.updateMatrix(),mt.push(V.matrix.clone())}}else if(je>.005){if(_n.copy(Pt).multiplyScalar(e+en),cn.setFromUnitVectors(En,Pt),pt.length<4200&&St<.62){const _t=.017*Te*(.65+tt*1.15);V.position.copy(_n),V.quaternion.copy(cn),V.rotateY(tt*Math.PI*2),V.rotateX((qt-.5)*.14),V.scale.set(_t,_t,_t),V.updateMatrix(),pt.push(V.matrix.clone()),ut.push(ot(qt))}else if(Pe.length<3800&&tt<.45){const _t=(.007+St*.008)*Te;V.position.copy(_n),V.quaternion.copy(cn),V.rotateY(St*Math.PI*2),V.scale.set(_t,_t,_t),V.updateMatrix(),Pe.push(V.matrix.clone()),fe.push(vn(St))}else if(vt.length<5200&&qt<.35){const _t=(.006+tt*.007)*Te;V.position.copy(_n),V.quaternion.copy(cn),V.rotateY(qt*Math.PI*2),V.scale.set(_t,_t,_t),V.updateMatrix(),vt.push(V.matrix.clone()),K.push(vn(tt))}}continue}if(Xt==="lake"||Mn>.35||je<=0||Pt.distanceTo(wt[3].capDir)<.036*Mt)continue;if(_n.copy(Pt).multiplyScalar(e+en),cn.setFromUnitVectors(En,Pt),Xt==="canyon"&&Ft.length<340&&kt>.042&&St<.24){V.position.copy(Pt).multiplyScalar(e+en-.001*Te),V.quaternion.copy(cn),V.rotateY(tt*Math.PI*2);const _t=(.008+tt*.011)*Te,Xn=(.036+qt*.052)*Te;V.scale.set(_t,Xn,_t),V.updateMatrix(),Ft.push(V.matrix.clone());continue}const gi=Wt>-.04,Bi=je<.065;if(gi||Bi&&St<.45){const _t=.5+Math.pow(tt,1.3)*1.9,Xn=(qt-.5)*.16,On=(H(be,5,31)-.5)*.16,Gn=vn(qt),Cn=ot(qt);if(V.position.copy(_n),V.quaternion.copy(cn),V.rotateY(tt*Math.PI*2),V.rotateX(Xn),V.rotateZ(On),Bi&&St<.55&&pt.length<4200){const wn=.019*Te*_t;V.scale.set(wn,wn,wn),V.updateMatrix(),pt.push(V.matrix.clone()),ut.push(Cn)}else{const wn=Math.floor(St*100)%3;if(wn===0&&Ie.length<4200){const yn=.024*Te*_t,oo=yn*(.58+qt*.22);V.scale.set(yn,yn,yn),V.updateMatrix(),Ie.push(V.matrix.clone()),Se.push(Gn),V.position.copy(_n).addScaledVector(Pt,yn*.9),V.scale.set(oo,oo,oo),V.updateMatrix(),ze.push(V.matrix.clone()),(Ie.length%2===0?xt:Ae).push(V.matrix.clone())}else if(wn===1&&Fe.length<4800){const yn=.032*Te*_t;V.scale.set(yn*.9,yn*1.35,yn*.9),V.updateMatrix(),Fe.push(V.matrix.clone()),st.push(Cn)}else if(ht.length<4500){const yn=.022*Te*_t;V.scale.set(yn,yn,yn),V.updateMatrix(),ht.push(V.matrix.clone()),qe.push(Cn)}else if(pt.length<4200){const yn=.02*Te*_t;V.scale.set(yn,yn,yn),V.updateMatrix(),pt.push(V.matrix.clone()),ut.push(Cn)}}const Ia=Math.abs(Pt.x)<.85?En:new b(0,0,1);if(Jt.crossVectors(Pt,Ia).normalize(),nn.crossVectors(Pt,Jt).normalize(),vt.length<6200&&tt<.58){fn.copy(Pt).addScaledVector(Jt,(St-.5)*.0025).addScaledVector(nn,(qt-.5)*.0025).normalize();const wn=(.0075+qt*.009)*Te;V.position.copy(fn).multiplyScalar(e+en),V.quaternion.setFromUnitVectors(En,fn),V.rotateY(tt*Math.PI*2),V.scale.set(wn,wn,wn),V.updateMatrix(),vt.push(V.matrix.clone()),K.push(vn(tt))}if(Pe.length<4400&&qt>.48){fn.copy(Pt).addScaledVector(Jt,(qt-.5)*.003).addScaledVector(nn,(St-.5)*.003).normalize();const wn=(.009+St*.011)*Te;V.position.copy(fn).multiplyScalar(e+en),V.quaternion.setFromUnitVectors(En,fn),V.rotateY(St*Math.PI*2),V.scale.set(wn,wn,wn),V.updateMatrix(),Pe.push(V.matrix.clone()),fe.push(vn(St))}if(_e.length<2200&&St>.78){fn.copy(Pt).addScaledVector(Jt,(tt-.5)*.003).addScaledVector(nn,(qt-.5)*.003).normalize();const wn=(.0065+tt*.01)*Te;V.position.copy(fn).multiplyScalar(e+en),V.quaternion.setFromUnitVectors(En,fn),V.rotateY(qt*Math.PI*2),V.scale.set(wn,wn,wn),V.updateMatrix(),_e.push(V.matrix.clone())}}else if(Oe.length+He.length<2400&&St<.25){const _t=(.0052+tt*.0062)*Te;V.position.copy(_n),V.quaternion.copy(cn),V.rotateY(qt*Math.PI*2),V.scale.set(_t,_t,_t),V.updateMatrix(),(be%2===0?Oe:He).push(V.matrix.clone())}else if(Ye.length+Nt.length<1050&&St>.84){const _t=(.01+tt*.015)*Te;V.position.copy(_n),V.quaternion.copy(cn),V.rotateY(qt*Math.PI*2),V.scale.set(_t,_t,_t),V.updateMatrix(),(be%2===0?Ye:Nt).push(V.matrix.clone())}}const Ut=Hi(wt[4].capDir);for(let be=0;be<250;be++){const je=Math.floor(be/4),kt=H(je,4,17)*Math.PI*2,dt=Math.sqrt(H(je,11,3))*(.095*Mt),Wt=Math.cos(kt)*dt+(H(be,2,9)-.5)*(.012*Mt),Mn=Math.sin(kt)*dt+(H(be,7,5)-.5)*(.012*Mt),en=Zs(e,Ut,Wt,Mn,0,n,i),Xt=(.018+H(be,9,6)*.026)*Te;V.position.copy(en.pos),V.quaternion.setFromUnitVectors(En,en.normal),V.rotateY(H(be,5,1)*Math.PI*2),V.scale.set(Xt,Xt,Xt),V.updateMatrix(),(je%2===0?Ye:Nt).push(V.matrix.clone())}for(let be=0;be<420;be++){const je=j[be%j.length],kt=je[Math.floor(H(be,5,3)*je.length)],dt=kt.phi+(be%2===0?1:-1)*(.008+H(be,7,1)*.026)*Te,Wt=X.clamp(kt.theta+(H(be,3,8)-.5)*.018*Te,.001,Math.PI-.001),Mn=Math.sin(Wt),en=fi(Mn*Math.cos(dt),Math.cos(Wt),Mn*Math.sin(dt),n,i,3).elev,Xt=Ay(e,Wt,dt,en);V.position.copy(Xt.pos),V.quaternion.setFromUnitVectors(En,Xt.normal),V.rotateY(H(be,1,6)*Math.PI*2);const It=(.008+H(be,4,9)*.01)*Te;V.scale.set(It,It,It),V.updateMatrix(),vt.push(V.matrix.clone()),K.push(vn(H(be,2,3)))}const Zt=yh(),P=If(),Y=Zc(P.canopy.map),se=Zc(P.palm.map),he=new ci(new b(0,0,0),e+1.8),Z=(be,je,kt,dt,Wt=null,{castShadow:Mn=!1,receiveShadow:en=!1,customDepthMaterial:Xt=null}={})=>{je.boundingSphere=he;const It=new yt(je,kt,Math.max(1,dt.length));return It.name=be,It.frustumCulled=!1,It.castShadow=Mn,It.receiveShadow=en,Xt&&(It.customDepthMaterial=Xt),dt.forEach((St,tt)=>{It.setMatrixAt(tt,St),Wt&&Wt[tt]&&It.setColorAt(tt,Wt[tt])}),It.instanceMatrix.needsUpdate=!0,Wt&&It.instanceColor&&(It.instanceColor.needsUpdate=!0),a.add(It),It};if(Ft.length>0){const be=new ke({vertexColors:!0,roughnessMap:F.roughnessMap,bumpMap:F.bumpMap,bumpScale:.045,roughness:.88});Z("Pandora_Global_Canyon_Spires",Gy(7),be,Ft,null,{castShadow:!0,receiveShadow:!0})}if(mt.length>0){const be=new ke({color:4943976,emissive:61695,emissiveIntensity:0,roughness:.72});r.push({mat:be,dayColor:4943976,nightColor:542818,dayEmissive:1589304,nightEmissive:59647,dayEI:0,nightEI:1.75,pulsePhase:1.2}),Z("Pandora_Global_Coral_Reefs",new Ts(1,0),be,mt)}if(_e.length>0){const be=new ke({vertexColors:!0,roughnessMap:F.roughnessMap,bumpMap:F.bumpMap,bumpScale:.035,roughness:.9});Z("Pandora_Global_Mossy_Rocks",Uy(),be,_e,null,{castShadow:!0,receiveShadow:!0})}const Ce=new ke({color:6441782,map:Zt.map,roughnessMap:Zt.roughnessMap,bumpMap:Zt.bumpMap,bumpScale:.04,roughness:.92});r.push({mat:Ce,dayColor:6441782,nightColor:2238012,dayEmissive:0,nightEmissive:662570,dayEI:0,nightEI:.16});const De=new tn(.055,.18,1,6,1);De.translate(0,.5,0),Z("Pandora_Global_Tree_Trunks",De,Ce,Ie,null,{castShadow:!0,receiveShadow:!0});const{outer:Qe,under:Je}=Of(),at=new ke({color:16777215,map:P.canopy.map,roughnessMap:P.canopy.roughnessMap,emissiveMap:P.canopy.emissiveMap,emissive:537664,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:at,dayColor:13954004,nightColor:1793118,dayEmissive:667158,nightEmissive:562344,dayEI:0,nightEI:.85}),Z("Pandora_Global_Canopy_Tops",Qe,at,ze,Se,{castShadow:!0,receiveShadow:!0,customDepthMaterial:Y});const ft=new ke({color:3901e3,map:P.canopy.map,roughnessMap:P.canopy.roughnessMap,emissiveMap:P.canopy.emissiveMap,emissive:65512,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:ft,dayColor:3901e3,nightColor:1108216,dayEmissive:1456156,nightEmissive:65512,dayEI:0,nightEI:2.2,pulsePhase:0}),Z("Pandora_Global_Canopy_Under_Turquoise",Je,ft,xt,null,{castShadow:!1,receiveShadow:!0});const G=new ke({color:4556866,map:P.canopy.map,roughnessMap:P.canopy.roughnessMap,emissiveMap:P.canopy.emissiveMap,emissive:16720544,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:G,dayColor:4556866,nightColor:16728760,dayEmissive:1719320,nightEmissive:16720544,dayEI:0,nightEI:2.15,pulsePhase:1.9}),Z("Pandora_Global_Canopy_Under_Magenta",Je,G,Ae,null,{castShadow:!1,receiveShadow:!0}),Z("Pandora_Global_Alien_Redwoods",Cy(),Ce,Fe,null,{castShadow:!0,receiveShadow:!0});const Le=new ke({color:16777215,map:P.canopy.map,roughnessMap:P.canopy.roughnessMap,emissiveMap:P.canopy.emissiveMap,emissive:51416,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:Le,dayColor:14216664,nightColor:3903136,dayEmissive:798236,nightEmissive:42168,dayEI:0,nightEI:.82}),Z("Pandora_Global_Alien_Redwoods_Canopy",Py(),Le,Fe,st,{castShadow:!0,receiveShadow:!0,customDepthMaterial:Y}),Z("Pandora_Global_Gnarled_Root_Trees",Ry(),Ce,ht,null,{castShadow:!0,receiveShadow:!0});const $e=new ke({color:16777215,map:P.canopy.map,roughnessMap:P.canopy.roughnessMap,emissiveMap:P.canopy.emissiveMap,emissive:9455871,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:$e,dayColor:14084820,nightColor:6451352,dayEmissive:1189400,nightEmissive:6830288,dayEI:0,nightEI:.85}),Z("Pandora_Global_Gnarled_Root_Canopy",Dy(),$e,ht,qe,{castShadow:!0,receiveShadow:!0,customDepthMaterial:Y}),Z("Pandora_Global_Alien_Palms",Iy(),Ce,pt,null,{castShadow:!0,receiveShadow:!0});const lt=new ke({color:16777215,map:P.palm.map,roughnessMap:P.palm.roughnessMap,emissiveMap:P.palm.emissiveMap,emissive:55464,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:lt,dayColor:14217432,nightColor:5022876,dayEmissive:1194008,nightEmissive:52392,dayEI:0,nightEI:.95}),Z("Pandora_Global_Alien_Palms_Fronds",Ly(),lt,pt,ut,{castShadow:!0,receiveShadow:!0,customDepthMaterial:se});const W=new ke({color:16777215,map:P.canopy.map,roughnessMap:P.canopy.roughnessMap,emissiveMap:P.canopy.emissiveMap,emissive:57514,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:W,dayColor:14085332,nightColor:1861214,dayEmissive:1192986,nightEmissive:55464,dayEI:0,nightEI:1.05,pulsePhase:1.1}),Z("Pandora_Global_Broadleaf_Shrubs",Ny(),W,Pe,fe,{castShadow:!1,receiveShadow:!0});const pe=new ke({color:16777215,map:P.fern.map,roughnessMap:P.fern.roughnessMap,emissiveMap:P.fern.emissiveMap,emissive:59548,emissiveIntensity:0,roughness:.66,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:pe,dayColor:14216920,nightColor:1600338,dayEmissive:1327646,nightEmissive:59558,dayEI:0,nightEI:1.25,pulsePhase:2.4}),Z("Pandora_Global_Giant_Ferns",Fy(),pe,vt,K,{castShadow:!1,receiveShadow:!0});const q=Ff(),we=new ke({color:8796822,emissive:12728575,emissiveIntensity:0,roughness:.45});r.push({mat:we,dayColor:8796822,nightColor:13650687,dayEmissive:3807298,nightEmissive:12071167,dayEI:0,nightEI:2.3,pulsePhase:.8}),Z("Pandora_Global_Flowers_Violet",q,we,Oe);const oe=new ke({color:13394984,emissive:16739866,emissiveIntensity:0,roughness:.45});r.push({mat:oe,dayColor:13394984,nightColor:16742946,dayEmissive:4989968,nightEmissive:16738324,dayEI:0,nightEI:2.35,pulsePhase:2.6}),Z("Pandora_Global_Flowers_Orange",q,oe,He);const Ee=ky(),ue=new ke({color:7357048,emissive:11024639,emissiveIntensity:0,roughness:.48});r.push({mat:ue,dayColor:7357048,nightColor:10631935,dayEmissive:3284024,nightEmissive:9973503,dayEI:0,nightEI:2.25,pulsePhase:1.5}),Z("Pandora_Global_Mushrooms_Violet",Ee,ue,Ye);const ie=new ke({color:10767974,emissive:16725672,emissiveIntensity:0,roughness:.48});r.push({mat:ie,dayColor:10767974,nightColor:16726186,dayEmissive:4332584,nightEmissive:16722072,dayEI:0,nightEI:2.2,pulsePhase:3.1}),Z("Pandora_Global_Mushrooms_NeonPink",Ee,ie,Nt);const Ze=2e3,Ke=1e3,Vt=Oy();Vt.boundingSphere=he;const hn=new ke({color:16777215,map:P.fern.map,roughnessMap:P.fern.roughnessMap,emissiveMap:P.fern.emissiveMap,emissive:57494,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:Dt});r.push({mat:hn,dayColor:13954002,nightColor:1465932,dayEmissive:1062426,nightEmissive:56224,dayEI:0,nightEI:.92,pulsePhase:.9});const et=new yt(Vt,hn,Ze);et.name="Pandora_Ground_Clutter_Grass",et.frustumCulled=!1,et.castShadow=!1,et.receiveShadow=!0,et.visible=!1,et.userData.manualClutterLod=!0,et.setColorAt(0,new te(16777215));const Tn=By();Tn.boundingSphere=he;const Ht=new ke({color:16777215,roughnessMap:F.roughnessMap,bumpMap:F.bumpMap,bumpScale:.03,roughness:.92}),Et=new yt(Tn,Ht,Ke);Et.name="Pandora_Ground_Clutter_Pebbles",Et.frustumCulled=!1,Et.castShadow=!1,Et.receiveShadow=!0,Et.visible=!1,Et.userData.manualClutterLod=!0,Et.setColorAt(0,new te(16777215));const Kn=new nt().makeScale(0,0,0),si=new te(1,1,1);for(let be=0;be<Ze;be++)et.setMatrixAt(be,Kn),et.setColorAt(be,si);for(let be=0;be<Ke;be++)Et.setMatrixAt(be,Kn),Et.setColorAt(be,si);et.count=0,Et.count=0,a.add(et),a.add(Et),Q.userData.animatedEmissive=!0,de.userData.animatedEmissive=!0;for(let be=0;be<r.length;be++)r[be].mat.userData=r[be].mat.userData||{},r[be].mat.userData.animatedEmissive=!0;const Yi=new te,to=new te,Wf=new te(821410),Xf=new te(280664),qf=new te(2649668),Yf=new te(59647),jf=be=>{const je=fi(be.x,be.y,be.z,n,i,3),kt=je.cont<=0||je.lakeBlend>.35,dt=je.cont<=0?0:je.lakeBlend>.35?je.lakeWaterElev:-1;return{terrainElev:je.elev,waterElev:dt,hasWater:kt,nation:je.nation,forestFactor:je.forestFactor,waterFactor:je.waterFactor,ashFactor:je.ashFactor,reefFactor:je.reefFactor,biome:je.biome}},Kf=(be,je,kt=0)=>{const dt=X.smoothstep(-be,-.1,.04);for(let St=0;St<r.length;St++){const tt=r[St];if(tt.isWaterfall){const qt=.85+.15*Math.sin(je*3.8+St);tt.mat.color.setRGB(X.lerp(tt.dayColorRGB[0],tt.nightColorRGB[0]*qt,dt),X.lerp(tt.dayColorRGB[1],tt.nightColorRGB[1]*qt,dt),X.lerp(tt.dayColorRGB[2],tt.nightColorRGB[2]*qt,dt)),tt.mat.opacity=X.lerp(.52,.72,dt);continue}if(tt.dayColor!==void 0&&(Yi.setHex(tt.dayColor),to.setHex(tt.nightColor),tt.mat.color.copy(Yi).lerp(to,dt)),tt.dayEmissive!==void 0&&(Yi.setHex(tt.dayEmissive),to.setHex(tt.nightEmissive),tt.mat.emissive.copy(Yi).lerp(to,dt)),tt.dayEI!==void 0){const qt=tt.pulsePhase!==void 0?.9+.16*Math.sin(je*1.7+tt.pulsePhase):1;tt.mat.emissiveIntensity=X.lerp(tt.dayEI,tt.nightEI*qt,dt)}}const Wt=.85+.25*Math.sin(je*2);Q.color.copy(Wf).lerp(Xf,dt),Q.emissiveIntensity=X.lerp(0,1.15*Wt,dt),de.color.copy(qf).lerp(Yf,dt),de.emissiveIntensity=X.lerp(0,2.35*Wt,dt);const Mn=Ne.plumeGeo.attributes.position,en=Ne.plumeGeo.attributes.color,Xt=Ne.geyserEmitters,It=Ne.puffsPerGeyser;for(let St=0;St<Xt.length;St++){const tt=Xt[St];for(let qt=0;qt<It;qt++){const gi=St*It+qt,Bi=(je*.48+tt.phase+qt/It)%1,_t=Bi*tt.maxHeight,Xn=Math.sin(Bi*Math.PI)*.004*Te;Mn.setXYZ(gi,tt.basePos.x+tt.normal.x*_t+Math.cos(gi)*Xn,tt.basePos.y+tt.normal.y*_t,tt.basePos.z+tt.normal.z*_t+Math.sin(gi)*Xn);const On=X.lerp(.85,St%2===0?.2:.95,dt),Gn=X.lerp(.95,St%2===0?1.45:.45,dt),Cn=X.lerp(1,1.85,dt);en.setXYZ(gi,On,Gn,Cn)}}Mn.needsUpdate=!0,en.needsUpdate=!0,Ne.plumeMat.opacity=X.lerp(.32,.65,dt),U&&(U.offset.x=je*.014%1,U.offset.y=je*.009%1);for(let St=0;St<me.length;St++){const tt=me[St];tt.water.material?.uniforms?.time&&(tt.water.material.uniforms.time.value=je*.55)}Be.update(je,dt),rt.update(je,dt,kt)},no=.0011,io=21;let il="";const ji=new b,hi=new jt,Rs=new te,so=new te,Zf=(be,je,kt)=>{const dt=Math.abs(be),Wt=Math.abs(je),Mn=Math.abs(kt);if(dt>=Wt&&dt>=Mn){const Xt=be>=0?1:-1;return{face:be>=0?0:1,u:je*Xt/Math.max(1e-5,dt),v:kt/Math.max(1e-5,dt)}}if(Wt>=dt&&Wt>=Mn){const Xt=je>=0?1:-1;return{face:je>=0?2:3,u:be*Xt/Math.max(1e-5,Wt),v:kt/Math.max(1e-5,Wt)}}const en=kt>=0?1:-1;return{face:kt>=0?4:5,u:be*en/Math.max(1e-5,Mn),v:je/Math.max(1e-5,Mn)}},Ph=(be,je,kt,dt)=>(be===0?dt.set(1,je,kt):be===1?dt.set(-1,-je,kt):be===2?dt.set(je,1,kt):be===3?dt.set(-je,-1,kt):be===4?dt.set(je,kt,1):dt.set(-je,kt,-1),dt.normalize());return{group:a,terrainSplatUniforms:N,reflectiveWaters:me,waterfalls:Me,pulsingRivers:xe,archCenters:ee,riverPaths:j,landmarks:wt,samplerCtx:o,getFloorAndWaterAtDir:jf,updateDayNight:Kf,updateGroundClutter:(be,je,kt=0)=>{if(!be||!Number.isFinite(je)||je>=650||kt>.05){et.visible=!1,Et.visible=!1,il="";return}const dt=be.lengthSq();if(!Number.isFinite(dt)||dt<1e-6){et.visible=!1,Et.visible=!1;return}const{face:Wt,u:Mn,v:en}=Zf(be.x,be.y,be.z),Xt=Math.round(Mn/no),It=Math.round(en/no),St=`${Wt}_${Xt}_${It}`;if(St===il){et.visible=et.count>0,Et.visible=Et.count>0;return}il=St;let tt=0,qt=0;for(let gi=-io;gi<=io;gi++){const Bi=It+gi;for(let _t=-io;_t<=io;_t++){if(_t*_t+gi*gi>io*io)continue;const Xn=Xt+_t,On=H(Xn+5e3,Bi+5e3,Wt*17+3),Gn=H(Xn+5e3,Bi+5e3,Wt*31+11),Cn=H(Xn+5e3,Bi+5e3,Wt*47+23),Ia=(Xn+(On-.5)*.85)*no,wn=(Bi+(Gn-.5)*.85)*no;Ph(Wt,Ia,wn,ji);const yn=fi(ji.x,ji.y,ji.z,n,i,3);if(!Number.isFinite(yn.elev)||yn.cont<=.004||yn.lakeBlend>.35)continue;const oo=e+yn.elev,La=yn.nation==="ash"||yn.ashFactor>.25,jo=yn.nation==="water";if(!La&&tt<Ze&&(!jo||Cn<.42)){const Ko=(jo?.0014:.002+On*.0028)*Te;hi.position.copy(ji).multiplyScalar(oo),hi.quaternion.setFromUnitVectors(En,ji),hi.rotateY(Gn*Math.PI*2),hi.rotateX((Cn-.5)*.16),hi.scale.set(Ko*(.85+Gn*.35),Ko*(.8+Cn*.55),Ko*(.85+On*.35)),hi.updateMatrix(),et.setMatrixAt(tt,hi.matrix),jo?Rs.setHex(6600808).lerp(so.setHex(8965242),Cn):Rs.setHex(2059828).lerp(so.setHex(2659944),Gn).lerp(so.setHex(4882992),Cn*.35),et.setColorAt(tt,Rs),tt++}if(Cn<(La?.58:jo?.32:.42)&&qt<Ke){const Ko=(Gn-.5)*no*.35,$f=(On-.5)*no*.35;Ph(Wt,Ia+Ko,wn+$f,ji);const Na=(La?.0014+Gn*.0024:.0011+On*.0018)*Te;hi.position.copy(ji).multiplyScalar(oo-Na*.08),hi.quaternion.setFromUnitVectors(En,ji),hi.rotateY(On*Math.PI*2),hi.scale.set(Na,Na*(.75+Cn*.5),Na),hi.updateMatrix(),Et.setMatrixAt(qt,hi.matrix),La?Rs.setHex(2499622).lerp(so.setHex(3813936),Gn):jo?Rs.setHex(13155998).lerp(so.setHex(10131080),On):Rs.setHex(4475968).lerp(so.setHex(3168308),Gn*.65),Et.setColorAt(qt,Rs),qt++}}}et.count=tt,et.instanceMatrix.needsUpdate=!0,et.instanceColor&&(et.instanceColor.needsUpdate=!0),et.visible=tt>0,Et.count=qt,Et.instanceMatrix.needsUpdate=!0,Et.instanceColor&&(Et.instanceColor.needsUpdate=!0),Et.visible=qt>0},groundClutterMeshes:{grass:et,pebbles:Et}}}function Qy(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new xn(s);return n.needsUpdate=!0,n}const Bf=Qy();function dd(s,e,t=350){const n=e,i=1/3.5,o=s==="p2",a=new Lt;a.name=`${s}_Urban_AV_Traffic_System`;const r=(o?.0068:.0033)*i,l=new pn(r*.55,r*.34,r*1.85),c=new ke({color:1580068,roughness:.38,metalness:.85}),h=new yt(l,c,t),u=new pn(r*.58,r*.22,r*.55);u.translate(0,0,r*.92);const d=new gn({color:s==="p4"?new te(2.1,2.3,2.5):new te(1.35,1.7,1.88)}),f=new yt(u,d,t),g=new pn(r*.42,r*.16,r*3.8);g.translate(0,0,-r*2.55);const x=new gn({color:s==="p4"?new te(3.6,1.25,.25):new te(1.85,.56,.22),transparent:!0,opacity:.85}),m=new yt(g,x,t);for(const M of[h,f,m])M.frustumCulled=!1,M.castShadow=!1,M.receiveShadow=!1,M.geometry.boundingSphere=new ci(new b(0,0,0),n*1.28);a.add(h,f,m);const p=[],_=[new b(1,0,0),new b(0,0,1),new b(.707,0,.707),new b(-.707,0,.707)];for(let M=0;M<t;M++){const S=M%2===0,D=.038+M%7/6*.062+H(M,3,7)*.014,N=n+D;if(S){const R=(M>>1)%14,U=o?(.032+R/13*.185+(H(M,1,9)-.5)*.012)*.45:(.035+R*.034+(H(M,1,9)-.5)*.014)*i*1.2/3.2,z=R%2===0?1:-1,B=z*(.085+H(M,5,2)*.11)/Math.max(.04,Math.sin(U))*(o?.48:1/1.5);p.push({type:"ring",radius:N,theta:U,sinTheta:Math.sin(U),cosTheta:Math.cos(U),phi0:H(M,8,4)*Math.PI*2,omega:B,dir:z,bobAmp:(o?.006:.002+H(M,2,6)*.0025)*i,bobPhase:H(M,4,1)*Math.PI*2})}else{const R=M%_.length,U=o?.064*.45:.042*1.15/3.2,z=(Math.floor(M/8)%11-5)*U*i,B=_[R],I=new ct().setFromAxisAngle(B,z);o&&M%3===0&&I.premultiply(new ct().setFromAxisAngle(_[0],-.22*.45));const O=M%4===1?1:-1,j=o?.24*.45:.52*i*1.2/3.2,J=(H(M,6,3)*2-1)*j,ne=O*(o?.13+H(M,9,5)*.16:(.09+H(M,9,5)*.13)*1.25)*i/4.8;p.push({type:"corridor",radius:N,qPlane:I,s0:J,arcSpan:j,speed:ne,dir:O,bobAmp:(o?.005:.002+H(M,7,2)*.002)*i,bobPhase:H(M,3,4)*Math.PI*2})}}const y=new b,v=new b,T=new b,w=new b,A=new nt,E=new b;return{update(M){if(!(!a.parent||!a.parent.visible)){for(let S=0;S<t;S++){const C=p[S],D=Math.sin(M*2.2+C.bobPhase)*C.bobAmp,N=C.radius+D;if(C.type==="ring"){const U=C.phi0+C.omega*M,z=Math.cos(U),B=Math.sin(U);v.set(C.sinTheta*z,C.cosTheta,C.sinTheta*B).normalize(),y.copy(v).multiplyScalar(N),T.set(-C.dir*B,0,C.dir*z).normalize(),w.crossVectors(v,T).normalize(),T.crossVectors(w,v).normalize()}else{const U=C.arcSpan*2;let z=(C.s0+C.speed*M+C.arcSpan)%U;z<0&&(z+=U);const B=z-C.arcSpan,I=Math.sin(B),O=Math.cos(B);v.set(I,O,0).applyQuaternion(C.qPlane).normalize(),y.copy(v).multiplyScalar(N),T.set(C.dir*O,-C.dir*I,0).applyQuaternion(C.qPlane).normalize(),w.crossVectors(v,T).normalize()}let R=1;if(C.type==="corridor"){const U=Math.abs(Math.acos(X.clamp(v.y,-1,1)))/C.arcSpan;R=1-X.smoothstep(U,.85,1)}A.makeBasis(w,v,T),A.setPosition(y),R<.99&&(E.setScalar(Math.max(.01,R)),A.scale(E)),h.setMatrixAt(S,A),f.setMatrixAt(S,A),m.setMatrixAt(S,A)}h.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}},group:a}}function Jy(s){const e=[],t=[],n=[],i=[],o=[],a=(f,g)=>(f.material&&(f.material.userData=f.material.userData||{},f.material.userData.animatedEmissive=!0),{mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let r=0;s.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";r++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(a(f,r)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(a(f,r)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(a(f,r)):/NC_Neon_Sign_/.test(g)?i.push(a(f,r)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&o.push(a(f,r))});const l=f=>{if(f.length===0)return null;const g=new b;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const x=g.clone().normalize();return{parts:f,centroid:g,localUp:x}},c=[l(e),l(t)].filter(Boolean),h=new ct,u=new ct,d=new b;return{update(f,g=1){c.forEach((x,m)=>{const p=m*2.4,_=Math.sin(f*1.45+p)*1.4,y=Math.sin(f*1.15+p)*.08;for(let v=0;v<x.parts.length;v++){const T=x.parts[v],w=/Tail|Fin/i.test(T.mesh.name),A=Math.sin(f*3.1+p+v*.65)*(w?.14:.045);d.copy(T.basePos).sub(x.centroid),h.setFromAxisAngle(x.localUp,y+A),d.applyQuaternion(h),T.mesh.position.copy(x.centroid).add(d).addScaledVector(x.localUp,_),T.mesh.quaternion.copy(h).multiply(T.baseQuat),T.material&&T.material.emissiveIntensity!==void 0&&(T.material.emissiveIntensity=Math.min(1.9,T.baseEmissive*(.86+.14*Math.sin(f*2.6+v*.7+p))*g))}});for(let x=0;x<n.length;x++){const m=n[x],p=Math.sin(f*1.6+m.seed*.9)*.55;m.mesh.position.copy(m.basePos).addScaledVector(m.normal,p),m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=Math.min(1.9,m.baseEmissive*(.88+.1*Math.sin(f*3.4+m.seed))*g))}for(let x=0;x<i.length;x++){const m=i[x];if(!m.material||m.material.emissiveIntensity===void 0)continue;const p=.88+.1*Math.sin(f*2.2+m.seed*1.7),_=Math.sin(f*23+m.seed*7.3)>.965?.55:1;m.material.emissiveIntensity=Math.min(1.9,m.baseEmissive*p*_*g)}for(let x=0;x<o.length;x++){const m=o[x];m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=Math.min(1.85,m.baseEmissive*(.76+.3*Math.sin(f*3.2+m.seed*.8))*g)),/Hexagon_Ring|Hexagon_Spoke/i.test(m.mesh.name)&&(u.setFromAxisAngle(m.normal,f*.35*(x%2===0?1:-1)),m.mesh.quaternion.copy(u).multiply(m.baseQuat))}}}}function e1(s){const e=[];let t=0;return s.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,n.material.userData=n.material.userData||{},n.material.userData.animatedEmissive=!0,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n,i=1){for(let o=0;o<e.length;o++){const a=e[o];if(a.material.emissiveIntensity!==void 0){const r=.78+.36*Math.sin(n*1.9-a.phase);a.material.emissiveIntensity=a.baseEmissive*r*i}}}}}function t1(s){const e=s,t=1/3.5,n=new Lt;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,o=.0022*t,a=new pn(o*.4,o*.32,o*1.8),r=new pn(o*1.9,o*.08,o*.72);r.translate(o*.95,0,0);const l=new pn(o*1.9,o*.08,o*.72);l.translate(-o*.95,0,0);const c=new ke({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),h=new yt(a,c,i),u=new yt(r,c,i),d=new yt(l,c,i);n.add(h,u,d);const f=[];for(let N=0;N<i;N++){const R=e+(N<55?.145+H(N,2,7)*.09:.035+H(N,4,3)*.06)*t,U=(.025+H(N,5,1)*.24)*t*1.1,z=H(N,8,9)*Math.PI*2,B=(N%3===0?-1:1)*(.28+H(N,3,6)*.28);f.push({alt:R,theta:U,phi0:z,omega:B,dir:B>=0?1:-1,flapSpeed:5.5+H(N,1,5)*3.5,flapPhase:H(N,7,2)*Math.PI*2,scaleFactor:.75+H(N,9,4)*.8})}const g=42,x=new Float32Array(g*3),m=[];for(let N=0;N<g;N++){const R=(.16+H(N,11,2)*.24)*t*1.15,U=H(N,13,5)*Math.PI*2,z=e+(.045+H(N,4,8)*.065)*t;m.push({theta:R,phi0:U,alt:z,speed:.028+H(N,6,3)*.025})}const p=new Tt;p.setAttribute("position",new bt(x,3));const _=new Ei({map:Bf,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),y=new Ai(p,_);y.name="Medieval_Drifting_Cloud_Banks",n.add(y);const v=new b,T=new b,w=new b,A=new b,E=new nt,M=new nt,S=new ct,C=new b(0,0,1),D=new b;return{group:n,update(N,R=1){if(!n.parent||!n.parent.visible)return;for(let z=0;z<i;z++){const B=f[z],I=B.phi0+B.omega*N,O=B.theta+Math.sin(N*.6+B.flapPhase)*.008,j=B.alt+Math.sin(N*1.1+B.flapPhase)*.0018,J=Math.sin(O),ne=Math.cos(O),ye=Math.cos(I),Q=Math.sin(I);T.set(J*ye,ne,J*Q).normalize(),v.copy(T).multiplyScalar(j),w.set(-B.dir*Q,0,B.dir*ye).normalize(),A.crossVectors(T,w).normalize(),w.crossVectors(A,T).normalize(),E.makeBasis(A,T,w),E.setPosition(v),D.setScalar(B.scaleFactor),E.scale(D),h.setMatrixAt(z,E);const xe=Math.sin(N*.45+B.flapPhase)>-.25?.55:.12,$=Math.sin(N*B.flapSpeed+B.flapPhase)*xe;S.setFromAxisAngle(C,$),M.makeRotationFromQuaternion(S),M.premultiply(E),u.setMatrixAt(z,M),S.setFromAxisAngle(C,-$),M.makeRotationFromQuaternion(S),M.premultiply(E),d.setMatrixAt(z,M)}h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const U=p.attributes.position;for(let z=0;z<g;z++){const B=m[z],I=B.phi0+B.speed*N,O=Math.sin(B.theta);U.setXYZ(z,B.alt*O*Math.cos(I),B.alt*Math.cos(B.theta),B.alt*O*Math.sin(I))}U.needsUpdate=!0}}}function Ps(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),o=t.getY(n),a=t.getZ(n),r=Math.hypot(i,o,a);!Number.isFinite(r)||r<1e-4?t.setXYZ(n,0,e,0):Math.abs(r-1)>.001&&t.setXYZ(n,i/r,o/r,a/r)}return t.needsUpdate=!0,s}function vs(s,e,t){const n=Math.max(1e-6,s),i=new cs(n,e,4,2);i.rotateX(-Math.PI*.5);const o=i.attributes.position;for(let a=0;a<o.count;a++){const r=X.clamp((o.getX(a)+n*.5)/n,0,1),l=o.getZ(a),c=t*r*n,h=-Math.pow(r,1.35)*e*.85,u=1-Math.pow(r,1.6)*.78,d=Math.sin(r*Math.PI)*e*.14;o.setXYZ(a,c,d,l*u+h)}return i.computeVertexNormals(),Ps(i,1)}function fd(s){const e=[],t=new Vn(s*.34,s*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new Vn(s*.18,s*.9,4);n.rotateX(Math.PI*.42),n.translate(0,s*.2,s*1.15),e.push(n.toNonIndexed());const i=new Vn(s*.12,s*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-s*1.85),e.push(i.toNonIndexed());const o=Ct(e,!1);return o.computeVertexNormals(),o}function n1(s){const e=[],t=new pn(s*.72,s*.68,s*1.55);t.translate(0,s*.95,0),e.push(t.toNonIndexed());const n=new pn(s*.36,s*.58,s*.68);n.rotateX(.45),n.translate(0,s*1.32,s*.85),e.push(n.toNonIndexed());const i=new pn(s*.92,s*.44,s*.36);i.rotateX(.28),i.translate(0,s*1.54,s*1.15),e.push(i.toNonIndexed());const o=Ct(e,!1);o.computeVertexNormals();const a=[],r=new tn(s*.1,s*.08,s*.85,5);r.translate(s*.28,-s*.42,0);const l=r.clone();l.translate(-s*.56,0,0),a.push(r.toNonIndexed(),l.toNonIndexed());const c=Ct(a,!1);c.computeVertexNormals();const h=c.clone();return{bodyGeo:o,frontLegsGeo:c,backLegsGeo:h}}function i1(s){const e=new un(s*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),Ps(e,1);const t=[];for(let i=0;i<4;i++){const o=i/4*Math.PI*2,a=new tn(s*.05,s*.012,s*1.45,4);a.translate(Math.cos(o)*s*.22,-s*.72,Math.sin(o)*s*.22),t.push(a.toNonIndexed())}const n=Ct(t,!1);return n.computeVertexNormals(),Ps(n,-1),{bellGeo:e,tentGeo:n}}function Ea(s){return s.map(e=>{const t=e.index?e.toNonIndexed():e;return t.attributes.uv&&t.deleteAttribute("uv"),t})}function s1(s){const e=s,t=[],n=new un(e*.42,12,10);n.scale(.88,.72,2.55),t.push(n);const i=new Vn(e*.42,e*1.15,8);i.rotateX(Math.PI*.5),i.scale(1.18,.72,1),i.translate(0,e*.03,e*1.15),t.push(i),[-1,1].forEach(h=>{const u=new pn(e*.16,e*.16,e*.92);u.rotateY(h*.12),u.translate(h*e*.24,e*.2,e*.92),t.push(u);const d=new pn(e*1.55,e*.06,e*.48);d.rotateY(-h*.34),d.rotateZ(-h*.1),d.translate(h*e*.85,-e*.12,e*.18),t.push(d)});const o=new Vn(e*.25,e*1.35,7);o.rotateX(-Math.PI*.5),o.translate(0,0,-e*1.35),t.push(o);const a=new pn(e*1.35,e*.05,e*.44);a.translate(0,e*.02,-e*1.98),t.push(a);const r=Ct(Ea(t),!1);r.computeVertexNormals(),Ps(r,1);const l=[];[-1,1].forEach(h=>{for(let u=0;u<4;u++){const d=new pn(e*.05,e*.07,e*.22);d.rotateY(h*.08),d.translate(h*(e*.36-u*.04*e),e*.06,e*(.72-u*.42)),l.push(d)}});const c=Ct(Ea(l),!1);return c.computeVertexNormals(),Ps(c,1),{bodyGeo:r,glowGeo:c}}function o1(s){const e=s,t=[],n=new un(e*.24,9,7);n.scale(.85,.72,2),t.push(n);const i=new tn(e*.07,e*.14,e*.85,6);i.rotateX(Math.PI*.42),i.translate(0,e*.12,e*.74),t.push(i);const o=new Vn(e*.09,e*.36,5);o.rotateX(Math.PI*.5),o.translate(0,e*.22,e*1.24),t.push(o);const a=new Vn(e*.14,e*1.15,6);a.rotateX(-Math.PI*.5),a.translate(0,-e*.02,-e*.95),t.push(a);const r=Ct(Ea(t),!1);r.computeVertexNormals(),Ps(r,1);const l=[];[-1,1].forEach(h=>{const u=new pn(e*.92,e*.04,e*.28);u.rotateY(-h*.35),u.translate(h*e*.48,-e*.05,e*.24),l.push(u);const d=new pn(e*.62,e*.035,e*.22);d.rotateY(-h*.28),d.translate(h*e*.34,-e*.06,-e*.34),l.push(d)});const c=Ct(Ea(l),!1);return c.computeVertexNormals(),Ps(c,1),{bodyGeo:r,flipperGeo:c}}function a1(s){const e=s,t=[],n=new Vn(e*.24,e*.85,5);n.rotateX(Math.PI*.5),n.scale(.55,1,1),n.translate(0,0,e*.15),t.push(n);const i=new Vn(e*.22,e*.42,4);i.rotateX(-Math.PI*.5),i.scale(.32,1.15,1),i.translate(0,0,-e*.44),t.push(i);const o=Ct(Ea(t),!1);return o.computeVertexNormals(),Ps(o,1),o}function r1(s,e){const t=s,n=1/3.5,i=new Lt;i.name="Pandora_Bioluminescent_Life";const o=e?.samplerCtx||null,a=o?.qCap,r=o?.sphereLandmarks,l=G=>{const Le=G.clone().normalize(),$e=Math.abs(Le.x)<.85?new b(1,0,0):new b(0,0,1),lt=new b().crossVectors(Le,$e).normalize(),W=new b().crossVectors(Le,lt).normalize();return{normalDir:Le,e1:lt,e2:W}},c=2200,h=new Float32Array(c*3),u=new Float32Array(c*3),d=[],f=[new te(62975),new te(11553023),new te(3836159),new te(16732856)],g=(1+Math.sqrt(5))*.5,x=[];for(let G=0;G<5e3;G++){const Le=1-(G+.5)/5e3*2,$e=Math.sqrt(Math.max(0,1-Le*Le)),lt=2*Math.PI*G/g,W=Math.cos(lt)*$e,pe=Math.sin(lt)*$e,q=fi(W,Le,pe,a,r);q.nation==="forest"&&q.forestFactor>.99&&q.ashFactor<.01&&q.waterFactor<.01&&q.borderMountain<.12&&q.cont>.06&&q.biome!=="lake"&&q.elev>5e-4&&x.push({dir:new b(W,Le,pe),elev:q.elev,cont:q.cont})}x.length===0&&x.push({dir:wt[0].capDir.clone(),elev:.002,cont:.25});for(let G=0;G<c;G++){let Le,$e=.002;if(G<550){const pe=wt[G%5],q=l(pe.capDir),we=H(G,7,13)*Math.PI*2,oe=Math.sqrt(H(G,3,19))*(.105/3.2);Le=q.normalDir.clone().addScaledVector(q.e1,Math.cos(we)*oe).addScaledVector(q.e2,Math.sin(we)*oe).normalize();const Ee=fi(Le.x,Le.y,Le.z,a,r,3);if(Ee.nation!=="forest"){const ue=x[G%x.length];Le.copy(ue.dir),$e=ue.elev}else $e=Ee.elev}else{const pe=x[(G*7+Math.floor(H(G,4,11)*19))%x.length],q=l(pe.dir),we=H(G,2,17)*Math.PI*2,oe=H(G,9,5)*(.025/3.2);Le=q.normalDir.clone().addScaledVector(q.e1,Math.cos(we)*oe).addScaledVector(q.e2,Math.sin(we)*oe).normalize(),$e=pe.elev}const lt=t+$e+(.005+H(G,5,11)*.19)*n;d.push({dir:Le,baseAlt:lt,driftSpeed:.025+H(G,2,7)*.035,risePhase:H(G,9,4)*Math.PI*2});const W=f[G%f.length];u[G*3]=W.r,u[G*3+1]=W.g,u[G*3+2]=W.b}const m=new Tt;m.setAttribute("position",new bt(h,3)),m.setAttribute("color",new bt(u,3));const p=new Ei({size:.72,map:Bf,vertexColors:!0,transparent:!0,opacity:.16,depthWrite:!1,blending:Dn,sizeAttenuation:!0}),_=new Ai(m,p);_.frustumCulled=!1,i.add(_);const y=90,v=.0054*n,T=new ke({color:744312,emissive:55551,emissiveIntensity:.08,roughness:.42}),w=new ke({color:43200,emissive:61695,emissiveIntensity:.1,roughness:.38,side:Dt}),A=new ke({color:944852,emissive:2132223,emissiveIntensity:.1,roughness:.42,side:Dt});T.userData.animatedEmissive=!0,w.userData.animatedEmissive=!0,A.userData.animatedEmissive=!0;const E=new yt(fd(v),T,y),M=new yt(vs(v*2.75,v*1.1,1),w,y),S=new yt(vs(v*2.75,v*1.1,-1),w,y),C=new yt(vs(v*1.65,v*.75,1),A,y),D=new yt(vs(v*1.65,v*.75,-1),A,y);[E,M,S,C,D].forEach(G=>{G.frustumCulled=!1,i.add(G)});const N=[l(wt[0].capDir),l(wt[1].capDir),l(wt[2].capDir)],R=e?.archCenters||[];for(let G=0;G<R.length;G++)R[G]?.normal&&N.push(l(R[G].normal));const U=[];for(let G=0;G<y;G++){const Le=G<25?0:G<55?1:2,$e=G<60?N[Le]:N[G%N.length],lt=(.032+H(G,4,1)*.088)*n/3.2,W=t+(.055+H(G,8,5)*.17)*n,pe=(G%3===0?-1:1)*(.4+H(G,6,3)*.34);U.push({frame:$e,orbitRad:lt,alt:W,phi0:H(G,4,2)*Math.PI*2,omega:pe,phase:H(G,3,9)*Math.PI*2,scale:.78+H(G,5,6)*.55})}const z=4,B=.0145*n,I=new ke({color:10884618,emissive:16727056,emissiveIntensity:.1,roughness:.4}),O=new ke({color:14166542,emissive:16734744,emissiveIntensity:.12,roughness:.4,side:Dt});I.userData.animatedEmissive=!0,O.userData.animatedEmissive=!0;const j=new yt(fd(B),I,z),J=new yt(vs(B*3.1,B*1.25,1),O,z),ne=new yt(vs(B*3.1,B*1.25,-1),O,z),ye=new yt(vs(B*1.85,B*.85,1),O,z),Q=new yt(vs(B*1.85,B*.85,-1),O,z);[j,J,ne,ye,Q].forEach(G=>{G.frustumCulled=!1,i.add(G)});const de=[{frame:l(wt[0].capDir),alt:t+.19*n,orbitRad:.11*n/3.2,phi0:.4,omega:.22,phase:0},{frame:l(wt[1].capDir),alt:t+.26*n,orbitRad:.14*n/3.2,phi0:2.1,omega:-.2,phase:1.5},{frame:l(wt[2].capDir),alt:t+.21*n,orbitRad:.12*n/3.2,phi0:3.9,omega:.21,phase:2.7},{frame:l(wt[3].capDir),alt:t+.18*n,orbitRad:.1*n/3.2,phi0:5.1,omega:-.23,phase:.9}],xe=48,$=.0048*n,{bodyGeo:ae,frontLegsGeo:me,backLegsGeo:re}=n1($),Me=new ke({color:3682900,emissive:1990808,emissiveIntensity:0,roughness:.68}),V=new ke({color:2499642,roughness:.75});Me.userData.animatedEmissive=!0;const Re=new yt(ae,Me,xe),k=new yt(me,V,xe),it=new yt(re,V,xe);[Re,k,it].forEach(G=>{G.frustumCulled=!1,i.add(G)});const ge=x.filter(G=>G.cont>.08),Ne=ge.length>=6?ge:x,Be=[],rt=new b;for(let G=0;G<6;G++){let Le=null;const $e=(.015+G%3*.004)/3.2,lt=Math.floor(G/6*Ne.length)%Ne.length;for(let W=0;W<Ne.length;W++){const pe=Ne[(lt+W*7)%Ne.length],q=l(pe.dir);let we=!0;for(let oe=0;oe<8;oe++){const Ee=oe/8*Math.PI*2;rt.copy(q.normalDir).addScaledVector(q.e1,Math.cos(Ee)*$e*1.3).addScaledVector(q.e2,Math.sin(Ee)*$e*1.3).normalize();const ue=fi(rt.x,rt.y,rt.z,a,r,3);if(ue.nation!=="forest"||ue.ashFactor>.04||ue.biome==="lake"){we=!1;break}}if(we){Le=q;break}}Be.push({...Le||l(wt[0].capDir),radOffset:$e,speed:(G%2===0?1:-1)*(.14+G%3*.02)})}const Ve=[];for(let G=0;G<xe;G++){const Le=Be[G%Be.length],$e=Math.floor(G/Be.length);Ve.push({herd:Le,offsetAng:$e*.78+H(G,2,7)*.35,radialFactor:.52+H(G,5,3)*.65,phase:H(G,9,1)*Math.PI*2,scale:.85+H(G,4,8)*.38})}const F=240,L=.0038*n,{bellGeo:ee,tentGeo:ve}=i1(L),le=new ke({color:16047359,emissive:12735743,emissiveIntensity:.12,transparent:!0,opacity:.35,roughness:.25,depthWrite:!1,blending:Dn,side:Dt}),ce=new gn({color:new te(.85,.75,1.05),transparent:!0,opacity:.28,depthWrite:!1,blending:Dn});le.userData.animatedEmissive=!0,ce.userData.animatedEmissive=!0;const Ie=new yt(ee,le,F),Se=new yt(ve,ce,F);Ie.frustumCulled=!1,Se.frustumCulled=!1,i.add(Ie,Se);const ze=[];for(let G=0;G<F;G++){let Le,$e,lt;if(G<75){const W=G<45?wt[3]:wt[0];Le=l(W.capDir);const pe=H(G,3,15)*Math.PI*2,q=Math.sqrt(H(G,6,11))*(.075/3.2);$e=Le.normalDir.clone().addScaledVector(Le.e1,Math.cos(pe)*q).addScaledVector(Le.e2,Math.sin(pe)*q).normalize(),lt=vr($e.x,$e.y,$e.z,0,o)}else{const W=x[(G*11+Math.floor(H(G,2,13)*13))%x.length];$e=W.dir,Le=l($e),lt=W.elev}ze.push({frame:Le,alt:t+lt+(.015+H(G,9,7)*.068)*n,phase:H(G,2,5)*Math.PI*2,scale:.72+H(G,8,3)*.78})}const xt=wt[6],Ae=l(xt.capDir),Fe=[];for(let G=0;G<1200;G++){const Le=H(G,11,29)*Math.PI*2,$e=Math.sqrt(H(G,17,7))*(.14/3.2),lt=Ae.normalDir.clone().addScaledVector(Ae.e1,Math.cos(Le)*$e).addScaledVector(Ae.e2,Math.sin(Le)*$e).normalize(),W=fi(lt.x,lt.y,lt.z,a,r,3);W.nation==="water"&&W.waterFactor>.92&&W.elev<-.045&&Fe.push({dir:lt,elev:W.elev})}Fe.length===0&&Fe.push({dir:Ae.normalDir.clone(),elev:-.095});const st=5,ht=.0145*n,{bodyGeo:qe,glowGeo:pt}=s1(ht),ut=new ke({color:2508894,roughness:.42,metalness:.14}),vt=new ke({color:5826815,emissive:61695,emissiveIntensity:.06,roughness:.3});vt.userData.animatedEmissive=!0;const K=new yt(qe,ut,st),Pe=new yt(pt,vt,st);K.frustumCulled=!1,Pe.frustumCulled=!1,i.add(K,Pe);const fe=[];for(let G=0;G<st;G++){const Le=Fe[Math.floor(G/st*Fe.length)%Fe.length];fe.push({frame:l(Le.dir),orbitRad:(.055+H(G,3,19)*.065)/3.2,depthRatio:.45+H(G,8,13)*.25,phi0:H(G,5,23)*Math.PI*2,omega:(G%2===0?1:-1)*(.11+H(G,2,17)*.06),phase:H(G,7,11)*Math.PI*2,scale:.85+H(G,9,4)*.42})}const _e=24,Oe=.0056*n,{bodyGeo:He,flipperGeo:Ye}=o1(Oe),Nt=new ke({color:1465976,emissive:51455,emissiveIntensity:.06,roughness:.35}),Ft=new ke({color:2132126,emissive:2424800,emissiveIntensity:.06,roughness:.38});Nt.userData.animatedEmissive=!0,Ft.userData.animatedEmissive=!0;const mt=new yt(He,Nt,_e),dn=new yt(Ye,Ft,_e);mt.frustumCulled=!1,dn.frustumCulled=!1,i.add(mt,dn);const mn=[];for(let G=0;G<_e;G++){const Le=Fe[(G*19+3)%Fe.length];mn.push({frame:l(Le.dir),orbitRad:(.025+H(G,4,29)*.038)/3.2,phi0:H(G,12,5)*Math.PI*2,omega:(G%2===0?1:-1)*(.28+H(G,6,17)*.14),phase:H(G,8,21)*Math.PI*2,scale:.78+H(G,3,14)*.48})}const vn=450,ot=9,Ot=.002*n,Sn=a1(Ot),Ln=new ke({color:16777215,emissive:3201279,emissiveIntensity:.08,roughness:.28});Ln.userData.animatedEmissive=!0;const Pt=new yt(Sn,Ln,vn);Pt.frustumCulled=!1;const _n=[new te(2683647),new te(16757816),new te(16735912),new te(6619064),new te(6728447)];for(let G=0;G<vn;G++)Pt.setColorAt(G,_n[Math.floor(H(G,15,3)*_n.length)%_n.length]);Pt.instanceColor&&(Pt.instanceColor.needsUpdate=!0),i.add(Pt);const cn=[];for(let G=0;G<ot;G++){const Le=Fe[(G*47+7)%Fe.length];cn.push({frame:l(Le.dir),orbitRad:(.022+H(G,9,13)*.035)/3.2,omega:(G%2===0?1:-1)*(.22+H(G,2,19)*.12),phi0:H(G,6,31)*Math.PI*2,phase:H(G,14,7)*Math.PI*2,centerDir:new b,centerAlt:t-.035,aheadDir:new b,tangentForward:new b,tangentRight:new b})}const fn=[];for(let G=0;G<vn;G++)fn.push({schoolIdx:G%ot,localAng:H(G,4,17)*Math.PI*2,localRad:(.0025+H(G,9,23)*.011)*(.5+.5*(G%3))/3.2,vertOff:(H(G,13,5)-.5)*.018,phase:H(G,21,11)*Math.PI*2,scale:.72+H(G,7,19)*.65});const Jt=new b,nn=new b,Bt=new b,Ut=new b,Zt=new b,P=new nt,Y=new nt,se=new ct,he=new ct,Z=new b(1,0,0),Ce=new b(0,0,1),De=new b,Qe=new b(0,1,0);new b;const Je=(G,Le,$e,lt,W,pe,q,we,oe,Ee,ue,ie)=>{Bt.copy(q).normalize(),Ut.copy(we).sub(q),Ut.lengthSq()<1e-12&&Ut.set(1,0,0),Ut.normalize(),Zt.crossVectors(Bt,Ut).normalize(),Ut.crossVectors(Zt,Bt).normalize(),P.makeBasis(Zt,Bt,Ut),he.setFromAxisAngle(Ce,ie),Y.makeRotationFromQuaternion(he),P.multiply(Y),P.setPosition(q),De.setScalar(ue),P.scale(De),Le.setMatrixAt(G,P),se.setFromAxisAngle(Ce,oe),Y.makeRotationFromQuaternion(se),Y.premultiply(P),$e.setMatrixAt(G,Y),se.setFromAxisAngle(Ce,-oe),Y.makeRotationFromQuaternion(se),Y.premultiply(P),lt.setMatrixAt(G,Y),se.setFromAxisAngle(Ce,Ee),Y.makeRotationFromQuaternion(se),Y.setPosition(0,0,-v*.72),Y.premultiply(P),W.setMatrixAt(G,Y),se.setFromAxisAngle(Ce,-Ee),Y.makeRotationFromQuaternion(se),Y.setPosition(0,0,-v*.72),Y.premultiply(P),pe.setMatrixAt(G,Y)},at=(G,Le,$e)=>{const lt=G.phi0+G.omega*Le,W=G.orbitRad+Math.sin(Le*.8+G.phase)*(.008/3.2)*n,pe=G.alt+Math.sin(Le*1.15+G.phase)*.006*n;$e.copy(G.frame.normalDir).addScaledVector(G.frame.e1,Math.cos(lt)*W).addScaledVector(G.frame.e2,Math.sin(lt)*W).normalize().multiplyScalar(pe)};return{group:i,update(G,Le=1,$e=.5,lt=0){if(!i.parent||!i.parent.visible)return;const W=X.smoothstep(-$e,-.1,.04);e?.updateDayNight&&e.updateDayNight($e,G,lt);const pe=m.attributes.position;for(let ue=0;ue<c;ue++){const ie=d[ue],Ze=(ie.risePhase+G*ie.driftSpeed*3)%1*.015,Ke=ie.baseAlt+Ze,Vt=Math.sin(G*.65+ie.risePhase)*.0022;pe.setXYZ(ue,ie.dir.x*Ke+Vt,ie.dir.y*Ke,ie.dir.z*Ke+Vt)}pe.needsUpdate=!0,p.opacity=X.lerp(.14,.92,W);for(let ue=0;ue<y;ue++){const ie=U[ue];at(ie,G,Jt),at(ie,G+.05,nn);const Ze=Math.sin(G*.65+ie.phase)>-.2?.46:.1,Ke=Math.sin(G*4.9+ie.phase)*Ze,Vt=Math.sin(G*4.9+ie.phase-.85)*Ze*.82,hn=ie.omega>0?-.32:.32;Je(ue,E,M,S,C,D,Jt,nn,Ke,Vt,ie.scale,hn)}E.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0,D.instanceMatrix.needsUpdate=!0,T.emissiveIntensity=X.lerp(.06,1.45,W),w.emissiveIntensity=X.lerp(.08,1.85,W),A.emissiveIntensity=X.lerp(.08,1.65,W);for(let ue=0;ue<z;ue++){const ie=de[ue];at(ie,G,Jt),at(ie,G+.08,nn);const Ze=Math.sin(G*2.5+ie.phase)*.42,Ke=Math.sin(G*2.5+ie.phase-.9)*.35;Je(ue,j,J,ne,ye,Q,Jt,nn,Ze,Ke,1,ie.omega>0?-.25:.25)}j.instanceMatrix.needsUpdate=!0,J.instanceMatrix.needsUpdate=!0,ne.instanceMatrix.needsUpdate=!0,ye.instanceMatrix.needsUpdate=!0,Q.instanceMatrix.needsUpdate=!0,I.emissiveIntensity=X.lerp(.08,1.9,W),O.emissiveIntensity=X.lerp(.1,2.15,W);const q=(ue,ie,Ze,Ke)=>{const Vt=ue.offsetAng+ue.herd.speed*ie,hn=ue.herd.radOffset*ue.radialFactor;Ke.copy(ue.herd.normalDir).addScaledVector(ue.herd.e1,Math.cos(Vt)*hn).addScaledVector(ue.herd.e2,Math.sin(Vt)*hn).normalize();const et=vr(Ke.x,Ke.y,Ke.z,0,o);Ze.copy(Ke).multiplyScalar(t+et)},we=new b;for(let ue=0;ue<xe;ue++){const ie=Ve[ue];q(ie,G,Jt,Bt),q(ie,G+.08,nn,we),Ut.copy(nn).sub(Jt).normalize(),Zt.crossVectors(Bt,Ut).normalize(),Ut.crossVectors(Zt,Bt).normalize(),P.makeBasis(Zt,Bt,Ut),P.setPosition(Jt),De.setScalar(ie.scale),P.scale(De),Re.setMatrixAt(ue,P);const Ze=Math.sin(G*4.5+ie.phase)*.42;se.setFromAxisAngle(Z,Ze),Y.makeRotationFromQuaternion(se),Y.setPosition(0,$*.72,$*.52),Y.premultiply(P),k.setMatrixAt(ue,Y),se.setFromAxisAngle(Z,-Ze),Y.makeRotationFromQuaternion(se),Y.setPosition(0,$*.72,-$*.56),Y.premultiply(P),it.setMatrixAt(ue,Y)}Re.instanceMatrix.needsUpdate=!0,k.instanceMatrix.needsUpdate=!0,it.instanceMatrix.needsUpdate=!0,Me.emissiveIntensity=X.lerp(0,.95,W);for(let ue=0;ue<F;ue++){const ie=ze[ue],Ze=Math.sin(G*1.15+ie.phase)*.0045*n,Ke=Math.cos(G*.45+ie.phase)*(.004/3.2)*n,Vt=Math.sin(G*.35+ie.phase)*(.004/3.2)*n;Bt.copy(ie.frame.normalDir).addScaledVector(ie.frame.e1,Ke).addScaledVector(ie.frame.e2,Vt).normalize(),Jt.copy(Bt).multiplyScalar(ie.alt+Ze);const hn=1+Math.sin(G*2.8+ie.phase)*.16;ft(P,Jt,Bt,ie.scale*hn,ie.scale/Math.sqrt(hn)),Ie.setMatrixAt(ue,P),ft(P,Jt,Bt,ie.scale,ie.scale*(1+Math.sin(G*2.8+ie.phase)*.08)),Se.setMatrixAt(ue,P)}Ie.instanceMatrix.needsUpdate=!0,Se.instanceMatrix.needsUpdate=!0,le.opacity=X.lerp(.32,.82,W),le.emissiveIntensity=X.lerp(.08,2.35,W),ce.opacity=X.lerp(.24,.65,W),ce.color.setRGB(X.lerp(.85,1.4,W),X.lerp(.88,.85,W),X.lerp(.96,2.2,W));const oe=(ue,ie,Ze,Ke,Vt,hn,et,Tn,Ht,Et)=>{const Kn=Ze+Ke*Tn;Et.copy(ue.normalDir).addScaledVector(ue.e1,Math.cos(Kn)*ie).addScaledVector(ue.e2,Math.sin(Kn)*ie).normalize();const si=vr(Et.x,Et.y,Et.z,0,o),Yi=Math.min(et-.004,si+hn),to=X.lerp(Yi,et,Vt);Ht.copy(Et).multiplyScalar(t+to)},Ee=new b;for(let ue=0;ue<st;ue++){const ie=fe[ue];oe(ie.frame,ie.orbitRad,ie.phi0,ie.omega,ie.depthRatio,.015,-.016,G,Jt,Bt),oe(ie.frame,ie.orbitRad,ie.phi0,ie.omega,ie.depthRatio,.015,-.016,G+.14,nn,Ee),Ut.copy(nn).sub(Jt),Ut.lengthSq()<1e-12&&Ut.set(1,0,0),Ut.normalize(),Zt.crossVectors(Bt,Ut).normalize(),Ut.crossVectors(Zt,Bt).normalize();const Ze=Math.sin(G*1.15+ie.phase)*.06;se.setFromAxisAngle(Z,Ze),P.makeBasis(Zt,Bt,Ut),P.setPosition(Jt),De.setScalar(ie.scale),P.scale(De),Y.makeRotationFromQuaternion(se),P.multiply(Y),K.setMatrixAt(ue,P),Pe.setMatrixAt(ue,P)}K.instanceMatrix.needsUpdate=!0,Pe.instanceMatrix.needsUpdate=!0,vt.emissiveIntensity=X.lerp(.06,1.85,W);for(let ue=0;ue<_e;ue++){const ie=mn[ue],Ze=.55+Math.sin(G*.75+ie.phase)*.25;oe(ie.frame,ie.orbitRad,ie.phi0,ie.omega,Ze,.008,-.01,G,Jt,Bt),oe(ie.frame,ie.orbitRad,ie.phi0,ie.omega,Ze,.008,-.01,G+.07,nn,Ee),Ut.copy(nn).sub(Jt),Ut.lengthSq()<1e-12&&Ut.set(1,0,0),Ut.normalize(),Zt.crossVectors(Bt,Ut).normalize(),Ut.crossVectors(Zt,Bt).normalize(),P.makeBasis(Zt,Bt,Ut),P.setPosition(Jt),De.setScalar(ie.scale),P.scale(De),mt.setMatrixAt(ue,P);const Ke=Math.sin(G*5.4+ie.phase)*.42;se.setFromAxisAngle(Ce,Ke),Y.makeRotationFromQuaternion(se),Y.premultiply(P),dn.setMatrixAt(ue,Y)}mt.instanceMatrix.needsUpdate=!0,dn.instanceMatrix.needsUpdate=!0,Nt.emissiveIntensity=X.lerp(.06,1.35,W),Ft.emissiveIntensity=X.lerp(.08,1.75,W);for(let ue=0;ue<ot;ue++){const ie=cn[ue],Ze=ie.phi0+ie.omega*G,Ke=ie.phi0+ie.omega*(G+.06);ie.centerDir.copy(ie.frame.normalDir).addScaledVector(ie.frame.e1,Math.cos(Ze)*ie.orbitRad).addScaledVector(ie.frame.e2,Math.sin(Ze)*ie.orbitRad).normalize(),ie.aheadDir.copy(ie.frame.normalDir).addScaledVector(ie.frame.e1,Math.cos(Ke)*ie.orbitRad).addScaledVector(ie.frame.e2,Math.sin(Ke)*ie.orbitRad).normalize();const Vt=vr(ie.centerDir.x,ie.centerDir.y,ie.centerDir.z,0,o),hn=Math.min(-.022,Vt+.01),et=X.lerp(hn,-.018,.48+.25*Math.sin(G*.65+ie.phase));ie.centerAlt=t+et,ie.tangentForward.copy(ie.aheadDir).sub(ie.centerDir),ie.tangentForward.lengthSq()<1e-12&&ie.tangentForward.set(1,0,0),ie.tangentForward.normalize(),ie.tangentRight.crossVectors(ie.centerDir,ie.tangentForward).normalize(),ie.tangentForward.crossVectors(ie.tangentRight,ie.centerDir).normalize()}for(let ue=0;ue<vn;ue++){const ie=fn[ue],Ze=cn[ie.schoolIdx],Ke=ie.localAng+G*1.15,Vt=Math.sin(G*3.4+ie.phase)*.0024;Bt.copy(Ze.centerDir).addScaledVector(Ze.tangentRight,Math.cos(Ke)*ie.localRad).addScaledVector(Ze.tangentForward,Math.sin(Ke)*ie.localRad).normalize();const hn=Math.min(t-.008,Ze.centerAlt+ie.vertOff+Vt);Jt.copy(Bt).multiplyScalar(hn);const et=Math.sin(G*8.5+ie.phase)*.14;se.setFromAxisAngle(Z,0),Ut.copy(Ze.tangentForward).addScaledVector(Ze.tangentRight,et).normalize(),Zt.crossVectors(Bt,Ut).normalize(),Ut.crossVectors(Zt,Bt).normalize(),P.makeBasis(Zt,Bt,Ut),P.setPosition(Jt),De.setScalar(ie.scale),P.scale(De),Pt.setMatrixAt(ue,P)}Pt.instanceMatrix.needsUpdate=!0,Ln.emissiveIntensity=X.lerp(.08,1.65,W)}};function ft(G,Le,$e,lt,W){se.setFromUnitVectors(Qe,$e),De.set(lt,W,lt),G.compose(Le,se,De)}}const Rn=157.5,Ri=4.8,_r=62,_s=.72,Kl=1/3.5,l1=3,pd=.88,c1=35e3,h1=36e3,u1=3500,d1=1200,md=X.degToRad(68),Mr=new b(0,Math.cos(md),Math.sin(md)).normalize(),f1={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:55.2,eccentricity:.045,orbitOmega:.0028,localRadius:6.336,groundFloorAlt:1.65,kmScale:27840,rotationSpeed:.014,axialOmega:.015,axialTiltX:X.degToRad(6),axialTiltZ:X.degToRad(21),initialSpinAngle:-.95,capLocalDir:Mr,landable:!0,hasProceduralWorld:!0,fogColor:5944012,maxFogDensity:.0036,skyColor:2523838,particleColor:10417919,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new b(0,6.336*2.25,6.336*.85),lowOrbitLookAt:new b(0,6.336,0),highCloudOffset:new b(-.08,6.336*1.48,6.336*.36),aerialOffset:new b(-.025,6.336+.072,.095),aerialLookAt:new b(.028,6.336+.048,-.022),sunColor:16773332,sunIntensity:2.85,ambientColor:2377264,ambientIntensity:.92,hemiSkyColor:6469887,hemiGroundColor:1985064,hemiIntensity:1.45,localLightColor:61695,localBounceColor:12073215,bloomStrength:.54,skyDome:{zenith:1866720,mid:5420780,horizon:9365738,sunGlow:16773320,zenithAlpha:.92,starFloor:0}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:88.8,eccentricity:.035,orbitOmega:.00137,localRadius:6.816,groundFloorAlt:.32,minSpeed:3.2,glbLocalScale:.0038*Kl*3.8,kmScale:29760,rotationSpeed:.011,axialOmega:.012,axialTiltX:X.degToRad(-5),axialTiltZ:X.degToRad(18.5),initialSpinAngle:-.62,capLocalDir:Mr,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0044,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new b(0,6.816*2.25,6.816*.85),lowOrbitLookAt:new b(0,6.816,0),highCloudOffset:new b(-.06,6.816*1.48,6.816*.36),aerialOffset:new b(-.012,6.816+.145,.195),aerialLookAt:new b(.005,6.816+.175,-.055),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.48,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:127.2,eccentricity:.05,orbitOmega:797e-6,localRadius:7.296,groundFloorAlt:.95,glbLocalScale:.004*Kl,kmScale:32640,rotationSpeed:.01,axialOmega:.011,axialTiltX:X.degToRad(8),axialTiltZ:X.degToRad(-23.5),initialSpinAngle:-1.18,capLocalDir:Mr,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new b(-.32,7.296*2.25,7.296*.85),lowOrbitLookAt:new b(0,7.296,0),highCloudOffset:new b(-.18,7.296*1.48,7.296*.36),aerialOffset:new b(-.025,7.296+.08,.092),aerialLookAt:new b(.003,7.296+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:170.4,eccentricity:.04,orbitOmega:516e-6,localRadius:7.776,groundFloorAlt:.95,glbLocalScale:.0039*Kl,kmScale:36e3,rotationSpeed:.009,axialOmega:.01,axialTiltX:X.degToRad(-6),axialTiltZ:X.degToRad(24),initialSpinAngle:-.88,capLocalDir:Mr,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new b(0,7.776*2.25,7.776*.85),lowOrbitLookAt:new b(0,7.776,0),highCloudOffset:new b(.08,7.776*1.48,7.776*.36),aerialOffset:new b(0,7.776+.042,.102),aerialLookAt:new b(0,7.776+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:220.8,eccentricity:.06,orbitOmega:352e-6,localRadius:8.88,groundFloorAlt:2,kmScale:56640,rotationSpeed:.05,axialOmega:.024,axialTiltX:X.degToRad(7),axialTiltZ:X.degToRad(26),initialSpinAngle:0,landable:!1}};class p1{constructor({scene:e,camera:t,renderer:n,controls:i,starfield:o,cockpitParticles:a,bloomPass:r,ssaoPass:l,radialBlurPass:c,onStatusUpdate:h}){this.scene=e,this.camera=t,this.renderer=n||null,this.controls=i,this.starfield=o,this.cockpitParticles=a,this.bloomPass=r,this.ssaoPass=l||null,this.radialBlurPass=c||null,this.onStatusUpdate=h||(()=>{}),this.dracoLoader=new YM,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new dM,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Lt,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(Rn),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.lastP2DistrictId="city_center",this.lastP2DistrictName="City Center · Corpo Plaza",this.elapsedTime=0,this.simulationTime=0,this.timeScales=[1,10,60],this.timeScaleIndex=0,this.timeScale=1,this._tmpInvQuat=new ct,this._tmpCapInvQuat=new ct,this._tmpLocalDir=new b,this._tmpRadial=new b,this._tmpSunDir=new b,this._tmpPlanetToSun=new b,this._tmpUp=new b(0,1,0),this._tmpStationPos=new b,this._tmpColorA=new te,this._tmpColorB=new te,this._tmpColorC=new te,this._tmpSkyColor=new te,this._tmpFogColor=new te,this._p2Atmo={fogDay:new te,fogNight:new te,fogDusk:new te,hemiSky:new te,hemiGround:new te,ambient:new te,localLight:new te,localBounce:new te,fogDensity:.0044,bloomCap:.48},this._identityQuat=new ct,this._tmpCamFwd=new b,this._tmpRayOccl=new b,this._tmpLocalCam=new b,this._tmpIblZenith=new te(329746),this._tmpIblHorizon=new te(1319482),this._tmpIblGround=new te(263692),this._tmpIblSun=new te(16771264),this.skyDome=xy(),this.scene.add(this.skyDome);const u=JM();this.machConeMesh=u.mesh,this.machConeUniforms=u.uniforms,this.camera.add(this.machConeMesh),this.solarLensflare=null,this.solarLensflareElements=[],this._setupLighting(),this._initIblPipeline()}_initIblPipeline(){if(!this.renderer||typeof this.renderer.getContext!="function"){this.pmremGenerator=null;return}this.pmremGenerator=new Hc(this.renderer),this.pmremGenerator.compileEquirectangularShader(),this.envRenderTarget=null,this._lastIblTime=-99,this._lastIblPlanetId=null,this._lastIblSunElev=-9,this._lastIblAltRatio=-9,this.iblScene=new uh,this.iblUniforms={uZenithColor:{value:new te(1594024)},uHorizonColor:{value:new te(7914728)},uGroundColor:{value:new te(1583132)},uSunDir:{value:new b(.4,.7,.3)},uSunColor:{value:new te(2.4,2.1,1.6)}};const e=new un(20,24,16),t=new ln({uniforms:this.iblUniforms,vertexShader:`
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
      `,side:zn,depthWrite:!1});this.iblScene.add(new Ge(e,t))}_updateDynamicIbl({planetId:e,zenithColor:t,horizonColor:n,groundColor:i,sunDir:o,sunColor:a,sunElev:r,altRatio:l,intensity:c}){if(!this.pmremGenerator||!this.iblScene)return;this.scene.environmentIntensity=c;const h=this.elapsedTime-this._lastIblTime;if(!(e!==this._lastIblPlanetId||Math.abs(r-this._lastIblSunElev)>.06||Math.abs(l-this._lastIblAltRatio)>.08||h>.45))return;this.iblUniforms.uZenithColor.value.copy(t),this.iblUniforms.uHorizonColor.value.copy(n),this.iblUniforms.uGroundColor.value.copy(i),this.iblUniforms.uSunDir.value.copy(o).normalize(),this.iblUniforms.uSunColor.value.copy(a).multiplyScalar(Math.max(.25,c*2.2));const d=this.envRenderTarget;this.envRenderTarget=this.pmremGenerator.fromScene(this.iblScene,.04),this.scene.environment=this.envRenderTarget.texture,d&&d.dispose(),this._lastIblTime=this.elapsedTime,this._lastIblPlanetId=e,this._lastIblSunElev=r,this._lastIblAltRatio=l}_setupLighting(){this.ambientLight=new Ef(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new F_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new xa(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new xh(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.planetaryDirLight.castShadow=!1,this.planetaryDirLight.shadow.mapSize.set(2048,2048),this.planetaryDirLight.shadow.camera.near=4,this.planetaryDirLight.shadow.camera.far=520;const e=180;this.planetaryDirLight.shadow.camera.left=-e,this.planetaryDirLight.shadow.camera.right=e,this.planetaryDirLight.shadow.camera.top=e,this.planetaryDirLight.shadow.camera.bottom=-e,this.planetaryDirLight.shadow.bias=-4e-4,this.planetaryDirLight.shadow.normalBias=.03,this.scene.add(this.planetaryDirLight),this.scene.add(this.planetaryDirLight.target),this.localAtmoLight=new xa(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new xa(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(2.72),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new b(3.4,2.35,.72)},uHotColor:{value:new b(4,3.1,1.45)},uLimbColor:{value:new b(2.2,.85,.14)}};const n=new ln({uniforms:this.sunPlasmaUniforms,vertexShader:`
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
      `,fog:!1});this.sunNode.traverse(x=>{x.isMesh&&(x.material=n)});const i=new ln({uniforms:{uColor:{value:new b(2.8,1.35,.35)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,fog:!1,blending:Dn,side:zn}),o=new Ge(new un(2.52*3.2,48,48),i);o.name="Solar_Tight_Corona";const a=document.createElement("canvas");a.width=512,a.height=512;const r=a.getContext("2d");r.clearRect(0,0,512,512);const l=256,c=256,h=r.createRadialGradient(l,c,4,l,c,130);h.addColorStop(0,"rgba(255, 245, 205, 0.72)"),h.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),h.addColorStop(1,"rgba(255, 140, 40, 0.0)"),r.fillStyle=h,r.beginPath(),r.arc(l,c,130,0,Math.PI*2),r.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((x,m)=>{r.save(),r.translate(l,c),r.rotate(x+.18);const p=m===0?242:210,_=r.createLinearGradient(-p,0,p,0);_.addColorStop(0,"rgba(255, 210, 120, 0.0)"),_.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),_.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),_.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),_.addColorStop(1,"rgba(255, 210, 120, 0.0)"),r.fillStyle=_,r.beginPath(),r.ellipse(0,0,p,3.2,0,0,Math.PI*2),r.fill(),r.restore()});const d=new xn(a);d.colorSpace=$t;const f=new xf({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:Dn}),g=new t_(f);g.name="Solar_Diffraction_Rays",g.scale.set(10.8*3.2,10.8*3.2,1),t&&(t.add(o),t.add(g)),this._createSolarLensflare()}_createSolarLensflare(){if(this.solarLensflare||typeof document>"u")return;const e=(a,r)=>{const l=document.createElement("canvas");l.width=a,l.height=a;const c=l.getContext("2d"),h=a*.5;if(r){const d=c.createRadialGradient(h,h,2,h,h,h);d.addColorStop(0,"rgba(255, 252, 240, 0.95)"),d.addColorStop(.18,"rgba(255, 232, 175, 0.52)"),d.addColorStop(.45,"rgba(255, 180, 95, 0.14)"),d.addColorStop(1,"rgba(255, 140, 40, 0.0)"),c.fillStyle=d,c.fillRect(0,0,a,a);const f=c.createLinearGradient(0,h,a,h);f.addColorStop(0,"rgba(180, 225, 255, 0.0)"),f.addColorStop(.5,"rgba(255, 240, 200, 0.42)"),f.addColorStop(1,"rgba(180, 225, 255, 0.0)"),c.fillStyle=f,c.beginPath(),c.ellipse(h,h,h*.96,Math.max(2,a*.025),0,0,Math.PI*2),c.fill()}else{const d=c.createRadialGradient(h,h,h*.45,h,h,h*.96);d.addColorStop(0,"rgba(255, 255, 255, 0.0)"),d.addColorStop(.58,"rgba(165, 215, 255, 0.22)"),d.addColorStop(.82,"rgba(255, 210, 150, 0.28)"),d.addColorStop(1,"rgba(255, 255, 255, 0.0)"),c.fillStyle=d,c.beginPath(),c.arc(h,h,h*.96,0,Math.PI*2),c.fill()}const u=new xn(l);return u.colorSpace=$t,u},t=e(256,!0),n=e(128,!1),i=new wa;i.name="Central_Solar_Lensflare",i.userData.skipSSAO=!0;const o=[{tex:t,size:320,dist:0,hex:16773328},{tex:n,size:78,dist:.34,hex:16769192},{tex:n,size:54,dist:.58,hex:9097471},{tex:n,size:96,dist:.88,hex:16758904}];this.solarLensflareElements=o.map(a=>{const r=new te(a.hex),l=new Mh(a.tex,a.size,a.dist,r.clone());return l.baseColor=r,i.addElement(l),l}),i.position.set(0,0,0),this.scene.add(i),this.solarLensflare=i}setRenderer(e){this.renderer=e||null,this.pmremGenerator||this._initIblPipeline()}_hideAllReflectiveWaters(e=null){for(const[,t]of this.planetNodes)if(!(t===e||!t.reflectiveWaters))for(const n of t.reflectiveWaters)n.water&&(n.water.visible=!1)}_updateReflectiveWaters(e,t,n,i){if(!e||!e.reflectiveWaters||!e.reflectiveWaters.length)return;if(!t){for(const r of e.reflectiveWaters)r.water&&(r.water.visible=!1);return}e.surfaceCapGroup.updateMatrixWorld();let o=null,a=57600;for(const r of e.reflectiveWaters){if(!r.water)continue;if(r.isOceanSurface&&n>.06){r.water.visible=!1;continue}this._tmpStationPos.copy(r.centerLocal).applyMatrix4(e.surfaceCapGroup.matrixWorld);const l=this._tmpStationPos.distanceToSquared(this.camera.position);l<a&&(a=l,o=r)}for(const r of e.reflectiveWaters){if(!r.water)continue;const l=r===o;if(r.water.visible=l,l&&r.water.material?.uniforms){const c=r.water.material.uniforms;c.eye&&c.eye.value.copy(this.camera.position),c.sunDirection&&c.sunDirection.value.copy(i).normalize(),c.sunColor&&c.sunColor.value.copy(this.planetaryDirLight.color)}}}_updateSolarLensflare(e,t,n,i,o){if(!this.solarLensflare||!this.solarLensflareElements.length)return;const a=this.camera.position.lengthSq();if(a<25||t){this.solarLensflare.visible=!1;return}const r=Math.sqrt(a);this._tmpRayOccl.copy(this.camera.position).negate().multiplyScalar(1/r);let l=1;for(const[,c]of this.planetNodes){const h=this._tmpStationPos.copy(c.currWorldPos).sub(this.camera.position),u=h.dot(this._tmpRayOccl);if(u>0&&u<r){const d=Math.max(0,h.lengthSq()-u*u),f=c.config.localRadius*Rn;if(d<f*f){l=0;break}else if(d<f*f*1.08){const g=Math.sqrt(d)/f;l=Math.min(l,X.smoothstep(g,1,1.04))}}}if(e&&l>.01){const c=X.smoothstep(n,-.04,.08),h=X.lerp(1,.68,i);l*=c*h*(1-o)}if(l<=.01){this.solarLensflare.visible=!1;return}this.solarLensflare.visible=!0;for(const c of this.solarLensflareElements)c.color&&c.baseColor&&c.color.copy(c.baseColor).multiplyScalar(l)}cycleTimeScale(){return this.timeScaleIndex=(this.timeScaleIndex+1)%this.timeScales.length,this.timeScale=this.timeScales[this.timeScaleIndex],this.timeScale}syncCameraPostFlight(){if(this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position),this.camera.updateMatrixWorld(),$c.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.ssaoPass&&this.ssaoPass.enabled&&this.ssaoPass.ssaoMaterial?.uniforms){const e=this.ssaoPass.ssaoMaterial.uniforms;e.cameraProjectionMatrix&&e.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),e.cameraInverseProjectionMatrix&&e.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse)}(this.localAtmoLight.intensity>.001||this.localBounceLight.intensity>.001)&&(this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,18),this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,-8))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,o)=>{this.gltfLoader.load(e,a=>i(a),void 0,a=>o(a))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const o=Array.isArray(i.material)?i.material:[i.material];for(const a of o)a&&a.emissiveIntensity!==void 0&&a.emissiveIntensity>3.2&&(a.emissiveIntensity=2.2+Math.log10(a.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){n.scale.multiplyScalar(Ri);const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(f1)){const o=t.getObjectByName(i.spinnerName),a=t.getObjectByName(i.rootName),r=t.getObjectByName(i.bodyName);if(!a)continue;const c=new li().setFromQuaternion(o?o.quaternion:new ct,"YXZ").y||0,h=i.semiMajorAxis,u=i.eccentricity||.04,d=h*(1-u*u)/(1+u*Math.cos(c));a.position.set(d,0,0);const f=[];let g=0;const x={P1_Moon_A_Ghomrassen:"Luna Ghomrassen",P1_Moon_B_Guermessa:"Luna Guermessa",P2_Moon_NeoLuna:"Neo-Luna",P3_Moon_A_Argent:"Luna Argent",P3_Moon_B_Crimson:"Luna Crimson",P4_Moon_Centax_1:"Centax I",P4_Moon_Centax_2:"Centax II",P4_Moon_Centax_3:"Centax III",P5_Moon_1_InnerShepherd:"Pastora Interior",P5_Moon_2_Polyphemus_Minor:"Polyphemus Minor",P5_Moon_3_Eywa_Outpost:"Puesto Eywa"};this.orbitalGroup.updateMatrixWorld(!0),a.children.forEach(E=>{if(E.name.includes("Moon")&&!E.name.endsWith("_Orbit")){E.scale.multiplyScalar(2.6);let M=.08;E.traverse(C=>{if(C.isMesh&&C.material&&(C.material.fog=!1,C.geometry)){C.geometry.boundingSphere||C.geometry.computeBoundingSphere();const D=(C.geometry.boundingSphere?.radius||.5)*Math.max(C.scale.x,C.scale.y,C.scale.z);D>M&&(M=D)}});const S=2.35+g*.48;if(n==="p1"){const C=i.localRadius*(2.35+g*.62),D=C*(.16+g*.08),N=g===0?-1.85:-.78;E.position.set(Math.cos(N)*C,D,Math.sin(N)*C),a.updateMatrixWorld(!0);const R=new b;E.getWorldPosition(R),f.push({index:g,rawName:E.name,name:x[E.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:E,moonRadius:Math.max(20,M*Math.max(E.scale.x,1)*Rn),baseRadius:C,angle:N,yOffset:D,speed:.014+g*.008,prevWorldPos:R.clone(),currWorldPos:R.clone(),deltaPos:new b})}else{E.position.multiplyScalar(Ri),E.position.length()<i.localRadius*S&&E.position.normalize().multiplyScalar(i.localRadius*S),a.updateMatrixWorld(!0);const C=new b;E.getWorldPosition(C);const D=Math.max(i.localRadius*S*.85,Math.hypot(E.position.x,E.position.z));f.push({index:g,rawName:E.name,name:x[E.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:E,moonRadius:Math.max(20,M*Math.max(E.scale.x,1)*Rn),baseRadius:D,angle:Math.atan2(E.position.z,E.position.x),yOffset:E.position.y,speed:.06+g%3*.03,prevWorldPos:C.clone(),currWorldPos:C.clone(),deltaPos:new b})}g++}});const m=new Lt;m.name=`${i.id}_Axial_Tilt`,m.rotation.order="XZY",m.rotation.x=i.axialTiltX||0,m.rotation.z=i.axialTiltZ||0,a.add(m);const p=new Lt;p.name=`${i.id}_Axial_Spin`,p.rotation.y=i.initialSpinAngle||0,m.add(p);let _=null,y=null,v=null;if(i.landable){a.traverse(M=>{M!==a&&M.isMesh&&(M.name.includes("_Body")||M.name.includes("_Atmosphere")||M.name.includes("_Clouds")||M.name.includes("_DarkClouds")||/^Planet_01/i.test(M.name))&&(M.visible=!1)}),_=vy(i,Rn),_.userBaseColors={sunlit:new te(_.cloudDeckPalette.sunlit),ambient:new te(_.cloudDeckPalette.ambient),horizon:new te(_.cloudDeckPalette.horizon)},p.add(_.group),y=_.atmosphere,v=new Lt,v.name=`${i.id}_Cap_Frame`;const E=i.capLocalDir?i.capLocalDir.clone().normalize():new b(0,1,0);v.quaternion.setFromUnitVectors(new b(0,1,0),E),p.add(v)}else{const E=a.children.filter(M=>M!==m&&!M.name.includes("Moon")&&!M.name.includes("_Orbit"));for(const M of E)M.scale.multiplyScalar(Ri),p.add(M);y=Nf(i,i.localRadius,1.05),p.add(y)}const T=new Lt;T.name=`${i.id}_Atmosphere_Surface_Detail`,T.visible=!1,(v||p).add(T),this.orbitalGroup.updateMatrixWorld(!0);const w=new b;a.getWorldPosition(w);const A=new ct;p.getWorldQuaternion(A),this.planetNodes.set(n,{config:i,spinner:o,root:a,tiltGroup:m,spinGroup:p,capFrame:v,body:r,orbitalBundle:_,atmosphereShell:y,surfaceCapGroup:T,surfaceLoaded:!1,surfaceLoading:!1,surfaceStreaming:null,surfaceTerrainActivated:!1,lastActivatedThisFrame:0,animators:[],nightMaterials:[],orbitAngle:c,spinAngle:i.initialSpinAngle||0,prevWorldPos:w.clone(),currWorldPos:w.clone(),planetDeltaPos:new b,prevSpinWorldQuat:A.clone(),currSpinWorldQuat:A.clone(),spinQuatDelta:new ct,moonOrbits:f})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95*Ri,2.15*Ri,2.35*Ri),this.controls.setPose(new b(0,5600,19800),new b(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded)return t?.surfacePromise||null;if(t.surfacePromise)return t.surfacePromise;t.surfaceLoading=!0;const n=t.config;return t.surfacePromise=(async()=>{try{if(n.hasProceduralWorld){const o=$y(n);t.surfaceCapGroup.add(o.group),t.pandoraWorld=o,o.terrainSplatUniforms&&(t.splatUniforms=[o.terrainSplatUniforms]),o.reflectiveWaters&&(t.reflectiveWaters=o.reflectiveWaters);const a=r1(n.localRadius,o);t.surfaceCapGroup.add(a.group),t.animators.push(a)}else if(n.surfaceUrl){const o=await this._loadGLB(n.surfaceUrl);if(My(o,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(o),o.userData?.splatUniforms?.length&&(t.splatUniforms=[...t.splatUniforms||[],...o.userData.splatUniforms]),n.id==="p2"){this._calibrateNightCityMaterials(o);const a=ay(n),r=a.group.getObjectByName("NC_7Districts_Coastal_Terrain");r&&(r.receiveShadow=!0);const l=a.group.getObjectByName("NC_Badlands_Desert_Roads");l&&(l.receiveShadow=!0),a.terrainSplatUniforms&&(t.splatUniforms=[...t.splatUniforms||[],a.terrainSplatUniforms]),a.bayWater&&(t.reflectiveWaters=[{water:a.bayWater,centerLocal:a.bayWater.position.clone(),isOceanSurface:!1}]),t.surfaceCapGroup.add(a.group),t.animators.push(a);const c=dd(n.id,n.localRadius,350);t.surfaceCapGroup.add(c.group),t.animators.push(c),t.animators.push(Jy(o))}else if(n.id==="p4"){const a=_y(n,1400);t.surfaceCapGroup.add(a);const r=dd(n.id,n.localRadius,350);t.surfaceCapGroup.add(r.group),t.animators.push(r),t.animators.push(e1(o))}else if(n.id==="p3"){const a=t1(n.localRadius);t.surfaceCapGroup.add(a.group),t.animators.push(a);const r=new $s(n.localRadius*.038,32),l=new $r(r,{textureWidth:256,textureHeight:256,waterNormals:el(),sunDirection:new b(.4,.7,.3).normalize(),sunColor:16764808,waterColor:1465960,distortionScale:.36,size:3.2,clipBias:.002,alpha:.88,fog:!0});l.name="P3_Perugius_Reflective_Water",l.position.set(.035,n.localRadius+.0025,.015),l.rotation.x=-Math.PI*.5,l.visible=!1,t.surfaceCapGroup.add(l),t.reflectiveWaters=[{water:l,centerLocal:l.position.clone(),isOceanSurface:!1}],t.p3Water=l}}const i=new Set;t.surfaceCapGroup.traverse(o=>{if(!o.isMesh&&!o.isInstancedMesh)return;const a=Array.isArray(o.material)?o.material:[o.material];for(const r of a){if(!r||i.has(r)||r.userData?.animatedEmissive)continue;i.add(r),r.emissive&&r.emissiveIntensity!==void 0&&(r.emissiveMap||r.emissive.r>.008||r.emissive.g>.008||r.emissive.b>.008)&&t.nightMaterials.push({material:r,baseEmissive:r.emissiveIntensity,tier:r.userData?.nightTier||"default"})}}),this._buildSurfaceStreamingQueue(t),t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}})(),t.surfacePromise}_classifySurfaceTier(e,t){const n=/Shanty|Slum|Rancho|MicroWindow|VerticalNeon|Japantown_Neon|Streetlamp|FlaresAndFires|Industrial_Smoke|Abandoned_FerrisWheel|Giant_Ferns|Broadleaf_Shrubs|Ground_Clutter|Flowers_|Mushrooms_|Mossy_Rocks|WaterLilies|Hanging_Vines|Waterfall|Floating_Cinders|Reef_Corals|Giant_Kelp|Underwater_Caustics|Metkayina_Torches|Ash_Bonfires|Volcano_Smoke|HoloSign_|Sign_3D_|EdgeBeacon|Antenna|Beacon|Billboard|Lamp/i,i=/H10_Megablock|Stacked_Container|PortDepot|Charter_Heywood|NorthOak|Pacifica_Skeleton|Bay_Connecting_Bridges|Badlands_Rocks|Oil_Pump|WindTurbine|Greenhouse|Nomad|Desert_Roads|AV_Blimp|Urban_AV_Traffic|TowerBand|Medieval_Life|Geyser|IkranRookery|TreeOfSouls|Metkayina|Ash_Volcano|Giant_Bone|Tribal_Huts|Charred_Trees|Lava_Fissures|VineBridges|Canyon_Spires|Coral_Reefs|Valley_Arch|Inland_Lakes|Canopy_Under|Alien_Palms|Gnarled_Root|Alien_Redwood/i,o=/Terrain|Crystal_Ocean|Rivers|Hometree|HallelujahMountains|Tree_Trunks|Canopy_Tops|NeoMil|NeoKitsch|CityCenter_LightBeams|Procedural_Districts_Terrain/i,a=e.name||"";if(n.test(a))return"micro";if(i.test(a))return"medium";if(o.test(a))return"macro";let r=e.parent;for(;r&&r!==t;){const l=r.name||"";if(n.test(l))return"micro";if(i.test(l)||/Pandora_Life_System|Urban_AV_Traffic|TowerBand/i.test(l))return"medium";r=r.parent}return"macro"}_buildSurfaceStreamingQueue(e){const t=[],n={macro:0,medium:1,micro:2};e.surfaceCapGroup.traverse(i=>{if(i!==e.surfaceCapGroup){if(i.isWater||i.userData?.manualClutterLod){i.visible=!1;return}if(i.isMesh||i.isInstancedMesh||i.isPoints){const o=this._classifySurfaceTier(i,e.surfaceCapGroup),a=/Terrain|Crystal_Ocean|NeoMil|NeoKitsch|Hometree/i.test(i.name||"");i.visible=!1,t.push({obj:i,tier:o,priority:n[o]*10+(a?0:1),activated:!1,isPandoraTerrain:i.name==="Pandora_Global_Terrain_360"})}else(i.isGroup||i.isObject3D)&&!i.isLight&&(i.visible=!0)}}),t.sort((i,o)=>i.priority-o.priority),e.surfaceStreaming={items:t,totalCount:t.length,macroCount:t.filter(i=>i.tier==="macro").length,mediumCount:t.filter(i=>i.tier==="medium").length,microCount:t.filter(i=>i.tier==="micro").length,compiled:!1,compiling:!1},e.surfaceTerrainActivated=!1,e.lastActivatedThisFrame=0}_updateSurfaceStreaming(e,t,n){e.lastActivatedThisFrame=0;const i=e.surfaceStreaming;if(!e.surfaceLoaded||!i){e.surfaceCapGroup.visible=!1,e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}if(t<=pd&&!i.compiled&&!i.compiling&&typeof this.renderer?.compileAsync=="function"&&(i.compiling=!0,Promise.resolve(this.renderer.compileAsync(e.surfaceCapGroup,this.camera,this.scene)).catch(()=>{}).finally(()=>{i.compiled=!0,i.compiling=!1})),n>h1||t>pd){if(e.surfaceCapGroup.visible||e.surfaceTerrainActivated){e.surfaceCapGroup.visible=!1,e.surfaceTerrainActivated=!1;for(let c=0;c<i.items.length;c++){const h=i.items[c];(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1)}}e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}const o=n<=c1&&t<=.86,a=n<=u1,r=n<=d1;if(!o){e.surfaceCapGroup.visible=!1,e.surfaceTerrainActivated=!1;for(let c=0;c<i.items.length;c++){const h=i.items[c];(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1)}e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}e.surfaceCapGroup.visible=!0;let l=0;for(let c=0;c<i.items.length;c++){const h=i.items[c];if(!(h.tier==="macro"?o:h.tier==="medium"?a:r)){(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1,h.isPandoraTerrain&&(e.surfaceTerrainActivated=!1));continue}h.activated||l<l1&&(h.obj.visible=!0,h.activated=!0,l++,h.isPandoraTerrain&&(e.surfaceTerrainActivated=!0))}e.lastActivatedThisFrame=l,e.config.hasProceduralWorld&&e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!e.surfaceTerrainActivated)}_calibrateNightCityMaterials(e){const t=new Set;e.traverse(n=>{if(n.isLight){n.visible=!1,n.intensity=0;return}if(!n.isMesh)return;const i=/Skyscraper|Tower|Plaza|Arasaka|Militech|Corp|Bridge/i.test(n.name||"");n.castShadow=i,n.receiveShadow=!0;const o=Array.isArray(n.material)?n.material:[n.material];for(const a of o){if(!a||t.has(a)||a.emissiveIntensity===void 0)continue;t.add(a),a.userData=a.userData||{};const r=a.name||"";/Windows_Dense|Windows_Brutal|Windows_High|backboard/i.test(r)?(a.emissive.setHex(11059928),a.emissiveIntensity=.24,a.userData.nightTier="window"):/rib_warm_white/i.test(r)?(a.emissiveIntensity=.27,a.userData.nightTier="window"):/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber/i.test(r)?(a.emissiveIntensity=.82,a.userData.nightTier="accent"):/chimney_flare/i.test(r)?(a.emissiveIntensity=1.78,a.userData.nightTier="hero"):/neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(r)?(a.emissiveIntensity=/Koi|Geisha|Banner/i.test(r)?1.85:1.62,a.userData.nightTier="hero"):(a.emissiveIntensity=Math.min(.24,a.emissiveIntensity),a.userData.nightTier="window")}})}_showTransitionBanner(e,t,n,i=1500){const o=document.getElementById("hud-transition-banner"),a=document.getElementById("banner-subtitle"),r=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");a&&(a.textContent=e),r&&(r.textContent=t),o&&o.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{o&&o.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){const t=document.querySelectorAll(".nav-btn");t.length!==0&&t.forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){if(e&&typeof e=="object")return this._navigateToDescriptor(e);const t=String(e);if(this._highlightActiveNavButton(t),t==="1")return this._flyToSolarSystemOverview(!1);if(t==="2")return this._flyToStation("crystal_palace");const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const o=this.planetNodes.get(i);if(!o)return;await this.ensurePlanetSurfaceLoaded(i),this.orbitalGroup.updateMatrixWorld(!0);const a=new b;o.root.getWorldPosition(a);const r=this.camera.position.distanceTo(a),l=o.config.localRadius*Rn,c=l*_s;return r-l>c*1.1?this._flyToPlanetOrbit(i):this._flyToPlanetSurface(i)}async _navigateToDescriptor(e){switch(e.type){case"sun_orbit":return this._flyToSolarSystemOverview(!0);case"station":return this._flyToStation(e.stationId||"crystal_palace");case"planet_orbit":return this._flyToPlanetOrbit(e.planetKey);case"planet_surface":return this._flyToPlanetSurface(e.planetKey,e.landmarkId);case"moon":return this._flyToMoon(e.planetKey,e.moonIndex??0);default:return null}}_flyToSolarSystemOverview(e=!1){const t=e?{targetPos:new b(0,1200,4400),lookAtPos:new b(0,0,0)}:{targetPos:new b(0,6100,21e3),lookAtPos:new b(0,0,0)};this.controls.engageAutopilot({getTargetPose:()=>({targetPos:t.targetPos.clone(),lookAtPos:t.lookAtPos.clone(),upVec:new b(0,1,0)}),duration:3.4})}async _flyToStation(e="crystal_palace"){if(e!=="crystal_palace"||(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor))return;this.orbitalGroup.updateMatrixWorld(!0);const t=new b;this.crystalPalaceAnchor.getWorldPosition(t);const n=this.camera.position.distanceTo(t),i=X.clamp(n/3200,2.8,5.2);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const o=new b;this.crystalPalaceAnchor.getWorldPosition(o);const a=o.clone().negate().normalize(),r=new b().crossVectors(new b(0,1,0),a).normalize();return{targetPos:o.clone().addScaledVector(a,62).addScaledVector(r,38).add(new b(0,20,0)),lookAtPos:o,upVec:new b(0,1,0)}},duration:i})}async _flyToPlanetOrbit(e){const t=this.planetNodes.get(e);if(!t)return;const n=t.config;n.landable&&await this.ensurePlanetSurfaceLoaded(e);const i=t.capFrame||t.spinGroup||t.root;this.orbitalGroup.updateMatrixWorld(!0);const o=new b;t.root.getWorldPosition(o);const a=this.camera.position.distanceTo(o),r=X.clamp(a/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>{if(this.orbitalGroup.updateMatrixWorld(!0),!n.landable){const l=new b;t.root.getWorldPosition(l);const c=l.clone().negate().normalize(),h=new b().crossVectors(new b(0,1,0),c).normalize(),u=n.localRadius*Rn;return{targetPos:l.clone().addScaledVector(c,u*2.55).addScaledVector(h,u*1.45).add(new b(0,u*1.15,0)),lookAtPos:l,upVec:new b(0,1,0)}}return{targetPos:n.lowOrbitOffset.clone().applyMatrix4(i.matrixWorld),lookAtPos:n.lowOrbitLookAt.clone().applyMatrix4(i.matrixWorld),upVec:new b(0,1,0).transformDirection(i.matrixWorld).normalize()}},duration:r})}async _flyToPlanetSurface(e,t=null){const n=this.planetNodes.get(e);if(!n)return;const i=n.config;if(!i.landable)return this._flyToPlanetOrbit(e);if(await this.ensurePlanetSurfaceLoaded(e),e==="p1"&&t)return this.navigateToPandoraLandmark(t);if(e==="p2"&&t)return this.navigateToNightCityDistrict(t);const o=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const a=new b;n.root.getWorldPosition(a);const r=this.camera.position.distanceTo(a),l=i.localRadius*Rn,c=l*_s,h=r-l;if(h>c*1.18){const u=X.clamp(r/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.highCloudOffset.clone().applyMatrix4(o.matrixWorld),lookAtPos:i.lowOrbitLookAt.clone().applyMatrix4(o.matrixWorld),upVec:new b(0,1,0).transformDirection(o.matrixWorld).normalize()}),duration:u,onComplete:()=>{this._engageCloudBreakoutGlide(i,o)}});return}if(h>c*.24){this._engageCloudBreakoutGlide(i,o);return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.aerialOffset.clone().applyMatrix4(o.matrixWorld),lookAtPos:i.aerialLookAt.clone().applyMatrix4(o.matrixWorld),upVec:new b(0,1,0).transformDirection(o.matrixWorld).normalize()}),duration:2.6})}_engageCloudBreakoutGlide(e,t){this.orbitalGroup.updateMatrixWorld(!0);const n=new nt().copy(t.matrixWorld).invert(),i=this.camera.position.clone().applyMatrix4(n),o=[i];i.distanceTo(e.highCloudOffset)>e.localRadius*.28&&o.push(e.highCloudOffset.clone());const a=e.highCloudOffset.clone().lerp(e.aerialOffset,.55).normalize().multiplyScalar(e.localRadius*(1+_s*.48)),r=e.highCloudOffset.clone().lerp(e.aerialOffset,.82).normalize().multiplyScalar(e.localRadius*(1+_s*.16));o.push(a,r,e.aerialOffset.clone());const l=new ii(o);this.controls.engageAutopilot({useDirectCurve:!0,duration:8.2,getTargetPose:c=>{this.orbitalGroup.updateMatrixWorld(!0);const h=l.getPoint(c),u=e.aerialLookAt.clone().lerp(e.lowOrbitLookAt,Math.pow(1-c,1.8)*.45),f=l.getPoint(Math.min(1,c+.08)).lerp(u,Math.min(1,c*1.15+.2));return{targetPos:h.applyMatrix4(t.matrixWorld),lookAtPos:f.applyMatrix4(t.matrixWorld),upVec:new b(0,1,0).transformDirection(t.matrixWorld).normalize()}}})}async _flyToMoon(e,t=0){const n=this.planetNodes.get(e),i=n?.moonOrbits?.[t];if(!n||!i)return;this.orbitalGroup.updateMatrixWorld(!0);const o=new b;i.node.getWorldPosition(o);const a=this.camera.position.distanceTo(o),r=X.clamp(a/3400,2.8,5.4),l=Math.max(46,i.moonRadius*4);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const c=new b;i.node.getWorldPosition(c);const h=c.clone().negate().normalize(),u=new b().crossVectors(new b(0,1,0),h).normalize();return{targetPos:c.clone().addScaledVector(h,l*.72).addScaledVector(u,l*.68).add(new b(0,l*.26,0)),lookAtPos:c,upVec:new b(0,1,0)}},duration:r})}async navigateToPandoraLandmark(e){const t=wt.find(n=>n.id===e);return this._navigateToCapLandmark("p1",t)}async navigateToNightCityDistrict(e){const t=gr[e]||gr.city_center;return this._navigateToCapLandmark("p2",t)}async _navigateToCapLandmark(e,t){const n=this.planetNodes.get(e);if(!t||!n)return;await this.ensurePlanetSurfaceLoaded(e);const i=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const o=n.config.localRadius,a=new nt().copy(i.matrixWorld).invert(),r=this.camera.position.clone().applyMatrix4(a),l=t.capDir.clone().normalize(),c=Math.abs(l.y)<.85?new b(0,1,0):new b(1,0,0),h=new b().crossVectors(l,c).normalize(),u=l.clone().multiplyScalar(o+t.viewAlt).addScaledVector(h,-t.viewBack).normalize().multiplyScalar(o+t.viewAlt),d=l.clone().multiplyScalar(o+t.viewAlt*.25);if(r.length()>o*1.88){const M=l.clone().multiplyScalar(o*1.48).addScaledVector(h,-.22),S=new b;n.root.getWorldPosition(S);const C=X.clamp(this.camera.position.distanceTo(S)/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:M.clone().applyMatrix4(i.matrixWorld),lookAtPos:l.clone().multiplyScalar(o).applyMatrix4(i.matrixWorld),upVec:l.clone().transformDirection(i.matrixWorld).normalize()}),duration:C,onComplete:()=>{this._navigateToCapLandmark(e,t)}});return}const f=r.clone().normalize(),g=f.angleTo(l),x=Math.min(1.15,g*.65),m=Math.max(3,Math.ceil(g/.35)),p=new ct,_=new ct().setFromUnitVectors(f,l),y=new ct,v=Math.max(o+.05,Math.min(r.length(),o*1.48)),T=o+t.viewAlt,w=[r.clone()];for(let M=1;M<m;M++){const S=M/m;p.copy(y).slerp(_,S);const C=f.clone().applyQuaternion(p).normalize(),D=X.lerp(v,T,S)+Math.sin(S*Math.PI)*x;w.push(C.multiplyScalar(D))}w.push(u);const A=new ii(w),E=X.clamp(2.2+g*1.5,2.4,5.4);this.controls.engageAutopilot({useDirectCurve:!0,duration:E,getTargetPose:M=>{this.orbitalGroup.updateMatrixWorld(!0);const S=A.getPoint(M),D=A.getPoint(Math.min(1,M+.08)).lerp(d,Math.min(1,M*1.35)),N=S.clone().normalize();return{targetPos:S.applyMatrix4(i.matrixWorld),lookAtPos:D.applyMatrix4(i.matrixWorld),upVec:N.transformDirection(i.matrixWorld).normalize()}}})}_sampleNightCityAtmo(e){const t=this._p2Atmo;t.fogDay.setRGB(0,0,0),t.fogNight.setRGB(0,0,0),t.fogDusk.setRGB(0,0,0),t.hemiSky.setRGB(0,0,0),t.hemiGround.setRGB(0,0,0),t.ambient.setRGB(0,0,0),t.localLight.setRGB(0,0,0),t.localBounce.setRGB(0,0,0);let n=0,i=0;for(const o of Io){const a=e.weights[o.id]||0;if(a<=1e-4)continue;const r=o.atmo;t.fogDay.add(this._tmpColorC.setHex(r.fogDay).multiplyScalar(a)),t.fogNight.add(this._tmpColorC.setHex(r.fogNight).multiplyScalar(a)),t.fogDusk.add(this._tmpColorC.setHex(r.fogDusk).multiplyScalar(a)),t.hemiSky.add(this._tmpColorC.setHex(r.hemiSky).multiplyScalar(a)),t.hemiGround.add(this._tmpColorC.setHex(r.hemiGround).multiplyScalar(a)),t.ambient.add(this._tmpColorC.setHex(r.ambient).multiplyScalar(a)),t.localLight.add(this._tmpColorC.setHex(r.localLight).multiplyScalar(a)),t.localBounce.add(this._tmpColorC.setHex(r.localBounce).multiplyScalar(a)),n+=r.fogDensity*a,i+=r.bloomCap*a}return e.district==="westbrook"&&e.subzone==="north_oak"&&(n*=.48,i=Math.min(i,.4)),t.fogDensity=n,t.bloomCap=i,t}update(e){const t=Math.min(e,.1),n=t*this.timeScale;this.elapsedTime+=t,this.simulationTime+=n,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),$c.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,R]of this.planetNodes){const U=R.config;R.prevWorldPos.copy(R.currWorldPos),R.spinGroup&&R.prevSpinWorldQuat.copy(R.currSpinWorldQuat),R.orbitAngle+=n*U.orbitOmega;const z=U.semiMajorAxis,B=U.eccentricity||.04,I=z*(1-B*B)/(1+B*Math.cos(R.orbitAngle));R.spinner&&(R.spinner.rotation.y=R.orbitAngle),R.root.position.set(I,0,0);for(const O of R.moonOrbits)O.angle+=n*O.speed,O.node.position.set(Math.cos(O.angle)*O.baseRadius,O.yOffset,Math.sin(O.angle)*O.baseRadius);R.spinAngle+=n*(U.axialOmega??U.rotationSpeed??.012),R.spinGroup&&(R.spinGroup.rotation.y=R.spinAngle),R.orbitalBundle&&(R.orbitalBundle.lowerCloudMesh.rotation.y+=n*U.rotationSpeed*.45,R.orbitalBundle.upperCloudMesh.rotation.y+=n*U.rotationSpeed*.85,R.orbitalBundle.lowerCloudGroup.rotation.y+=n*U.rotationSpeed*.28)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=n*.06),this.orbitalGroup.updateMatrixWorld(!0);let i="Sol Central",o=Math.max(0,this.camera.position.length()-2.21*3.2*Rn),a=12e3,r=null,l=null,c=99999;for(const[R,U]of this.planetNodes){U.root.getWorldPosition(U.currWorldPos),U.planetDeltaPos.copy(U.currWorldPos).sub(U.prevWorldPos);for(const J of U.moonOrbits)J.prevWorldPos.copy(J.currWorldPos),J.node.getWorldPosition(J.currWorldPos),J.deltaPos.copy(J.currWorldPos).sub(J.prevWorldPos);U.spinGroup&&(U.spinGroup.getWorldQuaternion(U.currSpinWorldQuat),this._tmpInvQuat.copy(U.prevSpinWorldQuat).invert(),U.spinQuatDelta.copy(U.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize());const z=U.config.localRadius*Rn,B=z*_s,I=this.camera.position.distanceTo(U.currWorldPos),O=I-z,j=O/B;if(U.atmosphereShell&&U.atmosphereShell.material.uniforms){const J=U.atmosphereShell.material.uniforms;J.uSunPosition.value.set(0,0,0);const ne=X.smoothstep(j,0,.85);J.uAltitudeFade.value=X.lerp(.18,1,ne)}if(U.config.landable){!U.surfaceLoaded&&!U.surfaceLoading&&I<z*4.5&&this.ensurePlanetSurfaceLoaded(R),U.surfaceCapGroup.scale.setScalar(1);const J=Math.max(0,(O-(U.config.groundFloorAlt??.95))*_r);if(this._updateSurfaceStreaming(U,j,J),U.orbitalBundle){const ne=U.orbitalBundle;ne.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(U.currWorldPos),ne.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(U.currWorldPos);const ye=X.smoothstep(j,.14,.42),Q=ye*.64,de=ye*.86;if(ne.lowerCloudMesh.material.uniforms.uOpacity.value=Q,ne.lowerCloudMesh.visible=Q>.008,ne.upperCloudMesh.material.uniforms.uOpacity.value=de,ne.upperCloudMesh.visible=de>.008,j<.85){const xe=1-X.smoothstep(j,.42,.85),$=Math.exp(-Math.pow((j-.15)/.14,2))*.85,ae=Math.max(xe*.36,$);ne.lowerCloudPuffs.material.opacity=ae,ne.lowerCloudGroup.visible=ae>.008}else ne.lowerCloudGroup.visible=!1}}O<o&&(o=Math.max(0,O),i=U.config.name,a=U.config.kmScale),O<c&&(c=O,l=U,r=R)}if(this.crystalPalaceAnchor){this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);const R=Math.max(0,this.camera.position.distanceTo(this._tmpStationPos)-12);R<o&&(o=R,i="Estación Crystal Palace",a=850)}let h=!1,u=!1,d=1,f=0,g=null,x=null,m=null,p=this._identityQuat,_=220,y=220*_s,v=.95,T=8,w=0,A=0,E=null,M=null,S=null,C="ESPACIO";if(l){const R=l.config;if(_=R.localRadius*Rn,y=_*_s,v=R.groundFloorAlt??.95,T=R.minSpeed??8,R.id==="p1"&&l.pandoraWorld){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();const I=l.pandoraWorld.getFloorAndWaterAtDir(this._tmpLocalDir);E=I;const O=I.terrainElev*Rn+(I.hasWater?.55:1.15);if(v=I.hasWater?O:Math.max(.65,O),I.hasWater){const j=I.waterElev*Rn;c<j&&(A=j-c,w=X.clamp(A/1.8,0,1))}}else if(R.id==="p2"){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize(),M=Co(this._tmpLocalDir.x,this._tmpLocalDir.y,this._tmpLocalDir.z),S=this._sampleNightCityAtmo(M);const I=Math.max(0,M.elevationRatio)*_;v=Math.max(R.groundFloorAlt??.32,I+.38)}const U=y*1.25,z=c/y;if(z>1){for(const B of l.moonOrbits){const I=this.camera.position.distanceTo(B.currWorldPos);if(I<Math.max(85,B.moonRadius*6)){u=!0,g=B.deltaPos,x=B.currWorldPos,m=B.prevWorldPos,p=this._identityQuat,_=B.moonRadius,v=1.8,y=Math.max(95,B.moonRadius*4.5),c=I-B.moonRadius,i=B.name,o=Math.max(0,c);break}}if(!u&&this.crystalPalaceAnchor){const B=this.planetNodes.get("p2");B&&(this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos),this.camera.position.distanceTo(this._tmpStationPos)<220&&(u=!0,g=B.planetDeltaPos,x=B.currWorldPos,m=B.prevWorldPos,p=this._identityQuat))}}if(!u&&c<U&&(u=!0,g=l.planetDeltaPos,x=l.currWorldPos,m=l.prevWorldPos,p=l.spinQuatDelta),R.landable&&z<1.06){h=z<=1,this.currentDominantPlanet=h?R:null,h&&this.lastBannerPlanetId!==R.id&&(this.lastBannerPlanetId=R.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${R.name.toUpperCase()}`,R.glowCss,1700),R.navKey&&this._highlightActiveNavButton(R.navKey));const B=X.clamp(1-z,0,1),I=1-X.smoothstep(z,.92,1.06),O=this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),j=this._tmpSunDir.copy(this.camera.position).negate().normalize(),J=X.clamp(O.dot(j),-1,1);d=J,f=B;const ne=X.smoothstep(-J,-.02,.24),ye=X.smoothstep(J,-.02,.28),Q=Math.exp(-Math.pow((J-.02)/.14,2))*(1-ne*.55);J>.14?C="DÍA":J>=-.08?C="ATARDECER":C="NOCHE";const de=1-X.smoothstep(B,.04,.25);for(const ot of this.orbitLines)ot.material.opacity=ot.baseOpacity*de,ot.mesh.visible=de>.01;const xe=-Math.sqrt(Math.max(0,1-Math.pow(_/Math.max(_,_+c),2))),$=X.smoothstep(B,.01,.36),ae=this.skyDome.material.uniforms;if(R.skyDome){const ot=R.id==="p2"?1444388:1841212,Ot=R.id==="p2"?7085388:R.id==="p1"?6039150:10174e3,Sn=R.id==="p2"?16726909:16743220,Ln=R.id==="p2"?331292:198678,Pt=R.id==="p2"?1058888:R.id==="p1"?404536:R.id==="p4"?2494984:529190,_n=R.id==="p1"&&E?this._tmpColorC.setHex(1799371).lerp(this._tmpColorB.setHex(1737450),E.waterFactor).lerp(this._tmpColorB.setHex(3024934),E.ashFactor).getHex():R.skyDome.zenith,cn=R.id==="p1"&&E?this._tmpColorC.setHex(5157068).lerp(this._tmpColorB.setHex(5687029),E.waterFactor).lerp(this._tmpColorB.setHex(6309432),E.ashFactor).getHex():R.skyDome.mid,fn=R.id==="p1"&&E?this._tmpColorC.setHex(8707782).lerp(this._tmpColorB.setHex(10810618),E.waterFactor).lerp(this._tmpColorB.setHex(11034162),E.ashFactor).getHex():R.skyDome.horizon;this._tmpColorA.setHex(_n),this._tmpColorA.lerp(this._tmpColorB.setHex(ot),Q*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(66312),ne*.94),ae.uZenithColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(cn),this._tmpColorA.lerp(this._tmpColorB.setHex(Ot),Q*.85),this._tmpColorA.lerp(this._tmpColorB.setHex(Ln),ne*.92),ae.uMidColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(fn),this._tmpColorA.lerp(this._tmpColorB.setHex(Sn),Q*.9),this._tmpColorA.lerp(this._tmpColorB.setHex(Pt),ne*.92),ae.uHorizonColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(R.skyDome.sunGlow),this._tmpColorA.lerp(this._tmpColorB.setHex(16757844),Q*.82),this._tmpColorA.lerp(this._tmpColorB.setHex(1451069),ne*.9),ae.uSunGlowColor.value.copy(this._tmpColorA);const Jt=R.skyDome.zenithAlpha;if(ae.uZenithAlpha.value=X.lerp(Jt,Math.max(.16,Jt*.24),ne),w>.001){const nn=ne>.5?136738:547442,Bt=ne>.5?272444:821410;ae.uZenithColor.value.lerp(this._tmpColorB.setHex(nn),w),ae.uMidColor.value.lerp(this._tmpColorB.setHex(nn),w),ae.uHorizonColor.value.lerp(this._tmpColorB.setHex(Bt),w),ae.uSunGlowColor.value.lerp(this._tmpColorB.setHex(2808046),w*.85),ae.uZenithAlpha.value=X.lerp(ae.uZenithAlpha.value,.96,w)}if(ae.uLocalUp.value.copy(O),ae.uSunDir.value.copy(j),ae.uHorizonDot.value=xe,ae.uAtmoOpacity.value=$,ae.uMieIntensity&&(ae.uMieIntensity.value=X.lerp(.62,.08,ne)),this.skyDome.visible=$>.005,this.starfield.userData.setStarVisibility){const nn=M?.weights?.badlands||0,Bt=M?.district==="westbrook"&&M?.subzone==="north_oak"?.35:0,Ut=Math.min(.6,nn*.55+Bt),Zt=X.lerp(Math.max(R.skyDome.starFloor,Ut),Math.max(R.skyDome.starFloor,.45+Ut*.35),Q*(1-ye*.7)),P=X.lerp(Zt,M&&nn>.45?1:.96,ne),Y=X.lerp(1,P,X.smoothstep(B,.06,.42))*(1-w);this.starfield.userData.setStarVisibility(Y)}}if(l.orbitalBundle){const ot=l.orbitalBundle,Ot=R.id==="p2"?14239882:16749142,Sn=R.id==="p2"?16726909:16740396;if(ot.userBaseColors){this._tmpColorA.copy(ot.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(Ot),Q*.72),this._tmpColorC.copy(ot.userBaseColors.horizon).lerp(this._tmpColorB.setHex(Sn),Q*.85);for(const Pt of[ot.upperCloudMesh,ot.lowerCloudMesh])Pt.material.uniforms.uSunColor.value.copy(this._tmpColorA),Pt.material.uniforms.uHorizonColor.value.copy(this._tmpColorC)}const Ln=R.id==="p2"?1452616:1319480;this._tmpColorA.copy(ot.userBaseColors?ot.userBaseColors.sunlit:this._tmpColorB.setHex(16777215)),this._tmpColorA.lerp(this._tmpColorB.setHex(Ot),Q*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(Ln),ne*.88),ot.lowerCloudPuffs.material.color.copy(this._tmpColorA)}const me=B>.32;for(const[ot,Ot]of this.planetNodes)Ot.root.visible=me?ot===r:!0;const re=1-X.smoothstep(z,.45,.98),Me=R.id==="p1"&&E&&E.ashFactor>.35?919044:198156,V=R.id==="p2"?3871275:8139812,Re=R.id==="p1"&&E?this._tmpColorC.setHex(2655412).lerp(this._tmpColorB.setHex(2527952),E.waterFactor).lerp(this._tmpColorB.setHex(4994604),E.ashFactor).getHex():R.skyColor;this._tmpSkyColor.setHex(Re).lerp(this._tmpColorB.setHex(V),Q*.72).lerp(this._tmpColorB.setHex(Me),ne*.92),w>.001&&this._tmpSkyColor.lerp(this._tmpColorB.setHex(683142).lerp(this._tmpColorC.setHex(137768),ne),w),this.scene.background=this._tmpColorA.setHex(Me).clone().lerp(this._tmpSkyColor,re*.9);const k=R.id==="p1"&&E?1.05*E.forestFactor+.78*E.waterFactor+2.15*E.ashFactor:1,ge=(R.id==="p2"&&S?S.fogDensity:R.maxFogDensity*k)*(1-X.smoothstep(z,.2,.9)),Ne=.012*Math.exp(-Math.pow((z-.14)/.06,2)),Be=.0022*Math.exp(-Math.pow((z-.85)/.12,2)),rt=R.id==="p1"?.0024*(1-X.smoothstep(z,0,.05))*(1-(E?.ashFactor||0)*.4):0,Ve=(ge+Ne+Be+rt)*I,F=X.lerp(.022,.036,ne),L=X.lerp(Ve,F,w);if(R.id==="p2"&&S)this._tmpFogColor.copy(S.fogDay).lerp(S.fogDusk,Q*.76).lerp(S.fogNight,ne*.92);else{const ot=R.id==="p1"&&E?this._tmpColorC.setHex(5023914).lerp(this._tmpColorB.setHex(6476523),E.waterFactor).lerp(this._tmpColorB.setHex(6046772),E.ashFactor).getHex():R.fogColor,Ot=R.id==="p2"?6428730:13920826,Sn=R.id==="p1"?E&&E.ashFactor>.35?1444358:268836:329744;this._tmpFogColor.setHex(ot).lerp(this._tmpColorB.setHex(Ot),Q*.78).lerp(this._tmpColorB.setHex(Sn),ne*.9)}w>.001&&this._tmpFogColor.lerp(this._tmpColorB.setHex(883350).lerp(this._tmpColorC.setHex(205362),ne),w),this.camera.getWorldDirection(this._tmpCamFwd);const ee=Math.max(0,this._tmpCamFwd.dot(j)),ve=Math.pow(ee,3)*.35*(1-ne*.8)*(1-w);ve>.001&&ae.uSunGlowColor&&this._tmpFogColor.lerp(ae.uSunGlowColor.value,ve),this.scene.fog?(this.scene.fog.color.copy(this._tmpFogColor),this.scene.fog.density=L):this.scene.fog=new qr(this._tmpFogColor.getHex(),L);const le=A>.05,ce=Math.max(0,(c-v)*_r),Ie=R.id==="p1"?1-.34*(1-X.smoothstep(z,0,.05)):1,Se=R.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1,ze=X.lerp(.05,1,X.smoothstep(J,-.06,.24)),xt=X.lerp(1,.45,w);this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize();const Ae=h&&ce<2500&&ze>.08&&!le;if(this.planetaryDirLight.castShadow=Ae,Ae){const ot=this.planetaryDirLight.shadow.camera,Ot=ce<450?48:X.lerp(48,180,X.smoothstep(ce,450,2500));Math.abs(ot.right-Ot)>1&&(ot.left=-Ot,ot.right=Ot,ot.top=Ot,ot.bottom=-Ot,ot.near=4,ot.far=520,ot.updateProjectionMatrix()),this.planetaryDirLight.target.position.copy(this.camera.position),this.planetaryDirLight.position.copy(this.camera.position).addScaledVector(this._tmpPlanetToSun,220),this.planetaryDirLight.target.updateMatrixWorld()}else this.planetaryDirLight.target.position.copy(l.currWorldPos),this.planetaryDirLight.position.copy(l.currWorldPos).addScaledVector(this._tmpPlanetToSun,1200),this.planetaryDirLight.target.updateMatrixWorld();this.planetaryDirLight.color.setHex(R.sunColor).lerp(this._tmpColorB.setHex(16741424),Q*.72).lerp(this._tmpColorB.setHex(5008280),ne*.85),this.planetaryDirLight.intensity=X.lerp(.25,R.sunIntensity,B)*Ie*ze*xt,this.hemiLight.position.copy(O).multiplyScalar(100);const Fe=R.id==="p2"?16726909:16743220,st=R.id==="p1"?537668:R.id==="p2"?926272:792108,ht=R.id==="p1"?401448:527380,qe=R.id==="p1"&&E?this._tmpColorC.setHex(6079672).lerp(this._tmpColorB.setHex(7395583),E.waterFactor).lerp(this._tmpColorB.setHex(9069644),E.ashFactor).getHex():R.id==="p2"&&S?S.hemiSky.getHex():R.hemiSkyColor,pt=R.id==="p1"&&E?this._tmpColorC.setHex(1985064).lerp(this._tmpColorB.setHex(1330784),E.waterFactor).lerp(this._tmpColorB.setHex(2890772),E.ashFactor).getHex():R.id==="p2"&&S?S.hemiGround.getHex():R.hemiGroundColor;this._tmpColorA.setHex(qe).lerp(this._tmpColorB.setHex(Fe),Q*.55).lerp(this._tmpColorB.setHex(st),ne*.9),w>.001&&this._tmpColorA.lerp(this._tmpColorB.setHex(1889514).lerp(this._tmpColorC.setHex(407624),ne),w*.85),this.hemiLight.color.lerp(this._tmpColorA,Math.min(1,B*.35+.08)),this._tmpColorA.setHex(pt).lerp(this._tmpColorB.setHex(ht),ne*.85),this.hemiLight.groundColor.lerp(this._tmpColorA,Math.min(1,B*.35+.08)),this.hemiLight.intensity=X.lerp(.42,R.hemiIntensity,B)*X.lerp(1,.36,ne);const ut=R.id==="p1"&&E?this._tmpColorC.setHex(2247218).lerp(this._tmpColorB.setHex(1986148),E.waterFactor).lerp(this._tmpColorB.setHex(3548186),E.ashFactor).getHex():R.id==="p2"&&S?S.ambient.getHex():R.ambientColor;this._tmpColorA.setHex(ut).lerp(this._tmpColorB.setHex(1054760),ne*.82),this.ambientLight.color.lerp(this._tmpColorA,Math.min(1,B*.35+.08)),this.ambientLight.intensity=X.lerp(.55,R.ambientIntensity,B)*Ie*X.lerp(1,.45,ne);const vt=R.id==="p1"?.74:R.id==="p3"?.85:.9,K=R.id==="p1"?2.45*Se:R.id==="p2"?2.15:R.id==="p3"?2.25:1.95,Pe=Math.min(1,Math.max(ne,Q*.45)),fe=X.lerp(vt,K,Pe);if(l.surfaceCapGroup.visible){if(l.splatUniforms?.length)for(const ot of l.splatUniforms)ot.uPlanetCenter.value.copy(l.currWorldPos);l.p3Water?.material?.uniforms?.time&&(l.p3Water.material.uniforms.time.value+=t*.5),this._hideAllReflectiveWaters(l),this._updateReflectiveWaters(l,h&&!le&&ce<1e4,w,j),R.id==="p1"&&l.pandoraWorld?.updateGroundClutter&&l.pandoraWorld.updateGroundClutter(this._tmpLocalDir,ce,w);for(const ot of l.animators)ot.update(this.elapsedTime,fe,J,w);for(const ot of l.nightMaterials)R.id==="p2"?ot.tier==="window"?ot.material.emissiveIntensity=Math.min(.28,ot.baseEmissive*X.lerp(.7,1.15,Pe)):ot.tier==="hero"?ot.material.emissiveIntensity=X.clamp(ot.baseEmissive*X.lerp(.88,1.04,Pe),1.3,1.9):ot.material.emissiveIntensity=Math.min(.88,ot.baseEmissive*X.lerp(.75,1.1,Pe)):ot.material.emissiveIntensity=ot.baseEmissive*fe}else R.id==="p1"&&l.pandoraWorld?.updateGroundClutter&&l.pandoraWorld.updateGroundClutter(null,99999,0);const _e=1-X.smoothstep(z,.05,.45),Oe=R.id==="p1"?X.smoothstep(-J,-.1,.04):1,He=R.id==="p1"&&E&&w<=.2?this._tmpColorC.setHex(R.localLightColor).lerp(this._tmpColorB.setHex(2683096),E.waterFactor).lerp(this._tmpColorB.setHex(16742456),E.ashFactor).getHex():R.id==="p2"&&S?S.localLight.getHex():w>.2?1894655:R.localLightColor,Ye=R.id==="p1"&&E?this._tmpColorC.setHex(R.localBounceColor).lerp(this._tmpColorB.setHex(1628415),E.waterFactor).lerp(this._tmpColorB.setHex(16730648),E.ashFactor).getHex():R.id==="p2"&&S?S.localBounce.getHex():R.localBounceColor;this.localAtmoLight.color.setHex(He);const Nt=R.id==="p2"&&M?M.district==="pacifica"?.28:M.district==="badlands"?.22:.72:1;this.localAtmoLight.intensity=_e*5.2*Nt*Se*X.lerp(.85,1.38,Pe)*Math.max(Oe,w*.6),this.localAtmoLight.position.copy(this.camera.position).addScaledVector(O,18),this.localBounceLight.color.setHex(Ye),this.localBounceLight.intensity=_e*4.8*Nt*Se*X.lerp(.85,1.35,Pe)*Oe,this.localBounceLight.position.copy(this.camera.position).addScaledVector(O,-8);const Ft=X.lerp(.85,.55,ne)*(1-w*.45);if(this._updateDynamicIbl({planetId:R.id,zenithColor:ae.uZenithColor?ae.uZenithColor.value:this._tmpIblZenith,horizonColor:this._tmpFogColor,groundColor:this.hemiLight.groundColor,sunDir:j,sunColor:this.planetaryDirLight.color,sunElev:J,altRatio:z,intensity:Ft}),this.ssaoPass){const ot=h&&ce<4e3&&!le;if(this.ssaoPass.enabled=ot,ot&&this.ssaoPass.ssaoMaterial?.uniforms){const Ot=this.ssaoPass.ssaoMaterial.uniforms;Ot.cameraProjectionMatrix&&Ot.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),Ot.cameraInverseProjectionMatrix&&Ot.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse)}}if(this.bloomPass){if(R.id==="p2"&&S){const ot=Math.min(.45,S.bloomCap*X.lerp(.82,.95,ne));this.bloomPass.strength=X.lerp(.36,ot,_e)}else{const Ot=Math.min(.45,R.bloomStrength*.68*Se*X.lerp(.85,1.12,ne));this.bloomPass.strength=X.lerp(.35,Ot,_e)}this.bloomPass.strength=Math.min(.45,this.bloomPass.strength)}if(this.renderer){const ot=X.lerp(1.04,1.12,ne)*(1-w*.06);this.renderer.toneMappingExposure=X.lerp(this.renderer.toneMappingExposure,X.clamp(ot,.98,1.15),Math.min(1,t*3))}const mt=Math.exp(-Math.pow((z-.78)/.2,2))*.85,dn=Math.exp(-Math.pow((z-.4)/.14,2))*.55,mn=R.id==="p1"&&E?E.ashFactor*_e*.42:0,vn=w>.08?4126184:R.id==="p1"&&E&&E.ashFactor>.38?16751192:R.particleColor;this.cockpitParticles.setAtmosphereStyle(vn,Math.max(Math.max(mt,dn),w*.72,mn))}}if(l&&c/y>=1.06&&(h=!1),this.mode=h?"SURFACE":"ORBIT",!l||!l.config.landable||c/y>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const R of this.orbitLines)R.material.opacity=R.baseOpacity,R.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,R]of this.planetNodes)R.root.visible=!0,R.config.hasProceduralWorld&&R.orbitalBundle&&(R.orbitalBundle.surfaceMesh.visible=!0);this._hideAllReflectiveWaters(null),this.planetNodes.get("p1")?.pandoraWorld?.updateGroundClutter?.(null,99999,0),this.scene.background.lerp(new te(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.planetaryDirLight.castShadow=!1,this.planetaryDirLight.intensity=X.lerp(this.planetaryDirLight.intensity,.22,.1),this.hemiLight.position.set(0,100,0),this.hemiLight.color.lerp(new te(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new te(1053724),Math.min(1,t*3)),this.hemiLight.intensity=X.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new te(1844790),Math.min(1,t*3)),this.ambientLight.intensity=X.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=X.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=X.lerp(this.localBounceLight.intensity,0,.15),l?this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize():this._tmpPlanetToSun.copy(this.camera.position).negate().normalize(),this._updateDynamicIbl({planetId:"space",zenithColor:this._tmpIblZenith,horizonColor:this._tmpIblHorizon,groundColor:this._tmpIblGround,sunDir:this._tmpPlanetToSun,sunColor:this._tmpIblSun,sunElev:1,altRatio:2,intensity:.25}),this.ssaoPass&&(this.ssaoPass.enabled=!1),this.bloomPass&&(this.bloomPass.strength=X.lerp(this.bloomPass.strength,.38,.1)),this.renderer&&(this.renderer.toneMappingExposure=X.lerp(this.renderer.toneMappingExposure,1.05,Math.min(1,t*3))),this.cockpitParticles.setAtmosphereStyle(8965375,0)}const D=typeof this.controls.getSpeedRatio=="function"?this.controls.getSpeedRatio():0,N=h&&A>.05;if(this.radialBlurPass?.uniforms?.uBlurStrength){const U=(D>.45?X.smoothstep(D,.45,1):0)*(N?.35:1);this.radialBlurPass.uniforms.uBlurStrength.value=X.lerp(this.radialBlurPass.uniforms.uBlurStrength.value,U,Math.min(1,t*8)),this.radialBlurPass.enabled=this.radialBlurPass.uniforms.uBlurStrength.value>.002}if(this.machConeMesh&&this.machConeUniforms){const U=!!(h&&!N&&l&&c/y<.85)&&D>.72?X.smoothstep(D,.72,1)*.72:0;this.machConeUniforms.uTime.value=this.elapsedTime,this.machConeUniforms.uOpacity.value=X.lerp(this.machConeUniforms.uOpacity.value,U,Math.min(1,t*7)),this.machConeMesh.visible=this.machConeUniforms.uOpacity.value>.01}if(this._updateSolarLensflare(h,N,d,f,w),this.controls.setAltitudeContext({surfaceAltitude:c,planetRadius:_,atmoTopAlt:y,groundFloorAlt:v,minSpeed:T,metersPerUnit:_r,submergedRatio:w,planetCenter:x||(l?l.currWorldPos:null),prevPlanetCenter:m||(l?l.prevWorldPos:null),hasPlanet:!!l,inGravityWell:u,planetDeltaPos:g,planetQuatDelta:p}),h&&this.currentDominantPlanet){const R=A>.05,U=R?Math.round(A*15):Math.max(0,Math.round((c-v)*_r));let z=null;if(this.currentDominantPlanet.id==="p1"){const I=this.planetNodes.get("p1"),O=I?.capFrame||I?.spinGroup||I?.root;O&&(z=wt.map(j=>{this._tmpStationPos.copy(j.capDir).multiplyScalar(I.config.localRadius).applyMatrix4(O.matrixWorld);const J=Math.round(this.camera.position.distanceTo(this._tmpStationPos)*(I.config.kmScale/(620*Ri)));return{id:j.id,shortName:j.shortName,distKm:J}}))}if(this.lastP1RegionInfo=E,this.currentDominantPlanet.id==="p2"&&M){const I=gr[M.district]||gr.city_center;this.lastP2DistrictId=I.id,this.lastP2DistrictName=M.subzone==="north_oak"?"Westbrook · North Oak":M.subzone==="dogtown"?"Pacifica · Dogtown":I.name,this.lastP2DistrictShort=M.subzone==="north_oak"?"North Oak":M.subzone==="dogtown"?"Dogtown":I.shortName}this.lastSolarPhaseName=C,this.lastIsUnderwater=R;const B=this.currentDominantPlanet.id==="p2"?`NIGHT CITY // ${this.lastP2DistrictName.toUpperCase()}`:this.currentDominantPlanet.name.toUpperCase();this.onStatusUpdate({modeText:R?"SUBMARINO":"ATMOSFÉRICO",isSurface:!0,isUnderwater:R,sectorName:B,nearestText:this.currentDominantPlanet.id==="p2"?this.lastP2DistrictName:`${this.currentDominantPlanet.name}`,altitudeText:R?`-${U.toLocaleString("es-ES")} m`:`${U.toLocaleString("es-ES")} m`,timeScale:this.timeScale,solarPhaseName:C,pandoraLandmarks:z,nightCityDistrict:this.currentDominantPlanet.id==="p2"?this.lastP2DistrictId:null})}else{this.lastP1RegionInfo=null,this.lastSolarPhaseName="ESPACIO",this.lastIsUnderwater=!1;const R=Math.max(1,Math.round(o*(a/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${i} · ${R.toLocaleString("es-ES")} km`,altitudeText:`${R.toLocaleString("es-ES")} km`,timeScale:this.timeScale,solarPhaseName:"ESPACIO"})}}getStarChartState(){this.orbitalGroup.updateMatrixWorld(!0);const e=this.camera.position.clone(),t=new b(0,0,-1).applyQuaternion(this.camera.quaternion).normalize(),n=new b(1,0,0).applyQuaternion(this.camera.quaternion).normalize(),i=Math.atan2(t.x,t.z);let o=null;if(this.crystalPalaceAnchor){const h=new b;this.crystalPalaceAnchor.getWorldPosition(h),o={id:"crystal_palace",name:"CRYSTAL PALACE",planetKey:"p2",worldPos:h,distWorld:e.distanceTo(h),loaded:!!this.crystalPalaceDetailed}}const a={p1:{shortName:"PANDORA",code:"P1",tagline:"Luna oceánica y selvática · 3 Macro-Naciones",color:"#34d8c4",accent:"#44f0a8",gravity:"0.80 G",atmoDesc:"Densa · Respirable c/máscara (Nitrógeno/Xenón)",climate:"Selva bioluminiscente, archipiélago Metkayina y calderas de Ceniza"},p2:{shortName:"NIGHT CITY",code:"P2",tagline:"Megalópolis cyberpunk · Corpo Plaza y Crystal Palace",color:"#00d8ff",accent:"#ff3b9a",gravity:"1.00 G",atmoDesc:"Densa · Niebla urbana e industrial estratificada",climate:"Cañón neón central, suburbios sombríos y Badlands áridas"},p3:{shortName:"PERUGIUS",code:"P3",tagline:"Mundo templado medieval · Ciudadela Fortaleza",color:"#6ec878",accent:"#ffba52",gravity:"0.95 G",atmoDesc:"Óptima · Cielos dorados templados",climate:"Valles verdes, fortalezas en altura y cumbres nevadas"},p4:{shortName:"CORUSCANT",code:"P4",tagline:"Ecumenópolis total · Distrito del Senado",color:"#f4a259",accent:"#ff8a3a",gravity:"1.00 G",atmoDesc:"Regulada · Tráfico orbital y cúpulas ámbar",climate:"Planeta-ciudad continuo de miles de niveles"},p5:{shortName:"GIGANTE P5",code:"P5",tagline:"Gigante gaseoso azul con sistema de anillos y 3 lunas",color:"#5fa8ff",accent:"#8ee8ff",gravity:"2.45 G",atmoDesc:"Turbulenta · Hidrógeno y helio (Solo órbita)",climate:"Tormentas de metano, anillos helados y lunas pastoras"}},r=[],l=["p1","p2","p3","p4","p5"];for(const h of l){const u=this.planetNodes.get(h);if(!u)continue;const d=u.config,f=a[h]||{shortName:h.toUpperCase(),code:h.toUpperCase(),color:"#8cc4ff"},g=u.currWorldPos.clone(),x=e.distanceTo(g),m=u.moonOrbits.map((v,T)=>({index:T,name:v.name,baseRadius:v.baseRadius,baseRadiusWorld:v.baseRadius*Rn,angle:v.angle,yOffset:v.yOffset,moonRadius:v.moonRadius,worldPos:v.currWorldPos.clone(),distWorld:e.distanceTo(v.currWorldPos)})),p=new ct;u.spinGroup&&u.spinGroup.getWorldQuaternion(p);const _=new ct;u.spinner?.parent&&u.spinner.parent.getWorldQuaternion(_);const y=u.capFrame?u.capFrame.quaternion.clone():new ct;r.push({key:h,id:d.id,code:f.code,name:d.name,shortName:f.shortName,tagline:f.tagline,color:f.color,accent:f.accent,gravity:f.gravity,atmoDesc:f.atmoDesc,climate:f.climate,navKey:d.navKey,landable:d.landable,semiMajorAxis:d.semiMajorAxis,semiMajorAxisWorld:d.semiMajorAxis*Rn,eccentricity:d.eccentricity||.04,orbitAngle:u.orbitAngle,localRadius:d.localRadius,worldRadius:d.localRadius*Rn,atmoTopAlt:d.localRadius*Rn*_s,kmScale:d.kmScale,glowCss:d.glowCss||"rgba(94, 212, 255, 0.45)",worldPos:g,distWorld:x,distKm:Math.max(0,Math.round(Math.max(0,x-d.localRadius*Rn)*(d.kmScale/(620*Ri)))),moons:m,hasCrystalPalace:h==="p2"&&!!o,spinWorldQuat:p,orbitalPlaneQuat:_,capLocalQuat:y,orbitalMap:u.orbitalBundle?.surfaceMesh?.material?.map||null,orbitalEmissiveMap:u.orbitalBundle?.surfaceMesh?.material?.emissiveMap||null,cloudMap:u.orbitalBundle?.upperCloudMesh?.material?.uniforms?.uCloudMap?.value||null,pandoraLandmarks:h==="p1"?wt:null,nightCityLandmarks:h==="p2"?Io:null})}let c=null;if(this.mode==="SURFACE"&&this.currentDominantPlanet){const h=this.currentDominantPlanet,u=this.planetNodes.get(h.id);if(u){const d=u.capFrame||u.spinGroup||u.root,f=u.currWorldPos.clone(),g=e.clone().sub(f).normalize(),x=e.clone().negate().normalize(),m=[];if(h.id==="p1"){const p={hometree:{nation:"forest",color:"#44f0a8"},hallelujah:{nation:"forest",color:"#44f0a8"},rookery:{nation:"forest",color:"#44f0a8"},souls:{nation:"forest",color:"#44f0a8"},mushrooms:{nation:"forest",color:"#a864ff"},ashland:{nation:"ash",color:"#ff6c34"},metkayina:{nation:"water",color:"#26e8ff"}};for(const _ of wt){const y=_.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld),v=p[_.id]||{nation:"forest",color:"#44f0a8"};m.push({id:_.id,shortName:_.shortName,nation:v.nation,color:v.color,worldPos:y,distKm:Math.round(e.distanceTo(y)*(h.kmScale/(620*Ri)))})}}else if(h.id==="p2")for(const p of Io){const _=p.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld);m.push({id:p.id,shortName:p.shortName,color:p.color,worldPos:_,distKm:Math.round(e.distanceTo(_)*(h.kmScale/(620*Ri)))})}else{const p=new b(0,h.localRadius,0).applyMatrix4(d.matrixWorld);m.push({id:"capital",shortName:h.id==="p3"?"Fortaleza Perugius":"Plaza del Senado",color:h.id==="p3"?"#ffcf78":"#ff944d",worldPos:p,distKm:Math.round(e.distanceTo(p)*(h.kmScale/(620*Ri)))})}c={planetKey:h.id,planetName:h.name,planetWorldPos:f,worldRadius:h.localRadius*Rn,radialUp:g,sunDir:x,solarPhaseName:this.lastSolarPhaseName||"DÍA",isUnderwater:!!this.lastIsUnderwater,regionNation:this.lastP1RegionInfo?.nation||"forest",regionDistrict:this.lastP2DistrictId||"city_center",regionDistrictName:this.lastP2DistrictName||"Corpo Plaza",regionDistrictShort:this.lastP2DistrictShort||"Corpo Plaza",markers:m}}}return{mode:this.mode,isUnderwater:!!this.lastIsUnderwater,shipPos:e,shipForward:t,shipRight:n,shipYawRad:i,sunPos:new b(0,0,0),sunWorldRadius:2.21*3.2*Rn,planets:r,crystalPalace:o,atmosphereLocal:c,dominantPlanetKey:this.currentDominantPlanet?.id||null}}}new b(0,1,0);const Bs=new b,Zl=new b,Ao=new b;class m1{constructor({containerEl:e,canvasEl:t,scaleEl:n,sceneManager:i,onOpenStarMap:o}){this.containerEl=e,this.canvas=t,this.ctx=t?.getContext?.("2d")||null,this.scaleEl=n,this.sceneManager=i,this.onOpenStarMap=o||(()=>{}),this.size=170,this._bindEvents(),this._resizeCanvas()}_bindEvents(){this.containerEl&&this.containerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenStarMap()})}_resizeCanvas(){if(!this.canvas||!this.ctx)return;const e=typeof window<"u"?Math.min(window.devicePixelRatio||1,2):1;this.canvas.width=this.size*e,this.canvas.height=this.size*e,this.dpr=e}update(e=0){if(!this.ctx||!this.sceneManager)return;const t=this.ctx,n=this.size,i=n*.5,o=this.dpr||1;t.setTransform(o,0,0,o,0,0),t.clearRect(0,0,n,n);const a=this.sceneManager.getStarChartState();if(!a)return;t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.strokeStyle="rgba(94, 212, 255, 0.16)",t.lineWidth=1;for(const c of[.32,.62,.9])t.beginPath(),t.arc(i,i,(i-6)*c,0,Math.PI*2),t.stroke();t.strokeStyle="rgba(94, 212, 255, 0.12)",t.beginPath(),t.moveTo(i,8),t.lineTo(i,n-8),t.moveTo(8,i),t.lineTo(n-8,i),t.stroke();const r=e*1.35%(Math.PI*2),l=t.createRadialGradient(i,i,4,i,i,i-6);l.addColorStop(0,"rgba(94, 212, 255, 0.02)"),l.addColorStop(1,"rgba(94, 212, 255, 0.12)"),t.fillStyle=l,t.beginPath(),t.moveTo(i,i),t.arc(i,i,i-6,r-.45,r),t.closePath(),t.fill(),a.mode==="SURFACE"&&a.atmosphereLocal?this._drawAtmosphericRadar(t,n,i,a):this._drawSolarRadar(t,n,i,a),t.fillStyle=a.isUnderwater?"#38f6d2":"#ffae42",t.strokeStyle="#040a14",t.lineWidth=1.4,t.beginPath(),t.moveTo(i,i-7),t.lineTo(i+5.2,i+5.2),t.lineTo(i,i+2.6),t.lineTo(i-5.2,i+5.2),t.closePath(),t.fill(),t.stroke(),t.restore()}_drawSolarRadar(e,t,n,i){let o=i.shipForward.x,a=i.shipForward.z;const r=Math.hypot(o,a);r<.001?(o=0,a=-1):(o/=r,a/=r);const l=-a,c=o,h=n-15,u=Math.hypot(i.shipPos.x,i.shipPos.z),d=Math.max(12e3,Math.min(48e3,u*1.45+11e3));this.scaleEl&&(this.scaleEl.textContent=`ÓRBITA · ${Math.round(d/100)/10}k`);const f=(x,m)=>{const p=x-i.shipPos.x,_=m-i.shipPos.z,y=p*l+_*c,v=p*o+_*a,T=Math.hypot(y,v),w=Math.pow(Math.min(1,T/d),.78),A=Math.atan2(-v,y);return{x:n+Math.cos(A)*w*h,y:n+Math.sin(A)*w*h,clipped:T>d}},g=f(i.sunPos.x,i.sunPos.z);if(e.fillStyle="rgba(255, 200, 72, 0.35)",e.beginPath(),e.arc(g.x,g.y,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffdc64",e.beginPath(),e.arc(g.x,g.y,4.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 224, 130, 0.9)",e.font='600 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText("SOL",g.x,g.y-7),i.crystalPalace){const x=f(i.crystalPalace.worldPos.x,i.crystalPalace.worldPos.z);e.strokeStyle="#ffae42",e.lineWidth=1.2,e.beginPath(),e.moveTo(x.x,x.y-3.5),e.lineTo(x.x+3.5,x.y),e.lineTo(x.x,x.y+3.5),e.lineTo(x.x-3.5,x.y),e.closePath(),e.stroke()}for(const x of i.planets){const m=f(x.worldPos.x,x.worldPos.z);e.fillStyle=x.color,e.beginPath(),e.arc(m.x,m.y,x.landable?3.8:4.6,0,Math.PI*2),e.fill(),e.fillStyle="rgba(230, 243, 255, 0.9)",e.font='700 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText(x.code,m.x,m.y-6)}}_drawAtmosphericRadar(e,t,n,i){const o=i.atmosphereLocal,a=o.radialUp;Bs.copy(i.shipForward).addScaledVector(a,-i.shipForward.dot(a)),Bs.lengthSq()<1e-4&&Bs.copy(i.shipRight).cross(a),Bs.normalize(),Zl.crossVectors(Bs,a).normalize();const r=n-16,l=Math.max(220,o.planetKey==="p2"?o.worldRadius*.56:o.worldRadius*1.08);if(this.scaleEl){const g=o.isUnderwater?"SUBMARINO":o.planetKey==="p1"?{forest:"BOSQUE",water:"METKAYINA",ash:"CENIZA"}[o.regionNation]||"PANDORA":o.planetKey==="p2"?(o.regionDistrictShort||o.regionDistrictName||"NIGHT CITY").toUpperCase():o.planetKey.toUpperCase();this.scaleEl.textContent=`${g} · ${o.solarPhaseName}`}const c=Ao.copy(o.sunDir).dot(Zl),h=Ao.dot(Bs),u=Math.atan2(-h,c),d=n+Math.cos(u)*(n-11),f=n+Math.sin(u)*(n-11);e.fillStyle="#ffd65a",e.beginPath(),e.arc(d,f,4.2,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 214, 90, 0.5)",e.lineWidth=1,e.beginPath(),e.arc(d,f,7,0,Math.PI*2),e.stroke(),e.font='600 7.5px "Cascadia Code", Consolas, monospace',e.textAlign="center";for(const g of o.markers){Ao.copy(g.worldPos).sub(i.shipPos);const x=Ao.dot(Zl),m=Ao.dot(Bs),p=Math.hypot(x,m),_=Math.min(1,Math.pow(p/l,.72)),y=Math.atan2(-m,x),v=n+Math.cos(y)*_*r,T=n+Math.sin(y)*_*r,w=Ao.dot(a)<-o.worldRadius*.45;e.globalAlpha=w?.45:.95,e.fillStyle=g.color||"#5ed4ff",e.beginPath(),e.arc(v,T,w?2.4:3.2,0,Math.PI*2),e.fill(),e.fillStyle="#e6f3ff";const A=g.shortName.length>9?g.shortName.slice(0,8)+".":g.shortName;e.fillText(A,v,T-5)}e.globalAlpha=1}}const bn=Object.freeze({CLOSED:"CLOSED",SOLAR_SYSTEM:"SOLAR_SYSTEM",PLANET_ZOOM:"PLANET_ZOOM",JUMP_CONFIRMED:"JUMP_CONFIRMED"}),g1=230*157.5,ks=12.5,gd=4.2,x1=6,xd=5;function v1(s){const e=Math.max(0,Math.min(1,s));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function $l(s,e=new b){if(!s)return e.set(0,0,0);const t=Math.hypot(s.x||0,s.y||0,s.z||0);if(t<1e-4)return e.set(0,0,0);const n=t/g1,o=(24+Math.pow(Math.min(1.4,n),.72)*168)/t;return e.set(s.x*o,s.y*o,s.z*o)}function _1(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=512,s.height=256;const e=s.getContext?.("2d");if(!e)return null;const t=e.createLinearGradient(0,0,0,s.height);t.addColorStop(0,"#133056"),t.addColorStop(.16,"#27598d"),t.addColorStop(.28,"#4f9cd9"),t.addColorStop(.38,"#9fd8ff"),t.addColorStop(.49,"#316aa6"),t.addColorStop(.62,"#64b8f2"),t.addColorStop(.74,"#244d80"),t.addColorStop(.86,"#488cc8"),t.addColorStop(1,"#122949"),e.fillStyle=t,e.fillRect(0,0,s.width,s.height);for(let i=0;i<28;i++){const o=i/28*s.height;e.fillStyle=i%2===0?"rgba(180, 232, 255, 0.14)":"rgba(10, 28, 56, 0.16)",e.fillRect(0,o,s.width,3+i%4)}e.fillStyle="rgba(155, 228, 255, 0.38)",e.beginPath(),e.ellipse(s.width*.62,s.height*.58,34,14,0,0,Math.PI*2),e.fill();const n=new xn(s);return n.colorSpace=$t,n.wrapS=Wn,n.wrapT=Li,n}function vd(s,e=.72){const t=new te(s||"#5ed4ff");return new ln({uniforms:{uColor:{value:t},uIntensity:{value:e}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Dn,side:wi})}function Ql(){return new gn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})}class M1{constructor({overlayEl:e,canvasEl:t,labelsEl:n,backBtnEl:i,closeBtnEl:o,levelTagEl:a,titleEl:r,dossierEl:l,dossierBadgeEl:c,dossierTitleEl:h,dossierDescEl:u,dossierTypeEl:d,dossierAltEl:f,dossierAtmoEl:g,dossierDistEl:x,jumpBtnEl:m,footerEl:p,sceneManager:_,controls:y,onConfirmJump:v,onStateChange:T,createRenderer:w}={}){this.overlayEl=e||null,this.canvas=t||null,this.labelsEl=n||(typeof document<"u"?document.getElementById("star-map-labels"):null),this.backBtnEl=i||null,this.closeBtnEl=o||null,this.levelTagEl=a||null,this.titleEl=r||null,this.dossierEl=l||null,this.dossierBadgeEl=c||null,this.dossierTitleEl=h||null,this.dossierDescEl=u||null,this.dossierTypeEl=d||null,this.dossierAltEl=f||null,this.dossierAtmoEl=g||null,this.dossierDistEl=x||null,this.jumpBtnEl=m||null,this.footerEl=p||null,this.sceneManager=_,this.controls=y,this.onConfirmJump=v||(A=>_?.navigateToTarget?.(A)),this.onStateChange=T||(()=>{}),this.createRenderer=w||null,this.state=bn.CLOSED,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.zoomDuration=.75,this.transitionElapsed=.75,this.transitionActive=!1,this.transitionFromCamPos=new b(0,145,195),this.transitionFromLookAt=new b(0,0,0),this.lastTimeMs=0,this.solarOrbit={theta:.62,phi:.92,radius:225},this.level2Orbit={theta:.65,phi:1.15,radius:24},this.curCamPos=new b(110,145,170),this.curLookAt=new b(0,0,0),this.viewW=1280,this.viewH=720,this.dpr=1,this.mouseX=-9999,this.mouseY=-9999,this.isPointerDown=!1,this.downX=0,this.downY=0,this.lastPointerX=0,this.lastPointerY=0,this.dragDistance=0,this._suppressNextClick=!1,this.currentSolarNodes=[],this.currentLevel2Nodes=[],this.activeHitMeshes=[],this.mapScene=null,this.mapCamera=null,this.renderer=null,this.raycaster=new $_,this.planetRigs=new Map,this.sunRig=null,this.shipBeacon=null,this.l2RingsGroup=null,this.l2PinGroup=null,this.l2PinPool=[],this.l2OrbitRingPool=[],this.disposables=[],this.svgEl=null,this.labelEls=new Map,this.lineEls=new Map,this.tooltipEl=null,this._tmpVecA=new b,this._tmpVecB=new b,this._tmpVecC=new b,this._tmpDesiredCam=new b,this._tmpDesiredLook=new b,this._boundHandlers={},this._bindEvents()}_bindEvents(){this.backBtnEl&&(this._boundHandlers.onBackClick=e=>{e.stopPropagation(),this.backToSolarSystem()},this.backBtnEl.addEventListener("click",this._boundHandlers.onBackClick)),this.closeBtnEl&&(this._boundHandlers.onCloseClick=e=>{e.stopPropagation(),this.close()},this.closeBtnEl.addEventListener("click",this._boundHandlers.onCloseClick)),this.jumpBtnEl&&(this._boundHandlers.onJumpClick=e=>{e.stopPropagation(),this.confirmJump()},this.jumpBtnEl.addEventListener("click",this._boundHandlers.onJumpClick)),this.canvas&&(this._boundHandlers.onMouseDown=e=>{if(e.button!==0)return;const t=this.canvas.getBoundingClientRect();this.handlePointerDown(e.clientX-t.left,e.clientY-t.top,e.button)},this._boundHandlers.onMouseMove=e=>{if(!this.isOpen())return;const t=this.canvas.getBoundingClientRect();this.handlePointerMove(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onMouseUp=e=>{if(!this.isPointerDown)return;const t=this.canvas.getBoundingClientRect();this.handlePointerUp(e.clientX-t.left,e.clientY-t.top,e.button)},this._boundHandlers.onClick=e=>{if(this._suppressNextClick){this._suppressNextClick=!1,this.dragDistance=0;return}const t=this.canvas.getBoundingClientRect();this.handleClick(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onDblClick=e=>{if(this.dragDistance>xd)return;const t=this.canvas.getBoundingClientRect();this.handleDoubleClick(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onWheel=e=>{this.isOpen()&&(e.preventDefault(),this.handleWheel(e.deltaY))},this._boundHandlers.onContextMenu=e=>{e.preventDefault(),this.state===bn.PLANET_ZOOM&&this.backToSolarSystem()},this.canvas.addEventListener("mousedown",this._boundHandlers.onMouseDown),this.canvas.addEventListener("click",this._boundHandlers.onClick),this.canvas.addEventListener("dblclick",this._boundHandlers.onDblClick),this.canvas.addEventListener("wheel",this._boundHandlers.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this._boundHandlers.onContextMenu)),typeof window<"u"&&(this._boundHandlers.onResize=()=>this.resize(),this._boundHandlers.onKeyDown=e=>this._onKeyDown(e),this._boundHandlers.onMouseMove&&window.addEventListener("mousemove",this._boundHandlers.onMouseMove),this._boundHandlers.onMouseUp&&window.addEventListener("mouseup",this._boundHandlers.onMouseUp),window.addEventListener("resize",this._boundHandlers.onResize),window.addEventListener("keydown",this._boundHandlers.onKeyDown))}_onKeyDown(e){if(e.code==="KeyM"&&!e.repeat){e.preventDefault(),this.isOpen()?this.close():this.open();return}this.isOpen()&&(e.code==="Escape"?(e.preventDefault(),this.close()):e.code==="Backspace"&&this.state===bn.PLANET_ZOOM?(e.preventDefault(),this.backToSolarSystem()):e.code==="Enter"&&this.state===bn.PLANET_ZOOM&&this.selectedNode&&(e.preventDefault(),this.confirmJump()))}isOpen(){return this.state!==bn.CLOSED}_trackDisposable(e){return e&&this.disposables.push(e),e}_ensureScene3D(e){if(!this.mapCamera){const t=Math.max(.5,(this.viewW||1280)/Math.max(1,this.viewH||720));this.mapCamera=new Hn(45,t,.1,1e4),this._syncCameraFromSpherical(this.curCamPos,this.curLookAt,this.solarOrbit,new b(0,0,0)),this.mapCamera.position.copy(this.curCamPos),this.mapCamera.lookAt(this.curLookAt)}this.mapScene||(this.mapScene=new uh,this.mapScene.fog=new qr(132626,55e-5),this._buildStaticBackdrop()),!this.renderer&&this.canvas&&(typeof this.createRenderer=="function"?this.renderer=this.createRenderer(this.canvas):this.renderer=new gf({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer&&(this.renderer.setPixelRatio?.(Math.min(typeof window<"u"&&window.devicePixelRatio||1,2)),this.renderer.setSize?.(this.viewW,this.viewH,!1),this.renderer.setClearColor?.(132626,.94),"toneMapping"in this.renderer&&(this.renderer.toneMapping=zr,this.renderer.toneMappingExposure=1.15))),e&&!this.sunRig&&this._buildSunAndPlanets(e)}_buildStaticBackdrop(){const e=this.mapScene;e.add(new Ef(2638182,.52));const t=new xa(16773580,3.4,1500,.28);t.position.set(0,0,0),e.add(t);const n=new xh(4835071,.36);n.position.set(-180,140,-160),e.add(n);const i=1100,o=new Float32Array(i*3),a=new Float32Array(i*3);for(let v=0;v<i;v++){const T=Math.sin(v*12.9898)*43758.5453,w=T-Math.floor(T),A=Math.sin(v*78.233)*28411.172,E=A-Math.floor(A),M=w*Math.PI*2,S=Math.acos(2*E-1),C=1100+v%7*140;o[v*3]=C*Math.sin(S)*Math.cos(M),o[v*3+1]=C*Math.cos(S),o[v*3+2]=C*Math.sin(S)*Math.sin(M);const D=.72+.28*(v%5/4);a[v*3]=D*(v%3===0?1:.75),a[v*3+1]=D*.88,a[v*3+2]=D}const r=this._trackDisposable(new Tt);r.setAttribute("position",new bt(o,3)),r.setAttribute("color",new bt(a,3));const l=this._trackDisposable(new Ei({size:3.2,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1}));e.add(new Ai(r,l));const c=new Lt,h=[34,66,98,132,168,202],u=this._trackDisposable(new Vs({color:3718648,transparent:!0,opacity:.14,depthWrite:!1}));for(const v of h){const T=[];for(let E=0;E<128;E++){const M=E/128*Math.PI*2;T.push(new b(Math.cos(M)*v,-.4,Math.sin(M)*v))}const A=this._trackDisposable(new Tt().setFromPoints(T));c.add(new Rr(A,u))}const d=this._trackDisposable(new Vs({color:16762478,transparent:!0,opacity:.11,depthWrite:!1}));for(let v=0;v<12;v++){const T=v/12*Math.PI*2,w=this._trackDisposable(new Tt().setFromPoints([new b(Math.cos(T)*20,-.4,Math.sin(T)*20),new b(Math.cos(T)*212,-.4,Math.sin(T)*212)]));c.add(new jr(w,d))}e.add(c);const f=new Lt,g=this._trackDisposable(new ga(2.1,0)),x=this._trackDisposable(new gn({color:16756290,wireframe:!1,transparent:!0,opacity:.95})),m=new Ge(g,x);f.add(m);const p=this._trackDisposable(new Hs(2.6,3.2,32)),_=this._trackDisposable(new gn({color:16763760,transparent:!0,opacity:.72,side:Dt,depthWrite:!1})),y=new Ge(p,_);y.rotation.x=Math.PI*.5,f.add(y),e.add(f),this.shipBeacon={group:f,diamond:m,ring:y},this.l2RingsGroup=new Lt,this.l2RingsGroup.visible=!1,e.add(this.l2RingsGroup),this.l2PinGroup=new Lt,this.l2PinGroup.visible=!1,e.add(this.l2PinGroup)}_buildSunAndPlanets(e){const t=this.mapScene,n=new Lt,i=this._trackDisposable(new un(ks,40,28)),o=this._trackDisposable(new gn({color:16766574})),a=new Ge(i,o);n.add(a);const r=this._trackDisposable(new un(ks*1.24,32,24)),l=this._trackDisposable(vd("#ff9f2e",1.15));n.add(new Ge(r,l));const c=this._trackDisposable(new un(ks*1.55,24,18)),h=this._trackDisposable(new gn({color:16755248,transparent:!0,opacity:.14,depthWrite:!1,blending:Dn,side:zn}));n.add(new Ge(c,h));const u=this._trackDisposable(new un(ks*1.38,16,12)),d=new Ge(u,this._trackDisposable(Ql()));n.add(d),t.add(n),this.sunRig={group:n,mesh:a,hitMesh:d};const f=this._trackDisposable(new un(1,48,32)),g=this._trackDisposable(new un(1.018,36,24)),x=this._trackDisposable(new un(1.075,36,24)),m=this._trackDisposable(new un(1,20,14)),p=this._trackDisposable(new un(1,14,10)),_=this._trackDisposable(Ql()),y=_1();y&&this._trackDisposable(y);for(const v of e.planets){const T=v.key==="p5"?x1:gd,w=v.eccentricity||.04,A=[],E=144,M=new b;for(let ae=0;ae<E;ae++){const me=ae/E*Math.PI*2,Me=v.semiMajorAxis*(1-w*w)/(1+w*Math.cos(me))*157.5;M.set(Math.cos(me)*Me,0,Math.sin(me)*Me),v.orbitalPlaneQuat&&M.applyQuaternion(v.orbitalPlaneQuat),A.push($l(M))}const S=this._trackDisposable(new Tt().setFromPoints(A)),C=this._trackDisposable(new Vs({color:new te(v.color),transparent:!0,opacity:.42,depthWrite:!1})),D=new Rr(S,C);t.add(D);const N=new Lt,R=new Lt;N.add(R);const U=!!v.orbitalMap,z=this._trackDisposable(new ke({color:v.key==="p5"||U?16777215:new te(v.color),map:v.orbitalMap||(v.key==="p5"?y:null),emissive:v.orbitalEmissiveMap?new te(16777215):new te(v.color),emissiveMap:v.orbitalEmissiveMap||null,emissiveIntensity:v.orbitalEmissiveMap?1.15:.14,roughness:v.key==="p5"?.65:.72,metalness:.08})),B=new Ge(f,z);B.scale.setScalar(T),R.add(B);const I=this._trackDisposable(new ke({map:v.cloudMap||null,transparent:!0,opacity:v.cloudMap?.36:0,depthWrite:!1,roughness:.9})),O=new Ge(g,I);O.scale.setScalar(T),O.visible=!!v.cloudMap,R.add(O);const j=this._trackDisposable(vd(v.color,.76)),J=new Ge(x,j);if(J.scale.setScalar(T),R.add(J),v.key==="p5"){const ae=this._trackDisposable(new Hs(1.38*T,2.36*T,84)),me=this._trackDisposable(new gn({color:8378623,transparent:!0,opacity:.38,side:Dt,depthWrite:!1})),re=new Ge(ae,me);re.rotation.x=Math.PI*.44,re.rotation.y=.22,R.add(re);const Me=this._trackDisposable(new Hs(1.56*T,1.88*T,72)),V=this._trackDisposable(new gn({color:12774655,transparent:!0,opacity:.26,side:Dt,depthWrite:!1})),Re=new Ge(Me,V);Re.rotation.copy(re.rotation),R.add(Re)}const ne=new Ge(p,_);ne.scale.setScalar(T*1.55),N.add(ne);const ye=this._trackDisposable(new Hs(T*1.48,T*1.66,48)),Q=this._trackDisposable(new gn({color:new te(v.color),transparent:!0,opacity:.75,side:Dt,depthWrite:!1})),de=new Ge(ye,Q);de.rotation.x=Math.PI*.5,de.visible=!1,N.add(de);const xe=v.moons.map((ae,me)=>{const re=Math.max(.55,Math.min(1.15,ae.moonRadius/Math.max(1,v.worldRadius)*T*2.1)),Me=new Lt,V=this._trackDisposable(new ke({color:13164287,emissive:3891345,emissiveIntensity:.28,roughness:.85})),Re=new Ge(m,V);Re.scale.setScalar(re),Me.add(Re);const k=new Ge(p,_);return k.scale.setScalar(Math.max(1.5,re*2.2)),Me.add(k),N.add(Me),{index:me,name:ae.name,group:Me,mesh:Re,hitMesh:k,orbitChartR:T*(1.76+me*.46)}});let $=null;v.hasCrystalPalace&&($=this._buildCrystalPalace3DRig(T,p,_),N.add($.group)),t.add(N),this.planetRigs.set(v.key,{key:v.key,pChartR:T,orbitLine:D,orbitMat:C,rootGroup:N,spinGroup:R,globeMesh:B,globeMat:z,cloudMesh:O,cloudMat:I,haloMat:j,l1HitMesh:ne,selectRingMesh:de,moonRigs:xe,stationRig:$,lastOrbitalMap:v.orbitalMap||null,lastEmissiveMap:v.orbitalEmissiveMap||null,lastCloudMap:v.cloudMap||null})}}_buildCrystalPalace3DRig(e,t,n){const i=new Lt,o=this._trackDisposable(new Kr(.95,.14,10,28)),a=this._trackDisposable(new ke({color:16765572,emissive:16751400,emissiveIntensity:.72,metalness:.6,roughness:.25})),r=new Ge(o,a);r.rotation.x=Math.PI*.5,i.add(r);const l=this._trackDisposable(new ga(.45,0)),c=this._trackDisposable(new gn({color:16770227}));i.add(new Ge(l,c));const h=this._trackDisposable(new tn(.06,.06,1.9,6)),u=new Ge(h,a);u.rotation.z=Math.PI*.5;const d=new Ge(h,a);d.rotation.x=Math.PI*.5,i.add(u,d);const f=new Ge(t,n);return f.scale.setScalar(1.9),i.add(f),{group:i,hitMesh:f,orbitChartR:e*1.96}}resize(){if(!this.canvas)return;const e=typeof window<"u"&&window.innerWidth||this.viewW||1280,t=typeof window<"u"&&window.innerHeight||this.viewH||720;this.dpr=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),this.viewW=Math.max(1,e),this.viewH=Math.max(1,t),this.canvas.width=Math.round(this.viewW*this.dpr),this.canvas.height=Math.round(this.viewH*this.dpr),this.mapCamera&&(this.mapCamera.aspect=this.viewW/Math.max(1,this.viewH),this.mapCamera.updateProjectionMatrix()),this.renderer&&(this.renderer.setPixelRatio?.(this.dpr),this.renderer.setSize?.(this.viewW,this.viewH,!1))}open(){this.resize(),typeof document<"u"&&document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),this.controls?.setEnabled?this.controls.setEnabled(!1):this.controls&&(this.controls.enabled=!1);const e=this.sceneManager?.getStarChartState?.()||null;this._ensureScene3D(e),this.state=bn.SOLAR_SYSTEM,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.transitionActive=!1,this.transitionElapsed=this.zoomDuration,this.lastTimeMs=typeof performance<"u"?performance.now():0,e&&(this._syncScenePositions(e,this.lastTimeMs*.001),this.currentSolarNodes=this._buildSolarNodes3D(e),this._updateCamera(.016),this._updateLabelsAndLeaderLines(e)),this.overlayEl&&this.overlayEl.classList.remove("hidden"),this._syncHeaderAndDossier(),this.onStateChange(this.state)}close(){this.state!==bn.CLOSED&&(this.state=bn.CLOSED,this.hoveredNode=null,this.isPointerDown=!1,this._suppressNextClick=!1,this.canvas?.classList?.remove("dragging"),this.canvas?.classList?.remove("hovering"),this._clearLabelDOM(),this.renderer?.renderLists?.dispose&&this.renderer.renderLists.dispose(),this.overlayEl&&this.overlayEl.classList.add("hidden"),this.controls?.setEnabled?this.controls.setEnabled(!0):this.controls&&(this.controls.enabled=!0),this.onStateChange(this.state))}selectPlanetForZoom(e){if(!e)return;const t=this.sceneManager?.getStarChartState?.();this._ensureScene3D(t),this.selectedPlanetKey=e,this.state=bn.PLANET_ZOOM,this.zoomTarget=1,this.hoveredNode=null,this.mapCamera&&(this.transitionFromCamPos.copy(this.mapCamera.position),this.transitionFromLookAt.copy(this.curLookAt),this.transitionElapsed=0,this.transitionActive=!0);const n=this.planetRigs.get(e),i=e==="sun"?ks:n?.pChartR||gd;this.level2Orbit.radius=e==="sun"?46:i*4.4,this.level2Orbit.phi=1.12,this.level2Orbit.theta=.58,t?(this._syncScenePositions(t,0),this.l2RingsGroup&&(this.l2RingsGroup.visible=!0),this.l2PinGroup&&(this.l2PinGroup.visible=!0),this.currentLevel2Nodes=this._buildLevel2Nodes3D(t,e),this.selectedNode=this.currentLevel2Nodes[0]||null,this._updateLabelsAndLeaderLines(t)):(this.currentLevel2Nodes=[],this.selectedNode=null),this._syncHeaderAndDossier(),this.onStateChange(this.state)}backToSolarSystem(){this.state===bn.PLANET_ZOOM&&(this.state=bn.SOLAR_SYSTEM,this.zoomTarget=0,this.selectedNode=null,this.hoveredNode=null,this.l2RingsGroup&&(this.l2RingsGroup.visible=!1),this.l2PinGroup&&(this.l2PinGroup.visible=!1),this.mapCamera&&(this.transitionFromCamPos.copy(this.mapCamera.position),this.transitionFromLookAt.copy(this.curLookAt),this.transitionElapsed=0,this.transitionActive=!0),this._syncHeaderAndDossier(),this.onStateChange(this.state))}selectNodeById(e){const t=this.currentLevel2Nodes.find(n=>n.id===e);return t?(this.selectedNode=t,this._syncHeaderAndDossier(),t):null}confirmJump(){if(this.state!==bn.PLANET_ZOOM||!this.selectedNode)return null;const e=this.selectedNode.descriptor;return this.state=bn.JUMP_CONFIRMED,this.onStateChange(this.state,e),this.close(),this.onConfirmJump(e),e}getVisibleNodes(){return this.state===bn.PLANET_ZOOM?this.currentLevel2Nodes:this.currentSolarNodes}handlePointerDown(e,t,n=0){n===0&&(this.isPointerDown=!0,this.downX=e,this.downY=t,this.lastPointerX=e,this.lastPointerY=t,this.dragDistance=0,this._suppressNextClick=!1)}handlePointerMove(e,t){if(this.mouseX=e,this.mouseY=t,this.isPointerDown){const i=e-this.lastPointerX,o=t-this.lastPointerY;if(this.lastPointerX=e,this.lastPointerY=t,this.dragDistance=Math.hypot(e-this.downX,t-this.downY),this.dragDistance>xd){this._suppressNextClick=!0,this.canvas?.classList?.add("dragging"),this.hoveredNode=null,this.state===bn.PLANET_ZOOM?(this.level2Orbit.theta-=i*.0072,this.level2Orbit.phi=X.clamp(this.level2Orbit.phi-o*.0062,.16,2.94)):(this.solarOrbit.theta-=i*.0065,this.solarOrbit.phi=X.clamp(this.solarOrbit.phi-o*.0055,.14,1.48));return}}const n=this._pickNodeAt(e,t);this.hoveredNode=n,this.canvas?.classList?.toggle("hovering",!!n)}handlePointerUp(e,t,n=0){n===0&&(this.isPointerDown=!1,this.canvas?.classList?.remove("dragging"),this.dragDistance=Math.hypot(e-this.downX,t-this.downY))}handleWheel(e){const t=1+Math.max(-.35,Math.min(.35,e*.0011));if(this.state===bn.PLANET_ZOOM){const n=this.planetRigs.get(this.selectedPlanetKey),i=this.selectedPlanetKey==="sun"?22:(n?.pChartR||4.2)*2.1,o=this.selectedPlanetKey==="sun"?120:(n?.pChartR||4.2)*14;this.level2Orbit.radius=X.clamp(this.level2Orbit.radius*t,i,o)}else this.solarOrbit.radius=X.clamp(this.solarOrbit.radius*t,68,430)}handleClick(e,t){this.mouseX=e,this.mouseY=t;const n=this._pickNodeAt(e,t);n&&(this.state===bn.SOLAR_SYSTEM?this.selectPlanetForZoom(n.planetKey):this.state===bn.PLANET_ZOOM&&(this.selectedNode=n,this._syncHeaderAndDossier()))}handleDoubleClick(e,t){if(this.state!==bn.PLANET_ZOOM)return;const n=this._pickNodeAt(e,t);n&&(this.selectedNode=n,this._syncHeaderAndDossier(),this.confirmJump())}_pickNodeAt(e,t){if(!this.mapScene||!this.mapCamera)return null;this.mapScene.updateMatrixWorld(!0),this.mapCamera.updateMatrixWorld();const n=e/Math.max(1,this.viewW)*2-1,i=-(t/Math.max(1,this.viewH))*2+1;this.raycaster.setFromCamera({x:n,y:i},this.mapCamera);const o=this.getVisibleNodes(),a=[];for(const l of o)l.occluded||!l.hitMesh||(l.hitMesh.userData.starNode=l,a.push(l.hitMesh));const r=this.raycaster.intersectObjects(a,!1);return r.length>0&&r[0].object.userData.starNode||null}_syncHeaderAndDossier(){const e=this.state===bn.PLANET_ZOOM;if(this.backBtnEl&&this.backBtnEl.classList.toggle("hidden",!e),this.levelTagEl&&(this.levelTagEl.textContent=e?"SUB-MAPA PLANETARIO 3D // NIVEL 2":"CARTOGRAFÍA ESTELAR 3D // NIVEL 1"),this.titleEl)if(e&&this.selectedPlanetKey){const i=this.sceneManager?.getStarChartState?.()?.planets?.find(o=>o.key===this.selectedPlanetKey);this.titleEl.textContent=this.selectedPlanetKey==="sun"?"SOL CENTRAL // ESTRELLA TIPO G":`${i?.code||""} · ${i?.shortName||this.selectedPlanetKey.toUpperCase()}`}else this.titleEl.textContent="SISTEMA SOLAR CENTRAL";if(this.footerEl&&(this.footerEl.textContent=e?"Arrastra para orbitar el planeta en 3D · Rueda para zoom · Clic en nodo · Doble clic o Enter para saltar · Backspace volver":"Arrastra para orbitar en 3D · Rueda para zoom · Clic en un planeta para inspeccionarlo antes de saltar · [M] / [ESC] cerrar"),!this.dossierEl)return;if(!e||!this.selectedNode){this.dossierEl.classList.add("hidden");return}const t=this.selectedNode;this.dossierEl.classList.remove("hidden"),this.dossierBadgeEl&&(this.dossierBadgeEl.textContent=t.badge||"NODO TÁCTICO"),this.dossierTitleEl&&(this.dossierTitleEl.textContent=t.title||t.label),this.dossierDescEl&&(this.dossierDescEl.textContent=t.description||""),this.dossierTypeEl&&(this.dossierTypeEl.textContent=t.destTypeLabel||"Órbita"),this.dossierAltEl&&(this.dossierAltEl.textContent=t.insertionAlt||"--"),this.dossierAtmoEl&&(this.dossierAtmoEl.textContent=t.atmoGravity||"--"),this.dossierDistEl&&(this.dossierDistEl.textContent=t.distText||"--")}_syncCameraFromSpherical(e,t,n,i){e.set(i.x+n.radius*Math.sin(n.phi)*Math.cos(n.theta),i.y+n.radius*Math.cos(n.phi),i.z+n.radius*Math.sin(n.phi)*Math.sin(n.theta)),t.copy(i)}_getShipChartPos(e){let t=null,n=1/0;for(const o of e.planets){const a=e.shipPos.distanceTo(o.worldPos);a<n&&(n=a,t=o)}const i=$l(e.shipPos);if(t&&n<t.worldRadius*6){const o=this.planetRigs.get(t.key);if(o){const a=e.shipPos.clone().sub(t.worldPos),r=a.length(),l=Math.max(1.01,r/Math.max(1,t.worldRadius)),c=r>1e-4?a.divideScalar(r):new b(0,1,0),h=o.rootGroup.position.clone().addScaledVector(c,o.pChartR*Math.min(2.8,l)),u=X.clamp(1-(n-t.worldRadius*2)/(t.worldRadius*4),0,1);return i.lerp(h,u)}}return i}_syncScenePositions(e,t){for(const n of e.planets){const i=this.planetRigs.get(n.key);if(!i)continue;$l(n.worldPos,i.rootGroup.position),n.spinWorldQuat&&i.spinGroup.quaternion.copy(n.spinWorldQuat),n.orbitalMap&&n.orbitalMap!==i.lastOrbitalMap&&(i.globeMat.map=n.orbitalMap,i.globeMat.color.setHex(16777215),i.globeMat.needsUpdate=!0,i.lastOrbitalMap=n.orbitalMap),n.orbitalEmissiveMap!==i.lastEmissiveMap&&(i.globeMat.emissiveMap=n.orbitalEmissiveMap||null,i.globeMat.emissive.setHex(n.orbitalEmissiveMap?16777215:0),n.orbitalEmissiveMap||i.globeMat.emissive.set(n.color),i.globeMat.emissiveIntensity=n.orbitalEmissiveMap?1.15:.14,i.globeMat.needsUpdate=!0,i.lastEmissiveMap=n.orbitalEmissiveMap||null),n.cloudMap!==i.lastCloudMap&&(i.cloudMat.map=n.cloudMap||null,i.cloudMat.opacity=n.cloudMap?.36:0,i.cloudMesh.visible=!!n.cloudMap,i.cloudMat.needsUpdate=!0,i.lastCloudMap=n.cloudMap||null);const o=this.state===bn.PLANET_ZOOM&&this.selectedPlanetKey===n.key,a=this.hoveredNode?.planetKey===n.key;if(i.orbitMat.opacity=o?.85:a?.72:.34,i.selectRingMesh.visible=this.state===bn.SOLAR_SYSTEM&&a,i.moonRigs.forEach((r,l)=>{const c=n.moons[l];if(!c)return;const h=this._tmpVecA.copy(c.worldPos).sub(n.worldPos),u=h.length();u>1e-4?h.multiplyScalar(r.orbitChartR/u):h.set(r.orbitChartR,0,0),r.group.position.copy(h),r.group.rotation.y=t*.4}),i.stationRig&&e.crystalPalace){const r=this._tmpVecA.copy(e.crystalPalace.worldPos).sub(n.worldPos),l=r.length();l>1e-4?r.multiplyScalar(i.stationRig.orbitChartR/l):r.set(-i.stationRig.orbitChartR,1.5,0),i.stationRig.group.position.copy(r),i.stationRig.group.rotation.y=t*.55}}if(this.shipBeacon){const n=this._getShipChartPos(e);this.shipBeacon.group.position.copy(n),this.shipBeacon.diamond.rotation.y=t*1.4;const i=.88+Math.sin(t*4.5)*.25;this.shipBeacon.ring.scale.setScalar(i)}}_buildSolarNodes3D(e){const n=[{id:"sun",planetKey:"sun",key:"sun",label:"SOL CENTRAL",tagline:"Estrella central HDR · Iluminación del sistema",color:"#ffcc44",distKm:Math.max(0,Math.round(Math.max(0,e.shipPos.length()-e.sunWorldRadius)*19.35483870967742)),hitMesh:this.sunRig?.hitMesh||null,worldAnchor:new b(0,0,0),x:0,y:0,occluded:!1,descriptor:{type:"sun_orbit"}}];for(const i of e.planets){const o=this.planetRigs.get(i.key);o&&n.push({id:i.key,planetKey:i.key,key:i.key,planet:i,label:`${i.code} · ${i.shortName}`,shortName:i.shortName,tagline:i.tagline,color:i.color,accent:i.accent,distKm:i.distKm,hitMesh:o.l1HitMesh,worldAnchor:o.rootGroup.position.clone(),x:0,y:0,occluded:!1})}return n}_ensureL2PinPool(e){for(;this.l2PinPool.length<e;){const t=new Lt,n=this._trackDisposable(new tn(.05,.05,.75,6)),i=this._trackDisposable(new gn({color:16777215})),o=new Ge(n,i);o.position.y=.375;const a=this._trackDisposable(new ga(.32,0)),r=this._trackDisposable(new gn({color:16777215})),l=new Ge(a,r);l.position.y=.85;const c=this._trackDisposable(new Hs(.36,.48,24)),h=this._trackDisposable(new gn({color:16777215,side:Dt,transparent:!0,opacity:.82})),u=new Ge(c,h);u.rotation.x=Math.PI*.5,u.position.y=.06;const d=this._trackDisposable(new un(.78,12,8)),f=new Ge(d,this._trackDisposable(Ql()));f.position.y=.6,t.add(o,l,u,f),this.l2PinGroup.add(t),this.l2PinPool.push({group:t,stemMat:i,head:l,headMat:r,ringMat:h,hitMesh:f})}}_ensureL2OrbitRingPool(e){for(;this.l2OrbitRingPool.length<e;){const t=[];for(let a=0;a<96;a++){const r=a/96*Math.PI*2;t.push(new b(Math.cos(r),0,Math.sin(r)))}const n=this._trackDisposable(new Tt().setFromPoints(t)),i=this._trackDisposable(new Vs({color:6214911,transparent:!0,opacity:.42,depthWrite:!1})),o=new Rr(n,i);this.l2RingsGroup.add(o),this.l2OrbitRingPool.push({line:o,mat:i})}}_buildLevel2Nodes3D(e,t){if(t==="sun"){const x=Math.max(0,Math.round(Math.max(0,e.shipPos.length()-e.sunWorldRadius)*19.35483870967742));this._ensureL2PinPool(1),this._ensureL2OrbitRingPool(1);const m=this.l2OrbitRingPool[0];m.line.visible=!0,m.line.position.set(0,0,0),m.line.scale.setScalar(ks*1.65),m.mat.color.set("#ffd24c");const p=this.l2PinPool[0];p.group.visible=!0,p.group.position.set(ks*1.65,0,0),p.group.quaternion.identity(),p.stemMat.color.set("#ffd24c"),p.headMat.color.set("#ffd24c"),p.ringMat.color.set("#ffd24c");for(let _=1;_<this.l2PinPool.length;_++)this.l2PinPool[_].group.visible=!1;for(let _=1;_<this.l2OrbitRingPool.length;_++)this.l2OrbitRingPool[_].line.visible=!1;return[{id:"sun_orbit",label:"Órbita Panorámica del Sistema",title:"SOL CENTRAL // ÓRBITA DE OBSERVACIÓN",badge:"ESTRELLA PRINCIPAL",description:"Vista exterior segura frente al disco solar de plasma y las 5 órbitas keplerianas.",destTypeLabel:"Órbita Estelar",insertionAlt:"1.150.000 km",atmoGravity:"Corona Plasma · Radiación Extrema",distText:`${x.toLocaleString("es-ES")} km`,color:"#ffd24c",kind:"orbit",hitMesh:p.hitMesh,worldAnchor:p.group.position.clone(),x:0,y:0,occluded:!1,descriptor:{type:"sun_orbit"}}]}const n=e.planets.find(x=>x.key===t),i=this.planetRigs.get(t);if(!n||!i)return[];const o=[],a=i.rootGroup.position,r=i.pChartR,l=new b(0,1,0);let c=0,h=0;const u=r*1.52;this._ensureL2OrbitRingPool(1+i.moonRigs.length+(i.stationRig?1:0)),this._ensureL2PinPool(10);const d=this.l2OrbitRingPool[h++];d.line.visible=!0,d.line.position.copy(a),d.line.scale.setScalar(u),d.mat.color.set(n.color),d.mat.opacity=.56;const f=this.l2PinPool[c++];f.group.visible=!0;const g=new b(a.x+Math.cos(-.68)*u,a.y+.2,a.z+Math.sin(-.68)*u);if(f.group.position.copy(g),f.group.quaternion.identity(),f.stemMat.color.set(n.color),f.headMat.color.set(n.color),f.ringMat.color.set(n.color),o.push({id:`${n.key}_orbit`,label:"Órbita Baja",title:`${n.shortName} · ÓRBITA ESTACIONARIA`,badge:"ÓRBITA BAJA",description:n.tagline,destTypeLabel:"Órbita Planetaria",insertionAlt:`${Math.round(n.atmoTopAlt*1.15*.062).toLocaleString("es-ES")} km`,atmoGravity:`${n.atmoDesc} · ${n.gravity}`,distText:`${n.distKm.toLocaleString("es-ES")} km`,color:n.color,kind:"orbit",hitMesh:f.hitMesh,_pinObj:f,worldAnchor:g,x:0,y:0,occluded:!1,descriptor:{type:"planet_orbit",planetKey:n.key}}),n.landable){const x=i.spinGroup.quaternion,m=n.capLocalQuat||new ct,p=({id:_,label:y,title:v,badge:T,description:w,insertionAlt:A,color:E,localDir:M,descriptor:S})=>{const C=M.clone().normalize().applyQuaternion(m).applyQuaternion(x).normalize(),D=a.clone().addScaledVector(C,r*1.015),N=this.l2PinPool[c++];N.group.visible=!0,N.group.position.copy(D),N.group.quaternion.setFromUnitVectors(l,C),N.stemMat.color.set(E),N.headMat.color.set(E),N.ringMat.color.set(E),o.push({id:_,label:y,title:v,badge:T,description:w,destTypeLabel:"Descenso Atmosférico",insertionAlt:A,atmoGravity:`${n.atmoDesc} · ${n.gravity}`,distText:`${n.distKm.toLocaleString("es-ES")} km`,color:E,kind:"surface",surfaceNormal:C,hitMesh:N.hitMesh,_pinObj:N,worldAnchor:D,x:0,y:0,occluded:!1,descriptor:S})};if(n.key==="p1"){const _=[{landmarkId:"hometree",label:"Nación del Bosque · Árbol-Casa",short:"Bosque (Hometree)",badge:"NACIÓN DEL BOSQUE",desc:"Gran Continente Selvático continuo (45% del globo): árboles gigantes paraguas, secuoyas, manadas y ríos bioluminiscentes.",fallbackDir:new b(.15,.96,.22),color:"#44f0a8"},{landmarkId:"metkayina",label:"Nación del Agua · Metkayina",short:"Agua (Metkayina)",badge:"NACIÓN DEL AGUA · BUCEO",desc:"Océano y Archipiélago coralino: aldeas flotantes sobre balsas, laguna turquesa inmersiva, Tulkun, Ilu y arrecifes luminosos.",fallbackDir:new b(-.78,.16,.6),color:"#26e8ff"},{landmarkId:"ashland",label:"Nación de la Ceniza · Volcanes",short:"Ceniza (Mangkwan)",badge:"NACIÓN DE LA CENIZA",desc:"Península volcánica oscura tras la cordillera basáltica: 3 volcanes humeantes, fisuras de lava, árboles calcinados y hogueras.",fallbackDir:new b(.84,-.05,.54),color:"#ff6c34"},{landmarkId:"hallelujah",label:"Montañas Aleluya",short:"Aleluya",badge:"ZONA DE MONTAÑA",desc:"Islas rocosas flotantes entre cascadas, lianas luminosas y bandadas de Ikran y Toruk.",fallbackDir:new b(-.24,.86,-.45),color:"#7ef5c4"},{landmarkId:"souls",label:"Árbol de las Almas",short:"Árbol Almas",badge:"SANTUARIO",desc:"Cráter sagrado rodeado de arcos de piedra y filamentos luminosos de Eywa.",fallbackDir:new b(.28,.88,-.38),color:"#c978ff"}];for(const y of _){const v=n.pandoraLandmarks?.find(T=>T.id===y.landmarkId);p({id:`p1_surface_${y.landmarkId}`,label:y.short,title:y.label.toUpperCase(),badge:y.badge,description:y.desc,insertionAlt:"1.850 m s.n.m.",color:y.color,localDir:v?.capDir||y.fallbackDir,descriptor:{type:"planet_surface",planetKey:"p1",landmarkId:y.landmarkId}})}}else if(n.key==="p2"&&Array.isArray(n.nightCityLandmarks))for(const _ of n.nightCityLandmarks)p({id:`p2_surface_${_.id}`,label:_.shortName,title:_.name.toUpperCase(),badge:_.badge||"DISTRITO",description:_.description,insertionAlt:_.id==="city_center"?"450 m (Nivel Cañón)":"720 m (Vuelo Rasante)",color:_.color,localDir:_.capDir||new b(0,1,0),descriptor:{type:"planet_surface",planetKey:"p2",landmarkId:_.id}});else{const _={p2:{short:"Corpo Plaza (Superficie)",title:"NIGHT CITY // CAÑÓN CENTRAL",desc:"Descenso atravesando nubes hacia Corpo Plaza y los 7 distritos reales de Night City."},p3:{short:"Ciudadela Fortaleza",title:"PERUGIUS // CIUDADELA DEL VALLE",desc:"Planeo sobre valles boscosos hacia la fortaleza flotante y murallas doradas del mundo medieval."},p4:{short:"Distrito del Senado",title:"CORUSCANT // PLAZA DEL SENADO",desc:"Entrada atmosférica hacia la ecumenópolis global con anillos de luz dorada y tráfico orbital."}}[n.key];p({id:`${n.key}_surface`,label:_.short,title:_.title,badge:"ATERRIZAJE EN SUPERFICIE",description:_.desc,insertionAlt:n.key==="p2"?"450 m (Nivel Cañón)":"2.100 m s.n.m.",color:n.accent,localDir:new b(.32,.85,.42),descriptor:{type:"planet_surface",planetKey:n.key}})}}if(n.hasCrystalPalace&&e.crystalPalace&&i.stationRig){const x=Math.round(e.crystalPalace.distWorld*(n.kmScale/2976)),m=a.clone().add(i.stationRig.group.position),p=this.l2OrbitRingPool[h++];p.line.visible=!0,p.line.position.copy(a),p.line.scale.setScalar(i.stationRig.orbitChartR),p.mat.color.set("#ffae42"),p.mat.opacity=.48,o.push({id:"station_crystal_palace",label:"Crystal Palace",title:"ESTACIÓN ORBITAL CRYSTAL PALACE",badge:"ESTACIÓN ESPACIAL",description:"Plataforma orbital de lujo sobre Night City con 36 hangares iluminados y anillos rotatorios.",destTypeLabel:"Estación Orbital",insertionAlt:"Órbita Alta (320 km)",atmoGravity:"Gravedad Artificial · Vacío",distText:`${x.toLocaleString("es-ES")} km`,color:"#ffae42",kind:"station",hitMesh:i.stationRig.hitMesh,worldAnchor:m,x:0,y:0,occluded:!1,descriptor:{type:"station",stationId:"crystal_palace"}})}n.moons.forEach((x,m)=>{const p=i.moonRigs[m];if(!p)return;const _=this.l2OrbitRingPool[h++];_.line.visible=!0,_.line.position.copy(a),_.line.scale.setScalar(p.orbitChartR),_.mat.color.set("#9ec5ff"),_.mat.opacity=.34;const y=a.clone().add(p.group.position),v=Math.max(1,Math.round(Math.max(0,x.distWorld-x.moonRadius)*(n.kmScale/(620*4.8)))),T=Math.round(x.baseRadiusWorld*(n.kmScale/(620*4.8)));o.push({id:`${n.key}_moon_${m}`,label:x.name,title:x.name.toUpperCase(),badge:"SATÉLITE NATURAL",description:`Órbita lunar estacionaria alrededor de ${x.name} con seguimiento gravitatorio sincronizado.`,destTypeLabel:"Órbita Lunar",insertionAlt:`Órbita a ${T.toLocaleString("es-ES")} km`,atmoGravity:"Exosfera tenue · 0.18 G",distText:`${v.toLocaleString("es-ES")} km`,color:"#b8d8ff",kind:"moon",hitMesh:p.hitMesh,worldAnchor:y,x:0,y:0,occluded:!1,descriptor:{type:"moon",planetKey:n.key,moonIndex:x.index}})});for(let x=c;x<this.l2PinPool.length;x++)this.l2PinPool[x].group.visible=!1;for(let x=h;x<this.l2OrbitRingPool.length;x++)this.l2OrbitRingPool[x].line.visible=!1;for(let x=0;x<o.length;x++){const m=o[x];if(m._pinObj){const p=this.selectedNode?.id===m.id,_=this.hoveredNode?.id===m.id;m._pinObj.head.scale.setScalar(p?1.45:_?1.25:1)}}return o}_refreshLevel2NodeSelectionPreservingId(e,t){if(e){const n=this.currentLevel2Nodes.find(i=>i.id===e);n&&(this.selectedNode=n)}t&&(this.hoveredNode=this.currentLevel2Nodes.find(n=>n.id===t)||null)}_updateCamera(e){const t=this.state===bn.PLANET_ZOOM,n=this._tmpDesiredLook.set(0,0,0);if(t&&this.selectedPlanetKey&&this.selectedPlanetKey!=="sun"){const o=this.planetRigs.get(this.selectedPlanetKey);o&&n.copy(o.rootGroup.position)}const i=t?this.level2Orbit:this.solarOrbit;if(this._syncCameraFromSpherical(this._tmpDesiredCam,n,i,n),this.transitionActive){this.transitionElapsed=Math.min(this.zoomDuration,this.transitionElapsed+e);const o=this.transitionElapsed/Math.max(.01,this.zoomDuration),a=v1(o);this.zoomProgress=t?a:1-a,this.curCamPos.lerpVectors(this.transitionFromCamPos,this._tmpDesiredCam,a),this.curLookAt.lerpVectors(this.transitionFromLookAt,this._tmpDesiredLook,a),o>=1&&(this.transitionActive=!1,this.zoomProgress=t?1:0)}else{const o=1-Math.exp(-12*Math.max(.001,e));this.curCamPos.lerp(this._tmpDesiredCam,o),this.curLookAt.lerp(this._tmpDesiredLook,o),this.zoomProgress=t?1:0}this.mapCamera.position.copy(this.curCamPos),this.mapCamera.lookAt(this.curLookAt),this.mapCamera.updateMatrixWorld()}_ensureLabelOverlayInit(){return!this.labelsEl||typeof document>"u"?!1:(this.svgEl||(this.svgEl=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svgEl.setAttribute("class","sm-leader-svg"),this.labelsEl.appendChild(this.svgEl)),this.tooltipEl||(this.tooltipEl=document.createElement("div"),this.tooltipEl.className="sm-hover-tooltip",this.tooltipEl.style.display="none",this.labelsEl.appendChild(this.tooltipEl)),!0)}_clearLabelDOM(){for(const e of this.labelEls.values())e.style.display="none";for(const e of this.lineEls.values())e.style.display="none";this.tooltipEl&&(this.tooltipEl.style.display="none")}_updateLabelsAndLeaderLines(e){const t=this.getVisibleNodes(),n=this.state===bn.PLANET_ZOOM,i=n&&this.selectedPlanetKey&&this.selectedPlanetKey!=="sun"?this.planetRigs.get(this.selectedPlanetKey):null,o=i?i.rootGroup.position:null,a=this._tmpVecA,r=this._tmpVecB,l=n&&o?o.clone().project(this.mapCamera):null,c=l?(l.x*.5+.5)*this.viewW:this.viewW*.5,h=l?(-l.y*.5+.5)*this.viewH:this.viewH*.5;for(const g of t){if(g.kind==="surface"&&g.surfaceNormal&&o){r.copy(this.mapCamera.position).sub(o).normalize();const x=g.surfaceNormal.dot(r);g.facingDot=x,g.occluded=x<.08}else g.facingDot=1,g.occluded=!1;a.copy(g.worldAnchor).project(this.mapCamera),(a.z<-1||a.z>1)&&(g.occluded=!0),g.x=(a.x*.5+.5)*this.viewW,g.y=(-a.y*.5+.5)*this.viewH}if(!this._ensureLabelOverlayInit())return;const u=new Set,d=(g,x,m,p,_,y,v,T="")=>{u.add(g);let w=this.labelEls.get(g);if(w||(w=document.createElement("div"),this.labelsEl.appendChild(w),this.labelEls.set(g,w)),w.className=`sm-label ${T}`.trim(),w.style.display="block",w.style.left=`${Math.round(_)}px`,w.style.top=`${Math.round(y)}px`,v&&(w.style.borderColor=v),w.textContent!==x&&(w.textContent=x),Math.hypot(_-m,y-p)>2){let A=this.lineEls.get(g);A||(A=document.createElementNS("http://www.w3.org/2000/svg","line"),A.setAttribute("stroke-width","1.1"),A.setAttribute("stroke-opacity","0.55"),this.svgEl.appendChild(A),this.lineEls.set(g,A)),A.style.display="block",A.setAttribute("x1",`${m.toFixed(1)}`),A.setAttribute("y1",`${p.toFixed(1)}`),A.setAttribute("x2",`${_.toFixed(1)}`),A.setAttribute("y2",`${(y-2).toFixed(1)}`),A.setAttribute("stroke",v||"#5ed4ff")}};for(const g of t){if(g.occluded||g.x<-80||g.x>this.viewW+80||g.y<-80||g.y>this.viewH+80)continue;const x=n&&this.selectedNode?.id===g.id,m=this.hoveredNode?.id===g.id;let p=g.x,_=g.y-18;if(n&&g.kind==="surface"){const v=g.x-c,T=g.y-h,w=Math.max(1,Math.hypot(v,T));p=g.x+v/w*26,_=g.y+T/w*26-6}const y=`${x?"selected":""} ${m?"hovered":""}`.trim();d(g.id,g.label,g.x,g.y,p,_,x?"#ffae42":g.color,y)}if(this.shipBeacon&&e&&(a.copy(this.shipBeacon.group.position).project(this.mapCamera),a.z>=-1&&a.z<=1)){const g=(a.x*.5+.5)*this.viewW,x=(-a.y*.5+.5)*this.viewH,m=e.isUnderwater?"[ TÚ · OCÉANO ]":e.mode==="SURFACE"?"[ TÚ · ATMÓSFERA ]":"[ TÚ ]";d("__self_beacon__",m,g,x,g,x,"#ffae42","self-beacon")}for(const[g,x]of this.labelEls.entries())u.has(g)||(x.style.display="none");for(const[g,x]of this.lineEls.entries())u.has(g)||(x.style.display="none");const f=this.hoveredNode;if(f&&!f.occluded&&!n){this.tooltipEl.style.display="block";const g=Math.min(this.viewW-275,Math.max(16,f.x+18)),x=Math.max(76,Math.min(this.viewH-125,f.y-18));this.tooltipEl.style.left=`${Math.round(g)}px`,this.tooltipEl.style.top=`${Math.round(x)}px`,this.tooltipEl.style.borderColor=f.color||"#ffae42",this.tooltipEl.innerHTML=`<h4>${f.label}</h4><div class="sm-ht-dist">DISTANCIA: ${Number(f.distKm||0).toLocaleString("es-ES")} KM · CLIC PARA ZOOM</div><p>${f.tagline||""}</p>`}else this.tooltipEl.style.display="none"}updateAndDraw(e=typeof performance<"u"?performance.now():0){if(!this.isOpen()||!this.sceneManager)return;const t=this.lastTimeMs?Math.min(.1,Math.max(.001,(e-this.lastTimeMs)/1e3)):.016;this.lastTimeMs=e;const n=e*.001,i=this.sceneManager.getStarChartState();if(this._ensureScene3D(i),!this.mapScene||!this.mapCamera)return;this._syncScenePositions(i,n);const o=this.state===bn.PLANET_ZOOM;if(this.l2RingsGroup&&(this.l2RingsGroup.visible=o),this.l2PinGroup&&(this.l2PinGroup.visible=o),o&&this.selectedPlanetKey){const a=this.selectedNode?.id||null,r=this.hoveredNode?.id||null;this.currentLevel2Nodes=this._buildLevel2Nodes3D(i,this.selectedPlanetKey),this._refreshLevel2NodeSelectionPreservingId(a,r)}else this.currentSolarNodes=this._buildSolarNodes3D(i);this._updateCamera(t),this._updateLabelsAndLeaderLines(i),this.renderer&&this.renderer.render(this.mapScene,this.mapCamera)}dispose(){this.close(),this.backBtnEl&&this._boundHandlers.onBackClick&&this.backBtnEl.removeEventListener("click",this._boundHandlers.onBackClick),this.closeBtnEl&&this._boundHandlers.onCloseClick&&this.closeBtnEl.removeEventListener("click",this._boundHandlers.onCloseClick),this.jumpBtnEl&&this._boundHandlers.onJumpClick&&this.jumpBtnEl.removeEventListener("click",this._boundHandlers.onJumpClick),this.canvas&&(this._boundHandlers.onMouseDown&&this.canvas.removeEventListener("mousedown",this._boundHandlers.onMouseDown),this._boundHandlers.onClick&&this.canvas.removeEventListener("click",this._boundHandlers.onClick),this._boundHandlers.onDblClick&&this.canvas.removeEventListener("dblclick",this._boundHandlers.onDblClick),this._boundHandlers.onWheel&&this.canvas.removeEventListener("wheel",this._boundHandlers.onWheel),this._boundHandlers.onContextMenu&&this.canvas.removeEventListener("contextmenu",this._boundHandlers.onContextMenu)),typeof window<"u"&&(this._boundHandlers.onMouseMove&&window.removeEventListener("mousemove",this._boundHandlers.onMouseMove),this._boundHandlers.onMouseUp&&window.removeEventListener("mouseup",this._boundHandlers.onMouseUp),this._boundHandlers.onResize&&window.removeEventListener("resize",this._boundHandlers.onResize),this._boundHandlers.onKeyDown&&window.removeEventListener("keydown",this._boundHandlers.onKeyDown));for(const e of this.disposables)e?.dispose?.();this.disposables=[],this.renderer&&(this.renderer.renderLists?.dispose?.(),this.renderer.dispose?.(),this.renderer=null),this.labelsEl&&(this.labelsEl.innerHTML=""),this.labelEls.clear(),this.lineEls.clear(),this.svgEl=null,this.tooltipEl=null,this.mapScene=null,this.mapCamera=null}}const kf=document.getElementById("app-canvas"),_d=document.getElementById("loading-screen"),yr=document.getElementById("loading-status"),Md=document.getElementById("loading-bar-fill"),Jl=document.getElementById("hud-mode"),yd=document.getElementById("hud-sector"),bd=document.getElementById("hud-nearest"),Sd=document.getElementById("hud-altitude"),wd=document.getElementById("hud-time-btn"),Lo=document.getElementById("hud-time"),br=document.getElementById("pandora-landmarks-bar"),Ed=document.getElementById("hud-speed"),Ad=document.getElementById("hud-speed-unit"),Td=document.getElementById("hud-speed-bar"),Cd=document.getElementById("hud-mult"),ec=document.getElementById("hud-boost"),Pd=document.getElementById("hud-coords"),Yo=new uh;Yo.background=new te(198156);const Vi=new Hn(60,window.innerWidth/window.innerHeight,.05,48e4);Yo.add(Vi);const qi=new gf({canvas:kf,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});qi.setSize(window.innerWidth,window.innerHeight);qi.setPixelRatio(Math.min(window.devicePixelRatio,2));qi.outputColorSpace=$t;qi.toneMapping=zr;qi.toneMappingExposure=1.05;qi.shadowMap.enabled=!0;qi.shadowMap.type=Id;function y1(s,e){s.kernelRadius=6,s.minDistance=.001,s.maxDistance=.04,s.enabled=!1,s.ssaoMaterial.uniforms.uLogFar={value:Math.log2(e.far+1)};let t=s.ssaoMaterial.fragmentShader;t=t.replace("uniform float cameraFar;",`uniform float cameraFar;
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
					float sampleDepth = -samplePoint.z / 65.0;`).replace("gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );","gl_FragColor = vec4( vec3( 1.0 - occlusion * 0.42 ), 1.0 );"),s.ssaoMaterial.fragmentShader=t,s.ssaoMaterial.needsUpdate=!0,s.overrideVisibility=function(){const n=this.scene,i=this._visibilityCache;n.traverse(o=>{i.set(o,o.visible),(o.isPoints||o.isLine||o.userData?.skipSSAO||o.isMesh&&o.material&&!Array.isArray(o.material)&&o.material.transparent&&!o.isWater)&&(o.visible=!1)})}}const eo=new iM(qi),b1=new sM(Yo,Vi);eo.addPass(b1);const nl=new Ss(Yo,Vi,window.innerWidth,window.innerHeight,16);y1(nl,Vi);eo.addPass(nl);const Th=new Ho(new Ue(window.innerWidth,window.innerHeight),.42,.34,.96);eo.addPass(Th);const Ch=new Tf(QM);Ch.enabled=!1;eo.addPass(Ch);const S1=new lM;eo.addPass(S1);const zf=cM(8500,19e4);Yo.add(zf);const Gf=new hM(Vi,420),bs=new uM(Vi,kf),ei=new p1({scene:Yo,camera:Vi,renderer:qi,controls:bs,starfield:zf,cockpitParticles:Gf,bloomPass:Th,ssaoPass:nl,radialBlurPass:Ch,onStatusUpdate:s=>{if(Jl){Jl.textContent=s.modeText;const e=s.isUnderwater?"mode-sub":s.isSurface?"mode-atmo":"mode-orbit";Jl.className=`hud-value ${e}`}if(yd&&(yd.textContent=s.sectorName),bd&&(bd.textContent=s.nearestText),Sd&&(Sd.textContent=s.altitudeText),Lo&&(Lo.textContent=`${s.timeScale}x · ${s.solarPhaseName}`,Lo.className=`hud-value ${s.solarPhaseName==="DÍA"?"phase-day":s.solarPhaseName==="ATARDECER"?"phase-dusk":s.solarPhaseName==="NOCHE"?"phase-night":""}`),br)if(s.pandoraLandmarks){br.classList.remove("hidden");for(const e of s.pandoraLandmarks){const t=br.querySelector(`small[data-dist="${e.id}"]`);t&&(t.textContent=`${e.distKm.toLocaleString("es-ES")} km`)}}else br.classList.add("hidden")}}),Hf=()=>{const s=ei.cycleTimeScale();if(Lo){const e=Lo.textContent.split("·")[1]?.trim()||"ESPACIO";Lo.textContent=`${s}x · ${e}`}};wd&&wd.addEventListener("click",s=>{s.stopPropagation(),Hf()});const kr=new M1({overlayEl:document.getElementById("star-map-overlay"),canvasEl:document.getElementById("star-map-canvas"),labelsEl:document.getElementById("star-map-labels"),backBtnEl:document.getElementById("star-map-back-btn"),closeBtnEl:document.getElementById("star-map-close-btn"),levelTagEl:document.getElementById("star-map-level-tag"),titleEl:document.getElementById("star-map-title"),dossierEl:document.getElementById("star-map-dossier"),dossierBadgeEl:document.getElementById("dossier-badge"),dossierTitleEl:document.getElementById("dossier-title"),dossierDescEl:document.getElementById("dossier-desc"),dossierTypeEl:document.getElementById("dossier-type"),dossierAltEl:document.getElementById("dossier-alt"),dossierAtmoEl:document.getElementById("dossier-atmo"),dossierDistEl:document.getElementById("dossier-dist"),jumpBtnEl:document.getElementById("star-map-jump-btn"),footerEl:document.getElementById("star-map-footer"),sceneManager:ei,controls:bs,onConfirmJump:s=>ei.navigateToTarget(s)}),w1=new m1({containerEl:document.getElementById("tactical-minimap"),canvasEl:document.getElementById("minimap-canvas"),scaleEl:document.getElementById("minimap-scale"),sceneManager:ei,onOpenStarMap:()=>kr.open()});document.querySelectorAll(".pandora-lm-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.landmark;t&&ei.navigateToPandoraLandmark(t)})});window.addEventListener("keydown",s=>{kr.isOpen()||(["Digit1","Numpad1"].includes(s.code)&&ei.navigateToTarget("1"),["Digit2","Numpad2"].includes(s.code)&&ei.navigateToTarget("2"),["Digit3","Numpad3"].includes(s.code)&&ei.navigateToTarget("3"),["Digit4","Numpad4"].includes(s.code)&&ei.navigateToTarget("4"),["Digit5","Numpad5"].includes(s.code)&&ei.navigateToTarget("5"),["Digit6","Numpad6"].includes(s.code)&&ei.navigateToTarget("6"),s.code==="KeyT"&&!s.repeat&&Hf())});window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;Vi.aspect=s/e,Vi.updateProjectionMatrix(),qi.setSize(s,e),eo.setSize(s,e),nl.setSize(s,e),Th.resolution.set(s,e)});async function E1(){try{await ei.init((s,e)=>{Md&&(Md.style.width=`${s}%`),yr&&(yr.textContent=e)})}catch(s){console.error("Error inicializando simulador:",s),yr&&(yr.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{_d&&_d.classList.add("hidden")},300)}}const Rd=new Af;function Vf(){requestAnimationFrame(Vf);const s=Rd.getDelta();ei.update(s),bs.update(s),ei.syncCameraPostFlight();const e=bs.getCurrentSpeed(),t=bs.getPulseRatio();Gf.update(s,e,t);const n=ei.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(Ed&&(Ed.textContent=i),Ad&&(Ad.textContent=n?"km/s":"m/s"),Td){const o=(n?1400:120)*bs.speedMultiplier,a=Math.min(100,e/Math.max(1,o)*100);Td.style.width=`${a}%`}if(Cd&&(Cd.textContent=`x${bs.speedMultiplier.toFixed(1)}`),ec){const o=t>.1;ec.textContent=bs.autopilot?"PILOTO AUTO":o?"MOTOR PULSE":"EN ESPERA",ec.className=o?"status-active":"status-standby"}if(Pd){const o=Vi.position;Pd.textContent=`${o.x.toFixed(0)}, ${o.y.toFixed(0)}, ${o.z.toFixed(0)}`}kr.isOpen()?kr.updateAndDraw(performance.now()):w1.update(Rd.elapsedTime),eo.render()}E1();Vf();
