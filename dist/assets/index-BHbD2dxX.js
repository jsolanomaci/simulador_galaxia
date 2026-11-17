(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="170",ff=0,eh=1,pf=2,ed=1,td=2,Bi=3,li=0,In=1,Kt=2,Gn=0,Es=1,Mn=2,th=3,nh=4,nd=5,zi=100,mf=101,gf=102,xf=103,_f=104,Tl=200,vf=201,yf=202,Mf=203,Cl=204,Pl=205,id=206,bf=207,sd=208,Sf=209,wf=210,Ef=211,Af=212,Tf=213,Cf=214,Rl=0,Dl=1,Il=2,po=3,Ll=4,Nl=5,Ul=6,Fl=7,od=0,Pf=1,Rf=2,hs=0,rd=1,ad=2,ld=3,xa=4,Df=5,cd=6,hd=7,ih="attached",If="detached",ud=300,mo=301,go=302,Ol=303,Bl=304,_a=306,Xn=1e3,Hi=1001,ha=1002,En=1003,dd=1004,Ho=1005,Qn=1006,Jr=1007,Vi=1008,bi=1009,fd=1010,pd=1011,er=1012,bc=1013,Ts=1014,oi=1015,yi=1016,Sc=1017,wc=1018,Cs=1020,md=35902,gd=1021,xd=1022,ri=1023,_d=1024,vd=1025,lo=1026,Ps=1027,va=1028,Ec=1029,yd=1030,Ac=1031,Tc=1033,ea=33776,ta=33777,na=33778,ia=33779,kl=35840,zl=35841,Gl=35842,Hl=35843,Vl=36196,Wl=37492,Xl=37496,ql=37808,Yl=37809,jl=37810,Kl=37811,Zl=37812,$l=37813,Ql=37814,Jl=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,oc=37821,sa=36492,rc=36494,ac=36495,Md=36283,lc=36284,cc=36285,hc=36286,tr=2300,nr=2301,La=2302,sh=2400,oh=2401,rh=2402,Lf=2500,Nf=0,bd=1,uc=2,Uf=3200,Ff=3201,Cc=0,Of=1,Gi="",jt="srgb",On="srgb-linear",ya="linear",tn="srgb",zs=7680,ah=519,Bf=512,kf=513,zf=514,Sd=515,Gf=516,Hf=517,Vf=518,Wf=519,dc=35044,lh="300 es",Wi=2e3,ua=2001;class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ch=1234567;const qo=Math.PI/180,xo=180/Math.PI;function Mi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function Dn(o,e,t){return Math.max(e,Math.min(t,o))}function Pc(o,e){return(o%e+e)%e}function Xf(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function qf(o,e,t){return o!==e?(t-o)/(e-o):0}function Yo(o,e,t){return(1-t)*o+t*e}function Yf(o,e,t,n){return Yo(o,e,1-Math.exp(-t*n))}function jf(o,e=1){return e-Math.abs(Pc(o,e*2)-e)}function Kf(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Zf(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function $f(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Qf(o,e){return o+Math.random()*(e-o)}function Jf(o){return o*(.5-Math.random())}function ep(o){o!==void 0&&(ch=o);let e=ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(o){return o*qo}function np(o){return o*xo}function ip(o){return(o&o-1)===0&&o!==0}function sp(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function op(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function rp(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _i(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function nn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const X={DEG2RAD:qo,RAD2DEG:xo,generateUUID:Mi,clamp:Dn,euclideanModulo:Pc,mapLinear:Xf,inverseLerp:qf,lerp:Yo,damp:Yf,pingpong:jf,smoothstep:Kf,smootherstep:Zf,randInt:$f,randFloat:Qf,randFloatSpread:Jf,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:op,setQuaternionFromProperEuler:rp,normalize:nn,denormalize:_i};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,n,i,s,r,a,l,c){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c)}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],M=i[4],_=i[7],T=i[2],w=i[5],A=i[8];return s[0]=r*x+a*v+l*T,s[3]=r*m+a*M+l*w,s[6]=r*p+a*_+l*A,s[1]=c*x+h*v+u*T,s[4]=c*m+h*M+u*w,s[7]=c*p+h*_+u*A,s[2]=d*x+f*v+g*T,s[5]=d*m+f*M+g*w,s[8]=d*p+f*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*r)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(r*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new wt;function wd(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ir(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ap(){const o=ir("canvas");return o.style.display="block",o}const hh={};function Vo(o){o in hh||(hh[o]=!0,console.warn(o))}function lp(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function cp(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hp(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bt={enabled:!0,workingColorSpace:On,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tn&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tn&&(o.r=co(o.r),o.g=co(o.g),o.b=co(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Gi?ya:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Xi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const uh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],fh=[.3127,.329],ph=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Bt.define({[On]:{primaries:uh,whitePoint:fh,transfer:ya,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:uh,whitePoint:fh,transfer:tn,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}});let Gs;class up{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=ir("canvas")),Gs.width=e.width,Gs.height=e.height;const n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Xi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dp=0;class Ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Ua(i[r].image)):s.push(Ua(i[r]))}else s=Ua(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ua(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?up.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fp=0;class bn extends wo{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,n=Hi,i=Hi,s=Qn,r=Vi,a=ri,l=bi,c=bn.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Mi(),this.name="",this.source=new Ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=ud;bn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,n=0,i=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,_=(f+1)/2,T=(p+1)/2,w=(h+d)/4,A=(u+x)/4,E=(g+m)/4;return M>_&&M>T?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):_>T?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=E/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=E/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends wo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ad extends bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],x=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*x,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),w=Math.atan2(T,p*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const _=a*v;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),h=2*(a*t-s*i),u=2*(s*n-r*t);return this.x=t+l*c+r*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new b,gh=new rt;class Yi{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,fi):fi.fromBufferAttribute(s,r),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),dr.subVectors(this.max,Ro),Hs.subVectors(e.a,Ro),Vs.subVectors(e.b,Ro),Ws.subVectors(e.c,Ro),Zi.subVectors(Vs,Hs),$i.subVectors(Ws,Vs),ds.subVectors(Hs,Ws);let t=[0,-Zi.z,Zi.y,0,-$i.z,$i.y,0,-ds.z,ds.y,Zi.z,0,-Zi.x,$i.z,0,-$i.x,ds.z,0,-ds.x,-Zi.y,Zi.x,0,-$i.y,$i.x,0,-ds.y,ds.x,0];return!Oa(t,Hs,Vs,Ws,dr)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,Hs,Vs,Ws,dr))?!1:(fr.crossVectors(Zi,$i),t=[fr.x,fr.y,fr.z],Oa(t,Hs,Vs,Ws,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new b,new b,new b,new b,new b,new b,new b,new b],fi=new b,ur=new Yi,Hs=new b,Vs=new b,Ws=new b,Zi=new b,$i=new b,ds=new b,Ro=new b,dr=new b,fr=new b,fs=new b;function Oa(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){fs.fromArray(o,s);const a=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gp=new Yi,Do=new b,Ba=new b;class ui{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const t=Do.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Do,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Ba)),this.expandByPoint(Do.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new b,ka=new b,pr=new b,Qi=new b,za=new b,mr=new b,Ga=new b;class rr{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ka.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(ka);const s=e.distanceTo(t)*.5,r=-this.direction.dot(pr),a=Qi.dot(this.direction),l=-Qi.dot(pr),c=Qi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ka).addScaledVector(pr,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),i=Li.dot(Li)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,s){za.subVectors(t,e),mr.subVectors(n,e),Ga.crossVectors(za,mr);let r=this.direction.dot(Ga),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(mr.crossVectors(Qi,mr));if(l<0)return null;const c=a*this.direction.dot(za.cross(Qi));if(c<0||l+c>r)return null;const h=-a*Qi.dot(Ga);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,s,r,a,l,c,h,u,d,f,g,x,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c,h,u,d,f,g,x,m)}set(e,t,n,i,s,r,a,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),r=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=x-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xp,e,_p)}lookAt(e,t,n){const i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ji.crossVectors(n,Zn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ji.crossVectors(n,Zn)),Ji.normalize(),gr.crossVectors(Zn,Ji),i[0]=Ji.x,i[4]=gr.x,i[8]=Zn.x,i[1]=Ji.y,i[5]=gr.y,i[9]=Zn.y,i[2]=Ji.z,i[6]=gr.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],M=n[7],_=n[11],T=n[15],w=i[0],A=i[4],E=i[8],y=i[12],S=i[1],C=i[5],L=i[9],N=i[13],P=i[2],U=i[6],G=i[10],B=i[14],R=i[3],O=i[7],j=i[11],Q=i[15];return s[0]=r*w+a*S+l*P+c*R,s[4]=r*A+a*C+l*U+c*O,s[8]=r*E+a*L+l*G+c*j,s[12]=r*y+a*N+l*B+c*Q,s[1]=h*w+u*S+d*P+f*R,s[5]=h*A+u*C+d*U+f*O,s[9]=h*E+u*L+d*G+f*j,s[13]=h*y+u*N+d*B+f*Q,s[2]=g*w+x*S+m*P+p*R,s[6]=g*A+x*C+m*U+p*O,s[10]=g*E+x*L+m*G+p*j,s[14]=g*y+x*N+m*B+p*Q,s[3]=v*w+M*S+_*P+T*R,s[7]=v*A+M*C+_*U+T*O,s[11]=v*E+M*L+_*G+T*j,s[15]=v*y+M*N+_*B+T*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*r*u+n*r*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+r*m*f+h*l*p-r*d*p,_=h*x*c-g*u*c+g*a*f-r*x*f-h*a*p+r*u*p,T=g*u*l-h*x*l-g*a*d+r*x*d+h*a*m-r*u*m,w=t*v+n*M+i*_+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(x*d*s-u*m*s-x*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*s-x*l*s+x*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=M*A,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*p-t*l*p)*A,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*f+t*l*f)*A,e[8]=_*A,e[9]=(g*u*s-h*x*s-g*n*f+t*x*f+h*n*p-t*u*p)*A,e[10]=(r*x*s-g*a*s+g*n*c-t*x*c-r*n*p+t*a*p)*A,e[11]=(h*a*s-r*u*s-h*n*c+t*u*c+r*n*f-t*a*f)*A,e[12]=T*A,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-r*x*i-g*n*l+t*x*l+r*n*m-t*a*m)*A,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,g=s*u,x=r*h,m=r*u,p=a*u,v=l*c,M=l*h,_=l*u,T=n.x,w=n.y,A=n.z;return i[0]=(1-(x+p))*T,i[1]=(f+_)*T,i[2]=(g-M)*T,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+M)*A,i[9]=(m-v)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xs.set(i[0],i[1],i[2]).length();const r=Xs.set(i[4],i[5],i[6]).length(),a=Xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const c=1/s,h=1/r,u=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=Wi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Wi)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===ua)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=Wi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(r-s),d=(t+e)*c,f=(n+i)*h;let g,x;if(a===Wi)g=(r+s)*u,x=-2*u;else if(a===ua)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new b,pi=new tt,xp=new b(0,0,0),_p=new b(1,1,1),Ji=new b,gr=new b,Zn=new b,xh=new tt,_h=new rt;class jn{constructor(e=0,t=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Dn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _h.setFromEuler(this),this.setFromQuaternion(_h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vp=0;const vh=new b,qs=new rt,Ni=new tt,xr=new b,Io=new b,yp=new b,Mp=new rt,yh=new b(1,0,0),Mh=new b(0,1,0),bh=new b(0,0,1),Sh={type:"added"},bp={type:"removed"},Ys={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Xt extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new b,t=new jn,n=new rt,i=new b(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new wt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Io,xr,this.up):Ni.lookAt(xr,Io,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),qs.setFromRotationMatrix(Ni),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bp),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xt.DEFAULT_UP=new b(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new b,Ui=new b,Va=new b,Fi=new b,js=new b,Ks=new b,wh=new b,Wa=new b,Xa=new b,qa=new b,Ya=new Wt,ja=new Wt,Ka=new Wt;class ii{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Ui.subVectors(n,t),Va.subVectors(e,t);const r=mi.dot(mi),a=mi.dot(Ui),l=mi.dot(Va),c=Ui.dot(Ui),h=Ui.dot(Va),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(r,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return Ya.setScalar(0),ja.setScalar(0),Ka.setScalar(0),Ya.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,n),Ka.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Ya,s.x),r.addScaledVector(ja,s.y),r.addScaledVector(Ka,s.z),r}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Ui.subVectors(e,t),mi.cross(Ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),mi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;js.subVectors(i,n),Ks.subVectors(s,n),Wa.subVectors(e,n);const l=js.dot(Wa),c=Ks.dot(Wa);if(l<=0&&c<=0)return t.copy(n);Xa.subVectors(e,i);const h=js.dot(Xa),u=Ks.dot(Xa);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(js,r);qa.subVectors(e,s);const f=js.dot(qa),g=Ks.dot(qa);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ks,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return wh.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(wh,a);const p=1/(m+x+d);return r=x*p,a=d*p,t.copy(n).addScaledVector(js,r).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Za(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Bt.workingColorSpace){if(e=Pc(e,1),t=Dn(t,0,1),n=Dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Za(r,s,e+1/3),this.g=Za(r,s,e),this.b=Za(r,s,e-1/3)}return Bt.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Bt.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Dn(Fn.r*255,0,255))*65536+Math.round(Dn(Fn.g*255,0,255))*256+Math.round(Dn(Fn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Fn.copy(this),t);const n=Fn.r,i=Fn.g,s=Fn.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=jt){Bt.fromWorkingColorSpace(Fn.copy(this),e);const t=Fn.r,n=Fn.g,i=Fn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(_r);const n=Yo(es.h,_r.h,t),i=Yo(es.s,_r.s,t),s=Yo(es.l,_r.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new ie;ie.NAMES=Td;let Sp=0;class ai extends wo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Mi(),this.name="",this.blending=Es,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Pl&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dn extends ai{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new b,vr=new Ue;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dc,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),e}}class Cd extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pd extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wp=0;const ti=new tt,$a=new Xt,Zs=new b,$n=new Yi,Lo=new Yi,Rn=new b;class Et extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Pd:Cd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors($n.min,Lo.min),$n.expandByPoint(Rn),Rn.addVectors($n.max,Lo.max),$n.expandByPoint(Rn)):($n.expandByPoint(Lo.min),$n.expandByPoint(Lo.max))}$n.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rn));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rn.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),Rn.add(Zs)),i=Math.max(i,n.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new b,l[E]=new b;const c=new b,h=new b,u=new b,d=new Ue,f=new Ue,g=new Ue,x=new b,m=new b;function p(E,y,S){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,E),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[E].add(x),a[y].add(x),a[S].add(x),l[E].add(m),l[y].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let E=0,y=v.length;E<y;++E){const S=v[E],C=S.start,L=S.count;for(let N=C,P=C+L;N<P;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const M=new b,_=new b,T=new b,w=new b;function A(E){T.fromBufferAttribute(i,E),w.copy(T);const y=a[E];M.copy(y),M.sub(T.multiplyScalar(T.dot(y))).normalize(),_.crossVectors(w,y);const C=_.dot(l[E])<0?-1:1;r.setXYZW(E,M.x,M.y,M.z,C)}for(let E=0,y=v.length;E<y;++E){const S=v[E],C=S.start,L=S.count;for(let N=C,P=C+L;N<P;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,s=new b,r=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new tt,ps=new rr,yr=new ui,Ah=new b,Mr=new b,br=new b,Sr=new b,Qa=new b,wr=new b,Th=new b,Er=new b;class ze extends Xt{constructor(e=new Et,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Qa.fromBufferAttribute(u,e),r?wr.addScaledVector(Qa,h):wr.addScaledVector(Qa.sub(t),h))}t.add(wr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!(yr.containsPoint(ps.origin)===!1&&(ps.intersectSphere(yr,Ah)===null||ps.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Eh.copy(s).invert(),ps.copy(e.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,T=M;_<T;_+=3){const w=a.getX(_),A=a.getX(_+1),E=a.getX(_+2);i=Ar(this,p,e,n,c,h,u,w,A,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);i=Ar(this,r,e,n,c,h,u,v,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,T=M;_<T;_+=3){const w=_,A=_+1,E=_+2;i=Ar(this,p,e,n,c,h,u,w,A,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=m,M=m+1,_=m+2;i=Ar(this,r,e,n,c,h,u,v,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ep(o,e,t,n,i,s,r,a){let l;if(e.side===In?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===li,a),l===null)return null;Er.copy(a),Er.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:o}}function Ar(o,e,t,n,i,s,r,a,l,c){o.getVertexPosition(a,Mr),o.getVertexPosition(l,br),o.getVertexPosition(c,Sr);const h=Ep(o,e,t,n,Mr,br,Sr,Th);if(h){const u=new b;ii.getBarycoord(Th,Mr,br,Sr,u),i&&(h.uv=ii.getInterpolatedAttribute(i,a,l,c,u,new Ue)),s&&(h.uv1=ii.getInterpolatedAttribute(s,a,l,c,u,new Ue)),r&&(h.normal=ii.getInterpolatedAttribute(r,a,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new b,materialIndex:0};ii.getNormal(Mr,br,Sr,d.normal),h.face=d,h.barycoord=u}return h}class hn extends Et{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function g(x,m,p,v,M,_,T,w,A,E,y){const S=_/A,C=T/E,L=_/2,N=T/2,P=w/2,U=A+1,G=E+1;let B=0,R=0;const O=new b;for(let j=0;j<G;j++){const Q=j*C-N;for(let ne=0;ne<U;ne++){const ye=ne*S-L;O[x]=ye*v,O[m]=Q*M,O[p]=P,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[p]=w>0?1:-1,h.push(O.x,O.y,O.z),u.push(ne/A),u.push(1-j/E),B+=1}}for(let j=0;j<E;j++)for(let Q=0;Q<A;Q++){const ne=d+Q+U*j,ye=d+Q+U*(j+1),Z=d+(Q+1)+U*(j+1),pe=d+(Q+1)+U*j;l.push(ne,ye,pe),l.push(ye,Z,pe),R+=6}a.addGroup(f,R,y),f+=R,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kn(o){const e={};for(let t=0;t<o.length;t++){const n=_o(o[t]);for(const i in n)e[i]=n[i]}return e}function Ap(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Rd(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const vi={clone:_o,merge:kn};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ai{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dd extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new b,Ch=new Ue,Ph=new Ue;class Nn extends Dd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,Ph),t.subVectors(Ph,Ch)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Qs=1;class Pp extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nn($s,Qs,e,t);i.layers=this.layers,this.add(i);const s=new Nn($s,Qs,e,t);s.layers=this.layers,this.add(s);const r=new Nn($s,Qs,e,t);r.layers=this.layers,this.add(r);const a=new Nn($s,Qs,e,t);a.layers=this.layers,this.add(a);const l=new Nn($s,Qs,e,t);l.layers=this.layers,this.add(l);const c=new Nn($s,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Id extends bn{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rp extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Id(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hn(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:_o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Gn});s.uniforms.tEquirect.value=t;const r=new ze(i,s),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Qn),new Pp(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Ja=new b,Dp=new b,Ip=new wt;class os{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ja.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ip.getNormalMatrix(e),i=this.coplanarPoint(Ja).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new ui,Tr=new b;class Dc{constructor(e=new os,t=new os,n=new os,i=new os,s=new os,r=new os){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],v=i[13],M=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,m-f,_-p).normalize(),n[1].setComponents(l+s,d+c,m+f,_+p).normalize(),n[2].setComponents(l+r,d+h,m+g,_+v).normalize(),n[3].setComponents(l-r,d-h,m-g,_-v).normalize(),n[4].setComponents(l-a,d-u,m-x,_-M).normalize(),t===Wi)n[5].setComponents(l+a,d+u,m+x,_+M).normalize();else if(t===ua)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Tr.x=i.normal.x>0?e.max.x:e.min.x,Tr.y=i.normal.y>0?e.max.y:e.min.y,Tr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ld(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Lp(o){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(o.bindBuffer(c,a),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];o.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class Si extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const v=p*d-r;for(let M=0;M<c;M++){const _=M*u-s;g.push(_,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const M=v+c*p,_=v+c*(p+1),T=v+1+c*(p+1),w=v+1+c*p;f.push(M,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,jp=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o0=`vec3 transformedNormal = objectNormal;
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
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,b0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,I0=`struct PhysicalMaterial {
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
}`,L0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_m=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
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
}`,zm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Hm=`#define DISTANCE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,jm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
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
}`,$m=`#define MATCAP
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
}`,Qm=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,og=`#define TOON
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
}`,rg=`#define TOON
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
}`,ag=`uniform float size;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:Np,alphahash_pars_fragment:Up,alphamap_fragment:Fp,alphamap_pars_fragment:Op,alphatest_fragment:Bp,alphatest_pars_fragment:kp,aomap_fragment:zp,aomap_pars_fragment:Gp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:jp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Qp,color_fragment:Jp,color_pars_fragment:e0,color_pars_vertex:t0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:o0,displacementmap_pars_vertex:r0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:A0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:_0,fog_fragment:v0,fog_pars_fragment:y0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:b0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:w0,lights_pars_begin:E0,lights_toon_fragment:T0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:R0,lights_physical_fragment:D0,lights_physical_pars_fragment:I0,lights_fragment_begin:L0,lights_fragment_maps:N0,lights_fragment_end:U0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:k0,map_fragment:z0,map_pars_fragment:G0,map_particle_fragment:H0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:j0,morphtarget_pars_vertex:K0,morphtarget_vertex:Z0,normal_fragment_begin:$0,normal_fragment_maps:Q0,normal_pars_fragment:J0,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:om,iridescence_pars_fragment:rm,opaque_fragment:am,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:hm,dithering_fragment:um,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:xm,shadowmask_pars_fragment:_m,skinbase_vertex:vm,skinning_pars_vertex:ym,skinning_vertex:Mm,skinnormal_vertex:bm,specularmap_fragment:Sm,specularmap_pars_fragment:wm,tonemapping_fragment:Em,tonemapping_pars_fragment:Am,transmission_fragment:Tm,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Rm,uv_vertex:Dm,worldpos_vertex:Im,background_vert:Lm,background_frag:Nm,backgroundCube_vert:Um,backgroundCube_frag:Fm,cube_vert:Om,cube_frag:Bm,depth_vert:km,depth_frag:zm,distanceRGBA_vert:Gm,distanceRGBA_frag:Hm,equirect_vert:Vm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:jm,meshlambert_vert:Km,meshlambert_frag:Zm,meshmatcap_vert:$m,meshmatcap_frag:Qm,meshnormal_vert:Jm,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:og,meshtoon_frag:rg,points_vert:ag,points_frag:lg,shadow_vert:cg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},We={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Ai={basic:{uniforms:kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new ie(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:kn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:kn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new ie(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:kn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:kn([We.points,We.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:kn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:kn([We.common,We.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:kn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:kn([We.sprite,We.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:kn([We.common,We.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:kn([We.lights,We.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Ai.physical={uniforms:kn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Cr={r:0,b:0,g:0},gs=new jn,fg=new tt;function pg(o,e,t,n,i,s,r){const a=new ie(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function x(v){let M=!1;const _=g(v);_===null?p(a,l):_&&_.isColor&&(p(_,1),M=!0);const T=o.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(v,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===_a)?(h===void 0&&(h=new ze(new hn(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:_o(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),gs.copy(M.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(gs)),h.material.toneMapped=Bt.getTransfer(_.colorSpace)!==tn,(u!==_||d!==_.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=o.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ze(new Si(2,2),new on({name:"BackgroundMaterial",uniforms:_o(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(_.colorSpace)!==tn,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=o.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(Cr,Rd(o)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m}}function mg(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function a(S,C,L,N,P){let U=!1;const G=u(N,L,C);s!==G&&(s=G,c(s.object)),U=f(S,N,L,P),U&&g(S,N,L,P),P!==null&&e.update(P,o.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,_(S,C,L,N),P!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return o.createVertexArray()}function c(S){return o.bindVertexArray(S)}function h(S){return o.deleteVertexArray(S)}function u(S,C,L){const N=L.wireframe===!0;let P=n[S.id];P===void 0&&(P={},n[S.id]=P);let U=P[C.id];U===void 0&&(U={},P[C.id]=U);let G=U[N];return G===void 0&&(G=d(l()),U[N]=G),G}function d(S){const C=[],L=[],N=[];for(let P=0;P<t;P++)C[P]=0,L[P]=0,N[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,C,L,N){const P=s.attributes,U=C.attributes;let G=0;const B=L.getAttributes();for(const R in B)if(B[R].location>=0){const j=P[R];let Q=U[R];if(Q===void 0&&(R==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),R==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function g(S,C,L,N){const P={},U=C.attributes;let G=0;const B=L.getAttributes();for(const R in B)if(B[R].location>=0){let j=U[R];j===void 0&&(R==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),R==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),P[R]=Q,G++}s.attributes=P,s.attributesNum=G,s.index=N}function x(){const S=s.newAttributes;for(let C=0,L=S.length;C<L;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const L=s.newAttributes,N=s.enabledAttributes,P=s.attributeDivisors;L[S]=1,N[S]===0&&(o.enableVertexAttribArray(S),N[S]=1),P[S]!==C&&(o.vertexAttribDivisor(S,C),P[S]=C)}function v(){const S=s.newAttributes,C=s.enabledAttributes;for(let L=0,N=C.length;L<N;L++)C[L]!==S[L]&&(o.disableVertexAttribArray(L),C[L]=0)}function M(S,C,L,N,P,U,G){G===!0?o.vertexAttribIPointer(S,C,L,P,U):o.vertexAttribPointer(S,C,L,N,P,U)}function _(S,C,L,N){x();const P=N.attributes,U=L.getAttributes(),G=C.defaultAttributeValues;for(const B in U){const R=U[B];if(R.location>=0){let O=P[B];if(O===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(O=S.instanceColor)),O!==void 0){const j=O.normalized,Q=O.itemSize,ne=e.get(O);if(ne===void 0)continue;const ye=ne.buffer,Z=ne.type,pe=ne.bytesPerElement,$=Z===o.INT||Z===o.UNSIGNED_INT||O.gpuType===bc;if(O.isInterleavedBufferAttribute){const ee=O.data,ce=ee.stride,fe=O.offset;if(ee.isInstancedInterleavedBuffer){for(let ae=0;ae<R.locationSize;ae++)p(R.location+ae,ee.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ae=0;ae<R.locationSize;ae++)m(R.location+ae);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let ae=0;ae<R.locationSize;ae++)M(R.location+ae,Q/R.locationSize,Z,j,ce*pe,(fe+Q/R.locationSize*ae)*pe,$)}else{if(O.isInstancedBufferAttribute){for(let ee=0;ee<R.locationSize;ee++)p(R.location+ee,O.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ee=0;ee<R.locationSize;ee++)m(R.location+ee);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let ee=0;ee<R.locationSize;ee++)M(R.location+ee,Q/R.locationSize,Z,j,Q*pe,Q/R.locationSize*ee*pe,$)}}else if(G!==void 0){const j=G[B];if(j!==void 0)switch(j.length){case 2:o.vertexAttrib2fv(R.location,j);break;case 3:o.vertexAttrib3fv(R.location,j);break;case 4:o.vertexAttrib4fv(R.location,j);break;default:o.vertexAttrib1fv(R.location,j)}}}}v()}function T(){E();for(const S in n){const C=n[S];for(const L in C){const N=C[L];for(const P in N)h(N[P].object),delete N[P];delete C[L]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const L in C){const N=C[L];for(const P in N)h(N[P].object),delete N[P];delete C[L]}delete n[S.id]}function A(S){for(const C in n){const L=n[C];if(L[S.id]===void 0)continue;const N=L[S.id];for(const P in N)h(N[P].object),delete N[P];delete L[S.id]}}function E(){y(),r=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function gg(o,e,t){let n;function i(c){n=c}function s(c,h){o.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,u){u!==0&&(o.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xg(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==ri&&n.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const E=A===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bi&&n.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==oi&&!E)}function l(A){if(A==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),M=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function _g(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new os,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=o.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,M=v*4;let _=p.clippingState||null;l.value=_,_=h(g,d,M,f);for(let T=0;T!==M;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)r.copy(u[M]).applyMatrix4(v,a),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vg(o){let e=new WeakMap;function t(r,a){return a===Ol?r.mapping=mo:a===Bl&&(r.mapping=go),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ol||a===Bl)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Rp(l.height);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ma extends Dd{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ro=4,Rh=[.125,.215,.35,.446,.526,.582],bs=20,el=new Ma,Dh=new ie;let tl=null,nl=0,il=0,sl=!1;const Ms=(1+Math.sqrt(5))/2,Js=1/Ms,Ih=[new b(-Ms,Js,0),new b(Ms,Js,0),new b(-Js,0,Ms),new b(Js,0,Ms),new b(0,Ms,-Js),new b(0,Ms,Js),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),this._renderer.xr.enabled=sl,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:yi,format:ri,colorSpace:On,depthBuffer:!1},i=Lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(s)),this._blurMaterial=Mg(s,e,t)}return i}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,n,i){const a=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dh),h.toneMapping=hs,h.autoClear=!1;const f=new dn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),g=new ze(new hn,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Dh),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Pr(i,v*M,p>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mo||e.mapping===go;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,el)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ih[(i-s-1)%Ih.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ze(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*bs-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):bs;m>bs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bs}`);const p=[];let v=0;for(let A=0;A<bs;++A){const E=A/x,y=Math.exp(-E*E/2);p.push(y),A===0?v+=y:A<m&&(v+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[i],T=3*_*(i>M-ro?i-M+ro:0),w=4*(this._cubeSize-_);Pr(t,T,w,3*_,2*_),l.setRenderTarget(t),l.render(u,el)}}function yg(o){const e=[],t=[],n=[];let i=o;const s=o-ro+1+Rh.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-ro?l=Rh[r-o+ro-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,E=w>2?0:-1,y=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];v.set(y,x*g*w),M.set(d,m*g*w);const S=[w,w,w,w,w,w];_.set(S,p*g*w)}const T=new Et;T.setAttribute("position",new yt(v,x)),T.setAttribute("uv",new yt(M,m)),T.setAttribute("faceIndex",new yt(_,p)),e.push(T),i>ro&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lh(o,e,t){const n=new Yn(o,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Mg(o,e,t){const n=new Float32Array(bs),i=new b(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Nh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Uh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function bg(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ol||l===Bl,h=l===mo||l===go;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new fc(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new fc(o)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Sg(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Vo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wg(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],o.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let M=0,_=v.length;M<_;M+=3){const T=v[M+0],w=v[M+1],A=v[M+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){const v=g.array;x=g.version;for(let M=0,_=v.length/3-1;M<_;M+=3){const T=M+0,w=M+1,A=M+2;d.push(T,w,w,A,A,T)}}else return;const m=new(wd(d)?Pd:Cd)(d,1);m.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Eg(o,e,t){let n;function i(d){n=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,f){o.drawElements(n,f,s,d*r),t.update(f,n,1)}function c(d,f,g){g!==0&&(o.drawElementsInstanced(n,f,s,d*r,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ag(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tg(o,e,t){const n=new WeakMap,i=new Wt;function s(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let T=a.attributes.position.count*_,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*u),E=new Ad(A,T,w,u);E.type=oi,E.needsUpdate=!0;const y=_*4;for(let C=0;C<u;C++){const L=p[C],N=v[C],P=M[C],U=T*w*4*C;for(let G=0;G<L.count;G++){const B=G*y;g===!0&&(i.fromBufferAttribute(L,G),A[U+B+0]=i.x,A[U+B+1]=i.y,A[U+B+2]=i.z,A[U+B+3]=0),x===!0&&(i.fromBufferAttribute(N,G),A[U+B+4]=i.x,A[U+B+5]=i.y,A[U+B+6]=i.z,A[U+B+7]=0),m===!0&&(i.fromBufferAttribute(P,G),A[U+B+8]=i.x,A[U+B+9]=i.y,A[U+B+10]=i.z,A[U+B+11]=P.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new Ue(T,w)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",x),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function Cg(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class Lc extends bn{constructor(e,t,n,i,s,r,a,l,c,h=lo){if(h!==lo&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===lo&&(n=Ts),n===void 0&&h===Ps&&(n=Cs),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nd=new bn,Fh=new Lc(1,1),Ud=new Ad,Fd=new mp,Od=new Id,Oh=[],Bh=[],kh=new Float32Array(16),zh=new Float32Array(9),Gh=new Float32Array(4);function Eo(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Oh[i];if(s===void 0&&(s=new Float32Array(i),Oh[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Tn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Cn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ba(o,e){let t=Bh[e];t===void 0&&(t=new Int32Array(e),Bh[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Pg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Rg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;o.uniform2fv(this.addr,e),Cn(t,e)}}function Dg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;o.uniform3fv(this.addr,e),Cn(t,e)}}function Ig(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;o.uniform4fv(this.addr,e),Cn(t,e)}}function Lg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(Tn(t,n))return;Gh.set(n),o.uniformMatrix2fv(this.addr,!1,Gh),Cn(t,n)}}function Ng(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(Tn(t,n))return;zh.set(n),o.uniformMatrix3fv(this.addr,!1,zh),Cn(t,n)}}function Ug(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(Tn(t,n))return;kh.set(n),o.uniformMatrix4fv(this.addr,!1,kh),Cn(t,n)}}function Fg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Og(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;o.uniform2iv(this.addr,e),Cn(t,e)}}function Bg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;o.uniform3iv(this.addr,e),Cn(t,e)}}function kg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;o.uniform4iv(this.addr,e),Cn(t,e)}}function zg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Gg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;o.uniform2uiv(this.addr,e),Cn(t,e)}}function Hg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;o.uniform3uiv(this.addr,e),Cn(t,e)}}function Vg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;o.uniform4uiv(this.addr,e),Cn(t,e)}}function Wg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Fh.compareFunction=Sd,s=Fh):s=Nd,t.setTexture2D(e||s,i)}function Xg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fd,i)}function qg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Od,i)}function Yg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ud,i)}function jg(o){switch(o){case 5126:return Pg;case 35664:return Rg;case 35665:return Dg;case 35666:return Ig;case 35674:return Lg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return zg;case 36294:return Gg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Kg(o,e){o.uniform1fv(this.addr,e)}function Zg(o,e){const t=Eo(e,this.size,2);o.uniform2fv(this.addr,t)}function $g(o,e){const t=Eo(e,this.size,3);o.uniform3fv(this.addr,t)}function Qg(o,e){const t=Eo(e,this.size,4);o.uniform4fv(this.addr,t)}function Jg(o,e){const t=Eo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ex(o,e){const t=Eo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function tx(o,e){const t=Eo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function nx(o,e){o.uniform1iv(this.addr,e)}function ix(o,e){o.uniform2iv(this.addr,e)}function sx(o,e){o.uniform3iv(this.addr,e)}function ox(o,e){o.uniform4iv(this.addr,e)}function rx(o,e){o.uniform1uiv(this.addr,e)}function ax(o,e){o.uniform2uiv(this.addr,e)}function lx(o,e){o.uniform3uiv(this.addr,e)}function cx(o,e){o.uniform4uiv(this.addr,e)}function hx(o,e,t){const n=this.cache,i=e.length,s=ba(t,i);Tn(n,s)||(o.uniform1iv(this.addr,s),Cn(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Nd,s[r])}function ux(o,e,t){const n=this.cache,i=e.length,s=ba(t,i);Tn(n,s)||(o.uniform1iv(this.addr,s),Cn(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Fd,s[r])}function dx(o,e,t){const n=this.cache,i=e.length,s=ba(t,i);Tn(n,s)||(o.uniform1iv(this.addr,s),Cn(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Od,s[r])}function fx(o,e,t){const n=this.cache,i=e.length,s=ba(t,i);Tn(n,s)||(o.uniform1iv(this.addr,s),Cn(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Ud,s[r])}function px(o){switch(o){case 5126:return Kg;case 35664:return Zg;case 35665:return $g;case 35666:return Qg;case 35674:return Jg;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return ox;case 5125:return rx;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}class mx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jg(t.type)}}class gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=px(t.type)}}class xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function Hh(o,e){o.seq.push(e),o.map[e.id]=e}function _x(o,e,t){const n=o.name,i=n.length;for(ol.lastIndex=0;;){const s=ol.exec(n),r=ol.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Hh(t,c===void 0?new mx(a,o,e):new gx(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new xx(a),Hh(t,u)),t=u}}}class oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);_x(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Vh(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const vx=37297;let yx=0;function Mx(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const Wh=new wt;function bx(o){Bt._getMatrix(Wh,Bt.workingColorSpace,o);const e=`mat3( ${Wh.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(o)){case ya:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Xh(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Mx(o.getShaderSource(e),r)}else return i}function Sx(o,e){const t=bx(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wx(o,e){let t;switch(e){case rd:t="Linear";break;case ad:t="Reinhard";break;case ld:t="Cineon";break;case xa:t="ACESFilmic";break;case cd:t="AgX";break;case hd:t="Neutral";break;case Df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new b;function Ex(){Bt.getLuminanceCoefficients(Rr);const o=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Tx(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Wo(o){return o!==""}function qh(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(o){return o.replace(Px,Dx)}const Rx=new Map;function Dx(o,e){let t=Rt[e];if(t===void 0){const n=Rx.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(o){return o.replace(Ix,Lx)}function Lx(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Kh(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Nx(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===td?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ux(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fx(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function Ox(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case od:e="ENVMAP_BLENDING_MULTIPLY";break;case Pf:e="ENVMAP_BLENDING_MIX";break;case Rf:e="ENVMAP_BLENDING_ADD";break}return e}function Bx(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kx(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=Nx(t),c=Ux(t),h=Fx(t),u=Ox(t),d=Bx(t),f=Ax(t),g=Tx(s),x=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(m=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hs?"#define TONE_MAPPING":"",t.toneMapping!==hs?Rt.tonemapping_pars_fragment:"",t.toneMapping!==hs?wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,Sx("linearToOutputTexel",t.outputColorSpace),Ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),r=pc(r),r=qh(r,t),r=Yh(r,t),a=pc(a),a=qh(a,t),a=Yh(a,t),r=jh(r),a=jh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+r,_=v+p+a,T=Vh(i,i.VERTEX_SHADER,M),w=Vh(i,i.FRAGMENT_SHADER,_);i.attachShader(x,T),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(C){if(o.debug.checkShaderErrors){const L=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(T).trim(),P=i.getShaderInfoLog(w).trim();let U=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,x,T,w);else{const B=Xh(i,T,"vertex"),R=Xh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+B+`
`+R)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||P==="")&&(G=!1);G&&(C.diagnostics={runnable:U,programLog:L,vertexShader:{log:N,prefix:m},fragmentShader:{log:P,prefix:p}})}i.deleteShader(T),i.deleteShader(w),E=new oa(i,x),y=Cx(i,x)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,vx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let zx=0;class Gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hx(e),t.set(e,n)),n}}class Hx{constructor(e){this.id=zx++,this.code=e,this.usedTimes=0}}function Vx(o,e,t,n,i,s,r){const a=new Rc,l=new Gx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,C,L,N){const P=L.fog,U=N.geometry,G=y.isMeshStandardMaterial?L.environment:null,B=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),R=B&&B.mapping===_a?B.image.height:null,O=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Q=j!==void 0?j.length:0;let ne=0;U.morphAttributes.position!==void 0&&(ne=1),U.morphAttributes.normal!==void 0&&(ne=2),U.morphAttributes.color!==void 0&&(ne=3);let ye,Z,pe,$;if(O){const ft=Ai[O];ye=ft.vertexShader,Z=ft.fragmentShader}else ye=y.vertexShader,Z=y.fragmentShader,l.update(y),pe=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);const ee=o.getRenderTarget(),ce=o.state.buffers.depth.getReversed(),fe=N.isInstancedMesh===!0,ae=N.isBatchedMesh===!0,Se=!!y.map,V=!!y.matcap,Ie=!!B,k=!!y.aoMap,dt=!!y.lightMap,xe=!!y.bumpMap,Ve=!!y.normalMap,Be=!!y.displacementMap,it=!!y.emissiveMap,Xe=!!y.metalnessMap,F=!!y.roughnessMap,D=y.anisotropy>0,te=y.clearcoat>0,_e=y.dispersion>0,le=y.iridescence>0,ue=y.sheen>0,Le=y.transmission>0,Me=D&&!!y.anisotropyMap,ke=te&&!!y.clearcoatMap,gt=te&&!!y.clearcoatNormalMap,Ae=te&&!!y.clearcoatRoughnessMap,Oe=le&&!!y.iridescenceMap,nt=le&&!!y.iridescenceThicknessMap,at=ue&&!!y.sheenColorMap,Ye=ue&&!!y.sheenRoughnessMap,pt=!!y.specularMap,lt=!!y.specularColorMap,xt=!!y.specularIntensityMap,K=Le&&!!y.transmissionMap,Re=Le&&!!y.thicknessMap,me=!!y.gradientMap,ve=!!y.alphaMap,Fe=y.alphaTest>0,Ge=!!y.alphaHash,je=!!y.extensions;let Nt=hs;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Nt=o.toneMapping);const Ft={shaderID:O,shaderType:y.type,shaderName:y.name,vertexShader:ye,fragmentShader:Z,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ae,batchingColor:ae&&N._colorsTexture!==null,instancing:fe,instancingColor:fe&&N.instanceColor!==null,instancingMorph:fe&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?o.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:On,alphaToCoverage:!!y.alphaToCoverage,map:Se,matcap:V,envMap:Ie,envMapMode:Ie&&B.mapping,envMapCubeUVHeight:R,aoMap:k,lightMap:dt,bumpMap:xe,normalMap:Ve,displacementMap:d&&Be,emissiveMap:it,normalMapObjectSpace:Ve&&y.normalMapType===Of,normalMapTangentSpace:Ve&&y.normalMapType===Cc,metalnessMap:Xe,roughnessMap:F,anisotropy:D,anisotropyMap:Me,clearcoat:te,clearcoatMap:ke,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ae,dispersion:_e,iridescence:le,iridescenceMap:Oe,iridescenceThicknessMap:nt,sheen:ue,sheenColorMap:at,sheenRoughnessMap:Ye,specularMap:pt,specularColorMap:lt,specularIntensityMap:xt,transmission:Le,transmissionMap:K,thicknessMap:Re,gradientMap:me,opaque:y.transparent===!1&&y.blending===Es&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:Fe,alphaHash:Ge,combine:y.combine,mapUv:Se&&x(y.map.channel),aoMapUv:k&&x(y.aoMap.channel),lightMapUv:dt&&x(y.lightMap.channel),bumpMapUv:xe&&x(y.bumpMap.channel),normalMapUv:Ve&&x(y.normalMap.channel),displacementMapUv:Be&&x(y.displacementMap.channel),emissiveMapUv:it&&x(y.emissiveMap.channel),metalnessMapUv:Xe&&x(y.metalnessMap.channel),roughnessMapUv:F&&x(y.roughnessMap.channel),anisotropyMapUv:Me&&x(y.anisotropyMap.channel),clearcoatMapUv:ke&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:gt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:at&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(y.sheenRoughnessMap.channel),specularMapUv:pt&&x(y.specularMap.channel),specularColorMapUv:lt&&x(y.specularColorMap.channel),specularIntensityMapUv:xt&&x(y.specularIntensityMap.channel),transmissionMapUv:K&&x(y.transmissionMap.channel),thicknessMapUv:Re&&x(y.thicknessMap.channel),alphaMapUv:ve&&x(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ve||D),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Se||ve),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ce,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&C.length>0,shadowMapType:o.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&Bt.getTransfer(y.map.colorSpace)===tn,decodeVideoTextureEmissive:it&&y.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(y.emissiveMap.colorSpace)===tn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kt,flipSided:y.side===In,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:je&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&y.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(v(S,y),M(S,y),S.push(o.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const S=g[y.type];let C;if(S){const L=Ai[S];C=vi.clone(L.uniforms)}else C=y.uniforms;return C}function T(y,S){let C;for(let L=0,N=h.length;L<N;L++){const P=h[L];if(P.cacheKey===S){C=P,++C.usedTimes;break}}return C===void 0&&(C=new kx(o,S,y,s),h.push(C)),C}function w(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:E}}function Wx(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Xx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Zh(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $h(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,g,x,m){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){const p=r(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,x,m){const p=r(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Xx),n.length>1&&n.sort(d||Zh),i.length>1&&i.sort(d||Zh)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function qx(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new $h,o.set(n,[r])):i>=s.length?(r=new $h,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Yx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ie};break;case"SpotLight":t={position:new b,direction:new b,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":t={color:new ie,position:new b,halfWidth:new b,halfHeight:new b};break}return o[e.id]=t,t}}}function jx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Kx=0;function Zx(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function $x(o){const e=new Yx,t=jx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const i=new b,s=new tt,r=new tt;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,M=0,_=0,T=0,w=0,A=0;c.sort(Zx);for(let y=0,S=c.length;y<S;y++){const C=c[y],L=C.color,N=C.intensity,P=C.distance,U=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*N,u+=L.g*N,d+=L.b*N;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],N);A++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,R=t.get(C);R.shadowIntensity=B.intensity,R.shadowBias=B.bias,R.shadowNormalBias=B.normalBias,R.shadowRadius=B.radius,R.shadowMapSize=B.mapSize,n.directionalShadow[f]=R,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=G,f++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(L).multiplyScalar(N),G.distance=P,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;const B=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,B.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=B.matrix,C.castShadow){const R=t.get(C);R.shadowIntensity=B.intensity,R.shadowBias=B.bias,R.shadowNormalBias=B.normalBias,R.shadowRadius=B.radius,R.shadowMapSize=B.mapSize,n.spotShadow[x]=R,n.spotShadowMap[x]=U,_++}x++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(L).multiplyScalar(N),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const B=C.shadow,R=t.get(C);R.shadowIntensity=B.intensity,R.shadowBias=B.bias,R.shadowNormalBias=B.normalBias,R.shadowRadius=B.radius,R.shadowMapSize=B.mapSize,R.shadowCameraNear=B.camera.near,R.shadowCameraFar=B.camera.far,n.pointShadow[g]=R,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(N),G.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=G,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==x||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==v||E.numPointShadows!==M||E.numSpotShadows!==_||E.numSpotMaps!==T||E.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,E.directionalLength=f,E.pointLength=g,E.spotLength=x,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=v,E.numPointShadows=M,E.numSpotShadows=_,E.numSpotMaps=T,E.numLightProbes=A,n.version=Kx++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const M=c[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),r.identity(),s.copy(M.matrixWorld),s.premultiply(m),r.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Qh(o){const e=new $x(o),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function r(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Qx(o){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let a;return r===void 0?(a=new Qh(o),e.set(i,[a])):s>=r.length?(a=new Qh(o),r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Jx extends ai{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e_ extends ai{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
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
}`;function i_(o,e,t){let n=new Dc;const i=new Ue,s=new Ue,r=new Wt,a=new Jx({depthPacking:Ff}),l=new e_,c={},h=t.maxTextureSize,u={[li]:In,[In]:li,[Kt]:Kt},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:t_,fragmentShader:n_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let p=this.type;this.render=function(w,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=o.getRenderTarget(),S=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Gn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==Bi&&this.type===Bi,P=p===Bi&&this.type!==Bi;for(let U=0,G=w.length;U<G;U++){const B=w[U],R=B.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const O=R.getFrameExtents();if(i.multiply(O),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,R.mapSize.y=s.y)),R.map===null||N===!0||P===!0){const Q=this.type!==Bi?{minFilter:En,magFilter:En}:{};R.map!==null&&R.map.dispose(),R.map=new Yn(i.x,i.y,Q),R.map.texture.name=B.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const j=R.getViewportCount();for(let Q=0;Q<j;Q++){const ne=R.getViewport(Q);r.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),L.viewport(r),R.updateMatrices(B,Q),n=R.getFrustum(),_(A,E,R.camera,B,this.type)}R.isPointLightShadow!==!0&&this.type===Bi&&v(R,E),R.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(y,S,C)};function v(w,A){const E=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(A,null,E,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(A,null,E,f,x,null)}function M(w,A,E,y){let S=null;const C=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=E.isPointLight===!0?l:a,o.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=S.uuid,N=A.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let U=P[N];U===void 0&&(U=S.clone(),P[N]=U,A.addEventListener("dispose",T)),S=U}if(S.visible=A.visible,S.wireframe=A.wireframe,y===Bi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=o.properties.get(S);L.light=E}return S}function _(w,A,E,y,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Bi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const N=e.update(w),P=w.material;if(Array.isArray(P)){const U=N.groups;for(let G=0,B=U.length;G<B;G++){const R=U[G],O=P[R.materialIndex];if(O&&O.visible){const j=M(w,O,y,S);w.onBeforeShadow(o,w,A,E,N,j,R),o.renderBufferDirect(E,null,N,j,w,R),w.onAfterShadow(o,w,A,E,N,j,R)}}}else if(P.visible){const U=M(w,P,y,S);w.onBeforeShadow(o,w,A,E,N,U,null),o.renderBufferDirect(E,null,N,U,w,null),w.onAfterShadow(o,w,A,E,N,U,null)}}const L=w.children;for(let N=0,P=L.length;N<P;N++)_(L[N],A,E,y,S)}function T(w){w.target.removeEventListener("dispose",T);for(const E in c){const y=c[E],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const s_={[Rl]:Dl,[Il]:Ul,[Ll]:Fl,[po]:Nl,[Dl]:Rl,[Ul]:Il,[Fl]:Ll,[Nl]:po};function o_(o,e){function t(){let K=!1;const Re=new Wt;let me=null;const ve=new Wt(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!K&&(o.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){K=Fe},setClear:function(Fe,Ge,je,Nt,Ft){Ft===!0&&(Fe*=Nt,Ge*=Nt,je*=Nt),Re.set(Fe,Ge,je,Nt),ve.equals(Re)===!1&&(o.clearColor(Fe,Ge,je,Nt),ve.copy(Re))},reset:function(){K=!1,me=null,ve.set(-1,0,0,0)}}}function n(){let K=!1,Re=!1,me=null,ve=null,Fe=null;return{setReversed:function(Ge){if(Re!==Ge){const je=e.get("EXT_clip_control");Re?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Fe;Fe=null,this.setClear(Nt)}Re=Ge},getReversed:function(){return Re},setTest:function(Ge){Ge?ee(o.DEPTH_TEST):ce(o.DEPTH_TEST)},setMask:function(Ge){me!==Ge&&!K&&(o.depthMask(Ge),me=Ge)},setFunc:function(Ge){if(Re&&(Ge=s_[Ge]),ve!==Ge){switch(Ge){case Rl:o.depthFunc(o.NEVER);break;case Dl:o.depthFunc(o.ALWAYS);break;case Il:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case Ll:o.depthFunc(o.EQUAL);break;case Nl:o.depthFunc(o.GEQUAL);break;case Ul:o.depthFunc(o.GREATER);break;case Fl:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ve=Ge}},setLocked:function(Ge){K=Ge},setClear:function(Ge){Fe!==Ge&&(Re&&(Ge=1-Ge),o.clearDepth(Ge),Fe=Ge)},reset:function(){K=!1,me=null,ve=null,Fe=null,Re=!1}}}function i(){let K=!1,Re=null,me=null,ve=null,Fe=null,Ge=null,je=null,Nt=null,Ft=null;return{setTest:function(ft){K||(ft?ee(o.STENCIL_TEST):ce(o.STENCIL_TEST))},setMask:function(ft){Re!==ft&&!K&&(o.stencilMask(ft),Re=ft)},setFunc:function(ft,ln,un){(me!==ft||ve!==ln||Fe!==un)&&(o.stencilFunc(ft,ln,un),me=ft,ve=ln,Fe=un)},setOp:function(ft,ln,un){(Ge!==ft||je!==ln||Nt!==un)&&(o.stencilOp(ft,ln,un),Ge=ft,je=ln,Nt=un)},setLocked:function(ft){K=ft},setClear:function(ft){Ft!==ft&&(o.clearStencil(ft),Ft=ft)},reset:function(){K=!1,Re=null,me=null,ve=null,Fe=null,Ge=null,je=null,Nt=null,Ft=null}}}const s=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,M=null,_=null,T=null,w=null,A=new ie(0,0,0),E=0,y=!1,S=null,C=null,L=null,N=null,P=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const R=o.getParameter(o.VERSION);R.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(R)[1]),G=B>=1):R.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),G=B>=2);let O=null,j={};const Q=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),ye=new Wt().fromArray(Q),Z=new Wt().fromArray(ne);function pe(K,Re,me,ve){const Fe=new Uint8Array(4),Ge=o.createTexture();o.bindTexture(K,Ge),o.texParameteri(K,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(K,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let je=0;je<me;je++)K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,ve,0,o.RGBA,o.UNSIGNED_BYTE,Fe):o.texImage2D(Re+je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Fe);return Ge}const $={};$[o.TEXTURE_2D]=pe(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ee(o.DEPTH_TEST),r.setFunc(po),xe(!1),Ve(eh),ee(o.CULL_FACE),k(Gn);function ee(K){h[K]!==!0&&(o.enable(K),h[K]=!0)}function ce(K){h[K]!==!1&&(o.disable(K),h[K]=!1)}function fe(K,Re){return u[K]!==Re?(o.bindFramebuffer(K,Re),u[K]=Re,K===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=Re),K===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function ae(K,Re){let me=f,ve=!1;if(K){me=d.get(Re),me===void 0&&(me=[],d.set(Re,me));const Fe=K.textures;if(me.length!==Fe.length||me[0]!==o.COLOR_ATTACHMENT0){for(let Ge=0,je=Fe.length;Ge<je;Ge++)me[Ge]=o.COLOR_ATTACHMENT0+Ge;me.length=Fe.length,ve=!0}}else me[0]!==o.BACK&&(me[0]=o.BACK,ve=!0);ve&&o.drawBuffers(me)}function Se(K){return g!==K?(o.useProgram(K),g=K,!0):!1}const V={[zi]:o.FUNC_ADD,[mf]:o.FUNC_SUBTRACT,[gf]:o.FUNC_REVERSE_SUBTRACT};V[xf]=o.MIN,V[_f]=o.MAX;const Ie={[Tl]:o.ZERO,[vf]:o.ONE,[yf]:o.SRC_COLOR,[Cl]:o.SRC_ALPHA,[wf]:o.SRC_ALPHA_SATURATE,[sd]:o.DST_COLOR,[id]:o.DST_ALPHA,[Mf]:o.ONE_MINUS_SRC_COLOR,[Pl]:o.ONE_MINUS_SRC_ALPHA,[Sf]:o.ONE_MINUS_DST_COLOR,[bf]:o.ONE_MINUS_DST_ALPHA,[Ef]:o.CONSTANT_COLOR,[Af]:o.ONE_MINUS_CONSTANT_COLOR,[Tf]:o.CONSTANT_ALPHA,[Cf]:o.ONE_MINUS_CONSTANT_ALPHA};function k(K,Re,me,ve,Fe,Ge,je,Nt,Ft,ft){if(K===Gn){x===!0&&(ce(o.BLEND),x=!1);return}if(x===!1&&(ee(o.BLEND),x=!0),K!==nd){if(K!==m||ft!==y){if((p!==zi||_!==zi)&&(o.blendEquation(o.FUNC_ADD),p=zi,_=zi),ft)switch(K){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mn:o.blendFunc(o.ONE,o.ONE);break;case th:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mn:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case th:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,M=null,T=null,w=null,A.set(0,0,0),E=0,m=K,y=ft}return}Fe=Fe||Re,Ge=Ge||me,je=je||ve,(Re!==p||Fe!==_)&&(o.blendEquationSeparate(V[Re],V[Fe]),p=Re,_=Fe),(me!==v||ve!==M||Ge!==T||je!==w)&&(o.blendFuncSeparate(Ie[me],Ie[ve],Ie[Ge],Ie[je]),v=me,M=ve,T=Ge,w=je),(Nt.equals(A)===!1||Ft!==E)&&(o.blendColor(Nt.r,Nt.g,Nt.b,Ft),A.copy(Nt),E=Ft),m=K,y=!1}function dt(K,Re){K.side===Kt?ce(o.CULL_FACE):ee(o.CULL_FACE);let me=K.side===In;Re&&(me=!me),xe(me),K.blending===Es&&K.transparent===!1?k(Gn):k(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),r.setFunc(K.depthFunc),r.setTest(K.depthTest),r.setMask(K.depthWrite),s.setMask(K.colorWrite);const ve=K.stencilWrite;a.setTest(ve),ve&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),it(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ee(o.SAMPLE_ALPHA_TO_COVERAGE):ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function xe(K){S!==K&&(K?o.frontFace(o.CW):o.frontFace(o.CCW),S=K)}function Ve(K){K!==ff?(ee(o.CULL_FACE),K!==C&&(K===eh?o.cullFace(o.BACK):K===pf?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ce(o.CULL_FACE),C=K}function Be(K){K!==L&&(G&&o.lineWidth(K),L=K)}function it(K,Re,me){K?(ee(o.POLYGON_OFFSET_FILL),(N!==Re||P!==me)&&(o.polygonOffset(Re,me),N=Re,P=me)):ce(o.POLYGON_OFFSET_FILL)}function Xe(K){K?ee(o.SCISSOR_TEST):ce(o.SCISSOR_TEST)}function F(K){K===void 0&&(K=o.TEXTURE0+U-1),O!==K&&(o.activeTexture(K),O=K)}function D(K,Re,me){me===void 0&&(O===null?me=o.TEXTURE0+U-1:me=O);let ve=j[me];ve===void 0&&(ve={type:void 0,texture:void 0},j[me]=ve),(ve.type!==K||ve.texture!==Re)&&(O!==me&&(o.activeTexture(me),O=me),o.bindTexture(K,Re||$[K]),ve.type=K,ve.texture=Re)}function te(){const K=j[O];K!==void 0&&K.type!==void 0&&(o.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function _e(){try{o.compressedTexImage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function le(){try{o.compressedTexImage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Le(){try{o.texSubImage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Me(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ke(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function gt(){try{o.texStorage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(){try{o.texStorage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function nt(){try{o.texImage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function at(K){ye.equals(K)===!1&&(o.scissor(K.x,K.y,K.z,K.w),ye.copy(K))}function Ye(K){Z.equals(K)===!1&&(o.viewport(K.x,K.y,K.z,K.w),Z.copy(K))}function pt(K,Re){let me=c.get(Re);me===void 0&&(me=new WeakMap,c.set(Re,me));let ve=me.get(K);ve===void 0&&(ve=o.getUniformBlockIndex(Re,K.name),me.set(K,ve))}function lt(K,Re){const ve=c.get(Re).get(K);l.get(Re)!==ve&&(o.uniformBlockBinding(Re,ve,K.__bindingPointIndex),l.set(Re,ve))}function xt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},O=null,j={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,M=null,_=null,T=null,w=null,A=new ie(0,0,0),E=0,y=!1,S=null,C=null,L=null,N=null,P=null,ye.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ee,disable:ce,bindFramebuffer:fe,drawBuffers:ae,useProgram:Se,setBlending:k,setMaterial:dt,setFlipSided:xe,setCullFace:Ve,setLineWidth:Be,setPolygonOffset:it,setScissorTest:Xe,activeTexture:F,bindTexture:D,unbindTexture:te,compressedTexImage2D:_e,compressedTexImage3D:le,texImage2D:Oe,texImage3D:nt,updateUBOMapping:pt,uniformBlockBinding:lt,texStorage2D:gt,texStorage3D:Ae,texSubImage2D:ue,texSubImage3D:Le,compressedTexSubImage2D:Me,compressedTexSubImage3D:ke,scissor:at,viewport:Ye,reset:xt}}function Jh(o,e,t,n){const i=r_(n);switch(t){case gd:return o*e;case _d:return o*e;case vd:return o*e*2;case va:return o*e/i.components*i.byteLength;case Ec:return o*e/i.components*i.byteLength;case yd:return o*e*2/i.components*i.byteLength;case Ac:return o*e*2/i.components*i.byteLength;case xd:return o*e*3/i.components*i.byteLength;case ri:return o*e*4/i.components*i.byteLength;case Tc:return o*e*4/i.components*i.byteLength;case ea:case ta:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zl:case Hl:return Math.max(o,16)*Math.max(e,8)/4;case kl:case Gl:return Math.max(o,8)*Math.max(e,8)/2;case Vl:case Wl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case jl:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case sa:case rc:case ac:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Md:case lc:return Math.ceil(o/4)*Math.ceil(e/4)*8;case cc:case hc:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r_(o){switch(o){case bi:case fd:return{byteLength:1,components:1};case er:case pd:case yi:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case Ts:case bc:case oi:return{byteLength:4,components:1};case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function a_(o,e,t,n,i,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,D){return f?new OffscreenCanvas(F,D):ir("canvas")}function x(F,D,te){let _e=1;const le=Xe(F);if((le.width>te||le.height>te)&&(_e=te/Math.max(le.width,le.height)),_e<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ue=Math.floor(_e*le.width),Le=Math.floor(_e*le.height);u===void 0&&(u=g(ue,Le));const Me=D?g(ue,Le):u;return Me.width=ue,Me.height=Le,Me.getContext("2d").drawImage(F,0,0,ue,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ue+"x"+Le+")."),Me}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),F;return F}function m(F){return F.generateMipmaps}function p(F){o.generateMipmap(F)}function v(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function M(F,D,te,_e,le=!1){if(F!==null){if(o[F]!==void 0)return o[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ue=D;if(D===o.RED&&(te===o.FLOAT&&(ue=o.R32F),te===o.HALF_FLOAT&&(ue=o.R16F),te===o.UNSIGNED_BYTE&&(ue=o.R8)),D===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(ue=o.R8UI),te===o.UNSIGNED_SHORT&&(ue=o.R16UI),te===o.UNSIGNED_INT&&(ue=o.R32UI),te===o.BYTE&&(ue=o.R8I),te===o.SHORT&&(ue=o.R16I),te===o.INT&&(ue=o.R32I)),D===o.RG&&(te===o.FLOAT&&(ue=o.RG32F),te===o.HALF_FLOAT&&(ue=o.RG16F),te===o.UNSIGNED_BYTE&&(ue=o.RG8)),D===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(ue=o.RG8UI),te===o.UNSIGNED_SHORT&&(ue=o.RG16UI),te===o.UNSIGNED_INT&&(ue=o.RG32UI),te===o.BYTE&&(ue=o.RG8I),te===o.SHORT&&(ue=o.RG16I),te===o.INT&&(ue=o.RG32I)),D===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),te===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),te===o.UNSIGNED_INT&&(ue=o.RGB32UI),te===o.BYTE&&(ue=o.RGB8I),te===o.SHORT&&(ue=o.RGB16I),te===o.INT&&(ue=o.RGB32I)),D===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),te===o.UNSIGNED_INT&&(ue=o.RGBA32UI),te===o.BYTE&&(ue=o.RGBA8I),te===o.SHORT&&(ue=o.RGBA16I),te===o.INT&&(ue=o.RGBA32I)),D===o.RGB&&te===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),D===o.RGBA){const Le=le?ya:Bt.getTransfer(_e);te===o.FLOAT&&(ue=o.RGBA32F),te===o.HALF_FLOAT&&(ue=o.RGBA16F),te===o.UNSIGNED_BYTE&&(ue=Le===tn?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function _(F,D){let te;return F?D===null||D===Ts||D===Cs?te=o.DEPTH24_STENCIL8:D===oi?te=o.DEPTH32F_STENCIL8:D===er&&(te=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Ts||D===Cs?te=o.DEPTH_COMPONENT24:D===oi?te=o.DEPTH_COMPONENT32F:D===er&&(te=o.DEPTH_COMPONENT16),te}function T(F,D){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==En&&F.minFilter!==Qn?Math.log2(Math.max(D.width,D.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?D.mipmaps.length:1}function w(F){const D=F.target;D.removeEventListener("dispose",w),E(D),D.isVideoTexture&&h.delete(D)}function A(F){const D=F.target;D.removeEventListener("dispose",A),S(D)}function E(F){const D=n.get(F);if(D.__webglInit===void 0)return;const te=F.source,_e=d.get(te);if(_e){const le=_e[D.__cacheKey];le.usedTimes--,le.usedTimes===0&&y(F),Object.keys(_e).length===0&&d.delete(te)}n.remove(F)}function y(F){const D=n.get(F);o.deleteTexture(D.__webglTexture);const te=F.source,_e=d.get(te);delete _e[D.__cacheKey],r.memory.textures--}function S(F){const D=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(D.__webglFramebuffer[_e]))for(let le=0;le<D.__webglFramebuffer[_e].length;le++)o.deleteFramebuffer(D.__webglFramebuffer[_e][le]);else o.deleteFramebuffer(D.__webglFramebuffer[_e]);D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer[_e])}else{if(Array.isArray(D.__webglFramebuffer))for(let _e=0;_e<D.__webglFramebuffer.length;_e++)o.deleteFramebuffer(D.__webglFramebuffer[_e]);else o.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&o.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let _e=0;_e<D.__webglColorRenderbuffer.length;_e++)D.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(D.__webglColorRenderbuffer[_e]);D.__webglDepthRenderbuffer&&o.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const te=F.textures;for(let _e=0,le=te.length;_e<le;_e++){const ue=n.get(te[_e]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),r.memory.textures--),n.remove(te[_e])}n.remove(F)}let C=0;function L(){C=0}function N(){const F=C;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),C+=1,F}function P(F){const D=[];return D.push(F.wrapS),D.push(F.wrapT),D.push(F.wrapR||0),D.push(F.magFilter),D.push(F.minFilter),D.push(F.anisotropy),D.push(F.internalFormat),D.push(F.format),D.push(F.type),D.push(F.generateMipmaps),D.push(F.premultiplyAlpha),D.push(F.flipY),D.push(F.unpackAlignment),D.push(F.colorSpace),D.join()}function U(F,D){const te=n.get(F);if(F.isVideoTexture&&Be(F),F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){const _e=F.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(te,F,D);return}}t.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+D)}function G(F,D){const te=n.get(F);if(F.version>0&&te.__version!==F.version){Z(te,F,D);return}t.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+D)}function B(F,D){const te=n.get(F);if(F.version>0&&te.__version!==F.version){Z(te,F,D);return}t.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+D)}function R(F,D){const te=n.get(F);if(F.version>0&&te.__version!==F.version){pe(te,F,D);return}t.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+D)}const O={[Xn]:o.REPEAT,[Hi]:o.CLAMP_TO_EDGE,[ha]:o.MIRRORED_REPEAT},j={[En]:o.NEAREST,[dd]:o.NEAREST_MIPMAP_NEAREST,[Ho]:o.NEAREST_MIPMAP_LINEAR,[Qn]:o.LINEAR,[Jr]:o.LINEAR_MIPMAP_NEAREST,[Vi]:o.LINEAR_MIPMAP_LINEAR},Q={[Bf]:o.NEVER,[Wf]:o.ALWAYS,[kf]:o.LESS,[Sd]:o.LEQUAL,[zf]:o.EQUAL,[Vf]:o.GEQUAL,[Gf]:o.GREATER,[Hf]:o.NOTEQUAL};function ne(F,D){if(D.type===oi&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===Qn||D.magFilter===Jr||D.magFilter===Ho||D.magFilter===Vi||D.minFilter===Qn||D.minFilter===Jr||D.minFilter===Ho||D.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,O[D.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,O[D.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,O[D.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,j[D.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,j[D.minFilter]),D.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,Q[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===En||D.minFilter!==Ho&&D.minFilter!==Vi||D.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");o.texParameterf(F,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,i.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function ye(F,D){let te=!1;F.__webglInit===void 0&&(F.__webglInit=!0,D.addEventListener("dispose",w));const _e=D.source;let le=d.get(_e);le===void 0&&(le={},d.set(_e,le));const ue=P(D);if(ue!==F.__cacheKey){le[ue]===void 0&&(le[ue]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,te=!0),le[ue].usedTimes++;const Le=le[F.__cacheKey];Le!==void 0&&(le[F.__cacheKey].usedTimes--,Le.usedTimes===0&&y(D)),F.__cacheKey=ue,F.__webglTexture=le[ue].texture}return te}function Z(F,D,te){let _e=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(_e=o.TEXTURE_3D);const le=ye(F,D),ue=D.source;t.bindTexture(_e,F.__webglTexture,o.TEXTURE0+te);const Le=n.get(ue);if(ue.version!==Le.__version||le===!0){t.activeTexture(o.TEXTURE0+te);const Me=Bt.getPrimaries(Bt.workingColorSpace),ke=D.colorSpace===Gi?null:Bt.getPrimaries(D.colorSpace),gt=D.colorSpace===Gi||Me===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ae=x(D.image,!1,i.maxTextureSize);Ae=it(D,Ae);const Oe=s.convert(D.format,D.colorSpace),nt=s.convert(D.type);let at=M(D.internalFormat,Oe,nt,D.colorSpace,D.isVideoTexture);ne(_e,D);let Ye;const pt=D.mipmaps,lt=D.isVideoTexture!==!0,xt=Le.__version===void 0||le===!0,K=ue.dataReady,Re=T(D,Ae);if(D.isDepthTexture)at=_(D.format===Ps,D.type),xt&&(lt?t.texStorage2D(o.TEXTURE_2D,1,at,Ae.width,Ae.height):t.texImage2D(o.TEXTURE_2D,0,at,Ae.width,Ae.height,0,Oe,nt,null));else if(D.isDataTexture)if(pt.length>0){lt&&xt&&t.texStorage2D(o.TEXTURE_2D,Re,at,pt[0].width,pt[0].height);for(let me=0,ve=pt.length;me<ve;me++)Ye=pt[me],lt?K&&t.texSubImage2D(o.TEXTURE_2D,me,0,0,Ye.width,Ye.height,Oe,nt,Ye.data):t.texImage2D(o.TEXTURE_2D,me,at,Ye.width,Ye.height,0,Oe,nt,Ye.data);D.generateMipmaps=!1}else lt?(xt&&t.texStorage2D(o.TEXTURE_2D,Re,at,Ae.width,Ae.height),K&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Oe,nt,Ae.data)):t.texImage2D(o.TEXTURE_2D,0,at,Ae.width,Ae.height,0,Oe,nt,Ae.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){lt&&xt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Re,at,pt[0].width,pt[0].height,Ae.depth);for(let me=0,ve=pt.length;me<ve;me++)if(Ye=pt[me],D.format!==ri)if(Oe!==null)if(lt){if(K)if(D.layerUpdates.size>0){const Fe=Jh(Ye.width,Ye.height,D.format,D.type);for(const Ge of D.layerUpdates){const je=Ye.data.subarray(Ge*Fe/Ye.data.BYTES_PER_ELEMENT,(Ge+1)*Fe/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,Ge,Ye.width,Ye.height,1,Oe,je)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,0,Ye.width,Ye.height,Ae.depth,Oe,Ye.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,me,at,Ye.width,Ye.height,Ae.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?K&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,me,0,0,0,Ye.width,Ye.height,Ae.depth,Oe,nt,Ye.data):t.texImage3D(o.TEXTURE_2D_ARRAY,me,at,Ye.width,Ye.height,Ae.depth,0,Oe,nt,Ye.data)}else{lt&&xt&&t.texStorage2D(o.TEXTURE_2D,Re,at,pt[0].width,pt[0].height);for(let me=0,ve=pt.length;me<ve;me++)Ye=pt[me],D.format!==ri?Oe!==null?lt?K&&t.compressedTexSubImage2D(o.TEXTURE_2D,me,0,0,Ye.width,Ye.height,Oe,Ye.data):t.compressedTexImage2D(o.TEXTURE_2D,me,at,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?K&&t.texSubImage2D(o.TEXTURE_2D,me,0,0,Ye.width,Ye.height,Oe,nt,Ye.data):t.texImage2D(o.TEXTURE_2D,me,at,Ye.width,Ye.height,0,Oe,nt,Ye.data)}else if(D.isDataArrayTexture)if(lt){if(xt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Re,at,Ae.width,Ae.height,Ae.depth),K)if(D.layerUpdates.size>0){const me=Jh(Ae.width,Ae.height,D.format,D.type);for(const ve of D.layerUpdates){const Fe=Ae.data.subarray(ve*me/Ae.data.BYTES_PER_ELEMENT,(ve+1)*me/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,Oe,nt,Fe)}D.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,nt,Ae.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,at,Ae.width,Ae.height,Ae.depth,0,Oe,nt,Ae.data);else if(D.isData3DTexture)lt?(xt&&t.texStorage3D(o.TEXTURE_3D,Re,at,Ae.width,Ae.height,Ae.depth),K&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,nt,Ae.data)):t.texImage3D(o.TEXTURE_3D,0,at,Ae.width,Ae.height,Ae.depth,0,Oe,nt,Ae.data);else if(D.isFramebufferTexture){if(xt)if(lt)t.texStorage2D(o.TEXTURE_2D,Re,at,Ae.width,Ae.height);else{let me=Ae.width,ve=Ae.height;for(let Fe=0;Fe<Re;Fe++)t.texImage2D(o.TEXTURE_2D,Fe,at,me,ve,0,Oe,nt,null),me>>=1,ve>>=1}}else if(pt.length>0){if(lt&&xt){const me=Xe(pt[0]);t.texStorage2D(o.TEXTURE_2D,Re,at,me.width,me.height)}for(let me=0,ve=pt.length;me<ve;me++)Ye=pt[me],lt?K&&t.texSubImage2D(o.TEXTURE_2D,me,0,0,Oe,nt,Ye):t.texImage2D(o.TEXTURE_2D,me,at,Oe,nt,Ye);D.generateMipmaps=!1}else if(lt){if(xt){const me=Xe(Ae);t.texStorage2D(o.TEXTURE_2D,Re,at,me.width,me.height)}K&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,nt,Ae)}else t.texImage2D(o.TEXTURE_2D,0,at,Oe,nt,Ae);m(D)&&p(_e),Le.__version=ue.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function pe(F,D,te){if(D.image.length!==6)return;const _e=ye(F,D),le=D.source;t.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+te);const ue=n.get(le);if(le.version!==ue.__version||_e===!0){t.activeTexture(o.TEXTURE0+te);const Le=Bt.getPrimaries(Bt.workingColorSpace),Me=D.colorSpace===Gi?null:Bt.getPrimaries(D.colorSpace),ke=D.colorSpace===Gi||Le===Me?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const gt=D.isCompressedTexture||D.image[0].isCompressedTexture,Ae=D.image[0]&&D.image[0].isDataTexture,Oe=[];for(let ve=0;ve<6;ve++)!gt&&!Ae?Oe[ve]=x(D.image[ve],!0,i.maxCubemapSize):Oe[ve]=Ae?D.image[ve].image:D.image[ve],Oe[ve]=it(D,Oe[ve]);const nt=Oe[0],at=s.convert(D.format,D.colorSpace),Ye=s.convert(D.type),pt=M(D.internalFormat,at,Ye,D.colorSpace),lt=D.isVideoTexture!==!0,xt=ue.__version===void 0||_e===!0,K=le.dataReady;let Re=T(D,nt);ne(o.TEXTURE_CUBE_MAP,D);let me;if(gt){lt&&xt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Re,pt,nt.width,nt.height);for(let ve=0;ve<6;ve++){me=Oe[ve].mipmaps;for(let Fe=0;Fe<me.length;Fe++){const Ge=me[Fe];D.format!==ri?at!==null?lt?K&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ge.width,Ge.height,at,Ge.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,pt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?K&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ge.width,Ge.height,at,Ye,Ge.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,pt,Ge.width,Ge.height,0,at,Ye,Ge.data)}}}else{if(me=D.mipmaps,lt&&xt){me.length>0&&Re++;const ve=Xe(Oe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Re,pt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){lt?K&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Oe[ve].width,Oe[ve].height,at,Ye,Oe[ve].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pt,Oe[ve].width,Oe[ve].height,0,at,Ye,Oe[ve].data);for(let Fe=0;Fe<me.length;Fe++){const je=me[Fe].image[ve].image;lt?K&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,je.width,je.height,at,Ye,je.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,pt,je.width,je.height,0,at,Ye,je.data)}}else{lt?K&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,at,Ye,Oe[ve]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pt,at,Ye,Oe[ve]);for(let Fe=0;Fe<me.length;Fe++){const Ge=me[Fe];lt?K&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,at,Ye,Ge.image[ve]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,pt,at,Ye,Ge.image[ve])}}}m(D)&&p(o.TEXTURE_CUBE_MAP),ue.__version=le.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function $(F,D,te,_e,le,ue){const Le=s.convert(te.format,te.colorSpace),Me=s.convert(te.type),ke=M(te.internalFormat,Le,Me,te.colorSpace),gt=n.get(D),Ae=n.get(te);if(Ae.__renderTarget=D,!gt.__hasExternalTextures){const Oe=Math.max(1,D.width>>ue),nt=Math.max(1,D.height>>ue);le===o.TEXTURE_3D||le===o.TEXTURE_2D_ARRAY?t.texImage3D(le,ue,ke,Oe,nt,D.depth,0,Le,Me,null):t.texImage2D(le,ue,ke,Oe,nt,0,Le,Me,null)}t.bindFramebuffer(o.FRAMEBUFFER,F),Ve(D)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,le,Ae.__webglTexture,0,xe(D)):(le===o.TEXTURE_2D||le>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,le,Ae.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(F,D,te){if(o.bindRenderbuffer(o.RENDERBUFFER,F),D.depthBuffer){const _e=D.depthTexture,le=_e&&_e.isDepthTexture?_e.type:null,ue=_(D.stencilBuffer,le),Le=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Me=xe(D);Ve(D)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Me,ue,D.width,D.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,Me,ue,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,ue,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,F)}else{const _e=D.textures;for(let le=0;le<_e.length;le++){const ue=_e[le],Le=s.convert(ue.format,ue.colorSpace),Me=s.convert(ue.type),ke=M(ue.internalFormat,Le,Me,ue.colorSpace),gt=xe(D);te&&Ve(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,ke,D.width,D.height):Ve(D)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,ke,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,ke,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ce(F,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,F),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=n.get(D.depthTexture);_e.__renderTarget=D,(!_e.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),U(D.depthTexture,0);const le=_e.__webglTexture,ue=xe(D);if(D.depthTexture.format===lo)Ve(D)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,le,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,le,0);else if(D.depthTexture.format===Ps)Ve(D)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,le,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function fe(F){const D=n.get(F),te=F.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==F.depthTexture){const _e=F.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),_e){const le=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,_e.removeEventListener("dispose",le)};_e.addEventListener("dispose",le),D.__depthDisposeCallback=le}D.__boundDepthTexture=_e}if(F.depthTexture&&!D.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ce(D.__webglFramebuffer,F)}else if(te){D.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[_e]),D.__webglDepthbuffer[_e]===void 0)D.__webglDepthbuffer[_e]=o.createRenderbuffer(),ee(D.__webglDepthbuffer[_e],F,!1);else{const le=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=D.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,le,o.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=o.createRenderbuffer(),ee(D.__webglDepthbuffer,F,!1);else{const _e=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=D.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,le)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(F,D,te){const _e=n.get(F);D!==void 0&&$(_e.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&fe(F)}function Se(F){const D=F.texture,te=n.get(F),_e=n.get(D);F.addEventListener("dispose",A);const le=F.textures,ue=F.isWebGLCubeRenderTarget===!0,Le=le.length>1;if(Le||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=D.version,r.memory.textures++),ue){te.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(D.mipmaps&&D.mipmaps.length>0){te.__webglFramebuffer[Me]=[];for(let ke=0;ke<D.mipmaps.length;ke++)te.__webglFramebuffer[Me][ke]=o.createFramebuffer()}else te.__webglFramebuffer[Me]=o.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){te.__webglFramebuffer=[];for(let Me=0;Me<D.mipmaps.length;Me++)te.__webglFramebuffer[Me]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Le)for(let Me=0,ke=le.length;Me<ke;Me++){const gt=n.get(le[Me]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),r.memory.textures++)}if(F.samples>0&&Ve(F)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Me=0;Me<le.length;Me++){const ke=le[Me];te.__webglColorRenderbuffer[Me]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[Me]);const gt=s.convert(ke.format,ke.colorSpace),Ae=s.convert(ke.type),Oe=M(ke.internalFormat,gt,Ae,ke.colorSpace,F.isXRRenderTarget===!0),nt=xe(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,nt,Oe,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Me,o.RENDERBUFFER,te.__webglColorRenderbuffer[Me])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),ee(te.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),ne(o.TEXTURE_CUBE_MAP,D);for(let Me=0;Me<6;Me++)if(D.mipmaps&&D.mipmaps.length>0)for(let ke=0;ke<D.mipmaps.length;ke++)$(te.__webglFramebuffer[Me][ke],F,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke);else $(te.__webglFramebuffer[Me],F,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(D)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Me=0,ke=le.length;Me<ke;Me++){const gt=le[Me],Ae=n.get(gt);t.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),ne(o.TEXTURE_2D,gt),$(te.__webglFramebuffer,F,gt,o.COLOR_ATTACHMENT0+Me,o.TEXTURE_2D,0),m(gt)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let Me=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Me=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Me,_e.__webglTexture),ne(Me,D),D.mipmaps&&D.mipmaps.length>0)for(let ke=0;ke<D.mipmaps.length;ke++)$(te.__webglFramebuffer[ke],F,D,o.COLOR_ATTACHMENT0,Me,ke);else $(te.__webglFramebuffer,F,D,o.COLOR_ATTACHMENT0,Me,0);m(D)&&p(Me),t.unbindTexture()}F.depthBuffer&&fe(F)}function V(F){const D=F.textures;for(let te=0,_e=D.length;te<_e;te++){const le=D[te];if(m(le)){const ue=v(F),Le=n.get(le).__webglTexture;t.bindTexture(ue,Le),p(ue),t.unbindTexture()}}}const Ie=[],k=[];function dt(F){if(F.samples>0){if(Ve(F)===!1){const D=F.textures,te=F.width,_e=F.height;let le=o.COLOR_BUFFER_BIT;const ue=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=n.get(F),Me=D.length>1;if(Me)for(let ke=0;ke<D.length;ke++)t.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let ke=0;ke<D.length;ke++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(le|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(le|=o.STENCIL_BUFFER_BIT)),Me){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);const gt=n.get(D[ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,te,_e,0,0,te,_e,le,o.NEAREST),l===!0&&(Ie.length=0,k.length=0,Ie.push(o.COLOR_ATTACHMENT0+ke),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ie.push(ue),k.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Me)for(let ke=0;ke<D.length;ke++){t.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);const gt=n.get(D[ke]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,gt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const D=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[D])}}}function xe(F){return Math.min(i.maxSamples,F.samples)}function Ve(F){const D=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Be(F){const D=r.render.frame;h.get(F)!==D&&(h.set(F,D),F.update())}function it(F,D){const te=F.colorSpace,_e=F.format,le=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||te!==On&&te!==Gi&&(Bt.getTransfer(te)===tn?(_e!==ri||le!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),D}function Xe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=U,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=R,this.rebindTextures=ae,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ve}function l_(o,e){function t(n,i=Gi){let s;const r=Bt.getTransfer(i);if(n===bi)return o.UNSIGNED_BYTE;if(n===Sc)return o.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return o.UNSIGNED_SHORT_5_5_5_1;if(n===md)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return o.BYTE;if(n===pd)return o.SHORT;if(n===er)return o.UNSIGNED_SHORT;if(n===bc)return o.INT;if(n===Ts)return o.UNSIGNED_INT;if(n===oi)return o.FLOAT;if(n===yi)return o.HALF_FLOAT;if(n===gd)return o.ALPHA;if(n===xd)return o.RGB;if(n===ri)return o.RGBA;if(n===_d)return o.LUMINANCE;if(n===vd)return o.LUMINANCE_ALPHA;if(n===lo)return o.DEPTH_COMPONENT;if(n===Ps)return o.DEPTH_STENCIL;if(n===va)return o.RED;if(n===Ec)return o.RED_INTEGER;if(n===yd)return o.RG;if(n===Ac)return o.RG_INTEGER;if(n===Tc)return o.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(r===tn)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===zl||n===Gl||n===Hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Wl||n===Xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vl||n===Wl)return r===tn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xl)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===Yl||n===jl||n===Kl||n===Zl||n===$l||n===Ql||n===Jl||n===ec||n===tc||n===nc||n===ic||n===sc||n===oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ql)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return r===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===rc||n===ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===sa)return r===tn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Md||n===lc||n===cc||n===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class c_ extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h_={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const u_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
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

}`;class f_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new on({vertexShader:u_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p_ extends wo{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new f_,m=t.getContextAttributes();let p=null,v=null;const M=[],_=[],T=new Ue;let w=null;const A=new Nn;A.viewport=new Wt;const E=new Nn;E.viewport=new Wt;const y=[A,E],S=new c_;let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=M[Z];return pe===void 0&&(pe=new rl,M[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=M[Z];return pe===void 0&&(pe=new rl,M[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=M[Z];return pe===void 0&&(pe=new rl,M[Z]=pe),pe.getHandSpace()};function N(Z){const pe=_.indexOf(Z.inputSource);if(pe===-1)return;const $=M[pe];$!==void 0&&($.update(Z.inputSource,Z.frame,c||r),$.dispatchEvent({type:Z.type,data:Z.inputSource}))}function P(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",U);for(let Z=0;Z<M.length;Z++){const pe=_[Z];pe!==null&&(_[Z]=null,M[Z].disconnect(pe))}C=null,L=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",P),i.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Yn(f.framebufferWidth,f.framebufferHeight,{format:ri,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let pe=null,$=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?Ps:lo,$=m.stencil?Cs:Ts);const ce={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Yn(d.textureWidth,d.textureHeight,{format:ri,type:bi,depthTexture:new Lc(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(Z){for(let pe=0;pe<Z.removed.length;pe++){const $=Z.removed[pe],ee=_.indexOf($);ee>=0&&(_[ee]=null,M[ee].disconnect($))}for(let pe=0;pe<Z.added.length;pe++){const $=Z.added[pe];let ee=_.indexOf($);if(ee===-1){for(let fe=0;fe<M.length;fe++)if(fe>=_.length){_.push($),ee=fe;break}else if(_[fe]===null){_[fe]=$,ee=fe;break}if(ee===-1)break}const ce=M[ee];ce&&ce.connect($)}}const G=new b,B=new b;function R(Z,pe,$){G.setFromMatrixPosition(pe.matrixWorld),B.setFromMatrixPosition($.matrixWorld);const ee=G.distanceTo(B),ce=pe.projectionMatrix.elements,fe=$.projectionMatrix.elements,ae=ce[14]/(ce[10]-1),Se=ce[14]/(ce[10]+1),V=(ce[9]+1)/ce[5],Ie=(ce[9]-1)/ce[5],k=(ce[8]-1)/ce[0],dt=(fe[8]+1)/fe[0],xe=ae*k,Ve=ae*dt,Be=ee/(-k+dt),it=Be*-k;if(pe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(it),Z.translateZ(Be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ce[10]===-1)Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Xe=ae+Be,F=Se+Be,D=xe-it,te=Ve+(ee-it),_e=V*Se/F*Xe,le=Ie*Se/F*Xe;Z.projectionMatrix.makePerspective(D,te,_e,le,Xe,F),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function O(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let pe=Z.near,$=Z.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&($=x.depthFar)),S.near=E.near=A.near=pe,S.far=E.far=A.far=$,(C!==S.near||L!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,L=S.far),A.layers.mask=Z.layers.mask|2,E.layers.mask=Z.layers.mask|4,S.layers.mask=A.layers.mask|E.layers.mask;const ee=Z.parent,ce=S.cameras;O(S,ee);for(let fe=0;fe<ce.length;fe++)O(ce[fe],ee);ce.length===2?R(S,A,E):S.projectionMatrix.copy(A.projectionMatrix),j(Z,S,ee)};function j(Z,pe,$){$===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy($.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Q=null;function ne(Z,pe){if(h=pe.getViewerPose(c||r),g=pe,h!==null){const $=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ee=!1;$.length!==S.cameras.length&&(S.cameras.length=0,ee=!0);for(let fe=0;fe<$.length;fe++){const ae=$[fe];let Se=null;if(f!==null)Se=f.getViewport(ae);else{const Ie=u.getViewSubImage(d,ae);Se=Ie.viewport,fe===0&&(e.setRenderTargetTextures(v,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(v))}let V=y[fe];V===void 0&&(V=new Nn,V.layers.enable(fe),V.viewport=new Wt,y[fe]=V),V.matrix.fromArray(ae.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(ae.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Se.x,Se.y,Se.width,Se.height),fe===0&&(S.matrix.copy(V.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ee===!0&&S.cameras.push(V)}const ce=i.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const fe=u.getDepthInformation($[0]);fe&&fe.isValid&&fe.texture&&x.init(e,fe,i.renderState)}}for(let $=0;$<M.length;$++){const ee=_[$],ce=M[$];ee!==null&&ce!==void 0&&ce.update(ee,pe,c||r)}Q&&Q(Z,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}const ye=new Ld;ye.setAnimationLoop(ne),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}}const xs=new jn,m_=new tt;function g_(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rd(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,xs.copy(_),xs.x*=-1,xs.y*=-1,xs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(m_.makeRotationFromEuler(xs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function x_(o,e,t,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const _=M.program;n.uniformBlockBinding(v,_)}function c(v,M){let _=i[v.id];_===void 0&&(g(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){const M=u();v.__bindingPointIndex=M;const _=o.createBuffer(),T=v.__size,w=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,_),o.bufferData(o.UNIFORM_BUFFER,T,w),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,M,_),_}function u(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=i[v.id],_=v.uniforms,T=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,M);for(let w=0,A=_.length;w<A;w++){const E=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,S=E.length;y<S;y++){const C=E[y];if(f(C,w,y,T)===!0){const L=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let P=0;for(let U=0;U<N.length;U++){const G=N[U],B=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,L+P,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,L,C.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,M,_,T){const w=v.value,A=M+"_"+_;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const E=T[A];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return T[A]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function g(v){const M=v.uniforms;let _=0;const T=16;for(let A=0,E=M.length;A<E;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,C=y.length;S<C;S++){const L=y[S],N=Array.isArray(L.value)?L.value:[L.value];for(let P=0,U=N.length;P<U;P++){const G=N[P],B=x(G),R=_%T,O=R%B.boundary,j=R+O;_+=O,j!==0&&T-j<B.storage&&(_+=T-j),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=B.storage}}}const w=_%T;return w>0&&(_+=T-w),v.__size=_,v.__cache={},this}function x(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const _=r.indexOf(M.__bindingPointIndex);r.splice(_,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Bd{constructor(e={}){const{canvas:t=ap(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=hs,this.toneMappingExposure=1;const _=this;let T=!1,w=0,A=0,E=null,y=-1,S=null;const C=new Wt,L=new Wt;let N=null;const P=new ie(0);let U=0,G=t.width,B=t.height,R=1,O=null,j=null;const Q=new Wt(0,0,G,B),ne=new Wt(0,0,G,B);let ye=!1;const Z=new Dc;let pe=!1,$=!1;const ee=new tt,ce=new tt,fe=new b,ae=new Wt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function Ie(){return E===null?R:1}let k=n;function dt(I,Y){return t.getContext(I,Y)}try{const I={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),k===null){const Y="webgl2";if(k=dt(Y,I),k===null)throw dt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let xe,Ve,Be,it,Xe,F,D,te,_e,le,ue,Le,Me,ke,gt,Ae,Oe,nt,at,Ye,pt,lt,xt,K;function Re(){xe=new Sg(k),xe.init(),lt=new l_(k,xe),Ve=new xg(k,xe,e,lt),Be=new o_(k,xe),Ve.reverseDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),it=new Ag(k),Xe=new Wx,F=new a_(k,xe,Be,Xe,Ve,lt,it),D=new vg(_),te=new bg(_),_e=new Lp(k),xt=new mg(k,_e),le=new wg(k,_e,it,xt),ue=new Cg(k,le,_e,it),at=new Tg(k,Ve,F),Ae=new _g(Xe),Le=new Vx(_,D,te,xe,Ve,xt,Ae),Me=new g_(_,Xe),ke=new qx,gt=new Qx(xe),nt=new pg(_,D,te,Be,ue,f,l),Oe=new i_(_,ue,Ve),K=new x_(k,it,Ve,Be),Ye=new gg(k,xe,it),pt=new Eg(k,xe,it),it.programs=Le.programs,_.capabilities=Ve,_.extensions=xe,_.properties=Xe,_.renderLists=ke,_.shadowMap=Oe,_.state=Be,_.info=it}Re();const me=new p_(_,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const I=xe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=xe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(I){I!==void 0&&(R=I,this.setSize(G,B,!1))},this.getSize=function(I){return I.set(G,B)},this.setSize=function(I,Y,oe=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=I,B=Y,t.width=Math.floor(I*R),t.height=Math.floor(Y*R),oe===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(G*R,B*R).floor()},this.setDrawingBufferSize=function(I,Y,oe){G=I,B=Y,R=oe,t.width=Math.floor(I*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(Q)},this.setViewport=function(I,Y,oe,he){I.isVector4?Q.set(I.x,I.y,I.z,I.w):Q.set(I,Y,oe,he),Be.viewport(C.copy(Q).multiplyScalar(R).round())},this.getScissor=function(I){return I.copy(ne)},this.setScissor=function(I,Y,oe,he){I.isVector4?ne.set(I.x,I.y,I.z,I.w):ne.set(I,Y,oe,he),Be.scissor(L.copy(ne).multiplyScalar(R).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(I){Be.setScissorTest(ye=I)},this.setOpaqueSort=function(I){O=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(I=!0,Y=!0,oe=!0){let he=0;if(I){let J=!1;if(E!==null){const Ce=E.texture.format;J=Ce===Tc||Ce===Ac||Ce===Ec}if(J){const Ce=E.texture.type,De=Ce===bi||Ce===Ts||Ce===er||Ce===Cs||Ce===Sc||Ce===wc,Qe=nt.getClearColor(),et=nt.getClearAlpha(),st=Qe.r,ht=Qe.g,z=Qe.b;De?(g[0]=st,g[1]=ht,g[2]=z,g[3]=et,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=st,x[1]=ht,x[2]=z,x[3]=et,k.clearBufferiv(k.COLOR,0,x))}else he|=k.COLOR_BUFFER_BIT}Y&&(he|=k.DEPTH_BUFFER_BIT),oe&&(he|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),ke.dispose(),gt.dispose(),Xe.dispose(),D.dispose(),te.dispose(),ue.dispose(),xt.dispose(),K.dispose(),Le.dispose(),me.dispose(),me.removeEventListener("sessionstart",fn),me.removeEventListener("sessionend",ct),Zt.stop()};function ve(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const I=it.autoReset,Y=Oe.enabled,oe=Oe.autoUpdate,he=Oe.needsUpdate,J=Oe.type;Re(),it.autoReset=I,Oe.enabled=Y,Oe.autoUpdate=oe,Oe.needsUpdate=he,Oe.type=J}function Ge(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function je(I){const Y=I.target;Y.removeEventListener("dispose",je),Nt(Y)}function Nt(I){Ft(I),Xe.remove(I)}function Ft(I){const Y=Xe.get(I).programs;Y!==void 0&&(Y.forEach(function(oe){Le.releaseProgram(oe)}),I.isShaderMaterial&&Le.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,oe,he,J,Ce){Y===null&&(Y=Se);const De=J.isMesh&&J.matrixWorld.determinant()<0,Qe=Ot(I,Y,oe,he,J);Be.setMaterial(he,De);let et=oe.index,st=1;if(he.wireframe===!0){if(et=le.getWireframeAttribute(oe),et===void 0)return;st=2}const ht=oe.drawRange,z=oe.attributes.position;let Ne=ht.start*st,Je=(ht.start+ht.count)*st;Ce!==null&&(Ne=Math.max(Ne,Ce.start*st),Je=Math.min(Je,(Ce.start+Ce.count)*st)),et!==null?(Ne=Math.max(Ne,0),Je=Math.min(Je,et.count)):z!=null&&(Ne=Math.max(Ne,0),Je=Math.min(Je,z.count));const ot=Je-Ne;if(ot<0||ot===1/0)return;xt.setup(J,he,Qe,oe,et);let W,ge=Ye;if(et!==null&&(W=_e.get(et),ge=pt,ge.setIndex(W)),J.isMesh)he.wireframe===!0?(Be.setLineWidth(he.wireframeLinewidth*Ie()),ge.setMode(k.LINES)):ge.setMode(k.TRIANGLES);else if(J.isLine){let q=he.linewidth;q===void 0&&(q=1),Be.setLineWidth(q*Ie()),J.isLineSegments?ge.setMode(k.LINES):J.isLineLoop?ge.setMode(k.LINE_LOOP):ge.setMode(k.LINE_STRIP)}else J.isPoints?ge.setMode(k.POINTS):J.isSprite&&ge.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ge.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))ge.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const q=J._multiDrawStarts,be=J._multiDrawCounts,re=J._multiDrawCount,Ee=et?_e.get(et).bytesPerElement:1,de=Xe.get(he).currentProgram.getUniforms();for(let se=0;se<re;se++)de.setValue(k,"_gl_DrawID",se),ge.render(q[se]/Ee,be[se])}else if(J.isInstancedMesh)ge.renderInstances(Ne,ot,J.count);else if(oe.isInstancedBufferGeometry){const q=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,be=Math.min(oe.instanceCount,q);ge.renderInstances(Ne,ot,be)}else ge.render(Ne,ot)};function ft(I,Y,oe){I.transparent===!0&&I.side===Kt&&I.forceSinglePass===!1?(I.side=In,I.needsUpdate=!0,cn(I,Y,oe),I.side=li,I.needsUpdate=!0,cn(I,Y,oe),I.side=Kt):cn(I,Y,oe)}this.compile=function(I,Y,oe=null){oe===null&&(oe=I),p=gt.get(oe),p.init(Y),M.push(p),oe.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),I!==oe&&I.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();const he=new Set;return I.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ce=J.material;if(Ce)if(Array.isArray(Ce))for(let De=0;De<Ce.length;De++){const Qe=Ce[De];ft(Qe,oe,J),he.add(Qe)}else ft(Ce,oe,J),he.add(Ce)}),M.pop(),p=null,he},this.compileAsync=function(I,Y,oe=null){const he=this.compile(I,Y,oe);return new Promise(J=>{function Ce(){if(he.forEach(function(De){Xe.get(De).currentProgram.isReady()&&he.delete(De)}),he.size===0){J(I);return}setTimeout(Ce,10)}xe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ln=null;function un(I){ln&&ln(I)}function fn(){Zt.stop()}function ct(){Zt.start()}const Zt=new Ld;Zt.setAnimationLoop(un),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(I){ln=I,me.setAnimationLoop(I),I===null?Zt.stop():Zt.start()},me.addEventListener("sessionstart",fn),me.addEventListener("sessionend",ct),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(Y),Y=me.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,Y,E),p=gt.get(I,M.length),p.init(Y),M.push(p),ce.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(ce),$=this.localClippingEnabled,pe=Ae.init(this.clippingPlanes,$),m=ke.get(I,v.length),m.init(),v.push(m),me.enabled===!0&&me.isPresenting===!0){const Ce=_.xr.getDepthSensingMesh();Ce!==null&&_n(Ce,Y,-1/0,_.sortObjects)}_n(I,Y,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(O,j),V=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,V&&nt.addToRenderList(m,I),this.info.render.frame++,pe===!0&&Ae.beginShadows();const oe=p.state.shadowsArray;Oe.render(oe,I,Y),pe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=m.opaque,J=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const Ce=Y.cameras;if(J.length>0)for(let De=0,Qe=Ce.length;De<Qe;De++){const et=Ce[De];Tt(he,J,I,et)}V&&nt.render(I);for(let De=0,Qe=Ce.length;De<Qe;De++){const et=Ce[De];Sn(m,I,et,et.viewport)}}else J.length>0&&Tt(he,J,I,Y),V&&nt.render(I),Sn(m,I,Y);E!==null&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(_,I,Y),xt.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],pe===!0&&Ae.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function _n(I,Y,oe,he){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)oe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Z.intersectsSprite(I)){he&&ae.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ce);const De=ue.update(I),Qe=I.material;Qe.visible&&m.push(I,De,Qe,oe,ae.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Z.intersectsObject(I))){const De=ue.update(I),Qe=I.material;if(he&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ae.copy(I.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ae.copy(De.boundingSphere.center)),ae.applyMatrix4(I.matrixWorld).applyMatrix4(ce)),Array.isArray(Qe)){const et=De.groups;for(let st=0,ht=et.length;st<ht;st++){const z=et[st],Ne=Qe[z.materialIndex];Ne&&Ne.visible&&m.push(I,De,Ne,oe,ae.z,z)}}else Qe.visible&&m.push(I,De,Qe,oe,ae.z,null)}}const Ce=I.children;for(let De=0,Qe=Ce.length;De<Qe;De++)_n(Ce[De],Y,oe,he)}function Sn(I,Y,oe,he){const J=I.opaque,Ce=I.transmissive,De=I.transparent;p.setupLightsView(oe),pe===!0&&Ae.setGlobalState(_.clippingPlanes,oe),he&&Be.viewport(C.copy(he)),J.length>0&&pn(J,Y,oe),Ce.length>0&&pn(Ce,Y,oe),De.length>0&&pn(De,Y,oe),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Tt(I,Y,oe,he){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[he.id]===void 0&&(p.state.transmissionRenderTarget[he.id]=new Yn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?yi:bi,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Ce=p.state.transmissionRenderTarget[he.id],De=he.viewport||C;Ce.setSize(De.z,De.w);const Qe=_.getRenderTarget();_.setRenderTarget(Ce),_.getClearColor(P),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),V&&nt.render(oe);const et=_.toneMapping;_.toneMapping=hs;const st=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),p.setupLightsView(he),pe===!0&&Ae.setGlobalState(_.clippingPlanes,he),pn(I,oe,he),F.updateMultisampleRenderTarget(Ce),F.updateRenderTargetMipmap(Ce),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let z=0,Ne=Y.length;z<Ne;z++){const Je=Y[z],ot=Je.object,W=Je.geometry,ge=Je.material,q=Je.group;if(ge.side===Kt&&ot.layers.test(he.layers)){const be=ge.side;ge.side=In,ge.needsUpdate=!0,rn(ot,oe,he,W,ge,q),ge.side=be,ge.needsUpdate=!0,ht=!0}}ht===!0&&(F.updateMultisampleRenderTarget(Ce),F.updateRenderTargetMipmap(Ce))}_.setRenderTarget(Qe),_.setClearColor(P,U),st!==void 0&&(he.viewport=st),_.toneMapping=et}function pn(I,Y,oe){const he=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ce=I.length;J<Ce;J++){const De=I[J],Qe=De.object,et=De.geometry,st=he===null?De.material:he,ht=De.group;Qe.layers.test(oe.layers)&&rn(Qe,Y,oe,et,st,ht)}}function rn(I,Y,oe,he,J,Ce){I.onBeforeRender(_,Y,oe,he,J,Ce),I.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(_,Y,oe,he,I,Ce),J.transparent===!0&&J.side===Kt&&J.forceSinglePass===!1?(J.side=In,J.needsUpdate=!0,_.renderBufferDirect(oe,Y,he,J,I,Ce),J.side=li,J.needsUpdate=!0,_.renderBufferDirect(oe,Y,he,J,I,Ce),J.side=Kt):_.renderBufferDirect(oe,Y,he,J,I,Ce),I.onAfterRender(_,Y,oe,he,J,Ce)}function cn(I,Y,oe){Y.isScene!==!0&&(Y=Se);const he=Xe.get(I),J=p.state.lights,Ce=p.state.shadowsArray,De=J.state.version,Qe=Le.getParameters(I,J.state,Ce,Y,oe),et=Le.getProgramCacheKey(Qe);let st=he.programs;he.environment=I.isMeshStandardMaterial?Y.environment:null,he.fog=Y.fog,he.envMap=(I.isMeshStandardMaterial?te:D).get(I.envMap||he.environment),he.envMapRotation=he.environment!==null&&I.envMap===null?Y.environmentRotation:I.envMapRotation,st===void 0&&(I.addEventListener("dispose",je),st=new Map,he.programs=st);let ht=st.get(et);if(ht!==void 0){if(he.currentProgram===ht&&he.lightsStateVersion===De)return $t(I,Qe),ht}else Qe.uniforms=Le.getUniforms(I),I.onBeforeCompile(Qe,_),ht=Le.acquireProgram(Qe,et),st.set(et,ht),he.uniforms=Qe.uniforms;const z=he.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(z.clippingPlanes=Ae.uniform),$t(I,Qe),he.needsLights=_t(I),he.lightsStateVersion=De,he.needsLights&&(z.ambientLightColor.value=J.state.ambient,z.lightProbe.value=J.state.probe,z.directionalLights.value=J.state.directional,z.directionalLightShadows.value=J.state.directionalShadow,z.spotLights.value=J.state.spot,z.spotLightShadows.value=J.state.spotShadow,z.rectAreaLights.value=J.state.rectArea,z.ltc_1.value=J.state.rectAreaLTC1,z.ltc_2.value=J.state.rectAreaLTC2,z.pointLights.value=J.state.point,z.pointLightShadows.value=J.state.pointShadow,z.hemisphereLights.value=J.state.hemi,z.directionalShadowMap.value=J.state.directionalShadowMap,z.directionalShadowMatrix.value=J.state.directionalShadowMatrix,z.spotShadowMap.value=J.state.spotShadowMap,z.spotLightMatrix.value=J.state.spotLightMatrix,z.spotLightMap.value=J.state.spotLightMap,z.pointShadowMap.value=J.state.pointShadowMap,z.pointShadowMatrix.value=J.state.pointShadowMatrix),he.currentProgram=ht,he.uniformsList=null,ht}function qt(I){if(I.uniformsList===null){const Y=I.currentProgram.getUniforms();I.uniformsList=oa.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function $t(I,Y){const oe=Xe.get(I);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function Ot(I,Y,oe,he,J){Y.isScene!==!0&&(Y=Se),F.resetTextureUnits();const Ce=Y.fog,De=he.isMeshStandardMaterial?Y.environment:null,Qe=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:On,et=(he.isMeshStandardMaterial?te:D).get(he.envMap||De),st=he.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ht=!!oe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),z=!!oe.morphAttributes.position,Ne=!!oe.morphAttributes.normal,Je=!!oe.morphAttributes.color;let ot=hs;he.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ot=_.toneMapping);const W=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ge=W!==void 0?W.length:0,q=Xe.get(he),be=p.state.lights;if(pe===!0&&($===!0||I!==S)){const Pe=I===S&&he.id===y;Ae.setState(he,I,Pe)}let re=!1;he.version===q.__version?(q.needsLights&&q.lightsStateVersion!==be.state.version||q.outputColorSpace!==Qe||J.isBatchedMesh&&q.batching===!1||!J.isBatchedMesh&&q.batching===!0||J.isBatchedMesh&&q.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&q.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&q.instancing===!1||!J.isInstancedMesh&&q.instancing===!0||J.isSkinnedMesh&&q.skinning===!1||!J.isSkinnedMesh&&q.skinning===!0||J.isInstancedMesh&&q.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&q.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&q.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&q.instancingMorph===!1&&J.morphTexture!==null||q.envMap!==et||he.fog===!0&&q.fog!==Ce||q.numClippingPlanes!==void 0&&(q.numClippingPlanes!==Ae.numPlanes||q.numIntersection!==Ae.numIntersection)||q.vertexAlphas!==st||q.vertexTangents!==ht||q.morphTargets!==z||q.morphNormals!==Ne||q.morphColors!==Je||q.toneMapping!==ot||q.morphTargetsCount!==ge)&&(re=!0):(re=!0,q.__version=he.version);let Ee=q.currentProgram;re===!0&&(Ee=cn(he,Y,J));let de=!1,se=!1,Ze=!1;const $e=Ee.getUniforms(),Yt=q.uniforms;if(Be.useProgram(Ee.program)&&(de=!0,se=!0,Ze=!0),he.id!==y&&(y=he.id,se=!0),de||S!==I){Be.buffers.depth.getReversed()?(ee.copy(I.projectionMatrix),cp(ee),hp(ee),$e.setValue(k,"projectionMatrix",ee)):$e.setValue(k,"projectionMatrix",I.projectionMatrix),$e.setValue(k,"viewMatrix",I.matrixWorldInverse);const Ct=$e.map.cameraPosition;Ct!==void 0&&Ct.setValue(k,fe.setFromMatrixPosition(I.matrixWorld)),Ve.logarithmicDepthBuffer&&$e.setValue(k,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&$e.setValue(k,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,se=!0,Ze=!0)}if(J.isSkinnedMesh){$e.setOptional(k,J,"bindMatrix"),$e.setOptional(k,J,"bindMatrixInverse");const Pe=J.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),$e.setValue(k,"boneTexture",Pe.boneTexture,F))}J.isBatchedMesh&&($e.setOptional(k,J,"batchingTexture"),$e.setValue(k,"batchingTexture",J._matricesTexture,F),$e.setOptional(k,J,"batchingIdTexture"),$e.setValue(k,"batchingIdTexture",J._indirectTexture,F),$e.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&$e.setValue(k,"batchingColorTexture",J._colorsTexture,F));const we=oe.morphAttributes;if((we.position!==void 0||we.normal!==void 0||we.color!==void 0)&&at.update(J,oe,Ee),(se||q.receiveShadow!==J.receiveShadow)&&(q.receiveShadow=J.receiveShadow,$e.setValue(k,"receiveShadow",J.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Yt.envMap.value=et,Yt.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&Y.environment!==null&&(Yt.envMapIntensity.value=Y.environmentIntensity),se&&($e.setValue(k,"toneMappingExposure",_.toneMappingExposure),q.needsLights&&Ut(Yt,Ze),Ce&&he.fog===!0&&Me.refreshFogUniforms(Yt,Ce),Me.refreshMaterialUniforms(Yt,he,R,B,p.state.transmissionRenderTarget[I.id]),oa.upload(k,qt(q),Yt,F)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(oa.upload(k,qt(q),Yt,F),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&$e.setValue(k,"center",J.center),$e.setValue(k,"modelViewMatrix",J.modelViewMatrix),$e.setValue(k,"normalMatrix",J.normalMatrix),$e.setValue(k,"modelMatrix",J.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Pe=he.uniformsGroups;for(let Ct=0,Ke=Pe.length;Ct<Ke;Ct++){const At=Pe[Ct];K.update(At,Ee),K.bind(At,Ee)}}return Ee}function Ut(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function _t(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,Y,oe){Xe.get(I.texture).__webglTexture=Y,Xe.get(I.depthTexture).__webglTexture=oe;const he=Xe.get(I);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=oe===void 0,he.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Y){const oe=Xe.get(I);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(I,Y=0,oe=0){E=I,w=Y,A=oe;let he=!0,J=null,Ce=!1,De=!1;if(I){const et=Xe.get(I);if(et.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(k.FRAMEBUFFER,null),he=!1;else if(et.__webglFramebuffer===void 0)F.setupRenderTarget(I);else if(et.__hasExternalTextures)F.rebindTextures(I,Xe.get(I.texture).__webglTexture,Xe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const z=I.depthTexture;if(et.__boundDepthTexture!==z){if(z!==null&&Xe.has(z)&&(I.width!==z.image.width||I.height!==z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(I)}}const st=I.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(De=!0);const ht=Xe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ht[Y])?J=ht[Y][oe]:J=ht[Y],Ce=!0):I.samples>0&&F.useMultisampledRTT(I)===!1?J=Xe.get(I).__webglMultisampledFramebuffer:Array.isArray(ht)?J=ht[oe]:J=ht,C.copy(I.viewport),L.copy(I.scissor),N=I.scissorTest}else C.copy(Q).multiplyScalar(R).floor(),L.copy(ne).multiplyScalar(R).floor(),N=ye;if(Be.bindFramebuffer(k.FRAMEBUFFER,J)&&he&&Be.drawBuffers(I,J),Be.viewport(C),Be.scissor(L),Be.setScissorTest(N),Ce){const et=Xe.get(I.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et.__webglTexture,oe)}else if(De){const et=Xe.get(I.texture),st=Y||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,et.__webglTexture,oe||0,st)}y=-1},this.readRenderTargetPixels=function(I,Y,oe,he,J,Ce,De){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&De!==void 0&&(Qe=Qe[De]),Qe){Be.bindFramebuffer(k.FRAMEBUFFER,Qe);try{const et=I.texture,st=et.format,ht=et.type;if(!Ve.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-he&&oe>=0&&oe<=I.height-J&&k.readPixels(Y,oe,he,J,lt.convert(st),lt.convert(ht),Ce)}finally{const et=E!==null?Xe.get(E).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(I,Y,oe,he,J,Ce,De){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&De!==void 0&&(Qe=Qe[De]),Qe){const et=I.texture,st=et.format,ht=et.type;if(!Ve.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=I.width-he&&oe>=0&&oe<=I.height-J){Be.bindFramebuffer(k.FRAMEBUFFER,Qe);const z=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,z),k.bufferData(k.PIXEL_PACK_BUFFER,Ce.byteLength,k.STREAM_READ),k.readPixels(Y,oe,he,J,lt.convert(st),lt.convert(ht),0);const Ne=E!==null?Xe.get(E).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,Ne);const Je=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await lp(k,Je,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,z),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ce),k.deleteBuffer(z),k.deleteSync(Je),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Y=null,oe=0){I.isTexture!==!0&&(Vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,I=arguments[1]);const he=Math.pow(2,-oe),J=Math.floor(I.image.width*he),Ce=Math.floor(I.image.height*he),De=Y!==null?Y.x:0,Qe=Y!==null?Y.y:0;F.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,De,Qe,J,Ce),Be.unbindTexture()},this.copyTextureToTexture=function(I,Y,oe=null,he=null,J=0){I.isTexture!==!0&&(Vo("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,I=arguments[1],Y=arguments[2],J=arguments[3]||0,oe=null);let Ce,De,Qe,et,st,ht,z,Ne,Je;const ot=I.isCompressedTexture?I.mipmaps[J]:I.image;oe!==null?(Ce=oe.max.x-oe.min.x,De=oe.max.y-oe.min.y,Qe=oe.isBox3?oe.max.z-oe.min.z:1,et=oe.min.x,st=oe.min.y,ht=oe.isBox3?oe.min.z:0):(Ce=ot.width,De=ot.height,Qe=ot.depth||1,et=0,st=0,ht=0),he!==null?(z=he.x,Ne=he.y,Je=he.z):(z=0,Ne=0,Je=0);const W=lt.convert(Y.format),ge=lt.convert(Y.type);let q;Y.isData3DTexture?(F.setTexture3D(Y,0),q=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(F.setTexture2DArray(Y,0),q=k.TEXTURE_2D_ARRAY):(F.setTexture2D(Y,0),q=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const be=k.getParameter(k.UNPACK_ROW_LENGTH),re=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ee=k.getParameter(k.UNPACK_SKIP_PIXELS),de=k.getParameter(k.UNPACK_SKIP_ROWS),se=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ot.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ot.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ht);const Ze=I.isDataArrayTexture||I.isData3DTexture,$e=Y.isDataArrayTexture||Y.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Yt=Xe.get(I),we=Xe.get(Y),Pe=Xe.get(Yt.__renderTarget),Ct=Xe.get(we.__renderTarget);Be.bindFramebuffer(k.READ_FRAMEBUFFER,Pe.__webglFramebuffer),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Ke=0;Ke<Qe;Ke++)Ze&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(I).__webglTexture,J,ht+Ke),I.isDepthTexture?($e&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(Y).__webglTexture,J,Je+Ke),k.blitFramebuffer(et,st,Ce,De,z,Ne,Ce,De,k.DEPTH_BUFFER_BIT,k.NEAREST)):$e?k.copyTexSubImage3D(q,J,z,Ne,Je+Ke,et,st,Ce,De):k.copyTexSubImage2D(q,J,z,Ne,Je+Ke,et,st,Ce,De);Be.bindFramebuffer(k.READ_FRAMEBUFFER,null),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else $e?I.isDataTexture||I.isData3DTexture?k.texSubImage3D(q,J,z,Ne,Je,Ce,De,Qe,W,ge,ot.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(q,J,z,Ne,Je,Ce,De,Qe,W,ot.data):k.texSubImage3D(q,J,z,Ne,Je,Ce,De,Qe,W,ge,ot):I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,J,z,Ne,Ce,De,W,ge,ot.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,J,z,Ne,ot.width,ot.height,W,ot.data):k.texSubImage2D(k.TEXTURE_2D,J,z,Ne,Ce,De,W,ge,ot);k.pixelStorei(k.UNPACK_ROW_LENGTH,be),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,re),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ee),k.pixelStorei(k.UNPACK_SKIP_ROWS,de),k.pixelStorei(k.UNPACK_SKIP_IMAGES,se),J===0&&Y.generateMipmaps&&k.generateMipmap(q),Be.unbindTexture()},this.copyTextureToTexture3D=function(I,Y,oe=null,he=null,J=0){return I.isTexture!==!0&&(Vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,he=arguments[1]||null,I=arguments[2],Y=arguments[3],J=arguments[4]||0),Vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Y,oe,he,J)},this.initRenderTarget=function(I){Xe.get(I).__webglFramebuffer===void 0&&F.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?F.setTextureCube(I,0):I.isData3DTexture?F.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?F.setTexture2DArray(I,0):F.setTexture2D(I,0),Be.unbindTexture()},this.resetState=function(){w=0,A=0,E=null,Be.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}class Sa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ie(e),this.density=t}clone(){return new Sa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nc extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dc,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new b;class Rs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kd extends ai{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let eo;const No=new b,to=new b,no=new b,io=new Ue,Uo=new Ue,zd=new tt,Dr=new b,Fo=new b,Ir=new b,eu=new Ue,al=new Ue,tu=new Ue;class __ extends Xt{constructor(e=new kd){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uc(t,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new Rs(n,3,0,!1)),eo.setAttribute("uv",new Rs(n,2,3,!1))}this.geometry=eo,this.material=e,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),zd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;Lr(Dr.set(-.5,-.5,0),no,r,to,i,s),Lr(Fo.set(.5,-.5,0),no,r,to,i,s),Lr(Ir.set(.5,.5,0),no,r,to,i,s),eu.set(0,0),al.set(1,0),tu.set(1,1);let a=e.ray.intersectTriangle(Dr,Fo,Ir,!1,No);if(a===null&&(Lr(Fo.set(-.5,.5,0),no,r,to,i,s),al.set(0,1),a=e.ray.intersectTriangle(Dr,Ir,Fo,!1,No),a===null))return;const l=e.ray.origin.distanceTo(No);l<e.near||l>e.far||t.push({distance:l,point:No.clone(),uv:ii.getInterpolation(No,Dr,Fo,Ir,eu,al,tu,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lr(o,e,t,n,i,s){io.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(Uo.x=s*io.x-i*io.y,Uo.y=i*io.x+s*io.y):Uo.copy(io),o.copy(e),o.x+=Uo.x,o.y+=Uo.y,o.applyMatrix4(zd)}const nu=new b,iu=new Wt,su=new Wt,v_=new b,ou=new tt,Nr=new b,ll=new ui,ru=new tt,cl=new rr;class y_ extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ih,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nr),this.boundingBox.expandByPoint(Nr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nr),this.boundingSphere.expandByPoint(Nr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(i),e.ray.intersectsSphere(ll)!==!1&&(ru.copy(i).invert(),cl.copy(e.ray).applyMatrix4(ru),!(this.boundingBox!==null&&cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===If?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;iu.fromBufferAttribute(i.attributes.skinIndex,e),su.fromBufferAttribute(i.attributes.skinWeight,e),nu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=su.getComponent(s);if(r!==0){const a=iu.getComponent(s);ou.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(v_.copy(nu).applyMatrix4(ou),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gd extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fc extends bn{constructor(e=null,t=1,n=1,i,s,r,a,l,c=En,h=En,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new tt,M_=new tt;class Oc{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:M_;au.multiplyMatrices(a,t[s]),au.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fc(t,e,e,ri,oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Gd),this.bones.push(r),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class mc extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new tt,lu=new tt,Ur=[],cu=new Yi,b_=new tt,Oo=new ze,Bo=new ui;class Mt extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,b_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),cu.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(cu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),Bo.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(n),e.ray.intersectsSphere(Bo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,so),lu.multiplyMatrices(n,so),Oo.matrixWorld=lu,Oo.raycast(e,Ur);for(let r=0,a=Ur.length;r<a;r++){const l=Ur[r];l.instanceId=s,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fc(new Float32Array(i*this.count),i,this.count,va,oi));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ws extends ai{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const da=new b,fa=new b,hu=new tt,ko=new rr,Fr=new ui,hl=new b,uu=new b;class wa extends Xt{constructor(e=new Et,t=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)da.fromBufferAttribute(t,i-1),fa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=da.distanceTo(fa);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=s,e.ray.intersectsSphere(Fr)===!1)return;hu.copy(i).invert(),ko.copy(e.ray).applyMatrix4(hu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),v=h.getX(x+1),M=Or(this,e,ko,l,p,v);M&&t.push(M)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=Or(this,e,ko,l,x,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let x=f,m=g-1;x<m;x+=c){const p=Or(this,e,ko,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Or(this,e,ko,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Or(o,e,t,n,i,s){const r=o.geometry.attributes.position;if(da.fromBufferAttribute(r,i),fa.fromBufferAttribute(r,s),t.distanceSqToSegment(da,fa,hl,uu)>n)return;hl.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(hl);if(!(l<e.near||l>e.far))return{distance:l,point:uu.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}const du=new b,fu=new b;class Hd extends wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)du.fromBufferAttribute(t,i),fu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+du.distanceTo(fu);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ra extends wa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ci extends ai{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pu=new tt,gc=new rr,Br=new ui,kr=new b;class hi extends Xt{constructor(e=new Et,t=new ci){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=s,e.ray.intersectsSphere(Br)===!1)return;pu.copy(i).invert(),gc.copy(e.ray).applyMatrix4(pu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);kr.fromBufferAttribute(u,m),mu(kr,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,x=f;g<x;g++)kr.fromBufferAttribute(u,g),mu(kr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function mu(o,e,t,n,i,s,r){const a=gc.distanceSqToPoint(o);if(a<t){const l=new b;gc.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class gu extends bn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=En,this.minFilter=En,this.generateMipmaps=!1,this.needsUpdate=!0}}class xn extends bn{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=t||(r.isVector2?new Ue:new b);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],s=[],r=[],a=new b,l=new tt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new b)}s[0]=new b,r[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Dn(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Dn(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vd extends ji{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class S_ extends Vd{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let o=0,e=0,t=0,n=0;function i(s,r,a,l){o=s,e=a,t=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,u){let d=(r-s)/c-(a-s)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,i(r,a,d,f)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const zr=new b,ul=new Bc,dl=new Bc,fl=new Bc;class Kn extends ji{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(zr.subVectors(i[0],i[1]).add(i[0]),c=zr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(zr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ul.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),dl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),fl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),dl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),fl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ul.calc(l),dl.calc(l),fl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xu(o,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*a+s*o+t}function w_(o,e){const t=1-o;return t*t*e}function E_(o,e){return 2*(1-o)*o*e}function A_(o,e){return o*o*e}function jo(o,e,t,n){return w_(o,e)+E_(o,t)+A_(o,n)}function T_(o,e){const t=1-o;return t*t*t*e}function C_(o,e){const t=1-o;return 3*t*t*o*e}function P_(o,e){return 3*(1-o)*o*o*e}function R_(o,e){return o*o*o*e}function Ko(o,e,t,n,i){return T_(o,e)+C_(o,t)+P_(o,n)+R_(o,i)}class D_ extends ji{constructor(e=new Ue,t=new Ue,n=new Ue,i=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ue){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Ko(e,i.x,s.x,r.x,a.x),Ko(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I_ extends ji{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Ko(e,i.x,s.x,r.x,a.x),Ko(e,i.y,s.y,r.y,a.y),Ko(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L_ extends ji{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N_ extends ji{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U_ extends ji{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(jo(e,i.x,s.x,r.x),jo(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends ji{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(jo(e,i.x,s.x,r.x),jo(e,i.y,s.y,r.y),jo(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F_ extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(xu(a,l.x,c.x,h.x,u.x),xu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ue().fromArray(i))}return this}}var O_=Object.freeze({__proto__:null,ArcCurve:S_,CatmullRomCurve3:Kn,CubicBezierCurve:D_,CubicBezierCurve3:I_,EllipseCurve:Vd,LineCurve:L_,LineCurve3:N_,QuadraticBezierCurve:U_,QuadraticBezierCurve3:Wd,SplineCurve:F_});class Us extends Et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new b,h=new Ue;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class en extends Et{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;v(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function v(){const _=new b,T=new b;let w=0;const A=(t-e)/n;for(let E=0;E<=s;E++){const y=[],S=E/s,C=S*(t-e)+e;for(let L=0;L<=i;L++){const N=L/i,P=N*l+a,U=Math.sin(P),G=Math.cos(P);T.x=C*U,T.y=-S*n+m,T.z=C*G,u.push(T.x,T.y,T.z),_.set(U,A,G).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-S),y.push(g++)}x.push(y)}for(let E=0;E<i;E++)for(let y=0;y<s;y++){const S=x[y][E],C=x[y+1][E],L=x[y+1][E+1],N=x[y][E+1];(e>0||y!==0)&&(h.push(S,C,N),w+=3),(t>0||y!==s-1)&&(h.push(C,L,N),w+=3)}c.addGroup(p,w,0),p+=w}function M(_){const T=g,w=new Ue,A=new b;let E=0;const y=_===!0?e:t,S=_===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const C=g;for(let L=0;L<=i;L++){const P=L/i*l+a,U=Math.cos(P),G=Math.sin(P);A.x=y*G,A.y=m*S,A.z=y*U,u.push(A.x,A.y,A.z),d.push(0,S,0),w.x=U*.5+.5,w.y=G*.5*S+.5,f.push(w.x,w.y),g++}for(let L=0;L<i;L++){const N=T+L,P=C+L;_===!0?h.push(P,P+1,N):h.push(P+1,P,N),E+=3}c.addGroup(p,E,_===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class An extends en{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new An(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ar extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];a(i),c(n),h(),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(s.slice(),3)),this.setAttribute("uv",new Vt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new b,_=new b,T=new b;for(let w=0;w<t.length;w+=3)f(t[w+0],M),f(t[w+1],_),f(t[w+2],T),l(M,_,T,v)}function l(v,M,_,T){const w=T+1,A=[];for(let E=0;E<=w;E++){A[E]=[];const y=v.clone().lerp(_,E/w),S=M.clone().lerp(_,E/w),C=w-E;for(let L=0;L<=C;L++)L===0&&E===w?A[E][L]=y:A[E][L]=y.clone().lerp(S,L/C)}for(let E=0;E<w;E++)for(let y=0;y<2*(w-E)-1;y++){const S=Math.floor(y/2);y%2===0?(d(A[E][S+1]),d(A[E+1][S]),d(A[E][S])):(d(A[E][S+1]),d(A[E+1][S+1]),d(A[E+1][S]))}}function c(v){const M=new b;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(v),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function h(){const v=new b;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const _=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;r.push(_,1-T)}g(),u()}function u(){for(let v=0;v<r.length;v+=6){const M=r[v+0],_=r[v+2],T=r[v+4],w=Math.max(M,_,T),A=Math.min(M,_,T);w>.9&&A<.1&&(M<.2&&(r[v+0]+=1),_<.2&&(r[v+2]+=1),T<.2&&(r[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,M){const _=v*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){const v=new b,M=new b,_=new b,T=new b,w=new Ue,A=new Ue,E=new Ue;for(let y=0,S=0;y<s.length;y+=9,S+=6){v.set(s[y+0],s[y+1],s[y+2]),M.set(s[y+3],s[y+4],s[y+5]),_.set(s[y+6],s[y+7],s[y+8]),w.set(r[S+0],r[S+1]),A.set(r[S+2],r[S+3]),E.set(r[S+4],r[S+5]),T.copy(v).add(M).add(_).divideScalar(3);const C=m(T);x(w,S+0,v,C),x(A,S+2,M,C),x(E,S+4,_,C)}}function x(v,M,_,T){T<0&&v.x===1&&(r[M]=v.x-1),_.x===0&&_.z===0&&(r[M]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.vertices,e.indices,e.radius,e.details)}}class vo extends ar{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vo(e.radius,e.detail)}}class kc extends ar{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kc(e.radius,e.detail)}}class Zo extends ar{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zo(e.radius,e.detail)}}class Ss extends Et{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new b,g=new Ue;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=s+m/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const v=p+m,M=v,_=v+n+1,T=v+n+2,w=v+1;a.push(M,_,w),a.push(_,T,w)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jt extends Et{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new b,d=new b,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let _=0;p===0&&r===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const w=T/t;u.x=-e*Math.cos(i+w*s)*Math.sin(r+M*a),u.y=e*Math.cos(r+M*a),u.z=e*Math.sin(i+w*s)*Math.sin(r+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const M=h[p][v+1],_=h[p][v],T=h[p+1][v],w=h[p+1][v+1];(p!==0||r>0)&&f.push(M,_,w),(p!==n-1||l<Math.PI)&&f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ea extends Et{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const x=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;r.push(x,m,v),r.push(m,p,v)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jn extends Et{constructor(e=new Wd(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new b,l=new b,c=new Ue;let h=new b;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function x(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),v(),p()}function m(M){h=e.getPointAt(M/t,h);const _=r.normals[M],T=r.binormals[M];for(let w=0;w<=i;w++){const A=w/i*Math.PI*2,E=Math.sin(A),y=-Math.cos(A);l.x=y*_.x+E*T.x,l.y=y*_.y+E*T.y,l.z=y*_.z+E*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let _=1;_<=i;_++){const T=(i+1)*(M-1)+(_-1),w=(i+1)*M+(_-1),A=(i+1)*M+_,E=(i+1)*(M-1)+_;g.push(T,w,E),g.push(w,A,E)}}function v(){for(let M=0;M<=t;M++)for(let _=0;_<=i;_++)c.x=M/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Jn(new O_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class aa extends on{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class He extends ai{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends He{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class B_ extends ai{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function Gr(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function k_(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function z_(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _u(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Xd(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class lr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class G_ extends lr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case oh:s=e,a=2*t-n;break;case rh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:r=e,l=2*n-t;break;case rh:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let T=0;T!==a;++T)s[T]=p*r[h+T]+v*r[c+T]+M*r[l+T]+_*r[u+T];return s}}class H_ extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class V_ extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new V_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new H_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new G_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&k_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===La,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=nr;class Ao extends Ri{constructor(e,t,n){super(e,t,n)}}Ao.prototype.ValueTypeName="bool";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=tr;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class qd extends Ri{}qd.prototype.ValueTypeName="color";class yo extends Ri{}yo.prototype.ValueTypeName="number";class W_ extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)rt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Mo extends Ri{InterpolantFactoryMethodLinear(e){return new W_(this.times,this.values,this.getValueSize(),e)}}Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Ri{constructor(e,t,n){super(e,t,n)}}To.prototype.ValueTypeName="string";To.prototype.ValueBufferType=Array;To.prototype.DefaultInterpolation=tr;To.prototype.InterpolantFactoryMethodLinear=void 0;To.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends Ri{}bo.prototype.ValueTypeName="vector";class X_{constructor(e="",t=-1,n=[],i=Lf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Y_(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Ri.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=z_(l);l=_u(l,1,h),c=_u(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new yo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];Xd(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const M=d[g];m.push(M.time),p.push(M.morphTarget===x?1:0)}i.push(new yo(".morphTargetInfluence["+x+"]",m,p))}l=f.length*r}else{const f=".bones["+t[u].name+"]";n(bo,f+".position",d,"pos",i),n(Mo,f+".quaternion",d,"rot",i),n(bo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function q_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yo;case"vector":case"vector2":case"vector3":case"vector4":return bo;case"color":return qd;case"quaternion":return Mo;case"bool":case"boolean":return Ao;case"string":return To}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Y_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=q_(o.type);if(o.times===void 0){const t=[],n=[];Xd(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const cs={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class j_{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const K_=new j_;class Fs{constructor(e){this.manager=e!==void 0?e:K_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class Z_ extends Error{constructor(e,t){super(e),this.response=t}}class pa extends Fs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=cs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:i});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Oi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:M,value:_})=>{if(M)p.close();else{x+=_.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,A=h.length;w<A;w++){const E=h[w];E.onProgress&&E.onProgress(T)}p.enqueue(_),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Z_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{cs.add(e,c);const h=Oi[e];delete Oi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $_ extends Fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=cs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=ir("img");function l(){h(),cs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Q_ extends Fs{constructor(e){super(e)}load(e,t,n,i){const s=new bn,r=new $_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class cr extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class J_ extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pl=new tt,vu=new b,yu=new b;class zc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(vu),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ev extends zc{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tv extends cr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new ev}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mu=new tt,zo=new b,ml=new b;class nv extends zc{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zo.setFromMatrixPosition(e.matrixWorld),n.position.copy(zo),ml.copy(n.position),ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ml),n.updateMatrixWorld(),i.makeTranslation(-zo.x,-zo.y,-zo.z),Mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu)}}class $o extends cr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iv extends zc{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gc extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yd extends cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class sv extends Fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=cs.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return cs.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),cs.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});cs.add(e,l),s.manager.itemStart(e)}}class jd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bu(){return performance.now()}const Hc="\\[\\]\\.:\\/",ov=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",rv="[^"+Hc.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",Vc),lv=/(WCOD+)?/.source.replace("WCOD",rv),cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),uv=new RegExp("^"+av+lv+cv+hv+"$"),dv=["material","materials","bones","map"];class fv{constructor(e,t,n){const i=n||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class sn{constructor(e,t,n){this.path=t,this.parsedPath=n||sn.parseTrackName(t),this.node=sn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new sn.Composite(e,t,n):new sn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ov,"")}static parseTrackName(e){const t=uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);dv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=sn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}sn.Composite=fv;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Su=new tt;class pv{constructor(e,t,n=0,i=1/0){this.ray=new rr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Su.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Su),this}intersectObject(e,t=!0,n=[]){return xc(e,this,n,t),n.sort(wu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)xc(e[i],this,n,t);return n.sort(wu),n}}function wu(o,e){return o.distance-e.distance}function xc(o,e,t,n){let i=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=o.children;for(let r=0,a=s.length;r<a;r++)xc(s[r],e,t,!0)}}const Eu=new Ue;class mv{constructor(e=new Ue(1/0,1/0),t=new Ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Eu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Eu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);const Jo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Os{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gv=new Ma(-1,1,1,-1,0,1);class xv extends Et{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const _v=new xv;class Aa{constructor(e){this._mesh=new ze(_v,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Kd extends Os{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vi.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Aa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Au extends Os{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class vv extends Os{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class yv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new Yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Kd(Jo),this.copyPass.material.blending=Gn,this.clock=new jd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Au!==void 0&&(r instanceof Au?n=!0:r instanceof vv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Mv extends Os{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ie}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}class bv{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}noise(e,t){let n,i,s;const r=.5*(Math.sqrt(3)-1),a=(e+t)*r,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,x=t-f;let m,p;g>x?(m=1,p=0):(m=0,p=1);const v=g-m+h,M=x-p+h,_=g-1+2*h,T=x-1+2*h,w=l&255,A=c&255,E=this.perm[w+this.perm[A]]%12,y=this.perm[w+m+this.perm[A+p]]%12,S=this.perm[w+1+this.perm[A+1]]%12;let C=.5-g*g-x*x;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[E],g,x));let L=.5-v*v-M*M;L<0?i=0:(L*=L,i=L*L*this.dot(this.grad3[y],v,M));let N=.5-_*_-T*T;return N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[S],_,T)),70*(n+i+s)}noise3d(e,t,n){let i,s,r,a;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,x=h-g,m=u-g,p=d-g,v=e-x,M=t-m,_=n-p;let T,w,A,E,y,S;v>=M?M>=_?(T=1,w=0,A=0,E=1,y=1,S=0):v>=_?(T=1,w=0,A=0,E=1,y=0,S=1):(T=0,w=0,A=1,E=1,y=0,S=1):M<_?(T=0,w=0,A=1,E=0,y=1,S=1):v<_?(T=0,w=1,A=0,E=0,y=1,S=1):(T=0,w=1,A=0,E=1,y=1,S=0);const C=v-T+f,L=M-w+f,N=_-A+f,P=v-E+2*f,U=M-y+2*f,G=_-S+2*f,B=v-1+3*f,R=M-1+3*f,O=_-1+3*f,j=h&255,Q=u&255,ne=d&255,ye=this.perm[j+this.perm[Q+this.perm[ne]]]%12,Z=this.perm[j+T+this.perm[Q+w+this.perm[ne+A]]]%12,pe=this.perm[j+E+this.perm[Q+y+this.perm[ne+S]]]%12,$=this.perm[j+1+this.perm[Q+1+this.perm[ne+1]]]%12;let ee=.6-v*v-M*M-_*_;ee<0?i=0:(ee*=ee,i=ee*ee*this.dot3(this.grad3[ye],v,M,_));let ce=.6-C*C-L*L-N*N;ce<0?s=0:(ce*=ce,s=ce*ce*this.dot3(this.grad3[Z],C,L,N));let fe=.6-P*P-U*U-G*G;fe<0?r=0:(fe*=fe,r=fe*fe*this.dot3(this.grad3[pe],P,U,G));let ae=.6-B*B-R*R-O*O;return ae<0?a=0:(ae*=ae,a=ae*ae*this.dot3(this.grad3[$],B,R,O)),32*(i+s+r+a)}noise4d(e,t,n,i){const s=this.grad4,r=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const x=(e+t+n+i)*l,m=Math.floor(e+x),p=Math.floor(t+x),v=Math.floor(n+x),M=Math.floor(i+x),_=(m+p+v+M)*c,T=m-_,w=p-_,A=v-_,E=M-_,y=e-T,S=t-w,C=n-A,L=i-E,N=y>S?32:0,P=y>C?16:0,U=S>C?8:0,G=y>L?4:0,B=S>L?2:0,R=C>L?1:0,O=N+P+U+G+B+R,j=r[O][0]>=3?1:0,Q=r[O][1]>=3?1:0,ne=r[O][2]>=3?1:0,ye=r[O][3]>=3?1:0,Z=r[O][0]>=2?1:0,pe=r[O][1]>=2?1:0,$=r[O][2]>=2?1:0,ee=r[O][3]>=2?1:0,ce=r[O][0]>=1?1:0,fe=r[O][1]>=1?1:0,ae=r[O][2]>=1?1:0,Se=r[O][3]>=1?1:0,V=y-j+c,Ie=S-Q+c,k=C-ne+c,dt=L-ye+c,xe=y-Z+2*c,Ve=S-pe+2*c,Be=C-$+2*c,it=L-ee+2*c,Xe=y-ce+3*c,F=S-fe+3*c,D=C-ae+3*c,te=L-Se+3*c,_e=y-1+4*c,le=S-1+4*c,ue=C-1+4*c,Le=L-1+4*c,Me=m&255,ke=p&255,gt=v&255,Ae=M&255,Oe=a[Me+a[ke+a[gt+a[Ae]]]]%32,nt=a[Me+j+a[ke+Q+a[gt+ne+a[Ae+ye]]]]%32,at=a[Me+Z+a[ke+pe+a[gt+$+a[Ae+ee]]]]%32,Ye=a[Me+ce+a[ke+fe+a[gt+ae+a[Ae+Se]]]]%32,pt=a[Me+1+a[ke+1+a[gt+1+a[Ae+1]]]]%32;let lt=.6-y*y-S*S-C*C-L*L;lt<0?h=0:(lt*=lt,h=lt*lt*this.dot4(s[Oe],y,S,C,L));let xt=.6-V*V-Ie*Ie-k*k-dt*dt;xt<0?u=0:(xt*=xt,u=xt*xt*this.dot4(s[nt],V,Ie,k,dt));let K=.6-xe*xe-Ve*Ve-Be*Be-it*it;K<0?d=0:(K*=K,d=K*K*this.dot4(s[at],xe,Ve,Be,it));let Re=.6-Xe*Xe-F*F-D*D-te*te;Re<0?f=0:(Re*=Re,f=Re*Re*this.dot4(s[Ye],Xe,F,D,te));let me=.6-_e*_e-le*le-ue*ue-Le*Le;return me<0?g=0:(me*=me,g=me*me*this.dot4(s[pt],_e,le,ue,Le)),27*(h+u+d+f+g)}}const Hr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Ue},cameraProjectionMatrix:{value:new tt},cameraInverseProjectionMatrix:{value:new tt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},Vr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},Wr={uniforms:{tDiffuse:{value:null},resolution:{value:new Ue}},vertexShader:`varying vec2 vUv;

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

		}`};class ls extends Os{constructor(e,t,n,i,s=32){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const r=new Lc;r.format=Ps,r.type=Cs,this.normalRenderTarget=new Yn(this.width,this.height,{minFilter:En,magFilter:En,type:yi,depthTexture:r}),this.ssaoRenderTarget=new Yn(this.width,this.height,{type:yi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new on({defines:Object.assign({},Hr.defines),uniforms:vi.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,blending:Gn}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new B_,this.normalMaterial.blending=Gn,this.blurMaterial=new on({defines:Object.assign({},Wr.defines),uniforms:vi.clone(Wr.uniforms),vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new on({defines:Object.assign({},Vr.defines),uniforms:vi.clone(Vr.uniforms),vertexShader:Vr.vertexShader,fragmentShader:Vr.fragmentShader,blending:Gn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new on({uniforms:vi.clone(Jo.uniforms),vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:sd,blendDst:Tl,blendEquation:zi,blendSrcAlpha:id,blendDstAlpha:Tl,blendEquationAlpha:zi}),this.fsQuad=new Aa(null),this.originalClearColor=new ie}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,n){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case ls.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Gn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ls.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Gn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ls.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ls.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Gn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ls.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=nd,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,n,i,s){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,n,i,s){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const i=new b;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let s=n/e;s=X.lerp(.1,1,s*s),i.multiplyScalar(s),t.push(i)}}generateRandomKernelRotations(){const n=new bv,i=16,s=new Float32Array(i);for(let r=0;r<i;r++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;s[r]=n.noise3d(a,l,c)}this.noiseTexture=new Fc(s,4,4,va,oi),this.noiseTexture.wrapS=Xn,this.noiseTexture.wrapT=Xn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}}ls.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Sv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class So extends Os{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Yn(s,r,{type:yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Yn(s,r,{type:yi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Yn(s,r,{type:yi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const a=Sv;this.highPassUniforms=vi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ue(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Jo;this.copyUniforms=vi.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Mn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ie,this.oldClearAlpha=1,this.basic=new dn,this.fsQuad=new Aa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=So.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=So.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}So.BlurDirectionX=new Ue(1,0);So.BlurDirectionY=new Ue(0,1);const wv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ev extends Os{constructor(){super();const e=wv;this.uniforms=vi.clone(e.uniforms),this.material=new aa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Aa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===tn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ad?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ld?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Zd(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.25,"rgba(240, 248, 255, 0.85)"),t.addColorStop(.6,"rgba(160, 210, 255, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new xn(o);return n.needsUpdate=!0,n}function Av(o=8500,e=14e3){const t=new Lt;t.name="Procedural_Starfield";const n=new Float32Array(o*3),i=new Float32Array(o*3),s=[new ie(10205439),new ie(13293823),new ie(16316415),new ie(16774378),new ie(16765601),new ie(16754795)];for(let p=0;p<o;p++){const v=Math.random(),M=Math.random(),_=v*2*Math.PI;let T=Math.acos(2*M-1);Math.random()<.35&&(T=Math.PI*.5+(Math.random()-.5)*.32);const w=e*(.55+.45*Math.random()),A=Math.sin(T);n[p*3]=w*A*Math.cos(_),n[p*3+1]=w*Math.cos(T),n[p*3+2]=w*A*Math.sin(_);const E=s[Math.floor(Math.random()*s.length)],y=.45+.55*Math.pow(Math.random(),1.6);i[p*3]=E.r*y,i[p*3+1]=E.g*y,i[p*3+2]=E.b*y}const r=new Et;r.setAttribute("position",new yt(n,3)),r.setAttribute("color",new yt(i,3));const a=Zd(),l=e/14e3,c=new ci({size:28*l,map:a,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Mn,sizeAttenuation:!0}),h=new hi(r,c);t.add(h);const u=500,d=new Float32Array(u*3),f=new Float32Array(u*3);for(let p=0;p<u;p++){const v=Math.random()*2*Math.PI,M=Math.acos(2*Math.random()-1),_=e*.72;d[p*3]=_*Math.sin(M)*Math.cos(v),d[p*3+1]=_*Math.cos(M),d[p*3+2]=_*Math.sin(M)*Math.sin(v);const T=s[p%s.length];f[p*3]=T.r,f[p*3+1]=T.g,f[p*3+2]=T.b}const g=new Et;g.setAttribute("position",new yt(d,3)),g.setAttribute("color",new yt(f,3));const x=new ci({size:56*l,map:a,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Mn});t.add(new hi(g,x)),t.renderOrder=-80,h.renderOrder=-80;const m=t.children[1];return m.renderOrder=-80,t.userData.setStarVisibility=p=>{const v=X.clamp(p,0,1);c.opacity=.92*v,x.opacity=.95*v,t.visible=v>.015},t}class Tv{constructor(e,t=420){this.camera=e,this.count=t,this.intensity=0,this.targetIntensity=0;const n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=(Math.random()-.5)*28,n[s*3+1]=(Math.random()-.5)*18,n[s*3+2]=-Math.random()*55;this.geometry=new Et,this.geometry.setAttribute("position",new yt(n,3)),this.material=new ci({color:new ie(16758892),size:.42,map:Zd(),transparent:!0,opacity:0,depthWrite:!1,blending:Mn}),this.points=new hi(this.geometry,this.material),this.points.name="Cockpit_Reentry_Particles",this.points.frustumCulled=!1,this.camera.add(this.points),this.streakCount=220,this.streakSeeds=[];const i=new Float32Array(this.streakCount*6);for(let s=0;s<this.streakCount;s++){const r=Math.random()*Math.PI*2,a=3.5+Math.random()*22,l=Math.cos(r)*a,c=Math.sin(r)*a*.72,h=-8-Math.random()*95,u=3.5+Math.random()*7.5;this.streakSeeds.push({x:l,y:c,z:h,len:u}),i[s*6]=l,i[s*6+1]=c,i[s*6+2]=h,i[s*6+3]=l,i[s*6+4]=c,i[s*6+5]=h-u}this.streakGeometry=new Et,this.streakGeometry.setAttribute("position",new yt(i,3)),this.streakMaterial=new ws({color:8972543,transparent:!0,opacity:0,depthWrite:!1,blending:Mn}),this.streakLines=new Hd(this.streakGeometry,this.streakMaterial),this.streakLines.name="Cockpit_Pulse_Speed_Lines",this.streakLines.frustumCulled=!1,this.camera.add(this.streakLines),this.pulseFactor=0}setAtmosphereStyle(e,t){this.material.color.setHex(e),this.targetIntensity=X.clamp(t,0,1)}update(e,t=10,n=0){const i=Math.min(e,.1);if(this.intensity=X.lerp(this.intensity,this.targetIntensity,Math.min(1,i*4.5)),this.material.opacity=this.intensity*.68,this.points.visible=this.intensity>.01,this.points.visible){const s=this.geometry.attributes.position,r=s.array,a=Math.max(24,t*1.4)*i;for(let l=0;l<this.count;l++){let c=r[l*3+2]+a;c>2&&(c=-52-Math.random()*12,r[l*3]=(Math.random()-.5)*28,r[l*3+1]=(Math.random()-.5)*18),r[l*3+2]=c}s.needsUpdate=!0}if(this.pulseFactor=X.lerp(this.pulseFactor,X.clamp(n,0,1),Math.min(1,i*6)),this.streakMaterial.opacity=this.pulseFactor*.78,this.streakLines.visible=this.pulseFactor>.02,this.streakLines.visible){const s=this.streakGeometry.attributes.position,r=s.array,a=(110+t*.85)*i,l=1+this.pulseFactor*3.2;for(let c=0;c<this.streakCount;c++){const h=this.streakSeeds[c];h.z+=a,h.z>4&&(h.z=-95-Math.random()*25);const u=h.z-h.len*l;r[c*6]=h.x,r[c*6+1]=h.y,r[c*6+2]=h.z,r[c*6+3]=h.x,r[c*6+4]=h.y,r[c*6+5]=u}s.needsUpdate=!0}}}class Cv{constructor(e,t){this.camera=e,this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.velocity=new b,this.angularVelocity=new b,this.shipQuaternion=e.quaternion.clone(),this.currentBankAngle=0,this.targetBankAngle=0,this.speedMultiplier=1,this.pulseDriveCharge=0,this.speedRatio=0,this.lastLayerBaseSpeed=8,this.lastLayerBoostMax=24,this._shakePhase=0,this._qShake=new rt,this._eulerShake=new jn,this.altitudeContext={surfaceAltitude:9999,planetRadius:1050,atmoTopAlt:750,groundFloorAlt:.9,minSpeed:8,metersPerUnit:62,submergedRatio:0,planetCenter:new b,prevPlanetCenter:new b,hasPlanet:!1,inGravityWell:!1,planetDeltaPos:new b,planetQuatDelta:new rt},this._tmpToShip=new b,this.enabled=!0,this.isLocked=!1,this.isDragging=!1,this.mouseSensitivity=.0021,this.autopilot=null,this.baseFov=e.fov||60,this._bindEvents()}setEnabled(e){if(this.enabled=!!e,!this.enabled){this.isDragging=!1;for(const t of Object.keys(this.keys))this.keys[t]=!1;typeof document<"u"&&document.pointerLockElement===this.domElement&&document.exitPointerLock&&document.exitPointerLock()}}_bindEvents(){window.addEventListener("keydown",e=>this._onKeyChange(e,!0)),window.addEventListener("keyup",e=>this._onKeyChange(e,!1)),this.domElement.addEventListener("click",()=>{this.enabled&&!this.isLocked&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("hud-lock-prompt");e&&e.classList.toggle("locked",this.isLocked)}),this.domElement.addEventListener("mousedown",e=>{this.enabled&&e.button===0&&!this.isLocked&&(this.isDragging=!0)}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.enabled||!this.isLocked&&!this.isDragging||this.autopilot)return;const t=e.movementX||0,n=e.movementY||0;this.angularVelocity.y-=t*this.mouseSensitivity,this.angularVelocity.x-=n*this.mouseSensitivity;const i=X.clamp(-t*.011,-.52,.52);this.targetBankAngle=X.clamp(this.targetBankAngle+i,-.48,.48)}),window.addEventListener("wheel",e=>{if(!this.enabled)return;const t=-Math.sign(e.deltaY)*.2;this.speedMultiplier=X.clamp(Number((this.speedMultiplier+t).toFixed(1)),.2,8)},{passive:!0})}_onKeyChange(e,t){if(!(!this.enabled&&t))switch(t&&this.autopilot&&["KeyW","KeyS","KeyA","KeyD"].includes(e.code)&&(this.autopilot=null),e.code){case"KeyW":case"ArrowUp":this.keys.forward=t;break;case"KeyS":case"ArrowDown":this.keys.backward=t;break;case"KeyA":case"ArrowLeft":this.keys.left=t;break;case"KeyD":case"ArrowRight":this.keys.right=t;break;case"KeyQ":this.keys.rollLeft=t;break;case"KeyE":this.keys.rollRight=t;break;case"Space":this.keys.up=t;break;case"ControlLeft":case"ControlRight":case"KeyC":this.keys.down=t;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=t;break}}setAltitudeContext({surfaceAltitude:e,planetRadius:t,atmoTopAlt:n,groundFloorAlt:i,minSpeed:s,metersPerUnit:r,submergedRatio:a,planetCenter:l,prevPlanetCenter:c,hasPlanet:h,inGravityWell:u,planetDeltaPos:d,planetQuatDelta:f}){this.altitudeContext.surfaceAltitude=e,this.altitudeContext.planetRadius=t||1050,this.altitudeContext.atmoTopAlt=n||this.altitudeContext.planetRadius*.72,this.altitudeContext.groundFloorAlt=i??.9,this.altitudeContext.minSpeed=s??8,this.altitudeContext.metersPerUnit=r??62,this.altitudeContext.submergedRatio=X.clamp(a??0,0,1),l?(this.altitudeContext.planetCenter.copy(l),this.altitudeContext.prevPlanetCenter.copy(c||l),this.altitudeContext.hasPlanet=h!==!1):this.altitudeContext.hasPlanet=!1,this.altitudeContext.inGravityWell=!!u,d?this.altitudeContext.planetDeltaPos.copy(d):this.altitudeContext.planetDeltaPos.set(0,0,0),f?this.altitudeContext.planetQuatDelta.copy(f):this.altitudeContext.planetQuatDelta.identity()}engageAutopilot({getTargetPose:e,targetPos:t,lookAtPos:n,duration:i=3.6,useDirectCurve:s=!1,onComplete:r=null}){this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0;const a=this.camera.position.clone(),l=this.shipQuaternion.clone(),c=e||(()=>({targetPos:t.clone(),lookAtPos:n.clone(),upVec:new b(0,1,0)}));this.autopilot={startPos:a,startQuat:l,poseProvider:c,elapsed:0,duration:Math.max(.5,i),useDirectCurve:s,onComplete:r}}setPose(e,t,n=new b(0,1,0)){this.autopilot=null,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.currentBankAngle=0,this.targetBankAngle=0,this.camera.position.copy(e),this.camera.up.copy(n),this.camera.lookAt(t),this.shipQuaternion.copy(this.camera.quaternion)}getCurrentSpeed(){return this.velocity.length()}getSpeedRatio(){return this.speedRatio}getPulseRatio(){return this.autopilot?.92:this.pulseDriveCharge}_computeAdaptiveSpeedLimits(e){const t=Math.max(0,this.altitudeContext.surfaceAltitude),n=Math.max(0,this.altitudeContext.groundFloorAlt||0),s=Math.max(0,t-n)*(this.altitudeContext.metersPerUnit??62),r=Math.max(200,this.altitudeContext.atmoTopAlt),a=X.clamp(t/r,0,1),l=X.smoothstep(t,r,r+2600),c=this.altitudeContext.minSpeed??8,h=X.lerp(1,.48,this.altitudeContext.submergedRatio||0),u=X.smoothstep(s,0,2500),d=X.smoothstep(s,2500,12e3),f=X.smoothstep(s,12e3,35e3),g=X.smoothstep(s,35e3,62e3);let x=X.lerp(c,18,u);x=X.lerp(x,44,d),x=X.lerp(x,105,f),x=X.lerp(x,165,g),x*=h;const m=X.lerp(x,440,Math.pow(l,1.08)),p=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down;if(this.keys.boost&&p){const A=X.lerp(X.lerp(.24,.62,a),1,l);this.pulseDriveCharge=X.lerp(this.pulseDriveCharge,A,1-Math.exp(-3.4*e))}else this.pulseDriveCharge=X.lerp(this.pulseDriveCharge,0,1-Math.exp(-5.5*e));const v=this.keys.boost&&p?Math.min(1,this.pulseDriveCharge/Math.max(.2,X.lerp(.24,1,l))):this.pulseDriveCharge,M=X.lerp(2.2,3.2,a),T=X.lerp(M,7.2,l),w=X.lerp(1,T,Math.min(1,v));return this.lastLayerBaseSpeed=m*this.speedMultiplier,this.lastLayerBoostMax=m*this.speedMultiplier*T,m*this.speedMultiplier*w}update(e){const t=Math.min(e,.1);if(!this.autopilot&&this.altitudeContext.inGravityWell){const p=this.altitudeContext.planetQuatDelta;p.x*p.x+p.y*p.y+p.z*p.z>1e-14?(this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.prevPlanetCenter).applyQuaternion(p),this.camera.position.copy(this.altitudeContext.planetCenter).add(this._tmpToShip),this.shipQuaternion.premultiply(p).normalize(),this.velocity.applyQuaternion(p),this.camera.quaternion.copy(this.shipQuaternion)):this.camera.position.add(this.altitudeContext.planetDeltaPos)}if(this.autopilot){this.autopilot.elapsed+=t;const p=Math.min(1,this.autopilot.elapsed/this.autopilot.duration),v=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,{targetPos:M,lookAtPos:_,upVec:T,useCurveNow:w}=this.autopilot.poseProvider(v,p,this.autopilot.startPos),A=this.camera.position.clone();this.autopilot.useDirectCurve||w?this.camera.position.copy(M):this.camera.position.lerpVectors(this.autopilot.startPos,M,v);const E=this.camera.clone();E.position.copy(this.camera.position),E.up.copy(T||new b(0,1,0)),E.lookAt(_),this.shipQuaternion.slerpQuaternions(this.autopilot.startQuat,E.quaternion,this.autopilot.useDirectCurve?Math.min(1,v*2.2):Math.min(1,v*1.25)),this.camera.quaternion.copy(this.shipQuaternion),t>0&&this.velocity.copy(this.camera.position).sub(A).divideScalar(t);const y=this.autopilot.useDirectCurve?Math.sin(p*Math.PI)*14:Math.sin(p*Math.PI)*28,S=this.baseFov+y;if(Math.abs(this.camera.fov-S)>.03&&(this.camera.fov=X.lerp(this.camera.fov,S,.22),this.camera.updateProjectionMatrix()),this.speedRatio=X.lerp(this.speedRatio,this.autopilot.useDirectCurve?.35*Math.sin(p*Math.PI):.72*Math.sin(p*Math.PI),.18),p>=1){const C=this.autopilot.onComplete;this.autopilot=null,C?(this.velocity.multiplyScalar(.2),C()):this.velocity.set(0,0,0)}return}if(!this.enabled){this.angularVelocity.set(0,0,0);return}const n=(this.keys.rollLeft?1:0)-(this.keys.rollRight?1:0);if(this.angularVelocity.z+=n*1.85*t,this.angularVelocity.lengthSq()>1e-8){const p=new rt().setFromAxisAngle(new b(1,0,0),this.angularVelocity.x),v=new rt().setFromAxisAngle(new b(0,1,0),this.angularVelocity.y),M=new rt().setFromAxisAngle(new b(0,0,1),this.angularVelocity.z);this.shipQuaternion.multiply(v),this.shipQuaternion.multiply(p),this.shipQuaternion.multiply(M),this.shipQuaternion.normalize()}const i=Math.exp(-9.5*t);this.angularVelocity.multiplyScalar(i),this.targetBankAngle*=Math.exp(-5.2*t),this.currentBankAngle=X.lerp(this.currentBankAngle,this.targetBankAngle,1-Math.exp(-8.5*t));const s=new rt().setFromAxisAngle(new b(0,0,1),this.currentBankAngle);this.camera.quaternion.copy(this.shipQuaternion).multiply(s);const r=new b((this.keys.right?1:0)-(this.keys.left?1:0),(this.keys.up?1:0)-(this.keys.down?1:0),(this.keys.backward?1:0)-(this.keys.forward?1:0)),a=this._computeAdaptiveSpeedLimits(t);if(r.lengthSq()>0){r.normalize(),r.applyQuaternion(this.shipQuaternion);const p=r.multiplyScalar(a),v=X.lerp(5.8,3.8,this.pulseDriveCharge);this.velocity.lerp(p,1-Math.exp(-v*t))}else{const p=X.lerp(3.4,6.2,this.altitudeContext.submergedRatio||0);this.velocity.multiplyScalar(Math.exp(-p*t)),this.velocity.lengthSq()<1e-4&&this.velocity.set(0,0,0)}if(this.camera.position.addScaledVector(this.velocity,t),this.altitudeContext.hasPlanet){const p=this.altitudeContext.planetRadius+this.altitudeContext.groundFloorAlt,v=this._tmpToShip.copy(this.camera.position).sub(this.altitudeContext.planetCenter),M=v.length();if(M>1e-4&&M<p){const _=v.divideScalar(M);this.camera.position.copy(this.altitudeContext.planetCenter).addScaledVector(_,p);const T=this.velocity.dot(_);T<0&&this.velocity.addScaledVector(_,-T)}}const l=this.velocity.length(),c=Math.max(.001,this.lastLayerBoostMax-this.lastLayerBaseSpeed*.25),h=X.clamp((l-this.lastLayerBaseSpeed*.25)/c,0,1),u=X.clamp(Math.max(h,this.pulseDriveCharge*.94),0,1);this.speedRatio=X.lerp(this.speedRatio,u,1-Math.exp(-8.5*t));const d=Math.max(0,this.altitudeContext.surfaceAltitude||9999),f=Math.max(200,this.altitudeContext.atmoTopAlt||750),g=d/f;if(this.altitudeContext.hasPlanet&&g<.85&&(this.altitudeContext.submergedRatio||0)<.08&&this.speedRatio>.72){this._shakePhase+=t*58;const v=X.smoothstep(this.speedRatio,.72,1)*(1-X.clamp(g/.85,0,1))*.0042;this._eulerShake.set(Math.sin(this._shakePhase*1.13)*v,Math.cos(this._shakePhase*.89)*v,Math.sin(this._shakePhase*1.47)*v*1.4),this._qShake.setFromEuler(this._eulerShake),this.camera.quaternion.multiply(this._qShake)}const m=X.lerp(this.baseFov,94,Math.pow(this.speedRatio,1.12));Math.abs(this.camera.fov-m)>.03&&(this.camera.fov=X.lerp(this.camera.fov,m,1-Math.exp(-7.5*t)),this.camera.updateProjectionMatrix())}}function zt(o,e=!1){const t=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),s={},r={},a=o[0].morphTargetsRelative,l=new Et;let c=0;for(let h=0;h<o.length;++h){const u=o[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<o.length;++d){const f=o[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=o[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Tu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<r[h].length;++x)f.push(r[h][x][d]);const g=Tu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Tu(o){let e,t,n,i=-1,s=0;for(let c=0;c<o.length;++c){const h=o[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const r=new e(s),a=new yt(r,t,n);let l=0;for(let c=0;c<o.length;++c){const h=o[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else r.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Cu(o,e){if(e===Nf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===uc||e===bd){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===uc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Pv extends Fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new jv(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=Qo.extractUrlBase(e);r=Qo.resolveURL(c,this.path)}else r=Qo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new pa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===$d){try{r[kt.KHR_BINARY_GLTF]=new Kv(e)}catch(u){i&&i(u);return}s=JSON.parse(r[kt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ly(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case kt.KHR_MATERIALS_UNLIT:r[u]=new Iv;break;case kt.KHR_DRACO_MESH_COMPRESSION:r[u]=new Zv(s,this.dracoLoader);break;case kt.KHR_TEXTURE_TRANSFORM:r[u]=new $v;break;case kt.KHR_MESH_QUANTIZATION:r[u]=new Qv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Rv(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Dv{constructor(e){this.parser=e,this.name=kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],On);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $o(h),c.distance=u;break;case"spot":c=new tv(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Iv{constructor(){this.name=kt.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){const i=[];e.color=new ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],On),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,jt))}return Promise.all(i)}}class Lv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Nv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(s)}}class Uv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Fv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Ov{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],On)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,jt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Bv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class kv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new ie().setRGB(a[0],a[1],a[2],On),Promise.all(s)}}class zv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Gv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new ie().setRGB(a[0],a[1],a[2],On),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,jt)),Promise.all(s)}}class Hv{constructor(e){this.parser=e,this.name=kt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class Vv{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class Wv{constructor(e){this.parser=e,this.name=kt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Xv{constructor(e){this.parser=e,this.name=kt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qv{constructor(e){this.parser=e,this.name=kt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yv{constructor(e){this.name=kt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class jv{constructor(e){this.name=kt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const x=new tt,m=new b,p=new rt,v=new b(1,1,1),M=new Mt(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,x.compose(m,p,v));for(const _ in l)if(_==="_COLOR_0"){const T=l[_];M.instanceColor=new mc(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Xt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const $d="glTF",Go=12,Pu={JSON:1313821514,BIN:5130562};class Kv{constructor(e){this.name=kt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Go),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Go,s=new DataView(e,Go);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Pu.JSON){const c=new Uint8Array(e,Go+r,a);this.content=n.decode(c)}else if(l===Pu.BIN){const c=Go+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Zv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=kt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=_c[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=_c[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ho[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},a,c,On,d)})})}}class $v{constructor(){this.name=kt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Qv{constructor(){this.name=kt.KHR_MESH_QUANTIZATION}}class Qd extends lr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,M=p-d+u;for(let _=0;_!==a;_++){const T=r[x+_+a],w=r[x+_+l]*h,A=r[g+_+a],E=r[g+_]*h;s[_]=v*T+M*w+m*A+p*E}return s}}const Jv=new rt;class ey extends Qd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Jv.fromArray(s).normalize().toArray(s),s}}const ni={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ru={9728:En,9729:Qn,9984:dd,9985:Jr,9986:Ho,9987:Vi},Du={33071:Hi,33648:ha,10497:Xn},gl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ty={CUBICSPLINE:void 0,LINEAR:nr,STEP:tr},xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ny(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new He({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),o.DefaultMaterial}function _s(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iy(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function sy(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oy(o){let e;const t=o.extensions&&o.extensions[kt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_l(t.attributes):e=o.indices+":"+_l(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+_l(o.targets[n]);return e}function _l(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function vc(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ry(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ay=new tt;class ly{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Q_(this.options.manager):this.textureLoader=new sv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return _s(s,a,i),ki(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[kt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Qo.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=gl[i.type],a=ho[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new yt(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=gl[i.type],c=ho[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(v);M||(x=new c(a,p*f,i.count*f/h),M=new Uc(x,f/h),t.cache.add(v,M)),m=new Rs(M,l,d%f/h,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new yt(x,l,g);if(i.sparse!==void 0){const p=gl.SCALAR,v=ho[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new v(r[1],M,i.sparse.count*p),w=new c(r[2],_,i.sparse.count*l);a!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,E=T.length;A<E;A++){const y=T[A];if(m.setX(y,w[A*l]),l>=2&&m.setY(y,w[A*l+1]),l>=3&&m.setZ(y,w[A*l+2]),l>=4&&m.setW(y,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Ru[d.magFilter]||Qn,h.minFilter=Ru[d.minFilter]||Vi,h.wrapS=Du[d.wrapS]||Xn,h.wrapT=Du[d.wrapT]||Xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==En&&h.minFilter!==Qn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new bn(x);m.needsUpdate=!0,d(m)}),t.load(Qo.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ki(u,r),u.userData.mimeType=r.mimeType||ry(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[kt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[kt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[kt.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ci,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ws,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return He}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[kt.KHR_MATERIALS_UNLIT]){const u=i[kt.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],On),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,jt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Kt);const h=s.alphaMode||xl.OPAQUE;if(h===xl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===xl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==dn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==dn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==dn){const u=s.emissiveFactor;a.emissive=new ie().setRGB(u[0],u[1],u[2],On)}return s.emissiveTexture!==void 0&&r!==dn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,jt)),Promise.all(c).then(function(){const u=new r(a);return s.name&&(u.name=s.name),ki(u,s),t.associations.set(u,{materials:e}),s.extensions&&_s(i,u,s),u})}createUniqueName(e){const t=sn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Iu(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=oy(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[kt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Iu(new Et,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?ny(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=r[f];let p;const v=c[f];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new y_(x,v):new ze(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ni.TRIANGLE_STRIP?p.geometry=Cu(p.geometry,bd):m.mode===ni.TRIANGLE_FAN&&(p.geometry=Cu(p.geometry,uc));else if(m.mode===ni.LINES)p=new Hd(x,v);else if(m.mode===ni.LINE_STRIP)p=new wa(x,v);else if(m.mode===ni.LINE_LOOP)p=new ra(x,v);else if(m.mode===ni.POINTS)p=new hi(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&sy(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ki(p,s),m.extensions&&_s(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&_s(i,u[0],s),u[0];const d=new Lt;s.extensions&&_s(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nn(X.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ma(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u){a.push(u);const d=new tt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Oc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(x))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let v=0,M=d.length;v<M;v++){const _=d[v],T=f[v],w=g[v],A=x[v],E=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const y=n._createAnimationTracks(_,T,w,A,E);if(y)for(let S=0;S<y.length;S++)p.push(y[S])}return new X_(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ay)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Gd:c.length>1?h=new Lt:c.length===1?h=c[0]:h=new Xt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),ki(h,s),s.extensions&&_s(n,h,s),s.matrix!==void 0){const u=new tt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Lt;n.name&&(s.name=i.createUniqueName(n.name)),ki(s,n),n.extensions&&_s(t,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ai||d instanceof bn)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,l=[];ns[s.path]===ns.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ns[s.path]){case ns.weights:c=yo;break;case ns.rotation:c=Mo;break;case ns.position:case ns.scale:c=bo;break;default:switch(n.itemSize){case 1:c=yo;break;case 2:case 3:default:c=bo;break}break}const h=i.interpolation!==void 0?ty[i.interpolation]:nr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ns[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vc(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Mo?ey:Qd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cy(o,e,t){const n=e.attributes,i=new Yi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new b(l[0],l[1],l[2]),new b(c[0],c[1],c[2])),a.normalized){const h=vc(ho[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new b,l=new b;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=vc(ho[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new ui;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function Iu(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=_c[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return Bt.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Bt.workingColorSpace}" not supported.`),ki(o,e),cy(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iy(o,e.targets,t):o})}const vl=new WeakMap;class hy extends Fs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new pa(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,jt,n).catch(n)}decodeDracoFile(e,t,n,i,s=On,r=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(r)}decodeGeometry(e,t){const n=JSON.stringify(t);if(vl.has(e)){const l=vl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),vl.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Et;e.index&&t.setIndex(new yt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,a=i.itemSize,l=new yt(r,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(r instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==jt)return;const n=new ie;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Bt.toWorkingColorSpace(n,jt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new pa(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=uy.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function uy(){let o,e;onmessage=function(r){const a=r.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(r,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const x={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let v,M;if(c.useUniqueIDs)M=h[m],v=a.GetAttributeByUniqueId(d,M);else{if(M=a.GetAttributeId(d,r[h[m]]),M===-1)continue;v=a.GetAttribute(d,M)}const _=i(r,a,d,m,p,v);m==="color"&&(_.vertexColorSpace=c.vertexColorSpace),x.attributes.push(_)}return g===r.TRIANGULAR_MESH&&(x.index=n(r,a,d)),r.destroy(d),x}function n(r,a,l){const h=l.num_faces()*3,u=h*4,d=r._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:f,itemSize:1}}function i(r,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,x=g*h.BYTES_PER_ELEMENT,m=s(r,h),p=r._malloc(x);a.GetAttributeDataArrayForAllPoints(l,u,m,x,p);const v=new h(r.HEAPF32.buffer,p,g).slice();return r._free(p),{name:c,array:v,itemSize:d}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class Ta extends ze{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,r=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new b(.70707,.70707,0),u=new ie(t.sunColor!==void 0?t.sunColor:16777215),d=new ie(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new b(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:li,m=t.fog!==void 0?t.fog:!1,p=new os,v=new b,M=new b,_=new b,T=new tt,w=new b(0,0,-1),A=new Wt,E=new b,y=new b,S=new Wt,C=new tt,L=new Nn,N=new Yn(i,s),P={name:"MirrorShader",uniforms:vi.merge([We.fog,We.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new tt},sunColor:{value:new ie(8355711)},sunDirection:{value:new b(.70707,.70707,0)},eye:{value:new b},waterColor:{value:new ie(5592405)}}]),vertexShader:`
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
				}`},U=new on({name:P.name,uniforms:vi.clone(P.uniforms),vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,lights:!0,side:x,fog:m});U.uniforms.mirrorSampler.value=N.texture,U.uniforms.textureMatrix.value=C,U.uniforms.alpha.value=a,U.uniforms.time.value=l,U.uniforms.normalSampler.value=c,U.uniforms.sunColor.value=u,U.uniforms.waterColor.value=d,U.uniforms.sunDirection.value=h,U.uniforms.distortionScale.value=g,U.uniforms.eye.value=f,n.material=U,n.onBeforeRender=function(G,B,R){if(M.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(R.matrixWorld),T.extractRotation(n.matrixWorld),v.set(0,0,1),v.applyMatrix4(T),E.subVectors(M,_),E.dot(v)>0)return;E.reflect(v).negate(),E.add(M),T.extractRotation(R.matrixWorld),w.set(0,0,-1),w.applyMatrix4(T),w.add(_),y.subVectors(M,w),y.reflect(v).negate(),y.add(M),L.position.copy(E),L.up.set(0,1,0),L.up.applyMatrix4(T),L.up.reflect(v),L.lookAt(y),L.far=R.far,L.updateMatrixWorld(),L.projectionMatrix.copy(R.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(L.projectionMatrix),C.multiply(L.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(v,M),p.applyMatrix4(L.matrixWorldInverse),A.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const O=L.projectionMatrix;S.x=(Math.sign(A.x)+O.elements[8])/O.elements[0],S.y=(Math.sign(A.y)+O.elements[9])/O.elements[5],S.z=-1,S.w=(1+O.elements[10])/O.elements[14],A.multiplyScalar(2/A.dot(S)),O.elements[2]=A.x,O.elements[6]=A.y,O.elements[10]=A.z+1-r,O.elements[14]=A.w,f.setFromMatrixPosition(R.matrixWorld);const j=G.getRenderTarget(),Q=G.xr.enabled,ne=G.shadowMap.autoUpdate;n.visible=!1,G.xr.enabled=!1,G.shadowMap.autoUpdate=!1,G.setRenderTarget(N),G.state.buffers.depth.setMask(!0),G.autoClear===!1&&G.clear(),G.render(B,L),n.visible=!0,G.xr.enabled=Q,G.shadowMap.autoUpdate=ne,G.setRenderTarget(j);const ye=R.viewport;ye!==void 0&&G.state.viewport(ye)}}}class sr extends ze{constructor(){super(sr.Geometry,new dn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new b,t=new b,n=new gu(16,16),i=new gu(16,16);let s=bi;const r=sr.Geometry,a=new aa({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new aa({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new ze(r,a),h=[],u=Wc.Shader,d=new aa({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new ie(16777215)},scale:{value:new Ue},screenPosition:{value:new b}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Mn,transparent:!0,depthWrite:!1}),f=new ze(r,d);this.addElement=function(v){h.push(v)};const g=new Ue,x=new Ue,m=new mv,p=new Wt;this.onBeforeRender=function(v,M,_){v.getCurrentViewport(p);const T=v.getRenderTarget(),w=T!==null?T.texture.type:bi;s!==w&&(n.dispose(),i.dispose(),n.type=i.type=w,s=w);const A=p.w/p.z,E=p.z/2,y=p.w/2;let S=16/p.w;if(g.set(S*A,S),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(_.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(_.projectionMatrix),x.x=p.x+e.x*E+E-8,x.y=p.y+e.y*y+y-8,m.containsPoint(x))){v.copyFramebufferToTexture(n,x);let C=a.uniforms;C.scale.value=g,C.screenPosition.value=e,v.renderBufferDirect(_,null,r,a,c,null),v.copyFramebufferToTexture(i,x),C=l.uniforms,C.scale.value=g,C.screenPosition.value=e,v.renderBufferDirect(_,null,r,l,c,null);const L=-e.x*2,N=-e.y*2;for(let P=0,U=h.length;P<U;P++){const G=h[P],B=d.uniforms;B.color.value.copy(G.color),B.map.value=G.texture,B.screenPosition.value.x=e.x+L*G.distance,B.screenPosition.value.y=e.y+N*G.distance,S=G.size/p.w;const R=p.w/p.z;B.scale.value.set(S*R,S),d.uniformsNeedUpdate=!0,v.renderBufferDirect(_,null,r,d,f,null)}}},this.dispose=function(){a.dispose(),l.dispose(),d.dispose(),n.dispose(),i.dispose();for(let v=0,M=h.length;v<M;v++)h[v].texture.dispose()}}}class Wc{constructor(e,t=1,n=0,i=new ie(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}Wc.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};sr.Geometry=(function(){const o=new Et,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new Uc(e,5);return o.setIndex([0,1,2,0,2,3]),o.setAttribute("position",new Rs(t,3,0,!1)),o.setAttribute("uv",new Rs(t,2,3,!1)),o})();function Xr(o,e,t=0){let n=Math.imul(o|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Ds(o,e,t,n=0){const i=o*t,s=e*t,r=Math.floor(i),a=Math.floor(s),l=i-r,c=s-a,h=l*l*(3-2*l),u=c*c*(3-2*c),d=(r%t+t)%t,f=(d+1)%t,g=(a%t+t)%t,x=(g+1)%t,m=Xr(d,g,n),p=Xr(f,g,n),v=Xr(d,x,n),M=Xr(f,x,n);return m+(p-m)*h+(v+(M-v)*h-(m+(p-m)*h))*u}function Is(o,e,t=8,n=4,i=0){let s=0,r=.5,a=t,l=0;for(let c=0;c<n;c++)s+=r*Ds(o,e,a,i+c*31),l+=r,r*=.5,a*=2;return s/Math.max(1e-5,l)}function Xc(o,e,t=8,n=4,i=100){let s=0,r=.5,a=t,l=0;for(let c=0;c<n;c++){const h=1-Math.abs(Ds(o,e,a,i+c*37)*2-1);s+=r*(h*h),l+=r,r*=.5,a*=2}return s/Math.max(1e-5,l)}function la(o,e){if(typeof document>"u")return null;const t=document.createElement("canvas");return t.width=o,t.height=e,t}function ca(o,e=!0,t=4){return o.colorSpace=e?jt:Gi,o.wrapS=Xn,o.wrapT=Xn,o.repeat.set(t,t),o.anisotropy=8,o.needsUpdate=!0,o}const Wn=new Map;function Ca(o,e,t){const n=la(o,o),i=la(o,o),s=la(o,o);if(!n||!i||!s)return{map:null,roughnessMap:null,bumpMap:null};const r=n.getContext("2d"),a=i.getContext("2d"),l=s.getContext("2d"),c=r.createImageData(o,o),h=a.createImageData(o,o),u=l.createImageData(o,o),d=c.data,f=h.data,g=u.data,x={r:128,g:128,b:128,rough:.85,bump:.5};for(let m=0;m<o;m++){const p=(m+.5)/o;for(let v=0;v<o;v++){const M=(v+.5)/o;t(M,p,v,m,x);const _=(m*o+v)*4;d[_]=Math.min(255,Math.max(0,x.r|0)),d[_+1]=Math.min(255,Math.max(0,x.g|0)),d[_+2]=Math.min(255,Math.max(0,x.b|0)),d[_+3]=255;const T=Math.min(255,Math.max(0,Math.round(x.rough*255)));f[_]=T,f[_+1]=T,f[_+2]=T,f[_+3]=255;const w=Math.min(255,Math.max(0,Math.round(x.bump*255)));g[_]=w,g[_+1]=w,g[_+2]=w,g[_+3]=255}}return r.putImageData(c,0,0),a.putImageData(h,0,0),l.putImageData(u,0,0),{map:ca(new xn(n),!0,e),roughnessMap:ca(new xn(i),!1,e),bumpMap:ca(new xn(s),!1,e)}}function dy(){if(Wn.has("asphalt"))return Wn.get("asphalt");const o=Ca(512,6,(e,t,n,i,s)=>{const r=Ds(e,t,128,3),a=Is(e,t,8,4,17),l=1-Math.pow(Xc(e,t,6,3,73),3),c=Math.max(0,Math.min(1,(a-.56)*4.2)),h=Math.abs(e-.5)<.014&&Math.floor(t*16)%2===0,u=Math.abs(e-.09)<.011||Math.abs(e-.91)<.011,d=h||u?.62*(.5+.5*r):0;let f=26+r*18+a*16-l*14;f*=1-c*.24,s.r=f+d*145,s.g=f+d*122,s.b=f*1.08+d*70,s.rough=.88-c*.63-r*.04,s.bump=Math.max(0,Math.min(1,.5+(r-.5)*.42-l*.35-c*.15))});return Wn.set("asphalt",o),o}function Jd(){if(Wn.has("concrete"))return Wn.get("concrete");const o=Ca(512,2,(e,t,n,i,s)=>{const r=Is(e,t,16,4,29),a=Ds(e,t,96,11),l=i%32<2?1:0,c=n%64<2?.7:0,h=n%32>13&&n%32<17&&i%32>13&&i%32<17?1:0,u=Ds(e,t*.25,24,53),d=Math.max(0,(u-.55)*1.8),f=110+(r-.5)*32+(a-.5)*16-l*38-c*26-h*36-d*28;s.r=f+d*14,s.g=f+d*4,s.b=f*1.03-d*6,s.rough=Math.max(.78,Math.min(.95,.88+(r-.5)*.12-d*.08+l*.05)),s.bump=Math.max(0,Math.min(1,.56+(a-.5)*.28+(r-.5)*.24-l*.38-h*.35))});return Wn.set("concrete",o),o}function hr(){if(Wn.has("rock"))return Wn.get("rock");const o=Ca(512,8,(e,t,n,i,s)=>{const r=Is(e*.7+Is(e,t,4,2,9)*.18,t*2.2,6,4,41),a=Xc(e,t,6,4,91),l=Ds(e,t,96,19),c=165+(r-.5)*58-Math.pow(a,2.2)*52+(l-.5)*26;s.r=c,s.g=c*.98,s.b=c*.96,s.rough=Math.max(.7,Math.min(.96,.86+(l-.5)*.14-a*.1)),s.bump=Math.max(0,Math.min(1,.5+(r-.5)*.45-a*.32+(l-.5)*.22))});return Wn.set("rock",o),o}function qc(){if(Wn.has("terrain"))return Wn.get("terrain");const o=Ca(512,18,(e,t,n,i,s)=>{const r=Is(e,t,8,4,61),a=Ds(e,t,96,23),l=Xc(e,t,10,3,131),c=205+(r-.5)*44+(a-.5)*28-l*18;s.r=c,s.g=c,s.b=c,s.rough=Math.max(.62,Math.min(.96,.86+(r-.5)*.16-l*.14)),s.bump=Math.max(0,Math.min(1,.52+(r-.5)*.36+(a-.5)*.34-l*.2))});return Wn.set("terrain",o),o}function Pa(){if(Wn.has("waterNormals"))return Wn.get("waterNormals");const o=512,e=la(o,o);if(!e)return null;const t=e.getContext("2d"),n=t.createImageData(o,o),i=n.data,s=(l,c)=>{const h=Is(l,c,6,3,301),u=Is(l*1.5+.3,c*1.5-.2,12,3,419)*.55,d=Math.sin((l*6+c*4)*Math.PI*2)*.08+Math.cos((l*10-c*8)*Math.PI*2)*.05;return h+u+d},r=1/o;for(let l=0;l<o;l++){const c=(l+.5)/o;for(let h=0;h<o;h++){const u=(h+.5)/o,d=(s((u+r)%1,c)-s((u-r+1)%1,c))*2.2,f=(s(u,(c+r)%1)-s(u,(c-r+1)%1))*2.2,g=Math.hypot(-d,-f,1),x=(l*o+h)*4;i[x]=Math.round((-d/g*.5+.5)*255),i[x+1]=Math.round((-f/g*.5+.5)*255),i[x+2]=Math.round((1/g*.5+.5)*255),i[x+3]=255}}t.putImageData(n,0,0);const a=ca(new xn(e),!1,1);return Wn.set("waterNormals",a),a}function Yc(o,e={}){const t=e.mode||"pandora",n=new ie(e.rockHex??(t==="badlands"?6043174:3883078)),i=new ie(e.peakHex??(t==="badlands"?10251856:13819112)),s=new ie(e.shoreHex??(t==="badlands"?1450540:2895908)),r=e.peakStart??4.8,a=e.peakEnd??9.5,l=e.shoreBand??.65,c={uPlanetCenter:{value:new b},uPlanetWorldRadius:{value:e.worldRadius??1e3},uRockColor:{value:n},uPeakColor:{value:i},uShoreColor:{value:s}};o.userData.splatUniforms=c;const h=o.onBeforeCompile;return o.onBeforeCompile=(u,d)=>{h&&h(u,d),u.uniforms.uPlanetCenter=c.uPlanetCenter,u.uniforms.uPlanetWorldRadius=c.uPlanetWorldRadius,u.uniforms.uRockColor=c.uRockColor,u.uniforms.uPeakColor=c.uPeakColor,u.uniforms.uShoreColor=c.uShoreColor,u.vertexShader=`varying vec3 vSplatWorldPos;
varying vec3 vSplatWorldNormal;
`+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vSplatWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vSplatWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),u.fragmentShader=`uniform vec3 uPlanetCenter;
uniform float uPlanetWorldRadius;
uniform vec3 uRockColor;
uniform vec3 uPeakColor;
uniform vec3 uShoreColor;
varying vec3 vSplatWorldPos;
varying vec3 vSplatWorldNormal;
`+u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          vec3 _splatRad = vSplatWorldPos - uPlanetCenter;
          float _splatDist = max(0.001, length(_splatRad));
          vec3 _splatUp = _splatRad / _splatDist;
          float _splatAlt = _splatDist - uPlanetWorldRadius;
          float _splatSlope = 1.0 - abs(dot(normalize(vSplatWorldNormal), _splatUp));
          float _rockMask = smoothstep(0.32, 0.62, _splatSlope) * smoothstep(-0.2, 0.8, _splatAlt);
          float _peakMask = smoothstep(${r.toFixed(2)}, ${a.toFixed(2)}, _splatAlt);
          float _shoreMask = (1.0 - smoothstep(0.0, ${l.toFixed(2)}, abs(_splatAlt))) * step(-0.35, _splatAlt);
          vec3 _strataTex = uRockColor * (0.85 + 0.30 * fract(sin(dot(floor(vSplatWorldPos * 3.5), vec3(12.9898, 78.233, 37.719))) * 43758.5453));
          diffuseColor.rgb = mix(diffuseColor.rgb, _strataTex, _rockMask * 0.78);
          diffuseColor.rgb = mix(diffuseColor.rgb, uPeakColor, _peakMask * 0.62);
          diffuseColor.rgb = mix(diffuseColor.rgb, uShoreColor, _shoreMask * 0.72);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          vec3 _splatRadR = vSplatWorldPos - uPlanetCenter;
          float _splatDistR = max(0.001, length(_splatRadR));
          vec3 _splatUpR = _splatRadR / _splatDistR;
          float _splatAltR = _splatDistR - uPlanetWorldRadius;
          float _splatSlopeR = 1.0 - abs(dot(normalize(vSplatWorldNormal), _splatUpR));
          float _rockRoughMask = smoothstep(0.35, 0.65, _splatSlopeR);
          float _shoreRoughMask = (1.0 - smoothstep(0.0, ${l.toFixed(2)}, abs(_splatAltR))) * step(-0.35, _splatAltR);
          roughnessFactor = mix(roughnessFactor, 0.94, _rockRoughMask * 0.7);
          roughnessFactor = mix(roughnessFactor, 0.22, _shoreRoughMask * 0.85);`)},o.customProgramCacheKey=()=>`terrainSplat_${t}_${r}`,c}const fy={name:"RadialMotionBlurShader",uniforms:{tDiffuse:{value:null},uBlurStrength:{value:0}},vertexShader:`
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
  `};function py(){const o=new An(8.5,22,32,8,!0);o.rotateX(-Math.PI*.5);const e={uTime:{value:0},uOpacity:{value:0},uColor:{value:new ie(13430527)}},t=new on({uniforms:e,vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Mn,side:Kt}),n=new ze(o,t);return n.name="Mach_Supersonic_Shockwave_Cone",n.position.set(0,-.35,-10.5),n.visible=!1,n.frustumCulled=!1,n.userData.skipSSAO=!0,{mesh:n,uniforms:e}}const Xo=new b(0,1,0),qe=.45;function rs(o,e,t){return Math.max(e,Math.min(t,o))}function Ei(o,e,t){const n=rs((t-o)/(e-o),0,1);return n*n*(3-2*n)}function zn(o,e){const t=Math.hypot(o,e);if(t<1e-6)return new b(0,1,0);const n=Math.sin(t)/t;return new b(o*n,Math.cos(t),-e*n).normalize()}function my(o,e,t){const n=Math.hypot(o,t),i=Math.atan2(n,rs(e,-1,1)),s=n>1e-6?i/n:0;return{ax:o*s,ay:-t*s,theta:i}}const uo=[{id:"city_center",name:"City Center · Corpo Plaza",shortName:"Corpo Plaza",badge:"NÚCLEO CORPORATIVO",color:"#2eb8ff",accent:"#ffd068",mapAx:.02,mapAy:0,ax:.02*qe,ay:0*qe,capDir:zn(.02*qe,0),viewAlt:.145,viewBack:.165,description:"Centro neurálgico con Corpo Plaza, monolitos Neomilitaristas (Arasaka/Militech), torres Neokitsch y hologramas Koi en niebla azul clínica.",atmo:{fogDay:2247272,fogNight:464422,fogDusk:4725304,fogDensity:.0046,hemiSky:1985648,hemiGround:1055786,ambient:1058877,localLight:3721471,localBounce:15116344,bloomCap:.5}},{id:"watson",name:"Watson · Little China / Northside",shortName:"Watson",badge:"MEGAEDIFICIOS Y PUERTO",color:"#ff3450",accent:"#00e5ff",mapAx:-.05,mapAy:.34,ax:-.05*qe,ay:.34*qe,capDir:zn(-.05*qe,.34*qe),viewAlt:.125,viewBack:.145,description:"Norte de Night City: megaedificios mate H10, bloques apilados en Little China/Kabuki con carteles bajos puntuales y muelles en Northside.",atmo:{fogDay:2897480,fogNight:1116950,fogDusk:5380140,fogDensity:.0054,hemiSky:2504781,hemiGround:2101270,ambient:1580072,localLight:16726872,localBounce:1758955,bloomCap:.5}},{id:"westbrook",name:"Westbrook · Japantown / North Oak",shortName:"Westbrook",badge:"OCIO Y COLINAS ALTAS",color:"#e058ff",accent:"#fff0d8",mapAx:.36,mapAy:.16,ax:.36*qe,ay:.16*qe,capDir:zn(.36*qe,.16*qe),viewAlt:.135,viewBack:.155,description:"Este metropolitano en 3 niveles: neón selectivo en Japantown, terrazas blancas en Charter Hill y mansiones limpias en North Oak.",atmo:{fogDay:5533320,fogNight:726568,fogDusk:7025244,fogDensity:.0024,hemiSky:5008268,hemiGround:2629676,ambient:2372680,localLight:15235327,localBounce:16768936,bloomCap:.45}},{id:"heywood",name:"Heywood · The Glen / Vista del Rey",shortName:"Heywood",badge:"DISTRITO SUR · DORADO",color:"#ffb03b",accent:"#ffd884",mapAx:.02,mapAy:-.31,ax:.02*qe,ay:-.31*qe,capDir:zn(.02*qe,-.31*qe),viewAlt:.125,viewBack:.145,description:"Sur de City Center frente a la bahía: torres escalonadas en The Glen/Wellsprings y tejados bajos cálidos en Vista del Rey.",atmo:{fogDay:5916200,fogNight:1708552,fogDusk:8011808,fogDensity:.004,hemiSky:6442544,hemiGround:2891020,ambient:2826258,localLight:16757575,localBounce:14253604,bloomCap:.46}},{id:"santo_domingo",name:"Santo Domingo · Arroyo / Rancho Coronado",shortName:"Santo Domingo",badge:"INDUSTRIA Y SUBURBIOS",color:"#ff7a2e",accent:"#9aa0a8",mapAx:.39,mapAy:-.37,ax:.39*qe,ay:-.37*qe,capDir:zn(.39*qe,-.37*qe),viewAlt:.115,viewBack:.145,description:"Sureste industrial pesado: complejos fabriles, tuberías y refinerías en Arroyo junto al suburbio cuadriculado de Rancho Coronado sin neón.",atmo:{fogDay:6571052,fogNight:1904904,fogDusk:8537116,fogDensity:.0056,hemiSky:6439468,hemiGround:2627598,ambient:2891284,localLight:16745522,localBounce:7225894,bloomCap:.44}},{id:"pacifica",name:"Pacifica · Coastview / Dogtown",shortName:"Pacifica",badge:"ZONA EN RUINAS · OSCURA",color:"#7e8c9e",accent:"#ff5228",mapAx:-.23,mapAy:-.47,ax:-.23*qe,ay:-.47*qe,capDir:zn(-.23*qe,-.47*qe),viewAlt:.115,viewBack:.145,description:"Suroeste costero en penumbra: esqueletos de hoteles sin fachada, noria oxidada, fogatas aisladas y la zona amurallada de Dogtown.",atmo:{fogDay:2634302,fogNight:197896,fogDusk:3678246,fogDensity:.0044,hemiSky:2239544,hemiGround:724498,ambient:988188,localLight:6057864,localBounce:12075548,bloomCap:.34}},{id:"badlands",name:"Las Badlands · Tierras Baldías",shortName:"Las Badlands",badge:"PERÍMETRO EXTERIOR",color:"#c96f3b",accent:"#e8c488",mapAx:.76,mapAy:.06,ax:.76*qe,ay:.06*qe,capDir:zn(.76*qe,.06*qe),viewAlt:.125,viewBack:.155,description:"Cinturón exterior sin neón: campos petrolíferos al norte, parques eólicos e invernaderos Biotechnica al este y desierto nómada al sur.",atmo:{fogDay:9068090,fogNight:132104,fogDusk:10245164,fogDensity:.0014,hemiSky:9069636,hemiGround:3809298,ambient:3416596,localLight:14458980,localBounce:9062434,bloomCap:.3}}],qr=Object.fromEntries(uo.map(o=>[o.id,o]));function ef(o,e){if(typeof document>"u")return null;const t=document.createElement("canvas");return t.width=o,t.height=e,t}function gy(o,e){const t=ef(64,64);if(!t)return null;const n=t.getContext?.("2d");if(!n)return null;const i=n.createRadialGradient(32,32,1,32,32,32);i.addColorStop(0,o),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new xn(t);return s.needsUpdate=!0,s}function xy(){const e=r=>{const a=ef(512,512);if(!a)return null;const l=a.getContext?.("2d");if(!l)return null;r(l,512);const c=new xn(a);return c.colorSpace=jt,c.wrapS=Xn,c.wrapT=Xn,c},t=e((r,a)=>{r.fillStyle="#6c7075",r.fillRect(0,0,a,a);for(let l=0;l<a;l+=32){for(let c=0;c<a;c+=64){const h=Math.floor((H(c,l,7)-.5)*18);r.fillStyle=`rgb(${102+h}, ${105+h}, ${110+h})`,r.fillRect(c+1,l+1,62,30)}r.fillStyle="#383b40",r.fillRect(0,l,a,2),r.fillStyle="#2d3034";for(let c=16;c<a;c+=32)r.fillRect(c,l+14,3,3)}for(let l=0;l<55;l++){const c=Math.floor(H(l,11,3)*a),h=Math.floor(H(l,19,5)*(a-96)),u=28+Math.floor(H(l,23,9)*84);r.fillStyle=l%3===0?"rgba(92, 52, 30, 0.28)":"rgba(34, 38, 42, 0.34)",r.fillRect(c,h,2+l%4,u)}for(let l=8;l<a;l+=32)for(let c=8;c<a;c+=20)H(c,l,31)>.22&&(r.fillStyle="#1b232d",r.fillRect(c,l,10,14),r.fillStyle="rgba(130, 165, 195, 0.14)",r.fillRect(c+1,l+1,8,5))}),n=e((r,a)=>{r.fillStyle="#8b5d47",r.fillRect(0,0,a,a);for(let l=0;l<a;l+=32){for(let c=0;c<a;c+=32){const h=Math.floor((H(c,l,17)-.5)*26);r.fillStyle=`rgb(${144+h}, ${95+Math.floor(h*.7)}, ${74+Math.floor(h*.5)})`,r.fillRect(c+1,l+1,30,30),H(c,l,59)>.18&&(r.fillStyle="#181e26",r.fillRect(c+6,l+7,20,16),r.fillStyle="rgba(110, 140, 168, 0.15)",r.fillRect(c+7,l+8,18,6))}r.fillStyle="#40342f",r.fillRect(0,l,a,3)}}),i=e((r,a)=>{r.fillStyle="#484d54",r.fillRect(0,0,a,a);for(let l=0;l<a;l+=8)r.fillStyle=l%16===0?"#5c636b":"#353a40",r.fillRect(l,0,4,a);for(let l=0;l<a;l+=64)r.fillStyle="#25282c",r.fillRect(0,l,a,3);for(let l=0;l<36;l++){const c=Math.floor(H(l,4,13)*(a-40)),h=Math.floor(H(l,8,21)*(a-40));r.fillStyle=l%2===0?"rgba(122, 62, 32, 0.35)":"#23282e",r.fillRect(c,h,28,18)}}),s=e((r,a)=>{const l=r.createLinearGradient(0,0,a,a);l.addColorStop(0,"#101d2b"),l.addColorStop(.5,"#193146"),l.addColorStop(1,"#0e1924"),r.fillStyle=l,r.fillRect(0,0,a,a);for(let c=0;c<a;c+=16)r.fillStyle=c%48===0?"#4e6378":"#213142",r.fillRect(c,0,c%48===0?3:1,a);for(let c=0;c<a;c+=24)r.fillStyle="#091119",r.fillRect(0,c,a,2)});return{texBrutalistConcrete:t,texTerracottaPanels:n,texCorrugatedMetal:i,texCorporateGlass:s}}function qn(o,e=null){const t=new tt,n=new jn,i=new rt,s=new b,r=new b,a=[];for(const c of o){const h=c.geo,u=h.index?h.toNonIndexed():h.clone();u.attributes.uv1&&u.deleteAttribute("uv1"),u.attributes.color&&u.deleteAttribute("color"),s.set(c.pos?.[0]||0,c.pos?.[1]||0,c.pos?.[2]||0),n.set(c.rot?.[0]||0,c.rot?.[1]||0,c.rot?.[2]||0),i.setFromEuler(n),r.set(c.scale?.[0]??1,c.scale?.[1]??1,c.scale?.[2]??1),t.compose(s,i,r),u.applyMatrix4(t),a.push(u)}const l=zt(a,!1);for(const c of a)c.dispose();return e?l.boundingSphere=e:l.computeBoundingSphere(),l}function _y(o){const e=new hn(1,1,1),t=new en(.5,.56,1,8),n=new en(.36,.48,1,12),i=new en(.38,.65,1,10),s=new en(.5,.5,1,12),r=qn([{geo:e,pos:[0,.11,0],scale:[1.04,.22,1.04]},{geo:e,pos:[-.26,.56,0],scale:[.36,.72,.86]},{geo:e,pos:[.26,.56,0],scale:[.36,.72,.86]},{geo:e,pos:[0,.52,0],scale:[.38,.64,.52]},{geo:e,pos:[-.48,.44,-.34],scale:[.1,.78,.14]},{geo:e,pos:[.48,.44,-.34],scale:[.1,.78,.14]},{geo:e,pos:[-.48,.44,.34],scale:[.1,.78,.14]},{geo:e,pos:[.48,.44,.34],scale:[.1,.78,.14]},{geo:e,pos:[0,.42,0],scale:[1.08,.04,.96]},{geo:e,pos:[0,.72,0],scale:[1.02,.04,.92]},{geo:e,pos:[0,.96,-.14],scale:[.46,.1,.42]},{geo:e,pos:[-.24,.94,.22],scale:[.2,.07,.22]}],o),a=qn([{geo:e,pos:[0,.18,0],scale:[.78,.36,.78]},{geo:e,pos:[-.22,.46,.08],scale:[.72,.26,.58]},{geo:e,pos:[.22,.64,-.06],scale:[.68,.28,.6]},{geo:e,pos:[-.12,.84,.02],scale:[.58,.22,.54]},{geo:e,pos:[.14,.98,.12],scale:[.18,.08,.18]},{geo:s,pos:[-.22,1.09,-.1],scale:[.03,.28,.03]},{geo:s,pos:[.06,1.07,-.18],scale:[.025,.22,.025]}],o),l=qn([{geo:e,pos:[-.28,.24,0],scale:[.46,.48,.68]},{geo:e,pos:[.28,.19,.06],scale:[.44,.38,.62]},{geo:e,pos:[-.28,.5,0],rot:[0,0,.24],scale:[.52,.06,.74]},{geo:e,pos:[.28,.4,.06],rot:[.18,0,-.2],scale:[.5,.05,.68]},{geo:e,pos:[.08,.58,0],scale:[1.18,.07,.22]},{geo:s,pos:[-.15,.34,.42],rot:[0,0,Math.PI*.5],scale:[.06,.96,.06]}],o),c=qn([{geo:e,pos:[-.14,.2,0],scale:[.74,.4,1.12]},{geo:e,pos:[-.14,.43,-.22],rot:[.25,0,0],scale:[.7,.08,.36]},{geo:e,pos:[-.14,.43,.22],rot:[.25,0,0],scale:[.7,.08,.36]},{geo:s,pos:[.38,.26,-.32],scale:[.34,.52,.34]},{geo:e,pos:[.34,.44,.3],scale:[.1,.88,.1]},{geo:e,pos:[.34,.9,.02],rot:[-.36,0,0],scale:[.09,.08,.96]}],o),h=qn([{geo:t,pos:[0,.29,0],rot:[0,Math.PI/8,0],scale:[.92,.58,.92]},{geo:t,pos:[0,.69,0],rot:[0,Math.PI/8,0],scale:[.72,.26,.72]},{geo:e,pos:[-.42,.38,0],scale:[.16,.76,.34]},{geo:e,pos:[.42,.38,0],scale:[.16,.76,.34]},{geo:s,pos:[0,.86,0],scale:[.58,.06,.58]},{geo:s,pos:[0,.95,0],scale:[.14,.14,.14]}],o),u=qn([{geo:n,pos:[0,.44,0],scale:[.82,.88,.66]},{geo:n,pos:[0,.56,0],scale:[.96,.08,.8]},{geo:e,pos:[-.14,.96,0],scale:[.1,.24,.24]},{geo:s,pos:[.12,1.02,0],scale:[.06,.34,.06]}],o),d=qn([{geo:e,pos:[0,.16,0],scale:[.96,.32,.92]},{geo:e,pos:[-.08,.45,-.05],scale:[.76,.28,.74]},{geo:e,pos:[-.14,.7,-.1],scale:[.56,.24,.56]},{geo:e,pos:[.18,.34,.24],scale:[.34,.05,.28]},{geo:e,pos:[-.14,.86,-.1],scale:[.46,.06,.46]}],o),f=qn([{geo:e,pos:[0,.12,0],scale:[1.38,.24,.88]},{geo:e,pos:[-.22,.42,-.1],scale:[.94,.36,.52]},{geo:e,pos:[.28,.36,.18],scale:[.58,.24,.46]},{geo:s,pos:[.48,.26,-.26],scale:[.46,.06,.46]}],o),g=qn([{geo:e,pos:[-.16,.18,0],scale:[.92,.36,.72]},{geo:i,pos:[.36,.34,-.24],scale:[.48,.68,.48]},{geo:s,pos:[.36,.48,.24],scale:[.14,.96,.14]},{geo:s,pos:[.08,.45,.32],scale:[.12,.9,.12]},{geo:s,pos:[.12,.38,0],rot:[0,0,Math.PI*.5],scale:[.07,.64,.07]}],o),x=qn([{geo:e,pos:[-.08,.3,0],scale:[.84,.6,.72]},{geo:e,pos:[.36,.24,.14],scale:[.38,.48,.48]},{geo:e,pos:[-.08,.64,.18],rot:[.12,0,0],scale:[.92,.08,.94]},{geo:e,pos:[-.24,.74,-.14],scale:[.22,.12,.22]}],o),m=qn([{geo:e,pos:[-.42,.5,-.38],scale:[.11,1,.11]},{geo:e,pos:[.42,.5,-.38],scale:[.11,1,.11]},{geo:e,pos:[-.42,.5,.38],scale:[.11,1,.11]},{geo:e,pos:[.42,.5,.38],scale:[.11,1,.11]},{geo:e,pos:[0,.18,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.4,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.62,0],scale:[.92,.06,.84]},{geo:e,pos:[0,.84,0],scale:[.86,.06,.78]},{geo:e,pos:[.12,.96,0],scale:[.32,.18,.28]}],o),p=qn([{geo:e,pos:[0,.5,0],scale:[1,.14,1]},{geo:e,pos:[-.42,0,0],scale:[.14,1.4,.14]},{geo:e,pos:[.42,0,0],scale:[.14,1.4,.14]}],o),v=qn([{geo:e,pos:[0,.22,.51],scale:[.16,.04,.02]},{geo:e,pos:[.18,.48,-.51],scale:[.14,.035,.02]},{geo:e,pos:[-.51,.66,.12],scale:[.02,.035,.14]}],o),M=qn([{geo:n,pos:[0,0,0],rot:[Math.PI*.5,0,0],scale:[.42,1.65,.34]},{geo:e,pos:[0,-.22,0],scale:[.16,.14,.76]},{geo:e,pos:[0,.16,-.68],scale:[.04,.3,.28]},{geo:e,pos:[0,0,-.68],scale:[.48,.04,.26]}],o);return e.dispose(),t.dispose(),n.dispose(),i.dispose(),s.dispose(),{geoH10Megablock:r,geoStackedContainers:a,geoShantySkybridge:l,geoPortCraneDepot:c,geoCorpoNeoMilTower:h,geoCorpoNeoKitschTower:u,geoCharterTerraceTower:d,geoNorthOakMansion:f,geoArroyoFactory:g,geoRanchoHouse:x,geoPacificaSkeleton:m,geoBayBridge:p,geoMicroWindow:v,geoBlimpHull:M}}function vy(o,e=0){let t=-.24;return o>.26?t=-.34-Ei(.28,.72,o)*.24:o>-.2?t=-.235+Math.exp(-Math.pow(o/.14,2))*.085:t=-.23-Ei(-.26,-.58,o)*.26,t+e*.035}function ao(o,e,t){const n=my(o,e,t),i=n.ax/qe,s=n.ay/qe,r=n.theta/qe,a=1/qe,l=Vn(o*5.2*a+2.1,e*5.2*a,t*5.2*a,3)*.045,c=Vn(o*5.2*a-3.7,e*5.2*a+1.4,t*5.2*a,3)*.045,h=i+l*.45,u=s+c*.45,d=Math.hypot(h,u),f=Ht(o*14*a+1.2,e*14*a,t*14*a),g=vy(s,f),x=i-g,m=i<.04?Math.exp(-Math.pow((s-.195)/.022,2))*Ei(.05,-.14,i):0,p=i<.05?Math.exp(-Math.pow((s+.195)/.022,2))*Ei(.06,-.14,i):0,v=Math.max(m,p)>.48,M=x<0||v,_=Math.min(x,v?-.02:1),T=Ei(-.025,.025,_),w=Math.hypot(h*.92,u*.95),A=.565+f*.032;let E="city_center",y="corpo_plaza";M?(E=s<-.35&&i>-.58?"pacifica":i>-.3&&s>.18?"watson":"city_center",y="ocean_bay"):w>=A||r>=.62?(E="badlands",s>.34?y="oilfields":s>-.32&&i>.25?y="eastern_plains":y="southern_desert"):d<.215&&i>=g?(E="city_center",y=d<.11?"corpo_plaza":"downtown"):s>=.19&&i<.22+(s-.19)*.22?(E="watson",s>.39||i<g+.11?y="northside_port":i>.03?y="kabuki":y="little_china"):i>=.16&&s>-.23?(E="westbrook",i<.34&&s>-.06&&s<.26?y="japantown":s<=.06?y="charter_hill":y="north_oak"):s<=-.37&&i<.12?(E="pacifica",y=i>-.06&&s>-.51?"dogtown":"coastview"):s<=-.19&&i<.22?(E="heywood",y=i<-.02?"wellsprings":s>-.33?"the_glen":"vista_del_rey"):(E="santo_domingo",y=s>-.36?"arroyo":"rancho_coronado");let S=0;if(M)S=(-.0022-.0045*Ei(0,-.12,_))*.25;else{const N=Math.hypot((i-.42)/.17,(s-.28)/.16),P=Math.max(0,1-N*N),U=Ei(0,.85,P),G=Ei(.55,.65,r),B=1-Ei(.99,1.08,r),R=G*B,O=1-Math.abs(Ht(o*14*a+3.1,e*14*a,t*14*a-2.7)),j=Vn(o*7.5*a-4.2,e*7.5*a+1.1,t*7.5*a+5.8,4),ne=(-.0014+.014*(Math.max(0,j+.15)*(.45+.85*Math.pow(O,2.2))))*R;S=(U*.0155+ne)*.34}const C={};let L=0;for(const N of uo){const P=N.mapAx??N.ax/qe,U=N.mapAy??N.ay/qe,G=(i-P)*(i-P)+(s-U)*(s-U),B=N.id==="badlands"?.18:.055;let R=Math.exp(-G/B);N.id===E&&(R+=1.45),N.id==="badlands"&&r>.6&&!M&&(R+=1.65),C[N.id]=R,L+=R}for(const N of uo)C[N.id]/=Math.max(1e-5,L);return{ax:n.ax,ay:n.ay,theta:n.theta,mapAx:i,mapAy:s,mapTheta:r,isOcean:M,isBayChannel:v,coastBlend:T,coastSignedDist:_,district:E,subzone:y,elevationRatio:S,weights:C}}function yy(o,e,t,n,i,s,r){o.position.copy(e).multiplyScalar(t),o.quaternion.setFromUnitVectors(Xo,e),n!==0&&o.rotateY(n),o.scale.set(i,s,r),o.updateMatrix()}function My(o){const e=o.localRadius,t=1.42,n=new Lt;n.name="NightCity_7Districts_Arch_Group";const i=new Xt,s=new b,r=new ie,a=new ui(new b(0,0,0),e*1.28),{texBrutalistConcrete:l,texTerracottaPanels:c,texCorrugatedMetal:h,texCorporateGlass:u}=xy(),d=_y(a),f=58,g=112,x=(f+1)*(g+1),m=new Float32Array(x*3),p=new Float32Array(x*3),v=[];for(let W=0;W<=f;W++){const ge=W/f*(1.08*qe),q=Math.sin(ge),be=Math.cos(ge);for(let re=0;re<=g;re++){const Ee=re/g*Math.PI*2,de=q*Math.cos(Ee),se=be,Ze=q*Math.sin(Ee),$e=ao(de,se,Ze),Yt=Ei(1.04,1.08,$e.mapTheta)*-4e-4,we=$e.isOcean?14e-5:24e-5+Math.max(-1e-4,$e.elevationRatio),Pe=e*(1+we+Yt),Ct=W*(g+1)+re;m[Ct*3]=de*Pe,m[Ct*3+1]=se*Pe,m[Ct*3+2]=Ze*Pe;const Ke=Ht(de*24+2,se*24,Ze*24)*.5+.5;let At=.055,Dt=.062,Pt=.075;if($e.isOcean)At=.014,Dt=.036+Ke*.015,Pt=.064+Ke*.024;else if($e.district==="badlands")if($e.subzone==="oilfields")At=.07+Ke*.04,Dt=.065+Ke*.03,Pt=.06+Ke*.025;else{const Gt=rs($e.elevationRatio/.004,0,1);At=.24+Ke*.13+Gt*.1,Dt=.12+Ke*.055+Gt*.04,Pt=.075+Ke*.03}else $e.district==="westbrook"&&$e.subzone==="north_oak"?(At=.095+Ke*.045,Dt=.155+Ke*.075,Pt=.085+Ke*.035):$e.district==="pacifica"?(At=.062+Ke*.032,Dt=.062+Ke*.032,Pt=.068+Ke*.032):$e.district==="santo_domingo"?(At=.095+Ke*.04,Dt=.075+Ke*.035,Pt=.062+Ke*.025):$e.district==="heywood"?(At=.082+Ke*.03,Dt=.076+Ke*.025,Pt=.065+Ke*.02):(At=.044+Ke*.022,Dt=.05+Ke*.024,Pt=.064+Ke*.028);p[Ct*3]=At,p[Ct*3+1]=Dt,p[Ct*3+2]=Pt}}for(let W=0;W<f;W++)for(let ge=0;ge<g;ge++){const q=W*(g+1)+ge,be=q+(g+1);v.push(q,be,q+1,q+1,be,be+1)}const M=new Et;M.setAttribute("position",new yt(m,3)),M.setAttribute("color",new yt(p,3));const _=new Float32Array(x*2);for(let W=0;W<=f;W++)for(let ge=0;ge<=g;ge++){const q=W*(g+1)+ge;_[q*2]=ge/g*6,_[q*2+1]=W/f*4}M.setAttribute("uv",new yt(_,2)),M.setIndex(v),M.computeVertexNormals(),M.boundingSphere=a;const T=qc(),w=dy(),A=Jd(),E=hr(),y=new He({vertexColors:!0,roughnessMap:T.roughnessMap,bumpMap:T.bumpMap,bumpScale:.045,roughness:.92,metalness:.05}),S=Yc(y,{mode:"badlands",worldRadius:e*157.5,peakStart:3,peakEnd:8.5,shoreBand:.55}),C=new ze(M,y);C.name="NC_7Districts_Coastal_Terrain",C.userData.splatUniforms=S,C.frustumCulled=!1,C.castShadow=!1,C.receiveShadow=!1,n.add(C);const L=(W,ge=.88,q=.14,be=A)=>{const re=new He({color:16777215,map:W,roughnessMap:be?.roughnessMap||null,bumpMap:be?.bumpMap||null,bumpScale:.032,emissive:new ie(0),emissiveMap:null,emissiveIntensity:0,roughness:ge,metalness:q});return re.userData.outsideCityCenterMatte=!0,re},N=L(c,.88,.12),P=L(l,.9,.14),U=L(h,.84,.28),G=L(h,.85,.32),B=L(l,.86,.12),R=L(l,.82,.15),O=L(h,.9,.24),j=L(c,.92,.06),Q=L(l,.94,.08),ne=L(null,.82,.35),ye=L(null,.94,.04,E),Z=new He({color:16777215,map:l,roughnessMap:A.roughnessMap,bumpMap:A.bumpMap,bumpScale:.028,emissive:new ie(0),emissiveIntensity:0,roughness:.62,metalness:.45}),pe=new He({color:16777215,map:u,roughnessMap:w.roughnessMap,bumpMap:A.bumpMap,bumpScale:.015,emissive:new ie(4883112),emissiveIntensity:.18,roughness:.24,metalness:.82}),$=new He({color:13623518,emissive:new ie(8959146),emissiveIntensity:.18,roughness:.42,metalness:.08}),ee=new He({color:16777215,emissive:new ie(16769202),emissiveIntensity:.3,roughness:.9});ee.userData.animatedEmissive=!0,ee.userData.nightTier="microwindow";const ce=[],fe=(W,ge,q={})=>{const be=new He({color:new ie(W),emissive:new ie(W),emissiveIntensity:rs(ge,1.3,1.9),roughness:.25,metalness:.1,...q});return be.userData.baseEmissive=rs(ge,1.3,1.9),be.userData.nightTier="hero",be.userData.animatedEmissive=!0,ce.push(be),be},ae=fe("#ff223d",1.65),Se=fe("#00e5ff",1.58),V=fe("#ff2eb8",1.62),Ie=fe("#30b8ff",1.55,{transparent:!0,opacity:.48,depthWrite:!1}),k=fe("#ff7a1f",1.78),dt=fe("#ff3b6c",1.52),xe={h10:[],stacked:[],shanty:[],port:[],corpoMil:[],corpoKitsch:[],terrace:[],northOak:[],arroyo:[],rancho:[],pacifica:[],bridges:[],rocks:[],pumpBases:[],greenhouses:[],turbMasts:[],nomads:[],microWin:[],watsonNeonRed:[],watsonNeonCyan:[],japantownNeon:[],corpoBeams:[],arroyoFlares:[]},Ve=[],Be=[],it=[],Xe=[],F=[],D=[],te=[],_e=[],le=(W,ge,q,be,re,Ee,de,se)=>{yy(i,ge,q,be,re,Ee,de),W.push({matrix:i.matrix.clone(),color:se.clone()})};let ue=1;const Le=(W,ge,q=1)=>{const be=[];for(let re=0;re<ge*6&&be.length<ge;re++){ue++;const Ee=(H(ue,3,17)*2-1)*.72*qe*q,de=(H(ue,7,31)*2-1)*.72*qe*q,se=zn(Ee,de),Ze=ao(se.x,se.y,se.z);W(Ze)&&be.push({dir:se,s:Ze,i:be.length})}return be},Me=(W,ge,q=.08)=>{r.setHex(W[ge%W.length]);const be=(H(ge,19,37)-.5)*q;return r.offsetHSL(be*.15,be*.25,be),r},ke=Le(W=>!W.isOcean&&W.district==="city_center"&&Math.hypot(W.mapAx,W.mapAy)>.078,130,.34);for(const{dir:W,i:ge}of ke){const q=t*(.072+.056*Math.pow(H(ge,13,29),1.15)),be=t*(.009+.009*H(ge,5,19));ge%2===0?le(xe.corpoMil,W,e*1.00015,H(ge,2,5)*Math.PI*.5,be*1.1,q,be*1.1,Me([3554631,4541524,2764856],ge)):le(xe.corpoKitsch,W,e*1.00015,H(ge,4,7)*Math.PI,be*.95,q*1.06,be*.95,Me([5930654,9270866,3892096],ge)),ge%7===0&&xe.corpoBeams.length<18&&le(xe.corpoBeams,W,e*1.0002+q*.45,0,t*.0018,q*.65,t*.0018,r.setHex(ge%14===0?16762460:3328255))}const gt=Le(W=>!W.isOcean&&W.district==="watson"&&(W.subzone==="little_china"||W.subzone==="kabuki"),410,.85);for(const{dir:W,s:ge,i:q}of gt){const be=H(q,1,7)*Math.PI;if(q%5===0){const re=t*(.011+.006*H(q,3,13)),Ee=t*(.042+.026*H(q,9,3));le(xe.h10,W,e*1.00015,be,re,Ee,re,Me([9198406,7040885,10058834,7561816],q)),q%65===0&&le(xe.microWin,W,e*1.00015,be,re,Ee,re,Me([16765844,11064560],q,.02))}else if(q%3===1||ge.subzone==="little_china"){const re=t*(.008+.005*H(q,5,19)),Ee=t*(.028+.024*H(q,7,11));le(xe.stacked,W,e*1.00015,be,re,Ee,re,Me([8027522,9726548,6450032,8747106],q)),q%45===1&&le(xe.microWin,W,e*1.00015,be,re,Ee,re,Me([16763522,9880808],q,.02))}else{const re=t*(.007+.005*H(q,4,9)),Ee=t*(.005+.0065*H(q,12,17));le(xe.shanty,W,e*1.00015,be,re,Ee,re,Me([7235939,6055019,8019018],q))}if(q%19===0&&xe.watsonNeonRed.length+xe.watsonNeonCyan.length<21){const re=W.clone().add(new b(.001,0,-7e-4)).normalize(),Ee=q%38===0?xe.watsonNeonRed:xe.watsonNeonCyan;le(Ee,re,e*1.0002+t*.005,be,t*.0011,t*(.009+.005*H(q,2,11)),t*.0026,r.setHex(16777215))}}const Ae=Le(W=>!W.isOcean&&W.district==="watson"&&W.subzone==="northside_port",145,.92);for(const{dir:W,i:ge}of Ae){const q=t*(.014+.014*H(ge,4,21)),be=t*(.012+.014*H(ge,8,13));le(xe.port,W,e*1.00015,H(ge,6,9)*Math.PI*.5,q,be,q,Me([5922920,7229250,4541266],ge))}const Oe=Le(W=>!W.isOcean&&W.district==="westbrook"&&W.subzone==="japantown",185,.72);for(const{dir:W,s:ge,i:q}of Oe){const be=e*(1.00015+ge.elevationRatio),re=t*(.008+.006*H(q,5,31)),Ee=t*(.022+.028*Math.pow(H(q,12,7),1.2)),de=H(q,3,21)*Math.PI;le(xe.stacked,W,be,de,re,Ee,re,Me([6711928,8217970,5396582],q)),q%7===0&&xe.japantownNeon.length<28&&le(xe.japantownNeon,W,be+Ee*.25,de,t*.0014,Ee*.42,t*.0034,r.setHex(16777215))}const nt=Le(W=>!W.isOcean&&W.district==="westbrook"&&W.subzone==="charter_hill",155,.85);for(const{dir:W,s:ge,i:q}of nt){const be=e*(1.00015+ge.elevationRatio),re=t*(.01+.007*H(q,2,11)),Ee=t*(.018+.022*H(q,13,5));le(xe.terrace,W,be,H(q,4,2)*Math.PI*.5,re,Ee,re,Me([13817564,12502476,14672614],q,.04))}const at=Le(W=>!W.isOcean&&W.district==="westbrook"&&W.subzone==="north_oak",48,.95);for(const{dir:W,s:ge,i:q}of at){const be=e*(1.00015+ge.elevationRatio),re=t*(.012+.005*H(q,3,9)),Ee=t*(.005+.003*H(q,7,13));le(xe.northOak,W,be,H(q,8,17)*Math.PI,re,Ee,re,Me([15130838,13946823,15591647],q,.03));const de=be+Ee*1.15;D.push(W.x*de,W.y*de,W.z*de)}const Ye=Le(W=>!W.isOcean&&W.district==="heywood",265,.85);for(const{dir:W,s:ge,i:q}of Ye){const be=H(q,4,33)*Math.PI*.5;if(ge.subzone==="vista_del_rey"){const re=t*(.008+.005*H(q,3,27)),Ee=t*(.0055+.0065*H(q,11,7));le(xe.shanty,W,e*1.00015,be,re,Ee,re,Me([9401436,8217938,10256998],q))}else{const re=t*(.009+.006*H(q,8,19)),Ee=t*(.018+.022*Math.pow(H(q,14,9),1.2));q%3===0?le(xe.h10,W,e*1.00015,be,re,Ee,re,Me([10255196,8549992,10717544],q)):le(xe.terrace,W,e*1.00015,be,re,Ee,re,Me([12100748,10392196,12890262],q)),q%16===0&&le(xe.microWin,W,e*1.00015,be,re,Ee,re,Me([16763776,16769200],q,.02))}if(q%6===0){const re=e*1.0002+t*.0026;it.push(W.x*re,W.y*re,W.z*re)}}const pt=Le(W=>!W.isOcean&&W.district==="santo_domingo"&&W.subzone==="arroyo",130,.95);for(const{dir:W,i:ge}of pt){const q=t*(.015+.012*H(ge,2,11)),be=t*(.016+.018*H(ge,7,19));if(le(xe.arroyo,W,e*1.00015,H(ge,4,15)*Math.PI*.5,q,be,q,Me([6708824,5396060,7562069],ge)),ge%7===0&&xe.arroyoFlares.length<18){const re=e*1.0002+be*.96;le(xe.arroyoFlares,W,re,0,t*.003,t*.0048,t*.003,r.setHex(16777215)),Xe.push(W.x*re,W.y*re,W.z*re)}if(ge%6===0&&te.length<36){const re=e*1.0003+be*1.12;te.push({dir:W.clone(),alt:re,phase:ge*.5}),_e.push(W.x*re,W.y*re,W.z*re)}}for(let W=0;W<20;W++)for(let ge=0;ge<20;ge++){const q=(.25+W*.017)*qe,be=(-.34-ge*.017)*qe,re=zn(q,be),Ee=ao(re.x,re.y,re.z);if(!Ee.isOcean&&Ee.district==="santo_domingo"&&Ee.subzone==="rancho_coronado"){const de=t*.0068,se=t*(.0042+.0018*H(W,ge,4));if(le(xe.rancho,re,e*1.0002,.08,de,se,de,Me([9205862,8219741,10060910],W*20+ge)),(W*20+ge)%34===0&&le(xe.microWin,re,e*1.0002,.08,de,se,de,r.setHex(16760434)),(W+ge)%5===0){const Ze=e*1.0002+t*.0026;it.push(re.x*Ze,re.y*Ze,re.z*Ze)}}}const lt=Le(W=>!W.isOcean&&W.district==="pacifica",165,.95);for(const{dir:W,s:ge,i:q}of lt){const be=t*(.011+.008*H(q,2,19)),re=ge.subzone==="dogtown"?t*(.01+.014*H(q,9,13)):t*(.016+.022*Math.pow(H(q,6,29),1.3));if(le(xe.pacifica,W,e*1.00015,H(q,1,8)*.5,be,re,be,Me([5001044,6051922,3882562],q)),q%14===0&&F.length<30){const Ee=e*1.0002+t*.0014;F.push(W.x*Ee,W.y*Ee,W.z*Ee)}}const xt=zn(-.33*qe,-.48*qe),K=new ze(new Ea(t*.019,t*.0014,6,20),Q);K.name="NC_Pacifica_Abandoned_FerrisWheel",K.position.copy(xt).multiplyScalar(e+t*.021),K.quaternion.setFromUnitVectors(Xo,xt),K.rotateY(.4),K.castShadow=!1,K.receiveShadow=!1,n.add(K);const Re=[{a:[-.08*qe,.14*qe],b:[-.2*qe,.25*qe]},{a:[-.14*qe,.01*qe],b:[-.42*qe,-.02*qe]},{a:[-.09*qe,-.15*qe],b:[-.21*qe,-.34*qe]}];for(const W of Re){const q=zn(W.a[0],W.a[1]),be=zn(W.b[0],W.b[1]),re=Math.atan2(be.x-q.x,be.z-q.z);for(let Ee=0;Ee<=12;Ee++){const de=Ee/12,se=q.clone().lerp(be,de).normalize(),Ze=t*.008+Math.sin(de*Math.PI)*t*.005;le(xe.bridges,se,e-t*.002+Ze,re,t*.007,t*.014,t*.022,r.setHex(4870232))}}const me=Le(W=>!W.isOcean&&W.district==="badlands"&&W.mapTheta<1.05,420,1.48);for(const{dir:W,s:ge,i:q}of me){const be=e*1.0002+ge.elevationRatio*e;if(ge.subzone==="oilfields")if(q%7===0&&Be.length<32)le(xe.pumpBases,W,be-t*5e-4,0,t*.004,t*.0085,t*.004,r.setHex(3817028)),Be.push({pos:W.clone().multiplyScalar(be+t*.008),quat:new rt().setFromUnitVectors(Xo,W),scale:new b(t*.0022,t*.0022,t*.015),phase:q*.65});else{const re=t*(.007+.014*H(q,3,5));le(xe.rocks,W,be,H(q,2,9)*3.1,re,re*.6,re,Me([3880242,5063484],q))}else if(ge.subzone==="eastern_plains")if(q%10===0&&Ve.length<34){const re=t*(.024+.01*H(q,5,11));le(xe.turbMasts,W,be-t*5e-4,0,t*.0022,re,t*.0022,r.setHex(12765390));const Ee=new rt().setFromUnitVectors(Xo,W),de=new rt().setFromAxisAngle(Xo,H(q,12,5)*Math.PI*2);Ve.push({hubPos:W.clone().multiplyScalar(be+re),orientQuat:Ee.multiply(de),bladeLen:re*.56,omega:1+H(q,8,19)*.85,phase:H(q,15,2)*Math.PI*2})}else if(q%8===0&&xe.greenhouses.length<44)le(xe.greenhouses,W,be-t*4e-4,.3,t*.011,t*.0035,t*.032,r.setHex(14215910));else{const re=t*(.009+.018*Math.pow(H(q,7,13),1.5));le(xe.rocks,W,be,H(q,5,17)*3.1,re,re*.7,re*.85,Me([7027496,8210482],q))}else if(q%16===0&&xe.nomads.length<36){le(xe.nomads,W,be,H(q,4,21)*Math.PI,t*.007,t*.0038,t*.0085,r.setHex(7235164));const re=be+t*.0025;F.push(W.x*re,W.y*re,W.z*re)}else{const re=t*(.008+.018*Math.pow(H(q,3,29),1.6));le(xe.rocks,W,be,H(q,7,19)*3.1,re,re*.65,re*.8,Me([7552553,6042145],q))}}const ve=new hn(1,1,1);ve.translate(0,.5,0),ve.boundingSphere=a;const Fe=new en(.45,.55,1,8);Fe.translate(0,.5,0),Fe.boundingSphere=a;const Ge=new vo(1,0);Ge.boundingSphere=a;const je=(W,ge,q,be)=>{if(!W.length)return null;const re=new Mt(ge,q,W.length);re.name=be,re.frustumCulled=!1,re.castShadow=!1,re.receiveShadow=!1;for(let Ee=0;Ee<W.length;Ee++)re.setMatrixAt(Ee,W[Ee].matrix),re.setColorAt(Ee,W[Ee].color);return re.instanceMatrix.needsUpdate=!0,re.instanceColor&&(re.instanceColor.needsUpdate=!0),n.add(re),re};je(xe.h10,d.geoH10Megablock,N,"NC_Arch1_H10_Megablocks"),je(xe.stacked,d.geoStackedContainers,P,"NC_Arch2_Stacked_Containers"),je(xe.shanty,d.geoShantySkybridge,U,"NC_Arch3_Slum_SheetRoofs"),je(xe.port,d.geoPortCraneDepot,G,"NC_Arch4_Northside_PortDepots"),je(xe.corpoMil,d.geoCorpoNeoMilTower,Z,"NC_Arch5_CityCenter_NeoMil"),je(xe.corpoKitsch,d.geoCorpoNeoKitschTower,pe,"NC_Arch6_CityCenter_NeoKitsch"),je(xe.terrace,d.geoCharterTerraceTower,B,"NC_Arch7_Charter_Heywood_Terraces"),je(xe.northOak,d.geoNorthOakMansion,R,"NC_Arch8_NorthOak_Mansions"),je(xe.arroyo,d.geoArroyoFactory,O,"NC_Arch9_Arroyo_Factories"),je(xe.rancho,d.geoRanchoHouse,j,"NC_Arch10_Rancho_Houses"),je(xe.pacifica,d.geoPacificaSkeleton,Q,"NC_Arch11_Pacifica_Skeletons"),je(xe.bridges,d.geoBayBridge,P,"NC_Bay_Connecting_Bridges"),je(xe.rocks,Ge,ye,"NC_Badlands_Rocks"),je(xe.pumpBases,Fe,U,"NC_Badlands_Oil_Pump_Bases"),je(xe.turbMasts,Fe,ne,"NC_Badlands_WindTurbine_Masts"),je(xe.greenhouses,ve,$,"NC_Badlands_Biotechnica_Greenhouses"),je(xe.nomads,ve,j,"NC_Badlands_Nomad_Outposts"),je(xe.microWin,d.geoMicroWindow,ee,"NC_Isolated_MicroWindows"),je(xe.watsonNeonRed,ve,ae,"NC_Watson_VerticalNeon_Red"),je(xe.watsonNeonCyan,ve,Se,"NC_Watson_VerticalNeon_Cyan"),je(xe.japantownNeon,ve,V,"NC_Westbrook_Japantown_Neon"),je(xe.corpoBeams,Fe,Ie,"NC_CityCenter_LightBeams"),je(xe.arroyoFlares,Fe,k,"NC_SantoDomingo_Refinery_Flares");const Nt=new hn(.11,1,.03);Nt.translate(0,.5,0),Nt.boundingSphere=a;const Ft=Ve.length?new Mt(Nt,ne,Ve.length*3):null;Ft&&(Ft.name="NC_Badlands_WindTurbine_Blades",Ft.frustumCulled=!1,Ft.castShadow=!1,Ft.receiveShadow=!1,n.add(Ft));const ft=Be.length?new Mt(ve,O,Be.length):null;ft&&(ft.name="NC_Badlands_Oil_Pumpjacks",ft.frustumCulled=!1,ft.castShadow=!1,ft.receiveShadow=!1,n.add(ft));const ln=new hn(.46,.16,.85);ln.boundingSphere=a;const un=new Mt(d.geoBlimpHull,U,3);un.name="AV_Blimp_Hulls",un.frustumCulled=!1,un.castShadow=!1,un.receiveShadow=!1;const fn=new Mt(ln,dt,3);fn.name="AV_Blimp_Screens",fn.frustumCulled=!1,fn.castShadow=!1,fn.receiveShadow=!1,n.add(un,fn);const ct=[{ax0:-.1*qe,ay0:.21*qe,rx:.14*qe,ry:.06*qe,alt:e+t*.068,omega:.085,phase:0,scale:t*.022},{ax0:.06*qe,ay0:.18*qe,rx:.12*qe,ry:.07*qe,alt:e+t*.08,omega:-.072,phase:2.1,scale:t*.025},{ax0:-.03*qe,ay0:.25*qe,rx:.16*qe,ry:.05*qe,alt:e+t*.062,omega:.064,phase:4.2,scale:t*.02}],Zt=[{start:[.58*qe,-.15*qe],end:[.92*qe,-.45*qe]},{start:[.35*qe,-.6*qe],end:[.55*qe,-.96*qe]}],_n=28,Sn=t*.004,Tt=[],pn=new b,rn=new b,cn=new b;for(let W=0;W<Zt.length;W++){const ge=Zt[W],q=new Float32Array((_n+1)*2*3),be=new Float32Array((_n+1)*2*2),re=[];for(let de=0;de<=_n;de++){const se=de/_n,Ze=X.lerp(ge.start[0],ge.end[0],se)+Math.sin(se*3.2+W)*.025*qe,$e=X.lerp(ge.start[1],ge.end[1],se);s.copy(zn(Ze,$e));const Yt=ao(s.x,s.y,s.z),we=e*1.0002+Yt.elevationRatio*e+t*8e-4;cn.copy(s).multiplyScalar(we),pn.set(.3,0,-1).cross(s).normalize(),rn.crossVectors(s,pn).normalize();const Pe=de*2;q[Pe*3]=cn.x-rn.x*Sn,q[Pe*3+1]=cn.y-rn.y*Sn,q[Pe*3+2]=cn.z-rn.z*Sn,q[(Pe+1)*3]=cn.x+rn.x*Sn,q[(Pe+1)*3+1]=cn.y+rn.y*Sn,q[(Pe+1)*3+2]=cn.z+rn.z*Sn,be[Pe*2]=0,be[Pe*2+1]=se*8,be[(Pe+1)*2]=1,be[(Pe+1)*2+1]=se*8,de<_n&&re.push(Pe,Pe+2,Pe+1,Pe+1,Pe+2,Pe+3)}const Ee=new Et;Ee.setAttribute("position",new yt(q,3)),Ee.setAttribute("uv",new yt(be,2)),Ee.setIndex(re),Ee.computeVertexNormals(),Tt.push({geo:Ee.toNonIndexed()}),Ee.dispose()}const qt=zt(Tt.map(W=>W.geo),!1);Tt.forEach(W=>W.geo.dispose()),qt.boundingSphere=a;const $t=new ze(qt,new He({color:16777215,map:w.map,roughnessMap:w.roughnessMap,bumpMap:w.bumpMap,bumpScale:.04,roughness:1,metalness:.08,side:Kt}));$t.name="NC_Badlands_Desert_Roads",$t.frustumCulled=!1,$t.castShadow=!1,$t.receiveShadow=!1,n.add($t);const Ot=zn(-.27*qe,.01*qe),Ut=new Us(e*.16*qe,40),_t=new Ta(Ut,{textureWidth:256,textureHeight:256,waterNormals:Pa(),sunDirection:new b(.4,.6,.5).normalize(),sunColor:9224959,waterColor:466222,distortionScale:.35,size:4.5,clipBias:.002,alpha:.92,fog:!0});_t.name="NC_CoronadoBay_Reflective_Water",_t.position.copy(Ot).multiplyScalar(e*1.00025),_t.quaternion.setFromUnitVectors(new b(0,0,1),Ot),_t.visible=!1,_t.castShadow=!1,_t.receiveShadow=!1,n.add(_t);const I=(W,ge,q,be,re,Ee)=>{if(!W.length)return null;const de=new Et;de.setAttribute("position",new Vt(W,3)),de.boundingSphere=a;const se=new ci({map:gy("rgba(255,255,255,0.92)","rgba(255,210,160,0.32)"),color:ge,size:q,transparent:!0,opacity:be,depthWrite:!1,blending:re?Mn:Es,sizeAttenuation:!0}),Ze=new hi(de,se);return Ze.name=Ee,Ze.frustumCulled=!1,n.add(Ze),{pts:Ze,mat:se,geo:de}},Y=I(it.concat(D),16755272,1.3,.66,!0,"NC_Heywood_Rancho_Streetlamps"),oe=I(F.concat(Xe),16739364,2.1,.84,!0,"NC_Pacifica_Arroyo_FlaresAndFires"),he=I(_e,2761760,14,.5,!1,"NC_Arroyo_Industrial_Smoke"),J=new rt,Ce=new rt,De=new b,Qe=new tt,et=new b,st=new b,ht=new b,z=new tt,Ne=Math.PI*2/3,Je=new b(0,0,1),ot=new b(1,0,0);return{group:n,terrainSplatUniforms:S,bayWater:_t,update(W,ge=1){if(!n.parent||!n.parent.visible)return;if(_t.material?.uniforms?.time&&(_t.material.uniforms.time.value=W*.48),Ft){for(let Ee=0;Ee<Ve.length;Ee++){const de=Ve[Ee],se=W*de.omega+de.phase;De.set(de.bladeLen*.25,de.bladeLen,de.bladeLen*.25);for(let Ze=0;Ze<3;Ze++)J.setFromAxisAngle(Je,se+Ze*Ne),Ce.copy(de.orientQuat).multiply(J),Qe.compose(de.hubPos,Ce,De),Ft.setMatrixAt(Ee*3+Ze,Qe)}Ft.instanceMatrix.needsUpdate=!0}if(ft){for(let Ee=0;Ee<Be.length;Ee++){const de=Be[Ee];J.setFromAxisAngle(ot,Math.sin(W*1.15+de.phase)*.28),Ce.copy(de.quat).multiply(J),Qe.compose(de.pos,Ce,de.scale),ft.setMatrixAt(Ee,Qe)}ft.instanceMatrix.needsUpdate=!0}for(let Ee=0;Ee<ct.length;Ee++){const de=ct[Ee],se=W*de.omega+de.phase,Ze=de.ax0+Math.cos(se)*de.rx,$e=de.ay0+Math.sin(se)*de.ry,Yt=-Math.sin(se)*de.rx*de.omega,we=Math.cos(se)*de.ry*de.omega;s.copy(zn(Ze,$e)),et.copy(s).multiplyScalar(de.alt+Math.sin(W*.8+Ee)*t*.002),st.set(Yt,0,-we),st.addScaledVector(s,-s.dot(st)),st.lengthSq()<1e-8&&st.set(1,0,0).addScaledVector(s,-s.x),st.normalize(),ht.crossVectors(s,st),ht.lengthSq()<1e-8&&ht.set(0,0,1),ht.normalize(),st.crossVectors(ht,s).normalize(),z.makeBasis(ht,s,st),z.setPosition(et),De.setScalar(de.scale),z.scale(De),un.setMatrixAt(Ee,z),fn.setMatrixAt(Ee,z)}if(un.instanceMatrix.needsUpdate=!0,fn.instanceMatrix.needsUpdate=!0,he&&te.length>0){const Ee=he.geo.attributes.position;for(let de=0;de<te.length;de++){const se=te[de],Ze=1+.002*Math.sin(W*.7+se.phase);Ee.setXYZ(de,se.dir.x*se.alt*Ze,se.dir.y*se.alt*Ze,se.dir.z*se.alt*Ze)}Ee.needsUpdate=!0}const q=.94+.06*Math.sin(W*2.2),be=rs(.88+(ge-1)*.14,.85,1.08);for(let Ee=0;Ee<ce.length;Ee++){const de=ce[Ee];de.emissiveIntensity=rs(de.userData.baseEmissive*be*q,1.3,1.9)}const re=rs(.42+(ge-.8)*.25,.35,.78);Y&&(Y.mat.opacity=re),oe&&(oe.mat.opacity=.7+.18*Math.sin(W*8.2))}}}const yc={uSunViewPos:{value:new b}};function H(o,e,t){let n=Math.imul(o|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Ht(o,e,t){const n=Math.floor(o),i=Math.floor(e),s=Math.floor(t),r=o-n,a=e-i,l=t-s,c=r*r*(3-2*r),h=a*a*(3-2*a),u=l*l*(3-2*l),d=H(n,i,s),f=H(n+1,i,s),g=H(n,i+1,s),x=H(n+1,i+1,s),m=H(n,i,s+1),p=H(n+1,i,s+1),v=H(n,i+1,s+1),M=H(n+1,i+1,s+1),_=d+(f-d)*c,T=g+(x-g)*c,w=m+(p-m)*c,A=v+(M-v)*c,E=_+(T-_)*h,y=w+(A-w)*h;return(E+(y-E)*u)*2-1}function Vn(o,e,t,n=4){let i=0,s=.5,r=1;for(let a=0;a<n;a++)i+=s*Ht(o*r+a*17.31,e*r-a*9.7,t*r+a*3.3),r*=2.03,s*=.5;return i}function Qt(o,e,t){const n=Math.min(1,Math.max(0,(t-o)/(e-o)));return n*n*(3-2*n)}function As(o,e){const t=document.createElement("canvas");return t.width=o,t.height=e,t}function by(o=[0,1,0]){return[o,[-o[0],-o[1],-o[2]],[.8,.2,.55],[-.7,.35,-.6],[.1,-.3,-.95],[-.85,-.25,.45],[.55,-.6,-.1],[.15,.55,.82]].map(t=>{const n=new b(...t).normalize(),i=Math.abs(n.y)<.9?new b(0,1,0):new b(1,0,0),s=new b().crossVectors(n,i).normalize(),r=new b().crossVectors(n,s).normalize();return{h:n,e1:s,e2:r}})}const bt=[{id:"hometree",name:"Gran Árbol Madre (Hometree)",shortName:"Árbol-Casa",theta:.045,phi:-.55,landBoostRad:.24,elevMode:"valley",viewAlt:.092,viewBack:.11},{id:"hallelujah",name:"Montañas Aleluya",shortName:"Aleluya",theta:.38,phi:1.15,landBoostRad:.22,elevMode:"bay",viewAlt:.135,viewBack:.145},{id:"rookery",name:"Nido de Ikran (Ikran Rookery)",shortName:"Nido Ikran",theta:1.06,phi:3.65,landBoostRad:.25,elevMode:"canyon",viewAlt:.105,viewBack:.125},{id:"souls",name:"Árbol de las Almas (Tree of Souls)",shortName:"Árbol Almas",theta:1.54,phi:5.15,landBoostRad:.26,elevMode:"crater",viewAlt:.078,viewBack:.105},{id:"mushrooms",name:"Bosque de Setas Gigantes y Géiseres",shortName:"Setas / Géiseres",theta:2.28,phi:2.1,landBoostRad:.25,elevMode:"basin",viewAlt:.082,viewBack:.11},{id:"ashland",name:"Tierra de Ceniza (Pueblo Ash)",shortName:"Ceniza / Volcanes",theta:1.88,phi:.72,landBoostRad:.34,elevMode:"ash",viewAlt:.115,viewBack:.145},{id:"metkayina",name:"Arrecife Metkayina (Aldea y Abismo)",shortName:"Metkayina",theta:1.18,phi:2.15,landBoostRad:.32,elevMode:"reef",viewAlt:.068,viewBack:.098}].map(o=>{const e=Math.sin(o.theta);return{...o,capDir:new b(e*Math.cos(o.phi),Math.cos(o.theta),e*Math.sin(o.phi)).normalize()}}),Sy=[{v:bt[0].capDir,bias:.25},{v:bt[1].capDir,bias:.22},{v:bt[2].capDir,bias:.24},{v:bt[3].capDir,bias:.26},{v:bt[4].capDir,bias:.29},{v:new b(.12,-.78,-.22).normalize(),bias:.23},{v:new b(-.05,-.94,.32).normalize(),bias:.24},{v:new b(.45,.62,-.64).normalize(),bias:.18}],wy=[{v:bt[6].capDir,bias:.39},{v:new b(-.82,.05,.57).normalize(),bias:.39},{v:new b(-.08,.18,.98).normalize(),bias:.32},{v:new b(-.82,-.34,-.45).normalize(),bias:.38},{v:new b(-.55,-.4,.1).normalize(),bias:.31},{v:new b(-.38,-.68,-.62).normalize(),bias:.3}],Ey=[{v:bt[5].capDir,bias:.36},{v:new b(.93,-.15,.33).normalize(),bias:.3},{v:new b(.74,-.6,.28).normalize(),bias:.25},{v:new b(.55,-.18,.81).normalize(),bias:.28}];function Ra(o=[0,1,0]){const e=new b(o[0],o[1],o[2]).normalize(),t=new rt().setFromUnitVectors(new b(0,1,0),e),n=bt.map(i=>({...i,sphereDir:i.capDir.clone().applyQuaternion(t).normalize()}));return n.nationSites={forest:Sy.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),water:wy.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),ash:Ey.map(i=>({v:i.v.clone().applyQuaternion(t).normalize(),bias:i.bias})),metkayinaDir:n[6].sphereDir,ashDir:n[5].sphereDir,soulsDir:n[3].sphereDir,mushDir:n[4].sphereDir},n}const Ay=Ra([0,1,0]);function jc(o,e,t,n,i=5){const s=n?.nationSites?n:Ay,{forest:r,water:a,ash:l}=s.nationSites;let c=-9;for(let B=0;B<r.length;B++){const R=r[B],O=o*R.v.x+e*R.v.y+t*R.v.z+R.bias;O>c&&(c=O)}let h=-9;for(let B=0;B<a.length;B++){const R=a[B],O=o*R.v.x+e*R.v.y+t*R.v.z+R.bias;O>h&&(h=O)}let u=-9;for(let B=0;B<l.length;B++){const R=l[B],O=o*R.v.x+e*R.v.y+t*R.v.z+R.bias;O>u&&(u=O)}const d=Vn(o*2.2+4.1,e*2.2-1.7,t*2.2+2.9,Math.min(3,i))*.052,f=Ht(o*6.8+1.3,e*6.8-2.1,t*6.8+3.4)*.016,g=Ht(o*3.1-2.2,e*3.1+1.9,t*3.1-.8)*.038,x=c+d+f,m=h-d*.85,p=u+g,v=Math.max(x,p),M=m-v,_=p-Math.max(x,m);let T="forest";_>0&&p>m?T="ash":M>0&&(T="water");const w=Qt(-.035,.045,_),A=Qt(-.035,.045,M)*(1-w),E=Math.max(0,1-w-A),y=Math.abs(p-x),S=Math.exp(-Math.pow(y/.068,2))*(1-Qt(-.02,.08,M));let C=0,L=0;if(T==="water"){const B=Qt(0,.14,M),R=s.nationSites.metkayinaDir,O=X.clamp(o*R.x+e*R.y+t*R.z,-1,1),j=Math.acos(O);if(C=-.02-B*.34,j<.145){const Q=1-j/.145;C=X.lerp(-.085,-.155,Q),L=.72+.28*Q}else if(M>.045){const Q=Math.exp(-Math.pow((j-.28)/.17,2)),ne=Qt(.14,.34,M)*.48,ye=1-Math.abs(Ht(o*4.4+2.7,e*4.4-1.3,t*4.4+.8)),Z=Vn(o*8.5+3.1,e*8.5-1.9,t*8.5+2.4,Math.min(3,i)),pe=Q*.48+ne*.22+Math.pow(Math.max(0,ye),3.6)*.52+Z*.26;if(pe>.72)C=.012+Math.min(.085,(pe-.72)*.48),L=.9;else if(pe>.38){const $=Qt(.38,.72,pe);C=X.lerp(-.14,-.008,$),L=$*.95}}}else if(T==="ash"){const B=Qt(0,.11,_),R=Vn(o*4.1-1.3,e*4.1+2.2,t*4.1-.9,Math.min(4,i))*.06;C=X.lerp(.06,.3,B)+Math.max(-.02,R)+S*.16}else{const B=Math.max(0,x-m),R=Qt(0,.12,B),O=Vn(o*3.6+1.2,e*3.6-.8,t*3.6-2.4,Math.min(4,i))*.075;C=X.lerp(.015,.28,R)+Math.max(0,O)+S*.16}let N=0;for(let B=0;B<5;B++){const R=s[B],O=R.sphereDir,j=Math.acos(X.clamp(o*O.x+e*O.y+t*O.z,-1,1));if(j<R.landBoostRad){const Q=1-j/R.landBoostRad,ne=Q*Q*(3-2*Q);if(R.elevMode==="bay"?C=Math.max(C,.14+ne*.18):C=Math.max(C,.16+ne*.24),(R.elevMode==="crater"||R.elevMode==="basin")&&j<.11){const ye=1-j/.11;N=Math.max(N,ye*ye*.0024)}}}const P=1-Math.abs(Ht(o*5.6+1.9,e*5.6-3.4,t*5.6+.7)),U=Math.max(0,C-.12)*Math.pow(Math.max(0,P),2.1)+S*.28,G=Vn(o*8.2+4.1,e*8.2-2.3,t*8.2+.9,3);return{cont:C,ridge:P,highlandRidge:U,craterDepression:N,forestFactor:E,waterFactor:A,ashFactor:w,reefFactor:L,borderMountain:S,forestClump:G,nation:T}}function Ty(o,e,t,n=[0,1,0]){const i=new b(n[0],n[1],n[2]).normalize(),s=i.x,r=i.y,a=i.z,l=o==="p1"?Ra([s,r,a]):null;let c=null;if(o==="p2"){const y=new rt().setFromUnitVectors(new b(0,1,0),i).invert();c=new wt().setFromMatrix4(new tt().makeRotationFromQuaternion(y)).elements}const h=As(e,t),u=As(e,t),d=As(e,t),f=h.getContext("2d").createImageData(e,t),g=u.getContext("2d").createImageData(e,t),x=d.getContext("2d").createImageData(e,t),m=f.data,p=g.data,v=x.data,M=new Float32Array(e),_=new Float32Array(e);for(let y=0;y<e;y++){const S=(y+.5)/e*Math.PI*2;M[y]=Math.cos(S),_[y]=Math.sin(S)}const T=o==="p4"?by([s,r,a]):null;for(let y=0;y<t;y++){const S=(y+.5)/t*Math.PI,C=Math.sin(S),L=Math.cos(S);for(let N=0;N<e;N++){const P=-M[N]*C,U=_[N]*C,G=P*s+L*r+U*a,B=(y*e+N)*4;let R=0,O=0,j=0,Q=0,ne=0,ye=0,Z=.5;if(o==="p4"){let $=-2,ee=-2,ce=0;for(let ue=0;ue<T.length;ue++){const Le=T[ue].h,Me=P*Le.x+L*Le.y+U*Le.z;Me>$?(ee=$,$=Me,ce=ue):Me>ee&&(ee=Me)}const fe=T[ce],ae=Math.acos(Math.min(1,$)),Se=Math.atan2(P*fe.e2.x+L*fe.e2.y+U*fe.e2.z,P*fe.e1.x+L*fe.e1.y+U*fe.e1.z);let V=Math.abs(Math.cos(ae*95));V*=V,V*=V,V*=V,V*=V;const Ie=Qt(.008,.02,ae);let k=Math.abs(Math.cos(Se*12));k*=k,k*=k,k*=k,k*=k,k*=k;const dt=k*Qt(.02,.07,ae)*(1-Qt(.45,.9,ae)),xe=1-Qt(0,.014,$-ee),Ve=H(Math.floor(P*140),Math.floor(L*140),Math.floor(U*140)),Be=H(Math.floor(P*700)+3,Math.floor(L*700),Math.floor(U*700)),it=Ht(P*6,L*6,U*6)*.5+.5,Xe=(Be>.6?1:0)*(.35+.65*Ve)*(.4+.6*it),F=V*.85*Ie+dt*.8+xe*1.1+Xe*.45;let D,te,_e;Ve<.33?(D=1,te=.74,_e=.32):Ve<.66?(D=1,te=.88,_e=.62):(D=1,te=.52,_e=.18),Q=F*D,ne=F*te,ye=F*_e;const le=.11+.1*Ve+.05*it+.06*V*Ie;R=le*1.05,O=le,j=le*.95,Z=.4+.3*Ve+.2*V}else if(o==="p2"){const $=c[0]*P+c[3]*L+c[6]*U,ee=c[1]*P+c[4]*L+c[7]*U,ce=c[2]*P+c[5]*L+c[8]*U,fe=H(Math.floor($*560),Math.floor(ee*560),Math.floor(ce*560)),ae=H(Math.floor($*96)+7,Math.floor(ee*96),Math.floor(ce*96));if(G>.84){const Se=ao($,ee,ce),V=Ht($*14+3,ee*14,ce*14)*.5+.5,Ie=1-Qt(.41,.49,Se.theta);if(Se.isOcean){const k=Qt(-.045,0,Se.coastSignedDist);R=.012+.018*k,O=.032+.045*k,j=.062+.055*k,Q=0,ne=0,ye=0,Z=.25}else if(Se.district==="badlands")Se.subzone==="oilfields"?(R=.075+.04*V,O=.07+.035*V,j=.065+.03*V,Q=0,ne=0,ye=0,Z=.44+.2*V):(R=(.24+.14*V)*Ie+.19*(1-Ie),O=(.115+.055*V)*Ie+.1*(1-Ie),j=(.068+.03*V)*Ie+.06*(1-Ie),Se.subzone==="eastern_plains"&&fe>.965&&Math.abs(Math.sin($*42))>.85&&(Q=.16,ne=.24,ye=.2),Z=.46+.28*V);else if(Se.district==="pacifica")R=.052+.03*ae,O=.055+.03*ae,j=.062+.03*ae,fe>.992&&(Q=.35,ne=.12,ye=.04),Z=.44+.16*ae;else if(Se.district==="santo_domingo"){if(Se.subzone==="arroyo"){R=.11+.04*V,O=.085+.03*V,j=.065+.02*V;const k=fe>.92?.35+.35*ae:0;Q=k*.95,ne=k*.42,ye=k*.1}else{const k=Math.abs(Math.sin(Se.ax*190))>.86||Math.abs(Math.sin(Se.ay*190))>.86;R=.13+.04*V,O=.105+.035*V,j=.08,k&&fe>.78&&(Q=.42,ne=.21,ye=.06)}Z=.46+.15*ae}else if(Se.district==="heywood"){if(R=.095+.035*ae,O=.085+.03*ae,j=.07,fe>.74){const k=.38+.45*ae;Q=k*.96,ne=k*.62,ye=k*.18}Z=.52+.24*ae}else if(Se.district==="westbrook")if(Se.subzone==="north_oak")R=.095+.04*V,O=.165+.06*V,j=.085+.03*V,fe>.978&&(Q=.48,ne=.36,ye=.18),Z=.62+.26*V;else if(Se.subzone==="charter_hill")R=.19+.05*ae,O=.2+.05*ae,j=.22+.05*ae,fe>.8&&(Q=.35,ne=.38,ye=.44),Z=.54+.22*ae;else{if(R=.075+.03*ae,O=.07+.03*ae,j=.095+.04*ae,fe>.65){const k=.45+.48*ae;Q=k*.88,ne=k*.24,ye=k*.72}Z=.58+.26*ae}else if(Se.district==="watson")if(Se.subzone==="northside_port")R=.055+.025*ae,O=.06+.025*ae,j=.075+.03*ae,fe>.93&&(Q=.16,ne=.34,ye=.42),Z=.44+.15*ae;else{if(R=.065+.03*ae,O=.065+.03*ae,j=.082+.035*ae,fe>.6){const k=.48+.52*ae;ae>.62?(Q=k*.95,ne=k*.14,ye=k*.22):ae>.25?(Q=k*.12,ne=k*.78,ye=k*.92):(Q=k*.92,ne=k*.72,ye=k*.16)}Z=.58+.28*ae}else{const k=1-Qt(.06,.21,Math.hypot(Se.ax,Se.ay));if(R=.075+.04*ae,O=.085+.04*ae,j=.115+.05*ae,fe>.48){const dt=(.48+.65*k)*(.45+.55*ae);ae>.72?(Q=dt*.92,ne=dt*.76,ye=dt*.38):ae>.34?(Q=dt*.22,ne=dt*.78,ye=dt*1):(Q=dt*.78,ne=dt*.88,ye=dt*1)}Z=.65+.28*k}}else{let Se=Vn($*2.1+4.3,ee*2.1,ce*2.1,5);if($<-.25&&(Se-=(-.25-$)*.45),Se>.04){const V=Ht($*9+1.5,ee*9,ce*9)*.5+.5;R=.21+.12*V,O=.105+.05*V,j=.065+.03*V,Z=.46+.28*V}else{const V=Qt(-.35,.04,Se);R=.012+.02*V,O=.032+.045*V,j=.068+.065*V,Z=.28}}}else if(o==="p3"){let $=Vn(P*1.8+11,L*1.8,U*1.8,5);G>.84&&($=Math.max($,.08+(G-.84)*.8));const ee=1-Math.abs(Ht(P*7+3,L*7,U*7)),ce=Math.max(0,$-.12)*ee*ee*3*(G>.9?.2:1),fe=Ht(P*14,L*14,U*14);if($>0)Z=.45+$*.6+ce*.6,L<-.9||L>.93?(R=.9,O=.93,j=.96):ce>.6?(R=.88,O=.9,j=.94):ce>.25?(R=.36,O=.31,j=.26):fe>.3&&G<.9?(R=.07,O=.2,j=.07):(R=.15+.04*fe,O=.34+.05*fe,j=.11),H(Math.floor(P*300),Math.floor(L*300),Math.floor(U*300))>.996&&(Q=.9,ne=.62,ye=.3);else{const ae=Qt(-.25,0,$);R=.02+.03*ae,O=.08+.12*ae,j=.22+.13*ae,(L<-.92||L>.94)&&(R=.88,O=.92,j=.96),Z=.3+$*.3}}else{const{cont:$,highlandRidge:ee,forestFactor:ce,ashFactor:fe,reefFactor:ae,borderMountain:Se,nation:V}=jc(P,L,U,l),Ie=Ht(P*11,L*11,U*11),k=Ht(P*28+2.1,L*28,U*28-1.4)*.5+.5,dt=Vn(P*6.5-3.2,L*6.5+1.4,U*6.5,3)*.5+.5;if(V==="ash"&&$>0){const xe=.125+.085*k+.03*Ie,Ve=Math.min(1,ee*2.2+Se*.55);R=X.lerp(xe*1.06,.24,Ve*.6),O=X.lerp(xe*.98,.22,Ve*.6),j=X.lerp(xe*1.04,.24,Ve*.6);const it=Math.pow(Math.max(0,1-Math.abs(Ht(P*18+4.1,L*18,U*18-2.3))),16)*fe*.72;R=Math.min(1,R+it*.32),O=Math.min(1,O+it*.07),Q=it*.78,ne=it*.16,ye=it*.02,Z=.58+fe*.28+ee*.42}else if($>0)if(V==="water"){const xe=Qt(0,.032,$);R=X.lerp(.84,.15+.04*k,xe),O=X.lerp(.79,.42+.08*dt,xe),j=X.lerp(.61,.18+.03*k,xe),Z=.46+$*1.2}else{const xe=Qt(.28,.78,dt);R=X.lerp(.088,.145,xe)+.035*k,O=X.lerp(.235,.355,xe)+.055*Ie,j=X.lerp(.105,.148,xe)+.022*k;const Ve=Qt(.55,.85,k)*(1-Math.min(1,ee*3));R=X.lerp(R,.22,Ve*.42),O=X.lerp(O,.4,Ve*.38);const Be=Math.min(1,ee*2.6+Se*.72);R=X.lerp(R,.28,Be*.65),O=X.lerp(O,.31,Be*.58),j=X.lerp(j,.29,Be*.62);const it=Qt(.22,.44,ee);R=X.lerp(R,.68,it*.52),O=X.lerp(O,.74,it*.52),j=X.lerp(j,.72,it*.52);const Xe=Math.pow(Math.max(0,1-Math.abs(Ht(P*13+1.2,L*13-.7,U*13+2.4))),22);if(Xe>.22&&ee<.14){const ue=(Xe-.22)*1.1;R=X.lerp(R,.04,ue),O=X.lerp(O,.28,ue),j=X.lerp(j,.34,ue)}const F=H(Math.floor(P*260),Math.floor(L*260),Math.floor(U*260)),D=Qt(.45,.85,dt)*(F>.965?.36:0),te=Xe>.3?(Xe-.3)*.28:0,_e=(D+te)*ce*(1-Be*.85),le=k>.52;Q=_e*(le?.22:.04),ne=_e*(le?.12:.34),ye=_e*.38,Z=.48+$*.58+ee*.45}else{const xe=Qt(-.36,-.06,$),Ve=X.lerp(.031,.055,xe),Be=X.lerp(.149,.263,xe),it=X.lerp(.29,.459,xe),Xe=Qt(-.085,0,$),F=Math.min(1,Math.max(ae*.92,Xe*.85)),D=Qt(.45,.98,F),te=X.lerp(.11,.22,D),_e=X.lerp(.639,.839,D),le=X.lerp(.62,.769,D);R=X.lerp(Ve,te,F),O=X.lerp(Be,_e,F),j=X.lerp(it,le,F);const ue=F*Qt(.55,.95,k)*.26;Q=ue*.04,ne=ue*.34,ye=ue*.38,Z=.28+F*.06}}m[B]=R*255,m[B+1]=O*255,m[B+2]=j*255,m[B+3]=255,p[B]=Q*255,p[B+1]=ne*255,p[B+2]=ye*255,p[B+3]=255;const pe=Z*255;v[B]=pe,v[B+1]=pe,v[B+2]=pe,v[B+3]=255}}h.getContext("2d").putImageData(f,0,0),u.getContext("2d").putImageData(g,0,0),d.getContext("2d").putImageData(x,0,0);const w=new xn(h);w.colorSpace=jt,w.anisotropy=8;const A=new xn(u);A.colorSpace=jt,A.anisotropy=8;const E=new xn(d);return{map:w,emissiveMap:A,bumpMap:E}}function Cy(o,e=1024,t=512,n=[0,1,0]){const i=new b(n[0],n[1],n[2]).normalize(),s=i.x,r=i.y,a=i.z,l=As(e,t),c=l.getContext("2d"),h=c.createImageData(e,t),u=h.data,d={p1:{lo:.04,hi:.34,col:[1,1,1],k:.92,cyclonic:!0},p2:{lo:-.04,hi:.32,col:[.34,.4,.48],k:.56},p3:{lo:.08,hi:.42,col:[1,1,1],k:.8,clearNorth:!0},p4:{lo:.12,hi:.5,col:[.92,.95,1],k:.4}}[o]||{lo:.1,hi:.4,col:[1,1,1],k:.7},f=d.cyclonic?[{v:new b(-.45,.42,.78).normalize(),spin:2.35,radius:.55},{v:new b(.62,.54,-.57).normalize(),spin:-2.15,radius:.48},{v:new b(.18,-.46,.87).normalize(),spin:2.05,radius:.5},{v:new b(-.74,-.35,-.57).normalize(),spin:-2.25,radius:.52},{v:new b(.78,-.18,.6).normalize(),spin:1.85,radius:.44}]:null,g=new Float32Array(e),x=new Float32Array(e);for(let p=0;p<e;p++){const v=(p+.5)/e*Math.PI*2;g[p]=Math.cos(v),x[p]=Math.sin(v)}for(let p=0;p<t;p++){const v=(p+.5)/t*Math.PI,M=Math.sin(v),_=Math.cos(v);for(let T=0;T<e;T++){const w=-g[T]*M,A=x[T]*M,E=w*s+_*r+A*a;let y=0;if(d.cyclonic&&f){let C=w,L=_,N=A,P=0;for(let O=0;O<f.length;O++){const j=f[O],Q=C*j.v.x+L*j.v.y+N*j.v.z;if(Q>.62){const ne=Math.acos(Math.min(1,Q)),ye=Math.exp(-Math.pow(ne/j.radius,2)*2.6),Z=j.spin*ye*(1-Math.min(1,ne/j.radius)*.4),pe=Math.cos(Z),$=Math.sin(Z),ee=j.v.x,ce=j.v.y,fe=j.v.z,ae=ce*N-fe*L,Se=fe*C-ee*N,V=ee*L-ce*C,Ie=Q;C=C*pe+ae*$+ee*Ie*(1-pe),L=L*pe+Se*$+ce*Ie*(1-pe),N=N*pe+V*$+fe*Ie*(1-pe),P+=ye*.24}}const U=Ht(C*2.2+1.5,L*4.5,N*2.2-.8)*.42,G=Vn(C*3.1+14+U,L*5.6,N*3.1-U,5),B=Ht(C*9.5+3,L*12,N*9.5)*.08,R=G+P*.55+B;y=Qt(d.lo,d.hi,R)*d.k}else{const C=Ht(w*2+4,_*2,A*2)*.35,L=Vn(w*3.2+20+C,_*5,A*3.2-C,5);y=Qt(d.lo,d.hi,L)*d.k,d.clearNorth&&(y*=1-Qt(.78,.9,E))}const S=(p*e+T)*4;u[S]=d.col[0]*255,u[S+1]=d.col[1]*255,u[S+2]=d.col[2]*255,u[S+3]=y*255}}c.putImageData(h,0,0);const m=new xn(l);return m.colorSpace=jt,m.anisotropy=8,m}function Py(o,e=.06){o.onBeforeCompile=t=>{t.uniforms.uSunViewPos=yc.uSunViewPos,t.fragmentShader=`uniform vec3 uSunViewPos;
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 svDelta = uSunViewPos + vViewPosition;
        vec3 sunDirV = length(svDelta) > 0.0001 ? normalize(svDelta) : vec3(0.0, 1.0, 0.0);
        float nightF = smoothstep(0.09, -0.14, dot(normal, sunDirV));
        totalEmissiveRadiance *= mix(${e.toFixed(3)}, 1.0, nightF);`)},o.customProgramCacheKey=()=>`nightLights_${e.toFixed(3)}`}function Ry(){const e=As(128,128),t=e.getContext("2d"),n=t.createImageData(128,128),i=n.data;for(let r=0;r<128;r++){const a=r/128*2-1;for(let l=0;l<128;l++){const c=l/128*2-1,h=Math.hypot(c,a),u=Math.max(0,1-Qt(.18,.98,h)),d=Vn(c*2.8+4.2,a*2.8-1.7,3.1,4)*.5+.5,f=Math.max(0,Math.min(1,u*(.45+.85*d))),g=Math.round(236+19*d),x=(r*128+l)*4;i[x]=g,i[x+1]=Math.min(255,g+4),i[x+2]=255,i[x+3]=Math.round(f*255)}}t.putImageData(n,0,0);const s=new xn(e);return s.needsUpdate=!0,s}function Dy(o,e){const t={uMap:{value:o},uColor:{value:new ie(e)},uOpacity:{value:0},uPointSize:{value:94}},n=new on({uniforms:t,vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1});return n.color=t.uColor.value,Object.defineProperty(n,"opacity",{get:()=>t.uOpacity.value,set:i=>{t.uOpacity.value=i}}),n}function Lu(o,e){return new on({uniforms:{uCloudMap:{value:o},uSunPosition:{value:new b(0,0,0)},uPlanetCenter:{value:new b(0,0,0)},uAmbientColor:{value:new ie(e.ambient)},uSunColor:{value:new ie(e.sunlit)},uHorizonColor:{value:new ie(e.horizon)},uOpacity:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,fog:!1,side:Kt})}function Iy(){const o=new Jt(28e3,48,32),e=new on({uniforms:{uLocalUp:{value:new b(0,1,0)},uSunDir:{value:new b(0,.2,1)},uZenithColor:{value:new ie(1991880)},uMidColor:{value:new ie(5155054)},uHorizonColor:{value:new ie(16760171)},uSunGlowColor:{value:new ie(16769184)},uHorizonDot:{value:-.2},uAtmoOpacity:{value:0},uZenithAlpha:{value:1},uMieG:{value:.78},uMieIntensity:{value:.55}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:In}),t=new ze(o,e);return t.name="Atmospheric_Sky_Scattering_Dome",t.renderOrder=-60,t.frustumCulled=!1,t.visible=!1,t.userData.skipSSAO=!0,t}function Ly(o,e=157.5){const t=o.localRadius,n=new Lt;n.name=`${o.id}_Orbital_Globe`;const i=o.capLocalDir?o.capLocalDir.clone().normalize():new b(0,1,0),s=[i.x,i.y,i.z],r={p4:[2048,1024],p2:[1536,768],p1:[1536,768]}[o.id]||[1024,512],{map:a,emissiveMap:l,bumpMap:c}=Ty(o.id,r[0],r[1],s),h={p1:{ei:.56,rough:.72,metal:.06,bump:1.45,floor:0},p2:{ei:.96,rough:.58,metal:.3,bump:.65,floor:0},p3:{ei:1.2,rough:.85,metal:.02,bump:1.6,floor:0},p4:{ei:2.4,rough:.45,metal:.55,bump:.8,floor:.16}}[o.id],u=new He({map:a,emissiveMap:l,emissive:new ie(1,1,1),emissiveIntensity:h.ei,roughness:h.rough,metalness:h.metal,bumpMap:c,bumpScale:h.bump});Py(u,h.floor);const d=new ze(new Jt(t,128,128),u);d.name=`${o.id}_Orbital_Surface`,n.add(d);const f=o.id==="p1"?[1536,768]:[1024,512],g=Cy(o.id,f[0],f[1],s),x={p1:{ambient:4942728,sunlit:16777215,horizon:10279148},p2:{ambient:860724,sunlit:6205136,horizon:1066082},p3:{ambient:8165566,sunlit:16777215,horizon:16039028},p4:{ambient:6434840,sunlit:16763016,horizon:14446130}}[o.id]||{ambient:6320256,sunlit:16777215,horizon:11188424},m=Lu(g,x),p=new ze(new Jt(t*1.045,128,128),m);p.name=`${o.id}_Low_Cloud_Shell`,p.userData.skipSSAO=!0,n.add(p);const v=Lu(g,x),M=new ze(new Jt(t*1.082,128,128),v);M.name=`${o.id}_High_Cloud_Shell`,M.userData.skipSSAO=!0,n.add(M);const _=new Lt;_.name=`${o.id}_Lower_Cloud_Puffs_Group`,_.visible=!1,n.add(_);const T=460,w=new Float32Array(T*3),A=65/e,E=160/e,y=new rt().setFromUnitVectors(new b(0,1,0),i),S=new b;for(let U=0;U<T;U++){const G=Math.acos(1-H(U,2,17)*.42),B=H(U,9,5)*Math.PI*2,R=A+H(U,4,13)*(E-A),O=t+R;S.set(O*Math.sin(G)*Math.cos(B),O*Math.cos(G),O*Math.sin(G)*Math.sin(B)),S.applyQuaternion(y),w[U*3]=S.x,w[U*3+1]=S.y,w[U*3+2]=S.z}const C=new Et;C.setAttribute("position",new yt(w,3));const L=Dy(Ry(),x.sunlit),N=new hi(C,L);N.name=`${o.id}_Volumetric_Billboard_Clouds`,N.userData.skipSSAO=!0,_.add(N);const P=tf(o,t,o.id==="p4"?1.078:1.095);return n.add(P),{group:n,surfaceMesh:d,upperCloudMesh:M,lowerCloudGroup:_,lowerCloudMesh:p,lowerCloudPuffs:N,cloudDeckPalette:x,atmosphere:P}}function tf(o,e,t=1.045){const n=new Jt(e*t,96,96),i={p1:[6083327,9627391],p2:[2738431,16722581],p3:[7125247,16758876],p4:[9225471,16754784],p5:[4757759,7405536]}[o.id]||[6866175,16755285],s=new on({uniforms:{uColorDay:{value:new ie(i[0])},uColorHorizon:{value:new ie(i[1])},uSunPosition:{value:new b(0,0,0)},uAltitudeFade:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Mn,side:li}),r=new ze(n,s);return r.name=`${o.id}_Fresnel_Atmosphere`,r.userData.skipSSAO=!0,r}function Ny(o,e=1400){const t=o.localRadius,n=1.65,i=o.id==="p4",s=256,r=As(s,s),a=As(s,s),l=r.getContext("2d"),c=a.getContext("2d");l.fillStyle=i?"#2a2c31":"#111821",l.fillRect(0,0,s,s),c.fillStyle="#000000",c.fillRect(0,0,s,s);const h=i?["#ffb050","#ffd890","#ff8a3a","#fff0d0"]:["#00e5ff","#ff2a95","#c8f4ff","#ffaa2b"];for(let M=4;M<s;M+=8)for(let _=3;_<s;_+=6)Math.random()<(i?.55:.42)&&(c.fillStyle=h[Math.random()*h.length|0],c.fillRect(_,M,3,4));const u=new xn(r);u.colorSpace=jt;const d=new xn(a);d.colorSpace=jt;const f=new hn(1,1,1);f.translate(0,.5,0);const g=new He({map:u,emissiveMap:d,emissive:new ie(1,1,1),emissiveIntensity:i?1.6:2,roughness:.42,metalness:.7}),x=new Mt(f,g,e);x.name=`${o.id}_Horizon_Tower_Band`;const m=new Xt,p=new b(0,1,0),v=new b;for(let M=0;M<e;M++){const _=.025+Math.pow(H(M,3,9),.85)*.14,T=H(M,7,1)*Math.PI*2;v.set(Math.sin(_)*Math.cos(T),Math.cos(_),Math.sin(_)*Math.sin(T)),m.position.copy(v).multiplyScalar(t*.9996),m.quaternion.setFromUnitVectors(p,v),m.rotateY(H(M,2,2)*Math.PI);const w=n*(.0024+.0042*H(M,5,5)),A=n*(.0024+.0042*H(M,6,8)),E=n*(.006+.025*Math.pow(H(M,9,4),1.6));m.scale.set(w,E,A),m.updateMatrix(),x.setMatrixAt(M,m.matrix)}return x.instanceMatrix.needsUpdate=!0,x}function Uy(o,e,t,n){o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1),o.updateMatrixWorld(!0);const i=n==="p2",s=new b(0,1,0),r=e/t,a=i?124:152;function l(w,A,E,y=!1){const S=Math.sqrt(w*w+E*E),C=Math.min(1.18,S/(r*.94)),L=Math.atan2(E,w),N=Math.sin(C),P=N*Math.cos(L),U=Math.cos(C),G=N*Math.sin(L);let B=A;if(y){const j=X.smoothstep(S,a*.65,a*1);B=X.lerp(A,i?-36:-18,j)}const R=n==="p3"?14.5:i?16.5:.4,O=Math.max(r*.9,r+B+R);return{px:O*P,py:O*U-r,pz:O*G,nx:P,ny:U,nz:G}}const c=new tt().copy(o.matrixWorld).invert(),h=[],u=new Map;o.traverse(w=>{if(w.isMesh&&w.geometry){const A=new tt().multiplyMatrices(c,w.matrixWorld);h.push({mesh:w,initRootMat:A}),u.set(w.geometry,(u.get(w.geometry)||0)+1)}});for(const{mesh:w,initRootMat:A}of h)w.parent!==o&&o.attach(w),A.decompose(w.position,w.quaternion,w.scale),w.updateMatrix();const d=new b,f=new rt,g=new b,x=new b,m=new rt,p=new b,v=Jd(),M=qc(),_=[];let T=0;for(const{mesh:w,initRootMat:A}of h){if(i){if(/^NC_FarHorizon/.test(w.name)){w.visible=!1;continue}if(/^NC_Canyon_Skyscraper/.test(w.name)&&(d.setFromMatrixPosition(A),Math.hypot(d.x,d.z)>104||d.x<-58)){w.visible=!1;continue}}const E=u.get(w.geometry)||1,y=/Terrain|River|Ground|Forest|Canal/.test(w.name),S=/Citadel|Castle|Fortress|Keep|Senate|Tower|Skyscraper|Bridge|Spire/i.test(w.name);w.castShadow=!y&&S&&T<75,w.castShadow&&T++,w.receiveShadow=y||S;const C=Array.isArray(w.material)?w.material:[w.material];for(const L of C)!L||L.userData?.pbrUpgraded||(L.userData.pbrUpgraded=!0,y&&L.isMeshStandardMaterial?(!L.roughnessMap&&M.roughnessMap&&(L.roughnessMap=M.roughnessMap),!L.bumpMap&&M.bumpMap&&(L.bumpMap=M.bumpMap,L.bumpScale=.04),n==="p3"&&_.push(Yc(L,{mode:"perugius",worldRadius:e*157.5,peakStart:3.6,peakEnd:8.2,shoreBand:.55})),L.needsUpdate=!0):L.isMeshStandardMaterial&&!L.transparent&&!L.map&&v.map&&(L.roughnessMap=v.roughnessMap,L.bumpMap=v.bumpMap,L.bumpScale=.025,L.needsUpdate=!0));if(E===1||y){E>1&&(w.geometry=w.geometry.clone());const L=w.geometry.attributes.position,N=new tt().copy(A).invert();for(let P=0;P<L.count;P++){p.fromBufferAttribute(L,P).applyMatrix4(A);const U=l(p.x,p.y,p.z,y);p.set(U.px,U.py,U.pz).applyMatrix4(N),L.setXYZ(P,p.x,p.y,p.z)}L.needsUpdate=!0,w.geometry.computeVertexNormals(),w.geometry.computeBoundingBox(),w.geometry.computeBoundingSphere()}else{if(A.decompose(d,f,g),i&&/^NC_Canyon_Skyscraper/.test(w.name)){const N=Math.hypot(d.x,d.z),P=1-X.smoothstep(N,95,128)*.46;g.y*=P}const L=l(d.x,d.y,d.z,!1);x.set(L.nx,L.ny,L.nz).normalize(),m.setFromUnitVectors(s,x),w.position.set(L.px,L.py,L.pz),w.quaternion.copy(m).multiply(f),w.scale.copy(g),w.updateMatrix()}}o.scale.setScalar(t),o.position.set(0,e,0),o.updateMatrixWorld(!0),o.userData.splatUniforms=_}const mt=1/3.5,xi=new b(0,1,0);function Nu(o,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,32);i.addColorStop(0,o),i.addColorStop(.45,e),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new xn(t);return s.needsUpdate=!0,s}function nf(o){const e=o.clone().normalize(),t=Math.abs(e.x)<.85?new b(1,0,0):new b(0,0,1),n=new b().crossVectors(e,t).normalize(),i=new b().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Fy(){const o=[],e=new Kn([new b(0,0,0),new b(.05,.35,-.02),new b(-.04,.72,.04),new b(.02,1,-.01)]);o.push(new Jn(e,6,.075,5,!1).toNonIndexed());const t=[[new b(.02,.48,.01),new b(.32,.76,.14)],[new b(-.02,.62,.03),new b(-.28,.92,-.18)],[new b(0,.78,.02),new b(.18,1.12,-.22)],[new b(.02,.56,-.02),new b(-.22,.82,.25)]];for(const[i,s]of t){const r=i.clone().lerp(s,.5).add(new b(0,.06,0)),a=new Kn([i,r,s]);o.push(new Jn(a,4,.026,4,!1).toNonIndexed())}const n=zt(o,!1);return n.computeVertexNormals(),n}function Oy(){const o=[];for(let a=-2;a<=2;a++){const l=new Si(.36,.95,2,3);l.translate(a*.14,.48,Math.sin(a*.9)*.06),l.rotateZ(-a*.22),o.push(l.toNonIndexed())}const e=zt(o,!1);e.computeVertexNormals();const t=[];for(let a=0;a<6;a++){const l=a/6*Math.PI*2,c=a===0?0:.28,h=a===0?1:.55+H(a,3,7)*.45,u=new en(.11,.08,h,6,1);u.translate(Math.cos(l)*c,h*.5,Math.sin(l)*c),u.rotateZ((H(a,2,5)-.5)*.22),t.push(u.toNonIndexed())}const n=zt(t,!1);n.computeVertexNormals();const i=[],s=new en(.32,.4,.28,8);s.translate(0,.14,0),i.push(s.toNonIndexed());for(let a=0;a<10;a++){const l=a/10*Math.PI*2,c=new An(.065,.72,4);c.translate(0,.36,0),c.rotateX(.55),c.rotateY(l),c.translate(Math.cos(l)*.22,.2,Math.sin(l)*.22),i.push(c.toNonIndexed())}const r=zt(i,!1);return r.computeVertexNormals(),{fanGeo:e,tubeGeo:n,anemoneGeo:r}}function By(){const o=[];for(let t=0;t<2;t++){const n=new Si(.24,1,2,8);n.translate(0,.5,0);const i=n.attributes.position;for(let s=0;s<i.count;s++){const r=i.getY(s),a=i.getX(s)+Math.sin(r*Math.PI*3)*.14,l=Math.cos(r*Math.PI*2.5+t*1.57)*.1;i.setXYZ(s,a,r,l)}n.rotateY(t*Math.PI*.5),n.computeVertexNormals(),o.push(n.toNonIndexed())}const e=zt(o,!1);return e.computeVertexNormals(),e}function ky(o,e,t,n){const s=nf(e.capDir),r=new Lt;r.name="Pandora_Biome_AshPeople";const a=($,ee,ce=0)=>{const fe=s.upDir.clone().addScaledVector(s.e1,$).addScaledVector(s.e2,ee).normalize(),ae=t(fe.x,fe.y,fe.z);return{pos:fe.clone().multiplyScalar(o+ae.elev+ce),normal:fe,elev:ae.elev,nation:ae.nation}},l=[];for(let $=0;$<18;$++){const ee=$/18*Math.PI*2+H($,3,9)*.25,ce=[];for(let Se=0;Se<=8;Se++){const V=Se/8,Ie=(.018+V*.16)*.3125,k=Math.sin(V*7+$*1.3)*.018*.3125,dt=Math.cos(ee)*Ie-Math.sin(ee)*k,xe=Math.sin(ee)*Ie+Math.cos(ee)*k;ce.push(a(dt,xe,8e-4).pos)}const fe=new Kn(ce),ae=new Jn(fe,14,(.0014+$%3*5e-4)*mt,4,!1).toNonIndexed();l.push(ae)}const c=new He({color:3871240,emissive:16726792,emissiveIntensity:.42,roughness:.35});c.userData.animatedEmissive=!0,n.push({mat:c,dayColor:5117962,nightColor:16736792,dayEmissive:14166022,nightEmissive:16729608,dayEI:.42,nightEI:2.55,pulsePhase:.4});const h=new ze(zt(l,!1),c);h.name="Pandora_Ash_Lava_Fissures",r.add(h);const u=new He({vertexColors:!0,roughness:.94,metalness:.06}),d=[{lx:-.045*.3125,lz:.032*.3125,rad:.145*mt,h:.175*mt},{lx:.072*.3125,lz:-.048*.3125,rad:.115*mt,h:.135*mt},{lx:-.025*.3125,lz:-.095*.3125,rad:.105*mt,h:.118*mt}],f=[];d.forEach(($,ee)=>{const ce=a($.lx,$.lz,-.002),fe=new en($.rad*.28,$.rad,$.h,16,8,!1);fe.translate(0,$.h*.5,0);const ae=fe.attributes.position,Se=new Float32Array(ae.count*3);for(let k=0;k<ae.count;k++){let dt=ae.getX(k),xe=ae.getY(k);const Ve=ae.getZ(k),Be=Ht(dt*80+ee*3.1,xe*50,Ve*80),it=xe/$.h,Xe=1+.22*Be*(1-it*.4);dt*=Xe;const F=Ve*Xe;it>.92&&Math.hypot(dt,F)<$.rad*.24&&(xe-=$.h*.14),ae.setXYZ(k,dt,xe,F);const D=.1+.07*(1-it)+.04*Math.max(0,Be);Se[k*3]=D,Se[k*3+1]=D*.95,Se[k*3+2]=D*.98}fe.setAttribute("color",new yt(Se,3)),fe.computeVertexNormals();const V=new ze(fe,u);V.position.copy(ce.pos),V.quaternion.setFromUnitVectors(xi,ce.normal),V.name=`Pandora_Ash_Volcano_${ee+1}`,r.add(V);const Ie=new ze(new Us($.rad*.22,12),c);Ie.rotateX(-Math.PI*.5),Ie.position.copy(ce.pos).addScaledVector(ce.normal,$.h*.88),Ie.quaternion.copy(V.quaternion).multiply(new rt().setFromAxisAngle(new b(1,0,0),-Math.PI*.5)),r.add(Ie),f.push({basePos:ce.pos.clone().addScaledVector(ce.normal,$.h*.94),normal:ce.normal.clone(),maxH:(.14+ee*.03)*mt,phase:ee*2.1})});const g=36,x=f.length*g,m=new Float32Array(x*3),p=new Et;p.setAttribute("position",new yt(m,3));const v=new ci({size:13.5,map:Nu("rgba(52, 48, 50, 0.72)","rgba(28, 25, 26, 0.28)"),color:3880502,transparent:!0,opacity:.62,depthWrite:!1,sizeAttenuation:!0}),M=new hi(p,v);M.frustumCulled=!1,M.name="Pandora_Ash_Volcano_Smoke",r.add(M);const _=1400,T=new Float32Array(_*3),w=[];for(let $=0;$<_;$++){const ee=H($,3,19)*Math.PI*2,ce=Math.sqrt(H($,7,11))*.24*.3125,fe=a(Math.cos(ee)*ce,Math.sin(ee)*ce,(.006+H($,5,2)*.22)*mt);T[$*3]=fe.pos.x,T[$*3+1]=fe.pos.y,T[$*3+2]=fe.pos.z,w.push({dir:fe.normal,baseAlt:fe.pos.length(),phase:H($,9,4)*Math.PI*2,speed:.04+H($,2,8)*.06})}const A=new Et;A.setAttribute("position",new yt(T,3));const E=new ci({size:.58,map:Nu("rgba(160, 150, 145, 0.85)","rgba(90, 80, 75, 0.25)"),color:9471360,transparent:!0,opacity:.52,depthWrite:!1,sizeAttenuation:!0}),y=new hi(A,E);y.frustumCulled=!1,y.name="Pandora_Ash_Floating_Cinders",r.add(y);const S=440,C=Fy(),L=new He({color:1775896,roughness:.94,metalness:.05}),N=[],P=new Xt;for(let $=0;$<S*2&&N.length<S;$++){const ee=H($,4,17)*Math.PI*2,ce=.014+Math.sqrt(H($,8,3))*.1,fe=a(Math.cos(ee)*ce,Math.sin(ee)*ce,-5e-4);if(fe.nation!=="ash")continue;const ae=(.018+H($,2,11)*.028)*mt;P.position.copy(fe.pos),P.quaternion.setFromUnitVectors(xi,fe.normal),P.rotateY(H($,6,9)*Math.PI*2),P.rotateX((H($,1,5)-.5)*.22),P.scale.set(ae,ae,ae),P.updateMatrix(),N.push(P.matrix.clone())}const U=new Mt(C,L,Math.max(1,N.length));U.name="Pandora_Ash_Charred_Trees",U.frustumCulled=!1,N.forEach(($,ee)=>U.setMatrixAt(ee,$)),U.instanceMatrix.needsUpdate=!0,r.add(U);const G=new He({color:12167830,roughness:.78}),B=new He({color:2366745,roughness:.92}),R=new He({color:16755256,emissive:16734740,emissiveIntensity:1.15,roughness:.35});R.userData.animatedEmissive=!0,n.push({mat:R,dayColor:16755256,nightColor:16768376,dayEmissive:16734740,nightEmissive:16738328,dayEI:.95,nightEI:2.65,pulsePhase:1.1});const O=[],j=[],Q=[];for(let $=0;$<6;$++){const ee=$/6*Math.PI*2+.3,ce=.022*.3125,fe=a(Math.cos(ee)*ce,Math.sin(ee)*ce,2e-4),ae=new rt().setFromUnitVectors(xi,fe.normal);for(let V=-1;V<=1;V+=2){const Ie=new Kn([new b(V*.012*mt,0,0),new b(V*.018*mt,.018*mt,.002*mt),new b(0,.032*mt,0)]),k=new Jn(Ie,8,.0018*mt,5,!1).toNonIndexed();k.applyQuaternion(new rt().setFromAxisAngle(xi,ee)),k.applyQuaternion(ae),k.translate(fe.pos.x,fe.pos.y,fe.pos.z),j.push(k)}const Se=a(Math.cos(ee+.25)*.011*.3125,Math.sin(ee+.25)*.011*.3125,5e-4);Q.push(Se)}for(let $=0;$<16;$++){const ee=$/16*Math.PI*2+H($,2,7)*.18,ce=(.018+$%3*.008)*.3125,fe=a(Math.cos(ee)*ce,Math.sin(ee)*ce,0),ae=new An(.0075*mt,.013*mt,6);ae.translate(0,.006*mt,0);const Se=ae.toNonIndexed();Se.rotateY(H($,4,1)*Math.PI),Se.applyQuaternion(new rt().setFromUnitVectors(xi,fe.normal)),Se.translate(fe.pos.x,fe.pos.y,fe.pos.z),O.push(Se)}const ne=new ze(zt(j,!1),G);ne.name="Pandora_Ash_Giant_Bone_Totems";const ye=new ze(zt(O,!1),B);ye.name="Pandora_Ash_Tribal_Huts",r.add(ne,ye);const Z=[];Q.forEach($=>{const ee=new An(.003*mt,.009*mt,6).toNonIndexed();ee.translate(0,.004*mt,0),ee.applyQuaternion(new rt().setFromUnitVectors(xi,$.normal)),ee.translate($.pos.x,$.pos.y,$.pos.z),Z.push(ee)});const pe=new ze(zt(Z,!1),R);return pe.name="Pandora_Ash_Bonfires",r.add(pe),{group:r,update($,ee){const ce=p.attributes.position;f.forEach((ae,Se)=>{for(let V=0;V<g;V++){const Ie=Se*g+V,k=($*.24+ae.phase+V/g)%1,dt=k*ae.maxH,xe=k*.025*mt;ce.setXYZ(Ie,ae.basePos.x+ae.normal.x*dt+Math.sin(Ie+$*.5)*xe,ae.basePos.y+ae.normal.y*dt+Math.cos(Ie)*xe*.5,ae.basePos.z+ae.normal.z*dt+Math.cos(Ie+$*.4)*xe)}}),ce.needsUpdate=!0,v.color.setRGB(X.lerp(.24,.42,ee),X.lerp(.22,.16,ee),X.lerp(.23,.14,ee));const fe=A.attributes.position;for(let ae=0;ae<_;ae++){const Se=w[ae],V=Math.sin($*Se.speed+Se.phase)*.004,Ie=Se.baseAlt+Math.cos($*.4+Se.phase)*.003;fe.setXYZ(ae,Se.dir.x*Ie+V,Se.dir.y*Ie,Se.dir.z*Ie-V)}fe.needsUpdate=!0}}}function zy(o,e,t,n){const i=.29411764705882354,s=nf(e.capDir),r=new Lt;r.name="Pandora_Biome_MetkayinaReef";const a=(R,O,j=0)=>{const Q=s.upDir.clone().addScaledVector(s.e1,R).addScaledVector(s.e2,O).normalize();return{pos:Q.clone().multiplyScalar(o+j),normal:Q}},l=(R,O,j=0)=>{const Q=s.upDir.clone().addScaledVector(s.e1,R).addScaledVector(s.e2,O).normalize(),ne=t(Q.x,Q.y,Q.z);return{pos:Q.clone().multiplyScalar(o+ne.elev+j),normal:Q,elev:ne.elev,nation:ne.nation}},c=new He({color:6045222,roughness:.85}),h=new He({color:7758908,roughness:.9}),u=new He({color:16764006,emissive:16746532,emissiveIntensity:.55,roughness:.35});u.userData.animatedEmissive=!0,n.push({mat:u,dayColor:16755268,nightColor:16769160,dayEmissive:16742178,nightEmissive:16747560,dayEI:.45,nightEI:2.55,pulsePhase:1.7});const d=[],f=[],g=[],x=[],m=[];for(let R=0;R<18;R++){const O=(R<6?.024:.052+R%3*.012)*i,j=(R<6?R/6*Math.PI*2:(R-6)/12*Math.PI*2)+H(R,4,3)*.25,Q=Math.cos(j)*O,ne=Math.sin(j)*O,ye=a(Q,ne,5e-4),Z=new rt().setFromUnitVectors(xi,ye.normal).multiply(new rt().setFromAxisAngle(xi,j+H(R,2,7))),pe=(.018+H(R,5,1)*.008)*mt,$=pe*1.25;m.push({pos:ye.pos.clone(),normal:ye.normal.clone(),qOri:Z});const ee=new hn(pe,.0016*mt,$).toNonIndexed();ee.translate(0,.0012*mt,0),ee.applyQuaternion(Z),ee.translate(ye.pos.x,ye.pos.y,ye.pos.z),d.push(ee);for(let Se=-1;Se<=1;Se+=2){const V=new Kn([new b(Se*pe*.48,-.0015*mt,-$*.72),new b(Se*pe*.56,8e-4*mt,0),new b(Se*pe*.48,-.0015*mt,$*.72)]),Ie=new Jn(V,8,.0014*mt,5,!1).toNonIndexed();Ie.applyQuaternion(Z),Ie.translate(ye.pos.x,ye.pos.y,ye.pos.z),d.push(Ie)}const ce=pe*.65,fe=new en(.001,pe*.56,ce,8,1);fe.scale(.95,1,1.25),fe.translate(0,ce*.5+.0018*mt,0);const ae=fe.toNonIndexed();ae.applyQuaternion(Z),ae.translate(ye.pos.x,ye.pos.y,ye.pos.z),f.push(ae);for(let Se=0;Se<(R%2===0?2:1);Se++){const V=Se===0?1:-1,Ie=new en(4e-4*mt,6e-4*mt,.007*mt,5).toNonIndexed();Ie.translate(V*pe*.45,.004*mt,$*.52),Ie.applyQuaternion(Z),Ie.translate(ye.pos.x,ye.pos.y,ye.pos.z),d.push(Ie);const k=new Jt(.0014*mt,6,5).toNonIndexed();k.translate(V*pe*.45,.008*mt,$*.52),k.applyQuaternion(Z),k.translate(ye.pos.x,ye.pos.y,ye.pos.z),g.push(k)}R<14&&x.push({basePos:ye.pos.clone().add(new b(pe*.72,-2e-4*mt,0).applyQuaternion(Z)),normal:ye.normal.clone(),qOri:Z,phase:R*.9})}for(let R=0;R<m.length;R++){const O=m[R],j=R<5?R+1:R===5?0:R<17?R+1:6,Q=m[j],ne=O.pos.distanceTo(Q.pos);if(ne>.005*mt&&ne<.22*mt){const ye=O.pos.clone().add(Q.pos).multiplyScalar(.5).normalize().multiplyScalar(o+9e-4),Z=new hn(.0045*mt,.0011*mt,ne).toNonIndexed(),pe=Q.pos.clone().sub(O.pos).normalize(),$=ye.clone().normalize(),ee=new b().crossVectors($,pe).normalize();pe.crossVectors(ee,$).normalize();const ce=new tt().makeBasis(ee,$,pe);ce.setPosition(ye),Z.applyMatrix4(ce),d.push(Z)}}const p=new ze(zt(d,!1),c);p.name="Pandora_Metkayina_Rafts_And_Walkways";const v=new ze(zt(f,!1),h);v.name="Pandora_Metkayina_Woven_Huts";const M=new ze(zt(g,!1),u);M.name="Pandora_Metkayina_Torches",r.add(p,v,M);const _=new An(.0022*mt,.022*mt,6);_.rotateX(Math.PI*.5),_.scale(1,.45,1);const T=new Mt(_,c,x.length);T.name="Pandora_Metkayina_Moored_Canoes",r.add(T);const{fanGeo:w,tubeGeo:A,anemoneGeo:E}=Oy(),y=[{name:"Pandora_Reef_Corals_CyanFans",geo:w,dayCol:2517860,nightCol:62975,nightEm:65512,matrices:[]},{name:"Pandora_Reef_Corals_MagentaTubes",geo:A,dayCol:9192546,nightCol:16725168,nightEm:16720544,matrices:[]},{name:"Pandora_Reef_Corals_CoralAnemones",geo:E,dayCol:10379322,nightCol:16742436,nightEm:16736792,matrices:[]}],S=new Xt;for(let R=0;R<1050;R++){const O=H(R,3,19)*Math.PI*2,j=Math.sqrt(H(R,7,13))*.165*i,Q=l(Math.cos(O)*j,Math.sin(O)*j,0);if(Q.nation!=="water"||Q.elev>=-.002)continue;const ne=(.009+H(R,5,11)*.016)*mt;S.position.copy(Q.pos),S.quaternion.setFromUnitVectors(xi,Q.normal),S.rotateY(H(R,2,7)*Math.PI*2),S.scale.set(ne,ne,ne),S.updateMatrix(),y[R%3].matrices.push(S.matrix.clone())}y.forEach((R,O)=>{if(R.matrices.length===0)return;const j=new He({color:R.dayCol,emissive:R.nightEm,emissiveIntensity:0,roughness:.55,side:Kt});j.userData.animatedEmissive=!0,n.push({mat:j,dayColor:R.dayCol,nightColor:R.nightCol,dayEmissive:1057304,nightEmissive:R.nightEm,dayEI:0,nightEI:2.15,pulsePhase:O*1.4});const Q=new Mt(R.geo,j,R.matrices.length);Q.name=R.name,R.matrices.forEach((ne,ye)=>Q.setMatrixAt(ye,ne)),Q.instanceMatrix.needsUpdate=!0,r.add(Q)});const C=[];for(let R=0;R<720;R++){const O=H(R,11,5)*Math.PI*2,j=Math.sqrt(H(R,4,17))*.155*i,Q=l(Math.cos(O)*j,Math.sin(O)*j,0);if(Q.nation!=="water"||Q.elev>=-.014)continue;const ne=Math.abs(Q.elev),ye=Math.min(ne*.85,(.04+H(R,9,2)*.06)*mt),Z=(.012+H(R,6,8)*.012)*mt;S.position.copy(Q.pos),S.quaternion.setFromUnitVectors(xi,Q.normal),S.rotateY(H(R,1,3)*Math.PI*2),S.scale.set(Z,ye,Z),S.updateMatrix(),C.push(S.matrix.clone())}const L={uTime:{value:0}},N=new He({color:1730632,emissive:55450,emissiveIntensity:0,roughness:.55,side:Kt});if(N.userData.animatedEmissive=!0,N.onBeforeCompile=R=>{R.uniforms.uTime=L.uTime,R.vertexShader=`uniform float uTime;
`+R.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float swayAmp = position.y * 0.14;
        transformed.x += sin(uTime * 1.45 + position.y * 6.0) * swayAmp;
        transformed.z += cos(uTime * 1.2 + position.y * 5.0) * swayAmp;`)},n.push({mat:N,dayColor:1730632,nightColor:541256,dayEmissive:798238,nightEmissive:57512,dayEI:0,nightEI:1.05}),C.length>0){const R=new Mt(By(),N,C.length);R.name="Pandora_Reef_Giant_Kelp",C.forEach((O,j)=>R.setMatrixAt(j,O)),R.instanceMatrix.needsUpdate=!0,r.add(R)}const P=[];for(let R=0;R<32;R++){const O=H(R,8,21)*Math.PI*2,j=Math.sqrt(H(R,2,13))*.145*i,Q=a(Math.cos(O)*j,Math.sin(O)*j,-.001),ne=.095,ye=new en(.008*mt,.028*mt,ne,8,1,!0);ye.translate(0,-ne*.5,0);const Z=ye.toNonIndexed(),pe=new rt().setFromUnitVectors(xi,Q.normal),$=new rt().setFromEuler(new jn(.18,H(R,3,5)*6.28,.12));Z.applyQuaternion(pe.multiply($)),Z.translate(Q.pos.x,Q.pos.y,Q.pos.z),P.push(Z)}const U=new dn({color:new ie(.32,.95,1),transparent:!0,opacity:0,depthWrite:!1,blending:Mn,side:Kt}),G=new ze(zt(P,!1),U);G.name="Pandora_Reef_Underwater_Caustics",G.visible=!1,r.add(G);const B=new Xt;return{group:r,update(R,O,j){L.uTime.value=R;for(let Q=0;Q<x.length;Q++){const ne=x[Q],ye=Math.sin(R*2.1+ne.phase)*45e-5*mt,Z=Math.sin(R*1.6+ne.phase)*.06;B.position.copy(ne.basePos).addScaledVector(ne.normal,ye),B.quaternion.copy(ne.qOri),B.rotateZ(Z),B.scale.set(1,1,1),B.updateMatrix(),T.setMatrixAt(Q,B.matrix)}if(T.instanceMatrix.needsUpdate=!0,j>.01){const Q=.78+.22*Math.sin(R*2.4),ne=X.lerp(.28,.08,O);U.opacity=j*ne*Q,G.visible=U.opacity>.005}else G.visible=!1}}}const Te=1/3.5,wn=new b(0,1,0),Kc=new rt().setFromUnitVectors(wn,new b(0,Math.cos(X.degToRad(68)),Math.sin(X.degToRad(68))).normalize()),Zc=Ra([0,Math.cos(X.degToRad(68)),Math.sin(X.degToRad(68))]),vt=1/3.2,ma=[{id:"valley_lake",dir:new b(-.08,.992,.095).normalize(),angRad:.024,waterElev:.0026},{id:"east_lake",dir:new b(.42,.78,.46).normalize(),angRad:.025,waterElev:.0028},{id:"west_lake",dir:new b(-.56,.62,-.55).normalize(),angRad:.024,waterElev:.0027},{id:"souls_lake",dir:new b(.36,-.12,-.92).normalize(),angRad:.026,waterElev:.0028},{id:"mush_lake",dir:new b(-.24,-.78,.58).normalize(),angRad:.024,waterElev:.0027}],yl=new b,Yr=new b;function Gy(o,e,t,n=0){const i=Math.sin(e),s=i*Math.cos(t),r=Math.cos(e),a=i*Math.sin(t),l=o+n;return{pos:new b(l*s,l*r,l*a),normal:new b(s,r,a)}}function si(o,e,t,n=Kc,i=Zc,s=4){yl.set(o,e,t).normalize(),Yr.copy(yl).applyQuaternion(n).normalize();const r=Yr.x,a=Yr.y,l=Yr.z,{cont:c,ridge:h,highlandRidge:u,craterDepression:d,forestFactor:f,waterFactor:g,ashFactor:x,reefFactor:m,borderMountain:p,forestClump:v,nation:M}=jc(r,a,l,i,s);let _=0,T=0;if(M==="forest"&&f>.55)for(let E=0;E<ma.length;E++){const y=ma[E],S=yl.dot(y.dir);if(S>.992){const C=Math.acos(X.clamp(S,-1,1));if(C<y.angRad){const L=1-C/y.angRad;_=Math.max(_,L*L*(3-2*L)),T=y.waterElev}}}let w=0,A="ocean";if(c<=0){const E=X.smoothstep(c,-.34,-.02),y=Ht(r*19,a*19,l*19)*.008,S=-.11*(.45+.55*Math.max(.45,m));w=X.lerp(S,-.0012,E)+y*(1-E*.5),m>.25&&c>-.16&&(w=X.lerp(w,-.022-(1-E)*.085,.65)),A=c>-.16||m>.25?"reef":"ocean"}else{const E=Ht(r*9+1.2,a*9,l*9)*.12,y=Ht(r*9,a*9+2.4,l*9)*.12,S=Vn((r+E)*14+3.1,a*14-1.4,(l+y)*14+2.7,4),C=Math.abs(Ht(r*36,a*36,l*36))*.0025,L=X.smoothstep(c,0,.14),N=X.smoothstep(u,.025,.22)*.015,P=p*(.014+Math.max(0,h)*.012),U=x*(.0065+Math.pow(Math.max(0,h),1.8)*.013);w=Math.min(.068,(L*.0018+Math.max(0,S*.52+.34)*.0072*L+C*L+N+P+U-d)*1.45),_>.01&&(w=X.lerp(w,T-.0038,_)),w=Math.max(4e-4,w),M==="ash"?A="ash":M==="water"?A="atoll_island":_>.45?A="lake":u>.036||p>.45?A="canyon":A="forest"}return{cont:c,ridge:h,highlandRidge:u,forestFactor:f,waterFactor:g,ashFactor:x,reefFactor:m,borderMountain:p,forestClump:v,lakeBlend:_,lakeWaterElev:T,elev:w,biome:A,nation:M,sx:r,sy:a,sz:l}}function jr(o,e,t,n=0,i=null){const s=i?.qCap||Kc,r=i?.sphereLandmarks||Zc;return si(o,e,t,s,r,3).elev}function Ti(o){const e=o.clone().normalize(),t=Math.abs(e.x)<.85?new b(1,0,0):new b(0,0,1),n=new b().crossVectors(e,t).normalize(),i=new b().crossVectors(e,n).normalize();return{upDir:e,e1:n,e2:i}}function Ls(o,e,t,n,i,s,r){const a=e.upDir.clone().addScaledVector(e.e1,t).addScaledVector(e.e2,n).normalize(),l=si(a.x,a.y,a.z,s,r,3).elev;return{pos:a.clone().multiplyScalar(o+l+i),normal:a,elev:l}}function Hy(o,e=null){const t=e?.qCap||Kc,n=e?.sphereLandmarks||Zc,i=[{anchor:new b(0,1,0),span:.24,angle:.55,amp:.045,steps:42},{anchor:new b(.14,.985,.09).normalize(),span:.2,angle:-1.1,amp:.038,steps:32},{anchor:bt[2].capDir.clone(),span:.24,angle:.8,amp:.038,steps:36},{anchor:bt[3].capDir.clone(),span:.24,angle:2.1,amp:.04,steps:36},{anchor:bt[4].capDir.clone(),span:.2,angle:-.7,amp:.032,steps:32},{anchor:new b(.48,.58,-.65).normalize(),span:.22,angle:1.4,amp:.036,steps:32},{anchor:new b(-.46,.72,-.52).normalize(),span:.22,angle:-1.6,amp:.036,steps:32}],s=[];for(const r of i){const a=Ti(r.anchor),l=Math.cos(r.angle),c=Math.sin(r.angle),h=[];for(let u=0;u<=r.steps;u++){const d=u/r.steps,f=(d-.5)*r.span,g=Math.sin(d*Math.PI*2.4)*r.amp,x=f*l-g*c,m=f*c+g*l,p=a.upDir.clone().addScaledVector(a.e1,x).addScaledVector(a.e2,m).normalize(),v=si(p.x,p.y,p.z,t,n,3);if(v.nation!=="forest"||v.cont<=.005){if(h.length>=6)break;continue}h.push({theta:Math.acos(X.clamp(p.y,-1,1)),phi:Math.atan2(p.z,p.x),pos:p.clone().multiplyScalar(o+v.elev+55e-5),normal:p,elev:v.elev})}h.length>=6&&s.push(h)}return s}function Ns(o,e=1){const t=o.attributes.normal;if(!t)return o;for(let n=0;n<t.count;n++){const i=t.getX(n),s=t.getY(n),r=t.getZ(n),a=Math.hypot(i,s,r);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,s/a,r/a)}return t.needsUpdate=!0,o}function qi(o,e){const t=o.index?o.toNonIndexed():o,n=new ie(e),i=t.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new yt(s,3)),t}function Vy(){const o=[],e=new en(.032,.14,1,6,1);e.translate(0,.5,0),o.push(qi(e,4600354));const t=[{y:.44,rad:.34,h:.14,col:1793067},{y:.62,rad:.3,h:.13,col:2254896},{y:.78,rad:.24,h:.12,col:2782774},{y:.93,rad:.16,h:.11,col:3506749}];for(const i of t){const s=new An(i.rad,i.h,7);s.translate(0,i.y,0),o.push(qi(s,i.col))}const n=zt(o,!1);return n.computeVertexNormals(),Ns(n,1)}function Wy(){const o=[],e=new Kn([new b(0,0,0),new b(.08,.32,.04),new b(-.05,.68,-.05),new b(.03,.96,.02)]);o.push(qi(new Jn(e,6,.068,5,!1),4140576));for(let i=0;i<4;i++){const s=i/4*Math.PI*2+.4,r=new Kn([new b(Math.cos(s)*.04,.34,Math.sin(s)*.04),new b(Math.cos(s)*.18,.22,Math.sin(s)*.18),new b(Math.cos(s)*.26,-.02,Math.sin(s)*.26)]);o.push(qi(new Jn(r,4,.028,4,!1),3680284))}const t=new Jt(.42,8,5);t.scale(1.15,.48,1.15),t.translate(.03,.94,.02),o.push(qi(t,2517550));const n=zt(o,!1);return n.computeVertexNormals(),Ns(n,1)}function Xy(){const o=[],e=new Kn([new b(0,0,0),new b(.06,.38,.03),new b(.14,.78,-.02),new b(.18,1,0)]);o.push(qi(new Jn(e,6,.052,5,!1),4930344));for(let n=0;n<6;n++){const i=n/6*Math.PI*2,s=new Si(.24,.65,1,2);s.translate(0,.32,0),s.rotateX(1.08),s.rotateY(i),s.translate(.18,.96,0),o.push(qi(s,3045940))}const t=zt(o,!1);return t.computeVertexNormals(),Ns(t,1)}function qy(){const o=[];for(let t=0;t<6;t++){const n=t/6*Math.PI*2,i=new Si(.42,.65,1,2);i.translate(0,.32,0),i.rotateX(.92+t%2*.25),i.rotateY(n),o.push(i.toNonIndexed())}const e=zt(o,!1);return e.computeVertexNormals(),Ns(e,1)}function Yy(){const o=[],e=new vo(.48,0);e.scale(1.2,.65,1),e.translate(0,.22,0),o.push(qi(e,3885110));const t=new vo(.32,0);t.scale(1,.72,1.1),t.translate(.38,.14,.24),o.push(qi(t,2774062));const n=zt(o,!1);return n.computeVertexNormals(),n}function jy(){const o=[];for(let t=0;t<5;t++){const n=t/5*Math.PI*2,i=new Si(.32,1,2,3),s=i.attributes.position;for(let r=0;r<s.count;r++){const a=X.clamp(s.getY(r)+.5,0,1),l=s.getX(r)*(1-Math.pow(a,1.4)*.85),c=-a*a*.38;s.setXYZ(r,l,a*.52,c+a*.75)}i.rotateX(.45),i.rotateY(n),i.computeVertexNormals(),o.push(i.toNonIndexed())}const e=zt(o,!1);return e.computeVertexNormals(),Ns(e,1)}function sf(){const o=[];for(let t=0;t<5;t++){const n=new An(.24,.72,4);n.translate(0,.36,0),n.rotateX(.85),n.rotateY(t/5*Math.PI*2),o.push(n.toNonIndexed())}const e=zt(o,!1);return e.computeVertexNormals(),e}function Ky(){const o=[],e=new Jt(1,10,6,0,Math.PI*2,0,Math.PI*.56);e.scale(1,.42,1),e.translate(0,.9,0),o.push(e.toNonIndexed());const t=new en(.14,.25,.94,6,1);t.translate(0,.47,0),o.push(t.toNonIndexed());const n=zt(o,!1);return n.computeVertexNormals(),n}function of(){const o=new Jt(1,10,5,0,Math.PI*2,0,Math.PI*.52);o.scale(1.05,.28,1.05),o.computeVertexNormals(),Ns(o,1);const e=new An(.96,.18,10,1,!0);return e.rotateX(Math.PI),e.translate(0,-.02,0),e.computeVertexNormals(),Ns(e,-1),{outer:o,under:e}}function Zy(o,e,t,n){const i=new kc(1,2),s=i.attributes.position,r=s.count,a=new Float32Array(r*3),l=new ie(2055213),c=new ie(2783806),h=new ie(3817286),u=new ie(1974824),d=new ie;for(let f=0;f<r;f++){let g=s.getX(f),x=s.getY(f),m=s.getZ(f);const p=Ht(g*2.7+o*3.1,x*2.4-o,m*2.7+o*1.9),v=Ht(g*5.5+o*7.3,x*4.5,m*5.5);if(x>.15){const M=.25+(x-.15)*.22+.08*p,_=1+.18*p;g*=e*_,m*=t*_,x=n*M,d.copy(l).lerp(c,Math.max(0,v)*.65)}else{const M=Math.min(1,(.15-x)/1.15),_=Math.pow(1-M*.86,1.25),T=1+.34*p+.16*v;g*=e*_*T,m*=t*_*T,x=-n*M*(.85+.25*Math.abs(p)),d.copy(h).lerp(u,M*.72+Math.max(0,-p)*.28)}s.setXYZ(f,g,x,m),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}return i.setAttribute("color",new yt(a,3)),i.computeVertexNormals(),i}function $c(o,e,t,n,i,s,r,a,l,c,h){const u=Ls(o,e,t,n,-.0025*Te,c,h).pos,d=Ls(o,e,i,s,-.0025*Te,c,h).pos,f=u.clone().add(d).multiplyScalar(.5).normalize(),g=u.clone().lerp(d,.26).normalize().multiplyScalar(o+r*.74),x=f.clone().multiplyScalar(o+r),m=u.clone().lerp(d,.74).normalize().multiplyScalar(o+r*.76),p=new Kn([u,g,x,m,d]),v=new Jn(p,24,a,8,!1),M=v.attributes.position,_=v.attributes.normal,T=new Float32Array(M.count*3),w=new ie(3290942),A=new ie(2316332),E=new ie(3700796),y=new b,S=new b,C=new ie;for(let L=0;L<M.count;L++){y.fromBufferAttribute(M,L),S.fromBufferAttribute(_,L);const N=Ht(y.x*220+l*3.7,y.y*220,y.z*220-l),P=Ht(y.x*520,y.y*520,y.z*520),U=y.clone().normalize(),G=Math.max(0,S.dot(U));y.addScaledVector(S,a*(.36*N+.16*P)),M.setXYZ(L,y.x,y.y,y.z),C.copy(w).lerp(A,Math.pow(G,1.25)),G>.45&&P>.2&&C.lerp(E,.48),T[L*3]=C.r,T[L*3+1]=C.g,T[L*3+2]=C.b}return v.setAttribute("color",new yt(T,3)),v.computeVertexNormals(),{geo:v,curve:p,apex:x}}function $y(o){const e=new en(.12,1,1,8,6);e.translate(0,.5,0);const t=e.attributes.position,n=new Float32Array(t.count*3),i=new ie(2764600),s=new ie(2381356),r=new ie(3568190),a=new ie;for(let l=0;l<t.count;l++){let c=t.getX(l);const h=t.getY(l);let u=t.getZ(l);const d=Ht(c*3.8+o*2.1,h*4.5,u*3.8-o),f=1+.35*d;c*=f,u*=f,t.setXYZ(l,c,h,u),a.copy(i).lerp(s,X.smoothstep(h,.22,.72)),h>.72&&d>.1&&a.lerp(r,.45),n[l*3]=a.r,n[l*3+1]=a.g,n[l*3+2]=a.b}return e.setAttribute("color",new yt(n,3)),e.computeVertexNormals(),e}function Qy(o,e){const t=[],n=[],i=new b,s=new b,r=new b;o.forEach((f,g)=>{const x=f.length,m=e[g]||.008*Te,p=[],v=[],M=[];for(let T=0;T<x;T++){const w=f[T],A=f[Math.max(0,T-1)],E=f[Math.min(x-1,T+1)];i.copy(E.pos).sub(A.pos).normalize(),r.copy(w.normal),s.crossVectors(i,r).normalize();const y=1+.22*Math.sin(T*.45+g),S=m*y,C=S*.24,L=w.pos.clone().addScaledVector(s,-S),N=w.pos.clone().addScaledVector(s,S),P=w.pos.clone().addScaledVector(s,-(S+C)).addScaledVector(r,14e-5),U=w.pos.clone().addScaledVector(s,S+C).addScaledVector(r,14e-5);p.push(L.x,L.y,L.z,N.x,N.y,N.z),v.push(P.x,P.y,P.z,L.x,L.y,L.z),M.push(N.x,N.y,N.z,U.x,U.y,U.z)}const _=T=>{const w=[];for(let E=0;E<x-1;E++){const y=E*2,S=y+1,C=y+2,L=y+3;w.push(y,S,C,S,L,C)}const A=new Et;return A.setAttribute("position",new Vt(T,3)),A.setIndex(w),A.computeVertexNormals(),A.toNonIndexed()};t.push(_(p)),n.push(_(v),_(M))});const a=zt(t,!1),l=zt(n,!1),c=new He({color:953508,emissive:35e3,emissiveIntensity:0,roughness:.1,metalness:.55,transparent:!0,opacity:.9,depthWrite:!1}),h=new He({color:1994328,emissive:62975,emissiveIntensity:0,roughness:.4,transparent:!0,opacity:.88,depthWrite:!1}),u=new ze(a,c);u.name="Pandora_Global_Rivers_Water";const d=new ze(l,h);return d.name="Pandora_Global_Rivers_Banks",{waterMesh:u,bankMesh:d,waterMat:c,bankMat:h}}function Jy(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512),i=n.data;for(let r=0;r<512;r++)for(let a=0;a<512;a++){const l=Ht(a*.18,r*.18,2.3)*.5+.5,c=H(a,r,37),h=Math.floor(X.clamp((.76+.24*l+.16*(c-.5))*255,130,255)),u=(r*512+a)*4;i[u]=h,i[u+1]=h,i[u+2]=h,i[u+3]=255}t.putImageData(n,0,0);const s=new xn(e);return s.colorSpace=jt,s.wrapS=Xn,s.wrapT=Xn,s.repeat.set(42,21),s}function eM(o,e){const i=document.createElement("canvas");i.width=1024,i.height=512;const s=i.getContext("2d"),r=s.createImageData(1024,512),a=r.data,l=bt[3].capDir,c=bt[4].capDir,h=new b;for(let d=0;d<512;d++){const f=(d+.5)/512*Math.PI,g=Math.sin(f),x=Math.cos(f);for(let m=0;m<1024;m++){const p=(m+.5)/1024*Math.PI*2,v=-Math.cos(p)*g,M=Math.sin(p)*g;h.set(v,x,M).applyQuaternion(o);const{cont:_,ashFactor:T,reefFactor:w,nation:A,borderMountain:E}=jc(h.x,h.y,h.z,e,4);let y=0,S=0,C=0;if(A==="ash"&&_>0){const N=Math.pow(Math.max(0,1-Math.abs(Ht(v*18+4.1,x*18,M*18-2.3))),14);y=N*T*.92,S=N*T*.24,C=N*T*.03}else if(A==="forest"&&_>0){let N=1-Math.abs(Ht(v*24+1,x*24,M*24));N=Math.pow(Math.max(0,N),18);const P=H(Math.floor(v*360),Math.floor(x*360),Math.floor(M*360))>.986?.55:0,U=Math.min(.68,N*.58+P)*(1-Math.min(.9,E));Ht(v*5+9,x*5,M*5)>.1?(y=U*.06,S=U*.78,C=U*.85):(y=U*.58,S=U*.18,C=U*.85);const B=Math.acos(X.clamp(v*l.x+x*l.y+M*l.z,-1,1));if(B<.032){const O=Math.pow(1-B/.032,1.6);y=Math.min(1,y+O*.78),S=Math.min(1,S+O*.38),C=Math.min(1,C+O*.92)}const R=Math.acos(X.clamp(v*c.x+x*c.y+M*c.z,-1,1));if(R<.032){const O=Math.pow(1-R/.032,1.7);y=Math.min(1,y+O*.85),S=Math.min(1,S+O*.22),C=Math.min(1,C+O*.72)}}else if(_<=0){const N=Math.max(X.smoothstep(_,-.11,-.002)*.55,w*.58)*.58;y=N*.05,S=N*.75,C=N*.85}const L=(d*1024+m)*4;a[L]=Math.min(255,y*255),a[L+1]=Math.min(255,S*255),a[L+2]=Math.min(255,C*255),a[L+3]=255}}s.putImageData(r,0,0);const u=new xn(i);return u.colorSpace=jt,u}function tM(o,e,t,n,i){const s=Ti(e.capDir),r=Ls(o,s,0,0,-.001,t,n),a=new Lt;a.name="Pandora_Landmark_Hometree",a.position.copy(r.pos),a.quaternion.setFromUnitVectors(wn,r.normal);const l=new He({color:3877405,emissive:337972,emissiveIntensity:0,roughness:.9});i.push({mat:l,dayColor:3877405,nightColor:1449006,dayEmissive:337972,nightEmissive:803410,dayEI:0,nightEI:.45});const c=.56*Te,h=new en(.065*Te,.14*Te,c,14,14,!0);h.translate(0,c*.5,0);const u=h.attributes.position;for(let T=0;T<u.count;T++){const w=u.getX(T),A=u.getY(T),E=u.getZ(T),y=A/c,S=y*2.4,C=1+.24*Math.sin(Math.atan2(E,w)*6+S),L=y<.25?1+Math.pow((.25-y)/.25,1.5)*.65:1,N=(w*Math.cos(S*.35)-E*Math.sin(S*.35))*C*L,P=(w*Math.sin(S*.35)+E*Math.cos(S*.35))*C*L;u.setXYZ(T,N,A,P)}h.computeVertexNormals();const d=new ze(h,l);d.castShadow=!0,d.receiveShadow=!0,a.add(d);for(let T=0;T<14;T++){const w=T/14*Math.PI*2+(H(T,3,7)-.5)*.15,A=(.14+H(T,8,2)*.09)*Te,E=(.12+H(T,5,4)*.18)*Te,y=new Kn([new b(Math.cos(w)*.06*Te,E,Math.sin(w)*.06*Te),new b(Math.cos(w)*A*.62,E*.62,Math.sin(w)*A*.62),new b(Math.cos(w)*A,-.015*Te,Math.sin(w)*A)]);a.add(new ze(new Jn(y,10,.012*Te,6,!1),l))}const f=new He({color:1992238,emissive:407618,emissiveIntensity:0,roughness:.65});i.push({mat:f,dayColor:1992238,nightColor:537660,dayEmissive:407618,nightEmissive:416876,dayEI:0,nightEI:.72});const g=new He({color:3041336,emissive:65512,emissiveIntensity:0,roughness:.35,side:Kt});i.push({mat:g,dayColor:3041336,nightColor:61695,dayEmissive:1853990,nightEmissive:63743,dayEI:0,nightEI:2.25,pulsePhase:.6});const x=new He({color:3877405,emissive:16755256,emissiveIntensity:0,roughness:.5});i.push({mat:x,dayColor:3877405,nightColor:16762980,dayEmissive:2759184,nightEmissive:16751144,dayEI:0,nightEI:2.1,pulsePhase:1.4});const m=[.34*Te,.28*Te,.21*Te,.14*Te],p=[.34*Te,.44*Te,.53*Te,.61*Te],{outer:v,under:M}=of();for(let T=0;T<m.length;T++){const w=m[T],A=p[T],E=new ze(v,f);E.position.set(0,A,0),E.scale.set(w,w*.9,w),E.castShadow=!0,E.receiveShadow=!0,a.add(E);const y=new ze(M,g);y.position.set(0,A-.004*Te,0),y.scale.set(w*.98,w*.9,w*.98),a.add(y)}const _=new ze(new Jt(.055*Te,12,8),x);return _.position.set(0,.06*Te,0),a.add(_),{group:a,anchorDir:r.normal,anchorPos:r.pos}}function nM(o,e,t,n,i){const s=Ti(e.capDir),r=Ls(o,s,0,0,-5e-4,t,n),a=new Lt;a.name="Pandora_Landmark_TreeOfSouls";const l=hr(),c=new He({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:2757704,emissiveIntensity:0,roughness:.85});i.push({mat:c,dayColor:16777215,nightColor:10134724,dayEmissive:1054752,nightEmissive:2497092,dayEI:0,nightEI:.45});for(let T=0;T<7;T++){const w=T/7*Math.PI*2,A=w+Math.PI*.88,E=.072*vt,{geo:y}=$c(o,s,Math.cos(w)*E,Math.sin(w)*E,Math.cos(A)*E,Math.sin(A)*E,(.145+T%3*.025)*Te,.011*Te,50+T,t,n),S=new ze(y,c);S.castShadow=!0,S.receiveShadow=!0,a.add(S)}const h=new Lt;h.position.copy(r.pos),h.quaternion.setFromUnitVectors(wn,r.normal),a.add(h);const u=new He({color:2975798,emissive:9058559,emissiveIntensity:0,roughness:.72});i.push({mat:u,dayColor:2975798,nightColor:1976408,dayEmissive:1194016,nightEmissive:7746303,dayEI:0,nightEI:1.45,pulsePhase:2.1}),h.add(new ze(new en(.18*Te,.2*Te,.004*Te,24),u));const d=new He({color:10392232,emissive:8409296,emissiveIntensity:0,roughness:.7});i.push({mat:d,dayColor:9274e3,nightColor:12759280,dayEmissive:4734036,nightEmissive:9459967,dayEI:0,nightEI:1.1});const f=.25*Te,g=new en(.024*Te,.055*Te,f,10,8);g.translate(0,f*.5,0),h.add(new ze(g,d));const x=new Jt(.13*Te,12,8);x.scale(1.25,.35,1.25),x.translate(0,f*.96,0),h.add(new ze(x,d));const m=340,p=new en(.0014*Te,5e-4*Te,1,4,1);p.translate(0,-.5,0);const v=new He({color:14076140,emissive:15120639,emissiveIntensity:0,roughness:.28,transparent:!0,opacity:.92});i.push({mat:v,dayColor:14669034,nightColor:16777215,dayEmissive:12560604,nightEmissive:14456575,dayEI:0,nightEI:2.35,pulsePhase:.2});const M=new Mt(p,v,m);M.name="Pandora_TreeOfSouls_Filaments";const _=new Xt;for(let T=0;T<m;T++){const w=H(T,4,17)*Math.PI*2,A=(.015+Math.sqrt(H(T,8,11))*.135)*Te,E=(.08+H(T,3,19)*.13)*Te;_.position.set(Math.cos(w)*A,f*.95,Math.sin(w)*A),_.rotation.set((H(T,1,5)-.5)*.14,w,(H(T,2,7)-.5)*.14),_.scale.set(1,E,1),_.updateMatrix(),M.setMatrixAt(T,_.matrix)}return M.instanceMatrix.needsUpdate=!0,h.add(M),{group:a,anchorDir:r.normal,anchorPos:r.pos}}function iM(o,e,t,n,i,s,r){const a=Ti(e.capDir),l=new Lt;l.name="Pandora_Landmark_HallelujahMountains";const c=hr(),h=new He({vertexColors:!0,roughnessMap:c.roughnessMap,bumpMap:c.bumpMap,bumpScale:.05,emissive:404528,emissiveIntensity:0,roughness:.86,metalness:.06});i.push({mat:h,dayColor:16777215,nightColor:6455448,dayEmissive:795668,nightEmissive:669766,dayEI:0,nightEI:.52});const u=new dn({color:new ie(.85,.96,1),transparent:!0,opacity:.56,side:Kt,depthWrite:!1});i.push({mat:u,dayColorRGB:[.82,.95,1],nightColorRGB:[.42,1.75,2.3],isWaterfall:!0});const d=[],f=32;for(let m=0;m<f;m++){const p=m===0?0:(.03+Math.sqrt(H(m,4,11))*.14)*vt,v=m*2.39996+H(m,7,3)*.45,M=(m===0?.24:.078+H(m,9,2)*.21)*Te,_=Ls(o,a,Math.cos(v)*p,Math.sin(v)*p,M,t,n),T=(m===0?.095:.036+H(m,2,5)*.056)*Te,w=T*(.72+H(m,5,8)*.45),A=(m===0?.145:.052+H(m,6,1)*.082)*Te,E=Zy(m+1,T,w,A),y=new ze(E,h);y.position.copy(_.pos),y.quaternion.setFromUnitVectors(wn,_.normal),y.rotateY(H(m,1,8)*Math.PI*2),y.castShadow=m<16,y.receiveShadow=!0,l.add(y),d.push({pos:_.pos,normal:_.normal,rx:T,rz:w,h:A,alt:M});for(let S=0;S<7;S++){const C=H(m,S,14)*Math.PI*2,L=.25+H(m,S,2)*.55,N=new b(Math.cos(C)*T*L,-A*.34,Math.sin(C)*w*L).applyQuaternion(y.quaternion);r.push({pos:_.pos.clone().add(N),normal:_.normal,length:(.016+H(m,S,8)*.036)*Te})}if(m<15){const S=M+.015*Te,C=(.0065+H(m,12,4)*.0075)*Te,L=new Si(C,S,2,10),N=L.attributes.position;for(let R=0;R<N.count;R++){const O=(N.getY(R)+S*.5)/S;N.setZ(R,Math.sin((1-O)*Math.PI*.5)*.014*Te)}L.computeVertexNormals();const P=H(m,3,6)*Math.PI*2,U=new rt().setFromUnitVectors(wn,_.normal),G=new b(Math.cos(P)*T*.72,0,Math.sin(P)*w*.72).applyQuaternion(U),B=new ze(L,u);B.position.copy(_.pos).add(G).addScaledVector(_.normal,-S*.5+A*.16),B.quaternion.copy(U),B.rotateY(P+Math.PI*.5),l.add(B),s.push({mesh:B,material:u,phase:m*1.17})}}const g=new He({color:3889196,emissive:59600,emissiveIntensity:0,roughness:.55});i.push({mat:g,dayColor:3889196,nightColor:940132,dayEmissive:1718294,nightEmissive:1114072,dayEI:0,nightEI:1.35});const x=[];for(let m=0;m<f;m++){const p=d[m];let v=-1,M=.25*Te;for(let _=m+1;_<f;_++){const T=d[_],w=p.pos.distanceTo(T.pos);w>(p.rx+T.rx)*.85&&w<M&&(M=w,v=_)}if(v>=0){const _=d[v],T=p.pos.clone().add(_.pos).multiplyScalar(.5);T.add(T.clone().normalize().multiplyScalar(-M*.18));const w=new Kn([p.pos.clone(),T,_.pos.clone()]);x.push(new Jn(w,10,.0014*Te,5,!1).toNonIndexed())}}if(x.length>0){const m=new ze(zt(x,!1),g);m.name="Pandora_Hallelujah_VineBridges",l.add(m)}return{group:l,islandsData:d,anchorDir:a.upDir,anchorPos:a.upDir.clone().multiplyScalar(o)}}function sM(o,e,t,n,i,s){const r=Ti(e.capDir),a=new Lt;a.name="Pandora_Landmark_IkranRookery";const l=hr(),c=new He({vertexColors:!0,roughnessMap:l.roughnessMap,bumpMap:l.bumpMap,bumpScale:.045,emissive:407620,emissiveIntensity:0,roughness:.88});i.push({mat:c,dayColor:16777215,nightColor:6453906,dayEmissive:1058840,nightEmissive:672850,dayEI:0,nightEI:.42});const h=[];return[[-.08*vt,-.05*vt,.08*vt,.05*vt,.21*Te,.015*Te],[-.06*vt,.07*vt,.07*vt,-.06*vt,.24*Te,.016*Te],[-.1*vt,.01*vt,.02*vt,.09*vt,.17*Te,.013*Te],[.01*vt,-.09*vt,.09*vt,.02*vt,.18*Te,.013*Te],[-.09*vt,-.02*vt,.05*vt,.07*vt,.15*Te,.012*Te],[-.04*vt,-.08*vt,.08*vt,-.02*vt,.16*Te,.011*Te],[-.07*vt,.04*vt,.03*vt,-.07*vt,.19*Te,.012*Te],[-.03*vt,.08*vt,.09*vt,.06*vt,.14*Te,.011*Te]].forEach(([d,f,g,x,m,p],v)=>{const{geo:M,curve:_,apex:T}=$c(o,r,d,f,g,x,m,p,10+v,t,n),w=new ze(M,c);w.name=`Pandora_IkranRookery_Arch_${v+1}`,a.add(w),h.push({apex:T,normal:T.clone().normalize()});for(let A=0;A<14;A++){const E=_.getPoint(.2+A/13*.6),y=E.clone().normalize();s.push({pos:E.addScaledVector(y,-p*.65),normal:y,length:(.014+H(A,v,19)*.026)*Te})}}),{group:a,archCenters:h,anchorDir:r.upDir,anchorPos:r.upDir.clone().multiplyScalar(o)}}function oM(o,e,t,n,i){const s=Ti(e.capDir),r=new Lt;r.name="Pandora_Landmark_MushroomGeysers";const a=new He({color:3880242,emissive:55528,emissiveIntensity:0,roughness:.88});i.push({mat:a,dayColor:3880242,nightColor:1980488,dayEmissive:926246,nightEmissive:59647,dayEI:0,nightEI:1.85});const l=14,c=new en(.18,.95,1,9,1);c.translate(0,.5,0);const h=new Mt(c,a,l);h.name="Pandora_Geyser_Vents";const u=[],d=new Xt;for(let E=0;E<l;E++){const y=E/l*Math.PI*2+H(E,3,7)*.4,S=(.014+H(E,9,2)*.068)*vt,C=Ls(o,s,Math.cos(y)*S,Math.sin(y)*S,-5e-4,t,n),L=(.008+H(E,2,11)*.006)*Te,N=(.014+H(E,5,13)*.012)*Te;d.position.copy(C.pos),d.quaternion.setFromUnitVectors(wn,C.normal),d.scale.set(L,N,L),d.updateMatrix(),h.setMatrixAt(E,d.matrix),u.push({basePos:C.pos.clone().addScaledVector(C.normal,N*.95),normal:C.normal.clone(),phase:H(E,6,4)*Math.PI*2,maxHeight:(.065+H(E,8,9)*.055)*Te})}h.instanceMatrix.needsUpdate=!0,r.add(h);const f=22,g=l*f,x=new Float32Array(g*3),m=new Float32Array(g*3);for(let E=0;E<g;E++)m[E*3]=.78,m[E*3+1]=.94,m[E*3+2]=1;const p=new Et;p.setAttribute("position",new yt(x,3)),p.setAttribute("color",new yt(m,3));const v=document.createElement("canvas");v.width=64,v.height=64;const M=v.getContext("2d"),_=M.createRadialGradient(32,32,2,32,32,32);_.addColorStop(0,"rgba(255, 255, 255, 0.85)"),_.addColorStop(.45,"rgba(180, 245, 255, 0.42)"),_.addColorStop(1,"rgba(0, 0, 0, 0.0)"),M.fillStyle=_,M.fillRect(0,0,64,64);const T=new xn(v);T.needsUpdate=!0;const w=new ci({size:5.5,map:T,vertexColors:!0,transparent:!0,opacity:.48,depthWrite:!1,blending:Mn,sizeAttenuation:!0}),A=new hi(p,w);return A.name="Pandora_Geyser_Plumes",A.frustumCulled=!1,r.add(A),{group:r,geyserEmitters:u,plumeGeo:p,plumeMat:w,puffsPerGeyser:f,anchorDir:s.upDir,anchorPos:s.upDir.clone().multiplyScalar(o)}}function rM(o,e,t,n){const i=new Lt;i.name="Pandora_Inland_Lakes_And_Lilies";const s=[],r=[],a=[],l=[],c=new Xt;ma.forEach((w,A)=>{const E=Ti(w.dir),y=o+w.waterElev,S=8,C=20,L=[],N=[];for(let U=0;U<=S;U++){const B=U/S*w.angRad*.82;for(let R=0;R<=C;R++){const O=R/C*Math.PI*2,j=E.upDir.clone().addScaledVector(E.e1,Math.cos(O)*B).addScaledVector(E.e2,Math.sin(O)*B).normalize();L.push(j.x*y,j.y*y,j.z*y)}}for(let U=0;U<S;U++)for(let G=0;G<C;G++){const B=U*(C+1)+G,R=B+(C+1);N.push(B,B+1,R,B+1,R+1,R)}const P=new Et;P.setAttribute("position",new Vt(L,3)),P.setIndex(N),P.computeVertexNormals(),s.push(P.toNonIndexed());for(let U=0;U<108;U++){const G=H(U,A+3,19)*Math.PI*2,B=Math.sqrt(H(U,A+7,11))*w.angRad*.72,R=E.upDir.clone().addScaledVector(E.e1,Math.cos(G)*B).addScaledVector(E.e2,Math.sin(G)*B).normalize(),O=(.0045+H(U,A+1,5)*.006)*Te;c.position.copy(R).multiplyScalar(y+18e-5),c.quaternion.setFromUnitVectors(wn,R),c.rotateY(H(U,2,9)*Math.PI*2),c.scale.set(O,O,O),c.updateMatrix(),r.push(c.matrix.clone());const j=O*.65;c.position.copy(R).multiplyScalar(y+38e-5),c.scale.set(j,j,j),c.updateMatrix(),U%2===0?a.push(c.matrix.clone()):l.push(c.matrix.clone())}});const h=new He({color:955050,emissive:35e3,emissiveIntensity:0,roughness:.08,metalness:.62,transparent:!0,opacity:.88,depthWrite:!1});n.push({mat:h,dayColor:955050,nightColor:279638,dayEmissive:546924,nightEmissive:39116,dayEI:0,nightEI:1.05});const u=new ze(zt(s,!1),h);u.name="Pandora_Global_Inland_Lakes",i.add(u);const d=new en(1,.92,.08,12,1,!1,.25,Math.PI*1.85);d.translate(0,.04,0);const f=new He({color:2387512,emissive:55448,emissiveIntensity:0,roughness:.52});n.push({mat:f,dayColor:2387512,nightColor:803904,dayEmissive:1062936,nightEmissive:57498,dayEI:0,nightEI:1.35,pulsePhase:1.3});const g=new Mt(d,f,r.length);g.name="Pandora_Giant_WaterLilies_Pads",g.frustumCulled=!1,r.forEach((w,A)=>g.setMatrixAt(A,w)),g.instanceMatrix.needsUpdate=!0,i.add(g);const x=sf(),m=new He({color:14184610,emissive:16726200,emissiveIntensity:0,roughness:.35}),p=new He({color:5425368,emissive:62975,emissiveIntensity:0,roughness:.35});n.push({mat:m,dayColor:14184610,nightColor:16732872,dayEmissive:4726840,nightEmissive:16723632,dayEI:0,nightEI:2.35,pulsePhase:.4}),n.push({mat:p,dayColor:5425368,nightColor:3735551,dayEmissive:1853520,nightEmissive:62975,dayEI:0,nightEI:2.35,pulsePhase:2});const v=new Mt(x,m,a.length);v.name="Pandora_Giant_WaterLilies_PinkFlowers",v.frustumCulled=!1,a.forEach((w,A)=>v.setMatrixAt(A,w)),v.instanceMatrix.needsUpdate=!0;const M=new Mt(x,p,l.length);M.name="Pandora_Giant_WaterLilies_TurqFlowers",M.frustumCulled=!1,l.forEach((w,A)=>M.setMatrixAt(A,w)),M.instanceMatrix.needsUpdate=!0,i.add(v,M);const _=[],T=Pa();return ma.forEach((w,A)=>{const E=new Ta(new Us(w.angRad*o*.78,28),{textureWidth:256,textureHeight:256,waterNormals:T,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:683130,distortionScale:.36,size:3,clipBias:.002,alpha:.88,fog:!0});E.name=`Pandora_Inland_Lake_Water_${A}`,E.position.copy(w.dir).multiplyScalar(o+w.waterElev+18e-5),E.quaternion.setFromUnitVectors(new b(0,0,1),w.dir),E.visible=!1,i.add(E),_.push({water:E,centerLocal:E.position.clone(),isOceanSurface:!1})}),{group:i,lakeWaters:_}}function aM(o){const e=o.localRadius,t=o.capLocalDir?o.capLocalDir.clone().normalize():new b(0,1,0),n=new rt().setFromUnitVectors(wn,t),i=Ra([t.x,t.y,t.z]),s={qCap:n,sphereLandmarks:i},r=new Lt;r.name="Pandora_Global_360_World";const a=[],l=(we,Pe,Ct)=>si(we,Pe,Ct,n,i,4),c=new Jt(e,192,128),h=c.attributes.position,u=h.count,d=new Float32Array(u*3),f=new ie(270648),g=new ie(2274738),x=new ie(14208416),m=new ie(2911794),p=new ie(9213536),v=new ie(1793065),M=new ie(3889190),_=new ie(3817024),T=new ie(1841692),w=new ie,A=new b;for(let we=0;we<u;we++){A.set(h.getX(we),h.getY(we),h.getZ(we)).normalize();const{cont:Pe,highlandRidge:Ct,ashFactor:Ke,reefFactor:At,borderMountain:Dt,elev:Pt,nation:Gt}=si(A.x,A.y,A.z,n,i,4);if(h.setXYZ(we,A.x*(e+Pt),A.y*(e+Pt),A.z*(e+Pt)),Pe<=0){const mn=Math.max(X.smoothstep(Pe,-.24,0),At*.78);w.copy(f).lerp(g,mn)}else if(Gt==="water"){const mn=X.smoothstep(Pe,.015,.055);w.copy(x).lerp(m,mn)}else{const mn=Ht(A.x*22+3,A.y*22,A.z*22)*.5+.5;w.copy(p).lerp(v,X.smoothstep(Pe,0,.075)),w.lerp(M,mn*.52);const It=Math.min(.92,Ct*3.8+Dt*.85);It>.02&&w.lerp(_,It),(Ke>.05||Gt==="ash")&&w.lerp(T,Gt==="ash"?.94:Math.min(1,Ke*1.15))}d[we*3]=w.r,d[we*3+1]=w.g,d[we*3+2]=w.b}c.setAttribute("color",new yt(d,3)),c.computeVertexNormals();const E=qc(),y=Pa(),S=Jy(),C=eM(n,i),L=new He({map:S,roughnessMap:E.roughnessMap,bumpMap:E.bumpMap,bumpScale:.055,vertexColors:!0,emissiveMap:C,emissive:new ie(1,1,1),emissiveIntensity:0,roughness:.88,metalness:.04}),N=Yc(L,{mode:"pandora",worldRadius:e*157.5,peakStart:4.5,peakEnd:9.8,shoreBand:.65});a.push({mat:L,dayColor:16777215,nightColor:3885146,dayEmissive:16777215,nightEmissive:16777215,dayEI:0,nightEI:1.25});const P=new ze(c,L);P.name="Pandora_Global_Terrain_360",P.userData.splatUniforms=N,P.receiveShadow=!0,r.add(P);const U=y?y.clone():null;U&&(U.repeat.set(36,18),U.needsUpdate=!0);const G=new He({color:754846,normalMap:U,normalScale:new Ue(.32,.32),emissive:35512,emissiveIntensity:0,roughness:.08,metalness:.58,transparent:!0,opacity:.72,depthWrite:!1,side:Kt});a.push({mat:G,dayColor:754846,nightColor:209478,dayEmissive:284780,nightEmissive:35e3,dayEI:0,nightEI:.72});const B=new ze(new Jt(e,112,72),G);B.name="Pandora_Global_Crystal_Ocean",B.receiveShadow=!0,r.add(B);const R=bt[6].capDir.clone().normalize(),O=new Ta(new Us(e*.048,36),{textureWidth:256,textureHeight:256,waterNormals:y,sunDirection:new b(.4,.7,.3).normalize(),sunColor:16773332,waterColor:957112,distortionScale:.45,size:4,clipBias:.002,alpha:.9,fog:!0});O.name="Pandora_Metkayina_Reflective_Water",O.position.copy(R).multiplyScalar(e+25e-5),O.quaternion.setFromUnitVectors(new b(0,0,1),R),O.visible=!1,r.add(O);const j=Hy(e,s),Q=[.011*Te,.007*Te,.008*Te,.0085*Te,.008*Te,.0075*Te,.0075*Te],{waterMesh:ne,bankMesh:ye,waterMat:Z,bankMat:pe}=Qy(j,Q);r.add(ne,ye);const $=[{waterMat:Z,bankMat:pe,phase:.4}],{group:ee,lakeWaters:ce}=rM(e,n,i,a);r.add(ee);const fe=[{water:O,centerLocal:O.position.clone(),isOceanSurface:!0},...ce],ae=[],Se=[],V=new Xt,Ie=tM(e,bt[0],n,i,a),k=iM(e,bt[1],n,i,a,Se,ae),dt=sM(e,bt[2],n,i,a,ae),xe=nM(e,bt[3],n,i,a),Ve=oM(e,bt[4],n,i,a),Be=ky(e,bt[5],l,a),it=zy(e,bt[6],l,a);r.add(Ie.group,k.group,dt.group,xe.group,Ve.group,Be.group,it.group);const Xe=Ti(bt[0].capDir),F=hr(),D=new He({vertexColors:!0,roughnessMap:F.roughnessMap,bumpMap:F.bumpMap,bumpScale:.045,roughness:.88}),te=[...dt.archCenters];[[-.02*vt,.05*vt,.07*vt,-.04*vt,.14*Te,.011*Te],[-.07*vt,-.03*vt,.03*vt,.07*vt,.13*Te,.01*Te]].forEach(([we,Pe,Ct,Ke,At,Dt],Pt)=>{const{geo:Gt,apex:mn}=$c(e,Xe,we,Pe,Ct,Ke,At,Dt,30+Pt,n,i),It=new ze(Gt,D);It.name=`Pandora_Valley_Arch_${Pt+1}`,r.add(It),te.push({apex:mn,normal:mn.clone().normalize()})}),te.push({apex:Ie.anchorPos,normal:Ie.anchorDir}),te.push({apex:k.anchorPos,normal:k.anchorDir});const _e=new en(34e-5*Te,12e-5*Te,1,4,1);_e.translate(0,-.5,0);const le=new He({color:3894837,emissive:2293720,emissiveIntensity:0,roughness:.42});a.push({mat:le,dayColor:3894837,nightColor:59647,dayEmissive:1719834,nightEmissive:2162648,dayEI:0,nightEI:1.95,pulsePhase:.9});const ue=new Mt(_e,le,ae.length);ue.name="Pandora_Global_Hanging_Vines",ue.frustumCulled=!1,ae.forEach((we,Pe)=>{V.position.copy(we.pos),V.quaternion.setFromUnitVectors(wn,we.normal),V.scale.set(1,we.length,1),V.updateMatrix(),ue.setMatrixAt(Pe,V.matrix)}),ue.instanceMatrix.needsUpdate=!0,r.add(ue);const Le=[],Me=[],ke=[],gt=[],Ae=[],Oe=[],nt=[],at=[],Ye=[],pt=[],lt=[],xt=[],K=[],Re=[],me=[],ve=[],Fe=[],Ge=[],je=[],Nt=[],Ft=[],ft=[],ln=new ie,un=[7252044,3902540,5023330,9348170,3972738,3112256],fn=we=>{const Pe=Math.floor(we*un.length)%un.length;return ln.setHex(un[Pe]),ln.offsetHSL((we-.5)*.04,0,(we-.5)*.14),ln.clone()},ct=we=>(ln.setRGB(.86+we*.24,.92+(1-Math.abs(we-.5)*2)*.22,.8+(1-we)*.24),ln.clone());for(let we=0;we<64;we++){const Pe=k.islandsData[we%k.islandsData.length],Ct=H(we,2,13)*Math.PI*2,Ke=Math.sqrt(H(we,5,2))*.52,At=new b(Math.cos(Ct)*Pe.rx*Ke,Pe.h*.28,Math.sin(Ct)*Pe.rz*Ke),Dt=new rt().setFromUnitVectors(wn,Pe.normal);At.applyQuaternion(Dt);const Pt=Pe.pos.clone().add(At),Gt=(.018+H(we,8,4)*.022)*Te,mn=Gt*.65;V.position.copy(Pt),V.quaternion.copy(Dt),V.rotateY(H(we,9,9)*Math.PI*2),V.scale.set(Gt,Gt,Gt),V.updateMatrix(),Le.push(V.matrix.clone()),Me.push(fn(H(we,3,5))),V.position.copy(Pt).addScaledVector(Pe.normal,Gt*.92),V.scale.set(mn,mn,mn),V.updateMatrix(),ke.push(V.matrix.clone()),(we%2===0?gt:Ae).push(V.matrix.clone())}const Zt=(1+Math.sqrt(5))*.5,_n=16e3,Sn=44e3,Tt=new b,pn=new b,rn=new rt,cn=new b,qt=new b,$t=new b,Ot=[0,1,2,3,4].map(we=>Ti(bt[we].capDir));for(let we=0;we<Sn;we++){if(we<_n){const St=we%Ot.length,di=Ot[St],wi=2*Math.PI*we/Zt,Ki=St===0?.36:.24,ei=Math.sqrt((we+.5)/_n)*Ki;Tt.copy(di.upDir).addScaledVector(di.e1,Math.cos(wi)*ei).addScaledVector(di.e2,Math.sin(wi)*ei).normalize()}else{const St=we-_n,wi=1-St*.7548776662%1*2,Ki=Math.sqrt(Math.max(0,1-wi*wi)),ei=2*Math.PI*St/Zt+(H(we,3,17)-.5)*.028;Tt.set(Math.cos(ei)*Ki,wi,Math.sin(ei)*Ki).normalize()}const{cont:Pe,highlandRidge:Ct,ashFactor:Ke,forestClump:At,lakeBlend:Dt,elev:Pt,biome:Gt,nation:mn}=si(Tt.x,Tt.y,Tt.z,n,i,3),It=H(we,11,29),ut=H(we,19,7),an=H(we,23,13);if(mn==="ash"||Ke>.22)continue;if(mn==="water"){if(Pe<=.002){if(Gt==="reef"&&ft.length<520&&It<.14&&Pt>-.025){pn.copy(Tt).multiplyScalar(e+Pt-2e-4),rn.setFromUnitVectors(wn,Tt),V.position.copy(pn),V.quaternion.copy(rn),V.rotateY(ut*Math.PI*2);const St=(.007+ut*.013)*Te;V.scale.set(St,St*.45,St*.85),V.updateMatrix(),ft.push(V.matrix.clone())}}else if(Pe>.005){if(pn.copy(Tt).multiplyScalar(e+Pt),rn.setFromUnitVectors(wn,Tt),pt.length<4200&&It<.62){const St=.017*Te*(.65+ut*1.15);V.position.copy(pn),V.quaternion.copy(rn),V.rotateY(ut*Math.PI*2),V.rotateX((an-.5)*.14),V.scale.set(St,St,St),V.updateMatrix(),pt.push(V.matrix.clone()),lt.push(ct(an))}else if(Re.length<3800&&ut<.45){const St=(.007+It*.008)*Te;V.position.copy(pn),V.quaternion.copy(rn),V.rotateY(It*Math.PI*2),V.scale.set(St,St,St),V.updateMatrix(),Re.push(V.matrix.clone()),me.push(fn(It))}else if(xt.length<5200&&an<.35){const St=(.006+ut*.007)*Te;V.position.copy(pn),V.quaternion.copy(rn),V.rotateY(an*Math.PI*2),V.scale.set(St,St,St),V.updateMatrix(),xt.push(V.matrix.clone()),K.push(fn(ut))}}continue}if(Gt==="lake"||Dt>.35||Pe<=0||Tt.distanceTo(bt[3].capDir)<.036*vt)continue;if(pn.copy(Tt).multiplyScalar(e+Pt),rn.setFromUnitVectors(wn,Tt),Gt==="canyon"&&Ft.length<340&&Ct>.042&&It<.24){V.position.copy(Tt).multiplyScalar(e+Pt-.001*Te),V.quaternion.copy(rn),V.rotateY(ut*Math.PI*2);const St=(.008+ut*.011)*Te,di=(.036+an*.052)*Te;V.scale.set(St,di,St),V.updateMatrix(),Ft.push(V.matrix.clone());continue}const ks=At>-.04,Po=Pe<.065;if(ks||Po&&It<.45){const St=.5+Math.pow(ut,1.3)*1.9,di=(an-.5)*.16,wi=(H(we,5,31)-.5)*.16,Ki=fn(an),ei=ct(an);if(V.position.copy(pn),V.quaternion.copy(rn),V.rotateY(ut*Math.PI*2),V.rotateX(di),V.rotateZ(wi),Po&&It<.55&&pt.length<4200){const Pn=.019*Te*St;V.scale.set(Pn,Pn,Pn),V.updateMatrix(),pt.push(V.matrix.clone()),lt.push(ei)}else{const Pn=Math.floor(It*100)%3;if(Pn===0&&Le.length<4200){const Ln=.024*Te*St,Ia=Ln*(.58+an*.22);V.scale.set(Ln,Ln,Ln),V.updateMatrix(),Le.push(V.matrix.clone()),Me.push(Ki),V.position.copy(pn).addScaledVector(Tt,Ln*.9),V.scale.set(Ia,Ia,Ia),V.updateMatrix(),ke.push(V.matrix.clone()),(Le.length%2===0?gt:Ae).push(V.matrix.clone())}else if(Pn===1&&Oe.length<4800){const Ln=.032*Te*St;V.scale.set(Ln*.9,Ln*1.35,Ln*.9),V.updateMatrix(),Oe.push(V.matrix.clone()),nt.push(ei)}else if(at.length<4500){const Ln=.022*Te*St;V.scale.set(Ln,Ln,Ln),V.updateMatrix(),at.push(V.matrix.clone()),Ye.push(ei)}else if(pt.length<4200){const Ln=.02*Te*St;V.scale.set(Ln,Ln,Ln),V.updateMatrix(),pt.push(V.matrix.clone()),lt.push(ei)}}const df=Math.abs(Tt.x)<.85?wn:new b(0,0,1);if(qt.crossVectors(Tt,df).normalize(),$t.crossVectors(Tt,qt).normalize(),xt.length<6200&&ut<.58){cn.copy(Tt).addScaledVector(qt,(It-.5)*.0025).addScaledVector($t,(an-.5)*.0025).normalize();const Pn=(.0075+an*.009)*Te;V.position.copy(cn).multiplyScalar(e+Pt),V.quaternion.setFromUnitVectors(wn,cn),V.rotateY(ut*Math.PI*2),V.scale.set(Pn,Pn,Pn),V.updateMatrix(),xt.push(V.matrix.clone()),K.push(fn(ut))}if(Re.length<4400&&an>.48){cn.copy(Tt).addScaledVector(qt,(an-.5)*.003).addScaledVector($t,(It-.5)*.003).normalize();const Pn=(.009+It*.011)*Te;V.position.copy(cn).multiplyScalar(e+Pt),V.quaternion.setFromUnitVectors(wn,cn),V.rotateY(It*Math.PI*2),V.scale.set(Pn,Pn,Pn),V.updateMatrix(),Re.push(V.matrix.clone()),me.push(fn(It))}if(ve.length<2200&&It>.78){cn.copy(Tt).addScaledVector(qt,(ut-.5)*.003).addScaledVector($t,(an-.5)*.003).normalize();const Pn=(.0065+ut*.01)*Te;V.position.copy(cn).multiplyScalar(e+Pt),V.quaternion.setFromUnitVectors(wn,cn),V.rotateY(an*Math.PI*2),V.scale.set(Pn,Pn,Pn),V.updateMatrix(),ve.push(V.matrix.clone())}}else if(Fe.length+Ge.length<2400&&It<.25){const St=(.0052+ut*.0062)*Te;V.position.copy(pn),V.quaternion.copy(rn),V.rotateY(an*Math.PI*2),V.scale.set(St,St,St),V.updateMatrix(),(we%2===0?Fe:Ge).push(V.matrix.clone())}else if(je.length+Nt.length<1050&&It>.84){const St=(.01+ut*.015)*Te;V.position.copy(pn),V.quaternion.copy(rn),V.rotateY(an*Math.PI*2),V.scale.set(St,St,St),V.updateMatrix(),(we%2===0?je:Nt).push(V.matrix.clone())}}const Ut=Ti(bt[4].capDir);for(let we=0;we<250;we++){const Pe=Math.floor(we/4),Ct=H(Pe,4,17)*Math.PI*2,Ke=Math.sqrt(H(Pe,11,3))*(.095*vt),At=Math.cos(Ct)*Ke+(H(we,2,9)-.5)*(.012*vt),Dt=Math.sin(Ct)*Ke+(H(we,7,5)-.5)*(.012*vt),Pt=Ls(e,Ut,At,Dt,0,n,i),Gt=(.018+H(we,9,6)*.026)*Te;V.position.copy(Pt.pos),V.quaternion.setFromUnitVectors(wn,Pt.normal),V.rotateY(H(we,5,1)*Math.PI*2),V.scale.set(Gt,Gt,Gt),V.updateMatrix(),(Pe%2===0?je:Nt).push(V.matrix.clone())}for(let we=0;we<420;we++){const Pe=j[we%j.length],Ct=Pe[Math.floor(H(we,5,3)*Pe.length)],Ke=Ct.phi+(we%2===0?1:-1)*(.008+H(we,7,1)*.026)*Te,At=X.clamp(Ct.theta+(H(we,3,8)-.5)*.018*Te,.001,Math.PI-.001),Dt=Math.sin(At),Pt=si(Dt*Math.cos(Ke),Math.cos(At),Dt*Math.sin(Ke),n,i,3).elev,Gt=Gy(e,At,Ke,Pt);V.position.copy(Gt.pos),V.quaternion.setFromUnitVectors(wn,Gt.normal),V.rotateY(H(we,1,6)*Math.PI*2);const mn=(.008+H(we,4,9)*.01)*Te;V.scale.set(mn,mn,mn),V.updateMatrix(),xt.push(V.matrix.clone()),K.push(fn(H(we,2,3)))}const _t=(we,Pe,Ct,Ke,At=null)=>{const Dt=new Mt(Pe,Ct,Math.max(1,Ke.length));return Dt.name=we,Dt.frustumCulled=!1,Ke.forEach((Pt,Gt)=>{Dt.setMatrixAt(Gt,Pt),At&&At[Gt]&&Dt.setColorAt(Gt,At[Gt])}),Dt.instanceMatrix.needsUpdate=!0,At&&Dt.instanceColor&&(Dt.instanceColor.needsUpdate=!0),r.add(Dt),Dt};if(Ft.length>0&&_t("Pandora_Global_Canyon_Spires",$y(7),new He({vertexColors:!0,roughness:.88}),Ft),ft.length>0){const we=new He({color:4943976,emissive:61695,emissiveIntensity:0,roughness:.72});a.push({mat:we,dayColor:4943976,nightColor:542818,dayEmissive:1589304,nightEmissive:59647,dayEI:0,nightEI:1.75,pulsePhase:1.2}),_t("Pandora_Global_Coral_Reefs",new vo(1,0),we,ft)}ve.length>0&&_t("Pandora_Global_Mossy_Rocks",Yy(),new He({vertexColors:!0,roughness:.9}),ve);const I=new en(.055,.18,1,6,1);I.translate(0,.5,0);const Y=new He({color:4337696,roughness:.9});a.push({mat:Y,dayColor:4337696,nightColor:1446952,dayEmissive:0,nightEmissive:662570,dayEI:0,nightEI:.18}),_t("Pandora_Global_Tree_Trunks",I,Y,Le);const{outer:oe,under:he}=of(),J=new He({color:16777215,emissive:537664,emissiveIntensity:0,roughness:.68});a.push({mat:J,dayColor:12769474,nightColor:1460812,dayEmissive:667158,nightEmissive:540752,dayEI:0,nightEI:.52}),_t("Pandora_Global_Canopy_Tops",oe,J,ke,Me);const Ce=new He({color:2777650,emissive:65512,emissiveIntensity:0,roughness:.45,side:Kt});a.push({mat:Ce,dayColor:2777650,nightColor:62975,dayEmissive:1456156,nightEmissive:65512,dayEI:0,nightEI:2.2,pulsePhase:0}),_t("Pandora_Global_Canopy_Under_Turquoise",he,Ce,gt);const De=new He({color:3303982,emissive:16720544,emissiveIntensity:0,roughness:.45,side:Kt});a.push({mat:De,dayColor:3303982,nightColor:16725168,dayEmissive:1719320,nightEmissive:16720544,dayEI:0,nightEI:2.15,pulsePhase:1.9}),_t("Pandora_Global_Canopy_Under_Magenta",he,De,Ae);const Qe=new He({vertexColors:!0,emissive:51416,emissiveIntensity:0,roughness:.72});a.push({mat:Qe,dayColor:16777215,nightColor:5143684,dayEmissive:798236,nightEmissive:34968,dayEI:0,nightEI:.48}),_t("Pandora_Global_Alien_Redwoods",Vy(),Qe,Oe,nt);const et=new He({vertexColors:!0,emissive:9455871,emissiveIntensity:0,roughness:.78});a.push({mat:et,dayColor:16777215,nightColor:6056066,dayEmissive:1189400,nightEmissive:5909664,dayEI:0,nightEI:.55}),_t("Pandora_Global_Gnarled_Root_Trees",Wy(),et,at,Ye);const st=new He({vertexColors:!0,emissive:55464,emissiveIntensity:0,roughness:.72,side:Kt});a.push({mat:st,dayColor:16777215,nightColor:5013626,dayEmissive:1194008,nightEmissive:45206,dayEI:0,nightEI:.75}),_t("Pandora_Global_Alien_Palms",Xy(),st,pt,lt);const ht=new He({color:16777215,emissive:57514,emissiveIntensity:0,roughness:.65,side:Kt});a.push({mat:ht,dayColor:12769474,nightColor:1462860,dayEmissive:1192986,nightEmissive:51352,dayEI:0,nightEI:1.05,pulsePhase:1.1}),_t("Pandora_Global_Broadleaf_Shrubs",qy(),ht,Re,me);const z=new He({color:16777215,emissive:59548,emissiveIntensity:0,roughness:.62,side:Kt});a.push({mat:z,dayColor:13032646,nightColor:1333314,dayEmissive:1327646,nightEmissive:57498,dayEI:0,nightEI:1.25,pulsePhase:2.4}),_t("Pandora_Global_Giant_Ferns",jy(),z,xt,K);const Ne=sf(),Je=new He({color:8796822,emissive:12728575,emissiveIntensity:0,roughness:.45});a.push({mat:Je,dayColor:8796822,nightColor:13650687,dayEmissive:3807298,nightEmissive:12071167,dayEI:0,nightEI:2.3,pulsePhase:.8}),_t("Pandora_Global_Flowers_Violet",Ne,Je,Fe);const ot=new He({color:13394984,emissive:16739866,emissiveIntensity:0,roughness:.45});a.push({mat:ot,dayColor:13394984,nightColor:16742946,dayEmissive:4989968,nightEmissive:16738324,dayEI:0,nightEI:2.35,pulsePhase:2.6}),_t("Pandora_Global_Flowers_Orange",Ne,ot,Ge);const W=Ky(),ge=new He({color:7357048,emissive:11024639,emissiveIntensity:0,roughness:.48});a.push({mat:ge,dayColor:7357048,nightColor:10631935,dayEmissive:3284024,nightEmissive:9973503,dayEI:0,nightEI:2.25,pulsePhase:1.5}),_t("Pandora_Global_Mushrooms_Violet",W,ge,je);const q=new He({color:10767974,emissive:16725672,emissiveIntensity:0,roughness:.48});a.push({mat:q,dayColor:10767974,nightColor:16726186,dayEmissive:4332584,nightEmissive:16722072,dayEI:0,nightEI:2.2,pulsePhase:3.1}),_t("Pandora_Global_Mushrooms_NeonPink",W,q,Nt),Z.userData.animatedEmissive=!0,pe.userData.animatedEmissive=!0;for(let we=0;we<a.length;we++)a[we].mat.userData=a[we].mat.userData||{},a[we].mat.userData.animatedEmissive=!0;const be=new ie,re=new ie,Ee=new ie(821410),de=new ie(280664),se=new ie(2649668),Ze=new ie(59647);return{group:r,terrainSplatUniforms:N,reflectiveWaters:fe,waterfalls:Se,pulsingRivers:$,archCenters:te,riverPaths:j,landmarks:bt,samplerCtx:s,getFloorAndWaterAtDir:we=>{const Pe=si(we.x,we.y,we.z,n,i,3),Ct=Pe.cont<=0||Pe.lakeBlend>.35,Ke=Pe.cont<=0?0:Pe.lakeBlend>.35?Pe.lakeWaterElev:-1;return{terrainElev:Pe.elev,waterElev:Ke,hasWater:Ct,nation:Pe.nation,forestFactor:Pe.forestFactor,waterFactor:Pe.waterFactor,ashFactor:Pe.ashFactor,reefFactor:Pe.reefFactor,biome:Pe.biome}},updateDayNight:(we,Pe,Ct=0)=>{const Ke=X.smoothstep(-we,-.1,.04);for(let It=0;It<a.length;It++){const ut=a[It];if(ut.isWaterfall){const an=.85+.15*Math.sin(Pe*3.8+It);ut.mat.color.setRGB(X.lerp(ut.dayColorRGB[0],ut.nightColorRGB[0]*an,Ke),X.lerp(ut.dayColorRGB[1],ut.nightColorRGB[1]*an,Ke),X.lerp(ut.dayColorRGB[2],ut.nightColorRGB[2]*an,Ke)),ut.mat.opacity=X.lerp(.52,.72,Ke);continue}if(ut.dayColor!==void 0&&(be.setHex(ut.dayColor),re.setHex(ut.nightColor),ut.mat.color.copy(be).lerp(re,Ke)),ut.dayEmissive!==void 0&&(be.setHex(ut.dayEmissive),re.setHex(ut.nightEmissive),ut.mat.emissive.copy(be).lerp(re,Ke)),ut.dayEI!==void 0){const an=ut.pulsePhase!==void 0?.9+.16*Math.sin(Pe*1.7+ut.pulsePhase):1;ut.mat.emissiveIntensity=X.lerp(ut.dayEI,ut.nightEI*an,Ke)}}const At=.85+.25*Math.sin(Pe*2);Z.color.copy(Ee).lerp(de,Ke),Z.emissiveIntensity=X.lerp(0,1.15*At,Ke),pe.color.copy(se).lerp(Ze,Ke),pe.emissiveIntensity=X.lerp(0,2.35*At,Ke);const Dt=Ve.plumeGeo.attributes.position,Pt=Ve.plumeGeo.attributes.color,Gt=Ve.geyserEmitters,mn=Ve.puffsPerGeyser;for(let It=0;It<Gt.length;It++){const ut=Gt[It];for(let an=0;an<mn;an++){const ks=It*mn+an,Po=(Pe*.48+ut.phase+an/mn)%1,St=Po*ut.maxHeight,di=Math.sin(Po*Math.PI)*.004*Te;Dt.setXYZ(ks,ut.basePos.x+ut.normal.x*St+Math.cos(ks)*di,ut.basePos.y+ut.normal.y*St,ut.basePos.z+ut.normal.z*St+Math.sin(ks)*di);const wi=X.lerp(.85,It%2===0?.2:.95,Ke),Ki=X.lerp(.95,It%2===0?1.45:.45,Ke),ei=X.lerp(1,1.85,Ke);Pt.setXYZ(ks,wi,Ki,ei)}}Dt.needsUpdate=!0,Pt.needsUpdate=!0,Ve.plumeMat.opacity=X.lerp(.32,.65,Ke),U&&(U.offset.x=Pe*.014%1,U.offset.y=Pe*.009%1);for(let It=0;It<fe.length;It++){const ut=fe[It];ut.water.material?.uniforms?.time&&(ut.water.material.uniforms.time.value=Pe*.55)}Be.update(Pe,Ke),it.update(Pe,Ke,Ct)}}}function lM(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.28,"rgba(220, 248, 255, 0.8)"),t.addColorStop(.65,"rgba(130, 210, 255, 0.22)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new xn(o);return n.needsUpdate=!0,n}const rf=lM();function Uu(o,e,t=350){const n=e,i=1/3.5,s=o==="p2",r=new Lt;r.name=`${o}_Urban_AV_Traffic_System`;const a=(s?.0068:.0033)*i,l=new hn(a*.55,a*.34,a*1.85),c=new He({color:1580068,roughness:.38,metalness:.85}),h=new Mt(l,c,t),u=new hn(a*.58,a*.22,a*.55);u.translate(0,0,a*.92);const d=new dn({color:o==="p4"?new ie(2.1,2.3,2.5):new ie(1.35,1.7,1.88)}),f=new Mt(u,d,t),g=new hn(a*.42,a*.16,a*3.8);g.translate(0,0,-a*2.55);const x=new dn({color:o==="p4"?new ie(3.6,1.25,.25):new ie(1.85,.56,.22),transparent:!0,opacity:.85}),m=new Mt(g,x,t);for(const y of[h,f,m])y.frustumCulled=!1,y.castShadow=!1,y.receiveShadow=!1,y.geometry.boundingSphere=new ui(new b(0,0,0),n*1.28);r.add(h,f,m);const p=[],v=[new b(1,0,0),new b(0,0,1),new b(.707,0,.707),new b(-.707,0,.707)];for(let y=0;y<t;y++){const S=y%2===0,L=.038+y%7/6*.062+H(y,3,7)*.014,N=n+L;if(S){const P=(y>>1)%14,U=s?(.032+P/13*.185+(H(y,1,9)-.5)*.012)*.45:(.035+P*.034+(H(y,1,9)-.5)*.014)*i*1.2/3.2,G=P%2===0?1:-1,B=G*(.085+H(y,5,2)*.11)/Math.max(.04,Math.sin(U))*(s?.48:1/1.5);p.push({type:"ring",radius:N,theta:U,sinTheta:Math.sin(U),cosTheta:Math.cos(U),phi0:H(y,8,4)*Math.PI*2,omega:B,dir:G,bobAmp:(s?.006:.002+H(y,2,6)*.0025)*i,bobPhase:H(y,4,1)*Math.PI*2})}else{const P=y%v.length,U=s?.064*.45:.042*1.15/3.2,G=(Math.floor(y/8)%11-5)*U*i,B=v[P],R=new rt().setFromAxisAngle(B,G);s&&y%3===0&&R.premultiply(new rt().setFromAxisAngle(v[0],-.22*.45));const O=y%4===1?1:-1,j=s?.24*.45:.52*i*1.2/3.2,Q=(H(y,6,3)*2-1)*j,ne=O*(s?.13+H(y,9,5)*.16:(.09+H(y,9,5)*.13)*1.25)*i/4.8;p.push({type:"corridor",radius:N,qPlane:R,s0:Q,arcSpan:j,speed:ne,dir:O,bobAmp:(s?.005:.002+H(y,7,2)*.002)*i,bobPhase:H(y,3,4)*Math.PI*2})}}const M=new b,_=new b,T=new b,w=new b,A=new tt,E=new b;return{update(y){if(!(!r.parent||!r.parent.visible)){for(let S=0;S<t;S++){const C=p[S],L=Math.sin(y*2.2+C.bobPhase)*C.bobAmp,N=C.radius+L;if(C.type==="ring"){const U=C.phi0+C.omega*y,G=Math.cos(U),B=Math.sin(U);_.set(C.sinTheta*G,C.cosTheta,C.sinTheta*B).normalize(),M.copy(_).multiplyScalar(N),T.set(-C.dir*B,0,C.dir*G).normalize(),w.crossVectors(_,T).normalize(),T.crossVectors(w,_).normalize()}else{const U=C.arcSpan*2;let G=(C.s0+C.speed*y+C.arcSpan)%U;G<0&&(G+=U);const B=G-C.arcSpan,R=Math.sin(B),O=Math.cos(B);_.set(R,O,0).applyQuaternion(C.qPlane).normalize(),M.copy(_).multiplyScalar(N),T.set(C.dir*O,-C.dir*R,0).applyQuaternion(C.qPlane).normalize(),w.crossVectors(_,T).normalize()}let P=1;if(C.type==="corridor"){const U=Math.abs(Math.acos(X.clamp(_.y,-1,1)))/C.arcSpan;P=1-X.smoothstep(U,.85,1)}A.makeBasis(w,_,T),A.setPosition(M),P<.99&&(E.setScalar(Math.max(.01,P)),A.scale(E)),h.setMatrixAt(S,A),f.setMatrixAt(S,A),m.setMatrixAt(S,A)}h.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}},group:r}}function cM(o){const e=[],t=[],n=[],i=[],s=[],r=(f,g)=>(f.material&&(f.material.userData=f.material.userData||{},f.material.userData.animatedEmissive=!0),{mesh:f,basePos:f.position.clone(),baseQuat:f.quaternion.clone(),normal:f.position.clone().normalize(),material:f.material,baseEmissive:f.material?.emissiveIntensity??1.5,baseOpacity:f.material?.opacity??1,seed:g});let a=0;o.traverse(f=>{if(!f.isMesh)return;const g=f.name||"";a++,g.startsWith("Hologram_Giant_Koi_ElectricCyan")?e.push(r(f,a)):g.startsWith("Hologram_Giant_Koi_OrangeGold")?t.push(r(f,a)):/HoloSign_|Sign_3D_|CorpPad_NeonRing_/.test(g)?n.push(r(f,a)):/NC_Neon_Sign_/.test(g)?i.push(r(f,a)):/EdgeBeacon|Hexagon_Ring|Hexagon_Spoke|Antenna|Beacon/i.test(g)&&s.push(r(f,a))});const l=f=>{if(f.length===0)return null;const g=new b;for(const m of f)g.add(m.basePos);g.divideScalar(f.length);const x=g.clone().normalize();return{parts:f,centroid:g,localUp:x}},c=[l(e),l(t)].filter(Boolean),h=new rt,u=new rt,d=new b;return{update(f,g=1){c.forEach((x,m)=>{const p=m*2.4,v=Math.sin(f*1.45+p)*1.4,M=Math.sin(f*1.15+p)*.08;for(let _=0;_<x.parts.length;_++){const T=x.parts[_],w=/Tail|Fin/i.test(T.mesh.name),A=Math.sin(f*3.1+p+_*.65)*(w?.14:.045);d.copy(T.basePos).sub(x.centroid),h.setFromAxisAngle(x.localUp,M+A),d.applyQuaternion(h),T.mesh.position.copy(x.centroid).add(d).addScaledVector(x.localUp,v),T.mesh.quaternion.copy(h).multiply(T.baseQuat),T.material&&T.material.emissiveIntensity!==void 0&&(T.material.emissiveIntensity=Math.min(1.9,T.baseEmissive*(.86+.14*Math.sin(f*2.6+_*.7+p))*g))}});for(let x=0;x<n.length;x++){const m=n[x],p=Math.sin(f*1.6+m.seed*.9)*.55;m.mesh.position.copy(m.basePos).addScaledVector(m.normal,p),m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=Math.min(1.9,m.baseEmissive*(.88+.1*Math.sin(f*3.4+m.seed))*g))}for(let x=0;x<i.length;x++){const m=i[x];if(!m.material||m.material.emissiveIntensity===void 0)continue;const p=.88+.1*Math.sin(f*2.2+m.seed*1.7),v=Math.sin(f*23+m.seed*7.3)>.965?.55:1;m.material.emissiveIntensity=Math.min(1.9,m.baseEmissive*p*v*g)}for(let x=0;x<s.length;x++){const m=s[x];m.material&&m.material.emissiveIntensity!==void 0&&(m.material.emissiveIntensity=Math.min(1.85,m.baseEmissive*(.76+.3*Math.sin(f*3.2+m.seed*.8))*g)),/Hexagon_Ring|Hexagon_Spoke/i.test(m.mesh.name)&&(u.setFromAxisAngle(m.normal,f*.35*(x%2===0?1:-1)),m.mesh.quaternion.copy(u).multiply(m.baseQuat))}}}}function hM(o){const e=[];let t=0;return o.traverse(n=>{if(!n.isMesh||!n.material)return;const i=n.name||"";/Senate_Dome_LightRing|Senate_Abyss_LightRing|Senate_Dome_GoldBand|Ceremonial_Pylon_Light|Senate_Avenue_LightStrip/.test(i)&&(t++,n.material.userData=n.material.userData||{},n.material.userData.animatedEmissive=!0,e.push({mesh:n,material:n.material,baseEmissive:n.material.emissiveIntensity??1.5,phase:t*.42}))}),{update(n,i=1){for(let s=0;s<e.length;s++){const r=e[s];if(r.material.emissiveIntensity!==void 0){const a=.78+.36*Math.sin(n*1.9-r.phase);r.material.emissiveIntensity=r.baseEmissive*a*i}}}}}function uM(o){const e=o,t=1/3.5,n=new Lt;n.name="Medieval_Perugius_Living_Atmosphere";const i=90,s=.0022*t,r=new hn(s*.4,s*.32,s*1.8),a=new hn(s*1.9,s*.08,s*.72);a.translate(s*.95,0,0);const l=new hn(s*1.9,s*.08,s*.72);l.translate(-s*.95,0,0);const c=new He({color:14208440,emissive:3877914,emissiveIntensity:.45,roughness:.65}),h=new Mt(r,c,i),u=new Mt(a,c,i),d=new Mt(l,c,i);n.add(h,u,d);const f=[];for(let N=0;N<i;N++){const P=e+(N<55?.145+H(N,2,7)*.09:.035+H(N,4,3)*.06)*t,U=(.025+H(N,5,1)*.24)*t*1.1,G=H(N,8,9)*Math.PI*2,B=(N%3===0?-1:1)*(.28+H(N,3,6)*.28);f.push({alt:P,theta:U,phi0:G,omega:B,dir:B>=0?1:-1,flapSpeed:5.5+H(N,1,5)*3.5,flapPhase:H(N,7,2)*Math.PI*2,scaleFactor:.75+H(N,9,4)*.8})}const g=42,x=new Float32Array(g*3),m=[];for(let N=0;N<g;N++){const P=(.16+H(N,11,2)*.24)*t*1.15,U=H(N,13,5)*Math.PI*2,G=e+(.045+H(N,4,8)*.065)*t;m.push({theta:P,phi0:U,alt:G,speed:.028+H(N,6,3)*.025})}const p=new Et;p.setAttribute("position",new yt(x,3));const v=new ci({map:rf,color:16773340,size:10.5,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),M=new hi(p,v);M.name="Medieval_Drifting_Cloud_Banks",n.add(M);const _=new b,T=new b,w=new b,A=new b,E=new tt,y=new tt,S=new rt,C=new b(0,0,1),L=new b;return{group:n,update(N,P=1){if(!n.parent||!n.parent.visible)return;for(let G=0;G<i;G++){const B=f[G],R=B.phi0+B.omega*N,O=B.theta+Math.sin(N*.6+B.flapPhase)*.008,j=B.alt+Math.sin(N*1.1+B.flapPhase)*.0018,Q=Math.sin(O),ne=Math.cos(O),ye=Math.cos(R),Z=Math.sin(R);T.set(Q*ye,ne,Q*Z).normalize(),_.copy(T).multiplyScalar(j),w.set(-B.dir*Z,0,B.dir*ye).normalize(),A.crossVectors(T,w).normalize(),w.crossVectors(A,T).normalize(),E.makeBasis(A,T,w),E.setPosition(_),L.setScalar(B.scaleFactor),E.scale(L),h.setMatrixAt(G,E);const $=Math.sin(N*.45+B.flapPhase)>-.25?.55:.12,ee=Math.sin(N*B.flapSpeed+B.flapPhase)*$;S.setFromAxisAngle(C,ee),y.makeRotationFromQuaternion(S),y.premultiply(E),u.setMatrixAt(G,y),S.setFromAxisAngle(C,-ee),y.makeRotationFromQuaternion(S),y.premultiply(E),d.setMatrixAt(G,y)}h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const U=p.attributes.position;for(let G=0;G<g;G++){const B=m[G],R=B.phi0+B.speed*N,O=Math.sin(B.theta);U.setXYZ(G,B.alt*O*Math.cos(R),B.alt*Math.cos(B.theta),B.alt*O*Math.sin(R))}U.needsUpdate=!0}}}function us(o,e=1){const t=o.attributes.normal;if(!t)return o;for(let n=0;n<t.count;n++){const i=t.getX(n),s=t.getY(n),r=t.getZ(n),a=Math.hypot(i,s,r);!Number.isFinite(a)||a<1e-4?t.setXYZ(n,0,e,0):Math.abs(a-1)>.001&&t.setXYZ(n,i/a,s/a,r/a)}return t.needsUpdate=!0,o}function is(o,e,t){const n=Math.max(1e-6,o),i=new Si(n,e,4,2);i.rotateX(-Math.PI*.5);const s=i.attributes.position;for(let r=0;r<s.count;r++){const a=X.clamp((s.getX(r)+n*.5)/n,0,1),l=s.getZ(r),c=t*a*n,h=-Math.pow(a,1.35)*e*.85,u=1-Math.pow(a,1.6)*.78,d=Math.sin(a*Math.PI)*e*.14;s.setXYZ(r,c,d,l*u+h)}return i.computeVertexNormals(),us(i,1)}function Fu(o){const e=[],t=new An(o*.34,o*2.6,6);t.rotateX(Math.PI*.5),e.push(t.toNonIndexed());const n=new An(o*.18,o*.9,4);n.rotateX(Math.PI*.42),n.translate(0,o*.2,o*1.15),e.push(n.toNonIndexed());const i=new An(o*.12,o*2.1,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-o*1.85),e.push(i.toNonIndexed());const s=zt(e,!1);return s.computeVertexNormals(),s}function dM(o){const e=[],t=new hn(o*.72,o*.68,o*1.55);t.translate(0,o*.95,0),e.push(t.toNonIndexed());const n=new hn(o*.36,o*.58,o*.68);n.rotateX(.45),n.translate(0,o*1.32,o*.85),e.push(n.toNonIndexed());const i=new hn(o*.92,o*.44,o*.36);i.rotateX(.28),i.translate(0,o*1.54,o*1.15),e.push(i.toNonIndexed());const s=zt(e,!1);s.computeVertexNormals();const r=[],a=new en(o*.1,o*.08,o*.85,5);a.translate(o*.28,-o*.42,0);const l=a.clone();l.translate(-o*.56,0,0),r.push(a.toNonIndexed(),l.toNonIndexed());const c=zt(r,!1);c.computeVertexNormals();const h=c.clone();return{bodyGeo:s,frontLegsGeo:c,backLegsGeo:h}}function fM(o){const e=new Jt(o*.62,12,8,0,Math.PI*2,0,Math.PI*.58);e.scale(1,.75,1),e.computeVertexNormals(),us(e,1);const t=[];for(let i=0;i<4;i++){const s=i/4*Math.PI*2,r=new en(o*.05,o*.012,o*1.45,4);r.translate(Math.cos(s)*o*.22,-o*.72,Math.sin(s)*o*.22),t.push(r.toNonIndexed())}const n=zt(t,!1);return n.computeVertexNormals(),us(n,-1),{bellGeo:e,tentGeo:n}}function or(o){return o.map(e=>{const t=e.index?e.toNonIndexed():e;return t.attributes.uv&&t.deleteAttribute("uv"),t})}function pM(o){const e=o,t=[],n=new Jt(e*.42,12,10);n.scale(.88,.72,2.55),t.push(n);const i=new An(e*.42,e*1.15,8);i.rotateX(Math.PI*.5),i.scale(1.18,.72,1),i.translate(0,e*.03,e*1.15),t.push(i),[-1,1].forEach(h=>{const u=new hn(e*.16,e*.16,e*.92);u.rotateY(h*.12),u.translate(h*e*.24,e*.2,e*.92),t.push(u);const d=new hn(e*1.55,e*.06,e*.48);d.rotateY(-h*.34),d.rotateZ(-h*.1),d.translate(h*e*.85,-e*.12,e*.18),t.push(d)});const s=new An(e*.25,e*1.35,7);s.rotateX(-Math.PI*.5),s.translate(0,0,-e*1.35),t.push(s);const r=new hn(e*1.35,e*.05,e*.44);r.translate(0,e*.02,-e*1.98),t.push(r);const a=zt(or(t),!1);a.computeVertexNormals(),us(a,1);const l=[];[-1,1].forEach(h=>{for(let u=0;u<4;u++){const d=new hn(e*.05,e*.07,e*.22);d.rotateY(h*.08),d.translate(h*(e*.36-u*.04*e),e*.06,e*(.72-u*.42)),l.push(d)}});const c=zt(or(l),!1);return c.computeVertexNormals(),us(c,1),{bodyGeo:a,glowGeo:c}}function mM(o){const e=o,t=[],n=new Jt(e*.24,9,7);n.scale(.85,.72,2),t.push(n);const i=new en(e*.07,e*.14,e*.85,6);i.rotateX(Math.PI*.42),i.translate(0,e*.12,e*.74),t.push(i);const s=new An(e*.09,e*.36,5);s.rotateX(Math.PI*.5),s.translate(0,e*.22,e*1.24),t.push(s);const r=new An(e*.14,e*1.15,6);r.rotateX(-Math.PI*.5),r.translate(0,-e*.02,-e*.95),t.push(r);const a=zt(or(t),!1);a.computeVertexNormals(),us(a,1);const l=[];[-1,1].forEach(h=>{const u=new hn(e*.92,e*.04,e*.28);u.rotateY(-h*.35),u.translate(h*e*.48,-e*.05,e*.24),l.push(u);const d=new hn(e*.62,e*.035,e*.22);d.rotateY(-h*.28),d.translate(h*e*.34,-e*.06,-e*.34),l.push(d)});const c=zt(or(l),!1);return c.computeVertexNormals(),us(c,1),{bodyGeo:a,flipperGeo:c}}function gM(o){const e=o,t=[],n=new An(e*.24,e*.85,5);n.rotateX(Math.PI*.5),n.scale(.55,1,1),n.translate(0,0,e*.15),t.push(n);const i=new An(e*.22,e*.42,4);i.rotateX(-Math.PI*.5),i.scale(.32,1.15,1),i.translate(0,0,-e*.44),t.push(i);const s=zt(or(t),!1);return s.computeVertexNormals(),us(s,1),s}function xM(o,e){const t=o,n=1/3.5,i=new Lt;i.name="Pandora_Bioluminescent_Life";const s=e?.samplerCtx||null,r=s?.qCap,a=s?.sphereLandmarks,l=z=>{const Ne=z.clone().normalize(),Je=Math.abs(Ne.x)<.85?new b(1,0,0):new b(0,0,1),ot=new b().crossVectors(Ne,Je).normalize(),W=new b().crossVectors(Ne,ot).normalize();return{normalDir:Ne,e1:ot,e2:W}},c=2200,h=new Float32Array(c*3),u=new Float32Array(c*3),d=[],f=[new ie(62975),new ie(11553023),new ie(3836159),new ie(16732856)],g=(1+Math.sqrt(5))*.5,x=[];for(let z=0;z<5e3;z++){const Ne=1-(z+.5)/5e3*2,Je=Math.sqrt(Math.max(0,1-Ne*Ne)),ot=2*Math.PI*z/g,W=Math.cos(ot)*Je,ge=Math.sin(ot)*Je,q=si(W,Ne,ge,r,a);q.nation==="forest"&&q.forestFactor>.99&&q.ashFactor<.01&&q.waterFactor<.01&&q.borderMountain<.12&&q.cont>.06&&q.biome!=="lake"&&q.elev>5e-4&&x.push({dir:new b(W,Ne,ge),elev:q.elev,cont:q.cont})}x.length===0&&x.push({dir:bt[0].capDir.clone(),elev:.002,cont:.25});for(let z=0;z<c;z++){let Ne,Je=.002;if(z<550){const ge=bt[z%5],q=l(ge.capDir),be=H(z,7,13)*Math.PI*2,re=Math.sqrt(H(z,3,19))*(.105/3.2);Ne=q.normalDir.clone().addScaledVector(q.e1,Math.cos(be)*re).addScaledVector(q.e2,Math.sin(be)*re).normalize();const Ee=si(Ne.x,Ne.y,Ne.z,r,a,3);if(Ee.nation!=="forest"){const de=x[z%x.length];Ne.copy(de.dir),Je=de.elev}else Je=Ee.elev}else{const ge=x[(z*7+Math.floor(H(z,4,11)*19))%x.length],q=l(ge.dir),be=H(z,2,17)*Math.PI*2,re=H(z,9,5)*(.025/3.2);Ne=q.normalDir.clone().addScaledVector(q.e1,Math.cos(be)*re).addScaledVector(q.e2,Math.sin(be)*re).normalize(),Je=ge.elev}const ot=t+Je+(.005+H(z,5,11)*.19)*n;d.push({dir:Ne,baseAlt:ot,driftSpeed:.025+H(z,2,7)*.035,risePhase:H(z,9,4)*Math.PI*2});const W=f[z%f.length];u[z*3]=W.r,u[z*3+1]=W.g,u[z*3+2]=W.b}const m=new Et;m.setAttribute("position",new yt(h,3)),m.setAttribute("color",new yt(u,3));const p=new ci({size:.72,map:rf,vertexColors:!0,transparent:!0,opacity:.16,depthWrite:!1,blending:Mn,sizeAttenuation:!0}),v=new hi(m,p);v.frustumCulled=!1,i.add(v);const M=90,_=.0054*n,T=new He({color:744312,emissive:55551,emissiveIntensity:.08,roughness:.42}),w=new He({color:43200,emissive:61695,emissiveIntensity:.1,roughness:.38,side:Kt}),A=new He({color:944852,emissive:2132223,emissiveIntensity:.1,roughness:.42,side:Kt});T.userData.animatedEmissive=!0,w.userData.animatedEmissive=!0,A.userData.animatedEmissive=!0;const E=new Mt(Fu(_),T,M),y=new Mt(is(_*2.75,_*1.1,1),w,M),S=new Mt(is(_*2.75,_*1.1,-1),w,M),C=new Mt(is(_*1.65,_*.75,1),A,M),L=new Mt(is(_*1.65,_*.75,-1),A,M);[E,y,S,C,L].forEach(z=>{z.frustumCulled=!1,i.add(z)});const N=[l(bt[0].capDir),l(bt[1].capDir),l(bt[2].capDir)],P=e?.archCenters||[];for(let z=0;z<P.length;z++)P[z]?.normal&&N.push(l(P[z].normal));const U=[];for(let z=0;z<M;z++){const Ne=z<25?0:z<55?1:2,Je=z<60?N[Ne]:N[z%N.length],ot=(.032+H(z,4,1)*.088)*n/3.2,W=t+(.055+H(z,8,5)*.17)*n,ge=(z%3===0?-1:1)*(.4+H(z,6,3)*.34);U.push({frame:Je,orbitRad:ot,alt:W,phi0:H(z,4,2)*Math.PI*2,omega:ge,phase:H(z,3,9)*Math.PI*2,scale:.78+H(z,5,6)*.55})}const G=4,B=.0145*n,R=new He({color:10884618,emissive:16727056,emissiveIntensity:.1,roughness:.4}),O=new He({color:14166542,emissive:16734744,emissiveIntensity:.12,roughness:.4,side:Kt});R.userData.animatedEmissive=!0,O.userData.animatedEmissive=!0;const j=new Mt(Fu(B),R,G),Q=new Mt(is(B*3.1,B*1.25,1),O,G),ne=new Mt(is(B*3.1,B*1.25,-1),O,G),ye=new Mt(is(B*1.85,B*.85,1),O,G),Z=new Mt(is(B*1.85,B*.85,-1),O,G);[j,Q,ne,ye,Z].forEach(z=>{z.frustumCulled=!1,i.add(z)});const pe=[{frame:l(bt[0].capDir),alt:t+.19*n,orbitRad:.11*n/3.2,phi0:.4,omega:.22,phase:0},{frame:l(bt[1].capDir),alt:t+.26*n,orbitRad:.14*n/3.2,phi0:2.1,omega:-.2,phase:1.5},{frame:l(bt[2].capDir),alt:t+.21*n,orbitRad:.12*n/3.2,phi0:3.9,omega:.21,phase:2.7},{frame:l(bt[3].capDir),alt:t+.18*n,orbitRad:.1*n/3.2,phi0:5.1,omega:-.23,phase:.9}],$=48,ee=.0048*n,{bodyGeo:ce,frontLegsGeo:fe,backLegsGeo:ae}=dM(ee),Se=new He({color:3682900,emissive:1990808,emissiveIntensity:0,roughness:.68}),V=new He({color:2499642,roughness:.75});Se.userData.animatedEmissive=!0;const Ie=new Mt(ce,Se,$),k=new Mt(fe,V,$),dt=new Mt(ae,V,$);[Ie,k,dt].forEach(z=>{z.frustumCulled=!1,i.add(z)});const xe=x.filter(z=>z.cont>.08),Ve=xe.length>=6?xe:x,Be=[],it=new b;for(let z=0;z<6;z++){let Ne=null;const Je=(.015+z%3*.004)/3.2,ot=Math.floor(z/6*Ve.length)%Ve.length;for(let W=0;W<Ve.length;W++){const ge=Ve[(ot+W*7)%Ve.length],q=l(ge.dir);let be=!0;for(let re=0;re<8;re++){const Ee=re/8*Math.PI*2;it.copy(q.normalDir).addScaledVector(q.e1,Math.cos(Ee)*Je*1.3).addScaledVector(q.e2,Math.sin(Ee)*Je*1.3).normalize();const de=si(it.x,it.y,it.z,r,a,3);if(de.nation!=="forest"||de.ashFactor>.04||de.biome==="lake"){be=!1;break}}if(be){Ne=q;break}}Be.push({...Ne||l(bt[0].capDir),radOffset:Je,speed:(z%2===0?1:-1)*(.14+z%3*.02)})}const Xe=[];for(let z=0;z<$;z++){const Ne=Be[z%Be.length],Je=Math.floor(z/Be.length);Xe.push({herd:Ne,offsetAng:Je*.78+H(z,2,7)*.35,radialFactor:.52+H(z,5,3)*.65,phase:H(z,9,1)*Math.PI*2,scale:.85+H(z,4,8)*.38})}const F=240,D=.0038*n,{bellGeo:te,tentGeo:_e}=fM(D),le=new He({color:16047359,emissive:12735743,emissiveIntensity:.12,transparent:!0,opacity:.35,roughness:.25,depthWrite:!1,blending:Mn,side:Kt}),ue=new dn({color:new ie(.85,.75,1.05),transparent:!0,opacity:.28,depthWrite:!1,blending:Mn});le.userData.animatedEmissive=!0,ue.userData.animatedEmissive=!0;const Le=new Mt(te,le,F),Me=new Mt(_e,ue,F);Le.frustumCulled=!1,Me.frustumCulled=!1,i.add(Le,Me);const ke=[];for(let z=0;z<F;z++){let Ne,Je,ot;if(z<75){const W=z<45?bt[3]:bt[0];Ne=l(W.capDir);const ge=H(z,3,15)*Math.PI*2,q=Math.sqrt(H(z,6,11))*(.075/3.2);Je=Ne.normalDir.clone().addScaledVector(Ne.e1,Math.cos(ge)*q).addScaledVector(Ne.e2,Math.sin(ge)*q).normalize(),ot=jr(Je.x,Je.y,Je.z,0,s)}else{const W=x[(z*11+Math.floor(H(z,2,13)*13))%x.length];Je=W.dir,Ne=l(Je),ot=W.elev}ke.push({frame:Ne,alt:t+ot+(.015+H(z,9,7)*.068)*n,phase:H(z,2,5)*Math.PI*2,scale:.72+H(z,8,3)*.78})}const gt=bt[6],Ae=l(gt.capDir),Oe=[];for(let z=0;z<1200;z++){const Ne=H(z,11,29)*Math.PI*2,Je=Math.sqrt(H(z,17,7))*(.14/3.2),ot=Ae.normalDir.clone().addScaledVector(Ae.e1,Math.cos(Ne)*Je).addScaledVector(Ae.e2,Math.sin(Ne)*Je).normalize(),W=si(ot.x,ot.y,ot.z,r,a,3);W.nation==="water"&&W.waterFactor>.92&&W.elev<-.045&&Oe.push({dir:ot,elev:W.elev})}Oe.length===0&&Oe.push({dir:Ae.normalDir.clone(),elev:-.095});const nt=5,at=.0145*n,{bodyGeo:Ye,glowGeo:pt}=pM(at),lt=new He({color:2508894,roughness:.42,metalness:.14}),xt=new He({color:5826815,emissive:61695,emissiveIntensity:.06,roughness:.3});xt.userData.animatedEmissive=!0;const K=new Mt(Ye,lt,nt),Re=new Mt(pt,xt,nt);K.frustumCulled=!1,Re.frustumCulled=!1,i.add(K,Re);const me=[];for(let z=0;z<nt;z++){const Ne=Oe[Math.floor(z/nt*Oe.length)%Oe.length];me.push({frame:l(Ne.dir),orbitRad:(.055+H(z,3,19)*.065)/3.2,depthRatio:.45+H(z,8,13)*.25,phi0:H(z,5,23)*Math.PI*2,omega:(z%2===0?1:-1)*(.11+H(z,2,17)*.06),phase:H(z,7,11)*Math.PI*2,scale:.85+H(z,9,4)*.42})}const ve=24,Fe=.0056*n,{bodyGeo:Ge,flipperGeo:je}=mM(Fe),Nt=new He({color:1465976,emissive:51455,emissiveIntensity:.06,roughness:.35}),Ft=new He({color:2132126,emissive:2424800,emissiveIntensity:.06,roughness:.38});Nt.userData.animatedEmissive=!0,Ft.userData.animatedEmissive=!0;const ft=new Mt(Ge,Nt,ve),ln=new Mt(je,Ft,ve);ft.frustumCulled=!1,ln.frustumCulled=!1,i.add(ft,ln);const un=[];for(let z=0;z<ve;z++){const Ne=Oe[(z*19+3)%Oe.length];un.push({frame:l(Ne.dir),orbitRad:(.025+H(z,4,29)*.038)/3.2,phi0:H(z,12,5)*Math.PI*2,omega:(z%2===0?1:-1)*(.28+H(z,6,17)*.14),phase:H(z,8,21)*Math.PI*2,scale:.78+H(z,3,14)*.48})}const fn=450,ct=9,Zt=.002*n,_n=gM(Zt),Sn=new He({color:16777215,emissive:3201279,emissiveIntensity:.08,roughness:.28});Sn.userData.animatedEmissive=!0;const Tt=new Mt(_n,Sn,fn);Tt.frustumCulled=!1;const pn=[new ie(2683647),new ie(16757816),new ie(16735912),new ie(6619064),new ie(6728447)];for(let z=0;z<fn;z++)Tt.setColorAt(z,pn[Math.floor(H(z,15,3)*pn.length)%pn.length]);Tt.instanceColor&&(Tt.instanceColor.needsUpdate=!0),i.add(Tt);const rn=[];for(let z=0;z<ct;z++){const Ne=Oe[(z*47+7)%Oe.length];rn.push({frame:l(Ne.dir),orbitRad:(.022+H(z,9,13)*.035)/3.2,omega:(z%2===0?1:-1)*(.22+H(z,2,19)*.12),phi0:H(z,6,31)*Math.PI*2,phase:H(z,14,7)*Math.PI*2,centerDir:new b,centerAlt:t-.035,aheadDir:new b,tangentForward:new b,tangentRight:new b})}const cn=[];for(let z=0;z<fn;z++)cn.push({schoolIdx:z%ct,localAng:H(z,4,17)*Math.PI*2,localRad:(.0025+H(z,9,23)*.011)*(.5+.5*(z%3))/3.2,vertOff:(H(z,13,5)-.5)*.018,phase:H(z,21,11)*Math.PI*2,scale:.72+H(z,7,19)*.65});const qt=new b,$t=new b,Ot=new b,Ut=new b,_t=new b,I=new tt,Y=new tt,oe=new rt,he=new rt,J=new b(1,0,0),Ce=new b(0,0,1),De=new b,Qe=new b(0,1,0);new b;const et=(z,Ne,Je,ot,W,ge,q,be,re,Ee,de,se)=>{Ot.copy(q).normalize(),Ut.copy(be).sub(q),Ut.lengthSq()<1e-12&&Ut.set(1,0,0),Ut.normalize(),_t.crossVectors(Ot,Ut).normalize(),Ut.crossVectors(_t,Ot).normalize(),I.makeBasis(_t,Ot,Ut),he.setFromAxisAngle(Ce,se),Y.makeRotationFromQuaternion(he),I.multiply(Y),I.setPosition(q),De.setScalar(de),I.scale(De),Ne.setMatrixAt(z,I),oe.setFromAxisAngle(Ce,re),Y.makeRotationFromQuaternion(oe),Y.premultiply(I),Je.setMatrixAt(z,Y),oe.setFromAxisAngle(Ce,-re),Y.makeRotationFromQuaternion(oe),Y.premultiply(I),ot.setMatrixAt(z,Y),oe.setFromAxisAngle(Ce,Ee),Y.makeRotationFromQuaternion(oe),Y.setPosition(0,0,-_*.72),Y.premultiply(I),W.setMatrixAt(z,Y),oe.setFromAxisAngle(Ce,-Ee),Y.makeRotationFromQuaternion(oe),Y.setPosition(0,0,-_*.72),Y.premultiply(I),ge.setMatrixAt(z,Y)},st=(z,Ne,Je)=>{const ot=z.phi0+z.omega*Ne,W=z.orbitRad+Math.sin(Ne*.8+z.phase)*(.008/3.2)*n,ge=z.alt+Math.sin(Ne*1.15+z.phase)*.006*n;Je.copy(z.frame.normalDir).addScaledVector(z.frame.e1,Math.cos(ot)*W).addScaledVector(z.frame.e2,Math.sin(ot)*W).normalize().multiplyScalar(ge)};return{group:i,update(z,Ne=1,Je=.5,ot=0){if(!i.parent||!i.parent.visible)return;const W=X.smoothstep(-Je,-.1,.04);e?.updateDayNight&&e.updateDayNight(Je,z,ot);const ge=m.attributes.position;for(let de=0;de<c;de++){const se=d[de],Ze=(se.risePhase+z*se.driftSpeed*3)%1*.015,$e=se.baseAlt+Ze,Yt=Math.sin(z*.65+se.risePhase)*.0022;ge.setXYZ(de,se.dir.x*$e+Yt,se.dir.y*$e,se.dir.z*$e+Yt)}ge.needsUpdate=!0,p.opacity=X.lerp(.14,.92,W);for(let de=0;de<M;de++){const se=U[de];st(se,z,qt),st(se,z+.05,$t);const Ze=Math.sin(z*.65+se.phase)>-.2?.46:.1,$e=Math.sin(z*4.9+se.phase)*Ze,Yt=Math.sin(z*4.9+se.phase-.85)*Ze*.82,we=se.omega>0?-.32:.32;et(de,E,y,S,C,L,qt,$t,$e,Yt,se.scale,we)}E.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0,L.instanceMatrix.needsUpdate=!0,T.emissiveIntensity=X.lerp(.06,1.45,W),w.emissiveIntensity=X.lerp(.08,1.85,W),A.emissiveIntensity=X.lerp(.08,1.65,W);for(let de=0;de<G;de++){const se=pe[de];st(se,z,qt),st(se,z+.08,$t);const Ze=Math.sin(z*2.5+se.phase)*.42,$e=Math.sin(z*2.5+se.phase-.9)*.35;et(de,j,Q,ne,ye,Z,qt,$t,Ze,$e,1,se.omega>0?-.25:.25)}j.instanceMatrix.needsUpdate=!0,Q.instanceMatrix.needsUpdate=!0,ne.instanceMatrix.needsUpdate=!0,ye.instanceMatrix.needsUpdate=!0,Z.instanceMatrix.needsUpdate=!0,R.emissiveIntensity=X.lerp(.08,1.9,W),O.emissiveIntensity=X.lerp(.1,2.15,W);const q=(de,se,Ze,$e)=>{const Yt=de.offsetAng+de.herd.speed*se,we=de.herd.radOffset*de.radialFactor;$e.copy(de.herd.normalDir).addScaledVector(de.herd.e1,Math.cos(Yt)*we).addScaledVector(de.herd.e2,Math.sin(Yt)*we).normalize();const Pe=jr($e.x,$e.y,$e.z,0,s);Ze.copy($e).multiplyScalar(t+Pe)},be=new b;for(let de=0;de<$;de++){const se=Xe[de];q(se,z,qt,Ot),q(se,z+.08,$t,be),Ut.copy($t).sub(qt).normalize(),_t.crossVectors(Ot,Ut).normalize(),Ut.crossVectors(_t,Ot).normalize(),I.makeBasis(_t,Ot,Ut),I.setPosition(qt),De.setScalar(se.scale),I.scale(De),Ie.setMatrixAt(de,I);const Ze=Math.sin(z*4.5+se.phase)*.42;oe.setFromAxisAngle(J,Ze),Y.makeRotationFromQuaternion(oe),Y.setPosition(0,ee*.72,ee*.52),Y.premultiply(I),k.setMatrixAt(de,Y),oe.setFromAxisAngle(J,-Ze),Y.makeRotationFromQuaternion(oe),Y.setPosition(0,ee*.72,-ee*.56),Y.premultiply(I),dt.setMatrixAt(de,Y)}Ie.instanceMatrix.needsUpdate=!0,k.instanceMatrix.needsUpdate=!0,dt.instanceMatrix.needsUpdate=!0,Se.emissiveIntensity=X.lerp(0,.95,W);for(let de=0;de<F;de++){const se=ke[de],Ze=Math.sin(z*1.15+se.phase)*.0045*n,$e=Math.cos(z*.45+se.phase)*(.004/3.2)*n,Yt=Math.sin(z*.35+se.phase)*(.004/3.2)*n;Ot.copy(se.frame.normalDir).addScaledVector(se.frame.e1,$e).addScaledVector(se.frame.e2,Yt).normalize(),qt.copy(Ot).multiplyScalar(se.alt+Ze);const we=1+Math.sin(z*2.8+se.phase)*.16;ht(I,qt,Ot,se.scale*we,se.scale/Math.sqrt(we)),Le.setMatrixAt(de,I),ht(I,qt,Ot,se.scale,se.scale*(1+Math.sin(z*2.8+se.phase)*.08)),Me.setMatrixAt(de,I)}Le.instanceMatrix.needsUpdate=!0,Me.instanceMatrix.needsUpdate=!0,le.opacity=X.lerp(.32,.82,W),le.emissiveIntensity=X.lerp(.08,2.35,W),ue.opacity=X.lerp(.24,.65,W),ue.color.setRGB(X.lerp(.85,1.4,W),X.lerp(.88,.85,W),X.lerp(.96,2.2,W));const re=(de,se,Ze,$e,Yt,we,Pe,Ct,Ke,At)=>{const Dt=Ze+$e*Ct;At.copy(de.normalDir).addScaledVector(de.e1,Math.cos(Dt)*se).addScaledVector(de.e2,Math.sin(Dt)*se).normalize();const Pt=jr(At.x,At.y,At.z,0,s),Gt=Math.min(Pe-.004,Pt+we),mn=X.lerp(Gt,Pe,Yt);Ke.copy(At).multiplyScalar(t+mn)},Ee=new b;for(let de=0;de<nt;de++){const se=me[de];re(se.frame,se.orbitRad,se.phi0,se.omega,se.depthRatio,.015,-.016,z,qt,Ot),re(se.frame,se.orbitRad,se.phi0,se.omega,se.depthRatio,.015,-.016,z+.14,$t,Ee),Ut.copy($t).sub(qt),Ut.lengthSq()<1e-12&&Ut.set(1,0,0),Ut.normalize(),_t.crossVectors(Ot,Ut).normalize(),Ut.crossVectors(_t,Ot).normalize();const Ze=Math.sin(z*1.15+se.phase)*.06;oe.setFromAxisAngle(J,Ze),I.makeBasis(_t,Ot,Ut),I.setPosition(qt),De.setScalar(se.scale),I.scale(De),Y.makeRotationFromQuaternion(oe),I.multiply(Y),K.setMatrixAt(de,I),Re.setMatrixAt(de,I)}K.instanceMatrix.needsUpdate=!0,Re.instanceMatrix.needsUpdate=!0,xt.emissiveIntensity=X.lerp(.06,1.85,W);for(let de=0;de<ve;de++){const se=un[de],Ze=.55+Math.sin(z*.75+se.phase)*.25;re(se.frame,se.orbitRad,se.phi0,se.omega,Ze,.008,-.01,z,qt,Ot),re(se.frame,se.orbitRad,se.phi0,se.omega,Ze,.008,-.01,z+.07,$t,Ee),Ut.copy($t).sub(qt),Ut.lengthSq()<1e-12&&Ut.set(1,0,0),Ut.normalize(),_t.crossVectors(Ot,Ut).normalize(),Ut.crossVectors(_t,Ot).normalize(),I.makeBasis(_t,Ot,Ut),I.setPosition(qt),De.setScalar(se.scale),I.scale(De),ft.setMatrixAt(de,I);const $e=Math.sin(z*5.4+se.phase)*.42;oe.setFromAxisAngle(Ce,$e),Y.makeRotationFromQuaternion(oe),Y.premultiply(I),ln.setMatrixAt(de,Y)}ft.instanceMatrix.needsUpdate=!0,ln.instanceMatrix.needsUpdate=!0,Nt.emissiveIntensity=X.lerp(.06,1.35,W),Ft.emissiveIntensity=X.lerp(.08,1.75,W);for(let de=0;de<ct;de++){const se=rn[de],Ze=se.phi0+se.omega*z,$e=se.phi0+se.omega*(z+.06);se.centerDir.copy(se.frame.normalDir).addScaledVector(se.frame.e1,Math.cos(Ze)*se.orbitRad).addScaledVector(se.frame.e2,Math.sin(Ze)*se.orbitRad).normalize(),se.aheadDir.copy(se.frame.normalDir).addScaledVector(se.frame.e1,Math.cos($e)*se.orbitRad).addScaledVector(se.frame.e2,Math.sin($e)*se.orbitRad).normalize();const Yt=jr(se.centerDir.x,se.centerDir.y,se.centerDir.z,0,s),we=Math.min(-.022,Yt+.01),Pe=X.lerp(we,-.018,.48+.25*Math.sin(z*.65+se.phase));se.centerAlt=t+Pe,se.tangentForward.copy(se.aheadDir).sub(se.centerDir),se.tangentForward.lengthSq()<1e-12&&se.tangentForward.set(1,0,0),se.tangentForward.normalize(),se.tangentRight.crossVectors(se.centerDir,se.tangentForward).normalize(),se.tangentForward.crossVectors(se.tangentRight,se.centerDir).normalize()}for(let de=0;de<fn;de++){const se=cn[de],Ze=rn[se.schoolIdx],$e=se.localAng+z*1.15,Yt=Math.sin(z*3.4+se.phase)*.0024;Ot.copy(Ze.centerDir).addScaledVector(Ze.tangentRight,Math.cos($e)*se.localRad).addScaledVector(Ze.tangentForward,Math.sin($e)*se.localRad).normalize();const we=Math.min(t-.008,Ze.centerAlt+se.vertOff+Yt);qt.copy(Ot).multiplyScalar(we);const Pe=Math.sin(z*8.5+se.phase)*.14;oe.setFromAxisAngle(J,0),Ut.copy(Ze.tangentForward).addScaledVector(Ze.tangentRight,Pe).normalize(),_t.crossVectors(Ot,Ut).normalize(),Ut.crossVectors(_t,Ot).normalize(),I.makeBasis(_t,Ot,Ut),I.setPosition(qt),De.setScalar(se.scale),I.scale(De),Tt.setMatrixAt(de,I)}Tt.instanceMatrix.needsUpdate=!0,Sn.emissiveIntensity=X.lerp(.08,1.65,W)}};function ht(z,Ne,Je,ot,W){oe.setFromUnitVectors(Qe,Je),De.set(ot,W,ot),z.compose(Ne,oe,De)}}const yn=157.5,gi=4.8,Kr=62,ss=.72,Ml=1/3.5,_M=3,Ou=.88,vM=35e3,yM=36e3,MM=3500,bM=1200,Bu=X.degToRad(68),Zr=new b(0,Math.cos(Bu),Math.sin(Bu)).normalize(),SM={p1:{id:"p1",navKey:"6",name:"Planeta 1 · Pandora (Bioluminiscente)",spinnerName:"OrbitSpinner_P1",rootName:"Planet_01_Desert_Tatooine_Root",bodyName:"Planet_01_Desert_Body",semiMajorAxis:55.2,eccentricity:.045,orbitOmega:.0028,localRadius:6.336,groundFloorAlt:1.65,kmScale:27840,rotationSpeed:.014,axialOmega:.015,axialTiltX:X.degToRad(6),axialTiltZ:X.degToRad(21),initialSpinAngle:-.95,capLocalDir:Zr,landable:!0,hasProceduralWorld:!0,fogColor:5944012,maxFogDensity:.0036,skyColor:2523838,particleColor:10417919,glowCss:"rgba(0, 235, 255, 0.45)",lowOrbitOffset:new b(0,6.336*2.25,6.336*.85),lowOrbitLookAt:new b(0,6.336,0),highCloudOffset:new b(-.08,6.336*1.48,6.336*.36),aerialOffset:new b(-.025,6.336+.072,.095),aerialLookAt:new b(.028,6.336+.048,-.022),sunColor:16773332,sunIntensity:2.85,ambientColor:2377264,ambientIntensity:.92,hemiSkyColor:6469887,hemiGroundColor:1985064,hemiIntensity:1.45,localLightColor:61695,localBounceColor:12073215,bloomStrength:.54,skyDome:{zenith:1866720,mid:5420780,horizon:9365738,sunGlow:16773320,zenithAlpha:.92,starFloor:0}},p2:{id:"p2",navKey:"5",name:"Planeta 2 · Night City (Cyberpunk)",spinnerName:"OrbitSpinner_P2",rootName:"Planet_02_Cyberpunk_Root",bodyName:"Planet_02_Cyberpunk_Body",semiMajorAxis:88.8,eccentricity:.035,orbitOmega:.00137,localRadius:6.816,groundFloorAlt:.32,minSpeed:3.2,glbLocalScale:.0038*Ml*3.8,kmScale:29760,rotationSpeed:.011,axialOmega:.012,axialTiltX:X.degToRad(-5),axialTiltZ:X.degToRad(18.5),initialSpinAngle:-.62,capLocalDir:Zr,landable:!0,surfaceUrl:"/models/cyberpunk_city.glb",fogColor:333346,maxFogDensity:.0044,skyColor:199188,particleColor:58879,glowCss:"rgba(0, 210, 255, 0.45)",lowOrbitOffset:new b(0,6.816*2.25,6.816*.85),lowOrbitLookAt:new b(0,6.816,0),highCloudOffset:new b(-.06,6.816*1.48,6.816*.36),aerialOffset:new b(-.012,6.816+.145,.195),aerialLookAt:new b(.005,6.816+.175,-.055),sunColor:2782886,sunIntensity:1.15,ambientColor:664116,ambientIntensity:1.38,hemiSkyColor:799822,hemiGroundColor:3279404,hemiIntensity:1.75,localLightColor:55551,localBounceColor:16721040,bloomStrength:.48,skyDome:{zenith:134170,mid:533048,horizon:1066082,sunGlow:16722581,zenithAlpha:.68,starFloor:.35}},p3:{id:"p3",navKey:"3",name:"Planeta 3 · Mundo Medieval (Perugius)",spinnerName:"OrbitSpinner_P3",rootName:"Planet_03_Medieval_Root",bodyName:"Planet_03_Medieval_Body",semiMajorAxis:127.2,eccentricity:.05,orbitOmega:797e-6,localRadius:7.296,groundFloorAlt:.95,glbLocalScale:.004*Ml,kmScale:32640,rotationSpeed:.01,axialOmega:.011,axialTiltX:X.degToRad(8),axialTiltZ:X.degToRad(-23.5),initialSpinAngle:-1.18,capLocalDir:Zr,landable:!0,surfaceUrl:"/models/medieval_world.glb",fogColor:13929026,maxFogDensity:.0026,skyColor:8559544,particleColor:16764792,glowCss:"rgba(255, 185, 85, 0.45)",lowOrbitOffset:new b(-.32,7.296*2.25,7.296*.85),lowOrbitLookAt:new b(0,7.296,0),highCloudOffset:new b(-.18,7.296*1.48,7.296*.36),aerialOffset:new b(-.025,7.296+.08,.092),aerialLookAt:new b(.003,7.296+.054,-.002),sunColor:16764808,sunIntensity:3.15,ambientColor:7099454,ambientIntensity:1.55,hemiSkyColor:16763e3,hemiGroundColor:2507808,hemiIntensity:1.8,localLightColor:16759392,localBounceColor:4749880,bloomStrength:.42,skyDome:{zenith:1993440,mid:6468863,horizon:16764808,sunGlow:16773312,zenithAlpha:1,starFloor:0}},p4:{id:"p4",navKey:"4",name:"Planeta 4 · Coruscant (Senado)",spinnerName:"OrbitSpinner_P4",rootName:"Planet_04_Ecumenopolis_Root",bodyName:"Planet_04_Ecumenopolis_Body",semiMajorAxis:170.4,eccentricity:.04,orbitOmega:516e-6,localRadius:7.776,groundFloorAlt:.95,glbLocalScale:.0039*Ml,kmScale:36e3,rotationSpeed:.009,axialOmega:.01,axialTiltX:X.degToRad(-6),axialTiltZ:X.degToRad(24),initialSpinAngle:-.88,capLocalDir:Zr,landable:!0,surfaceUrl:"/models/coruscant.glb",fogColor:12998690,maxFogDensity:.0025,skyColor:4463114,particleColor:16749645,glowCss:"rgba(255, 130, 55, 0.45)",lowOrbitOffset:new b(0,7.776*2.25,7.776*.85),lowOrbitLookAt:new b(0,7.776,0),highCloudOffset:new b(.08,7.776*1.48,7.776*.36),aerialOffset:new b(0,7.776+.042,.102),aerialLookAt:new b(0,7.776+.011,-.016),sunColor:16752724,sunIntensity:2.75,ambientColor:6040598,ambientIntensity:1.55,hemiSkyColor:16750664,hemiGroundColor:6171152,hemiIntensity:1.85,localLightColor:16747576,localBounceColor:16758876,bloomStrength:.52,skyDome:{zenith:3872782,mid:9190168,horizon:16024630,sunGlow:16763e3,zenithAlpha:.95,starFloor:.06}},p5:{id:"p5",navKey:null,name:"Planeta 5 · Gigante Gaseoso / Anillos",spinnerName:"OrbitSpinner_P5",rootName:"Planet_05_Pandora_Root",bodyName:"Planet_05_Pandora_Body",semiMajorAxis:220.8,eccentricity:.06,orbitOmega:352e-6,localRadius:8.88,groundFloorAlt:2,kmScale:56640,rotationSpeed:.05,axialOmega:.024,axialTiltX:X.degToRad(7),axialTiltZ:X.degToRad(26),initialSpinAngle:0,landable:!1}};class wM{constructor({scene:e,camera:t,renderer:n,controls:i,starfield:s,cockpitParticles:r,bloomPass:a,ssaoPass:l,radialBlurPass:c,onStatusUpdate:h}){this.scene=e,this.camera=t,this.renderer=n||null,this.controls=i,this.starfield=s,this.cockpitParticles=r,this.bloomPass=a,this.ssaoPass=l||null,this.radialBlurPass=c||null,this.onStatusUpdate=h||(()=>{}),this.dracoLoader=new hy,this.dracoLoader.setDecoderPath("/draco/"),this.dracoLoader.preload(),this.gltfLoader=new Pv,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.modelCache=new Map,this.orbitalGroup=new Lt,this.orbitalGroup.name="Continuous_Solar_System_Container",this.orbitalGroup.scale.setScalar(yn),this.scene.add(this.orbitalGroup),this.planetNodes=new Map,this.orbitLines=[],this.sunNode=null,this.sunPlasmaUniforms=null,this.crystalPalaceAnchor=null,this.crystalPalaceDetailed=null,this.crystalPalaceLoading=!1,this.mode="ORBIT",this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.lastP2DistrictId="city_center",this.lastP2DistrictName="City Center · Corpo Plaza",this.elapsedTime=0,this.simulationTime=0,this.timeScales=[1,10,60],this.timeScaleIndex=0,this.timeScale=1,this._tmpInvQuat=new rt,this._tmpCapInvQuat=new rt,this._tmpLocalDir=new b,this._tmpRadial=new b,this._tmpSunDir=new b,this._tmpPlanetToSun=new b,this._tmpUp=new b(0,1,0),this._tmpStationPos=new b,this._tmpColorA=new ie,this._tmpColorB=new ie,this._tmpColorC=new ie,this._tmpSkyColor=new ie,this._tmpFogColor=new ie,this._p2Atmo={fogDay:new ie,fogNight:new ie,fogDusk:new ie,hemiSky:new ie,hemiGround:new ie,ambient:new ie,localLight:new ie,localBounce:new ie,fogDensity:.0044,bloomCap:.48},this._identityQuat=new rt,this._tmpCamFwd=new b,this._tmpRayOccl=new b,this._tmpLocalCam=new b,this._tmpIblZenith=new ie(329746),this._tmpIblHorizon=new ie(1319482),this._tmpIblGround=new ie(263692),this._tmpIblSun=new ie(16771264),this.skyDome=Iy(),this.scene.add(this.skyDome);const u=py();this.machConeMesh=u.mesh,this.machConeUniforms=u.uniforms,this.camera.add(this.machConeMesh),this.solarLensflare=null,this.solarLensflareElements=[],this._setupLighting(),this._initIblPipeline()}_initIblPipeline(){if(!this.renderer||typeof this.renderer.getContext!="function"){this.pmremGenerator=null;return}this.pmremGenerator=new fc(this.renderer),this.pmremGenerator.compileEquirectangularShader(),this.envRenderTarget=null,this._lastIblTime=-99,this._lastIblPlanetId=null,this._lastIblSunElev=-9,this._lastIblAltRatio=-9,this.iblScene=new Nc,this.iblUniforms={uZenithColor:{value:new ie(1594024)},uHorizonColor:{value:new ie(7914728)},uGroundColor:{value:new ie(1583132)},uSunDir:{value:new b(.4,.7,.3)},uSunColor:{value:new ie(2.4,2.1,1.6)}};const e=new Jt(20,24,16),t=new on({uniforms:this.iblUniforms,vertexShader:`
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
      `,side:In,depthWrite:!1});this.iblScene.add(new ze(e,t))}_updateDynamicIbl({planetId:e,zenithColor:t,horizonColor:n,groundColor:i,sunDir:s,sunColor:r,sunElev:a,altRatio:l,intensity:c}){if(!this.pmremGenerator||!this.iblScene)return;this.scene.environmentIntensity=c;const h=this.elapsedTime-this._lastIblTime;if(!(e!==this._lastIblPlanetId||Math.abs(a-this._lastIblSunElev)>.06||Math.abs(l-this._lastIblAltRatio)>.08||h>.45))return;this.iblUniforms.uZenithColor.value.copy(t),this.iblUniforms.uHorizonColor.value.copy(n),this.iblUniforms.uGroundColor.value.copy(i),this.iblUniforms.uSunDir.value.copy(s).normalize(),this.iblUniforms.uSunColor.value.copy(r).multiplyScalar(Math.max(.25,c*2.2));const d=this.envRenderTarget;this.envRenderTarget=this.pmremGenerator.fromScene(this.iblScene,.04),this.scene.environment=this.envRenderTarget.texture,d&&d.dispose(),this._lastIblTime=this.elapsedTime,this._lastIblPlanetId=e,this._lastIblSunElev=a,this._lastIblAltRatio=l}_setupLighting(){this.ambientLight=new Yd(1844790,.55),this.scene.add(this.ambientLight),this.hemiLight=new J_(7906528,1053724,.42),this.scene.add(this.hemiLight),this.solarPointLight=new $o(16773328,3.8,0,0),this.solarPointLight.position.set(0,0,0),this.scene.add(this.solarPointLight),this.planetaryDirLight=new Gc(16769712,1.4),this.planetaryDirLight.position.set(-400,600,350),this.planetaryDirLight.castShadow=!1,this.planetaryDirLight.shadow.mapSize.set(2048,2048),this.planetaryDirLight.shadow.camera.near=8,this.planetaryDirLight.shadow.camera.far=520;const e=78;this.planetaryDirLight.shadow.camera.left=-e,this.planetaryDirLight.shadow.camera.right=e,this.planetaryDirLight.shadow.camera.top=e,this.planetaryDirLight.shadow.camera.bottom=-e,this.planetaryDirLight.shadow.bias=-3e-4,this.planetaryDirLight.shadow.normalBias=.02,this.scene.add(this.planetaryDirLight),this.scene.add(this.planetaryDirLight.target),this.localAtmoLight=new $o(16777215,0,280,.35),this.scene.add(this.localAtmoLight),this.localBounceLight=new $o(16777215,0,240,.35),this.scene.add(this.localBounceLight)}_enhanceLuminousSun(e){this.sunNode=e.getObjectByName("Central_Sun_Photosphere");const t=e.getObjectByName("Central_Star_Sun_Root")||this.sunNode;if(!this.sunNode)return;this.sunNode.scale.setScalar(2.72),this.sunPlasmaUniforms={uTime:{value:0},uCoreColor:{value:new b(3.4,2.35,.72)},uHotColor:{value:new b(4,3.1,1.45)},uLimbColor:{value:new b(2.2,.85,.14)}};const n=new on({uniforms:this.sunPlasmaUniforms,vertexShader:`
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
      `,fog:!1});this.sunNode.traverse(x=>{x.isMesh&&(x.material=n)});const i=new on({uniforms:{uColor:{value:new b(2.8,1.35,.35)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,fog:!1,blending:Mn,side:In}),s=new ze(new Jt(2.52*3.2,48,48),i);s.name="Solar_Tight_Corona";const r=document.createElement("canvas");r.width=512,r.height=512;const a=r.getContext("2d");a.clearRect(0,0,512,512);const l=256,c=256,h=a.createRadialGradient(l,c,4,l,c,130);h.addColorStop(0,"rgba(255, 245, 205, 0.72)"),h.addColorStop(.28,"rgba(255, 195, 100, 0.24)"),h.addColorStop(1,"rgba(255, 140, 40, 0.0)"),a.fillStyle=h,a.beginPath(),a.arc(l,c,130,0,Math.PI*2),a.fill(),[0,Math.PI/3,2*Math.PI/3].forEach((x,m)=>{a.save(),a.translate(l,c),a.rotate(x+.18);const p=m===0?242:210,v=a.createLinearGradient(-p,0,p,0);v.addColorStop(0,"rgba(255, 210, 120, 0.0)"),v.addColorStop(.32,"rgba(255, 225, 160, 0.22)"),v.addColorStop(.5,"rgba(255, 250, 225, 0.55)"),v.addColorStop(.68,"rgba(255, 225, 160, 0.22)"),v.addColorStop(1,"rgba(255, 210, 120, 0.0)"),a.fillStyle=v,a.beginPath(),a.ellipse(0,0,p,3.2,0,0,Math.PI*2),a.fill(),a.restore()});const d=new xn(r);d.colorSpace=jt;const f=new kd({map:d,color:16770224,transparent:!0,opacity:.78,depthWrite:!1,fog:!1,blending:Mn}),g=new __(f);g.name="Solar_Diffraction_Rays",g.scale.set(10.8*3.2,10.8*3.2,1),t&&(t.add(s),t.add(g)),this._createSolarLensflare()}_createSolarLensflare(){if(this.solarLensflare||typeof document>"u")return;const e=(r,a)=>{const l=document.createElement("canvas");l.width=r,l.height=r;const c=l.getContext("2d"),h=r*.5;if(a){const d=c.createRadialGradient(h,h,2,h,h,h);d.addColorStop(0,"rgba(255, 252, 240, 0.95)"),d.addColorStop(.18,"rgba(255, 232, 175, 0.52)"),d.addColorStop(.45,"rgba(255, 180, 95, 0.14)"),d.addColorStop(1,"rgba(255, 140, 40, 0.0)"),c.fillStyle=d,c.fillRect(0,0,r,r);const f=c.createLinearGradient(0,h,r,h);f.addColorStop(0,"rgba(180, 225, 255, 0.0)"),f.addColorStop(.5,"rgba(255, 240, 200, 0.42)"),f.addColorStop(1,"rgba(180, 225, 255, 0.0)"),c.fillStyle=f,c.beginPath(),c.ellipse(h,h,h*.96,Math.max(2,r*.025),0,0,Math.PI*2),c.fill()}else{const d=c.createRadialGradient(h,h,h*.45,h,h,h*.96);d.addColorStop(0,"rgba(255, 255, 255, 0.0)"),d.addColorStop(.58,"rgba(165, 215, 255, 0.22)"),d.addColorStop(.82,"rgba(255, 210, 150, 0.28)"),d.addColorStop(1,"rgba(255, 255, 255, 0.0)"),c.fillStyle=d,c.beginPath(),c.arc(h,h,h*.96,0,Math.PI*2),c.fill()}const u=new xn(l);return u.colorSpace=jt,u},t=e(256,!0),n=e(128,!1),i=new sr;i.name="Central_Solar_Lensflare",i.userData.skipSSAO=!0;const s=[{tex:t,size:320,dist:0,hex:16773328},{tex:n,size:78,dist:.34,hex:16769192},{tex:n,size:54,dist:.58,hex:9097471},{tex:n,size:96,dist:.88,hex:16758904}];this.solarLensflareElements=s.map(r=>{const a=new ie(r.hex),l=new Wc(r.tex,r.size,r.dist,a.clone());return l.baseColor=a,i.addElement(l),l}),i.position.set(0,0,0),this.scene.add(i),this.solarLensflare=i}setRenderer(e){this.renderer=e||null,this.pmremGenerator||this._initIblPipeline()}_hideAllReflectiveWaters(e=null){for(const[,t]of this.planetNodes)if(!(t===e||!t.reflectiveWaters))for(const n of t.reflectiveWaters)n.water&&(n.water.visible=!1)}_updateReflectiveWaters(e,t,n,i){if(!e||!e.reflectiveWaters||!e.reflectiveWaters.length)return;if(!t){for(const a of e.reflectiveWaters)a.water&&(a.water.visible=!1);return}e.surfaceCapGroup.updateMatrixWorld();let s=null,r=57600;for(const a of e.reflectiveWaters){if(!a.water)continue;if(a.isOceanSurface&&n>.06){a.water.visible=!1;continue}this._tmpStationPos.copy(a.centerLocal).applyMatrix4(e.surfaceCapGroup.matrixWorld);const l=this._tmpStationPos.distanceToSquared(this.camera.position);l<r&&(r=l,s=a)}for(const a of e.reflectiveWaters){if(!a.water)continue;const l=a===s;if(a.water.visible=l,l&&a.water.material?.uniforms){const c=a.water.material.uniforms;c.eye&&c.eye.value.copy(this.camera.position),c.sunDirection&&c.sunDirection.value.copy(i).normalize(),c.sunColor&&c.sunColor.value.copy(this.planetaryDirLight.color)}}}_updateSolarLensflare(e,t,n,i,s){if(!this.solarLensflare||!this.solarLensflareElements.length)return;const r=this.camera.position.lengthSq();if(r<25||t){this.solarLensflare.visible=!1;return}const a=Math.sqrt(r);this._tmpRayOccl.copy(this.camera.position).negate().multiplyScalar(1/a);let l=1;for(const[,c]of this.planetNodes){const h=this._tmpStationPos.copy(c.currWorldPos).sub(this.camera.position),u=h.dot(this._tmpRayOccl);if(u>0&&u<a){const d=Math.max(0,h.lengthSq()-u*u),f=c.config.localRadius*yn;if(d<f*f){l=0;break}else if(d<f*f*1.08){const g=Math.sqrt(d)/f;l=Math.min(l,X.smoothstep(g,1,1.04))}}}if(e&&l>.01){const c=X.smoothstep(n,-.04,.08),h=X.lerp(1,.68,i);l*=c*h*(1-s)}if(l<=.01){this.solarLensflare.visible=!1;return}this.solarLensflare.visible=!0;for(const c of this.solarLensflareElements)c.color&&c.baseColor&&c.color.copy(c.baseColor).multiplyScalar(l)}cycleTimeScale(){return this.timeScaleIndex=(this.timeScaleIndex+1)%this.timeScales.length,this.timeScale=this.timeScales[this.timeScaleIndex],this.timeScale}syncCameraPostFlight(){if(this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position),this.camera.updateMatrixWorld(),yc.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.ssaoPass&&this.ssaoPass.enabled&&this.ssaoPass.ssaoMaterial?.uniforms){const e=this.ssaoPass.ssaoMaterial.uniforms;e.cameraProjectionMatrix&&e.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),e.cameraInverseProjectionMatrix&&e.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse)}(this.localAtmoLight.intensity>.001||this.localBounceLight.intensity>.001)&&(this.localAtmoLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,18),this.localBounceLight.position.copy(this.camera.position).addScaledVector(this._tmpRadial,-8))}async _loadGLB(e){if(this.modelCache.has(e))return this.modelCache.get(e);const n=(await new Promise((i,s)=>{this.gltfLoader.load(e,r=>i(r),void 0,r=>s(r))})).scene;return n.traverse(i=>{if(!i.isMesh)return;i.frustumCulled=!0;const s=Array.isArray(i.material)?i.material:[i.material];for(const r of s)r&&r.emissiveIntensity!==void 0&&r.emissiveIntensity>3.2&&(r.emissiveIntensity=2.2+Math.log10(r.emissiveIntensity)*.85)}),this.modelCache.set(e,n),n}async init(e){e&&e(20,"Cargando Sistema Solar (solar_system.glb)...");const t=await this._loadGLB("/models/solar_system.glb");this.orbitalGroup.add(t),this._enhanceLuminousSun(t),t.traverse(n=>{if(n.isMesh&&(/^Orbit_P/i.test(n.name)||/_Orbit$/i.test(n.name))){n.scale.multiplyScalar(gi);const i=n.material;i&&(i.transparent=!0,i.depthWrite=!1,this.orbitLines.push({mesh:n,material:i,baseOpacity:i.opacity??1}))}}),e&&e(50,"Generando planetas 128×128, Pandora y atmósferas Fresnel...");for(const[n,i]of Object.entries(SM)){const s=t.getObjectByName(i.spinnerName),r=t.getObjectByName(i.rootName),a=t.getObjectByName(i.bodyName);if(!r)continue;const c=new jn().setFromQuaternion(s?s.quaternion:new rt,"YXZ").y||0,h=i.semiMajorAxis,u=i.eccentricity||.04,d=h*(1-u*u)/(1+u*Math.cos(c));r.position.set(d,0,0);const f=[];let g=0;const x={P1_Moon_A_Ghomrassen:"Luna Ghomrassen",P1_Moon_B_Guermessa:"Luna Guermessa",P2_Moon_NeoLuna:"Neo-Luna",P3_Moon_A_Argent:"Luna Argent",P3_Moon_B_Crimson:"Luna Crimson",P4_Moon_Centax_1:"Centax I",P4_Moon_Centax_2:"Centax II",P4_Moon_Centax_3:"Centax III",P5_Moon_1_InnerShepherd:"Pastora Interior",P5_Moon_2_Polyphemus_Minor:"Polyphemus Minor",P5_Moon_3_Eywa_Outpost:"Puesto Eywa"};this.orbitalGroup.updateMatrixWorld(!0),r.children.forEach(E=>{if(E.name.includes("Moon")&&!E.name.endsWith("_Orbit")){E.scale.multiplyScalar(2.6);let y=.08;E.traverse(C=>{if(C.isMesh&&C.material&&(C.material.fog=!1,C.geometry)){C.geometry.boundingSphere||C.geometry.computeBoundingSphere();const L=(C.geometry.boundingSphere?.radius||.5)*Math.max(C.scale.x,C.scale.y,C.scale.z);L>y&&(y=L)}});const S=2.35+g*.48;if(n==="p1"){const C=i.localRadius*(2.35+g*.62),L=C*(.16+g*.08),N=g===0?-1.85:-.78;E.position.set(Math.cos(N)*C,L,Math.sin(N)*C),r.updateMatrixWorld(!0);const P=new b;E.getWorldPosition(P),f.push({index:g,rawName:E.name,name:x[E.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:E,moonRadius:Math.max(20,y*Math.max(E.scale.x,1)*yn),baseRadius:C,angle:N,yOffset:L,speed:.014+g*.008,prevWorldPos:P.clone(),currWorldPos:P.clone(),deltaPos:new b})}else{E.position.multiplyScalar(gi),E.position.length()<i.localRadius*S&&E.position.normalize().multiplyScalar(i.localRadius*S),r.updateMatrixWorld(!0);const C=new b;E.getWorldPosition(C);const L=Math.max(i.localRadius*S*.85,Math.hypot(E.position.x,E.position.z));f.push({index:g,rawName:E.name,name:x[E.name]||`Luna ${n.toUpperCase()}-${g+1}`,node:E,moonRadius:Math.max(20,y*Math.max(E.scale.x,1)*yn),baseRadius:L,angle:Math.atan2(E.position.z,E.position.x),yOffset:E.position.y,speed:.06+g%3*.03,prevWorldPos:C.clone(),currWorldPos:C.clone(),deltaPos:new b})}g++}});const m=new Lt;m.name=`${i.id}_Axial_Tilt`,m.rotation.order="XZY",m.rotation.x=i.axialTiltX||0,m.rotation.z=i.axialTiltZ||0,r.add(m);const p=new Lt;p.name=`${i.id}_Axial_Spin`,p.rotation.y=i.initialSpinAngle||0,m.add(p);let v=null,M=null,_=null;if(i.landable){r.traverse(y=>{y!==r&&y.isMesh&&(y.name.includes("_Body")||y.name.includes("_Atmosphere")||y.name.includes("_Clouds")||y.name.includes("_DarkClouds")||/^Planet_01/i.test(y.name))&&(y.visible=!1)}),v=Ly(i,yn),v.userBaseColors={sunlit:new ie(v.cloudDeckPalette.sunlit),ambient:new ie(v.cloudDeckPalette.ambient),horizon:new ie(v.cloudDeckPalette.horizon)},p.add(v.group),M=v.atmosphere,_=new Lt,_.name=`${i.id}_Cap_Frame`;const E=i.capLocalDir?i.capLocalDir.clone().normalize():new b(0,1,0);_.quaternion.setFromUnitVectors(new b(0,1,0),E),p.add(_)}else{const E=r.children.filter(y=>y!==m&&!y.name.includes("Moon")&&!y.name.includes("_Orbit"));for(const y of E)y.scale.multiplyScalar(gi),p.add(y);M=tf(i,i.localRadius,1.05),p.add(M)}const T=new Lt;T.name=`${i.id}_Atmosphere_Surface_Detail`,T.visible=!1,(_||p).add(T),this.orbitalGroup.updateMatrixWorld(!0);const w=new b;r.getWorldPosition(w);const A=new rt;p.getWorldQuaternion(A),this.planetNodes.set(n,{config:i,spinner:s,root:r,tiltGroup:m,spinGroup:p,capFrame:_,body:a,orbitalBundle:v,atmosphereShell:M,surfaceCapGroup:T,surfaceLoaded:!1,surfaceLoading:!1,surfaceStreaming:null,surfaceTerrainActivated:!1,lastActivatedThisFrame:0,animators:[],nightMaterials:[],orbitAngle:c,spinAngle:i.initialSpinAngle||0,prevWorldPos:w.clone(),currWorldPos:w.clone(),planetDeltaPos:new b,prevSpinWorldQuat:A.clone(),currSpinWorldQuat:A.clone(),spinQuatDelta:new rt,moonOrbits:f})}this.crystalPalaceAnchor=t.getObjectByName("P2_Crystal_Palace_Station_Root"),this.crystalPalaceAnchor&&this.crystalPalaceAnchor.position.set(-2.95*gi,2.15*gi,2.35*gi),this.controls.setPose(new b(0,5600,19800),new b(0,0,0)),e&&e(85,"Precargando Crystal Palace y superficies planetarias..."),this.ensureCrystalPalaceLoaded();for(const n of["p1","p3","p4","p2"])this.ensurePlanetSurfaceLoaded(n);e&&e(100,"Sistema estelar listo.")}async ensureCrystalPalaceLoaded(){if(this.crystalPalaceDetailed||this.crystalPalaceLoading||!this.crystalPalaceAnchor)return this.crystalPalaceDetailed;this.crystalPalaceLoading=!0;try{const e=await this._loadGLB("/models/crystal_palace.glb"),t=e.getObjectByName("Horizon_Planet_Root");t&&(t.visible=!1),this.crystalPalaceAnchor.traverse(n=>{n.isMesh&&(n.visible=!1)}),e.scale.setScalar(.0072),e.position.set(0,0,0),this.crystalPalaceAnchor.add(e),this.crystalPalaceDetailed=e}catch(e){console.error("Error cargando crystal_palace.glb:",e)}finally{this.crystalPalaceLoading=!1}return this.crystalPalaceDetailed}async ensurePlanetSurfaceLoaded(e){const t=this.planetNodes.get(e);if(!t||!t.config.landable||t.surfaceLoaded)return t?.surfacePromise||null;if(t.surfacePromise)return t.surfacePromise;t.surfaceLoading=!0;const n=t.config;return t.surfacePromise=(async()=>{try{if(n.hasProceduralWorld){const s=aM(n);t.surfaceCapGroup.add(s.group),t.pandoraWorld=s,s.terrainSplatUniforms&&(t.splatUniforms=[s.terrainSplatUniforms]),s.reflectiveWaters&&(t.reflectiveWaters=s.reflectiveWaters);const r=xM(n.localRadius,s);t.surfaceCapGroup.add(r.group),t.animators.push(r)}else if(n.surfaceUrl){const s=await this._loadGLB(n.surfaceUrl);if(Uy(s,n.localRadius,n.glbLocalScale,n.id),t.surfaceCapGroup.add(s),s.userData?.splatUniforms?.length&&(t.splatUniforms=[...t.splatUniforms||[],...s.userData.splatUniforms]),n.id==="p2"){this._calibrateNightCityMaterials(s);const r=My(n),a=r.group.getObjectByName("NC_7Districts_Coastal_Terrain");a&&(a.receiveShadow=!0);const l=r.group.getObjectByName("NC_Badlands_Desert_Roads");l&&(l.receiveShadow=!0),r.terrainSplatUniforms&&(t.splatUniforms=[...t.splatUniforms||[],r.terrainSplatUniforms]),r.bayWater&&(t.reflectiveWaters=[{water:r.bayWater,centerLocal:r.bayWater.position.clone(),isOceanSurface:!1}]),t.surfaceCapGroup.add(r.group),t.animators.push(r);const c=Uu(n.id,n.localRadius,350);t.surfaceCapGroup.add(c.group),t.animators.push(c),t.animators.push(cM(s))}else if(n.id==="p4"){const r=Ny(n,1400);t.surfaceCapGroup.add(r);const a=Uu(n.id,n.localRadius,350);t.surfaceCapGroup.add(a.group),t.animators.push(a),t.animators.push(hM(s))}else if(n.id==="p3"){const r=uM(n.localRadius);t.surfaceCapGroup.add(r.group),t.animators.push(r);const a=new Us(n.localRadius*.038,32),l=new Ta(a,{textureWidth:256,textureHeight:256,waterNormals:Pa(),sunDirection:new b(.4,.7,.3).normalize(),sunColor:16764808,waterColor:1465960,distortionScale:.36,size:3.2,clipBias:.002,alpha:.88,fog:!0});l.name="P3_Perugius_Reflective_Water",l.position.set(.035,n.localRadius+.0025,.015),l.rotation.x=-Math.PI*.5,l.visible=!1,t.surfaceCapGroup.add(l),t.reflectiveWaters=[{water:l,centerLocal:l.position.clone(),isOceanSurface:!1}],t.p3Water=l}}const i=new Set;t.surfaceCapGroup.traverse(s=>{if(!s.isMesh&&!s.isInstancedMesh)return;const r=Array.isArray(s.material)?s.material:[s.material];for(const a of r){if(!a||i.has(a)||a.userData?.animatedEmissive)continue;i.add(a),a.emissive&&a.emissiveIntensity!==void 0&&(a.emissiveMap||a.emissive.r>.008||a.emissive.g>.008||a.emissive.b>.008)&&t.nightMaterials.push({material:a,baseEmissive:a.emissiveIntensity,tier:a.userData?.nightTier||"default"})}}),this._buildSurfaceStreamingQueue(t),t.surfaceLoaded=!0}catch(i){console.error(`Error cargando detalle atmosférico de ${e}:`,i)}finally{t.surfaceLoading=!1}})(),t.surfacePromise}_classifySurfaceTier(e,t){const n=/Shanty|Slum|Rancho|MicroWindow|VerticalNeon|Japantown_Neon|Streetlamp|FlaresAndFires|Industrial_Smoke|Abandoned_FerrisWheel|Giant_Ferns|Broadleaf_Shrubs|Flowers_|Mushrooms_|Mossy_Rocks|WaterLilies|Hanging_Vines|Waterfall|Floating_Cinders|Reef_Corals|Giant_Kelp|Underwater_Caustics|Metkayina_Torches|Ash_Bonfires|Volcano_Smoke|HoloSign_|Sign_3D_|EdgeBeacon|Antenna|Beacon|Billboard|Lamp/i,i=/H10_Megablock|Stacked_Container|PortDepot|Charter_Heywood|NorthOak|Pacifica_Skeleton|Bay_Connecting_Bridges|Badlands_Rocks|Oil_Pump|WindTurbine|Greenhouse|Nomad|Desert_Roads|AV_Blimp|Urban_AV_Traffic|TowerBand|Medieval_Life|Geyser|IkranRookery|TreeOfSouls|Metkayina|Ash_Volcano|Giant_Bone|Tribal_Huts|Charred_Trees|Lava_Fissures|VineBridges|Canyon_Spires|Coral_Reefs|Valley_Arch|Inland_Lakes|Canopy_Under|Alien_Palms|Gnarled_Root|Alien_Redwood/i,s=/Terrain|Crystal_Ocean|Rivers|Hometree|HallelujahMountains|Tree_Trunks|Canopy_Tops|NeoMil|NeoKitsch|CityCenter_LightBeams|Procedural_Districts_Terrain/i,r=e.name||"";if(n.test(r))return"micro";if(i.test(r))return"medium";if(s.test(r))return"macro";let a=e.parent;for(;a&&a!==t;){const l=a.name||"";if(n.test(l))return"micro";if(i.test(l)||/Pandora_Life_System|Urban_AV_Traffic|TowerBand/i.test(l))return"medium";a=a.parent}return"macro"}_buildSurfaceStreamingQueue(e){const t=[],n={macro:0,medium:1,micro:2};e.surfaceCapGroup.traverse(i=>{if(i!==e.surfaceCapGroup){if(i.isWater){i.visible=!1;return}if(i.isMesh||i.isInstancedMesh||i.isPoints){const s=this._classifySurfaceTier(i,e.surfaceCapGroup),r=/Terrain|Crystal_Ocean|NeoMil|NeoKitsch|Hometree/i.test(i.name||"");i.visible=!1,t.push({obj:i,tier:s,priority:n[s]*10+(r?0:1),activated:!1,isPandoraTerrain:i.name==="Pandora_Global_Terrain_360"})}else(i.isGroup||i.isObject3D)&&!i.isLight&&(i.visible=!0)}}),t.sort((i,s)=>i.priority-s.priority),e.surfaceStreaming={items:t,totalCount:t.length,macroCount:t.filter(i=>i.tier==="macro").length,mediumCount:t.filter(i=>i.tier==="medium").length,microCount:t.filter(i=>i.tier==="micro").length,compiled:!1,compiling:!1},e.surfaceTerrainActivated=!1,e.lastActivatedThisFrame=0}_updateSurfaceStreaming(e,t,n){e.lastActivatedThisFrame=0;const i=e.surfaceStreaming;if(!e.surfaceLoaded||!i){e.surfaceCapGroup.visible=!1,e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}if(t<=Ou&&!i.compiled&&!i.compiling&&typeof this.renderer?.compileAsync=="function"&&(i.compiling=!0,Promise.resolve(this.renderer.compileAsync(e.surfaceCapGroup,this.camera,this.scene)).catch(()=>{}).finally(()=>{i.compiled=!0,i.compiling=!1})),n>yM||t>Ou){if(e.surfaceCapGroup.visible||e.surfaceTerrainActivated){e.surfaceCapGroup.visible=!1,e.surfaceTerrainActivated=!1;for(let c=0;c<i.items.length;c++){const h=i.items[c];(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1)}}e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}const s=n<=vM&&t<=.86,r=n<=MM,a=n<=bM;if(!s){e.surfaceCapGroup.visible=!1,e.surfaceTerrainActivated=!1;for(let c=0;c<i.items.length;c++){const h=i.items[c];(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1)}e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!0);return}e.surfaceCapGroup.visible=!0;let l=0;for(let c=0;c<i.items.length;c++){const h=i.items[c];if(!(h.tier==="macro"?s:h.tier==="medium"?r:a)){(h.activated||h.obj.visible)&&(h.obj.visible=!1,h.activated=!1,h.isPandoraTerrain&&(e.surfaceTerrainActivated=!1));continue}h.activated||l<_M&&(h.obj.visible=!0,h.activated=!0,l++,h.isPandoraTerrain&&(e.surfaceTerrainActivated=!0))}e.lastActivatedThisFrame=l,e.config.hasProceduralWorld&&e.orbitalBundle?.surfaceMesh&&(e.orbitalBundle.surfaceMesh.visible=!e.surfaceTerrainActivated)}_calibrateNightCityMaterials(e){const t=new Set;e.traverse(n=>{if(n.isLight){n.visible=!1,n.intensity=0;return}if(!n.isMesh)return;const i=/Skyscraper|Tower|Plaza|Arasaka|Militech|Corp|Bridge/i.test(n.name||"");n.castShadow=i,n.receiveShadow=!0;const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s){if(!r||t.has(r)||r.emissiveIntensity===void 0)continue;t.add(r),r.userData=r.userData||{};const a=r.name||"";/Windows_Dense|Windows_Brutal|Windows_High|backboard/i.test(a)?(r.emissive.setHex(11059928),r.emissiveIntensity=.24,r.userData.nightTier="window"):/rib_warm_white/i.test(a)?(r.emissiveIntensity=.27,r.userData.nightTier="window"):/rib_amber_gold|rib_cyan_cold|bridge_cable_glow|bridge_deck_amber/i.test(a)?(r.emissiveIntensity=.82,r.userData.nightTier="accent"):/chimney_flare/i.test(a)?(r.emissiveIntensity=1.78,r.userData.nightTier="hero"):/neon_|Mega_sign_|Mega_hex_motif_|Mega_pad_neon_|Geisha_Billboard|Holo_Koi|Holo_Banner|bridge_beacon_red|MAT_AV_/i.test(a)?(r.emissiveIntensity=/Koi|Geisha|Banner/i.test(a)?1.85:1.62,r.userData.nightTier="hero"):(r.emissiveIntensity=Math.min(.24,r.emissiveIntensity),r.userData.nightTier="window")}})}_showTransitionBanner(e,t,n,i=1500){const s=document.getElementById("hud-transition-banner"),r=document.getElementById("banner-subtitle"),a=document.getElementById("banner-title"),l=document.getElementById("atmosphere-overlay");r&&(r.textContent=e),a&&(a.textContent=t),s&&s.classList.remove("hidden"),l&&(l.style.setProperty("--atmo-glow",n||"rgba(255, 160, 60, 0.45)"),l.classList.add("active")),setTimeout(()=>{s&&s.classList.add("hidden"),l&&l.classList.remove("active")},i)}_highlightActiveNavButton(e){const t=document.querySelectorAll(".nav-btn");t.length!==0&&t.forEach(n=>{n.classList.toggle("active",n.dataset.target===String(e))})}async navigateToTarget(e){if(e&&typeof e=="object")return this._navigateToDescriptor(e);const t=String(e);if(this._highlightActiveNavButton(t),t==="1")return this._flyToSolarSystemOverview(!1);if(t==="2")return this._flyToStation("crystal_palace");const i={3:"p3",4:"p4",5:"p2",6:"p1"}[t];if(!i)return;const s=this.planetNodes.get(i);if(!s)return;await this.ensurePlanetSurfaceLoaded(i),this.orbitalGroup.updateMatrixWorld(!0);const r=new b;s.root.getWorldPosition(r);const a=this.camera.position.distanceTo(r),l=s.config.localRadius*yn,c=l*ss;return a-l>c*1.1?this._flyToPlanetOrbit(i):this._flyToPlanetSurface(i)}async _navigateToDescriptor(e){switch(e.type){case"sun_orbit":return this._flyToSolarSystemOverview(!0);case"station":return this._flyToStation(e.stationId||"crystal_palace");case"planet_orbit":return this._flyToPlanetOrbit(e.planetKey);case"planet_surface":return this._flyToPlanetSurface(e.planetKey,e.landmarkId);case"moon":return this._flyToMoon(e.planetKey,e.moonIndex??0);default:return null}}_flyToSolarSystemOverview(e=!1){const t=e?{targetPos:new b(0,1200,4400),lookAtPos:new b(0,0,0)}:{targetPos:new b(0,6100,21e3),lookAtPos:new b(0,0,0)};this.controls.engageAutopilot({getTargetPose:()=>({targetPos:t.targetPos.clone(),lookAtPos:t.lookAtPos.clone(),upVec:new b(0,1,0)}),duration:3.4})}async _flyToStation(e="crystal_palace"){if(e!=="crystal_palace"||(await this.ensureCrystalPalaceLoaded(),!this.crystalPalaceAnchor))return;this.orbitalGroup.updateMatrixWorld(!0);const t=new b;this.crystalPalaceAnchor.getWorldPosition(t);const n=this.camera.position.distanceTo(t),i=X.clamp(n/3200,2.8,5.2);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const s=new b;this.crystalPalaceAnchor.getWorldPosition(s);const r=s.clone().negate().normalize(),a=new b().crossVectors(new b(0,1,0),r).normalize();return{targetPos:s.clone().addScaledVector(r,62).addScaledVector(a,38).add(new b(0,20,0)),lookAtPos:s,upVec:new b(0,1,0)}},duration:i})}async _flyToPlanetOrbit(e){const t=this.planetNodes.get(e);if(!t)return;const n=t.config;n.landable&&await this.ensurePlanetSurfaceLoaded(e);const i=t.capFrame||t.spinGroup||t.root;this.orbitalGroup.updateMatrixWorld(!0);const s=new b;t.root.getWorldPosition(s);const r=this.camera.position.distanceTo(s),a=X.clamp(r/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>{if(this.orbitalGroup.updateMatrixWorld(!0),!n.landable){const l=new b;t.root.getWorldPosition(l);const c=l.clone().negate().normalize(),h=new b().crossVectors(new b(0,1,0),c).normalize(),u=n.localRadius*yn;return{targetPos:l.clone().addScaledVector(c,u*2.55).addScaledVector(h,u*1.45).add(new b(0,u*1.15,0)),lookAtPos:l,upVec:new b(0,1,0)}}return{targetPos:n.lowOrbitOffset.clone().applyMatrix4(i.matrixWorld),lookAtPos:n.lowOrbitLookAt.clone().applyMatrix4(i.matrixWorld),upVec:new b(0,1,0).transformDirection(i.matrixWorld).normalize()}},duration:a})}async _flyToPlanetSurface(e,t=null){const n=this.planetNodes.get(e);if(!n)return;const i=n.config;if(!i.landable)return this._flyToPlanetOrbit(e);if(await this.ensurePlanetSurfaceLoaded(e),e==="p1"&&t)return this.navigateToPandoraLandmark(t);if(e==="p2"&&t)return this.navigateToNightCityDistrict(t);const s=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const r=new b;n.root.getWorldPosition(r);const a=this.camera.position.distanceTo(r),l=i.localRadius*yn,c=l*ss,h=a-l;if(h>c*1.18){const u=X.clamp(a/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.highCloudOffset.clone().applyMatrix4(s.matrixWorld),lookAtPos:i.lowOrbitLookAt.clone().applyMatrix4(s.matrixWorld),upVec:new b(0,1,0).transformDirection(s.matrixWorld).normalize()}),duration:u,onComplete:()=>{this._engageCloudBreakoutGlide(i,s)}});return}if(h>c*.24){this._engageCloudBreakoutGlide(i,s);return}this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:i.aerialOffset.clone().applyMatrix4(s.matrixWorld),lookAtPos:i.aerialLookAt.clone().applyMatrix4(s.matrixWorld),upVec:new b(0,1,0).transformDirection(s.matrixWorld).normalize()}),duration:2.6})}_engageCloudBreakoutGlide(e,t){this.orbitalGroup.updateMatrixWorld(!0);const n=new tt().copy(t.matrixWorld).invert(),i=this.camera.position.clone().applyMatrix4(n),s=[i];i.distanceTo(e.highCloudOffset)>e.localRadius*.28&&s.push(e.highCloudOffset.clone());const r=e.highCloudOffset.clone().lerp(e.aerialOffset,.55).normalize().multiplyScalar(e.localRadius*(1+ss*.48)),a=e.highCloudOffset.clone().lerp(e.aerialOffset,.82).normalize().multiplyScalar(e.localRadius*(1+ss*.16));s.push(r,a,e.aerialOffset.clone());const l=new Kn(s);this.controls.engageAutopilot({useDirectCurve:!0,duration:8.2,getTargetPose:c=>{this.orbitalGroup.updateMatrixWorld(!0);const h=l.getPoint(c),u=e.aerialLookAt.clone().lerp(e.lowOrbitLookAt,Math.pow(1-c,1.8)*.45),f=l.getPoint(Math.min(1,c+.08)).lerp(u,Math.min(1,c*1.15+.2));return{targetPos:h.applyMatrix4(t.matrixWorld),lookAtPos:f.applyMatrix4(t.matrixWorld),upVec:new b(0,1,0).transformDirection(t.matrixWorld).normalize()}}})}async _flyToMoon(e,t=0){const n=this.planetNodes.get(e),i=n?.moonOrbits?.[t];if(!n||!i)return;this.orbitalGroup.updateMatrixWorld(!0);const s=new b;i.node.getWorldPosition(s);const r=this.camera.position.distanceTo(s),a=X.clamp(r/3400,2.8,5.4),l=Math.max(46,i.moonRadius*4);this.controls.engageAutopilot({getTargetPose:()=>{this.orbitalGroup.updateMatrixWorld(!0);const c=new b;i.node.getWorldPosition(c);const h=c.clone().negate().normalize(),u=new b().crossVectors(new b(0,1,0),h).normalize();return{targetPos:c.clone().addScaledVector(h,l*.72).addScaledVector(u,l*.68).add(new b(0,l*.26,0)),lookAtPos:c,upVec:new b(0,1,0)}},duration:a})}async navigateToPandoraLandmark(e){const t=bt.find(n=>n.id===e);return this._navigateToCapLandmark("p1",t)}async navigateToNightCityDistrict(e){const t=qr[e]||qr.city_center;return this._navigateToCapLandmark("p2",t)}async _navigateToCapLandmark(e,t){const n=this.planetNodes.get(e);if(!t||!n)return;await this.ensurePlanetSurfaceLoaded(e);const i=n.capFrame||n.spinGroup||n.root;this.orbitalGroup.updateMatrixWorld(!0);const s=n.config.localRadius,r=new tt().copy(i.matrixWorld).invert(),a=this.camera.position.clone().applyMatrix4(r),l=t.capDir.clone().normalize(),c=Math.abs(l.y)<.85?new b(0,1,0):new b(1,0,0),h=new b().crossVectors(l,c).normalize(),u=l.clone().multiplyScalar(s+t.viewAlt).addScaledVector(h,-t.viewBack).normalize().multiplyScalar(s+t.viewAlt),d=l.clone().multiplyScalar(s+t.viewAlt*.25);if(a.length()>s*1.88){const y=l.clone().multiplyScalar(s*1.48).addScaledVector(h,-.22),S=new b;n.root.getWorldPosition(S);const C=X.clamp(this.camera.position.distanceTo(S)/3400,2.8,5.4);this.controls.engageAutopilot({getTargetPose:()=>(this.orbitalGroup.updateMatrixWorld(!0),{targetPos:y.clone().applyMatrix4(i.matrixWorld),lookAtPos:l.clone().multiplyScalar(s).applyMatrix4(i.matrixWorld),upVec:l.clone().transformDirection(i.matrixWorld).normalize()}),duration:C,onComplete:()=>{this._navigateToCapLandmark(e,t)}});return}const f=a.clone().normalize(),g=f.angleTo(l),x=Math.min(1.15,g*.65),m=Math.max(3,Math.ceil(g/.35)),p=new rt,v=new rt().setFromUnitVectors(f,l),M=new rt,_=Math.max(s+.05,Math.min(a.length(),s*1.48)),T=s+t.viewAlt,w=[a.clone()];for(let y=1;y<m;y++){const S=y/m;p.copy(M).slerp(v,S);const C=f.clone().applyQuaternion(p).normalize(),L=X.lerp(_,T,S)+Math.sin(S*Math.PI)*x;w.push(C.multiplyScalar(L))}w.push(u);const A=new Kn(w),E=X.clamp(2.2+g*1.5,2.4,5.4);this.controls.engageAutopilot({useDirectCurve:!0,duration:E,getTargetPose:y=>{this.orbitalGroup.updateMatrixWorld(!0);const S=A.getPoint(y),L=A.getPoint(Math.min(1,y+.08)).lerp(d,Math.min(1,y*1.35)),N=S.clone().normalize();return{targetPos:S.applyMatrix4(i.matrixWorld),lookAtPos:L.applyMatrix4(i.matrixWorld),upVec:N.transformDirection(i.matrixWorld).normalize()}}})}_sampleNightCityAtmo(e){const t=this._p2Atmo;t.fogDay.setRGB(0,0,0),t.fogNight.setRGB(0,0,0),t.fogDusk.setRGB(0,0,0),t.hemiSky.setRGB(0,0,0),t.hemiGround.setRGB(0,0,0),t.ambient.setRGB(0,0,0),t.localLight.setRGB(0,0,0),t.localBounce.setRGB(0,0,0);let n=0,i=0;for(const s of uo){const r=e.weights[s.id]||0;if(r<=1e-4)continue;const a=s.atmo;t.fogDay.add(this._tmpColorC.setHex(a.fogDay).multiplyScalar(r)),t.fogNight.add(this._tmpColorC.setHex(a.fogNight).multiplyScalar(r)),t.fogDusk.add(this._tmpColorC.setHex(a.fogDusk).multiplyScalar(r)),t.hemiSky.add(this._tmpColorC.setHex(a.hemiSky).multiplyScalar(r)),t.hemiGround.add(this._tmpColorC.setHex(a.hemiGround).multiplyScalar(r)),t.ambient.add(this._tmpColorC.setHex(a.ambient).multiplyScalar(r)),t.localLight.add(this._tmpColorC.setHex(a.localLight).multiplyScalar(r)),t.localBounce.add(this._tmpColorC.setHex(a.localBounce).multiplyScalar(r)),n+=a.fogDensity*r,i+=a.bloomCap*r}return e.district==="westbrook"&&e.subzone==="north_oak"&&(n*=.48,i=Math.min(i,.4)),t.fogDensity=n,t.bloomCap=i,t}update(e){const t=Math.min(e,.1),n=t*this.timeScale;this.elapsedTime+=t,this.simulationTime+=n,this.sunPlasmaUniforms&&(this.sunPlasmaUniforms.uTime.value=this.elapsedTime),yc.uSunViewPos.value.set(0,0,0).applyMatrix4(this.camera.matrixWorldInverse),this.starfield.position.copy(this.camera.position),this.skyDome.position.copy(this.camera.position);for(const[,P]of this.planetNodes){const U=P.config;P.prevWorldPos.copy(P.currWorldPos),P.spinGroup&&P.prevSpinWorldQuat.copy(P.currSpinWorldQuat),P.orbitAngle+=n*U.orbitOmega;const G=U.semiMajorAxis,B=U.eccentricity||.04,R=G*(1-B*B)/(1+B*Math.cos(P.orbitAngle));P.spinner&&(P.spinner.rotation.y=P.orbitAngle),P.root.position.set(R,0,0);for(const O of P.moonOrbits)O.angle+=n*O.speed,O.node.position.set(Math.cos(O.angle)*O.baseRadius,O.yOffset,Math.sin(O.angle)*O.baseRadius);P.spinAngle+=n*(U.axialOmega??U.rotationSpeed??.012),P.spinGroup&&(P.spinGroup.rotation.y=P.spinAngle),P.orbitalBundle&&(P.orbitalBundle.lowerCloudMesh.rotation.y+=n*U.rotationSpeed*.45,P.orbitalBundle.upperCloudMesh.rotation.y+=n*U.rotationSpeed*.85,P.orbitalBundle.lowerCloudGroup.rotation.y+=n*U.rotationSpeed*.28)}this.crystalPalaceDetailed&&(this.crystalPalaceDetailed.rotation.y+=n*.06),this.orbitalGroup.updateMatrixWorld(!0);let i="Sol Central",s=Math.max(0,this.camera.position.length()-2.21*3.2*yn),r=12e3,a=null,l=null,c=99999;for(const[P,U]of this.planetNodes){U.root.getWorldPosition(U.currWorldPos),U.planetDeltaPos.copy(U.currWorldPos).sub(U.prevWorldPos);for(const Q of U.moonOrbits)Q.prevWorldPos.copy(Q.currWorldPos),Q.node.getWorldPosition(Q.currWorldPos),Q.deltaPos.copy(Q.currWorldPos).sub(Q.prevWorldPos);U.spinGroup&&(U.spinGroup.getWorldQuaternion(U.currSpinWorldQuat),this._tmpInvQuat.copy(U.prevSpinWorldQuat).invert(),U.spinQuatDelta.copy(U.currSpinWorldQuat).multiply(this._tmpInvQuat).normalize());const G=U.config.localRadius*yn,B=G*ss,R=this.camera.position.distanceTo(U.currWorldPos),O=R-G,j=O/B;if(U.atmosphereShell&&U.atmosphereShell.material.uniforms){const Q=U.atmosphereShell.material.uniforms;Q.uSunPosition.value.set(0,0,0);const ne=X.smoothstep(j,0,.85);Q.uAltitudeFade.value=X.lerp(.18,1,ne)}if(U.config.landable){!U.surfaceLoaded&&!U.surfaceLoading&&R<G*4.5&&this.ensurePlanetSurfaceLoaded(P),U.surfaceCapGroup.scale.setScalar(1);const Q=Math.max(0,(O-(U.config.groundFloorAlt??.95))*Kr);if(this._updateSurfaceStreaming(U,j,Q),U.orbitalBundle){const ne=U.orbitalBundle;ne.lowerCloudMesh.material.uniforms.uPlanetCenter.value.copy(U.currWorldPos),ne.upperCloudMesh.material.uniforms.uPlanetCenter.value.copy(U.currWorldPos);const ye=X.smoothstep(j,.14,.42),Z=ye*.64,pe=ye*.86;if(ne.lowerCloudMesh.material.uniforms.uOpacity.value=Z,ne.lowerCloudMesh.visible=Z>.008,ne.upperCloudMesh.material.uniforms.uOpacity.value=pe,ne.upperCloudMesh.visible=pe>.008,j<.85){const $=1-X.smoothstep(j,.42,.85),ee=Math.exp(-Math.pow((j-.15)/.14,2))*.85,ce=Math.max($*.36,ee);ne.lowerCloudPuffs.material.opacity=ce,ne.lowerCloudGroup.visible=ce>.008}else ne.lowerCloudGroup.visible=!1}}O<s&&(s=Math.max(0,O),i=U.config.name,r=U.config.kmScale),O<c&&(c=O,l=U,a=P)}if(this.crystalPalaceAnchor){this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos);const P=Math.max(0,this.camera.position.distanceTo(this._tmpStationPos)-12);P<s&&(s=P,i="Estación Crystal Palace",r=850)}let h=!1,u=!1,d=1,f=0,g=null,x=null,m=null,p=this._identityQuat,v=220,M=220*ss,_=.95,T=8,w=0,A=0,E=null,y=null,S=null,C="ESPACIO";if(l){const P=l.config;if(v=P.localRadius*yn,M=v*ss,_=P.groundFloorAlt??.95,T=P.minSpeed??8,P.id==="p1"&&l.pandoraWorld){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize();const R=l.pandoraWorld.getFloorAndWaterAtDir(this._tmpLocalDir);E=R;const O=R.terrainElev*yn+(R.hasWater?.55:1.15);if(_=R.hasWater?O:Math.max(.65,O),R.hasWater){const j=R.waterElev*yn;c<j&&(A=j-c,w=X.clamp(A/1.8,0,1))}}else if(P.id==="p2"){this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),(l.capFrame||l.spinGroup||l.root).getWorldQuaternion(this._tmpCapInvQuat),this._tmpCapInvQuat.invert(),this._tmpLocalDir.copy(this._tmpRadial).applyQuaternion(this._tmpCapInvQuat).normalize(),y=ao(this._tmpLocalDir.x,this._tmpLocalDir.y,this._tmpLocalDir.z),S=this._sampleNightCityAtmo(y);const R=Math.max(0,y.elevationRatio)*v;_=Math.max(P.groundFloorAlt??.32,R+.38)}const U=M*1.25,G=c/M;if(G>1){for(const B of l.moonOrbits){const R=this.camera.position.distanceTo(B.currWorldPos);if(R<Math.max(85,B.moonRadius*6)){u=!0,g=B.deltaPos,x=B.currWorldPos,m=B.prevWorldPos,p=this._identityQuat,v=B.moonRadius,_=1.8,M=Math.max(95,B.moonRadius*4.5),c=R-B.moonRadius,i=B.name,s=Math.max(0,c);break}}if(!u&&this.crystalPalaceAnchor){const B=this.planetNodes.get("p2");B&&(this.crystalPalaceAnchor.getWorldPosition(this._tmpStationPos),this.camera.position.distanceTo(this._tmpStationPos)<220&&(u=!0,g=B.planetDeltaPos,x=B.currWorldPos,m=B.prevWorldPos,p=this._identityQuat))}}if(!u&&c<U&&(u=!0,g=l.planetDeltaPos,x=l.currWorldPos,m=l.prevWorldPos,p=l.spinQuatDelta),P.landable&&G<1.06){h=G<=1,this.currentDominantPlanet=h?P:null,h&&this.lastBannerPlanetId!==P.id&&(this.lastBannerPlanetId=P.id,this._showTransitionBanner("ENTRADA EN ALTA ATMÓSFERA",`ATMOSFERA // ${P.name.toUpperCase()}`,P.glowCss,1700),P.navKey&&this._highlightActiveNavButton(P.navKey));const B=X.clamp(1-G,0,1),R=1-X.smoothstep(G,.92,1.06),O=this._tmpRadial.copy(this.camera.position).sub(l.currWorldPos).normalize(),j=this._tmpSunDir.copy(this.camera.position).negate().normalize(),Q=X.clamp(O.dot(j),-1,1);d=Q,f=B;const ne=X.smoothstep(-Q,-.02,.24),ye=X.smoothstep(Q,-.02,.28),Z=Math.exp(-Math.pow((Q-.02)/.14,2))*(1-ne*.55);Q>.14?C="DÍA":Q>=-.08?C="ATARDECER":C="NOCHE";const pe=1-X.smoothstep(B,.04,.25);for(const ct of this.orbitLines)ct.material.opacity=ct.baseOpacity*pe,ct.mesh.visible=pe>.01;const $=-Math.sqrt(Math.max(0,1-Math.pow(v/Math.max(v,v+c),2))),ee=X.smoothstep(B,.01,.36),ce=this.skyDome.material.uniforms;if(P.skyDome){const ct=P.id==="p2"?1444388:1841212,Zt=P.id==="p2"?7085388:P.id==="p1"?6039150:10174e3,_n=P.id==="p2"?16726909:16743220,Sn=P.id==="p2"?331292:198678,Tt=P.id==="p2"?1058888:P.id==="p1"?404536:P.id==="p4"?2494984:529190,pn=P.id==="p1"&&E?this._tmpColorC.setHex(1799371).lerp(this._tmpColorB.setHex(1737450),E.waterFactor).lerp(this._tmpColorB.setHex(3024934),E.ashFactor).getHex():P.skyDome.zenith,rn=P.id==="p1"&&E?this._tmpColorC.setHex(5157068).lerp(this._tmpColorB.setHex(5687029),E.waterFactor).lerp(this._tmpColorB.setHex(6309432),E.ashFactor).getHex():P.skyDome.mid,cn=P.id==="p1"&&E?this._tmpColorC.setHex(8707782).lerp(this._tmpColorB.setHex(10810618),E.waterFactor).lerp(this._tmpColorB.setHex(11034162),E.ashFactor).getHex():P.skyDome.horizon;this._tmpColorA.setHex(pn),this._tmpColorA.lerp(this._tmpColorB.setHex(ct),Z*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(66312),ne*.94),ce.uZenithColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(rn),this._tmpColorA.lerp(this._tmpColorB.setHex(Zt),Z*.85),this._tmpColorA.lerp(this._tmpColorB.setHex(Sn),ne*.92),ce.uMidColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(cn),this._tmpColorA.lerp(this._tmpColorB.setHex(_n),Z*.9),this._tmpColorA.lerp(this._tmpColorB.setHex(Tt),ne*.92),ce.uHorizonColor.value.copy(this._tmpColorA),this._tmpColorA.setHex(P.skyDome.sunGlow),this._tmpColorA.lerp(this._tmpColorB.setHex(16757844),Z*.82),this._tmpColorA.lerp(this._tmpColorB.setHex(1451069),ne*.9),ce.uSunGlowColor.value.copy(this._tmpColorA);const qt=P.skyDome.zenithAlpha;if(ce.uZenithAlpha.value=X.lerp(qt,Math.max(.16,qt*.24),ne),w>.001){const $t=ne>.5?136738:547442,Ot=ne>.5?272444:821410;ce.uZenithColor.value.lerp(this._tmpColorB.setHex($t),w),ce.uMidColor.value.lerp(this._tmpColorB.setHex($t),w),ce.uHorizonColor.value.lerp(this._tmpColorB.setHex(Ot),w),ce.uSunGlowColor.value.lerp(this._tmpColorB.setHex(2808046),w*.85),ce.uZenithAlpha.value=X.lerp(ce.uZenithAlpha.value,.96,w)}if(ce.uLocalUp.value.copy(O),ce.uSunDir.value.copy(j),ce.uHorizonDot.value=$,ce.uAtmoOpacity.value=ee,ce.uMieIntensity&&(ce.uMieIntensity.value=X.lerp(.62,.08,ne)),this.skyDome.visible=ee>.005,this.starfield.userData.setStarVisibility){const $t=y?.weights?.badlands||0,Ot=y?.district==="westbrook"&&y?.subzone==="north_oak"?.35:0,Ut=Math.min(.6,$t*.55+Ot),_t=X.lerp(Math.max(P.skyDome.starFloor,Ut),Math.max(P.skyDome.starFloor,.45+Ut*.35),Z*(1-ye*.7)),I=X.lerp(_t,y&&$t>.45?1:.96,ne),Y=X.lerp(1,I,X.smoothstep(B,.06,.42))*(1-w);this.starfield.userData.setStarVisibility(Y)}}if(l.orbitalBundle){const ct=l.orbitalBundle,Zt=P.id==="p2"?14239882:16749142,_n=P.id==="p2"?16726909:16740396;if(ct.userBaseColors){this._tmpColorA.copy(ct.userBaseColors.sunlit).lerp(this._tmpColorB.setHex(Zt),Z*.72),this._tmpColorC.copy(ct.userBaseColors.horizon).lerp(this._tmpColorB.setHex(_n),Z*.85);for(const Tt of[ct.upperCloudMesh,ct.lowerCloudMesh])Tt.material.uniforms.uSunColor.value.copy(this._tmpColorA),Tt.material.uniforms.uHorizonColor.value.copy(this._tmpColorC)}const Sn=P.id==="p2"?1452616:1319480;this._tmpColorA.copy(ct.userBaseColors?ct.userBaseColors.sunlit:this._tmpColorB.setHex(16777215)),this._tmpColorA.lerp(this._tmpColorB.setHex(Zt),Z*.78),this._tmpColorA.lerp(this._tmpColorB.setHex(Sn),ne*.88),ct.lowerCloudPuffs.material.color.copy(this._tmpColorA)}const fe=B>.32;for(const[ct,Zt]of this.planetNodes)Zt.root.visible=fe?ct===a:!0;const ae=1-X.smoothstep(G,.45,.98),Se=P.id==="p1"&&E&&E.ashFactor>.35?919044:198156,V=P.id==="p2"?3871275:8139812,Ie=P.id==="p1"&&E?this._tmpColorC.setHex(2655412).lerp(this._tmpColorB.setHex(2527952),E.waterFactor).lerp(this._tmpColorB.setHex(4994604),E.ashFactor).getHex():P.skyColor;this._tmpSkyColor.setHex(Ie).lerp(this._tmpColorB.setHex(V),Z*.72).lerp(this._tmpColorB.setHex(Se),ne*.92),w>.001&&this._tmpSkyColor.lerp(this._tmpColorB.setHex(683142).lerp(this._tmpColorC.setHex(137768),ne),w),this.scene.background=this._tmpColorA.setHex(Se).clone().lerp(this._tmpSkyColor,ae*.9);const k=P.id==="p1"&&E?1.05*E.forestFactor+.78*E.waterFactor+2.15*E.ashFactor:1,xe=(P.id==="p2"&&S?S.fogDensity:P.maxFogDensity*k)*(1-X.smoothstep(G,.2,.9)),Ve=.012*Math.exp(-Math.pow((G-.14)/.06,2)),Be=.0022*Math.exp(-Math.pow((G-.85)/.12,2)),it=P.id==="p1"?.0024*(1-X.smoothstep(G,0,.05))*(1-(E?.ashFactor||0)*.4):0,Xe=(xe+Ve+Be+it)*R,F=X.lerp(.022,.036,ne),D=X.lerp(Xe,F,w);if(P.id==="p2"&&S)this._tmpFogColor.copy(S.fogDay).lerp(S.fogDusk,Z*.76).lerp(S.fogNight,ne*.92);else{const ct=P.id==="p1"&&E?this._tmpColorC.setHex(5023914).lerp(this._tmpColorB.setHex(6476523),E.waterFactor).lerp(this._tmpColorB.setHex(6046772),E.ashFactor).getHex():P.fogColor,Zt=P.id==="p2"?6428730:13920826,_n=P.id==="p1"?E&&E.ashFactor>.35?1444358:268836:329744;this._tmpFogColor.setHex(ct).lerp(this._tmpColorB.setHex(Zt),Z*.78).lerp(this._tmpColorB.setHex(_n),ne*.9)}w>.001&&this._tmpFogColor.lerp(this._tmpColorB.setHex(883350).lerp(this._tmpColorC.setHex(205362),ne),w),this.camera.getWorldDirection(this._tmpCamFwd);const te=Math.max(0,this._tmpCamFwd.dot(j)),_e=Math.pow(te,3)*.35*(1-ne*.8)*(1-w);_e>.001&&ce.uSunGlowColor&&this._tmpFogColor.lerp(ce.uSunGlowColor.value,_e),this.scene.fog?(this.scene.fog.color.copy(this._tmpFogColor),this.scene.fog.density=D):this.scene.fog=new Sa(this._tmpFogColor.getHex(),D);const le=A>.05,ue=Math.max(0,(c-_)*Kr),Le=P.id==="p1"?1-.34*(1-X.smoothstep(G,0,.05)):1,Me=P.id==="p1"?.9+.16*Math.sin(this.elapsedTime*.6):1,ke=X.lerp(.05,1,X.smoothstep(Q,-.06,.24)),gt=X.lerp(1,.45,w);this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize();const Ae=h&&ue<4e3&&ke>.08&&!le;this.planetaryDirLight.castShadow=Ae,Ae?(this.planetaryDirLight.target.position.copy(this.camera.position),this.planetaryDirLight.position.copy(this.camera.position).addScaledVector(this._tmpPlanetToSun,220),this.planetaryDirLight.target.updateMatrixWorld()):(this.planetaryDirLight.target.position.copy(l.currWorldPos),this.planetaryDirLight.position.copy(l.currWorldPos).addScaledVector(this._tmpPlanetToSun,1200),this.planetaryDirLight.target.updateMatrixWorld()),this.planetaryDirLight.color.setHex(P.sunColor).lerp(this._tmpColorB.setHex(16741424),Z*.72).lerp(this._tmpColorB.setHex(5008280),ne*.85),this.planetaryDirLight.intensity=X.lerp(.25,P.sunIntensity,B)*Le*ke*gt,this.hemiLight.position.copy(O).multiplyScalar(100);const Oe=P.id==="p2"?16726909:16743220,nt=P.id==="p1"?537668:P.id==="p2"?926272:792108,at=P.id==="p1"?401448:527380,Ye=P.id==="p1"&&E?this._tmpColorC.setHex(6079672).lerp(this._tmpColorB.setHex(7395583),E.waterFactor).lerp(this._tmpColorB.setHex(9069644),E.ashFactor).getHex():P.id==="p2"&&S?S.hemiSky.getHex():P.hemiSkyColor,pt=P.id==="p1"&&E?this._tmpColorC.setHex(1985064).lerp(this._tmpColorB.setHex(1330784),E.waterFactor).lerp(this._tmpColorB.setHex(2890772),E.ashFactor).getHex():P.id==="p2"&&S?S.hemiGround.getHex():P.hemiGroundColor;this._tmpColorA.setHex(Ye).lerp(this._tmpColorB.setHex(Oe),Z*.55).lerp(this._tmpColorB.setHex(nt),ne*.9),w>.001&&this._tmpColorA.lerp(this._tmpColorB.setHex(1889514).lerp(this._tmpColorC.setHex(407624),ne),w*.85),this.hemiLight.color.lerp(this._tmpColorA,Math.min(1,B*.35+.08)),this._tmpColorA.setHex(pt).lerp(this._tmpColorB.setHex(at),ne*.85),this.hemiLight.groundColor.lerp(this._tmpColorA,Math.min(1,B*.35+.08)),this.hemiLight.intensity=X.lerp(.42,P.hemiIntensity,B)*X.lerp(1,.36,ne);const lt=P.id==="p1"&&E?this._tmpColorC.setHex(2247218).lerp(this._tmpColorB.setHex(1986148),E.waterFactor).lerp(this._tmpColorB.setHex(3548186),E.ashFactor).getHex():P.id==="p2"&&S?S.ambient.getHex():P.ambientColor;this._tmpColorA.setHex(lt).lerp(this._tmpColorB.setHex(1054760),ne*.82),this.ambientLight.color.lerp(this._tmpColorA,Math.min(1,B*.35+.08)),this.ambientLight.intensity=X.lerp(.55,P.ambientIntensity,B)*Le*X.lerp(1,.45,ne);const xt=P.id==="p1"?.74:P.id==="p3"?.85:.9,K=P.id==="p1"?2.45*Me:P.id==="p2"?2.15:P.id==="p3"?2.25:1.95,Re=Math.min(1,Math.max(ne,Z*.45)),me=X.lerp(xt,K,Re);if(l.surfaceCapGroup.visible){if(l.splatUniforms?.length)for(const ct of l.splatUniforms)ct.uPlanetCenter.value.copy(l.currWorldPos);l.p3Water?.material?.uniforms?.time&&(l.p3Water.material.uniforms.time.value+=t*.5),this._hideAllReflectiveWaters(l),this._updateReflectiveWaters(l,h&&!le&&ue<1e4,w,j);for(const ct of l.animators)ct.update(this.elapsedTime,me,Q,w);for(const ct of l.nightMaterials)P.id==="p2"?ct.tier==="window"?ct.material.emissiveIntensity=Math.min(.28,ct.baseEmissive*X.lerp(.7,1.15,Re)):ct.tier==="hero"?ct.material.emissiveIntensity=X.clamp(ct.baseEmissive*X.lerp(.88,1.04,Re),1.3,1.9):ct.material.emissiveIntensity=Math.min(.88,ct.baseEmissive*X.lerp(.75,1.1,Re)):ct.material.emissiveIntensity=ct.baseEmissive*me}const ve=1-X.smoothstep(G,.05,.45),Fe=P.id==="p1"?X.smoothstep(-Q,-.1,.04):1,Ge=P.id==="p1"&&E&&w<=.2?this._tmpColorC.setHex(P.localLightColor).lerp(this._tmpColorB.setHex(2683096),E.waterFactor).lerp(this._tmpColorB.setHex(16742456),E.ashFactor).getHex():P.id==="p2"&&S?S.localLight.getHex():w>.2?1894655:P.localLightColor,je=P.id==="p1"&&E?this._tmpColorC.setHex(P.localBounceColor).lerp(this._tmpColorB.setHex(1628415),E.waterFactor).lerp(this._tmpColorB.setHex(16730648),E.ashFactor).getHex():P.id==="p2"&&S?S.localBounce.getHex():P.localBounceColor;this.localAtmoLight.color.setHex(Ge);const Nt=P.id==="p2"&&y?y.district==="pacifica"?.28:y.district==="badlands"?.22:.72:1;this.localAtmoLight.intensity=ve*5.2*Nt*Me*X.lerp(.85,1.38,Re)*Math.max(Fe,w*.6),this.localAtmoLight.position.copy(this.camera.position).addScaledVector(O,18),this.localBounceLight.color.setHex(je),this.localBounceLight.intensity=ve*4.8*Nt*Me*X.lerp(.85,1.35,Re)*Fe,this.localBounceLight.position.copy(this.camera.position).addScaledVector(O,-8);const Ft=X.lerp(.85,.55,ne)*(1-w*.45);if(this._updateDynamicIbl({planetId:P.id,zenithColor:ce.uZenithColor?ce.uZenithColor.value:this._tmpIblZenith,horizonColor:this._tmpFogColor,groundColor:this.hemiLight.groundColor,sunDir:j,sunColor:this.planetaryDirLight.color,sunElev:Q,altRatio:G,intensity:Ft}),this.ssaoPass){const ct=h&&ue<4e3&&!le;if(this.ssaoPass.enabled=ct,ct&&this.ssaoPass.ssaoMaterial?.uniforms){const Zt=this.ssaoPass.ssaoMaterial.uniforms;Zt.cameraProjectionMatrix&&Zt.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),Zt.cameraInverseProjectionMatrix&&Zt.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse)}}if(this.bloomPass){if(P.id==="p2"&&S){const ct=Math.min(.45,S.bloomCap*X.lerp(.82,.95,ne));this.bloomPass.strength=X.lerp(.36,ct,ve)}else{const Zt=Math.min(.45,P.bloomStrength*.68*Me*X.lerp(.85,1.12,ne));this.bloomPass.strength=X.lerp(.35,Zt,ve)}this.bloomPass.strength=Math.min(.45,this.bloomPass.strength)}if(this.renderer){const ct=X.lerp(1.04,1.12,ne)*(1-w*.06);this.renderer.toneMappingExposure=X.lerp(this.renderer.toneMappingExposure,X.clamp(ct,.98,1.15),Math.min(1,t*3))}const ft=Math.exp(-Math.pow((G-.78)/.2,2))*.85,ln=Math.exp(-Math.pow((G-.4)/.14,2))*.55,un=P.id==="p1"&&E?E.ashFactor*ve*.42:0,fn=w>.08?4126184:P.id==="p1"&&E&&E.ashFactor>.38?16751192:P.particleColor;this.cockpitParticles.setAtmosphereStyle(fn,Math.max(Math.max(ft,ln),w*.72,un))}}if(l&&c/M>=1.06&&(h=!1),this.mode=h?"SURFACE":"ORBIT",!l||!l.config.landable||c/M>=1.06){this.currentDominantPlanet=null,this.lastBannerPlanetId=null,this.skyDome.visible=!1,this.skyDome.material.uniforms.uAtmoOpacity.value=0;for(const P of this.orbitLines)P.material.opacity=P.baseOpacity,P.mesh.visible=!0;this.starfield.userData.setStarVisibility&&this.starfield.userData.setStarVisibility(1);for(const[,P]of this.planetNodes)P.root.visible=!0,P.config.hasProceduralWorld&&P.orbitalBundle&&(P.orbitalBundle.surfaceMesh.visible=!0);this._hideAllReflectiveWaters(null),this.scene.background.lerp(new ie(198156),Math.min(1,t*4)),this.scene.fog&&(this.scene.fog.density*=Math.exp(-5*t),this.scene.fog.density<5e-5&&(this.scene.fog=null)),this.planetaryDirLight.castShadow=!1,this.planetaryDirLight.intensity=X.lerp(this.planetaryDirLight.intensity,.22,.1),this.hemiLight.position.set(0,100,0),this.hemiLight.color.lerp(new ie(7906528),Math.min(1,t*3)),this.hemiLight.groundColor.lerp(new ie(1053724),Math.min(1,t*3)),this.hemiLight.intensity=X.lerp(this.hemiLight.intensity,.42,.1),this.ambientLight.color.lerp(new ie(1844790),Math.min(1,t*3)),this.ambientLight.intensity=X.lerp(this.ambientLight.intensity,.55,.1),this.localAtmoLight.intensity=X.lerp(this.localAtmoLight.intensity,0,.15),this.localBounceLight.intensity=X.lerp(this.localBounceLight.intensity,0,.15),l?this._tmpPlanetToSun.copy(l.currWorldPos).negate().normalize():this._tmpPlanetToSun.copy(this.camera.position).negate().normalize(),this._updateDynamicIbl({planetId:"space",zenithColor:this._tmpIblZenith,horizonColor:this._tmpIblHorizon,groundColor:this._tmpIblGround,sunDir:this._tmpPlanetToSun,sunColor:this._tmpIblSun,sunElev:1,altRatio:2,intensity:.25}),this.ssaoPass&&(this.ssaoPass.enabled=!1),this.bloomPass&&(this.bloomPass.strength=X.lerp(this.bloomPass.strength,.38,.1)),this.renderer&&(this.renderer.toneMappingExposure=X.lerp(this.renderer.toneMappingExposure,1.05,Math.min(1,t*3))),this.cockpitParticles.setAtmosphereStyle(8965375,0)}const L=typeof this.controls.getSpeedRatio=="function"?this.controls.getSpeedRatio():0,N=h&&A>.05;if(this.radialBlurPass?.uniforms?.uBlurStrength){const U=(L>.45?X.smoothstep(L,.45,1):0)*(N?.35:1);this.radialBlurPass.uniforms.uBlurStrength.value=X.lerp(this.radialBlurPass.uniforms.uBlurStrength.value,U,Math.min(1,t*8)),this.radialBlurPass.enabled=this.radialBlurPass.uniforms.uBlurStrength.value>.002}if(this.machConeMesh&&this.machConeUniforms){const U=!!(h&&!N&&l&&c/M<.85)&&L>.72?X.smoothstep(L,.72,1)*.72:0;this.machConeUniforms.uTime.value=this.elapsedTime,this.machConeUniforms.uOpacity.value=X.lerp(this.machConeUniforms.uOpacity.value,U,Math.min(1,t*7)),this.machConeMesh.visible=this.machConeUniforms.uOpacity.value>.01}if(this._updateSolarLensflare(h,N,d,f,w),this.controls.setAltitudeContext({surfaceAltitude:c,planetRadius:v,atmoTopAlt:M,groundFloorAlt:_,minSpeed:T,metersPerUnit:Kr,submergedRatio:w,planetCenter:x||(l?l.currWorldPos:null),prevPlanetCenter:m||(l?l.prevWorldPos:null),hasPlanet:!!l,inGravityWell:u,planetDeltaPos:g,planetQuatDelta:p}),h&&this.currentDominantPlanet){const P=A>.05,U=P?Math.round(A*15):Math.max(0,Math.round((c-_)*Kr));let G=null;if(this.currentDominantPlanet.id==="p1"){const R=this.planetNodes.get("p1"),O=R?.capFrame||R?.spinGroup||R?.root;O&&(G=bt.map(j=>{this._tmpStationPos.copy(j.capDir).multiplyScalar(R.config.localRadius).applyMatrix4(O.matrixWorld);const Q=Math.round(this.camera.position.distanceTo(this._tmpStationPos)*(R.config.kmScale/(620*gi)));return{id:j.id,shortName:j.shortName,distKm:Q}}))}if(this.lastP1RegionInfo=E,this.currentDominantPlanet.id==="p2"&&y){const R=qr[y.district]||qr.city_center;this.lastP2DistrictId=R.id,this.lastP2DistrictName=y.subzone==="north_oak"?"Westbrook · North Oak":y.subzone==="dogtown"?"Pacifica · Dogtown":R.name,this.lastP2DistrictShort=y.subzone==="north_oak"?"North Oak":y.subzone==="dogtown"?"Dogtown":R.shortName}this.lastSolarPhaseName=C,this.lastIsUnderwater=P;const B=this.currentDominantPlanet.id==="p2"?`NIGHT CITY // ${this.lastP2DistrictName.toUpperCase()}`:this.currentDominantPlanet.name.toUpperCase();this.onStatusUpdate({modeText:P?"SUBMARINO":"ATMOSFÉRICO",isSurface:!0,isUnderwater:P,sectorName:B,nearestText:this.currentDominantPlanet.id==="p2"?this.lastP2DistrictName:`${this.currentDominantPlanet.name}`,altitudeText:P?`-${U.toLocaleString("es-ES")} m`:`${U.toLocaleString("es-ES")} m`,timeScale:this.timeScale,solarPhaseName:C,pandoraLandmarks:G,nightCityDistrict:this.currentDominantPlanet.id==="p2"?this.lastP2DistrictId:null})}else{this.lastP1RegionInfo=null,this.lastSolarPhaseName="ESPACIO",this.lastIsUnderwater=!1;const P=Math.max(1,Math.round(s*(r/620)));this.onStatusUpdate({modeText:"ÓRBITA",isSurface:!1,sectorName:"SISTEMA SOLAR CENTRAL",nearestText:`${i} · ${P.toLocaleString("es-ES")} km`,altitudeText:`${P.toLocaleString("es-ES")} km`,timeScale:this.timeScale,solarPhaseName:"ESPACIO"})}}getStarChartState(){this.orbitalGroup.updateMatrixWorld(!0);const e=this.camera.position.clone(),t=new b(0,0,-1).applyQuaternion(this.camera.quaternion).normalize(),n=new b(1,0,0).applyQuaternion(this.camera.quaternion).normalize(),i=Math.atan2(t.x,t.z);let s=null;if(this.crystalPalaceAnchor){const h=new b;this.crystalPalaceAnchor.getWorldPosition(h),s={id:"crystal_palace",name:"CRYSTAL PALACE",planetKey:"p2",worldPos:h,distWorld:e.distanceTo(h),loaded:!!this.crystalPalaceDetailed}}const r={p1:{shortName:"PANDORA",code:"P1",tagline:"Luna oceánica y selvática · 3 Macro-Naciones",color:"#34d8c4",accent:"#44f0a8",gravity:"0.80 G",atmoDesc:"Densa · Respirable c/máscara (Nitrógeno/Xenón)",climate:"Selva bioluminiscente, archipiélago Metkayina y calderas de Ceniza"},p2:{shortName:"NIGHT CITY",code:"P2",tagline:"Megalópolis cyberpunk · Corpo Plaza y Crystal Palace",color:"#00d8ff",accent:"#ff3b9a",gravity:"1.00 G",atmoDesc:"Densa · Niebla urbana e industrial estratificada",climate:"Cañón neón central, suburbios sombríos y Badlands áridas"},p3:{shortName:"PERUGIUS",code:"P3",tagline:"Mundo templado medieval · Ciudadela Fortaleza",color:"#6ec878",accent:"#ffba52",gravity:"0.95 G",atmoDesc:"Óptima · Cielos dorados templados",climate:"Valles verdes, fortalezas en altura y cumbres nevadas"},p4:{shortName:"CORUSCANT",code:"P4",tagline:"Ecumenópolis total · Distrito del Senado",color:"#f4a259",accent:"#ff8a3a",gravity:"1.00 G",atmoDesc:"Regulada · Tráfico orbital y cúpulas ámbar",climate:"Planeta-ciudad continuo de miles de niveles"},p5:{shortName:"GIGANTE P5",code:"P5",tagline:"Gigante gaseoso azul con sistema de anillos y 3 lunas",color:"#5fa8ff",accent:"#8ee8ff",gravity:"2.45 G",atmoDesc:"Turbulenta · Hidrógeno y helio (Solo órbita)",climate:"Tormentas de metano, anillos helados y lunas pastoras"}},a=[],l=["p1","p2","p3","p4","p5"];for(const h of l){const u=this.planetNodes.get(h);if(!u)continue;const d=u.config,f=r[h]||{shortName:h.toUpperCase(),code:h.toUpperCase(),color:"#8cc4ff"},g=u.currWorldPos.clone(),x=e.distanceTo(g),m=u.moonOrbits.map((_,T)=>({index:T,name:_.name,baseRadius:_.baseRadius,baseRadiusWorld:_.baseRadius*yn,angle:_.angle,yOffset:_.yOffset,moonRadius:_.moonRadius,worldPos:_.currWorldPos.clone(),distWorld:e.distanceTo(_.currWorldPos)})),p=new rt;u.spinGroup&&u.spinGroup.getWorldQuaternion(p);const v=new rt;u.spinner?.parent&&u.spinner.parent.getWorldQuaternion(v);const M=u.capFrame?u.capFrame.quaternion.clone():new rt;a.push({key:h,id:d.id,code:f.code,name:d.name,shortName:f.shortName,tagline:f.tagline,color:f.color,accent:f.accent,gravity:f.gravity,atmoDesc:f.atmoDesc,climate:f.climate,navKey:d.navKey,landable:d.landable,semiMajorAxis:d.semiMajorAxis,semiMajorAxisWorld:d.semiMajorAxis*yn,eccentricity:d.eccentricity||.04,orbitAngle:u.orbitAngle,localRadius:d.localRadius,worldRadius:d.localRadius*yn,atmoTopAlt:d.localRadius*yn*ss,kmScale:d.kmScale,glowCss:d.glowCss||"rgba(94, 212, 255, 0.45)",worldPos:g,distWorld:x,distKm:Math.max(0,Math.round(Math.max(0,x-d.localRadius*yn)*(d.kmScale/(620*gi)))),moons:m,hasCrystalPalace:h==="p2"&&!!s,spinWorldQuat:p,orbitalPlaneQuat:v,capLocalQuat:M,orbitalMap:u.orbitalBundle?.surfaceMesh?.material?.map||null,orbitalEmissiveMap:u.orbitalBundle?.surfaceMesh?.material?.emissiveMap||null,cloudMap:u.orbitalBundle?.upperCloudMesh?.material?.uniforms?.uCloudMap?.value||null,pandoraLandmarks:h==="p1"?bt:null,nightCityLandmarks:h==="p2"?uo:null})}let c=null;if(this.mode==="SURFACE"&&this.currentDominantPlanet){const h=this.currentDominantPlanet,u=this.planetNodes.get(h.id);if(u){const d=u.capFrame||u.spinGroup||u.root,f=u.currWorldPos.clone(),g=e.clone().sub(f).normalize(),x=e.clone().negate().normalize(),m=[];if(h.id==="p1"){const p={hometree:{nation:"forest",color:"#44f0a8"},hallelujah:{nation:"forest",color:"#44f0a8"},rookery:{nation:"forest",color:"#44f0a8"},souls:{nation:"forest",color:"#44f0a8"},mushrooms:{nation:"forest",color:"#a864ff"},ashland:{nation:"ash",color:"#ff6c34"},metkayina:{nation:"water",color:"#26e8ff"}};for(const v of bt){const M=v.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld),_=p[v.id]||{nation:"forest",color:"#44f0a8"};m.push({id:v.id,shortName:v.shortName,nation:_.nation,color:_.color,worldPos:M,distKm:Math.round(e.distanceTo(M)*(h.kmScale/(620*gi)))})}}else if(h.id==="p2")for(const p of uo){const v=p.capDir.clone().multiplyScalar(h.localRadius).applyMatrix4(d.matrixWorld);m.push({id:p.id,shortName:p.shortName,color:p.color,worldPos:v,distKm:Math.round(e.distanceTo(v)*(h.kmScale/(620*gi)))})}else{const p=new b(0,h.localRadius,0).applyMatrix4(d.matrixWorld);m.push({id:"capital",shortName:h.id==="p3"?"Fortaleza Perugius":"Plaza del Senado",color:h.id==="p3"?"#ffcf78":"#ff944d",worldPos:p,distKm:Math.round(e.distanceTo(p)*(h.kmScale/(620*gi)))})}c={planetKey:h.id,planetName:h.name,planetWorldPos:f,worldRadius:h.localRadius*yn,radialUp:g,sunDir:x,solarPhaseName:this.lastSolarPhaseName||"DÍA",isUnderwater:!!this.lastIsUnderwater,regionNation:this.lastP1RegionInfo?.nation||"forest",regionDistrict:this.lastP2DistrictId||"city_center",regionDistrictName:this.lastP2DistrictName||"Corpo Plaza",regionDistrictShort:this.lastP2DistrictShort||"Corpo Plaza",markers:m}}}return{mode:this.mode,isUnderwater:!!this.lastIsUnderwater,shipPos:e,shipForward:t,shipRight:n,shipYawRad:i,sunPos:new b(0,0,0),sunWorldRadius:2.21*3.2*yn,planets:a,crystalPalace:s,atmosphereLocal:c,dominantPlanetKey:this.currentDominantPlanet?.id||null}}}new b(0,1,0);const vs=new b,bl=new b,oo=new b;class EM{constructor({containerEl:e,canvasEl:t,scaleEl:n,sceneManager:i,onOpenStarMap:s}){this.containerEl=e,this.canvas=t,this.ctx=t?.getContext?.("2d")||null,this.scaleEl=n,this.sceneManager=i,this.onOpenStarMap=s||(()=>{}),this.size=170,this._bindEvents(),this._resizeCanvas()}_bindEvents(){this.containerEl&&this.containerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenStarMap()})}_resizeCanvas(){if(!this.canvas||!this.ctx)return;const e=typeof window<"u"?Math.min(window.devicePixelRatio||1,2):1;this.canvas.width=this.size*e,this.canvas.height=this.size*e,this.dpr=e}update(e=0){if(!this.ctx||!this.sceneManager)return;const t=this.ctx,n=this.size,i=n*.5,s=this.dpr||1;t.setTransform(s,0,0,s,0,0),t.clearRect(0,0,n,n);const r=this.sceneManager.getStarChartState();if(!r)return;t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.strokeStyle="rgba(94, 212, 255, 0.16)",t.lineWidth=1;for(const c of[.32,.62,.9])t.beginPath(),t.arc(i,i,(i-6)*c,0,Math.PI*2),t.stroke();t.strokeStyle="rgba(94, 212, 255, 0.12)",t.beginPath(),t.moveTo(i,8),t.lineTo(i,n-8),t.moveTo(8,i),t.lineTo(n-8,i),t.stroke();const a=e*1.35%(Math.PI*2),l=t.createRadialGradient(i,i,4,i,i,i-6);l.addColorStop(0,"rgba(94, 212, 255, 0.02)"),l.addColorStop(1,"rgba(94, 212, 255, 0.12)"),t.fillStyle=l,t.beginPath(),t.moveTo(i,i),t.arc(i,i,i-6,a-.45,a),t.closePath(),t.fill(),r.mode==="SURFACE"&&r.atmosphereLocal?this._drawAtmosphericRadar(t,n,i,r):this._drawSolarRadar(t,n,i,r),t.fillStyle=r.isUnderwater?"#38f6d2":"#ffae42",t.strokeStyle="#040a14",t.lineWidth=1.4,t.beginPath(),t.moveTo(i,i-7),t.lineTo(i+5.2,i+5.2),t.lineTo(i,i+2.6),t.lineTo(i-5.2,i+5.2),t.closePath(),t.fill(),t.stroke(),t.restore()}_drawSolarRadar(e,t,n,i){let s=i.shipForward.x,r=i.shipForward.z;const a=Math.hypot(s,r);a<.001?(s=0,r=-1):(s/=a,r/=a);const l=-r,c=s,h=n-15,u=Math.hypot(i.shipPos.x,i.shipPos.z),d=Math.max(12e3,Math.min(48e3,u*1.45+11e3));this.scaleEl&&(this.scaleEl.textContent=`ÓRBITA · ${Math.round(d/100)/10}k`);const f=(x,m)=>{const p=x-i.shipPos.x,v=m-i.shipPos.z,M=p*l+v*c,_=p*s+v*r,T=Math.hypot(M,_),w=Math.pow(Math.min(1,T/d),.78),A=Math.atan2(-_,M);return{x:n+Math.cos(A)*w*h,y:n+Math.sin(A)*w*h,clipped:T>d}},g=f(i.sunPos.x,i.sunPos.z);if(e.fillStyle="rgba(255, 200, 72, 0.35)",e.beginPath(),e.arc(g.x,g.y,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffdc64",e.beginPath(),e.arc(g.x,g.y,4.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 224, 130, 0.9)",e.font='600 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText("SOL",g.x,g.y-7),i.crystalPalace){const x=f(i.crystalPalace.worldPos.x,i.crystalPalace.worldPos.z);e.strokeStyle="#ffae42",e.lineWidth=1.2,e.beginPath(),e.moveTo(x.x,x.y-3.5),e.lineTo(x.x+3.5,x.y),e.lineTo(x.x,x.y+3.5),e.lineTo(x.x-3.5,x.y),e.closePath(),e.stroke()}for(const x of i.planets){const m=f(x.worldPos.x,x.worldPos.z);e.fillStyle=x.color,e.beginPath(),e.arc(m.x,m.y,x.landable?3.8:4.6,0,Math.PI*2),e.fill(),e.fillStyle="rgba(230, 243, 255, 0.9)",e.font='700 8px "Cascadia Code", Consolas, monospace',e.textAlign="center",e.fillText(x.code,m.x,m.y-6)}}_drawAtmosphericRadar(e,t,n,i){const s=i.atmosphereLocal,r=s.radialUp;vs.copy(i.shipForward).addScaledVector(r,-i.shipForward.dot(r)),vs.lengthSq()<1e-4&&vs.copy(i.shipRight).cross(r),vs.normalize(),bl.crossVectors(vs,r).normalize();const a=n-16,l=Math.max(220,s.planetKey==="p2"?s.worldRadius*.56:s.worldRadius*1.08);if(this.scaleEl){const g=s.isUnderwater?"SUBMARINO":s.planetKey==="p1"?{forest:"BOSQUE",water:"METKAYINA",ash:"CENIZA"}[s.regionNation]||"PANDORA":s.planetKey==="p2"?(s.regionDistrictShort||s.regionDistrictName||"NIGHT CITY").toUpperCase():s.planetKey.toUpperCase();this.scaleEl.textContent=`${g} · ${s.solarPhaseName}`}const c=oo.copy(s.sunDir).dot(bl),h=oo.dot(vs),u=Math.atan2(-h,c),d=n+Math.cos(u)*(n-11),f=n+Math.sin(u)*(n-11);e.fillStyle="#ffd65a",e.beginPath(),e.arc(d,f,4.2,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 214, 90, 0.5)",e.lineWidth=1,e.beginPath(),e.arc(d,f,7,0,Math.PI*2),e.stroke(),e.font='600 7.5px "Cascadia Code", Consolas, monospace',e.textAlign="center";for(const g of s.markers){oo.copy(g.worldPos).sub(i.shipPos);const x=oo.dot(bl),m=oo.dot(vs),p=Math.hypot(x,m),v=Math.min(1,Math.pow(p/l,.72)),M=Math.atan2(-m,x),_=n+Math.cos(M)*v*a,T=n+Math.sin(M)*v*a,w=oo.dot(r)<-s.worldRadius*.45;e.globalAlpha=w?.45:.95,e.fillStyle=g.color||"#5ed4ff",e.beginPath(),e.arc(_,T,w?2.4:3.2,0,Math.PI*2),e.fill(),e.fillStyle="#e6f3ff";const A=g.shortName.length>9?g.shortName.slice(0,8)+".":g.shortName;e.fillText(A,_,T-5)}e.globalAlpha=1}}const gn=Object.freeze({CLOSED:"CLOSED",SOLAR_SYSTEM:"SOLAR_SYSTEM",PLANET_ZOOM:"PLANET_ZOOM",JUMP_CONFIRMED:"JUMP_CONFIRMED"}),AM=230*157.5,ys=12.5,ku=4.2,TM=6,zu=5;function CM(o){const e=Math.max(0,Math.min(1,o));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function Sl(o,e=new b){if(!o)return e.set(0,0,0);const t=Math.hypot(o.x||0,o.y||0,o.z||0);if(t<1e-4)return e.set(0,0,0);const n=t/AM,s=(24+Math.pow(Math.min(1.4,n),.72)*168)/t;return e.set(o.x*s,o.y*s,o.z*s)}function PM(){if(typeof document>"u")return null;const o=document.createElement("canvas");o.width=512,o.height=256;const e=o.getContext?.("2d");if(!e)return null;const t=e.createLinearGradient(0,0,0,o.height);t.addColorStop(0,"#133056"),t.addColorStop(.16,"#27598d"),t.addColorStop(.28,"#4f9cd9"),t.addColorStop(.38,"#9fd8ff"),t.addColorStop(.49,"#316aa6"),t.addColorStop(.62,"#64b8f2"),t.addColorStop(.74,"#244d80"),t.addColorStop(.86,"#488cc8"),t.addColorStop(1,"#122949"),e.fillStyle=t,e.fillRect(0,0,o.width,o.height);for(let i=0;i<28;i++){const s=i/28*o.height;e.fillStyle=i%2===0?"rgba(180, 232, 255, 0.14)":"rgba(10, 28, 56, 0.16)",e.fillRect(0,s,o.width,3+i%4)}e.fillStyle="rgba(155, 228, 255, 0.38)",e.beginPath(),e.ellipse(o.width*.62,o.height*.58,34,14,0,0,Math.PI*2),e.fill();const n=new xn(o);return n.colorSpace=jt,n.wrapS=Xn,n.wrapT=Hi,n}function Gu(o,e=.72){const t=new ie(o||"#5ed4ff");return new on({uniforms:{uColor:{value:t},uIntensity:{value:e}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Mn,side:li})}function wl(){return new dn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})}class RM{constructor({overlayEl:e,canvasEl:t,labelsEl:n,backBtnEl:i,closeBtnEl:s,levelTagEl:r,titleEl:a,dossierEl:l,dossierBadgeEl:c,dossierTitleEl:h,dossierDescEl:u,dossierTypeEl:d,dossierAltEl:f,dossierAtmoEl:g,dossierDistEl:x,jumpBtnEl:m,footerEl:p,sceneManager:v,controls:M,onConfirmJump:_,onStateChange:T,createRenderer:w}={}){this.overlayEl=e||null,this.canvas=t||null,this.labelsEl=n||(typeof document<"u"?document.getElementById("star-map-labels"):null),this.backBtnEl=i||null,this.closeBtnEl=s||null,this.levelTagEl=r||null,this.titleEl=a||null,this.dossierEl=l||null,this.dossierBadgeEl=c||null,this.dossierTitleEl=h||null,this.dossierDescEl=u||null,this.dossierTypeEl=d||null,this.dossierAltEl=f||null,this.dossierAtmoEl=g||null,this.dossierDistEl=x||null,this.jumpBtnEl=m||null,this.footerEl=p||null,this.sceneManager=v,this.controls=M,this.onConfirmJump=_||(A=>v?.navigateToTarget?.(A)),this.onStateChange=T||(()=>{}),this.createRenderer=w||null,this.state=gn.CLOSED,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.zoomDuration=.75,this.transitionElapsed=.75,this.transitionActive=!1,this.transitionFromCamPos=new b(0,145,195),this.transitionFromLookAt=new b(0,0,0),this.lastTimeMs=0,this.solarOrbit={theta:.62,phi:.92,radius:225},this.level2Orbit={theta:.65,phi:1.15,radius:24},this.curCamPos=new b(110,145,170),this.curLookAt=new b(0,0,0),this.viewW=1280,this.viewH=720,this.dpr=1,this.mouseX=-9999,this.mouseY=-9999,this.isPointerDown=!1,this.downX=0,this.downY=0,this.lastPointerX=0,this.lastPointerY=0,this.dragDistance=0,this._suppressNextClick=!1,this.currentSolarNodes=[],this.currentLevel2Nodes=[],this.activeHitMeshes=[],this.mapScene=null,this.mapCamera=null,this.renderer=null,this.raycaster=new pv,this.planetRigs=new Map,this.sunRig=null,this.shipBeacon=null,this.l2RingsGroup=null,this.l2PinGroup=null,this.l2PinPool=[],this.l2OrbitRingPool=[],this.disposables=[],this.svgEl=null,this.labelEls=new Map,this.lineEls=new Map,this.tooltipEl=null,this._tmpVecA=new b,this._tmpVecB=new b,this._tmpVecC=new b,this._tmpDesiredCam=new b,this._tmpDesiredLook=new b,this._boundHandlers={},this._bindEvents()}_bindEvents(){this.backBtnEl&&(this._boundHandlers.onBackClick=e=>{e.stopPropagation(),this.backToSolarSystem()},this.backBtnEl.addEventListener("click",this._boundHandlers.onBackClick)),this.closeBtnEl&&(this._boundHandlers.onCloseClick=e=>{e.stopPropagation(),this.close()},this.closeBtnEl.addEventListener("click",this._boundHandlers.onCloseClick)),this.jumpBtnEl&&(this._boundHandlers.onJumpClick=e=>{e.stopPropagation(),this.confirmJump()},this.jumpBtnEl.addEventListener("click",this._boundHandlers.onJumpClick)),this.canvas&&(this._boundHandlers.onMouseDown=e=>{if(e.button!==0)return;const t=this.canvas.getBoundingClientRect();this.handlePointerDown(e.clientX-t.left,e.clientY-t.top,e.button)},this._boundHandlers.onMouseMove=e=>{if(!this.isOpen())return;const t=this.canvas.getBoundingClientRect();this.handlePointerMove(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onMouseUp=e=>{if(!this.isPointerDown)return;const t=this.canvas.getBoundingClientRect();this.handlePointerUp(e.clientX-t.left,e.clientY-t.top,e.button)},this._boundHandlers.onClick=e=>{if(this._suppressNextClick){this._suppressNextClick=!1,this.dragDistance=0;return}const t=this.canvas.getBoundingClientRect();this.handleClick(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onDblClick=e=>{if(this.dragDistance>zu)return;const t=this.canvas.getBoundingClientRect();this.handleDoubleClick(e.clientX-t.left,e.clientY-t.top)},this._boundHandlers.onWheel=e=>{this.isOpen()&&(e.preventDefault(),this.handleWheel(e.deltaY))},this._boundHandlers.onContextMenu=e=>{e.preventDefault(),this.state===gn.PLANET_ZOOM&&this.backToSolarSystem()},this.canvas.addEventListener("mousedown",this._boundHandlers.onMouseDown),this.canvas.addEventListener("click",this._boundHandlers.onClick),this.canvas.addEventListener("dblclick",this._boundHandlers.onDblClick),this.canvas.addEventListener("wheel",this._boundHandlers.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this._boundHandlers.onContextMenu)),typeof window<"u"&&(this._boundHandlers.onResize=()=>this.resize(),this._boundHandlers.onKeyDown=e=>this._onKeyDown(e),this._boundHandlers.onMouseMove&&window.addEventListener("mousemove",this._boundHandlers.onMouseMove),this._boundHandlers.onMouseUp&&window.addEventListener("mouseup",this._boundHandlers.onMouseUp),window.addEventListener("resize",this._boundHandlers.onResize),window.addEventListener("keydown",this._boundHandlers.onKeyDown))}_onKeyDown(e){if(e.code==="KeyM"&&!e.repeat){e.preventDefault(),this.isOpen()?this.close():this.open();return}this.isOpen()&&(e.code==="Escape"?(e.preventDefault(),this.close()):e.code==="Backspace"&&this.state===gn.PLANET_ZOOM?(e.preventDefault(),this.backToSolarSystem()):e.code==="Enter"&&this.state===gn.PLANET_ZOOM&&this.selectedNode&&(e.preventDefault(),this.confirmJump()))}isOpen(){return this.state!==gn.CLOSED}_trackDisposable(e){return e&&this.disposables.push(e),e}_ensureScene3D(e){if(!this.mapCamera){const t=Math.max(.5,(this.viewW||1280)/Math.max(1,this.viewH||720));this.mapCamera=new Nn(45,t,.1,1e4),this._syncCameraFromSpherical(this.curCamPos,this.curLookAt,this.solarOrbit,new b(0,0,0)),this.mapCamera.position.copy(this.curCamPos),this.mapCamera.lookAt(this.curLookAt)}this.mapScene||(this.mapScene=new Nc,this.mapScene.fog=new Sa(132626,55e-5),this._buildStaticBackdrop()),!this.renderer&&this.canvas&&(typeof this.createRenderer=="function"?this.renderer=this.createRenderer(this.canvas):this.renderer=new Bd({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer&&(this.renderer.setPixelRatio?.(Math.min(typeof window<"u"&&window.devicePixelRatio||1,2)),this.renderer.setSize?.(this.viewW,this.viewH,!1),this.renderer.setClearColor?.(132626,.94),"toneMapping"in this.renderer&&(this.renderer.toneMapping=xa,this.renderer.toneMappingExposure=1.15))),e&&!this.sunRig&&this._buildSunAndPlanets(e)}_buildStaticBackdrop(){const e=this.mapScene;e.add(new Yd(2638182,.52));const t=new $o(16773580,3.4,1500,.28);t.position.set(0,0,0),e.add(t);const n=new Gc(4835071,.36);n.position.set(-180,140,-160),e.add(n);const i=1100,s=new Float32Array(i*3),r=new Float32Array(i*3);for(let _=0;_<i;_++){const T=Math.sin(_*12.9898)*43758.5453,w=T-Math.floor(T),A=Math.sin(_*78.233)*28411.172,E=A-Math.floor(A),y=w*Math.PI*2,S=Math.acos(2*E-1),C=1100+_%7*140;s[_*3]=C*Math.sin(S)*Math.cos(y),s[_*3+1]=C*Math.cos(S),s[_*3+2]=C*Math.sin(S)*Math.sin(y);const L=.72+.28*(_%5/4);r[_*3]=L*(_%3===0?1:.75),r[_*3+1]=L*.88,r[_*3+2]=L}const a=this._trackDisposable(new Et);a.setAttribute("position",new yt(s,3)),a.setAttribute("color",new yt(r,3));const l=this._trackDisposable(new ci({size:3.2,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1}));e.add(new hi(a,l));const c=new Lt,h=[34,66,98,132,168,202],u=this._trackDisposable(new ws({color:3718648,transparent:!0,opacity:.14,depthWrite:!1}));for(const _ of h){const T=[];for(let E=0;E<128;E++){const y=E/128*Math.PI*2;T.push(new b(Math.cos(y)*_,-.4,Math.sin(y)*_))}const A=this._trackDisposable(new Et().setFromPoints(T));c.add(new ra(A,u))}const d=this._trackDisposable(new ws({color:16762478,transparent:!0,opacity:.11,depthWrite:!1}));for(let _=0;_<12;_++){const T=_/12*Math.PI*2,w=this._trackDisposable(new Et().setFromPoints([new b(Math.cos(T)*20,-.4,Math.sin(T)*20),new b(Math.cos(T)*212,-.4,Math.sin(T)*212)]));c.add(new wa(w,d))}e.add(c);const f=new Lt,g=this._trackDisposable(new Zo(2.1,0)),x=this._trackDisposable(new dn({color:16756290,wireframe:!1,transparent:!0,opacity:.95})),m=new ze(g,x);f.add(m);const p=this._trackDisposable(new Ss(2.6,3.2,32)),v=this._trackDisposable(new dn({color:16763760,transparent:!0,opacity:.72,side:Kt,depthWrite:!1})),M=new ze(p,v);M.rotation.x=Math.PI*.5,f.add(M),e.add(f),this.shipBeacon={group:f,diamond:m,ring:M},this.l2RingsGroup=new Lt,this.l2RingsGroup.visible=!1,e.add(this.l2RingsGroup),this.l2PinGroup=new Lt,this.l2PinGroup.visible=!1,e.add(this.l2PinGroup)}_buildSunAndPlanets(e){const t=this.mapScene,n=new Lt,i=this._trackDisposable(new Jt(ys,40,28)),s=this._trackDisposable(new dn({color:16766574})),r=new ze(i,s);n.add(r);const a=this._trackDisposable(new Jt(ys*1.24,32,24)),l=this._trackDisposable(Gu("#ff9f2e",1.15));n.add(new ze(a,l));const c=this._trackDisposable(new Jt(ys*1.55,24,18)),h=this._trackDisposable(new dn({color:16755248,transparent:!0,opacity:.14,depthWrite:!1,blending:Mn,side:In}));n.add(new ze(c,h));const u=this._trackDisposable(new Jt(ys*1.38,16,12)),d=new ze(u,this._trackDisposable(wl()));n.add(d),t.add(n),this.sunRig={group:n,mesh:r,hitMesh:d};const f=this._trackDisposable(new Jt(1,48,32)),g=this._trackDisposable(new Jt(1.018,36,24)),x=this._trackDisposable(new Jt(1.075,36,24)),m=this._trackDisposable(new Jt(1,20,14)),p=this._trackDisposable(new Jt(1,14,10)),v=this._trackDisposable(wl()),M=PM();M&&this._trackDisposable(M);for(const _ of e.planets){const T=_.key==="p5"?TM:ku,w=_.eccentricity||.04,A=[],E=144,y=new b;for(let ce=0;ce<E;ce++){const fe=ce/E*Math.PI*2,Se=_.semiMajorAxis*(1-w*w)/(1+w*Math.cos(fe))*157.5;y.set(Math.cos(fe)*Se,0,Math.sin(fe)*Se),_.orbitalPlaneQuat&&y.applyQuaternion(_.orbitalPlaneQuat),A.push(Sl(y))}const S=this._trackDisposable(new Et().setFromPoints(A)),C=this._trackDisposable(new ws({color:new ie(_.color),transparent:!0,opacity:.42,depthWrite:!1})),L=new ra(S,C);t.add(L);const N=new Lt,P=new Lt;N.add(P);const U=!!_.orbitalMap,G=this._trackDisposable(new He({color:_.key==="p5"||U?16777215:new ie(_.color),map:_.orbitalMap||(_.key==="p5"?M:null),emissive:_.orbitalEmissiveMap?new ie(16777215):new ie(_.color),emissiveMap:_.orbitalEmissiveMap||null,emissiveIntensity:_.orbitalEmissiveMap?1.15:.14,roughness:_.key==="p5"?.65:.72,metalness:.08})),B=new ze(f,G);B.scale.setScalar(T),P.add(B);const R=this._trackDisposable(new He({map:_.cloudMap||null,transparent:!0,opacity:_.cloudMap?.36:0,depthWrite:!1,roughness:.9})),O=new ze(g,R);O.scale.setScalar(T),O.visible=!!_.cloudMap,P.add(O);const j=this._trackDisposable(Gu(_.color,.76)),Q=new ze(x,j);if(Q.scale.setScalar(T),P.add(Q),_.key==="p5"){const ce=this._trackDisposable(new Ss(1.38*T,2.36*T,84)),fe=this._trackDisposable(new dn({color:8378623,transparent:!0,opacity:.38,side:Kt,depthWrite:!1})),ae=new ze(ce,fe);ae.rotation.x=Math.PI*.44,ae.rotation.y=.22,P.add(ae);const Se=this._trackDisposable(new Ss(1.56*T,1.88*T,72)),V=this._trackDisposable(new dn({color:12774655,transparent:!0,opacity:.26,side:Kt,depthWrite:!1})),Ie=new ze(Se,V);Ie.rotation.copy(ae.rotation),P.add(Ie)}const ne=new ze(p,v);ne.scale.setScalar(T*1.55),N.add(ne);const ye=this._trackDisposable(new Ss(T*1.48,T*1.66,48)),Z=this._trackDisposable(new dn({color:new ie(_.color),transparent:!0,opacity:.75,side:Kt,depthWrite:!1})),pe=new ze(ye,Z);pe.rotation.x=Math.PI*.5,pe.visible=!1,N.add(pe);const $=_.moons.map((ce,fe)=>{const ae=Math.max(.55,Math.min(1.15,ce.moonRadius/Math.max(1,_.worldRadius)*T*2.1)),Se=new Lt,V=this._trackDisposable(new He({color:13164287,emissive:3891345,emissiveIntensity:.28,roughness:.85})),Ie=new ze(m,V);Ie.scale.setScalar(ae),Se.add(Ie);const k=new ze(p,v);return k.scale.setScalar(Math.max(1.5,ae*2.2)),Se.add(k),N.add(Se),{index:fe,name:ce.name,group:Se,mesh:Ie,hitMesh:k,orbitChartR:T*(1.76+fe*.46)}});let ee=null;_.hasCrystalPalace&&(ee=this._buildCrystalPalace3DRig(T,p,v),N.add(ee.group)),t.add(N),this.planetRigs.set(_.key,{key:_.key,pChartR:T,orbitLine:L,orbitMat:C,rootGroup:N,spinGroup:P,globeMesh:B,globeMat:G,cloudMesh:O,cloudMat:R,haloMat:j,l1HitMesh:ne,selectRingMesh:pe,moonRigs:$,stationRig:ee,lastOrbitalMap:_.orbitalMap||null,lastEmissiveMap:_.orbitalEmissiveMap||null,lastCloudMap:_.cloudMap||null})}}_buildCrystalPalace3DRig(e,t,n){const i=new Lt,s=this._trackDisposable(new Ea(.95,.14,10,28)),r=this._trackDisposable(new He({color:16765572,emissive:16751400,emissiveIntensity:.72,metalness:.6,roughness:.25})),a=new ze(s,r);a.rotation.x=Math.PI*.5,i.add(a);const l=this._trackDisposable(new Zo(.45,0)),c=this._trackDisposable(new dn({color:16770227}));i.add(new ze(l,c));const h=this._trackDisposable(new en(.06,.06,1.9,6)),u=new ze(h,r);u.rotation.z=Math.PI*.5;const d=new ze(h,r);d.rotation.x=Math.PI*.5,i.add(u,d);const f=new ze(t,n);return f.scale.setScalar(1.9),i.add(f),{group:i,hitMesh:f,orbitChartR:e*1.96}}resize(){if(!this.canvas)return;const e=typeof window<"u"&&window.innerWidth||this.viewW||1280,t=typeof window<"u"&&window.innerHeight||this.viewH||720;this.dpr=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),this.viewW=Math.max(1,e),this.viewH=Math.max(1,t),this.canvas.width=Math.round(this.viewW*this.dpr),this.canvas.height=Math.round(this.viewH*this.dpr),this.mapCamera&&(this.mapCamera.aspect=this.viewW/Math.max(1,this.viewH),this.mapCamera.updateProjectionMatrix()),this.renderer&&(this.renderer.setPixelRatio?.(this.dpr),this.renderer.setSize?.(this.viewW,this.viewH,!1))}open(){this.resize(),typeof document<"u"&&document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),this.controls?.setEnabled?this.controls.setEnabled(!1):this.controls&&(this.controls.enabled=!1);const e=this.sceneManager?.getStarChartState?.()||null;this._ensureScene3D(e),this.state=gn.SOLAR_SYSTEM,this.selectedPlanetKey=null,this.selectedNode=null,this.hoveredNode=null,this.zoomProgress=0,this.zoomTarget=0,this.transitionActive=!1,this.transitionElapsed=this.zoomDuration,this.lastTimeMs=typeof performance<"u"?performance.now():0,e&&(this._syncScenePositions(e,this.lastTimeMs*.001),this.currentSolarNodes=this._buildSolarNodes3D(e),this._updateCamera(.016),this._updateLabelsAndLeaderLines(e)),this.overlayEl&&this.overlayEl.classList.remove("hidden"),this._syncHeaderAndDossier(),this.onStateChange(this.state)}close(){this.state!==gn.CLOSED&&(this.state=gn.CLOSED,this.hoveredNode=null,this.isPointerDown=!1,this._suppressNextClick=!1,this.canvas?.classList?.remove("dragging"),this.canvas?.classList?.remove("hovering"),this._clearLabelDOM(),this.renderer?.renderLists?.dispose&&this.renderer.renderLists.dispose(),this.overlayEl&&this.overlayEl.classList.add("hidden"),this.controls?.setEnabled?this.controls.setEnabled(!0):this.controls&&(this.controls.enabled=!0),this.onStateChange(this.state))}selectPlanetForZoom(e){if(!e)return;const t=this.sceneManager?.getStarChartState?.();this._ensureScene3D(t),this.selectedPlanetKey=e,this.state=gn.PLANET_ZOOM,this.zoomTarget=1,this.hoveredNode=null,this.mapCamera&&(this.transitionFromCamPos.copy(this.mapCamera.position),this.transitionFromLookAt.copy(this.curLookAt),this.transitionElapsed=0,this.transitionActive=!0);const n=this.planetRigs.get(e),i=e==="sun"?ys:n?.pChartR||ku;this.level2Orbit.radius=e==="sun"?46:i*4.4,this.level2Orbit.phi=1.12,this.level2Orbit.theta=.58,t?(this._syncScenePositions(t,0),this.l2RingsGroup&&(this.l2RingsGroup.visible=!0),this.l2PinGroup&&(this.l2PinGroup.visible=!0),this.currentLevel2Nodes=this._buildLevel2Nodes3D(t,e),this.selectedNode=this.currentLevel2Nodes[0]||null,this._updateLabelsAndLeaderLines(t)):(this.currentLevel2Nodes=[],this.selectedNode=null),this._syncHeaderAndDossier(),this.onStateChange(this.state)}backToSolarSystem(){this.state===gn.PLANET_ZOOM&&(this.state=gn.SOLAR_SYSTEM,this.zoomTarget=0,this.selectedNode=null,this.hoveredNode=null,this.l2RingsGroup&&(this.l2RingsGroup.visible=!1),this.l2PinGroup&&(this.l2PinGroup.visible=!1),this.mapCamera&&(this.transitionFromCamPos.copy(this.mapCamera.position),this.transitionFromLookAt.copy(this.curLookAt),this.transitionElapsed=0,this.transitionActive=!0),this._syncHeaderAndDossier(),this.onStateChange(this.state))}selectNodeById(e){const t=this.currentLevel2Nodes.find(n=>n.id===e);return t?(this.selectedNode=t,this._syncHeaderAndDossier(),t):null}confirmJump(){if(this.state!==gn.PLANET_ZOOM||!this.selectedNode)return null;const e=this.selectedNode.descriptor;return this.state=gn.JUMP_CONFIRMED,this.onStateChange(this.state,e),this.close(),this.onConfirmJump(e),e}getVisibleNodes(){return this.state===gn.PLANET_ZOOM?this.currentLevel2Nodes:this.currentSolarNodes}handlePointerDown(e,t,n=0){n===0&&(this.isPointerDown=!0,this.downX=e,this.downY=t,this.lastPointerX=e,this.lastPointerY=t,this.dragDistance=0,this._suppressNextClick=!1)}handlePointerMove(e,t){if(this.mouseX=e,this.mouseY=t,this.isPointerDown){const i=e-this.lastPointerX,s=t-this.lastPointerY;if(this.lastPointerX=e,this.lastPointerY=t,this.dragDistance=Math.hypot(e-this.downX,t-this.downY),this.dragDistance>zu){this._suppressNextClick=!0,this.canvas?.classList?.add("dragging"),this.hoveredNode=null,this.state===gn.PLANET_ZOOM?(this.level2Orbit.theta-=i*.0072,this.level2Orbit.phi=X.clamp(this.level2Orbit.phi-s*.0062,.16,2.94)):(this.solarOrbit.theta-=i*.0065,this.solarOrbit.phi=X.clamp(this.solarOrbit.phi-s*.0055,.14,1.48));return}}const n=this._pickNodeAt(e,t);this.hoveredNode=n,this.canvas?.classList?.toggle("hovering",!!n)}handlePointerUp(e,t,n=0){n===0&&(this.isPointerDown=!1,this.canvas?.classList?.remove("dragging"),this.dragDistance=Math.hypot(e-this.downX,t-this.downY))}handleWheel(e){const t=1+Math.max(-.35,Math.min(.35,e*.0011));if(this.state===gn.PLANET_ZOOM){const n=this.planetRigs.get(this.selectedPlanetKey),i=this.selectedPlanetKey==="sun"?22:(n?.pChartR||4.2)*2.1,s=this.selectedPlanetKey==="sun"?120:(n?.pChartR||4.2)*14;this.level2Orbit.radius=X.clamp(this.level2Orbit.radius*t,i,s)}else this.solarOrbit.radius=X.clamp(this.solarOrbit.radius*t,68,430)}handleClick(e,t){this.mouseX=e,this.mouseY=t;const n=this._pickNodeAt(e,t);n&&(this.state===gn.SOLAR_SYSTEM?this.selectPlanetForZoom(n.planetKey):this.state===gn.PLANET_ZOOM&&(this.selectedNode=n,this._syncHeaderAndDossier()))}handleDoubleClick(e,t){if(this.state!==gn.PLANET_ZOOM)return;const n=this._pickNodeAt(e,t);n&&(this.selectedNode=n,this._syncHeaderAndDossier(),this.confirmJump())}_pickNodeAt(e,t){if(!this.mapScene||!this.mapCamera)return null;this.mapScene.updateMatrixWorld(!0),this.mapCamera.updateMatrixWorld();const n=e/Math.max(1,this.viewW)*2-1,i=-(t/Math.max(1,this.viewH))*2+1;this.raycaster.setFromCamera({x:n,y:i},this.mapCamera);const s=this.getVisibleNodes(),r=[];for(const l of s)l.occluded||!l.hitMesh||(l.hitMesh.userData.starNode=l,r.push(l.hitMesh));const a=this.raycaster.intersectObjects(r,!1);return a.length>0&&a[0].object.userData.starNode||null}_syncHeaderAndDossier(){const e=this.state===gn.PLANET_ZOOM;if(this.backBtnEl&&this.backBtnEl.classList.toggle("hidden",!e),this.levelTagEl&&(this.levelTagEl.textContent=e?"SUB-MAPA PLANETARIO 3D // NIVEL 2":"CARTOGRAFÍA ESTELAR 3D // NIVEL 1"),this.titleEl)if(e&&this.selectedPlanetKey){const i=this.sceneManager?.getStarChartState?.()?.planets?.find(s=>s.key===this.selectedPlanetKey);this.titleEl.textContent=this.selectedPlanetKey==="sun"?"SOL CENTRAL // ESTRELLA TIPO G":`${i?.code||""} · ${i?.shortName||this.selectedPlanetKey.toUpperCase()}`}else this.titleEl.textContent="SISTEMA SOLAR CENTRAL";if(this.footerEl&&(this.footerEl.textContent=e?"Arrastra para orbitar el planeta en 3D · Rueda para zoom · Clic en nodo · Doble clic o Enter para saltar · Backspace volver":"Arrastra para orbitar en 3D · Rueda para zoom · Clic en un planeta para inspeccionarlo antes de saltar · [M] / [ESC] cerrar"),!this.dossierEl)return;if(!e||!this.selectedNode){this.dossierEl.classList.add("hidden");return}const t=this.selectedNode;this.dossierEl.classList.remove("hidden"),this.dossierBadgeEl&&(this.dossierBadgeEl.textContent=t.badge||"NODO TÁCTICO"),this.dossierTitleEl&&(this.dossierTitleEl.textContent=t.title||t.label),this.dossierDescEl&&(this.dossierDescEl.textContent=t.description||""),this.dossierTypeEl&&(this.dossierTypeEl.textContent=t.destTypeLabel||"Órbita"),this.dossierAltEl&&(this.dossierAltEl.textContent=t.insertionAlt||"--"),this.dossierAtmoEl&&(this.dossierAtmoEl.textContent=t.atmoGravity||"--"),this.dossierDistEl&&(this.dossierDistEl.textContent=t.distText||"--")}_syncCameraFromSpherical(e,t,n,i){e.set(i.x+n.radius*Math.sin(n.phi)*Math.cos(n.theta),i.y+n.radius*Math.cos(n.phi),i.z+n.radius*Math.sin(n.phi)*Math.sin(n.theta)),t.copy(i)}_getShipChartPos(e){let t=null,n=1/0;for(const s of e.planets){const r=e.shipPos.distanceTo(s.worldPos);r<n&&(n=r,t=s)}const i=Sl(e.shipPos);if(t&&n<t.worldRadius*6){const s=this.planetRigs.get(t.key);if(s){const r=e.shipPos.clone().sub(t.worldPos),a=r.length(),l=Math.max(1.01,a/Math.max(1,t.worldRadius)),c=a>1e-4?r.divideScalar(a):new b(0,1,0),h=s.rootGroup.position.clone().addScaledVector(c,s.pChartR*Math.min(2.8,l)),u=X.clamp(1-(n-t.worldRadius*2)/(t.worldRadius*4),0,1);return i.lerp(h,u)}}return i}_syncScenePositions(e,t){for(const n of e.planets){const i=this.planetRigs.get(n.key);if(!i)continue;Sl(n.worldPos,i.rootGroup.position),n.spinWorldQuat&&i.spinGroup.quaternion.copy(n.spinWorldQuat),n.orbitalMap&&n.orbitalMap!==i.lastOrbitalMap&&(i.globeMat.map=n.orbitalMap,i.globeMat.color.setHex(16777215),i.globeMat.needsUpdate=!0,i.lastOrbitalMap=n.orbitalMap),n.orbitalEmissiveMap!==i.lastEmissiveMap&&(i.globeMat.emissiveMap=n.orbitalEmissiveMap||null,i.globeMat.emissive.setHex(n.orbitalEmissiveMap?16777215:0),n.orbitalEmissiveMap||i.globeMat.emissive.set(n.color),i.globeMat.emissiveIntensity=n.orbitalEmissiveMap?1.15:.14,i.globeMat.needsUpdate=!0,i.lastEmissiveMap=n.orbitalEmissiveMap||null),n.cloudMap!==i.lastCloudMap&&(i.cloudMat.map=n.cloudMap||null,i.cloudMat.opacity=n.cloudMap?.36:0,i.cloudMesh.visible=!!n.cloudMap,i.cloudMat.needsUpdate=!0,i.lastCloudMap=n.cloudMap||null);const s=this.state===gn.PLANET_ZOOM&&this.selectedPlanetKey===n.key,r=this.hoveredNode?.planetKey===n.key;if(i.orbitMat.opacity=s?.85:r?.72:.34,i.selectRingMesh.visible=this.state===gn.SOLAR_SYSTEM&&r,i.moonRigs.forEach((a,l)=>{const c=n.moons[l];if(!c)return;const h=this._tmpVecA.copy(c.worldPos).sub(n.worldPos),u=h.length();u>1e-4?h.multiplyScalar(a.orbitChartR/u):h.set(a.orbitChartR,0,0),a.group.position.copy(h),a.group.rotation.y=t*.4}),i.stationRig&&e.crystalPalace){const a=this._tmpVecA.copy(e.crystalPalace.worldPos).sub(n.worldPos),l=a.length();l>1e-4?a.multiplyScalar(i.stationRig.orbitChartR/l):a.set(-i.stationRig.orbitChartR,1.5,0),i.stationRig.group.position.copy(a),i.stationRig.group.rotation.y=t*.55}}if(this.shipBeacon){const n=this._getShipChartPos(e);this.shipBeacon.group.position.copy(n),this.shipBeacon.diamond.rotation.y=t*1.4;const i=.88+Math.sin(t*4.5)*.25;this.shipBeacon.ring.scale.setScalar(i)}}_buildSolarNodes3D(e){const n=[{id:"sun",planetKey:"sun",key:"sun",label:"SOL CENTRAL",tagline:"Estrella central HDR · Iluminación del sistema",color:"#ffcc44",distKm:Math.max(0,Math.round(Math.max(0,e.shipPos.length()-e.sunWorldRadius)*19.35483870967742)),hitMesh:this.sunRig?.hitMesh||null,worldAnchor:new b(0,0,0),x:0,y:0,occluded:!1,descriptor:{type:"sun_orbit"}}];for(const i of e.planets){const s=this.planetRigs.get(i.key);s&&n.push({id:i.key,planetKey:i.key,key:i.key,planet:i,label:`${i.code} · ${i.shortName}`,shortName:i.shortName,tagline:i.tagline,color:i.color,accent:i.accent,distKm:i.distKm,hitMesh:s.l1HitMesh,worldAnchor:s.rootGroup.position.clone(),x:0,y:0,occluded:!1})}return n}_ensureL2PinPool(e){for(;this.l2PinPool.length<e;){const t=new Lt,n=this._trackDisposable(new en(.05,.05,.75,6)),i=this._trackDisposable(new dn({color:16777215})),s=new ze(n,i);s.position.y=.375;const r=this._trackDisposable(new Zo(.32,0)),a=this._trackDisposable(new dn({color:16777215})),l=new ze(r,a);l.position.y=.85;const c=this._trackDisposable(new Ss(.36,.48,24)),h=this._trackDisposable(new dn({color:16777215,side:Kt,transparent:!0,opacity:.82})),u=new ze(c,h);u.rotation.x=Math.PI*.5,u.position.y=.06;const d=this._trackDisposable(new Jt(.78,12,8)),f=new ze(d,this._trackDisposable(wl()));f.position.y=.6,t.add(s,l,u,f),this.l2PinGroup.add(t),this.l2PinPool.push({group:t,stemMat:i,head:l,headMat:a,ringMat:h,hitMesh:f})}}_ensureL2OrbitRingPool(e){for(;this.l2OrbitRingPool.length<e;){const t=[];for(let r=0;r<96;r++){const a=r/96*Math.PI*2;t.push(new b(Math.cos(a),0,Math.sin(a)))}const n=this._trackDisposable(new Et().setFromPoints(t)),i=this._trackDisposable(new ws({color:6214911,transparent:!0,opacity:.42,depthWrite:!1})),s=new ra(n,i);this.l2RingsGroup.add(s),this.l2OrbitRingPool.push({line:s,mat:i})}}_buildLevel2Nodes3D(e,t){if(t==="sun"){const x=Math.max(0,Math.round(Math.max(0,e.shipPos.length()-e.sunWorldRadius)*19.35483870967742));this._ensureL2PinPool(1),this._ensureL2OrbitRingPool(1);const m=this.l2OrbitRingPool[0];m.line.visible=!0,m.line.position.set(0,0,0),m.line.scale.setScalar(ys*1.65),m.mat.color.set("#ffd24c");const p=this.l2PinPool[0];p.group.visible=!0,p.group.position.set(ys*1.65,0,0),p.group.quaternion.identity(),p.stemMat.color.set("#ffd24c"),p.headMat.color.set("#ffd24c"),p.ringMat.color.set("#ffd24c");for(let v=1;v<this.l2PinPool.length;v++)this.l2PinPool[v].group.visible=!1;for(let v=1;v<this.l2OrbitRingPool.length;v++)this.l2OrbitRingPool[v].line.visible=!1;return[{id:"sun_orbit",label:"Órbita Panorámica del Sistema",title:"SOL CENTRAL // ÓRBITA DE OBSERVACIÓN",badge:"ESTRELLA PRINCIPAL",description:"Vista exterior segura frente al disco solar de plasma y las 5 órbitas keplerianas.",destTypeLabel:"Órbita Estelar",insertionAlt:"1.150.000 km",atmoGravity:"Corona Plasma · Radiación Extrema",distText:`${x.toLocaleString("es-ES")} km`,color:"#ffd24c",kind:"orbit",hitMesh:p.hitMesh,worldAnchor:p.group.position.clone(),x:0,y:0,occluded:!1,descriptor:{type:"sun_orbit"}}]}const n=e.planets.find(x=>x.key===t),i=this.planetRigs.get(t);if(!n||!i)return[];const s=[],r=i.rootGroup.position,a=i.pChartR,l=new b(0,1,0);let c=0,h=0;const u=a*1.52;this._ensureL2OrbitRingPool(1+i.moonRigs.length+(i.stationRig?1:0)),this._ensureL2PinPool(10);const d=this.l2OrbitRingPool[h++];d.line.visible=!0,d.line.position.copy(r),d.line.scale.setScalar(u),d.mat.color.set(n.color),d.mat.opacity=.56;const f=this.l2PinPool[c++];f.group.visible=!0;const g=new b(r.x+Math.cos(-.68)*u,r.y+.2,r.z+Math.sin(-.68)*u);if(f.group.position.copy(g),f.group.quaternion.identity(),f.stemMat.color.set(n.color),f.headMat.color.set(n.color),f.ringMat.color.set(n.color),s.push({id:`${n.key}_orbit`,label:"Órbita Baja",title:`${n.shortName} · ÓRBITA ESTACIONARIA`,badge:"ÓRBITA BAJA",description:n.tagline,destTypeLabel:"Órbita Planetaria",insertionAlt:`${Math.round(n.atmoTopAlt*1.15*.062).toLocaleString("es-ES")} km`,atmoGravity:`${n.atmoDesc} · ${n.gravity}`,distText:`${n.distKm.toLocaleString("es-ES")} km`,color:n.color,kind:"orbit",hitMesh:f.hitMesh,_pinObj:f,worldAnchor:g,x:0,y:0,occluded:!1,descriptor:{type:"planet_orbit",planetKey:n.key}}),n.landable){const x=i.spinGroup.quaternion,m=n.capLocalQuat||new rt,p=({id:v,label:M,title:_,badge:T,description:w,insertionAlt:A,color:E,localDir:y,descriptor:S})=>{const C=y.clone().normalize().applyQuaternion(m).applyQuaternion(x).normalize(),L=r.clone().addScaledVector(C,a*1.015),N=this.l2PinPool[c++];N.group.visible=!0,N.group.position.copy(L),N.group.quaternion.setFromUnitVectors(l,C),N.stemMat.color.set(E),N.headMat.color.set(E),N.ringMat.color.set(E),s.push({id:v,label:M,title:_,badge:T,description:w,destTypeLabel:"Descenso Atmosférico",insertionAlt:A,atmoGravity:`${n.atmoDesc} · ${n.gravity}`,distText:`${n.distKm.toLocaleString("es-ES")} km`,color:E,kind:"surface",surfaceNormal:C,hitMesh:N.hitMesh,_pinObj:N,worldAnchor:L,x:0,y:0,occluded:!1,descriptor:S})};if(n.key==="p1"){const v=[{landmarkId:"hometree",label:"Nación del Bosque · Árbol-Casa",short:"Bosque (Hometree)",badge:"NACIÓN DEL BOSQUE",desc:"Gran Continente Selvático continuo (45% del globo): árboles gigantes paraguas, secuoyas, manadas y ríos bioluminiscentes.",fallbackDir:new b(.15,.96,.22),color:"#44f0a8"},{landmarkId:"metkayina",label:"Nación del Agua · Metkayina",short:"Agua (Metkayina)",badge:"NACIÓN DEL AGUA · BUCEO",desc:"Océano y Archipiélago coralino: aldeas flotantes sobre balsas, laguna turquesa inmersiva, Tulkun, Ilu y arrecifes luminosos.",fallbackDir:new b(-.78,.16,.6),color:"#26e8ff"},{landmarkId:"ashland",label:"Nación de la Ceniza · Volcanes",short:"Ceniza (Mangkwan)",badge:"NACIÓN DE LA CENIZA",desc:"Península volcánica oscura tras la cordillera basáltica: 3 volcanes humeantes, fisuras de lava, árboles calcinados y hogueras.",fallbackDir:new b(.84,-.05,.54),color:"#ff6c34"},{landmarkId:"hallelujah",label:"Montañas Aleluya",short:"Aleluya",badge:"ZONA DE MONTAÑA",desc:"Islas rocosas flotantes entre cascadas, lianas luminosas y bandadas de Ikran y Toruk.",fallbackDir:new b(-.24,.86,-.45),color:"#7ef5c4"},{landmarkId:"souls",label:"Árbol de las Almas",short:"Árbol Almas",badge:"SANTUARIO",desc:"Cráter sagrado rodeado de arcos de piedra y filamentos luminosos de Eywa.",fallbackDir:new b(.28,.88,-.38),color:"#c978ff"}];for(const M of v){const _=n.pandoraLandmarks?.find(T=>T.id===M.landmarkId);p({id:`p1_surface_${M.landmarkId}`,label:M.short,title:M.label.toUpperCase(),badge:M.badge,description:M.desc,insertionAlt:"1.850 m s.n.m.",color:M.color,localDir:_?.capDir||M.fallbackDir,descriptor:{type:"planet_surface",planetKey:"p1",landmarkId:M.landmarkId}})}}else if(n.key==="p2"&&Array.isArray(n.nightCityLandmarks))for(const v of n.nightCityLandmarks)p({id:`p2_surface_${v.id}`,label:v.shortName,title:v.name.toUpperCase(),badge:v.badge||"DISTRITO",description:v.description,insertionAlt:v.id==="city_center"?"450 m (Nivel Cañón)":"720 m (Vuelo Rasante)",color:v.color,localDir:v.capDir||new b(0,1,0),descriptor:{type:"planet_surface",planetKey:"p2",landmarkId:v.id}});else{const v={p2:{short:"Corpo Plaza (Superficie)",title:"NIGHT CITY // CAÑÓN CENTRAL",desc:"Descenso atravesando nubes hacia Corpo Plaza y los 7 distritos reales de Night City."},p3:{short:"Ciudadela Fortaleza",title:"PERUGIUS // CIUDADELA DEL VALLE",desc:"Planeo sobre valles boscosos hacia la fortaleza flotante y murallas doradas del mundo medieval."},p4:{short:"Distrito del Senado",title:"CORUSCANT // PLAZA DEL SENADO",desc:"Entrada atmosférica hacia la ecumenópolis global con anillos de luz dorada y tráfico orbital."}}[n.key];p({id:`${n.key}_surface`,label:v.short,title:v.title,badge:"ATERRIZAJE EN SUPERFICIE",description:v.desc,insertionAlt:n.key==="p2"?"450 m (Nivel Cañón)":"2.100 m s.n.m.",color:n.accent,localDir:new b(.32,.85,.42),descriptor:{type:"planet_surface",planetKey:n.key}})}}if(n.hasCrystalPalace&&e.crystalPalace&&i.stationRig){const x=Math.round(e.crystalPalace.distWorld*(n.kmScale/2976)),m=r.clone().add(i.stationRig.group.position),p=this.l2OrbitRingPool[h++];p.line.visible=!0,p.line.position.copy(r),p.line.scale.setScalar(i.stationRig.orbitChartR),p.mat.color.set("#ffae42"),p.mat.opacity=.48,s.push({id:"station_crystal_palace",label:"Crystal Palace",title:"ESTACIÓN ORBITAL CRYSTAL PALACE",badge:"ESTACIÓN ESPACIAL",description:"Plataforma orbital de lujo sobre Night City con 36 hangares iluminados y anillos rotatorios.",destTypeLabel:"Estación Orbital",insertionAlt:"Órbita Alta (320 km)",atmoGravity:"Gravedad Artificial · Vacío",distText:`${x.toLocaleString("es-ES")} km`,color:"#ffae42",kind:"station",hitMesh:i.stationRig.hitMesh,worldAnchor:m,x:0,y:0,occluded:!1,descriptor:{type:"station",stationId:"crystal_palace"}})}n.moons.forEach((x,m)=>{const p=i.moonRigs[m];if(!p)return;const v=this.l2OrbitRingPool[h++];v.line.visible=!0,v.line.position.copy(r),v.line.scale.setScalar(p.orbitChartR),v.mat.color.set("#9ec5ff"),v.mat.opacity=.34;const M=r.clone().add(p.group.position),_=Math.max(1,Math.round(Math.max(0,x.distWorld-x.moonRadius)*(n.kmScale/(620*4.8)))),T=Math.round(x.baseRadiusWorld*(n.kmScale/(620*4.8)));s.push({id:`${n.key}_moon_${m}`,label:x.name,title:x.name.toUpperCase(),badge:"SATÉLITE NATURAL",description:`Órbita lunar estacionaria alrededor de ${x.name} con seguimiento gravitatorio sincronizado.`,destTypeLabel:"Órbita Lunar",insertionAlt:`Órbita a ${T.toLocaleString("es-ES")} km`,atmoGravity:"Exosfera tenue · 0.18 G",distText:`${_.toLocaleString("es-ES")} km`,color:"#b8d8ff",kind:"moon",hitMesh:p.hitMesh,worldAnchor:M,x:0,y:0,occluded:!1,descriptor:{type:"moon",planetKey:n.key,moonIndex:x.index}})});for(let x=c;x<this.l2PinPool.length;x++)this.l2PinPool[x].group.visible=!1;for(let x=h;x<this.l2OrbitRingPool.length;x++)this.l2OrbitRingPool[x].line.visible=!1;for(let x=0;x<s.length;x++){const m=s[x];if(m._pinObj){const p=this.selectedNode?.id===m.id,v=this.hoveredNode?.id===m.id;m._pinObj.head.scale.setScalar(p?1.45:v?1.25:1)}}return s}_refreshLevel2NodeSelectionPreservingId(e,t){if(e){const n=this.currentLevel2Nodes.find(i=>i.id===e);n&&(this.selectedNode=n)}t&&(this.hoveredNode=this.currentLevel2Nodes.find(n=>n.id===t)||null)}_updateCamera(e){const t=this.state===gn.PLANET_ZOOM,n=this._tmpDesiredLook.set(0,0,0);if(t&&this.selectedPlanetKey&&this.selectedPlanetKey!=="sun"){const s=this.planetRigs.get(this.selectedPlanetKey);s&&n.copy(s.rootGroup.position)}const i=t?this.level2Orbit:this.solarOrbit;if(this._syncCameraFromSpherical(this._tmpDesiredCam,n,i,n),this.transitionActive){this.transitionElapsed=Math.min(this.zoomDuration,this.transitionElapsed+e);const s=this.transitionElapsed/Math.max(.01,this.zoomDuration),r=CM(s);this.zoomProgress=t?r:1-r,this.curCamPos.lerpVectors(this.transitionFromCamPos,this._tmpDesiredCam,r),this.curLookAt.lerpVectors(this.transitionFromLookAt,this._tmpDesiredLook,r),s>=1&&(this.transitionActive=!1,this.zoomProgress=t?1:0)}else{const s=1-Math.exp(-12*Math.max(.001,e));this.curCamPos.lerp(this._tmpDesiredCam,s),this.curLookAt.lerp(this._tmpDesiredLook,s),this.zoomProgress=t?1:0}this.mapCamera.position.copy(this.curCamPos),this.mapCamera.lookAt(this.curLookAt),this.mapCamera.updateMatrixWorld()}_ensureLabelOverlayInit(){return!this.labelsEl||typeof document>"u"?!1:(this.svgEl||(this.svgEl=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svgEl.setAttribute("class","sm-leader-svg"),this.labelsEl.appendChild(this.svgEl)),this.tooltipEl||(this.tooltipEl=document.createElement("div"),this.tooltipEl.className="sm-hover-tooltip",this.tooltipEl.style.display="none",this.labelsEl.appendChild(this.tooltipEl)),!0)}_clearLabelDOM(){for(const e of this.labelEls.values())e.style.display="none";for(const e of this.lineEls.values())e.style.display="none";this.tooltipEl&&(this.tooltipEl.style.display="none")}_updateLabelsAndLeaderLines(e){const t=this.getVisibleNodes(),n=this.state===gn.PLANET_ZOOM,i=n&&this.selectedPlanetKey&&this.selectedPlanetKey!=="sun"?this.planetRigs.get(this.selectedPlanetKey):null,s=i?i.rootGroup.position:null,r=this._tmpVecA,a=this._tmpVecB,l=n&&s?s.clone().project(this.mapCamera):null,c=l?(l.x*.5+.5)*this.viewW:this.viewW*.5,h=l?(-l.y*.5+.5)*this.viewH:this.viewH*.5;for(const g of t){if(g.kind==="surface"&&g.surfaceNormal&&s){a.copy(this.mapCamera.position).sub(s).normalize();const x=g.surfaceNormal.dot(a);g.facingDot=x,g.occluded=x<.08}else g.facingDot=1,g.occluded=!1;r.copy(g.worldAnchor).project(this.mapCamera),(r.z<-1||r.z>1)&&(g.occluded=!0),g.x=(r.x*.5+.5)*this.viewW,g.y=(-r.y*.5+.5)*this.viewH}if(!this._ensureLabelOverlayInit())return;const u=new Set,d=(g,x,m,p,v,M,_,T="")=>{u.add(g);let w=this.labelEls.get(g);if(w||(w=document.createElement("div"),this.labelsEl.appendChild(w),this.labelEls.set(g,w)),w.className=`sm-label ${T}`.trim(),w.style.display="block",w.style.left=`${Math.round(v)}px`,w.style.top=`${Math.round(M)}px`,_&&(w.style.borderColor=_),w.textContent!==x&&(w.textContent=x),Math.hypot(v-m,M-p)>2){let A=this.lineEls.get(g);A||(A=document.createElementNS("http://www.w3.org/2000/svg","line"),A.setAttribute("stroke-width","1.1"),A.setAttribute("stroke-opacity","0.55"),this.svgEl.appendChild(A),this.lineEls.set(g,A)),A.style.display="block",A.setAttribute("x1",`${m.toFixed(1)}`),A.setAttribute("y1",`${p.toFixed(1)}`),A.setAttribute("x2",`${v.toFixed(1)}`),A.setAttribute("y2",`${(M-2).toFixed(1)}`),A.setAttribute("stroke",_||"#5ed4ff")}};for(const g of t){if(g.occluded||g.x<-80||g.x>this.viewW+80||g.y<-80||g.y>this.viewH+80)continue;const x=n&&this.selectedNode?.id===g.id,m=this.hoveredNode?.id===g.id;let p=g.x,v=g.y-18;if(n&&g.kind==="surface"){const _=g.x-c,T=g.y-h,w=Math.max(1,Math.hypot(_,T));p=g.x+_/w*26,v=g.y+T/w*26-6}const M=`${x?"selected":""} ${m?"hovered":""}`.trim();d(g.id,g.label,g.x,g.y,p,v,x?"#ffae42":g.color,M)}if(this.shipBeacon&&e&&(r.copy(this.shipBeacon.group.position).project(this.mapCamera),r.z>=-1&&r.z<=1)){const g=(r.x*.5+.5)*this.viewW,x=(-r.y*.5+.5)*this.viewH,m=e.isUnderwater?"[ TÚ · OCÉANO ]":e.mode==="SURFACE"?"[ TÚ · ATMÓSFERA ]":"[ TÚ ]";d("__self_beacon__",m,g,x,g,x,"#ffae42","self-beacon")}for(const[g,x]of this.labelEls.entries())u.has(g)||(x.style.display="none");for(const[g,x]of this.lineEls.entries())u.has(g)||(x.style.display="none");const f=this.hoveredNode;if(f&&!f.occluded&&!n){this.tooltipEl.style.display="block";const g=Math.min(this.viewW-275,Math.max(16,f.x+18)),x=Math.max(76,Math.min(this.viewH-125,f.y-18));this.tooltipEl.style.left=`${Math.round(g)}px`,this.tooltipEl.style.top=`${Math.round(x)}px`,this.tooltipEl.style.borderColor=f.color||"#ffae42",this.tooltipEl.innerHTML=`<h4>${f.label}</h4><div class="sm-ht-dist">DISTANCIA: ${Number(f.distKm||0).toLocaleString("es-ES")} KM · CLIC PARA ZOOM</div><p>${f.tagline||""}</p>`}else this.tooltipEl.style.display="none"}updateAndDraw(e=typeof performance<"u"?performance.now():0){if(!this.isOpen()||!this.sceneManager)return;const t=this.lastTimeMs?Math.min(.1,Math.max(.001,(e-this.lastTimeMs)/1e3)):.016;this.lastTimeMs=e;const n=e*.001,i=this.sceneManager.getStarChartState();if(this._ensureScene3D(i),!this.mapScene||!this.mapCamera)return;this._syncScenePositions(i,n);const s=this.state===gn.PLANET_ZOOM;if(this.l2RingsGroup&&(this.l2RingsGroup.visible=s),this.l2PinGroup&&(this.l2PinGroup.visible=s),s&&this.selectedPlanetKey){const r=this.selectedNode?.id||null,a=this.hoveredNode?.id||null;this.currentLevel2Nodes=this._buildLevel2Nodes3D(i,this.selectedPlanetKey),this._refreshLevel2NodeSelectionPreservingId(r,a)}else this.currentSolarNodes=this._buildSolarNodes3D(i);this._updateCamera(t),this._updateLabelsAndLeaderLines(i),this.renderer&&this.renderer.render(this.mapScene,this.mapCamera)}dispose(){this.close(),this.backBtnEl&&this._boundHandlers.onBackClick&&this.backBtnEl.removeEventListener("click",this._boundHandlers.onBackClick),this.closeBtnEl&&this._boundHandlers.onCloseClick&&this.closeBtnEl.removeEventListener("click",this._boundHandlers.onCloseClick),this.jumpBtnEl&&this._boundHandlers.onJumpClick&&this.jumpBtnEl.removeEventListener("click",this._boundHandlers.onJumpClick),this.canvas&&(this._boundHandlers.onMouseDown&&this.canvas.removeEventListener("mousedown",this._boundHandlers.onMouseDown),this._boundHandlers.onClick&&this.canvas.removeEventListener("click",this._boundHandlers.onClick),this._boundHandlers.onDblClick&&this.canvas.removeEventListener("dblclick",this._boundHandlers.onDblClick),this._boundHandlers.onWheel&&this.canvas.removeEventListener("wheel",this._boundHandlers.onWheel),this._boundHandlers.onContextMenu&&this.canvas.removeEventListener("contextmenu",this._boundHandlers.onContextMenu)),typeof window<"u"&&(this._boundHandlers.onMouseMove&&window.removeEventListener("mousemove",this._boundHandlers.onMouseMove),this._boundHandlers.onMouseUp&&window.removeEventListener("mouseup",this._boundHandlers.onMouseUp),this._boundHandlers.onResize&&window.removeEventListener("resize",this._boundHandlers.onResize),this._boundHandlers.onKeyDown&&window.removeEventListener("keydown",this._boundHandlers.onKeyDown));for(const e of this.disposables)e?.dispose?.();this.disposables=[],this.renderer&&(this.renderer.renderLists?.dispose?.(),this.renderer.dispose?.(),this.renderer=null),this.labelsEl&&(this.labelsEl.innerHTML=""),this.labelEls.clear(),this.lineEls.clear(),this.svgEl=null,this.tooltipEl=null,this.mapScene=null,this.mapCamera=null}}const af=document.getElementById("app-canvas"),Hu=document.getElementById("loading-screen"),$r=document.getElementById("loading-status"),Vu=document.getElementById("loading-bar-fill"),El=document.getElementById("hud-mode"),Wu=document.getElementById("hud-sector"),Xu=document.getElementById("hud-nearest"),qu=document.getElementById("hud-altitude"),Yu=document.getElementById("hud-time-btn"),fo=document.getElementById("hud-time"),Qr=document.getElementById("pandora-landmarks-bar"),ju=document.getElementById("hud-speed"),Ku=document.getElementById("hud-speed-unit"),Zu=document.getElementById("hud-speed-bar"),$u=document.getElementById("hud-mult"),Al=document.getElementById("hud-boost"),Qu=document.getElementById("hud-coords"),Co=new Nc;Co.background=new ie(198156);const Ci=new Nn(60,window.innerWidth/window.innerHeight,.05,48e4);Co.add(Ci);const Di=new Bd({canvas:af,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});Di.setSize(window.innerWidth,window.innerHeight);Di.setPixelRatio(Math.min(window.devicePixelRatio,2));Di.outputColorSpace=jt;Di.toneMapping=xa;Di.toneMappingExposure=1.05;Di.shadowMap.enabled=!0;Di.shadowMap.type=td;function DM(o,e){o.kernelRadius=6,o.minDistance=.001,o.maxDistance=.04,o.enabled=!1,o.ssaoMaterial.uniforms.uLogFar={value:Math.log2(e.far+1)};let t=o.ssaoMaterial.fragmentShader;t=t.replace("uniform float cameraFar;",`uniform float cameraFar;
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
					float sampleDepth = -samplePoint.z / 65.0;`).replace("gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );","gl_FragColor = vec4( vec3( 1.0 - occlusion * 0.42 ), 1.0 );"),o.ssaoMaterial.fragmentShader=t,o.ssaoMaterial.needsUpdate=!0,o.overrideVisibility=function(){const n=this.scene,i=this._visibilityCache;n.traverse(s=>{i.set(s,s.visible),(s.isPoints||s.isLine||s.userData?.skipSSAO||s.isMesh&&s.material&&!Array.isArray(s.material)&&s.material.transparent&&!s.isWater)&&(s.visible=!1)})}}const Bs=new yv(Di),IM=new Mv(Co,Ci);Bs.addPass(IM);const Da=new ls(Co,Ci,window.innerWidth,window.innerHeight,16);DM(Da,Ci);Bs.addPass(Da);const Qc=new So(new Ue(window.innerWidth,window.innerHeight),.42,.34,.96);Bs.addPass(Qc);const Jc=new Kd(fy);Jc.enabled=!1;Bs.addPass(Jc);const LM=new Ev;Bs.addPass(LM);const lf=Av(8500,19e4);Co.add(lf);const cf=new Tv(Ci,420),as=new Cv(Ci,af),Hn=new wM({scene:Co,camera:Ci,renderer:Di,controls:as,starfield:lf,cockpitParticles:cf,bloomPass:Qc,ssaoPass:Da,radialBlurPass:Jc,onStatusUpdate:o=>{if(El){El.textContent=o.modeText;const e=o.isUnderwater?"mode-sub":o.isSurface?"mode-atmo":"mode-orbit";El.className=`hud-value ${e}`}if(Wu&&(Wu.textContent=o.sectorName),Xu&&(Xu.textContent=o.nearestText),qu&&(qu.textContent=o.altitudeText),fo&&(fo.textContent=`${o.timeScale}x · ${o.solarPhaseName}`,fo.className=`hud-value ${o.solarPhaseName==="DÍA"?"phase-day":o.solarPhaseName==="ATARDECER"?"phase-dusk":o.solarPhaseName==="NOCHE"?"phase-night":""}`),Qr)if(o.pandoraLandmarks){Qr.classList.remove("hidden");for(const e of o.pandoraLandmarks){const t=Qr.querySelector(`small[data-dist="${e.id}"]`);t&&(t.textContent=`${e.distKm.toLocaleString("es-ES")} km`)}}else Qr.classList.add("hidden")}}),hf=()=>{const o=Hn.cycleTimeScale();if(fo){const e=fo.textContent.split("·")[1]?.trim()||"ESPACIO";fo.textContent=`${o}x · ${e}`}};Yu&&Yu.addEventListener("click",o=>{o.stopPropagation(),hf()});const ga=new RM({overlayEl:document.getElementById("star-map-overlay"),canvasEl:document.getElementById("star-map-canvas"),labelsEl:document.getElementById("star-map-labels"),backBtnEl:document.getElementById("star-map-back-btn"),closeBtnEl:document.getElementById("star-map-close-btn"),levelTagEl:document.getElementById("star-map-level-tag"),titleEl:document.getElementById("star-map-title"),dossierEl:document.getElementById("star-map-dossier"),dossierBadgeEl:document.getElementById("dossier-badge"),dossierTitleEl:document.getElementById("dossier-title"),dossierDescEl:document.getElementById("dossier-desc"),dossierTypeEl:document.getElementById("dossier-type"),dossierAltEl:document.getElementById("dossier-alt"),dossierAtmoEl:document.getElementById("dossier-atmo"),dossierDistEl:document.getElementById("dossier-dist"),jumpBtnEl:document.getElementById("star-map-jump-btn"),footerEl:document.getElementById("star-map-footer"),sceneManager:Hn,controls:as,onConfirmJump:o=>Hn.navigateToTarget(o)}),NM=new EM({containerEl:document.getElementById("tactical-minimap"),canvasEl:document.getElementById("minimap-canvas"),scaleEl:document.getElementById("minimap-scale"),sceneManager:Hn,onOpenStarMap:()=>ga.open()});document.querySelectorAll(".pandora-lm-btn").forEach(o=>{o.addEventListener("click",e=>{e.stopPropagation();const t=o.dataset.landmark;t&&Hn.navigateToPandoraLandmark(t)})});window.addEventListener("keydown",o=>{ga.isOpen()||(["Digit1","Numpad1"].includes(o.code)&&Hn.navigateToTarget("1"),["Digit2","Numpad2"].includes(o.code)&&Hn.navigateToTarget("2"),["Digit3","Numpad3"].includes(o.code)&&Hn.navigateToTarget("3"),["Digit4","Numpad4"].includes(o.code)&&Hn.navigateToTarget("4"),["Digit5","Numpad5"].includes(o.code)&&Hn.navigateToTarget("5"),["Digit6","Numpad6"].includes(o.code)&&Hn.navigateToTarget("6"),o.code==="KeyT"&&!o.repeat&&hf())});window.addEventListener("resize",()=>{const o=window.innerWidth,e=window.innerHeight;Ci.aspect=o/e,Ci.updateProjectionMatrix(),Di.setSize(o,e),Bs.setSize(o,e),Da.setSize(o,e),Qc.resolution.set(o,e)});async function UM(){try{await Hn.init((o,e)=>{Vu&&(Vu.style.width=`${o}%`),$r&&($r.textContent=e)})}catch(o){console.error("Error inicializando simulador:",o),$r&&($r.textContent="Error cargando modelos GLB. Verifica public/models/.")}finally{setTimeout(()=>{Hu&&Hu.classList.add("hidden")},300)}}const Ju=new jd;function uf(){requestAnimationFrame(uf);const o=Ju.getDelta();Hn.update(o),as.update(o),Hn.syncCameraPostFlight();const e=as.getCurrentSpeed(),t=as.getPulseRatio();cf.update(o,e,t);const n=Hn.mode==="ORBIT",i=n?(e*1.4).toFixed(1):Math.round(e*22);if(ju&&(ju.textContent=i),Ku&&(Ku.textContent=n?"km/s":"m/s"),Zu){const s=(n?1400:120)*as.speedMultiplier,r=Math.min(100,e/Math.max(1,s)*100);Zu.style.width=`${r}%`}if($u&&($u.textContent=`x${as.speedMultiplier.toFixed(1)}`),Al){const s=t>.1;Al.textContent=as.autopilot?"PILOTO AUTO":s?"MOTOR PULSE":"EN ESPERA",Al.className=s?"status-active":"status-standby"}if(Qu){const s=Ci.position;Qu.textContent=`${s.x.toFixed(0)}, ${s.y.toFixed(0)}, ${s.z.toFixed(0)}`}ga.isOpen()?ga.updateAndDraw(performance.now()):NM.update(Ju.elapsedTime),Bs.render()}UM();uf();
