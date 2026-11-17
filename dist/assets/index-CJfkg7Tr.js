(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jc="170",ep=0,Ih=1,tp=2,Ld=1,Nd=2,es=3,wi=0,On=1,It=2,ei=0,Ws=1,Tn=2,Lh=3,Nh=4,Ud=5,ns=100,np=101,ip=102,sp=103,op=104,nc=200,ap=201,rp=202,lp=203,ic=204,sc=205,Fd=206,cp=207,Od=208,hp=209,up=210,dp=211,fp=212,pp=213,mp=214,oc=0,ac=1,rc=2,Lo=3,lc=4,cc=5,hc=6,uc=7,kd=0,gp=1,vp=2,As=0,Bd=1,zd=2,Gd=3,Gr=4,xp=5,Hd=6,Vd=7,Uh="attached",_p="detached",Wd=300,No=301,Uo=302,dc=303,fc=304,Hr=306,Wn=1e3,Li=1001,Nr=1002,Rn=1003,Xd=1004,la=1005,fi=1006,wr=1007,is=1008,Oi=1009,qd=1010,Yd=1011,Ma=1012,eh=1013,qs=1014,yi=1015,Ui=1016,th=1017,nh=1018,Ys=1020,jd=35902,Kd=1021,Zd=1022,bi=1023,$d=1024,Qd=1025,Co=1026,js=1027,Vr=1028,ih=1029,Jd=1030,sh=1031,oh=1033,Ar=33776,Er=33777,Tr=33778,Cr=33779,pc=35840,mc=35841,gc=35842,vc=35843,xc=36196,_c=37492,Mc=37496,yc=37808,bc=37809,Sc=37810,wc=37811,Ac=37812,Ec=37813,Tc=37814,Cc=37815,Pc=37816,Rc=37817,Dc=37818,Ic=37819,Lc=37820,Nc=37821,Pr=36492,Uc=36494,Fc=36495,ef=36283,Oc=36284,kc=36285,Bc=36286,ya=2300,ba=2301,ol=2302,Fh=2400,Oh=2401,kh=2402,Mp=2500,yp=0,tf=1,zc=2,bp=3200,Gc=3201,ah=0,Sp=1,Gi="",Zt="srgb",Kn="srgb-linear",Wr="linear",sn="srgb",oo=7680,Bh=519,wp=512,Ap=513,Ep=514,nf=515,Tp=516,Cp=517,Pp=518,Rp=519,Hc=35044,zh="300 es",ss=2e3,Ur=2001;class Ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const da=Math.PI/180,Fo=180/Math.PI;function Fi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function Fn(s,e,t){return Math.max(e,Math.min(t,s))}function rh(s,e){return(s%e+e)%e}function Dp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ip(s,e,t){return s!==e?(t-s)/(e-s):0}function fa(s,e,t){return(1-t)*s+t*e}function Lp(s,e,t,n){return fa(s,e,1-Math.exp(-t*n))}function Np(s,e=1){return e-Math.abs(rh(s,e*2)-e)}function Up(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Fp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Op(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kp(s,e){return s+Math.random()*(e-s)}function Bp(s){return s*(.5-Math.random())}function zp(s){s!==void 0&&(Gh=s);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gp(s){return s*da}function Hp(s){return s*Fo}function Vp(s){return(s&s-1)===0&&s!==0}function Wp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qp(s,e,t,n,i){const o=Math.cos,a=Math.sin,r=o(t/2),l=a(t/2),c=o((e+n)/2),h=a((e+n)/2),u=o((e-n)/2),d=a((e-n)/2),f=o((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(r*h,l*u,l*d,r*c);break;case"YZY":s.set(l*d,r*h,l*u,r*c);break;case"ZXZ":s.set(l*u,l*d,r*h,r*c);break;case"XZX":s.set(r*h,l*g,l*f,r*c);break;case"YXY":s.set(l*f,r*h,l*g,r*c);break;case"ZYZ":s.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function on(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const G={DEG2RAD:da,RAD2DEG:Fo,generateUUID:Fi,clamp:Fn,euclideanModulo:rh,mapLinear:Dp,inverseLerp:Ip,lerp:fa,damp:Lp,pingpong:Np,smoothstep:Up,smootherstep:Fp,randInt:Op,randFloat:kp,randFloatSpread:Bp,seededRandom:zp,degToRad:Gp,radToDeg:Hp,isPowerOfTwo:Vp,ceilPowerOfTwo:Wp,floorPowerOfTwo:Xp,setQuaternionFromProperEuler:qp,normalize:on,denormalize:Ii};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*i+e.x,this.y=o*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e,t,n,i,o,a,r,l,c){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,a,r,l,c)}set(e,t,n,i,o,a,r,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],T=i[2],w=i[5],E=i[8];return o[0]=a*v+r*_+l*T,o[3]=a*m+r*y+l*w,o[6]=a*p+r*x+l*E,o[1]=c*v+h*_+u*T,o[4]=c*m+h*y+u*w,o[7]=c*p+h*x+u*E,o[2]=d*v+f*_+g*T,o[5]=d*m+f*y+g*w,o[8]=d*p+f*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*r*c-n*o*h+n*r*l+i*o*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=h*a-r*c,d=r*l-h*o,f=c*o-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(r*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*o-r*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+e,-i*c,i*l,-i*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const al=new Tt;function sf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yp(){const s=Sa("canvas");return s.style.display="block",s}const Hh={};function ca(s){s in Hh||(Hh[s]=!0,console.warn(s))}function jp(s,e,t){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Kp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zt={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===sn&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===sn&&(s.r=Po(s.r),s.g=Po(s.g),s.b=Po(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?Wr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Po(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Vh=[.64,.33,.3,.6,.15,.06],Wh=[.2126,.7152,.0722],Xh=[.3127,.329],qh=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[Kn]:{primaries:Vh,whitePoint:Xh,transfer:Wr,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:Vh,whitePoint:Xh,transfer:sn,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}});let ao;class $p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ao===void 0&&(ao=Sa("canvas")),ao.width=e.width,ao.height=e.height;const n=ao.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ao}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=os(o[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qp=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(rl(i[a].image)):o.push(rl(i[a]))}else o=rl(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function rl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$p.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jp=0;class Cn extends Ho{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,n=Li,i=Li,o=fi,a=is,r=bi,l=Oi,c=Cn.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Fi(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Wd;Cn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,n=0,i=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,T=(p+1)/2,w=(h+d)/4,E=(u+v)/4,A=(g+m)/4;return y>x&&y>T?y<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(y),i=w/n,o=E/n):x>T?x<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(x),n=w/i,o=A/i):T<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(T),n=E/o,i=A/o),this.set(n,i,o,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e0 extends Ho{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends e0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class af extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t0 extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,a,r){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=o[a+0],f=o[a+1],g=o[a+2],v=o[a+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(r===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-r;const p=l*d+c*f+h*g+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,p*_);m=Math.sin(m*w)/T,r=Math.sin(r*w)/T}const x=r*_;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-r){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,o,a){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[a],d=o[a+1],f=o[a+2],g=o[a+3];return e[t]=r*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-r*f,e[t+2]=c*g+h*f+r*d-l*u,e[t+3]=h*g-r*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,o=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),u=r(o/2),d=l(n/2),f=l(i/2),g=l(o/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],a=t[1],r=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(a-i)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(o+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(o-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,a=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*r+i*c-o*l,this._y=i*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-i*r,this._w=a*h-n*r-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*e._w+n*e._x+i*e._y+o*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*i-r*n),h=2*(r*t-o*i),u=2*(o*n-a*t);return this.x=t+l*c+a*u-r*h,this.y=n+l*h+r*c-o*u,this.z=i+l*u+o*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,a=t.x,r=t.y,l=t.z;return this.x=i*l-o*r,this.y=o*a-n*l,this.z=n*r-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new b,jh=new ut;class rs{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,Ti):Ti.fromBufferAttribute(o,a),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const i=e.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Oa.subVectors(this.max,Zo),ro.subVectors(e.a,Zo),lo.subVectors(e.b,Zo),co.subVectors(e.c,Zo),hs.subVectors(lo,ro),us.subVectors(co,lo),Ds.subVectors(ro,co);let t=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Ds.z,Ds.y,hs.z,0,-hs.x,us.z,0,-us.x,Ds.z,0,-Ds.x,-hs.y,hs.x,0,-us.y,us.x,0,-Ds.y,Ds.x,0];return!cl(t,ro,lo,co,Oa)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,ro,lo,co,Oa))?!1:(ka.crossVectors(hs,us),t=[ka.x,ka.y,ka.z],cl(t,ro,lo,co,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new b,new b,new b,new b,new b,new b,new b,new b],Ti=new b,Fa=new rs,ro=new b,lo=new b,co=new b,hs=new b,us=new b,Ds=new b,Zo=new b,Oa=new b,ka=new b,Is=new b;function cl(s,e,t,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){Is.fromArray(s,o);const r=i.x*Math.abs(Is.x)+i.y*Math.abs(Is.y)+i.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const n0=new rs,$o=new b,hl=new b;class ni{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):n0.setFromPoints(e).getCenter(n);let i=0;for(let o=0,a=e.length;o<a;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const t=$o.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($o,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(hl)),this.expandByPoint($o.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new b,ul=new b,Ba=new b,ds=new b,dl=new b,za=new b,fl=new b;class Ea{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ul.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(ul);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),r=ds.dot(this.direction),l=-ds.dot(Ba),c=ds.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-r,d=a*r-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*o+r)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(a*o+r)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=a>0?-o:o,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ul).addScaledVector(Ba,d),f}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,o=e.radius*e.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(o=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),u>=0?(r=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(r=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,i,o){dl.subVectors(t,e),za.subVectors(n,e),fl.crossVectors(dl,za);let a=this.direction.dot(fl),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;ds.subVectors(this.origin,e);const l=r*this.direction.dot(za.crossVectors(ds,za));if(l<0)return null;const c=r*this.direction.dot(dl.cross(ds));if(c<0||l+c>a)return null;const h=-r*ds.dot(fl);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,o,a,r,l,c,h,u,d,f,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,a,r,l,c,h,u,d,f,g,v,m)}set(e,t,n,i,o,a,r,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=o,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ho.setFromMatrixColumn(e,0).length(),o=1/ho.setFromMatrixColumn(e,1).length(),a=1/ho.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const d=a*h,f=a*u,g=r*h,v=r*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-r*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*r,t[4]=g*r-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-r,t[2]=f*r-g,t[6]=v+d*r,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*r,t[4]=-a*u,t[8]=g+f*r,t[1]=f+g*r,t[5]=a*h,t[9]=v-d*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=r*h,v=r*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=r*l,v=r*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-r*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=r*l,v=r*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=r*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,s0)}lookAt(e,t,n){const i=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),fs.crossVectors(n,hi),fs.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),fs.crossVectors(n,hi)),fs.normalize(),Ga.crossVectors(hi,fs),i[0]=fs.x,i[4]=Ga.x,i[8]=hi.x,i[1]=fs.y,i[5]=Ga.y,i[9]=hi.y,i[2]=fs.z,i[6]=Ga.z,i[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],T=n[15],w=i[0],E=i[4],A=i[8],M=i[12],S=i[1],C=i[5],R=i[9],L=i[13],P=i[2],F=i[6],z=i[10],k=i[14],U=i[3],N=i[7],X=i[11],oe=i[15];return o[0]=a*w+r*S+l*P+c*U,o[4]=a*E+r*C+l*F+c*N,o[8]=a*A+r*R+l*z+c*X,o[12]=a*M+r*L+l*k+c*oe,o[1]=h*w+u*S+d*P+f*U,o[5]=h*E+u*C+d*F+f*N,o[9]=h*A+u*R+d*z+f*X,o[13]=h*M+u*L+d*k+f*oe,o[2]=g*w+v*S+m*P+p*U,o[6]=g*E+v*C+m*F+p*N,o[10]=g*A+v*R+m*z+p*X,o[14]=g*M+v*L+m*k+p*oe,o[3]=_*w+y*S+x*P+T*U,o[7]=_*E+y*C+x*F+T*N,o[11]=_*A+y*R+x*z+T*X,o[15]=_*M+y*L+x*k+T*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],a=e[1],r=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+o*l*u-i*c*u-o*r*d+n*c*d+i*r*f-n*l*f)+v*(+t*l*f-t*c*d+o*a*d-i*a*f+i*c*h-o*l*h)+m*(+t*c*u-t*r*f-o*a*u+n*a*f+o*r*h-n*c*h)+p*(-i*r*h-t*l*u+t*r*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=u*m*c-v*d*c+v*l*f-r*m*f-u*l*p+r*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*r*f-a*v*f-h*r*p+a*u*p,T=g*u*l-h*v*l-g*r*d+a*v*d+h*r*m-a*u*m,w=t*_+n*y+i*x+o*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=_*E,e[1]=(v*d*o-u*m*o-v*i*f+n*m*f+u*i*p-n*d*p)*E,e[2]=(r*m*o-v*l*o+v*i*c-n*m*c-r*i*p+n*l*p)*E,e[3]=(u*l*o-r*d*o-u*i*c+n*d*c+r*i*f-n*l*f)*E,e[4]=y*E,e[5]=(h*m*o-g*d*o+g*i*f-t*m*f-h*i*p+t*d*p)*E,e[6]=(g*l*o-a*m*o-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*d*o-h*l*o+h*i*c-t*d*c-a*i*f+t*l*f)*E,e[8]=x*E,e[9]=(g*u*o-h*v*o-g*n*f+t*v*f+h*n*p-t*u*p)*E,e[10]=(a*v*o-g*r*o+g*n*c-t*v*c-a*n*p+t*r*p)*E,e[11]=(h*r*o-a*u*o-h*n*c+t*u*c+a*n*f-t*r*f)*E,e[12]=T*E,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*m+t*u*m)*E,e[14]=(g*r*i-a*v*i-g*n*l+t*v*l+a*n*m-t*r*m)*E,e[15]=(a*u*i-h*r*i+h*n*l-t*u*l-a*n*d+t*r*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,a=e.x,r=e.y,l=e.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*a,0,c*l-i*r,h*l+i*a,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,a){return this.set(1,n,o,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,a=t._y,r=t._z,l=t._w,c=o+o,h=a+a,u=r+r,d=o*c,f=o*h,g=o*u,v=a*h,m=a*u,p=r*u,_=l*c,y=l*h,x=l*u,T=n.x,w=n.y,E=n.z;return i[0]=(1-(v+p))*T,i[1]=(f+x)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(g+y)*E,i[9]=(m-_)*E,i[10]=(1-(d+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=ho.set(i[0],i[1],i[2]).length();const a=ho.set(i[4],i[5],i[6]).length(),r=ho.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],Ci.copy(this);const c=1/o,h=1/a,u=1/r;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,t.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=r,this}makePerspective(e,t,n,i,o,a,r=ss){const l=this.elements,c=2*o/(t-e),h=2*o/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(r===ss)f=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===Ur)f=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,o,a,r=ss){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-o),d=(t+e)*c,f=(n+i)*h;let g,v;if(r===ss)g=(a+o)*u,v=-2*u;else if(r===Ur)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ho=new b,Ci=new ot,i0=new b(0,0,0),s0=new b(1,1,1),fs=new b,Ga=new b,hi=new b,Kh=new ot,Zh=new ut;class ri{constructor(e=0,t=0,n=0,i=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],a=i[4],r=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Fn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const $h=new b,uo=new ut,Zi=new ot,Ha=new b,Qo=new b,a0=new b,r0=new ut,Qh=new b(1,0,0),Jh=new b(0,1,0),eu=new b(0,0,1),tu={type:"added"},l0={type:"removed"},fo={type:"childadded",child:null},pl={type:"childremoved",child:null};class qt extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new b,t=new ri,n=new ut,i=new b(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new Tt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Qo,Ha,this.up):Zi.lookAt(Ha,Qo,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),uo.setFromRotationMatrix(Zi),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),fo.child=e,this.dispatchEvent(fo),fo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l0),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(e.materials,this.material[l]));i.material=r}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(o(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new b(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new b,$i=new b,ml=new b,Qi=new b,po=new b,mo=new b,nu=new b,gl=new b,vl=new b,xl=new b,_l=new $t,Ml=new $t,yl=new $t;class Mi{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pi.subVectors(e,t),i.cross(Pi);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){Pi.subVectors(i,t),$i.subVectors(n,t),ml.subVectors(e,t);const a=Pi.dot(Pi),r=Pi.dot($i),l=Pi.dot(ml),c=$i.dot($i),h=$i.dot(ml),u=a*c-r*r;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-r*h)*d,g=(a*h-r*l)*d;return o.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,i,o,a,r,l){return this.getBarycoord(e,t,n,i,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(r,Qi.z),l)}static getInterpolatedAttribute(e,t,n,i,o,a){return _l.setScalar(0),Ml.setScalar(0),yl.setScalar(0),_l.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_l,o.x),a.addScaledVector(Ml,o.y),a.addScaledVector(yl,o.z),a}static isFrontFacing(e,t,n,i){return Pi.subVectors(n,t),$i.subVectors(e,t),Pi.cross($i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Pi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let a,r;po.subVectors(i,n),mo.subVectors(o,n),gl.subVectors(e,n);const l=po.dot(gl),c=mo.dot(gl);if(l<=0&&c<=0)return t.copy(n);vl.subVectors(e,i);const h=po.dot(vl),u=mo.dot(vl);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(po,a);xl.subVectors(e,o);const f=po.dot(xl),g=mo.dot(xl);if(g>=0&&f<=g)return t.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(mo,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return nu.subVectors(o,i),r=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(nu,r);const p=1/(m+v+d);return a=v*p,r=d*p,t.copy(n).addScaledVector(po,a).addScaledVector(mo,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Va={h:0,s:0,l:0};function bl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=zt.workingColorSpace){if(e=rh(e,1),t=Fn(t,0,1),n=Fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=bl(a,o,e+1/3),this.g=bl(a,o,e),this.b=bl(a,o,e-1/3)}return zt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return zt.fromWorkingColorSpace(Yn.copy(this),e),Math.round(Fn(Yn.r*255,0,255))*65536+Math.round(Fn(Yn.g*255,0,255))*256+Math.round(Fn(Yn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(Yn.copy(this),t);const n=Yn.r,i=Yn.g,o=Yn.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Zt){zt.fromWorkingColorSpace(Yn.copy(this),e);const t=Yn.r,n=Yn.g,i=Yn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(Va);const n=fa(ps.h,Va.h,t),i=fa(ps.s,Va.s,t),o=fa(ps.l,Va.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new ne;ne.NAMES=rf;let c0=0;class Si extends Ho{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Fi(),this.name="",this.blending=Ws,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(t){const o=i(e.textures),a=i(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fn extends Si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=new b,Wa=new Oe;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array),o=on(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}}class lf extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cf extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let h0=0;const vi=new ot,Sl=new qt,go=new b,ui=new rs,Jo=new rs,Un=new b;class Et extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sf(e)?cf:lf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Tt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];ui.setFromBufferAttribute(o),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const r=t[o];Jo.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(ui.min,Jo.min),ui.expandByPoint(Un),Un.addVectors(ui.max,Jo.max),ui.expandByPoint(Un)):(ui.expandByPoint(Jo.min),ui.expandByPoint(Jo.max))}ui.getCenter(n);let i=0;for(let o=0,a=e.count;o<a;o++)Un.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(Un));if(t)for(let o=0,a=t.length;o<a;o++){const r=t[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Un.fromBufferAttribute(r,c),l&&(go.fromBufferAttribute(e,c),Un.add(go)),i=Math.max(i,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let A=0;A<n.count;A++)r[A]=new b,l[A]=new b;const c=new b,h=new b,u=new b,d=new Oe,f=new Oe,g=new Oe,v=new b,m=new b;function p(A,M,S){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(o,A),f.fromBufferAttribute(o,M),g.fromBufferAttribute(o,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),r[A].add(v),r[M].add(v),r[S].add(v),l[A].add(m),l[M].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,M=_.length;A<M;++A){const S=_[A],C=S.start,R=S.count;for(let L=C,P=C+R;L<P;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new b,x=new b,T=new b,w=new b;function E(A){T.fromBufferAttribute(i,A),w.copy(T);const M=r[A];y.copy(M),y.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(w,M);const C=x.dot(l[A])<0?-1:1;a.setXYZW(A,y.x,y.y,y.z,C)}for(let A=0,M=_.length;A<M;++A){const S=_[A],C=S.start,R=S.count;for(let L=C,P=C+R;L<P;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,o=new b,a=new b,r=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,o),u.subVectors(i,o),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new _t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=e(l,n);t.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new ot,Ls=new Ea,Xa=new ni,su=new b,qa=new b,Ya=new b,ja=new b,wl=new b,Ka=new b,ou=new b,Za=new b;class Ge extends qt{constructor(e=new Et,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(o&&r){Ka.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],u=o[l];h!==0&&(wl.fromBufferAttribute(u,e),a?Ka.addScaledVector(wl,h):Ka.addScaledVector(wl.sub(t),h))}t.add(Ka)}return t}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(o),Ls.copy(e.ray).recast(e.near),!(Xa.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Xa,su)===null||Ls.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(iu.copy(o).invert(),Ls.copy(e.ray).applyMatrix4(iu),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let i;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,T=y;x<T;x+=3){const w=r.getX(x),E=r.getX(x+1),A=r.getX(x+2);i=$a(this,p,e,n,c,h,u,w,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=r.getX(m),y=r.getX(m+1),x=r.getX(m+2);i=$a(this,a,e,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,T=y;x<T;x+=3){const w=x,E=x+1,A=x+2;i=$a(this,p,e,n,c,h,u,w,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;i=$a(this,a,e,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function u0(s,e,t,n,i,o,a,r){let l;if(e.side===On?l=n.intersectTriangle(a,o,i,!0,r):l=n.intersectTriangle(i,o,a,e.side===wi,r),l===null)return null;Za.copy(r),Za.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:s}}function $a(s,e,t,n,i,o,a,r,l,c){s.getVertexPosition(r,qa),s.getVertexPosition(l,Ya),s.getVertexPosition(c,ja);const h=u0(s,e,t,n,qa,Ya,ja,ou);if(h){const u=new b;Mi.getBarycoord(ou,qa,Ya,ja,u),i&&(h.uv=Mi.getInterpolatedAttribute(i,r,l,c,u,new Oe)),o&&(h.uv1=Mi.getInterpolatedAttribute(o,r,l,c,u,new Oe)),a&&(h.normal=Mi.getInterpolatedAttribute(a,r,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new b,materialIndex:0};Mi.getNormal(qa,Ya,ja,d.normal),h.face=d,h.barycoord=u}return h}class un extends Et{constructor(e=1,t=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,o,0),g("z","y","x",1,-1,n,t,-e,a,o,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,o,4),g("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(v,m,p,_,y,x,T,w,E,A,M){const S=x/E,C=T/A,R=x/2,L=T/2,P=w/2,F=E+1,z=A+1;let k=0,U=0;const N=new b;for(let X=0;X<z;X++){const oe=X*C-L;for(let te=0;te<F;te++){const we=te*S-R;N[v]=we*_,N[m]=oe*y,N[p]=P,c.push(N.x,N.y,N.z),N[v]=0,N[m]=0,N[p]=w>0?1:-1,h.push(N.x,N.y,N.z),u.push(te/E),u.push(1-X/A),k+=1}}for(let X=0;X<A;X++)for(let oe=0;oe<E;oe++){const te=d+oe+F*X,we=d+oe+F*(X+1),j=d+(oe+1)+F*(X+1),ue=d+(oe+1)+F*X;l.push(te,we,ue),l.push(we,j,ue),U+=6}r.addGroup(f,U,M),f+=U,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qn(s){const e={};for(let t=0;t<s.length;t++){const n=Oo(s[t]);for(const i in n)e[i]=n[i]}return e}function d0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const Ni={clone:Oo,merge:Qn};var f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uf extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ss}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ms=new b,au=new Oe,ru=new Oe;class Hn extends uf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,au,ru),t.subVectors(ru,au)}setViewOffset(e,t,n,i,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(da*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vo=-90,xo=1;class m0 extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(vo,xo,e,t);i.layers=this.layers,this.add(i);const o=new Hn(vo,xo,e,t);o.layers=this.layers,this.add(o);const a=new Hn(vo,xo,e,t);a.layers=this.layers,this.add(a);const r=new Hn(vo,xo,e,t);r.layers=this.layers,this.add(r);const l=new Hn(vo,xo,e,t);l.layers=this.layers,this.add(l);const c=new Hn(vo,xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,o,a,r,l]=t;for(const c of t)this.remove(c);if(e===ss)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,r),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class df extends Cn{constructor(e,t,n,i,o,a,r,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:No,super(e,t,n,i,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g0 extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new df(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new un(5,5,5),o=new rn({name:"CubemapFromEquirect",uniforms:Oo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:ei});o.uniforms.tEquirect.value=t;const a=new Ge(i,o),r=t.minFilter;return t.minFilter===is&&(t.minFilter=fi),new m0(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(o)}}const Al=new b,v0=new b,x0=new Tt;class _s{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Al.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||x0.getNormalMatrix(e),i=this.coplanarPoint(Al).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new ni,Qa=new b;class ch{constructor(e=new _s,t=new _s,n=new _s,i=new _s,o=new _s,a=new _s){this.planes=[e,t,n,i,o,a]}set(e,t,n,i,o,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ss){const n=this.planes,i=e.elements,o=i[0],a=i[1],r=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-o,d-c,m-f,x-p).normalize(),n[1].setComponents(l+o,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+_).normalize(),n[3].setComponents(l-a,d-h,m-g,x-_).normalize(),n[4].setComponents(l-r,d-u,m-v,x-y).normalize(),t===ss)n[5].setComponents(l+r,d+u,m+v,x+y).normalize();else if(t===Ur)n[5].setComponents(r,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qa.x=i.normal.x>0?e.max.x:e.min.x,Qa.y=i.normal.y>0?e.max.y:e.min.y,Qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ff(){let s=null,e=!1,t=null,n=null;function i(o,a){t(o,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function _0(s){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,r),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(s.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:o,update:a}}class ls extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,a=t/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,u=e/r,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-a;for(let y=0;y<c;y++){const x=y*u-o;g.push(x,-_,0),v.push(0,0,1),m.push(y/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<r;_++){const y=_+c*p,x=_+c*(p+1),T=_+1+c*(p+1),w=_+1+c*p;f.push(y,x,w),f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
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
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sg=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,kg=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,zg=`#define NORMAL
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
}`,Gg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,qg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:M0,alphahash_pars_fragment:y0,alphamap_fragment:b0,alphamap_pars_fragment:S0,alphatest_fragment:w0,alphatest_pars_fragment:A0,aomap_fragment:E0,aomap_pars_fragment:T0,batching_pars_vertex:C0,batching_vertex:P0,begin_vertex:R0,beginnormal_vertex:D0,bsdfs:I0,iridescence_fragment:L0,bumpmap_pars_fragment:N0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:k0,color_fragment:B0,color_pars_fragment:z0,color_pars_vertex:G0,color_vertex:H0,common:V0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:j0,emissivemap_pars_fragment:K0,colorspace_fragment:Z0,colorspace_pars_fragment:$0,envmap_fragment:Q0,envmap_common_pars_fragment:J0,envmap_pars_fragment:em,envmap_pars_vertex:tm,envmap_physical_pars_fragment:dm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:om,fog_pars_fragment:am,gradientmap_pars_fragment:rm,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:fm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:vm,lights_physical_pars_fragment:xm,lights_fragment_begin:_m,lights_fragment_maps:Mm,lights_fragment_end:ym,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Am,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Im,morphcolor_vertex:Lm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Fm,normal_fragment_begin:Om,normal_fragment_maps:km,normal_pars_fragment:Bm,normal_pars_vertex:zm,normal_vertex:Gm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:jm,premultiplied_alpha_fragment:Km,project_vertex:Zm,dithering_fragment:$m,dithering_pars_fragment:Qm,roughnessmap_fragment:Jm,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:sg,skinbase_vertex:og,skinning_pars_vertex:ag,skinning_vertex:rg,skinnormal_vertex:lg,specularmap_fragment:cg,specularmap_pars_fragment:hg,tonemapping_fragment:ug,tonemapping_pars_fragment:dg,transmission_fragment:fg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:vg,worldpos_vertex:xg,background_vert:_g,background_frag:Mg,backgroundCube_vert:yg,backgroundCube_frag:bg,cube_vert:Sg,cube_frag:wg,depth_vert:Ag,depth_frag:Eg,distanceRGBA_vert:Tg,distanceRGBA_frag:Cg,equirect_vert:Pg,equirect_frag:Rg,linedashed_vert:Dg,linedashed_frag:Ig,meshbasic_vert:Lg,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:Fg,meshmatcap_vert:Og,meshmatcap_frag:kg,meshnormal_vert:Bg,meshnormal_frag:zg,meshphong_vert:Gg,meshphong_frag:Hg,meshphysical_vert:Vg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Yg,points_frag:jg,shadow_vert:Kg,shadow_frag:Zg,sprite_vert:$g,sprite_frag:Qg},qe={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},zi={basic:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new ne(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Qn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Qn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new ne(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Qn([qe.points,qe.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Qn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Qn([qe.common,qe.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Qn([qe.sprite,qe.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Qn([qe.common,qe.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Qn([qe.lights,qe.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};zi.physical={uniforms:Qn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Ja={r:0,b:0,g:0},Us=new ri,Jg=new ot;function ev(s,e,t,n,i,o,a){const r=new ne(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?p(r,l):x&&x.isColor&&(p(x,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Hr)?(h===void 0&&(h=new Ge(new un(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Oo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Us.copy(y.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Us)),h.material.toneMapped=zt.getTransfer(x.colorSpace)!==sn,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ge(new ls(2,2),new rn({name:"BackgroundMaterial",uniforms:Oo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=zt.getTransfer(x.colorSpace)!==sn,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Ja,hf(s)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,y,a)}return{getClearColor:function(){return r},setClearColor:function(_,y=1){r.set(_),l=y,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(r,l)},render:v,addToRenderList:m}}function tv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,a=!1;function r(S,C,R,L,P){let F=!1;const z=u(L,R,C);o!==z&&(o=z,c(o.object)),F=f(S,L,R,P),F&&g(S,L,R,P),P!==null&&e.update(P,s.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,x(S,C,R,L),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,C,R){const L=R.wireframe===!0;let P=n[S.id];P===void 0&&(P={},n[S.id]=P);let F=P[C.id];F===void 0&&(F={},P[C.id]=F);let z=F[L];return z===void 0&&(z=d(l()),F[L]=z),z}function d(S){const C=[],R=[],L=[];for(let P=0;P<t;P++)C[P]=0,R[P]=0,L[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,C,R,L){const P=o.attributes,F=C.attributes;let z=0;const k=R.getAttributes();for(const U in k)if(k[U].location>=0){const X=P[U];let oe=F[U];if(oe===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),X===void 0||X.attribute!==oe||oe&&X.data!==oe.data)return!0;z++}return o.attributesNum!==z||o.index!==L}function g(S,C,R,L){const P={},F=C.attributes;let z=0;const k=R.getAttributes();for(const U in k)if(k[U].location>=0){let X=F[U];X===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const oe={};oe.attribute=X,X&&X.data&&(oe.data=X.data),P[U]=oe,z++}o.attributes=P,o.attributesNum=z,o.index=L}function v(){const S=o.newAttributes;for(let C=0,R=S.length;C<R;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const R=o.newAttributes,L=o.enabledAttributes,P=o.attributeDivisors;R[S]=1,L[S]===0&&(s.enableVertexAttribArray(S),L[S]=1),P[S]!==C&&(s.vertexAttribDivisor(S,C),P[S]=C)}function _(){const S=o.newAttributes,C=o.enabledAttributes;for(let R=0,L=C.length;R<L;R++)C[R]!==S[R]&&(s.disableVertexAttribArray(R),C[R]=0)}function y(S,C,R,L,P,F,z){z===!0?s.vertexAttribIPointer(S,C,R,P,F):s.vertexAttribPointer(S,C,R,L,P,F)}function x(S,C,R,L){v();const P=L.attributes,F=R.getAttributes(),z=C.defaultAttributeValues;for(const k in F){const U=F[k];if(U.location>=0){let N=P[k];if(N===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(N=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(N=S.instanceColor)),N!==void 0){const X=N.normalized,oe=N.itemSize,te=e.get(N);if(te===void 0)continue;const we=te.buffer,j=te.type,ue=te.bytesPerElement,ge=j===s.INT||j===s.UNSIGNED_INT||N.gpuType===eh;if(N.isInterleavedBufferAttribute){const pe=N.data,ee=pe.stride,fe=N.offset;if(pe.isInstancedInterleavedBuffer){for(let me=0;me<U.locationSize;me++)p(U.location+me,pe.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<U.locationSize;me++)m(U.location+me);s.bindBuffer(s.ARRAY_BUFFER,we);for(let me=0;me<U.locationSize;me++)y(U.location+me,oe/U.locationSize,j,X,ee*ue,(fe+oe/U.locationSize*me)*ue,ge)}else{if(N.isInstancedBufferAttribute){for(let pe=0;pe<U.locationSize;pe++)p(U.location+pe,N.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let pe=0;pe<U.locationSize;pe++)m(U.location+pe);s.bindBuffer(s.ARRAY_BUFFER,we);for(let pe=0;pe<U.locationSize;pe++)y(U.location+pe,oe/U.locationSize,j,X,oe*ue,oe/U.locationSize*pe*ue,ge)}}else if(z!==void 0){const X=z[k];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(U.location,X);break;case 3:s.vertexAttrib3fv(U.location,X);break;case 4:s.vertexAttrib4fv(U.location,X);break;default:s.vertexAttrib1fv(U.location,X)}}}}_()}function T(){A();for(const S in n){const C=n[S];for(const R in C){const L=C[R];for(const P in L)h(L[P].object),delete L[P];delete C[R]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const R in C){const L=C[R];for(const P in L)h(L[P].object),delete L[P];delete C[R]}delete n[S.id]}function E(S){for(const C in n){const R=n[C];if(R[S.id]===void 0)continue;const L=R[S.id];for(const P in L)h(L[P].object),delete L[P];delete R[S.id]}}function A(){M(),a=!0,o!==i&&(o=i,c(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:A,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function nv(s,e,t){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function r(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function iv(s,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==bi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(E){const A=E===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Oi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yi&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function sv(s){const e=this;let t=null,n=0,i=!1,o=!1;const a=new _s,r=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||o&&!m)o?h(null):c();else{const _=o?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let T=0;T!==y;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;r.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)a.copy(u[y]).applyMatrix4(_,r),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ov(s){let e=new WeakMap;function t(a,r){return r===dc?a.mapping=No:r===fc&&(a.mapping=Uo),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===dc||r===fc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new g0(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Xr extends uf{constructor(e=-1,t=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,a=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Eo=4,lu=[.125,.215,.35,.446,.526,.582],Gs=20,El=new Xr,cu=new ne;let Tl=null,Cl=0,Pl=0,Rl=!1;const zs=(1+Math.sqrt(5))/2,_o=1/zs,hu=[new b(-zs,_o,0),new b(zs,_o,0),new b(-_o,0,zs),new b(_o,0,zs),new b(0,zs,-_o),new b(0,zs,_o),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tl,Cl,Pl),this._renderer.xr.enabled=Rl,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===No||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Ui,format:bi,colorSpace:Kn,depthBuffer:!1},i=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(o)),this._blurMaterial=rv(o,e,t)}return i}_compileMaterial(e){const t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,i){const r=new Hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cu),h.toneMapping=As,h.autoClear=!1;const f=new fn({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),g=new Ge(new un,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(cu),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(r.up.set(0,l[p],0),r.lookAt(c[p],0,0)):_===1?(r.up.set(0,0,l[p]),r.lookAt(0,c[p],0)):(r.up.set(0,l[p],0),r.lookAt(0,0,c[p]));const y=this._cubeSize;er(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===No||e.mapping===Uo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,El)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=hu[(i-o-1)%hu.length];this._blur(e,o-1,o,a,r)}t.autoClear=n}_blur(e,t,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",o),this._halfBlur(a,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ge(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Gs-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):Gs;m>Gs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gs}`);const p=[];let _=0;for(let E=0;E<Gs;++E){const A=E/v,M=Math.exp(-A*A/2);p.push(M),E===0?_+=M:E<m&&(_+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],T=3*x*(i>y-Eo?i-y+Eo:0),w=4*(this._cubeSize-x);er(t,T,w,3*x,2*x),l.setRenderTarget(t),l.render(u,El)}}function av(s){const e=[],t=[],n=[];let i=s;const o=s-Eo+1+lu.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);t.push(r);let l=1/r;a>s-Eo?l=lu[a-s+Eo-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,A=w>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];_.set(M,v*g*w),y.set(d,m*g*w);const S=[w,w,w,w,w,w];x.set(S,p*g*w)}const T=new Et;T.setAttribute("position",new _t(_,v)),T.setAttribute("uv",new _t(y,m)),T.setAttribute("faceIndex",new _t(x,p)),e.push(T),i>Eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(s,e,t){const n=new si(s,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function rv(s,e,t){const n=new Float32Array(Gs),i=new b(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hh(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function du(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function fu(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}function lv(s){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===dc||l===fc,h=l===No||l===Uo;if(c||h){let u=e.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return t===null&&(t=new Vc(s)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Vc(s)),u=c?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ca("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hv(s,e,t,n){const i={},o=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=o.get(d);f&&(e.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function r(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const T=_[y+0],w=_[y+1],E=_[y+2];d.push(T,w,w,E,E,T)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const T=y+0,w=y+1,E=y+2;d.push(T,w,w,E,E,T)}}else return;const m=new(sf(d)?cf:lf)(d,1);m.version=v;const p=o.get(u);p&&e.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function uv(s,e,t){let n;function i(d){n=d}let o,a;function r(d){o=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,o,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,o,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=r*(o/3);break;case s.LINES:t.lines+=r*(o/2);break;case s.LINE_STRIP:t.lines+=r*(o-1);break;case s.LINE_LOOP:t.lines+=r*o;break;case s.POINTS:t.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fv(s,e,t){const n=new WeakMap,i=new $t;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(r),r.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],_=r.morphAttributes.normal||[],y=r.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let T=r.attributes.position.count*x,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const E=new Float32Array(T*w*4*u),A=new af(E,T,w,u);A.type=yi,A.needsUpdate=!0;const M=x*4;for(let C=0;C<u;C++){const R=p[C],L=_[C],P=y[C],F=T*w*4*C;for(let z=0;z<R.count;z++){const k=z*M;g===!0&&(i.fromBufferAttribute(R,z),E[F+k+0]=i.x,E[F+k+1]=i.y,E[F+k+2]=i.z,E[F+k+3]=0),v===!0&&(i.fromBufferAttribute(L,z),E[F+k+4]=i.x,E[F+k+5]=i.y,E[F+k+6]=i.z,E[F+k+7]=0),m===!0&&(i.fromBufferAttribute(P,z),E[F+k+8]=i.x,E[F+k+9]=i.y,E[F+k+10]=i.z,E[F+k+11]=P.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Oe(T,w)},n.set(r,d),r.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function pv(s,e,t,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}class uh extends Cn{constructor(e,t,n,i,o,a,r,l,c,h=Co){if(h!==Co&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Co&&(n=qs),n===void 0&&h===js&&(n=Ys),super(null,i,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pf=new Cn,pu=new uh(1,1),mf=new af,gf=new t0,vf=new df,mu=[],gu=[],vu=new Float32Array(16),xu=new Float32Array(9),_u=new Float32Array(4);function Vo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let o=mu[i];if(o===void 0&&(o=new Float32Array(i),mu[i]=o),e!==0){n.toArray(o,0);for(let a=1,r=0;a!==e;++a)r+=t,s[a].toArray(o,r)}return o}function Dn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function In(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function qr(s,e){let t=gu[e];t===void 0&&(t=new Int32Array(e),gu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function mv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2fv(this.addr,e),In(t,e)}}function vv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dn(t,e))return;s.uniform3fv(this.addr,e),In(t,e)}}function xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4fv(this.addr,e),In(t,e)}}function _v(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Dn(t,n))return;_u.set(n),s.uniformMatrix2fv(this.addr,!1,_u),In(t,n)}}function Mv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Dn(t,n))return;xu.set(n),s.uniformMatrix3fv(this.addr,!1,xu),In(t,n)}}function yv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Dn(t,n))return;vu.set(n),s.uniformMatrix4fv(this.addr,!1,vu),In(t,n)}}function bv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2iv(this.addr,e),In(t,e)}}function wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;s.uniform3iv(this.addr,e),In(t,e)}}function Av(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4iv(this.addr,e),In(t,e)}}function Ev(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Tv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2uiv(this.addr,e),In(t,e)}}function Cv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;s.uniform3uiv(this.addr,e),In(t,e)}}function Pv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4uiv(this.addr,e),In(t,e)}}function Rv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(pu.compareFunction=nf,o=pu):o=pf,t.setTexture2D(e||o,i)}function Dv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gf,i)}function Iv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vf,i)}function Lv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mf,i)}function Nv(s){switch(s){case 5126:return mv;case 35664:return gv;case 35665:return vv;case 35666:return xv;case 35674:return _v;case 35675:return Mv;case 35676:return yv;case 5124:case 35670:return bv;case 35667:case 35671:return Sv;case 35668:case 35672:return wv;case 35669:case 35673:return Av;case 5125:return Ev;case 36294:return Tv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Uv(s,e){s.uniform1fv(this.addr,e)}function Fv(s,e){const t=Vo(e,this.size,2);s.uniform2fv(this.addr,t)}function Ov(s,e){const t=Vo(e,this.size,3);s.uniform3fv(this.addr,t)}function kv(s,e){const t=Vo(e,this.size,4);s.uniform4fv(this.addr,t)}function Bv(s,e){const t=Vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zv(s,e){const t=Vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gv(s,e){const t=Vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Hv(s,e){s.uniform1iv(this.addr,e)}function Vv(s,e){s.uniform2iv(this.addr,e)}function Wv(s,e){s.uniform3iv(this.addr,e)}function Xv(s,e){s.uniform4iv(this.addr,e)}function qv(s,e){s.uniform1uiv(this.addr,e)}function Yv(s,e){s.uniform2uiv(this.addr,e)}function jv(s,e){s.uniform3uiv(this.addr,e)}function Kv(s,e){s.uniform4uiv(this.addr,e)}function Zv(s,e,t){const n=this.cache,i=e.length,o=qr(t,i);Dn(n,o)||(s.uniform1iv(this.addr,o),In(n,o));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pf,o[a])}function $v(s,e,t){const n=this.cache,i=e.length,o=qr(t,i);Dn(n,o)||(s.uniform1iv(this.addr,o),In(n,o));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gf,o[a])}function Qv(s,e,t){const n=this.cache,i=e.length,o=qr(t,i);Dn(n,o)||(s.uniform1iv(this.addr,o),In(n,o));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vf,o[a])}function Jv(s,e,t){const n=this.cache,i=e.length,o=qr(t,i);Dn(n,o)||(s.uniform1iv(this.addr,o),In(n,o));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||mf,o[a])}function ex(s){switch(s){case 5126:return Uv;case 35664:return Fv;case 35665:return Ov;case 35666:return kv;case 35674:return Bv;case 35675:return zv;case 35676:return Gv;case 5124:case 35670:return Hv;case 35667:case 35671:return Vv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return jv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return Jv}}class tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nv(t.type)}}class nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ex(t.type)}}class ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(e,t[r.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function Mu(s,e){s.seq.push(e),s.map[e.id]=e}function sx(s,e,t){const n=s.name,i=n.length;for(Dl.lastIndex=0;;){const o=Dl.exec(n),a=Dl.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){Mu(t,c===void 0?new tx(r,s,e):new nx(r,s,e));break}else{let u=t.map[r];u===void 0&&(u=new ix(r),Mu(t,u)),t=u}}}class Rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),a=e.getUniformLocation(t,o.name);sx(o,a,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,a=t.length;o!==a;++o){const r=t[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function yu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ox=37297;let ax=0;function rx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return n.join(`
`)}const bu=new Tt;function lx(s){zt._getMatrix(bu,zt.workingColorSpace,s);const e=`mat3( ${bu.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(s)){case Wr:return[e,"LinearTransferOETF"];case sn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Su(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+rx(s.getShaderSource(e),a)}else return i}function cx(s,e){const t=lx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hx(s,e){let t;switch(e){case Bd:t="Linear";break;case zd:t="Reinhard";break;case Gd:t="Cineon";break;case Gr:t="ACESFilmic";break;case Hd:t="AgX";break;case Vd:t="Neutral";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tr=new b;function ux(){zt.getLuminanceCoefficients(tr);const s=tr.x.toFixed(4),e=tr.y.toFixed(4),t=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function fx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function px(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),t[a]={type:o.type,location:s.getAttribLocation(e,a),locationSize:r}}return t}function ha(s){return s!==""}function wu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(s){return s.replace(mx,vx)}const gx=new Map;function vx(s,e){let t=Dt[e];if(t===void 0){const n=gx.get(e);if(n!==void 0)t=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}const xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(s){return s.replace(xx,_x)}function _x(s,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Tu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Mx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===es&&(e="SHADOWMAP_TYPE_VSM"),e}function yx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case No:case Uo:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function Sx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kd:e="ENVMAP_BLENDING_MULTIPLY";break;case gp:e="ENVMAP_BLENDING_MIX";break;case vp:e="ENVMAP_BLENDING_ADD";break}return e}function wx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ax(s,e,t,n){const i=s.getContext(),o=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=Mx(t),c=yx(t),h=bx(t),u=Sx(t),d=wx(t),f=dx(t),g=fx(o),v=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(m=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?Dt.tonemapping_pars_fragment:"",t.toneMapping!==As?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,cx("linearToOutputTexel",t.outputColorSpace),ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),a=Wc(a),a=wu(a,t),a=Au(a,t),r=Wc(r),r=wu(r,t),r=Au(r,t),a=Eu(a),r=Eu(r),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+a,x=_+p+r,T=yu(i,i.VERTEX_SHADER,y),w=yu(i,i.FRAGMENT_SHADER,x);i.attachShader(v,T),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(C){if(s.debug.checkShaderErrors){const R=i.getProgramInfoLog(v).trim(),L=i.getShaderInfoLog(T).trim(),P=i.getShaderInfoLog(w).trim();let F=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,T,w);else{const k=Su(i,T,"vertex"),U=Su(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+k+`
`+U)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(L===""||P==="")&&(z=!1);z&&(C.diagnostics={runnable:F,programLog:R,vertexShader:{log:L,prefix:m},fragmentShader:{log:P,prefix:p}})}i.deleteShader(T),i.deleteShader(w),A=new Rr(i,v),M=px(i,v)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,ox)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ax++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let Ex=0;class Tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cx(e),t.set(e,n)),n}}class Cx{constructor(e){this.id=Ex++,this.code=e,this.usedTimes=0}}function Px(s,e,t,n,i,o,a){const r=new lh,l=new Tx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,C,R,L){const P=R.fog,F=L.geometry,z=M.isMeshStandardMaterial?R.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),U=k&&k.mapping===Hr?k.image.height:null,N=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=X!==void 0?X.length:0;let te=0;F.morphAttributes.position!==void 0&&(te=1),F.morphAttributes.normal!==void 0&&(te=2),F.morphAttributes.color!==void 0&&(te=3);let we,j,ue,ge;if(N){const gt=zi[N];we=gt.vertexShader,j=gt.fragmentShader}else we=M.vertexShader,j=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const pe=s.getRenderTarget(),ee=s.state.buffers.depth.getReversed(),fe=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,Ae=!!M.map,ve=!!M.matcap,Z=!!k,B=!!M.aoMap,et=!!M.lightMap,_e=!!M.bumpMap,We=!!M.normalMap,Le=!!M.displacementMap,rt=!!M.emissiveMap,Xe=!!M.metalnessMap,O=!!M.roughnessMap,D=M.anisotropy>0,ie=M.clearcoat>0,xe=M.dispersion>0,re=M.iridescence>0,he=M.sheen>0,De=M.transmission>0,be=D&&!!M.anisotropyMap,Ne=ie&&!!M.clearcoatMap,pt=ie&&!!M.clearcoatNormalMap,Ee=ie&&!!M.clearcoatRoughnessMap,Ue=re&&!!M.iridescenceMap,Qe=re&&!!M.iridescenceThicknessMap,ct=he&&!!M.sheenColorMap,ze=he&&!!M.sheenRoughnessMap,vt=!!M.specularMap,nt=!!M.specularColorMap,ft=!!M.specularIntensityMap,V=De&&!!M.transmissionMap,Pe=De&&!!M.thicknessMap,de=!!M.gradientMap,ye=!!M.alphaMap,Fe=M.alphaTest>0,ke=!!M.alphaHash,Ze=!!M.extensions;let Ot=As;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const kt={shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:we,fragmentShader:j,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:me,batchingColor:me&&L._colorsTexture!==null,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Kn,alphaToCoverage:!!M.alphaToCoverage,map:Ae,matcap:ve,envMap:Z,envMapMode:Z&&k.mapping,envMapCubeUVHeight:U,aoMap:B,lightMap:et,bumpMap:_e,normalMap:We,displacementMap:d&&Le,emissiveMap:rt,normalMapObjectSpace:We&&M.normalMapType===Sp,normalMapTangentSpace:We&&M.normalMapType===ah,metalnessMap:Xe,roughnessMap:O,anisotropy:D,anisotropyMap:be,clearcoat:ie,clearcoatMap:Ne,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ee,dispersion:xe,iridescence:re,iridescenceMap:Ue,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:ct,sheenRoughnessMap:ze,specularMap:vt,specularColorMap:nt,specularIntensityMap:ft,transmission:De,transmissionMap:V,thicknessMap:Pe,gradientMap:de,opaque:M.transparent===!1&&M.blending===Ws&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:Fe,alphaHash:ke,combine:M.combine,mapUv:Ae&&v(M.map.channel),aoMapUv:B&&v(M.aoMap.channel),lightMapUv:et&&v(M.lightMap.channel),bumpMapUv:_e&&v(M.bumpMap.channel),normalMapUv:We&&v(M.normalMap.channel),displacementMapUv:Le&&v(M.displacementMap.channel),emissiveMapUv:rt&&v(M.emissiveMap.channel),metalnessMapUv:Xe&&v(M.metalnessMap.channel),roughnessMapUv:O&&v(M.roughnessMap.channel),anisotropyMapUv:be&&v(M.anisotropyMap.channel),clearcoatMapUv:Ne&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:pt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(M.sheenRoughnessMap.channel),specularMapUv:vt&&v(M.specularMap.channel),specularColorMapUv:nt&&v(M.specularColorMap.channel),specularIntensityMapUv:ft&&v(M.specularIntensityMap.channel),transmissionMapUv:V&&v(M.transmissionMap.channel),thicknessMapUv:Pe&&v(M.thicknessMap.channel),alphaMapUv:ye&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(We||D),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ae||ye),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ee,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&zt.getTransfer(M.map.colorSpace)===sn,decodeVideoTextureEmissive:rt&&M.emissiveMap.isVideoTexture===!0&&zt.getTransfer(M.emissiveMap.colorSpace)===sn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===It,flipSided:M.side===On,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&M.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){r.disableAll(),S.supportsVertexTextures&&r.enable(0),S.instancing&&r.enable(1),S.instancingColor&&r.enable(2),S.instancingMorph&&r.enable(3),S.matcap&&r.enable(4),S.envMap&&r.enable(5),S.normalMapObjectSpace&&r.enable(6),S.normalMapTangentSpace&&r.enable(7),S.clearcoat&&r.enable(8),S.iridescence&&r.enable(9),S.alphaTest&&r.enable(10),S.vertexColors&&r.enable(11),S.vertexAlphas&&r.enable(12),S.vertexUv1s&&r.enable(13),S.vertexUv2s&&r.enable(14),S.vertexUv3s&&r.enable(15),S.vertexTangents&&r.enable(16),S.anisotropy&&r.enable(17),S.alphaHash&&r.enable(18),S.batching&&r.enable(19),S.dispersion&&r.enable(20),S.batchingColor&&r.enable(21),M.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reverseDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),M.push(r.mask)}function x(M){const S=g[M.type];let C;if(S){const R=zi[S];C=Ni.clone(R.uniforms)}else C=M.uniforms;return C}function T(M,S){let C;for(let R=0,L=h.length;R<L;R++){const P=h[R];if(P.cacheKey===S){C=P,++C.usedTimes;break}}return C===void 0&&(C=new Ax(s,S,M,o),h.push(C)),C}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:A}}function Rx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function n(a){s.delete(a)}function i(a,r,l){s.get(a)[r]=l}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:o}}function Dx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pu(){const s=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function r(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Dx),n.length>1&&n.sort(d||Cu),i.length>1&&i.sort(d||Cu)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:r,unshift:l,finish:h,sort:c}}function Ix(){let s=new WeakMap;function e(n,i){const o=s.get(n);let a;return o===void 0?(a=new Pu,s.set(n,[a])):i>=o.length?(a=new Pu,o.push(a)):a=o[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Lx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ne};break;case"SpotLight":t={position:new b,direction:new b,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new b,halfWidth:new b,halfHeight:new b};break}return s[e.id]=t,t}}}function Nx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ux=0;function Fx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ox(s){const e=new Lx,t=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const i=new b,o=new ot,a=new ot;function r(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,T=0,w=0,E=0;c.sort(Fx);for(let M=0,S=c.length;M<S;M++){const C=c[M],R=C.color,L=C.intensity,P=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=R.r*L,u+=R.g*L,d+=R.b*L;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],L);E++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,U=t.get(C);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=z,f++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(R).multiplyScalar(L),z.distance=P,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[v]=z;const k=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,k.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=k.matrix,C.castShadow){const U=t.get(C);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=F,x++}v++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(R).multiplyScalar(L),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const k=C.shadow,U=t.get(C);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,U.shadowCameraNear=k.camera.near,U.shadowCameraFar=k.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(L),z.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==_||A.numPointShadows!==y||A.numSpotShadows!==x||A.numSpotMaps!==T||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=_,A.numPointShadows=y,A.numSpotShadows=x,A.numSpotMaps=T,A.numLightProbes=E,n.version=Ux++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:n}}function Ru(s){const e=new Ox(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function kx(s){let e=new WeakMap;function t(i,o=0){const a=e.get(i);let r;return a===void 0?(r=new Ru(s),e.set(i,[r])):o>=a.length?(r=new Ru(s),a.push(r)):r=a[o],r}function n(){e=new WeakMap}return{get:t,dispose:n}}class Xc extends Si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bx extends Si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
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
}`;function Hx(s,e,t){let n=new ch;const i=new Oe,o=new Oe,a=new $t,r=new Xc({depthPacking:Gc}),l=new Bx,c={},h=t.maxTextureSize,u={[wi]:On,[On]:wi,[It]:It},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:zx,fragmentShader:Gx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let p=this.type;this.render=function(w,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),R=s.state;R.setBlending(ei),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=p!==es&&this.type===es,P=p===es&&this.type!==es;for(let F=0,z=w.length;F<z;F++){const k=w[F],U=k.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const N=U.getFrameExtents();if(i.multiply(N),o.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/N.x),i.x=o.x*N.x,U.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/N.y),i.y=o.y*N.y,U.mapSize.y=o.y)),U.map===null||L===!0||P===!0){const oe=this.type!==es?{minFilter:Rn,magFilter:Rn}:{};U.map!==null&&U.map.dispose(),U.map=new si(i.x,i.y,oe),U.map.texture.name=k.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const X=U.getViewportCount();for(let oe=0;oe<X;oe++){const te=U.getViewport(oe);a.set(o.x*te.x,o.y*te.y,o.x*te.z,o.y*te.w),R.viewport(a),U.updateMatrices(k,oe),n=U.getFrustum(),x(E,A,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===es&&_(U,A),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,C)};function _(w,E){const A=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new si(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,A,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,A,f,v,null)}function y(w,E,A,M){let S=null;const C=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=A.isPointLight===!0?l:r,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const R=S.uuid,L=E.uuid;let P=c[R];P===void 0&&(P={},c[R]=P);let F=P[L];F===void 0&&(F=S.clone(),P[L]=F,E.addEventListener("dispose",T)),S=F}if(S.visible=E.visible,S.wireframe=E.wireframe,M===es?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=s.properties.get(S);R.light=A}return S}function x(w,E,A,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===es)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const L=e.update(w),P=w.material;if(Array.isArray(P)){const F=L.groups;for(let z=0,k=F.length;z<k;z++){const U=F[z],N=P[U.materialIndex];if(N&&N.visible){const X=y(w,N,M,S);w.onBeforeShadow(s,w,E,A,L,X,U),s.renderBufferDirect(A,null,L,X,w,U),w.onAfterShadow(s,w,E,A,L,X,U)}}}else if(P.visible){const F=y(w,P,M,S);w.onBeforeShadow(s,w,E,A,L,F,null),s.renderBufferDirect(A,null,L,F,w,null),w.onAfterShadow(s,w,E,A,L,F,null)}}const R=w.children;for(let L=0,P=R.length;L<P;L++)x(R[L],E,A,M,S)}function T(w){w.target.removeEventListener("dispose",T);for(const A in c){const M=c[A],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Vx={[oc]:ac,[rc]:hc,[lc]:uc,[Lo]:cc,[ac]:oc,[hc]:rc,[uc]:lc,[cc]:Lo};function Wx(s,e){function t(){let V=!1;const Pe=new $t;let de=null;const ye=new $t(0,0,0,0);return{setMask:function(Fe){de!==Fe&&!V&&(s.colorMask(Fe,Fe,Fe,Fe),de=Fe)},setLocked:function(Fe){V=Fe},setClear:function(Fe,ke,Ze,Ot,kt){kt===!0&&(Fe*=Ot,ke*=Ot,Ze*=Ot),Pe.set(Fe,ke,Ze,Ot),ye.equals(Pe)===!1&&(s.clearColor(Fe,ke,Ze,Ot),ye.copy(Pe))},reset:function(){V=!1,de=null,ye.set(-1,0,0,0)}}}function n(){let V=!1,Pe=!1,de=null,ye=null,Fe=null;return{setReversed:function(ke){if(Pe!==ke){const Ze=e.get("EXT_clip_control");Pe?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const Ot=Fe;Fe=null,this.setClear(Ot)}Pe=ke},getReversed:function(){return Pe},setTest:function(ke){ke?pe(s.DEPTH_TEST):ee(s.DEPTH_TEST)},setMask:function(ke){de!==ke&&!V&&(s.depthMask(ke),de=ke)},setFunc:function(ke){if(Pe&&(ke=Vx[ke]),ye!==ke){switch(ke){case oc:s.depthFunc(s.NEVER);break;case ac:s.depthFunc(s.ALWAYS);break;case rc:s.depthFunc(s.LESS);break;case Lo:s.depthFunc(s.LEQUAL);break;case lc:s.depthFunc(s.EQUAL);break;case cc:s.depthFunc(s.GEQUAL);break;case hc:s.depthFunc(s.GREATER);break;case uc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=ke}},setLocked:function(ke){V=ke},setClear:function(ke){Fe!==ke&&(Pe&&(ke=1-ke),s.clearDepth(ke),Fe=ke)},reset:function(){V=!1,de=null,ye=null,Fe=null,Pe=!1}}}function i(){let V=!1,Pe=null,de=null,ye=null,Fe=null,ke=null,Ze=null,Ot=null,kt=null;return{setTest:function(gt){V||(gt?pe(s.STENCIL_TEST):ee(s.STENCIL_TEST))},setMask:function(gt){Pe!==gt&&!V&&(s.stencilMask(gt),Pe=gt)},setFunc:function(gt,dn,ln){(de!==gt||ye!==dn||Fe!==ln)&&(s.stencilFunc(gt,dn,ln),de=gt,ye=dn,Fe=ln)},setOp:function(gt,dn,ln){(ke!==gt||Ze!==dn||Ot!==ln)&&(s.stencilOp(gt,dn,ln),ke=gt,Ze=dn,Ot=ln)},setLocked:function(gt){V=gt},setClear:function(gt){kt!==gt&&(s.clearStencil(gt),kt=gt)},reset:function(){V=!1,Pe=null,de=null,ye=null,Fe=null,ke=null,Ze=null,Ot=null,kt=null}}}const o=new t,a=new n,r=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,T=null,w=null,E=new ne(0,0,0),A=0,M=!1,S=null,C=null,R=null,L=null,P=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=k>=1):U.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=k>=2);let N=null,X={};const oe=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),we=new $t().fromArray(oe),j=new $t().fromArray(te);function ue(V,Pe,de,ye){const Fe=new Uint8Array(4),ke=s.createTexture();s.bindTexture(V,ke),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<de;Ze++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Pe+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return ke}const ge={};ge[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),pe(s.DEPTH_TEST),a.setFunc(Lo),_e(!1),We(Ih),pe(s.CULL_FACE),B(ei);function pe(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function ee(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function fe(V,Pe){return u[V]!==Pe?(s.bindFramebuffer(V,Pe),u[V]=Pe,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Pe),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function me(V,Pe){let de=f,ye=!1;if(V){de=d.get(Pe),de===void 0&&(de=[],d.set(Pe,de));const Fe=V.textures;if(de.length!==Fe.length||de[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,Ze=Fe.length;ke<Ze;ke++)de[ke]=s.COLOR_ATTACHMENT0+ke;de.length=Fe.length,ye=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,ye=!0);ye&&s.drawBuffers(de)}function Ae(V){return g!==V?(s.useProgram(V),g=V,!0):!1}const ve={[ns]:s.FUNC_ADD,[np]:s.FUNC_SUBTRACT,[ip]:s.FUNC_REVERSE_SUBTRACT};ve[sp]=s.MIN,ve[op]=s.MAX;const Z={[nc]:s.ZERO,[ap]:s.ONE,[rp]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[up]:s.SRC_ALPHA_SATURATE,[Od]:s.DST_COLOR,[Fd]:s.DST_ALPHA,[lp]:s.ONE_MINUS_SRC_COLOR,[sc]:s.ONE_MINUS_SRC_ALPHA,[hp]:s.ONE_MINUS_DST_COLOR,[cp]:s.ONE_MINUS_DST_ALPHA,[dp]:s.CONSTANT_COLOR,[fp]:s.ONE_MINUS_CONSTANT_COLOR,[pp]:s.CONSTANT_ALPHA,[mp]:s.ONE_MINUS_CONSTANT_ALPHA};function B(V,Pe,de,ye,Fe,ke,Ze,Ot,kt,gt){if(V===ei){v===!0&&(ee(s.BLEND),v=!1);return}if(v===!1&&(pe(s.BLEND),v=!0),V!==Ud){if(V!==m||gt!==M){if((p!==ns||x!==ns)&&(s.blendEquation(s.FUNC_ADD),p=ns,x=ns),gt)switch(V){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tn:s.blendFunc(s.ONE,s.ONE);break;case Lh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,y=null,T=null,w=null,E.set(0,0,0),A=0,m=V,M=gt}return}Fe=Fe||Pe,ke=ke||de,Ze=Ze||ye,(Pe!==p||Fe!==x)&&(s.blendEquationSeparate(ve[Pe],ve[Fe]),p=Pe,x=Fe),(de!==_||ye!==y||ke!==T||Ze!==w)&&(s.blendFuncSeparate(Z[de],Z[ye],Z[ke],Z[Ze]),_=de,y=ye,T=ke,w=Ze),(Ot.equals(E)===!1||kt!==A)&&(s.blendColor(Ot.r,Ot.g,Ot.b,kt),E.copy(Ot),A=kt),m=V,M=!1}function et(V,Pe){V.side===It?ee(s.CULL_FACE):pe(s.CULL_FACE);let de=V.side===On;Pe&&(de=!de),_e(de),V.blending===Ws&&V.transparent===!1?B(ei):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),o.setMask(V.colorWrite);const ye=V.stencilWrite;r.setTest(ye),ye&&(r.setMask(V.stencilWriteMask),r.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),r.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),rt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(V){S!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),S=V)}function We(V){V!==ep?(pe(s.CULL_FACE),V!==C&&(V===Ih?s.cullFace(s.BACK):V===tp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ee(s.CULL_FACE),C=V}function Le(V){V!==R&&(z&&s.lineWidth(V),R=V)}function rt(V,Pe,de){V?(pe(s.POLYGON_OFFSET_FILL),(L!==Pe||P!==de)&&(s.polygonOffset(Pe,de),L=Pe,P=de)):ee(s.POLYGON_OFFSET_FILL)}function Xe(V){V?pe(s.SCISSOR_TEST):ee(s.SCISSOR_TEST)}function O(V){V===void 0&&(V=s.TEXTURE0+F-1),N!==V&&(s.activeTexture(V),N=V)}function D(V,Pe,de){de===void 0&&(N===null?de=s.TEXTURE0+F-1:de=N);let ye=X[de];ye===void 0&&(ye={type:void 0,texture:void 0},X[de]=ye),(ye.type!==V||ye.texture!==Pe)&&(N!==de&&(s.activeTexture(de),N=de),s.bindTexture(V,Pe||ge[V]),ye.type=V,ye.texture=Pe)}function ie(){const V=X[N];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function xe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(V){we.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),we.copy(V))}function ze(V){j.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),j.copy(V))}function vt(V,Pe){let de=c.get(Pe);de===void 0&&(de=new WeakMap,c.set(Pe,de));let ye=de.get(V);ye===void 0&&(ye=s.getUniformBlockIndex(Pe,V.name),de.set(V,ye))}function nt(V,Pe){const ye=c.get(Pe).get(V);l.get(Pe)!==ye&&(s.uniformBlockBinding(Pe,ye,V.__bindingPointIndex),l.set(Pe,ye))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},N=null,X={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,T=null,w=null,E=new ne(0,0,0),A=0,M=!1,S=null,C=null,R=null,L=null,P=null,we.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:pe,disable:ee,bindFramebuffer:fe,drawBuffers:me,useProgram:Ae,setBlending:B,setMaterial:et,setFlipSided:_e,setCullFace:We,setLineWidth:Le,setPolygonOffset:rt,setScissorTest:Xe,activeTexture:O,bindTexture:D,unbindTexture:ie,compressedTexImage2D:xe,compressedTexImage3D:re,texImage2D:Ue,texImage3D:Qe,updateUBOMapping:vt,uniformBlockBinding:nt,texStorage2D:pt,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:De,compressedTexSubImage2D:be,compressedTexSubImage3D:Ne,scissor:ct,viewport:ze,reset:ft}}function Du(s,e,t,n){const i=Xx(n);switch(t){case Kd:return s*e;case $d:return s*e;case Qd:return s*e*2;case Vr:return s*e/i.components*i.byteLength;case ih:return s*e/i.components*i.byteLength;case Jd:return s*e*2/i.components*i.byteLength;case sh:return s*e*2/i.components*i.byteLength;case Zd:return s*e*3/i.components*i.byteLength;case bi:return s*e*4/i.components*i.byteLength;case oh:return s*e*4/i.components*i.byteLength;case Ar:case Er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tr:case Cr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mc:case vc:return Math.max(s,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(s,8)*Math.max(e,8)/2;case xc:case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Pr:case Uc:case Fc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ef:case Oc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kc:case Bc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xx(s){switch(s){case Oi:case qd:return{byteLength:1,components:1};case Ma:case Yd:case Ui:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case qs:case eh:case yi:return{byteLength:4,components:1};case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function qx(s,e,t,n,i,o,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,D){return f?new OffscreenCanvas(O,D):Sa("canvas")}function v(O,D,ie){let xe=1;const re=Xe(O);if((re.width>ie||re.height>ie)&&(xe=ie/Math.max(re.width,re.height)),xe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(xe*re.width),De=Math.floor(xe*re.height);u===void 0&&(u=g(he,De));const be=D?g(he,De):u;return be.width=he,be.height=De,be.getContext("2d").drawImage(O,0,0,he,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+he+"x"+De+")."),be}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),O;return O}function m(O){return O.generateMipmaps}function p(O){s.generateMipmap(O)}function _(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(O,D,ie,xe,re=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=D;if(D===s.RED&&(ie===s.FLOAT&&(he=s.R32F),ie===s.HALF_FLOAT&&(he=s.R16F),ie===s.UNSIGNED_BYTE&&(he=s.R8)),D===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.R8UI),ie===s.UNSIGNED_SHORT&&(he=s.R16UI),ie===s.UNSIGNED_INT&&(he=s.R32UI),ie===s.BYTE&&(he=s.R8I),ie===s.SHORT&&(he=s.R16I),ie===s.INT&&(he=s.R32I)),D===s.RG&&(ie===s.FLOAT&&(he=s.RG32F),ie===s.HALF_FLOAT&&(he=s.RG16F),ie===s.UNSIGNED_BYTE&&(he=s.RG8)),D===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RG8UI),ie===s.UNSIGNED_SHORT&&(he=s.RG16UI),ie===s.UNSIGNED_INT&&(he=s.RG32UI),ie===s.BYTE&&(he=s.RG8I),ie===s.SHORT&&(he=s.RG16I),ie===s.INT&&(he=s.RG32I)),D===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ie===s.UNSIGNED_INT&&(he=s.RGB32UI),ie===s.BYTE&&(he=s.RGB8I),ie===s.SHORT&&(he=s.RGB16I),ie===s.INT&&(he=s.RGB32I)),D===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ie===s.UNSIGNED_INT&&(he=s.RGBA32UI),ie===s.BYTE&&(he=s.RGBA8I),ie===s.SHORT&&(he=s.RGBA16I),ie===s.INT&&(he=s.RGBA32I)),D===s.RGB&&ie===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),D===s.RGBA){const De=re?Wr:zt.getTransfer(xe);ie===s.FLOAT&&(he=s.RGBA32F),ie===s.HALF_FLOAT&&(he=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(he=De===sn?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function x(O,D){let ie;return O?D===null||D===qs||D===Ys?ie=s.DEPTH24_STENCIL8:D===yi?ie=s.DEPTH32F_STENCIL8:D===Ma&&(ie=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===qs||D===Ys?ie=s.DEPTH_COMPONENT24:D===yi?ie=s.DEPTH_COMPONENT32F:D===Ma&&(ie=s.DEPTH_COMPONENT16),ie}function T(O,D){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==Rn&&O.minFilter!==fi?Math.log2(Math.max(D.width,D.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?D.mipmaps.length:1}function w(O){const D=O.target;D.removeEventListener("dispose",w),A(D),D.isVideoTexture&&h.delete(D)}function E(O){const D=O.target;D.removeEventListener("dispose",E),S(D)}function A(O){const D=n.get(O);if(D.__webglInit===void 0)return;const ie=O.source,xe=d.get(ie);if(xe){const re=xe[D.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(O),Object.keys(xe).length===0&&d.delete(ie)}n.remove(O)}function M(O){const D=n.get(O);s.deleteTexture(D.__webglTexture);const ie=O.source,xe=d.get(ie);delete xe[D.__cacheKey],a.memory.textures--}function S(O){const D=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(D.__webglFramebuffer[xe]))for(let re=0;re<D.__webglFramebuffer[xe].length;re++)s.deleteFramebuffer(D.__webglFramebuffer[xe][re]);else s.deleteFramebuffer(D.__webglFramebuffer[xe]);D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer[xe])}else{if(Array.isArray(D.__webglFramebuffer))for(let xe=0;xe<D.__webglFramebuffer.length;xe++)s.deleteFramebuffer(D.__webglFramebuffer[xe]);else s.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&s.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let xe=0;xe<D.__webglColorRenderbuffer.length;xe++)D.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(D.__webglColorRenderbuffer[xe]);D.__webglDepthRenderbuffer&&s.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const ie=O.textures;for(let xe=0,re=ie.length;xe<re;xe++){const he=n.get(ie[xe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(ie[xe])}n.remove(O)}let C=0;function R(){C=0}function L(){const O=C;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),C+=1,O}function P(O){const D=[];return D.push(O.wrapS),D.push(O.wrapT),D.push(O.wrapR||0),D.push(O.magFilter),D.push(O.minFilter),D.push(O.anisotropy),D.push(O.internalFormat),D.push(O.format),D.push(O.type),D.push(O.generateMipmaps),D.push(O.premultiplyAlpha),D.push(O.flipY),D.push(O.unpackAlignment),D.push(O.colorSpace),D.join()}function F(O,D){const ie=n.get(O);if(O.isVideoTexture&&Le(O),O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){const xe=O.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(ie,O,D);return}}t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+D)}function z(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){j(ie,O,D);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+D)}function k(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){j(ie,O,D);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+D)}function U(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){ue(ie,O,D);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+D)}const N={[Wn]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},X={[Rn]:s.NEAREST,[Xd]:s.NEAREST_MIPMAP_NEAREST,[la]:s.NEAREST_MIPMAP_LINEAR,[fi]:s.LINEAR,[wr]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},oe={[wp]:s.NEVER,[Rp]:s.ALWAYS,[Ap]:s.LESS,[nf]:s.LEQUAL,[Ep]:s.EQUAL,[Pp]:s.GEQUAL,[Tp]:s.GREATER,[Cp]:s.NOTEQUAL};function te(O,D){if(D.type===yi&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===fi||D.magFilter===wr||D.magFilter===la||D.magFilter===is||D.minFilter===fi||D.minFilter===wr||D.minFilter===la||D.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,N[D.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,N[D.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,N[D.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,X[D.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,X[D.minFilter]),D.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,oe[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Rn||D.minFilter!==la&&D.minFilter!==is||D.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,i.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function we(O,D){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,D.addEventListener("dispose",w));const xe=D.source;let re=d.get(xe);re===void 0&&(re={},d.set(xe,re));const he=P(D);if(he!==O.__cacheKey){re[he]===void 0&&(re[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),re[he].usedTimes++;const De=re[O.__cacheKey];De!==void 0&&(re[O.__cacheKey].usedTimes--,De.usedTimes===0&&M(D)),O.__cacheKey=he,O.__webglTexture=re[he].texture}return ie}function j(O,D,ie){let xe=s.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),D.isData3DTexture&&(xe=s.TEXTURE_3D);const re=we(O,D),he=D.source;t.bindTexture(xe,O.__webglTexture,s.TEXTURE0+ie);const De=n.get(he);if(he.version!==De.__version||re===!0){t.activeTexture(s.TEXTURE0+ie);const be=zt.getPrimaries(zt.workingColorSpace),Ne=D.colorSpace===Gi?null:zt.getPrimaries(D.colorSpace),pt=D.colorSpace===Gi||be===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ee=v(D.image,!1,i.maxTextureSize);Ee=rt(D,Ee);const Ue=o.convert(D.format,D.colorSpace),Qe=o.convert(D.type);let ct=y(D.internalFormat,Ue,Qe,D.colorSpace,D.isVideoTexture);te(xe,D);let ze;const vt=D.mipmaps,nt=D.isVideoTexture!==!0,ft=De.__version===void 0||re===!0,V=he.dataReady,Pe=T(D,Ee);if(D.isDepthTexture)ct=x(D.format===js,D.type),ft&&(nt?t.texStorage2D(s.TEXTURE_2D,1,ct,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,ct,Ee.width,Ee.height,0,Ue,Qe,null));else if(D.isDataTexture)if(vt.length>0){nt&&ft&&t.texStorage2D(s.TEXTURE_2D,Pe,ct,vt[0].width,vt[0].height);for(let de=0,ye=vt.length;de<ye;de++)ze=vt[de],nt?V&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ze.width,ze.height,Ue,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,de,ct,ze.width,ze.height,0,Ue,Qe,ze.data);D.generateMipmaps=!1}else nt?(ft&&t.texStorage2D(s.TEXTURE_2D,Pe,ct,Ee.width,Ee.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ue,Qe,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,ct,Ee.width,Ee.height,0,Ue,Qe,Ee.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){nt&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ct,vt[0].width,vt[0].height,Ee.depth);for(let de=0,ye=vt.length;de<ye;de++)if(ze=vt[de],D.format!==bi)if(Ue!==null)if(nt){if(V)if(D.layerUpdates.size>0){const Fe=Du(ze.width,ze.height,D.format,D.type);for(const ke of D.layerUpdates){const Ze=ze.data.subarray(ke*Fe/ze.data.BYTES_PER_ELEMENT,(ke+1)*Fe/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,ke,ze.width,ze.height,1,Ue,Ze)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,ze.width,ze.height,Ee.depth,Ue,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,ct,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,ze.width,ze.height,Ee.depth,Ue,Qe,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,ct,ze.width,ze.height,Ee.depth,0,Ue,Qe,ze.data)}else{nt&&ft&&t.texStorage2D(s.TEXTURE_2D,Pe,ct,vt[0].width,vt[0].height);for(let de=0,ye=vt.length;de<ye;de++)ze=vt[de],D.format!==bi?Ue!==null?nt?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,ze.width,ze.height,Ue,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,de,ct,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ze.width,ze.height,Ue,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,de,ct,ze.width,ze.height,0,Ue,Qe,ze.data)}else if(D.isDataArrayTexture)if(nt){if(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ct,Ee.width,Ee.height,Ee.depth),V)if(D.layerUpdates.size>0){const de=Du(Ee.width,Ee.height,D.format,D.type);for(const ye of D.layerUpdates){const Fe=Ee.data.subarray(ye*de/Ee.data.BYTES_PER_ELEMENT,(ye+1)*de/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Ue,Qe,Fe)}D.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,Qe,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,Ee.width,Ee.height,Ee.depth,0,Ue,Qe,Ee.data);else if(D.isData3DTexture)nt?(ft&&t.texStorage3D(s.TEXTURE_3D,Pe,ct,Ee.width,Ee.height,Ee.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,Qe,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,ct,Ee.width,Ee.height,Ee.depth,0,Ue,Qe,Ee.data);else if(D.isFramebufferTexture){if(ft)if(nt)t.texStorage2D(s.TEXTURE_2D,Pe,ct,Ee.width,Ee.height);else{let de=Ee.width,ye=Ee.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,ct,de,ye,0,Ue,Qe,null),de>>=1,ye>>=1}}else if(vt.length>0){if(nt&&ft){const de=Xe(vt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,ct,de.width,de.height)}for(let de=0,ye=vt.length;de<ye;de++)ze=vt[de],nt?V&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ue,Qe,ze):t.texImage2D(s.TEXTURE_2D,de,ct,Ue,Qe,ze);D.generateMipmaps=!1}else if(nt){if(ft){const de=Xe(Ee);t.texStorage2D(s.TEXTURE_2D,Pe,ct,de.width,de.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,Qe,Ee)}else t.texImage2D(s.TEXTURE_2D,0,ct,Ue,Qe,Ee);m(D)&&p(xe),De.__version=he.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function ue(O,D,ie){if(D.image.length!==6)return;const xe=we(O,D),re=D.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+ie);const he=n.get(re);if(re.version!==he.__version||xe===!0){t.activeTexture(s.TEXTURE0+ie);const De=zt.getPrimaries(zt.workingColorSpace),be=D.colorSpace===Gi?null:zt.getPrimaries(D.colorSpace),Ne=D.colorSpace===Gi||De===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const pt=D.isCompressedTexture||D.image[0].isCompressedTexture,Ee=D.image[0]&&D.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!pt&&!Ee?Ue[ye]=v(D.image[ye],!0,i.maxCubemapSize):Ue[ye]=Ee?D.image[ye].image:D.image[ye],Ue[ye]=rt(D,Ue[ye]);const Qe=Ue[0],ct=o.convert(D.format,D.colorSpace),ze=o.convert(D.type),vt=y(D.internalFormat,ct,ze,D.colorSpace),nt=D.isVideoTexture!==!0,ft=he.__version===void 0||xe===!0,V=re.dataReady;let Pe=T(D,Qe);te(s.TEXTURE_CUBE_MAP,D);let de;if(pt){nt&&ft&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,vt,Qe.width,Qe.height);for(let ye=0;ye<6;ye++){de=Ue[ye].mipmaps;for(let Fe=0;Fe<de.length;Fe++){const ke=de[Fe];D.format!==bi?ct!==null?nt?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,0,0,ke.width,ke.height,ct,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,vt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,0,0,ke.width,ke.height,ct,ze,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,vt,ke.width,ke.height,0,ct,ze,ke.data)}}}else{if(de=D.mipmaps,nt&&ft){de.length>0&&Pe++;const ye=Xe(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,vt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,ct,ze,Ue[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,vt,Ue[ye].width,Ue[ye].height,0,ct,ze,Ue[ye].data);for(let Fe=0;Fe<de.length;Fe++){const Ze=de[Fe].image[ye].image;nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,0,0,Ze.width,Ze.height,ct,ze,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,vt,Ze.width,Ze.height,0,ct,ze,Ze.data)}}else{nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ct,ze,Ue[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,vt,ct,ze,Ue[ye]);for(let Fe=0;Fe<de.length;Fe++){const ke=de[Fe];nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,0,0,ct,ze,ke.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,vt,ct,ze,ke.image[ye])}}}m(D)&&p(s.TEXTURE_CUBE_MAP),he.__version=re.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function ge(O,D,ie,xe,re,he){const De=o.convert(ie.format,ie.colorSpace),be=o.convert(ie.type),Ne=y(ie.internalFormat,De,be,ie.colorSpace),pt=n.get(D),Ee=n.get(ie);if(Ee.__renderTarget=D,!pt.__hasExternalTextures){const Ue=Math.max(1,D.width>>he),Qe=Math.max(1,D.height>>he);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,he,Ne,Ue,Qe,D.depth,0,De,be,null):t.texImage2D(re,he,Ne,Ue,Qe,0,De,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),We(D)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,re,Ee.__webglTexture,0,_e(D)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,re,Ee.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(O,D,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,O),D.depthBuffer){const xe=D.depthTexture,re=xe&&xe.isDepthTexture?xe.type:null,he=x(D.stencilBuffer,re),De=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=_e(D);We(D)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,he,D.width,D.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,he,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,he,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,O)}else{const xe=D.textures;for(let re=0;re<xe.length;re++){const he=xe[re],De=o.convert(he.format,he.colorSpace),be=o.convert(he.type),Ne=y(he.internalFormat,De,be,he.colorSpace),pt=_e(D);ie&&We(D)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Ne,D.width,D.height):We(D)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Ne,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,D.width,D.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(O,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=n.get(D.depthTexture);xe.__renderTarget=D,(!xe.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),F(D.depthTexture,0);const re=xe.__webglTexture,he=_e(D);if(D.depthTexture.format===Co)We(D)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(D.depthTexture.format===js)We(D)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function fe(O){const D=n.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==O.depthTexture){const xe=O.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),xe){const re=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,xe.removeEventListener("dispose",re)};xe.addEventListener("dispose",re),D.__depthDisposeCallback=re}D.__boundDepthTexture=xe}if(O.depthTexture&&!D.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");ee(D.__webglFramebuffer,O)}else if(ie){D.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer[xe]),D.__webglDepthbuffer[xe]===void 0)D.__webglDepthbuffer[xe]=s.createRenderbuffer(),pe(D.__webglDepthbuffer[xe],O,!1);else{const re=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=D.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=s.createRenderbuffer(),pe(D.__webglDepthbuffer,O,!1);else{const xe=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=D.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(O,D,ie){const xe=n.get(O);D!==void 0&&ge(xe.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&fe(O)}function Ae(O){const D=O.texture,ie=n.get(O),xe=n.get(D);O.addEventListener("dispose",E);const re=O.textures,he=O.isWebGLCubeRenderTarget===!0,De=re.length>1;if(De||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=D.version,a.memory.textures++),he){ie.__webglFramebuffer=[];for(let be=0;be<6;be++)if(D.mipmaps&&D.mipmaps.length>0){ie.__webglFramebuffer[be]=[];for(let Ne=0;Ne<D.mipmaps.length;Ne++)ie.__webglFramebuffer[be][Ne]=s.createFramebuffer()}else ie.__webglFramebuffer[be]=s.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){ie.__webglFramebuffer=[];for(let be=0;be<D.mipmaps.length;be++)ie.__webglFramebuffer[be]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(De)for(let be=0,Ne=re.length;be<Ne;be++){const pt=n.get(re[be]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),a.memory.textures++)}if(O.samples>0&&We(O)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let be=0;be<re.length;be++){const Ne=re[be];ie.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[be]);const pt=o.convert(Ne.format,Ne.colorSpace),Ee=o.convert(Ne.type),Ue=y(Ne.internalFormat,pt,Ee,Ne.colorSpace,O.isXRRenderTarget===!0),Qe=_e(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Ue,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ie.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(ie.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),te(s.TEXTURE_CUBE_MAP,D);for(let be=0;be<6;be++)if(D.mipmaps&&D.mipmaps.length>0)for(let Ne=0;Ne<D.mipmaps.length;Ne++)ge(ie.__webglFramebuffer[be][Ne],O,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne);else ge(ie.__webglFramebuffer[be],O,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(D)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let be=0,Ne=re.length;be<Ne;be++){const pt=re[be],Ee=n.get(pt);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),te(s.TEXTURE_2D,pt),ge(ie.__webglFramebuffer,O,pt,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),m(pt)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(be=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,xe.__webglTexture),te(be,D),D.mipmaps&&D.mipmaps.length>0)for(let Ne=0;Ne<D.mipmaps.length;Ne++)ge(ie.__webglFramebuffer[Ne],O,D,s.COLOR_ATTACHMENT0,be,Ne);else ge(ie.__webglFramebuffer,O,D,s.COLOR_ATTACHMENT0,be,0);m(D)&&p(be),t.unbindTexture()}O.depthBuffer&&fe(O)}function ve(O){const D=O.textures;for(let ie=0,xe=D.length;ie<xe;ie++){const re=D[ie];if(m(re)){const he=_(O),De=n.get(re).__webglTexture;t.bindTexture(he,De),p(he),t.unbindTexture()}}}const Z=[],B=[];function et(O){if(O.samples>0){if(We(O)===!1){const D=O.textures,ie=O.width,xe=O.height;let re=s.COLOR_BUFFER_BIT;const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=n.get(O),be=D.length>1;if(be)for(let Ne=0;Ne<D.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ne=0;Ne<D.length;Ne++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const pt=n.get(D[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,ie,xe,0,0,ie,xe,re,s.NEAREST),l===!0&&(Z.length=0,B.length=0,Z.push(s.COLOR_ATTACHMENT0+Ne),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Z.push(he),B.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<D.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const pt=n.get(D[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,pt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){const D=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[D])}}}function _e(O){return Math.min(i.maxSamples,O.samples)}function We(O){const D=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Le(O){const D=a.render.frame;h.get(O)!==D&&(h.set(O,D),O.update())}function rt(O,D){const ie=O.colorSpace,xe=O.format,re=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==Kn&&ie!==Gi&&(zt.getTransfer(ie)===sn?(xe!==bi||re!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),D}function Xe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=U,this.rebindTextures=me,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=We}function Yx(s,e){function t(n,i=Gi){let o;const a=zt.getTransfer(i);if(n===Oi)return s.UNSIGNED_BYTE;if(n===th)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return s.BYTE;if(n===Yd)return s.SHORT;if(n===Ma)return s.UNSIGNED_SHORT;if(n===eh)return s.INT;if(n===qs)return s.UNSIGNED_INT;if(n===yi)return s.FLOAT;if(n===Ui)return s.HALF_FLOAT;if(n===Kd)return s.ALPHA;if(n===Zd)return s.RGB;if(n===bi)return s.RGBA;if(n===$d)return s.LUMINANCE;if(n===Qd)return s.LUMINANCE_ALPHA;if(n===Co)return s.DEPTH_COMPONENT;if(n===js)return s.DEPTH_STENCIL;if(n===Vr)return s.RED;if(n===ih)return s.RED_INTEGER;if(n===Jd)return s.RG;if(n===sh)return s.RG_INTEGER;if(n===oh)return s.RGBA_INTEGER;if(n===Ar||n===Er||n===Tr||n===Cr)if(a===sn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ar)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ar)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===vc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===pc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===_c||n===Mc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===xc||n===_c)return a===sn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Mc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yc||n===bc||n===Sc||n===wc||n===Ac||n===Ec||n===Tc||n===Cc||n===Pc||n===Rc||n===Dc||n===Ic||n===Lc||n===Nc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===yc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pr||n===Uc||n===Fc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Pr)return a===sn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ef||n===Oc||n===kc||n===Bc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Pr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class jx extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nt extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class Il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`;class Qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Cn,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:Zx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jx extends Ho{constructor(e,t){super();const n=this;let i=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new Qx,m=t.getContextAttributes();let p=null,_=null;const y=[],x=[],T=new Oe;let w=null;const E=new Hn;E.viewport=new $t;const A=new Hn;A.viewport=new $t;const M=[E,A],S=new jx;let C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ue=y[j];return ue===void 0&&(ue=new Il,y[j]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(j){let ue=y[j];return ue===void 0&&(ue=new Il,y[j]=ue),ue.getGripSpace()},this.getHand=function(j){let ue=y[j];return ue===void 0&&(ue=new Il,y[j]=ue),ue.getHandSpace()};function L(j){const ue=x.indexOf(j.inputSource);if(ue===-1)return;const ge=y[ue];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||a),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function P(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",F);for(let j=0;j<y.length;j++){const ue=x[j];ue!==null&&(x[j]=null,y[j].disconnect(ue))}C=null,R=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",P),i.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new si(f.framebufferWidth,f.framebufferHeight,{format:bi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,ge=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?js:Co,ge=m.stencil?Ys:qs);const ee={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:o};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new si(d.textureWidth,d.textureHeight,{format:bi,type:Oi,depthTexture:new uh(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(j){for(let ue=0;ue<j.removed.length;ue++){const ge=j.removed[ue],pe=x.indexOf(ge);pe>=0&&(x[pe]=null,y[pe].disconnect(ge))}for(let ue=0;ue<j.added.length;ue++){const ge=j.added[ue];let pe=x.indexOf(ge);if(pe===-1){for(let fe=0;fe<y.length;fe++)if(fe>=x.length){x.push(ge),pe=fe;break}else if(x[fe]===null){x[fe]=ge,pe=fe;break}if(pe===-1)break}const ee=y[pe];ee&&ee.connect(ge)}}const z=new b,k=new b;function U(j,ue,ge){z.setFromMatrixPosition(ue.matrixWorld),k.setFromMatrixPosition(ge.matrixWorld);const pe=z.distanceTo(k),ee=ue.projectionMatrix.elements,fe=ge.projectionMatrix.elements,me=ee[14]/(ee[10]-1),Ae=ee[14]/(ee[10]+1),ve=(ee[9]+1)/ee[5],Z=(ee[9]-1)/ee[5],B=(ee[8]-1)/ee[0],et=(fe[8]+1)/fe[0],_e=me*B,We=me*et,Le=pe/(-B+et),rt=Le*-B;if(ue.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(rt),j.translateZ(Le),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ee[10]===-1)j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=me+Le,O=Ae+Le,D=_e-rt,ie=We+(pe-rt),xe=ve*Ae/O*Xe,re=Z*Ae/O*Xe;j.projectionMatrix.makePerspective(D,ie,xe,re,Xe,O),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function N(j,ue){ue===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ue.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ue=j.near,ge=j.far;v.texture!==null&&(v.depthNear>0&&(ue=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),S.near=A.near=E.near=ue,S.far=A.far=E.far=ge,(C!==S.near||R!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,R=S.far),E.layers.mask=j.layers.mask|2,A.layers.mask=j.layers.mask|4,S.layers.mask=E.layers.mask|A.layers.mask;const pe=j.parent,ee=S.cameras;N(S,pe);for(let fe=0;fe<ee.length;fe++)N(ee[fe],pe);ee.length===2?U(S,E,A):S.projectionMatrix.copy(E.projectionMatrix),X(j,S,pe)};function X(j,ue,ge){ge===null?j.matrix.copy(ue.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ue.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let oe=null;function te(j,ue){if(h=ue.getViewerPose(c||a),g=ue,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let pe=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let fe=0;fe<ge.length;fe++){const me=ge[fe];let Ae=null;if(f!==null)Ae=f.getViewport(me);else{const Z=u.getViewSubImage(d,me);Ae=Z.viewport,fe===0&&(e.setRenderTargetTextures(_,Z.colorTexture,d.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(_))}let ve=M[fe];ve===void 0&&(ve=new Hn,ve.layers.enable(fe),ve.viewport=new $t,M[fe]=ve),ve.matrix.fromArray(me.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(me.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(S.matrix.copy(ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(ve)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const fe=u.getDepthInformation(ge[0]);fe&&fe.isValid&&fe.texture&&v.init(e,fe,i.renderState)}}for(let ge=0;ge<y.length;ge++){const pe=x[ge],ee=y[ge];pe!==null&&ee!==void 0&&ee.update(pe,ue,c||a)}oe&&oe(j,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}const we=new ff;we.setAnimationLoop(te),this.setAnimationLoop=function(j){oe=j},this.dispose=function(){}}}const Fs=new ri,e_=new ot;function t_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Fs.copy(x),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Fs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n_(s,e,t,n){let i={},o={},a=[];const r=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(_,T);const w=e.render.frame;o[_.id]!==w&&(d(_),o[_.id]=w)}function h(_){const y=u();_.__bindingPointIndex=y;const x=s.createBuffer(),T=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<r;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,E=x.length;w<E;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,S=A.length;M<S;M++){const C=A[M];if(f(C,w,M,T)===!0){const R=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let P=0;for(let F=0;F<L.length;F++){const z=L[F],k=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,R+P,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,P),P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,x,T){const w=_.value,E=y+"_"+x;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{const A=T[E];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return T[E]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(_){const y=_.uniforms;let x=0;const T=16;for(let E=0,A=y.length;E<A;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,C=M.length;S<C;S++){const R=M[S],L=Array.isArray(R.value)?R.value:[R.value];for(let P=0,F=L.length;P<F;P++){const z=L[P],k=v(z),U=x%T,N=U%k.boundary,X=U+N;x+=N,X!==0&&T-X<k.storage&&(x+=T-X),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,x+=k.storage}}}const w=x%T;return w>0&&(x+=T-w),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},o={}}return{bind:l,update:c,dispose:p}}class xf{constructor(e={}){const{canvas:t=Yp(),context:n=null,depth:i=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=As,this.toneMappingExposure=1;const x=this;let T=!1,w=0,E=0,A=null,M=-1,S=null;const C=new $t,R=new $t;let L=null;const P=new ne(0);let F=0,z=t.width,k=t.height,U=1,N=null,X=null;const oe=new $t(0,0,z,k),te=new $t(0,0,z,k);let we=!1;const j=new ch;let ue=!1,ge=!1;const pe=new ot,ee=new ot,fe=new b,me=new $t,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Z(){return A===null?U:1}let B=n;function et(I,J){return t.getContext(I,J)}try{const I={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",ke,!1),B===null){const J="webgl2";if(B=et(J,I),B===null)throw et(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let _e,We,Le,rt,Xe,O,D,ie,xe,re,he,De,be,Ne,pt,Ee,Ue,Qe,ct,ze,vt,nt,ft,V;function Pe(){_e=new cv(B),_e.init(),nt=new Yx(B,_e),We=new iv(B,_e,e,nt),Le=new Wx(B,_e),We.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),rt=new dv(B),Xe=new Rx,O=new qx(B,_e,Le,Xe,We,nt,rt),D=new ov(x),ie=new lv(x),xe=new _0(B),ft=new tv(B,xe),re=new hv(B,xe,rt,ft),he=new pv(B,re,xe,rt),ct=new fv(B,We,O),Ee=new sv(Xe),De=new Px(x,D,ie,_e,We,ft,Ee),be=new t_(x,Xe),Ne=new Ix,pt=new kx(_e),Qe=new ev(x,D,ie,Le,he,f,l),Ue=new Hx(x,he,We),V=new n_(B,rt,We,Le),ze=new nv(B,_e,rt),vt=new uv(B,_e,rt),rt.programs=De.programs,x.capabilities=We,x.extensions=_e,x.properties=Xe,x.renderLists=Ne,x.shadowMap=Ue,x.state=Le,x.info=rt}Pe();const de=new Jx(x,B);this.xr=de,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=_e.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=_e.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(I){I!==void 0&&(U=I,this.setSize(z,k,!1))},this.getSize=function(I){return I.set(z,k)},this.setSize=function(I,J,q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,k=J,t.width=Math.floor(I*U),t.height=Math.floor(J*U),q===!0&&(t.style.width=I+"px",t.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(z*U,k*U).floor()},this.setDrawingBufferSize=function(I,J,q){z=I,k=J,U=q,t.width=Math.floor(I*q),t.height=Math.floor(J*q),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(oe)},this.setViewport=function(I,J,q,se){I.isVector4?oe.set(I.x,I.y,I.z,I.w):oe.set(I,J,q,se),Le.viewport(C.copy(oe).multiplyScalar(U).round())},this.getScissor=function(I){return I.copy(te)},this.setScissor=function(I,J,q,se){I.isVector4?te.set(I.x,I.y,I.z,I.w):te.set(I,J,q,se),Le.scissor(R.copy(te).multiplyScalar(U).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(I){Le.setScissorTest(we=I)},this.setOpaqueSort=function(I){N=I},this.setTransparentSort=function(I){X=I},this.getClearColor=function(I){return I.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(I=!0,J=!0,q=!0){let se=0;if(I){let $=!1;if(A!==null){const Re=A.texture.format;$=Re===oh||Re===sh||Re===ih}if($){const Re=A.texture.type,Ce=Re===Oi||Re===qs||Re===Ma||Re===Ys||Re===th||Re===nh,Ye=Qe.getClearColor(),He=Qe.getClearAlpha(),ht=Ye.r,mt=Ye.g,$e=Ye.b;Ce?(g[0]=ht,g[1]=mt,g[2]=$e,g[3]=He,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=ht,v[1]=mt,v[2]=$e,v[3]=He,B.clearBufferiv(B.COLOR,0,v))}else se|=B.COLOR_BUFFER_BIT}J&&(se|=B.DEPTH_BUFFER_BIT),q&&(se|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Ne.dispose(),pt.dispose(),Xe.dispose(),D.dispose(),ie.dispose(),he.dispose(),ft.dispose(),V.dispose(),De.dispose(),de.dispose(),de.removeEventListener("sessionstart",_n),de.removeEventListener("sessionend",Pn),kn.stop()};function ye(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const I=rt.autoReset,J=Ue.enabled,q=Ue.autoUpdate,se=Ue.needsUpdate,$=Ue.type;Pe(),rt.autoReset=I,Ue.enabled=J,Ue.autoUpdate=q,Ue.needsUpdate=se,Ue.type=$}function ke(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ze(I){const J=I.target;J.removeEventListener("dispose",Ze),Ot(J)}function Ot(I){kt(I),Xe.remove(I)}function kt(I){const J=Xe.get(I).programs;J!==void 0&&(J.forEach(function(q){De.releaseProgram(q)}),I.isShaderMaterial&&De.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,q,se,$,Re){J===null&&(J=Ae);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Ye=Zn(I,J,q,se,$);Le.setMaterial(se,Ce);let He=q.index,ht=1;if(se.wireframe===!0){if(He=re.getWireframeAttribute(q),He===void 0)return;ht=2}const mt=q.drawRange,$e=q.attributes.position;let W=mt.start*ht,Ve=(mt.start+mt.count)*ht;Re!==null&&(W=Math.max(W,Re.start*ht),Ve=Math.min(Ve,(Re.start+Re.count)*ht)),He!==null?(W=Math.max(W,0),Ve=Math.min(Ve,He.count)):$e!=null&&(W=Math.max(W,0),Ve=Math.min(Ve,$e.count));const st=Ve-W;if(st<0||st===1/0)return;ft.setup($,se,Ye,q,He);let Y,le=ze;if(He!==null&&(Y=xe.get(He),le=vt,le.setIndex(Y)),$.isMesh)se.wireframe===!0?(Le.setLineWidth(se.wireframeLinewidth*Z()),le.setMode(B.LINES)):le.setMode(B.TRIANGLES);else if($.isLine){let K=se.linewidth;K===void 0&&(K=1),Le.setLineWidth(K*Z()),$.isLineSegments?le.setMode(B.LINES):$.isLineLoop?le.setMode(B.LINE_LOOP):le.setMode(B.LINE_STRIP)}else $.isPoints?le.setMode(B.POINTS):$.isSprite&&le.setMode(B.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)le.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))le.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const K=$._multiDrawStarts,Me=$._multiDrawCounts,ce=$._multiDrawCount,ae=He?xe.get(He).bytesPerElement:1,Q=Xe.get(se).currentProgram.getUniforms();for(let Ie=0;Ie<ce;Ie++)Q.setValue(B,"_gl_DrawID",Ie),le.render(K[Ie]/ae,Me[Ie])}else if($.isInstancedMesh)le.renderInstances(W,st,$.count);else if(q.isInstancedBufferGeometry){const K=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,K);le.renderInstances(W,st,Me)}else le.render(W,st)};function gt(I,J,q){I.transparent===!0&&I.side===It&&I.forceSinglePass===!1?(I.side=On,I.needsUpdate=!0,nn(I,J,q),I.side=wi,I.needsUpdate=!0,nn(I,J,q),I.side=It):nn(I,J,q)}this.compile=function(I,J,q=null){q===null&&(q=I),p=pt.get(q),p.init(J),y.push(p),q.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),I!==q&&I.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const se=new Set;return I.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Re=$.material;if(Re)if(Array.isArray(Re))for(let Ce=0;Ce<Re.length;Ce++){const Ye=Re[Ce];gt(Ye,q,$),se.add(Ye)}else gt(Re,q,$),se.add(Re)}),y.pop(),p=null,se},this.compileAsync=function(I,J,q=null){const se=this.compile(I,J,q);return new Promise($=>{function Re(){if(se.forEach(function(Ce){Xe.get(Ce).currentProgram.isReady()&&se.delete(Ce)}),se.size===0){$(I);return}setTimeout(Re,10)}_e.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let dn=null;function ln(I){dn&&dn(I)}function _n(){kn.stop()}function Pn(){kn.start()}const kn=new ff;kn.setAnimationLoop(ln),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(I){dn=I,de.setAnimationLoop(I),I===null?kn.stop():kn.start()},de.addEventListener("sessionstart",_n),de.addEventListener("sessionend",Pn),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(J),J=de.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,J,A),p=pt.get(I,y.length),p.init(J),y.push(p),ee.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),j.setFromProjectionMatrix(ee),ge=this.localClippingEnabled,ue=Ee.init(this.clippingPlanes,ge),m=Ne.get(I,_.length),m.init(),_.push(m),de.enabled===!0&&de.isPresenting===!0){const Re=x.xr.getDepthSensingMesh();Re!==null&&it(Re,J,-1/0,x.sortObjects)}it(I,J,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(N,X),ve=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ve&&Qe.addToRenderList(m,I),this.info.render.frame++,ue===!0&&Ee.beginShadows();const q=p.state.shadowsArray;Ue.render(q,I,J),ue===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=m.opaque,$=m.transmissive;if(p.setupLights(),J.isArrayCamera){const Re=J.cameras;if($.length>0)for(let Ce=0,Ye=Re.length;Ce<Ye;Ce++){const He=Re[Ce];xn(se,$,I,He)}ve&&Qe.render(I);for(let Ce=0,Ye=Re.length;Ce<Ye;Ce++){const He=Re[Ce];Pt(m,I,He,He.viewport)}}else $.length>0&&xn(se,$,I,J),ve&&Qe.render(I),Pt(m,I,J);A!==null&&(O.updateMultisampleRenderTarget(A),O.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(x,I,J),ft.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],ue===!0&&Ee.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function it(I,J,q,se){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||j.intersectsSprite(I)){se&&me.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ee);const Ce=he.update(I),Ye=I.material;Ye.visible&&m.push(I,Ce,Ye,q,me.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||j.intersectsObject(I))){const Ce=he.update(I),Ye=I.material;if(se&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),me.copy(I.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),me.copy(Ce.boundingSphere.center)),me.applyMatrix4(I.matrixWorld).applyMatrix4(ee)),Array.isArray(Ye)){const He=Ce.groups;for(let ht=0,mt=He.length;ht<mt;ht++){const $e=He[ht],W=Ye[$e.materialIndex];W&&W.visible&&m.push(I,Ce,W,q,me.z,$e)}}else Ye.visible&&m.push(I,Ce,Ye,q,me.z,null)}}const Re=I.children;for(let Ce=0,Ye=Re.length;Ce<Ye;Ce++)it(Re[Ce],J,q,se)}function Pt(I,J,q,se){const $=I.opaque,Re=I.transmissive,Ce=I.transparent;p.setupLightsView(q),ue===!0&&Ee.setGlobalState(x.clippingPlanes,q),se&&Le.viewport(C.copy(se)),$.length>0&&Bn($,J,q),Re.length>0&&Bn(Re,J,q),Ce.length>0&&Bn(Ce,J,q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function xn(I,J,q,se){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new si(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Ui:Oi,minFilter:is,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const Re=p.state.transmissionRenderTarget[se.id],Ce=se.viewport||C;Re.setSize(Ce.z,Ce.w);const Ye=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(P),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),ve&&Qe.render(q);const He=x.toneMapping;x.toneMapping=As;const ht=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),ue===!0&&Ee.setGlobalState(x.clippingPlanes,se),Bn(I,q,se),O.updateMultisampleRenderTarget(Re),O.updateRenderTargetMipmap(Re),_e.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let $e=0,W=J.length;$e<W;$e++){const Ve=J[$e],st=Ve.object,Y=Ve.geometry,le=Ve.material,K=Ve.group;if(le.side===It&&st.layers.test(se.layers)){const Me=le.side;le.side=On,le.needsUpdate=!0,Rt(st,q,se,Y,le,K),le.side=Me,le.needsUpdate=!0,mt=!0}}mt===!0&&(O.updateMultisampleRenderTarget(Re),O.updateRenderTargetMipmap(Re))}x.setRenderTarget(Ye),x.setClearColor(P,F),ht!==void 0&&(se.viewport=ht),x.toneMapping=He}function Bn(I,J,q){const se=J.isScene===!0?J.overrideMaterial:null;for(let $=0,Re=I.length;$<Re;$++){const Ce=I[$],Ye=Ce.object,He=Ce.geometry,ht=se===null?Ce.material:se,mt=Ce.group;Ye.layers.test(q.layers)&&Rt(Ye,J,q,He,ht,mt)}}function Rt(I,J,q,se,$,Re){I.onBeforeRender(x,J,q,se,$,Re),I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(x,J,q,se,I,Re),$.transparent===!0&&$.side===It&&$.forceSinglePass===!1?($.side=On,$.needsUpdate=!0,x.renderBufferDirect(q,J,se,$,I,Re),$.side=wi,$.needsUpdate=!0,x.renderBufferDirect(q,J,se,$,I,Re),$.side=It):x.renderBufferDirect(q,J,se,$,I,Re),I.onAfterRender(x,J,q,se,$,Re)}function nn(I,J,q){J.isScene!==!0&&(J=Ae);const se=Xe.get(I),$=p.state.lights,Re=p.state.shadowsArray,Ce=$.state.version,Ye=De.getParameters(I,$.state,Re,J,q),He=De.getProgramCacheKey(Ye);let ht=se.programs;se.environment=I.isMeshStandardMaterial?J.environment:null,se.fog=J.fog,se.envMap=(I.isMeshStandardMaterial?ie:D).get(I.envMap||se.environment),se.envMapRotation=se.environment!==null&&I.envMap===null?J.environmentRotation:I.envMapRotation,ht===void 0&&(I.addEventListener("dispose",Ze),ht=new Map,se.programs=ht);let mt=ht.get(He);if(mt!==void 0){if(se.currentProgram===mt&&se.lightsStateVersion===Ce)return Jt(I,Ye),mt}else Ye.uniforms=De.getUniforms(I),I.onBeforeCompile(Ye,x),mt=De.acquireProgram(Ye,He),ht.set(He,mt),se.uniforms=Ye.uniforms;const $e=se.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&($e.clippingPlanes=Ee.uniform),Jt(I,Ye),se.needsLights=St(I),se.lightsStateVersion=Ce,se.needsLights&&($e.ambientLightColor.value=$.state.ambient,$e.lightProbe.value=$.state.probe,$e.directionalLights.value=$.state.directional,$e.directionalLightShadows.value=$.state.directionalShadow,$e.spotLights.value=$.state.spot,$e.spotLightShadows.value=$.state.spotShadow,$e.rectAreaLights.value=$.state.rectArea,$e.ltc_1.value=$.state.rectAreaLTC1,$e.ltc_2.value=$.state.rectAreaLTC2,$e.pointLights.value=$.state.point,$e.pointLightShadows.value=$.state.pointShadow,$e.hemisphereLights.value=$.state.hemi,$e.directionalShadowMap.value=$.state.directionalShadowMap,$e.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$e.spotShadowMap.value=$.state.spotShadowMap,$e.spotLightMatrix.value=$.state.spotLightMatrix,$e.spotLightMap.value=$.state.spotLightMap,$e.pointShadowMap.value=$.state.pointShadowMap,$e.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=mt,se.uniformsList=null,mt}function Ut(I){if(I.uniformsList===null){const J=I.currentProgram.getUniforms();I.uniformsList=Rr.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function Jt(I,J){const q=Xe.get(I);q.outputColorSpace=J.outputColorSpace,q.batching=J.batching,q.batchingColor=J.batchingColor,q.instancing=J.instancing,q.instancingColor=J.instancingColor,q.instancingMorph=J.instancingMorph,q.skinning=J.skinning,q.morphTargets=J.morphTargets,q.morphNormals=J.morphNormals,q.morphColors=J.morphColors,q.morphTargetsCount=J.morphTargetsCount,q.numClippingPlanes=J.numClippingPlanes,q.numIntersection=J.numClipIntersection,q.vertexAlphas=J.vertexAlphas,q.vertexTangents=J.vertexTangents,q.toneMapping=J.toneMapping}function Zn(I,J,q,se,$){J.isScene!==!0&&(J=Ae),O.resetTextureUnits();const Re=J.fog,Ce=se.isMeshStandardMaterial?J.environment:null,Ye=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Kn,He=(se.isMeshStandardMaterial?ie:D).get(se.envMap||Ce),ht=se.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,mt=!!q.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!q.morphAttributes.position,W=!!q.morphAttributes.normal,Ve=!!q.morphAttributes.color;let st=As;se.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(st=x.toneMapping);const Y=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=Y!==void 0?Y.length:0,K=Xe.get(se),Me=p.state.lights;if(ue===!0&&(ge===!0||I!==S)){const Ft=I===S&&se.id===M;Ee.setState(se,I,Ft)}let ce=!1;se.version===K.__version?(K.needsLights&&K.lightsStateVersion!==Me.state.version||K.outputColorSpace!==Ye||$.isBatchedMesh&&K.batching===!1||!$.isBatchedMesh&&K.batching===!0||$.isBatchedMesh&&K.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&K.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&K.instancing===!1||!$.isInstancedMesh&&K.instancing===!0||$.isSkinnedMesh&&K.skinning===!1||!$.isSkinnedMesh&&K.skinning===!0||$.isInstancedMesh&&K.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&K.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&K.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&K.instancingMorph===!1&&$.morphTexture!==null||K.envMap!==He||se.fog===!0&&K.fog!==Re||K.numClippingPlanes!==void 0&&(K.numClippingPlanes!==Ee.numPlanes||K.numIntersection!==Ee.numIntersection)||K.vertexAlphas!==ht||K.vertexTangents!==mt||K.morphTargets!==$e||K.morphNormals!==W||K.morphColors!==Ve||K.toneMapping!==st||K.morphTargetsCount!==le)&&(ce=!0):(ce=!0,K.__version=se.version);let ae=K.currentProgram;ce===!0&&(ae=nn(se,J,$));let Q=!1,Ie=!1,Je=!1;const lt=ae.getUniforms(),jt=K.uniforms;if(Le.useProgram(ae.program)&&(Q=!0,Ie=!0,Je=!0),se.id!==M&&(M=se.id,Ie=!0),Q||S!==I){Le.buffers.depth.getReversed()?(pe.copy(I.projectionMatrix),Kp(pe),Zp(pe),lt.setValue(B,"projectionMatrix",pe)):lt.setValue(B,"projectionMatrix",I.projectionMatrix),lt.setValue(B,"viewMatrix",I.matrixWorldInverse);const Sn=lt.map.cameraPosition;Sn!==void 0&&Sn.setValue(B,fe.setFromMatrixPosition(I.matrixWorld)),We.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&lt.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,Ie=!0,Je=!0)}if($.isSkinnedMesh){lt.setOptional(B,$,"bindMatrix"),lt.setOptional(B,$,"bindMatrixInverse");const Ft=$.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),lt.setValue(B,"boneTexture",Ft.boneTexture,O))}$.isBatchedMesh&&(lt.setOptional(B,$,"batchingTexture"),lt.setValue(B,"batchingTexture",$._matricesTexture,O),lt.setOptional(B,$,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",$._indirectTexture,O),lt.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",$._colorsTexture,O));const cn=q.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&ct.update($,q,ae),(Ie||K.receiveShadow!==$.receiveShadow)&&(K.receiveShadow=$.receiveShadow,lt.setValue(B,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(jt.envMap.value=He,jt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&J.environment!==null&&(jt.envMapIntensity.value=J.environmentIntensity),Ie&&(lt.setValue(B,"toneMappingExposure",x.toneMappingExposure),K.needsLights&&zn(jt,Je),Re&&se.fog===!0&&be.refreshFogUniforms(jt,Re),be.refreshMaterialUniforms(jt,se,U,k,p.state.transmissionRenderTarget[I.id]),Rr.upload(B,Ut(K),jt,O)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Rr.upload(B,Ut(K),jt,O),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&lt.setValue(B,"center",$.center),lt.setValue(B,"modelViewMatrix",$.modelViewMatrix),lt.setValue(B,"normalMatrix",$.normalMatrix),lt.setValue(B,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Ft=se.uniformsGroups;for(let Sn=0,at=Ft.length;Sn<at;Sn++){const Ln=Ft[Sn];V.update(Ln,ae),V.bind(Ln,ae)}}return ae}function zn(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function St(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,J,q){Xe.get(I.texture).__webglTexture=J,Xe.get(I.depthTexture).__webglTexture=q;const se=Xe.get(I);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=q===void 0,se.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,J){const q=Xe.get(I);q.__webglFramebuffer=J,q.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,q=0){A=I,w=J,E=q;let se=!0,$=null,Re=!1,Ce=!1;if(I){const He=Xe.get(I);if(He.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(B.FRAMEBUFFER,null),se=!1;else if(He.__webglFramebuffer===void 0)O.setupRenderTarget(I);else if(He.__hasExternalTextures)O.rebindTextures(I,Xe.get(I.texture).__webglTexture,Xe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const $e=I.depthTexture;if(He.__boundDepthTexture!==$e){if($e!==null&&Xe.has($e)&&(I.width!==$e.image.width||I.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(I)}}const ht=I.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Ce=!0);const mt=Xe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(mt[J])?$=mt[J][q]:$=mt[J],Re=!0):I.samples>0&&O.useMultisampledRTT(I)===!1?$=Xe.get(I).__webglMultisampledFramebuffer:Array.isArray(mt)?$=mt[q]:$=mt,C.copy(I.viewport),R.copy(I.scissor),L=I.scissorTest}else C.copy(oe).multiplyScalar(U).floor(),R.copy(te).multiplyScalar(U).floor(),L=we;if(Le.bindFramebuffer(B.FRAMEBUFFER,$)&&se&&Le.drawBuffers(I,$),Le.viewport(C),Le.scissor(R),Le.setScissorTest(L),Re){const He=Xe.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+J,He.__webglTexture,q)}else if(Ce){const He=Xe.get(I.texture),ht=J||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.__webglTexture,q||0,ht)}M=-1},this.readRenderTargetPixels=function(I,J,q,se,$,Re,Ce){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ye=Ye[Ce]),Ye){Le.bindFramebuffer(B.FRAMEBUFFER,Ye);try{const He=I.texture,ht=He.format,mt=He.type;if(!We.textureFormatReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-se&&q>=0&&q<=I.height-$&&B.readPixels(J,q,se,$,nt.convert(ht),nt.convert(mt),Re)}finally{const He=A!==null?Xe.get(A).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(I,J,q,se,$,Re,Ce){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ye=Ye[Ce]),Ye){const He=I.texture,ht=He.format,mt=He.type;if(!We.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=I.width-se&&q>=0&&q<=I.height-$){Le.bindFramebuffer(B.FRAMEBUFFER,Ye);const $e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.bufferData(B.PIXEL_PACK_BUFFER,Re.byteLength,B.STREAM_READ),B.readPixels(J,q,se,$,nt.convert(ht),nt.convert(mt),0);const W=A!==null?Xe.get(A).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,W);const Ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jp(B,Ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Re),B.deleteBuffer($e),B.deleteSync(Ve),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,J=null,q=0){I.isTexture!==!0&&(ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1]);const se=Math.pow(2,-q),$=Math.floor(I.image.width*se),Re=Math.floor(I.image.height*se),Ce=J!==null?J.x:0,Ye=J!==null?J.y:0;O.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Ce,Ye,$,Re),Le.unbindTexture()},this.copyTextureToTexture=function(I,J,q=null,se=null,$=0){I.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,I=arguments[1],J=arguments[2],$=arguments[3]||0,q=null);let Re,Ce,Ye,He,ht,mt,$e,W,Ve;const st=I.isCompressedTexture?I.mipmaps[$]:I.image;q!==null?(Re=q.max.x-q.min.x,Ce=q.max.y-q.min.y,Ye=q.isBox3?q.max.z-q.min.z:1,He=q.min.x,ht=q.min.y,mt=q.isBox3?q.min.z:0):(Re=st.width,Ce=st.height,Ye=st.depth||1,He=0,ht=0,mt=0),se!==null?($e=se.x,W=se.y,Ve=se.z):($e=0,W=0,Ve=0);const Y=nt.convert(J.format),le=nt.convert(J.type);let K;J.isData3DTexture?(O.setTexture3D(J,0),K=B.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(O.setTexture2DArray(J,0),K=B.TEXTURE_2D_ARRAY):(O.setTexture2D(J,0),K=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);const Me=B.getParameter(B.UNPACK_ROW_LENGTH),ce=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ae=B.getParameter(B.UNPACK_SKIP_PIXELS),Q=B.getParameter(B.UNPACK_SKIP_ROWS),Ie=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,st.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,st.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,He),B.pixelStorei(B.UNPACK_SKIP_ROWS,ht),B.pixelStorei(B.UNPACK_SKIP_IMAGES,mt);const Je=I.isDataArrayTexture||I.isData3DTexture,lt=J.isDataArrayTexture||J.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const jt=Xe.get(I),cn=Xe.get(J),Ft=Xe.get(jt.__renderTarget),Sn=Xe.get(cn.__renderTarget);Le.bindFramebuffer(B.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let at=0;at<Ye;at++)Je&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(I).__webglTexture,$,mt+at),I.isDepthTexture?(lt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(J).__webglTexture,$,Ve+at),B.blitFramebuffer(He,ht,Re,Ce,$e,W,Re,Ce,B.DEPTH_BUFFER_BIT,B.NEAREST)):lt?B.copyTexSubImage3D(K,$,$e,W,Ve+at,He,ht,Re,Ce):B.copyTexSubImage2D(K,$,$e,W,Ve+at,He,ht,Re,Ce);Le.bindFramebuffer(B.READ_FRAMEBUFFER,null),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else lt?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(K,$,$e,W,Ve,Re,Ce,Ye,Y,le,st.data):J.isCompressedArrayTexture?B.compressedTexSubImage3D(K,$,$e,W,Ve,Re,Ce,Ye,Y,st.data):B.texSubImage3D(K,$,$e,W,Ve,Re,Ce,Ye,Y,le,st):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,$,$e,W,Re,Ce,Y,le,st.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,$,$e,W,st.width,st.height,Y,st.data):B.texSubImage2D(B.TEXTURE_2D,$,$e,W,Re,Ce,Y,le,st);B.pixelStorei(B.UNPACK_ROW_LENGTH,Me),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ae),B.pixelStorei(B.UNPACK_SKIP_ROWS,Q),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ie),$===0&&J.generateMipmaps&&B.generateMipmap(K),Le.unbindTexture()},this.copyTextureToTexture3D=function(I,J,q=null,se=null,$=0){return I.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,se=arguments[1]||null,I=arguments[2],J=arguments[3],$=arguments[4]||0),ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,J,q,se,$)},this.initRenderTarget=function(I){Xe.get(I).__webglFramebuffer===void 0&&O.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),Le.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,Le.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}}class Yr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(e),this.density=t}clone(){return new Yr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dh extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,o=this.stride;i<o;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $n=new b;class Ks{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array),o=on(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _f extends Si{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mo;const ea=new b,yo=new b,bo=new b,So=new Oe,ta=new Oe,Mf=new ot,nr=new b,na=new b,ir=new b,Iu=new Oe,Ll=new Oe,Lu=new Oe;class i_ extends qt{constructor(e=new _f){if(super(),this.isSprite=!0,this.type="Sprite",Mo===void 0){Mo=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fh(t,5);Mo.setIndex([0,1,2,0,2,3]),Mo.setAttribute("position",new Ks(n,3,0,!1)),Mo.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=Mo,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yo.setFromMatrixScale(this.matrixWorld),Mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yo.multiplyScalar(-bo.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const a=this.center;sr(nr.set(-.5,-.5,0),bo,a,yo,i,o),sr(na.set(.5,-.5,0),bo,a,yo,i,o),sr(ir.set(.5,.5,0),bo,a,yo,i,o),Iu.set(0,0),Ll.set(1,0),Lu.set(1,1);let r=e.ray.intersectTriangle(nr,na,ir,!1,ea);if(r===null&&(sr(na.set(-.5,.5,0),bo,a,yo,i,o),Ll.set(0,1),r=e.ray.intersectTriangle(nr,ir,na,!1,ea),r===null))return;const l=e.ray.origin.distanceTo(ea);l<e.near||l>e.far||t.push({distance:l,point:ea.clone(),uv:Mi.getInterpolation(ea,nr,na,ir,Iu,Ll,Lu,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sr(s,e,t,n,i,o){So.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ta.x=o*So.x-i*So.y,ta.y=i*So.x+o*So.y):ta.copy(So),s.copy(e),s.x+=ta.x,s.y+=ta.y,s.applyMatrix4(Mf)}const Nu=new b,Uu=new $t,Fu=new $t,s_=new b,Ou=new ot,or=new b,Nl=new ni,ku=new ot,Ul=new Ea;class o_ extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uh,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rs),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,or),this.boundingBox.expandByPoint(or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,or),this.boundingSphere.expandByPoint(or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(i),e.ray.intersectsSphere(Nl)!==!1&&(ku.copy(i).invert(),Ul.copy(e.ray).applyMatrix4(ku),!(this.boundingBox!==null&&Ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ul)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_p?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Uu.fromBufferAttribute(i.attributes.skinIndex,e),Fu.fromBufferAttribute(i.attributes.skinWeight,e),Nu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const a=Fu.getComponent(o);if(a!==0){const r=Uu.getComponent(o);Ou.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),t.addScaledVector(s_.copy(Nu).applyMatrix4(Ou),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yf extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jr extends Cn{constructor(e=null,t=1,n=1,i,o,a,r,l,c=Rn,h=Rn,u,d){super(null,a,r,l,c,h,i,o,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bu=new ot,a_=new ot;class ph{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,a=e.length;o<a;o++){const r=e[o]?e[o].matrixWorld:a_;Bu.multiplyMatrices(r,t[o]),Bu.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ph(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jr(t,e,e,bi,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const o=e.bones[n];let a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new yf),this.bones.push(a),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,o=t.length;i<o;i++){const a=t[i];e.bones.push(a.uuid);const r=n[i];e.boneInverses.push(r.toArray())}return e}}class qc extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wo=new ot,zu=new ot,ar=[],Gu=new rs,r_=new ot,ia=new Ge,sa=new ni;class bt extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,r_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wo),Gu.copy(e.boundingBox).applyMatrix4(wo),this.boundingBox.union(Gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wo),sa.copy(e.boundingSphere).applyMatrix4(wo),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,a=e*o+1;for(let r=0;r<n.length;r++)n[r]=i[a+r]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),e.ray.intersectsSphere(sa)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,wo),zu.multiplyMatrices(n,wo),ia.matrixWorld=zu,ia.raycast(e,ar);for(let a=0,r=ar.length;a<r;a++){const l=ar[a];l.instanceId=o,l.object=this,t.push(l)}ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jr(new Float32Array(i*this.count),i,this.count,Vr,yi));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=i*e;o[l]=r,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vs extends Si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fr=new b,Or=new b,Hu=new ot,oa=new Ea,rr=new ni,Fl=new b,Vu=new b;class Kr extends qt{constructor(e=new Et,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)Fr.fromBufferAttribute(t,i-1),Or.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fr.distanceTo(Or);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=o,e.ray.intersectsSphere(rr)===!1)return;Hu.copy(i).invert(),oa.copy(e.ray).applyMatrix4(Hu);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),_=h.getX(v+1),y=lr(this,e,oa,l,p,_);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=lr(this,e,oa,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=lr(this,e,oa,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=lr(this,e,oa,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function lr(s,e,t,n,i,o){const a=s.geometry.attributes.position;if(Fr.fromBufferAttribute(a,i),Or.fromBufferAttribute(a,o),t.distanceSqToSegment(Fr,Or,Fl,Vu)>n)return;Fl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Fl);if(!(l<e.near||l>e.far))return{distance:l,point:Vu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Wu=new b,Xu=new b;class bf extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,o=t.count;i<o;i+=2)Wu.fromBufferAttribute(t,i),Xu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wu.distanceTo(Xu);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dr extends Kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ai extends Si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qu=new ot,Yc=new Ea,cr=new ni,hr=new b;class Ei extends qt{constructor(e=new Et,t=new Ai){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=o,e.ray.intersectsSphere(cr)===!1)return;qu.copy(i).invert(),Yc.copy(e.ray).applyMatrix4(qu);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);hr.fromBufferAttribute(u,m),Yu(hr,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)hr.fromBufferAttribute(u,g),Yu(hr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Yu(s,e,t,n,i,o,a){const r=Yc.distanceSqToPoint(s);if(r<t){const l=new b;Yc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ju extends Cn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Rn,this.minFilter=Rn,this.generateMipmaps=!1,this.needsUpdate=!0}}class pn extends Cn{constructor(e,t,n,i,o,a,r,l,c){super(e,t,n,i,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),o+=n.distanceTo(i),t.push(o),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const o=n.length;let a;t?a=t:a=e*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(i=Math.floor(r+(l-r)/2),c=n[i]-a,c<0)r=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(o-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(o-1)}getTangent(e,t){let i=e-1e-4,o=e+1e-4;i<0&&(i=0),o>1&&(o=1);const a=this.getPoint(i),r=this.getPoint(o),l=t||(a.isVector2?new Oe:new b);return l.copy(r).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],o=[],a=[],r=new b,l=new ot;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new b)}o[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],r),a[0].crossVectors(i[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(i[f-1],i[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(Fn(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(i[f],o[f])}if(t===!0){let f=Math.acos(Fn(o[0].dot(o[e]),-1,1));f/=e,i[0].dot(r.crossVectors(o[0],o[e]))>0&&(f=-f);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sf extends cs{constructor(e=0,t=0,n=1,i=1,o=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new Oe){const n=t,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(a?o=0:o=i),this.aClockwise===!0&&!a&&(o===i?o=-i:o=o-i);const r=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class l_ extends Sf{constructor(e,t,n,i,o,a){super(e,t,n,n,i,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function mh(){let s=0,e=0,t=0,n=0;function i(o,a,r,l){s=o,e=r,t=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){i(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,u){let d=(a-o)/c-(r-o)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,f*=h,i(a,r,d,f)},calc:function(o){const a=o*o,r=a*o;return s+e*o+t*a+n*r}}}const ur=new b,Ol=new mh,kl=new mh,Bl=new mh;class oi extends cs{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,o=i.length,a=(o-(this.closed?0:1))*e;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=i[(r-1)%o]:(ur.subVectors(i[0],i[1]).add(i[0]),c=ur);const u=i[r%o],d=i[(r+1)%o];if(this.closed||r+2<o?h=i[(r+2)%o]:(ur.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ol.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),kl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),kl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ol.calc(l),kl.calc(l),Bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ku(s,e,t,n,i){const o=(n-e)*.5,a=(i-t)*.5,r=s*s,l=s*r;return(2*t-2*n+o+a)*l+(-3*t+3*n-2*o-a)*r+o*s+t}function c_(s,e){const t=1-s;return t*t*e}function h_(s,e){return 2*(1-s)*s*e}function u_(s,e){return s*s*e}function pa(s,e,t,n){return c_(s,e)+h_(s,t)+u_(s,n)}function d_(s,e){const t=1-s;return t*t*t*e}function f_(s,e){const t=1-s;return 3*t*t*s*e}function p_(s,e){return 3*(1-s)*s*s*e}function m_(s,e){return s*s*s*e}function ma(s,e,t,n,i){return d_(s,e)+f_(s,t)+p_(s,n)+m_(s,i)}class g_ extends cs{constructor(e=new Oe,t=new Oe,n=new Oe,i=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Oe){const n=t,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(ma(e,i.x,o.x,a.x,r.x),ma(e,i.y,o.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v_ extends cs{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(ma(e,i.x,o.x,a.x,r.x),ma(e,i.y,o.y,a.y,r.y),ma(e,i.z,o.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class x_ extends cs{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class __ extends cs{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends cs{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){const n=t,i=this.v0,o=this.v1,a=this.v2;return n.set(pa(e,i.x,o.x,a.x),pa(e,i.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wf extends cs{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,o=this.v1,a=this.v2;return n.set(pa(e,i.x,o.x,a.x),pa(e,i.y,o.y,a.y),pa(e,i.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y_ extends cs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const n=t,i=this.points,o=(i.length-1)*e,a=Math.floor(o),r=o-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Ku(r,l.x,c.x,h.x,u.x),Ku(r,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Oe().fromArray(i))}return this}}var b_=Object.freeze({__proto__:null,ArcCurve:l_,CatmullRomCurve3:oi,CubicBezierCurve:g_,CubicBezierCurve3:v_,EllipseCurve:Sf,LineCurve:x_,LineCurve3:__,QuadraticBezierCurve:M_,QuadraticBezierCurve3:wf,SplineCurve:y_});class $s extends Et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const o=[],a=[],r=[],l=[],c=new b,h=new Oe;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tn extends Et{constructor(e=1,t=1,n=1,i=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function _(){const x=new b,T=new b;let w=0;const E=(t-e)/n;for(let A=0;A<=o;A++){const M=[],S=A/o,C=S*(t-e)+e;for(let R=0;R<=i;R++){const L=R/i,P=L*l+r,F=Math.sin(P),z=Math.cos(P);T.x=C*F,T.y=-S*n+m,T.z=C*z,u.push(T.x,T.y,T.z),x.set(F,E,z).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-S),M.push(g++)}v.push(M)}for(let A=0;A<i;A++)for(let M=0;M<o;M++){const S=v[M][A],C=v[M+1][A],R=v[M+1][A+1],L=v[M][A+1];(e>0||M!==0)&&(h.push(S,C,L),w+=3),(t>0||M!==o-1)&&(h.push(C,R,L),w+=3)}c.addGroup(p,w,0),p+=w}function y(x){const T=g,w=new Oe,E=new b;let A=0;const M=x===!0?e:t,S=x===!0?1:-1;for(let R=1;R<=i;R++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const C=g;for(let R=0;R<=i;R++){const P=R/i*l+r,F=Math.cos(P),z=Math.sin(P);E.x=M*z,E.y=m*S,E.z=M*F,u.push(E.x,E.y,E.z),d.push(0,S,0),w.x=F*.5+.5,w.y=z*.5*S+.5,f.push(w.x,w.y),g++}for(let R=0;R<i;R++){const L=T+R,P=C+R;x===!0?h.push(P,P+1,L):h.push(P+1,P,L),A+=3}c.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vn extends tn{constructor(e=1,t=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,e,t,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(e){return new Vn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const o=[],a=[];r(i),c(n),h(),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(o.slice(),3)),this.setAttribute("uv",new Yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(_){const y=new b,x=new b,T=new b;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],x),f(t[w+2],T),l(y,x,T,_)}function l(_,y,x,T){const w=T+1,E=[];for(let A=0;A<=w;A++){E[A]=[];const M=_.clone().lerp(x,A/w),S=y.clone().lerp(x,A/w),C=w-A;for(let R=0;R<=C;R++)R===0&&A===w?E[A][R]=M:E[A][R]=M.clone().lerp(S,R/C)}for(let A=0;A<w;A++)for(let M=0;M<2*(w-A)-1;M++){const S=Math.floor(M/2);M%2===0?(d(E[A][S+1]),d(E[A+1][S]),d(E[A][S])):(d(E[A][S+1]),d(E[A+1][S+1]),d(E[A+1][S]))}}function c(_){const y=new b;for(let x=0;x<o.length;x+=3)y.x=o[x+0],y.y=o[x+1],y.z=o[x+2],y.normalize().multiplyScalar(_),o[x+0]=y.x,o[x+1]=y.y,o[x+2]=y.z}function h(){const _=new b;for(let y=0;y<o.length;y+=3){_.x=o[y+0],_.y=o[y+1],_.z=o[y+2];const x=m(_)/2/Math.PI+.5,T=p(_)/Math.PI+.5;a.push(x,1-T)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){const y=a[_+0],x=a[_+2],T=a[_+4],w=Math.max(y,x,T),E=Math.min(y,x,T);w>.9&&E<.1&&(y<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function d(_){o.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const _=new b,y=new b,x=new b,T=new b,w=new Oe,E=new Oe,A=new Oe;for(let M=0,S=0;M<o.length;M+=9,S+=6){_.set(o[M+0],o[M+1],o[M+2]),y.set(o[M+3],o[M+4],o[M+5]),x.set(o[M+6],o[M+7],o[M+8]),w.set(a[S+0],a[S+1]),E.set(a[S+2],a[S+3]),A.set(a[S+4],a[S+5]),T.copy(_).add(y).add(x).divideScalar(3);const C=m(T);v(w,S+0,_,C),v(E,S+2,y,C),v(A,S+4,x,C)}}function v(_,y,x,T){T<0&&_.x===1&&(a[y]=_.x-1),x.x===0&&x.z===0&&(a[y]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.vertices,e.indices,e.radius,e.details)}}class Es extends Ta{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Es(e.radius,e.detail)}}class gh extends Ta{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gh(e.radius,e.detail)}}class ga extends Ta{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ga(e.radius,e.detail)}}class Hs extends Et{constructor(e=.5,t=1,n=32,i=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const r=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new b,g=new Oe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=o+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,y=_,x=_+n+1,T=_+n+2,w=_+1;r.push(y,x,w),r.push(x,T,w)}}this.setIndex(r),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hn extends Et{constructor(e=1,t=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new b,d=new b,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const w=T/t;u.x=-e*Math.cos(i+w*o)*Math.sin(a+y*r),u.y=e*Math.cos(a+y*r),u.z=e*Math.sin(i+w*o)*Math.sin(a+y*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+x,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=h[p][_+1],x=h[p][_],T=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(y,x,w),(p!==n-1||l<Math.PI)&&f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zr extends Et{constructor(e=1,t=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*o,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;a.push(v,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pi extends Et{constructor(e=new wf(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:o};const a=e.computeFrenetFrames(t,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new b,l=new b,c=new Oe;let h=new b;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function v(){for(let y=0;y<t;y++)m(y);m(o===!1?t:0),_(),p()}function m(y){h=e.getPointAt(y/t,h);const x=a.normals[y],T=a.binormals[y];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,A=Math.sin(E),M=-Math.cos(E);l.x=M*x.x+A*T.x,l.y=M*x.y+A*T.y,l.z=M*x.z+A*T.z,l.normalize(),d.push(l.x,l.y,l.z),r.x=h.x+n*l.x,r.y=h.y+n*l.y,r.z=h.z+n*l.z,u.push(r.x,r.y,r.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=i;x++){const T=(i+1)*(y-1)+(x-1),w=(i+1)*y+(x-1),E=(i+1)*y+x,A=(i+1)*(y-1)+x;g.push(T,w,A),g.push(w,E,A)}}function _(){for(let y=0;y<=t;y++)for(let x=0;x<=i;x++)c.x=y/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pi(new b_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ir extends rn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Be extends Si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends Be{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class S_ extends Si{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function dr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function w_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function A_(s){function e(i,o){return s[i]-s[o]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Zu(s,e,t){const n=s.length,i=new s.constructor(n);for(let o=0,a=0;a!==n;++o){const r=t[o]*e;for(let l=0;l!==e;++l)i[a++]=s[r+l]}return i}function Af(s,e,t,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let a=o[n];if(a!==void 0)if(Array.isArray(a))do a=o[n],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=s[i++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[n],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=s[i++];while(o!==void 0);else do a=o[n],a!==void 0&&(e.push(o.time),t.push(a)),o=s[i++];while(o!==void 0)}class Ca{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],o=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let r=n+2;;){if(i===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(o=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=o)){const r=t[1];e<r&&(n=2,o=r);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=o,o=t[--n-1],e>=o)break e}a=n,n=0;break t}break n}for(;n<a;){const r=n+a>>>1;e<t[r]?a=r:n=r+1}if(i=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i;for(let a=0;a!==i;++a)t[a]=n[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class E_ extends Ca{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let o=e-2,a=e+1,r=i[o],l=i[a];if(r===void 0)switch(this.getSettings_().endingStart){case Oh:o=e,r=2*t-n;break;case kh:o=i.length-2,r=t+i[o]-i[o+1];break;default:o=e,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oh:a=e,l=2*n-t;break;case kh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let T=0;T!==r;++T)o[T]=p*a[h+T]+_*a[c+T]+y*a[l+T]+x*a[u+T];return o}}class T_ extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==r;++d)o[d]=a[c+d]*u+a[l+d]*h;return o}}class C_ extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dr(t,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dr(e.times,Array),values:dr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new C_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new T_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new E_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let o=0,a=i-1;for(;o!==i&&n[o]<e;)++o;for(;a!==-1&&n[a]>t;)--a;if(++a,o!==0||a!==i){o>=a&&(a=Math.max(a,1),o=a-1);const r=this.getValueSize();this.times=n.slice(o,a),this.values=this.values.slice(o*r,a*r)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let r=0;r!==o;r++){const l=n[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),e=!1;break}a=l}if(i!==void 0&&w_(i))for(let r=0,l=i.length;r!==l;++r){const c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ol,o=e.length-1;let a=1;for(let r=1;r<o;++r){let l=!1;const c=e[r],h=e[r+1];if(c!==h&&(r!==1||c!==e[0]))if(i)l=!0;else{const u=r*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(r!==a){e[a]=e[r];const u=r*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(o>0){e[a]=e[o];for(let r=o*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[r+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=ba;class Wo extends Xi{constructor(e,t,n){super(e,t,n)}}Wo.prototype.ValueTypeName="bool";Wo.prototype.ValueBufferType=Array;Wo.prototype.DefaultInterpolation=ya;Wo.prototype.InterpolantFactoryMethodLinear=void 0;Wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ef extends Xi{}Ef.prototype.ValueTypeName="color";class ko extends Xi{}ko.prototype.ValueTypeName="number";class P_ extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(n-t)/(i-t);let c=e*r;for(let h=c+r;c!==h;c+=4)ut.slerpFlat(o,0,a,c-r,a,c,l);return o}}class Bo extends Xi{InterpolantFactoryMethodLinear(e){return new P_(this.times,this.values,this.getValueSize(),e)}}Bo.prototype.ValueTypeName="quaternion";Bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Xo extends Xi{constructor(e,t,n){super(e,t,n)}}Xo.prototype.ValueTypeName="string";Xo.prototype.ValueBufferType=Array;Xo.prototype.DefaultInterpolation=ya;Xo.prototype.InterpolantFactoryMethodLinear=void 0;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;class zo extends Xi{}zo.prototype.ValueTypeName="vector";class R_{constructor(e="",t=-1,n=[],i=Mp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,r=n.length;a!==r;++a)t.push(I_(n[a]).scale(i));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=n.length;o!==a;++o)t.push(Xi.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const o=t.length,a=[];for(let r=0;r<o;r++){let l=[],c=[];l.push((r+o-1)%o,r,(r+1)%o),c.push(0,1,0);const h=A_(l);l=Zu(l,1,h),c=Zu(c,1,h),!i&&l[0]===0&&(l.push(o),c.push(c[0])),a.push(new ko(".morphTargetInfluences["+t[r].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let r=0,l=e.length;r<l;r++){const c=e[r],h=c.name.match(o);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const r in i)a.push(this.CreateFromMorphTargetSequence(r,i[r],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Af(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},i=[],o=e.name||"default",a=e.fps||30,r=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new ko(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(zo,f+".position",d,"pos",i),n(Bo,f+".quaternion",d,"rot",i),n(zo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(o,l,i,r)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function D_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ko;case"vector":case"vector2":case"vector3":case"vector4":return zo;case"color":return Ef;case"quaternion":return Bo;case"bool":case"boolean":return Wo;case"string":return Xo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function I_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=D_(s.type);if(s.times===void 0){const t=[],n=[];Af(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ss={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class L_{constructor(e,t,n){const i=this;let o=!1,a=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,o===!1&&i.onStart!==void 0&&i.onStart(h,a,r),o=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,r),a===r&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const N_=new L_;class Qs{constructor(e){this.manager=e!==void 0?e:N_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,o){n.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji={};class U_ extends Error{constructor(e,t){super(e),this.response=t}}class kr extends Qs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Ss.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:i});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ji[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{v+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,E=h.length;w<E;w++){const A=h[w];A.onProgress&&A.onProgress(T)}p.enqueue(x),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new U_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,r));case"json":return c.json();default:if(r===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(r),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ss.add(e,c);const h=Ji[e];delete Ji[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ji[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ji[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class F_ extends Qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Ss.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const r=Sa("img");function l(){h(),Ss.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(u){h(),i&&i(u),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),o.manager.itemStart(e),r.src=e,r}}class O_ extends Qs{constructor(e){super(e)}load(e,t,n,i){const o=new Cn,a=new F_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(r){o.image=r,o.needsUpdate=!0,t!==void 0&&t(o)},n,i),o}}class Pa extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class k_ extends Pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zl=new ot,$u=new b,Qu=new b;class vh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class B_ extends vh{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||i!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=i,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class z_ extends Pa{constructor(e,t,n=0,i=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new B_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ju=new ot,aa=new b,Gl=new b;class G_ extends vh{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),n.position.copy(aa),Gl.copy(n.position),Gl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Gl),n.updateMatrixWorld(),i.makeTranslation(-aa.x,-aa.y,-aa.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}}class va extends Pa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new G_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class H_ extends vh{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xh extends Pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tf extends Pa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class V_ extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Ss.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),o.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}const r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader;const l=fetch(e,r).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ss.add(e,c),t&&t(c),o.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ss.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Ss.add(e,l),o.manager.itemStart(e)}}class Cf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ed();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ed(){return performance.now()}const _h="\\[\\]\\.:\\/",W_=new RegExp("["+_h+"]","g"),Mh="[^"+_h+"]",X_="[^"+_h.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",Mh),Y_=/(WCOD+)?/.source.replace("WCOD",X_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),K_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),Z_=new RegExp("^"+q_+Y_+j_+K_+"$"),$_=["material","materials","bones","map"];class Q_{constructor(e,t,n){const i=n||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class an{constructor(e,t,n){this.path=t,this.parsedPath=n||an.parseTrackName(t),this.node=an.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new an.Composite(e,t,n):new an(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(e){const t=Z_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);$_.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===t||r.uuid===t)return r;const l=n(r.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let o=t.propertyIndex;if(e||(e=an.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}an.Composite=Q_;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const td=new ot;class J_{constructor(e,t,n=0,i=1/0){this.ray=new Ea(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return td.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(td),this}intersectObject(e,t=!0,n=[]){return jc(e,this,n,t),n.sort(nd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,o=e.length;i<o;i++)jc(e[i],this,n,t);return n.sort(nd),n}}function nd(s,e){return s.distance-e.distance}function jc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let a=0,r=o.length;a<r;a++)jc(o[a],e,t,!0)}}const id=new Oe;class eM{constructor(e=new Oe(1/0,1/0),t=new Oe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=id.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,id).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);const _a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tM=new Xr(-1,1,1,-1,0,1);class nM extends Et{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const iM=new nM;class $r{constructor(e){this._mesh=new Ge(iM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Pf extends Js{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $r(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class sd extends Js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class sM extends Js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pf(_a),this.copyPass.material.blending=ei,this.clock=new Cf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}sd!==void 0&&(a instanceof sd?n=!0:a instanceof sM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aM extends Js{constructor(e,t,n=null,i=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class rM{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,o){return e[0]*t+e[1]*n+e[2]*i+e[3]*o}noise(e,t){let n,i,o;const a=.5*(Math.sqrt(3)-1),r=(e+t)*a,l=Math.floor(e+r),c=Math.floor(t+r),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,v=t-f;let m,p;g>v?(m=1,p=0):(m=0,p=1);const _=g-m+h,y=v-p+h,x=g-1+2*h,T=v-1+2*h,w=l&255,E=c&255,A=this.perm[w+this.perm[E]]%12,M=this.perm[w+m+this.perm[E+p]]%12,S=this.perm[w+1+this.perm[E+1]]%12;let C=.5-g*g-v*v;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[A],g,v));let R=.5-_*_-y*y;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[M],_,y));let L=.5-x*x-T*T;return L<0?o=0:(L*=L,o=L*L*this.dot(this.grad3[S],x,T)),70*(n+i+o)}noise3d(e,t,n){let i,o,a,r;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,_=e-v,y=t-m,x=n-p;let T,w,E,A,M,S;_>=y?y>=x?(T=1,w=0,E=0,A=1,M=1,S=0):_>=x?(T=1,w=0,E=0,A=1,M=0,S=1):(T=0,w=0,E=1,A=1,M=0,S=1):y<x?(T=0,w=0,E=1,A=0,M=1,S=1):_<x?(T=0,w=1,E=0,A=0,M=1,S=1):(T=0,w=1,E=0,A=1,M=1,S=0);const C=_-T+f,R=y-w+f,L=x-E+f,P=_-A+2*f,F=y-M+2*f,z=x-S+2*f,k=_-1+3*f,U=y-1+3*f,N=x-1+3*f,X=h&255,oe=u&255,te=d&255,we=this.perm[X+this.perm[oe+this.perm[te]]]%12,j=this.perm[X+T+this.perm[oe+w+this.perm[te+E]]]%12,ue=this.perm[X+A+this.perm[oe+M+this.perm[te+S]]]%12,ge=this.perm[X+1+this.perm[oe+1+this.perm[te+1]]]%12;let pe=.6-_*_-y*y-x*x;pe<0?i=0:(pe*=pe,i=pe*pe*this.dot3(this.grad3[we],_,y,x));let ee=.6-C*C-R*R-L*L;ee<0?o=0:(ee*=ee,o=ee*ee*this.dot3(this.grad3[j],C,R,L));let fe=.6-P*P-F*F-z*z;fe<0?a=0:(fe*=fe,a=fe*fe*this.dot3(this.grad3[ue],P,F,z));let me=.6-k*k-U*U-N*N;return me<0?r=0:(me*=me,r=me*me*this.dot3(this.grad3[ge],k,U,N)),32*(i+o+a+r)}noise4d(e,t,n,i){const o=this.grad4,a=this.simplex,r=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const v=(e+t+n+i)*l,m=Math.floor(e+v),p=Math.floor(t+v),_=Math.floor(n+v),y=Math.floor(i+v),x=(m+p+_+y)*c,T=m-x,w=p-x,E=_-x,A=y-x,M=e-T,S=t-w,C=n-E,R=i-A,L=M>S?32:0,P=M>C?16:0,F=S>C?8:0,z=M>R?4:0,k=S>R?2:0,U=C>R?1:0,N=L+P+F+z+k+U,X=a[N][0]>=3?1:0,oe=a[N][1]>=3?1:0,te=a[N][2]>=3?1:0,we=a[N][3]>=3?1:0,j=a[N][0]>=2?1:0,ue=a[N][1]>=2?1:0,ge=a[N][2]>=2?1:0,pe=a[N][3]>=2?1:0,ee=a[N][0]>=1?1:0,fe=a[N][1]>=1?1:0,me=a[N][2]>=1?1:0,Ae=a[N][3]>=1?1:0,ve=M-X+c,Z=S-oe+c,B=C-te+c,et=R-we+c,_e=M-j+2*c,We=S-ue+2*c,Le=C-ge+2*c,rt=R-pe+2*c,Xe=M-ee+3*c,O=S-fe+3*c,D=C-me+3*c,ie=R-Ae+3*c,xe=M-1+4*c,re=S-1+4*c,he=C-1+4*c,De=R-1+4*c,be=m&255,Ne=p&255,pt=_&255,Ee=y&255,Ue=r[be+r[Ne+r[pt+r[Ee]]]]%32,Qe=r[be+X+r[Ne+oe+r[pt+te+r[Ee+we]]]]%32,ct=r[be+j+r[Ne+ue+r[pt+ge+r[Ee+pe]]]]%32,ze=r[be+ee+r[Ne+fe+r[pt+me+r[Ee+Ae]]]]%32,vt=r[be+1+r[Ne+1+r[pt+1+r[Ee+1]]]]%32;let nt=.6-M*M-S*S-C*C-R*R;nt<0?h=0:(nt*=nt,h=nt*nt*this.dot4(o[Ue],M,S,C,R));let ft=.6-ve*ve-Z*Z-B*B-et*et;ft<0?u=0:(ft*=ft,u=ft*ft*this.dot4(o[Qe],ve,Z,B,et));let V=.6-_e*_e-We*We-Le*Le-rt*rt;V<0?d=0:(V*=V,d=V*V*this.dot4(o[ct],_e,We,Le,rt));let Pe=.6-Xe*Xe-O*O-D*D-ie*ie;Pe<0?f=0:(Pe*=Pe,f=Pe*Pe*this.dot4(o[ze],Xe,O,D,ie));let de=.6-xe*xe-re*re-he*he-De*De;return de<0?g=0:(de*=de,g=de*de*this.dot4(o[vt],xe,re,he,De)),27*(h+u+d+f+g)}}const fr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Oe},cameraProjectionMatrix:{value:new ot},cameraInverseProjectionMatrix:{value:new ot},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},pr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},mr={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe}},vertexShader:`varying vec2 vUv;

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

		}`};class bs extends Js{constructor(e,t,n,i,o=32){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(o),this.generateRandomKernelRotations();const a=new uh;a.format=js,a.type=Ys,this.normalRenderTarget=new si(this.width,this.height,{minFilter:Rn,magFilter:Rn,type:Ui,depthTexture:a}),this.ssaoRenderTarget=new si(this.width,this.height,{type:Ui}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new rn({defines:Object.assign({},fr.defines),uniforms:Ni.clone(fr.uniforms),vertexShader:fr.vertexShader,fragmentShader:fr.fragmentShader,blending:ei}),this.ssaoMaterial.defines.KERNEL_SIZE=o,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new S_,this.normalMaterial.blending=ei,this.blurMaterial=new rn({defines:Object.assign({},mr.defines),uniforms:Ni.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new rn({defines:Object.assign({},pr.defines),uniforms:Ni.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,blending:ei}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new rn({uniforms:Ni.clone(_a.uniforms),vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Od,blendDst:nc,blendEquation:ns,blendSrcAlpha:Fd,blendDstAlpha:nc,blendEquationAlpha:ns}),this.fsQuad=new $r(null),this.originalClearColor=new ne}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,n){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case bs.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=ei,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case bs.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ei,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case bs.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case bs.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ei,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case bs.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ud,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,n,i,o){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,o){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,o=t.clearAlpha||o,i!=null&&(e.setClearColor(i),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const i=new b;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let o=n/e;o=G.lerp(.1,1,o*o),i.multiplyScalar(o),t.push(i)}}generateRandomKernelRotations(){const n=new rM,i=16,o=new Float32Array(i);for(let a=0;a<i;a++){const r=Math.random()*2-1,l=Math.random()*2-1,c=0;o[a]=n.noise3d(r,l,c)}this.noiseTexture=new jr(o,4,4,Vr,yi),this.noiseTexture.wrapS=Wn,this.noiseTexture.wrapT=Wn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}}bs.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const lM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Go extends Js{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new si(o,a,{type:Ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new si(o,a,{type:Ui});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new si(o,a,{type:Ui});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),a=Math.round(a/2)}const r=lM;this.highPassUniforms=Ni.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Oe(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=_a;this.copyUniforms=Ni.clone(h.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new fn,this.fsQuad=new $r(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new Oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Go.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Go.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Go.BlurDirectionX=new Oe(1,0);Go.BlurDirectionY=new Oe(0,1);const cM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class hM extends Js{constructor(){super();const e=cM;this.uniforms=Ni.clone(e.uniforms),this.material=new Ir({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new $r(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===sn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Rf(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new pn(s);return n.needsUpdate=!0,n}function uM(s=8500,e=14e3){const t=new Nt;t.name="Procedural_Starfield";const n=new Float32Array(s*3),i=new Float32Array(s*3),o=[new ne(10205439),new ne(13293823),new ne(16316415),new ne(16774378),new ne(16765601),new ne(16754795)];for(let p=0;p<s;p++){const _=Math.random(),y=Math.random(),x=_*2*Math.PI;let T=Math.acos(2*y-1);Math.random()<.35&&(T=Math.PI*.5+(Math.random()-.5)*.32);const w=e*(.55+.45*Math.random()),E=Math.sin(T);n[p*3]=w*E*Math.cos(x),n[p*3+1]=w*Math.cos(T),n[p*3+2]=w*E*Math.sin(x);const A=o[Math.floor(Math.random()*o.length)],M=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=A.r*M,i[p*3+1]=A.g*M,i[p*3+2]=A.b*M}const a=new Et;a.setAttribute("position",new _t(n,3)),a.setAttribute("color",new _t(i,3));const r=Rf(),l=e/14e3,c=new Ai({size:28*l,map:r,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Tn,sizeAttenuation:!0}),h=new Ei(a,c);t.add(h);const u=500,d=new Float32Array(u*3),f=new Float32Array(u*3);for(let p=0;p<u;p++){const _=Math.random()*2*Math.PI,y=Math.acos(2*Math.random()-1),x=e*.72;d[p*3]=x*Math.sin(y)*Math.cos(_),d[p*3+1]=x*Math.cos(y),d[p*3+2]=x*Math.sin(y)*Math.sin(_);const T=o[p%o.length];f[p*3]=T.r,f[p*3+1]=T.g,f[p*3+2]=T.b}const g=new Et;g.setAttribute("position",new _t(d,3)),g.setAttribute("color",new _t(f,3));const v=new Ai({size:56*l,map:r,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Tn});t.add(new Ei(g,v)),t.renderOrder=-80,h.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const _=G.clamp(p,0,1);c.opacity=.92*_,v.opacity=.95*_,t.visible=_>.015},t}class dM{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let o=0;o<t;o++)n[o*3]=(Math.random()-.5)*28,n[o*3+1]=(Math.random()-.5)*18,n[o*3+2]=-Math.random()*55;this.geometry=new Et,this.geometry.setAttribute("position",new _t(n,3)),this.material=new Ai({color:new ne(16758892),size:.42,map:Rf(),transparent:!0,opacity:0,depthWrite:!1,blending:Tn}),this.points=new Ei(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let o=0;o<this.streakCount;o++){const a=Math.random()*Math.PI*2,r=3.5+Math.random()*22,l=Math.cos(a)*r,c=Math.sin(a)*r*.72,h=-8-Math.random()*95,u=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:h,len:u}),i[o*6]=l,i[o*6+1]=c,i[o*6+2]=h,i[o*6+3]=l,i[o*6+4]=c,i[o*6+5]=h-u}this.streakGeometry=new Et,this.streakGeometry.setAttribute("position",new _t(i,3)),this.streakMaterial=new Vs({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:Tn}),this.streakLines=new bf(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=G.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=G.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const o=this.geometry.attributes.position,a=o.array,r=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=a[l*3+2]+r;c>2&&(c=-52-Math.random()*12,a[l*3]=(Math.random()-.5)*28,a[l*3+1]=(Math.random()-.5)*18),a[l*3+2]=c}o.needsUpdate=!0}if(this.pulseFactor=G.lerp(this.pulseFactor,G.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const o=this.streakGeometry.attributes.position,a=o.array,r=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const h=this.streakSeeds[c];h.z+=r,h.z>4&&(h.z=-95-Math.random()*25);const u=h.z-h.len*l;a[c*6]=h.x,a[c*6+1]=h.y,a[c*6+2]=h.z,a[c*6+3]=h.x,a[c*6+4]=h.y,a[c*6+5]=u}o.needsUpdate=!0}}}class fM{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new b,this.angularVelocity=new b,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.speedRatio=0,this.lastLayerBaseSpeed=8,this.lastLayerBoostMax=24,this._shakePhase=0,this._qShake=new ut,this._eulerShake=new ri,this.altitudeContext={surfaceAltitude:9999,planetRadius:1050,atmoTopAlt:750,groundFloorAlt:.9,minSpeed:8,metersPerUnit:62,submergedRatio:0,planetCenter:new b,prevPlanetCenter:new b,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new b,planetQuatDelta:new ut},this._tmpToShip=new b,this.enabled=!0,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov||60,this._bindEvents()}setEnabled(e){if(this.enabled=!!e,!this.enabled){this.isDragging=!1;for(const t of Object.keys(this.keys))this.keys[t]=!1;typeof document<"u"&&document.pointerLockElement===this.domElement&&document.exitPointerLock&&document.exitPointerLock()}}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{this.enabled&&!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{this.enabled&&e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.enabled||!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=G.clamp(-t*.011,-.52,.52);this.targetBankAngle=G.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{if(!this.enabled)return;const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=G.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){if(!(!this.enabled&&t))switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,minSpeed:o,metersPerUnit:a,submergedRatio:r,planetCenter:l,prevPlanetCenter:c,hasPlanet:h,inGravityWell:u,planetDeltaPos:d,planetQuatDelta:f}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||1050,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*.72,this.altitudeContext.groundFloorAlt=i??.9,this.altitudeContext.minSpeed=o??8,this.altitudeContext.metersPerUnit=a??62,this.altitudeContext.submergedRatio=G.clamp(r??0,0,1),l?(this.altitudeContext.planetCenter.copy(l),this.altitudeContext.prevPlanetCenter.copy(c||l),this.altitudeContext.hasPlanet=h!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!u,d?this.altitudeContext.planetDeltaPos.copy(d):this.altitudeContext.planetDeltaPos.set(0,0,0),f?this.altitudeContext.planetQuatDelta.copy(f):this.altitudeContext.planetQuatDelta.identity()}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:o=!1,onComplete:a=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const r=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new b(0,1,0)}));this.autopilot={startPos:r,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:o,onComplete:a}}setPose(e,t,n=new b(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getSpeedRatio(){return this.speedRatio}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(0,this.altitudeContext.groundFloorAlt||0),o=Math.max(0,t-n)*(this.altitudeContext.metersPerUnit??62),a=Math.max(200,this.altitudeContext.atmoTopAlt),r=G.clamp(t/a,0,1),l=G.smoothstep(t,a,a+2600),c=this.altitudeContext.minSpeed??8,h=G.lerp(1,.48,this.altitudeContext.submergedRatio||0),u=G.smoothstep(o,0,2500),d=G.smoothstep(o,2500,12e3),f=G.smoothstep(o,12e3,35e3),g=G.smoothstep(o,35e3,62e3);let v=G.lerp(c,18,u);v=G.lerp(v,44,d),v=G.lerp(v,105,f),v=G.lerp(v,165,g),v*=h;const m=G.lerp(v,440,Math.pow(l,1.08)),p=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&p){const E=G.lerp(G.lerp(.24,.62,r),1,l);this.pulseDriveCharge=G.lerp(this.pulseDriveCharge,E,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=G.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const _=this.keys.boost&&p?Math.min(1,this.pulseDriveCharge/Math.max(.2,G.lerp(.24,1,l))):this.pulseDriveCharge,y=G.lerp(2.2,3.2,r),T=G.lerp(y,7.2,l),w=G.lerp(1,T,Math.min(1,_));return this.lastLayerBaseSpeed=m*this.speedMultiplier,this.lastLayerBoostMax=m*this.speedMultiplier*T,m*this.speedMultiplier*w}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell){const p=this.altitudeContext.planetQuatDelta;p.x*p.x+p.y*p.y+p.z*p.z>1e-14?(this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.prevPlanetCenter).applyQuaternion(p),this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip),this.shipQuaternion.premultiply(p).normalize(),this.velocity.applyQuaternion(p),this.camera.quaternion.copy(this.shipQuaternion)):this.camera.position.add(this.altitudeContext.planetDeltaPos)}if(this.autopilot){this.autopilot.elapsed+=t;const p=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),_=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,{targetPos:y,lookAtPos:x,upVec:T,useCurveNow:w}=this.autopilot.poseProvider(_,p,this.autopilot.startPos),E=this.camera.position.clone();this.autopilot.useDirectCurve||w?this.camera.position.copy(y):this.camera.position.lerpVectors(this.autopilot.startPos,y,_);const A=this.camera.clone();A.position.copy(this.camera.position),A.up.copy(T||new b(0,1,0)),A.lookAt(x),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,A.quaternion,this.autopilot.useDirectCurve?Math.min(1,_*2.2):Math.min(1,_*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(E).divideScalar(t);const M=this.autopilot.useDirectCurve?Math.sin(p*Math.PI)*14:Math.sin(p*Math.PI)*28,S=this.baseFov+M;if(Math.abs(this.camera.fov-S)>.03&&(this.camera.fov=G.lerp(this.camera.fov,S,.22),this.camera.updateProjectionMatrix()),this.speedRatio=G.lerp(this.speedRatio,this.autopilot.useDirectCurve?.35*Math.sin(p*Math.PI):.72*Math.sin(p*Math.PI),.18),p>=1){const C=this.autopilot.onComplete;this.autopilot=null,C?(this.velocity.multiplyScalar(.2),C()):this.velocity.set(0,0,0)}return}if(!this.enabled){this.angularVelocity.set(0,0,0);return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const p=new ut().setFromAxisAngle(new b(1,0,0),this.angularVelocity.x),_=new ut().setFromAxisAngle(new b(0,1,0),this.angularVelocity.y),y=new ut().setFromAxisAngle(new b(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(_),this.shipQuaternion.multiply(p),this.shipQuaternion.multiply(y),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=G.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const o=new ut().setFromAxisAngle(new b(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(o);const a=new b((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),r=this._computeAdaptiveSpeedLimits(t);if(a.lengthSq()>0){a.normalize(),a.applyQuaternion(this.shipQuaternion);const p=a.multiplyScalar(r),_=G.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(p,1-Math.exp(-_*t))}else{const p=G.lerp(3.4,6.2,this.altitudeContext.submergedRatio||0);this.velocity.multiplyScalar(Math.exp(-p*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0)}if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const p=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,_=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),y=_.length();if(y>1e-4&&y<p){const x=_.divideScalar(y);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(x,p);const T=this.velocity.dot(x);T<0&&this.velocity.addScaledVector(x,-T)}}const l=this.velocity.length(),c=Math.max(.001,this.lastLayerBoostMax-this.lastLayerBaseSpeed*.25),h=G.clamp((l-this.lastLayerBaseSpeed*.25)/c,0,1),u=G.clamp(Math.max(h,this.pulseDriveCharge*.94),0,1);this.speedRatio=G.lerp(this.speedRatio,u,1-Math.exp(-8.5*t));const d=Math.max(0,this.altitudeContext.surfaceAltitude||9999),f=Math.max(200,this.altitudeContext.atmoTopAlt||750),g=d/f;if(this.altitudeContext.hasPlanet&&g<.85&&(this.altitudeContext.submergedRatio||0)<.08&&this.speedRatio>.72){this._shakePhase+=t*58;const _=G.smoothstep(this.speedRatio,.72,1)*(1-G.clamp(g/.85,0,1))*.0042;this._eulerShake.set(Math.sin(this._shakePhase*1.13)*_,Math.cos(this._shakePhase*.89)*_,Math.sin(this._shakePhase*1.47)*_*1.4),this._qShake.setFromEuler(this._eulerShake),this.camera.quaternion.multiply(this._qShake)}const m=G.lerp(this.baseFov,94,Math.pow(this.speedRatio,1.12));Math.abs(this.camera.fov-m)>.03&&(this.camera.fov=G.lerp(this.camera.fov,m,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function Ct(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},a={},r=s[0].morphTargetsRelative,l=new Et;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=od(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);const g=od(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function od(s){let e,t,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*t}const a=new e(o),r=new _t(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const v=h.getComponent(d,g);r.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(r.gpuType=i),r}function ad(s,e){if(e===yp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===zc||e===tf){let t=s.getIndex();if(t===null){const a=[],r=s.getAttribute("position");if(r!==void 0){for(let l=0;l<r.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===zc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class pM extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _M(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new LM(t)})}load(e,t,n,i){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=xa.extractUrlBase(e);a=xa.resolveURL(c,this.path)}else a=xa.extractUrlBase(e);this.manager.itemStart(e);const r=function(c){i?i(c):console.error(c),o.manager.itemError(e),o.manager.itemEnd(e)},l=new kr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{o.parse(c,a,function(h){t(h),o.manager.itemEnd(e)},r)}catch(h){r(h)}},n,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let o;const a={},r={},l=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Df){try{a[Gt.KHR_BINARY_GLTF]=new NM(e)}catch(u){i&&i(u);return}o=JSON.parse(a[Gt.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new YM(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[u.name]=u,a[u.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){const u=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(u){case Gt.KHR_MATERIALS_UNLIT:a[u]=new vM;break;case Gt.KHR_DRACO_MESH_COMPRESSION:a[u]=new UM(o,this.dracoLoader);break;case Gt.KHR_TEXTURE_TRANSFORM:a[u]=new FM;break;case Gt.KHR_MESH_QUANTIZATION:a[u]=new OM;break;default:d.indexOf(u)>=0&&r[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(r),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,o){n.parse(e,t,i,o)})}}function mM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gM{constructor(e){this.parser=e,this.name=Gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const o=t.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let c;const h=new ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new va(h),c.distance=u;break;case"spot":c=new z_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ts(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],r=(o.extensions&&o.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(l){return n._getNodeRef(t.cache,r,l)})}}class vM{constructor(){this.name=Gt.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(e,t,n){const i=[];e.color=new ne(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kn),e.opacity=a[3]}o.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",o.baseColorTexture,Zt))}return Promise.all(i)}}class xM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const r=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(o)}}class MM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class yM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class bM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const r=a.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Kn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Zt)),a.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class SM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class wM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const r=a.attenuationColor||[1,1,1];return t.attenuationColor=new ne().setRGB(r[0],r[1],r[2],Kn),Promise.all(o)}}class AM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const r=a.specularColorFactor||[1,1,1];return t.specularColor=new ne().setRGB(r[0],r[1],r[2],Kn),a.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Zt)),Promise.all(o)}}class TM{constructor(e){this.parser=e,this.name=Gt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}}class CM{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class PM{constructor(e){this.parser=e,this.name=Gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const o=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}}class RM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],r=i.images[a.source];let l=n.textureLoader;if(r.uri){const c=n.options.manager.getHandler(r.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],r=i.images[a.source];let l=n.textureLoader;if(r.uri){const c=n.options.manager.getHandler(r.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class IM{constructor(e){this.name=Gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],o=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(r){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(r,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class LM{constructor(e){this.name=Gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==xi.TRIANGLES&&c.mode!==xi.TRIANGLE_STRIP&&c.mode!==xi.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,r=[],l={};for(const c in a)r.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return r.length<1?null:(r.push(this.parser.createNodeMesh(e)),Promise.all(r).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new ot,m=new b,p=new ut,_=new b(1,1,1),y=new bt(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(m,p,_));for(const x in l)if(x==="_COLOR_0"){const T=l[x];y.instanceColor=new qc(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);qt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Df="glTF",ra=12,rd={JSON:1313821514,BIN:5130562};class NM{constructor(e){this.name=Gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Df)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ra,o=new DataView(e,ra);let a=0;for(;a<i;){const r=o.getUint32(a,!0);a+=4;const l=o.getUint32(a,!0);if(a+=4,l===rd.JSON){const c=new Uint8Array(e,ra+a,r);this.content=n.decode(c)}else if(l===rd.BIN){const c=ra+a;this.body=e.slice(c,c+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,r={},l={},c={};for(const h in a){const u=Kc[h]||h.toLowerCase();r[u]=a[h]}for(const h in e.attributes){const u=Kc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ro[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",o).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},r,c,Kn,d)})})}}class FM{constructor(){this.name=Gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OM{constructor(){this.name=Gt.KHR_MESH_QUANTIZATION}}class If extends Ca{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[o+a];return t}interpolate_(e,t,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=r*2,c=r*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+u;for(let x=0;x!==r;x++){const T=a[v+x+r],w=a[v+x+l]*h,E=a[g+x+r],A=a[g+x]*h;o[x]=_*T+y*w+m*E+p*A}return o}}const kM=new ut;class BM extends If{interpolate_(e,t,n,i){const o=super.interpolate_(e,t,n,i);return kM.fromArray(o).normalize().toArray(o),o}}const xi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ro={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ld={9728:Rn,9729:fi,9984:Xd,9985:wr,9986:la,9987:is},cd={33071:Li,33648:Nr,10497:Wn},Hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zM={CUBICSPLINE:void 0,LINEAR:ba,STEP:ya},Vl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Be({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),s.DefaultMaterial}function Os(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ts(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HM(s,e,t){let n=!1,i=!1,o=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(o=!0),n&&i&&o)break}if(!n&&!i&&!o)return Promise.resolve(s);const a=[],r=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;r.push(d)}if(o){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),o&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function VM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WM(s){let e;const t=s.extensions&&s.extensions[Gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wl(t.attributes):e=s.indices+":"+Wl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Wl(s.targets[n]);return e}function Wl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Zc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const qM=new ot;class YM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,o=!1,a=-1;if(typeof navigator<"u"){const r=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(r)===!0;const l=r.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,o=r.indexOf("Firefox")>-1,a=o?r.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||o&&a<98?this.textureLoader=new O_(this.options.manager):this.textureLoader=new V_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const r={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Os(o,r,i),ts(r,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(r)})).then(function(){for(const l of r.scenes)l.updateMatrixWorld();e(r)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,o=t.length;i<o;i++){const a=t[i].joints;for(let r=0,l=a.length;r<l;r++)e[a[r]].isBone=!0}for(let i=0,o=e.length;i<o;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),o=(a,r)=>{const l=this.associations.get(a);l!=null&&this.associations.set(r,l);for(const[c,h]of a.children.entries())o(h,r.children[c])};return o(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const o=e(t[i]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":i=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(o,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(o,a){n.load(xa.resolveURL(t.uri,i.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Hl[i.type],r=Ro[i.componentType],l=i.normalized===!0,c=new r(i.count*a);return Promise.resolve(new _t(c,a,l))}const o=[];return i.bufferView!==void 0?o.push(this.getDependency("bufferView",i.bufferView)):o.push(null),i.sparse!==void 0&&(o.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(o).then(function(a){const r=a[0],l=Hl[i.type],c=Ro[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(_);y||(v=new c(r,p*f,i.count*f/h),y=new fh(v,f/h),t.cache.add(_,y)),m=new Ks(y,l,d%f/h,g)}else r===null?v=new c(i.count*l):v=new c(r,d,i.count*l),m=new _t(v,l,g);if(i.sparse!==void 0){const p=Hl.SCALAR,_=Ro[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new _(a[1],y,i.sparse.count*p),w=new c(a[2],x,i.sparse.count*l);r!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,A=T.length;E<A;E++){const M=T[E];if(m.setX(M,w[E*l]),l>=2&&m.setY(M,w[E*l+1]),l>=3&&m.setZ(M,w[E*l+2]),l>=4&&m.setW(M,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,a=t.images[o];let r=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(r=l)}return this.loadTextureImage(e,o,r)}loadTextureImage(e,t,n){const i=this,o=this.json,a=o.textures[e],r=o.images[t],l=(r.uri||r.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||r.name||"",h.name===""&&typeof r.uri=="string"&&r.uri.startsWith("data:image/")===!1&&(h.name=r.uri);const d=(o.samplers||{})[a.sampler]||{};return h.magFilter=ld[d.magFilter]||fi,h.minFilter=ld[d.minFilter]||is,h.wrapS=cd[d.wrapS]||Wn,h.wrapT=cd[d.wrapT]||Wn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rn&&h.minFilter!==fi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],r=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=r.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Cn(v);m.needsUpdate=!0,d(m)}),t.load(xa.resolveURL(u,o.path),g,void 0,f)})}).then(function(u){return c===!0&&r.revokeObjectURL(l),ts(u,a),u.userData.mimeType=a.mimeType||XM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const o=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),o.extensions[Gt.KHR_TEXTURE_TRANSFORM]){const r=n.extensions!==void 0?n.extensions[Gt.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const l=o.associations.get(a);a=o.extensions[Gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,r),o.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const r="PointsMaterial:"+n.uuid;let l=this.cache.get(r);l||(l=new Ai,Si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(r,l)),n=l}else if(e.isLine){const r="LineBasicMaterial:"+n.uuid;let l=this.cache.get(r);l||(l=new Vs,Si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(r,l)),n=l}if(i||o||a){let r="ClonedMaterial:"+n.uuid+":";i&&(r+="derivative-tangents:"),o&&(r+="vertex-colors:"),a&&(r+="flat-shading:");let l=this.cache.get(r);l||(l=n.clone(),o&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(r,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Be}loadMaterial(e){const t=this,n=this.json,i=this.extensions,o=n.materials[e];let a;const r={},l=o.extensions||{},c=[];if(l[Gt.KHR_MATERIALS_UNLIT]){const u=i[Gt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(r,o,t))}else{const u=o.pbrMetallicRoughness||{};if(r.color=new ne(1,1,1),r.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;r.color.setRGB(d[0],d[1],d[2],Kn),r.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(r,"map",u.baseColorTexture,Zt)),r.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,r.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(r,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(r,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,r)})))}o.doubleSided===!0&&(r.side=It);const h=o.alphaMode||Vl.OPAQUE;if(h===Vl.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,h===Vl.MASK&&(r.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==fn&&(c.push(t.assignTexture(r,"normalMap",o.normalTexture)),r.normalScale=new Oe(1,1),o.normalTexture.scale!==void 0)){const u=o.normalTexture.scale;r.normalScale.set(u,u)}if(o.occlusionTexture!==void 0&&a!==fn&&(c.push(t.assignTexture(r,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==fn){const u=o.emissiveFactor;r.emissive=new ne().setRGB(u[0],u[1],u[2],Kn)}return o.emissiveTexture!==void 0&&a!==fn&&c.push(t.assignTexture(r,"emissiveMap",o.emissiveTexture,Zt)),Promise.all(c).then(function(){const u=new a(r);return o.name&&(u.name=o.name),ts(u,o),t.associations.set(u,{materials:e}),o.extensions&&Os(i,u,o),u})}createUniqueName(e){const t=an.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function o(r){return n[Gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,t).then(function(l){return hd(l,r,t)})}const a=[];for(let r=0,l=e.length;r<l;r++){const c=e[r],h=WM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Gt.KHR_DRACO_MESH_COMPRESSION]?d=o(c):d=hd(new Et,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,o=n.meshes[e],a=o.primitives,r=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?GM(this.cache):this.getDependency("material",a[l].material);r.push(h)}return r.push(t.loadGeometries(a)),Promise.all(r).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const _=c[f];if(m.mode===xi.TRIANGLES||m.mode===xi.TRIANGLE_STRIP||m.mode===xi.TRIANGLE_FAN||m.mode===void 0)p=o.isSkinnedMesh===!0?new o_(v,_):new Ge(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xi.TRIANGLE_STRIP?p.geometry=ad(p.geometry,tf):m.mode===xi.TRIANGLE_FAN&&(p.geometry=ad(p.geometry,zc));else if(m.mode===xi.LINES)p=new bf(v,_);else if(m.mode===xi.LINE_STRIP)p=new Kr(v,_);else if(m.mode===xi.LINE_LOOP)p=new Dr(v,_);else if(m.mode===xi.POINTS)p=new Ei(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&VM(p,o),p.name=t.createUniqueName(o.name||"mesh_"+e),ts(p,o),m.extensions&&Os(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return o.extensions&&Os(i,u[0],o),u[0];const d=new Nt;o.extensions&&Os(i,d,o),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Hn(G.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ts(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,o=t.joints.length;i<o;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const o=i.pop(),a=i,r=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){r.push(u);const d=new ot;o!==null&&d.fromArray(o.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ph(r,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],o=i.name?i.name:"animation_"+e,a=[],r=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),r.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],T=f[_],w=g[_],E=v[_],A=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,T,w,E,A);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new R_(o,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(o){const a=n._getNodeRef(n.meshCache,i.mesh,o);return i.weights!==void 0&&a.traverse(function(r){if(r.isMesh)for(let l=0,c=i.weights.length;l<c;l++)r.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],o=n._loadNodeShallow(e),a=[],r=i.children||[];for(let c=0,h=r.length;c<h;c++)a.push(n.getDependency("node",r[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([o,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],a=o.name?i.createUniqueName(o.name):"",r=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&r.push(l),o.camera!==void 0&&r.push(i.getDependency("camera",o.camera).then(function(c){return i._getNodeRef(i.cameraCache,o.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){r.push(c)}),this.nodeCache[e]=Promise.all(r).then(function(c){let h;if(o.isBone===!0?h=new yf:c.length>1?h=new Nt:c.length===1?h=c[0]:h=new qt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(o.name&&(h.userData.name=o.name,h.name=a),ts(h,o),o.extensions&&Os(n,h,o),o.matrix!==void 0){const u=new ot;u.fromArray(o.matrix),h.applyMatrix4(u)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,o=new Nt;n.name&&(o.name=i.createUniqueName(n.name)),ts(o,n),n.extensions&&Os(t,o,n);const a=n.nodes||[],r=[];for(let l=0,c=a.length;l<c;l++)r.push(i.getDependency("node",a[l]));return Promise.all(r).then(function(l){for(let h=0,u=l.length;h<u;h++)o.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Si||d instanceof Cn)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(o),o})}_createAnimationTracks(e,t,n,i,o){const a=[],r=e.name?e.name:e.uuid,l=[];gs[o.path]===gs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(r);let c;switch(gs[o.path]){case gs.weights:c=ko;break;case gs.rotation:c=Bo;break;case gs.position:case gs.scale:c=zo;break;default:switch(n.itemSize){case 1:c=ko;break;case 2:case 3:default:c=zo;break}break}const h=i.interpolation!==void 0?zM[i.interpolation]:ba,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+gs[o.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Zc(t.constructor),i=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=t[o]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Bo?BM:If;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jM(s,e,t){const n=e.attributes,i=new rs;if(n.POSITION!==void 0){const r=t.json.accessors[n.POSITION],l=r.min,c=r.max;if(l!==void 0&&c!==void 0){if(i.set(new b(l[0],l[1],l[2]),new b(c[0],c[1],c[2])),r.normalized){const h=Zc(Ro[r.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const r=new b,l=new b;for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Zc(Ro[d.componentType]);l.multiplyScalar(v)}r.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(r)}s.boundingBox=i;const a=new ni;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function hd(s,e,t){const n=e.attributes,i=[];function o(a,r){return t.getDependency("accessor",a).then(function(l){s.setAttribute(r,l)})}for(const a in n){const r=Kc[a]||a.toLowerCase();r in s.attributes||i.push(o(n[a],r))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(r){s.setIndex(r)});i.push(a)}return zt.workingColorSpace!==Kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zt.workingColorSpace}" not supported.`),ts(s,e),jM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?HM(s,e.targets,t):s})}const Xl=new WeakMap;class KM extends Qs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const o=new kr(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Zt,n).catch(n)}decodeDracoFile(e,t,n,i,o=Kn,a=()=>{}){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:o};return this.decodeGeometry(e,r).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Xl.has(e)){const l=Xl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const o=this.workerNextTaskID++,a=e.byteLength,r=this._getWorker(o,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[o]={resolve:c,reject:h},i.postMessage({type:"decode",id:o,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return r.catch(()=>!0).then(()=>{i&&o&&this._releaseTask(i,o)}),Xl.set(e,{key:n,promise:r}),r}_createGeometry(e){const t=new Et;e.index&&t.setIndex(new _t(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],o=i.name,a=i.array,r=i.itemSize,l=new _t(a,r);o==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(o,l)}return t}_assignVertexColorSpace(e,t){if(t!==Zt)return;const n=new ne;for(let i=0,o=e.count;i<o;i++)n.fromBufferAttribute(e,i),zt.toWorkingColorSpace(n,Zt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new kr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,o)=>{n.load(e,i,void 0,o)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const o=ZM.toString(),a=["/* draco decoder */",i,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(o){const a=o.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,o){return i._taskLoad>o._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function ZM(){let s,e;onmessage=function(a){const r=a.data;switch(r.type){case"init":s=r.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=r.buffer,c=r.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(v=>v.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:r.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:r.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,r,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=r.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=r.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=r.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let _,y;if(c.useUniqueIDs)y=h[m],_=r.GetAttributeByUniqueId(d,y);else{if(y=r.GetAttributeId(d,a[h[m]]),y===-1)continue;_=r.GetAttribute(d,y)}const x=i(a,r,d,m,p,_);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),v.attributes.push(x)}return g===a.TRIANGULAR_MESH&&(v.index=n(a,r,d)),a.destroy(d),v}function n(a,r,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);r.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,r,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,v=g*h.BYTES_PER_ELEMENT,m=o(a,h),p=a._malloc(v);r.GetAttributeDataArrayForAllPoints(l,u,m,v,p);const _=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:c,array:_,itemSize:d}}function o(a,r){switch(r){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class Qr extends Ge{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,o=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,r=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new b(.70707,.70707,0),u=new ne(t.sunColor!==void 0?t.sunColor:16777215),d=new ne(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new b(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:wi,m=t.fog!==void 0?t.fog:!1,p=new _s,_=new b,y=new b,x=new b,T=new ot,w=new b(0,0,-1),E=new $t,A=new b,M=new b,S=new $t,C=new ot,R=new Hn,L=new si(i,o),P={name:"MirrorShader",uniforms:Ni.merge([qe.fog,qe.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ot},sunColor:{value:new ne(8355711)},sunDirection:{value:new b(.70707,.70707,0)},eye:{value:new b},waterColor:{value:new ne(5592405)}}]),vertexShader:`
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
				}`},F=new rn({name:P.name,uniforms:Ni.clone(P.uniforms),vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,lights:!0,side:v,fog:m});F.uniforms.mirrorSampler.value=L.texture,F.uniforms.textureMatrix.value=C,F.uniforms.alpha.value=r,F.uniforms.time.value=l,F.uniforms.normalSampler.value=c,F.uniforms.sunColor.value=u,F.uniforms.waterColor.value=d,F.uniforms.sunDirection.value=h,F.uniforms.distortionScale.value=g,F.uniforms.eye.value=f,n.material=F,n.onBeforeRender=function(z,k,U){if(y.setFromMatrixPosition(n.matrixWorld),x.setFromMatrixPosition(U.matrixWorld),T.extractRotation(n.matrixWorld),_.set(0,0,1),_.applyMatrix4(T),A.subVectors(y,x),A.dot(_)>0)return;A.reflect(_).negate(),A.add(y),T.extractRotation(U.matrixWorld),w.set(0,0,-1),w.applyMatrix4(T),w.add(x),M.subVectors(y,w),M.reflect(_).negate(),M.add(y),R.position.copy(A),R.up.set(0,1,0),R.up.applyMatrix4(T),R.up.reflect(_),R.lookAt(M),R.far=U.far,R.updateMatrixWorld(),R.projectionMatrix.copy(U.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(R.projectionMatrix),C.multiply(R.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(_,y),p.applyMatrix4(R.matrixWorldInverse),E.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const N=R.projectionMatrix;S.x=(Math.sign(E.x)+N.elements[8])/N.elements[0],S.y=(Math.sign(E.y)+N.elements[9])/N.elements[5],S.z=-1,S.w=(1+N.elements[10])/N.elements[14],E.multiplyScalar(2/E.dot(S)),N.elements[2]=E.x,N.elements[6]=E.y,N.elements[10]=E.z+1-a,N.elements[14]=E.w,f.setFromMatrixPosition(U.matrixWorld);const X=z.getRenderTarget(),oe=z.xr.enabled,te=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget(L),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(k,R),n.visible=!0,z.xr.enabled=oe,z.shadowMap.autoUpdate=te,z.setRenderTarget(X);const we=U.viewport;we!==void 0&&z.state.viewport(we)}}}class wa extends Ge{constructor(){super(wa.Geometry,new fn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new b,t=new b,n=new ju(16,16),i=new ju(16,16);let o=Oi;const a=wa.Geometry,r=new Ir({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new Ir({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new Ge(a,r),h=[],u=yh.Shader,d=new Ir({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new ne(16777215)},scale:{value:new Oe},screenPosition:{value:new b}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Tn,transparent:!0,depthWrite:!1}),f=new Ge(a,d);this.addElement=function(_){h.push(_)};const g=new Oe,v=new Oe,m=new eM,p=new $t;this.onBeforeRender=function(_,y,x){_.getCurrentViewport(p);const T=_.getRenderTarget(),w=T!==null?T.texture.type:Oi;o!==w&&(n.dispose(),i.dispose(),n.type=i.type=w,o=w);const E=p.w/p.z,A=p.z/2,M=p.w/2;let S=16/p.w;if(g.set(S*E,S),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(x.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(x.projectionMatrix),v.x=p.x+e.x*A+A-8,v.y=p.y+e.y*M+M-8,m.containsPoint(v))){_.copyFramebufferToTexture(n,v);let C=r.uniforms;C.scale.value=g,C.screenPosition.value=e,_.renderBufferDirect(x,null,a,r,c,null),_.copyFramebufferToTexture(i,v),C=l.uniforms,C.scale.value=g,C.screenPosition.value=e,_.renderBufferDirect(x,null,a,l,c,null);const R=-e.x*2,L=-e.y*2;for(let P=0,F=h.length;P<F;P++){const z=h[P],k=d.uniforms;k.color.value.copy(z.color),k.map.value=z.texture,k.screenPosition.value.x=e.x+R*z.distance,k.screenPosition.value.y=e.y+L*z.distance,S=z.size/p.w;const U=p.w/p.z;k.scale.value.set(S*U,S),d.uniformsNeedUpdate=!0,_.renderBufferDirect(x,null,a,d,f,null)}}},this.dispose=function(){r.dispose(),l.dispose(),d.dispose(),n.dispose(),i.dispose();for(let _=0,y=h.length;_<y;_++)h[_].texture.dispose()}}}class yh{constructor(e,t=1,n=0,i=new ne(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}yh.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};wa.Geometry=(function(){const s=new Et,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new fh(e,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new Ks(t,3,0,!1)),s.setAttribute("uv",new Ks(t,2,3,!1)),s})();function _i(s,e,t=0){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function as(s,e,t,n=0){const i=s*t,o=e*t,a=Math.floor(i),r=Math.floor(o),l=i-a,c=o-r,h=l*l*(3-2*l),u=c*c*(3-2*c),d=(a%t+t)%t,f=(d+1)%t,g=(r%t+t)%t,v=(g+1)%t,m=_i(d,g,n),p=_i(f,g,n),_=_i(d,v,n),y=_i(f,v,n);return m+(p-m)*h+(_+(y-_)*h-(m+(p-m)*h))*u}function Ts(s,e,t=8,n=4,i=0){let o=0,a=.5,r=t,l=0;for(let c=0;c<n;c++)o+=a*as(s,e,r,i+c*31),l+=a,a*=.5,r*=2;return o/Math.max(1e-5,l)}function Jr(s,e,t=8,n=4,i=100){let o=0,a=.5,r=t,l=0;for(let c=0;c<n;c++){const h=1-Math.abs(as(s,e,r,i+c*37)*2-1);o+=a*(h*h),l+=a,a*=.5,r*=2}return o/Math.max(1e-5,l)}function ws(s,e){if(typeof document>"u")return null;const t=document.createElement("canvas");return t.width=s,t.height=e,t}function Lr(s,e=!0,t=4){return s.colorSpace=e?Zt:Gi,s.wrapS=Wn,s.wrapT=Wn,s.repeat.set(t,t),s.anisotropy=8,s.needsUpdate=!0,s}const bn=new Map;function Ra(s,e,t){const n=ws(s,s),i=ws(s,s),o=ws(s,s);if(!n||!i||!o)return{map:null,roughnessMap:null,bumpMap:null};const a=n.getContext("2d"),r=i.getContext("2d"),l=o.getContext("2d"),c=a.createImageData(s,s),h=r.createImageData(s,s),u=l.createImageData(s,s),d=c.data,f=h.data,g=u.data,v={r:128,g:128,b:128,rough:.85,bump:.5};for(let m=0;m<s;m++){const p=(m+.5)/s;for(let _=0;_<s;_++){const y=(_+.5)/s;t(y,p,_,m,v);const x=(m*s+_)*4;d[x]=Math.min(255,Math.max(0,v.r|0)),d[x+1]=Math.min(255,Math.max(0,v.g|0)),d[x+2]=Math.min(255,Math.max(0,v.b|0)),d[x+3]=255;const T=Math.min(255,Math.max(0,Math.round(v.rough*255)));f[x]=T,f[x+1]=T,f[x+2]=T,f[x+3]=255;const w=Math.min(255,Math.max(0,Math.round(v.bump*255)));g[x]=w,g[x+1]=w,g[x+2]=w,g[x+3]=255}}return a.putImageData(c,0,0),r.putImageData(h,0,0),l.putImageData(u,0,0),{map:Lr(new pn(n),!0,e),roughnessMap:Lr(new pn(i),!1,e),bumpMap:Lr(new pn(o),!1,e)}}function $M(){if(bn.has("asphalt"))return bn.get("asphalt");const s=Ra(512,6,(e,t,n,i,o)=>{const a=as(e,t,128,3),r=Ts(e,t,8,4,17),l=1-Math.pow(Jr(e,t,6,3,73),3),c=Math.max(0,Math.min(1,(r-.56)*4.2)),h=Math.abs(e-.5)<.014&&Math.floor(t*16)%2===0,u=Math.abs(e-.09)<.011||Math.abs(e-.91)<.011,d=h||u?.62*(.5+.5*a):0;let f=26+a*18+r*16-l*14;f*=1-c*.24,o.r=f+d*145,o.g=f+d*122,o.b=f*1.08+d*70,o.rough=.88-c*.63-a*.04,o.bump=Math.max(0,Math.min(1,.5+(a-.5)*.42-l*.35-c*.15))});return bn.set("asphalt",s),s}function Lf(){if(bn.has("concrete"))return bn.get("concrete");const s=Ra(512,2,(e,t,n,i,o)=>{const a=Ts(e,t,16,4,29),r=as(e,t,96,11),l=i%32<2?1:0,c=n%64<2?.7:0,h=n%32>13&&n%32<17&&i%32>13&&i%32<17?1:0,u=as(e,t*.25,24,53),d=Math.max(0,(u-.55)*1.8),f=110+(a-.5)*32+(r-.5)*16-l*38-c*26-h*36-d*28;o.r=f+d*14,o.g=f+d*4,o.b=f*1.03-d*6,o.rough=Math.max(.78,Math.min(.95,.88+(a-.5)*.12-d*.08+l*.05)),o.bump=Math.max(0,Math.min(1,.56+(r-.5)*.28+(a-.5)*.24-l*.38-h*.35))});return bn.set("concrete",s),s}function qo(){if(bn.has("rock"))return bn.get("rock");const s=Ra(512,8,(e,t,n,i,o)=>{const a=Ts(e*.7+Ts(e,t,4,2,9)*.18,t*2.2,6,4,41),r=Jr(e,t,6,4,91),l=as(e,t,96,19),c=165+(a-.5)*58-Math.pow(r,2.2)*52+(l-.5)*26;o.r=c,o.g=c*.98,o.b=c*.96,o.rough=Math.max(.7,Math.min(.96,.86+(l-.5)*.14-r*.1)),o.bump=Math.max(0,Math.min(1,.5+(a-.5)*.45-r*.32+(l-.5)*.22))});return bn.set("rock",s),s}function el(){if(bn.has("terrain"))return bn.get("terrain");const s=Ra(512,64,(e,t,n,i,o)=>{const a=Ts(e,t,8,4,61),r=as(e,t,96,23),l=Jr(e,t,10,3,131),c=205+(a-.5)*44+(r-.5)*28-l*18;o.r=c,o.g=c,o.b=c,o.rough=Math.max(.62,Math.min(.96,.86+(a-.5)*.16-l*.14)),o.bump=Math.max(0,Math.min(1,.52+(a-.5)*.36+(r-.5)*.34-l*.2))});return bn.set("terrain",s),s}function bh(){if(bn.has("bark"))return bn.get("bark");const s=Ra(512,2,(e,t,n,i,o)=>{const a=Ts(e*2,t*.65,6,3,211)*.12,r=Jr((e*1.4+a+1)%1,t*.35%1,12,3,223),l=as(e,t,64,241),c=175+(l-.5)*38-Math.pow(r,1.8)*58;o.r=c*1.02,o.g=c*.94,o.b=c*.84,o.rough=Math.max(.78,Math.min(.97,.88+r*.08+(l-.5)*.06)),o.bump=Math.max(0,Math.min(1,.55-r*.44+(l-.5)*.24))});return s.map&&(s.map.repeat.set(2,4),s.roughnessMap.repeat.set(2,4),s.bumpMap.repeat.set(2,4)),bn.set("bark",s),s}function gr(s,e=!0){return s.colorSpace=e?Zt:Gi,s.wrapS=Li,s.wrapT=Li,s.anisotropy=8,s.needsUpdate=!0,s}function ql(s,e){const t=ws(s,s),n=ws(s,s),i=ws(s,s),o=ws(s,s);if(!t||!n||!i||!o)return{map:null,alphaMap:null,roughnessMap:null,emissiveMap:null};const a=t.getContext("2d"),r=n.getContext("2d"),l=i.getContext("2d"),c=o.getContext("2d"),h=a.createImageData(s,s),u=r.createImageData(s,s),d=l.createImageData(s,s),f=c.createImageData(s,s),g=h.data,v=u.data,m=d.data,p=f.data,_={r:170,g:205,b:165,a:0,rough:.68,emR:0,emG:0,emB:0};for(let y=0;y<s;y++){const x=1-(y+.5)/s;for(let T=0;T<s;T++){const w=(T+.5)/s;e(w,x,_);const E=(y*s+T)*4,A=Math.min(255,Math.max(0,Math.round(_.a*255)));g[E]=Math.min(255,Math.max(0,Math.round(_.r))),g[E+1]=Math.min(255,Math.max(0,Math.round(_.g))),g[E+2]=Math.min(255,Math.max(0,Math.round(_.b))),g[E+3]=A,v[E]=A,v[E+1]=A,v[E+2]=A,v[E+3]=255;const M=Math.min(255,Math.max(0,Math.round(_.rough*255)));m[E]=M,m[E+1]=M,m[E+2]=M,m[E+3]=255;const S=_.a>=.45?1:0;p[E]=Math.min(255,Math.max(0,Math.round(_.emR*S))),p[E+1]=Math.min(255,Math.max(0,Math.round(_.emG*S))),p[E+2]=Math.min(255,Math.max(0,Math.round(_.emB*S))),p[E+3]=255}}return a.putImageData(h,0,0),r.putImageData(u,0,0),l.putImageData(d,0,0),c.putImageData(f,0,0),{map:gr(new pn(t),!0),alphaMap:gr(new pn(n),!1),roughnessMap:gr(new pn(i),!1),emissiveMap:gr(new pn(o),!0)}}function QM(s,e,t,n,i,o){const a=i-t,r=o-n,l=s-t,c=e-n,h=a*a+r*r+1e-8,u=Math.min(1,Math.max(0,(l*a+c*r)/h));return Math.hypot(s-(t+a*u),e-(n+r*u))}function Nf(){if(bn.has("foliage"))return bn.get("foliage");const s=ql(512,(r,l,c)=>{const h=.5+.022*Math.sin(l*Math.PI),u=r-h,d=Math.abs(u),f=.015*(1-l*.72),g=l>=.015&&l<=.96&&d<=f,v=(l-.08)/.89,m=v>0&&v<1?.44*Math.pow(Math.sin(Math.pow(v,.78)*Math.PI),.72):0,p=.94+.06*as(r,l,24,307),_=m*p;let y=!1,x=.78,T=0;if(v>0&&v<1&&d<=_&&d>=f*.65){const w=d/Math.max(.02,_),A=(l-d*(.46+.24*(1-l)))*27+(u>=0?0:.35),M=A-Math.floor(A),S=Math.abs(M-.5)*2,C=.07*Math.sin(d*140),R=Math.max(.08,.78*(1-Math.pow(w,1.45))+C);if(S<=R){y=!0;const L=Math.exp(-Math.pow(S/.16,2)),P=Math.floor(A)+(u>=0?11:37);x=(.82+.18*_i(P,5,19))*(.72+.22*w+.16*L),T=Math.max(0,(w-.65)/.35)+L*.45}}if(g){const w=1-d/Math.max(.001,f);c.r=165+w*35,c.g=192+w*30,c.b=128+w*25,c.a=1,c.rough=.58,c.emR=140*w,c.emG=235*w,c.emB=210*w}else if(y){c.r=178*x,c.g=224*x,c.b=164*x,c.a=1,c.rough=.66-Math.min(.14,T*.1);const w=Math.min(1,T*.85);c.emR=100*w,c.emG=245*w,c.emB=225*w}else c.r=135,c.g=175,c.b=120,c.a=0,c.rough=.72,c.emR=0,c.emG=0,c.emB=0}),e=[[.5,.02,.5,.55],[.5,.28,.28,.54],[.5,.34,.72,.58],[.5,.52,.36,.82],[.5,.55,.65,.84]],t=28,n=[];for(let r=0;r<t;r++){const l=r/t,c=.14+.24*Math.sin(l*Math.PI*.92+.25),h=r*2.39996+(_i(r,3,71)-.5)*.42,u=.5+Math.cos(h)*c*1.15,d=.24+l*.64+(_i(r,9,43)-.5)*.07,f=Math.atan2(d-.26,u-.5)+(_i(r,11,17)-.5)*.55,g=.13+_i(r,7,5)*.075,v=g*(.44+_i(r,13,29)*.16),m=.64+.36*l+(_i(r,4,83)-.5)*.1;n.push({cx:u,cy:d,cosA:Math.cos(f),sinA:Math.sin(f),invLen:1/g,invWid:1/v,maxR:g*1.12,shade:m})}const i=ql(512,(r,l,c)=>{let h=!1,u=.72,d=0,f=0;for(let v=0;v<t;v++){const m=n[v];if(Math.abs(r-m.cx)>m.maxR||Math.abs(l-m.cy)>m.maxR)continue;const p=r-m.cx,_=l-m.cy,y=(p*m.cosA+_*m.sinA)*m.invLen;if(y<-1||y>1)continue;const x=(-p*m.sinA+_*m.cosA)*m.invWid,T=(1-y*y)*(1-.28*Math.max(0,y))+.055*Math.sin(y*22),w=Math.abs(x)/Math.max(.02,T);if(w<=1){h=!0;const E=Math.exp(-Math.pow(Math.abs(x)/.12,2))*(1-Math.max(0,y)*.45),A=Math.max(0,Math.sin((y*4.5-Math.abs(x)*3.8)*Math.PI))*(1-w)*.45;d=Math.max(E,A),f=Math.pow(w,3.2)*.85+Math.max(0,y)*.35,u=m.shade*(.86+.18*(1-w)+.12*E)}}let g=!1;for(let v=0;v<e.length;v++){const m=e[v],p=QM(r,l,m[0],m[1],m[2],m[3]),_=v===0?.015*(1-l*.5):.008;if(p<=_){g=!0;break}}if(h){c.r=182*u,c.g=228*u,c.b=176*u,c.a=1,c.rough=.68-d*.14;const v=Math.min(1,d*.88+f*.58);c.emR=135*v,c.emG=248*v,c.emB=228*v}else g?(c.r=112,c.g=94,c.b=68,c.a=1,c.rough=.88,c.emR=25,c.emG=60,c.emB=55):(c.r=140,c.g=180,c.b=130,c.a=0,c.rough=.72,c.emR=0,c.emG=0,c.emB=0)}),o=ql(512,(r,l,c)=>{const h=.5+.018*Math.sin(l*4.2),u=r-h,d=Math.abs(u),f=.014*(1-l*.78),g=l>=.015&&l<=.96&&d<=f,v=(l-.06)/.9,m=v>0&&v<1?.45*Math.pow(Math.sin(Math.pow(v,.7)*Math.PI),.85):0;let p=!1,_=.8,y=0;if(v>0&&v<1&&d<=m&&d>=f*.55){const x=d/Math.max(.02,m),w=(l-d*(.3+.14*l))*23+(u>=0?0:.45),E=w-Math.floor(w),A=Math.abs(E-.5)*2,M=.14*Math.sin(d*110)*(1-x*.4),S=Math.max(.06,.82*(1-Math.pow(x,1.25))+M);if(A<=S){p=!0;const C=Math.exp(-Math.pow(A/.18,2)),R=Math.pow(A/Math.max(.05,S),2.4);_=(.84+.16*_i(Math.floor(w),8,53))*(.76+.18*C+.12*x),y=Math.min(1,C*.75+R*.65+x*.25)}}g?(c.r=160,c.g=205,c.b=142,c.a=1,c.rough=.6,c.emR=110,c.emG=230,c.emB=185):p?(c.r=176*_,c.g=230*_,c.b=165*_,c.a=1,c.rough=.64,c.emR=95*y,c.emG=248*y,c.emB=195*y):(c.r=132,c.g=178,c.b=122,c.a=0,c.rough=.72,c.emR=0,c.emG=0,c.emB=0)}),a={texPalmFrondAlpha:s,texCanopyBranchAlpha:i,texFernClusterAlpha:o,palm:s,canopy:i,fern:o};return bn.set("foliage",a),a}const Yl=new WeakMap;function $c(s){if(!s)return new Xc({depthPacking:Gc,alphaTest:.45,side:It});if(Yl.has(s))return Yl.get(s);const e=new Xc({depthPacking:Gc,map:s,alphaTest:.45,side:It});return Yl.set(s,e),e}function tl(){if(bn.has("waterNormals"))return bn.get("waterNormals");const s=512,e=ws(s,s);if(!e)return null;const t=e.getContext("2d"),n=t.createImageData(s,s),i=n.data,o=(l,c)=>{const h=Ts(l,c,6,3,301),u=Ts(l*1.5+.3,c*1.5-.2,12,3,419)*.55,d=Math.sin((l*6+c*4)*Math.PI*2)*.08+Math.cos((l*10-c*8)*Math.PI*2)*.05;return h+u+d},a=1/s;for(let l=0;l<s;l++){const c=(l+.5)/s;for(let h=0;h<s;h++){const u=(h+.5)/s,d=(o((u+a)%1,c)-o((u-a+1)%1,c))*2.2,f=(o(u,(c+a)%1)-o(u,(c-a+1)%1))*2.2,g=Math.hypot(-d,-f,1),v=(l*s+h)*4;i[v]=Math.round((-d/g*.5+.5)*255),i[v+1]=Math.round((-f/g*.5+.5)*255),i[v+2]=Math.round((1/g*.5+.5)*255),i[v+3]=255}}t.putImageData(n,0,0);const r=Lr(new pn(e),!1,1);return bn.set("waterNormals",r),r}let jl=null;function JM(){if(jl)return jl;const s=new Uint8Array([205,205,205,255]),e=new jr(s,1,1);return e.wrapS=Wn,e.wrapT=Wn,e.needsUpdate=!0,jl=e,e}function Sh(s,e={}){const t=e.mode||"pandora",n=new ne(e.rockHex??(t==="badlands"?6043174:3883078)),i=new ne(e.peakHex??(t==="badlands"?10251856:13819112)),o=new ne(e.shoreHex??(t==="badlands"?1450540:2895908)),a=e.peakStart??4.8,r=e.peakEnd??9.5,l=e.shoreBand??.65,c=!!e.hasAshFissures,h=e.detailTex||el().map||JM(),u={uPlanetCenter:{value:new b},uPlanetWorldRadius:{value:e.worldRadius??1e3},uRockColor:{value:n},uPeakColor:{value:i},uShoreColor:{value:o},uDetailTex:{value:h},uLavaTime:{value:0}};s.userData.splatUniforms=u;const d=s.onBeforeCompile;return s.onBeforeCompile=(f,g)=>{d&&d(f,g),f.uniforms.uPlanetCenter=u.uPlanetCenter,f.uniforms.uPlanetWorldRadius=u.uPlanetWorldRadius,f.uniforms.uRockColor=u.uRockColor,f.uniforms.uPeakColor=u.uPeakColor,f.uniforms.uShoreColor=u.uShoreColor,f.uniforms.uDetailTex=u.uDetailTex,f.uniforms.uLavaTime=u.uLavaTime;const v=c?`attribute float aAshMask;
varying float vAshMask;
`:"",m=c?`
        vAshMask = aAshMask;`:"";f.vertexShader=`varying vec3 vSplatWorldPos;
varying vec3 vSplatWorldNormal;
varying vec3 vSplatLocalPos;
varying vec3 vSplatLocalNormal;
${v}`+f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vSplatLocalPos = transformed;
        vSplatLocalNormal = objectNormal;
        vSplatWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vSplatWorldNormal = normalize(mat3(modelMatrix) * objectNormal);${m}`);const p=c?`uniform float uLavaTime;
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
`:"",_=c?`
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
          }`:"";let y=`uniform vec3 uPlanetCenter;
uniform float uPlanetWorldRadius;
uniform vec3 uRockColor;
uniform vec3 uPeakColor;
uniform vec3 uShoreColor;
uniform sampler2D uDetailTex;
${p}varying vec3 vSplatWorldPos;
varying vec3 vSplatWorldNormal;
varying vec3 vSplatLocalPos;
varying vec3 vSplatLocalNormal;
`+f.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
          diffuseColor.rgb *= clamp(_detailMul, 0.72, 1.28);${_}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
          roughnessFactor = mix(roughnessFactor, 0.22, _shoreRoughMask * 0.85);`);c&&(y=y.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          if (_vorCrackGlow > 0.002) {
            float _magmaPulse = 0.86 + 0.14 * sin(uLavaTime * 2.1 + vSplatLocalPos.x * 16.0 + vSplatLocalPos.z * 13.0);
            vec3 _magmaCol = mix(vec3(1.15, 0.18, 0.02), vec3(2.35, 0.92, 0.16), clamp(_vorCrackCore * 1.2, 0.0, 1.0));
            totalEmissiveRadiance += _magmaCol * _vorCrackGlow * _magmaPulse;
          }`)),f.fragmentShader=y},s.customProgramCacheKey=()=>`terrainSplat_${t}_${a}_${c?"ashvor":"std"}_triplanar2`,u}const ey={name:"RadialMotionBlurShader",uniforms:{tDiffuse:{value:null},uBlurStrength:{value:0}},vertexShader:`
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
  `};function ty(){const s=new Vn(8.5,22,32,8,!0);s.rotateX(-Math.PI*.5);const e={uTime:{value:0},uOpacity:{value:0},uColor:{value:new ne(13430527)}},t=new rn({uniforms:e,vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Tn,side:It}),n=new Ge(s,t);return n.name="Mach_Supersonic_Shockwave_Cone",n.position.set(0,-.35,-10.5),n.visible=!1,n.frustumCulled=!1,n.userData.skipSSAO=!0,{mesh:n,uniforms:e}}const ua=new b(0,1,0),je=.45;function Ms(s,e,t){return Math.max(e,Math.min(t,s))}function Bi(s,e,t){const n=Ms((t-s)/(e-s),0,1);return n*n*(3-2*n)}function Jn(s,e){const t=Math.hypot(s,e);if(t<1e-6)return new b(0,1,0);const n=Math.sin(t)/t;return new b(s*n,Math.cos(t),-e*n).normalize()}function ny(s,e,t){const n=Math.hypot(s,t),i=Math.atan2(n,Ms(e,-1,1)),o=n>1e-6?i/n:0;return{ax:s*o,ay:-t*o,theta:i}}const Do=[{id:"city_center",name:"City Center · Corpo Plaza",shortName:"Corpo Plaza",badge:"NÚCLEO CORPORATIVO",color:"#2eb8ff",accent:"#ffd068",mapAx:.02,mapAy:0,ax:.02*je,ay:0*je,capDir:Jn(.02*je,0),viewAlt:.145,viewBack:.165,description:"Centro neurálgico con Corpo Plaza, monolitos Neomilitaristas (Arasaka/Militech), torres Neokitsch y hologramas Koi en niebla azul clínica.",atmo:{fogDay:2247272,fogNight:464422,fogDusk:4725304,fogDensity:.0046,hemiSky:1985648,hemiGround:1055786,ambient:1058877,localLight:3721471,localBounce:15116344,bloomCap:.5}},{id:"watson",name:"Watson · Little China / Northside",shortName:"Watson",badge:"MEGAEDIFICIOS Y PUERTO",color:"#ff3450",accent:"#00e5ff",mapAx:-.05,mapAy:.34,ax:-.05*je,ay:.34*je,capDir:Jn(-.05*je,.34*je),viewAlt:.125,viewBack:.145,description:"Norte de Night City: megaedificios mate H10, bloques apilados en Little China/Kabuki con carteles bajos puntuales y muelles en Northside.",atmo:{fogDay:2897480,fogNight:1116950,fogDusk:5380140,fogDensity:.0054,hemiSky:2504781,hemiGround:2101270,ambient:1580072,localLight:16726872,localBounce:1758955,bloomCap:.5}},{id:"westbrook",name:"Westbrook · Japantown / North Oak",shortName:"Westbrook",badge:"OCIO Y COLINAS ALTAS",color:"#e058ff",accent:"#fff0d8",mapAx:.36,mapAy:.16,ax:.36*je,ay:.16*je,capDir:Jn(.36*je,.16*je),viewAlt:.135,viewBack:.155,description:"Este metropolitano en 3 niveles: neón selectivo en Japantown, terrazas blancas en Charter Hill y mansiones limpias en North Oak.",atmo:{fogDay:5533320,fogNight:726568,fogDusk:7025244,fogDensity:.0024,hemiSky:5008268,hemiGround:2629676,ambient:2372680,localLight:15235327,localBounce:16768936,bloomCap:.45}},{id:"heywood",name:"Heywood · The Glen / Vista del Rey",shortName:"Heywood",badge:"DISTRITO SUR · DORADO",color:"#ffb03b",accent:"#ffd884",mapAx:.02,mapAy:-.31,ax:.02*je,ay:-.31*je,capDir:Jn(.02*je,-.31*je),viewAlt:.125,viewBack:.145,description:"Sur de City Center frente a la bahía: torres escalonadas en The Glen/Wellsprings y tejados bajos cálidos en Vista del Rey.",atmo:{fogDay:5916200,fogNight:1708552,fogDusk:8011808,fogDensity:.004,hemiSky:6442544,hemiGround:2891020,ambient:2826258,localLight:16757575,localBounce:14253604,bloomCap:.46}},{id:"santo_domingo",name:"Santo Domingo · Arroyo / Rancho Coronado",shortName:"Santo Domingo",badge:"INDUSTRIA Y SUBURBIOS",color:"#ff7a2e",accent:"#9aa0a8",mapAx:.39,mapAy:-.37,ax:.39*je,ay:-.37*je,capDir:Jn(.39*je,-.37*je),viewAlt:.115,viewBack:.145,description:"Sureste industrial pesado: complejos fabriles, tuberías y refinerías en Arroyo junto al suburbio cuadriculado de Rancho Coronado sin neón.",atmo:{fogDay:6571052,fogNight:1904904,fogDusk:8537116,fogDensity:.0056,hemiSky:6439468,hemiGround:2627598,ambient:2891284,localLight:16745522,localBounce:7225894,bloomCap:.44}},{id:"pacifica",name:"Pacifica · Coastview / Dogtown",shortName:"Pacifica",badge:"ZONA EN RUINAS · OSCURA",color:"#7e8c9e",accent:"#ff5228",mapAx:-.23,mapAy:-.47,ax:-.23*je,ay:-.47*je,capDir:Jn(-.23*je,-.47*je),viewAlt:.115,viewBack:.145,description:"Suroeste costero en penumbra: esqueletos de hoteles sin fachada, noria oxidada, fogatas aisladas y la zona amurallada de Dogtown.",atmo:{fogDay:2634302,fogNight:197896,fogDusk:3678246,fogDensity:.0044,hemiSky:2239544,hemiGround:724498,ambient:988188,localLight:6057864,localBounce:12075548,bloomCap:.34}},{id:"badlands",name:"Las Badlands · Tierras Baldías",shortName:"Las Badlands",badge:"PERÍMETRO EXTERIOR",color:"#c96f3b",accent:"#e8c488",mapAx:.76,mapAy:.06,ax:.76*je,ay:.06*je,capDir:Jn(.76*je,.06*je),viewAlt:.125,viewBack:.155,description:"Cinturón exterior sin neón: campos petrolíferos al norte, parques eólicos e invernaderos Biotechnica al este y desierto nómada al sur.",atmo:{fogDay:9068090,fogNight:132104,fogDusk:10245164,fogDensity:.0014,hemiSky:9069636,hemiGround:3809298,ambient:3416596,localLight:14458980,localBounce:9062434,bloomCap:.3}}],vr=Object.fromEntries(Do.map(s=>[s.id,s]));function Uf(s,e){if(typeof document>"u")return null;const t=document.createElement("canvas");return t.width=s,t.height=e,t}function iy(s,e){const t=Uf(64,64);if(!t)return null;const n=t.getContext?.("2d");if(!n)return null;const i=n.createRadialGradient(32,32,1,32,32,32);i.addColorStop(0,s),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const o=new pn(t);return o.needsUpdate=!0,o}function sy(){const e=a=>{const r=Uf(512,512);if(!r)return null;const l=r.getContext?.("2d");if(!l)return null;a(l,512);const c=new pn(r);return c.colorSpace=Zt,c.wrapS=Wn,c.wrapT=Wn,c},t=e((a,r)=>{a.fillStyle="#6c7075",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=32){for(let c=0;c<r;c+=64){const h=Math.floor((H(c,l,7)-.5)*18);a.fillStyle=`rgb(${102+h}, ${105+h}, ${110+h})`,a.fillRect(c+1,l+1,62,30)}a.fillStyle="#383b40",a.fillRect(0,l,r,2),a.fillStyle="#2d3034";for(let c=16;c<r;c+=32)a.fillRect(c,l+14,3,3)}for(let l=0;l<55;l++){const c=Math.floor(H(l,11,3)*r),h=Math.floor(H(l,19,5)*(r-96)),u=28+Math.floor(H(l,23,9)*84);a.fillStyle=l%3===0?"rgba(92, 52, 30, 0.28)":"rgba(34, 38, 42, 0.34)",a.fillRect(c,h,2+l%4,u)}for(let l=8;l<r;l+=32)for(let c=8;c<r;c+=20)H(c,l,31)>.22&&(a.fillStyle="#1b232d",a.fillRect(c,l,10,14),a.fillStyle="rgba(130, 165, 195, 0.14)",a.fillRect(c+1,l+1,8,5))}),n=e((a,r)=>{a.fillStyle="#8b5d47",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=32){for(let c=0;c<r;c+=32){const h=Math.floor((H(c,l,17)-.5)*26);a.fillStyle=`rgb(${144+h}, ${95+Math.floor(h*.7)}, ${74+Math.floor(h*.5)})`,a.fillRect(c+1,l+1,30,30),H(c,l,59)>.18&&(a.fillStyle="#181e26",a.fillRect(c+6,l+7,20,16),a.fillStyle="rgba(110, 140, 168, 0.15)",a.fillRect(c+7,l+8,18,6))}a.fillStyle="#40342f",a.fillRect(0,l,r,3)}}),i=e((a,r)=>{a.fillStyle="#484d54",a.fillRect(0,0,r,r);for(let l=0;l<r;l+=8)a.fillStyle=l%16===0?"#5c636b":"#353a40",a.fillRect(l,0,4,r);for(let l=0;l<r;l+=64)a.fillStyle="#25282c",a.fillRect(0,l,r,3);for(let l=0;l<36;l++){const c=Math.floor(H(l,4,13)*(r-40)),h=Math.floor(H(l,8,21)*(r-40));a.fillStyle=l%2===0?"rgba(122, 62, 32, 0.35)":"#23282e",a.fillRect(c,h,28,18)}}),o=e((a,r)=>{const l=a.createLinearGradient(0,0,r,r);l.addColorStop(0,"#101d2b"),l.addColorStop(.5,"#193146"),l.addColorStop(1,"#0e1924"),a.fillStyle=l,a.fillRect(0,0,r,r);for(let c=0;c<r;c+=16)a.fillStyle=c%48===0?"#4e6378":"#213142",a.fillRect(c,0,c%48===0?3:1,r);for(let c=0;c<r;c+=24)a.fillStyle="#091119",a.fillRect(0,c,r,2)});return{texBrutalistConcrete:t,texTerracottaPanels:n,texCorrugatedMetal:i,texCorporateGlass:o}}function ii(s,e=null){const t=new ot,n=new ri,i=new ut,o=new b,a=new b,r=[];for(const c of s){const h=c.geo,u=h.index?h.toNonIndexed():h.clone();u.attributes.uv1&&u.deleteAttribute("uv1"),u.attributes.color&&u.deleteAttribute("color"),o.set(c.pos?.[0]||0,c.pos?.[1]||0,c.pos?.[2]||0),n.set(c.rot?.[0]||0,c.rot?.[1]||0,c.rot?.[2]||0),i.setFromEuler(n),a.set(c.scale?.[0]??1,c.scale?.[1]??1,c.scale?.[2]??1),t.compose(o,i,a),u.applyMatrix4(t),r.push(u)}const l=Ct(r,!1);for(const c of r)c.dispose();return e?l.boundingSphere=e:l.computeBoundingSphere(),l}function oy(s){const e=new un(1,1,1),t=new tn(.5,.56,1,8),n=new tn(.36,.48,1,12),i=new tn(.38,.65,1,10),o=new tn(.5,.5,1,12),a=ii([{geo:e,pos:[0,.11,0],scale:[1.04,.22,1.04]},{geo:e,pos:[-.26,.56,0],scale:[.36,.72,.86]},{geo:e,pos:[.26,.56,0],scale:[.36,.72,.86]},{geo:e,pos:[0,.52,0],scale:[.38,.64,.52]},{geo:e,pos:[-.48,.44,-.34],scale:[.1,.78,.14]},{geo:e,pos:[.48,.44,-.34],scale:[.1,.78,.14]},{geo:e,pos:[-.48,.44,.34],scale:[.1,.78,.14]},{geo:e,pos:[.48,.44,.34],scale:[.1,.78,.14]},{geo:e,pos:[0,.42,0],scale:[1.08,.04,.96]},{geo:e,pos:[0,.72,0],scale:[1.02,.04,.92]},{geo:e,pos:[0,.96,-.14],scale:[.46,.1,.42]},{geo:e,pos:[-.24,.94,.22],scale:[.2,.07,.22]}],s),r=ii([{geo:e,pos:[0,.18,0],scale:[.78,.36,.78]},{geo:e,pos:[-.22,.46,.08],scale:[.72,.26,.58]},{geo:e,pos:[.22,.64,-.06],scale:[.68,.28,.6]},{geo:e,pos:[-.12,.84,.02],scale:[.58,.22,.54]},{geo:e,pos:[.14,.98,.12],scale:[.18,.08,.18]},{geo:o,pos:[-.22,1.09,-.1],scale:[.03,.28,.03]},{geo:o,pos:[.06,1.07,-.18],scale:[.025,.22,.025]}],s),l=ii([{geo:e,pos:[-.28,.24,0],scale:[.46,.48,.68]},{geo:e,pos:[.28,.19,.06],scale:[.44,.38,.62]},{geo:e,pos:[-.28,.5,0],rot:[0,0,.24],scale:[.52,.06,.74]},{geo:e,pos:[.28,.4,.06],rot:[.18,0,-.2],scale:[.5,.05,.68]},{geo:e,pos:[.08,.58,0],scale:[1.18,.07,.22]},{geo:o,pos:[-.15,.34,.42],rot:[0,0,Math.PI*.5],scale:[.06,.96,.06]}],s),c=ii([{geo:e,pos:[-.14,.2,0],scale:[.74,.4,1.12]},{geo:e,pos:[-.14,.43,-.22],rot:[.25,0,0],scale:[.7,.08,.36]},{geo:e,pos:[-.14,.43,.22],rot:[.25,0,0],scale:[.7,.08,.36]},{geo:o,pos:[.38,.26,-.32],scale:[.34,.52,.34]},{geo:e,pos:[.34,.44,.3],scale:[.1,.88,.1]},{geo:e,pos:[.34,.9,.02],rot:[-.36,0,0],scale:[.09,.08,.96]}],s),h=ii([{geo:t,pos:[0,.29,0],rot:[0,Math.PI/8,0],scale:[.92,.58,.92]},{geo:t,pos:[0,.69,0],rot:[0,Math.PI/8,0],scale:[.72,.26,.72]},{geo:e,pos:[-.42,.38,0],scale:[.16,.76,.34]},{geo:e,pos:[.42,.38,0],scale:[.16,.76,.34]},{geo:o,pos:[0,.86,0],scale:[.58,.06,.58]},{geo:o,pos:[0,.95,0],scale:[.14,.14,.14]}],s),u=ii([{geo:n,pos:[0,.44,0],scale:[.82,.88,.66]},{geo:n,pos:[0,.56,0],scale:[.96,.08,.8]},{geo:e,pos:[-.14,.96,0],scale:[.1,.24,.24]},{geo:o,pos:[.12,1.02,0],scale:[.06,.34,.06]}],s),d=ii([{geo:e,pos:[0,.16,0],scale:[.96,.32,.92]},{geo:e,pos:[-.08,.45,-.05],scale:[.76,.28,.74]},{geo:e,pos:[-.14,.7,-.1],scale:[.56,.24,.56]},{geo:e,pos:[.18,.34,.24],scale:[.34,.05,.28]},{geo:e,pos:[-.14,.86,-.1],scale:[.46,.06,.46]}],s),f=ii([{geo:e,pos:[0,.12,0],scale:[1.38,.24,.88]},{geo:e,pos:[-.22,.42,-.1],scale:[.94,.36,.52]},{geo:e,pos:[.28,.36,.18],scale:[.58,.24,.46]},{geo:o,pos:[.48,.26,-.26],scale:[.46,.06,.46]}],s),g=ii([{geo:e,pos:[-.16,.18,0],scale:[.92,.36,.72]},{geo:i,pos:[.36,.34,-.24],scale:[.48,.68,.48]},{geo:o,pos:[.36,.48,.24],scale:[.14,.96,.14]},{geo:o,pos:[.08,.45,.32],scale:[.12,.9,.12]},{geo:o,pos:[.12,.38,0],rot:[0,0,Math.PI*.5],scale:[.07,.64,.07]}],s),v=ii([{geo:e,pos:[-.08,.3,0],scale:[.84,.6,.72]},{geo:e,pos:[.36,.24,.14],scale:[.38,.48,.48]},{geo:e,pos:[-.08,.64,.18],rot:[.12,0,0],scale:[.92,.08,.94]},{geo:e,pos:[-.24,.74,-.14],scale:[.22,.12,.22]}],s),m=ii([{geo:e,pos:[-.42,.5,-.38],scale:[.11,1,.11]},{geo:e,pos:[.42,.5,-.38],scale:[.11,1,.11]},{geo:e,pos:[-.42,.5,.38],scale:[.11,1,.11]},{geo:e,pos:[.42,.5,.38],scale:[.11,1,.11]},{geo:e,pos:[0,.18,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.4,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.62,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.84,0],scale:[.86,.06,.78]},{geo:e,pos:[.12,.96,0],scale:[.32,.18,.28]}],s),p=ii([{geo:e,pos:[0,.5,0],scale:[1,.14,1]},{geo:e,pos:[-.42,0,0],scale:[.14,1.4,.14]},{geo:e,pos:[.42,0,0],scale:[.14,1.4,.14]}],s),_=ii([{geo:e,pos:[0,.22,.51],scale:[.16,.04,.02]},{geo:e,pos:[.18,.48,-.51],scale:[.14,.035,.02]},{geo:e,pos:[-.51,.66,.12],scale:[.02,.035,.14]}],s),y=ii([{geo:n,pos:[0,0,0],rot:[Math.PI*.5,0,0],scale:[.42,1.65,.34]},{geo:e,pos:[0,-.22,0],scale:[.16,.14,.76]},{geo:e,pos:[0,.16,-.68],scale:[.04,.3,.28]},{geo:e,pos:[0,0,-.68],scale:[.48,.04,.26]}],s);return e.dispose(),t.dispose(),n.dispose(),i.dispose(),o.dispose(),{geoH10Megablock:a,geoStackedContainers:r,geoShantySkybridge:l,geoPortCraneDepot:c,geoCorpoNeoMilTower:h,geoCorpoNeoKitschTower:u,geoCharterTerraceTower:d,geoNorthOakMansion:f,geoArroyoFactory:g,geoRanchoHouse:v,geoPacificaSkeleton:m,geoBayBridge:p,geoMicroWindow:_,geoBlimpHull:y}}function ay(s,e=0){let t=-.24;return s>.26?t=-.34-Bi(.28,.72,s)*.24:s>-.2?t=-.235+Math.exp(-Math.pow(s/.14,2))*.085:t=-.23-Bi(-.26,-.58,s)*.26,t+e*.035}function To(s,e,t){const n=ny(s,e,t),i=n.ax/je,o=n.ay/je,a=n.theta/je,r=1/je,l=jn(s*5.2*r+2.1,e*5.2*r,t*5.2*r,3)*.045,c=jn(s*5.2*r-3.7,e*5.2*r+1.4,t*5.2*r,3)*.045,h=i+l*.45,u=o+c*.45,d=Math.hypot(h,u),f=Kt(s*14*r+1.2,e*14*r,t*14*r),g=ay(o,f),v=i-g,m=i<.04?Math.exp(-Math.pow((o-.195)/.022,2))*Bi(.05,-.14,i):0,p=i<.05?Math.exp(-Math.pow((o+.195)/.022,2))*Bi(.06,-.14,i):0,_=Math.max(m,p)>.48,y=v<0||_,x=Math.min(v,_?-.02:1),T=Bi(-.025,.025,x),w=Math.hypot(h*.92,u*.95),E=.565+f*.032;let A="city_center",M="corpo_plaza";y?(A=o<-.35&&i>-.58?"pacifica":i>-.3&&o>.18?"watson":"city_center",M="ocean_bay"):w>=E||a>=.62?(A="badlands",o>.34?M="oilfields":o>-.32&&i>.25?M="eastern_plains":M="southern_desert"):d<.215&&i>=g?(A="city_center",M=d<.11?"corpo_plaza":"downtown"):o>=.19&&i<.22+(o-.19)*.22?(A="watson",o>.39||i<g+.11?M="northside_port":i>.03?M="kabuki":M="little_china"):i>=.16&&o>-.23?(A="westbrook",i<.34&&o>-.06&&o<.26?M="japantown":o<=.06?M="charter_hill":M="north_oak"):o<=-.37&&i<.12?(A="pacifica",M=i>-.06&&o>-.51?"dogtown":"coastview"):o<=-.19&&i<.22?(A="heywood",M=i<-.02?"wellsprings":o>-.33?"the_glen":"vista_del_rey"):(A="santo_domingo",M=o>-.36?"arroyo":"rancho_coronado");let S=0;if(y)S=(-.0022-.0045*Bi(0,-.12,x))*.25;else{const L=Math.hypot((i-.42)/.17,(o-.28)/.16),P=Math.max(0,1-L*L),F=Bi(0,.85,P),z=Bi(.55,.65,a),k=1-Bi(.99,1.08,a),U=z*k,N=1-Math.abs(Kt(s*14*r+3.1,e*14*r,t*14*r-2.7)),X=jn(s*7.5*r-4.2,e*7.5*r+1.1,t*7.5*r+5.8,4),te=(-.0014+.014*(Math.max(0,X+.15)*(.45+.85*Math.pow(N,2.2))))*U;S=(F*.0155+te)*.34}const C={};let R=0;for(const L of Do){const P=L.mapAx??L.ax/je,F=L.mapAy??L.ay/je,z=(i-P)*(i-P)+(o-F)*(o-F),k=L.id==="badlands"?.18:.055;let U=Math.exp(-z/k);L.id===A&&(U+=1.45),L.id==="badlands"&&a>.6&&!y&&(U+=1.65),C[L.id]=U,R+=U}for(const L of Do)C[L.id]/=Math.max(1e-5,R);return{ax:n.ax,ay:n.ay,theta:n.theta,mapAx:i,mapAy:o,mapTheta:a,isOcean:y,isBayChannel:_,coastBlend:T,coastSignedDist:x,district:A,subzone:M,elevationRatio:S,weights:C}}function ry(s,e,t,n,i,o,a){s.position.copy(e).multiplyScalar(t),s.quaternion.setFromUnitVectors(ua,e),n!==0&&s.rotateY(n),s.scale.set(i,o,a),s.updateMatrix()}function ly(s){const e=s.localRadius,t=1.42,n=new Nt;n.name="NightCity_7Districts_Arch_Group";const i=new qt,o=new b,a=new ne,r=new ni(new b(0,0,0),e*1.28),{texBrutalistConcrete:l,texTerracottaPanels:c,texCorrugatedMetal:h,texCorporateGlass:u}=sy(),d=oy(r),f=58,g=112,v=(f+1)*(g+1),m=new Float32Array(v*3),p=new Float32Array(v*3),_=[];for(let Y=0;Y<=f;Y++){const le=Y/f*(1.08*je),K=Math.sin(le),Me=Math.cos(le);for(let ce=0;ce<=g;ce++){const ae=ce/g*Math.PI*2,Q=K*Math.cos(ae),Ie=Me,Je=K*Math.sin(ae),lt=To(Q,Ie,Je),jt=Bi(1.04,1.08,lt.mapTheta)*-4e-4,cn=lt.isOcean?14e-5:24e-5+Math.max(-1e-4,lt.elevationRatio),Ft=e*(1+cn+jt),Sn=Y*(g+1)+ce;m[Sn*3]=Q*Ft,m[Sn*3+1]=Ie*Ft,m[Sn*3+2]=Je*Ft;const at=Kt(Q*24+2,Ie*24,Je*24)*.5+.5;let Ln=.055,li=.062,Ht=.075;if(lt.isOcean)Ln=.014,li=.036+at*.015,Ht=.064+at*.024;else if(lt.district==="badlands")if(lt.subzone==="oilfields")Ln=.07+at*.04,li=.065+at*.03,Ht=.06+at*.025;else{const Ps=Ms(lt.elevationRatio/.004,0,1);Ln=.24+at*.13+Ps*.1,li=.12+at*.055+Ps*.04,Ht=.075+at*.03}else lt.district==="westbrook"&&lt.subzone==="north_oak"?(Ln=.095+at*.045,li=.155+at*.075,Ht=.085+at*.035):lt.district==="pacifica"?(Ln=.062+at*.032,li=.062+at*.032,Ht=.068+at*.032):lt.district==="santo_domingo"?(Ln=.095+at*.04,li=.075+at*.035,Ht=.062+at*.025):lt.district==="heywood"?(Ln=.082+at*.03,li=.076+at*.025,Ht=.065+at*.02):(Ln=.044+at*.022,li=.05+at*.024,Ht=.064+at*.028);p[Sn*3]=Ln,p[Sn*3+1]=li,p[Sn*3+2]=Ht}}for(let Y=0;Y<f;Y++)for(let le=0;le<g;le++){const K=Y*(g+1)+le,Me=K+(g+1);_.push(K,Me,K+1,K+1,Me,Me+1)}const y=new Et;y.setAttribute("position",new _t(m,3)),y.setAttribute("color",new _t(p,3));const x=new Float32Array(v*2);for(let Y=0;Y<=f;Y++)for(let le=0;le<=g;le++){const K=Y*(g+1)+le;x[K*2]=le/g*6,x[K*2+1]=Y/f*4}y.setAttribute("uv",new _t(x,2)),y.setIndex(_),y.computeVertexNormals(),y.boundingSphere=r;const T=el(),w=$M(),E=Lf(),A=qo(),M=new Be({vertexColors:!0,roughnessMap:T.roughnessMap,bumpMap:T.bumpMap,bumpScale:.045,roughness:.92,metalness:.05}),S=Sh(M,{mode:"badlands",worldRadius:e*157.5,peakStart:3,peakEnd:8.5,shoreBand:.55}),C=new Ge(y,M);C.name="NC_7Districts_Coastal_Terrain",C.userData.splatUniforms=S,C.frustumCulled=!1,C.castShadow=!1,C.receiveShadow=!1,n.add(C);const R=(Y,le=.88,K=.14,Me=E)=>{const ce=new Be({color:16777215,map:Y,roughnessMap:Me?.roughnessMap||null,bumpMap:Me?.bumpMap||null,bumpScale:.032,emissive:new ne(0),emissiveMap:null,emissiveIntensity:0,roughness:le,metalness:K});return ce.userData.outsideCityCenterMatte=!0,ce},L=R(c,.88,.12),P=R(l,.9,.14),F=R(h,.84,.28),z=R(h,.85,.32),k=R(l,.86,.12),U=R(l,.82,.15),N=R(h,.9,.24),X=R(c,.92,.06),oe=R(l,.94,.08),te=R(null,.82,.35),we=R(null,.94,.04,A),j=new Be({color:16777215,map:l,roughnessMap:E.roughnessMap,bumpMap:E.bumpMap,bumpScale:.028,emissive:new ne(0),emissiveIntensity:0,roughness:.62,metalness:.45}),ue=new Be({color:16777215,map:u,roughnessMap:w.roughnessMap,bumpMap:E.bumpMap,bumpScale:.015,emissive:new ne(4883112),emissiveIntensity:.18,roughness:.24,metalness:.82}),ge=new Be({color:13623518,emissive:new ne(8959146),emissiveIntensity:.18,roughness:.42,metalness:.08}),pe=new Be({color:16777215,emissive:new ne(16769202),emissiveIntensity:.3,roughness:.9});pe.userData.animatedEmissive=!0,pe.userData.nightTier="microwindow";const ee=[],fe=(Y,le,K={})=>{const Me=new Be({color:new ne(Y),emissive:new ne(Y),emissiveIntensity:Ms(le,1.3,1.9),roughness:.25,metalness:.1,...K});return Me.userData.baseEmissive=Ms(le,1.3,1.9),Me.userData.nightTier="hero",Me.userData.animatedEmissive=!0,ee.push(Me),Me},me=fe("#ff223d",1.65),Ae=fe("#00e5ff",1.58),ve=fe("#ff2eb8",1.62),Z=fe("#30b8ff",1.55,{transparent:!0,opacity:.48,depthWrite:!1}),B=fe("#ff7a1f",1.78),et=fe("#ff3b6c",1.52),_e={h10:[],stacked:[],shanty:[],port:[],corpoMil:[],corpoKitsch:[],terrace:[],northOak:[],arroyo:[],rancho:[],pacifica:[],bridges:[],rocks:[],pumpBases:[],greenhouses:[],turbMasts:[],nomads:[],microWin:[],watsonNeonRed:[],watsonNeonCyan:[],japantownNeon:[],corpoBeams:[],arroyoFlares:[]},We=[],Le=[],rt=[],Xe=[],O=[],D=[],ie=[],xe=[],re=(Y,le,K,Me,ce,ae,Q,Ie)=>{ry(i,le,K,Me,ce,ae,Q),Y.push({matrix:i.matrix.clone(),color:Ie.clone()})};let he=1;const De=(Y,le,K=1)=>{const Me=[];for(let ce=0;ce<le*6&&Me.length<le;ce++){he++;const ae=(H(he,3,17)*2-1)*.72*je*K,Q=(H(he,7,31)*2-1)*.72*je*K,Ie=Jn(ae,Q),Je=To(Ie.x,Ie.y,Ie.z);Y(Je)&&Me.push({dir:Ie,s:Je,i:Me.length})}return Me},be=(Y,le,K=.08)=>{a.setHex(Y[le%Y.length]);const Me=(H(le,19,37)-.5)*K;return a.offsetHSL(Me*.15,Me*.25,Me),a},Ne=De(Y=>!Y.isOcean&&Y.district==="city_center"&&Math.hypot(Y.mapAx,Y.mapAy)>.078,130,.34);for(const{dir:Y,i:le}of Ne){const K=t*(.072+.056*Math.pow(H(le,13,29),1.15)),Me=t*(.009+.009*H(le,5,19));le%2===0?re(_e.corpoMil,Y,e*1.00015,H(le,2,5)*Math.PI*.5,Me*1.1,K,Me*1.1,be([3554631,4541524,2764856],le)):re(_e.corpoKitsch,Y,e*1.00015,H(le,4,7)*Math.PI,Me*.95,K*1.06,Me*.95,be([5930654,9270866,3892096],le)),le%7===0&&_e.corpoBeams.length<18&&re(_e.corpoBeams,Y,e*1.0002+K*.45,0,t*.0018,K*.65,t*.0018,a.setHex(le%14===0?16762460:3328255))}const pt=De(Y=>!Y.isOcean&&Y.district==="watson"&&(Y.subzone==="little_china"||Y.subzone==="kabuki"),410,.85);for(const{dir:Y,s:le,i:K}of pt){const Me=H(K,1,7)*Math.PI;if(K%5===0){const ce=t*(.011+.006*H(K,3,13)),ae=t*(.042+.026*H(K,9,3));re(_e.h10,Y,e*1.00015,Me,ce,ae,ce,be([9198406,7040885,10058834,7561816],K)),K%65===0&&re(_e.microWin,Y,e*1.00015,Me,ce,ae,ce,be([16765844,11064560],K,.02))}else if(K%3===1||le.subzone==="little_china"){const ce=t*(.008+.005*H(K,5,19)),ae=t*(.028+.024*H(K,7,11));re(_e.stacked,Y,e*1.00015,Me,ce,ae,ce,be([8027522,9726548,6450032,8747106],K)),K%45===1&&re(_e.microWin,Y,e*1.00015,Me,ce,ae,ce,be([16763522,9880808],K,.02))}else{const ce=t*(.007+.005*H(K,4,9)),ae=t*(.005+.0065*H(K,12,17));re(_e.shanty,Y,e*1.00015,Me,ce,ae,ce,be([7235939,6055019,8019018],K))}if(K%19===0&&_e.watsonNeonRed.length+_e.watsonNeonCyan.length<21){const ce=Y.clone().add(new b(.001,0,-7e-4)).normalize(),ae=K%38===0?_e.watsonNeonRed:_e.watsonNeonCyan;re(ae,ce,e*1.0002+t*.005,Me,t*.0011,t*(.009+.005*H(K,2,11)),t*.0026,a.setHex(16777215))}}const Ee=De(Y=>!Y.isOcean&&Y.district==="watson"&&Y.subzone==="northside_port",145,.92);for(const{dir:Y,i:le}of Ee){const K=t*(.014+.014*H(le,4,21)),Me=t*(.012+.014*H(le,8,13));re(_e.port,Y,e*1.00015,H(le,6,9)*Math.PI*.5,K,Me,K,be([5922920,7229250,4541266],le))}const Ue=De(Y=>!Y.isOcean&&Y.district==="westbrook"&&Y.subzone==="japantown",185,.72);for(const{dir:Y,s:le,i:K}of Ue){const Me=e*(1.00015+le.elevationRatio),ce=t*(.008+.006*H(K,5,31)),ae=t*(.022+.028*Math.pow(H(K,12,7),1.2)),Q=H(K,3,21)*Math.PI;re(_e.stacked,Y,Me,Q,ce,ae,ce,be([6711928,8217970,5396582],K)),K%7===0&&_e.japantownNeon.length<28&&re(_e.japantownNeon,Y,Me+ae*.25,Q,t*.0014,ae*.42,t*.0034,a.setHex(16777215))}const Qe=De(Y=>!Y.isOcean&&Y.district==="westbrook"&&Y.subzone==="charter_hill",155,.85);for(const{dir:Y,s:le,i:K}of Qe){const Me=e*(1.00015+le.elevationRatio),ce=t*(.01+.007*H(K,2,11)),ae=t*(.018+.022*H(K,13,5));re(_e.terrace,Y,Me,H(K,4,2)*Math.PI*.5,ce,ae,ce,be([13817564,12502476,14672614],K,.04))}const ct=De(Y=>!Y.isOcean&&Y.district==="westbrook"&&Y.subzone==="north_oak",48,.95);for(const{dir:Y,s:le,i:K}of ct){const Me=e*(1.00015+le.elevationRatio),ce=t*(.012+.005*H(K,3,9)),ae=t*(.005+.003*H(K,7,13));re(_e.northOak,Y,Me,H(K,8,17)*Math.PI,ce,ae,ce,be([15130838,13946823,15591647],K,.03));const Q=Me+ae*1.15;D.push(Y.x*Q,Y.y*Q,Y.z*Q)}const ze=De(Y=>!Y.isOcean&&Y.district==="heywood",265,.85);for(const{dir:Y,s:le,i:K}of ze){const Me=H(K,4,33)*Math.PI*.5;if(le.subzone==="vista_del_rey"){const ce=t*(.008+.005*H(K,3,27)),ae=t*(.0055+.0065*H(K,11,7));re(_e.shanty,Y,e*1.00015,Me,ce,ae,ce,be([9401436,8217938,10256998],K))}else{const ce=t*(.009+.006*H(K,8,19)),ae=t*(.018+.022*Math.pow(H(K,14,9),1.2));K%3===0?re(_e.h10,Y,e*1.00015,Me,ce,ae,ce,be([10255196,8549992,10717544],K)):re(_e.terrace,Y,e*1.00015,Me,ce,ae,ce,be([12100748,10392196,12890262],K)),K%16===0&&re(_e.microWin,Y,e*1.00015,Me,ce,ae,ce,be([16763776,16769200],K,.02))}if(K%6===0){const ce=e*1.0002+t*.0026;rt.push(Y.x*ce,Y.y*ce,Y.z*ce)}}const vt=De(Y=>!Y.isOcean&&Y.district==="santo_domingo"&&Y.subzone==="arroyo",130,.95);for(const{dir:Y,i:le}of vt){const K=t*(.015+.012*H(le,2,11)),Me=t*(.016+.018*H(le,7,19));if(re(_e.arroyo,Y,e*1.00015,H(le,4,15)*Math.PI*.5,K,Me,K,be([6708824,5396060,7562069],le)),le%7===0&&_e.arroyoFlares.length<18){const ce=e*1.0002+Me*.96;re(_e.arroyoFlares,Y,ce,0,t*.003,t*.0048,t*.003,a.setHex(16777215)),Xe.push(Y.x*ce,Y.y*ce,Y.z*ce)}if(le%6===0&&ie.length<36){const ce=e*1.0003+Me*1.12;ie.push({dir:Y.clone(),alt:ce,phase:le*.5}),xe.push(Y.x*ce,Y.y*ce,Y.z*ce)}}for(let Y=0;Y<20;Y++)for(let le=0;le<20;le++){const K=(.25+Y*.017)*je,Me=(-.34-le*.017)*je,ce=Jn(K,Me),ae=To(ce.x,ce.y,ce.z);if(!ae.isOcean&&ae.district==="santo_domingo"&&ae.subzone==="rancho_coronado"){const Q=t*.0068,Ie=t*(.0042+.0018*H(Y,le,4));if(re(_e.rancho,ce,e*1.0002,.08,Q,Ie,Q,be([9205862,8219741,10060910],Y*20+le)),(Y*20+le)%34===0&&re(_e.microWin,ce,e*1.0002,.08,Q,Ie,Q,a.setHex(16760434)),(Y+le)%5===0){const Je=e*1.0002+t*.0026;rt.push(ce.x*Je,ce.y*Je,ce.z*Je)}}}const nt=De(Y=>!Y.isOcean&&Y.district==="pacifica",165,.95);for(const{dir:Y,s:le,i:K}of nt){const Me=t*(.011+.008*H(K,2,19)),ce=le.subzone==="dogtown"?t*(.01+.014*H(K,9,13)):t*(.016+.022*Math.pow(H(K,6,29),1.3));if(re(_e.pacifica,Y,e*1.00015,H(K,1,8)*.5,Me,ce,Me,be([5001044,6051922,3882562],K)),K%14===0&&O.length<30){const ae=e*1.0002+t*.0014;O.push(Y.x*ae,Y.y*ae,Y.z*ae)}}const ft=Jn(-.33*je,-.48*je),V=new Ge(new Zr(t*.019,t*.0014,6,20),oe);V.name="NC_Pacifica_Abandoned_FerrisWheel",V.position.copy(ft).multiplyScalar(e+t*.021),V.quaternion.setFromUnitVectors(ua,ft),V.rotateY(.4),V.castShadow=!1,V.receiveShadow=!1,n.add(V);const Pe=[{a:[-.08*je,.14*je],b:[-.2*je,.25*je]},{a:[-.14*je,.01*je],b:[-.42*je,-.02*je]},{a:[-.09*je,-.15*je],b:[-.21*je,-.34*je]}];for(const Y of Pe){const K=Jn(Y.a[0],Y.a[1]),Me=Jn(Y.b[0],Y.b[1]),ce=Math.atan2(Me.x-K.x,Me.z-K.z);for(let ae=0;ae<=12;ae++){const Q=ae/12,Ie=K.clone().lerp(Me,Q).normalize(),Je=t*.008+Math.sin(Q*Math.PI)*t*.005;re(_e.bridges,Ie,e-t*.002+Je,ce,t*.007,t*.014,t*.022,a.setHex(4870232))}}const de=De(Y=>!Y.isOcean&&Y.district==="badlands"&&Y.mapTheta<1.05,420,1.48);for(const{dir:Y,s:le,i:K}of de){const Me=e*1.0002+le.elevationRatio*e;if(le.subzone==="oilfields")if(K%7===0&&Le.length<32)re(_e.pumpBases,Y,Me-t*5e-4,0,t*.004,t*.0085,t*.004,a.setHex(3817028)),Le.push({pos:Y.clone().multiplyScalar(Me+t*.008),quat:new ut().setFromUnitVectors(ua,Y),scale:new b(t*.0022,t*.0022,t*.015),phase:K*.65});else{const ce=t*(.007+.014*H(K,3,5));re(_e.rocks,Y,Me,H(K,2,9)*3.1,ce,ce*.6,ce,be([3880242,5063484],K))}else if(le.subzone==="eastern_plains")if(K%10===0&&We.length<34){const ce=t*(.024+.01*H(K,5,11));re(_e.turbMasts,Y,Me-t*5e-4,0,t*.0022,ce,t*.0022,a.setHex(12765390));const ae=new ut().setFromUnitVectors(ua,Y),Q=new ut().setFromAxisAngle(ua,H(K,12,5)*Math.PI*2);We.push({hubPos:Y.clone().multiplyScalar(Me+ce),orientQuat:ae.multiply(Q),bladeLen:ce*.56,omega:1+H(K,8,19)*.85,phase:H(K,15,2)*Math.PI*2})}else if(K%8===0&&_e.greenhouses.length<44)re(_e.greenhouses,Y,Me-t*4e-4,.3,t*.011,t*.0035,t*.032,a.setHex(14215910));else{const ce=t*(.009+.018*Math.pow(H(K,7,13),1.5));re(_e.rocks,Y,Me,H(K,5,17)*3.1,ce,ce*.7,ce*.85,be([7027496,8210482],K))}else if(K%16===0&&_e.nomads.length<36){re(_e.nomads,Y,Me,H(K,4,21)*Math.PI,t*.007,t*.0038,t*.0085,a.setHex(7235164));const ce=Me+t*.0025;O.push(Y.x*ce,Y.y*ce,Y.z*ce)}else{const ce=t*(.008+.018*Math.pow(H(K,3,29),1.6));re(_e.rocks,Y,Me,H(K,7,19)*3.1,ce,ce*.65,ce*.8,be([7552553,6042145],K))}}const ye=new un(1,1,1);ye.translate(0,.5,0),ye.boundingSphere=r;const Fe=new tn(.45,.55,1,8);Fe.translate(0,.5,0),Fe.boundingSphere=r;const ke=new Es(1,0);ke.boundingSphere=r;const Ze=(Y,le,K,Me)=>{if(!Y.length)return null;const ce=new bt(le,K,Y.length);ce.name=Me,ce.frustumCulled=!1,ce.castShadow=!1,ce.receiveShadow=!1;for(let ae=0;ae<Y.length;ae++)ce.setMatrixAt(ae,Y[ae].matrix),ce.setColorAt(ae,Y[ae].color);return ce.instanceMatrix.needsUpdate=!0,ce.instanceColor&&(ce.instanceColor.needsUpdate=!0),n.add(ce),ce};Ze(_e.h10,d.geoH10Megablock,L,"NC_Arch1_H10_Megablocks"),Ze(_e.stacked,d.geoStackedContainers,P,"NC_Arch2_Stacked_Containers"),Ze(_e.shanty,d.geoShantySkybridge,F,"NC_Arch3_Slum_SheetRoofs"),Ze(_e.port,d.geoPortCraneDepot,z,"NC_Arch4_Northside_PortDepots"),Ze(_e.corpoMil,d.geoCorpoNeoMilTower,j,"NC_Arch5_CityCenter_NeoMil"),Ze(_e.corpoKitsch,d.geoCorpoNeoKitschTower,ue,"NC_Arch6_CityCenter_NeoKitsch"),Ze(_e.terrace,d.geoCharterTerraceTower,k,"NC_Arch7_Charter_Heywood_Terraces"),Ze(_e.northOak,d.geoNorthOakMansion,U,"NC_Arch8_NorthOak_Mansions"),Ze(_e.arroyo,d.geoArroyoFactory,N,"NC_Arch9_Arroyo_Factories"),Ze(_e.rancho,d.geoRanchoHouse,X,"NC_Arch10_Rancho_Houses"),Ze(_e.pacifica,d.geoPacificaSkeleton,oe,"NC_Arch11_Pacifica_Skeletons"),Ze(_e.bridges,d.geoBayBridge,P,"NC_Bay_Connecting_Bridges"),Ze(_e.rocks,ke,we,"NC_Badlands_Rocks"),Ze(_e.pumpBases,Fe,F,"NC_Badlands_Oil_Pump_Bases"),Ze(_e.turbMasts,Fe,te,"NC_Badlands_WindTurbine_Masts"),Ze(_e.greenhouses,ye,ge,"NC_Badlands_Biotechnica_Greenhouses"),Ze(_e.nomads,ye,X,"NC_Badlands_Nomad_Outposts"),Ze(_e.microWin,d.geoMicroWindow,pe,"NC_Isolated_MicroWindows"),Ze(_e.watsonNeonRed,ye,me,"NC_Watson_VerticalNeon_Red"),Ze(_e.watsonNeonCyan,ye,Ae,"NC_Watson_VerticalNeon_Cyan"),Ze(_e.japantownNeon,ye,ve,"NC_Westbrook_Japantown_Neon"),Ze(_e.corpoBeams,Fe,Z,"NC_CityCenter_LightBeams"),Ze(_e.arroyoFlares,Fe,B,"NC_SantoDomingo_Refinery_Flares");const Ot=new un(.11,1,.03);Ot.translate(0,.5,0),Ot.boundingSphere=r;const kt=We.length?new bt(Ot,te,We.length*3):null;kt&&(kt.name="NC_Badlands_WindTurbine_Blades",kt.frustumCulled=!1,kt.castShadow=!1,kt.receiveShadow=!1,n.add(kt));const gt=Le.length?new bt(ye,N,Le.length):null;gt&&(gt.name="NC_Badlands_Oil_Pumpjacks",gt.frustumCulled=!1,gt.castShadow=!1,gt.receiveShadow=!1,n.add(gt));const dn=new un(.46,.16,.85);dn.boundingSphere=r;const ln=new bt(d.geoBlimpHull,F,3);ln.name="AV_Blimp_Hulls",ln.frustumCulled=!1,ln.castShadow=!1,ln.receiveShadow=!1;const _n=new bt(dn,et,3);_n.name="AV_Blimp_Screens",_n.frustumCulled=!1,_n.castShadow=!1,_n.receiveShadow=!1,n.add(ln,_n);const Pn=[{ax0:-.1*je,ay0:.21*je,rx:.14*je,ry:.06*je,alt:e+t*.068,omega:.085,phase:0,scale:t*.022},{ax0:.06*je,ay0:.18*je,rx:.12*je,ry:.07*je,alt:e+t*.08,omega:-.072,phase:2.1,scale:t*.025},{ax0:-.03*je,ay0:.25*je,rx:.16*je,ry:.05*je,alt:e+t*.062,omega:.064,phase:4.2,scale:t*.02}],kn=[{start:[.58*je,-.15*je],end:[.92*je,-.45*je]},{start:[.35*je,-.6*je],end:[.55*je,-.96*je]}],it=28,Pt=t*.004,xn=[],Bn=new b,Rt=new b,nn=new b;for(let Y=0;Y<kn.length;Y++){const le=kn[Y],K=new Float32Array((it+1)*2*3),Me=new Float32Array((it+1)*2*2),ce=[];for(let Q=0;Q<=it;Q++){const Ie=Q/it,Je=G.lerp(le.start[0],le.end[0],Ie)+Math.sin(Ie*3.2+Y)*.025*je,lt=G.lerp(le.start[1],le.end[1],Ie);o.copy(Jn(Je,lt));const jt=To(o.x,o.y,o.z),cn=e*1.0002+jt.elevationRatio*e+t*8e-4;nn.copy(o).multiplyScalar(cn),Bn.set(.3,0,-1).cross(o).normalize(),Rt.crossVectors(o,Bn).normalize();const Ft=Q*2;K[Ft*3]=nn.x-Rt.x*Pt,K[Ft*3+1]=nn.y-Rt.y*Pt,K[Ft*3+2]=nn.z-Rt.z*Pt,K[(Ft+1)*3]=nn.x+Rt.x*Pt,K[(Ft+1)*3+1]=nn.y+Rt.y*Pt,K[(Ft+1)*3+2]=nn.z+Rt.z*Pt,Me[Ft*2]=0,Me[Ft*2+1]=Ie*8,Me[(Ft+1)*2]=1,Me[(Ft+1)*2+1]=Ie*8,Q<it&&ce.push(Ft,Ft+2,Ft+1,Ft+1,Ft+2,Ft+3)}const ae=new Et;ae.setAttribute("position",new _t(K,3)),ae.setAttribute("uv",new _t(Me,2)),ae.setIndex(ce),ae.computeVertexNormals(),xn.push({geo:ae.toNonIndexed()}),ae.dispose()}const Ut=Ct(xn.map(Y=>Y.geo),!1);xn.forEach(Y=>Y.geo.dispose()),Ut.boundingSphere=r;const Jt=new Ge(Ut,new Be({color:16777215,map:w.map,roughnessMap:w.roughnessMap,bumpMap:w.bumpMap,bumpScale:.04,roughness:1,metalness:.08,side:It}));Jt.name="NC_Badlands_Desert_Roads",Jt.frustumCulled=!1,Jt.castShadow=!1,Jt.receiveShadow=!1,n.add(Jt);const Zn=Jn(-.27*je,.01*je),zn=new $s(e*.16*je,40),St=new Qr(zn,{textureWidth:256,textureHeight:256,waterNormals:tl(),sunDirection:new b(.4,.6,.5).normalize(),sunColor:9224959,waterColor:466222,distortionScale:.35,size:4.5,clipBias:.002,alpha:.92,fog:!0});St.name="NC_CoronadoBay_Reflective_Water",St.position.copy(Zn).multiplyScalar(e*1.00025),St.quaternion.setFromUnitVectors(new b(0,0,1),Zn),St.visible=!1,St.castShadow=!1,St.receiveShadow=!1,n.add(St);const I=(Y,le,K,Me,ce,ae)=>{if(!Y.length)return null;const Q=new Et;Q.setAttribute("position",new Yt(Y,3)),Q.boundingSphere=r;const Ie=new Ai({map:iy("rgba(255,255,255,0.92)","rgba(255,210,160,0.32)"),color:le,size:K,transparent:!0,opacity:Me,depthWrite:!1,blending:ce?Tn:Ws,sizeAttenuation:!0}),Je=new Ei(Q,Ie);return Je.name=ae,Je.frustumCulled=!1,n.add(Je),{pts:Je,mat:Ie,geo:Q}},J=I(rt.concat(D),16755272,1.3,.66,!0,"NC_Heywood_Rancho_Streetlamps"),q=I(O.concat(Xe),16739364,2.1,.84,!0,"NC_Pacifica_Arroyo_FlaresAndFires"),se=I(xe,2761760,14,.5,!1,"NC_Arroyo_Industrial_Smoke"),$=new ut,Re=new ut,Ce=new b,Ye=new ot,He=new b,ht=new b,mt=new b,$e=new ot,W=Math.PI*2/3,Ve=new b(0,0,1),st=new b(1,0,0);return{group:n,terrainSplatUniforms:S,bayWater:St,update(Y,le=1){if(!n.parent||!n.parent.visible)return;if(St.material?.uniforms?.time&&(St.material.uniforms.time.value=Y*.48),kt){for(let ae=0;ae<We.length;ae++){const Q=We[ae],Ie=Y*Q.omega+Q.phase;Ce.set(Q.bladeLen*.25,Q.bladeLen,Q.bladeLen*.25);for(let Je=0;Je<3;Je++)$.setFromAxisAngle(Ve,Ie+Je*W),Re.copy(Q.orientQuat).multiply($),Ye.compose(Q.hubPos,Re,Ce),kt.setMatrixAt(ae*3+Je,Ye)}kt.instanceMatrix.needsUpdate=!0}if(gt){for(let ae=0;ae<Le.length;ae++){const Q=Le[ae];$.setFromAxisAngle(st,Math.sin(Y*1.15+Q.phase)*.28),Re.copy(Q.quat).multiply($),Ye.compose(Q.pos,Re,Q.scale),gt.setMatrixAt(ae,Ye)}gt.instanceMatrix.needsUpdate=!0}for(let ae=0;ae<Pn.length;ae++){const Q=Pn[ae],Ie=Y*Q.omega+Q.phase,Je=Q.ax0+Math.cos(Ie)*Q.rx,lt=Q.ay0+Math.sin(Ie)*Q.ry,jt=-Math.sin(Ie)*Q.rx*Q.omega,cn=Math.cos(Ie)*Q.ry*Q.omega;o.copy(Jn(Je,lt)),He.copy(o).multiplyScalar(Q.alt+Math.sin(Y*.8+ae)*t*.002),ht.set(jt,0,-cn),ht.addScaledVector(o,-o.dot(ht)),ht.lengthSq()<1e-8&&ht.set(1,0,0).addScaledVector(o,-o.x),ht.normalize(),mt.crossVectors(o,ht),mt.lengthSq()<1e-8&&mt.set(0,0,1),mt.normalize(),ht.crossVectors(mt,o).normalize(),$e.makeBasis(mt,o,ht),$e.setPosition(He),Ce.setScalar(Q.scale),$e.scale(Ce),ln.setMatrixAt(ae,$e),_n.setMatrixAt(ae,$e)}if(ln.instanceMatrix.needsUpdate=!0,_n.instanceMatrix.needsUpdate=!0,se&&ie.length>0){const ae=se.geo.attributes.position;for(let Q=0;Q<ie.length;Q++){const Ie=ie[Q],Je=1+.002*Math.sin(Y*.7+Ie.phase);ae.setXYZ(Q,Ie.dir.x*Ie.alt*Je,Ie.dir.y*Ie.alt*Je,Ie.dir.z*Ie.alt*Je)}ae.needsUpdate=!0}const K=.94+.06*Math.sin(Y*2.2),Me=Ms(.88+(le-1)*.14,.85,1.08);for(let ae=0;ae<ee.length;ae++){const Q=ee[ae];Q.emissiveIntensity=Ms(Q.userData.baseEmissive*Me*K,1.3,1.9)}const ce=Ms(.42+(le-.8)*.25,.35,.78);J&&(J.mat.opacity=ce),q&&(q.mat.opacity=.7+.18*Math.sin(Y*8.2))}}}const Qc={uSunViewPos:{value:new b}};function H(s,e,t){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Kt(s,e,t){const n=Math.floor(s),i=Math.floor(e),o=Math.floor(t),a=s-n,r=e-i,l=t-o,c=a*a*(3-2*a),h=r*r*(3-2*r),u=l*l*(3-2*l),d=H(n,i,o),f=H(n+1,i,o),g=H(n,i+1,o),v=H(n+1,i+1,o),m=H(n,i,o+1),p=H(n+1,i,o+1),_=H(n,i+1,o+1),y=H(n+1,i+1,o+1),x=d+(f-d)*c,T=g+(v-g)*c,w=m+(p-m)*c,E=_+(y-_)*c,A=x+(T-x)*h,M=w+(E-w)*h;return(A+(M-A)*u)*2-1}function jn(s,e,t,n=4){let i=0,o=.5,a=1;for(let r=0;r<n;r++)i+=o*Kt(s*a+r*17.31,e*a-r*9.7,t*a+r*3.3),a*=2.03,o*=.5;return i}function en(s,e,t){const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)}function Xs(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function cy(s=[0,1,0]){return[s,[-s[0],-s[1],-s[2]],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(t=>{const n=new b(...t).normalize(),i=Math.abs(n.y)<.9?new b(0,1,0):new b(1,0,0),o=new b().crossVectors(n,i).normalize(),a=new b().crossVectors(n,o).normalize();return{h:n,e1:o,e2:a}})}const At=[{id:"hometree",name:"Gran Árbol Madre (Hometree)",shortName:"Árbol-Casa",theta:.045,phi:-.55,landBoostRad:.24,elevMode:"valley",viewAlt:.092,viewBack:.11},{id:"hallelujah",name:"Montañas Aleluya",shortName:"Aleluya",theta:.38,phi:1.15,landBoostRad:.22,elevMode:"bay",viewAlt:.135,viewBack:.145},{id:"rookery",name:"Nido de Ikran (Ikran Rookery)",shortName:"Nido Ikran",theta:1.06,phi:3.65,landBoostRad:.25,elevMode:"canyon",viewAlt:.105,viewBack:.125},{id:"souls",name:"Árbol de las Almas (Tree of Souls)",shortName:"Árbol Almas",theta:1.54,phi:5.15,landBoostRad:.26,elevMode:"crater",viewAlt:.078,viewBack:.105},{id:"mushrooms",name:"Bosque de Setas Gigantes y Géiseres",shortName:"Setas / Géiseres",theta:2.28,phi:2.1,landBoostRad:.25,elevMode:"basin",viewAlt:.082,viewBack:.11},{id:"ashland",name:"Tierra de Ceniza (Pueblo Ash)",shortName:"Ceniza / Volcanes",theta:1.88,phi:.72,landBoostRad:.34,elevMode:"ash",viewAlt:.115,viewBack:.145},{id:"metkayina",name:"Arrecife Metkayina (Aldea y Abismo)",shortName:"Metkayina",theta:1.18,phi:2.15,landBoostRad:.32,elevMode:"reef",viewAlt:.068,viewBack:.098}].map(s=>{const e=Math.sin(s.theta);return{...s,capDir:new b(e*Math.cos(s.phi),Math.cos(s.theta),e*Math.sin(s.phi)).normalize()}}),hy=[{v:At[0].capDir,bias:.25},{v:At[1].capDir,bias:.22},{v:At[2].capDir,bias:.24},{v:At[3].capDir,bias:.26},{v:At[4].capDir,bias:.29},{v:new b(.12,-.78,-.22).normalize(),bias:.23},{v:new b(-.05,-.94,.32).normalize(),bias:.24},{v:new b(.45,.62,-.64).normalize(),bias:.18}],uy=[{v:At[6].capDir,bias:.39},{v:new b(-.82,.05,.57).normalize(),bias:.39},{v:new b(-.08,.18,.98).normalize(),bias:.32},{v:new b(-.82,-.34,-.45).normalize(),bias:.38},{v:new b(-.55,-.4,.1).normalize(),bias:.31},{v:new b(-.38,-.68,-.62).normalize(),bias:.3}],dy=[{v:At[5].capDir,bias:.36},{v:new b(.93,-.15,.33).normalize(),bias:.3},{v:new b(.74,-.6,.28).normalize(),bias:.25},{v:new b(.55,-.18,.81).normalize(),bias:.28}];function nl(s=[0,1,0]){const e=new b(s[0],s[1],s[2]).normalize(),t=new ut().setFromUnitVectors(new b(0,1,0),e),n=At.map(i=>({...i,sphereDir:i.capDir.clone().applyQuaternion(t).normalize()}));return n.nationSites={forest:hy.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),water:uy.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),ash:dy.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),metkayinaDir:n[6].sphereDir,ashDir:n[5].sphereDir,soulsDir:n[3].sphereDir,mushDir:n[4].sphereDir},n}const fy=nl([0,1,0]);function wh(s,e,t,n,i=5){const o=n?.nationSites?n:fy,{forest:a,water:r,ash:l}=o.nationSites;let c=-9;for(let k=0;k<a.length;k++){const U=a[k],N=s*U.v.x+e*U.v.y+t*U.v.z+U.bias;N>c&&(c=N)}let h=-9;for(let k=0;k<r.length;k++){const U=r[k],N=s*U.v.x+e*U.v.y+t*U.v.z+U.bias;N>h&&(h=N)}let u=-9;for(let k=0;k<l.length;k++){const U=l[k],N=s*U.v.x+e*U.v.y+t*U.v.z+U.bias;N>u&&(u=N)}const d=jn(s*2.2+4.1,e*2.2-1.7,t*2.2+2.9,Math.min(3,i))*.052,f=Kt(s*6.8+1.3,e*6.8-2.1,t*6.8+3.4)*.016,g=Kt(s*3.1-2.2,e*3.1+1.9,t*3.1-.8)*.038,v=c+d+f,m=h-d*.85,p=u+g,_=Math.max(v,p),y=m-_,x=p-Math.max(v,m);let T="forest";x>0&&p>m?T="ash":y>0&&(T="water");const w=en(-.035,.045,x),E=en(-.035,.045,y)*(1-w),A=Math.max(0,1-w-E),M=Math.abs(p-v),S=Math.exp(-Math.pow(M/.068,2))*(1-en(-.02,.08,y));let C=0,R=0;if(T==="water"){const k=en(0,.14,y),U=o.nationSites.metkayinaDir,N=G.clamp(s*U.x+e*U.y+t*U.z,-1,1),X=Math.acos(N);if(C=-.02-k*.34,X<.145){const oe=1-X/.145;C=G.lerp(-.085,-.155,oe),R=.72+.28*oe}else if(y>.045){const oe=Math.exp(-Math.pow((X-.28)/.17,2)),te=en(.14,.34,y)*.48,we=1-Math.abs(Kt(s*4.4+2.7,e*4.4-1.3,t*4.4+.8)),j=jn(s*8.5+3.1,e*8.5-1.9,t*8.5+2.4,Math.min(3,i)),ue=oe*.48+te*.22+Math.pow(Math.max(0,we),3.6)*.52+j*.26;if(ue>.72)C=.012+Math.min(.085,(ue-.72)*.48),R=.9;else if(ue>.38){const ge=en(.38,.72,ue);C=G.lerp(-.14,-.008,ge),R=ge*.95}}}else if(T==="ash"){const k=en(0,.11,x),U=jn(s*4.1-1.3,e*4.1+2.2,t*4.1-.9,Math.min(4,i))*.06;C=G.lerp(.06,.3,k)+Math.max(-.02,U)+S*.16}else{const k=Math.max(0,v-m),U=en(0,.12,k),N=jn(s*3.6+1.2,e*3.6-.8,t*3.6-2.4,Math.min(4,i))*.075;C=G.lerp(.015,.28,U)+Math.max(0,N)+S*.16}let L=0;for(let k=0;k<5;k++){const U=o[k],N=U.sphereDir,X=Math.acos(G.clamp(s*N.x+e*N.y+t*N.z,-1,1));if(X<U.landBoostRad){const oe=1-X/U.landBoostRad,te=oe*oe*(3-2*oe);if(U.elevMode==="bay"?C=Math.max(C,.14+te*.18):C=Math.max(C,.16+te*.24),(U.elevMode==="crater"||U.elevMode==="basin")&&X<.11){const we=1-X/.11;L=Math.max(L,we*we*.0024)}}}const P=1-Math.abs(Kt(s*5.6+1.9,e*5.6-3.4,t*5.6+.7)),F=Math.max(0,C-.12)*Math.pow(Math.max(0,P),2.1)+S*.28,z=jn(s*8.2+4.1,e*8.2-2.3,t*8.2+.9,3);return{cont:C,ridge:P,highlandRidge:F,craterDepression:L,forestFactor:A,waterFactor:E,ashFactor:w,reefFactor:R,borderMountain:S,forestClump:z,nation:T}}function py(s,e,t,n=[0,1,0]){const i=new b(n[0],n[1],n[2]).normalize(),o=i.x,a=i.y,r=i.z,l=s==="p1"?nl([o,a,r]):null;let c=null;if(s==="p2"){const M=new ut().setFromUnitVectors(new b(0,1,0),i).invert();c=new Tt().setFromMatrix4(new ot().makeRotationFromQuaternion(M)).elements}const h=Xs(e,t),u=Xs(e,t),d=Xs(e,t),f=h.getContext("2d").createImageData(e,t),g=u.getContext("2d").createImageData(e,t),v=d.getContext("2d").createImageData(e,t),m=f.data,p=g.data,_=v.data,y=new Float32Array(e),x=new Float32Array(e);for(let M=0;M<e;M++){const S=(M+.5)/e*Math.PI*2;y[M]=Math.cos(S),x[M]=Math.sin(S)}const T=s==="p4"?cy([o,a,r]):null;for(let M=0;M<t;M++){const S=(M+.5)/t*Math.PI,C=Math.sin(S),R=Math.cos(S);for(let L=0;L<e;L++){const P=-y[L]*C,F=x[L]*C,z=P*o+R*a+F*r,k=(M*e+L)*4;let U=0,N=0,X=0,oe=0,te=0,we=0,j=.5;if(s==="p4"){let ge=-2,pe=-2,ee=0;for(let he=0;he<T.length;he++){const De=T[he].h,be=P*De.x+R*De.y+F*De.z;be>ge?(pe=ge,ge=be,ee=he):be>pe&&(pe=be)}const fe=T[ee],me=Math.acos(Math.min(1,ge)),Ae=Math.atan2(P*fe.e2.x+R*fe.e2.y+F*fe.e2.z,P*fe.e1.x+R*fe.e1.y+F*fe.e1.z);let ve=Math.abs(Math.cos(me*95));ve*=ve,ve*=ve,ve*=ve,ve*=ve;const Z=en(.008,.02,me);let B=Math.abs(Math.cos(Ae*12));B*=B,B*=B,B*=B,B*=B,B*=B;const et=B*en(.02,.07,me)*(1-en(.45,.9,me)),_e=1-en(0,.014,ge-pe),We=H(Math.floor(P*140),Math.floor(R*140),Math.floor(F*140)),Le=H(Math.floor(P*700)+3,Math.floor(R*700),Math.floor(F*700)),rt=Kt(P*6,R*6,F*6)*.5+.5,Xe=(Le>.6?1:0)*(.35+.65*We)*(.4+.6*rt),O=ve*.85*Z+et*.8+_e*1.1+Xe*.45;let D,ie,xe;We<.33?(D=1,ie=.74,xe=.32):We<.66?(D=1,ie=.88,xe=.62):(D=1,ie=.52,xe=.18),oe=O*D,te=O*ie,we=O*xe;const re=.11+.1*We+.05*rt+.06*ve*Z;U=re*1.05,N=re,X=re*.95,j=.4+.3*We+.2*ve}else if(s==="p2"){const ge=c[0]*P+c[3]*R+c[6]*F,pe=c[1]*P+c[4]*R+c[7]*F,ee=c[2]*P+c[5]*R+c[8]*F,fe=H(Math.floor(ge*560),Math.floor(pe*560),Math.floor(ee*560)),me=H(Math.floor(ge*96)+7,Math.floor(pe*96),Math.floor(ee*96));if(z>.84){const Ae=To(ge,pe,ee),ve=Kt(ge*14+3,pe*14,ee*14)*.5+.5,Z=1-en(.41,.49,Ae.theta);if(Ae.isOcean){const B=en(-.045,0,Ae.coastSignedDist);U=.012+.018*B,N=.032+.045*B,X=.062+.055*B,oe=0,te=0,we=0,j=.25}else if(Ae.district==="badlands")Ae.subzone==="oilfields"?(U=.075+.04*ve,N=.07+.035*ve,X=.065+.03*ve,oe=0,te=0,we=0,j=.44+.2*ve):(U=(.24+.14*ve)*Z+.19*(1-Z),N=(.115+.055*ve)*Z+.1*(1-Z),X=(.068+.03*ve)*Z+.06*(1-Z),Ae.subzone==="eastern_plains"&&fe>.965&&Math.abs(Math.sin(ge*42))>.85&&(oe=.16,te=.24,we=.2),j=.46+.28*ve);else if(Ae.district==="pacifica")U=.052+.03*me,N=.055+.03*me,X=.062+.03*me,fe>.992&&(oe=.35,te=.12,we=.04),j=.44+.16*me;else if(Ae.district==="santo_domingo"){if(Ae.subzone==="arroyo"){U=.11+.04*ve,N=.085+.03*ve,X=.065+.02*ve;const B=fe>.92?.35+.35*me:0;oe=B*.95,te=B*.42,we=B*.1}else{const B=Math.abs(Math.sin(Ae.ax*190))>.86||Math.abs(Math.sin(Ae.ay*190))>.86;U=.13+.04*ve,N=.105+.035*ve,X=.08,B&&fe>.78&&(oe=.42,te=.21,we=.06)}j=.46+.15*me}else if(Ae.district==="heywood"){if(U=.095+.035*me,N=.085+.03*me,X=.07,fe>.74){const B=.38+.45*me;oe=B*.96,te=B*.62,we=B*.18}j=.52+.24*me}else if(Ae.district==="westbrook")if(Ae.subzone==="north_oak")U=.095+.04*ve,N=.165+.06*ve,X=.085+.03*ve,fe>.978&&(oe=.48,te=.36,we=.18),j=.62+.26*ve;else if(Ae.subzone==="charter_hill")U=.19+.05*me,N=.2+.05*me,X=.22+.05*me,fe>.8&&(oe=.35,te=.38,we=.44),j=.54+.22*me;else{if(U=.075+.03*me,N=.07+.03*me,X=.095+.04*me,fe>.65){const B=.45+.48*me;oe=B*.88,te=B*.24,we=B*.72}j=.58+.26*me}else if(Ae.district==="watson")if(Ae.subzone==="northside_port")U=.055+.025*me,N=.06+.025*me,X=.075+.03*me,fe>.93&&(oe=.16,te=.34,we=.42),j=.44+.15*me;else{if(U=.065+.03*me,N=.065+.03*me,X=.082+.035*me,fe>.6){const B=.48+.52*me;me>.62?(oe=B*.95,te=B*.14,we=B*.22):me>.25?(oe=B*.12,te=B*.78,we=B*.92):(oe=B*.92,te=B*.72,we=B*.16)}j=.58+.28*me}else{const B=1-en(.06,.21,Math.hypot(Ae.ax,Ae.ay));if(U=.075+.04*me,N=.085+.04*me,X=.115+.05*me,fe>.48){const et=(.48+.65*B)*(.45+.55*me);me>.72?(oe=et*.92,te=et*.76,we=et*.38):me>.34?(oe=et*.22,te=et*.78,we=et*1):(oe=et*.78,te=et*.88,we=et*1)}j=.65+.28*B}}else{let Ae=jn(ge*2.1+4.3,pe*2.1,ee*2.1,5);if(ge<-.25&&(Ae-=(-.25-ge)*.45),Ae>.04){const ve=Kt(ge*9+1.5,pe*9,ee*9)*.5+.5;U=.21+.12*ve,N=.105+.05*ve,X=.065+.03*ve,j=.46+.28*ve}else{const ve=en(-.35,.04,Ae);U=.012+.02*ve,N=.032+.045*ve,X=.068+.065*ve,j=.28}}}else if(s==="p3"){let ge=jn(P*1.8+11,R*1.8,F*1.8,5);z>.84&&(ge=Math.max(ge,.08+(z-.84)*.8));const pe=1-Math.abs(Kt(P*7+3,R*7,F*7)),ee=Math.max(0,ge-.12)*pe*pe*3*(z>.9?.2:1),fe=Kt(P*14,R*14,F*14);if(ge>0)j=.45+ge*.6+ee*.6,R<-.9||R>.93?(U=.9,N=.93,X=.96):ee>.6?(U=.88,N=.9,X=.94):ee>.25?(U=.36,N=.31,X=.26):fe>.3&&z<.9?(U=.07,N=.2,X=.07):(U=.15+.04*fe,N=.34+.05*fe,X=.11),H(Math.floor(P*300),Math.floor(R*300),Math.floor(F*300))>.996&&(oe=.9,te=.62,we=.3);else{const me=en(-.25,0,ge);U=.02+.03*me,N=.08+.12*me,X=.22+.13*me,(R<-.92||R>.94)&&(U=.88,N=.92,X=.96),j=.3+ge*.3}}else{const{cont:ge,highlandRidge:pe,forestFactor:ee,ashFactor:fe,reefFactor:me,borderMountain:Ae,nation:ve}=wh(P,R,F,l),Z=Kt(P*11,R*11,F*11),B=Kt(P*28+2.1,R*28,F*28-1.4)*.5+.5,et=jn(P*6.5-3.2,R*6.5+1.4,F*6.5,3)*.5+.5;if(ve==="ash"&&ge>0){const _e=.125+.085*B+.03*Z,We=Math.min(1,pe*2.2+Ae*.55);U=G.lerp(_e*1.06,.24,We*.6),N=G.lerp(_e*.98,.22,We*.6),X=G.lerp(_e*1.04,.24,We*.6);const rt=Math.pow(Math.max(0,1-Math.abs(Kt(P*18+4.1,R*18,F*18-2.3))),16)*fe*.72;U=Math.min(1,U+rt*.32),N=Math.min(1,N+rt*.07),oe=rt*.78,te=rt*.16,we=rt*.02,j=.58+fe*.28+pe*.42}else if(ge>0)if(ve==="water"){const _e=en(0,.032,ge);U=G.lerp(.84,.15+.04*B,_e),N=G.lerp(.79,.42+.08*et,_e),X=G.lerp(.61,.18+.03*B,_e),j=.46+ge*1.2}else{const _e=en(.28,.78,et);U=G.lerp(.088,.145,_e)+.035*B,N=G.lerp(.235,.355,_e)+.055*Z,X=G.lerp(.105,.148,_e)+.022*B;const We=en(.55,.85,B)*(1-Math.min(1,pe*3));U=G.lerp(U,.22,We*.42),N=G.lerp(N,.4,We*.38);const Le=Math.min(1,pe*2.6+Ae*.72);U=G.lerp(U,.28,Le*.65),N=G.lerp(N,.31,Le*.58),X=G.lerp(X,.29,Le*.62);const rt=en(.22,.44,pe);U=G.lerp(U,.68,rt*.52),N=G.lerp(N,.74,rt*.52),X=G.lerp(X,.72,rt*.52);const Xe=Math.pow(Math.max(0,1-Math.abs(Kt(P*13+1.2,R*13-.7,F*13+2.4))),22);if(Xe>.22&&pe<.14){const he=(Xe-.22)*1.1;U=G.lerp(U,.04,he),N=G.lerp(N,.28,he),X=G.lerp(X,.34,he)}const O=H(Math.floor(P*260),Math.floor(R*260),Math.floor(F*260)),D=en(.45,.85,et)*(O>.965?.36:0),ie=Xe>.3?(Xe-.3)*.28:0,xe=(D+ie)*ee*(1-Le*.85),re=B>.52;oe=xe*(re?.22:.04),te=xe*(re?.12:.34),we=xe*.38,j=.48+ge*.58+pe*.45}else{const _e=en(-.36,-.06,ge),We=G.lerp(.031,.055,_e),Le=G.lerp(.149,.263,_e),rt=G.lerp(.29,.459,_e),Xe=en(-.085,0,ge),O=Math.min(1,Math.max(me*.92,Xe*.85)),D=en(.45,.98,O),ie=G.lerp(.11,.22,D),xe=G.lerp(.639,.839,D),re=G.lerp(.62,.769,D);U=G.lerp(We,ie,O),N=G.lerp(Le,xe,O),X=G.lerp(rt,re,O);const he=O*en(.55,.95,B)*.26;oe=he*.04,te=he*.34,we=he*.38,j=.28+O*.06}}m[k]=U*255,m[k+1]=N*255,m[k+2]=X*255,m[k+3]=255,p[k]=oe*255,p[k+1]=te*255,p[k+2]=we*255,p[k+3]=255;const ue=j*255;_[k]=ue,_[k+1]=ue,_[k+2]=ue,_[k+3]=255}}h.getContext("2d").putImageData(f,0,0),u.getContext("2d").putImageData(g,0,0),d.getContext("2d").putImageData(v,0,0);const w=new pn(h);w.colorSpace=Zt,w.anisotropy=8;const E=new pn(u);E.colorSpace=Zt,E.anisotropy=8;const A=new pn(d);return{map:w,emissiveMap:E,bumpMap:A}}function my(s,e=1024,t=512,n=[0,1,0]){const i=new b(n[0],n[1],n[2]).normalize(),o=i.x,a=i.y,r=i.z,l=Xs(e,t),c=l.getContext("2d"),h=c.createImageData(e,t),u=h.data,d={p1:{lo:.04,hi:.34,col:[1,1,1],k:.92,cyclonic:!0},p2:{lo:-.04,hi:.32,col:[.34,.4,.48],k:.56},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[s]||{lo:.1,hi:.4,col:[1,1,1],k:.7},f=d.cyclonic?[{v:new b(-.45,.42,.78).normalize(),spin:2.35,radius:.55},{v:new b(.62,.54,-.57).normalize(),spin:-2.15,radius:.48},{v:new b(.18,-.46,.87).normalize(),spin:2.05,radius:.5},{v:new b(-.74,-.35,-.57).normalize(),spin:-2.25,radius:.52},{v:new b(.78,-.18,.6).normalize(),spin:1.85,radius:.44}]:null,g=new Float32Array(e),v=new Float32Array(e);for(let p=0;p<e;p++){const _=(p+.5)/e*Math.PI*2;g[p]=Math.cos(_),v[p]=Math.sin(_)}for(let p=0;p<t;p++){const _=(p+.5)/t*Math.PI,y=Math.sin(_),x=Math.cos(_);for(let T=0;T<e;T++){const w=-g[T]*y,E=v[T]*y,A=w*o+x*a+E*r;let M=0;if(d.cyclonic&&f){let C=w,R=x,L=E,P=0;for(let N=0;N<f.length;N++){const X=f[N],oe=C*X.v.x+R*X.v.y+L*X.v.z;if(oe>.62){const te=Math.acos(Math.min(1,oe)),we=Math.exp(-Math.pow(te/X.radius,2)*2.6),j=X.spin*we*(1-Math.min(1,te/X.radius)*.4),ue=Math.cos(j),ge=Math.sin(j),pe=X.v.x,ee=X.v.y,fe=X.v.z,me=ee*L-fe*R,Ae=fe*C-pe*L,ve=pe*R-ee*C,Z=oe;C=C*ue+me*ge+pe*Z*(1-ue),R=R*ue+Ae*ge+ee*Z*(1-ue),L=L*ue+ve*ge+fe*Z*(1-ue),P+=we*.24}}const F=Kt(C*2.2+1.5,R*4.5,L*2.2-.8)*.42,z=jn(C*3.1+14+F,R*5.6,L*3.1-F,5),k=Kt(C*9.5+3,R*12,L*9.5)*.08,U=z+P*.55+k;M=en(d.lo,d.hi,U)*d.k}else{const C=Kt(w*2+4,x*2,E*2)*.35,R=jn(w*3.2+20+C,x*5,E*3.2-C,5);M=en(d.lo,d.hi,R)*d.k,d.clearNorth&&(M*=1-en(.78,.9,A))}const S=(p*e+T)*4;u[S]=d.col[0]*255,u[S+1]=d.col[1]*255,u[S+2]=d.col[2]*255,u[S+3]=M*255}}c.putImageData(h,0,0);const m=new pn(l);return m.colorSpace=Zt,m.anisotropy=8,m}function gy(s,e=.06){s.onBeforeCompile=t=>{t.uniforms.uSunViewPos=Qc.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},s.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function vy(){const e=Xs(128,128),t=e.getContext("2d"),n=t.createImageData(128,128),i=n.data;for(let a=0;a<128;a++){const r=a/128*2-1;for(let l=0;l<128;l++){const c=l/128*2-1,h=Math.hypot(c,r),u=Math.max(0,1-en(.18,.98,h)),d=jn(c*2.8+4.2,r*2.8-1.7,3.1,4)*.5+.5,f=Math.max(0,Math.min(1,u*(.45+.85*d))),g=Math.round(236+19*d),v=(a*128+l)*4;i[v]=g,i[v+1]=Math.min(255,g+4),i[v+2]=255,i[v+3]=Math.round(f*255)}}t.putImageData(n,0,0);const o=new pn(e);return o.needsUpdate=!0,o}function xy(s,e){const t={uMap:{value:s},uColor:{value:new ne(e)},uOpacity:{value:0},uPointSize:{value:94}},n=new rn({uniforms:t,vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1});return n.color=t.uColor.value,Object.defineProperty(n,"opacity",{get:()=>t.uOpacity.value,set:i=>{t.uOpacity.value=i}}),n}function ud(s,e){return new rn({uniforms:{uCloudMap:{value:s},uSunPosition:{value:new b(0,0,0)},uPlanetCenter:{value:new b(0,0,0)},uAmbientColor:{value:new ne(e.ambient)},uSunColor:{value:new ne(e.sunlit)},uHorizonColor:{value:new ne(e.horizon)},uOpacity:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1,side:It})}function _y(){const s=new hn(28e3,48,32),e=new rn({uniforms:{uLocalUp:{value:new b(0,1,0)},uSunDir:{value:new b(0,.2,1)},uZenithColor:{value:new ne(1991880)},uMidColor:{value:new ne(5155054)},uHorizonColor:{value:new ne(16760171)},uSunGlowColor:{value:new ne(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1},uMieG:{value:.78},uMieIntensity:{value:.55}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:On}),t=new Ge(s,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t.userData.skipSSAO=!0,t}function My(s,e=157.5){const t=s.localRadius,n=new Nt;n.name=`${s.id}_Orbital_Globe`;const i=s.capLocalDir?s.capLocalDir.clone().normalize():new b(0,1,0),o=[i.x,i.y,i.z],a={p4:[2048,1024],p2:[1536,768],p1:[1536,768]}[s.id]||[1024,512],{map:r,emissiveMap:l,bumpMap:c}=py(s.id,a[0],a[1],o),h={p1:{ei:.56,rough:.72,metal:.06,bump:1.45,floor:0},p2:{ei:.96,rough:.58,metal:.3,bump:.65,floor:0},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[s.id],u=new Be({map:r,emissiveMap:l,emissive:new ne(1,1,1),emissiveIntensity:h.ei,roughness:h.rough,metalness:h.metal,bumpMap:c,bumpScale:h.bump});gy(u,h.floor);const d=new Ge(new hn(t,128,128),u);d.name=`${s.id}_Orbital_Surface`,n.add(d);const f=s.id==="p1"?[1536,768]:[1024,512],g=my(s.id,f[0],f[1],o),v={p1:{ambient:4942728,sunlit:16777215,horizon:10279148},p2:{ambient:860724,sunlit:6205136,horizon:1066082},p3:{ambient:8165566,sunlit:16777215,horizon:16039028},p4:{ambient:6434840,sunlit:16763016,horizon:14446130}}[s.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},m=ud(g,v),p=new Ge(new hn(t*1.045,128,128),m);p.name=`${s.id}_Low_Cloud_Shell`,p.userData.skipSSAO=!0,n.add(p);const _=ud(g,v),y=new Ge(new hn(t*1.082,128,128),_);y.name=`${s.id}_High_Cloud_Shell`,y.userData.skipSSAO=!0,n.add(y);const x=new Nt;x.name=`${s.id}_Lower_Cloud_Puffs_Group`,x.visible=!1,n.add(x);const T=460,w=new Float32Array(T*3),E=65/e,A=160/e,M=new ut().setFromUnitVectors(new b(0,1,0),i),S=new b;for(let F=0;F<T;F++){const z=Math.acos(1-H(F,2,17)*.42),k=H(F,9,5)*Math.PI*2,U=E+H(F,4,13)*(A-E),N=t+U;S.set(N*Math.sin(z)*Math.cos(k),N*Math.cos(z),N*Math.sin(z)*Math.sin(k)),S.applyQuaternion(M),w[F*3]=S.x,w[F*3+1]=S.y,w[F*3+2]=S.z}const C=new Et;C.setAttribute("position",new _t(w,3));const R=xy(vy(),v.sunlit),L=new Ei(C,R);L.name=`${s.id}_Volumetric_Billboard_Clouds`,L.userData.skipSSAO=!0,x.add(L);const P=Ff(s,t,s.id==="p4"?1.078:1.095);return n.add(P),{group:n,surfaceMesh:d,upperCloudMesh:y,lowerCloudGroup:x,lowerCloudMesh:p,lowerCloudPuffs:L,cloudDeckPalette:v,atmosphere:P}}function Ff(s,e,t=1.045){const n=new hn(e*t,96,96),i={p1:[6083327,9627391],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[s.id]||[6866175,16755285],o=new rn({uniforms:{uColorDay:{value:new ne(i[0])},uColorHorizon:{value:new ne(i[1])},uSunPosition:{value:new b(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Tn,side:wi}),a=new Ge(n,o);return a.name=`${s.id}_Fresnel_Atmosphere`,a.userData.skipSSAO=!0,a}function yy(s,e=1400){const t=s.localRadius,n=1.65,i=s.id==="p4",o=256,a=Xs(o,o),r=Xs(o,o),l=a.getContext("2d"),c=r.getContext("2d");l.fillStyle=i?"#2a2c31":"#111821",l.fillRect(0,0,o,o),c.fillStyle="#000000",c.fillRect(0,0,o,o);const h=i?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let y=4;y<o;y+=8)for(let x=3;x<o;x+=6)Math.random()<(i?.55:.42)&&(c.fillStyle=h[Math.random()*h.length|0],c.fillRect(x,y,3,4));const u=new pn(a);u.colorSpace=Zt;const d=new pn(r);d.colorSpace=Zt;const f=new un(1,1,1);f.translate(0,.5,0);const g=new Be({map:u,emissiveMap:d,emissive:new ne(1,1,1),emissiveIntensity:i?1.6:2,roughness:.42,metalness:.7}),v=new bt(f,g,e);v.name=`${s.id}_Horizon_Tower_Band`;const m=new qt,p=new b(0,1,0),_=new b;for(let y=0;y<e;y++){const x=.025+Math.pow(H(y,3,9),.85)*.14,T=H(y,7,1)*Math.PI*2;_.set(Math.sin(x)*Math.cos(T),Math.cos(x),Math.sin(x)*Math.sin(T)),m.position.copy(_).multiplyScalar(t*.9996),m.quaternion.setFromUnitVectors(p,_),m.rotateY(H(y,2,2)*Math.PI);const w=n*(.0024+.0042*H(y,5,5)),E=n*(.0024+.0042*H(y,6,8)),A=n*(.006+.025*Math.pow(H(y,9,4),1.6));m.scale.set(w,A,E),m.updateMatrix(),v.setMatrixAt(y,m.matrix)}return v.instanceMatrix.needsUpdate=!0,v}function by(s,e,t,n){s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.updateMatrixWorld(!0);const i=n==="p2",o=new b(0,1,0),a=e/t,r=i?124:152;function l(w,E,A,M=!1){const S=Math.sqrt(w*w+A*A),C=Math.min(1.18,S/(a*.94)),R=Math.atan2(A,w),L=Math.sin(C),P=L*Math.cos(R),F=Math.cos(C),z=L*Math.sin(R);let k=E;if(M){const X=G.smoothstep(S,r*.65,r*1);k=G.lerp(E,i?-36:-18,X)}const U=n==="p3"?14.5:i?16.5:.4,N=Math.max(a*.9,a+k+U);return{px:N*P,py:N*F-a,pz:N*z,nx:P,ny:F,nz:z}}const c=new ot().copy(s.matrixWorld).invert(),h=[],u=new Map;s.traverse(w=>{if(w.isMesh&&w.geometry){const E=new ot().multiplyMatrices(c,w.matrixWorld);h.push({mesh:w,initRootMat:E}),u.set(w.geometry,(u.get(w.geometry)||0)+1)}});for(const{mesh:w,initRootMat:E}of h)w.parent!==s&&s.attach(w),E.decompose(w.position,w.quaternion,w.scale),w.updateMatrix();const d=new b,f=new ut,g=new b,v=new b,m=new ut,p=new b,_=Lf(),y=el(),x=[];let T=0;for(const{mesh:w,initRootMat:E}of h){if(i){if(/^NC_FarHorizon/.test(w.name)){w.visible=!1;continue}if(/^NC_Canyon_Skyscraper/.test(w.name)&&(d.setFromMatrixPosition(E),Math.hypot(d.x,d.z)>104||d.x<-58)){w.visible=!1;continue}}const A=u.get(w.geometry)||1,M=/Terrain|River|Ground|Forest|Canal|Hill|Slope|Meadow|Grass|Cliff|Earth|Dirt|Landscape|Surface/i.test(w.name),S=/Citadel|Castle|Fortress|Keep|Senate|Tower|Skyscraper|Bridge|Spire|Tree|Foliage|Oak|Pine/i.test(w.name);w.castShadow=!M&&S&&T<110,w.castShadow&&T++,w.receiveShadow=M||S;const C=Array.isArray(w.material)?w.material:[w.material];w.castShadow&&C.some(R=>R?.transparent&&!(R.alphaTest>0))&&(w.castShadow=!1);for(const R of C)!R||R.userData?.pbrUpgraded||(R.userData.pbrUpgraded=!0,M&&R.isMeshStandardMaterial?(!R.roughnessMap&&y.roughnessMap&&(R.roughnessMap=y.roughnessMap),!R.bumpMap&&y.bumpMap&&(R.bumpMap=y.bumpMap,R.bumpScale=.04),n==="p3"&&x.push(Sh(R,{mode:"perugius",worldRadius:e*157.5,peakStart:3.6,peakEnd:8.2,shoreBand:.55})),R.needsUpdate=!0):R.isMeshStandardMaterial&&!R.transparent&&!R.map&&_.map&&(R.roughnessMap=_.roughnessMap,R.bumpMap=_.bumpMap,R.bumpScale=.025,R.needsUpdate=!0));if(A===1||M){A>1&&(w.geometry=w.geometry.clone());const R=w.geometry.attributes.position,L=new ot().copy(E).invert();for(let P=0;P<R.count;P++){p.fromBufferAttribute(R,P).applyMatrix4(E);const F=l(p.x,p.y,p.z,M);p.set(F.px,F.py,F.pz).applyMatrix4(L),R.setXYZ(P,p.x,p.y,p.z)}R.needsUpdate=!0,w.geometry.computeVertexNormals(),w.geometry.computeBoundingBox(),w.geometry.computeBoundingSphere()}else{if(E.decompose(d,f,g),i&&/^NC_Canyon_Skyscraper/.test(w.name)){const L=Math.hypot(d.x,d.z),P=1-G.smoothstep(L,95,128)*.46;g.y*=P}const R=l(d.x,d.y,d.z,!1);v.set(R.nx,R.ny,R.nz).normalize(),m.setFromUnitVectors(o,v),w.position.set(R.px,R.py,R.pz),w.quaternion.copy(m).multiply(f),w.scale.copy(g),w.updateMatrix()}}s.scale.setScalar(t),s.position.set(0,e,0),s.updateMatrixWorld(!0),s.userData.splatUniforms=x}const xt=1/3.5,Di=new b(0,1,0);function dd(s,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,32);i.addColorStop(0,s),i.addColorStop(.45,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const o=new pn(t);return o.needsUpdate=!0,o}function Of(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new b(1,0,0):new b(0,0,1),n=new b().crossVectors(e,t).normalize(),i=new b().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Sy(){const s=[],e=new oi([new b(0,0,0),new b(.05,.35,-.02),new b(-.04,.72,.04),new b(.02,1,-.01)]);s.push(new pi(e,6,.075,5,!1).toNonIndexed());const t=[[new b(.02,.48,.01),new b(.32,.76,.14)],[new b(-.02,.62,.03),new b(-.28,.92,-.18)],[new b(0,.78,.02),new b(.18,1.12,-.22)],[new b(.02,.56,-.02),new b(-.22,.82,.25)]];for(const[i,o]of t){const a=i.clone().lerp(o,.5).add(new b(0,.06,0)),r=new oi([i,a,o]);s.push(new pi(r,4,.026,4,!1).toNonIndexed())}const n=Ct(s,!1);return n.computeVertexNormals(),n}function wy(){const s=[];for(let r=-2;r<=2;r++){const l=new ls(.36,.95,2,3);l.translate(r*.14,.48,Math.sin(r*.9)*.06),l.rotateZ(-r*.22),s.push(l.toNonIndexed())}const e=Ct(s,!1);e.computeVertexNormals();const t=[];for(let r=0;r<6;r++){const l=r/6*Math.PI*2,c=r===0?0:.28,h=r===0?1:.55+H(r,3,7)*.45,u=new tn(.11,.08,h,6,1);u.translate(Math.cos(l)*c,h*.5,Math.sin(l)*c),u.rotateZ((H(r,2,5)-.5)*.22),t.push(u.toNonIndexed())}const n=Ct(t,!1);n.computeVertexNormals();const i=[],o=new tn(.32,.4,.28,8);o.translate(0,.14,0),i.push(o.toNonIndexed());for(let r=0;r<10;r++){const l=r/10*Math.PI*2,c=new Vn(.065,.72,4);c.translate(0,.36,0),c.rotateX(.55),c.rotateY(l),c.translate(Math.cos(l)*.22,.2,Math.sin(l)*.22),i.push(c.toNonIndexed())}const a=Ct(i,!1);return a.computeVertexNormals(),{fanGeo:e,tubeGeo:n,anemoneGeo:a}}function Ay(){const s=[];for(let t=0;t<2;t++){const n=new ls(.24,1,2,8);n.translate(0,.5,0);const i=n.attributes.position;for(let o=0;o<i.count;o++){const a=i.getY(o),r=i.getX(o)+Math.sin(a*Math.PI*3)*.14,l=Math.cos(a*Math.PI*2.5+t*1.57)*.1;i.setXYZ(o,r,a,l)}n.rotateY(t*Math.PI*.5),n.computeVertexNormals(),s.push(n.toNonIndexed())}const e=Ct(s,!1);return e.computeVertexNormals(),e}function Ey(s,e,t,n){const o=Of(e.capDir),a=new Nt;a.name="Pandora_Biome_AshPeople";const r=(ee,fe,me=0)=>{const Ae=o.upDir.clone().addScaledVector(o.e1,ee).addScaledVector(o.e2,fe).normalize(),ve=t(Ae.x,Ae.y,Ae.z);return{pos:Ae.clone().multiplyScalar(s+ve.elev+me),normal:Ae,elev:ve.elev,nation:ve.nation}},l=qo(),c={uLavaTime:{value:0}},h=new Be({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.055,roughness:.92,metalness:.06});h.onBeforeCompile=ee=>{ee.uniforms.uLavaTime=c.uLavaTime,ee.vertexShader=`attribute float aVolcanoLava;
varying float vVolcanoLava;
varying vec3 vVolPos;
`+ee.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vVolcanoLava = aVolcanoLava;
        vVolPos = transformed;`),ee.fragmentShader=`uniform float uLavaTime;
varying float vVolcanoLava;
varying vec3 vVolPos;
`+ee.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (vVolcanoLava > 0.01) {
          float pulseV = 0.84 + 0.16 * sin(uLavaTime * 2.4 + vVolPos.x * 95.0 + vVolPos.z * 85.0);
          vec3 magma = mix(vec3(1.1, 0.16, 0.02), vec3(2.2, 0.62, 0.08), vVolcanoLava);
          totalEmissiveRadiance += magma * pow(vVolcanoLava, 1.35) * pulseV;
        }`)},h.customProgramCacheKey=()=>"pandoraAshStratovolcanoV1";const u=new Be({color:7017476,emissive:16729608,emissiveIntensity:1.55,roughness:.25});u.userData.animatedEmissive=!0,n.push({mat:u,dayColor:8133638,nightColor:16736792,dayEmissive:16726792,nightEmissive:16733196,dayEI:1.45,nightEI:2.65,pulsePhase:.4});const d=(ee,fe)=>{const ve=-.11746031746031746,Z=1225,B=new Float32Array(Z*3),et=new Float32Array(Z*3),_e=new Float32Array(Z*2),We=new Float32Array(Z),Le=[],rt=new ne(1446935),Xe=new ne(2170144),O=new ne(2762024),D=new ne(1052176),ie=new ne;for(let re=0;re<=24;re++)for(let he=0;he<=48;he++){const De=he/48,be=De*Math.PI*2,Ne=Math.cos(be),pt=Math.sin(be),Ee=jn(Ne*2.1+fe,re/24*2.4,pt*2.1-fe,3),Ue=Kt(Ne*5.8+fe*1.7,re/24*4.5,pt*5.8),Qe=Math.sin(be*9+Ee*4.2+fe*2.3),ct=Math.pow(Math.max(0,-Qe),2.5);let ze=ee.rad,vt=0,nt=0;if(re<=4){const V=re/4;vt=G.lerp(ve,-.004,V);const Pe=G.lerp(1.48,1.3,V);ze=ee.rad*Pe*(1+(Ee-.5)*.14),ie.copy(rt)}else if(re<=18){const V=(re-4)/14,Pe=ee.rad*G.lerp(1.3,.34,Math.pow(V,.72)),de=1+(.12*Qe+.16*(Ee-.5)+.07*Ue)*(1-V*.28);ze=Pe*de,vt=G.lerp(-.004,ee.h,Math.pow(V,1.32))+(Ee-.5)*ee.h*.055*(1-V*.3);const ye=G.smoothstep(V,.56,.96);nt=ct*ye*.72,ie.copy(rt).lerp(Xe,V*.8).lerp(O,Math.max(0,Ue)*.48)}else{const V=(re-18)/6,Pe=ee.rad*.34*(1+.16*(Ee-.5)+.08*Ue),de=ee.h*(1+.09*(Ee-.5)+.06*Qe);ze=Pe*(1-V*.88),vt=de-Math.pow(V,.76)*(ee.h*.38),nt=Math.max(ct*.45*(1-V*.5),Math.pow(V,1.45)*.95),ie.copy(Xe).lerp(D,V*.9)}const ft=re*49+he;B[ft*3]=Ne*ze,B[ft*3+1]=vt,B[ft*3+2]=pt*ze,et[ft*3]=ie.r,et[ft*3+1]=ie.g,et[ft*3+2]=ie.b,_e[ft*2]=De*4,_e[ft*2+1]=re/24*3,We[ft]=nt}for(let re=0;re<24;re++)for(let he=0;he<48;he++){const De=re*49+he,be=De+48+1,Ne=De+1,pt=be+1;Le.push(De,be,Ne,Ne,be,pt)}const xe=new Et;return xe.setAttribute("position",new _t(B,3)),xe.setAttribute("color",new _t(et,3)),xe.setAttribute("uv",new _t(_e,2)),xe.setAttribute("aVolcanoLava",new _t(We,1)),xe.setIndex(Le),xe.computeVertexNormals(),xe},f=[{lx:-.045*.3125,lz:.032*.3125,rad:.185*xt,h:.215*xt},{lx:.072*.3125,lz:-.048*.3125,rad:.155*xt,h:.175*xt},{lx:-.025*.3125,lz:-.095*.3125,rad:.142*xt,h:.155*xt}],g=[];f.forEach((ee,fe)=>{const me=r(ee.lx,ee.lz,0),Ae=d(ee,fe*4.7+1.3),ve=new Ge(Ae,h);ve.position.copy(me.pos),ve.quaternion.setFromUnitVectors(Di,me.normal),ve.castShadow=!0,ve.receiveShadow=!0,ve.name=`Pandora_Ash_Volcano_${fe+1}`,a.add(ve);const Z=new Ge(new $s(ee.rad*.22,18),u);Z.rotateX(-Math.PI*.5),Z.position.set(0,ee.h*.65,0),Z.name=`Pandora_Ash_Volcano_MagmaCore_${fe+1}`,ve.add(Z),g.push({basePos:me.pos.clone().addScaledVector(me.normal,ee.h*.72),normal:me.normal.clone(),maxH:(.16+fe*.03)*xt,phase:fe*2.1})});const v=32,m=g.length*v,p=new Float32Array(m*3),_=new Et;_.setAttribute("position",new _t(p,3));const y=new Ai({size:14.5,map:dd("rgba(38, 34, 36, 0.76)","rgba(18, 16, 17, 0.30)"),color:2499108,transparent:!0,opacity:.66,depthWrite:!1,sizeAttenuation:!0}),x=new Ei(_,y);x.frustumCulled=!1,x.castShadow=!1,x.name="Pandora_Ash_Volcano_Smoke",a.add(x);const T=600,w=new Float32Array(T*3),E=[];for(let ee=0;ee<T;ee++){const fe=H(ee,3,19)*Math.PI*2,me=Math.sqrt(H(ee,7,11))*.24*.3125,Ae=r(Math.cos(fe)*me,Math.sin(fe)*me,(.006+H(ee,5,2)*.2)*xt);w[ee*3]=Ae.pos.x,w[ee*3+1]=Ae.pos.y,w[ee*3+2]=Ae.pos.z,E.push({dir:Ae.normal,baseAlt:Ae.pos.length(),phase:H(ee,9,4)*Math.PI*2,speed:.04+H(ee,2,8)*.06})}const A=new Et;A.setAttribute("position",new _t(w,3));const M=new Ai({size:.62,map:dd("rgba(255, 138, 64, 0.92)","rgba(180, 62, 24, 0.28)"),color:16751194,transparent:!0,opacity:.54,depthWrite:!1,sizeAttenuation:!0}),S=new Ei(A,M);S.frustumCulled=!1,S.castShadow=!1,S.name="Pandora_Ash_Floating_Cinders",a.add(S);const C=260,R=bh(),L=Sy();L.boundingSphere=new ni(new b(0,0,0),s+1.5);const P=new Be({color:2499104,map:R.map,roughnessMap:R.roughnessMap,bumpMap:R.bumpMap,bumpScale:.04,roughness:.94,metalness:.05}),F=[],z=new qt;for(let ee=0;ee<C*2&&F.length<C;ee++){const fe=H(ee,4,17)*Math.PI*2,me=.014+Math.sqrt(H(ee,8,3))*.1,Ae=r(Math.cos(fe)*me,Math.sin(fe)*me,-5e-4);if(Ae.nation!=="ash")continue;const ve=(.018+H(ee,2,11)*.028)*xt;z.position.copy(Ae.pos),z.quaternion.setFromUnitVectors(Di,Ae.normal),z.rotateY(H(ee,6,9)*Math.PI*2),z.rotateX((H(ee,1,5)-.5)*.22),z.scale.set(ve,ve,ve),z.updateMatrix(),F.push(z.matrix.clone())}const k=new bt(L,P,Math.max(1,F.length));k.name="Pandora_Ash_Charred_Trees",k.frustumCulled=!1,k.castShadow=!1,k.receiveShadow=!0,F.forEach((ee,fe)=>k.setMatrixAt(fe,ee)),k.instanceMatrix.needsUpdate=!0,a.add(k);const U=new Be({color:12167830,roughness:.78}),N=new Be({color:2366745,roughness:.92}),X=new Be({color:16755256,emissive:16734740,emissiveIntensity:1.15,roughness:.35});X.userData.animatedEmissive=!0,n.push({mat:X,dayColor:16755256,nightColor:16768376,dayEmissive:16734740,nightEmissive:16738328,dayEI:.95,nightEI:2.65,pulsePhase:1.1});const oe=[],te=[],we=[];for(let ee=0;ee<6;ee++){const fe=ee/6*Math.PI*2+.3,me=.022*.3125,Ae=r(Math.cos(fe)*me,Math.sin(fe)*me,2e-4),ve=new ut().setFromUnitVectors(Di,Ae.normal);for(let B=-1;B<=1;B+=2){const et=new oi([new b(B*.012*xt,0,0),new b(B*.018*xt,.018*xt,.002*xt),new b(0,.032*xt,0)]),_e=new pi(et,8,.0018*xt,5,!1).toNonIndexed();_e.applyQuaternion(new ut().setFromAxisAngle(Di,fe)),_e.applyQuaternion(ve),_e.translate(Ae.pos.x,Ae.pos.y,Ae.pos.z),te.push(_e)}const Z=r(Math.cos(fe+.25)*.011*.3125,Math.sin(fe+.25)*.011*.3125,5e-4);we.push(Z)}for(let ee=0;ee<16;ee++){const fe=ee/16*Math.PI*2+H(ee,2,7)*.18,me=(.018+ee%3*.008)*.3125,Ae=r(Math.cos(fe)*me,Math.sin(fe)*me,0),ve=new Vn(.0075*xt,.013*xt,6);ve.translate(0,.006*xt,0);const Z=ve.toNonIndexed();Z.rotateY(H(ee,4,1)*Math.PI),Z.applyQuaternion(new ut().setFromUnitVectors(Di,Ae.normal)),Z.translate(Ae.pos.x,Ae.pos.y,Ae.pos.z),oe.push(Z)}const j=new Ge(Ct(te,!1),U);j.name="Pandora_Ash_Giant_Bone_Totems";const ue=new Ge(Ct(oe,!1),N);ue.name="Pandora_Ash_Tribal_Huts",a.add(j,ue);const ge=[];we.forEach(ee=>{const fe=new Vn(.003*xt,.009*xt,6).toNonIndexed();fe.translate(0,.004*xt,0),fe.applyQuaternion(new ut().setFromUnitVectors(Di,ee.normal)),fe.translate(ee.pos.x,ee.pos.y,ee.pos.z),ge.push(fe)});const pe=new Ge(Ct(ge,!1),X);return pe.name="Pandora_Ash_Bonfires",a.add(pe),{group:a,update(ee,fe){c.uLavaTime.value=ee;const me=_.attributes.position;g.forEach((ve,Z)=>{for(let B=0;B<v;B++){const et=Z*v+B,_e=(ee*.24+ve.phase+B/v)%1,We=_e*ve.maxH,Le=_e*.025*xt;me.setXYZ(et,ve.basePos.x+ve.normal.x*We+Math.sin(et+ee*.5)*Le,ve.basePos.y+ve.normal.y*We+Math.cos(et)*Le*.5,ve.basePos.z+ve.normal.z*We+Math.cos(et+ee*.4)*Le)}}),me.needsUpdate=!0,y.color.setRGB(G.lerp(.24,.42,fe),G.lerp(.22,.16,fe),G.lerp(.23,.14,fe));const Ae=A.attributes.position;for(let ve=0;ve<T;ve++){const Z=E[ve],B=Math.sin(ee*Z.speed+Z.phase)*.004,et=Z.baseAlt+Math.cos(ee*.4+Z.phase)*.003;Ae.setXYZ(ve,Z.dir.x*et+B,Z.dir.y*et,Z.dir.z*et-B)}Ae.needsUpdate=!0}}}function Ty(s,e,t,n){const i=.29411764705882354,o=Of(e.capDir),a=new Nt;a.name="Pandora_Biome_MetkayinaReef";const r=(N,X,oe=0)=>{const te=o.upDir.clone().addScaledVector(o.e1,N).addScaledVector(o.e2,X).normalize();return{pos:te.clone().multiplyScalar(s+oe),normal:te}},l=(N,X,oe=0)=>{const te=o.upDir.clone().addScaledVector(o.e1,N).addScaledVector(o.e2,X).normalize(),we=t(te.x,te.y,te.z);return{pos:te.clone().multiplyScalar(s+we.elev+oe),normal:te,elev:we.elev,nation:we.nation}},c=new Be({color:6045222,roughness:.85}),h=new Be({color:7758908,roughness:.9}),u=new Be({color:16764006,emissive:16746532,emissiveIntensity:.55,roughness:.35});u.userData.animatedEmissive=!0,n.push({mat:u,dayColor:16755268,nightColor:16769160,dayEmissive:16742178,nightEmissive:16747560,dayEI:.45,nightEI:2.55,pulsePhase:1.7});const d=[],f=[],g=[],v=[],m=[];for(let N=0;N<18;N++){const X=(N<6?.024:.052+N%3*.012)*i,oe=(N<6?N/6*Math.PI*2:(N-6)/12*Math.PI*2)+H(N,4,3)*.25,te=Math.cos(oe)*X,we=Math.sin(oe)*X,j=r(te,we,5e-4),ue=new ut().setFromUnitVectors(Di,j.normal).multiply(new ut().setFromAxisAngle(Di,oe+H(N,2,7))),ge=(.018+H(N,5,1)*.008)*xt,pe=ge*1.25;m.push({pos:j.pos.clone(),normal:j.normal.clone(),qOri:ue});const ee=new un(ge,.0016*xt,pe).toNonIndexed();ee.translate(0,.0012*xt,0),ee.applyQuaternion(ue),ee.translate(j.pos.x,j.pos.y,j.pos.z),d.push(ee);for(let ve=-1;ve<=1;ve+=2){const Z=new oi([new b(ve*ge*.48,-.0015*xt,-pe*.72),new b(ve*ge*.56,8e-4*xt,0),new b(ve*ge*.48,-.0015*xt,pe*.72)]),B=new pi(Z,8,.0014*xt,5,!1).toNonIndexed();B.applyQuaternion(ue),B.translate(j.pos.x,j.pos.y,j.pos.z),d.push(B)}const fe=ge*.65,me=new tn(.001,ge*.56,fe,8,1);me.scale(.95,1,1.25),me.translate(0,fe*.5+.0018*xt,0);const Ae=me.toNonIndexed();Ae.applyQuaternion(ue),Ae.translate(j.pos.x,j.pos.y,j.pos.z),f.push(Ae);for(let ve=0;ve<(N%2===0?2:1);ve++){const Z=ve===0?1:-1,B=new tn(4e-4*xt,6e-4*xt,.007*xt,5).toNonIndexed();B.translate(Z*ge*.45,.004*xt,pe*.52),B.applyQuaternion(ue),B.translate(j.pos.x,j.pos.y,j.pos.z),d.push(B);const et=new hn(.0014*xt,6,5).toNonIndexed();et.translate(Z*ge*.45,.008*xt,pe*.52),et.applyQuaternion(ue),et.translate(j.pos.x,j.pos.y,j.pos.z),g.push(et)}N<14&&v.push({basePos:j.pos.clone().add(new b(ge*.72,-2e-4*xt,0).applyQuaternion(ue)),normal:j.normal.clone(),qOri:ue,phase:N*.9})}for(let N=0;N<m.length;N++){const X=m[N],oe=N<5?N+1:N===5?0:N<17?N+1:6,te=m[oe],we=X.pos.distanceTo(te.pos);if(we>.005*xt&&we<.22*xt){const j=X.pos.clone().add(te.pos).multiplyScalar(.5).normalize().multiplyScalar(s+9e-4),ue=new un(.0045*xt,.0011*xt,we).toNonIndexed(),ge=te.pos.clone().sub(X.pos).normalize(),pe=j.clone().normalize(),ee=new b().crossVectors(pe,ge).normalize();ge.crossVectors(ee,pe).normalize();const fe=new ot().makeBasis(ee,pe,ge);fe.setPosition(j),ue.applyMatrix4(fe),d.push(ue)}}const p=new Ge(Ct(d,!1),c);p.name="Pandora_Metkayina_Rafts_And_Walkways";const _=new Ge(Ct(f,!1),h);_.name="Pandora_Metkayina_Woven_Huts";const y=new Ge(Ct(g,!1),u);y.name="Pandora_Metkayina_Torches",a.add(p,_,y);const x=new Vn(.0022*xt,.022*xt,6);x.rotateX(Math.PI*.5),x.scale(1,.45,1);const T=new bt(x,c,v.length);T.name="Pandora_Metkayina_Moored_Canoes",a.add(T);const{fanGeo:w,tubeGeo:E,anemoneGeo:A}=wy(),M=new ni(new b(0,0,0),s+1.5);w.boundingSphere=M,E.boundingSphere=M,A.boundingSphere=M;const S=[{name:"Pandora_Reef_Corals_CyanFans",geo:w,dayCol:2517860,nightCol:62975,nightEm:65512,matrices:[]},{name:"Pandora_Reef_Corals_MagentaTubes",geo:E,dayCol:9192546,nightCol:16725168,nightEm:16720544,matrices:[]},{name:"Pandora_Reef_Corals_CoralAnemones",geo:A,dayCol:10379322,nightCol:16742436,nightEm:16736792,matrices:[]}],C=new qt;for(let N=0;N<580;N++){const X=H(N,3,19)*Math.PI*2,oe=Math.sqrt(H(N,7,13))*.165*i,te=l(Math.cos(X)*oe,Math.sin(X)*oe,0);if(te.nation!=="water"||te.elev>=-.002)continue;const we=(.011+H(N,5,11)*.017)*xt;C.position.copy(te.pos),C.quaternion.setFromUnitVectors(Di,te.normal),C.rotateY(H(N,2,7)*Math.PI*2),C.scale.set(we,we,we),C.updateMatrix(),S[N%3].matrices.push(C.matrix.clone())}S.forEach((N,X)=>{if(N.matrices.length===0)return;const oe=new Be({color:N.dayCol,emissive:N.nightEm,emissiveIntensity:0,roughness:.55,side:It});oe.userData.animatedEmissive=!0,n.push({mat:oe,dayColor:N.dayCol,nightColor:N.nightCol,dayEmissive:1057304,nightEmissive:N.nightEm,dayEI:0,nightEI:2.15,pulsePhase:X*1.4});const te=new bt(N.geo,oe,N.matrices.length);te.name=N.name,te.frustumCulled=!1,te.castShadow=!1,te.receiveShadow=!1,N.matrices.forEach((we,j)=>te.setMatrixAt(j,we)),te.instanceMatrix.needsUpdate=!0,a.add(te)});const R=[];for(let N=0;N<380;N++){const X=H(N,11,5)*Math.PI*2,oe=Math.sqrt(H(N,4,17))*.155*i,te=l(Math.cos(X)*oe,Math.sin(X)*oe,0);if(te.nation!=="water"||te.elev>=-.014)continue;const we=Math.abs(te.elev),j=Math.min(we*.85,(.045+H(N,9,2)*.065)*xt),ue=(.014+H(N,6,8)*.014)*xt;C.position.copy(te.pos),C.quaternion.setFromUnitVectors(Di,te.normal),C.rotateY(H(N,1,3)*Math.PI*2),C.scale.set(ue,j,ue),C.updateMatrix(),R.push(C.matrix.clone())}const L={uTime:{value:0}},P=new Be({color:1730632,emissive:55450,emissiveIntensity:0,roughness:.55,side:It});if(P.userData.animatedEmissive=!0,P.onBeforeCompile=N=>{N.uniforms.uTime=L.uTime,N.vertexShader=`uniform float uTime;
`+N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float swayAmp = position.y * 0.14;
        transformed.x += sin(uTime * 1.45 + position.y * 6.0) * swayAmp;
        transformed.z += cos(uTime * 1.2 + position.y * 5.0) * swayAmp;`)},n.push({mat:P,dayColor:1730632,nightColor:541256,dayEmissive:798238,nightEmissive:57512,dayEI:0,nightEI:1.05}),R.length>0){const N=Ay();N.boundingSphere=M;const X=new bt(N,P,R.length);X.name="Pandora_Reef_Giant_Kelp",X.frustumCulled=!1,X.castShadow=!1,X.receiveShadow=!1,R.forEach((oe,te)=>X.setMatrixAt(te,oe)),X.instanceMatrix.needsUpdate=!0,a.add(X)}const F=[];for(let N=0;N<32;N++){const X=H(N,8,21)*Math.PI*2,oe=Math.sqrt(H(N,2,13))*.145*i,te=r(Math.cos(X)*oe,Math.sin(X)*oe,-.001),we=.095,j=new tn(.008*xt,.028*xt,we,8,1,!0);j.translate(0,-we*.5,0);const ue=j.toNonIndexed(),ge=new ut().setFromUnitVectors(Di,te.normal),pe=new ut().setFromEuler(new ri(.18,H(N,3,5)*6.28,.12));ue.applyQuaternion(ge.multiply(pe)),ue.translate(te.pos.x,te.pos.y,te.pos.z),F.push(ue)}const z=new fn({color:new ne(.32,.95,1),transparent:!0,opacity:0,depthWrite:!1,blending:Tn,side:It}),k=new Ge(Ct(F,!1),z);k.name="Pandora_Reef_Underwater_Caustics",k.visible=!1,a.add(k);const U=new qt;return{group:a,update(N,X,oe){L.uTime.value=N;for(let te=0;te<v.length;te++){const we=v[te],j=Math.sin(N*2.1+we.phase)*45e-5*xt,ue=Math.sin(N*1.6+we.phase)*.06;U.position.copy(we.basePos).addScaledVector(we.normal,j),U.quaternion.copy(we.qOri),U.rotateZ(ue),U.scale.set(1,1,1),U.updateMatrix(),T.setMatrixAt(te,U.matrix)}if(T.instanceMatrix.needsUpdate=!0,oe>.01){const te=.78+.22*Math.sin(N*2.4),we=G.lerp(.28,.08,X);z.opacity=oe*we*te,k.visible=z.opacity>.005}else k.visible=!1}}}const Te=1/3.5,yn=new b(0,1,0),Ah=new ut().setFromUnitVectors(yn,new b(0,Math.cos(G.degToRad(68)),Math.sin(G.degToRad(68))).normalize()),Eh=nl([0,Math.cos(G.degToRad(68)),Math.sin(G.degToRad(68))]),yt=1/3.2,Br=[{id:"valley_lake",dir:new b(-.08,.992,.095).normalize(),angRad:.024,waterElev:.0026},{id:"east_lake",dir:new b(.42,.78,.46).normalize(),angRad:.025,waterElev:.0028},{id:"west_lake",dir:new b(-.56,.62,-.55).normalize(),angRad:.024,waterElev:.0027},{id:"souls_lake",dir:new b(.36,-.12,-.92).normalize(),angRad:.026,waterElev:.0028},{id:"mush_lake",dir:new b(-.24,-.78,.58).normalize(),angRad:.024,waterElev:.0027}],Kl=new b,xr=new b;function Cy(s,e,t,n=0){const i=Math.sin(e),o=i*Math.cos(t),a=Math.cos(e),r=i*Math.sin(t),l=s+n;return{pos:new b(l*o,l*a,l*r),normal:new b(o,a,r)}}function di(s,e,t,n=Ah,i=Eh,o=4){Kl.set(s,e,t).normalize(),xr.copy(Kl).applyQuaternion(n).normalize();const a=xr.x,r=xr.y,l=xr.z,{cont:c,ridge:h,highlandRidge:u,craterDepression:d,forestFactor:f,waterFactor:g,ashFactor:v,reefFactor:m,borderMountain:p,forestClump:_,nation:y}=wh(a,r,l,i,o);let x=0,T=0;if(y==="forest"&&f>.55)for(let A=0;A<Br.length;A++){const M=Br[A],S=Kl.dot(M.dir);if(S>.992){const C=Math.acos(G.clamp(S,-1,1));if(C<M.angRad){const R=1-C/M.angRad;x=Math.max(x,R*R*(3-2*R)),T=M.waterElev}}}let w=0,E="ocean";if(c<=0){const A=G.smoothstep(c,-.34,-.02),M=Kt(a*19,r*19,l*19)*.008,S=-.11*(.45+.55*Math.max(.45,m));w=G.lerp(S,-.0012,A)+M*(1-A*.5),m>.25&&c>-.16&&(w=G.lerp(w,-.022-(1-A)*.085,.65)),E=c>-.16||m>.25?"reef":"ocean"}else{const A=Kt(a*9+1.2,r*9,l*9)*.12,M=Kt(a*9,r*9+2.4,l*9)*.12,S=jn((a+A)*14+3.1,r*14-1.4,(l+M)*14+2.7,4),C=Math.abs(Kt(a*36,r*36,l*36))*.0025,R=G.smoothstep(c,0,.14),L=G.smoothstep(u,.025,.22)*.015,P=p*(.014+Math.max(0,h)*.012),F=v*(.0065+Math.pow(Math.max(0,h),1.8)*.013);w=Math.min(.068,(R*.0018+Math.max(0,S*.52+.34)*.0072*R+C*R+L+P+F-d)*1.45),x>.01&&(w=G.lerp(w,T-.0038,x)),w=Math.max(4e-4,w),y==="ash"?E="ash":y==="water"?E="atoll_island":x>.45?E="lake":u>.036||p>.45?E="canyon":E="forest"}return{cont:c,ridge:h,highlandRidge:u,forestFactor:f,waterFactor:g,ashFactor:v,reefFactor:m,borderMountain:p,forestClump:_,lakeBlend:x,lakeWaterElev:T,elev:w,biome:E,nation:y,sx:a,sy:r,sz:l}}function _r(s,e,t,n=0,i=null){const o=i?.qCap||Ah,a=i?.sphereLandmarks||Eh;return di(s,e,t,o,a,3).elev}function Hi(s){const e=s.clone().normalize(),t=Math.abs(e.x)<.85?new b(1,0,0):new b(0,0,1),n=new b().crossVectors(e,t).normalize(),i=new b().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Zs(s,e,t,n,i,o,a){const r=e.upDir.clone().addScaledVector(e.e1,t).addScaledVector(e.e2,n).normalize(),l=di(r.x,r.y,r.z,o,a,3).elev;return{pos:r.clone().multiplyScalar(s+l+i),normal:r,elev:l}}function Py(s,e=null){const t=e?.qCap||Ah,n=e?.sphereLandmarks||Eh,i=[{anchor:new b(0,1,0),span:.24,angle:.55,amp:.045,steps:42},{anchor:new b(.14,.985,.09).normalize(),span:.2,angle:-1.1,amp:.038,steps:32},{anchor:At[2].capDir.clone(),span:.24,angle:.8,amp:.038,steps:36},{anchor:At[3].capDir.clone(),span:.24,angle:2.1,amp:.04,steps:36},{anchor:At[4].capDir.clone(),span:.2,angle:-.7,amp:.032,steps:32},{anchor:new b(.48,.58,-.65).normalize(),span:.22,angle:1.4,amp:.036,steps:32},{anchor:new b(-.46,.72,-.52).normalize(),span:.22,angle:-1.6,amp:.036,steps:32}],o=[];for(const a of i){const r=Hi(a.anchor),l=Math.cos(a.angle),c=Math.sin(a.angle),h=[];for(let u=0;u<=a.steps;u++){const d=u/a.steps,f=(d-.5)*a.span,g=Math.sin(d*Math.PI*2.4)*a.amp,v=f*l-g*c,m=f*c+g*l,p=r.upDir.clone().addScaledVector(r.e1,v).addScaledVector(r.e2,m).normalize(),_=di(p.x,p.y,p.z,t,n,3);if(_.nation!=="forest"||_.cont<=.005){if(h.length>=6)break;continue}h.push({theta:Math.acos(G.clamp(p.y,-1,1)),phi:Math.atan2(p.z,p.x),pos:p.clone().multiplyScalar(s+_.elev+55e-5),normal:p,elev:_.elev})}h.length>=6&&o.push(h)}return o}function mi(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),o=t.getY(n),a=t.getZ(n),r=Math.hypot(i,o,a);!Number.isFinite(r)||r<1e-4?t.setXYZ(n,0,e,0):Math.abs(r-1)>.001&&t.setXYZ(n,i/r,o/r,a/r)}return t.needsUpdate=!0,s}function fd(s,e){const t=s.index?s.toNonIndexed():s,n=new ne(e),i=t.attributes.position.count,o=new Float32Array(i*3);for(let a=0;a<i;a++)o[a*3]=n.r,o[a*3+1]=n.g,o[a*3+2]=n.b;return t.setAttribute("color",new _t(o,3)),t}function ai(s,e,t=.28,n=.1,i=2,o=3,a=.45){const r=new ls(s,e,i,o);r.translate(0,e*.5,0);const l=r.attributes.position;for(let g=0;g<l.count;g++){const v=l.getX(g),m=l.getY(g),p=G.clamp(m/Math.max(1e-4,e),0,1),_=G.clamp(v/Math.max(1e-4,s),-.5,.5)*2,y=t*Math.pow(p,1.55)*e,x=-n*(_*_-.35)*(.25+.75*p)*s,T=Math.sin(p*Math.PI)*Math.abs(t)*.14*e;l.setXYZ(g,v,m+T,y+x)}const c=r.toNonIndexed();c.computeVertexNormals();const h=c.attributes.normal,u=c.attributes.position,d=new b,f=new b;for(let g=0;g<h.count;g++)f.fromBufferAttribute(h,g),d.set(u.getX(g),a*e+u.getY(g)*.65,u.getZ(g)+.12*e),d.lengthSq()>1e-6&&(d.normalize(),f.lerp(d,.42).normalize(),h.setXYZ(g,f.x,f.y,f.z));return mi(c,1)}function Ry(){const s=[],e=new tn(.03,.14,1,6,1);e.translate(0,.5,0),s.push(e.toNonIndexed());const t=[{y:.42,rad:.24},{y:.6,rad:.2},{y:.77,rad:.16},{y:.91,rad:.11}];for(let i=0;i<t.length;i++){const o=t[i];for(let a=0;a<3;a++){const r=a/3*Math.PI*2+i*.72,l=new tn(.008,.022,o.rad,4,1);l.translate(0,o.rad*.5,0),l.rotateZ(-1.35),l.rotateY(r),l.translate(0,o.y,0),s.push(l.toNonIndexed())}}const n=Ct(s,!1);return n.computeVertexNormals(),mi(n,1)}function Dy(){const s=[],e=[{y:.42,w:.4,h:.5,n:4,tilt:1.24,twist:0},{y:.6,w:.35,h:.44,n:4,tilt:1.18,twist:.45},{y:.77,w:.29,h:.36,n:3,tilt:1.08,twist:.25},{y:.91,w:.24,h:.28,n:3,tilt:.88,twist:.65}];for(const i of e)for(let o=0;o<i.n;o++){const a=o/i.n*Math.PI*2+i.twist,r=ai(i.w,i.h,.26,.09,1,2,.35);r.rotateX(i.tilt),r.rotateZ((o%2*2-1)*.14),r.rotateY(a),r.translate(Math.sin(a)*.03,i.y,Math.cos(a)*.03),s.push(r)}const t=ai(.24,.28,.18,.08,1,2,.5);t.rotateX(.32),t.rotateY(.3),t.translate(0,.96,0),s.push(t);const n=Ct(s,!1);return n.computeVertexNormals(),mi(n,1)}function Iy(){const s=[],e=new oi([new b(0,0,0),new b(.08,.32,.04),new b(-.05,.68,-.05),new b(.03,.94,.02)]);s.push(new pi(e,6,.068,5,!1).toNonIndexed());for(let n=0;n<4;n++){const i=n/4*Math.PI*2+.4,o=new oi([new b(Math.cos(i)*.04,.34,Math.sin(i)*.04),new b(Math.cos(i)*.18,.22,Math.sin(i)*.18),new b(Math.cos(i)*.26,-.02,Math.sin(i)*.26)]);s.push(new pi(o,4,.028,4,!1).toNonIndexed())}for(let n=0;n<3;n++){const i=n/3*Math.PI*2+.55,o=new oi([new b(.01,.78,0),new b(Math.cos(i)*.16,.9,Math.sin(i)*.16),new b(Math.cos(i)*.32,.96,Math.sin(i)*.32)]);s.push(new pi(o,4,.024,4,!1).toNonIndexed())}const t=Ct(s,!1);return t.computeVertexNormals(),mi(t,1)}function Ly(){const s=[];for(let t=0;t<4;t++){const n=t/4*Math.PI*2+.22,i=ai(.56,.64,.32,.12,1,2,.38);i.rotateX(1.12+t%2*.14),i.rotateZ((t%3-1)*.12),i.rotateY(n),i.translate(.03+Math.sin(n)*.08,.92+t%2*.04,.02+Math.cos(n)*.08),s.push(i)}for(let t=0;t<2;t++){const n=ai(.6,.62,.24,.14,1,2,.5);n.rotateX(.68),n.rotateY(t*Math.PI*.65+.4),n.translate(.03,.96,.02),s.push(n)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function Ny(){const s=new oi([new b(0,0,0),new b(.06,.38,.03),new b(.14,.78,-.02),new b(.18,1,0)]),e=new pi(s,6,.052,5,!1).toNonIndexed();return e.computeVertexNormals(),mi(e,1)}function Uy(){const s=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=ai(.44,.92,.42,.14,1,3,.28);i.rotateX(1.06+t%2*.16),i.rotateZ((t%2*2-1)*.1),i.rotateY(n),i.translate(.18,.98,0),s.push(i)}for(let t=0;t<3;t++){const n=t/3*Math.PI*2+.42,i=ai(.36,.74,.3,.12,1,3,.45);i.rotateX(.62+t%2*.12),i.rotateY(n),i.translate(.18,1,0),s.push(i)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function Fy(){const s=[];for(let t=0;t<3;t++){const n=t/3*Math.PI*2,i=ai(.6,.72,.34,.12,1,2,.38);i.rotateX(.95+t%2*.18),i.rotateY(n),s.push(i)}for(let t=0;t<2;t++){const n=t*Math.PI+.52,i=ai(.48,.68,.22,.1,1,2,.52);i.rotateX(.52),i.rotateY(n),s.push(i)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function Oy(){const s=[],e=new Es(.48,0);e.scale(1.2,.65,1),e.translate(0,.22,0),s.push(fd(e,3885110));const t=new Es(.32,0);t.scale(1,.72,1.1),t.translate(.38,.14,.24),s.push(fd(t,2774062));const n=Ct(s,!1);return n.computeVertexNormals(),n}function ky(){const s=[];for(let n=0;n<4;n++){const i=n/4*Math.PI*2,o=ai(.48,1,.44,.15,1,3,.3);o.rotateX(.86+n%2*.14),o.rotateY(i),s.push(o)}const e=ai(.38,.8,.26,.12,1,2,.48);e.rotateX(.44),e.rotateY(.6),s.push(e);const t=Ct(s,!1);return t.computeVertexNormals(),mi(t,1)}function By(){const s=[];for(let t=0;t<3;t++){const n=t/3*Math.PI*2+.2,i=ai(.72,.96,.24,.1,1,2,.45);i.rotateX(.36),i.rotateY(n),s.push(i)}const e=Ct(s,!1);return e.computeVertexNormals(),mi(e,1)}function zy(){const s=[],e=new Es(.42,0);e.scale(1.25,.56,.95),e.translate(0,.16,0),s.push(e.index?e.toNonIndexed():e);const t=new Es(.28,0);t.scale(.9,.68,1.15),t.rotateY(.85),t.translate(.38,.11,-.22),s.push(t.index?t.toNonIndexed():t);const n=Ct(s,!1);return n.computeVertexNormals(),mi(n,1)}function kf(){const s=[];for(let t=0;t<5;t++){const n=new Vn(.24,.72,4);n.translate(0,.36,0),n.rotateX(.85),n.rotateY(t/5*Math.PI*2),s.push(n.toNonIndexed())}const e=Ct(s,!1);return e.computeVertexNormals(),e}function Gy(){const s=[],e=new hn(1,10,6,0,Math.PI*2,0,Math.PI*.56);e.scale(1,.42,1),e.translate(0,.9,0),s.push(e.toNonIndexed());const t=new tn(.14,.25,.94,6,1);t.translate(0,.47,0),s.push(t.toNonIndexed());const n=Ct(s,!1);return n.computeVertexNormals(),n}function Bf(){const s=[];for(let i=0;i<5;i++){const o=i/5*Math.PI*2,a=ai(.96,1.12,.34,.14,1,2,.45);a.rotateX(1.36+i%2*.08),a.rotateZ((i%2*2-1)*.1),a.rotateY(o),a.translate(0,.02,0),s.push(a)}for(let i=0;i<3;i++){const o=i/3*Math.PI*2+.42,a=ai(.88,.92,.24,.12,1,2,.58);a.rotateX(.86),a.rotateY(o),a.translate(0,.11,0),s.push(a)}const e=Ct(s,!1);e.computeVertexNormals(),mi(e,1);const t=[];for(let i=0;i<5;i++){const o=i/5*Math.PI*2+.26,a=ai(.88,.98,.38,.12,1,2,-.35);a.rotateX(1.62+i%2*.08),a.rotateY(o),a.translate(0,-.02,0),t.push(a)}const n=Ct(t,!1);return n.computeVertexNormals(),mi(n,-1),{outer:e,under:n}}function Hy(s,e,t,n){const i=new gh(1,2),o=i.attributes.position,a=o.count,r=new Float32Array(a*3),l=new ne(2055213),c=new ne(2783806),h=new ne(3817286),u=new ne(1974824),d=new ne;for(let f=0;f<a;f++){let g=o.getX(f),v=o.getY(f),m=o.getZ(f);const p=Kt(g*2.7+s*3.1,v*2.4-s,m*2.7+s*1.9),_=Kt(g*5.5+s*7.3,v*4.5,m*5.5);if(v>.15){const y=.25+(v-.15)*.22+.08*p,x=1+.18*p;g*=e*x,m*=t*x,v=n*y,d.copy(l).lerp(c,Math.max(0,_)*.65)}else{const y=Math.min(1,(.15-v)/1.15),x=Math.pow(1-y*.86,1.25),T=1+.34*p+.16*_;g*=e*x*T,m*=t*x*T,v=-n*y*(.85+.25*Math.abs(p)),d.copy(h).lerp(u,y*.72+Math.max(0,-p)*.28)}o.setXYZ(f,g,v,m),r[f*3]=d.r,r[f*3+1]=d.g,r[f*3+2]=d.b}return i.setAttribute("color",new _t(r,3)),i.computeVertexNormals(),i}function Th(s,e,t,n,i,o,a,r,l,c,h){const u=Zs(s,e,t,n,-.0025*Te,c,h).pos,d=Zs(s,e,i,o,-.0025*Te,c,h).pos,f=u.clone().add(d).multiplyScalar(.5).normalize(),g=u.clone().lerp(d,.26).normalize().multiplyScalar(s+a*.74),v=f.clone().multiplyScalar(s+a),m=u.clone().lerp(d,.74).normalize().multiplyScalar(s+a*.76),p=new oi([u,g,v,m,d]),_=new pi(p,24,r,8,!1),y=_.attributes.position,x=_.attributes.normal,T=new Float32Array(y.count*3),w=new ne(3290942),E=new ne(2316332),A=new ne(3700796),M=new b,S=new b,C=new ne;for(let R=0;R<y.count;R++){M.fromBufferAttribute(y,R),S.fromBufferAttribute(x,R);const L=Kt(M.x*220+l*3.7,M.y*220,M.z*220-l),P=Kt(M.x*520,M.y*520,M.z*520),F=M.clone().normalize(),z=Math.max(0,S.dot(F));M.addScaledVector(S,r*(.36*L+.16*P)),y.setXYZ(R,M.x,M.y,M.z),C.copy(w).lerp(E,Math.pow(z,1.25)),z>.45&&P>.2&&C.lerp(A,.48),T[R*3]=C.r,T[R*3+1]=C.g,T[R*3+2]=C.b}return _.setAttribute("color",new _t(T,3)),_.computeVertexNormals(),{geo:_,curve:p,apex:v}}function Vy(s){const e=new tn(.12,1,1,8,6);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new ne(2764600),o=new ne(2381356),a=new ne(3568190),r=new ne;for(let l=0;l<t.count;l++){let c=t.getX(l);const h=t.getY(l);let u=t.getZ(l);const d=Kt(c*3.8+s*2.1,h*4.5,u*3.8-s),f=1+.35*d;c*=f,u*=f,t.setXYZ(l,c,h,u),r.copy(i).lerp(o,G.smoothstep(h,.22,.72)),h>.72&&d>.1&&r.lerp(a,.45),n[l*3]=r.r,n[l*3+1]=r.g,n[l*3+2]=r.b}return e.setAttribute("color",new _t(n,3)),e.computeVertexNormals(),e}function Wy(s,e){const t=[],n=[],i=new b,o=new b,a=new b;s.forEach((f,g)=>{const v=f.length,m=e[g]||.008*Te,p=[],_=[],y=[];for(let T=0;T<v;T++){const w=f[T],E=f[Math.max(0,T-1)],A=f[Math.min(v-1,T+1)];i.copy(A.pos).sub(E.pos).normalize(),a.copy(w.normal),o.crossVectors(i,a).normalize();const M=1+.22*Math.sin(T*.45+g),S=m*M,C=S*.24,R=w.pos.clone().addScaledVector(o,-S),L=w.pos.clone().addScaledVector(o,S),P=w.pos.clone().addScaledVector(o,-(S+C)).addScaledVector(a,14e-5),F=w.pos.clone().addScaledVector(o,S+C).addScaledVector(a,14e-5);p.push(R.x,R.y,R.z,L.x,L.y,L.z),_.push(P.x,P.y,P.z,R.x,R.y,R.z),y.push(L.x,L.y,L.z,F.x,F.y,F.z)}const x=T=>{const w=[];for(let A=0;A<v-1;A++){const M=A*2,S=M+1,C=M+2,R=M+3;w.push(M,S,C,S,R,C)}const E=new Et;return E.setAttribute("position",new Yt(T,3)),E.setIndex(w),E.computeVertexNormals(),E.toNonIndexed()};t.push(x(p)),n.push(x(_),x(y))});const r=Ct(t,!1),l=Ct(n,!1),c=new Be({color:953508,emissive:35e3,emissiveIntensity:0,roughness:.1,metalness:.55,transparent:!0,opacity:.9,depthWrite:!1}),h=new Be({color:1994328,emissive:62975,emissiveIntensity:0,roughness:.4,transparent:!0,opacity:.88,depthWrite:!1}),u=new Ge(r,c);u.name="Pandora_Global_Rivers_Water";const d=new Ge(l,h);return d.name="Pandora_Global_Rivers_Banks",{waterMesh:u,bankMesh:d,waterMat:c,bankMat:h}}function Xy(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512),i=n.data;for(let a=0;a<512;a++)for(let r=0;r<512;r++){const l=Kt(r*.18,a*.18,2.3)*.5+.5,c=H(r,a,37),h=Math.floor(G.clamp((.76+.24*l+.16*(c-.5))*255,130,255)),u=(a*512+r)*4;i[u]=h,i[u+1]=h,i[u+2]=h,i[u+3]=255}t.putImageData(n,0,0);const o=new pn(e);return o.colorSpace=Zt,o.wrapS=Wn,o.wrapT=Wn,o.repeat.set(96,48),o.anisotropy=8,o}function qy(s,e){const i=document.createElement("canvas");i.width=1024,i.height=512;const o=i.getContext("2d"),a=o.createImageData(1024,512),r=a.data,l=At[3].capDir,c=At[4].capDir,h=new b;for(let d=0;d<512;d++){const f=(d+.5)/512*Math.PI,g=Math.sin(f),v=Math.cos(f);for(let m=0;m<1024;m++){const p=(m+.5)/1024*Math.PI*2,_=-Math.cos(p)*g,y=Math.sin(p)*g;h.set(_,v,y).applyQuaternion(s);const{cont:x,reefFactor:T,nation:w,borderMountain:E}=wh(h.x,h.y,h.z,e,4);let A=0,M=0,S=0;if(w==="ash"&&x>0)A=0,M=0,S=0;else if(w==="forest"&&x>0){let R=1-Math.abs(Kt(_*24+1,v*24,y*24));R=Math.pow(Math.max(0,R),18);const L=H(Math.floor(_*360),Math.floor(v*360),Math.floor(y*360))>.986?.55:0,P=Math.min(.68,R*.58+L)*(1-Math.min(.9,E));Kt(_*5+9,v*5,y*5)>.1?(A=P*.06,M=P*.78,S=P*.85):(A=P*.58,M=P*.18,S=P*.85);const z=Math.acos(G.clamp(_*l.x+v*l.y+y*l.z,-1,1));if(z<.032){const U=Math.pow(1-z/.032,1.6);A=Math.min(1,A+U*.78),M=Math.min(1,M+U*.38),S=Math.min(1,S+U*.92)}const k=Math.acos(G.clamp(_*c.x+v*c.y+y*c.z,-1,1));if(k<.032){const U=Math.pow(1-k/.032,1.7);A=Math.min(1,A+U*.85),M=Math.min(1,M+U*.22),S=Math.min(1,S+U*.72)}}else if(x<=0){const R=Math.max(G.smoothstep(x,-.11,-.002)*.55,T*.58)*.58;A=R*.05,M=R*.75,S=R*.85}const C=(d*1024+m)*4;r[C]=Math.min(255,A*255),r[C+1]=Math.min(255,M*255),r[C+2]=Math.min(255,S*255),r[C+3]=255}}o.putImageData(a,0,0);const u=new pn(i);return u.colorSpace=Zt,u}function Yy(s,e,t,n,i){const o=Hi(e.capDir),a=Zs(s,o,0,0,-.001,t,n),r=new Nt;r.name="Pandora_Landmark_Hometree",r.position.copy(a.pos),r.quaternion.setFromUnitVectors(yn,a.normal);const l=bh(),c=Nf(),h=new Be({color:6047284,map:l.map,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:337972,emissiveIntensity:0,roughness:.9});i.push({mat:h,dayColor:6047284,nightColor:2239556,dayEmissive:337972,nightEmissive:803410,dayEI:0,nightEI:.45});const u=.56*Te,d=new tn(.065*Te,.14*Te,u,14,14,!0);d.translate(0,u*.5,0);const f=d.attributes.position;for(let A=0;A<f.count;A++){const M=f.getX(A),S=f.getY(A),C=f.getZ(A),R=S/u,L=R*2.4,P=1+.24*Math.sin(Math.atan2(C,M)*6+L),F=R<.25?1+Math.pow((.25-R)/.25,1.5)*.65:1,z=(M*Math.cos(L*.35)-C*Math.sin(L*.35))*P*F,k=(M*Math.sin(L*.35)+C*Math.cos(L*.35))*P*F;f.setXYZ(A,z,S,k)}d.computeVertexNormals();const g=new Ge(d,h);g.castShadow=!0,g.receiveShadow=!0,r.add(g);for(let A=0;A<14;A++){const M=A/14*Math.PI*2+(H(A,3,7)-.5)*.15,S=(.14+H(A,8,2)*.09)*Te,C=(.12+H(A,5,4)*.18)*Te,R=new oi([new b(Math.cos(M)*.06*Te,C,Math.sin(M)*.06*Te),new b(Math.cos(M)*S*.62,C*.62,Math.sin(M)*S*.62),new b(Math.cos(M)*S,-.015*Te,Math.sin(M)*S)]),L=new Ge(new pi(R,10,.012*Te,6,!1),h);L.castShadow=!0,L.receiveShadow=!0,r.add(L)}const v=new Be({color:3901e3,map:c.canopy.map,roughnessMap:c.canopy.roughnessMap,emissiveMap:c.canopy.emissiveMap,emissive:407618,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});i.push({mat:v,dayColor:3901e3,nightColor:1068118,dayEmissive:407618,nightEmissive:557718,dayEI:0,nightEI:.85});const m=new Be({color:4622420,map:c.canopy.map,roughnessMap:c.canopy.roughnessMap,emissiveMap:c.canopy.emissiveMap,emissive:65512,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});i.push({mat:m,dayColor:4622420,nightColor:1366248,dayEmissive:1853990,nightEmissive:63743,dayEI:0,nightEI:2.25,pulsePhase:.6});const p=new Be({color:3877405,emissive:16755256,emissiveIntensity:0,roughness:.5});i.push({mat:p,dayColor:3877405,nightColor:16762980,dayEmissive:2759184,nightEmissive:16751144,dayEI:0,nightEI:2.1,pulsePhase:1.4});const _=[.34*Te,.28*Te,.21*Te,.14*Te],y=[.34*Te,.44*Te,.53*Te,.61*Te],{outer:x,under:T}=Bf(),w=$c(c.canopy.map);for(let A=0;A<_.length;A++){const M=_[A],S=y[A],C=new Ge(x,v);C.position.set(0,S,0),C.scale.set(M,M*.9,M),C.castShadow=!0,C.receiveShadow=!0,C.customDepthMaterial=w,r.add(C);const R=new Ge(T,m);R.position.set(0,S-.004*Te,0),R.scale.set(M*.98,M*.9,M*.98),R.receiveShadow=!0,r.add(R)}const E=new Ge(new hn(.055*Te,12,8),p);return E.position.set(0,.06*Te,0),r.add(E),{group:r,anchorDir:a.normal,anchorPos:a.pos}}function jy(s,e,t,n,i){const o=Hi(e.capDir),a=Zs(s,o,0,0,-5e-4,t,n),r=new Nt;r.name="Pandora_Landmark_TreeOfSouls";const l=qo(),c=new Be({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:2757704,emissiveIntensity:0,roughness:.85});i.push({mat:c,dayColor:16777215,nightColor:10134724,dayEmissive:1054752,nightEmissive:2497092,dayEI:0,nightEI:.45});for(let T=0;T<7;T++){const w=T/7*Math.PI*2,E=w+Math.PI*.88,A=.072*yt,{geo:M}=Th(s,o,Math.cos(w)*A,Math.sin(w)*A,Math.cos(E)*A,Math.sin(E)*A,(.145+T%3*.025)*Te,.011*Te,50+T,t,n),S=new Ge(M,c);S.castShadow=!0,S.receiveShadow=!0,r.add(S)}const h=new Nt;h.position.copy(a.pos),h.quaternion.setFromUnitVectors(yn,a.normal),r.add(h);const u=new Be({color:2975798,emissive:9058559,emissiveIntensity:0,roughness:.72});i.push({mat:u,dayColor:2975798,nightColor:1976408,dayEmissive:1194016,nightEmissive:7746303,dayEI:0,nightEI:1.45,pulsePhase:2.1}),h.add(new Ge(new tn(.18*Te,.2*Te,.004*Te,24),u));const d=new Be({color:10392232,emissive:8409296,emissiveIntensity:0,roughness:.7});i.push({mat:d,dayColor:9274e3,nightColor:12759280,dayEmissive:4734036,nightEmissive:9459967,dayEI:0,nightEI:1.1});const f=.25*Te,g=new tn(.024*Te,.055*Te,f,10,8);g.translate(0,f*.5,0),h.add(new Ge(g,d));const v=new hn(.13*Te,12,8);v.scale(1.25,.35,1.25),v.translate(0,f*.96,0),h.add(new Ge(v,d));const m=340,p=new tn(.0014*Te,5e-4*Te,1,4,1);p.translate(0,-.5,0);const _=new Be({color:14076140,emissive:15120639,emissiveIntensity:0,roughness:.28,transparent:!0,opacity:.92});i.push({mat:_,dayColor:14669034,nightColor:16777215,dayEmissive:12560604,nightEmissive:14456575,dayEI:0,nightEI:2.35,pulsePhase:.2});const y=new bt(p,_,m);y.name="Pandora_TreeOfSouls_Filaments";const x=new qt;for(let T=0;T<m;T++){const w=H(T,4,17)*Math.PI*2,E=(.015+Math.sqrt(H(T,8,11))*.135)*Te,A=(.08+H(T,3,19)*.13)*Te;x.position.set(Math.cos(w)*E,f*.95,Math.sin(w)*E),x.rotation.set((H(T,1,5)-.5)*.14,w,(H(T,2,7)-.5)*.14),x.scale.set(1,A,1),x.updateMatrix(),y.setMatrixAt(T,x.matrix)}return y.instanceMatrix.needsUpdate=!0,h.add(y),{group:r,anchorDir:a.normal,anchorPos:a.pos}}function Ky(s,e,t,n,i,o,a){const r=Hi(e.capDir),l=new Nt;l.name="Pandora_Landmark_HallelujahMountains";const c=qo(),h=new Be({vertexColors:!0,roughnessMap:c.roughnessMap,bumpMap:c.bumpMap,bumpScale:.05,emissive:404528,emissiveIntensity:0,roughness:.86,metalness:.06});i.push({mat:h,dayColor:16777215,nightColor:6455448,dayEmissive:795668,nightEmissive:669766,dayEI:0,nightEI:.52});const u=new fn({color:new ne(.85,.96,1),transparent:!0,opacity:.56,side:It,depthWrite:!1});i.push({mat:u,dayColorRGB:[.82,.95,1],nightColorRGB:[.42,1.75,2.3],isWaterfall:!0});const d=[],f=32;for(let m=0;m<f;m++){const p=m===0?0:(.03+Math.sqrt(H(m,4,11))*.14)*yt,_=m*2.39996+H(m,7,3)*.45,y=(m===0?.24:.078+H(m,9,2)*.21)*Te,x=Zs(s,r,Math.cos(_)*p,Math.sin(_)*p,y,t,n),T=(m===0?.095:.036+H(m,2,5)*.056)*Te,w=T*(.72+H(m,5,8)*.45),E=(m===0?.145:.052+H(m,6,1)*.082)*Te,A=Hy(m+1,T,w,E),M=new Ge(A,h);M.position.copy(x.pos),M.quaternion.setFromUnitVectors(yn,x.normal),M.rotateY(H(m,1,8)*Math.PI*2),M.castShadow=m<16,M.receiveShadow=!0,l.add(M),d.push({pos:x.pos,normal:x.normal,rx:T,rz:w,h:E,alt:y});for(let S=0;S<4;S++){const C=H(m,S,14)*Math.PI*2,R=.25+H(m,S,2)*.55,L=new b(Math.cos(C)*T*R,-E*.34,Math.sin(C)*w*R).applyQuaternion(M.quaternion);a.push({pos:x.pos.clone().add(L),normal:x.normal,length:(.016+H(m,S,8)*.036)*Te})}if(m<15){const S=y+.015*Te,C=(.0065+H(m,12,4)*.0075)*Te,R=new ls(C,S,2,10),L=R.attributes.position;for(let U=0;U<L.count;U++){const N=(L.getY(U)+S*.5)/S;L.setZ(U,Math.sin((1-N)*Math.PI*.5)*.014*Te)}R.computeVertexNormals();const P=H(m,3,6)*Math.PI*2,F=new ut().setFromUnitVectors(yn,x.normal),z=new b(Math.cos(P)*T*.72,0,Math.sin(P)*w*.72).applyQuaternion(F),k=new Ge(R,u);k.position.copy(x.pos).add(z).addScaledVector(x.normal,-S*.5+E*.16),k.quaternion.copy(F),k.rotateY(P+Math.PI*.5),l.add(k),o.push({mesh:k,material:u,phase:m*1.17})}}const g=new Be({color:3889196,emissive:59600,emissiveIntensity:0,roughness:.55});i.push({mat:g,dayColor:3889196,nightColor:940132,dayEmissive:1718294,nightEmissive:1114072,dayEI:0,nightEI:1.35});const v=[];for(let m=0;m<f;m++){const p=d[m];let _=-1,y=.25*Te;for(let x=m+1;x<f;x++){const T=d[x],w=p.pos.distanceTo(T.pos);w>(p.rx+T.rx)*.85&&w<y&&(y=w,_=x)}if(_>=0){const x=d[_],T=p.pos.clone().add(x.pos).multiplyScalar(.5);T.add(T.clone().normalize().multiplyScalar(-y*.18));const w=new oi([p.pos.clone(),T,x.pos.clone()]);v.push(new pi(w,10,.0014*Te,5,!1).toNonIndexed())}}if(v.length>0){const m=new Ge(Ct(v,!1),g);m.name="Pandora_Hallelujah_VineBridges",l.add(m)}return{group:l,islandsData:d,anchorDir:r.upDir,anchorPos:r.upDir.clone().multiplyScalar(s)}}function Zy(s,e,t,n,i,o){const a=Hi(e.capDir),r=new Nt;r.name="Pandora_Landmark_IkranRookery";const l=qo(),c=new Be({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:407620,emissiveIntensity:0,roughness:.88});i.push({mat:c,dayColor:16777215,nightColor:6453906,dayEmissive:1058840,nightEmissive:672850,dayEI:0,nightEI:.42});const h=[];return[[-.08*yt,-.05*yt,.08*yt,.05*yt,.21*Te,.015*Te],[-.06*yt,.07*yt,.07*yt,-.06*yt,.24*Te,.016*Te],[-.1*yt,.01*yt,.02*yt,.09*yt,.17*Te,.013*Te],[.01*yt,-.09*yt,.09*yt,.02*yt,.18*Te,.013*Te],[-.09*yt,-.02*yt,.05*yt,.07*yt,.15*Te,.012*Te],[-.04*yt,-.08*yt,.08*yt,-.02*yt,.16*Te,.011*Te],[-.07*yt,.04*yt,.03*yt,-.07*yt,.19*Te,.012*Te],[-.03*yt,.08*yt,.09*yt,.06*yt,.14*Te,.011*Te]].forEach(([d,f,g,v,m,p],_)=>{const{geo:y,curve:x,apex:T}=Th(s,a,d,f,g,v,m,p,10+_,t,n),w=new Ge(y,c);w.name=`Pandora_IkranRookery_Arch_${_+1}`,r.add(w),h.push({apex:T,normal:T.clone().normalize()});for(let E=0;E<14;E++){const A=x.getPoint(.2+E/13*.6),M=A.clone().normalize();o.push({pos:A.addScaledVector(M,-p*.65),normal:M,length:(.014+H(E,_,19)*.026)*Te})}}),{group:r,archCenters:h,anchorDir:a.upDir,anchorPos:a.upDir.clone().multiplyScalar(s)}}function $y(s,e,t,n,i){const o=Hi(e.capDir),a=new Nt;a.name="Pandora_Landmark_MushroomGeysers";const r=new Be({color:3880242,emissive:55528,emissiveIntensity:0,roughness:.88});i.push({mat:r,dayColor:3880242,nightColor:1980488,dayEmissive:926246,nightEmissive:59647,dayEI:0,nightEI:1.85});const l=14,c=new tn(.18,.95,1,9,1);c.translate(0,.5,0);const h=new bt(c,r,l);h.name="Pandora_Geyser_Vents";const u=[],d=new qt;for(let A=0;A<l;A++){const M=A/l*Math.PI*2+H(A,3,7)*.4,S=(.014+H(A,9,2)*.068)*yt,C=Zs(s,o,Math.cos(M)*S,Math.sin(M)*S,-5e-4,t,n),R=(.008+H(A,2,11)*.006)*Te,L=(.014+H(A,5,13)*.012)*Te;d.position.copy(C.pos),d.quaternion.setFromUnitVectors(yn,C.normal),d.scale.set(R,L,R),d.updateMatrix(),h.setMatrixAt(A,d.matrix),u.push({basePos:C.pos.clone().addScaledVector(C.normal,L*.95),normal:C.normal.clone(),phase:H(A,6,4)*Math.PI*2,maxHeight:(.065+H(A,8,9)*.055)*Te})}h.instanceMatrix.needsUpdate=!0,a.add(h);const f=22,g=l*f,v=new Float32Array(g*3),m=new Float32Array(g*3);for(let A=0;A<g;A++)m[A*3]=.78,m[A*3+1]=.94,m[A*3+2]=1;const p=new Et;p.setAttribute("position",new _t(v,3)),p.setAttribute("color",new _t(m,3));const _=document.createElement("canvas");_.width=64,_.height=64;const y=_.getContext("2d"),x=y.createRadialGradient(32,32,2,32,32,32);x.addColorStop(0,"rgba(255, 255, 255, 0.85)"),x.addColorStop(.45,"rgba(180, 245, 255, 0.42)"),x.addColorStop(1,"rgba(0, 0, 0, 0.0)"),y.fillStyle=x,y.fillRect(0,0,64,64);const T=new pn(_);T.needsUpdate=!0;const w=new Ai({size:5.5,map:T,vertexColors:!0,transparent:!0,opacity:.48,depthWrite:!1,blending:Tn,sizeAttenuation:!0}),E=new Ei(p,w);return E.name="Pandora_Geyser_Plumes",E.frustumCulled=!1,a.add(E),{group:a,geyserEmitters:u,plumeGeo:p,plumeMat:w,puffsPerGeyser:f,anchorDir:o.upDir,anchorPos:o.upDir.clone().multiplyScalar(s)}}function Qy(s,e,t,n){const i=new Nt;i.name="Pandora_Inland_Lakes_And_Lilies";const o=[],a=[],r=[],l=[],c=new qt;Br.forEach((w,E)=>{const A=Hi(w.dir),M=s+w.waterElev,S=8,C=20,R=[],L=[];for(let F=0;F<=S;F++){const k=F/S*w.angRad*.82;for(let U=0;U<=C;U++){const N=U/C*Math.PI*2,X=A.upDir.clone().addScaledVector(A.e1,Math.cos(N)*k).addScaledVector(A.e2,Math.sin(N)*k).normalize();R.push(X.x*M,X.y*M,X.z*M)}}for(let F=0;F<S;F++)for(let z=0;z<C;z++){const k=F*(C+1)+z,U=k+(C+1);L.push(k,k+1,U,k+1,U+1,U)}const P=new Et;P.setAttribute("position",new Yt(R,3)),P.setIndex(L),P.computeVertexNormals(),o.push(P.toNonIndexed());for(let F=0;F<108;F++){const z=H(F,E+3,19)*Math.PI*2,k=Math.sqrt(H(F,E+7,11))*w.angRad*.72,U=A.upDir.clone().addScaledVector(A.e1,Math.cos(z)*k).addScaledVector(A.e2,Math.sin(z)*k).normalize(),N=(.0045+H(F,E+1,5)*.006)*Te;c.position.copy(U).multiplyScalar(M+18e-5),c.quaternion.setFromUnitVectors(yn,U),c.rotateY(H(F,2,9)*Math.PI*2),c.scale.set(N,N,N),c.updateMatrix(),a.push(c.matrix.clone());const X=N*.65;c.position.copy(U).multiplyScalar(M+38e-5),c.scale.set(X,X,X),c.updateMatrix(),F%2===0?r.push(c.matrix.clone()):l.push(c.matrix.clone())}});const h=new Be({color:955050,emissive:35e3,emissiveIntensity:0,roughness:.08,metalness:.62,transparent:!0,opacity:.88,depthWrite:!1});n.push({mat:h,dayColor:955050,nightColor:279638,dayEmissive:546924,nightEmissive:39116,dayEI:0,nightEI:1.05});const u=new Ge(Ct(o,!1),h);u.name="Pandora_Global_Inland_Lakes",i.add(u);const d=new tn(1,.92,.08,12,1,!1,.25,Math.PI*1.85);d.translate(0,.04,0);const f=new Be({color:2387512,emissive:55448,emissiveIntensity:0,roughness:.52});n.push({mat:f,dayColor:2387512,nightColor:803904,dayEmissive:1062936,nightEmissive:57498,dayEI:0,nightEI:1.35,pulsePhase:1.3});const g=new bt(d,f,a.length);g.name="Pandora_Giant_WaterLilies_Pads",g.frustumCulled=!1,a.forEach((w,E)=>g.setMatrixAt(E,w)),g.instanceMatrix.needsUpdate=!0,i.add(g);const v=kf(),m=new Be({color:14184610,emissive:16726200,emissiveIntensity:0,roughness:.35}),p=new Be({color:5425368,emissive:62975,emissiveIntensity:0,roughness:.35});n.push({mat:m,dayColor:14184610,nightColor:16732872,dayEmissive:4726840,nightEmissive:16723632,dayEI:0,nightEI:2.35,pulsePhase:.4}),n.push({mat:p,dayColor:5425368,nightColor:3735551,dayEmissive:1853520,nightEmissive:62975,dayEI:0,nightEI:2.35,pulsePhase:2});const _=new bt(v,m,r.length);_.name="Pandora_Giant_WaterLilies_PinkFlowers",_.frustumCulled=!1,r.forEach((w,E)=>_.setMatrixAt(E,w)),_.instanceMatrix.needsUpdate=!0;const y=new bt(v,p,l.length);y.name="Pandora_Giant_WaterLilies_TurqFlowers",y.frustumCulled=!1,l.forEach((w,E)=>y.setMatrixAt(E,w)),y.instanceMatrix.needsUpdate=!0,i.add(_,y);const x=[],T=tl();return Br.forEach((w,E)=>{const A=new Qr(new $s(w.angRad*s*.78,28),{textureWidth:256,textureHeight:256,waterNormals:T,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:683130,distortionScale:.36,size:3,clipBias:.002,alpha:.88,fog:!0});A.name=`Pandora_Inland_Lake_Water_${E}`,A.position.copy(w.dir).multiplyScalar(s+w.waterElev+18e-5),A.quaternion.setFromUnitVectors(new b(0,0,1),w.dir),A.visible=!1,i.add(A),x.push({water:A,centerLocal:A.position.clone(),isOceanSurface:!1})}),{group:i,lakeWaters:x}}function Jy(s){const e=s.localRadius,t=s.capLocalDir?s.capLocalDir.clone().normalize():new b(0,1,0),n=new ut().setFromUnitVectors(yn,t),i=nl([t.x,t.y,t.z]),o={qCap:n,sphereLandmarks:i},a=new Nt;a.name="Pandora_Global_360_World";const r=[],l=(Se,Ke,Bt)=>di(Se,Ke,Bt,n,i,4),c=new hn(e,192,128),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),f=new Float32Array(u),g=new ne(270648),v=new ne(2274738),m=new ne(14208416),p=new ne(2911794),_=new ne(9213536),y=new ne(1793065),x=new ne(3889190),T=new ne(3817024),w=new ne(1315349),E=new ne,A=new b;for(let Se=0;Se<u;Se++){A.set(h.getX(Se),h.getY(Se),h.getZ(Se)).normalize();const{cont:Ke,highlandRidge:Bt,ashFactor:dt,reefFactor:Vt,borderMountain:mn,elev:Qt,nation:Wt}=di(A.x,A.y,A.z,n,i,4);if(h.setXYZ(Se,A.x*(e+Qt),A.y*(e+Qt),A.z*(e+Qt)),f[Se]=dt*G.smoothstep(Ke,-.01,.04),Ke<=0){const Lt=Math.max(G.smoothstep(Ke,-.24,0),Vt*.78);E.copy(g).lerp(v,Lt)}else if(Wt==="water"){const Lt=G.smoothstep(Ke,.015,.055);E.copy(m).lerp(p,Lt)}else{const Lt=Kt(A.x*22+3,A.y*22,A.z*22)*.5+.5;E.copy(_).lerp(y,G.smoothstep(Ke,0,.075)),E.lerp(x,Lt*.52);const wt=Math.min(.92,Bt*3.8+mn*.85);wt>.02&&E.lerp(T,wt),(dt>.05||Wt==="ash")&&E.lerp(w,Wt==="ash"?.96:Math.min(1,dt*1.15))}d[Se*3]=E.r,d[Se*3+1]=E.g,d[Se*3+2]=E.b}c.setAttribute("color",new _t(d,3)),c.setAttribute("aAshMask",new _t(f,1)),c.computeVertexNormals();const M=el(),S=tl(),C=Xy(),R=qy(n,i),L=new Be({map:C,roughnessMap:M.roughnessMap,bumpMap:M.bumpMap,bumpScale:.055,vertexColors:!0,emissiveMap:R,emissive:new ne(1,1,1),emissiveIntensity:0,roughness:.88,metalness:.04}),P=Sh(L,{mode:"pandora",hasAshFissures:!0,worldRadius:e*157.5,peakStart:4.5,peakEnd:9.8,shoreBand:.65,detailTex:M.map});r.push({mat:L,dayColor:16777215,nightColor:3885146,dayEmissive:16777215,nightEmissive:16777215,dayEI:0,nightEI:1.25});const F=new Ge(c,L);F.name="Pandora_Global_Terrain_360",F.userData.splatUniforms=P,F.receiveShadow=!0,a.add(F);const z=S?S.clone():null;z&&(z.repeat.set(36,18),z.needsUpdate=!0);const k=new Be({color:754846,normalMap:z,normalScale:new Oe(.32,.32),emissive:35512,emissiveIntensity:0,roughness:.08,metalness:.58,transparent:!0,opacity:.72,depthWrite:!1,side:It});r.push({mat:k,dayColor:754846,nightColor:209478,dayEmissive:284780,nightEmissive:35e3,dayEI:0,nightEI:.72});const U=new Ge(new hn(e,112,72),k);U.name="Pandora_Global_Crystal_Ocean",U.receiveShadow=!0,a.add(U);const N=At[6].capDir.clone().normalize(),X=new Qr(new $s(e*.048,36),{textureWidth:256,textureHeight:256,waterNormals:S,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:957112,distortionScale:.45,size:4,clipBias:.002,alpha:.9,fog:!0});X.name="Pandora_Metkayina_Reflective_Water",X.position.copy(N).multiplyScalar(e+25e-5),X.quaternion.setFromUnitVectors(new b(0,0,1),N),X.visible=!1,a.add(X);const oe=Py(e,o),te=[.011*Te,.007*Te,.008*Te,.0085*Te,.008*Te,.0075*Te,.0075*Te],{waterMesh:we,bankMesh:j,waterMat:ue,bankMat:ge}=Wy(oe,te);a.add(we,j);const pe=[{waterMat:ue,bankMat:ge,phase:.4}],{group:ee,lakeWaters:fe}=Qy(e,n,i,r);a.add(ee);const me=[{water:X,centerLocal:X.position.clone(),isOceanSurface:!0},...fe],Ae=[],ve=[],Z=new qt,B=Yy(e,At[0],n,i,r),et=Ky(e,At[1],n,i,r,ve,Ae),_e=Zy(e,At[2],n,i,r,Ae),We=jy(e,At[3],n,i,r),Le=$y(e,At[4],n,i,r),rt=Ey(e,At[5],l,r),Xe=Ty(e,At[6],l,r);a.add(B.group,et.group,_e.group,We.group,Le.group,rt.group,Xe.group);const O=Hi(At[0].capDir),D=qo(),ie=new Be({vertexColors:!0,roughnessMap:D.roughnessMap,bumpMap:D.bumpMap,bumpScale:.045,roughness:.88}),xe=[..._e.archCenters];[[-.02*yt,.05*yt,.07*yt,-.04*yt,.14*Te,.011*Te],[-.07*yt,-.03*yt,.03*yt,.07*yt,.13*Te,.01*Te]].forEach(([Se,Ke,Bt,dt,Vt,mn],Qt)=>{const{geo:Wt,apex:Lt}=Th(e,O,Se,Ke,Bt,dt,Vt,mn,30+Qt,n,i),wt=new Ge(Wt,ie);wt.name=`Pandora_Valley_Arch_${Qt+1}`,a.add(wt),xe.push({apex:Lt,normal:Lt.clone().normalize()})}),xe.push({apex:B.anchorPos,normal:B.anchorDir}),xe.push({apex:et.anchorPos,normal:et.anchorDir});const re=new tn(34e-5*Te,12e-5*Te,1,4,1);re.translate(0,-.5,0);const he=new Be({color:3894837,emissive:2293720,emissiveIntensity:0,roughness:.42});r.push({mat:he,dayColor:3894837,nightColor:59647,dayEmissive:1719834,nightEmissive:2162648,dayEI:0,nightEI:1.95,pulsePhase:.9});const De=new bt(re,he,Ae.length);De.name="Pandora_Global_Hanging_Vines",De.frustumCulled=!1,Ae.forEach((Se,Ke)=>{Z.position.copy(Se.pos),Z.quaternion.setFromUnitVectors(yn,Se.normal),Z.scale.set(1,Se.length,1),Z.updateMatrix(),De.setMatrixAt(Ke,Z.matrix)}),De.instanceMatrix.needsUpdate=!0,a.add(De);const be=[],Ne=[],pt=[],Ee=[],Ue=[],Qe=[],ct=[],ze=[],vt=[],nt=[],ft=[],V=[],Pe=[],de=[],ye=[],Fe=[],ke=[],Ze=[],Ot=[],kt=[],gt=[],dn=[],ln=new ne,_n=[7252044,3902540,5023330,9348170,3972738,3112256],Pn=Se=>{const Ke=Math.floor(Se*_n.length)%_n.length;return ln.setHex(_n[Ke]),ln.offsetHSL((Se-.5)*.04,0,(Se-.5)*.14),ln.clone()},kn=Se=>(ln.setRGB(.86+Se*.24,.92+(1-Math.abs(Se-.5)*2)*.22,.8+(1-Se)*.24),ln.clone());for(let Se=0;Se<64;Se++){const Ke=et.islandsData[Se%et.islandsData.length],Bt=H(Se,2,13)*Math.PI*2,dt=Math.sqrt(H(Se,5,2))*.52,Vt=new b(Math.cos(Bt)*Ke.rx*dt,Ke.h*.28,Math.sin(Bt)*Ke.rz*dt),mn=new ut().setFromUnitVectors(yn,Ke.normal);Vt.applyQuaternion(mn);const Qt=Ke.pos.clone().add(Vt),Wt=(.018+H(Se,8,4)*.022)*Te,Lt=Wt*.65;Z.position.copy(Qt),Z.quaternion.copy(mn),Z.rotateY(H(Se,9,9)*Math.PI*2),Z.scale.set(Wt,Wt,Wt),Z.updateMatrix(),be.push(Z.matrix.clone()),Ne.push(Pn(H(Se,3,5))),Z.position.copy(Qt).addScaledVector(Ke.normal,Wt*.92),Z.scale.set(Lt,Lt,Lt),Z.updateMatrix(),pt.push(Z.matrix.clone()),(Se%2===0?Ee:Ue).push(Z.matrix.clone())}const it=(1+Math.sqrt(5))*.5,Pt=9e3,Bn=Pt+12500,Rt=new b,nn=new b,Ut=new ut,Jt=new b,Zn=new b,zn=new b,St=[0,1,2,3,4].map(Se=>Hi(At[Se].capDir));for(let Se=0;Se<Bn;Se++){if(Se<Pt){const Mt=Se%St.length,Xn=St[Mt],Nn=2*Math.PI*Se/it,Gn=Mt===0?.36:.24,wn=Math.sqrt((Se+.5)/Pt)*Gn;Rt.copy(Xn.upDir).addScaledVector(Xn.e1,Math.cos(Nn)*wn).addScaledVector(Xn.e2,Math.sin(Nn)*wn).normalize()}else{const Mt=Se-Pt,Nn=1-Mt*.7548776662%1*2,Gn=Math.sqrt(Math.max(0,1-Nn*Nn)),wn=2*Math.PI*Mt/it+(H(Se,3,17)-.5)*.028;Rt.set(Math.cos(wn)*Gn,Nn,Math.sin(wn)*Gn).normalize()}const{cont:Ke,highlandRidge:Bt,ashFactor:dt,forestClump:Vt,lakeBlend:mn,elev:Qt,biome:Wt,nation:Lt}=di(Rt.x,Rt.y,Rt.z,n,i,3),wt=H(Se,11,29),tt=H(Se,19,7),Xt=H(Se,23,13);if(Lt==="ash"||dt>.22)continue;if(Lt==="water"){if(Ke<=.002){if(Wt==="reef"&&dn.length<280&&wt<.14&&Qt>-.025){nn.copy(Rt).multiplyScalar(e+Qt-2e-4),Ut.setFromUnitVectors(yn,Rt),Z.position.copy(nn),Z.quaternion.copy(Ut),Z.rotateY(tt*Math.PI*2);const Mt=(.007+tt*.013)*Te;Z.scale.set(Mt,Mt*.45,Mt*.85),Z.updateMatrix(),dn.push(Z.matrix.clone())}}else if(Ke>.005){if(nn.copy(Rt).multiplyScalar(e+Qt),Ut.setFromUnitVectors(yn,Rt),nt.length<1400&&wt<.62){const Mt=.017*Te*(.65+tt*1.15)*1.15;Z.position.copy(nn),Z.quaternion.copy(Ut),Z.rotateY(tt*Math.PI*2),Z.rotateX((Xt-.5)*.14),Z.scale.set(Mt,Mt,Mt),Z.updateMatrix(),nt.push(Z.matrix.clone()),ft.push(kn(Xt))}else if(de.length<1600&&tt<.42){const Mt=(.007+wt*.008)*Te;Z.position.copy(nn),Z.quaternion.copy(Ut),Z.rotateY(wt*Math.PI*2),Z.scale.set(Mt,Mt,Mt),Z.updateMatrix(),de.push(Z.matrix.clone()),ye.push(Pn(wt))}else if(V.length<2400&&Xt<.32){const Mt=(.006+tt*.007)*Te;Z.position.copy(nn),Z.quaternion.copy(Ut),Z.rotateY(Xt*Math.PI*2),Z.scale.set(Mt,Mt,Mt),Z.updateMatrix(),V.push(Z.matrix.clone()),Pe.push(Pn(tt))}}continue}if(Wt==="lake"||mn>.35||Ke<=0||Rt.distanceTo(At[3].capDir)<.036*yt)continue;if(nn.copy(Rt).multiplyScalar(e+Qt),Ut.setFromUnitVectors(yn,Rt),Wt==="canyon"&&gt.length<250&&Bt>.042&&wt<.24){Z.position.copy(Rt).multiplyScalar(e+Qt-.001*Te),Z.quaternion.copy(Ut),Z.rotateY(tt*Math.PI*2);const Mt=(.008+tt*.011)*Te,Xn=(.036+Xt*.052)*Te;Z.scale.set(Mt,Xn,Mt),Z.updateMatrix(),gt.push(Z.matrix.clone());continue}const gi=Vt>-.04,ki=Ke<.065;if(gi||ki&&wt<.45){const Mt=.5+Math.pow(tt,1.3)*1.9,Xn=(Xt-.5)*.16,Nn=(H(Se,5,31)-.5)*.16,Gn=Pn(Xt),wn=kn(Xt);if(Z.position.copy(nn),Z.quaternion.copy(Ut),Z.rotateY(tt*Math.PI*2),Z.rotateX(Xn),Z.rotateZ(Nn),ki&&wt<.55&&nt.length<1400){const Mn=.019*Te*Mt*1.15;Z.scale.set(Mn,Mn,Mn),Z.updateMatrix(),nt.push(Z.matrix.clone()),ft.push(wn)}else{const Mn=Math.floor(wt*100)%3;if(Mn===0&&be.length<2300){const gn=.024*Te*Mt,so=gn*(.58+Xt*.22)*1.15;Z.scale.set(gn,gn,gn),Z.updateMatrix(),be.push(Z.matrix.clone()),Ne.push(Gn),Z.position.copy(nn).addScaledVector(Rt,gn*.9),Z.scale.set(so,so,so),Z.updateMatrix(),pt.push(Z.matrix.clone()),(be.length%2===0?Ee:Ue).push(Z.matrix.clone())}else if(Mn===1&&Qe.length<2500){const gn=.032*Te*Mt*1.15;Z.scale.set(gn*.9,gn*1.35,gn*.9),Z.updateMatrix(),Qe.push(Z.matrix.clone()),ct.push(wn)}else if(ze.length<2350){const gn=.022*Te*Mt*1.15;Z.scale.set(gn,gn,gn),Z.updateMatrix(),ze.push(Z.matrix.clone()),vt.push(wn)}else if(nt.length<1400){const gn=.02*Te*Mt*1.15;Z.scale.set(gn,gn,gn),Z.updateMatrix(),nt.push(Z.matrix.clone()),ft.push(wn)}}const La=Math.abs(Rt.x)<.85?yn:new b(0,0,1);if(Zn.crossVectors(Rt,La).normalize(),zn.crossVectors(Rt,Zn).normalize(),V.length<2800&&tt<.52){Jt.copy(Rt).addScaledVector(Zn,(wt-.5)*.0025).addScaledVector(zn,(Xt-.5)*.0025).normalize();const Mn=(.0085+Xt*.0095)*Te;Z.position.copy(Jt).multiplyScalar(e+Qt),Z.quaternion.setFromUnitVectors(yn,Jt),Z.rotateY(tt*Math.PI*2),Z.scale.set(Mn,Mn,Mn),Z.updateMatrix(),V.push(Z.matrix.clone()),Pe.push(Pn(tt))}if(de.length<1900&&Xt>.54){Jt.copy(Rt).addScaledVector(Zn,(Xt-.5)*.003).addScaledVector(zn,(wt-.5)*.003).normalize();const Mn=(.01+wt*.011)*Te;Z.position.copy(Jt).multiplyScalar(e+Qt),Z.quaternion.setFromUnitVectors(yn,Jt),Z.rotateY(wt*Math.PI*2),Z.scale.set(Mn,Mn,Mn),Z.updateMatrix(),de.push(Z.matrix.clone()),ye.push(Pn(wt))}if(Fe.length<950&&wt>.8){Jt.copy(Rt).addScaledVector(Zn,(tt-.5)*.003).addScaledVector(zn,(Xt-.5)*.003).normalize();const Mn=(.0068+tt*.01)*Te;Z.position.copy(Jt).multiplyScalar(e+Qt),Z.quaternion.setFromUnitVectors(yn,Jt),Z.rotateY(Xt*Math.PI*2),Z.scale.set(Mn,Mn,Mn),Z.updateMatrix(),Fe.push(Z.matrix.clone())}}else if(ke.length+Ze.length<1e3&&wt<.22){const Mt=(.0056+tt*.0065)*Te;Z.position.copy(nn),Z.quaternion.copy(Ut),Z.rotateY(Xt*Math.PI*2),Z.scale.set(Mt,Mt,Mt),Z.updateMatrix(),(Se%2===0?ke:Ze).push(Z.matrix.clone())}else if(Ot.length+kt.length<520&&wt>.85){const Mt=(.011+tt*.016)*Te;Z.position.copy(nn),Z.quaternion.copy(Ut),Z.rotateY(Xt*Math.PI*2),Z.scale.set(Mt,Mt,Mt),Z.updateMatrix(),(Se%2===0?Ot:kt).push(Z.matrix.clone())}}const I=Hi(At[4].capDir);for(let Se=0;Se<120;Se++){const Ke=Math.floor(Se/4),Bt=H(Ke,4,17)*Math.PI*2,dt=Math.sqrt(H(Ke,11,3))*(.095*yt),Vt=Math.cos(Bt)*dt+(H(Se,2,9)-.5)*(.012*yt),mn=Math.sin(Bt)*dt+(H(Se,7,5)-.5)*(.012*yt),Qt=Zs(e,I,Vt,mn,0,n,i),Wt=(.018+H(Se,9,6)*.026)*Te;Z.position.copy(Qt.pos),Z.quaternion.setFromUnitVectors(yn,Qt.normal),Z.rotateY(H(Se,5,1)*Math.PI*2),Z.scale.set(Wt,Wt,Wt),Z.updateMatrix(),(Ke%2===0?Ot:kt).push(Z.matrix.clone())}for(let Se=0;Se<200;Se++){const Ke=oe[Se%oe.length],Bt=Ke[Math.floor(H(Se,5,3)*Ke.length)],dt=Bt.phi+(Se%2===0?1:-1)*(.008+H(Se,7,1)*.026)*Te,Vt=G.clamp(Bt.theta+(H(Se,3,8)-.5)*.018*Te,.001,Math.PI-.001),mn=Math.sin(Vt),Qt=di(mn*Math.cos(dt),Math.cos(Vt),mn*Math.sin(dt),n,i,3).elev,Wt=Cy(e,Vt,dt,Qt);Z.position.copy(Wt.pos),Z.quaternion.setFromUnitVectors(yn,Wt.normal),Z.rotateY(H(Se,1,6)*Math.PI*2);const Lt=(.008+H(Se,4,9)*.01)*Te;Z.scale.set(Lt,Lt,Lt),Z.updateMatrix(),V.push(Z.matrix.clone()),Pe.push(Pn(H(Se,2,3)))}const J=bh(),q=Nf(),se=$c(q.canopy.map),$=$c(q.palm.map),Re=new ni(new b(0,0,0),e+1.8),Ce=(Se,Ke,Bt,dt,Vt=null,{castShadow:mn=!1,receiveShadow:Qt=!1,customDepthMaterial:Wt=null}={})=>{Ke.boundingSphere=Re;const Lt=new bt(Ke,Bt,Math.max(1,dt.length));return Lt.name=Se,Lt.frustumCulled=!1,Lt.castShadow=mn,Lt.receiveShadow=Qt,Wt&&(Lt.customDepthMaterial=Wt),dt.forEach((wt,tt)=>{Lt.setMatrixAt(tt,wt),Vt&&Vt[tt]&&Lt.setColorAt(tt,Vt[tt])}),Lt.instanceMatrix.needsUpdate=!0,Vt&&Lt.instanceColor&&(Lt.instanceColor.needsUpdate=!0),a.add(Lt),Lt};if(gt.length>0){const Se=new Be({vertexColors:!0,roughnessMap:D.roughnessMap,bumpMap:D.bumpMap,bumpScale:.045,roughness:.88});Ce("Pandora_Global_Canyon_Spires",Vy(7),Se,gt,null,{castShadow:!0,receiveShadow:!0})}if(dn.length>0){const Se=new Be({color:4943976,emissive:61695,emissiveIntensity:0,roughness:.72});r.push({mat:Se,dayColor:4943976,nightColor:542818,dayEmissive:1589304,nightEmissive:59647,dayEI:0,nightEI:1.75,pulsePhase:1.2}),Ce("Pandora_Global_Coral_Reefs",new Es(1,0),Se,dn)}if(Fe.length>0){const Se=new Be({vertexColors:!0,roughnessMap:D.roughnessMap,bumpMap:D.bumpMap,bumpScale:.035,roughness:.9});Ce("Pandora_Global_Mossy_Rocks",Oy(),Se,Fe,null,{castShadow:!1,receiveShadow:!0})}const Ye=new Be({color:6441782,map:J.map,roughnessMap:J.roughnessMap,bumpMap:J.bumpMap,bumpScale:.04,roughness:.92});r.push({mat:Ye,dayColor:6441782,nightColor:2238012,dayEmissive:0,nightEmissive:662570,dayEI:0,nightEI:.16});const He=new tn(.055,.18,1,6,1);He.translate(0,.5,0),Ce("Pandora_Global_Tree_Trunks",He,Ye,be,null,{castShadow:!0,receiveShadow:!0});const{outer:ht,under:mt}=Bf(),$e=new Be({color:16777215,map:q.canopy.map,roughnessMap:q.canopy.roughnessMap,emissiveMap:q.canopy.emissiveMap,emissive:537664,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:$e,dayColor:13954004,nightColor:1793118,dayEmissive:667158,nightEmissive:562344,dayEI:0,nightEI:.85}),Ce("Pandora_Global_Canopy_Tops",ht,$e,pt,Ne,{castShadow:!0,receiveShadow:!0,customDepthMaterial:se});const W=new Be({color:3901e3,map:q.canopy.map,roughnessMap:q.canopy.roughnessMap,emissiveMap:q.canopy.emissiveMap,emissive:65512,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:W,dayColor:3901e3,nightColor:1108216,dayEmissive:1456156,nightEmissive:65512,dayEI:0,nightEI:2.2,pulsePhase:0}),Ce("Pandora_Global_Canopy_Under_Turquoise",mt,W,Ee,null,{castShadow:!1,receiveShadow:!0});const Ve=new Be({color:4556866,map:q.canopy.map,roughnessMap:q.canopy.roughnessMap,emissiveMap:q.canopy.emissiveMap,emissive:16720544,emissiveIntensity:0,roughness:.52,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:Ve,dayColor:4556866,nightColor:16728760,dayEmissive:1719320,nightEmissive:16720544,dayEI:0,nightEI:2.15,pulsePhase:1.9}),Ce("Pandora_Global_Canopy_Under_Magenta",mt,Ve,Ue,null,{castShadow:!1,receiveShadow:!0}),Ce("Pandora_Global_Alien_Redwoods",Ry(),Ye,Qe,null,{castShadow:!0,receiveShadow:!0});const st=new Be({color:16777215,map:q.canopy.map,roughnessMap:q.canopy.roughnessMap,emissiveMap:q.canopy.emissiveMap,emissive:51416,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:st,dayColor:14216664,nightColor:3903136,dayEmissive:798236,nightEmissive:42168,dayEI:0,nightEI:.82}),Ce("Pandora_Global_Alien_Redwoods_Canopy",Dy(),st,Qe,ct,{castShadow:!0,receiveShadow:!0,customDepthMaterial:se}),Ce("Pandora_Global_Gnarled_Root_Trees",Iy(),Ye,ze,null,{castShadow:!0,receiveShadow:!0});const Y=new Be({color:16777215,map:q.canopy.map,roughnessMap:q.canopy.roughnessMap,emissiveMap:q.canopy.emissiveMap,emissive:9455871,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:Y,dayColor:14084820,nightColor:6451352,dayEmissive:1189400,nightEmissive:6830288,dayEI:0,nightEI:.85}),Ce("Pandora_Global_Gnarled_Root_Canopy",Ly(),Y,ze,vt,{castShadow:!0,receiveShadow:!0,customDepthMaterial:se}),Ce("Pandora_Global_Alien_Palms",Ny(),Ye,nt,null,{castShadow:!0,receiveShadow:!0});const le=new Be({color:16777215,map:q.palm.map,roughnessMap:q.palm.roughnessMap,emissiveMap:q.palm.emissiveMap,emissive:55464,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:le,dayColor:14217432,nightColor:5022876,dayEmissive:1194008,nightEmissive:52392,dayEI:0,nightEI:.95}),Ce("Pandora_Global_Alien_Palms_Fronds",Uy(),le,nt,ft,{castShadow:!0,receiveShadow:!0,customDepthMaterial:$});const K=new Be({color:16777215,map:q.canopy.map,roughnessMap:q.canopy.roughnessMap,emissiveMap:q.canopy.emissiveMap,emissive:57514,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:K,dayColor:14085332,nightColor:1861214,dayEmissive:1192986,nightEmissive:55464,dayEI:0,nightEI:1.05,pulsePhase:1.1}),Ce("Pandora_Global_Broadleaf_Shrubs",Fy(),K,de,ye,{castShadow:!1,receiveShadow:!0});const Me=new Be({color:16777215,map:q.fern.map,roughnessMap:q.fern.roughnessMap,emissiveMap:q.fern.emissiveMap,emissive:59548,emissiveIntensity:0,roughness:.66,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:Me,dayColor:14216920,nightColor:1600338,dayEmissive:1327646,nightEmissive:59558,dayEI:0,nightEI:1.25,pulsePhase:2.4}),Ce("Pandora_Global_Giant_Ferns",ky(),Me,V,Pe,{castShadow:!1,receiveShadow:!0});const ce=kf(),ae=new Be({color:8796822,emissive:12728575,emissiveIntensity:0,roughness:.45});r.push({mat:ae,dayColor:8796822,nightColor:13650687,dayEmissive:3807298,nightEmissive:12071167,dayEI:0,nightEI:2.3,pulsePhase:.8}),Ce("Pandora_Global_Flowers_Violet",ce,ae,ke);const Q=new Be({color:13394984,emissive:16739866,emissiveIntensity:0,roughness:.45});r.push({mat:Q,dayColor:13394984,nightColor:16742946,dayEmissive:4989968,nightEmissive:16738324,dayEI:0,nightEI:2.35,pulsePhase:2.6}),Ce("Pandora_Global_Flowers_Orange",ce,Q,Ze);const Ie=Gy(),Je=new Be({color:7357048,emissive:11024639,emissiveIntensity:0,roughness:.48});r.push({mat:Je,dayColor:7357048,nightColor:10631935,dayEmissive:3284024,nightEmissive:9973503,dayEI:0,nightEI:2.25,pulsePhase:1.5}),Ce("Pandora_Global_Mushrooms_Violet",Ie,Je,Ot);const lt=new Be({color:10767974,emissive:16725672,emissiveIntensity:0,roughness:.48});r.push({mat:lt,dayColor:10767974,nightColor:16726186,dayEmissive:4332584,nightEmissive:16722072,dayEI:0,nightEI:2.2,pulsePhase:3.1}),Ce("Pandora_Global_Mushrooms_NeonPink",Ie,lt,kt);const jt=1200,cn=600,Ft=By();Ft.boundingSphere=Re;const Sn=new Be({color:16777215,map:q.fern.map,roughnessMap:q.fern.roughnessMap,emissiveMap:q.fern.emissiveMap,emissive:57494,emissiveIntensity:0,roughness:.68,alphaTest:.45,transparent:!1,depthWrite:!0,side:It});r.push({mat:Sn,dayColor:13954002,nightColor:1465932,dayEmissive:1062426,nightEmissive:56224,dayEI:0,nightEI:.92,pulsePhase:.9});const at=new bt(Ft,Sn,jt);at.name="Pandora_Ground_Clutter_Grass",at.frustumCulled=!1,at.castShadow=!1,at.receiveShadow=!0,at.visible=!1,at.userData.manualClutterLod=!0,at.setColorAt(0,new ne(16777215));const Ln=zy();Ln.boundingSphere=Re;const li=new Be({color:16777215,roughnessMap:D.roughnessMap,bumpMap:D.bumpMap,bumpScale:.03,roughness:.92}),Ht=new bt(Ln,li,cn);Ht.name="Pandora_Ground_Clutter_Pebbles",Ht.frustumCulled=!1,Ht.castShadow=!1,Ht.receiveShadow=!0,Ht.visible=!1,Ht.userData.manualClutterLod=!0,Ht.setColorAt(0,new ne(16777215));const Ps=new ot().makeScale(0,0,0),Rh=new ne(1,1,1);for(let Se=0;Se<jt;Se++)at.setMatrixAt(Se,Ps),at.setColorAt(Se,Rh);for(let Se=0;Se<cn;Se++)Ht.setMatrixAt(Se,Ps),Ht.setColorAt(Se,Rh);at.count=0,Ht.count=0,a.add(at),a.add(Ht),ue.userData.animatedEmissive=!0,ge.userData.animatedEmissive=!0;for(let Se=0;Se<r.length;Se++)r[Se].mat.userData=r[Se].mat.userData||{},r[Se].mat.userData.animatedEmissive=!0;const Da=new ne,Ia=new ne,qf=new ne(821410),Yf=new ne(280664),jf=new ne(2649668),Kf=new ne(59647),Zf=Se=>{const Ke=di(Se.x,Se.y,Se.z,n,i,3),Bt=Ke.cont<=0||Ke.lakeBlend>.35,dt=Ke.cont<=0?0:Ke.lakeBlend>.35?Ke.lakeWaterElev:-1;return{terrainElev:Ke.elev,waterElev:dt,hasWater:Bt,nation:Ke.nation,forestFactor:Ke.forestFactor,waterFactor:Ke.waterFactor,ashFactor:Ke.ashFactor,reefFactor:Ke.reefFactor,biome:Ke.biome}},$f=(Se,Ke,Bt=0)=>{const dt=G.smoothstep(-Se,-.1,.04);P?.uLavaTime&&(P.uLavaTime.value=Ke);for(let wt=0;wt<r.length;wt++){const tt=r[wt];if(tt.isWaterfall){const Xt=.85+.15*Math.sin(Ke*3.8+wt);tt.mat.color.setRGB(G.lerp(tt.dayColorRGB[0],tt.nightColorRGB[0]*Xt,dt),G.lerp(tt.dayColorRGB[1],tt.nightColorRGB[1]*Xt,dt),G.lerp(tt.dayColorRGB[2],tt.nightColorRGB[2]*Xt,dt)),tt.mat.opacity=G.lerp(.52,.72,dt);continue}if(tt.dayColor!==void 0&&(Da.setHex(tt.dayColor),Ia.setHex(tt.nightColor),tt.mat.color.copy(Da).lerp(Ia,dt)),tt.dayEmissive!==void 0&&(Da.setHex(tt.dayEmissive),Ia.setHex(tt.nightEmissive),tt.mat.emissive.copy(Da).lerp(Ia,dt)),tt.dayEI!==void 0){const Xt=tt.pulsePhase!==void 0?.9+.16*Math.sin(Ke*1.7+tt.pulsePhase):1;tt.mat.emissiveIntensity=G.lerp(tt.dayEI,tt.nightEI*Xt,dt)}}const Vt=.85+.25*Math.sin(Ke*2);ue.color.copy(qf).lerp(Yf,dt),ue.emissiveIntensity=G.lerp(0,1.15*Vt,dt),ge.color.copy(jf).lerp(Kf,dt),ge.emissiveIntensity=G.lerp(0,2.35*Vt,dt);const mn=Le.plumeGeo.attributes.position,Qt=Le.plumeGeo.attributes.color,Wt=Le.geyserEmitters,Lt=Le.puffsPerGeyser;for(let wt=0;wt<Wt.length;wt++){const tt=Wt[wt];for(let Xt=0;Xt<Lt;Xt++){const gi=wt*Lt+Xt,ki=(Ke*.48+tt.phase+Xt/Lt)%1,Mt=ki*tt.maxHeight,Xn=Math.sin(ki*Math.PI)*.004*Te;mn.setXYZ(gi,tt.basePos.x+tt.normal.x*Mt+Math.cos(gi)*Xn,tt.basePos.y+tt.normal.y*Mt,tt.basePos.z+tt.normal.z*Mt+Math.sin(gi)*Xn);const Nn=G.lerp(.85,wt%2===0?.2:.95,dt),Gn=G.lerp(.95,wt%2===0?1.45:.45,dt),wn=G.lerp(1,1.85,dt);Qt.setXYZ(gi,Nn,Gn,wn)}}mn.needsUpdate=!0,Qt.needsUpdate=!0,Le.plumeMat.opacity=G.lerp(.32,.65,dt),z&&(z.offset.x=Ke*.014%1,z.offset.y=Ke*.009%1);for(let wt=0;wt<me.length;wt++){const tt=me[wt];tt.water.material?.uniforms?.time&&(tt.water.material.uniforms.time.value=Ke*.55)}rt.update(Ke,dt),Xe.update(Ke,dt,Bt)},to=.0011,no=19;let sl="";const Yi=new b,ci=new qt,Rs=new ne,io=new ne,Qf=(Se,Ke,Bt)=>{const dt=Math.abs(Se),Vt=Math.abs(Ke),mn=Math.abs(Bt);if(dt>=Vt&&dt>=mn){const Wt=Se>=0?1:-1;return{face:Se>=0?0:1,u:Ke*Wt/Math.max(1e-5,dt),v:Bt/Math.max(1e-5,dt)}}if(Vt>=dt&&Vt>=mn){const Wt=Ke>=0?1:-1;return{face:Ke>=0?2:3,u:Se*Wt/Math.max(1e-5,Vt),v:Bt/Math.max(1e-5,Vt)}}const Qt=Bt>=0?1:-1;return{face:Bt>=0?4:5,u:Se*Qt/Math.max(1e-5,mn),v:Ke/Math.max(1e-5,mn)}},Dh=(Se,Ke,Bt,dt)=>(Se===0?dt.set(1,Ke,Bt):Se===1?dt.set(-1,-Ke,Bt):Se===2?dt.set(Ke,1,Bt):Se===3?dt.set(-Ke,-1,Bt):Se===4?dt.set(Ke,Bt,1):dt.set(-Ke,Bt,-1),dt.normalize());return{group:a,terrainSplatUniforms:P,reflectiveWaters:me,waterfalls:ve,pulsingRivers:pe,archCenters:xe,riverPaths:oe,landmarks:At,samplerCtx:o,getFloorAndWaterAtDir:Zf,updateDayNight:$f,updateGroundClutter:(Se,Ke,Bt=0)=>{if(!Se||!Number.isFinite(Ke)||Ke>=450||Bt>.05){at.visible=!1,Ht.visible=!1,sl="";return}const dt=Se.lengthSq();if(!Number.isFinite(dt)||dt<1e-6){at.visible=!1,Ht.visible=!1;return}const{face:Vt,u:mn,v:Qt}=Qf(Se.x,Se.y,Se.z),Wt=Math.round(mn/to),Lt=Math.round(Qt/to),wt=`${Vt}_${Wt}_${Lt}`;if(wt===sl){at.visible=at.count>0,Ht.visible=Ht.count>0;return}sl=wt;let tt=0,Xt=0;for(let gi=-no;gi<=no;gi++){const ki=Lt+gi;for(let Mt=-no;Mt<=no;Mt++){if(Mt*Mt+gi*gi>no*no)continue;const Xn=Wt+Mt,Nn=H(Xn+5e3,ki+5e3,Vt*17+3),Gn=H(Xn+5e3,ki+5e3,Vt*31+11),wn=H(Xn+5e3,ki+5e3,Vt*47+23),La=(Xn+(Nn-.5)*.85)*to,Mn=(ki+(Gn-.5)*.85)*to;Dh(Vt,La,Mn,Yi);const gn=di(Yi.x,Yi.y,Yi.z,n,i,3);if(!Number.isFinite(gn.elev)||gn.cont<=.004||gn.lakeBlend>.35)continue;const so=e+gn.elev,Na=gn.nation==="ash"||gn.ashFactor>.25,jo=gn.nation==="water";if(!Na&&tt<jt&&(!jo||wn<.42)){const Ko=(jo?.0014:.002+Nn*.0028)*Te;ci.position.copy(Yi).multiplyScalar(so),ci.quaternion.setFromUnitVectors(yn,Yi),ci.rotateY(Gn*Math.PI*2),ci.rotateX((wn-.5)*.16),ci.scale.set(Ko*(.85+Gn*.35),Ko*(.8+wn*.55),Ko*(.85+Nn*.35)),ci.updateMatrix(),at.setMatrixAt(tt,ci.matrix),jo?Rs.setHex(6600808).lerp(io.setHex(8965242),wn):Rs.setHex(2059828).lerp(io.setHex(2659944),Gn).lerp(io.setHex(4882992),wn*.35),at.setColorAt(tt,Rs),tt++}if(wn<(Na?.58:jo?.32:.42)&&Xt<cn){const Ko=(Gn-.5)*to*.35,Jf=(Nn-.5)*to*.35;Dh(Vt,La+Ko,Mn+Jf,Yi);const Ua=(Na?.0014+Gn*.0024:.0011+Nn*.0018)*Te;ci.position.copy(Yi).multiplyScalar(so-Ua*.08),ci.quaternion.setFromUnitVectors(yn,Yi),ci.rotateY(Nn*Math.PI*2),ci.scale.set(Ua,Ua*(.75+wn*.5),Ua),ci.updateMatrix(),Ht.setMatrixAt(Xt,ci.matrix),Na?Rs.setHex(2499622).lerp(io.setHex(3813936),Gn):jo?Rs.setHex(13155998).lerp(io.setHex(10131080),Nn):Rs.setHex(4475968).lerp(io.setHex(3168308),Gn*.65),Ht.setColorAt(Xt,Rs),Xt++}}}at.count=tt,at.instanceMatrix.needsUpdate=!0,at.instanceColor&&(at.instanceColor.needsUpdate=!0),at.visible=tt>0,Ht.count=Xt,Ht.instanceMatrix.needsUpdate=!0,Ht.instanceColor&&(Ht.instanceColor.needsUpdate=!0),Ht.visible=Xt>0},groundClutterMeshes:{grass:at,pebbles:Ht}}}function e1(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new pn(s);return n.needsUpdate=!0,n}const zf=e1();function pd(s,e,t=350){const n=e,i=1/3.5,o=s==="p2",a=new Nt;a.name=`${s}_Urban_AV_Traffic_System`;const r=(o?.0068:.0033)*i,l=new un(r*.55,r*.34,r*1.85),c=new Be({color:1580068,roughness:.38,metalness:.85}),h=new bt(l,c,t),u=new un(r*.58,r*.22,r*.55);u.translate(0,0,r*.92);const d=new fn({color:s==="p4"?new ne(2.1,2.3,2.5):new ne(1.35,1.7,1.88)}),f=new bt(u,d,t),g=new un(r*.42,r*.16,r*3.8);g.translate(0,0,-r*2.55);const v=new fn({color:s==="p4"?new ne(3.6,1.25,.25):new ne(1.85,.56,.22),transparent:!0,opacity:.85}),m=new bt(g,v,t);for(const M of[h,f,m])M.frustumCulled=!1,M.castShadow=!1,M.receiveShadow=!1,M.geometry.boundingSphere=new ni(new b(0,0,0),n*1.28);a.add(h,f,m);const p=[],_=[new b(1,0,0),new b(0,0,1),new b(.707,0,.707),new b(-.707,0,.707)];for(let M=0;M<t;M++){const S=M%2===0,R=.038+M%7/6*.062+H(M,3,7)*.014,L=n+R;if(S){const P=(M>>1)%14,F=o?(.032+P/13*.185+(H(M,1,9)-.5)*.012)*.45:(.035+P*.034+(H(M,1,9)-.5)*.014)*i*1.2/3.2,z=P%2===0?1:-1,k=z*(.085+H(M,5,2)*.11)/Math.max(.04,Math.sin(F))*(o?.48:1/1.5);p.push({type:"ring",radius:L,theta:F,sinTheta:Math.sin(F),cosTheta:Math.cos(F),phi0:H(M,8,4)*Math.PI*2,omega:k,dir:z,bobAmp:(o?.006:.002+H(M,2,6)*.0025)*i,bobPhase:H(M,4,1)*Math.PI*2})}else{const P=M%_.length,F=o?.064*.45:.042*1.15/3.2,z=(Math.floor(M/8)%11-5)*F*i,k=_[P],U=new ut().setFromAxisAngle(k,z);o&&M%3===0&&U.premultiply(new ut().setFromAxisAngle(_[0],-.22*.45));const N=M%4===1?1:-1,X=o?.24*.45:.52*i*1.2/3.2,oe=(H(M,6,3)*2-1)*X,te=N*(o?.13+H(M,9,5)*.16:(.09+H(M,9,5)*.13)*1.25)*i/4.8;p.push({type:"corridor",radius:L,qPlane:U,s0:oe,arcSpan:X,speed:te,dir:N,bobAmp:(o?.005:.002+H(M,7,2)*.002)*i,bobPhase:H(M,3,4)*Math.PI*2})}}const y=new b,x=new b,T=new b,w=new b,E=new ot,A=new b;return{update(M){if(!(!a.parent||!a.parent.visible)){for(let S=0;S<t;S++){const C=p[S],R=Math.sin(M*2.2+C.bobPhase)*C.bobAmp,L=C.radius+R;if(C.type==="ring"){const F=C.phi0+C.omega*M,z=Math.cos(F),k=Math.sin(F);x.set(C.sinTheta*z,C.cosTheta,C.sinTheta*k).normalize(),y.copy(x).multiplyScalar(L),T.set(-C.dir*k,0,C.dir*z).normalize(),w.crossVectors(x,T).normalize(),T.crossVectors(w,x).normalize()}else{const F=C.arcSpan*2;let z=(C.s0+C.speed*M+C.arcSpan)%F;z<0&&(z+=F);const k=z-C.arcSpan,U=Math.sin(k),N=Math.cos(k);x.set(U,N,0).applyQuaternion(C.qPlane).normalize(),y.copy(x).multiplyScalar(L),T.set(C.dir*N,-C.dir*U,0).applyQuaternion(C.qPlane).normalize(),w.crossVectors(x,T).normalize()}let P=1;if(C.type==="corridor"){const F=Math.abs(Math.acos(G.clamp(x.y,-1,1)))/C.arcSpan;P=1-G.smoothstep(F,.85,1)}E.makeBasis(w,x,T),E.setPosition(y),P<.99&&(A.setScalar(Math.max(.01,P)),E.scale(A)),h.setMatrixAt(S,E),f.setMatrixAt(S,E),m.setMatrixAt(S,E)}h.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}},group:a}}function t1(s){const e=[],t=[],n=[],i=[],o=[],a=(f,g)=>(f.material&&(f.material.userData=f.material.userData||{},f.material.userData.animatedEmissive=!0),{mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let r=0;s.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";r++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(a(f,r)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(a(f,r)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(a(f,r)):/NC_Neon_Sign_/.test(g)?i.push(a(f,r)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&o.push(a(f,r))});const l=f=>{if(f.length===0)return null;const g=new b;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const v=g.clone().normalize();return{parts:f,centroid:g,localUp:v}},c=[l(e),l(t)].filter(Boolean),h=new ut,u=new ut,d=new b;return{update(f,g=1){c.forEach((v,m)=>{const p=m*2.4,_=Math.sin(f*1.45+p)*1.4,y=Math.sin(f*1.15+p)*.08;for(let x=0;x<v.parts.length;x++){const T=v.parts[x],w=/Tail|Fin/i.test(T.mesh.name),E=Math.sin(f*3.1+p+x*.65)*(w?.14:.045);d.copy(T.basePos).sub(v.centroid),h.setFromAxisAngle(v.localUp,y+E),d.applyQuaternion(h),T.mesh.position.copy(v.centroid).add(d).addScaledVector(v.localUp,_),T.mesh.quaternion.copy(h).multiply(T.baseQuat),T.material&&T.material.emissiveIntensity!==void 0&&(T.material.emissiveIntensity=Math.min(1.9,T.baseEmissive*(.86+.14*Math.sin(f*2.6+x*.7+p))*g))}});for(let v=0;v<n.length;v++){const m=n[v],p=Math.sin(f*1.6+m.seed*.9)*.55;m.mesh.position.copy(m.basePos).addScaledVector(m.normal,p),m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=Math.min(1.9,m.baseEmissive*(.88+.1*Math.sin(f*3.4+m.seed))*g))}for(let v=0;v<i.length;v++){const m=i[v];if(!m.material||m.material.emissiveIntensity===void 0)continue;const p=.88+.1*Math.sin(f*2.2+m.seed*1.7),_=Math.sin(f*23+m.seed*7.3)>.965?.55:1;m.material.emissiveIntensity=Math.min(1.9,m.baseEmissive*p*_*g)}for(let v=0;v<o.length;v++){const m=o[v];m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=Math.min(1.85,m.baseEmissive*(.76+.3*Math.sin(f*3.2+m.seed*.8))*g)),/Hexagon_Ring|Hexagon_Spoke/i.test(m.mesh.name)&&(u.setFromAxisAngle(m.normal,f*.35*(v%2===0?1:-1)),m.mesh.quaternion.copy(u).multiply(m.baseQuat))}}}}function n1(s){const e=[];let t=0;return s.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,n.material.userData=n.material.userData||{},n.material.userData.animatedEmissive=!0,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n,i=1){for(let o=0;o<e.length;o++){const a=e[o];if(a.material.emissiveIntensity!==void 0){const r=.78+.36*Math.sin(n*1.9-a.phase);a.material.emissiveIntensity=a.baseEmissive*r*i}}}}}function i1(s){const e=s,t=1/3.5,n=new Nt;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,o=.0022*t,a=new un(o*.4,o*.32,o*1.8),r=new un(o*1.9,o*.08,o*.72);r.translate(o*.95,0,0);const l=new un(o*1.9,o*.08,o*.72);l.translate(-o*.95,0,0);const c=new Be({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),h=new bt(a,c,i),u=new bt(r,c,i),d=new bt(l,c,i);n.add(h,u,d);const f=[];for(let L=0;L<i;L++){const P=e+(L<55?.145+H(L,2,7)*.09:.035+H(L,4,3)*.06)*t,F=(.025+H(L,5,1)*.24)*t*1.1,z=H(L,8,9)*Math.PI*2,k=(L%3===0?-1:1)*(.28+H(L,3,6)*.28);f.push({alt:P,theta:F,phi0:z,omega:k,dir:k>=0?1:-1,flapSpeed:5.5+H(L,1,5)*3.5,flapPhase:H(L,7,2)*Math.PI*2,scaleFactor:.75+H(L,9,4)*.8})}const g=42,v=new Float32Array(g*3),m=[];for(let L=0;L<g;L++){const P=(.16+H(L,11,2)*.24)*t*1.15,F=H(L,13,5)*Math.PI*2,z=e+(.045+H(L,4,8)*.065)*t;m.push({theta:P,phi0:F,alt:z,speed:.028+H(L,6,3)*.025})}const p=new Et;p.setAttribute("position",new _t(v,3));const _=new Ai({map:zf,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),y=new Ei(p,_);y.name="Medieval_Drifting_Cloud_Banks",n.add(y);const x=new b,T=new b,w=new b,E=new b,A=new ot,M=new ot,S=new ut,C=new b(0,0,1),R=new b;return{group:n,update(L,P=1){if(!n.parent||!n.parent.visible)return;for(let z=0;z<i;z++){const k=f[z],U=k.phi0+k.omega*L,N=k.theta+Math.sin(L*.6+k.flapPhase)*.008,X=k.alt+Math.sin(L*1.1+k.flapPhase)*.0018,oe=Math.sin(N),te=Math.cos(N),we=Math.cos(U),j=Math.sin(U);T.set(oe*we,te,oe*j).normalize(),x.copy(T).multiplyScalar(X),w.set(-k.dir*j,0,k.dir*we).normalize(),E.crossVectors(T,w).normalize(),w.crossVectors(E,T).normalize(),A.makeBasis(E,T,w),A.setPosition(x),R.setScalar(k.scaleFactor),A.scale(R),h.setMatrixAt(z,A);const ge=Math.sin(L*.45+k.flapPhase)>-.25?.55:.12,pe=Math.sin(L*k.flapSpeed+k.flapPhase)*ge;S.setFromAxisAngle(C,pe),M.makeRotationFromQuaternion(S),M.premultiply(A),u.setMatrixAt(z,M),S.setFromAxisAngle(C,-pe),M.makeRotationFromQuaternion(S),M.premultiply(A),d.setMatrixAt(z,M)}h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const F=p.attributes.position;for(let z=0;z<g;z++){const k=m[z],U=k.phi0+k.speed*L,N=Math.sin(k.theta);F.setXYZ(z,k.alt*N*Math.cos(U),k.alt*Math.cos(k.theta),k.alt*N*Math.sin(U))}F.needsUpdate=!0}}}function Cs(s,e=1){const t=s.attributes.normal;if(!t)return s;for(let n=0;n<t.count;n++){const i=t.getX(n),o=t.getY(n),a=t.getZ(n),r=Math.hypot(i,o,a);!Number.isFinite(r)||r<1e-4?t.setXYZ(n,0,e,0):Math.abs(r-1)>.001&&t.setXYZ(n,i/r,o/r,a/r)}return t.needsUpdate=!0,s}function vs(s,e,t){const n=Math.max(1e-6,s),i=new ls(n,e,4,2);i.rotateX(-Math.PI*.5);const o=i.attributes.position;for(let a=0;a<o.count;a++){const r=G.clamp((o.getX(a)+n*.5)/n,0,1),l=o.getZ(a),c=t*r*n,h=-Math.pow(r,1.35)*e*.85,u=1-Math.pow(r,1.6)*.78,d=Math.sin(r*Math.PI)*e*.14;o.setXYZ(a,c,d,l*u+h)}return i.computeVertexNormals(),Cs(i,1)}function md(s){const e=[],t=new Vn(s*.34,s*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new Vn(s*.18,s*.9,4);n.rotateX(Math.PI*.42),n.translate(0,s*.2,s*1.15),e.push(n.toNonIndexed());const i=new Vn(s*.12,s*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-s*1.85),e.push(i.toNonIndexed());const o=Ct(e,!1);return o.computeVertexNormals(),o}function s1(s){const e=[],t=new un(s*.72,s*.68,s*1.55);t.translate(0,s*.95,0),e.push(t.toNonIndexed());const n=new un(s*.36,s*.58,s*.68);n.rotateX(.45),n.translate(0,s*1.32,s*.85),e.push(n.toNonIndexed());const i=new un(s*.92,s*.44,s*.36);i.rotateX(.28),i.translate(0,s*1.54,s*1.15),e.push(i.toNonIndexed());const o=Ct(e,!1);o.computeVertexNormals();const a=[],r=new tn(s*.1,s*.08,s*.85,5);r.translate(s*.28,-s*.42,0);const l=r.clone();l.translate(-s*.56,0,0),a.push(r.toNonIndexed(),l.toNonIndexed());const c=Ct(a,!1);c.computeVertexNormals();const h=c.clone();return{bodyGeo:o,frontLegsGeo:c,backLegsGeo:h}}function o1(s){const e=new hn(s*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),Cs(e,1);const t=[];for(let i=0;i<4;i++){const o=i/4*Math.PI*2,a=new tn(s*.05,s*.012,s*1.45,4);a.translate(Math.cos(o)*s*.22,-s*.72,Math.sin(o)*s*.22),t.push(a.toNonIndexed())}const n=Ct(t,!1);return n.computeVertexNormals(),Cs(n,-1),{bellGeo:e,tentGeo:n}}function Aa(s){return s.map(e=>{const t=e.index?e.toNonIndexed():e;return t.attributes.uv&&t.deleteAttribute("uv"),t})}function a1(s){const e=s,t=[],n=new hn(e*.42,12,10);n.scale(.88,.72,2.55),t.push(n);const i=new Vn(e*.42,e*1.15,8);i.rotateX(Math.PI*.5),i.scale(1.18,.72,1),i.translate(0,e*.03,e*1.15),t.push(i),[-1,1].forEach(h=>{const u=new un(e*.16,e*.16,e*.92);u.rotateY(h*.12),u.translate(h*e*.24,e*.2,e*.92),t.push(u);const d=new un(e*1.55,e*.06,e*.48);d.rotateY(-h*.34),d.rotateZ(-h*.1),d.translate(h*e*.85,-e*.12,e*.18),t.push(d)});const o=new Vn(e*.25,e*1.35,7);o.rotateX(-Math.PI*.5),o.translate(0,0,-e*1.35),t.push(o);const a=new un(e*1.35,e*.05,e*.44);a.translate(0,e*.02,-e*1.98),t.push(a);const r=Ct(Aa(t),!1);r.computeVertexNormals(),Cs(r,1);const l=[];[-1,1].forEach(h=>{for(let u=0;u<4;u++){const d=new un(e*.05,e*.07,e*.22);d.rotateY(h*.08),d.translate(h*(e*.36-u*.04*e),e*.06,e*(.72-u*.42)),l.push(d)}});const c=Ct(Aa(l),!1);return c.computeVertexNormals(),Cs(c,1),{bodyGeo:r,glowGeo:c}}function r1(s){const e=s,t=[],n=new hn(e*.24,9,7);n.scale(.85,.72,2),t.push(n);const i=new tn(e*.07,e*.14,e*.85,6);i.rotateX(Math.PI*.42),i.translate(0,e*.12,e*.74),t.push(i);const o=new Vn(e*.09,e*.36,5);o.rotateX(Math.PI*.5),o.translate(0,e*.22,e*1.24),t.push(o);const a=new Vn(e*.14,e*1.15,6);a.rotateX(-Math.PI*.5),a.translate(0,-e*.02,-e*.95),t.push(a);const r=Ct(Aa(t),!1);r.computeVertexNormals(),Cs(r,1);const l=[];[-1,1].forEach(h=>{const u=new un(e*.92,e*.04,e*.28);u.rotateY(-h*.35),u.translate(h*e*.48,-e*.05,e*.24),l.push(u);const d=new un(e*.62,e*.035,e*.22);d.rotateY(-h*.28),d.translate(h*e*.34,-e*.06,-e*.34),l.push(d)});const c=Ct(Aa(l),!1);return c.computeVertexNormals(),Cs(c,1),{bodyGeo:r,flipperGeo:c}}function l1(s){const e=s,t=[],n=new Vn(e*.24,e*.85,5);n.rotateX(Math.PI*.5),n.scale(.55,1,1),n.translate(0,0,e*.15),t.push(n);const i=new Vn(e*.22,e*.42,4);i.rotateX(-Math.PI*.5),i.scale(.32,1.15,1),i.translate(0,0,-e*.44),t.push(i);const o=Ct(Aa(t),!1);return o.computeVertexNormals(),Cs(o,1),o}function c1(s,e){const t=s,n=1/3.5,i=new Nt;i.name="Pandora_Bioluminescent_Life";const o=e?.samplerCtx||null,a=o?.qCap,r=o?.sphereLandmarks,l=W=>{const Ve=W.clone().normalize(),st=Math.abs(Ve.x)<.85?new b(1,0,0):new b(0,0,1),Y=new b().crossVectors(Ve,st).normalize(),le=new b().crossVectors(Ve,Y).normalize();return{normalDir:Ve,e1:Y,e2:le}},c=180,h=new Float32Array(c*3),u=new Float32Array(c*3),d=[],f=[new ne(62975),new ne(11553023),new ne(3836159),new ne(16732856)],g=(1+Math.sqrt(5))*.5,v=[];for(let W=0;W<5e3;W++){const Ve=1-(W+.5)/5e3*2,st=Math.sqrt(Math.max(0,1-Ve*Ve)),Y=2*Math.PI*W/g,le=Math.cos(Y)*st,K=Math.sin(Y)*st,Me=di(le,Ve,K,a,r);Me.nation==="forest"&&Me.forestFactor>.99&&Me.ashFactor<.01&&Me.waterFactor<.01&&Me.borderMountain<.12&&Me.cont>.06&&Me.biome!=="lake"&&Me.elev>5e-4&&v.push({dir:new b(le,Ve,K),elev:Me.elev,cont:Me.cont})}v.length===0&&v.push({dir:At[0].capDir.clone(),elev:.002,cont:.25});for(let W=0;W<c;W++){let Ve,st=.002;if(W<90){const K=At[W%5],Me=l(K.capDir),ce=H(W,7,13)*Math.PI*2,ae=Math.sqrt(H(W,3,19))*(.105/3.2);Ve=Me.normalDir.clone().addScaledVector(Me.e1,Math.cos(ce)*ae).addScaledVector(Me.e2,Math.sin(ce)*ae).normalize();const Q=di(Ve.x,Ve.y,Ve.z,a,r,3);if(Q.nation!=="forest"){const Ie=v[W%v.length];Ve.copy(Ie.dir),st=Ie.elev}else st=Q.elev}else{const K=v[(W*7+Math.floor(H(W,4,11)*19))%v.length],Me=l(K.dir),ce=H(W,2,17)*Math.PI*2,ae=H(W,9,5)*(.025/3.2);Ve=Me.normalDir.clone().addScaledVector(Me.e1,Math.cos(ce)*ae).addScaledVector(Me.e2,Math.sin(ce)*ae).normalize(),st=K.elev}const Y=t+st+(.005+H(W,5,11)*.19)*n;d.push({dir:Ve,baseAlt:Y,driftSpeed:.025+H(W,2,7)*.035,risePhase:H(W,9,4)*Math.PI*2});const le=f[W%f.length];u[W*3]=le.r,u[W*3+1]=le.g,u[W*3+2]=le.b}const m=new Et;m.setAttribute("position",new _t(h,3)),m.setAttribute("color",new _t(u,3));const p=new Ai({size:.72,map:zf,vertexColors:!0,transparent:!0,opacity:.16,depthWrite:!1,blending:Tn,sizeAttenuation:!0}),_=new Ei(m,p);_.frustumCulled=!1,i.add(_);const y=90,x=.0054*n,T=new Be({color:744312,emissive:55551,emissiveIntensity:.08,roughness:.42}),w=new Be({color:43200,emissive:61695,emissiveIntensity:.1,roughness:.38,side:It}),E=new Be({color:944852,emissive:2132223,emissiveIntensity:.1,roughness:.42,side:It});T.userData.animatedEmissive=!0,w.userData.animatedEmissive=!0,E.userData.animatedEmissive=!0;const A=new bt(md(x),T,y),M=new bt(vs(x*2.75,x*1.1,1),w,y),S=new bt(vs(x*2.75,x*1.1,-1),w,y),C=new bt(vs(x*1.65,x*.75,1),E,y),R=new bt(vs(x*1.65,x*.75,-1),E,y);[A,M,S,C,R].forEach(W=>{W.frustumCulled=!1,i.add(W)});const L=[l(At[0].capDir),l(At[1].capDir),l(At[2].capDir)],P=e?.archCenters||[];for(let W=0;W<P.length;W++)P[W]?.normal&&L.push(l(P[W].normal));const F=[];for(let W=0;W<y;W++){const Ve=W<25?0:W<55?1:2,st=W<60?L[Ve]:L[W%L.length],Y=(.032+H(W,4,1)*.088)*n/3.2,le=t+(.055+H(W,8,5)*.17)*n,K=(W%3===0?-1:1)*(.4+H(W,6,3)*.34);F.push({frame:st,orbitRad:Y,alt:le,phi0:H(W,4,2)*Math.PI*2,omega:K,phase:H(W,3,9)*Math.PI*2,scale:.78+H(W,5,6)*.55})}const z=4,k=.0145*n,U=new Be({color:10884618,emissive:16727056,emissiveIntensity:.1,roughness:.4}),N=new Be({color:14166542,emissive:16734744,emissiveIntensity:.12,roughness:.4,side:It});U.userData.animatedEmissive=!0,N.userData.animatedEmissive=!0;const X=new bt(md(k),U,z),oe=new bt(vs(k*3.1,k*1.25,1),N,z),te=new bt(vs(k*3.1,k*1.25,-1),N,z),we=new bt(vs(k*1.85,k*.85,1),N,z),j=new bt(vs(k*1.85,k*.85,-1),N,z);[X,oe,te,we,j].forEach(W=>{W.frustumCulled=!1,i.add(W)});const ue=[{frame:l(At[0].capDir),alt:t+.19*n,orbitRad:.11*n/3.2,phi0:.4,omega:.22,phase:0},{frame:l(At[1].capDir),alt:t+.26*n,orbitRad:.14*n/3.2,phi0:2.1,omega:-.2,phase:1.5},{frame:l(At[2].capDir),alt:t+.21*n,orbitRad:.12*n/3.2,phi0:3.9,omega:.21,phase:2.7},{frame:l(At[3].capDir),alt:t+.18*n,orbitRad:.1*n/3.2,phi0:5.1,omega:-.23,phase:.9}],ge=48,pe=.0048*n,{bodyGeo:ee,frontLegsGeo:fe,backLegsGeo:me}=s1(pe),Ae=new Be({color:3682900,emissive:1990808,emissiveIntensity:0,roughness:.68}),ve=new Be({color:2499642,roughness:.75});Ae.userData.animatedEmissive=!0;const Z=new bt(ee,Ae,ge),B=new bt(fe,ve,ge),et=new bt(me,ve,ge);[Z,B,et].forEach(W=>{W.frustumCulled=!1,i.add(W)});const _e=v.filter(W=>W.cont>.08),We=_e.length>=6?_e:v,Le=[],rt=new b;for(let W=0;W<6;W++){let Ve=null;const st=(.015+W%3*.004)/3.2,Y=Math.floor(W/6*We.length)%We.length;for(let le=0;le<We.length;le++){const K=We[(Y+le*7)%We.length],Me=l(K.dir);let ce=!0;for(let ae=0;ae<8;ae++){const Q=ae/8*Math.PI*2;rt.copy(Me.normalDir).addScaledVector(Me.e1,Math.cos(Q)*st*1.3).addScaledVector(Me.e2,Math.sin(Q)*st*1.3).normalize();const Ie=di(rt.x,rt.y,rt.z,a,r,3);if(Ie.nation!=="forest"||Ie.ashFactor>.04||Ie.biome==="lake"){ce=!1;break}}if(ce){Ve=Me;break}}Le.push({...Ve||l(At[0].capDir),radOffset:st,speed:(W%2===0?1:-1)*(.14+W%3*.02)})}const Xe=[];for(let W=0;W<ge;W++){const Ve=Le[W%Le.length],st=Math.floor(W/Le.length);Xe.push({herd:Ve,offsetAng:st*.78+H(W,2,7)*.35,radialFactor:.52+H(W,5,3)*.65,phase:H(W,9,1)*Math.PI*2,scale:.85+H(W,4,8)*.38})}const O=240,D=.0038*n,{bellGeo:ie,tentGeo:xe}=o1(D),re=new Be({color:16047359,emissive:12735743,emissiveIntensity:.12,transparent:!0,opacity:.35,roughness:.25,depthWrite:!1,blending:Tn,side:It}),he=new fn({color:new ne(.85,.75,1.05),transparent:!0,opacity:.28,depthWrite:!1,blending:Tn});re.userData.animatedEmissive=!0,he.userData.animatedEmissive=!0;const De=new bt(ie,re,O),be=new bt(xe,he,O);De.frustumCulled=!1,be.frustumCulled=!1,i.add(De,be);const Ne=[];for(let W=0;W<O;W++){let Ve,st,Y;if(W<75){const le=W<45?At[3]:At[0];Ve=l(le.capDir);const K=H(W,3,15)*Math.PI*2,Me=Math.sqrt(H(W,6,11))*(.075/3.2);st=Ve.normalDir.clone().addScaledVector(Ve.e1,Math.cos(K)*Me).addScaledVector(Ve.e2,Math.sin(K)*Me).normalize(),Y=_r(st.x,st.y,st.z,0,o)}else{const le=v[(W*11+Math.floor(H(W,2,13)*13))%v.length];st=le.dir,Ve=l(st),Y=le.elev}Ne.push({frame:Ve,alt:t+Y+(.015+H(W,9,7)*.068)*n,phase:H(W,2,5)*Math.PI*2,scale:.72+H(W,8,3)*.78})}const pt=At[6],Ee=l(pt.capDir),Ue=[];for(let W=0;W<1200;W++){const Ve=H(W,11,29)*Math.PI*2,st=Math.sqrt(H(W,17,7))*(.14/3.2),Y=Ee.normalDir.clone().addScaledVector(Ee.e1,Math.cos(Ve)*st).addScaledVector(Ee.e2,Math.sin(Ve)*st).normalize(),le=di(Y.x,Y.y,Y.z,a,r,3);le.nation==="water"&&le.waterFactor>.92&&le.elev<-.045&&Ue.push({dir:Y,elev:le.elev})}Ue.length===0&&Ue.push({dir:Ee.normalDir.clone(),elev:-.095});const Qe=5,ct=.0145*n,{bodyGeo:ze,glowGeo:vt}=a1(ct),nt=new Be({color:2508894,roughness:.42,metalness:.14}),ft=new Be({color:5826815,emissive:61695,emissiveIntensity:.06,roughness:.3});ft.userData.animatedEmissive=!0;const V=new bt(ze,nt,Qe),Pe=new bt(vt,ft,Qe);V.frustumCulled=!1,Pe.frustumCulled=!1,i.add(V,Pe);const de=[];for(let W=0;W<Qe;W++){const Ve=Ue[Math.floor(W/Qe*Ue.length)%Ue.length];de.push({frame:l(Ve.dir),orbitRad:(.055+H(W,3,19)*.065)/3.2,depthRatio:.45+H(W,8,13)*.25,phi0:H(W,5,23)*Math.PI*2,omega:(W%2===0?1:-1)*(.11+H(W,2,17)*.06),phase:H(W,7,11)*Math.PI*2,scale:.85+H(W,9,4)*.42})}const ye=24,Fe=.0056*n,{bodyGeo:ke,flipperGeo:Ze}=r1(Fe),Ot=new Be({color:1465976,emissive:51455,emissiveIntensity:.06,roughness:.35}),kt=new Be({color:2132126,emissive:2424800,emissiveIntensity:.06,roughness:.38});Ot.userData.animatedEmissive=!0,kt.userData.animatedEmissive=!0;const gt=new bt(ke,Ot,ye),dn=new bt(Ze,kt,ye);gt.frustumCulled=!1,dn.frustumCulled=!1,i.add(gt,dn);const ln=[];for(let W=0;W<ye;W++){const Ve=Ue[(W*19+3)%Ue.length];ln.push({frame:l(Ve.dir),orbitRad:(.025+H(W,4,29)*.038)/3.2,phi0:H(W,12,5)*Math.PI*2,omega:(W%2===0?1:-1)*(.28+H(W,6,17)*.14),phase:H(W,8,21)*Math.PI*2,scale:.78+H(W,3,14)*.48})}const _n=220,Pn=6,kn=.002*n,it=l1(kn),Pt=new Be({color:16777215,emissive:3201279,emissiveIntensity:.08,roughness:.28});Pt.userData.animatedEmissive=!0;const xn=new bt(it,Pt,_n);xn.name="Pandora_Reef_Fish_Schools",xn.frustumCulled=!1,xn.castShadow=!1,xn.receiveShadow=!1;const Bn=[new ne(2683647),new ne(16757816),new ne(16735912),new ne(6619064),new ne(6728447)];for(let W=0;W<_n;W++)xn.setColorAt(W,Bn[Math.floor(H(W,15,3)*Bn.length)%Bn.length]);xn.instanceColor&&(xn.instanceColor.needsUpdate=!0),i.add(xn);const Rt=[];for(let W=0;W<Pn;W++){const Ve=Ue[(W*47+7)%Ue.length];Rt.push({frame:l(Ve.dir),orbitRad:(.022+H(W,9,13)*.035)/3.2,omega:(W%2===0?1:-1)*(.22+H(W,2,19)*.12),phi0:H(W,6,31)*Math.PI*2,phase:H(W,14,7)*Math.PI*2,centerDir:new b,centerAlt:t-.035,aheadDir:new b,tangentForward:new b,tangentRight:new b})}const nn=[];for(let W=0;W<_n;W++)nn.push({schoolIdx:W%Pn,localAng:H(W,4,17)*Math.PI*2,localRad:(.0025+H(W,9,23)*.011)*(.5+.5*(W%3))/3.2,vertOff:(H(W,13,5)-.5)*.018,phase:H(W,21,11)*Math.PI*2,scale:.72+H(W,7,19)*.65});const Ut=new b,Jt=new b,Zn=new b,zn=new b,St=new b,I=new b,J=new b,q=new ot,se=new ot,$=new ut,Re=new ut,Ce=new b(1,0,0),Ye=new b(0,0,1),He=new b,ht=new b(0,1,0);new b;const mt=(W,Ve,st,Y,le,K,Me,ce,ae,Q,Ie,Je)=>{St.copy(Me).normalize(),I.copy(ce).sub(Me),I.lengthSq()<1e-12&&I.set(1,0,0),I.normalize(),J.crossVectors(St,I).normalize(),I.crossVectors(J,St).normalize(),q.makeBasis(J,St,I),Re.setFromAxisAngle(Ye,Je),se.makeRotationFromQuaternion(Re),q.multiply(se),q.setPosition(Me),He.setScalar(Ie),q.scale(He),Ve.setMatrixAt(W,q),$.setFromAxisAngle(Ye,ae),se.makeRotationFromQuaternion($),se.premultiply(q),st.setMatrixAt(W,se),$.setFromAxisAngle(Ye,-ae),se.makeRotationFromQuaternion($),se.premultiply(q),Y.setMatrixAt(W,se),$.setFromAxisAngle(Ye,Q),se.makeRotationFromQuaternion($),se.setPosition(0,0,-x*.72),se.premultiply(q),le.setMatrixAt(W,se),$.setFromAxisAngle(Ye,-Q),se.makeRotationFromQuaternion($),se.setPosition(0,0,-x*.72),se.premultiply(q),K.setMatrixAt(W,se)},$e=(W,Ve,st)=>{const Y=W.phi0+W.omega*Ve,le=W.orbitRad+Math.sin(Ve*.8+W.phase)*(.008/3.2)*n,K=W.alt+Math.sin(Ve*1.15+W.phase)*.006*n;st.copy(W.frame.normalDir).addScaledVector(W.frame.e1,Math.cos(Y)*le).addScaledVector(W.frame.e2,Math.sin(Y)*le).normalize().multiplyScalar(K)};return{group:i,update(W,Ve=1,st=.5,Y=0){if(!i.parent||!i.parent.visible)return;const le=G.smoothstep(-st,-.1,.04);e?.updateDayNight&&e.updateDayNight(st,W,Y);const K=m.attributes.position;for(let ae=0;ae<c;ae++){const Q=d[ae],Ie=(Q.risePhase+W*Q.driftSpeed*3)%1*.015,Je=Q.baseAlt+Ie,lt=Math.sin(W*.65+Q.risePhase)*.0022;K.setXYZ(ae,Q.dir.x*Je+lt,Q.dir.y*Je,Q.dir.z*Je+lt)}K.needsUpdate=!0,p.opacity=G.lerp(.14,.92,le);for(let ae=0;ae<y;ae++){const Q=F[ae];$e(Q,W,Ut),$e(Q,W+.05,Jt);const Ie=Math.sin(W*.65+Q.phase)>-.2?.46:.1,Je=Math.sin(W*4.9+Q.phase)*Ie,lt=Math.sin(W*4.9+Q.phase-.85)*Ie*.82,jt=Q.omega>0?-.32:.32;mt(ae,A,M,S,C,R,Ut,Jt,Je,lt,Q.scale,jt)}A.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,T.emissiveIntensity=G.lerp(.06,1.45,le),w.emissiveIntensity=G.lerp(.08,1.85,le),E.emissiveIntensity=G.lerp(.08,1.65,le);for(let ae=0;ae<z;ae++){const Q=ue[ae];$e(Q,W,Ut),$e(Q,W+.08,Jt);const Ie=Math.sin(W*2.5+Q.phase)*.42,Je=Math.sin(W*2.5+Q.phase-.9)*.35;mt(ae,X,oe,te,we,j,Ut,Jt,Ie,Je,1,Q.omega>0?-.25:.25)}X.instanceMatrix.needsUpdate=!0,oe.instanceMatrix.needsUpdate=!0,te.instanceMatrix.needsUpdate=!0,we.instanceMatrix.needsUpdate=!0,j.instanceMatrix.needsUpdate=!0,U.emissiveIntensity=G.lerp(.08,1.9,le),N.emissiveIntensity=G.lerp(.1,2.15,le);const Me=(ae,Q,Ie,Je)=>{const lt=ae.offsetAng+ae.herd.speed*Q,jt=ae.herd.radOffset*ae.radialFactor;Je.copy(ae.herd.normalDir).addScaledVector(ae.herd.e1,Math.cos(lt)*jt).addScaledVector(ae.herd.e2,Math.sin(lt)*jt).normalize();const cn=_r(Je.x,Je.y,Je.z,0,o);Ie.copy(Je).multiplyScalar(t+cn)};for(let ae=0;ae<ge;ae++){const Q=Xe[ae];Me(Q,W,Ut,St),Me(Q,W+.08,Jt,Zn),I.copy(Jt).sub(Ut).normalize(),J.crossVectors(St,I).normalize(),I.crossVectors(J,St).normalize(),q.makeBasis(J,St,I),q.setPosition(Ut),He.setScalar(Q.scale),q.scale(He),Z.setMatrixAt(ae,q);const Ie=Math.sin(W*4.5+Q.phase)*.42;$.setFromAxisAngle(Ce,Ie),se.makeRotationFromQuaternion($),se.setPosition(0,pe*.72,pe*.52),se.premultiply(q),B.setMatrixAt(ae,se),$.setFromAxisAngle(Ce,-Ie),se.makeRotationFromQuaternion($),se.setPosition(0,pe*.72,-pe*.56),se.premultiply(q),et.setMatrixAt(ae,se)}Z.instanceMatrix.needsUpdate=!0,B.instanceMatrix.needsUpdate=!0,et.instanceMatrix.needsUpdate=!0,Ae.emissiveIntensity=G.lerp(0,.95,le);for(let ae=0;ae<O;ae++){const Q=Ne[ae],Ie=Math.sin(W*1.15+Q.phase)*.0045*n,Je=Math.cos(W*.45+Q.phase)*(.004/3.2)*n,lt=Math.sin(W*.35+Q.phase)*(.004/3.2)*n;St.copy(Q.frame.normalDir).addScaledVector(Q.frame.e1,Je).addScaledVector(Q.frame.e2,lt).normalize(),Ut.copy(St).multiplyScalar(Q.alt+Ie);const jt=Math.sin(W*2.8+Q.phase),cn=1+jt*.16;$.setFromUnitVectors(ht,St),He.set(Q.scale*cn,Q.scale/Math.sqrt(cn),Q.scale*cn),q.compose(Ut,$,He),De.setMatrixAt(ae,q),He.set(Q.scale,Q.scale*(1+jt*.08),Q.scale),q.compose(Ut,$,He),be.setMatrixAt(ae,q)}De.instanceMatrix.needsUpdate=!0,be.instanceMatrix.needsUpdate=!0,re.opacity=G.lerp(.32,.82,le),re.emissiveIntensity=G.lerp(.08,2.35,le),he.opacity=G.lerp(.24,.65,le),he.color.setRGB(G.lerp(.85,1.4,le),G.lerp(.88,.85,le),G.lerp(.96,2.2,le));const ce=(ae,Q,Ie,Je,lt,jt,cn,Ft,Sn,at)=>{const Ln=Ie+Je*Ft;at.copy(ae.normalDir).addScaledVector(ae.e1,Math.cos(Ln)*Q).addScaledVector(ae.e2,Math.sin(Ln)*Q).normalize();const li=_r(at.x,at.y,at.z,0,o),Ht=Math.min(cn-.004,li+jt),Ps=G.lerp(Ht,cn,lt);Sn.copy(at).multiplyScalar(t+Ps)};for(let ae=0;ae<Qe;ae++){const Q=de[ae];ce(Q.frame,Q.orbitRad,Q.phi0,Q.omega,Q.depthRatio,.015,-.016,W,Ut,St),ce(Q.frame,Q.orbitRad,Q.phi0,Q.omega,Q.depthRatio,.015,-.016,W+.14,Jt,zn),I.copy(Jt).sub(Ut),I.lengthSq()<1e-12&&I.set(1,0,0),I.normalize(),J.crossVectors(St,I).normalize(),I.crossVectors(J,St).normalize();const Ie=Math.sin(W*1.15+Q.phase)*.06;$.setFromAxisAngle(Ce,Ie),q.makeBasis(J,St,I),q.setPosition(Ut),He.setScalar(Q.scale),q.scale(He),se.makeRotationFromQuaternion($),q.multiply(se),V.setMatrixAt(ae,q),Pe.setMatrixAt(ae,q)}V.instanceMatrix.needsUpdate=!0,Pe.instanceMatrix.needsUpdate=!0,ft.emissiveIntensity=G.lerp(.06,1.85,le);for(let ae=0;ae<ye;ae++){const Q=ln[ae],Ie=.55+Math.sin(W*.75+Q.phase)*.25;ce(Q.frame,Q.orbitRad,Q.phi0,Q.omega,Ie,.008,-.01,W,Ut,St),ce(Q.frame,Q.orbitRad,Q.phi0,Q.omega,Ie,.008,-.01,W+.07,Jt,zn),I.copy(Jt).sub(Ut),I.lengthSq()<1e-12&&I.set(1,0,0),I.normalize(),J.crossVectors(St,I).normalize(),I.crossVectors(J,St).normalize(),q.makeBasis(J,St,I),q.setPosition(Ut),He.setScalar(Q.scale),q.scale(He),gt.setMatrixAt(ae,q);const Je=Math.sin(W*5.4+Q.phase)*.42;$.setFromAxisAngle(Ye,Je),se.makeRotationFromQuaternion($),se.premultiply(q),dn.setMatrixAt(ae,se)}gt.instanceMatrix.needsUpdate=!0,dn.instanceMatrix.needsUpdate=!0,Ot.emissiveIntensity=G.lerp(.06,1.35,le),kt.emissiveIntensity=G.lerp(.08,1.75,le);for(let ae=0;ae<Pn;ae++){const Q=Rt[ae],Ie=Q.phi0+Q.omega*W,Je=Q.phi0+Q.omega*(W+.06);Q.centerDir.copy(Q.frame.normalDir).addScaledVector(Q.frame.e1,Math.cos(Ie)*Q.orbitRad).addScaledVector(Q.frame.e2,Math.sin(Ie)*Q.orbitRad).normalize(),Q.aheadDir.copy(Q.frame.normalDir).addScaledVector(Q.frame.e1,Math.cos(Je)*Q.orbitRad).addScaledVector(Q.frame.e2,Math.sin(Je)*Q.orbitRad).normalize();const lt=_r(Q.centerDir.x,Q.centerDir.y,Q.centerDir.z,0,o),jt=Math.min(-.022,lt+.01),cn=G.lerp(jt,-.018,.48+.25*Math.sin(W*.65+Q.phase));Q.centerAlt=t+cn,Q.tangentForward.copy(Q.aheadDir).sub(Q.centerDir),Q.tangentForward.lengthSq()<1e-12&&Q.tangentForward.set(1,0,0),Q.tangentForward.normalize(),Q.tangentRight.crossVectors(Q.centerDir,Q.tangentForward).normalize(),Q.tangentForward.crossVectors(Q.tangentRight,Q.centerDir).normalize()}for(let ae=0;ae<_n;ae++){const Q=nn[ae],Ie=Rt[Q.schoolIdx],Je=Q.localAng+W*1.15,lt=Math.sin(W*3.4+Q.phase)*.0024;St.copy(Ie.centerDir).addScaledVector(Ie.tangentRight,Math.cos(Je)*Q.localRad).addScaledVector(Ie.tangentForward,Math.sin(Je)*Q.localRad).normalize();const jt=Math.min(t-.008,Ie.centerAlt+Q.vertOff+lt);Ut.copy(St).multiplyScalar(jt);const cn=Math.sin(W*8.5+Q.phase)*.14;$.setFromAxisAngle(Ce,0),I.copy(Ie.tangentForward).addScaledVector(Ie.tangentRight,cn).normalize(),J.crossVectors(St,I).normalize(),I.crossVectors(J,St).normalize(),q.makeBasis(J,St,I),q.setPosition(Ut),He.setScalar(Q.scale),q.scale(He),xn.setMatrixAt(ae,q)}xn.instanceMatrix.needsUpdate=!0,Pt.emissiveIntensity=G.lerp(.08,1.65,le)}}}const En=157.5,Ri=4.8,Mr=62,xs=.72,Zl=1/3.5,h1=3,gd=.88,u1=35e3,d1=36e3,f1=3500,p1=1200,vd=G.degToRad(68),yr=new b(0,Math.cos(vd),Math.sin(vd)).normalize(),m1={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:55.2,eccentricity:.045,orbitOmega:.0028,localRadius:6.336,groundFloorAlt:1.65,kmScale:27840,rotationSpeed:.014,axialOmega:.015,axialTiltX:G.degToRad(6),axialTiltZ:G.degToRad(21),initialSpinAngle:-.95,capLocalDir:yr,landable:!0,hasProceduralWorld:!0,fogColor:5944012,maxFogDensity:.0036,skyColor:2523838,particleColor:10417919,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new b(0,6.336*2.25,6.336*.85),lowOrbitLookAt:new b(0,6.336,0),highCloudOffset:new b(-.08,6.336*1.48,6.336*.36),aerialOffset:new b(-.025,6.336+.072,.095),aerialLookAt:new b(.028,6.336+.048,-.022),sunColor:16773332,sunIntensity:2.85,ambientColor:2377264,ambientIntensity:.92,hemiSkyColor:6469887,hemiGroundColor:1985064,hemiIntensity:1.45,localLightColor:61695,localBounceColor:12073215,bloomStrength:.54,skyDome:{zenith:1866720,mid:5420780,horizon:9365738,sunGlow:16773320,zenithAlpha:.92,starFloor:0}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:88.8,eccentricity:.035,orbitOmega:.00137,localRadius:6.816,groundFloorAlt:.32,minSpeed:3.2,glbLocalScale:.0038*Zl*3.8,kmScale:29760,rotationSpeed:.011,axialOmega:.012,axialTiltX:G.degToRad(-5),axialTiltZ:G.degToRad(18.5),initialSpinAngle:-.62,capLocalDir:yr,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0044,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new b(0,6.816*2.25,6.816*.85),lowOrbitLookAt:new b(0,6.816,0),highCloudOffset:new b(-.06,6.816*1.48,6.816*.36),aerialOffset:new b(-.012,6.816+.145,.195),aerialLookAt:new b(.005,6.816+.175,-.055),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.48,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:127.2,eccentricity:.05,orbitOmega:797e-6,localRadius:7.296,groundFloorAlt:.95,glbLocalScale:.004*Zl,kmScale:32640,rotationSpeed:.01,axialOmega:.011,axialTiltX:G.degToRad(8),axialTiltZ:G.degToRad(-23.5),initialSpinAngle:-1.18,capLocalDir:yr,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new b(-.32,7.296*2.25,7.296*.85),lowOrbitLookAt:new b(0,7.296,0),highCloudOffset:new b(-.18,7.296*1.48,7.296*.36),aerialOffset:new b(-.025,7.296+.08,.092),aerialLookAt:new b(.003,7.296+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:170.4,eccentricity:.04,orbitOmega:516e-6,localRadius:7.776,groundFloorAlt:.95,glbLocalScale:.0039*Zl,kmScale:36e3,rotationSpeed:.009,axialOmega:.01,axialTiltX:G.degToRad(-6),axialTiltZ:G.degToRad(24),initialSpinAngle:-.88,capLocalDir:yr,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new b(0,7.776*2.25,7.776*.85),lowOrbitLookAt:new b(0,7.776,0),highCloudOffset:new b(.08,7.776*1.48,7.776*.36),aerialOffset:new b(0,7.776+.042,.102),aerialLookAt:new b(0,7.776+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:220.8,eccentricity:.06,orbitOmega:352e-6,localRadius:8.88,groundFloorAlt:2,kmScale:56640,rotationSpeed:.05,axialOmega:.024,axialTiltX:G.degToRad(7),axialTiltZ:G.degToRad(26),initialSpinAngle:0,landable:!1}};class g1{constructor({scene:e,camera:t,renderer:n,controls:i,starfield:o,cockpitParticles:a,bloomPass:r,ssaoPass:l,radialBlurPass:c,onStatusUpdate:h}){this.scene=e,this.camera=t,this.renderer=n||null,this.controls=i,this.starfield=o,this.cockpitParticles=a,this.bloomPass=r,this.ssaoPass=l||null,this.radialBlurPass=c||null,this.onStatusUpdate=h||(()=>{}),this.dracoLoader=new KM,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new pM,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Nt,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(En),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.lastP2DistrictId="city_center",this.lastP2DistrictName="City Center · Corpo Plaza",this.elapsedTime=0,this.simulationTime=0,this.timeScales=[1,10,60],this.timeScaleIndex=0,this.timeScale=1,this._tmpInvQuat=new ut,this._tmpCapInvQuat=new ut,this._tmpLocalDir=new b,this._tmpRadial=new b,this._tmpSunDir=new b,this._tmpPlanetToSun=new b,this._tmpUp=new b(0,1,0),this._tmpStationPos=new b,this._tmpColorA=new ne,this._tmpColorB=new ne,this._tmpColorC=new ne,this._tmpSkyColor=new ne,this._tmpFogColor=new ne,this._p2Atmo={fogDay:new ne,fogNight:new ne,fogDusk:new ne,hemiSky:new ne,hemiGround:new ne,ambient:new ne,localLight:new ne,localBounce:new ne,fogDensity:.0044,bloomCap:.48},this._identityQuat=new ut,this._tmpCamFwd=new b,this._tmpRayOccl=new b,this._tmpLocalCam=new b,this._tmpIblZenith=new ne(329746),this._tmpIblHorizon=new ne(1319482),this._tmpIblGround=new ne(263692),this._tmpIblSun=new ne(16771264),this.skyDome=_y(),this.scene.add(this.skyDome);const u=ty();this.machConeMesh=u.mesh,this.machConeUniforms=u.uniforms,this.camera.add(this.machConeMesh),this.solarLensflare=null,this.solarLensflareElements=[],this._setupLighting(),this._initIblPipeline()}_initIblPipeline(){if(!this.renderer||typeof this.renderer.getContext!="function"){this.pmremGenerator=null;return}this.pmremGenerator=new Vc(this.renderer),this.pmremGenerator.compileEquirectangularShader(),this.envRenderTarget=null,this._lastIblTime=-99,this._lastIblPlanetId=null,this._lastIblSunElev=-9,this._lastIblAltRatio=-9,this.iblScene=new dh,this.iblUniforms={uZenithColor:{value:new ne(1594024)},uHorizonColor:{value:new ne(7914728)},uGroundColor:{value:new ne(1583132)},uSunDir:{value:new b(.4,.7,.3)},uSunColor:{value:new ne(2.4,2.1,1.6)}};const e=new hn(20,24,16),t=new rn({uniforms:this.iblUniforms,vertexShader:`
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
      `,side:On,depthWrite:!1});this.iblScene.add(new Ge(e,t))}_updateDynamicIbl({planetId:e,zenithColor:t,horizonColor:n,groundColor:i,sunDir:o,sunColor:a,sunElev:r,altRatio:l,intensity:c}){if(!this.pmremGenerator||!this.iblScene)return;this.scene.environmentIntensity=c;const h=this.elapsedTime-this._lastIblTime;if(!(e!==this._lastIblPlanetId||Math.abs(r-this._lastIblSunElev)>.06||Math.abs(l-this._lastIblAltRatio)>.08||h>.45))return;this.iblUniforms.uZenithColor.value.copy(t),this.iblUniforms.uHorizonColor.value.copy(n),this.iblUniforms.uGroundColor.value.copy(i),this.iblUniforms.uSunDir.value.copy(o).normalize(),this.iblUniforms.uSunColor.value.copy(a).multiplyScalar(Math.max(.25,c*2.2));const d=this.envRenderTarget;this.envRenderTarget=this.pmremGenerator.fromScene(this.iblScene,.04),this.scene.environment=this.envRenderTarget.texture,d&&d.dispose(),this._lastIblTime=this.elapsedTime,this._lastIblPlanetId=e,this._lastIblSunElev=r,this._lastIblAltRatio=l}_setupLighting(){this.ambientLight=new Tf(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new k_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new va(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new xh(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.planetaryDirLight.castShadow=!1,this.planetaryDirLight.shadow.mapSize.set(2048,2048),this.planetaryDirLight.shadow.camera.near=4,this.planetaryDirLight.shadow.camera.far=520;const e=180;this.planetaryDirLight.shadow.camera.left=-e,this.planetaryDirLight.shadow.camera.right=e,this.planetaryDirLight.shadow.camera.top=e,this.planetaryDirLight.shadow.camera.bottom=-e,this.planetaryDirLight.shadow.bias=-4e-4,this.planetaryDirLight.shadow.normalBias=.03,this.scene.add(this.planetaryDirLight),this.scene.add(this.planetaryDirLight.target),this.localAtmoLight=new va(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new va(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(2.72),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new b(3.4,2.35,.72)},uHotColor:{value:new b(4,3.1,1.45)},uLimbColor:{value:new b(2.2,.85,.14)}};const n=new rn({uniforms:this.sunPlasmaUniforms,vertexShader:`
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
      `,fog:!1});this.sunNode.traverse(v=>{v.isMesh&&(v.material=n)});const i=new rn({uniforms:{uColor:{value:new b(2.8,1.35,.35)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,fog:!1,blending:Tn,side:On}),o=new Ge(new hn(2.52*3.2,48,48),i);o.name="Solar_Tight_Corona";const a=document.createElement("canvas");a.width=512,a.height=512;const r=a.getContext("2d");r.clearRect(0,0,512,512);const l=256,c=256,h=r.createRadialGradient(l,c,4,l,c,130);h.addColorStop(0,"rgba(255, 245, 205, 0.72)"),h.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),h.addColorStop(1,"rgba(255, 140, 40, 0.0)"),r.fillStyle=h,r.beginPath(),r.arc(l,c,130,0,Math.PI*2),r.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((v,m)=>{r.save(),r.translate(l,c),r.rotate(v+.18);const p=m===0?242:210,_=r.createLinearGradient(-p,0,p,0);_.addColorStop(0,"rgba(255, 210, 120, 0.0)"),_.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),_.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),_.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),_.addColorStop(1,"rgba(255, 210, 120, 0.0)"),r.fillStyle=_,r.beginPath(),r.ellipse(0,0,p,3.2,0,0,Math.PI*2),r.fill(),r.restore()});const d=new pn(a);d.colorSpace=Zt;const f=new _f({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:Tn}),g=new i_(f);g.name="Solar_Diffraction_Rays",g.scale.set(10.8*3.2,10.8*3.2,1),t&&(t.add(o),t.add(g)),this._createSolarLensflare()}_createSolarLensflare(){if(this.solarLensflare||typeof document>"u")return;const e=(a,r)=>{const l=document.createElement("canvas");l.width=a,l.height=a;const c=l.getContext("2d"),h=a*.5;if(r){const d=c.createRadialGradient(h,h,2,h,h,h);d.addColorStop(0,"rgba(255, 252, 240, 0.95)"),d.addColorStop(.18,"rgba(255, 232, 175, 0.52)"),d.addColorStop(.45,"rgba(255, 180, 95, 0.14)"),d.addColorStop(1,"rgba(255, 140, 40, 0.0)"),c.fillStyle=d,c.fillRect(0,0,a,a);const f=c.createLinearGradient(0,h,a,h);f.addColorStop(0,"rgba(180, 225, 255, 0.0)"),f.addColorStop(.5,"rgba(255, 240, 200, 0.42)"),f.addColorStop(1,"rgba(180, 225, 255, 0.0)"),c.fillStyle=f,c.beginPath(),c.ellipse(h,h,h*.96,Math.max(2,a*.025),0,0,Math.PI*2),c.fill()}else{const d=c.createRadialGradient(h,h,h*.45,h,h,h*.96);d.addColorStop(0,"rgba(255, 255, 255, 0.0)"),d.addColorStop(.58,"rgba(165, 215, 255, 0.22)"),d.addColorStop(.82,"rgba(255, 210, 150, 0.28)"),d.addColorStop(1,"rgba(255, 255, 255, 0.0)"),c.fillStyle=d,c.beginPath(),c.arc(h,h,h*.96,0,Math.PI*2),c.fill()}const u=new pn(l);return u.colorSpace=Zt,u},t=e(256,!0),n=e(128,!1),i=new wa;i.name="Central_Solar_Lensflare",i.userData.skipSSAO=!0;const o=[{tex:t,size:320,dist:0,hex:16773328},{tex:n,size:78,dist:.34,hex:16769192},{tex:n,size:54,dist:.58,hex:9097471},{tex:n,size:96,dist:.88,hex:16758904}];this.solarLensflareElements=o.map(a=>{const r=new ne(a.hex),l=new yh(a.tex,a.size,a.dist,r.clone());return l.baseColor=r,i.addElement(l),l}),i.position.set(0,0,0),this.scene.add(i),this.solarLensflare=i}setRenderer(e){this.renderer=e||null,this.pmremGenerator||this._initIblPipeline()}_hideAllReflectiveWaters(e=null){for(const[,t]of this.planetNodes)if(!(t===e||!t.reflectiveWaters))for(const n of t.reflectiveWaters)n.water&&(n.water.visible=!1)}_updateReflectiveWaters(e,t,n,i){if(!e||!e.reflectiveWaters||!e.reflectiveWaters.length)return;if(!t){for(const r of e.reflectiveWaters)r.water&&(r.water.visible=!1);return}e.surfaceCapGroup.updateMatrixWorld();let o=null,a=57600;for(const r of e.reflectiveWaters){if(!r.water)continue;if(r.isOceanSurface&&n>.06){r.water.visible=!1;continue}this._tmpStationPos.copy(r.centerLocal).applyMatrix4(e.surfaceCapGroup.matrixWorld);const l=this._tmpStationPos.distanceToSquared(this.camera.position);l<a&&(a=l,o=r)}for(const r of e.reflectiveWaters){if(!r.water)continue;const l=r===o;if(r.water.visible=l,l&&r.water.material?.uniforms){const c=r.water.material.uniforms;c.eye&&c.eye.value.copy(this.camera.position),c.sunDirection&&c.sunDirection.value.copy(i).normalize(),c.sunColor&&c.sunColor.value.copy(this.planetaryDirLight.color)}}}_updateSolarLensflare(e,t,n,i,o){if(!this.solarLensflare||!this.solarLensflareElements.length)return;const a=this.camera.position.lengthSq();if(a<25||t){this.solarLensflare.visible=!1;return}const r=Math.sqrt(a);this._tmpRayOccl.copy(this.camera.position).negate().multiplyScalar(1/r);let l=1;for(const[,c]of this.planetNodes){const h=this._tmpStationPos.copy(c.currWorldPos).sub(this.camera.position),u=h.dot(this._tmpRayOccl);if(u>0&&u<r){const d=Math.max(0,h.lengthSq()-u*u),f=c.config.localRadius*En;if(d<f*f){l=0;break}else if(d<f*f*1.08){const g=Math.sqrt(d)/f;l=Math.min(l,G.smoothstep(g,1,1.04))}}}if(e&&l>.01){const c=G.smoothstep(n,-.04,.08),h=G.lerp(1,.68,i);l*=c*h*(1-o)}if(l<=.01){this.solarLensflare.visible=!1;return}this.solarLensflare.visible=!0;for(const c of this.solarLensflareElements)c.color&&c.baseColor&&c.color.copy(c.baseColor).multiplyScalar(l)}cycleTimeScale(){return this.timeScaleIndex=(this.timeScaleIndex+1)%this.timeScales.length,this.timeScale=this.timeScales[this.timeScaleIndex],this.timeScale}syncCameraPostFlight(){if(this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position),this.camera.updateMatrixWorld(),Qc.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.ssaoPass&&this.ssaoPass.enabled&&this.ssaoPass.ssaoMaterial?.uniforms){const e=this.ssaoPass.ssaoMaterial.uniforms;e.cameraProjectionMatrix&&e.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),e.cameraInverseProjectionMatrix&&e.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse)}(this.localAtmoLight.intensity>.001||this.localBounceLight.intensity>.001)&&(this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,18),this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,-8))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,o)=>{this.gltfLoader.load(e,a=>i(a),void 0,a=>o(a))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const o=Array.isArray(i.material)?i.material:[i.material];for(const a of o)a&&a.emissiveIntensity!==void 0&&a.emissiveIntensity>3.2&&(a.emissiveIntensity=2.2+Math.log10(a.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){n.scale.multiplyScalar(Ri);const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(m1)){const o=t.getObjectByName(i.spinnerName),a=t.getObjectByName(i.rootName),r=t.getObjectByName(i.bodyName);if(!a)continue;const c=new ri().setFromQuaternion(o?o.quaternion:new ut,"YXZ").y||0,h=i.semiMajorAxis,u=i.eccentricity||.04,d=h*(1-u*u)/(1+u*Math.cos(c));a.position.set(d,0,0);const f=[];let g=0;const v={P1_Moon_A_Ghomrassen:"Luna Ghomrassen",P1_Moon_B_Guermessa:"Luna Guermessa",P2_Moon_NeoLuna:"Neo-Luna",P3_Moon_A_Argent:"Luna Argent",P3_Moon_B_Crimson:"Luna Crimson",P4_Moon_Centax_1:"Centax I",P4_Moon_Centax_2:"Centax II",P4_Moon_Centax_3:"Centax III",P5_Moon_1_InnerShepherd:"Pastora Interior",P5_Moon_2_Polyphemus_Minor:"Polyphemus Minor",P5_Moon_3_Eywa_Outpost:"Puesto Eywa"};this.orbitalGroup.updateMatrixWorld(!0),a.children.forEach(A=>{if(A.name.includes("Moon")&&!A.name.endsWith("_Orbit")){A.scale.multiplyScalar(2.6);let M=.08;A.traverse(C=>{if(C.isMesh&&C.material&&(C.material.fog=!1,C.geometry)){C.geometry.boundingSphere||C.geometry.computeBoundingSphere();const R=(C.geometry.boundingSphere?.radius||.5)*Math.max(C.scale.x,C.scale.y,C.scale.z);R>M&&(M=R)}});const S=2.35+g*.48;if(n==="p1"){const C=i.localRadius*(2.35+g*.62),R=C*(.16+g*.08),L=g===0?-1.85:-.78;A.position.set(Math.cos(L)*C,R,Math.sin(L)*C),a.updateMatrixWorld(!0);const P=new b;A.getWorldPosition(P),f.push({index:g,rawName:A.name,name:v[A.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:A,moonRadius:Math.max(20,M*Math.max(A.scale.x,1)*En),baseRadius:C,angle:L,yOffset:R,speed:.014+g*.008,prevWorldPos:P.clone(),currWorldPos:P.clone(),deltaPos:new b})}else{A.position.multiplyScalar(Ri),A.position.length()<i.localRadius*S&&A.position.normalize().multiplyScalar(i.localRadius*S),a.updateMatrixWorld(!0);const C=new b;A.getWorldPosition(C);const R=Math.max(i.localRadius*S*.85,Math.hypot(A.position.x,A.position.z));f.push({index:g,rawName:A.name,name:v[A.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:A,moonRadius:Math.max(20,M*Math.max(A.scale.x,1)*En),baseRadius:R,angle:Math.atan2(A.position.z,A.position.x),yOffset:A.position.y,speed:.06+g%3*.03,prevWorldPos:C.clone(),currWorldPos:C.clone(),deltaPos:new b})}g++}});const m=new Nt;m.name=`${i.id}_Axial_Tilt`,m.rotation.order="XZY",m.rotation.x=i.axialTiltX||0,m.rotation.z=i.axialTiltZ||0,a.add(m);const p=new Nt;p.name=`${i.id}_Axial_Spin`,p.rotation.y=i.initialSpinAngle||0,m.add(p);let _=null,y=null,x=null;if(i.landable){a.traverse(M=>{M!==a&&M.isMesh&&(M.name.includes("_Body")||M.name.includes("_Atmosphere")||M.name.includes("_Clouds")||M.name.includes("_DarkClouds")||/^Planet_01/i.test(M.name))&&(M.visible=!1)}),_=My(i,En),_.userBaseColors={sunlit:new ne(_.cloudDeckPalette.sunlit),ambient:new ne(_.cloudDeckPalette.ambient),horizon:new ne(_.cloudDeckPalette.horizon)},p.add(_.group),y=_.atmosphere,x=new Nt,x.name=`${i.id}_Cap_Frame`;const A=i.capLocalDir?i.capLocalDir.clone().normalize():new b(0,1,0);x.quaternion.setFromUnitVectors(new b(0,1,0),A),p.add(x)}else{const A=a.children.filter(M=>M!==m&&!M.name.includes("Moon")&&!M.name.includes("_Orbit"));for(const M of A)M.scale.multiplyScalar(Ri),p.add(M);y=Ff(i,i.localRadius,1.05),p.add(y)}const T=new Nt;T.name=`${i.id}_Atmosphere_Surface_Detail`,T.visible=!1,(x||p).add(T),this.orbitalGroup.updateMatrixWorld(!0);const w=new b;a.getWorldPosition(w);const E=new ut;p.getWorldQuaternion(E),this.planetNodes.set(n,{config:i,spinner:o,root:a,tiltGroup:m,spinGroup:p,capFrame:x,body:r,orbitalBundle:_,atmosphereShell:y,surfaceCapGroup:T,surfaceLoaded:!1,surfaceLoading:!1,surfaceStreaming:null,surfaceTerrainActivated:!1,lastActivatedThisFrame:0,animators:[],nightMaterials:[],orbitAngle:c,spinAngle:i.initialSpinAngle||0,prevWorldPos:w.clone(),currWorldPos:w.clone(),planetDeltaPos:new b,prevSpinWorldQuat:E.clone(),currSpinWorldQuat:E.clone(),spinQuatDelta:new ut,moonOrbits:f})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95*Ri,2.15*Ri,2.35*Ri),this.controls.setPose(new b(0,5600,19800),new b(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded)return t?.surfacePromise||null;if(t.surfacePromise)return t.surfacePromise;t.surfaceLoading=!0;const n=t.config;return t.surfacePromise=(async()=>{try{if(n.hasProceduralWorld){const o=Jy(n);t.surfaceCapGroup.add(o.group),t.pandoraWorld=o,o.terrainSplatUniforms&&(t.splatUniforms=[o.terrainSplatUniforms]),o.reflectiveWaters&&(t.reflectiveWaters=o.reflectiveWaters);const a=c1(n.localRadius,o);t.surfaceCapGroup.add(a.group),t.animators.push(a)}else if(n.surfaceUrl){const o=await this._loadGLB(n.surfaceUrl);if(by(o,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(o),o.userData?.splatUniforms?.length&&(t.splatUniforms=[...t.splatUniforms||[],...o.userData.splatUniforms]),n.id==="p2"){this._calibrateNightCityMaterials(o);const a=ly(n),r=a.group.getObjectByName("NC_7Districts_Coastal_Terrain");r&&(r.receiveShadow=!0);const l=a.group.getObjectByName("NC_Badlands_Desert_Roads");l&&(l.receiveShadow=!0),a.terrainSplatUniforms&&(t.splatUniforms=[...t.splatUniforms||[],a.terrainSplatUniforms]),a.bayWater&&(t.reflectiveWaters=[{water:a.bayWater,centerLocal:a.bayWater.position.clone(),isOceanSurface:!1}]),t.surfaceCapGroup.add(a.group),t.animators.push(a);const c=pd(n.id,n.localRadius,350);t.surfaceCapGroup.add(c.group),t.animators.push(c),t.animators.push(t1(o))}else if(n.id==="p4"){const a=yy(n,1400);t.surfaceCapGroup.add(a);const r=pd(n.id,n.localRadius,350);t.surfaceCapGroup.add(r.group),t.animators.push(r),t.animators.push(n1(o))}else if(n.id==="p3"){const a=i1(n.localRadius);t.surfaceCapGroup.add(a.group),t.animators.push(a);const r=new $s(n.localRadius*.038,32),l=new Qr(r,{textureWidth:256,textureHeight:256,waterNormals:tl(),sunDirection:new b(.4,.7,.3).normalize(),sunColor:16764808,waterColor:1465960,distortionScale:.36,size:3.2,clipBias:.002,alpha:.88,fog:!0});l.name="P3_Perugius_Reflective_Water",l.position.set(.035,n.localRadius+.0025,.015),l.rotation.x=-Math.PI*.5,l.visible=!1,t.surfaceCapGroup.add(l),t.reflectiveWaters=[{water:l,centerLocal:l.position.clone(),isOceanSurface:!1}],t.p3Water=l}}const i=new Set;t.surfaceCapGroup.traverse(o=>{if(!o.isMesh&&!o.isInstancedMesh)return;const a=Array.isArray(o.material)?o.material:[o.material];for(const r of a){if(!r||i.has(r)||r.userData?.animatedEmissive)continue;i.add(r),r.emissive&&r.emissiveIntensity!==void 0&&(r.emissiveMap||r.emissive.r>.008||r.emissive.g>.008||r.emissive.b>.008)&&t.nightMaterials.push({material:r,baseEmissive:r.emissiveIntensity,tier:r.userData?.nightTier||"default"})}}),this._buildSurfaceStreamingQueue(t),t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}})(),t.surfacePromise}_classifySurfaceTier(e,t){const n=/Shanty|Slum|Rancho|MicroWindow|VerticalNeon|Japantown_Neon|Streetlamp|FlaresAndFires|Industrial_Smoke|Abandoned_FerrisWheel|Giant_Ferns|Broadleaf_Shrubs|Ground_Clutter|Flowers_|Mushrooms_|Mossy_Rocks|WaterLilies|Hanging_Vines|Waterfall|Floating_Cinders|Reef_Corals|Giant_Kelp|Underwater_Caustics|Metkayina_Torches|Ash_Bonfires|Volcano_Smoke|HoloSign_|Sign_3D_|EdgeBeacon|Antenna|Beacon|Billboard|Lamp/i,i=/H10_Megablock|Stacked_Container|PortDepot|Charter_Heywood|NorthOak|Pacifica_Skeleton|Bay_Connecting_Bridges|Badlands_Rocks|Oil_Pump|WindTurbine|Greenhouse|Nomad|Desert_Roads|AV_Blimp|Urban_AV_Traffic|TowerBand|Medieval_Life|Geyser|IkranRookery|TreeOfSouls|Metkayina|Ash_Volcano|Giant_Bone|Tribal_Huts|Charred_Trees|Lava_Fissures|VineBridges|Canyon_Spires|Coral_Reefs|Valley_Arch|Inland_Lakes|Canopy_Under|Alien_Palms|Gnarled_Root|Alien_Redwood/i,o=/Terrain|Crystal_Ocean|Rivers|Hometree|HallelujahMountains|Tree_Trunks|Canopy_Tops|NeoMil|NeoKitsch|CityCenter_LightBeams|Procedural_Districts_Terrain/i,a=e.name||"";if(n.test(a))return"micro";if(i.test(a))return"medium";if(o.test(a))return"macro";let r=e.parent;for(;r&&r!==t;){const l=r.name||"";if(n.test(l))return"micro";if(i.test(l)||/Pandora_Life_System|Urban_AV_Traffic|TowerBand/i.test(l))return"medium";r=r.parent}return"macro"}_buildSurfaceStreamingQueue(e){const t=[],n={macro:0,medium:1,micro:2};e.surfaceCapGroup.traverse(i=>{if(i!==e.surfaceCapGroup){if(i.isWater||i.userData?.manualClutterLod){i.visible=!1;return}if(i.isMesh||i.isInstancedMesh||i.isPoints){const o=this._classifySurfaceTier(i,e.surfaceCapGroup),a=/Terrain|Crystal_Ocean|NeoMil|NeoKitsch|Hometree/i.test(i.name||"");i.visible=!1,t.push({obj:i,tier:o,priority:n[o]*10+(a?0:1),activated:!1,isPandoraTerrain:i.name==="Pandora_Global_Terrain_360"})}else(i.isGroup||i.isObject3D)&&!i.isLight&&(i.visible=!0)}}),t.sort((i,o)=>i.priority-o.priority),e.surfaceStreaming={items:t,totalCount:t.length,macroCount:t.filter(i=>i.tier==="macro").length,mediumCount:t.filter(i=>i.tier==="medium").length,microCount:t.filter(i=>i.tier==="micro").length,compiled:!1,compiling:!1},e.surfaceTerrainActivated=!1,e.lastActivatedThisFrame=0}_updateSurfaceStreaming(e,t,n){e.lastActivatedThisFrame=0;const i=e.surfaceStreaming;if(!e.surfaceLoaded||!i){e.surfaceCapGroup.visible=!1,e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}if(t<=gd&&!i.compiled&&!i.compiling&&typeof this.renderer?.compileAsync=="function"&&(i.compiling=!0,Promise.resolve(this.renderer.compileAsync(e.surfaceCapGroup,this.camera,this.scene)).catch(()=>{}).finally(()=>{i.compiled=!0,i.compiling=!1})),n>d1||t>gd){if(e.surfaceCapGroup.visible||e.surfaceTerrainActivated){e.surfaceCapGroup.visible=!1,e.surfaceTerrainActivated=!1;for(let c=0;c<i.items.length;c++){const h=i.items[c];(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1)}}e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}const o=n<=u1&&t<=.86,a=n<=f1,r=n<=p1;if(!o){e.surfaceCapGroup.visible=!1,e.surfaceTerrainActivated=!1;for(let c=0;c<i.items.length;c++){const h=i.items[c];(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1)}e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}e.surfaceCapGroup.visible=!0;let l=0;for(let c=0;c<i.items.length;c++){const h=i.items[c];if(!(h.tier==="macro"?o:h.tier==="medium"?a:r)){(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1,h.isPandoraTerrain&&(e.surfaceTerrainActivated=!1));continue}h.activated||l<h1&&(h.obj.visible=!0,h.activated=!0,l++,h.isPandoraTerrain&&(e.surfaceTerrainActivated=!0))}e.lastActivatedThisFrame=l,e.config.hasProceduralWorld&&e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!e.surfaceTerrainActivated)}_calibrateNightCityMaterials(e){const t=new Set;e.traverse(n=>{if(n.isLight){n.visible=!1,n.intensity=0;return}if(!n.isMesh)return;const i=/Skyscraper|Tower|Plaza|Arasaka|Militech|Corp|Bridge/i.test(n.name||"");n.castShadow=i,n.receiveShadow=!0;const o=Array.isArray(n.material)?n.material:[n.material];for(const a of o){if(!a||t.has(a)||a.emissiveIntensity===void 0)continue;t.add(a),a.userData=a.userData||{};const r=a.name||"";/Windows_Dense|Windows_Brutal|Windows_High|backboard/i.test(r)?(a.emissive.setHex(11059928),a.emissiveIntensity=.24,a.userData.nightTier="window"):/rib_warm_white/i.test(r)?(a.emissiveIntensity=.27,a.userData.nightTier="window"):/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber/i.test(r)?(a.emissiveIntensity=.82,a.userData.nightTier="accent"):/chimney_flare/i.test(r)?(a.emissiveIntensity=1.78,a.userData.nightTier="hero"):/neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(r)?(a.emissiveIntensity=/Koi|Geisha|Banner/i.test(r)?1.85:1.62,a.userData.nightTier="hero"):(a.emissiveIntensity=Math.min(.24,a.emissiveIntensity),a.userData.nightTier="window")}})}_showTransitionBanner(e,t,n,i=1500){const o=document.getElementById("hud-transition-banner"),a=document.getElementById("banner-subtitle"),r=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");a&&(a.textContent=e),r&&(r.textContent=t),o&&o.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{o&&o.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){const t=document.querySelectorAll(".nav-btn");t.length!==0&&t.forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){if(e&&typeof e=="object")return this._navigateToDescriptor(e);const t=String(e);if(this._highlightActiveNavButton(t),t==="1")return this._flyToSolarSystemOverview(!1);if(t==="2")return this._flyToStation("crystal_palace");const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const o=this.planetNodes.get(i);if(!o)return;await this.ensurePlanetSurfaceLoaded(i),this.orbitalGroup.updateMatrixWorld(!0);const a=new b;o.root.getWorldPosition(a);const r=this.camera.position.distanceTo(a),l=o.config.localRadius*En,c=l*xs;return r-l>c*1.1?this._flyToPlanetOrbit(i):this._flyToPlanetSurface(i)}async _navigateToDescriptor(e){switch(e.type){case"sun_orbit":return this._flyToSolarSystemOverview(!0);case"station":return this._flyToStation(e.stationId||"crystal_palace");case"planet_orbit":return this._flyToPlanetOrbit(e.planetKey);case"planet_surface":return this._flyToPlanetSurface(e.planetKey,e.landmarkId);case"moon":return this._flyToMoon(e.planetKey,e.moonIndex??0);default:return null}}_flyToSolarSystemOverview(e=!1){const t=e?{targetPos:new b(0,1200,4400),lookAtPos:new b(0,0,0)}:{targetPos:new b(0,6100,21e3),lookAtPos:new b(0,0,0)};this.controls.engageAutopilot({getTargetPose:()=>({targetPos:t.targetPos.clone(),lookAtPos:t.lookAtPos.clone(),upVec:new b(0,1,0)}),duration:3.4})}async _flyToStation(e="crystal_palace"){if(e!=="crystal_palace"||(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor))return;this.orbitalGroup.updateMatrixWorld(!0);const t=new b;this.crystalPalaceAnchor.getWorldPosition(t);const n=this.camera.position.distanceTo(t),i=G.clamp(n/3200,2.8,5.2);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const o=new b;this.crystalPalaceAnchor.getWorldPosition(o);const a=o.clone().negate().normalize(),r=new b().crossVectors(new b(0,1,0),a).normalize();return{targetPos:o.clone().addScaledVector(a,62).addScaledVector(r,38).add(new b(0,20,0)),lookAtPos:o,upVec:new b(0,1,0)}},duration:i})}async _flyToPlanetOrbit(e){const t=this.planetNodes.get(e);if(!t)return;const n=t.config;n.landable&&await this.ensurePlanetSurfaceLoaded(e);const i=t.capFrame||t.spinGroup||t.root;this.orbitalGroup.updateMatrixWorld(!0);const o=new b;t.root.getWorldPosition(o);const a=this.camera.position.distanceTo(o),r=G.clamp(a/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>{if(this.orbitalGroup.updateMatrixWorld(!0),!n.landable){const l=new b;t.root.getWorldPosition(l);const c=l.clone().negate().normalize(),h=new b().crossVectors(new b(0,1,0),c).normalize(),u=n.localRadius*En;return{targetPos:l.clone().addScaledVector(c,u*2.55).addScaledVector(h,u*1.45).add(new b(0,u*1.15,0)),lookAtPos:l,upVec:new b(0,1,0)}}return{targetPos:n.lowOrbitOffset.clone().applyMatrix4(i.matrixWorld),lookAtPos:n.lowOrbitLookAt.clone().applyMatrix4(i.matrixWorld),upVec:new b(0,1,0).transformDirection(i.matrixWorld).normalize()}},duration:r})}async _flyToPlanetSurface(e,t=null){const n=this.planetNodes.get(e);if(!n)return;const i=n.config;if(!i.landable)return this._flyToPlanetOrbit(e);if(await this.ensurePlanetSurfaceLoaded(e),e==="p1"&&t)return this.navigateToPandoraLandmark(t);if(e==="p2"&&t)return this.navigateToNightCityDistrict(t);const o=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const a=new b;n.root.getWorldPosition(a);const r=this.camera.position.distanceTo(a),l=i.localRadius*En,c=l*xs,h=r-l;if(h>c*1.18){const u=G.clamp(r/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.highCloudOffset.clone().applyMatrix4(o.matrixWorld),lookAtPos:i.lowOrbitLookAt.clone().applyMatrix4(o.matrixWorld),upVec:new b(0,1,0).transformDirection(o.matrixWorld).normalize()}),duration:u,onComplete:()=>{this._engageCloudBreakoutGlide(i,o)}});return}if(h>c*.24){this._engageCloudBreakoutGlide(i,o);return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.aerialOffset.clone().applyMatrix4(o.matrixWorld),lookAtPos:i.aerialLookAt.clone().applyMatrix4(o.matrixWorld),upVec:new b(0,1,0).transformDirection(o.matrixWorld).normalize()}),duration:2.6})}_engageCloudBreakoutGlide(e,t){this.orbitalGroup.updateMatrixWorld(!0);const n=new ot().copy(t.matrixWorld).invert(),i=this.camera.position.clone().applyMatrix4(n),o=[i];i.distanceTo(e.highCloudOffset)>e.localRadius*.28&&o.push(e.highCloudOffset.clone());const a=e.highCloudOffset.clone().lerp(e.aerialOffset,.55).normalize().multiplyScalar(e.localRadius*(1+xs*.48)),r=e.highCloudOffset.clone().lerp(e.aerialOffset,.82).normalize().multiplyScalar(e.localRadius*(1+xs*.16));o.push(a,r,e.aerialOffset.clone());const l=new oi(o);this.controls.engageAutopilot({useDirectCurve:!0,duration:8.2,getTargetPose:c=>{this.orbitalGroup.updateMatrixWorld(!0);const h=l.getPoint(c),u=e.aerialLookAt.clone().lerp(e.lowOrbitLookAt,Math.pow(1-c,1.8)*.45),f=l.getPoint(Math.min(1,c+.08)).lerp(u,Math.min(1,c*1.15+.2));return{targetPos:h.applyMatrix4(t.matrixWorld),lookAtPos:f.applyMatrix4(t.matrixWorld),upVec:new b(0,1,0).transformDirection(t.matrixWorld).normalize()}}})}async _flyToMoon(e,t=0){const n=this.planetNodes.get(e),i=n?.moonOrbits?.[t];if(!n||!i)return;this.orbitalGroup.updateMatrixWorld(!0);const o=new b;i.node.getWorldPosition(o);const a=this.camera.position.distanceTo(o),r=G.clamp(a/3400,2.8,5.4),l=Math.max(46,i.moonRadius*4);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const c=new b;i.node.getWorldPosition(c);const h=c.clone().negate().normalize(),u=new b().crossVectors(new b(0,1,0),h).normalize();return{targetPos:c.clone().addScaledVector(h,l*.72).addScaledVector(u,l*.68).add(new b(0,l*.26,0)),lookAtPos:c,upVec:new b(0,1,0)}},duration:r})}async navigateToPandoraLandmark(e){const t=At.find(n=>n.id===e);return this._navigateToCapLandmark("p1",t)}async navigateToNightCityDistrict(e){const t=vr[e]||vr.city_center;return this._navigateToCapLandmark("p2",t)}async _navigateToCapLandmark(e,t){const n=this.planetNodes.get(e);if(!t||!n)return;await this.ensurePlanetSurfaceLoaded(e);const i=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const o=n.config.localRadius,a=new ot().copy(i.matrixWorld).invert(),r=this.camera.position.clone().applyMatrix4(a),l=t.capDir.clone().normalize(),c=Math.abs(l.y)<.85?new b(0,1,0):new b(1,0,0),h=new b().crossVectors(l,c).normalize(),u=l.clone().multiplyScalar(o+t.viewAlt).addScaledVector(h,-t.viewBack).normalize().multiplyScalar(o+t.viewAlt),d=l.clone().multiplyScalar(o+t.viewAlt*.25);if(r.length()>o*1.88){const M=l.clone().multiplyScalar(o*1.48).addScaledVector(h,-.22),S=new b;n.root.getWorldPosition(S);const C=G.clamp(this.camera.position.distanceTo(S)/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:M.clone().applyMatrix4(i.matrixWorld),lookAtPos:l.clone().multiplyScalar(o).applyMatrix4(i.matrixWorld),upVec:l.clone().transformDirection(i.matrixWorld).normalize()}),duration:C,onComplete:()=>{this._navigateToCapLandmark(e,t)}});return}const f=r.clone().normalize(),g=f.angleTo(l),v=Math.min(1.15,g*.65),m=Math.max(3,Math.ceil(g/.35)),p=new ut,_=new ut().setFromUnitVectors(f,l),y=new ut,x=Math.max(o+.05,Math.min(r.length(),o*1.48)),T=o+t.viewAlt,w=[r.clone()];for(let M=1;M<m;M++){const S=M/m;p.copy(y).slerp(_,S);const C=f.clone().applyQuaternion(p).normalize(),R=G.lerp(x,T,S)+Math.sin(S*Math.PI)*v;w.push(C.multiplyScalar(R))}w.push(u);const E=new oi(w),A=G.clamp(2.2+g*1.5,2.4,5.4);this.controls.engageAutopilot({useDirectCurve:!0,duration:A,getTargetPose:M=>{this.orbitalGroup.updateMatrixWorld(!0);const S=E.getPoint(M),R=E.getPoint(Math.min(1,M+.08)).lerp(d,Math.min(1,M*1.35)),L=S.clone().normalize();return{targetPos:S.applyMatrix4(i.matrixWorld),lookAtPos:R.applyMatrix4(i.matrixWorld),upVec:L.transformDirection(i.matrixWorld).normalize()}}})}_sampleNightCityAtmo(e){const t=this._p2Atmo;t.fogDay.setRGB(0,0,0),t.fogNight.setRGB(0,0,0),t.fogDusk.setRGB(0,0,0),t.hemiSky.setRGB(0,0,0),t.hemiGround.setRGB(0,0,0),t.ambient.setRGB(0,0,0),t.localLight.setRGB(0,0,0),t.localBounce.setRGB(0,0,0);let n=0,i=0;for(const o of Do){const a=e.weights[o.id]||0;if(a<=1e-4)continue;const r=o.atmo;t.fogDay.add(this._tmpColorC.setHex(r.fogDay).multiplyScalar(a)),t.fogNight.add(this._tmpColorC.setHex(r.fogNight).multiplyScalar(a)),t.fogDusk.add(this._tmpColorC.setHex(r.fogDusk).multiplyScalar(a)),t.hemiSky.add(this._tmpColorC.setHex(r.hemiSky).multiplyScalar(a)),t.hemiGround.add(this._tmpColorC.setHex(r.hemiGround).multiplyScalar(a)),t.ambient.add(this._tmpColorC.setHex(r.ambient).multiplyScalar(a)),t.localLight.add(this._tmpColorC.setHex(r.localLight).multiplyScalar(a)),t.localBounce.add(this._tmpColorC.setHex(r.localBounce).multiplyScalar(a)),n+=r.fogDensity*a,i+=r.bloomCap*a}return e.district==="westbrook"&&e.subzone==="north_oak"&&(n*=.48,i=Math.min(i,.4)),t.fogDensity=n,t.bloomCap=i,t}update(e){const t=Math.min(e,.1),n=t*this.timeScale;this.elapsedTime+=t,this.simulationTime+=n,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),Qc.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,P]of this.planetNodes){const F=P.config;P.prevWorldPos.copy(P.currWorldPos),P.spinGroup&&P.prevSpinWorldQuat.copy(P.currSpinWorldQuat),P.orbitAngle+=n*F.orbitOmega;const z=F.semiMajorAxis,k=F.eccentricity||.04,U=z*(1-k*k)/(1+k*Math.cos(P.orbitAngle));P.spinner&&(P.spinner.rotation.y=P.orbitAngle),P.root.position.set(U,0,0);for(const N of P.moonOrbits)N.angle+=n*N.speed,N.node.position.set(Math.cos(N.angle)*N.baseRadius,N.yOffset,Math.sin(N.angle)*N.baseRadius);P.spinAngle+=n*(F.axialOmega??F.rotationSpeed??.012),P.spinGroup&&(P.spinGroup.rotation.y=P.spinAngle),P.orbitalBundle&&(P.orbitalBundle.lowerCloudMesh.rotation.y+=n*F.rotationSpeed*.45,P.orbitalBundle.upperCloudMesh.rotation.y+=n*F.rotationSpeed*.85,P.orbitalBundle.lowerCloudGroup.rotation.y+=n*F.rotationSpeed*.28)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=n*.06),this.orbitalGroup.updateMatrixWorld(!0);let i="Sol Central",o=Math.max(0,this.camera.position.length()-2.21*3.2*En),a=12e3,r=null,l=null,c=99999;for(const[P,F]of this.planetNodes){F.root.getWorldPosition(F.currWorldPos),F.planetDeltaPos.copy(F.currWorldPos).sub(F.prevWorldPos);for(const oe of F.moonOrbits)oe.prevWorldPos.copy(oe.currWorldPos),oe.node.getWorldPosition(oe.currWorldPos),oe.deltaPos.copy(oe.currWorldPos).sub(oe.prevWorldPos);F.spinGroup&&(F.spinGroup.getWorldQuaternion(F.currSpinWorldQuat),this._tmpInvQuat.copy(F.prevSpinWorldQuat).invert(),F.spinQuatDelta.copy(F.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize());const z=F.config.localRadius*En,k=z*xs,U=this.camera.position.distanceTo(F.currWorldPos),N=U-z,X=N/k;if(F.atmosphereShell&&F.atmosphereShell.material.uniforms){const oe=F.atmosphereShell.material.uniforms;oe.uSunPosition.value.set(0,0,0);const te=G.smoothstep(X,0,.85);oe.uAltitudeFade.value=G.lerp(.18,1,te)}if(F.config.landable){!F.surfaceLoaded&&!F.surfaceLoading&&U<z*4.5&&this.ensurePlanetSurfaceLoaded(P),F.surfaceCapGroup.scale.setScalar(1);const oe=Math.max(0,(N-(F.config.groundFloorAlt??.95))*Mr);if(this._updateSurfaceStreaming(F,X,oe),F.orbitalBundle){const te=F.orbitalBundle;te.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(F.currWorldPos),te.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(F.currWorldPos);const we=G.smoothstep(X,.14,.42),j=we*.64,ue=we*.86;if(te.lowerCloudMesh.material.uniforms.uOpacity.value=j,te.lowerCloudMesh.visible=j>.008,te.upperCloudMesh.material.uniforms.uOpacity.value=ue,te.upperCloudMesh.visible=ue>.008,X<.85){const ge=1-G.smoothstep(X,.42,.85),pe=Math.exp(-Math.pow((X-.15)/.14,2))*.85,ee=Math.max(ge*.36,pe);te.lowerCloudPuffs.material.opacity=ee,te.lowerCloudGroup.visible=ee>.008}else te.lowerCloudGroup.visible=!1}}N<o&&(o=Math.max(0,N),i=F.config.name,a=F.config.kmScale),N<c&&(c=N,l=F,r=P)}if(this.crystalPalaceAnchor){this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);const P=Math.max(0,this.camera.position.distanceTo(this._tmpStationPos)-12);P<o&&(o=P,i="Estación Crystal Palace",a=850)}let h=!1,u=!1,d=1,f=0,g=null,v=null,m=null,p=this._identityQuat,_=220,y=220*xs,x=.95,T=8,w=0,E=0,A=null,M=null,S=null,C="ESPACIO";if(l){const P=l.config;if(_=P.localRadius*En,y=_*xs,x=P.groundFloorAlt??.95,T=P.minSpeed??8,P.id==="p1"&&l.pandoraWorld){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();const U=l.pandoraWorld.getFloorAndWaterAtDir(this._tmpLocalDir);A=U;const N=U.terrainElev*En+(U.hasWater?.55:1.15);if(x=U.hasWater?N:Math.max(.65,N),U.hasWater){const X=U.waterElev*En;c<X&&(E=X-c,w=G.clamp(E/1.8,0,1))}}else if(P.id==="p2"){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize(),M=To(this._tmpLocalDir.x,this._tmpLocalDir.y,this._tmpLocalDir.z),S=this._sampleNightCityAtmo(M);const U=Math.max(0,M.elevationRatio)*_;x=Math.max(P.groundFloorAlt??.32,U+.38)}const F=y*1.25,z=c/y;if(z>1){for(const k of l.moonOrbits){const U=this.camera.position.distanceTo(k.currWorldPos);if(U<Math.max(85,k.moonRadius*6)){u=!0,g=k.deltaPos,v=k.currWorldPos,m=k.prevWorldPos,p=this._identityQuat,_=k.moonRadius,x=1.8,y=Math.max(95,k.moonRadius*4.5),c=U-k.moonRadius,i=k.name,o=Math.max(0,c);break}}if(!u&&this.crystalPalaceAnchor){const k=this.planetNodes.get("p2");k&&(this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos),this.camera.position.distanceTo(this._tmpStationPos)<220&&(u=!0,g=k.planetDeltaPos,v=k.currWorldPos,m=k.prevWorldPos,p=this._identityQuat))}}if(!u&&c<F&&(u=!0,g=l.planetDeltaPos,v=l.currWorldPos,m=l.prevWorldPos,p=l.spinQuatDelta),P.landable&&z<1.06){h=z<=1,this.currentDominantPlanet=h?P:null,h&&this.lastBannerPlanetId!==P.id&&(this.lastBannerPlanetId=P.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${P.name.toUpperCase()}`,P.glowCss,1700),P.navKey&&this._highlightActiveNavButton(P.navKey));const k=G.clamp(1-z,0,1),U=1-G.smoothstep(z,.92,1.06),N=this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),X=this._tmpSunDir.copy(this.camera.position).negate().normalize(),oe=G.clamp(N.dot(X),-1,1);d=oe,f=k;const te=G.smoothstep(-oe,-.02,.24),we=G.smoothstep(oe,-.02,.28),j=Math.exp(-Math.pow((oe-.02)/.14,2))*(1-te*.55);oe>.14?C="DÍA":oe>=-.08?C="ATARDECER":C="NOCHE";const ue=1-G.smoothstep(k,.04,.25);for(const it of this.orbitLines)it.material.opacity=it.baseOpacity*ue,it.mesh.visible=ue>.01;const ge=-Math.sqrt(Math.max(0,1-Math.pow(_/Math.max(_,_+c),2))),pe=G.smoothstep(k,.01,.36),ee=this.skyDome.material.uniforms;if(P.skyDome){const it=P.id==="p2"?1444388:1841212,Pt=P.id==="p2"?7085388:P.id==="p1"?6039150:10174e3,xn=P.id==="p2"?16726909:16743220,Bn=P.id==="p2"?331292:198678,Rt=P.id==="p2"?1058888:P.id==="p1"?404536:P.id==="p4"?2494984:529190,nn=P.id==="p1"&&A?this._tmpColorC.setHex(1799371).lerp(this._tmpColorB.setHex(1737450),A.waterFactor).lerp(this._tmpColorB.setHex(3024934),A.ashFactor).getHex():P.skyDome.zenith,Ut=P.id==="p1"&&A?this._tmpColorC.setHex(5157068).lerp(this._tmpColorB.setHex(5687029),A.waterFactor).lerp(this._tmpColorB.setHex(6309432),A.ashFactor).getHex():P.skyDome.mid,Jt=P.id==="p1"&&A?this._tmpColorC.setHex(8707782).lerp(this._tmpColorB.setHex(10810618),A.waterFactor).lerp(this._tmpColorB.setHex(11034162),A.ashFactor).getHex():P.skyDome.horizon;this._tmpColorA.setHex(nn),this._tmpColorA.lerp(this._tmpColorB.setHex(it),j*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(66312),te*.94),ee.uZenithColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(Ut),this._tmpColorA.lerp(this._tmpColorB.setHex(Pt),j*.85),this._tmpColorA.lerp(this._tmpColorB.setHex(Bn),te*.92),ee.uMidColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(Jt),this._tmpColorA.lerp(this._tmpColorB.setHex(xn),j*.9),this._tmpColorA.lerp(this._tmpColorB.setHex(Rt),te*.92),ee.uHorizonColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(P.skyDome.sunGlow),this._tmpColorA.lerp(this._tmpColorB.setHex(16757844),j*.82),this._tmpColorA.lerp(this._tmpColorB.setHex(1451069),te*.9),ee.uSunGlowColor.value.copy(this._tmpColorA);const Zn=P.skyDome.zenithAlpha;if(ee.uZenithAlpha.value=G.lerp(Zn,Math.max(.16,Zn*.24),te),w>.001){const zn=te>.5?136738:547442,St=te>.5?272444:821410;ee.uZenithColor.value.lerp(this._tmpColorB.setHex(zn),w),ee.uMidColor.value.lerp(this._tmpColorB.setHex(zn),w),ee.uHorizonColor.value.lerp(this._tmpColorB.setHex(St),w),ee.uSunGlowColor.value.lerp(this._tmpColorB.setHex(2808046),w*.85),ee.uZenithAlpha.value=G.lerp(ee.uZenithAlpha.value,.96,w)}if(ee.uLocalUp.value.copy(N),ee.uSunDir.value.copy(X),ee.uHorizonDot.value=ge,ee.uAtmoOpacity.value=pe,ee.uMieIntensity&&(ee.uMieIntensity.value=G.lerp(.62,.08,te)),this.skyDome.visible=pe>.005,this.starfield.userData.setStarVisibility){const zn=M?.weights?.badlands||0,St=M?.district==="westbrook"&&M?.subzone==="north_oak"?.35:0,I=Math.min(.6,zn*.55+St),J=G.lerp(Math.max(P.skyDome.starFloor,I),Math.max(P.skyDome.starFloor,.45+I*.35),j*(1-we*.7)),q=G.lerp(J,M&&zn>.45?1:.96,te),se=G.lerp(1,q,G.smoothstep(k,.06,.42))*(1-w);this.starfield.userData.setStarVisibility(se)}}if(l.orbitalBundle){const it=l.orbitalBundle,Pt=P.id==="p2"?14239882:16749142,xn=P.id==="p2"?16726909:16740396;if(it.userBaseColors){this._tmpColorA.copy(it.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(Pt),j*.72),this._tmpColorC.copy(it.userBaseColors.horizon).lerp(this._tmpColorB.setHex(xn),j*.85);for(const Rt of[it.upperCloudMesh,it.lowerCloudMesh])Rt.material.uniforms.uSunColor.value.copy(this._tmpColorA),Rt.material.uniforms.uHorizonColor.value.copy(this._tmpColorC)}const Bn=P.id==="p2"?1452616:1319480;this._tmpColorA.copy(it.userBaseColors?it.userBaseColors.sunlit:this._tmpColorB.setHex(16777215)),this._tmpColorA.lerp(this._tmpColorB.setHex(Pt),j*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(Bn),te*.88),it.lowerCloudPuffs.material.color.copy(this._tmpColorA)}const fe=k>.32;for(const[it,Pt]of this.planetNodes)Pt.root.visible=fe?it===r:!0;const me=1-G.smoothstep(z,.45,.98),Ae=P.id==="p1"&&A&&A.ashFactor>.35?919044:198156,ve=P.id==="p2"?3871275:8139812,Z=P.id==="p1"&&A?this._tmpColorC.setHex(2655412).lerp(this._tmpColorB.setHex(2527952),A.waterFactor).lerp(this._tmpColorB.setHex(4994604),A.ashFactor).getHex():P.skyColor;this._tmpSkyColor.setHex(Z).lerp(this._tmpColorB.setHex(ve),j*.72).lerp(this._tmpColorB.setHex(Ae),te*.92),w>.001&&this._tmpSkyColor.lerp(this._tmpColorB.setHex(683142).lerp(this._tmpColorC.setHex(137768),te),w),this.scene.background=this._tmpColorA.setHex(Ae).clone().lerp(this._tmpSkyColor,me*.9);const B=P.id==="p1"&&A?1.05*A.forestFactor+.78*A.waterFactor+2.15*A.ashFactor:1,_e=(P.id==="p2"&&S?S.fogDensity:P.maxFogDensity*B)*(1-G.smoothstep(z,.2,.9)),We=.012*Math.exp(-Math.pow((z-.14)/.06,2)),Le=.0022*Math.exp(-Math.pow((z-.85)/.12,2)),rt=P.id==="p1"?.0024*(1-G.smoothstep(z,0,.05))*(1-(A?.ashFactor||0)*.4):0,Xe=(_e+We+Le+rt)*U,O=G.lerp(.022,.036,te),D=G.lerp(Xe,O,w);if(P.id==="p2"&&S)this._tmpFogColor.copy(S.fogDay).lerp(S.fogDusk,j*.76).lerp(S.fogNight,te*.92);else{const it=P.id==="p1"&&A?this._tmpColorC.setHex(5023914).lerp(this._tmpColorB.setHex(6476523),A.waterFactor).lerp(this._tmpColorB.setHex(6046772),A.ashFactor).getHex():P.fogColor,Pt=P.id==="p2"?6428730:13920826,xn=P.id==="p1"?A&&A.ashFactor>.35?1444358:268836:329744;this._tmpFogColor.setHex(it).lerp(this._tmpColorB.setHex(Pt),j*.78).lerp(this._tmpColorB.setHex(xn),te*.9)}w>.001&&this._tmpFogColor.lerp(this._tmpColorB.setHex(883350).lerp(this._tmpColorC.setHex(205362),te),w),this.camera.getWorldDirection(this._tmpCamFwd);const ie=Math.max(0,this._tmpCamFwd.dot(X)),xe=Math.pow(ie,3)*.35*(1-te*.8)*(1-w);xe>.001&&ee.uSunGlowColor&&this._tmpFogColor.lerp(ee.uSunGlowColor.value,xe),this.scene.fog?(this.scene.fog.color.copy(this._tmpFogColor),this.scene.fog.density=D):this.scene.fog=new Yr(this._tmpFogColor.getHex(),D);const re=E>.05,he=Math.max(0,(c-x)*Mr),De=P.id==="p1"?1-.34*(1-G.smoothstep(z,0,.05)):1,be=P.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1,Ne=G.lerp(.05,1,G.smoothstep(oe,-.06,.24)),pt=G.lerp(1,.45,w);this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize();const Ee=P.id==="p1",Qe=h&&he<(Ee?1500:2500)&&Ne>.08&&!re;if(this.planetaryDirLight.castShadow=Qe,Qe){const it=this.planetaryDirLight.shadow.camera,Pt=Ee?he<350?46:G.lerp(46,110,G.smoothstep(he,350,1500)):he<450?48:G.lerp(48,180,G.smoothstep(he,450,2500));Math.abs(it.right-Pt)>1&&(it.left=-Pt,it.right=Pt,it.top=Pt,it.bottom=-Pt,it.near=4,it.far=520,it.updateProjectionMatrix()),this.planetaryDirLight.target.position.copy(this.camera.position),this.planetaryDirLight.position.copy(this.camera.position).addScaledVector(this._tmpPlanetToSun,220),this.planetaryDirLight.target.updateMatrixWorld()}else this.planetaryDirLight.target.position.copy(l.currWorldPos),this.planetaryDirLight.position.copy(l.currWorldPos).addScaledVector(this._tmpPlanetToSun,1200),this.planetaryDirLight.target.updateMatrixWorld();this.planetaryDirLight.color.setHex(P.sunColor).lerp(this._tmpColorB.setHex(16741424),j*.72).lerp(this._tmpColorB.setHex(5008280),te*.85),this.planetaryDirLight.intensity=G.lerp(.25,P.sunIntensity,k)*De*Ne*pt,this.hemiLight.position.copy(N).multiplyScalar(100);const ct=P.id==="p2"?16726909:16743220,ze=P.id==="p1"?537668:P.id==="p2"?926272:792108,vt=P.id==="p1"?401448:527380,nt=P.id==="p1"&&A?this._tmpColorC.setHex(6079672).lerp(this._tmpColorB.setHex(7395583),A.waterFactor).lerp(this._tmpColorB.setHex(9069644),A.ashFactor).getHex():P.id==="p2"&&S?S.hemiSky.getHex():P.hemiSkyColor,ft=P.id==="p1"&&A?this._tmpColorC.setHex(1985064).lerp(this._tmpColorB.setHex(1330784),A.waterFactor).lerp(this._tmpColorB.setHex(2890772),A.ashFactor).getHex():P.id==="p2"&&S?S.hemiGround.getHex():P.hemiGroundColor;this._tmpColorA.setHex(nt).lerp(this._tmpColorB.setHex(ct),j*.55).lerp(this._tmpColorB.setHex(ze),te*.9),w>.001&&this._tmpColorA.lerp(this._tmpColorB.setHex(1889514).lerp(this._tmpColorC.setHex(407624),te),w*.85),this.hemiLight.color.lerp(this._tmpColorA,Math.min(1,k*.35+.08)),this._tmpColorA.setHex(ft).lerp(this._tmpColorB.setHex(vt),te*.85),this.hemiLight.groundColor.lerp(this._tmpColorA,Math.min(1,k*.35+.08)),this.hemiLight.intensity=G.lerp(.42,P.hemiIntensity,k)*G.lerp(1,.36,te);const V=P.id==="p1"&&A?this._tmpColorC.setHex(2247218).lerp(this._tmpColorB.setHex(1986148),A.waterFactor).lerp(this._tmpColorB.setHex(3548186),A.ashFactor).getHex():P.id==="p2"&&S?S.ambient.getHex():P.ambientColor;this._tmpColorA.setHex(V).lerp(this._tmpColorB.setHex(1054760),te*.82),this.ambientLight.color.lerp(this._tmpColorA,Math.min(1,k*.35+.08)),this.ambientLight.intensity=G.lerp(.55,P.ambientIntensity,k)*De*G.lerp(1,.45,te);const Pe=P.id==="p1"?.74:P.id==="p3"?.85:.9,de=P.id==="p1"?2.45*be:P.id==="p2"?2.15:P.id==="p3"?2.25:1.95,ye=Math.min(1,Math.max(te,j*.45)),Fe=G.lerp(Pe,de,ye);if(l.surfaceCapGroup.visible){if(l.splatUniforms?.length)for(const it of l.splatUniforms)it.uPlanetCenter.value.copy(l.currWorldPos);l.p3Water?.material?.uniforms?.time&&(l.p3Water.material.uniforms.time.value+=t*.5),this._hideAllReflectiveWaters(l),this._updateReflectiveWaters(l,h&&!re&&he<1e4,w,X),P.id==="p1"&&l.pandoraWorld?.updateGroundClutter&&l.pandoraWorld.updateGroundClutter(this._tmpLocalDir,he,w);for(const it of l.animators)it.update(this.elapsedTime,Fe,oe,w);for(const it of l.nightMaterials)P.id==="p2"?it.tier==="window"?it.material.emissiveIntensity=Math.min(.28,it.baseEmissive*G.lerp(.7,1.15,ye)):it.tier==="hero"?it.material.emissiveIntensity=G.clamp(it.baseEmissive*G.lerp(.88,1.04,ye),1.3,1.9):it.material.emissiveIntensity=Math.min(.88,it.baseEmissive*G.lerp(.75,1.1,ye)):it.material.emissiveIntensity=it.baseEmissive*Fe}else P.id==="p1"&&l.pandoraWorld?.updateGroundClutter&&l.pandoraWorld.updateGroundClutter(null,99999,0);const ke=1-G.smoothstep(z,.05,.45),Ze=P.id==="p1"?G.smoothstep(-oe,-.1,.04):1,Ot=P.id==="p1"&&A&&w<=.2?this._tmpColorC.setHex(P.localLightColor).lerp(this._tmpColorB.setHex(2683096),A.waterFactor).lerp(this._tmpColorB.setHex(16742456),A.ashFactor).getHex():P.id==="p2"&&S?S.localLight.getHex():w>.2?1894655:P.localLightColor,kt=P.id==="p1"&&A?this._tmpColorC.setHex(P.localBounceColor).lerp(this._tmpColorB.setHex(1628415),A.waterFactor).lerp(this._tmpColorB.setHex(16730648),A.ashFactor).getHex():P.id==="p2"&&S?S.localBounce.getHex():P.localBounceColor;this.localAtmoLight.color.setHex(Ot);const gt=P.id==="p2"&&M?M.district==="pacifica"?.28:M.district==="badlands"?.22:.72:1;this.localAtmoLight.intensity=ke*5.2*gt*be*G.lerp(.85,1.38,ye)*Math.max(Ze,w*.6),this.localAtmoLight.position.copy(this.camera.position).addScaledVector(N,18),this.localBounceLight.color.setHex(kt),this.localBounceLight.intensity=ke*4.8*gt*be*G.lerp(.85,1.35,ye)*Ze,this.localBounceLight.position.copy(this.camera.position).addScaledVector(N,-8);const dn=G.lerp(.85,.55,te)*(1-w*.45);if(this._updateDynamicIbl({planetId:P.id,zenithColor:ee.uZenithColor?ee.uZenithColor.value:this._tmpIblZenith,horizonColor:this._tmpFogColor,groundColor:this.hemiLight.groundColor,sunDir:X,sunColor:this.planetaryDirLight.color,sunElev:oe,altRatio:z,intensity:dn}),this.ssaoPass){const it=h&&he<4e3&&!re;if(this.ssaoPass.enabled=it,it&&this.ssaoPass.ssaoMaterial?.uniforms){const Pt=this.ssaoPass.ssaoMaterial.uniforms;Pt.cameraProjectionMatrix&&Pt.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),Pt.cameraInverseProjectionMatrix&&Pt.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse)}}if(this.bloomPass){if(P.id==="p2"&&S){const it=Math.min(.45,S.bloomCap*G.lerp(.82,.95,te));this.bloomPass.strength=G.lerp(.36,it,ke)}else{const Pt=Math.min(.45,P.bloomStrength*.68*be*G.lerp(.85,1.12,te));this.bloomPass.strength=G.lerp(.35,Pt,ke)}this.bloomPass.strength=Math.min(.45,this.bloomPass.strength)}if(this.renderer){const it=G.lerp(1.04,1.12,te)*(1-w*.06);this.renderer.toneMappingExposure=G.lerp(this.renderer.toneMappingExposure,G.clamp(it,.98,1.15),Math.min(1,t*3))}const ln=Math.exp(-Math.pow((z-.78)/.2,2))*.85,_n=Math.exp(-Math.pow((z-.4)/.14,2))*.55,Pn=P.id==="p1"&&A?A.ashFactor*ke*.42:0,kn=w>.08?4126184:P.id==="p1"&&A&&A.ashFactor>.38?16751192:P.particleColor;this.cockpitParticles.setAtmosphereStyle(kn,Math.max(Math.max(ln,_n),w*.72,Pn))}}if(l&&c/y>=1.06&&(h=!1),this.mode=h?"SURFACE":"ORBIT",!l||!l.config.landable||c/y>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const P of this.orbitLines)P.material.opacity=P.baseOpacity,P.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,P]of this.planetNodes)P.root.visible=!0,P.config.hasProceduralWorld&&P.orbitalBundle&&(P.orbitalBundle.surfaceMesh.visible=!0);this._hideAllReflectiveWaters(null),this.planetNodes.get("p1")?.pandoraWorld?.updateGroundClutter?.(null,99999,0),this.scene.background.lerp(new ne(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.planetaryDirLight.castShadow=!1,this.planetaryDirLight.intensity=G.lerp(this.planetaryDirLight.intensity,.22,.1),this.hemiLight.position.set(0,100,0),this.hemiLight.color.lerp(new ne(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new ne(1053724),Math.min(1,t*3)),this.hemiLight.intensity=G.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new ne(1844790),Math.min(1,t*3)),this.ambientLight.intensity=G.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=G.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=G.lerp(this.localBounceLight.intensity,0,.15),l?this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize():this._tmpPlanetToSun.copy(this.camera.position).negate().normalize(),this._updateDynamicIbl({planetId:"space",zenithColor:this._tmpIblZenith,horizonColor:this._tmpIblHorizon,groundColor:this._tmpIblGround,sunDir:this._tmpPlanetToSun,sunColor:this._tmpIblSun,sunElev:1,altRatio:2,intensity:.25}),this.ssaoPass&&(this.ssaoPass.enabled=!1),this.bloomPass&&(this.bloomPass.strength=G.lerp(this.bloomPass.strength,.38,.1)),this.renderer&&(this.renderer.toneMappingExposure=G.lerp(this.renderer.toneMappingExposure,1.05,Math.min(1,t*3))),this.cockpitParticles.setAtmosphereStyle(8965375,0)}const R=typeof this.controls.getSpeedRatio=="function"?this.controls.getSpeedRatio():0,L=h&&E>.05;if(this.radialBlurPass?.uniforms?.uBlurStrength){const F=(R>.45?G.smoothstep(R,.45,1):0)*(L?.35:1);this.radialBlurPass.uniforms.uBlurStrength.value=G.lerp(this.radialBlurPass.uniforms.uBlurStrength.value,F,Math.min(1,t*8)),this.radialBlurPass.enabled=this.radialBlurPass.uniforms.uBlurStrength.value>.002}if(this.machConeMesh&&this.machConeUniforms){const F=!!(h&&!L&&l&&c/y<.85)&&R>.72?G.smoothstep(R,.72,1)*.72:0;this.machConeUniforms.uTime.value=this.elapsedTime,this.machConeUniforms.uOpacity.value=G.lerp(this.machConeUniforms.uOpacity.value,F,Math.min(1,t*7)),this.machConeMesh.visible=this.machConeUniforms.uOpacity.value>.01}if(this._updateSolarLensflare(h,L,d,f,w),this.controls.setAltitudeContext({surfaceAltitude:c,planetRadius:_,atmoTopAlt:y,groundFloorAlt:x,minSpeed:T,metersPerUnit:Mr,submergedRatio:w,planetCenter:v||(l?l.currWorldPos:null),prevPlanetCenter:m||(l?l.prevWorldPos:null),hasPlanet:!!l,inGravityWell:u,planetDeltaPos:g,planetQuatDelta:p}),h&&this.currentDominantPlanet){const P=E>.05,F=P?Math.round(E*15):Math.max(0,Math.round((c-x)*Mr));let z=null;if(this.currentDominantPlanet.id==="p1"){const U=this.planetNodes.get("p1"),N=U?.capFrame||U?.spinGroup||U?.root;N&&(z=At.map(X=>{this._tmpStationPos.copy(X.capDir).multiplyScalar(U.config.localRadius).applyMatrix4(N.matrixWorld);const oe=Math.round(this.camera.position.distanceTo(this._tmpStationPos)*(U.config.kmScale/(620*Ri)));return{id:X.id,shortName:X.shortName,distKm:oe}}))}if(this.lastP1RegionInfo=A,this.currentDominantPlanet.id==="p2"&&M){const U=vr[M.district]||vr.city_center;this.lastP2DistrictId=U.id,this.lastP2DistrictName=M.subzone==="north_oak"?"Westbrook · North Oak":M.subzone==="dogtown"?"Pacifica · Dogtown":U.name,this.lastP2DistrictShort=M.subzone==="north_oak"?"North Oak":M.subzone==="dogtown"?"Dogtown":U.shortName}this.lastSolarPhaseName=C,this.lastIsUnderwater=P;const k=this.currentDominantPlanet.id==="p2"?`NIGHT CITY // ${this.lastP2DistrictName.toUpperCase()}`:this.currentDominantPlanet.name.toUpperCase();this.onStatusUpdate({modeText:P?"SUBMARINO":"ATMOSFÉRICO",isSurface:!0,isUnderwater:P,sectorName:k,nearestText:this.currentDominantPlanet.id==="p2"?this.lastP2DistrictName:`${this.currentDominantPlanet.name}`,altitudeText:P?`-${F.toLocaleString("es-ES")} m`:`${F.toLocaleString("es-ES")} m`,timeScale:this.timeScale,solarPhaseName:C,pandoraLandmarks:z,nightCityDistrict:this.currentDominantPlanet.id==="p2"?this.lastP2DistrictId:null})}else{this.lastP1RegionInfo=null,this.lastSolarPhaseName="ESPACIO",this.lastIsUnderwater=!1;const P=Math.max(1,Math.round(o*(a/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${i} · ${P.toLocaleString("es-ES")} km`,altitudeText:`${P.toLocaleString("es-ES")} km`,timeScale:this.timeScale,solarPhaseName:"ESPACIO"})}}getStarChartState(){this.orbitalGroup.updateMatrixWorld(!0);const e=this.camera.position.clone(),t=new b(0,0,-1).applyQuaternion(this.camera.quaternion).normalize(),n=new b(1,0,0).applyQuaternion(this.camera.quaternion).normalize(),i=Math.atan2(t.x,t.z);let o=null;if(this.crystalPalaceAnchor){const h=new b;this.crystalPalaceAnchor.getWorldPosition(h),o={id:"crystal_palace",name:"CRYSTAL PALACE",planetKey:"p2",worldPos:h,distWorld:e.distanceTo(h),loaded:!!this.crystalPalaceDetailed}}const a={p1:{shortName:"PANDORA",code:"P1",tagline:"Luna oceánica y selvática · 3 Macro-Naciones",color:"#34d8c4",accent:"#44f0a8",gravity:"0.80 G",atmoDesc:"Densa · Respirable c/máscara (Nitrógeno/Xenón)",climate:"Selva bioluminiscente, archipiélago Metkayina y calderas de Ceniza"},p2:{shortName:"NIGHT CITY",code:"P2",tagline:"Megalópolis cyberpunk · Corpo Plaza y Crystal Palace",color:"#00d8ff",accent:"#ff3b9a",gravity:"1.00 G",atmoDesc:"Densa · Niebla urbana e industrial estratificada",climate:"Cañón neón central, suburbios sombríos y Badlands áridas"},p3:{shortName:"PERUGIUS",code:"P3",tagline:"Mundo templado medieval · Ciudadela Fortaleza",color:"#6ec878",accent:"#ffba52",gravity:"0.95 G",atmoDesc:"Óptima · Cielos dorados templados",climate:"Valles verdes, fortalezas en altura y cumbres nevadas"},p4:{shortName:"CORUSCANT",code:"P4",tagline:"Ecumenópolis total · Distrito del Senado",color:"#f4a259",accent:"#ff8a3a",gravity:"1.00 G",atmoDesc:"Regulada · Tráfico orbital y cúpulas ámbar",climate:"Planeta-ciudad continuo de miles de niveles"},p5:{shortName:"GIGANTE P5",code:"P5",tagline:"Gigante gaseoso azul con sistema de anillos y 3 lunas",color:"#5fa8ff",accent:"#8ee8ff",gravity:"2.45 G",atmoDesc:"Turbulenta · Hidrógeno y helio (Solo órbita)",climate:"Tormentas de metano, anillos helados y lunas pastoras"}},r=[],l=["p1","p2","p3","p4","p5"];for(const h of l){const u=this.planetNodes.get(h);if(!u)continue;const d=u.config,f=a[h]||{shortName:h.toUpperCase(),code:h.toUpperCase(),color:"#8cc4ff"},g=u.currWorldPos.clone(),v=e.distanceTo(g),m=u.moonOrbits.map((x,T)=>({index:T,name:x.name,baseRadius:x.baseRadius,baseRadiusWorld:x.baseRadius*En,angle:x.angle,yOffset:x.yOffset,moonRadius:x.moonRadius,worldPos:x.currWorldPos.clone(),distWorld:e.distanceTo(x.currWorldPos)})),p=new ut;u.spinGroup&&u.spinGroup.getWorldQuaternion(p);const _=new ut;u.spinner?.parent&&u.spinner.parent.getWorldQuaternion(_);const y=u.capFrame?u.capFrame.quaternion.clone():new ut;r.push({key:h,id:d.id,code:f.code,name:d.name,shortName:f.shortName,tagline:f.tagline,color:f.color,accent:f.accent,gravity:f.gravity,atmoDesc:f.atmoDesc,climate:f.climate,navKey:d.navKey,landable:d.landable,semiMajorAxis:d.semiMajorAxis,semiMajorAxisWorld:d.semiMajorAxis*En,eccentricity:d.eccentricity||.04,orbitAngle:u.orbitAngle,localRadius:d.localRadius,worldRadius:d.localRadius*En,atmoTopAlt:d.localRadius*En*xs,kmScale:d.kmScale,glowCss:d.glowCss||"rgba(94, 212, 255, 0.45)",worldPos:g,distWorld:v,distKm:Math.max(0,Math.round(Math.max(0,v-d.localRadius*En)*(d.kmScale/(620*Ri)))),moons:m,hasCrystalPalace:h==="p2"&&!!o,spinWorldQuat:p,orbitalPlaneQuat:_,capLocalQuat:y,orbitalMap:u.orbitalBundle?.surfaceMesh?.material?.map||null,orbitalEmissiveMap:u.orbitalBundle?.surfaceMesh?.material?.emissiveMap||null,cloudMap:u.orbitalBundle?.upperCloudMesh?.material?.uniforms?.uCloudMap?.value||null,pandoraLandmarks:h==="p1"?At:null,nightCityLandmarks:h==="p2"?Do:null})}let c=null;if(this.mode==="SURFACE"&&this.currentDominantPlanet){const h=this.currentDominantPlanet,u=this.planetNodes.get(h.id);if(u){const d=u.capFrame||u.spinGroup||u.root,f=u.currWorldPos.clone(),g=e.clone().sub(f).normalize(),v=e.clone().negate().normalize(),m=[];if(h.id==="p1"){const p={hometree:{nation:"forest",color:"#44f0a8"},hallelujah:{nation:"forest",color:"#44f0a8"},rookery:{nation:"forest",color:"#44f0a8"},souls:{nation:"forest",color:"#44f0a8"},mushrooms:{nation:"forest",color:"#a864ff"},ashland:{nation:"ash",color:"#ff6c34"},metkayina:{nation:"water",color:"#26e8ff"}};for(const _ of At){const y=_.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld),x=p[_.id]||{nation:"forest",color:"#44f0a8"};m.push({id:_.id,shortName:_.shortName,nation:x.nation,color:x.color,worldPos:y,distKm:Math.round(e.distanceTo(y)*(h.kmScale/(620*Ri)))})}}else if(h.id==="p2")for(const p of Do){const _=p.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld);m.push({id:p.id,shortName:p.shortName,color:p.color,worldPos:_,distKm:Math.round(e.distanceTo(_)*(h.kmScale/(620*Ri)))})}else{const p=new b(0,h.localRadius,0).applyMatrix4(d.matrixWorld);m.push({id:"capital",shortName:h.id==="p3"?"Fortaleza Perugius":"Plaza del Senado",color:h.id==="p3"?"#ffcf78":"#ff944d",worldPos:p,distKm:Math.round(e.distanceTo(p)*(h.kmScale/(620*Ri)))})}c={planetKey:h.id,planetName:h.name,planetWorldPos:f,worldRadius:h.localRadius*En,radialUp:g,sunDir:v,solarPhaseName:this.lastSolarPhaseName||"DÍA",isUnderwater:!!this.lastIsUnderwater,regionNation:this.lastP1RegionInfo?.nation||"forest",regionDistrict:this.lastP2DistrictId||"city_center",regionDistrictName:this.lastP2DistrictName||"Corpo Plaza",regionDistrictShort:this.lastP2DistrictShort||"Corpo Plaza",markers:m}}}return{mode:this.mode,isUnderwater:!!this.lastIsUnderwater,shipPos:e,shipForward:t,shipRight:n,shipYawRad:i,sunPos:new b(0,0,0),sunWorldRadius:2.21*3.2*En,planets:r,crystalPalace:o,atmosphereLocal:c,dominantPlanetKey:this.currentDominantPlanet?.id||null}}}new b(0,1,0);const ks=new b,$l=new b,Ao=new b;class v1{constructor({containerEl:e,canvasEl:t,scaleEl:n,sceneManager:i,onOpenStarMap:o}){this.containerEl=e,this.canvas=t,this.ctx=t?.getContext?.("2d")||null,this.scaleEl=n,this.sceneManager=i,this.onOpenStarMap=o||(()=>{}),this.size=170,this._bindEvents(),this._resizeCanvas()}_bindEvents(){this.containerEl&&this.containerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenStarMap()})}_resizeCanvas(){if(!this.canvas||!this.ctx)return;const e=typeof window<"u"?Math.min(window.devicePixelRatio||1,2):1;this.canvas.width=this.size*e,this.canvas.height=this.size*e,this.dpr=e}update(e=0){if(!this.ctx||!this.sceneManager)return;const t=this.ctx,n=this.size,i=n*.5,o=this.dpr||1;t.setTransform(o,0,0,o,0,0),t.clearRect(0,0,n,n);const a=this.sceneManager.getStarChartState();if(!a)return;t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.strokeStyle="rgba(94, 212, 255, 0.16)",t.lineWidth=1;for(const c of[.32,.62,.9])t.beginPath(),t.arc(i,i,(i-6)*c,0,Math.PI*2),t.stroke();t.strokeStyle="rgba(94, 212, 255, 0.12)",t.beginPath(),t.moveTo(i,8),t.lineTo(i,n-8),t.moveTo(8,i),t.lineTo(n-8,i),t.stroke();const r=e*1.35%(Math.PI*2),l=t.createRadialGradient(i,i,4,i,i,i-6);l.addColorStop(0,"rgba(94, 212, 255, 0.02)"),l.addColorStop(1,"rgba(94, 212, 255, 0.12)"),t.fillStyle=l,t.beginPath(),t.moveTo(i,i),t.arc(i,i,i-6,r-.45,r),t.closePath(),t.fill(),a.mode==="SURFACE"&&a.atmosphereLocal?this._drawAtmosphericRadar(t,n,i,a):this._drawSolarRadar(t,n,i,a),t.fillStyle=a.isUnderwater?"#38f6d2":"#ffae42",t.strokeStyle="#040a14",t.lineWidth=1.4,t.beginPath(),t.moveTo(i,i-7),t.lineTo(i+5.2,i+5.2),t.lineTo(i,i+2.6),t.lineTo(i-5.2,i+5.2),t.closePath(),t.fill(),t.stroke(),t.restore()}_drawSolarRadar(e,t,n,i){let o=i.shipForward.x,a=i.shipForward.z;const r=Math.hypot(o,a);r<.001?(o=0,a=-1):(o/=r,a/=r);const l=-a,c=o,h=n-15,u=Math.hypot(i.shipPos.x,i.shipPos.z),d=Math.max(12e3,Math.min(48e3,u*1.45+11e3));this.scaleEl&&(this.scaleEl.textContent=`ÓRBITA · ${Math.round(d/100)/10}k`);const f=(v,m)=>{const p=v-i.shipPos.x,_=m-i.shipPos.z,y=p*l+_*c,x=p*o+_*a,T=Math.hypot(y,x),w=Math.pow(Math.min(1,T/d),.78),E=Math.atan2(-x,y);return{x:n+Math.cos(E)*w*h,y:n+Math.sin(E)*w*h,clipped:T>d}},g=f(i.sunPos.x,i.sunPos.z);if(e.fillStyle="rgba(255, 200, 72, 0.35)",e.beginPath(),e.arc(g.x,g.y,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffdc64",e.beginPath(),e.arc(g.x,g.y,4.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 224, 130, 0.9)",e.font='600 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText("SOL",g.x,g.y-7),i.crystalPalace){const v=f(i.crystalPalace.worldPos.x,i.crystalPalace.worldPos.z);e.strokeStyle="#ffae42",e.lineWidth=1.2,e.beginPath(),e.moveTo(v.x,v.y-3.5),e.lineTo(v.x+3.5,v.y),e.lineTo(v.x,v.y+3.5),e.lineTo(v.x-3.5,v.y),e.closePath(),e.stroke()}for(const v of i.planets){const m=f(v.worldPos.x,v.worldPos.z);e.fillStyle=v.color,e.beginPath(),e.arc(m.x,m.y,v.landable?3.8:4.6,0,Math.PI*2),e.fill(),e.fillStyle="rgba(230, 243, 255, 0.9)",e.font='700 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText(v.code,m.x,m.y-6)}}_drawAtmosphericRadar(e,t,n,i){const o=i.atmosphereLocal,a=o.radialUp;ks.copy(i.shipForward).addScaledVector(a,-i.shipForward.dot(a)),ks.lengthSq()<1e-4&&ks.copy(i.shipRight).cross(a),ks.normalize(),$l.crossVectors(ks,a).normalize();const r=n-16,l=Math.max(220,o.planetKey==="p2"?o.worldRadius*.56:o.worldRadius*1.08);if(this.scaleEl){const g=o.isUnderwater?"SUBMARINO":o.planetKey==="p1"?{forest:"BOSQUE",water:"METKAYINA",ash:"CENIZA"}[o.regionNation]||"PANDORA":o.planetKey==="p2"?(o.regionDistrictShort||o.regionDistrictName||"NIGHT CITY").toUpperCase():o.planetKey.toUpperCase();this.scaleEl.textContent=`${g} · ${o.solarPhaseName}`}const c=Ao.copy(o.sunDir).dot($l),h=Ao.dot(ks),u=Math.atan2(-h,c),d=n+Math.cos(u)*(n-11),f=n+Math.sin(u)*(n-11);e.fillStyle="#ffd65a",e.beginPath(),e.arc(d,f,4.2,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 214, 90, 0.5)",e.lineWidth=1,e.beginPath(),e.arc(d,f,7,0,Math.PI*2),e.stroke(),e.font='600 7.5px "Cascadia Code", Consolas, monospace',e.textAlign="center";for(const g of o.markers){Ao.copy(g.worldPos).sub(i.shipPos);const v=Ao.dot($l),m=Ao.dot(ks),p=Math.hypot(v,m),_=Math.min(1,Math.pow(p/l,.72)),y=Math.atan2(-m,v),x=n+Math.cos(y)*_*r,T=n+Math.sin(y)*_*r,w=Ao.dot(a)<-o.worldRadius*.45;e.globalAlpha=w?.45:.95,e.fillStyle=g.color||"#5ed4ff",e.beginPath(),e.arc(x,T,w?2.4:3.2,0,Math.PI*2),e.fill(),e.fillStyle="#e6f3ff";const E=g.shortName.length>9?g.shortName.slice(0,8)+".":g.shortName;e.fillText(E,x,T-5)}e.globalAlpha=1}}const vn=Object.freeze({CLOSED:"CLOSED",SOLAR_SYSTEM:"SOLAR_SYSTEM",PLANET_ZOOM:"PLANET_ZOOM",JUMP_CONFIRMED:"JUMP_CONFIRMED"}),x1=230*157.5,Bs=12.5,xd=4.2,_1=6,_d=5;function M1(s){const e=Math.max(0,Math.min(1,s));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function Ql(s,e=new b){if(!s)return e.set(0,0,0);const t=Math.hypot(s.x||0,s.y||0,s.z||0);if(t<1e-4)return e.set(0,0,0);const n=t/x1,o=(24+Math.pow(Math.min(1.4,n),.72)*168)/t;return e.set(s.x*o,s.y*o,s.z*o)}function y1(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=512,s.height=256;const e=s.getContext?.("2d");if(!e)return null;const t=e.createLinearGradient(0,0,0,s.height);t.addColorStop(0,"#133056"),t.addColorStop(.16,"#27598d"),t.addColorStop(.28,"#4f9cd9"),t.addColorStop(.38,"#9fd8ff"),t.addColorStop(.49,"#316aa6"),t.addColorStop(.62,"#64b8f2"),t.addColorStop(.74,"#244d80"),t.addColorStop(.86,"#488cc8"),t.addColorStop(1,"#122949"),e.fillStyle=t,e.fillRect(0,0,s.width,s.height);for(let i=0;i<28;i++){const o=i/28*s.height;e.fillStyle=i%2===0?"rgba(180, 232, 255, 0.14)":"rgba(10, 28, 56, 0.16)",e.fillRect(0,o,s.width,3+i%4)}e.fillStyle="rgba(155, 228, 255, 0.38)",e.beginPath(),e.ellipse(s.width*.62,s.height*.58,34,14,0,0,Math.PI*2),e.fill();const n=new pn(s);return n.colorSpace=Zt,n.wrapS=Wn,n.wrapT=Li,n}function Md(s,e=.72){const t=new ne(s||"#5ed4ff");return new rn({uniforms:{uColor:{value:t},uIntensity:{value:e}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Tn,side:wi})}function Jl(){return new fn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})}class b1{constructor({overlayEl:e,canvasEl:t,labelsEl:n,backBtnEl:i,closeBtnEl:o,levelTagEl:a,titleEl:r,dossierEl:l,dossierBadgeEl:c,dossierTitleEl:h,dossierDescEl:u,dossierTypeEl:d,dossierAltEl:f,dossierAtmoEl:g,dossierDistEl:v,jumpBtnEl:m,footerEl:p,sceneManager:_,controls:y,onConfirmJump:x,onStateChange:T,createRenderer:w}={}){this.overlayEl=e||null,this.canvas=t||null,this.labelsEl=n||(typeof document<"u"?document.getElementById("star-map-labels"):null),this.backBtnEl=i||null,this.closeBtnEl=o||null,this.levelTagEl=a||null,this.titleEl=r||null,this.dossierEl=l||null,this.dossierBadgeEl=c||null,this.dossierTitleEl=h||null,this.dossierDescEl=u||null,this.dossierTypeEl=d||null,this.dossierAltEl=f||null,this.dossierAtmoEl=g||null,this.dossierDistEl=v||null,this.jumpBtnEl=m||null,this.footerEl=p||null,this.sceneManager=_,this.controls=y,this.onConfirmJump=x||(E=>_?.navigateToTarget?.(E)),this.onStateChange=T||(()=>{}),this.createRenderer=w||null,this.state=vn.CLOSED,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.zoomDuration=.75,this.transitionElapsed=.75,this.transitionActive=!1,this.transitionFromCamPos=new b(0,145,195),this.transitionFromLookAt=new b(0,0,0),this.lastTimeMs=0,this.solarOrbit={theta:.62,phi:.92,radius:225},this.level2Orbit={theta:.65,phi:1.15,radius:24},this.curCamPos=new b(110,145,170),this.curLookAt=new b(0,0,0),this.viewW=1280,this.viewH=720,this.dpr=1,this.mouseX=-9999,this.mouseY=-9999,this.isPointerDown=!1,this.downX=0,this.downY=0,this.lastPointerX=0,this.lastPointerY=0,this.dragDistance=0,this._suppressNextClick=!1,this.currentSolarNodes=[],this.currentLevel2Nodes=[],this.activeHitMeshes=[],this.mapScene=null,this.mapCamera=null,this.renderer=null,this.raycaster=new J_,this.planetRigs=new Map,this.sunRig=null,this.shipBeacon=null,this.l2RingsGroup=null,this.l2PinGroup=null,this.l2PinPool=[],this.l2OrbitRingPool=[],this.disposables=[],this.svgEl=null,this.labelEls=new Map,this.lineEls=new Map,this.tooltipEl=null,this._tmpVecA=new b,this._tmpVecB=new b,this._tmpVecC=new b,this._tmpDesiredCam=new b,this._tmpDesiredLook=new b,this._boundHandlers={},this._bindEvents()}_bindEvents(){this.backBtnEl&&(this._boundHandlers.onBackClick=e=>{e.stopPropagation(),this.backToSolarSystem()},this.backBtnEl.addEventListener("click",this._boundHandlers.onBackClick)),this.closeBtnEl&&(this._boundHandlers.onCloseClick=e=>{e.stopPropagation(),this.close()},this.closeBtnEl.addEventListener("click",this._boundHandlers.onCloseClick)),this.jumpBtnEl&&(this._boundHandlers.onJumpClick=e=>{e.stopPropagation(),this.confirmJump()},this.jumpBtnEl.addEventListener("click",this._boundHandlers.onJumpClick)),this.canvas&&(this._boundHandlers.onMouseDown=e=>{if(e.button!==0)return;const t=this.canvas.getBoundingClientRect();this.handlePointerDown(e.clientX-t.left,e.clientY-t.top,e.button)},this._boundHandlers.onMouseMove=e=>{if(!this.isOpen())return;const t=this.canvas.getBoundingClientRect();this.handlePointerMove(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onMouseUp=e=>{if(!this.isPointerDown)return;const t=this.canvas.getBoundingClientRect();this.handlePointerUp(e.clientX-t.left,e.clientY-t.top,e.button)},this._boundHandlers.onClick=e=>{if(this._suppressNextClick){this._suppressNextClick=!1,this.dragDistance=0;return}const t=this.canvas.getBoundingClientRect();this.handleClick(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onDblClick=e=>{if(this.dragDistance>_d)return;const t=this.canvas.getBoundingClientRect();this.handleDoubleClick(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onWheel=e=>{this.isOpen()&&(e.preventDefault(),this.handleWheel(e.deltaY))},this._boundHandlers.onContextMenu=e=>{e.preventDefault(),this.state===vn.PLANET_ZOOM&&this.backToSolarSystem()},this.canvas.addEventListener("mousedown",this._boundHandlers.onMouseDown),this.canvas.addEventListener("click",this._boundHandlers.onClick),this.canvas.addEventListener("dblclick",this._boundHandlers.onDblClick),this.canvas.addEventListener("wheel",this._boundHandlers.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this._boundHandlers.onContextMenu)),typeof window<"u"&&(this._boundHandlers.onResize=()=>this.resize(),this._boundHandlers.onKeyDown=e=>this._onKeyDown(e),this._boundHandlers.onMouseMove&&window.addEventListener("mousemove",this._boundHandlers.onMouseMove),this._boundHandlers.onMouseUp&&window.addEventListener("mouseup",this._boundHandlers.onMouseUp),window.addEventListener("resize",this._boundHandlers.onResize),window.addEventListener("keydown",this._boundHandlers.onKeyDown))}_onKeyDown(e){if(e.code==="KeyM"&&!e.repeat){e.preventDefault(),this.isOpen()?this.close():this.open();return}this.isOpen()&&(e.code==="Escape"?(e.preventDefault(),this.close()):e.code==="Backspace"&&this.state===vn.PLANET_ZOOM?(e.preventDefault(),this.backToSolarSystem()):e.code==="Enter"&&this.state===vn.PLANET_ZOOM&&this.selectedNode&&(e.preventDefault(),this.confirmJump()))}isOpen(){return this.state!==vn.CLOSED}_trackDisposable(e){return e&&this.disposables.push(e),e}_ensureScene3D(e){if(!this.mapCamera){const t=Math.max(.5,(this.viewW||1280)/Math.max(1,this.viewH||720));this.mapCamera=new Hn(45,t,.1,1e4),this._syncCameraFromSpherical(this.curCamPos,this.curLookAt,this.solarOrbit,new b(0,0,0)),this.mapCamera.position.copy(this.curCamPos),this.mapCamera.lookAt(this.curLookAt)}this.mapScene||(this.mapScene=new dh,this.mapScene.fog=new Yr(132626,55e-5),this._buildStaticBackdrop()),!this.renderer&&this.canvas&&(typeof this.createRenderer=="function"?this.renderer=this.createRenderer(this.canvas):this.renderer=new xf({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer&&(this.renderer.setPixelRatio?.(Math.min(typeof window<"u"&&window.devicePixelRatio||1,2)),this.renderer.setSize?.(this.viewW,this.viewH,!1),this.renderer.setClearColor?.(132626,.94),"toneMapping"in this.renderer&&(this.renderer.toneMapping=Gr,this.renderer.toneMappingExposure=1.15))),e&&!this.sunRig&&this._buildSunAndPlanets(e)}_buildStaticBackdrop(){const e=this.mapScene;e.add(new Tf(2638182,.52));const t=new va(16773580,3.4,1500,.28);t.position.set(0,0,0),e.add(t);const n=new xh(4835071,.36);n.position.set(-180,140,-160),e.add(n);const i=1100,o=new Float32Array(i*3),a=new Float32Array(i*3);for(let x=0;x<i;x++){const T=Math.sin(x*12.9898)*43758.5453,w=T-Math.floor(T),E=Math.sin(x*78.233)*28411.172,A=E-Math.floor(E),M=w*Math.PI*2,S=Math.acos(2*A-1),C=1100+x%7*140;o[x*3]=C*Math.sin(S)*Math.cos(M),o[x*3+1]=C*Math.cos(S),o[x*3+2]=C*Math.sin(S)*Math.sin(M);const R=.72+.28*(x%5/4);a[x*3]=R*(x%3===0?1:.75),a[x*3+1]=R*.88,a[x*3+2]=R}const r=this._trackDisposable(new Et);r.setAttribute("position",new _t(o,3)),r.setAttribute("color",new _t(a,3));const l=this._trackDisposable(new Ai({size:3.2,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1}));e.add(new Ei(r,l));const c=new Nt,h=[34,66,98,132,168,202],u=this._trackDisposable(new Vs({color:3718648,transparent:!0,opacity:.14,depthWrite:!1}));for(const x of h){const T=[];for(let A=0;A<128;A++){const M=A/128*Math.PI*2;T.push(new b(Math.cos(M)*x,-.4,Math.sin(M)*x))}const E=this._trackDisposable(new Et().setFromPoints(T));c.add(new Dr(E,u))}const d=this._trackDisposable(new Vs({color:16762478,transparent:!0,opacity:.11,depthWrite:!1}));for(let x=0;x<12;x++){const T=x/12*Math.PI*2,w=this._trackDisposable(new Et().setFromPoints([new b(Math.cos(T)*20,-.4,Math.sin(T)*20),new b(Math.cos(T)*212,-.4,Math.sin(T)*212)]));c.add(new Kr(w,d))}e.add(c);const f=new Nt,g=this._trackDisposable(new ga(2.1,0)),v=this._trackDisposable(new fn({color:16756290,wireframe:!1,transparent:!0,opacity:.95})),m=new Ge(g,v);f.add(m);const p=this._trackDisposable(new Hs(2.6,3.2,32)),_=this._trackDisposable(new fn({color:16763760,transparent:!0,opacity:.72,side:It,depthWrite:!1})),y=new Ge(p,_);y.rotation.x=Math.PI*.5,f.add(y),e.add(f),this.shipBeacon={group:f,diamond:m,ring:y},this.l2RingsGroup=new Nt,this.l2RingsGroup.visible=!1,e.add(this.l2RingsGroup),this.l2PinGroup=new Nt,this.l2PinGroup.visible=!1,e.add(this.l2PinGroup)}_buildSunAndPlanets(e){const t=this.mapScene,n=new Nt,i=this._trackDisposable(new hn(Bs,40,28)),o=this._trackDisposable(new fn({color:16766574})),a=new Ge(i,o);n.add(a);const r=this._trackDisposable(new hn(Bs*1.24,32,24)),l=this._trackDisposable(Md("#ff9f2e",1.15));n.add(new Ge(r,l));const c=this._trackDisposable(new hn(Bs*1.55,24,18)),h=this._trackDisposable(new fn({color:16755248,transparent:!0,opacity:.14,depthWrite:!1,blending:Tn,side:On}));n.add(new Ge(c,h));const u=this._trackDisposable(new hn(Bs*1.38,16,12)),d=new Ge(u,this._trackDisposable(Jl()));n.add(d),t.add(n),this.sunRig={group:n,mesh:a,hitMesh:d};const f=this._trackDisposable(new hn(1,48,32)),g=this._trackDisposable(new hn(1.018,36,24)),v=this._trackDisposable(new hn(1.075,36,24)),m=this._trackDisposable(new hn(1,20,14)),p=this._trackDisposable(new hn(1,14,10)),_=this._trackDisposable(Jl()),y=y1();y&&this._trackDisposable(y);for(const x of e.planets){const T=x.key==="p5"?_1:xd,w=x.eccentricity||.04,E=[],A=144,M=new b;for(let ee=0;ee<A;ee++){const fe=ee/A*Math.PI*2,Ae=x.semiMajorAxis*(1-w*w)/(1+w*Math.cos(fe))*157.5;M.set(Math.cos(fe)*Ae,0,Math.sin(fe)*Ae),x.orbitalPlaneQuat&&M.applyQuaternion(x.orbitalPlaneQuat),E.push(Ql(M))}const S=this._trackDisposable(new Et().setFromPoints(E)),C=this._trackDisposable(new Vs({color:new ne(x.color),transparent:!0,opacity:.42,depthWrite:!1})),R=new Dr(S,C);t.add(R);const L=new Nt,P=new Nt;L.add(P);const F=!!x.orbitalMap,z=this._trackDisposable(new Be({color:x.key==="p5"||F?16777215:new ne(x.color),map:x.orbitalMap||(x.key==="p5"?y:null),emissive:x.orbitalEmissiveMap?new ne(16777215):new ne(x.color),emissiveMap:x.orbitalEmissiveMap||null,emissiveIntensity:x.orbitalEmissiveMap?1.15:.14,roughness:x.key==="p5"?.65:.72,metalness:.08})),k=new Ge(f,z);k.scale.setScalar(T),P.add(k);const U=this._trackDisposable(new Be({map:x.cloudMap||null,transparent:!0,opacity:x.cloudMap?.36:0,depthWrite:!1,roughness:.9})),N=new Ge(g,U);N.scale.setScalar(T),N.visible=!!x.cloudMap,P.add(N);const X=this._trackDisposable(Md(x.color,.76)),oe=new Ge(v,X);if(oe.scale.setScalar(T),P.add(oe),x.key==="p5"){const ee=this._trackDisposable(new Hs(1.38*T,2.36*T,84)),fe=this._trackDisposable(new fn({color:8378623,transparent:!0,opacity:.38,side:It,depthWrite:!1})),me=new Ge(ee,fe);me.rotation.x=Math.PI*.44,me.rotation.y=.22,P.add(me);const Ae=this._trackDisposable(new Hs(1.56*T,1.88*T,72)),ve=this._trackDisposable(new fn({color:12774655,transparent:!0,opacity:.26,side:It,depthWrite:!1})),Z=new Ge(Ae,ve);Z.rotation.copy(me.rotation),P.add(Z)}const te=new Ge(p,_);te.scale.setScalar(T*1.55),L.add(te);const we=this._trackDisposable(new Hs(T*1.48,T*1.66,48)),j=this._trackDisposable(new fn({color:new ne(x.color),transparent:!0,opacity:.75,side:It,depthWrite:!1})),ue=new Ge(we,j);ue.rotation.x=Math.PI*.5,ue.visible=!1,L.add(ue);const ge=x.moons.map((ee,fe)=>{const me=Math.max(.55,Math.min(1.15,ee.moonRadius/Math.max(1,x.worldRadius)*T*2.1)),Ae=new Nt,ve=this._trackDisposable(new Be({color:13164287,emissive:3891345,emissiveIntensity:.28,roughness:.85})),Z=new Ge(m,ve);Z.scale.setScalar(me),Ae.add(Z);const B=new Ge(p,_);return B.scale.setScalar(Math.max(1.5,me*2.2)),Ae.add(B),L.add(Ae),{index:fe,name:ee.name,group:Ae,mesh:Z,hitMesh:B,orbitChartR:T*(1.76+fe*.46)}});let pe=null;x.hasCrystalPalace&&(pe=this._buildCrystalPalace3DRig(T,p,_),L.add(pe.group)),t.add(L),this.planetRigs.set(x.key,{key:x.key,pChartR:T,orbitLine:R,orbitMat:C,rootGroup:L,spinGroup:P,globeMesh:k,globeMat:z,cloudMesh:N,cloudMat:U,haloMat:X,l1HitMesh:te,selectRingMesh:ue,moonRigs:ge,stationRig:pe,lastOrbitalMap:x.orbitalMap||null,lastEmissiveMap:x.orbitalEmissiveMap||null,lastCloudMap:x.cloudMap||null})}}_buildCrystalPalace3DRig(e,t,n){const i=new Nt,o=this._trackDisposable(new Zr(.95,.14,10,28)),a=this._trackDisposable(new Be({color:16765572,emissive:16751400,emissiveIntensity:.72,metalness:.6,roughness:.25})),r=new Ge(o,a);r.rotation.x=Math.PI*.5,i.add(r);const l=this._trackDisposable(new ga(.45,0)),c=this._trackDisposable(new fn({color:16770227}));i.add(new Ge(l,c));const h=this._trackDisposable(new tn(.06,.06,1.9,6)),u=new Ge(h,a);u.rotation.z=Math.PI*.5;const d=new Ge(h,a);d.rotation.x=Math.PI*.5,i.add(u,d);const f=new Ge(t,n);return f.scale.setScalar(1.9),i.add(f),{group:i,hitMesh:f,orbitChartR:e*1.96}}resize(){if(!this.canvas)return;const e=typeof window<"u"&&window.innerWidth||this.viewW||1280,t=typeof window<"u"&&window.innerHeight||this.viewH||720;this.dpr=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),this.viewW=Math.max(1,e),this.viewH=Math.max(1,t),this.canvas.width=Math.round(this.viewW*this.dpr),this.canvas.height=Math.round(this.viewH*this.dpr),this.mapCamera&&(this.mapCamera.aspect=this.viewW/Math.max(1,this.viewH),this.mapCamera.updateProjectionMatrix()),this.renderer&&(this.renderer.setPixelRatio?.(this.dpr),this.renderer.setSize?.(this.viewW,this.viewH,!1))}open(){this.resize(),typeof document<"u"&&document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),this.controls?.setEnabled?this.controls.setEnabled(!1):this.controls&&(this.controls.enabled=!1);const e=this.sceneManager?.getStarChartState?.()||null;this._ensureScene3D(e),this.state=vn.SOLAR_SYSTEM,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.transitionActive=!1,this.transitionElapsed=this.zoomDuration,this.lastTimeMs=typeof performance<"u"?performance.now():0,e&&(this._syncScenePositions(e,this.lastTimeMs*.001),this.currentSolarNodes=this._buildSolarNodes3D(e),this._updateCamera(.016),this._updateLabelsAndLeaderLines(e)),this.overlayEl&&this.overlayEl.classList.remove("hidden"),this._syncHeaderAndDossier(),this.onStateChange(this.state)}close(){this.state!==vn.CLOSED&&(this.state=vn.CLOSED,this.hoveredNode=null,this.isPointerDown=!1,this._suppressNextClick=!1,this.canvas?.classList?.remove("dragging"),this.canvas?.classList?.remove("hovering"),this._clearLabelDOM(),this.renderer?.renderLists?.dispose&&this.renderer.renderLists.dispose(),this.overlayEl&&this.overlayEl.classList.add("hidden"),this.controls?.setEnabled?this.controls.setEnabled(!0):this.controls&&(this.controls.enabled=!0),this.onStateChange(this.state))}selectPlanetForZoom(e){if(!e)return;const t=this.sceneManager?.getStarChartState?.();this._ensureScene3D(t),this.selectedPlanetKey=e,this.state=vn.PLANET_ZOOM,this.zoomTarget=1,this.hoveredNode=null,this.mapCamera&&(this.transitionFromCamPos.copy(this.mapCamera.position),this.transitionFromLookAt.copy(this.curLookAt),this.transitionElapsed=0,this.transitionActive=!0);const n=this.planetRigs.get(e),i=e==="sun"?Bs:n?.pChartR||xd;this.level2Orbit.radius=e==="sun"?46:i*4.4,this.level2Orbit.phi=1.12,this.level2Orbit.theta=.58,t?(this._syncScenePositions(t,0),this.l2RingsGroup&&(this.l2RingsGroup.visible=!0),this.l2PinGroup&&(this.l2PinGroup.visible=!0),this.currentLevel2Nodes=this._buildLevel2Nodes3D(t,e),this.selectedNode=this.currentLevel2Nodes[0]||null,this._updateLabelsAndLeaderLines(t)):(this.currentLevel2Nodes=[],this.selectedNode=null),this._syncHeaderAndDossier(),this.onStateChange(this.state)}backToSolarSystem(){this.state===vn.PLANET_ZOOM&&(this.state=vn.SOLAR_SYSTEM,this.zoomTarget=0,this.selectedNode=null,this.hoveredNode=null,this.l2RingsGroup&&(this.l2RingsGroup.visible=!1),this.l2PinGroup&&(this.l2PinGroup.visible=!1),this.mapCamera&&(this.transitionFromCamPos.copy(this.mapCamera.position),this.transitionFromLookAt.copy(this.curLookAt),this.transitionElapsed=0,this.transitionActive=!0),this._syncHeaderAndDossier(),this.onStateChange(this.state))}selectNodeById(e){const t=this.currentLevel2Nodes.find(n=>n.id===e);return t?(this.selectedNode=t,this._syncHeaderAndDossier(),t):null}confirmJump(){if(this.state!==vn.PLANET_ZOOM||!this.selectedNode)return null;const e=this.selectedNode.descriptor;return this.state=vn.JUMP_CONFIRMED,this.onStateChange(this.state,e),this.close(),this.onConfirmJump(e),e}getVisibleNodes(){return this.state===vn.PLANET_ZOOM?this.currentLevel2Nodes:this.currentSolarNodes}handlePointerDown(e,t,n=0){n===0&&(this.isPointerDown=!0,this.downX=e,this.downY=t,this.lastPointerX=e,this.lastPointerY=t,this.dragDistance=0,this._suppressNextClick=!1)}handlePointerMove(e,t){if(this.mouseX=e,this.mouseY=t,this.isPointerDown){const i=e-this.lastPointerX,o=t-this.lastPointerY;if(this.lastPointerX=e,this.lastPointerY=t,this.dragDistance=Math.hypot(e-this.downX,t-this.downY),this.dragDistance>_d){this._suppressNextClick=!0,this.canvas?.classList?.add("dragging"),this.hoveredNode=null,this.state===vn.PLANET_ZOOM?(this.level2Orbit.theta-=i*.0072,this.level2Orbit.phi=G.clamp(this.level2Orbit.phi-o*.0062,.16,2.94)):(this.solarOrbit.theta-=i*.0065,this.solarOrbit.phi=G.clamp(this.solarOrbit.phi-o*.0055,.14,1.48));return}}const n=this._pickNodeAt(e,t);this.hoveredNode=n,this.canvas?.classList?.toggle("hovering",!!n)}handlePointerUp(e,t,n=0){n===0&&(this.isPointerDown=!1,this.canvas?.classList?.remove("dragging"),this.dragDistance=Math.hypot(e-this.downX,t-this.downY))}handleWheel(e){const t=1+Math.max(-.35,Math.min(.35,e*.0011));if(this.state===vn.PLANET_ZOOM){const n=this.planetRigs.get(this.selectedPlanetKey),i=this.selectedPlanetKey==="sun"?22:(n?.pChartR||4.2)*2.1,o=this.selectedPlanetKey==="sun"?120:(n?.pChartR||4.2)*14;this.level2Orbit.radius=G.clamp(this.level2Orbit.radius*t,i,o)}else this.solarOrbit.radius=G.clamp(this.solarOrbit.radius*t,68,430)}handleClick(e,t){this.mouseX=e,this.mouseY=t;const n=this._pickNodeAt(e,t);n&&(this.state===vn.SOLAR_SYSTEM?this.selectPlanetForZoom(n.planetKey):this.state===vn.PLANET_ZOOM&&(this.selectedNode=n,this._syncHeaderAndDossier()))}handleDoubleClick(e,t){if(this.state!==vn.PLANET_ZOOM)return;const n=this._pickNodeAt(e,t);n&&(this.selectedNode=n,this._syncHeaderAndDossier(),this.confirmJump())}_pickNodeAt(e,t){if(!this.mapScene||!this.mapCamera)return null;this.mapScene.updateMatrixWorld(!0),this.mapCamera.updateMatrixWorld();const n=e/Math.max(1,this.viewW)*2-1,i=-(t/Math.max(1,this.viewH))*2+1;this.raycaster.setFromCamera({x:n,y:i},this.mapCamera);const o=this.getVisibleNodes(),a=[];for(const l of o)l.occluded||!l.hitMesh||(l.hitMesh.userData.starNode=l,a.push(l.hitMesh));const r=this.raycaster.intersectObjects(a,!1);return r.length>0&&r[0].object.userData.starNode||null}_syncHeaderAndDossier(){const e=this.state===vn.PLANET_ZOOM;if(this.backBtnEl&&this.backBtnEl.classList.toggle("hidden",!e),this.levelTagEl&&(this.levelTagEl.textContent=e?"SUB-MAPA PLANETARIO 3D // NIVEL 2":"CARTOGRAFÍA ESTELAR 3D // NIVEL 1"),this.titleEl)if(e&&this.selectedPlanetKey){const i=this.sceneManager?.getStarChartState?.()?.planets?.find(o=>o.key===this.selectedPlanetKey);this.titleEl.textContent=this.selectedPlanetKey==="sun"?"SOL CENTRAL // ESTRELLA TIPO G":`${i?.code||""} · ${i?.shortName||this.selectedPlanetKey.toUpperCase()}`}else this.titleEl.textContent="SISTEMA SOLAR CENTRAL";if(this.footerEl&&(this.footerEl.textContent=e?"Arrastra para orbitar el planeta en 3D · Rueda para zoom · Clic en nodo · Doble clic o Enter para saltar · Backspace volver":"Arrastra para orbitar en 3D · Rueda para zoom · Clic en un planeta para inspeccionarlo antes de saltar · [M] / [ESC] cerrar"),!this.dossierEl)return;if(!e||!this.selectedNode){this.dossierEl.classList.add("hidden");return}const t=this.selectedNode;this.dossierEl.classList.remove("hidden"),this.dossierBadgeEl&&(this.dossierBadgeEl.textContent=t.badge||"NODO TÁCTICO"),this.dossierTitleEl&&(this.dossierTitleEl.textContent=t.title||t.label),this.dossierDescEl&&(this.dossierDescEl.textContent=t.description||""),this.dossierTypeEl&&(this.dossierTypeEl.textContent=t.destTypeLabel||"Órbita"),this.dossierAltEl&&(this.dossierAltEl.textContent=t.insertionAlt||"--"),this.dossierAtmoEl&&(this.dossierAtmoEl.textContent=t.atmoGravity||"--"),this.dossierDistEl&&(this.dossierDistEl.textContent=t.distText||"--")}_syncCameraFromSpherical(e,t,n,i){e.set(i.x+n.radius*Math.sin(n.phi)*Math.cos(n.theta),i.y+n.radius*Math.cos(n.phi),i.z+n.radius*Math.sin(n.phi)*Math.sin(n.theta)),t.copy(i)}_getShipChartPos(e){let t=null,n=1/0;for(const o of e.planets){const a=e.shipPos.distanceTo(o.worldPos);a<n&&(n=a,t=o)}const i=Ql(e.shipPos);if(t&&n<t.worldRadius*6){const o=this.planetRigs.get(t.key);if(o){const a=e.shipPos.clone().sub(t.worldPos),r=a.length(),l=Math.max(1.01,r/Math.max(1,t.worldRadius)),c=r>1e-4?a.divideScalar(r):new b(0,1,0),h=o.rootGroup.position.clone().addScaledVector(c,o.pChartR*Math.min(2.8,l)),u=G.clamp(1-(n-t.worldRadius*2)/(t.worldRadius*4),0,1);return i.lerp(h,u)}}return i}_syncScenePositions(e,t){for(const n of e.planets){const i=this.planetRigs.get(n.key);if(!i)continue;Ql(n.worldPos,i.rootGroup.position),n.spinWorldQuat&&i.spinGroup.quaternion.copy(n.spinWorldQuat),n.orbitalMap&&n.orbitalMap!==i.lastOrbitalMap&&(i.globeMat.map=n.orbitalMap,i.globeMat.color.setHex(16777215),i.globeMat.needsUpdate=!0,i.lastOrbitalMap=n.orbitalMap),n.orbitalEmissiveMap!==i.lastEmissiveMap&&(i.globeMat.emissiveMap=n.orbitalEmissiveMap||null,i.globeMat.emissive.setHex(n.orbitalEmissiveMap?16777215:0),n.orbitalEmissiveMap||i.globeMat.emissive.set(n.color),i.globeMat.emissiveIntensity=n.orbitalEmissiveMap?1.15:.14,i.globeMat.needsUpdate=!0,i.lastEmissiveMap=n.orbitalEmissiveMap||null),n.cloudMap!==i.lastCloudMap&&(i.cloudMat.map=n.cloudMap||null,i.cloudMat.opacity=n.cloudMap?.36:0,i.cloudMesh.visible=!!n.cloudMap,i.cloudMat.needsUpdate=!0,i.lastCloudMap=n.cloudMap||null);const o=this.state===vn.PLANET_ZOOM&&this.selectedPlanetKey===n.key,a=this.hoveredNode?.planetKey===n.key;if(i.orbitMat.opacity=o?.85:a?.72:.34,i.selectRingMesh.visible=this.state===vn.SOLAR_SYSTEM&&a,i.moonRigs.forEach((r,l)=>{const c=n.moons[l];if(!c)return;const h=this._tmpVecA.copy(c.worldPos).sub(n.worldPos),u=h.length();u>1e-4?h.multiplyScalar(r.orbitChartR/u):h.set(r.orbitChartR,0,0),r.group.position.copy(h),r.group.rotation.y=t*.4}),i.stationRig&&e.crystalPalace){const r=this._tmpVecA.copy(e.crystalPalace.worldPos).sub(n.worldPos),l=r.length();l>1e-4?r.multiplyScalar(i.stationRig.orbitChartR/l):r.set(-i.stationRig.orbitChartR,1.5,0),i.stationRig.group.position.copy(r),i.stationRig.group.rotation.y=t*.55}}if(this.shipBeacon){const n=this._getShipChartPos(e);this.shipBeacon.group.position.copy(n),this.shipBeacon.diamond.rotation.y=t*1.4;const i=.88+Math.sin(t*4.5)*.25;this.shipBeacon.ring.scale.setScalar(i)}}_buildSolarNodes3D(e){const n=[{id:"sun",planetKey:"sun",key:"sun",label:"SOL CENTRAL",tagline:"Estrella central HDR · Iluminación del sistema",color:"#ffcc44",distKm:Math.max(0,Math.round(Math.max(0,e.shipPos.length()-e.sunWorldRadius)*19.35483870967742)),hitMesh:this.sunRig?.hitMesh||null,worldAnchor:new b(0,0,0),x:0,y:0,occluded:!1,descriptor:{type:"sun_orbit"}}];for(const i of e.planets){const o=this.planetRigs.get(i.key);o&&n.push({id:i.key,planetKey:i.key,key:i.key,planet:i,label:`${i.code} · ${i.shortName}`,shortName:i.shortName,tagline:i.tagline,color:i.color,accent:i.accent,distKm:i.distKm,hitMesh:o.l1HitMesh,worldAnchor:o.rootGroup.position.clone(),x:0,y:0,occluded:!1})}return n}_ensureL2PinPool(e){for(;this.l2PinPool.length<e;){const t=new Nt,n=this._trackDisposable(new tn(.05,.05,.75,6)),i=this._trackDisposable(new fn({color:16777215})),o=new Ge(n,i);o.position.y=.375;const a=this._trackDisposable(new ga(.32,0)),r=this._trackDisposable(new fn({color:16777215})),l=new Ge(a,r);l.position.y=.85;const c=this._trackDisposable(new Hs(.36,.48,24)),h=this._trackDisposable(new fn({color:16777215,side:It,transparent:!0,opacity:.82})),u=new Ge(c,h);u.rotation.x=Math.PI*.5,u.position.y=.06;const d=this._trackDisposable(new hn(.78,12,8)),f=new Ge(d,this._trackDisposable(Jl()));f.position.y=.6,t.add(o,l,u,f),this.l2PinGroup.add(t),this.l2PinPool.push({group:t,stemMat:i,head:l,headMat:r,ringMat:h,hitMesh:f})}}_ensureL2OrbitRingPool(e){for(;this.l2OrbitRingPool.length<e;){const t=[];for(let a=0;a<96;a++){const r=a/96*Math.PI*2;t.push(new b(Math.cos(r),0,Math.sin(r)))}const n=this._trackDisposable(new Et().setFromPoints(t)),i=this._trackDisposable(new Vs({color:6214911,transparent:!0,opacity:.42,depthWrite:!1})),o=new Dr(n,i);this.l2RingsGroup.add(o),this.l2OrbitRingPool.push({line:o,mat:i})}}_buildLevel2Nodes3D(e,t){if(t==="sun"){const v=Math.max(0,Math.round(Math.max(0,e.shipPos.length()-e.sunWorldRadius)*19.35483870967742));this._ensureL2PinPool(1),this._ensureL2OrbitRingPool(1);const m=this.l2OrbitRingPool[0];m.line.visible=!0,m.line.position.set(0,0,0),m.line.scale.setScalar(Bs*1.65),m.mat.color.set("#ffd24c");const p=this.l2PinPool[0];p.group.visible=!0,p.group.position.set(Bs*1.65,0,0),p.group.quaternion.identity(),p.stemMat.color.set("#ffd24c"),p.headMat.color.set("#ffd24c"),p.ringMat.color.set("#ffd24c");for(let _=1;_<this.l2PinPool.length;_++)this.l2PinPool[_].group.visible=!1;for(let _=1;_<this.l2OrbitRingPool.length;_++)this.l2OrbitRingPool[_].line.visible=!1;return[{id:"sun_orbit",label:"Órbita Panorámica del Sistema",title:"SOL CENTRAL // ÓRBITA DE OBSERVACIÓN",badge:"ESTRELLA PRINCIPAL",description:"Vista exterior segura frente al disco solar de plasma y las 5 órbitas keplerianas.",destTypeLabel:"Órbita Estelar",insertionAlt:"1.150.000 km",atmoGravity:"Corona Plasma · Radiación Extrema",distText:`${v.toLocaleString("es-ES")} km`,color:"#ffd24c",kind:"orbit",hitMesh:p.hitMesh,worldAnchor:p.group.position.clone(),x:0,y:0,occluded:!1,descriptor:{type:"sun_orbit"}}]}const n=e.planets.find(v=>v.key===t),i=this.planetRigs.get(t);if(!n||!i)return[];const o=[],a=i.rootGroup.position,r=i.pChartR,l=new b(0,1,0);let c=0,h=0;const u=r*1.52;this._ensureL2OrbitRingPool(1+i.moonRigs.length+(i.stationRig?1:0)),this._ensureL2PinPool(10);const d=this.l2OrbitRingPool[h++];d.line.visible=!0,d.line.position.copy(a),d.line.scale.setScalar(u),d.mat.color.set(n.color),d.mat.opacity=.56;const f=this.l2PinPool[c++];f.group.visible=!0;const g=new b(a.x+Math.cos(-.68)*u,a.y+.2,a.z+Math.sin(-.68)*u);if(f.group.position.copy(g),f.group.quaternion.identity(),f.stemMat.color.set(n.color),f.headMat.color.set(n.color),f.ringMat.color.set(n.color),o.push({id:`${n.key}_orbit`,label:"Órbita Baja",title:`${n.shortName} · ÓRBITA ESTACIONARIA`,badge:"ÓRBITA BAJA",description:n.tagline,destTypeLabel:"Órbita Planetaria",insertionAlt:`${Math.round(n.atmoTopAlt*1.15*.062).toLocaleString("es-ES")} km`,atmoGravity:`${n.atmoDesc} · ${n.gravity}`,distText:`${n.distKm.toLocaleString("es-ES")} km`,color:n.color,kind:"orbit",hitMesh:f.hitMesh,_pinObj:f,worldAnchor:g,x:0,y:0,occluded:!1,descriptor:{type:"planet_orbit",planetKey:n.key}}),n.landable){const v=i.spinGroup.quaternion,m=n.capLocalQuat||new ut,p=({id:_,label:y,title:x,badge:T,description:w,insertionAlt:E,color:A,localDir:M,descriptor:S})=>{const C=M.clone().normalize().applyQuaternion(m).applyQuaternion(v).normalize(),R=a.clone().addScaledVector(C,r*1.015),L=this.l2PinPool[c++];L.group.visible=!0,L.group.position.copy(R),L.group.quaternion.setFromUnitVectors(l,C),L.stemMat.color.set(A),L.headMat.color.set(A),L.ringMat.color.set(A),o.push({id:_,label:y,title:x,badge:T,description:w,destTypeLabel:"Descenso Atmosférico",insertionAlt:E,atmoGravity:`${n.atmoDesc} · ${n.gravity}`,distText:`${n.distKm.toLocaleString("es-ES")} km`,color:A,kind:"surface",surfaceNormal:C,hitMesh:L.hitMesh,_pinObj:L,worldAnchor:R,x:0,y:0,occluded:!1,descriptor:S})};if(n.key==="p1"){const _=[{landmarkId:"hometree",label:"Nación del Bosque · Árbol-Casa",short:"Bosque (Hometree)",badge:"NACIÓN DEL BOSQUE",desc:"Gran Continente Selvático continuo (45% del globo): árboles gigantes paraguas, secuoyas, manadas y ríos bioluminiscentes.",fallbackDir:new b(.15,.96,.22),color:"#44f0a8"},{landmarkId:"metkayina",label:"Nación del Agua · Metkayina",short:"Agua (Metkayina)",badge:"NACIÓN DEL AGUA · BUCEO",desc:"Océano y Archipiélago coralino: aldeas flotantes sobre balsas, laguna turquesa inmersiva, Tulkun, Ilu y arrecifes luminosos.",fallbackDir:new b(-.78,.16,.6),color:"#26e8ff"},{landmarkId:"ashland",label:"Nación de la Ceniza · Volcanes",short:"Ceniza (Mangkwan)",badge:"NACIÓN DE LA CENIZA",desc:"Península volcánica oscura tras la cordillera basáltica: 3 volcanes humeantes, fisuras de lava, árboles calcinados y hogueras.",fallbackDir:new b(.84,-.05,.54),color:"#ff6c34"},{landmarkId:"hallelujah",label:"Montañas Aleluya",short:"Aleluya",badge:"ZONA DE MONTAÑA",desc:"Islas rocosas flotantes entre cascadas, lianas luminosas y bandadas de Ikran y Toruk.",fallbackDir:new b(-.24,.86,-.45),color:"#7ef5c4"},{landmarkId:"souls",label:"Árbol de las Almas",short:"Árbol Almas",badge:"SANTUARIO",desc:"Cráter sagrado rodeado de arcos de piedra y filamentos luminosos de Eywa.",fallbackDir:new b(.28,.88,-.38),color:"#c978ff"}];for(const y of _){const x=n.pandoraLandmarks?.find(T=>T.id===y.landmarkId);p({id:`p1_surface_${y.landmarkId}`,label:y.short,title:y.label.toUpperCase(),badge:y.badge,description:y.desc,insertionAlt:"1.850 m s.n.m.",color:y.color,localDir:x?.capDir||y.fallbackDir,descriptor:{type:"planet_surface",planetKey:"p1",landmarkId:y.landmarkId}})}}else if(n.key==="p2"&&Array.isArray(n.nightCityLandmarks))for(const _ of n.nightCityLandmarks)p({id:`p2_surface_${_.id}`,label:_.shortName,title:_.name.toUpperCase(),badge:_.badge||"DISTRITO",description:_.description,insertionAlt:_.id==="city_center"?"450 m (Nivel Cañón)":"720 m (Vuelo Rasante)",color:_.color,localDir:_.capDir||new b(0,1,0),descriptor:{type:"planet_surface",planetKey:"p2",landmarkId:_.id}});else{const _={p2:{short:"Corpo Plaza (Superficie)",title:"NIGHT CITY // CAÑÓN CENTRAL",desc:"Descenso atravesando nubes hacia Corpo Plaza y los 7 distritos reales de Night City."},p3:{short:"Ciudadela Fortaleza",title:"PERUGIUS // CIUDADELA DEL VALLE",desc:"Planeo sobre valles boscosos hacia la fortaleza flotante y murallas doradas del mundo medieval."},p4:{short:"Distrito del Senado",title:"CORUSCANT // PLAZA DEL SENADO",desc:"Entrada atmosférica hacia la ecumenópolis global con anillos de luz dorada y tráfico orbital."}}[n.key];p({id:`${n.key}_surface`,label:_.short,title:_.title,badge:"ATERRIZAJE EN SUPERFICIE",description:_.desc,insertionAlt:n.key==="p2"?"450 m (Nivel Cañón)":"2.100 m s.n.m.",color:n.accent,localDir:new b(.32,.85,.42),descriptor:{type:"planet_surface",planetKey:n.key}})}}if(n.hasCrystalPalace&&e.crystalPalace&&i.stationRig){const v=Math.round(e.crystalPalace.distWorld*(n.kmScale/2976)),m=a.clone().add(i.stationRig.group.position),p=this.l2OrbitRingPool[h++];p.line.visible=!0,p.line.position.copy(a),p.line.scale.setScalar(i.stationRig.orbitChartR),p.mat.color.set("#ffae42"),p.mat.opacity=.48,o.push({id:"station_crystal_palace",label:"Crystal Palace",title:"ESTACIÓN ORBITAL CRYSTAL PALACE",badge:"ESTACIÓN ESPACIAL",description:"Plataforma orbital de lujo sobre Night City con 36 hangares iluminados y anillos rotatorios.",destTypeLabel:"Estación Orbital",insertionAlt:"Órbita Alta (320 km)",atmoGravity:"Gravedad Artificial · Vacío",distText:`${v.toLocaleString("es-ES")} km`,color:"#ffae42",kind:"station",hitMesh:i.stationRig.hitMesh,worldAnchor:m,x:0,y:0,occluded:!1,descriptor:{type:"station",stationId:"crystal_palace"}})}n.moons.forEach((v,m)=>{const p=i.moonRigs[m];if(!p)return;const _=this.l2OrbitRingPool[h++];_.line.visible=!0,_.line.position.copy(a),_.line.scale.setScalar(p.orbitChartR),_.mat.color.set("#9ec5ff"),_.mat.opacity=.34;const y=a.clone().add(p.group.position),x=Math.max(1,Math.round(Math.max(0,v.distWorld-v.moonRadius)*(n.kmScale/(620*4.8)))),T=Math.round(v.baseRadiusWorld*(n.kmScale/(620*4.8)));o.push({id:`${n.key}_moon_${m}`,label:v.name,title:v.name.toUpperCase(),badge:"SATÉLITE NATURAL",description:`Órbita lunar estacionaria alrededor de ${v.name} con seguimiento gravitatorio sincronizado.`,destTypeLabel:"Órbita Lunar",insertionAlt:`Órbita a ${T.toLocaleString("es-ES")} km`,atmoGravity:"Exosfera tenue · 0.18 G",distText:`${x.toLocaleString("es-ES")} km`,color:"#b8d8ff",kind:"moon",hitMesh:p.hitMesh,worldAnchor:y,x:0,y:0,occluded:!1,descriptor:{type:"moon",planetKey:n.key,moonIndex:v.index}})});for(let v=c;v<this.l2PinPool.length;v++)this.l2PinPool[v].group.visible=!1;for(let v=h;v<this.l2OrbitRingPool.length;v++)this.l2OrbitRingPool[v].line.visible=!1;for(let v=0;v<o.length;v++){const m=o[v];if(m._pinObj){const p=this.selectedNode?.id===m.id,_=this.hoveredNode?.id===m.id;m._pinObj.head.scale.setScalar(p?1.45:_?1.25:1)}}return o}_refreshLevel2NodeSelectionPreservingId(e,t){if(e){const n=this.currentLevel2Nodes.find(i=>i.id===e);n&&(this.selectedNode=n)}t&&(this.hoveredNode=this.currentLevel2Nodes.find(n=>n.id===t)||null)}_updateCamera(e){const t=this.state===vn.PLANET_ZOOM,n=this._tmpDesiredLook.set(0,0,0);if(t&&this.selectedPlanetKey&&this.selectedPlanetKey!=="sun"){const o=this.planetRigs.get(this.selectedPlanetKey);o&&n.copy(o.rootGroup.position)}const i=t?this.level2Orbit:this.solarOrbit;if(this._syncCameraFromSpherical(this._tmpDesiredCam,n,i,n),this.transitionActive){this.transitionElapsed=Math.min(this.zoomDuration,this.transitionElapsed+e);const o=this.transitionElapsed/Math.max(.01,this.zoomDuration),a=M1(o);this.zoomProgress=t?a:1-a,this.curCamPos.lerpVectors(this.transitionFromCamPos,this._tmpDesiredCam,a),this.curLookAt.lerpVectors(this.transitionFromLookAt,this._tmpDesiredLook,a),o>=1&&(this.transitionActive=!1,this.zoomProgress=t?1:0)}else{const o=1-Math.exp(-12*Math.max(.001,e));this.curCamPos.lerp(this._tmpDesiredCam,o),this.curLookAt.lerp(this._tmpDesiredLook,o),this.zoomProgress=t?1:0}this.mapCamera.position.copy(this.curCamPos),this.mapCamera.lookAt(this.curLookAt),this.mapCamera.updateMatrixWorld()}_ensureLabelOverlayInit(){return!this.labelsEl||typeof document>"u"?!1:(this.svgEl||(this.svgEl=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svgEl.setAttribute("class","sm-leader-svg"),this.labelsEl.appendChild(this.svgEl)),this.tooltipEl||(this.tooltipEl=document.createElement("div"),this.tooltipEl.className="sm-hover-tooltip",this.tooltipEl.style.display="none",this.labelsEl.appendChild(this.tooltipEl)),!0)}_clearLabelDOM(){for(const e of this.labelEls.values())e.style.display="none";for(const e of this.lineEls.values())e.style.display="none";this.tooltipEl&&(this.tooltipEl.style.display="none")}_updateLabelsAndLeaderLines(e){const t=this.getVisibleNodes(),n=this.state===vn.PLANET_ZOOM,i=n&&this.selectedPlanetKey&&this.selectedPlanetKey!=="sun"?this.planetRigs.get(this.selectedPlanetKey):null,o=i?i.rootGroup.position:null,a=this._tmpVecA,r=this._tmpVecB,l=n&&o?o.clone().project(this.mapCamera):null,c=l?(l.x*.5+.5)*this.viewW:this.viewW*.5,h=l?(-l.y*.5+.5)*this.viewH:this.viewH*.5;for(const g of t){if(g.kind==="surface"&&g.surfaceNormal&&o){r.copy(this.mapCamera.position).sub(o).normalize();const v=g.surfaceNormal.dot(r);g.facingDot=v,g.occluded=v<.08}else g.facingDot=1,g.occluded=!1;a.copy(g.worldAnchor).project(this.mapCamera),(a.z<-1||a.z>1)&&(g.occluded=!0),g.x=(a.x*.5+.5)*this.viewW,g.y=(-a.y*.5+.5)*this.viewH}if(!this._ensureLabelOverlayInit())return;const u=new Set,d=(g,v,m,p,_,y,x,T="")=>{u.add(g);let w=this.labelEls.get(g);if(w||(w=document.createElement("div"),this.labelsEl.appendChild(w),this.labelEls.set(g,w)),w.className=`sm-label ${T}`.trim(),w.style.display="block",w.style.left=`${Math.round(_)}px`,w.style.top=`${Math.round(y)}px`,x&&(w.style.borderColor=x),w.textContent!==v&&(w.textContent=v),Math.hypot(_-m,y-p)>2){let E=this.lineEls.get(g);E||(E=document.createElementNS("http://www.w3.org/2000/svg","line"),E.setAttribute("stroke-width","1.1"),E.setAttribute("stroke-opacity","0.55"),this.svgEl.appendChild(E),this.lineEls.set(g,E)),E.style.display="block",E.setAttribute("x1",`${m.toFixed(1)}`),E.setAttribute("y1",`${p.toFixed(1)}`),E.setAttribute("x2",`${_.toFixed(1)}`),E.setAttribute("y2",`${(y-2).toFixed(1)}`),E.setAttribute("stroke",x||"#5ed4ff")}};for(const g of t){if(g.occluded||g.x<-80||g.x>this.viewW+80||g.y<-80||g.y>this.viewH+80)continue;const v=n&&this.selectedNode?.id===g.id,m=this.hoveredNode?.id===g.id;let p=g.x,_=g.y-18;if(n&&g.kind==="surface"){const x=g.x-c,T=g.y-h,w=Math.max(1,Math.hypot(x,T));p=g.x+x/w*26,_=g.y+T/w*26-6}const y=`${v?"selected":""} ${m?"hovered":""}`.trim();d(g.id,g.label,g.x,g.y,p,_,v?"#ffae42":g.color,y)}if(this.shipBeacon&&e&&(a.copy(this.shipBeacon.group.position).project(this.mapCamera),a.z>=-1&&a.z<=1)){const g=(a.x*.5+.5)*this.viewW,v=(-a.y*.5+.5)*this.viewH,m=e.isUnderwater?"[ TÚ · OCÉANO ]":e.mode==="SURFACE"?"[ TÚ · ATMÓSFERA ]":"[ TÚ ]";d("__self_beacon__",m,g,v,g,v,"#ffae42","self-beacon")}for(const[g,v]of this.labelEls.entries())u.has(g)||(v.style.display="none");for(const[g,v]of this.lineEls.entries())u.has(g)||(v.style.display="none");const f=this.hoveredNode;if(f&&!f.occluded&&!n){this.tooltipEl.style.display="block";const g=Math.min(this.viewW-275,Math.max(16,f.x+18)),v=Math.max(76,Math.min(this.viewH-125,f.y-18));this.tooltipEl.style.left=`${Math.round(g)}px`,this.tooltipEl.style.top=`${Math.round(v)}px`,this.tooltipEl.style.borderColor=f.color||"#ffae42",this.tooltipEl.innerHTML=`<h4>${f.label}</h4><div class="sm-ht-dist">DISTANCIA: ${Number(f.distKm||0).toLocaleString("es-ES")} KM · CLIC PARA ZOOM</div><p>${f.tagline||""}</p>`}else this.tooltipEl.style.display="none"}updateAndDraw(e=typeof performance<"u"?performance.now():0){if(!this.isOpen()||!this.sceneManager)return;const t=this.lastTimeMs?Math.min(.1,Math.max(.001,(e-this.lastTimeMs)/1e3)):.016;this.lastTimeMs=e;const n=e*.001,i=this.sceneManager.getStarChartState();if(this._ensureScene3D(i),!this.mapScene||!this.mapCamera)return;this._syncScenePositions(i,n);const o=this.state===vn.PLANET_ZOOM;if(this.l2RingsGroup&&(this.l2RingsGroup.visible=o),this.l2PinGroup&&(this.l2PinGroup.visible=o),o&&this.selectedPlanetKey){const a=this.selectedNode?.id||null,r=this.hoveredNode?.id||null;this.currentLevel2Nodes=this._buildLevel2Nodes3D(i,this.selectedPlanetKey),this._refreshLevel2NodeSelectionPreservingId(a,r)}else this.currentSolarNodes=this._buildSolarNodes3D(i);this._updateCamera(t),this._updateLabelsAndLeaderLines(i),this.renderer&&this.renderer.render(this.mapScene,this.mapCamera)}dispose(){this.close(),this.backBtnEl&&this._boundHandlers.onBackClick&&this.backBtnEl.removeEventListener("click",this._boundHandlers.onBackClick),this.closeBtnEl&&this._boundHandlers.onCloseClick&&this.closeBtnEl.removeEventListener("click",this._boundHandlers.onCloseClick),this.jumpBtnEl&&this._boundHandlers.onJumpClick&&this.jumpBtnEl.removeEventListener("click",this._boundHandlers.onJumpClick),this.canvas&&(this._boundHandlers.onMouseDown&&this.canvas.removeEventListener("mousedown",this._boundHandlers.onMouseDown),this._boundHandlers.onClick&&this.canvas.removeEventListener("click",this._boundHandlers.onClick),this._boundHandlers.onDblClick&&this.canvas.removeEventListener("dblclick",this._boundHandlers.onDblClick),this._boundHandlers.onWheel&&this.canvas.removeEventListener("wheel",this._boundHandlers.onWheel),this._boundHandlers.onContextMenu&&this.canvas.removeEventListener("contextmenu",this._boundHandlers.onContextMenu)),typeof window<"u"&&(this._boundHandlers.onMouseMove&&window.removeEventListener("mousemove",this._boundHandlers.onMouseMove),this._boundHandlers.onMouseUp&&window.removeEventListener("mouseup",this._boundHandlers.onMouseUp),this._boundHandlers.onResize&&window.removeEventListener("resize",this._boundHandlers.onResize),this._boundHandlers.onKeyDown&&window.removeEventListener("keydown",this._boundHandlers.onKeyDown));for(const e of this.disposables)e?.dispose?.();this.disposables=[],this.renderer&&(this.renderer.renderLists?.dispose?.(),this.renderer.dispose?.(),this.renderer=null),this.labelsEl&&(this.labelsEl.innerHTML=""),this.labelEls.clear(),this.lineEls.clear(),this.svgEl=null,this.tooltipEl=null,this.mapScene=null,this.mapCamera=null}}const Gf=document.getElementById("app-canvas"),yd=document.getElementById("loading-screen"),br=document.getElementById("loading-status"),bd=document.getElementById("loading-bar-fill"),ec=document.getElementById("hud-mode"),Sd=document.getElementById("hud-sector"),wd=document.getElementById("hud-nearest"),Ad=document.getElementById("hud-altitude"),Ed=document.getElementById("hud-time-btn"),Io=document.getElementById("hud-time"),Sr=document.getElementById("pandora-landmarks-bar"),Td=document.getElementById("hud-speed"),Cd=document.getElementById("hud-speed-unit"),Pd=document.getElementById("hud-speed-bar"),Rd=document.getElementById("hud-mult"),tc=document.getElementById("hud-boost"),Dd=document.getElementById("hud-coords"),Yo=new dh;Yo.background=new ne(198156);const Vi=new Hn(60,window.innerWidth/window.innerHeight,.05,48e4);Yo.add(Vi);const qi=new xf({canvas:Gf,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});qi.setSize(window.innerWidth,window.innerHeight);qi.setPixelRatio(Math.min(window.devicePixelRatio,2));qi.outputColorSpace=Zt;qi.toneMapping=Gr;qi.toneMappingExposure=1.05;qi.shadowMap.enabled=!0;qi.shadowMap.type=Nd;function S1(s,e){s.kernelRadius=6,s.minDistance=.001,s.maxDistance=.04,s.enabled=!1,s.ssaoMaterial.uniforms.uLogFar={value:Math.log2(e.far+1)};let t=s.ssaoMaterial.fragmentShader;t=t.replace("uniform float cameraFar;",`uniform float cameraFar;
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
					float sampleDepth = -samplePoint.z / 65.0;`).replace("gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );","gl_FragColor = vec4( vec3( 1.0 - occlusion * 0.42 ), 1.0 );"),s.ssaoMaterial.fragmentShader=t,s.ssaoMaterial.needsUpdate=!0,s.overrideVisibility=function(){const n=this.scene,i=this._visibilityCache;n.traverse(o=>{i.set(o,o.visible),(o.isPoints||o.isLine||o.userData?.skipSSAO||o.isMesh&&o.material&&!Array.isArray(o.material)&&o.material.transparent&&!o.isWater)&&(o.visible=!1)})}}const eo=new oM(qi),w1=new aM(Yo,Vi);eo.addPass(w1);const il=new bs(Yo,Vi,window.innerWidth,window.innerHeight,16);S1(il,Vi);eo.addPass(il);const Ch=new Go(new Oe(window.innerWidth,window.innerHeight),.42,.34,.96);eo.addPass(Ch);const Ph=new Pf(ey);Ph.enabled=!1;eo.addPass(Ph);const A1=new hM;eo.addPass(A1);const Hf=uM(8500,19e4);Yo.add(Hf);const Vf=new dM(Vi,420),ys=new fM(Vi,Gf),ti=new g1({scene:Yo,camera:Vi,renderer:qi,controls:ys,starfield:Hf,cockpitParticles:Vf,bloomPass:Ch,ssaoPass:il,radialBlurPass:Ph,onStatusUpdate:s=>{if(ec){ec.textContent=s.modeText;const e=s.isUnderwater?"mode-sub":s.isSurface?"mode-atmo":"mode-orbit";ec.className=`hud-value ${e}`}if(Sd&&(Sd.textContent=s.sectorName),wd&&(wd.textContent=s.nearestText),Ad&&(Ad.textContent=s.altitudeText),Io&&(Io.textContent=`${s.timeScale}x · ${s.solarPhaseName}`,Io.className=`hud-value ${s.solarPhaseName==="DÍA"?"phase-day":s.solarPhaseName==="ATARDECER"?"phase-dusk":s.solarPhaseName==="NOCHE"?"phase-night":""}`),Sr)if(s.pandoraLandmarks){Sr.classList.remove("hidden");for(const e of s.pandoraLandmarks){const t=Sr.querySelector(`small[data-dist="${e.id}"]`);t&&(t.textContent=`${e.distKm.toLocaleString("es-ES")} km`)}}else Sr.classList.add("hidden")}}),Wf=()=>{const s=ti.cycleTimeScale();if(Io){const e=Io.textContent.split("·")[1]?.trim()||"ESPACIO";Io.textContent=`${s}x · ${e}`}};Ed&&Ed.addEventListener("click",s=>{s.stopPropagation(),Wf()});const zr=new b1({overlayEl:document.getElementById("star-map-overlay"),canvasEl:document.getElementById("star-map-canvas"),labelsEl:document.getElementById("star-map-labels"),backBtnEl:document.getElementById("star-map-back-btn"),closeBtnEl:document.getElementById("star-map-close-btn"),levelTagEl:document.getElementById("star-map-level-tag"),titleEl:document.getElementById("star-map-title"),dossierEl:document.getElementById("star-map-dossier"),dossierBadgeEl:document.getElementById("dossier-badge"),dossierTitleEl:document.getElementById("dossier-title"),dossierDescEl:document.getElementById("dossier-desc"),dossierTypeEl:document.getElementById("dossier-type"),dossierAltEl:document.getElementById("dossier-alt"),dossierAtmoEl:document.getElementById("dossier-atmo"),dossierDistEl:document.getElementById("dossier-dist"),jumpBtnEl:document.getElementById("star-map-jump-btn"),footerEl:document.getElementById("star-map-footer"),sceneManager:ti,controls:ys,onConfirmJump:s=>ti.navigateToTarget(s)}),E1=new v1({containerEl:document.getElementById("tactical-minimap"),canvasEl:document.getElementById("minimap-canvas"),scaleEl:document.getElementById("minimap-scale"),sceneManager:ti,onOpenStarMap:()=>zr.open()});document.querySelectorAll(".pandora-lm-btn").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const t=s.dataset.landmark;t&&ti.navigateToPandoraLandmark(t)})});window.addEventListener("keydown",s=>{zr.isOpen()||(["Digit1","Numpad1"].includes(s.code)&&ti.navigateToTarget("1"),["Digit2","Numpad2"].includes(s.code)&&ti.navigateToTarget("2"),["Digit3","Numpad3"].includes(s.code)&&ti.navigateToTarget("3"),["Digit4","Numpad4"].includes(s.code)&&ti.navigateToTarget("4"),["Digit5","Numpad5"].includes(s.code)&&ti.navigateToTarget("5"),["Digit6","Numpad6"].includes(s.code)&&ti.navigateToTarget("6"),s.code==="KeyT"&&!s.repeat&&Wf())});window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;Vi.aspect=s/e,Vi.updateProjectionMatrix(),qi.setSize(s,e),eo.setSize(s,e),il.setSize(s,e),Ch.resolution.set(s,e)});async function T1(){try{await ti.init((s,e)=>{bd&&(bd.style.width=`${s}%`),br&&(br.textContent=e)})}catch(s){console.error("Error inicializando simulador:",s),br&&(br.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{yd&&yd.classList.add("hidden")},300)}}const Id=new Cf;function Xf(){requestAnimationFrame(Xf);const s=Id.getDelta();ti.update(s),ys.update(s),ti.syncCameraPostFlight();const e=ys.getCurrentSpeed(),t=ys.getPulseRatio();Vf.update(s,e,t);const n=ti.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(Td&&(Td.textContent=i),Cd&&(Cd.textContent=n?"km/s":"m/s"),Pd){const o=(n?1400:120)*ys.speedMultiplier,a=Math.min(100,e/Math.max(1,o)*100);Pd.style.width=`${a}%`}if(Rd&&(Rd.textContent=`x${ys.speedMultiplier.toFixed(1)}`),tc){const o=t>.1;tc.textContent=ys.autopilot?"PILOTO AUTO":o?"MOTOR PULSE":"EN ESPERA",tc.className=o?"status-active":"status-standby"}if(Dd){const o=Vi.position;Dd.textContent=`${o.x.toFixed(0)}, ${o.y.toFixed(0)}, ${o.z.toFixed(0)}`}zr.isOpen()?zr.updateAndDraw(performance.now()):E1.update(Id.elapsedTime),eo.render()}T1();Xf();
